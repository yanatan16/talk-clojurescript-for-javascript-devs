// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs_demo.react');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('devcards.util.edn_renderer');
goog.require('devcards.core');
goog.require('om.dom');
goog.require('sablono.core');
goog.require('om.core');
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.react","cljs_demo.react",2098160339),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"# React Wrappers in Clojurescript\n\n### Reagent: minimalistic and flexible\n\n### Om: explicit, feature-full, with more structure\n\nBoth emphasize Flux-style development"),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
/**
 * Create an <input> component, saving data in state-atom at key
 */
cljs_demo.react.reagent_input_component = (function cljs_demo$react$reagent_input_component(key,state_atom){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-wrap","div.input-wrap",1613697488),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str("Edit "),cljs.core.str(cljs.core.name.call(null,key)),cljs.core.str(": ")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__17126_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,key,p1__17126_SHARP_.target.value);
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,cljs.core.deref.call(null,state_atom),key)], null)], null)], null);
});
cljs_demo.react.reagent_edit_state_component = (function cljs_demo$react$reagent_edit_state_component(state_atom){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_demo.react.reagent_input_component,new cljs.core.Keyword(null,"hello","hello",-245025397),state_atom], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(10)], null)], null),devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,state_atom))], null)], null);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.react","cljs_demo.react",2098160339),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"# Reagent","- Functions that return HTML are React components\n   - Uses hiccup syntax for rendering html\n   - Change underlying state with atom functions\n   - Monitors which functions access what state and re-renders when necessary","[Reagent on Github](https://github.com/reagent-project/reagent)"),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.react","cljs_demo.react",2098160339),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"## A reusable component in reagent",[cljs.core.str("\n```clojure\n"),cljs.core.str("(defn reagent-input-component\n  \"Create an <input> component, saving data in state-atom at key\"\n  [key state-atom]\n  [:div.input-wrap\n   [:label (str \"Edit \" (name key) \": \")]\n   [:input {:type \"text\"\n            :on-change #(swap! state-atom assoc key (.. % -target -value))\n            :value (get @state-atom key)}]])"),cljs.core.str("\n```\n")].join('')),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.react","cljs_demo.react",2098160339),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"## Using the reusable component",[cljs.core.str("\n```clojure\n"),cljs.core.str("(defn reagent-edit-state-component [state-atom]\n  [:div\n   ;; Brackets mean a sub-component with own lifecycle\n   [reagent-input-component :hello state-atom]\n\n   ;; Show current state\n   [:div {:style {:margin-top 10}}\n    (edn-rend/html-edn @state-atom)]])"),cljs.core.str("\n```\n")].join('')),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.react","cljs_demo.react",2098160339),new cljs.core.Keyword(null,"reagent-card","reagent-card",814819834)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"reagent-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"_Rendered using above Reagent components_",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof cljs_demo.react.t_cljs_demo$react17128 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
cljs_demo.react.t_cljs_demo$react17128 = (function (meta17129){
this.meta17129 = meta17129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_demo.react.t_cljs_demo$react17128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17130,meta17129__$1){
var self__ = this;
var _17130__$1 = this;
return (new cljs_demo.react.t_cljs_demo$react17128(meta17129__$1));
});

cljs_demo.react.t_cljs_demo$react17128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17130){
var self__ = this;
var _17130__$1 = this;
return self__.meta17129;
});

cljs_demo.react.t_cljs_demo$react17128.prototype.devcards$core$IDevcardOptions$ = true;

cljs_demo.react.t_cljs_demo$react17128.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__14142__auto__,devcard_opts__14143__auto__){
var self__ = this;
var this__14142__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__14143__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__14161__auto__ = ((function (this__14142__auto____$1){
return (function (state_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_demo.react.reagent_edit_state_component,state_atom], null);
});})(this__14142__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__14161__auto__)){
return ((function (v__14161__auto__,this__14142__auto____$1){
return (function (data_atom__14162__auto__,owner__14163__auto__){
return reagent.core.as_element.call(null,v__14161__auto__.call(null,data_atom__14162__auto__,owner__14163__auto__));
});
;})(v__14161__auto__,this__14142__auto____$1))
} else {
return reagent.core.as_element.call(null,v__14161__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__14143__auto__))));
});

