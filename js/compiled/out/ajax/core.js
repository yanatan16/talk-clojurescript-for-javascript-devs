// Compiled by ClojureScript 1.7.170 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('goog.net.XhrIo');
goog.require('ajax.xml_http_request');
goog.require('goog.json');
goog.require('goog.Uri.QueryData');
goog.require('goog.structs');
goog.require('clojure.string');
goog.require('goog.json.Serializer');
goog.require('ajax.protocols');
goog.require('ajax.xhrio');
ajax.core.process_response = (function ajax$core$process_response(response,interceptor){

return ajax.protocols._process_response.call(null,interceptor,response);
});
ajax.core.process_request = (function ajax$core$process_request(request,interceptor){

return ajax.protocols._process_request.call(null,interceptor,request);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24400__auto__,k__24401__auto__){
var self__ = this;
var this__24400__auto____$1 = this;
return cljs.core._lookup.call(null,this__24400__auto____$1,k__24401__auto__,null);
});

ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24402__auto__,k44527,else__24403__auto__){
var self__ = this;
var this__24402__auto____$1 = this;
var G__44529 = (((k44527 instanceof cljs.core.Keyword))?k44527.fqn:null);
switch (G__44529) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k44527,else__24403__auto__);

}
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__44530,opts){
var self__ = this;
var map__44531 = p__44530;
var map__44531__$1 = ((((!((map__44531 == null)))?((((map__44531.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44531.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44531):map__44531);
var request__$1 = cljs.core.get.call(null,map__44531__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__44533 = this;
var map__44533__$1 = ((((!((map__44533 == null)))?((((map__44533.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44533.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44533):map__44533);
var request__$2 = cljs.core.get.call(null,map__44533__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__44535,xhrio){
var self__ = this;
var map__44536 = p__44535;
var map__44536__$1 = ((((!((map__44536 == null)))?((((map__44536.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44536.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44536):map__44536);
var response__$1 = cljs.core.get.call(null,map__44536__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__44538 = this;
var map__44538__$1 = ((((!((map__44538 == null)))?((((map__44538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44538):map__44538);
var response__$2 = cljs.core.get.call(null,map__44538__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return response__$2.call(null,xhrio);
});

ajax.core.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24414__auto__,writer__24415__auto__,opts__24416__auto__){
var self__ = this;
var this__24414__auto____$1 = this;
var pr_pair__24417__auto__ = ((function (this__24414__auto____$1){
return (function (keyval__24418__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24415__auto__,cljs.core.pr_writer,""," ","",opts__24416__auto__,keyval__24418__auto__);
});})(this__24414__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24415__auto__,pr_pair__24417__auto__,"#ajax.core.StandardInterceptor{",", ","}",opts__24416__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$ = true;

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44526){
var self__ = this;
var G__44526__$1 = this;
return (new cljs.core.RecordIter((0),G__44526__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24398__auto__){
var self__ = this;
var this__24398__auto____$1 = this;
return self__.__meta;
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24394__auto__){
var self__ = this;
var this__24394__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24404__auto__){
var self__ = this;
var this__24404__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24395__auto__){
var self__ = this;
var this__24395__auto____$1 = this;
var h__24221__auto__ = self__.__hash;
if(!((h__24221__auto__ == null))){
return h__24221__auto__;
} else {
var h__24221__auto____$1 = cljs.core.hash_imap.call(null,this__24395__auto____$1);
self__.__hash = h__24221__auto____$1;

return h__24221__auto____$1;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24396__auto__,other__24397__auto__){
var self__ = this;
var this__24396__auto____$1 = this;
if(cljs.core.truth_((function (){var and__23774__auto__ = other__24397__auto__;
if(cljs.core.truth_(and__23774__auto__)){
var and__23774__auto____$1 = (this__24396__auto____$1.constructor === other__24397__auto__.constructor);
if(and__23774__auto____$1){
return cljs.core.equiv_map.call(null,this__24396__auto____$1,other__24397__auto__);
} else {
return and__23774__auto____$1;
}
} else {
return and__23774__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24409__auto__,k__24410__auto__){
var self__ = this;
var this__24409__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__24410__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24409__auto____$1),self__.__meta),k__24410__auto__);
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24410__auto__)),null));
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24407__auto__,k__24408__auto__,G__44526){
var self__ = this;
var this__24407__auto____$1 = this;
var pred__44540 = cljs.core.keyword_identical_QMARK_;
var expr__44541 = k__24408__auto__;
if(cljs.core.truth_(pred__44540.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__44541))){
return (new ajax.core.StandardInterceptor(G__44526,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44540.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__44541))){
return (new ajax.core.StandardInterceptor(self__.name,G__44526,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44540.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__44541))){
return (new ajax.core.StandardInterceptor(self__.name,self__.request,G__44526,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24408__auto__,G__44526),null));
}
}
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24412__auto__){
var self__ = this;
var this__24412__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24399__auto__,G__44526){
var self__ = this;
var this__24399__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,G__44526,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24405__auto__,entry__24406__auto__){
var self__ = this;
var this__24405__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24406__auto__)){
return cljs.core._assoc.call(null,this__24405__auto____$1,cljs.core._nth.call(null,entry__24406__auto__,(0)),cljs.core._nth.call(null,entry__24406__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24405__auto____$1,entry__24406__auto__);
}
});

ajax.core.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
});

ajax.core.StandardInterceptor.cljs$lang$type = true;

ajax.core.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__24434__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/StandardInterceptor");
});

ajax.core.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__24434__auto__,writer__24435__auto__){
return cljs.core._write.call(null,writer__24435__auto__,"ajax.core/StandardInterceptor");
});

ajax.core.__GT_StandardInterceptor = (function ajax$core$__GT_StandardInterceptor(name,request,response){
return (new ajax.core.StandardInterceptor(name,request,response,null,null,null));
});

ajax.core.map__GT_StandardInterceptor = (function ajax$core$map__GT_StandardInterceptor(G__44528){
return (new ajax.core.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__44528),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__44528),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__44528),null,cljs.core.dissoc.call(null,G__44528,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)),null));
});

ajax.core.to_interceptor = (function ajax$core$to_interceptor(m){
return ajax.core.map__GT_StandardInterceptor.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.identity,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.identity], null),m));
});
ajax.core.get_content_type = (function ajax$core$get_content_type(response){
var or__23786__auto__ = ajax.protocols._get_response_header.call(null,response,"Content-Type");
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return "";
}
});
ajax.core.abort = (function ajax$core$abort(this$){
return ajax.protocols._abort.call(null,this$);
});
ajax.core.success_QMARK_ = (function ajax$core$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.exception_message = (function ajax$core$exception_message(e){
return e.message;
});
ajax.core.exception_response = (function ajax$core$exception_response(e,status,p__44544,xhrio){
var map__44547 = p__44544;
var map__44547__$1 = ((((!((map__44547 == null)))?((((map__44547.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44547.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44547):map__44547);
var description = cljs.core.get.call(null,map__44547__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str(ajax.core.exception_message.call(null,e)),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.protocols._body.call(null,xhrio));
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.core.fail = (function ajax$core$fail(var_args){
var args__24851__auto__ = [];
var len__24844__auto___44553 = arguments.length;
var i__24845__auto___44554 = (0);
while(true){
if((i__24845__auto___44554 < len__24844__auto___44553)){
args__24851__auto__.push((arguments[i__24845__auto___44554]));

var G__44555 = (i__24845__auto___44554 + (1));
i__24845__auto___44554 = G__44555;
continue;
} else {
}
break;
}

var argseq__24852__auto__ = ((((3) < args__24851__auto__.length))?(new cljs.core.IndexedSeq(args__24851__auto__.slice((3)),(0))):null);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__24852__auto__);
});

ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.core.fail.cljs$lang$maxFixedArity = (3);

ajax.core.fail.cljs$lang$applyTo = (function (seq44549){
var G__44550 = cljs.core.first.call(null,seq44549);
var seq44549__$1 = cljs.core.next.call(null,seq44549);
var G__44551 = cljs.core.first.call(null,seq44549__$1);
var seq44549__$2 = cljs.core.next.call(null,seq44549__$1);
var G__44552 = cljs.core.first.call(null,seq44549__$2);
var seq44549__$3 = cljs.core.next.call(null,seq44549__$2);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__44550,G__44551,G__44552,seq44549__$3);
});
ajax.core.content_type_to_request_header = (function ajax$core$content_type_to_request_header(content_type){
return clojure.string.join.call(null,", ",cljs.core.map.call(null,(function (p1__44556_SHARP_){
return [cljs.core.str(p1__44556_SHARP_),cljs.core.str("; charset=utf-8")].join('');
}),((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24400__auto__,k__24401__auto__){
var self__ = this;
var this__24400__auto____$1 = this;
return cljs.core._lookup.call(null,this__24400__auto____$1,k__24401__auto__,null);
});

ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24402__auto__,k44559,else__24403__auto__){
var self__ = this;
var this__24402__auto____$1 = this;
var G__44561 = (((k44559 instanceof cljs.core.Keyword))?k44559.fqn:null);
switch (G__44561) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k44559,else__24403__auto__);

}
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__44562,request){
var self__ = this;
var map__44563 = p__44562;
var map__44563__$1 = ((((!((map__44563 == null)))?((((map__44563.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44563.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44563):map__44563);
var content_type__$1 = cljs.core.get.call(null,map__44563__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__44565 = this;
var map__44565__$1 = ((((!((map__44565 == null)))?((((map__44565.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44565.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44565):map__44565);
var content_type__$2 = cljs.core.get.call(null,map__44565__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__44565,map__44565__$1,content_type__$2,map__44563,map__44563__$1,content_type__$1){
return (function (p1__44557_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.core.content_type_to_request_header.call(null,content_type__$2)], null),(function (){var or__23786__auto__ = p1__44557_SHARP_;
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__44565,map__44565__$1,content_type__$2,map__44563,map__44563__$1,content_type__$1))
);
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__44567,xhrio){
var self__ = this;
var map__44568 = p__44567;
var map__44568__$1 = ((((!((map__44568 == null)))?((((map__44568.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44568.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44568):map__44568);
var format = map__44568__$1;
var read__$1 = cljs.core.get.call(null,map__44568__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__44570 = this;
var map__44570__$1 = ((((!((map__44570 == null)))?((((map__44570.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44570.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44570):map__44570);
var format__$1 = map__44570__$1;
var read__$2 = cljs.core.get.call(null,map__44570__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.core.fail,status);
var G__44573 = status;
switch (G__44573) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
return fail.call(null,"Request failed.",new cljs.core.Keyword(null,"failed","failed",-1397425762));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = read__$2.call(null,xhrio);
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e44574){if((e44574 instanceof Object)){
var e = e44574;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e44574;

}
}
}
}catch (e44572){if((e44572 instanceof Object)){
var e = e44572;
var message = e.message;
return ajax.core.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e44572;

}
}});

ajax.core.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24414__auto__,writer__24415__auto__,opts__24416__auto__){
var self__ = this;
var this__24414__auto____$1 = this;
var pr_pair__24417__auto__ = ((function (this__24414__auto____$1){
return (function (keyval__24418__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24415__auto__,cljs.core.pr_writer,""," ","",opts__24416__auto__,keyval__24418__auto__);
});})(this__24414__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24415__auto__,pr_pair__24417__auto__,"#ajax.core.ResponseFormat{",", ","}",opts__24416__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$ = true;

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44558){
var self__ = this;
var G__44558__$1 = this;
return (new cljs.core.RecordIter((0),G__44558__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24398__auto__){
var self__ = this;
var this__24398__auto____$1 = this;
return self__.__meta;
});

ajax.core.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24394__auto__){
var self__ = this;
var this__24394__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24404__auto__){
var self__ = this;
var this__24404__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24395__auto__){
var self__ = this;
var this__24395__auto____$1 = this;
var h__24221__auto__ = self__.__hash;
if(!((h__24221__auto__ == null))){
return h__24221__auto__;
} else {
var h__24221__auto____$1 = cljs.core.hash_imap.call(null,this__24395__auto____$1);
self__.__hash = h__24221__auto____$1;

return h__24221__auto____$1;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24396__auto__,other__24397__auto__){
var self__ = this;
var this__24396__auto____$1 = this;
if(cljs.core.truth_((function (){var and__23774__auto__ = other__24397__auto__;
if(cljs.core.truth_(and__23774__auto__)){
var and__23774__auto____$1 = (this__24396__auto____$1.constructor === other__24397__auto__.constructor);
if(and__23774__auto____$1){
return cljs.core.equiv_map.call(null,this__24396__auto____$1,other__24397__auto__);
} else {
return and__23774__auto____$1;
}
} else {
return and__23774__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24409__auto__,k__24410__auto__){
var self__ = this;
var this__24409__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__24410__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24409__auto____$1),self__.__meta),k__24410__auto__);
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24410__auto__)),null));
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24407__auto__,k__24408__auto__,G__44558){
var self__ = this;
var this__24407__auto____$1 = this;
var pred__44575 = cljs.core.keyword_identical_QMARK_;
var expr__44576 = k__24408__auto__;
if(cljs.core.truth_(pred__44575.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__44576))){
return (new ajax.core.ResponseFormat(G__44558,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44575.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__44576))){
return (new ajax.core.ResponseFormat(self__.read,G__44558,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44575.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__44576))){
return (new ajax.core.ResponseFormat(self__.read,self__.description,G__44558,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24408__auto__,G__44558),null));
}
}
}
});

ajax.core.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24412__auto__){
var self__ = this;
var this__24412__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24399__auto__,G__44558){
var self__ = this;
var this__24399__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,G__44558,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24405__auto__,entry__24406__auto__){
var self__ = this;
var this__24405__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24406__auto__)){
return cljs.core._assoc.call(null,this__24405__auto____$1,cljs.core._nth.call(null,entry__24406__auto__,(0)),cljs.core._nth.call(null,entry__24406__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24405__auto____$1,entry__24406__auto__);
}
});

ajax.core.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
});

ajax.core.ResponseFormat.cljs$lang$type = true;

ajax.core.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__24434__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ResponseFormat");
});

ajax.core.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__24434__auto__,writer__24435__auto__){
return cljs.core._write.call(null,writer__24435__auto__,"ajax.core/ResponseFormat");
});

ajax.core.__GT_ResponseFormat = (function ajax$core$__GT_ResponseFormat(read,description,content_type){
return (new ajax.core.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.core.map__GT_ResponseFormat = (function ajax$core$map__GT_ResponseFormat(G__44560){
return (new ajax.core.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__44560),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__44560),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__44560),null,cljs.core.dissoc.call(null,G__44560,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)),null));
});

ajax.core.params_to_str_old = (function ajax$core$params_to_str_old(params){
if(cljs.core.truth_(params)){
return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
} else {
return null;
}
});
ajax.core.param_to_str;
ajax.core.vec_param_to_str = (function ajax$core$vec_param_to_str(var_args){
var args44580 = [];
var len__24844__auto___44583 = arguments.length;
var i__24845__auto___44584 = (0);
while(true){
if((i__24845__auto___44584 < len__24844__auto___44583)){
args44580.push((arguments[i__24845__auto___44584]));

var G__44585 = (i__24845__auto___44584 + (1));
i__24845__auto___44584 = G__44585;
continue;
} else {
}
break;
}

var G__44582 = args44580.length;
switch (G__44582) {
case 3:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44580.length)].join('')));

}
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3 = (function (prefix,key,value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,key){
return (function (value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (key,value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});
});

ajax.core.vec_param_to_str.cljs$lang$maxFixedArity = 3;
ajax.core.param_to_str = (function ajax$core$param_to_str(var_args){
var args44587 = [];
var len__24844__auto___44594 = arguments.length;
var i__24845__auto___44595 = (0);
while(true){
if((i__24845__auto___44595 < len__24844__auto___44594)){
args44587.push((arguments[i__24845__auto___44595]));

var G__44596 = (i__24845__auto___44595 + (1));
i__24845__auto___44595 = G__44596;
continue;
} else {
}
break;
}

var G__44589 = args44587.length;
switch (G__44589) {
case 2:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44587.length)].join('')));

}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,p__44590){
var vec__44591 = p__44590;
var key = cljs.core.nth.call(null,vec__44591,(0),null);
var value = cljs.core.nth.call(null,vec__44591,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name.call(null,key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,new_key),cljs.core.seq.call(null,value));
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,ajax.core.vec_param_to_str.call(null,new_key),cljs.core.seq.call(null,value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (p__44592){
var vec__44593 = p__44592;
var key = cljs.core.nth.call(null,vec__44593,(0),null);
var value = cljs.core.nth.call(null,vec__44593,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name.call(null,key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,new_key),cljs.core.seq.call(null,value));
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,ajax.core.vec_param_to_str.call(null,new_key),cljs.core.seq.call(null,value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});
});

ajax.core.param_to_str.cljs$lang$maxFixedArity = 2;
ajax.core.to_utf8_writer = (function ajax$core$to_utf8_writer(to_str){
return to_str;
});
ajax.core.params_to_str = (function ajax$core$params_to_str(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__44600){
var vec__44601 = p__44600;
var k = cljs.core.nth.call(null,vec__44601,(0),null);
var v = cljs.core.nth.call(null,vec__44601,(1),null);
return [cljs.core.str(k),cljs.core.str("="),cljs.core.str(v)].join('');
}),cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,null),cljs.core.seq.call(null,params))));
});
ajax.core.uri_with_params = (function ajax$core$uri_with_params(uri,params){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str(ajax.core.params_to_str.call(null,params))].join('');
} else {
return uri;
}
});
ajax.core.get_request_format = (function ajax$core$get_request_format(format){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ProcessGet = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24400__auto__,k__24401__auto__){
var self__ = this;
var this__24400__auto____$1 = this;
return cljs.core._lookup.call(null,this__24400__auto____$1,k__24401__auto__,null);
});

ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24402__auto__,k44604,else__24403__auto__){
var self__ = this;
var this__24402__auto____$1 = this;
var G__44606 = k44604;
switch (G__44606) {
default:
return cljs.core.get.call(null,self__.__extmap,k44604,else__24403__auto__);

}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__44607){
var self__ = this;
var map__44608 = p__44607;
var map__44608__$1 = ((((!((map__44608 == null)))?((((map__44608.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44608.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44608):map__44608);
var request = map__44608__$1;
var method = cljs.core.get.call(null,map__44608__$1,new cljs.core.Keyword(null,"method","method",55703592));
var ___$1 = this;
if(cljs.core._EQ_.call(null,method,"GET")){
return cljs.core.reduced.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),((function (___$1,map__44608,map__44608__$1,request,method){
return (function (p1__44602_SHARP_){
return ajax.core.uri_with_params.call(null,p1__44602_SHARP_,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(request));
});})(___$1,map__44608,map__44608__$1,request,method))
));
} else {
return request;
}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24414__auto__,writer__24415__auto__,opts__24416__auto__){
var self__ = this;
var this__24414__auto____$1 = this;
var pr_pair__24417__auto__ = ((function (this__24414__auto____$1){
return (function (keyval__24418__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24415__auto__,cljs.core.pr_writer,""," ","",opts__24416__auto__,keyval__24418__auto__);
});})(this__24414__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24415__auto__,pr_pair__24417__auto__,"#ajax.core.ProcessGet{",", ","}",opts__24416__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IIterable$ = true;

ajax.core.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44603){
var self__ = this;
var G__44603__$1 = this;
return (new cljs.core.RecordIter((0),G__44603__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24398__auto__){
var self__ = this;
var this__24398__auto____$1 = this;
return self__.__meta;
});

ajax.core.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24394__auto__){
var self__ = this;
var this__24394__auto____$1 = this;
return (new ajax.core.ProcessGet(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24404__auto__){
var self__ = this;
var this__24404__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24395__auto__){
var self__ = this;
var this__24395__auto____$1 = this;
var h__24221__auto__ = self__.__hash;
if(!((h__24221__auto__ == null))){
return h__24221__auto__;
} else {
var h__24221__auto____$1 = cljs.core.hash_imap.call(null,this__24395__auto____$1);
self__.__hash = h__24221__auto____$1;

return h__24221__auto____$1;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24396__auto__,other__24397__auto__){
var self__ = this;
var this__24396__auto____$1 = this;
if(cljs.core.truth_((function (){var and__23774__auto__ = other__24397__auto__;
if(cljs.core.truth_(and__23774__auto__)){
var and__23774__auto____$1 = (this__24396__auto____$1.constructor === other__24397__auto__.constructor);
if(and__23774__auto____$1){
return cljs.core.equiv_map.call(null,this__24396__auto____$1,other__24397__auto__);
} else {
return and__23774__auto____$1;
}
} else {
return and__23774__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24409__auto__,k__24410__auto__){
var self__ = this;
var this__24409__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__24410__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24409__auto____$1),self__.__meta),k__24410__auto__);
} else {
return (new ajax.core.ProcessGet(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24410__auto__)),null));
}
});

ajax.core.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24407__auto__,k__24408__auto__,G__44603){
var self__ = this;
var this__24407__auto____$1 = this;
var pred__44610 = cljs.core.keyword_identical_QMARK_;
var expr__44611 = k__24408__auto__;
return (new ajax.core.ProcessGet(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24408__auto__,G__44603),null));
});

ajax.core.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24412__auto__){
var self__ = this;
var this__24412__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24399__auto__,G__44603){
var self__ = this;
var this__24399__auto____$1 = this;
return (new ajax.core.ProcessGet(G__44603,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24405__auto__,entry__24406__auto__){
var self__ = this;
var this__24405__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24406__auto__)){
return cljs.core._assoc.call(null,this__24405__auto____$1,cljs.core._nth.call(null,entry__24406__auto__,(0)),cljs.core._nth.call(null,entry__24406__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24405__auto____$1,entry__24406__auto__);
}
});

