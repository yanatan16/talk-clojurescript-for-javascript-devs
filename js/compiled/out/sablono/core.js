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
var G__42878__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__42877 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__42877,(0),null);
var body = cljs.core.nthnext.call(null,vec__42877,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__42878 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42879__i = 0, G__42879__a = new Array(arguments.length -  0);
while (G__42879__i < G__42879__a.length) {G__42879__a[G__42879__i] = arguments[G__42879__i + 0]; ++G__42879__i;}
  args = new cljs.core.IndexedSeq(G__42879__a,0);
} 
return G__42878__delegate.call(this,args);};
G__42878.cljs$lang$maxFixedArity = 0;
G__42878.cljs$lang$applyTo = (function (arglist__42880){
var args = cljs.core.seq(arglist__42880);
return G__42878__delegate(args);
});
G__42878.cljs$core$IFn$_invoke$arity$variadic = G__42878__delegate;
return G__42878;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__24558__auto__ = (function sablono$core$update_arglists_$_iter__42885(s__42886){
return (new cljs.core.LazySeq(null,(function (){
var s__42886__$1 = s__42886;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__42886__$1);
if(temp__4425__auto__){
var s__42886__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42886__$2)){
var c__24556__auto__ = cljs.core.chunk_first.call(null,s__42886__$2);
var size__24557__auto__ = cljs.core.count.call(null,c__24556__auto__);
var b__42888 = cljs.core.chunk_buffer.call(null,size__24557__auto__);
if((function (){var i__42887 = (0);
while(true){
if((i__42887 < size__24557__auto__)){
var args = cljs.core._nth.call(null,c__24556__auto__,i__42887);
cljs.core.chunk_append.call(null,b__42888,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__42889 = (i__42887 + (1));
i__42887 = G__42889;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42888),sablono$core$update_arglists_$_iter__42885.call(null,cljs.core.chunk_rest.call(null,s__42886__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42888),null);
}
} else {
var args = cljs.core.first.call(null,s__42886__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__42885.call(null,cljs.core.rest.call(null,s__42886__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24558__auto__.call(null,arglists);
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
var args__24851__auto__ = [];
var len__24844__auto___42895 = arguments.length;
var i__24845__auto___42896 = (0);
while(true){
if((i__24845__auto___42896 < len__24844__auto___42895)){
args__24851__auto__.push((arguments[i__24845__auto___42896]));

var G__42897 = (i__24845__auto___42896 + (1));
i__24845__auto___42896 = G__42897;
continue;
} else {
}
break;
}

var argseq__24852__auto__ = ((((0) < args__24851__auto__.length))?(new cljs.core.IndexedSeq(args__24851__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__24852__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__24558__auto__ = (function sablono$core$iter__42891(s__42892){
return (new cljs.core.LazySeq(null,(function (){
var s__42892__$1 = s__42892;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__42892__$1);
if(temp__4425__auto__){
var s__42892__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42892__$2)){
var c__24556__auto__ = cljs.core.chunk_first.call(null,s__42892__$2);
var size__24557__auto__ = cljs.core.count.call(null,c__24556__auto__);
var b__42894 = cljs.core.chunk_buffer.call(null,size__24557__auto__);
if((function (){var i__42893 = (0);
while(true){
if((i__42893 < size__24557__auto__)){
var style = cljs.core._nth.call(null,c__24556__auto__,i__42893);
cljs.core.chunk_append.call(null,b__42894,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__42898 = (i__42893 + (1));
i__42893 = G__42898;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42894),sablono$core$iter__42891.call(null,cljs.core.chunk_rest.call(null,s__42892__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42894),null);
}
} else {
var style = cljs.core.first.call(null,s__42892__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__42891.call(null,cljs.core.rest.call(null,s__42892__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24558__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq42890){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42890));
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
sablono.core.link_to42899 = (function sablono$core$link_to42899(var_args){
var args__24851__auto__ = [];
var len__24844__auto___42902 = arguments.length;
var i__24845__auto___42903 = (0);
while(true){
if((i__24845__auto___42903 < len__24844__auto___42902)){
args__24851__auto__.push((arguments[i__24845__auto___42903]));

var G__42904 = (i__24845__auto___42903 + (1));
i__24845__auto___42903 = G__42904;
continue;
} else {
}
break;
}

var argseq__24852__auto__ = ((((1) < args__24851__auto__.length))?(new cljs.core.IndexedSeq(args__24851__auto__.slice((1)),(0))):null);
return sablono.core.link_to42899.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24852__auto__);
});

sablono.core.link_to42899.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to42899.cljs$lang$maxFixedArity = (1);

sablono.core.link_to42899.cljs$lang$applyTo = (function (seq42900){
var G__42901 = cljs.core.first.call(null,seq42900);
var seq42900__$1 = cljs.core.next.call(null,seq42900);
return sablono.core.link_to42899.cljs$core$IFn$_invoke$arity$variadic(G__42901,seq42900__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to42899);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to42905 = (function sablono$core$mail_to42905(var_args){
var args__24851__auto__ = [];
var len__24844__auto___42910 = arguments.length;
var i__24845__auto___42911 = (0);
while(true){
if((i__24845__auto___42911 < len__24844__auto___42910)){
args__24851__auto__.push((arguments[i__24845__auto___42911]));

var G__42912 = (i__24845__auto___42911 + (1));
i__24845__auto___42911 = G__42912;
continue;
} else {
}
break;
}

var argseq__24852__auto__ = ((((1) < args__24851__auto__.length))?(new cljs.core.IndexedSeq(args__24851__auto__.slice((1)),(0))):null);
return sablono.core.mail_to42905.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24852__auto__);
});

sablono.core.mail_to42905.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__42908){
var vec__42909 = p__42908;
var content = cljs.core.nth.call(null,vec__42909,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__23786__auto__ = content;
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to42905.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to42905.cljs$lang$applyTo = (function (seq42906){
var G__42907 = cljs.core.first.call(null,seq42906);
var seq42906__$1 = cljs.core.next.call(null,seq42906);
return sablono.core.mail_to42905.cljs$core$IFn$_invoke$arity$variadic(G__42907,seq42906__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to42905);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list42913 = (function sablono$core$unordered_list42913(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__24558__auto__ = (function sablono$core$unordered_list42913_$_iter__42918(s__42919){
return (new cljs.core.LazySeq(null,(function (){
var s__42919__$1 = s__42919;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__42919__$1);
if(temp__4425__auto__){
var s__42919__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42919__$2)){
var c__24556__auto__ = cljs.core.chunk_first.call(null,s__42919__$2);
var size__24557__auto__ = cljs.core.count.call(null,c__24556__auto__);
var b__42921 = cljs.core.chunk_buffer.call(null,size__24557__auto__);
if((function (){var i__42920 = (0);
while(true){
if((i__42920 < size__24557__auto__)){
var x = cljs.core._nth.call(null,c__24556__auto__,i__42920);
cljs.core.chunk_append.call(null,b__42921,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__42922 = (i__42920 + (1));
i__42920 = G__42922;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42921),sablono$core$unordered_list42913_$_iter__42918.call(null,cljs.core.chunk_rest.call(null,s__42919__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42921),null);
}
} else {
var x = cljs.core.first.call(null,s__42919__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list42913_$_iter__42918.call(null,cljs.core.rest.call(null,s__42919__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24558__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list42913);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list42923 = (function sablono$core$ordered_list42923(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__24558__auto__ = (function sablono$core$ordered_list42923_$_iter__42928(s__42929){
return (new cljs.core.LazySeq(null,(function (){
var s__42929__$1 = s__42929;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__42929__$1);
if(temp__4425__auto__){
var s__42929__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42929__$2)){
var c__24556__auto__ = cljs.core.chunk_first.call(null,s__42929__$2);
var size__24557__auto__ = cljs.core.count.call(null,c__24556__auto__);
var b__42931 = cljs.core.chunk_buffer.call(null,size__24557__auto__);
if((function (){var i__42930 = (0);
while(true){
if((i__42930 < size__24557__auto__)){
var x = cljs.core._nth.call(null,c__24556__auto__,i__42930);
cljs.core.chunk_append.call(null,b__42931,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__42932 = (i__42930 + (1));
i__42930 = G__42932;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42931),sablono$core$ordered_list42923_$_iter__42928.call(null,cljs.core.chunk_rest.call(null,s__42929__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42931),null);
}
} else {
var x = cljs.core.first.call(null,s__42929__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list42923_$_iter__42928.call(null,cljs.core.rest.call(null,s__42929__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24558__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list42923);
/**
 * Create an image element.
 */
sablono.core.image42933 = (function sablono$core$image42933(var_args){
var args42934 = [];
var len__24844__auto___42937 = arguments.length;
var i__24845__auto___42938 = (0);
while(true){
if((i__24845__auto___42938 < len__24844__auto___42937)){
args42934.push((arguments[i__24845__auto___42938]));

var G__42939 = (i__24845__auto___42938 + (1));
i__24845__auto___42938 = G__42939;
continue;
} else {
}
break;
}

var G__42936 = args42934.length;
switch (G__42936) {
case 1:
return sablono.core.image42933.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image42933.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42934.length)].join('')));

}
});

sablono.core.image42933.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image42933.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image42933.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image42933);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__42941_SHARP_,p2__42942_SHARP_){
return [cljs.core.str(p1__42941_SHARP_),cljs.core.str("["),cljs.core.str(p2__42942_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__42943_SHARP_,p2__42944_SHARP_){
return [cljs.core.str(p1__42943_SHARP_),cljs.core.str("-"),cljs.core.str(p2__42944_SHARP_)].join('');
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
sablono.core.color_field42945 = (function sablono$core$color_field42945(var_args){
var args42946 = [];
var len__24844__auto___43013 = arguments.length;
var i__24845__auto___43014 = (0);
while(true){
if((i__24845__auto___43014 < len__24844__auto___43013)){
args42946.push((arguments[i__24845__auto___43014]));

var G__43015 = (i__24845__auto___43014 + (1));
i__24845__auto___43014 = G__43015;
continue;
} else {
}
break;
}

var G__42948 = args42946.length;
switch (G__42948) {
case 1:
return sablono.core.color_field42945.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field42945.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42946.length)].join('')));

}
});

sablono.core.color_field42945.cljs$core$IFn$_invoke$arity$1 = (function (name__26354__auto__){
return sablono.core.color_field42945.call(null,name__26354__auto__,null);
});

sablono.core.color_field42945.cljs$core$IFn$_invoke$arity$2 = (function (name__26354__auto__,value__26355__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__26354__auto__,value__26355__auto__);
});

sablono.core.color_field42945.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field42945);

/**
 * Creates a date input field.
 */
sablono.core.date_field42949 = (function sablono$core$date_field42949(var_args){
var args42950 = [];
var len__24844__auto___43017 = arguments.length;
var i__24845__auto___43018 = (0);
while(true){
if((i__24845__auto___43018 < len__24844__auto___43017)){
args42950.push((arguments[i__24845__auto___43018]));

var G__43019 = (i__24845__auto___43018 + (1));
i__24845__auto___43018 = G__43019;
continue;
} else {
}
break;
}

var G__42952 = args42950.length;
switch (G__42952) {
case 1:
return sablono.core.date_field42949.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field42949.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42950.length)].join('')));

}
});

sablono.core.date_field42949.cljs$core$IFn$_invoke$arity$1 = (function (name__26354__auto__){
return sablono.core.date_field42949.call(null,name__26354__auto__,null);
});

sablono.core.date_field42949.cljs$core$IFn$_invoke$arity$2 = (function (name__26354__auto__,value__26355__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__26354__auto__,value__26355__auto__);
});

sablono.core.date_field42949.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field42949);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field42953 = (function sablono$core$datetime_field42953(var_args){
var args42954 = [];
var len__24844__auto___43021 = arguments.length;
var i__24845__auto___43022 = (0);
while(true){
if((i__24845__auto___43022 < len__24844__auto___43021)){
args42954.push((arguments[i__24845__auto___43022]));

var G__43023 = (i__24845__auto___43022 + (1));
i__24845__auto___43022 = G__43023;
continue;
} else {
}
break;
}

var G__42956 = args42954.length;
switch (G__42956) {
case 1:
return sablono.core.datetime_field42953.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field42953.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42954.length)].join('')));

}
});

sablono.core.datetime_field42953.cljs$core$IFn$_invoke$arity$1 = (function (name__26354__auto__){
return sablono.core.datetime_field42953.call(null,name__26354__auto__,null);
});

sablono.core.datetime_field42953.cljs$core$IFn$_invoke$arity$2 = (function (name__26354__auto__,value__26355__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__26354__auto__,value__26355__auto__);
});

sablono.core.datetime_field42953.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field42953);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field42957 = (function sablono$core$datetime_local_field42957(var_args){
var args42958 = [];
var len__24844__auto___43025 = arguments.length;
var i__24845__auto___43026 = (0);
while(true){
if((i__24845__auto___43026 < len__24844__auto___43025)){
args42958.push((arguments[i__24845__auto___43026]));

var G__43027 = (i__24845__auto___43026 + (1));
i__24845__auto___43026 = G__43027;
continue;
} else {
}
break;
}

var G__42960 = args42958.length;
switch (G__42960) {
case 1:
return sablono.core.datetime_local_field42957.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field42957.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42958.length)].join('')));

}
});

sablono.core.datetime_local_field42957.cljs$core$IFn$_invoke$arity$1 = (function (name__26354__auto__){
return sablono.core.datetime_local_field42957.call(null,name__26354__auto__,null);
});

sablono.core.datetime_local_field42957.cljs$core$IFn$_invoke$arity$2 = (function (name__26354__auto__,value__26355__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__26354__auto__,value__26355__auto__);
});

sablono.core.datetime_local_field42957.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field42957);

/**
 * Creates a email input field.
 */
sablono.core.email_field42961 = (function sablono$core$email_field42961(var_args){
var args42962 = [];
var len__24844__auto___43029 = arguments.length;
var i__24845__auto___43030 = (0);
while(true){
if((i__24845__auto___43030 < len__24844__auto___43029)){
args42962.push((arguments[i__24845__auto___43030]));

var G__43031 = (i__24845__auto___43030 + (1));
i__24845__auto___43030 = G__43031;
continue;
} else {
}
break;
}

var G__42964 = args42962.length;
switch (G__42964) {
case 1:
return sablono.core.email_field42961.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field42961.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42962.length)].join('')));

}
});

sablono.core.email_field42961.cljs$core$IFn$_invoke$arity$1 = (function (name__26354__auto__){
return sablono.core.email_field42961.call(null,name__26354__auto__,null);
});

sablono.core.email_field42961.cljs$core$IFn$_invoke$arity$2 = (function (name__26354__auto__,value__26355__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__26354__auto__,value__26355__auto__);
});

sablono.core.email_field42961.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field42961);

/**
 * Creates a file input field.
 */
sablono.core.file_field42965 = (function sablono$core$file_field42965(var_args){
var args42966 = [];
var len__24844__auto___43033 = arguments.length;
var i__24845__auto___43034 = (0);
while(true){
if((i__24845__auto___43034 < len__24844__auto___43033)){
args42966.push((arguments[i__24845__auto___43034]));

var G__43035 = (i__24845__auto___43034 + (1));
i__24845__auto___43034 = G__43035;
continue;
} else {
}
break;
}

var G__42968 = args42966.length;
switch (G__42968) {
case 1:
return sablono.core.file_field42965.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field42965.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42966.length)].join('')));

}
});

sablono.core.file_field42965.cljs$core$IFn$_invoke$arity$1 = (function (name__26354__auto__){
return sablono.core.file_field42965.call(null,name__26354__auto__,null);
});

sablono.core.file_field42965.cljs$core$IFn$_invoke$arity$2 = (function (name__26354__auto__,value__26355__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__26354__auto__,value__26355__auto__);
});

sablono.core.file_field42965.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field42965);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field42969 = (function sablono$core$hidden_field42969(var_args){
var args42970 = [];
var len__24844__auto___43037 = arguments.length;
var i__24845__auto___43038 = (0);
while(true){
if((i__24845__auto___43038 < len__24844__auto___43037)){
args42970.push((arguments[i__24845__auto___43038]));

var G__43039 = (i__24845__auto___43038 + (1));
i__24845__auto___43038 = G__43039;
continue;
} else {
}
break;
}

var G__42972 = args42970.length;
switch (G__42972) {
case 1:
return sablono.core.hidden_field42969.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field42969.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42970.length)].join('')));

}
});

sablono.core.hidden_field42969.cljs$core$IFn$_invoke$arity$1 = (function (name__26354__auto__){
return sablono.core.hidden_field42969.call(null,name__26354__auto__,null);
});

sablono.core.hidden_field42969.cljs$core$IFn$_invoke$arity$2 = (function (name__26354__auto__,value__26355__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__26354__auto__,value__26355__auto__);
});

sablono.core.hidden_field42969.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field42969);

/**
 * Creates a month input field.
 */
sablono.core.month_field42973 = (function sablono$core$month_field42973(var_args){
var args42974 = [];
var len__24844__auto___43041 = arguments.length;
var i__24845__auto___43042 = (0);
while(true){
if((i__24845__auto___43042 < len__24844__auto___43041)){
args42974.push((arguments[i__24845__auto___43042]));

var G__43043 = (i__24845__auto___43042 + (1));
i__24845__auto___43042 = G__43043;
continue;
} else {
}
break;
}

var G__42976 = args42974.length;
switch (G__42976) {
case 1:
return sablono.core.month_field42973.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field42973.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42974.length)].join('')));

}
});

sablono.core.month_field42973.cljs$core$IFn$_invoke$arity$1 = (function (name__26354__auto__){
return sablono.core.month_field42973.call(null,name__26354__auto__,null);
});

sablono.core.month_field42973.cljs$core$IFn$_invoke$arity$2 = (function (name__26354__auto__,value__26355__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__26354__auto__,value__26355__auto__);
});

sablono.core.month_field42973.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field42973);

/**
 * Creates a number input field.
 */
sablono.core.number_field42977 = (function sablono$core$number_field42977(var_args){
var args42978 = [];
var len__24844__auto___43045 = arguments.length;
var i__24845__auto___43046 = (0);
while(true){
if((i__24845__auto___43046 < len__24844__auto___43045)){
args42978.push((arguments[i__24845__auto___43046]));

var G__43047 = (i__24845__auto___43046 + (1));
i__24845__auto___43046 = G__43047;
continue;
} else {
}
break;
}

var G__42980 = args42978.length;
switch (G__42980) {
case 1:
return sablono.core.number_field42977.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field42977.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42978.length)].join('')));

}
});

