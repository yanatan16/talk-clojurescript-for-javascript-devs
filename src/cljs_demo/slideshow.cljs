(ns cljs-demo.slideshow
  (:require [reagent.core :as r]))

(defonce ^:private state (r/atom {}))

(defn- get-hash [] (subs (.. js/window -location -hash) 3))

(defn- add-class [el class]
  (.. el -classList (add class)))
(defn- remove-class [el class]
  (.. el -classList (remove class)))

(defn- get-by-class [class]
  (-> (.getElementsByClassName js/document class)
      js->clj))

(defn container []
  (.item (get-by-class "com-rigsomelight-devcards-container") 0))

(defn- swap-active-class! [from to]
  (let [slides (get-by-class "com-rigsomelight-devcard")]
    (remove-class (.item slides from) "com-rigsomelight-devcard-slideshow-active")
    (add-class (.item slides to) "com-rigsomelight-devcard-slideshow-active")
    (.scrollIntoView (.item slides to))))

(defn- swap-slide! [f]
  (let [hash (get-hash)
        from (get-in @state [hash :n])
        to (f from)]
    (swap-active-class! (or from 0) to)
    (swap! state assoc-in [hash :n] to)))

(defn- start-slideshow! []
  (add-class (container) "com-rigsomelight-devcards-slideshow")
  (swap! state assoc (get-hash) {})
  (swap-slide! #(do % 0)))

(defn- stop-slideshow! []
  (remove-class (container) "com-rigsomelight-devcards-slideshow")
  (swap! state dissoc (get-hash)))

(defn buttons []
  (let [active (some? (get @state (get-hash)))]
    [:div.com-rigsomelight-devcards-slideshow-btns
     [:a.com-rigsomelight-devcards-slideshow-btn
      {:href "#" :on-click #(do (.preventDefault %) (start-slideshow!))
       :style {:display (if active "hidden" "inherit")}}
      "Start Slideshow"]
     [:a.com-rigsomelight-devcards-slideshow-btn
      {:href "#" :on-click #(do (.preventDefault %) (swap-slide! inc))
       :style {:display (if active "inherit" "hidden")}}
     "Next"]
     [:a.com-rigsomelight-devcards-slideshow-btn
     {:href "#" :on-click #(do (.preventDefault %) (swap-slide! dec))
      :style {:display (if active "inherit" "hidden")}}
     "Previous"]
     [:a.com-rigsomelight-devcards-slideshow-btn
     {:href "#" :on-click #(do (.preventDefault %) (stop-slideshow!))
      :style {:display (if active "inherit" "hidden")}}
     "Stop"]]))

(defn- insert-buttons []
  (let [btn-container (.createElement js/document "div")]
    (add-class btn-container "com-rigsomelight-devcards-slideshow-btns-container")
    (.appendChild (container) btn-container)
    (r/render [buttons] btn-container)))

(defonce ___ (js/setTimeout #(insert-buttons) 1000))
