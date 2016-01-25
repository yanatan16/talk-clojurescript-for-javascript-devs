// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs_demo.first_steps');
goog.require('cljs.core');
goog.require('devcards.core');
goog.require('sablono.core');
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.first_steps","cljs_demo.first_steps",-2021731039),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"# Leiningen\n\nUsually called just `lein`. Download at [leiningen.org](http://leiningen.org/).\n\nThis is your clojure and clojurescript builder/tester/general CLI tool.\n\n```bash\n$ lein new figwheel my-project\nGenerating fresh 'lein new' figwheel project.\n\n$ cd my-project\n\n$ lein cljsbuild once\nCompiling ClojureScript...\nCompiling \"resources/public/js/compiled/my_project.js\" from [\"src\"]...\nSuccessfully compiled \"resources/public/js/compiled/my_project.js\" in 1.452 seconds.\n```"),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.first_steps","cljs_demo.first_steps",-2021731039),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"# Organization of a Project\n\n```bash\n$ tree\n.\n\u251C\u2500\u2500 README.md\n\u251C\u2500\u2500 project.clj\n\u251C\u2500\u2500 resources\n\u2502\u00A0\u00A0 \u2514\u2500\u2500 public\n\u2502\u00A0\u00A0     \u251C\u2500\u2500 css\n\u2502\u00A0\u00A0     \u2502\u00A0\u00A0 \u2514\u2500\u2500 style.css\n\u2502\u00A0\u00A0     \u251C\u2500\u2500 index.html\n\u2502\u00A0\u00A0     \u2514\u2500\u2500 js\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 my_project\n        \u2514\u2500\u2500 core.cljs\n\n6 directories, 5 files\n```"),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.first_steps","cljs_demo.first_steps",-2021731039),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"# `project.clj`\n\n```clojure\n(defproject cljs-demo \"1.0.0\"\n  ;; metadata\n  :description \"a clojurescript demo\"\n  :url \"https://github.com/yanatan16/talk-cljs-for-js-devs\"\n\n  ;; dependencies and plugins\n  :dependencies [[org.clojure/clojure \"1.7.0\"]\n                 [org.clojure/clojurescript \"1.7.170\"]]\n\n  ;; plugins and plugin options\n  :plugins [[lein-cljsbuild \"1.1.1\"]]\n\n  :cljsbuild {:builds [{:id \"main\"\n                        :compiler {:main cljs-demo.core\n                                   :output-to \"resources/private/js/main.js\"\n                                   :optimizations :advanced}}]})\n```"),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.first_steps","cljs_demo.first_steps",-2021731039),new cljs.core.Keyword(null,"figwheel-demo","figwheel-demo",-1720850658)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"figwheel-demo",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# Figwheel\n\n`figwheel` is a live hot-code reloading plugin.\n\nWe can edit the clojurescript code (and CSS) and have this element change.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),React.createElement("div",null,React.createElement("h2",{"className": "hello-denverscript"},"Hello World")),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.first_steps","cljs_demo.first_steps",-2021731039),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"# REPL\n## (Read Evaluate Print Loop)\n\nInteract with the clojurescript environment and return a result","```clojure\n(+ 1 2)\n(map #(+ % 1) [1 2 3 4])\n(assoc {} :key :value)\n(js/alert \"You've just been repled\")\n```"),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
if(typeof cljs_demo.first_steps.repl_demo_state !== 'undefined'){
} else {
cljs_demo.first_steps.repl_demo_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"This is changable",new cljs.core.Keyword(null,"count","count",2139924085),(50)], null));
}
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.first_steps","cljs_demo.first_steps",-2021731039),new cljs.core.Keyword(null,"repl-demo","repl-demo",-1790379078)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"repl-demo",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# REPL can interact with App\n\n```clojure\n(ns cljs-demo.first-steps)\n(swap! repl-demo-state assoc :text \"I said it was changeable\")\n(swap! repl-demo-state update-in [:count] inc)\n```",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (data_atom,owner){
return React.createElement("div",null,(function (){var attrs48715 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data_atom));
return cljs.core.apply.call(null,React.createElement,"h3",((cljs.core.map_QMARK_.call(null,attrs48715))?sablono.interpreter.attributes.call(null,attrs48715):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs48715))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs48715)], null))));
})(),React.createElement("p",null,"Count is ",(function (){var attrs48716 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data_atom));
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs48716))?sablono.interpreter.attributes.call(null,attrs48716):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs48716))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs48716)], null))));
})()));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs_demo.first_steps.repl_demo_state,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.first_steps","cljs_demo.first_steps",-2021731039),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"[Next: A Brief Tour of Clojure](#!/cljs_demo.clj_tour)"),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));

//# sourceMappingURL=first_steps.js.map?rel=1453744777953