sablono.core.number_field42977.cljs$core$IFn$_invoke$arity$1 = (function (name__26354__auto__){
return sablono.core.number_field42977.call(null,name__26354__auto__,null);
});

sablono.core.number_field42977.cljs$core$IFn$_invoke$arity$2 = (function (name__26354__auto__,value__26355__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__26354__auto__,value__26355__auto__);
});

sablono.core.number_field42977.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field42977);

/**
 * Creates a password input field.
 */
sablono.core.password_field42981 = (function sablono$core$password_field42981(var_args){
var args42982 = [];
var len__24844__auto___43049 = arguments.length;
var i__24845__auto___43050 = (0);
while(true){
if((i__24845__auto___43050 < len__24844__auto___43049)){
args42982.push((arguments[i__24845__auto___43050]));

var G__43051 = (i__24845__auto___43050 + (1));
i__24845__auto___43050 = G__43051;
continue;
} else {
}
break;
}

var G__42984 = args42982.length;
switch (G__42984) {
case 1:
return sablono.core.password_field42981.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field42981.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42982.length)].join('')));

}
});

sablono.core.password_field42981.cljs$core$IFn$_invoke$arity$1 = (function (name__26354__auto__){
return sablono.core.password_field42981.call(null,name__26354__auto__,null);
});