ajax.core.ProcessGet.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.ProcessGet.cljs$lang$type = true;

ajax.core.ProcessGet.cljs$lang$ctorPrSeq = (function (this__24434__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ProcessGet");
});

ajax.core.ProcessGet.cljs$lang$ctorPrWriter = (function (this__24434__auto__,writer__24435__auto__){
return cljs.core._write.call(null,writer__24435__auto__,"ajax.core/ProcessGet");
});

ajax.core.__GT_ProcessGet = (function ajax$core$__GT_ProcessGet(){
return (new ajax.core.ProcessGet(null,null,null));
});

ajax.core.map__GT_ProcessGet = (function ajax$core$map__GT_ProcessGet(G__44605){
return (new ajax.core.ProcessGet(null,cljs.core.dissoc.call(null,G__44605),null));
});

ajax.core.throw_error = (function ajax$core$throw_error(args){
throw (new Error([cljs.core.str(args)].join('')));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24400__auto__,k__24401__auto__){
var self__ = this;
var this__24400__auto____$1 = this;
return cljs.core._lookup.call(null,this__24400__auto____$1,k__24401__auto__,null);
});

ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24402__auto__,k44615,else__24403__auto__){
var self__ = this;
var this__24402__auto____$1 = this;
var G__44617 = k44615;
switch (G__44617) {
default:
return cljs.core.get.call(null,self__.__extmap,k44615,else__24403__auto__);

}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__44618){
var self__ = this;
var map__44619 = p__44618;
var map__44619__$1 = ((((!((map__44619 == null)))?((((map__44619.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44619.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44619):map__44619);
var request = map__44619__$1;
var body = cljs.core.get.call(null,map__44619__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var params = cljs.core.get.call(null,map__44619__$1,new cljs.core.Keyword(null,"params","params",710516235));
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced.call(null,request);
}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24414__auto__,writer__24415__auto__,opts__24416__auto__){
var self__ = this;
var this__24414__auto____$1 = this;
var pr_pair__24417__auto__ = ((function (this__24414__auto____$1){
return (function (keyval__24418__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24415__auto__,cljs.core.pr_writer,""," ","",opts__24416__auto__,keyval__24418__auto__);
});})(this__24414__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24415__auto__,pr_pair__24417__auto__,"#ajax.core.DirectSubmission{",", ","}",opts__24416__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$ = true;

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44614){
var self__ = this;
var G__44614__$1 = this;
return (new cljs.core.RecordIter((0),G__44614__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24398__auto__){
var self__ = this;
var this__24398__auto____$1 = this;
return self__.__meta;
});

ajax.core.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24394__auto__){
var self__ = this;
var this__24394__auto____$1 = this;
return (new ajax.core.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24404__auto__){
var self__ = this;
var this__24404__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24395__auto__){
var self__ = this;
var this__24395__auto____$1 = this;
var h__24221__auto__ = self__.__hash;
if(!((h__24221__auto__ == null))){
return h__24221__auto__;
} else {
var h__24221__auto____$1 = cljs.core.hash_imap.call(null,this__24395__auto____$1);
self__.__hash = h__24221__auto____$1;

return h__24221__auto____$1;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24396__auto__,other__24397__auto__){
var self__ = this;
var this__24396__auto____$1 = this;
if(cljs.core.truth_((function (){var and__23774__auto__ = other__24397__auto__;
if(cljs.core.truth_(and__23774__auto__)){
var and__23774__auto____$1 = (this__24396__auto____$1.constructor === other__24397__auto__.constructor);
if(and__23774__auto____$1){
return cljs.core.equiv_map.call(null,this__24396__auto____$1,other__24397__auto__);
} else {
return and__23774__auto____$1;
}
} else {
return and__23774__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24409__auto__,k__24410__auto__){
var self__ = this;
var this__24409__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__24410__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24409__auto____$1),self__.__meta),k__24410__auto__);
} else {
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24410__auto__)),null));
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24407__auto__,k__24408__auto__,G__44614){
var self__ = this;
var this__24407__auto____$1 = this;
var pred__44621 = cljs.core.keyword_identical_QMARK_;
var expr__44622 = k__24408__auto__;
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24408__auto__,G__44614),null));
});

ajax.core.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24412__auto__){
var self__ = this;
var this__24412__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24399__auto__,G__44614){
var self__ = this;
var this__24399__auto____$1 = this;
return (new ajax.core.DirectSubmission(G__44614,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24405__auto__,entry__24406__auto__){
var self__ = this;
var this__24405__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24406__auto__)){
return cljs.core._assoc.call(null,this__24405__auto____$1,cljs.core._nth.call(null,entry__24406__auto__,(0)),cljs.core._nth.call(null,entry__24406__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24405__auto____$1,entry__24406__auto__);
}
});

ajax.core.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.DirectSubmission.cljs$lang$type = true;

ajax.core.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__24434__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/DirectSubmission");
});

