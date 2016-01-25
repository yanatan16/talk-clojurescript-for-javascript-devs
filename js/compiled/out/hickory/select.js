// Compiled by ClojureScript 1.7.170 {}
goog.provide('hickory.select');
goog.require('cljs.core');
goog.require('clojure.zip');
goog.require('clojure.string');
goog.require('hickory.zip');
/**
 * Calls f on val until pred called on the result is true. If not, it
 * repeats by calling f on the result, etc. The value that made pred
 * return true is returned.
 */
hickory.select.until = (function hickory$select$until(f,val,pred){
while(true){
var next_val = f.call(null,val);
if(cljs.core.truth_(pred.call(null,next_val))){
return next_val;
} else {
var G__17186 = f;
var G__17187 = next_val;
var G__17188 = pred;
f = G__17186;
val = G__17187;
pred = G__17188;
continue;
}
break;
}
});
/**
 * Calls f on val until pred called on the result is true. If not, it
 * repeats by calling f on the result, etc. The count of times this
 * process was repeated until pred returned true is returned.
 */
hickory.select.count_until = (function hickory$select$count_until(f,val,pred){
var next_val = val;
var cnt = (0);
while(true){
if(cljs.core.truth_(pred.call(null,next_val))){
return cnt;
} else {
var G__17189 = f.call(null,next_val);
var G__17190 = (cnt + (1));
next_val = G__17189;
cnt = G__17190;
continue;
}
break;
}
});
/**
 * Like clojure.zip/next, but moves until it reaches a node that returns
 * true when the function in the pred argument is called on them, or reaches
 * the end.
 */
hickory.select.next_pred = (function hickory$select$next_pred(hzip_loc,pred){
return hickory.select.until.call(null,clojure.zip.next,hzip_loc,(function (p1__17191_SHARP_){
var or__4668__auto__ = clojure.zip.end_QMARK_.call(null,p1__17191_SHARP_);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return pred.call(null,p1__17191_SHARP_);
}
}));
});
/**
 * Like clojure.zip/prev, but moves until it reaches a node that returns
 * true when the function in the pred argument is called on them, or reaches
 * the beginning.
 */
hickory.select.prev_pred = (function hickory$select$prev_pred(hzip_loc,pred){
return hickory.select.until.call(null,clojure.zip.prev,hzip_loc,(function (p1__17192_SHARP_){
var or__4668__auto__ = (p1__17192_SHARP_ == null);
if(or__4668__auto__){
return or__4668__auto__;
} else {
return pred.call(null,p1__17192_SHARP_);
}
}));
});
/**
 * Like clojure.zip/left, but moves until it reaches a node that returns
 * true when the function in the pred argument is called on them, or reaches
 * the left boundary of the current group of siblings.
 */
hickory.select.left_pred = (function hickory$select$left_pred(hzip_loc,pred){
return hickory.select.until.call(null,clojure.zip.left,hzip_loc,(function (p1__17193_SHARP_){
var or__4668__auto__ = (p1__17193_SHARP_ == null);
if(or__4668__auto__){
return or__4668__auto__;
} else {
return pred.call(null,p1__17193_SHARP_);
}
}));
});
/**
 * Like clojure.zip/right, but moves until it reaches a node that returns
 * true when the function in the pred argument is called on them, or reaches
 * the right boundary of the current group of siblings.
 */
hickory.select.right_pred = (function hickory$select$right_pred(hzip_loc,pred){
return hickory.select.until.call(null,clojure.zip.right,hzip_loc,(function (p1__17194_SHARP_){
var or__4668__auto__ = (p1__17194_SHARP_ == null);
if(or__4668__auto__){
return or__4668__auto__;
} else {
return pred.call(null,p1__17194_SHARP_);
}
}));
});
/**
 * Like clojure.zip/next, but only counts moves to nodes that have
 * the given type.
 */
hickory.select.next_of_node_type = (function hickory$select$next_of_node_type(hzip_loc,node_type){
return hickory.select.next_pred.call(null,hzip_loc,(function (p1__17195_SHARP_){
return cljs.core._EQ_.call(null,node_type,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,p1__17195_SHARP_)));
}));
});
/**
 * Like clojure.zip/prev, but only counts moves to nodes that have
 * the given type.
 */
hickory.select.prev_of_node_type = (function hickory$select$prev_of_node_type(hzip_loc,node_type){
return hickory.select.prev_pred.call(null,hzip_loc,(function (p1__17196_SHARP_){
return cljs.core._EQ_.call(null,node_type,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,p1__17196_SHARP_)));
}));
});
/**
 * Like clojure.zip/left, but only counts moves to nodes that have
 * the given type.
 */
hickory.select.left_of_node_type = (function hickory$select$left_of_node_type(hzip_loc,node_type){
return hickory.select.left_pred.call(null,hzip_loc,(function (p1__17197_SHARP_){
return cljs.core._EQ_.call(null,node_type,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,p1__17197_SHARP_)));
}));
});
/**
 * Like clojure.zip/right, but only counts moves to nodes that have
 * the given type.
 */
hickory.select.right_of_node_type = (function hickory$select$right_of_node_type(hzip_loc,node_type){
return hickory.select.right_pred.call(null,hzip_loc,(function (p1__17198_SHARP_){
return cljs.core._EQ_.call(null,node_type,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,p1__17198_SHARP_)));
}));
});
/**
 * Given a zipper loc, returns the zipper loc that is the first one after
 * the arg's subtree, if there is a subtree. If there is no loc after this
 * loc's subtree, returns the end node.
 */