cljs_demo.react.t_cljs_demo$react17128.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta17129","meta17129",-740350091,null)], null);
});

cljs_demo.react.t_cljs_demo$react17128.cljs$lang$type = true;

cljs_demo.react.t_cljs_demo$react17128.cljs$lang$ctorStr = "cljs-demo.react/t_cljs_demo$react17128";

cljs_demo.react.t_cljs_demo$react17128.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs-demo.react/t_cljs_demo$react17128");
});

cljs_demo.react.__GT_t_cljs_demo$react17128 = (function cljs_demo$react$__GT_t_cljs_demo$react17128(meta17129){
return (new cljs_demo.react.t_cljs_demo$react17128(meta17129));
});

}

return (new cljs_demo.react.t_cljs_demo$react17128(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hello","hello",-245025397),"Hello"], null)),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.react","cljs_demo.react",2098160339),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"# Om\n\n    Om is a more full-featured wrapper around React:\n\n    - Integrated state management\n    - More explicit, fine-grained control of components\n    - multiple dom syntaxes\n    - Declarative data dependencies\n    - _Om Next_: data syncing with backend\n\n[Om on Github](https://github.com/omcljs/om)"),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
cljs_demo.react.om_widget_sablono = (function cljs_demo$react$om_widget_sablono(data,owner){
if(typeof cljs_demo.react.t_cljs_demo$react17134 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs_demo.react.t_cljs_demo$react17134 = (function (om_widget_sablono,data,owner,meta17135){
this.om_widget_sablono = om_widget_sablono;
this.data = data;
this.owner = owner;
this.meta17135 = meta17135;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_demo.react.t_cljs_demo$react17134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17136,meta17135__$1){
var self__ = this;
var _17136__$1 = this;
return (new cljs_demo.react.t_cljs_demo$react17134(self__.om_widget_sablono,self__.data,self__.owner,meta17135__$1));
});

cljs_demo.react.t_cljs_demo$react17134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17136){
var self__ = this;
var _17136__$1 = this;
return self__.meta17135;
});

cljs_demo.react.t_cljs_demo$react17134.prototype.om$core$IRender$ = true;

cljs_demo.react.t_cljs_demo$react17134.prototype.om$core$IRender$render$arity$1 = (function (this__17118__auto__){
var self__ = this;
var this__17118__auto____$1 = this;
return React.createElement("div",null,React.createElement("h2",null,"This is an sablano card, ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.data))));
});

cljs_demo.react.t_cljs_demo$react17134.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"om-widget-sablono","om-widget-sablono",-490527407,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta17135","meta17135",-304760205,null)], null);
});

cljs_demo.react.t_cljs_demo$react17134.cljs$lang$type = true;

cljs_demo.react.t_cljs_demo$react17134.cljs$lang$ctorStr = "cljs-demo.react/t_cljs_demo$react17134";

cljs_demo.react.t_cljs_demo$react17134.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs-demo.react/t_cljs_demo$react17134");
});

cljs_demo.react.__GT_t_cljs_demo$react17134 = (function cljs_demo$react$om_widget_sablono_$___GT_t_cljs_demo$react17134(om_widget_sablono__$1,data__$1,owner__$1,meta17135){
return (new cljs_demo.react.t_cljs_demo$react17134(om_widget_sablono__$1,data__$1,owner__$1,meta17135));
});

}

return (new cljs_demo.react.t_cljs_demo$react17134(cljs_demo$react$om_widget_sablono,data,owner,null));
});
cljs_demo.react.om_widget_dom = (function cljs_demo$react$om_widget_dom(data,owner){
if(typeof cljs_demo.react.t_cljs_demo$react17140 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs_demo.react.t_cljs_demo$react17140 = (function (om_widget_dom,data,owner,meta17141){
this.om_widget_dom = om_widget_dom;
this.data = data;
this.owner = owner;
this.meta17141 = meta17141;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_demo.react.t_cljs_demo$react17140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17142,meta17141__$1){
var self__ = this;
var _17142__$1 = this;
return (new cljs_demo.react.t_cljs_demo$react17140(self__.om_widget_dom,self__.data,self__.owner,meta17141__$1));
});

cljs_demo.react.t_cljs_demo$react17140.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17142){
var self__ = this;
var _17142__$1 = this;
return self__.meta17141;
});

cljs_demo.react.t_cljs_demo$react17140.prototype.om$core$IRender$ = true;

cljs_demo.react.t_cljs_demo$react17140.prototype.om$core$IRender$render$arity$1 = (function (this__17118__auto__){
var self__ = this;
var this__17118__auto____$1 = this;
return React.DOM.div(null,React.DOM.h2(null,[cljs.core.str("This is an om.dom card, "),cljs.core.str(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.data))].join('')));
});

