// Compiled by ClojureScript 1.7.170 {}
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('devcards.util.utils');
goog.require('devcards.system');
goog.require('cljs.core.async');
goog.require('cljs.test');
goog.require('devcards.util.markdown');
goog.require('sablono.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof devcards.core.devcard_event_chan !== 'undefined'){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.call(null);
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__23786__auto__ = (function (){var and__23774__auto__ = typeof Symbol !== 'undefined';
if(and__23774__auto__){
var and__23774__auto____$1 = cljs.core.fn_QMARK_.call(null,Symbol);
if(and__23774__auto____$1){
var and__23774__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__23774__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__23774__auto____$2;
}
} else {
return and__23774__auto____$1;
}
} else {
return and__23774__auto__;
}
})();
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if(typeof devcards.core.register_listeners_fig !== 'undefined'){
return null;
} else {
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__43733_SHARP_){
return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__43733_SHARP_.detail], null));
}));

return true;
})()
;
}
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_.call(null,m)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),m], null)], null)], null);
} else {
return m;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(var_args){
var args43734 = [];
var len__24844__auto___43737 = arguments.length;
var i__24845__auto___43738 = (0);
while(true){
if((i__24845__auto___43738 < len__24844__auto___43737)){
args43734.push((arguments[i__24845__auto___43738]));

var G__43739 = (i__24845__auto___43738 + (1));
i__24845__auto___43738 = G__43739;
continue;
} else {
}
break;
}

var G__43736 = args43734.length;
switch (G__43736) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43734.length)].join('')));

}
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devcards.core.start_devcard_ui_BANG__STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (options){
if((cljs.core.map_QMARK_.call(null,options)) && (cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),(function (opts){
return cljs.core.merge.call(null,opts,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options));
}));
} else {
}

devcards.system.start_ui.call(null,devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_.call(null);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$maxFixedArity = 1;
devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__23774__auto__ = cljs.core.map_QMARK_.call(null,c);
if(and__23774__auto__){
var map__43747 = c;
var map__43747__$1 = ((((!((map__43747 == null)))?((((map__43747.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43747.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43747):map__43747);
var path = cljs.core.get.call(null,map__43747__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.call(null,map__43747__$1,new cljs.core.Keyword(null,"func","func",-238706040));
cljs.core.vector_QMARK_.call(null,path);

cljs.core.not_empty.call(null,path);

cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_.call(null,func);
} else {
return and__23774__auto__;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(cljs.core.truth_(devcards.core.card_QMARK_.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"card?","card?",2082377665,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}


return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-card","register-card",-1375971588),c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(cljs.core.hash.call(null,raw_html_str))].join(''),new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),raw_html_str], null)], null)));
});
devcards.core.get_props;

devcards.core.ref__GT_node;
devcards.core.get_hljs = (function devcards$core$get_hljs(){
return (goog.global["hljs"]);
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__4425__auto__ = devcards.core.ref__GT_node.call(null,this$,"code-ref");
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
var temp__4425__auto____$1 = devcards.core.get_hljs.call(null);
if(cljs.core.truth_(temp__4425__auto____$1)){
var hljs = temp__4425__auto____$1;
var temp__4425__auto____$2 = (hljs["highlightBlock"]);
if(cljs.core.truth_(temp__4425__auto____$2)){
var highlight_block = temp__4425__auto____$2;
return highlight_block.call(null,node);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
var base__26393__auto___43753 = {"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "render": (function (){
var this$ = this;
return React.createElement("pre",{"className": (cljs.core.truth_(devcards.core.get_hljs.call(null))?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))},React.createElement("code",{"className": (function (){var or__23786__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"lang","lang",-1819677104));
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return "";
}
})(), "ref": "code-ref"},sablono.interpreter.interpret.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))));
})};
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__26393__auto___43753);
}

var seq__43749_43754 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__43750_43755 = null;
var count__43751_43756 = (0);
var i__43752_43757 = (0);
while(true){
if((i__43752_43757 < count__43751_43756)){
var property__26394__auto___43758 = cljs.core._nth.call(null,chunk__43750_43755,i__43752_43757);
if(cljs.core.truth_((base__26393__auto___43753[property__26394__auto___43758]))){
(devcards.core.CodeHighlight.prototype[property__26394__auto___43758] = (base__26393__auto___43753[property__26394__auto___43758]));
} else {
}

var G__43759 = seq__43749_43754;
var G__43760 = chunk__43750_43755;
var G__43761 = count__43751_43756;
var G__43762 = (i__43752_43757 + (1));
seq__43749_43754 = G__43759;
chunk__43750_43755 = G__43760;
count__43751_43756 = G__43761;
i__43752_43757 = G__43762;
continue;
} else {
var temp__4425__auto___43763 = cljs.core.seq.call(null,seq__43749_43754);
if(temp__4425__auto___43763){
var seq__43749_43764__$1 = temp__4425__auto___43763;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43749_43764__$1)){
var c__24589__auto___43765 = cljs.core.chunk_first.call(null,seq__43749_43764__$1);
var G__43766 = cljs.core.chunk_rest.call(null,seq__43749_43764__$1);
var G__43767 = c__24589__auto___43765;
var G__43768 = cljs.core.count.call(null,c__24589__auto___43765);
var G__43769 = (0);
seq__43749_43754 = G__43766;
chunk__43750_43755 = G__43767;
count__43751_43756 = G__43768;
i__43752_43757 = G__43769;
continue;
} else {
var property__26394__auto___43770 = cljs.core.first.call(null,seq__43749_43764__$1);
if(cljs.core.truth_((base__26393__auto___43753[property__26394__auto___43770]))){
(devcards.core.CodeHighlight.prototype[property__26394__auto___43770] = (base__26393__auto___43753[property__26394__auto___43770]));
} else {
}

var G__43771 = cljs.core.next.call(null,seq__43749_43764__$1);
var G__43772 = null;
var G__43773 = (0);
var G__43774 = (0);
seq__43749_43754 = G__43771;
chunk__43750_43755 = G__43772;
count__43751_43756 = G__43773;
i__43752_43757 = G__43774;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
return React.createElement(devcards.core.CodeHighlight,{"code": code_str, "lang": lang});
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__24699__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__24700__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__24701__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__24702__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__24703__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","markdown-block->react"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__24703__auto__,method_table__24699__auto__,prefer_table__24700__auto__,method_cache__24701__auto__,cached_hierarchy__24702__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__43775){
var map__43776 = p__43775;
var map__43776__$1 = ((((!((map__43776 == null)))?((((map__43776.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43776.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43776):map__43776);
var content = cljs.core.get.call(null,map__43776__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw.call(null,devcards.util.markdown.markdown_to_html.call(null,content));
}));
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__43778){
var map__43779 = p__43778;
var map__43779__$1 = ((((!((map__43779 == null)))?((((map__43779.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43779.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43779):map__43779);
var block = map__43779__$1;
var content = cljs.core.get.call(null,map__43779__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.createElement(devcards.core.CodeHighlight,{"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)});
}));
devcards.core.react_element_QMARK_;
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__24851__auto__ = [];
var len__24844__auto___43783 = arguments.length;
var i__24845__auto___43784 = (0);
while(true){
if((i__24845__auto___43784 < len__24844__auto___43783)){
args__24851__auto__.push((arguments[i__24845__auto___43784]));

var G__43785 = (i__24845__auto___43784 + (1));
i__24845__auto___43784 = G__43785;
continue;
} else {
}
break;
}

var argseq__24852__auto__ = ((((0) < args__24851__auto__.length))?(new cljs.core.IndexedSeq(args__24851__auto__.slice((0)),(0))):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__24852__auto__);
});

devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.call(null,(function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_(devcards.core.react_element_QMARK_.call(null,x))){
return null;
} else {
return [cljs.core.str("```clojure\n"),cljs.core.str(devcards.util.utils.pprint_code.call(null,x)),cljs.core.str("```\n")].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.call(null,devcards.util.markdown.parse_out_blocks,strs__$1);
var attrs43782 = cljs.core.map.call(null,devcards.core.markdown_block__GT_react,blocks);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43782))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-markdown","com-rigsomelight-devcards-typog"], null)], null),attrs43782)):{"className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43782))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43782)], null))));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown. \n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

return React.createElement("div",{"style": {"color": "#a94442"}},sablono.interpreter.interpret.call(null,message));
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq43781){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43781));
});
devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
return React.createElement("div",{"key": [cljs.core.str(cljs.core.hash.call(null,card)),cljs.core.str("2")].join(''), "className": (function (){var G__43787 = devcards.system.devcards_rendered_card_class;
var G__43787__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__43787),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__43787);
var G__43787__$2 = (cljs.core.truth_(cljs.core.not_empty.call(null,classname))?[cljs.core.str(G__43787__$1),cljs.core.str(" "),cljs.core.str(classname)].join(''):G__43787__$1);
return G__43787__$2;
})()},sablono.interpreter.interpret.call(null,children));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args43788 = [];
var len__24844__auto___43796 = arguments.length;
var i__24845__auto___43797 = (0);
while(true){
if((i__24845__auto___43797 < len__24844__auto___43796)){
args43788.push((arguments[i__24845__auto___43797]));

var G__43798 = (i__24845__auto___43797 + (1));
i__24845__auto___43797 = G__43798;
continue;
} else {
}
break;
}

