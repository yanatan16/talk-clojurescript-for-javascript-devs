// Compiled by ClojureScript 1.7.170 {}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('goog.dom');
goog.require('goog.ui.IdGenerator');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

/**
 * @interface
 */
om.core.IDisplayName = function(){};

om.core.display_name = (function om$core$display_name(this$){
if((!((this$ == null))) && (!((this$.om$core$IDisplayName$display_name$arity$1 == null)))){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__24441__auto__ = (((this$ == null))?null:this$);
var m__24442__auto__ = (om.core.display_name[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,this$);
} else {
var m__24442__auto____$1 = (om.core.display_name["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IInitState = function(){};

om.core.init_state = (function om$core$init_state(this$){
if((!((this$ == null))) && (!((this$.om$core$IInitState$init_state$arity$1 == null)))){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__24441__auto__ = (((this$ == null))?null:this$);
var m__24442__auto__ = (om.core.init_state[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,this$);
} else {
var m__24442__auto____$1 = (om.core.init_state["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IShouldUpdate = function(){};

om.core.should_update = (function om$core$should_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IShouldUpdate$should_update$arity$3 == null)))){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__24441__auto__ = (((this$ == null))?null:this$);
var m__24442__auto__ = (om.core.should_update[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,this$,next_props,next_state);
} else {
var m__24442__auto____$1 = (om.core.should_update["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,this$,next_props,next_state);
} else {
throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillMount = function(){};

om.core.will_mount = (function om$core$will_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillMount$will_mount$arity$1 == null)))){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__24441__auto__ = (((this$ == null))?null:this$);
var m__24442__auto__ = (om.core.will_mount[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,this$);
} else {
var m__24442__auto____$1 = (om.core.will_mount["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidMount = function(){};

om.core.did_mount = (function om$core$did_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IDidMount$did_mount$arity$1 == null)))){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__24441__auto__ = (((this$ == null))?null:this$);
var m__24442__auto__ = (om.core.did_mount[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,this$);
} else {
var m__24442__auto____$1 = (om.core.did_mount["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUnmount = function(){};

om.core.will_unmount = (function om$core$will_unmount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillUnmount$will_unmount$arity$1 == null)))){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__24441__auto__ = (((this$ == null))?null:this$);
var m__24442__auto__ = (om.core.will_unmount[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,this$);
} else {
var m__24442__auto____$1 = (om.core.will_unmount["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUpdate = function(){};

om.core.will_update = (function om$core$will_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IWillUpdate$will_update$arity$3 == null)))){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__24441__auto__ = (((this$ == null))?null:this$);
var m__24442__auto__ = (om.core.will_update[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,this$,next_props,next_state);
} else {
var m__24442__auto____$1 = (om.core.will_update["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,this$,next_props,next_state);
} else {
throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidUpdate = function(){};

om.core.did_update = (function om$core$did_update(this$,prev_props,prev_state){
if((!((this$ == null))) && (!((this$.om$core$IDidUpdate$did_update$arity$3 == null)))){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__24441__auto__ = (((this$ == null))?null:this$);
var m__24442__auto__ = (om.core.did_update[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,this$,prev_props,prev_state);
} else {
var m__24442__auto____$1 = (om.core.did_update["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,this$,prev_props,prev_state);
} else {
throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillReceiveProps = function(){};

om.core.will_receive_props = (function om$core$will_receive_props(this$,next_props){
if((!((this$ == null))) && (!((this$.om$core$IWillReceiveProps$will_receive_props$arity$2 == null)))){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__24441__auto__ = (((this$ == null))?null:this$);
var m__24442__auto__ = (om.core.will_receive_props[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,this$,next_props);
} else {
var m__24442__auto____$1 = (om.core.will_receive_props["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,this$,next_props);
} else {
throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRender = function(){};

om.core.render = (function om$core$render(this$){
if((!((this$ == null))) && (!((this$.om$core$IRender$render$arity$1 == null)))){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__24441__auto__ = (((this$ == null))?null:this$);
var m__24442__auto__ = (om.core.render[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,this$);
} else {
var m__24442__auto____$1 = (om.core.render["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderProps = function(){};

om.core.render_props = (function om$core$render_props(this$,props,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderProps$render_props$arity$3 == null)))){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__24441__auto__ = (((this$ == null))?null:this$);
var m__24442__auto__ = (om.core.render_props[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,this$,props,state);
} else {
var m__24442__auto____$1 = (om.core.render_props["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,this$,props,state);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderProps.render-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderState = function(){};

om.core.render_state = (function om$core$render_state(this$,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderState$render_state$arity$2 == null)))){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__24441__auto__ = (((this$ == null))?null:this$);
var m__24442__auto__ = (om.core.render_state[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,this$,state);
} else {
var m__24442__auto____$1 = (om.core.render_state["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,this$,state);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.ICheckState = function(){};


/**
 * @interface
 */
om.core.IOmSwap = function(){};

om.core._om_swap_BANG_ = (function om$core$_om_swap_BANG_(this$,cursor,korks,f,tag){
if((!((this$ == null))) && (!((this$.om$core$IOmSwap$_om_swap_BANG_$arity$5 == null)))){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__24441__auto__ = (((this$ == null))?null:this$);
var m__24442__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,this$,cursor,korks,f,tag);
} else {
var m__24442__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,this$,cursor,korks,f,tag);
} else {
throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IGetState = function(){};

om.core._get_state = (function om$core$_get_state(var_args){
var args47712 = [];
var len__24844__auto___47715 = arguments.length;
var i__24845__auto___47716 = (0);
while(true){
if((i__24845__auto___47716 < len__24844__auto___47715)){
args47712.push((arguments[i__24845__auto___47716]));

var G__47717 = (i__24845__auto___47716 + (1));
i__24845__auto___47716 = G__47717;
continue;
} else {
}
break;
}

var G__47714 = args47712.length;
switch (G__47714) {
case 1:
return om.core._get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47712.length)].join('')));

}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$1 == null)))){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__24441__auto__ = (((this$ == null))?null:this$);
var m__24442__auto__ = (om.core._get_state[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,this$);
} else {
var m__24442__auto____$1 = (om.core._get_state["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$2 == null)))){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__24441__auto__ = (((this$ == null))?null:this$);
var m__24442__auto__ = (om.core._get_state[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,this$,ks);
} else {
var m__24442__auto____$1 = (om.core._get_state["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,this$,ks);
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
om.core.IGetRenderState = function(){};

om.core._get_render_state = (function om$core$_get_render_state(var_args){
var args47719 = [];
var len__24844__auto___47722 = arguments.length;
var i__24845__auto___47723 = (0);
while(true){
if((i__24845__auto___47723 < len__24844__auto___47722)){
args47719.push((arguments[i__24845__auto___47723]));

var G__47724 = (i__24845__auto___47723 + (1));
i__24845__auto___47723 = G__47724;
continue;
} else {
}
break;
}

var G__47721 = args47719.length;
switch (G__47721) {
case 1:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47719.length)].join('')));

}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$1 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__24441__auto__ = (((this$ == null))?null:this$);
var m__24442__auto__ = (om.core._get_render_state[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,this$);
} else {
var m__24442__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$2 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__24441__auto__ = (((this$ == null))?null:this$);
var m__24442__auto__ = (om.core._get_render_state[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,this$,ks);
} else {
var m__24442__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,this$,ks);
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
om.core.ISetState = function(){};

om.core._set_state_BANG_ = (function om$core$_set_state_BANG_(var_args){
var args47726 = [];
var len__24844__auto___47729 = arguments.length;
var i__24845__auto___47730 = (0);
while(true){
if((i__24845__auto___47730 < len__24844__auto___47729)){
args47726.push((arguments[i__24845__auto___47730]));

var G__47731 = (i__24845__auto___47730 + (1));
i__24845__auto___47730 = G__47731;
continue;
} else {
}
break;
}

var G__47728 = args47726.length;
switch (G__47728) {
case 3:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47726.length)].join('')));

}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$3 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__24441__auto__ = (((this$ == null))?null:this$);
var m__24442__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,this$,val,render);
} else {
var m__24442__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,this$,val,render);
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,ks,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$4 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__24441__auto__ = (((this$ == null))?null:this$);
var m__24442__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,this$,ks,val,render);
} else {
var m__24442__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,this$,ks,val,render);
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$lang$maxFixedArity = 4;


/**
 * @interface
 */
om.core.IRenderQueue = function(){};

om.core._get_queue = (function om$core$_get_queue(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_get_queue$arity$1 == null)))){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__24441__auto__ = (((this$ == null))?null:this$);
var m__24442__auto__ = (om.core._get_queue[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,this$);
} else {
var m__24442__auto____$1 = (om.core._get_queue["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
}
});

om.core._queue_render_BANG_ = (function om$core$_queue_render_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2 == null)))){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__24441__auto__ = (((this$ == null))?null:this$);
var m__24442__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,this$,c);
} else {
var m__24442__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
}
});

om.core._empty_queue_BANG_ = (function om$core$_empty_queue_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 == null)))){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__24441__auto__ = (((this$ == null))?null:this$);
var m__24442__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,this$);
} else {
var m__24442__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IValue = function(){};

om.core._value = (function om$core$_value(x){
if((!((x == null))) && (!((x.om$core$IValue$_value$arity$1 == null)))){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__24441__auto__ = (((x == null))?null:x);
var m__24442__auto__ = (om.core._value[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,x);
} else {
var m__24442__auto____$1 = (om.core._value["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

/**
 * @interface
 */
om.core.ICursor = function(){};

om.core._path = (function om$core$_path(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_path$arity$1 == null)))){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__24441__auto__ = (((cursor == null))?null:cursor);
var m__24442__auto__ = (om.core._path[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,cursor);
} else {
var m__24442__auto____$1 = (om.core._path["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
}
});

om.core._state = (function om$core$_state(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_state$arity$1 == null)))){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__24441__auto__ = (((cursor == null))?null:cursor);
var m__24442__auto__ = (om.core._state[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,cursor);
} else {
var m__24442__auto____$1 = (om.core._state["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IToCursor = function(){};

om.core._to_cursor = (function om$core$_to_cursor(var_args){
var args47733 = [];
var len__24844__auto___47736 = arguments.length;
var i__24845__auto___47737 = (0);
while(true){
if((i__24845__auto___47737 < len__24844__auto___47736)){
args47733.push((arguments[i__24845__auto___47737]));

var G__47738 = (i__24845__auto___47737 + (1));
i__24845__auto___47737 = G__47738;
continue;
} else {
}
break;
}

var G__47735 = args47733.length;
switch (G__47735) {
case 2:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47733.length)].join('')));

}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (value,state){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$2 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__24441__auto__ = (((value == null))?null:value);
var m__24442__auto__ = (om.core._to_cursor[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,value,state);
} else {
var m__24442__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,value,state);
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (value,state,path){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$3 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__24441__auto__ = (((value == null))?null:value);
var m__24442__auto__ = (om.core._to_cursor[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,value,state,path);
} else {
var m__24442__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,value,state,path);
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$lang$maxFixedArity = 3;


/**
 * @interface
 */
om.core.ICursorDerive = function(){};

om.core._derive = (function om$core$_derive(cursor,derived,state,path){
if((!((cursor == null))) && (!((cursor.om$core$ICursorDerive$_derive$arity$4 == null)))){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__24441__auto__ = (((cursor == null))?null:cursor);
var m__24442__auto__ = (om.core._derive[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,cursor,derived,state,path);
} else {
var m__24442__auto____$1 = (om.core._derive["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,cursor,derived,state,path);
} else {
throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
}
});

om.core.to_cursor;
(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function om$core$path(cursor){
return om.core._path.call(null,cursor);
});
om.core.value = (function om$core$value(cursor){
return om.core._value.call(null,cursor);
});
om.core.state = (function om$core$state(cursor){
return om.core._state.call(null,cursor);
});

/**
 * @interface
 */
om.core.ITransact = function(){};

om.core._transact_BANG_ = (function om$core$_transact_BANG_(cursor,korks,f,tag){
if((!((cursor == null))) && (!((cursor.om$core$ITransact$_transact_BANG_$arity$4 == null)))){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__24441__auto__ = (((cursor == null))?null:cursor);
var m__24442__auto__ = (om.core._transact_BANG_[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,cursor,korks,f,tag);
} else {
var m__24442__auto____$1 = (om.core._transact_BANG_["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,cursor,korks,f,tag);
} else {
throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.INotify = function(){};

om.core._listen_BANG_ = (function om$core$_listen_BANG_(x,key,tx_listen){
if((!((x == null))) && (!((x.om$core$INotify$_listen_BANG_$arity$3 == null)))){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__24441__auto__ = (((x == null))?null:x);
var m__24442__auto__ = (om.core._listen_BANG_[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,x,key,tx_listen);
} else {
var m__24442__auto____$1 = (om.core._listen_BANG_["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,x,key,tx_listen);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
}
});

om.core._unlisten_BANG_ = (function om$core$_unlisten_BANG_(x,key){
if((!((x == null))) && (!((x.om$core$INotify$_unlisten_BANG_$arity$2 == null)))){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__24441__auto__ = (((x == null))?null:x);
var m__24442__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,x,key);
} else {
var m__24442__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,x,key);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
}
});

om.core._notify_BANG_ = (function om$core$_notify_BANG_(x,tx_data,root_cursor){
if((!((x == null))) && (!((x.om$core$INotify$_notify_BANG_$arity$3 == null)))){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__24441__auto__ = (((x == null))?null:x);
var m__24442__auto__ = (om.core._notify_BANG_[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,x,tx_data,root_cursor);
} else {
var m__24442__auto____$1 = (om.core._notify_BANG_["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,x,tx_data,root_cursor);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
}
});


/**
 * @interface
 */
om.core.IRootProperties = function(){};

om.core._set_property_BANG_ = (function om$core$_set_property_BANG_(this$,id,p,val){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_set_property_BANG_$arity$4 == null)))){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__24441__auto__ = (((this$ == null))?null:this$);
var m__24442__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,this$,id,p,val);
} else {
var m__24442__auto____$1 = (om.core._set_property_BANG_["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,this$,id,p,val);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-set-property!",this$);
}
}
}
});

om.core._remove_property_BANG_ = (function om$core$_remove_property_BANG_(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_property_BANG_$arity$3 == null)))){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__24441__auto__ = (((this$ == null))?null:this$);
var m__24442__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,this$,id,p);
} else {
var m__24442__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,this$,id,p);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-property!",this$);
}
}
}
});

om.core._remove_properties_BANG_ = (function om$core$_remove_properties_BANG_(this$,id){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2 == null)))){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__24441__auto__ = (((this$ == null))?null:this$);
var m__24442__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,this$,id);
} else {
var m__24442__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,this$,id);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-properties!",this$);
}
}
}
});

om.core._get_property = (function om$core$_get_property(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_get_property$arity$3 == null)))){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__24441__auto__ = (((this$ == null))?null:this$);
var m__24442__auto__ = (om.core._get_property[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,this$,id,p);
} else {
var m__24442__auto____$1 = (om.core._get_property["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,this$,id,p);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-get-property",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRootKey = function(){};

om.core._root_key = (function om$core$_root_key(cursor){
if((!((cursor == null))) && (!((cursor.om$core$IRootKey$_root_key$arity$1 == null)))){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__24441__auto__ = (((cursor == null))?null:cursor);
var m__24442__auto__ = (om.core._root_key[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,cursor);
} else {
var m__24442__auto____$1 = (om.core._root_key["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"IRootKey.-root-key",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IAdapt = function(){};

om.core._adapt = (function om$core$_adapt(this$,other){
if((!((this$ == null))) && (!((this$.om$core$IAdapt$_adapt$arity$2 == null)))){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__24441__auto__ = (((this$ == null))?null:this$);
var m__24442__auto__ = (om.core._adapt[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,this$,other);
} else {
var m__24442__auto____$1 = (om.core._adapt["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,this$,other);
} else {
throw cljs.core.missing_protocol.call(null,"IAdapt.-adapt",this$);
}
}
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function om$core$adapt(x,other){
return om.core._adapt.call(null,x,other);
});

/**
 * @interface
 */
om.core.IOmRef = function(){};

om.core._add_dep_BANG_ = (function om$core$_add_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_add_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__24441__auto__ = (((this$ == null))?null:this$);
var m__24442__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,this$,c);
} else {
var m__24442__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-add-dep!",this$);
}
}
}
});

om.core._remove_dep_BANG_ = (function om$core$_remove_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_remove_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__24441__auto__ = (((this$ == null))?null:this$);
var m__24442__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,this$,c);
} else {
var m__24442__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-remove-dep!",this$);
}
}
}
});

om.core._refresh_deps_BANG_ = (function om$core$_refresh_deps_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1 == null)))){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__24441__auto__ = (((this$ == null))?null:this$);
var m__24442__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,this$);
} else {
var m__24442__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-refresh-deps!",this$);
}
}
}
});

om.core._get_deps = (function om$core$_get_deps(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_get_deps$arity$1 == null)))){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__24441__auto__ = (((this$ == null))?null:this$);
var m__24442__auto__ = (om.core._get_deps[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,this$);
} else {
var m__24442__auto____$1 = (om.core._get_deps["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-get-deps",this$);
}
}
}
});

om.core.notify_STAR_;

om.core.path;
om.core.transact_STAR_ = (function om$core$transact_STAR_(state,cursor,korks,f,tag){
var old_state = cljs.core.deref.call(null,state);
var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);
var ret = ((((!((state == null)))?(((false) || (state.om$core$IOmSwap$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,state):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,state)))?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178))){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,state)], null);
if(!((tag == null))){
return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else {
return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function om$core$cursor_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ICursor$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x);
}
});
om.core.component_QMARK_ = (function om$core$component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function om$core$children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_.call(null,c)){
return node.props.children = c.call(null,node);
} else {
return c;
}
});
/**
 * Given an owning Pure node return the Om props. Analogous to React
 * component props.
 */
om.core.get_props = (function om$core$get_props(x){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

return (x.props["__om_cursor"]);
});
/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function om$core$get_state(var_args){
var args47744 = [];
var len__24844__auto___47747 = arguments.length;
var i__24845__auto___47748 = (0);
while(true){
if((i__24845__auto___47748 < len__24844__auto___47747)){
args47744.push((arguments[i__24845__auto___47748]));

var G__47749 = (i__24845__auto___47748 + (1));
i__24845__auto___47748 = G__47749;
continue;
} else {
}
break;
}

var G__47746 = args47744.length;
switch (G__47746) {
case 1:
return om.core.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47744.length)].join('')));

}
});

