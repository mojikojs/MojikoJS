/*************************************************
 * MojikoJS - Engine Core
 * Copyright (c) 2012,2014,2015 Queue Sakura-Shiki
 * Released under the MIT license
 */

////////////////////////////////////////////////////////////////////////
// !!WARNNING !!                                                      //
//                                                                    //
// This project is still experimental. We are trying to find the      //
// best use-case and features without mentenability, so some parts of //
// souce code is now unreadable. Wait for next version, if you want   //
// to use this engine for business. Some bugs are unsolvable in       //
// architecture factors.                                              //
//                                                                    //
////////////////////////////////////////////////////////////////////////

// Engine Version
var mjkBaseEnginVersion = "1.0b";

// L10N : Application Texts.
var MJK_TEXT = {
	screenAlertText       : 
	                        '<div style="font-size:800%;margin-bottom:20px;">:(</div>'+
	                        '<div>スクリーン警告：以下のどちらかを試して下さい</div>'+
	                        '<div>1. ウィンドウのヨコ幅を短くする</div>'+
	                        '<div>2. ウィンドウのタテ幅を長くする</div>',
  	askQuickSave          : "クイック・セーブしますか？",
  	oldBrowserFailure     : 'ブラウザが古すぎて、フルスクリーン化に失敗しました',
  	weeks                 : ['日','月','火','水','木','金','土'],
  	ajasting              : "アジャスト",
  	menu                  : "メニュー",
  	quickLoad             : "クイック・ロード",
  	askQuickLoad          : "クイック・ロードしますか？",
  	save                  : "セーブ",
  	load                  : "ロード",
  	config                : "コンフィグ",
  	doReturn              : "タイトルに戻る",
  	askWantToTitle        : "タイトルに戻りますか？",
  	closeMenu             : "メニューを閉じる",
  	askOverride           : "上書きしますか？",
  	askSave               : "セーブしますか？",
  	back                  : "戻る",
  	doYouWantLoadSaveData : "ゲームを中断して<br/>セーブデータを読み込みますか？",
  	init                  : "初期化",
  	askDropSaveConfig     : "セーブ・コンフィグデータを<br/>全て破棄しますか？",
  	masterVolume          : "マスターボリューム",
  	bgmVolume             : "BGM音量",
  	seVolume              : "SE音量",
	voiceVolume           : "ボイス音量",
	movieVolume           : "ムービー音量",
	loopSeVolume          : "ループ効果音音量",
	eachActorsVolume      : "キャラクター別音量",
	messageSpeed          : "メッセージ表示の速度",
	autoPlaySpeed         : "オートプレイの速度",
	windowOpacity         : "ウィンドウ透過率",
	productionSpeed       : "演出の速度",
	skipRead              : "既読のみをスキップ",
	messageSampleText     : "テキストスピードのテスト。あいうえお、かきくけこ、さしすせそ。"
};


/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});

/*! skrollr 0.6.29 (2014-11-17) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
(function(e,t,r){"use strict";function n(r){if(o=t.documentElement,a=t.body,Y(),lt=this,r=r||{},mt=r.constants||{},r.easing)for(var n in r.easing)X[n]=r.easing[n];Tt=r.edgeStrategy||"set",ft={beforerender:r.beforerender,render:r.render,keyframe:r.keyframe},ut=r.forceHeight!==!1,ut&&(zt=r.scale||1),pt=r.mobileDeceleration||x,gt=r.smoothScrolling!==!1,vt=r.smoothScrollingDuration||A,ht={targetTop:lt.getScrollTop()},Kt=(r.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||e.opera)})(),Kt?(ct=t.getElementById(r.skrollrBody||E),ct&&it(),j(),Dt(o,[y,S],[T])):Dt(o,[y,b],[T]),lt.refresh(),kt(e,"resize orientationchange",function(){var e=o.clientWidth,t=o.clientHeight;(t!==Bt||e!==$t)&&(Bt=t,$t=e,_t=!0)});var i=R();return function l(){J(),St=i(l)}(),lt}var o,a,i={get:function(){return lt},init:function(e){return lt||new n(e)},VERSION:"0.6.29"},l=Object.prototype.hasOwnProperty,s=e.Math,c=e.getComputedStyle,f="touchstart",u="touchmove",m="touchcancel",p="touchend",d="skrollable",g=d+"-before",v=d+"-between",h=d+"-after",y="skrollr",T="no-"+y,b=y+"-desktop",S=y+"-mobile",k="linear",w=1e3,x=.004,E="skrollr-body",A=200,F="start",C="end",H="center",D="bottom",I="___skrollable_id",P=/^(?:input|textarea|button|select)$/i,N=/^\s+|\s+$/g,O=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,V=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,z=/^(@?[a-z\-]+)\[(\w+)\]$/,q=/-([a-z0-9_])/g,L=function(e,t){return t.toUpperCase()},M=/[\-+]?[\d]*\.?[\d]+/g,$=/\{\?\}/g,B=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,_=/[a-z\-]+-gradient/g,G="",K="",Y=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(c){var t=c(a,null);for(var n in t)if(G=n.match(e)||+n==n&&t[n].match(e))break;if(!G)return G=K="",r;G=G[0],"-"===G.slice(0,1)?(K=G,G={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[G]):K="-"+G.toLowerCase()+"-"}},R=function(){var t=e.requestAnimationFrame||e[G.toLowerCase()+"RequestAnimationFrame"],r=Nt();return(Kt||!t)&&(t=function(t){var n=Nt()-r,o=s.max(0,1e3/60-n);return e.setTimeout(function(){r=Nt(),t()},o)}),t},U=function(){var t=e.cancelAnimationFrame||e[G.toLowerCase()+"CancelAnimationFrame"];return(Kt||!t)&&(t=function(t){return e.clearTimeout(t)}),t},X={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-s.cos(e*s.PI)/2+.5},sqrt:function(e){return s.sqrt(e)},outCubic:function(e){return s.pow(e-1,3)+1},bounce:function(e){var t;if(.5083>=e)t=3;else if(.8489>=e)t=9;else if(.96208>=e)t=27;else{if(!(.99981>=e))return 1;t=91}return 1-s.abs(3*s.cos(1.028*e*t)/t)}};n.prototype.refresh=function(e){var n,o,a=!1;for(e===r?(a=!0,st=[],Gt=0,e=t.getElementsByTagName("*")):e.length===r&&(e=[e]),n=0,o=e.length;o>n;n++){var i=e[n],l=i,s=[],c=gt,f=Tt,u=!1;if(a&&I in i&&delete i[I],i.attributes){for(var m=0,p=i.attributes.length;p>m;m++){var g=i.attributes[m];if("data-anchor-target"!==g.name)if("data-smooth-scrolling"!==g.name)if("data-edge-strategy"!==g.name)if("data-emit-events"!==g.name){var v=g.name.match(O);if(null!==v){var h={props:g.value,element:i,eventType:g.name.replace(q,L)};s.push(h);var y=v[1];y&&(h.constant=y.substr(1));var T=v[2];/p$/.test(T)?(h.isPercentage=!0,h.offset=(0|T.slice(0,-1))/100):h.offset=0|T;var b=v[3],S=v[4]||b;b&&b!==F&&b!==C?(h.mode="relative",h.anchors=[b,S]):(h.mode="absolute",b===C?h.isEnd=!0:h.isPercentage||(h.offset=h.offset*zt))}}else u=!0;else f=g.value;else c="off"!==g.value;else if(l=t.querySelector(g.value),null===l)throw'Unable to find anchor target "'+g.value+'"'}if(s.length){var k,w,x;!a&&I in i?(x=i[I],k=st[x].styleAttr,w=st[x].classAttr):(x=i[I]=Gt++,k=i.style.cssText,w=Ht(i)),st[x]={element:i,styleAttr:k,classAttr:w,anchorTarget:l,keyFrames:s,smoothScrolling:c,edgeStrategy:f,emitEvents:u,lastFrameIndex:-1},Dt(i,[d],[])}}}for(At(),n=0,o=e.length;o>n;n++){var E=st[e[n][I]];E!==r&&(Q(E),tt(E))}return lt},n.prototype.relativeToAbsolute=function(e,t,r){var n=o.clientHeight,a=e.getBoundingClientRect(),i=a.top,l=a.bottom-a.top;return t===D?i-=n:t===H&&(i-=n/2),r===D?i+=l:r===H&&(i+=l/2),i+=lt.getScrollTop(),0|i+.5},n.prototype.animateTo=function(e,t){t=t||{};var n=Nt(),o=lt.getScrollTop();return dt={startTop:o,topDiff:e-o,targetTop:e,duration:t.duration||w,startTime:n,endTime:n+(t.duration||w),easing:X[t.easing||k],done:t.done},dt.topDiff||(dt.done&&dt.done.call(lt,!1),dt=r),lt},n.prototype.stopAnimateTo=function(){dt&&dt.done&&dt.done.call(lt,!0),dt=r},n.prototype.isAnimatingTo=function(){return!!dt},n.prototype.isMobile=function(){return Kt},n.prototype.setScrollTop=function(t,r){return yt=r===!0,Kt?Yt=s.min(s.max(t,0),Vt):e.scrollTo(0,t),lt},n.prototype.getScrollTop=function(){return Kt?Yt:e.pageYOffset||o.scrollTop||a.scrollTop||0},n.prototype.getMaxScrollTop=function(){return Vt},n.prototype.on=function(e,t){return ft[e]=t,lt},n.prototype.off=function(e){return delete ft[e],lt},n.prototype.destroy=function(){var e=U();e(St),xt(),Dt(o,[T],[y,b,S]);for(var t=0,n=st.length;n>t;t++)at(st[t].element);o.style.overflow=a.style.overflow="",o.style.height=a.style.height="",ct&&i.setStyle(ct,"transform","none"),lt=r,ct=r,ft=r,ut=r,Vt=0,zt=1,mt=r,pt=r,qt="down",Lt=-1,$t=0,Bt=0,_t=!1,dt=r,gt=r,vt=r,ht=r,yt=r,Gt=0,Tt=r,Kt=!1,Yt=0,bt=r};var j=function(){var n,i,l,c,d,g,v,h,y,T,b,S;kt(o,[f,u,m,p].join(" "),function(e){var o=e.changedTouches[0];for(c=e.target;3===c.nodeType;)c=c.parentNode;switch(d=o.clientY,g=o.clientX,T=e.timeStamp,P.test(c.tagName)||e.preventDefault(),e.type){case f:n&&n.blur(),lt.stopAnimateTo(),n=c,i=v=d,l=g,y=T;break;case u:P.test(c.tagName)&&t.activeElement!==c&&e.preventDefault(),h=d-v,S=T-b,lt.setScrollTop(Yt-h,!0),v=d,b=T;break;default:case m:case p:var a=i-d,k=l-g,w=k*k+a*a;if(49>w){if(!P.test(n.tagName)){n.focus();var x=t.createEvent("MouseEvents");x.initMouseEvent("click",!0,!0,e.view,1,o.screenX,o.screenY,o.clientX,o.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),n.dispatchEvent(x)}return}n=r;var E=h/S;E=s.max(s.min(E,3),-3);var A=s.abs(E/pt),F=E*A+.5*pt*A*A,C=lt.getScrollTop()-F,H=0;C>Vt?(H=(Vt-C)/F,C=Vt):0>C&&(H=-C/F,C=0),A*=1-H,lt.animateTo(0|C+.5,{easing:"outCubic",duration:A})}}),e.scrollTo(0,0),o.style.overflow=a.style.overflow="hidden"},W=function(){var e,t,r,n,a,i,l,c,f,u,m,p=o.clientHeight,d=Ft();for(c=0,f=st.length;f>c;c++)for(e=st[c],t=e.element,r=e.anchorTarget,n=e.keyFrames,a=0,i=n.length;i>a;a++)l=n[a],u=l.offset,m=d[l.constant]||0,l.frame=u,l.isPercentage&&(u*=p,l.frame=u),"relative"===l.mode&&(at(t),l.frame=lt.relativeToAbsolute(r,l.anchors[0],l.anchors[1])-u,at(t,!0)),l.frame+=m,ut&&!l.isEnd&&l.frame>Vt&&(Vt=l.frame);for(Vt=s.max(Vt,Ct()),c=0,f=st.length;f>c;c++){for(e=st[c],n=e.keyFrames,a=0,i=n.length;i>a;a++)l=n[a],m=d[l.constant]||0,l.isEnd&&(l.frame=Vt-l.offset+m);e.keyFrames.sort(Ot)}},Z=function(e,t){for(var r=0,n=st.length;n>r;r++){var o,a,s=st[r],c=s.element,f=s.smoothScrolling?e:t,u=s.keyFrames,m=u.length,p=u[0],y=u[u.length-1],T=p.frame>f,b=f>y.frame,S=T?p:y,k=s.emitEvents,w=s.lastFrameIndex;if(T||b){if(T&&-1===s.edge||b&&1===s.edge)continue;switch(T?(Dt(c,[g],[h,v]),k&&w>-1&&(Et(c,p.eventType,qt),s.lastFrameIndex=-1)):(Dt(c,[h],[g,v]),k&&m>w&&(Et(c,y.eventType,qt),s.lastFrameIndex=m)),s.edge=T?-1:1,s.edgeStrategy){case"reset":at(c);continue;case"ease":f=S.frame;break;default:case"set":var x=S.props;for(o in x)l.call(x,o)&&(a=ot(x[o].value),0===o.indexOf("@")?c.setAttribute(o.substr(1),a):i.setStyle(c,o,a));continue}}else 0!==s.edge&&(Dt(c,[d,v],[g,h]),s.edge=0);for(var E=0;m-1>E;E++)if(f>=u[E].frame&&u[E+1].frame>=f){var A=u[E],F=u[E+1];for(o in A.props)if(l.call(A.props,o)){var C=(f-A.frame)/(F.frame-A.frame);C=A.props[o].easing(C),a=nt(A.props[o].value,F.props[o].value,C),a=ot(a),0===o.indexOf("@")?c.setAttribute(o.substr(1),a):i.setStyle(c,o,a)}k&&w!==E&&("down"===qt?Et(c,A.eventType,qt):Et(c,F.eventType,qt),s.lastFrameIndex=E);break}}},J=function(){_t&&(_t=!1,At());var e,t,n=lt.getScrollTop(),o=Nt();if(dt)o>=dt.endTime?(n=dt.targetTop,e=dt.done,dt=r):(t=dt.easing((o-dt.startTime)/dt.duration),n=0|dt.startTop+t*dt.topDiff),lt.setScrollTop(n,!0);else if(!yt){var a=ht.targetTop-n;a&&(ht={startTop:Lt,topDiff:n-Lt,targetTop:n,startTime:Mt,endTime:Mt+vt}),ht.endTime>=o&&(t=X.sqrt((o-ht.startTime)/vt),n=0|ht.startTop+t*ht.topDiff)}if(Kt&&ct&&i.setStyle(ct,"transform","translate(0, "+-Yt+"px) "+bt),yt||Lt!==n){qt=n>Lt?"down":Lt>n?"up":qt,yt=!1;var l={curTop:n,lastTop:Lt,maxTop:Vt,direction:qt},s=ft.beforerender&&ft.beforerender.call(lt,l);s!==!1&&(Z(n,lt.getScrollTop()),Lt=n,ft.render&&ft.render.call(lt,l)),e&&e.call(lt,!1)}Mt=o},Q=function(e){for(var t=0,r=e.keyFrames.length;r>t;t++){for(var n,o,a,i,l=e.keyFrames[t],s={};null!==(i=V.exec(l.props));)a=i[1],o=i[2],n=a.match(z),null!==n?(a=n[1],n=n[2]):n=k,o=o.indexOf("!")?et(o):[o.slice(1)],s[a]={value:o,easing:X[n]};l.props=s}},et=function(e){var t=[];return B.lastIndex=0,e=e.replace(B,function(e){return e.replace(M,function(e){return 100*(e/255)+"%"})}),K&&(_.lastIndex=0,e=e.replace(_,function(e){return K+e})),e=e.replace(M,function(e){return t.push(+e),"{?}"}),t.unshift(e),t},tt=function(e){var t,r,n={};for(t=0,r=e.keyFrames.length;r>t;t++)rt(e.keyFrames[t],n);for(n={},t=e.keyFrames.length-1;t>=0;t--)rt(e.keyFrames[t],n)},rt=function(e,t){var r;for(r in t)l.call(e.props,r)||(e.props[r]=t[r]);for(r in e.props)t[r]=e.props[r]},nt=function(e,t,r){var n,o=e.length;if(o!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var a=[e[0]];for(n=1;o>n;n++)a[n]=e[n]+(t[n]-e[n])*r;return a},ot=function(e){var t=1;return $.lastIndex=0,e[0].replace($,function(){return e[t++]})},at=function(e,t){e=[].concat(e);for(var r,n,o=0,a=e.length;a>o;o++)n=e[o],r=st[n[I]],r&&(t?(n.style.cssText=r.dirtyStyleAttr,Dt(n,r.dirtyClassAttr)):(r.dirtyStyleAttr=n.style.cssText,r.dirtyClassAttr=Ht(n),n.style.cssText=r.styleAttr,Dt(n,r.classAttr)))},it=function(){bt="translateZ(0)",i.setStyle(ct,"transform",bt);var e=c(ct),t=e.getPropertyValue("transform"),r=e.getPropertyValue(K+"transform"),n=t&&"none"!==t||r&&"none"!==r;n||(bt="")};i.setStyle=function(e,t,r){var n=e.style;if(t=t.replace(q,L).replace("-",""),"zIndex"===t)n[t]=isNaN(r)?r:""+(0|r);else if("float"===t)n.styleFloat=n.cssFloat=r;else try{G&&(n[G+t.slice(0,1).toUpperCase()+t.slice(1)]=r),n[t]=r}catch(o){}};var lt,st,ct,ft,ut,mt,pt,dt,gt,vt,ht,yt,Tt,bt,St,kt=i.addEvent=function(t,r,n){var o=function(t){return t=t||e.event,t.target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){t.returnValue=!1,t.defaultPrevented=!0}),n.call(this,t)};r=r.split(" ");for(var a,i=0,l=r.length;l>i;i++)a=r[i],t.addEventListener?t.addEventListener(a,n,!1):t.attachEvent("on"+a,o),Rt.push({element:t,name:a,listener:n})},wt=i.removeEvent=function(e,t,r){t=t.split(" ");for(var n=0,o=t.length;o>n;n++)e.removeEventListener?e.removeEventListener(t[n],r,!1):e.detachEvent("on"+t[n],r)},xt=function(){for(var e,t=0,r=Rt.length;r>t;t++)e=Rt[t],wt(e.element,e.name,e.listener);Rt=[]},Et=function(e,t,r){ft.keyframe&&ft.keyframe.call(lt,e,t,r)},At=function(){var e=lt.getScrollTop();Vt=0,ut&&!Kt&&(a.style.height=""),W(),ut&&!Kt&&(a.style.height=Vt+o.clientHeight+"px"),Kt?lt.setScrollTop(s.min(lt.getScrollTop(),Vt)):lt.setScrollTop(e,!0),yt=!0},Ft=function(){var e,t,r=o.clientHeight,n={};for(e in mt)t=mt[e],"function"==typeof t?t=t.call(lt):/p$/.test(t)&&(t=t.slice(0,-1)/100*r),n[e]=t;return n},Ct=function(){var e,t=0;return ct&&(t=s.max(ct.offsetHeight,ct.scrollHeight)),e=s.max(t,a.scrollHeight,a.offsetHeight,o.scrollHeight,o.offsetHeight,o.clientHeight),e-o.clientHeight},Ht=function(t){var r="className";return e.SVGElement&&t instanceof e.SVGElement&&(t=t[r],r="baseVal"),t[r]},Dt=function(t,n,o){var a="className";if(e.SVGElement&&t instanceof e.SVGElement&&(t=t[a],a="baseVal"),o===r)return t[a]=n,r;for(var i=t[a],l=0,s=o.length;s>l;l++)i=Pt(i).replace(Pt(o[l])," ");i=It(i);for(var c=0,f=n.length;f>c;c++)-1===Pt(i).indexOf(Pt(n[c]))&&(i+=" "+n[c]);t[a]=It(i)},It=function(e){return e.replace(N,"")},Pt=function(e){return" "+e+" "},Nt=Date.now||function(){return+new Date},Ot=function(e,t){return e.frame-t.frame},Vt=0,zt=1,qt="down",Lt=-1,Mt=Nt(),$t=0,Bt=0,_t=!1,Gt=0,Kt=!1,Yt=0,Rt=[];"function"==typeof define&&define.amd?define([],function(){return i}):"undefined"!=typeof module&&module.exports?module.exports=i:e.skrollr=i})(window,document);

// Polyfills for Web Storage(Effective on Mozilla XUL Runner)
var mjkStorage = undefined;
if( window.navigator.userAgent.indexOf("myapps") !== -1 ) {
	var url = "http://furu-dokei.net/";
	var ios = Components.classes["@mozilla.org/network/io-service;1"]
	          .getService(Components.interfaces.nsIIOService);
	var ssm = Components.classes["@mozilla.org/scriptsecuritymanager;1"]
	          .getService(Components.interfaces.nsIScriptSecurityManager);
	var dsm = Components.classes["@mozilla.org/dom/storagemanager;1"]
	          .getService(Components.interfaces.nsIDOMStorageManager);

	var uri = ios.newURI(url, "", null);
	var principal = ssm.getCodebasePrincipal(uri);
	mjkStorage = dsm.getLocalStorageForPrincipal(principal, "");
} else {
	mjkStorage = localStorage;
}

var outerImgList = [];
var customActionList = {};
var gameBegin;
var keydownKiller = $(window).keydown(function(){return false;});
var keyupKiller = $(window).keyup(function(){return false;});

// Set default CSS.
var $style = $(document.createElement("STYLE"));
$style.text(
	"html,body {"+
		"background-color: #000;"+
		"font-size : 17px;"+
		"overflow: hidden;"+
	"}"+
	".imgelem {"+
	"}"+
	"article {"+
		"display :none;"+
	"}"+
	".loading {"+
		"position : fixed;"+
		"top : 0%;"+
		"left : 0%;"+
		"z-index : 5000000;"+
		"width : 100%;"+
		"height : 100%;"+
		"background-color : black;"+
		"text-align :center;"+
		"color : white;"+
	"}"+
	".alert {"+
    "position : fixed;"+
		"top : 0%;"+
		"left : 0%;"+
		"z-index : 5000000;"+
		"width : 100%;"+
		"height : 100%;"+
		"background-color : blue;"+
		"text-align :center;"+
		"color : white;"+
		"display : none;"+
	"}"+
	"h1,.charactors {"+
		"display : none;"+
	"}"+
	"section {"+
		"position    : fixed;"+
		"left        : 2%;"+
		"width       : 96%;"+
		"height      : 100%;"+
	"}"+
	"section>p {"+
		"position    : absolute;"+
		"left        : 0%;"+
		"bottom      : 0%;"+
		"width       : 100%;"+
		"min-height  : 23%;"+
		"max-width   : 640px;"+
		"color       : white;"+
		"text-shadow : 0px 0px 3px black, 0px 0px 5px black, 2px 2px 0px black;"+
		"font-weight : bold;"+
	"}"+
	/** We CANNOT use "margin : 0 auto;", negrecting performance problem. **/
	"@media screen and ( max-width : 739px ) {"+
		"section>p{"+
	  	"margin-left : 0px;"+
		"}"+
	"}"+
	"@media screen and ( min-width : 740px ) and ( max-width : 839px ) {"+
		"section>p{"+
		  "margin-left : 50px;"+
		"}"+
	"}"+
	"@media screen and ( min-width : 840px ) and ( max-width : 939px ) {"+
		"section>p{"+
	  	"margin-left : 100px;"+
		"}"+
	"}"+
	"@media screen and ( min-width : 940px ) and ( max-width : 1039px ) {"+
		"section>p{"+
		  "margin-left : 250px;"+
		"}"+
	"}"+
	"@media screen and ( min-width : 1040px ) and ( max-width : 1139px ) {"+
		"section>p{"+
			"margin-left : 300px;"+
		"}"+
	"}"+
	"@media screen and ( min-width : 1140px ) and ( max-width : 1239px ) {"+
		"section>p{"+
			"margin-left : 350px;"+
		"}"+
	"}"+
	"@media screen and ( min-width : 1240px ) {"+
		"section>p{"+
			"margin-left : 400px;"+
		"}"+
	"}"+
	"nav {"+
		"z-index: 2000007;"+
		"position: fixed;"+
		"top: 0%;"+
		"bottom: 0%;"+
		"width: 100%;"+
		"height: 100%;"+
		"display: none;"+
	"}"
);
$("head").append($style);

