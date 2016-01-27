// Compiled by ClojureScript 1.7.170 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom.server');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__11777__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__11776 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__11776,(0),null);
var body = cljs.core.nthnext.call(null,vec__11776,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__11777 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11778__i = 0, G__11778__a = new Array(arguments.length -  0);
while (G__11778__i < G__11778__a.length) {G__11778__a[G__11778__i] = arguments[G__11778__i + 0]; ++G__11778__i;}
  args = new cljs.core.IndexedSeq(G__11778__a,0);
} 
return G__11777__delegate.call(this,args);};
G__11777.cljs$lang$maxFixedArity = 0;
G__11777.cljs$lang$applyTo = (function (arglist__11779){
var args = cljs.core.seq(arglist__11779);
return G__11777__delegate(args);
});
G__11777.cljs$core$IFn$_invoke$arity$variadic = G__11777__delegate;
return G__11777;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5440__auto__ = (function sablono$core$update_arglists_$_iter__11784(s__11785){
return (new cljs.core.LazySeq(null,(function (){
var s__11785__$1 = s__11785;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11785__$1);
if(temp__4425__auto__){
var s__11785__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11785__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__11785__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__11787 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__11786 = (0);
while(true){
if((i__11786 < size__5439__auto__)){
var args = cljs.core._nth.call(null,c__5438__auto__,i__11786);
cljs.core.chunk_append.call(null,b__11787,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__11788 = (i__11786 + (1));
i__11786 = G__11788;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11787),sablono$core$update_arglists_$_iter__11784.call(null,cljs.core.chunk_rest.call(null,s__11785__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11787),null);
}
} else {
var args = cljs.core.first.call(null,s__11785__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__11784.call(null,cljs.core.rest.call(null,s__11785__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return ReactDOMServer.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return ReactDOMServer.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__5733__auto__ = [];
var len__5726__auto___11794 = arguments.length;
var i__5727__auto___11795 = (0);
while(true){
if((i__5727__auto___11795 < len__5726__auto___11794)){
args__5733__auto__.push((arguments[i__5727__auto___11795]));

var G__11796 = (i__5727__auto___11795 + (1));
i__5727__auto___11795 = G__11796;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5440__auto__ = (function sablono$core$iter__11790(s__11791){
return (new cljs.core.LazySeq(null,(function (){
var s__11791__$1 = s__11791;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11791__$1);
if(temp__4425__auto__){
var s__11791__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11791__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__11791__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__11793 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__11792 = (0);
while(true){
if((i__11792 < size__5439__auto__)){
var style = cljs.core._nth.call(null,c__5438__auto__,i__11792);
cljs.core.chunk_append.call(null,b__11793,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__11797 = (i__11792 + (1));
i__11792 = G__11797;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11793),sablono$core$iter__11790.call(null,cljs.core.chunk_rest.call(null,s__11791__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11793),null);
}
} else {
var style = cljs.core.first.call(null,s__11791__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__11790.call(null,cljs.core.rest.call(null,s__11791__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq11789){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11789));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to11798 = (function sablono$core$link_to11798(var_args){
var args__5733__auto__ = [];
var len__5726__auto___11801 = arguments.length;
var i__5727__auto___11802 = (0);
while(true){
if((i__5727__auto___11802 < len__5726__auto___11801)){
args__5733__auto__.push((arguments[i__5727__auto___11802]));

var G__11803 = (i__5727__auto___11802 + (1));
i__5727__auto___11802 = G__11803;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return sablono.core.link_to11798.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

sablono.core.link_to11798.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to11798.cljs$lang$maxFixedArity = (1);

sablono.core.link_to11798.cljs$lang$applyTo = (function (seq11799){
var G__11800 = cljs.core.first.call(null,seq11799);
var seq11799__$1 = cljs.core.next.call(null,seq11799);
return sablono.core.link_to11798.cljs$core$IFn$_invoke$arity$variadic(G__11800,seq11799__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to11798);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to11804 = (function sablono$core$mail_to11804(var_args){
var args__5733__auto__ = [];
var len__5726__auto___11809 = arguments.length;
var i__5727__auto___11810 = (0);
while(true){
if((i__5727__auto___11810 < len__5726__auto___11809)){
args__5733__auto__.push((arguments[i__5727__auto___11810]));

var G__11811 = (i__5727__auto___11810 + (1));
i__5727__auto___11810 = G__11811;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return sablono.core.mail_to11804.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

sablono.core.mail_to11804.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__11807){
var vec__11808 = p__11807;
var content = cljs.core.nth.call(null,vec__11808,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4668__auto__ = content;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to11804.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to11804.cljs$lang$applyTo = (function (seq11805){
var G__11806 = cljs.core.first.call(null,seq11805);
var seq11805__$1 = cljs.core.next.call(null,seq11805);
return sablono.core.mail_to11804.cljs$core$IFn$_invoke$arity$variadic(G__11806,seq11805__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to11804);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list11812 = (function sablono$core$unordered_list11812(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5440__auto__ = (function sablono$core$unordered_list11812_$_iter__11817(s__11818){
return (new cljs.core.LazySeq(null,(function (){
var s__11818__$1 = s__11818;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11818__$1);
if(temp__4425__auto__){
var s__11818__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11818__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__11818__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__11820 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__11819 = (0);
while(true){
if((i__11819 < size__5439__auto__)){
var x = cljs.core._nth.call(null,c__5438__auto__,i__11819);
cljs.core.chunk_append.call(null,b__11820,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__11821 = (i__11819 + (1));
i__11819 = G__11821;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11820),sablono$core$unordered_list11812_$_iter__11817.call(null,cljs.core.chunk_rest.call(null,s__11818__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11820),null);
}
} else {
var x = cljs.core.first.call(null,s__11818__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list11812_$_iter__11817.call(null,cljs.core.rest.call(null,s__11818__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list11812);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list11822 = (function sablono$core$ordered_list11822(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5440__auto__ = (function sablono$core$ordered_list11822_$_iter__11827(s__11828){
return (new cljs.core.LazySeq(null,(function (){
var s__11828__$1 = s__11828;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11828__$1);
if(temp__4425__auto__){
var s__11828__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11828__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__11828__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__11830 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__11829 = (0);
while(true){
if((i__11829 < size__5439__auto__)){
var x = cljs.core._nth.call(null,c__5438__auto__,i__11829);
cljs.core.chunk_append.call(null,b__11830,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__11831 = (i__11829 + (1));
i__11829 = G__11831;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11830),sablono$core$ordered_list11822_$_iter__11827.call(null,cljs.core.chunk_rest.call(null,s__11828__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11830),null);
}
} else {
var x = cljs.core.first.call(null,s__11828__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list11822_$_iter__11827.call(null,cljs.core.rest.call(null,s__11828__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list11822);
/**
 * Create an image element.
 */
sablono.core.image11832 = (function sablono$core$image11832(var_args){
var args11833 = [];
var len__5726__auto___11836 = arguments.length;
var i__5727__auto___11837 = (0);
while(true){
if((i__5727__auto___11837 < len__5726__auto___11836)){
args11833.push((arguments[i__5727__auto___11837]));

var G__11838 = (i__5727__auto___11837 + (1));
i__5727__auto___11837 = G__11838;
continue;
} else {
}
break;
}

var G__11835 = args11833.length;
switch (G__11835) {
case 1:
return sablono.core.image11832.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image11832.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11833.length)].join('')));

}
});

sablono.core.image11832.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image11832.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image11832.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image11832);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__11840_SHARP_,p2__11841_SHARP_){
return [cljs.core.str(p1__11840_SHARP_),cljs.core.str("["),cljs.core.str(p2__11841_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__11842_SHARP_,p2__11843_SHARP_){
return [cljs.core.str(p1__11842_SHARP_),cljs.core.str("-"),cljs.core.str(p2__11843_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field11844 = (function sablono$core$color_field11844(var_args){
var args11845 = [];
var len__5726__auto___11912 = arguments.length;
var i__5727__auto___11913 = (0);
while(true){
if((i__5727__auto___11913 < len__5726__auto___11912)){
args11845.push((arguments[i__5727__auto___11913]));

var G__11914 = (i__5727__auto___11913 + (1));
i__5727__auto___11913 = G__11914;
continue;
} else {
}
break;
}

var G__11847 = args11845.length;
switch (G__11847) {
case 1:
return sablono.core.color_field11844.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field11844.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11845.length)].join('')));

}
});

sablono.core.color_field11844.cljs$core$IFn$_invoke$arity$1 = (function (name__11765__auto__){
return sablono.core.color_field11844.call(null,name__11765__auto__,null);
});

sablono.core.color_field11844.cljs$core$IFn$_invoke$arity$2 = (function (name__11765__auto__,value__11766__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__11765__auto__,value__11766__auto__);
});

sablono.core.color_field11844.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field11844);

/**
 * Creates a date input field.
 */
sablono.core.date_field11848 = (function sablono$core$date_field11848(var_args){
var args11849 = [];
var len__5726__auto___11916 = arguments.length;
var i__5727__auto___11917 = (0);
while(true){
if((i__5727__auto___11917 < len__5726__auto___11916)){
args11849.push((arguments[i__5727__auto___11917]));

var G__11918 = (i__5727__auto___11917 + (1));
i__5727__auto___11917 = G__11918;
continue;
} else {
}
break;
}

var G__11851 = args11849.length;
switch (G__11851) {
case 1:
return sablono.core.date_field11848.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field11848.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11849.length)].join('')));

}
});

sablono.core.date_field11848.cljs$core$IFn$_invoke$arity$1 = (function (name__11765__auto__){
return sablono.core.date_field11848.call(null,name__11765__auto__,null);
});

sablono.core.date_field11848.cljs$core$IFn$_invoke$arity$2 = (function (name__11765__auto__,value__11766__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__11765__auto__,value__11766__auto__);
});

sablono.core.date_field11848.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field11848);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field11852 = (function sablono$core$datetime_field11852(var_args){
var args11853 = [];
var len__5726__auto___11920 = arguments.length;
var i__5727__auto___11921 = (0);
while(true){
if((i__5727__auto___11921 < len__5726__auto___11920)){
args11853.push((arguments[i__5727__auto___11921]));

var G__11922 = (i__5727__auto___11921 + (1));
i__5727__auto___11921 = G__11922;
continue;
} else {
}
break;
}

var G__11855 = args11853.length;
switch (G__11855) {
case 1:
return sablono.core.datetime_field11852.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field11852.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11853.length)].join('')));

}
});

sablono.core.datetime_field11852.cljs$core$IFn$_invoke$arity$1 = (function (name__11765__auto__){
return sablono.core.datetime_field11852.call(null,name__11765__auto__,null);
});

sablono.core.datetime_field11852.cljs$core$IFn$_invoke$arity$2 = (function (name__11765__auto__,value__11766__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__11765__auto__,value__11766__auto__);
});

sablono.core.datetime_field11852.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field11852);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field11856 = (function sablono$core$datetime_local_field11856(var_args){
var args11857 = [];
var len__5726__auto___11924 = arguments.length;
var i__5727__auto___11925 = (0);
while(true){
if((i__5727__auto___11925 < len__5726__auto___11924)){
args11857.push((arguments[i__5727__auto___11925]));

var G__11926 = (i__5727__auto___11925 + (1));
i__5727__auto___11925 = G__11926;
continue;
} else {
}
break;
}

var G__11859 = args11857.length;
switch (G__11859) {
case 1:
return sablono.core.datetime_local_field11856.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field11856.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11857.length)].join('')));

}
});

sablono.core.datetime_local_field11856.cljs$core$IFn$_invoke$arity$1 = (function (name__11765__auto__){
return sablono.core.datetime_local_field11856.call(null,name__11765__auto__,null);
});

sablono.core.datetime_local_field11856.cljs$core$IFn$_invoke$arity$2 = (function (name__11765__auto__,value__11766__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__11765__auto__,value__11766__auto__);
});

sablono.core.datetime_local_field11856.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field11856);

/**
 * Creates a email input field.
 */
sablono.core.email_field11860 = (function sablono$core$email_field11860(var_args){
var args11861 = [];
var len__5726__auto___11928 = arguments.length;
var i__5727__auto___11929 = (0);
while(true){
if((i__5727__auto___11929 < len__5726__auto___11928)){
args11861.push((arguments[i__5727__auto___11929]));

var G__11930 = (i__5727__auto___11929 + (1));
i__5727__auto___11929 = G__11930;
continue;
} else {
}
break;
}

var G__11863 = args11861.length;
switch (G__11863) {
case 1:
return sablono.core.email_field11860.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field11860.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11861.length)].join('')));

}
});

sablono.core.email_field11860.cljs$core$IFn$_invoke$arity$1 = (function (name__11765__auto__){
return sablono.core.email_field11860.call(null,name__11765__auto__,null);
});

sablono.core.email_field11860.cljs$core$IFn$_invoke$arity$2 = (function (name__11765__auto__,value__11766__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__11765__auto__,value__11766__auto__);
});

sablono.core.email_field11860.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field11860);

/**
 * Creates a file input field.
 */
sablono.core.file_field11864 = (function sablono$core$file_field11864(var_args){
var args11865 = [];
var len__5726__auto___11932 = arguments.length;
var i__5727__auto___11933 = (0);
while(true){
if((i__5727__auto___11933 < len__5726__auto___11932)){
args11865.push((arguments[i__5727__auto___11933]));

var G__11934 = (i__5727__auto___11933 + (1));
i__5727__auto___11933 = G__11934;
continue;
} else {
}
break;
}

var G__11867 = args11865.length;
switch (G__11867) {
case 1:
return sablono.core.file_field11864.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field11864.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11865.length)].join('')));

}
});

sablono.core.file_field11864.cljs$core$IFn$_invoke$arity$1 = (function (name__11765__auto__){
return sablono.core.file_field11864.call(null,name__11765__auto__,null);
});

sablono.core.file_field11864.cljs$core$IFn$_invoke$arity$2 = (function (name__11765__auto__,value__11766__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__11765__auto__,value__11766__auto__);
});

sablono.core.file_field11864.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field11864);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field11868 = (function sablono$core$hidden_field11868(var_args){
var args11869 = [];
var len__5726__auto___11936 = arguments.length;
var i__5727__auto___11937 = (0);
while(true){
if((i__5727__auto___11937 < len__5726__auto___11936)){
args11869.push((arguments[i__5727__auto___11937]));

var G__11938 = (i__5727__auto___11937 + (1));
i__5727__auto___11937 = G__11938;
continue;
} else {
}
break;
}

var G__11871 = args11869.length;
switch (G__11871) {
case 1:
return sablono.core.hidden_field11868.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field11868.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11869.length)].join('')));

}
});

sablono.core.hidden_field11868.cljs$core$IFn$_invoke$arity$1 = (function (name__11765__auto__){
return sablono.core.hidden_field11868.call(null,name__11765__auto__,null);
});

sablono.core.hidden_field11868.cljs$core$IFn$_invoke$arity$2 = (function (name__11765__auto__,value__11766__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__11765__auto__,value__11766__auto__);
});

sablono.core.hidden_field11868.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field11868);

/**
 * Creates a month input field.
 */
sablono.core.month_field11872 = (function sablono$core$month_field11872(var_args){
var args11873 = [];
var len__5726__auto___11940 = arguments.length;
var i__5727__auto___11941 = (0);
while(true){
if((i__5727__auto___11941 < len__5726__auto___11940)){
args11873.push((arguments[i__5727__auto___11941]));

var G__11942 = (i__5727__auto___11941 + (1));
i__5727__auto___11941 = G__11942;
continue;
} else {
}
break;
}

var G__11875 = args11873.length;
switch (G__11875) {
case 1:
return sablono.core.month_field11872.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field11872.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11873.length)].join('')));

}
});

sablono.core.month_field11872.cljs$core$IFn$_invoke$arity$1 = (function (name__11765__auto__){
return sablono.core.month_field11872.call(null,name__11765__auto__,null);
});

sablono.core.month_field11872.cljs$core$IFn$_invoke$arity$2 = (function (name__11765__auto__,value__11766__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__11765__auto__,value__11766__auto__);
});

sablono.core.month_field11872.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field11872);

/**
 * Creates a number input field.
 */
sablono.core.number_field11876 = (function sablono$core$number_field11876(var_args){
var args11877 = [];
var len__5726__auto___11944 = arguments.length;
var i__5727__auto___11945 = (0);
while(true){
if((i__5727__auto___11945 < len__5726__auto___11944)){
args11877.push((arguments[i__5727__auto___11945]));

var G__11946 = (i__5727__auto___11945 + (1));
i__5727__auto___11945 = G__11946;
continue;
} else {
}
break;
}

var G__11879 = args11877.length;
switch (G__11879) {
case 1:
return sablono.core.number_field11876.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field11876.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11877.length)].join('')));

}
});

sablono.core.number_field11876.cljs$core$IFn$_invoke$arity$1 = (function (name__11765__auto__){
return sablono.core.number_field11876.call(null,name__11765__auto__,null);
});

sablono.core.number_field11876.cljs$core$IFn$_invoke$arity$2 = (function (name__11765__auto__,value__11766__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__11765__auto__,value__11766__auto__);
});

sablono.core.number_field11876.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field11876);

