// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs_demo.async');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.Uri');
goog.require('ajax.core');
goog.require('devcards.core');
goog.require('hickory.select');
goog.require('cljs.core.async');
goog.require('hickory.core');
goog.require('clojure.string');
cljs_demo.async.medical_marijuana_url = "https://data.colorado.gov/api/views/7wau-rnkf/rows.csv?accessType=DOWNLOAD";
/**
 * Wrap a GET request in a core.async channel
 */
cljs_demo.async.ajax_get = (function cljs_demo$async$ajax_get(url){
var c = cljs.core.async.chan.call(null);
ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (c){
return (function (p1__17304_SHARP_){
var c__8489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8489__auto__,c){
return (function (){
var f__8490__auto__ = (function (){var switch__8377__auto__ = ((function (c__8489__auto__,c){
return (function (state_17320){
var state_val_17321 = (state_17320[(1)]);
if((state_val_17321 === (1))){
var state_17320__$1 = state_17320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17320__$1,(2),c,p1__17304_SHARP_);
} else {
if((state_val_17321 === (2))){
var inst_17318 = (state_17320[(2)]);
var state_17320__$1 = state_17320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17320__$1,inst_17318);
} else {
return null;
}
}
});})(c__8489__auto__,c))
;
return ((function (switch__8377__auto__,c__8489__auto__,c){
return (function() {
var cljs_demo$async$ajax_get_$_state_machine__8378__auto__ = null;
var cljs_demo$async$ajax_get_$_state_machine__8378__auto____0 = (function (){
var statearr_17325 = [null,null,null,null,null,null,null];
(statearr_17325[(0)] = cljs_demo$async$ajax_get_$_state_machine__8378__auto__);

(statearr_17325[(1)] = (1));

return statearr_17325;
});
var cljs_demo$async$ajax_get_$_state_machine__8378__auto____1 = (function (state_17320){
while(true){
var ret_value__8379__auto__ = (function (){try{while(true){
var result__8380__auto__ = switch__8377__auto__.call(null,state_17320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8380__auto__;
}
break;
}
}catch (e17326){if((e17326 instanceof Object)){
var ex__8381__auto__ = e17326;
var statearr_17327_17329 = state_17320;
(statearr_17327_17329[(5)] = ex__8381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17330 = state_17320;
state_17320 = G__17330;
continue;
} else {
return ret_value__8379__auto__;
}
break;
}
});
cljs_demo$async$ajax_get_$_state_machine__8378__auto__ = function(state_17320){
switch(arguments.length){
case 0:
return cljs_demo$async$ajax_get_$_state_machine__8378__auto____0.call(this);
case 1:
return cljs_demo$async$ajax_get_$_state_machine__8378__auto____1.call(this,state_17320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_demo$async$ajax_get_$_state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_demo$async$ajax_get_$_state_machine__8378__auto____0;
cljs_demo$async$ajax_get_$_state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_demo$async$ajax_get_$_state_machine__8378__auto____1;
return cljs_demo$async$ajax_get_$_state_machine__8378__auto__;
})()
;})(switch__8377__auto__,c__8489__auto__,c))
})();
var state__8491__auto__ = (function (){var statearr_17328 = f__8490__auto__.call(null);
(statearr_17328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8489__auto__);

return statearr_17328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8491__auto__);
});})(c__8489__auto__,c))
);

return c__8489__auto__;
});})(c))
], null));

return c;
});
cljs_demo.async.parse_csv = (function cljs_demo$async$parse_csv(raw){
var lines = clojure.string.split_lines.call(null,raw);
var tokens = cljs.core.map.call(null,((function (lines){
return (function (p1__17331_SHARP_){
return clojure.string.split.call(null,p1__17331_SHARP_,/,/);
});})(lines))
,lines);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),cljs.core.first.call(null,tokens),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.rest.call(null,tokens)], null);
});
/**
 * Get a url and parse its successful response as csv
 * Return a core.async channel of parsed csv
 */
