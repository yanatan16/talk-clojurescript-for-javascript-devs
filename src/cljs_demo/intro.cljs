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
6. Async Programming with core.async")

(defcard-doc "[Next: First Steps](#!/cljs_demo.first_steps)")