/**
 * Creates a password input field.
 */
sablono.core.password_field11880 = (function sablono$core$password_field11880(var_args){
var args11881 = [];
var len__5726__auto___11948 = arguments.length;
var i__5727__auto___11949 = (0);
while(true){
if((i__5727__auto___11949 < len__5726__auto___11948)){
args11881.push((arguments[i__5727__auto___11949]));

var G__11950 = (i__5727__auto___11949 + (1));
i__5727__auto___11949 = G__11950;
continue;
} else {
}
break;
}

var G__11883 = args11881.length;
switch (G__11883) {
case 1:
return sablono.core.password_field11880.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field11880.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11881.length)].join('')));

}
});

sablono.core.password_field11880.cljs$core$IFn$_invoke$arity$1 = (function (name__11765__auto__){
return sablono.core.password_field11880.call(null,name__11765__auto__,null);
});

sablono.core.password_field11880.cljs$core$IFn$_invoke$arity$2 = (function (name__11765__auto__,value__11766__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__11765__auto__,value__11766__auto__);
});

sablono.core.password_field11880.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field11880);

/**
 * Creates a range input field.
 */
sablono.core.range_field11884 = (function sablono$core$range_field11884(var_args){
var args11885 = [];
var len__5726__auto___11952 = arguments.length;
var i__5727__auto___11953 = (0);
while(true){
if((i__5727__auto___11953 < len__5726__auto___11952)){
args11885.push((arguments[i__5727__auto___11953]));

var G__11954 = (i__5727__auto___11953 + (1));
i__5727__auto___11953 = G__11954;
continue;
} else {
}
break;
}

var G__11887 = args11885.length;
switch (G__11887) {
case 1:
return sablono.core.range_field11884.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field11884.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11885.length)].join('')));

}
});

