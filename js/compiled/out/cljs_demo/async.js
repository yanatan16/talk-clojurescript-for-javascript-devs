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
return (function (p1__48478_SHARP_){
var c__25902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto__,c){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto__,c){
return (function (state_48494){
var state_val_48495 = (state_48494[(1)]);
if((state_val_48495 === (1))){
var state_48494__$1 = state_48494;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48494__$1,(2),c,p1__48478_SHARP_);
} else {
if((state_val_48495 === (2))){
var inst_48492 = (state_48494[(2)]);
var state_48494__$1 = state_48494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48494__$1,inst_48492);
} else {
return null;
}
}
});})(c__25902__auto__,c))
;
return ((function (switch__25881__auto__,c__25902__auto__,c){
return (function() {
var cljs_demo$async$ajax_get_$_state_machine__25882__auto__ = null;
var cljs_demo$async$ajax_get_$_state_machine__25882__auto____0 = (function (){
var statearr_48499 = [null,null,null,null,null,null,null];
(statearr_48499[(0)] = cljs_demo$async$ajax_get_$_state_machine__25882__auto__);

(statearr_48499[(1)] = (1));

return statearr_48499;
});
var cljs_demo$async$ajax_get_$_state_machine__25882__auto____1 = (function (state_48494){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_48494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e48500){if((e48500 instanceof Object)){
var ex__25885__auto__ = e48500;
var statearr_48501_48503 = state_48494;
(statearr_48501_48503[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48504 = state_48494;
state_48494 = G__48504;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
cljs_demo$async$ajax_get_$_state_machine__25882__auto__ = function(state_48494){
switch(arguments.length){
case 0:
return cljs_demo$async$ajax_get_$_state_machine__25882__auto____0.call(this);
case 1:
return cljs_demo$async$ajax_get_$_state_machine__25882__auto____1.call(this,state_48494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_demo$async$ajax_get_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_demo$async$ajax_get_$_state_machine__25882__auto____0;
cljs_demo$async$ajax_get_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_demo$async$ajax_get_$_state_machine__25882__auto____1;
return cljs_demo$async$ajax_get_$_state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto__,c))
})();
var state__25904__auto__ = (function (){var statearr_48502 = f__25903__auto__.call(null);
(statearr_48502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto__);

return statearr_48502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto__,c))
);

return c__25902__auto__;
});})(c))
], null));

