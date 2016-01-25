// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__24851__auto__ = [];
var len__24844__auto___46751 = arguments.length;
var i__24845__auto___46752 = (0);
while(true){
if((i__24845__auto___46752 < len__24844__auto___46751)){
args__24851__auto__.push((arguments[i__24845__auto___46752]));

var G__46753 = (i__24845__auto___46752 + (1));
i__24845__auto___46752 = G__46753;
continue;
} else {
}
break;
}

var argseq__24852__auto__ = ((((2) < args__24851__auto__.length))?(new cljs.core.IndexedSeq(args__24851__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__24852__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__46743_46754 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__46744_46755 = null;
var count__46745_46756 = (0);
var i__46746_46757 = (0);
while(true){
if((i__46746_46757 < count__46745_46756)){
var k_46758 = cljs.core._nth.call(null,chunk__46744_46755,i__46746_46757);
e.setAttribute(cljs.core.name.call(null,k_46758),cljs.core.get.call(null,attrs,k_46758));

var G__46759 = seq__46743_46754;
var G__46760 = chunk__46744_46755;
var G__46761 = count__46745_46756;
var G__46762 = (i__46746_46757 + (1));
seq__46743_46754 = G__46759;
chunk__46744_46755 = G__46760;
count__46745_46756 = G__46761;
i__46746_46757 = G__46762;
continue;
} else {
var temp__4425__auto___46763 = cljs.core.seq.call(null,seq__46743_46754);
if(temp__4425__auto___46763){
var seq__46743_46764__$1 = temp__4425__auto___46763;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46743_46764__$1)){
var c__24589__auto___46765 = cljs.core.chunk_first.call(null,seq__46743_46764__$1);
var G__46766 = cljs.core.chunk_rest.call(null,seq__46743_46764__$1);
var G__46767 = c__24589__auto___46765;
var G__46768 = cljs.core.count.call(null,c__24589__auto___46765);
var G__46769 = (0);
seq__46743_46754 = G__46766;
chunk__46744_46755 = G__46767;
count__46745_46756 = G__46768;
i__46746_46757 = G__46769;
continue;
} else {
var k_46770 = cljs.core.first.call(null,seq__46743_46764__$1);
e.setAttribute(cljs.core.name.call(null,k_46770),cljs.core.get.call(null,attrs,k_46770));

var G__46771 = cljs.core.next.call(null,seq__46743_46764__$1);
var G__46772 = null;
var G__46773 = (0);
var G__46774 = (0);
seq__46743_46754 = G__46771;
chunk__46744_46755 = G__46772;
count__46745_46756 = G__46773;
i__46746_46757 = G__46774;
continue;
}
} else {
}
}
break;
}

var seq__46747_46775 = cljs.core.seq.call(null,children);
var chunk__46748_46776 = null;
var count__46749_46777 = (0);
var i__46750_46778 = (0);
while(true){
if((i__46750_46778 < count__46749_46777)){
var ch_46779 = cljs.core._nth.call(null,chunk__46748_46776,i__46750_46778);
e.appendChild(ch_46779);

var G__46780 = seq__46747_46775;
var G__46781 = chunk__46748_46776;
var G__46782 = count__46749_46777;
var G__46783 = (i__46750_46778 + (1));
seq__46747_46775 = G__46780;
chunk__46748_46776 = G__46781;
count__46749_46777 = G__46782;
i__46750_46778 = G__46783;
continue;
} else {
var temp__4425__auto___46784 = cljs.core.seq.call(null,seq__46747_46775);
if(temp__4425__auto___46784){
var seq__46747_46785__$1 = temp__4425__auto___46784;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46747_46785__$1)){
var c__24589__auto___46786 = cljs.core.chunk_first.call(null,seq__46747_46785__$1);
var G__46787 = cljs.core.chunk_rest.call(null,seq__46747_46785__$1);
var G__46788 = c__24589__auto___46786;
var G__46789 = cljs.core.count.call(null,c__24589__auto___46786);
var G__46790 = (0);
seq__46747_46775 = G__46787;
chunk__46748_46776 = G__46788;
count__46749_46777 = G__46789;
i__46750_46778 = G__46790;
continue;
} else {
var ch_46791 = cljs.core.first.call(null,seq__46747_46785__$1);
e.appendChild(ch_46791);

var G__46792 = cljs.core.next.call(null,seq__46747_46785__$1);
var G__46793 = null;
var G__46794 = (0);
var G__46795 = (0);
seq__46747_46775 = G__46792;
chunk__46748_46776 = G__46793;
count__46749_46777 = G__46794;
i__46750_46778 = G__46795;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq46740){
var G__46741 = cljs.core.first.call(null,seq46740);
var seq46740__$1 = cljs.core.next.call(null,seq46740);
var G__46742 = cljs.core.first.call(null,seq46740__$1);
var seq46740__$2 = cljs.core.next.call(null,seq46740__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__46741,G__46742,seq46740__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__24699__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__24700__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__24701__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__24702__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__24703__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__24699__auto__,prefer_table__24700__auto__,method_cache__24701__auto__,cached_hierarchy__24702__auto__,hierarchy__24703__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__24699__auto__,prefer_table__24700__auto__,method_cache__24701__auto__,cached_hierarchy__24702__auto__,hierarchy__24703__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__24703__auto__,method_table__24699__auto__,prefer_table__24700__auto__,method_cache__24701__auto__,cached_hierarchy__24702__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_46796 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_46796.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_46796.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_46796.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_46796);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__46797,st_map){
var map__46802 = p__46797;
var map__46802__$1 = ((((!((map__46802 == null)))?((((map__46802.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46802.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46802):map__46802);
var container_el = cljs.core.get.call(null,map__46802__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__46802,map__46802__$1,container_el){
return (function (p__46804){
var vec__46805 = p__46804;
var k = cljs.core.nth.call(null,vec__46805,(0),null);
var v = cljs.core.nth.call(null,vec__46805,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__46802,map__46802__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__46806,dom_str){
var map__46809 = p__46806;
var map__46809__$1 = ((((!((map__46809 == null)))?((((map__46809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46809):map__46809);
var c = map__46809__$1;
var content_area_el = cljs.core.get.call(null,map__46809__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__46811){
var map__46814 = p__46811;
var map__46814__$1 = ((((!((map__46814 == null)))?((((map__46814.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46814.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46814):map__46814);
var content_area_el = cljs.core.get.call(null,map__46814__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__25902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto__){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto__){
return (function (state_46857){
var state_val_46858 = (state_46857[(1)]);
if((state_val_46858 === (1))){
var inst_46842 = (state_46857[(7)]);
var inst_46842__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_46843 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_46844 = ["10px","10px","100%","68px","1.0"];
var inst_46845 = cljs.core.PersistentHashMap.fromArrays(inst_46843,inst_46844);
var inst_46846 = cljs.core.merge.call(null,inst_46845,style);
var inst_46847 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_46842__$1,inst_46846);
var inst_46848 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_46842__$1,msg);
var inst_46849 = cljs.core.async.timeout.call(null,(300));
var state_46857__$1 = (function (){var statearr_46859 = state_46857;
(statearr_46859[(8)] = inst_46847);

(statearr_46859[(7)] = inst_46842__$1);

(statearr_46859[(9)] = inst_46848);

return statearr_46859;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46857__$1,(2),inst_46849);
} else {
if((state_val_46858 === (2))){
var inst_46842 = (state_46857[(7)]);
var inst_46851 = (state_46857[(2)]);
var inst_46852 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_46853 = ["auto"];
var inst_46854 = cljs.core.PersistentHashMap.fromArrays(inst_46852,inst_46853);
var inst_46855 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_46842,inst_46854);
var state_46857__$1 = (function (){var statearr_46860 = state_46857;
(statearr_46860[(10)] = inst_46851);

return statearr_46860;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46857__$1,inst_46855);
} else {
return null;
}
}
});})(c__25902__auto__))
;
return ((function (switch__25881__auto__,c__25902__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__25882__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__25882__auto____0 = (function (){
var statearr_46864 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46864[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__25882__auto__);

(statearr_46864[(1)] = (1));

return statearr_46864;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__25882__auto____1 = (function (state_46857){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_46857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e46865){if((e46865 instanceof Object)){
var ex__25885__auto__ = e46865;
var statearr_46866_46868 = state_46857;
(statearr_46866_46868[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46869 = state_46857;
state_46857 = G__46869;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__25882__auto__ = function(state_46857){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__25882__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__25882__auto____1.call(this,state_46857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__25882__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__25882__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto__))
})();
var state__25904__auto__ = (function (){var statearr_46867 = f__25903__auto__.call(null);
(statearr_46867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto__);

return statearr_46867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto__))
);

return c__25902__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__46871 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__46871,(0),null);
var ln = cljs.core.nth.call(null,vec__46871,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__46874 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__46874,(0),null);
var file_line = cljs.core.nth.call(null,vec__46874,(1),null);
var file_column = cljs.core.nth.call(null,vec__46874,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__46874,file_name,file_line,file_column){
return (function (p1__46872_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__46872_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__46874,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__23786__auto__ = file_line;
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
var and__23774__auto__ = cause;
if(cljs.core.truth_(and__23774__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__23774__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__46877 = figwheel.client.heads_up.ensure_container.call(null);
var map__46877__$1 = ((((!((map__46877 == null)))?((((map__46877.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46877.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46877):map__46877);
var content_area_el = cljs.core.get.call(null,map__46877__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__25902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto__){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto__){
return (function (state_46925){
var state_val_46926 = (state_46925[(1)]);
if((state_val_46926 === (1))){
var inst_46908 = (state_46925[(7)]);
var inst_46908__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_46909 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_46910 = ["0.0"];
var inst_46911 = cljs.core.PersistentHashMap.fromArrays(inst_46909,inst_46910);
var inst_46912 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_46908__$1,inst_46911);
var inst_46913 = cljs.core.async.timeout.call(null,(300));
var state_46925__$1 = (function (){var statearr_46927 = state_46925;
(statearr_46927[(8)] = inst_46912);

(statearr_46927[(7)] = inst_46908__$1);

return statearr_46927;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46925__$1,(2),inst_46913);
} else {
if((state_val_46926 === (2))){
var inst_46908 = (state_46925[(7)]);
var inst_46915 = (state_46925[(2)]);
var inst_46916 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_46917 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_46918 = cljs.core.PersistentHashMap.fromArrays(inst_46916,inst_46917);
var inst_46919 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_46908,inst_46918);
var inst_46920 = cljs.core.async.timeout.call(null,(200));
var state_46925__$1 = (function (){var statearr_46928 = state_46925;
(statearr_46928[(9)] = inst_46919);

(statearr_46928[(10)] = inst_46915);

return statearr_46928;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46925__$1,(3),inst_46920);
} else {
if((state_val_46926 === (3))){
var inst_46908 = (state_46925[(7)]);
var inst_46922 = (state_46925[(2)]);
var inst_46923 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_46908,"");
var state_46925__$1 = (function (){var statearr_46929 = state_46925;
(statearr_46929[(11)] = inst_46922);

return statearr_46929;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46925__$1,inst_46923);
} else {
return null;
}
}
}
});})(c__25902__auto__))
;
return ((function (switch__25881__auto__,c__25902__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__25882__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__25882__auto____0 = (function (){
var statearr_46933 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46933[(0)] = figwheel$client$heads_up$clear_$_state_machine__25882__auto__);

(statearr_46933[(1)] = (1));

return statearr_46933;
});
var figwheel$client$heads_up$clear_$_state_machine__25882__auto____1 = (function (state_46925){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_46925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e46934){if((e46934 instanceof Object)){
var ex__25885__auto__ = e46934;
var statearr_46935_46937 = state_46925;
(statearr_46935_46937[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46938 = state_46925;
state_46925 = G__46938;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__25882__auto__ = function(state_46925){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__25882__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__25882__auto____1.call(this,state_46925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__25882__auto____0;
figwheel$client$heads_up$clear_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__25882__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto__))
})();
var state__25904__auto__ = (function (){var statearr_46936 = f__25903__auto__.call(null);
(statearr_46936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto__);

return statearr_46936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto__))
);

return c__25902__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__25902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto__){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto__){
return (function (state_46970){
var state_val_46971 = (state_46970[(1)]);
if((state_val_46971 === (1))){
var inst_46960 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_46970__$1 = state_46970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46970__$1,(2),inst_46960);
} else {
if((state_val_46971 === (2))){
var inst_46962 = (state_46970[(2)]);
var inst_46963 = cljs.core.async.timeout.call(null,(400));
var state_46970__$1 = (function (){var statearr_46972 = state_46970;
(statearr_46972[(7)] = inst_46962);

return statearr_46972;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46970__$1,(3),inst_46963);
} else {
if((state_val_46971 === (3))){
var inst_46965 = (state_46970[(2)]);
var inst_46966 = figwheel.client.heads_up.clear.call(null);
var state_46970__$1 = (function (){var statearr_46973 = state_46970;
(statearr_46973[(8)] = inst_46965);

return statearr_46973;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46970__$1,(4),inst_46966);
} else {
if((state_val_46971 === (4))){
var inst_46968 = (state_46970[(2)]);
var state_46970__$1 = state_46970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46970__$1,inst_46968);
} else {
return null;
}
}
}
}
});})(c__25902__auto__))
;
return ((function (switch__25881__auto__,c__25902__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__25882__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__25882__auto____0 = (function (){
var statearr_46977 = [null,null,null,null,null,null,null,null,null];
(statearr_46977[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__25882__auto__);

(statearr_46977[(1)] = (1));

return statearr_46977;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__25882__auto____1 = (function (state_46970){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_46970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e46978){if((e46978 instanceof Object)){
var ex__25885__auto__ = e46978;
var statearr_46979_46981 = state_46970;
(statearr_46979_46981[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46982 = state_46970;
state_46970 = G__46982;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__25882__auto__ = function(state_46970){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__25882__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__25882__auto____1.call(this,state_46970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__25882__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__25882__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto__))
})();
var state__25904__auto__ = (function (){var statearr_46980 = f__25903__auto__.call(null);
(statearr_46980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto__);

return statearr_46980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto__))
);

return c__25902__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1453744776381