cljs_demo.async.ajax_get_csv = (function cljs_demo$async$ajax_get_csv(url){
var c = cljs.core.async.chan.call(null);
var c__8489__auto___17364 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8489__auto___17364,c){
return (function (){
var f__8490__auto__ = (function (){var switch__8377__auto__ = ((function (c__8489__auto___17364,c){
return (function (state_17355){
var state_val_17356 = (state_17355[(1)]);
if((state_val_17356 === (1))){
var inst_17348 = cljs_demo.async.ajax_get.call(null,url);
var state_17355__$1 = state_17355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17355__$1,(2),inst_17348);
} else {
if((state_val_17356 === (2))){
var inst_17350 = (state_17355[(2)]);
var inst_17351 = cljs_demo.async.parse_csv.call(null,inst_17350);
var state_17355__$1 = state_17355;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17355__$1,(3),c,inst_17351);
} else {
if((state_val_17356 === (3))){
var inst_17353 = (state_17355[(2)]);
var state_17355__$1 = state_17355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17355__$1,inst_17353);
} else {
return null;
}
}
}
});})(c__8489__auto___17364,c))
;
return ((function (switch__8377__auto__,c__8489__auto___17364,c){
return (function() {
var cljs_demo$async$ajax_get_csv_$_state_machine__8378__auto__ = null;
var cljs_demo$async$ajax_get_csv_$_state_machine__8378__auto____0 = (function (){
var statearr_17360 = [null,null,null,null,null,null,null];
(statearr_17360[(0)] = cljs_demo$async$ajax_get_csv_$_state_machine__8378__auto__);

(statearr_17360[(1)] = (1));

return statearr_17360;
});
var cljs_demo$async$ajax_get_csv_$_state_machine__8378__auto____1 = (function (state_17355){
while(true){
var ret_value__8379__auto__ = (function (){try{while(true){
var result__8380__auto__ = switch__8377__auto__.call(null,state_17355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8380__auto__;
}
break;
}
}catch (e17361){if((e17361 instanceof Object)){
var ex__8381__auto__ = e17361;
var statearr_17362_17365 = state_17355;
(statearr_17362_17365[(5)] = ex__8381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17366 = state_17355;
state_17355 = G__17366;
continue;
} else {
return ret_value__8379__auto__;
}
break;
}
});
cljs_demo$async$ajax_get_csv_$_state_machine__8378__auto__ = function(state_17355){
switch(arguments.length){
case 0:
return cljs_demo$async$ajax_get_csv_$_state_machine__8378__auto____0.call(this);
case 1:
return cljs_demo$async$ajax_get_csv_$_state_machine__8378__auto____1.call(this,state_17355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_demo$async$ajax_get_csv_$_state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_demo$async$ajax_get_csv_$_state_machine__8378__auto____0;
cljs_demo$async$ajax_get_csv_$_state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_demo$async$ajax_get_csv_$_state_machine__8378__auto____1;
return cljs_demo$async$ajax_get_csv_$_state_machine__8378__auto__;
})()
;})(switch__8377__auto__,c__8489__auto___17364,c))
})();
var state__8491__auto__ = (function (){var statearr_17363 = f__8490__auto__.call(null);
(statearr_17363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8489__auto___17364);

return statearr_17363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8491__auto__);
});})(c__8489__auto___17364,c))
);


return c;
});
/**
 * Get medical marijuana usage data as parsed CSV and update atom
 */
cljs_demo.async.get_mj_data = (function cljs_demo$async$get_mj_data(state_atom){
var c__8489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8489__auto__){
return (function (){
var f__8490__auto__ = (function (){var switch__8377__auto__ = ((function (c__8489__auto__){
return (function (state_17386){
var state_val_17387 = (state_17386[(1)]);
if((state_val_17387 === (1))){
var inst_17381 = cljs_demo.async.ajax_get_csv.call(null,cljs_demo.async.medical_marijuana_url);
var state_17386__$1 = state_17386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17386__$1,(2),inst_17381);
} else {
if((state_val_17387 === (2))){
var inst_17383 = (state_17386[(2)]);
var inst_17384 = cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"mj-data","mj-data",-1940689818),inst_17383);
var state_17386__$1 = state_17386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17386__$1,inst_17384);
} else {
return null;
}
}
});})(c__8489__auto__))
;
return ((function (switch__8377__auto__,c__8489__auto__){
return (function() {
var cljs_demo$async$get_mj_data_$_state_machine__8378__auto__ = null;
var cljs_demo$async$get_mj_data_$_state_machine__8378__auto____0 = (function (){
var statearr_17391 = [null,null,null,null,null,null,null];
(statearr_17391[(0)] = cljs_demo$async$get_mj_data_$_state_machine__8378__auto__);

(statearr_17391[(1)] = (1));

return statearr_17391;
});
var cljs_demo$async$get_mj_data_$_state_machine__8378__auto____1 = (function (state_17386){
while(true){
var ret_value__8379__auto__ = (function (){try{while(true){
var result__8380__auto__ = switch__8377__auto__.call(null,state_17386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8380__auto__;
}
break;
}
}catch (e17392){if((e17392 instanceof Object)){
var ex__8381__auto__ = e17392;
var statearr_17393_17395 = state_17386;
(statearr_17393_17395[(5)] = ex__8381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17396 = state_17386;
state_17386 = G__17396;
continue;
} else {
return ret_value__8379__auto__;
}
break;
}
});
cljs_demo$async$get_mj_data_$_state_machine__8378__auto__ = function(state_17386){
switch(arguments.length){
case 0:
return cljs_demo$async$get_mj_data_$_state_machine__8378__auto____0.call(this);
case 1:
return cljs_demo$async$get_mj_data_$_state_machine__8378__auto____1.call(this,state_17386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_demo$async$get_mj_data_$_state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_demo$async$get_mj_data_$_state_machine__8378__auto____0;
cljs_demo$async$get_mj_data_$_state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_demo$async$get_mj_data_$_state_machine__8378__auto____1;
return cljs_demo$async$get_mj_data_$_state_machine__8378__auto__;
})()
;})(switch__8377__auto__,c__8489__auto__))
})();
var state__8491__auto__ = (function (){var statearr_17394 = f__8490__auto__.call(null);
(statearr_17394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8489__auto__);

return statearr_17394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8491__auto__);
});})(c__8489__auto__))
);

return c__8489__auto__;
});
cljs_demo.async.mj_data_component = (function cljs_demo$async$mj_data_component(state_atom){
var temp__4423__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mj-data","mj-data",-1940689818)], null));
if(cljs.core.truth_(temp__4423__auto__)){
var map__17399 = temp__4423__auto__;
var map__17399__$1 = ((((!((map__17399 == null)))?((((map__17399.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17399.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17399):map__17399);
var header = cljs.core.get.call(null,map__17399__$1,new cljs.core.Keyword(null,"header","header",119441134));
var body = cljs.core.get.call(null,map__17399__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead>tr","thead>tr",-1341733367),cljs.core.map.call(null,((function (map__17399,map__17399__$1,header,body,temp__4423__auto__){
return (function (el){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),el], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),el], null));
});})(map__17399,map__17399__$1,header,body,temp__4423__auto__))
,header)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.map.call(null,((function (map__17399,map__17399__$1,header,body,temp__4423__auto__){
return (function (row){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.map.call(null,((function (map__17399,map__17399__$1,header,body,temp__4423__auto__){
return (function (el){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),el], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),el], null));
});})(map__17399,map__17399__$1,header,body,temp__4423__auto__))
,row)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first.call(null,row)], null));
});})(map__17399,map__17399__$1,header,body,temp__4423__auto__))
,body)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"No data has been retrieved"], null);
}
});
cljs_demo.async.mj_component = (function cljs_demo$async$mj_component(state_atom){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.medical-marijuana","div.medical-marijuana",1421251195),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs_demo.async.get_mj_data.call(null,state_atom);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null)], null),"Get Medical Marijuana Data"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.dissoc,new cljs.core.Keyword(null,"mj-data","mj-data",-1940689818));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null)], null),"Clear Data"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_demo.async.mj_data_component,state_atom], null)], null);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.async","cljs_demo.async",-237609859),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"# Async Programming","Using `core.async`, we can do asynchronous programming with **no callbacks**","`core.async` provides a _library_ that works like go's concurrency model in Clojure and Clojurescript","- Channels `(chan)`\n   - \"goroutines\" or green threads `(go)`\n   - Points of concurrency at `<!` (\"take\") and `>!` (\"put\")"),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.async","cljs_demo.async",-237609859),new cljs.core.Keyword(null,"async-example1-mj-data-card","async-example1-mj-data-card",1088854375)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"async-example1-mj-data-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"_A table of medical marijuana data stored at data.colorado.gov_",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof cljs_demo.async.t_cljs_demo$async17401 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
cljs_demo.async.t_cljs_demo$async17401 = (function (meta17402){
this.meta17402 = meta17402;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_demo.async.t_cljs_demo$async17401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17403,meta17402__$1){
var self__ = this;
var _17403__$1 = this;
return (new cljs_demo.async.t_cljs_demo$async17401(meta17402__$1));
});

