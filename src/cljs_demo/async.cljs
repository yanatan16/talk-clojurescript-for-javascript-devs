(ns cljs-demo.async
  (:refer-clojure :exclude [update])
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [devcards.core :as dc :refer-macros [defcard-rg]]
            [cljs.core.async :refer [chan >! <! pipe]]
            [ajax.core :refer [GET]]
            [clojure.string :as str]))

(def medical-marijuana-url "https://data.colorado.gov/api/views/7wau-rnkf/rows.csv?accessType=DOWNLOAD")
;;;;;;;;;;;;;;;;;;;;
;; Ajax functions ;;
;;;;;;;;;;;;;;;;;;;;

(defn ajax-get
  "Wrap a GET request in a core.async channel"
  [url]
  (let [c (chan)] ; Create a core.async channel
    (GET url {:handler #(go (>! c %))}) ; Place response on channel
    c)) ; return the channel

(defn parse-csv [raw]
  (let [lines (str/split-lines raw)
        tokens (map #(str/split % #",") lines)]
    {:header (first tokens)
     :body (rest tokens)}))

(defn ajax-get-json
  "Get a url and parse its successful response as json
   Return a core.async channel of parsed json"
  [url]
  (pipe (ajax-get url)
        (chan 1 (map parse-csv))))

(defn get-mj-data [state-atom]
  (swap! state-atom assoc :mj-data nil)
  (let [c (ajax-get-json medical-marijuana-url)]
    (go (let [data (<! c)]
          (swap! state-atom assoc :mj-data data)))))

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
   [:button {:on-click #(get-mj-data state-atom)} "Get Medical Marijuana Data"]
   [mj-data-component state-atom]])


;; Example devcard

(defcard-rg mj-data-card
  (fn [state-atom _]
    [mj-component state-atom]))