om.core.get_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_state.call(null,owner);
});

om.core.get_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.call(null,owner,ks);
});

om.core.get_state.cljs$lang$maxFixedArity = 2;
/**
 * Takes an owner and returns a map of global shared values for a
 * render loop. An optional key or sequence of keys may be given to
 * extract a specific value.
 */
om.core.get_shared = (function om$core$get_shared(var_args){
var args47751 = [];
var len__24844__auto___47754 = arguments.length;
var i__24845__auto___47755 = (0);
while(true){
if((i__24845__auto___47755 < len__24844__auto___47754)){
args47751.push((arguments[i__24845__auto___47755]));

var G__47756 = (i__24845__auto___47755 + (1));
i__24845__auto___47755 = G__47756;
continue;
} else {
}
break;
}

var G__47753 = args47751.length;
switch (G__47753) {
case 1:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47751.length)].join('')));

}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_.call(null,korks))){
return cljs.core.get.call(null,om.core.get_shared.call(null,owner),korks);
} else {
if(cljs.core.empty_QMARK_.call(null,korks)){
return om.core.get_shared.call(null,owner);
} else {
return cljs.core.get_in.call(null,om.core.get_shared.call(null,owner),korks);

}
}
});

om.core.get_shared.cljs$lang$maxFixedArity = 2;
om.core.merge_pending_state = (function om$core$merge_pending_state(owner){
var state = owner.state;
var temp__4425__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4425__auto__)){
var pending_state = temp__4425__auto__;
var G__47759 = state;
(G__47759["__om_prev_state"] = (state["__om_state"]));

(G__47759["__om_state"] = pending_state);

(G__47759["__om_pending_state"] = null);

return G__47759;
} else {
return null;
}
});
om.core.merge_props_state = (function om$core$merge_props_state(var_args){
var args47760 = [];
var len__24844__auto___47763 = arguments.length;
var i__24845__auto___47764 = (0);
while(true){
if((i__24845__auto___47764 < len__24844__auto___47763)){
args47760.push((arguments[i__24845__auto___47764]));

var G__47765 = (i__24845__auto___47764 + (1));
i__24845__auto___47764 = G__47765;
continue;
} else {
}
break;
}

var G__47762 = args47760.length;
switch (G__47762) {
case 1:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47760.length)].join('')));

}
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return om.core.merge_props_state.call(null,owner,null);
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,props){
var props__$1 = (function (){var or__23786__auto__ = props;
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return owner.props;
}
})();
var temp__4425__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4425__auto__)){
var props_state = temp__4425__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__23786__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});

