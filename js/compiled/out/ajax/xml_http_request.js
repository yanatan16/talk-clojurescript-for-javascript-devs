// Compiled by ClojureScript 1.7.170 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__14255,handler){
var map__14256 = p__14255;
var map__14256__$1 = ((((!((map__14256 == null)))?((((map__14256.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14256.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14256):map__14256);
var uri = cljs.core.get.call(null,map__14256__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__14256__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__14256__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__14256__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__14256__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__14256__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__14256__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__14256,map__14256__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__14254_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__14254_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__14256,map__14256__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___14264 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___14264)){
var response_type_14265 = temp__4425__auto___14264;
this$__$1.responseType = cljs.core.name.call(null,response_type_14265);
} else {
}

var seq__14258_14266 = cljs.core.seq.call(null,headers);
var chunk__14259_14267 = null;
var count__14260_14268 = (0);
var i__14261_14269 = (0);
while(true){
if((i__14261_14269 < count__14260_14268)){
var vec__14262_14270 = cljs.core._nth.call(null,chunk__14259_14267,i__14261_14269);
var k_14271 = cljs.core.nth.call(null,vec__14262_14270,(0),null);
var v_14272 = cljs.core.nth.call(null,vec__14262_14270,(1),null);
this$__$1.setRequestHeader(k_14271,v_14272);

var G__14273 = seq__14258_14266;
var G__14274 = chunk__14259_14267;
var G__14275 = count__14260_14268;
var G__14276 = (i__14261_14269 + (1));
seq__14258_14266 = G__14273;
chunk__14259_14267 = G__14274;
count__14260_14268 = G__14275;
i__14261_14269 = G__14276;
continue;
} else {
var temp__4425__auto___14277 = cljs.core.seq.call(null,seq__14258_14266);
if(temp__4425__auto___14277){
var seq__14258_14278__$1 = temp__4425__auto___14277;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14258_14278__$1)){
var c__5471__auto___14279 = cljs.core.chunk_first.call(null,seq__14258_14278__$1);
var G__14280 = cljs.core.chunk_rest.call(null,seq__14258_14278__$1);
var G__14281 = c__5471__auto___14279;
var G__14282 = cljs.core.count.call(null,c__5471__auto___14279);
var G__14283 = (0);
seq__14258_14266 = G__14280;
chunk__14259_14267 = G__14281;
count__14260_14268 = G__14282;
i__14261_14269 = G__14283;
continue;
} else {
var vec__14263_14284 = cljs.core.first.call(null,seq__14258_14278__$1);
var k_14285 = cljs.core.nth.call(null,vec__14263_14284,(0),null);
var v_14286 = cljs.core.nth.call(null,vec__14263_14284,(1),null);
this$__$1.setRequestHeader(k_14285,v_14286);

var G__14287 = cljs.core.next.call(null,seq__14258_14278__$1);
var G__14288 = null;
var G__14289 = (0);
var G__14290 = (0);
seq__14258_14266 = G__14287;
chunk__14259_14267 = G__14288;
count__14260_14268 = G__14289;
i__14261_14269 = G__14290;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4668__auto__ = body;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1453863894110