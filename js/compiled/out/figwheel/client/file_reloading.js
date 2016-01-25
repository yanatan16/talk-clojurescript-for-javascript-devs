// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__23786__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__23786__auto__){
return or__23786__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__23786__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36299_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36299_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__36304 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36305 = null;
var count__36306 = (0);
var i__36307 = (0);
while(true){
if((i__36307 < count__36306)){
var n = cljs.core._nth.call(null,chunk__36305,i__36307);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36308 = seq__36304;
var G__36309 = chunk__36305;
var G__36310 = count__36306;
var G__36311 = (i__36307 + (1));
seq__36304 = G__36308;
chunk__36305 = G__36309;
count__36306 = G__36310;
i__36307 = G__36311;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__36304);
if(temp__4425__auto__){
var seq__36304__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36304__$1)){
var c__24589__auto__ = cljs.core.chunk_first.call(null,seq__36304__$1);
var G__36312 = cljs.core.chunk_rest.call(null,seq__36304__$1);
var G__36313 = c__24589__auto__;
var G__36314 = cljs.core.count.call(null,c__24589__auto__);
var G__36315 = (0);
seq__36304 = G__36312;
chunk__36305 = G__36313;
count__36306 = G__36314;
i__36307 = G__36315;
continue;
} else {
var n = cljs.core.first.call(null,seq__36304__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36316 = cljs.core.next.call(null,seq__36304__$1);
var G__36317 = null;
var G__36318 = (0);
var G__36319 = (0);
seq__36304 = G__36316;
chunk__36305 = G__36317;
count__36306 = G__36318;
i__36307 = G__36319;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__36358_36365 = cljs.core.seq.call(null,deps);
var chunk__36359_36366 = null;
var count__36360_36367 = (0);
var i__36361_36368 = (0);
while(true){
if((i__36361_36368 < count__36360_36367)){
var dep_36369 = cljs.core._nth.call(null,chunk__36359_36366,i__36361_36368);
topo_sort_helper_STAR_.call(null,dep_36369,(depth + (1)),state);

var G__36370 = seq__36358_36365;
var G__36371 = chunk__36359_36366;
var G__36372 = count__36360_36367;
var G__36373 = (i__36361_36368 + (1));
seq__36358_36365 = G__36370;
chunk__36359_36366 = G__36371;
count__36360_36367 = G__36372;
i__36361_36368 = G__36373;
continue;
} else {
var temp__4425__auto___36374 = cljs.core.seq.call(null,seq__36358_36365);
if(temp__4425__auto___36374){
var seq__36358_36375__$1 = temp__4425__auto___36374;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36358_36375__$1)){
var c__24589__auto___36376 = cljs.core.chunk_first.call(null,seq__36358_36375__$1);
var G__36377 = cljs.core.chunk_rest.call(null,seq__36358_36375__$1);
var G__36378 = c__24589__auto___36376;
var G__36379 = cljs.core.count.call(null,c__24589__auto___36376);
var G__36380 = (0);
seq__36358_36365 = G__36377;
chunk__36359_36366 = G__36378;
count__36360_36367 = G__36379;
i__36361_36368 = G__36380;
continue;
} else {
var dep_36381 = cljs.core.first.call(null,seq__36358_36375__$1);
topo_sort_helper_STAR_.call(null,dep_36381,(depth + (1)),state);

var G__36382 = cljs.core.next.call(null,seq__36358_36375__$1);
var G__36383 = null;
var G__36384 = (0);
var G__36385 = (0);
seq__36358_36365 = G__36382;
chunk__36359_36366 = G__36383;
count__36360_36367 = G__36384;
i__36361_36368 = G__36385;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36362){
var vec__36364 = p__36362;
var x = cljs.core.nth.call(null,vec__36364,(0),null);
var xs = cljs.core.nthnext.call(null,vec__36364,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36364,x,xs,get_deps__$1){
return (function (p1__36320_SHARP_){
return clojure.set.difference.call(null,p1__36320_SHARP_,x);
});})(vec__36364,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__36398 = cljs.core.seq.call(null,provides);
var chunk__36399 = null;
var count__36400 = (0);
var i__36401 = (0);
while(true){
if((i__36401 < count__36400)){
var prov = cljs.core._nth.call(null,chunk__36399,i__36401);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36402_36410 = cljs.core.seq.call(null,requires);
var chunk__36403_36411 = null;
var count__36404_36412 = (0);
var i__36405_36413 = (0);
while(true){
if((i__36405_36413 < count__36404_36412)){
var req_36414 = cljs.core._nth.call(null,chunk__36403_36411,i__36405_36413);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36414,prov);

var G__36415 = seq__36402_36410;
var G__36416 = chunk__36403_36411;
var G__36417 = count__36404_36412;
var G__36418 = (i__36405_36413 + (1));
seq__36402_36410 = G__36415;
chunk__36403_36411 = G__36416;
count__36404_36412 = G__36417;
i__36405_36413 = G__36418;
continue;
} else {
var temp__4425__auto___36419 = cljs.core.seq.call(null,seq__36402_36410);
if(temp__4425__auto___36419){
var seq__36402_36420__$1 = temp__4425__auto___36419;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36402_36420__$1)){
var c__24589__auto___36421 = cljs.core.chunk_first.call(null,seq__36402_36420__$1);
var G__36422 = cljs.core.chunk_rest.call(null,seq__36402_36420__$1);
var G__36423 = c__24589__auto___36421;
var G__36424 = cljs.core.count.call(null,c__24589__auto___36421);
var G__36425 = (0);
seq__36402_36410 = G__36422;
chunk__36403_36411 = G__36423;
count__36404_36412 = G__36424;
i__36405_36413 = G__36425;
continue;
} else {
var req_36426 = cljs.core.first.call(null,seq__36402_36420__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36426,prov);

var G__36427 = cljs.core.next.call(null,seq__36402_36420__$1);
var G__36428 = null;
var G__36429 = (0);
var G__36430 = (0);
seq__36402_36410 = G__36427;
chunk__36403_36411 = G__36428;
count__36404_36412 = G__36429;
i__36405_36413 = G__36430;
continue;
}
} else {
}
}
break;
}

var G__36431 = seq__36398;
var G__36432 = chunk__36399;
var G__36433 = count__36400;
var G__36434 = (i__36401 + (1));
seq__36398 = G__36431;
chunk__36399 = G__36432;
count__36400 = G__36433;
i__36401 = G__36434;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__36398);
if(temp__4425__auto__){
var seq__36398__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36398__$1)){
var c__24589__auto__ = cljs.core.chunk_first.call(null,seq__36398__$1);
var G__36435 = cljs.core.chunk_rest.call(null,seq__36398__$1);
var G__36436 = c__24589__auto__;
var G__36437 = cljs.core.count.call(null,c__24589__auto__);
var G__36438 = (0);
seq__36398 = G__36435;
chunk__36399 = G__36436;
count__36400 = G__36437;
i__36401 = G__36438;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36398__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36406_36439 = cljs.core.seq.call(null,requires);
var chunk__36407_36440 = null;
var count__36408_36441 = (0);
var i__36409_36442 = (0);
while(true){
if((i__36409_36442 < count__36408_36441)){
var req_36443 = cljs.core._nth.call(null,chunk__36407_36440,i__36409_36442);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36443,prov);

var G__36444 = seq__36406_36439;
var G__36445 = chunk__36407_36440;
var G__36446 = count__36408_36441;
var G__36447 = (i__36409_36442 + (1));
seq__36406_36439 = G__36444;
chunk__36407_36440 = G__36445;
count__36408_36441 = G__36446;
i__36409_36442 = G__36447;
continue;
} else {
var temp__4425__auto___36448__$1 = cljs.core.seq.call(null,seq__36406_36439);
if(temp__4425__auto___36448__$1){
var seq__36406_36449__$1 = temp__4425__auto___36448__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36406_36449__$1)){
var c__24589__auto___36450 = cljs.core.chunk_first.call(null,seq__36406_36449__$1);
var G__36451 = cljs.core.chunk_rest.call(null,seq__36406_36449__$1);
var G__36452 = c__24589__auto___36450;
var G__36453 = cljs.core.count.call(null,c__24589__auto___36450);
var G__36454 = (0);
seq__36406_36439 = G__36451;
chunk__36407_36440 = G__36452;
count__36408_36441 = G__36453;
i__36409_36442 = G__36454;
continue;
} else {
var req_36455 = cljs.core.first.call(null,seq__36406_36449__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36455,prov);

var G__36456 = cljs.core.next.call(null,seq__36406_36449__$1);
var G__36457 = null;
var G__36458 = (0);
var G__36459 = (0);
seq__36406_36439 = G__36456;
chunk__36407_36440 = G__36457;
count__36408_36441 = G__36458;
i__36409_36442 = G__36459;
continue;
}
} else {
}
}
break;
}

