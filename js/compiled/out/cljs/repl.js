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
var seq__46566_46580 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46567_46581 = null;
var count__46568_46582 = (0);
var i__46569_46583 = (0);
while(true){
if((i__46569_46583 < count__46568_46582)){
var f_46584 = cljs.core._nth.call(null,chunk__46567_46581,i__46569_46583);
cljs.core.println.call(null,"  ",f_46584);

var G__46585 = seq__46566_46580;
var G__46586 = chunk__46567_46581;
var G__46587 = count__46568_46582;
var G__46588 = (i__46569_46583 + (1));
seq__46566_46580 = G__46585;
chunk__46567_46581 = G__46586;
count__46568_46582 = G__46587;
i__46569_46583 = G__46588;
continue;
} else {
var temp__4425__auto___46589 = cljs.core.seq.call(null,seq__46566_46580);
if(temp__4425__auto___46589){
var seq__46566_46590__$1 = temp__4425__auto___46589;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46566_46590__$1)){
var c__24589__auto___46591 = cljs.core.chunk_first.call(null,seq__46566_46590__$1);
var G__46592 = cljs.core.chunk_rest.call(null,seq__46566_46590__$1);
var G__46593 = c__24589__auto___46591;
var G__46594 = cljs.core.count.call(null,c__24589__auto___46591);
var G__46595 = (0);
seq__46566_46580 = G__46592;
chunk__46567_46581 = G__46593;
count__46568_46582 = G__46594;
i__46569_46583 = G__46595;
continue;
} else {
var f_46596 = cljs.core.first.call(null,seq__46566_46590__$1);
cljs.core.println.call(null,"  ",f_46596);

var G__46597 = cljs.core.next.call(null,seq__46566_46590__$1);
var G__46598 = null;
var G__46599 = (0);
var G__46600 = (0);
seq__46566_46580 = G__46597;
chunk__46567_46581 = G__46598;
count__46568_46582 = G__46599;
i__46569_46583 = G__46600;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_46601 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__23786__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_46601);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_46601)))?cljs.core.second.call(null,arglists_46601):arglists_46601));
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
var seq__46570 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46571 = null;
var count__46572 = (0);
var i__46573 = (0);
while(true){
if((i__46573 < count__46572)){
var vec__46574 = cljs.core._nth.call(null,chunk__46571,i__46573);
var name = cljs.core.nth.call(null,vec__46574,(0),null);
var map__46575 = cljs.core.nth.call(null,vec__46574,(1),null);
var map__46575__$1 = ((((!((map__46575 == null)))?((((map__46575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46575):map__46575);
var doc = cljs.core.get.call(null,map__46575__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__46575__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__46602 = seq__46570;
var G__46603 = chunk__46571;
var G__46604 = count__46572;
var G__46605 = (i__46573 + (1));
seq__46570 = G__46602;
chunk__46571 = G__46603;
count__46572 = G__46604;
i__46573 = G__46605;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__46570);
if(temp__4425__auto__){
var seq__46570__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46570__$1)){
var c__24589__auto__ = cljs.core.chunk_first.call(null,seq__46570__$1);
var G__46606 = cljs.core.chunk_rest.call(null,seq__46570__$1);
var G__46607 = c__24589__auto__;
var G__46608 = cljs.core.count.call(null,c__24589__auto__);
var G__46609 = (0);
seq__46570 = G__46606;
chunk__46571 = G__46607;
count__46572 = G__46608;
i__46573 = G__46609;
continue;
} else {
var vec__46577 = cljs.core.first.call(null,seq__46570__$1);
var name = cljs.core.nth.call(null,vec__46577,(0),null);
var map__46578 = cljs.core.nth.call(null,vec__46577,(1),null);
var map__46578__$1 = ((((!((map__46578 == null)))?((((map__46578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46578):map__46578);
var doc = cljs.core.get.call(null,map__46578__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__46578__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__46610 = cljs.core.next.call(null,seq__46570__$1);
var G__46611 = null;
var G__46612 = (0);
var G__46613 = (0);
seq__46570 = G__46610;
chunk__46571 = G__46611;
count__46572 = G__46612;
i__46573 = G__46613;
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

//# sourceMappingURL=repl.js.map?rel=1453744776011