sablono.core.range_field11884.cljs$core$IFn$_invoke$arity$1 = (function (name__11765__auto__){
return sablono.core.range_field11884.call(null,name__11765__auto__,null);
});

sablono.core.range_field11884.cljs$core$IFn$_invoke$arity$2 = (function (name__11765__auto__,value__11766__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__11765__auto__,value__11766__auto__);
});

sablono.core.range_field11884.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field11884);

/**
 * Creates a search input field.
 */
sablono.core.search_field11888 = (function sablono$core$search_field11888(var_args){
var args11889 = [];
var len__5726__auto___11956 = arguments.length;
var i__5727__auto___11957 = (0);
while(true){
if((i__5727__auto___11957 < len__5726__auto___11956)){
args11889.push((arguments[i__5727__auto___11957]));

var G__11958 = (i__5727__auto___11957 + (1));
i__5727__auto___11957 = G__11958;
continue;
} else {
}
break;
}

var G__11891 = args11889.length;
switch (G__11891) {
case 1:
return sablono.core.search_field11888.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field11888.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11889.length)].join('')));

}
});

sablono.core.search_field11888.cljs$core$IFn$_invoke$arity$1 = (function (name__11765__auto__){
return sablono.core.search_field11888.call(null,name__11765__auto__,null);
});

