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
var args8534 = [];
var len__5726__auto___8540 = arguments.length;
var i__5727__auto___8541 = (0);
while(true){
if((i__5727__auto___8541 < len__5726__auto___8540)){
args8534.push((arguments[i__5727__auto___8541]));

var G__8542 = (i__5727__auto___8541 + (1));
i__5727__auto___8541 = G__8542;
continue;
} else {
}
break;
}

var G__8536 = args8534.length;
switch (G__8536) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8534.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async8537 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8537 = (function (f,blockable,meta8538){
this.f = f;
this.blockable = blockable;
this.meta8538 = meta8538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8539,meta8538__$1){
var self__ = this;
var _8539__$1 = this;
return (new cljs.core.async.t_cljs$core$async8537(self__.f,self__.blockable,meta8538__$1));
});

cljs.core.async.t_cljs$core$async8537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8539){
var self__ = this;
var _8539__$1 = this;
return self__.meta8538;
});

cljs.core.async.t_cljs$core$async8537.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async8537.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async8537.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async8537.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async8537.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta8538","meta8538",-171018822,null)], null);
});

cljs.core.async.t_cljs$core$async8537.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8537.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8537";

cljs.core.async.t_cljs$core$async8537.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async8537");
});

cljs.core.async.__GT_t_cljs$core$async8537 = (function cljs$core$async$__GT_t_cljs$core$async8537(f__$1,blockable__$1,meta8538){
return (new cljs.core.async.t_cljs$core$async8537(f__$1,blockable__$1,meta8538));
});

}

return (new cljs.core.async.t_cljs$core$async8537(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args8546 = [];
var len__5726__auto___8549 = arguments.length;
var i__5727__auto___8550 = (0);
while(true){
if((i__5727__auto___8550 < len__5726__auto___8549)){
args8546.push((arguments[i__5727__auto___8550]));

var G__8551 = (i__5727__auto___8550 + (1));
i__5727__auto___8550 = G__8551;
continue;
} else {
}
break;
}

var G__8548 = args8546.length;
switch (G__8548) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8546.length)].join('')));

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
var args8553 = [];
var len__5726__auto___8556 = arguments.length;
var i__5727__auto___8557 = (0);
while(true){
if((i__5727__auto___8557 < len__5726__auto___8556)){
args8553.push((arguments[i__5727__auto___8557]));

var G__8558 = (i__5727__auto___8557 + (1));
i__5727__auto___8557 = G__8558;
continue;
} else {
}
break;
}

var G__8555 = args8553.length;
switch (G__8555) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8553.length)].join('')));

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
var args8560 = [];
var len__5726__auto___8563 = arguments.length;
var i__5727__auto___8564 = (0);
while(true){
if((i__5727__auto___8564 < len__5726__auto___8563)){
args8560.push((arguments[i__5727__auto___8564]));

var G__8565 = (i__5727__auto___8564 + (1));
i__5727__auto___8564 = G__8565;
continue;
} else {
}
break;
}

var G__8562 = args8560.length;
switch (G__8562) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8560.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_8567 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_8567);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_8567,ret){
return (function (){
return fn1.call(null,val_8567);
});})(val_8567,ret))
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
var args8568 = [];
var len__5726__auto___8571 = arguments.length;
var i__5727__auto___8572 = (0);
while(true){
if((i__5727__auto___8572 < len__5726__auto___8571)){
args8568.push((arguments[i__5727__auto___8572]));

var G__8573 = (i__5727__auto___8572 + (1));
i__5727__auto___8572 = G__8573;
continue;
} else {
}
break;
}

var G__8570 = args8568.length;
switch (G__8570) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8568.length)].join('')));

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
var n__5571__auto___8575 = n;
var x_8576 = (0);
while(true){
if((x_8576 < n__5571__auto___8575)){
(a[x_8576] = (0));

var G__8577 = (x_8576 + (1));
x_8576 = G__8577;
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

var G__8578 = (i + (1));
i = G__8578;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async8582 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8582 = (function (alt_flag,flag,meta8583){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta8583 = meta8583;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_8584,meta8583__$1){
var self__ = this;
var _8584__$1 = this;
return (new cljs.core.async.t_cljs$core$async8582(self__.alt_flag,self__.flag,meta8583__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async8582.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_8584){
var self__ = this;
var _8584__$1 = this;
return self__.meta8583;
});})(flag))
;

cljs.core.async.t_cljs$core$async8582.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async8582.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async8582.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async8582.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async8582.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta8583","meta8583",1340323821,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async8582.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8582.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8582";

cljs.core.async.t_cljs$core$async8582.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async8582");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async8582 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async8582(alt_flag__$1,flag__$1,meta8583){
return (new cljs.core.async.t_cljs$core$async8582(alt_flag__$1,flag__$1,meta8583));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async8582(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async8588 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8588 = (function (alt_handler,flag,cb,meta8589){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta8589 = meta8589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8590,meta8589__$1){
var self__ = this;
var _8590__$1 = this;
return (new cljs.core.async.t_cljs$core$async8588(self__.alt_handler,self__.flag,self__.cb,meta8589__$1));
});

cljs.core.async.t_cljs$core$async8588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8590){
var self__ = this;
var _8590__$1 = this;
return self__.meta8589;
});

cljs.core.async.t_cljs$core$async8588.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async8588.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async8588.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async8588.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async8588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta8589","meta8589",-991210253,null)], null);
});

cljs.core.async.t_cljs$core$async8588.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8588.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8588";

cljs.core.async.t_cljs$core$async8588.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async8588");
});

cljs.core.async.__GT_t_cljs$core$async8588 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async8588(alt_handler__$1,flag__$1,cb__$1,meta8589){
return (new cljs.core.async.t_cljs$core$async8588(alt_handler__$1,flag__$1,cb__$1,meta8589));
});

}