om.core.merge_props_state.cljs$lang$maxFixedArity = 2;
om.core.ref_changed_QMARK_ = (function om$core$ref_changed_QMARK_(ref){
var val = om.core.value.call(null,ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.state.call(null,ref)),om.core.path.call(null,ref),new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
return cljs.core.not_EQ_.call(null,val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function om$core$update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count.call(null,refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value.call(null,ref);
var ref_state = om.core.state.call(null,ref);
var ref_path = om.core.path.call(null,ref);
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ref_state),ref_path,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(cljs.core.not_EQ_.call(null,ref_val,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275))){
if(cljs.core.not_EQ_.call(null,ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt.call(null,ref,om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path));
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.unobserve;
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"isOmComponent","isOmComponent",-2070015162),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c))){
var state_47789 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props, "isOmComponent": true}),(function (){var or__23786__auto__ = (state_47789["__om_prev_state"]);
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return (state_47789["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c))){
om.core.will_unmount.call(null,c);
} else {
}

var temp__4425__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4425__auto__){
var refs = temp__4425__auto__;
var seq__47770 = cljs.core.seq.call(null,refs);
var chunk__47771 = null;
var count__47772 = (0);
var i__47773 = (0);
while(true){
if((i__47773 < count__47772)){
var ref = cljs.core._nth.call(null,chunk__47771,i__47773);
om.core.unobserve.call(null,this$,ref);

var G__47790 = seq__47770;
var G__47791 = chunk__47771;
var G__47792 = count__47772;
var G__47793 = (i__47773 + (1));
seq__47770 = G__47790;
chunk__47771 = G__47791;
count__47772 = G__47792;
i__47773 = G__47793;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__47770);
if(temp__4425__auto____$1){
var seq__47770__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47770__$1)){
var c__24589__auto__ = cljs.core.chunk_first.call(null,seq__47770__$1);
var G__47794 = cljs.core.chunk_rest.call(null,seq__47770__$1);
var G__47795 = c__24589__auto__;
var G__47796 = cljs.core.count.call(null,c__24589__auto__);
var G__47797 = (0);
seq__47770 = G__47794;
chunk__47771 = G__47795;
count__47772 = G__47796;
i__47773 = G__47797;
continue;
} else {
var ref = cljs.core.first.call(null,seq__47770__$1);
om.core.unobserve.call(null,this$,ref);

var G__47798 = cljs.core.next.call(null,seq__47770__$1);
var G__47799 = null;
var G__47800 = (0);
var G__47801 = (0);
seq__47770 = G__47798;
chunk__47771 = G__47799;
count__47772 = G__47800;
i__47773 = G__47801;
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
}),(function (next_props){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillReceiveProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,c))){
return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children.call(null,this$);
om.core.merge_props_state.call(null,this$,next_props);

if(((!((c == null)))?(((false) || (c.om$core$IShouldUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,c))){
return om.core.should_update.call(null,c,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor))){
return true;
} else {
if(cljs.core.truth_((function (){var and__23774__auto__ = om.core.cursor_QMARK_.call(null,cursor);
if(cljs.core.truth_(and__23774__auto__)){
var and__23774__auto____$1 = om.core.cursor_QMARK_.call(null,next_cursor);
if(cljs.core.truth_(and__23774__auto____$1)){
return cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor));
} else {
return and__23774__auto____$1;
}
} else {
return and__23774__auto__;
}
})())){
return true;
} else {
if(cljs.core.not_EQ_.call(null,om.core._get_state.call(null,this$),om.core._get_render_state.call(null,this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__23774__auto__ = !((cljs.core.count.call(null,(state["__om_refs"])) === (0)));
if(and__23774__auto__){
return cljs.core.some.call(null,((function (and__23774__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__47767_SHARP_){
return om.core.ref_changed_QMARK_.call(null,p1__47767_SHARP_);
});})(and__23774__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__23774__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var _STAR_parent_STAR_47776 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_47777 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_47778 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_47779 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_47780 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if(((!((c == null)))?(((false) || (c.om$core$IRender$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,c))){
return om.core.render.call(null,c);
} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,c))){
return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,c))){
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_47780;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_47779;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_47778;

om.core._STAR_state_STAR_ = _STAR_state_STAR_47777;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_47776;
}}),(function (next_props,next_state){
var this$ = this;
var c_47802 = om.core.children.call(null,this$);
if(((!((c_47802 == null)))?(((false) || (c_47802.om$core$IWillUpdate$))?true:(((!c_47802.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_47802):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_47802))){
var state_47803 = this$.state;
om.core.will_update.call(null,c_47802,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
}

om.core.merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__23786__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_id": (function (){var or__23786__auto__ = id;
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})(), "__om_state": cljs.core.merge.call(null,((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c)))?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)))};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || (c.om$core$IDidMount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c))){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IDisplayName$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,c))){
return om.core.display_name.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_47804 = om.core.children.call(null,this$);
if(((!((c_47804 == null)))?(((false) || (c_47804.om$core$IWillMount$))?true:(((!c_47804.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_47804):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_47804))){
om.core.will_mount.call(null,c_47804);
} else {
}

return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x47806 = obj;
x47806.om$core$ISetState$ = true;

x47806.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x47806){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__23774__auto__ = !((app_state == null));
if(and__23774__auto__){
return render;
} else {
return and__23774__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x47806))
;

x47806.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x47806){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.call(null,this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));

if(cljs.core.truth_((function (){var and__23774__auto__ = !((app_state == null));
if(and__23774__auto__){
return render;
} else {
return and__23774__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x47806))
;

x47806.om$core$IGetRenderState$ = true;

x47806.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x47806){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x47806))
;

x47806.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x47806){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x47806))
;

x47806.om$core$IGetState$ = true;

x47806.om$core$IGetState$_get_state$arity$1 = ((function (x47806){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__23786__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return (state["__om_state"]);
}
});})(x47806))
;

x47806.om$core$IGetState$_get_state$arity$2 = ((function (x47806){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x47806))
;

return x47806;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
om.core.react_id = (function om$core$react_id(x){
var id = (x["_rootNodeID"]);
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"id","id",252129435,null)))].join('')));
}

return id;
});
om.core.get_gstate = (function om$core$get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function om$core$no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate.call(null,owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,owner)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),spath);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,states__$1,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923),new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1)),new cljs.core.Keyword(null,"render-state","render-state",2053902270),cljs.core.merge.call(null,new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states__$1))),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973));
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.call(null,om.core.pure_methods,new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__23786__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__23786__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c)))?om.core.init_state.call(null,c):null));
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
(props["__om_init_state"] = null);

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,state);

return {"__om_id": om_id};
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_47816 = om.core.children.call(null,this$);
if(((!((c_47816 == null)))?(((false) || (c_47816.om$core$IWillMount$))?true:(((!c_47816.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_47816):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_47816))){
om.core.will_mount.call(null,c_47816);
} else {
}

return om.core.no_local_merge_pending_state.call(null,this$);
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c))){
om.core.will_unmount.call(null,c);
} else {
}

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.dissoc,new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$));

var temp__4425__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4425__auto__){
var refs = temp__4425__auto__;
var seq__47810 = cljs.core.seq.call(null,refs);
var chunk__47811 = null;
var count__47812 = (0);
var i__47813 = (0);
while(true){
if((i__47813 < count__47812)){
var ref = cljs.core._nth.call(null,chunk__47811,i__47813);
om.core.unobserve.call(null,this$,ref);

var G__47817 = seq__47810;
var G__47818 = chunk__47811;
var G__47819 = count__47812;
var G__47820 = (i__47813 + (1));
seq__47810 = G__47817;
chunk__47811 = G__47818;
count__47812 = G__47819;
i__47813 = G__47820;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__47810);
if(temp__4425__auto____$1){
var seq__47810__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47810__$1)){
var c__24589__auto__ = cljs.core.chunk_first.call(null,seq__47810__$1);
var G__47821 = cljs.core.chunk_rest.call(null,seq__47810__$1);
var G__47822 = c__24589__auto__;
var G__47823 = cljs.core.count.call(null,c__24589__auto__);
var G__47824 = (0);
seq__47810 = G__47821;
chunk__47811 = G__47822;
count__47812 = G__47823;
i__47813 = G__47824;
continue;
} else {
var ref = cljs.core.first.call(null,seq__47810__$1);
om.core.unobserve.call(null,this$,ref);

var G__47825 = cljs.core.next.call(null,seq__47810__$1);
var G__47826 = null;
var G__47827 = (0);
var G__47828 = (0);
seq__47810 = G__47825;
chunk__47811 = G__47826;
count__47812 = G__47827;
i__47813 = G__47828;
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
}),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),(function (next_props,next_state){
var this$ = this;
var props_47829 = this$.props;
var c_47830 = om.core.children.call(null,this$);
if(((!((c_47830 == null)))?(((false) || (c_47830.om$core$IWillUpdate$))?true:(((!c_47830.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_47830):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_47830))){
var state_47831 = this$.state;
om.core.will_update.call(null,c_47830,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
}

om.core.no_local_merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
var gstate = om.core.get_gstate.call(null,this$);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c))){
var state_47832 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props, "isOmComponent": true}),(function (){var or__23786__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,cljs.core.dissoc,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923));
} else {
return null;
}
}));
om.core.no_local_descriptor = (function om$core$no_local_descriptor(methods$){
var x47834 = cljs.core.clj__GT_js.call(null,methods$);
x47834.om$core$ISetState$ = true;

x47834.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x47834){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate.call(null,this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__23774__auto__ = !((gstate == null));
if(and__23774__auto__){
return render;
} else {
return and__23774__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else {
return null;
}
});})(x47834))
;

