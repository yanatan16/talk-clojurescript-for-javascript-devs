(ns cljs-demo.react
  (:require [devcards.core :as dc :refer-macros [defcard defcard-om defcard-doc]]
            [reagent.core :as reagent]
            [sablono.core :as sab]
            [devcards.util.edn-renderer :as edn-rend]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(defcard-doc
  "# React Wrappers in Clojurescript

### Reagent: minimalistic and flexible

### Om: explicit, feature-full, with more structure")

;; Reagent

(defn reagent-input-component
  "Create an <input> component, saving data in state-atom at key"
  [key state-atom]
  [:div.input-wrap
   [:label (str "Edit " (name key) ": ")]
   [:input {:type "text"
            :on-change #(swap! state-atom assoc key (.. % -target -value))
            :value (get @state-atom key)}]])

;; A reagent component is just a function
(defn reagent-edit-state-component [state-atom]
  [:div
   ;; Brackets mean a sub-component with own lifecycle
   [reagent-input-component :hello state-atom]

   ;; Parens mean an "inline" component
   (reagent-input-component :who state-atom)

   ;; Show current state
   [:div {:style {:margin-top 10}}
    (edn-rend/html-edn @state-atom)]])

(defcard-doc
  "# Reagent"
  "- Functions that return HTML are React components
   - Uses hiccup syntax for rendering html
   - Change underlying state with atom functions"
  (dc/mkdn-pprint-source reagent-input-component)
  (dc/mkdn-pprint-source reagent-edit-state-component))

(defcard reagent-card
  (dc/reagent (fn [state-atom _]
                [reagent-edit-state-component state-atom]))
  (reagent/atom {:hello "Hello"
                 :who "Who"}))

;; Om

(defcard-doc
   "# Om

    Om is a more full-featured wrapper around React:

    - Integrated state management
    - More explicit, fine-grained control of components
    - multiple dom syntaxes
    - Declarative data dependencies
    - _Om Next_: data syncing with backend

[Om on Github](https://github.com/omcljs/om)")

(defn om-widget-sablono [data owner]
  (om/component
   (sab/html [:div [:h2 "This is an sablano card, " (:text data)]])))
(defn om-widget-dom [data owner]
  (om/component
   (dom/div nil
            (dom/h2 nil (str "This is an om.dom card, " (:text data))))))

(defcard-doc
  "## `om.dom` rendering syntax:"
  (dc/mkdn-pprint-source om-widget-dom)
  "## `sablono' rendering syntax (hiccupish):"
  (dc/mkdn-pprint-source om-widget-sablono))

(defcard om-widget-dom
  (dc/om-root om-widget-dom)
  {:text "yep"})
(defcard om-widget-sablono
  (dc/om-root om-widget-sablono)
  {:text "yep"})

;; Om state mgmnt

(defonce om-test-atom (atom {:count 20}))

(defn counter [data owner]
  ;; Owner is the component above counter
  ;; data is our app state
  (om/component
   (sab/html
    [:div
     [:h1 (om/get-shared owner :title) (:count data)]
     [:div [:button {:onClick #(om/transact! data :count inc)}
            "inc"]]
     (dc/edn data)])))

(defn om-counter-inc [data owner] (counter data owner))

(defcard-doc
  "## Using State with Om

- Om manages state in a more structured way.
- We have to use `om/transact!`.
- But there is more explicit creation of components and data management"
  (dc/mkdn-pprint-source counter))

(dc/defcard-om omcard-state-mgmt
  om-counter-inc
  om-test-atom
  {:shared {:title "First counter "}})

(defcard-doc
  "[Next: Async in Clojurescript](#!/cljs_demo.async)")
