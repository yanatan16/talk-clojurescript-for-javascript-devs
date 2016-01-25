// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs_demo.js_and_html');
goog.require('cljs.core');
goog.require('devcards.core');
goog.require('sablono.core');
cljs_demo.js_and_html.html_using_innerhtml = (function cljs_demo$js_and_html$html_using_innerhtml(el){
return el.innerHTML = "<h2>This is inserted using innerHTML</h2>";
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.js_and_html","cljs_demo.js_and_html",1670647121),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"# Rendering HTML using `el.innerHtml`",[cljs.core.str("\n```clojure\n"),cljs.core.str("(defn html-using-innerhtml [el]\n  (set! (.-innerHTML el)\n        \"<h2>This is inserted using innerHTML</h2>\"))"),cljs.core.str("\n```\n")].join(''),"```javascript\nfunction html_using_innerhtml(el) {\n  el.innerHTML = \"<h2>This is inserted using innerHTML</h2>\";\n}\n```"),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.js_and_html","cljs_demo.js_and_html",1670647121),new cljs.core.Keyword(null,"rendering-html-innerhtml","rendering-html-innerhtml",-1519021698)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"rendering-html-innerhtml",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.dom_node_STAR_.call(null,(function (_,el){
return cljs_demo.js_and_html.html_using_innerhtml.call(null,el);
})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
cljs_demo.js_and_html.on_click = (function cljs_demo$js_and_html$on_click(e){
return alert("Button was clicked");
});
cljs_demo.js_and_html.create_button = (function cljs_demo$js_and_html$create_button(){
var btn = document.createElement("button");
btn.innerText = "Click Me";

btn.addEventListener("click",cljs_demo.js_and_html.on_click);

return btn;
});
cljs_demo.js_and_html.insert_button = (function cljs_demo$js_and_html$insert_button(div){
return div.appendChild(cljs_demo.js_and_html.create_button.call(null));
});
cljs_demo.js_and_html.html_using_createElement = (function cljs_demo$js_and_html$html_using_createElement(el){
var inner_el = document.createElement("h2");
inner_el.innerText = "This is inserted using createElement and setting text";

return el.appendChild(inner_el);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.js_and_html","cljs_demo.js_and_html",1670647121),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"## Rendering HTML with `document.createElement`",[cljs.core.str("\n```clojure\n"),cljs.core.str("(defn create-button []\n  ;; We can save the response of a js interop function call\n  ;;=> var btn = document.createElement(\"button\")\n  (let [btn (.createElement js/document \"button\")]\n    ;; We can set values on js objects\n    ;;=> btn.innerText = \"Click Me\"\n    (set! (.-innerText btn) \"Click Me\")\n    ;; We can pass cljs functions as callbacks\n    ;;=> btn.addEventListener(\"click\", on_click)\n    (.addEventListener btn \"click\" on-click)\n    ;; return btn\n    btn))"),cljs.core.str("\n```\n")].join(''),[cljs.core.str("\n```clojure\n"),cljs.core.str("(defn insert-button [div]\n  ;; We can append the dom with js interop\n  (.appendChild div (create-button)))"),cljs.core.str("\n```\n")].join(''),"_Note_: The callback is just a regular cljs function",[cljs.core.str("\n```clojure\n"),cljs.core.str("(defn on-click [e]\n  ;; We can call global functions\n  (js/alert \"Button was clicked\"))"),cljs.core.str("\n```\n")].join('')),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.js_and_html","cljs_demo.js_and_html",1670647121),new cljs.core.Keyword(null,"rendering-html-createElement","rendering-html-createElement",-769551108)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"rendering-html-createElement",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.dom_node_STAR_.call(null,(function (_,el){
el.innerHTML = "";

return el.appendChild(cljs_demo.js_and_html.create_button.call(null));
})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
cljs_demo.js_and_html.table_using_hiccup = (function cljs_demo$js_and_html$table_using_hiccup(n_rows){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Index"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Value"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5440__auto__ = (function cljs_demo$js_and_html$table_using_hiccup_$_iter__14233(s__14234){
return (new cljs.core.LazySeq(null,(function (){
var s__14234__$1 = s__14234;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__14234__$1);
if(temp__4425__auto__){
var s__14234__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14234__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__14234__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__14236 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__14235 = (0);
while(true){
if((i__14235 < size__5439__auto__)){
var i = cljs.core._nth.call(null,c__5438__auto__,i__14235);
cljs.core.chunk_append.call(null,b__14236,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),i], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Value for ",i], null)], null));

var G__14237 = (i__14235 + (1));
i__14235 = G__14237;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14236),cljs_demo$js_and_html$table_using_hiccup_$_iter__14233.call(null,cljs.core.chunk_rest.call(null,s__14234__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14236),null);
}
} else {
var i = cljs.core.first.call(null,s__14234__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),i], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Value for ",i], null)], null),cljs_demo$js_and_html$table_using_hiccup_$_iter__14233.call(null,cljs.core.rest.call(null,s__14234__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__.call(null,cljs.core.range.call(null,(0),n_rows));
})()], null)], null);
});
cljs_demo.js_and_html.attrs_using_hiccup = (function cljs_demo$js_and_html$attrs_using_hiccup(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.example-class","div.example-class",1644211979),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),"blue",new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(100)], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),cljs_demo.js_and_html.on_click], null)], null);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.js_and_html","cljs_demo.js_and_html",1670647121),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"## Rendering HTML with Hiccup","Hiccup is an HTML templating syntax in Clojure vectors",[cljs.core.str("\n```clojure\n"),cljs.core.str("(defn table-using-hiccup [n-rows]\n  [:table\n   [:thead [:tr [:th \"Index\"] [:th \"Value\"]]]\n   [:tbody\n    (for [i (range 0 n-rows)]\n      [:tr {:key i} [:td i] [:td \"Value for \" i]])]])"),cljs.core.str("\n```\n")].join(''),"Use Clojure maps for attributes",[cljs.core.str("\n```clojure\n"),cljs.core.str("(defn attrs-using-hiccup []\n  [:div.example-class {:style {:background \"blue\"\n                               :width 100\n                               :height 100}\n                       :onClick on-click}])"),cljs.core.str("\n```\n")].join('')),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.js_and_html","cljs_demo.js_and_html",1670647121),new cljs.core.Keyword(null,"rendering-html-hiccup","rendering-html-hiccup",2044326842)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"rendering-html-hiccup",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),React.createElement("div",null,React.createElement("div",{"style": {"display": "inline-block", "margin": "2em"}},React.createElement("h3",null,"Table"),sablono.interpreter.interpret.call(null,cljs_demo.js_and_html.table_using_hiccup.call(null,(3)))),React.createElement("div",{"style": {"display": "inline-block"}},React.createElement("h3",null,"Attrs"),sablono.interpreter.interpret.call(null,cljs_demo.js_and_html.attrs_using_hiccup.call(null)))),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_demo.js_and_html","cljs_demo.js_and_html",1670647121),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"[Next: Using React](#!/cljs_demo.react)"),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));

//# sourceMappingURL=js_and_html.js.map?rel=1453744589741