ajax.core.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__24434__auto__,writer__24435__auto__){
return cljs.core._write.call(null,writer__24435__auto__,"ajax.core/DirectSubmission");
});

ajax.core.__GT_DirectSubmission = (function ajax$core$__GT_DirectSubmission(){
return (new ajax.core.DirectSubmission(null,null,null));
});

ajax.core.map__GT_DirectSubmission = (function ajax$core$map__GT_DirectSubmission(G__44616){
return (new ajax.core.DirectSubmission(null,cljs.core.dissoc.call(null,G__44616),null));
});

ajax.core.apply_request_format = (function ajax$core$apply_request_format(write,params){
return write.call(null,params);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24400__auto__,k__24401__auto__){
var self__ = this;
var this__24400__auto____$1 = this;
return cljs.core._lookup.call(null,this__24400__auto____$1,k__24401__auto__,null);
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24402__auto__,k44626,else__24403__auto__){
var self__ = this;
var this__24402__auto____$1 = this;
var G__44628 = k44626;
switch (G__44628) {
default:
return cljs.core.get.call(null,self__.__extmap,k44626,else__24403__auto__);

}
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__44629){
var self__ = this;
var map__44630 = p__44629;
var map__44630__$1 = ((((!((map__44630 == null)))?((((map__44630.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44630.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44630):map__44630);
var request = map__44630__$1;
var uri = cljs.core.get.call(null,map__44630__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__44630__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__44630__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__44630__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__44630__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__44632 = ajax.core.get_request_format.call(null,format);
var map__44632__$1 = ((((!((map__44632 == null)))?((((map__44632.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44632.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44632):map__44632);
var write = cljs.core.get.call(null,map__44632__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__44632__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?ajax.core.apply_request_format.call(null,write,params):ajax.core.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__23786__auto__ = headers;
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"headers","headers",-835030129),(cljs.core.truth_(content_type)?cljs.core.assoc.call(null,headers__$1,"Content-Type",ajax.core.content_type_to_request_header.call(null,content_type)):headers__$1));
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24414__auto__,writer__24415__auto__,opts__24416__auto__){
var self__ = this;
var this__24414__auto____$1 = this;
var pr_pair__24417__auto__ = ((function (this__24414__auto____$1){
return (function (keyval__24418__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24415__auto__,cljs.core.pr_writer,""," ","",opts__24416__auto__,keyval__24418__auto__);
});})(this__24414__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24415__auto__,pr_pair__24417__auto__,"#ajax.core.ApplyRequestFormat{",", ","}",opts__24416__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$ = true;

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44625){
var self__ = this;
var G__44625__$1 = this;
return (new cljs.core.RecordIter((0),G__44625__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24398__auto__){
var self__ = this;
var this__24398__auto____$1 = this;
return self__.__meta;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24394__auto__){
var self__ = this;
var this__24394__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24404__auto__){
var self__ = this;
var this__24404__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24395__auto__){
var self__ = this;
var this__24395__auto____$1 = this;
var h__24221__auto__ = self__.__hash;
if(!((h__24221__auto__ == null))){
return h__24221__auto__;
} else {
var h__24221__auto____$1 = cljs.core.hash_imap.call(null,this__24395__auto____$1);
self__.__hash = h__24221__auto____$1;

return h__24221__auto____$1;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24396__auto__,other__24397__auto__){
var self__ = this;
var this__24396__auto____$1 = this;
if(cljs.core.truth_((function (){var and__23774__auto__ = other__24397__auto__;
if(cljs.core.truth_(and__23774__auto__)){
var and__23774__auto____$1 = (this__24396__auto____$1.constructor === other__24397__auto__.constructor);
if(and__23774__auto____$1){
return cljs.core.equiv_map.call(null,this__24396__auto____$1,other__24397__auto__);
} else {
return and__23774__auto____$1;
}
} else {
return and__23774__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24409__auto__,k__24410__auto__){
var self__ = this;
var this__24409__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__24410__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24409__auto____$1),self__.__meta),k__24410__auto__);
} else {
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24410__auto__)),null));
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24407__auto__,k__24408__auto__,G__44625){
var self__ = this;
var this__24407__auto____$1 = this;
var pred__44634 = cljs.core.keyword_identical_QMARK_;
var expr__44635 = k__24408__auto__;
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24408__auto__,G__44625),null));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24412__auto__){
var self__ = this;
var this__24412__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24399__auto__,G__44625){
var self__ = this;
var this__24399__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(G__44625,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24405__auto__,entry__24406__auto__){
var self__ = this;
var this__24405__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24406__auto__)){
return cljs.core._assoc.call(null,this__24405__auto____$1,cljs.core._nth.call(null,entry__24406__auto__,(0)),cljs.core._nth.call(null,entry__24406__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24405__auto____$1,entry__24406__auto__);
}
});

ajax.core.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.ApplyRequestFormat.cljs$lang$type = true;

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__24434__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ApplyRequestFormat");
});

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__24434__auto__,writer__24435__auto__){
return cljs.core._write.call(null,writer__24435__auto__,"ajax.core/ApplyRequestFormat");
});

ajax.core.__GT_ApplyRequestFormat = (function ajax$core$__GT_ApplyRequestFormat(){
return (new ajax.core.ApplyRequestFormat(null,null,null));
});

ajax.core.map__GT_ApplyRequestFormat = (function ajax$core$map__GT_ApplyRequestFormat(G__44627){
return (new ajax.core.ApplyRequestFormat(null,cljs.core.dissoc.call(null,G__44627),null));
});

ajax.core.transit_type = (function ajax$core$transit_type(p__44638){
var map__44641 = p__44638;
var map__44641__$1 = ((((!((map__44641 == null)))?((((map__44641.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44641.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44641):map__44641);
var type = cljs.core.get.call(null,map__44641__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var or__23786__auto__ = type;
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return new cljs.core.Keyword(null,"json","json",1279968570);
}
});
ajax.core.transit_write_fn = (function ajax$core$transit_write_fn(type,request){
var writer = (function (){var or__23786__auto__ = new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return cognitect.transit.writer.call(null,type,request);
}
})();
return ((function (writer){
return (function ajax$core$transit_write_fn_$_transit_write_params(params){
return cognitect.transit.write.call(null,writer,params);
});
;})(writer))
});
ajax.core.transit_request_format = (function ajax$core$transit_request_format(var_args){
var args44643 = [];
var len__24844__auto___44646 = arguments.length;
var i__24845__auto___44647 = (0);
while(true){
if((i__24845__auto___44647 < len__24844__auto___44646)){
args44643.push((arguments[i__24845__auto___44647]));

var G__44648 = (i__24845__auto___44647 + (1));
i__24845__auto___44647 = G__44648;
continue;
} else {
}
break;
}

var G__44645 = args44643.length;
switch (G__44645) {
case 0:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44643.length)].join('')));

}
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_request_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
var type = ajax.core.transit_type.call(null,request);
var mime_type = ((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"json","json",1279968570)))?"json":"msgpack");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.transit_write_fn.call(null,type,request),new cljs.core.Keyword(null,"content-type","content-type",-508222634),[cljs.core.str("application/transit+"),cljs.core.str(mime_type)].join('')], null);
});

ajax.core.transit_request_format.cljs$lang$maxFixedArity = 1;
ajax.core.transit_read_fn = (function ajax$core$transit_read_fn(request){
var reader = (function (){var or__23786__auto__ = new cljs.core.Keyword(null,"reader","reader",169660853).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570),request);
}
})();
return ((function (reader){
return (function ajax$core$transit_read_fn_$_transit_read_response(response){
var data = cognitect.transit.read.call(null,reader,ajax.protocols._body.call(null,response));
if(cljs.core.truth_(new cljs.core.Keyword(null,"raw","raw",1604651272).cljs$core$IFn$_invoke$arity$1(request))){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});
;})(reader))
});
ajax.core.transit_response_format = (function ajax$core$transit_response_format(var_args){
var args44650 = [];
var len__24844__auto___44653 = arguments.length;
var i__24845__auto___44654 = (0);
while(true){
if((i__24845__auto___44654 < len__24844__auto___44653)){
args44650.push((arguments[i__24845__auto___44654]));

var G__44655 = (i__24845__auto___44654 + (1));
i__24845__auto___44654 = G__44655;
continue;
} else {
}
break;
}

var G__44652 = args44650.length;
switch (G__44652) {
case 0:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44650.length)].join('')));

}
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return ajax.core.transit_response_format.call(null,ajax.core.transit_type.call(null,request),request);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2 = (function (type,request){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.transit_read_fn.call(null,request),new cljs.core.Keyword(null,"description","description",-1428560544),"Transit",new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json"], null)], null));
});

