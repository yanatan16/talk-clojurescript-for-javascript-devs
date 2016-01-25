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
return (function (p1__17310_SHARP_){
var c__8489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8489__auto__,c){
return (function (){
var f__8490__auto__ = (function (){var switch__8377__auto__ = ((function (c__8489__auto__,c){
return (function (state_17326){
var state_val_17327 = (state_17326[(1)]);
if((state_val_17327 === (1))){
var state_17326__$1 = state_17326;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17326__$1,(2),c,p1__17310_SHARP_);
} else {
if((state_val_17327 === (2))){
var inst_17324 = (state_17326[(2)]);
var state_17326__$1 = state_17326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17326__$1,inst_17324);
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
var statearr_17331 = [null,null,null,null,null,null,null];
(statearr_17331[(0)] = cljs_demo$async$ajax_get_$_state_machine__8378__auto__);

(statearr_17331[(1)] = (1));

return statearr_17331;
});
var cljs_demo$async$ajax_get_$_state_machine__8378__auto____1 = (function (state_17326){
while(true){
var ret_value__8379__auto__ = (function (){try{while(true){
var result__8380__auto__ = switch__8377__auto__.call(null,state_17326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8380__auto__;
}
break;
}
}catch (e17332){if((e17332 instanceof Object)){
var ex__8381__auto__ = e17332;
var statearr_17333_17335 = state_17326;
(statearr_17333_17335[(5)] = ex__8381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17336 = state_17326;
state_17326 = G__17336;
continue;
} else {
return ret_value__8379__auto__;
}
break;
}
});
cljs_demo$async$ajax_get_$_state_machine__8378__auto__ = function(state_17326){
switch(arguments.length){
case 0:
return cljs_demo$async$ajax_get_$_state_machine__8378__auto____0.call(this);
case 1:
return cljs_demo$async$ajax_get_$_state_machine__8378__auto____1.call(this,state_17326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_demo$async$ajax_get_$_state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_demo$async$ajax_get_$_state_machine__8378__auto____0;
cljs_demo$async$ajax_get_$_state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_demo$async$ajax_get_$_state_machine__8378__auto____1;
return cljs_demo$async$ajax_get_$_state_machine__8378__auto__;
})()
;})(switch__8377__auto__,c__8489__auto__,c))
})();
var state__8491__auto__ = (function (){var statearr_17334 = f__8490__auto__.call(null);
(statearr_17334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8489__auto__);

return statearr_17334;
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
return (function (p1__17337_SHARP_){
return clojure.string.split.call(null,p1__17337_SHARP_,/,/);
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
var c__8489__auto___17370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8489__auto___17370,c){
return (function (){
var f__8490__auto__ = (function (){var switch__8377__auto__ = ((function (c__8489__auto___17370,c){
return (function (state_17361){
var state_val_17362 = (state_17361[(1)]);
if((state_val_17362 === (1))){
var inst_17354 = cljs_demo.async.ajax_get.call(null,url);
var state_17361__$1 = state_17361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17361__$1,(2),inst_17354);
} else {
if((state_val_17362 === (2))){
var inst_17356 = (state_17361[(2)]);
var inst_17357 = cljs_demo.async.parse_csv.call(null,inst_17356);
var state_17361__$1 = state_17361;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17361__$1,(3),c,inst_17357);
} else {
if((state_val_17362 === (3))){
var inst_17359 = (state_17361[(2)]);
var state_17361__$1 = state_17361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17361__$1,inst_17359);
} else {
return null;
}
}
}
});})(c__8489__auto___17370,c))
;
return ((function (switch__8377__auto__,c__8489__auto___17370,c){
return (function() {
var cljs_demo$async$ajax_get_csv_$_state_machine__8378__auto__ = null;
var cljs_demo$async$ajax_get_csv_$_state_machine__8378__auto____0 = (function (){
var statearr_17366 = [null,null,null,null,null,null,null];
(statearr_17366[(0)] = cljs_demo$async$ajax_get_csv_$_state_machine__8378__auto__);

(statearr_17366[(1)] = (1));

return statearr_17366;
});
var cljs_demo$async$ajax_get_csv_$_state_machine__8378__auto____1 = (function (state_17361){
while(true){
var ret_value__8379__auto__ = (function (){try{while(true){
var result__8380__auto__ = switch__8377__auto__.call(null,state_17361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8380__auto__;
}
break;
}
}catch (e17367){if((e17367 instanceof Object)){
var ex__8381__auto__ = e17367;
var statearr_17368_17371 = state_17361;
(statearr_17368_17371[(5)] = ex__8381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17372 = state_17361;
state_17361 = G__17372;
continue;
} else {
return ret_value__8379__auto__;
}
break;
}
});
cljs_demo$async$ajax_get_csv_$_state_machine__8378__auto__ = function(state_17361){
switch(arguments.length){
case 0:
return cljs_demo$async$ajax_get_csv_$_state_machine__8378__auto____0.call(this);
case 1:
return cljs_demo$async$ajax_get_csv_$_state_machine__8378__auto____1.call(this,state_17361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_demo$async$ajax_get_csv_$_state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_demo$async$ajax_get_csv_$_state_machine__8378__auto____0;
cljs_demo$async$ajax_get_csv_$_state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_demo$async$ajax_get_csv_$_state_machine__8378__auto____1;
return cljs_demo$async$ajax_get_csv_$_state_machine__8378__auto__;
})()
;})(switch__8377__auto__,c__8489__auto___17370,c))
})();
var state__8491__auto__ = (function (){var statearr_17369 = f__8490__auto__.call(null);
(statearr_17369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8489__auto___17370);

return statearr_17369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8491__auto__);
});})(c__8489__auto___17370,c))
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
return (function (state_17392){
var state_val_17393 = (state_17392[(1)]);
if((state_val_17393 === (1))){
var inst_17387 = cljs_demo.async.ajax_get_csv.call(null,cljs_demo.async.medical_marijuana_url);
var state_17392__$1 = state_17392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17392__$1,(2),inst_17387);
} else {
if((state_val_17393 === (2))){
var inst_17389 = (state_17392[(2)]);
var inst_17390 = cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"mj-data","mj-data",-1940689818),inst_17389);
var state_17392__$1 = state_17392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17392__$1,inst_17390);
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
var statearr_17397 = [null,null,null,null,null,null,null];
(statearr_17397[(0)] = cljs_demo$async$get_mj_data_$_state_machine__8378__auto__);

(statearr_17397[(1)] = (1));

return statearr_17397;
});
var cljs_demo$async$get_mj_data_$_state_machine__8378__auto____1 = (function (state_17392){
while(true){
var ret_value__8379__auto__ = (function (){try{while(true){
var result__8380__auto__ = switch__8377__auto__.call(null,state_17392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8380__auto__;
}
break;
}
}catch (e17398){if((e17398 instanceof Object)){
var ex__8381__auto__ = e17398;
var statearr_17399_17401 = state_17392;
(statearr_17399_17401[(5)] = ex__8381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17402 = state_17392;
state_17392 = G__17402;
continue;
} else {
return ret_value__8379__auto__;
}
break;
}
});
cljs_demo$async$get_mj_data_$_state_machine__8378__auto__ = function(state_17392){
switch(arguments.length){
case 0:
return cljs_demo$async$get_mj_data_$_state_machine__8378__auto____0.call(this);
case 1:
return cljs_demo$async$get_mj_data_$_state_machine__8378__auto____1.call(this,state_17392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_demo$async$get_mj_data_$_state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_demo$async$get_mj_data_$_state_machine__8378__auto____0;
cljs_demo$async$get_mj_data_$_state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_demo$async$get_mj_data_$_state_machine__8378__auto____1;
return cljs_demo$async$get_mj_data_$_state_machine__8378__auto__;
})()
;})(switch__8377__auto__,c__8489__auto__))
})();
var state__8491__auto__ = (function (){var statearr_17400 = f__8490__auto__.call(null);
(statearr_17400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8489__auto__);

return statearr_17400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8491__auto__);
});})(c__8489__auto__))
);

return c__8489__auto__;
});
cljs_demo.async.mj_data_component = (function cljs_demo$async$mj_data_component(state_atom){
var temp__4423__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mj-data","mj-data",-1940689818)], null));
if(cljs.core.truth_(temp__4423__auto__)){
var map__17405 = temp__4423__auto__;
var map__17405__$1 = ((((!((map__17405 == null)))?((((map__17405.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17405.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17405):map__17405);
var header = cljs.core.get.call(null,map__17405__$1,new cljs.core.Keyword(null,"header","header",119441134));
var body = cljs.core.get.call(null,map__17405__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead>tr","thead>tr",-1341733367),cljs.core.map.call(null,((function (map__17405,map__17405__$1,header,body,temp__4423__auto__){
return (function (el){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),el], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),el], null));
});})(map__17405,map__17405__$1,header,body,temp__4423__auto__))
,header)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.map.call(null,((function (map__17405,map__17405__$1,header,body,temp__4423__auto__){
return (function (row){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.map.call(null,((function (map__17405,map__17405__$1,header,body,temp__4423__auto__){
return (function (el){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),el], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),el], null));
});})(map__17405,map__17405__$1,header,body,temp__4423__auto__))
,row)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first.call(null,row)], null));
});})(map__17405,map__17405__$1,header,body,temp__4423__auto__))
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
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"# Async Programming","Using `core.async`, we can do asynchronous programming with **no callbacks**","`core.async` provides a _library_ that works like go's concurrency model in Clojure and Clojurescript"),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.async","cljs_demo.async",-237609859),new cljs.core.Keyword(null,"mj-data-card","mj-data-card",-2087901355)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"mj-data-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof cljs_demo.async.t_cljs_demo$async17407 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
cljs_demo.async.t_cljs_demo$async17407 = (function (meta17408){
this.meta17408 = meta17408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_demo.async.t_cljs_demo$async17407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17409,meta17408__$1){
var self__ = this;
var _17409__$1 = this;
return (new cljs_demo.async.t_cljs_demo$async17407(meta17408__$1));
});

