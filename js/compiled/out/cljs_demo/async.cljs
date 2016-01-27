(ns cljs-demo.async
  (:refer-clojure :exclude [update])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [devcards.core :as dc :refer-macros [defcard-rg defcard-doc]]
            [cljs.core.async :refer [chan >! <! pipe]]
            [ajax.core :as ajax]
            [clojure.string :as str]
            [reagent.core :as reagent]
            [cljs.core.async :refer [<! >! chan] :as async]
            [hickory.core :as hickory]
            [hickory.select :as select])
  (:import [goog Uri]))

(def medical-marijuana-url "https://data.colorado.gov/api/views/7wau-rnkf/rows.csv?accessType=DOWNLOAD")

;;;;;;;;;;;;;;;;;;;;
;; Ajax functions ;;
;;;;;;;;;;;;;;;;;;;;

(defn ajax-get
  "Wrap a GET request in a core.async channel"
  [url]
  (let [c (chan)] ; Create a core.async channel
    (ajax/GET url {:handler #(go (>! c %))}) ; Place response on channel
    c) ; return the channel
  )

(defn parse-csv [raw]
  (let [lines (str/split-lines raw)
        tokens (map #(str/split % #",") lines)]
    {:header (first tokens)
     :body (rest tokens)}))

(defn ajax-get-csv
  "Get a url and parse its successful response as csv
   Return a core.async channel of parsed csv"
  [url]
  (let [c (chan)]
    (go (let [resp (<! (ajax-get url))]
          (>! c (parse-csv resp))))
    c))

(defn get-mj-data
  "Get medical marijuana usage data as parsed CSV and update atom"
  [state-atom]
  (go
    (let [parsed-resp (<! (ajax-get-csv medical-marijuana-url))]
      (swap! state-atom assoc :mj-data parsed-resp))))

;;;;;;;;;;;;;;;;;;;;;;;;
;; Reagent Components ;;
;;;;;;;;;;;;;;;;;;;;;;;;

(defn mj-data-component [state-atom]
  (if-let [{:keys [header body]} (get-in @state-atom [:mj-data])]
    [:table
     [:thead>tr (map (fn [el] ^{:key el} [:td el]) header)]
     [:tbody (map (fn [row]
                    ^{:key (first row)}
                    [:tr (map (fn [el] ^{:key el} [:td el]) row)])
                  body)]]
    [:p "No data has been retrieved"]))

(defn mj-component [state-atom]
  [:div.medical-marijuana
   [:button {:on-click #(get-mj-data state-atom)
             :style {:display "inline-block"}}
    "Get Medical Marijuana Data"]
   [:button {:on-click #(swap! state-atom dissoc :mj-data)
             :style {:display "inline-block"}}
    "Clear Data"]
   [mj-data-component state-atom]])


;; Example devcard

(defcard-doc
  "# Async Programming"
  "Using `core.async`, we can do asynchronous programming with **no callbacks**"
  "`core.async` provides a _library_ that works like go's concurrency model in Clojure and Clojurescript"
  "- Channels `(chan)`
   - \"goroutines\" or green threads `(go)`
   - Points of concurrency at `<!` (\"take\") and `>!` (\"put\")")

(defcard-rg async-example1-mj-data-card
  "_A table of medical marijuana data stored at data.colorado.gov_"
  (fn [state-atom _]
    [mj-component state-atom])
  (reagent/atom {}))

(defcard-doc
  "## `mj-data-card` source"
  (dc/mkdn-pprint-source get-mj-data))

(defcard-doc
  "## `ajax-get-csv` and `ajax-get`"
  (dc/mkdn-pprint-source ajax-get-csv)
  (dc/mkdn-pprint-source ajax-get))


;; Web Crawler

(defn starts-with [s pre]
  (and (<= (count pre) (count s))
       (= (subs s 0 (count pre)) pre)))

(defn parse-html [html]
  (-> html hickory/parse hickory/as-hickory))

(defn select-urls [dom]
  (let [anchors (select/select (select/and (select/tag :a)
                                           (select/attr :href))
                               dom)]
    (map #(:href (:attrs %)) anchors)))


(defn split-url [url]
  (let [uri (Uri. url)]
    [(str (.getScheme uri) "://" (.getDomain uri))
     (.getPath uri)]))

(defn standardize-urls [base urls]
  (let [[host path] (split-url base)]
    (map (fn [s]
           (cond
             (starts-with s "http") s
             (starts-with s "//") (str "http:" s)
             (starts-with s "/") (str host s)
             :else (str host path s)))
         urls)))


(defn crawl-url
  "Query a url and parse out urls inside of it"
  [url]
  (let [c (chan)]
     ;; ->>: Thread macro allows pipelining functions
    (go (->> (<! (ajax-get url)) ; get the page
             parse-html
             select-urls         ; get a list of urls in page
             (standardize-urls url)
             set                 ; convert to a set (removing duplicates)
             (async/onto-chan c)) ; put all urls on the output channel
        )
    c) ; return the channel
  )

(defn web-crawler
  "Recursively crawl urls `n` levels deep"
  [url n log]
  (swap! log conj url)
  (if (> n 0)                           ; Recursive exit criteria
    (let [urls (crawl-url url)]         ; Get urls referenced in page (channel)
      (go-loop [url (<! urls)]          ; Loop through urls
        (when url                       ; Check for no more urls
          (web-crawler url (- n 1) log) ; Recursively crawl
          (recur (<! urls))))           ; Loop again
      )))

(defn web-crawler-component [url-atom depth-atom log-atom]
  [:div
   [:div [:label "Url to query: "]
    [:input {:type "text"
             :value @url-atom
             :on-change #(reset! url-atom (.. % -target -value))}]]

   [:div [:label "Depth to go: "]
    [:input {:type "number"
             :value @depth-atom
             :on-change #(reset! depth-atom (.. % -target -value))}]]
   [:button {:on-click #(do (reset! log-atom [])
                            (web-crawler @url-atom @depth-atom log-atom))}
    "Crawl!"]
   [:div
    [:h3 "Crawled URLs:"]
    [:ul (for [log @log-atom]
           [:ul log])]]])




(defcard-rg async-example2-web-crawler
  "# Web Crawler
  _Query a site, parse out urls referenced, and crawl them_"
  (fn [state-atom _]
    [web-crawler-component
     (reagent/cursor state-atom [:url])
     (reagent/cursor state-atom [:depth])
     (reagent/cursor state-atom [:log])])
  (reagent/atom {:url "http://joneisen.works"
                 :depth 1
                 :log []}))

(defcard-doc
  "# Web Crawler"
  "Query a site, parse out urls referenced and crawl them.
   Go `n` levels deep."
  (dc/mkdn-pprint-source web-crawler))

(defcard-doc
  (dc/mkdn-pprint-source crawl-url))

(defcard-doc "[Next: Closing](#!/cljs_demo.closing)")
