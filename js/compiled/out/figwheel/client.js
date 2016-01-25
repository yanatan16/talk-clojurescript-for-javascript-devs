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
var pred__37742 = cljs.core._EQ_;
var expr__37743 = (function (){var or__23786__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__37742.call(null,"true",expr__37743))){
return true;
} else {
if(cljs.core.truth_(pred__37742.call(null,"false",expr__37743))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__37743)].join('')));
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
var G__37745__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__37745 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37746__i = 0, G__37746__a = new Array(arguments.length -  0);
while (G__37746__i < G__37746__a.length) {G__37746__a[G__37746__i] = arguments[G__37746__i + 0]; ++G__37746__i;}
  args = new cljs.core.IndexedSeq(G__37746__a,0);
} 
return G__37745__delegate.call(this,args);};
G__37745.cljs$lang$maxFixedArity = 0;
G__37745.cljs$lang$applyTo = (function (arglist__37747){
var args = cljs.core.seq(arglist__37747);
return G__37745__delegate(args);
});
G__37745.cljs$core$IFn$_invoke$arity$variadic = G__37745__delegate;
return G__37745;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37748){
var map__37751 = p__37748;
var map__37751__$1 = ((((!((map__37751 == null)))?((((map__37751.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37751.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37751):map__37751);
var message = cljs.core.get.call(null,map__37751__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37751__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__25902__auto___37913 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto___37913,ch){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto___37913,ch){
return (function (state_37882){
var state_val_37883 = (state_37882[(1)]);
if((state_val_37883 === (7))){
var inst_37878 = (state_37882[(2)]);
var state_37882__$1 = state_37882;
var statearr_37884_37914 = state_37882__$1;
(statearr_37884_37914[(2)] = inst_37878);

(statearr_37884_37914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37883 === (1))){
var state_37882__$1 = state_37882;
var statearr_37885_37915 = state_37882__$1;
(statearr_37885_37915[(2)] = null);

(statearr_37885_37915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37883 === (4))){
var inst_37835 = (state_37882[(7)]);
var inst_37835__$1 = (state_37882[(2)]);
var state_37882__$1 = (function (){var statearr_37886 = state_37882;
(statearr_37886[(7)] = inst_37835__$1);

return statearr_37886;
})();
if(cljs.core.truth_(inst_37835__$1)){
var statearr_37887_37916 = state_37882__$1;
(statearr_37887_37916[(1)] = (5));

} else {
var statearr_37888_37917 = state_37882__$1;
(statearr_37888_37917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37883 === (15))){
var inst_37842 = (state_37882[(8)]);
var inst_37857 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37842);
var inst_37858 = cljs.core.first.call(null,inst_37857);
var inst_37859 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37858);
var inst_37860 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_37859)].join('');
var inst_37861 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37860);
var state_37882__$1 = state_37882;
var statearr_37889_37918 = state_37882__$1;
(statearr_37889_37918[(2)] = inst_37861);

(statearr_37889_37918[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37883 === (13))){
var inst_37866 = (state_37882[(2)]);
var state_37882__$1 = state_37882;
var statearr_37890_37919 = state_37882__$1;
(statearr_37890_37919[(2)] = inst_37866);

(statearr_37890_37919[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37883 === (6))){
var state_37882__$1 = state_37882;
var statearr_37891_37920 = state_37882__$1;
(statearr_37891_37920[(2)] = null);

(statearr_37891_37920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37883 === (17))){
var inst_37864 = (state_37882[(2)]);
var state_37882__$1 = state_37882;
var statearr_37892_37921 = state_37882__$1;
(statearr_37892_37921[(2)] = inst_37864);

(statearr_37892_37921[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37883 === (3))){
var inst_37880 = (state_37882[(2)]);
var state_37882__$1 = state_37882;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37882__$1,inst_37880);
} else {
if((state_val_37883 === (12))){
var inst_37841 = (state_37882[(9)]);
var inst_37855 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37841,opts);
var state_37882__$1 = state_37882;
if(cljs.core.truth_(inst_37855)){
var statearr_37893_37922 = state_37882__$1;
(statearr_37893_37922[(1)] = (15));

} else {
var statearr_37894_37923 = state_37882__$1;
(statearr_37894_37923[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37883 === (2))){
var state_37882__$1 = state_37882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37882__$1,(4),ch);
} else {
if((state_val_37883 === (11))){
var inst_37842 = (state_37882[(8)]);
var inst_37847 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37848 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37842);
var inst_37849 = cljs.core.async.timeout.call(null,(1000));
var inst_37850 = [inst_37848,inst_37849];
var inst_37851 = (new cljs.core.PersistentVector(null,2,(5),inst_37847,inst_37850,null));
var state_37882__$1 = state_37882;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37882__$1,(14),inst_37851);
} else {
if((state_val_37883 === (9))){
var inst_37842 = (state_37882[(8)]);
var inst_37868 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37869 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37842);
var inst_37870 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37869);
var inst_37871 = [cljs.core.str("Not loading: "),cljs.core.str(inst_37870)].join('');
var inst_37872 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37871);
var state_37882__$1 = (function (){var statearr_37895 = state_37882;
(statearr_37895[(10)] = inst_37868);

return statearr_37895;
})();
var statearr_37896_37924 = state_37882__$1;
(statearr_37896_37924[(2)] = inst_37872);

(statearr_37896_37924[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37883 === (5))){
var inst_37835 = (state_37882[(7)]);
var inst_37837 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37838 = (new cljs.core.PersistentArrayMap(null,2,inst_37837,null));
var inst_37839 = (new cljs.core.PersistentHashSet(null,inst_37838,null));
var inst_37840 = figwheel.client.focus_msgs.call(null,inst_37839,inst_37835);
var inst_37841 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37840);
var inst_37842 = cljs.core.first.call(null,inst_37840);
var inst_37843 = figwheel.client.autoload_QMARK_.call(null);
var state_37882__$1 = (function (){var statearr_37897 = state_37882;
(statearr_37897[(9)] = inst_37841);

(statearr_37897[(8)] = inst_37842);

return statearr_37897;
})();
if(cljs.core.truth_(inst_37843)){
var statearr_37898_37925 = state_37882__$1;
(statearr_37898_37925[(1)] = (8));

} else {
var statearr_37899_37926 = state_37882__$1;
(statearr_37899_37926[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37883 === (14))){
var inst_37853 = (state_37882[(2)]);
var state_37882__$1 = state_37882;
var statearr_37900_37927 = state_37882__$1;
(statearr_37900_37927[(2)] = inst_37853);

(statearr_37900_37927[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37883 === (16))){
var state_37882__$1 = state_37882;
var statearr_37901_37928 = state_37882__$1;
(statearr_37901_37928[(2)] = null);

(statearr_37901_37928[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37883 === (10))){
var inst_37874 = (state_37882[(2)]);
var state_37882__$1 = (function (){var statearr_37902 = state_37882;
(statearr_37902[(11)] = inst_37874);

return statearr_37902;
})();
var statearr_37903_37929 = state_37882__$1;
(statearr_37903_37929[(2)] = null);

(statearr_37903_37929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37883 === (8))){
var inst_37841 = (state_37882[(9)]);
var inst_37845 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37841,opts);
var state_37882__$1 = state_37882;
if(cljs.core.truth_(inst_37845)){
var statearr_37904_37930 = state_37882__$1;
(statearr_37904_37930[(1)] = (11));

} else {
var statearr_37905_37931 = state_37882__$1;
(statearr_37905_37931[(1)] = (12));

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
});})(c__25902__auto___37913,ch))
;
return ((function (switch__25881__auto__,c__25902__auto___37913,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__25882__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__25882__auto____0 = (function (){
var statearr_37909 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37909[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__25882__auto__);

(statearr_37909[(1)] = (1));

return statearr_37909;
});
var figwheel$client$file_reloader_plugin_$_state_machine__25882__auto____1 = (function (state_37882){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_37882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e37910){if((e37910 instanceof Object)){
var ex__25885__auto__ = e37910;
var statearr_37911_37932 = state_37882;
(statearr_37911_37932[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37933 = state_37882;
state_37882 = G__37933;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__25882__auto__ = function(state_37882){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__25882__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__25882__auto____1.call(this,state_37882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__25882__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__25882__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto___37913,ch))
})();
var state__25904__auto__ = (function (){var statearr_37912 = f__25903__auto__.call(null);
(statearr_37912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto___37913);

return statearr_37912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto___37913,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37934_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37934_SHARP_));
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
var base_path_37941 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37941){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_37939 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_37940 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_37939,_STAR_print_newline_STAR_37940,base_path_37941){
return (function() { 
var G__37942__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__37942 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37943__i = 0, G__37943__a = new Array(arguments.length -  0);
while (G__37943__i < G__37943__a.length) {G__37943__a[G__37943__i] = arguments[G__37943__i + 0]; ++G__37943__i;}
  args = new cljs.core.IndexedSeq(G__37943__a,0);
} 
return G__37942__delegate.call(this,args);};
G__37942.cljs$lang$maxFixedArity = 0;
G__37942.cljs$lang$applyTo = (function (arglist__37944){
var args = cljs.core.seq(arglist__37944);
return G__37942__delegate(args);
});
G__37942.cljs$core$IFn$_invoke$arity$variadic = G__37942__delegate;
return G__37942;
})()
;})(_STAR_print_fn_STAR_37939,_STAR_print_newline_STAR_37940,base_path_37941))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_37940;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_37939;
}}catch (e37938){if((e37938 instanceof Error)){
var e = e37938;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37941], null));
} else {
var e = e37938;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_37941))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37945){
var map__37952 = p__37945;
var map__37952__$1 = ((((!((map__37952 == null)))?((((map__37952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37952):map__37952);
var opts = map__37952__$1;
var build_id = cljs.core.get.call(null,map__37952__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37952,map__37952__$1,opts,build_id){
return (function (p__37954){
var vec__37955 = p__37954;
var map__37956 = cljs.core.nth.call(null,vec__37955,(0),null);
var map__37956__$1 = ((((!((map__37956 == null)))?((((map__37956.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37956.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37956):map__37956);
var msg = map__37956__$1;
var msg_name = cljs.core.get.call(null,map__37956__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__37955,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37955,map__37956,map__37956__$1,msg,msg_name,_,map__37952,map__37952__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37955,map__37956,map__37956__$1,msg,msg_name,_,map__37952,map__37952__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37952,map__37952__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37962){
var vec__37963 = p__37962;
var map__37964 = cljs.core.nth.call(null,vec__37963,(0),null);
var map__37964__$1 = ((((!((map__37964 == null)))?((((map__37964.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37964.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37964):map__37964);
var msg = map__37964__$1;
var msg_name = cljs.core.get.call(null,map__37964__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__37963,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37966){
var map__37976 = p__37966;
var map__37976__$1 = ((((!((map__37976 == null)))?((((map__37976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37976):map__37976);
var on_compile_warning = cljs.core.get.call(null,map__37976__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37976__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37976,map__37976__$1,on_compile_warning,on_compile_fail){
return (function (p__37978){
var vec__37979 = p__37978;
var map__37980 = cljs.core.nth.call(null,vec__37979,(0),null);
var map__37980__$1 = ((((!((map__37980 == null)))?((((map__37980.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37980.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37980):map__37980);
var msg = map__37980__$1;
var msg_name = cljs.core.get.call(null,map__37980__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__37979,(1));
var pred__37982 = cljs.core._EQ_;
var expr__37983 = msg_name;
if(cljs.core.truth_(pred__37982.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37983))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37982.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37983))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37976,map__37976__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__25902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto__,msg_hist,msg_names,msg){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto__,msg_hist,msg_names,msg){
return (function (state_38199){
var state_val_38200 = (state_38199[(1)]);
if((state_val_38200 === (7))){
var inst_38123 = (state_38199[(2)]);
var state_38199__$1 = state_38199;
if(cljs.core.truth_(inst_38123)){
var statearr_38201_38247 = state_38199__$1;
(statearr_38201_38247[(1)] = (8));

} else {
var statearr_38202_38248 = state_38199__$1;
(statearr_38202_38248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (20))){
var inst_38193 = (state_38199[(2)]);
var state_38199__$1 = state_38199;
var statearr_38203_38249 = state_38199__$1;
(statearr_38203_38249[(2)] = inst_38193);

(statearr_38203_38249[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (27))){
var inst_38189 = (state_38199[(2)]);
var state_38199__$1 = state_38199;
var statearr_38204_38250 = state_38199__$1;
(statearr_38204_38250[(2)] = inst_38189);

(statearr_38204_38250[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (1))){
var inst_38116 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38199__$1 = state_38199;
if(cljs.core.truth_(inst_38116)){
var statearr_38205_38251 = state_38199__$1;
(statearr_38205_38251[(1)] = (2));

} else {
var statearr_38206_38252 = state_38199__$1;
(statearr_38206_38252[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (24))){
var inst_38191 = (state_38199[(2)]);
var state_38199__$1 = state_38199;
var statearr_38207_38253 = state_38199__$1;
(statearr_38207_38253[(2)] = inst_38191);

(statearr_38207_38253[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (4))){
var inst_38197 = (state_38199[(2)]);
var state_38199__$1 = state_38199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38199__$1,inst_38197);
} else {
if((state_val_38200 === (15))){
var inst_38195 = (state_38199[(2)]);
var state_38199__$1 = state_38199;
var statearr_38208_38254 = state_38199__$1;
(statearr_38208_38254[(2)] = inst_38195);

(statearr_38208_38254[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (21))){
var inst_38154 = (state_38199[(2)]);
var state_38199__$1 = state_38199;
var statearr_38209_38255 = state_38199__$1;
(statearr_38209_38255[(2)] = inst_38154);

(statearr_38209_38255[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (31))){
var inst_38178 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38199__$1 = state_38199;
if(cljs.core.truth_(inst_38178)){
var statearr_38210_38256 = state_38199__$1;
(statearr_38210_38256[(1)] = (34));

} else {
var statearr_38211_38257 = state_38199__$1;
(statearr_38211_38257[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (32))){
var inst_38187 = (state_38199[(2)]);
var state_38199__$1 = state_38199;
var statearr_38212_38258 = state_38199__$1;
(statearr_38212_38258[(2)] = inst_38187);

(statearr_38212_38258[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (33))){
var inst_38176 = (state_38199[(2)]);
var state_38199__$1 = state_38199;
var statearr_38213_38259 = state_38199__$1;
(statearr_38213_38259[(2)] = inst_38176);

(statearr_38213_38259[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (13))){
var inst_38137 = figwheel.client.heads_up.clear.call(null);
var state_38199__$1 = state_38199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38199__$1,(16),inst_38137);
} else {
if((state_val_38200 === (22))){
var inst_38158 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38159 = figwheel.client.heads_up.append_message.call(null,inst_38158);
var state_38199__$1 = state_38199;
var statearr_38214_38260 = state_38199__$1;
(statearr_38214_38260[(2)] = inst_38159);

(statearr_38214_38260[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (36))){
var inst_38185 = (state_38199[(2)]);
var state_38199__$1 = state_38199;
var statearr_38215_38261 = state_38199__$1;
(statearr_38215_38261[(2)] = inst_38185);

(statearr_38215_38261[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (29))){
var inst_38169 = (state_38199[(2)]);
var state_38199__$1 = state_38199;
var statearr_38216_38262 = state_38199__$1;
(statearr_38216_38262[(2)] = inst_38169);

(statearr_38216_38262[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (6))){
var inst_38118 = (state_38199[(7)]);
var state_38199__$1 = state_38199;
var statearr_38217_38263 = state_38199__$1;
(statearr_38217_38263[(2)] = inst_38118);

(statearr_38217_38263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (28))){
var inst_38165 = (state_38199[(2)]);
var inst_38166 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38167 = figwheel.client.heads_up.display_warning.call(null,inst_38166);
var state_38199__$1 = (function (){var statearr_38218 = state_38199;
(statearr_38218[(8)] = inst_38165);

return statearr_38218;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38199__$1,(29),inst_38167);
} else {
if((state_val_38200 === (25))){
var inst_38163 = figwheel.client.heads_up.clear.call(null);
var state_38199__$1 = state_38199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38199__$1,(28),inst_38163);
} else {
if((state_val_38200 === (34))){
var inst_38180 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38199__$1 = state_38199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38199__$1,(37),inst_38180);
} else {
if((state_val_38200 === (17))){
var inst_38145 = (state_38199[(2)]);
var state_38199__$1 = state_38199;
var statearr_38219_38264 = state_38199__$1;
(statearr_38219_38264[(2)] = inst_38145);

(statearr_38219_38264[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (3))){
var inst_38135 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38199__$1 = state_38199;
if(cljs.core.truth_(inst_38135)){
var statearr_38220_38265 = state_38199__$1;
(statearr_38220_38265[(1)] = (13));

} else {
var statearr_38221_38266 = state_38199__$1;
(statearr_38221_38266[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (12))){
var inst_38131 = (state_38199[(2)]);
var state_38199__$1 = state_38199;
var statearr_38222_38267 = state_38199__$1;
(statearr_38222_38267[(2)] = inst_38131);

(statearr_38222_38267[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (2))){
var inst_38118 = (state_38199[(7)]);
var inst_38118__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38199__$1 = (function (){var statearr_38223 = state_38199;
(statearr_38223[(7)] = inst_38118__$1);

return statearr_38223;
})();
if(cljs.core.truth_(inst_38118__$1)){
var statearr_38224_38268 = state_38199__$1;
(statearr_38224_38268[(1)] = (5));

} else {
var statearr_38225_38269 = state_38199__$1;
(statearr_38225_38269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (23))){
var inst_38161 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38199__$1 = state_38199;
if(cljs.core.truth_(inst_38161)){
var statearr_38226_38270 = state_38199__$1;
(statearr_38226_38270[(1)] = (25));

} else {
var statearr_38227_38271 = state_38199__$1;
(statearr_38227_38271[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (35))){
var state_38199__$1 = state_38199;
var statearr_38228_38272 = state_38199__$1;
(statearr_38228_38272[(2)] = null);

(statearr_38228_38272[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (19))){
var inst_38156 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38199__$1 = state_38199;
if(cljs.core.truth_(inst_38156)){
var statearr_38229_38273 = state_38199__$1;
(statearr_38229_38273[(1)] = (22));

} else {
var statearr_38230_38274 = state_38199__$1;
(statearr_38230_38274[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (11))){
var inst_38127 = (state_38199[(2)]);
var state_38199__$1 = state_38199;
var statearr_38231_38275 = state_38199__$1;
(statearr_38231_38275[(2)] = inst_38127);

(statearr_38231_38275[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (9))){
var inst_38129 = figwheel.client.heads_up.clear.call(null);
var state_38199__$1 = state_38199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38199__$1,(12),inst_38129);
} else {
if((state_val_38200 === (5))){
var inst_38120 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38199__$1 = state_38199;
var statearr_38232_38276 = state_38199__$1;
(statearr_38232_38276[(2)] = inst_38120);

(statearr_38232_38276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (14))){
var inst_38147 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38199__$1 = state_38199;
if(cljs.core.truth_(inst_38147)){
var statearr_38233_38277 = state_38199__$1;
(statearr_38233_38277[(1)] = (18));

} else {
var statearr_38234_38278 = state_38199__$1;
(statearr_38234_38278[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (26))){
var inst_38171 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38199__$1 = state_38199;
if(cljs.core.truth_(inst_38171)){
var statearr_38235_38279 = state_38199__$1;
(statearr_38235_38279[(1)] = (30));

} else {
var statearr_38236_38280 = state_38199__$1;
(statearr_38236_38280[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (16))){
var inst_38139 = (state_38199[(2)]);
var inst_38140 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38141 = figwheel.client.format_messages.call(null,inst_38140);
var inst_38142 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38143 = figwheel.client.heads_up.display_error.call(null,inst_38141,inst_38142);
var state_38199__$1 = (function (){var statearr_38237 = state_38199;
(statearr_38237[(9)] = inst_38139);

return statearr_38237;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38199__$1,(17),inst_38143);
} else {
if((state_val_38200 === (30))){
var inst_38173 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38174 = figwheel.client.heads_up.display_warning.call(null,inst_38173);
var state_38199__$1 = state_38199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38199__$1,(33),inst_38174);
} else {
if((state_val_38200 === (10))){
var inst_38133 = (state_38199[(2)]);
var state_38199__$1 = state_38199;
var statearr_38238_38281 = state_38199__$1;
(statearr_38238_38281[(2)] = inst_38133);

(statearr_38238_38281[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (18))){
var inst_38149 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38150 = figwheel.client.format_messages.call(null,inst_38149);
var inst_38151 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38152 = figwheel.client.heads_up.display_error.call(null,inst_38150,inst_38151);
var state_38199__$1 = state_38199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38199__$1,(21),inst_38152);
} else {
if((state_val_38200 === (37))){
var inst_38182 = (state_38199[(2)]);
var state_38199__$1 = state_38199;
var statearr_38239_38282 = state_38199__$1;
(statearr_38239_38282[(2)] = inst_38182);

(statearr_38239_38282[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38200 === (8))){
var inst_38125 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38199__$1 = state_38199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38199__$1,(11),inst_38125);
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
var statearr_38243 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38243[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25882__auto__);

(statearr_38243[(1)] = (1));

return statearr_38243;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25882__auto____1 = (function (state_38199){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_38199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e38244){if((e38244 instanceof Object)){
var ex__25885__auto__ = e38244;
var statearr_38245_38283 = state_38199;
(statearr_38245_38283[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38284 = state_38199;
state_38199 = G__38284;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25882__auto__ = function(state_38199){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25882__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25882__auto____1.call(this,state_38199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25882__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25882__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto__,msg_hist,msg_names,msg))
})();
var state__25904__auto__ = (function (){var statearr_38246 = f__25903__auto__.call(null);
(statearr_38246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto__);

return statearr_38246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto__,msg_hist,msg_names,msg))
);

return c__25902__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__25902__auto___38347 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto___38347,ch){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto___38347,ch){
return (function (state_38330){
var state_val_38331 = (state_38330[(1)]);
if((state_val_38331 === (1))){
var state_38330__$1 = state_38330;
var statearr_38332_38348 = state_38330__$1;
(statearr_38332_38348[(2)] = null);

(statearr_38332_38348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38331 === (2))){
var state_38330__$1 = state_38330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38330__$1,(4),ch);
} else {
if((state_val_38331 === (3))){
var inst_38328 = (state_38330[(2)]);
var state_38330__$1 = state_38330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38330__$1,inst_38328);
} else {
if((state_val_38331 === (4))){
var inst_38318 = (state_38330[(7)]);
var inst_38318__$1 = (state_38330[(2)]);
var state_38330__$1 = (function (){var statearr_38333 = state_38330;
(statearr_38333[(7)] = inst_38318__$1);

return statearr_38333;
})();
if(cljs.core.truth_(inst_38318__$1)){
var statearr_38334_38349 = state_38330__$1;
(statearr_38334_38349[(1)] = (5));

} else {
var statearr_38335_38350 = state_38330__$1;
(statearr_38335_38350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38331 === (5))){
var inst_38318 = (state_38330[(7)]);
var inst_38320 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38318);
var state_38330__$1 = state_38330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38330__$1,(8),inst_38320);
} else {
if((state_val_38331 === (6))){
var state_38330__$1 = state_38330;
var statearr_38336_38351 = state_38330__$1;
(statearr_38336_38351[(2)] = null);

(statearr_38336_38351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38331 === (7))){
var inst_38326 = (state_38330[(2)]);
var state_38330__$1 = state_38330;
var statearr_38337_38352 = state_38330__$1;
(statearr_38337_38352[(2)] = inst_38326);

(statearr_38337_38352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38331 === (8))){
var inst_38322 = (state_38330[(2)]);
var state_38330__$1 = (function (){var statearr_38338 = state_38330;
(statearr_38338[(8)] = inst_38322);

return statearr_38338;
})();
var statearr_38339_38353 = state_38330__$1;
(statearr_38339_38353[(2)] = null);

(statearr_38339_38353[(1)] = (2));


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
});})(c__25902__auto___38347,ch))
;
return ((function (switch__25881__auto__,c__25902__auto___38347,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__25882__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__25882__auto____0 = (function (){
var statearr_38343 = [null,null,null,null,null,null,null,null,null];
(statearr_38343[(0)] = figwheel$client$heads_up_plugin_$_state_machine__25882__auto__);

(statearr_38343[(1)] = (1));

return statearr_38343;
});
var figwheel$client$heads_up_plugin_$_state_machine__25882__auto____1 = (function (state_38330){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_38330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e38344){if((e38344 instanceof Object)){
var ex__25885__auto__ = e38344;
var statearr_38345_38354 = state_38330;
(statearr_38345_38354[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38344;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38355 = state_38330;
state_38330 = G__38355;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__25882__auto__ = function(state_38330){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__25882__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__25882__auto____1.call(this,state_38330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__25882__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__25882__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto___38347,ch))
})();
var state__25904__auto__ = (function (){var statearr_38346 = f__25903__auto__.call(null);
(statearr_38346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto___38347);

return statearr_38346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto___38347,ch))
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
return (function (state_38376){
var state_val_38377 = (state_38376[(1)]);
if((state_val_38377 === (1))){
var inst_38371 = cljs.core.async.timeout.call(null,(3000));
var state_38376__$1 = state_38376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38376__$1,(2),inst_38371);
} else {
if((state_val_38377 === (2))){
var inst_38373 = (state_38376[(2)]);
var inst_38374 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38376__$1 = (function (){var statearr_38378 = state_38376;
(statearr_38378[(7)] = inst_38373);

return statearr_38378;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38376__$1,inst_38374);
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
var statearr_38382 = [null,null,null,null,null,null,null,null];
(statearr_38382[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__25882__auto__);

(statearr_38382[(1)] = (1));

return statearr_38382;
});
var figwheel$client$enforce_project_plugin_$_state_machine__25882__auto____1 = (function (state_38376){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_38376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e38383){if((e38383 instanceof Object)){
var ex__25885__auto__ = e38383;
var statearr_38384_38386 = state_38376;
(statearr_38384_38386[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38387 = state_38376;
state_38376 = G__38387;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__25882__auto__ = function(state_38376){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__25882__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__25882__auto____1.call(this,state_38376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__25882__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__25882__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto__))
})();
var state__25904__auto__ = (function (){var statearr_38385 = f__25903__auto__.call(null);
(statearr_38385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto__);

return statearr_38385;
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
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38388){
var map__38395 = p__38388;
var map__38395__$1 = ((((!((map__38395 == null)))?((((map__38395.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38395.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38395):map__38395);
var ed = map__38395__$1;
var formatted_exception = cljs.core.get.call(null,map__38395__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38395__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38395__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38397_38401 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38398_38402 = null;
var count__38399_38403 = (0);
var i__38400_38404 = (0);
while(true){
if((i__38400_38404 < count__38399_38403)){
var msg_38405 = cljs.core._nth.call(null,chunk__38398_38402,i__38400_38404);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38405);

var G__38406 = seq__38397_38401;
var G__38407 = chunk__38398_38402;
var G__38408 = count__38399_38403;
var G__38409 = (i__38400_38404 + (1));
seq__38397_38401 = G__38406;
chunk__38398_38402 = G__38407;
count__38399_38403 = G__38408;
i__38400_38404 = G__38409;
continue;
} else {
var temp__4425__auto___38410 = cljs.core.seq.call(null,seq__38397_38401);
if(temp__4425__auto___38410){
var seq__38397_38411__$1 = temp__4425__auto___38410;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38397_38411__$1)){
var c__24589__auto___38412 = cljs.core.chunk_first.call(null,seq__38397_38411__$1);
var G__38413 = cljs.core.chunk_rest.call(null,seq__38397_38411__$1);
var G__38414 = c__24589__auto___38412;
var G__38415 = cljs.core.count.call(null,c__24589__auto___38412);
var G__38416 = (0);
seq__38397_38401 = G__38413;
chunk__38398_38402 = G__38414;
count__38399_38403 = G__38415;
i__38400_38404 = G__38416;
continue;
} else {
var msg_38417 = cljs.core.first.call(null,seq__38397_38411__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38417);

var G__38418 = cljs.core.next.call(null,seq__38397_38411__$1);
var G__38419 = null;
var G__38420 = (0);
var G__38421 = (0);
seq__38397_38401 = G__38418;
chunk__38398_38402 = G__38419;
count__38399_38403 = G__38420;
i__38400_38404 = G__38421;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38422){
var map__38425 = p__38422;
var map__38425__$1 = ((((!((map__38425 == null)))?((((map__38425.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38425.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38425):map__38425);
var w = map__38425__$1;
var message = cljs.core.get.call(null,map__38425__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__38433 = cljs.core.seq.call(null,plugins);
var chunk__38434 = null;
var count__38435 = (0);
var i__38436 = (0);
while(true){
if((i__38436 < count__38435)){
var vec__38437 = cljs.core._nth.call(null,chunk__38434,i__38436);
var k = cljs.core.nth.call(null,vec__38437,(0),null);
var plugin = cljs.core.nth.call(null,vec__38437,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38439 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38433,chunk__38434,count__38435,i__38436,pl_38439,vec__38437,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38439.call(null,msg_hist);
});})(seq__38433,chunk__38434,count__38435,i__38436,pl_38439,vec__38437,k,plugin))
);
} else {
}

var G__38440 = seq__38433;
var G__38441 = chunk__38434;
var G__38442 = count__38435;
var G__38443 = (i__38436 + (1));
seq__38433 = G__38440;
chunk__38434 = G__38441;
count__38435 = G__38442;
i__38436 = G__38443;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__38433);
if(temp__4425__auto__){
var seq__38433__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38433__$1)){
var c__24589__auto__ = cljs.core.chunk_first.call(null,seq__38433__$1);
var G__38444 = cljs.core.chunk_rest.call(null,seq__38433__$1);
var G__38445 = c__24589__auto__;
var G__38446 = cljs.core.count.call(null,c__24589__auto__);
var G__38447 = (0);
seq__38433 = G__38444;
chunk__38434 = G__38445;
count__38435 = G__38446;
i__38436 = G__38447;
continue;
} else {
var vec__38438 = cljs.core.first.call(null,seq__38433__$1);
var k = cljs.core.nth.call(null,vec__38438,(0),null);
var plugin = cljs.core.nth.call(null,vec__38438,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38448 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38433,chunk__38434,count__38435,i__38436,pl_38448,vec__38438,k,plugin,seq__38433__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38448.call(null,msg_hist);
});})(seq__38433,chunk__38434,count__38435,i__38436,pl_38448,vec__38438,k,plugin,seq__38433__$1,temp__4425__auto__))
);
} else {
}

var G__38449 = cljs.core.next.call(null,seq__38433__$1);
var G__38450 = null;
var G__38451 = (0);
var G__38452 = (0);
seq__38433 = G__38449;
chunk__38434 = G__38450;
count__38435 = G__38451;
i__38436 = G__38452;
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
var args38453 = [];
var len__24844__auto___38456 = arguments.length;
var i__24845__auto___38457 = (0);
while(true){
if((i__24845__auto___38457 < len__24844__auto___38456)){
args38453.push((arguments[i__24845__auto___38457]));

var G__38458 = (i__24845__auto___38457 + (1));
i__24845__auto___38457 = G__38458;
continue;
} else {
}
break;
}

var G__38455 = args38453.length;
switch (G__38455) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38453.length)].join('')));

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
var len__24844__auto___38464 = arguments.length;
var i__24845__auto___38465 = (0);
while(true){
if((i__24845__auto___38465 < len__24844__auto___38464)){
args__24851__auto__.push((arguments[i__24845__auto___38465]));

var G__38466 = (i__24845__auto___38465 + (1));
i__24845__auto___38465 = G__38466;
continue;
} else {
}
break;
}

var argseq__24852__auto__ = ((((0) < args__24851__auto__.length))?(new cljs.core.IndexedSeq(args__24851__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__24852__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38461){
var map__38462 = p__38461;
var map__38462__$1 = ((((!((map__38462 == null)))?((((map__38462.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38462.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38462):map__38462);
var opts = map__38462__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38460){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38460));
});

//# sourceMappingURL=client.js.map?rel=1453744660298