(ns cljs-demo.async
  (:refer-clojure :exclude [update])
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [chan >! <! pipe]]
            [ajax.core :refer [GET]]
            [reagent.core :as r]
            [clojure.string :as str]))

(def medical-marijuana-url "https://data.colorado.gov/api/views/7wau-rnkf/rows.csv?accessType=DOWNLOAD")

(defonce app-state (r/atom {}))

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

(defn get-mj-data []
  (swap! app-state assoc :mj-data nil)
  (let [c (ajax-get-json medical-marijuana-url)]
    (go (let [data (<! c)]
          (swap! app-state assoc :mj-data data)))))

;;;;;;;;;;;;;;;;;;;;;;;;
;; Reagent Components ;;
;;;;;;;;;;;;;;;;;;;;;;;;

(defn mj-data-component []
  (if-let [{:keys [header body]} (get-in @app-state [:mj-data])]
    [:table
     [:thead>tr (map (fn [el] ^{:key el} [:td el]) header)]
     [:tbody (map (fn [row]
                    ^{:key (first row)}
                    [:tr (map (fn [el] ^{:key el} [:td el]) row)])
                  body)]]
    [:p "No data has been retrieved"]))

(defn mj-component []
  [:div.medical-marijuana
   [:button {:on-click get-mj-data} "Get Medical Marijuana Data"]
   [mj-data-component]])

;;;;;;;;;;;;;;;;;
;; Boilerplate ;;
;;;;;;;;;;;;;;;;;

(defn init [el]
  (r/render-component [mj-component] el))

(defn update [] (swap! app-state update-in [:__update-counter] inc))
