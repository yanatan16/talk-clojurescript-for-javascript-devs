// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37323_37337 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37324_37338 = null;
var count__37325_37339 = (0);
var i__37326_37340 = (0);
while(true){
if((i__37326_37340 < count__37325_37339)){
var f_37341 = cljs.core._nth.call(null,chunk__37324_37338,i__37326_37340);
cljs.core.println.call(null,"  ",f_37341);

var G__37342 = seq__37323_37337;
var G__37343 = chunk__37324_37338;
var G__37344 = count__37325_37339;
var G__37345 = (i__37326_37340 + (1));
seq__37323_37337 = G__37342;
chunk__37324_37338 = G__37343;
count__37325_37339 = G__37344;
i__37326_37340 = G__37345;
continue;
} else {
var temp__4425__auto___37346 = cljs.core.seq.call(null,seq__37323_37337);
if(temp__4425__auto___37346){
var seq__37323_37347__$1 = temp__4425__auto___37346;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37323_37347__$1)){
var c__24589__auto___37348 = cljs.core.chunk_first.call(null,seq__37323_37347__$1);
var G__37349 = cljs.core.chunk_rest.call(null,seq__37323_37347__$1);
var G__37350 = c__24589__auto___37348;
var G__37351 = cljs.core.count.call(null,c__24589__auto___37348);
var G__37352 = (0);
seq__37323_37337 = G__37349;
chunk__37324_37338 = G__37350;
count__37325_37339 = G__37351;
i__37326_37340 = G__37352;
continue;
} else {
var f_37353 = cljs.core.first.call(null,seq__37323_37347__$1);
cljs.core.println.call(null,"  ",f_37353);

var G__37354 = cljs.core.next.call(null,seq__37323_37347__$1);
var G__37355 = null;
var G__37356 = (0);
var G__37357 = (0);
seq__37323_37337 = G__37354;
chunk__37324_37338 = G__37355;
count__37325_37339 = G__37356;
i__37326_37340 = G__37357;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37358 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__23786__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37358);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37358)))?cljs.core.second.call(null,arglists_37358):arglists_37358));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37327 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37328 = null;
var count__37329 = (0);
var i__37330 = (0);
while(true){
if((i__37330 < count__37329)){
var vec__37331 = cljs.core._nth.call(null,chunk__37328,i__37330);
var name = cljs.core.nth.call(null,vec__37331,(0),null);
var map__37332 = cljs.core.nth.call(null,vec__37331,(1),null);
var map__37332__$1 = ((((!((map__37332 == null)))?((((map__37332.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37332.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37332):map__37332);
var doc = cljs.core.get.call(null,map__37332__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__37332__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__37359 = seq__37327;
var G__37360 = chunk__37328;
var G__37361 = count__37329;
var G__37362 = (i__37330 + (1));
seq__37327 = G__37359;
chunk__37328 = G__37360;
count__37329 = G__37361;
i__37330 = G__37362;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__37327);
if(temp__4425__auto__){
var seq__37327__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37327__$1)){
var c__24589__auto__ = cljs.core.chunk_first.call(null,seq__37327__$1);
var G__37363 = cljs.core.chunk_rest.call(null,seq__37327__$1);
var G__37364 = c__24589__auto__;
var G__37365 = cljs.core.count.call(null,c__24589__auto__);
var G__37366 = (0);
seq__37327 = G__37363;
chunk__37328 = G__37364;
count__37329 = G__37365;
i__37330 = G__37366;
continue;
} else {
var vec__37334 = cljs.core.first.call(null,seq__37327__$1);
var name = cljs.core.nth.call(null,vec__37334,(0),null);
var map__37335 = cljs.core.nth.call(null,vec__37334,(1),null);
var map__37335__$1 = ((((!((map__37335 == null)))?((((map__37335.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37335.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37335):map__37335);
var doc = cljs.core.get.call(null,map__37335__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__37335__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__37367 = cljs.core.next.call(null,seq__37327__$1);
var G__37368 = null;
var G__37369 = (0);
var G__37370 = (0);
seq__37327 = G__37367;
chunk__37328 = G__37368;
count__37329 = G__37369;
i__37330 = G__37370;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1453744659508