cljs_demo.react.t_cljs_demo$react17140.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"om-widget-dom","om-widget-dom",-1947837747,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta17141","meta17141",-1821636776,null)], null);
});

cljs_demo.react.t_cljs_demo$react17140.cljs$lang$type = true;

cljs_demo.react.t_cljs_demo$react17140.cljs$lang$ctorStr = "cljs-demo.react/t_cljs_demo$react17140";

cljs_demo.react.t_cljs_demo$react17140.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs-demo.react/t_cljs_demo$react17140");
});

cljs_demo.react.__GT_t_cljs_demo$react17140 = (function cljs_demo$react$om_widget_dom_$___GT_t_cljs_demo$react17140(om_widget_dom__$1,data__$1,owner__$1,meta17141){
return (new cljs_demo.react.t_cljs_demo$react17140(om_widget_dom__$1,data__$1,owner__$1,meta17141));
});

}

return (new cljs_demo.react.t_cljs_demo$react17140(cljs_demo$react$om_widget_dom,data,owner,null));
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.react","cljs_demo.react",2098160339),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"## `om.dom` rendering syntax:",[cljs.core.str("\n```clojure\n"),cljs.core.str("(defn om-widget-dom [data owner]\n  (om/component\n   (dom/div nil\n            (dom/h2 nil (str \"This is an om.dom card, \" (:text data))))))"),cljs.core.str("\n```\n")].join(''),"## `sablono' rendering syntax (hiccupish):",[cljs.core.str("\n```clojure\n"),cljs.core.str("(defn om-widget-sablono [data owner]\n  (om/component\n   (sab/html [:div [:h2 \"This is an sablano card, \" (:text data)]])))"),cljs.core.str("\n```\n")].join('')),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
if(typeof cljs_demo.react.om_test_atom !== 'undefined'){
} else {
cljs_demo.react.om_test_atom = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(20)], null));
}
cljs_demo.react.counter = (function cljs_demo$react$counter(data,owner){
if(typeof cljs_demo.react.t_cljs_demo$react17147 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs_demo.react.t_cljs_demo$react17147 = (function (counter,data,owner,meta17148){
this.counter = counter;
this.data = data;
this.owner = owner;
this.meta17148 = meta17148;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_demo.react.t_cljs_demo$react17147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17149,meta17148__$1){
var self__ = this;
var _17149__$1 = this;
return (new cljs_demo.react.t_cljs_demo$react17147(self__.counter,self__.data,self__.owner,meta17148__$1));
});

cljs_demo.react.t_cljs_demo$react17147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17149){
var self__ = this;
var _17149__$1 = this;
return self__.meta17148;
});

cljs_demo.react.t_cljs_demo$react17147.prototype.om$core$IRender$ = true;

cljs_demo.react.t_cljs_demo$react17147.prototype.om$core$IRender$render$arity$1 = (function (this__17118__auto__){
var self__ = this;
var this__17118__auto____$1 = this;
return React.createElement("div",null,(function (){var attrs17150 = om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"title","title",636505583));
return cljs.core.apply.call(null,React.createElement,"h1",((cljs.core.map_QMARK_.call(null,attrs17150))?sablono.interpreter.attributes.call(null,attrs17150):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17150))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(self__.data))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17150),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(self__.data))], null))));
})(),React.createElement("div",null,React.createElement("button",{"onClick": ((function (this__17118__auto____$1){
return (function (){
return om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.inc);
});})(this__17118__auto____$1))
},"inc")));
});