sablono.core.search_field11888.cljs$core$IFn$_invoke$arity$2 = (function (name__11765__auto__,value__11766__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__11765__auto__,value__11766__auto__);
});

sablono.core.search_field11888.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field11888);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field11892 = (function sablono$core$tel_field11892(var_args){
var args11893 = [];
var len__5726__auto___11960 = arguments.length;
var i__5727__auto___11961 = (0);
while(true){
if((i__5727__auto___11961 < len__5726__auto___11960)){
args11893.push((arguments[i__5727__auto___11961]));

var G__11962 = (i__5727__auto___11961 + (1));
i__5727__auto___11961 = G__11962;
continue;
} else {
}
break;
}

var G__11895 = args11893.length;
switch (G__11895) {
case 1:
return sablono.core.tel_field11892.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field11892.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11893.length)].join('')));

}
});

sablono.core.tel_field11892.cljs$core$IFn$_invoke$arity$1 = (function (name__11765__auto__){
return sablono.core.tel_field11892.call(null,name__11765__auto__,null);
});

sablono.core.tel_field11892.cljs$core$IFn$_invoke$arity$2 = (function (name__11765__auto__,value__11766__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__11765__auto__,value__11766__auto__);
});

sablono.core.tel_field11892.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field11892);

/**
 * Creates a text input field.
 */
