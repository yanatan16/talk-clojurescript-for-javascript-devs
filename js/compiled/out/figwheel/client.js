// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__46985 = cljs.core._EQ_;
var expr__46986 = (function (){var or__23786__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__46985.call(null,"true",expr__46986))){
return true;
} else {
if(cljs.core.truth_(pred__46985.call(null,"false",expr__46986))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__46986)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__46988__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__46988 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46989__i = 0, G__46989__a = new Array(arguments.length -  0);
while (G__46989__i < G__46989__a.length) {G__46989__a[G__46989__i] = arguments[G__46989__i + 0]; ++G__46989__i;}
  args = new cljs.core.IndexedSeq(G__46989__a,0);
} 
return G__46988__delegate.call(this,args);};
G__46988.cljs$lang$maxFixedArity = 0;
G__46988.cljs$lang$applyTo = (function (arglist__46990){
var args = cljs.core.seq(arglist__46990);
return G__46988__delegate(args);
});
G__46988.cljs$core$IFn$_invoke$arity$variadic = G__46988__delegate;
return G__46988;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__46991){
var map__46994 = p__46991;
var map__46994__$1 = ((((!((map__46994 == null)))?((((map__46994.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46994.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46994):map__46994);
var message = cljs.core.get.call(null,map__46994__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__46994__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__23786__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__23774__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__23774__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__23774__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__25902__auto___47156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto___47156,ch){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto___47156,ch){
return (function (state_47125){
var state_val_47126 = (state_47125[(1)]);
if((state_val_47126 === (7))){
var inst_47121 = (state_47125[(2)]);
var state_47125__$1 = state_47125;
var statearr_47127_47157 = state_47125__$1;
(statearr_47127_47157[(2)] = inst_47121);

(statearr_47127_47157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47126 === (1))){
var state_47125__$1 = state_47125;
var statearr_47128_47158 = state_47125__$1;
(statearr_47128_47158[(2)] = null);

(statearr_47128_47158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47126 === (4))){
var inst_47078 = (state_47125[(7)]);
var inst_47078__$1 = (state_47125[(2)]);
var state_47125__$1 = (function (){var statearr_47129 = state_47125;
(statearr_47129[(7)] = inst_47078__$1);

return statearr_47129;
})();
if(cljs.core.truth_(inst_47078__$1)){
var statearr_47130_47159 = state_47125__$1;
(statearr_47130_47159[(1)] = (5));

} else {
var statearr_47131_47160 = state_47125__$1;
(statearr_47131_47160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47126 === (15))){
var inst_47085 = (state_47125[(8)]);
var inst_47100 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_47085);
var inst_47101 = cljs.core.first.call(null,inst_47100);
var inst_47102 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_47101);
var inst_47103 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_47102)].join('');
var inst_47104 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_47103);
var state_47125__$1 = state_47125;
var statearr_47132_47161 = state_47125__$1;
(statearr_47132_47161[(2)] = inst_47104);

(statearr_47132_47161[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47126 === (13))){
var inst_47109 = (state_47125[(2)]);
var state_47125__$1 = state_47125;
var statearr_47133_47162 = state_47125__$1;
(statearr_47133_47162[(2)] = inst_47109);

(statearr_47133_47162[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47126 === (6))){
var state_47125__$1 = state_47125;
var statearr_47134_47163 = state_47125__$1;
(statearr_47134_47163[(2)] = null);

(statearr_47134_47163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47126 === (17))){
var inst_47107 = (state_47125[(2)]);
var state_47125__$1 = state_47125;
var statearr_47135_47164 = state_47125__$1;
(statearr_47135_47164[(2)] = inst_47107);

(statearr_47135_47164[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47126 === (3))){
var inst_47123 = (state_47125[(2)]);
var state_47125__$1 = state_47125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47125__$1,inst_47123);
} else {
if((state_val_47126 === (12))){
var inst_47084 = (state_47125[(9)]);
var inst_47098 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_47084,opts);
var state_47125__$1 = state_47125;
if(cljs.core.truth_(inst_47098)){
var statearr_47136_47165 = state_47125__$1;
(statearr_47136_47165[(1)] = (15));

} else {
var statearr_47137_47166 = state_47125__$1;
(statearr_47137_47166[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47126 === (2))){
var state_47125__$1 = state_47125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47125__$1,(4),ch);
} else {
if((state_val_47126 === (11))){
var inst_47085 = (state_47125[(8)]);
var inst_47090 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47091 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_47085);
var inst_47092 = cljs.core.async.timeout.call(null,(1000));
var inst_47093 = [inst_47091,inst_47092];
var inst_47094 = (new cljs.core.PersistentVector(null,2,(5),inst_47090,inst_47093,null));
var state_47125__$1 = state_47125;
return cljs.core.async.ioc_alts_BANG_.call(null,state_47125__$1,(14),inst_47094);
} else {
if((state_val_47126 === (9))){
var inst_47085 = (state_47125[(8)]);
var inst_47111 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_47112 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_47085);
var inst_47113 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_47112);
var inst_47114 = [cljs.core.str("Not loading: "),cljs.core.str(inst_47113)].join('');
var inst_47115 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_47114);
var state_47125__$1 = (function (){var statearr_47138 = state_47125;
(statearr_47138[(10)] = inst_47111);

return statearr_47138;
})();
var statearr_47139_47167 = state_47125__$1;
(statearr_47139_47167[(2)] = inst_47115);

(statearr_47139_47167[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47126 === (5))){
var inst_47078 = (state_47125[(7)]);
var inst_47080 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_47081 = (new cljs.core.PersistentArrayMap(null,2,inst_47080,null));
var inst_47082 = (new cljs.core.PersistentHashSet(null,inst_47081,null));
var inst_47083 = figwheel.client.focus_msgs.call(null,inst_47082,inst_47078);
var inst_47084 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_47083);
var inst_47085 = cljs.core.first.call(null,inst_47083);
var inst_47086 = figwheel.client.autoload_QMARK_.call(null);
var state_47125__$1 = (function (){var statearr_47140 = state_47125;
(statearr_47140[(8)] = inst_47085);

(statearr_47140[(9)] = inst_47084);

return statearr_47140;
})();
if(cljs.core.truth_(inst_47086)){
var statearr_47141_47168 = state_47125__$1;
(statearr_47141_47168[(1)] = (8));

} else {
var statearr_47142_47169 = state_47125__$1;
(statearr_47142_47169[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47126 === (14))){
var inst_47096 = (state_47125[(2)]);
var state_47125__$1 = state_47125;
var statearr_47143_47170 = state_47125__$1;
(statearr_47143_47170[(2)] = inst_47096);

(statearr_47143_47170[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47126 === (16))){
var state_47125__$1 = state_47125;
var statearr_47144_47171 = state_47125__$1;
(statearr_47144_47171[(2)] = null);

(statearr_47144_47171[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47126 === (10))){
var inst_47117 = (state_47125[(2)]);
var state_47125__$1 = (function (){var statearr_47145 = state_47125;
(statearr_47145[(11)] = inst_47117);

return statearr_47145;
})();
var statearr_47146_47172 = state_47125__$1;
(statearr_47146_47172[(2)] = null);

(statearr_47146_47172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47126 === (8))){
var inst_47084 = (state_47125[(9)]);
var inst_47088 = figwheel.client.reload_file_state_QMARK_.call(null,inst_47084,opts);
var state_47125__$1 = state_47125;
if(cljs.core.truth_(inst_47088)){
var statearr_47147_47173 = state_47125__$1;
(statearr_47147_47173[(1)] = (11));

} else {
var statearr_47148_47174 = state_47125__$1;
(statearr_47148_47174[(1)] = (12));

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
});})(c__25902__auto___47156,ch))
;
return ((function (switch__25881__auto__,c__25902__auto___47156,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__25882__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__25882__auto____0 = (function (){
var statearr_47152 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47152[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__25882__auto__);

(statearr_47152[(1)] = (1));

return statearr_47152;
});
var figwheel$client$file_reloader_plugin_$_state_machine__25882__auto____1 = (function (state_47125){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_47125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e47153){if((e47153 instanceof Object)){
var ex__25885__auto__ = e47153;
var statearr_47154_47175 = state_47125;
(statearr_47154_47175[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47176 = state_47125;
state_47125 = G__47176;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__25882__auto__ = function(state_47125){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__25882__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__25882__auto____1.call(this,state_47125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__25882__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__25882__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto___47156,ch))
})();
var state__25904__auto__ = (function (){var statearr_47155 = f__25903__auto__.call(null);
(statearr_47155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto___47156);

return statearr_47155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto___47156,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__47177_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__47177_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_47184 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_47184){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_47182 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_47183 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_47182,_STAR_print_newline_STAR_47183,base_path_47184){
return (function() { 
var G__47185__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__47185 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47186__i = 0, G__47186__a = new Array(arguments.length -  0);
while (G__47186__i < G__47186__a.length) {G__47186__a[G__47186__i] = arguments[G__47186__i + 0]; ++G__47186__i;}
  args = new cljs.core.IndexedSeq(G__47186__a,0);
} 
return G__47185__delegate.call(this,args);};
G__47185.cljs$lang$maxFixedArity = 0;
G__47185.cljs$lang$applyTo = (function (arglist__47187){
var args = cljs.core.seq(arglist__47187);
return G__47185__delegate(args);
});
G__47185.cljs$core$IFn$_invoke$arity$variadic = G__47185__delegate;
return G__47185;
})()
;})(_STAR_print_fn_STAR_47182,_STAR_print_newline_STAR_47183,base_path_47184))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_47183;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_47182;
}}catch (e47181){if((e47181 instanceof Error)){
var e = e47181;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_47184], null));
} else {
var e = e47181;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_47184))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__47188){
var map__47195 = p__47188;
var map__47195__$1 = ((((!((map__47195 == null)))?((((map__47195.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47195.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47195):map__47195);
var opts = map__47195__$1;
var build_id = cljs.core.get.call(null,map__47195__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__47195,map__47195__$1,opts,build_id){
return (function (p__47197){
var vec__47198 = p__47197;
var map__47199 = cljs.core.nth.call(null,vec__47198,(0),null);
var map__47199__$1 = ((((!((map__47199 == null)))?((((map__47199.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47199.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47199):map__47199);
var msg = map__47199__$1;
var msg_name = cljs.core.get.call(null,map__47199__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__47198,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__47198,map__47199,map__47199__$1,msg,msg_name,_,map__47195,map__47195__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__47198,map__47199,map__47199__$1,msg,msg_name,_,map__47195,map__47195__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__47195,map__47195__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__47205){
var vec__47206 = p__47205;
var map__47207 = cljs.core.nth.call(null,vec__47206,(0),null);
var map__47207__$1 = ((((!((map__47207 == null)))?((((map__47207.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47207.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47207):map__47207);
var msg = map__47207__$1;
var msg_name = cljs.core.get.call(null,map__47207__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__47206,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__47209){
var map__47219 = p__47209;
var map__47219__$1 = ((((!((map__47219 == null)))?((((map__47219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47219):map__47219);
var on_compile_warning = cljs.core.get.call(null,map__47219__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__47219__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__47219,map__47219__$1,on_compile_warning,on_compile_fail){
return (function (p__47221){
var vec__47222 = p__47221;
var map__47223 = cljs.core.nth.call(null,vec__47222,(0),null);
var map__47223__$1 = ((((!((map__47223 == null)))?((((map__47223.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47223.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47223):map__47223);
var msg = map__47223__$1;
var msg_name = cljs.core.get.call(null,map__47223__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__47222,(1));
var pred__47225 = cljs.core._EQ_;
var expr__47226 = msg_name;
if(cljs.core.truth_(pred__47225.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__47226))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__47225.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__47226))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__47219,map__47219__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__25902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto__,msg_hist,msg_names,msg){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto__,msg_hist,msg_names,msg){
return (function (state_47442){
var state_val_47443 = (state_47442[(1)]);
if((state_val_47443 === (7))){
var inst_47366 = (state_47442[(2)]);
var state_47442__$1 = state_47442;
if(cljs.core.truth_(inst_47366)){
var statearr_47444_47490 = state_47442__$1;
(statearr_47444_47490[(1)] = (8));

} else {
var statearr_47445_47491 = state_47442__$1;
(statearr_47445_47491[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47443 === (20))){
var inst_47436 = (state_47442[(2)]);
var state_47442__$1 = state_47442;
var statearr_47446_47492 = state_47442__$1;
(statearr_47446_47492[(2)] = inst_47436);

(statearr_47446_47492[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47443 === (27))){
var inst_47432 = (state_47442[(2)]);
var state_47442__$1 = state_47442;
var statearr_47447_47493 = state_47442__$1;
(statearr_47447_47493[(2)] = inst_47432);

(statearr_47447_47493[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47443 === (1))){
var inst_47359 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_47442__$1 = state_47442;
if(cljs.core.truth_(inst_47359)){
var statearr_47448_47494 = state_47442__$1;
(statearr_47448_47494[(1)] = (2));

} else {
var statearr_47449_47495 = state_47442__$1;
(statearr_47449_47495[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47443 === (24))){
var inst_47434 = (state_47442[(2)]);
var state_47442__$1 = state_47442;
var statearr_47450_47496 = state_47442__$1;
(statearr_47450_47496[(2)] = inst_47434);

(statearr_47450_47496[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47443 === (4))){
var inst_47440 = (state_47442[(2)]);
var state_47442__$1 = state_47442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47442__$1,inst_47440);
} else {
if((state_val_47443 === (15))){
var inst_47438 = (state_47442[(2)]);
var state_47442__$1 = state_47442;
var statearr_47451_47497 = state_47442__$1;
(statearr_47451_47497[(2)] = inst_47438);

(statearr_47451_47497[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47443 === (21))){
var inst_47397 = (state_47442[(2)]);
var state_47442__$1 = state_47442;
var statearr_47452_47498 = state_47442__$1;
(statearr_47452_47498[(2)] = inst_47397);

(statearr_47452_47498[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47443 === (31))){
var inst_47421 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_47442__$1 = state_47442;
if(cljs.core.truth_(inst_47421)){
var statearr_47453_47499 = state_47442__$1;
(statearr_47453_47499[(1)] = (34));

} else {
var statearr_47454_47500 = state_47442__$1;
(statearr_47454_47500[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47443 === (32))){
var inst_47430 = (state_47442[(2)]);
var state_47442__$1 = state_47442;
var statearr_47455_47501 = state_47442__$1;
(statearr_47455_47501[(2)] = inst_47430);

(statearr_47455_47501[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47443 === (33))){
var inst_47419 = (state_47442[(2)]);
var state_47442__$1 = state_47442;
var statearr_47456_47502 = state_47442__$1;
(statearr_47456_47502[(2)] = inst_47419);

(statearr_47456_47502[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47443 === (13))){
var inst_47380 = figwheel.client.heads_up.clear.call(null);
var state_47442__$1 = state_47442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47442__$1,(16),inst_47380);
} else {
if((state_val_47443 === (22))){
var inst_47401 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47402 = figwheel.client.heads_up.append_message.call(null,inst_47401);
var state_47442__$1 = state_47442;
var statearr_47457_47503 = state_47442__$1;
(statearr_47457_47503[(2)] = inst_47402);

(statearr_47457_47503[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47443 === (36))){
var inst_47428 = (state_47442[(2)]);
var state_47442__$1 = state_47442;
var statearr_47458_47504 = state_47442__$1;
(statearr_47458_47504[(2)] = inst_47428);

(statearr_47458_47504[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47443 === (29))){
var inst_47412 = (state_47442[(2)]);
var state_47442__$1 = state_47442;
var statearr_47459_47505 = state_47442__$1;
(statearr_47459_47505[(2)] = inst_47412);

(statearr_47459_47505[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47443 === (6))){
var inst_47361 = (state_47442[(7)]);
var state_47442__$1 = state_47442;
var statearr_47460_47506 = state_47442__$1;
(statearr_47460_47506[(2)] = inst_47361);

(statearr_47460_47506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47443 === (28))){
var inst_47408 = (state_47442[(2)]);
var inst_47409 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47410 = figwheel.client.heads_up.display_warning.call(null,inst_47409);
var state_47442__$1 = (function (){var statearr_47461 = state_47442;
(statearr_47461[(8)] = inst_47408);

return statearr_47461;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47442__$1,(29),inst_47410);
} else {
if((state_val_47443 === (25))){
var inst_47406 = figwheel.client.heads_up.clear.call(null);
var state_47442__$1 = state_47442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47442__$1,(28),inst_47406);
} else {
if((state_val_47443 === (34))){
var inst_47423 = figwheel.client.heads_up.flash_loaded.call(null);
var state_47442__$1 = state_47442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47442__$1,(37),inst_47423);
} else {
if((state_val_47443 === (17))){
var inst_47388 = (state_47442[(2)]);
var state_47442__$1 = state_47442;
var statearr_47462_47507 = state_47442__$1;
(statearr_47462_47507[(2)] = inst_47388);

(statearr_47462_47507[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47443 === (3))){
var inst_47378 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_47442__$1 = state_47442;
if(cljs.core.truth_(inst_47378)){
var statearr_47463_47508 = state_47442__$1;
(statearr_47463_47508[(1)] = (13));

} else {
var statearr_47464_47509 = state_47442__$1;
(statearr_47464_47509[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47443 === (12))){
var inst_47374 = (state_47442[(2)]);
var state_47442__$1 = state_47442;
var statearr_47465_47510 = state_47442__$1;
(statearr_47465_47510[(2)] = inst_47374);

(statearr_47465_47510[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47443 === (2))){
var inst_47361 = (state_47442[(7)]);
var inst_47361__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_47442__$1 = (function (){var statearr_47466 = state_47442;
(statearr_47466[(7)] = inst_47361__$1);

return statearr_47466;
})();
if(cljs.core.truth_(inst_47361__$1)){
var statearr_47467_47511 = state_47442__$1;
(statearr_47467_47511[(1)] = (5));

} else {
var statearr_47468_47512 = state_47442__$1;
(statearr_47468_47512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47443 === (23))){
var inst_47404 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_47442__$1 = state_47442;
if(cljs.core.truth_(inst_47404)){
var statearr_47469_47513 = state_47442__$1;
(statearr_47469_47513[(1)] = (25));

} else {
var statearr_47470_47514 = state_47442__$1;
(statearr_47470_47514[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47443 === (35))){
var state_47442__$1 = state_47442;
var statearr_47471_47515 = state_47442__$1;
(statearr_47471_47515[(2)] = null);

(statearr_47471_47515[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47443 === (19))){
var inst_47399 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_47442__$1 = state_47442;
if(cljs.core.truth_(inst_47399)){
var statearr_47472_47516 = state_47442__$1;
(statearr_47472_47516[(1)] = (22));

} else {
var statearr_47473_47517 = state_47442__$1;
(statearr_47473_47517[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47443 === (11))){
var inst_47370 = (state_47442[(2)]);
var state_47442__$1 = state_47442;
var statearr_47474_47518 = state_47442__$1;
(statearr_47474_47518[(2)] = inst_47370);

(statearr_47474_47518[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47443 === (9))){
var inst_47372 = figwheel.client.heads_up.clear.call(null);
var state_47442__$1 = state_47442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47442__$1,(12),inst_47372);
} else {
if((state_val_47443 === (5))){
var inst_47363 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_47442__$1 = state_47442;
var statearr_47475_47519 = state_47442__$1;
(statearr_47475_47519[(2)] = inst_47363);

(statearr_47475_47519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47443 === (14))){
var inst_47390 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_47442__$1 = state_47442;
if(cljs.core.truth_(inst_47390)){
var statearr_47476_47520 = state_47442__$1;
(statearr_47476_47520[(1)] = (18));

} else {
var statearr_47477_47521 = state_47442__$1;
(statearr_47477_47521[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47443 === (26))){
var inst_47414 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_47442__$1 = state_47442;
if(cljs.core.truth_(inst_47414)){
var statearr_47478_47522 = state_47442__$1;
(statearr_47478_47522[(1)] = (30));

} else {
var statearr_47479_47523 = state_47442__$1;
(statearr_47479_47523[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47443 === (16))){
var inst_47382 = (state_47442[(2)]);
var inst_47383 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47384 = figwheel.client.format_messages.call(null,inst_47383);
var inst_47385 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47386 = figwheel.client.heads_up.display_error.call(null,inst_47384,inst_47385);
var state_47442__$1 = (function (){var statearr_47480 = state_47442;
(statearr_47480[(9)] = inst_47382);

return statearr_47480;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47442__$1,(17),inst_47386);
} else {
if((state_val_47443 === (30))){
var inst_47416 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47417 = figwheel.client.heads_up.display_warning.call(null,inst_47416);
var state_47442__$1 = state_47442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47442__$1,(33),inst_47417);
} else {
if((state_val_47443 === (10))){
var inst_47376 = (state_47442[(2)]);
var state_47442__$1 = state_47442;
var statearr_47481_47524 = state_47442__$1;
(statearr_47481_47524[(2)] = inst_47376);

(statearr_47481_47524[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47443 === (18))){
var inst_47392 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47393 = figwheel.client.format_messages.call(null,inst_47392);
var inst_47394 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47395 = figwheel.client.heads_up.display_error.call(null,inst_47393,inst_47394);
var state_47442__$1 = state_47442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47442__$1,(21),inst_47395);
} else {
if((state_val_47443 === (37))){
var inst_47425 = (state_47442[(2)]);
var state_47442__$1 = state_47442;
var statearr_47482_47525 = state_47442__$1;
(statearr_47482_47525[(2)] = inst_47425);

(statearr_47482_47525[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47443 === (8))){
var inst_47368 = figwheel.client.heads_up.flash_loaded.call(null);
var state_47442__$1 = state_47442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47442__$1,(11),inst_47368);
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
});})(c__25902__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__25881__auto__,c__25902__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25882__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25882__auto____0 = (function (){
var statearr_47486 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47486[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25882__auto__);

(statearr_47486[(1)] = (1));

return statearr_47486;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25882__auto____1 = (function (state_47442){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_47442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e47487){if((e47487 instanceof Object)){
var ex__25885__auto__ = e47487;
var statearr_47488_47526 = state_47442;
(statearr_47488_47526[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47527 = state_47442;
state_47442 = G__47527;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25882__auto__ = function(state_47442){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25882__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25882__auto____1.call(this,state_47442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25882__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25882__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto__,msg_hist,msg_names,msg))
})();
var state__25904__auto__ = (function (){var statearr_47489 = f__25903__auto__.call(null);
(statearr_47489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto__);

return statearr_47489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto__,msg_hist,msg_names,msg))
);

return c__25902__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__25902__auto___47590 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto___47590,ch){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto___47590,ch){
return (function (state_47573){
var state_val_47574 = (state_47573[(1)]);
if((state_val_47574 === (1))){
var state_47573__$1 = state_47573;
var statearr_47575_47591 = state_47573__$1;
(statearr_47575_47591[(2)] = null);

(statearr_47575_47591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47574 === (2))){
var state_47573__$1 = state_47573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47573__$1,(4),ch);
} else {
if((state_val_47574 === (3))){
var inst_47571 = (state_47573[(2)]);
var state_47573__$1 = state_47573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47573__$1,inst_47571);
} else {
if((state_val_47574 === (4))){
var inst_47561 = (state_47573[(7)]);
var inst_47561__$1 = (state_47573[(2)]);
var state_47573__$1 = (function (){var statearr_47576 = state_47573;
(statearr_47576[(7)] = inst_47561__$1);

return statearr_47576;
})();
if(cljs.core.truth_(inst_47561__$1)){
var statearr_47577_47592 = state_47573__$1;
(statearr_47577_47592[(1)] = (5));

} else {
var statearr_47578_47593 = state_47573__$1;
(statearr_47578_47593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47574 === (5))){
var inst_47561 = (state_47573[(7)]);
var inst_47563 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_47561);
var state_47573__$1 = state_47573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47573__$1,(8),inst_47563);
} else {
if((state_val_47574 === (6))){
var state_47573__$1 = state_47573;
var statearr_47579_47594 = state_47573__$1;
(statearr_47579_47594[(2)] = null);

(statearr_47579_47594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47574 === (7))){
var inst_47569 = (state_47573[(2)]);
var state_47573__$1 = state_47573;
var statearr_47580_47595 = state_47573__$1;
(statearr_47580_47595[(2)] = inst_47569);

(statearr_47580_47595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47574 === (8))){
var inst_47565 = (state_47573[(2)]);
var state_47573__$1 = (function (){var statearr_47581 = state_47573;
(statearr_47581[(8)] = inst_47565);

return statearr_47581;
})();
var statearr_47582_47596 = state_47573__$1;
(statearr_47582_47596[(2)] = null);

(statearr_47582_47596[(1)] = (2));


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
});})(c__25902__auto___47590,ch))
;
return ((function (switch__25881__auto__,c__25902__auto___47590,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__25882__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__25882__auto____0 = (function (){
var statearr_47586 = [null,null,null,null,null,null,null,null,null];
(statearr_47586[(0)] = figwheel$client$heads_up_plugin_$_state_machine__25882__auto__);

(statearr_47586[(1)] = (1));

return statearr_47586;
});
var figwheel$client$heads_up_plugin_$_state_machine__25882__auto____1 = (function (state_47573){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_47573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e47587){if((e47587 instanceof Object)){
var ex__25885__auto__ = e47587;
var statearr_47588_47597 = state_47573;
(statearr_47588_47597[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47598 = state_47573;
state_47573 = G__47598;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__25882__auto__ = function(state_47573){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__25882__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__25882__auto____1.call(this,state_47573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__25882__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__25882__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto___47590,ch))
})();
var state__25904__auto__ = (function (){var statearr_47589 = f__25903__auto__.call(null);
(statearr_47589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto___47590);

return statearr_47589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto___47590,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__25902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto__){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto__){
return (function (state_47619){
var state_val_47620 = (state_47619[(1)]);
if((state_val_47620 === (1))){
var inst_47614 = cljs.core.async.timeout.call(null,(3000));
var state_47619__$1 = state_47619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47619__$1,(2),inst_47614);
} else {
if((state_val_47620 === (2))){
var inst_47616 = (state_47619[(2)]);
var inst_47617 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_47619__$1 = (function (){var statearr_47621 = state_47619;
(statearr_47621[(7)] = inst_47616);

return statearr_47621;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47619__$1,inst_47617);
} else {
return null;
}
}
});})(c__25902__auto__))
;
return ((function (switch__25881__auto__,c__25902__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__25882__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__25882__auto____0 = (function (){
var statearr_47625 = [null,null,null,null,null,null,null,null];
(statearr_47625[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__25882__auto__);

(statearr_47625[(1)] = (1));

return statearr_47625;
});
var figwheel$client$enforce_project_plugin_$_state_machine__25882__auto____1 = (function (state_47619){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_47619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e47626){if((e47626 instanceof Object)){
var ex__25885__auto__ = e47626;
var statearr_47627_47629 = state_47619;
(statearr_47627_47629[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47630 = state_47619;
state_47619 = G__47630;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__25882__auto__ = function(state_47619){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__25882__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__25882__auto____1.call(this,state_47619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__25882__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__25882__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto__))
})();
var state__25904__auto__ = (function (){var statearr_47628 = f__25903__auto__.call(null);
(statearr_47628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto__);

return statearr_47628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto__))
);

return c__25902__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__47631){
var map__47638 = p__47631;
var map__47638__$1 = ((((!((map__47638 == null)))?((((map__47638.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47638.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47638):map__47638);
var ed = map__47638__$1;
var formatted_exception = cljs.core.get.call(null,map__47638__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__47638__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__47638__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__47640_47644 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__47641_47645 = null;
var count__47642_47646 = (0);
var i__47643_47647 = (0);
while(true){
if((i__47643_47647 < count__47642_47646)){
var msg_47648 = cljs.core._nth.call(null,chunk__47641_47645,i__47643_47647);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_47648);

var G__47649 = seq__47640_47644;
var G__47650 = chunk__47641_47645;
var G__47651 = count__47642_47646;
var G__47652 = (i__47643_47647 + (1));
seq__47640_47644 = G__47649;
chunk__47641_47645 = G__47650;
count__47642_47646 = G__47651;
i__47643_47647 = G__47652;
continue;
} else {
var temp__4425__auto___47653 = cljs.core.seq.call(null,seq__47640_47644);
if(temp__4425__auto___47653){
var seq__47640_47654__$1 = temp__4425__auto___47653;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47640_47654__$1)){
var c__24589__auto___47655 = cljs.core.chunk_first.call(null,seq__47640_47654__$1);
var G__47656 = cljs.core.chunk_rest.call(null,seq__47640_47654__$1);
var G__47657 = c__24589__auto___47655;
var G__47658 = cljs.core.count.call(null,c__24589__auto___47655);
var G__47659 = (0);
seq__47640_47644 = G__47656;
chunk__47641_47645 = G__47657;
count__47642_47646 = G__47658;
i__47643_47647 = G__47659;
continue;
} else {
var msg_47660 = cljs.core.first.call(null,seq__47640_47654__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_47660);

var G__47661 = cljs.core.next.call(null,seq__47640_47654__$1);
var G__47662 = null;
var G__47663 = (0);
var G__47664 = (0);
seq__47640_47644 = G__47661;
chunk__47641_47645 = G__47662;
count__47642_47646 = G__47663;
i__47643_47647 = G__47664;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__47665){
var map__47668 = p__47665;
var map__47668__$1 = ((((!((map__47668 == null)))?((((map__47668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47668):map__47668);
var w = map__47668__$1;
var message = cljs.core.get.call(null,map__47668__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__23774__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__23774__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__23774__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__47676 = cljs.core.seq.call(null,plugins);
var chunk__47677 = null;
var count__47678 = (0);
var i__47679 = (0);
while(true){
if((i__47679 < count__47678)){
var vec__47680 = cljs.core._nth.call(null,chunk__47677,i__47679);
var k = cljs.core.nth.call(null,vec__47680,(0),null);
var plugin = cljs.core.nth.call(null,vec__47680,(1),null);
if(cljs.core.truth_(plugin)){
var pl_47682 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__47676,chunk__47677,count__47678,i__47679,pl_47682,vec__47680,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_47682.call(null,msg_hist);
});})(seq__47676,chunk__47677,count__47678,i__47679,pl_47682,vec__47680,k,plugin))
);
} else {
}

var G__47683 = seq__47676;
var G__47684 = chunk__47677;
var G__47685 = count__47678;
var G__47686 = (i__47679 + (1));
seq__47676 = G__47683;
chunk__47677 = G__47684;
count__47678 = G__47685;
i__47679 = G__47686;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__47676);
if(temp__4425__auto__){
var seq__47676__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47676__$1)){
var c__24589__auto__ = cljs.core.chunk_first.call(null,seq__47676__$1);
var G__47687 = cljs.core.chunk_rest.call(null,seq__47676__$1);
var G__47688 = c__24589__auto__;
var G__47689 = cljs.core.count.call(null,c__24589__auto__);
var G__47690 = (0);
seq__47676 = G__47687;
chunk__47677 = G__47688;
count__47678 = G__47689;
i__47679 = G__47690;
continue;
} else {
var vec__47681 = cljs.core.first.call(null,seq__47676__$1);
var k = cljs.core.nth.call(null,vec__47681,(0),null);
var plugin = cljs.core.nth.call(null,vec__47681,(1),null);
if(cljs.core.truth_(plugin)){
var pl_47691 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__47676,chunk__47677,count__47678,i__47679,pl_47691,vec__47681,k,plugin,seq__47676__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_47691.call(null,msg_hist);
});})(seq__47676,chunk__47677,count__47678,i__47679,pl_47691,vec__47681,k,plugin,seq__47676__$1,temp__4425__auto__))
);
} else {
}

var G__47692 = cljs.core.next.call(null,seq__47676__$1);
var G__47693 = null;
var G__47694 = (0);
var G__47695 = (0);
seq__47676 = G__47692;
chunk__47677 = G__47693;
count__47678 = G__47694;
i__47679 = G__47695;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args47696 = [];
var len__24844__auto___47699 = arguments.length;
var i__24845__auto___47700 = (0);
while(true){
if((i__24845__auto___47700 < len__24844__auto___47699)){
args47696.push((arguments[i__24845__auto___47700]));

var G__47701 = (i__24845__auto___47700 + (1));
i__24845__auto___47700 = G__47701;
continue;
} else {
}
break;
}

var G__47698 = args47696.length;
switch (G__47698) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47696.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__24851__auto__ = [];
var len__24844__auto___47707 = arguments.length;
var i__24845__auto___47708 = (0);
while(true){
if((i__24845__auto___47708 < len__24844__auto___47707)){
args__24851__auto__.push((arguments[i__24845__auto___47708]));

var G__47709 = (i__24845__auto___47708 + (1));
i__24845__auto___47708 = G__47709;
continue;
} else {
}
break;
}

var argseq__24852__auto__ = ((((0) < args__24851__auto__.length))?(new cljs.core.IndexedSeq(args__24851__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__24852__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__47704){
var map__47705 = p__47704;
var map__47705__$1 = ((((!((map__47705 == null)))?((((map__47705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47705):map__47705);
var opts = map__47705__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq47703){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47703));
});

//# sourceMappingURL=client.js.map?rel=1453744776642