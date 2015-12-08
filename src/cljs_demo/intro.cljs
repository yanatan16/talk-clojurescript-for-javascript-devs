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


- Embedded programming
- Distributed systems
- Modern devops
- Web full stack

Nice to meet you!")


;; Table of contents

(defcard-doc
  "# Contents

1. Introductions
2. First Steps
3. Using JS
4. React with Om and Reagent
5. Async Programming with core.async")
