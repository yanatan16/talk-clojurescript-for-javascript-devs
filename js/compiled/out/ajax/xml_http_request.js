// Compiled by ClojureScript 1.7.170 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__44324,handler){
var map__44325 = p__44324;
var map__44325__$1 = ((((!((map__44325 == null)))?((((map__44325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44325):map__44325);
var uri = cljs.core.get.call(null,map__44325__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__44325__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__44325__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__44325__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__44325__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__44325__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__44325__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__44325,map__44325__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__44323_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__44323_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__44325,map__44325__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___44333 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___44333)){
var response_type_44334 = temp__4425__auto___44333;
this$__$1.responseType = cljs.core.name.call(null,response_type_44334);
} else {
}

var seq__44327_44335 = cljs.core.seq.call(null,headers);
var chunk__44328_44336 = null;
var count__44329_44337 = (0);
var i__44330_44338 = (0);
while(true){
if((i__44330_44338 < count__44329_44337)){
var vec__44331_44339 = cljs.core._nth.call(null,chunk__44328_44336,i__44330_44338);
var k_44340 = cljs.core.nth.call(null,vec__44331_44339,(0),null);
var v_44341 = cljs.core.nth.call(null,vec__44331_44339,(1),null);
this$__$1.setRequestHeader(k_44340,v_44341);

var G__44342 = seq__44327_44335;
var G__44343 = chunk__44328_44336;
var G__44344 = count__44329_44337;
var G__44345 = (i__44330_44338 + (1));
seq__44327_44335 = G__44342;
chunk__44328_44336 = G__44343;
count__44329_44337 = G__44344;
i__44330_44338 = G__44345;
continue;
} else {
var temp__4425__auto___44346 = cljs.core.seq.call(null,seq__44327_44335);
if(temp__4425__auto___44346){
var seq__44327_44347__$1 = temp__4425__auto___44346;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44327_44347__$1)){
var c__24589__auto___44348 = cljs.core.chunk_first.call(null,seq__44327_44347__$1);
var G__44349 = cljs.core.chunk_rest.call(null,seq__44327_44347__$1);
var G__44350 = c__24589__auto___44348;
var G__44351 = cljs.core.count.call(null,c__24589__auto___44348);
var G__44352 = (0);
seq__44327_44335 = G__44349;
chunk__44328_44336 = G__44350;
count__44329_44337 = G__44351;
i__44330_44338 = G__44352;
continue;
} else {
var vec__44332_44353 = cljs.core.first.call(null,seq__44327_44347__$1);
var k_44354 = cljs.core.nth.call(null,vec__44332_44353,(0),null);
var v_44355 = cljs.core.nth.call(null,vec__44332_44353,(1),null);
this$__$1.setRequestHeader(k_44354,v_44355);

var G__44356 = cljs.core.next.call(null,seq__44327_44347__$1);
var G__44357 = null;
var G__44358 = (0);
var G__44359 = (0);
seq__44327_44335 = G__44356;
chunk__44328_44336 = G__44357;
count__44329_44337 = G__44358;
i__44330_44338 = G__44359;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__23786__auto__ = body;
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
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

//# sourceMappingURL=xml_http_request.js.map?rel=1453744773930