/* Logger functions */
var logger = function(text){
	var now = new Date();
	var hour = now.getHours();
	var min = now.getMinutes();
	var sec = now.getSeconds();
	var msc = now.getMilliseconds();
	if(hour < 10) { hour = "0" + hour; }
	if(min < 10) { min = "0" + min; }
	if(sec < 10) { sec = "0" + sec; }
	if(msc < 10) { msc = "00" + msc; }
	else if (msc < 100) { msc = "0" + msc; }
	console.log("["+hour+":"+min+":"+sec+"."+msc+"] "+text);
};

/* ************************************************************
 * mojiko-ui : UI Components
 */
var MJK_UI = {

	// Initialize UI Engine.
	init : function () {
		var $body = $("body");
		var $loading = $(document.createElement("DIV"));
		$loading.addClass("loading");
		$loading.html(
  		'<div style="font-weight:bold;font-size:80%;position:absolute;width:95%;margin:0 auto;text-align:right;bottom:5%;"> '+
  		'<span id="loadCount">0%</span>　<img src="img/system/loading.gif" style="width:16px;height:16px;" />'+
			'</div>'
		);
		var stepFn = function(now, tween) {
      if (tween.prop === "rotationDeg") {
        $(this).css('-webkit-transform','rotateY('+(now)+'deg)');
        $(this).css('-moz-transform','rotateY('+(now)+'deg)'); 
        $(this).css('-ms-transform','rotateY('+(now)+'deg)'); 
        $(this).css('transform','rotateY('+(now)+'deg)');  
      }
    }
    var $charge = $loading.find(".charge");
		$charge.animate({"rotationDeg":0},{"step":stepFn,"duration":0,"done":function(){
			$charge.animate({"rotationDeg":30},{"step":stepFn,"duration":3000,"done":function(){
				$charge.animate({"rotationDeg":0},{"step":stepFn,"duration":3000,"done":function(){
					$charge.animate({"rotationDeg":-30},{"step":stepFn,"duration":3000,"done":function(){
						$charge.animate({"rotationDeg":0},{"step":stepFn,"duration":3000});
					}});
				}});
			}});
		}});

		var $alert =  $(document.createElement("DIV"));
		$alert.addClass("alert");
		$alert.html(MJK_TEXT.screenAlertText);
		$body.append($loading);
		$body.append($alert);
	},

	// Create Menu Config Buttons
	createFowardingMenuPageButton : function(x,y) {
		var $button = $(document.createElement("DIV"));
		$button.css("position","fixed");
		$button.css("cursor","pointer");
		$button.css("width","160px");
		$button.css("height","160px");
		$button.css("border-radius","80px");
		$button.css("left", (-80+x)+"px");
		$button.css("top",(-80+y)+"px");
		$button.css("background-color","rgba(0,0,0,0.6)");
		$button.css("z-index","3000002");
		for( var i=0 ; i<3 ; i++ ) {
			var $line = $(document.createElement("DIV"));
			$line.css("position","absolute");
			$line.css("width","40px");
			$line.css("height","4px");
			$line.css("left","95px");
			var height = 95+i*10;
			$line.css("top",height+"px");
			$line.css("background-color","rgba(255,255,255,0.8)")
			$button.append($line);
		}
		return $button;
	},

	// Create Side Menu Buttons
	createSideMenuButtons : function(x,y) {
		var createRectButton = function(txt, callback) {
			var $button = $(document.createElement("DIV"));
			$button.css("cursor","pointer");
			$button.css("display","inline-block");
			$button.addClass("sideMenuButton");
			$button.text(txt);
			$button.click(function(){
				callback && callback();
			});
			return $button;
		}
		$buttons = $(document.createElement("DIV"));
		$buttons.css("position","fixed");
		$buttons.css("float","left");
		$buttons.css("color","white");
		$buttons.css("left", x+"%");
		$buttons.css("top", y+"%");
		$buttons.css("width","100%");
		$buttons.css("height","100%");
		$buttons.css("z-index","3000001");

		var $auto = createRectButton("AUTO",function(){
				MJK.skipOff();
				MJK.autoPlayOn();
		});
		$buttons.append($auto);
		var $skip = createRectButton("SKIP",function(){
				MJK.autoPlayOff();
				MJK.skipOn();
		});
		$buttons.append($skip);
		var $qsave = createRectButton("Q-SAVE",function(){
			MJK.skipOff();
			MJK.autoPlayOff();
			MJK_UI.yesOrNo(MJK.L10N.askQuickSave, function(){
				MJK_DB.storeCurrentSaveState();
				MJK_CNF.showMenuTopPage();
			});
		});
		$buttons.append($qsave);

		return $buttons;
	},

	// Create parent element of menu.
	createMenuPageRoot : function() {
		var $menu = $(document.createElement("DIV"));
		$menu.addClass("menuWindow");
		$menu.css("z-index","3000000");
		return $menu;
	},

	// create general button component.
	createWindowButton : function(name) {
		var $button = $(document.createElement("DIV"));
		$button.addClass("menuWindowButton");
		return $button;
	},

	// create menu view template.
	createPage : function( title ) {
		var $page = $(document.createElement("DIV"));
		$page.addClass("menuPage");
		$page.append(MJK_UI.createPageTitle(title));
		return $page;
	},

	// create title template in menu view.
	createPageTitle : function( text ) {
		var $title = $(document.createElement("h2"));
		$title.addClass("menuTitle");
		$title.text(text);
		return $title;
	},

	// create attribute template in menu view.
	createPageItem : function( text , action ) {
		var $inner = $(document.createElement("DIV"));
		$inner.addClass("pageItem");
		if( action ) {
			$inner.addClass("enabled");
			$inner.click(action);
		} else {
			$inner.addClass("disabled");
		}
		$inner.text(text);
		return $inner;
	},

	// create attribute template in system menu.
	createSystemItem : function( text ) {
		var $outer = $(document.createElement("DIV"));
		var $inner = $(document.createElement("DIV"));
		$outer.addClass("systemItem");
		$inner.addClass("title");
		$inner.text(text);
		$outer.append($inner)
		return $outer;
	},

	// create meter component.
	createMeter : function(text, action, value, args) {
		var $meter = $(document.createElement("DIV"));
		$meter.addClass("meter");

		var $line = $(document.createElement("DIV"));
		$line.addClass("line");
		$line.css("position","absolute");
		$line.css("width","160px");
		$meter.append($line);

		var $pos  = $(document.createElement("DIV"));
		$pos.addClass("pos");
		$pos.css("position","absolute");
		$pos.css("cursor","pointer");
		$pos.css("margin-left",(value*160/100)+"px");
		$pos.attr("target",value*160/100);
		$pos.on("mousedown",function(){
			var $self = $(this);
			var lastX = 0;
			var target = parseInt($self.attr("target"));
			var $meter = $self.parent();
			$meter.on("mousemove",function(e){
				if( !lastX ) {
					lastX = e.clientX;
				} else {
					target += e.clientX-lastX;
					if( target <0 ) {
						target = 0;
					} else if( 160 < target ) {
						target = 160;
					}
					$self.attr("target",target);
					$self.css("margin-left",target+"px");
					lastX = e.clientX;
				}
			});
			$meter.parent().parent().on("mouseup",function(){
				$meter.unbind("mousemove");
				eval($meter.attr("mjk-action")+"("+(100*target/160)+","+($meter.attr("mjk-args"))+")");
			});
		});
		$meter.attr("mjk-action","("+action+")");
		if( !args ) { args ="0"; }
		$meter.attr("mjk-args",""+args);
		$meter.append($pos);

		var $outer = MJK_UI.createSystemItem(text);
		$outer.append($meter);
		return $outer.append($outer);
	},

	// create toggle component.
	createToggle : function(text, action, value) {
		var $meter = $(document.createElement("DIV"));
		$meter.addClass("toggle");

		var $back = $(document.createElement("DIV"));
		$back.addClass("back");
		$back.css("position","absolute");
		$back.css("width","80px");
		var $on = $(document.createElement("DIV"));
		$on.css("position","absolute");
		$on.css("width","80%");
		$on.addClass("on");
		$on.text("ON");
		$back.append($on);
		var $off = $(document.createElement("DIV"));
		$off.css("position","absolute");
		$off.css("width","80%");
		$off.css("text-align","right");
		$off.addClass("off");
		$off.text("OFF");
		$back.append($off);
		$meter.append($back);

		var $pos  = $(document.createElement("DIV"));
		$pos.addClass("pos");
		$pos.css("position","absolute");
		$pos.css("cursor","pointer");
		$meter.attr("mjk-action",""+action);
		$meter.append($pos);
		$pos.css("cursor","pointer");
		$pos.css("marginLeft",(value?"50":"0")+"px");
		$pos.attr("target",value);
		$pos.click(function(){
			var on = $(this).attr("target")==="true"?true:false;
			if( on ) {
				$pos.animate({"marginLeft":"0px"},200);
				$pos.attr("target",false);
				eval("("+$meter.attr("mjk-action")+")(false)");

			} else {
				$pos.animate({"marginLeft":"50px"},200);				
				$pos.attr("target",true);
				eval("("+$meter.attr("mjk-action")+")(true)");
			}
		});
		$pos.attr("mjk-action",""+action);

		var $outer = MJK_UI.createSystemItem(text);
		$outer.append($meter);
		return $outer.append($outer);
	},

	// create scroll bar component.
	createScrollBox : function() {
		var $block = $(document.createElement("DIV"));
		$block.addClass("scrollbox");
		return $block;
	},

	// create return button component.
	createReturnPageItem : function( text, action ) {
		var $block = MJK_UI.createPageItem(text,action);
		$block.addClass("returnButton");
		return $block;
	},

	// show Yes/No alert.
	yesOrNo : function( text, yes, no ){
		if( !yes ) { yes = function(){}; }
		if( !no ) { no = function(){}; }
		$content = $(document.createElement("DIV"));
		$content.css("position","fixed");
		$content.css("width","100%");
		$content.css("height","100%");
		$content.css("left","0%");
		$content.css("top","0%");
		$content.css("background-color","rgba(0,0,0,0.8)");
		$content.css("display","none");
		$content.css("z-index","4000000");

		var $yesOrNo = $(document.createElement("DIV"));
		$yesOrNo.css("width","240px");
		$yesOrNo.css("padding","20px");
		$yesOrNo.css("margin","0 auto");
		$yesOrNo.css("margin-top","15%");
		$yesOrNo.css("background-color","rgba(255,255,255,1)");
		$yesOrNo.css("box-shadow","0px 0px 20px white");
		$content.css("color","rgba(0,0,0,1.0)");

		var $question = $(document.createElement("DIV"));
		$question.css("margin","20px 0px");
		$question.css("text-align","center");
		$question.attr("class","question");
		$question.html(text);
		$yesOrNo.append($question);

		var $yes = $(document.createElement("DIV"));
		$yes.attr("class","yes");
		$yes.css("float","left");
		$yes.css("cursor","pointer");
		$yes.css("width","80px");
		$yes.css("text-align","center");
		$yes.css("padding","10px");
		$yes.css("margin","10px");
		$yes.css("border-radius","30px");
		$yes.css("box-shadow","0px 0px 5px black");
		$yes.css("background-color","rgba(255,200,200,0.9)");
		$yes.click(function(){ yes(); $content.fadeOut(400); });
		$yes.text("YES");
		$yesOrNo.append($yes);

		var $no = $(document.createElement("DIV"));
		$no.attr("class","no");
		$no.css("float","left");
		$no.css("cursor","pointer");
		$no.css("width","80px");
		$no.css("text-align","center");
		$no.css("padding","10px");
		$no.css("margin","10px");
		$no.css("border-radius","30px");
		$no.css("box-shadow","0px 0px 5px black");
		$no.css("background-color","rgba(200,200,255,0.9)");
		$no.click(function(){ no(); $content.fadeOut(200); });
		$no.text("NO");
		$yesOrNo.append($no);

		var $clearfix = $(document.createElement("DIV"));
		$clearfix.css("clear","both");
		$yesOrNo.append($clearfix);
		$content.append($yesOrNo);
		$("body").append($content);
		$content.fadeIn(200);
	}
};

