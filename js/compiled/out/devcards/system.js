// Compiled by ClojureScript 1.7.170 {}
goog.provide('devcards.system');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('devcards.util.utils');
goog.require('goog.history.EventType');
goog.require('cljsjs.react');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('goog.History');
goog.require('cljsjs.react.dom');
goog.require('goog.events');
goog.require('goog.labs.userAgent.device');
goog.require('clojure.string');
devcards.system.l = (function devcards$system$l(x){
console.log(x);

return x;
});
devcards.system.devcards_app_element_id = "com-rigsomelight-devcards-main";
devcards.system.devcards_rendered_card_class = "com-rigsomelight-devcards_rendered-card";
devcards.system.prevent__GT_ = (function devcards$system$prevent__GT_(f){
return (function (e){
e.preventDefault();

return f.call(null,e);
});
});
devcards.system.get_element_by_id = (function devcards$system$get_element_by_id(id){
return document.getElementById(id);
});
devcards.system.devcards_app_node = (function devcards$system$devcards_app_node(){
return devcards.system.get_element_by_id.call(null,devcards.system.devcards_app_element_id);
});
devcards.system.path__GT_unique_card_id = (function devcards$system$path__GT_unique_card_id(path){
return clojure.string.join.call(null,".",cljs.core.map.call(null,(function (x){
return [cljs.core.str("["),cljs.core.str(x),cljs.core.str("]")].join('');
}),cljs.core.map.call(null,cljs.core.name,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cardpath","cardpath",-1078069311),path))));
});
devcards.system.create_element_STAR_ = (function devcards$system$create_element_STAR_(tag,id,style_text){
var el = document.createElement(tag);
el.id = id;

el.appendChild(document.createTextNode(style_text));

return el;
});
devcards.system.create_style_element = cljs.core.partial.call(null,devcards.system.create_element_STAR_,"style");
devcards.system.create_script_element = cljs.core.partial.call(null,devcards.system.create_element_STAR_,"script");
devcards.system.prepend_child = (function devcards$system$prepend_child(node,node2){
var temp__4423__auto__ = node.firstChild;
if(cljs.core.truth_(temp__4423__auto__)){
var first_child = temp__4423__auto__;
return node.insertBefore(node2,first_child);
} else {
return node.appendChild(node2);
}
});
devcards.system.add_css_if_necessary_BANG_ = (function devcards$system$add_css_if_necessary_BANG_(){
var temp__4423__auto__ = document.getElementsByTagName("head");
if(cljs.core.truth_(temp__4423__auto__)){
var heads = temp__4423__auto__;
var head = (heads[(0)]);
if(cljs.core.truth_(devcards.system.get_element_by_id.call(null,"com-rigsomelight-code-highlight-css"))){
} else {
head.appendChild(devcards.system.create_style_element.call(null,"com-rigsomelight-code-highlight-css","/*\n\ngithub.com style (c) Vasily Polovnyov <vast@whiteants.net>\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  color: #333;\n  background: #f8f8f8;\n  -webkit-text-size-adjust: none;\n}\n\n.hljs-comment,\n.diff .hljs-header {\n  color: #998;\n  font-style: italic;\n}\n\n.hljs-keyword,\n.css .rule .hljs-keyword,\n.hljs-winutils,\n.nginx .hljs-title,\n.hljs-subst,\n.hljs-request,\n.hljs-status {\n  color: #333;\n  font-weight: bold;\n}\n\n.hljs-number,\n.hljs-hexcolor,\n.ruby .hljs-constant {\n  color: #008080;\n}\n\n.hljs-string,\n.hljs-tag .hljs-value,\n.hljs-doctag,\n.tex .hljs-formula {\n  color: #d14;\n}\n\n.hljs-title,\n.hljs-id,\n.scss .hljs-preprocessor {\n  color: #900;\n  font-weight: bold;\n}\n\n.hljs-list .hljs-keyword,\n.hljs-subst {\n  font-weight: normal;\n}\n\n.hljs-class .hljs-title,\n.hljs-type,\n.vhdl .hljs-literal,\n.tex .hljs-command {\n  color: #458;\n  font-weight: bold;\n}\n\n.hljs-tag,\n.hljs-tag .hljs-title,\n.hljs-rule .hljs-property,\n.django .hljs-tag .hljs-keyword {\n  color: #000080;\n  font-weight: normal;\n}\n\n.hljs-attribute,\n.hljs-variable,\n.lisp .hljs-body,\n.hljs-name {\n  color: #008080;\n}\n\n.hljs-regexp {\n  color: #009926;\n}\n\n.hljs-symbol,\n.ruby .hljs-symbol .hljs-string,\n.lisp .hljs-keyword,\n.clojure .hljs-keyword,\n.scheme .hljs-keyword,\n.tex .hljs-special,\n.hljs-prompt {\n  color: #990073;\n}\n\n.hljs-built_in {\n  color: #0086b3;\n}\n\n.hljs-preprocessor,\n.hljs-pragma,\n.hljs-pi,\n.hljs-doctype,\n.hljs-shebang,\n.hljs-cdata {\n  color: #999;\n  font-weight: bold;\n}\n\n.hljs-deletion {\n  background: #fdd;\n}\n\n.hljs-addition {\n  background: #dfd;\n}\n\n.diff .hljs-change {\n  background: #0086b3;\n}\n\n.hljs-chunk {\n  color: #aaa;\n}\n"));
}

if(cljs.core.truth_(devcards.system.get_element_by_id.call(null,"com-rigsomelight-devcards-css"))){
} else {
head.appendChild(devcards.system.create_style_element.call(null,"com-rigsomelight-devcards-css","body {\n    margin: 0px;\n}\n\nbody .hljs {\n  padding: 0px;\n  color: #333;\n  background: transparent;\n}\n  \n#com-rigsomelight-devcards-main {\n    padding-bottom: 10em;\n}\n\n.com-rigsomelight-devcards_rendered-card {\n  position: relative;\n}\n\n.com-rigsomelight-devcards-body {\n    background-color: rgb(233,234,237);\n}\n\n.com-rigsomelight-devcards-markdown pre,\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-test-doc .com-rigsomelight-devcards-markdown pre\n{\n  display: block;\n  padding: 9.5px 14px;\n  margin: 0px 0px 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  word-break: normal;\n  word-wrap: normal;\n  overflow-x: scroll;\n  color: #333;\n  background-color: rgb(250,250,250);\n  border: 1px solid #e1e1e1;  \n  margin-left: -14px;\n  margin-right: -14px;  \n  border-left: 0px;\n  border-right: 0px; \n}\n\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-test-doc .com-rigsomelight-devcards-markdown pre {\n  margin-left: -15px;\n  margin-right: -15px;  \n}\n\n/* frameless style for markdown */\n.com-rigsomelight-devcards-framelesss .com-rigsomelight-devcards-markdown {\n    padding-top: 14px;\n    padding-left: 14px;\n    padding-right: 14px;\n}\n\n/* end fremless markdown style */\n\n.com-rigsomelight-devcards-padding-top-border {\n    margin-top: 14px;\n    padding-top: 14px;\n}\n\n.com-rigsomelight-devcards-markdown code {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #990073;\n  background-color: #fafafa;\n  white-space: nowrap;\n  border-radius: 4px;\n}\n\n.com-rigsomelight-devcards-markdown pre code {\n  padding: 0;\n  font-size: 1em;\n  color: inherit;\n  white-space: pre; \n  background-color: transparent;\n  border-radius: 0;\n}\n\n.com-rigsomelight-devcards-base,\n.com-rigsomelight-devcards-markdown {\n\n}\n\n\n.com-rigsomelight-devcards-typog {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 16px;\n    line-height: 1.42857143;\n}\n\n.com-rigsomelight-devcards-typog h1,\n.com-rigsomelight-devcards-typog h2,\n.com-rigsomelight-devcards-typog h3,\n.com-rigsomelight-devcards-typog h4,\n.com-rigsomelight-devcards-typog h5,\n.com-rigsomelight-devcards-markdown h1,\n.com-rigsomelight-devcards-markdown h2,\n.com-rigsomelight-devcards-markdown h3,\n.com-rigsomelight-devcards-markdown h4,\n.com-rigsomelight-devcards-markdown h5 {\n    font-weight: 500;\n}\n\n.com-rigsomelight-devcards-typog a {\n    color: #428bca;\n    text-decoration: none;\n}\n\n.com-rigsomelight-devcards-markdown h1:first-child,\n.com-rigsomelight-devcards-markdown h2:first-child,\n.com-rigsomelight-devcards-markdown h3:first-child,\n.com-rigsomelight-devcards-markdown h4:first-child,\n.com-rigsomelight-devcards-markdown h5:first-child {\n    margin-top: 14px;\n}\n                                           \n.com-rigsomelight-devcards-markdown code,\n.com-rigsomelight-devcards-markdown kbd,\n.com-rigsomelight-devcards-markdown pre,\n.com-rigsomelight-devcards-markdown samp {\n  font-family: Menlo,Monaco,Consolas,\"Courier New\",monospace;\n}\n\n.com-rigsomelight-devcards-navbar {\n    background-color: rgb(60,90,153);\n    border-color: rgb(50,80,153);\n    color: #fff;\n    height: 50px;\n}\n\n.com-rigsomelight-devcards-brand {\n    color: #ccc;\n    font-size: 18px;\n    line-height: 50px;\n    display: block;\n    margin-left: 14px;\n}\n\n.com-rigsomelight-devcards-container {\n /* margin: auto;\n    width: 80%;*/\n}\n\n.com-rigsomelight-devcards-card-base {\n    background: #fff;\n    padding: 8px 14px;     \n    margin-top: 20px;\n}\n\n.com-rigsomelight-devcards-card-base-no-pad {\n    background: #fff;\n    border:  1px solid rgb(231,234,242);\n    margin-top: 20px;\n    border-left: 0px;\n    border-right: 0px;    \n}\n\n.com-rigsomelight-devcards-card-base-no-pad.com-rigsomelight-devcards-card-hide-border {\n   border: 1px solid transparent;\n}\n\n\n.com-rigsomelight-devcards-breadcrumbs {\n    font-size: 16px;\n    line-height: 1.5em;\n    border: none !important;\n}\n\n.com-rigsomelight-devcards-breadcrumb-sep {\n    display: inline-block;\n    padding: 0px 5px;\n    color: #ccc;\n}\n\n.com-rigsomelight-devcards-list-group {\n    margin-top: 30px;\n}\n\n.com-rigsomelight-devcards-list-group-item {\n    color: #555;\n    position: relative;\n    display: block;\n    padding: 10px 14px;\n    margin-bottom: -1px;\n    border-bottom: 1px solid #eee;\n}\n\n.com-rigsomelight-devcards-badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  color: #fff;\n  line-height: 1;\n  vertical-align: baseline;\n  white-space: nowrap;\n  text-align: center;\n  background-color: #999;\n  border-radius: 10px;\n}\n\nbutton.com-rigsomelight-devcards-badge {\n    border: none;\n    padding: 3px 19px;\n}\n\n\n.com-rigsomelight-devcards-panel-heading {\n    padding: 8px 15px;\n    font-size: 16px;\n    line-height: 1.5em;\n    background-color: rgb(142,162,206);\n    background-color: rgb(239, 237, 237);\n}\n\n.com-rigsomelight-devcards-panel-heading a {\n    color: #666;\n}\n\n.com-rigsomelight-devcards-devcard-padding {\n    margin-top: 14px;\n    padding-left: 14px;\n    padding-right: 14px;\n    padding-bottom: 14px;\n}\n\n.com-rigsomelight-devcards-test-line {\n  position: relative;\n  display: block;\n  padding: 10px 14px;\n  border: none;\n  border-top: 1px solid #fafafa;\n}\n\n\n\n\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-context {\n    background-color: #fcfcfc;\n    border-left: 1px solid #f1f1f1;\n    border-right: 1px solid #f1f1f1;      \n}\n\n.com-rigsomelight-devcards-test-line pre {\n  margin: 0px;\n    \n  word-break: normal;\n  word-wrap: normal;\n  overflow-x: scroll;    \n}\n\n\n.com-rigsomelight-devcards-test-line pre code {\n    font-size: 80%;\n    padding: 0px;\n    background-color:transparent;\n}\n    \n.com-rigsomelight-devcards-pass {\n    color: #3c763d;\n    border: 1px solid rgb(199, 225, 160);\n    border-left: 10px solid rgb(199, 225, 160);    \n}\n\n.com-rigsomelight-devcards-fail, .com-rigsomelight-devcards-error {\n  color: #a94442;\n  border: 1px solid rgb(236, 196, 196);    \n  border-left: 10px solid rgb(236, 196, 196);  \n}\n\n.com-rigsomelight-devcards-fail {\n    background-color: rgb(254, 254, 244);\n}\n\n\n.com-rigsomelight-devcards-error {\n    background-color: rgb(254, 245, 245);\n}\n\n\n\n.com-rigsomelight-devcards-test-message {\n    display: block;\n    margin-top: 2px;\n    margin-bottom: 8px;\n}\n\n.com-rigsomelight-devcards-pass .com-rigsomelight-devcards-test-message {\n    color: #386739;\n}\n\n.com-rigsomelight-devcards-fail .com-rigsomelight-devcards-test-message {\n    color: #994745;\n}\n\n.com-rigsomelight-devcards-history-control-small-arrow {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-left-width: 9px;\n    border-left-color: #666;\n    margin-right: -10px;\n}\n\n.com-rigsomelight-devcards-history-control-block {\n    display: inline-block;\n    height: 16px;\n    width: 3px;\n    background-color: #666;\n}    \n\n.com-rigsomelight-devcards-history-control-right {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-left-width: 16px;\n    border-left-color: #666;\n    margin-right: -10px;\n}\n\n.com-rigsomelight-devcards-history-control-left {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-right-width: 16px;\n    border-right-color: #666;\n    margin-left: -10px;\n}\n\n.com-rigsomelight-devcards-history-stop {\n    display: inline-block;\n    height: 17px;\n    width: 17px;\n    background-color: #D88282;\n    border-radius: 3px;\n}\n\n.com-rigsomelight-devcards-history-control-bar {\n    background-color: rgb(255,252,234);\n    padding-top: 5px;\n    padding-bottom: 3px;    \n    margin: 14px 0px;\n    padding-left: 14px;\n    padding-right: 14px;\n    text-align: right;\n    /* position: absolute;\n    top: 0px;\n    right: 0px; */\n}\n\n.com-rigsomelight-devcards-history-control-bar button {\n    background: transparent;\n    border: none;\n    margin: 0px 4px;\n    height: 20px;\n    padding: 1px 28px;\n}\n\n.com-rigsomelight-devcards-history-control-bar + .com-rigsomelight-devcards-padding-top-border {\n    border: none;\n    padding-top: 0px;\n}\n\n.com-rigsomelight-devcards-devcard-padding .com-rigsomelight-devcards-history-control-bar {\n    /* margin-top: -14px; */\n    margin: 14px -30px;\n}\n\n\n\n\n@media (min-width: 768px) {\n\n    \n.com-rigsomelight-devcards-markdown pre,\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-test-doc .com-rigsomelight-devcards-markdown pre {\n  padding: 9.5px 30px;\n  margin-left: -30px;\n  margin-right: -30px;      \n}\n\n.com-rigsomelight-devcards-panel-heading {\n    padding: 8px 30px;\n}    \n\n.com-rigsomelight-devcards-brand {\n    margin-left: 0px;\n}\n\n.com-rigsomelight-devcards-devcard-padding {\n    padding-left: 30px;\n    padding-right: 30px;\n}\n\n.com-rigsomelight-devcards-card-hide-border .com-rigsomelight-devcards-devcard-padding {\n    padding-left: 0px;\n    padding-right: 0px;\n}\n\n.com-rigsomelight-devcards-breadcrumbs {\n    padding: 0px 0px;\n}\n\n.com-rigsomelight-devcards-list-group {\n    margin-top: 30px;\n}\n\n.com-rigsomelight-devcards-list-group-item {\n    padding-left: 0px;\n    padding-right: 0px;    \n}\n    \n .com-rigsomelight-devcards-container {\n    margin: auto;\n    width: 750px;\n }\n\n button.com-rigsomelight-devcards-badge {\n    border: 1px solid #999;\n    padding: 3px 9px;\n    background-color: #ccc;\n }\n\n .com-rigsomelight-devcards-history-control-bar button {\n     padding: 1px 6px;\n }\n\n .com-rigsomelight-devcards-card-base,\n .com-rigsomelight-devcards-card-base-no-pad {\n     border-radius: 3px;\n     border:  1px solid rgb(231,234,242);\n }\n\n .com-rigsomelight-devcards-test-line {\n    padding: 10px 30px;\n }\n\n.com-rigsomelight-devcards-pass {\n  border-left: 25px solid rgb(199, 225, 160);        \n}\n\n.com-rigsomelight-devcards-fail {\n  border-left: 25px solid rgb(236, 196, 196);  \n}\n\n.com-rigsomelight-devcards-error {\n  border-left: 25px solid rgb(236, 196, 196);      \n}\n \n}\n\n@media (min-width: 800px) {\n  .com-rigsomelight-devcards-card-hide-border .com-rigsomelight-devcards-markdown pre {\n      border: 1px solid #e1e1e1;\n      border-radius: 4px;\n      padding-left: 14px;\n      padding-right: 14px;\n\n      margin-left: 0px;\n      margin-right: 0px;            \n  }\n}\n\n@media (min-width: 1200px) {\n  .com-rigsomelight-devcards-card-hide-border .com-rigsomelight-devcards-devcard-padding {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n  .com-rigsomelight-devcards-brand {\n    margin-left: 30px;\n  }\n  .com-rigsomelight-devcards-list-group-item {\n      margin-left: 30px;\n      margin-right: 30px;\n  }\n  \n  .com-rigsomelight-devcards-breadcrumbs {\n    padding: 0px 30px;\n  }\n  \n  .com-rigsomelight-devcards-container {    \n    margin: auto;\n    width: 970px;\n  }\n}\n"));
}

if(cljs.core.truth_(devcards.system.get_element_by_id.call(null,"com-rigsomelight-devcards-addons-css"))){
} else {
head.appendChild(devcards.system.create_style_element.call(null,"com-rigsomelight-devcards-css","/* full width code examples */\n\nbody {\n    overflow-x: hidden;\n}\n\n@media (max-width: 1000px) {\n.com-rigsomelight-devcards-card-hide-border\n.com-rigsomelight-devcards_rendered-card\n.com-rigsomelight-devcards-markdown pre {\n    margin-right: -3000px;\n    margin-left: -3000px;\n    padding-right: 3000px;\n    padding-left: 3000px;        \n}\n}\n\n/* default typography */\n.com-rigsomelight-devcards_rendered-card {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 16px;\n    line-height: 1.42857143;\n}\n\n.com-rigsomelight-devcards_rendered-card code {\n    font-size: 90%;\n}\n\n.com-rigsomelight-devcards_rendered-card h1,\n.com-rigsomelight-devcards_rendered-card h2,\n.com-rigsomelight-devcards_rendered-card h3,\n.com-rigsomelight-devcards_rendered-card h4,\n.com-rigsomelight-devcards_rendered-card h5 {\n    font-weight: 500;\n}\n\n.com-rigsomelight-devcards_rendered-card a {\n    color: #428bca;\n    text-decoration: none;\n}\n"));
}

if(cljs.core.truth_(devcards.system.get_element_by_id.call(null,"com-rigsomelight-edn-css"))){
} else {
head.appendChild(devcards.system.create_style_element.call(null,"com-rigsomelight-edn-css",".com-rigsomelight-rendered-edn .collection {\n    display: flex;\n    display: -webkit-flex;\n}\n\n.com-rigsomelight-rendered-edn .keyval {\n    display: flex;\n    display: -webkit-flex;    \n    flex-wrap: wrap;\n    -webkit-flex-wrap: wrap;    \n}\n\n.com-rigsomelight-rendered-edn .keyval > .keyword {\n    color: #a94442; \n}\n\n.com-rigsomelight-rendered-edn .keyval > *:first-child {\n    margin: 0px 3px;\n    flex-shrink: 0;\n    -webkit-flex-shrink: 0;\n}\n\n.com-rigsomelight-rendered-edn .keyval > *:last-child {\n    margin: 0px 3px;\n}\n\n.com-rigsomelight-rendered-edn .opener {\n    color: #999;\n    margin: 0px 4px;\n    flex-shrink: 0;\n    -webkit-flex-shrink: 0;    \n}\n\n.com-rigsomelight-rendered-edn .closer {\n    display: flex;\n    display: -webkit-flex;\n    flex-direction: column-reverse;\n    -webkit-flex-direction: column-reverse;\n    margin: 0px 3px;    \n    color: #999;\n}\n\n.com-rigsomelight-rendered-edn .string {\n    color: #428bca;\n}\n\n.com-rigsomelight-rendered-edn .string .opener,\n.com-rigsomelight-rendered-edn .string .closer {\n    display: inline;\n    margin: 0px;\n    color: #428bca;    \n}\n"));
}

if(cljs.core.truth_((function (){var or__23786__auto__ = devcards.system.get_element_by_id.call(null,"com-rigsomelight-code-highlighting");
if(cljs.core.truth_(or__23786__auto__)){
return or__23786__auto__;
} else {
return goog.labs.userAgent.device.isMobile();
}
})())){
return null;
} else {
return head.appendChild(devcards.system.create_script_element.call(null,"com-rigsomelight-code-highlighting","!function(e){\"undefined\"!=typeof exports?e(exports):(window.hljs=e({}),\"function\"==typeof define&&define.amd&&define([],function(){return window.hljs}))}(function(e){function n(e){return e.replace(/&/gm,\"&amp;\").replace(/</gm,\"&lt;\").replace(/>/gm,\"&gt;\")}function t(e){return e.nodeName.toLowerCase()}function r(e,n){var t=e&&e.exec(n);return t&&0==t.index}function a(e){var n=(e.className+\" \"+(e.parentNode?e.parentNode.className:\"\")).split(/\\s+/);return n=n.map(function(e){return e.replace(/^lang(uage)?-/,\"\")}),n.filter(function(e){return N(e)||/no(-?)highlight/.test(e)})[0]}function o(e,n){var t={};for(var r in e)t[r]=e[r];if(n)for(var r in n)t[r]=n[r];return t}function i(e){var n=[];return function r(e,a){for(var o=e.firstChild;o;o=o.nextSibling)3==o.nodeType?a+=o.nodeValue.length:1==o.nodeType&&(n.push({event:\"start\",offset:a,node:o}),a=r(o,a),t(o).match(/br|hr|img|input/)||n.push({event:\"stop\",offset:a,node:o}));return a}(e,0),n}function c(e,r,a){function o(){return e.length&&r.length?e[0].offset!=r[0].offset?e[0].offset<r[0].offset?e:r:\"start\"==r[0].event?e:r:e.length?e:r}function i(e){function r(e){return\" \"+e.nodeName+'=\"'+n(e.value)+'\"'}l+=\"<\"+t(e)+Array.prototype.map.call(e.attributes,r).join(\"\")+\">\"}function c(e){l+=\"</\"+t(e)+\">\"}function u(e){(\"start\"==e.event?i:c)(e.node)}for(var s=0,l=\"\",f=[];e.length||r.length;){var g=o();if(l+=n(a.substr(s,g[0].offset-s)),s=g[0].offset,g==e){f.reverse().forEach(c);do u(g.splice(0,1)[0]),g=o();while(g==e&&g.length&&g[0].offset==s);f.reverse().forEach(i)}else\"start\"==g[0].event?f.push(g[0].node):f.pop(),u(g.splice(0,1)[0])}return l+n(a.substr(s))}function u(e){function n(e){return e&&e.source||e}function t(t,r){return RegExp(n(t),\"m\"+(e.cI?\"i\":\"\")+(r?\"g\":\"\"))}function r(a,i){if(!a.compiled){if(a.compiled=!0,a.k=a.k||a.bK,a.k){var c={},u=function(n,t){e.cI&&(t=t.toLowerCase()),t.split(\" \").forEach(function(e){var t=e.split(\"|\");c[t[0]]=[n,t[1]?Number(t[1]):1]})};\"string\"==typeof a.k?u(\"keyword\",a.k):Object.keys(a.k).forEach(function(e){u(e,a.k[e])}),a.k=c}a.lR=t(a.l||/\\b[A-Za-z0-9_]+\\b/,!0),i&&(a.bK&&(a.b=\"\\\\b(\"+a.bK.split(\" \").join(\"|\")+\")\\\\b\"),a.b||(a.b=/\\B|\\b/),a.bR=t(a.b),a.e||a.eW||(a.e=/\\B|\\b/),a.e&&(a.eR=t(a.e)),a.tE=n(a.e)||\"\",a.eW&&i.tE&&(a.tE+=(a.e?\"|\":\"\")+i.tE)),a.i&&(a.iR=t(a.i)),void 0===a.r&&(a.r=1),a.c||(a.c=[]);var s=[];a.c.forEach(function(e){e.v?e.v.forEach(function(n){s.push(o(e,n))}):s.push(\"self\"==e?a:e)}),a.c=s,a.c.forEach(function(e){r(e,a)}),a.starts&&r(a.starts,i);var l=a.c.map(function(e){return e.bK?\"\\\\.?(\"+e.b+\")\\\\.?\":e.b}).concat([a.tE,a.i]).map(n).filter(Boolean);a.t=l.length?t(l.join(\"|\"),!0):{exec:function(){return null}}}}r(e)}function s(e,t,a,o){function i(e,n){for(var t=0;t<n.c.length;t++)if(r(n.c[t].bR,e))return n.c[t]}function c(e,n){return r(e.eR,n)?e:e.eW?c(e.parent,n):void 0}function f(e,n){return!a&&r(n.iR,e)}function g(e,n){var t=x.cI?n[0].toLowerCase():n[0];return e.k.hasOwnProperty(t)&&e.k[t]}function p(e,n,t,r){var a=r?\"\":E.classPrefix,o='<span class=\"'+a,i=t?\"\":\"</span>\";return o+=e+'\">',o+n+i}function d(){if(!w.k)return n(y);var e=\"\",t=0;w.lR.lastIndex=0;for(var r=w.lR.exec(y);r;){e+=n(y.substr(t,r.index-t));var a=g(w,r);a?(B+=a[1],e+=p(a[0],n(r[0]))):e+=n(r[0]),t=w.lR.lastIndex,r=w.lR.exec(y)}return e+n(y.substr(t))}function h(){if(w.sL&&!R[w.sL])return n(y);var e=w.sL?s(w.sL,y,!0,L[w.sL]):l(y);return w.r>0&&(B+=e.r),\"continuous\"==w.subLanguageMode&&(L[w.sL]=e.top),p(e.language,e.value,!1,!0)}function v(){return void 0!==w.sL?h():d()}function b(e,t){var r=e.cN?p(e.cN,\"\",!0):\"\";e.rB?(M+=r,y=\"\"):e.eB?(M+=n(t)+r,y=\"\"):(M+=r,y=t),w=Object.create(e,{parent:{value:w}})}function m(e,t){if(y+=e,void 0===t)return M+=v(),0;var r=i(t,w);if(r)return M+=v(),b(r,t),r.rB?0:t.length;var a=c(w,t);if(a){var o=w;o.rE||o.eE||(y+=t),M+=v();do w.cN&&(M+=\"</span>\"),B+=w.r,w=w.parent;while(w!=a.parent);return o.eE&&(M+=n(t)),y=\"\",a.starts&&b(a.starts,\"\"),o.rE?0:t.length}if(f(t,w))throw new Error('Illegal lexeme \"'+t+'\" for mode \"'+(w.cN||\"<unnamed>\")+'\"');return y+=t,t.length||1}var x=N(e);if(!x)throw new Error('Unknown language: \"'+e+'\"');u(x);for(var w=o||x,L={},M=\"\",k=w;k!=x;k=k.parent)k.cN&&(M=p(k.cN,\"\",!0)+M);var y=\"\",B=0;try{for(var C,j,I=0;;){if(w.t.lastIndex=I,C=w.t.exec(t),!C)break;j=m(t.substr(I,C.index-I),C[0]),I=C.index+j}m(t.substr(I));for(var k=w;k.parent;k=k.parent)k.cN&&(M+=\"</span>\");return{r:B,value:M,language:e,top:w}}catch(A){if(-1!=A.message.indexOf(\"Illegal\"))return{r:0,value:n(t)};throw A}}function l(e,t){t=t||E.languages||Object.keys(R);var r={r:0,value:n(e)},a=r;return t.forEach(function(n){if(N(n)){var t=s(n,e,!1);t.language=n,t.r>a.r&&(a=t),t.r>r.r&&(a=r,r=t)}}),a.language&&(r.second_best=a),r}function f(e){return E.tabReplace&&(e=e.replace(/^((<[^>]+>|\\t)+)/gm,function(e,n){return n.replace(/\\t/g,E.tabReplace)})),E.useBR&&(e=e.replace(/\\n/g,\"<br>\")),e}function g(e,n,t){var r=n?x[n]:t,a=[e.trim()];return e.match(/(\\s|^)hljs(\\s|$)/)||a.push(\"hljs\"),r&&a.push(r),a.join(\" \").trim()}function p(e){var n=a(e);if(!/no(-?)highlight/.test(n)){var t;E.useBR?(t=document.createElementNS(\"http://www.w3.org/1999/xhtml\",\"div\"),t.innerHTML=e.innerHTML.replace(/\\n/g,\"\").replace(/<br[ \\/]*>/g,\"\\n\")):t=e;var r=t.textContent,o=n?s(n,r,!0):l(r),u=i(t);if(u.length){var p=document.createElementNS(\"http://www.w3.org/1999/xhtml\",\"div\");p.innerHTML=o.value,o.value=c(u,i(p),r)}o.value=f(o.value),e.innerHTML=o.value,e.className=g(e.className,n,o.language),e.result={language:o.language,re:o.r},o.second_best&&(e.second_best={language:o.second_best.language,re:o.second_best.r})}}function d(e){E=o(E,e)}function h(){if(!h.called){h.called=!0;var e=document.querySelectorAll(\"pre code\");Array.prototype.forEach.call(e,p)}}function v(){addEventListener(\"DOMContentLoaded\",h,!1),addEventListener(\"load\",h,!1)}function b(n,t){var r=R[n]=t(e);r.aliases&&r.aliases.forEach(function(e){x[e]=n})}function m(){return Object.keys(R)}function N(e){return R[e]||R[x[e]]}var E={classPrefix:\"hljs-\",tabReplace:null,useBR:!1,languages:void 0},R={},x={};return e.highlight=s,e.highlightAuto=l,e.fixMarkup=f,e.highlightBlock=p,e.configure=d,e.initHighlighting=h,e.initHighlightingOnLoad=v,e.registerLanguage=b,e.listLanguages=m,e.getLanguage=N,e.inherit=o,e.IR=\"[a-zA-Z][a-zA-Z0-9_]*\",e.UIR=\"[a-zA-Z_][a-zA-Z0-9_]*\",e.NR=\"\\\\b\\\\d+(\\\\.\\\\d+)?\",e.CNR=\"(\\\\b0[xX][a-fA-F0-9]+|(\\\\b\\\\d+(\\\\.\\\\d*)?|\\\\.\\\\d+)([eE][-+]?\\\\d+)?)\",e.BNR=\"\\\\b(0b[01]+)\",e.RSR=\"!|!=|!==|%|%=|&|&&|&=|\\\\*|\\\\*=|\\\\+|\\\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\\\?|\\\\[|\\\\{|\\\\(|\\\\^|\\\\^=|\\\\||\\\\|=|\\\\|\\\\||~\",e.BE={b:\"\\\\\\\\[\\\\s\\\\S]\",r:0},e.ASM={cN:\"string\",b:\"'\",e:\"'\",i:\"\\\\n\",c:[e.BE]},e.QSM={cN:\"string\",b:'\"',e:'\"',i:\"\\\\n\",c:[e.BE]},e.PWM={b:/\\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\\b/},e.CLCM={cN:\"comment\",b:\"//\",e:\"$\",c:[e.PWM]},e.CBCM={cN:\"comment\",b:\"/\\\\*\",e:\"\\\\*/\",c:[e.PWM]},e.HCM={cN:\"comment\",b:\"#\",e:\"$\",c:[e.PWM]},e.NM={cN:\"number\",b:e.NR,r:0},e.CNM={cN:\"number\",b:e.CNR,r:0},e.BNM={cN:\"number\",b:e.BNR,r:0},e.CSSNM={cN:\"number\",b:e.NR+\"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?\",r:0},e.RM={cN:\"regexp\",b:/\\//,e:/\\/[gimuy]*/,i:/\\n/,c:[e.BE,{b:/\\[/,e:/\\]/,r:0,c:[e.BE]}]},e.TM={cN:\"title\",b:e.IR,r:0},e.UTM={cN:\"title\",b:e.UIR,r:0},e});hljs.registerLanguage(\"ruby\",function(e){var b=\"[a-zA-Z_]\\\\w*[!?=]?|[-+~]\\\\@|<<|>>|=~|===?|<=>|[<>]=?|\\\\*\\\\*|[-/+%^&*~`|]|\\\\[\\\\]=?\",r=\"and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor\",c={cN:\"yardoctag\",b:\"@[A-Za-z]+\"},a={cN:\"value\",b:\"#<\",e:\">\"},s={cN:\"comment\",v:[{b:\"#\",e:\"$\",c:[c]},{b:\"^\\\\=begin\",e:\"^\\\\=end\",c:[c],r:10},{b:\"^__END__\",e:\"\\\\n$\"}]},n={cN:\"subst\",b:\"#\\\\{\",e:\"}\",k:r},t={cN:\"string\",c:[e.BE,n],v:[{b:/'/,e:/'/},{b:/\"/,e:/\"/},{b:/`/,e:/`/},{b:\"%[qQwWx]?\\\\(\",e:\"\\\\)\"},{b:\"%[qQwWx]?\\\\[\",e:\"\\\\]\"},{b:\"%[qQwWx]?{\",e:\"}\"},{b:\"%[qQwWx]?<\",e:\">\"},{b:\"%[qQwWx]?/\",e:\"/\"},{b:\"%[qQwWx]?%\",e:\"%\"},{b:\"%[qQwWx]?-\",e:\"-\"},{b:\"%[qQwWx]?\\\\|\",e:\"\\\\|\"},{b:/\\B\\?(\\\\\\d{1,3}|\\\\x[A-Fa-f0-9]{1,2}|\\\\u[A-Fa-f0-9]{4}|\\\\?\\S)\\b/}]},i={cN:\"params\",b:\"\\\\(\",e:\"\\\\)\",k:r},d=[t,a,s,{cN:\"class\",bK:\"class module\",e:\"$|;\",i:/=/,c:[e.inherit(e.TM,{b:\"[A-Za-z_]\\\\w*(::\\\\w+)*(\\\\?|\\\\!)?\"}),{cN:\"inheritance\",b:\"<\\\\s*\",c:[{cN:\"parent\",b:\"(\"+e.IR+\"::)?\"+e.IR}]},s]},{cN:\"function\",bK:\"def\",e:\" |$|;\",r:0,c:[e.inherit(e.TM,{b:b}),i,s]},{cN:\"constant\",b:\"(::)?(\\\\b[A-Z]\\\\w*(::)?)+\",r:0},{cN:\"symbol\",b:e.UIR+\"(\\\\!|\\\\?)?:\",r:0},{cN:\"symbol\",b:\":\",c:[t,{b:b}],r:0},{cN:\"number\",b:\"(\\\\b0[0-7_]+)|(\\\\b0x[0-9a-fA-F_]+)|(\\\\b[1-9][0-9_]*(\\\\.[0-9_]+)?)|[0_]\\\\b\",r:0},{cN:\"variable\",b:\"(\\\\$\\\\W)|((\\\\$|\\\\@\\\\@?)(\\\\w+))\"},{b:\"(\"+e.RSR+\")\\\\s*\",c:[a,s,{cN:\"regexp\",c:[e.BE,n],i:/\\n/,v:[{b:\"/\",e:\"/[a-z]*\"},{b:\"%r{\",e:\"}[a-z]*\"},{b:\"%r\\\\(\",e:\"\\\\)[a-z]*\"},{b:\"%r!\",e:\"![a-z]*\"},{b:\"%r\\\\[\",e:\"\\\\][a-z]*\"}]}],r:0}];n.c=d,i.c=d;var l=\"[>?]>\",u=\"[\\\\w#]+\\\\(\\\\w+\\\\):\\\\d+:\\\\d+>\",N=\"(\\\\w+-)?\\\\d+\\\\.\\\\d+\\\\.\\\\d(p\\\\d+)?[^>]+>\",o=[{b:/^\\s*=>/,cN:\"status\",starts:{e:\"$\",c:d}},{cN:\"prompt\",b:\"^(\"+l+\"|\"+u+\"|\"+N+\")\",starts:{e:\"$\",c:d}}];return{aliases:[\"rb\",\"gemspec\",\"podspec\",\"thor\",\"irb\"],k:r,c:[s].concat(o).concat(d)}});hljs.registerLanguage(\"javascript\",function(r){return{aliases:[\"js\"],k:{keyword:\"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class\",literal:\"true false null undefined NaN Infinity\",built_in:\"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document\"},c:[{cN:\"pi\",r:10,v:[{b:/^\\s*('|\")use strict('|\")/},{b:/^\\s*('|\")use asm('|\")/}]},r.ASM,r.QSM,r.CLCM,r.CBCM,r.CNM,{b:\"(\"+r.RSR+\"|\\\\b(case|return|throw)\\\\b)\\\\s*\",k:\"return throw case\",c:[r.CLCM,r.CBCM,r.RM,{b:/</,e:/>;/,r:0,sL:\"xml\"}],r:0},{cN:\"function\",bK:\"function\",e:/\\{/,eE:!0,c:[r.inherit(r.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:\"params\",b:/\\(/,e:/\\)/,c:[r.CLCM,r.CBCM],i:/[\"'\\(]/}],i:/\\[|%/},{b:/\\$[(.]/},{b:\"\\\\.\"+r.IR,r:0}]}});hljs.registerLanguage(\"clojure\",function(e){var t={built_in:\"def cond apply if-not if-let if not not= = < > <= >= == + / * - rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit defmacro defn defn- macroexpand macroexpand-1 for dosync and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy defstruct first rest cons defprotocol cast coll deftype defrecord last butlast sigs reify second ffirst fnext nfirst nnext defmulti defmethod meta with-meta ns in-ns create-ns import refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize\"},r=\"a-zA-Z_\\\\-!.?+*=<>&#'\",n=\"[\"+r+\"][\"+r+\"0-9/;:]*\",a=\"[-+]?\\\\d+(\\\\.\\\\d+)?\",o={b:n,r:0},s={cN:\"number\",b:a,r:0},c=e.inherit(e.QSM,{i:null}),i={cN:\"comment\",b:\";\",e:\"$\",r:0},d={cN:\"literal\",b:/\\b(true|false|nil)\\b/},l={cN:\"collection\",b:\"[\\\\[\\\\{]\",e:\"[\\\\]\\\\}]\"},m={cN:\"comment\",b:\"\\\\^\"+n},p={cN:\"comment\",b:\"\\\\^\\\\{\",e:\"\\\\}\"},u={cN:\"attribute\",b:\"[:]\"+n},f={cN:\"list\",b:\"\\\\(\",e:\"\\\\)\"},h={eW:!0,r:0},y={k:t,l:n,cN:\"keyword\",b:n,starts:h},b=[f,c,m,p,i,u,l,s,d,o];return f.c=[{cN:\"comment\",b:\"comment\"},y,h],h.c=b,l.c=b,{aliases:[\"clj\"],i:/\\S/,c:[f,c,m,p,i,u,l,s,d]}});hljs.registerLanguage(\"bash\",function(e){var t={cN:\"variable\",v:[{b:/\\$[\\w\\d#@][\\w\\d_]*/},{b:/\\$\\{(.*?)\\}/}]},s={cN:\"string\",b:/\"/,e:/\"/,c:[e.BE,t,{cN:\"variable\",b:/\\$\\(/,e:/\\)/,c:[e.BE]}]},a={cN:\"string\",b:/'/,e:/'/};return{aliases:[\"sh\",\"zsh\"],l:/-?[a-z\\.]+/,k:{keyword:\"if then else elif fi for while in do done case esac function\",literal:\"true false\",built_in:\"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp\",operator:\"-ne -eq -lt -gt -f -d -e -s -l -a\"},c:[{cN:\"shebang\",b:/^#![^\\n]+sh\\s*$/,r:10},{cN:\"function\",b:/\\w[\\w\\d_]*\\s*\\(\\s*\\)\\s*\\{/,rB:!0,c:[e.inherit(e.TM,{b:/\\w[\\w\\d_]*/})],r:0},e.HCM,e.NM,s,a,t]}});hljs.registerLanguage(\"css\",function(e){var c=\"[a-zA-Z-][a-zA-Z0-9_-]*\",a={cN:\"function\",b:c+\"\\\\(\",rB:!0,eE:!0,e:\"\\\\(\"};return{cI:!0,i:\"[=/|']\",c:[e.CBCM,{cN:\"id\",b:\"\\\\#[A-Za-z0-9_-]+\"},{cN:\"class\",b:\"\\\\.[A-Za-z0-9_-]+\",r:0},{cN:\"attr_selector\",b:\"\\\\[\",e:\"\\\\]\",i:\"$\"},{cN:\"pseudo\",b:\":(:)?[a-zA-Z0-9\\\\_\\\\-\\\\+\\\\(\\\\)\\\\\\\"\\\\']+\"},{cN:\"at_rule\",b:\"@(font-face|page)\",l:\"[a-z-]+\",k:\"font-face page\"},{cN:\"at_rule\",b:\"@\",e:\"[{;]\",c:[{cN:\"keyword\",b:/\\S+/},{b:/\\s/,eW:!0,eE:!0,r:0,c:[a,e.ASM,e.QSM,e.CSSNM]}]},{cN:\"tag\",b:c,r:0},{cN:\"rules\",b:\"{\",e:\"}\",i:\"[^\\\\s]\",r:0,c:[e.CBCM,{cN:\"rule\",b:\"[^\\\\s]\",rB:!0,e:\";\",eW:!0,c:[{cN:\"attribute\",b:\"[A-Z\\\\_\\\\.\\\\-]+\",e:\":\",eE:!0,i:\"[^\\\\s]\",starts:{cN:\"value\",eW:!0,eE:!0,c:[a,e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:\"hexcolor\",b:\"#[0-9A-Fa-f]+\"},{cN:\"important\",b:\"!important\"}]}}]}]}]}});hljs.registerLanguage(\"clojure-repl\",function(){return{c:[{cN:\"prompt\",b:/^([\\w.-]+|\\s*#_)=>/,starts:{e:/$/,sL:\"clojure\",subLanguageMode:\"continuous\"}}]}});hljs.registerLanguage(\"markdown\",function(){return{aliases:[\"md\",\"mkdown\",\"mkd\"],c:[{cN:\"header\",v:[{b:\"^#{1,6}\",e:\"$\"},{b:\"^.+?\\\\n[=-]{2,}$\"}]},{b:\"<\",e:\">\",sL:\"xml\",r:0},{cN:\"bullet\",b:\"^([*+-]|(\\\\d+\\\\.))\\\\s+\"},{cN:\"strong\",b:\"[*_]{2}.+?[*_]{2}\"},{cN:\"emphasis\",v:[{b:\"\\\\*.+?\\\\*\"},{b:\"_.+?_\",r:0}]},{cN:\"blockquote\",b:\"^>\\\\s+\",e:\"$\"},{cN:\"code\",v:[{b:\"`.+?`\"},{b:\"^( {4}|\t)\",e:\"$\",r:0}]},{cN:\"horizontal_rule\",b:\"^[-\\\\*]{3,}\",e:\"$\"},{b:\"\\\\[.+?\\\\][\\\\(\\\\[].*?[\\\\)\\\\]]\",rB:!0,c:[{cN:\"link_label\",b:\"\\\\[\",e:\"\\\\]\",eB:!0,rE:!0,r:0},{cN:\"link_url\",b:\"\\\\]\\\\(\",e:\"\\\\)\",eB:!0,eE:!0},{cN:\"link_reference\",b:\"\\\\]\\\\[\",e:\"\\\\]\",eB:!0,eE:!0}],r:10},{b:\"^\\\\[.+\\\\]:\",rB:!0,c:[{cN:\"link_reference\",b:\"\\\\[\",e:\"\\\\]:\",eB:!0,eE:!0,starts:{cN:\"link_url\",e:\"$\"}}]}]}});hljs.registerLanguage(\"xml\",function(){var t=\"[A-Za-z0-9\\\\._:-]+\",e={b:/<\\?(php)?(?!\\w)/,e:/\\?>/,sL:\"php\",subLanguageMode:\"continuous\"},c={eW:!0,i:/</,r:0,c:[e,{cN:\"attribute\",b:t,r:0},{b:\"=\",r:0,c:[{cN:\"value\",c:[e],v:[{b:/\"/,e:/\"/},{b:/'/,e:/'/},{b:/[^\\s\\/>]+/}]}]}]};return{aliases:[\"html\",\"xhtml\",\"rss\",\"atom\",\"xsl\",\"plist\"],cI:!0,c:[{cN:\"doctype\",b:\"<!DOCTYPE\",e:\">\",r:10,c:[{b:\"\\\\[\",e:\"\\\\]\"}]},{cN:\"comment\",b:\"<!--\",e:\"-->\",r:10},{cN:\"cdata\",b:\"<\\\\!\\\\[CDATA\\\\[\",e:\"\\\\]\\\\]>\",r:10},{cN:\"tag\",b:\"<style(?=\\\\s|>|$)\",e:\">\",k:{title:\"style\"},c:[c],starts:{e:\"</style>\",rE:!0,sL:\"css\"}},{cN:\"tag\",b:\"<script(?=\\\\s|>|$)\",e:\">\",k:{title:\"script\"},c:[c],starts:{e:\"</script>\",rE:!0,sL:\"javascript\"}},e,{cN:\"pi\",b:/<\\?\\w+/,e:/\\?>/,r:10},{cN:\"tag\",b:\"</?\",e:\"/?>\",c:[{cN:\"title\",b:/[^ \\/><\\n\\t]+/,r:0},c]}]}});hljs.registerLanguage(\"java\",function(e){var a=e.UIR+\"(<\"+e.UIR+\">)?\",t=\"false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private\",c=\"(\\\\b(0b[01_]+)|\\\\b0[xX][a-fA-F0-9_]+|(\\\\b[\\\\d_]+(\\\\.[\\\\d_]*)?|\\\\.[\\\\d_]+)([eE][-+]?\\\\d+)?)[lLfF]?\",r={cN:\"number\",b:c,r:0};return{aliases:[\"jsp\"],k:t,i:/<\\//,c:[{cN:\"javadoc\",b:\"/\\\\*\\\\*\",e:\"\\\\*/\",r:0,c:[{cN:\"javadoctag\",b:\"(^|\\\\s)@[A-Za-z]+\"}]},e.CLCM,e.CBCM,e.ASM,e.QSM,{cN:\"class\",bK:\"class interface\",e:/[{;=]/,eE:!0,k:\"class interface\",i:/[:\"\\[\\]]/,c:[{bK:\"extends implements\"},e.UTM]},{bK:\"new throw return\",r:0},{cN:\"function\",b:\"(\"+a+\"\\\\s+)+\"+e.UIR+\"\\\\s*\\\\(\",rB:!0,e:/[{;=]/,eE:!0,k:t,c:[{b:e.UIR+\"\\\\s*\\\\(\",rB:!0,r:0,c:[e.UTM]},{cN:\"params\",b:/\\(/,e:/\\)/,k:t,r:0,c:[e.ASM,e.QSM,e.CNM,e.CBCM]},e.CLCM,e.CBCM]},r,{cN:\"annotation\",b:\"@[A-Za-z]+\"}]}});hljs.registerLanguage(\"json\",function(e){var t={literal:\"true false null\"},i=[e.QSM,e.CNM],l={cN:\"value\",e:\",\",eW:!0,eE:!0,c:i,k:t},c={b:\"{\",e:\"}\",c:[{cN:\"attribute\",b:'\\\\s*\"',e:'\"\\\\s*:\\\\s*',eB:!0,eE:!0,c:[e.BE],i:\"\\\\n\",starts:l}],i:\"\\\\S\"},n={b:\"\\\\[\",e:\"\\\\]\",c:[e.inherit(l,{cN:null})],i:\"\\\\S\"};return i.splice(i.length,0,c,n),{c:i,k:t,i:\"\\\\S\"}});"));
}
} else {
return null;
}
});
devcards.system.render_base_if_necessary_BANG_ = (function devcards$system$render_base_if_necessary_BANG_(){
devcards.system.add_css_if_necessary_BANG_.call(null);

if(cljs.core.truth_(devcards.system.devcards_app_node.call(null))){
return null;
} else {
var el = document.createElement("div");
el.id = devcards.system.devcards_app_element_id;

return devcards.system.prepend_child.call(null,document.body,el);
}
});
devcards.system.set_current_path;

devcards.system.history;
if(typeof devcards.system.history !== 'undefined'){
} else {
devcards.system.history = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){var h = (new goog.History());
h.setEnabled(true);

return h;
})():null);
}
devcards.system.path__GT_token = (function devcards$system$path__GT_token(path){
return [cljs.core.str("!/"),cljs.core.str(clojure.string.join.call(null,"/",cljs.core.map.call(null,cljs.core.name,path)))].join('');
});
devcards.system.token__GT_path = (function devcards$system$token__GT_path(token){
return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.keyword,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,token,/#/,""),/!\//,""),/\//)));
});
devcards.system.hash_navigate = (function devcards$system$hash_navigate(path){
return devcards.system.history.setToken(devcards.system.path__GT_token.call(null,path));
});
devcards.system.hash_routing_init = (function devcards$system$hash_routing_init(state_atom){
goog.events.listen(devcards.system.history,goog.history.EventType.NAVIGATE,(function (p1__43157_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,devcards.system.set_current_path,devcards.system.token__GT_path.call(null,p1__43157_SHARP_.token));
}));

var temp__4425__auto__ = (location["hash"]);
if(cljs.core.truth_(temp__4425__auto__)){
var token = temp__4425__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,devcards.system.set_current_path,devcards.system.token__GT_path.call(null,token));
} else {
return null;
}
});
devcards.system.devcard_QMARK_ = (function devcards$system$devcard_QMARK_(d){
var and__23774__auto__ = cljs.core.map_QMARK_.call(null,d);
if(and__23774__auto__){
var and__23774__auto____$1 = new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__23774__auto____$1)){
var and__23774__auto____$2 = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__23774__auto____$2)){
var and__23774__auto____$3 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__23774__auto____$3)){
return d;
} else {
return and__23774__auto____$3;
}
} else {
return and__23774__auto____$2;
}
} else {
return and__23774__auto____$1;
}
} else {
return and__23774__auto__;
}
});
devcards.system.path_collision = (function devcards$system$path_collision(state,path){
var temp__4423__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351).cljs$core$IFn$_invoke$arity$1(state),path);
if(cljs.core.truth_(temp__4423__auto__)){
var c = temp__4423__auto__;
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.butlast.call(null,cljs.core.vec.call(null,path)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(cljs.core.name.call(null,cljs.core.last.call(null,path))),cljs.core.str("-"),cljs.core.str(c)].join(''))], null)));
} else {
return path;
}
});
devcards.system.register_collision = (function devcards$system$register_collision(state,path){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),path], null),cljs.core.inc);
});
if(typeof devcards.system.dev_trans !== 'undefined'){
} else {
devcards.system.dev_trans = (function (){var method_table__24699__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__24700__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__24701__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__24702__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__24703__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.system","dev-trans"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__24703__auto__,method_table__24699__auto__,prefer_table__24700__auto__,method_cache__24701__auto__,cached_hierarchy__24702__auto__));
})();
}
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"default","default",-1987822328),(function (msg,state){
return state;
}));
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"register-card","register-card",-1375971588),(function (p__43158,state){
var vec__43159 = p__43158;
var _ = cljs.core.nth.call(null,vec__43159,(0),null);
var map__43160 = cljs.core.nth.call(null,vec__43159,(1),null);
var map__43160__$1 = ((((!((map__43160 == null)))?((((map__43160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43160):map__43160);
var path = cljs.core.get.call(null,map__43160__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__43160__$1,new cljs.core.Keyword(null,"options","options",99638489));
var func = cljs.core.get.call(null,map__43160__$1,new cljs.core.Keyword(null,"func","func",-238706040));
var position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(state);
var new_path = devcards.system.path_collision.call(null,state,path);
return devcards.system.register_collision.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),cljs.core.inc),cljs.core.cons.call(null,new cljs.core.Keyword(null,"cards","cards",169174038),new_path),((function (position,new_path,vec__43159,_,map__43160,map__43160__$1,path,options,func){
return (function (dc){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),new_path,new cljs.core.Keyword(null,"func","func",-238706040),func,new cljs.core.Keyword(null,"position","position",-2011731912),position], null);
});})(position,new_path,vec__43159,_,map__43160,map__43160__$1,path,options,func))
),path);
}));
devcards.system.devcard_initial_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"current-path","current-path",-113759954),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"position","position",-2011731912),(0),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"frame","frame",-1711082588),true,new cljs.core.Keyword(null,"heading","heading",-1312171873),true,new cljs.core.Keyword(null,"padding","padding",1660304693),true,new cljs.core.Keyword(null,"hidden","hidden",-312506092),false,new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),true,new cljs.core.Keyword(null,"history","history",-247395220),false], null)], null);
if(typeof devcards.system.app_state !== 'undefined'){
} else {
devcards.system.app_state = cljs.core.atom.call(null,devcards.system.devcard_initial_data);
}
devcards.system.valid_path_QMARK_ = (function devcards$system$valid_path_QMARK_(state,path){
var or__23786__auto__ = cljs.core._EQ_.call(null,cljs.core.PersistentVector.EMPTY,path);
if(or__23786__auto__){
return or__23786__auto__;
} else {
return cljs.core.get_in.call(null,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(state),path);
}
});
devcards.system.enforce_valid_path = (function devcards$system$enforce_valid_path(state,path){
return cljs.core.vec.call(null,(cljs.core.truth_(devcards.system.valid_path_QMARK_.call(null,state,path))?path:cljs.core.PersistentVector.EMPTY));
});
devcards.system.add_to_current_path = (function devcards$system$add_to_current_path(p__43162,path){
var map__43165 = p__43162;
var map__43165__$1 = ((((!((map__43165 == null)))?((((map__43165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43165):map__43165);
var state = map__43165__$1;
var current_path = cljs.core.get.call(null,map__43165__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-path","current-path",-113759954),devcards.system.enforce_valid_path.call(null,state,cljs.core.conj.call(null,current_path,cljs.core.keyword.call(null,path))));
});
devcards.system.set_current_path = (function devcards$system$set_current_path(p__43167,path){
var map__43170 = p__43167;
var map__43170__$1 = ((((!((map__43170 == null)))?((((map__43170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43170):map__43170);
var state = map__43170__$1;
var current_path = cljs.core.get.call(null,map__43170__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
var path__$1 = cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.keyword,path));
if(cljs.core.not_EQ_.call(null,current_path,path__$1)){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-path","current-path",-113759954),devcards.system.enforce_valid_path.call(null,state,path__$1));
} else {
return state;
}
});
devcards.system.set_current_path_BANG_ = (function devcards$system$set_current_path_BANG_(state_atom,path){
cljs.core.swap_BANG_.call(null,state_atom,devcards.system.set_current_path,path);

return devcards.system.hash_navigate.call(null,path);
});
devcards.system.current_page = (function devcards$system$current_page(data){
var and__23774__auto__ = new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__23774__auto__)){
var and__23774__auto____$1 = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__23774__auto____$1)){
return cljs.core.get_in.call(null,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(data));
} else {
return and__23774__auto____$1;
}
} else {
return and__23774__auto__;
}
});
devcards.system.display_single_card_QMARK_ = (function devcards$system$display_single_card_QMARK_(state){
return devcards.system.devcard_QMARK_.call(null,devcards.system.current_page.call(null,state));
});
devcards.system.display_dir_paths = (function devcards$system$display_dir_paths(state){
var cur = devcards.system.current_page.call(null,state);
return cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.comp.call(null,devcards.system.devcard_QMARK_,cljs.core.second)),cur);
});
devcards.system.display_cards = (function devcards$system$display_cards(cur){
return cljs.core.filter.call(null,cljs.core.comp.call(null,(function (p1__43172_SHARP_){
var and__23774__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"delete-card","delete-card",1559096851).cljs$core$IFn$_invoke$arity$1(p1__43172_SHARP_));
if(and__23774__auto__){
return devcards.system.devcard_QMARK_.call(null,p1__43172_SHARP_);
} else {
return and__23774__auto__;
}
}),cljs.core.second),cur);
});
devcards.system._STAR_devcard_data_STAR_ = null;
devcards.system.card_template = (function devcards$system$card_template(state_atom,p__43173){
var map__43177 = p__43173;
var map__43177__$1 = ((((!((map__43177 == null)))?((((map__43177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43177):map__43177);
var card = map__43177__$1;
var path = cljs.core.get.call(null,map__43177__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__43177__$1,new cljs.core.Keyword(null,"options","options",99638489));
var func = cljs.core.get.call(null,map__43177__$1,new cljs.core.Keyword(null,"func","func",-238706040));
return React.createElement("div",{"key": devcards.system.path__GT_unique_card_id.call(null,path), "className": "com-rigsomelight-devcard"},(function (){var _STAR_devcard_data_STAR_43179 = devcards.system._STAR_devcard_data_STAR_;
devcards.system._STAR_devcard_data_STAR_ = card;

return sablono.interpreter.interpret.call(null,(function (){try{return func.call(null);
}finally {devcards.system._STAR_devcard_data_STAR_ = _STAR_devcard_data_STAR_43179;
}})());
})());
});
devcards.system.render_cards = (function devcards$system$render_cards(cards,state_atom){
return cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,devcards.system.card_template,state_atom),cljs.core.second),cljs.core.sort_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.second),cards));
});
devcards.system.main_cards_template = (function devcards$system$main_cards_template(state_atom){
var data = cljs.core.deref.call(null,state_atom);
if(cljs.core.truth_(devcards.system.display_single_card_QMARK_.call(null,data))){
return devcards.system.card_template.call(null,state_atom,devcards.system.current_page.call(null,data));
} else {
return devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,devcards.system.current_page.call(null,data)),state_atom);
}
});
devcards.system.breadcrumbs = (function devcards$system$breadcrumbs(p__43180){
var map__43183 = p__43180;
var map__43183__$1 = ((((!((map__43183 == null)))?((((map__43183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43183):map__43183);
var state = map__43183__$1;
var current_path = cljs.core.get.call(null,map__43183__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
var cpath = cljs.core.map.call(null,cljs.core.name,cljs.core.cons.call(null,new cljs.core.Keyword(null,"devcards","devcards",365747130),current_path));
var crumbs = cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.last,cljs.core.rest),cljs.core.rest.call(null,cljs.core.map_indexed.call(null,((function (cpath,map__43183,map__43183__$1,state,current_path){
return (function (i,v){
return cljs.core.subvec.call(null,v,(0),i);
});})(cpath,map__43183,map__43183__$1,state,current_path))
,cljs.core.take.call(null,(cljs.core.count.call(null,cpath) + (1)),cljs.core.repeat.call(null,cljs.core.vec.call(null,cpath))))));
return crumbs;
});
devcards.system.cljs_logo;
devcards.system.breadcrumbs_templ = (function devcards$system$breadcrumbs_templ(crumbs,state_atom){
var counter = cljs.core.atom.call(null,(0));
var sep_fn = ((function (counter){
return (function (_){
return React.createElement("span",{"key": (function (){
cljs.core.swap_BANG_.call(null,counter,cljs.core.inc);

return cljs.core.deref.call(null,counter);
})()
, "className": "com-rigsomelight-devcards-breadcrumb-sep"},"/");
});})(counter))
;
return React.createElement("div",{"key": "breadcrumbs-templ", "className": "com-rigsomelight-devcards-card-base com-rigsomelight-devcards-breadcrumbs com-rigsomelight-devcards-typog"},sablono.interpreter.interpret.call(null,cljs.core.rest.call(null,cljs.core.interleave.call(null,cljs.core.iterate.call(null,sep_fn,sep_fn.call(null,null)),cljs.core.map.call(null,((function (counter,sep_fn){
return (function (p__43187){
var vec__43188 = p__43187;
var n = cljs.core.nth.call(null,vec__43188,(0),null);
var path = cljs.core.nth.call(null,vec__43188,(1),null);
return React.createElement("span",{"style": {"display": "inline-block"}, "key": devcards.system.path__GT_unique_card_id.call(null,path)},React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (vec__43188,n,path,counter,sep_fn){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,state_atom,path);
});})(vec__43188,n,path,counter,sep_fn))
), "className": "com-rigsomelight-devcards_set-current-path"},sablono.interpreter.interpret.call(null,[cljs.core.str(n)].join(''))));
});})(counter,sep_fn))
,crumbs)))),sablono.interpreter.interpret.call(null,devcards.system.cljs_logo.call(null)));
});
devcards.system.navigate_to_path = (function devcards$system$navigate_to_path(key,state_atom){
return cljs.core.swap_BANG_.call(null,state_atom,(function (s){
var new_s = devcards.system.add_to_current_path.call(null,s,key);
devcards.system.hash_navigate.call(null,new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(new_s));

return new_s;
}));
});
devcards.system.dir_links = (function devcards$system$dir_links(dirs,state_atom){
if(cljs.core.empty_QMARK_.call(null,dirs)){
return null;
} else {
var attrs43194 = cljs.core.map.call(null,(function (p__43195){
var vec__43196 = p__43195;
var key = cljs.core.nth.call(null,vec__43196,(0),null);
var child_tree = cljs.core.nth.call(null,vec__43196,(1),null);
return React.createElement("a",{"href": "#", "key": [cljs.core.str(key)].join(''), "onClick": devcards.system.prevent__GT_.call(null,((function (vec__43196,key,child_tree){
return (function (e){
return devcards.system.navigate_to_path.call(null,key,state_atom);
});})(vec__43196,key,child_tree))
), "className": "com-rigsomelight-devcards-list-group-item"},React.createElement("span",{"style": {"float": "right"}, "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,cljs.core.count.call(null,child_tree))),React.createElement("span",null," ",sablono.interpreter.interpret.call(null,cljs.core.name.call(null,key))));
}),cljs.core.sort_by.call(null,(function (p__43197){
var vec__43198 = p__43197;
var key = cljs.core.nth.call(null,vec__43198,(0),null);
var _ = cljs.core.nth.call(null,vec__43198,(1),null);
return cljs.core.name.call(null,key);
}),dirs));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43194))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-list-group","com-rigsomelight-devcards-typog"], null)], null),attrs43194)):{"className": "com-rigsomelight-devcards-list-group com-rigsomelight-devcards-typog"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43194))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43194)], null))));
}
});
devcards.system.main_template = (function devcards$system$main_template(state_atom){
var data = cljs.core.deref.call(null,state_atom);
return React.createElement("div",{"className": [cljs.core.str("com-rigsomelight-devcards-base "),cljs.core.str((function (){var temp__4425__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(temp__4425__auto__)){
var n = temp__4425__auto__;
return clojure.string.replace.call(null,cljs.core.name.call(null,n),".","-");
} else {
return null;
}
})())].join('')},(function (){var attrs43202 = (function (){var temp__4425__auto__ = devcards.system.breadcrumbs.call(null,data);
if(cljs.core.truth_(temp__4425__auto__)){
var crumbs = temp__4425__auto__;
return devcards.system.breadcrumbs_templ.call(null,crumbs,state_atom);
} else {
return null;
}
})();
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43202))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-container"], null)], null),attrs43202)):{"className": "com-rigsomelight-devcards-container"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43202))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(devcards.system.display_single_card_QMARK_.call(null,data))?null:(function (){var dir_paths = devcards.system.display_dir_paths.call(null,data);
return sablono.interpreter.interpret.call(null,devcards.system.dir_links.call(null,dir_paths,state_atom));
})()),(function (){var attrs43203 = devcards.system.main_cards_template.call(null,state_atom);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43203))?sablono.interpreter.attributes.call(null,attrs43203):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43203))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43203)], null))));
})()], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43202),(cljs.core.truth_(devcards.system.display_single_card_QMARK_.call(null,data))?null:(function (){var dir_paths = devcards.system.display_dir_paths.call(null,data);
return sablono.interpreter.interpret.call(null,devcards.system.dir_links.call(null,dir_paths,state_atom));
})()),(function (){var attrs43204 = devcards.system.main_cards_template.call(null,state_atom);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43204))?sablono.interpreter.attributes.call(null,attrs43204):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43204))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43204)], null))));
})()], null))));
})());
});
var base__26393__auto___43209 = {"componentDidMount": (function (){
var this$ = this;
return cljs.core.add_watch.call(null,devcards.system.app_state,new cljs.core.Keyword(null,"renderer-watch","renderer-watch",542998517),((function (this$){
return (function (_,___$1,___$2,___$3){
return this$.forceUpdate();
});})(this$))
);
}), "render": (function (){
return devcards.system.main_template.call(null,devcards.system.app_state);
})};
if(typeof devcards.system.DevcardsRoot !== 'undefined'){
} else {
devcards.system.DevcardsRoot = React.createClass(base__26393__auto___43209);
}

