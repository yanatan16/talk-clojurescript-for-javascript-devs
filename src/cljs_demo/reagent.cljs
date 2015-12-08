(ns cljs-demo.reagent
  (:require [devcards.core :as dc :refer-macros [defcard]]
            [reagent.core :as r]))


(defn input-component [label state-atom]
  [:div.input-wrap
   [:label label]
   [:input {:type "text"
            :on-change #(swap! state-atom assoc :text (.-value (.-target %)))
            :value (:text @state-atom)}]])

;; A reagent component is just a function
(defn demo-component [state-atom]
  ; A div in hiccup format
  [:div
   ;; A div with a class
   [:div.some-class
    ;; A complex dom object
    [:a {:href "http://google.com" :target "_blank"} "Go to google"]
    ;; Reference a component with its own lifecycle
    ;; We can pass arguments to a component
    [input-component "Edit you" state-atom]]])

;; Devcards

(defcard reagent-card
  (fn [state-atom]
    (r/as-element [demo-component state-atom]))
  (r/atom {:text "Hello World"}))