cljs_demo.async.t_cljs_demo$async17407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17409){
var self__ = this;
var _17409__$1 = this;
return self__.meta17408;
});

cljs_demo.async.t_cljs_demo$async17407.prototype.devcards$core$IDevcardOptions$ = true;

cljs_demo.async.t_cljs_demo$async17407.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__14142__auto__,devcard_opts__14143__auto__){
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

cljs_demo.async.t_cljs_demo$async17407.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta17408","meta17408",-843726120,null)], null);
});

cljs_demo.async.t_cljs_demo$async17407.cljs$lang$type = true;

cljs_demo.async.t_cljs_demo$async17407.cljs$lang$ctorStr = "cljs-demo.async/t_cljs_demo$async17407";

cljs_demo.async.t_cljs_demo$async17407.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs-demo.async/t_cljs_demo$async17407");
});

cljs_demo.async.__GT_t_cljs_demo$async17407 = (function cljs_demo$async$__GT_t_cljs_demo$async17407(meta17408){
return (new cljs_demo.async.t_cljs_demo$async17407(meta17408));
});

}

return (new cljs_demo.async.t_cljs_demo$async17407(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.async","cljs_demo.async",-237609859),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"## `mj-data-card` source",[cljs.core.str("\n```clojure\n"),cljs.core.str("(defn ajax-get\n  \"Wrap a GET request in a core.async channel\"\n  [url]\n  (let [c (chan)] ; Create a core.async channel\n    (ajax/GET url {:handler #(go (>! c %))}) ; Place response on channel\n    c) ; return the channel\n  )"),cljs.core.str("\n```\n")].join(''),[cljs.core.str("\n```clojure\n"),cljs.core.str("(defn ajax-get-csv\n  \"Get a url and parse its successful response as csv\n   Return a core.async channel of parsed csv\"\n  [url]\n  (let [c (chan)]\n    (go (let [resp (<! (ajax-get url))]\n          (>! c (parse-csv resp))))\n    c))"),cljs.core.str("\n```\n")].join(''),[cljs.core.str("\n```clojure\n"),cljs.core.str("(defn get-mj-data\n  \"Get medical marijuana usage data as parsed CSV and update atom\"\n  [state-atom]\n  (go\n    (let [parsed-resp (<! (ajax-get-csv medical-marijuana-url))]\n      (swap! state-atom assoc :mj-data parsed-resp))))"),cljs.core.str("\n```\n")].join('')),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
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
return (function (p1__17411_SHARP_){
return new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__17411_SHARP_));
});})(anchors))
,anchors);
});
cljs_demo.async.split_url = (function cljs_demo$async$split_url(url){
var uri = (new goog.Uri(url));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(uri.getScheme()),cljs.core.str("://"),cljs.core.str(uri.getDomain())].join(''),uri.getPath()], null);
});
cljs_demo.async.standardize_urls = (function cljs_demo$async$standardize_urls(base,urls){
var vec__17413 = cljs_demo.async.split_url.call(null,base);
var host = cljs.core.nth.call(null,vec__17413,(0),null);
var path = cljs.core.nth.call(null,vec__17413,(1),null);
return cljs.core.map.call(null,((function (vec__17413,host,path){
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
});})(vec__17413,host,path))
,urls);
});
/**
 * Query a url and parse out urls inside of it
 */
