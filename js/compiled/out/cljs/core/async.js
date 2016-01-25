// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args40052 = [];
var len__24844__auto___40058 = arguments.length;
var i__24845__auto___40059 = (0);
while(true){
if((i__24845__auto___40059 < len__24844__auto___40058)){
args40052.push((arguments[i__24845__auto___40059]));

var G__40060 = (i__24845__auto___40059 + (1));
i__24845__auto___40059 = G__40060;
continue;
} else {
}
break;
}

var G__40054 = args40052.length;
switch (G__40054) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40052.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async40055 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40055 = (function (f,blockable,meta40056){
this.f = f;
this.blockable = blockable;
this.meta40056 = meta40056;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40057,meta40056__$1){
var self__ = this;
var _40057__$1 = this;
return (new cljs.core.async.t_cljs$core$async40055(self__.f,self__.blockable,meta40056__$1));
});

cljs.core.async.t_cljs$core$async40055.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40057){
var self__ = this;
var _40057__$1 = this;
return self__.meta40056;
});

cljs.core.async.t_cljs$core$async40055.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async40055.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async40055.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async40055.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async40055.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta40056","meta40056",-49177038,null)], null);
});

cljs.core.async.t_cljs$core$async40055.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40055.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40055";

cljs.core.async.t_cljs$core$async40055.cljs$lang$ctorPrWriter = (function (this__24384__auto__,writer__24385__auto__,opt__24386__auto__){
return cljs.core._write.call(null,writer__24385__auto__,"cljs.core.async/t_cljs$core$async40055");
});

cljs.core.async.__GT_t_cljs$core$async40055 = (function cljs$core$async$__GT_t_cljs$core$async40055(f__$1,blockable__$1,meta40056){
return (new cljs.core.async.t_cljs$core$async40055(f__$1,blockable__$1,meta40056));
});

}

return (new cljs.core.async.t_cljs$core$async40055(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args40064 = [];
var len__24844__auto___40067 = arguments.length;
var i__24845__auto___40068 = (0);
while(true){
if((i__24845__auto___40068 < len__24844__auto___40067)){
args40064.push((arguments[i__24845__auto___40068]));

var G__40069 = (i__24845__auto___40068 + (1));
i__24845__auto___40068 = G__40069;
continue;
} else {
}
break;
}

var G__40066 = args40064.length;
switch (G__40066) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40064.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args40071 = [];
var len__24844__auto___40074 = arguments.length;
var i__24845__auto___40075 = (0);
while(true){
if((i__24845__auto___40075 < len__24844__auto___40074)){
args40071.push((arguments[i__24845__auto___40075]));

var G__40076 = (i__24845__auto___40075 + (1));
i__24845__auto___40075 = G__40076;
continue;
} else {
}
break;
}

var G__40073 = args40071.length;
switch (G__40073) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40071.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args40078 = [];
var len__24844__auto___40081 = arguments.length;
var i__24845__auto___40082 = (0);
while(true){
if((i__24845__auto___40082 < len__24844__auto___40081)){
args40078.push((arguments[i__24845__auto___40082]));

var G__40083 = (i__24845__auto___40082 + (1));
i__24845__auto___40082 = G__40083;
continue;
} else {
}
break;
}

var G__40080 = args40078.length;
switch (G__40080) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40078.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_40085 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_40085);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_40085,ret){
return (function (){
return fn1.call(null,val_40085);
});})(val_40085,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args40086 = [];
var len__24844__auto___40089 = arguments.length;
var i__24845__auto___40090 = (0);
while(true){
if((i__24845__auto___40090 < len__24844__auto___40089)){
args40086.push((arguments[i__24845__auto___40090]));

var G__40091 = (i__24845__auto___40090 + (1));
i__24845__auto___40090 = G__40091;
continue;
} else {
}
break;
}

var G__40088 = args40086.length;
switch (G__40088) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40086.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__24689__auto___40093 = n;
var x_40094 = (0);
while(true){
if((x_40094 < n__24689__auto___40093)){
(a[x_40094] = (0));

var G__40095 = (x_40094 + (1));
x_40094 = G__40095;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__40096 = (i + (1));
i = G__40096;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async40100 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40100 = (function (alt_flag,flag,meta40101){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta40101 = meta40101;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_40102,meta40101__$1){
var self__ = this;
var _40102__$1 = this;
return (new cljs.core.async.t_cljs$core$async40100(self__.alt_flag,self__.flag,meta40101__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async40100.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_40102){
var self__ = this;
var _40102__$1 = this;
return self__.meta40101;
});})(flag))
;

cljs.core.async.t_cljs$core$async40100.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async40100.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async40100.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40100.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40100.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta40101","meta40101",1858829255,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async40100.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40100.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40100";

cljs.core.async.t_cljs$core$async40100.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__24384__auto__,writer__24385__auto__,opt__24386__auto__){
return cljs.core._write.call(null,writer__24385__auto__,"cljs.core.async/t_cljs$core$async40100");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async40100 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async40100(alt_flag__$1,flag__$1,meta40101){
return (new cljs.core.async.t_cljs$core$async40100(alt_flag__$1,flag__$1,meta40101));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async40100(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async40106 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40106 = (function (alt_handler,flag,cb,meta40107){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta40107 = meta40107;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40108,meta40107__$1){
var self__ = this;
var _40108__$1 = this;
return (new cljs.core.async.t_cljs$core$async40106(self__.alt_handler,self__.flag,self__.cb,meta40107__$1));
});

cljs.core.async.t_cljs$core$async40106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40108){
var self__ = this;
var _40108__$1 = this;
return self__.meta40107;
});

cljs.core.async.t_cljs$core$async40106.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async40106.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async40106.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async40106.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async40106.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta40107","meta40107",-1615708989,null)], null);
});

cljs.core.async.t_cljs$core$async40106.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40106.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40106";

cljs.core.async.t_cljs$core$async40106.cljs$lang$ctorPrWriter = (function (this__24384__auto__,writer__24385__auto__,opt__24386__auto__){
return cljs.core._write.call(null,writer__24385__auto__,"cljs.core.async/t_cljs$core$async40106");
});

cljs.core.async.__GT_t_cljs$core$async40106 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async40106(alt_handler__$1,flag__$1,cb__$1,meta40107){
return (new cljs.core.async.t_cljs$core$async40106(alt_handler__$1,flag__$1,cb__$1,meta40107));
});

}

return (new cljs.core.async.t_cljs$core$async40106(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40109_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40109_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40110_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40110_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__23786__auto__ = wport;
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return port;
}
})()], null));
} else {
var G__40111 = (i + (1));
i = G__40111;
continue;
}
} else {
return null;
}
break;
}
})();
var or__23786__auto__ = ret;
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__23774__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__23774__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__23774__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__24851__auto__ = [];
var len__24844__auto___40117 = arguments.length;
var i__24845__auto___40118 = (0);
while(true){
if((i__24845__auto___40118 < len__24844__auto___40117)){
args__24851__auto__.push((arguments[i__24845__auto___40118]));

var G__40119 = (i__24845__auto___40118 + (1));
i__24845__auto___40118 = G__40119;
continue;
} else {
}
break;
}

