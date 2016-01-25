# Clojurescript for Javascript Developers

A talk I'm giving at DenverScript on Jan 26 2015 (on [meetup.com](http://www.meetup.com/DenverScript/events/226432468/)).

This talk is also an experiment in formatting. It is formatted as a series of [devcards](https://github.com/bhauman/devcards) pages, with an added "hack" to focus on a single card as if its a slide. This formatting allows the presenter to live edit the talk, just like devcards and figwheel and emacs provide live development. This will hopefully help show the attendees the ease of developing with clojurescript through the ease of editing the talk.

The non-live version is available via github pages [here](http://joneisen.me/talk-clojurescript-for-javascript-devs).

## Outline

- [Introduction](http://joneisen.me/talk-clojurescript-for-javascript-devs/#!/cljs_demo.intro)
  - Introducing me, talking about the formatting, and the contents of the talk
- [First Steps](http://joneisen.me/talk-clojurescript-for-javascript-devs/#!/cljs_demo.first_steps)
  - Using leiningen, figwheel, and the repl
- [Brief Tour of Clojure](http://joneisen.me/talk-clojurescript-for-javascript-devs/#!/cljs_demo.clj_tour)
  - Here's some basics of clojure syntax, data structures, atoms, and reader conditionals
- [JS Interop and HTML](http://joneisen.me/talk-clojurescript-for-javascript-devs/#!/cljs_demo.js_and_html)
  - How to use javascript from clojurescript, and how to render html using that interface
- [Using React](http://joneisen.me/talk-clojurescript-for-javascript-devs/#!/cljs_demo.react)
  - Introductions and code samples from Om and Reagent
- [Async Programming](http://joneisen.me/talk-clojurescript-for-javascript-devs/#!/cljs_demo.async)
  - Some examples of core.async as well as its history
- [Closing](http://joneisen.me/talk-clojurescript-for-javascript-devs/#!/cljs_demo.closing)

## Setup

To get an interactive development environment run:

    lein figwheel

and open your browser at [localhost:3449](http://localhost:3449/).
This will auto compile and send all changes to the browser without the
need to reload. After the compilation process is complete, you will
get a Browser Connected REPL. An easy way to try it is:

    (js/alert "Am I connected?")

and you should see an alert in the browser window.

To clean all compiled files:

    lein clean

To create a production build run:

    lein cljsbuild once min

And open your browser in `resources/public/index.html`. You will not
get live reloading, nor a REPL.

### Slideshow

A simple (and hacky) devcards slideshow interface was developed. Simply hit <Enter> or click "Start Slideshow" to start, then arrow keys to navigate and <ESC> to exit the slideshow mode.

The slideshow mode will focus on a specific card with css's `zoom` and put a transparent overlay on other cards.

## License

Copyright © 2016 Jon Eisen <jon@joneisen.works>

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