hickory.select.after_subtree = (function hickory$select$after_subtree(zip_loc){
if(cljs.core.truth_(clojure.zip.end_QMARK_.call(null,zip_loc))){
return zip_loc;
} else {
var or__4668__auto__ = clojure.zip.right.call(null,zip_loc);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
var curr_loc = zip_loc;
while(true){
if(cljs.core.truth_(clojure.zip.up.call(null,curr_loc))){
var or__4668__auto____$1 = clojure.zip.right.call(null,clojure.zip.up.call(null,curr_loc));
if(cljs.core.truth_(or__4668__auto____$1)){
return or__4668__auto____$1;
} else {
var G__17199 = clojure.zip.up.call(null,curr_loc);
curr_loc = G__17199;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.node.call(null,curr_loc),new cljs.core.Keyword(null,"end","end",-268185958)], null);
}
break;
}
}
}
});
/**
 * Given a selector function and a loc inside a hickory zip data structure,
 * returns the next zipper loc that satisfies the selection function. This can
 * be the loc that is passed in, so be sure to move to the next loc if you
 * want to use this function to exhaustively search through a tree manually.
 * Note that if there is no next node that satisfies the selection function, nil
 * is returned.
 * 
 * The third argument, if present, must be a function of one argument that is
 * called on a zipper loc to return the next loc to consider in the search. By
 * default, this argument is zip/next. The fourth argument, if present, must be
 * a function of one argument that is called on a zipper loc to determine if
 * the end of the search has been reached (true return value). When the fourth
 * argument returns true on a loc, that loc is not considered in the search and
 * the search finishes with a nil return. By default, the fourth argument is
 * zip/end?.
 */
hickory.select.select_next_loc = (function hickory$select$select_next_loc(var_args){
var args17200 = [];
var len__5726__auto___17203 = arguments.length;
var i__5727__auto___17204 = (0);
while(true){
if((i__5727__auto___17204 < len__5726__auto___17203)){
args17200.push((arguments[i__5727__auto___17204]));

var G__17205 = (i__5727__auto___17204 + (1));
i__5727__auto___17204 = G__17205;
continue;
} else {
}
break;
}

var G__17202 = args17200.length;
switch (G__17202) {
case 2:
return hickory.select.select_next_loc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hickory.select.select_next_loc.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return hickory.select.select_next_loc.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17200.length)].join('')));

}
});

hickory.select.select_next_loc.cljs$core$IFn$_invoke$arity$2 = (function (selector_fn,hzip_loc){
return hickory.select.select_next_loc.call(null,selector_fn,hzip_loc,clojure.zip.next);
});

hickory.select.select_next_loc.cljs$core$IFn$_invoke$arity$3 = (function (selector_fn,hzip_loc,next_fn){
return hickory.select.select_next_loc.call(null,selector_fn,hzip_loc,next_fn,clojure.zip.end_QMARK_);
});

hickory.select.select_next_loc.cljs$core$IFn$_invoke$arity$4 = (function (selector_fn,hzip_loc,next_fn,end_QMARK__fn){
var loc = hzip_loc;
while(true){
if(cljs.core.truth_(end_QMARK__fn.call(null,loc))){
return null;
} else {
if(cljs.core.truth_(selector_fn.call(null,loc))){
return loc;
} else {
var G__17207 = next_fn.call(null,loc);
loc = G__17207;
continue;
}
}
break;
}
});

hickory.select.select_next_loc.cljs$lang$maxFixedArity = 4;
/**
 * Given a selector function and a hickory data structure, returns a vector
 * containing all of the zipper locs selected by the selector function.
 */
hickory.select.select_locs = (function hickory$select$select_locs(selector_fn,hickory_tree){
var loc = hickory.select.select_next_loc.call(null,selector_fn,hickory.zip.hickory_zip.call(null,hickory_tree));
var selected_nodes = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if((loc == null)){
return cljs.core.persistent_BANG_.call(null,selected_nodes);
} else {
var G__17208 = hickory.select.select_next_loc.call(null,selector_fn,clojure.zip.next.call(null,loc));
var G__17209 = cljs.core.conj_BANG_.call(null,selected_nodes,loc);
loc = G__17208;
selected_nodes = G__17209;
continue;
}
break;
}
});
/**
 * Given a selector function and a hickory data structure, returns a vector
 * containing all of the hickory nodes selected by the selector function.
 */
hickory.select.select = (function hickory$select$select(selector_fn,hickory_tree){
return cljs.core.mapv.call(null,clojure.zip.node,hickory.select.select_locs.call(null,selector_fn,hickory_tree));
});
/**
 * Return a function that takes a zip-loc argument and returns the
 * zip-loc passed in iff it has the given node type. The type
 * argument can be a String or Named (keyword, symbol). The node type
 * comparison is done case-insensitively.
 */
hickory.select.node_type = (function hickory$select$node_type(type){
return (function (hzip_loc){
var node = clojure.zip.node.call(null,hzip_loc);
var node_type__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_((function (){var and__4656__auto__ = node_type__$1;
if(cljs.core.truth_(and__4656__auto__)){
return cljs.core._EQ_.call(null,clojure.string.lower_case.call(null,cljs.core.name.call(null,node_type__$1)),clojure.string.lower_case.call(null,cljs.core.name.call(null,type)));
} else {
return and__4656__auto__;
}
})())){
return hzip_loc;
} else {
return null;
}
});
});
/**
 * Return a function that takes a zip-loc argument and returns the
 * zip-loc passed in iff it has the given tag. The tag argument can be
 * a String or Named (keyword, symbol). The tag name comparison
 * is done case-insensitively.
 */
