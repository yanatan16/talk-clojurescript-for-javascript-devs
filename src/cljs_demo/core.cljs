(ns cljs-demo.core
  (:require [cljs-demo.js-interop :as js-interop]
            [cljs-demo.reagent :as reagent-demo]
            [cljs-demo.async :as async-demo]))

(enable-console-print!)

(println "Edits to this text should show up in your developer console.")

;; define your app data so that it doesn't get over-written on reload

(def main-sel "#main")
(def main-div (.querySelector js/document main-sel))
(defn- clear-dom []
  (when (some? (.-firstChild main-div))
    (.removeChild main-div (.-firstChild main-div))
    (clear-dom)))
(defn- unknown-route [rte]
  (set! (.-innerText main-div) (str "Unknown route " rte)))

(defn- get-hash []
  ;; keyword(window.location.hash.toString(),substr(1))
  (let [hash (-> js/window .-location .-hash .toString)]
    (if (empty? hash)
      :default
      (keyword (subs hash 1)))))

(defn on-route []
  (clear-dom)
  (case (get-hash)
    :js-interop (js-interop/init main-sel)
    :reagent (reagent-demo/init main-div)
    :async (async-demo/init main-div)
    :default nil
    (unknown-route (get-hash))))

(defn on-js-reload []
  (case (get-hash)
    :js-interop (do (clear-dom) (js-interop/init main-sel))
    :reagent (reagent-demo/update)
    :async (async-demo/update)
    :default nil)

  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

(.addEventListener js/window "hashchange" on-route)
(on-route)