cljs_demo.async.crawl_url = (function cljs_demo$async$crawl_url(url){
var c = cljs.core.async.chan.call(null);
var c__8489__auto___17450 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8489__auto___17450,c){
return (function (){
var f__8490__auto__ = (function (){var switch__8377__auto__ = ((function (c__8489__auto___17450,c){
return (function (state_17441){
var state_val_17442 = (state_17441[(1)]);
if((state_val_17442 === (1))){
var inst_17432 = cljs_demo.async.ajax_get.call(null,url);
var state_17441__$1 = state_17441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17441__$1,(2),inst_17432);
} else {
if((state_val_17442 === (2))){
var inst_17434 = (state_17441[(2)]);
var inst_17435 = cljs_demo.async.parse_html.call(null,inst_17434);
var inst_17436 = cljs_demo.async.select_urls.call(null,inst_17435);
var inst_17437 = cljs_demo.async.standardize_urls.call(null,url,inst_17436);
var inst_17438 = cljs.core.set.call(null,inst_17437);
var inst_17439 = cljs.core.async.onto_chan.call(null,c,inst_17438);
var state_17441__$1 = state_17441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17441__$1,inst_17439);
} else {
return null;
}
}
});})(c__8489__auto___17450,c))
;
return ((function (switch__8377__auto__,c__8489__auto___17450,c){
return (function() {
var cljs_demo$async$crawl_url_$_state_machine__8378__auto__ = null;
var cljs_demo$async$crawl_url_$_state_machine__8378__auto____0 = (function (){
var statearr_17446 = [null,null,null,null,null,null,null];
(statearr_17446[(0)] = cljs_demo$async$crawl_url_$_state_machine__8378__auto__);

(statearr_17446[(1)] = (1));

return statearr_17446;
});
var cljs_demo$async$crawl_url_$_state_machine__8378__auto____1 = (function (state_17441){
while(true){
var ret_value__8379__auto__ = (function (){try{while(true){
var result__8380__auto__ = switch__8377__auto__.call(null,state_17441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8380__auto__;
}
break;
}
}catch (e17447){if((e17447 instanceof Object)){
var ex__8381__auto__ = e17447;
var statearr_17448_17451 = state_17441;
(statearr_17448_17451[(5)] = ex__8381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17452 = state_17441;
state_17441 = G__17452;
continue;
} else {
return ret_value__8379__auto__;
}
break;
}
});
cljs_demo$async$crawl_url_$_state_machine__8378__auto__ = function(state_17441){
switch(arguments.length){
case 0:
return cljs_demo$async$crawl_url_$_state_machine__8378__auto____0.call(this);
case 1:
return cljs_demo$async$crawl_url_$_state_machine__8378__auto____1.call(this,state_17441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_demo$async$crawl_url_$_state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_demo$async$crawl_url_$_state_machine__8378__auto____0;
cljs_demo$async$crawl_url_$_state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_demo$async$crawl_url_$_state_machine__8378__auto____1;
return cljs_demo$async$crawl_url_$_state_machine__8378__auto__;
})()
;})(switch__8377__auto__,c__8489__auto___17450,c))
})();
var state__8491__auto__ = (function (){var statearr_17449 = f__8490__auto__.call(null);
(statearr_17449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8489__auto___17450);

return statearr_17449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8491__auto__);
});})(c__8489__auto___17450,c))
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
return (function (state_17503){
var state_val_17504 = (state_17503[(1)]);
if((state_val_17504 === (1))){
var state_17503__$1 = state_17503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17503__$1,(2),urls);
} else {
if((state_val_17504 === (2))){
var inst_17488 = (state_17503[(2)]);
var inst_17489 = inst_17488;
var state_17503__$1 = (function (){var statearr_17505 = state_17503;
(statearr_17505[(7)] = inst_17489);

return statearr_17505;
})();
var statearr_17506_17521 = state_17503__$1;
(statearr_17506_17521[(2)] = null);

(statearr_17506_17521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17504 === (3))){
var inst_17489 = (state_17503[(7)]);
var state_17503__$1 = state_17503;
if(cljs.core.truth_(inst_17489)){
var statearr_17507_17522 = state_17503__$1;
(statearr_17507_17522[(1)] = (5));

} else {
var statearr_17508_17523 = state_17503__$1;
(statearr_17508_17523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17504 === (4))){
var inst_17501 = (state_17503[(2)]);
var state_17503__$1 = state_17503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17503__$1,inst_17501);
} else {
if((state_val_17504 === (5))){
var inst_17489 = (state_17503[(7)]);
var inst_17492 = (n - (1));
var inst_17493 = cljs_demo$async$web_crawler.call(null,inst_17489,inst_17492,log);
var state_17503__$1 = (function (){var statearr_17509 = state_17503;
(statearr_17509[(8)] = inst_17493);

return statearr_17509;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17503__$1,(8),urls);
} else {
if((state_val_17504 === (6))){
var state_17503__$1 = state_17503;
var statearr_17510_17524 = state_17503__$1;
(statearr_17510_17524[(2)] = null);

(statearr_17510_17524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17504 === (7))){
var inst_17499 = (state_17503[(2)]);
var state_17503__$1 = state_17503;
var statearr_17511_17525 = state_17503__$1;
(statearr_17511_17525[(2)] = inst_17499);

(statearr_17511_17525[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17504 === (8))){
var inst_17495 = (state_17503[(2)]);
var inst_17489 = inst_17495;
var state_17503__$1 = (function (){var statearr_17512 = state_17503;
(statearr_17512[(7)] = inst_17489);

return statearr_17512;
})();
var statearr_17513_17526 = state_17503__$1;
(statearr_17513_17526[(2)] = null);

(statearr_17513_17526[(1)] = (3));


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
var statearr_17517 = [null,null,null,null,null,null,null,null,null];
(statearr_17517[(0)] = cljs_demo$async$web_crawler_$_state_machine__8378__auto__);

(statearr_17517[(1)] = (1));

return statearr_17517;
});
var cljs_demo$async$web_crawler_$_state_machine__8378__auto____1 = (function (state_17503){
while(true){
var ret_value__8379__auto__ = (function (){try{while(true){
var result__8380__auto__ = switch__8377__auto__.call(null,state_17503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8380__auto__;
}
break;
}
}catch (e17518){if((e17518 instanceof Object)){
var ex__8381__auto__ = e17518;
var statearr_17519_17527 = state_17503;
(statearr_17519_17527[(5)] = ex__8381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17528 = state_17503;
state_17503 = G__17528;
continue;
} else {
return ret_value__8379__auto__;
}
break;
}
});
cljs_demo$async$web_crawler_$_state_machine__8378__auto__ = function(state_17503){
switch(arguments.length){
case 0:
return cljs_demo$async$web_crawler_$_state_machine__8378__auto____0.call(this);
case 1:
return cljs_demo$async$web_crawler_$_state_machine__8378__auto____1.call(this,state_17503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_demo$async$web_crawler_$_state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_demo$async$web_crawler_$_state_machine__8378__auto____0;
cljs_demo$async$web_crawler_$_state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_demo$async$web_crawler_$_state_machine__8378__auto____1;
return cljs_demo$async$web_crawler_$_state_machine__8378__auto__;
})()
;})(switch__8377__auto__,c__8489__auto__,urls))
})();
var state__8491__auto__ = (function (){var statearr_17520 = f__8490__auto__.call(null);
(statearr_17520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8489__auto__);

return statearr_17520;
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
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Url to query: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,url_atom),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__17529_SHARP_){
return cljs.core.reset_BANG_.call(null,url_atom,p1__17529_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,depth_atom),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__17530_SHARP_){
return cljs.core.reset_BANG_.call(null,depth_atom,p1__17530_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_.call(null,log_atom,cljs.core.PersistentVector.EMPTY);

return cljs_demo.async.web_crawler.call(null,cljs.core.deref.call(null,url_atom),cljs.core.deref.call(null,depth_atom),log_atom);
})], null),"Crawl!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Crawled URLs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5440__auto__ = (function cljs_demo$async$web_crawler_component_$_iter__17535(s__17536){
return (new cljs.core.LazySeq(null,(function (){
var s__17536__$1 = s__17536;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17536__$1);
if(temp__4425__auto__){
var s__17536__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17536__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__17536__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__17538 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__17537 = (0);
while(true){
if((i__17537 < size__5439__auto__)){
var log = cljs.core._nth.call(null,c__5438__auto__,i__17537);
cljs.core.chunk_append.call(null,b__17538,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),log], null));

var G__17539 = (i__17537 + (1));
i__17537 = G__17539;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17538),cljs_demo$async$web_crawler_component_$_iter__17535.call(null,cljs.core.chunk_rest.call(null,s__17536__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17538),null);
}
} else {
var log = cljs.core.first.call(null,s__17536__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),log], null),cljs_demo$async$web_crawler_component_$_iter__17535.call(null,cljs.core.rest.call(null,s__17536__$2)));
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
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.async","cljs_demo.async",-237609859),new cljs.core.Keyword(null,"web-crawler","web-crawler",-474981188)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"web-crawler",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof cljs_demo.async.t_cljs_demo$async17540 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
cljs_demo.async.t_cljs_demo$async17540 = (function (meta17541){
this.meta17541 = meta17541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_demo.async.t_cljs_demo$async17540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17542,meta17541__$1){
var self__ = this;
var _17542__$1 = this;
return (new cljs_demo.async.t_cljs_demo$async17540(meta17541__$1));
});

cljs_demo.async.t_cljs_demo$async17540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17542){
var self__ = this;
var _17542__$1 = this;
return self__.meta17541;
});

cljs_demo.async.t_cljs_demo$async17540.prototype.devcards$core$IDevcardOptions$ = true;

cljs_demo.async.t_cljs_demo$async17540.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__14142__auto__,devcard_opts__14143__auto__){
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

cljs_demo.async.t_cljs_demo$async17540.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta17541","meta17541",1415644387,null)], null);
});

cljs_demo.async.t_cljs_demo$async17540.cljs$lang$type = true;

cljs_demo.async.t_cljs_demo$async17540.cljs$lang$ctorStr = "cljs-demo.async/t_cljs_demo$async17540";

cljs_demo.async.t_cljs_demo$async17540.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs-demo.async/t_cljs_demo$async17540");
});