hickory.select.tag = (function hickory$select$tag(tag__$1){
return (function (hzip_loc){
var node = clojure.zip.node.call(null,hzip_loc);
var node_tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_((function (){var and__4656__auto__ = node_tag;
if(cljs.core.truth_(and__4656__auto__)){
return cljs.core._EQ_.call(null,clojure.string.lower_case.call(null,cljs.core.name.call(null,node_tag)),clojure.string.lower_case.call(null,cljs.core.name.call(null,tag__$1)));
} else {
return and__4656__auto__;
}
})())){
return hzip_loc;
} else {
return null;
}
});
});
/**
 * Returns a function that takes a zip-loc argument and returns the
 * zip-loc passed in iff it has the given attribute, and that attribute
 * optionally satisfies a predicate given as an additional argument. With
 * a single argument, the attribute name (a string, keyword, or symbol),
 * the function returned will return the zip-loc if that attribute is
 * present (and has any value) on the zip-loc's node. The attribute name
 * will be compared case-insensitively, but the attribute value (if present),
 * will be passed as-is to the predicate.
 * 
 * If the predicate argument is given, it will only return the zip-loc if
 * that predicate is satisfied when given the attribute's value as its only
 * argument. Note that the predicate only gets called when the attribute is
 * present, so it can assume its argument is not nil.
 */
hickory.select.attr = (function hickory$select$attr(var_args){
var args17210 = [];
var len__5726__auto___17213 = arguments.length;
var i__5727__auto___17214 = (0);
while(true){
if((i__5727__auto___17214 < len__5726__auto___17213)){
args17210.push((arguments[i__5727__auto___17214]));

var G__17215 = (i__5727__auto___17214 + (1));
i__5727__auto___17214 = G__17215;
continue;
} else {
}
break;
}

var G__17212 = args17210.length;
switch (G__17212) {
case 1:
return hickory.select.attr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hickory.select.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17210.length)].join('')));

}
});

hickory.select.attr.cljs$core$IFn$_invoke$arity$1 = (function (attr_name){
return hickory.select.attr.call(null,attr_name,(function (_){
return true;
}));
});

hickory.select.attr.cljs$core$IFn$_invoke$arity$2 = (function (attr_name,predicate){
return (function (hzip_loc){
var node = clojure.zip.node.call(null,hzip_loc);
var attr_key = cljs.core.keyword.call(null,clojure.string.lower_case.call(null,cljs.core.name.call(null,attr_name)));
if(cljs.core.truth_((function (){var and__4656__auto__ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(node),attr_key);
if(and__4656__auto__){
return predicate.call(null,cljs.core.get_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attr_key], null)));
} else {
return and__4656__auto__;
}
})())){
return hzip_loc;
} else {
return null;
}
});
});

hickory.select.attr.cljs$lang$maxFixedArity = 2;
/**
 * Returns a function that takes a zip-loc argument and returns the
 * zip-loc passed in iff it has the given id. The id argument can be
 * a String or Named (keyword, symbol). The id name comparison
 * is done case-insensitively.
 */
hickory.select.id = (function hickory$select$id(id__$1){
return hickory.select.attr.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),(function (p1__17217_SHARP_){
return cljs.core._EQ_.call(null,clojure.string.lower_case.call(null,p1__17217_SHARP_),clojure.string.lower_case.call(null,cljs.core.name.call(null,id__$1)));
}));
});
/**
 * Returns a function that takes a zip-loc argument and returns the
 * zip-loc passed in iff it has the given class. The class argument can
 * be a String or Named (keyword, symbol). The class name comparison
 * is done case-insensitively.
 */
hickory.select.class$ = (function hickory$select$class(class_name){
var parse_classes = (function hickory$select$class_$_parse_classes(class_str){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.mapv.call(null,clojure.string.lower_case,clojure.string.split.call(null,class_str,/ /)));
});
return hickory.select.attr.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),(function (p1__17218_SHARP_){
return cljs.core.contains_QMARK_.call(null,parse_classes.call(null,p1__17218_SHARP_),clojure.string.lower_case.call(null,cljs.core.name.call(null,class_name)));
}));
});
/**
 * This selector takes no args, it simply is the selector function. It returns
 * true on any element it is called on; corresponds to the CSS '*' selector.
 */
hickory.select.any = (function hickory$select$any(hzip_loc){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,hzip_loc)))){
return hzip_loc;
} else {
return null;
}
});
/**
 * Another name for the any selector, to express that it can be used to only
 * select elements.
 */
hickory.select.element = hickory.select.any;
/**
 * This selector takes no args, it simply is the selector function. It returns
 * the zip-loc passed in iff that loc is an element, and it has a parent
 * that is also an element.
 */
hickory.select.element_child = (function hickory$select$element_child(hzip_loc){
var possible_parent = clojure.zip.up.call(null,hzip_loc);
var and__4656__auto__ = hickory.select.element.call(null,hzip_loc);
if(cljs.core.truth_(and__4656__auto__)){
var and__4656__auto____$1 = possible_parent;
if(cljs.core.truth_(and__4656__auto____$1)){
return hickory.select.element.call(null,possible_parent);
} else {
return and__4656__auto____$1;
}
} else {
return and__4656__auto__;
}
});
/**
 * This selector takes no args, it simply is the selector function. It returns
 * the zip-loc of the root node (the HTML element).
 */
hickory.select.root = (function hickory$select$root(hzip_loc){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,hzip_loc)))){
return hzip_loc;
} else {
return null;
}
});
/**
 * Returns a function that takes a zip-loc argument and returns the zip-loc
 * passed in iff it has some text node in its contents that matches the regular
 * expression. Note that this only applies to the direct text content of a node;
 * nodes which have the given text in one of their child nodes will not be
 * selected.
 */
hickory.select.find_in_text = (function hickory$select$find_in_text(re){
return (function (hzip_loc){
return cljs.core.some.call(null,(function (p1__17219_SHARP_){
return cljs.core.re_find.call(null,re,p1__17219_SHARP_);
}),cljs.core.filter.call(null,cljs.core.string_QMARK_,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,hzip_loc))));
});
});
/**
 * This selector returns a selector function that selects its argument if
 * that argument is some "distance" from a "boundary." This is an abstract
 * way of phrasing it, but it captures the full generality.
 * 
 * The selector this function returns will apply the move argument to its own
 * output, beginning with its zipper loc argument, until the term-pred argument
 * called on its output returns true. At that point, the number of times the
 * move function was called successfully is compared to kn+c; if there exists
 * some value of k such that the two quantities are equal, then the selector
 * will return the argument zipper loc successfully.
 * 
 * For example, (n-moves-until 2 1 clojure.zip/left nil?) will return a selector
 * that calls zip/left on its own output, beginning with the argument zipper
 * loc, until its return value is nil (nil? returns true). Suppose it called
 * left 5 times before zip/left returned nil. Then the selector will return
 * with success, since 2k+1 = 5 for k = 2.
 * 
 * Most nth-child-* selectors in this package use n-moves-until in their
 * implementation.
 */