sablono.core.password_field42981.cljs$core$IFn$_invoke$arity$2 = (function (name__26354__auto__,value__26355__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__26354__auto__,value__26355__auto__);
});

sablono.core.password_field42981.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field42981);

/**
 * Creates a range input field.
 */
sablono.core.range_field42985 = (function sablono$core$range_field42985(var_args){
var args42986 = [];
var len__24844__auto___43053 = arguments.length;
var i__24845__auto___43054 = (0);
while(true){
if((i__24845__auto___43054 < len__24844__auto___43053)){
args42986.push((arguments[i__24845__auto___43054]));

var G__43055 = (i__24845__auto___43054 + (1));
i__24845__auto___43054 = G__43055;
continue;
} else {
}
break;
}

var G__42988 = args42986.length;
switch (G__42988) {
case 1:
return sablono.core.range_field42985.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field42985.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42986.length)].join('')));

}
});

sablono.core.range_field42985.cljs$core$IFn$_invoke$arity$1 = (function (name__26354__auto__){
return sablono.core.range_field42985.call(null,name__26354__auto__,null);
});

sablono.core.range_field42985.cljs$core$IFn$_invoke$arity$2 = (function (name__26354__auto__,value__26355__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__26354__auto__,value__26355__auto__);
});

sablono.core.range_field42985.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field42985);