cljs_demo.async.t_cljs_demo$async17401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17403){
var self__ = this;
var _17403__$1 = this;
return self__.meta17402;
});

cljs_demo.async.t_cljs_demo$async17401.prototype.devcards$core$IDevcardOptions$ = true;

cljs_demo.async.t_cljs_demo$async17401.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__14142__auto__,devcard_opts__14143__auto__){
var self__ = this;
var this__14142__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__14143__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__14161__auto__ = ((function (this__14142__auto____$1){
return (function (state_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_demo.async.mj_component,state_atom], null);
});})(this__14142__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__14161__auto__)){
return ((function (v__14161__auto__,this__14142__auto____$1){
return (function (data_atom__14162__auto__,owner__14163__auto__){
return reagent.core.as_element.call(null,v__14161__auto__.call(null,data_atom__14162__auto__,owner__14163__auto__));
});
;})(v__14161__auto__,this__14142__auto____$1))
} else {
return reagent.core.as_element.call(null,v__14161__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__14143__auto__))));
});

cljs_demo.async.t_cljs_demo$async17401.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta17402","meta17402",-954798538,null)], null);
});

cljs_demo.async.t_cljs_demo$async17401.cljs$lang$type = true;

cljs_demo.async.t_cljs_demo$async17401.cljs$lang$ctorStr = "cljs-demo.async/t_cljs_demo$async17401";