/* ************************************************************
 * mojiko-device : Wrapper for low devices.
 * (Actually this class delivers user-agent infomation.)
 * Very bad practice!! I hate it ;(
 */
var MJK_DEV = {
	init : function() {
		MJK_DEV.isMobile = (/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera);
		MJK_DEV.isDesktop = !(MJK_DEV.isMobile); 
		MJK_DEV.isBlink = (/Chrome/i).test(navigator.userAgent);
	},
	isMobile : false,
	isDesktop : true,
	isFullScreen : false,
	switchFullScreen : function() {
		var target = document.getElementsByTagName("html")[0];
		if( !MJK_DEV.isFullScreen ) {
			if (target.webkitRequestFullscreen) {
				target.webkitRequestFullscreen(); //Chrome15+, Safari5.1+, Opera15+
			} else if (target.mozRequestFullScreen) {
				target.mozRequestFullScreen(); //FF10+
			} else if (target.msRequestFullscreen) {
				target.msRequestFullscreen(); //IE11+
			} else if (target.requestFullscreen) {
				target.requestFullscreen(); // HTML5 Fullscreen API Spec
			} else {
				alert(MJK_TEXT.oldBrowserFailure);
				return;
			}
			MJK_DEV.isFullScreen = true;
		} else {
			if (document.webkitCancelFullScreen) {
				document.webkitCancelFullScreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			} else if(document.cancelFullScreen) {
				document.cancelFullScreen();
			} else if(document.exitFullscreen) {
				document.exitFullscreen();
			}
			MJK_DEV.isFullScreen = false;
		}
	}
};


/* ************************************************************
 * mojiko-database : Managing storage for menu and configs.
 */
var MJK_DB = {

	SAVE_COUNT : 100, // Max save data counts.

	// Initialize Databases.
	init : function(){
		/* Nothing to do. */
	},

	// generate date info, especially for Japanese :(
	getDateString : function( isEmptyDate ) {
		if( isEmptyDate ) {
			return '----/--/-- --:--';
		}
		var weeks = MJK_TEXT.weeks;
		var now = new Date();
		var year = now.getYear();
		var month = now.getMonth() + 1;
		var day = now.getDate();
		var week = weeks[ now.getDay() ];
		var hour = now.getHours();
		var min = now.getMinutes();
		var sec = now.getSeconds();
		if(year < 2000) { year += 1900; }
		if(month < 10) { month = "0" + month; }
		if(day < 10) { day = "0" + day; }
		if(hour < 10) { hour = "0" + hour; }
		if(min < 10) { min = "0" + min; }
		if(sec < 10) { sec = "0" + sec; }
		return year+'/'+month+'/'+day+' '+hour + ':' + min;
	},

	// Get File name from URL.
	getFilename : function() {
		var filename = location.href;
		var strs = filename.split("/");
		return strs[strs.length-1].split("#")[0];
	},

	///////////////////////////////////////
	// Config Data persistence.
	getConfigState : function(key) {
		return mjkStorage.getItem("configState-"+key);
	},
	setConfigState : function(key,value) {
		logger("Store config data.");
		mjkStorage.setItem("configState-"+key,value);
	},

	///////////////////////////////////////
	// Read Flags persistence.
	setReadState : function(lineNo) {
		logger(lineNo+" -> Switch read.");
		mjkStorage.setItem("read-"+MJK_DB.getFilename()+"-"+lineNo,true);
	},
	getReadState : function(lineNo) {
		return mjkStorage.getItem("read-"+MJK_DB.getFilename()+"-"+lineNo);
	},

	///////////////////////////////////////
	// Save Data persistence.
	getSaveState : function(number) {
		if( !number ) { number = 0; }
		var state = JSON.parse(mjkStorage.getItem("saveState-"+number));
		if( !state ) {
			state = { hasData : false, date : MJK_DB.getDateString(true), title : "--" };
		}
		return state;
	},
	reflectSaveState : function(number) {
		if( !number ) { number = 0; }
		logger("Begin loading save data.");
		var state = JSON.parse(mjkStorage.getItem("saveState-"+number));
		if( MJK_DB.getFilename() === state.url ) {
			MJK.nextCheckPoint=state.line;
			MJK.skrObj.setScrollTop(MJK.checkPointList[MJK.nextCheckPoint]);
			for( var i= MJK.nextCheckPoint-1 ; 0<=i ; i-- ) {
				var bgm = $("#line-"+i).attr("real-bgm-path");
				if( bgm ) {
					MJK_AUDIO.bgm.play(bgm);
					break;
				}
			}
		} else {
			location.href = state.url+"#"+state.line;
		}
		MJK_AUDIO.bgm.stop();
		MJK_AUDIO.se.stop();
		MJK_AUDIO.voice.stop();
		MJK_AUDIO.loopSe.stop();
	},
	storeCurrentSaveState : function(number) {
		if( !number ) { number = 0; }
		var state = { 
			hasData : true, 
			date : MJK_DB.getDateString(), 
			title : $("h1").text(),
			url   : MJK_DB.getFilename(),
			line : MJK.nextCheckPoint
		};
		mjkStorage.setItem("saveState-"+number,JSON.stringify(state));
		mjkStorage.setItem("saveState-last",JSON.stringify(state));
		logger("Save data "+number+" stored!");
	},
};

/* ************************************************************
 * mojiko : Mojiko Engine Main
 */
