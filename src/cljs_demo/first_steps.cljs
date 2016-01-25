(ns cljs-demo.first-steps
  (:require [devcards.core :as dc :refer-macros [defcard defcard-doc]]
            [sablono.core :as html :refer-macros [html]]))

(defcard-doc
  "# Leiningen

Usually called just `lein`. Download at [leiningen.org](http://leiningen.org/).

This is your clojure and clojurescript builder/tester/general CLI tool.

```bash
$ lein new figwheel my-project
Generating fresh 'lein new' figwheel project.

$ cd my-project

$ lein cljsbuild once
Compiling ClojureScript...
Compiling \"resources/public/js/compiled/my_project.js\" from [\"src\"]...
Successfully compiled \"resources/public/js/compiled/my_project.js\" in 1.452 seconds.
```")

(defcard-doc
  "# Organization of a Project

```bash
$ tree
.
├── README.md
├── project.clj
├── resources
│   └── public
│       ├── css
│       │   └── style.css
│       ├── index.html
│       └── js
└── src
    └── my_project
        └── core.cljs

6 directories, 5 files
```")

(defcard-doc
  "# `project.clj`

```clojure
(defproject cljs-demo \"1.0.0\"
  ;; metadata
  :description \"a clojurescript demo\"
  :url \"https://github.com/yanatan16/talk-cljs-for-js-devs\"

  ;; dependencies and plugins
  :dependencies [[org.clojure/clojure \"1.7.0\"]
                 [org.clojure/clojurescript \"1.7.170\"]]

  ;; plugins and plugin options
  :plugins [[lein-cljsbuild \"1.1.1\"]]

  :cljsbuild {:builds [{:id \"main\"
                        :compiler {:main cljs-demo.core
                                   :output-to \"resources/private/js/main.js\"
                                   :optimizations :advanced}}]})
```")

(defcard figwheel-demo
  "# Figwheel

`figwheel` is a live hot-code reloading plugin.

We can edit the clojurescript code (and CSS) and have this element change.

_Try editing `/src/cljs_demo/first_steps.cljs` and watch this element change._"

  (html [:div [:h2.hello-denverscript
               "Hello World"]]))

(defcard-doc
  "# REPL
## (Read Evaluate Print Loop)

Interact with the clojurescript environment and return a result.

_Try using the repl in `lein figwheel` or `cider` to execute these statements_"

"```clojure
(+ 1 2)
(map #(+ % 1) [1 2 3 4])
(assoc {} :key :value)
(js/alert \"You've just been repled\")
```")

(defonce repl-demo-state (atom {:text "This is changable" :count 50}))
(defcard repl-demo
  "# REPL can interact with App

_Try executing these statements in your repl, and watch what happens!_

```clojure
(ns cljs-demo.first-steps)
(swap! repl-demo-state assoc :text \"I said it was changeable\")
(swap! repl-demo-state update-in [:count] inc)
```"
  (fn [data-atom owner]
    (html [:div
           [:h3 (:text @data-atom)]
           [:p "Count is " [:span (:count @data-atom)]]]))
  repl-demo-state)

(defcard-doc "[Next: A Brief Tour of Clojure](#!/cljs_demo.clj_tour)")