hickory.select.n_moves_until = (function hickory$select$n_moves_until(n,c,move,term_pred){
return (function (hzip_loc){
var distance = hickory.select.count_until.call(null,move,hzip_loc,term_pred);
if(((0) === n)){
if((distance === c)){
return hzip_loc;
} else {
return null;
}
} else {
if(((0) === cljs.core.rem.call(null,(distance - c),n))){
return hzip_loc;
} else {
return null;
}
}
});
});
/**
 * Returns a function that returns true if the node is the nth child of
 * its parent (and it has a parent) of the given tag type. First element is 1,
 * last is n.
 */
hickory.select.nth_of_type = (function hickory$select$nth_of_type(var_args){
var args17221 = [];
var len__5726__auto___17224 = arguments.length;
var i__5727__auto___17225 = (0);
while(true){
if((i__5727__auto___17225 < len__5726__auto___17224)){
args17221.push((arguments[i__5727__auto___17225]));

var G__17226 = (i__5727__auto___17225 + (1));
i__5727__auto___17225 = G__17226;
continue;
} else {
}
break;
}

var G__17223 = args17221.length;
switch (G__17223) {
case 2:
return hickory.select.nth_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hickory.select.nth_of_type.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17221.length)].join('')));

}
});

hickory.select.nth_of_type.cljs$core$IFn$_invoke$arity$2 = (function (c,typ){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"odd","odd",-1213409872),c)){
return hickory.select.nth_of_type.call(null,(2),(1),typ);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"even","even",-275845692),c)){
return hickory.select.nth_of_type.call(null,(2),(0),typ);
} else {
return hickory.select.nth_of_type.call(null,(0),c,typ);

}
}
});

hickory.select.nth_of_type.cljs$core$IFn$_invoke$arity$3 = (function (n,c,typ){
return (function (hzip_loc){
if(cljs.core.truth_((function (){var and__4656__auto__ = hickory.select.element_child.call(null,hzip_loc);
if(cljs.core.truth_(and__4656__auto__)){
return cljs.core._EQ_.call(null,typ,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,hzip_loc)));
} else {
return and__4656__auto__;
}
})())){
var sel = hickory.select.n_moves_until.call(null,n,c,(function (p1__17220_SHARP_){
return hickory.select.left_pred.call(null,p1__17220_SHARP_,(function (x){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,x)),typ);
}));
}),cljs.core.nil_QMARK_);
return sel.call(null,hzip_loc);
} else {
return null;
}
});
});

hickory.select.nth_of_type.cljs$lang$maxFixedArity = 3;
/**
 * Returns a function that returns true if the node is the nth last child of
 * its parent (and it has a parent) of the given tag type. First element is 1,
 * last is n.
 */
hickory.select.nth_last_of_type = (function hickory$select$nth_last_of_type(var_args){
var args17229 = [];
var len__5726__auto___17232 = arguments.length;
var i__5727__auto___17233 = (0);
while(true){
if((i__5727__auto___17233 < len__5726__auto___17232)){
args17229.push((arguments[i__5727__auto___17233]));

var G__17234 = (i__5727__auto___17233 + (1));
i__5727__auto___17233 = G__17234;
continue;
} else {
}
break;
}

var G__17231 = args17229.length;
switch (G__17231) {
case 2:
return hickory.select.nth_last_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hickory.select.nth_last_of_type.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17229.length)].join('')));

}
});

hickory.select.nth_last_of_type.cljs$core$IFn$_invoke$arity$2 = (function (c,typ){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"odd","odd",-1213409872),c)){
return hickory.select.nth_last_of_type.call(null,(2),(1),typ);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"even","even",-275845692),c)){
return hickory.select.nth_last_of_type.call(null,(2),(0),typ);
} else {
return hickory.select.nth_last_of_type.call(null,(0),c,typ);

}
}
});

hickory.select.nth_last_of_type.cljs$core$IFn$_invoke$arity$3 = (function (n,c,typ){
return (function (hzip_loc){
if(cljs.core.truth_((function (){var and__4656__auto__ = hickory.select.element_child.call(null,hzip_loc);
if(cljs.core.truth_(and__4656__auto__)){
return cljs.core._EQ_.call(null,typ,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,hzip_loc)));
} else {
return and__4656__auto__;
}
})())){
var sel = hickory.select.n_moves_until.call(null,n,c,(function (p1__17228_SHARP_){
return hickory.select.right_pred.call(null,p1__17228_SHARP_,(function (x){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,x)),typ);
}));
}),cljs.core.nil_QMARK_);
return sel.call(null,hzip_loc);
} else {
return null;
}
});
});

hickory.select.nth_last_of_type.cljs$lang$maxFixedArity = 3;
/**
 * Returns a function that returns true if the node is the nth child of
 * its parent (and it has a parent). First element is 1, last is n.
 */
hickory.select.nth_child = (function hickory$select$nth_child(var_args){
var args17237 = [];
var len__5726__auto___17240 = arguments.length;
var i__5727__auto___17241 = (0);
while(true){
if((i__5727__auto___17241 < len__5726__auto___17240)){
args17237.push((arguments[i__5727__auto___17241]));

var G__17242 = (i__5727__auto___17241 + (1));
i__5727__auto___17241 = G__17242;
continue;
} else {
}
break;
}

var G__17239 = args17237.length;
switch (G__17239) {
case 1:
return hickory.select.nth_child.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hickory.select.nth_child.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17237.length)].join('')));

}
});