var MJK = { 
	isFirstInit : true,
	INTERVAL : 53,
	endOfScrollTop : 1000000,
	SCF : 180, // SECTION CHANGE FRAME
	SF : 45, // SPEAK FRAME
	escapeURL : '',


	/* ***************************
	 * Initialize Engine main.
	 */
	init: function(callback) {

		MJK.initLoadResource(outerImgList);

		// Load configurations.
		MJK.loadSkipConf();
		MJK.loadAutoPlayConf();
		MJK.loadReadConf();
		MJK.loadSpeakSpeed();
		MJK.loadAutoSpeed();
		MJK.loadWindowOpacity();
		MJK.loadSkipOnlyRead();
		MJK.loadDirectionSpeed();
		MJK.loadSoundConf();
		MJK.loadMovieVolume();

		// Generate View Layout.(DOMs)
		MJK.ajastSize();

		// Show load progress view, before switch the view.
		MJK.doLoadResouces(function(){
			callback && callback();
			MJK.initEvents && MJK.initEvents();
			MJK.initSenarioActions && MJK.initSenarioActions();
			MJK.skrObj.getScrollTop() === 0 && MJK.doOnceSenarioAction();
			callback = undefined;
			MJK.initEvents = undefined;
			MJK.initMessageActions = undefined;
			MJK.isFirstInit = false;
		});

		// Recalcurate and set width/height properties in DOMs.
		MJK.resizeWindowEx();

	},


	/* ***************************
	 * Load Resources.
	 */
	imglist : [],

	// Show Resouce Loading View(Shorter Phrase: "Loading View" or "Load View".)
	initLoadResource : function(outerImgList) {

		$(".loading").css("display","block");
		MJK.imglist = outerImgList;
	},

	// push url to reservation list. (Reserve the network to load resource.)
	pushLoadResource : function(url){
		var hasImage = false;
		for(var i=0 ; i<MJK.imglist.length ; i++ ) {
			if( MJK.imglist[i] === url ) {
				hasImage = true;
				break;									
			}
		}
		if( !hasImage ) {
			MJK.imglist.push(url);
		}
	},

	// begin loading resources.
	doLoadResouces : function(callback) {
		$("img").each(function(){
			$img = $(this);
			MJK.imglist.push($img.attr("src"));
		});
		var imgObjs =[];
		var loadedCount = 0;
		if( MJK.imglist.length === 0 ) {
			$(".loading").fadeOut(1800,function(){
				callback && setTimeout(callback,1);
			});
		}
		var loadFailed = false;
		for( var i=0 ; i<MJK.imglist.length ; i++ ) {
			imgObjs[i] = new Image();
			imgObjs[i].onload = function() {
				loadedCount++;
				$("#loadCount").text(parseInt(loadedCount*100/MJK.imglist.length)+"%");
				if(loadedCount===MJK.imglist.length) {
					logger("Finish loading resouces.");
					logger("Start game engine.");
					$("article").css("display","block");
					setTimeout(function(){
						$(".loading").fadeOut(1800,function(){
							callback && callback();
						});
					}, 500);
				}
			};
			imgObjs[i].onerror = function() {
				if( !loadFailed ) {
					alert("Error : File Not Found -> "+this.src);
					location.reload();
					loadFailed = true;
				}
			};
			imgObjs[i].src = MJK.imglist[i];
		}
	},

	/* ***************************
	 * Input Events.
	 */
	initEvents : function() {

		// Ignore Right Click and Double Click.
		$("body").on("contextmenu dblclick",function(){ return false; });
		$(window).unbind("keydown",keydownKiller);
		$(window).unbind("keyup",keyupKiller);
		$(window).keydown(function(event){

			// Enter Key
			if( event.keyCode === 13  ){
				MJK.doNext();
				return false;

			// Space Key /* & Ctrl Key */
			} else if ( event.keyCode === 32 /* && event.keyCode === 17 */ ) {
				MJK.skipOn();
				return false;

			// Esc Key
			} else if ( event.keyCode === 27 ) {
				window.open(MJK.escapeURL, '_blank');
				return false;
			}
			return false;
		});

		$(window).keyup(function(event){
			MJK.skipOff();
			MJK.autoPlayOff();

			// Space Key
			if ( event.keyCode === 32 && MJK.nextCheckPoint ) {
				var $tar = $("#line-"+(MJK.nextCheckPoint-1));
				$tar.text($tar.attr("speak"));
			}
			return false;
		});
		$("article").each(function(){
			$(this).css("cursor","crosshair");
		});
	},


	/* ***************************
	 * Senario processing.(Forwarding)
	 */
	speakSpeed : 1.0,
	speakCount : 0,
	autoSpeed : 10,
	sampleSpeakCount : 0,
	sampleAutoAfterCount : 0,
	initSenarioActions : function() {
		var $window = $("html,body");
		var isIOS = navigator.userAgent.match(/iPad|iPhone/i);
		var goingNext = false;
		setInterval(function(){
			// Change Page Action
			if( MJK.skrObj.getScrollTop() >= endOfScrollTop-5 ) {
				if ( MJK.$article ) {
					var nextUrl = MJK.$article.attr("mjk-next-senario");
					if( nextUrl && ! goingNext ) {
						location.href = nextUrl+".html";
						goingNext = true;
					}
				}

			// skipping action
			} else if( MJK.skipping ) {
				MJK.skipNext();
				var $tar = $("#line-"+(MJK.nextCheckPoint));
				$tar.text($tar.attr("speak"));

			// forward once.
			} else if( MJK.$scrollFrame && MJK.$scrollFrame.scrollTop() !== 1000 ) {
				if( 1000 < MJK.$scrollFrame.scrollTop() ) {
					MJK.refreshScrollFrame();
					MJK.doNext();
				} else {
					if( MJK.ajasted ) {
						MJK.backlogOn();
					}
					MJK.refreshScrollFrame();
				}

			// waiting
			} else {
				var $tar = $("#line-"+(MJK.nextCheckPoint));
				if( ! $tar ) {
					$tar = $("#line-1");
				}
				if( MJK.speakCount < 100 ) {
					if( 100 === parseInt(MJK.speakSpeed)) {
						MJK.speakCount = 100;
					} else {
						MJK.speakCount += (0.1+(MJK.speakSpeed/80.0));
					}
					$tar.text($tar.attr("speak").substr(0,parseInt(MJK.speakCount)));
				} else if( MJK.autoPlaying && MJK_AUDIO.voice && !MJK_AUDIO.voice.playing ) {
					if( !MJK.autoAfterCount ) {
						MJK.autoAfterCount = 1;
					}
					if( (100-MJK.autoSpeed) <= MJK.autoAfterCount ) {
						MJK.speakCount = 0;
						MJK.autoAfterCount = 0; 
						MJK.doOnceSenarioAction(false);
					}
					MJK.autoAfterCount++;
				}
			}

			// blink paint bug-fix.
			if( MJK_DEV.isBlink ) {
				if( !MJK.moving ) {
					if ( MJK.ct === 1 ) {
						MJK.ct = -1;
					} else {
						MJK.ct = 1;
					}
					var top = MJK.skrObj.getScrollTop();
					MJK.skrObj.setScrollTop(top+MJK.ct);
				} else {
						MJK.ct = -1;
				}
			}

			// Config view sample action.
			var $sample = $("#messageSample");
			if( $sample.length ) {
				var $tar = $sample;
				if( MJK.sampleSpeakCount <100 ) {
					$tar.text($tar.attr("speak").substr(0,parseInt(MJK.sampleSpeakCount)));
					if( 100 === parseInt(MJK.speakSpeed)) {
						MJK.sampleSpeakCount = 100;
					} else {
						MJK.sampleSpeakCount += (0.1+(MJK.speakSpeed/80.0));
					}
				} else {
					MJK.sampleAutoAfterCount ++;
					if( (100-MJK.autoSpeed) <= MJK.sampleAutoAfterCount ) {
						MJK.sampleSpeakCount = 0;
						MJK.sampleAutoAfterCount = 0; 
						$tar.text("");
					}
				}
			}
		},40);
	},

	// foward senario
	doNext : function() {
		MJK.skipOff();
		MJK.autoPlayOff();
		MJK.doOnceSenarioAction(false);
	},

	// skip senario
	skipNext : function() { // スキップする
		MJK.doOnceSenarioAction(true);
	},
	nextCheckPoint : 1,

	// foward senario implements.
	doOnceSenarioAction : function(isSkipMode) {
		var currentTop;
		if( MJK.skrObj.isAnimatingTo() ) {
			MJK.skrObj.stopAnimateTo();
			MJK.skrObj.setScrollTop(MJK.checkPointList[MJK.nextCheckPoint]);
			currentTop = MJK.checkPointList[MJK.nextCheckPoint];
		} else {
			currentTop = MJK.skrObj.getScrollTop();
		}
		var target = 0;
		var found = false;
		var line = 0;
		for( var i=0 ; i<MJK.checkPointList.length-1 ; i++ ) {
			if ( MJK.checkPointList[i]<=currentTop && currentTop<MJK.checkPointList[i+1] ) {
				MJK.nextCheckPoint = i+1;
				target = MJK.checkPointList[MJK.nextCheckPoint];
				found = true;
				break;
			}
		}
		if( !found ) {
			return ;
		}
		MJK.speakCount = true;
		if( !MJK_CNF.isMenuPageOpen && !MJK.moving ) {
			var $tar = $("#line-"+(MJK.nextCheckPoint));
			var stopping = $tar.attr("mjk-dont-go");
			if ( $tar.attr("mjk-gotoFrame") ) {
				var className =  $tar.attr("mjk-gotoFrame");
				var frame = parseInt($("."+className).attr("frame"));
				MJK.skrObj.setScrollTop(frame);
    		MJK.doOnceSenarioAction(false);
			} else if( !stopping ) {
				// if( MJK_DEV.isDesktop ) {
					MJK_AUDIO.voice.stop();
					var bgm = $tar.attr("real-bgm-path");
					if( bgm ) {
						MJK_AUDIO.bgm.play(bgm);
					}
					if( $tar.attr("mjk-bgm-stop") ) {
						MJK_AUDIO.bgm.stop();
					}
				// }
				if( isSkipMode ) {
					if( MJK.isRead(MJK.nextCheckPoint) || !MJK.skipOnlyRead ) {
						MJK.skrObj.setScrollTop(target);
					}
				} else {
					// if( MJK_DEV.isDesktop ) {
						var se = $tar.attr("real-se-path");
						if( se ) {
							MJK_AUDIO.se.play(se);
						}
						if( $tar.attr("mjk-se-stop") ) {
							MJK_AUDIO.se.stop();
						}
						if( $tar.attr("mjk-hasvideo") ){
							MJK.playingVideo = true;
							MJK.$video.css("display","block");
							MJK.$video[0].play();
						} else if( MJK.playingVideo ) {
							MJK.playingVideo = false;
							MJK.$video[0].pause();
							MJK.$video.css("display","none");
						}
						var voice = $tar.attr("real-voice-path");
						if( voice ) {
							var name = $tar.attr("mjk-voice-name");
							if( MJK.t ) {
								clearTimeout(MJK.t);
							}
							MJK.t = setTimeout(function(){
								MJK_AUDIO.voice.play(voice, MJK.getVoiceVolumeFor(name) );
							},500);
						}
						var loopSe = $tar.attr("real-loopse-path");
						if( loopSe ) {
							MJK_AUDIO.loopSe.play(loopSe);
						}
					// }
					MJK.moving = true;
					MJK.read(MJK.nextCheckPoint);
					MJK.skrObj.animateTo(target,{
						duration: (target-currentTop)*1000/(10+MJK.directionSpeed),
						easing: "linear",
						done : function() {
							MJK.moving = false;
						}
					});
				}
			}
		}
	},
	gotoId : function(id) {
    var frame = parseInt($(id).attr("frame"));
    MJK.skrObj.setScrollTop(frame);
    MJK.doOnceSenarioAction(false);
	},

	/* ***************************
	 * recalcurate size.
	 */
	lastHeight : 0,
	lastWidth : 0,
	ajastSize : function(callback) {
		var currentHeight = $(window).height(); 
		var currentWidth = $(window).width(); 
		if( MJK.lastHeight !== currentHeight || MJK.lastWidth !== currentWidth ) {
			logger("Begin ajast window");
			MJK.ajasted = false;
			$("#loadCount").text(MJK_TEXT.ajasting);
			MJK.heightLevel = currentHeight;
			MJK.widthLevel  = currentWidth;
			MJK.generate( $, skrollr, logger, callback );
			if( ! MJK.$scrollFrame ) {
				$("body").click(MJK.doNext);
			}
			MJK.lastHeight = currentHeight;
			MJK.lastWidth = currentWidth;
			MJK.refreshScrollFrame();
			MJK.ajasted = true;
			return true;
		}
		return false;
	},

	// recalcurate size extented for Mobile.
	resizeWindowEx : function() {
		if( ! (/iPhone|iPad|iPod/i).test(navigator.userAgent || navigator.vendor || window.opera) ) {
			$(window).resize(function(){
				var lastAjast = (new Date()).getTime();
				MJK.ajastSize();
				$(".loading").css("display","block");
				setTimeout(function(){
					if( (new Date()).getTime()>lastAjast+999 ) {
						$(".loading").fadeOut(400);
					}
				},1000);
			});
		}
	},

	// current state : skipping or not.
	skipping : false,

	// current state : read or not.(numbered)
	readList : {},
	isRead : function(lineNo) {
		return MJK.readList[lineNo];
	},
	read : function(lineNo) {
		if( !MJK.readList[lineNo] ) {
			MJK.readList[lineNo] = true;
			MJK_DB.setReadState(lineNo);
		}
	},
	loadReadConf : function() {
		lineNo = 1;
		while( true ) {
			if( MJK_DB.getReadState(lineNo) ) {
				MJK.readList[lineNo] = true;
			} else {
				break;
			}
			lineNo++;
		}
	},
	skipOn : function() {
		if( ! MJK.skipping ) {
			MJK.skipping = true;
			MJK_DB.setConfigState("skip","ON");
		}
	},
	skipOff : function() {
		if( MJK.skipping ) {
			MJK.skipping = false;
			MJK_DB.setConfigState("skip","OFF");
		}
	},
	loadSkipConf : function() {
		if( MJK_DB.getConfigState("skip") === "ON" ) {
			MJK.skipping = true;
		} else {
			MJK.skipping = false;			
		}
	},


	/* ***************************
	 * Auto Play Management
	 */
	autoPlaying : false,
	autoPlayOn : function() {
		if( ! MJK.autoPlaying ) {
			MJK.autoPlaying = true;
			MJK_DB.setConfigState("autoplay","ON");
		}
	},
	autoPlayOff : function() {
		if( MJK.autoPlaying ) {
			MJK.autoPlaying = false;
			MJK_DB.setConfigState("autoplay","OFF");
		}
	},
	loadAutoPlayConf : function() {
		if( MJK_DB.getConfigState("autoplay") === "ON" ) {
			MJK.autoPlaying = true;
		} else {
			MJK.autoPlaying = false;			
		}
	},


	/* ***************************
	 * Generate Backlog
	 */
	backloging : false,
	backlogOn : function() {
		if( !MJK.backloging ) {
			MJK.deleteScrollFrame();
			MJK.backloging = true;
			var point = "line-"+MJK.nextCheckPoint;
			var $backlog = $(document.createElement("DIV"));
			$backlog.addClass("backlog");
			$backlog.css("position","fixed");
			$backlog.css("width","100%");
			$backlog.css("height","100%");
			$backlog.css("margin","-8px");
			$backlog.css("overflow","scroll");
			/* $backlog.css("overflow-x","hidden"); */
			$backlog.css("z-index","3000005");

			var pList = $("p");
			for( var i=0 ; i<pList.length ; i++ ) {
				var $this = $(pList[i]);
				var text = $this.attr("speak");
				var $line = $(document.createElement("DIV"));
				$line.addClass("line");
				$line.text(text);
				if( $this.attr("real-voice-path") ) {
					$line.attr("voice-path",$this.attr("real-voice-path"));
					$line.addClass("hasVoice");
					$line.click(function(){
						var $this = $(this);
						MJK_AUDIO.voice.play($this.attr("voice-path"),MJK.getVoiceVolumeFor(name));
					});
				}
				$backlog.append($line);
				if( point === $this.attr("id") ) { break; }
			}
			$("body").append($backlog);
			$backlog.scrollTop(100000);

			var $close = $(document.createElement("DIV"));
			$close.addClass("button");
			$close.css("position","fixed");
			$close.css("z-index","4000006");
			$close.text("✕");
			$close.click(	function() {
				MJK.createScrollFrame();
				$(".backlog").slideUp(function(){
					$(".backlog").remove();
					MJK.backloging = false;
				});
			});
			$backlog.append($close);
		}
	},

	/* ***************************
	 * load configuration.
	 */
	setSpeakSpeed : function(value) {
		MJK_DB.setConfigState("speakSpeed",value);
		MJK.speakSpeed = value;
	},
	loadSpeakSpeed : function() {
	var value = MJK_DB.getConfigState("speakSpeed");
		if( value ) {
			MJK.speakSpeed = parseFloat(value);
		} else {
			MJK.speakSpeed = 50.0;
		}
	},
	setAutoSpeed : function(value) {
		MJK_DB.setConfigState("autoSpeed",value);
		MJK.autoSpeed = value;
	},
	loadAutoSpeed : function() {
	var value = MJK_DB.getConfigState("autoSpeed");
		if( value ) {
			MJK.autoSpeed = parseFloat(value);
		} else {
			MJK.autoSpeed = 50.0;
		}
	},
	setWindowOpacity : function(value) {
		MJK_DB.setConfigState("windowOpacity",value);
		MJK.windowOpacity = value;
		MJK.$speakwindow.css("opacity",MJK.windowOpacity/100.0);
	},
	loadWindowOpacity : function() {
		var value = MJK_DB.getConfigState("windowOpacity");
		if( value ) {
			MJK.windowOpacity = parseFloat(value);
		} else {
			MJK.windowOpacity = 100.0;
		}
	},
	setDirectionSpeed : function(value) {
		MJK_DB.setConfigState("directionSpeed",value);
		MJK.directionSpeed = value;
	},
	loadDirectionSpeed : function() {
		var value = MJK_DB.getConfigState("directionSpeed");
		if( value ) {
			MJK.directionSpeed = parseFloat(value);
		} else {
			MJK.directionSpeed = 50.0;
		}
	},
	setSkipOnlyRead : function(value) {
		MJK_DB.setConfigState("skipOnlyRead",value?"true":"false");
		MJK.skipOnlyRead = value;
	},
	loadSkipOnlyRead : function() {
		var value = MJK_DB.getConfigState("skipOnlyRead");
		if( value ) {
			MJK.skipOnlyRead = value === "true";
		} else {
			MJK.skipOnlyRead = true;
		}
	},
	setMovieVolume : function(value) {
		MJK_DB.setConfigState("movieVolume",value);
		MJK.movieVolume = parseFloat(value);
		$("video").attr("volume",MJK.movieVolume*MJK_AUDIO.volume/100000.0);
	},
	loadMovieVolume : function() {
		var value = MJK_DB.getConfigState("movieVolume");
		if( ! value ) { value = 100.0; }
		MJK.movieVolume = parseFloat(value);
	},
	setMasterVolume : function(value) {
		MJK_DB.setConfigState("masterVolume",value);
		if( value === undefined ) { value = 100.0; }
		MJK_AUDIO.setVolume(parseFloat(value));
	},
	setBgmVolume : function(value) {
		MJK_DB.setConfigState("bgmVolume",value);
		if( value === undefined ) { value = 100.0; }
		MJK_AUDIO.bgm.setVolume(parseFloat(value));
	},
	setSeVolume : function(value) {
		MJK_DB.setConfigState("seVolume",value);
		if( value === undefined ) { value = 100.0; }
		MJK_AUDIO.se.setVolume(parseFloat(value));
	},
	setVoiceVolume : function(value) {
		MJK_DB.setConfigState("voiceVolume",value);
		if( value === undefined ) { value = 100.0; }
		MJK_AUDIO.voice.setVolume(parseFloat(value));
	},
	setLoopSeVolume : function(value) {
		MJK_DB.setConfigState("loopSeVolume",value);
		if( value === undefined ) { value = 100.0; }
		MJK_AUDIO.loopSe.setVolume(parseFloat(value));
	},
	loadSoundConf : function() {
		var value;

		value = MJK_DB.getConfigState("masterVolume");
		if( ! value ) { value = 80.0; }
		MJK_AUDIO.setVolume(parseFloat(value));

		value = MJK_DB.getConfigState("bgmVolume");
		if( ! value ) { value = 100.0; }
		MJK_AUDIO.bgm.setVolume(parseFloat(value));

		value = MJK_DB.getConfigState("seVolume");
		if( ! value ) { value = 100.0; }
		MJK_AUDIO.se.setVolume(parseFloat(value));

		value = MJK_DB.getConfigState("voiceVolume");
		if( ! value ) { value = 100.0; }
		MJK_AUDIO.voice.setVolume(parseFloat(value));

		value = MJK_DB.getConfigState("loopSeVolume");
		if( ! value ) { value = 100.0; }
		MJK_AUDIO.loopSe.setVolume(parseFloat(value));

		$(".charactors>li").each(function(){
			var id   = $(this).attr("mjk-id");
			value = MJK_DB.getConfigState("voiceVolume-"+id);
			if( ! value ) { value = 100.0; }
			MJK["voiceVolumeFor"+id] = parseFloat(value);
		});

	},
	setVoiceVolumeFor : function(value,id) {
		MJK_DB.setConfigState("voiceVolume-"+id,value);
		if( value === undefined ) { value = 100.0; }
		MJK["voiceVolumeFor"+id] = parseFloat(value);
	},
	getVoiceVolumeFor : function(id) {
		return MJK["voiceVolumeFor"+id];
	},

	deleteScrollFrame : function(){
		MJK.$scrollFrame.remove();
	},
	createScrollFrame : function(){
		MJK.$scrollFrame = $(document.createElement("DIV"));
		MJK.$scrollFrame.addClass("addElem");
		MJK.$scrollFrame.css("position","fixed");
		MJK.$scrollFrame.css("top","0%");
		MJK.$scrollFrame.css("left","0%");
		MJK.$scrollFrame.css("width","110%");
		MJK.$scrollFrame.css("height","100%");				
		MJK.$scrollFrame.css("overflow","scroll");
		MJK.$scrollFrame.css("overflow-x","hidden");
		MJK.$scrollFrame.css("z-index","2000000");
		for( var i=0 ; i<600 ; i++ ) {
			MJK.$scrollFrame.append(document.createElement("BR"));
		}
		MJK.refreshScrollFrame();
		MJK.$scrollFrame.click(MJK.doNext);
		$("body").append(MJK.$scrollFrame);
	},
	refreshScrollFrame : function(){
		MJK.$scrollFrame && MJK.$scrollFrame.scrollTop(1000);
	},


	/* ***************************
	 * Generate DOMs for Animate Senario.
	 */
	skrObj : null,
	heightLevel : 8,
	widthLevel : 12,

	/* -- Interprete scripts and generate senario actions. -- */
	generate : function( $, skrollr, logger, callback ) {

		logger("Begin interpreting senario script.");

		MJK.frame = 0; // Game Fowarding Time Management Counter.
		MJK.priority = 0; // Redering Priorities Management Counter.
		MJK.checkPointList = [0]; // Senario Stoping Point ( The type is frame count.)

	  /* -- Check the Window height and calcurate DOM's width. -- */

	  // Actors's DOM's width.
		MJK.moveBgMargin = [ 0, -7, 7, -14, 14 ];
		MJK.moveChMargin = [
			0,
			parseInt((MJK.heightLevel* MJK.INTERVAL/70))*(-1),
			parseInt((MJK.heightLevel* MJK.INTERVAL/70)),
			parseInt((MJK.heightLevel* MJK.INTERVAL/70))*(-2),
			parseInt((MJK.heightLevel* MJK.INTERVAL/70))*2
		];
		MJK.charPxIntervals = [
			0,
			parseInt((MJK.heightLevel*MJK.INTERVAL)/70),
			parseInt((MJK.heightLevel*MJK.INTERVAL)/-70),
			parseInt((MJK.heightLevel*MJK.INTERVAL)/70)*2,
			parseInt((MJK.heightLevel*MJK.INTERVAL)/-70)*2
		];

		// Remove elements, which have been generated by last initialization process.
		$(".addElem").remove();

		// Interprete Senario Script and generate DOMs for skrollr Libs.
		$("article").each(MJK.generateChapter); 

		logger("Finish interpreting senario script.");

		/* Invisible Screen for binding mouse scroll events and control flexibly. */
		if( $("article").length && MJK_DEV.isDesktop ) {
			MJK.createScrollFrame();
		}

		// Initialize skrollr
		logger("Begin initializing skrollr");
		var initScrollTop = 0;
		if( !MJK.isFirstInit ) {
			initScrollTop = MJK.skrObj.getScrollTop();
			MJK.skrObj.destroy();
		}
		MJK.skrObj = skrollr.init({easing: {
			sin: function(p) {
				return Math.sin((p*90.0/100)*Math.PI/2);
			},
			cos: function(p) {
				return 1-Math.cos((p*90.0/100)*Math.PI/2);
			},
			WTF: Math.random,
		}});
		$("html").css("overflow","hidden");
		
		endOfScrollTop = MJK.frame;
		$("body").css("height",MJK.frame+$(window).height()+"px");
		logger("Finish initializing skrollr");
		if( location.hash && ! MJK.hashAlreadyRead ) {
			MJK.hashAlreadyRead = true;
			MJK.nextCheckPoint=parseInt(location.hash.split("#")[1])
			initScrollTop = MJK.checkPointList[MJK.nextCheckPoint];
			for( var i= MJK.nextCheckPoint-1 ; 0<=i ; i-- ) {
				var bgm = $("#line-"+i).attr("real-bgm-path");
				if( bgm ) {
					MJK_AUDIO.bgm.play(bgm);
					break;
				}
			}
		} else if( !MJK.isFirstInit && MJK.nextCheckPoint ) {
			initScrollTop = MJK.checkPointList[MJK.nextCheckPoint];
		}
		MJK.skrObj.setScrollTop(initScrollTop);
		MJK.checkPointList.push(parseInt($("body").css("height")));

	}, // generate


	/* -- Interprete senario scripts for each articles -- */
	generateChapter : function(self) {

		MJK.$article = self?$(self):$(this);
		MJK.$lastSpeak = undefined;

		MJK.lineNo = 1;

		// Initialize screen effect state.
		MJK.beginedBgActions = [];
		MJK.beginedChActions = [];
		MJK.hasSD = false;
		MJK.hasCG = false;
		MJK.scaleList = [];

		// Getting Environment Values from article tags.
		MJK.bgPost = MJK.$article.attr("mjk-img-bg-postfix");
		if( !MJK.bgPost ) { MJK.bgPost = ""; }
		MJK.bgPref = MJK.$article.attr("mjk-img-bg-prefix");
		if( !MJK.bgPref ) { MJK.bgPref = ""; }
		MJK.chPost = MJK.$article.attr("mjk-img-ch-postfix");
		if( !MJK.chPost ) { MJK.chPost = ""; }
		MJK.chPref = MJK.$article.attr("mjk-img-ch-prefix");
		if( !MJK.chPref ) { MJK.chPref = ""; }
		MJK.efPost = MJK.$article.attr("mjk-img-ef-postfix");
		if( !MJK.efPost ) { MJK.efPost = ""; }
		MJK.efPref = MJK.$article.attr("mjk-img-ef-prefix");
		if( !MJK.efPref ) { MJK.efPref = ""; }
		MJK.cgPost = MJK.$article.attr("mjk-img-cg-postfix");
		if( !MJK.cgPost ) { MJK.cgPost = ""; }
		MJK.cgPref = MJK.$article.attr("mjk-img-cg-prefix");
		if( !MJK.cgPref ) { MJK.cgPref = ""; }
		MJK.sdPref = MJK.$article.attr("mjk-img-sd-prefix");
		if( !MJK.sdPref ) { MJK.sdPref = ""; }
		MJK.sdPost = MJK.$article.attr("mjk-img-sd-postfix");
		if( !MJK.sdPost ) { MJK.sdPost = ""; }
		MJK.voicePref = MJK.$article.attr("mjk-sound-voice-prefix");
		if( !MJK.voicePref ) { MJK.voicePref = ""; }
		MJK.voicePost = MJK.$article.attr("mjk-sound-voice-postfix");
		if( !MJK.voicePost ) { MJK.voicePost = ""; }
		MJK.sePref = MJK.$article.attr("mjk-sound-se-prefix");
		if( !MJK.sePref ) { MJK.sePref = ""; }
		MJK.sePost = MJK.$article.attr("mjk-sound-se-postfix");
		if( !MJK.sePost ) { MJK.sePost = ""; }
		MJK.bgmPref = MJK.$article.attr("mjk-sound-bgm-prefix");
		if( !MJK.bgmPref ) { MJK.bgmPref = ""; }
		MJK.bgmPost = MJK.$article.attr("mjk-sound-bgm-postfix");
		if( !MJK.bgmPost ) { MJK.bgmPost = ""; }
		MJK.loopSePref = MJK.$article.attr("mjk-sound-loopse-prefix");
		if( !MJK.loopSePref ) { MJK.loopSePref = ""; }
		MJK.loopSePost = MJK.$article.attr("mjk-sound-loopse-postfix");
		if( !MJK.loopSePost ) { MJK.loopSePost = ""; }
		MJK.movPref = MJK.$article.attr("mjk-mov-prefix");
		if( !MJK.movPref ) { MJK.movPref = ""; }
		MJK.movPost = MJK.$article.attr("mjk-mov-postfix");
		if( !MJK.movPost ) { MJK.movPost = ""; }

		// Interprete senario scripts entry sections processing
		MJK.$article.find("section").each( function(){ MJK.generateScene(this) } );

		return MJK.$article;
	},


	/* -- for each sections. -- */
	bgActions : {},
	chActions : {},
	generateScene : function(self) {

		MJK.$section = self?$(self):$(this);

		// Initializing Senario Stoping Point (frame count) List. 
		MJK.gotoLabelList = [];

		// initializing actors momentary status.
		MJK.charspace = [];
		MJK.charbodies = [];
		MJK.charscreens = [ 0, 0, 0, 0, 0 ];
		MJK.currentCamera = 0;
		MJK.leftList = [
			2, 0, 4, 3, undefined,
			2, 0, 4, 3, undefined
		];
		MJK.rightList = [
			1, 3, 0, undefined, 2,
			1, 3, 0, undefined, 2
		];

		if( MJK.SCF <= MJK.frame ) {
			MJK.$section.attr("data-"+(MJK.frame-MJK.SCF),"opacity:1;top:100%;");
		}
		MJK.$section.attr("data-"+MJK.frame,"opacity:1;top:0%;");

		// initializing background momentary status.
		MJK.$bg = $(document.createElement("DIV"));
		MJK.$bg.addClass("addElem");
		MJK.$bg.css("position","fixed");
		MJK.$bg.css("width","140%");
		MJK.$bg.css("height","110%");
		MJK.$bg.css("top","-3%");
		MJK.$bg.css("left","-20%");
		if ( MJK.SCF === MJK.frame ) {
			MJK.$bg.attr("data-"+(MJK.frame-MJK.SCF),"opacity:1;margin-top:3%;");
		} else if( MJK.SCF <= MJK.frame ) {
			MJK.$bg.attr("data-"+(MJK.frame-MJK.SCF),"opacity:0;margin-top:3%;");
		} 
		MJK.$bg.attr("data-"+MJK.frame,"opacity:1;margin-top:0%;");

		// configure background layer.
		MJK.$bgImg = $(document.createElement("DIV"));
		if( MJK.$section.attr("mjk-bg") ){
			var ratio = MJK.widthLevel/MJK.heightLevel;
			if( ratio < 2.7 ) {
				$(".alert").css("display","none");
				MJK.$bgImg.css("position","absolute");
				MJK.$bgImg.css("width","100%");
				MJK.$bgImg.css("height","100%");
				MJK.$bgImg.css("left","0%");
				MJK.$bgImg.css("top","0%");
				MJK.$bgImg.css("background-size","cover");
				MJK.$bgImg.css("background-repeat","no-repeat");
				MJK.$bgImg.css("background-position","center center");
				var bg = MJK.bgPref+MJK.$section.attr("mjk-bg")+MJK.bgPost;
				MJK.$bgImg.css("background-image","url("+bg+")");
				MJK.imglist.push(bg);
				MJK.$bg.append(MJK.$bgImg);
			} else {
				$(".alert").css("display","block");
			}
		}

		// configure actors layer.
		MJK.$chl = $(document.createElement("DIV"));
		MJK.$chl.css("position","absolute");
		MJK.$chl.css("width","150%");
		MJK.$chl.css("height","115%");
		MJK.$chl.css("left","0%");
		MJK.$chl.css("margin-left","-25%");
		MJK.$chl.css("top","-15%");
		MJK.$bg.append(MJK.$chl);

		// create actor control layers.
		for( var i=0 ; i<10 ; i++ ) {
			var $chars = $(document.createElement("DIV"));
			$chars.css("position","absolute");
			$chars.css("width","100%");
			$chars.css("height","100%");
			$chars.css("top","0%");
			$chars.css("left",MJK.charPxIntervals[(i%5)]+"px");
			$chars.css("background-position","bottom center");
			$chars.css("background-repeat","no-repeat");
			$chars.css("background-size","contain");
	  		$chars.css("z-index",""+(MJK.priority+1));
			MJK.$chl.append($chars);
			MJK.charbodies[i] = $chars;
		}

		// configure screen effect layers.
		MJK.$effect = $(document.createElement("DIV"));
		MJK.$effect.css("position","absolute");
		MJK.$effect.css("width","100%");
		MJK.$effect.css("height","100%");
		MJK.$effect.css("opacity","0");
  	MJK.$effect.css("z-index",""+(MJK.priority+3));
		MJK.$bg.append(MJK.$effect);

		// create CG Layers and configure it.
		var createCGFrame = function() {
			var $cg = $(document.createElement("DIV"));
			$cg.css("position","absolute");
			$cg.css("top","2.7%");
			$cg.css("left","14%");
			$cg.css("width","72%");
			$cg.css("height","91%");
  		$cg.css("z-index",""+(MJK.priority+5));
			$cg.css("background-size","cover");
			$cg.css("background-repeat","no-repeat");
			$cg.css("background-position","center center");
			$cg.css("opacity","0");
			return $cg;
		}
		MJK.$cgBack  = createCGFrame();
		MJK.$cgFront = createCGFrame();	
		MJK.$bg.append(MJK.$cgBack);
		MJK.$bg.append(MJK.$cgFront);

		// create SD Layers and configure it.
		var createSDFrame = function() {
			var $sd = $(document.createElement("DIV"));
			$sd.css("position","absolute");
			$sd.css("top","4%");
			$sd.css("left","15%");
			$sd.css("width","70%");
			$sd.css("height","60%");
  		$sd.css("z-index",""+(MJK.priority+5));
			$sd.css("background-size","contain");
			$sd.css("background-repeat","no-repeat");
			$sd.css("background-position","center center");
			$sd.css("opacity","0");
			return $sd;
		}
		MJK.$sdBack  = createSDFrame();
		MJK.$sdFront = createSDFrame();			
		MJK.$bg.append(MJK.$sdBack);
		MJK.$bg.append(MJK.$sdFront);

		// create talk window.(call "message window")
		MJK.$speaks = MJK.$section.find("p");
		if( 0 < MJK.$speaks.length ) {
			MJK.$speakwindow = $(document.createElement("DIV"));
			MJK.$speakwindow.css("position","absolute");
  		MJK.$speakwindow.css("z-index",""+(MJK.priority+6));
			MJK.$speakwindow.attr("class","speakwindow");
			MJK.$speakwindow.attr("data-"+(MJK.frame),"opacity:0");
			MJK.$speakwindow.attr("data-"+(MJK.frame+30),"opacity:1");
			MJK.$speakwindow.css("opacity",MJK.windowOpacity/100.0);
			MJK.$bg.prepend(MJK.$speakwindow);
		}
		MJK.frame += 30;

		// create face layers on talk window.
		//  Usually we can see it on the left hand side of message window, 
		//  so I do hard coding. It's very difficult to tune by CSS properties only.
		MJK.$speakerFaceBack = null;
		MJK.$speakerFaceFront = null;
		if( 940 <= $(window).width() ) {
			var createSpeakerFace = function() {
				var $sf = $(document.createElement("DIV"));
				$sf.css("position","absolute");
				$sf.css("top","35%");
				$sf.css("left","-25%");
				$sf.css("width","80%");
				$sf.css("height","100%");
				$sf.css("background-size","contain");
				$sf.css("background-repeat","no-repeat");
				$sf.css("background-position","center center");
	  		$sf.css("z-index",""+(MJK.priority+7));
	  		$sf.addClass("addElem");
				return $sf;
			}
			MJK.$speakerFaceBack = createSpeakerFace();
			MJK.$speakerFaceBack.attr("data-0","background-image:none");
			MJK.$speakerFaceFront = createSpeakerFace();
			MJK.$section.append(MJK.$speakerFaceBack);
			MJK.$section.append(MJK.$speakerFaceFront);
		} else {
			MJK.$speakerFaceBack = $(document.createElement("DIV"));
			MJK.$speakerFaceFront = $(document.createElement("DIV"));
		}

		// init Backgrounds and actors values. (Fields action.)
		MJK.cameraMoving =false;
		lastBg = 0;
		lastCh = 0;

		// interprete senario scripts for <p> tags.
		MJK.$speaks.each( function(){ MJK.generateSpeak(this); } );

		// finish for <section> tags interpreting. Swiching section here.
		MJK.$bg.attr("data-"+(MJK.frame+1),"opacity:1;");
		MJK.$bg.attr("data-"+(MJK.frame+MJK.SCF),"opacity:0;");
		MJK.$section.attr("data-"+(MJK.frame+1),"opacity:1;");
		MJK.$section.attr("data-"+(MJK.frame+MJK.SCF),"opacity:0;");
		MJK.$section.before(MJK.$bg);
		MJK.frame += MJK.SCF;

		// For next section, all of the elements have higher rendering priorities
		// than this sections, becouse of section switching actions.
		// If you create other type of switching action, you can change this process.
		MJK.priority += 10;
	},

	/* -- Inteprete for each p tags. -- */
	generateSpeak : function(self) {

		// 
		MJK.$speak = self?$(self):$(this);
		MJK.$speak.css("z-index",""+MJK.priority+8);
		MJK.$speak.attr("data-"+(MJK.frame),"display:none;");
		MJK.frame++;
		MJK.$speak.attr("data-"+(MJK.frame),"display:block;");
		MJK.frame++;

		if( MJK.$speak.attr("mjk-bgm") ) {
			MJK.$speak.attr("real-bgm-path",    MJK.bgmPref+MJK.$speak.attr("mjk-bgm")+MJK.bgmPost);
		}
		if( MJK.$speak.attr("mjk-se") ) {
			MJK.$speak.attr("real-se-path",    MJK.sePref+MJK.$speak.attr("mjk-se")+MJK.sePost);
		}
		if( MJK.$speak.attr("mjk-voice") ) {
			MJK.$speak.attr("real-voice-path",  MJK.voicePref+MJK.$speak.attr("mjk-voice")+MJK.voicePost);
		}
		if( MJK.$speak.attr("mjk-loopse") ) {
			MJK.$speak.attr("real-loopse-path", MJK.loopSePref+MJK.$speak.attr("mjk-loopse")+MJK.loopSePost);
		}

		// Hide Message temporary
		if( !MJK.$speak.attr("speak") ) {
			MJK.$speak.attr("speak",MJK.$speak.text().substr(0,200) );
			MJK.$speak.text("");
		}

		// Specify ID for each Elements.(Each Message Lines.)
		MJK.$speak.attr("id","line-"+MJK.lineNo);
		MJK.lineNo++;

		// Execute Background Action(bg-action)
		MJK.generateBgAction();

		// Play movie.
		var mov = MJK.$speak.attr("mjk-mov");
		if( mov ) {
			MJK.$video = $(document.createElement("VIDEO"));
			MJK.$video.attr("src",MJK.movPref+mov+MJK.movPost);
			MJK.$video.addClass("addElem");
			MJK.$video.css("z-index","1999999");
			MJK.$video.css("display","none");
			MJK.$video.css("width","100%");
			MJK.$video.css("height","100%");
			MJK.$video.css("background-color","black");
			$("body").append(MJK.$video);
			MJK.$speak.attr("mjk-hasvideo","true");
	  	}


		/* ToDo: This feature will move to external plugin and be removed from engine core. */
		// Show SD Image and do action.
		var sd = MJK.$speak.attr("mjk-sd");
		if( sd ) {
			var list = sd.split(";");
			for ( var i=0 ; i<list.length ; i++ ) {
				var url = MJK.sdPref+list[i]+MJK.sdPost;
				if( url !== MJK.hasSD ) {
					MJK.$sdFront.attr("data-"+(MJK.frame),"opacity:0;background-image:url("+url+");");
					if( !MJK.hasSD ) {
						MJK.$sdBack.attr("data-"+(MJK.frame),"opacity:0;");
					}
					MJK.frame+=20;
					MJK.$sdBack.attr("data-"+(MJK.frame),"background-image:url("+url+");");
					MJK.$sdFront.attr("data-"+(MJK.frame),"opacity:1;");
					MJK.frame+=1;
					MJK.$sdBack.attr("data-"+(MJK.frame),"opacity:1;");
					MJK.frame+=19;
					MJK.pushLoadResource(url);
					MJK.hasSD = url;
				}
			}
		} else if( MJK.hasSD ) {
			MJK.$sdBack.attr("data-"+(MJK.frame),"opacity:1");
			MJK.$sdFront.attr("data-"+(MJK.frame),"opacity:1");
			MJK.frame+=1;
			MJK.$sdBack.attr("data-"+(MJK.frame),"opacity:0");
			MJK.frame+=19;
			MJK.$sdFront.attr("data-"+(MJK.frame),"opacity:0");
			MJK.frame+=1;
			MJK.hasSD = undefined;
		}

		/* ToDo: This feature will move to external plugin and be removed from engine core. */
		// Show CG Image and do action.
		var cg = MJK.$speak.attr("mjk-cg");
		if( cg ) {
			var list = cg.split(";");
			for ( var i=0 ; i<list.length ; i++ ) {
				var exec = list[i];
				var name = exec.split(":")[0];
				var way  = exec.split(":")[1];
				var url  = MJK.cgPref+name+MJK.cgPost;
				if( exec !== MJK.hasCG ) {
					if( way ) {
						if( way.indexOf(" ") !== 1 ) {
							way = "background-position:"+way+";";

						} else {
							way = "background-position:top "+way+";";
						}
					} else {
						way = "background-position:top center;";
					}
					if( MJK.hasCG ) {
						MJK.$cgBack.attr("data-"+(MJK.frame),"opacity:1;");
					} else {
						MJK.$cgBack.attr("data-"+(MJK.frame),"opacity:0;");
					}
					MJK.frame+=1;
					MJK.$cgFront.attr("data-"+(MJK.frame),"opacity:0;"+way+"background-image:url("+url+");");
					MJK.frame+=30;
					if( MJK.hasCG ) {
						MJK.$cgBack.attr("data-"+(MJK.frame),"opacity:1;");
					} else {
						MJK.$cgBack.attr("data-"+(MJK.frame),"opacity:0;");						
					}
					MJK.$cgFront.attr("data-"+(MJK.frame),"opacity:1;");
					MJK.frame+=1;
					MJK.$cgBack.attr("data-"+(MJK.frame),way+"opacity:1;background-image:url("+url+");");
					MJK.frame+=14;
					MJK.$cgFront.attr("data-"+(MJK.frame),"opacity:1;");
					MJK.frame+=1;
					MJK.$cgFront.attr("data-"+(MJK.frame),"opacity:0;");
					MJK.frame+=1;
					MJK.pushLoadResource(url);
					MJK.hasCG = exec;
				}
			}
		} else if( MJK.hasCG ) {
			MJK.$cgBack.attr("data-"+(MJK.frame),"opacity:1");
			MJK.$cgFront.attr("data-"+(MJK.frame),"opacity:1");
			MJK.frame+=1;
			MJK.$cgBack.attr("data-"+(MJK.frame),"opacity:0");
			MJK.frame+=19;
			MJK.$cgFront.attr("data-"+(MJK.frame),"opacity:0");
			MJK.frame+=1;
			MJK.hasCG = undefined;
		}

		// Make the actors leaving.
		var leaveChar = MJK.$speak.attr("mjk-leave");
		if( leaveChar ) {
			MJK.frame += 1;
			if( leaveChar === "*" ) {
				for( var i=0 ; i<5 ; i++ ) {
					if( MJK.charspace[i] ) {
						MJK.charbodies[i+(MJK.charscreens[i]*5)].attr("data-"+(MJK.frame),"opacity:1;");
						MJK.charbodies[i+(MJK.charscreens[i]*5)].attr("data-"+(MJK.frame+20),"opacity:0;");
						MJK.charbodies[i+(MJK.charscreens[i]*5)].attr("data-"+(MJK.frame+21),"background-image:none;");
						MJK.charspace[i] = undefined;
					}
				}
				MJK.frame += 22;
			} else {
				var way = leaveChar.split(":")[1];
				var leaveChar = leaveChar.split(":")[0];
				var leaveNo = 0;
				for( var i=0 ; i<5 ; i++ ) {
					if( MJK.charspace[i] === leaveChar ) {
						leaveNo = i;
						break;
					}
				}
				MJK.charspace[leaveNo] = undefined;
				var startMargin = MJK.charPxIntervals[leaveNo];
				var endMargin   = MJK.charPxIntervals[leaveNo]*1.2;
				if( way ) {
					if( way.indexOf("drop") !== -1 ) {
						if( way.indexOf("left") !== -1 ) {
							startMargin = MJK.charPxIntervals[leaveNo];
							endMargin   = MJK.charPxIntervals[leaveNo]+(-MJK.INTERVAL*3);
						} else {
							startMargin = MJK.charPxIntervals[leaveNo];
							endMargin   = MJK.charPxIntervals[leaveNo]+(MJK.INTERVAL*3);
						}
						MJK.charbodies[leaveNo+MJK.charscreens[leaveNo]*5].attr("data-"+(MJK.frame),"top[cos]:0%;left:"+startMargin+"px;");
						MJK.frame += 60;
						MJK.charbodies[leaveNo+MJK.charscreens[leaveNo]*5].attr("data-"+(MJK.frame),"top:100%;opacity:1;left:"+endMargin+"px;");
						MJK.frame += 1;
						MJK.charbodies[leaveNo+MJK.charscreens[leaveNo]*5].attr("data-"+(MJK.frame),"top:0%;opacity:0;left:"+startMargin+"px;");
						MJK.frame += 1;
						MJK.charbodies[leaveNo+MJK.charscreens[leaveNo]*5].attr("data-"+(MJK.frame),"background-image:none;");
						MJK.frame += 1;
						MJK.charbodies[leaveNo+MJK.charscreens[leaveNo]*5].attr("data-"+(MJK.frame),"top:0%;left:"+startMargin+"px;");
						MJK.frame += 1;
					} else {
						if( way.indexOf("left") !== -1 ) {
							startMargin = MJK.charPxIntervals[leaveNo];
							endMargin   = MJK.charPxIntervals[leaveNo]+(-MJK.INTERVAL*6);
						} else {
							startMargin = MJK.charPxIntervals[leaveNo];
							endMargin   = MJK.charPxIntervals[leaveNo]+(MJK.INTERVAL*6);
						}
						MJK.charbodies[leaveNo+MJK.charscreens[leaveNo]*5].attr("data-"+(MJK.frame),"left:"+startMargin+"px;");
						MJK.charbodies[leaveNo+MJK.charscreens[leaveNo]*5].attr("data-"+(MJK.frame+24),"opacity:0;left:"+endMargin+"px;");
						MJK.charbodies[leaveNo+MJK.charscreens[leaveNo]*5].attr("data-"+(MJK.frame+25),"background-image:none;");
						MJK.charbodies[leaveNo+MJK.charscreens[leaveNo]*5].attr("data-"+(MJK.frame+26),"left:"+startMargin+"px;");
						MJK.frame += 27;
					}
				} else {
					startMargin = MJK.charPxIntervals[leaveNo];
					endMargin   = MJK.charPxIntervals[leaveNo]*1.2;
					MJK.charbodies[leaveNo+MJK.charscreens[leaveNo]*5].attr("data-"+(MJK.frame),"left:"+startMargin+"px;");
					MJK.charbodies[leaveNo+MJK.charscreens[leaveNo]*5].attr("data-"+(MJK.frame+24),"opacity:0;left:"+endMargin+"px;");
					MJK.charbodies[leaveNo+MJK.charscreens[leaveNo]*5].attr("data-"+(MJK.frame+25),"background-image:none;");
					MJK.charbodies[leaveNo+MJK.charscreens[leaveNo]*5].attr("data-"+(MJK.frame+26),"left:"+startMargin+"px;");
					MJK.frame += 27;
				}
			}
		}

		/* ToDo: This feature will move to external plugin and be removed from engine core. */
		// Return actors to the original size, if their size are scaled.
		var clearScale = MJK.$speak.attr("mjk-clear-scale");
		if( clearScale ) {
			for( var i=0 ; i<MJK.scaleList.length ; i++ ) {
				var pos = MJK.scaleList[i];
				MJK.charbodies[pos].attr("data-"+(MJK.frame),"transform:scale(1.4) rotate(0deg);margin-top[cos]:5%;");
				MJK.charbodies[pos+5].attr("data-"+(MJK.frame),"transform:scale(1.4) rotate(0deg);margin-top[cos]:5%;");
				MJK.charbodies[pos].attr("data-"+(MJK.frame+20),"transform:scale(1.0) rotate(0deg);margin-top:0%;z-index:"+(MJK.priority+2)+";");
				MJK.charbodies[pos+5].attr("data-"+(MJK.frame+20),"transform:scale(1.0) rotate(0deg);margin-top:0%;z-index:"+(MJK.priority+2)+";");
				MJK.charbodies[pos].attr("data-"+(MJK.frame+21),"z-index:"+(MJK.priority+1)+";");
				MJK.charbodies[pos+5].attr("data-"+(MJK.frame+21),"z-index:"+(MJK.priority+1)+";");
			}
			MJK.scaleList = [];
			MJK.frame += 22;
		}

		// Change actor's expression
		var charactor = MJK.$speak.attr("mjk-ch");
		if( MJK.$speak.attr("mjk-ch") ) {
			var showAlready = false;
			var isFirstTime = false;
			var position = undefined;
			var body = charactor.split("/")[0];

			// Find the hit target.
			var hitTarget = MJK.$speak.attr("mjk-hit-ch");
			var hitTargetNo, hitName, hitWay;
			if( hitTarget ) {
				hitName = hitTarget.split(":")[0];
				hitWay  = hitTarget.split(":")[1];
				for( var i=0 ; i<5 ; i++ ) {
					if( MJK.charspace[i] === hitName ) {
						MJK.charspace[i] = body;
						hitTargetNo = i;
						position = i;
						showAlready = true;
						break;
					}
				}
			}
			// Check : Is the actors already on screen?
			if( !showAlready ) {
				for( var i=0 ; i<5 ; i++ ) {
					if( MJK.charspace[i] === body ) {
						showAlready = true;
						position = i;
						break;
					}
				}
			}
			// Check : Does the actors exist at the inside of screen?
			//    -> Join to screen, if it's not full.
			if( !showAlready ) {
				var begin = 0;
				var increment = 1;
				$join = MJK.$speak.attr("mjk-join");
				if( !$join ) {
					$join = "";
				}
				if( $join.indexOf("left") !== -1 ) {
					begin = 2;
					increment = 2;
				} else if ( $join.indexOf("right") !== -1 ) {
					begin = 1;
					increment = 2;
				} 
				for( var i=begin ; i<5 ; i+=increment ) {
					if( !MJK.charspace[i] ) {
						position = i;
						MJK.charspace[position] = body;
						MJK.charscreens[i] = 1;
						isFirstTime = true;
						break;
					}
				}
			}

			// Change the actor's expression.
			var body = charactor.split("/")[0];
			var faces = charactor.split("/")[1];
			var faceList = faces.split(";");
			var faceImage = undefined;
			var beginFaceChange = MJK.frame;
			for( var i=0 ; i<faceList.length ; i++ ) {

				var url = MJK.chPref+body+"/"+faceList[i]+MJK.chPost;
				faceImage = url;

				var pastPosition = position+(MJK.charscreens[position]*5);
				MJK.charscreens[position] = MJK.charscreens[position]?0:1;
				var nextPosition = position+(MJK.charscreens[position]*5);

				// Make actor to attack other actor, before it goes away.
				// remove it on out of screen.
				if( hitTarget ) {
					hitWay;
					var hitMargin;
					if( hitWay === "left" ) {
						hitMargin = MJK.INTERVAL*14;
					} else {
						hitMargin = -MJK.INTERVAL*14;
					}
					var defMargin = MJK.charPxIntervals[position];
					MJK.frame += 1;
					MJK.charbodies[nextPosition].attr("data-"+(MJK.frame-9),"background-image:url("+url+");");
					MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"opacity:0;top:0%;left:"+(defMargin+hitMargin)+"px;");
					MJK.$speakerFaceFront.attr("data-"+(MJK.frame),"opacity:0;background-image:url("+url+");");
					MJK.frame += 1;
					MJK.charbodies[pastPosition].attr("data-"+(MJK.frame),"opacity:1;left:"+defMargin+"px;");
					MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"opacity:1;top:0%;left[cos]:"+(defMargin+hitMargin)+"px;");
					MJK.frame += 20;
					MJK.charbodies[pastPosition].attr("data-"+(MJK.frame),"opacity:1;left[sin]:"+defMargin+"px;");
					MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"opacity:1;top:10%;left[cos]:"+defMargin+"px;");
					MJK.frame += 20;
					MJK.charbodies[pastPosition].attr("data-"+(MJK.frame),"opacity:1;left:"+(defMargin-hitMargin)+"px;");
					MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"top:0%;");
					MJK.$speakerFaceFront.attr("data-"+(MJK.frame),"opacity:1;");
					MJK.$speakerFaceBack.attr("data-"+(MJK.frame),"background-image:url("+url+");");
					MJK.frame += 1;
					MJK.$speakerFaceFront.attr("data-"+(MJK.frame),"opacity:0;background-image:none;");
					MJK.charbodies[pastPosition].attr("data-"+(MJK.frame),"opacity:0;left:"+defMargin+"px;");

				// actor joining to the inside of screen.
				} else if( isFirstTime ) {
					join = MJK.$speak.attr("mjk-join");
					if( !join ) {
						join = "";
					}
					var startMargin = MJK.charPxIntervals[nextPosition]*1.2;
					var endMargin   = MJK.charPxIntervals[nextPosition];
					MJK.frame +=6;
					if( join.indexOf("up") !== -1 ) {
						MJK.frame += 1;
						MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"top:0%;");
						MJK.charbodies[pastPosition].attr("data-"+(MJK.frame),"top:0%;");
						MJK.frame += 1;
						MJK.charbodies[nextPosition].attr("data-"+(MJK.frame-5),"background-image:url("+url+");");
						MJK.charbodies[pastPosition].attr("data-"+(MJK.frame),"opacity:0;left:"+endMargin+"px;top:100%;");
						MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"opacity:0;left:"+endMargin+"px;top[sin]:100%;");
						MJK.$speakerFaceFront.attr("data-"+(MJK.frame),"opacity:0;background-image:url("+url+");");
						MJK.frame += 1;
						MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"opacity:1;");
						MJK.frame += 30;
						MJK.charbodies[pastPosition].attr("data-"+(MJK.frame),"opacity:0;top:0%;");
						MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"opacity:1;top:0%;");
						MJK.$speakerFaceFront.attr("data-"+(MJK.frame),"opacity:1;");
						MJK.$speakerFaceBack.attr("data-"+(MJK.frame),"background-image:url("+url+");opacity:1");
						MJK.frame += 1;
						MJK.$speakerFaceFront.attr("data-"+(MJK.frame),"opacity:0;background-image:none;");
						MJK.frame += 1;
					} else {
						MJK.frame += 1;
						MJK.charbodies[nextPosition].attr("data-"+(MJK.frame-5),"background-image:url("+url+");");
						MJK.charbodies[pastPosition].attr("data-"+(MJK.frame),"opacity:0;left:"+startMargin+"px;");
						MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"opacity:0;left:"+startMargin+"px;");
						MJK.$speakerFaceFront.attr("data-"+(MJK.frame),"opacity:0;background-image:url("+url+");");
						MJK.frame += 30;
						MJK.charbodies[pastPosition].attr("data-"+(MJK.frame),"opacity:0;left:"+endMargin+"px;");
						MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"opacity:1;left:"+endMargin+"px;");
						MJK.$speakerFaceFront.attr("data-"+(MJK.frame),"opacity:1;");
						MJK.$speakerFaceBack.attr("data-"+(MJK.frame),"background-image:url("+url+");opacity:1;");
						MJK.frame += 1;
						MJK.$speakerFaceFront.attr("data-"+(MJK.frame),"opacity:0;background-image:none;");
						MJK.frame += 1;
					}

				// actor joining to the inside of screen.
				} else {
					var delay = i*20;
					var firstMarginLeft = 0;
					var secondMarginLeft = 0;
					var charactorAc = MJK.$speak.attr("mjk-ch-action");
					if( i === 0 ) {
						firstMarginLeft = 0;
						if ( charactorAc === "left" ) {
							secondMarginLeft = -2;
						} else if ( charactorAc === "right" ) {
							secondMarginLeft = 2;
						}
					} else {
						if ( charactorAc === "left" ) {
							firstMarginLeft = -2;
						} else if ( charactorAc === "right" ) {
							firstMarginLeft = 2;
						}
						secondMarginLeft = 0;
					}
					if( pastPosition < nextPosition ) {
						MJK.$speakerFaceFront.attr("data-"+(MJK.frame),"opacity:1;");
						MJK.frame++;
						MJK.charbodies[nextPosition].attr("data-"+(MJK.frame+delay-13),"background-image:url("+url+");");
						MJK.charbodies[pastPosition].attr("data-"+(MJK.frame+delay),"opacity:1;"+(charactorAc?"margin-left:"+firstMarginLeft+"%;":""));
						MJK.charbodies[nextPosition].attr("data-"+(MJK.frame+delay),"opacity:0;"+(charactorAc?"margin-left:"+firstMarginLeft+"%;":""));
						MJK.$speakerFaceFront.attr("data-"+(MJK.frame),"opacity:0;background-image:url("+url+");");

						MJK.charbodies[pastPosition].attr("data-"+(MJK.frame+delay+10),"opacity:1;"+(charactorAc?"margin-left:"+secondMarginLeft+"%;":""));
						MJK.charbodies[nextPosition].attr("data-"+(MJK.frame+delay+10),"opacity:1;"+(charactorAc?"margin-left:"+secondMarginLeft+"%;":""));
						MJK.$speakerFaceFront.attr("data-"+(MJK.frame+delay+10),"opacity:1;");
						MJK.$speakerFaceBack.attr("data-"+(MJK.frame+delay+10),"background-image:url("+url+");");

						MJK.$speakerFaceFront.attr("data-"+(MJK.frame+delay+11),"opacity:0;background-image:none;");

						MJK.charbodies[pastPosition].attr("data-"+(MJK.frame+delay+11),"opacity:0;");
						MJK.frame += delay+14;

					// Change the actor's expression.
					} else {

						MJK.frame++;
						MJK.charbodies[nextPosition].attr("data-"+(MJK.frame+delay-13),"background-image:url("+url+");");
						MJK.charbodies[nextPosition].attr("data-"+(MJK.frame+delay),"opacity:0;");
						MJK.$speakerFaceFront.attr("data-"+(MJK.frame),"opacity:0;background-image:url("+url+");");

						MJK.charbodies[nextPosition].attr("data-"+(MJK.frame+delay+1),"opacity:1;"+(charactorAc?"margin-left:"+firstMarginLeft+"%;":""));
						MJK.charbodies[pastPosition].attr("data-"+(MJK.frame+delay+1),"opacity:1;"+(charactorAc?"margin-left:"+firstMarginLeft+"%;":""));
						MJK.$speakerFaceFront.attr("data-"+(MJK.frame+delay+10),"opacity:1;");
						MJK.$speakerFaceBack.attr("data-"+(MJK.frame+delay+10),"background-image:url("+url+");");

						MJK.$speakerFaceFront.attr("data-"+(MJK.frame+delay+11),"opacity:0;background-image:none;");

						MJK.charbodies[nextPosition].attr("data-"+(MJK.frame+delay+11),"opacity:1;"+(charactorAc?"margin-left:"+secondMarginLeft+"%;":""));
						MJK.charbodies[pastPosition].attr("data-"+(MJK.frame+delay+11),"opacity:0;"+(charactorAc?"margin-left:"+secondMarginLeft+"%;":""));
						MJK.frame += delay+14;
					}
					MJK.frame += (i===0)?20:20;
				}
				MJK.pushLoadResource(url);
				isFirstTime = false;
			}


			// Calculate move distance.
			var charactorAc = MJK.$speak.attr("mjk-ch-action");
			var attackAc = MJK.$speak.attr("mjk-attack-ch");
			var moveAc = MJK.$speak.attr("mjk-move-ch");
			var from, to;
			if( attackAc ) {
				var targetName = attackAc;
				for( var i=0 ; i<5 ; i++ ) {
					if( MJK.charspace[i] === targetName ) {
						to = i;
						MJK.charspace[i] = body;
						position = i;
					} else if( MJK.charspace[i] === body ) {
						from = i;
						MJK.charspace[i] = undefined;
					}
				}
			}
			if( moveAc ) {
				var way = moveAc;
				for( var i=0 ; i<5 ; i++ ) {
					if( MJK.charspace[i] === body ) {
						MJK.charspace[i] = undefined;
						from = i;
					}
				}
				if( way === "right" ) {
					if ( MJK.charspace[1] === undefined ) {
						MJK.charspace[1] = body;
						position = 1;
						to = 1;
					} else if ( MJK.charspace[3] === undefined ) {
						MJK.charspace[3] = body;
						position = 3;
						to = 3;
					}
				} else {
					if ( MJK.charspace[2] === undefined ) {
						MJK.charspace[2] = body;
						position = 2;
						to = 2;
					} else if ( MJK.charspace[4] === undefined ) {
						MJK.charspace[4] = body;
						position = 4;
						to = 4;
					}
				}
			}

			// Change camera position.
			var cameraFix = MJK.$speak.attr("mjk-camera");
			if( MJK.currentCamera !== position || cameraFix ) {
				var firstBg;
				var firstCh;
				var secondBg;
				var secondCh;
				if( MJK.widthLevel/MJK.heightLevel < 4/3 ) {
					firstBg  = MJK.moveBgMargin[MJK.currentCamera];
					firstCh  = MJK.moveChMargin[MJK.currentCamera];
					secondBg = MJK.moveBgMargin[position];
					secondCh = MJK.moveChMargin[position];
				} else {
					firstBg  = lastBg;
					firstCh  = lastCh;
					if( cameraFix ) {
						secondBg = MJK.moveBgMargin[position];
						secondCh = MJK.moveChMargin[position];
					} else {
						secondBg = (MJK.moveBgMargin[position]+MJK.moveBgMargin[MJK.currentCamera])/2;
						secondCh = (MJK.moveChMargin[position]+MJK.moveChMargin[MJK.currentCamera])/2;
					}
				}

				MJK.$bgImg.attr("data-"+beginFaceChange,"left[sin]:"+firstBg+"%;");
				MJK.$chl.attr("data-"+beginFaceChange,"left[sin]:"+firstCh+"px;");
				MJK.$bgImg.attr("data-"+(beginFaceChange+30),"left:"+secondBg+"%;");						
				MJK.$chl.attr("data-"+(beginFaceChange+30),"left:"+secondCh+"px;");


				lastBg = secondBg;
				lastCh = secondCh;

				MJK.currentCamera = position;

			}


			// The actor on inside of the screen attacks other actor.
			if( attackAc ) {
				var targetName = attackAc;
				var pastPosition = to+(MJK.charscreens[to]*5);
				MJK.charscreens[to] = MJK.charscreens[to]?0:1;
				var nextPosition = to+(MJK.charscreens[to]*5);
				var fromPx = MJK.charPxIntervals[from];
				var toPx   = MJK.charPxIntervals[to];
				MJK.charbodies[nextPosition].attr("data-"+(MJK.frame-13),"background-image:url("+url+");");
				MJK.charbodies[from+MJK.charscreens[from]*5].attr("data-"+(MJK.frame),"opacity:1;");
				MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"opacity:0;top:0%;left:"+fromPx+"px;");
				MJK.frame += 1;
				MJK.charbodies[from+MJK.charscreens[from]*5].attr("data-"+(MJK.frame),"opacity:0;");
				MJK.charbodies[pastPosition].attr("data-"+(MJK.frame),"opacity:1;left:"+toPx+"px;");
				MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"opacity:1;top:0%;left[cos]:"+fromPx+"px;");
				MJK.frame += 20;
				MJK.charbodies[pastPosition].attr("data-"+(MJK.frame),"opacity:1;left[sin]:"+toPx+"px;");
				MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"opacity:1;top:10%;left[cos]:"+toPx+"px;");
				MJK.frame += 20;
				if( toPx < fromPx ) {
					MJK.charbodies[pastPosition].attr("data-"+(MJK.frame),"opacity:1;left:"+(toPx-(fromPx-toPx)*2)+"px;");
				} else {
					MJK.charbodies[pastPosition].attr("data-"+(MJK.frame),"opacity:1;left:"+(toPx+(toPx-fromPx)*2)+"px;");
				}
				MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"top:0%;");
				MJK.frame += 1;
				MJK.charbodies[pastPosition].attr("data-"+(MJK.frame),"opacity:0;left:"+toPx+"px;");
				MJK.frame += 1;
				MJK.pushLoadResource(url);
			}
			// The actor on inside of the screen moves to other empty area.
			if( moveAc ) {
				var pastPosition = to+(MJK.charscreens[to]*5);
				MJK.charscreens[to] = MJK.charscreens[to]?0:1;
				var nextPosition = to+(MJK.charscreens[to]*5);
				var fromPx = MJK.charPxIntervals[from];
				var toPx   = MJK.charPxIntervals[to];
				MJK.charbodies[from+MJK.charscreens[from]*5].attr("data-"+(MJK.frame),"opacity:1;");
				MJK.charbodies[nextPosition].attr("data-"+(MJK.frame-13),"background-image:url("+url+");");
				MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"opacity:0;top:0%;left:"+fromPx+"px;");
				MJK.frame += 1;
				MJK.charbodies[from+MJK.charscreens[from]*5].attr("data-"+(MJK.frame),"opacity:0;");
				MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"opacity:1;top:0%;left[sin]:"+fromPx+"px;");
				MJK.frame += 40;
				MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"opacity:1;top:0%;left:"+toPx+"px;");
				MJK.charbodies[pastPosition].attr("data-"+(MJK.frame),"opacity:0;top:0%;left:"+toPx+"px;");
				MJK.frame += 1;
				MJK.pushLoadResource(url);
			}

			// Execute actor's action.
			if( charactorAc ) {
				MJK.frame +=1;
				// Change the actor's scale, looks very close to the camera.
				if ( charactorAc.indexOf("near") !== -1 ) {
					MJK.charbodies[pastPosition].attr("data-"+(MJK.frame),"z-index:"+(MJK.priority+1)+";");
					MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"z-index:"+(MJK.priority+1)+";");
					MJK.frame +=1;
					MJK.charbodies[pastPosition].attr("data-"+(MJK.frame),"transform:scale(1.0) rotate(0deg);margin-top[cos]:0%;z-index:"+(MJK.priority+2)+";");
					MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"transform:scale(1.0) rotate(0deg);margin-top[cos]:0%;z-index:"+(MJK.priority+2)+";");
					MJK.frame += 20;
					MJK.charbodies[pastPosition].attr("data-"+(MJK.frame),"transform:scale(1.4) rotate(0deg);margin-top:5%;");
					MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"transform:scale(1.4) rotate(0deg);margin-top:5%;");
					MJK.frame += 1;
					MJK.scaleList.push(position);							
				}
				MJK.generateChAction(MJK.charbodies[nextPosition]);

				// Move the actor a little bit, and touch other actor softly.
				if( charactorAc.indexOf("touch") !== -1 ) {
					var way = charactorAc.split(":")[1];
					var backPosition;
					if( 5 <= nextPosition ) {
						backPosition = nextPosition-5;
					} else {
						backPosition = nextPosition+5;
					}
					if( way === "right" ) {
						MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"margin-left:0%;");
						MJK.frame += 4;
						MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"margin-left:5%;");
						MJK.charbodies[MJK.rightList[backPosition]  ].attr("data-"+(MJK.frame),"margin-left:0%;");
						MJK.charbodies[MJK.rightList[backPosition]+5].attr("data-"+(MJK.frame),"margin-left:0%;");
						MJK.frame += 10;
						MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"margin-left:5%;");
						MJK.charbodies[MJK.rightList[backPosition]  ].attr("data-"+(MJK.frame),"margin-left:3%;");
						MJK.charbodies[MJK.rightList[backPosition]+5].attr("data-"+(MJK.frame),"margin-left:3%;");
						MJK.frame += 10;
						MJK.charbodies[MJK.rightList[backPosition]  ].attr("data-"+(MJK.frame),"margin-left:0%;");
						MJK.charbodies[MJK.rightList[backPosition]+5].attr("data-"+(MJK.frame),"margin-left:0%;");
						MJK.frame += 10;
						MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"margin-left:0%;");
					}	else if ( way === "left" ) {
						MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"margin-left:0%;");
						MJK.frame += 4;
						MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"margin-left:-5%;");
						MJK.charbodies[MJK.leftList[backPosition]  ].attr("data-"+(MJK.frame),"margin-left:0%;");
						MJK.charbodies[MJK.leftList[backPosition]+5].attr("data-"+(MJK.frame),"margin-left:0%;");
						MJK.frame += 10;
						MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"margin-left:-5%;");
						MJK.charbodies[MJK.leftList[backPosition]  ].attr("data-"+(MJK.frame),"margin-left:-3%;");
						MJK.charbodies[MJK.leftList[backPosition]+5].attr("data-"+(MJK.frame),"margin-left:-3%;");
						MJK.frame += 10;
						MJK.charbodies[MJK.leftList[backPosition]  ].attr("data-"+(MJK.frame),"margin-left:0%;");
						MJK.charbodies[MJK.leftList[backPosition]+5].attr("data-"+(MJK.frame),"margin-left:0%;");
						MJK.frame += 10;
						MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"margin-left:0%;");
					}						
				}
				// Move the actor, and attack other actor many times.
				if( charactorAc.indexOf("attack") !== -1 ||  charactorAc.indexOf("kick") !== -1  ) {
					var range;
					if( charactorAc.indexOf("attack") !== -1 ) {
						range = 8;
					} else {
						range = 12;						
					}
					var way = charactorAc.split(":")[1];
					var backPosition;
					if( 5 <= nextPosition ) {
						backPosition = nextPosition-5;
					} else {
						backPosition = nextPosition+5;
					}
					if( way === "right" ) {
						MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"margin-left:0%;");
						MJK.frame += 4;
						MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"margin-left:"+range+"%;");
						MJK.charbodies[MJK.rightList[backPosition]  ].attr("data-"+(MJK.frame),"margin-left:0%;");
						MJK.charbodies[MJK.rightList[backPosition]+5].attr("data-"+(MJK.frame),"margin-left:0%;");
						MJK.frame += 4;
						MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"margin-left:"+range+"%;");
						MJK.charbodies[MJK.rightList[backPosition]  ].attr("data-"+(MJK.frame),"margin-left:"+range+"%;");
						MJK.charbodies[MJK.rightList[backPosition]+5].attr("data-"+(MJK.frame),"margin-left:"+range+"%;");
						MJK.frame += 10;
						MJK.charbodies[MJK.rightList[backPosition]  ].attr("data-"+(MJK.frame),"margin-left:0%;");
						MJK.charbodies[MJK.rightList[backPosition]+5].attr("data-"+(MJK.frame),"margin-left:0%;");
						MJK.frame += 10;
						MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"margin-left:0%;");
						MJK.frame += 4;
						MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"margin-left:"+range+"%;");
						MJK.charbodies[MJK.rightList[backPosition]  ].attr("data-"+(MJK.frame),"margin-left:0%;");
						MJK.charbodies[MJK.rightList[backPosition]+5].attr("data-"+(MJK.frame),"margin-left:0%;");
						MJK.frame += 4;
						MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"margin-left:"+range+"%;");
						MJK.charbodies[MJK.rightList[backPosition]  ].attr("data-"+(MJK.frame),"margin-left:"+range+"%;");
						MJK.charbodies[MJK.rightList[backPosition]+5].attr("data-"+(MJK.frame),"margin-left:"+range+"%;");
						MJK.frame += 10;
						MJK.charbodies[MJK.rightList[backPosition]  ].attr("data-"+(MJK.frame),"margin-left:0%;");
						MJK.charbodies[MJK.rightList[backPosition]+5].attr("data-"+(MJK.frame),"margin-left:0%;");
						MJK.frame += 10;
						MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"margin-left:0%;");
					}	else if ( way === "left" ) {
						MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"margin-left:0%;");
						MJK.frame += 4;
						MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"margin-left:-"+range+"%;");
						MJK.charbodies[MJK.leftList[backPosition]  ].attr("data-"+(MJK.frame),"margin-left:0%;");
						MJK.charbodies[MJK.leftList[backPosition]+5].attr("data-"+(MJK.frame),"margin-left:0%;");
						MJK.frame += 4;
						MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"margin-left:-"+range+"%;");
						MJK.charbodies[MJK.leftList[backPosition]  ].attr("data-"+(MJK.frame),"margin-left:-"+range+"%;");
						MJK.charbodies[MJK.leftList[backPosition]+5].attr("data-"+(MJK.frame),"margin-left:-"+range+"%;");
						MJK.frame += 10;
						MJK.charbodies[MJK.leftList[backPosition]  ].attr("data-"+(MJK.frame),"margin-left:0%;");
						MJK.charbodies[MJK.leftList[backPosition]+5].attr("data-"+(MJK.frame),"margin-left:0%;");
						MJK.frame += 10;
						MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"margin-left:0%;");
						MJK.frame += 4;
						MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"margin-left:-"+range+"%;");
						MJK.charbodies[MJK.leftList[backPosition]  ].attr("data-"+(MJK.frame),"margin-left:0%;");
						MJK.charbodies[MJK.leftList[backPosition]+5].attr("data-"+(MJK.frame),"margin-left:0%;");
						MJK.frame += 4;
						MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"margin-left:-"+range+"%;");
						MJK.charbodies[MJK.leftList[backPosition]  ].attr("data-"+(MJK.frame),"margin-left:-"+range+"%;");
						MJK.charbodies[MJK.leftList[backPosition]+5].attr("data-"+(MJK.frame),"margin-left:-"+range+"%;");
						MJK.frame += 10;
						MJK.charbodies[MJK.leftList[backPosition]  ].attr("data-"+(MJK.frame),"margin-left:0%;");
						MJK.charbodies[MJK.leftList[backPosition]+5].attr("data-"+(MJK.frame),"margin-left:0%;");
						MJK.frame += 10;
						MJK.charbodies[nextPosition].attr("data-"+(MJK.frame),"margin-left:0%;");
					}						
				}
			}
		// Change the actor's expression at the message window.
		} else if ( MJK.$speak.attr("mjk-ch-faceonly") ) {
			var faceonly = MJK.$speak.attr("mjk-ch-faceonly");
			var body = faceonly.split("/")[0];
			var faces = faceonly.split("/")[1];
			var faceList = faces.split(";");
			for( var i=0 ; i<faceList.length ; i++ ) {
				var url = MJK.chPref+body+"/"+faceList[i]+MJK.chPost;
				MJK.$speakerFaceFront.attr("data-"+(MJK.frame),"opacity:0;background-image:url("+url+");");
				MJK.$speakerFaceFront.attr("data-"+(MJK.frame+10),"opacity:1;");
				MJK.$speakerFaceBack.attr("data-"+(MJK.frame+10),"background-image:url("+url+");");
				MJK.$speakerFaceFront.attr("data-"+(MJK.frame+11),"opacity:0;background-image:none;");
				MJK.frame += 40;
				MJK.pushLoadResource(url);
			}

		// If there are no actor's action.
		} else {
			MJK.$speakerFaceBack.attr("data-"+(MJK.frame-5),"opacity:1;");
			MJK.frame++;
			MJK.$speakerFaceBack.attr("data-"+(MJK.frame-5),"background-image:none;");
			MJK.frame++;
		}

		/* ToDo: This feature will move to external plugin and be removed from engine core. */
		// Background action.
		if( MJK.$speak.attr("mjk-bg-action") ) {

			// shake action.
			if ( MJK.$speak.attr("mjk-bg-action").indexOf("shake") !== -1 ) {
				MJK.$bg.attr("data-"+(MJK.frame+2),"margin-top:0%;");
				MJK.$bg.attr("data-"+(MJK.frame+3),"margin-top[WTF]:-5%;");
				MJK.$bg.attr("data-"+(MJK.frame+200),"margin-top:5%;");
				MJK.$bg.attr("data-"+(MJK.frame+201),"margin-top:0%;");
				MJK.frame += 202;
			}

			// wave action.
			if ( MJK.$speak.attr("mjk-bg-action").indexOf("wave") !== -1 ) {
				MJK.$bg.attr("data-"+(MJK.frame+2),"margin-top:0%;");
				MJK.$bg.attr("data-"+(MJK.frame+3),"margin-top[WTF]:-5%;");
				MJK.$bg.attr("data-"+(MJK.frame+40),"margin-top:5%;");
				MJK.$bg.attr("data-"+(MJK.frame+41),"margin-top:0%;");
				MJK.frame += 42;
			}
			// wobble action.
			if ( MJK.$speak.attr("mjk-bg-action").indexOf("wobble") !== -1 ) {
				MJK.$bg.attr("data-"+(MJK.frame+2),"margin-top:0%;");
				MJK.$bg.attr("data-"+(MJK.frame+3),"margin-top[WTF]:-2%;");
				MJK.$bg.attr("data-"+(MJK.frame+20),"margin-top:2%;");
				MJK.$bg.attr("data-"+(MJK.frame+21),"margin-top:0%;");
				MJK.frame += 22;
			}
		}

		// Effect action
		var ef = MJK.$speak.attr("mjk-ef");
		if( ef && ef.indexOf("fallingItems:") !== -1 ) {
			var pict = ef.split(":")[1];
			pict = MJK.efPref+pict+MJK.efPost;
			for( var i=0 ; i<20 ; i++ ) {
				var $item = $(document.createElement("DIV"));
				var x = parseInt(Math.random()*90);
				var mar = parseInt(Math.random()*240);
				var rotateBegin = parseInt(Math.random()*720)-360;
				var rotateEnd = parseInt(Math.random()*720)-360;
				$item.css("position","absolute");
				$item.css("width","20%");
				$item.css("height","20%");
				$item.css("background-size","contain");
				$item.css("background-repeat","no-repeat");
				$item.css("background-position","center center");
				$item.css("background-image","url("+pict+")");
				$item.css("left",x+"%");
				$item.attr("data-"+(MJK.frame),"top:-20%;display:none;");
				$item.attr("data-"+(MJK.frame+1),"display:block;transform:rotate("+rotateBegin+"deg);");
				$item.attr("data-"+(MJK.frame+120+mar),"top:100%;transform:rotate("+rotateEnd+"deg);");
				$item.attr("data-"+(MJK.frame+121+mar),"display:none;");
				MJK.$bg.append($item);
			}
			MJK.frame += 362;
			MJK.pushLoadResource(pict);
		}

		// Write a senario stoping point.
		MJK.checkPointList.push(MJK.frame);
		MJK.$speak.attr("frame",MJK.frame);

		// Show Choices View
		var condition = MJK.$speak.attr("mjk-condition");
		if( condition ) {
			$(condition).attr("data-"+(MJK.frame-3),"display:none;");
			$(condition).attr("data-"+(MJK.frame-2),"display:block;");
			$(condition).attr("data-"+(MJK.frame+1),"display:block;");
			$(condition).attr("data-"+(MJK.frame+2),"display:none;");
			var $pad = $(document.createElement("P"));
			$pad.addClass("addElem");
			$pad.attr("mjk-dont-go","true");
			$pad.attr("id","line-"+MJK.lineNo);
			MJK.lineNo++;
			MJK.$speak.after($pad);

			// Write a senario stoping point.
			MJK.frame += 1;
			MJK.checkPointList.push(MJK.frame);
			$pad.attr("frame",MJK.frame);
		}

		// Update "Goto Label"
		var gotolabel = MJK.$speak.attr("mjk-label");
		if( gotolabel ) {
			MJK.gotoLabelList[gotolabel] = MJK.checkPointList.length-1;
		}

		// Drop speaking message.
		MJK.lastSpeakFrame = MJK.frame;
		MJK.$speak.attr("data-"+(MJK.frame),"display:block;");
		MJK.frame+=1;
		MJK.$speak.attr("data-"+(MJK.frame),"display:none;");
		MJK.frame+=1;

		MJK.$lastSpeak = MJK.$speak;
  },

  /* -- Generate plugin's background action. -- */
  generateBgAction : function() {
		var callback = function(count,css) { MJK.$effect.attr("data-"+(MJK.frame+count),css); };
		var bgActionStr = MJK.$speak.attr("mjk-bg-action");
		for( bgActionName in MJK.beginedBgActions ) {
			if( !bgActionStr || bgActionStr.indexOf(bgActionName) === -1 ) {
				var obj = MJK.bgActions[bgActionName];
				if( obj && typeof obj["end"] === "function" ) {
					MJK.frame += obj["end"](callback);
				}
				delete MJK.beginedBgActions[bgActionName];
			}
		}
  	if( bgActionStr ) {
  		for( bgActionName in MJK.bgActions ) {
  			if( bgActionStr.indexOf(bgActionName) !== -1 && !MJK.beginedBgActions[bgActionName] ) {
  				var obj = MJK.bgActions[bgActionName];
  				if( obj ) {
  					if( typeof obj === "number" ) {
  						MJK.frame += obj;
						} else if( typeof obj === "function" ) {
							MJK.frame += obj(callback);
						} else if( typeof obj["begin"] === "function" ) {
							MJK.frame += obj["begin"](callback);
						}
						MJK.beginedBgActions[bgActionName] = true;
					}
  			}
  		}
  	}
  },

  /* -- Generate plugin's actor's action. -- */
  generateChAction : function($target) {
		MJK.frame += 1;
		var callback = function(count,css) { $target.attr("data-"+(MJK.frame+count),css); };
		var chActionStr = MJK.$speak.attr("mjk-ch-action");
  	if( chActionStr ) { 

			// カスタム動作
  		for( chActionName in MJK.chActions ) {
  			if( chActionStr.indexOf(chActionName) !== -1 ) {
  				var obj = MJK.chActions[chActionName];
  				if( obj ) {
  					if( typeof obj === "function" ) {
							MJK.frame += obj(callback);
						} else if( typeof obj === "number" ) {
  						MJK.frame += obj;
						}
						MJK.frame++;
						MJK.beginedChActions[chActionName] = true;
					}
  			}
  		}
  	}
  },

};