sablono.core.text_field11896 = (function sablono$core$text_field11896(var_args){
var args11897 = [];
var len__5726__auto___11964 = arguments.length;
var i__5727__auto___11965 = (0);
while(true){
if((i__5727__auto___11965 < len__5726__auto___11964)){
args11897.push((arguments[i__5727__auto___11965]));

var G__11966 = (i__5727__auto___11965 + (1));
i__5727__auto___11965 = G__11966;
continue;
} else {
}
break;
}

var G__11899 = args11897.length;
switch (G__11899) {
case 1:
return sablono.core.text_field11896.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field11896.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11897.length)].join('')));

}
});

sablono.core.text_field11896.cljs$core$IFn$_invoke$arity$1 = (function (name__11765__auto__){
return sablono.core.text_field11896.call(null,name__11765__auto__,null);
});

sablono.core.text_field11896.cljs$core$IFn$_invoke$arity$2 = (function (name__11765__auto__,value__11766__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__11765__auto__,value__11766__auto__);
});

sablono.core.text_field11896.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field11896);

/**
 * Creates a time input field.
 */
sablono.core.time_field11900 = (function sablono$core$time_field11900(var_args){
var args11901 = [];
var len__5726__auto___11968 = arguments.length;
var i__5727__auto___11969 = (0);
while(true){
if((i__5727__auto___11969 < len__5726__auto___11968)){
args11901.push((arguments[i__5727__auto___11969]));

var G__11970 = (i__5727__auto___11969 + (1));
i__5727__auto___11969 = G__11970;
continue;
} else {
}
break;
}

var G__11903 = args11901.length;
switch (G__11903) {
case 1:
return sablono.core.time_field11900.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field11900.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11901.length)].join('')));

}
});