cljs_demo.async.__GT_t_cljs_demo$async17540 = (function cljs_demo$async$__GT_t_cljs_demo$async17540(meta17541){
return (new cljs_demo.async.t_cljs_demo$async17540(meta17541));
});

}

return (new cljs_demo.async.t_cljs_demo$async17540(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),"http://joneisen.works",new cljs.core.Keyword(null,"depth","depth",1768663640),(1),new cljs.core.Keyword(null,"log","log",-1595516004),cljs.core.PersistentVector.EMPTY], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.async","cljs_demo.async",-237609859),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"# Web Crawler","Query a site, parse out urls referenced and crawl them.\n   Go `n` levels deep.",[cljs.core.str("\n```clojure\n"),cljs.core.str("(defn crawl-url\n  \"Query a url and parse out urls inside of it\"\n  [url]\n  (let [c (chan)]\n    (go (->> (<! (ajax-get url)) ; get the page\n             parse-html\n             select-urls         ; get a list of urls in page\n             (standardize-urls url)\n             set                 ; convert to a set (removing duplicates)\n             (async/onto-chan c)) ; put all urls on the output channel\n        )\n    c) ; return the channel\n  )"),cljs.core.str("\n```\n")].join(''),[cljs.core.str("\n```clojure\n"),cljs.core.str("(defn web-crawler\n  \"Recursively crawl urls `n` levels deep\"\n  [url n log]\n  (swap! log conj url)\n  (if (> n 0)                           ; Recursive exit criteria\n    (let [urls (crawl-url url)]         ; Get urls referenced in page (channel)\n      (go-loop [url (<! urls)]          ; Loop through urls\n        (when url                       ; Check for no more urls\n          (web-crawler url (- n 1) log) ; Recursively crawl\n          (recur (<! urls))))           ; Loop again\n      )))"),cljs.core.str("\n```\n")].join('')),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.async","cljs_demo.async",-237609859),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"[Next: Closing](#!/cljs_demo.closing)"),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));

//# sourceMappingURL=async.js.map?rel=1453744594591