var G__43790 = args43788.length;
switch (G__43790) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43788.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.call(null,children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__43791 = card;
var map__43791__$1 = ((((!((map__43791 == null)))?((((map__43791.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43791.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43791):map__43791);
var path = cljs.core.get.call(null,map__43791__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__43791__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
return React.createElement("div",{"key": cljs.core.prn_str.call(null,path), "className": [cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')},sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
} else {
return React.createElement("div",{"key": cljs.core.prn_str.call(null,path), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"},React.createElement("div",{"key": [cljs.core.str(cljs.core.hash.call(null,card)),cljs.core.str("1")].join(''), "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"},(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (map__43791,map__43791__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(map__43791,map__43791__$1,path,options))
)},sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path)))," ")):sablono.interpreter.interpret.call(null,(function (){var attrs43793 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs43793))?sablono.interpreter.attributes.call(null,attrs43793):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43793))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43793)], null))));
})()))),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
}
} else {
return React.createElement("span",null);
}
});

devcards.core.frame.cljs$lang$maxFixedArity = 2;

/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
var x__24441__auto__ = (((this$ == null))?null:this$);
var m__24442__auto__ = (devcards.core._devcard_options[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,this$,devcard_opts);
} else {
var m__24442__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcardOptions.-devcard-options",this$);
}
}
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
var x__24441__auto__ = (((this$ == null))?null:this$);
var m__24442__auto__ = (devcards.core._devcard[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,this$,devcard_opts);
} else {
var m__24442__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcard.-devcard",this$);
}
}
}
});

devcards.core.hist_recorder_STAR_;
devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__4425__auto__ = (this$.refs[ref]);
if(cljs.core.truth_(temp__4425__auto__)){
var comp = temp__4425__auto__;
return ReactDOM.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
return (this$.props[cljs.core.name.call(null,k)]);
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return (this$.state[cljs.core.name.call(null,k)]);
} else {
return null;
}
});
var base__26393__auto___43805 = {"shouldComponentUpdate": (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.call(null,(next_props["change_count"]),devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"change_count","change_count",-533812109)));
return update_QMARK_;
}), "render": (function (){
var this$ = this;
var attrs43800 = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"children_thunk","children_thunk",-1161306645));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43800))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs43800)):{"className": "com-rigsomelight-dont-update"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43800))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43800)], null))));
})};
if(typeof devcards.core.DontUpdate !== 'undefined'){
} else {
devcards.core.DontUpdate = React.createClass(base__26393__auto___43805);
}

var seq__43801_43806 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__43802_43807 = null;
var count__43803_43808 = (0);
var i__43804_43809 = (0);
while(true){
if((i__43804_43809 < count__43803_43808)){
var property__26394__auto___43810 = cljs.core._nth.call(null,chunk__43802_43807,i__43804_43809);
if(cljs.core.truth_((base__26393__auto___43805[property__26394__auto___43810]))){
(devcards.core.DontUpdate.prototype[property__26394__auto___43810] = (base__26393__auto___43805[property__26394__auto___43810]));
} else {
}

var G__43811 = seq__43801_43806;
var G__43812 = chunk__43802_43807;
var G__43813 = count__43803_43808;
var G__43814 = (i__43804_43809 + (1));
seq__43801_43806 = G__43811;
chunk__43802_43807 = G__43812;
count__43803_43808 = G__43813;
i__43804_43809 = G__43814;
continue;
} else {
var temp__4425__auto___43815 = cljs.core.seq.call(null,seq__43801_43806);
if(temp__4425__auto___43815){
var seq__43801_43816__$1 = temp__4425__auto___43815;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43801_43816__$1)){
var c__24589__auto___43817 = cljs.core.chunk_first.call(null,seq__43801_43816__$1);
var G__43818 = cljs.core.chunk_rest.call(null,seq__43801_43816__$1);
var G__43819 = c__24589__auto___43817;
var G__43820 = cljs.core.count.call(null,c__24589__auto___43817);
var G__43821 = (0);
seq__43801_43806 = G__43818;
chunk__43802_43807 = G__43819;
count__43803_43808 = G__43820;
i__43804_43809 = G__43821;
continue;
} else {
var property__26394__auto___43822 = cljs.core.first.call(null,seq__43801_43816__$1);
if(cljs.core.truth_((base__26393__auto___43805[property__26394__auto___43822]))){
(devcards.core.DontUpdate.prototype[property__26394__auto___43822] = (base__26393__auto___43805[property__26394__auto___43822]));
} else {
}

var G__43823 = cljs.core.next.call(null,seq__43801_43816__$1);
var G__43824 = null;
var G__43825 = (0);
var G__43826 = (0);
seq__43801_43806 = G__43823;
chunk__43802_43807 = G__43824;
count__43803_43808 = G__43825;
i__43804_43809 = G__43826;
continue;
}
} else {
}
}
break;
}
devcards.core.dont_update = (function devcards$core$dont_update(change_count,children_thunk){
return React.createElement(devcards.core.DontUpdate,{"change_count": change_count, "children_thunk": children_thunk});
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__23786__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || (data.cljs$core$IAtom$))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data))){
return data;
} else {
return cljs.core.atom.call(null,data);
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
return devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
}):(function (this$){
return devcards.core.wrangle_inital_data.call(null,this$);
}));
devcards.core.atom_like_QMARK_;
var base__26393__auto___43834 = {"getInitialState": (function (){
return {"unique_id": cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-base-","devcards-base-",-1457268595,null)), "state_change_count": (0)};
}), "componentDidUpdate": (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(new cljs.core.Keyword(null,"static-state","static-state",-1049492012).cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,initial_data))?cljs.core.deref.call(null,initial_data):initial_data);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,atom),data)){
return cljs.core.reset_BANG_.call(null,atom,data);
} else {
return null;
}
} else {
return null;
}
}), "componentWillMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return this$.setState((function (){var or__23786__auto__ = (function (){var and__23774__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(and__23774__auto__)){
return this$.state;
} else {
return and__23774__auto__;
}
})();
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return {"data_atom": devcards.core.wrangle_inital_data.call(null,this$)};
}
})());
}):(function (){
return null;
})), "componentWillUnmount": (function (){
var this$ = this;
var data_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_((function (){var and__23774__auto__ = data_atom;
if(cljs.core.truth_(and__23774__auto__)){
return id;
} else {
return and__23774__auto__;
}
})())){
return cljs.core.remove_watch.call(null,data_atom,id);
} else {
return null;
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
var temp__4425__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(temp__4425__auto__)){
var data_atom = temp__4425__auto__;
var temp__4425__auto____$1 = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_(temp__4425__auto____$1)){
var id = temp__4425__auto____$1;
return cljs.core.add_watch.call(null,data_atom,id,((function (id,temp__4425__auto____$1,data_atom,temp__4425__auto__,this$){
return (function (_,___$1,___$2,___$3){
return this$.setState({"state_change_count": (devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)) + (1))});
});})(id,temp__4425__auto____$1,data_atom,temp__4425__auto__,this$))
);
} else {
return null;
}
} else {
return null;
}
}):(function (){
return null;
})), "render": (function (){
var this$ = this;
var data_atom = devcards.core.get_data_atom.call(null,this$);
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var change_count = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612));
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_.call(null,m)){
return m.call(null,data_atom,this$);
} else {
return m;
}
})();
var main_obj = (((!((main_obj_SINGLEQUOTE_ == null))) && (cljs.core.not.call(null,devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_))))?devcards.core.code_highlight.call(null,devcards.util.utils.pprint_code.call(null,main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
var main = ((new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308).cljs$core$IFn$_invoke$arity$1(options) === false)?devcards.core.dont_update.call(null,change_count,main_obj):main_obj);
var hist_ctl = (cljs.core.truth_(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(options))?devcards.core.hist_recorder_STAR_.call(null,data_atom):null);
var document = (function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__4425__auto__)){
var docu = temp__4425__auto__;
return devcards.core.markdown__GT_react.call(null,docu);
} else {
return null;
}
})();
var edn = (cljs.core.truth_(new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006).cljs$core$IFn$_invoke$arity$1(options))?(function (){var attrs43829 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43829))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs43829)):{"className": "com-rigsomelight-devcards-padding-top-border"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43829))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43829)], null))));
})():null);
var card__$1 = (((typeof main_obj === 'string') || ((main_obj == null)))?cljs.core.assoc_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"hide-border","hide-border",1463657151)], null),true):card);
var children = cljs.core.keep.call(null,cljs.core.identity,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,edn),hist_ctl),main),document));
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.call(null,children,card__$1);
} else {
return React.createElement("div",{"className": "com-rigsomelight-devcards-frameless"},sablono.interpreter.interpret.call(null,children));
}
})};
if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass(base__26393__auto___43834);
}