return c;
});
cljs_demo.async.parse_csv = (function cljs_demo$async$parse_csv(raw){
var lines = clojure.string.split_lines.call(null,raw);
var tokens = cljs.core.map.call(null,((function (lines){
return (function (p1__48505_SHARP_){
return clojure.string.split.call(null,p1__48505_SHARP_,/,/);
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
var c__25902__auto___48538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto___48538,c){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto___48538,c){
return (function (state_48529){
var state_val_48530 = (state_48529[(1)]);
if((state_val_48530 === (1))){
var inst_48522 = cljs_demo.async.ajax_get.call(null,url);
var state_48529__$1 = state_48529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48529__$1,(2),inst_48522);
} else {
if((state_val_48530 === (2))){
var inst_48524 = (state_48529[(2)]);
var inst_48525 = cljs_demo.async.parse_csv.call(null,inst_48524);
var state_48529__$1 = state_48529;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48529__$1,(3),c,inst_48525);
} else {
if((state_val_48530 === (3))){
var inst_48527 = (state_48529[(2)]);
var state_48529__$1 = state_48529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48529__$1,inst_48527);
} else {
return null;
}
}
}
});})(c__25902__auto___48538,c))
;
return ((function (switch__25881__auto__,c__25902__auto___48538,c){
return (function() {
var cljs_demo$async$ajax_get_csv_$_state_machine__25882__auto__ = null;
var cljs_demo$async$ajax_get_csv_$_state_machine__25882__auto____0 = (function (){
var statearr_48534 = [null,null,null,null,null,null,null];
(statearr_48534[(0)] = cljs_demo$async$ajax_get_csv_$_state_machine__25882__auto__);

(statearr_48534[(1)] = (1));

return statearr_48534;
});
var cljs_demo$async$ajax_get_csv_$_state_machine__25882__auto____1 = (function (state_48529){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_48529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e48535){if((e48535 instanceof Object)){
var ex__25885__auto__ = e48535;
var statearr_48536_48539 = state_48529;
(statearr_48536_48539[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48540 = state_48529;
state_48529 = G__48540;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
cljs_demo$async$ajax_get_csv_$_state_machine__25882__auto__ = function(state_48529){
switch(arguments.length){
case 0:
return cljs_demo$async$ajax_get_csv_$_state_machine__25882__auto____0.call(this);
case 1:
return cljs_demo$async$ajax_get_csv_$_state_machine__25882__auto____1.call(this,state_48529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_demo$async$ajax_get_csv_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_demo$async$ajax_get_csv_$_state_machine__25882__auto____0;
cljs_demo$async$ajax_get_csv_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_demo$async$ajax_get_csv_$_state_machine__25882__auto____1;
return cljs_demo$async$ajax_get_csv_$_state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto___48538,c))
})();
var state__25904__auto__ = (function (){var statearr_48537 = f__25903__auto__.call(null);
(statearr_48537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto___48538);

return statearr_48537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto___48538,c))
);


return c;
});
/**
 * Get medical marijuana usage data as parsed CSV and update atom
 */
cljs_demo.async.get_mj_data = (function cljs_demo$async$get_mj_data(state_atom){
var c__25902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto__){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto__){
return (function (state_48560){
var state_val_48561 = (state_48560[(1)]);
if((state_val_48561 === (1))){
var inst_48555 = cljs_demo.async.ajax_get_csv.call(null,cljs_demo.async.medical_marijuana_url);
var state_48560__$1 = state_48560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48560__$1,(2),inst_48555);
} else {
if((state_val_48561 === (2))){
var inst_48557 = (state_48560[(2)]);
var inst_48558 = cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"mj-data","mj-data",-1940689818),inst_48557);
var state_48560__$1 = state_48560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48560__$1,inst_48558);
} else {
return null;
}
}
});})(c__25902__auto__))
;
return ((function (switch__25881__auto__,c__25902__auto__){
return (function() {
var cljs_demo$async$get_mj_data_$_state_machine__25882__auto__ = null;
var cljs_demo$async$get_mj_data_$_state_machine__25882__auto____0 = (function (){
var statearr_48565 = [null,null,null,null,null,null,null];
(statearr_48565[(0)] = cljs_demo$async$get_mj_data_$_state_machine__25882__auto__);

(statearr_48565[(1)] = (1));

return statearr_48565;
});
var cljs_demo$async$get_mj_data_$_state_machine__25882__auto____1 = (function (state_48560){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_48560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e48566){if((e48566 instanceof Object)){
var ex__25885__auto__ = e48566;
var statearr_48567_48569 = state_48560;
(statearr_48567_48569[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48570 = state_48560;
state_48560 = G__48570;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
cljs_demo$async$get_mj_data_$_state_machine__25882__auto__ = function(state_48560){
switch(arguments.length){
case 0:
return cljs_demo$async$get_mj_data_$_state_machine__25882__auto____0.call(this);
case 1:
return cljs_demo$async$get_mj_data_$_state_machine__25882__auto____1.call(this,state_48560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_demo$async$get_mj_data_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_demo$async$get_mj_data_$_state_machine__25882__auto____0;
cljs_demo$async$get_mj_data_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_demo$async$get_mj_data_$_state_machine__25882__auto____1;
return cljs_demo$async$get_mj_data_$_state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto__))
})();
var state__25904__auto__ = (function (){var statearr_48568 = f__25903__auto__.call(null);
(statearr_48568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto__);

return statearr_48568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto__))
);

return c__25902__auto__;
});
cljs_demo.async.mj_data_component = (function cljs_demo$async$mj_data_component(state_atom){
var temp__4423__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mj-data","mj-data",-1940689818)], null));
if(cljs.core.truth_(temp__4423__auto__)){
var map__48573 = temp__4423__auto__;
var map__48573__$1 = ((((!((map__48573 == null)))?((((map__48573.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48573.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48573):map__48573);
var header = cljs.core.get.call(null,map__48573__$1,new cljs.core.Keyword(null,"header","header",119441134));
var body = cljs.core.get.call(null,map__48573__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead>tr","thead>tr",-1341733367),cljs.core.map.call(null,((function (map__48573,map__48573__$1,header,body,temp__4423__auto__){
return (function (el){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),el], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),el], null));
});})(map__48573,map__48573__$1,header,body,temp__4423__auto__))
,header)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.map.call(null,((function (map__48573,map__48573__$1,header,body,temp__4423__auto__){
return (function (row){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.map.call(null,((function (map__48573,map__48573__$1,header,body,temp__4423__auto__){
return (function (el){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),el], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),el], null));
});})(map__48573,map__48573__$1,header,body,temp__4423__auto__))
,row)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first.call(null,row)], null));
});})(map__48573,map__48573__$1,header,body,temp__4423__auto__))
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
if(typeof cljs_demo.async.t_cljs_demo$async48575 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
cljs_demo.async.t_cljs_demo$async48575 = (function (meta48576){
this.meta48576 = meta48576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_demo.async.t_cljs_demo$async48575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48577,meta48576__$1){
var self__ = this;
var _48577__$1 = this;
return (new cljs_demo.async.t_cljs_demo$async48575(meta48576__$1));
});

cljs_demo.async.t_cljs_demo$async48575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48577){
var self__ = this;
var _48577__$1 = this;
return self__.meta48576;
});