/**
 * Creates a search input field.
 */
sablono.core.search_field42989 = (function sablono$core$search_field42989(var_args){
var args42990 = [];
var len__24844__auto___43057 = arguments.length;
var i__24845__auto___43058 = (0);
while(true){
if((i__24845__auto___43058 < len__24844__auto___43057)){
args42990.push((arguments[i__24845__auto___43058]));

var G__43059 = (i__24845__auto___43058 + (1));
i__24845__auto___43058 = G__43059;
continue;
} else {
}
break;
}

var G__42992 = args42990.length;
switch (G__42992) {
case 1:
return sablono.core.search_field42989.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field42989.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42990.length)].join('')));

}
});

sablono.core.search_field42989.cljs$core$IFn$_invoke$arity$1 = (function (name__26354__auto__){
return sablono.core.search_field42989.call(null,name__26354__auto__,null);
});

sablono.core.search_field42989.cljs$core$IFn$_invoke$arity$2 = (function (name__26354__auto__,value__26355__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__26354__auto__,value__26355__auto__);
});

sablono.core.search_field42989.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field42989);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field42993 = (function sablono$core$tel_field42993(var_args){
var args42994 = [];
var len__24844__auto___43061 = arguments.length;
var i__24845__auto___43062 = (0);
while(true){
if((i__24845__auto___43062 < len__24844__auto___43061)){
args42994.push((arguments[i__24845__auto___43062]));

var G__43063 = (i__24845__auto___43062 + (1));
i__24845__auto___43062 = G__43063;
continue;
} else {
}
break;
}

var G__42996 = args42994.length;
switch (G__42996) {
case 1:
return sablono.core.tel_field42993.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field42993.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42994.length)].join('')));

}
});

