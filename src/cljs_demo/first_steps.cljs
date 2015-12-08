(ns cljs-demo.first-steps
  (:require [devcards.core :as dc :refer-macros [defcard]]
            [sablono.core :as html :refer-macros [html]]))


(defcard just-some-html
  (html
   [:div {:class "hello-world"}
    [:h1 "Hello World"]]))

;; basics of rendering some html using hiccup
;; some basics of cljs like map and filter and reduce