ajax.core.transit_response_format.cljs$lang$maxFixedArity = 2;
ajax.core.url_request_format = (function ajax$core$url_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.to_utf8_writer.call(null,ajax.core.params_to_str),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function ajax$core$raw_response_format(var_args){
var args44657 = [];
var len__24844__auto___44660 = arguments.length;
var i__24845__auto___44661 = (0);
while(true){
if((i__24845__auto___44661 < len__24844__auto___44660)){
args44657.push((arguments[i__24845__auto___44661]));

var G__44662 = (i__24845__auto___44661 + (1));
i__24845__auto___44661 = G__44662;
continue;
} else {
}
break;
}

var G__44659 = args44657.length;
switch (G__44659) {
case 0:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44657.length)].join('')));

}
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.protocols._body,new cljs.core.Keyword(null,"description","description",-1428560544),"raw text",new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null)], null));
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1 = (function (_){
return ajax.core.raw_response_format.call(null);
});

ajax.core.raw_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.text_request_format = (function ajax$core$text_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.to_utf8_writer.call(null,cljs.core.identity),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
});
ajax.core.text_response_format = ajax.core.raw_response_format;
ajax.core.write_json = (function ajax$core$write_json(data){
return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data));
});
ajax.core.json_request_format = (function ajax$core$json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.write_json,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null);
});
ajax.core.strip_prefix = (function ajax$core$strip_prefix(prefix,text){
if(cljs.core.truth_((function (){var and__23774__auto__ = prefix;
if(cljs.core.truth_(and__23774__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__23774__auto__;
}
})())){
return text.substring(prefix.length);
} else {
return text;
}
});
ajax.core.json_read = (function ajax$core$json_read(var_args){
var args44664 = [];
var len__24844__auto___44667 = arguments.length;
var i__24845__auto___44668 = (0);
while(true){
if((i__24845__auto___44668 < len__24844__auto___44667)){
args44664.push((arguments[i__24845__auto___44668]));

var G__44669 = (i__24845__auto___44668 + (1));
i__24845__auto___44668 = G__44669;
continue;
} else {
}
break;
}

var G__44666 = args44664.length;
switch (G__44666) {
case 4:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44664.length)].join('')));

}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$4 = (function (prefix,raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$3 = (function (prefix,raw,keywords_QMARK_){
return (function (xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$2 = (function (prefix,raw){
return (function (keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$lang$maxFixedArity = 4;
/**
 * Returns a JSON response format.  Options include
 * :keywords? Returns the keys as keywords
 * :prefix A prefix that needs to be stripped off.  This is to
 * combat JSON hijacking.  If you're using JSON with GET request,
 * you should think about using this.
 * http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
 * http://haacked.com/archive/2009/06/24/json-hijacking.aspx
 */
ajax.core.json_response_format = (function ajax$core$json_response_format(var_args){
var args44671 = [];
var len__24844__auto___44677 = arguments.length;
var i__24845__auto___44678 = (0);
while(true){
if((i__24845__auto___44678 < len__24844__auto___44677)){
args44671.push((arguments[i__24845__auto___44678]));

var G__44679 = (i__24845__auto___44678 + (1));
i__24845__auto___44678 = G__44679;
continue;
} else {
}
break;
}

var G__44673 = args44671.length;
switch (G__44673) {
case 0:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44671.length)].join('')));

}
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.json_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__44674){
var map__44675 = p__44674;
var map__44675__$1 = ((((!((map__44675 == null)))?((((map__44675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44675):map__44675);
var prefix = cljs.core.get.call(null,map__44675__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var keywords_QMARK_ = cljs.core.get.call(null,map__44675__$1,new cljs.core.Keyword(null,"keywords?","keywords?",764949733));
var raw = cljs.core.get.call(null,map__44675__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.json_read.call(null,prefix,raw,keywords_QMARK_),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json"], null)], null));
});

ajax.core.json_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json",ajax.core.json_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+transit",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*",ajax.core.raw_response_format], null)], null);
ajax.core.get_format = (function ajax$core$get_format(var_args){
var args44681 = [];
var len__24844__auto___44684 = arguments.length;
var i__24845__auto___44685 = (0);
while(true){
if((i__24845__auto___44685 < len__24844__auto___44684)){
args44681.push((arguments[i__24845__auto___44685]));

var G__44686 = (i__24845__auto___44685 + (1));
i__24845__auto___44685 = G__44686;
continue;
} else {
}
break;
}

var G__44683 = args44681.length;
switch (G__44683) {
case 2:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44681.length)].join('')));

}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_.call(null,format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,request,cljs.core.second.call(null,format_entry));
} else {
return format_entry.call(null,request);

}
}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_.call(null,format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,request,cljs.core.second.call(null,format_entry));
} else {
return format_entry.call(null,request);

}
}
});
});

ajax.core.get_format.cljs$lang$maxFixedArity = 2;
ajax.core.get_accept_entries = (function ajax$core$get_accept_entries(var_args){
var args44688 = [];
var len__24844__auto___44691 = arguments.length;
var i__24845__auto___44692 = (0);
while(true){
if((i__24845__auto___44692 < len__24844__auto___44691)){
args44688.push((arguments[i__24845__auto___44692]));

var G__44693 = (i__24845__auto___44692 + (1));
i__24845__auto___44692 = G__44693;
continue;
} else {
}
break;
}

var G__44690 = args44688.length;
switch (G__44690) {
case 2:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44688.length)].join('')));

}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
var fe = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
var fe = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});
});

