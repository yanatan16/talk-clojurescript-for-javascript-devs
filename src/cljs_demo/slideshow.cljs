(ns cljs-demo.slideshow
  (:require [reagent.core :as r]))

(def ^:private active-slide-class "com-rigsomelight-devcard-slideshow-active")
(def ^:private container-class "com-rigsomelight-devcards-container")
(def ^:private devcard-class "com-rigsomelight-devcard")
(def ^:private slideshow-class "com-rigsomelight-devcards-slideshow")
(def ^:private btn-container-class "com-rigsomelight-devcards-slideshow-btns-container")

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
  (.item (get-by-class container-class) 0))

(defn- swap-active-class! [from to]
  (let [slides (get-by-class devcard-class)]
    (when-let [slide (.item slides from)]
      (remove-class slide active-slide-class))

    (when-let [slide (.item slides to)]
      (add-class slide active-slide-class)
      (.scrollIntoView slide))))

(defn- swap-slide! [f]
  (let [hash (get-hash)
        from (get-in @state [hash :n])
        to (f from)]
    (swap-active-class! (or from 0) to)
    (swap! state assoc-in [hash :n] to)))

(defn on-key-down [e]
  (case (.-keyCode e)
    40 (do (swap-slide! inc)
                    (.preventDefault e))
    38 (do (swap-slide! dec)
                  (.preventDefault e))
    (println "no matching clause for key" (.-keyCode e))))

(defn- start-slideshow! []
  (add-class (container) slideshow-class)
  (swap! state assoc (get-hash) {})
  (swap-slide! #(do % 0))
  (.addEventListener js/window "keydown" on-key-down))

(defn- stop-slideshow! []
  (remove-class (container) slideshow-class)
  (swap! state dissoc (get-hash))
  (.removeEventListener js/window "keydown" on-key-down))

(defn buttons []
  (let [active (some? (get @state (get-hash)))]
    [:div.com-rigsomelight-devcards-slideshow-btns
     [:a.com-rigsomelight-devcards-slideshow-btn
      {:href "#" :on-click #(do (.preventDefault %) (start-slideshow!))
       :style {:display (if active "none" "inherit")}}
      "Start Slideshow"]
     [:a.com-rigsomelight-devcards-slideshow-btn
      {:href "#" :on-click #(do (.preventDefault %) (swap-slide! inc))
       :style {:display (if active "inherit" "none")}}
     "Next"]
     [:a.com-rigsomelight-devcards-slideshow-btn
     {:href "#" :on-click #(do (.preventDefault %) (swap-slide! dec))
      :style {:display (if active "inherit" "none")}}
     "Previous"]
     [:a.com-rigsomelight-devcards-slideshow-btn
     {:href "#" :on-click #(do (.preventDefault %) (stop-slideshow!))
      :style {:display (if active "inherit" "none")}}
     "Stop"]]))

(defn- insert-buttons []
  (let [btn-container (.createElement js/document "div")]
    (add-class btn-container btn-container-class)
    (.appendChild (container) btn-container)
    (r/render [buttons] btn-container)))

(defonce ___ (js/setTimeout #(insert-buttons) 1000))