cljs_demo.async.t_cljs_demo$async17401.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs-demo.async/t_cljs_demo$async17401");
});

cljs_demo.async.__GT_t_cljs_demo$async17401 = (function cljs_demo$async$__GT_t_cljs_demo$async17401(meta17402){
return (new cljs_demo.async.t_cljs_demo$async17401(meta17402));
});

}

return (new cljs_demo.async.t_cljs_demo$async17401(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.async","cljs_demo.async",-237609859),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"## `mj-data-card` source",[cljs.core.str("\n```clojure\n"),cljs.core.str("(defn get-mj-data\n  \"Get medical marijuana usage data as parsed CSV and update atom\"\n  [state-atom]\n  (go\n    (let [parsed-resp (<! (ajax-get-csv medical-marijuana-url))]\n      (swap! state-atom assoc :mj-data parsed-resp))))"),cljs.core.str("\n```\n")].join('')),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.async","cljs_demo.async",-237609859),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"## `ajax-get-csv` and `ajax-get`",[cljs.core.str("\n```clojure\n"),cljs.core.str("(defn ajax-get-csv\n  \"Get a url and parse its successful response as csv\n   Return a core.async channel of parsed csv\"\n  [url]\n  (let [c (chan)]\n    (go (let [resp (<! (ajax-get url))]\n          (>! c (parse-csv resp))))\n    c))"),cljs.core.str("\n```\n")].join(''),[cljs.core.str("\n```clojure\n"),cljs.core.str("(defn ajax-get\n  \"Wrap a GET request in a core.async channel\"\n  [url]\n  (let [c (chan)] ; Create a core.async channel\n    (ajax/GET url {:handler #(go (>! c %))}) ; Place response on channel\n    c) ; return the channel\n  )"),cljs.core.str("\n```\n")].join('')),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
cljs_demo.async.starts_with = (function cljs_demo$async$starts_with(s,pre){
return ((cljs.core.count.call(null,pre) <= cljs.core.count.call(null,s))) && (cljs.core._EQ_.call(null,cljs.core.subs.call(null,s,(0),cljs.core.count.call(null,pre)),pre));
});
cljs_demo.async.parse_html = (function cljs_demo$async$parse_html(html){
return hickory.core.as_hickory.call(null,hickory.core.parse.call(null,html));
});
cljs_demo.async.select_urls = (function cljs_demo$async$select_urls(dom){
var anchors = hickory.select.select.call(null,hickory.select.and.call(null,hickory.select.tag.call(null,new cljs.core.Keyword(null,"a","a",-2123407586)),hickory.select.attr.call(null,new cljs.core.Keyword(null,"href","href",-793805698))),dom);
return cljs.core.map.call(null,((function (anchors){
return (function (p1__17405_SHARP_){
return new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__17405_SHARP_));
});})(anchors))
,anchors);
});
cljs_demo.async.split_url = (function cljs_demo$async$split_url(url){
var uri = (new goog.Uri(url));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(uri.getScheme()),cljs.core.str("://"),cljs.core.str(uri.getDomain())].join(''),uri.getPath()], null);
});
cljs_demo.async.standardize_urls = (function cljs_demo$async$standardize_urls(base,urls){
var vec__17407 = cljs_demo.async.split_url.call(null,base);
var host = cljs.core.nth.call(null,vec__17407,(0),null);
var path = cljs.core.nth.call(null,vec__17407,(1),null);
return cljs.core.map.call(null,((function (vec__17407,host,path){
return (function (s){
if(cljs.core.truth_(cljs_demo.async.starts_with.call(null,s,"http"))){
return s;
} else {
if(cljs.core.truth_(cljs_demo.async.starts_with.call(null,s,"//"))){
return [cljs.core.str("http:"),cljs.core.str(s)].join('');
} else {
if(cljs.core.truth_(cljs_demo.async.starts_with.call(null,s,"/"))){
return [cljs.core.str(host),cljs.core.str(s)].join('');
} else {
return [cljs.core.str(host),cljs.core.str(path),cljs.core.str(s)].join('');

}
}
}
});})(vec__17407,host,path))
,urls);
});
/**
 * Query a url and parse out urls inside of it
 */