x47834.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x47834){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x47834))
;

x47834.om$core$IGetRenderState$ = true;

x47834.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x47834){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x47834))
;

x47834.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x47834){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x47834))
;

x47834.om$core$IGetState$ = true;

x47834.om$core$IGetState$_get_state$arity$1 = ((function (x47834){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
var or__23786__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
});})(x47834))
;

x47834.om$core$IGetState$_get_state$arity$2 = ((function (x47834){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x47834))
;

return x47834;
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(x){
if(((!((x == null)))?(((false) || (x.om$core$ICursor$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x))){
return !(cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,x),new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993)));
} else {
return true;
}
});

/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.call(null,self__.value,k,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(!(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275)))){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (p__47838){
var vec__47839 = p__47838;
var k = cljs.core.nth.call(null,vec__47839,(0),null);
var v = cljs.core.nth.call(null,vec__47839,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__47840 = null;
var G__47840__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__47840__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__47840 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__47840__2.call(this,self__,k);
case 3:
return G__47840__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47840.cljs$core$IFn$_invoke$arity$2 = G__47840__2;
G__47840.cljs$core$IFn$_invoke$arity$3 = G__47840__3;
return G__47840;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args47837){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args47837)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.MapCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__24384__auto__,writer__24385__auto__,opt__24386__auto__){
return cljs.core._write.call(null,writer__24385__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function om$core$__GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count.call(null,self__.value))){
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n,not_found),self__.state,cljs.core.conj.call(null,self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__47842 = null;
var G__47842__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__47842__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__47842 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__47842__2.call(this,self__,k);
case 3:
return G__47842__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47842.cljs$core$IFn$_invoke$arity$2 = G__47842__2;
G__47842.cljs$core$IFn$_invoke$arity$3 = G__47842__3;
return G__47842;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args47841){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args47841)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.IndexedCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__24384__auto__,writer__24385__auto__,opt__24386__auto__){
return cljs.core._write.call(null,writer__24385__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function om$core$__GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function om$core$to_cursor_STAR_(val,state,path){
var x47844 = cljs.core.clone.call(null,val);
x47844.cljs$core$IDeref$ = true;

x47844.cljs$core$IDeref$_deref$arity$1 = ((function (x47844){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x47844))
;

x47844.om$core$ICursor$ = true;

x47844.om$core$ICursor$_path$arity$1 = ((function (x47844){
return (function (_){
var ___$1 = this;
return path;
});})(x47844))
;

x47844.om$core$ICursor$_state$arity$1 = ((function (x47844){
return (function (_){
var ___$1 = this;
return state;
});})(x47844))
;

x47844.om$core$ITransact$ = true;

x47844.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x47844){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x47844))
;

x47844.cljs$core$IEquiv$ = true;

x47844.cljs$core$IEquiv$_equiv$arity$2 = ((function (x47844){
return (function (_,other){
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,val,other);
}
});})(x47844))
;

return x47844;
});
om.core.to_cursor = (function om$core$to_cursor(var_args){
var args47845 = [];
var len__24844__auto___47850 = arguments.length;
var i__24845__auto___47851 = (0);
while(true){
if((i__24845__auto___47851 < len__24844__auto___47850)){
args47845.push((arguments[i__24845__auto___47851]));

var G__47852 = (i__24845__auto___47851 + (1));
i__24845__auto___47851 = G__47852;
continue;
} else {
}
break;
}

var G__47847 = args47845.length;
switch (G__47847) {
case 1:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47845.length)].join('')));

}
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$1 = (function (val){
return om.core.to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (val,state){
return om.core.to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (val,state,path){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,val))){
return val;
} else {
if(((!((val == null)))?(((false) || (val.om$core$IToCursor$))?true:(((!val.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,val):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,val))){
return om.core._to_cursor.call(null,val,state,path);
} else {
if(cljs.core.indexed_QMARK_.call(null,val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_.call(null,val)){
return (new om.core.MapCursor(val,state,path));
} else {
if(((!((val == null)))?((((val.cljs$lang$protocol_mask$partition1$ & (8192))) || (val.cljs$core$ICloneable$))?true:(((!val.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,val):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,val))){
return om.core.to_cursor_STAR_.call(null,val,state,path);
} else {
return val;

}
}
}
}
}
});

om.core.to_cursor.cljs$lang$maxFixedArity = 3;
om.core.notify_STAR_ = (function om$core$notify_STAR_(cursor,tx_data){
var state = om.core._state.call(null,cursor);
return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});
om.core.commit_BANG_;

om.core.id;

om.core.refresh_props_BANG_;
/**
 * Given an application state atom return a root cursor for it.
 */
om.core.root_cursor = (function om$core$root_cursor(atom){
if(((!((atom == null)))?((((atom.cljs$lang$protocol_mask$partition0$ & (32768))) || (atom.cljs$core$IDeref$))?true:(((!atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,atom))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null))))].join('')));
}

return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function om$core$ref_sub_cursor(x,parent){
var x47857 = cljs.core.clone.call(null,x);
x47857.cljs$core$ICloneable$ = true;

x47857.cljs$core$ICloneable$_clone$arity$1 = ((function (x47857){
return (function (this$){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x47857))
;

x47857.om$core$IAdapt$ = true;

x47857.om$core$IAdapt$_adapt$arity$2 = ((function (x47857){
return (function (this$,other){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x47857))
;

x47857.om$core$ICursorDerive$ = true;

x47857.om$core$ICursorDerive$_derive$arity$4 = ((function (x47857){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x47857))
;

x47857.om$core$ITransact$ = true;

x47857.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x47857){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
om.core.commit_BANG_.call(null,cursor__$1,korks,f);

return om.core._refresh_deps_BANG_.call(null,parent);
});})(x47857))
;

return x47857;
});
/**
 * Given a cursor return a reference cursor that inherits all of the
 *   properties and methods of the cursor. Reference cursors may be
 *   observed via om.core/observe.
 */
om.core.ref_cursor = (function om$core$ref_cursor(cursor){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(((!((cursor == null)))?(((false) || (cursor.om$core$IOmRef$))?true:(((!cursor.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,cursor):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,cursor))){
return cursor;
} else {
var path = om.core.path.call(null,cursor);
var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);
var x47865 = cljs.core.clone.call(null,cursor);
x47865.om$core$ICursorDerive$ = true;

x47865.om$core$ICursorDerive$_derive$arity$4 = ((function (x47865,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x47865,path,storage))
;

x47865.om$core$IOmRef$ = true;

x47865.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x47865,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x47865,path,storage))
;

x47865.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x47865,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));
if((cljs.core.count.call(null,m) === (0))){
return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x47865,path,storage))
;

x47865.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x47865,path,storage){
return (function (_){
var ___$1 = this;
var seq__47866 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));
var chunk__47867 = null;
var count__47868 = (0);
var i__47869 = (0);
while(true){
if((i__47869 < count__47868)){
var c = cljs.core._nth.call(null,chunk__47867,i__47869);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__47870 = seq__47866;
var G__47871 = chunk__47867;
var G__47872 = count__47868;
var G__47873 = (i__47869 + (1));
seq__47866 = G__47870;
chunk__47867 = G__47871;
count__47868 = G__47872;
i__47869 = G__47873;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__47866);
if(temp__4425__auto__){
var seq__47866__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47866__$1)){
var c__24589__auto__ = cljs.core.chunk_first.call(null,seq__47866__$1);
var G__47874 = cljs.core.chunk_rest.call(null,seq__47866__$1);
var G__47875 = c__24589__auto__;
var G__47876 = cljs.core.count.call(null,c__24589__auto__);
var G__47877 = (0);
seq__47866 = G__47874;
chunk__47867 = G__47875;
count__47868 = G__47876;
i__47869 = G__47877;
continue;
} else {
var c = cljs.core.first.call(null,seq__47866__$1);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__47878 = cljs.core.next.call(null,seq__47866__$1);
var G__47879 = null;
var G__47880 = (0);
var G__47881 = (0);
seq__47866 = G__47878;
chunk__47867 = G__47879;
count__47868 = G__47880;
i__47869 = G__47881;
continue;
}
} else {
return null;
}
}
break;
}
});})(x47865,path,storage))
;

x47865.om$core$IOmRef$_get_deps$arity$1 = ((function (x47865,path,storage){
return (function (_){
var ___$1 = this;
return cljs.core.deref.call(null,storage);
});})(x47865,path,storage))
;

x47865.om$core$ITransact$ = true;

x47865.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x47865,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
om.core.commit_BANG_.call(null,cursor__$2,korks,f);

return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x47865,path,storage))
;

return x47865;
}
});
om.core.add_ref_to_component_BANG_ = (function om$core$add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__23786__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.call(null,refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function om$core$remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return (state["__om_refs"] = cljs.core.disj.call(null,refs,ref));
} else {
return null;
}
});
/**
 * Given a component and a reference cursor have the component observe
 *   the reference cursor for any data changes.
 */
