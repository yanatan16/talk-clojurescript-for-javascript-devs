// Compiled by ClojureScript 1.7.170 {}
goog.provide('hickory.zip');
goog.require('cljs.core');
goog.require('clojure.zip');
/**
 * Returns a zipper for html dom maps (as from as-hickory),
 *   given a root element.
 */
hickory.zip.hickory_zip = (function hickory$zip$hickory_zip(root){
return clojure.zip.zipper.call(null,cljs.core.complement.call(null,cljs.core.string_QMARK_),cljs.core.comp.call(null,cljs.core.seq,new cljs.core.Keyword(null,"content","content",15833224)),(function (node,children){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"content","content",15833224),(function (){var and__4656__auto__ = children;
if(cljs.core.truth_(and__4656__auto__)){
return cljs.core.apply.call(null,cljs.core.vector,children);
} else {
return and__4656__auto__;
}
})());
}),root);
});
/**
 * Takes a hiccup node (normalized or not) and returns its children nodes.
 */
hickory.zip.children = (function hickory$zip$children(node){
if(cljs.core.vector_QMARK_.call(null,node)){
if(cljs.core.map_QMARK_.call(null,cljs.core.second.call(null,node))){
return cljs.core.seq.call(null,cljs.core.subvec.call(null,node,(2)));
} else {
return cljs.core.seq.call(null,cljs.core.subvec.call(null,node,(1)));
}
} else {
return node;
}
});
/**
 * Takes a hiccup node (normalized or not) and a sequence of children nodes,
 * and returns a new node that has the the children argument as its children.
 */
hickory.zip.make = (function hickory$zip$make(node,children){
if(cljs.core.vector_QMARK_.call(null,node)){
if(cljs.core.map_QMARK_.call(null,cljs.core.second.call(null,node))){
return cljs.core.into.call(null,cljs.core.subvec.call(null,node,(0),(2)),children);
} else {
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.first.call(null,node),children);
}
} else {
return children;
}
});
/**
 * Returns a zipper for Hiccup forms, given a root form.
 */
hickory.zip.hiccup_zip = (function hickory$zip$hiccup_zip(root){
return clojure.zip.zipper.call(null,cljs.core.sequential_QMARK_,hickory.zip.children,hickory.zip.make,root);
});

//# sourceMappingURL=zip.js.map?rel=1453863896799