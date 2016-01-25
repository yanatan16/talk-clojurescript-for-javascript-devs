// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs_demo.slideshow');
goog.require('cljs.core');
goog.require('reagent.core');
cljs_demo.slideshow.active_slide_class = "com-rigsomelight-devcard-slideshow-active";
cljs_demo.slideshow.container_class = "com-rigsomelight-devcards-container";
cljs_demo.slideshow.devcard_class = "com-rigsomelight-devcard";
cljs_demo.slideshow.slideshow_class = "com-rigsomelight-devcards-slideshow";
cljs_demo.slideshow.btn_container_class = "com-rigsomelight-devcards-slideshow-btns-container";
if(typeof cljs_demo.slideshow.state !== 'undefined'){
} else {
cljs_demo.slideshow.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on","on",173873944),false,new cljs.core.Keyword(null,"n","n",562130025),(0)], null));
}
cljs_demo.slideshow.get_hash = (function cljs_demo$slideshow$get_hash(){
return cljs.core.subs.call(null,window.location.hash,(3));
});
cljs_demo.slideshow.add_class = (function cljs_demo$slideshow$add_class(el,class$){
return el.classList.add(class$);
});
cljs_demo.slideshow.remove_class = (function cljs_demo$slideshow$remove_class(el,class$){
return el.classList.remove(class$);
});
cljs_demo.slideshow.get_by_class = (function cljs_demo$slideshow$get_by_class(class$){
return cljs.core.js__GT_clj.call(null,document.getElementsByClassName(class$));
});
cljs_demo.slideshow.container = (function cljs_demo$slideshow$container(){
return cljs_demo.slideshow.get_by_class.call(null,cljs_demo.slideshow.container_class).item((0));
});
cljs_demo.slideshow.count_slides = (function cljs_demo$slideshow$count_slides(){
return cljs_demo.slideshow.get_by_class.call(null,cljs_demo.slideshow.devcard_class).length;
});
cljs_demo.slideshow.swap_active_class_BANG_ = (function cljs_demo$slideshow$swap_active_class_BANG_(from,to){
var slides = cljs_demo.slideshow.get_by_class.call(null,cljs_demo.slideshow.devcard_class);
var temp__4425__auto___38843 = slides.item(from);
if(cljs.core.truth_(temp__4425__auto___38843)){
var slide_38844 = temp__4425__auto___38843;
cljs_demo.slideshow.remove_class.call(null,slide_38844,cljs_demo.slideshow.active_slide_class);
} else {
}

var temp__4425__auto__ = slides.item(to);
if(cljs.core.truth_(temp__4425__auto__)){
var slide = temp__4425__auto__;
cljs_demo.slideshow.add_class.call(null,slide,cljs_demo.slideshow.active_slide_class);

return slide.scrollIntoView();
} else {
return null;
}
});
cljs_demo.slideshow.swap_slide_BANG_ = (function cljs_demo$slideshow$swap_slide_BANG_(n_or_f){
var from = cljs.core.get.call(null,cljs.core.deref.call(null,cljs_demo.slideshow.state),new cljs.core.Keyword(null,"n","n",562130025));
var to = ((cljs.core.fn_QMARK_.call(null,n_or_f))?n_or_f.call(null,from):n_or_f);
var max = cljs_demo.slideshow.count_slides.call(null);
if((((0) <= to)) && ((max > to))){
cljs_demo.slideshow.swap_active_class_BANG_.call(null,(function (){var or__23786__auto__ = from;
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return (0);
}
})(),to);

cljs.core.swap_BANG_.call(null,cljs_demo.slideshow.state,cljs.core.assoc,new cljs.core.Keyword(null,"n","n",562130025),to,new cljs.core.Keyword(null,"on","on",173873944),true);

return true;
} else {
return null;
}
});
cljs_demo.slideshow.start_slideshow_BANG_ = (function cljs_demo$slideshow$start_slideshow_BANG_(){
if(cljs.core.truth_(cljs_demo.slideshow.swap_slide_BANG_.call(null,(0)))){
return cljs_demo.slideshow.add_class.call(null,cljs_demo.slideshow.container.call(null),cljs_demo.slideshow.slideshow_class);
} else {
return null;
}
});
cljs_demo.slideshow.stop_slideshow_BANG_ = (function cljs_demo$slideshow$stop_slideshow_BANG_(){
cljs_demo.slideshow.remove_class.call(null,cljs_demo.slideshow.container.call(null),cljs_demo.slideshow.slideshow_class);

return cljs.core.swap_BANG_.call(null,cljs_demo.slideshow.state,cljs.core.assoc,new cljs.core.Keyword(null,"on","on",173873944),false,new cljs.core.Keyword(null,"n","n",562130025),(0));
});
cljs_demo.slideshow.on_key_down = (function cljs_demo$slideshow$on_key_down(e){
var G__38846 = e.keyCode;
switch (G__38846) {
case (40):
if(cljs.core.truth_(new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_demo.slideshow.state)))){
cljs_demo.slideshow.swap_slide_BANG_.call(null,cljs.core.inc);

return e.preventDefault();
} else {
return null;
}

break;
case (38):
if(cljs.core.truth_(new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_demo.slideshow.state)))){
cljs_demo.slideshow.swap_slide_BANG_.call(null,cljs.core.dec);

return e.preventDefault();
} else {
return null;
}