om.core.observe = (function om$core$observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,ref))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))].join('')));
}

om.core.add_ref_to_component_BANG_.call(null,c,ref);

om.core._add_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.unobserve = (function om$core$unobserve(c,ref){
om.core.remove_ref_from_component_BANG_.call(null,c,ref);

om.core._remove_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.get_renderT = (function om$core$get_renderT(state){
var or__23786__auto__ = state.om$render$T;
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return (0);
}
});
/**
 * Force a render of *all* roots. Usage of this function is almost
 *   never recommended.
 */
om.core.render_all = (function om$core$render_all(var_args){
var args47882 = [];
var len__24844__auto___47889 = arguments.length;
var i__24845__auto___47890 = (0);
while(true){
if((i__24845__auto___47890 < len__24844__auto___47889)){
args47882.push((arguments[i__24845__auto___47890]));

var G__47891 = (i__24845__auto___47890 + (1));
i__24845__auto___47890 = G__47891;
continue;
} else {
}
break;
}

var G__47884 = args47882.length;
switch (G__47884) {
case 0:
return om.core.render_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.core.render_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47882.length)].join('')));

}
});

om.core.render_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.core.render_all.call(null,null);
});

om.core.render_all.cljs$core$IFn$_invoke$arity$1 = (function (state){
om.core.refresh_queued = false;

var seq__47885_47893 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));
var chunk__47886_47894 = null;
var count__47887_47895 = (0);
var i__47888_47896 = (0);
while(true){
if((i__47888_47896 < count__47887_47895)){
var f_47897 = cljs.core._nth.call(null,chunk__47886_47894,i__47888_47896);
f_47897.call(null);

var G__47898 = seq__47885_47893;
var G__47899 = chunk__47886_47894;
var G__47900 = count__47887_47895;
var G__47901 = (i__47888_47896 + (1));
seq__47885_47893 = G__47898;
chunk__47886_47894 = G__47899;
count__47887_47895 = G__47900;
i__47888_47896 = G__47901;
continue;
} else {
var temp__4425__auto___47902 = cljs.core.seq.call(null,seq__47885_47893);
if(temp__4425__auto___47902){
var seq__47885_47903__$1 = temp__4425__auto___47902;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47885_47903__$1)){
var c__24589__auto___47904 = cljs.core.chunk_first.call(null,seq__47885_47903__$1);
var G__47905 = cljs.core.chunk_rest.call(null,seq__47885_47903__$1);
var G__47906 = c__24589__auto___47904;
var G__47907 = cljs.core.count.call(null,c__24589__auto___47904);
var G__47908 = (0);
seq__47885_47893 = G__47905;
chunk__47886_47894 = G__47906;
count__47887_47895 = G__47907;
i__47888_47896 = G__47908;
continue;
} else {
var f_47909 = cljs.core.first.call(null,seq__47885_47903__$1);
f_47909.call(null);

var G__47910 = cljs.core.next.call(null,seq__47885_47903__$1);
var G__47911 = null;
var G__47912 = (0);
var G__47913 = (0);
seq__47885_47893 = G__47910;
chunk__47886_47894 = G__47911;
count__47887_47895 = G__47912;
i__47888_47896 = G__47913;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT.call(null,state) + (1));
}
});

om.core.render_all.cljs$lang$maxFixedArity = 1;
om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function om$core$valid_component_QMARK_(x,f){
if((function (){var or__23786__auto__ = ((!((x == null)))?(((false) || (x.om$core$IRender$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,x));
if(or__23786__auto__){
return or__23786__auto__;
} else {
var or__23786__auto____$1 = ((!((x == null)))?(((false) || (x.om$core$IRenderProps$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,x));
if(or__23786__auto____$1){
return or__23786__auto____$1;
} else {
if(!((x == null))){
if((false) || (x.om$core$IRenderState$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,x);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",2115139472,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))].join('')));
}
});
om.core.valid_opts_QMARK_ = (function om$core$valid_opts_QMARK_(m){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function om$core$id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function om$core$get_descriptor(var_args){
var args47924 = [];
var len__24844__auto___47927 = arguments.length;
var i__24845__auto___47928 = (0);
while(true){
if((i__24845__auto___47928 < len__24844__auto___47927)){
args47924.push((arguments[i__24845__auto___47928]));

var G__47929 = (i__24845__auto___47928 + (1));
i__24845__auto___47928 = G__47929;
continue;
} else {
}
break;
}

var G__47926 = args47924.length;
switch (G__47926) {
case 1:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47924.length)].join('')));

}
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1 = (function (f){
return om.core.get_descriptor.call(null,f,null);
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2 = (function (f,descriptor){
if(((f["om$descriptor"]) == null)){
(f["om$descriptor"] = React.createFactory(React.createClass((function (){var or__23786__auto__ = descriptor;
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
var or__23786__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__23786__auto____$1)){
return or__23786__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})())));
} else {
}

return (f["om$descriptor"]);
});

om.core.get_descriptor.cljs$lang$maxFixedArity = 2;
om.core.getf = (function om$core$getf(var_args){
var args47931 = [];
var len__24844__auto___47934 = arguments.length;
var i__24845__auto___47935 = (0);
while(true){
if((i__24845__auto___47935 < len__24844__auto___47934)){
args47931.push((arguments[i__24845__auto___47935]));

var G__47936 = (i__24845__auto___47935 + (1));
i__24845__auto___47935 = G__47936;
continue;
} else {
}
break;
}

var G__47933 = args47931.length;
switch (G__47933) {
case 2:
return om.core.getf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.getf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47931.length)].join('')));

}
});

om.core.getf.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$lang$maxFixedArity = 3;
om.core.build_STAR_ = (function om$core$build_STAR_(var_args){
var args47938 = [];
var len__24844__auto___47943 = arguments.length;
var i__24845__auto___47944 = (0);
while(true){
if((i__24845__auto___47944 < len__24844__auto___47943)){
args47938.push((arguments[i__24845__auto___47944]));

var G__47945 = (i__24845__auto___47944 + (1));
i__24845__auto___47944 = G__47945;
continue;
} else {
}
break;
}

var G__47940 = args47938.length;
switch (G__47940) {
case 2:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47938.length)].join('')));

}
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
return om.core.build_STAR_.call(null,f,cursor,null);
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(cljs.core.truth_(om.core.valid_opts_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))))].join('')));
}

if((m == null)){
var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor));
return ctor.call(null,{"__om_cursor": cursor, "__om_shared": shared, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_instrument": om.core._STAR_instrument_STAR_, "children": ((function (shared,ctor){
return (function (this$){
var ret = f.call(null,cursor,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(shared,ctor))
});
} else {
var map__47941 = m;
var map__47941__$1 = ((((!((map__47941 == null)))?((((map__47941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47941):map__47941);
var key = cljs.core.get.call(null,map__47941__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var key_fn = cljs.core.get.call(null,map__47941__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var state = cljs.core.get.call(null,map__47941__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var init_state = cljs.core.get.call(null,map__47941__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var opts = cljs.core.get.call(null,map__47941__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4423__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var i = temp__4423__auto__;
return dataf.call(null,cursor,i);
} else {
return dataf.call(null,cursor);
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?key_fn.call(null,cursor_SINGLEQUOTE_):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348))
));
var shared = (function (){var or__23786__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor_SINGLEQUOTE_,opts),new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));
return ctor.call(null,{"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__47941,map__47941__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__47941,map__47941__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__47941,map__47941__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__47941,map__47941__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__23786__auto__ = rkey;
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_});

}
});

om.core.build_STAR_.cljs$lang$maxFixedArity = 3;
/**
 * Builds an Om component. Takes an IRender/IRenderState instance
 * returning function f, a value, and an optional third argument
 * which may be a map of build specifications.
 * 
 * f - is a function of 2 or 3 arguments. The first argument can be
 * any value and the second argument will be the owning pure node.
 * If a map of options m is passed in this will be the third
 * argument. f must return at a minimum an IRender or IRenderState
 * instance, this instance may implement other React life cycle
 * protocols.
 * 
 * x - any value
 * 
 * m - a map the following keys are allowed:
 * 
 *   :key        - a keyword that should be used to look up the key used by
 *                 React itself when rendering sequential things.
 *   :react-key  - an explicit react key
 *   :fn         - a function to apply to the data before invoking f.
 *   :init-state - a map of initial state to pass to the component.
 *   :state      - a map of state to pass to the component, will be merged in.
 *   :opts       - a map of values. Can be used to pass side information down
 *                 the render tree.
 *   :descriptor - a JS object of React methods, will be used to
 *                 construct a React class per Om component function
 *                 encountered. defaults to pure-descriptor.
 * 
 * Example:
 * 
 *   (build list-of-gadgets x
 *      {:init-state {:event-chan ...
 *                    :narble ...}})
 *   
 */
om.core.build = (function om$core$build(var_args){
var args47947 = [];
var len__24844__auto___47950 = arguments.length;
var i__24845__auto___47951 = (0);
while(true){
if((i__24845__auto___47951 < len__24844__auto___47950)){
args47947.push((arguments[i__24845__auto___47951]));

var G__47952 = (i__24845__auto___47951 + (1));
i__24845__auto___47951 = G__47952;
continue;
} else {
}
break;
}

var G__47949 = args47947.length;
switch (G__47949) {
case 2:
return om.core.build.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47947.length)].join('')));

}
});

om.core.build.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return om.core.build.call(null,f,x,null);
});

om.core.build.cljs$core$IFn$_invoke$arity$3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = om.core._STAR_instrument_STAR_.call(null,f,x,m);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268))){
return om.core.build_STAR_.call(null,f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.call(null,f,x,m);
}
});

om.core.build.cljs$lang$maxFixedArity = 3;
/**
 * Build a sequence of components. f is the component constructor
 * function, xs a sequence of values, and m a map of options the
 * same as provided to om.core/build.
 */
