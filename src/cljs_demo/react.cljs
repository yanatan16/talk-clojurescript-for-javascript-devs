(ns cljs-demo.react
  (:require [devcards.core :as dc :refer-macros [defcard defcard-rg defcard-doc]]
            [reagent.core :as reagent]
            [devcards.util.edn-renderer :as edn-rend]))


(defn input-component [key state-atom]
  [:div.input-wrap
   [:label (str "Edit " (name key) ": ")]
   [:input {:type "text"
            :on-change #(swap! state-atom assoc key (.. % -target -value))
            :value (get @state-atom key)}]])

;; A reagent component is just a function
(defn demo-component [state-atom]
  ; A div in hiccup format
  [:div
   ;; Reference a component with its own lifecycle
   ;; We can pass arguments to a component
   [input-component :hello state-atom]
   [input-component :who state-atom]

   [:div (edn-rend/html-edn @state-atom)]])

;; Devcards

(defcard reagent-card
  (dc/reagent (fn [state-atom _] [demo-component state-atom]))
  (reagent/atom {:hello "Hello"
                 :who "Who"}))