hickory.select.nth_child.cljs$core$IFn$_invoke$arity$1 = (function (c){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"odd","odd",-1213409872),c)){
return hickory.select.nth_child.call(null,(2),(1));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"even","even",-275845692),c)){
return hickory.select.nth_child.call(null,(2),(0));
} else {
return hickory.select.nth_child.call(null,(0),c);

}
}
});

hickory.select.nth_child.cljs$core$IFn$_invoke$arity$2 = (function (n,c){
return (function (hzip_loc){
if(cljs.core.truth_(hickory.select.element_child.call(null,hzip_loc))){
var sel = hickory.select.n_moves_until.call(null,n,c,(function (p1__17236_SHARP_){
return hickory.select.left_of_node_type.call(null,p1__17236_SHARP_,new cljs.core.Keyword(null,"element","element",1974019749));
}),cljs.core.nil_QMARK_);
return sel.call(null,hzip_loc);
} else {
return null;
}
});
});

hickory.select.nth_child.cljs$lang$maxFixedArity = 2;
/**
 * Returns a function that returns true if the node has n siblings after it,
 * and has a parent.
 */
hickory.select.nth_last_child = (function hickory$select$nth_last_child(var_args){
var args17245 = [];
var len__5726__auto___17248 = arguments.length;
var i__5727__auto___17249 = (0);
while(true){
if((i__5727__auto___17249 < len__5726__auto___17248)){
args17245.push((arguments[i__5727__auto___17249]));

var G__17250 = (i__5727__auto___17249 + (1));
i__5727__auto___17249 = G__17250;
continue;
} else {
}
break;
}

var G__17247 = args17245.length;
switch (G__17247) {
case 1:
return hickory.select.nth_last_child.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hickory.select.nth_last_child.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17245.length)].join('')));

}
});

hickory.select.nth_last_child.cljs$core$IFn$_invoke$arity$1 = (function (c){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"odd","odd",-1213409872),c)){
return hickory.select.nth_last_child.call(null,(2),(1));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"even","even",-275845692),c)){
return hickory.select.nth_last_child.call(null,(2),(0));
} else {
return hickory.select.nth_last_child.call(null,(0),c);

}
}
});

hickory.select.nth_last_child.cljs$core$IFn$_invoke$arity$2 = (function (n,c){
return (function (hzip_loc){
if(cljs.core.truth_(hickory.select.element_child.call(null,hzip_loc))){
var sel = hickory.select.n_moves_until.call(null,n,c,(function (p1__17244_SHARP_){
return hickory.select.right_of_node_type.call(null,p1__17244_SHARP_,new cljs.core.Keyword(null,"element","element",1974019749));
}),cljs.core.nil_QMARK_);
return sel.call(null,hzip_loc);
} else {
return null;
}
});
});

hickory.select.nth_last_child.cljs$lang$maxFixedArity = 2;
/**
 * This selector takes no args, it is simply the selector. Returns
 * true if the node is the first child of its parent (and it has a
 * parent).
 */
hickory.select.first_child = (function hickory$select$first_child(hzip_loc){
var and__4656__auto__ = hickory.select.element_child.call(null,hzip_loc);
if(cljs.core.truth_(and__4656__auto__)){
return hickory.select.nth_child.call(null,(1)).call(null,hzip_loc);
} else {
return and__4656__auto__;
}
});
/**
 * This selector takes no args, it is simply the selector. Returns
 * true if the node is the last child of its parent (and it has a
 * parent.
 */
hickory.select.last_child = (function hickory$select$last_child(hzip_loc){
var and__4656__auto__ = hickory.select.element_child.call(null,hzip_loc);
if(cljs.core.truth_(and__4656__auto__)){
return hickory.select.nth_last_child.call(null,(1)).call(null,hzip_loc);
} else {
return and__4656__auto__;
}
});
/**
 * Takes any number of selectors and returns a selector that is true if
 * all of the argument selectors are true.
 */
hickory.select.and = (function hickory$select$and(var_args){
var args__5733__auto__ = [];
var len__5726__auto___17254 = arguments.length;
var i__5727__auto___17255 = (0);
while(true){
if((i__5727__auto___17255 < len__5726__auto___17254)){
args__5733__auto__.push((arguments[i__5727__auto___17255]));

var G__17256 = (i__5727__auto___17255 + (1));
i__5727__auto___17255 = G__17256;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return hickory.select.and.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

hickory.select.and.cljs$core$IFn$_invoke$arity$variadic = (function (selectors){
return (function (zip_loc){
if(cljs.core.every_QMARK_.call(null,(function (p1__17252_SHARP_){
return p1__17252_SHARP_.call(null,zip_loc);
}),selectors)){
return zip_loc;
} else {
return null;
}
});
});

hickory.select.and.cljs$lang$maxFixedArity = (0);

hickory.select.and.cljs$lang$applyTo = (function (seq17253){
return hickory.select.and.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17253));
});
/**
 * Takes any number of selectors and returns a selector that is true if
 * any of the argument selectors are true.
 */
hickory.select.or = (function hickory$select$or(var_args){
var args__5733__auto__ = [];
var len__5726__auto___17259 = arguments.length;
var i__5727__auto___17260 = (0);
while(true){
if((i__5727__auto___17260 < len__5726__auto___17259)){
args__5733__auto__.push((arguments[i__5727__auto___17260]));

var G__17261 = (i__5727__auto___17260 + (1));
i__5727__auto___17260 = G__17261;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return hickory.select.or.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

hickory.select.or.cljs$core$IFn$_invoke$arity$variadic = (function (selectors){
return (function (zip_loc){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__17257_SHARP_){
return p1__17257_SHARP_.call(null,zip_loc);
}),selectors))){
return zip_loc;
} else {
return null;
}
});
});

hickory.select.or.cljs$lang$maxFixedArity = (0);

hickory.select.or.cljs$lang$applyTo = (function (seq17258){
return hickory.select.or.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17258));
});
/**
 * Takes a selector argument and returns a selector that is true if
 * the underlying selector is false on its argument, and vice versa.
 */