sablono.core.tel_field42993.cljs$core$IFn$_invoke$arity$1 = (function (name__26354__auto__){
return sablono.core.tel_field42993.call(null,name__26354__auto__,null);
});

sablono.core.tel_field42993.cljs$core$IFn$_invoke$arity$2 = (function (name__26354__auto__,value__26355__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__26354__auto__,value__26355__auto__);
});

sablono.core.tel_field42993.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field42993);

/**
 * Creates a text input field.
 */
sablono.core.text_field42997 = (function sablono$core$text_field42997(var_args){
var args42998 = [];
var len__24844__auto___43065 = arguments.length;
var i__24845__auto___43066 = (0);
while(true){
if((i__24845__auto___43066 < len__24844__auto___43065)){
args42998.push((arguments[i__24845__auto___43066]));

var G__43067 = (i__24845__auto___43066 + (1));
i__24845__auto___43066 = G__43067;
continue;
} else {
}
break;
}

var G__43000 = args42998.length;
switch (G__43000) {
case 1:
return sablono.core.text_field42997.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field42997.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42998.length)].join('')));

}
});

sablono.core.text_field42997.cljs$core$IFn$_invoke$arity$1 = (function (name__26354__auto__){
return sablono.core.text_field42997.call(null,name__26354__auto__,null);
});

