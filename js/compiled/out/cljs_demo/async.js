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
return (function (p1__55224_SHARP_){
var c__25902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto__,c){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto__,c){
return (function (state_55240){
var state_val_55241 = (state_55240[(1)]);
if((state_val_55241 === (1))){
var state_55240__$1 = state_55240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55240__$1,(2),c,p1__55224_SHARP_);
} else {
if((state_val_55241 === (2))){
var inst_55238 = (state_55240[(2)]);
var state_55240__$1 = state_55240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55240__$1,inst_55238);
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
var statearr_55245 = [null,null,null,null,null,null,null];
(statearr_55245[(0)] = cljs_demo$async$ajax_get_$_state_machine__25882__auto__);

(statearr_55245[(1)] = (1));

return statearr_55245;
});
var cljs_demo$async$ajax_get_$_state_machine__25882__auto____1 = (function (state_55240){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_55240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e55246){if((e55246 instanceof Object)){
var ex__25885__auto__ = e55246;
var statearr_55247_55249 = state_55240;
(statearr_55247_55249[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55250 = state_55240;
state_55240 = G__55250;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
cljs_demo$async$ajax_get_$_state_machine__25882__auto__ = function(state_55240){
switch(arguments.length){
case 0:
return cljs_demo$async$ajax_get_$_state_machine__25882__auto____0.call(this);
case 1:
return cljs_demo$async$ajax_get_$_state_machine__25882__auto____1.call(this,state_55240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_demo$async$ajax_get_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_demo$async$ajax_get_$_state_machine__25882__auto____0;
cljs_demo$async$ajax_get_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_demo$async$ajax_get_$_state_machine__25882__auto____1;
return cljs_demo$async$ajax_get_$_state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto__,c))
})();
var state__25904__auto__ = (function (){var statearr_55248 = f__25903__auto__.call(null);
(statearr_55248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto__);

return statearr_55248;
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
return (function (p1__55251_SHARP_){
return clojure.string.split.call(null,p1__55251_SHARP_,/,/);
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
var c__25902__auto___55284 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto___55284,c){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto___55284,c){
return (function (state_55275){
var state_val_55276 = (state_55275[(1)]);
if((state_val_55276 === (1))){
var inst_55268 = cljs_demo.async.ajax_get.call(null,url);
var state_55275__$1 = state_55275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55275__$1,(2),inst_55268);
} else {
if((state_val_55276 === (2))){
var inst_55270 = (state_55275[(2)]);
var inst_55271 = cljs_demo.async.parse_csv.call(null,inst_55270);
var state_55275__$1 = state_55275;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55275__$1,(3),c,inst_55271);
} else {
if((state_val_55276 === (3))){
var inst_55273 = (state_55275[(2)]);
var state_55275__$1 = state_55275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55275__$1,inst_55273);
} else {
return null;
}
}
}
});})(c__25902__auto___55284,c))
;
return ((function (switch__25881__auto__,c__25902__auto___55284,c){
return (function() {
var cljs_demo$async$ajax_get_csv_$_state_machine__25882__auto__ = null;
var cljs_demo$async$ajax_get_csv_$_state_machine__25882__auto____0 = (function (){
var statearr_55280 = [null,null,null,null,null,null,null];
(statearr_55280[(0)] = cljs_demo$async$ajax_get_csv_$_state_machine__25882__auto__);

(statearr_55280[(1)] = (1));

return statearr_55280;
});
var cljs_demo$async$ajax_get_csv_$_state_machine__25882__auto____1 = (function (state_55275){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_55275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e55281){if((e55281 instanceof Object)){
var ex__25885__auto__ = e55281;
var statearr_55282_55285 = state_55275;
(statearr_55282_55285[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55286 = state_55275;
state_55275 = G__55286;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
cljs_demo$async$ajax_get_csv_$_state_machine__25882__auto__ = function(state_55275){
switch(arguments.length){
case 0:
return cljs_demo$async$ajax_get_csv_$_state_machine__25882__auto____0.call(this);
case 1:
return cljs_demo$async$ajax_get_csv_$_state_machine__25882__auto____1.call(this,state_55275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_demo$async$ajax_get_csv_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_demo$async$ajax_get_csv_$_state_machine__25882__auto____0;
cljs_demo$async$ajax_get_csv_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_demo$async$ajax_get_csv_$_state_machine__25882__auto____1;
return cljs_demo$async$ajax_get_csv_$_state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto___55284,c))
})();
var state__25904__auto__ = (function (){var statearr_55283 = f__25903__auto__.call(null);
(statearr_55283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto___55284);

return statearr_55283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto___55284,c))
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
return (function (state_55306){
var state_val_55307 = (state_55306[(1)]);
if((state_val_55307 === (1))){
var inst_55301 = cljs_demo.async.ajax_get_csv.call(null,cljs_demo.async.medical_marijuana_url);
var state_55306__$1 = state_55306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55306__$1,(2),inst_55301);
} else {
if((state_val_55307 === (2))){
var inst_55303 = (state_55306[(2)]);
var inst_55304 = cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"mj-data","mj-data",-1940689818),inst_55303);
var state_55306__$1 = state_55306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55306__$1,inst_55304);
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
var statearr_55311 = [null,null,null,null,null,null,null];
(statearr_55311[(0)] = cljs_demo$async$get_mj_data_$_state_machine__25882__auto__);

(statearr_55311[(1)] = (1));

return statearr_55311;
});
var cljs_demo$async$get_mj_data_$_state_machine__25882__auto____1 = (function (state_55306){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_55306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e55312){if((e55312 instanceof Object)){
var ex__25885__auto__ = e55312;
var statearr_55313_55315 = state_55306;
(statearr_55313_55315[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55316 = state_55306;
state_55306 = G__55316;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
cljs_demo$async$get_mj_data_$_state_machine__25882__auto__ = function(state_55306){
switch(arguments.length){
case 0:
return cljs_demo$async$get_mj_data_$_state_machine__25882__auto____0.call(this);
case 1:
return cljs_demo$async$get_mj_data_$_state_machine__25882__auto____1.call(this,state_55306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_demo$async$get_mj_data_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_demo$async$get_mj_data_$_state_machine__25882__auto____0;
cljs_demo$async$get_mj_data_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_demo$async$get_mj_data_$_state_machine__25882__auto____1;
return cljs_demo$async$get_mj_data_$_state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto__))
})();
var state__25904__auto__ = (function (){var statearr_55314 = f__25903__auto__.call(null);
(statearr_55314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto__);

return statearr_55314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto__))
);

return c__25902__auto__;
});
cljs_demo.async.mj_data_component = (function cljs_demo$async$mj_data_component(state_atom){
var temp__4423__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mj-data","mj-data",-1940689818)], null));
if(cljs.core.truth_(temp__4423__auto__)){
var map__55319 = temp__4423__auto__;
var map__55319__$1 = ((((!((map__55319 == null)))?((((map__55319.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55319.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55319):map__55319);
var header = cljs.core.get.call(null,map__55319__$1,new cljs.core.Keyword(null,"header","header",119441134));
var body = cljs.core.get.call(null,map__55319__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead>tr","thead>tr",-1341733367),cljs.core.map.call(null,((function (map__55319,map__55319__$1,header,body,temp__4423__auto__){
return (function (el){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),el], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),el], null));
});})(map__55319,map__55319__$1,header,body,temp__4423__auto__))
,header)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.map.call(null,((function (map__55319,map__55319__$1,header,body,temp__4423__auto__){
return (function (row){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.map.call(null,((function (map__55319,map__55319__$1,header,body,temp__4423__auto__){
return (function (el){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),el], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),el], null));
});})(map__55319,map__55319__$1,header,body,temp__4423__auto__))
,row)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first.call(null,row)], null));
});})(map__55319,map__55319__$1,header,body,temp__4423__auto__))
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
if(typeof cljs_demo.async.t_cljs_demo$async55321 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
cljs_demo.async.t_cljs_demo$async55321 = (function (meta55322){
this.meta55322 = meta55322;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_demo.async.t_cljs_demo$async55321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55323,meta55322__$1){
var self__ = this;
var _55323__$1 = this;
return (new cljs_demo.async.t_cljs_demo$async55321(meta55322__$1));
});

cljs_demo.async.t_cljs_demo$async55321.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55323){
var self__ = this;
var _55323__$1 = this;
return self__.meta55322;
});

cljs_demo.async.t_cljs_demo$async55321.prototype.devcards$core$IDevcardOptions$ = true;

cljs_demo.async.t_cljs_demo$async55321.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__29448__auto__,devcard_opts__29449__auto__){
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

cljs_demo.async.t_cljs_demo$async55321.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55322","meta55322",-635492203,null)], null);
});