om.core.build_all = (function om$core$build_all(var_args){
var args47954 = [];
var len__24844__auto___47957 = arguments.length;
var i__24845__auto___47958 = (0);
while(true){
if((i__24845__auto___47958 < len__24844__auto___47957)){
args47954.push((arguments[i__24845__auto___47958]));

var G__47959 = (i__24845__auto___47958 + (1));
i__24845__auto___47958 = G__47959;
continue;
} else {
}
break;
}

var G__47956 = args47954.length;
switch (G__47956) {
case 2:
return om.core.build_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47954.length)].join('')));

}
});

om.core.build_all.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return om.core.build_all.call(null,f,xs,null);
});

om.core.build_all.cljs$core$IFn$_invoke$arity$3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

return cljs.core.map.call(null,(function (x,i){
return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
});

om.core.build_all.cljs$lang$maxFixedArity = 3;
om.core.setup = (function om$core$setup(state,key,tx_listen){
if(((!((state == null)))?(((false) || (state.om$core$INotify$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,state):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,state))){
} else {
var properties_47977 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var listeners_47978 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var render_queue_47979 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x47970_47980 = state;
x47970_47980.om$core$IRootProperties$ = true;

x47970_47980.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x47970_47980,properties_47977,listeners_47978,render_queue_47979){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_47977,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x47970_47980,properties_47977,listeners_47978,render_queue_47979))
;

x47970_47980.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x47970_47980,properties_47977,listeners_47978,render_queue_47979){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_47977,cljs.core.dissoc,id,k);
});})(x47970_47980,properties_47977,listeners_47978,render_queue_47979))
;

x47970_47980.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x47970_47980,properties_47977,listeners_47978,render_queue_47979){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_47977,cljs.core.dissoc,id);
});})(x47970_47980,properties_47977,listeners_47978,render_queue_47979))
;

x47970_47980.om$core$IRootProperties$_get_property$arity$3 = ((function (x47970_47980,properties_47977,listeners_47978,render_queue_47979){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_47977),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x47970_47980,properties_47977,listeners_47978,render_queue_47979))
;

x47970_47980.om$core$INotify$ = true;

x47970_47980.om$core$INotify$_listen_BANG_$arity$3 = ((function (x47970_47980,properties_47977,listeners_47978,render_queue_47979){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.call(null,listeners_47978,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x47970_47980,properties_47977,listeners_47978,render_queue_47979))
;

x47970_47980.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x47970_47980,properties_47977,listeners_47978,render_queue_47979){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,listeners_47978,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x47970_47980,properties_47977,listeners_47978,render_queue_47979))
;

x47970_47980.om$core$INotify$_notify_BANG_$arity$3 = ((function (x47970_47980,properties_47977,listeners_47978,render_queue_47979){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__47971_47981 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_47978));
var chunk__47972_47982 = null;
var count__47973_47983 = (0);
var i__47974_47984 = (0);
while(true){
if((i__47974_47984 < count__47973_47983)){
var vec__47975_47985 = cljs.core._nth.call(null,chunk__47972_47982,i__47974_47984);
var __47986 = cljs.core.nth.call(null,vec__47975_47985,(0),null);
var f_47987 = cljs.core.nth.call(null,vec__47975_47985,(1),null);
f_47987.call(null,tx_data,root_cursor);

var G__47988 = seq__47971_47981;
var G__47989 = chunk__47972_47982;
var G__47990 = count__47973_47983;
var G__47991 = (i__47974_47984 + (1));
seq__47971_47981 = G__47988;
chunk__47972_47982 = G__47989;
count__47973_47983 = G__47990;
i__47974_47984 = G__47991;
continue;
} else {
var temp__4425__auto___47992 = cljs.core.seq.call(null,seq__47971_47981);
if(temp__4425__auto___47992){
var seq__47971_47993__$1 = temp__4425__auto___47992;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47971_47993__$1)){
var c__24589__auto___47994 = cljs.core.chunk_first.call(null,seq__47971_47993__$1);
var G__47995 = cljs.core.chunk_rest.call(null,seq__47971_47993__$1);
var G__47996 = c__24589__auto___47994;
var G__47997 = cljs.core.count.call(null,c__24589__auto___47994);
var G__47998 = (0);
seq__47971_47981 = G__47995;
chunk__47972_47982 = G__47996;
count__47973_47983 = G__47997;
i__47974_47984 = G__47998;
continue;
} else {
var vec__47976_47999 = cljs.core.first.call(null,seq__47971_47993__$1);
var __48000 = cljs.core.nth.call(null,vec__47976_47999,(0),null);
var f_48001 = cljs.core.nth.call(null,vec__47976_47999,(1),null);
f_48001.call(null,tx_data,root_cursor);

var G__48002 = cljs.core.next.call(null,seq__47971_47993__$1);
var G__48003 = null;
var G__48004 = (0);
var G__48005 = (0);
seq__47971_47981 = G__48002;
chunk__47972_47982 = G__48003;
count__47973_47983 = G__48004;
i__47974_47984 = G__48005;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x47970_47980,properties_47977,listeners_47978,render_queue_47979))
;

x47970_47980.om$core$IRenderQueue$ = true;

x47970_47980.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x47970_47980,properties_47977,listeners_47978,render_queue_47979){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,render_queue_47979);
});})(x47970_47980,properties_47977,listeners_47978,render_queue_47979))
;

x47970_47980.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x47970_47980,properties_47977,listeners_47978,render_queue_47979){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_47979),c)){
return null;
} else {
cljs.core.swap_BANG_.call(null,render_queue_47979,cljs.core.conj,c);

return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x47970_47980,properties_47977,listeners_47978,render_queue_47979))
;

x47970_47980.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x47970_47980,properties_47977,listeners_47978,render_queue_47979){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,render_queue_47979,cljs.core.empty);
});})(x47970_47980,properties_47977,listeners_47978,render_queue_47979))
;

}

return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function om$core$tag_root_key(cursor,root_key){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
var x48007 = cljs.core.clone.call(null,cursor);
x48007.cljs$core$ICloneable$ = true;

x48007.cljs$core$ICloneable$_clone$arity$1 = ((function (x48007){
return (function (this$){
var this$__$1 = this;
return om$core$tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x48007))
;

x48007.om$core$IAdapt$ = true;

x48007.om$core$IAdapt$_adapt$arity$2 = ((function (x48007){
return (function (this$,other){
var this$__$1 = this;
return om$core$tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x48007))
;

x48007.om$core$IRootKey$ = true;

x48007.om$core$IRootKey$_root_key$arity$1 = ((function (x48007){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x48007))
;

return x48007;
} else {
return cursor;
}
});
/**
 * Take a component constructor function f, value an immutable tree of
 * associative data structures optionally an wrapped in an IAtom
 * instance, and a map of options and installs an Om/React render
 * loop.
 * 
 * f must return an instance that at a minimum implements IRender or
 * IRenderState (it may implement other React life cycle protocols). f
 * must take at least two arguments, the root cursor and the owning pure
 * node. A cursor is just the original data wrapped in an ICursor
 * instance which maintains path information. Only one root render
 * loop allowed per target element. om.core/root is idempotent, if
 * called again on the same target element the previous render loop
 * will be replaced.
 * 
 * Options may also include any key allowed by om.core/build to
 * customize f. In addition om.core/root supports the following
 * special options:
 * 
 * :target     - (required) a DOM element. 
 * :shared     - data to be shared by all components, see om.core/get-shared
 * :tx-listen  - a function that will listen in in transactions, should
 *               take 2 arguments - the first a map containing the
 *               path, old and new state at path, old and new global
 *               state, and transaction tag if provided.
 * :instrument - a function of three arguments that if provided will
 *               intercept all calls to om.core/build. This function should
 *               correspond to the three arity version of om.core/build.
 * :adapt      - a function to adapt the root cursor
 * :raf        - override requestAnimationFrame based rendering. If
 *               false setTimeout will be use. If given a function
 *               will be invoked instead.
 * 
 * Example:
 * 
 * (root
 *   (fn [data owner]
 *     ...)
 *   {:message :hello}
 *   {:target js/document.body})
 */
om.core.root = (function om$core$root(f,value,p__48008){
var map__48072 = p__48008;
var map__48072__$1 = ((((!((map__48072 == null)))?((((map__48072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48072):map__48072);
var options = map__48072__$1;
var target = cljs.core.get.call(null,map__48072__$1,new cljs.core.Keyword(null,"target","target",253001721));
var tx_listen = cljs.core.get.call(null,map__48072__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var path = cljs.core.get.call(null,map__48072__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var instrument = cljs.core.get.call(null,map__48072__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var descriptor = cljs.core.get.call(null,map__48072__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));
var adapt = cljs.core.get.call(null,map__48072__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var raf = cljs.core.get.call(null,map__48072__$1,new cljs.core.Keyword(null,"raf","raf",-1295410152));
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))))].join('')));
}

var roots_SINGLEQUOTE__48135 = cljs.core.deref.call(null,om.core.roots);
if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__48135,target)){
cljs.core.get.call(null,roots_SINGLEQUOTE__48135,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.call(null);
var state = ((((!((value == null)))?((((value.cljs$lang$protocol_mask$partition1$ & (16384))) || (value.cljs$core$IAtom$))?true:(((!value.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,value):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,value)))?value:cljs.core.atom.call(null,value));
var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__23786__auto__ = adapt;
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var ret = cljs.core.atom.call(null,null);
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__48072,map__48072__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = cljs.core.deref.call(null,state__$1);
var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));
if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643)))){
} else {
var c_48136 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_48105 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_48106 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_48107 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_48108 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_48108;

om.core._STAR_state_STAR_ = _STAR_state_STAR_48107;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_48106;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_48105;
}})(),target);
if((cljs.core.deref.call(null,ret) == null)){
cljs.core.reset_BANG_.call(null,ret,c_48136);
} else {
}
}