sablono.core.text_field42997.cljs$core$IFn$_invoke$arity$2 = (function (name__26354__auto__,value__26355__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__26354__auto__,value__26355__auto__);
});

sablono.core.text_field42997.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field42997);

/**
 * Creates a time input field.
 */
sablono.core.time_field43001 = (function sablono$core$time_field43001(var_args){
var args43002 = [];
var len__24844__auto___43069 = arguments.length;
var i__24845__auto___43070 = (0);
while(true){
if((i__24845__auto___43070 < len__24844__auto___43069)){
args43002.push((arguments[i__24845__auto___43070]));

var G__43071 = (i__24845__auto___43070 + (1));
i__24845__auto___43070 = G__43071;
continue;
} else {
}
break;
}

var G__43004 = args43002.length;
switch (G__43004) {
case 1:
return sablono.core.time_field43001.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field43001.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43002.length)].join('')));

}
});

sablono.core.time_field43001.cljs$core$IFn$_invoke$arity$1 = (function (name__26354__auto__){
return sablono.core.time_field43001.call(null,name__26354__auto__,null);
});

sablono.core.time_field43001.cljs$core$IFn$_invoke$arity$2 = (function (name__26354__auto__,value__26355__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__26354__auto__,value__26355__auto__);
});

sablono.core.time_field43001.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field43001);

