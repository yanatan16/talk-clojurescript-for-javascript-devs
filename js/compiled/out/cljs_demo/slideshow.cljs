(ns cljs-demo.slideshow
  (:require [reagent.core :as r]))

(def ^:private active-slide-class "com-rigsomelight-devcard-slideshow-active")
(def ^:private container-class "com-rigsomelight-devcards-container")
(def ^:private devcard-class "com-rigsomelight-devcard")
(def ^:private slideshow-class "com-rigsomelight-devcards-slideshow")
(def ^:private btn-container-class "com-rigsomelight-devcards-slideshow-btns-container")

(defonce ^:private state (r/atom {:on false :n 0}))

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

(defn count-slides []
  (.-length (get-by-class devcard-class)))

(defn- swap-active-class! [from to]
  (let [slides (get-by-class devcard-class)]
    (when-let [slide (.item slides from)]
      (remove-class slide active-slide-class))

    (when-let [slide (.item slides to)]
      (add-class slide active-slide-class)
      (.scrollIntoView slide))))

(defn- swap-slide! [n-or-f]
  (let [from (get @state :n)
        to (if (fn? n-or-f) (n-or-f from) n-or-f)
        max (count-slides)]
    (when (and (<= 0 to) (> max to))
      (swap-active-class! (or from 0) to)
      (swap! state assoc :n to :on true)
      true)))

(defn- start-slideshow! []
  (when (swap-slide! 0)
    (add-class (container) slideshow-class)))

(defn- stop-slideshow! []
  (remove-class (container) slideshow-class)
  (swap! state assoc :on false :n 0))

(defn on-key-down [e]
  (case (.-keyCode e)
    ;; down
    40 (when (:on @state)
         (swap-slide! inc)
         (.preventDefault e))
    ;; up
    38 (when (:on @state)
         (swap-slide! dec)
         (.preventDefault e))
    ;; enter
    13 (when-not (:on @state)
         (start-slideshow!))
    ;; backspace
    27 (when (:on @state)
         (stop-slideshow!))
    nil))

(.addEventListener js/window "hashchange"
                   #(when (:on @state)
                      (stop-slideshow!)
                      (js/setTimeout start-slideshow! 200)) false)

(defn buttons []
  (let [active (get @state :on)]
    [:div.com-rigsomelight-devcards-slideshow-btns
     [:a.com-rigsomelight-devcards-slideshow-btn
      {:href "#" :on-click #(do (.preventDefault %) (start-slideshow!))
       :style {:display (if active "none" "")}}
      "Start Slideshow"]
     [:a.com-rigsomelight-devcards-slideshow-btn
      {:href "#" :on-click #(do (.preventDefault %) (swap-slide! inc))
       :style {:display (if active "" "none")}}
     "Next"]
     [:a.com-rigsomelight-devcards-slideshow-btn
     {:href "#" :on-click #(do (.preventDefault %) (swap-slide! dec))
      :style {:display (if active "" "none")}}
     "Previous"]
     [:a.com-rigsomelight-devcards-slideshow-btn
     {:href "#" :on-click #(do (.preventDefault %) (stop-slideshow!))
      :style {:display (if active "" "none")}}
     "Stop"]]))

(defn- insert-buttons []
  (let [btn-container (.createElement js/document "div")]
    (add-class btn-container btn-container-class)
    (.appendChild (container) btn-container)
    (r/render [buttons] btn-container)
    (.addEventListener js/window "keydown" on-key-down)))

(defonce ___ (js/setTimeout #(insert-buttons) 2000))