ajax.core.get_accept_entries.cljs$lang$maxFixedArity = 2;
ajax.core.content_type_matches = (function ajax$core$content_type_matches(var_args){
var args44695 = [];
var len__24844__auto___44698 = arguments.length;
var i__24845__auto___44699 = (0);
while(true){
if((i__24845__auto___44699 < len__24844__auto___44698)){
args44695.push((arguments[i__24845__auto___44699]));

var G__44700 = (i__24845__auto___44699 + (1));
i__24845__auto___44699 = G__44700;
continue;
} else {
}
break;
}

var G__44697 = args44695.length;
switch (G__44697) {
case 2:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44695.length)].join('')));

}
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2 = (function (content_type,accept){
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (accept){
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});

ajax.core.content_type_matches.cljs$lang$maxFixedArity = 2;
ajax.core.detect_content_type = (function ajax$core$detect_content_type(var_args){
var args44702 = [];
var len__24844__auto___44705 = arguments.length;
var i__24845__auto___44706 = (0);
while(true){
if((i__24845__auto___44706 < len__24844__auto___44705)){
args44702.push((arguments[i__24845__auto___44706]));

var G__44707 = (i__24845__auto___44706 + (1));
i__24845__auto___44706 = G__44707;
continue;
} else {
}
break;
}

var G__44704 = args44702.length;
switch (G__44704) {
case 3:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44702.length)].join('')));

}
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3 = (function (content_type,request,format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2 = (function (content_type,request){
return (function (format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (request,format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});
});

ajax.core.detect_content_type.cljs$lang$maxFixedArity = 3;
ajax.core.get_default_format = (function ajax$core$get_default_format(response,p__44709){
var map__44712 = p__44709;
var map__44712__$1 = ((((!((map__44712 == null)))?((((map__44712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44712):map__44712);
var request = map__44712__$1;
var response_format = cljs.core.get.call(null,map__44712__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var f = ajax.core.detect_content_type.call(null,ajax.core.get_content_type.call(null,response),request);
return ajax.core.get_format.call(null,request,cljs.core.first.call(null,cljs.core.filter.call(null,f,response_format)));
});
ajax.core.detect_response_format_read = (function ajax$core$detect_response_format_read(var_args){
var args44714 = [];
var len__24844__auto___44717 = arguments.length;
var i__24845__auto___44718 = (0);
while(true){
if((i__24845__auto___44718 < len__24844__auto___44717)){
args44714.push((arguments[i__24845__auto___44718]));

var G__44719 = (i__24845__auto___44718 + (1));
i__24845__auto___44718 = G__44719;
continue;
} else {
}
break;
}

var G__44716 = args44714.length;
switch (G__44716) {
case 2:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44714.length)].join('')));

}
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = (function (request,response){
var format = ajax.core.get_default_format.call(null,response,request);
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (response){
var format = ajax.core.get_default_format.call(null,response,request);
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});
});

ajax.core.detect_response_format_read.cljs$lang$maxFixedArity = 2;
ajax.core.accept_header = (function ajax$core$accept_header(p__44721){
var map__44724 = p__44721;
var map__44724__$1 = ((((!((map__44724 == null)))?((((map__44724.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44724.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44724):map__44724);
var request = map__44724__$1;
var response_format = cljs.core.get.call(null,map__44724__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.vector_QMARK_.call(null,response_format)){
return cljs.core.mapcat.call(null,ajax.core.get_accept_entries.call(null,request),response_format);
} else {
return ajax.core.get_accept_entries.call(null,request,response_format);
}
});
ajax.core.detect_response_format = (function ajax$core$detect_response_format(var_args){
var args44726 = [];
var len__24844__auto___44729 = arguments.length;
var i__24845__auto___44730 = (0);
while(true){
if((i__24845__auto___44730 < len__24844__auto___44729)){
args44726.push((arguments[i__24845__auto___44730]));

var G__44731 = (i__24845__auto___44730 + (1));
i__24845__auto___44730 = G__44731;
continue;
} else {
}
break;
}

var G__44728 = args44726.length;
switch (G__44728) {
case 0:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44726.length)].join('')));

}
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.detect_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.default_formats], null));
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var accept = ajax.core.accept_header.call(null,opts);
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.detect_response_format_read.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),[cljs.core.str("(from "),cljs.core.str(accept),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),accept], null));
});

