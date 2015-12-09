(ns cljs-demo.js-and-html
  (:require [devcards.core :as dc :refer-macros [defcard defcard-doc dom-node]]
            [sablono.core :as html :refer-macros [html]]))

;; Rendering HTML using innerHTML

(defn html-using-innerhtml [el]
  (set! (.-innerHTML el)
        "<h2>This is inserted using HELLO innerHTML</h2>"))

(defcard-doc
  "# Rendering HTML using `el.innerHtml`"
  (dc/mkdn-pprint-source html-using-innerhtml))

(defcard rendering-html-innerhtml
  (dc/dom-node
   (fn [_ el]
     (html-using-innerhtml el))))

(defcard test-card
  (html [:h1 "Code && Coffee"]))


;; Rendering HTML using createElement
;; (and cljs callbacks)

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

(defn html-using-createElement [el]
  (let [inner-el (.createElement js/document "h2")]
    (set! (.-innerText inner-el)
          "This is inserted using createElement and setting text")
    (.appendChild el inner-el)))

(defcard-doc
  "## Rendering HTML with `document.createElement`"
  (dc/mkdn-pprint-source create-button)
  (dc/mkdn-pprint-source insert-button)

  "_Note_: The callback is just a regular cljs function"
  (dc/mkdn-pprint-source on-click))

(defcard rendering-html-createElement
  (dom-node
   (fn [_ el]
     (set! (.-innerHTML el) "")
     (.appendChild el (create-button)))))

;; Rendering HTML Using hiccup

(defn table-using-hiccup [n-rows]
  [:table
   [:thead [:tr [:th "Index"] [:th "Value"]]]
   [:tbody
    (for [i (range 0 n-rows)]
      [:tr {:key i} [:td i] [:td "Value for " i]])]])

(defn attrs-using-hiccup []
  [:div.example-class {:style {:background "blue"
                               :width 100
                               :height 100}
                       :onClick on-click}])

(defcard-doc
  "## Rendering HTML with Hiccup"

  "Hiccup is an HTML templating syntax in Clojure vectors"

  (dc/mkdn-pprint-source table-using-hiccup)

  "Use Clojure maps for attributes"

  (dc/mkdn-pprint-source attrs-using-hiccup))

(defcard rendering-html-hiccup
  (html [:div
         [:div {:style {:display "inline-block"
                        :margin "2em"}}
          [:h3 "Table"] (table-using-hiccup 3)]
         [:div {:style {:display "inline-block"}}
          [:h3 "Attrs"] (attrs-using-hiccup)]]))