var seq__43205_43210 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__43206_43211 = null;
var count__43207_43212 = (0);
var i__43208_43213 = (0);
while(true){
if((i__43208_43213 < count__43207_43212)){
var property__26394__auto___43214 = cljs.core._nth.call(null,chunk__43206_43211,i__43208_43213);
if(cljs.core.truth_((base__26393__auto___43209[property__26394__auto___43214]))){
(devcards.system.DevcardsRoot.prototype[property__26394__auto___43214] = (base__26393__auto___43209[property__26394__auto___43214]));
} else {
}

var G__43215 = seq__43205_43210;
var G__43216 = chunk__43206_43211;
var G__43217 = count__43207_43212;
var G__43218 = (i__43208_43213 + (1));
seq__43205_43210 = G__43215;
chunk__43206_43211 = G__43216;
count__43207_43212 = G__43217;
i__43208_43213 = G__43218;
continue;
} else {
var temp__4425__auto___43219 = cljs.core.seq.call(null,seq__43205_43210);
if(temp__4425__auto___43219){
var seq__43205_43220__$1 = temp__4425__auto___43219;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43205_43220__$1)){
var c__24589__auto___43221 = cljs.core.chunk_first.call(null,seq__43205_43220__$1);
var G__43222 = cljs.core.chunk_rest.call(null,seq__43205_43220__$1);
var G__43223 = c__24589__auto___43221;
var G__43224 = cljs.core.count.call(null,c__24589__auto___43221);
var G__43225 = (0);
seq__43205_43210 = G__43222;
chunk__43206_43211 = G__43223;
count__43207_43212 = G__43224;
i__43208_43213 = G__43225;
continue;
} else {
var property__26394__auto___43226 = cljs.core.first.call(null,seq__43205_43220__$1);
if(cljs.core.truth_((base__26393__auto___43209[property__26394__auto___43226]))){
(devcards.system.DevcardsRoot.prototype[property__26394__auto___43226] = (base__26393__auto___43209[property__26394__auto___43226]));
} else {
}

var G__43227 = cljs.core.next.call(null,seq__43205_43220__$1);
var G__43228 = null;
var G__43229 = (0);
var G__43230 = (0);
seq__43205_43210 = G__43227;
chunk__43206_43211 = G__43228;
count__43207_43212 = G__43229;
i__43208_43213 = G__43230;
continue;
}
} else {
}
}
break;
}
devcards.system.renderer = (function devcards$system$renderer(state_atom){
return ReactDOM.render(React.createElement(devcards.system.DevcardsRoot),devcards.system.devcards_app_node.call(null));
});
devcards.system.merge_in_new_data = (function devcards$system$merge_in_new_data(state,new_state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(new_state),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.merge.call(null,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(new_state)));
});
/**
 * Run sequential messages off the books outside of the atom and
 * then difference the result so we can only display the new cards 
 * that have arrived. This prevents multiple renders and allows us 
 * to delete cards live.
 */