cljs_demo.async.t_cljs_demo$async48575.prototype.devcards$core$IDevcardOptions$ = true;

cljs_demo.async.t_cljs_demo$async48575.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__29448__auto__,devcard_opts__29449__auto__){
var self__ = this;
var this__29448__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__29449__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__29467__auto__ = ((function (this__29448__auto____$1){
return (function (state_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_demo.async.mj_component,state_atom], null);
});})(this__29448__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__29467__auto__)){
return ((function (v__29467__auto__,this__29448__auto____$1){
return (function (data_atom__29468__auto__,owner__29469__auto__){
return reagent.core.as_element.call(null,v__29467__auto__.call(null,data_atom__29468__auto__,owner__29469__auto__));
});
;})(v__29467__auto__,this__29448__auto____$1))
} else {
return reagent.core.as_element.call(null,v__29467__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__29449__auto__))));
});

cljs_demo.async.t_cljs_demo$async48575.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta48576","meta48576",-498492247,null)], null);
});

cljs_demo.async.t_cljs_demo$async48575.cljs$lang$type = true;

cljs_demo.async.t_cljs_demo$async48575.cljs$lang$ctorStr = "cljs-demo.async/t_cljs_demo$async48575";

cljs_demo.async.t_cljs_demo$async48575.cljs$lang$ctorPrWriter = (function (this__24384__auto__,writer__24385__auto__,opt__24386__auto__){
return cljs.core._write.call(null,writer__24385__auto__,"cljs-demo.async/t_cljs_demo$async48575");
});

cljs_demo.async.__GT_t_cljs_demo$async48575 = (function cljs_demo$async$__GT_t_cljs_demo$async48575(meta48576){
return (new cljs_demo.async.t_cljs_demo$async48575(meta48576));
});

}

return (new cljs_demo.async.t_cljs_demo$async48575(null));
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
return (function (p1__48579_SHARP_){
return new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__48579_SHARP_));
});})(anchors))
,anchors);
});
cljs_demo.async.split_url = (function cljs_demo$async$split_url(url){
var uri = (new goog.Uri(url));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(uri.getScheme()),cljs.core.str("://"),cljs.core.str(uri.getDomain())].join(''),uri.getPath()], null);
});
cljs_demo.async.standardize_urls = (function cljs_demo$async$standardize_urls(base,urls){
var vec__48581 = cljs_demo.async.split_url.call(null,base);
var host = cljs.core.nth.call(null,vec__48581,(0),null);
var path = cljs.core.nth.call(null,vec__48581,(1),null);
return cljs.core.map.call(null,((function (vec__48581,host,path){
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
});})(vec__48581,host,path))
,urls);
});
/**
 * Query a url and parse out urls inside of it
 */