cljs_demo.async.t_cljs_demo$async55321.cljs$lang$type = true;

cljs_demo.async.t_cljs_demo$async55321.cljs$lang$ctorStr = "cljs-demo.async/t_cljs_demo$async55321";

cljs_demo.async.t_cljs_demo$async55321.cljs$lang$ctorPrWriter = (function (this__24384__auto__,writer__24385__auto__,opt__24386__auto__){
return cljs.core._write.call(null,writer__24385__auto__,"cljs-demo.async/t_cljs_demo$async55321");
});

cljs_demo.async.__GT_t_cljs_demo$async55321 = (function cljs_demo$async$__GT_t_cljs_demo$async55321(meta55322){
return (new cljs_demo.async.t_cljs_demo$async55321(meta55322));
});

}

return (new cljs_demo.async.t_cljs_demo$async55321(null));
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
return (function (p1__55325_SHARP_){
return new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__55325_SHARP_));
});})(anchors))
,anchors);
});
cljs_demo.async.split_url = (function cljs_demo$async$split_url(url){
var uri = (new goog.Uri(url));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(uri.getScheme()),cljs.core.str("://"),cljs.core.str(uri.getDomain())].join(''),uri.getPath()], null);
});
cljs_demo.async.standardize_urls = (function cljs_demo$async$standardize_urls(base,urls){
var vec__55327 = cljs_demo.async.split_url.call(null,base);
var host = cljs.core.nth.call(null,vec__55327,(0),null);
var path = cljs.core.nth.call(null,vec__55327,(1),null);
return cljs.core.map.call(null,((function (vec__55327,host,path){
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
});})(vec__55327,host,path))
,urls);
});
/**
 * Query a url and parse out urls inside of it
 */