var seq__43830_43835 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__43831_43836 = null;
var count__43832_43837 = (0);
var i__43833_43838 = (0);
while(true){
if((i__43833_43838 < count__43832_43837)){
var property__26394__auto___43839 = cljs.core._nth.call(null,chunk__43831_43836,i__43833_43838);
if(cljs.core.truth_((base__26393__auto___43834[property__26394__auto___43839]))){
(devcards.core.DevcardBase.prototype[property__26394__auto___43839] = (base__26393__auto___43834[property__26394__auto___43839]));
} else {
}

var G__43840 = seq__43830_43835;
var G__43841 = chunk__43831_43836;
var G__43842 = count__43832_43837;
var G__43843 = (i__43833_43838 + (1));
seq__43830_43835 = G__43840;
chunk__43831_43836 = G__43841;
count__43832_43837 = G__43842;
i__43833_43838 = G__43843;
continue;
} else {
var temp__4425__auto___43844 = cljs.core.seq.call(null,seq__43830_43835);
if(temp__4425__auto___43844){
var seq__43830_43845__$1 = temp__4425__auto___43844;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43830_43845__$1)){
var c__24589__auto___43846 = cljs.core.chunk_first.call(null,seq__43830_43845__$1);
var G__43847 = cljs.core.chunk_rest.call(null,seq__43830_43845__$1);
var G__43848 = c__24589__auto___43846;
var G__43849 = cljs.core.count.call(null,c__24589__auto___43846);
var G__43850 = (0);
seq__43830_43835 = G__43847;
chunk__43831_43836 = G__43848;
count__43832_43837 = G__43849;
i__43833_43838 = G__43850;
continue;
} else {
var property__26394__auto___43851 = cljs.core.first.call(null,seq__43830_43845__$1);
if(cljs.core.truth_((base__26393__auto___43834[property__26394__auto___43851]))){
(devcards.core.DevcardBase.prototype[property__26394__auto___43851] = (base__26393__auto___43834[property__26394__auto___43851]));
} else {
}

var G__43852 = cljs.core.next.call(null,seq__43830_43845__$1);
var G__43853 = null;
var G__43854 = (0);
var G__43855 = (0);
seq__43830_43835 = G__43852;
chunk__43831_43836 = G__43853;
count__43832_43837 = G__43854;
i__43833_43838 = G__43855;
continue;
}
} else {
}
}
break;
}
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
var temp__4425__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(temp__4425__auto__)){
var node_fn = temp__4425__auto__;
var temp__4425__auto____$1 = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4425__auto____$1)){
var node = temp__4425__auto____$1;
return node_fn.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),node);
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__26393__auto___43860 = {"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-dom-component-","devcards-dom-component-",-730322144,null)))].join('')};
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__23774__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(and__23774__auto__)){
return cljs.core.not_EQ_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791)),(prevP["node_fn"]));
} else {
return and__23774__auto__;
}
})())){
return devcards.core.render_into_dom.call(null,this$);
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__4425__auto__ = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
return ReactDOM.unmountComponentAtNode(node);
} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
return devcards.core.render_into_dom.call(null,this$);
}), "render": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return React.DOM.div({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329))},"Card has not mounted DOM node.");
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))};
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__26393__auto___43860);
}