cljs_demo.async.crawl_url = (function cljs_demo$async$crawl_url(url){
var c = cljs.core.async.chan.call(null);
var c__8489__auto___17444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8489__auto___17444,c){
return (function (){
var f__8490__auto__ = (function (){var switch__8377__auto__ = ((function (c__8489__auto___17444,c){
return (function (state_17435){
var state_val_17436 = (state_17435[(1)]);
if((state_val_17436 === (1))){
var inst_17426 = cljs_demo.async.ajax_get.call(null,url);
var state_17435__$1 = state_17435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17435__$1,(2),inst_17426);
} else {
if((state_val_17436 === (2))){
var inst_17428 = (state_17435[(2)]);
var inst_17429 = cljs_demo.async.parse_html.call(null,inst_17428);
var inst_17430 = cljs_demo.async.select_urls.call(null,inst_17429);
var inst_17431 = cljs_demo.async.standardize_urls.call(null,url,inst_17430);
var inst_17432 = cljs.core.set.call(null,inst_17431);
var inst_17433 = cljs.core.async.onto_chan.call(null,c,inst_17432);
var state_17435__$1 = state_17435;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17435__$1,inst_17433);
} else {
return null;
}
}
});})(c__8489__auto___17444,c))
;
return ((function (switch__8377__auto__,c__8489__auto___17444,c){
return (function() {
var cljs_demo$async$crawl_url_$_state_machine__8378__auto__ = null;
var cljs_demo$async$crawl_url_$_state_machine__8378__auto____0 = (function (){
var statearr_17440 = [null,null,null,null,null,null,null];
(statearr_17440[(0)] = cljs_demo$async$crawl_url_$_state_machine__8378__auto__);

(statearr_17440[(1)] = (1));

return statearr_17440;
});
var cljs_demo$async$crawl_url_$_state_machine__8378__auto____1 = (function (state_17435){
while(true){
var ret_value__8379__auto__ = (function (){try{while(true){
var result__8380__auto__ = switch__8377__auto__.call(null,state_17435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8380__auto__;
}
break;
}
}catch (e17441){if((e17441 instanceof Object)){
var ex__8381__auto__ = e17441;
var statearr_17442_17445 = state_17435;
(statearr_17442_17445[(5)] = ex__8381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17446 = state_17435;
state_17435 = G__17446;
continue;
} else {
return ret_value__8379__auto__;
}
break;
}
});
cljs_demo$async$crawl_url_$_state_machine__8378__auto__ = function(state_17435){
switch(arguments.length){
case 0:
return cljs_demo$async$crawl_url_$_state_machine__8378__auto____0.call(this);
case 1:
return cljs_demo$async$crawl_url_$_state_machine__8378__auto____1.call(this,state_17435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_demo$async$crawl_url_$_state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_demo$async$crawl_url_$_state_machine__8378__auto____0;
cljs_demo$async$crawl_url_$_state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_demo$async$crawl_url_$_state_machine__8378__auto____1;
return cljs_demo$async$crawl_url_$_state_machine__8378__auto__;
})()
;})(switch__8377__auto__,c__8489__auto___17444,c))
})();
var state__8491__auto__ = (function (){var statearr_17443 = f__8490__auto__.call(null);
(statearr_17443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8489__auto___17444);

return statearr_17443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8491__auto__);
});})(c__8489__auto___17444,c))
);


return c;
});
/**
 * Recursively crawl urls `n` levels deep
 */
cljs_demo.async.web_crawler = (function cljs_demo$async$web_crawler(url,n,log){
cljs.core.swap_BANG_.call(null,log,cljs.core.conj,url);

if((n > (0))){
var urls = cljs_demo.async.crawl_url.call(null,url);
var c__8489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8489__auto__,urls){
return (function (){
var f__8490__auto__ = (function (){var switch__8377__auto__ = ((function (c__8489__auto__,urls){
return (function (state_17497){
var state_val_17498 = (state_17497[(1)]);
if((state_val_17498 === (1))){
var state_17497__$1 = state_17497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17497__$1,(2),urls);
} else {
if((state_val_17498 === (2))){
var inst_17482 = (state_17497[(2)]);
var inst_17483 = inst_17482;
var state_17497__$1 = (function (){var statearr_17499 = state_17497;
(statearr_17499[(7)] = inst_17483);

return statearr_17499;
})();
var statearr_17500_17515 = state_17497__$1;
(statearr_17500_17515[(2)] = null);

(statearr_17500_17515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17498 === (3))){
var inst_17483 = (state_17497[(7)]);
var state_17497__$1 = state_17497;
if(cljs.core.truth_(inst_17483)){
var statearr_17501_17516 = state_17497__$1;
(statearr_17501_17516[(1)] = (5));

} else {
var statearr_17502_17517 = state_17497__$1;
(statearr_17502_17517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17498 === (4))){
var inst_17495 = (state_17497[(2)]);
var state_17497__$1 = state_17497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17497__$1,inst_17495);
} else {
if((state_val_17498 === (5))){
var inst_17483 = (state_17497[(7)]);
var inst_17486 = (n - (1));
var inst_17487 = cljs_demo$async$web_crawler.call(null,inst_17483,inst_17486,log);
var state_17497__$1 = (function (){var statearr_17503 = state_17497;
(statearr_17503[(8)] = inst_17487);

return statearr_17503;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17497__$1,(8),urls);
} else {
if((state_val_17498 === (6))){
var state_17497__$1 = state_17497;
var statearr_17504_17518 = state_17497__$1;
(statearr_17504_17518[(2)] = null);

(statearr_17504_17518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17498 === (7))){
var inst_17493 = (state_17497[(2)]);
var state_17497__$1 = state_17497;
var statearr_17505_17519 = state_17497__$1;
(statearr_17505_17519[(2)] = inst_17493);

(statearr_17505_17519[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17498 === (8))){
var inst_17489 = (state_17497[(2)]);
var inst_17483 = inst_17489;
var state_17497__$1 = (function (){var statearr_17506 = state_17497;
(statearr_17506[(7)] = inst_17483);

return statearr_17506;
})();
var statearr_17507_17520 = state_17497__$1;
(statearr_17507_17520[(2)] = null);

(statearr_17507_17520[(1)] = (3));


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
});})(c__8489__auto__,urls))
;
return ((function (switch__8377__auto__,c__8489__auto__,urls){
return (function() {
var cljs_demo$async$web_crawler_$_state_machine__8378__auto__ = null;
var cljs_demo$async$web_crawler_$_state_machine__8378__auto____0 = (function (){
var statearr_17511 = [null,null,null,null,null,null,null,null,null];
(statearr_17511[(0)] = cljs_demo$async$web_crawler_$_state_machine__8378__auto__);

(statearr_17511[(1)] = (1));

return statearr_17511;
});
var cljs_demo$async$web_crawler_$_state_machine__8378__auto____1 = (function (state_17497){
while(true){
var ret_value__8379__auto__ = (function (){try{while(true){
var result__8380__auto__ = switch__8377__auto__.call(null,state_17497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8380__auto__;
}
break;
}
}catch (e17512){if((e17512 instanceof Object)){
var ex__8381__auto__ = e17512;
var statearr_17513_17521 = state_17497;
(statearr_17513_17521[(5)] = ex__8381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17522 = state_17497;
state_17497 = G__17522;
continue;
} else {
return ret_value__8379__auto__;
}
break;
}
});
cljs_demo$async$web_crawler_$_state_machine__8378__auto__ = function(state_17497){
switch(arguments.length){
case 0:
return cljs_demo$async$web_crawler_$_state_machine__8378__auto____0.call(this);
case 1:
return cljs_demo$async$web_crawler_$_state_machine__8378__auto____1.call(this,state_17497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_demo$async$web_crawler_$_state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_demo$async$web_crawler_$_state_machine__8378__auto____0;
cljs_demo$async$web_crawler_$_state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_demo$async$web_crawler_$_state_machine__8378__auto____1;
return cljs_demo$async$web_crawler_$_state_machine__8378__auto__;
})()
;})(switch__8377__auto__,c__8489__auto__,urls))
})();
var state__8491__auto__ = (function (){var statearr_17514 = f__8490__auto__.call(null);
(statearr_17514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8489__auto__);

return statearr_17514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8491__auto__);
});})(c__8489__auto__,urls))
);

return c__8489__auto__;
} else {
return null;
}
});
cljs_demo.async.web_crawler_component = (function cljs_demo$async$web_crawler_component(url_atom,depth_atom,log_atom){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Url to query: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,url_atom),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__17523_SHARP_){
return cljs.core.reset_BANG_.call(null,url_atom,p1__17523_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Depth to go: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,depth_atom),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__17524_SHARP_){
return cljs.core.reset_BANG_.call(null,depth_atom,p1__17524_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_.call(null,log_atom,cljs.core.PersistentVector.EMPTY);

return cljs_demo.async.web_crawler.call(null,cljs.core.deref.call(null,url_atom),cljs.core.deref.call(null,depth_atom),log_atom);
})], null),"Crawl!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Crawled URLs:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5440__auto__ = (function cljs_demo$async$web_crawler_component_$_iter__17529(s__17530){
return (new cljs.core.LazySeq(null,(function (){
var s__17530__$1 = s__17530;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17530__$1);
if(temp__4425__auto__){
var s__17530__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17530__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__17530__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__17532 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__17531 = (0);
while(true){
if((i__17531 < size__5439__auto__)){
var log = cljs.core._nth.call(null,c__5438__auto__,i__17531);
cljs.core.chunk_append.call(null,b__17532,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),log], null));

var G__17533 = (i__17531 + (1));
i__17531 = G__17533;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17532),cljs_demo$async$web_crawler_component_$_iter__17529.call(null,cljs.core.chunk_rest.call(null,s__17530__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17532),null);
}
} else {
var log = cljs.core.first.call(null,s__17530__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),log], null),cljs_demo$async$web_crawler_component_$_iter__17529.call(null,cljs.core.rest.call(null,s__17530__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__.call(null,cljs.core.deref.call(null,log_atom));
})()], null)], null)], null);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.async","cljs_demo.async",-237609859),new cljs.core.Keyword(null,"async-example2-web-crawler","async-example2-web-crawler",-30701013)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"async-example2-web-crawler",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# Web Crawler\n  _Query a site, parse out urls referenced, and crawl them_",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof cljs_demo.async.t_cljs_demo$async17534 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
cljs_demo.async.t_cljs_demo$async17534 = (function (meta17535){
this.meta17535 = meta17535;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_demo.async.t_cljs_demo$async17534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17536,meta17535__$1){
var self__ = this;
var _17536__$1 = this;
return (new cljs_demo.async.t_cljs_demo$async17534(meta17535__$1));
});

cljs_demo.async.t_cljs_demo$async17534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17536){
var self__ = this;
var _17536__$1 = this;
return self__.meta17535;
});

