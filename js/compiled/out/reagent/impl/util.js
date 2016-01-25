// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent.impl.util');
goog.require('cljs.core');
goog.require('reagent.debug');
goog.require('reagent.interop');
goog.require('clojure.string');
reagent.impl.util.is_client = (typeof window !== 'undefined') && (!(((window["document"]) == null)));
reagent.impl.util.extract_props = (function reagent$impl$util$extract_props(v){
var p = cljs.core.nth.call(null,v,(1),null);
if(cljs.core.map_QMARK_.call(null,p)){
return p;
} else {
return null;
}
});
reagent.impl.util.extract_children = (function reagent$impl$util$extract_children(v){
var p = cljs.core.nth.call(null,v,(1),null);
var first_child = ((((p == null)) || (cljs.core.map_QMARK_.call(null,p)))?(2):(1));
if((cljs.core.count.call(null,v) > first_child)){
return cljs.core.subvec.call(null,v,first_child);
} else {
return null;
}
});
reagent.impl.util.get_argv = (function reagent$impl$util$get_argv(c){
return (c["props"]["argv"]);
});
reagent.impl.util.get_props = (function reagent$impl$util$get_props(c){
return reagent.impl.util.extract_props.call(null,(c["props"]["argv"]));
});
reagent.impl.util.get_children = (function reagent$impl$util$get_children(c){
return reagent.impl.util.extract_children.call(null,(c["props"]["argv"]));
});
reagent.impl.util.reagent_component_QMARK_ = (function reagent$impl$util$reagent_component_QMARK_(c){
return !(((c["props"]["argv"]) == null));
});
reagent.impl.util.cached_react_class = (function reagent$impl$util$cached_react_class(c){
return (c["cljsReactClass"]);
});
reagent.impl.util.cache_react_class = (function reagent$impl$util$cache_react_class(c,constructor){
return (c["cljsReactClass"] = constructor);
});
reagent.impl.util.memoize_1 = (function reagent$impl$util$memoize_1(f){
var mem = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (mem){
return (function (arg){
var v = cljs.core.get.call(null,cljs.core.deref.call(null,mem),arg);
if(!((v == null))){
return v;
} else {
var ret = f.call(null,arg);
cljs.core.swap_BANG_.call(null,mem,cljs.core.assoc,arg,ret);

return ret;
}
});
;})(mem))
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function reagent$impl$util$capitalize(s){
if((cljs.core.count.call(null,s) < (2))){
return clojure.string.upper_case.call(null,s);
} else {
return [cljs.core.str(clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,(0),(1)))),cljs.core.str(cljs.core.subs.call(null,s,(1)))].join('');
}
});
reagent.impl.util.dash_to_camel = (function reagent$impl$util$dash_to_camel(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name.call(null,dashed);
var vec__38525 = clojure.string.split.call(null,name_str,/-/);
var start = cljs.core.nth.call(null,vec__38525,(0),null);
var parts = cljs.core.nthnext.call(null,vec__38525,(1));
if(cljs.core.truth_(reagent.impl.util.dont_camel_case.call(null,start))){
return name_str;
} else {
return cljs.core.apply.call(null,cljs.core.str,start,cljs.core.map.call(null,reagent.impl.util.capitalize,parts));
}
}
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
*/
reagent.impl.util.partial_ifn = (function (f,args,p){
this.f = f;
this.args = args;
this.p = p;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
reagent.impl.util.partial_ifn.prototype.call = (function() { 
var G__38527__delegate = function (self__,a){
var self____$1 = this;
var _ = self____$1;
var or__23786__auto___38528 = self__.p;
if(cljs.core.truth_(or__23786__auto___38528)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__38527 = function (self__,var_args){
var self__ = this;
var a = null;
if (arguments.length > 1) {
var G__38529__i = 0, G__38529__a = new Array(arguments.length -  1);
while (G__38529__i < G__38529__a.length) {G__38529__a[G__38529__i] = arguments[G__38529__i + 1]; ++G__38529__i;}
  a = new cljs.core.IndexedSeq(G__38529__a,0);
} 
return G__38527__delegate.call(this,self__,a);};
G__38527.cljs$lang$maxFixedArity = 1;
G__38527.cljs$lang$applyTo = (function (arglist__38530){
var self__ = cljs.core.first(arglist__38530);
var a = cljs.core.rest(arglist__38530);
return G__38527__delegate(self__,a);
});
G__38527.cljs$core$IFn$_invoke$arity$variadic = G__38527__delegate;
return G__38527;
})()
;

reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args38526){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args38526)));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__38531__delegate = function (a){
var _ = this;
var or__23786__auto___38532 = self__.p;
if(cljs.core.truth_(or__23786__auto___38532)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__38531 = function (var_args){
var self__ = this;
var a = null;
if (arguments.length > 0) {
var G__38533__i = 0, G__38533__a = new Array(arguments.length -  0);
while (G__38533__i < G__38533__a.length) {G__38533__a[G__38533__i] = arguments[G__38533__i + 0]; ++G__38533__i;}
  a = new cljs.core.IndexedSeq(G__38533__a,0);
} 
return G__38531__delegate.call(this,a);};
G__38531.cljs$lang$maxFixedArity = 0;
G__38531.cljs$lang$applyTo = (function (arglist__38534){
var a = cljs.core.seq(arglist__38534);
return G__38531__delegate(a);
});
G__38531.cljs$core$IFn$_invoke$arity$variadic = G__38531__delegate;
return G__38531;
})()
;

reagent.impl.util.partial_ifn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (cljs.core._EQ_.call(null,self__.f,other.f)) && (cljs.core._EQ_.call(null,self__.args,other.args));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

reagent.impl.util.partial_ifn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),cljs.core.with_meta(new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

reagent.impl.util.partial_ifn.cljs$lang$type = true;

reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";

reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__24384__auto__,writer__24385__auto__,opt__24386__auto__){
return cljs.core._write.call(null,writer__24385__auto__,"reagent.impl.util/partial-ifn");
});