var argseq__24852__auto__ = ((((1) < args__24851__auto__.length))?(new cljs.core.IndexedSeq(args__24851__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24852__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__40114){
var map__40115 = p__40114;
var map__40115__$1 = ((((!((map__40115 == null)))?((((map__40115.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40115.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40115):map__40115);
var opts = map__40115__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq40112){
var G__40113 = cljs.core.first.call(null,seq40112);
var seq40112__$1 = cljs.core.next.call(null,seq40112);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40113,seq40112__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args40120 = [];
var len__24844__auto___40170 = arguments.length;
var i__24845__auto___40171 = (0);
while(true){
if((i__24845__auto___40171 < len__24844__auto___40170)){
args40120.push((arguments[i__24845__auto___40171]));

var G__40172 = (i__24845__auto___40171 + (1));
i__24845__auto___40171 = G__40172;
continue;
} else {
}
break;
}

var G__40122 = args40120.length;
switch (G__40122) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40120.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__25902__auto___40174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto___40174){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto___40174){
return (function (state_40146){
var state_val_40147 = (state_40146[(1)]);
if((state_val_40147 === (7))){
var inst_40142 = (state_40146[(2)]);
var state_40146__$1 = state_40146;
var statearr_40148_40175 = state_40146__$1;
(statearr_40148_40175[(2)] = inst_40142);

(statearr_40148_40175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40147 === (1))){
var state_40146__$1 = state_40146;
var statearr_40149_40176 = state_40146__$1;
(statearr_40149_40176[(2)] = null);

(statearr_40149_40176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40147 === (4))){
var inst_40125 = (state_40146[(7)]);
var inst_40125__$1 = (state_40146[(2)]);
var inst_40126 = (inst_40125__$1 == null);
var state_40146__$1 = (function (){var statearr_40150 = state_40146;
(statearr_40150[(7)] = inst_40125__$1);

return statearr_40150;
})();
if(cljs.core.truth_(inst_40126)){
var statearr_40151_40177 = state_40146__$1;
(statearr_40151_40177[(1)] = (5));

} else {
var statearr_40152_40178 = state_40146__$1;
(statearr_40152_40178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40147 === (13))){
var state_40146__$1 = state_40146;
var statearr_40153_40179 = state_40146__$1;
(statearr_40153_40179[(2)] = null);

(statearr_40153_40179[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40147 === (6))){
var inst_40125 = (state_40146[(7)]);
var state_40146__$1 = state_40146;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40146__$1,(11),to,inst_40125);
} else {
if((state_val_40147 === (3))){
var inst_40144 = (state_40146[(2)]);
var state_40146__$1 = state_40146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40146__$1,inst_40144);
} else {
if((state_val_40147 === (12))){
var state_40146__$1 = state_40146;
var statearr_40154_40180 = state_40146__$1;
(statearr_40154_40180[(2)] = null);

(statearr_40154_40180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40147 === (2))){
var state_40146__$1 = state_40146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40146__$1,(4),from);
} else {
if((state_val_40147 === (11))){
var inst_40135 = (state_40146[(2)]);
var state_40146__$1 = state_40146;
if(cljs.core.truth_(inst_40135)){
var statearr_40155_40181 = state_40146__$1;
(statearr_40155_40181[(1)] = (12));

} else {
var statearr_40156_40182 = state_40146__$1;
(statearr_40156_40182[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40147 === (9))){
var state_40146__$1 = state_40146;
var statearr_40157_40183 = state_40146__$1;
(statearr_40157_40183[(2)] = null);

(statearr_40157_40183[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40147 === (5))){
var state_40146__$1 = state_40146;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40158_40184 = state_40146__$1;
(statearr_40158_40184[(1)] = (8));

} else {
var statearr_40159_40185 = state_40146__$1;
(statearr_40159_40185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40147 === (14))){
var inst_40140 = (state_40146[(2)]);
var state_40146__$1 = state_40146;
var statearr_40160_40186 = state_40146__$1;
(statearr_40160_40186[(2)] = inst_40140);

(statearr_40160_40186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40147 === (10))){
var inst_40132 = (state_40146[(2)]);
var state_40146__$1 = state_40146;
var statearr_40161_40187 = state_40146__$1;
(statearr_40161_40187[(2)] = inst_40132);

(statearr_40161_40187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40147 === (8))){
var inst_40129 = cljs.core.async.close_BANG_.call(null,to);
var state_40146__$1 = state_40146;
var statearr_40162_40188 = state_40146__$1;
(statearr_40162_40188[(2)] = inst_40129);

(statearr_40162_40188[(1)] = (10));


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
});})(c__25902__auto___40174))
;
return ((function (switch__25881__auto__,c__25902__auto___40174){
return (function() {
var cljs$core$async$state_machine__25882__auto__ = null;
var cljs$core$async$state_machine__25882__auto____0 = (function (){
var statearr_40166 = [null,null,null,null,null,null,null,null];
(statearr_40166[(0)] = cljs$core$async$state_machine__25882__auto__);

(statearr_40166[(1)] = (1));

return statearr_40166;
});
var cljs$core$async$state_machine__25882__auto____1 = (function (state_40146){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_40146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e40167){if((e40167 instanceof Object)){
var ex__25885__auto__ = e40167;
var statearr_40168_40189 = state_40146;
(statearr_40168_40189[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40190 = state_40146;
state_40146 = G__40190;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
cljs$core$async$state_machine__25882__auto__ = function(state_40146){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25882__auto____1.call(this,state_40146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25882__auto____0;
cljs$core$async$state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25882__auto____1;
return cljs$core$async$state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto___40174))
})();
var state__25904__auto__ = (function (){var statearr_40169 = f__25903__auto__.call(null);
(statearr_40169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto___40174);

return statearr_40169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto___40174))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__40374){
var vec__40375 = p__40374;
var v = cljs.core.nth.call(null,vec__40375,(0),null);
var p = cljs.core.nth.call(null,vec__40375,(1),null);
var job = vec__40375;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25902__auto___40557 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto___40557,res,vec__40375,v,p,job,jobs,results){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto___40557,res,vec__40375,v,p,job,jobs,results){
return (function (state_40380){
var state_val_40381 = (state_40380[(1)]);
if((state_val_40381 === (1))){
var state_40380__$1 = state_40380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40380__$1,(2),res,v);
} else {
if((state_val_40381 === (2))){
var inst_40377 = (state_40380[(2)]);
var inst_40378 = cljs.core.async.close_BANG_.call(null,res);
var state_40380__$1 = (function (){var statearr_40382 = state_40380;
(statearr_40382[(7)] = inst_40377);

return statearr_40382;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40380__$1,inst_40378);
} else {
return null;
}
}
});})(c__25902__auto___40557,res,vec__40375,v,p,job,jobs,results))
;
return ((function (switch__25881__auto__,c__25902__auto___40557,res,vec__40375,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25882__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25882__auto____0 = (function (){
var statearr_40386 = [null,null,null,null,null,null,null,null];
(statearr_40386[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25882__auto__);

(statearr_40386[(1)] = (1));

return statearr_40386;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25882__auto____1 = (function (state_40380){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_40380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e40387){if((e40387 instanceof Object)){
var ex__25885__auto__ = e40387;
var statearr_40388_40558 = state_40380;
(statearr_40388_40558[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40559 = state_40380;
state_40380 = G__40559;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25882__auto__ = function(state_40380){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25882__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25882__auto____1.call(this,state_40380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25882__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25882__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto___40557,res,vec__40375,v,p,job,jobs,results))
})();
var state__25904__auto__ = (function (){var statearr_40389 = f__25903__auto__.call(null);
(statearr_40389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto___40557);

return statearr_40389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto___40557,res,vec__40375,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__40390){
var vec__40391 = p__40390;
var v = cljs.core.nth.call(null,vec__40391,(0),null);
var p = cljs.core.nth.call(null,vec__40391,(1),null);
var job = vec__40391;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__24689__auto___40560 = n;
var __40561 = (0);
while(true){
if((__40561 < n__24689__auto___40560)){
var G__40392_40562 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__40392_40562) {
case "compute":
var c__25902__auto___40564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__40561,c__25902__auto___40564,G__40392_40562,n__24689__auto___40560,jobs,results,process,async){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (__40561,c__25902__auto___40564,G__40392_40562,n__24689__auto___40560,jobs,results,process,async){
return (function (state_40405){
var state_val_40406 = (state_40405[(1)]);
if((state_val_40406 === (1))){
var state_40405__$1 = state_40405;
var statearr_40407_40565 = state_40405__$1;
(statearr_40407_40565[(2)] = null);

(statearr_40407_40565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40406 === (2))){
var state_40405__$1 = state_40405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40405__$1,(4),jobs);
} else {
if((state_val_40406 === (3))){
var inst_40403 = (state_40405[(2)]);
var state_40405__$1 = state_40405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40405__$1,inst_40403);
} else {
if((state_val_40406 === (4))){
var inst_40395 = (state_40405[(2)]);
var inst_40396 = process.call(null,inst_40395);
var state_40405__$1 = state_40405;
if(cljs.core.truth_(inst_40396)){
var statearr_40408_40566 = state_40405__$1;
(statearr_40408_40566[(1)] = (5));

} else {
var statearr_40409_40567 = state_40405__$1;
(statearr_40409_40567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40406 === (5))){
var state_40405__$1 = state_40405;
var statearr_40410_40568 = state_40405__$1;
(statearr_40410_40568[(2)] = null);

(statearr_40410_40568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40406 === (6))){
var state_40405__$1 = state_40405;
var statearr_40411_40569 = state_40405__$1;
(statearr_40411_40569[(2)] = null);

(statearr_40411_40569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40406 === (7))){
var inst_40401 = (state_40405[(2)]);
var state_40405__$1 = state_40405;
var statearr_40412_40570 = state_40405__$1;
(statearr_40412_40570[(2)] = inst_40401);

(statearr_40412_40570[(1)] = (3));


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
});})(__40561,c__25902__auto___40564,G__40392_40562,n__24689__auto___40560,jobs,results,process,async))
;
return ((function (__40561,switch__25881__auto__,c__25902__auto___40564,G__40392_40562,n__24689__auto___40560,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25882__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25882__auto____0 = (function (){
var statearr_40416 = [null,null,null,null,null,null,null];
(statearr_40416[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25882__auto__);

(statearr_40416[(1)] = (1));

return statearr_40416;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25882__auto____1 = (function (state_40405){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_40405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e40417){if((e40417 instanceof Object)){
var ex__25885__auto__ = e40417;
var statearr_40418_40571 = state_40405;
(statearr_40418_40571[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40572 = state_40405;
state_40405 = G__40572;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25882__auto__ = function(state_40405){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25882__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25882__auto____1.call(this,state_40405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25882__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25882__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25882__auto__;
})()
;})(__40561,switch__25881__auto__,c__25902__auto___40564,G__40392_40562,n__24689__auto___40560,jobs,results,process,async))
})();
var state__25904__auto__ = (function (){var statearr_40419 = f__25903__auto__.call(null);
(statearr_40419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto___40564);

return statearr_40419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(__40561,c__25902__auto___40564,G__40392_40562,n__24689__auto___40560,jobs,results,process,async))
);


break;
case "async":
var c__25902__auto___40573 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__40561,c__25902__auto___40573,G__40392_40562,n__24689__auto___40560,jobs,results,process,async){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (__40561,c__25902__auto___40573,G__40392_40562,n__24689__auto___40560,jobs,results,process,async){
return (function (state_40432){
var state_val_40433 = (state_40432[(1)]);
if((state_val_40433 === (1))){
var state_40432__$1 = state_40432;
var statearr_40434_40574 = state_40432__$1;
(statearr_40434_40574[(2)] = null);

(statearr_40434_40574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40433 === (2))){
var state_40432__$1 = state_40432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40432__$1,(4),jobs);
} else {
if((state_val_40433 === (3))){
var inst_40430 = (state_40432[(2)]);
var state_40432__$1 = state_40432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40432__$1,inst_40430);
} else {
if((state_val_40433 === (4))){
var inst_40422 = (state_40432[(2)]);
var inst_40423 = async.call(null,inst_40422);
var state_40432__$1 = state_40432;
if(cljs.core.truth_(inst_40423)){
var statearr_40435_40575 = state_40432__$1;
(statearr_40435_40575[(1)] = (5));

} else {
var statearr_40436_40576 = state_40432__$1;
(statearr_40436_40576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40433 === (5))){
var state_40432__$1 = state_40432;
var statearr_40437_40577 = state_40432__$1;
(statearr_40437_40577[(2)] = null);

(statearr_40437_40577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40433 === (6))){
var state_40432__$1 = state_40432;
var statearr_40438_40578 = state_40432__$1;
(statearr_40438_40578[(2)] = null);

(statearr_40438_40578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40433 === (7))){
var inst_40428 = (state_40432[(2)]);
var state_40432__$1 = state_40432;
var statearr_40439_40579 = state_40432__$1;
(statearr_40439_40579[(2)] = inst_40428);

(statearr_40439_40579[(1)] = (3));


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
});})(__40561,c__25902__auto___40573,G__40392_40562,n__24689__auto___40560,jobs,results,process,async))
;
return ((function (__40561,switch__25881__auto__,c__25902__auto___40573,G__40392_40562,n__24689__auto___40560,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25882__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25882__auto____0 = (function (){
var statearr_40443 = [null,null,null,null,null,null,null];
(statearr_40443[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25882__auto__);

(statearr_40443[(1)] = (1));

return statearr_40443;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25882__auto____1 = (function (state_40432){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_40432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e40444){if((e40444 instanceof Object)){
var ex__25885__auto__ = e40444;
var statearr_40445_40580 = state_40432;
(statearr_40445_40580[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40581 = state_40432;
state_40432 = G__40581;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25882__auto__ = function(state_40432){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25882__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25882__auto____1.call(this,state_40432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25882__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25882__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25882__auto__;
})()
;})(__40561,switch__25881__auto__,c__25902__auto___40573,G__40392_40562,n__24689__auto___40560,jobs,results,process,async))
})();
var state__25904__auto__ = (function (){var statearr_40446 = f__25903__auto__.call(null);
(statearr_40446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto___40573);

return statearr_40446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(__40561,c__25902__auto___40573,G__40392_40562,n__24689__auto___40560,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__40582 = (__40561 + (1));
__40561 = G__40582;
continue;
} else {
}
break;
}

var c__25902__auto___40583 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto___40583,jobs,results,process,async){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto___40583,jobs,results,process,async){
return (function (state_40468){
var state_val_40469 = (state_40468[(1)]);
if((state_val_40469 === (1))){
var state_40468__$1 = state_40468;
var statearr_40470_40584 = state_40468__$1;
(statearr_40470_40584[(2)] = null);

(statearr_40470_40584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40469 === (2))){
var state_40468__$1 = state_40468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40468__$1,(4),from);
} else {
if((state_val_40469 === (3))){
var inst_40466 = (state_40468[(2)]);
var state_40468__$1 = state_40468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40468__$1,inst_40466);
} else {
if((state_val_40469 === (4))){
var inst_40449 = (state_40468[(7)]);
var inst_40449__$1 = (state_40468[(2)]);
var inst_40450 = (inst_40449__$1 == null);
var state_40468__$1 = (function (){var statearr_40471 = state_40468;
(statearr_40471[(7)] = inst_40449__$1);

return statearr_40471;
})();
if(cljs.core.truth_(inst_40450)){
var statearr_40472_40585 = state_40468__$1;
(statearr_40472_40585[(1)] = (5));

} else {
var statearr_40473_40586 = state_40468__$1;
(statearr_40473_40586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40469 === (5))){
var inst_40452 = cljs.core.async.close_BANG_.call(null,jobs);
var state_40468__$1 = state_40468;
var statearr_40474_40587 = state_40468__$1;
(statearr_40474_40587[(2)] = inst_40452);

(statearr_40474_40587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40469 === (6))){
var inst_40454 = (state_40468[(8)]);
var inst_40449 = (state_40468[(7)]);
var inst_40454__$1 = cljs.core.async.chan.call(null,(1));
var inst_40455 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40456 = [inst_40449,inst_40454__$1];
var inst_40457 = (new cljs.core.PersistentVector(null,2,(5),inst_40455,inst_40456,null));
var state_40468__$1 = (function (){var statearr_40475 = state_40468;
(statearr_40475[(8)] = inst_40454__$1);

return statearr_40475;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40468__$1,(8),jobs,inst_40457);
} else {
if((state_val_40469 === (7))){
var inst_40464 = (state_40468[(2)]);
var state_40468__$1 = state_40468;
var statearr_40476_40588 = state_40468__$1;
(statearr_40476_40588[(2)] = inst_40464);

(statearr_40476_40588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40469 === (8))){
var inst_40454 = (state_40468[(8)]);
var inst_40459 = (state_40468[(2)]);
var state_40468__$1 = (function (){var statearr_40477 = state_40468;
(statearr_40477[(9)] = inst_40459);

return statearr_40477;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40468__$1,(9),results,inst_40454);
} else {
if((state_val_40469 === (9))){
var inst_40461 = (state_40468[(2)]);
var state_40468__$1 = (function (){var statearr_40478 = state_40468;
(statearr_40478[(10)] = inst_40461);

return statearr_40478;
})();
var statearr_40479_40589 = state_40468__$1;
(statearr_40479_40589[(2)] = null);

(statearr_40479_40589[(1)] = (2));


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
});})(c__25902__auto___40583,jobs,results,process,async))
;
return ((function (switch__25881__auto__,c__25902__auto___40583,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25882__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25882__auto____0 = (function (){
var statearr_40483 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40483[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25882__auto__);

(statearr_40483[(1)] = (1));

return statearr_40483;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25882__auto____1 = (function (state_40468){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_40468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e40484){if((e40484 instanceof Object)){
var ex__25885__auto__ = e40484;
var statearr_40485_40590 = state_40468;
(statearr_40485_40590[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40591 = state_40468;
state_40468 = G__40591;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25882__auto__ = function(state_40468){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25882__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25882__auto____1.call(this,state_40468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25882__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25882__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto___40583,jobs,results,process,async))
})();
var state__25904__auto__ = (function (){var statearr_40486 = f__25903__auto__.call(null);
(statearr_40486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto___40583);

return statearr_40486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto___40583,jobs,results,process,async))
);


var c__25902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto__,jobs,results,process,async){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto__,jobs,results,process,async){
return (function (state_40524){
var state_val_40525 = (state_40524[(1)]);
if((state_val_40525 === (7))){
var inst_40520 = (state_40524[(2)]);
var state_40524__$1 = state_40524;
var statearr_40526_40592 = state_40524__$1;
(statearr_40526_40592[(2)] = inst_40520);

(statearr_40526_40592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40525 === (20))){
var state_40524__$1 = state_40524;
var statearr_40527_40593 = state_40524__$1;
(statearr_40527_40593[(2)] = null);

(statearr_40527_40593[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40525 === (1))){
var state_40524__$1 = state_40524;
var statearr_40528_40594 = state_40524__$1;
(statearr_40528_40594[(2)] = null);

(statearr_40528_40594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40525 === (4))){
var inst_40489 = (state_40524[(7)]);
var inst_40489__$1 = (state_40524[(2)]);
var inst_40490 = (inst_40489__$1 == null);
var state_40524__$1 = (function (){var statearr_40529 = state_40524;
(statearr_40529[(7)] = inst_40489__$1);

return statearr_40529;
})();
if(cljs.core.truth_(inst_40490)){
var statearr_40530_40595 = state_40524__$1;
(statearr_40530_40595[(1)] = (5));

} else {
var statearr_40531_40596 = state_40524__$1;
(statearr_40531_40596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40525 === (15))){
var inst_40502 = (state_40524[(8)]);
var state_40524__$1 = state_40524;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40524__$1,(18),to,inst_40502);
} else {
if((state_val_40525 === (21))){
var inst_40515 = (state_40524[(2)]);
var state_40524__$1 = state_40524;
var statearr_40532_40597 = state_40524__$1;
(statearr_40532_40597[(2)] = inst_40515);

(statearr_40532_40597[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40525 === (13))){
var inst_40517 = (state_40524[(2)]);
var state_40524__$1 = (function (){var statearr_40533 = state_40524;
(statearr_40533[(9)] = inst_40517);

return statearr_40533;
})();
var statearr_40534_40598 = state_40524__$1;
(statearr_40534_40598[(2)] = null);

(statearr_40534_40598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40525 === (6))){
var inst_40489 = (state_40524[(7)]);
var state_40524__$1 = state_40524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40524__$1,(11),inst_40489);
} else {
if((state_val_40525 === (17))){
var inst_40510 = (state_40524[(2)]);
var state_40524__$1 = state_40524;
if(cljs.core.truth_(inst_40510)){
var statearr_40535_40599 = state_40524__$1;
(statearr_40535_40599[(1)] = (19));

} else {
var statearr_40536_40600 = state_40524__$1;
(statearr_40536_40600[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40525 === (3))){
var inst_40522 = (state_40524[(2)]);
var state_40524__$1 = state_40524;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40524__$1,inst_40522);
} else {
if((state_val_40525 === (12))){
var inst_40499 = (state_40524[(10)]);
var state_40524__$1 = state_40524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40524__$1,(14),inst_40499);
} else {
if((state_val_40525 === (2))){
var state_40524__$1 = state_40524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40524__$1,(4),results);
} else {
if((state_val_40525 === (19))){
var state_40524__$1 = state_40524;
var statearr_40537_40601 = state_40524__$1;
(statearr_40537_40601[(2)] = null);

(statearr_40537_40601[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40525 === (11))){
var inst_40499 = (state_40524[(2)]);
var state_40524__$1 = (function (){var statearr_40538 = state_40524;
(statearr_40538[(10)] = inst_40499);

return statearr_40538;
})();
var statearr_40539_40602 = state_40524__$1;
(statearr_40539_40602[(2)] = null);

(statearr_40539_40602[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40525 === (9))){
var state_40524__$1 = state_40524;
var statearr_40540_40603 = state_40524__$1;
(statearr_40540_40603[(2)] = null);

(statearr_40540_40603[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40525 === (5))){
var state_40524__$1 = state_40524;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40541_40604 = state_40524__$1;
(statearr_40541_40604[(1)] = (8));

} else {
var statearr_40542_40605 = state_40524__$1;
(statearr_40542_40605[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40525 === (14))){
var inst_40504 = (state_40524[(11)]);
var inst_40502 = (state_40524[(8)]);
var inst_40502__$1 = (state_40524[(2)]);
var inst_40503 = (inst_40502__$1 == null);
var inst_40504__$1 = cljs.core.not.call(null,inst_40503);
var state_40524__$1 = (function (){var statearr_40543 = state_40524;
(statearr_40543[(11)] = inst_40504__$1);

(statearr_40543[(8)] = inst_40502__$1);

return statearr_40543;
})();
if(inst_40504__$1){
var statearr_40544_40606 = state_40524__$1;
(statearr_40544_40606[(1)] = (15));

} else {
var statearr_40545_40607 = state_40524__$1;
(statearr_40545_40607[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40525 === (16))){
var inst_40504 = (state_40524[(11)]);
var state_40524__$1 = state_40524;
var statearr_40546_40608 = state_40524__$1;
(statearr_40546_40608[(2)] = inst_40504);

(statearr_40546_40608[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40525 === (10))){
var inst_40496 = (state_40524[(2)]);
var state_40524__$1 = state_40524;
var statearr_40547_40609 = state_40524__$1;
(statearr_40547_40609[(2)] = inst_40496);

(statearr_40547_40609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40525 === (18))){
var inst_40507 = (state_40524[(2)]);
var state_40524__$1 = state_40524;
var statearr_40548_40610 = state_40524__$1;
(statearr_40548_40610[(2)] = inst_40507);

(statearr_40548_40610[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40525 === (8))){
var inst_40493 = cljs.core.async.close_BANG_.call(null,to);
var state_40524__$1 = state_40524;
var statearr_40549_40611 = state_40524__$1;
(statearr_40549_40611[(2)] = inst_40493);

(statearr_40549_40611[(1)] = (10));


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
});})(c__25902__auto__,jobs,results,process,async))
;
return ((function (switch__25881__auto__,c__25902__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25882__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25882__auto____0 = (function (){
var statearr_40553 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40553[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25882__auto__);

(statearr_40553[(1)] = (1));

return statearr_40553;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25882__auto____1 = (function (state_40524){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_40524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e40554){if((e40554 instanceof Object)){
var ex__25885__auto__ = e40554;
var statearr_40555_40612 = state_40524;
(statearr_40555_40612[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40613 = state_40524;
state_40524 = G__40613;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25882__auto__ = function(state_40524){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25882__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25882__auto____1.call(this,state_40524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25882__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25882__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto__,jobs,results,process,async))
})();
var state__25904__auto__ = (function (){var statearr_40556 = f__25903__auto__.call(null);
(statearr_40556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto__);

return statearr_40556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto__,jobs,results,process,async))
);

return c__25902__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args40614 = [];
var len__24844__auto___40617 = arguments.length;
var i__24845__auto___40618 = (0);
while(true){
if((i__24845__auto___40618 < len__24844__auto___40617)){
args40614.push((arguments[i__24845__auto___40618]));

var G__40619 = (i__24845__auto___40618 + (1));
i__24845__auto___40618 = G__40619;
continue;
} else {
}
break;
}

var G__40616 = args40614.length;
switch (G__40616) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40614.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args40621 = [];
var len__24844__auto___40624 = arguments.length;
var i__24845__auto___40625 = (0);
while(true){
if((i__24845__auto___40625 < len__24844__auto___40624)){
args40621.push((arguments[i__24845__auto___40625]));

var G__40626 = (i__24845__auto___40625 + (1));
i__24845__auto___40625 = G__40626;
continue;
} else {
}
break;
}

var G__40623 = args40621.length;
switch (G__40623) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40621.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args40628 = [];
var len__24844__auto___40681 = arguments.length;
var i__24845__auto___40682 = (0);
while(true){
if((i__24845__auto___40682 < len__24844__auto___40681)){
args40628.push((arguments[i__24845__auto___40682]));

var G__40683 = (i__24845__auto___40682 + (1));
i__24845__auto___40682 = G__40683;
continue;
} else {
}
break;
}

var G__40630 = args40628.length;
switch (G__40630) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40628.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__25902__auto___40685 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto___40685,tc,fc){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto___40685,tc,fc){
return (function (state_40656){
var state_val_40657 = (state_40656[(1)]);
if((state_val_40657 === (7))){
var inst_40652 = (state_40656[(2)]);
var state_40656__$1 = state_40656;
var statearr_40658_40686 = state_40656__$1;
(statearr_40658_40686[(2)] = inst_40652);

(statearr_40658_40686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40657 === (1))){
var state_40656__$1 = state_40656;
var statearr_40659_40687 = state_40656__$1;
(statearr_40659_40687[(2)] = null);

(statearr_40659_40687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40657 === (4))){
var inst_40633 = (state_40656[(7)]);
var inst_40633__$1 = (state_40656[(2)]);
var inst_40634 = (inst_40633__$1 == null);
var state_40656__$1 = (function (){var statearr_40660 = state_40656;
(statearr_40660[(7)] = inst_40633__$1);

return statearr_40660;
})();
if(cljs.core.truth_(inst_40634)){
var statearr_40661_40688 = state_40656__$1;
(statearr_40661_40688[(1)] = (5));

} else {
var statearr_40662_40689 = state_40656__$1;
(statearr_40662_40689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40657 === (13))){
var state_40656__$1 = state_40656;
var statearr_40663_40690 = state_40656__$1;
(statearr_40663_40690[(2)] = null);

(statearr_40663_40690[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40657 === (6))){
var inst_40633 = (state_40656[(7)]);
var inst_40639 = p.call(null,inst_40633);
var state_40656__$1 = state_40656;
if(cljs.core.truth_(inst_40639)){
var statearr_40664_40691 = state_40656__$1;
(statearr_40664_40691[(1)] = (9));

} else {
var statearr_40665_40692 = state_40656__$1;
(statearr_40665_40692[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40657 === (3))){
var inst_40654 = (state_40656[(2)]);
var state_40656__$1 = state_40656;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40656__$1,inst_40654);
} else {
if((state_val_40657 === (12))){
var state_40656__$1 = state_40656;
var statearr_40666_40693 = state_40656__$1;
(statearr_40666_40693[(2)] = null);

(statearr_40666_40693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40657 === (2))){
var state_40656__$1 = state_40656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40656__$1,(4),ch);
} else {
if((state_val_40657 === (11))){
var inst_40633 = (state_40656[(7)]);
var inst_40643 = (state_40656[(2)]);
var state_40656__$1 = state_40656;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40656__$1,(8),inst_40643,inst_40633);
} else {
if((state_val_40657 === (9))){
var state_40656__$1 = state_40656;
var statearr_40667_40694 = state_40656__$1;
(statearr_40667_40694[(2)] = tc);

(statearr_40667_40694[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40657 === (5))){
var inst_40636 = cljs.core.async.close_BANG_.call(null,tc);
var inst_40637 = cljs.core.async.close_BANG_.call(null,fc);
var state_40656__$1 = (function (){var statearr_40668 = state_40656;
(statearr_40668[(8)] = inst_40636);

return statearr_40668;
})();
var statearr_40669_40695 = state_40656__$1;
(statearr_40669_40695[(2)] = inst_40637);

(statearr_40669_40695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40657 === (14))){
var inst_40650 = (state_40656[(2)]);
var state_40656__$1 = state_40656;
var statearr_40670_40696 = state_40656__$1;
(statearr_40670_40696[(2)] = inst_40650);

(statearr_40670_40696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40657 === (10))){
var state_40656__$1 = state_40656;
var statearr_40671_40697 = state_40656__$1;
(statearr_40671_40697[(2)] = fc);

(statearr_40671_40697[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40657 === (8))){
var inst_40645 = (state_40656[(2)]);
var state_40656__$1 = state_40656;
if(cljs.core.truth_(inst_40645)){
var statearr_40672_40698 = state_40656__$1;
(statearr_40672_40698[(1)] = (12));

} else {
var statearr_40673_40699 = state_40656__$1;
(statearr_40673_40699[(1)] = (13));

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
});})(c__25902__auto___40685,tc,fc))
;
return ((function (switch__25881__auto__,c__25902__auto___40685,tc,fc){
return (function() {
var cljs$core$async$state_machine__25882__auto__ = null;
var cljs$core$async$state_machine__25882__auto____0 = (function (){
var statearr_40677 = [null,null,null,null,null,null,null,null,null];
(statearr_40677[(0)] = cljs$core$async$state_machine__25882__auto__);

(statearr_40677[(1)] = (1));

return statearr_40677;
});
var cljs$core$async$state_machine__25882__auto____1 = (function (state_40656){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_40656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e40678){if((e40678 instanceof Object)){
var ex__25885__auto__ = e40678;
var statearr_40679_40700 = state_40656;
(statearr_40679_40700[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40701 = state_40656;
state_40656 = G__40701;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
cljs$core$async$state_machine__25882__auto__ = function(state_40656){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25882__auto____1.call(this,state_40656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25882__auto____0;
cljs$core$async$state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25882__auto____1;
return cljs$core$async$state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto___40685,tc,fc))
})();
var state__25904__auto__ = (function (){var statearr_40680 = f__25903__auto__.call(null);
(statearr_40680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto___40685);

return statearr_40680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto___40685,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__25902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto__){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto__){
return (function (state_40765){
var state_val_40766 = (state_40765[(1)]);
if((state_val_40766 === (7))){
var inst_40761 = (state_40765[(2)]);
var state_40765__$1 = state_40765;
var statearr_40767_40788 = state_40765__$1;
(statearr_40767_40788[(2)] = inst_40761);

(statearr_40767_40788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40766 === (1))){
var inst_40745 = init;
var state_40765__$1 = (function (){var statearr_40768 = state_40765;
(statearr_40768[(7)] = inst_40745);

return statearr_40768;
})();
var statearr_40769_40789 = state_40765__$1;
(statearr_40769_40789[(2)] = null);

(statearr_40769_40789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40766 === (4))){
var inst_40748 = (state_40765[(8)]);
var inst_40748__$1 = (state_40765[(2)]);
var inst_40749 = (inst_40748__$1 == null);
var state_40765__$1 = (function (){var statearr_40770 = state_40765;
(statearr_40770[(8)] = inst_40748__$1);

return statearr_40770;
})();
if(cljs.core.truth_(inst_40749)){
var statearr_40771_40790 = state_40765__$1;
(statearr_40771_40790[(1)] = (5));

} else {
var statearr_40772_40791 = state_40765__$1;
(statearr_40772_40791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40766 === (6))){
var inst_40745 = (state_40765[(7)]);
var inst_40752 = (state_40765[(9)]);
var inst_40748 = (state_40765[(8)]);
var inst_40752__$1 = f.call(null,inst_40745,inst_40748);
var inst_40753 = cljs.core.reduced_QMARK_.call(null,inst_40752__$1);
var state_40765__$1 = (function (){var statearr_40773 = state_40765;
(statearr_40773[(9)] = inst_40752__$1);

return statearr_40773;
})();
if(inst_40753){
var statearr_40774_40792 = state_40765__$1;
(statearr_40774_40792[(1)] = (8));

} else {
var statearr_40775_40793 = state_40765__$1;
(statearr_40775_40793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40766 === (3))){
var inst_40763 = (state_40765[(2)]);
var state_40765__$1 = state_40765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40765__$1,inst_40763);
} else {
if((state_val_40766 === (2))){
var state_40765__$1 = state_40765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40765__$1,(4),ch);
} else {
if((state_val_40766 === (9))){
var inst_40752 = (state_40765[(9)]);
var inst_40745 = inst_40752;
var state_40765__$1 = (function (){var statearr_40776 = state_40765;
(statearr_40776[(7)] = inst_40745);

return statearr_40776;
})();
var statearr_40777_40794 = state_40765__$1;
(statearr_40777_40794[(2)] = null);

(statearr_40777_40794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40766 === (5))){
var inst_40745 = (state_40765[(7)]);
var state_40765__$1 = state_40765;
var statearr_40778_40795 = state_40765__$1;
(statearr_40778_40795[(2)] = inst_40745);

(statearr_40778_40795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40766 === (10))){
var inst_40759 = (state_40765[(2)]);
var state_40765__$1 = state_40765;
var statearr_40779_40796 = state_40765__$1;
(statearr_40779_40796[(2)] = inst_40759);

(statearr_40779_40796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40766 === (8))){
var inst_40752 = (state_40765[(9)]);
var inst_40755 = cljs.core.deref.call(null,inst_40752);
var state_40765__$1 = state_40765;
var statearr_40780_40797 = state_40765__$1;
(statearr_40780_40797[(2)] = inst_40755);

(statearr_40780_40797[(1)] = (10));


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
});})(c__25902__auto__))
;
return ((function (switch__25881__auto__,c__25902__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25882__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25882__auto____0 = (function (){
var statearr_40784 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40784[(0)] = cljs$core$async$reduce_$_state_machine__25882__auto__);

(statearr_40784[(1)] = (1));

return statearr_40784;
});
var cljs$core$async$reduce_$_state_machine__25882__auto____1 = (function (state_40765){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_40765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e40785){if((e40785 instanceof Object)){
var ex__25885__auto__ = e40785;
var statearr_40786_40798 = state_40765;
(statearr_40786_40798[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40799 = state_40765;
state_40765 = G__40799;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25882__auto__ = function(state_40765){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25882__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25882__auto____1.call(this,state_40765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25882__auto____0;
cljs$core$async$reduce_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25882__auto____1;
return cljs$core$async$reduce_$_state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto__))
})();
var state__25904__auto__ = (function (){var statearr_40787 = f__25903__auto__.call(null);
(statearr_40787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto__);

return statearr_40787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto__))
);

return c__25902__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args40800 = [];
var len__24844__auto___40852 = arguments.length;
var i__24845__auto___40853 = (0);
while(true){
if((i__24845__auto___40853 < len__24844__auto___40852)){
args40800.push((arguments[i__24845__auto___40853]));

var G__40854 = (i__24845__auto___40853 + (1));
i__24845__auto___40853 = G__40854;
continue;
} else {
}
break;
}

var G__40802 = args40800.length;
switch (G__40802) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40800.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__25902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto__){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto__){
return (function (state_40827){
var state_val_40828 = (state_40827[(1)]);
if((state_val_40828 === (7))){
var inst_40809 = (state_40827[(2)]);
var state_40827__$1 = state_40827;
var statearr_40829_40856 = state_40827__$1;
(statearr_40829_40856[(2)] = inst_40809);

(statearr_40829_40856[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40828 === (1))){
var inst_40803 = cljs.core.seq.call(null,coll);
var inst_40804 = inst_40803;
var state_40827__$1 = (function (){var statearr_40830 = state_40827;
(statearr_40830[(7)] = inst_40804);

return statearr_40830;
})();
var statearr_40831_40857 = state_40827__$1;
(statearr_40831_40857[(2)] = null);

(statearr_40831_40857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40828 === (4))){
var inst_40804 = (state_40827[(7)]);
var inst_40807 = cljs.core.first.call(null,inst_40804);
var state_40827__$1 = state_40827;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40827__$1,(7),ch,inst_40807);
} else {
if((state_val_40828 === (13))){
var inst_40821 = (state_40827[(2)]);
var state_40827__$1 = state_40827;
var statearr_40832_40858 = state_40827__$1;
(statearr_40832_40858[(2)] = inst_40821);

(statearr_40832_40858[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40828 === (6))){
var inst_40812 = (state_40827[(2)]);
var state_40827__$1 = state_40827;
if(cljs.core.truth_(inst_40812)){
var statearr_40833_40859 = state_40827__$1;
(statearr_40833_40859[(1)] = (8));

} else {
var statearr_40834_40860 = state_40827__$1;
(statearr_40834_40860[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40828 === (3))){
var inst_40825 = (state_40827[(2)]);
var state_40827__$1 = state_40827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40827__$1,inst_40825);
} else {
if((state_val_40828 === (12))){
var state_40827__$1 = state_40827;
var statearr_40835_40861 = state_40827__$1;
(statearr_40835_40861[(2)] = null);

(statearr_40835_40861[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40828 === (2))){
var inst_40804 = (state_40827[(7)]);
var state_40827__$1 = state_40827;
if(cljs.core.truth_(inst_40804)){
var statearr_40836_40862 = state_40827__$1;
(statearr_40836_40862[(1)] = (4));

} else {
var statearr_40837_40863 = state_40827__$1;
(statearr_40837_40863[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40828 === (11))){
var inst_40818 = cljs.core.async.close_BANG_.call(null,ch);
var state_40827__$1 = state_40827;
var statearr_40838_40864 = state_40827__$1;
(statearr_40838_40864[(2)] = inst_40818);

(statearr_40838_40864[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40828 === (9))){
var state_40827__$1 = state_40827;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40839_40865 = state_40827__$1;
(statearr_40839_40865[(1)] = (11));

} else {
var statearr_40840_40866 = state_40827__$1;
(statearr_40840_40866[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40828 === (5))){
var inst_40804 = (state_40827[(7)]);
var state_40827__$1 = state_40827;
var statearr_40841_40867 = state_40827__$1;
(statearr_40841_40867[(2)] = inst_40804);

(statearr_40841_40867[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40828 === (10))){
var inst_40823 = (state_40827[(2)]);
var state_40827__$1 = state_40827;
var statearr_40842_40868 = state_40827__$1;
(statearr_40842_40868[(2)] = inst_40823);

(statearr_40842_40868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40828 === (8))){
var inst_40804 = (state_40827[(7)]);
var inst_40814 = cljs.core.next.call(null,inst_40804);
var inst_40804__$1 = inst_40814;
var state_40827__$1 = (function (){var statearr_40843 = state_40827;
(statearr_40843[(7)] = inst_40804__$1);

return statearr_40843;
})();
var statearr_40844_40869 = state_40827__$1;
(statearr_40844_40869[(2)] = null);

(statearr_40844_40869[(1)] = (2));


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
});})(c__25902__auto__))
;
return ((function (switch__25881__auto__,c__25902__auto__){
return (function() {
var cljs$core$async$state_machine__25882__auto__ = null;
var cljs$core$async$state_machine__25882__auto____0 = (function (){
var statearr_40848 = [null,null,null,null,null,null,null,null];
(statearr_40848[(0)] = cljs$core$async$state_machine__25882__auto__);

(statearr_40848[(1)] = (1));

return statearr_40848;
});
var cljs$core$async$state_machine__25882__auto____1 = (function (state_40827){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_40827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e40849){if((e40849 instanceof Object)){
var ex__25885__auto__ = e40849;
var statearr_40850_40870 = state_40827;
(statearr_40850_40870[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40871 = state_40827;
state_40827 = G__40871;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
cljs$core$async$state_machine__25882__auto__ = function(state_40827){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25882__auto____1.call(this,state_40827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25882__auto____0;
cljs$core$async$state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25882__auto____1;
return cljs$core$async$state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto__))
})();
var state__25904__auto__ = (function (){var statearr_40851 = f__25903__auto__.call(null);
(statearr_40851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto__);

return statearr_40851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto__))
);

return c__25902__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__24441__auto__ = (((_ == null))?null:_);
var m__24442__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,_);
} else {
var m__24442__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__24441__auto__ = (((m == null))?null:m);
var m__24442__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__24442__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__24441__auto__ = (((m == null))?null:m);
var m__24442__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,m,ch);
} else {
var m__24442__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__24441__auto__ = (((m == null))?null:m);
var m__24442__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,m);
} else {
var m__24442__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async41093 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41093 = (function (mult,ch,cs,meta41094){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta41094 = meta41094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_41095,meta41094__$1){
var self__ = this;
var _41095__$1 = this;
return (new cljs.core.async.t_cljs$core$async41093(self__.mult,self__.ch,self__.cs,meta41094__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async41093.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_41095){
var self__ = this;
var _41095__$1 = this;
return self__.meta41094;
});})(cs))
;

cljs.core.async.t_cljs$core$async41093.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async41093.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async41093.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async41093.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41093.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41093.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41093.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta41094","meta41094",-1814996177,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async41093.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41093.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41093";

cljs.core.async.t_cljs$core$async41093.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__24384__auto__,writer__24385__auto__,opt__24386__auto__){
return cljs.core._write.call(null,writer__24385__auto__,"cljs.core.async/t_cljs$core$async41093");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async41093 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async41093(mult__$1,ch__$1,cs__$1,meta41094){
return (new cljs.core.async.t_cljs$core$async41093(mult__$1,ch__$1,cs__$1,meta41094));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async41093(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__25902__auto___41314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto___41314,cs,m,dchan,dctr,done){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto___41314,cs,m,dchan,dctr,done){
return (function (state_41226){
var state_val_41227 = (state_41226[(1)]);
if((state_val_41227 === (7))){
var inst_41222 = (state_41226[(2)]);
var state_41226__$1 = state_41226;
var statearr_41228_41315 = state_41226__$1;
(statearr_41228_41315[(2)] = inst_41222);

(statearr_41228_41315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (20))){
var inst_41127 = (state_41226[(7)]);
var inst_41137 = cljs.core.first.call(null,inst_41127);
var inst_41138 = cljs.core.nth.call(null,inst_41137,(0),null);
var inst_41139 = cljs.core.nth.call(null,inst_41137,(1),null);
var state_41226__$1 = (function (){var statearr_41229 = state_41226;
(statearr_41229[(8)] = inst_41138);

return statearr_41229;
})();
if(cljs.core.truth_(inst_41139)){
var statearr_41230_41316 = state_41226__$1;
(statearr_41230_41316[(1)] = (22));

} else {
var statearr_41231_41317 = state_41226__$1;
(statearr_41231_41317[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (27))){
var inst_41169 = (state_41226[(9)]);
var inst_41098 = (state_41226[(10)]);
var inst_41174 = (state_41226[(11)]);
var inst_41167 = (state_41226[(12)]);
var inst_41174__$1 = cljs.core._nth.call(null,inst_41167,inst_41169);
var inst_41175 = cljs.core.async.put_BANG_.call(null,inst_41174__$1,inst_41098,done);
var state_41226__$1 = (function (){var statearr_41232 = state_41226;
(statearr_41232[(11)] = inst_41174__$1);

return statearr_41232;
})();
if(cljs.core.truth_(inst_41175)){
var statearr_41233_41318 = state_41226__$1;
(statearr_41233_41318[(1)] = (30));

} else {
var statearr_41234_41319 = state_41226__$1;
(statearr_41234_41319[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (1))){
var state_41226__$1 = state_41226;
var statearr_41235_41320 = state_41226__$1;
(statearr_41235_41320[(2)] = null);

(statearr_41235_41320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (24))){
var inst_41127 = (state_41226[(7)]);
var inst_41144 = (state_41226[(2)]);
var inst_41145 = cljs.core.next.call(null,inst_41127);
var inst_41107 = inst_41145;
var inst_41108 = null;
var inst_41109 = (0);
var inst_41110 = (0);
var state_41226__$1 = (function (){var statearr_41236 = state_41226;
(statearr_41236[(13)] = inst_41109);

(statearr_41236[(14)] = inst_41110);

(statearr_41236[(15)] = inst_41144);

(statearr_41236[(16)] = inst_41107);

(statearr_41236[(17)] = inst_41108);

return statearr_41236;
})();
var statearr_41237_41321 = state_41226__$1;
(statearr_41237_41321[(2)] = null);

(statearr_41237_41321[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (39))){
var state_41226__$1 = state_41226;
var statearr_41241_41322 = state_41226__$1;
(statearr_41241_41322[(2)] = null);

(statearr_41241_41322[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (4))){
var inst_41098 = (state_41226[(10)]);
var inst_41098__$1 = (state_41226[(2)]);
var inst_41099 = (inst_41098__$1 == null);
var state_41226__$1 = (function (){var statearr_41242 = state_41226;
(statearr_41242[(10)] = inst_41098__$1);

return statearr_41242;
})();
if(cljs.core.truth_(inst_41099)){
var statearr_41243_41323 = state_41226__$1;
(statearr_41243_41323[(1)] = (5));

} else {
var statearr_41244_41324 = state_41226__$1;
(statearr_41244_41324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (15))){
var inst_41109 = (state_41226[(13)]);
var inst_41110 = (state_41226[(14)]);
var inst_41107 = (state_41226[(16)]);
var inst_41108 = (state_41226[(17)]);
var inst_41123 = (state_41226[(2)]);
var inst_41124 = (inst_41110 + (1));
var tmp41238 = inst_41109;
var tmp41239 = inst_41107;
var tmp41240 = inst_41108;
var inst_41107__$1 = tmp41239;
var inst_41108__$1 = tmp41240;
var inst_41109__$1 = tmp41238;
var inst_41110__$1 = inst_41124;
var state_41226__$1 = (function (){var statearr_41245 = state_41226;
(statearr_41245[(13)] = inst_41109__$1);

(statearr_41245[(14)] = inst_41110__$1);

(statearr_41245[(16)] = inst_41107__$1);

(statearr_41245[(18)] = inst_41123);

(statearr_41245[(17)] = inst_41108__$1);

return statearr_41245;
})();
var statearr_41246_41325 = state_41226__$1;
(statearr_41246_41325[(2)] = null);

(statearr_41246_41325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (21))){
var inst_41148 = (state_41226[(2)]);
var state_41226__$1 = state_41226;
var statearr_41250_41326 = state_41226__$1;
(statearr_41250_41326[(2)] = inst_41148);

(statearr_41250_41326[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (31))){
var inst_41174 = (state_41226[(11)]);
var inst_41178 = done.call(null,null);
var inst_41179 = cljs.core.async.untap_STAR_.call(null,m,inst_41174);
var state_41226__$1 = (function (){var statearr_41251 = state_41226;
(statearr_41251[(19)] = inst_41178);

return statearr_41251;
})();
var statearr_41252_41327 = state_41226__$1;
(statearr_41252_41327[(2)] = inst_41179);

(statearr_41252_41327[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (32))){
var inst_41169 = (state_41226[(9)]);
var inst_41168 = (state_41226[(20)]);
var inst_41167 = (state_41226[(12)]);
var inst_41166 = (state_41226[(21)]);
var inst_41181 = (state_41226[(2)]);
var inst_41182 = (inst_41169 + (1));
var tmp41247 = inst_41168;
var tmp41248 = inst_41167;
var tmp41249 = inst_41166;
var inst_41166__$1 = tmp41249;
var inst_41167__$1 = tmp41248;
var inst_41168__$1 = tmp41247;
var inst_41169__$1 = inst_41182;
var state_41226__$1 = (function (){var statearr_41253 = state_41226;
(statearr_41253[(22)] = inst_41181);

(statearr_41253[(9)] = inst_41169__$1);

(statearr_41253[(20)] = inst_41168__$1);

(statearr_41253[(12)] = inst_41167__$1);

(statearr_41253[(21)] = inst_41166__$1);

return statearr_41253;
})();
var statearr_41254_41328 = state_41226__$1;
(statearr_41254_41328[(2)] = null);

(statearr_41254_41328[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (40))){
var inst_41194 = (state_41226[(23)]);
var inst_41198 = done.call(null,null);
var inst_41199 = cljs.core.async.untap_STAR_.call(null,m,inst_41194);
var state_41226__$1 = (function (){var statearr_41255 = state_41226;
(statearr_41255[(24)] = inst_41198);

return statearr_41255;
})();
var statearr_41256_41329 = state_41226__$1;
(statearr_41256_41329[(2)] = inst_41199);

(statearr_41256_41329[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (33))){
var inst_41185 = (state_41226[(25)]);
var inst_41187 = cljs.core.chunked_seq_QMARK_.call(null,inst_41185);
var state_41226__$1 = state_41226;
if(inst_41187){
var statearr_41257_41330 = state_41226__$1;
(statearr_41257_41330[(1)] = (36));

} else {
var statearr_41258_41331 = state_41226__$1;
(statearr_41258_41331[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (13))){
var inst_41117 = (state_41226[(26)]);
var inst_41120 = cljs.core.async.close_BANG_.call(null,inst_41117);
var state_41226__$1 = state_41226;
var statearr_41259_41332 = state_41226__$1;
(statearr_41259_41332[(2)] = inst_41120);

(statearr_41259_41332[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (22))){
var inst_41138 = (state_41226[(8)]);
var inst_41141 = cljs.core.async.close_BANG_.call(null,inst_41138);
var state_41226__$1 = state_41226;
var statearr_41260_41333 = state_41226__$1;
(statearr_41260_41333[(2)] = inst_41141);

(statearr_41260_41333[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (36))){
var inst_41185 = (state_41226[(25)]);
var inst_41189 = cljs.core.chunk_first.call(null,inst_41185);
var inst_41190 = cljs.core.chunk_rest.call(null,inst_41185);
var inst_41191 = cljs.core.count.call(null,inst_41189);
var inst_41166 = inst_41190;
var inst_41167 = inst_41189;
var inst_41168 = inst_41191;
var inst_41169 = (0);
var state_41226__$1 = (function (){var statearr_41261 = state_41226;
(statearr_41261[(9)] = inst_41169);

(statearr_41261[(20)] = inst_41168);

(statearr_41261[(12)] = inst_41167);

(statearr_41261[(21)] = inst_41166);

return statearr_41261;
})();
var statearr_41262_41334 = state_41226__$1;
(statearr_41262_41334[(2)] = null);

(statearr_41262_41334[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (41))){
var inst_41185 = (state_41226[(25)]);
var inst_41201 = (state_41226[(2)]);
var inst_41202 = cljs.core.next.call(null,inst_41185);
var inst_41166 = inst_41202;
var inst_41167 = null;
var inst_41168 = (0);
var inst_41169 = (0);
var state_41226__$1 = (function (){var statearr_41263 = state_41226;
(statearr_41263[(9)] = inst_41169);

(statearr_41263[(27)] = inst_41201);

(statearr_41263[(20)] = inst_41168);

(statearr_41263[(12)] = inst_41167);

(statearr_41263[(21)] = inst_41166);

return statearr_41263;
})();
var statearr_41264_41335 = state_41226__$1;
(statearr_41264_41335[(2)] = null);

(statearr_41264_41335[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (43))){
var state_41226__$1 = state_41226;
var statearr_41265_41336 = state_41226__$1;
(statearr_41265_41336[(2)] = null);

(statearr_41265_41336[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (29))){
var inst_41210 = (state_41226[(2)]);
var state_41226__$1 = state_41226;
var statearr_41266_41337 = state_41226__$1;
(statearr_41266_41337[(2)] = inst_41210);

(statearr_41266_41337[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (44))){
var inst_41219 = (state_41226[(2)]);
var state_41226__$1 = (function (){var statearr_41267 = state_41226;
(statearr_41267[(28)] = inst_41219);

return statearr_41267;
})();
var statearr_41268_41338 = state_41226__$1;
(statearr_41268_41338[(2)] = null);

(statearr_41268_41338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (6))){
var inst_41158 = (state_41226[(29)]);
var inst_41157 = cljs.core.deref.call(null,cs);
var inst_41158__$1 = cljs.core.keys.call(null,inst_41157);
var inst_41159 = cljs.core.count.call(null,inst_41158__$1);
var inst_41160 = cljs.core.reset_BANG_.call(null,dctr,inst_41159);
var inst_41165 = cljs.core.seq.call(null,inst_41158__$1);
var inst_41166 = inst_41165;
var inst_41167 = null;
var inst_41168 = (0);
var inst_41169 = (0);
var state_41226__$1 = (function (){var statearr_41269 = state_41226;
(statearr_41269[(29)] = inst_41158__$1);

(statearr_41269[(9)] = inst_41169);

(statearr_41269[(30)] = inst_41160);

(statearr_41269[(20)] = inst_41168);

(statearr_41269[(12)] = inst_41167);

(statearr_41269[(21)] = inst_41166);

return statearr_41269;
})();
var statearr_41270_41339 = state_41226__$1;
(statearr_41270_41339[(2)] = null);

(statearr_41270_41339[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (28))){
var inst_41185 = (state_41226[(25)]);
var inst_41166 = (state_41226[(21)]);
var inst_41185__$1 = cljs.core.seq.call(null,inst_41166);
var state_41226__$1 = (function (){var statearr_41271 = state_41226;
(statearr_41271[(25)] = inst_41185__$1);

return statearr_41271;
})();
if(inst_41185__$1){
var statearr_41272_41340 = state_41226__$1;
(statearr_41272_41340[(1)] = (33));

} else {
var statearr_41273_41341 = state_41226__$1;
(statearr_41273_41341[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (25))){
var inst_41169 = (state_41226[(9)]);
var inst_41168 = (state_41226[(20)]);
var inst_41171 = (inst_41169 < inst_41168);
var inst_41172 = inst_41171;
var state_41226__$1 = state_41226;
if(cljs.core.truth_(inst_41172)){
var statearr_41274_41342 = state_41226__$1;
(statearr_41274_41342[(1)] = (27));

} else {
var statearr_41275_41343 = state_41226__$1;
(statearr_41275_41343[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (34))){
var state_41226__$1 = state_41226;
var statearr_41276_41344 = state_41226__$1;
(statearr_41276_41344[(2)] = null);

(statearr_41276_41344[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (17))){
var state_41226__$1 = state_41226;
var statearr_41277_41345 = state_41226__$1;
(statearr_41277_41345[(2)] = null);

(statearr_41277_41345[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (3))){
var inst_41224 = (state_41226[(2)]);
var state_41226__$1 = state_41226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41226__$1,inst_41224);
} else {
if((state_val_41227 === (12))){
var inst_41153 = (state_41226[(2)]);
var state_41226__$1 = state_41226;
var statearr_41278_41346 = state_41226__$1;
(statearr_41278_41346[(2)] = inst_41153);

(statearr_41278_41346[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (2))){
var state_41226__$1 = state_41226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41226__$1,(4),ch);
} else {
if((state_val_41227 === (23))){
var state_41226__$1 = state_41226;
var statearr_41279_41347 = state_41226__$1;
(statearr_41279_41347[(2)] = null);

(statearr_41279_41347[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (35))){
var inst_41208 = (state_41226[(2)]);
var state_41226__$1 = state_41226;
var statearr_41280_41348 = state_41226__$1;
(statearr_41280_41348[(2)] = inst_41208);

(statearr_41280_41348[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (19))){
var inst_41127 = (state_41226[(7)]);
var inst_41131 = cljs.core.chunk_first.call(null,inst_41127);
var inst_41132 = cljs.core.chunk_rest.call(null,inst_41127);
var inst_41133 = cljs.core.count.call(null,inst_41131);
var inst_41107 = inst_41132;
var inst_41108 = inst_41131;
var inst_41109 = inst_41133;
var inst_41110 = (0);
var state_41226__$1 = (function (){var statearr_41281 = state_41226;
(statearr_41281[(13)] = inst_41109);

(statearr_41281[(14)] = inst_41110);

(statearr_41281[(16)] = inst_41107);

(statearr_41281[(17)] = inst_41108);

return statearr_41281;
})();
var statearr_41282_41349 = state_41226__$1;
(statearr_41282_41349[(2)] = null);

(statearr_41282_41349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (11))){
var inst_41107 = (state_41226[(16)]);
var inst_41127 = (state_41226[(7)]);
var inst_41127__$1 = cljs.core.seq.call(null,inst_41107);
var state_41226__$1 = (function (){var statearr_41283 = state_41226;
(statearr_41283[(7)] = inst_41127__$1);

return statearr_41283;
})();
if(inst_41127__$1){
var statearr_41284_41350 = state_41226__$1;
(statearr_41284_41350[(1)] = (16));

} else {
var statearr_41285_41351 = state_41226__$1;
(statearr_41285_41351[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (9))){
var inst_41155 = (state_41226[(2)]);
var state_41226__$1 = state_41226;
var statearr_41286_41352 = state_41226__$1;
(statearr_41286_41352[(2)] = inst_41155);

(statearr_41286_41352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (5))){
var inst_41105 = cljs.core.deref.call(null,cs);
var inst_41106 = cljs.core.seq.call(null,inst_41105);
var inst_41107 = inst_41106;
var inst_41108 = null;
var inst_41109 = (0);
var inst_41110 = (0);
var state_41226__$1 = (function (){var statearr_41287 = state_41226;
(statearr_41287[(13)] = inst_41109);

(statearr_41287[(14)] = inst_41110);

(statearr_41287[(16)] = inst_41107);

(statearr_41287[(17)] = inst_41108);

return statearr_41287;
})();
var statearr_41288_41353 = state_41226__$1;
(statearr_41288_41353[(2)] = null);

(statearr_41288_41353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (14))){
var state_41226__$1 = state_41226;
var statearr_41289_41354 = state_41226__$1;
(statearr_41289_41354[(2)] = null);

(statearr_41289_41354[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (45))){
var inst_41216 = (state_41226[(2)]);
var state_41226__$1 = state_41226;
var statearr_41290_41355 = state_41226__$1;
(statearr_41290_41355[(2)] = inst_41216);

(statearr_41290_41355[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (26))){
var inst_41158 = (state_41226[(29)]);
var inst_41212 = (state_41226[(2)]);
var inst_41213 = cljs.core.seq.call(null,inst_41158);
var state_41226__$1 = (function (){var statearr_41291 = state_41226;
(statearr_41291[(31)] = inst_41212);

return statearr_41291;
})();
if(inst_41213){
var statearr_41292_41356 = state_41226__$1;
(statearr_41292_41356[(1)] = (42));

} else {
var statearr_41293_41357 = state_41226__$1;
(statearr_41293_41357[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (16))){
var inst_41127 = (state_41226[(7)]);
var inst_41129 = cljs.core.chunked_seq_QMARK_.call(null,inst_41127);
var state_41226__$1 = state_41226;
if(inst_41129){
var statearr_41294_41358 = state_41226__$1;
(statearr_41294_41358[(1)] = (19));

} else {
var statearr_41295_41359 = state_41226__$1;
(statearr_41295_41359[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (38))){
var inst_41205 = (state_41226[(2)]);
var state_41226__$1 = state_41226;
var statearr_41296_41360 = state_41226__$1;
(statearr_41296_41360[(2)] = inst_41205);

(statearr_41296_41360[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (30))){
var state_41226__$1 = state_41226;
var statearr_41297_41361 = state_41226__$1;
(statearr_41297_41361[(2)] = null);

(statearr_41297_41361[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (10))){
var inst_41110 = (state_41226[(14)]);
var inst_41108 = (state_41226[(17)]);
var inst_41116 = cljs.core._nth.call(null,inst_41108,inst_41110);
var inst_41117 = cljs.core.nth.call(null,inst_41116,(0),null);
var inst_41118 = cljs.core.nth.call(null,inst_41116,(1),null);
var state_41226__$1 = (function (){var statearr_41298 = state_41226;
(statearr_41298[(26)] = inst_41117);

return statearr_41298;
})();
if(cljs.core.truth_(inst_41118)){
var statearr_41299_41362 = state_41226__$1;
(statearr_41299_41362[(1)] = (13));

} else {
var statearr_41300_41363 = state_41226__$1;
(statearr_41300_41363[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (18))){
var inst_41151 = (state_41226[(2)]);
var state_41226__$1 = state_41226;
var statearr_41301_41364 = state_41226__$1;
(statearr_41301_41364[(2)] = inst_41151);

(statearr_41301_41364[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (42))){
var state_41226__$1 = state_41226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41226__$1,(45),dchan);
} else {
if((state_val_41227 === (37))){
var inst_41194 = (state_41226[(23)]);
var inst_41098 = (state_41226[(10)]);
var inst_41185 = (state_41226[(25)]);
var inst_41194__$1 = cljs.core.first.call(null,inst_41185);
var inst_41195 = cljs.core.async.put_BANG_.call(null,inst_41194__$1,inst_41098,done);
var state_41226__$1 = (function (){var statearr_41302 = state_41226;
(statearr_41302[(23)] = inst_41194__$1);

return statearr_41302;
})();
if(cljs.core.truth_(inst_41195)){
var statearr_41303_41365 = state_41226__$1;
(statearr_41303_41365[(1)] = (39));

} else {
var statearr_41304_41366 = state_41226__$1;
(statearr_41304_41366[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (8))){
var inst_41109 = (state_41226[(13)]);
var inst_41110 = (state_41226[(14)]);
var inst_41112 = (inst_41110 < inst_41109);
var inst_41113 = inst_41112;
var state_41226__$1 = state_41226;
if(cljs.core.truth_(inst_41113)){
var statearr_41305_41367 = state_41226__$1;
(statearr_41305_41367[(1)] = (10));

} else {
var statearr_41306_41368 = state_41226__$1;
(statearr_41306_41368[(1)] = (11));

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
});})(c__25902__auto___41314,cs,m,dchan,dctr,done))
;
return ((function (switch__25881__auto__,c__25902__auto___41314,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25882__auto__ = null;
var cljs$core$async$mult_$_state_machine__25882__auto____0 = (function (){
var statearr_41310 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41310[(0)] = cljs$core$async$mult_$_state_machine__25882__auto__);

(statearr_41310[(1)] = (1));

return statearr_41310;
});
var cljs$core$async$mult_$_state_machine__25882__auto____1 = (function (state_41226){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_41226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e41311){if((e41311 instanceof Object)){
var ex__25885__auto__ = e41311;
var statearr_41312_41369 = state_41226;
(statearr_41312_41369[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41370 = state_41226;
state_41226 = G__41370;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25882__auto__ = function(state_41226){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25882__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25882__auto____1.call(this,state_41226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25882__auto____0;
cljs$core$async$mult_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25882__auto____1;
return cljs$core$async$mult_$_state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto___41314,cs,m,dchan,dctr,done))
})();
var state__25904__auto__ = (function (){var statearr_41313 = f__25903__auto__.call(null);
(statearr_41313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto___41314);

return statearr_41313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto___41314,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args41371 = [];
var len__24844__auto___41374 = arguments.length;
var i__24845__auto___41375 = (0);
while(true){
if((i__24845__auto___41375 < len__24844__auto___41374)){
args41371.push((arguments[i__24845__auto___41375]));

var G__41376 = (i__24845__auto___41375 + (1));
i__24845__auto___41375 = G__41376;
continue;
} else {
}
break;
}

var G__41373 = args41371.length;
switch (G__41373) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41371.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__24441__auto__ = (((m == null))?null:m);
var m__24442__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,m,ch);
} else {
var m__24442__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__24441__auto__ = (((m == null))?null:m);
var m__24442__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,m,ch);
} else {
var m__24442__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__24441__auto__ = (((m == null))?null:m);
var m__24442__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,m);
} else {
var m__24442__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__24441__auto__ = (((m == null))?null:m);
var m__24442__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,m,state_map);
} else {
var m__24442__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__24441__auto__ = (((m == null))?null:m);
var m__24442__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,m,mode);
} else {
var m__24442__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__24851__auto__ = [];
var len__24844__auto___41388 = arguments.length;
var i__24845__auto___41389 = (0);
while(true){
if((i__24845__auto___41389 < len__24844__auto___41388)){
args__24851__auto__.push((arguments[i__24845__auto___41389]));

var G__41390 = (i__24845__auto___41389 + (1));
i__24845__auto___41389 = G__41390;
continue;
} else {
}
break;
}

var argseq__24852__auto__ = ((((3) < args__24851__auto__.length))?(new cljs.core.IndexedSeq(args__24851__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__24852__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__41382){
var map__41383 = p__41382;
var map__41383__$1 = ((((!((map__41383 == null)))?((((map__41383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41383):map__41383);
var opts = map__41383__$1;
var statearr_41385_41391 = state;
(statearr_41385_41391[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__41383,map__41383__$1,opts){
return (function (val){
var statearr_41386_41392 = state;
(statearr_41386_41392[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__41383,map__41383__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_41387_41393 = state;
(statearr_41387_41393[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq41378){
var G__41379 = cljs.core.first.call(null,seq41378);
var seq41378__$1 = cljs.core.next.call(null,seq41378);
var G__41380 = cljs.core.first.call(null,seq41378__$1);
var seq41378__$2 = cljs.core.next.call(null,seq41378__$1);
var G__41381 = cljs.core.first.call(null,seq41378__$2);
var seq41378__$3 = cljs.core.next.call(null,seq41378__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41379,G__41380,G__41381,seq41378__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async41557 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41557 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta41558){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta41558 = meta41558;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41559,meta41558__$1){
var self__ = this;
var _41559__$1 = this;
return (new cljs.core.async.t_cljs$core$async41557(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta41558__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41557.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41559){
var self__ = this;
var _41559__$1 = this;
return self__.meta41558;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41557.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async41557.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41557.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async41557.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41557.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41557.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41557.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41557.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41557.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta41558","meta41558",1551830338,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41557.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41557.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41557";

cljs.core.async.t_cljs$core$async41557.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__24384__auto__,writer__24385__auto__,opt__24386__auto__){
return cljs.core._write.call(null,writer__24385__auto__,"cljs.core.async/t_cljs$core$async41557");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async41557 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async41557(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41558){
return (new cljs.core.async.t_cljs$core$async41557(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41558));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async41557(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25902__auto___41720 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto___41720,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto___41720,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_41657){
var state_val_41658 = (state_41657[(1)]);
if((state_val_41658 === (7))){
var inst_41575 = (state_41657[(2)]);
var state_41657__$1 = state_41657;
var statearr_41659_41721 = state_41657__$1;
(statearr_41659_41721[(2)] = inst_41575);

(statearr_41659_41721[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41658 === (20))){
var inst_41587 = (state_41657[(7)]);
var state_41657__$1 = state_41657;
var statearr_41660_41722 = state_41657__$1;
(statearr_41660_41722[(2)] = inst_41587);

(statearr_41660_41722[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41658 === (27))){
var state_41657__$1 = state_41657;
var statearr_41661_41723 = state_41657__$1;
(statearr_41661_41723[(2)] = null);

(statearr_41661_41723[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41658 === (1))){
var inst_41563 = (state_41657[(8)]);
var inst_41563__$1 = calc_state.call(null);
var inst_41565 = (inst_41563__$1 == null);
var inst_41566 = cljs.core.not.call(null,inst_41565);
var state_41657__$1 = (function (){var statearr_41662 = state_41657;
(statearr_41662[(8)] = inst_41563__$1);

return statearr_41662;
})();
if(inst_41566){
var statearr_41663_41724 = state_41657__$1;
(statearr_41663_41724[(1)] = (2));

} else {
var statearr_41664_41725 = state_41657__$1;
(statearr_41664_41725[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41658 === (24))){
var inst_41617 = (state_41657[(9)]);
var inst_41610 = (state_41657[(10)]);
var inst_41631 = (state_41657[(11)]);
var inst_41631__$1 = inst_41610.call(null,inst_41617);
var state_41657__$1 = (function (){var statearr_41665 = state_41657;
(statearr_41665[(11)] = inst_41631__$1);

return statearr_41665;
})();
if(cljs.core.truth_(inst_41631__$1)){
var statearr_41666_41726 = state_41657__$1;
(statearr_41666_41726[(1)] = (29));

} else {
var statearr_41667_41727 = state_41657__$1;
(statearr_41667_41727[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41658 === (4))){
var inst_41578 = (state_41657[(2)]);
var state_41657__$1 = state_41657;
if(cljs.core.truth_(inst_41578)){
var statearr_41668_41728 = state_41657__$1;
(statearr_41668_41728[(1)] = (8));

} else {
var statearr_41669_41729 = state_41657__$1;
(statearr_41669_41729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41658 === (15))){
var inst_41604 = (state_41657[(2)]);
var state_41657__$1 = state_41657;
if(cljs.core.truth_(inst_41604)){
var statearr_41670_41730 = state_41657__$1;
(statearr_41670_41730[(1)] = (19));

} else {
var statearr_41671_41731 = state_41657__$1;
(statearr_41671_41731[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41658 === (21))){
var inst_41609 = (state_41657[(12)]);
var inst_41609__$1 = (state_41657[(2)]);
var inst_41610 = cljs.core.get.call(null,inst_41609__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41611 = cljs.core.get.call(null,inst_41609__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41612 = cljs.core.get.call(null,inst_41609__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_41657__$1 = (function (){var statearr_41672 = state_41657;
(statearr_41672[(12)] = inst_41609__$1);

(statearr_41672[(10)] = inst_41610);

(statearr_41672[(13)] = inst_41611);

return statearr_41672;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_41657__$1,(22),inst_41612);
} else {
if((state_val_41658 === (31))){
var inst_41639 = (state_41657[(2)]);
var state_41657__$1 = state_41657;
if(cljs.core.truth_(inst_41639)){
var statearr_41673_41732 = state_41657__$1;
(statearr_41673_41732[(1)] = (32));

} else {
var statearr_41674_41733 = state_41657__$1;
(statearr_41674_41733[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41658 === (32))){
var inst_41616 = (state_41657[(14)]);
var state_41657__$1 = state_41657;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41657__$1,(35),out,inst_41616);
} else {
if((state_val_41658 === (33))){
var inst_41609 = (state_41657[(12)]);
var inst_41587 = inst_41609;
var state_41657__$1 = (function (){var statearr_41675 = state_41657;
(statearr_41675[(7)] = inst_41587);

return statearr_41675;
})();
var statearr_41676_41734 = state_41657__$1;
(statearr_41676_41734[(2)] = null);

(statearr_41676_41734[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41658 === (13))){
var inst_41587 = (state_41657[(7)]);
var inst_41594 = inst_41587.cljs$lang$protocol_mask$partition0$;
var inst_41595 = (inst_41594 & (64));
var inst_41596 = inst_41587.cljs$core$ISeq$;
var inst_41597 = (inst_41595) || (inst_41596);
var state_41657__$1 = state_41657;
if(cljs.core.truth_(inst_41597)){
var statearr_41677_41735 = state_41657__$1;
(statearr_41677_41735[(1)] = (16));

} else {
var statearr_41678_41736 = state_41657__$1;
(statearr_41678_41736[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41658 === (22))){
var inst_41617 = (state_41657[(9)]);
var inst_41616 = (state_41657[(14)]);
var inst_41615 = (state_41657[(2)]);
var inst_41616__$1 = cljs.core.nth.call(null,inst_41615,(0),null);
var inst_41617__$1 = cljs.core.nth.call(null,inst_41615,(1),null);
var inst_41618 = (inst_41616__$1 == null);
var inst_41619 = cljs.core._EQ_.call(null,inst_41617__$1,change);
var inst_41620 = (inst_41618) || (inst_41619);
var state_41657__$1 = (function (){var statearr_41679 = state_41657;
(statearr_41679[(9)] = inst_41617__$1);

(statearr_41679[(14)] = inst_41616__$1);

return statearr_41679;
})();
if(cljs.core.truth_(inst_41620)){
var statearr_41680_41737 = state_41657__$1;
(statearr_41680_41737[(1)] = (23));

} else {
var statearr_41681_41738 = state_41657__$1;
(statearr_41681_41738[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41658 === (36))){
var inst_41609 = (state_41657[(12)]);
var inst_41587 = inst_41609;
var state_41657__$1 = (function (){var statearr_41682 = state_41657;
(statearr_41682[(7)] = inst_41587);

return statearr_41682;
})();
var statearr_41683_41739 = state_41657__$1;
(statearr_41683_41739[(2)] = null);

(statearr_41683_41739[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41658 === (29))){
var inst_41631 = (state_41657[(11)]);
var state_41657__$1 = state_41657;
var statearr_41684_41740 = state_41657__$1;
(statearr_41684_41740[(2)] = inst_41631);

(statearr_41684_41740[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41658 === (6))){
var state_41657__$1 = state_41657;
var statearr_41685_41741 = state_41657__$1;
(statearr_41685_41741[(2)] = false);

(statearr_41685_41741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41658 === (28))){
var inst_41627 = (state_41657[(2)]);
var inst_41628 = calc_state.call(null);
var inst_41587 = inst_41628;
var state_41657__$1 = (function (){var statearr_41686 = state_41657;
(statearr_41686[(15)] = inst_41627);

(statearr_41686[(7)] = inst_41587);

return statearr_41686;
})();
var statearr_41687_41742 = state_41657__$1;
(statearr_41687_41742[(2)] = null);

(statearr_41687_41742[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41658 === (25))){
var inst_41653 = (state_41657[(2)]);
var state_41657__$1 = state_41657;
var statearr_41688_41743 = state_41657__$1;
(statearr_41688_41743[(2)] = inst_41653);

(statearr_41688_41743[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41658 === (34))){
var inst_41651 = (state_41657[(2)]);
var state_41657__$1 = state_41657;
var statearr_41689_41744 = state_41657__$1;
(statearr_41689_41744[(2)] = inst_41651);

(statearr_41689_41744[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41658 === (17))){
var state_41657__$1 = state_41657;
var statearr_41690_41745 = state_41657__$1;
(statearr_41690_41745[(2)] = false);

(statearr_41690_41745[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41658 === (3))){
var state_41657__$1 = state_41657;
var statearr_41691_41746 = state_41657__$1;
(statearr_41691_41746[(2)] = false);

(statearr_41691_41746[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41658 === (12))){
var inst_41655 = (state_41657[(2)]);
var state_41657__$1 = state_41657;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41657__$1,inst_41655);
} else {
if((state_val_41658 === (2))){
var inst_41563 = (state_41657[(8)]);
var inst_41568 = inst_41563.cljs$lang$protocol_mask$partition0$;
var inst_41569 = (inst_41568 & (64));
var inst_41570 = inst_41563.cljs$core$ISeq$;
var inst_41571 = (inst_41569) || (inst_41570);
var state_41657__$1 = state_41657;
if(cljs.core.truth_(inst_41571)){
var statearr_41692_41747 = state_41657__$1;
(statearr_41692_41747[(1)] = (5));

} else {
var statearr_41693_41748 = state_41657__$1;
(statearr_41693_41748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41658 === (23))){
var inst_41616 = (state_41657[(14)]);
var inst_41622 = (inst_41616 == null);
var state_41657__$1 = state_41657;
if(cljs.core.truth_(inst_41622)){
var statearr_41694_41749 = state_41657__$1;
(statearr_41694_41749[(1)] = (26));

} else {
var statearr_41695_41750 = state_41657__$1;
(statearr_41695_41750[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41658 === (35))){
var inst_41642 = (state_41657[(2)]);
var state_41657__$1 = state_41657;
if(cljs.core.truth_(inst_41642)){
var statearr_41696_41751 = state_41657__$1;
(statearr_41696_41751[(1)] = (36));

} else {
var statearr_41697_41752 = state_41657__$1;
(statearr_41697_41752[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41658 === (19))){
var inst_41587 = (state_41657[(7)]);
var inst_41606 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41587);
var state_41657__$1 = state_41657;
var statearr_41698_41753 = state_41657__$1;
(statearr_41698_41753[(2)] = inst_41606);

(statearr_41698_41753[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41658 === (11))){
var inst_41587 = (state_41657[(7)]);
var inst_41591 = (inst_41587 == null);
var inst_41592 = cljs.core.not.call(null,inst_41591);
var state_41657__$1 = state_41657;
if(inst_41592){
var statearr_41699_41754 = state_41657__$1;
(statearr_41699_41754[(1)] = (13));

} else {
var statearr_41700_41755 = state_41657__$1;
(statearr_41700_41755[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41658 === (9))){
var inst_41563 = (state_41657[(8)]);
var state_41657__$1 = state_41657;
var statearr_41701_41756 = state_41657__$1;
(statearr_41701_41756[(2)] = inst_41563);

(statearr_41701_41756[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41658 === (5))){
var state_41657__$1 = state_41657;
var statearr_41702_41757 = state_41657__$1;
(statearr_41702_41757[(2)] = true);

(statearr_41702_41757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41658 === (14))){
var state_41657__$1 = state_41657;
var statearr_41703_41758 = state_41657__$1;
(statearr_41703_41758[(2)] = false);

(statearr_41703_41758[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41658 === (26))){
var inst_41617 = (state_41657[(9)]);
var inst_41624 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_41617);
var state_41657__$1 = state_41657;
var statearr_41704_41759 = state_41657__$1;
(statearr_41704_41759[(2)] = inst_41624);

(statearr_41704_41759[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41658 === (16))){
var state_41657__$1 = state_41657;
var statearr_41705_41760 = state_41657__$1;
(statearr_41705_41760[(2)] = true);

(statearr_41705_41760[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41658 === (38))){
var inst_41647 = (state_41657[(2)]);
var state_41657__$1 = state_41657;
var statearr_41706_41761 = state_41657__$1;
(statearr_41706_41761[(2)] = inst_41647);

(statearr_41706_41761[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41658 === (30))){
var inst_41617 = (state_41657[(9)]);
var inst_41610 = (state_41657[(10)]);
var inst_41611 = (state_41657[(13)]);
var inst_41634 = cljs.core.empty_QMARK_.call(null,inst_41610);
var inst_41635 = inst_41611.call(null,inst_41617);
var inst_41636 = cljs.core.not.call(null,inst_41635);
var inst_41637 = (inst_41634) && (inst_41636);
var state_41657__$1 = state_41657;
var statearr_41707_41762 = state_41657__$1;
(statearr_41707_41762[(2)] = inst_41637);

(statearr_41707_41762[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41658 === (10))){
var inst_41563 = (state_41657[(8)]);
var inst_41583 = (state_41657[(2)]);
var inst_41584 = cljs.core.get.call(null,inst_41583,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41585 = cljs.core.get.call(null,inst_41583,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41586 = cljs.core.get.call(null,inst_41583,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_41587 = inst_41563;
var state_41657__$1 = (function (){var statearr_41708 = state_41657;
(statearr_41708[(16)] = inst_41585);

(statearr_41708[(17)] = inst_41586);

(statearr_41708[(18)] = inst_41584);

(statearr_41708[(7)] = inst_41587);

return statearr_41708;
})();
var statearr_41709_41763 = state_41657__$1;
(statearr_41709_41763[(2)] = null);

(statearr_41709_41763[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41658 === (18))){
var inst_41601 = (state_41657[(2)]);
var state_41657__$1 = state_41657;
var statearr_41710_41764 = state_41657__$1;
(statearr_41710_41764[(2)] = inst_41601);

(statearr_41710_41764[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41658 === (37))){
var state_41657__$1 = state_41657;
var statearr_41711_41765 = state_41657__$1;
(statearr_41711_41765[(2)] = null);

(statearr_41711_41765[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41658 === (8))){
var inst_41563 = (state_41657[(8)]);
var inst_41580 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41563);
var state_41657__$1 = state_41657;
var statearr_41712_41766 = state_41657__$1;
(statearr_41712_41766[(2)] = inst_41580);

(statearr_41712_41766[(1)] = (10));


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
});})(c__25902__auto___41720,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25881__auto__,c__25902__auto___41720,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25882__auto__ = null;
var cljs$core$async$mix_$_state_machine__25882__auto____0 = (function (){
var statearr_41716 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41716[(0)] = cljs$core$async$mix_$_state_machine__25882__auto__);

(statearr_41716[(1)] = (1));

return statearr_41716;
});
var cljs$core$async$mix_$_state_machine__25882__auto____1 = (function (state_41657){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_41657);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e41717){if((e41717 instanceof Object)){
var ex__25885__auto__ = e41717;
var statearr_41718_41767 = state_41657;
(statearr_41718_41767[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41768 = state_41657;
state_41657 = G__41768;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25882__auto__ = function(state_41657){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25882__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25882__auto____1.call(this,state_41657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25882__auto____0;
cljs$core$async$mix_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25882__auto____1;
return cljs$core$async$mix_$_state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto___41720,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25904__auto__ = (function (){var statearr_41719 = f__25903__auto__.call(null);
(statearr_41719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto___41720);

return statearr_41719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto___41720,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__24441__auto__ = (((p == null))?null:p);
var m__24442__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__24442__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__24441__auto__ = (((p == null))?null:p);
var m__24442__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,p,v,ch);
} else {
var m__24442__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args41769 = [];
var len__24844__auto___41772 = arguments.length;
var i__24845__auto___41773 = (0);
while(true){
if((i__24845__auto___41773 < len__24844__auto___41772)){
args41769.push((arguments[i__24845__auto___41773]));

var G__41774 = (i__24845__auto___41773 + (1));
i__24845__auto___41773 = G__41774;
continue;
} else {
}
break;
}

var G__41771 = args41769.length;
switch (G__41771) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41769.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__24441__auto__ = (((p == null))?null:p);
var m__24442__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,p);
} else {
var m__24442__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__24441__auto__ = (((p == null))?null:p);
var m__24442__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__24441__auto__)]);
if(!((m__24442__auto__ == null))){
return m__24442__auto__.call(null,p,v);
} else {
var m__24442__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__24442__auto____$1 == null))){
return m__24442__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args41777 = [];
var len__24844__auto___41902 = arguments.length;
var i__24845__auto___41903 = (0);
while(true){
if((i__24845__auto___41903 < len__24844__auto___41902)){
args41777.push((arguments[i__24845__auto___41903]));

var G__41904 = (i__24845__auto___41903 + (1));
i__24845__auto___41903 = G__41904;
continue;
} else {
}
break;
}

var G__41779 = args41777.length;
switch (G__41779) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41777.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__23786__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__23786__auto__,mults){
return (function (p1__41776_SHARP_){
if(cljs.core.truth_(p1__41776_SHARP_.call(null,topic))){
return p1__41776_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__41776_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__23786__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async41780 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41780 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta41781){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta41781 = meta41781;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_41782,meta41781__$1){
var self__ = this;
var _41782__$1 = this;
return (new cljs.core.async.t_cljs$core$async41780(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta41781__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41780.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_41782){
var self__ = this;
var _41782__$1 = this;
return self__.meta41781;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41780.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async41780.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41780.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async41780.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41780.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41780.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41780.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41780.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta41781","meta41781",1928940057,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41780.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41780.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41780";

cljs.core.async.t_cljs$core$async41780.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__24384__auto__,writer__24385__auto__,opt__24386__auto__){
return cljs.core._write.call(null,writer__24385__auto__,"cljs.core.async/t_cljs$core$async41780");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async41780 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async41780(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41781){
return (new cljs.core.async.t_cljs$core$async41780(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41781));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async41780(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25902__auto___41906 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto___41906,mults,ensure_mult,p){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto___41906,mults,ensure_mult,p){
return (function (state_41854){
var state_val_41855 = (state_41854[(1)]);
if((state_val_41855 === (7))){
var inst_41850 = (state_41854[(2)]);
var state_41854__$1 = state_41854;
var statearr_41856_41907 = state_41854__$1;
(statearr_41856_41907[(2)] = inst_41850);

(statearr_41856_41907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41855 === (20))){
var state_41854__$1 = state_41854;
var statearr_41857_41908 = state_41854__$1;
(statearr_41857_41908[(2)] = null);

(statearr_41857_41908[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41855 === (1))){
var state_41854__$1 = state_41854;
var statearr_41858_41909 = state_41854__$1;
(statearr_41858_41909[(2)] = null);

(statearr_41858_41909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41855 === (24))){
var inst_41833 = (state_41854[(7)]);
var inst_41842 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_41833);
var state_41854__$1 = state_41854;
var statearr_41859_41910 = state_41854__$1;
(statearr_41859_41910[(2)] = inst_41842);

(statearr_41859_41910[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41855 === (4))){
var inst_41785 = (state_41854[(8)]);
var inst_41785__$1 = (state_41854[(2)]);
var inst_41786 = (inst_41785__$1 == null);
var state_41854__$1 = (function (){var statearr_41860 = state_41854;
(statearr_41860[(8)] = inst_41785__$1);

return statearr_41860;
})();
if(cljs.core.truth_(inst_41786)){
var statearr_41861_41911 = state_41854__$1;
(statearr_41861_41911[(1)] = (5));

} else {
var statearr_41862_41912 = state_41854__$1;
(statearr_41862_41912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41855 === (15))){
var inst_41827 = (state_41854[(2)]);
var state_41854__$1 = state_41854;
var statearr_41863_41913 = state_41854__$1;
(statearr_41863_41913[(2)] = inst_41827);

(statearr_41863_41913[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41855 === (21))){
var inst_41847 = (state_41854[(2)]);
var state_41854__$1 = (function (){var statearr_41864 = state_41854;
(statearr_41864[(9)] = inst_41847);

return statearr_41864;
})();
var statearr_41865_41914 = state_41854__$1;
(statearr_41865_41914[(2)] = null);

(statearr_41865_41914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41855 === (13))){
var inst_41809 = (state_41854[(10)]);
var inst_41811 = cljs.core.chunked_seq_QMARK_.call(null,inst_41809);
var state_41854__$1 = state_41854;
if(inst_41811){
var statearr_41866_41915 = state_41854__$1;
(statearr_41866_41915[(1)] = (16));

} else {
var statearr_41867_41916 = state_41854__$1;
(statearr_41867_41916[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41855 === (22))){
var inst_41839 = (state_41854[(2)]);
var state_41854__$1 = state_41854;
if(cljs.core.truth_(inst_41839)){
var statearr_41868_41917 = state_41854__$1;
(statearr_41868_41917[(1)] = (23));

} else {
var statearr_41869_41918 = state_41854__$1;
(statearr_41869_41918[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41855 === (6))){
var inst_41833 = (state_41854[(7)]);
var inst_41785 = (state_41854[(8)]);
var inst_41835 = (state_41854[(11)]);
var inst_41833__$1 = topic_fn.call(null,inst_41785);
var inst_41834 = cljs.core.deref.call(null,mults);
var inst_41835__$1 = cljs.core.get.call(null,inst_41834,inst_41833__$1);
var state_41854__$1 = (function (){var statearr_41870 = state_41854;
(statearr_41870[(7)] = inst_41833__$1);

(statearr_41870[(11)] = inst_41835__$1);

return statearr_41870;
})();
if(cljs.core.truth_(inst_41835__$1)){
var statearr_41871_41919 = state_41854__$1;
(statearr_41871_41919[(1)] = (19));

} else {
var statearr_41872_41920 = state_41854__$1;
(statearr_41872_41920[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41855 === (25))){
var inst_41844 = (state_41854[(2)]);
var state_41854__$1 = state_41854;
var statearr_41873_41921 = state_41854__$1;
(statearr_41873_41921[(2)] = inst_41844);

(statearr_41873_41921[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41855 === (17))){
var inst_41809 = (state_41854[(10)]);
var inst_41818 = cljs.core.first.call(null,inst_41809);
var inst_41819 = cljs.core.async.muxch_STAR_.call(null,inst_41818);
var inst_41820 = cljs.core.async.close_BANG_.call(null,inst_41819);
var inst_41821 = cljs.core.next.call(null,inst_41809);
var inst_41795 = inst_41821;
var inst_41796 = null;
var inst_41797 = (0);
var inst_41798 = (0);
var state_41854__$1 = (function (){var statearr_41874 = state_41854;
(statearr_41874[(12)] = inst_41820);

(statearr_41874[(13)] = inst_41797);

(statearr_41874[(14)] = inst_41798);

(statearr_41874[(15)] = inst_41795);

(statearr_41874[(16)] = inst_41796);

return statearr_41874;
})();
var statearr_41875_41922 = state_41854__$1;
(statearr_41875_41922[(2)] = null);

(statearr_41875_41922[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41855 === (3))){
var inst_41852 = (state_41854[(2)]);
var state_41854__$1 = state_41854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41854__$1,inst_41852);
} else {
if((state_val_41855 === (12))){
var inst_41829 = (state_41854[(2)]);
var state_41854__$1 = state_41854;
var statearr_41876_41923 = state_41854__$1;
(statearr_41876_41923[(2)] = inst_41829);

(statearr_41876_41923[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41855 === (2))){
var state_41854__$1 = state_41854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41854__$1,(4),ch);
} else {
if((state_val_41855 === (23))){
var state_41854__$1 = state_41854;
var statearr_41877_41924 = state_41854__$1;
(statearr_41877_41924[(2)] = null);

(statearr_41877_41924[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41855 === (19))){
var inst_41785 = (state_41854[(8)]);
var inst_41835 = (state_41854[(11)]);
var inst_41837 = cljs.core.async.muxch_STAR_.call(null,inst_41835);
var state_41854__$1 = state_41854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41854__$1,(22),inst_41837,inst_41785);
} else {
if((state_val_41855 === (11))){
var inst_41809 = (state_41854[(10)]);
var inst_41795 = (state_41854[(15)]);
var inst_41809__$1 = cljs.core.seq.call(null,inst_41795);
var state_41854__$1 = (function (){var statearr_41878 = state_41854;
(statearr_41878[(10)] = inst_41809__$1);

return statearr_41878;
})();
if(inst_41809__$1){
var statearr_41879_41925 = state_41854__$1;
(statearr_41879_41925[(1)] = (13));

} else {
var statearr_41880_41926 = state_41854__$1;
(statearr_41880_41926[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41855 === (9))){
var inst_41831 = (state_41854[(2)]);
var state_41854__$1 = state_41854;
var statearr_41881_41927 = state_41854__$1;
(statearr_41881_41927[(2)] = inst_41831);

(statearr_41881_41927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41855 === (5))){
var inst_41792 = cljs.core.deref.call(null,mults);
var inst_41793 = cljs.core.vals.call(null,inst_41792);
var inst_41794 = cljs.core.seq.call(null,inst_41793);
var inst_41795 = inst_41794;
var inst_41796 = null;
var inst_41797 = (0);
var inst_41798 = (0);
var state_41854__$1 = (function (){var statearr_41882 = state_41854;
(statearr_41882[(13)] = inst_41797);

(statearr_41882[(14)] = inst_41798);

(statearr_41882[(15)] = inst_41795);

(statearr_41882[(16)] = inst_41796);

return statearr_41882;
})();
var statearr_41883_41928 = state_41854__$1;
(statearr_41883_41928[(2)] = null);

(statearr_41883_41928[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41855 === (14))){
var state_41854__$1 = state_41854;
var statearr_41887_41929 = state_41854__$1;
(statearr_41887_41929[(2)] = null);

(statearr_41887_41929[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41855 === (16))){
var inst_41809 = (state_41854[(10)]);
var inst_41813 = cljs.core.chunk_first.call(null,inst_41809);
var inst_41814 = cljs.core.chunk_rest.call(null,inst_41809);
var inst_41815 = cljs.core.count.call(null,inst_41813);
var inst_41795 = inst_41814;
var inst_41796 = inst_41813;
var inst_41797 = inst_41815;
var inst_41798 = (0);
var state_41854__$1 = (function (){var statearr_41888 = state_41854;
(statearr_41888[(13)] = inst_41797);

(statearr_41888[(14)] = inst_41798);

(statearr_41888[(15)] = inst_41795);

(statearr_41888[(16)] = inst_41796);

return statearr_41888;
})();
var statearr_41889_41930 = state_41854__$1;
(statearr_41889_41930[(2)] = null);

(statearr_41889_41930[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41855 === (10))){
var inst_41797 = (state_41854[(13)]);
var inst_41798 = (state_41854[(14)]);
var inst_41795 = (state_41854[(15)]);
var inst_41796 = (state_41854[(16)]);
var inst_41803 = cljs.core._nth.call(null,inst_41796,inst_41798);
var inst_41804 = cljs.core.async.muxch_STAR_.call(null,inst_41803);
var inst_41805 = cljs.core.async.close_BANG_.call(null,inst_41804);
var inst_41806 = (inst_41798 + (1));
var tmp41884 = inst_41797;
var tmp41885 = inst_41795;
var tmp41886 = inst_41796;
var inst_41795__$1 = tmp41885;
var inst_41796__$1 = tmp41886;
var inst_41797__$1 = tmp41884;
var inst_41798__$1 = inst_41806;
var state_41854__$1 = (function (){var statearr_41890 = state_41854;
(statearr_41890[(17)] = inst_41805);

(statearr_41890[(13)] = inst_41797__$1);

(statearr_41890[(14)] = inst_41798__$1);

(statearr_41890[(15)] = inst_41795__$1);

(statearr_41890[(16)] = inst_41796__$1);

return statearr_41890;
})();
var statearr_41891_41931 = state_41854__$1;
(statearr_41891_41931[(2)] = null);

(statearr_41891_41931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41855 === (18))){
var inst_41824 = (state_41854[(2)]);
var state_41854__$1 = state_41854;
var statearr_41892_41932 = state_41854__$1;
(statearr_41892_41932[(2)] = inst_41824);

(statearr_41892_41932[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41855 === (8))){
var inst_41797 = (state_41854[(13)]);
var inst_41798 = (state_41854[(14)]);
var inst_41800 = (inst_41798 < inst_41797);
var inst_41801 = inst_41800;
var state_41854__$1 = state_41854;
if(cljs.core.truth_(inst_41801)){
var statearr_41893_41933 = state_41854__$1;
(statearr_41893_41933[(1)] = (10));

} else {
var statearr_41894_41934 = state_41854__$1;
(statearr_41894_41934[(1)] = (11));

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
});})(c__25902__auto___41906,mults,ensure_mult,p))
;
return ((function (switch__25881__auto__,c__25902__auto___41906,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25882__auto__ = null;
var cljs$core$async$state_machine__25882__auto____0 = (function (){
var statearr_41898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41898[(0)] = cljs$core$async$state_machine__25882__auto__);

(statearr_41898[(1)] = (1));

return statearr_41898;
});
var cljs$core$async$state_machine__25882__auto____1 = (function (state_41854){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_41854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e41899){if((e41899 instanceof Object)){
var ex__25885__auto__ = e41899;
var statearr_41900_41935 = state_41854;
(statearr_41900_41935[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41936 = state_41854;
state_41854 = G__41936;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
cljs$core$async$state_machine__25882__auto__ = function(state_41854){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25882__auto____1.call(this,state_41854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25882__auto____0;
cljs$core$async$state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25882__auto____1;
return cljs$core$async$state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto___41906,mults,ensure_mult,p))
})();
var state__25904__auto__ = (function (){var statearr_41901 = f__25903__auto__.call(null);
(statearr_41901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto___41906);

return statearr_41901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto___41906,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args41937 = [];
var len__24844__auto___41940 = arguments.length;
var i__24845__auto___41941 = (0);
while(true){
if((i__24845__auto___41941 < len__24844__auto___41940)){
args41937.push((arguments[i__24845__auto___41941]));

var G__41942 = (i__24845__auto___41941 + (1));
i__24845__auto___41941 = G__41942;
continue;
} else {
}
break;
}

var G__41939 = args41937.length;
switch (G__41939) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41937.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args41944 = [];
var len__24844__auto___41947 = arguments.length;
var i__24845__auto___41948 = (0);
while(true){
if((i__24845__auto___41948 < len__24844__auto___41947)){
args41944.push((arguments[i__24845__auto___41948]));

var G__41949 = (i__24845__auto___41948 + (1));
i__24845__auto___41948 = G__41949;
continue;
} else {
}
break;
}

var G__41946 = args41944.length;
switch (G__41946) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41944.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args41951 = [];
var len__24844__auto___42022 = arguments.length;
var i__24845__auto___42023 = (0);
while(true){
if((i__24845__auto___42023 < len__24844__auto___42022)){
args41951.push((arguments[i__24845__auto___42023]));

var G__42024 = (i__24845__auto___42023 + (1));
i__24845__auto___42023 = G__42024;
continue;
} else {
}
break;
}

var G__41953 = args41951.length;
switch (G__41953) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41951.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__25902__auto___42026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto___42026,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto___42026,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_41992){
var state_val_41993 = (state_41992[(1)]);
if((state_val_41993 === (7))){
var state_41992__$1 = state_41992;
var statearr_41994_42027 = state_41992__$1;
(statearr_41994_42027[(2)] = null);

(statearr_41994_42027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41993 === (1))){
var state_41992__$1 = state_41992;
var statearr_41995_42028 = state_41992__$1;
(statearr_41995_42028[(2)] = null);

(statearr_41995_42028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41993 === (4))){
var inst_41956 = (state_41992[(7)]);
var inst_41958 = (inst_41956 < cnt);
var state_41992__$1 = state_41992;
if(cljs.core.truth_(inst_41958)){
var statearr_41996_42029 = state_41992__$1;
(statearr_41996_42029[(1)] = (6));

} else {
var statearr_41997_42030 = state_41992__$1;
(statearr_41997_42030[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41993 === (15))){
var inst_41988 = (state_41992[(2)]);
var state_41992__$1 = state_41992;
var statearr_41998_42031 = state_41992__$1;
(statearr_41998_42031[(2)] = inst_41988);

(statearr_41998_42031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41993 === (13))){
var inst_41981 = cljs.core.async.close_BANG_.call(null,out);
var state_41992__$1 = state_41992;
var statearr_41999_42032 = state_41992__$1;
(statearr_41999_42032[(2)] = inst_41981);

(statearr_41999_42032[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41993 === (6))){
var state_41992__$1 = state_41992;
var statearr_42000_42033 = state_41992__$1;
(statearr_42000_42033[(2)] = null);

(statearr_42000_42033[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41993 === (3))){
var inst_41990 = (state_41992[(2)]);
var state_41992__$1 = state_41992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41992__$1,inst_41990);
} else {
if((state_val_41993 === (12))){
var inst_41978 = (state_41992[(8)]);
var inst_41978__$1 = (state_41992[(2)]);
var inst_41979 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_41978__$1);
var state_41992__$1 = (function (){var statearr_42001 = state_41992;
(statearr_42001[(8)] = inst_41978__$1);

return statearr_42001;
})();
if(cljs.core.truth_(inst_41979)){
var statearr_42002_42034 = state_41992__$1;
(statearr_42002_42034[(1)] = (13));

} else {
var statearr_42003_42035 = state_41992__$1;
(statearr_42003_42035[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41993 === (2))){
var inst_41955 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_41956 = (0);
var state_41992__$1 = (function (){var statearr_42004 = state_41992;
(statearr_42004[(7)] = inst_41956);

(statearr_42004[(9)] = inst_41955);

return statearr_42004;
})();
var statearr_42005_42036 = state_41992__$1;
(statearr_42005_42036[(2)] = null);

(statearr_42005_42036[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41993 === (11))){
var inst_41956 = (state_41992[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41992,(10),Object,null,(9));
var inst_41965 = chs__$1.call(null,inst_41956);
var inst_41966 = done.call(null,inst_41956);
var inst_41967 = cljs.core.async.take_BANG_.call(null,inst_41965,inst_41966);
var state_41992__$1 = state_41992;
var statearr_42006_42037 = state_41992__$1;
(statearr_42006_42037[(2)] = inst_41967);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41992__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41993 === (9))){
var inst_41956 = (state_41992[(7)]);
var inst_41969 = (state_41992[(2)]);
var inst_41970 = (inst_41956 + (1));
var inst_41956__$1 = inst_41970;
var state_41992__$1 = (function (){var statearr_42007 = state_41992;
(statearr_42007[(10)] = inst_41969);

(statearr_42007[(7)] = inst_41956__$1);

return statearr_42007;
})();
var statearr_42008_42038 = state_41992__$1;
(statearr_42008_42038[(2)] = null);

(statearr_42008_42038[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41993 === (5))){
var inst_41976 = (state_41992[(2)]);
var state_41992__$1 = (function (){var statearr_42009 = state_41992;
(statearr_42009[(11)] = inst_41976);

return statearr_42009;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41992__$1,(12),dchan);
} else {
if((state_val_41993 === (14))){
var inst_41978 = (state_41992[(8)]);
var inst_41983 = cljs.core.apply.call(null,f,inst_41978);
var state_41992__$1 = state_41992;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41992__$1,(16),out,inst_41983);
} else {
if((state_val_41993 === (16))){
var inst_41985 = (state_41992[(2)]);
var state_41992__$1 = (function (){var statearr_42010 = state_41992;
(statearr_42010[(12)] = inst_41985);

return statearr_42010;
})();
var statearr_42011_42039 = state_41992__$1;
(statearr_42011_42039[(2)] = null);

(statearr_42011_42039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41993 === (10))){
var inst_41960 = (state_41992[(2)]);
var inst_41961 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_41992__$1 = (function (){var statearr_42012 = state_41992;
(statearr_42012[(13)] = inst_41960);

return statearr_42012;
})();
var statearr_42013_42040 = state_41992__$1;
(statearr_42013_42040[(2)] = inst_41961);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41992__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41993 === (8))){
var inst_41974 = (state_41992[(2)]);
var state_41992__$1 = state_41992;
var statearr_42014_42041 = state_41992__$1;
(statearr_42014_42041[(2)] = inst_41974);

(statearr_42014_42041[(1)] = (5));


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
});})(c__25902__auto___42026,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25881__auto__,c__25902__auto___42026,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25882__auto__ = null;
var cljs$core$async$state_machine__25882__auto____0 = (function (){
var statearr_42018 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42018[(0)] = cljs$core$async$state_machine__25882__auto__);

(statearr_42018[(1)] = (1));

return statearr_42018;
});
var cljs$core$async$state_machine__25882__auto____1 = (function (state_41992){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_41992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e42019){if((e42019 instanceof Object)){
var ex__25885__auto__ = e42019;
var statearr_42020_42042 = state_41992;
(statearr_42020_42042[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42043 = state_41992;
state_41992 = G__42043;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
cljs$core$async$state_machine__25882__auto__ = function(state_41992){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25882__auto____1.call(this,state_41992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25882__auto____0;
cljs$core$async$state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25882__auto____1;
return cljs$core$async$state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto___42026,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25904__auto__ = (function (){var statearr_42021 = f__25903__auto__.call(null);
(statearr_42021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto___42026);

return statearr_42021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto___42026,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args42045 = [];
var len__24844__auto___42101 = arguments.length;
var i__24845__auto___42102 = (0);
while(true){
if((i__24845__auto___42102 < len__24844__auto___42101)){
args42045.push((arguments[i__24845__auto___42102]));

var G__42103 = (i__24845__auto___42102 + (1));
i__24845__auto___42102 = G__42103;
continue;
} else {
}
break;
}

var G__42047 = args42045.length;
switch (G__42047) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42045.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25902__auto___42105 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto___42105,out){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto___42105,out){
return (function (state_42077){
var state_val_42078 = (state_42077[(1)]);
if((state_val_42078 === (7))){
var inst_42057 = (state_42077[(7)]);
var inst_42056 = (state_42077[(8)]);
var inst_42056__$1 = (state_42077[(2)]);
var inst_42057__$1 = cljs.core.nth.call(null,inst_42056__$1,(0),null);
var inst_42058 = cljs.core.nth.call(null,inst_42056__$1,(1),null);
var inst_42059 = (inst_42057__$1 == null);
var state_42077__$1 = (function (){var statearr_42079 = state_42077;
(statearr_42079[(7)] = inst_42057__$1);

(statearr_42079[(8)] = inst_42056__$1);

(statearr_42079[(9)] = inst_42058);

return statearr_42079;
})();
if(cljs.core.truth_(inst_42059)){
var statearr_42080_42106 = state_42077__$1;
(statearr_42080_42106[(1)] = (8));

} else {
var statearr_42081_42107 = state_42077__$1;
(statearr_42081_42107[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42078 === (1))){
var inst_42048 = cljs.core.vec.call(null,chs);
var inst_42049 = inst_42048;
var state_42077__$1 = (function (){var statearr_42082 = state_42077;
(statearr_42082[(10)] = inst_42049);

return statearr_42082;
})();
var statearr_42083_42108 = state_42077__$1;
(statearr_42083_42108[(2)] = null);

(statearr_42083_42108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42078 === (4))){
var inst_42049 = (state_42077[(10)]);
var state_42077__$1 = state_42077;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42077__$1,(7),inst_42049);
} else {
if((state_val_42078 === (6))){
var inst_42073 = (state_42077[(2)]);
var state_42077__$1 = state_42077;
var statearr_42084_42109 = state_42077__$1;
(statearr_42084_42109[(2)] = inst_42073);

(statearr_42084_42109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42078 === (3))){
var inst_42075 = (state_42077[(2)]);
var state_42077__$1 = state_42077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42077__$1,inst_42075);
} else {
if((state_val_42078 === (2))){
var inst_42049 = (state_42077[(10)]);
var inst_42051 = cljs.core.count.call(null,inst_42049);
var inst_42052 = (inst_42051 > (0));
var state_42077__$1 = state_42077;
if(cljs.core.truth_(inst_42052)){
var statearr_42086_42110 = state_42077__$1;
(statearr_42086_42110[(1)] = (4));

} else {
var statearr_42087_42111 = state_42077__$1;
(statearr_42087_42111[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42078 === (11))){
var inst_42049 = (state_42077[(10)]);
var inst_42066 = (state_42077[(2)]);
var tmp42085 = inst_42049;
var inst_42049__$1 = tmp42085;
var state_42077__$1 = (function (){var statearr_42088 = state_42077;
(statearr_42088[(10)] = inst_42049__$1);

(statearr_42088[(11)] = inst_42066);

return statearr_42088;
})();
var statearr_42089_42112 = state_42077__$1;
(statearr_42089_42112[(2)] = null);

(statearr_42089_42112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42078 === (9))){
var inst_42057 = (state_42077[(7)]);
var state_42077__$1 = state_42077;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42077__$1,(11),out,inst_42057);
} else {
if((state_val_42078 === (5))){
var inst_42071 = cljs.core.async.close_BANG_.call(null,out);
var state_42077__$1 = state_42077;
var statearr_42090_42113 = state_42077__$1;
(statearr_42090_42113[(2)] = inst_42071);

(statearr_42090_42113[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42078 === (10))){
var inst_42069 = (state_42077[(2)]);
var state_42077__$1 = state_42077;
var statearr_42091_42114 = state_42077__$1;
(statearr_42091_42114[(2)] = inst_42069);

(statearr_42091_42114[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42078 === (8))){
var inst_42049 = (state_42077[(10)]);
var inst_42057 = (state_42077[(7)]);
var inst_42056 = (state_42077[(8)]);
var inst_42058 = (state_42077[(9)]);
var inst_42061 = (function (){var cs = inst_42049;
var vec__42054 = inst_42056;
var v = inst_42057;
var c = inst_42058;
return ((function (cs,vec__42054,v,c,inst_42049,inst_42057,inst_42056,inst_42058,state_val_42078,c__25902__auto___42105,out){
return (function (p1__42044_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__42044_SHARP_);
});
;})(cs,vec__42054,v,c,inst_42049,inst_42057,inst_42056,inst_42058,state_val_42078,c__25902__auto___42105,out))
})();
var inst_42062 = cljs.core.filterv.call(null,inst_42061,inst_42049);
var inst_42049__$1 = inst_42062;
var state_42077__$1 = (function (){var statearr_42092 = state_42077;
(statearr_42092[(10)] = inst_42049__$1);

return statearr_42092;
})();
var statearr_42093_42115 = state_42077__$1;
(statearr_42093_42115[(2)] = null);

(statearr_42093_42115[(1)] = (2));


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
});})(c__25902__auto___42105,out))
;
return ((function (switch__25881__auto__,c__25902__auto___42105,out){
return (function() {
var cljs$core$async$state_machine__25882__auto__ = null;
var cljs$core$async$state_machine__25882__auto____0 = (function (){
var statearr_42097 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42097[(0)] = cljs$core$async$state_machine__25882__auto__);

(statearr_42097[(1)] = (1));

return statearr_42097;
});
var cljs$core$async$state_machine__25882__auto____1 = (function (state_42077){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_42077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e42098){if((e42098 instanceof Object)){
var ex__25885__auto__ = e42098;
var statearr_42099_42116 = state_42077;
(statearr_42099_42116[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42117 = state_42077;
state_42077 = G__42117;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
cljs$core$async$state_machine__25882__auto__ = function(state_42077){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25882__auto____1.call(this,state_42077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25882__auto____0;
cljs$core$async$state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25882__auto____1;
return cljs$core$async$state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto___42105,out))
})();
var state__25904__auto__ = (function (){var statearr_42100 = f__25903__auto__.call(null);
(statearr_42100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto___42105);

return statearr_42100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto___42105,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args42118 = [];
var len__24844__auto___42167 = arguments.length;
var i__24845__auto___42168 = (0);
while(true){
if((i__24845__auto___42168 < len__24844__auto___42167)){
args42118.push((arguments[i__24845__auto___42168]));

var G__42169 = (i__24845__auto___42168 + (1));
i__24845__auto___42168 = G__42169;
continue;
} else {
}
break;
}

var G__42120 = args42118.length;
switch (G__42120) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42118.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25902__auto___42171 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto___42171,out){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto___42171,out){
return (function (state_42144){
var state_val_42145 = (state_42144[(1)]);
if((state_val_42145 === (7))){
var inst_42126 = (state_42144[(7)]);
var inst_42126__$1 = (state_42144[(2)]);
var inst_42127 = (inst_42126__$1 == null);
var inst_42128 = cljs.core.not.call(null,inst_42127);
var state_42144__$1 = (function (){var statearr_42146 = state_42144;
(statearr_42146[(7)] = inst_42126__$1);

return statearr_42146;
})();
if(inst_42128){
var statearr_42147_42172 = state_42144__$1;
(statearr_42147_42172[(1)] = (8));

} else {
var statearr_42148_42173 = state_42144__$1;
(statearr_42148_42173[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42145 === (1))){
var inst_42121 = (0);
var state_42144__$1 = (function (){var statearr_42149 = state_42144;
(statearr_42149[(8)] = inst_42121);

return statearr_42149;
})();
var statearr_42150_42174 = state_42144__$1;
(statearr_42150_42174[(2)] = null);

(statearr_42150_42174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42145 === (4))){
var state_42144__$1 = state_42144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42144__$1,(7),ch);
} else {
if((state_val_42145 === (6))){
var inst_42139 = (state_42144[(2)]);
var state_42144__$1 = state_42144;
var statearr_42151_42175 = state_42144__$1;
(statearr_42151_42175[(2)] = inst_42139);

(statearr_42151_42175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42145 === (3))){
var inst_42141 = (state_42144[(2)]);
var inst_42142 = cljs.core.async.close_BANG_.call(null,out);
var state_42144__$1 = (function (){var statearr_42152 = state_42144;
(statearr_42152[(9)] = inst_42141);

return statearr_42152;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42144__$1,inst_42142);
} else {
if((state_val_42145 === (2))){
var inst_42121 = (state_42144[(8)]);
var inst_42123 = (inst_42121 < n);
var state_42144__$1 = state_42144;
if(cljs.core.truth_(inst_42123)){
var statearr_42153_42176 = state_42144__$1;
(statearr_42153_42176[(1)] = (4));

} else {
var statearr_42154_42177 = state_42144__$1;
(statearr_42154_42177[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42145 === (11))){
var inst_42121 = (state_42144[(8)]);
var inst_42131 = (state_42144[(2)]);
var inst_42132 = (inst_42121 + (1));
var inst_42121__$1 = inst_42132;
var state_42144__$1 = (function (){var statearr_42155 = state_42144;
(statearr_42155[(10)] = inst_42131);

(statearr_42155[(8)] = inst_42121__$1);

return statearr_42155;
})();
var statearr_42156_42178 = state_42144__$1;
(statearr_42156_42178[(2)] = null);

(statearr_42156_42178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42145 === (9))){
var state_42144__$1 = state_42144;
var statearr_42157_42179 = state_42144__$1;
(statearr_42157_42179[(2)] = null);

(statearr_42157_42179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42145 === (5))){
var state_42144__$1 = state_42144;
var statearr_42158_42180 = state_42144__$1;
(statearr_42158_42180[(2)] = null);

(statearr_42158_42180[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42145 === (10))){
var inst_42136 = (state_42144[(2)]);
var state_42144__$1 = state_42144;
var statearr_42159_42181 = state_42144__$1;
(statearr_42159_42181[(2)] = inst_42136);

(statearr_42159_42181[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42145 === (8))){
var inst_42126 = (state_42144[(7)]);
var state_42144__$1 = state_42144;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42144__$1,(11),out,inst_42126);
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
});})(c__25902__auto___42171,out))
;
return ((function (switch__25881__auto__,c__25902__auto___42171,out){
return (function() {
var cljs$core$async$state_machine__25882__auto__ = null;
var cljs$core$async$state_machine__25882__auto____0 = (function (){
var statearr_42163 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42163[(0)] = cljs$core$async$state_machine__25882__auto__);

(statearr_42163[(1)] = (1));

return statearr_42163;
});
var cljs$core$async$state_machine__25882__auto____1 = (function (state_42144){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_42144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e42164){if((e42164 instanceof Object)){
var ex__25885__auto__ = e42164;
var statearr_42165_42182 = state_42144;
(statearr_42165_42182[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42183 = state_42144;
state_42144 = G__42183;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
cljs$core$async$state_machine__25882__auto__ = function(state_42144){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25882__auto____1.call(this,state_42144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25882__auto____0;
cljs$core$async$state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25882__auto____1;
return cljs$core$async$state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto___42171,out))
})();
var state__25904__auto__ = (function (){var statearr_42166 = f__25903__auto__.call(null);
(statearr_42166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto___42171);

return statearr_42166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto___42171,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42191 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42191 = (function (map_LT_,f,ch,meta42192){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta42192 = meta42192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42193,meta42192__$1){
var self__ = this;
var _42193__$1 = this;
return (new cljs.core.async.t_cljs$core$async42191(self__.map_LT_,self__.f,self__.ch,meta42192__$1));
});

cljs.core.async.t_cljs$core$async42191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42193){
var self__ = this;
var _42193__$1 = this;
return self__.meta42192;
});

cljs.core.async.t_cljs$core$async42191.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async42191.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42191.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42191.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async42191.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async42194 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42194 = (function (map_LT_,f,ch,meta42192,_,fn1,meta42195){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta42192 = meta42192;
this._ = _;
this.fn1 = fn1;
this.meta42195 = meta42195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_42196,meta42195__$1){
var self__ = this;
var _42196__$1 = this;
return (new cljs.core.async.t_cljs$core$async42194(self__.map_LT_,self__.f,self__.ch,self__.meta42192,self__._,self__.fn1,meta42195__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async42194.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_42196){
var self__ = this;
var _42196__$1 = this;
return self__.meta42195;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42194.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async42194.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42194.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42194.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__42184_SHARP_){
return f1.call(null,(((p1__42184_SHARP_ == null))?null:self__.f.call(null,p1__42184_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async42194.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42192","meta42192",1135094674,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async42191","cljs.core.async/t_cljs$core$async42191",-252985815,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta42195","meta42195",-1752287382,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42194.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42194.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42194";

cljs.core.async.t_cljs$core$async42194.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__24384__auto__,writer__24385__auto__,opt__24386__auto__){
return cljs.core._write.call(null,writer__24385__auto__,"cljs.core.async/t_cljs$core$async42194");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async42194 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42194(map_LT___$1,f__$1,ch__$1,meta42192__$1,___$2,fn1__$1,meta42195){
return (new cljs.core.async.t_cljs$core$async42194(map_LT___$1,f__$1,ch__$1,meta42192__$1,___$2,fn1__$1,meta42195));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async42194(self__.map_LT_,self__.f,self__.ch,self__.meta42192,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__23774__auto__ = ret;
if(cljs.core.truth_(and__23774__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__23774__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async42191.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async42191.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async42191.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42192","meta42192",1135094674,null)], null);
});

cljs.core.async.t_cljs$core$async42191.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42191";

cljs.core.async.t_cljs$core$async42191.cljs$lang$ctorPrWriter = (function (this__24384__auto__,writer__24385__auto__,opt__24386__auto__){
return cljs.core._write.call(null,writer__24385__auto__,"cljs.core.async/t_cljs$core$async42191");
});

cljs.core.async.__GT_t_cljs$core$async42191 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42191(map_LT___$1,f__$1,ch__$1,meta42192){
return (new cljs.core.async.t_cljs$core$async42191(map_LT___$1,f__$1,ch__$1,meta42192));
});

}

return (new cljs.core.async.t_cljs$core$async42191(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42200 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42200 = (function (map_GT_,f,ch,meta42201){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta42201 = meta42201;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42202,meta42201__$1){
var self__ = this;
var _42202__$1 = this;
return (new cljs.core.async.t_cljs$core$async42200(self__.map_GT_,self__.f,self__.ch,meta42201__$1));
});

cljs.core.async.t_cljs$core$async42200.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42202){
var self__ = this;
var _42202__$1 = this;
return self__.meta42201;
});

cljs.core.async.t_cljs$core$async42200.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async42200.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42200.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async42200.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42200.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async42200.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async42200.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42201","meta42201",625547114,null)], null);
});

cljs.core.async.t_cljs$core$async42200.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42200.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42200";

cljs.core.async.t_cljs$core$async42200.cljs$lang$ctorPrWriter = (function (this__24384__auto__,writer__24385__auto__,opt__24386__auto__){
return cljs.core._write.call(null,writer__24385__auto__,"cljs.core.async/t_cljs$core$async42200");
});

cljs.core.async.__GT_t_cljs$core$async42200 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async42200(map_GT___$1,f__$1,ch__$1,meta42201){
return (new cljs.core.async.t_cljs$core$async42200(map_GT___$1,f__$1,ch__$1,meta42201));
});

}

return (new cljs.core.async.t_cljs$core$async42200(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async42206 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42206 = (function (filter_GT_,p,ch,meta42207){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta42207 = meta42207;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42208,meta42207__$1){
var self__ = this;
var _42208__$1 = this;
return (new cljs.core.async.t_cljs$core$async42206(self__.filter_GT_,self__.p,self__.ch,meta42207__$1));
});

cljs.core.async.t_cljs$core$async42206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42208){
var self__ = this;
var _42208__$1 = this;
return self__.meta42207;
});

cljs.core.async.t_cljs$core$async42206.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async42206.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42206.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42206.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async42206.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42206.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async42206.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async42206.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42207","meta42207",1286266870,null)], null);
});

cljs.core.async.t_cljs$core$async42206.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42206.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42206";

cljs.core.async.t_cljs$core$async42206.cljs$lang$ctorPrWriter = (function (this__24384__auto__,writer__24385__auto__,opt__24386__auto__){
return cljs.core._write.call(null,writer__24385__auto__,"cljs.core.async/t_cljs$core$async42206");
});

cljs.core.async.__GT_t_cljs$core$async42206 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async42206(filter_GT___$1,p__$1,ch__$1,meta42207){
return (new cljs.core.async.t_cljs$core$async42206(filter_GT___$1,p__$1,ch__$1,meta42207));
});

}

return (new cljs.core.async.t_cljs$core$async42206(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args42209 = [];
var len__24844__auto___42253 = arguments.length;
var i__24845__auto___42254 = (0);
while(true){
if((i__24845__auto___42254 < len__24844__auto___42253)){
args42209.push((arguments[i__24845__auto___42254]));

var G__42255 = (i__24845__auto___42254 + (1));
i__24845__auto___42254 = G__42255;
continue;
} else {
}
break;
}

var G__42211 = args42209.length;
switch (G__42211) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42209.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25902__auto___42257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto___42257,out){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto___42257,out){
return (function (state_42232){
var state_val_42233 = (state_42232[(1)]);
if((state_val_42233 === (7))){
var inst_42228 = (state_42232[(2)]);
var state_42232__$1 = state_42232;
var statearr_42234_42258 = state_42232__$1;
(statearr_42234_42258[(2)] = inst_42228);

(statearr_42234_42258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42233 === (1))){
var state_42232__$1 = state_42232;
var statearr_42235_42259 = state_42232__$1;
(statearr_42235_42259[(2)] = null);

(statearr_42235_42259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42233 === (4))){
var inst_42214 = (state_42232[(7)]);
var inst_42214__$1 = (state_42232[(2)]);
var inst_42215 = (inst_42214__$1 == null);
var state_42232__$1 = (function (){var statearr_42236 = state_42232;
(statearr_42236[(7)] = inst_42214__$1);

return statearr_42236;
})();
if(cljs.core.truth_(inst_42215)){
var statearr_42237_42260 = state_42232__$1;
(statearr_42237_42260[(1)] = (5));

} else {
var statearr_42238_42261 = state_42232__$1;
(statearr_42238_42261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42233 === (6))){
var inst_42214 = (state_42232[(7)]);
var inst_42219 = p.call(null,inst_42214);
var state_42232__$1 = state_42232;
if(cljs.core.truth_(inst_42219)){
var statearr_42239_42262 = state_42232__$1;
(statearr_42239_42262[(1)] = (8));

} else {
var statearr_42240_42263 = state_42232__$1;
(statearr_42240_42263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42233 === (3))){
var inst_42230 = (state_42232[(2)]);
var state_42232__$1 = state_42232;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42232__$1,inst_42230);
} else {
if((state_val_42233 === (2))){
var state_42232__$1 = state_42232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42232__$1,(4),ch);
} else {
if((state_val_42233 === (11))){
var inst_42222 = (state_42232[(2)]);
var state_42232__$1 = state_42232;
var statearr_42241_42264 = state_42232__$1;
(statearr_42241_42264[(2)] = inst_42222);

(statearr_42241_42264[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42233 === (9))){
var state_42232__$1 = state_42232;
var statearr_42242_42265 = state_42232__$1;
(statearr_42242_42265[(2)] = null);

(statearr_42242_42265[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42233 === (5))){
var inst_42217 = cljs.core.async.close_BANG_.call(null,out);
var state_42232__$1 = state_42232;
var statearr_42243_42266 = state_42232__$1;
(statearr_42243_42266[(2)] = inst_42217);

(statearr_42243_42266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42233 === (10))){
var inst_42225 = (state_42232[(2)]);
var state_42232__$1 = (function (){var statearr_42244 = state_42232;
(statearr_42244[(8)] = inst_42225);

return statearr_42244;
})();
var statearr_42245_42267 = state_42232__$1;
(statearr_42245_42267[(2)] = null);

(statearr_42245_42267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42233 === (8))){
var inst_42214 = (state_42232[(7)]);
var state_42232__$1 = state_42232;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42232__$1,(11),out,inst_42214);
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
});})(c__25902__auto___42257,out))
;
return ((function (switch__25881__auto__,c__25902__auto___42257,out){
return (function() {
var cljs$core$async$state_machine__25882__auto__ = null;
var cljs$core$async$state_machine__25882__auto____0 = (function (){
var statearr_42249 = [null,null,null,null,null,null,null,null,null];
(statearr_42249[(0)] = cljs$core$async$state_machine__25882__auto__);

(statearr_42249[(1)] = (1));

return statearr_42249;
});
var cljs$core$async$state_machine__25882__auto____1 = (function (state_42232){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_42232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e42250){if((e42250 instanceof Object)){
var ex__25885__auto__ = e42250;
var statearr_42251_42268 = state_42232;
(statearr_42251_42268[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42269 = state_42232;
state_42232 = G__42269;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
cljs$core$async$state_machine__25882__auto__ = function(state_42232){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25882__auto____1.call(this,state_42232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25882__auto____0;
cljs$core$async$state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25882__auto____1;
return cljs$core$async$state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto___42257,out))
})();
var state__25904__auto__ = (function (){var statearr_42252 = f__25903__auto__.call(null);
(statearr_42252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto___42257);

return statearr_42252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto___42257,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args42270 = [];
var len__24844__auto___42273 = arguments.length;
var i__24845__auto___42274 = (0);
while(true){
if((i__24845__auto___42274 < len__24844__auto___42273)){
args42270.push((arguments[i__24845__auto___42274]));

var G__42275 = (i__24845__auto___42274 + (1));
i__24845__auto___42274 = G__42275;
continue;
} else {
}
break;
}

var G__42272 = args42270.length;
switch (G__42272) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42270.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__25902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto__){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto__){
return (function (state_42442){
var state_val_42443 = (state_42442[(1)]);
if((state_val_42443 === (7))){
var inst_42438 = (state_42442[(2)]);
var state_42442__$1 = state_42442;
var statearr_42444_42485 = state_42442__$1;
(statearr_42444_42485[(2)] = inst_42438);

(statearr_42444_42485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42443 === (20))){
var inst_42408 = (state_42442[(7)]);
var inst_42419 = (state_42442[(2)]);
var inst_42420 = cljs.core.next.call(null,inst_42408);
var inst_42394 = inst_42420;
var inst_42395 = null;
var inst_42396 = (0);
var inst_42397 = (0);
var state_42442__$1 = (function (){var statearr_42445 = state_42442;
(statearr_42445[(8)] = inst_42419);

(statearr_42445[(9)] = inst_42395);

(statearr_42445[(10)] = inst_42394);

(statearr_42445[(11)] = inst_42396);

(statearr_42445[(12)] = inst_42397);

return statearr_42445;
})();
var statearr_42446_42486 = state_42442__$1;
(statearr_42446_42486[(2)] = null);

(statearr_42446_42486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42443 === (1))){
var state_42442__$1 = state_42442;
var statearr_42447_42487 = state_42442__$1;
(statearr_42447_42487[(2)] = null);

(statearr_42447_42487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42443 === (4))){
var inst_42383 = (state_42442[(13)]);
var inst_42383__$1 = (state_42442[(2)]);
var inst_42384 = (inst_42383__$1 == null);
var state_42442__$1 = (function (){var statearr_42448 = state_42442;
(statearr_42448[(13)] = inst_42383__$1);

return statearr_42448;
})();
if(cljs.core.truth_(inst_42384)){
var statearr_42449_42488 = state_42442__$1;
(statearr_42449_42488[(1)] = (5));

} else {
var statearr_42450_42489 = state_42442__$1;
(statearr_42450_42489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42443 === (15))){
var state_42442__$1 = state_42442;
var statearr_42454_42490 = state_42442__$1;
(statearr_42454_42490[(2)] = null);

(statearr_42454_42490[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42443 === (21))){
var state_42442__$1 = state_42442;
var statearr_42455_42491 = state_42442__$1;
(statearr_42455_42491[(2)] = null);

(statearr_42455_42491[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42443 === (13))){
var inst_42395 = (state_42442[(9)]);
var inst_42394 = (state_42442[(10)]);
var inst_42396 = (state_42442[(11)]);
var inst_42397 = (state_42442[(12)]);
var inst_42404 = (state_42442[(2)]);
var inst_42405 = (inst_42397 + (1));
var tmp42451 = inst_42395;
var tmp42452 = inst_42394;
var tmp42453 = inst_42396;
var inst_42394__$1 = tmp42452;
var inst_42395__$1 = tmp42451;
var inst_42396__$1 = tmp42453;
var inst_42397__$1 = inst_42405;
var state_42442__$1 = (function (){var statearr_42456 = state_42442;
(statearr_42456[(9)] = inst_42395__$1);

(statearr_42456[(10)] = inst_42394__$1);

(statearr_42456[(11)] = inst_42396__$1);

(statearr_42456[(14)] = inst_42404);

(statearr_42456[(12)] = inst_42397__$1);

return statearr_42456;
})();
var statearr_42457_42492 = state_42442__$1;
(statearr_42457_42492[(2)] = null);

(statearr_42457_42492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42443 === (22))){
var state_42442__$1 = state_42442;
var statearr_42458_42493 = state_42442__$1;
(statearr_42458_42493[(2)] = null);

(statearr_42458_42493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42443 === (6))){
var inst_42383 = (state_42442[(13)]);
var inst_42392 = f.call(null,inst_42383);
var inst_42393 = cljs.core.seq.call(null,inst_42392);
var inst_42394 = inst_42393;
var inst_42395 = null;
var inst_42396 = (0);
var inst_42397 = (0);
var state_42442__$1 = (function (){var statearr_42459 = state_42442;
(statearr_42459[(9)] = inst_42395);

(statearr_42459[(10)] = inst_42394);

(statearr_42459[(11)] = inst_42396);

(statearr_42459[(12)] = inst_42397);

return statearr_42459;
})();
var statearr_42460_42494 = state_42442__$1;
(statearr_42460_42494[(2)] = null);

(statearr_42460_42494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42443 === (17))){
var inst_42408 = (state_42442[(7)]);
var inst_42412 = cljs.core.chunk_first.call(null,inst_42408);
var inst_42413 = cljs.core.chunk_rest.call(null,inst_42408);
var inst_42414 = cljs.core.count.call(null,inst_42412);
var inst_42394 = inst_42413;
var inst_42395 = inst_42412;
var inst_42396 = inst_42414;
var inst_42397 = (0);
var state_42442__$1 = (function (){var statearr_42461 = state_42442;
(statearr_42461[(9)] = inst_42395);

(statearr_42461[(10)] = inst_42394);

(statearr_42461[(11)] = inst_42396);

(statearr_42461[(12)] = inst_42397);

return statearr_42461;
})();
var statearr_42462_42495 = state_42442__$1;
(statearr_42462_42495[(2)] = null);

(statearr_42462_42495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42443 === (3))){
var inst_42440 = (state_42442[(2)]);
var state_42442__$1 = state_42442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42442__$1,inst_42440);
} else {
if((state_val_42443 === (12))){
var inst_42428 = (state_42442[(2)]);
var state_42442__$1 = state_42442;
var statearr_42463_42496 = state_42442__$1;
(statearr_42463_42496[(2)] = inst_42428);

(statearr_42463_42496[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42443 === (2))){
var state_42442__$1 = state_42442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42442__$1,(4),in$);
} else {
if((state_val_42443 === (23))){
var inst_42436 = (state_42442[(2)]);
var state_42442__$1 = state_42442;
var statearr_42464_42497 = state_42442__$1;
(statearr_42464_42497[(2)] = inst_42436);

(statearr_42464_42497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42443 === (19))){
var inst_42423 = (state_42442[(2)]);
var state_42442__$1 = state_42442;
var statearr_42465_42498 = state_42442__$1;
(statearr_42465_42498[(2)] = inst_42423);

(statearr_42465_42498[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42443 === (11))){
var inst_42408 = (state_42442[(7)]);
var inst_42394 = (state_42442[(10)]);
var inst_42408__$1 = cljs.core.seq.call(null,inst_42394);
var state_42442__$1 = (function (){var statearr_42466 = state_42442;
(statearr_42466[(7)] = inst_42408__$1);

return statearr_42466;
})();
if(inst_42408__$1){
var statearr_42467_42499 = state_42442__$1;
(statearr_42467_42499[(1)] = (14));

} else {
var statearr_42468_42500 = state_42442__$1;
(statearr_42468_42500[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42443 === (9))){
var inst_42430 = (state_42442[(2)]);
var inst_42431 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_42442__$1 = (function (){var statearr_42469 = state_42442;
(statearr_42469[(15)] = inst_42430);

return statearr_42469;
})();
if(cljs.core.truth_(inst_42431)){
var statearr_42470_42501 = state_42442__$1;
(statearr_42470_42501[(1)] = (21));

} else {
var statearr_42471_42502 = state_42442__$1;
(statearr_42471_42502[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42443 === (5))){
var inst_42386 = cljs.core.async.close_BANG_.call(null,out);
var state_42442__$1 = state_42442;
var statearr_42472_42503 = state_42442__$1;
(statearr_42472_42503[(2)] = inst_42386);

(statearr_42472_42503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42443 === (14))){
var inst_42408 = (state_42442[(7)]);
var inst_42410 = cljs.core.chunked_seq_QMARK_.call(null,inst_42408);
var state_42442__$1 = state_42442;
if(inst_42410){
var statearr_42473_42504 = state_42442__$1;
(statearr_42473_42504[(1)] = (17));

} else {
var statearr_42474_42505 = state_42442__$1;
(statearr_42474_42505[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42443 === (16))){
var inst_42426 = (state_42442[(2)]);
var state_42442__$1 = state_42442;
var statearr_42475_42506 = state_42442__$1;
(statearr_42475_42506[(2)] = inst_42426);

(statearr_42475_42506[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42443 === (10))){
var inst_42395 = (state_42442[(9)]);
var inst_42397 = (state_42442[(12)]);
var inst_42402 = cljs.core._nth.call(null,inst_42395,inst_42397);
var state_42442__$1 = state_42442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42442__$1,(13),out,inst_42402);
} else {
if((state_val_42443 === (18))){
var inst_42408 = (state_42442[(7)]);
var inst_42417 = cljs.core.first.call(null,inst_42408);
var state_42442__$1 = state_42442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42442__$1,(20),out,inst_42417);
} else {
if((state_val_42443 === (8))){
var inst_42396 = (state_42442[(11)]);
var inst_42397 = (state_42442[(12)]);
var inst_42399 = (inst_42397 < inst_42396);
var inst_42400 = inst_42399;
var state_42442__$1 = state_42442;
if(cljs.core.truth_(inst_42400)){
var statearr_42476_42507 = state_42442__$1;
(statearr_42476_42507[(1)] = (10));

} else {
var statearr_42477_42508 = state_42442__$1;
(statearr_42477_42508[(1)] = (11));

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
});})(c__25902__auto__))
;
return ((function (switch__25881__auto__,c__25902__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25882__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25882__auto____0 = (function (){
var statearr_42481 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42481[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25882__auto__);

(statearr_42481[(1)] = (1));

return statearr_42481;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25882__auto____1 = (function (state_42442){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_42442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e42482){if((e42482 instanceof Object)){
var ex__25885__auto__ = e42482;
var statearr_42483_42509 = state_42442;
(statearr_42483_42509[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42510 = state_42442;
state_42442 = G__42510;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25882__auto__ = function(state_42442){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25882__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25882__auto____1.call(this,state_42442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25882__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25882__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto__))
})();
var state__25904__auto__ = (function (){var statearr_42484 = f__25903__auto__.call(null);
(statearr_42484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto__);

return statearr_42484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto__))
);

return c__25902__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args42511 = [];
var len__24844__auto___42514 = arguments.length;
var i__24845__auto___42515 = (0);
while(true){
if((i__24845__auto___42515 < len__24844__auto___42514)){
args42511.push((arguments[i__24845__auto___42515]));

var G__42516 = (i__24845__auto___42515 + (1));
i__24845__auto___42515 = G__42516;
continue;
} else {
}
break;
}

var G__42513 = args42511.length;
switch (G__42513) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42511.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args42518 = [];
var len__24844__auto___42521 = arguments.length;
var i__24845__auto___42522 = (0);
while(true){
if((i__24845__auto___42522 < len__24844__auto___42521)){
args42518.push((arguments[i__24845__auto___42522]));

var G__42523 = (i__24845__auto___42522 + (1));
i__24845__auto___42522 = G__42523;
continue;
} else {
}
break;
}

var G__42520 = args42518.length;
switch (G__42520) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42518.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args42525 = [];
var len__24844__auto___42576 = arguments.length;
var i__24845__auto___42577 = (0);
while(true){
if((i__24845__auto___42577 < len__24844__auto___42576)){
args42525.push((arguments[i__24845__auto___42577]));

var G__42578 = (i__24845__auto___42577 + (1));
i__24845__auto___42577 = G__42578;
continue;
} else {
}
break;
}

var G__42527 = args42525.length;
switch (G__42527) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42525.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25902__auto___42580 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto___42580,out){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto___42580,out){
return (function (state_42551){
var state_val_42552 = (state_42551[(1)]);
if((state_val_42552 === (7))){
var inst_42546 = (state_42551[(2)]);
var state_42551__$1 = state_42551;
var statearr_42553_42581 = state_42551__$1;
(statearr_42553_42581[(2)] = inst_42546);

(statearr_42553_42581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (1))){
var inst_42528 = null;
var state_42551__$1 = (function (){var statearr_42554 = state_42551;
(statearr_42554[(7)] = inst_42528);

return statearr_42554;
})();
var statearr_42555_42582 = state_42551__$1;
(statearr_42555_42582[(2)] = null);

(statearr_42555_42582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (4))){
var inst_42531 = (state_42551[(8)]);
var inst_42531__$1 = (state_42551[(2)]);
var inst_42532 = (inst_42531__$1 == null);
var inst_42533 = cljs.core.not.call(null,inst_42532);
var state_42551__$1 = (function (){var statearr_42556 = state_42551;
(statearr_42556[(8)] = inst_42531__$1);

return statearr_42556;
})();
if(inst_42533){
var statearr_42557_42583 = state_42551__$1;
(statearr_42557_42583[(1)] = (5));

} else {
var statearr_42558_42584 = state_42551__$1;
(statearr_42558_42584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (6))){
var state_42551__$1 = state_42551;
var statearr_42559_42585 = state_42551__$1;
(statearr_42559_42585[(2)] = null);

(statearr_42559_42585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (3))){
var inst_42548 = (state_42551[(2)]);
var inst_42549 = cljs.core.async.close_BANG_.call(null,out);
var state_42551__$1 = (function (){var statearr_42560 = state_42551;
(statearr_42560[(9)] = inst_42548);

return statearr_42560;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42551__$1,inst_42549);
} else {
if((state_val_42552 === (2))){
var state_42551__$1 = state_42551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42551__$1,(4),ch);
} else {
if((state_val_42552 === (11))){
var inst_42531 = (state_42551[(8)]);
var inst_42540 = (state_42551[(2)]);
var inst_42528 = inst_42531;
var state_42551__$1 = (function (){var statearr_42561 = state_42551;
(statearr_42561[(10)] = inst_42540);

(statearr_42561[(7)] = inst_42528);

return statearr_42561;
})();
var statearr_42562_42586 = state_42551__$1;
(statearr_42562_42586[(2)] = null);

(statearr_42562_42586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (9))){
var inst_42531 = (state_42551[(8)]);
var state_42551__$1 = state_42551;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42551__$1,(11),out,inst_42531);
} else {
if((state_val_42552 === (5))){
var inst_42531 = (state_42551[(8)]);
var inst_42528 = (state_42551[(7)]);
var inst_42535 = cljs.core._EQ_.call(null,inst_42531,inst_42528);
var state_42551__$1 = state_42551;
if(inst_42535){
var statearr_42564_42587 = state_42551__$1;
(statearr_42564_42587[(1)] = (8));

} else {
var statearr_42565_42588 = state_42551__$1;
(statearr_42565_42588[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (10))){
var inst_42543 = (state_42551[(2)]);
var state_42551__$1 = state_42551;
var statearr_42566_42589 = state_42551__$1;
(statearr_42566_42589[(2)] = inst_42543);

(statearr_42566_42589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (8))){
var inst_42528 = (state_42551[(7)]);
var tmp42563 = inst_42528;
var inst_42528__$1 = tmp42563;
var state_42551__$1 = (function (){var statearr_42567 = state_42551;
(statearr_42567[(7)] = inst_42528__$1);

return statearr_42567;
})();
var statearr_42568_42590 = state_42551__$1;
(statearr_42568_42590[(2)] = null);

(statearr_42568_42590[(1)] = (2));


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
});})(c__25902__auto___42580,out))
;
return ((function (switch__25881__auto__,c__25902__auto___42580,out){
return (function() {
var cljs$core$async$state_machine__25882__auto__ = null;
var cljs$core$async$state_machine__25882__auto____0 = (function (){
var statearr_42572 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42572[(0)] = cljs$core$async$state_machine__25882__auto__);

(statearr_42572[(1)] = (1));

return statearr_42572;
});
var cljs$core$async$state_machine__25882__auto____1 = (function (state_42551){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_42551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e42573){if((e42573 instanceof Object)){
var ex__25885__auto__ = e42573;
var statearr_42574_42591 = state_42551;
(statearr_42574_42591[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42592 = state_42551;
state_42551 = G__42592;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
cljs$core$async$state_machine__25882__auto__ = function(state_42551){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25882__auto____1.call(this,state_42551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25882__auto____0;
cljs$core$async$state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25882__auto____1;
return cljs$core$async$state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto___42580,out))
})();
var state__25904__auto__ = (function (){var statearr_42575 = f__25903__auto__.call(null);
(statearr_42575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto___42580);

return statearr_42575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto___42580,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args42593 = [];
var len__24844__auto___42663 = arguments.length;
var i__24845__auto___42664 = (0);
while(true){
if((i__24845__auto___42664 < len__24844__auto___42663)){
args42593.push((arguments[i__24845__auto___42664]));

var G__42665 = (i__24845__auto___42664 + (1));
i__24845__auto___42664 = G__42665;
continue;
} else {
}
break;
}

var G__42595 = args42593.length;
switch (G__42595) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42593.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25902__auto___42667 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto___42667,out){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto___42667,out){
return (function (state_42633){
var state_val_42634 = (state_42633[(1)]);
if((state_val_42634 === (7))){
var inst_42629 = (state_42633[(2)]);
var state_42633__$1 = state_42633;
var statearr_42635_42668 = state_42633__$1;
(statearr_42635_42668[(2)] = inst_42629);

(statearr_42635_42668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (1))){
var inst_42596 = (new Array(n));
var inst_42597 = inst_42596;
var inst_42598 = (0);
var state_42633__$1 = (function (){var statearr_42636 = state_42633;
(statearr_42636[(7)] = inst_42597);

(statearr_42636[(8)] = inst_42598);

return statearr_42636;
})();
var statearr_42637_42669 = state_42633__$1;
(statearr_42637_42669[(2)] = null);

(statearr_42637_42669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (4))){
var inst_42601 = (state_42633[(9)]);
var inst_42601__$1 = (state_42633[(2)]);
var inst_42602 = (inst_42601__$1 == null);
var inst_42603 = cljs.core.not.call(null,inst_42602);
var state_42633__$1 = (function (){var statearr_42638 = state_42633;
(statearr_42638[(9)] = inst_42601__$1);

return statearr_42638;
})();
if(inst_42603){
var statearr_42639_42670 = state_42633__$1;
(statearr_42639_42670[(1)] = (5));

} else {
var statearr_42640_42671 = state_42633__$1;
(statearr_42640_42671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (15))){
var inst_42623 = (state_42633[(2)]);
var state_42633__$1 = state_42633;
var statearr_42641_42672 = state_42633__$1;
(statearr_42641_42672[(2)] = inst_42623);

(statearr_42641_42672[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (13))){
var state_42633__$1 = state_42633;
var statearr_42642_42673 = state_42633__$1;
(statearr_42642_42673[(2)] = null);

(statearr_42642_42673[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (6))){
var inst_42598 = (state_42633[(8)]);
var inst_42619 = (inst_42598 > (0));
var state_42633__$1 = state_42633;
if(cljs.core.truth_(inst_42619)){
var statearr_42643_42674 = state_42633__$1;
(statearr_42643_42674[(1)] = (12));

} else {
var statearr_42644_42675 = state_42633__$1;
(statearr_42644_42675[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (3))){
var inst_42631 = (state_42633[(2)]);
var state_42633__$1 = state_42633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42633__$1,inst_42631);
} else {
if((state_val_42634 === (12))){
var inst_42597 = (state_42633[(7)]);
var inst_42621 = cljs.core.vec.call(null,inst_42597);
var state_42633__$1 = state_42633;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42633__$1,(15),out,inst_42621);
} else {
if((state_val_42634 === (2))){
var state_42633__$1 = state_42633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42633__$1,(4),ch);
} else {
if((state_val_42634 === (11))){
var inst_42613 = (state_42633[(2)]);
var inst_42614 = (new Array(n));
var inst_42597 = inst_42614;
var inst_42598 = (0);
var state_42633__$1 = (function (){var statearr_42645 = state_42633;
(statearr_42645[(7)] = inst_42597);

(statearr_42645[(10)] = inst_42613);

(statearr_42645[(8)] = inst_42598);

return statearr_42645;
})();
var statearr_42646_42676 = state_42633__$1;
(statearr_42646_42676[(2)] = null);

(statearr_42646_42676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (9))){
var inst_42597 = (state_42633[(7)]);
var inst_42611 = cljs.core.vec.call(null,inst_42597);
var state_42633__$1 = state_42633;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42633__$1,(11),out,inst_42611);
} else {
if((state_val_42634 === (5))){
var inst_42597 = (state_42633[(7)]);
var inst_42598 = (state_42633[(8)]);
var inst_42606 = (state_42633[(11)]);
var inst_42601 = (state_42633[(9)]);
var inst_42605 = (inst_42597[inst_42598] = inst_42601);
var inst_42606__$1 = (inst_42598 + (1));
var inst_42607 = (inst_42606__$1 < n);
var state_42633__$1 = (function (){var statearr_42647 = state_42633;
(statearr_42647[(11)] = inst_42606__$1);

(statearr_42647[(12)] = inst_42605);

return statearr_42647;
})();
if(cljs.core.truth_(inst_42607)){
var statearr_42648_42677 = state_42633__$1;
(statearr_42648_42677[(1)] = (8));

} else {
var statearr_42649_42678 = state_42633__$1;
(statearr_42649_42678[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (14))){
var inst_42626 = (state_42633[(2)]);
var inst_42627 = cljs.core.async.close_BANG_.call(null,out);
var state_42633__$1 = (function (){var statearr_42651 = state_42633;
(statearr_42651[(13)] = inst_42626);

return statearr_42651;
})();
var statearr_42652_42679 = state_42633__$1;
(statearr_42652_42679[(2)] = inst_42627);

(statearr_42652_42679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (10))){
var inst_42617 = (state_42633[(2)]);
var state_42633__$1 = state_42633;
var statearr_42653_42680 = state_42633__$1;
(statearr_42653_42680[(2)] = inst_42617);

(statearr_42653_42680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (8))){
var inst_42597 = (state_42633[(7)]);
var inst_42606 = (state_42633[(11)]);
var tmp42650 = inst_42597;
var inst_42597__$1 = tmp42650;
var inst_42598 = inst_42606;
var state_42633__$1 = (function (){var statearr_42654 = state_42633;
(statearr_42654[(7)] = inst_42597__$1);

(statearr_42654[(8)] = inst_42598);

return statearr_42654;
})();
var statearr_42655_42681 = state_42633__$1;
(statearr_42655_42681[(2)] = null);

(statearr_42655_42681[(1)] = (2));


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
});})(c__25902__auto___42667,out))
;
return ((function (switch__25881__auto__,c__25902__auto___42667,out){
return (function() {
var cljs$core$async$state_machine__25882__auto__ = null;
var cljs$core$async$state_machine__25882__auto____0 = (function (){
var statearr_42659 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42659[(0)] = cljs$core$async$state_machine__25882__auto__);

(statearr_42659[(1)] = (1));

return statearr_42659;
});
var cljs$core$async$state_machine__25882__auto____1 = (function (state_42633){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_42633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e42660){if((e42660 instanceof Object)){
var ex__25885__auto__ = e42660;
var statearr_42661_42682 = state_42633;
(statearr_42661_42682[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42683 = state_42633;
state_42633 = G__42683;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
cljs$core$async$state_machine__25882__auto__ = function(state_42633){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25882__auto____1.call(this,state_42633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25882__auto____0;
cljs$core$async$state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25882__auto____1;
return cljs$core$async$state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto___42667,out))
})();
var state__25904__auto__ = (function (){var statearr_42662 = f__25903__auto__.call(null);
(statearr_42662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto___42667);

return statearr_42662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto___42667,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args42684 = [];
var len__24844__auto___42758 = arguments.length;
var i__24845__auto___42759 = (0);
while(true){
if((i__24845__auto___42759 < len__24844__auto___42758)){
args42684.push((arguments[i__24845__auto___42759]));

var G__42760 = (i__24845__auto___42759 + (1));
i__24845__auto___42759 = G__42760;
continue;
} else {
}
break;
}

var G__42686 = args42684.length;
switch (G__42686) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42684.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25902__auto___42762 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto___42762,out){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto___42762,out){
return (function (state_42728){
var state_val_42729 = (state_42728[(1)]);
if((state_val_42729 === (7))){
var inst_42724 = (state_42728[(2)]);
var state_42728__$1 = state_42728;
var statearr_42730_42763 = state_42728__$1;
(statearr_42730_42763[(2)] = inst_42724);

(statearr_42730_42763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42729 === (1))){
var inst_42687 = [];
var inst_42688 = inst_42687;
var inst_42689 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_42728__$1 = (function (){var statearr_42731 = state_42728;
(statearr_42731[(7)] = inst_42689);

(statearr_42731[(8)] = inst_42688);

return statearr_42731;
})();
var statearr_42732_42764 = state_42728__$1;
(statearr_42732_42764[(2)] = null);

(statearr_42732_42764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42729 === (4))){
var inst_42692 = (state_42728[(9)]);
var inst_42692__$1 = (state_42728[(2)]);
var inst_42693 = (inst_42692__$1 == null);
var inst_42694 = cljs.core.not.call(null,inst_42693);
var state_42728__$1 = (function (){var statearr_42733 = state_42728;
(statearr_42733[(9)] = inst_42692__$1);

return statearr_42733;
})();
if(inst_42694){
var statearr_42734_42765 = state_42728__$1;
(statearr_42734_42765[(1)] = (5));

} else {
var statearr_42735_42766 = state_42728__$1;
(statearr_42735_42766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42729 === (15))){
var inst_42718 = (state_42728[(2)]);
var state_42728__$1 = state_42728;
var statearr_42736_42767 = state_42728__$1;
(statearr_42736_42767[(2)] = inst_42718);

(statearr_42736_42767[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42729 === (13))){
var state_42728__$1 = state_42728;
var statearr_42737_42768 = state_42728__$1;
(statearr_42737_42768[(2)] = null);

(statearr_42737_42768[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42729 === (6))){
var inst_42688 = (state_42728[(8)]);
var inst_42713 = inst_42688.length;
var inst_42714 = (inst_42713 > (0));
var state_42728__$1 = state_42728;
if(cljs.core.truth_(inst_42714)){
var statearr_42738_42769 = state_42728__$1;
(statearr_42738_42769[(1)] = (12));

} else {
var statearr_42739_42770 = state_42728__$1;
(statearr_42739_42770[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42729 === (3))){
var inst_42726 = (state_42728[(2)]);
var state_42728__$1 = state_42728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42728__$1,inst_42726);
} else {
if((state_val_42729 === (12))){
var inst_42688 = (state_42728[(8)]);
var inst_42716 = cljs.core.vec.call(null,inst_42688);
var state_42728__$1 = state_42728;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42728__$1,(15),out,inst_42716);
} else {
if((state_val_42729 === (2))){
var state_42728__$1 = state_42728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42728__$1,(4),ch);
} else {
if((state_val_42729 === (11))){
var inst_42696 = (state_42728[(10)]);
var inst_42692 = (state_42728[(9)]);
var inst_42706 = (state_42728[(2)]);
var inst_42707 = [];
var inst_42708 = inst_42707.push(inst_42692);
var inst_42688 = inst_42707;
var inst_42689 = inst_42696;
var state_42728__$1 = (function (){var statearr_42740 = state_42728;
(statearr_42740[(7)] = inst_42689);

(statearr_42740[(11)] = inst_42708);

(statearr_42740[(8)] = inst_42688);

(statearr_42740[(12)] = inst_42706);

return statearr_42740;
})();
var statearr_42741_42771 = state_42728__$1;
(statearr_42741_42771[(2)] = null);

(statearr_42741_42771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42729 === (9))){
var inst_42688 = (state_42728[(8)]);
var inst_42704 = cljs.core.vec.call(null,inst_42688);
var state_42728__$1 = state_42728;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42728__$1,(11),out,inst_42704);
} else {
if((state_val_42729 === (5))){
var inst_42696 = (state_42728[(10)]);
var inst_42692 = (state_42728[(9)]);
var inst_42689 = (state_42728[(7)]);
var inst_42696__$1 = f.call(null,inst_42692);
var inst_42697 = cljs.core._EQ_.call(null,inst_42696__$1,inst_42689);
var inst_42698 = cljs.core.keyword_identical_QMARK_.call(null,inst_42689,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_42699 = (inst_42697) || (inst_42698);
var state_42728__$1 = (function (){var statearr_42742 = state_42728;
(statearr_42742[(10)] = inst_42696__$1);

return statearr_42742;
})();
if(cljs.core.truth_(inst_42699)){
var statearr_42743_42772 = state_42728__$1;
(statearr_42743_42772[(1)] = (8));

} else {
var statearr_42744_42773 = state_42728__$1;
(statearr_42744_42773[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42729 === (14))){
var inst_42721 = (state_42728[(2)]);
var inst_42722 = cljs.core.async.close_BANG_.call(null,out);
var state_42728__$1 = (function (){var statearr_42746 = state_42728;
(statearr_42746[(13)] = inst_42721);

return statearr_42746;
})();
var statearr_42747_42774 = state_42728__$1;
(statearr_42747_42774[(2)] = inst_42722);

(statearr_42747_42774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42729 === (10))){
var inst_42711 = (state_42728[(2)]);
var state_42728__$1 = state_42728;
var statearr_42748_42775 = state_42728__$1;
(statearr_42748_42775[(2)] = inst_42711);

(statearr_42748_42775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42729 === (8))){
var inst_42696 = (state_42728[(10)]);
var inst_42692 = (state_42728[(9)]);
var inst_42688 = (state_42728[(8)]);
var inst_42701 = inst_42688.push(inst_42692);
var tmp42745 = inst_42688;
var inst_42688__$1 = tmp42745;
var inst_42689 = inst_42696;
var state_42728__$1 = (function (){var statearr_42749 = state_42728;
(statearr_42749[(7)] = inst_42689);

(statearr_42749[(14)] = inst_42701);

(statearr_42749[(8)] = inst_42688__$1);

return statearr_42749;
})();
var statearr_42750_42776 = state_42728__$1;
(statearr_42750_42776[(2)] = null);

(statearr_42750_42776[(1)] = (2));


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
});})(c__25902__auto___42762,out))
;
return ((function (switch__25881__auto__,c__25902__auto___42762,out){
return (function() {
var cljs$core$async$state_machine__25882__auto__ = null;
var cljs$core$async$state_machine__25882__auto____0 = (function (){
var statearr_42754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42754[(0)] = cljs$core$async$state_machine__25882__auto__);

(statearr_42754[(1)] = (1));

return statearr_42754;
});
var cljs$core$async$state_machine__25882__auto____1 = (function (state_42728){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_42728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e42755){if((e42755 instanceof Object)){
var ex__25885__auto__ = e42755;
var statearr_42756_42777 = state_42728;
(statearr_42756_42777[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42778 = state_42728;
state_42728 = G__42778;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
cljs$core$async$state_machine__25882__auto__ = function(state_42728){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25882__auto____1.call(this,state_42728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25882__auto____0;
cljs$core$async$state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25882__auto____1;
return cljs$core$async$state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto___42762,out))
})();
var state__25904__auto__ = (function (){var statearr_42757 = f__25903__auto__.call(null);
(statearr_42757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto___42762);

return statearr_42757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto___42762,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1453744771965