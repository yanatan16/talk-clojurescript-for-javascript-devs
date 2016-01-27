(ns cljs-demo.js-and-html
  (:require [devcards.core :as dc :refer-macros [defcard defcard-doc dom-node]]
            [sablono.core :as html :refer-macros [html]]))

(defcard-doc
  "# Using JS and HTML

- Using straight-up javascript and global functions
- Rendering html using Hiccup")
;; Rendering HTML using innerHTML

(defn html-using-innerhtml [el]
  (set! (.-innerHTML el)
        "<h2>This is inserted using innerHTML</h2>"))

(defcard-doc
  "# Rendering HTML using `el.innerHTML`"
  (dc/mkdn-pprint-source html-using-innerhtml)
  "compiles to..."
  "```javascript
function html_using_innerhtml(el) {
  el.innerHTML = \"<h2>This is inserted using innerHTML</h2>\";
}
```")

(defcard rendering-html-innerhtml
  "_Rendered using above code with `el.innerHTML`_"
  (dc/dom-node
   (fn [_ el]
     (html-using-innerhtml el))))

;; Rendering HTML using createElement
;; (and cljs callbacks)

(defn on-click [e]
  ;; We can call global functions
  (js/alert "Button was clicked"))

(defn create-button []
  ;; We can save the response of a js interop function call
  ;;=> var btn = document.createElement("button")
  (let [btn (.createElement js/document "button")]
    ;; We can set values on js objects
    ;;=> btn.innerText = "Click Me"
    (set! (.-innerText btn) "Click Me")
    ;; We can pass cljs functions as callbacks
    ;;=> btn.addEventListener("click", on_click)
    (.addEventListener btn "click" on-click)
    ;; return btn
    btn))

(defn insert-button [div]
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
  (dc/mkdn-pprint-source insert-button))

(defcard-doc
  "_Note_: The callback is just a regular cljs function"
  (dc/mkdn-pprint-source on-click))

(defcard rendering-html-createElement
  "_Rendered using above code, creating and inserting the button with `appendChild`_"
  (dom-node
   (fn [_ el]
     (set! (.-innerHTML el) "")
     (.appendChild el (create-button)))))

;; Rendering HTML Using hiccup

(defn table-using-hiccup [n-rows]
  [:table ; <table>
   ;; Children of <table>
   [:thead [:tr [:th "Index"] [:th "Value"]]]
   [:tbody
    (for [i (range 0 n-rows)]
      [:tr {:key i}
       [:td i] [:td "Value for " i]])]])

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
  "_Rendered using above code with hiccup._"
  (html [:div
         [:div {:style {:display "inline-block"
                        :margin "2em"}}
          [:h3 "Table"] (table-using-hiccup 3)]
         [:div {:style {:display "inline-block"}}
          [:h3 "Attrs"] (attrs-using-hiccup)]]))

(defcard-doc "[Next: Using React](#!/cljs_demo.react)")
