(ns cljs-demo.react
  (:require [devcards.core :as dc :refer-macros [defcard defcard-om defcard-doc]]
            [reagent.core :as reagent]
            [sablono.core :as sab]
            [devcards.util.edn-renderer :as edn-rend]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(defcard-doc
  "# React Wrappers in Clojurescript

- Reagent: minimalistic React wrapper
- Om: more explicit, built-in state management, more features")

;; Reagent

(defn reagent-input-component [key state-atom]
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

   [:div {:style {:margin-top 10}}
    (edn-rend/html-edn @state-atom)]])

(defcard-doc
  "# Reagent"
  "- Minimalistic
   - Uses hiccup syntax for rendering html
   - Components are just plain functions"
  (dc/mkdn-pprint-source reagent-input-component)
  (dc/mkdn-pprint-source reagent-edit-state-component))

(defcard reagent-card
  (dc/reagent (fn [state-atom _]
                [reagent-edit-state-component state-atom]))
  (reagent/atom {:hello "Hello"
                 :who "Who"}))

(defcard-doc
  "# Organization of a Reagent Project

Setup a global state atom using `reagent.core/atom`

```clojure
(defonce appdb (reagent.core/atom {}))
```

Use cursors to only re-render whats necessary

```clojure
(def text-i-care-about (reagent.core/cursor appdb [:my-data :text]))
```

```clojure
(def some-component
  \"This component will only be called re-render when [:my-data :text] changes\"
  []
  [:div [:p @text-i-care-about]
        [:input {:on-change #(reset! text-i-care-about (.. % -target -value))}]])
```

This also makes updates more succinct:

```clojure
(swap! appdb assoc-in [:my-data :text] \"text-update\")
(reset! text-i-care-about \"text-update\")
```")

(defn count-display-component [key count]
  [:p key " has re-rendered " @count " times."])

(defn text-display-component [key state text count]
  (js/setTimeout #(swap! count inc) 0)
  [:p (name key) " is: "
   (comment (get @state key))
   @text])

(defn reagent-cursor-component [state]
  [:div
   [:div [:h3 "Text"]
    [count-display-component "Text" (reagent/cursor state [:count])]
    [reagent-input-component :text state]
    [text-display-component
     :text state
     (reagent/cursor state [:text])
     (reagent/cursor state [:count])]]
   [:div [:h3 "Text2"] [count-display-component "Text2" (reagent/cursor state [:count2])]
    [reagent-input-component :text2 state]
    [text-display-component
     :text2 state
     (reagent/cursor state [:text2])
     (reagent/cursor state [:count2])]]])

(defcard
  reagent-cursors-card
  (dc/reagent
   (fn [state-atom _]
     [reagent-cursor-component state-atom]))
  (reagent/atom {}))

;; Om

(defcard-doc
   "# Om

    Om is a more full-featured wrapper around React:

    - Integrated state management
    - More explicit, fine-grained control of components
    - multiple dom syntaxes
    - Declarative data dependencies
    - _Om Next_: data syncing between a Relay-like server")

(defn om-widget-sablono [data owner]
  (om/component
   (sab/html [:h2 "This is an om card, " (:text data)])))
(defn om-widget-dom [data owner]
  (om/component
   (dom/h2 nil (str "This is an om card, " (:text data)))))

(defcard-doc
  "## `om.dom` rendering syntax:"
  (dc/mkdn-pprint-source om-widget-dom)
  "## `sablono' rendering syntax (hiccupish):"
  (dc/mkdn-pprint-source om-widget-sablono))

(defcard om-widget-dom
  (dc/om-root om-widget-dom)
  {:text "yep (om.dom)"})
(defcard om-widget-sablono
  (dc/om-root om-widget-sablono)
  {:text "yep (sablono)"})

;; Om state mgmnt

(defonce om-test-atom (atom {:count 20}))

(defn counter [owner data]
  (om/component
   (sab/html
    [:div
     [:h1 (om/get-shared owner :title) (:count data)]
     [:div [:a {:onClick #(om/transact! data :count inc)} "inc"]]
     (dc/edn data)])))

(defn om-counter-inc [data owner] (counter owner data))

(defcard-doc
  "## Using State with Om

Om manages state in a more structured way using regular atoms"
  (dc/mkdn-pprint-source counter))

(dc/defcard-om omcard-state-mgmt
  om-counter-inc
  om-test-atom
  {:shared {:title "First counter "}})
