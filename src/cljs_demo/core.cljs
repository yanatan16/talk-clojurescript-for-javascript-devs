(ns cljs-demo.core
  (:require [devcards.core :as dc :refer-macros [defcard]]
            [sablono.core :as html :refer-macros [html]]
            [cljs-demo.slideshow :as slideshow]
            cljs-demo.js-and-html
            cljs-demo.react
            cljs-demo.async
            cljs-demo.intro
            cljs-demo.first-steps))

(devcards.core/start-devcard-ui!)

(enable-console-print!)