cljs_demo.async.crawl_url = (function cljs_demo$async$crawl_url(url){
var c = cljs.core.async.chan.call(null);
var c__25902__auto___48618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto___48618,c){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto___48618,c){
return (function (state_48609){
var state_val_48610 = (state_48609[(1)]);
if((state_val_48610 === (1))){
var inst_48600 = cljs_demo.async.ajax_get.call(null,url);
var state_48609__$1 = state_48609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48609__$1,(2),inst_48600);
} else {
if((state_val_48610 === (2))){
var inst_48602 = (state_48609[(2)]);
var inst_48603 = cljs_demo.async.parse_html.call(null,inst_48602);
var inst_48604 = cljs_demo.async.select_urls.call(null,inst_48603);
var inst_48605 = cljs_demo.async.standardize_urls.call(null,url,inst_48604);
var inst_48606 = cljs.core.set.call(null,inst_48605);
var inst_48607 = cljs.core.async.onto_chan.call(null,c,inst_48606);
var state_48609__$1 = state_48609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48609__$1,inst_48607);
} else {
return null;
}
}
});})(c__25902__auto___48618,c))
;
return ((function (switch__25881__auto__,c__25902__auto___48618,c){
return (function() {
var cljs_demo$async$crawl_url_$_state_machine__25882__auto__ = null;
var cljs_demo$async$crawl_url_$_state_machine__25882__auto____0 = (function (){
var statearr_48614 = [null,null,null,null,null,null,null];
(statearr_48614[(0)] = cljs_demo$async$crawl_url_$_state_machine__25882__auto__);

(statearr_48614[(1)] = (1));

return statearr_48614;
});
var cljs_demo$async$crawl_url_$_state_machine__25882__auto____1 = (function (state_48609){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_48609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e48615){if((e48615 instanceof Object)){
var ex__25885__auto__ = e48615;
var statearr_48616_48619 = state_48609;
(statearr_48616_48619[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48620 = state_48609;
state_48609 = G__48620;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
cljs_demo$async$crawl_url_$_state_machine__25882__auto__ = function(state_48609){
switch(arguments.length){
case 0:
return cljs_demo$async$crawl_url_$_state_machine__25882__auto____0.call(this);
case 1:
return cljs_demo$async$crawl_url_$_state_machine__25882__auto____1.call(this,state_48609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_demo$async$crawl_url_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_demo$async$crawl_url_$_state_machine__25882__auto____0;
cljs_demo$async$crawl_url_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_demo$async$crawl_url_$_state_machine__25882__auto____1;
return cljs_demo$async$crawl_url_$_state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto___48618,c))
})();
var state__25904__auto__ = (function (){var statearr_48617 = f__25903__auto__.call(null);
(statearr_48617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto___48618);

return statearr_48617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto___48618,c))
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
var c__25902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto__,urls){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto__,urls){
return (function (state_48671){
var state_val_48672 = (state_48671[(1)]);
if((state_val_48672 === (1))){
var state_48671__$1 = state_48671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48671__$1,(2),urls);
} else {
if((state_val_48672 === (2))){
var inst_48656 = (state_48671[(2)]);
var inst_48657 = inst_48656;
var state_48671__$1 = (function (){var statearr_48673 = state_48671;
(statearr_48673[(7)] = inst_48657);

return statearr_48673;
})();
var statearr_48674_48689 = state_48671__$1;
(statearr_48674_48689[(2)] = null);

(statearr_48674_48689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48672 === (3))){
var inst_48657 = (state_48671[(7)]);
var state_48671__$1 = state_48671;
if(cljs.core.truth_(inst_48657)){
var statearr_48675_48690 = state_48671__$1;
(statearr_48675_48690[(1)] = (5));

} else {
var statearr_48676_48691 = state_48671__$1;
(statearr_48676_48691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48672 === (4))){
var inst_48669 = (state_48671[(2)]);
var state_48671__$1 = state_48671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48671__$1,inst_48669);
} else {
if((state_val_48672 === (5))){
var inst_48657 = (state_48671[(7)]);
var inst_48660 = (n - (1));
var inst_48661 = cljs_demo$async$web_crawler.call(null,inst_48657,inst_48660,log);
var state_48671__$1 = (function (){var statearr_48677 = state_48671;
(statearr_48677[(8)] = inst_48661);

return statearr_48677;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48671__$1,(8),urls);
} else {
if((state_val_48672 === (6))){
var state_48671__$1 = state_48671;
var statearr_48678_48692 = state_48671__$1;
(statearr_48678_48692[(2)] = null);

(statearr_48678_48692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48672 === (7))){
var inst_48667 = (state_48671[(2)]);
var state_48671__$1 = state_48671;
var statearr_48679_48693 = state_48671__$1;
(statearr_48679_48693[(2)] = inst_48667);

(statearr_48679_48693[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48672 === (8))){
var inst_48663 = (state_48671[(2)]);
var inst_48657 = inst_48663;
var state_48671__$1 = (function (){var statearr_48680 = state_48671;
(statearr_48680[(7)] = inst_48657);

return statearr_48680;
})();
var statearr_48681_48694 = state_48671__$1;
(statearr_48681_48694[(2)] = null);

(statearr_48681_48694[(1)] = (3));


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
});})(c__25902__auto__,urls))
;
return ((function (switch__25881__auto__,c__25902__auto__,urls){
return (function() {
var cljs_demo$async$web_crawler_$_state_machine__25882__auto__ = null;
var cljs_demo$async$web_crawler_$_state_machine__25882__auto____0 = (function (){
var statearr_48685 = [null,null,null,null,null,null,null,null,null];
(statearr_48685[(0)] = cljs_demo$async$web_crawler_$_state_machine__25882__auto__);

(statearr_48685[(1)] = (1));

return statearr_48685;
});
var cljs_demo$async$web_crawler_$_state_machine__25882__auto____1 = (function (state_48671){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_48671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e48686){if((e48686 instanceof Object)){
var ex__25885__auto__ = e48686;
var statearr_48687_48695 = state_48671;
(statearr_48687_48695[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48696 = state_48671;
state_48671 = G__48696;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
cljs_demo$async$web_crawler_$_state_machine__25882__auto__ = function(state_48671){
switch(arguments.length){
case 0:
return cljs_demo$async$web_crawler_$_state_machine__25882__auto____0.call(this);
case 1:
return cljs_demo$async$web_crawler_$_state_machine__25882__auto____1.call(this,state_48671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_demo$async$web_crawler_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_demo$async$web_crawler_$_state_machine__25882__auto____0;
cljs_demo$async$web_crawler_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_demo$async$web_crawler_$_state_machine__25882__auto____1;
return cljs_demo$async$web_crawler_$_state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto__,urls))
})();
var state__25904__auto__ = (function (){var statearr_48688 = f__25903__auto__.call(null);
(statearr_48688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto__);

return statearr_48688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto__,urls))
);

return c__25902__auto__;
} else {
return null;
}
});
cljs_demo.async.web_crawler_component = (function cljs_demo$async$web_crawler_component(url_atom,depth_atom,log_atom){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Url to query: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,url_atom),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__48697_SHARP_){
return cljs.core.reset_BANG_.call(null,url_atom,p1__48697_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,depth_atom),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__48698_SHARP_){
return cljs.core.reset_BANG_.call(null,depth_atom,p1__48698_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_.call(null,log_atom,cljs.core.PersistentVector.EMPTY);

return cljs_demo.async.web_crawler.call(null,cljs.core.deref.call(null,url_atom),cljs.core.deref.call(null,depth_atom),log_atom);
})], null),"Crawl!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Crawled URLs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__24558__auto__ = (function cljs_demo$async$web_crawler_component_$_iter__48703(s__48704){
return (new cljs.core.LazySeq(null,(function (){
var s__48704__$1 = s__48704;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__48704__$1);
if(temp__4425__auto__){
var s__48704__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48704__$2)){
var c__24556__auto__ = cljs.core.chunk_first.call(null,s__48704__$2);
var size__24557__auto__ = cljs.core.count.call(null,c__24556__auto__);
var b__48706 = cljs.core.chunk_buffer.call(null,size__24557__auto__);
if((function (){var i__48705 = (0);
while(true){
if((i__48705 < size__24557__auto__)){
var log = cljs.core._nth.call(null,c__24556__auto__,i__48705);
cljs.core.chunk_append.call(null,b__48706,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),log], null));

var G__48707 = (i__48705 + (1));
i__48705 = G__48707;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48706),cljs_demo$async$web_crawler_component_$_iter__48703.call(null,cljs.core.chunk_rest.call(null,s__48704__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48706),null);
}
} else {
var log = cljs.core.first.call(null,s__48704__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),log], null),cljs_demo$async$web_crawler_component_$_iter__48703.call(null,cljs.core.rest.call(null,s__48704__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24558__auto__.call(null,cljs.core.deref.call(null,log_atom));
})()], null)], null)], null);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.async","cljs_demo.async",-237609859),new cljs.core.Keyword(null,"web-crawler","web-crawler",-474981188)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"web-crawler",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof cljs_demo.async.t_cljs_demo$async48708 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
cljs_demo.async.t_cljs_demo$async48708 = (function (meta48709){
this.meta48709 = meta48709;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_demo.async.t_cljs_demo$async48708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48710,meta48709__$1){
var self__ = this;
var _48710__$1 = this;
return (new cljs_demo.async.t_cljs_demo$async48708(meta48709__$1));
});

cljs_demo.async.t_cljs_demo$async48708.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48710){
var self__ = this;
var _48710__$1 = this;
return self__.meta48709;
});

cljs_demo.async.t_cljs_demo$async48708.prototype.devcards$core$IDevcardOptions$ = true;

cljs_demo.async.t_cljs_demo$async48708.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__29448__auto__,devcard_opts__29449__auto__){
var self__ = this;
var this__29448__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__29449__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__29467__auto__ = ((function (this__29448__auto____$1){
return (function (state_atom,_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_demo.async.web_crawler_component,reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url","url",276297046)], null)),reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"depth","depth",1768663640)], null)),reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"log","log",-1595516004)], null))], null);
});})(this__29448__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__29467__auto__)){
return ((function (v__29467__auto__,this__29448__auto____$1){
return (function (data_atom__29468__auto__,owner__29469__auto__){
return reagent.core.as_element.call(null,v__29467__auto__.call(null,data_atom__29468__auto__,owner__29469__auto__));
});
;})(v__29467__auto__,this__29448__auto____$1))
} else {
return reagent.core.as_element.call(null,v__29467__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__29449__auto__))));
});

cljs_demo.async.t_cljs_demo$async48708.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta48709","meta48709",918145495,null)], null);
});

cljs_demo.async.t_cljs_demo$async48708.cljs$lang$type = true;

cljs_demo.async.t_cljs_demo$async48708.cljs$lang$ctorStr = "cljs-demo.async/t_cljs_demo$async48708";

cljs_demo.async.t_cljs_demo$async48708.cljs$lang$ctorPrWriter = (function (this__24384__auto__,writer__24385__auto__,opt__24386__auto__){
return cljs.core._write.call(null,writer__24385__auto__,"cljs-demo.async/t_cljs_demo$async48708");
});

cljs_demo.async.__GT_t_cljs_demo$async48708 = (function cljs_demo$async$__GT_t_cljs_demo$async48708(meta48709){
return (new cljs_demo.async.t_cljs_demo$async48708(meta48709));
});

}