cljs_demo.async.crawl_url = (function cljs_demo$async$crawl_url(url){
var c = cljs.core.async.chan.call(null);
var c__25902__auto___55364 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto___55364,c){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto___55364,c){
return (function (state_55355){
var state_val_55356 = (state_55355[(1)]);
if((state_val_55356 === (1))){
var inst_55346 = cljs_demo.async.ajax_get.call(null,url);
var state_55355__$1 = state_55355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55355__$1,(2),inst_55346);
} else {
if((state_val_55356 === (2))){
var inst_55348 = (state_55355[(2)]);
var inst_55349 = cljs_demo.async.parse_html.call(null,inst_55348);
var inst_55350 = cljs_demo.async.select_urls.call(null,inst_55349);
var inst_55351 = cljs_demo.async.standardize_urls.call(null,url,inst_55350);
var inst_55352 = cljs.core.set.call(null,inst_55351);
var inst_55353 = cljs.core.async.onto_chan.call(null,c,inst_55352);
var state_55355__$1 = state_55355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55355__$1,inst_55353);
} else {
return null;
}
}
});})(c__25902__auto___55364,c))
;
return ((function (switch__25881__auto__,c__25902__auto___55364,c){
return (function() {
var cljs_demo$async$crawl_url_$_state_machine__25882__auto__ = null;
var cljs_demo$async$crawl_url_$_state_machine__25882__auto____0 = (function (){
var statearr_55360 = [null,null,null,null,null,null,null];
(statearr_55360[(0)] = cljs_demo$async$crawl_url_$_state_machine__25882__auto__);

(statearr_55360[(1)] = (1));

return statearr_55360;
});
var cljs_demo$async$crawl_url_$_state_machine__25882__auto____1 = (function (state_55355){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_55355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e55361){if((e55361 instanceof Object)){
var ex__25885__auto__ = e55361;
var statearr_55362_55365 = state_55355;
(statearr_55362_55365[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55366 = state_55355;
state_55355 = G__55366;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
cljs_demo$async$crawl_url_$_state_machine__25882__auto__ = function(state_55355){
switch(arguments.length){
case 0:
return cljs_demo$async$crawl_url_$_state_machine__25882__auto____0.call(this);
case 1:
return cljs_demo$async$crawl_url_$_state_machine__25882__auto____1.call(this,state_55355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_demo$async$crawl_url_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_demo$async$crawl_url_$_state_machine__25882__auto____0;
cljs_demo$async$crawl_url_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_demo$async$crawl_url_$_state_machine__25882__auto____1;
return cljs_demo$async$crawl_url_$_state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto___55364,c))
})();
var state__25904__auto__ = (function (){var statearr_55363 = f__25903__auto__.call(null);
(statearr_55363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto___55364);

return statearr_55363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto___55364,c))
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
return (function (state_55417){
var state_val_55418 = (state_55417[(1)]);
if((state_val_55418 === (1))){
var state_55417__$1 = state_55417;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55417__$1,(2),urls);
} else {
if((state_val_55418 === (2))){
var inst_55402 = (state_55417[(2)]);
var inst_55403 = inst_55402;
var state_55417__$1 = (function (){var statearr_55419 = state_55417;
(statearr_55419[(7)] = inst_55403);

return statearr_55419;
})();
var statearr_55420_55435 = state_55417__$1;
(statearr_55420_55435[(2)] = null);

(statearr_55420_55435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55418 === (3))){
var inst_55403 = (state_55417[(7)]);
var state_55417__$1 = state_55417;
if(cljs.core.truth_(inst_55403)){
var statearr_55421_55436 = state_55417__$1;
(statearr_55421_55436[(1)] = (5));

} else {
var statearr_55422_55437 = state_55417__$1;
(statearr_55422_55437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55418 === (4))){
var inst_55415 = (state_55417[(2)]);
var state_55417__$1 = state_55417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55417__$1,inst_55415);
} else {
if((state_val_55418 === (5))){
var inst_55403 = (state_55417[(7)]);
var inst_55406 = (n - (1));
var inst_55407 = cljs_demo$async$web_crawler.call(null,inst_55403,inst_55406,log);
var state_55417__$1 = (function (){var statearr_55423 = state_55417;
(statearr_55423[(8)] = inst_55407);

return statearr_55423;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55417__$1,(8),urls);
} else {
if((state_val_55418 === (6))){
var state_55417__$1 = state_55417;
var statearr_55424_55438 = state_55417__$1;
(statearr_55424_55438[(2)] = null);

(statearr_55424_55438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55418 === (7))){
var inst_55413 = (state_55417[(2)]);
var state_55417__$1 = state_55417;
var statearr_55425_55439 = state_55417__$1;
(statearr_55425_55439[(2)] = inst_55413);

(statearr_55425_55439[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55418 === (8))){
var inst_55409 = (state_55417[(2)]);
var inst_55403 = inst_55409;
var state_55417__$1 = (function (){var statearr_55426 = state_55417;
(statearr_55426[(7)] = inst_55403);

return statearr_55426;
})();
var statearr_55427_55440 = state_55417__$1;
(statearr_55427_55440[(2)] = null);

(statearr_55427_55440[(1)] = (3));


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
var statearr_55431 = [null,null,null,null,null,null,null,null,null];
(statearr_55431[(0)] = cljs_demo$async$web_crawler_$_state_machine__25882__auto__);

(statearr_55431[(1)] = (1));

return statearr_55431;
});
var cljs_demo$async$web_crawler_$_state_machine__25882__auto____1 = (function (state_55417){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_55417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e55432){if((e55432 instanceof Object)){
var ex__25885__auto__ = e55432;
var statearr_55433_55441 = state_55417;
(statearr_55433_55441[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55442 = state_55417;
state_55417 = G__55442;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
cljs_demo$async$web_crawler_$_state_machine__25882__auto__ = function(state_55417){
switch(arguments.length){
case 0:
return cljs_demo$async$web_crawler_$_state_machine__25882__auto____0.call(this);
case 1:
return cljs_demo$async$web_crawler_$_state_machine__25882__auto____1.call(this,state_55417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_demo$async$web_crawler_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_demo$async$web_crawler_$_state_machine__25882__auto____0;
cljs_demo$async$web_crawler_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_demo$async$web_crawler_$_state_machine__25882__auto____1;
return cljs_demo$async$web_crawler_$_state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto__,urls))
})();
var state__25904__auto__ = (function (){var statearr_55434 = f__25903__auto__.call(null);
(statearr_55434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto__);

return statearr_55434;
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
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Url to query: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,url_atom),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__55443_SHARP_){
return cljs.core.reset_BANG_.call(null,url_atom,p1__55443_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Depth to go: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,depth_atom),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__55444_SHARP_){
return cljs.core.reset_BANG_.call(null,depth_atom,p1__55444_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_.call(null,log_atom,cljs.core.PersistentVector.EMPTY);

return cljs_demo.async.web_crawler.call(null,cljs.core.deref.call(null,url_atom),cljs.core.deref.call(null,depth_atom),log_atom);
})], null),"Crawl!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Crawled URLs:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__24558__auto__ = (function cljs_demo$async$web_crawler_component_$_iter__55449(s__55450){
return (new cljs.core.LazySeq(null,(function (){
var s__55450__$1 = s__55450;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__55450__$1);
if(temp__4425__auto__){
var s__55450__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55450__$2)){
var c__24556__auto__ = cljs.core.chunk_first.call(null,s__55450__$2);
var size__24557__auto__ = cljs.core.count.call(null,c__24556__auto__);
var b__55452 = cljs.core.chunk_buffer.call(null,size__24557__auto__);
if((function (){var i__55451 = (0);
while(true){
if((i__55451 < size__24557__auto__)){
var log = cljs.core._nth.call(null,c__24556__auto__,i__55451);
cljs.core.chunk_append.call(null,b__55452,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),log], null));

var G__55453 = (i__55451 + (1));
i__55451 = G__55453;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55452),cljs_demo$async$web_crawler_component_$_iter__55449.call(null,cljs.core.chunk_rest.call(null,s__55450__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55452),null);
}
} else {
var log = cljs.core.first.call(null,s__55450__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),log], null),cljs_demo$async$web_crawler_component_$_iter__55449.call(null,cljs.core.rest.call(null,s__55450__$2)));
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
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.async","cljs_demo.async",-237609859),new cljs.core.Keyword(null,"async-example2-web-crawler","async-example2-web-crawler",-30701013)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"async-example2-web-crawler",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# Web Crawler\n  _Query a site, parse out urls referenced, and crawl them_",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof cljs_demo.async.t_cljs_demo$async55454 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
cljs_demo.async.t_cljs_demo$async55454 = (function (meta55455){
this.meta55455 = meta55455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_demo.async.t_cljs_demo$async55454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55456,meta55455__$1){
var self__ = this;
var _55456__$1 = this;
return (new cljs_demo.async.t_cljs_demo$async55454(meta55455__$1));
});

cljs_demo.async.t_cljs_demo$async55454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55456){
var self__ = this;
var _55456__$1 = this;
return self__.meta55455;
});

cljs_demo.async.t_cljs_demo$async55454.prototype.devcards$core$IDevcardOptions$ = true;

cljs_demo.async.t_cljs_demo$async55454.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__29448__auto__,devcard_opts__29449__auto__){
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

cljs_demo.async.t_cljs_demo$async55454.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55455","meta55455",337439969,null)], null);
});

cljs_demo.async.t_cljs_demo$async55454.cljs$lang$type = true;

cljs_demo.async.t_cljs_demo$async55454.cljs$lang$ctorStr = "cljs-demo.async/t_cljs_demo$async55454";

cljs_demo.async.t_cljs_demo$async55454.cljs$lang$ctorPrWriter = (function (this__24384__auto__,writer__24385__auto__,opt__24386__auto__){
return cljs.core._write.call(null,writer__24385__auto__,"cljs-demo.async/t_cljs_demo$async55454");
});

cljs_demo.async.__GT_t_cljs_demo$async55454 = (function cljs_demo$async$__GT_t_cljs_demo$async55454(meta55455){
return (new cljs_demo.async.t_cljs_demo$async55454(meta55455));
});

}

return (new cljs_demo.async.t_cljs_demo$async55454(null));
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

//# sourceMappingURL=async.js.map?rel=1453854588681