cljs_demo.async.t_cljs_demo$async17534.prototype.devcards$core$IDevcardOptions$ = true;

cljs_demo.async.t_cljs_demo$async17534.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__14142__auto__,devcard_opts__14143__auto__){
var self__ = this;
var this__14142__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__14143__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__14161__auto__ = ((function (this__14142__auto____$1){
return (function (state_atom,_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_demo.async.web_crawler_component,reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url","url",276297046)], null)),reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"depth","depth",1768663640)], null)),reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"log","log",-1595516004)], null))], null);
});})(this__14142__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__14161__auto__)){
return ((function (v__14161__auto__,this__14142__auto____$1){
return (function (data_atom__14162__auto__,owner__14163__auto__){
return reagent.core.as_element.call(null,v__14161__auto__.call(null,data_atom__14162__auto__,owner__14163__auto__));
});
;})(v__14161__auto__,this__14142__auto____$1))
} else {
return reagent.core.as_element.call(null,v__14161__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__14143__auto__))));
});

cljs_demo.async.t_cljs_demo$async17534.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta17535","meta17535",1948636629,null)], null);
});

cljs_demo.async.t_cljs_demo$async17534.cljs$lang$type = true;

cljs_demo.async.t_cljs_demo$async17534.cljs$lang$ctorStr = "cljs-demo.async/t_cljs_demo$async17534";