var seq__43856_43861 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__43857_43862 = null;
var count__43858_43863 = (0);
var i__43859_43864 = (0);
while(true){
if((i__43859_43864 < count__43858_43863)){
var property__26394__auto___43865 = cljs.core._nth.call(null,chunk__43857_43862,i__43859_43864);
if(cljs.core.truth_((base__26393__auto___43860[property__26394__auto___43865]))){
(devcards.core.DomComponent.prototype[property__26394__auto___43865] = (base__26393__auto___43860[property__26394__auto___43865]));
} else {
}

var G__43866 = seq__43856_43861;
var G__43867 = chunk__43857_43862;
var G__43868 = count__43858_43863;
var G__43869 = (i__43859_43864 + (1));
seq__43856_43861 = G__43866;
chunk__43857_43862 = G__43867;
count__43858_43863 = G__43868;
i__43859_43864 = G__43869;
continue;
} else {
var temp__4425__auto___43870 = cljs.core.seq.call(null,seq__43856_43861);
if(temp__4425__auto___43870){
var seq__43856_43871__$1 = temp__4425__auto___43870;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43856_43871__$1)){
var c__24589__auto___43872 = cljs.core.chunk_first.call(null,seq__43856_43871__$1);
var G__43873 = cljs.core.chunk_rest.call(null,seq__43856_43871__$1);
var G__43874 = c__24589__auto___43872;
var G__43875 = cljs.core.count.call(null,c__24589__auto___43872);
var G__43876 = (0);
seq__43856_43861 = G__43873;
chunk__43857_43862 = G__43874;
count__43858_43863 = G__43875;
i__43859_43864 = G__43876;
continue;
} else {
var property__26394__auto___43877 = cljs.core.first.call(null,seq__43856_43871__$1);
if(cljs.core.truth_((base__26393__auto___43860[property__26394__auto___43877]))){
(devcards.core.DomComponent.prototype[property__26394__auto___43877] = (base__26393__auto___43860[property__26394__auto___43877]));
} else {
}

var G__43878 = cljs.core.next.call(null,seq__43856_43871__$1);
var G__43879 = null;
var G__43880 = (0);
var G__43881 = (0);
seq__43856_43861 = G__43878;
chunk__43857_43862 = G__43879;
count__43858_43863 = G__43880;
i__43859_43864 = G__43881;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__23786__auto__ = x === true;
if(or__23786__auto__){
return or__23786__auto__;
} else {
var or__23786__auto____$1 = x === false;
if(or__23786__auto____$1){
return or__23786__auto____$1;
} else {
var or__23786__auto____$2 = (x == null);
if(or__23786__auto____$2){
return or__23786__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be boolean or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__23786__auto__ = typeof x === 'string';
if(or__23786__auto__){
return or__23786__auto__;
} else {
var or__23786__auto____$1 = (x == null);
if(or__23786__auto____$1){
return or__23786__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be string or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__23786__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return cljs.core._EQ_.call(null,devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
var propagated_errors = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)], null));
return cljs.core.filter.call(null,((function (propagated_errors){
return (function (p1__43882_SHARP_){
return !(p1__43882_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__43891 = opts;
var map__43891__$1 = ((((!((map__43891 == null)))?((((map__43891.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43891.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43891):map__43891);
var name = cljs.core.get.call(null,map__43891__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.call(null,map__43891__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.call(null,map__43891__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.call(null,map__43891__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.concat.call(null,propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__23786__auto__ = cljs.core.map_QMARK_.call(null,options);
if(or__23786__auto__){
return or__23786__auto__;
} else {
var or__23786__auto____$1 = (options == null);
if(or__23786__auto____$1){
return or__23786__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil",new cljs.core.Keyword(null,"value","value",305978217),options], null);
}
}
})(),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177),opts),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999),opts),(function (){var or__23786__auto__ = (initial_data == null);
if(or__23786__auto__){
return or__23786__auto__;
} else {
var or__23786__auto____$1 = cljs.core.vector_QMARK_.call(null,initial_data);
if(or__23786__auto____$1){
return or__23786__auto____$1;
} else {
var or__23786__auto____$2 = cljs.core.map_QMARK_.call(null,initial_data);
if(or__23786__auto____$2){
return or__23786__auto____$2;
} else {
var or__23786__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || (initial_data.cljs$core$IAtom$))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data));
if(or__23786__auto____$3){
return or__23786__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.Keyword(null,"message","message",-406056002),"should be an Atom or a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),initial_data], null);
}
}
}
}
})()], null),cljs.core.mapv.call(null,((function (map__43891,map__43891__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__43883_SHARP_){
return devcards.core.booler_QMARK_.call(null,p1__43883_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
});})(map__43891,map__43891__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
return React.createElement("div",{"style": {"color": "#a94442", "display": "flex", "margin": "0.5em 0px"}},sablono.interpreter.interpret.call(null,React.createElement("code",{"style": {"flex": "1 100px", "marginRight": "10px"}},(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?sablono.interpreter.interpret.call(null,cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))):null))),React.createElement("span",{"style": {"flex": "3 100px", "marginRight": "10px"}},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e))),React.createElement("span",{"style": {"flex": "1 100px"}}," Received: ",(function (){var attrs43899 = cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs43899))?sablono.interpreter.attributes.call(null,attrs43899):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43899))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43899)], null))));
})()));
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
return React.createElement("div",{"className": "com-rigsomelight-devcards-card-base-no-pad"},(function (){var attrs43903 = [cljs.core.str((((cljs.core.map_QMARK_.call(null,opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43903))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs43903)):{"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43903))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43903)], null))));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,React.createElement("div",null,(function (){var attrs43904 = cljs.core.map.call(null,devcards.core.error_line,errors);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43904))?sablono.interpreter.attributes.call(null,attrs43904):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43904))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43904)], null))));
})(),((cljs.core.map_QMARK_.call(null,opts))?sablono.interpreter.interpret.call(null,(function (){var attrs43905 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43905))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs43905)):{"className": "com-rigsomelight-devcards-padding-top-border"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43905))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43905)], null))));
})()):null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null))));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.call(null,card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__43906_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__43906_SHARP_);
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options.call(null,card_options);
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return devcards.core.render_errors.call(null,card_options,errors);
} else {
return React.createElement(devcards.core.DevcardBase,{"card": devcards.core.add_environment_defaults.call(null,card_options)});
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentiyOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24400__auto__,k__24401__auto__){
var self__ = this;
var this__24400__auto____$1 = this;
return cljs.core._lookup.call(null,this__24400__auto____$1,k__24401__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24402__auto__,k43908,else__24403__auto__){
var self__ = this;
var this__24402__auto____$1 = this;
var G__43910 = (((k43908 instanceof cljs.core.Keyword))?k43908.fqn:null);
switch (G__43910) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43908,else__24403__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24414__auto__,writer__24415__auto__,opts__24416__auto__){
var self__ = this;
var this__24414__auto____$1 = this;
var pr_pair__24417__auto__ = ((function (this__24414__auto____$1){
return (function (keyval__24418__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24415__auto__,cljs.core.pr_writer,""," ","",opts__24416__auto__,keyval__24418__auto__);
});})(this__24414__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24415__auto__,pr_pair__24417__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__24416__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43907){
var self__ = this;
var G__43907__$1 = this;
return (new cljs.core.RecordIter((0),G__43907__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24398__auto__){
var self__ = this;
var this__24398__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24394__auto__){
var self__ = this;
var this__24394__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24404__auto__){
var self__ = this;
var this__24404__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24395__auto__){
var self__ = this;
var this__24395__auto____$1 = this;
var h__24221__auto__ = self__.__hash;
if(!((h__24221__auto__ == null))){
return h__24221__auto__;
} else {
var h__24221__auto____$1 = cljs.core.hash_imap.call(null,this__24395__auto____$1);
self__.__hash = h__24221__auto____$1;

return h__24221__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24396__auto__,other__24397__auto__){
var self__ = this;
var this__24396__auto____$1 = this;
if(cljs.core.truth_((function (){var and__23774__auto__ = other__24397__auto__;
if(cljs.core.truth_(and__23774__auto__)){
var and__23774__auto____$1 = (this__24396__auto____$1.constructor === other__24397__auto__.constructor);
if(and__23774__auto____$1){
return cljs.core.equiv_map.call(null,this__24396__auto____$1,other__24397__auto__);
} else {
return and__23774__auto____$1;
}
} else {
return and__23774__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24409__auto__,k__24410__auto__){
var self__ = this;
var this__24409__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__24410__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24409__auto____$1),self__.__meta),k__24410__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24410__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24407__auto__,k__24408__auto__,G__43907){
var self__ = this;
var this__24407__auto____$1 = this;
var pred__43911 = cljs.core.keyword_identical_QMARK_;
var expr__43912 = k__24408__auto__;
if(cljs.core.truth_(pred__43911.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__43912))){
return (new devcards.core.IdentiyOptions(G__43907,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24408__auto__,G__43907),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24412__auto__){
var self__ = this;
var this__24412__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24399__auto__,G__43907){
var self__ = this;
var this__24399__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__43907,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24405__auto__,entry__24406__auto__){
var self__ = this;
var this__24405__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24406__auto__)){
return cljs.core._assoc.call(null,this__24405__auto____$1,cljs.core._nth.call(null,entry__24406__auto__,(0)),cljs.core._nth.call(null,entry__24406__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24405__auto____$1,entry__24406__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__24434__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__24434__auto__,writer__24435__auto__){
return cljs.core._write.call(null,writer__24435__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__43909){
return (new devcards.core.IdentiyOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__43909),null,cljs.core.dissoc.call(null,G__43909,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__43915){
var map__43918 = p__43915;
var map__43918__$1 = ((((!((map__43918 == null)))?((((map__43918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43918):map__43918);
var devcard_opts = map__43918__$1;
var options = cljs.core.get.call(null,map__43918__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),((function (map__43918,map__43918__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
});})(map__43918,map__43918__$1,devcard_opts,options))
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),main_obj,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),true], null),devcards.core.assert_options_map.call(null,options)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24400__auto__,k__24401__auto__){
var self__ = this;
var this__24400__auto____$1 = this;
return cljs.core._lookup.call(null,this__24400__auto____$1,k__24401__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24402__auto__,k43921,else__24403__auto__){
var self__ = this;
var this__24402__auto____$1 = this;
var G__43923 = (((k43921 instanceof cljs.core.Keyword))?k43921.fqn:null);
switch (G__43923) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43921,else__24403__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24414__auto__,writer__24415__auto__,opts__24416__auto__){
var self__ = this;
var this__24414__auto____$1 = this;
var pr_pair__24417__auto__ = ((function (this__24414__auto____$1){
return (function (keyval__24418__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24415__auto__,cljs.core.pr_writer,""," ","",opts__24416__auto__,keyval__24418__auto__);
});})(this__24414__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24415__auto__,pr_pair__24417__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__24416__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43920){
var self__ = this;
var G__43920__$1 = this;
return (new cljs.core.RecordIter((0),G__43920__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24398__auto__){
var self__ = this;
var this__24398__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24394__auto__){
var self__ = this;
var this__24394__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24404__auto__){
var self__ = this;
var this__24404__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24395__auto__){
var self__ = this;
var this__24395__auto____$1 = this;
var h__24221__auto__ = self__.__hash;
if(!((h__24221__auto__ == null))){
return h__24221__auto__;
} else {
var h__24221__auto____$1 = cljs.core.hash_imap.call(null,this__24395__auto____$1);
self__.__hash = h__24221__auto____$1;

return h__24221__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24396__auto__,other__24397__auto__){
var self__ = this;
var this__24396__auto____$1 = this;
if(cljs.core.truth_((function (){var and__23774__auto__ = other__24397__auto__;
if(cljs.core.truth_(and__23774__auto__)){
var and__23774__auto____$1 = (this__24396__auto____$1.constructor === other__24397__auto__.constructor);
if(and__23774__auto____$1){
return cljs.core.equiv_map.call(null,this__24396__auto____$1,other__24397__auto__);
} else {
return and__23774__auto____$1;
}
} else {
return and__23774__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24409__auto__,k__24410__auto__){
var self__ = this;
var this__24409__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__24410__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24409__auto____$1),self__.__meta),k__24410__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24410__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24407__auto__,k__24408__auto__,G__43920){
var self__ = this;
var this__24407__auto____$1 = this;
var pred__43924 = cljs.core.keyword_identical_QMARK_;
var expr__43925 = k__24408__auto__;
if(cljs.core.truth_(pred__43924.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__43925))){
return (new devcards.core.AtomLikeOptions(G__43920,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24408__auto__,G__43920),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24412__auto__){
var self__ = this;
var this__24412__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24399__auto__,G__43920){
var self__ = this;
var this__24399__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__43920,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24405__auto__,entry__24406__auto__){
var self__ = this;
var this__24405__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24406__auto__)){
return cljs.core._assoc.call(null,this__24405__auto____$1,cljs.core._nth.call(null,entry__24406__auto__,(0)),cljs.core._nth.call(null,entry__24406__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24405__auto____$1,entry__24406__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__24434__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__24434__auto__,writer__24435__auto__){
return cljs.core._write.call(null,writer__24435__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__43922){
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__43922),null,cljs.core.dissoc.call(null,G__43922,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.util.edn_renderer.html_edn.call(null,((((!((main_obj == null)))?((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (main_obj.cljs$core$IDeref$))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj)))?cljs.core.deref.call(null,main_obj):main_obj)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24400__auto__,k__24401__auto__){
var self__ = this;
var this__24400__auto____$1 = this;
return cljs.core._lookup.call(null,this__24400__auto____$1,k__24401__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24402__auto__,k43931,else__24403__auto__){
var self__ = this;
var this__24402__auto____$1 = this;
var G__43933 = (((k43931 instanceof cljs.core.Keyword))?k43931.fqn:null);
switch (G__43933) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43931,else__24403__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24414__auto__,writer__24415__auto__,opts__24416__auto__){
var self__ = this;
var this__24414__auto____$1 = this;
var pr_pair__24417__auto__ = ((function (this__24414__auto____$1){
return (function (keyval__24418__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24415__auto__,cljs.core.pr_writer,""," ","",opts__24416__auto__,keyval__24418__auto__);
});})(this__24414__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24415__auto__,pr_pair__24417__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__24416__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43930){
var self__ = this;
var G__43930__$1 = this;
return (new cljs.core.RecordIter((0),G__43930__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24398__auto__){
var self__ = this;
var this__24398__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24394__auto__){
var self__ = this;
var this__24394__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24404__auto__){
var self__ = this;
var this__24404__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24395__auto__){
var self__ = this;
var this__24395__auto____$1 = this;
var h__24221__auto__ = self__.__hash;
if(!((h__24221__auto__ == null))){
return h__24221__auto__;
} else {
var h__24221__auto____$1 = cljs.core.hash_imap.call(null,this__24395__auto____$1);
self__.__hash = h__24221__auto____$1;

return h__24221__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24396__auto__,other__24397__auto__){
var self__ = this;
var this__24396__auto____$1 = this;
if(cljs.core.truth_((function (){var and__23774__auto__ = other__24397__auto__;
if(cljs.core.truth_(and__23774__auto__)){
var and__23774__auto____$1 = (this__24396__auto____$1.constructor === other__24397__auto__.constructor);
if(and__23774__auto____$1){
return cljs.core.equiv_map.call(null,this__24396__auto____$1,other__24397__auto__);
} else {
return and__23774__auto____$1;
}
} else {
return and__23774__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24409__auto__,k__24410__auto__){
var self__ = this;
var this__24409__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__24410__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24409__auto____$1),self__.__meta),k__24410__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24410__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24407__auto__,k__24408__auto__,G__43930){
var self__ = this;
var this__24407__auto____$1 = this;
var pred__43934 = cljs.core.keyword_identical_QMARK_;
var expr__43935 = k__24408__auto__;
if(cljs.core.truth_(pred__43934.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__43935))){
return (new devcards.core.EdnLikeOptions(G__43930,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24408__auto__,G__43930),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24412__auto__){
var self__ = this;
var this__24412__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24399__auto__,G__43930){
var self__ = this;
var this__24399__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__43930,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24405__auto__,entry__24406__auto__){
var self__ = this;
var this__24405__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24406__auto__)){
return cljs.core._assoc.call(null,this__24405__auto____$1,cljs.core._nth.call(null,entry__24406__auto__,(0)),cljs.core._nth.call(null,entry__24406__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24405__auto____$1,entry__24406__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__24434__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__24434__auto__,writer__24435__auto__){
return cljs.core._write.call(null,writer__24435__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__43932){
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__43932),null,cljs.core.dissoc.call(null,G__43932,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__23774__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || (x.cljs$core$IWatchable$))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x));
if(and__23774__auto__){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
} else {
return and__23774__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if(((!((main_obj == null)))?(((false) || (main_obj.devcards$core$IDevcardOptions$))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,main_obj))){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(cljs.core.truth_(devcards.core.edn_like_QMARK_.call(null,main_obj))){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentiyOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__43949 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__43949 == null))){
if((false) || (G__43949.devcards$core$IDevcard$)){
return true;
} else {
if((!G__43949.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__43949);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__43949);
}
})()){
return devcards.core._devcard.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors.call(null,devcards.core._devcard_options.call(null,devcards.core.coerce_to_devcards_options.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
return React.createElement(devcards.core.DomComponent,{"node_fn": node_fn, "data_atom": data_atom});
});
});
(devcards.core.IDevcardOptions["string"] = true);

(devcards.core._devcard_options["string"] = (function (this$,devcard_opts){
return cljs.core.update_in.call(null,devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742)], null),devcards.core.markdown__GT_react);
}));
cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.List.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,this$__$1,devcard_opts);
});
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__43952 = cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__43952__$1 = ((((!((map__43952 == null)))?((((map__43952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43952):map__43952);
var history = cljs.core.get.call(null,map__43952__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__43952__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
return ((pointer + (1)) < cljs.core.count.call(null,history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__43956 = cljs.core.deref.call(null,history_atom);
var map__43956__$1 = ((((!((map__43956 == null)))?((((map__43956.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43956.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43956):map__43956);
var history = cljs.core.get.call(null,map__43956__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__43956__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_back.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer + (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer + (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__43960 = cljs.core.deref.call(null,history_atom);
var map__43960__$1 = ((((!((map__43960 == null)))?((((map__43960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43960):map__43960);
var history = cljs.core.get.call(null,map__43960__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__43960__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer - (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer - (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__43964 = cljs.core.deref.call(null,history_atom);
var map__43964__$1 = ((((!((map__43964 == null)))?((((map__43964.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43964.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43964):map__43964);
var history = cljs.core.get.call(null,map__43964__$1,new cljs.core.Keyword(null,"history","history",-247395220));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.first.call(null,history));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = React.createClass({"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-history-runner-","devcards-history-runner-",-1709703043,null)))].join(''), "history_atom": cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0)], null))};
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.deref.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)))));
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
if(cljs.core.truth_((function (){var and__23774__auto__ = data_atom;
if(cljs.core.truth_(and__23774__auto__)){
return id;
} else {
return and__23774__auto__;
}
})())){
return cljs.core.add_watch.call(null,data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_.call(null,this$))){
return cljs.core.swap_BANG_.call(null,history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__43966){
var map__43967 = p__43966;
var map__43967__$1 = ((((!((map__43967 == null)))?((((map__43967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43967):map__43967);
var ha = map__43967__$1;
var pointer = cljs.core.get.call(null,map__43967__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.call(null,map__43967__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.call(null,map__43967__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
} else {
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var abridged_hist = cljs.core.drop.call(null,pointer,history);
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,abridged_hist))){
return cljs.core.cons.call(null,n,abridged_hist);
} else {
return abridged_hist;
}
})(),new cljs.core.Keyword(null,"pointer","pointer",85071187),(0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var hist = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,history_atom));
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,hist))){
return cljs.core.cons.call(null,n,hist);
} else {
return hist;
}
})(),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
}
});})(data_atom,id,history_atom,this$))
);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
if(cljs.core.truth_((function (){var or__23786__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())){
return React.createElement("div",{"style": {"display": (cljs.core.truth_((function (){var or__23786__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())?"block":"none")}, "className": "com-rigsomelight-devcards-history-control-bar"},(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_back.call(null,this$))?"visible":"hidden")}, "href": "#", "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-left"},"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
return cljs.core.reset_BANG_.call(null,data_atom,cljs.core.deref.call(null,data_atom));
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-stop"},"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-right"},"")));
})(),(function (){var listener = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": listener, "onTouchEnd": listener},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-small-arrow"}),React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-small-arrow"}),React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-block"})));
})());
} else {
return null;
}
})});
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
return React.createElement(devcards.core.HistoryComponent,{"data_atom": data_atom});
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206)], null),cljs.core.conj,cljs.core.merge.call(null,cljs.core.select_keys.call(null,cljs.test.get_current_env.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)),m));
});
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"pass","pass",1574159993)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463)], null),(function (m){
devcards.core.collect_test.call(null,m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR_43982 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));

try{f.call(null);

return cljs.test.get_current_env.call(null);
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_43982;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__24699__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__24700__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__24701__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__24702__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__24703__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","test-render"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__24703__auto__,method_table__24699__auto__,prefer_table__24700__auto__,method_cache__24701__auto__,cached_hierarchy__24702__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
var attrs43983 = cljs.core.prn_str.call(null,m);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43983))?sablono.interpreter.attributes.call(null,attrs43983):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43983))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43983)], null))));
}));
devcards.core.display_message = (function devcards$core$display_message(p__43984,body){
var map__43988 = p__43984;
var map__43988__$1 = ((((!((map__43988 == null)))?((((map__43988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43988):map__43988);
var message = cljs.core.get.call(null,map__43988__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
return React.createElement("div",null,(function (){var attrs43990 = message;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs43990))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs43990)):{"className": "com-rigsomelight-devcards-test-message"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43990))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43990)], null))));
})(),sablono.interpreter.interpret.call(null,body));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__43991){
var map__43999 = p__43991;
var map__43999__$1 = ((((!((map__43999 == null)))?((((map__43999.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43999.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43999):map__43999);
var m = map__43999__$1;
var expected = cljs.core.get.call(null,map__43999__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__43999__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var type = cljs.core.get.call(null,map__43999__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return devcards.core.display_message.call(null,m,(function (){var attrs44001 = React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,expected), "lang": "clojure"});
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs44001))?sablono.interpreter.attributes.call(null,attrs44001):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs44001))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?sablono.interpreter.interpret.call(null,React.createElement("div",{"style": {"marginTop": "5px"}},React.createElement("div",{"style": {"position": "absolute", "fontSize": "0.9em"}},"\u25B6"),React.createElement("div",{"style": {"marginLeft": "20px"}},sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"}))))):null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs44001),((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?sablono.interpreter.interpret.call(null,React.createElement("div",{"style": {"marginTop": "5px"}},React.createElement("div",{"style": {"position": "absolute", "fontSize": "0.9em"}},"\u25B6"),React.createElement("div",{"style": {"marginLeft": "20px"}},sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"}))))):null)], null))));
})());
});
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message.call(null,m,React.createElement("div",null,React.createElement("strong",null,"Error: "),(function (){var attrs44008 = [cljs.core.str(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs44008))?sablono.interpreter.attributes.call(null,attrs44008):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs44008))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs44008)], null))));
})()));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs44009 = devcards.core.markdown__GT_react.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs44009))?sablono.interpreter.attributes.call(null,attrs44009):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs44009))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs44009)], null))));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__44010){
var map__44011 = p__44010;
var map__44011__$1 = ((((!((map__44011 == null)))?((((map__44011.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44011.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44011):map__44011);
var testing_contexts = cljs.core.get.call(null,map__44011__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs44013 = cljs.core.interpose.call(null," / ",cljs.core.concat.call(null,cljs.core.map.call(null,((function (map__44011,map__44011__$1,testing_contexts){
return (function (t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
});})(map__44011,map__44011__$1,testing_contexts))
,cljs.core.reverse.call(null,cljs.core.rest.call(null,testing_contexts))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.first.call(null,testing_contexts)], null))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs44013))?sablono.interpreter.attributes.call(null,attrs44013):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs44013))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs44013)], null))));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),devcards.core.test_render.call(null,t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs44018 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__44019,t){
var map__44020 = p__44019;
var map__44020__$1 = ((((!((map__44020 == null)))?((((map__44020.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44020.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44020):map__44020);
var last_context = cljs.core.get.call(null,map__44020__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.call(null,map__44020__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = cljs.core._conj.call(null,cljs.core.List.EMPTY,devcards.core.test_renderer.call(null,t));
var res__$1 = ((cljs.core._EQ_.call(null,last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons.call(null,devcards.core.test_renderer.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)))),res):res));
return cljs.core.concat.call(null,html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse.call(null,tests)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs44018))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs44018)):{"className": "com-rigsomelight-devcards-test-card"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs44018))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs44018)], null))));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.call(null,((function (error_QMARK_,tests){
return (function (p__44034){
var map__44035 = p__44034;
var map__44035__$1 = ((((!((map__44035 == null)))?((((map__44035.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44035.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44035):map__44035);
var type = cljs.core.get.call(null,map__44035__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
});})(error_QMARK_,tests))
,new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count.call(null,some_tests);
var map__44033 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__44033__$1 = ((((!((map__44033 == null)))?((((map__44033.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44033.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44033):map__44033);
var fail = cljs.core.get.call(null,map__44033__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.call(null,map__44033__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.call(null,map__44033__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
return React.createElement("div",{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"},React.createElement("div",{"className": "com-rigsomelight-devcards-panel-heading"},React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__44033,map__44033__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(error_QMARK_,tests,some_tests,total_tests,map__44033,map__44033__$1,fail,pass,error,error__$1))
)},(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,[cljs.core.str(cljs.core.name.call(null,cljs.core.last.call(null,path)))].join('')):null)),React.createElement("button",{"style": {"float": "right", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__44033,map__44033__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": cljs.core.identity});
});})(error_QMARK_,tests,some_tests,total_tests,map__44033,map__44033__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,total_tests)),((((fail + error__$1) === (0)))?null:sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__44033,map__44033__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__44033,map__44033__$1,fail,pass,error,error__$1){
return (function (p__44038){
var map__44039 = p__44038;
var map__44039__$1 = ((((!((map__44039 == null)))?((((map__44039.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44039.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44039):map__44039);
var type = cljs.core.get.call(null,map__44039__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,type);
});})(error_QMARK_,tests,some_tests,total_tests,map__44033,map__44033__$1,fail,pass,error,error__$1))
});
});})(error_QMARK_,tests,some_tests,total_tests,map__44033,map__44033__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,[cljs.core.str((fail + error__$1))].join(''))))),((((pass == null)) || ((pass === (0))))?null:sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__44033,map__44033__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__44033,map__44033__$1,fail,pass,error,error__$1){
return (function (p__44041){
var map__44042 = p__44041;
var map__44042__$1 = ((((!((map__44042 == null)))?((((map__44042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44042):map__44042);
var type = cljs.core.get.call(null,map__44042__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"pass","pass",1574159993));
});})(error_QMARK_,tests,some_tests,total_tests,map__44033,map__44033__$1,fail,pass,error,error__$1))
});
});})(error_QMARK_,tests,some_tests,total_tests,map__44033,map__44033__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,pass))))),React.createElement("div",{"className": devcards.system.devcards_rendered_card_class},sablono.interpreter.interpret.call(null,devcards.core.layout_tests.call(null,cljs.core.filter.call(null,(function (){var or__23786__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"filter","filter",-948537934));
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return cljs.core.identity;
}
})(),tests)))));
});
devcards.core.test_timeout = (800);
if(typeof devcards.core.test_channel !== 'undefined'){
} else {
devcards.core.test_channel = cljs.core.async.chan.call(null);
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.call(null);
var test_env = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));
cljs.test.set_env_BANG_.call(null,test_env);