var queue_48137 = om.core._get_queue.call(null,state__$1);
if(cljs.core.empty_QMARK_.call(null,queue_48137)){
} else {
var seq__48109_48138 = cljs.core.seq.call(null,queue_48137);
var chunk__48110_48139 = null;
var count__48111_48140 = (0);
var i__48112_48141 = (0);
while(true){
if((i__48112_48141 < count__48111_48140)){
var c_48142 = cljs.core._nth.call(null,chunk__48110_48139,i__48112_48141);
if(cljs.core.truth_(c_48142.isMounted())){
var temp__4425__auto___48143 = (c_48142.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4425__auto___48143)){
var next_props_48144 = temp__4425__auto___48143;
(c_48142.props["__om_cursor"] = next_props_48144);

(c_48142.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__23786__auto__ = !((function (){var G__48114 = om.core.children.call(null,c_48142);
if(!((G__48114 == null))){
if((false) || (G__48114.om$core$ICheckState$)){
return true;
} else {
if((!G__48114.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__48114);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__48114);
}
})());
if(or__23786__auto__){
return or__23786__auto__;
} else {
return c_48142.shouldComponentUpdate(c_48142.props,c_48142.state);
}
})())){
c_48142.forceUpdate();
} else {
}
} else {
}

var G__48145 = seq__48109_48138;
var G__48146 = chunk__48110_48139;
var G__48147 = count__48111_48140;
var G__48148 = (i__48112_48141 + (1));
seq__48109_48138 = G__48145;
chunk__48110_48139 = G__48146;
count__48111_48140 = G__48147;
i__48112_48141 = G__48148;
continue;
} else {
var temp__4425__auto___48149 = cljs.core.seq.call(null,seq__48109_48138);
if(temp__4425__auto___48149){
var seq__48109_48150__$1 = temp__4425__auto___48149;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48109_48150__$1)){
var c__24589__auto___48151 = cljs.core.chunk_first.call(null,seq__48109_48150__$1);
var G__48152 = cljs.core.chunk_rest.call(null,seq__48109_48150__$1);
var G__48153 = c__24589__auto___48151;
var G__48154 = cljs.core.count.call(null,c__24589__auto___48151);
var G__48155 = (0);
seq__48109_48138 = G__48152;
chunk__48110_48139 = G__48153;
count__48111_48140 = G__48154;
i__48112_48141 = G__48155;
continue;
} else {
var c_48156 = cljs.core.first.call(null,seq__48109_48150__$1);
if(cljs.core.truth_(c_48156.isMounted())){
var temp__4425__auto___48157__$1 = (c_48156.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4425__auto___48157__$1)){
var next_props_48158 = temp__4425__auto___48157__$1;
(c_48156.props["__om_cursor"] = next_props_48158);

(c_48156.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__23786__auto__ = !((function (){var G__48116 = om.core.children.call(null,c_48156);
if(!((G__48116 == null))){
if((false) || (G__48116.om$core$ICheckState$)){
return true;
} else {
if((!G__48116.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__48116);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__48116);
}
})());
if(or__23786__auto__){
return or__23786__auto__;
} else {
return c_48156.shouldComponentUpdate(c_48156.props,c_48156.state);
}
})())){
c_48156.forceUpdate();
} else {
}
} else {
}

var G__48159 = cljs.core.next.call(null,seq__48109_48150__$1);
var G__48160 = null;
var G__48161 = (0);
var G__48162 = (0);
seq__48109_48138 = G__48159;
chunk__48110_48139 = G__48160;
count__48111_48140 = G__48161;
i__48112_48141 = G__48162;
continue;
}
} else {
}
}
break;
}

om.core._empty_queue_BANG_.call(null,state__$1);
}

var _refs_48163 = cljs.core.deref.call(null,om.core._refs);
if(cljs.core.empty_QMARK_.call(null,_refs_48163)){
} else {
var seq__48117_48164 = cljs.core.seq.call(null,_refs_48163);
var chunk__48118_48165 = null;
var count__48119_48166 = (0);
var i__48120_48167 = (0);
while(true){
if((i__48120_48167 < count__48119_48166)){
var vec__48121_48168 = cljs.core._nth.call(null,chunk__48118_48165,i__48120_48167);
var path_48169__$1 = cljs.core.nth.call(null,vec__48121_48168,(0),null);
var cs_48170 = cljs.core.nth.call(null,vec__48121_48168,(1),null);
var cs_48171__$1 = cljs.core.deref.call(null,cs_48170);
var seq__48122_48172 = cljs.core.seq.call(null,cs_48171__$1);
var chunk__48123_48173 = null;
var count__48124_48174 = (0);
var i__48125_48175 = (0);
while(true){
if((i__48125_48175 < count__48124_48174)){
var vec__48126_48176 = cljs.core._nth.call(null,chunk__48123_48173,i__48125_48175);
var id_48177 = cljs.core.nth.call(null,vec__48126_48176,(0),null);
var c_48178 = cljs.core.nth.call(null,vec__48126_48176,(1),null);
if(cljs.core.truth_(c_48178.shouldComponentUpdate(c_48178.props,c_48178.state))){
c_48178.forceUpdate();
} else {
}

var G__48179 = seq__48122_48172;
var G__48180 = chunk__48123_48173;
var G__48181 = count__48124_48174;
var G__48182 = (i__48125_48175 + (1));
seq__48122_48172 = G__48179;
chunk__48123_48173 = G__48180;
count__48124_48174 = G__48181;
i__48125_48175 = G__48182;
continue;
} else {
var temp__4425__auto___48183 = cljs.core.seq.call(null,seq__48122_48172);
if(temp__4425__auto___48183){
var seq__48122_48184__$1 = temp__4425__auto___48183;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48122_48184__$1)){
var c__24589__auto___48185 = cljs.core.chunk_first.call(null,seq__48122_48184__$1);
var G__48186 = cljs.core.chunk_rest.call(null,seq__48122_48184__$1);
var G__48187 = c__24589__auto___48185;
var G__48188 = cljs.core.count.call(null,c__24589__auto___48185);
var G__48189 = (0);
seq__48122_48172 = G__48186;
chunk__48123_48173 = G__48187;
count__48124_48174 = G__48188;
i__48125_48175 = G__48189;
continue;
} else {
var vec__48127_48190 = cljs.core.first.call(null,seq__48122_48184__$1);
var id_48191 = cljs.core.nth.call(null,vec__48127_48190,(0),null);
var c_48192 = cljs.core.nth.call(null,vec__48127_48190,(1),null);
if(cljs.core.truth_(c_48192.shouldComponentUpdate(c_48192.props,c_48192.state))){
c_48192.forceUpdate();
} else {
}

var G__48193 = cljs.core.next.call(null,seq__48122_48184__$1);
var G__48194 = null;
var G__48195 = (0);
var G__48196 = (0);
seq__48122_48172 = G__48193;
chunk__48123_48173 = G__48194;
count__48124_48174 = G__48195;
i__48125_48175 = G__48196;
continue;
}
} else {
}
}
break;
}

var G__48197 = seq__48117_48164;
var G__48198 = chunk__48118_48165;
var G__48199 = count__48119_48166;
var G__48200 = (i__48120_48167 + (1));
seq__48117_48164 = G__48197;
chunk__48118_48165 = G__48198;
count__48119_48166 = G__48199;
i__48120_48167 = G__48200;
continue;
} else {
var temp__4425__auto___48201 = cljs.core.seq.call(null,seq__48117_48164);
if(temp__4425__auto___48201){
var seq__48117_48202__$1 = temp__4425__auto___48201;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48117_48202__$1)){
var c__24589__auto___48203 = cljs.core.chunk_first.call(null,seq__48117_48202__$1);
var G__48204 = cljs.core.chunk_rest.call(null,seq__48117_48202__$1);
var G__48205 = c__24589__auto___48203;
var G__48206 = cljs.core.count.call(null,c__24589__auto___48203);
var G__48207 = (0);
seq__48117_48164 = G__48204;
chunk__48118_48165 = G__48205;
count__48119_48166 = G__48206;
i__48120_48167 = G__48207;
continue;
} else {
var vec__48128_48208 = cljs.core.first.call(null,seq__48117_48202__$1);
var path_48209__$1 = cljs.core.nth.call(null,vec__48128_48208,(0),null);
var cs_48210 = cljs.core.nth.call(null,vec__48128_48208,(1),null);
var cs_48211__$1 = cljs.core.deref.call(null,cs_48210);
var seq__48129_48212 = cljs.core.seq.call(null,cs_48211__$1);
var chunk__48130_48213 = null;
var count__48131_48214 = (0);
var i__48132_48215 = (0);
while(true){
if((i__48132_48215 < count__48131_48214)){
var vec__48133_48216 = cljs.core._nth.call(null,chunk__48130_48213,i__48132_48215);
var id_48217 = cljs.core.nth.call(null,vec__48133_48216,(0),null);
var c_48218 = cljs.core.nth.call(null,vec__48133_48216,(1),null);
if(cljs.core.truth_(c_48218.shouldComponentUpdate(c_48218.props,c_48218.state))){
c_48218.forceUpdate();
} else {
}

var G__48219 = seq__48129_48212;
var G__48220 = chunk__48130_48213;
var G__48221 = count__48131_48214;
var G__48222 = (i__48132_48215 + (1));
seq__48129_48212 = G__48219;
chunk__48130_48213 = G__48220;
count__48131_48214 = G__48221;
i__48132_48215 = G__48222;
continue;
} else {
var temp__4425__auto___48223__$1 = cljs.core.seq.call(null,seq__48129_48212);
if(temp__4425__auto___48223__$1){
var seq__48129_48224__$1 = temp__4425__auto___48223__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48129_48224__$1)){
var c__24589__auto___48225 = cljs.core.chunk_first.call(null,seq__48129_48224__$1);
var G__48226 = cljs.core.chunk_rest.call(null,seq__48129_48224__$1);
var G__48227 = c__24589__auto___48225;
var G__48228 = cljs.core.count.call(null,c__24589__auto___48225);
var G__48229 = (0);
seq__48129_48212 = G__48226;
chunk__48130_48213 = G__48227;
count__48131_48214 = G__48228;
i__48132_48215 = G__48229;
continue;
} else {
var vec__48134_48230 = cljs.core.first.call(null,seq__48129_48224__$1);
var id_48231 = cljs.core.nth.call(null,vec__48134_48230,(0),null);
var c_48232 = cljs.core.nth.call(null,vec__48134_48230,(1),null);
if(cljs.core.truth_(c_48232.shouldComponentUpdate(c_48232.props,c_48232.state))){
c_48232.forceUpdate();
} else {
}

var G__48233 = cljs.core.next.call(null,seq__48129_48224__$1);
var G__48234 = null;
var G__48235 = (0);
var G__48236 = (0);
seq__48129_48212 = G__48233;
chunk__48130_48213 = G__48234;
count__48131_48214 = G__48235;
i__48132_48215 = G__48236;
continue;
}
} else {
}
}
break;
}