sablono.core.time_field11900.cljs$core$IFn$_invoke$arity$1 = (function (name__11765__auto__){
return sablono.core.time_field11900.call(null,name__11765__auto__,null);
});

sablono.core.time_field11900.cljs$core$IFn$_invoke$arity$2 = (function (name__11765__auto__,value__11766__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__11765__auto__,value__11766__auto__);
});

sablono.core.time_field11900.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field11900);

/**
 * Creates a url input field.
 */
sablono.core.url_field11904 = (function sablono$core$url_field11904(var_args){
var args11905 = [];
var len__5726__auto___11972 = arguments.length;
var i__5727__auto___11973 = (0);
while(true){
if((i__5727__auto___11973 < len__5726__auto___11972)){
args11905.push((arguments[i__5727__auto___11973]));

var G__11974 = (i__5727__auto___11973 + (1));
i__5727__auto___11973 = G__11974;
continue;
} else {
}
break;
}

var G__11907 = args11905.length;
switch (G__11907) {
case 1:
return sablono.core.url_field11904.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field11904.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11905.length)].join('')));

}
});

sablono.core.url_field11904.cljs$core$IFn$_invoke$arity$1 = (function (name__11765__auto__){
return sablono.core.url_field11904.call(null,name__11765__auto__,null);
});

