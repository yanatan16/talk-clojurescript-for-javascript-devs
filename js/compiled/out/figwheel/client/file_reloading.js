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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__45542_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__45542_SHARP_));
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
var seq__45547 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__45548 = null;
var count__45549 = (0);
var i__45550 = (0);
while(true){
if((i__45550 < count__45549)){
var n = cljs.core._nth.call(null,chunk__45548,i__45550);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__45551 = seq__45547;
var G__45552 = chunk__45548;
var G__45553 = count__45549;
var G__45554 = (i__45550 + (1));
seq__45547 = G__45551;
chunk__45548 = G__45552;
count__45549 = G__45553;
i__45550 = G__45554;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__45547);
if(temp__4425__auto__){
var seq__45547__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45547__$1)){
var c__24589__auto__ = cljs.core.chunk_first.call(null,seq__45547__$1);
var G__45555 = cljs.core.chunk_rest.call(null,seq__45547__$1);
var G__45556 = c__24589__auto__;
var G__45557 = cljs.core.count.call(null,c__24589__auto__);
var G__45558 = (0);
seq__45547 = G__45555;
chunk__45548 = G__45556;
count__45549 = G__45557;
i__45550 = G__45558;
continue;
} else {
var n = cljs.core.first.call(null,seq__45547__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__45559 = cljs.core.next.call(null,seq__45547__$1);
var G__45560 = null;
var G__45561 = (0);
var G__45562 = (0);
seq__45547 = G__45559;
chunk__45548 = G__45560;
count__45549 = G__45561;
i__45550 = G__45562;
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

var seq__45601_45608 = cljs.core.seq.call(null,deps);
var chunk__45602_45609 = null;
var count__45603_45610 = (0);
var i__45604_45611 = (0);
while(true){
if((i__45604_45611 < count__45603_45610)){
var dep_45612 = cljs.core._nth.call(null,chunk__45602_45609,i__45604_45611);
topo_sort_helper_STAR_.call(null,dep_45612,(depth + (1)),state);

var G__45613 = seq__45601_45608;
var G__45614 = chunk__45602_45609;
var G__45615 = count__45603_45610;
var G__45616 = (i__45604_45611 + (1));
seq__45601_45608 = G__45613;
chunk__45602_45609 = G__45614;
count__45603_45610 = G__45615;
i__45604_45611 = G__45616;
continue;
} else {
var temp__4425__auto___45617 = cljs.core.seq.call(null,seq__45601_45608);
if(temp__4425__auto___45617){
var seq__45601_45618__$1 = temp__4425__auto___45617;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45601_45618__$1)){
var c__24589__auto___45619 = cljs.core.chunk_first.call(null,seq__45601_45618__$1);
var G__45620 = cljs.core.chunk_rest.call(null,seq__45601_45618__$1);
var G__45621 = c__24589__auto___45619;
var G__45622 = cljs.core.count.call(null,c__24589__auto___45619);
var G__45623 = (0);
seq__45601_45608 = G__45620;
chunk__45602_45609 = G__45621;
count__45603_45610 = G__45622;
i__45604_45611 = G__45623;
continue;
} else {
var dep_45624 = cljs.core.first.call(null,seq__45601_45618__$1);
topo_sort_helper_STAR_.call(null,dep_45624,(depth + (1)),state);

var G__45625 = cljs.core.next.call(null,seq__45601_45618__$1);
var G__45626 = null;
var G__45627 = (0);
var G__45628 = (0);
seq__45601_45608 = G__45625;
chunk__45602_45609 = G__45626;
count__45603_45610 = G__45627;
i__45604_45611 = G__45628;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__45605){
var vec__45607 = p__45605;
var x = cljs.core.nth.call(null,vec__45607,(0),null);
var xs = cljs.core.nthnext.call(null,vec__45607,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__45607,x,xs,get_deps__$1){
return (function (p1__45563_SHARP_){
return clojure.set.difference.call(null,p1__45563_SHARP_,x);
});})(vec__45607,x,xs,get_deps__$1))
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
var seq__45641 = cljs.core.seq.call(null,provides);
var chunk__45642 = null;
var count__45643 = (0);
var i__45644 = (0);
while(true){
if((i__45644 < count__45643)){
var prov = cljs.core._nth.call(null,chunk__45642,i__45644);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__45645_45653 = cljs.core.seq.call(null,requires);
var chunk__45646_45654 = null;
var count__45647_45655 = (0);
var i__45648_45656 = (0);
while(true){
if((i__45648_45656 < count__45647_45655)){
var req_45657 = cljs.core._nth.call(null,chunk__45646_45654,i__45648_45656);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45657,prov);

var G__45658 = seq__45645_45653;
var G__45659 = chunk__45646_45654;
var G__45660 = count__45647_45655;
var G__45661 = (i__45648_45656 + (1));
seq__45645_45653 = G__45658;
chunk__45646_45654 = G__45659;
count__45647_45655 = G__45660;
i__45648_45656 = G__45661;
continue;
} else {
var temp__4425__auto___45662 = cljs.core.seq.call(null,seq__45645_45653);
if(temp__4425__auto___45662){
var seq__45645_45663__$1 = temp__4425__auto___45662;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45645_45663__$1)){
var c__24589__auto___45664 = cljs.core.chunk_first.call(null,seq__45645_45663__$1);
var G__45665 = cljs.core.chunk_rest.call(null,seq__45645_45663__$1);
var G__45666 = c__24589__auto___45664;
var G__45667 = cljs.core.count.call(null,c__24589__auto___45664);
var G__45668 = (0);
seq__45645_45653 = G__45665;
chunk__45646_45654 = G__45666;
count__45647_45655 = G__45667;
i__45648_45656 = G__45668;
continue;
} else {
var req_45669 = cljs.core.first.call(null,seq__45645_45663__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45669,prov);

var G__45670 = cljs.core.next.call(null,seq__45645_45663__$1);
var G__45671 = null;
var G__45672 = (0);
var G__45673 = (0);
seq__45645_45653 = G__45670;
chunk__45646_45654 = G__45671;
count__45647_45655 = G__45672;
i__45648_45656 = G__45673;
continue;
}
} else {
}
}
break;
}

var G__45674 = seq__45641;
var G__45675 = chunk__45642;
var G__45676 = count__45643;
var G__45677 = (i__45644 + (1));
seq__45641 = G__45674;
chunk__45642 = G__45675;
count__45643 = G__45676;
i__45644 = G__45677;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__45641);
if(temp__4425__auto__){
var seq__45641__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45641__$1)){
var c__24589__auto__ = cljs.core.chunk_first.call(null,seq__45641__$1);
var G__45678 = cljs.core.chunk_rest.call(null,seq__45641__$1);
var G__45679 = c__24589__auto__;
var G__45680 = cljs.core.count.call(null,c__24589__auto__);
var G__45681 = (0);
seq__45641 = G__45678;
chunk__45642 = G__45679;
count__45643 = G__45680;
i__45644 = G__45681;
continue;
} else {
var prov = cljs.core.first.call(null,seq__45641__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__45649_45682 = cljs.core.seq.call(null,requires);
var chunk__45650_45683 = null;
var count__45651_45684 = (0);
var i__45652_45685 = (0);
while(true){
if((i__45652_45685 < count__45651_45684)){
var req_45686 = cljs.core._nth.call(null,chunk__45650_45683,i__45652_45685);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45686,prov);

var G__45687 = seq__45649_45682;
var G__45688 = chunk__45650_45683;
var G__45689 = count__45651_45684;
var G__45690 = (i__45652_45685 + (1));
seq__45649_45682 = G__45687;
chunk__45650_45683 = G__45688;
count__45651_45684 = G__45689;
i__45652_45685 = G__45690;
continue;
} else {
var temp__4425__auto___45691__$1 = cljs.core.seq.call(null,seq__45649_45682);
if(temp__4425__auto___45691__$1){
var seq__45649_45692__$1 = temp__4425__auto___45691__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45649_45692__$1)){
var c__24589__auto___45693 = cljs.core.chunk_first.call(null,seq__45649_45692__$1);
var G__45694 = cljs.core.chunk_rest.call(null,seq__45649_45692__$1);
var G__45695 = c__24589__auto___45693;
var G__45696 = cljs.core.count.call(null,c__24589__auto___45693);
var G__45697 = (0);
seq__45649_45682 = G__45694;
chunk__45650_45683 = G__45695;
count__45651_45684 = G__45696;
i__45652_45685 = G__45697;
continue;
} else {
var req_45698 = cljs.core.first.call(null,seq__45649_45692__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45698,prov);

var G__45699 = cljs.core.next.call(null,seq__45649_45692__$1);
var G__45700 = null;
var G__45701 = (0);
var G__45702 = (0);
seq__45649_45682 = G__45699;
chunk__45650_45683 = G__45700;
count__45651_45684 = G__45701;
i__45652_45685 = G__45702;
continue;
}
} else {
}
}
break;
}