/* ************************************************************
 * mojiko-config : Show Config/Menu View and manage player-customed parametars.
 */
var MJK_CNF = {

	// Is the menu view showing or not.
	isMenuPageOpen : false,

	// The root jQuery element of menu view.
	$root : null,  // private

	// Initialize configuraten function.
	//  -> Load params and make the menu view invisible and wrap screen.
	init : function() {
	
		var $body = $("body");

		if( $("article").length !== 0 ) {

			// create menu view generating button.
			var $menuButton = MJK_UI.createFowardingMenuPageButton(0,0);
			$menuButton.click(MJK_CNF.switchMenuPageOpenState);
			$body.append($menuButton);

			// create side menu buttons.
			if( MJK_DEV.isDesktop ) {
				var $sideMenuButtons = MJK_UI.createSideMenuButtons(50,93);
				$body.append($sideMenuButtons);
			}

		}
		var name = MJK_DB.getFilename();
		MJK_CNF.isToppage = (name === "" || name === "index.html");

		// create menu view.
		MJK_CNF.$root = MJK_UI.createMenuPageRoot();
		$body.append(MJK_CNF.$root);
	
	},

	// Opening/Closing Menu view action.
	switchMenuPageOpenState : function() { // private
		if( MJK_CNF.isMenuPageOpen ) {
			logger("メニュー・コンフィグ画面の終了");
			MJK_CNF.$root.slideUp(300,function(){
				MJK_CNF.$root.children().empty();
			});
			MJK_CNF.isMenuPageOpen = false;
		} else {
			logger("メニュー・コンフィグ画面の起動");
			MJK_CNF.$root.slideDown(300,MJK_CNF.showMenuTopPage);
			MJK_CNF.isMenuPageOpen = true;
		}
	},

	// Switch the menu sub view. (seems like forwarding.)
	switchFoward : function($nextPage) {
		var entry = function(){
			MJK_CNF.$root.scrollTop(0,0);
			$nextPage.css("left","50%");
			$nextPage.css("opacity","0");
			$nextPage.css("display","block");
			MJK_CNF.$root.append($nextPage);
			$nextPage.animate({opacity:"1"},200);
		}
		if( MJK_CNF.$root.children().length ) {
			MJK_CNF.$root.children().animate({opacity:"0"},200,
			function(){
				MJK_CNF.$root.empty();
				entry();
			});
		} else {
			entry();
		}
	},

	// Show "Menu Top Page"
	showMenuTopPage : function() {
		var $page = MJK_UI.createPage(MJK_TEXT.menu);
		/* MJK_DEV.isMobile && $page.append(MJK_UI.createPageItem("クイック・セーブ", function(){
			MJK_UI.yesOrNo("クイック・セーブしますか？", function(){
				MJK_DB.storeCurrentSaveState();
				MJK_CNF.showMenuTopPage();
			});
		})); */
		MJK_DEV.isDesktop && $page.append(MJK_UI.createPageItem(MJK_TEXT.quickLoad,
			MJK_DB.getSaveState().hasData ? function(){
				MJK_UI.yesOrNo(MJK_TEXT.askQuickLoad,function(){
					MJK_DB.reflectSaveState();
					MJK_CNF.switchMenuPageOpenState();
				});
			} : undefined )
		);
		! MJK_CNF.isToppage && $page.append(MJK_UI.createPageItem(MJK_TEXT.save,MJK_CNF.showSavePage));
		! MJK_CNF.isToppage && $page.append(MJK_UI.createPageItem(MJK_TEXT.load,MJK_CNF.showLoadPage));
		MJK_DEV.isDesktop && $page.append(MJK_UI.createPageItem(MJK_TEXT.config,MJK_CNF.showConfigPage));
		// MJK_DEV.isDesktop && $page.append(MJK_UI.createPageItem("フルスクリーン切替",MJK_DEV.switchFullScreen));
		! MJK_CNF.isToppage && $page.append(MJK_UI.createPageItem(MJK_TEXT.doReturn,function(){
			MJK_UI.yesOrNo(MJK_TEXT.askWantToTitle,function(){
				MJK_CNF.switchMenuPageOpenState();
				$("article").fadeOut(1000,function(){
					location.href="index.html";
				});
			});
		}));
		$page.append(MJK_UI.createReturnPageItem(MJK_TEXT.closeMenu,MJK_CNF.switchMenuPageOpenState));
		MJK_CNF.switchFoward($page);
	},

	// Top page or not?
	isToppage : true,

	// Show "Save Page"
	showSavePage : function() {
		var $page = MJK_UI.createPage(MJK_TEXT.save);
		var $scrollBox = MJK_UI.createScrollBox();
		for( var i=1 ; i<=MJK_DB.SAVE_COUNT ; i++ ) {
			var state = MJK_DB.getSaveState(i);
			var $b;
			if( state.hasData ) {
				$b = MJK_UI.createPageItem(i+". "+state.date+" "+state.title,function(){
					var selectNo = parseInt($(this).attr("save-no"));
					MJK_UI.yesOrNo(MJK_TEXT.askOverride,function(){
						MJK_DB.storeCurrentSaveState(selectNo);
						MJK_CNF.showSavePage();
					});
				});
			} else {
				$b = MJK_UI.createPageItem(i+". "+state.date+" "+state.title,function(){
					var selectNo = parseInt($(this).attr("save-no"));
					MJK_UI.yesOrNo(MJK_TEXT.askSave,function(){
						MJK_DB.storeCurrentSaveState(selectNo);
						MJK_CNF.showSavePage();
					});
				});
			}
			$b.attr("save-no",+i);
			$scrollBox.append($b);
		}
		$page.append($scrollBox);
		$page.append(MJK_UI.createReturnPageItem(MJK_TEXT.back,MJK_CNF.showMenuTopPage));
		MJK_CNF.switchFoward($page);
	},

	// Show "Load Page"
	showLoadPage : function() {
		var $page = MJK_UI.createPage(MJK_TEXT.load);
		var $scrollBox = MJK_UI.createScrollBox();
		for( var i=1 ; i<=MJK_DB.SAVE_COUNT ; i++ ) {
			var state = MJK_DB.getSaveState(i);
			var $b;
			if( state.hasData ) {
				$b = MJK_UI.createPageItem(i+". "+state.date+" "+state.title,function(){
					var selectNo = parseInt($(this).attr("save-no"));
					MJK_UI.yesOrNo(MJK_TEXT.doYouWantLoadSaveData,function(){
						MJK_DB.reflectSaveState(selectNo);
						MJK_CNF.switchMenuPageOpenState();
					});
				});
			} else {
				$b = MJK_UI.createPageItem(i+". "+state.date+" "+state.title);
			}
			$b.attr("save-no",i);
			$scrollBox.append($b);
		}
		$page.append($scrollBox);
		$page.append(MJK_UI.createReturnPageItem(MJK_TEXT.back,MJK_CNF.showMenuTopPage));
		MJK_CNF.switchFoward($page);
	},

	// Show "Config Page"
	showConfigPage : function() {
		var $page = MJK_UI.createPage(MJK_TEXT.config);
		$page.addClass("configWindow");
		$page.append(MJK_UI.createPageItem(MJK_TEXT.system,MJK_CNF.showSystemConfigPage));
		MJK_DEV.isDesktop && $page.append(MJK_UI.createPageItem(MJK_TEXT.sound,MJK_CNF.showSoundConfigPage));
		$page.append(MJK_UI.createPageItem(MJK_TEXT.init,function(){
			MJK_UI.yesOrNo(MJK_TEXT.askDropSaveConfig,function(){
				mjkStorage.clear();
				MJK_CNF.switchMenuPageOpenState();
				$("article").fadeOut(1000,function(){
					location.href="index.html";
				});
			});
		}));
		$page.append(MJK_UI.createReturnPageItem(MJK_TEXT.back,MJK_CNF.showMenuTopPage));
		MJK_CNF.switchFoward($page);
	},

	// Show "Sound Config Page"
	showSoundConfigPage : function() {
		var $page = MJK_UI.createPage(MJK_TEXT.sound);
		$page.append(MJK_UI.createMeter(MJK_TEXT.masterVolume,MJK.setMasterVolume,MJK_AUDIO.volume));
		$page.append(MJK_UI.createMeter(MJK_TEXT.bgmVolume,MJK.setBgmVolume,MJK_AUDIO.bgm.volume));
		$page.append(MJK_UI.createMeter(MJK_TEXT.seVolume,MJK.setSeVolume,MJK_AUDIO.se.volume));
		$page.append(MJK_UI.createMeter(MJK_TEXT.voiceVolume,MJK.setVoiceVolume,MJK_AUDIO.voice.volume));
		// $page.append(MJK_UI.createMeter(MJK_TEXT.movieVolume,MJK.setMovieVolume,MJK.movieVolume));
		$page.append(MJK_UI.createMeter(MJK_TEXT.loopSeVolume,MJK.setLoopSeVolume,MJK_AUDIO.loopSe.volume));
		$page.append(MJK_UI.createPageItem(MJK_TEXT.eachActorsVolume,MJK_CNF.showCharactorsSoundConfigPage));
		$page.append(MJK_UI.createReturnPageItem(MJK_TEXT.back,MJK_CNF.showConfigPage));
		MJK_CNF.switchFoward($page);
	},

	// Show "Sound Config for each actors page"
	showCharactorsSoundConfigPage : function() {
		var $page = MJK_UI.createPage(MJK_TEXT.eachActorsVolume);
		$(".charactors>li").each(function(){
			var $this = $(this);
			var id   = $this.attr("mjk-id");
			var name = $this.text();
			var $b = MJK_UI.createMeter(name,MJK.setVoiceVolumeFor,MJK.getVoiceVolumeFor(id),'"'+id+'"');
			$b.attr("id",id);
			$page.append($b);
		});
		$page.append(MJK_UI.createReturnPageItem(MJK_TEXT.back,MJK_CNF.showSoundConfigPage));
		MJK_CNF.switchFoward($page);		
	},

	// Show "System Config".
	showSystemConfigPage : function() {
		var $page = MJK_UI.createPage(MJK_TEXT.system);
		$page.append(MJK_UI.createMeter(MJK_TEXT.messageSpeed,MJK.setSpeakSpeed,MJK.speakSpeed));
		$page.append(MJK_UI.createMeter(MJK_TEXT.autoPlaySpeed, MJK.setAutoSpeed, MJK.autoSpeed));
		$page.append(MJK_UI.createMeter(MJK_TEXT.windowOpacity, MJK.setWindowOpacity, MJK.windowOpacity));
		$page.append(MJK_UI.createMeter(MJK_TEXT.productionSpeed, MJK.setDirectionSpeed, MJK.directionSpeed));
		$page.append(MJK_UI.createToggle(MJK_TEXT.skipRead, MJK.setSkipOnlyRead, MJK.skipOnlyRead));
		$page.append(MJK_UI.createReturnPageItem(MJK_TEXT.back,MJK_CNF.showConfigPage));

		var $sample = $(document.createElement("DIV"));
		$sample.addClass("speakwindow");
		$sample.attr("id","messageSample");
		$sample.attr("speak",MJK_TEXT.messageSampleText);
		$page.append($sample);

		MJK_CNF.switchFoward($page);
	},

};
/* ************************************************************
 * mojiko-audio : Manage sound(Load/Playing/Pause)
 */
