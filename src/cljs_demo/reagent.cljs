(ns cljs-demo.reagent
  (:refer-clojure :exclude [update])
  (:require [reagent.core :as r]))

;; Notice we use a reagent atom here
(defonce app-state (r/atom {:text "Hello world!"}))

(defn input-component [label]
  [:div.input-wrap
   [:label label]
   [:input {:type "text"
            :on-change #(swap! app-state assoc :text (.-value (.-target %)))
            :value (:text @app-state)}]])

;; A reagent component is just a function
(defn demo-component []
  ; A div in hiccup format
  [:div
   ;; A div with a class
   [:div.some-class
    ;; A complex dom object
    [:a {:href "http://google.com" :target "_blank"} "Go to google"]
    ;; Reference a component with its own lifecycle
    ;; We can pass arguments to a component
    [input-component "Edit you"]]])


(defn init
  "Initialize the reagent demo in an element"
  [el]
  (r/render-component [demo-component] el))

(defn update
  "Update our render in case any code changed"
  []
  ;; We just touch app-state because reagent watches that atom
  (swap! app-state update-in [:__update-counter] inc))