var G__36460 = cljs.core.next.call(null,seq__36398__$1);
var G__36461 = null;
var G__36462 = (0);
var G__36463 = (0);
seq__36398 = G__36460;
chunk__36399 = G__36461;
count__36400 = G__36462;
i__36401 = G__36463;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__36468_36472 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36469_36473 = null;
var count__36470_36474 = (0);
var i__36471_36475 = (0);
while(true){
if((i__36471_36475 < count__36470_36474)){
var ns_36476 = cljs.core._nth.call(null,chunk__36469_36473,i__36471_36475);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36476);

var G__36477 = seq__36468_36472;
var G__36478 = chunk__36469_36473;
var G__36479 = count__36470_36474;
var G__36480 = (i__36471_36475 + (1));
seq__36468_36472 = G__36477;
chunk__36469_36473 = G__36478;
count__36470_36474 = G__36479;
i__36471_36475 = G__36480;
continue;
} else {
var temp__4425__auto___36481 = cljs.core.seq.call(null,seq__36468_36472);
if(temp__4425__auto___36481){
var seq__36468_36482__$1 = temp__4425__auto___36481;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36468_36482__$1)){
var c__24589__auto___36483 = cljs.core.chunk_first.call(null,seq__36468_36482__$1);
var G__36484 = cljs.core.chunk_rest.call(null,seq__36468_36482__$1);
var G__36485 = c__24589__auto___36483;
var G__36486 = cljs.core.count.call(null,c__24589__auto___36483);
var G__36487 = (0);
seq__36468_36472 = G__36484;
chunk__36469_36473 = G__36485;
count__36470_36474 = G__36486;
i__36471_36475 = G__36487;
continue;
} else {
var ns_36488 = cljs.core.first.call(null,seq__36468_36482__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36488);

var G__36489 = cljs.core.next.call(null,seq__36468_36482__$1);
var G__36490 = null;
var G__36491 = (0);
var G__36492 = (0);
seq__36468_36472 = G__36489;
chunk__36469_36473 = G__36490;
count__36470_36474 = G__36491;
i__36471_36475 = G__36492;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__23786__auto__ = goog.require__;
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__36493__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36493 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36494__i = 0, G__36494__a = new Array(arguments.length -  0);
while (G__36494__i < G__36494__a.length) {G__36494__a[G__36494__i] = arguments[G__36494__i + 0]; ++G__36494__i;}
  args = new cljs.core.IndexedSeq(G__36494__a,0);
} 
return G__36493__delegate.call(this,args);};
G__36493.cljs$lang$maxFixedArity = 0;
G__36493.cljs$lang$applyTo = (function (arglist__36495){
var args = cljs.core.seq(arglist__36495);
return G__36493__delegate(args);
});
G__36493.cljs$core$IFn$_invoke$arity$variadic = G__36493__delegate;
return G__36493;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36497 = cljs.core._EQ_;
var expr__36498 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36497.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36498))){
var path_parts = ((function (pred__36497,expr__36498){
return (function (p1__36496_SHARP_){
return clojure.string.split.call(null,p1__36496_SHARP_,/[\/\\]/);
});})(pred__36497,expr__36498))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__36497,expr__36498){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e36500){if((e36500 instanceof Error)){
var e = e36500;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36500;

}
}})());
});
;})(path_parts,sep,root,pred__36497,expr__36498))
} else {
if(cljs.core.truth_(pred__36497.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36498))){
return ((function (pred__36497,expr__36498){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__36497,expr__36498){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__36497,expr__36498))
);

return deferred.addErrback(((function (deferred,pred__36497,expr__36498){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__36497,expr__36498))
);
});
;})(pred__36497,expr__36498))
} else {
return ((function (pred__36497,expr__36498){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__36497,expr__36498))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36501,callback){
var map__36504 = p__36501;
var map__36504__$1 = ((((!((map__36504 == null)))?((((map__36504.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36504.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36504):map__36504);
var file_msg = map__36504__$1;
var request_url = cljs.core.get.call(null,map__36504__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__36504,map__36504__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36504,map__36504__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__25902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto__){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto__){
return (function (state_36528){
var state_val_36529 = (state_36528[(1)]);
if((state_val_36529 === (7))){
var inst_36524 = (state_36528[(2)]);
var state_36528__$1 = state_36528;
var statearr_36530_36550 = state_36528__$1;
(statearr_36530_36550[(2)] = inst_36524);

(statearr_36530_36550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36529 === (1))){
var state_36528__$1 = state_36528;
var statearr_36531_36551 = state_36528__$1;
(statearr_36531_36551[(2)] = null);

(statearr_36531_36551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36529 === (4))){
var inst_36508 = (state_36528[(7)]);
var inst_36508__$1 = (state_36528[(2)]);
var state_36528__$1 = (function (){var statearr_36532 = state_36528;
(statearr_36532[(7)] = inst_36508__$1);

return statearr_36532;
})();
if(cljs.core.truth_(inst_36508__$1)){
var statearr_36533_36552 = state_36528__$1;
(statearr_36533_36552[(1)] = (5));

} else {
var statearr_36534_36553 = state_36528__$1;
(statearr_36534_36553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36529 === (6))){
var state_36528__$1 = state_36528;
var statearr_36535_36554 = state_36528__$1;
(statearr_36535_36554[(2)] = null);

(statearr_36535_36554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36529 === (3))){
var inst_36526 = (state_36528[(2)]);
var state_36528__$1 = state_36528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36528__$1,inst_36526);
} else {
if((state_val_36529 === (2))){
var state_36528__$1 = state_36528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36528__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36529 === (11))){
var inst_36520 = (state_36528[(2)]);
var state_36528__$1 = (function (){var statearr_36536 = state_36528;
(statearr_36536[(8)] = inst_36520);

return statearr_36536;
})();
var statearr_36537_36555 = state_36528__$1;
(statearr_36537_36555[(2)] = null);

(statearr_36537_36555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36529 === (9))){
var inst_36514 = (state_36528[(9)]);
var inst_36512 = (state_36528[(10)]);
var inst_36516 = inst_36514.call(null,inst_36512);
var state_36528__$1 = state_36528;
var statearr_36538_36556 = state_36528__$1;
(statearr_36538_36556[(2)] = inst_36516);

(statearr_36538_36556[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36529 === (5))){
var inst_36508 = (state_36528[(7)]);
var inst_36510 = figwheel.client.file_reloading.blocking_load.call(null,inst_36508);
var state_36528__$1 = state_36528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36528__$1,(8),inst_36510);
} else {
if((state_val_36529 === (10))){
var inst_36512 = (state_36528[(10)]);
var inst_36518 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36512);
var state_36528__$1 = state_36528;
var statearr_36539_36557 = state_36528__$1;
(statearr_36539_36557[(2)] = inst_36518);

(statearr_36539_36557[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36529 === (8))){
var inst_36514 = (state_36528[(9)]);
var inst_36508 = (state_36528[(7)]);
var inst_36512 = (state_36528[(2)]);
var inst_36513 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36514__$1 = cljs.core.get.call(null,inst_36513,inst_36508);
var state_36528__$1 = (function (){var statearr_36540 = state_36528;
(statearr_36540[(9)] = inst_36514__$1);

(statearr_36540[(10)] = inst_36512);

return statearr_36540;
})();
if(cljs.core.truth_(inst_36514__$1)){
var statearr_36541_36558 = state_36528__$1;
(statearr_36541_36558[(1)] = (9));

} else {
var statearr_36542_36559 = state_36528__$1;
(statearr_36542_36559[(1)] = (10));

}

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
});})(c__25902__auto__))
;
return ((function (switch__25881__auto__,c__25902__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__25882__auto__ = null;
var figwheel$client$file_reloading$state_machine__25882__auto____0 = (function (){
var statearr_36546 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36546[(0)] = figwheel$client$file_reloading$state_machine__25882__auto__);

(statearr_36546[(1)] = (1));

return statearr_36546;
});
var figwheel$client$file_reloading$state_machine__25882__auto____1 = (function (state_36528){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_36528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e36547){if((e36547 instanceof Object)){
var ex__25885__auto__ = e36547;
var statearr_36548_36560 = state_36528;
(statearr_36548_36560[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36561 = state_36528;
state_36528 = G__36561;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__25882__auto__ = function(state_36528){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__25882__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__25882__auto____1.call(this,state_36528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__25882__auto____0;
figwheel$client$file_reloading$state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__25882__auto____1;
return figwheel$client$file_reloading$state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto__))
})();
var state__25904__auto__ = (function (){var statearr_36549 = f__25903__auto__.call(null);
(statearr_36549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto__);

return statearr_36549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto__))
);

return c__25902__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36562,callback){
var map__36565 = p__36562;
var map__36565__$1 = ((((!((map__36565 == null)))?((((map__36565.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36565.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36565):map__36565);
var file_msg = map__36565__$1;
var namespace = cljs.core.get.call(null,map__36565__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__36565,map__36565__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__36565,map__36565__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36567){
var map__36570 = p__36567;
var map__36570__$1 = ((((!((map__36570 == null)))?((((map__36570.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36570.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36570):map__36570);
var file_msg = map__36570__$1;
var namespace = cljs.core.get.call(null,map__36570__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__23774__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__23774__auto__){
var or__23786__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
var or__23786__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__23786__auto____$1)){
return or__23786__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__23774__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36572,callback){
var map__36575 = p__36572;
var map__36575__$1 = ((((!((map__36575 == null)))?((((map__36575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36575):map__36575);
var file_msg = map__36575__$1;
var request_url = cljs.core.get.call(null,map__36575__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36575__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__25902__auto___36663 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto___36663,out){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto___36663,out){
return (function (state_36645){
var state_val_36646 = (state_36645[(1)]);
if((state_val_36646 === (1))){
var inst_36623 = cljs.core.nth.call(null,files,(0),null);
var inst_36624 = cljs.core.nthnext.call(null,files,(1));
var inst_36625 = files;
var state_36645__$1 = (function (){var statearr_36647 = state_36645;
(statearr_36647[(7)] = inst_36624);

(statearr_36647[(8)] = inst_36625);

(statearr_36647[(9)] = inst_36623);

return statearr_36647;
})();
var statearr_36648_36664 = state_36645__$1;
(statearr_36648_36664[(2)] = null);

(statearr_36648_36664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36646 === (2))){
var inst_36628 = (state_36645[(10)]);
var inst_36625 = (state_36645[(8)]);
var inst_36628__$1 = cljs.core.nth.call(null,inst_36625,(0),null);
var inst_36629 = cljs.core.nthnext.call(null,inst_36625,(1));
var inst_36630 = (inst_36628__$1 == null);
var inst_36631 = cljs.core.not.call(null,inst_36630);
var state_36645__$1 = (function (){var statearr_36649 = state_36645;
(statearr_36649[(10)] = inst_36628__$1);

(statearr_36649[(11)] = inst_36629);

return statearr_36649;
})();
if(inst_36631){
var statearr_36650_36665 = state_36645__$1;
(statearr_36650_36665[(1)] = (4));

} else {
var statearr_36651_36666 = state_36645__$1;
(statearr_36651_36666[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36646 === (3))){
var inst_36643 = (state_36645[(2)]);
var state_36645__$1 = state_36645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36645__$1,inst_36643);
} else {
if((state_val_36646 === (4))){
var inst_36628 = (state_36645[(10)]);
var inst_36633 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36628);
var state_36645__$1 = state_36645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36645__$1,(7),inst_36633);
} else {
if((state_val_36646 === (5))){
var inst_36639 = cljs.core.async.close_BANG_.call(null,out);
var state_36645__$1 = state_36645;
var statearr_36652_36667 = state_36645__$1;
(statearr_36652_36667[(2)] = inst_36639);

(statearr_36652_36667[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36646 === (6))){
var inst_36641 = (state_36645[(2)]);
var state_36645__$1 = state_36645;
var statearr_36653_36668 = state_36645__$1;
(statearr_36653_36668[(2)] = inst_36641);

(statearr_36653_36668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36646 === (7))){
var inst_36629 = (state_36645[(11)]);
var inst_36635 = (state_36645[(2)]);
var inst_36636 = cljs.core.async.put_BANG_.call(null,out,inst_36635);
var inst_36625 = inst_36629;
var state_36645__$1 = (function (){var statearr_36654 = state_36645;
(statearr_36654[(12)] = inst_36636);

(statearr_36654[(8)] = inst_36625);

return statearr_36654;
})();
var statearr_36655_36669 = state_36645__$1;
(statearr_36655_36669[(2)] = null);

(statearr_36655_36669[(1)] = (2));


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
});})(c__25902__auto___36663,out))
;
return ((function (switch__25881__auto__,c__25902__auto___36663,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25882__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25882__auto____0 = (function (){
var statearr_36659 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36659[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25882__auto__);

(statearr_36659[(1)] = (1));

return statearr_36659;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25882__auto____1 = (function (state_36645){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_36645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e36660){if((e36660 instanceof Object)){
var ex__25885__auto__ = e36660;
var statearr_36661_36670 = state_36645;
(statearr_36661_36670[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36671 = state_36645;
state_36645 = G__36671;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25882__auto__ = function(state_36645){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25882__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25882__auto____1.call(this,state_36645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25882__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25882__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto___36663,out))
})();
var state__25904__auto__ = (function (){var statearr_36662 = f__25903__auto__.call(null);
(statearr_36662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto___36663);

return statearr_36662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto___36663,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36672,opts){
var map__36676 = p__36672;
var map__36676__$1 = ((((!((map__36676 == null)))?((((map__36676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36676):map__36676);
var eval_body__$1 = cljs.core.get.call(null,map__36676__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36676__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__23774__auto__ = eval_body__$1;
if(cljs.core.truth_(and__23774__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__23774__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e36678){var e = e36678;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__36679_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36679_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__36684){
var vec__36685 = p__36684;
var k = cljs.core.nth.call(null,vec__36685,(0),null);
var v = cljs.core.nth.call(null,vec__36685,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36686){
var vec__36687 = p__36686;
var k = cljs.core.nth.call(null,vec__36687,(0),null);
var v = cljs.core.nth.call(null,vec__36687,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36691,p__36692){
var map__36939 = p__36691;
var map__36939__$1 = ((((!((map__36939 == null)))?((((map__36939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36939):map__36939);
var opts = map__36939__$1;
var before_jsload = cljs.core.get.call(null,map__36939__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36939__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36939__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36940 = p__36692;
var map__36940__$1 = ((((!((map__36940 == null)))?((((map__36940.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36940.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36940):map__36940);
var msg = map__36940__$1;
var files = cljs.core.get.call(null,map__36940__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36940__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36940__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__25902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto__,map__36939,map__36939__$1,opts,before_jsload,on_jsload,reload_dependents,map__36940,map__36940__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto__,map__36939,map__36939__$1,opts,before_jsload,on_jsload,reload_dependents,map__36940,map__36940__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37093){
var state_val_37094 = (state_37093[(1)]);
if((state_val_37094 === (7))){
var inst_36954 = (state_37093[(7)]);
var inst_36957 = (state_37093[(8)]);
var inst_36956 = (state_37093[(9)]);
var inst_36955 = (state_37093[(10)]);
var inst_36962 = cljs.core._nth.call(null,inst_36955,inst_36957);
var inst_36963 = figwheel.client.file_reloading.eval_body.call(null,inst_36962,opts);
var inst_36964 = (inst_36957 + (1));
var tmp37095 = inst_36954;
var tmp37096 = inst_36956;
var tmp37097 = inst_36955;
var inst_36954__$1 = tmp37095;
var inst_36955__$1 = tmp37097;
var inst_36956__$1 = tmp37096;
var inst_36957__$1 = inst_36964;
var state_37093__$1 = (function (){var statearr_37098 = state_37093;
(statearr_37098[(7)] = inst_36954__$1);

(statearr_37098[(8)] = inst_36957__$1);

(statearr_37098[(9)] = inst_36956__$1);

(statearr_37098[(11)] = inst_36963);

(statearr_37098[(10)] = inst_36955__$1);

return statearr_37098;
})();
var statearr_37099_37185 = state_37093__$1;
(statearr_37099_37185[(2)] = null);

(statearr_37099_37185[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (20))){
var inst_36997 = (state_37093[(12)]);
var inst_37005 = figwheel.client.file_reloading.sort_files.call(null,inst_36997);
var state_37093__$1 = state_37093;
var statearr_37100_37186 = state_37093__$1;
(statearr_37100_37186[(2)] = inst_37005);

(statearr_37100_37186[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (27))){
var state_37093__$1 = state_37093;
var statearr_37101_37187 = state_37093__$1;
(statearr_37101_37187[(2)] = null);

(statearr_37101_37187[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (1))){
var inst_36946 = (state_37093[(13)]);
var inst_36943 = before_jsload.call(null,files);
var inst_36944 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36945 = (function (){return ((function (inst_36946,inst_36943,inst_36944,state_val_37094,c__25902__auto__,map__36939,map__36939__$1,opts,before_jsload,on_jsload,reload_dependents,map__36940,map__36940__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36688_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36688_SHARP_);
});
;})(inst_36946,inst_36943,inst_36944,state_val_37094,c__25902__auto__,map__36939,map__36939__$1,opts,before_jsload,on_jsload,reload_dependents,map__36940,map__36940__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36946__$1 = cljs.core.filter.call(null,inst_36945,files);
var inst_36947 = cljs.core.not_empty.call(null,inst_36946__$1);
var state_37093__$1 = (function (){var statearr_37102 = state_37093;
(statearr_37102[(13)] = inst_36946__$1);

(statearr_37102[(14)] = inst_36943);

(statearr_37102[(15)] = inst_36944);

return statearr_37102;
})();
if(cljs.core.truth_(inst_36947)){
var statearr_37103_37188 = state_37093__$1;
(statearr_37103_37188[(1)] = (2));

} else {
var statearr_37104_37189 = state_37093__$1;
(statearr_37104_37189[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (24))){
var state_37093__$1 = state_37093;
var statearr_37105_37190 = state_37093__$1;
(statearr_37105_37190[(2)] = null);

(statearr_37105_37190[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (39))){
var inst_37047 = (state_37093[(16)]);
var state_37093__$1 = state_37093;
var statearr_37106_37191 = state_37093__$1;
(statearr_37106_37191[(2)] = inst_37047);

(statearr_37106_37191[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (46))){
var inst_37088 = (state_37093[(2)]);
var state_37093__$1 = state_37093;
var statearr_37107_37192 = state_37093__$1;
(statearr_37107_37192[(2)] = inst_37088);

(statearr_37107_37192[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (4))){
var inst_36991 = (state_37093[(2)]);
var inst_36992 = cljs.core.List.EMPTY;
var inst_36993 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36992);
var inst_36994 = (function (){return ((function (inst_36991,inst_36992,inst_36993,state_val_37094,c__25902__auto__,map__36939,map__36939__$1,opts,before_jsload,on_jsload,reload_dependents,map__36940,map__36940__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36689_SHARP_){
var and__23774__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36689_SHARP_);
if(cljs.core.truth_(and__23774__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36689_SHARP_));
} else {
return and__23774__auto__;
}
});
;})(inst_36991,inst_36992,inst_36993,state_val_37094,c__25902__auto__,map__36939,map__36939__$1,opts,before_jsload,on_jsload,reload_dependents,map__36940,map__36940__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36995 = cljs.core.filter.call(null,inst_36994,files);
var inst_36996 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36997 = cljs.core.concat.call(null,inst_36995,inst_36996);
var state_37093__$1 = (function (){var statearr_37108 = state_37093;
(statearr_37108[(12)] = inst_36997);

(statearr_37108[(17)] = inst_36993);

(statearr_37108[(18)] = inst_36991);

return statearr_37108;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37109_37193 = state_37093__$1;
(statearr_37109_37193[(1)] = (16));

} else {
var statearr_37110_37194 = state_37093__$1;
(statearr_37110_37194[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (15))){
var inst_36981 = (state_37093[(2)]);
var state_37093__$1 = state_37093;
var statearr_37111_37195 = state_37093__$1;
(statearr_37111_37195[(2)] = inst_36981);

(statearr_37111_37195[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (21))){
var inst_37007 = (state_37093[(19)]);
var inst_37007__$1 = (state_37093[(2)]);
var inst_37008 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37007__$1);
var state_37093__$1 = (function (){var statearr_37112 = state_37093;
(statearr_37112[(19)] = inst_37007__$1);

return statearr_37112;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37093__$1,(22),inst_37008);
} else {
if((state_val_37094 === (31))){
var inst_37091 = (state_37093[(2)]);
var state_37093__$1 = state_37093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37093__$1,inst_37091);
} else {
if((state_val_37094 === (32))){
var inst_37047 = (state_37093[(16)]);
var inst_37052 = inst_37047.cljs$lang$protocol_mask$partition0$;
var inst_37053 = (inst_37052 & (64));
var inst_37054 = inst_37047.cljs$core$ISeq$;
var inst_37055 = (inst_37053) || (inst_37054);
var state_37093__$1 = state_37093;
if(cljs.core.truth_(inst_37055)){
var statearr_37113_37196 = state_37093__$1;
(statearr_37113_37196[(1)] = (35));

} else {
var statearr_37114_37197 = state_37093__$1;
(statearr_37114_37197[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (40))){
var inst_37068 = (state_37093[(20)]);
var inst_37067 = (state_37093[(2)]);
var inst_37068__$1 = cljs.core.get.call(null,inst_37067,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37069 = cljs.core.get.call(null,inst_37067,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37070 = cljs.core.not_empty.call(null,inst_37068__$1);
var state_37093__$1 = (function (){var statearr_37115 = state_37093;
(statearr_37115[(21)] = inst_37069);

(statearr_37115[(20)] = inst_37068__$1);

return statearr_37115;
})();
if(cljs.core.truth_(inst_37070)){
var statearr_37116_37198 = state_37093__$1;
(statearr_37116_37198[(1)] = (41));

} else {
var statearr_37117_37199 = state_37093__$1;
(statearr_37117_37199[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (33))){
var state_37093__$1 = state_37093;
var statearr_37118_37200 = state_37093__$1;
(statearr_37118_37200[(2)] = false);

(statearr_37118_37200[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (13))){
var inst_36967 = (state_37093[(22)]);
var inst_36971 = cljs.core.chunk_first.call(null,inst_36967);
var inst_36972 = cljs.core.chunk_rest.call(null,inst_36967);
var inst_36973 = cljs.core.count.call(null,inst_36971);
var inst_36954 = inst_36972;
var inst_36955 = inst_36971;
var inst_36956 = inst_36973;
var inst_36957 = (0);
var state_37093__$1 = (function (){var statearr_37119 = state_37093;
(statearr_37119[(7)] = inst_36954);

(statearr_37119[(8)] = inst_36957);

(statearr_37119[(9)] = inst_36956);

(statearr_37119[(10)] = inst_36955);

return statearr_37119;
})();
var statearr_37120_37201 = state_37093__$1;
(statearr_37120_37201[(2)] = null);

(statearr_37120_37201[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (22))){
var inst_37011 = (state_37093[(23)]);
var inst_37010 = (state_37093[(24)]);
var inst_37015 = (state_37093[(25)]);
var inst_37007 = (state_37093[(19)]);
var inst_37010__$1 = (state_37093[(2)]);
var inst_37011__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37010__$1);
var inst_37012 = (function (){var all_files = inst_37007;
var res_SINGLEQUOTE_ = inst_37010__$1;
var res = inst_37011__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37011,inst_37010,inst_37015,inst_37007,inst_37010__$1,inst_37011__$1,state_val_37094,c__25902__auto__,map__36939,map__36939__$1,opts,before_jsload,on_jsload,reload_dependents,map__36940,map__36940__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36690_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36690_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37011,inst_37010,inst_37015,inst_37007,inst_37010__$1,inst_37011__$1,state_val_37094,c__25902__auto__,map__36939,map__36939__$1,opts,before_jsload,on_jsload,reload_dependents,map__36940,map__36940__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37013 = cljs.core.filter.call(null,inst_37012,inst_37010__$1);
var inst_37014 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37015__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37014);
var inst_37016 = cljs.core.not_empty.call(null,inst_37015__$1);
var state_37093__$1 = (function (){var statearr_37121 = state_37093;
(statearr_37121[(23)] = inst_37011__$1);

(statearr_37121[(24)] = inst_37010__$1);

(statearr_37121[(26)] = inst_37013);

(statearr_37121[(25)] = inst_37015__$1);

return statearr_37121;
})();
if(cljs.core.truth_(inst_37016)){
var statearr_37122_37202 = state_37093__$1;
(statearr_37122_37202[(1)] = (23));

} else {
var statearr_37123_37203 = state_37093__$1;
(statearr_37123_37203[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (36))){
var state_37093__$1 = state_37093;
var statearr_37124_37204 = state_37093__$1;
(statearr_37124_37204[(2)] = false);

(statearr_37124_37204[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (41))){
var inst_37068 = (state_37093[(20)]);
var inst_37072 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37073 = cljs.core.map.call(null,inst_37072,inst_37068);
var inst_37074 = cljs.core.pr_str.call(null,inst_37073);
var inst_37075 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_37074)].join('');
var inst_37076 = figwheel.client.utils.log.call(null,inst_37075);
var state_37093__$1 = state_37093;
var statearr_37125_37205 = state_37093__$1;
(statearr_37125_37205[(2)] = inst_37076);

(statearr_37125_37205[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (43))){
var inst_37069 = (state_37093[(21)]);
var inst_37079 = (state_37093[(2)]);
var inst_37080 = cljs.core.not_empty.call(null,inst_37069);
var state_37093__$1 = (function (){var statearr_37126 = state_37093;
(statearr_37126[(27)] = inst_37079);

return statearr_37126;
})();
if(cljs.core.truth_(inst_37080)){
var statearr_37127_37206 = state_37093__$1;
(statearr_37127_37206[(1)] = (44));

} else {
var statearr_37128_37207 = state_37093__$1;
(statearr_37128_37207[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (29))){
var inst_37011 = (state_37093[(23)]);
var inst_37010 = (state_37093[(24)]);
var inst_37013 = (state_37093[(26)]);
var inst_37047 = (state_37093[(16)]);
var inst_37015 = (state_37093[(25)]);
var inst_37007 = (state_37093[(19)]);
var inst_37043 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37046 = (function (){var all_files = inst_37007;
var res_SINGLEQUOTE_ = inst_37010;
var res = inst_37011;
var files_not_loaded = inst_37013;
var dependencies_that_loaded = inst_37015;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37011,inst_37010,inst_37013,inst_37047,inst_37015,inst_37007,inst_37043,state_val_37094,c__25902__auto__,map__36939,map__36939__$1,opts,before_jsload,on_jsload,reload_dependents,map__36940,map__36940__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37045){
var map__37129 = p__37045;
var map__37129__$1 = ((((!((map__37129 == null)))?((((map__37129.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37129.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37129):map__37129);
var namespace = cljs.core.get.call(null,map__37129__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37011,inst_37010,inst_37013,inst_37047,inst_37015,inst_37007,inst_37043,state_val_37094,c__25902__auto__,map__36939,map__36939__$1,opts,before_jsload,on_jsload,reload_dependents,map__36940,map__36940__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37047__$1 = cljs.core.group_by.call(null,inst_37046,inst_37013);
var inst_37049 = (inst_37047__$1 == null);
var inst_37050 = cljs.core.not.call(null,inst_37049);
var state_37093__$1 = (function (){var statearr_37131 = state_37093;
(statearr_37131[(28)] = inst_37043);

(statearr_37131[(16)] = inst_37047__$1);

return statearr_37131;
})();
if(inst_37050){
var statearr_37132_37208 = state_37093__$1;
(statearr_37132_37208[(1)] = (32));

} else {
var statearr_37133_37209 = state_37093__$1;
(statearr_37133_37209[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (44))){
var inst_37069 = (state_37093[(21)]);
var inst_37082 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37069);
var inst_37083 = cljs.core.pr_str.call(null,inst_37082);
var inst_37084 = [cljs.core.str("not required: "),cljs.core.str(inst_37083)].join('');
var inst_37085 = figwheel.client.utils.log.call(null,inst_37084);
var state_37093__$1 = state_37093;
var statearr_37134_37210 = state_37093__$1;
(statearr_37134_37210[(2)] = inst_37085);

(statearr_37134_37210[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (6))){
var inst_36988 = (state_37093[(2)]);
var state_37093__$1 = state_37093;
var statearr_37135_37211 = state_37093__$1;
(statearr_37135_37211[(2)] = inst_36988);

(statearr_37135_37211[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (28))){
var inst_37013 = (state_37093[(26)]);
var inst_37040 = (state_37093[(2)]);
var inst_37041 = cljs.core.not_empty.call(null,inst_37013);
var state_37093__$1 = (function (){var statearr_37136 = state_37093;
(statearr_37136[(29)] = inst_37040);

return statearr_37136;
})();
if(cljs.core.truth_(inst_37041)){
var statearr_37137_37212 = state_37093__$1;
(statearr_37137_37212[(1)] = (29));

} else {
var statearr_37138_37213 = state_37093__$1;
(statearr_37138_37213[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (25))){
var inst_37011 = (state_37093[(23)]);
var inst_37027 = (state_37093[(2)]);
var inst_37028 = cljs.core.not_empty.call(null,inst_37011);
var state_37093__$1 = (function (){var statearr_37139 = state_37093;
(statearr_37139[(30)] = inst_37027);

return statearr_37139;
})();
if(cljs.core.truth_(inst_37028)){
var statearr_37140_37214 = state_37093__$1;
(statearr_37140_37214[(1)] = (26));

} else {
var statearr_37141_37215 = state_37093__$1;
(statearr_37141_37215[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (34))){
var inst_37062 = (state_37093[(2)]);
var state_37093__$1 = state_37093;
if(cljs.core.truth_(inst_37062)){
var statearr_37142_37216 = state_37093__$1;
(statearr_37142_37216[(1)] = (38));

} else {
var statearr_37143_37217 = state_37093__$1;
(statearr_37143_37217[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (17))){
var state_37093__$1 = state_37093;
var statearr_37144_37218 = state_37093__$1;
(statearr_37144_37218[(2)] = recompile_dependents);

(statearr_37144_37218[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (3))){
var state_37093__$1 = state_37093;
var statearr_37145_37219 = state_37093__$1;
(statearr_37145_37219[(2)] = null);

(statearr_37145_37219[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (12))){
var inst_36984 = (state_37093[(2)]);
var state_37093__$1 = state_37093;
var statearr_37146_37220 = state_37093__$1;
(statearr_37146_37220[(2)] = inst_36984);

(statearr_37146_37220[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (2))){
var inst_36946 = (state_37093[(13)]);
var inst_36953 = cljs.core.seq.call(null,inst_36946);
var inst_36954 = inst_36953;
var inst_36955 = null;
var inst_36956 = (0);
var inst_36957 = (0);
var state_37093__$1 = (function (){var statearr_37147 = state_37093;
(statearr_37147[(7)] = inst_36954);

(statearr_37147[(8)] = inst_36957);

(statearr_37147[(9)] = inst_36956);

(statearr_37147[(10)] = inst_36955);

return statearr_37147;
})();
var statearr_37148_37221 = state_37093__$1;
(statearr_37148_37221[(2)] = null);

(statearr_37148_37221[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (23))){
var inst_37011 = (state_37093[(23)]);
var inst_37010 = (state_37093[(24)]);
var inst_37013 = (state_37093[(26)]);
var inst_37015 = (state_37093[(25)]);
var inst_37007 = (state_37093[(19)]);
var inst_37018 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37020 = (function (){var all_files = inst_37007;
var res_SINGLEQUOTE_ = inst_37010;
var res = inst_37011;
var files_not_loaded = inst_37013;
var dependencies_that_loaded = inst_37015;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37011,inst_37010,inst_37013,inst_37015,inst_37007,inst_37018,state_val_37094,c__25902__auto__,map__36939,map__36939__$1,opts,before_jsload,on_jsload,reload_dependents,map__36940,map__36940__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37019){
var map__37149 = p__37019;
var map__37149__$1 = ((((!((map__37149 == null)))?((((map__37149.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37149.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37149):map__37149);
var request_url = cljs.core.get.call(null,map__37149__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37011,inst_37010,inst_37013,inst_37015,inst_37007,inst_37018,state_val_37094,c__25902__auto__,map__36939,map__36939__$1,opts,before_jsload,on_jsload,reload_dependents,map__36940,map__36940__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37021 = cljs.core.reverse.call(null,inst_37015);
var inst_37022 = cljs.core.map.call(null,inst_37020,inst_37021);
var inst_37023 = cljs.core.pr_str.call(null,inst_37022);
var inst_37024 = figwheel.client.utils.log.call(null,inst_37023);
var state_37093__$1 = (function (){var statearr_37151 = state_37093;
(statearr_37151[(31)] = inst_37018);

return statearr_37151;
})();
var statearr_37152_37222 = state_37093__$1;
(statearr_37152_37222[(2)] = inst_37024);

(statearr_37152_37222[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (35))){
var state_37093__$1 = state_37093;
var statearr_37153_37223 = state_37093__$1;
(statearr_37153_37223[(2)] = true);

(statearr_37153_37223[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (19))){
var inst_36997 = (state_37093[(12)]);
var inst_37003 = figwheel.client.file_reloading.expand_files.call(null,inst_36997);
var state_37093__$1 = state_37093;
var statearr_37154_37224 = state_37093__$1;
(statearr_37154_37224[(2)] = inst_37003);

(statearr_37154_37224[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (11))){
var state_37093__$1 = state_37093;
var statearr_37155_37225 = state_37093__$1;
(statearr_37155_37225[(2)] = null);

(statearr_37155_37225[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (9))){
var inst_36986 = (state_37093[(2)]);
var state_37093__$1 = state_37093;
var statearr_37156_37226 = state_37093__$1;
(statearr_37156_37226[(2)] = inst_36986);

(statearr_37156_37226[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (5))){
var inst_36957 = (state_37093[(8)]);
var inst_36956 = (state_37093[(9)]);
var inst_36959 = (inst_36957 < inst_36956);
var inst_36960 = inst_36959;
var state_37093__$1 = state_37093;
if(cljs.core.truth_(inst_36960)){
var statearr_37157_37227 = state_37093__$1;
(statearr_37157_37227[(1)] = (7));

} else {
var statearr_37158_37228 = state_37093__$1;
(statearr_37158_37228[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (14))){
var inst_36967 = (state_37093[(22)]);
var inst_36976 = cljs.core.first.call(null,inst_36967);
var inst_36977 = figwheel.client.file_reloading.eval_body.call(null,inst_36976,opts);
var inst_36978 = cljs.core.next.call(null,inst_36967);
var inst_36954 = inst_36978;
var inst_36955 = null;
var inst_36956 = (0);
var inst_36957 = (0);
var state_37093__$1 = (function (){var statearr_37159 = state_37093;
(statearr_37159[(7)] = inst_36954);

(statearr_37159[(32)] = inst_36977);

(statearr_37159[(8)] = inst_36957);

(statearr_37159[(9)] = inst_36956);

(statearr_37159[(10)] = inst_36955);

return statearr_37159;
})();
var statearr_37160_37229 = state_37093__$1;
(statearr_37160_37229[(2)] = null);

(statearr_37160_37229[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (45))){
var state_37093__$1 = state_37093;
var statearr_37161_37230 = state_37093__$1;
(statearr_37161_37230[(2)] = null);

(statearr_37161_37230[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (26))){
var inst_37011 = (state_37093[(23)]);
var inst_37010 = (state_37093[(24)]);
var inst_37013 = (state_37093[(26)]);
var inst_37015 = (state_37093[(25)]);
var inst_37007 = (state_37093[(19)]);
var inst_37030 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37032 = (function (){var all_files = inst_37007;
var res_SINGLEQUOTE_ = inst_37010;
var res = inst_37011;
var files_not_loaded = inst_37013;
var dependencies_that_loaded = inst_37015;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37011,inst_37010,inst_37013,inst_37015,inst_37007,inst_37030,state_val_37094,c__25902__auto__,map__36939,map__36939__$1,opts,before_jsload,on_jsload,reload_dependents,map__36940,map__36940__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37031){
var map__37162 = p__37031;
var map__37162__$1 = ((((!((map__37162 == null)))?((((map__37162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37162):map__37162);
var namespace = cljs.core.get.call(null,map__37162__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37162__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37011,inst_37010,inst_37013,inst_37015,inst_37007,inst_37030,state_val_37094,c__25902__auto__,map__36939,map__36939__$1,opts,before_jsload,on_jsload,reload_dependents,map__36940,map__36940__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37033 = cljs.core.map.call(null,inst_37032,inst_37011);
var inst_37034 = cljs.core.pr_str.call(null,inst_37033);
var inst_37035 = figwheel.client.utils.log.call(null,inst_37034);
var inst_37036 = (function (){var all_files = inst_37007;
var res_SINGLEQUOTE_ = inst_37010;
var res = inst_37011;
var files_not_loaded = inst_37013;
var dependencies_that_loaded = inst_37015;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37011,inst_37010,inst_37013,inst_37015,inst_37007,inst_37030,inst_37032,inst_37033,inst_37034,inst_37035,state_val_37094,c__25902__auto__,map__36939,map__36939__$1,opts,before_jsload,on_jsload,reload_dependents,map__36940,map__36940__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37011,inst_37010,inst_37013,inst_37015,inst_37007,inst_37030,inst_37032,inst_37033,inst_37034,inst_37035,state_val_37094,c__25902__auto__,map__36939,map__36939__$1,opts,before_jsload,on_jsload,reload_dependents,map__36940,map__36940__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37037 = setTimeout(inst_37036,(10));
var state_37093__$1 = (function (){var statearr_37164 = state_37093;
(statearr_37164[(33)] = inst_37035);

(statearr_37164[(34)] = inst_37030);

return statearr_37164;
})();
var statearr_37165_37231 = state_37093__$1;
(statearr_37165_37231[(2)] = inst_37037);

(statearr_37165_37231[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (16))){
var state_37093__$1 = state_37093;
var statearr_37166_37232 = state_37093__$1;
(statearr_37166_37232[(2)] = reload_dependents);

(statearr_37166_37232[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (38))){
var inst_37047 = (state_37093[(16)]);
var inst_37064 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37047);
var state_37093__$1 = state_37093;
var statearr_37167_37233 = state_37093__$1;
(statearr_37167_37233[(2)] = inst_37064);

(statearr_37167_37233[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (30))){
var state_37093__$1 = state_37093;
var statearr_37168_37234 = state_37093__$1;
(statearr_37168_37234[(2)] = null);

(statearr_37168_37234[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (10))){
var inst_36967 = (state_37093[(22)]);
var inst_36969 = cljs.core.chunked_seq_QMARK_.call(null,inst_36967);
var state_37093__$1 = state_37093;
if(inst_36969){
var statearr_37169_37235 = state_37093__$1;
(statearr_37169_37235[(1)] = (13));

} else {
var statearr_37170_37236 = state_37093__$1;
(statearr_37170_37236[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (18))){
var inst_37001 = (state_37093[(2)]);
var state_37093__$1 = state_37093;
if(cljs.core.truth_(inst_37001)){
var statearr_37171_37237 = state_37093__$1;
(statearr_37171_37237[(1)] = (19));

} else {
var statearr_37172_37238 = state_37093__$1;
(statearr_37172_37238[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (42))){
var state_37093__$1 = state_37093;
var statearr_37173_37239 = state_37093__$1;
(statearr_37173_37239[(2)] = null);

(statearr_37173_37239[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (37))){
var inst_37059 = (state_37093[(2)]);
var state_37093__$1 = state_37093;
var statearr_37174_37240 = state_37093__$1;
(statearr_37174_37240[(2)] = inst_37059);

(statearr_37174_37240[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37094 === (8))){
var inst_36954 = (state_37093[(7)]);
var inst_36967 = (state_37093[(22)]);
var inst_36967__$1 = cljs.core.seq.call(null,inst_36954);
var state_37093__$1 = (function (){var statearr_37175 = state_37093;
(statearr_37175[(22)] = inst_36967__$1);

return statearr_37175;
})();
if(inst_36967__$1){
var statearr_37176_37241 = state_37093__$1;
(statearr_37176_37241[(1)] = (10));

} else {
var statearr_37177_37242 = state_37093__$1;
(statearr_37177_37242[(1)] = (11));

}

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
});})(c__25902__auto__,map__36939,map__36939__$1,opts,before_jsload,on_jsload,reload_dependents,map__36940,map__36940__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__25881__auto__,c__25902__auto__,map__36939,map__36939__$1,opts,before_jsload,on_jsload,reload_dependents,map__36940,map__36940__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25882__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25882__auto____0 = (function (){
var statearr_37181 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37181[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__25882__auto__);

(statearr_37181[(1)] = (1));

return statearr_37181;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25882__auto____1 = (function (state_37093){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_37093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e37182){if((e37182 instanceof Object)){
var ex__25885__auto__ = e37182;
var statearr_37183_37243 = state_37093;
(statearr_37183_37243[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37244 = state_37093;
state_37093 = G__37244;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__25882__auto__ = function(state_37093){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25882__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25882__auto____1.call(this,state_37093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25882__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25882__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto__,map__36939,map__36939__$1,opts,before_jsload,on_jsload,reload_dependents,map__36940,map__36940__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__25904__auto__ = (function (){var statearr_37184 = f__25903__auto__.call(null);
(statearr_37184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto__);

return statearr_37184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto__,map__36939,map__36939__$1,opts,before_jsload,on_jsload,reload_dependents,map__36940,map__36940__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__25902__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37247,link){
var map__37250 = p__37247;
var map__37250__$1 = ((((!((map__37250 == null)))?((((map__37250.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37250.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37250):map__37250);
var file = cljs.core.get.call(null,map__37250__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__37250,map__37250__$1,file){
return (function (p1__37245_SHARP_,p2__37246_SHARP_){
if(cljs.core._EQ_.call(null,p1__37245_SHARP_,p2__37246_SHARP_)){
return p1__37245_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__37250,map__37250__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37256){
var map__37257 = p__37256;
var map__37257__$1 = ((((!((map__37257 == null)))?((((map__37257.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37257.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37257):map__37257);
var match_length = cljs.core.get.call(null,map__37257__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37257__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37252_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37252_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args37259 = [];
var len__24844__auto___37262 = arguments.length;
var i__24845__auto___37263 = (0);
while(true){
if((i__24845__auto___37263 < len__24844__auto___37262)){
args37259.push((arguments[i__24845__auto___37263]));

var G__37264 = (i__24845__auto___37263 + (1));
i__24845__auto___37263 = G__37264;
continue;
} else {
}
break;
}

var G__37261 = args37259.length;
switch (G__37261) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37259.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37266_SHARP_,p2__37267_SHARP_){
return cljs.core.assoc.call(null,p1__37266_SHARP_,cljs.core.get.call(null,p2__37267_SHARP_,key),p2__37267_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__37268){
var map__37271 = p__37268;
var map__37271__$1 = ((((!((map__37271 == null)))?((((map__37271.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37271.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37271):map__37271);
var f_data = map__37271__$1;
var file = cljs.core.get.call(null,map__37271__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37273,files_msg){
var map__37280 = p__37273;
var map__37280__$1 = ((((!((map__37280 == null)))?((((map__37280.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37280.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37280):map__37280);
var opts = map__37280__$1;
var on_cssload = cljs.core.get.call(null,map__37280__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__37282_37286 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__37283_37287 = null;
var count__37284_37288 = (0);
var i__37285_37289 = (0);
while(true){
if((i__37285_37289 < count__37284_37288)){
var f_37290 = cljs.core._nth.call(null,chunk__37283_37287,i__37285_37289);
figwheel.client.file_reloading.reload_css_file.call(null,f_37290);

var G__37291 = seq__37282_37286;
var G__37292 = chunk__37283_37287;
var G__37293 = count__37284_37288;
var G__37294 = (i__37285_37289 + (1));
seq__37282_37286 = G__37291;
chunk__37283_37287 = G__37292;
count__37284_37288 = G__37293;
i__37285_37289 = G__37294;
continue;
} else {
var temp__4425__auto___37295 = cljs.core.seq.call(null,seq__37282_37286);
if(temp__4425__auto___37295){
var seq__37282_37296__$1 = temp__4425__auto___37295;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37282_37296__$1)){
var c__24589__auto___37297 = cljs.core.chunk_first.call(null,seq__37282_37296__$1);
var G__37298 = cljs.core.chunk_rest.call(null,seq__37282_37296__$1);
var G__37299 = c__24589__auto___37297;
var G__37300 = cljs.core.count.call(null,c__24589__auto___37297);
var G__37301 = (0);
seq__37282_37286 = G__37298;
chunk__37283_37287 = G__37299;
count__37284_37288 = G__37300;
i__37285_37289 = G__37301;
continue;
} else {
var f_37302 = cljs.core.first.call(null,seq__37282_37296__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_37302);

var G__37303 = cljs.core.next.call(null,seq__37282_37296__$1);
var G__37304 = null;
var G__37305 = (0);
var G__37306 = (0);
seq__37282_37286 = G__37303;
chunk__37283_37287 = G__37304;
count__37284_37288 = G__37305;
i__37285_37289 = G__37306;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__37280,map__37280__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__37280,map__37280__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1453744659432