/**
 * Creates a url input field.
 */
sablono.core.url_field43005 = (function sablono$core$url_field43005(var_args){
var args43006 = [];
var len__24844__auto___43073 = arguments.length;
var i__24845__auto___43074 = (0);
while(true){
if((i__24845__auto___43074 < len__24844__auto___43073)){
args43006.push((arguments[i__24845__auto___43074]));

var G__43075 = (i__24845__auto___43074 + (1));
i__24845__auto___43074 = G__43075;
continue;
} else {
}
break;
}

var G__43008 = args43006.length;
switch (G__43008) {
case 1:
return sablono.core.url_field43005.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field43005.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43006.length)].join('')));

}
});

sablono.core.url_field43005.cljs$core$IFn$_invoke$arity$1 = (function (name__26354__auto__){
return sablono.core.url_field43005.call(null,name__26354__auto__,null);
});

sablono.core.url_field43005.cljs$core$IFn$_invoke$arity$2 = (function (name__26354__auto__,value__26355__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__26354__auto__,value__26355__auto__);
});

sablono.core.url_field43005.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field43005);

/**
 * Creates a week input field.
 */
sablono.core.week_field43009 = (function sablono$core$week_field43009(var_args){
var args43010 = [];
var len__24844__auto___43077 = arguments.length;
var i__24845__auto___43078 = (0);
while(true){
if((i__24845__auto___43078 < len__24844__auto___43077)){
args43010.push((arguments[i__24845__auto___43078]));

var G__43079 = (i__24845__auto___43078 + (1));
i__24845__auto___43078 = G__43079;
continue;
} else {
}
break;
}

var G__43012 = args43010.length;
switch (G__43012) {
case 1:
return sablono.core.week_field43009.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field43009.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43010.length)].join('')));

}
});

sablono.core.week_field43009.cljs$core$IFn$_invoke$arity$1 = (function (name__26354__auto__){
return sablono.core.week_field43009.call(null,name__26354__auto__,null);
});

sablono.core.week_field43009.cljs$core$IFn$_invoke$arity$2 = (function (name__26354__auto__,value__26355__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__26354__auto__,value__26355__auto__);
});

sablono.core.week_field43009.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field43009);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box43081 = (function sablono$core$check_box43081(var_args){
var args43082 = [];
var len__24844__auto___43085 = arguments.length;
var i__24845__auto___43086 = (0);
while(true){
if((i__24845__auto___43086 < len__24844__auto___43085)){
args43082.push((arguments[i__24845__auto___43086]));

var G__43087 = (i__24845__auto___43086 + (1));
i__24845__auto___43086 = G__43087;
continue;
} else {
}
break;
}

var G__43084 = args43082.length;
switch (G__43084) {
case 1:
return sablono.core.check_box43081.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box43081.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box43081.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43082.length)].join('')));

}
});

sablono.core.check_box43081.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box43081.call(null,name,null);
});

sablono.core.check_box43081.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box43081.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box43081.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box43081.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box43081);
/**
 * Creates a radio button.
 */
sablono.core.radio_button43089 = (function sablono$core$radio_button43089(var_args){
var args43090 = [];
var len__24844__auto___43093 = arguments.length;
var i__24845__auto___43094 = (0);
while(true){
if((i__24845__auto___43094 < len__24844__auto___43093)){
args43090.push((arguments[i__24845__auto___43094]));

var G__43095 = (i__24845__auto___43094 + (1));
i__24845__auto___43094 = G__43095;
continue;
} else {
}
break;
}

var G__43092 = args43090.length;
switch (G__43092) {
case 1:
return sablono.core.radio_button43089.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button43089.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button43089.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43090.length)].join('')));

}
});

sablono.core.radio_button43089.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button43089.call(null,group,null);
});

