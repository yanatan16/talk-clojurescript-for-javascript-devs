(ns cljs-demo.js-interop
  (:require [devcards.core :as dc :refer-macros [defcard]]))

(defn- on-click [e]
  ;; We can call global functions
  (js/alert "Button was clicked"))

(defn- create-button []
  ;; We can save the response of a js interop function call
  (let [btn (.createElement js/document "button")]
    ;; We can set values on js objects
    (set! (.-innerText btn) "Click Me")
    ;; We can pass cljs functions as callbacks
    (.addEventListener btn "click" on-click)
    ;; return btn
    btn))

(defn- insert-button [div]
  ;; We can append the dom with js interop
  (.appendChild div (create-button)))


(defcard js-interop-card
  (dc/dom-node
   (fn [_ node] (insert-button node))))