hickory.select.not = (function hickory$select$not(selector){
return (function (hzip_loc){
if(cljs.core.not.call(null,selector.call(null,hzip_loc))){
return hzip_loc;
} else {
return null;
}
});
});
/**
 * Takes a selector argument and returns a selector that is true if
 * the underlying selector is false on its argument and vice versa, and
 * additionally that argument is an element node. Compared to the 'not'
 * selector, this corresponds more closely to the CSS equivalent, which
 * will only ever select elements.
 */
hickory.select.el_not = (function hickory$select$el_not(selector){
return hickory.select.and.call(null,hickory.select.node_type.call(null,new cljs.core.Keyword(null,"element","element",1974019749)),hickory.select.not.call(null,selector));
});
/**
 * Takes a zipper movement function and any number of selectors as arguments
 * and returns a selector that returns true when the zip-loc given as the
 * argument is satisfied by the first selector, and the zip-loc arrived at by
 * applying the move-fn argument is satisfied by the second selector, and so
 * on for all the selectors given as arguments. If the move-fn
 * moves to nil before the full selector list is satisfied, the entire
 * selector fails, but note that success is checked before a move to nil is
 * checked, so satisfying the last selector with the last node you can move
 * to succeeds.
 */
hickory.select.ordered_adjacent = (function hickory$select$ordered_adjacent(var_args){
var args__5733__auto__ = [];
var len__5726__auto___17264 = arguments.length;
var i__5727__auto___17265 = (0);
while(true){
if((i__5727__auto___17265 < len__5726__auto___17264)){
args__5733__auto__.push((arguments[i__5727__auto___17265]));

var G__17266 = (i__5727__auto___17265 + (1));
i__5727__auto___17265 = G__17266;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return hickory.select.ordered_adjacent.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

hickory.select.ordered_adjacent.cljs$core$IFn$_invoke$arity$variadic = (function (move_fn,selectors){
var selectors__$1 = cljs.core.into_array.call(null,cljs.core.IFn,selectors);
return ((function (selectors__$1){
return (function (hzip_loc){
var curr_loc = hzip_loc;
var idx = (0);
while(true){
if((idx >= cljs.core.count.call(null,selectors__$1))){
return hzip_loc;
} else {
if((curr_loc == null)){
return null;
} else {
var temp__4423__auto__ = cljs.core.nth.call(null,selectors__$1,idx).call(null,curr_loc);
if(cljs.core.truth_(temp__4423__auto__)){
var next_loc = temp__4423__auto__;
var G__17267 = move_fn.call(null,next_loc);
var G__17268 = (idx + (1));
curr_loc = G__17267;
idx = G__17268;
continue;
} else {
return null;
}

}
}
break;
}
});
;})(selectors__$1))
});

hickory.select.ordered_adjacent.cljs$lang$maxFixedArity = (1);

hickory.select.ordered_adjacent.cljs$lang$applyTo = (function (seq17262){
var G__17263 = cljs.core.first.call(null,seq17262);
var seq17262__$1 = cljs.core.next.call(null,seq17262);
return hickory.select.ordered_adjacent.cljs$core$IFn$_invoke$arity$variadic(G__17263,seq17262__$1);
});
/**
 * Takes any number of selectors as arguments and returns a selector that
 * returns true when the zip-loc given as the argument is at the end of
 * a chain of direct child relationships specified by the selectors given as
 * arguments.
 * 
 * Example: (child (tag :div) (class :foo) (attr :disabled))
 *   will select the input in
 * <div><span class="foo"><input disabled></input></span></div>
 *   but not in
 * <div><span class="foo"><b><input disabled></input></b></span></div>
 */
hickory.select.child = (function hickory$select$child(var_args){
var args__5733__auto__ = [];
var len__5726__auto___17270 = arguments.length;
var i__5727__auto___17271 = (0);
while(true){
if((i__5727__auto___17271 < len__5726__auto___17270)){
args__5733__auto__.push((arguments[i__5727__auto___17271]));

var G__17272 = (i__5727__auto___17271 + (1));
i__5727__auto___17271 = G__17272;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return hickory.select.child.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

hickory.select.child.cljs$core$IFn$_invoke$arity$variadic = (function (selectors){
return cljs.core.apply.call(null,hickory.select.ordered_adjacent,clojure.zip.up,cljs.core.reverse.call(null,selectors));
});

hickory.select.child.cljs$lang$maxFixedArity = (0);

hickory.select.child.cljs$lang$applyTo = (function (seq17269){
return hickory.select.child.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17269));
});
/**
 * Takes any number of selectors as arguments and returns a selector that
 * returns true when the zip-loc given as the argument is at the end of
 * a chain of direct element sibling relationships specified by the selectors
 * given as arguments.
 * 
 * Example: (follow-adjacent (tag :div) (class :foo))
 *   will select the span in
 * <div>...</div><span class="foo">...</span>
 *   but not in
 * <div>...</div><b>...</b><span class="foo">...</span>
 */
hickory.select.follow_adjacent = (function hickory$select$follow_adjacent(var_args){
var args__5733__auto__ = [];
var len__5726__auto___17275 = arguments.length;
var i__5727__auto___17276 = (0);
while(true){
if((i__5727__auto___17276 < len__5726__auto___17275)){
args__5733__auto__.push((arguments[i__5727__auto___17276]));

var G__17277 = (i__5727__auto___17276 + (1));
i__5727__auto___17276 = G__17277;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return hickory.select.follow_adjacent.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

hickory.select.follow_adjacent.cljs$core$IFn$_invoke$arity$variadic = (function (selectors){
return cljs.core.apply.call(null,hickory.select.ordered_adjacent,(function (p1__17273_SHARP_){
return hickory.select.left_of_node_type.call(null,p1__17273_SHARP_,new cljs.core.Keyword(null,"element","element",1974019749));
}),cljs.core.reverse.call(null,selectors));
});

hickory.select.follow_adjacent.cljs$lang$maxFixedArity = (0);

hickory.select.follow_adjacent.cljs$lang$applyTo = (function (seq17274){
return hickory.select.follow_adjacent.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17274));
});
/**
 * Takes any number of selectors as arguments and returns a selector that
 * returns true when the zip-loc given as the argument is at the beginning of
 * a chain of direct element sibling relationships specified by the selectors
 * given as arguments.
 * 
 * Example: (precede-adjacent (tag :div) (class :foo))
 *   will select the div in
 * <div>...</div><span class="foo">...</span>
 *   but not in
 * <div>...</div><b>...</b><span class="foo">...</span>
 */
hickory.select.precede_adjacent = (function hickory$select$precede_adjacent(var_args){
var args__5733__auto__ = [];
var len__5726__auto___17280 = arguments.length;
var i__5727__auto___17281 = (0);
while(true){
if((i__5727__auto___17281 < len__5726__auto___17280)){
args__5733__auto__.push((arguments[i__5727__auto___17281]));

var G__17282 = (i__5727__auto___17281 + (1));
i__5727__auto___17281 = G__17282;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return hickory.select.precede_adjacent.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

hickory.select.precede_adjacent.cljs$core$IFn$_invoke$arity$variadic = (function (selectors){
return cljs.core.apply.call(null,hickory.select.ordered_adjacent,(function (p1__17278_SHARP_){
return hickory.select.right_of_node_type.call(null,p1__17278_SHARP_,new cljs.core.Keyword(null,"element","element",1974019749));
}),selectors);
});

hickory.select.precede_adjacent.cljs$lang$maxFixedArity = (0);

hickory.select.precede_adjacent.cljs$lang$applyTo = (function (seq17279){
return hickory.select.precede_adjacent.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17279));
});
/**
 * Takes a zipper movement function and any number of selectors as arguments
 * and returns a selector that returns true when the zip-loc given as the
 * argument is satisfied by the first selector, and some zip-loc arrived at by
 * applying the move-fn argument *one or more times* is satisfied by the second
 * selector, and so on for all the selectors given as arguments. If the move-fn
 * moves to nil before a the full selector list is satisfied, the entire
 * selector fails, but note that success is checked before a move to nil is
 * checked, so satisfying the last selector with the last node you can move
 * to succeeds.
 */
hickory.select.ordered = (function hickory$select$ordered(var_args){
var args__5733__auto__ = [];
var len__5726__auto___17285 = arguments.length;
var i__5727__auto___17286 = (0);
while(true){
if((i__5727__auto___17286 < len__5726__auto___17285)){
args__5733__auto__.push((arguments[i__5727__auto___17286]));

var G__17287 = (i__5727__auto___17286 + (1));
i__5727__auto___17286 = G__17287;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return hickory.select.ordered.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

hickory.select.ordered.cljs$core$IFn$_invoke$arity$variadic = (function (move_fn,selectors){
var selectors__$1 = cljs.core.into_array.call(null,cljs.core.IFn,selectors);
return ((function (selectors__$1){
return (function (hzip_loc){
var fst_selector = cljs.core.nth.call(null,selectors__$1,(0));
if(cljs.core.truth_(fst_selector.call(null,hzip_loc))){
var curr_loc = move_fn.call(null,hzip_loc);
var idx = (1);
while(true){
if((idx >= cljs.core.count.call(null,selectors__$1))){
return hzip_loc;
} else {
if((curr_loc == null)){
return null;
} else {
if(cljs.core.truth_(cljs.core.nth.call(null,selectors__$1,idx).call(null,curr_loc))){
var G__17288 = move_fn.call(null,curr_loc);
var G__17289 = (idx + (1));
curr_loc = G__17288;
idx = G__17289;
continue;
} else {
var G__17290 = move_fn.call(null,curr_loc);
var G__17291 = idx;
curr_loc = G__17290;
idx = G__17291;
continue;
}

}
}
break;
}
} else {
return null;
}
});
;})(selectors__$1))
});

hickory.select.ordered.cljs$lang$maxFixedArity = (1);

hickory.select.ordered.cljs$lang$applyTo = (function (seq17283){
var G__17284 = cljs.core.first.call(null,seq17283);
var seq17283__$1 = cljs.core.next.call(null,seq17283);
return hickory.select.ordered.cljs$core$IFn$_invoke$arity$variadic(G__17284,seq17283__$1);
});
/**
 * Takes any number of selectors as arguments and returns a selector that
 * returns true when the zip-loc given as the argument is at the end of
 * a chain of descendant relationships specified by the
 * selectors given as arguments. To be clear, the node selected matches
 * the final selector, but the previous selectors can match anywhere in
 * the node's ancestry, provided they match in the order they are given
 * as arguments, from top to bottom.
 * 
 * Example: (descendant (tag :div) (class :foo) (attr :disabled))
 *   will select the input in both
 * <div><span class="foo"><input disabled></input></span></div>
 *   and
 * <div><span class="foo"><b><input disabled></input></b></span></div>
 */
hickory.select.descendant = (function hickory$select$descendant(var_args){
var args__5733__auto__ = [];
var len__5726__auto___17293 = arguments.length;
var i__5727__auto___17294 = (0);
while(true){
if((i__5727__auto___17294 < len__5726__auto___17293)){
args__5733__auto__.push((arguments[i__5727__auto___17294]));

var G__17295 = (i__5727__auto___17294 + (1));
i__5727__auto___17294 = G__17295;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return hickory.select.descendant.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

hickory.select.descendant.cljs$core$IFn$_invoke$arity$variadic = (function (selectors){
return cljs.core.apply.call(null,hickory.select.ordered,clojure.zip.up,cljs.core.reverse.call(null,selectors));
});

hickory.select.descendant.cljs$lang$maxFixedArity = (0);

hickory.select.descendant.cljs$lang$applyTo = (function (seq17292){
return hickory.select.descendant.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17292));
});
/**
 * Takes any number of selectors as arguments and returns a selector that
 * returns true when the zip-loc given as the argument is at the end of
 * a chain of element sibling relationships specified by the selectors
 * given as arguments; intervening elements that do not satisfy a selector
 * are simply ignored and do not prevent a match.
 * 
 * Example: (follow (tag :div) (class :foo))
 *   will select the span in both
 * <div>...</div><span class="foo">...</span>
 *   and
 * <div>...</div><b>...</b><span class="foo">...</span>
 */
hickory.select.follow = (function hickory$select$follow(var_args){
var args__5733__auto__ = [];
var len__5726__auto___17298 = arguments.length;
var i__5727__auto___17299 = (0);
while(true){
if((i__5727__auto___17299 < len__5726__auto___17298)){
args__5733__auto__.push((arguments[i__5727__auto___17299]));

var G__17300 = (i__5727__auto___17299 + (1));
i__5727__auto___17299 = G__17300;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return hickory.select.follow.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

hickory.select.follow.cljs$core$IFn$_invoke$arity$variadic = (function (selectors){
return cljs.core.apply.call(null,hickory.select.ordered,(function (p1__17296_SHARP_){
return hickory.select.left_of_node_type.call(null,p1__17296_SHARP_,new cljs.core.Keyword(null,"element","element",1974019749));
}),cljs.core.reverse.call(null,selectors));
});

hickory.select.follow.cljs$lang$maxFixedArity = (0);

hickory.select.follow.cljs$lang$applyTo = (function (seq17297){
return hickory.select.follow.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17297));
});
/**
 * Takes any number of selectors as arguments and returns a selector that
 * returns true when the zip-loc given as the argument is at the beginning of
 * a chain of element sibling relationships specified by the selectors
 * given as arguments; intervening elements that do not satisfy a selector
 * are simply ignored and do not prevent a match.
 * 
 * Example: (precede (tag :div) (class :foo))
 *   will select the div in both
 * <div>...</div><span class="foo">...</span>
 *   and
 * <div>...</div><b>...</b><span class="foo">...</span>
 */
hickory.select.precede = (function hickory$select$precede(var_args){
var args__5733__auto__ = [];
var len__5726__auto___17303 = arguments.length;
var i__5727__auto___17304 = (0);
while(true){
if((i__5727__auto___17304 < len__5726__auto___17303)){
args__5733__auto__.push((arguments[i__5727__auto___17304]));

var G__17305 = (i__5727__auto___17304 + (1));
i__5727__auto___17304 = G__17305;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return hickory.select.precede.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

hickory.select.precede.cljs$core$IFn$_invoke$arity$variadic = (function (selectors){
return cljs.core.apply.call(null,hickory.select.ordered,(function (p1__17301_SHARP_){
return hickory.select.right_of_node_type.call(null,p1__17301_SHARP_,new cljs.core.Keyword(null,"element","element",1974019749));
}),selectors);
});

hickory.select.precede.cljs$lang$maxFixedArity = (0);

hickory.select.precede.cljs$lang$applyTo = (function (seq17302){
return hickory.select.precede.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17302));
});
/**
 * Takes a selector as argument and returns a selector that returns true
 * when some descendant node of the zip-loc given as the argument satisfies
 * the selector.
 * 
 * Be aware that because this selector must do a full sub-tree search on
 * each node examined, it can have terrible performance. It's helpful if this is
 * a late clause in an `and`, to prevent it from even attempting to match
 * unless other criteria have been met first.
 * 
 * Example: (has-descendant (tag :div))
 *   will select the span and the outer div, but not the inner div, in
 * <span><div><div></div></div></span>
 */
hickory.select.has_descendant = (function hickory$select$has_descendant(selector){
return (function (hzip_loc){
var subtree_start_loc = clojure.zip.down.call(null,hzip_loc);
var has_children_QMARK_ = cljs.core.not_EQ_.call(null,null,subtree_start_loc);
if(has_children_QMARK_){
var subtree_end_loc = hickory.select.after_subtree.call(null,hzip_loc);
if(cljs.core.truth_(hickory.select.select_next_loc.call(null,selector,subtree_start_loc,clojure.zip.next,((function (subtree_end_loc,subtree_start_loc,has_children_QMARK_){
return (function (p1__17306_SHARP_){
return cljs.core._EQ_.call(null,p1__17306_SHARP_,subtree_end_loc);
});})(subtree_end_loc,subtree_start_loc,has_children_QMARK_))
))){
return hzip_loc;
} else {
return null;
}
} else {
return null;
}
});
});
/**
 * Takes a selector as argument and returns a selector that returns true
 * when some direct child node of the zip-loc given as the argument satisfies
 * the selector.
 * 
 * Example: (has-child (tag :div))
 *   will select only the inner span in
 * <div><span><div></div></span></div>
 */
hickory.select.has_child = (function hickory$select$has_child(selector){
return (function (hzip_loc){
var subtree_start_loc = clojure.zip.down.call(null,hzip_loc);
var has_children_QMARK_ = cljs.core.not_EQ_.call(null,null,subtree_start_loc);
if(has_children_QMARK_){
if(cljs.core.truth_(hickory.select.select_next_loc.call(null,selector,subtree_start_loc,clojure.zip.right,((function (subtree_start_loc,has_children_QMARK_){
return (function (p1__17307_SHARP_){
return (p1__17307_SHARP_ == null);
});})(subtree_start_loc,has_children_QMARK_))
))){
return hzip_loc;
} else {
return null;
}
} else {
return null;
}
});
});

//# sourceMappingURL=select.js.map?rel=1453744594432