cljs_demo.async.t_cljs_demo$async17534.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs-demo.async/t_cljs_demo$async17534");
});

cljs_demo.async.__GT_t_cljs_demo$async17534 = (function cljs_demo$async$__GT_t_cljs_demo$async17534(meta17535){
return (new cljs_demo.async.t_cljs_demo$async17534(meta17535));
});

}

return (new cljs_demo.async.t_cljs_demo$async17534(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),"http://joneisen.works",new cljs.core.Keyword(null,"depth","depth",1768663640),(1),new cljs.core.Keyword(null,"log","log",-1595516004),cljs.core.PersistentVector.EMPTY], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.async","cljs_demo.async",-237609859),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"# Web Crawler","Query a site, parse out urls referenced and crawl them.\n   Go `n` levels deep.",[cljs.core.str("\n```clojure\n"),cljs.core.str("(defn web-crawler\n  \"Recursively crawl urls `n` levels deep\"\n  [url n log]\n  (swap! log conj url)\n  (if (> n 0)                           ; Recursive exit criteria\n    (let [urls (crawl-url url)]         ; Get urls referenced in page (channel)\n      (go-loop [url (<! urls)]          ; Loop through urls\n        (when url                       ; Check for no more urls\n          (web-crawler url (- n 1) log) ; Recursively crawl\n          (recur (<! urls))))           ; Loop again\n      )))"),cljs.core.str("\n```\n")].join('')),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.async","cljs_demo.async",-237609859),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,[cljs.core.str("\n```clojure\n"),cljs.core.str("(defn crawl-url\n  \"Query a url and parse out urls inside of it\"\n  [url]\n  (let [c (chan)]\n     ;; ->>: Thread macro allows pipelining functions\n    (go (->> (<! (ajax-get url)) ; get the page\n             parse-html\n             select-urls         ; get a list of urls in page\n             (standardize-urls url)\n             set                 ; convert to a set (removing duplicates)\n             (async/onto-chan c)) ; put all urls on the output channel\n        )\n    c) ; return the channel\n  )"),cljs.core.str("\n```\n")].join('')),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.async","cljs_demo.async",-237609859),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"[Next: Closing](#!/cljs_demo.closing)"),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));

//# sourceMappingURL=async.js.map?rel=1453863899821