var tests = cljs.core.concat.call(null,test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out,test_env){
return (function (){
cljs.core.async.put_BANG_.call(null,out,cljs.test.get_current_env.call(null));

return cljs.core.async.close_BANG_.call(null,out);
});})(out,test_env))
], null));
cljs.core.prn.call(null,"Running tests!!");

cljs.test.run_block.call(null,tests);

return out;
});
if(typeof devcards.core.test_loop !== 'undefined'){
} else {
devcards.core.test_loop = (function (){var c__25902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto__){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto__){
return (function (state_44130){
var state_val_44131 = (state_44130[(1)]);
if((state_val_44131 === (7))){
var state_44130__$1 = state_44130;
var statearr_44132_44181 = state_44130__$1;
(statearr_44132_44181[(2)] = false);

(statearr_44132_44181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44131 === (20))){
var inst_44071 = (state_44130[(7)]);
var inst_44090 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44071);
var state_44130__$1 = state_44130;
var statearr_44133_44182 = state_44130__$1;
(statearr_44133_44182[(2)] = inst_44090);

(statearr_44133_44182[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44131 === (27))){
var inst_44105 = (state_44130[(8)]);
var inst_44095 = (state_44130[(9)]);
var inst_44109 = inst_44095.call(null,inst_44105);
var state_44130__$1 = state_44130;
var statearr_44134_44183 = state_44130__$1;
(statearr_44134_44183[(2)] = inst_44109);

(statearr_44134_44183[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44131 === (1))){
var state_44130__$1 = state_44130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44130__$1,(2),devcards.core.test_channel);
} else {
if((state_val_44131 === (24))){
var state_44130__$1 = state_44130;
var statearr_44135_44184 = state_44130__$1;
(statearr_44135_44184[(2)] = null);

(statearr_44135_44184[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44131 === (4))){
var state_44130__$1 = state_44130;
var statearr_44136_44185 = state_44130__$1;
(statearr_44136_44185[(2)] = false);

(statearr_44136_44185[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44131 === (15))){
var state_44130__$1 = state_44130;
var statearr_44137_44186 = state_44130__$1;
(statearr_44137_44186[(2)] = false);

(statearr_44137_44186[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44131 === (21))){
var inst_44071 = (state_44130[(7)]);
var state_44130__$1 = state_44130;
var statearr_44138_44187 = state_44130__$1;
(statearr_44138_44187[(2)] = inst_44071);

(statearr_44138_44187[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44131 === (13))){
var inst_44128 = (state_44130[(2)]);
var state_44130__$1 = state_44130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44130__$1,inst_44128);
} else {
if((state_val_44131 === (22))){
var inst_44094 = (state_44130[(10)]);
var inst_44093 = (state_44130[(2)]);
var inst_44094__$1 = cljs.core.get.call(null,inst_44093,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_44095 = cljs.core.get.call(null,inst_44093,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_44130__$1 = (function (){var statearr_44139 = state_44130;
(statearr_44139[(10)] = inst_44094__$1);

(statearr_44139[(9)] = inst_44095);

return statearr_44139;
})();
if(cljs.core.truth_(inst_44094__$1)){
var statearr_44140_44188 = state_44130__$1;
(statearr_44140_44188[(1)] = (23));

} else {
var statearr_44141_44189 = state_44130__$1;
(statearr_44141_44189[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44131 === (29))){
var inst_44119 = (state_44130[(2)]);
var inst_44120 = cljs.test.clear_env_BANG_.call(null);
var state_44130__$1 = (function (){var statearr_44142 = state_44130;
(statearr_44142[(11)] = inst_44119);

(statearr_44142[(12)] = inst_44120);

return statearr_44142;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44130__$1,(30),devcards.core.test_channel);
} else {
if((state_val_44131 === (6))){
var state_44130__$1 = state_44130;
var statearr_44143_44190 = state_44130__$1;
(statearr_44143_44190[(2)] = true);

(statearr_44143_44190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44131 === (28))){
var inst_44095 = (state_44130[(9)]);
var inst_44111 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_44112 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_44113 = cljs.core.PersistentHashMap.fromArrays(inst_44111,inst_44112);
var inst_44114 = devcards.core.collect_test.call(null,inst_44113);
var inst_44115 = cljs.test.get_current_env.call(null);
var inst_44116 = cljs.core.assoc.call(null,inst_44115,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_44117 = inst_44095.call(null,inst_44116);
var state_44130__$1 = (function (){var statearr_44144 = state_44130;
(statearr_44144[(13)] = inst_44114);

return statearr_44144;
})();
var statearr_44145_44191 = state_44130__$1;
(statearr_44145_44191[(2)] = inst_44117);

(statearr_44145_44191[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44131 === (25))){
var inst_44126 = (state_44130[(2)]);
var state_44130__$1 = state_44130;
var statearr_44146_44192 = state_44130__$1;
(statearr_44146_44192[(2)] = inst_44126);

(statearr_44146_44192[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44131 === (17))){
var state_44130__$1 = state_44130;
var statearr_44147_44193 = state_44130__$1;
(statearr_44147_44193[(2)] = true);

(statearr_44147_44193[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44131 === (3))){
var inst_44048 = (state_44130[(14)]);
var inst_44053 = inst_44048.cljs$lang$protocol_mask$partition0$;
var inst_44054 = (inst_44053 & (64));
var inst_44055 = inst_44048.cljs$core$ISeq$;
var inst_44056 = (inst_44054) || (inst_44055);
var state_44130__$1 = state_44130;
if(cljs.core.truth_(inst_44056)){
var statearr_44148_44194 = state_44130__$1;
(statearr_44148_44194[(1)] = (6));

} else {
var statearr_44149_44195 = state_44130__$1;
(statearr_44149_44195[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44131 === (12))){
var inst_44071 = (state_44130[(7)]);
var inst_44075 = (inst_44071 == null);
var inst_44076 = cljs.core.not.call(null,inst_44075);
var state_44130__$1 = state_44130;
if(inst_44076){
var statearr_44150_44196 = state_44130__$1;
(statearr_44150_44196[(1)] = (14));

} else {
var statearr_44151_44197 = state_44130__$1;
(statearr_44151_44197[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44131 === (2))){
var inst_44048 = (state_44130[(14)]);
var inst_44048__$1 = (state_44130[(2)]);
var inst_44050 = (inst_44048__$1 == null);
var inst_44051 = cljs.core.not.call(null,inst_44050);
var state_44130__$1 = (function (){var statearr_44152 = state_44130;
(statearr_44152[(14)] = inst_44048__$1);

return statearr_44152;
})();
if(inst_44051){
var statearr_44153_44198 = state_44130__$1;
(statearr_44153_44198[(1)] = (3));

} else {
var statearr_44154_44199 = state_44130__$1;
(statearr_44154_44199[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44131 === (23))){
var inst_44094 = (state_44130[(10)]);
var inst_44098 = (state_44130[(15)]);
var inst_44098__$1 = cljs.core.async.timeout.call(null,devcards.core.test_timeout);
var inst_44099 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44100 = devcards.core.run_card_tests.call(null,inst_44094);
var inst_44101 = [inst_44100,inst_44098__$1];
var inst_44102 = (new cljs.core.PersistentVector(null,2,(5),inst_44099,inst_44101,null));
var state_44130__$1 = (function (){var statearr_44155 = state_44130;
(statearr_44155[(15)] = inst_44098__$1);

return statearr_44155;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_44130__$1,(26),inst_44102);
} else {
if((state_val_44131 === (19))){
var inst_44085 = (state_44130[(2)]);
var state_44130__$1 = state_44130;
var statearr_44156_44200 = state_44130__$1;
(statearr_44156_44200[(2)] = inst_44085);

(statearr_44156_44200[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44131 === (11))){
var inst_44048 = (state_44130[(14)]);
var inst_44068 = (state_44130[(2)]);
var inst_44069 = cljs.core.get.call(null,inst_44068,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_44070 = cljs.core.get.call(null,inst_44068,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_44071 = inst_44048;
var state_44130__$1 = (function (){var statearr_44157 = state_44130;
(statearr_44157[(7)] = inst_44071);

(statearr_44157[(16)] = inst_44070);

(statearr_44157[(17)] = inst_44069);

return statearr_44157;
})();
var statearr_44158_44201 = state_44130__$1;
(statearr_44158_44201[(2)] = null);

(statearr_44158_44201[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44131 === (9))){
var inst_44048 = (state_44130[(14)]);
var inst_44065 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44048);
var state_44130__$1 = state_44130;
var statearr_44159_44202 = state_44130__$1;
(statearr_44159_44202[(2)] = inst_44065);

(statearr_44159_44202[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44131 === (5))){
var inst_44063 = (state_44130[(2)]);
var state_44130__$1 = state_44130;
if(cljs.core.truth_(inst_44063)){
var statearr_44160_44203 = state_44130__$1;
(statearr_44160_44203[(1)] = (9));

} else {
var statearr_44161_44204 = state_44130__$1;
(statearr_44161_44204[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44131 === (14))){
var inst_44071 = (state_44130[(7)]);
var inst_44078 = inst_44071.cljs$lang$protocol_mask$partition0$;
var inst_44079 = (inst_44078 & (64));
var inst_44080 = inst_44071.cljs$core$ISeq$;
var inst_44081 = (inst_44079) || (inst_44080);
var state_44130__$1 = state_44130;
if(cljs.core.truth_(inst_44081)){
var statearr_44162_44205 = state_44130__$1;
(statearr_44162_44205[(1)] = (17));

} else {
var statearr_44163_44206 = state_44130__$1;
(statearr_44163_44206[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44131 === (26))){
var inst_44098 = (state_44130[(15)]);
var inst_44104 = (state_44130[(2)]);
var inst_44105 = cljs.core.nth.call(null,inst_44104,(0),null);
var inst_44106 = cljs.core.nth.call(null,inst_44104,(1),null);
var inst_44107 = cljs.core.not_EQ_.call(null,inst_44106,inst_44098);
var state_44130__$1 = (function (){var statearr_44164 = state_44130;
(statearr_44164[(8)] = inst_44105);

return statearr_44164;
})();
if(inst_44107){
var statearr_44165_44207 = state_44130__$1;
(statearr_44165_44207[(1)] = (27));

} else {
var statearr_44166_44208 = state_44130__$1;
(statearr_44166_44208[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44131 === (16))){
var inst_44088 = (state_44130[(2)]);
var state_44130__$1 = state_44130;
if(cljs.core.truth_(inst_44088)){
var statearr_44167_44209 = state_44130__$1;
(statearr_44167_44209[(1)] = (20));

} else {
var statearr_44168_44210 = state_44130__$1;
(statearr_44168_44210[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44131 === (30))){
var inst_44122 = (state_44130[(2)]);
var inst_44071 = inst_44122;
var state_44130__$1 = (function (){var statearr_44169 = state_44130;
(statearr_44169[(7)] = inst_44071);

return statearr_44169;
})();
var statearr_44170_44211 = state_44130__$1;
(statearr_44170_44211[(2)] = null);

(statearr_44170_44211[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44131 === (10))){
var inst_44048 = (state_44130[(14)]);
var state_44130__$1 = state_44130;
var statearr_44171_44212 = state_44130__$1;
(statearr_44171_44212[(2)] = inst_44048);

(statearr_44171_44212[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44131 === (18))){
var state_44130__$1 = state_44130;
var statearr_44172_44213 = state_44130__$1;
(statearr_44172_44213[(2)] = false);

(statearr_44172_44213[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44131 === (8))){
var inst_44060 = (state_44130[(2)]);
var state_44130__$1 = state_44130;
var statearr_44173_44214 = state_44130__$1;
(statearr_44173_44214[(2)] = inst_44060);

(statearr_44173_44214[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25902__auto__))
;
return ((function (switch__25881__auto__,c__25902__auto__){
return (function() {
var devcards$core$state_machine__25882__auto__ = null;
var devcards$core$state_machine__25882__auto____0 = (function (){
var statearr_44177 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44177[(0)] = devcards$core$state_machine__25882__auto__);

(statearr_44177[(1)] = (1));

return statearr_44177;
});
var devcards$core$state_machine__25882__auto____1 = (function (state_44130){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_44130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e44178){if((e44178 instanceof Object)){
var ex__25885__auto__ = e44178;
var statearr_44179_44215 = state_44130;
(statearr_44179_44215[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44216 = state_44130;
state_44130 = G__44216;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
devcards$core$state_machine__25882__auto__ = function(state_44130){
switch(arguments.length){
case 0:
return devcards$core$state_machine__25882__auto____0.call(this);
case 1:
return devcards$core$state_machine__25882__auto____1.call(this,state_44130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__25882__auto____0;
devcards$core$state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__25882__auto____1;
return devcards$core$state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto__))
})();
var state__25904__auto__ = (function (){var statearr_44180 = f__25903__auto__.call(null);
(statearr_44180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto__);

return statearr_44180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto__))
);

return c__25902__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.call(null,devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tests","tests",-1041085625),tests,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (results){
return this$.setState({"test_results": results});
})], null));
});
var base__26393__auto___44221 = {"componentWillMount": (function (){
var this$ = this;
var temp__4425__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805));
if(cljs.core.truth_(temp__4425__auto__)){
var test_thunks = temp__4425__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
var temp__4425__auto__ = (next_props[cljs.core.name.call(null,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805))]);
if(cljs.core.truth_(temp__4425__auto__)){
var test_thunks = temp__4425__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var test_summary = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"test_results","test_results",1062111317));
var path = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"path","path",-188191168));
return devcards.core.render_tests.call(null,this$,path,test_summary);
})};
if(typeof devcards.core.TestDevcard !== 'undefined'){
} else {
devcards.core.TestDevcard = React.createClass(base__26393__auto___44221);
}

var seq__44217_44222 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__44218_44223 = null;
var count__44219_44224 = (0);
var i__44220_44225 = (0);
while(true){
if((i__44220_44225 < count__44219_44224)){
var property__26394__auto___44226 = cljs.core._nth.call(null,chunk__44218_44223,i__44220_44225);
if(cljs.core.truth_((base__26393__auto___44221[property__26394__auto___44226]))){
(devcards.core.TestDevcard.prototype[property__26394__auto___44226] = (base__26393__auto___44221[property__26394__auto___44226]));
} else {
}

var G__44227 = seq__44217_44222;
var G__44228 = chunk__44218_44223;
var G__44229 = count__44219_44224;
var G__44230 = (i__44220_44225 + (1));
seq__44217_44222 = G__44227;
chunk__44218_44223 = G__44228;
count__44219_44224 = G__44229;
i__44220_44225 = G__44230;
continue;
} else {
var temp__4425__auto___44231 = cljs.core.seq.call(null,seq__44217_44222);
if(temp__4425__auto___44231){
var seq__44217_44232__$1 = temp__4425__auto___44231;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44217_44232__$1)){
var c__24589__auto___44233 = cljs.core.chunk_first.call(null,seq__44217_44232__$1);
var G__44234 = cljs.core.chunk_rest.call(null,seq__44217_44232__$1);
var G__44235 = c__24589__auto___44233;
var G__44236 = cljs.core.count.call(null,c__24589__auto___44233);
var G__44237 = (0);
seq__44217_44222 = G__44234;
chunk__44218_44223 = G__44235;
count__44219_44224 = G__44236;
i__44220_44225 = G__44237;
continue;
} else {
var property__26394__auto___44238 = cljs.core.first.call(null,seq__44217_44232__$1);
if(cljs.core.truth_((base__26393__auto___44221[property__26394__auto___44238]))){
(devcards.core.TestDevcard.prototype[property__26394__auto___44238] = (base__26393__auto___44221[property__26394__auto___44238]));
} else {
}

var G__44239 = cljs.core.next.call(null,seq__44217_44232__$1);
var G__44240 = null;
var G__44241 = (0);
var G__44242 = (0);
seq__44217_44222 = G__44239;
chunk__44218_44223 = G__44240;
count__44219_44224 = G__44241;
i__44220_44225 = G__44242;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__24851__auto__ = [];
var len__24844__auto___44247 = arguments.length;
var i__24845__auto___44248 = (0);
while(true){
if((i__24845__auto___44248 < len__24844__auto___44247)){
args__24851__auto__.push((arguments[i__24845__auto___44248]));

var G__44249 = (i__24845__auto___44248 + (1));
i__24845__auto___44248 = G__44249;
continue;
} else {
}
break;
}

var argseq__24852__auto__ = ((((0) < args__24851__auto__.length))?(new cljs.core.IndexedSeq(args__24851__auto__.slice((0)),(0))):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__24852__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core44244 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core44244 = (function (test_thunks,meta44245){
this.test_thunks = test_thunks;
this.meta44245 = meta44245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core44244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44246,meta44245__$1){
var self__ = this;
var _44246__$1 = this;
return (new devcards.core.t_devcards$core44244(self__.test_thunks,meta44245__$1));
});

devcards.core.t_devcards$core44244.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44246){
var self__ = this;
var _44246__$1 = this;
return self__.meta44245;
});

devcards.core.t_devcards$core44244.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core44244.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return React.createElement(devcards.core.TestDevcard,{"test_thunks": self__.test_thunks, "path": path});
});

devcards.core.t_devcards$core44244.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta44245","meta44245",1655853471,null)], null);
});

devcards.core.t_devcards$core44244.cljs$lang$type = true;

devcards.core.t_devcards$core44244.cljs$lang$ctorStr = "devcards.core/t_devcards$core44244";

devcards.core.t_devcards$core44244.cljs$lang$ctorPrWriter = (function (this__24384__auto__,writer__24385__auto__,opt__24386__auto__){
return cljs.core._write.call(null,writer__24385__auto__,"devcards.core/t_devcards$core44244");
});

devcards.core.__GT_t_devcards$core44244 = (function devcards$core$__GT_t_devcards$core44244(test_thunks__$1,meta44245){
return (new devcards.core.t_devcards$core44244(test_thunks__$1,meta44245));
});

}

return (new devcards.core.t_devcards$core44244(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq44243){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44243));
});
devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.call(null,cljs.core.aget,goog.global,cljs.core.concat.call(null,clojure.string.split.call(null,cljs.core.name.call(null,munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__4425__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state));
if(cljs.core.truth_(temp__4425__auto__)){
var cards = temp__4425__auto__;
var temp__4425__auto____$1 = cljs.core.get_in.call(null,cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,ns_symbol)], null));
if(cljs.core.truth_(temp__4425__auto____$1)){
var card = temp__4425__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_.call(null,devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__4425__auto__ = new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter.call(null,cljs.core.name.call(null,ns_symbol)));
if(cljs.core.truth_(temp__4425__auto__)){
var base_card_options = temp__4425__auto__;
cljs.core.println.call(null,"Adding base card options!",cljs.core.prn_str.call(null,base_card_options));

return cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),((function (base_card_options,temp__4425__auto__){
return (function (opts){
return cljs.core.merge.call(null,opts,base_card_options);
});})(base_card_options,temp__4425__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__4425__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4425__auto__)){
var card = temp__4425__auto__;
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str(React.renderToString((function (){var attrs44251 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),devcards.system.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs44251))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs44251)):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs44251))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs44251)], null))));
})())),cljs.core.str("</div>")].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__4425__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4425__auto__)){
var card = temp__4425__auto__;
return React.render((function (){var attrs44253 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs44253))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs44253)):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs44253))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs44253)], null))));
})(),devcards.system.devcards_app_node.call(null));
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

var c__25902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto__){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto__){
return (function (state_44283){
var state_val_44284 = (state_44283[(1)]);
if((state_val_44284 === (1))){
var inst_44274 = devcards.core.load_data_from_channel_BANG_.call(null);
var state_44283__$1 = state_44283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44283__$1,(2),inst_44274);
} else {
if((state_val_44284 === (2))){
var inst_44276 = (state_44283[(2)]);
var inst_44277 = cljs.core.async.timeout.call(null,(100));
var state_44283__$1 = (function (){var statearr_44285 = state_44283;
(statearr_44285[(7)] = inst_44276);

return statearr_44285;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44283__$1,(3),inst_44277);
} else {
if((state_val_44284 === (3))){
var inst_44279 = (state_44283[(2)]);
var inst_44280 = (function (){return ((function (inst_44279,state_val_44284,c__25902__auto__){
return (function (){
return devcards.core.render_ns.call(null,ns_symbol,devcards.system.app_state);
});
;})(inst_44279,state_val_44284,c__25902__auto__))
})();
var inst_44281 = setTimeout(inst_44280,(0));
var state_44283__$1 = (function (){var statearr_44286 = state_44283;
(statearr_44286[(8)] = inst_44279);

return statearr_44286;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44283__$1,inst_44281);
} else {
return null;
}
}
}
});})(c__25902__auto__))
;
return ((function (switch__25881__auto__,c__25902__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__25882__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__25882__auto____0 = (function (){
var statearr_44290 = [null,null,null,null,null,null,null,null,null];
(statearr_44290[(0)] = devcards$core$mount_namespace_$_state_machine__25882__auto__);

(statearr_44290[(1)] = (1));

return statearr_44290;
});
var devcards$core$mount_namespace_$_state_machine__25882__auto____1 = (function (state_44283){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_44283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e44291){if((e44291 instanceof Object)){
var ex__25885__auto__ = e44291;
var statearr_44292_44294 = state_44283;
(statearr_44292_44294[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44295 = state_44283;
state_44283 = G__44295;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__25882__auto__ = function(state_44283){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__25882__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__25882__auto____1.call(this,state_44283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__25882__auto____0;
devcards$core$mount_namespace_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__25882__auto____1;
return devcards$core$mount_namespace_$_state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto__))
})();
var state__25904__auto__ = (function (){var statearr_44293 = f__25903__auto__.call(null);
(statearr_44293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto__);

return statearr_44293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto__))
);

return c__25902__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return devcards.system.start_ui_with_renderer.call(null,devcards.core.devcard_event_chan,cljs.core.partial.call(null,devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);

//# sourceMappingURL=core.js.map?rel=1453744773731