break;
case (13):
if(cljs.core.truth_(new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_demo.slideshow.state)))){
return null;
} else {
return cljs_demo.slideshow.start_slideshow_BANG_.call(null);
}

break;
case (27):
if(cljs.core.truth_(new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_demo.slideshow.state)))){
return cljs_demo.slideshow.stop_slideshow_BANG_.call(null);
} else {
return null;
}

break;
default:
return null;

}
});
window.addEventListener("hashchange",cljs_demo.slideshow.stop_slideshow_BANG_,false);
cljs_demo.slideshow.buttons = (function cljs_demo$slideshow$buttons(){
var active = cljs.core.get.call(null,cljs.core.deref.call(null,cljs_demo.slideshow.state),new cljs.core.Keyword(null,"on","on",173873944));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.com-rigsomelight-devcards-slideshow-btns","div.com-rigsomelight-devcards-slideshow-btns",2099136980),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.com-rigsomelight-devcards-slideshow-btn","a.com-rigsomelight-devcards-slideshow-btn",-1523573810),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (active){
return (function (p1__38848_SHARP_){
p1__38848_SHARP_.preventDefault();

return cljs_demo.slideshow.start_slideshow_BANG_.call(null);
});})(active))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_(active)?"none":"")], null)], null),"Start Slideshow"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.com-rigsomelight-devcards-slideshow-btn","a.com-rigsomelight-devcards-slideshow-btn",-1523573810),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (active){
return (function (p1__38849_SHARP_){
p1__38849_SHARP_.preventDefault();

return cljs_demo.slideshow.swap_slide_BANG_.call(null,cljs.core.inc);
});})(active))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_(active)?"":"none")], null)], null),"Next"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.com-rigsomelight-devcards-slideshow-btn","a.com-rigsomelight-devcards-slideshow-btn",-1523573810),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (active){
return (function (p1__38850_SHARP_){
p1__38850_SHARP_.preventDefault();

return cljs_demo.slideshow.swap_slide_BANG_.call(null,cljs.core.dec);
});})(active))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_(active)?"":"none")], null)], null),"Previous"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.com-rigsomelight-devcards-slideshow-btn","a.com-rigsomelight-devcards-slideshow-btn",-1523573810),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (active){
return (function (p1__38851_SHARP_){
p1__38851_SHARP_.preventDefault();

return cljs_demo.slideshow.stop_slideshow_BANG_.call(null);
});})(active))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_(active)?"":"none")], null)], null),"Stop"], null)], null);
});
cljs_demo.slideshow.insert_buttons = (function cljs_demo$slideshow$insert_buttons(){
var btn_container = document.createElement("div");
cljs_demo.slideshow.add_class.call(null,btn_container,cljs_demo.slideshow.btn_container_class);

cljs_demo.slideshow.container.call(null).appendChild(btn_container);

reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_demo.slideshow.buttons], null),btn_container);

return window.addEventListener("keydown",cljs_demo.slideshow.on_key_down);
});
if(typeof cljs_demo.slideshow.___ !== 'undefined'){
} else {
cljs_demo.slideshow.___ = setTimeout((function (){
return cljs_demo.slideshow.insert_buttons.call(null);
}),(2000));
}

//# sourceMappingURL=slideshow.js.map?rel=1453744768148