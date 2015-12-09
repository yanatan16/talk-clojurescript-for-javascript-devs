(defproject cljs-for-js-devs "0.1.0-SNAPSHOT"
  :description "An example app for a talk on basic clojurescript for javascript developers"
  :url "http://github.com/yanatan16/talk-cljs-for-js-devs"
  :license {:name "MIT"
            :url "https://github.com/yanatan16/talk-cljs-for-js-devs/blob/master/LICENSE"}

  :scm {:name "git"
        :url "https://github.com/yanatan16/talk-cljs-for-js-devs"}

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [org.clojure/core.async "0.2.374"]
                 [cljs-ajax "0.5.1"]
                 [sablono "0.5.1"]
                 [devcards "0.2.1-2" :exclusions [cljsjs/react cljsjs/react-dom]]
                 [reagent "0.5.1" :exclusions [cljsjs/react cljsjs/react-dom]]
                 [om "0.8.0-rc1" :exclusions [cljsjs/react]]
                 [hickory "0.5.4"]

                 [cljsjs/react "0.14.3-0"]
                 [cljsjs/react-dom "0.14.3-1"]
                 [cljsjs/react-dom-server "0.14.3-0"]]

  :plugins [[lein-cljsbuild "1.1.1"]
            [lein-figwheel "0.5.0-1"]]

  :source-paths ["src"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src"]

                :figwheel {:devcards true}

                :compiler {:main cljs-demo.core
                           :devcards true
                           :asset-path "js/compiled/out"
                           :output-to "resources/public/js/compiled/cljs_demo.js"
                           :output-dir "resources/public/js/compiled/out"
                           :recompile-dependents false
                           :optimizations :none
                           :source-map-timestamp true}}]}

  :figwheel {:css-dirs ["resources/public/css"] ;; watch and update CSS
             })