ajax.core.detect_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.get_response_format = (function ajax$core$get_response_format(p__44733){
var map__44736 = p__44733;
var map__44736__$1 = ((((!((map__44736 == null)))?((((map__44736.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44736.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44736):map__44736);
var opts = map__44736__$1;
var response_format = cljs.core.get.call(null,map__44736__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if((response_format instanceof ajax.core.ResponseFormat)){
return response_format;
} else {
if(cljs.core.vector_QMARK_.call(null,response_format)){
return ajax.core.detect_response_format.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return ajax.core.map__GT_ResponseFormat.call(null,response_format);
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null));
} else {
return ajax.core.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
});
ajax.core.normalize_method = (function ajax$core$normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
} else {
return method;
}
});
ajax.core.js_handler = (function ajax$core$js_handler(var_args){
var args44738 = [];
var len__24844__auto___44741 = arguments.length;
var i__24845__auto___44742 = (0);
while(true){
if((i__24845__auto___44742 < len__24844__auto___44741)){
args44738.push((arguments[i__24845__auto___44742]));

var G__44743 = (i__24845__auto___44742 + (1));
i__24845__auto___44742 = G__44743;
continue;
} else {
}
break;
}

var G__44740 = args44738.length;
switch (G__44740) {
case 3:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44738.length)].join('')));

}
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3 = (function (handler,interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2 = (function (handler,interceptors){
return (function (response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return (function (interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});
});

ajax.core.js_handler.cljs$lang$maxFixedArity = 3;
ajax.core.base_handler = (function ajax$core$base_handler(interceptors,p__44745){
var map__44748 = p__44745;
var map__44748__$1 = ((((!((map__44748 == null)))?((((map__44748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44748):map__44748);
var handler = cljs.core.get.call(null,map__44748__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(cljs.core.truth_(handler)){
return ajax.core.js_handler.call(null,handler,interceptors);
} else {
return ajax.core.throw_error.call(null,"No ajax handler provided.");
}
});
ajax.core.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.core.ProcessGet(null,null,null)),(new ajax.core.DirectSubmission(null,null,null)),(new ajax.core.ApplyRequestFormat(null,null,null))], null);
ajax.core.default_interceptors = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
ajax.core.normalize_request = (function ajax$core$normalize_request(request){
var response_format = ajax.core.get_response_format.call(null,request);
return cljs.core.update.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"method","method",55703592),ajax.core.normalize_method),new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),((function (response_format){
return (function (p1__44750_SHARP_){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response_format], null),(function (){var or__23786__auto__ = p1__44750_SHARP_;
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return cljs.core.deref.call(null,ajax.core.default_interceptors);
}
})(),ajax.core.request_interceptors);
});})(response_format))
);
});
ajax.core.new_default_api = (function ajax$core$new_default_api(){
return (new goog.net.XhrIo());
});
ajax.core.raw_ajax_request = (function ajax$core$raw_ajax_request(p__44751){
var map__44754 = p__44751;
var map__44754__$1 = ((((!((map__44754 == null)))?((((map__44754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44754):map__44754);
var request = map__44754__$1;
var interceptors = cljs.core.get.call(null,map__44754__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var request__$1 = cljs.core.reduce.call(null,ajax.core.process_request,request,interceptors);
var handler = ajax.core.base_handler.call(null,cljs.core.reverse.call(null,interceptors),request__$1);
var api = (function (){var or__23786__auto__ = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(request__$1);
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return ajax.core.new_default_api.call(null);
}
})();
return ajax.protocols._js_ajax_request.call(null,api,request__$1,handler);
});
ajax.core.ajax_request = (function ajax$core$ajax_request(request){
return ajax.core.raw_ajax_request.call(null,ajax.core.normalize_request.call(null,request));
});
ajax.core.keyword_request_format = (function ajax$core$keyword_request_format(format,format_params){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"write","write",-1857649168),format], null);
} else {
if((format == null)){
return ajax.core.transit_request_format.call(null,format_params);
} else {
var G__44757 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__44757) {
case "transit":
return ajax.core.transit_request_format.call(null,format_params);

break;
case "json":
return ajax.core.json_request_format.call(null);

break;
case "text":
return ajax.core.text_request_format.call(null);

break;
case "raw":
return ajax.core.url_request_format.call(null);

break;
case "url":
return ajax.core.url_request_format.call(null);

break;
default:
return null;

}

}
}
}
});
ajax.core.keyword_response_format_element = (function ajax$core$keyword_response_format_element(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,format),ajax$core$keyword_response_format_element.call(null,cljs.core.second.call(null,format),format_params)], null);
} else {
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom"], null);
} else {
if((format == null)){
return ajax.core.detect_response_format.call(null);
} else {
var G__44760 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__44760) {
case "transit":
return ajax.core.transit_response_format.call(null,format_params);

break;
case "json":
return ajax.core.json_response_format.call(null,format_params);

break;
case "text":
return ajax.core.text_response_format.call(null);

break;
case "raw":
return ajax.core.raw_response_format.call(null);

break;
case "detect":
return ajax.core.detect_response_format.call(null);

break;
default:
return null;

}

}
}
}
}
});
ajax.core.keyword_response_format = (function ajax$core$keyword_response_format(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,(function (p1__44762_SHARP_){
return ajax.core.keyword_response_format_element.call(null,p1__44762_SHARP_,format_params);
}),format));
} else {
return ajax.core.keyword_response_format_element.call(null,format,format_params);
}
});
ajax.core.transform_handler = (function ajax$core$transform_handler(var_args){
var args44763 = [];
var len__24844__auto___44776 = arguments.length;
var i__24845__auto___44777 = (0);
while(true){
if((i__24845__auto___44777 < len__24844__auto___44776)){
args44763.push((arguments[i__24845__auto___44777]));

var G__44778 = (i__24845__auto___44777 + (1));
i__24845__auto___44777 = G__44778;
continue;
} else {
}
break;
}

var G__44765 = args44763.length;
switch (G__44765) {
case 2:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44763.length)].join('')));

}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2 = (function (p__44766,p__44767){
var map__44768 = p__44766;
var map__44768__$1 = ((((!((map__44768 == null)))?((((map__44768.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44768.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44768):map__44768);
var handler = cljs.core.get.call(null,map__44768__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__44768__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__44768__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var vec__44769 = p__44767;
var ok = cljs.core.nth.call(null,vec__44769,(0),null);
var result = cljs.core.nth.call(null,vec__44769,(1),null);
var temp__4423__auto___44780 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4423__auto___44780)){
var h_44781 = temp__4423__auto___44780;
h_44781.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1 = (function (p__44771){
var map__44772 = p__44771;
var map__44772__$1 = ((((!((map__44772 == null)))?((((map__44772.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44772.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44772):map__44772);
var handler = cljs.core.get.call(null,map__44772__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__44772__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__44772__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
return ((function (map__44772,map__44772__$1,handler,error_handler,finally$){
return (function (p__44774){
var vec__44775 = p__44774;
var ok = cljs.core.nth.call(null,vec__44775,(0),null);
var result = cljs.core.nth.call(null,vec__44775,(1),null);
var temp__4423__auto___44782 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4423__auto___44782)){
var h_44783 = temp__4423__auto___44782;
h_44783.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});
;})(map__44772,map__44772__$1,handler,error_handler,finally$))
});

ajax.core.transform_handler.cljs$lang$maxFixedArity = 2;
ajax.core.transform_opts = (function ajax$core$transform_opts(p__44784){
var map__44787 = p__44784;
var map__44787__$1 = ((((!((map__44787 == null)))?((((map__44787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44787):map__44787);
var opts = map__44787__$1;
var method = cljs.core.get.call(null,map__44787__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__44787__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var response_format = cljs.core.get.call(null,map__44787__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var params = cljs.core.get.call(null,map__44787__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.call(null,map__44787__$1,new cljs.core.Keyword(null,"body","body",-2049205669));

var needs_format = ((body == null)) && (cljs.core.not_EQ_.call(null,method,"GET"));
var rf = (cljs.core.truth_((function (){var or__23786__auto__ = format;
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return needs_format;
}
})())?ajax.core.keyword_request_format.call(null,format,opts):null);
return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"handler","handler",-195596612),ajax.core.transform_handler.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),rf,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.keyword_response_format.call(null,response_format,opts));
});
ajax.core.easy_ajax_request = (function ajax$core$easy_ajax_request(uri,method,opts){
return ajax.core.ajax_request.call(null,ajax.core.transform_opts.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"method","method",55703592),method)));
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__24851__auto__ = [];
var len__24844__auto___44791 = arguments.length;
var i__24845__auto___44792 = (0);
while(true){
if((i__24845__auto___44792 < len__24844__auto___44791)){
args__24851__auto__.push((arguments[i__24845__auto___44792]));

var G__44793 = (i__24845__auto___44792 + (1));
i__24845__auto___44792 = G__44793;
continue;
} else {
}
break;
}

var argseq__24852__auto__ = ((((1) < args__24851__auto__.length))?(new cljs.core.IndexedSeq(args__24851__auto__.slice((1)),(0))):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24852__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__30289__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"GET",(((f__30289__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__30289__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq44789){
var G__44790 = cljs.core.first.call(null,seq44789);
var seq44789__$1 = cljs.core.next.call(null,seq44789);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__44790,seq44789__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__24851__auto__ = [];
var len__24844__auto___44796 = arguments.length;
var i__24845__auto___44797 = (0);
while(true){
if((i__24845__auto___44797 < len__24844__auto___44796)){
args__24851__auto__.push((arguments[i__24845__auto___44797]));

var G__44798 = (i__24845__auto___44797 + (1));
i__24845__auto___44797 = G__44798;
continue;
} else {
}
break;
}

var argseq__24852__auto__ = ((((1) < args__24851__auto__.length))?(new cljs.core.IndexedSeq(args__24851__auto__.slice((1)),(0))):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24852__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__30289__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"HEAD",(((f__30289__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__30289__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq44794){
var G__44795 = cljs.core.first.call(null,seq44794);
var seq44794__$1 = cljs.core.next.call(null,seq44794);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__44795,seq44794__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__24851__auto__ = [];
var len__24844__auto___44801 = arguments.length;
var i__24845__auto___44802 = (0);
while(true){
if((i__24845__auto___44802 < len__24844__auto___44801)){
args__24851__auto__.push((arguments[i__24845__auto___44802]));

var G__44803 = (i__24845__auto___44802 + (1));
i__24845__auto___44802 = G__44803;
continue;
} else {
}
break;
}

var argseq__24852__auto__ = ((((1) < args__24851__auto__.length))?(new cljs.core.IndexedSeq(args__24851__auto__.slice((1)),(0))):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24852__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__30289__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"POST",(((f__30289__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__30289__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq44799){
var G__44800 = cljs.core.first.call(null,seq44799);
var seq44799__$1 = cljs.core.next.call(null,seq44799);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__44800,seq44799__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__24851__auto__ = [];
var len__24844__auto___44806 = arguments.length;
var i__24845__auto___44807 = (0);
while(true){
if((i__24845__auto___44807 < len__24844__auto___44806)){
args__24851__auto__.push((arguments[i__24845__auto___44807]));

var G__44808 = (i__24845__auto___44807 + (1));
i__24845__auto___44807 = G__44808;
continue;
} else {
}
break;
}

var argseq__24852__auto__ = ((((1) < args__24851__auto__.length))?(new cljs.core.IndexedSeq(args__24851__auto__.slice((1)),(0))):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24852__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__30289__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PUT",(((f__30289__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__30289__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq44804){
var G__44805 = cljs.core.first.call(null,seq44804);
var seq44804__$1 = cljs.core.next.call(null,seq44804);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__44805,seq44804__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__24851__auto__ = [];
var len__24844__auto___44811 = arguments.length;
var i__24845__auto___44812 = (0);
while(true){
if((i__24845__auto___44812 < len__24844__auto___44811)){
args__24851__auto__.push((arguments[i__24845__auto___44812]));

var G__44813 = (i__24845__auto___44812 + (1));
i__24845__auto___44812 = G__44813;
continue;
} else {
}
break;
}

var argseq__24852__auto__ = ((((1) < args__24851__auto__.length))?(new cljs.core.IndexedSeq(args__24851__auto__.slice((1)),(0))):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24852__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__30289__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"DELETE",(((f__30289__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__30289__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq44809){
var G__44810 = cljs.core.first.call(null,seq44809);
var seq44809__$1 = cljs.core.next.call(null,seq44809);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__44810,seq44809__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__24851__auto__ = [];
var len__24844__auto___44816 = arguments.length;
var i__24845__auto___44817 = (0);
while(true){
if((i__24845__auto___44817 < len__24844__auto___44816)){
args__24851__auto__.push((arguments[i__24845__auto___44817]));

var G__44818 = (i__24845__auto___44817 + (1));
i__24845__auto___44817 = G__44818;
continue;
} else {
}
break;
}

var argseq__24852__auto__ = ((((1) < args__24851__auto__.length))?(new cljs.core.IndexedSeq(args__24851__auto__.slice((1)),(0))):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24852__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__30289__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"OPTIONS",(((f__30289__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__30289__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq44814){
var G__44815 = cljs.core.first.call(null,seq44814);
var seq44814__$1 = cljs.core.next.call(null,seq44814);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__44815,seq44814__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__24851__auto__ = [];
var len__24844__auto___44821 = arguments.length;
var i__24845__auto___44822 = (0);
while(true){
if((i__24845__auto___44822 < len__24844__auto___44821)){
args__24851__auto__.push((arguments[i__24845__auto___44822]));

var G__44823 = (i__24845__auto___44822 + (1));
i__24845__auto___44822 = G__44823;
continue;
} else {
}
break;
}

var argseq__24852__auto__ = ((((1) < args__24851__auto__.length))?(new cljs.core.IndexedSeq(args__24851__auto__.slice((1)),(0))):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24852__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__30289__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"TRACE",(((f__30289__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__30289__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq44819){
var G__44820 = cljs.core.first.call(null,seq44819);
var seq44819__$1 = cljs.core.next.call(null,seq44819);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__44820,seq44819__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__24851__auto__ = [];
var len__24844__auto___44826 = arguments.length;
var i__24845__auto___44827 = (0);
while(true){
if((i__24845__auto___44827 < len__24844__auto___44826)){
args__24851__auto__.push((arguments[i__24845__auto___44827]));

var G__44828 = (i__24845__auto___44827 + (1));
i__24845__auto___44827 = G__44828;
continue;
} else {
}
break;
}

var argseq__24852__auto__ = ((((1) < args__24851__auto__.length))?(new cljs.core.IndexedSeq(args__24851__auto__.slice((1)),(0))):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24852__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__30289__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PATCH",(((f__30289__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__30289__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq44824){
var G__44825 = cljs.core.first.call(null,seq44824);
var seq44824__$1 = cljs.core.next.call(null,seq44824);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__44825,seq44824__$1);
});

//# sourceMappingURL=core.js.map?rel=1453744774747