sablono.core.url_field11904.cljs$core$IFn$_invoke$arity$2 = (function (name__11765__auto__,value__11766__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__11765__auto__,value__11766__auto__);
});

sablono.core.url_field11904.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field11904);

/**
 * Creates a week input field.
 */
sablono.core.week_field11908 = (function sablono$core$week_field11908(var_args){
var args11909 = [];
var len__5726__auto___11976 = arguments.length;
var i__5727__auto___11977 = (0);
while(true){
if((i__5727__auto___11977 < len__5726__auto___11976)){
args11909.push((arguments[i__5727__auto___11977]));

var G__11978 = (i__5727__auto___11977 + (1));
i__5727__auto___11977 = G__11978;
continue;
} else {
}
break;
}

var G__11911 = args11909.length;
switch (G__11911) {
case 1:
return sablono.core.week_field11908.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field11908.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11909.length)].join('')));

}
});

sablono.core.week_field11908.cljs$core$IFn$_invoke$arity$1 = (function (name__11765__auto__){
return sablono.core.week_field11908.call(null,name__11765__auto__,null);
});

sablono.core.week_field11908.cljs$core$IFn$_invoke$arity$2 = (function (name__11765__auto__,value__11766__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__11765__auto__,value__11766__auto__);
});

sablono.core.week_field11908.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field11908);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box11980 = (function sablono$core$check_box11980(var_args){
var args11981 = [];
var len__5726__auto___11984 = arguments.length;
var i__5727__auto___11985 = (0);
while(true){
if((i__5727__auto___11985 < len__5726__auto___11984)){
args11981.push((arguments[i__5727__auto___11985]));

var G__11986 = (i__5727__auto___11985 + (1));
i__5727__auto___11985 = G__11986;
continue;
} else {
}
break;
}

var G__11983 = args11981.length;
switch (G__11983) {
case 1:
return sablono.core.check_box11980.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box11980.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box11980.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11981.length)].join('')));

}
});

sablono.core.check_box11980.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box11980.call(null,name,null);
});

sablono.core.check_box11980.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box11980.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box11980.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box11980.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box11980);
/**
 * Creates a radio button.
 */
sablono.core.radio_button11988 = (function sablono$core$radio_button11988(var_args){
var args11989 = [];
var len__5726__auto___11992 = arguments.length;
var i__5727__auto___11993 = (0);
while(true){
if((i__5727__auto___11993 < len__5726__auto___11992)){
args11989.push((arguments[i__5727__auto___11993]));

var G__11994 = (i__5727__auto___11993 + (1));
i__5727__auto___11993 = G__11994;
continue;
} else {
}
break;
}

var G__11991 = args11989.length;
switch (G__11991) {
case 1:
return sablono.core.radio_button11988.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button11988.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button11988.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11989.length)].join('')));

}
});

sablono.core.radio_button11988.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button11988.call(null,group,null);
});

