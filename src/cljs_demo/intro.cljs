(ns cljs-demo.intro
  (:require [devcards.core :as dc :refer-macros [defcard-doc]
             :include-macros true]))

(defcard-doc
  "# Clojurescript For Javascript Developers

## A Demonstration

### by Jon Eisen

_DenverScript Meetup, January 26, 2015_")

(defcard-doc
  "# Introductions

I'm **Jon Eisen**

I live, work, and play in Boulder, CO.

- Distributed systems
- Modern devops
- Web full stack

Nice to meet you!")


;; Table of contents

(defcard-doc
  "# Contents

1. Introductions
2. First Steps in Clojurescript
3. Clojure language
4. Using JS from Clojurescript
5. React with Om and Reagent
6. Async Programming with core.async

Follow along at http://joneisen.me/talk-clojurescript-for-javascript-devs")

(defcard-doc
  "# Formatting

This talk is formatted as a _live-editable_ clojurescript project.

- [devcards](https://github.com/bhauman/devcards) + slideshow hacks
- [figwheel](https://github.com/bhauman/lein-figwheel)
- [cider for emacs](https://github.com/clojure-emacs/cider)

Why? To show the ease of developing with clojurescript.")

(defcard-doc "[Next: First Steps](#!/cljs_demo.first_steps)")