return (new cljs.core.async.t_cljs$core$async8588(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__8591_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8591_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__8592_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8592_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4668__auto__ = wport;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return port;
}
})()], null));
} else {
var G__8593 = (i + (1));
i = G__8593;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4668__auto__ = ret;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4656__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4656__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4656__auto__;
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
var args__5733__auto__ = [];
var len__5726__auto___8599 = arguments.length;
var i__5727__auto___8600 = (0);
while(true){
if((i__5727__auto___8600 < len__5726__auto___8599)){
args__5733__auto__.push((arguments[i__5727__auto___8600]));

var G__8601 = (i__5727__auto___8600 + (1));
i__5727__auto___8600 = G__8601;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__8596){
var map__8597 = p__8596;
var map__8597__$1 = ((((!((map__8597 == null)))?((((map__8597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8597):map__8597);
var opts = map__8597__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq8594){
var G__8595 = cljs.core.first.call(null,seq8594);
var seq8594__$1 = cljs.core.next.call(null,seq8594);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8595,seq8594__$1);
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
var args8602 = [];
var len__5726__auto___8652 = arguments.length;
var i__5727__auto___8653 = (0);
while(true){
if((i__5727__auto___8653 < len__5726__auto___8652)){
args8602.push((arguments[i__5727__auto___8653]));

var G__8654 = (i__5727__auto___8653 + (1));
i__5727__auto___8653 = G__8654;
continue;
} else {
}
break;
}

var G__8604 = args8602.length;
switch (G__8604) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8602.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__8489__auto___8656 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8489__auto___8656){
return (function (){
var f__8490__auto__ = (function (){var switch__8377__auto__ = ((function (c__8489__auto___8656){
return (function (state_8628){
var state_val_8629 = (state_8628[(1)]);
if((state_val_8629 === (7))){
var inst_8624 = (state_8628[(2)]);
var state_8628__$1 = state_8628;
var statearr_8630_8657 = state_8628__$1;
(statearr_8630_8657[(2)] = inst_8624);

(statearr_8630_8657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8629 === (1))){
var state_8628__$1 = state_8628;
var statearr_8631_8658 = state_8628__$1;
(statearr_8631_8658[(2)] = null);

(statearr_8631_8658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8629 === (4))){
var inst_8607 = (state_8628[(7)]);
var inst_8607__$1 = (state_8628[(2)]);
var inst_8608 = (inst_8607__$1 == null);
var state_8628__$1 = (function (){var statearr_8632 = state_8628;
(statearr_8632[(7)] = inst_8607__$1);

return statearr_8632;
})();
if(cljs.core.truth_(inst_8608)){
var statearr_8633_8659 = state_8628__$1;
(statearr_8633_8659[(1)] = (5));

} else {
var statearr_8634_8660 = state_8628__$1;
(statearr_8634_8660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8629 === (13))){
var state_8628__$1 = state_8628;
var statearr_8635_8661 = state_8628__$1;
(statearr_8635_8661[(2)] = null);

(statearr_8635_8661[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8629 === (6))){
var inst_8607 = (state_8628[(7)]);
var state_8628__$1 = state_8628;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8628__$1,(11),to,inst_8607);
} else {
if((state_val_8629 === (3))){
var inst_8626 = (state_8628[(2)]);
var state_8628__$1 = state_8628;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8628__$1,inst_8626);
} else {
if((state_val_8629 === (12))){
var state_8628__$1 = state_8628;
var statearr_8636_8662 = state_8628__$1;
(statearr_8636_8662[(2)] = null);

(statearr_8636_8662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8629 === (2))){
var state_8628__$1 = state_8628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8628__$1,(4),from);
} else {
if((state_val_8629 === (11))){
var inst_8617 = (state_8628[(2)]);
var state_8628__$1 = state_8628;
if(cljs.core.truth_(inst_8617)){
var statearr_8637_8663 = state_8628__$1;
(statearr_8637_8663[(1)] = (12));

} else {
var statearr_8638_8664 = state_8628__$1;
(statearr_8638_8664[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8629 === (9))){
var state_8628__$1 = state_8628;
var statearr_8639_8665 = state_8628__$1;
(statearr_8639_8665[(2)] = null);

(statearr_8639_8665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8629 === (5))){
var state_8628__$1 = state_8628;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8640_8666 = state_8628__$1;
(statearr_8640_8666[(1)] = (8));

} else {
var statearr_8641_8667 = state_8628__$1;
(statearr_8641_8667[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8629 === (14))){
var inst_8622 = (state_8628[(2)]);
var state_8628__$1 = state_8628;
var statearr_8642_8668 = state_8628__$1;
(statearr_8642_8668[(2)] = inst_8622);

(statearr_8642_8668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8629 === (10))){
var inst_8614 = (state_8628[(2)]);
var state_8628__$1 = state_8628;
var statearr_8643_8669 = state_8628__$1;
(statearr_8643_8669[(2)] = inst_8614);

(statearr_8643_8669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8629 === (8))){
var inst_8611 = cljs.core.async.close_BANG_.call(null,to);
var state_8628__$1 = state_8628;
var statearr_8644_8670 = state_8628__$1;
(statearr_8644_8670[(2)] = inst_8611);

(statearr_8644_8670[(1)] = (10));


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
});})(c__8489__auto___8656))
;
return ((function (switch__8377__auto__,c__8489__auto___8656){
return (function() {
var cljs$core$async$state_machine__8378__auto__ = null;
var cljs$core$async$state_machine__8378__auto____0 = (function (){
var statearr_8648 = [null,null,null,null,null,null,null,null];
(statearr_8648[(0)] = cljs$core$async$state_machine__8378__auto__);

(statearr_8648[(1)] = (1));

return statearr_8648;
});
var cljs$core$async$state_machine__8378__auto____1 = (function (state_8628){
while(true){
var ret_value__8379__auto__ = (function (){try{while(true){
var result__8380__auto__ = switch__8377__auto__.call(null,state_8628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8380__auto__;
}
break;
}
}catch (e8649){if((e8649 instanceof Object)){
var ex__8381__auto__ = e8649;
var statearr_8650_8671 = state_8628;
(statearr_8650_8671[(5)] = ex__8381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8672 = state_8628;
state_8628 = G__8672;
continue;
} else {
return ret_value__8379__auto__;
}
break;
}
});
cljs$core$async$state_machine__8378__auto__ = function(state_8628){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8378__auto____1.call(this,state_8628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8378__auto____0;
cljs$core$async$state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8378__auto____1;
return cljs$core$async$state_machine__8378__auto__;
})()
;})(switch__8377__auto__,c__8489__auto___8656))
})();
var state__8491__auto__ = (function (){var statearr_8651 = f__8490__auto__.call(null);
(statearr_8651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8489__auto___8656);

return statearr_8651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8491__auto__);
});})(c__8489__auto___8656))
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
return (function (p__8856){
var vec__8857 = p__8856;
var v = cljs.core.nth.call(null,vec__8857,(0),null);
var p = cljs.core.nth.call(null,vec__8857,(1),null);
var job = vec__8857;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__8489__auto___9039 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8489__auto___9039,res,vec__8857,v,p,job,jobs,results){
return (function (){
var f__8490__auto__ = (function (){var switch__8377__auto__ = ((function (c__8489__auto___9039,res,vec__8857,v,p,job,jobs,results){
return (function (state_8862){
var state_val_8863 = (state_8862[(1)]);
if((state_val_8863 === (1))){
var state_8862__$1 = state_8862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8862__$1,(2),res,v);
} else {
if((state_val_8863 === (2))){
var inst_8859 = (state_8862[(2)]);
var inst_8860 = cljs.core.async.close_BANG_.call(null,res);
var state_8862__$1 = (function (){var statearr_8864 = state_8862;
(statearr_8864[(7)] = inst_8859);

return statearr_8864;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8862__$1,inst_8860);
} else {
return null;
}
}
});})(c__8489__auto___9039,res,vec__8857,v,p,job,jobs,results))
;
return ((function (switch__8377__auto__,c__8489__auto___9039,res,vec__8857,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8378__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8378__auto____0 = (function (){
var statearr_8868 = [null,null,null,null,null,null,null,null];
(statearr_8868[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8378__auto__);

(statearr_8868[(1)] = (1));

return statearr_8868;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8378__auto____1 = (function (state_8862){
while(true){
var ret_value__8379__auto__ = (function (){try{while(true){
var result__8380__auto__ = switch__8377__auto__.call(null,state_8862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8380__auto__;
}
break;
}
}catch (e8869){if((e8869 instanceof Object)){
var ex__8381__auto__ = e8869;
var statearr_8870_9040 = state_8862;
(statearr_8870_9040[(5)] = ex__8381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9041 = state_8862;
state_8862 = G__9041;
continue;
} else {
return ret_value__8379__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8378__auto__ = function(state_8862){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8378__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8378__auto____1.call(this,state_8862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8378__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8378__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8378__auto__;
})()
;})(switch__8377__auto__,c__8489__auto___9039,res,vec__8857,v,p,job,jobs,results))
})();
var state__8491__auto__ = (function (){var statearr_8871 = f__8490__auto__.call(null);
(statearr_8871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8489__auto___9039);

return statearr_8871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8491__auto__);
});})(c__8489__auto___9039,res,vec__8857,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__8872){
var vec__8873 = p__8872;
var v = cljs.core.nth.call(null,vec__8873,(0),null);
var p = cljs.core.nth.call(null,vec__8873,(1),null);
var job = vec__8873;
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
var n__5571__auto___9042 = n;
var __9043 = (0);
while(true){
if((__9043 < n__5571__auto___9042)){
var G__8874_9044 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__8874_9044) {
case "compute":
var c__8489__auto___9046 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9043,c__8489__auto___9046,G__8874_9044,n__5571__auto___9042,jobs,results,process,async){
return (function (){
var f__8490__auto__ = (function (){var switch__8377__auto__ = ((function (__9043,c__8489__auto___9046,G__8874_9044,n__5571__auto___9042,jobs,results,process,async){
return (function (state_8887){
var state_val_8888 = (state_8887[(1)]);
if((state_val_8888 === (1))){
var state_8887__$1 = state_8887;
var statearr_8889_9047 = state_8887__$1;
(statearr_8889_9047[(2)] = null);

(statearr_8889_9047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8888 === (2))){
var state_8887__$1 = state_8887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8887__$1,(4),jobs);
} else {
if((state_val_8888 === (3))){
var inst_8885 = (state_8887[(2)]);
var state_8887__$1 = state_8887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8887__$1,inst_8885);
} else {
if((state_val_8888 === (4))){
var inst_8877 = (state_8887[(2)]);
var inst_8878 = process.call(null,inst_8877);
var state_8887__$1 = state_8887;
if(cljs.core.truth_(inst_8878)){
var statearr_8890_9048 = state_8887__$1;
(statearr_8890_9048[(1)] = (5));

} else {
var statearr_8891_9049 = state_8887__$1;
(statearr_8891_9049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8888 === (5))){
var state_8887__$1 = state_8887;
var statearr_8892_9050 = state_8887__$1;
(statearr_8892_9050[(2)] = null);

(statearr_8892_9050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8888 === (6))){
var state_8887__$1 = state_8887;
var statearr_8893_9051 = state_8887__$1;
(statearr_8893_9051[(2)] = null);

(statearr_8893_9051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8888 === (7))){
var inst_8883 = (state_8887[(2)]);
var state_8887__$1 = state_8887;
var statearr_8894_9052 = state_8887__$1;
(statearr_8894_9052[(2)] = inst_8883);

(statearr_8894_9052[(1)] = (3));


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
});})(__9043,c__8489__auto___9046,G__8874_9044,n__5571__auto___9042,jobs,results,process,async))
;
return ((function (__9043,switch__8377__auto__,c__8489__auto___9046,G__8874_9044,n__5571__auto___9042,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8378__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8378__auto____0 = (function (){
var statearr_8898 = [null,null,null,null,null,null,null];
(statearr_8898[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8378__auto__);

(statearr_8898[(1)] = (1));

return statearr_8898;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8378__auto____1 = (function (state_8887){
while(true){
var ret_value__8379__auto__ = (function (){try{while(true){
var result__8380__auto__ = switch__8377__auto__.call(null,state_8887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8380__auto__;
}
break;
}
}catch (e8899){if((e8899 instanceof Object)){
var ex__8381__auto__ = e8899;
var statearr_8900_9053 = state_8887;
(statearr_8900_9053[(5)] = ex__8381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9054 = state_8887;
state_8887 = G__9054;
continue;
} else {
return ret_value__8379__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8378__auto__ = function(state_8887){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8378__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8378__auto____1.call(this,state_8887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8378__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8378__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8378__auto__;
})()
;})(__9043,switch__8377__auto__,c__8489__auto___9046,G__8874_9044,n__5571__auto___9042,jobs,results,process,async))
})();
var state__8491__auto__ = (function (){var statearr_8901 = f__8490__auto__.call(null);
(statearr_8901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8489__auto___9046);

return statearr_8901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8491__auto__);
});})(__9043,c__8489__auto___9046,G__8874_9044,n__5571__auto___9042,jobs,results,process,async))
);


break;
case "async":
var c__8489__auto___9055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9043,c__8489__auto___9055,G__8874_9044,n__5571__auto___9042,jobs,results,process,async){
return (function (){
var f__8490__auto__ = (function (){var switch__8377__auto__ = ((function (__9043,c__8489__auto___9055,G__8874_9044,n__5571__auto___9042,jobs,results,process,async){
return (function (state_8914){
var state_val_8915 = (state_8914[(1)]);
if((state_val_8915 === (1))){
var state_8914__$1 = state_8914;
var statearr_8916_9056 = state_8914__$1;
(statearr_8916_9056[(2)] = null);

(statearr_8916_9056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8915 === (2))){
var state_8914__$1 = state_8914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8914__$1,(4),jobs);
} else {
if((state_val_8915 === (3))){
var inst_8912 = (state_8914[(2)]);
var state_8914__$1 = state_8914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8914__$1,inst_8912);
} else {
if((state_val_8915 === (4))){
var inst_8904 = (state_8914[(2)]);
var inst_8905 = async.call(null,inst_8904);
var state_8914__$1 = state_8914;
if(cljs.core.truth_(inst_8905)){
var statearr_8917_9057 = state_8914__$1;
(statearr_8917_9057[(1)] = (5));

} else {
var statearr_8918_9058 = state_8914__$1;
(statearr_8918_9058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8915 === (5))){
var state_8914__$1 = state_8914;
var statearr_8919_9059 = state_8914__$1;
(statearr_8919_9059[(2)] = null);

(statearr_8919_9059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8915 === (6))){
var state_8914__$1 = state_8914;
var statearr_8920_9060 = state_8914__$1;
(statearr_8920_9060[(2)] = null);

(statearr_8920_9060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8915 === (7))){
var inst_8910 = (state_8914[(2)]);
var state_8914__$1 = state_8914;
var statearr_8921_9061 = state_8914__$1;
(statearr_8921_9061[(2)] = inst_8910);

(statearr_8921_9061[(1)] = (3));


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
});})(__9043,c__8489__auto___9055,G__8874_9044,n__5571__auto___9042,jobs,results,process,async))
;
return ((function (__9043,switch__8377__auto__,c__8489__auto___9055,G__8874_9044,n__5571__auto___9042,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8378__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8378__auto____0 = (function (){
var statearr_8925 = [null,null,null,null,null,null,null];
(statearr_8925[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8378__auto__);

(statearr_8925[(1)] = (1));

return statearr_8925;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8378__auto____1 = (function (state_8914){
while(true){
var ret_value__8379__auto__ = (function (){try{while(true){
var result__8380__auto__ = switch__8377__auto__.call(null,state_8914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8380__auto__;
}
break;
}
}catch (e8926){if((e8926 instanceof Object)){
var ex__8381__auto__ = e8926;
var statearr_8927_9062 = state_8914;
(statearr_8927_9062[(5)] = ex__8381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9063 = state_8914;
state_8914 = G__9063;
continue;
} else {
return ret_value__8379__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8378__auto__ = function(state_8914){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8378__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8378__auto____1.call(this,state_8914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8378__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8378__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8378__auto__;
})()
;})(__9043,switch__8377__auto__,c__8489__auto___9055,G__8874_9044,n__5571__auto___9042,jobs,results,process,async))
})();
var state__8491__auto__ = (function (){var statearr_8928 = f__8490__auto__.call(null);
(statearr_8928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8489__auto___9055);

return statearr_8928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8491__auto__);
});})(__9043,c__8489__auto___9055,G__8874_9044,n__5571__auto___9042,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__9064 = (__9043 + (1));
__9043 = G__9064;
continue;
} else {
}
break;
}

var c__8489__auto___9065 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8489__auto___9065,jobs,results,process,async){
return (function (){
var f__8490__auto__ = (function (){var switch__8377__auto__ = ((function (c__8489__auto___9065,jobs,results,process,async){
return (function (state_8950){
var state_val_8951 = (state_8950[(1)]);
if((state_val_8951 === (1))){
var state_8950__$1 = state_8950;
var statearr_8952_9066 = state_8950__$1;
(statearr_8952_9066[(2)] = null);

(statearr_8952_9066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8951 === (2))){
var state_8950__$1 = state_8950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8950__$1,(4),from);
} else {
if((state_val_8951 === (3))){
var inst_8948 = (state_8950[(2)]);
var state_8950__$1 = state_8950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8950__$1,inst_8948);
} else {
if((state_val_8951 === (4))){
var inst_8931 = (state_8950[(7)]);
var inst_8931__$1 = (state_8950[(2)]);
var inst_8932 = (inst_8931__$1 == null);
var state_8950__$1 = (function (){var statearr_8953 = state_8950;
(statearr_8953[(7)] = inst_8931__$1);

return statearr_8953;
})();
if(cljs.core.truth_(inst_8932)){
var statearr_8954_9067 = state_8950__$1;
(statearr_8954_9067[(1)] = (5));

} else {
var statearr_8955_9068 = state_8950__$1;
(statearr_8955_9068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8951 === (5))){
var inst_8934 = cljs.core.async.close_BANG_.call(null,jobs);
var state_8950__$1 = state_8950;
var statearr_8956_9069 = state_8950__$1;
(statearr_8956_9069[(2)] = inst_8934);

(statearr_8956_9069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8951 === (6))){
var inst_8936 = (state_8950[(8)]);
var inst_8931 = (state_8950[(7)]);
var inst_8936__$1 = cljs.core.async.chan.call(null,(1));
var inst_8937 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8938 = [inst_8931,inst_8936__$1];
var inst_8939 = (new cljs.core.PersistentVector(null,2,(5),inst_8937,inst_8938,null));
var state_8950__$1 = (function (){var statearr_8957 = state_8950;
(statearr_8957[(8)] = inst_8936__$1);

return statearr_8957;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8950__$1,(8),jobs,inst_8939);
} else {
if((state_val_8951 === (7))){
var inst_8946 = (state_8950[(2)]);
var state_8950__$1 = state_8950;
var statearr_8958_9070 = state_8950__$1;
(statearr_8958_9070[(2)] = inst_8946);

(statearr_8958_9070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8951 === (8))){
var inst_8936 = (state_8950[(8)]);
var inst_8941 = (state_8950[(2)]);
var state_8950__$1 = (function (){var statearr_8959 = state_8950;
(statearr_8959[(9)] = inst_8941);

return statearr_8959;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8950__$1,(9),results,inst_8936);
} else {
if((state_val_8951 === (9))){
var inst_8943 = (state_8950[(2)]);
var state_8950__$1 = (function (){var statearr_8960 = state_8950;
(statearr_8960[(10)] = inst_8943);

return statearr_8960;
})();
var statearr_8961_9071 = state_8950__$1;
(statearr_8961_9071[(2)] = null);

(statearr_8961_9071[(1)] = (2));


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
});})(c__8489__auto___9065,jobs,results,process,async))
;
return ((function (switch__8377__auto__,c__8489__auto___9065,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8378__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8378__auto____0 = (function (){
var statearr_8965 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8965[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8378__auto__);

(statearr_8965[(1)] = (1));

return statearr_8965;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8378__auto____1 = (function (state_8950){
while(true){
var ret_value__8379__auto__ = (function (){try{while(true){
var result__8380__auto__ = switch__8377__auto__.call(null,state_8950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8380__auto__;
}
break;
}
}catch (e8966){if((e8966 instanceof Object)){
var ex__8381__auto__ = e8966;
var statearr_8967_9072 = state_8950;
(statearr_8967_9072[(5)] = ex__8381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9073 = state_8950;
state_8950 = G__9073;
continue;
} else {
return ret_value__8379__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8378__auto__ = function(state_8950){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8378__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8378__auto____1.call(this,state_8950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8378__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8378__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8378__auto__;
})()
;})(switch__8377__auto__,c__8489__auto___9065,jobs,results,process,async))
})();
var state__8491__auto__ = (function (){var statearr_8968 = f__8490__auto__.call(null);
(statearr_8968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8489__auto___9065);

return statearr_8968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8491__auto__);
});})(c__8489__auto___9065,jobs,results,process,async))
);


var c__8489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8489__auto__,jobs,results,process,async){
return (function (){
var f__8490__auto__ = (function (){var switch__8377__auto__ = ((function (c__8489__auto__,jobs,results,process,async){
return (function (state_9006){
var state_val_9007 = (state_9006[(1)]);
if((state_val_9007 === (7))){
var inst_9002 = (state_9006[(2)]);
var state_9006__$1 = state_9006;
var statearr_9008_9074 = state_9006__$1;
(statearr_9008_9074[(2)] = inst_9002);

(statearr_9008_9074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9007 === (20))){
var state_9006__$1 = state_9006;
var statearr_9009_9075 = state_9006__$1;
(statearr_9009_9075[(2)] = null);

(statearr_9009_9075[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9007 === (1))){
var state_9006__$1 = state_9006;
var statearr_9010_9076 = state_9006__$1;
(statearr_9010_9076[(2)] = null);

(statearr_9010_9076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9007 === (4))){
var inst_8971 = (state_9006[(7)]);
var inst_8971__$1 = (state_9006[(2)]);
var inst_8972 = (inst_8971__$1 == null);
var state_9006__$1 = (function (){var statearr_9011 = state_9006;
(statearr_9011[(7)] = inst_8971__$1);

return statearr_9011;
})();
if(cljs.core.truth_(inst_8972)){
var statearr_9012_9077 = state_9006__$1;
(statearr_9012_9077[(1)] = (5));

} else {
var statearr_9013_9078 = state_9006__$1;
(statearr_9013_9078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9007 === (15))){
var inst_8984 = (state_9006[(8)]);
var state_9006__$1 = state_9006;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9006__$1,(18),to,inst_8984);
} else {
if((state_val_9007 === (21))){
var inst_8997 = (state_9006[(2)]);
var state_9006__$1 = state_9006;
var statearr_9014_9079 = state_9006__$1;
(statearr_9014_9079[(2)] = inst_8997);

(statearr_9014_9079[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9007 === (13))){
var inst_8999 = (state_9006[(2)]);
var state_9006__$1 = (function (){var statearr_9015 = state_9006;
(statearr_9015[(9)] = inst_8999);

return statearr_9015;
})();
var statearr_9016_9080 = state_9006__$1;
(statearr_9016_9080[(2)] = null);

(statearr_9016_9080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9007 === (6))){
var inst_8971 = (state_9006[(7)]);
var state_9006__$1 = state_9006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9006__$1,(11),inst_8971);
} else {
if((state_val_9007 === (17))){
var inst_8992 = (state_9006[(2)]);
var state_9006__$1 = state_9006;
if(cljs.core.truth_(inst_8992)){
var statearr_9017_9081 = state_9006__$1;
(statearr_9017_9081[(1)] = (19));

} else {
var statearr_9018_9082 = state_9006__$1;
(statearr_9018_9082[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9007 === (3))){
var inst_9004 = (state_9006[(2)]);
var state_9006__$1 = state_9006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9006__$1,inst_9004);
} else {
if((state_val_9007 === (12))){
var inst_8981 = (state_9006[(10)]);
var state_9006__$1 = state_9006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9006__$1,(14),inst_8981);
} else {
if((state_val_9007 === (2))){
var state_9006__$1 = state_9006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9006__$1,(4),results);
} else {
if((state_val_9007 === (19))){
var state_9006__$1 = state_9006;
var statearr_9019_9083 = state_9006__$1;
(statearr_9019_9083[(2)] = null);

(statearr_9019_9083[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9007 === (11))){
var inst_8981 = (state_9006[(2)]);
var state_9006__$1 = (function (){var statearr_9020 = state_9006;
(statearr_9020[(10)] = inst_8981);

return statearr_9020;
})();
var statearr_9021_9084 = state_9006__$1;
(statearr_9021_9084[(2)] = null);

(statearr_9021_9084[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9007 === (9))){
var state_9006__$1 = state_9006;
var statearr_9022_9085 = state_9006__$1;
(statearr_9022_9085[(2)] = null);

(statearr_9022_9085[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9007 === (5))){
var state_9006__$1 = state_9006;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9023_9086 = state_9006__$1;
(statearr_9023_9086[(1)] = (8));

} else {
var statearr_9024_9087 = state_9006__$1;
(statearr_9024_9087[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9007 === (14))){
var inst_8984 = (state_9006[(8)]);
var inst_8986 = (state_9006[(11)]);
var inst_8984__$1 = (state_9006[(2)]);
var inst_8985 = (inst_8984__$1 == null);
var inst_8986__$1 = cljs.core.not.call(null,inst_8985);
var state_9006__$1 = (function (){var statearr_9025 = state_9006;
(statearr_9025[(8)] = inst_8984__$1);

(statearr_9025[(11)] = inst_8986__$1);

return statearr_9025;
})();
if(inst_8986__$1){
var statearr_9026_9088 = state_9006__$1;
(statearr_9026_9088[(1)] = (15));

} else {
var statearr_9027_9089 = state_9006__$1;
(statearr_9027_9089[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9007 === (16))){
var inst_8986 = (state_9006[(11)]);
var state_9006__$1 = state_9006;
var statearr_9028_9090 = state_9006__$1;
(statearr_9028_9090[(2)] = inst_8986);

(statearr_9028_9090[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9007 === (10))){
var inst_8978 = (state_9006[(2)]);
var state_9006__$1 = state_9006;
var statearr_9029_9091 = state_9006__$1;
(statearr_9029_9091[(2)] = inst_8978);

(statearr_9029_9091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9007 === (18))){
var inst_8989 = (state_9006[(2)]);
var state_9006__$1 = state_9006;
var statearr_9030_9092 = state_9006__$1;
(statearr_9030_9092[(2)] = inst_8989);

(statearr_9030_9092[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9007 === (8))){
var inst_8975 = cljs.core.async.close_BANG_.call(null,to);
var state_9006__$1 = state_9006;
var statearr_9031_9093 = state_9006__$1;
(statearr_9031_9093[(2)] = inst_8975);

(statearr_9031_9093[(1)] = (10));


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
});})(c__8489__auto__,jobs,results,process,async))
;
return ((function (switch__8377__auto__,c__8489__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8378__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8378__auto____0 = (function (){
var statearr_9035 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9035[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8378__auto__);

(statearr_9035[(1)] = (1));

return statearr_9035;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8378__auto____1 = (function (state_9006){
while(true){
var ret_value__8379__auto__ = (function (){try{while(true){
var result__8380__auto__ = switch__8377__auto__.call(null,state_9006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8380__auto__;
}
break;
}
}catch (e9036){if((e9036 instanceof Object)){
var ex__8381__auto__ = e9036;
var statearr_9037_9094 = state_9006;
(statearr_9037_9094[(5)] = ex__8381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9095 = state_9006;
state_9006 = G__9095;
continue;
} else {
return ret_value__8379__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8378__auto__ = function(state_9006){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8378__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8378__auto____1.call(this,state_9006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8378__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8378__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8378__auto__;
})()
;})(switch__8377__auto__,c__8489__auto__,jobs,results,process,async))
})();
var state__8491__auto__ = (function (){var statearr_9038 = f__8490__auto__.call(null);
(statearr_9038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8489__auto__);

return statearr_9038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8491__auto__);
});})(c__8489__auto__,jobs,results,process,async))
);

return c__8489__auto__;
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
var args9096 = [];
var len__5726__auto___9099 = arguments.length;
var i__5727__auto___9100 = (0);
while(true){
if((i__5727__auto___9100 < len__5726__auto___9099)){
args9096.push((arguments[i__5727__auto___9100]));

var G__9101 = (i__5727__auto___9100 + (1));
i__5727__auto___9100 = G__9101;
continue;
} else {
}
break;
}

var G__9098 = args9096.length;
switch (G__9098) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9096.length)].join('')));

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
var args9103 = [];
var len__5726__auto___9106 = arguments.length;
var i__5727__auto___9107 = (0);
while(true){
if((i__5727__auto___9107 < len__5726__auto___9106)){
args9103.push((arguments[i__5727__auto___9107]));

var G__9108 = (i__5727__auto___9107 + (1));
i__5727__auto___9107 = G__9108;
continue;
} else {
}
break;
}

var G__9105 = args9103.length;
switch (G__9105) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9103.length)].join('')));

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
var args9110 = [];
var len__5726__auto___9163 = arguments.length;
var i__5727__auto___9164 = (0);
while(true){
if((i__5727__auto___9164 < len__5726__auto___9163)){
args9110.push((arguments[i__5727__auto___9164]));

var G__9165 = (i__5727__auto___9164 + (1));
i__5727__auto___9164 = G__9165;
continue;
} else {
}
break;
}

var G__9112 = args9110.length;
switch (G__9112) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9110.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__8489__auto___9167 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8489__auto___9167,tc,fc){
return (function (){
var f__8490__auto__ = (function (){var switch__8377__auto__ = ((function (c__8489__auto___9167,tc,fc){
return (function (state_9138){
var state_val_9139 = (state_9138[(1)]);
if((state_val_9139 === (7))){
var inst_9134 = (state_9138[(2)]);
var state_9138__$1 = state_9138;
var statearr_9140_9168 = state_9138__$1;
(statearr_9140_9168[(2)] = inst_9134);

(statearr_9140_9168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9139 === (1))){
var state_9138__$1 = state_9138;
var statearr_9141_9169 = state_9138__$1;
(statearr_9141_9169[(2)] = null);

(statearr_9141_9169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9139 === (4))){
var inst_9115 = (state_9138[(7)]);
var inst_9115__$1 = (state_9138[(2)]);
var inst_9116 = (inst_9115__$1 == null);
var state_9138__$1 = (function (){var statearr_9142 = state_9138;
(statearr_9142[(7)] = inst_9115__$1);

return statearr_9142;
})();
if(cljs.core.truth_(inst_9116)){
var statearr_9143_9170 = state_9138__$1;
(statearr_9143_9170[(1)] = (5));

} else {
var statearr_9144_9171 = state_9138__$1;
(statearr_9144_9171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9139 === (13))){
var state_9138__$1 = state_9138;
var statearr_9145_9172 = state_9138__$1;
(statearr_9145_9172[(2)] = null);

(statearr_9145_9172[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9139 === (6))){
var inst_9115 = (state_9138[(7)]);
var inst_9121 = p.call(null,inst_9115);
var state_9138__$1 = state_9138;
if(cljs.core.truth_(inst_9121)){
var statearr_9146_9173 = state_9138__$1;
(statearr_9146_9173[(1)] = (9));

} else {
var statearr_9147_9174 = state_9138__$1;
(statearr_9147_9174[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9139 === (3))){
var inst_9136 = (state_9138[(2)]);
var state_9138__$1 = state_9138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9138__$1,inst_9136);
} else {
if((state_val_9139 === (12))){
var state_9138__$1 = state_9138;
var statearr_9148_9175 = state_9138__$1;
(statearr_9148_9175[(2)] = null);

(statearr_9148_9175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9139 === (2))){
var state_9138__$1 = state_9138;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9138__$1,(4),ch);
} else {
if((state_val_9139 === (11))){
var inst_9115 = (state_9138[(7)]);
var inst_9125 = (state_9138[(2)]);
var state_9138__$1 = state_9138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9138__$1,(8),inst_9125,inst_9115);
} else {
if((state_val_9139 === (9))){
var state_9138__$1 = state_9138;
var statearr_9149_9176 = state_9138__$1;
(statearr_9149_9176[(2)] = tc);

(statearr_9149_9176[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9139 === (5))){
var inst_9118 = cljs.core.async.close_BANG_.call(null,tc);
var inst_9119 = cljs.core.async.close_BANG_.call(null,fc);
var state_9138__$1 = (function (){var statearr_9150 = state_9138;
(statearr_9150[(8)] = inst_9118);

return statearr_9150;
})();
var statearr_9151_9177 = state_9138__$1;
(statearr_9151_9177[(2)] = inst_9119);

(statearr_9151_9177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9139 === (14))){
var inst_9132 = (state_9138[(2)]);
var state_9138__$1 = state_9138;
var statearr_9152_9178 = state_9138__$1;
(statearr_9152_9178[(2)] = inst_9132);

(statearr_9152_9178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9139 === (10))){
var state_9138__$1 = state_9138;
var statearr_9153_9179 = state_9138__$1;
(statearr_9153_9179[(2)] = fc);

(statearr_9153_9179[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9139 === (8))){
var inst_9127 = (state_9138[(2)]);
var state_9138__$1 = state_9138;
if(cljs.core.truth_(inst_9127)){
var statearr_9154_9180 = state_9138__$1;
(statearr_9154_9180[(1)] = (12));

} else {
var statearr_9155_9181 = state_9138__$1;
(statearr_9155_9181[(1)] = (13));

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
});})(c__8489__auto___9167,tc,fc))
;
return ((function (switch__8377__auto__,c__8489__auto___9167,tc,fc){
return (function() {
var cljs$core$async$state_machine__8378__auto__ = null;
var cljs$core$async$state_machine__8378__auto____0 = (function (){
var statearr_9159 = [null,null,null,null,null,null,null,null,null];
(statearr_9159[(0)] = cljs$core$async$state_machine__8378__auto__);

(statearr_9159[(1)] = (1));

return statearr_9159;
});
var cljs$core$async$state_machine__8378__auto____1 = (function (state_9138){
while(true){
var ret_value__8379__auto__ = (function (){try{while(true){
var result__8380__auto__ = switch__8377__auto__.call(null,state_9138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8380__auto__;
}
break;
}
}catch (e9160){if((e9160 instanceof Object)){
var ex__8381__auto__ = e9160;
var statearr_9161_9182 = state_9138;
(statearr_9161_9182[(5)] = ex__8381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9183 = state_9138;
state_9138 = G__9183;
continue;
} else {
return ret_value__8379__auto__;
}
break;
}
});
cljs$core$async$state_machine__8378__auto__ = function(state_9138){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8378__auto____1.call(this,state_9138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8378__auto____0;
cljs$core$async$state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8378__auto____1;
return cljs$core$async$state_machine__8378__auto__;
})()
;})(switch__8377__auto__,c__8489__auto___9167,tc,fc))
})();
var state__8491__auto__ = (function (){var statearr_9162 = f__8490__auto__.call(null);
(statearr_9162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8489__auto___9167);

return statearr_9162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8491__auto__);
});})(c__8489__auto___9167,tc,fc))
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
var c__8489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8489__auto__){
return (function (){
var f__8490__auto__ = (function (){var switch__8377__auto__ = ((function (c__8489__auto__){
return (function (state_9247){
var state_val_9248 = (state_9247[(1)]);
if((state_val_9248 === (7))){
var inst_9243 = (state_9247[(2)]);
var state_9247__$1 = state_9247;
var statearr_9249_9270 = state_9247__$1;
(statearr_9249_9270[(2)] = inst_9243);

(statearr_9249_9270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9248 === (1))){
var inst_9227 = init;
var state_9247__$1 = (function (){var statearr_9250 = state_9247;
(statearr_9250[(7)] = inst_9227);

return statearr_9250;
})();
var statearr_9251_9271 = state_9247__$1;
(statearr_9251_9271[(2)] = null);

(statearr_9251_9271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9248 === (4))){
var inst_9230 = (state_9247[(8)]);
var inst_9230__$1 = (state_9247[(2)]);
var inst_9231 = (inst_9230__$1 == null);
var state_9247__$1 = (function (){var statearr_9252 = state_9247;
(statearr_9252[(8)] = inst_9230__$1);

return statearr_9252;
})();
if(cljs.core.truth_(inst_9231)){
var statearr_9253_9272 = state_9247__$1;
(statearr_9253_9272[(1)] = (5));

} else {
var statearr_9254_9273 = state_9247__$1;
(statearr_9254_9273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9248 === (6))){
var inst_9227 = (state_9247[(7)]);
var inst_9234 = (state_9247[(9)]);
var inst_9230 = (state_9247[(8)]);
var inst_9234__$1 = f.call(null,inst_9227,inst_9230);
var inst_9235 = cljs.core.reduced_QMARK_.call(null,inst_9234__$1);
var state_9247__$1 = (function (){var statearr_9255 = state_9247;
(statearr_9255[(9)] = inst_9234__$1);

return statearr_9255;
})();
if(inst_9235){
var statearr_9256_9274 = state_9247__$1;
(statearr_9256_9274[(1)] = (8));

} else {
var statearr_9257_9275 = state_9247__$1;
(statearr_9257_9275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9248 === (3))){
var inst_9245 = (state_9247[(2)]);
var state_9247__$1 = state_9247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9247__$1,inst_9245);
} else {
if((state_val_9248 === (2))){
var state_9247__$1 = state_9247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9247__$1,(4),ch);
} else {
if((state_val_9248 === (9))){
var inst_9234 = (state_9247[(9)]);
var inst_9227 = inst_9234;
var state_9247__$1 = (function (){var statearr_9258 = state_9247;
(statearr_9258[(7)] = inst_9227);

return statearr_9258;
})();
var statearr_9259_9276 = state_9247__$1;
(statearr_9259_9276[(2)] = null);

(statearr_9259_9276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9248 === (5))){
var inst_9227 = (state_9247[(7)]);
var state_9247__$1 = state_9247;
var statearr_9260_9277 = state_9247__$1;
(statearr_9260_9277[(2)] = inst_9227);

(statearr_9260_9277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9248 === (10))){
var inst_9241 = (state_9247[(2)]);
var state_9247__$1 = state_9247;
var statearr_9261_9278 = state_9247__$1;
(statearr_9261_9278[(2)] = inst_9241);

(statearr_9261_9278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9248 === (8))){
var inst_9234 = (state_9247[(9)]);
var inst_9237 = cljs.core.deref.call(null,inst_9234);
var state_9247__$1 = state_9247;
var statearr_9262_9279 = state_9247__$1;
(statearr_9262_9279[(2)] = inst_9237);

(statearr_9262_9279[(1)] = (10));


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
});})(c__8489__auto__))
;
return ((function (switch__8377__auto__,c__8489__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__8378__auto__ = null;
var cljs$core$async$reduce_$_state_machine__8378__auto____0 = (function (){
var statearr_9266 = [null,null,null,null,null,null,null,null,null,null];
(statearr_9266[(0)] = cljs$core$async$reduce_$_state_machine__8378__auto__);

(statearr_9266[(1)] = (1));

return statearr_9266;
});
var cljs$core$async$reduce_$_state_machine__8378__auto____1 = (function (state_9247){
while(true){
var ret_value__8379__auto__ = (function (){try{while(true){
var result__8380__auto__ = switch__8377__auto__.call(null,state_9247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8380__auto__;
}
break;
}
}catch (e9267){if((e9267 instanceof Object)){
var ex__8381__auto__ = e9267;
var statearr_9268_9280 = state_9247;
(statearr_9268_9280[(5)] = ex__8381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9281 = state_9247;
state_9247 = G__9281;
continue;
} else {
return ret_value__8379__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__8378__auto__ = function(state_9247){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__8378__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__8378__auto____1.call(this,state_9247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__8378__auto____0;
cljs$core$async$reduce_$_state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__8378__auto____1;
return cljs$core$async$reduce_$_state_machine__8378__auto__;
})()
;})(switch__8377__auto__,c__8489__auto__))
})();
var state__8491__auto__ = (function (){var statearr_9269 = f__8490__auto__.call(null);
(statearr_9269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8489__auto__);

return statearr_9269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8491__auto__);
});})(c__8489__auto__))
);

return c__8489__auto__;
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
var args9282 = [];
var len__5726__auto___9334 = arguments.length;
var i__5727__auto___9335 = (0);
while(true){
if((i__5727__auto___9335 < len__5726__auto___9334)){
args9282.push((arguments[i__5727__auto___9335]));

var G__9336 = (i__5727__auto___9335 + (1));
i__5727__auto___9335 = G__9336;
continue;
} else {
}
break;
}

var G__9284 = args9282.length;
switch (G__9284) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9282.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__8489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8489__auto__){
return (function (){
var f__8490__auto__ = (function (){var switch__8377__auto__ = ((function (c__8489__auto__){
return (function (state_9309){
var state_val_9310 = (state_9309[(1)]);
if((state_val_9310 === (7))){
var inst_9291 = (state_9309[(2)]);
var state_9309__$1 = state_9309;
var statearr_9311_9338 = state_9309__$1;
(statearr_9311_9338[(2)] = inst_9291);

(statearr_9311_9338[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9310 === (1))){
var inst_9285 = cljs.core.seq.call(null,coll);
var inst_9286 = inst_9285;
var state_9309__$1 = (function (){var statearr_9312 = state_9309;
(statearr_9312[(7)] = inst_9286);

return statearr_9312;
})();
var statearr_9313_9339 = state_9309__$1;
(statearr_9313_9339[(2)] = null);

(statearr_9313_9339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9310 === (4))){
var inst_9286 = (state_9309[(7)]);
var inst_9289 = cljs.core.first.call(null,inst_9286);
var state_9309__$1 = state_9309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9309__$1,(7),ch,inst_9289);
} else {
if((state_val_9310 === (13))){
var inst_9303 = (state_9309[(2)]);
var state_9309__$1 = state_9309;
var statearr_9314_9340 = state_9309__$1;
(statearr_9314_9340[(2)] = inst_9303);

(statearr_9314_9340[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9310 === (6))){
var inst_9294 = (state_9309[(2)]);
var state_9309__$1 = state_9309;
if(cljs.core.truth_(inst_9294)){
var statearr_9315_9341 = state_9309__$1;
(statearr_9315_9341[(1)] = (8));

} else {
var statearr_9316_9342 = state_9309__$1;
(statearr_9316_9342[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9310 === (3))){
var inst_9307 = (state_9309[(2)]);
var state_9309__$1 = state_9309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9309__$1,inst_9307);
} else {
if((state_val_9310 === (12))){
var state_9309__$1 = state_9309;
var statearr_9317_9343 = state_9309__$1;
(statearr_9317_9343[(2)] = null);

(statearr_9317_9343[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9310 === (2))){
var inst_9286 = (state_9309[(7)]);
var state_9309__$1 = state_9309;
if(cljs.core.truth_(inst_9286)){
var statearr_9318_9344 = state_9309__$1;
(statearr_9318_9344[(1)] = (4));

} else {
var statearr_9319_9345 = state_9309__$1;
(statearr_9319_9345[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9310 === (11))){
var inst_9300 = cljs.core.async.close_BANG_.call(null,ch);
var state_9309__$1 = state_9309;
var statearr_9320_9346 = state_9309__$1;
(statearr_9320_9346[(2)] = inst_9300);

(statearr_9320_9346[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9310 === (9))){
var state_9309__$1 = state_9309;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9321_9347 = state_9309__$1;
(statearr_9321_9347[(1)] = (11));

} else {
var statearr_9322_9348 = state_9309__$1;
(statearr_9322_9348[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9310 === (5))){
var inst_9286 = (state_9309[(7)]);
var state_9309__$1 = state_9309;
var statearr_9323_9349 = state_9309__$1;
(statearr_9323_9349[(2)] = inst_9286);

(statearr_9323_9349[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9310 === (10))){
var inst_9305 = (state_9309[(2)]);
var state_9309__$1 = state_9309;
var statearr_9324_9350 = state_9309__$1;
(statearr_9324_9350[(2)] = inst_9305);

(statearr_9324_9350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9310 === (8))){
var inst_9286 = (state_9309[(7)]);
var inst_9296 = cljs.core.next.call(null,inst_9286);
var inst_9286__$1 = inst_9296;
var state_9309__$1 = (function (){var statearr_9325 = state_9309;
(statearr_9325[(7)] = inst_9286__$1);

return statearr_9325;
})();
var statearr_9326_9351 = state_9309__$1;
(statearr_9326_9351[(2)] = null);

(statearr_9326_9351[(1)] = (2));


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
});})(c__8489__auto__))
;
return ((function (switch__8377__auto__,c__8489__auto__){
return (function() {
var cljs$core$async$state_machine__8378__auto__ = null;
var cljs$core$async$state_machine__8378__auto____0 = (function (){
var statearr_9330 = [null,null,null,null,null,null,null,null];
(statearr_9330[(0)] = cljs$core$async$state_machine__8378__auto__);

(statearr_9330[(1)] = (1));

return statearr_9330;
});
var cljs$core$async$state_machine__8378__auto____1 = (function (state_9309){
while(true){
var ret_value__8379__auto__ = (function (){try{while(true){
var result__8380__auto__ = switch__8377__auto__.call(null,state_9309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8380__auto__;
}
break;
}
}catch (e9331){if((e9331 instanceof Object)){
var ex__8381__auto__ = e9331;
var statearr_9332_9352 = state_9309;
(statearr_9332_9352[(5)] = ex__8381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9353 = state_9309;
state_9309 = G__9353;
continue;
} else {
return ret_value__8379__auto__;
}
break;
}
});
cljs$core$async$state_machine__8378__auto__ = function(state_9309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8378__auto____1.call(this,state_9309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8378__auto____0;
cljs$core$async$state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8378__auto____1;
return cljs$core$async$state_machine__8378__auto__;
})()
;})(switch__8377__auto__,c__8489__auto__))
})();
var state__8491__auto__ = (function (){var statearr_9333 = f__8490__auto__.call(null);
(statearr_9333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8489__auto__);

return statearr_9333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8491__auto__);
});})(c__8489__auto__))
);

return c__8489__auto__;
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
var x__5323__auto__ = (((_ == null))?null:_);
var m__5324__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,_);
} else {
var m__5324__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,_);
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
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5324__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,ch);
} else {
var m__5324__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,ch);
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
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m);
} else {
var m__5324__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async9575 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9575 = (function (mult,ch,cs,meta9576){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta9576 = meta9576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_9577,meta9576__$1){
var self__ = this;
var _9577__$1 = this;
return (new cljs.core.async.t_cljs$core$async9575(self__.mult,self__.ch,self__.cs,meta9576__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async9575.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_9577){
var self__ = this;
var _9577__$1 = this;
return self__.meta9576;
});})(cs))
;

cljs.core.async.t_cljs$core$async9575.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async9575.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async9575.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async9575.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9575.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9575.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9575.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta9576","meta9576",-891641360,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async9575.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9575";

cljs.core.async.t_cljs$core$async9575.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9575");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async9575 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async9575(mult__$1,ch__$1,cs__$1,meta9576){
return (new cljs.core.async.t_cljs$core$async9575(mult__$1,ch__$1,cs__$1,meta9576));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async9575(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__8489__auto___9796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8489__auto___9796,cs,m,dchan,dctr,done){
return (function (){
var f__8490__auto__ = (function (){var switch__8377__auto__ = ((function (c__8489__auto___9796,cs,m,dchan,dctr,done){
return (function (state_9708){
var state_val_9709 = (state_9708[(1)]);
if((state_val_9709 === (7))){
var inst_9704 = (state_9708[(2)]);
var state_9708__$1 = state_9708;
var statearr_9710_9797 = state_9708__$1;
(statearr_9710_9797[(2)] = inst_9704);

(statearr_9710_9797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (20))){
var inst_9609 = (state_9708[(7)]);
var inst_9619 = cljs.core.first.call(null,inst_9609);
var inst_9620 = cljs.core.nth.call(null,inst_9619,(0),null);
var inst_9621 = cljs.core.nth.call(null,inst_9619,(1),null);
var state_9708__$1 = (function (){var statearr_9711 = state_9708;
(statearr_9711[(8)] = inst_9620);

return statearr_9711;
})();
if(cljs.core.truth_(inst_9621)){
var statearr_9712_9798 = state_9708__$1;
(statearr_9712_9798[(1)] = (22));

} else {
var statearr_9713_9799 = state_9708__$1;
(statearr_9713_9799[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (27))){
var inst_9580 = (state_9708[(9)]);
var inst_9656 = (state_9708[(10)]);
var inst_9651 = (state_9708[(11)]);
var inst_9649 = (state_9708[(12)]);
var inst_9656__$1 = cljs.core._nth.call(null,inst_9649,inst_9651);
var inst_9657 = cljs.core.async.put_BANG_.call(null,inst_9656__$1,inst_9580,done);
var state_9708__$1 = (function (){var statearr_9714 = state_9708;
(statearr_9714[(10)] = inst_9656__$1);

return statearr_9714;
})();
if(cljs.core.truth_(inst_9657)){
var statearr_9715_9800 = state_9708__$1;
(statearr_9715_9800[(1)] = (30));

} else {
var statearr_9716_9801 = state_9708__$1;
(statearr_9716_9801[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (1))){
var state_9708__$1 = state_9708;
var statearr_9717_9802 = state_9708__$1;
(statearr_9717_9802[(2)] = null);

(statearr_9717_9802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (24))){
var inst_9609 = (state_9708[(7)]);
var inst_9626 = (state_9708[(2)]);
var inst_9627 = cljs.core.next.call(null,inst_9609);
var inst_9589 = inst_9627;
var inst_9590 = null;
var inst_9591 = (0);
var inst_9592 = (0);
var state_9708__$1 = (function (){var statearr_9718 = state_9708;
(statearr_9718[(13)] = inst_9590);

(statearr_9718[(14)] = inst_9591);

(statearr_9718[(15)] = inst_9592);

(statearr_9718[(16)] = inst_9626);

(statearr_9718[(17)] = inst_9589);

return statearr_9718;
})();
var statearr_9719_9803 = state_9708__$1;
(statearr_9719_9803[(2)] = null);

(statearr_9719_9803[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (39))){
var state_9708__$1 = state_9708;
var statearr_9723_9804 = state_9708__$1;
(statearr_9723_9804[(2)] = null);

(statearr_9723_9804[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (4))){
var inst_9580 = (state_9708[(9)]);
var inst_9580__$1 = (state_9708[(2)]);
var inst_9581 = (inst_9580__$1 == null);
var state_9708__$1 = (function (){var statearr_9724 = state_9708;
(statearr_9724[(9)] = inst_9580__$1);

return statearr_9724;
})();
if(cljs.core.truth_(inst_9581)){
var statearr_9725_9805 = state_9708__$1;
(statearr_9725_9805[(1)] = (5));

} else {
var statearr_9726_9806 = state_9708__$1;
(statearr_9726_9806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (15))){
var inst_9590 = (state_9708[(13)]);
var inst_9591 = (state_9708[(14)]);
var inst_9592 = (state_9708[(15)]);
var inst_9589 = (state_9708[(17)]);
var inst_9605 = (state_9708[(2)]);
var inst_9606 = (inst_9592 + (1));
var tmp9720 = inst_9590;
var tmp9721 = inst_9591;
var tmp9722 = inst_9589;
var inst_9589__$1 = tmp9722;
var inst_9590__$1 = tmp9720;
var inst_9591__$1 = tmp9721;
var inst_9592__$1 = inst_9606;
var state_9708__$1 = (function (){var statearr_9727 = state_9708;
(statearr_9727[(18)] = inst_9605);

(statearr_9727[(13)] = inst_9590__$1);

(statearr_9727[(14)] = inst_9591__$1);

(statearr_9727[(15)] = inst_9592__$1);

(statearr_9727[(17)] = inst_9589__$1);

return statearr_9727;
})();
var statearr_9728_9807 = state_9708__$1;
(statearr_9728_9807[(2)] = null);

(statearr_9728_9807[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (21))){
var inst_9630 = (state_9708[(2)]);
var state_9708__$1 = state_9708;
var statearr_9732_9808 = state_9708__$1;
(statearr_9732_9808[(2)] = inst_9630);

(statearr_9732_9808[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (31))){
var inst_9656 = (state_9708[(10)]);
var inst_9660 = done.call(null,null);
var inst_9661 = cljs.core.async.untap_STAR_.call(null,m,inst_9656);
var state_9708__$1 = (function (){var statearr_9733 = state_9708;
(statearr_9733[(19)] = inst_9660);

return statearr_9733;
})();
var statearr_9734_9809 = state_9708__$1;
(statearr_9734_9809[(2)] = inst_9661);

(statearr_9734_9809[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (32))){
var inst_9648 = (state_9708[(20)]);
var inst_9651 = (state_9708[(11)]);
var inst_9649 = (state_9708[(12)]);
var inst_9650 = (state_9708[(21)]);
var inst_9663 = (state_9708[(2)]);
var inst_9664 = (inst_9651 + (1));
var tmp9729 = inst_9648;
var tmp9730 = inst_9649;
var tmp9731 = inst_9650;
var inst_9648__$1 = tmp9729;
var inst_9649__$1 = tmp9730;
var inst_9650__$1 = tmp9731;
var inst_9651__$1 = inst_9664;
var state_9708__$1 = (function (){var statearr_9735 = state_9708;
(statearr_9735[(20)] = inst_9648__$1);

(statearr_9735[(22)] = inst_9663);

(statearr_9735[(11)] = inst_9651__$1);

(statearr_9735[(12)] = inst_9649__$1);

(statearr_9735[(21)] = inst_9650__$1);

return statearr_9735;
})();
var statearr_9736_9810 = state_9708__$1;
(statearr_9736_9810[(2)] = null);

(statearr_9736_9810[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (40))){
var inst_9676 = (state_9708[(23)]);
var inst_9680 = done.call(null,null);
var inst_9681 = cljs.core.async.untap_STAR_.call(null,m,inst_9676);
var state_9708__$1 = (function (){var statearr_9737 = state_9708;
(statearr_9737[(24)] = inst_9680);

return statearr_9737;
})();
var statearr_9738_9811 = state_9708__$1;
(statearr_9738_9811[(2)] = inst_9681);

(statearr_9738_9811[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (33))){
var inst_9667 = (state_9708[(25)]);
var inst_9669 = cljs.core.chunked_seq_QMARK_.call(null,inst_9667);
var state_9708__$1 = state_9708;
if(inst_9669){
var statearr_9739_9812 = state_9708__$1;
(statearr_9739_9812[(1)] = (36));

} else {
var statearr_9740_9813 = state_9708__$1;
(statearr_9740_9813[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (13))){
var inst_9599 = (state_9708[(26)]);
var inst_9602 = cljs.core.async.close_BANG_.call(null,inst_9599);
var state_9708__$1 = state_9708;
var statearr_9741_9814 = state_9708__$1;
(statearr_9741_9814[(2)] = inst_9602);

(statearr_9741_9814[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (22))){
var inst_9620 = (state_9708[(8)]);
var inst_9623 = cljs.core.async.close_BANG_.call(null,inst_9620);
var state_9708__$1 = state_9708;
var statearr_9742_9815 = state_9708__$1;
(statearr_9742_9815[(2)] = inst_9623);

(statearr_9742_9815[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (36))){
var inst_9667 = (state_9708[(25)]);
var inst_9671 = cljs.core.chunk_first.call(null,inst_9667);
var inst_9672 = cljs.core.chunk_rest.call(null,inst_9667);
var inst_9673 = cljs.core.count.call(null,inst_9671);
var inst_9648 = inst_9672;
var inst_9649 = inst_9671;
var inst_9650 = inst_9673;
var inst_9651 = (0);
var state_9708__$1 = (function (){var statearr_9743 = state_9708;
(statearr_9743[(20)] = inst_9648);

(statearr_9743[(11)] = inst_9651);

(statearr_9743[(12)] = inst_9649);

(statearr_9743[(21)] = inst_9650);

return statearr_9743;
})();
var statearr_9744_9816 = state_9708__$1;
(statearr_9744_9816[(2)] = null);

(statearr_9744_9816[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (41))){
var inst_9667 = (state_9708[(25)]);
var inst_9683 = (state_9708[(2)]);
var inst_9684 = cljs.core.next.call(null,inst_9667);
var inst_9648 = inst_9684;
var inst_9649 = null;
var inst_9650 = (0);
var inst_9651 = (0);
var state_9708__$1 = (function (){var statearr_9745 = state_9708;
(statearr_9745[(20)] = inst_9648);

(statearr_9745[(27)] = inst_9683);

(statearr_9745[(11)] = inst_9651);

(statearr_9745[(12)] = inst_9649);

(statearr_9745[(21)] = inst_9650);

return statearr_9745;
})();
var statearr_9746_9817 = state_9708__$1;
(statearr_9746_9817[(2)] = null);

(statearr_9746_9817[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (43))){
var state_9708__$1 = state_9708;
var statearr_9747_9818 = state_9708__$1;
(statearr_9747_9818[(2)] = null);

(statearr_9747_9818[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (29))){
var inst_9692 = (state_9708[(2)]);
var state_9708__$1 = state_9708;
var statearr_9748_9819 = state_9708__$1;
(statearr_9748_9819[(2)] = inst_9692);

(statearr_9748_9819[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (44))){
var inst_9701 = (state_9708[(2)]);
var state_9708__$1 = (function (){var statearr_9749 = state_9708;
(statearr_9749[(28)] = inst_9701);

return statearr_9749;
})();
var statearr_9750_9820 = state_9708__$1;
(statearr_9750_9820[(2)] = null);

(statearr_9750_9820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (6))){
var inst_9640 = (state_9708[(29)]);
var inst_9639 = cljs.core.deref.call(null,cs);
var inst_9640__$1 = cljs.core.keys.call(null,inst_9639);
var inst_9641 = cljs.core.count.call(null,inst_9640__$1);
var inst_9642 = cljs.core.reset_BANG_.call(null,dctr,inst_9641);
var inst_9647 = cljs.core.seq.call(null,inst_9640__$1);
var inst_9648 = inst_9647;
var inst_9649 = null;
var inst_9650 = (0);
var inst_9651 = (0);
var state_9708__$1 = (function (){var statearr_9751 = state_9708;
(statearr_9751[(29)] = inst_9640__$1);

(statearr_9751[(20)] = inst_9648);

(statearr_9751[(11)] = inst_9651);

(statearr_9751[(30)] = inst_9642);

(statearr_9751[(12)] = inst_9649);

(statearr_9751[(21)] = inst_9650);

return statearr_9751;
})();
var statearr_9752_9821 = state_9708__$1;
(statearr_9752_9821[(2)] = null);

(statearr_9752_9821[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (28))){
var inst_9648 = (state_9708[(20)]);
var inst_9667 = (state_9708[(25)]);
var inst_9667__$1 = cljs.core.seq.call(null,inst_9648);
var state_9708__$1 = (function (){var statearr_9753 = state_9708;
(statearr_9753[(25)] = inst_9667__$1);

return statearr_9753;
})();
if(inst_9667__$1){
var statearr_9754_9822 = state_9708__$1;
(statearr_9754_9822[(1)] = (33));

} else {
var statearr_9755_9823 = state_9708__$1;
(statearr_9755_9823[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (25))){
var inst_9651 = (state_9708[(11)]);
var inst_9650 = (state_9708[(21)]);
var inst_9653 = (inst_9651 < inst_9650);
var inst_9654 = inst_9653;
var state_9708__$1 = state_9708;
if(cljs.core.truth_(inst_9654)){
var statearr_9756_9824 = state_9708__$1;
(statearr_9756_9824[(1)] = (27));

} else {
var statearr_9757_9825 = state_9708__$1;
(statearr_9757_9825[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (34))){
var state_9708__$1 = state_9708;
var statearr_9758_9826 = state_9708__$1;
(statearr_9758_9826[(2)] = null);

(statearr_9758_9826[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (17))){
var state_9708__$1 = state_9708;
var statearr_9759_9827 = state_9708__$1;
(statearr_9759_9827[(2)] = null);

(statearr_9759_9827[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (3))){
var inst_9706 = (state_9708[(2)]);
var state_9708__$1 = state_9708;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9708__$1,inst_9706);
} else {
if((state_val_9709 === (12))){
var inst_9635 = (state_9708[(2)]);
var state_9708__$1 = state_9708;
var statearr_9760_9828 = state_9708__$1;
(statearr_9760_9828[(2)] = inst_9635);

(statearr_9760_9828[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (2))){
var state_9708__$1 = state_9708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9708__$1,(4),ch);
} else {
if((state_val_9709 === (23))){
var state_9708__$1 = state_9708;
var statearr_9761_9829 = state_9708__$1;
(statearr_9761_9829[(2)] = null);

(statearr_9761_9829[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (35))){
var inst_9690 = (state_9708[(2)]);
var state_9708__$1 = state_9708;
var statearr_9762_9830 = state_9708__$1;
(statearr_9762_9830[(2)] = inst_9690);

(statearr_9762_9830[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (19))){
var inst_9609 = (state_9708[(7)]);
var inst_9613 = cljs.core.chunk_first.call(null,inst_9609);
var inst_9614 = cljs.core.chunk_rest.call(null,inst_9609);
var inst_9615 = cljs.core.count.call(null,inst_9613);
var inst_9589 = inst_9614;
var inst_9590 = inst_9613;
var inst_9591 = inst_9615;
var inst_9592 = (0);
var state_9708__$1 = (function (){var statearr_9763 = state_9708;
(statearr_9763[(13)] = inst_9590);

(statearr_9763[(14)] = inst_9591);

(statearr_9763[(15)] = inst_9592);

(statearr_9763[(17)] = inst_9589);

return statearr_9763;
})();
var statearr_9764_9831 = state_9708__$1;
(statearr_9764_9831[(2)] = null);

(statearr_9764_9831[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (11))){
var inst_9609 = (state_9708[(7)]);
var inst_9589 = (state_9708[(17)]);
var inst_9609__$1 = cljs.core.seq.call(null,inst_9589);
var state_9708__$1 = (function (){var statearr_9765 = state_9708;
(statearr_9765[(7)] = inst_9609__$1);

return statearr_9765;
})();
if(inst_9609__$1){
var statearr_9766_9832 = state_9708__$1;
(statearr_9766_9832[(1)] = (16));

} else {
var statearr_9767_9833 = state_9708__$1;
(statearr_9767_9833[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (9))){
var inst_9637 = (state_9708[(2)]);
var state_9708__$1 = state_9708;
var statearr_9768_9834 = state_9708__$1;
(statearr_9768_9834[(2)] = inst_9637);

(statearr_9768_9834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (5))){
var inst_9587 = cljs.core.deref.call(null,cs);
var inst_9588 = cljs.core.seq.call(null,inst_9587);
var inst_9589 = inst_9588;
var inst_9590 = null;
var inst_9591 = (0);
var inst_9592 = (0);
var state_9708__$1 = (function (){var statearr_9769 = state_9708;
(statearr_9769[(13)] = inst_9590);

(statearr_9769[(14)] = inst_9591);

(statearr_9769[(15)] = inst_9592);

(statearr_9769[(17)] = inst_9589);

return statearr_9769;
})();
var statearr_9770_9835 = state_9708__$1;
(statearr_9770_9835[(2)] = null);

(statearr_9770_9835[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (14))){
var state_9708__$1 = state_9708;
var statearr_9771_9836 = state_9708__$1;
(statearr_9771_9836[(2)] = null);

(statearr_9771_9836[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (45))){
var inst_9698 = (state_9708[(2)]);
var state_9708__$1 = state_9708;
var statearr_9772_9837 = state_9708__$1;
(statearr_9772_9837[(2)] = inst_9698);

(statearr_9772_9837[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (26))){
var inst_9640 = (state_9708[(29)]);
var inst_9694 = (state_9708[(2)]);
var inst_9695 = cljs.core.seq.call(null,inst_9640);
var state_9708__$1 = (function (){var statearr_9773 = state_9708;
(statearr_9773[(31)] = inst_9694);

return statearr_9773;
})();
if(inst_9695){
var statearr_9774_9838 = state_9708__$1;
(statearr_9774_9838[(1)] = (42));

} else {
var statearr_9775_9839 = state_9708__$1;
(statearr_9775_9839[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (16))){
var inst_9609 = (state_9708[(7)]);
var inst_9611 = cljs.core.chunked_seq_QMARK_.call(null,inst_9609);
var state_9708__$1 = state_9708;
if(inst_9611){
var statearr_9776_9840 = state_9708__$1;
(statearr_9776_9840[(1)] = (19));

} else {
var statearr_9777_9841 = state_9708__$1;
(statearr_9777_9841[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (38))){
var inst_9687 = (state_9708[(2)]);
var state_9708__$1 = state_9708;
var statearr_9778_9842 = state_9708__$1;
(statearr_9778_9842[(2)] = inst_9687);

(statearr_9778_9842[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (30))){
var state_9708__$1 = state_9708;
var statearr_9779_9843 = state_9708__$1;
(statearr_9779_9843[(2)] = null);

(statearr_9779_9843[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (10))){
var inst_9590 = (state_9708[(13)]);
var inst_9592 = (state_9708[(15)]);
var inst_9598 = cljs.core._nth.call(null,inst_9590,inst_9592);
var inst_9599 = cljs.core.nth.call(null,inst_9598,(0),null);
var inst_9600 = cljs.core.nth.call(null,inst_9598,(1),null);
var state_9708__$1 = (function (){var statearr_9780 = state_9708;
(statearr_9780[(26)] = inst_9599);

return statearr_9780;
})();
if(cljs.core.truth_(inst_9600)){
var statearr_9781_9844 = state_9708__$1;
(statearr_9781_9844[(1)] = (13));

} else {
var statearr_9782_9845 = state_9708__$1;
(statearr_9782_9845[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (18))){
var inst_9633 = (state_9708[(2)]);
var state_9708__$1 = state_9708;
var statearr_9783_9846 = state_9708__$1;
(statearr_9783_9846[(2)] = inst_9633);

(statearr_9783_9846[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (42))){
var state_9708__$1 = state_9708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9708__$1,(45),dchan);
} else {
if((state_val_9709 === (37))){
var inst_9580 = (state_9708[(9)]);
var inst_9667 = (state_9708[(25)]);
var inst_9676 = (state_9708[(23)]);
var inst_9676__$1 = cljs.core.first.call(null,inst_9667);
var inst_9677 = cljs.core.async.put_BANG_.call(null,inst_9676__$1,inst_9580,done);
var state_9708__$1 = (function (){var statearr_9784 = state_9708;
(statearr_9784[(23)] = inst_9676__$1);

return statearr_9784;
})();
if(cljs.core.truth_(inst_9677)){
var statearr_9785_9847 = state_9708__$1;
(statearr_9785_9847[(1)] = (39));

} else {
var statearr_9786_9848 = state_9708__$1;
(statearr_9786_9848[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9709 === (8))){
var inst_9591 = (state_9708[(14)]);
var inst_9592 = (state_9708[(15)]);
var inst_9594 = (inst_9592 < inst_9591);
var inst_9595 = inst_9594;
var state_9708__$1 = state_9708;
if(cljs.core.truth_(inst_9595)){
var statearr_9787_9849 = state_9708__$1;
(statearr_9787_9849[(1)] = (10));

} else {
var statearr_9788_9850 = state_9708__$1;
(statearr_9788_9850[(1)] = (11));

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
});})(c__8489__auto___9796,cs,m,dchan,dctr,done))
;
return ((function (switch__8377__auto__,c__8489__auto___9796,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__8378__auto__ = null;
var cljs$core$async$mult_$_state_machine__8378__auto____0 = (function (){
var statearr_9792 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9792[(0)] = cljs$core$async$mult_$_state_machine__8378__auto__);

(statearr_9792[(1)] = (1));

return statearr_9792;
});
var cljs$core$async$mult_$_state_machine__8378__auto____1 = (function (state_9708){
while(true){
var ret_value__8379__auto__ = (function (){try{while(true){
var result__8380__auto__ = switch__8377__auto__.call(null,state_9708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8380__auto__;
}
break;
}
}catch (e9793){if((e9793 instanceof Object)){
var ex__8381__auto__ = e9793;
var statearr_9794_9851 = state_9708;
(statearr_9794_9851[(5)] = ex__8381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9852 = state_9708;
state_9708 = G__9852;
continue;
} else {
return ret_value__8379__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__8378__auto__ = function(state_9708){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__8378__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__8378__auto____1.call(this,state_9708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__8378__auto____0;
cljs$core$async$mult_$_state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__8378__auto____1;
return cljs$core$async$mult_$_state_machine__8378__auto__;
})()
;})(switch__8377__auto__,c__8489__auto___9796,cs,m,dchan,dctr,done))
})();
var state__8491__auto__ = (function (){var statearr_9795 = f__8490__auto__.call(null);
(statearr_9795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8489__auto___9796);

return statearr_9795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8491__auto__);
});})(c__8489__auto___9796,cs,m,dchan,dctr,done))
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
var args9853 = [];
var len__5726__auto___9856 = arguments.length;
var i__5727__auto___9857 = (0);
while(true){
if((i__5727__auto___9857 < len__5726__auto___9856)){
args9853.push((arguments[i__5727__auto___9857]));

var G__9858 = (i__5727__auto___9857 + (1));
i__5727__auto___9857 = G__9858;
continue;
} else {
}
break;
}

var G__9855 = args9853.length;
switch (G__9855) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9853.length)].join('')));

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
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,ch);
} else {
var m__5324__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,ch);
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
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,ch);
} else {
var m__5324__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,ch);
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
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m);
} else {
var m__5324__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m);
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
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,state_map);
} else {
var m__5324__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,state_map);
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
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,mode);
} else {
var m__5324__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5733__auto__ = [];
var len__5726__auto___9870 = arguments.length;
var i__5727__auto___9871 = (0);
while(true){
if((i__5727__auto___9871 < len__5726__auto___9870)){
args__5733__auto__.push((arguments[i__5727__auto___9871]));

var G__9872 = (i__5727__auto___9871 + (1));
i__5727__auto___9871 = G__9872;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((3) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5734__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__9864){
var map__9865 = p__9864;
var map__9865__$1 = ((((!((map__9865 == null)))?((((map__9865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9865):map__9865);
var opts = map__9865__$1;
var statearr_9867_9873 = state;
(statearr_9867_9873[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__9865,map__9865__$1,opts){
return (function (val){
var statearr_9868_9874 = state;
(statearr_9868_9874[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__9865,map__9865__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_9869_9875 = state;
(statearr_9869_9875[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq9860){
var G__9861 = cljs.core.first.call(null,seq9860);
var seq9860__$1 = cljs.core.next.call(null,seq9860);
var G__9862 = cljs.core.first.call(null,seq9860__$1);
var seq9860__$2 = cljs.core.next.call(null,seq9860__$1);
var G__9863 = cljs.core.first.call(null,seq9860__$2);
var seq9860__$3 = cljs.core.next.call(null,seq9860__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9861,G__9862,G__9863,seq9860__$3);
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
if(typeof cljs.core.async.t_cljs$core$async10039 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10039 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta10040){
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
this.meta10040 = meta10040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10041,meta10040__$1){
var self__ = this;
var _10041__$1 = this;
return (new cljs.core.async.t_cljs$core$async10039(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta10040__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10039.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10041){
var self__ = this;
var _10041__$1 = this;
return self__.meta10040;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10039.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10039.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10039.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async10039.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10039.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10039.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10039.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10039.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async10039.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta10040","meta10040",1177524771,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10039.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10039.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10039";

cljs.core.async.t_cljs$core$async10039.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async10039");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async10039 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async10039(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10040){
return (new cljs.core.async.t_cljs$core$async10039(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10040));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async10039(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8489__auto___10202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8489__auto___10202,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__8490__auto__ = (function (){var switch__8377__auto__ = ((function (c__8489__auto___10202,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_10139){
var state_val_10140 = (state_10139[(1)]);
if((state_val_10140 === (7))){
var inst_10057 = (state_10139[(2)]);
var state_10139__$1 = state_10139;
var statearr_10141_10203 = state_10139__$1;
(statearr_10141_10203[(2)] = inst_10057);

(statearr_10141_10203[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (20))){
var inst_10069 = (state_10139[(7)]);
var state_10139__$1 = state_10139;
var statearr_10142_10204 = state_10139__$1;
(statearr_10142_10204[(2)] = inst_10069);

(statearr_10142_10204[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (27))){
var state_10139__$1 = state_10139;
var statearr_10143_10205 = state_10139__$1;
(statearr_10143_10205[(2)] = null);

(statearr_10143_10205[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (1))){
var inst_10045 = (state_10139[(8)]);
var inst_10045__$1 = calc_state.call(null);
var inst_10047 = (inst_10045__$1 == null);
var inst_10048 = cljs.core.not.call(null,inst_10047);
var state_10139__$1 = (function (){var statearr_10144 = state_10139;
(statearr_10144[(8)] = inst_10045__$1);

return statearr_10144;
})();
if(inst_10048){
var statearr_10145_10206 = state_10139__$1;
(statearr_10145_10206[(1)] = (2));

} else {
var statearr_10146_10207 = state_10139__$1;
(statearr_10146_10207[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (24))){
var inst_10092 = (state_10139[(9)]);
var inst_10099 = (state_10139[(10)]);
var inst_10113 = (state_10139[(11)]);
var inst_10113__$1 = inst_10092.call(null,inst_10099);
var state_10139__$1 = (function (){var statearr_10147 = state_10139;
(statearr_10147[(11)] = inst_10113__$1);

return statearr_10147;
})();
if(cljs.core.truth_(inst_10113__$1)){
var statearr_10148_10208 = state_10139__$1;
(statearr_10148_10208[(1)] = (29));

} else {
var statearr_10149_10209 = state_10139__$1;
(statearr_10149_10209[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (4))){
var inst_10060 = (state_10139[(2)]);
var state_10139__$1 = state_10139;
if(cljs.core.truth_(inst_10060)){
var statearr_10150_10210 = state_10139__$1;
(statearr_10150_10210[(1)] = (8));

} else {
var statearr_10151_10211 = state_10139__$1;
(statearr_10151_10211[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (15))){
var inst_10086 = (state_10139[(2)]);
var state_10139__$1 = state_10139;
if(cljs.core.truth_(inst_10086)){
var statearr_10152_10212 = state_10139__$1;
(statearr_10152_10212[(1)] = (19));

} else {
var statearr_10153_10213 = state_10139__$1;
(statearr_10153_10213[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (21))){
var inst_10091 = (state_10139[(12)]);
var inst_10091__$1 = (state_10139[(2)]);
var inst_10092 = cljs.core.get.call(null,inst_10091__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10093 = cljs.core.get.call(null,inst_10091__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10094 = cljs.core.get.call(null,inst_10091__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_10139__$1 = (function (){var statearr_10154 = state_10139;
(statearr_10154[(9)] = inst_10092);

(statearr_10154[(13)] = inst_10093);

(statearr_10154[(12)] = inst_10091__$1);

return statearr_10154;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_10139__$1,(22),inst_10094);
} else {
if((state_val_10140 === (31))){
var inst_10121 = (state_10139[(2)]);
var state_10139__$1 = state_10139;
if(cljs.core.truth_(inst_10121)){
var statearr_10155_10214 = state_10139__$1;
(statearr_10155_10214[(1)] = (32));

} else {
var statearr_10156_10215 = state_10139__$1;
(statearr_10156_10215[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (32))){
var inst_10098 = (state_10139[(14)]);
var state_10139__$1 = state_10139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10139__$1,(35),out,inst_10098);
} else {
if((state_val_10140 === (33))){
var inst_10091 = (state_10139[(12)]);
var inst_10069 = inst_10091;
var state_10139__$1 = (function (){var statearr_10157 = state_10139;
(statearr_10157[(7)] = inst_10069);

return statearr_10157;
})();
var statearr_10158_10216 = state_10139__$1;
(statearr_10158_10216[(2)] = null);

(statearr_10158_10216[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (13))){
var inst_10069 = (state_10139[(7)]);
var inst_10076 = inst_10069.cljs$lang$protocol_mask$partition0$;
var inst_10077 = (inst_10076 & (64));
var inst_10078 = inst_10069.cljs$core$ISeq$;
var inst_10079 = (inst_10077) || (inst_10078);
var state_10139__$1 = state_10139;
if(cljs.core.truth_(inst_10079)){
var statearr_10159_10217 = state_10139__$1;
(statearr_10159_10217[(1)] = (16));

} else {
var statearr_10160_10218 = state_10139__$1;
(statearr_10160_10218[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (22))){
var inst_10099 = (state_10139[(10)]);
var inst_10098 = (state_10139[(14)]);
var inst_10097 = (state_10139[(2)]);
var inst_10098__$1 = cljs.core.nth.call(null,inst_10097,(0),null);
var inst_10099__$1 = cljs.core.nth.call(null,inst_10097,(1),null);
var inst_10100 = (inst_10098__$1 == null);
var inst_10101 = cljs.core._EQ_.call(null,inst_10099__$1,change);
var inst_10102 = (inst_10100) || (inst_10101);
var state_10139__$1 = (function (){var statearr_10161 = state_10139;
(statearr_10161[(10)] = inst_10099__$1);

(statearr_10161[(14)] = inst_10098__$1);

return statearr_10161;
})();
if(cljs.core.truth_(inst_10102)){
var statearr_10162_10219 = state_10139__$1;
(statearr_10162_10219[(1)] = (23));

} else {
var statearr_10163_10220 = state_10139__$1;
(statearr_10163_10220[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (36))){
var inst_10091 = (state_10139[(12)]);
var inst_10069 = inst_10091;
var state_10139__$1 = (function (){var statearr_10164 = state_10139;
(statearr_10164[(7)] = inst_10069);

return statearr_10164;
})();
var statearr_10165_10221 = state_10139__$1;
(statearr_10165_10221[(2)] = null);

(statearr_10165_10221[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (29))){
var inst_10113 = (state_10139[(11)]);
var state_10139__$1 = state_10139;
var statearr_10166_10222 = state_10139__$1;
(statearr_10166_10222[(2)] = inst_10113);

(statearr_10166_10222[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (6))){
var state_10139__$1 = state_10139;
var statearr_10167_10223 = state_10139__$1;
(statearr_10167_10223[(2)] = false);

(statearr_10167_10223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (28))){
var inst_10109 = (state_10139[(2)]);
var inst_10110 = calc_state.call(null);
var inst_10069 = inst_10110;
var state_10139__$1 = (function (){var statearr_10168 = state_10139;
(statearr_10168[(7)] = inst_10069);

(statearr_10168[(15)] = inst_10109);

return statearr_10168;
})();
var statearr_10169_10224 = state_10139__$1;
(statearr_10169_10224[(2)] = null);

(statearr_10169_10224[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (25))){
var inst_10135 = (state_10139[(2)]);
var state_10139__$1 = state_10139;
var statearr_10170_10225 = state_10139__$1;
(statearr_10170_10225[(2)] = inst_10135);

(statearr_10170_10225[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (34))){
var inst_10133 = (state_10139[(2)]);
var state_10139__$1 = state_10139;
var statearr_10171_10226 = state_10139__$1;
(statearr_10171_10226[(2)] = inst_10133);

(statearr_10171_10226[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (17))){
var state_10139__$1 = state_10139;
var statearr_10172_10227 = state_10139__$1;
(statearr_10172_10227[(2)] = false);

(statearr_10172_10227[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (3))){
var state_10139__$1 = state_10139;
var statearr_10173_10228 = state_10139__$1;
(statearr_10173_10228[(2)] = false);

(statearr_10173_10228[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (12))){
var inst_10137 = (state_10139[(2)]);
var state_10139__$1 = state_10139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10139__$1,inst_10137);
} else {
if((state_val_10140 === (2))){
var inst_10045 = (state_10139[(8)]);
var inst_10050 = inst_10045.cljs$lang$protocol_mask$partition0$;
var inst_10051 = (inst_10050 & (64));
var inst_10052 = inst_10045.cljs$core$ISeq$;
var inst_10053 = (inst_10051) || (inst_10052);
var state_10139__$1 = state_10139;
if(cljs.core.truth_(inst_10053)){
var statearr_10174_10229 = state_10139__$1;
(statearr_10174_10229[(1)] = (5));

} else {
var statearr_10175_10230 = state_10139__$1;
(statearr_10175_10230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (23))){
var inst_10098 = (state_10139[(14)]);
var inst_10104 = (inst_10098 == null);
var state_10139__$1 = state_10139;
if(cljs.core.truth_(inst_10104)){
var statearr_10176_10231 = state_10139__$1;
(statearr_10176_10231[(1)] = (26));

} else {
var statearr_10177_10232 = state_10139__$1;
(statearr_10177_10232[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (35))){
var inst_10124 = (state_10139[(2)]);
var state_10139__$1 = state_10139;
if(cljs.core.truth_(inst_10124)){
var statearr_10178_10233 = state_10139__$1;
(statearr_10178_10233[(1)] = (36));

} else {
var statearr_10179_10234 = state_10139__$1;
(statearr_10179_10234[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (19))){
var inst_10069 = (state_10139[(7)]);
var inst_10088 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10069);
var state_10139__$1 = state_10139;
var statearr_10180_10235 = state_10139__$1;
(statearr_10180_10235[(2)] = inst_10088);

(statearr_10180_10235[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (11))){
var inst_10069 = (state_10139[(7)]);
var inst_10073 = (inst_10069 == null);
var inst_10074 = cljs.core.not.call(null,inst_10073);
var state_10139__$1 = state_10139;
if(inst_10074){
var statearr_10181_10236 = state_10139__$1;
(statearr_10181_10236[(1)] = (13));

} else {
var statearr_10182_10237 = state_10139__$1;
(statearr_10182_10237[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (9))){
var inst_10045 = (state_10139[(8)]);
var state_10139__$1 = state_10139;
var statearr_10183_10238 = state_10139__$1;
(statearr_10183_10238[(2)] = inst_10045);

(statearr_10183_10238[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (5))){
var state_10139__$1 = state_10139;
var statearr_10184_10239 = state_10139__$1;
(statearr_10184_10239[(2)] = true);

(statearr_10184_10239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (14))){
var state_10139__$1 = state_10139;
var statearr_10185_10240 = state_10139__$1;
(statearr_10185_10240[(2)] = false);

(statearr_10185_10240[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (26))){
var inst_10099 = (state_10139[(10)]);
var inst_10106 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10099);
var state_10139__$1 = state_10139;
var statearr_10186_10241 = state_10139__$1;
(statearr_10186_10241[(2)] = inst_10106);

(statearr_10186_10241[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (16))){
var state_10139__$1 = state_10139;
var statearr_10187_10242 = state_10139__$1;
(statearr_10187_10242[(2)] = true);

(statearr_10187_10242[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (38))){
var inst_10129 = (state_10139[(2)]);
var state_10139__$1 = state_10139;
var statearr_10188_10243 = state_10139__$1;
(statearr_10188_10243[(2)] = inst_10129);

(statearr_10188_10243[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (30))){
var inst_10092 = (state_10139[(9)]);
var inst_10093 = (state_10139[(13)]);
var inst_10099 = (state_10139[(10)]);
var inst_10116 = cljs.core.empty_QMARK_.call(null,inst_10092);
var inst_10117 = inst_10093.call(null,inst_10099);
var inst_10118 = cljs.core.not.call(null,inst_10117);
var inst_10119 = (inst_10116) && (inst_10118);
var state_10139__$1 = state_10139;
var statearr_10189_10244 = state_10139__$1;
(statearr_10189_10244[(2)] = inst_10119);

(statearr_10189_10244[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (10))){
var inst_10045 = (state_10139[(8)]);
var inst_10065 = (state_10139[(2)]);
var inst_10066 = cljs.core.get.call(null,inst_10065,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10067 = cljs.core.get.call(null,inst_10065,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10068 = cljs.core.get.call(null,inst_10065,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_10069 = inst_10045;
var state_10139__$1 = (function (){var statearr_10190 = state_10139;
(statearr_10190[(7)] = inst_10069);

(statearr_10190[(16)] = inst_10068);

(statearr_10190[(17)] = inst_10066);

(statearr_10190[(18)] = inst_10067);

return statearr_10190;
})();
var statearr_10191_10245 = state_10139__$1;
(statearr_10191_10245[(2)] = null);

(statearr_10191_10245[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (18))){
var inst_10083 = (state_10139[(2)]);
var state_10139__$1 = state_10139;
var statearr_10192_10246 = state_10139__$1;
(statearr_10192_10246[(2)] = inst_10083);

(statearr_10192_10246[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (37))){
var state_10139__$1 = state_10139;
var statearr_10193_10247 = state_10139__$1;
(statearr_10193_10247[(2)] = null);

(statearr_10193_10247[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (8))){
var inst_10045 = (state_10139[(8)]);
var inst_10062 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10045);
var state_10139__$1 = state_10139;
var statearr_10194_10248 = state_10139__$1;
(statearr_10194_10248[(2)] = inst_10062);

(statearr_10194_10248[(1)] = (10));


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
});})(c__8489__auto___10202,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__8377__auto__,c__8489__auto___10202,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__8378__auto__ = null;
var cljs$core$async$mix_$_state_machine__8378__auto____0 = (function (){
var statearr_10198 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10198[(0)] = cljs$core$async$mix_$_state_machine__8378__auto__);

(statearr_10198[(1)] = (1));

return statearr_10198;
});
var cljs$core$async$mix_$_state_machine__8378__auto____1 = (function (state_10139){
while(true){
var ret_value__8379__auto__ = (function (){try{while(true){
var result__8380__auto__ = switch__8377__auto__.call(null,state_10139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8380__auto__;
}
break;
}
}catch (e10199){if((e10199 instanceof Object)){
var ex__8381__auto__ = e10199;
var statearr_10200_10249 = state_10139;
(statearr_10200_10249[(5)] = ex__8381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10250 = state_10139;
state_10139 = G__10250;
continue;
} else {
return ret_value__8379__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__8378__auto__ = function(state_10139){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__8378__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__8378__auto____1.call(this,state_10139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__8378__auto____0;
cljs$core$async$mix_$_state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__8378__auto____1;
return cljs$core$async$mix_$_state_machine__8378__auto__;
})()
;})(switch__8377__auto__,c__8489__auto___10202,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__8491__auto__ = (function (){var statearr_10201 = f__8490__auto__.call(null);
(statearr_10201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8489__auto___10202);

return statearr_10201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8491__auto__);
});})(c__8489__auto___10202,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5324__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,p,v,ch);
} else {
var m__5324__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args10251 = [];
var len__5726__auto___10254 = arguments.length;
var i__5727__auto___10255 = (0);
while(true){
if((i__5727__auto___10255 < len__5726__auto___10254)){
args10251.push((arguments[i__5727__auto___10255]));

var G__10256 = (i__5727__auto___10255 + (1));
i__5727__auto___10255 = G__10256;
continue;
} else {
}
break;
}

var G__10253 = args10251.length;
switch (G__10253) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10251.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,p);
} else {
var m__5324__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,p);
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
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,p,v);
} else {
var m__5324__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,p,v);
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
var args10259 = [];
var len__5726__auto___10384 = arguments.length;
var i__5727__auto___10385 = (0);
while(true){
if((i__5727__auto___10385 < len__5726__auto___10384)){
args10259.push((arguments[i__5727__auto___10385]));

var G__10386 = (i__5727__auto___10385 + (1));
i__5727__auto___10385 = G__10386;
continue;
} else {
}
break;
}

var G__10261 = args10259.length;
switch (G__10261) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10259.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4668__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4668__auto__,mults){
return (function (p1__10258_SHARP_){
if(cljs.core.truth_(p1__10258_SHARP_.call(null,topic))){
return p1__10258_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__10258_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4668__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async10262 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10262 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta10263){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta10263 = meta10263;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10264,meta10263__$1){
var self__ = this;
var _10264__$1 = this;
return (new cljs.core.async.t_cljs$core$async10262(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta10263__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10262.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10264){
var self__ = this;
var _10264__$1 = this;
return self__.meta10263;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10262.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10262.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10262.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async10262.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10262.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async10262.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10262.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10262.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta10263","meta10263",391029035,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10262.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10262.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10262";

cljs.core.async.t_cljs$core$async10262.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async10262");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async10262 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async10262(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10263){
return (new cljs.core.async.t_cljs$core$async10262(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10263));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async10262(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8489__auto___10388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8489__auto___10388,mults,ensure_mult,p){
return (function (){
var f__8490__auto__ = (function (){var switch__8377__auto__ = ((function (c__8489__auto___10388,mults,ensure_mult,p){
return (function (state_10336){
var state_val_10337 = (state_10336[(1)]);
if((state_val_10337 === (7))){
var inst_10332 = (state_10336[(2)]);
var state_10336__$1 = state_10336;
var statearr_10338_10389 = state_10336__$1;
(statearr_10338_10389[(2)] = inst_10332);

(statearr_10338_10389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10337 === (20))){
var state_10336__$1 = state_10336;
var statearr_10339_10390 = state_10336__$1;
(statearr_10339_10390[(2)] = null);

(statearr_10339_10390[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10337 === (1))){
var state_10336__$1 = state_10336;
var statearr_10340_10391 = state_10336__$1;
(statearr_10340_10391[(2)] = null);

(statearr_10340_10391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10337 === (24))){
var inst_10315 = (state_10336[(7)]);
var inst_10324 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_10315);
var state_10336__$1 = state_10336;
var statearr_10341_10392 = state_10336__$1;
(statearr_10341_10392[(2)] = inst_10324);

(statearr_10341_10392[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10337 === (4))){
var inst_10267 = (state_10336[(8)]);
var inst_10267__$1 = (state_10336[(2)]);
var inst_10268 = (inst_10267__$1 == null);
var state_10336__$1 = (function (){var statearr_10342 = state_10336;
(statearr_10342[(8)] = inst_10267__$1);

return statearr_10342;
})();
if(cljs.core.truth_(inst_10268)){
var statearr_10343_10393 = state_10336__$1;
(statearr_10343_10393[(1)] = (5));

} else {
var statearr_10344_10394 = state_10336__$1;
(statearr_10344_10394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10337 === (15))){
var inst_10309 = (state_10336[(2)]);
var state_10336__$1 = state_10336;
var statearr_10345_10395 = state_10336__$1;
(statearr_10345_10395[(2)] = inst_10309);

(statearr_10345_10395[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10337 === (21))){
var inst_10329 = (state_10336[(2)]);
var state_10336__$1 = (function (){var statearr_10346 = state_10336;
(statearr_10346[(9)] = inst_10329);

return statearr_10346;
})();
var statearr_10347_10396 = state_10336__$1;
(statearr_10347_10396[(2)] = null);

(statearr_10347_10396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10337 === (13))){
var inst_10291 = (state_10336[(10)]);
var inst_10293 = cljs.core.chunked_seq_QMARK_.call(null,inst_10291);
var state_10336__$1 = state_10336;
if(inst_10293){
var statearr_10348_10397 = state_10336__$1;
(statearr_10348_10397[(1)] = (16));

} else {
var statearr_10349_10398 = state_10336__$1;
(statearr_10349_10398[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10337 === (22))){
var inst_10321 = (state_10336[(2)]);
var state_10336__$1 = state_10336;
if(cljs.core.truth_(inst_10321)){
var statearr_10350_10399 = state_10336__$1;
(statearr_10350_10399[(1)] = (23));

} else {
var statearr_10351_10400 = state_10336__$1;
(statearr_10351_10400[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10337 === (6))){
var inst_10317 = (state_10336[(11)]);
var inst_10267 = (state_10336[(8)]);
var inst_10315 = (state_10336[(7)]);
var inst_10315__$1 = topic_fn.call(null,inst_10267);
var inst_10316 = cljs.core.deref.call(null,mults);
var inst_10317__$1 = cljs.core.get.call(null,inst_10316,inst_10315__$1);
var state_10336__$1 = (function (){var statearr_10352 = state_10336;
(statearr_10352[(11)] = inst_10317__$1);

(statearr_10352[(7)] = inst_10315__$1);

return statearr_10352;
})();
if(cljs.core.truth_(inst_10317__$1)){
var statearr_10353_10401 = state_10336__$1;
(statearr_10353_10401[(1)] = (19));

} else {
var statearr_10354_10402 = state_10336__$1;
(statearr_10354_10402[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10337 === (25))){
var inst_10326 = (state_10336[(2)]);
var state_10336__$1 = state_10336;
var statearr_10355_10403 = state_10336__$1;
(statearr_10355_10403[(2)] = inst_10326);

(statearr_10355_10403[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10337 === (17))){
var inst_10291 = (state_10336[(10)]);
var inst_10300 = cljs.core.first.call(null,inst_10291);
var inst_10301 = cljs.core.async.muxch_STAR_.call(null,inst_10300);
var inst_10302 = cljs.core.async.close_BANG_.call(null,inst_10301);
var inst_10303 = cljs.core.next.call(null,inst_10291);
var inst_10277 = inst_10303;
var inst_10278 = null;
var inst_10279 = (0);
var inst_10280 = (0);
var state_10336__$1 = (function (){var statearr_10356 = state_10336;
(statearr_10356[(12)] = inst_10280);

(statearr_10356[(13)] = inst_10278);

(statearr_10356[(14)] = inst_10277);

(statearr_10356[(15)] = inst_10302);

(statearr_10356[(16)] = inst_10279);

return statearr_10356;
})();
var statearr_10357_10404 = state_10336__$1;
(statearr_10357_10404[(2)] = null);

(statearr_10357_10404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10337 === (3))){
var inst_10334 = (state_10336[(2)]);
var state_10336__$1 = state_10336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10336__$1,inst_10334);
} else {
if((state_val_10337 === (12))){
var inst_10311 = (state_10336[(2)]);
var state_10336__$1 = state_10336;
var statearr_10358_10405 = state_10336__$1;
(statearr_10358_10405[(2)] = inst_10311);

(statearr_10358_10405[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10337 === (2))){
var state_10336__$1 = state_10336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10336__$1,(4),ch);
} else {
if((state_val_10337 === (23))){
var state_10336__$1 = state_10336;
var statearr_10359_10406 = state_10336__$1;
(statearr_10359_10406[(2)] = null);

(statearr_10359_10406[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10337 === (19))){
var inst_10317 = (state_10336[(11)]);
var inst_10267 = (state_10336[(8)]);
var inst_10319 = cljs.core.async.muxch_STAR_.call(null,inst_10317);
var state_10336__$1 = state_10336;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10336__$1,(22),inst_10319,inst_10267);
} else {
if((state_val_10337 === (11))){
var inst_10291 = (state_10336[(10)]);
var inst_10277 = (state_10336[(14)]);
var inst_10291__$1 = cljs.core.seq.call(null,inst_10277);
var state_10336__$1 = (function (){var statearr_10360 = state_10336;
(statearr_10360[(10)] = inst_10291__$1);

return statearr_10360;
})();
if(inst_10291__$1){
var statearr_10361_10407 = state_10336__$1;
(statearr_10361_10407[(1)] = (13));

} else {
var statearr_10362_10408 = state_10336__$1;
(statearr_10362_10408[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10337 === (9))){
var inst_10313 = (state_10336[(2)]);
var state_10336__$1 = state_10336;
var statearr_10363_10409 = state_10336__$1;
(statearr_10363_10409[(2)] = inst_10313);

(statearr_10363_10409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10337 === (5))){
var inst_10274 = cljs.core.deref.call(null,mults);
var inst_10275 = cljs.core.vals.call(null,inst_10274);
var inst_10276 = cljs.core.seq.call(null,inst_10275);
var inst_10277 = inst_10276;
var inst_10278 = null;
var inst_10279 = (0);
var inst_10280 = (0);
var state_10336__$1 = (function (){var statearr_10364 = state_10336;
(statearr_10364[(12)] = inst_10280);

(statearr_10364[(13)] = inst_10278);

(statearr_10364[(14)] = inst_10277);

(statearr_10364[(16)] = inst_10279);

return statearr_10364;
})();
var statearr_10365_10410 = state_10336__$1;
(statearr_10365_10410[(2)] = null);

(statearr_10365_10410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10337 === (14))){
var state_10336__$1 = state_10336;
var statearr_10369_10411 = state_10336__$1;
(statearr_10369_10411[(2)] = null);

(statearr_10369_10411[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10337 === (16))){
var inst_10291 = (state_10336[(10)]);
var inst_10295 = cljs.core.chunk_first.call(null,inst_10291);
var inst_10296 = cljs.core.chunk_rest.call(null,inst_10291);
var inst_10297 = cljs.core.count.call(null,inst_10295);
var inst_10277 = inst_10296;
var inst_10278 = inst_10295;
var inst_10279 = inst_10297;
var inst_10280 = (0);
var state_10336__$1 = (function (){var statearr_10370 = state_10336;
(statearr_10370[(12)] = inst_10280);

(statearr_10370[(13)] = inst_10278);

(statearr_10370[(14)] = inst_10277);

(statearr_10370[(16)] = inst_10279);

return statearr_10370;
})();
var statearr_10371_10412 = state_10336__$1;
(statearr_10371_10412[(2)] = null);

(statearr_10371_10412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10337 === (10))){
var inst_10280 = (state_10336[(12)]);
var inst_10278 = (state_10336[(13)]);
var inst_10277 = (state_10336[(14)]);
var inst_10279 = (state_10336[(16)]);
var inst_10285 = cljs.core._nth.call(null,inst_10278,inst_10280);
var inst_10286 = cljs.core.async.muxch_STAR_.call(null,inst_10285);
var inst_10287 = cljs.core.async.close_BANG_.call(null,inst_10286);
var inst_10288 = (inst_10280 + (1));
var tmp10366 = inst_10278;
var tmp10367 = inst_10277;
var tmp10368 = inst_10279;
var inst_10277__$1 = tmp10367;
var inst_10278__$1 = tmp10366;
var inst_10279__$1 = tmp10368;
var inst_10280__$1 = inst_10288;
var state_10336__$1 = (function (){var statearr_10372 = state_10336;
(statearr_10372[(17)] = inst_10287);

(statearr_10372[(12)] = inst_10280__$1);

(statearr_10372[(13)] = inst_10278__$1);

(statearr_10372[(14)] = inst_10277__$1);

(statearr_10372[(16)] = inst_10279__$1);

return statearr_10372;
})();
var statearr_10373_10413 = state_10336__$1;
(statearr_10373_10413[(2)] = null);

(statearr_10373_10413[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10337 === (18))){
var inst_10306 = (state_10336[(2)]);
var state_10336__$1 = state_10336;
var statearr_10374_10414 = state_10336__$1;
(statearr_10374_10414[(2)] = inst_10306);

(statearr_10374_10414[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10337 === (8))){
var inst_10280 = (state_10336[(12)]);
var inst_10279 = (state_10336[(16)]);
var inst_10282 = (inst_10280 < inst_10279);
var inst_10283 = inst_10282;
var state_10336__$1 = state_10336;
if(cljs.core.truth_(inst_10283)){
var statearr_10375_10415 = state_10336__$1;
(statearr_10375_10415[(1)] = (10));

} else {
var statearr_10376_10416 = state_10336__$1;
(statearr_10376_10416[(1)] = (11));

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
});})(c__8489__auto___10388,mults,ensure_mult,p))
;
return ((function (switch__8377__auto__,c__8489__auto___10388,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__8378__auto__ = null;
var cljs$core$async$state_machine__8378__auto____0 = (function (){
var statearr_10380 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10380[(0)] = cljs$core$async$state_machine__8378__auto__);

(statearr_10380[(1)] = (1));

return statearr_10380;
});
var cljs$core$async$state_machine__8378__auto____1 = (function (state_10336){
while(true){
var ret_value__8379__auto__ = (function (){try{while(true){
var result__8380__auto__ = switch__8377__auto__.call(null,state_10336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8380__auto__;
}
break;
}
}catch (e10381){if((e10381 instanceof Object)){
var ex__8381__auto__ = e10381;
var statearr_10382_10417 = state_10336;
(statearr_10382_10417[(5)] = ex__8381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10418 = state_10336;
state_10336 = G__10418;
continue;
} else {
return ret_value__8379__auto__;
}
break;
}
});
cljs$core$async$state_machine__8378__auto__ = function(state_10336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8378__auto____1.call(this,state_10336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8378__auto____0;
cljs$core$async$state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8378__auto____1;
return cljs$core$async$state_machine__8378__auto__;
})()
;})(switch__8377__auto__,c__8489__auto___10388,mults,ensure_mult,p))
})();
var state__8491__auto__ = (function (){var statearr_10383 = f__8490__auto__.call(null);
(statearr_10383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8489__auto___10388);

return statearr_10383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8491__auto__);
});})(c__8489__auto___10388,mults,ensure_mult,p))
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
var args10419 = [];
var len__5726__auto___10422 = arguments.length;
var i__5727__auto___10423 = (0);
while(true){
if((i__5727__auto___10423 < len__5726__auto___10422)){
args10419.push((arguments[i__5727__auto___10423]));

var G__10424 = (i__5727__auto___10423 + (1));
i__5727__auto___10423 = G__10424;
continue;
} else {
}
break;
}

var G__10421 = args10419.length;
switch (G__10421) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10419.length)].join('')));

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
var args10426 = [];
var len__5726__auto___10429 = arguments.length;
var i__5727__auto___10430 = (0);
while(true){
if((i__5727__auto___10430 < len__5726__auto___10429)){
args10426.push((arguments[i__5727__auto___10430]));

var G__10431 = (i__5727__auto___10430 + (1));
i__5727__auto___10430 = G__10431;
continue;
} else {
}
break;
}

var G__10428 = args10426.length;
switch (G__10428) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10426.length)].join('')));

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
var args10433 = [];
var len__5726__auto___10504 = arguments.length;
var i__5727__auto___10505 = (0);
while(true){
if((i__5727__auto___10505 < len__5726__auto___10504)){
args10433.push((arguments[i__5727__auto___10505]));

var G__10506 = (i__5727__auto___10505 + (1));
i__5727__auto___10505 = G__10506;
continue;
} else {
}
break;
}

var G__10435 = args10433.length;
switch (G__10435) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10433.length)].join('')));

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
var c__8489__auto___10508 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8489__auto___10508,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__8490__auto__ = (function (){var switch__8377__auto__ = ((function (c__8489__auto___10508,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_10474){
var state_val_10475 = (state_10474[(1)]);
if((state_val_10475 === (7))){
var state_10474__$1 = state_10474;
var statearr_10476_10509 = state_10474__$1;
(statearr_10476_10509[(2)] = null);

(statearr_10476_10509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10475 === (1))){
var state_10474__$1 = state_10474;
var statearr_10477_10510 = state_10474__$1;
(statearr_10477_10510[(2)] = null);

(statearr_10477_10510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10475 === (4))){
var inst_10438 = (state_10474[(7)]);
var inst_10440 = (inst_10438 < cnt);
var state_10474__$1 = state_10474;
if(cljs.core.truth_(inst_10440)){
var statearr_10478_10511 = state_10474__$1;
(statearr_10478_10511[(1)] = (6));

} else {
var statearr_10479_10512 = state_10474__$1;
(statearr_10479_10512[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10475 === (15))){
var inst_10470 = (state_10474[(2)]);
var state_10474__$1 = state_10474;
var statearr_10480_10513 = state_10474__$1;
(statearr_10480_10513[(2)] = inst_10470);

(statearr_10480_10513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10475 === (13))){
var inst_10463 = cljs.core.async.close_BANG_.call(null,out);
var state_10474__$1 = state_10474;
var statearr_10481_10514 = state_10474__$1;
(statearr_10481_10514[(2)] = inst_10463);

(statearr_10481_10514[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10475 === (6))){
var state_10474__$1 = state_10474;
var statearr_10482_10515 = state_10474__$1;
(statearr_10482_10515[(2)] = null);

(statearr_10482_10515[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10475 === (3))){
var inst_10472 = (state_10474[(2)]);
var state_10474__$1 = state_10474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10474__$1,inst_10472);
} else {
if((state_val_10475 === (12))){
var inst_10460 = (state_10474[(8)]);
var inst_10460__$1 = (state_10474[(2)]);
var inst_10461 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_10460__$1);
var state_10474__$1 = (function (){var statearr_10483 = state_10474;
(statearr_10483[(8)] = inst_10460__$1);

return statearr_10483;
})();
if(cljs.core.truth_(inst_10461)){
var statearr_10484_10516 = state_10474__$1;
(statearr_10484_10516[(1)] = (13));

} else {
var statearr_10485_10517 = state_10474__$1;
(statearr_10485_10517[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10475 === (2))){
var inst_10437 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_10438 = (0);
var state_10474__$1 = (function (){var statearr_10486 = state_10474;
(statearr_10486[(7)] = inst_10438);

(statearr_10486[(9)] = inst_10437);

return statearr_10486;
})();
var statearr_10487_10518 = state_10474__$1;
(statearr_10487_10518[(2)] = null);

(statearr_10487_10518[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10475 === (11))){
var inst_10438 = (state_10474[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10474,(10),Object,null,(9));
var inst_10447 = chs__$1.call(null,inst_10438);
var inst_10448 = done.call(null,inst_10438);
var inst_10449 = cljs.core.async.take_BANG_.call(null,inst_10447,inst_10448);
var state_10474__$1 = state_10474;
var statearr_10488_10519 = state_10474__$1;
(statearr_10488_10519[(2)] = inst_10449);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10474__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10475 === (9))){
var inst_10438 = (state_10474[(7)]);
var inst_10451 = (state_10474[(2)]);
var inst_10452 = (inst_10438 + (1));
var inst_10438__$1 = inst_10452;
var state_10474__$1 = (function (){var statearr_10489 = state_10474;
(statearr_10489[(10)] = inst_10451);

(statearr_10489[(7)] = inst_10438__$1);

return statearr_10489;
})();
var statearr_10490_10520 = state_10474__$1;
(statearr_10490_10520[(2)] = null);

(statearr_10490_10520[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10475 === (5))){
var inst_10458 = (state_10474[(2)]);
var state_10474__$1 = (function (){var statearr_10491 = state_10474;
(statearr_10491[(11)] = inst_10458);

return statearr_10491;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10474__$1,(12),dchan);
} else {
if((state_val_10475 === (14))){
var inst_10460 = (state_10474[(8)]);
var inst_10465 = cljs.core.apply.call(null,f,inst_10460);
var state_10474__$1 = state_10474;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10474__$1,(16),out,inst_10465);
} else {
if((state_val_10475 === (16))){
var inst_10467 = (state_10474[(2)]);
var state_10474__$1 = (function (){var statearr_10492 = state_10474;
(statearr_10492[(12)] = inst_10467);

return statearr_10492;
})();
var statearr_10493_10521 = state_10474__$1;
(statearr_10493_10521[(2)] = null);

(statearr_10493_10521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10475 === (10))){
var inst_10442 = (state_10474[(2)]);
var inst_10443 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_10474__$1 = (function (){var statearr_10494 = state_10474;
(statearr_10494[(13)] = inst_10442);

return statearr_10494;
})();
var statearr_10495_10522 = state_10474__$1;
(statearr_10495_10522[(2)] = inst_10443);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10474__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10475 === (8))){
var inst_10456 = (state_10474[(2)]);
var state_10474__$1 = state_10474;
var statearr_10496_10523 = state_10474__$1;
(statearr_10496_10523[(2)] = inst_10456);

(statearr_10496_10523[(1)] = (5));


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
});})(c__8489__auto___10508,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__8377__auto__,c__8489__auto___10508,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__8378__auto__ = null;
var cljs$core$async$state_machine__8378__auto____0 = (function (){
var statearr_10500 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10500[(0)] = cljs$core$async$state_machine__8378__auto__);

(statearr_10500[(1)] = (1));

return statearr_10500;
});
var cljs$core$async$state_machine__8378__auto____1 = (function (state_10474){
while(true){
var ret_value__8379__auto__ = (function (){try{while(true){
var result__8380__auto__ = switch__8377__auto__.call(null,state_10474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8380__auto__;
}
break;
}
}catch (e10501){if((e10501 instanceof Object)){
var ex__8381__auto__ = e10501;
var statearr_10502_10524 = state_10474;
(statearr_10502_10524[(5)] = ex__8381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10525 = state_10474;
state_10474 = G__10525;
continue;
} else {
return ret_value__8379__auto__;
}
break;
}
});
cljs$core$async$state_machine__8378__auto__ = function(state_10474){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8378__auto____1.call(this,state_10474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8378__auto____0;
cljs$core$async$state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8378__auto____1;
return cljs$core$async$state_machine__8378__auto__;
})()
;})(switch__8377__auto__,c__8489__auto___10508,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__8491__auto__ = (function (){var statearr_10503 = f__8490__auto__.call(null);
(statearr_10503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8489__auto___10508);

return statearr_10503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8491__auto__);
});})(c__8489__auto___10508,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args10527 = [];
var len__5726__auto___10583 = arguments.length;
var i__5727__auto___10584 = (0);
while(true){
if((i__5727__auto___10584 < len__5726__auto___10583)){
args10527.push((arguments[i__5727__auto___10584]));

var G__10585 = (i__5727__auto___10584 + (1));
i__5727__auto___10584 = G__10585;
continue;
} else {
}
break;
}

var G__10529 = args10527.length;
switch (G__10529) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10527.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8489__auto___10587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8489__auto___10587,out){
return (function (){
var f__8490__auto__ = (function (){var switch__8377__auto__ = ((function (c__8489__auto___10587,out){
return (function (state_10559){
var state_val_10560 = (state_10559[(1)]);
if((state_val_10560 === (7))){
var inst_10538 = (state_10559[(7)]);
var inst_10539 = (state_10559[(8)]);
var inst_10538__$1 = (state_10559[(2)]);
var inst_10539__$1 = cljs.core.nth.call(null,inst_10538__$1,(0),null);
var inst_10540 = cljs.core.nth.call(null,inst_10538__$1,(1),null);
var inst_10541 = (inst_10539__$1 == null);
var state_10559__$1 = (function (){var statearr_10561 = state_10559;
(statearr_10561[(9)] = inst_10540);

(statearr_10561[(7)] = inst_10538__$1);

(statearr_10561[(8)] = inst_10539__$1);

return statearr_10561;
})();
if(cljs.core.truth_(inst_10541)){
var statearr_10562_10588 = state_10559__$1;
(statearr_10562_10588[(1)] = (8));

} else {
var statearr_10563_10589 = state_10559__$1;
(statearr_10563_10589[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10560 === (1))){
var inst_10530 = cljs.core.vec.call(null,chs);
var inst_10531 = inst_10530;
var state_10559__$1 = (function (){var statearr_10564 = state_10559;
(statearr_10564[(10)] = inst_10531);

return statearr_10564;
})();
var statearr_10565_10590 = state_10559__$1;
(statearr_10565_10590[(2)] = null);

(statearr_10565_10590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10560 === (4))){
var inst_10531 = (state_10559[(10)]);
var state_10559__$1 = state_10559;
return cljs.core.async.ioc_alts_BANG_.call(null,state_10559__$1,(7),inst_10531);
} else {
if((state_val_10560 === (6))){
var inst_10555 = (state_10559[(2)]);
var state_10559__$1 = state_10559;
var statearr_10566_10591 = state_10559__$1;
(statearr_10566_10591[(2)] = inst_10555);

(statearr_10566_10591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10560 === (3))){
var inst_10557 = (state_10559[(2)]);
var state_10559__$1 = state_10559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10559__$1,inst_10557);
} else {
if((state_val_10560 === (2))){
var inst_10531 = (state_10559[(10)]);
var inst_10533 = cljs.core.count.call(null,inst_10531);
var inst_10534 = (inst_10533 > (0));
var state_10559__$1 = state_10559;
if(cljs.core.truth_(inst_10534)){
var statearr_10568_10592 = state_10559__$1;
(statearr_10568_10592[(1)] = (4));

} else {
var statearr_10569_10593 = state_10559__$1;
(statearr_10569_10593[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10560 === (11))){
var inst_10531 = (state_10559[(10)]);
var inst_10548 = (state_10559[(2)]);
var tmp10567 = inst_10531;
var inst_10531__$1 = tmp10567;
var state_10559__$1 = (function (){var statearr_10570 = state_10559;
(statearr_10570[(11)] = inst_10548);

(statearr_10570[(10)] = inst_10531__$1);

return statearr_10570;
})();
var statearr_10571_10594 = state_10559__$1;
(statearr_10571_10594[(2)] = null);

(statearr_10571_10594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10560 === (9))){
var inst_10539 = (state_10559[(8)]);
var state_10559__$1 = state_10559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10559__$1,(11),out,inst_10539);
} else {
if((state_val_10560 === (5))){
var inst_10553 = cljs.core.async.close_BANG_.call(null,out);
var state_10559__$1 = state_10559;
var statearr_10572_10595 = state_10559__$1;
(statearr_10572_10595[(2)] = inst_10553);

(statearr_10572_10595[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10560 === (10))){
var inst_10551 = (state_10559[(2)]);
var state_10559__$1 = state_10559;
var statearr_10573_10596 = state_10559__$1;
(statearr_10573_10596[(2)] = inst_10551);

(statearr_10573_10596[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10560 === (8))){
var inst_10540 = (state_10559[(9)]);
var inst_10538 = (state_10559[(7)]);
var inst_10531 = (state_10559[(10)]);
var inst_10539 = (state_10559[(8)]);
var inst_10543 = (function (){var cs = inst_10531;
var vec__10536 = inst_10538;
var v = inst_10539;
var c = inst_10540;
return ((function (cs,vec__10536,v,c,inst_10540,inst_10538,inst_10531,inst_10539,state_val_10560,c__8489__auto___10587,out){
return (function (p1__10526_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__10526_SHARP_);
});
;})(cs,vec__10536,v,c,inst_10540,inst_10538,inst_10531,inst_10539,state_val_10560,c__8489__auto___10587,out))
})();
var inst_10544 = cljs.core.filterv.call(null,inst_10543,inst_10531);
var inst_10531__$1 = inst_10544;
var state_10559__$1 = (function (){var statearr_10574 = state_10559;
(statearr_10574[(10)] = inst_10531__$1);

return statearr_10574;
})();
var statearr_10575_10597 = state_10559__$1;
(statearr_10575_10597[(2)] = null);

(statearr_10575_10597[(1)] = (2));


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
});})(c__8489__auto___10587,out))
;
return ((function (switch__8377__auto__,c__8489__auto___10587,out){
return (function() {
var cljs$core$async$state_machine__8378__auto__ = null;
var cljs$core$async$state_machine__8378__auto____0 = (function (){
var statearr_10579 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10579[(0)] = cljs$core$async$state_machine__8378__auto__);

(statearr_10579[(1)] = (1));

return statearr_10579;
});
var cljs$core$async$state_machine__8378__auto____1 = (function (state_10559){
while(true){
var ret_value__8379__auto__ = (function (){try{while(true){
var result__8380__auto__ = switch__8377__auto__.call(null,state_10559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8380__auto__;
}
break;
}
}catch (e10580){if((e10580 instanceof Object)){
var ex__8381__auto__ = e10580;
var statearr_10581_10598 = state_10559;
(statearr_10581_10598[(5)] = ex__8381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10599 = state_10559;
state_10559 = G__10599;
continue;
} else {
return ret_value__8379__auto__;
}
break;
}
});
cljs$core$async$state_machine__8378__auto__ = function(state_10559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8378__auto____1.call(this,state_10559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8378__auto____0;
cljs$core$async$state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8378__auto____1;
return cljs$core$async$state_machine__8378__auto__;
})()
;})(switch__8377__auto__,c__8489__auto___10587,out))
})();
var state__8491__auto__ = (function (){var statearr_10582 = f__8490__auto__.call(null);
(statearr_10582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8489__auto___10587);

return statearr_10582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8491__auto__);
});})(c__8489__auto___10587,out))
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
var args10600 = [];
var len__5726__auto___10649 = arguments.length;
var i__5727__auto___10650 = (0);
while(true){
if((i__5727__auto___10650 < len__5726__auto___10649)){
args10600.push((arguments[i__5727__auto___10650]));

var G__10651 = (i__5727__auto___10650 + (1));
i__5727__auto___10650 = G__10651;
continue;
} else {
}
break;
}

var G__10602 = args10600.length;
switch (G__10602) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10600.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8489__auto___10653 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8489__auto___10653,out){
return (function (){
var f__8490__auto__ = (function (){var switch__8377__auto__ = ((function (c__8489__auto___10653,out){
return (function (state_10626){
var state_val_10627 = (state_10626[(1)]);
if((state_val_10627 === (7))){
var inst_10608 = (state_10626[(7)]);
var inst_10608__$1 = (state_10626[(2)]);
var inst_10609 = (inst_10608__$1 == null);
var inst_10610 = cljs.core.not.call(null,inst_10609);
var state_10626__$1 = (function (){var statearr_10628 = state_10626;
(statearr_10628[(7)] = inst_10608__$1);

return statearr_10628;
})();
if(inst_10610){
var statearr_10629_10654 = state_10626__$1;
(statearr_10629_10654[(1)] = (8));

} else {
var statearr_10630_10655 = state_10626__$1;
(statearr_10630_10655[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (1))){
var inst_10603 = (0);
var state_10626__$1 = (function (){var statearr_10631 = state_10626;
(statearr_10631[(8)] = inst_10603);

return statearr_10631;
})();
var statearr_10632_10656 = state_10626__$1;
(statearr_10632_10656[(2)] = null);

(statearr_10632_10656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (4))){
var state_10626__$1 = state_10626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10626__$1,(7),ch);
} else {
if((state_val_10627 === (6))){
var inst_10621 = (state_10626[(2)]);
var state_10626__$1 = state_10626;
var statearr_10633_10657 = state_10626__$1;
(statearr_10633_10657[(2)] = inst_10621);

(statearr_10633_10657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (3))){
var inst_10623 = (state_10626[(2)]);
var inst_10624 = cljs.core.async.close_BANG_.call(null,out);
var state_10626__$1 = (function (){var statearr_10634 = state_10626;
(statearr_10634[(9)] = inst_10623);

return statearr_10634;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10626__$1,inst_10624);
} else {
if((state_val_10627 === (2))){
var inst_10603 = (state_10626[(8)]);
var inst_10605 = (inst_10603 < n);
var state_10626__$1 = state_10626;
if(cljs.core.truth_(inst_10605)){
var statearr_10635_10658 = state_10626__$1;
(statearr_10635_10658[(1)] = (4));

} else {
var statearr_10636_10659 = state_10626__$1;
(statearr_10636_10659[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (11))){
var inst_10603 = (state_10626[(8)]);
var inst_10613 = (state_10626[(2)]);
var inst_10614 = (inst_10603 + (1));
var inst_10603__$1 = inst_10614;
var state_10626__$1 = (function (){var statearr_10637 = state_10626;
(statearr_10637[(10)] = inst_10613);

(statearr_10637[(8)] = inst_10603__$1);

return statearr_10637;
})();
var statearr_10638_10660 = state_10626__$1;
(statearr_10638_10660[(2)] = null);

(statearr_10638_10660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (9))){
var state_10626__$1 = state_10626;
var statearr_10639_10661 = state_10626__$1;
(statearr_10639_10661[(2)] = null);

(statearr_10639_10661[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (5))){
var state_10626__$1 = state_10626;
var statearr_10640_10662 = state_10626__$1;
(statearr_10640_10662[(2)] = null);

(statearr_10640_10662[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (10))){
var inst_10618 = (state_10626[(2)]);
var state_10626__$1 = state_10626;
var statearr_10641_10663 = state_10626__$1;
(statearr_10641_10663[(2)] = inst_10618);

(statearr_10641_10663[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (8))){
var inst_10608 = (state_10626[(7)]);
var state_10626__$1 = state_10626;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10626__$1,(11),out,inst_10608);
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
});})(c__8489__auto___10653,out))
;
return ((function (switch__8377__auto__,c__8489__auto___10653,out){
return (function() {
var cljs$core$async$state_machine__8378__auto__ = null;
var cljs$core$async$state_machine__8378__auto____0 = (function (){
var statearr_10645 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10645[(0)] = cljs$core$async$state_machine__8378__auto__);

(statearr_10645[(1)] = (1));

return statearr_10645;
});
var cljs$core$async$state_machine__8378__auto____1 = (function (state_10626){
while(true){
var ret_value__8379__auto__ = (function (){try{while(true){
var result__8380__auto__ = switch__8377__auto__.call(null,state_10626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8380__auto__;
}
break;
}
}catch (e10646){if((e10646 instanceof Object)){
var ex__8381__auto__ = e10646;
var statearr_10647_10664 = state_10626;
(statearr_10647_10664[(5)] = ex__8381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10665 = state_10626;
state_10626 = G__10665;
continue;
} else {
return ret_value__8379__auto__;
}
break;
}
});
cljs$core$async$state_machine__8378__auto__ = function(state_10626){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8378__auto____1.call(this,state_10626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8378__auto____0;
cljs$core$async$state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8378__auto____1;
return cljs$core$async$state_machine__8378__auto__;
})()
;})(switch__8377__auto__,c__8489__auto___10653,out))
})();
var state__8491__auto__ = (function (){var statearr_10648 = f__8490__auto__.call(null);
(statearr_10648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8489__auto___10653);

return statearr_10648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8491__auto__);
});})(c__8489__auto___10653,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async10673 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10673 = (function (map_LT_,f,ch,meta10674){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta10674 = meta10674;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10675,meta10674__$1){
var self__ = this;
var _10675__$1 = this;
return (new cljs.core.async.t_cljs$core$async10673(self__.map_LT_,self__.f,self__.ch,meta10674__$1));
});

cljs.core.async.t_cljs$core$async10673.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10675){
var self__ = this;
var _10675__$1 = this;
return self__.meta10674;
});

cljs.core.async.t_cljs$core$async10673.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async10673.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10673.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10673.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async10673.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async10676 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10676 = (function (map_LT_,f,ch,meta10674,_,fn1,meta10677){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta10674 = meta10674;
this._ = _;
this.fn1 = fn1;
this.meta10677 = meta10677;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10678,meta10677__$1){
var self__ = this;
var _10678__$1 = this;
return (new cljs.core.async.t_cljs$core$async10676(self__.map_LT_,self__.f,self__.ch,self__.meta10674,self__._,self__.fn1,meta10677__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async10676.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10678){
var self__ = this;
var _10678__$1 = this;
return self__.meta10677;
});})(___$1))
;

cljs.core.async.t_cljs$core$async10676.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async10676.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async10676.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async10676.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__10666_SHARP_){
return f1.call(null,(((p1__10666_SHARP_ == null))?null:self__.f.call(null,p1__10666_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async10676.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10674","meta10674",-596898449,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async10673","cljs.core.async/t_cljs$core$async10673",906521325,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta10677","meta10677",-132909729,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async10676.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10676.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10676";

cljs.core.async.t_cljs$core$async10676.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async10676");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async10676 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async10676(map_LT___$1,f__$1,ch__$1,meta10674__$1,___$2,fn1__$1,meta10677){
return (new cljs.core.async.t_cljs$core$async10676(map_LT___$1,f__$1,ch__$1,meta10674__$1,___$2,fn1__$1,meta10677));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async10676(self__.map_LT_,self__.f,self__.ch,self__.meta10674,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4656__auto__ = ret;
if(cljs.core.truth_(and__4656__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4656__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async10673.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async10673.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async10673.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10674","meta10674",-596898449,null)], null);
});

cljs.core.async.t_cljs$core$async10673.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10673.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10673";

cljs.core.async.t_cljs$core$async10673.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async10673");
});

cljs.core.async.__GT_t_cljs$core$async10673 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async10673(map_LT___$1,f__$1,ch__$1,meta10674){
return (new cljs.core.async.t_cljs$core$async10673(map_LT___$1,f__$1,ch__$1,meta10674));
});

}

return (new cljs.core.async.t_cljs$core$async10673(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async10682 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10682 = (function (map_GT_,f,ch,meta10683){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta10683 = meta10683;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10684,meta10683__$1){
var self__ = this;
var _10684__$1 = this;
return (new cljs.core.async.t_cljs$core$async10682(self__.map_GT_,self__.f,self__.ch,meta10683__$1));
});

cljs.core.async.t_cljs$core$async10682.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10684){
var self__ = this;
var _10684__$1 = this;
return self__.meta10683;
});

cljs.core.async.t_cljs$core$async10682.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async10682.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10682.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async10682.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async10682.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async10682.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async10682.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10683","meta10683",526539374,null)], null);
});

cljs.core.async.t_cljs$core$async10682.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10682.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10682";

cljs.core.async.t_cljs$core$async10682.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async10682");
});

cljs.core.async.__GT_t_cljs$core$async10682 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async10682(map_GT___$1,f__$1,ch__$1,meta10683){
return (new cljs.core.async.t_cljs$core$async10682(map_GT___$1,f__$1,ch__$1,meta10683));
});

}

return (new cljs.core.async.t_cljs$core$async10682(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async10688 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10688 = (function (filter_GT_,p,ch,meta10689){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta10689 = meta10689;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10690,meta10689__$1){
var self__ = this;
var _10690__$1 = this;
return (new cljs.core.async.t_cljs$core$async10688(self__.filter_GT_,self__.p,self__.ch,meta10689__$1));
});

cljs.core.async.t_cljs$core$async10688.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10690){
var self__ = this;
var _10690__$1 = this;
return self__.meta10689;
});

cljs.core.async.t_cljs$core$async10688.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async10688.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10688.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10688.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async10688.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async10688.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async10688.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async10688.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10689","meta10689",-1550181451,null)], null);
});

cljs.core.async.t_cljs$core$async10688.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10688.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10688";

cljs.core.async.t_cljs$core$async10688.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async10688");
});

cljs.core.async.__GT_t_cljs$core$async10688 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async10688(filter_GT___$1,p__$1,ch__$1,meta10689){
return (new cljs.core.async.t_cljs$core$async10688(filter_GT___$1,p__$1,ch__$1,meta10689));
});

}

return (new cljs.core.async.t_cljs$core$async10688(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args10691 = [];
var len__5726__auto___10735 = arguments.length;
var i__5727__auto___10736 = (0);
while(true){
if((i__5727__auto___10736 < len__5726__auto___10735)){
args10691.push((arguments[i__5727__auto___10736]));

var G__10737 = (i__5727__auto___10736 + (1));
i__5727__auto___10736 = G__10737;
continue;
} else {
}
break;
}

var G__10693 = args10691.length;
switch (G__10693) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10691.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8489__auto___10739 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8489__auto___10739,out){
return (function (){
var f__8490__auto__ = (function (){var switch__8377__auto__ = ((function (c__8489__auto___10739,out){
return (function (state_10714){
var state_val_10715 = (state_10714[(1)]);
if((state_val_10715 === (7))){
var inst_10710 = (state_10714[(2)]);
var state_10714__$1 = state_10714;
var statearr_10716_10740 = state_10714__$1;
(statearr_10716_10740[(2)] = inst_10710);

(statearr_10716_10740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10715 === (1))){
var state_10714__$1 = state_10714;
var statearr_10717_10741 = state_10714__$1;
(statearr_10717_10741[(2)] = null);

(statearr_10717_10741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10715 === (4))){
var inst_10696 = (state_10714[(7)]);
var inst_10696__$1 = (state_10714[(2)]);
var inst_10697 = (inst_10696__$1 == null);
var state_10714__$1 = (function (){var statearr_10718 = state_10714;
(statearr_10718[(7)] = inst_10696__$1);

return statearr_10718;
})();
if(cljs.core.truth_(inst_10697)){
var statearr_10719_10742 = state_10714__$1;
(statearr_10719_10742[(1)] = (5));

} else {
var statearr_10720_10743 = state_10714__$1;
(statearr_10720_10743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10715 === (6))){
var inst_10696 = (state_10714[(7)]);
var inst_10701 = p.call(null,inst_10696);
var state_10714__$1 = state_10714;
if(cljs.core.truth_(inst_10701)){
var statearr_10721_10744 = state_10714__$1;
(statearr_10721_10744[(1)] = (8));

} else {
var statearr_10722_10745 = state_10714__$1;
(statearr_10722_10745[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10715 === (3))){
var inst_10712 = (state_10714[(2)]);
var state_10714__$1 = state_10714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10714__$1,inst_10712);
} else {
if((state_val_10715 === (2))){
var state_10714__$1 = state_10714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10714__$1,(4),ch);
} else {
if((state_val_10715 === (11))){
var inst_10704 = (state_10714[(2)]);
var state_10714__$1 = state_10714;
var statearr_10723_10746 = state_10714__$1;
(statearr_10723_10746[(2)] = inst_10704);

(statearr_10723_10746[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10715 === (9))){
var state_10714__$1 = state_10714;
var statearr_10724_10747 = state_10714__$1;
(statearr_10724_10747[(2)] = null);

(statearr_10724_10747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10715 === (5))){
var inst_10699 = cljs.core.async.close_BANG_.call(null,out);
var state_10714__$1 = state_10714;
var statearr_10725_10748 = state_10714__$1;
(statearr_10725_10748[(2)] = inst_10699);

(statearr_10725_10748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10715 === (10))){
var inst_10707 = (state_10714[(2)]);
var state_10714__$1 = (function (){var statearr_10726 = state_10714;
(statearr_10726[(8)] = inst_10707);

return statearr_10726;
})();
var statearr_10727_10749 = state_10714__$1;
(statearr_10727_10749[(2)] = null);

(statearr_10727_10749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10715 === (8))){
var inst_10696 = (state_10714[(7)]);
var state_10714__$1 = state_10714;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10714__$1,(11),out,inst_10696);
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
});})(c__8489__auto___10739,out))
;
return ((function (switch__8377__auto__,c__8489__auto___10739,out){
return (function() {
var cljs$core$async$state_machine__8378__auto__ = null;
var cljs$core$async$state_machine__8378__auto____0 = (function (){
var statearr_10731 = [null,null,null,null,null,null,null,null,null];
(statearr_10731[(0)] = cljs$core$async$state_machine__8378__auto__);

(statearr_10731[(1)] = (1));

return statearr_10731;
});
var cljs$core$async$state_machine__8378__auto____1 = (function (state_10714){
while(true){
var ret_value__8379__auto__ = (function (){try{while(true){
var result__8380__auto__ = switch__8377__auto__.call(null,state_10714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8380__auto__;
}
break;
}
}catch (e10732){if((e10732 instanceof Object)){
var ex__8381__auto__ = e10732;
var statearr_10733_10750 = state_10714;
(statearr_10733_10750[(5)] = ex__8381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10751 = state_10714;
state_10714 = G__10751;
continue;
} else {
return ret_value__8379__auto__;
}
break;
}
});
cljs$core$async$state_machine__8378__auto__ = function(state_10714){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8378__auto____1.call(this,state_10714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8378__auto____0;
cljs$core$async$state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8378__auto____1;
return cljs$core$async$state_machine__8378__auto__;
})()
;})(switch__8377__auto__,c__8489__auto___10739,out))
})();
var state__8491__auto__ = (function (){var statearr_10734 = f__8490__auto__.call(null);
(statearr_10734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8489__auto___10739);

return statearr_10734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8491__auto__);
});})(c__8489__auto___10739,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args10752 = [];
var len__5726__auto___10755 = arguments.length;
var i__5727__auto___10756 = (0);
while(true){
if((i__5727__auto___10756 < len__5726__auto___10755)){
args10752.push((arguments[i__5727__auto___10756]));

var G__10757 = (i__5727__auto___10756 + (1));
i__5727__auto___10756 = G__10757;
continue;
} else {
}
break;
}

var G__10754 = args10752.length;
switch (G__10754) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10752.length)].join('')));

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
var c__8489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8489__auto__){
return (function (){
var f__8490__auto__ = (function (){var switch__8377__auto__ = ((function (c__8489__auto__){
return (function (state_10924){
var state_val_10925 = (state_10924[(1)]);
if((state_val_10925 === (7))){
var inst_10920 = (state_10924[(2)]);
var state_10924__$1 = state_10924;
var statearr_10926_10967 = state_10924__$1;
(statearr_10926_10967[(2)] = inst_10920);

(statearr_10926_10967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (20))){
var inst_10890 = (state_10924[(7)]);
var inst_10901 = (state_10924[(2)]);
var inst_10902 = cljs.core.next.call(null,inst_10890);
var inst_10876 = inst_10902;
var inst_10877 = null;
var inst_10878 = (0);
var inst_10879 = (0);
var state_10924__$1 = (function (){var statearr_10927 = state_10924;
(statearr_10927[(8)] = inst_10879);

(statearr_10927[(9)] = inst_10901);

(statearr_10927[(10)] = inst_10877);

(statearr_10927[(11)] = inst_10878);

(statearr_10927[(12)] = inst_10876);

return statearr_10927;
})();
var statearr_10928_10968 = state_10924__$1;
(statearr_10928_10968[(2)] = null);

(statearr_10928_10968[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (1))){
var state_10924__$1 = state_10924;
var statearr_10929_10969 = state_10924__$1;
(statearr_10929_10969[(2)] = null);

(statearr_10929_10969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (4))){
var inst_10865 = (state_10924[(13)]);
var inst_10865__$1 = (state_10924[(2)]);
var inst_10866 = (inst_10865__$1 == null);
var state_10924__$1 = (function (){var statearr_10930 = state_10924;
(statearr_10930[(13)] = inst_10865__$1);

return statearr_10930;
})();
if(cljs.core.truth_(inst_10866)){
var statearr_10931_10970 = state_10924__$1;
(statearr_10931_10970[(1)] = (5));

} else {
var statearr_10932_10971 = state_10924__$1;
(statearr_10932_10971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (15))){
var state_10924__$1 = state_10924;
var statearr_10936_10972 = state_10924__$1;
(statearr_10936_10972[(2)] = null);

(statearr_10936_10972[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (21))){
var state_10924__$1 = state_10924;
var statearr_10937_10973 = state_10924__$1;
(statearr_10937_10973[(2)] = null);

(statearr_10937_10973[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (13))){
var inst_10879 = (state_10924[(8)]);
var inst_10877 = (state_10924[(10)]);
var inst_10878 = (state_10924[(11)]);
var inst_10876 = (state_10924[(12)]);
var inst_10886 = (state_10924[(2)]);
var inst_10887 = (inst_10879 + (1));
var tmp10933 = inst_10877;
var tmp10934 = inst_10878;
var tmp10935 = inst_10876;
var inst_10876__$1 = tmp10935;
var inst_10877__$1 = tmp10933;
var inst_10878__$1 = tmp10934;
var inst_10879__$1 = inst_10887;
var state_10924__$1 = (function (){var statearr_10938 = state_10924;
(statearr_10938[(8)] = inst_10879__$1);

(statearr_10938[(10)] = inst_10877__$1);

(statearr_10938[(14)] = inst_10886);

(statearr_10938[(11)] = inst_10878__$1);

(statearr_10938[(12)] = inst_10876__$1);

return statearr_10938;
})();
var statearr_10939_10974 = state_10924__$1;
(statearr_10939_10974[(2)] = null);

(statearr_10939_10974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (22))){
var state_10924__$1 = state_10924;
var statearr_10940_10975 = state_10924__$1;
(statearr_10940_10975[(2)] = null);

(statearr_10940_10975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (6))){
var inst_10865 = (state_10924[(13)]);
var inst_10874 = f.call(null,inst_10865);
var inst_10875 = cljs.core.seq.call(null,inst_10874);
var inst_10876 = inst_10875;
var inst_10877 = null;
var inst_10878 = (0);
var inst_10879 = (0);
var state_10924__$1 = (function (){var statearr_10941 = state_10924;
(statearr_10941[(8)] = inst_10879);

(statearr_10941[(10)] = inst_10877);

(statearr_10941[(11)] = inst_10878);

(statearr_10941[(12)] = inst_10876);

return statearr_10941;
})();
var statearr_10942_10976 = state_10924__$1;
(statearr_10942_10976[(2)] = null);

(statearr_10942_10976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (17))){
var inst_10890 = (state_10924[(7)]);
var inst_10894 = cljs.core.chunk_first.call(null,inst_10890);
var inst_10895 = cljs.core.chunk_rest.call(null,inst_10890);
var inst_10896 = cljs.core.count.call(null,inst_10894);
var inst_10876 = inst_10895;
var inst_10877 = inst_10894;
var inst_10878 = inst_10896;
var inst_10879 = (0);
var state_10924__$1 = (function (){var statearr_10943 = state_10924;
(statearr_10943[(8)] = inst_10879);

(statearr_10943[(10)] = inst_10877);

(statearr_10943[(11)] = inst_10878);

(statearr_10943[(12)] = inst_10876);

return statearr_10943;
})();
var statearr_10944_10977 = state_10924__$1;
(statearr_10944_10977[(2)] = null);

(statearr_10944_10977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (3))){
var inst_10922 = (state_10924[(2)]);
var state_10924__$1 = state_10924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10924__$1,inst_10922);
} else {
if((state_val_10925 === (12))){
var inst_10910 = (state_10924[(2)]);
var state_10924__$1 = state_10924;
var statearr_10945_10978 = state_10924__$1;
(statearr_10945_10978[(2)] = inst_10910);

(statearr_10945_10978[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (2))){
var state_10924__$1 = state_10924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10924__$1,(4),in$);
} else {
if((state_val_10925 === (23))){
var inst_10918 = (state_10924[(2)]);
var state_10924__$1 = state_10924;
var statearr_10946_10979 = state_10924__$1;
(statearr_10946_10979[(2)] = inst_10918);

(statearr_10946_10979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (19))){
var inst_10905 = (state_10924[(2)]);
var state_10924__$1 = state_10924;
var statearr_10947_10980 = state_10924__$1;
(statearr_10947_10980[(2)] = inst_10905);

(statearr_10947_10980[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (11))){
var inst_10890 = (state_10924[(7)]);
var inst_10876 = (state_10924[(12)]);
var inst_10890__$1 = cljs.core.seq.call(null,inst_10876);
var state_10924__$1 = (function (){var statearr_10948 = state_10924;
(statearr_10948[(7)] = inst_10890__$1);

return statearr_10948;
})();
if(inst_10890__$1){
var statearr_10949_10981 = state_10924__$1;
(statearr_10949_10981[(1)] = (14));

} else {
var statearr_10950_10982 = state_10924__$1;
(statearr_10950_10982[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (9))){
var inst_10912 = (state_10924[(2)]);
var inst_10913 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_10924__$1 = (function (){var statearr_10951 = state_10924;
(statearr_10951[(15)] = inst_10912);

return statearr_10951;
})();
if(cljs.core.truth_(inst_10913)){
var statearr_10952_10983 = state_10924__$1;
(statearr_10952_10983[(1)] = (21));

} else {
var statearr_10953_10984 = state_10924__$1;
(statearr_10953_10984[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (5))){
var inst_10868 = cljs.core.async.close_BANG_.call(null,out);
var state_10924__$1 = state_10924;
var statearr_10954_10985 = state_10924__$1;
(statearr_10954_10985[(2)] = inst_10868);

(statearr_10954_10985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (14))){
var inst_10890 = (state_10924[(7)]);
var inst_10892 = cljs.core.chunked_seq_QMARK_.call(null,inst_10890);
var state_10924__$1 = state_10924;
if(inst_10892){
var statearr_10955_10986 = state_10924__$1;
(statearr_10955_10986[(1)] = (17));

} else {
var statearr_10956_10987 = state_10924__$1;
(statearr_10956_10987[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (16))){
var inst_10908 = (state_10924[(2)]);
var state_10924__$1 = state_10924;
var statearr_10957_10988 = state_10924__$1;
(statearr_10957_10988[(2)] = inst_10908);

(statearr_10957_10988[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (10))){
var inst_10879 = (state_10924[(8)]);
var inst_10877 = (state_10924[(10)]);
var inst_10884 = cljs.core._nth.call(null,inst_10877,inst_10879);
var state_10924__$1 = state_10924;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10924__$1,(13),out,inst_10884);
} else {
if((state_val_10925 === (18))){
var inst_10890 = (state_10924[(7)]);
var inst_10899 = cljs.core.first.call(null,inst_10890);
var state_10924__$1 = state_10924;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10924__$1,(20),out,inst_10899);
} else {
if((state_val_10925 === (8))){
var inst_10879 = (state_10924[(8)]);
var inst_10878 = (state_10924[(11)]);
var inst_10881 = (inst_10879 < inst_10878);
var inst_10882 = inst_10881;
var state_10924__$1 = state_10924;
if(cljs.core.truth_(inst_10882)){
var statearr_10958_10989 = state_10924__$1;
(statearr_10958_10989[(1)] = (10));

} else {
var statearr_10959_10990 = state_10924__$1;
(statearr_10959_10990[(1)] = (11));

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
});})(c__8489__auto__))
;
return ((function (switch__8377__auto__,c__8489__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__8378__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__8378__auto____0 = (function (){
var statearr_10963 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10963[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__8378__auto__);

(statearr_10963[(1)] = (1));

return statearr_10963;
});
var cljs$core$async$mapcat_STAR__$_state_machine__8378__auto____1 = (function (state_10924){
while(true){
var ret_value__8379__auto__ = (function (){try{while(true){
var result__8380__auto__ = switch__8377__auto__.call(null,state_10924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8380__auto__;
}
break;
}
}catch (e10964){if((e10964 instanceof Object)){
var ex__8381__auto__ = e10964;
var statearr_10965_10991 = state_10924;
(statearr_10965_10991[(5)] = ex__8381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10992 = state_10924;
state_10924 = G__10992;
continue;
} else {
return ret_value__8379__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__8378__auto__ = function(state_10924){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__8378__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__8378__auto____1.call(this,state_10924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__8378__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__8378__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__8378__auto__;
})()
;})(switch__8377__auto__,c__8489__auto__))
})();
var state__8491__auto__ = (function (){var statearr_10966 = f__8490__auto__.call(null);
(statearr_10966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8489__auto__);

return statearr_10966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8491__auto__);
});})(c__8489__auto__))
);

return c__8489__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args10993 = [];
var len__5726__auto___10996 = arguments.length;
var i__5727__auto___10997 = (0);
while(true){
if((i__5727__auto___10997 < len__5726__auto___10996)){
args10993.push((arguments[i__5727__auto___10997]));

var G__10998 = (i__5727__auto___10997 + (1));
i__5727__auto___10997 = G__10998;
continue;
} else {
}
break;
}

var G__10995 = args10993.length;
switch (G__10995) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10993.length)].join('')));

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
var args11000 = [];
var len__5726__auto___11003 = arguments.length;
var i__5727__auto___11004 = (0);
while(true){
if((i__5727__auto___11004 < len__5726__auto___11003)){
args11000.push((arguments[i__5727__auto___11004]));

var G__11005 = (i__5727__auto___11004 + (1));
i__5727__auto___11004 = G__11005;
continue;
} else {
}
break;
}

var G__11002 = args11000.length;
switch (G__11002) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11000.length)].join('')));

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
var args11007 = [];
var len__5726__auto___11058 = arguments.length;
var i__5727__auto___11059 = (0);
while(true){
if((i__5727__auto___11059 < len__5726__auto___11058)){
args11007.push((arguments[i__5727__auto___11059]));

var G__11060 = (i__5727__auto___11059 + (1));
i__5727__auto___11059 = G__11060;
continue;
} else {
}
break;
}

var G__11009 = args11007.length;
switch (G__11009) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11007.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8489__auto___11062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8489__auto___11062,out){
return (function (){
var f__8490__auto__ = (function (){var switch__8377__auto__ = ((function (c__8489__auto___11062,out){
return (function (state_11033){
var state_val_11034 = (state_11033[(1)]);
if((state_val_11034 === (7))){
var inst_11028 = (state_11033[(2)]);
var state_11033__$1 = state_11033;
var statearr_11035_11063 = state_11033__$1;
(statearr_11035_11063[(2)] = inst_11028);

(statearr_11035_11063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11034 === (1))){
var inst_11010 = null;
var state_11033__$1 = (function (){var statearr_11036 = state_11033;
(statearr_11036[(7)] = inst_11010);

return statearr_11036;
})();
var statearr_11037_11064 = state_11033__$1;
(statearr_11037_11064[(2)] = null);

(statearr_11037_11064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11034 === (4))){
var inst_11013 = (state_11033[(8)]);
var inst_11013__$1 = (state_11033[(2)]);
var inst_11014 = (inst_11013__$1 == null);
var inst_11015 = cljs.core.not.call(null,inst_11014);
var state_11033__$1 = (function (){var statearr_11038 = state_11033;
(statearr_11038[(8)] = inst_11013__$1);

return statearr_11038;
})();
if(inst_11015){
var statearr_11039_11065 = state_11033__$1;
(statearr_11039_11065[(1)] = (5));

} else {
var statearr_11040_11066 = state_11033__$1;
(statearr_11040_11066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11034 === (6))){
var state_11033__$1 = state_11033;
var statearr_11041_11067 = state_11033__$1;
(statearr_11041_11067[(2)] = null);

(statearr_11041_11067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11034 === (3))){
var inst_11030 = (state_11033[(2)]);
var inst_11031 = cljs.core.async.close_BANG_.call(null,out);
var state_11033__$1 = (function (){var statearr_11042 = state_11033;
(statearr_11042[(9)] = inst_11030);

return statearr_11042;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11033__$1,inst_11031);
} else {
if((state_val_11034 === (2))){
var state_11033__$1 = state_11033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11033__$1,(4),ch);
} else {
if((state_val_11034 === (11))){
var inst_11013 = (state_11033[(8)]);
var inst_11022 = (state_11033[(2)]);
var inst_11010 = inst_11013;
var state_11033__$1 = (function (){var statearr_11043 = state_11033;
(statearr_11043[(7)] = inst_11010);

(statearr_11043[(10)] = inst_11022);

return statearr_11043;
})();
var statearr_11044_11068 = state_11033__$1;
(statearr_11044_11068[(2)] = null);

(statearr_11044_11068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11034 === (9))){
var inst_11013 = (state_11033[(8)]);
var state_11033__$1 = state_11033;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11033__$1,(11),out,inst_11013);
} else {
if((state_val_11034 === (5))){
var inst_11010 = (state_11033[(7)]);
var inst_11013 = (state_11033[(8)]);
var inst_11017 = cljs.core._EQ_.call(null,inst_11013,inst_11010);
var state_11033__$1 = state_11033;
if(inst_11017){
var statearr_11046_11069 = state_11033__$1;
(statearr_11046_11069[(1)] = (8));

} else {
var statearr_11047_11070 = state_11033__$1;
(statearr_11047_11070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11034 === (10))){
var inst_11025 = (state_11033[(2)]);
var state_11033__$1 = state_11033;
var statearr_11048_11071 = state_11033__$1;
(statearr_11048_11071[(2)] = inst_11025);

(statearr_11048_11071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11034 === (8))){
var inst_11010 = (state_11033[(7)]);
var tmp11045 = inst_11010;
var inst_11010__$1 = tmp11045;
var state_11033__$1 = (function (){var statearr_11049 = state_11033;
(statearr_11049[(7)] = inst_11010__$1);

return statearr_11049;
})();
var statearr_11050_11072 = state_11033__$1;
(statearr_11050_11072[(2)] = null);

(statearr_11050_11072[(1)] = (2));


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
});})(c__8489__auto___11062,out))
;
return ((function (switch__8377__auto__,c__8489__auto___11062,out){
return (function() {
var cljs$core$async$state_machine__8378__auto__ = null;
var cljs$core$async$state_machine__8378__auto____0 = (function (){
var statearr_11054 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11054[(0)] = cljs$core$async$state_machine__8378__auto__);

(statearr_11054[(1)] = (1));

return statearr_11054;
});
var cljs$core$async$state_machine__8378__auto____1 = (function (state_11033){
while(true){
var ret_value__8379__auto__ = (function (){try{while(true){
var result__8380__auto__ = switch__8377__auto__.call(null,state_11033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8380__auto__;
}
break;
}
}catch (e11055){if((e11055 instanceof Object)){
var ex__8381__auto__ = e11055;
var statearr_11056_11073 = state_11033;
(statearr_11056_11073[(5)] = ex__8381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11074 = state_11033;
state_11033 = G__11074;
continue;
} else {
return ret_value__8379__auto__;
}
break;
}
});
cljs$core$async$state_machine__8378__auto__ = function(state_11033){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8378__auto____1.call(this,state_11033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8378__auto____0;
cljs$core$async$state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8378__auto____1;
return cljs$core$async$state_machine__8378__auto__;
})()
;})(switch__8377__auto__,c__8489__auto___11062,out))
})();
var state__8491__auto__ = (function (){var statearr_11057 = f__8490__auto__.call(null);
(statearr_11057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8489__auto___11062);

return statearr_11057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8491__auto__);
});})(c__8489__auto___11062,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args11075 = [];
var len__5726__auto___11145 = arguments.length;
var i__5727__auto___11146 = (0);
while(true){
if((i__5727__auto___11146 < len__5726__auto___11145)){
args11075.push((arguments[i__5727__auto___11146]));

var G__11147 = (i__5727__auto___11146 + (1));
i__5727__auto___11146 = G__11147;
continue;
} else {
}
break;
}

var G__11077 = args11075.length;
switch (G__11077) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11075.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8489__auto___11149 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8489__auto___11149,out){
return (function (){
var f__8490__auto__ = (function (){var switch__8377__auto__ = ((function (c__8489__auto___11149,out){
return (function (state_11115){
var state_val_11116 = (state_11115[(1)]);
if((state_val_11116 === (7))){
var inst_11111 = (state_11115[(2)]);
var state_11115__$1 = state_11115;
var statearr_11117_11150 = state_11115__$1;
(statearr_11117_11150[(2)] = inst_11111);

(statearr_11117_11150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11116 === (1))){
var inst_11078 = (new Array(n));
var inst_11079 = inst_11078;
var inst_11080 = (0);
var state_11115__$1 = (function (){var statearr_11118 = state_11115;
(statearr_11118[(7)] = inst_11080);

(statearr_11118[(8)] = inst_11079);

return statearr_11118;
})();
var statearr_11119_11151 = state_11115__$1;
(statearr_11119_11151[(2)] = null);

(statearr_11119_11151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11116 === (4))){
var inst_11083 = (state_11115[(9)]);
var inst_11083__$1 = (state_11115[(2)]);
var inst_11084 = (inst_11083__$1 == null);
var inst_11085 = cljs.core.not.call(null,inst_11084);
var state_11115__$1 = (function (){var statearr_11120 = state_11115;
(statearr_11120[(9)] = inst_11083__$1);

return statearr_11120;
})();
if(inst_11085){
var statearr_11121_11152 = state_11115__$1;
(statearr_11121_11152[(1)] = (5));

} else {
var statearr_11122_11153 = state_11115__$1;
(statearr_11122_11153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11116 === (15))){
var inst_11105 = (state_11115[(2)]);
var state_11115__$1 = state_11115;
var statearr_11123_11154 = state_11115__$1;
(statearr_11123_11154[(2)] = inst_11105);

(statearr_11123_11154[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11116 === (13))){
var state_11115__$1 = state_11115;
var statearr_11124_11155 = state_11115__$1;
(statearr_11124_11155[(2)] = null);

(statearr_11124_11155[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11116 === (6))){
var inst_11080 = (state_11115[(7)]);
var inst_11101 = (inst_11080 > (0));
var state_11115__$1 = state_11115;
if(cljs.core.truth_(inst_11101)){
var statearr_11125_11156 = state_11115__$1;
(statearr_11125_11156[(1)] = (12));

} else {
var statearr_11126_11157 = state_11115__$1;
(statearr_11126_11157[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11116 === (3))){
var inst_11113 = (state_11115[(2)]);
var state_11115__$1 = state_11115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11115__$1,inst_11113);
} else {
if((state_val_11116 === (12))){
var inst_11079 = (state_11115[(8)]);
var inst_11103 = cljs.core.vec.call(null,inst_11079);
var state_11115__$1 = state_11115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11115__$1,(15),out,inst_11103);
} else {
if((state_val_11116 === (2))){
var state_11115__$1 = state_11115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11115__$1,(4),ch);
} else {
if((state_val_11116 === (11))){
var inst_11095 = (state_11115[(2)]);
var inst_11096 = (new Array(n));
var inst_11079 = inst_11096;
var inst_11080 = (0);
var state_11115__$1 = (function (){var statearr_11127 = state_11115;
(statearr_11127[(7)] = inst_11080);

(statearr_11127[(8)] = inst_11079);

(statearr_11127[(10)] = inst_11095);

return statearr_11127;
})();
var statearr_11128_11158 = state_11115__$1;
(statearr_11128_11158[(2)] = null);

(statearr_11128_11158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11116 === (9))){
var inst_11079 = (state_11115[(8)]);
var inst_11093 = cljs.core.vec.call(null,inst_11079);
var state_11115__$1 = state_11115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11115__$1,(11),out,inst_11093);
} else {
if((state_val_11116 === (5))){
var inst_11080 = (state_11115[(7)]);
var inst_11083 = (state_11115[(9)]);
var inst_11088 = (state_11115[(11)]);
var inst_11079 = (state_11115[(8)]);
var inst_11087 = (inst_11079[inst_11080] = inst_11083);
var inst_11088__$1 = (inst_11080 + (1));
var inst_11089 = (inst_11088__$1 < n);
var state_11115__$1 = (function (){var statearr_11129 = state_11115;
(statearr_11129[(11)] = inst_11088__$1);

(statearr_11129[(12)] = inst_11087);

return statearr_11129;
})();
if(cljs.core.truth_(inst_11089)){
var statearr_11130_11159 = state_11115__$1;
(statearr_11130_11159[(1)] = (8));

} else {
var statearr_11131_11160 = state_11115__$1;
(statearr_11131_11160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11116 === (14))){
var inst_11108 = (state_11115[(2)]);
var inst_11109 = cljs.core.async.close_BANG_.call(null,out);
var state_11115__$1 = (function (){var statearr_11133 = state_11115;
(statearr_11133[(13)] = inst_11108);

return statearr_11133;
})();
var statearr_11134_11161 = state_11115__$1;
(statearr_11134_11161[(2)] = inst_11109);

(statearr_11134_11161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11116 === (10))){
var inst_11099 = (state_11115[(2)]);
var state_11115__$1 = state_11115;
var statearr_11135_11162 = state_11115__$1;
(statearr_11135_11162[(2)] = inst_11099);

(statearr_11135_11162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11116 === (8))){
var inst_11088 = (state_11115[(11)]);
var inst_11079 = (state_11115[(8)]);
var tmp11132 = inst_11079;
var inst_11079__$1 = tmp11132;
var inst_11080 = inst_11088;
var state_11115__$1 = (function (){var statearr_11136 = state_11115;
(statearr_11136[(7)] = inst_11080);

(statearr_11136[(8)] = inst_11079__$1);

return statearr_11136;
})();
var statearr_11137_11163 = state_11115__$1;
(statearr_11137_11163[(2)] = null);

(statearr_11137_11163[(1)] = (2));


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
});})(c__8489__auto___11149,out))
;
return ((function (switch__8377__auto__,c__8489__auto___11149,out){
return (function() {
var cljs$core$async$state_machine__8378__auto__ = null;
var cljs$core$async$state_machine__8378__auto____0 = (function (){
var statearr_11141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11141[(0)] = cljs$core$async$state_machine__8378__auto__);

(statearr_11141[(1)] = (1));

return statearr_11141;
});
var cljs$core$async$state_machine__8378__auto____1 = (function (state_11115){
while(true){
var ret_value__8379__auto__ = (function (){try{while(true){
var result__8380__auto__ = switch__8377__auto__.call(null,state_11115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8380__auto__;
}
break;
}
}catch (e11142){if((e11142 instanceof Object)){
var ex__8381__auto__ = e11142;
var statearr_11143_11164 = state_11115;
(statearr_11143_11164[(5)] = ex__8381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11165 = state_11115;
state_11115 = G__11165;
continue;
} else {
return ret_value__8379__auto__;
}
break;
}
});
cljs$core$async$state_machine__8378__auto__ = function(state_11115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8378__auto____1.call(this,state_11115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8378__auto____0;
cljs$core$async$state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8378__auto____1;
return cljs$core$async$state_machine__8378__auto__;
})()
;})(switch__8377__auto__,c__8489__auto___11149,out))
})();
var state__8491__auto__ = (function (){var statearr_11144 = f__8490__auto__.call(null);
(statearr_11144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8489__auto___11149);

return statearr_11144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8491__auto__);
});})(c__8489__auto___11149,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args11166 = [];
var len__5726__auto___11240 = arguments.length;
var i__5727__auto___11241 = (0);
while(true){
if((i__5727__auto___11241 < len__5726__auto___11240)){
args11166.push((arguments[i__5727__auto___11241]));

var G__11242 = (i__5727__auto___11241 + (1));
i__5727__auto___11241 = G__11242;
continue;
} else {
}
break;
}

var G__11168 = args11166.length;
switch (G__11168) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11166.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8489__auto___11244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8489__auto___11244,out){
return (function (){
var f__8490__auto__ = (function (){var switch__8377__auto__ = ((function (c__8489__auto___11244,out){
return (function (state_11210){
var state_val_11211 = (state_11210[(1)]);
if((state_val_11211 === (7))){
var inst_11206 = (state_11210[(2)]);
var state_11210__$1 = state_11210;
var statearr_11212_11245 = state_11210__$1;
(statearr_11212_11245[(2)] = inst_11206);

(statearr_11212_11245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11211 === (1))){
var inst_11169 = [];
var inst_11170 = inst_11169;
var inst_11171 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_11210__$1 = (function (){var statearr_11213 = state_11210;
(statearr_11213[(7)] = inst_11171);

(statearr_11213[(8)] = inst_11170);

return statearr_11213;
})();
var statearr_11214_11246 = state_11210__$1;
(statearr_11214_11246[(2)] = null);

(statearr_11214_11246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11211 === (4))){
var inst_11174 = (state_11210[(9)]);
var inst_11174__$1 = (state_11210[(2)]);
var inst_11175 = (inst_11174__$1 == null);
var inst_11176 = cljs.core.not.call(null,inst_11175);
var state_11210__$1 = (function (){var statearr_11215 = state_11210;
(statearr_11215[(9)] = inst_11174__$1);

return statearr_11215;
})();
if(inst_11176){
var statearr_11216_11247 = state_11210__$1;
(statearr_11216_11247[(1)] = (5));

} else {
var statearr_11217_11248 = state_11210__$1;
(statearr_11217_11248[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11211 === (15))){
var inst_11200 = (state_11210[(2)]);
var state_11210__$1 = state_11210;
var statearr_11218_11249 = state_11210__$1;
(statearr_11218_11249[(2)] = inst_11200);

(statearr_11218_11249[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11211 === (13))){
var state_11210__$1 = state_11210;
var statearr_11219_11250 = state_11210__$1;
(statearr_11219_11250[(2)] = null);

(statearr_11219_11250[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11211 === (6))){
var inst_11170 = (state_11210[(8)]);
var inst_11195 = inst_11170.length;
var inst_11196 = (inst_11195 > (0));
var state_11210__$1 = state_11210;
if(cljs.core.truth_(inst_11196)){
var statearr_11220_11251 = state_11210__$1;
(statearr_11220_11251[(1)] = (12));

} else {
var statearr_11221_11252 = state_11210__$1;
(statearr_11221_11252[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11211 === (3))){
var inst_11208 = (state_11210[(2)]);
var state_11210__$1 = state_11210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11210__$1,inst_11208);
} else {
if((state_val_11211 === (12))){
var inst_11170 = (state_11210[(8)]);
var inst_11198 = cljs.core.vec.call(null,inst_11170);
var state_11210__$1 = state_11210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11210__$1,(15),out,inst_11198);
} else {
if((state_val_11211 === (2))){
var state_11210__$1 = state_11210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11210__$1,(4),ch);
} else {
if((state_val_11211 === (11))){
var inst_11178 = (state_11210[(10)]);
var inst_11174 = (state_11210[(9)]);
var inst_11188 = (state_11210[(2)]);
var inst_11189 = [];
var inst_11190 = inst_11189.push(inst_11174);
var inst_11170 = inst_11189;
var inst_11171 = inst_11178;
var state_11210__$1 = (function (){var statearr_11222 = state_11210;
(statearr_11222[(11)] = inst_11188);

(statearr_11222[(12)] = inst_11190);

(statearr_11222[(7)] = inst_11171);

(statearr_11222[(8)] = inst_11170);

return statearr_11222;
})();
var statearr_11223_11253 = state_11210__$1;
(statearr_11223_11253[(2)] = null);

(statearr_11223_11253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11211 === (9))){
var inst_11170 = (state_11210[(8)]);
var inst_11186 = cljs.core.vec.call(null,inst_11170);
var state_11210__$1 = state_11210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11210__$1,(11),out,inst_11186);
} else {
if((state_val_11211 === (5))){
var inst_11178 = (state_11210[(10)]);
var inst_11171 = (state_11210[(7)]);
var inst_11174 = (state_11210[(9)]);
var inst_11178__$1 = f.call(null,inst_11174);
var inst_11179 = cljs.core._EQ_.call(null,inst_11178__$1,inst_11171);
var inst_11180 = cljs.core.keyword_identical_QMARK_.call(null,inst_11171,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_11181 = (inst_11179) || (inst_11180);
var state_11210__$1 = (function (){var statearr_11224 = state_11210;
(statearr_11224[(10)] = inst_11178__$1);

return statearr_11224;
})();
if(cljs.core.truth_(inst_11181)){
var statearr_11225_11254 = state_11210__$1;
(statearr_11225_11254[(1)] = (8));

} else {
var statearr_11226_11255 = state_11210__$1;
(statearr_11226_11255[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11211 === (14))){
var inst_11203 = (state_11210[(2)]);
var inst_11204 = cljs.core.async.close_BANG_.call(null,out);
var state_11210__$1 = (function (){var statearr_11228 = state_11210;
(statearr_11228[(13)] = inst_11203);

return statearr_11228;
})();
var statearr_11229_11256 = state_11210__$1;
(statearr_11229_11256[(2)] = inst_11204);

(statearr_11229_11256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11211 === (10))){
var inst_11193 = (state_11210[(2)]);
var state_11210__$1 = state_11210;
var statearr_11230_11257 = state_11210__$1;
(statearr_11230_11257[(2)] = inst_11193);

(statearr_11230_11257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11211 === (8))){
var inst_11178 = (state_11210[(10)]);
var inst_11174 = (state_11210[(9)]);
var inst_11170 = (state_11210[(8)]);
var inst_11183 = inst_11170.push(inst_11174);
var tmp11227 = inst_11170;
var inst_11170__$1 = tmp11227;
var inst_11171 = inst_11178;
var state_11210__$1 = (function (){var statearr_11231 = state_11210;
(statearr_11231[(7)] = inst_11171);

(statearr_11231[(14)] = inst_11183);

(statearr_11231[(8)] = inst_11170__$1);

return statearr_11231;
})();
var statearr_11232_11258 = state_11210__$1;
(statearr_11232_11258[(2)] = null);

(statearr_11232_11258[(1)] = (2));


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
});})(c__8489__auto___11244,out))
;
return ((function (switch__8377__auto__,c__8489__auto___11244,out){
return (function() {
var cljs$core$async$state_machine__8378__auto__ = null;
var cljs$core$async$state_machine__8378__auto____0 = (function (){
var statearr_11236 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11236[(0)] = cljs$core$async$state_machine__8378__auto__);

(statearr_11236[(1)] = (1));

return statearr_11236;
});
var cljs$core$async$state_machine__8378__auto____1 = (function (state_11210){
while(true){
var ret_value__8379__auto__ = (function (){try{while(true){
var result__8380__auto__ = switch__8377__auto__.call(null,state_11210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8380__auto__;
}
break;
}
}catch (e11237){if((e11237 instanceof Object)){
var ex__8381__auto__ = e11237;
var statearr_11238_11259 = state_11210;
(statearr_11238_11259[(5)] = ex__8381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11260 = state_11210;
state_11210 = G__11260;
continue;
} else {
return ret_value__8379__auto__;
}
break;
}
});
cljs$core$async$state_machine__8378__auto__ = function(state_11210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8378__auto____1.call(this,state_11210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8378__auto____0;
cljs$core$async$state_machine__8378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8378__auto____1;
return cljs$core$async$state_machine__8378__auto__;
})()
;})(switch__8377__auto__,c__8489__auto___11244,out))
})();
var state__8491__auto__ = (function (){var statearr_11239 = f__8490__auto__.call(null);
(statearr_11239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8489__auto___11244);

return statearr_11239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8491__auto__);
});})(c__8489__auto___11244,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1453744586618