reagent.impl.util.__GT_partial_ifn = (function reagent$impl$util$__GT_partial_ifn(f,args,p){
return (new reagent.impl.util.partial_ifn(f,args,p));
});

reagent.impl.util.merge_class = (function reagent$impl$util$merge_class(p1,p2){
var class$ = (function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4425__auto__)){
var c1 = temp__4425__auto__;
var temp__4425__auto____$1 = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4425__auto____$1)){
var c2 = temp__4425__auto____$1;
return [cljs.core.str(c1),cljs.core.str(" "),cljs.core.str(c2)].join('');
} else {
return null;
}
} else {
return null;
}
})();
if((class$ == null)){
return p2;
} else {
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"class","class",-2030961996),class$);
}
});
reagent.impl.util.merge_style = (function reagent$impl$util$merge_style(p1,p2){
var style = (function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4425__auto__)){
var s1 = temp__4425__auto__;
var temp__4425__auto____$1 = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4425__auto____$1)){
var s2 = temp__4425__auto____$1;
return cljs.core.merge.call(null,s1,s2);
} else {
return null;
}
} else {
return null;
}
})();
if((style == null)){
return p2;
} else {
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"style","style",-496642736),style);
}
});
reagent.impl.util.merge_props = (function reagent$impl$util$merge_props(p1,p2){
if((p1 == null)){
return p2;
} else {
if(cljs.core.map_QMARK_.call(null,p1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"p1","p1",703771573,null))))].join('')));
}

return reagent.impl.util.merge_style.call(null,p1,reagent.impl.util.merge_class.call(null,p1,cljs.core.merge.call(null,p1,p2)));
}
});
reagent.impl.util._STAR_always_update_STAR_ = false;
if(typeof reagent.impl.util.roots !== 'undefined'){
} else {
reagent.impl.util.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.impl.util.clear_container = (function reagent$impl$util$clear_container(node){
var G__38536 = node;
var G__38536__$1 = (((G__38536 == null))?null:(G__38536["innerHTML"] = ""));
return G__38536__$1;
});
reagent.impl.util.render_component = (function reagent$impl$util$render_component(comp,container,callback){
var rendered = cljs.core.volatile_BANG_.call(null,null);
try{var _STAR_always_update_STAR_38539 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return cljs.core.vreset_BANG_.call(null,rendered,(React["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_38539,rendered){
return (function (){
var _STAR_always_update_STAR_38540 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_38540;
}});})(_STAR_always_update_STAR_38539,rendered))
));
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_38539;
}}finally {if(cljs.core.truth_(cljs.core.deref.call(null,rendered))){
} else {
reagent.impl.util.clear_container.call(null,container);
}
}});
reagent.impl.util.re_render_component = (function reagent$impl$util$re_render_component(comp,container){
return reagent.impl.util.render_component.call(null,comp,container,null);
});
reagent.impl.util.unmount_component_at_node = (function reagent$impl$util$unmount_component_at_node(container){
cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.dissoc,container);

return (React["unmountComponentAtNode"])(container);
});
reagent.impl.util.force_update_all = (function reagent$impl$util$force_update_all(){
var seq__38545_38549 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.impl.util.roots)));
var chunk__38546_38550 = null;
var count__38547_38551 = (0);
var i__38548_38552 = (0);
while(true){
if((i__38548_38552 < count__38547_38551)){
var v_38553 = cljs.core._nth.call(null,chunk__38546_38550,i__38548_38552);
cljs.core.apply.call(null,reagent.impl.util.re_render_component,v_38553);

var G__38554 = seq__38545_38549;
var G__38555 = chunk__38546_38550;
var G__38556 = count__38547_38551;
var G__38557 = (i__38548_38552 + (1));
seq__38545_38549 = G__38554;
chunk__38546_38550 = G__38555;
count__38547_38551 = G__38556;
i__38548_38552 = G__38557;
continue;
} else {
var temp__4425__auto___38558 = cljs.core.seq.call(null,seq__38545_38549);
if(temp__4425__auto___38558){
var seq__38545_38559__$1 = temp__4425__auto___38558;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38545_38559__$1)){
var c__24589__auto___38560 = cljs.core.chunk_first.call(null,seq__38545_38559__$1);
var G__38561 = cljs.core.chunk_rest.call(null,seq__38545_38559__$1);
var G__38562 = c__24589__auto___38560;
var G__38563 = cljs.core.count.call(null,c__24589__auto___38560);
var G__38564 = (0);
seq__38545_38549 = G__38561;
chunk__38546_38550 = G__38562;
count__38547_38551 = G__38563;
i__38548_38552 = G__38564;
continue;
} else {
var v_38565 = cljs.core.first.call(null,seq__38545_38559__$1);
cljs.core.apply.call(null,reagent.impl.util.re_render_component,v_38565);

var G__38566 = cljs.core.next.call(null,seq__38545_38559__$1);
var G__38567 = null;
var G__38568 = (0);
var G__38569 = (0);
seq__38545_38549 = G__38566;
chunk__38546_38550 = G__38567;
count__38547_38551 = G__38568;
i__38548_38552 = G__38569;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
reagent.impl.util.force_update = (function reagent$impl$util$force_update(comp,deep){
if(cljs.core.truth_(deep)){
var _STAR_always_update_STAR_38571 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (comp["forceUpdate"])();
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_38571;
}} else {
return (comp["forceUpdate"])();
}
});

//# sourceMappingURL=util.js.map?rel=1453744767415