return (new cljs_demo.async.t_cljs_demo$async48708(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),"http://joneisen.works",new cljs.core.Keyword(null,"depth","depth",1768663640),(1),new cljs.core.Keyword(null,"log","log",-1595516004),cljs.core.PersistentVector.EMPTY], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.async","cljs_demo.async",-237609859),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"# Web Crawler","Query a site, parse out urls referenced and crawl them.\n   Go `n` levels deep.",[cljs.core.str("\n```clojure\n"),cljs.core.str("(defn crawl-url\n  \"Query a url and parse out urls inside of it\"\n  [url]\n  (let [c (chan)]\n    (go (->> (<! (ajax-get url)) ; get the page\n             parse-html\n             select-urls         ; get a list of urls in page\n             (standardize-urls url)\n             set                 ; convert to a set (removing duplicates)\n             (async/onto-chan c)) ; put all urls on the output channel\n        )\n    c) ; return the channel\n  )"),cljs.core.str("\n```\n")].join(''),[cljs.core.str("\n```clojure\n"),cljs.core.str("(defn web-crawler\n  \"Recursively crawl urls `n` levels deep\"\n  [url n log]\n  (swap! log conj url)\n  (if (> n 0)                           ; Recursive exit criteria\n    (let [urls (crawl-url url)]         ; Get urls referenced in page (channel)\n      (go-loop [url (<! urls)]          ; Loop through urls\n        (when url                       ; Check for no more urls\n          (web-crawler url (- n 1) log) ; Recursively crawl\n          (recur (<! urls))))           ; Loop again\n      )))"),cljs.core.str("\n```\n")].join('')),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.async","cljs_demo.async",-237609859),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"[Next: Closing](#!/cljs_demo.closing)"),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));

//# sourceMappingURL=async.js.map?rel=1453744777922