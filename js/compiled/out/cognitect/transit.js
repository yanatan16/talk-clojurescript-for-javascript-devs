// Compiled by ClojureScript 1.7.170 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__44366_44370 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__44367_44371 = null;
var count__44368_44372 = (0);
var i__44369_44373 = (0);
while(true){
if((i__44369_44373 < count__44368_44372)){
var k_44374 = cljs.core._nth.call(null,chunk__44367_44371,i__44369_44373);
var v_44375 = (b[k_44374]);
(a[k_44374] = v_44375);

var G__44376 = seq__44366_44370;
var G__44377 = chunk__44367_44371;
var G__44378 = count__44368_44372;
var G__44379 = (i__44369_44373 + (1));
seq__44366_44370 = G__44376;
chunk__44367_44371 = G__44377;
count__44368_44372 = G__44378;
i__44369_44373 = G__44379;
continue;
} else {
var temp__4425__auto___44380 = cljs.core.seq.call(null,seq__44366_44370);
if(temp__4425__auto___44380){
var seq__44366_44381__$1 = temp__4425__auto___44380;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44366_44381__$1)){
var c__24589__auto___44382 = cljs.core.chunk_first.call(null,seq__44366_44381__$1);
var G__44383 = cljs.core.chunk_rest.call(null,seq__44366_44381__$1);
var G__44384 = c__24589__auto___44382;
var G__44385 = cljs.core.count.call(null,c__24589__auto___44382);
var G__44386 = (0);
seq__44366_44370 = G__44383;
chunk__44367_44371 = G__44384;
count__44368_44372 = G__44385;
i__44369_44373 = G__44386;
continue;
} else {
var k_44387 = cljs.core.first.call(null,seq__44366_44381__$1);
var v_44388 = (b[k_44387]);
(a[k_44387] = v_44388);

var G__44389 = cljs.core.next.call(null,seq__44366_44381__$1);
var G__44390 = null;
var G__44391 = (0);
var G__44392 = (0);
seq__44366_44370 = G__44389;
chunk__44367_44371 = G__44390;
count__44368_44372 = G__44391;
i__44369_44373 = G__44392;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__24384__auto__,writer__24385__auto__,opt__24386__auto__){
return cljs.core._write.call(null,writer__24385__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__24384__auto__,writer__24385__auto__,opt__24386__auto__){
return cljs.core._write.call(null,writer__24385__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args44393 = [];
var len__24844__auto___44396 = arguments.length;
var i__24845__auto___44397 = (0);
while(true){
if((i__24845__auto___44397 < len__24844__auto___44396)){
args44393.push((arguments[i__24845__auto___44397]));

var G__44398 = (i__24845__auto___44397 + (1));
i__24845__auto___44397 = G__44398;
continue;
} else {
}
break;
}

var G__44395 = args44393.length;
switch (G__44395) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44393.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__44400 = (i + (2));
var G__44401 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__44400;
ret = G__44401;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__24384__auto__,writer__24385__auto__,opt__24386__auto__){
return cljs.core._write.call(null,writer__24385__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__24384__auto__,writer__24385__auto__,opt__24386__auto__){
return cljs.core._write.call(null,writer__24385__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__44402_44406 = cljs.core.seq.call(null,v);
var chunk__44403_44407 = null;
var count__44404_44408 = (0);
var i__44405_44409 = (0);
while(true){
if((i__44405_44409 < count__44404_44408)){
var x_44410 = cljs.core._nth.call(null,chunk__44403_44407,i__44405_44409);
ret.push(x_44410);

var G__44411 = seq__44402_44406;
var G__44412 = chunk__44403_44407;
var G__44413 = count__44404_44408;
var G__44414 = (i__44405_44409 + (1));
seq__44402_44406 = G__44411;
chunk__44403_44407 = G__44412;
count__44404_44408 = G__44413;
i__44405_44409 = G__44414;
continue;
} else {
var temp__4425__auto___44415 = cljs.core.seq.call(null,seq__44402_44406);
if(temp__4425__auto___44415){
var seq__44402_44416__$1 = temp__4425__auto___44415;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44402_44416__$1)){
var c__24589__auto___44417 = cljs.core.chunk_first.call(null,seq__44402_44416__$1);
var G__44418 = cljs.core.chunk_rest.call(null,seq__44402_44416__$1);
var G__44419 = c__24589__auto___44417;
var G__44420 = cljs.core.count.call(null,c__24589__auto___44417);
var G__44421 = (0);
seq__44402_44406 = G__44418;
chunk__44403_44407 = G__44419;
count__44404_44408 = G__44420;
i__44405_44409 = G__44421;
continue;
} else {
var x_44422 = cljs.core.first.call(null,seq__44402_44416__$1);
ret.push(x_44422);

var G__44423 = cljs.core.next.call(null,seq__44402_44416__$1);
var G__44424 = null;
var G__44425 = (0);
var G__44426 = (0);
seq__44402_44406 = G__44423;
chunk__44403_44407 = G__44424;
count__44404_44408 = G__44425;
i__44405_44409 = G__44426;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__24384__auto__,writer__24385__auto__,opt__24386__auto__){
return cljs.core._write.call(null,writer__24385__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__24384__auto__,writer__24385__auto__,opt__24386__auto__){
return cljs.core._write.call(null,writer__24385__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__44427_44431 = cljs.core.seq.call(null,v);
var chunk__44428_44432 = null;
var count__44429_44433 = (0);
var i__44430_44434 = (0);
while(true){
if((i__44430_44434 < count__44429_44433)){
var x_44435 = cljs.core._nth.call(null,chunk__44428_44432,i__44430_44434);
ret.push(x_44435);

var G__44436 = seq__44427_44431;
var G__44437 = chunk__44428_44432;
var G__44438 = count__44429_44433;
var G__44439 = (i__44430_44434 + (1));
seq__44427_44431 = G__44436;
chunk__44428_44432 = G__44437;
count__44429_44433 = G__44438;
i__44430_44434 = G__44439;
continue;
} else {
var temp__4425__auto___44440 = cljs.core.seq.call(null,seq__44427_44431);
if(temp__4425__auto___44440){
var seq__44427_44441__$1 = temp__4425__auto___44440;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44427_44441__$1)){
var c__24589__auto___44442 = cljs.core.chunk_first.call(null,seq__44427_44441__$1);
var G__44443 = cljs.core.chunk_rest.call(null,seq__44427_44441__$1);
var G__44444 = c__24589__auto___44442;
var G__44445 = cljs.core.count.call(null,c__24589__auto___44442);
var G__44446 = (0);
seq__44427_44431 = G__44443;
chunk__44428_44432 = G__44444;
count__44429_44433 = G__44445;
i__44430_44434 = G__44446;
continue;
} else {
var x_44447 = cljs.core.first.call(null,seq__44427_44441__$1);
ret.push(x_44447);

var G__44448 = cljs.core.next.call(null,seq__44427_44441__$1);
var G__44449 = null;
var G__44450 = (0);
var G__44451 = (0);
seq__44427_44431 = G__44448;
chunk__44428_44432 = G__44449;
count__44429_44433 = G__44450;
i__44430_44434 = G__44451;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__24384__auto__,writer__24385__auto__,opt__24386__auto__){
return cljs.core._write.call(null,writer__24385__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__44452_44456 = cljs.core.seq.call(null,v);
var chunk__44453_44457 = null;
var count__44454_44458 = (0);
var i__44455_44459 = (0);
while(true){
if((i__44455_44459 < count__44454_44458)){
var x_44460 = cljs.core._nth.call(null,chunk__44453_44457,i__44455_44459);
ret.push(x_44460);

var G__44461 = seq__44452_44456;
var G__44462 = chunk__44453_44457;
var G__44463 = count__44454_44458;
var G__44464 = (i__44455_44459 + (1));
seq__44452_44456 = G__44461;
chunk__44453_44457 = G__44462;
count__44454_44458 = G__44463;
i__44455_44459 = G__44464;
continue;
} else {
var temp__4425__auto___44465 = cljs.core.seq.call(null,seq__44452_44456);
if(temp__4425__auto___44465){
var seq__44452_44466__$1 = temp__4425__auto___44465;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44452_44466__$1)){
var c__24589__auto___44467 = cljs.core.chunk_first.call(null,seq__44452_44466__$1);
var G__44468 = cljs.core.chunk_rest.call(null,seq__44452_44466__$1);
var G__44469 = c__24589__auto___44467;
var G__44470 = cljs.core.count.call(null,c__24589__auto___44467);
var G__44471 = (0);
seq__44452_44456 = G__44468;
chunk__44453_44457 = G__44469;
count__44454_44458 = G__44470;
i__44455_44459 = G__44471;
continue;
} else {
var x_44472 = cljs.core.first.call(null,seq__44452_44466__$1);
ret.push(x_44472);

var G__44473 = cljs.core.next.call(null,seq__44452_44466__$1);
var G__44474 = null;
var G__44475 = (0);
var G__44476 = (0);
seq__44452_44456 = G__44473;
chunk__44453_44457 = G__44474;
count__44454_44458 = G__44475;
i__44455_44459 = G__44476;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__24384__auto__,writer__24385__auto__,opt__24386__auto__){
return cljs.core._write.call(null,writer__24385__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__24384__auto__,writer__24385__auto__,opt__24386__auto__){
return cljs.core._write.call(null,writer__24385__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args44477 = [];
var len__24844__auto___44488 = arguments.length;
var i__24845__auto___44489 = (0);
while(true){
if((i__24845__auto___44489 < len__24844__auto___44488)){
args44477.push((arguments[i__24845__auto___44489]));

var G__44490 = (i__24845__auto___44489 + (1));
i__24845__auto___44489 = G__44490;
continue;
} else {
}
break;
}

var G__44479 = args44477.length;
switch (G__44479) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44477.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__44480 = obj;
G__44480.push(kfn.call(null,k),vfn.call(null,v));

return G__44480;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x44481 = cljs.core.clone.call(null,handlers);
x44481.forEach = ((function (x44481,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__44482 = cljs.core.seq.call(null,coll);
var chunk__44483 = null;
var count__44484 = (0);
var i__44485 = (0);
while(true){
if((i__44485 < count__44484)){
var vec__44486 = cljs.core._nth.call(null,chunk__44483,i__44485);
var k = cljs.core.nth.call(null,vec__44486,(0),null);
var v = cljs.core.nth.call(null,vec__44486,(1),null);
f.call(null,v,k);

var G__44492 = seq__44482;
var G__44493 = chunk__44483;
var G__44494 = count__44484;
var G__44495 = (i__44485 + (1));
seq__44482 = G__44492;
chunk__44483 = G__44493;
count__44484 = G__44494;
i__44485 = G__44495;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__44482);
if(temp__4425__auto__){
var seq__44482__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44482__$1)){
var c__24589__auto__ = cljs.core.chunk_first.call(null,seq__44482__$1);
var G__44496 = cljs.core.chunk_rest.call(null,seq__44482__$1);
var G__44497 = c__24589__auto__;
var G__44498 = cljs.core.count.call(null,c__24589__auto__);
var G__44499 = (0);
seq__44482 = G__44496;
chunk__44483 = G__44497;
count__44484 = G__44498;
i__44485 = G__44499;
continue;
} else {
var vec__44487 = cljs.core.first.call(null,seq__44482__$1);
var k = cljs.core.nth.call(null,vec__44487,(0),null);
var v = cljs.core.nth.call(null,vec__44487,(1),null);
f.call(null,v,k);

var G__44500 = cljs.core.next.call(null,seq__44482__$1);
var G__44501 = null;
var G__44502 = (0);
var G__44503 = (0);
seq__44482 = G__44500;
chunk__44483 = G__44501;
count__44484 = G__44502;
i__44485 = G__44503;
continue;
}
} else {
return null;
}
}
break;
}
});})(x44481,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x44481;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args44504 = [];
var len__24844__auto___44510 = arguments.length;
var i__24845__auto___44511 = (0);
while(true){
if((i__24845__auto___44511 < len__24844__auto___44510)){
args44504.push((arguments[i__24845__auto___44511]));

var G__44512 = (i__24845__auto___44511 + (1));
i__24845__auto___44511 = G__44512;
continue;
} else {
}
break;
}

var G__44506 = args44504.length;
switch (G__44506) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44504.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit44507 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit44507 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta44508){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta44508 = meta44508;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit44507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44509,meta44508__$1){
var self__ = this;
var _44509__$1 = this;
return (new cognitect.transit.t_cognitect$transit44507(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta44508__$1));
});

cognitect.transit.t_cognitect$transit44507.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44509){
var self__ = this;
var _44509__$1 = this;
return self__.meta44508;
});

cognitect.transit.t_cognitect$transit44507.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit44507.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit44507.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit44507.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit44507.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta44508","meta44508",1302468268,null)], null);
});

cognitect.transit.t_cognitect$transit44507.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit44507.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit44507";

cognitect.transit.t_cognitect$transit44507.cljs$lang$ctorPrWriter = (function (this__24384__auto__,writer__24385__auto__,opt__24386__auto__){
return cljs.core._write.call(null,writer__24385__auto__,"cognitect.transit/t_cognitect$transit44507");
});

cognitect.transit.__GT_t_cognitect$transit44507 = (function cognitect$transit$__GT_t_cognitect$transit44507(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta44508){
return (new cognitect.transit.t_cognitect$transit44507(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta44508));
});

}

return (new cognitect.transit.t_cognitect$transit44507(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__23786__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1453744774089