devcards.system.off_the_books = (function devcards$system$off_the_books(channel,start_data,first_message){
var initial_data = cljs.core.dissoc.call(null,cljs.core.assoc.call(null,start_data,new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"cards","cards",169174038));
var c__25902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto__,initial_data){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto__,initial_data){
return (function (state_43349){
var state_val_43350 = (state_43349[(1)]);
if((state_val_43350 === (7))){
var inst_43345 = (state_43349[(2)]);
var state_43349__$1 = state_43349;
var statearr_43351_43381 = state_43349__$1;
(statearr_43351_43381[(2)] = inst_43345);

(statearr_43351_43381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43350 === (1))){
var inst_43306 = devcards.system.dev_trans.call(null,first_message,initial_data);
var inst_43307 = inst_43306;
var state_43349__$1 = (function (){var statearr_43352 = state_43349;
(statearr_43352[(7)] = inst_43307);

return statearr_43352;
})();
var statearr_43353_43382 = state_43349__$1;
(statearr_43353_43382[(2)] = null);

(statearr_43353_43382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43350 === (4))){
var inst_43314 = (state_43349[(8)]);
var inst_43314__$1 = (state_43349[(2)]);
var state_43349__$1 = (function (){var statearr_43354 = state_43349;
(statearr_43354[(8)] = inst_43314__$1);

return statearr_43354;
})();
if(cljs.core.truth_(inst_43314__$1)){
var statearr_43355_43383 = state_43349__$1;
(statearr_43355_43383[(1)] = (5));

} else {
var statearr_43356_43384 = state_43349__$1;
(statearr_43356_43384[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43350 === (15))){
var state_43349__$1 = state_43349;
var statearr_43357_43385 = state_43349__$1;
(statearr_43357_43385[(2)] = null);

(statearr_43357_43385[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43350 === (13))){
var inst_43340 = (state_43349[(2)]);
var state_43349__$1 = state_43349;
var statearr_43358_43386 = state_43349__$1;
(statearr_43358_43386[(2)] = inst_43340);

(statearr_43358_43386[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43350 === (6))){
var state_43349__$1 = state_43349;
var statearr_43359_43387 = state_43349__$1;
(statearr_43359_43387[(2)] = null);

(statearr_43359_43387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43350 === (3))){
var inst_43347 = (state_43349[(2)]);
var state_43349__$1 = state_43349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43349__$1,inst_43347);
} else {
if((state_val_43350 === (12))){
var state_43349__$1 = state_43349;
var statearr_43360_43388 = state_43349__$1;
(statearr_43360_43388[(1)] = (14));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43350 === (2))){
var inst_43309 = (state_43349[(9)]);
var inst_43309__$1 = cljs.core.async.timeout.call(null,(500));
var inst_43310 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43311 = [channel,inst_43309__$1];
var inst_43312 = (new cljs.core.PersistentVector(null,2,(5),inst_43310,inst_43311,null));
var state_43349__$1 = (function (){var statearr_43362 = state_43349;
(statearr_43362[(9)] = inst_43309__$1);

return statearr_43362;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_43349__$1,(4),inst_43312);
} else {
if((state_val_43350 === (11))){
var inst_43307 = (state_43349[(7)]);
var inst_43328 = devcards.system.merge_in_new_data.call(null,start_data,inst_43307);
var state_43349__$1 = state_43349;
var statearr_43363_43389 = state_43349__$1;
(statearr_43363_43389[(2)] = inst_43328);

(statearr_43363_43389[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43350 === (9))){
var inst_43319 = (state_43349[(10)]);
var inst_43326 = cljs.core._EQ_.call(null,inst_43319,new cljs.core.Keyword(null,"jsreload","jsreload",331693051));
var state_43349__$1 = state_43349;
if(inst_43326){
var statearr_43364_43390 = state_43349__$1;
(statearr_43364_43390[(1)] = (11));

} else {
var statearr_43365_43391 = state_43349__$1;
(statearr_43365_43391[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43350 === (5))){
var inst_43314 = (state_43349[(8)]);
var inst_43309 = (state_43349[(9)]);
var inst_43318 = cljs.core.nth.call(null,inst_43314,(0),null);
var inst_43319 = cljs.core.nth.call(null,inst_43318,(0),null);
var inst_43320 = cljs.core.nth.call(null,inst_43318,(1),null);
var inst_43321 = cljs.core.nth.call(null,inst_43314,(1),null);
var inst_43322 = cljs.core._EQ_.call(null,inst_43321,inst_43309);
var state_43349__$1 = (function (){var statearr_43366 = state_43349;
(statearr_43366[(11)] = inst_43320);

(statearr_43366[(10)] = inst_43319);

return statearr_43366;
})();
if(inst_43322){
var statearr_43367_43392 = state_43349__$1;
(statearr_43367_43392[(1)] = (8));

} else {
var statearr_43368_43393 = state_43349__$1;
(statearr_43368_43393[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43350 === (14))){
var inst_43320 = (state_43349[(11)]);
var inst_43319 = (state_43349[(10)]);
var inst_43307 = (state_43349[(7)]);
var inst_43331 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43332 = [inst_43319,inst_43320];
var inst_43333 = (new cljs.core.PersistentVector(null,2,(5),inst_43331,inst_43332,null));
var inst_43334 = devcards.system.dev_trans.call(null,inst_43333,inst_43307);
var inst_43307__$1 = inst_43334;
var state_43349__$1 = (function (){var statearr_43369 = state_43349;
(statearr_43369[(7)] = inst_43307__$1);

return statearr_43369;
})();
var statearr_43370_43394 = state_43349__$1;
(statearr_43370_43394[(2)] = null);

(statearr_43370_43394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43350 === (16))){
var inst_43338 = (state_43349[(2)]);
var state_43349__$1 = state_43349;
var statearr_43371_43395 = state_43349__$1;
(statearr_43371_43395[(2)] = inst_43338);

(statearr_43371_43395[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43350 === (10))){
var inst_43342 = (state_43349[(2)]);
var state_43349__$1 = state_43349;
var statearr_43372_43396 = state_43349__$1;
(statearr_43372_43396[(2)] = inst_43342);

(statearr_43372_43396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43350 === (8))){
var inst_43307 = (state_43349[(7)]);
var inst_43324 = devcards.system.merge_in_new_data.call(null,start_data,inst_43307);
var state_43349__$1 = state_43349;
var statearr_43373_43397 = state_43349__$1;
(statearr_43373_43397[(2)] = inst_43324);

(statearr_43373_43397[(1)] = (10));


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
});})(c__25902__auto__,initial_data))
;
return ((function (switch__25881__auto__,c__25902__auto__,initial_data){
return (function() {
var devcards$system$off_the_books_$_state_machine__25882__auto__ = null;
var devcards$system$off_the_books_$_state_machine__25882__auto____0 = (function (){
var statearr_43377 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43377[(0)] = devcards$system$off_the_books_$_state_machine__25882__auto__);

(statearr_43377[(1)] = (1));

return statearr_43377;
});
var devcards$system$off_the_books_$_state_machine__25882__auto____1 = (function (state_43349){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_43349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e43378){if((e43378 instanceof Object)){
var ex__25885__auto__ = e43378;
var statearr_43379_43398 = state_43349;
(statearr_43379_43398[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43399 = state_43349;
state_43349 = G__43399;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
devcards$system$off_the_books_$_state_machine__25882__auto__ = function(state_43349){
switch(arguments.length){
case 0:
return devcards$system$off_the_books_$_state_machine__25882__auto____0.call(this);
case 1:
return devcards$system$off_the_books_$_state_machine__25882__auto____1.call(this,state_43349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$off_the_books_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$off_the_books_$_state_machine__25882__auto____0;
devcards$system$off_the_books_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$off_the_books_$_state_machine__25882__auto____1;
return devcards$system$off_the_books_$_state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto__,initial_data))
})();
var state__25904__auto__ = (function (){var statearr_43380 = f__25903__auto__.call(null);
(statearr_43380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto__);

return statearr_43380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto__,initial_data))
);

return c__25902__auto__;
});
devcards.system.load_data_from_channel_BANG_ = (function devcards$system$load_data_from_channel_BANG_(channel){
var c__25902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto__){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto__){
return (function (state_43423){
var state_val_43424 = (state_43423[(1)]);
if((state_val_43424 === (1))){
var inst_43416 = cljs.core.deref.call(null,devcards.system.app_state);
var inst_43417 = cljs.core.PersistentVector.EMPTY;
var inst_43418 = devcards.system.off_the_books.call(null,channel,inst_43416,inst_43417);
var state_43423__$1 = state_43423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43423__$1,(2),inst_43418);
} else {
if((state_val_43424 === (2))){
var inst_43420 = (state_43423[(2)]);
var inst_43421 = cljs.core.reset_BANG_.call(null,devcards.system.app_state,inst_43420);
var state_43423__$1 = state_43423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43423__$1,inst_43421);
} else {
return null;
}
}
});})(c__25902__auto__))
;
return ((function (switch__25881__auto__,c__25902__auto__){
return (function() {
var devcards$system$load_data_from_channel_BANG__$_state_machine__25882__auto__ = null;
var devcards$system$load_data_from_channel_BANG__$_state_machine__25882__auto____0 = (function (){
var statearr_43428 = [null,null,null,null,null,null,null];
(statearr_43428[(0)] = devcards$system$load_data_from_channel_BANG__$_state_machine__25882__auto__);

(statearr_43428[(1)] = (1));

return statearr_43428;
});
var devcards$system$load_data_from_channel_BANG__$_state_machine__25882__auto____1 = (function (state_43423){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_43423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e43429){if((e43429 instanceof Object)){
var ex__25885__auto__ = e43429;
var statearr_43430_43432 = state_43423;
(statearr_43430_43432[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43433 = state_43423;
state_43423 = G__43433;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
devcards$system$load_data_from_channel_BANG__$_state_machine__25882__auto__ = function(state_43423){
switch(arguments.length){
case 0:
return devcards$system$load_data_from_channel_BANG__$_state_machine__25882__auto____0.call(this);
case 1:
return devcards$system$load_data_from_channel_BANG__$_state_machine__25882__auto____1.call(this,state_43423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$load_data_from_channel_BANG__$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$load_data_from_channel_BANG__$_state_machine__25882__auto____0;
devcards$system$load_data_from_channel_BANG__$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$load_data_from_channel_BANG__$_state_machine__25882__auto____1;
return devcards$system$load_data_from_channel_BANG__$_state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto__))
})();
var state__25904__auto__ = (function (){var statearr_43431 = f__25903__auto__.call(null);
(statearr_43431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto__);

return statearr_43431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto__))
);

return c__25902__auto__;
});
devcards.system.start_ui_with_renderer = (function devcards$system$start_ui_with_renderer(channel,renderer){
if(typeof devcards.system.devcards_ui_setup !== 'undefined'){
return null;
} else {
devcards.system.devcards_ui_setup = (function (){
if(typeof React.initializeTouchEvents !== 'undefined'){
React.initializeTouchEvents(true);
} else {
}

var c__25902__auto___43518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto___43518){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto___43518){
return (function (state_43500){
var state_val_43501 = (state_43500[(1)]);
if((state_val_43501 === (1))){
var inst_43476 = devcards.system.load_data_from_channel_BANG_.call(null,channel);
var state_43500__$1 = state_43500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43500__$1,(2),inst_43476);
} else {
if((state_val_43501 === (2))){
var inst_43478 = (state_43500[(2)]);
var inst_43479 = (function (){return ((function (inst_43478,state_val_43501,c__25902__auto___43518){
return (function (){
return renderer.call(null,devcards.system.app_state);
});
;})(inst_43478,state_val_43501,c__25902__auto___43518))
})();
var inst_43480 = setTimeout(inst_43479,(0));
var inst_43481 = (function (){return ((function (inst_43478,inst_43479,inst_43480,state_val_43501,c__25902__auto___43518){
return (function (){
return cljs.core.add_watch.call(null,devcards.system.app_state,new cljs.core.Keyword(null,"devcards-render","devcards-render",592502782),((function (inst_43478,inst_43479,inst_43480,state_val_43501,c__25902__auto___43518){
return (function (_,___$1,___$2,___$3){
return renderer.call(null,devcards.system.app_state);
});})(inst_43478,inst_43479,inst_43480,state_val_43501,c__25902__auto___43518))
);
});
;})(inst_43478,inst_43479,inst_43480,state_val_43501,c__25902__auto___43518))
})();
var inst_43482 = setTimeout(inst_43481,(0));
var state_43500__$1 = (function (){var statearr_43502 = state_43500;
(statearr_43502[(7)] = inst_43478);

(statearr_43502[(8)] = inst_43480);

(statearr_43502[(9)] = inst_43482);

return statearr_43502;
})();
var statearr_43503_43519 = state_43500__$1;
(statearr_43503_43519[(2)] = null);

(statearr_43503_43519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43501 === (3))){
var state_43500__$1 = state_43500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43500__$1,(5),channel);
} else {
if((state_val_43501 === (4))){
var inst_43498 = (state_43500[(2)]);
var state_43500__$1 = state_43500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43500__$1,inst_43498);
} else {
if((state_val_43501 === (5))){
var inst_43485 = (state_43500[(10)]);
var inst_43485__$1 = (state_43500[(2)]);
var state_43500__$1 = (function (){var statearr_43504 = state_43500;
(statearr_43504[(10)] = inst_43485__$1);

return statearr_43504;
})();
if(cljs.core.truth_(inst_43485__$1)){
var statearr_43505_43520 = state_43500__$1;
(statearr_43505_43520[(1)] = (6));

} else {
var statearr_43506_43521 = state_43500__$1;
(statearr_43506_43521[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43501 === (6))){
var inst_43485 = (state_43500[(10)]);
var inst_43487 = cljs.core.deref.call(null,devcards.system.app_state);
var inst_43488 = devcards.system.off_the_books.call(null,channel,inst_43487,inst_43485);
var state_43500__$1 = state_43500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43500__$1,(9),inst_43488);
} else {
if((state_val_43501 === (7))){
var state_43500__$1 = state_43500;
var statearr_43507_43522 = state_43500__$1;
(statearr_43507_43522[(2)] = null);

(statearr_43507_43522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43501 === (8))){
var inst_43496 = (state_43500[(2)]);
var state_43500__$1 = state_43500;
var statearr_43508_43523 = state_43500__$1;
(statearr_43508_43523[(2)] = inst_43496);

(statearr_43508_43523[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43501 === (9))){
var inst_43485 = (state_43500[(10)]);
var inst_43490 = (state_43500[(2)]);
var inst_43491 = (function (){var temp__4425__auto__ = inst_43485;
var v = inst_43485;
var new_state = inst_43490;
return ((function (temp__4425__auto__,v,new_state,inst_43485,inst_43490,state_val_43501,c__25902__auto___43518){
return (function (){
return cljs.core.reset_BANG_.call(null,devcards.system.app_state,new_state);
});
;})(temp__4425__auto__,v,new_state,inst_43485,inst_43490,state_val_43501,c__25902__auto___43518))
})();
var inst_43492 = setTimeout(inst_43491,(0));
var state_43500__$1 = (function (){var statearr_43509 = state_43500;
(statearr_43509[(11)] = inst_43492);

return statearr_43509;
})();
var statearr_43510_43524 = state_43500__$1;
(statearr_43510_43524[(2)] = null);

(statearr_43510_43524[(1)] = (3));


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
});})(c__25902__auto___43518))
;
return ((function (switch__25881__auto__,c__25902__auto___43518){
return (function() {
var devcards$system$start_ui_with_renderer_$_state_machine__25882__auto__ = null;
var devcards$system$start_ui_with_renderer_$_state_machine__25882__auto____0 = (function (){
var statearr_43514 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43514[(0)] = devcards$system$start_ui_with_renderer_$_state_machine__25882__auto__);

(statearr_43514[(1)] = (1));

return statearr_43514;
});
var devcards$system$start_ui_with_renderer_$_state_machine__25882__auto____1 = (function (state_43500){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_43500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e43515){if((e43515 instanceof Object)){
var ex__25885__auto__ = e43515;
var statearr_43516_43525 = state_43500;
(statearr_43516_43525[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43526 = state_43500;
state_43500 = G__43526;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
devcards$system$start_ui_with_renderer_$_state_machine__25882__auto__ = function(state_43500){
switch(arguments.length){
case 0:
return devcards$system$start_ui_with_renderer_$_state_machine__25882__auto____0.call(this);
case 1:
return devcards$system$start_ui_with_renderer_$_state_machine__25882__auto____1.call(this,state_43500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$start_ui_with_renderer_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$start_ui_with_renderer_$_state_machine__25882__auto____0;
devcards$system$start_ui_with_renderer_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$start_ui_with_renderer_$_state_machine__25882__auto____1;
return devcards$system$start_ui_with_renderer_$_state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto___43518))
})();
var state__25904__auto__ = (function (){var statearr_43517 = f__25903__auto__.call(null);
(statearr_43517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto___43518);

return statearr_43517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto___43518))
);


return true;
})()
;
}
});
devcards.system.start_ui = (function devcards$system$start_ui(channel){
if(typeof devcards.system.devcards_ui_setup !== 'undefined'){
return null;
} else {
devcards.system.devcards_ui_setup = (function (){
if(typeof React.initializeTouchEvents !== 'undefined'){
React.initializeTouchEvents(true);
} else {
}

devcards.system.render_base_if_necessary_BANG_.call(null);

var c__25902__auto___43611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25902__auto___43611){
return (function (){
var f__25903__auto__ = (function (){var switch__25881__auto__ = ((function (c__25902__auto___43611){
return (function (state_43593){
var state_val_43594 = (state_43593[(1)]);
if((state_val_43594 === (1))){
var inst_43569 = devcards.system.load_data_from_channel_BANG_.call(null,channel);
var state_43593__$1 = state_43593;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43593__$1,(2),inst_43569);
} else {
if((state_val_43594 === (2))){
var inst_43571 = (state_43593[(2)]);
var inst_43572 = (function (){return ((function (inst_43571,state_val_43594,c__25902__auto___43611){
return (function (){
return devcards.system.renderer.call(null,devcards.system.app_state);
});
;})(inst_43571,state_val_43594,c__25902__auto___43611))
})();
var inst_43573 = setTimeout(inst_43572,(0));
var inst_43574 = (function (){return ((function (inst_43571,inst_43572,inst_43573,state_val_43594,c__25902__auto___43611){
return (function (){
return devcards.system.hash_routing_init.call(null,devcards.system.app_state);
});
;})(inst_43571,inst_43572,inst_43573,state_val_43594,c__25902__auto___43611))
})();
var inst_43575 = setTimeout(inst_43574,(0));
var state_43593__$1 = (function (){var statearr_43595 = state_43593;
(statearr_43595[(7)] = inst_43573);

(statearr_43595[(8)] = inst_43571);

(statearr_43595[(9)] = inst_43575);

return statearr_43595;
})();
var statearr_43596_43612 = state_43593__$1;
(statearr_43596_43612[(2)] = null);

(statearr_43596_43612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43594 === (3))){
var state_43593__$1 = state_43593;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43593__$1,(5),channel);
} else {
if((state_val_43594 === (4))){
var inst_43591 = (state_43593[(2)]);
var state_43593__$1 = state_43593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43593__$1,inst_43591);
} else {
if((state_val_43594 === (5))){
var inst_43578 = (state_43593[(10)]);
var inst_43578__$1 = (state_43593[(2)]);
var state_43593__$1 = (function (){var statearr_43597 = state_43593;
(statearr_43597[(10)] = inst_43578__$1);

return statearr_43597;
})();
if(cljs.core.truth_(inst_43578__$1)){
var statearr_43598_43613 = state_43593__$1;
(statearr_43598_43613[(1)] = (6));

} else {
var statearr_43599_43614 = state_43593__$1;
(statearr_43599_43614[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43594 === (6))){
var inst_43578 = (state_43593[(10)]);
var inst_43580 = cljs.core.deref.call(null,devcards.system.app_state);
var inst_43581 = devcards.system.off_the_books.call(null,channel,inst_43580,inst_43578);
var state_43593__$1 = state_43593;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43593__$1,(9),inst_43581);
} else {
if((state_val_43594 === (7))){
var state_43593__$1 = state_43593;
var statearr_43600_43615 = state_43593__$1;
(statearr_43600_43615[(2)] = null);

(statearr_43600_43615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43594 === (8))){
var inst_43589 = (state_43593[(2)]);
var state_43593__$1 = state_43593;
var statearr_43601_43616 = state_43593__$1;
(statearr_43601_43616[(2)] = inst_43589);

(statearr_43601_43616[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43594 === (9))){
var inst_43578 = (state_43593[(10)]);
var inst_43583 = (state_43593[(2)]);
var inst_43584 = (function (){var temp__4425__auto__ = inst_43578;
var v = inst_43578;
var new_state = inst_43583;
return ((function (temp__4425__auto__,v,new_state,inst_43578,inst_43583,state_val_43594,c__25902__auto___43611){
return (function (){
return cljs.core.reset_BANG_.call(null,devcards.system.app_state,new_state);
});
;})(temp__4425__auto__,v,new_state,inst_43578,inst_43583,state_val_43594,c__25902__auto___43611))
})();
var inst_43585 = setTimeout(inst_43584,(0));
var state_43593__$1 = (function (){var statearr_43602 = state_43593;
(statearr_43602[(11)] = inst_43585);

return statearr_43602;
})();
var statearr_43603_43617 = state_43593__$1;
(statearr_43603_43617[(2)] = null);

(statearr_43603_43617[(1)] = (3));


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
});})(c__25902__auto___43611))
;
return ((function (switch__25881__auto__,c__25902__auto___43611){
return (function() {
var devcards$system$start_ui_$_state_machine__25882__auto__ = null;
var devcards$system$start_ui_$_state_machine__25882__auto____0 = (function (){
var statearr_43607 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43607[(0)] = devcards$system$start_ui_$_state_machine__25882__auto__);

(statearr_43607[(1)] = (1));

return statearr_43607;
});
var devcards$system$start_ui_$_state_machine__25882__auto____1 = (function (state_43593){
while(true){
var ret_value__25883__auto__ = (function (){try{while(true){
var result__25884__auto__ = switch__25881__auto__.call(null,state_43593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25884__auto__;
}
break;
}
}catch (e43608){if((e43608 instanceof Object)){
var ex__25885__auto__ = e43608;
var statearr_43609_43618 = state_43593;
(statearr_43609_43618[(5)] = ex__25885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43619 = state_43593;
state_43593 = G__43619;
continue;
} else {
return ret_value__25883__auto__;
}
break;
}
});
devcards$system$start_ui_$_state_machine__25882__auto__ = function(state_43593){
switch(arguments.length){
case 0:
return devcards$system$start_ui_$_state_machine__25882__auto____0.call(this);
case 1:
return devcards$system$start_ui_$_state_machine__25882__auto____1.call(this,state_43593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$start_ui_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$start_ui_$_state_machine__25882__auto____0;
devcards$system$start_ui_$_state_machine__25882__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$start_ui_$_state_machine__25882__auto____1;
return devcards$system$start_ui_$_state_machine__25882__auto__;
})()
;})(switch__25881__auto__,c__25902__auto___43611))
})();
var state__25904__auto__ = (function (){var statearr_43610 = f__25903__auto__.call(null);
(statearr_43610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25902__auto___43611);

return statearr_43610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25904__auto__);
});})(c__25902__auto___43611))
);


return true;
})()
;
}
});
devcards.system.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg class='cljs-logo' width='49px' height='49px' style='float: right; display: inline-block; position:relative; top:-13px; right: 0px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
devcards.system.cljs_logo = (function devcards$system$cljs_logo(){
return React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"cljs-logo",new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),devcards.system.cljs_logo_svg], null)], null)));
});

//# sourceMappingURL=system.js.map?rel=1453744772894