sablono.core.radio_button11988.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button11988.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button11988.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button11988.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button11988);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options11996 = (function sablono$core$select_options11996(coll){
var iter__5440__auto__ = (function sablono$core$select_options11996_$_iter__12005(s__12006){
return (new cljs.core.LazySeq(null,(function (){
var s__12006__$1 = s__12006;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12006__$1);
if(temp__4425__auto__){
var s__12006__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12006__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__12006__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__12008 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__12007 = (0);
while(true){
if((i__12007 < size__5439__auto__)){
var x = cljs.core._nth.call(null,c__5438__auto__,i__12007);
cljs.core.chunk_append.call(null,b__12008,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__12011 = x;
var text = cljs.core.nth.call(null,vec__12011,(0),null);
var val = cljs.core.nth.call(null,vec__12011,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__12011,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options11996.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__12013 = (i__12007 + (1));
i__12007 = G__12013;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12008),sablono$core$select_options11996_$_iter__12005.call(null,cljs.core.chunk_rest.call(null,s__12006__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12008),null);
}
} else {
var x = cljs.core.first.call(null,s__12006__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__12012 = x;
var text = cljs.core.nth.call(null,vec__12012,(0),null);
var val = cljs.core.nth.call(null,vec__12012,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__12012,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options11996.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options11996_$_iter__12005.call(null,cljs.core.rest.call(null,s__12006__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options11996);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down12014 = (function sablono$core$drop_down12014(var_args){
var args12015 = [];
var len__5726__auto___12018 = arguments.length;
var i__5727__auto___12019 = (0);
while(true){
if((i__5727__auto___12019 < len__5726__auto___12018)){
args12015.push((arguments[i__5727__auto___12019]));

var G__12020 = (i__5727__auto___12019 + (1));
i__5727__auto___12019 = G__12020;
continue;
} else {
}
break;
}

var G__12017 = args12015.length;
switch (G__12017) {
case 2:
return sablono.core.drop_down12014.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down12014.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12015.length)].join('')));

}
});

sablono.core.drop_down12014.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down12014.call(null,name,options,null);
});

sablono.core.drop_down12014.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down12014.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down12014);
/**
 * Creates a text area element.
 */
sablono.core.text_area12022 = (function sablono$core$text_area12022(var_args){
var args12023 = [];
var len__5726__auto___12026 = arguments.length;
var i__5727__auto___12027 = (0);
while(true){
if((i__5727__auto___12027 < len__5726__auto___12026)){
args12023.push((arguments[i__5727__auto___12027]));

var G__12028 = (i__5727__auto___12027 + (1));
i__5727__auto___12027 = G__12028;
continue;
} else {
}
break;
}

var G__12025 = args12023.length;
switch (G__12025) {
case 1:
return sablono.core.text_area12022.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area12022.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12023.length)].join('')));

}
});

sablono.core.text_area12022.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area12022.call(null,name,null);
});

sablono.core.text_area12022.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area12022.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area12022);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label12030 = (function sablono$core$label12030(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label12030);
/**
 * Creates a submit button.
 */
sablono.core.submit_button12031 = (function sablono$core$submit_button12031(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button12031);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button12032 = (function sablono$core$reset_button12032(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button12032);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to12033 = (function sablono$core$form_to12033(var_args){
var args__5733__auto__ = [];
var len__5726__auto___12038 = arguments.length;
var i__5727__auto___12039 = (0);
while(true){
if((i__5727__auto___12039 < len__5726__auto___12038)){
args__5733__auto__.push((arguments[i__5727__auto___12039]));

var G__12040 = (i__5727__auto___12039 + (1));
i__5727__auto___12039 = G__12040;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return sablono.core.form_to12033.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

sablono.core.form_to12033.cljs$core$IFn$_invoke$arity$variadic = (function (p__12036,body){
var vec__12037 = p__12036;
var method = cljs.core.nth.call(null,vec__12037,(0),null);
var action = cljs.core.nth.call(null,vec__12037,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to12033.cljs$lang$maxFixedArity = (1);

sablono.core.form_to12033.cljs$lang$applyTo = (function (seq12034){
var G__12035 = cljs.core.first.call(null,seq12034);
var seq12034__$1 = cljs.core.next.call(null,seq12034);
return sablono.core.form_to12033.cljs$core$IFn$_invoke$arity$variadic(G__12035,seq12034__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to12033);

//# sourceMappingURL=core.js.map?rel=1453863891049