var MJK_AUDIO = {
	context : null,
	init : function(){

		// Set temporary object.
		MJK_AUDIO.setVolume = function() {};
		var empty = {play:function(){},stop:function(){},setVolume:function(){},refleshVolume:function(){}};
		MJK_AUDIO.bgm    = empty;
		MJK_AUDIO.se     = empty;
		MJK_AUDIO.voice  = empty;
		MJK_AUDIO.loopSe = empty;

		// Initialize primary buffer.
		window.AudioContext = window.AudioContext || window.webkitAudioContext;
		if(! window.AudioContext ) {
			console.log("Web Audio is unsupported :(");
			return false;
		}
		MJK_AUDIO.context = new AudioContext();
		MJK_AUDIO.volume  = 100.0;
		MJK_AUDIO.setVolume = function(value) {
			MJK_AUDIO.volume=value;
			MJK_AUDIO.bgm.refleshVolume();
		};
		MJK_AUDIO.bgm     = new MJK_AUDIO.Player(true);
		MJK_AUDIO.se      = new MJK_AUDIO.Player(false);
		MJK_AUDIO.voice   = new MJK_AUDIO.Player(false);
		MJK_AUDIO.loopSe  = new MJK_AUDIO.Player(true);
		return true;
	},

	// Generate secondary buffer.
	Player : function(hasLoop) {
		var self = this;
		self.context = null;
		self.volume = 50;
		self.loop = hasLoop;
  		self.setVolume = function(value) { self.volume = value; };
		self.stop = function(){
			if( self.source ) {
				self.source.stop(0);
			}
			if( self.xhr ) {
				self.xhr.onload = function() {};
				self.xhr = undefined;
			}
			self.setVolume = function(value) { self.volume = value; };
			self.source = undefined;
		};
		self.refleshVolume = function(){};
		self.play = (!window.AudioContext)?function(){}:function(url,volume) {
			self.beginTime = (new Date()).getTime();
			self.url = url;
			if( volume !== undefined ) {
				self.attrVolume = volume;
			}
			self.stop();
			self.xhr = new XMLHttpRequest();
			self.xhr.open('GET', url);
			self.xhr.responseType = 'arraybuffer';
			self.xhr.onload = function() {
				if (self.xhr.status === 200 || self.xhr.status === 0) {
					self.xhrTime = (new Date()).getTime();
					var arrayBuffer = self.xhr.response;
					if (arrayBuffer instanceof ArrayBuffer) {
						MJK_AUDIO.context.decodeAudioData(arrayBuffer,
							function(audioBuffer) {
								self.playing = true;
								// initialize secondary buffers.
								self.source = MJK_AUDIO.context.createBufferSource();
								self.source.buffer             = audioBuffer;
								self.source.loop               = self.loop;
								self.source.loopStart          = 0;
								self.source.loopEnd            = audioBuffer.duration;
								// initialize gane nodes.
								self.gainNode = MJK_AUDIO.context.createGain();
								if( self.attrVolume !== undefined ) {
									self.gainNode.gain.value = (MJK_AUDIO.volume*self.attrVolume*self.volume*0.000002)-1;
									self.attrVolume = undefined;
								} else {
									self.gainNode.gain.value = (MJK_AUDIO.volume*self.volume*0.0002)-1;
								}
								// connect each nodes.
								self.source.connect(self.gainNode);
								self.source.connect(MJK_AUDIO.context.destination);
								self.gainNode.connect(MJK_AUDIO.context.destination);

								// Round legacy spec.
								self.source.start = self.source.start || self.source.noteOn;
								self.source.stop  = self.source.stop  || self.source.noteOff;

								// Start playing.
								self.source.start(0);
								console.log("Play audio for "+self.url+" > total:"+((new Date()).getTime()-self.beginTime)+", xhr:"+((new Date()).getTime()-self.beginTime) );

								self.setVolume = function(value) {
									self.volume = value;
									self.gainNode.gain.value = (MJK_AUDIO.volume*self.volume*0.0002)-1;
								};
								self.refleshVolume = function(value) {
									self.gainNode.gain.value = (MJK_AUDIO.volume*self.volume*0.0002)-1;
								};
								self.source.onended = function(event) {
									self.playing = false;
								};
							}, function() {
								console.log("It can't decode! This platform does not support this format.");
							}
						);
					}

				}
			};
			self.xhr.send(null);
		};
	}
};