var G__48237 = cljs.core.next.call(null,seq__48117_48202__$1);
var G__48238 = null;
var G__48239 = (0);
var G__48240 = (0);
seq__48117_48164 = G__48237;
chunk__48118_48165 = G__48238;
count__48119_48166 = G__48239;
i__48120_48167 = G__48240;
continue;
}
} else {
}
}
break;
}
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),true);

return cljs.core.deref.call(null,ret);
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__48072,map__48072__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__48072,map__48072__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (_,___$1,o,n){
if((cljs.core.not.call(null,om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033)))) && (!((o === n)))){
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),false);
} else {
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),false);

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf)){
} else {
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__48072,map__48072__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__48072,map__48072__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
,(16));
} else {
if(cljs.core.fn_QMARK_.call(null,raf)){
return raf.call(null);
} else {
return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__48072,map__48072__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__48072,map__48072__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__48072,map__48072__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__48072,map__48072__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
om.core._remove_properties_BANG_.call(null,state__$1,watch_key);

cljs.core.remove_watch.call(null,state__$1,watch_key);

om.core.tear_down.call(null,state__$1,watch_key);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);

return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__48072,map__48072__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

return rootf.call(null);
});
/**
 * Given a DOM target remove its render loop if one exists.
 */
om.core.detach_root = (function om$core$detach_root(target){
if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("gdom","isElement","gdom/isElement",465934354,null),new cljs.core.Symbol(null,"target","target",1893533248,null))))].join('')));
}

var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
return f.call(null);
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function om$core$transactable_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ITransact$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,x);
}
});
/**
 * Given a tag, a cursor, an optional list of keys ks, mutate the tree
 *   at the path specified by the cursor + the optional keys by applying
 *   f to the specified value in the tree. An Om re-render will be
 *   triggered.
 */
om.core.transact_BANG_ = (function om$core$transact_BANG_(var_args){
var args48243 = [];
var len__24844__auto___48246 = arguments.length;
var i__24845__auto___48247 = (0);
while(true){
if((i__24845__auto___48247 < len__24844__auto___48246)){
args48243.push((arguments[i__24845__auto___48247]));

var G__48248 = (i__24845__auto___48247 + (1));
i__24845__auto___48247 = G__48248;
continue;
} else {
}
break;
}

var G__48245 = args48243.length;
switch (G__48245) {
case 2:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48243.length)].join('')));

}
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,f){
return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,f){
return om.core.transact_BANG_.call(null,cursor,korks,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,f,tag){
if(cljs.core.truth_(om.core.transactable_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"transactable?","transactable?",780536292,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});

om.core.transact_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * Like transact! but no function provided, instead a replacement
 *   value is given.
 */
om.core.update_BANG_ = (function om$core$update_BANG_(var_args){
var args48250 = [];
var len__24844__auto___48253 = arguments.length;
var i__24845__auto___48254 = (0);
while(true){
if((i__24845__auto___48254 < len__24844__auto___48253)){
args48250.push((arguments[i__24845__auto___48254]));

var G__48255 = (i__24845__auto___48254 + (1));
i__24845__auto___48254 = G__48255;
continue;
} else {
}
break;
}

var G__48252 = args48250.length;
switch (G__48252) {
case 2:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48250.length)].join('')));

}
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,v,tag){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),tag);
});

om.core.update_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * EXPERIMENTAL: Like transact! but does not schedule a re-render or
 *   create a transact event.
 */
om.core.commit_BANG_ = (function om$core$commit_BANG_(cursor,korks,f){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var key = ((((!((cursor == null)))?(((false) || (cursor.om$core$IRootKey$))?true:(((!cursor.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,cursor):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,cursor)))?om.core._root_key.call(null,cursor):null);
var app_state = om.core.state.call(null,cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = om.core.path.call(null,cursor);
var rpath = cljs.core.into.call(null,cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_.call(null,app_state,key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true);
} else {
}

if(cljs.core.empty_QMARK_.call(null,rpath)){
return cljs.core.swap_BANG_.call(null,app_state,f);
} else {
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rpath,f);
}
});
/**
 * A helper function to get at React refs. Given a owning pure node
 *   extract the ref specified by name.
 */
om.core.get_node = (function om$core$get_node(var_args){
var args48259 = [];
var len__24844__auto___48262 = arguments.length;
var i__24845__auto___48263 = (0);
while(true){
if((i__24845__auto___48263 < len__24844__auto___48262)){
args48259.push((arguments[i__24845__auto___48263]));

var G__48264 = (i__24845__auto___48263 + (1));
i__24845__auto___48263 = G__48264;
continue;
} else {
}
break;
}

var G__48261 = args48259.length;
switch (G__48261) {
case 1:
return om.core.get_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48259.length)].join('')));

}
});

om.core.get_node.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return owner.getDOMNode();
});

om.core.get_node.cljs$core$IFn$_invoke$arity$2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"name","name",-810760592,null))))].join('')));
}

var temp__4425__auto__ = owner.refs;
if(cljs.core.truth_(temp__4425__auto__)){
var refs = temp__4425__auto__;
return (refs[name]).getDOMNode();
} else {
return null;
}
});

om.core.get_node.cljs$lang$maxFixedArity = 2;
/**
 * Return true if the backing React component is mounted into the DOM.
 */
om.core.mounted_QMARK_ = (function om$core$mounted_QMARK_(owner){
return owner.isMounted();
});
/**
 * Takes a pure owning component, a sequential list of keys and value and
 * sets the state of the component. Conceptually analagous to React
 * setState. Will schedule an Om re-render.
 */
om.core.set_state_BANG_ = (function om$core$set_state_BANG_(var_args){
var args48266 = [];
var len__24844__auto___48269 = arguments.length;
var i__24845__auto___48270 = (0);
while(true){
if((i__24845__auto___48270 < len__24844__auto___48269)){
args48266.push((arguments[i__24845__auto___48270]));

var G__48271 = (i__24845__auto___48270 + (1));
i__24845__auto___48270 = G__48271;
continue;
} else {
}
break;
}

var G__48268 = args48266.length;
switch (G__48268) {
case 2:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48266.length)].join('')));

}
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,true);
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,true);
});

om.core.set_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as set-state! but does not trigger re-render.
 */
om.core.set_state_nr_BANG_ = (function om$core$set_state_nr_BANG_(var_args){
var args48273 = [];
var len__24844__auto___48276 = arguments.length;
var i__24845__auto___48277 = (0);
while(true){
if((i__24845__auto___48277 < len__24844__auto___48276)){
args48273.push((arguments[i__24845__auto___48277]));

var G__48278 = (i__24845__auto___48277 + (1));
i__24845__auto___48277 = G__48278;
continue;
} else {
}
break;
}

var G__48275 = args48273.length;
switch (G__48275) {
case 2:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48273.length)].join('')));

}
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,false);
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,false);
});

om.core.set_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Takes a pure owning component, a sequential list of keys and a
 * function to transition the state of the component. Conceptually
 * analagous to React setState. Will schedule an Om re-render.
 */
om.core.update_state_BANG_ = (function om$core$update_state_BANG_(var_args){
var args48280 = [];
var len__24844__auto___48283 = arguments.length;
var i__24845__auto___48284 = (0);
while(true){
if((i__24845__auto___48284 < len__24844__auto___48283)){
args48280.push((arguments[i__24845__auto___48284]));

var G__48285 = (i__24845__auto___48284 + (1));
i__24845__auto___48284 = G__48285;
continue;
} else {
}
break;
}

var G__48282 = args48280.length;
switch (G__48282) {
case 2:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48280.length)].join('')));

}
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as update-state! but does not trigger re-render.
 */
om.core.update_state_nr_BANG_ = (function om$core$update_state_nr_BANG_(var_args){
var args48287 = [];
var len__24844__auto___48290 = arguments.length;
var i__24845__auto___48291 = (0);
while(true){
if((i__24845__auto___48291 < len__24844__auto___48290)){
args48287.push((arguments[i__24845__auto___48291]));

var G__48292 = (i__24845__auto___48291 + (1));
i__24845__auto___48291 = G__48292;
continue;
} else {
}
break;
}

var G__48289 = args48287.length;
switch (G__48289) {
case 2:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48287.length)].join('')));

}
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Utility to re-render an owner.
 */
om.core.refresh_BANG_ = (function om$core$refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
 * Takes a pure owning component and an optional key or sequential
 * list of keys and returns a property in the component local state if
 * it exists. Always returns the rendered state, not the pending
 * state.
 */
om.core.get_render_state = (function om$core$get_render_state(var_args){
var args48294 = [];
var len__24844__auto___48297 = arguments.length;
var i__24845__auto___48298 = (0);
while(true){
if((i__24845__auto___48298 < len__24844__auto___48297)){
args48294.push((arguments[i__24845__auto___48298]));

var G__48299 = (i__24845__auto___48298 + (1));
i__24845__auto___48298 = G__48299;
continue;
} else {
}
break;
}

var G__48296 = args48294.length;
switch (G__48296) {
case 1:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48294.length)].join('')));

}
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_render_state.call(null,owner);
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.call(null,owner,ks);
});

om.core.get_render_state.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=core.js.map?rel=1453744777370