cljs_demo.react.t_cljs_demo$react17147.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"counter","counter",-1850427592,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta17148","meta17148",-314748931,null)], null);
});

cljs_demo.react.t_cljs_demo$react17147.cljs$lang$type = true;

cljs_demo.react.t_cljs_demo$react17147.cljs$lang$ctorStr = "cljs-demo.react/t_cljs_demo$react17147";

cljs_demo.react.t_cljs_demo$react17147.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs-demo.react/t_cljs_demo$react17147");
});

cljs_demo.react.__GT_t_cljs_demo$react17147 = (function cljs_demo$react$counter_$___GT_t_cljs_demo$react17147(counter__$1,data__$1,owner__$1,meta17148){
return (new cljs_demo.react.t_cljs_demo$react17147(counter__$1,data__$1,owner__$1,meta17148));
});

}

return (new cljs_demo.react.t_cljs_demo$react17147(cljs_demo$react$counter,data,owner,null));
});
cljs_demo.react.om_counter_inc = (function cljs_demo$react$om_counter_inc(data,owner){
return cljs_demo.react.counter.call(null,data,owner);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.react","cljs_demo.react",2098160339),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"## Using State with Om\n\n- Om manages state in a more structured way.\n- We have to use `om/transact!`.\n- But there is more explicit creation of components and data management",[cljs.core.str("\n```clojure\n"),cljs.core.str("(defn counter [data owner]\n  ;; Owner is the component above counter\n  ;; data is our app state\n  (om/component\n   (sab/html\n    [:div\n     [:h1 (om/get-shared owner :title) (:count data)]\n     [:div [:button {:onClick #(om/transact! data :count inc)}\n            \"inc\"]]])))"),cljs.core.str("\n```\n")].join('')),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.react","cljs_demo.react",2098160339),new cljs.core.Keyword(null,"omcard-state-mgmt","omcard-state-mgmt",1576329038)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"omcard-state-mgmt",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"_Rendered using Om counter component_",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof cljs_demo.react.t_cljs_demo$react17151 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
cljs_demo.react.t_cljs_demo$react17151 = (function (meta17152){
this.meta17152 = meta17152;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_demo.react.t_cljs_demo$react17151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17153,meta17152__$1){
var self__ = this;
var _17153__$1 = this;
return (new cljs_demo.react.t_cljs_demo$react17151(meta17152__$1));
});

cljs_demo.react.t_cljs_demo$react17151.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17153){
var self__ = this;
var _17153__$1 = this;
return self__.meta17152;
});

cljs_demo.react.t_cljs_demo$react17151.prototype.devcards$core$IDevcardOptions$ = true;

cljs_demo.react.t_cljs_demo$react17151.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__14142__auto__,devcard_opts__14143__auto__){
var self__ = this;
var this__14142__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__14143__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.dom_node_STAR_.call(null,((function (this__14142__auto____$1){
return (function (data_atom__14175__auto__,node__14176__auto__){
return om.core.root.call(null,cljs_demo.react.om_counter_inc,data_atom__14175__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Counter State: "], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),node__14176__auto__], null)));
});})(this__14142__auto____$1))
),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),true], null),devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__14143__auto__))));
});

cljs_demo.react.t_cljs_demo$react17151.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta17152","meta17152",1412503215,null)], null);
});

cljs_demo.react.t_cljs_demo$react17151.cljs$lang$type = true;

cljs_demo.react.t_cljs_demo$react17151.cljs$lang$ctorStr = "cljs-demo.react/t_cljs_demo$react17151";

cljs_demo.react.t_cljs_demo$react17151.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs-demo.react/t_cljs_demo$react17151");
});

cljs_demo.react.__GT_t_cljs_demo$react17151 = (function cljs_demo$react$__GT_t_cljs_demo$react17151(meta17152){
return (new cljs_demo.react.t_cljs_demo$react17151(meta17152));
});

}

return (new cljs_demo.react.t_cljs_demo$react17151(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs_demo.react.om_test_atom,new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.react","cljs_demo.react",2098160339),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"[Next: Async in Clojurescript](#!/cljs_demo.async)"),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));

//# sourceMappingURL=react.js.map?rel=1453863899237