$(document).ready(function(){setTimeout(function(){

	console.log("============================================================================");
	console.log("　     .∧__._∧、");
	console.log("　    /   ~ ~ ~  `");
	console.log('　   / ノノノノVvヘヘヘ"');
	console.log("　   |!V * ^ w ^*ノ ");
	console.log("　~ Mojikoon Web ver." + mjkBaseEnginVersion + " ~");
	console.log("　Copyright(C) 2012,2014,2015 Queue Sakura-Shiki All Rights Reserved.");
	console.log("============================================================================");

	console.log("User Agent :" +navigator.userAgent);

	/* ************************************************************
	 * Initialize All Engine Modules.
	 */
	logger("Start mojiko UI");
	MJK_UI.init();
	logger("Finish mojiko UI");

	logger("Start mojiko Device");
	MJK_DEV.init();
	logger("Finish mojiko Device");

	logger("Start mojiko Database");
	MJK_DB.init();
	logger("Finish mojiko Database");

	logger("Start mojiko Audio");
	MJK_AUDIO.init();
	logger("Finish mojiko Audio");

	logger("Start mojiko Main");
	MJK.init(gameBegin?gameBegin:function(){});
	logger("Finish mojiko Main");

	logger("Start mojiko Configure");
	MJK_CNF.init();
	logger("Finish mojiko Configure");

	/* ************************************************************
	 * iPhone/iPad Bug fix
	 */
	(function( userAgent, $lines, $window, logger ){

		logger("Begin iOS bug fix");

		// iPhone landscape.
		var chackLandscape = function() {
			// iOS Ruby bug fix
			if(Math.abs(window.orientation) === 90){
				// Delete ruby.
				$lines.find("rp").text("");
				$lines.find("rt").text("");
				$lines.each(function(){
					$(this).text($(this).text());
				});
				// Fouce font size
				$lines.css("font-size","16px");
			}else{
				$lines.css("font-size","inherit");
			}
		};
		if( userAgent.match(/iPhone/i) ) {
			$window.bind("orientationchange",chackLandscape);
			MJK.ajastSize();
			chackLandscape();
		}

		// iPhone4+ minimal-ui Bug fix
		if( userAgent.match(/iPad|iPhone/i) ) {
			if( mjkStorage.getItem("access") !== "already" ) {
				mjkStorage.setItem("access", "already");
				location.reload();
			}
		}
		// iPhone Landscape Bug
		if( userAgent.match(/iPad;.*CPU.*OS 7_/i) ){
			var fixViewportHeight = function() {
				document.body.style.height = "100%";
				if (window.innerHeight != window.outerHeight) {
					document.body.style.height = window.innerHeight + "px";
					window.scrollTo(0, 0);
				}
			};
			window.addEventListener("orientationchange", fixViewportHeight, false);
			fixViewportHeight();
		}

		logger("Finish iOS bug fix");

	})( navigator.userAgent, $("section>p"), $(window), logger );

},50);});

