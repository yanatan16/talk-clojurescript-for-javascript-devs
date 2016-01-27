(ns cljs-demo.clj-tour
  (:require [devcards.core :as dc :refer-macros [defcard-doc]]))

(defcard-doc
  "# A Brief Tour of Clojure

Clojure has...

- LISP-like syntax (functional programming)
- immutable data structures
- a large standard library and ecosystem
- concurrency control
- code-as-data macro system

<img src=\"/img/clojure.gif\" style=\"float:right;position:relative;top:-100px;\" width=\"100px\">")

(defcard-doc
  "## Conditionals and Functions

```clojure
;; Named function
(defn say-hello [who]
  (if who
    (println (str \"Hello \" who))
    (println \"Hello Unnamed Individual\")))

;; Anonymous function
(def say-hello-2 #(println \"Hello\" %))

;; Call a function
(say-hello) ;=> \"Hello Unnamed Individual\"
(say-hello-2 \"World\") ;=> \"Hello World\"
```")

(defcard-doc
  "## Immutable Data Structures

```clojure
;; Maps
(def map-1 {:foo 55 :bar \"baz\"})
(def map-2 (merge map-1 {:foo 100}))

;; map-1 is unchanged
(assert (= (get map-1 :foo) 55))

;; Vectors and lazy sequences too!
(def vec [1 2 3 4])
(def natural-numbers (range)) ;; => (0 1 2 3 4...)
```")

(defcard-doc
  "## Using Mutable Data

Clojure atoms wrap mutable data

```clojure
(def my-atom (atom {:foo \"bar\"}))

;; @ is a macro for (deref <some-atom>)
(def x1 @my-atom)

;; Changes the contents of my-atom
(reset! my-atom {:foo \"baz\"})

;; But x1 is unchanged, its immutable!
(assert (not= x1 @my-atom))
```")

(defcard-doc
  "## Code Sharing

Clojure (JVM) and Clojurescript (JS) can share the same code. Using reader conditionals (`.cljc` extension)

```clojure
(println \"I'm in\" #?(:clj \"Clojure\"
                     :cljs \"Clojurescript\"))
```")

(defcard-doc "[Next: JS Interop](#!/cljs_demo.js_and_html)")
