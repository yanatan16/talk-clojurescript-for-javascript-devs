# Clojurescript for Javascript Developers

A talk I'm giving at DenverScript on Jan 26 2015.

## Outline

- Basics
    - `lein new figwheel my-project`
    - `lein figwheel`
    - using the repl
    - figwheel errors and automatic updating
- What Clojurescript looks like
    - Check out some code visually
    - lispyness
    - functional
- Javascript interop
    - basic rendering of some stuff using document and alert
    - figwheel reload semantics
- Reagent
    - figwheel reload doesn't touch app state
    - core.async

## TODO

- add clojure section
- add node cljs section

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

## License

Copyright © 2014 FIXME

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