sablono.core.radio_button43089.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button43089.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button43089.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button43089.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button43089);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options43097 = (function sablono$core$select_options43097(coll){
var iter__24558__auto__ = (function sablono$core$select_options43097_$_iter__43106(s__43107){
return (new cljs.core.LazySeq(null,(function (){
var s__43107__$1 = s__43107;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__43107__$1);
if(temp__4425__auto__){
var s__43107__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43107__$2)){
var c__24556__auto__ = cljs.core.chunk_first.call(null,s__43107__$2);
var size__24557__auto__ = cljs.core.count.call(null,c__24556__auto__);
var b__43109 = cljs.core.chunk_buffer.call(null,size__24557__auto__);
if((function (){var i__43108 = (0);
while(true){
if((i__43108 < size__24557__auto__)){
var x = cljs.core._nth.call(null,c__24556__auto__,i__43108);
cljs.core.chunk_append.call(null,b__43109,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__43112 = x;
var text = cljs.core.nth.call(null,vec__43112,(0),null);
var val = cljs.core.nth.call(null,vec__43112,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__43112,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options43097.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__43114 = (i__43108 + (1));
i__43108 = G__43114;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43109),sablono$core$select_options43097_$_iter__43106.call(null,cljs.core.chunk_rest.call(null,s__43107__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43109),null);
}
} else {
var x = cljs.core.first.call(null,s__43107__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__43113 = x;
var text = cljs.core.nth.call(null,vec__43113,(0),null);
var val = cljs.core.nth.call(null,vec__43113,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__43113,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options43097.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options43097_$_iter__43106.call(null,cljs.core.rest.call(null,s__43107__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24558__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options43097);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down43115 = (function sablono$core$drop_down43115(var_args){
var args43116 = [];
var len__24844__auto___43119 = arguments.length;
var i__24845__auto___43120 = (0);
while(true){
if((i__24845__auto___43120 < len__24844__auto___43119)){
args43116.push((arguments[i__24845__auto___43120]));

var G__43121 = (i__24845__auto___43120 + (1));
i__24845__auto___43120 = G__43121;
continue;
} else {
}
break;
}

var G__43118 = args43116.length;
switch (G__43118) {
case 2:
return sablono.core.drop_down43115.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down43115.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43116.length)].join('')));

}
});

sablono.core.drop_down43115.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down43115.call(null,name,options,null);
});

sablono.core.drop_down43115.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down43115.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down43115);
/**
 * Creates a text area element.
 */
sablono.core.text_area43123 = (function sablono$core$text_area43123(var_args){
var args43124 = [];
var len__24844__auto___43127 = arguments.length;
var i__24845__auto___43128 = (0);
while(true){
if((i__24845__auto___43128 < len__24844__auto___43127)){
args43124.push((arguments[i__24845__auto___43128]));

var G__43129 = (i__24845__auto___43128 + (1));
i__24845__auto___43128 = G__43129;
continue;
} else {
}
break;
}

var G__43126 = args43124.length;
switch (G__43126) {
case 1:
return sablono.core.text_area43123.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area43123.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43124.length)].join('')));

}
});

sablono.core.text_area43123.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area43123.call(null,name,null);
});

sablono.core.text_area43123.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area43123.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area43123);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label43131 = (function sablono$core$label43131(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label43131);
/**
 * Creates a submit button.
 */
sablono.core.submit_button43132 = (function sablono$core$submit_button43132(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button43132);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button43133 = (function sablono$core$reset_button43133(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button43133);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to43134 = (function sablono$core$form_to43134(var_args){
var args__24851__auto__ = [];
var len__24844__auto___43139 = arguments.length;
var i__24845__auto___43140 = (0);
while(true){
if((i__24845__auto___43140 < len__24844__auto___43139)){
args__24851__auto__.push((arguments[i__24845__auto___43140]));

var G__43141 = (i__24845__auto___43140 + (1));
i__24845__auto___43140 = G__43141;
continue;
} else {
}
break;
}

var argseq__24852__auto__ = ((((1) < args__24851__auto__.length))?(new cljs.core.IndexedSeq(args__24851__auto__.slice((1)),(0))):null);
return sablono.core.form_to43134.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24852__auto__);
});

sablono.core.form_to43134.cljs$core$IFn$_invoke$arity$variadic = (function (p__43137,body){
var vec__43138 = p__43137;
var method = cljs.core.nth.call(null,vec__43138,(0),null);
var action = cljs.core.nth.call(null,vec__43138,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to43134.cljs$lang$maxFixedArity = (1);

sablono.core.form_to43134.cljs$lang$applyTo = (function (seq43135){
var G__43136 = cljs.core.first.call(null,seq43135);
var seq43135__$1 = cljs.core.next.call(null,seq43135);
return sablono.core.form_to43134.cljs$core$IFn$_invoke$arity$variadic(G__43136,seq43135__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to43134);

//# sourceMappingURL=core.js.map?rel=1453744772592