var G__45703 = cljs.core.next.call(null,seq__45641__$1);
var G__45704 = null;
var G__45705 = (0);
var G__45706 = (0);
seq__45641 = G__45703;
chunk__45642 = G__45704;
count__45643 = G__45705;
i__45644 = G__45706;
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
var seq__45711_45715 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__45712_45716 = null;
var count__45713_45717 = (0);
var i__45714_45718 = (0);
while(true){
if((i__45714_45718 < count__45713_45717)){
var ns_45719 = cljs.core._nth.call(null,chunk__45712_45716,i__45714_45718);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_45719);

var G__45720 = seq__45711_45715;
var G__45721 = chunk__45712_45716;
var G__45722 = count__45713_45717;
var G__45723 = (i__45714_45718 + (1));
seq__45711_45715 = G__45720;
chunk__45712_45716 = G__45721;
count__45713_45717 = G__45722;
i__45714_45718 = G__45723;
continue;
} else {
var temp__4425__auto___45724 = cljs.core.seq.call(null,seq__45711_45715);
if(temp__4425__auto___45724){
var seq__45711_45725__$1 = temp__4425__auto___45724;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45711_45725__$1)){
var c__24589__auto___45726 = cljs.core.chunk_first.call(null,seq__45711_45725__$1);
var G__45727 = cljs.core.chunk_rest.call(null,seq__45711_45725__$1);
var G__45728 = c__24589__auto___45726;
var G__45729 = cljs.core.count.call(null,c__24589__auto___45726);
var G__45730 = (0);
seq__45711_45715 = G__45727;
chunk__45712_45716 = G__45728;
count__45713_45717 = G__45729;
i__45714_45718 = G__45730;
continue;
} else {
var ns_45731 = cljs.core.first.call(null,seq__45711_45725__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_45731);

var G__45732 = cljs.core.next.call(null,seq__45711_45725__$1);
var G__45733 = null;
var G__45734 = (0);
var G__45735 = (0);
seq__45711_45715 = G__45732;
chunk__45712_45716 = G__45733;
count__45713_45717 = G__45734;
i__45714_45718 = G__45735;
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
var G__45736__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__45736 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45737__i = 0, G__45737__a = new Array(arguments.length -  0);
while (G__45737__i < G__45737__a.length) {G__45737__a[G__45737__i] = arguments[G__45737__i + 0]; ++G__45737__i;}
  args = new cljs.core.IndexedSeq(G__45737__a,0);
} 
return G__45736__delegate.call(this,args);};
G__45736.cljs$lang$maxFixedArity = 0;
G__45736.cljs$lang$applyTo = (function (arglist__45738){
var args = cljs.core.seq(arglist__45738);
return G__45736__delegate(args);
});
G__45736.cljs$core$IFn$_invoke$arity$variadic = G__45736__delegate;
return G__45736;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__45740 = cljs.core._EQ_;
var expr__45741 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__45740.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__45741))){
var path_parts = ((function (pred__45740,expr__45741){
return (function (p1__45739_SHARP_){
return clojure.string.split.call(null,p1__45739_SHARP_,/[\/\\]/);
});})(pred__45740,expr__45741))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__45740,expr__45741){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e45743){if((e45743 instanceof Error)){
var e = e45743;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e45743;

}
}})());
});
;})(path_parts,sep,root,pred__45740,expr__45741))
} else {
if(cljs.core.truth_(pred__45740.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__45741))){
return ((function (pred__45740,expr__45741){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__45740,expr__45741){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__45740,expr__45741))
);

return deferred.addErrback(((function (deferred,pred__45740,expr__45741){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__45740,expr__45741))
);
});
;})(pred__45740,expr__45741))
} else {
return ((function (pred__45740,expr__45741){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__45740,expr__45741))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__45744,callback){
var map__45747 = p__45744;
var map__45747__$1 = ((((!((map__45747 == null)))?((((map__45747.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45747.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45747):map__45747);
var file_msg = map__45747__$1;
var request_url = cljs.core.get.call(null,map__45747__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__45747,map__45747__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__45747,map__45747__$1,file_msg,request_url))
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
return (function (state_45771){
var state_val_45772 = (state_45771[(1)]);
if((state_val_45772 === (7))){
var inst_45767 = (state_45771[(2)]);
var state_45771__$1 = state_45771;
var statearr_45773_45793 = state_45771__$1;
(statearr_45773_45793[(2)] = inst_45767);

(statearr_45773_45793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45772 === (1))){
var state_45771__$1 = state_45771;
var statearr_45774_45794 = state_45771__$1;
(statearr_45774_45794[(2)] = null);

(statearr_45774_45794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45772 === (4))){
var inst_45751 = (state_45771[(7)]);
var inst_45751__$1 = (state_45771[(2)]);
var state_45771__$1 = (function (){var statearr_45775 = state_45771;
(statearr_45775[(7)] = inst_45751__$1);

return statearr_45775;
})();
if(cljs.core.truth_(inst_45751__$1)){
var statearr_45776_45795 = state_45771__$1;
(statearr_45776_45795[(1)] = (5));

} else {
var statearr_45777_45796 = state_45771__$1;
(statearr_45777_45796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45772 === (6))){
var state_45771__$1 = state_45771;
var statearr_45778_45797 = state_45771__$1;
(statearr_45778_45797[(2)] = null);

(statearr_45778_45797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45772 === (3))){
var inst_45769 = (state_45771[(2)]);
var state_45771__$1 = state_45771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45771__$1,inst_45769);
} else {
if((state_val_45772 === (2))){
var state_45771__$1 = state_45771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45771__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_45772 === (11))){
var inst_45763 = (state_45771[(2)]);
var state_45771__$1 = (function (){var statearr_45779 = state_45771;
(statearr_45779[(8)] = inst_45763);

return statearr_45779;
})();
var statearr_45780_45798 = state_45771__$1;
(statearr_45780_45798[(2)] = null);

(statearr_45780_45798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45772 === (9))){
var inst_45755 = (state_45771[(9)]);
var inst_45757 = (state_45771[(10)]);
var inst_45759 = inst_45757.call(null,inst_45755);
var state_45771__$1 = state_45771;
var statearr_45781_45799 = state_45771__$1;
(statearr_45781_45799[(2)] = inst_45759);

(statearr_45781_45799[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45772 === (5))){
var inst_45751 = (state_45771[(7)]);
var inst_45753 = figwheel.client.file_reloading.blocking_load.call(null,inst_45751);
var state_45771__$1 = state_45771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45771__$1,(8),inst_45753);
} else {
if((state_val_45772 === (10))){
var inst_45755 = (state_45771[(9)]);
var inst_45761 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_45755);
var state_45771__$1 = state_45771;
var statearr_45782_45800 = state_45771__$1;
(statearr_45782_45800[(2)] = inst_45761);

(statearr_45782_45800[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45772 === (8))){
var inst_45751 = (state_45771[(7)]);
var inst_45757 = (state_45771[(10)]);
var inst_45755 = (state_45771[(2)]);
var inst_45756 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_45757__$1 = cljs.core.get.call(null,inst_45756,inst_45751);
var state_45771__$1 = (function (){var statearr_45783 = state_45771;
(statearr_45783[(9)] = inst_45755);

(statearr_45783[(10)] = inst_45757__$1);

return statearr_45783;
})();
if(cljs.core.truth_(inst_45757__$1)){
var statearr_45784_45801 = state_45771__$1;
(statearr_45784_45801[(1)] = (9));

} else {
var statearr_45785_45802 = state_45771__$1;
(statearr_45785_45802[(1)] = (10));

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
var statearr_45789 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45789[(0)] = figwheel$client$file_reloading$state_machine__25882__auto__);

(statearr_45789[(1)] = (1));

return statearr_45789;
});
var figwheel$client$file_reloading$state_machine__25882__auto____1 = (function (state_45771){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_45771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e45790){if((e45790 instanceof Object)){
var ex__25885__auto__ = e45790;
var statearr_45791_45803 = state_45771;
(statearr_45791_45803[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45804 = state_45771;
state_45771 = G__45804;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__25882__auto__ = function(state_45771){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__25882__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__25882__auto____1.call(this,state_45771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__25882__auto____0;
figwheel$client$file_reloading$state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__25882__auto____1;
return figwheel$client$file_reloading$state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto__))
})();
var state__25904__auto__ = (function (){var statearr_45792 = f__25903__auto__.call(null);
(statearr_45792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto__);

return statearr_45792;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__45805,callback){
var map__45808 = p__45805;
var map__45808__$1 = ((((!((map__45808 == null)))?((((map__45808.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45808.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45808):map__45808);
var file_msg = map__45808__$1;
var namespace = cljs.core.get.call(null,map__45808__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__45808,map__45808__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__45808,map__45808__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__45810){
var map__45813 = p__45810;
var map__45813__$1 = ((((!((map__45813 == null)))?((((map__45813.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45813.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45813):map__45813);
var file_msg = map__45813__$1;
var namespace = cljs.core.get.call(null,map__45813__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__45815,callback){
var map__45818 = p__45815;
var map__45818__$1 = ((((!((map__45818 == null)))?((((map__45818.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45818.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45818):map__45818);
var file_msg = map__45818__$1;
var request_url = cljs.core.get.call(null,map__45818__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__45818__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__25902__auto___45906 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto___45906,out){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto___45906,out){
return (function (state_45888){
var state_val_45889 = (state_45888[(1)]);
if((state_val_45889 === (1))){
var inst_45866 = cljs.core.nth.call(null,files,(0),null);
var inst_45867 = cljs.core.nthnext.call(null,files,(1));
var inst_45868 = files;
var state_45888__$1 = (function (){var statearr_45890 = state_45888;
(statearr_45890[(7)] = inst_45868);

(statearr_45890[(8)] = inst_45866);

(statearr_45890[(9)] = inst_45867);

return statearr_45890;
})();
var statearr_45891_45907 = state_45888__$1;
(statearr_45891_45907[(2)] = null);

(statearr_45891_45907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45889 === (2))){
var inst_45868 = (state_45888[(7)]);
var inst_45871 = (state_45888[(10)]);
var inst_45871__$1 = cljs.core.nth.call(null,inst_45868,(0),null);
var inst_45872 = cljs.core.nthnext.call(null,inst_45868,(1));
var inst_45873 = (inst_45871__$1 == null);
var inst_45874 = cljs.core.not.call(null,inst_45873);
var state_45888__$1 = (function (){var statearr_45892 = state_45888;
(statearr_45892[(11)] = inst_45872);

(statearr_45892[(10)] = inst_45871__$1);

return statearr_45892;
})();
if(inst_45874){
var statearr_45893_45908 = state_45888__$1;
(statearr_45893_45908[(1)] = (4));

} else {
var statearr_45894_45909 = state_45888__$1;
(statearr_45894_45909[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45889 === (3))){
var inst_45886 = (state_45888[(2)]);
var state_45888__$1 = state_45888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45888__$1,inst_45886);
} else {
if((state_val_45889 === (4))){
var inst_45871 = (state_45888[(10)]);
var inst_45876 = figwheel.client.file_reloading.reload_js_file.call(null,inst_45871);
var state_45888__$1 = state_45888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45888__$1,(7),inst_45876);
} else {
if((state_val_45889 === (5))){
var inst_45882 = cljs.core.async.close_BANG_.call(null,out);
var state_45888__$1 = state_45888;
var statearr_45895_45910 = state_45888__$1;
(statearr_45895_45910[(2)] = inst_45882);

(statearr_45895_45910[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45889 === (6))){
var inst_45884 = (state_45888[(2)]);
var state_45888__$1 = state_45888;
var statearr_45896_45911 = state_45888__$1;
(statearr_45896_45911[(2)] = inst_45884);

(statearr_45896_45911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45889 === (7))){
var inst_45872 = (state_45888[(11)]);
var inst_45878 = (state_45888[(2)]);
var inst_45879 = cljs.core.async.put_BANG_.call(null,out,inst_45878);
var inst_45868 = inst_45872;
var state_45888__$1 = (function (){var statearr_45897 = state_45888;
(statearr_45897[(12)] = inst_45879);

(statearr_45897[(7)] = inst_45868);

return statearr_45897;
})();
var statearr_45898_45912 = state_45888__$1;
(statearr_45898_45912[(2)] = null);

(statearr_45898_45912[(1)] = (2));


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
});})(c__25902__auto___45906,out))
;
return ((function (switch__25881__auto__,c__25902__auto___45906,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25882__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25882__auto____0 = (function (){
var statearr_45902 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45902[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25882__auto__);

(statearr_45902[(1)] = (1));

return statearr_45902;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25882__auto____1 = (function (state_45888){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_45888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e45903){if((e45903 instanceof Object)){
var ex__25885__auto__ = e45903;
var statearr_45904_45913 = state_45888;
(statearr_45904_45913[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45914 = state_45888;
state_45888 = G__45914;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25882__auto__ = function(state_45888){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25882__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25882__auto____1.call(this,state_45888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25882__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25882__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto___45906,out))
})();
var state__25904__auto__ = (function (){var statearr_45905 = f__25903__auto__.call(null);
(statearr_45905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto___45906);

return statearr_45905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto___45906,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__45915,opts){
var map__45919 = p__45915;
var map__45919__$1 = ((((!((map__45919 == null)))?((((map__45919.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45919.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45919):map__45919);
var eval_body__$1 = cljs.core.get.call(null,map__45919__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__45919__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e45921){var e = e45921;
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
return (function (p1__45922_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__45922_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__45927){
var vec__45928 = p__45927;
var k = cljs.core.nth.call(null,vec__45928,(0),null);
var v = cljs.core.nth.call(null,vec__45928,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__45929){
var vec__45930 = p__45929;
var k = cljs.core.nth.call(null,vec__45930,(0),null);
var v = cljs.core.nth.call(null,vec__45930,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__45934,p__45935){
var map__46182 = p__45934;
var map__46182__$1 = ((((!((map__46182 == null)))?((((map__46182.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46182.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46182):map__46182);
var opts = map__46182__$1;
var before_jsload = cljs.core.get.call(null,map__46182__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__46182__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__46182__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__46183 = p__45935;
var map__46183__$1 = ((((!((map__46183 == null)))?((((map__46183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46183):map__46183);
var msg = map__46183__$1;
var files = cljs.core.get.call(null,map__46183__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__46183__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__46183__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__25902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto__,map__46182,map__46182__$1,opts,before_jsload,on_jsload,reload_dependents,map__46183,map__46183__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto__,map__46182,map__46182__$1,opts,before_jsload,on_jsload,reload_dependents,map__46183,map__46183__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_46336){
var state_val_46337 = (state_46336[(1)]);
if((state_val_46337 === (7))){
var inst_46198 = (state_46336[(7)]);
var inst_46197 = (state_46336[(8)]);
var inst_46200 = (state_46336[(9)]);
var inst_46199 = (state_46336[(10)]);
var inst_46205 = cljs.core._nth.call(null,inst_46198,inst_46200);
var inst_46206 = figwheel.client.file_reloading.eval_body.call(null,inst_46205,opts);
var inst_46207 = (inst_46200 + (1));
var tmp46338 = inst_46198;
var tmp46339 = inst_46197;
var tmp46340 = inst_46199;
var inst_46197__$1 = tmp46339;
var inst_46198__$1 = tmp46338;
var inst_46199__$1 = tmp46340;
var inst_46200__$1 = inst_46207;
var state_46336__$1 = (function (){var statearr_46341 = state_46336;
(statearr_46341[(7)] = inst_46198__$1);

(statearr_46341[(8)] = inst_46197__$1);

(statearr_46341[(11)] = inst_46206);

(statearr_46341[(9)] = inst_46200__$1);

(statearr_46341[(10)] = inst_46199__$1);

return statearr_46341;
})();
var statearr_46342_46428 = state_46336__$1;
(statearr_46342_46428[(2)] = null);

(statearr_46342_46428[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (20))){
var inst_46240 = (state_46336[(12)]);
var inst_46248 = figwheel.client.file_reloading.sort_files.call(null,inst_46240);
var state_46336__$1 = state_46336;
var statearr_46343_46429 = state_46336__$1;
(statearr_46343_46429[(2)] = inst_46248);

(statearr_46343_46429[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (27))){
var state_46336__$1 = state_46336;
var statearr_46344_46430 = state_46336__$1;
(statearr_46344_46430[(2)] = null);

(statearr_46344_46430[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (1))){
var inst_46189 = (state_46336[(13)]);
var inst_46186 = before_jsload.call(null,files);
var inst_46187 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_46188 = (function (){return ((function (inst_46189,inst_46186,inst_46187,state_val_46337,c__25902__auto__,map__46182,map__46182__$1,opts,before_jsload,on_jsload,reload_dependents,map__46183,map__46183__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45931_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__45931_SHARP_);
});
;})(inst_46189,inst_46186,inst_46187,state_val_46337,c__25902__auto__,map__46182,map__46182__$1,opts,before_jsload,on_jsload,reload_dependents,map__46183,map__46183__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46189__$1 = cljs.core.filter.call(null,inst_46188,files);
var inst_46190 = cljs.core.not_empty.call(null,inst_46189__$1);
var state_46336__$1 = (function (){var statearr_46345 = state_46336;
(statearr_46345[(13)] = inst_46189__$1);

(statearr_46345[(14)] = inst_46187);

(statearr_46345[(15)] = inst_46186);

return statearr_46345;
})();
if(cljs.core.truth_(inst_46190)){
var statearr_46346_46431 = state_46336__$1;
(statearr_46346_46431[(1)] = (2));

} else {
var statearr_46347_46432 = state_46336__$1;
(statearr_46347_46432[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (24))){
var state_46336__$1 = state_46336;
var statearr_46348_46433 = state_46336__$1;
(statearr_46348_46433[(2)] = null);

(statearr_46348_46433[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (39))){
var inst_46290 = (state_46336[(16)]);
var state_46336__$1 = state_46336;
var statearr_46349_46434 = state_46336__$1;
(statearr_46349_46434[(2)] = inst_46290);

(statearr_46349_46434[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (46))){
var inst_46331 = (state_46336[(2)]);
var state_46336__$1 = state_46336;
var statearr_46350_46435 = state_46336__$1;
(statearr_46350_46435[(2)] = inst_46331);

(statearr_46350_46435[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (4))){
var inst_46234 = (state_46336[(2)]);
var inst_46235 = cljs.core.List.EMPTY;
var inst_46236 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_46235);
var inst_46237 = (function (){return ((function (inst_46234,inst_46235,inst_46236,state_val_46337,c__25902__auto__,map__46182,map__46182__$1,opts,before_jsload,on_jsload,reload_dependents,map__46183,map__46183__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45932_SHARP_){
var and__23774__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__45932_SHARP_);
if(cljs.core.truth_(and__23774__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__45932_SHARP_));
} else {
return and__23774__auto__;
}
});
;})(inst_46234,inst_46235,inst_46236,state_val_46337,c__25902__auto__,map__46182,map__46182__$1,opts,before_jsload,on_jsload,reload_dependents,map__46183,map__46183__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46238 = cljs.core.filter.call(null,inst_46237,files);
var inst_46239 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_46240 = cljs.core.concat.call(null,inst_46238,inst_46239);
var state_46336__$1 = (function (){var statearr_46351 = state_46336;
(statearr_46351[(17)] = inst_46236);

(statearr_46351[(18)] = inst_46234);

(statearr_46351[(12)] = inst_46240);

return statearr_46351;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_46352_46436 = state_46336__$1;
(statearr_46352_46436[(1)] = (16));

} else {
var statearr_46353_46437 = state_46336__$1;
(statearr_46353_46437[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (15))){
var inst_46224 = (state_46336[(2)]);
var state_46336__$1 = state_46336;
var statearr_46354_46438 = state_46336__$1;
(statearr_46354_46438[(2)] = inst_46224);

(statearr_46354_46438[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (21))){
var inst_46250 = (state_46336[(19)]);
var inst_46250__$1 = (state_46336[(2)]);
var inst_46251 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_46250__$1);
var state_46336__$1 = (function (){var statearr_46355 = state_46336;
(statearr_46355[(19)] = inst_46250__$1);

return statearr_46355;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46336__$1,(22),inst_46251);
} else {
if((state_val_46337 === (31))){
var inst_46334 = (state_46336[(2)]);
var state_46336__$1 = state_46336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46336__$1,inst_46334);
} else {
if((state_val_46337 === (32))){
var inst_46290 = (state_46336[(16)]);
var inst_46295 = inst_46290.cljs$lang$protocol_mask$partition0$;
var inst_46296 = (inst_46295 & (64));
var inst_46297 = inst_46290.cljs$core$ISeq$;
var inst_46298 = (inst_46296) || (inst_46297);
var state_46336__$1 = state_46336;
if(cljs.core.truth_(inst_46298)){
var statearr_46356_46439 = state_46336__$1;
(statearr_46356_46439[(1)] = (35));

} else {
var statearr_46357_46440 = state_46336__$1;
(statearr_46357_46440[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (40))){
var inst_46311 = (state_46336[(20)]);
var inst_46310 = (state_46336[(2)]);
var inst_46311__$1 = cljs.core.get.call(null,inst_46310,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_46312 = cljs.core.get.call(null,inst_46310,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_46313 = cljs.core.not_empty.call(null,inst_46311__$1);
var state_46336__$1 = (function (){var statearr_46358 = state_46336;
(statearr_46358[(21)] = inst_46312);

(statearr_46358[(20)] = inst_46311__$1);

return statearr_46358;
})();
if(cljs.core.truth_(inst_46313)){
var statearr_46359_46441 = state_46336__$1;
(statearr_46359_46441[(1)] = (41));

} else {
var statearr_46360_46442 = state_46336__$1;
(statearr_46360_46442[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (33))){
var state_46336__$1 = state_46336;
var statearr_46361_46443 = state_46336__$1;
(statearr_46361_46443[(2)] = false);

(statearr_46361_46443[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (13))){
var inst_46210 = (state_46336[(22)]);
var inst_46214 = cljs.core.chunk_first.call(null,inst_46210);
var inst_46215 = cljs.core.chunk_rest.call(null,inst_46210);
var inst_46216 = cljs.core.count.call(null,inst_46214);
var inst_46197 = inst_46215;
var inst_46198 = inst_46214;
var inst_46199 = inst_46216;
var inst_46200 = (0);
var state_46336__$1 = (function (){var statearr_46362 = state_46336;
(statearr_46362[(7)] = inst_46198);

(statearr_46362[(8)] = inst_46197);

(statearr_46362[(9)] = inst_46200);

(statearr_46362[(10)] = inst_46199);

return statearr_46362;
})();
var statearr_46363_46444 = state_46336__$1;
(statearr_46363_46444[(2)] = null);

(statearr_46363_46444[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (22))){
var inst_46253 = (state_46336[(23)]);
var inst_46258 = (state_46336[(24)]);
var inst_46254 = (state_46336[(25)]);
var inst_46250 = (state_46336[(19)]);
var inst_46253__$1 = (state_46336[(2)]);
var inst_46254__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_46253__$1);
var inst_46255 = (function (){var all_files = inst_46250;
var res_SINGLEQUOTE_ = inst_46253__$1;
var res = inst_46254__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_46253,inst_46258,inst_46254,inst_46250,inst_46253__$1,inst_46254__$1,state_val_46337,c__25902__auto__,map__46182,map__46182__$1,opts,before_jsload,on_jsload,reload_dependents,map__46183,map__46183__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45933_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__45933_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_46253,inst_46258,inst_46254,inst_46250,inst_46253__$1,inst_46254__$1,state_val_46337,c__25902__auto__,map__46182,map__46182__$1,opts,before_jsload,on_jsload,reload_dependents,map__46183,map__46183__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46256 = cljs.core.filter.call(null,inst_46255,inst_46253__$1);
var inst_46257 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_46258__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_46257);
var inst_46259 = cljs.core.not_empty.call(null,inst_46258__$1);
var state_46336__$1 = (function (){var statearr_46364 = state_46336;
(statearr_46364[(23)] = inst_46253__$1);

(statearr_46364[(24)] = inst_46258__$1);

(statearr_46364[(25)] = inst_46254__$1);

(statearr_46364[(26)] = inst_46256);

return statearr_46364;
})();
if(cljs.core.truth_(inst_46259)){
var statearr_46365_46445 = state_46336__$1;
(statearr_46365_46445[(1)] = (23));

} else {
var statearr_46366_46446 = state_46336__$1;
(statearr_46366_46446[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (36))){
var state_46336__$1 = state_46336;
var statearr_46367_46447 = state_46336__$1;
(statearr_46367_46447[(2)] = false);

(statearr_46367_46447[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (41))){
var inst_46311 = (state_46336[(20)]);
var inst_46315 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_46316 = cljs.core.map.call(null,inst_46315,inst_46311);
var inst_46317 = cljs.core.pr_str.call(null,inst_46316);
var inst_46318 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_46317)].join('');
var inst_46319 = figwheel.client.utils.log.call(null,inst_46318);
var state_46336__$1 = state_46336;
var statearr_46368_46448 = state_46336__$1;
(statearr_46368_46448[(2)] = inst_46319);

(statearr_46368_46448[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (43))){
var inst_46312 = (state_46336[(21)]);
var inst_46322 = (state_46336[(2)]);
var inst_46323 = cljs.core.not_empty.call(null,inst_46312);
var state_46336__$1 = (function (){var statearr_46369 = state_46336;
(statearr_46369[(27)] = inst_46322);

return statearr_46369;
})();
if(cljs.core.truth_(inst_46323)){
var statearr_46370_46449 = state_46336__$1;
(statearr_46370_46449[(1)] = (44));

} else {
var statearr_46371_46450 = state_46336__$1;
(statearr_46371_46450[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (29))){
var inst_46253 = (state_46336[(23)]);
var inst_46258 = (state_46336[(24)]);
var inst_46254 = (state_46336[(25)]);
var inst_46250 = (state_46336[(19)]);
var inst_46256 = (state_46336[(26)]);
var inst_46290 = (state_46336[(16)]);
var inst_46286 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_46289 = (function (){var all_files = inst_46250;
var res_SINGLEQUOTE_ = inst_46253;
var res = inst_46254;
var files_not_loaded = inst_46256;
var dependencies_that_loaded = inst_46258;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46253,inst_46258,inst_46254,inst_46250,inst_46256,inst_46290,inst_46286,state_val_46337,c__25902__auto__,map__46182,map__46182__$1,opts,before_jsload,on_jsload,reload_dependents,map__46183,map__46183__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__46288){
var map__46372 = p__46288;
var map__46372__$1 = ((((!((map__46372 == null)))?((((map__46372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46372):map__46372);
var namespace = cljs.core.get.call(null,map__46372__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46253,inst_46258,inst_46254,inst_46250,inst_46256,inst_46290,inst_46286,state_val_46337,c__25902__auto__,map__46182,map__46182__$1,opts,before_jsload,on_jsload,reload_dependents,map__46183,map__46183__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46290__$1 = cljs.core.group_by.call(null,inst_46289,inst_46256);
var inst_46292 = (inst_46290__$1 == null);
var inst_46293 = cljs.core.not.call(null,inst_46292);
var state_46336__$1 = (function (){var statearr_46374 = state_46336;
(statearr_46374[(16)] = inst_46290__$1);

(statearr_46374[(28)] = inst_46286);

return statearr_46374;
})();
if(inst_46293){
var statearr_46375_46451 = state_46336__$1;
(statearr_46375_46451[(1)] = (32));

} else {
var statearr_46376_46452 = state_46336__$1;
(statearr_46376_46452[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (44))){
var inst_46312 = (state_46336[(21)]);
var inst_46325 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_46312);
var inst_46326 = cljs.core.pr_str.call(null,inst_46325);
var inst_46327 = [cljs.core.str("not required: "),cljs.core.str(inst_46326)].join('');
var inst_46328 = figwheel.client.utils.log.call(null,inst_46327);
var state_46336__$1 = state_46336;
var statearr_46377_46453 = state_46336__$1;
(statearr_46377_46453[(2)] = inst_46328);

(statearr_46377_46453[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (6))){
var inst_46231 = (state_46336[(2)]);
var state_46336__$1 = state_46336;
var statearr_46378_46454 = state_46336__$1;
(statearr_46378_46454[(2)] = inst_46231);

(statearr_46378_46454[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (28))){
var inst_46256 = (state_46336[(26)]);
var inst_46283 = (state_46336[(2)]);
var inst_46284 = cljs.core.not_empty.call(null,inst_46256);
var state_46336__$1 = (function (){var statearr_46379 = state_46336;
(statearr_46379[(29)] = inst_46283);

return statearr_46379;
})();
if(cljs.core.truth_(inst_46284)){
var statearr_46380_46455 = state_46336__$1;
(statearr_46380_46455[(1)] = (29));

} else {
var statearr_46381_46456 = state_46336__$1;
(statearr_46381_46456[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (25))){
var inst_46254 = (state_46336[(25)]);
var inst_46270 = (state_46336[(2)]);
var inst_46271 = cljs.core.not_empty.call(null,inst_46254);
var state_46336__$1 = (function (){var statearr_46382 = state_46336;
(statearr_46382[(30)] = inst_46270);

return statearr_46382;
})();
if(cljs.core.truth_(inst_46271)){
var statearr_46383_46457 = state_46336__$1;
(statearr_46383_46457[(1)] = (26));

} else {
var statearr_46384_46458 = state_46336__$1;
(statearr_46384_46458[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (34))){
var inst_46305 = (state_46336[(2)]);
var state_46336__$1 = state_46336;
if(cljs.core.truth_(inst_46305)){
var statearr_46385_46459 = state_46336__$1;
(statearr_46385_46459[(1)] = (38));

} else {
var statearr_46386_46460 = state_46336__$1;
(statearr_46386_46460[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (17))){
var state_46336__$1 = state_46336;
var statearr_46387_46461 = state_46336__$1;
(statearr_46387_46461[(2)] = recompile_dependents);

(statearr_46387_46461[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (3))){
var state_46336__$1 = state_46336;
var statearr_46388_46462 = state_46336__$1;
(statearr_46388_46462[(2)] = null);

(statearr_46388_46462[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (12))){
var inst_46227 = (state_46336[(2)]);
var state_46336__$1 = state_46336;
var statearr_46389_46463 = state_46336__$1;
(statearr_46389_46463[(2)] = inst_46227);

(statearr_46389_46463[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (2))){
var inst_46189 = (state_46336[(13)]);
var inst_46196 = cljs.core.seq.call(null,inst_46189);
var inst_46197 = inst_46196;
var inst_46198 = null;
var inst_46199 = (0);
var inst_46200 = (0);
var state_46336__$1 = (function (){var statearr_46390 = state_46336;
(statearr_46390[(7)] = inst_46198);

(statearr_46390[(8)] = inst_46197);

(statearr_46390[(9)] = inst_46200);

(statearr_46390[(10)] = inst_46199);

return statearr_46390;
})();
var statearr_46391_46464 = state_46336__$1;
(statearr_46391_46464[(2)] = null);

(statearr_46391_46464[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (23))){
var inst_46253 = (state_46336[(23)]);
var inst_46258 = (state_46336[(24)]);
var inst_46254 = (state_46336[(25)]);
var inst_46250 = (state_46336[(19)]);
var inst_46256 = (state_46336[(26)]);
var inst_46261 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_46263 = (function (){var all_files = inst_46250;
var res_SINGLEQUOTE_ = inst_46253;
var res = inst_46254;
var files_not_loaded = inst_46256;
var dependencies_that_loaded = inst_46258;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46253,inst_46258,inst_46254,inst_46250,inst_46256,inst_46261,state_val_46337,c__25902__auto__,map__46182,map__46182__$1,opts,before_jsload,on_jsload,reload_dependents,map__46183,map__46183__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__46262){
var map__46392 = p__46262;
var map__46392__$1 = ((((!((map__46392 == null)))?((((map__46392.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46392.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46392):map__46392);
var request_url = cljs.core.get.call(null,map__46392__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46253,inst_46258,inst_46254,inst_46250,inst_46256,inst_46261,state_val_46337,c__25902__auto__,map__46182,map__46182__$1,opts,before_jsload,on_jsload,reload_dependents,map__46183,map__46183__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46264 = cljs.core.reverse.call(null,inst_46258);
var inst_46265 = cljs.core.map.call(null,inst_46263,inst_46264);
var inst_46266 = cljs.core.pr_str.call(null,inst_46265);
var inst_46267 = figwheel.client.utils.log.call(null,inst_46266);
var state_46336__$1 = (function (){var statearr_46394 = state_46336;
(statearr_46394[(31)] = inst_46261);

return statearr_46394;
})();
var statearr_46395_46465 = state_46336__$1;
(statearr_46395_46465[(2)] = inst_46267);

(statearr_46395_46465[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (35))){
var state_46336__$1 = state_46336;
var statearr_46396_46466 = state_46336__$1;
(statearr_46396_46466[(2)] = true);

(statearr_46396_46466[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (19))){
var inst_46240 = (state_46336[(12)]);
var inst_46246 = figwheel.client.file_reloading.expand_files.call(null,inst_46240);
var state_46336__$1 = state_46336;
var statearr_46397_46467 = state_46336__$1;
(statearr_46397_46467[(2)] = inst_46246);

(statearr_46397_46467[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (11))){
var state_46336__$1 = state_46336;
var statearr_46398_46468 = state_46336__$1;
(statearr_46398_46468[(2)] = null);

(statearr_46398_46468[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (9))){
var inst_46229 = (state_46336[(2)]);
var state_46336__$1 = state_46336;
var statearr_46399_46469 = state_46336__$1;
(statearr_46399_46469[(2)] = inst_46229);

(statearr_46399_46469[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (5))){
var inst_46200 = (state_46336[(9)]);
var inst_46199 = (state_46336[(10)]);
var inst_46202 = (inst_46200 < inst_46199);
var inst_46203 = inst_46202;
var state_46336__$1 = state_46336;
if(cljs.core.truth_(inst_46203)){
var statearr_46400_46470 = state_46336__$1;
(statearr_46400_46470[(1)] = (7));

} else {
var statearr_46401_46471 = state_46336__$1;
(statearr_46401_46471[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (14))){
var inst_46210 = (state_46336[(22)]);
var inst_46219 = cljs.core.first.call(null,inst_46210);
var inst_46220 = figwheel.client.file_reloading.eval_body.call(null,inst_46219,opts);
var inst_46221 = cljs.core.next.call(null,inst_46210);
var inst_46197 = inst_46221;
var inst_46198 = null;
var inst_46199 = (0);
var inst_46200 = (0);
var state_46336__$1 = (function (){var statearr_46402 = state_46336;
(statearr_46402[(7)] = inst_46198);

(statearr_46402[(32)] = inst_46220);

(statearr_46402[(8)] = inst_46197);

(statearr_46402[(9)] = inst_46200);

(statearr_46402[(10)] = inst_46199);

return statearr_46402;
})();
var statearr_46403_46472 = state_46336__$1;
(statearr_46403_46472[(2)] = null);

(statearr_46403_46472[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (45))){
var state_46336__$1 = state_46336;
var statearr_46404_46473 = state_46336__$1;
(statearr_46404_46473[(2)] = null);

(statearr_46404_46473[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (26))){
var inst_46253 = (state_46336[(23)]);
var inst_46258 = (state_46336[(24)]);
var inst_46254 = (state_46336[(25)]);
var inst_46250 = (state_46336[(19)]);
var inst_46256 = (state_46336[(26)]);
var inst_46273 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_46275 = (function (){var all_files = inst_46250;
var res_SINGLEQUOTE_ = inst_46253;
var res = inst_46254;
var files_not_loaded = inst_46256;
var dependencies_that_loaded = inst_46258;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46253,inst_46258,inst_46254,inst_46250,inst_46256,inst_46273,state_val_46337,c__25902__auto__,map__46182,map__46182__$1,opts,before_jsload,on_jsload,reload_dependents,map__46183,map__46183__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__46274){
var map__46405 = p__46274;
var map__46405__$1 = ((((!((map__46405 == null)))?((((map__46405.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46405.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46405):map__46405);
var namespace = cljs.core.get.call(null,map__46405__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__46405__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46253,inst_46258,inst_46254,inst_46250,inst_46256,inst_46273,state_val_46337,c__25902__auto__,map__46182,map__46182__$1,opts,before_jsload,on_jsload,reload_dependents,map__46183,map__46183__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46276 = cljs.core.map.call(null,inst_46275,inst_46254);
var inst_46277 = cljs.core.pr_str.call(null,inst_46276);
var inst_46278 = figwheel.client.utils.log.call(null,inst_46277);
var inst_46279 = (function (){var all_files = inst_46250;
var res_SINGLEQUOTE_ = inst_46253;
var res = inst_46254;
var files_not_loaded = inst_46256;
var dependencies_that_loaded = inst_46258;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46253,inst_46258,inst_46254,inst_46250,inst_46256,inst_46273,inst_46275,inst_46276,inst_46277,inst_46278,state_val_46337,c__25902__auto__,map__46182,map__46182__$1,opts,before_jsload,on_jsload,reload_dependents,map__46183,map__46183__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46253,inst_46258,inst_46254,inst_46250,inst_46256,inst_46273,inst_46275,inst_46276,inst_46277,inst_46278,state_val_46337,c__25902__auto__,map__46182,map__46182__$1,opts,before_jsload,on_jsload,reload_dependents,map__46183,map__46183__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46280 = setTimeout(inst_46279,(10));
var state_46336__$1 = (function (){var statearr_46407 = state_46336;
(statearr_46407[(33)] = inst_46273);

(statearr_46407[(34)] = inst_46278);

return statearr_46407;
})();
var statearr_46408_46474 = state_46336__$1;
(statearr_46408_46474[(2)] = inst_46280);

(statearr_46408_46474[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (16))){
var state_46336__$1 = state_46336;
var statearr_46409_46475 = state_46336__$1;
(statearr_46409_46475[(2)] = reload_dependents);

(statearr_46409_46475[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (38))){
var inst_46290 = (state_46336[(16)]);
var inst_46307 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46290);
var state_46336__$1 = state_46336;
var statearr_46410_46476 = state_46336__$1;
(statearr_46410_46476[(2)] = inst_46307);

(statearr_46410_46476[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (30))){
var state_46336__$1 = state_46336;
var statearr_46411_46477 = state_46336__$1;
(statearr_46411_46477[(2)] = null);

(statearr_46411_46477[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (10))){
var inst_46210 = (state_46336[(22)]);
var inst_46212 = cljs.core.chunked_seq_QMARK_.call(null,inst_46210);
var state_46336__$1 = state_46336;
if(inst_46212){
var statearr_46412_46478 = state_46336__$1;
(statearr_46412_46478[(1)] = (13));

} else {
var statearr_46413_46479 = state_46336__$1;
(statearr_46413_46479[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (18))){
var inst_46244 = (state_46336[(2)]);
var state_46336__$1 = state_46336;
if(cljs.core.truth_(inst_46244)){
var statearr_46414_46480 = state_46336__$1;
(statearr_46414_46480[(1)] = (19));

} else {
var statearr_46415_46481 = state_46336__$1;
(statearr_46415_46481[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (42))){
var state_46336__$1 = state_46336;
var statearr_46416_46482 = state_46336__$1;
(statearr_46416_46482[(2)] = null);

(statearr_46416_46482[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (37))){
var inst_46302 = (state_46336[(2)]);
var state_46336__$1 = state_46336;
var statearr_46417_46483 = state_46336__$1;
(statearr_46417_46483[(2)] = inst_46302);

(statearr_46417_46483[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46337 === (8))){
var inst_46197 = (state_46336[(8)]);
var inst_46210 = (state_46336[(22)]);
var inst_46210__$1 = cljs.core.seq.call(null,inst_46197);
var state_46336__$1 = (function (){var statearr_46418 = state_46336;
(statearr_46418[(22)] = inst_46210__$1);

return statearr_46418;
})();
if(inst_46210__$1){
var statearr_46419_46484 = state_46336__$1;
(statearr_46419_46484[(1)] = (10));

} else {
var statearr_46420_46485 = state_46336__$1;
(statearr_46420_46485[(1)] = (11));

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
});})(c__25902__auto__,map__46182,map__46182__$1,opts,before_jsload,on_jsload,reload_dependents,map__46183,map__46183__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__25881__auto__,c__25902__auto__,map__46182,map__46182__$1,opts,before_jsload,on_jsload,reload_dependents,map__46183,map__46183__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25882__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25882__auto____0 = (function (){
var statearr_46424 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46424[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__25882__auto__);

(statearr_46424[(1)] = (1));

return statearr_46424;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25882__auto____1 = (function (state_46336){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_46336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e46425){if((e46425 instanceof Object)){
var ex__25885__auto__ = e46425;
var statearr_46426_46486 = state_46336;
(statearr_46426_46486[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46487 = state_46336;
state_46336 = G__46487;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__25882__auto__ = function(state_46336){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25882__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25882__auto____1.call(this,state_46336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25882__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25882__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto__,map__46182,map__46182__$1,opts,before_jsload,on_jsload,reload_dependents,map__46183,map__46183__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__25904__auto__ = (function (){var statearr_46427 = f__25903__auto__.call(null);
(statearr_46427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto__);

return statearr_46427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto__,map__46182,map__46182__$1,opts,before_jsload,on_jsload,reload_dependents,map__46183,map__46183__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__25902__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__46490,link){
var map__46493 = p__46490;
var map__46493__$1 = ((((!((map__46493 == null)))?((((map__46493.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46493.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46493):map__46493);
var file = cljs.core.get.call(null,map__46493__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__46493,map__46493__$1,file){
return (function (p1__46488_SHARP_,p2__46489_SHARP_){
if(cljs.core._EQ_.call(null,p1__46488_SHARP_,p2__46489_SHARP_)){
return p1__46488_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__46493,map__46493__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__46499){
var map__46500 = p__46499;
var map__46500__$1 = ((((!((map__46500 == null)))?((((map__46500.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46500.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46500):map__46500);
var match_length = cljs.core.get.call(null,map__46500__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__46500__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__46495_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__46495_SHARP_);
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
var args46502 = [];
var len__24844__auto___46505 = arguments.length;
var i__24845__auto___46506 = (0);
while(true){
if((i__24845__auto___46506 < len__24844__auto___46505)){
args46502.push((arguments[i__24845__auto___46506]));

var G__46507 = (i__24845__auto___46506 + (1));
i__24845__auto___46506 = G__46507;
continue;
} else {
}
break;
}

var G__46504 = args46502.length;
switch (G__46504) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46502.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__46509_SHARP_,p2__46510_SHARP_){
return cljs.core.assoc.call(null,p1__46509_SHARP_,cljs.core.get.call(null,p2__46510_SHARP_,key),p2__46510_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__46511){
var map__46514 = p__46511;
var map__46514__$1 = ((((!((map__46514 == null)))?((((map__46514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46514):map__46514);
var f_data = map__46514__$1;
var file = cljs.core.get.call(null,map__46514__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__46516,files_msg){
var map__46523 = p__46516;
var map__46523__$1 = ((((!((map__46523 == null)))?((((map__46523.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46523.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46523):map__46523);
var opts = map__46523__$1;
var on_cssload = cljs.core.get.call(null,map__46523__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__46525_46529 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__46526_46530 = null;
var count__46527_46531 = (0);
var i__46528_46532 = (0);
while(true){
if((i__46528_46532 < count__46527_46531)){
var f_46533 = cljs.core._nth.call(null,chunk__46526_46530,i__46528_46532);
figwheel.client.file_reloading.reload_css_file.call(null,f_46533);

var G__46534 = seq__46525_46529;
var G__46535 = chunk__46526_46530;
var G__46536 = count__46527_46531;
var G__46537 = (i__46528_46532 + (1));
seq__46525_46529 = G__46534;
chunk__46526_46530 = G__46535;
count__46527_46531 = G__46536;
i__46528_46532 = G__46537;
continue;
} else {
var temp__4425__auto___46538 = cljs.core.seq.call(null,seq__46525_46529);
if(temp__4425__auto___46538){
var seq__46525_46539__$1 = temp__4425__auto___46538;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46525_46539__$1)){
var c__24589__auto___46540 = cljs.core.chunk_first.call(null,seq__46525_46539__$1);
var G__46541 = cljs.core.chunk_rest.call(null,seq__46525_46539__$1);
var G__46542 = c__24589__auto___46540;
var G__46543 = cljs.core.count.call(null,c__24589__auto___46540);
var G__46544 = (0);
seq__46525_46529 = G__46541;
chunk__46526_46530 = G__46542;
count__46527_46531 = G__46543;
i__46528_46532 = G__46544;
continue;
} else {
var f_46545 = cljs.core.first.call(null,seq__46525_46539__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_46545);

var G__46546 = cljs.core.next.call(null,seq__46525_46539__$1);
var G__46547 = null;
var G__46548 = (0);
var G__46549 = (0);
seq__46525_46529 = G__46546;
chunk__46526_46530 = G__46547;
count__46527_46531 = G__46548;
i__46528_46532 = G__46549;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__46523,map__46523__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__46523,map__46523__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1453744775956