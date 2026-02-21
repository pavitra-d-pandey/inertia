function p_(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function m_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Jm={exports:{}},Hl={},eg={exports:{}},Be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var za=Symbol.for("react.element"),g_=Symbol.for("react.portal"),v_=Symbol.for("react.fragment"),__=Symbol.for("react.strict_mode"),x_=Symbol.for("react.profiler"),y_=Symbol.for("react.provider"),S_=Symbol.for("react.context"),M_=Symbol.for("react.forward_ref"),E_=Symbol.for("react.suspense"),w_=Symbol.for("react.memo"),T_=Symbol.for("react.lazy"),vf=Symbol.iterator;function C_(t){return t===null||typeof t!="object"?null:(t=vf&&t[vf]||t["@@iterator"],typeof t=="function"?t:null)}var tg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ng=Object.assign,ig={};function Is(t,e,n){this.props=t,this.context=e,this.refs=ig,this.updater=n||tg}Is.prototype.isReactComponent={};Is.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Is.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function rg(){}rg.prototype=Is.prototype;function Jd(t,e,n){this.props=t,this.context=e,this.refs=ig,this.updater=n||tg}var eh=Jd.prototype=new rg;eh.constructor=Jd;ng(eh,Is.prototype);eh.isPureReactComponent=!0;var _f=Array.isArray,sg=Object.prototype.hasOwnProperty,th={current:null},ag={key:!0,ref:!0,__self:!0,__source:!0};function og(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)sg.call(e,i)&&!ag.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:za,type:t,key:s,ref:a,props:r,_owner:th.current}}function A_(t,e){return{$$typeof:za,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function nh(t){return typeof t=="object"&&t!==null&&t.$$typeof===za}function R_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var xf=/\/+/g;function pc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?R_(""+t.key):e.toString(36)}function jo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case za:case g_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+pc(a,0):i,_f(r)?(n="",t!=null&&(n=t.replace(xf,"$&/")+"/"),jo(r,e,n,"",function(c){return c})):r!=null&&(nh(r)&&(r=A_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(xf,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",_f(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+pc(s,o);a+=jo(s,e,n,l,r)}else if(l=C_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+pc(s,o++),a+=jo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function to(t,e,n){if(t==null)return t;var i=[],r=0;return jo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function b_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qt={current:null},Wo={transition:null},P_={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:Wo,ReactCurrentOwner:th};function lg(){throw Error("act(...) is not supported in production builds of React.")}Be.Children={map:to,forEach:function(t,e,n){to(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return to(t,function(){e++}),e},toArray:function(t){return to(t,function(e){return e})||[]},only:function(t){if(!nh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Be.Component=Is;Be.Fragment=v_;Be.Profiler=x_;Be.PureComponent=Jd;Be.StrictMode=__;Be.Suspense=E_;Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P_;Be.act=lg;Be.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=ng({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=th.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)sg.call(e,l)&&!ag.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:za,type:t.type,key:r,ref:s,props:i,_owner:a}};Be.createContext=function(t){return t={$$typeof:S_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:y_,_context:t},t.Consumer=t};Be.createElement=og;Be.createFactory=function(t){var e=og.bind(null,t);return e.type=t,e};Be.createRef=function(){return{current:null}};Be.forwardRef=function(t){return{$$typeof:M_,render:t}};Be.isValidElement=nh;Be.lazy=function(t){return{$$typeof:T_,_payload:{_status:-1,_result:t},_init:b_}};Be.memo=function(t,e){return{$$typeof:w_,type:t,compare:e===void 0?null:e}};Be.startTransition=function(t){var e=Wo.transition;Wo.transition={};try{t()}finally{Wo.transition=e}};Be.unstable_act=lg;Be.useCallback=function(t,e){return qt.current.useCallback(t,e)};Be.useContext=function(t){return qt.current.useContext(t)};Be.useDebugValue=function(){};Be.useDeferredValue=function(t){return qt.current.useDeferredValue(t)};Be.useEffect=function(t,e){return qt.current.useEffect(t,e)};Be.useId=function(){return qt.current.useId()};Be.useImperativeHandle=function(t,e,n){return qt.current.useImperativeHandle(t,e,n)};Be.useInsertionEffect=function(t,e){return qt.current.useInsertionEffect(t,e)};Be.useLayoutEffect=function(t,e){return qt.current.useLayoutEffect(t,e)};Be.useMemo=function(t,e){return qt.current.useMemo(t,e)};Be.useReducer=function(t,e,n){return qt.current.useReducer(t,e,n)};Be.useRef=function(t){return qt.current.useRef(t)};Be.useState=function(t){return qt.current.useState(t)};Be.useSyncExternalStore=function(t,e,n){return qt.current.useSyncExternalStore(t,e,n)};Be.useTransition=function(){return qt.current.useTransition()};Be.version="18.3.1";eg.exports=Be;var O=eg.exports;const cg=m_(O),N_=p_({__proto__:null,default:cg},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L_=O,D_=Symbol.for("react.element"),U_=Symbol.for("react.fragment"),I_=Object.prototype.hasOwnProperty,F_=L_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O_={key:!0,ref:!0,__self:!0,__source:!0};function ug(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)I_.call(e,i)&&!O_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:D_,type:t,key:s,ref:a,props:r,_owner:F_.current}}Hl.Fragment=U_;Hl.jsx=ug;Hl.jsxs=ug;Jm.exports=Hl;var p=Jm.exports,yu={},dg={exports:{}},pn={},hg={exports:{}},fg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,K){var Q=D.length;D.push(K);e:for(;0<Q;){var se=Q-1>>>1,xe=D[se];if(0<r(xe,K))D[se]=K,D[Q]=xe,Q=se;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var K=D[0],Q=D.pop();if(Q!==K){D[0]=Q;e:for(var se=0,xe=D.length,ue=xe>>>1;se<ue;){var B=2*(se+1)-1,Y=D[B],ne=B+1,ae=D[ne];if(0>r(Y,Q))ne<xe&&0>r(ae,Y)?(D[se]=ae,D[ne]=Q,se=ne):(D[se]=Y,D[B]=Q,se=B);else if(ne<xe&&0>r(ae,Q))D[se]=ae,D[ne]=Q,se=ne;else break e}}return K}function r(D,K){var Q=D.sortIndex-K.sortIndex;return Q!==0?Q:D.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],u=1,d=null,f=3,g=!1,_=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var K=n(c);K!==null;){if(K.callback===null)i(c);else if(K.startTime<=D)i(c),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(c)}}function S(D){if(x=!1,v(D),!_)if(n(l)!==null)_=!0,W(b);else{var K=n(c);K!==null&&$(S,K.startTime-D)}}function b(D,K){_=!1,x&&(x=!1,h(P),P=-1),g=!0;var Q=f;try{for(v(K),d=n(l);d!==null&&(!(d.expirationTime>K)||D&&!R());){var se=d.callback;if(typeof se=="function"){d.callback=null,f=d.priorityLevel;var xe=se(d.expirationTime<=K);K=t.unstable_now(),typeof xe=="function"?d.callback=xe:d===n(l)&&i(l),v(K)}else i(l);d=n(l)}if(d!==null)var ue=!0;else{var B=n(c);B!==null&&$(S,B.startTime-K),ue=!1}return ue}finally{d=null,f=Q,g=!1}}var C=!1,E=null,P=-1,w=5,M=-1;function R(){return!(t.unstable_now()-M<w)}function H(){if(E!==null){var D=t.unstable_now();M=D;var K=!0;try{K=E(!0,D)}finally{K?k():(C=!1,E=null)}}else C=!1}var k;if(typeof y=="function")k=function(){y(H)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,j=z.port2;z.port1.onmessage=H,k=function(){j.postMessage(null)}}else k=function(){m(H,0)};function W(D){E=D,C||(C=!0,k())}function $(D,K){P=m(function(){D(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,W(b))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var K=3;break;default:K=f}var Q=f;f=K;try{return D()}finally{f=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,K){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Q=f;f=D;try{return K()}finally{f=Q}},t.unstable_scheduleCallback=function(D,K,Q){var se=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?se+Q:se):Q=se,D){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=Q+xe,D={id:u++,callback:K,priorityLevel:D,startTime:Q,expirationTime:xe,sortIndex:-1},Q>se?(D.sortIndex=Q,e(c,D),n(l)===null&&D===n(c)&&(x?(h(P),P=-1):x=!0,$(S,Q-se))):(D.sortIndex=xe,e(l,D),_||g||(_=!0,W(b))),D},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(D){var K=f;return function(){var Q=f;f=K;try{return D.apply(this,arguments)}finally{f=Q}}}})(fg);hg.exports=fg;var k_=hg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_=O,fn=k_;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pg=new Set,xa={};function br(t,e){Ms(t,e),Ms(t+"Capture",e)}function Ms(t,e){for(xa[t]=e,t=0;t<e.length;t++)pg.add(e[t])}var hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=Object.prototype.hasOwnProperty,B_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yf={},Sf={};function H_(t){return Su.call(Sf,t)?!0:Su.call(yf,t)?!1:B_.test(t)?Sf[t]=!0:(yf[t]=!0,!1)}function V_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function G_(t,e,n,i){if(e===null||typeof e>"u"||V_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $t(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new $t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new $t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new $t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new $t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new $t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new $t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new $t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new $t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new $t(t,5,!1,t.toLowerCase(),null,!1,!1)});var ih=/[\-:]([a-z])/g;function rh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ih,rh);Ft[e]=new $t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ih,rh);Ft[e]=new $t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ih,rh);Ft[e]=new $t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new $t(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new $t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new $t(t,1,!1,t.toLowerCase(),null,!0,!0)});function sh(t,e,n,i){var r=Ft.hasOwnProperty(e)?Ft[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(G_(e,n,r,i)&&(n=null),i||r===null?H_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var xi=z_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,no=Symbol.for("react.element"),Jr=Symbol.for("react.portal"),es=Symbol.for("react.fragment"),ah=Symbol.for("react.strict_mode"),Mu=Symbol.for("react.profiler"),mg=Symbol.for("react.provider"),gg=Symbol.for("react.context"),oh=Symbol.for("react.forward_ref"),Eu=Symbol.for("react.suspense"),wu=Symbol.for("react.suspense_list"),lh=Symbol.for("react.memo"),Ri=Symbol.for("react.lazy"),vg=Symbol.for("react.offscreen"),Mf=Symbol.iterator;function Hs(t){return t===null||typeof t!="object"?null:(t=Mf&&t[Mf]||t["@@iterator"],typeof t=="function"?t:null)}var ut=Object.assign,mc;function na(t){if(mc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);mc=e&&e[1]||""}return`
`+mc+t}var gc=!1;function vc(t,e){if(!t||gc)return"";gc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{gc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?na(t):""}function j_(t){switch(t.tag){case 5:return na(t.type);case 16:return na("Lazy");case 13:return na("Suspense");case 19:return na("SuspenseList");case 0:case 2:case 15:return t=vc(t.type,!1),t;case 11:return t=vc(t.type.render,!1),t;case 1:return t=vc(t.type,!0),t;default:return""}}function Tu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case es:return"Fragment";case Jr:return"Portal";case Mu:return"Profiler";case ah:return"StrictMode";case Eu:return"Suspense";case wu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case gg:return(t.displayName||"Context")+".Consumer";case mg:return(t._context.displayName||"Context")+".Provider";case oh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case lh:return e=t.displayName||null,e!==null?e:Tu(t.type)||"Memo";case Ri:e=t._payload,t=t._init;try{return Tu(t(e))}catch{}}return null}function W_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tu(e);case 8:return e===ah?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function qi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _g(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function X_(t){var e=_g(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function io(t){t._valueTracker||(t._valueTracker=X_(t))}function xg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=_g(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ll(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Cu(t,e){var n=e.checked;return ut({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ef(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=qi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function yg(t,e){e=e.checked,e!=null&&sh(t,"checked",e,!1)}function Au(t,e){yg(t,e);var n=qi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ru(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ru(t,e.type,qi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function wf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ru(t,e,n){(e!=="number"||ll(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ia=Array.isArray;function fs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+qi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function bu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return ut({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Tf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(ia(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:qi(n)}}function Sg(t,e){var n=qi(e.value),i=qi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Cf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Mg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Mg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ro,Eg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ro=ro||document.createElement("div"),ro.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ro.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ya(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var oa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},q_=["Webkit","ms","Moz","O"];Object.keys(oa).forEach(function(t){q_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),oa[e]=oa[t]})});function wg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||oa.hasOwnProperty(t)&&oa[t]?(""+e).trim():e+"px"}function Tg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=wg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var $_=ut({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nu(t,e){if(e){if($_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function Lu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Du=null;function ch(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Uu=null,ps=null,ms=null;function Af(t){if(t=Va(t)){if(typeof Uu!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=Xl(e),Uu(t.stateNode,t.type,e))}}function Cg(t){ps?ms?ms.push(t):ms=[t]:ps=t}function Ag(){if(ps){var t=ps,e=ms;if(ms=ps=null,Af(t),e)for(t=0;t<e.length;t++)Af(e[t])}}function Rg(t,e){return t(e)}function bg(){}var _c=!1;function Pg(t,e,n){if(_c)return t(e,n);_c=!0;try{return Rg(t,e,n)}finally{_c=!1,(ps!==null||ms!==null)&&(bg(),Ag())}}function Sa(t,e){var n=t.stateNode;if(n===null)return null;var i=Xl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var Iu=!1;if(hi)try{var Vs={};Object.defineProperty(Vs,"passive",{get:function(){Iu=!0}}),window.addEventListener("test",Vs,Vs),window.removeEventListener("test",Vs,Vs)}catch{Iu=!1}function Y_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var la=!1,cl=null,ul=!1,Fu=null,K_={onError:function(t){la=!0,cl=t}};function Z_(t,e,n,i,r,s,a,o,l){la=!1,cl=null,Y_.apply(K_,arguments)}function Q_(t,e,n,i,r,s,a,o,l){if(Z_.apply(this,arguments),la){if(la){var c=cl;la=!1,cl=null}else throw Error(ie(198));ul||(ul=!0,Fu=c)}}function Pr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ng(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Rf(t){if(Pr(t)!==t)throw Error(ie(188))}function J_(t){var e=t.alternate;if(!e){if(e=Pr(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Rf(r),t;if(s===i)return Rf(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function Lg(t){return t=J_(t),t!==null?Dg(t):null}function Dg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Dg(t);if(e!==null)return e;t=t.sibling}return null}var Ug=fn.unstable_scheduleCallback,bf=fn.unstable_cancelCallback,ex=fn.unstable_shouldYield,tx=fn.unstable_requestPaint,gt=fn.unstable_now,nx=fn.unstable_getCurrentPriorityLevel,uh=fn.unstable_ImmediatePriority,Ig=fn.unstable_UserBlockingPriority,dl=fn.unstable_NormalPriority,ix=fn.unstable_LowPriority,Fg=fn.unstable_IdlePriority,Vl=null,$n=null;function rx(t){if($n&&typeof $n.onCommitFiberRoot=="function")try{$n.onCommitFiberRoot(Vl,t,void 0,(t.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:ox,sx=Math.log,ax=Math.LN2;function ox(t){return t>>>=0,t===0?32:31-(sx(t)/ax|0)|0}var so=64,ao=4194304;function ra(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function hl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ra(o):(s&=a,s!==0&&(i=ra(s)))}else a=n&~r,a!==0?i=ra(a):s!==0&&(i=ra(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-On(e),r=1<<n,i|=t[n],e&=~r;return i}function lx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-On(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=lx(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Ou(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Og(){var t=so;return so<<=1,!(so&4194240)&&(so=64),t}function xc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ba(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-On(e),t[e]=n}function ux(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-On(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function dh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-On(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function kg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var zg,hh,Bg,Hg,Vg,ku=!1,oo=[],Fi=null,Oi=null,ki=null,Ma=new Map,Ea=new Map,Pi=[],dx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pf(t,e){switch(t){case"focusin":case"focusout":Fi=null;break;case"dragenter":case"dragleave":Oi=null;break;case"mouseover":case"mouseout":ki=null;break;case"pointerover":case"pointerout":Ma.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ea.delete(e.pointerId)}}function Gs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Va(e),e!==null&&hh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function hx(t,e,n,i,r){switch(e){case"focusin":return Fi=Gs(Fi,t,e,n,i,r),!0;case"dragenter":return Oi=Gs(Oi,t,e,n,i,r),!0;case"mouseover":return ki=Gs(ki,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ma.set(s,Gs(Ma.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ea.set(s,Gs(Ea.get(s)||null,t,e,n,i,r)),!0}return!1}function Gg(t){var e=pr(t.target);if(e!==null){var n=Pr(e);if(n!==null){if(e=n.tag,e===13){if(e=Ng(n),e!==null){t.blockedOn=e,Vg(t.priority,function(){Bg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=zu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Du=i,n.target.dispatchEvent(i),Du=null}else return e=Va(n),e!==null&&hh(e),t.blockedOn=n,!1;e.shift()}return!0}function Nf(t,e,n){Xo(t)&&n.delete(e)}function fx(){ku=!1,Fi!==null&&Xo(Fi)&&(Fi=null),Oi!==null&&Xo(Oi)&&(Oi=null),ki!==null&&Xo(ki)&&(ki=null),Ma.forEach(Nf),Ea.forEach(Nf)}function js(t,e){t.blockedOn===e&&(t.blockedOn=null,ku||(ku=!0,fn.unstable_scheduleCallback(fn.unstable_NormalPriority,fx)))}function wa(t){function e(r){return js(r,t)}if(0<oo.length){js(oo[0],t);for(var n=1;n<oo.length;n++){var i=oo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Fi!==null&&js(Fi,t),Oi!==null&&js(Oi,t),ki!==null&&js(ki,t),Ma.forEach(e),Ea.forEach(e),n=0;n<Pi.length;n++)i=Pi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Pi.length&&(n=Pi[0],n.blockedOn===null);)Gg(n),n.blockedOn===null&&Pi.shift()}var gs=xi.ReactCurrentBatchConfig,fl=!0;function px(t,e,n,i){var r=et,s=gs.transition;gs.transition=null;try{et=1,fh(t,e,n,i)}finally{et=r,gs.transition=s}}function mx(t,e,n,i){var r=et,s=gs.transition;gs.transition=null;try{et=4,fh(t,e,n,i)}finally{et=r,gs.transition=s}}function fh(t,e,n,i){if(fl){var r=zu(t,e,n,i);if(r===null)bc(t,e,i,pl,n),Pf(t,i);else if(hx(r,t,e,n,i))i.stopPropagation();else if(Pf(t,i),e&4&&-1<dx.indexOf(t)){for(;r!==null;){var s=Va(r);if(s!==null&&zg(s),s=zu(t,e,n,i),s===null&&bc(t,e,i,pl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else bc(t,e,i,null,n)}}var pl=null;function zu(t,e,n,i){if(pl=null,t=ch(i),t=pr(t),t!==null)if(e=Pr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ng(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return pl=t,null}function jg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nx()){case uh:return 1;case Ig:return 4;case dl:case ix:return 16;case Fg:return 536870912;default:return 16}default:return 16}}var Di=null,ph=null,qo=null;function Wg(){if(qo)return qo;var t,e=ph,n=e.length,i,r="value"in Di?Di.value:Di.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return qo=r.slice(t,1<i?1-i:void 0)}function $o(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function lo(){return!0}function Lf(){return!1}function mn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?lo:Lf,this.isPropagationStopped=Lf,this}return ut(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=lo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=lo)},persist:function(){},isPersistent:lo}),e}var Fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mh=mn(Fs),Ha=ut({},Fs,{view:0,detail:0}),gx=mn(Ha),yc,Sc,Ws,Gl=ut({},Ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ws&&(Ws&&t.type==="mousemove"?(yc=t.screenX-Ws.screenX,Sc=t.screenY-Ws.screenY):Sc=yc=0,Ws=t),yc)},movementY:function(t){return"movementY"in t?t.movementY:Sc}}),Df=mn(Gl),vx=ut({},Gl,{dataTransfer:0}),_x=mn(vx),xx=ut({},Ha,{relatedTarget:0}),Mc=mn(xx),yx=ut({},Fs,{animationName:0,elapsedTime:0,pseudoElement:0}),Sx=mn(yx),Mx=ut({},Fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ex=mn(Mx),wx=ut({},Fs,{data:0}),Uf=mn(wx),Tx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ax={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ax[t])?!!e[t]:!1}function gh(){return Rx}var bx=ut({},Ha,{key:function(t){if(t.key){var e=Tx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=$o(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Cx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gh,charCode:function(t){return t.type==="keypress"?$o(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$o(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Px=mn(bx),Nx=ut({},Gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),If=mn(Nx),Lx=ut({},Ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gh}),Dx=mn(Lx),Ux=ut({},Fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ix=mn(Ux),Fx=ut({},Gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ox=mn(Fx),kx=[9,13,27,32],vh=hi&&"CompositionEvent"in window,ca=null;hi&&"documentMode"in document&&(ca=document.documentMode);var zx=hi&&"TextEvent"in window&&!ca,Xg=hi&&(!vh||ca&&8<ca&&11>=ca),Ff=" ",Of=!1;function qg(t,e){switch(t){case"keyup":return kx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $g(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ts=!1;function Bx(t,e){switch(t){case"compositionend":return $g(e);case"keypress":return e.which!==32?null:(Of=!0,Ff);case"textInput":return t=e.data,t===Ff&&Of?null:t;default:return null}}function Hx(t,e){if(ts)return t==="compositionend"||!vh&&qg(t,e)?(t=Wg(),qo=ph=Di=null,ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Xg&&e.locale!=="ko"?null:e.data;default:return null}}var Vx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Vx[t.type]:e==="textarea"}function Yg(t,e,n,i){Cg(i),e=ml(e,"onChange"),0<e.length&&(n=new mh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ua=null,Ta=null;function Gx(t){av(t,0)}function jl(t){var e=rs(t);if(xg(e))return t}function jx(t,e){if(t==="change")return e}var Kg=!1;if(hi){var Ec;if(hi){var wc="oninput"in document;if(!wc){var zf=document.createElement("div");zf.setAttribute("oninput","return;"),wc=typeof zf.oninput=="function"}Ec=wc}else Ec=!1;Kg=Ec&&(!document.documentMode||9<document.documentMode)}function Bf(){ua&&(ua.detachEvent("onpropertychange",Zg),Ta=ua=null)}function Zg(t){if(t.propertyName==="value"&&jl(Ta)){var e=[];Yg(e,Ta,t,ch(t)),Pg(Gx,e)}}function Wx(t,e,n){t==="focusin"?(Bf(),ua=e,Ta=n,ua.attachEvent("onpropertychange",Zg)):t==="focusout"&&Bf()}function Xx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jl(Ta)}function qx(t,e){if(t==="click")return jl(e)}function $x(t,e){if(t==="input"||t==="change")return jl(e)}function Yx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zn=typeof Object.is=="function"?Object.is:Yx;function Ca(t,e){if(zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Su.call(e,r)||!zn(t[r],e[r]))return!1}return!0}function Hf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vf(t,e){var n=Hf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hf(n)}}function Qg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Qg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Jg(){for(var t=window,e=ll();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ll(t.document)}return e}function _h(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Kx(t){var e=Jg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Qg(n.ownerDocument.documentElement,n)){if(i!==null&&_h(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Vf(n,s);var a=Vf(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Zx=hi&&"documentMode"in document&&11>=document.documentMode,ns=null,Bu=null,da=null,Hu=!1;function Gf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hu||ns==null||ns!==ll(i)||(i=ns,"selectionStart"in i&&_h(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),da&&Ca(da,i)||(da=i,i=ml(Bu,"onSelect"),0<i.length&&(e=new mh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ns)))}function co(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var is={animationend:co("Animation","AnimationEnd"),animationiteration:co("Animation","AnimationIteration"),animationstart:co("Animation","AnimationStart"),transitionend:co("Transition","TransitionEnd")},Tc={},ev={};hi&&(ev=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function Wl(t){if(Tc[t])return Tc[t];if(!is[t])return t;var e=is[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ev)return Tc[t]=e[n];return t}var tv=Wl("animationend"),nv=Wl("animationiteration"),iv=Wl("animationstart"),rv=Wl("transitionend"),sv=new Map,jf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(t,e){sv.set(t,e),br(e,[t])}for(var Cc=0;Cc<jf.length;Cc++){var Ac=jf[Cc],Qx=Ac.toLowerCase(),Jx=Ac[0].toUpperCase()+Ac.slice(1);Ki(Qx,"on"+Jx)}Ki(tv,"onAnimationEnd");Ki(nv,"onAnimationIteration");Ki(iv,"onAnimationStart");Ki("dblclick","onDoubleClick");Ki("focusin","onFocus");Ki("focusout","onBlur");Ki(rv,"onTransitionEnd");Ms("onMouseEnter",["mouseout","mouseover"]);Ms("onMouseLeave",["mouseout","mouseover"]);Ms("onPointerEnter",["pointerout","pointerover"]);Ms("onPointerLeave",["pointerout","pointerover"]);br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));br("onBeforeInput",["compositionend","keypress","textInput","paste"]);br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ey=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function Wf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Q_(i,e,void 0,t),t.currentTarget=null}function av(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Wf(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Wf(r,o,c),s=l}}}if(ul)throw t=Fu,ul=!1,Fu=null,t}function it(t,e){var n=e[Xu];n===void 0&&(n=e[Xu]=new Set);var i=t+"__bubble";n.has(i)||(ov(e,t,2,!1),n.add(i))}function Rc(t,e,n){var i=0;e&&(i|=4),ov(n,t,i,e)}var uo="_reactListening"+Math.random().toString(36).slice(2);function Aa(t){if(!t[uo]){t[uo]=!0,pg.forEach(function(n){n!=="selectionchange"&&(ey.has(n)||Rc(n,!1,t),Rc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[uo]||(e[uo]=!0,Rc("selectionchange",!1,e))}}function ov(t,e,n,i){switch(jg(e)){case 1:var r=px;break;case 4:r=mx;break;default:r=fh}n=r.bind(null,e,n,t),r=void 0,!Iu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function bc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=pr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Pg(function(){var c=s,u=ch(n),d=[];e:{var f=sv.get(t);if(f!==void 0){var g=mh,_=t;switch(t){case"keypress":if($o(n)===0)break e;case"keydown":case"keyup":g=Px;break;case"focusin":_="focus",g=Mc;break;case"focusout":_="blur",g=Mc;break;case"beforeblur":case"afterblur":g=Mc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Df;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=_x;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Dx;break;case tv:case nv:case iv:g=Sx;break;case rv:g=Ix;break;case"scroll":g=gx;break;case"wheel":g=Ox;break;case"copy":case"cut":case"paste":g=Ex;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=If}var x=(e&4)!==0,m=!x&&t==="scroll",h=x?f!==null?f+"Capture":null:f;x=[];for(var y=c,v;y!==null;){v=y;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,h!==null&&(S=Sa(y,h),S!=null&&x.push(Ra(y,S,v)))),m)break;y=y.return}0<x.length&&(f=new g(f,_,null,n,u),d.push({event:f,listeners:x}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==Du&&(_=n.relatedTarget||n.fromElement)&&(pr(_)||_[fi]))break e;if((g||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=c,_=_?pr(_):null,_!==null&&(m=Pr(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=c),g!==_)){if(x=Df,S="onMouseLeave",h="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(x=If,S="onPointerLeave",h="onPointerEnter",y="pointer"),m=g==null?f:rs(g),v=_==null?f:rs(_),f=new x(S,y+"leave",g,n,u),f.target=m,f.relatedTarget=v,S=null,pr(u)===c&&(x=new x(h,y+"enter",_,n,u),x.target=v,x.relatedTarget=m,S=x),m=S,g&&_)t:{for(x=g,h=_,y=0,v=x;v;v=Ir(v))y++;for(v=0,S=h;S;S=Ir(S))v++;for(;0<y-v;)x=Ir(x),y--;for(;0<v-y;)h=Ir(h),v--;for(;y--;){if(x===h||h!==null&&x===h.alternate)break t;x=Ir(x),h=Ir(h)}x=null}else x=null;g!==null&&Xf(d,f,g,x,!1),_!==null&&m!==null&&Xf(d,m,_,x,!0)}}e:{if(f=c?rs(c):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var b=jx;else if(kf(f))if(Kg)b=$x;else{b=Xx;var C=Wx}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=qx);if(b&&(b=b(t,c))){Yg(d,b,n,u);break e}C&&C(t,f,c),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Ru(f,"number",f.value)}switch(C=c?rs(c):window,t){case"focusin":(kf(C)||C.contentEditable==="true")&&(ns=C,Bu=c,da=null);break;case"focusout":da=Bu=ns=null;break;case"mousedown":Hu=!0;break;case"contextmenu":case"mouseup":case"dragend":Hu=!1,Gf(d,n,u);break;case"selectionchange":if(Zx)break;case"keydown":case"keyup":Gf(d,n,u)}var E;if(vh)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ts?qg(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Xg&&n.locale!=="ko"&&(ts||P!=="onCompositionStart"?P==="onCompositionEnd"&&ts&&(E=Wg()):(Di=u,ph="value"in Di?Di.value:Di.textContent,ts=!0)),C=ml(c,P),0<C.length&&(P=new Uf(P,t,null,n,u),d.push({event:P,listeners:C}),E?P.data=E:(E=$g(n),E!==null&&(P.data=E)))),(E=zx?Bx(t,n):Hx(t,n))&&(c=ml(c,"onBeforeInput"),0<c.length&&(u=new Uf("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=E))}av(d,e)})}function Ra(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ml(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Sa(t,n),s!=null&&i.unshift(Ra(t,s,r)),s=Sa(t,e),s!=null&&i.push(Ra(t,s,r))),t=t.return}return i}function Ir(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Xf(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Sa(n,s),l!=null&&a.unshift(Ra(n,l,o))):r||(l=Sa(n,s),l!=null&&a.push(Ra(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var ty=/\r\n?/g,ny=/\u0000|\uFFFD/g;function qf(t){return(typeof t=="string"?t:""+t).replace(ty,`
`).replace(ny,"")}function ho(t,e,n){if(e=qf(e),qf(t)!==e&&n)throw Error(ie(425))}function gl(){}var Vu=null,Gu=null;function ju(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Wu=typeof setTimeout=="function"?setTimeout:void 0,iy=typeof clearTimeout=="function"?clearTimeout:void 0,$f=typeof Promise=="function"?Promise:void 0,ry=typeof queueMicrotask=="function"?queueMicrotask:typeof $f<"u"?function(t){return $f.resolve(null).then(t).catch(sy)}:Wu;function sy(t){setTimeout(function(){throw t})}function Pc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),wa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);wa(e)}function zi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Yf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Os=Math.random().toString(36).slice(2),Wn="__reactFiber$"+Os,ba="__reactProps$"+Os,fi="__reactContainer$"+Os,Xu="__reactEvents$"+Os,ay="__reactListeners$"+Os,oy="__reactHandles$"+Os;function pr(t){var e=t[Wn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[fi]||n[Wn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Yf(t);t!==null;){if(n=t[Wn])return n;t=Yf(t)}return e}t=n,n=t.parentNode}return null}function Va(t){return t=t[Wn]||t[fi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function Xl(t){return t[ba]||null}var qu=[],ss=-1;function Zi(t){return{current:t}}function st(t){0>ss||(t.current=qu[ss],qu[ss]=null,ss--)}function nt(t,e){ss++,qu[ss]=t.current,t.current=e}var $i={},Vt=Zi($i),Jt=Zi(!1),Mr=$i;function Es(t,e){var n=t.type.contextTypes;if(!n)return $i;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function en(t){return t=t.childContextTypes,t!=null}function vl(){st(Jt),st(Vt)}function Kf(t,e,n){if(Vt.current!==$i)throw Error(ie(168));nt(Vt,e),nt(Jt,n)}function lv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,W_(t)||"Unknown",r));return ut({},n,i)}function _l(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||$i,Mr=Vt.current,nt(Vt,t),nt(Jt,Jt.current),!0}function Zf(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=lv(t,e,Mr),i.__reactInternalMemoizedMergedChildContext=t,st(Jt),st(Vt),nt(Vt,t)):st(Jt),nt(Jt,n)}var si=null,ql=!1,Nc=!1;function cv(t){si===null?si=[t]:si.push(t)}function ly(t){ql=!0,cv(t)}function Qi(){if(!Nc&&si!==null){Nc=!0;var t=0,e=et;try{var n=si;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}si=null,ql=!1}catch(r){throw si!==null&&(si=si.slice(t+1)),Ug(uh,Qi),r}finally{et=e,Nc=!1}}return null}var as=[],os=0,xl=null,yl=0,_n=[],xn=0,Er=null,oi=1,li="";function lr(t,e){as[os++]=yl,as[os++]=xl,xl=t,yl=e}function uv(t,e,n){_n[xn++]=oi,_n[xn++]=li,_n[xn++]=Er,Er=t;var i=oi;t=li;var r=32-On(i)-1;i&=~(1<<r),n+=1;var s=32-On(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,oi=1<<32-On(e)+r|n<<r|i,li=s+t}else oi=1<<s|n<<r|i,li=t}function xh(t){t.return!==null&&(lr(t,1),uv(t,1,0))}function yh(t){for(;t===xl;)xl=as[--os],as[os]=null,yl=as[--os],as[os]=null;for(;t===Er;)Er=_n[--xn],_n[xn]=null,li=_n[--xn],_n[xn]=null,oi=_n[--xn],_n[xn]=null}var dn=null,un=null,at=!1,Ln=null;function dv(t,e){var n=yn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Qf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,dn=t,un=zi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,dn=t,un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Er!==null?{id:oi,overflow:li}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=yn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,dn=t,un=null,!0):!1;default:return!1}}function $u(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Yu(t){if(at){var e=un;if(e){var n=e;if(!Qf(t,e)){if($u(t))throw Error(ie(418));e=zi(n.nextSibling);var i=dn;e&&Qf(t,e)?dv(i,n):(t.flags=t.flags&-4097|2,at=!1,dn=t)}}else{if($u(t))throw Error(ie(418));t.flags=t.flags&-4097|2,at=!1,dn=t}}}function Jf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;dn=t}function fo(t){if(t!==dn)return!1;if(!at)return Jf(t),at=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ju(t.type,t.memoizedProps)),e&&(e=un)){if($u(t))throw hv(),Error(ie(418));for(;e;)dv(t,e),e=zi(e.nextSibling)}if(Jf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){un=zi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}un=null}}else un=dn?zi(t.stateNode.nextSibling):null;return!0}function hv(){for(var t=un;t;)t=zi(t.nextSibling)}function ws(){un=dn=null,at=!1}function Sh(t){Ln===null?Ln=[t]:Ln.push(t)}var cy=xi.ReactCurrentBatchConfig;function Xs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function po(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ep(t){var e=t._init;return e(t._payload)}function fv(t){function e(h,y){if(t){var v=h.deletions;v===null?(h.deletions=[y],h.flags|=16):v.push(y)}}function n(h,y){if(!t)return null;for(;y!==null;)e(h,y),y=y.sibling;return null}function i(h,y){for(h=new Map;y!==null;)y.key!==null?h.set(y.key,y):h.set(y.index,y),y=y.sibling;return h}function r(h,y){return h=Gi(h,y),h.index=0,h.sibling=null,h}function s(h,y,v){return h.index=v,t?(v=h.alternate,v!==null?(v=v.index,v<y?(h.flags|=2,y):v):(h.flags|=2,y)):(h.flags|=1048576,y)}function a(h){return t&&h.alternate===null&&(h.flags|=2),h}function o(h,y,v,S){return y===null||y.tag!==6?(y=kc(v,h.mode,S),y.return=h,y):(y=r(y,v),y.return=h,y)}function l(h,y,v,S){var b=v.type;return b===es?u(h,y,v.props.children,S,v.key):y!==null&&(y.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ri&&ep(b)===y.type)?(S=r(y,v.props),S.ref=Xs(h,y,v),S.return=h,S):(S=tl(v.type,v.key,v.props,null,h.mode,S),S.ref=Xs(h,y,v),S.return=h,S)}function c(h,y,v,S){return y===null||y.tag!==4||y.stateNode.containerInfo!==v.containerInfo||y.stateNode.implementation!==v.implementation?(y=zc(v,h.mode,S),y.return=h,y):(y=r(y,v.children||[]),y.return=h,y)}function u(h,y,v,S,b){return y===null||y.tag!==7?(y=yr(v,h.mode,S,b),y.return=h,y):(y=r(y,v),y.return=h,y)}function d(h,y,v){if(typeof y=="string"&&y!==""||typeof y=="number")return y=kc(""+y,h.mode,v),y.return=h,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case no:return v=tl(y.type,y.key,y.props,null,h.mode,v),v.ref=Xs(h,null,y),v.return=h,v;case Jr:return y=zc(y,h.mode,v),y.return=h,y;case Ri:var S=y._init;return d(h,S(y._payload),v)}if(ia(y)||Hs(y))return y=yr(y,h.mode,v,null),y.return=h,y;po(h,y)}return null}function f(h,y,v,S){var b=y!==null?y.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:o(h,y,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case no:return v.key===b?l(h,y,v,S):null;case Jr:return v.key===b?c(h,y,v,S):null;case Ri:return b=v._init,f(h,y,b(v._payload),S)}if(ia(v)||Hs(v))return b!==null?null:u(h,y,v,S,null);po(h,v)}return null}function g(h,y,v,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(v)||null,o(y,h,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case no:return h=h.get(S.key===null?v:S.key)||null,l(y,h,S,b);case Jr:return h=h.get(S.key===null?v:S.key)||null,c(y,h,S,b);case Ri:var C=S._init;return g(h,y,v,C(S._payload),b)}if(ia(S)||Hs(S))return h=h.get(v)||null,u(y,h,S,b,null);po(y,S)}return null}function _(h,y,v,S){for(var b=null,C=null,E=y,P=y=0,w=null;E!==null&&P<v.length;P++){E.index>P?(w=E,E=null):w=E.sibling;var M=f(h,E,v[P],S);if(M===null){E===null&&(E=w);break}t&&E&&M.alternate===null&&e(h,E),y=s(M,y,P),C===null?b=M:C.sibling=M,C=M,E=w}if(P===v.length)return n(h,E),at&&lr(h,P),b;if(E===null){for(;P<v.length;P++)E=d(h,v[P],S),E!==null&&(y=s(E,y,P),C===null?b=E:C.sibling=E,C=E);return at&&lr(h,P),b}for(E=i(h,E);P<v.length;P++)w=g(E,h,P,v[P],S),w!==null&&(t&&w.alternate!==null&&E.delete(w.key===null?P:w.key),y=s(w,y,P),C===null?b=w:C.sibling=w,C=w);return t&&E.forEach(function(R){return e(h,R)}),at&&lr(h,P),b}function x(h,y,v,S){var b=Hs(v);if(typeof b!="function")throw Error(ie(150));if(v=b.call(v),v==null)throw Error(ie(151));for(var C=b=null,E=y,P=y=0,w=null,M=v.next();E!==null&&!M.done;P++,M=v.next()){E.index>P?(w=E,E=null):w=E.sibling;var R=f(h,E,M.value,S);if(R===null){E===null&&(E=w);break}t&&E&&R.alternate===null&&e(h,E),y=s(R,y,P),C===null?b=R:C.sibling=R,C=R,E=w}if(M.done)return n(h,E),at&&lr(h,P),b;if(E===null){for(;!M.done;P++,M=v.next())M=d(h,M.value,S),M!==null&&(y=s(M,y,P),C===null?b=M:C.sibling=M,C=M);return at&&lr(h,P),b}for(E=i(h,E);!M.done;P++,M=v.next())M=g(E,h,P,M.value,S),M!==null&&(t&&M.alternate!==null&&E.delete(M.key===null?P:M.key),y=s(M,y,P),C===null?b=M:C.sibling=M,C=M);return t&&E.forEach(function(H){return e(h,H)}),at&&lr(h,P),b}function m(h,y,v,S){if(typeof v=="object"&&v!==null&&v.type===es&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case no:e:{for(var b=v.key,C=y;C!==null;){if(C.key===b){if(b=v.type,b===es){if(C.tag===7){n(h,C.sibling),y=r(C,v.props.children),y.return=h,h=y;break e}}else if(C.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ri&&ep(b)===C.type){n(h,C.sibling),y=r(C,v.props),y.ref=Xs(h,C,v),y.return=h,h=y;break e}n(h,C);break}else e(h,C);C=C.sibling}v.type===es?(y=yr(v.props.children,h.mode,S,v.key),y.return=h,h=y):(S=tl(v.type,v.key,v.props,null,h.mode,S),S.ref=Xs(h,y,v),S.return=h,h=S)}return a(h);case Jr:e:{for(C=v.key;y!==null;){if(y.key===C)if(y.tag===4&&y.stateNode.containerInfo===v.containerInfo&&y.stateNode.implementation===v.implementation){n(h,y.sibling),y=r(y,v.children||[]),y.return=h,h=y;break e}else{n(h,y);break}else e(h,y);y=y.sibling}y=zc(v,h.mode,S),y.return=h,h=y}return a(h);case Ri:return C=v._init,m(h,y,C(v._payload),S)}if(ia(v))return _(h,y,v,S);if(Hs(v))return x(h,y,v,S);po(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,y!==null&&y.tag===6?(n(h,y.sibling),y=r(y,v),y.return=h,h=y):(n(h,y),y=kc(v,h.mode,S),y.return=h,h=y),a(h)):n(h,y)}return m}var Ts=fv(!0),pv=fv(!1),Sl=Zi(null),Ml=null,ls=null,Mh=null;function Eh(){Mh=ls=Ml=null}function wh(t){var e=Sl.current;st(Sl),t._currentValue=e}function Ku(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function vs(t,e){Ml=t,Mh=ls=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Qt=!0),t.firstContext=null)}function En(t){var e=t._currentValue;if(Mh!==t)if(t={context:t,memoizedValue:e,next:null},ls===null){if(Ml===null)throw Error(ie(308));ls=t,Ml.dependencies={lanes:0,firstContext:t}}else ls=ls.next=t;return e}var mr=null;function Th(t){mr===null?mr=[t]:mr.push(t)}function mv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Th(e)):(n.next=r.next,r.next=n),e.interleaved=n,pi(t,i)}function pi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var bi=!1;function Ch(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function di(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Bi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,We&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,pi(t,n)}return r=i.interleaved,r===null?(e.next=e,Th(i)):(e.next=r.next,r.next=e),i.interleaved=e,pi(t,n)}function Yo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,dh(t,n)}}function tp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function El(t,e,n,i){var r=t.updateQueue;bi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var u=t.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;a=0,u=c=l=null,o=s;do{var f=o.lane,g=o.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,x=o;switch(f=e,g=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){d=_.call(g,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,f=typeof _=="function"?_.call(g,d,f):_,f==null)break e;d=ut({},d,f);break e;case 2:bi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else g={eventTime:g,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=g,l=d):u=u.next=g,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Tr|=a,t.lanes=a,t.memoizedState=d}}function np(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Ga={},Yn=Zi(Ga),Pa=Zi(Ga),Na=Zi(Ga);function gr(t){if(t===Ga)throw Error(ie(174));return t}function Ah(t,e){switch(nt(Na,e),nt(Pa,t),nt(Yn,Ga),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Pu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Pu(e,t)}st(Yn),nt(Yn,e)}function Cs(){st(Yn),st(Pa),st(Na)}function vv(t){gr(Na.current);var e=gr(Yn.current),n=Pu(e,t.type);e!==n&&(nt(Pa,t),nt(Yn,n))}function Rh(t){Pa.current===t&&(st(Yn),st(Pa))}var lt=Zi(0);function wl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Lc=[];function bh(){for(var t=0;t<Lc.length;t++)Lc[t]._workInProgressVersionPrimary=null;Lc.length=0}var Ko=xi.ReactCurrentDispatcher,Dc=xi.ReactCurrentBatchConfig,wr=0,ct=null,Mt=null,Rt=null,Tl=!1,ha=!1,La=0,uy=0;function Ot(){throw Error(ie(321))}function Ph(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!zn(t[n],e[n]))return!1;return!0}function Nh(t,e,n,i,r,s){if(wr=s,ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ko.current=t===null||t.memoizedState===null?py:my,t=n(i,r),ha){s=0;do{if(ha=!1,La=0,25<=s)throw Error(ie(301));s+=1,Rt=Mt=null,e.updateQueue=null,Ko.current=gy,t=n(i,r)}while(ha)}if(Ko.current=Cl,e=Mt!==null&&Mt.next!==null,wr=0,Rt=Mt=ct=null,Tl=!1,e)throw Error(ie(300));return t}function Lh(){var t=La!==0;return La=0,t}function Vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?ct.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function wn(){if(Mt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=Mt.next;var e=Rt===null?ct.memoizedState:Rt.next;if(e!==null)Rt=e,Mt=t;else{if(t===null)throw Error(ie(310));Mt=t,t={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},Rt===null?ct.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function Da(t,e){return typeof e=="function"?e(t):e}function Uc(t){var e=wn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=Mt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var u=c.lane;if((wr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=d,a=i):l=l.next=d,ct.lanes|=u,Tr|=u}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,zn(i,e.memoizedState)||(Qt=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ct.lanes|=s,Tr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ic(t){var e=wn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);zn(s,e.memoizedState)||(Qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function _v(){}function xv(t,e){var n=ct,i=wn(),r=e(),s=!zn(i.memoizedState,r);if(s&&(i.memoizedState=r,Qt=!0),i=i.queue,Dh(Mv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Rt!==null&&Rt.memoizedState.tag&1){if(n.flags|=2048,Ua(9,Sv.bind(null,n,i,r,e),void 0,null),Pt===null)throw Error(ie(349));wr&30||yv(n,e,r)}return r}function yv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Sv(t,e,n,i){e.value=n,e.getSnapshot=i,Ev(e)&&wv(t)}function Mv(t,e,n){return n(function(){Ev(e)&&wv(t)})}function Ev(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zn(t,n)}catch{return!0}}function wv(t){var e=pi(t,1);e!==null&&kn(e,t,1,-1)}function ip(t){var e=Vn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:t},e.queue=t,t=t.dispatch=fy.bind(null,ct,t),[e.memoizedState,t]}function Ua(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Tv(){return wn().memoizedState}function Zo(t,e,n,i){var r=Vn();ct.flags|=t,r.memoizedState=Ua(1|e,n,void 0,i===void 0?null:i)}function $l(t,e,n,i){var r=wn();i=i===void 0?null:i;var s=void 0;if(Mt!==null){var a=Mt.memoizedState;if(s=a.destroy,i!==null&&Ph(i,a.deps)){r.memoizedState=Ua(e,n,s,i);return}}ct.flags|=t,r.memoizedState=Ua(1|e,n,s,i)}function rp(t,e){return Zo(8390656,8,t,e)}function Dh(t,e){return $l(2048,8,t,e)}function Cv(t,e){return $l(4,2,t,e)}function Av(t,e){return $l(4,4,t,e)}function Rv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function bv(t,e,n){return n=n!=null?n.concat([t]):null,$l(4,4,Rv.bind(null,e,t),n)}function Uh(){}function Pv(t,e){var n=wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ph(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Nv(t,e){var n=wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ph(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Lv(t,e,n){return wr&21?(zn(n,e)||(n=Og(),ct.lanes|=n,Tr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Qt=!0),t.memoizedState=n)}function dy(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=Dc.transition;Dc.transition={};try{t(!1),e()}finally{et=n,Dc.transition=i}}function Dv(){return wn().memoizedState}function hy(t,e,n){var i=Vi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Uv(t))Iv(e,n);else if(n=mv(t,e,n,i),n!==null){var r=Xt();kn(n,t,i,r),Fv(n,e,i)}}function fy(t,e,n){var i=Vi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Uv(t))Iv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,zn(o,a)){var l=e.interleaved;l===null?(r.next=r,Th(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=mv(t,e,r,i),n!==null&&(r=Xt(),kn(n,t,i,r),Fv(n,e,i))}}function Uv(t){var e=t.alternate;return t===ct||e!==null&&e===ct}function Iv(t,e){ha=Tl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Fv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,dh(t,n)}}var Cl={readContext:En,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},py={readContext:En,useCallback:function(t,e){return Vn().memoizedState=[t,e===void 0?null:e],t},useContext:En,useEffect:rp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Zo(4194308,4,Rv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Zo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Zo(4,2,t,e)},useMemo:function(t,e){var n=Vn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Vn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=hy.bind(null,ct,t),[i.memoizedState,t]},useRef:function(t){var e=Vn();return t={current:t},e.memoizedState=t},useState:ip,useDebugValue:Uh,useDeferredValue:function(t){return Vn().memoizedState=t},useTransition:function(){var t=ip(!1),e=t[0];return t=dy.bind(null,t[1]),Vn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ct,r=Vn();if(at){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Pt===null)throw Error(ie(349));wr&30||yv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,rp(Mv.bind(null,i,s,t),[t]),i.flags|=2048,Ua(9,Sv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Vn(),e=Pt.identifierPrefix;if(at){var n=li,i=oi;n=(i&~(1<<32-On(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=La++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=uy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},my={readContext:En,useCallback:Pv,useContext:En,useEffect:Dh,useImperativeHandle:bv,useInsertionEffect:Cv,useLayoutEffect:Av,useMemo:Nv,useReducer:Uc,useRef:Tv,useState:function(){return Uc(Da)},useDebugValue:Uh,useDeferredValue:function(t){var e=wn();return Lv(e,Mt.memoizedState,t)},useTransition:function(){var t=Uc(Da)[0],e=wn().memoizedState;return[t,e]},useMutableSource:_v,useSyncExternalStore:xv,useId:Dv,unstable_isNewReconciler:!1},gy={readContext:En,useCallback:Pv,useContext:En,useEffect:Dh,useImperativeHandle:bv,useInsertionEffect:Cv,useLayoutEffect:Av,useMemo:Nv,useReducer:Ic,useRef:Tv,useState:function(){return Ic(Da)},useDebugValue:Uh,useDeferredValue:function(t){var e=wn();return Mt===null?e.memoizedState=t:Lv(e,Mt.memoizedState,t)},useTransition:function(){var t=Ic(Da)[0],e=wn().memoizedState;return[t,e]},useMutableSource:_v,useSyncExternalStore:xv,useId:Dv,unstable_isNewReconciler:!1};function Pn(t,e){if(t&&t.defaultProps){e=ut({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Zu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ut({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Yl={isMounted:function(t){return(t=t._reactInternals)?Pr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=Vi(t),s=di(i,r);s.payload=e,n!=null&&(s.callback=n),e=Bi(t,s,r),e!==null&&(kn(e,t,r,i),Yo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=Vi(t),s=di(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Bi(t,s,r),e!==null&&(kn(e,t,r,i),Yo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xt(),i=Vi(t),r=di(n,i);r.tag=2,e!=null&&(r.callback=e),e=Bi(t,r,i),e!==null&&(kn(e,t,i,n),Yo(e,t,i))}};function sp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ca(n,i)||!Ca(r,s):!0}function Ov(t,e,n){var i=!1,r=$i,s=e.contextType;return typeof s=="object"&&s!==null?s=En(s):(r=en(e)?Mr:Vt.current,i=e.contextTypes,s=(i=i!=null)?Es(t,r):$i),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Yl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function ap(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Yl.enqueueReplaceState(e,e.state,null)}function Qu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Ch(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=En(s):(s=en(e)?Mr:Vt.current,r.context=Es(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Zu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Yl.enqueueReplaceState(r,r.state,null),El(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function As(t,e){try{var n="",i=e;do n+=j_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Fc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ju(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var vy=typeof WeakMap=="function"?WeakMap:Map;function kv(t,e,n){n=di(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Rl||(Rl=!0,cd=i),Ju(t,e)},n}function zv(t,e,n){n=di(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ju(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ju(t,e),typeof i!="function"&&(Hi===null?Hi=new Set([this]):Hi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function op(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new vy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Ny.bind(null,t,e,n),e.then(t,t))}function lp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function cp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=di(-1,1),e.tag=2,Bi(n,e,1))),n.lanes|=1),t)}var _y=xi.ReactCurrentOwner,Qt=!1;function jt(t,e,n,i){e.child=t===null?pv(e,null,n,i):Ts(e,t.child,n,i)}function up(t,e,n,i,r){n=n.render;var s=e.ref;return vs(e,r),i=Nh(t,e,n,i,s,r),n=Lh(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,mi(t,e,r)):(at&&n&&xh(e),e.flags|=1,jt(t,e,i,r),e.child)}function dp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Vh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Bv(t,e,s,i,r)):(t=tl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ca,n(a,i)&&t.ref===e.ref)return mi(t,e,r)}return e.flags|=1,t=Gi(s,i),t.ref=e.ref,t.return=e,e.child=t}function Bv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ca(s,i)&&t.ref===e.ref)if(Qt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Qt=!0);else return e.lanes=t.lanes,mi(t,e,r)}return ed(t,e,n,i,r)}function Hv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(us,cn),cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,nt(us,cn),cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,nt(us,cn),cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,nt(us,cn),cn|=i;return jt(t,e,r,n),e.child}function Vv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ed(t,e,n,i,r){var s=en(n)?Mr:Vt.current;return s=Es(e,s),vs(e,r),n=Nh(t,e,n,i,s,r),i=Lh(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,mi(t,e,r)):(at&&i&&xh(e),e.flags|=1,jt(t,e,n,r),e.child)}function hp(t,e,n,i,r){if(en(n)){var s=!0;_l(e)}else s=!1;if(vs(e,r),e.stateNode===null)Qo(t,e),Ov(e,n,i),Qu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=En(c):(c=en(n)?Mr:Vt.current,c=Es(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&ap(e,a,i,c),bi=!1;var f=e.memoizedState;a.state=f,El(e,i,a,r),l=e.memoizedState,o!==i||f!==l||Jt.current||bi?(typeof u=="function"&&(Zu(e,n,u,i),l=e.memoizedState),(o=bi||sp(e,n,o,i,f,l,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,gv(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Pn(e.type,o),a.props=c,d=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=En(l):(l=en(n)?Mr:Vt.current,l=Es(e,l));var g=n.getDerivedStateFromProps;(u=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==d||f!==l)&&ap(e,a,i,l),bi=!1,f=e.memoizedState,a.state=f,El(e,i,a,r);var _=e.memoizedState;o!==d||f!==_||Jt.current||bi?(typeof g=="function"&&(Zu(e,n,g,i),_=e.memoizedState),(c=bi||sp(e,n,c,i,f,_,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return td(t,e,n,i,s,r)}function td(t,e,n,i,r,s){Vv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Zf(e,n,!1),mi(t,e,s);i=e.stateNode,_y.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ts(e,t.child,null,s),e.child=Ts(e,null,o,s)):jt(t,e,o,s),e.memoizedState=i.state,r&&Zf(e,n,!0),e.child}function Gv(t){var e=t.stateNode;e.pendingContext?Kf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Kf(t,e.context,!1),Ah(t,e.containerInfo)}function fp(t,e,n,i,r){return ws(),Sh(r),e.flags|=256,jt(t,e,n,i),e.child}var nd={dehydrated:null,treeContext:null,retryLane:0};function id(t){return{baseLanes:t,cachePool:null,transitions:null}}function jv(t,e,n){var i=e.pendingProps,r=lt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),nt(lt,r&1),t===null)return Yu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Ql(a,i,0,null),t=yr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=id(n),e.memoizedState=nd,t):Ih(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return xy(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Gi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Gi(o,s):(s=yr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?id(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=nd,i}return s=t.child,t=s.sibling,i=Gi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ih(t,e){return e=Ql({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function mo(t,e,n,i){return i!==null&&Sh(i),Ts(e,t.child,null,n),t=Ih(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function xy(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Fc(Error(ie(422))),mo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ql({mode:"visible",children:i.children},r,0,null),s=yr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ts(e,t.child,null,a),e.child.memoizedState=id(a),e.memoizedState=nd,s);if(!(e.mode&1))return mo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ie(419)),i=Fc(s,i,void 0),mo(t,e,a,i)}if(o=(a&t.childLanes)!==0,Qt||o){if(i=Pt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,pi(t,r),kn(i,t,r,-1))}return Hh(),i=Fc(Error(ie(421))),mo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Ly.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,un=zi(r.nextSibling),dn=e,at=!0,Ln=null,t!==null&&(_n[xn++]=oi,_n[xn++]=li,_n[xn++]=Er,oi=t.id,li=t.overflow,Er=e),e=Ih(e,i.children),e.flags|=4096,e)}function pp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ku(t.return,e,n)}function Oc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Wv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(jt(t,e,i.children,n),i=lt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pp(t,n,e);else if(t.tag===19)pp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(nt(lt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&wl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Oc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&wl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Oc(e,!0,n,null,s);break;case"together":Oc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Qo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function mi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Tr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=Gi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Gi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function yy(t,e,n){switch(e.tag){case 3:Gv(e),ws();break;case 5:vv(e);break;case 1:en(e.type)&&_l(e);break;case 4:Ah(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;nt(Sl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(nt(lt,lt.current&1),e.flags|=128,null):n&e.child.childLanes?jv(t,e,n):(nt(lt,lt.current&1),t=mi(t,e,n),t!==null?t.sibling:null);nt(lt,lt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Wv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),nt(lt,lt.current),i)break;return null;case 22:case 23:return e.lanes=0,Hv(t,e,n)}return mi(t,e,n)}var Xv,rd,qv,$v;Xv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rd=function(){};qv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,gr(Yn.current);var s=null;switch(n){case"input":r=Cu(t,r),i=Cu(t,i),s=[];break;case"select":r=ut({},r,{value:void 0}),i=ut({},i,{value:void 0}),s=[];break;case"textarea":r=bu(t,r),i=bu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=gl)}Nu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(xa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(xa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&it("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};$v=function(t,e,n,i){n!==i&&(e.flags|=4)};function qs(t,e){if(!at)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Sy(t,e,n){var i=e.pendingProps;switch(yh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return en(e.type)&&vl(),kt(e),null;case 3:return i=e.stateNode,Cs(),st(Jt),st(Vt),bh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(fo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ln!==null&&(hd(Ln),Ln=null))),rd(t,e),kt(e),null;case 5:Rh(e);var r=gr(Na.current);if(n=e.type,t!==null&&e.stateNode!=null)qv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return kt(e),null}if(t=gr(Yn.current),fo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Wn]=e,i[ba]=s,t=(e.mode&1)!==0,n){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(r=0;r<sa.length;r++)it(sa[r],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":Ef(i,s),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},it("invalid",i);break;case"textarea":Tf(i,s),it("invalid",i)}Nu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&ho(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&ho(i.textContent,o,t),r=["children",""+o]):xa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&it("scroll",i)}switch(n){case"input":io(i),wf(i,s,!0);break;case"textarea":io(i),Cf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=gl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Mg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Wn]=e,t[ba]=i,Xv(t,e,!1,!1),e.stateNode=t;e:{switch(a=Lu(n,i),n){case"dialog":it("cancel",t),it("close",t),r=i;break;case"iframe":case"object":case"embed":it("load",t),r=i;break;case"video":case"audio":for(r=0;r<sa.length;r++)it(sa[r],t);r=i;break;case"source":it("error",t),r=i;break;case"img":case"image":case"link":it("error",t),it("load",t),r=i;break;case"details":it("toggle",t),r=i;break;case"input":Ef(t,i),r=Cu(t,i),it("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ut({},i,{value:void 0}),it("invalid",t);break;case"textarea":Tf(t,i),r=bu(t,i),it("invalid",t);break;default:r=i}Nu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Tg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Eg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ya(t,l):typeof l=="number"&&ya(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(xa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&it("scroll",t):l!=null&&sh(t,s,l,a))}switch(n){case"input":io(t),wf(t,i,!1);break;case"textarea":io(t),Cf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+qi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?fs(t,!!i.multiple,s,!1):i.defaultValue!=null&&fs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=gl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return kt(e),null;case 6:if(t&&e.stateNode!=null)$v(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=gr(Na.current),gr(Yn.current),fo(e)){if(i=e.stateNode,n=e.memoizedProps,i[Wn]=e,(s=i.nodeValue!==n)&&(t=dn,t!==null))switch(t.tag){case 3:ho(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ho(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Wn]=e,e.stateNode=i}return kt(e),null;case 13:if(st(lt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(at&&un!==null&&e.mode&1&&!(e.flags&128))hv(),ws(),e.flags|=98560,s=!1;else if(s=fo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[Wn]=e}else ws(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;kt(e),s=!1}else Ln!==null&&(hd(Ln),Ln=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||lt.current&1?Et===0&&(Et=3):Hh())),e.updateQueue!==null&&(e.flags|=4),kt(e),null);case 4:return Cs(),rd(t,e),t===null&&Aa(e.stateNode.containerInfo),kt(e),null;case 10:return wh(e.type._context),kt(e),null;case 17:return en(e.type)&&vl(),kt(e),null;case 19:if(st(lt),s=e.memoizedState,s===null)return kt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)qs(s,!1);else{if(Et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=wl(t),a!==null){for(e.flags|=128,qs(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return nt(lt,lt.current&1|2),e.child}t=t.sibling}s.tail!==null&&gt()>Rs&&(e.flags|=128,i=!0,qs(s,!1),e.lanes=4194304)}else{if(!i)if(t=wl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),qs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!at)return kt(e),null}else 2*gt()-s.renderingStartTime>Rs&&n!==1073741824&&(e.flags|=128,i=!0,qs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=gt(),e.sibling=null,n=lt.current,nt(lt,i?n&1|2:n&1),e):(kt(e),null);case 22:case 23:return Bh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?cn&1073741824&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function My(t,e){switch(yh(e),e.tag){case 1:return en(e.type)&&vl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Cs(),st(Jt),st(Vt),bh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Rh(e),null;case 13:if(st(lt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return st(lt),null;case 4:return Cs(),null;case 10:return wh(e.type._context),null;case 22:case 23:return Bh(),null;case 24:return null;default:return null}}var go=!1,Ht=!1,Ey=typeof WeakSet=="function"?WeakSet:Set,me=null;function cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){pt(t,e,i)}else n.current=null}function sd(t,e,n){try{n()}catch(i){pt(t,e,i)}}var mp=!1;function wy(t,e){if(Vu=fl,t=Jg(),_h(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var g;d!==n||r!==0&&d.nodeType!==3||(o=a+r),d!==s||i!==0&&d.nodeType!==3||(l=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===t)break t;if(f===n&&++c===r&&(o=a),f===s&&++u===i&&(l=a),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gu={focusedElem:t,selectionRange:n},fl=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,m=_.memoizedState,h=e.stateNode,y=h.getSnapshotBeforeUpdate(e.elementType===e.type?x:Pn(e.type,x),m);h.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(S){pt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return _=mp,mp=!1,_}function fa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&sd(e,n,s)}r=r.next}while(r!==i)}}function Kl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ad(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Yv(t){var e=t.alternate;e!==null&&(t.alternate=null,Yv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Wn],delete e[ba],delete e[Xu],delete e[ay],delete e[oy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Kv(t){return t.tag===5||t.tag===3||t.tag===4}function gp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Kv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function od(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=gl));else if(i!==4&&(t=t.child,t!==null))for(od(t,e,n),t=t.sibling;t!==null;)od(t,e,n),t=t.sibling}function ld(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ld(t,e,n),t=t.sibling;t!==null;)ld(t,e,n),t=t.sibling}var Ut=null,Nn=!1;function Si(t,e,n){for(n=n.child;n!==null;)Zv(t,e,n),n=n.sibling}function Zv(t,e,n){if($n&&typeof $n.onCommitFiberUnmount=="function")try{$n.onCommitFiberUnmount(Vl,n)}catch{}switch(n.tag){case 5:Ht||cs(n,e);case 6:var i=Ut,r=Nn;Ut=null,Si(t,e,n),Ut=i,Nn=r,Ut!==null&&(Nn?(t=Ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ut.removeChild(n.stateNode));break;case 18:Ut!==null&&(Nn?(t=Ut,n=n.stateNode,t.nodeType===8?Pc(t.parentNode,n):t.nodeType===1&&Pc(t,n),wa(t)):Pc(Ut,n.stateNode));break;case 4:i=Ut,r=Nn,Ut=n.stateNode.containerInfo,Nn=!0,Si(t,e,n),Ut=i,Nn=r;break;case 0:case 11:case 14:case 15:if(!Ht&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&sd(n,e,a),r=r.next}while(r!==i)}Si(t,e,n);break;case 1:if(!Ht&&(cs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){pt(n,e,o)}Si(t,e,n);break;case 21:Si(t,e,n);break;case 22:n.mode&1?(Ht=(i=Ht)||n.memoizedState!==null,Si(t,e,n),Ht=i):Si(t,e,n);break;default:Si(t,e,n)}}function vp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ey),e.forEach(function(i){var r=Dy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Cn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Ut=o.stateNode,Nn=!1;break e;case 3:Ut=o.stateNode.containerInfo,Nn=!0;break e;case 4:Ut=o.stateNode.containerInfo,Nn=!0;break e}o=o.return}if(Ut===null)throw Error(ie(160));Zv(s,a,r),Ut=null,Nn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){pt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Qv(e,t),e=e.sibling}function Qv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Cn(e,t),Hn(t),i&4){try{fa(3,t,t.return),Kl(3,t)}catch(x){pt(t,t.return,x)}try{fa(5,t,t.return)}catch(x){pt(t,t.return,x)}}break;case 1:Cn(e,t),Hn(t),i&512&&n!==null&&cs(n,n.return);break;case 5:if(Cn(e,t),Hn(t),i&512&&n!==null&&cs(n,n.return),t.flags&32){var r=t.stateNode;try{ya(r,"")}catch(x){pt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&yg(r,s),Lu(o,a);var c=Lu(o,s);for(a=0;a<l.length;a+=2){var u=l[a],d=l[a+1];u==="style"?Tg(r,d):u==="dangerouslySetInnerHTML"?Eg(r,d):u==="children"?ya(r,d):sh(r,u,d,c)}switch(o){case"input":Au(r,s);break;case"textarea":Sg(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?fs(r,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?fs(r,!!s.multiple,s.defaultValue,!0):fs(r,!!s.multiple,s.multiple?[]:"",!1))}r[ba]=s}catch(x){pt(t,t.return,x)}}break;case 6:if(Cn(e,t),Hn(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){pt(t,t.return,x)}}break;case 3:if(Cn(e,t),Hn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{wa(e.containerInfo)}catch(x){pt(t,t.return,x)}break;case 4:Cn(e,t),Hn(t);break;case 13:Cn(e,t),Hn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(kh=gt())),i&4&&vp(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Ht=(c=Ht)||u,Cn(e,t),Ht=c):Cn(e,t),Hn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(me=t,u=t.child;u!==null;){for(d=me=u;me!==null;){switch(f=me,g=f.child,f.tag){case 0:case 11:case 14:case 15:fa(4,f,f.return);break;case 1:cs(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){pt(i,n,x)}}break;case 5:cs(f,f.return);break;case 22:if(f.memoizedState!==null){xp(d);continue}}g!==null?(g.return=f,me=g):xp(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=wg("display",a))}catch(x){pt(t,t.return,x)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){pt(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Cn(e,t),Hn(t),i&4&&vp(t);break;case 21:break;default:Cn(e,t),Hn(t)}}function Hn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Kv(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ya(r,""),i.flags&=-33);var s=gp(t);ld(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=gp(t);od(t,o,a);break;default:throw Error(ie(161))}}catch(l){pt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ty(t,e,n){me=t,Jv(t)}function Jv(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||go;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Ht;o=go;var c=Ht;if(go=a,(Ht=l)&&!c)for(me=r;me!==null;)a=me,l=a.child,a.tag===22&&a.memoizedState!==null?yp(r):l!==null?(l.return=a,me=l):yp(r);for(;s!==null;)me=s,Jv(s),s=s.sibling;me=r,go=o,Ht=c}_p(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):_p(t)}}function _p(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ht||Kl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ht)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Pn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&np(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}np(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&wa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Ht||e.flags&512&&ad(e)}catch(f){pt(e,e.return,f)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function xp(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function yp(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Kl(4,e)}catch(l){pt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){pt(e,r,l)}}var s=e.return;try{ad(e)}catch(l){pt(e,s,l)}break;case 5:var a=e.return;try{ad(e)}catch(l){pt(e,a,l)}}}catch(l){pt(e,e.return,l)}if(e===t){me=null;break}var o=e.sibling;if(o!==null){o.return=e.return,me=o;break}me=e.return}}var Cy=Math.ceil,Al=xi.ReactCurrentDispatcher,Fh=xi.ReactCurrentOwner,Mn=xi.ReactCurrentBatchConfig,We=0,Pt=null,St=null,It=0,cn=0,us=Zi(0),Et=0,Ia=null,Tr=0,Zl=0,Oh=0,pa=null,Kt=null,kh=0,Rs=1/0,ri=null,Rl=!1,cd=null,Hi=null,vo=!1,Ui=null,bl=0,ma=0,ud=null,Jo=-1,el=0;function Xt(){return We&6?gt():Jo!==-1?Jo:Jo=gt()}function Vi(t){return t.mode&1?We&2&&It!==0?It&-It:cy.transition!==null?(el===0&&(el=Og()),el):(t=et,t!==0||(t=window.event,t=t===void 0?16:jg(t.type)),t):1}function kn(t,e,n,i){if(50<ma)throw ma=0,ud=null,Error(ie(185));Ba(t,n,i),(!(We&2)||t!==Pt)&&(t===Pt&&(!(We&2)&&(Zl|=n),Et===4&&Ni(t,It)),tn(t,i),n===1&&We===0&&!(e.mode&1)&&(Rs=gt()+500,ql&&Qi()))}function tn(t,e){var n=t.callbackNode;cx(t,e);var i=hl(t,t===Pt?It:0);if(i===0)n!==null&&bf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&bf(n),e===1)t.tag===0?ly(Sp.bind(null,t)):cv(Sp.bind(null,t)),ry(function(){!(We&6)&&Qi()}),n=null;else{switch(kg(i)){case 1:n=uh;break;case 4:n=Ig;break;case 16:n=dl;break;case 536870912:n=Fg;break;default:n=dl}n=o0(n,e0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function e0(t,e){if(Jo=-1,el=0,We&6)throw Error(ie(327));var n=t.callbackNode;if(_s()&&t.callbackNode!==n)return null;var i=hl(t,t===Pt?It:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Pl(t,i);else{e=i;var r=We;We|=2;var s=n0();(Pt!==t||It!==e)&&(ri=null,Rs=gt()+500,xr(t,e));do try{by();break}catch(o){t0(t,o)}while(!0);Eh(),Al.current=s,We=r,St!==null?e=0:(Pt=null,It=0,e=Et)}if(e!==0){if(e===2&&(r=Ou(t),r!==0&&(i=r,e=dd(t,r))),e===1)throw n=Ia,xr(t,0),Ni(t,i),tn(t,gt()),n;if(e===6)Ni(t,i);else{if(r=t.current.alternate,!(i&30)&&!Ay(r)&&(e=Pl(t,i),e===2&&(s=Ou(t),s!==0&&(i=s,e=dd(t,s))),e===1))throw n=Ia,xr(t,0),Ni(t,i),tn(t,gt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:cr(t,Kt,ri);break;case 3:if(Ni(t,i),(i&130023424)===i&&(e=kh+500-gt(),10<e)){if(hl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Xt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Wu(cr.bind(null,t,Kt,ri),e);break}cr(t,Kt,ri);break;case 4:if(Ni(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-On(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=gt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Cy(i/1960))-i,10<i){t.timeoutHandle=Wu(cr.bind(null,t,Kt,ri),i);break}cr(t,Kt,ri);break;case 5:cr(t,Kt,ri);break;default:throw Error(ie(329))}}}return tn(t,gt()),t.callbackNode===n?e0.bind(null,t):null}function dd(t,e){var n=pa;return t.current.memoizedState.isDehydrated&&(xr(t,e).flags|=256),t=Pl(t,e),t!==2&&(e=Kt,Kt=n,e!==null&&hd(e)),t}function hd(t){Kt===null?Kt=t:Kt.push.apply(Kt,t)}function Ay(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!zn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ni(t,e){for(e&=~Oh,e&=~Zl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-On(e),i=1<<n;t[n]=-1,e&=~i}}function Sp(t){if(We&6)throw Error(ie(327));_s();var e=hl(t,0);if(!(e&1))return tn(t,gt()),null;var n=Pl(t,e);if(t.tag!==0&&n===2){var i=Ou(t);i!==0&&(e=i,n=dd(t,i))}if(n===1)throw n=Ia,xr(t,0),Ni(t,e),tn(t,gt()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,cr(t,Kt,ri),tn(t,gt()),null}function zh(t,e){var n=We;We|=1;try{return t(e)}finally{We=n,We===0&&(Rs=gt()+500,ql&&Qi())}}function Cr(t){Ui!==null&&Ui.tag===0&&!(We&6)&&_s();var e=We;We|=1;var n=Mn.transition,i=et;try{if(Mn.transition=null,et=1,t)return t()}finally{et=i,Mn.transition=n,We=e,!(We&6)&&Qi()}}function Bh(){cn=us.current,st(us)}function xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,iy(n)),St!==null)for(n=St.return;n!==null;){var i=n;switch(yh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&vl();break;case 3:Cs(),st(Jt),st(Vt),bh();break;case 5:Rh(i);break;case 4:Cs();break;case 13:st(lt);break;case 19:st(lt);break;case 10:wh(i.type._context);break;case 22:case 23:Bh()}n=n.return}if(Pt=t,St=t=Gi(t.current,null),It=cn=e,Et=0,Ia=null,Oh=Zl=Tr=0,Kt=pa=null,mr!==null){for(e=0;e<mr.length;e++)if(n=mr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}mr=null}return t}function t0(t,e){do{var n=St;try{if(Eh(),Ko.current=Cl,Tl){for(var i=ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Tl=!1}if(wr=0,Rt=Mt=ct=null,ha=!1,La=0,Fh.current=null,n===null||n.return===null){Et=1,Ia=e,St=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=It,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=o,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var g=lp(a);if(g!==null){g.flags&=-257,cp(g,a,o,s,e),g.mode&1&&op(s,c,e),e=g,l=c;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){op(s,c,e),Hh();break e}l=Error(ie(426))}}else if(at&&o.mode&1){var m=lp(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),cp(m,a,o,s,e),Sh(As(l,o));break e}}s=l=As(l,o),Et!==4&&(Et=2),pa===null?pa=[s]:pa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=kv(s,l,e);tp(s,h);break e;case 1:o=l;var y=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Hi===null||!Hi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=zv(s,o,e);tp(s,S);break e}}s=s.return}while(s!==null)}r0(n)}catch(b){e=b,St===n&&n!==null&&(St=n=n.return);continue}break}while(!0)}function n0(){var t=Al.current;return Al.current=Cl,t===null?Cl:t}function Hh(){(Et===0||Et===3||Et===2)&&(Et=4),Pt===null||!(Tr&268435455)&&!(Zl&268435455)||Ni(Pt,It)}function Pl(t,e){var n=We;We|=2;var i=n0();(Pt!==t||It!==e)&&(ri=null,xr(t,e));do try{Ry();break}catch(r){t0(t,r)}while(!0);if(Eh(),We=n,Al.current=i,St!==null)throw Error(ie(261));return Pt=null,It=0,Et}function Ry(){for(;St!==null;)i0(St)}function by(){for(;St!==null&&!ex();)i0(St)}function i0(t){var e=a0(t.alternate,t,cn);t.memoizedProps=t.pendingProps,e===null?r0(t):St=e,Fh.current=null}function r0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=My(n,e),n!==null){n.flags&=32767,St=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Et=6,St=null;return}}else if(n=Sy(n,e,cn),n!==null){St=n;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);Et===0&&(Et=5)}function cr(t,e,n){var i=et,r=Mn.transition;try{Mn.transition=null,et=1,Py(t,e,n,i)}finally{Mn.transition=r,et=i}return null}function Py(t,e,n,i){do _s();while(Ui!==null);if(We&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ux(t,s),t===Pt&&(St=Pt=null,It=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vo||(vo=!0,o0(dl,function(){return _s(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Mn.transition,Mn.transition=null;var a=et;et=1;var o=We;We|=4,Fh.current=null,wy(t,n),Qv(n,t),Kx(Gu),fl=!!Vu,Gu=Vu=null,t.current=n,Ty(n),tx(),We=o,et=a,Mn.transition=s}else t.current=n;if(vo&&(vo=!1,Ui=t,bl=r),s=t.pendingLanes,s===0&&(Hi=null),rx(n.stateNode),tn(t,gt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Rl)throw Rl=!1,t=cd,cd=null,t;return bl&1&&t.tag!==0&&_s(),s=t.pendingLanes,s&1?t===ud?ma++:(ma=0,ud=t):ma=0,Qi(),null}function _s(){if(Ui!==null){var t=kg(bl),e=Mn.transition,n=et;try{if(Mn.transition=null,et=16>t?16:t,Ui===null)var i=!1;else{if(t=Ui,Ui=null,bl=0,We&6)throw Error(ie(331));var r=We;for(We|=4,me=t.current;me!==null;){var s=me,a=s.child;if(me.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(me=c;me!==null;){var u=me;switch(u.tag){case 0:case 11:case 15:fa(8,u,s)}var d=u.child;if(d!==null)d.return=u,me=d;else for(;me!==null;){u=me;var f=u.sibling,g=u.return;if(Yv(u),u===c){me=null;break}if(f!==null){f.return=g,me=f;break}me=g}}}var _=s.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}me=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,me=a;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:fa(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,me=h;break e}me=s.return}}var y=t.current;for(me=y;me!==null;){a=me;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,me=v;else e:for(a=y;me!==null;){if(o=me,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Kl(9,o)}}catch(b){pt(o,o.return,b)}if(o===a){me=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,me=S;break e}me=o.return}}if(We=r,Qi(),$n&&typeof $n.onPostCommitFiberRoot=="function")try{$n.onPostCommitFiberRoot(Vl,t)}catch{}i=!0}return i}finally{et=n,Mn.transition=e}}return!1}function Mp(t,e,n){e=As(n,e),e=kv(t,e,1),t=Bi(t,e,1),e=Xt(),t!==null&&(Ba(t,1,e),tn(t,e))}function pt(t,e,n){if(t.tag===3)Mp(t,t,n);else for(;e!==null;){if(e.tag===3){Mp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Hi===null||!Hi.has(i))){t=As(n,t),t=zv(e,t,1),e=Bi(e,t,1),t=Xt(),e!==null&&(Ba(e,1,t),tn(e,t));break}}e=e.return}}function Ny(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Xt(),t.pingedLanes|=t.suspendedLanes&n,Pt===t&&(It&n)===n&&(Et===4||Et===3&&(It&130023424)===It&&500>gt()-kh?xr(t,0):Oh|=n),tn(t,e)}function s0(t,e){e===0&&(t.mode&1?(e=ao,ao<<=1,!(ao&130023424)&&(ao=4194304)):e=1);var n=Xt();t=pi(t,e),t!==null&&(Ba(t,e,n),tn(t,n))}function Ly(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),s0(t,n)}function Dy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),s0(t,n)}var a0;a0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Jt.current)Qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Qt=!1,yy(t,e,n);Qt=!!(t.flags&131072)}else Qt=!1,at&&e.flags&1048576&&uv(e,yl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Qo(t,e),t=e.pendingProps;var r=Es(e,Vt.current);vs(e,n),r=Nh(null,e,i,t,r,n);var s=Lh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,en(i)?(s=!0,_l(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ch(e),r.updater=Yl,e.stateNode=r,r._reactInternals=e,Qu(e,i,t,n),e=td(null,e,i,!0,s,n)):(e.tag=0,at&&s&&xh(e),jt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Qo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Iy(i),t=Pn(i,t),r){case 0:e=ed(null,e,i,t,n);break e;case 1:e=hp(null,e,i,t,n);break e;case 11:e=up(null,e,i,t,n);break e;case 14:e=dp(null,e,i,Pn(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),ed(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),hp(t,e,i,r,n);case 3:e:{if(Gv(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,gv(t,e),El(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=As(Error(ie(423)),e),e=fp(t,e,i,n,r);break e}else if(i!==r){r=As(Error(ie(424)),e),e=fp(t,e,i,n,r);break e}else for(un=zi(e.stateNode.containerInfo.firstChild),dn=e,at=!0,Ln=null,n=pv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ws(),i===r){e=mi(t,e,n);break e}jt(t,e,i,n)}e=e.child}return e;case 5:return vv(e),t===null&&Yu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,ju(i,r)?a=null:s!==null&&ju(i,s)&&(e.flags|=32),Vv(t,e),jt(t,e,a,n),e.child;case 6:return t===null&&Yu(e),null;case 13:return jv(t,e,n);case 4:return Ah(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ts(e,null,i,n):jt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),up(t,e,i,r,n);case 7:return jt(t,e,e.pendingProps,n),e.child;case 8:return jt(t,e,e.pendingProps.children,n),e.child;case 12:return jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,nt(Sl,i._currentValue),i._currentValue=a,s!==null)if(zn(s.value,a)){if(s.children===r.children&&!Jt.current){e=mi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=di(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ku(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ie(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Ku(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}jt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,vs(e,n),r=En(r),i=i(r),e.flags|=1,jt(t,e,i,n),e.child;case 14:return i=e.type,r=Pn(i,e.pendingProps),r=Pn(i.type,r),dp(t,e,i,r,n);case 15:return Bv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),Qo(t,e),e.tag=1,en(i)?(t=!0,_l(e)):t=!1,vs(e,n),Ov(e,i,r),Qu(e,i,r,n),td(null,e,i,!0,t,n);case 19:return Wv(t,e,n);case 22:return Hv(t,e,n)}throw Error(ie(156,e.tag))};function o0(t,e){return Ug(t,e)}function Uy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(t,e,n,i){return new Uy(t,e,n,i)}function Vh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Iy(t){if(typeof t=="function")return Vh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===oh)return 11;if(t===lh)return 14}return 2}function Gi(t,e){var n=t.alternate;return n===null?(n=yn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function tl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Vh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case es:return yr(n.children,r,s,e);case ah:a=8,r|=8;break;case Mu:return t=yn(12,n,e,r|2),t.elementType=Mu,t.lanes=s,t;case Eu:return t=yn(13,n,e,r),t.elementType=Eu,t.lanes=s,t;case wu:return t=yn(19,n,e,r),t.elementType=wu,t.lanes=s,t;case vg:return Ql(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case mg:a=10;break e;case gg:a=9;break e;case oh:a=11;break e;case lh:a=14;break e;case Ri:a=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=yn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function yr(t,e,n,i){return t=yn(7,t,i,e),t.lanes=n,t}function Ql(t,e,n,i){return t=yn(22,t,i,e),t.elementType=vg,t.lanes=n,t.stateNode={isHidden:!1},t}function kc(t,e,n){return t=yn(6,t,null,e),t.lanes=n,t}function zc(t,e,n){return e=yn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Fy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xc(0),this.expirationTimes=xc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Gh(t,e,n,i,r,s,a,o,l){return t=new Fy(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=yn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ch(s),t}function Oy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function l0(t){if(!t)return $i;t=t._reactInternals;e:{if(Pr(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(en(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(en(n))return lv(t,n,e)}return e}function c0(t,e,n,i,r,s,a,o,l){return t=Gh(n,i,!0,t,r,s,a,o,l),t.context=l0(null),n=t.current,i=Xt(),r=Vi(n),s=di(i,r),s.callback=e??null,Bi(n,s,r),t.current.lanes=r,Ba(t,r,i),tn(t,i),t}function Jl(t,e,n,i){var r=e.current,s=Xt(),a=Vi(r);return n=l0(n),e.context===null?e.context=n:e.pendingContext=n,e=di(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Bi(r,e,a),t!==null&&(kn(t,r,a,s),Yo(t,r,a)),a}function Nl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ep(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function jh(t,e){Ep(t,e),(t=t.alternate)&&Ep(t,e)}function ky(){return null}var u0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wh(t){this._internalRoot=t}ec.prototype.render=Wh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));Jl(t,e,null,null)};ec.prototype.unmount=Wh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Cr(function(){Jl(null,t,null,null)}),e[fi]=null}};function ec(t){this._internalRoot=t}ec.prototype.unstable_scheduleHydration=function(t){if(t){var e=Hg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Pi.length&&e!==0&&e<Pi[n].priority;n++);Pi.splice(n,0,t),n===0&&Gg(t)}};function Xh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function tc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function wp(){}function zy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Nl(a);s.call(c)}}var a=c0(e,i,t,0,null,!1,!1,"",wp);return t._reactRootContainer=a,t[fi]=a.current,Aa(t.nodeType===8?t.parentNode:t),Cr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Nl(l);o.call(c)}}var l=Gh(t,0,!1,null,null,!1,!1,"",wp);return t._reactRootContainer=l,t[fi]=l.current,Aa(t.nodeType===8?t.parentNode:t),Cr(function(){Jl(e,l,n,i)}),l}function nc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Nl(a);o.call(l)}}Jl(e,a,t,r)}else a=zy(n,e,t,r,i);return Nl(a)}zg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ra(e.pendingLanes);n!==0&&(dh(e,n|1),tn(e,gt()),!(We&6)&&(Rs=gt()+500,Qi()))}break;case 13:Cr(function(){var i=pi(t,1);if(i!==null){var r=Xt();kn(i,t,1,r)}}),jh(t,1)}};hh=function(t){if(t.tag===13){var e=pi(t,134217728);if(e!==null){var n=Xt();kn(e,t,134217728,n)}jh(t,134217728)}};Bg=function(t){if(t.tag===13){var e=Vi(t),n=pi(t,e);if(n!==null){var i=Xt();kn(n,t,e,i)}jh(t,e)}};Hg=function(){return et};Vg=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};Uu=function(t,e,n){switch(e){case"input":if(Au(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Xl(i);if(!r)throw Error(ie(90));xg(i),Au(i,r)}}}break;case"textarea":Sg(t,n);break;case"select":e=n.value,e!=null&&fs(t,!!n.multiple,e,!1)}};Rg=zh;bg=Cr;var By={usingClientEntryPoint:!1,Events:[Va,rs,Xl,Cg,Ag,zh]},$s={findFiberByHostInstance:pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hy={bundleType:$s.bundleType,version:$s.version,rendererPackageName:$s.rendererPackageName,rendererConfig:$s.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Lg(t),t===null?null:t.stateNode},findFiberByHostInstance:$s.findFiberByHostInstance||ky,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_o.isDisabled&&_o.supportsFiber)try{Vl=_o.inject(Hy),$n=_o}catch{}}pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=By;pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xh(e))throw Error(ie(200));return Oy(t,e,null,n)};pn.createRoot=function(t,e){if(!Xh(t))throw Error(ie(299));var n=!1,i="",r=u0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Gh(t,1,!1,null,null,n,!1,i,r),t[fi]=e.current,Aa(t.nodeType===8?t.parentNode:t),new Wh(e)};pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=Lg(e),t=t===null?null:t.stateNode,t};pn.flushSync=function(t){return Cr(t)};pn.hydrate=function(t,e,n){if(!tc(e))throw Error(ie(200));return nc(null,t,e,!0,n)};pn.hydrateRoot=function(t,e,n){if(!Xh(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=u0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=c0(e,null,t,1,n??null,r,!1,s,a),t[fi]=e.current,Aa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ec(e)};pn.render=function(t,e,n){if(!tc(e))throw Error(ie(200));return nc(null,t,e,!1,n)};pn.unmountComponentAtNode=function(t){if(!tc(t))throw Error(ie(40));return t._reactRootContainer?(Cr(function(){nc(null,null,t,!1,function(){t._reactRootContainer=null,t[fi]=null})}),!0):!1};pn.unstable_batchedUpdates=zh;pn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!tc(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return nc(t,e,n,!1,i)};pn.version="18.3.1-next-f1338f8080-20240426";function d0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d0)}catch(t){console.error(t)}}d0(),dg.exports=pn;var Vy=dg.exports,Tp=Vy;yu.createRoot=Tp.createRoot,yu.hydrateRoot=Tp.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fa(){return Fa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Fa.apply(this,arguments)}var Ii;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ii||(Ii={}));const Cp="popstate";function Gy(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:a,hash:o}=i.location;return fd("",{pathname:s,search:a,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:Ll(r)}return Wy(e,n,null,t)}function mt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function qh(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function jy(){return Math.random().toString(36).substr(2,8)}function Ap(t,e){return{usr:t.state,key:t.key,idx:e}}function fd(t,e,n,i){return n===void 0&&(n=null),Fa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ks(e):e,{state:n,key:e&&e.key||i||jy()})}function Ll(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function ks(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function Wy(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=Ii.Pop,l=null,c=u();c==null&&(c=0,a.replaceState(Fa({},a.state,{idx:c}),""));function u(){return(a.state||{idx:null}).idx}function d(){o=Ii.Pop;let m=u(),h=m==null?null:m-c;c=m,l&&l({action:o,location:x.location,delta:h})}function f(m,h){o=Ii.Push;let y=fd(x.location,m,h);c=u()+1;let v=Ap(y,c),S=x.createHref(y);try{a.pushState(v,"",S)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;r.location.assign(S)}s&&l&&l({action:o,location:x.location,delta:1})}function g(m,h){o=Ii.Replace;let y=fd(x.location,m,h);c=u();let v=Ap(y,c),S=x.createHref(y);a.replaceState(v,"",S),s&&l&&l({action:o,location:x.location,delta:0})}function _(m){let h=r.location.origin!=="null"?r.location.origin:r.location.href,y=typeof m=="string"?m:Ll(m);return y=y.replace(/ $/,"%20"),mt(h,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,h)}let x={get action(){return o},get location(){return t(r,a)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Cp,d),l=m,()=>{r.removeEventListener(Cp,d),l=null}},createHref(m){return e(r,m)},createURL:_,encodeLocation(m){let h=_(m);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:g,go(m){return a.go(m)}};return x}var Rp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Rp||(Rp={}));function Xy(t,e,n){return n===void 0&&(n="/"),qy(t,e,n)}function qy(t,e,n,i){let r=typeof e=="string"?ks(e):e,s=bs(r.pathname||"/",n);if(s==null)return null;let a=h0(t);$y(a);let o=null;for(let l=0;o==null&&l<a.length;++l){let c=sS(s);o=iS(a[l],c)}return o}function h0(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(mt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=ji([i,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(mt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),h0(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:tS(c,s.index),routesMeta:u})};return t.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of f0(s.path))r(s,a,l)}),e}function f0(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=f0(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function $y(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:nS(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const Yy=/^:[\w-]+$/,Ky=3,Zy=2,Qy=1,Jy=10,eS=-2,bp=t=>t==="*";function tS(t,e){let n=t.split("/"),i=n.length;return n.some(bp)&&(i+=eS),e&&(i+=Zy),n.filter(r=>!bp(r)).reduce((r,s)=>r+(Yy.test(s)?Ky:s===""?Qy:Jy),i)}function nS(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function iS(t,e,n){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,u=s==="/"?e:e.slice(s.length)||"/",d=pd({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),f=l.route;if(!d)return null;Object.assign(r,d.params),a.push({params:r,pathname:ji([s,d.pathname]),pathnameBase:uS(ji([s,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(s=ji([s,d.pathnameBase]))}return a}function pd(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=rS(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((c,u,d)=>{let{paramName:f,isOptional:g}=u;if(f==="*"){let x=o[d]||"";a=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const _=o[d];return g&&!_?c[f]=void 0:c[f]=(_||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:a,pattern:t}}function rS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),qh(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function sS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return qh(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function bs(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const aS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,oS=t=>aS.test(t);function lS(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?ks(t):t,s;if(n)if(oS(n))s=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),qh(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?s=Pp(n.substring(1),"/"):s=Pp(n,e)}else s=e;return{pathname:s,search:dS(i),hash:hS(r)}}function Pp(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Bc(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function cS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function p0(t,e){let n=cS(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function m0(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=ks(t):(r=Fa({},t),mt(!r.pathname||!r.pathname.includes("?"),Bc("?","pathname","search",r)),mt(!r.pathname||!r.pathname.includes("#"),Bc("#","pathname","hash",r)),mt(!r.search||!r.search.includes("#"),Bc("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let d=e.length-1;if(!i&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),d-=1;r.pathname=f.join("/")}o=d>=0?e[d]:"/"}let l=lS(r,o),c=a&&a!=="/"&&a.endsWith("/"),u=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const ji=t=>t.join("/").replace(/\/\/+/g,"/"),uS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),dS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,hS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function fS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const g0=["post","put","patch","delete"];new Set(g0);const pS=["get",...g0];new Set(pS);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oa(){return Oa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Oa.apply(this,arguments)}const ic=O.createContext(null),v0=O.createContext(null),Ji=O.createContext(null),rc=O.createContext(null),Nr=O.createContext({outlet:null,matches:[],isDataRoute:!1}),_0=O.createContext(null);function mS(t,e){let{relative:n}=e===void 0?{}:e;ja()||mt(!1);let{basename:i,navigator:r}=O.useContext(Ji),{hash:s,pathname:a,search:o}=sc(t,{relative:n}),l=a;return i!=="/"&&(l=a==="/"?i:ji([i,a])),r.createHref({pathname:l,search:o,hash:s})}function ja(){return O.useContext(rc)!=null}function Lr(){return ja()||mt(!1),O.useContext(rc).location}function x0(t){O.useContext(Ji).static||O.useLayoutEffect(t)}function y0(){let{isDataRoute:t}=O.useContext(Nr);return t?RS():gS()}function gS(){ja()||mt(!1);let t=O.useContext(ic),{basename:e,future:n,navigator:i}=O.useContext(Ji),{matches:r}=O.useContext(Nr),{pathname:s}=Lr(),a=JSON.stringify(p0(r,n.v7_relativeSplatPath)),o=O.useRef(!1);return x0(()=>{o.current=!0}),O.useCallback(function(c,u){if(u===void 0&&(u={}),!o.current)return;if(typeof c=="number"){i.go(c);return}let d=m0(c,JSON.parse(a),s,u.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:ji([e,d.pathname])),(u.replace?i.replace:i.push)(d,u.state,u)},[e,i,a,s,t])}function sc(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=O.useContext(Ji),{matches:r}=O.useContext(Nr),{pathname:s}=Lr(),a=JSON.stringify(p0(r,i.v7_relativeSplatPath));return O.useMemo(()=>m0(t,JSON.parse(a),s,n==="path"),[t,a,s,n])}function vS(t,e){return _S(t,e)}function _S(t,e,n,i){ja()||mt(!1);let{navigator:r}=O.useContext(Ji),{matches:s}=O.useContext(Nr),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=Lr(),u;if(e){var d;let m=typeof e=="string"?ks(e):e;l==="/"||(d=m.pathname)!=null&&d.startsWith(l)||mt(!1),u=m}else u=c;let f=u.pathname||"/",g=f;if(l!=="/"){let m=l.replace(/^\//,"").split("/");g="/"+f.replace(/^\//,"").split("/").slice(m.length).join("/")}let _=Xy(t,{pathname:g}),x=ES(_&&_.map(m=>Object.assign({},m,{params:Object.assign({},o,m.params),pathname:ji([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:ji([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,n,i);return e&&x?O.createElement(rc.Provider,{value:{location:Oa({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ii.Pop}},x):x}function xS(){let t=AS(),e=fS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:r},n):null,null)}const yS=O.createElement(xS,null);class SS extends O.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?O.createElement(Nr.Provider,{value:this.props.routeContext},O.createElement(_0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function MS(t){let{routeContext:e,match:n,children:i}=t,r=O.useContext(ic);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(Nr.Provider,{value:e},i)}function ES(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let u=a.findIndex(d=>d.route.id&&(o==null?void 0:o[d.route.id])!==void 0);u>=0||mt(!1),a=a.slice(0,Math.min(a.length,u+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let u=0;u<a.length;u++){let d=a[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=u),d.route.id){let{loaderData:f,errors:g}=n,_=d.route.loader&&f[d.route.id]===void 0&&(!g||g[d.route.id]===void 0);if(d.route.lazy||_){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((u,d,f)=>{let g,_=!1,x=null,m=null;n&&(g=o&&d.route.id?o[d.route.id]:void 0,x=d.route.errorElement||yS,l&&(c<0&&f===0?(bS("route-fallback"),_=!0,m=null):c===f&&(_=!0,m=d.route.hydrateFallbackElement||null)));let h=e.concat(a.slice(0,f+1)),y=()=>{let v;return g?v=x:_?v=m:d.route.Component?v=O.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=u,O.createElement(MS,{match:d,routeContext:{outlet:u,matches:h,isDataRoute:n!=null},children:v})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?O.createElement(SS,{location:n.location,revalidation:n.revalidation,component:x,error:g,children:y(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):y()},null)}var S0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(S0||{}),M0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(M0||{});function wS(t){let e=O.useContext(ic);return e||mt(!1),e}function TS(t){let e=O.useContext(v0);return e||mt(!1),e}function CS(t){let e=O.useContext(Nr);return e||mt(!1),e}function E0(t){let e=CS(),n=e.matches[e.matches.length-1];return n.route.id||mt(!1),n.route.id}function AS(){var t;let e=O.useContext(_0),n=TS(),i=E0();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function RS(){let{router:t}=wS(S0.UseNavigateStable),e=E0(M0.UseNavigateStable),n=O.useRef(!1);return x0(()=>{n.current=!0}),O.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Oa({fromRouteId:e},s)))},[t,e])}const Np={};function bS(t,e,n){Np[t]||(Np[t]=!0)}function PS(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Dt(t){mt(!1)}function NS(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Ii.Pop,navigator:s,static:a=!1,future:o}=t;ja()&&mt(!1);let l=e.replace(/^\/*/,"/"),c=O.useMemo(()=>({basename:l,navigator:s,static:a,future:Oa({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);typeof i=="string"&&(i=ks(i));let{pathname:u="/",search:d="",hash:f="",state:g=null,key:_="default"}=i,x=O.useMemo(()=>{let m=bs(u,l);return m==null?null:{location:{pathname:m,search:d,hash:f,state:g,key:_},navigationType:r}},[l,u,d,f,g,_,r]);return x==null?null:O.createElement(Ji.Provider,{value:c},O.createElement(rc.Provider,{children:n,value:x}))}function LS(t){let{children:e,location:n}=t;return vS(md(e),n)}new Promise(()=>{});function md(t,e){e===void 0&&(e=[]);let n=[];return O.Children.forEach(t,(i,r)=>{if(!O.isValidElement(i))return;let s=[...e,r];if(i.type===O.Fragment){n.push.apply(n,md(i.props.children,s));return}i.type!==Dt&&mt(!1),!i.props.index||!i.props.children||mt(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=md(i.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dl(){return Dl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Dl.apply(this,arguments)}function w0(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function DS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function US(t,e){return t.button===0&&(!e||e==="_self")&&!DS(t)}const IS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],FS=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],OS="6";try{window.__reactRouterVersion=OS}catch{}const kS=O.createContext({isTransitioning:!1}),zS="startTransition",Lp=N_[zS];function BS(t){let{basename:e,children:n,future:i,window:r}=t,s=O.useRef();s.current==null&&(s.current=Gy({window:r,v5Compat:!0}));let a=s.current,[o,l]=O.useState({action:a.action,location:a.location}),{v7_startTransition:c}=i||{},u=O.useCallback(d=>{c&&Lp?Lp(()=>l(d)):l(d)},[l,c]);return O.useLayoutEffect(()=>a.listen(u),[a,u]),O.useEffect(()=>PS(i),[i]),O.createElement(NS,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:a,future:i})}const HS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",VS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wt=O.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:a,state:o,target:l,to:c,preventScrollReset:u,viewTransition:d}=e,f=w0(e,IS),{basename:g}=O.useContext(Ji),_,x=!1;if(typeof c=="string"&&VS.test(c)&&(_=c,HS))try{let v=new URL(window.location.href),S=c.startsWith("//")?new URL(v.protocol+c):new URL(c),b=bs(S.pathname,g);S.origin===v.origin&&b!=null?c=b+S.search+S.hash:x=!0}catch{}let m=mS(c,{relative:r}),h=WS(c,{replace:a,state:o,target:l,preventScrollReset:u,relative:r,viewTransition:d});function y(v){i&&i(v),v.defaultPrevented||h(v)}return O.createElement("a",Dl({},f,{href:_||m,onClick:x||s?i:y,ref:n,target:l}))}),GS=O.forwardRef(function(e,n){let{"aria-current":i="page",caseSensitive:r=!1,className:s="",end:a=!1,style:o,to:l,viewTransition:c,children:u}=e,d=w0(e,FS),f=sc(l,{relative:d.relative}),g=Lr(),_=O.useContext(v0),{navigator:x,basename:m}=O.useContext(Ji),h=_!=null&&XS(f)&&c===!0,y=x.encodeLocation?x.encodeLocation(f).pathname:f.pathname,v=g.pathname,S=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;r||(v=v.toLowerCase(),S=S?S.toLowerCase():null,y=y.toLowerCase()),S&&m&&(S=bs(S,m)||S);const b=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let C=v===y||!a&&v.startsWith(y)&&v.charAt(b)==="/",E=S!=null&&(S===y||!a&&S.startsWith(y)&&S.charAt(y.length)==="/"),P={isActive:C,isPending:E,isTransitioning:h},w=C?i:void 0,M;typeof s=="function"?M=s(P):M=[s,C?"active":null,E?"pending":null,h?"transitioning":null].filter(Boolean).join(" ");let R=typeof o=="function"?o(P):o;return O.createElement(Wt,Dl({},d,{"aria-current":w,className:M,ref:n,style:R,to:l,viewTransition:c}),typeof u=="function"?u(P):u)});var gd;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(gd||(gd={}));var Dp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Dp||(Dp={}));function jS(t){let e=O.useContext(ic);return e||mt(!1),e}function WS(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:a,viewTransition:o}=e===void 0?{}:e,l=y0(),c=Lr(),u=sc(t,{relative:a});return O.useCallback(d=>{if(US(d,n)){d.preventDefault();let f=i!==void 0?i:Ll(c)===Ll(u);l(t,{replace:f,state:r,preventScrollReset:s,relative:a,viewTransition:o})}},[c,l,u,i,r,n,t,s,a,o])}function XS(t,e){e===void 0&&(e={});let n=O.useContext(kS);n==null&&mt(!1);let{basename:i}=jS(gd.useViewTransitionState),r=sc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=bs(n.currentLocation.pathname,i)||n.currentLocation.pathname,a=bs(n.nextLocation.pathname,i)||n.nextLocation.pathname;return pd(r.pathname,a)!=null||pd(r.pathname,s)!=null}const Up=[{to:"/",label:"Home"},{to:"/hackathon",label:"CodeHunt Hackathon"},{to:"/workshops",label:"Workshops"},{to:"/kinetic-showdown",label:"Kinetic Showdown"},{to:"/esports",label:"eSports"},{to:"/open-mic",label:"Open Mic"},{to:"/culture",label:"Culture"},{to:"/gallery",label:"Gallery"},{to:"/team",label:"Team"}];function qS(){const t=Lr(),e=y0(),n=t.pathname==="/robo-race"?"/kinetic-showdown":t.pathname;return p.jsxs("header",{className:"site-header",children:[p.jsx("div",{className:"brand",children:p.jsx("img",{className:"logo-image",src:"/logo.png",alt:"Inertia logo"})}),p.jsx("nav",{className:"nav-links",children:Up.map(i=>p.jsx(GS,{to:i.to,className:({isActive:r})=>r?"nav-link nav-link-active":"nav-link",children:i.label},i.to))}),p.jsx("div",{className:"mobile-nav",children:p.jsx("select",{className:"mobile-nav-select","aria-label":"Select page",value:n,onChange:i=>e(i.target.value),children:Up.map(i=>p.jsx("option",{value:i.to,children:i.label},i.to))})}),p.jsx("div",{className:"header-cta",children:p.jsx(Wt,{className:"btn btn-primary",to:"/register",children:"Register Now"})})]})}function $S(){return p.jsxs("footer",{className:"site-footer",children:[p.jsxs("div",{className:"footer-grid",children:[p.jsxs("div",{children:[p.jsx("p",{className:"footer-title",children:"Inertia 2026"}),p.jsx("p",{className:"footer-text",children:"The annual festival of Jabalpur Engineering College. Build, compete, and celebrate innovation."})]}),p.jsxs("div",{children:[p.jsx("p",{className:"footer-title",children:"Contact"}),p.jsx("p",{className:"footer-text",children:"Jabalpur Engineering College, Jabalpur"}),p.jsx(Wt,{className:"btn btn-ghost",to:"/contact",children:"Contact Page"})]}),p.jsxs("div",{children:[p.jsx("p",{className:"footer-title",children:"Events"}),p.jsx("p",{className:"footer-text",children:"CodeHunt Hackathon, Workshops, Kinetic Showdown, eSports, Open Mic"}),p.jsx("p",{className:"footer-text",children:"Culture Fest and gallery highlights"})]})]}),p.jsx("div",{className:"footer-bottom",children:p.jsx("p",{children:"Made with ❤️ by Pavitra Durgesh Pandey"})})]})}function ga(t){let e=t[0],n=t[1],i=t[2];return Math.sqrt(e*e+n*n+i*i)}function vd(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function YS(t,e,n,i){return t[0]=e,t[1]=n,t[2]=i,t}function Ip(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t}function Fp(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t}function KS(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t[2]=e[2]*n[2],t}function ZS(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t[2]=e[2]/n[2],t}function Hc(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t}function QS(t,e){let n=e[0]-t[0],i=e[1]-t[1],r=e[2]-t[2];return Math.sqrt(n*n+i*i+r*r)}function JS(t,e){let n=e[0]-t[0],i=e[1]-t[1],r=e[2]-t[2];return n*n+i*i+r*r}function Op(t){let e=t[0],n=t[1],i=t[2];return e*e+n*n+i*i}function eM(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}function tM(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}function _d(t,e){let n=e[0],i=e[1],r=e[2],s=n*n+i*i+r*r;return s>0&&(s=1/Math.sqrt(s)),t[0]=e[0]*s,t[1]=e[1]*s,t[2]=e[2]*s,t}function T0(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function kp(t,e,n){let i=e[0],r=e[1],s=e[2],a=n[0],o=n[1],l=n[2];return t[0]=r*l-s*o,t[1]=s*a-i*l,t[2]=i*o-r*a,t}function nM(t,e,n,i){let r=e[0],s=e[1],a=e[2];return t[0]=r+i*(n[0]-r),t[1]=s+i*(n[1]-s),t[2]=a+i*(n[2]-a),t}function iM(t,e,n,i,r){const s=Math.exp(-i*r);let a=e[0],o=e[1],l=e[2];return t[0]=n[0]+(a-n[0])*s,t[1]=n[1]+(o-n[1])*s,t[2]=n[2]+(l-n[2])*s,t}function rM(t,e,n){let i=e[0],r=e[1],s=e[2],a=n[3]*i+n[7]*r+n[11]*s+n[15];return a=a||1,t[0]=(n[0]*i+n[4]*r+n[8]*s+n[12])/a,t[1]=(n[1]*i+n[5]*r+n[9]*s+n[13])/a,t[2]=(n[2]*i+n[6]*r+n[10]*s+n[14])/a,t}function sM(t,e,n){let i=e[0],r=e[1],s=e[2],a=n[3]*i+n[7]*r+n[11]*s+n[15];return a=a||1,t[0]=(n[0]*i+n[4]*r+n[8]*s)/a,t[1]=(n[1]*i+n[5]*r+n[9]*s)/a,t[2]=(n[2]*i+n[6]*r+n[10]*s)/a,t}function aM(t,e,n){let i=e[0],r=e[1],s=e[2];return t[0]=i*n[0]+r*n[3]+s*n[6],t[1]=i*n[1]+r*n[4]+s*n[7],t[2]=i*n[2]+r*n[5]+s*n[8],t}function oM(t,e,n){let i=e[0],r=e[1],s=e[2],a=n[0],o=n[1],l=n[2],c=n[3],u=o*s-l*r,d=l*i-a*s,f=a*r-o*i,g=o*f-l*d,_=l*u-a*f,x=a*d-o*u,m=c*2;return u*=m,d*=m,f*=m,g*=2,_*=2,x*=2,t[0]=i+u+g,t[1]=r+d+_,t[2]=s+f+x,t}const lM=function(){const t=[0,0,0],e=[0,0,0];return function(n,i){vd(t,n),vd(e,i),_d(t,t),_d(e,e);let r=T0(t,e);return r>1?0:r<-1?Math.PI:Math.acos(r)}}();function cM(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}class In extends Array{constructor(e=0,n=e,i=e){return super(e,n,i),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this[0]=e}set y(e){this[1]=e}set z(e){this[2]=e}set(e,n=e,i=e){return e.length?this.copy(e):(YS(this,e,n,i),this)}copy(e){return vd(this,e),this}add(e,n){return n?Ip(this,e,n):Ip(this,this,e),this}sub(e,n){return n?Fp(this,e,n):Fp(this,this,e),this}multiply(e){return e.length?KS(this,this,e):Hc(this,this,e),this}divide(e){return e.length?ZS(this,this,e):Hc(this,this,1/e),this}inverse(e=this){return tM(this,e),this}len(){return ga(this)}distance(e){return e?QS(this,e):ga(this)}squaredLen(){return Op(this)}squaredDistance(e){return e?JS(this,e):Op(this)}negate(e=this){return eM(this,e),this}cross(e,n){return n?kp(this,e,n):kp(this,this,e),this}scale(e){return Hc(this,this,e),this}normalize(){return _d(this,this),this}dot(e){return T0(this,e)}equals(e){return cM(this,e)}applyMatrix3(e){return aM(this,this,e),this}applyMatrix4(e){return rM(this,this,e),this}scaleRotateMatrix4(e){return sM(this,this,e),this}applyQuaternion(e){return oM(this,this,e),this}angle(e){return lM(this,e)}lerp(e,n){return nM(this,this,e,n),this}smoothLerp(e,n,i){return iM(this,this,e,n,i),this}clone(){return new In(this[0],this[1],this[2])}fromArray(e,n=0){return this[0]=e[n],this[1]=e[n+1],this[2]=e[n+2],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e}transformDirection(e){const n=this[0],i=this[1],r=this[2];return this[0]=e[0]*n+e[4]*i+e[8]*r,this[1]=e[1]*n+e[5]*i+e[9]*r,this[2]=e[2]*n+e[6]*i+e[10]*r,this.normalize()}}const zp=new In;let uM=1,dM=1,Bp=!1;class hM{constructor(e,n={}){e.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=e,this.attributes=n,this.id=uM++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let i in n)this.addAttribute(i,n[i])}addAttribute(e,n){if(this.attributes[e]=n,n.id=dM++,n.size=n.size||1,n.type=n.type||(n.data.constructor===Float32Array?this.gl.FLOAT:n.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),n.target=e==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,n.normalized=n.normalized||!1,n.stride=n.stride||0,n.offset=n.offset||0,n.count=n.count||(n.stride?n.data.byteLength/n.stride:n.data.length/n.size),n.divisor=n.instanced||0,n.needsUpdate=!1,n.usage=n.usage||this.gl.STATIC_DRAW,n.buffer||this.updateAttribute(n),n.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==n.count*n.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,n.count*n.divisor);this.instancedCount=n.count*n.divisor}else e==="index"?this.drawRange.count=n.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,n.count))}updateAttribute(e){const n=!e.buffer;n&&(e.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==e.buffer&&(this.gl.bindBuffer(e.target,e.buffer),this.glState.boundBuffer=e.buffer),n?this.gl.bufferData(e.target,e.data,e.usage):this.gl.bufferSubData(e.target,0,e.data),e.needsUpdate=!1}setIndex(e){this.addAttribute("index",e)}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}setInstancedCount(e){this.instancedCount=e}createVAO(e){this.VAOs[e.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.bindAttributes(e)}bindAttributes(e){e.attributeLocations.forEach((n,{name:i,type:r})=>{if(!this.attributes[i]){console.warn(`active attribute ${i} not being supplied`);return}const s=this.attributes[i];this.gl.bindBuffer(s.target,s.buffer),this.glState.boundBuffer=s.buffer;let a=1;r===35674&&(a=2),r===35675&&(a=3),r===35676&&(a=4);const o=s.size/a,l=a===1?0:a*a*4,c=a===1?0:a*4;for(let u=0;u<a;u++)this.gl.vertexAttribPointer(n+u,o,s.type,s.normalized,s.stride+l,s.offset+u*c),this.gl.enableVertexAttribArray(n+u),this.gl.renderer.vertexAttribDivisor(n+u,s.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:e,mode:n=this.gl.TRIANGLES}){var r;this.gl.renderer.currentGeometry!==`${this.id}_${e.attributeOrder}`&&(this.VAOs[e.attributeOrder]||this.createVAO(e),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${e.attributeOrder}`),e.attributeLocations.forEach((s,{name:a})=>{const o=this.attributes[a];o.needsUpdate&&this.updateAttribute(o)});let i=2;((r=this.attributes.index)==null?void 0:r.type)===this.gl.UNSIGNED_INT&&(i=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(n,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*i,this.instancedCount):this.gl.renderer.drawArraysInstanced(n,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(n,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*i):this.gl.drawArrays(n,this.drawRange.start,this.drawRange.count)}getPosition(){const e=this.attributes.position;if(e.data)return e;if(!Bp)return console.warn("No position buffer data found to compute bounds"),Bp=!0}computeBoundingBox(e){e||(e=this.getPosition());const n=e.data,i=e.size;this.bounds||(this.bounds={min:new In,max:new In,center:new In,scale:new In,radius:1/0});const r=this.bounds.min,s=this.bounds.max,a=this.bounds.center,o=this.bounds.scale;r.set(1/0),s.set(-1/0);for(let l=0,c=n.length;l<c;l+=i){const u=n[l],d=n[l+1],f=n[l+2];r.x=Math.min(u,r.x),r.y=Math.min(d,r.y),r.z=Math.min(f,r.z),s.x=Math.max(u,s.x),s.y=Math.max(d,s.y),s.z=Math.max(f,s.z)}o.sub(s,r),a.add(r,s).divide(2)}computeBoundingSphere(e){e||(e=this.getPosition());const n=e.data,i=e.size;this.bounds||this.computeBoundingBox(e);let r=0;for(let s=0,a=n.length;s<a;s+=i)zp.fromArray(n,s),r=Math.max(r,this.bounds.center.squaredDistance(zp));this.bounds.radius=Math.sqrt(r)}remove(){for(let e in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[e]),delete this.VAOs[e];for(let e in this.attributes)this.gl.deleteBuffer(this.attributes[e].buffer),delete this.attributes[e]}}let fM=1;const Hp={};class pM{constructor(e,{vertex:n,fragment:i,uniforms:r={},transparent:s=!1,cullFace:a=e.BACK,frontFace:o=e.CCW,depthTest:l=!0,depthWrite:c=!0,depthFunc:u=e.LEQUAL}={}){e.canvas||console.error("gl not passed as first argument to Program"),this.gl=e,this.uniforms=r,this.id=fM++,n||console.warn("vertex shader not supplied"),i||console.warn("fragment shader not supplied"),this.transparent=s,this.cullFace=a,this.frontFace=o,this.depthTest=l,this.depthWrite=c,this.depthFunc=u,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=e.createShader(e.VERTEX_SHADER),this.fragmentShader=e.createShader(e.FRAGMENT_SHADER),this.program=e.createProgram(),e.attachShader(this.program,this.vertexShader),e.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:n,fragment:i})}setShaders({vertex:e,fragment:n}){if(e&&(this.gl.shaderSource(this.vertexShader,e),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${Vp(e)}`)),n&&(this.gl.shaderSource(this.fragmentShader,n),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${Vp(n)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let i=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let a=0;a<i;a++){let o=this.gl.getActiveUniform(this.program,a);this.uniformLocations.set(o,this.gl.getUniformLocation(this.program,o.name));const l=o.name.match(/(\w+)/g);o.uniformName=l[0],o.nameComponents=l.slice(1)}this.attributeLocations=new Map;const r=[],s=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const o=this.gl.getActiveAttrib(this.program,a),l=this.gl.getAttribLocation(this.program,o.name);l!==-1&&(r[l]=o.name,this.attributeLocations.set(o,l))}this.attributeOrder=r.join("")}setBlendFunc(e,n,i,r){this.blendFunc.src=e,this.blendFunc.dst=n,this.blendFunc.srcAlpha=i,this.blendFunc.dstAlpha=r,e&&(this.transparent=!0)}setBlendEquation(e,n){this.blendEquation.modeRGB=e,this.blendEquation.modeAlpha=n}setStencilFunc(e,n,i){this.stencilRef=n,this.stencilFunc.func=e,this.stencilFunc.ref=n,this.stencilFunc.mask=i}setStencilOp(e,n,i){this.stencilOp.stencilFail=e,this.stencilOp.depthFail=n,this.stencilOp.depthPass=i}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:e=!1}={}){let n=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((r,s)=>{let a=this.uniforms[s.uniformName];for(const o of s.nameComponents){if(!a)break;if(o in a)a=a[o];else{if(Array.isArray(a.value))break;a=void 0;break}}if(!a)return Gp(`Active uniform ${s.name} has not been supplied`);if(a&&a.value===void 0)return Gp(`${s.name} uniform is missing a value parameter`);if(a.value.texture)return n=n+1,a.value.update(n),Vc(this.gl,s.type,r,n);if(a.value.length&&a.value[0].texture){const o=[];return a.value.forEach(l=>{n=n+1,l.update(n),o.push(n)}),Vc(this.gl,s.type,r,o)}Vc(this.gl,s.type,r,a.value)}),this.applyState(),e&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function Vc(t,e,n,i){i=i.length?mM(i):i;const r=t.renderer.state.uniformLocations.get(n);if(i.length)if(r===void 0||r.length!==i.length)t.renderer.state.uniformLocations.set(n,i.slice(0));else{if(gM(r,i))return;r.set?r.set(i):vM(r,i),t.renderer.state.uniformLocations.set(n,r)}else{if(r===i)return;t.renderer.state.uniformLocations.set(n,i)}switch(e){case 5126:return i.length?t.uniform1fv(n,i):t.uniform1f(n,i);case 35664:return t.uniform2fv(n,i);case 35665:return t.uniform3fv(n,i);case 35666:return t.uniform4fv(n,i);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return i.length?t.uniform1iv(n,i):t.uniform1i(n,i);case 35671:case 35667:return t.uniform2iv(n,i);case 35672:case 35668:return t.uniform3iv(n,i);case 35673:case 35669:return t.uniform4iv(n,i);case 35674:return t.uniformMatrix2fv(n,!1,i);case 35675:return t.uniformMatrix3fv(n,!1,i);case 35676:return t.uniformMatrix4fv(n,!1,i)}}function Vp(t){let e=t.split(`
`);for(let n=0;n<e.length;n++)e[n]=n+1+": "+e[n];return e.join(`
`)}function mM(t){const e=t.length,n=t[0].length;if(n===void 0)return t;const i=e*n;let r=Hp[i];r||(Hp[i]=r=new Float32Array(i));for(let s=0;s<e;s++)r.set(t[s],s*n);return r}function gM(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function vM(t,e){for(let n=0,i=t.length;n<i;n++)t[n]=e[n]}let Gc=0;function Gp(t){Gc>100||(console.warn(t),Gc++,Gc>100&&console.warn("More than 100 program warnings - stopping logs."))}const jc=new In;let _M=1;class xM{constructor({canvas:e=document.createElement("canvas"),width:n=300,height:i=150,dpr:r=1,alpha:s=!1,depth:a=!0,stencil:o=!1,antialias:l=!1,premultipliedAlpha:c=!1,preserveDrawingBuffer:u=!1,powerPreference:d="default",autoClear:f=!0,webgl:g=2}={}){const _={alpha:s,depth:a,stencil:o,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:d};this.dpr=r,this.alpha=s,this.color=!0,this.depth=a,this.stencil=o,this.premultipliedAlpha=c,this.autoClear=f,this.id=_M++,g===2&&(this.gl=e.getContext("webgl2",_)),this.isWebgl2=!!this.gl,this.gl||(this.gl=e.getContext("webgl",_)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(n,i),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(e,n){this.width=e,this.height=n,this.gl.canvas.width=e*this.dpr,this.gl.canvas.height=n*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:e+"px",height:n+"px"})}setViewport(e,n,i=0,r=0){this.state.viewport.width===e&&this.state.viewport.height===n||(this.state.viewport.width=e,this.state.viewport.height=n,this.state.viewport.x=i,this.state.viewport.y=r,this.gl.viewport(i,r,e,n))}setScissor(e,n,i=0,r=0){this.gl.scissor(i,r,e,n)}enable(e){this.state[e]!==!0&&(this.gl.enable(e),this.state[e]=!0)}disable(e){this.state[e]!==!1&&(this.gl.disable(e),this.state[e]=!1)}setBlendFunc(e,n,i,r){this.state.blendFunc.src===e&&this.state.blendFunc.dst===n&&this.state.blendFunc.srcAlpha===i&&this.state.blendFunc.dstAlpha===r||(this.state.blendFunc.src=e,this.state.blendFunc.dst=n,this.state.blendFunc.srcAlpha=i,this.state.blendFunc.dstAlpha=r,i!==void 0?this.gl.blendFuncSeparate(e,n,i,r):this.gl.blendFunc(e,n))}setBlendEquation(e,n){e=e||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===e&&this.state.blendEquation.modeAlpha===n)&&(this.state.blendEquation.modeRGB=e,this.state.blendEquation.modeAlpha=n,n!==void 0?this.gl.blendEquationSeparate(e,n):this.gl.blendEquation(e))}setCullFace(e){this.state.cullFace!==e&&(this.state.cullFace=e,this.gl.cullFace(e))}setFrontFace(e){this.state.frontFace!==e&&(this.state.frontFace=e,this.gl.frontFace(e))}setDepthMask(e){this.state.depthMask!==e&&(this.state.depthMask=e,this.gl.depthMask(e))}setDepthFunc(e){this.state.depthFunc!==e&&(this.state.depthFunc=e,this.gl.depthFunc(e))}setStencilMask(e){this.state.stencilMask!==e&&(this.state.stencilMask=e,this.gl.stencilMask(e))}setStencilFunc(e,n,i){this.state.stencilFunc===e&&this.state.stencilRef===n&&this.state.stencilFuncMask===i||(this.state.stencilFunc=e||this.gl.ALWAYS,this.state.stencilRef=n||0,this.state.stencilFuncMask=i||0,this.gl.stencilFunc(e||this.gl.ALWAYS,n||0,i||0))}setStencilOp(e,n,i){this.state.stencilFail===e&&this.state.stencilDepthFail===n&&this.state.stencilDepthPass===i||(this.state.stencilFail=e,this.state.stencilDepthFail=n,this.state.stencilDepthPass=i,this.gl.stencilOp(e,n,i))}activeTexture(e){this.state.activeTextureUnit!==e&&(this.state.activeTextureUnit=e,this.gl.activeTexture(this.gl.TEXTURE0+e))}bindFramebuffer({target:e=this.gl.FRAMEBUFFER,buffer:n=null}={}){this.state.framebuffer!==n&&(this.state.framebuffer=n,this.gl.bindFramebuffer(e,n))}getExtension(e,n,i){return n&&this.gl[n]?this.gl[n].bind(this.gl):(this.extensions[e]||(this.extensions[e]=this.gl.getExtension(e)),n?this.extensions[e]?this.extensions[e][i].bind(this.extensions[e]):null:this.extensions[e])}sortOpaque(e,n){return e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.program.id!==n.program.id?e.program.id-n.program.id:e.zDepth!==n.zDepth?e.zDepth-n.zDepth:n.id-e.id}sortTransparent(e,n){return e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.zDepth!==n.zDepth?n.zDepth-e.zDepth:n.id-e.id}sortUI(e,n){return e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.program.id!==n.program.id?e.program.id-n.program.id:n.id-e.id}getRenderList({scene:e,camera:n,frustumCull:i,sort:r}){let s=[];if(n&&i&&n.updateFrustum(),e.traverse(a=>{if(!a.visible)return!0;a.draw&&(i&&a.frustumCulled&&n&&!n.frustumIntersectsMesh(a)||s.push(a))}),r){const a=[],o=[],l=[];s.forEach(c=>{c.program.transparent?c.program.depthTest?o.push(c):l.push(c):a.push(c),c.zDepth=0,!(c.renderOrder!==0||!c.program.depthTest||!n)&&(c.worldMatrix.getTranslation(jc),jc.applyMatrix4(n.projectionViewMatrix),c.zDepth=jc.z)}),a.sort(this.sortOpaque),o.sort(this.sortTransparent),l.sort(this.sortUI),s=a.concat(o,l)}return s}render({scene:e,camera:n,target:i=null,update:r=!0,sort:s=!0,frustumCull:a=!0,clear:o}){i===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(i),this.setViewport(i.width,i.height)),(o||this.autoClear&&o!==!1)&&(this.depth&&(!i||i.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!i||i.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),r&&e.updateMatrixWorld(),n&&n.updateMatrixWorld(),this.getRenderList({scene:e,camera:n,frustumCull:a,sort:s}).forEach(c=>{c.draw({camera:n})})}}function yM(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function SM(t,e,n,i,r){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t}function MM(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],a=n*n+i*i+r*r+s*s;return a>0&&(a=1/Math.sqrt(a)),t[0]=n*a,t[1]=i*a,t[2]=r*a,t[3]=s*a,t}function EM(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]}function wM(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function TM(t,e,n){n=n*.5;let i=Math.sin(n);return t[0]=i*e[0],t[1]=i*e[1],t[2]=i*e[2],t[3]=Math.cos(n),t}function jp(t,e,n){let i=e[0],r=e[1],s=e[2],a=e[3],o=n[0],l=n[1],c=n[2],u=n[3];return t[0]=i*u+a*o+r*c-s*l,t[1]=r*u+a*l+s*o-i*c,t[2]=s*u+a*c+i*l-r*o,t[3]=a*u-i*o-r*l-s*c,t}function CM(t,e,n){n*=.5;let i=e[0],r=e[1],s=e[2],a=e[3],o=Math.sin(n),l=Math.cos(n);return t[0]=i*l+a*o,t[1]=r*l+s*o,t[2]=s*l-r*o,t[3]=a*l-i*o,t}function AM(t,e,n){n*=.5;let i=e[0],r=e[1],s=e[2],a=e[3],o=Math.sin(n),l=Math.cos(n);return t[0]=i*l-s*o,t[1]=r*l+a*o,t[2]=s*l+i*o,t[3]=a*l-r*o,t}function RM(t,e,n){n*=.5;let i=e[0],r=e[1],s=e[2],a=e[3],o=Math.sin(n),l=Math.cos(n);return t[0]=i*l+r*o,t[1]=r*l-i*o,t[2]=s*l+a*o,t[3]=a*l-s*o,t}function bM(t,e,n,i){let r=e[0],s=e[1],a=e[2],o=e[3],l=n[0],c=n[1],u=n[2],d=n[3],f,g,_,x,m;return g=r*l+s*c+a*u+o*d,g<0&&(g=-g,l=-l,c=-c,u=-u,d=-d),1-g>1e-6?(f=Math.acos(g),_=Math.sin(f),x=Math.sin((1-i)*f)/_,m=Math.sin(i*f)/_):(x=1-i,m=i),t[0]=x*r+m*l,t[1]=x*s+m*c,t[2]=x*a+m*u,t[3]=x*o+m*d,t}function PM(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],a=n*n+i*i+r*r+s*s,o=a?1/a:0;return t[0]=-n*o,t[1]=-i*o,t[2]=-r*o,t[3]=s*o,t}function NM(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function LM(t,e){let n=e[0]+e[4]+e[8],i;if(n>0)i=Math.sqrt(n+1),t[3]=.5*i,i=.5/i,t[0]=(e[5]-e[7])*i,t[1]=(e[6]-e[2])*i,t[2]=(e[1]-e[3])*i;else{let r=0;e[4]>e[0]&&(r=1),e[8]>e[r*3+r]&&(r=2);let s=(r+1)%3,a=(r+2)%3;i=Math.sqrt(e[r*3+r]-e[s*3+s]-e[a*3+a]+1),t[r]=.5*i,i=.5/i,t[3]=(e[s*3+a]-e[a*3+s])*i,t[s]=(e[s*3+r]+e[r*3+s])*i,t[a]=(e[a*3+r]+e[r*3+a])*i}return t}function DM(t,e,n="YXZ"){let i=Math.sin(e[0]*.5),r=Math.cos(e[0]*.5),s=Math.sin(e[1]*.5),a=Math.cos(e[1]*.5),o=Math.sin(e[2]*.5),l=Math.cos(e[2]*.5);return n==="XYZ"?(t[0]=i*a*l+r*s*o,t[1]=r*s*l-i*a*o,t[2]=r*a*o+i*s*l,t[3]=r*a*l-i*s*o):n==="YXZ"?(t[0]=i*a*l+r*s*o,t[1]=r*s*l-i*a*o,t[2]=r*a*o-i*s*l,t[3]=r*a*l+i*s*o):n==="ZXY"?(t[0]=i*a*l-r*s*o,t[1]=r*s*l+i*a*o,t[2]=r*a*o+i*s*l,t[3]=r*a*l-i*s*o):n==="ZYX"?(t[0]=i*a*l-r*s*o,t[1]=r*s*l+i*a*o,t[2]=r*a*o-i*s*l,t[3]=r*a*l+i*s*o):n==="YZX"?(t[0]=i*a*l+r*s*o,t[1]=r*s*l+i*a*o,t[2]=r*a*o-i*s*l,t[3]=r*a*l-i*s*o):n==="XZY"&&(t[0]=i*a*l-r*s*o,t[1]=r*s*l-i*a*o,t[2]=r*a*o+i*s*l,t[3]=r*a*l+i*s*o),t}const UM=yM,IM=SM,FM=EM,OM=MM;class kM extends Array{constructor(e=0,n=0,i=0,r=1){super(e,n,i,r),this.onChange=()=>{},this._target=this;const s=["0","1","2","3"];return new Proxy(this,{set(a,o){const l=Reflect.set(...arguments);return l&&s.includes(o)&&a.onChange(),l}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set w(e){this._target[3]=e,this.onChange()}identity(){return wM(this._target),this.onChange(),this}set(e,n,i,r){return e.length?this.copy(e):(IM(this._target,e,n,i,r),this.onChange(),this)}rotateX(e){return CM(this._target,this._target,e),this.onChange(),this}rotateY(e){return AM(this._target,this._target,e),this.onChange(),this}rotateZ(e){return RM(this._target,this._target,e),this.onChange(),this}inverse(e=this._target){return PM(this._target,e),this.onChange(),this}conjugate(e=this._target){return NM(this._target,e),this.onChange(),this}copy(e){return UM(this._target,e),this.onChange(),this}normalize(e=this._target){return OM(this._target,e),this.onChange(),this}multiply(e,n){return n?jp(this._target,e,n):jp(this._target,this._target,e),this.onChange(),this}dot(e){return FM(this._target,e)}fromMatrix3(e){return LM(this._target,e),this.onChange(),this}fromEuler(e,n){return DM(this._target,e,e.order),n||this.onChange(),this}fromAxisAngle(e,n){return TM(this._target,e,n),this.onChange(),this}slerp(e,n){return bM(this._target,this._target,e,n),this.onChange(),this}fromArray(e,n=0){return this._target[0]=e[n],this._target[1]=e[n+1],this._target[2]=e[n+2],this._target[3]=e[n+3],this.onChange(),this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e[n+3]=this[3],e}}const zM=1e-6;function BM(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function HM(t,e,n,i,r,s,a,o,l,c,u,d,f,g,_,x,m){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t[4]=s,t[5]=a,t[6]=o,t[7]=l,t[8]=c,t[9]=u,t[10]=d,t[11]=f,t[12]=g,t[13]=_,t[14]=x,t[15]=m,t}function VM(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function GM(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],g=e[11],_=e[12],x=e[13],m=e[14],h=e[15],y=n*o-i*a,v=n*l-r*a,S=n*c-s*a,b=i*l-r*o,C=i*c-s*o,E=r*c-s*l,P=u*x-d*_,w=u*m-f*_,M=u*h-g*_,R=d*m-f*x,H=d*h-g*x,k=f*h-g*m,z=y*k-v*H+S*R+b*M-C*w+E*P;return z?(z=1/z,t[0]=(o*k-l*H+c*R)*z,t[1]=(r*H-i*k-s*R)*z,t[2]=(x*E-m*C+h*b)*z,t[3]=(f*C-d*E-g*b)*z,t[4]=(l*M-a*k-c*w)*z,t[5]=(n*k-r*M+s*w)*z,t[6]=(m*S-_*E-h*v)*z,t[7]=(u*E-f*S+g*v)*z,t[8]=(a*H-o*M+c*P)*z,t[9]=(i*M-n*H-s*P)*z,t[10]=(_*C-x*S+h*y)*z,t[11]=(d*S-u*C-g*y)*z,t[12]=(o*w-a*R-l*P)*z,t[13]=(n*R-i*w+r*P)*z,t[14]=(x*v-_*b-m*y)*z,t[15]=(u*b-d*v+f*y)*z,t):null}function C0(t){let e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],c=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],x=t[14],m=t[15],h=e*a-n*s,y=e*o-i*s,v=e*l-r*s,S=n*o-i*a,b=n*l-r*a,C=i*l-r*o,E=c*_-u*g,P=c*x-d*g,w=c*m-f*g,M=u*x-d*_,R=u*m-f*_,H=d*m-f*x;return h*H-y*R+v*M+S*w-b*P+C*E}function Wp(t,e,n){let i=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5],c=e[6],u=e[7],d=e[8],f=e[9],g=e[10],_=e[11],x=e[12],m=e[13],h=e[14],y=e[15],v=n[0],S=n[1],b=n[2],C=n[3];return t[0]=v*i+S*o+b*d+C*x,t[1]=v*r+S*l+b*f+C*m,t[2]=v*s+S*c+b*g+C*h,t[3]=v*a+S*u+b*_+C*y,v=n[4],S=n[5],b=n[6],C=n[7],t[4]=v*i+S*o+b*d+C*x,t[5]=v*r+S*l+b*f+C*m,t[6]=v*s+S*c+b*g+C*h,t[7]=v*a+S*u+b*_+C*y,v=n[8],S=n[9],b=n[10],C=n[11],t[8]=v*i+S*o+b*d+C*x,t[9]=v*r+S*l+b*f+C*m,t[10]=v*s+S*c+b*g+C*h,t[11]=v*a+S*u+b*_+C*y,v=n[12],S=n[13],b=n[14],C=n[15],t[12]=v*i+S*o+b*d+C*x,t[13]=v*r+S*l+b*f+C*m,t[14]=v*s+S*c+b*g+C*h,t[15]=v*a+S*u+b*_+C*y,t}function jM(t,e,n){let i=n[0],r=n[1],s=n[2],a,o,l,c,u,d,f,g,_,x,m,h;return e===t?(t[12]=e[0]*i+e[4]*r+e[8]*s+e[12],t[13]=e[1]*i+e[5]*r+e[9]*s+e[13],t[14]=e[2]*i+e[6]*r+e[10]*s+e[14],t[15]=e[3]*i+e[7]*r+e[11]*s+e[15]):(a=e[0],o=e[1],l=e[2],c=e[3],u=e[4],d=e[5],f=e[6],g=e[7],_=e[8],x=e[9],m=e[10],h=e[11],t[0]=a,t[1]=o,t[2]=l,t[3]=c,t[4]=u,t[5]=d,t[6]=f,t[7]=g,t[8]=_,t[9]=x,t[10]=m,t[11]=h,t[12]=a*i+u*r+_*s+e[12],t[13]=o*i+d*r+x*s+e[13],t[14]=l*i+f*r+m*s+e[14],t[15]=c*i+g*r+h*s+e[15]),t}function WM(t,e,n){let i=n[0],r=n[1],s=n[2];return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t[3]=e[3]*i,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*s,t[9]=e[9]*s,t[10]=e[10]*s,t[11]=e[11]*s,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function XM(t,e,n,i){let r=i[0],s=i[1],a=i[2],o=Math.hypot(r,s,a),l,c,u,d,f,g,_,x,m,h,y,v,S,b,C,E,P,w,M,R,H,k,z,j;return Math.abs(o)<zM?null:(o=1/o,r*=o,s*=o,a*=o,l=Math.sin(n),c=Math.cos(n),u=1-c,d=e[0],f=e[1],g=e[2],_=e[3],x=e[4],m=e[5],h=e[6],y=e[7],v=e[8],S=e[9],b=e[10],C=e[11],E=r*r*u+c,P=s*r*u+a*l,w=a*r*u-s*l,M=r*s*u-a*l,R=s*s*u+c,H=a*s*u+r*l,k=r*a*u+s*l,z=s*a*u-r*l,j=a*a*u+c,t[0]=d*E+x*P+v*w,t[1]=f*E+m*P+S*w,t[2]=g*E+h*P+b*w,t[3]=_*E+y*P+C*w,t[4]=d*M+x*R+v*H,t[5]=f*M+m*R+S*H,t[6]=g*M+h*R+b*H,t[7]=_*M+y*R+C*H,t[8]=d*k+x*z+v*j,t[9]=f*k+m*z+S*j,t[10]=g*k+h*z+b*j,t[11]=_*k+y*z+C*j,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}function qM(t,e){return t[0]=e[12],t[1]=e[13],t[2]=e[14],t}function A0(t,e){let n=e[0],i=e[1],r=e[2],s=e[4],a=e[5],o=e[6],l=e[8],c=e[9],u=e[10];return t[0]=Math.hypot(n,i,r),t[1]=Math.hypot(s,a,o),t[2]=Math.hypot(l,c,u),t}function $M(t){let e=t[0],n=t[1],i=t[2],r=t[4],s=t[5],a=t[6],o=t[8],l=t[9],c=t[10];const u=e*e+n*n+i*i,d=r*r+s*s+a*a,f=o*o+l*l+c*c;return Math.sqrt(Math.max(u,d,f))}const R0=function(){const t=[1,1,1];return function(e,n){let i=t;A0(i,n);let r=1/i[0],s=1/i[1],a=1/i[2],o=n[0]*r,l=n[1]*s,c=n[2]*a,u=n[4]*r,d=n[5]*s,f=n[6]*a,g=n[8]*r,_=n[9]*s,x=n[10]*a,m=o+d+x,h=0;return m>0?(h=Math.sqrt(m+1)*2,e[3]=.25*h,e[0]=(f-_)/h,e[1]=(g-c)/h,e[2]=(l-u)/h):o>d&&o>x?(h=Math.sqrt(1+o-d-x)*2,e[3]=(f-_)/h,e[0]=.25*h,e[1]=(l+u)/h,e[2]=(g+c)/h):d>x?(h=Math.sqrt(1+d-o-x)*2,e[3]=(g-c)/h,e[0]=(l+u)/h,e[1]=.25*h,e[2]=(f+_)/h):(h=Math.sqrt(1+x-o-d)*2,e[3]=(l-u)/h,e[0]=(g+c)/h,e[1]=(f+_)/h,e[2]=.25*h),e}}();function YM(t,e,n,i){let r=ga([t[0],t[1],t[2]]);const s=ga([t[4],t[5],t[6]]),a=ga([t[8],t[9],t[10]]);C0(t)<0&&(r=-r),n[0]=t[12],n[1]=t[13],n[2]=t[14];const l=t.slice(),c=1/r,u=1/s,d=1/a;l[0]*=c,l[1]*=c,l[2]*=c,l[4]*=u,l[5]*=u,l[6]*=u,l[8]*=d,l[9]*=d,l[10]*=d,R0(e,l),i[0]=r,i[1]=s,i[2]=a}function KM(t,e,n,i){const r=t,s=e[0],a=e[1],o=e[2],l=e[3],c=s+s,u=a+a,d=o+o,f=s*c,g=s*u,_=s*d,x=a*u,m=a*d,h=o*d,y=l*c,v=l*u,S=l*d,b=i[0],C=i[1],E=i[2];return r[0]=(1-(x+h))*b,r[1]=(g+S)*b,r[2]=(_-v)*b,r[3]=0,r[4]=(g-S)*C,r[5]=(1-(f+h))*C,r[6]=(m+y)*C,r[7]=0,r[8]=(_+v)*E,r[9]=(m-y)*E,r[10]=(1-(f+x))*E,r[11]=0,r[12]=n[0],r[13]=n[1],r[14]=n[2],r[15]=1,r}function ZM(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],a=n+n,o=i+i,l=r+r,c=n*a,u=i*a,d=i*o,f=r*a,g=r*o,_=r*l,x=s*a,m=s*o,h=s*l;return t[0]=1-d-_,t[1]=u+h,t[2]=f-m,t[3]=0,t[4]=u-h,t[5]=1-c-_,t[6]=g+x,t[7]=0,t[8]=f+m,t[9]=g-x,t[10]=1-c-d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function QM(t,e,n,i,r){let s=1/Math.tan(e/2),a=1/(i-r);return t[0]=s/n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=s,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(r+i)*a,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*r*i*a,t[15]=0,t}function JM(t,e,n,i,r,s,a){let o=1/(e-n),l=1/(i-r),c=1/(s-a);return t[0]=-2*o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*l,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*c,t[11]=0,t[12]=(e+n)*o,t[13]=(r+i)*l,t[14]=(a+s)*c,t[15]=1,t}function eE(t,e,n,i){let r=e[0],s=e[1],a=e[2],o=i[0],l=i[1],c=i[2],u=r-n[0],d=s-n[1],f=a-n[2],g=u*u+d*d+f*f;g===0?f=1:(g=1/Math.sqrt(g),u*=g,d*=g,f*=g);let _=l*f-c*d,x=c*u-o*f,m=o*d-l*u;return g=_*_+x*x+m*m,g===0&&(c?o+=1e-6:l?c+=1e-6:l+=1e-6,_=l*f-c*d,x=c*u-o*f,m=o*d-l*u,g=_*_+x*x+m*m),g=1/Math.sqrt(g),_*=g,x*=g,m*=g,t[0]=_,t[1]=x,t[2]=m,t[3]=0,t[4]=d*m-f*x,t[5]=f*_-u*m,t[6]=u*x-d*_,t[7]=0,t[8]=u,t[9]=d,t[10]=f,t[11]=0,t[12]=r,t[13]=s,t[14]=a,t[15]=1,t}function Xp(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t[3]=e[3]+n[3],t[4]=e[4]+n[4],t[5]=e[5]+n[5],t[6]=e[6]+n[6],t[7]=e[7]+n[7],t[8]=e[8]+n[8],t[9]=e[9]+n[9],t[10]=e[10]+n[10],t[11]=e[11]+n[11],t[12]=e[12]+n[12],t[13]=e[13]+n[13],t[14]=e[14]+n[14],t[15]=e[15]+n[15],t}function qp(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t[3]=e[3]-n[3],t[4]=e[4]-n[4],t[5]=e[5]-n[5],t[6]=e[6]-n[6],t[7]=e[7]-n[7],t[8]=e[8]-n[8],t[9]=e[9]-n[9],t[10]=e[10]-n[10],t[11]=e[11]-n[11],t[12]=e[12]-n[12],t[13]=e[13]-n[13],t[14]=e[14]-n[14],t[15]=e[15]-n[15],t}function tE(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*n,t[9]=e[9]*n,t[10]=e[10]*n,t[11]=e[11]*n,t[12]=e[12]*n,t[13]=e[13]*n,t[14]=e[14]*n,t[15]=e[15]*n,t}class Ul extends Array{constructor(e=1,n=0,i=0,r=0,s=0,a=1,o=0,l=0,c=0,u=0,d=1,f=0,g=0,_=0,x=0,m=1){return super(e,n,i,r,s,a,o,l,c,u,d,f,g,_,x,m),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(e){this[12]=e}set y(e){this[13]=e}set z(e){this[14]=e}set w(e){this[15]=e}set(e,n,i,r,s,a,o,l,c,u,d,f,g,_,x,m){return e.length?this.copy(e):(HM(this,e,n,i,r,s,a,o,l,c,u,d,f,g,_,x,m),this)}translate(e,n=this){return jM(this,n,e),this}rotate(e,n,i=this){return XM(this,i,e,n),this}scale(e,n=this){return WM(this,n,typeof e=="number"?[e,e,e]:e),this}add(e,n){return n?Xp(this,e,n):Xp(this,this,e),this}sub(e,n){return n?qp(this,e,n):qp(this,this,e),this}multiply(e,n){return e.length?n?Wp(this,e,n):Wp(this,this,e):tE(this,this,e),this}identity(){return VM(this),this}copy(e){return BM(this,e),this}fromPerspective({fov:e,aspect:n,near:i,far:r}={}){return QM(this,e,n,i,r),this}fromOrthogonal({left:e,right:n,bottom:i,top:r,near:s,far:a}){return JM(this,e,n,i,r,s,a),this}fromQuaternion(e){return ZM(this,e),this}setPosition(e){return this.x=e[0],this.y=e[1],this.z=e[2],this}inverse(e=this){return GM(this,e),this}compose(e,n,i){return KM(this,e,n,i),this}decompose(e,n,i){return YM(this,e,n,i),this}getRotation(e){return R0(e,this),this}getTranslation(e){return qM(e,this),this}getScaling(e){return A0(e,this),this}getMaxScaleOnAxis(){return $M(this)}lookAt(e,n,i){return eE(this,e,n,i),this}determinant(){return C0(this)}fromArray(e,n=0){return this[0]=e[n],this[1]=e[n+1],this[2]=e[n+2],this[3]=e[n+3],this[4]=e[n+4],this[5]=e[n+5],this[6]=e[n+6],this[7]=e[n+7],this[8]=e[n+8],this[9]=e[n+9],this[10]=e[n+10],this[11]=e[n+11],this[12]=e[n+12],this[13]=e[n+13],this[14]=e[n+14],this[15]=e[n+15],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e[n+3]=this[3],e[n+4]=this[4],e[n+5]=this[5],e[n+6]=this[6],e[n+7]=this[7],e[n+8]=this[8],e[n+9]=this[9],e[n+10]=this[10],e[n+11]=this[11],e[n+12]=this[12],e[n+13]=this[13],e[n+14]=this[14],e[n+15]=this[15],e}}function nE(t,e,n="YXZ"){return n==="XYZ"?(t[1]=Math.asin(Math.min(Math.max(e[8],-1),1)),Math.abs(e[8])<.99999?(t[0]=Math.atan2(-e[9],e[10]),t[2]=Math.atan2(-e[4],e[0])):(t[0]=Math.atan2(e[6],e[5]),t[2]=0)):n==="YXZ"?(t[0]=Math.asin(-Math.min(Math.max(e[9],-1),1)),Math.abs(e[9])<.99999?(t[1]=Math.atan2(e[8],e[10]),t[2]=Math.atan2(e[1],e[5])):(t[1]=Math.atan2(-e[2],e[0]),t[2]=0)):n==="ZXY"?(t[0]=Math.asin(Math.min(Math.max(e[6],-1),1)),Math.abs(e[6])<.99999?(t[1]=Math.atan2(-e[2],e[10]),t[2]=Math.atan2(-e[4],e[5])):(t[1]=0,t[2]=Math.atan2(e[1],e[0]))):n==="ZYX"?(t[1]=Math.asin(-Math.min(Math.max(e[2],-1),1)),Math.abs(e[2])<.99999?(t[0]=Math.atan2(e[6],e[10]),t[2]=Math.atan2(e[1],e[0])):(t[0]=0,t[2]=Math.atan2(-e[4],e[5]))):n==="YZX"?(t[2]=Math.asin(Math.min(Math.max(e[1],-1),1)),Math.abs(e[1])<.99999?(t[0]=Math.atan2(-e[9],e[5]),t[1]=Math.atan2(-e[2],e[0])):(t[0]=0,t[1]=Math.atan2(e[8],e[10]))):n==="XZY"&&(t[2]=Math.asin(-Math.min(Math.max(e[4],-1),1)),Math.abs(e[4])<.99999?(t[0]=Math.atan2(e[6],e[5]),t[1]=Math.atan2(e[8],e[0])):(t[0]=Math.atan2(-e[9],e[10]),t[1]=0)),t}const $p=new Ul;let iE=class extends Array{constructor(e=0,n=e,i=e,r="YXZ"){super(e,n,i),this.order=r,this.onChange=()=>{},this._target=this;const s=["0","1","2"];return new Proxy(this,{set(a,o){const l=Reflect.set(...arguments);return l&&s.includes(o)&&a.onChange(),l}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set(e,n=e,i=e){return e.length?this.copy(e):(this._target[0]=e,this._target[1]=n,this._target[2]=i,this.onChange(),this)}copy(e){return this._target[0]=e[0],this._target[1]=e[1],this._target[2]=e[2],this.onChange(),this}reorder(e){return this._target.order=e,this.onChange(),this}fromRotationMatrix(e,n=this.order){return nE(this._target,e,n),this.onChange(),this}fromQuaternion(e,n=this.order,i){return $p.fromQuaternion(e),this._target.fromRotationMatrix($p,n),i||this.onChange(),this}fromArray(e,n=0){return this._target[0]=e[n],this._target[1]=e[n+1],this._target[2]=e[n+2],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e}};class rE{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new Ul,this.worldMatrix=new Ul,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new In,this.quaternion=new kM,this.scale=new In(1),this.rotation=new iE,this.up=new In(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(e,n=!0){this.parent&&e!==this.parent&&this.parent.removeChild(this,!1),this.parent=e,n&&e&&e.addChild(this,!1)}addChild(e,n=!0){~this.children.indexOf(e)||this.children.push(e),n&&e.setParent(this,!1)}removeChild(e,n=!0){~this.children.indexOf(e)&&this.children.splice(this.children.indexOf(e),1),n&&e.setParent(null,!1)}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||e)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,e=!0);for(let n=0,i=this.children.length;n<i;n++)this.children[n].updateMatrixWorld(e)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(e){if(!e(this))for(let n=0,i=this.children.length;n<i;n++)this.children[n].traverse(e)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(e,n=!1){n?this.matrix.lookAt(this.position,e,this.up):this.matrix.lookAt(e,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}}function sE(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t}function aE(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],a=n+n,o=i+i,l=r+r,c=n*a,u=i*a,d=i*o,f=r*a,g=r*o,_=r*l,x=s*a,m=s*o,h=s*l;return t[0]=1-d-_,t[3]=u-h,t[6]=f+m,t[1]=u+h,t[4]=1-c-_,t[7]=g-x,t[2]=f-m,t[5]=g+x,t[8]=1-c-d,t}function oE(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function lE(t,e,n,i,r,s,a,o,l,c){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t[4]=s,t[5]=a,t[6]=o,t[7]=l,t[8]=c,t}function cE(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function uE(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=-u*s+o*l,g=c*s-a*l,_=n*d+i*f+r*g;return _?(_=1/_,t[0]=d*_,t[1]=(-u*i+r*c)*_,t[2]=(o*i-r*a)*_,t[3]=f*_,t[4]=(u*n-r*l)*_,t[5]=(-o*n+r*s)*_,t[6]=g*_,t[7]=(-c*n+i*l)*_,t[8]=(a*n-i*s)*_,t):null}function Yp(t,e,n){let i=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5],c=e[6],u=e[7],d=e[8],f=n[0],g=n[1],_=n[2],x=n[3],m=n[4],h=n[5],y=n[6],v=n[7],S=n[8];return t[0]=f*i+g*a+_*c,t[1]=f*r+g*o+_*u,t[2]=f*s+g*l+_*d,t[3]=x*i+m*a+h*c,t[4]=x*r+m*o+h*u,t[5]=x*s+m*l+h*d,t[6]=y*i+v*a+S*c,t[7]=y*r+v*o+S*u,t[8]=y*s+v*l+S*d,t}function dE(t,e,n){let i=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5],c=e[6],u=e[7],d=e[8],f=n[0],g=n[1];return t[0]=i,t[1]=r,t[2]=s,t[3]=a,t[4]=o,t[5]=l,t[6]=f*i+g*a+c,t[7]=f*r+g*o+u,t[8]=f*s+g*l+d,t}function hE(t,e,n){let i=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5],c=e[6],u=e[7],d=e[8],f=Math.sin(n),g=Math.cos(n);return t[0]=g*i+f*a,t[1]=g*r+f*o,t[2]=g*s+f*l,t[3]=g*a-f*i,t[4]=g*o-f*r,t[5]=g*l-f*s,t[6]=c,t[7]=u,t[8]=d,t}function fE(t,e,n){let i=n[0],r=n[1];return t[0]=i*e[0],t[1]=i*e[1],t[2]=i*e[2],t[3]=r*e[3],t[4]=r*e[4],t[5]=r*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function pE(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],g=e[11],_=e[12],x=e[13],m=e[14],h=e[15],y=n*o-i*a,v=n*l-r*a,S=n*c-s*a,b=i*l-r*o,C=i*c-s*o,E=r*c-s*l,P=u*x-d*_,w=u*m-f*_,M=u*h-g*_,R=d*m-f*x,H=d*h-g*x,k=f*h-g*m,z=y*k-v*H+S*R+b*M-C*w+E*P;return z?(z=1/z,t[0]=(o*k-l*H+c*R)*z,t[1]=(l*M-a*k-c*w)*z,t[2]=(a*H-o*M+c*P)*z,t[3]=(r*H-i*k-s*R)*z,t[4]=(n*k-r*M+s*w)*z,t[5]=(i*M-n*H-s*P)*z,t[6]=(x*E-m*C+h*b)*z,t[7]=(m*S-_*E-h*v)*z,t[8]=(_*C-x*S+h*y)*z,t):null}class mE extends Array{constructor(e=1,n=0,i=0,r=0,s=1,a=0,o=0,l=0,c=1){return super(e,n,i,r,s,a,o,l,c),this}set(e,n,i,r,s,a,o,l,c){return e.length?this.copy(e):(lE(this,e,n,i,r,s,a,o,l,c),this)}translate(e,n=this){return dE(this,n,e),this}rotate(e,n=this){return hE(this,n,e),this}scale(e,n=this){return fE(this,n,e),this}multiply(e,n){return n?Yp(this,e,n):Yp(this,this,e),this}identity(){return cE(this),this}copy(e){return oE(this,e),this}fromMatrix4(e){return sE(this,e),this}fromQuaternion(e){return aE(this,e),this}fromBasis(e,n,i){return this.set(e[0],e[1],e[2],n[0],n[1],n[2],i[0],i[1],i[2]),this}inverse(e=this){return uE(this,e),this}getNormalMatrix(e){return pE(this,e),this}}let gE=0,vE=class extends rE{constructor(e,{geometry:n,program:i,mode:r=e.TRIANGLES,frustumCulled:s=!0,renderOrder:a=0}={}){super(),e.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=e,this.id=gE++,this.geometry=n,this.program=i,this.mode=r,this.frustumCulled=s,this.renderOrder=a,this.modelViewMatrix=new Ul,this.normalMatrix=new mE,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(e){return this.beforeRenderCallbacks.push(e),this}onAfterRender(e){return this.afterRenderCallbacks.push(e),this}draw({camera:e}={}){e&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=e.projectionMatrix,this.program.uniforms.cameraPosition.value=e.worldPosition,this.program.uniforms.viewMatrix.value=e.viewMatrix,this.modelViewMatrix.multiply(e.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:e}));let n=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:n}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:e}))}},_E=class extends hM{constructor(e,{attributes:n={}}={}){Object.assign(n,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(e,n)}};const xo=8,xE=t=>{const e=t.replace("#","").padEnd(6,"0"),n=parseInt(e.slice(0,2),16)/255,i=parseInt(e.slice(2,4),16)/255,r=parseInt(e.slice(4,6),16)/255;return[n,i,r]},yE=t=>{const e=(t&&t.length?t:["#FF9FFC","#5227FF"]).slice(0,xo);for(e.length===1&&e.push(e[0]);e.length<xo;)e.push(e[e.length-1]);const n=[];for(let r=0;r<xo;r+=1)n.push(xE(e[r]));const i=Math.max(2,Math.min(xo,(t==null?void 0:t.length)??2));return{arr:n,count:i}},SE=({className:t,dpr:e,paused:n=!1,gradientColors:i,angle:r=0,noise:s=.3,blindCount:a=16,blindMinWidth:o=60,mouseDampening:l=.15,mirrorGradient:c=!1,spotlightRadius:u=.5,spotlightSoftness:d=1,spotlightOpacity:f=1,distortAmount:g=0,shineDirection:_="left",mixBlendMode:x="lighten"})=>{const m=O.useRef(null),h=O.useRef(null),y=O.useRef(null),v=O.useRef(null),S=O.useRef(null),b=O.useRef(null),C=O.useRef([0,0]),E=O.useRef(0),P=O.useRef(!0);return O.useEffect(()=>{const w=m.current;if(!w)return;const M=new xM({dpr:e??(typeof window<"u"&&window.devicePixelRatio||1),alpha:!0,antialias:!0});b.current=M;const R=M.gl,H=R.canvas;H.style.width="100%",H.style.height="100%",H.style.display="block",w.appendChild(H);const k=`
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`,z=`
#ifdef GL_ES
precision mediump float;
#endif

uniform vec3  iResolution;
uniform vec2  iMouse;
uniform float iTime;

uniform float uAngle;
uniform float uNoise;
uniform float uBlindCount;
uniform float uSpotlightRadius;
uniform float uSpotlightSoftness;
uniform float uSpotlightOpacity;
uniform float uMirror;
uniform float uDistort;
uniform float uShineFlip;
uniform vec3  uColor0;
uniform vec3  uColor1;
uniform vec3  uColor2;
uniform vec3  uColor3;
uniform vec3  uColor4;
uniform vec3  uColor5;
uniform vec3  uColor6;
uniform vec3  uColor7;
uniform int   uColorCount;

varying vec2 vUv;

float rand(vec2 co){
  return fract(sin(dot(co, vec2(12.9898,78.233))) * 43758.5453);
}

vec2 rotate2D(vec2 p, float a){
  float c = cos(a);
  float s = sin(a);
  return mat2(c, -s, s, c) * p;
}

vec3 getGradientColor(float t){
  float tt = clamp(t, 0.0, 1.0);
  int count = uColorCount;
  if (count < 2) count = 2;
  float scaled = tt * float(count - 1);
  float seg = floor(scaled);
  float f = fract(scaled);

  if (seg < 1.0) return mix(uColor0, uColor1, f);
  if (seg < 2.0 && count > 2) return mix(uColor1, uColor2, f);
  if (seg < 3.0 && count > 3) return mix(uColor2, uColor3, f);
  if (seg < 4.0 && count > 4) return mix(uColor3, uColor4, f);
  if (seg < 5.0 && count > 5) return mix(uColor4, uColor5, f);
  if (seg < 6.0 && count > 6) return mix(uColor5, uColor6, f);
  if (seg < 7.0 && count > 7) return mix(uColor6, uColor7, f);
  if (count > 7) return uColor7;
  if (count > 6) return uColor6;
  if (count > 5) return uColor5;
  if (count > 4) return uColor4;
  if (count > 3) return uColor3;
  if (count > 2) return uColor2;
  return uColor1;
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv0 = fragCoord.xy / iResolution.xy;

    float aspect = iResolution.x / iResolution.y;
    vec2 p = uv0 * 2.0 - 1.0;
    p.x *= aspect;
    vec2 pr = rotate2D(p, uAngle);
    pr.x /= aspect;
    vec2 uv = pr * 0.5 + 0.5;

    vec2 uvMod = uv;
    if (uDistort > 0.0) {
      float a = uvMod.y * 6.0;
      float b = uvMod.x * 6.0;
      float w = 0.01 * uDistort;
      uvMod.x += sin(a) * w;
      uvMod.y += cos(b) * w;
    }
    float t = uvMod.x;
    if (uMirror > 0.5) {
      t = 1.0 - abs(1.0 - 2.0 * fract(t));
    }
    vec3 base = getGradientColor(t);

    vec2 offset = vec2(iMouse.x/iResolution.x, iMouse.y/iResolution.y);
  float d = length(uv0 - offset);
  float r = max(uSpotlightRadius, 1e-4);
  float dn = d / r;
  float spot = (1.0 - 2.0 * pow(dn, uSpotlightSoftness)) * uSpotlightOpacity;
  vec3 cir = vec3(spot);
  float stripe = fract(uvMod.x * max(uBlindCount, 1.0));
  if (uShineFlip > 0.5) stripe = 1.0 - stripe;
    vec3 ran = vec3(stripe);

    vec3 col = cir + base - ran;
    col += (rand(gl_FragCoord.xy + iTime) - 0.5) * uNoise;

    fragColor = vec4(col, 1.0);
}

void main() {
    vec4 color;
    mainImage(color, vUv * iResolution.xy);
    gl_FragColor = color;
}
`,{arr:j,count:W}=yE(i),$={iResolution:{value:[R.drawingBufferWidth,R.drawingBufferHeight,1]},iMouse:{value:[0,0]},iTime:{value:0},uAngle:{value:r*Math.PI/180},uNoise:{value:s},uBlindCount:{value:Math.max(1,a)},uSpotlightRadius:{value:u},uSpotlightSoftness:{value:d},uSpotlightOpacity:{value:f},uMirror:{value:c?1:0},uDistort:{value:g},uShineFlip:{value:_==="right"?1:0},uColor0:{value:j[0]},uColor1:{value:j[1]},uColor2:{value:j[2]},uColor3:{value:j[3]},uColor4:{value:j[4]},uColor5:{value:j[5]},uColor6:{value:j[6]},uColor7:{value:j[7]},uColorCount:{value:W}},D=new pM(R,{vertex:k,fragment:z,uniforms:$});y.current=D;const K=new _E(R);S.current=K;const Q=new vE(R,{geometry:K,program:D});v.current=Q;const se=()=>{const Y=w.getBoundingClientRect();if(M.setSize(Y.width,Y.height),$.iResolution.value=[R.drawingBufferWidth,R.drawingBufferHeight,1],o&&o>0){const ne=Math.max(1,Math.floor(Y.width/o)),ae=a?Math.min(a,ne):ne;$.uBlindCount.value=Math.max(1,ae)}else $.uBlindCount.value=Math.max(1,a);if(P.current){P.current=!1;const ne=R.drawingBufferWidth/2,ae=R.drawingBufferHeight/2;$.iMouse.value=[ne,ae],C.current=[ne,ae]}};se();const xe=new ResizeObserver(se);xe.observe(w);const ue=Y=>{const ne=H.getBoundingClientRect(),ae=M.dpr||1,Me=(Y.clientX-ne.left)*ae,Ee=(ne.height-(Y.clientY-ne.top))*ae;C.current=[Me,Ee],l<=0&&($.iMouse.value=[Me,Ee])};H.addEventListener("pointermove",ue);const B=Y=>{if(h.current=requestAnimationFrame(B),$.iTime.value=Y*.001,l>0){E.current||(E.current=Y);const ne=(Y-E.current)/1e3;E.current=Y;const ae=Math.max(1e-4,l);let Me=1-Math.exp(-ne/ae);Me>1&&(Me=1);const Ee=C.current,Re=$.iMouse.value;Re[0]+=(Ee[0]-Re[0])*Me,Re[1]+=(Ee[1]-Re[1])*Me}else E.current=Y;if(!n&&y.current&&v.current)try{M.render({scene:v.current})}catch(ne){console.error(ne)}};return h.current=requestAnimationFrame(B),()=>{h.current&&cancelAnimationFrame(h.current),H.removeEventListener("pointermove",ue),xe.disconnect(),H.parentElement===w&&w.removeChild(H);const Y=(ne,ae)=>{ne&&typeof ne[ae]=="function"&&ne[ae].call(ne)};Y(y.current,"remove"),Y(S.current,"remove"),Y(v.current,"remove"),Y(b.current,"destroy"),y.current=null,S.current=null,v.current=null,b.current=null}},[r,a,o,e,g,i,c,l,s,n,_,f,u,d]),p.jsx("div",{ref:m,className:`gradient-blinds-container ${t??""}`,style:{...x&&{mixBlendMode:x}}})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $h="167",ME=0,Kp=1,EE=2,b0=1,wE=2,ii=3,Yi=0,nn=1,ai=2,Wi=0,xs=1,Zp=2,Qp=3,Jp=4,TE=5,hr=100,CE=101,AE=102,RE=103,bE=104,PE=200,NE=201,LE=202,DE=203,xd=204,yd=205,UE=206,IE=207,FE=208,OE=209,kE=210,zE=211,BE=212,HE=213,VE=214,GE=0,jE=1,WE=2,Il=3,XE=4,qE=5,$E=6,YE=7,P0=0,KE=1,ZE=2,Xi=0,QE=1,JE=2,e1=3,t1=4,n1=5,i1=6,r1=7,N0=300,Ps=301,Ns=302,Sd=303,Md=304,ac=306,Ed=1e3,vr=1001,wd=1002,Sn=1003,s1=1004,yo=1005,Un=1006,Wc=1007,_r=1008,gi=1009,L0=1010,D0=1011,ka=1012,Yh=1013,Ar=1014,ci=1015,Wa=1016,Kh=1017,Zh=1018,Ls=1020,U0=35902,I0=1021,F0=1022,Fn=1023,O0=1024,k0=1025,ys=1026,Ds=1027,z0=1028,Qh=1029,B0=1030,Jh=1031,ef=1033,nl=33776,il=33777,rl=33778,sl=33779,Td=35840,Cd=35841,Ad=35842,Rd=35843,bd=36196,Pd=37492,Nd=37496,Ld=37808,Dd=37809,Ud=37810,Id=37811,Fd=37812,Od=37813,kd=37814,zd=37815,Bd=37816,Hd=37817,Vd=37818,Gd=37819,jd=37820,Wd=37821,al=36492,Xd=36494,qd=36495,H0=36283,$d=36284,Yd=36285,Kd=36286,a1=3200,o1=3201,l1=0,c1=1,Li="",Gn="srgb",er="srgb-linear",tf="display-p3",oc="display-p3-linear",Fl="linear",rt="srgb",Ol="rec709",kl="p3",Fr=7680,em=519,u1=512,d1=513,h1=514,V0=515,f1=516,p1=517,m1=518,g1=519,tm=35044,nm="300 es",ui=2e3,zl=2001;class zs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xc=Math.PI/180,Zd=180/Math.PI;function Xa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[t&255]+zt[t>>8&255]+zt[t>>16&255]+zt[t>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[n&63|128]+zt[n>>8&255]+"-"+zt[n>>16&255]+zt[n>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function Zt(t,e,n){return Math.max(e,Math.min(n,t))}function v1(t,e){return(t%e+e)%e}function qc(t,e,n){return(1-n)*t+n*e}function Ys(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Yt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class He{constructor(e=0,n=0){He.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,n,i,r,s,a,o,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],g=i[5],_=i[8],x=r[0],m=r[3],h=r[6],y=r[1],v=r[4],S=r[7],b=r[2],C=r[5],E=r[8];return s[0]=a*x+o*y+l*b,s[3]=a*m+o*v+l*C,s[6]=a*h+o*S+l*E,s[1]=c*x+u*y+d*b,s[4]=c*m+u*v+d*C,s[7]=c*h+u*S+d*E,s[2]=f*x+g*y+_*b,s[5]=f*m+g*v+_*C,s[8]=f*h+g*S+_*E,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*s,g=c*s-a*l,_=n*d+i*f+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=d*x,e[1]=(r*c-u*i)*x,e[2]=(o*i-r*a)*x,e[3]=f*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-o*n)*x,e[6]=g*x,e[7]=(i*l-c*n)*x,e[8]=(a*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply($c.makeScale(e,n)),this}rotate(e){return this.premultiply($c.makeRotation(-e)),this}translate(e,n){return this.premultiply($c.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $c=new ke;function G0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Bl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function _1(){const t=Bl("canvas");return t.style.display="block",t}const im={};function va(t){t in im||(im[t]=!0,console.warn(t))}function x1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const rm=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),sm=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ks={[er]:{transfer:Fl,primaries:Ol,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Gn]:{transfer:rt,primaries:Ol,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[oc]:{transfer:Fl,primaries:kl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(sm),fromReference:t=>t.applyMatrix3(rm)},[tf]:{transfer:rt,primaries:kl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(sm),fromReference:t=>t.applyMatrix3(rm).convertLinearToSRGB()}},y1=new Set([er,oc]),Je={enabled:!0,_workingColorSpace:er,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!y1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ks[e].toReference,r=Ks[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ks[t].primaries},getTransfer:function(t){return t===Li?Fl:Ks[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Ks[e].luminanceCoefficients)}};function Ss(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Yc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Or;class S1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Or===void 0&&(Or=Bl("canvas")),Or.width=e.width,Or.height=e.height;const i=Or.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Or}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Bl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ss(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ss(n[i]/255)*255):n[i]=Ss(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let M1=0;class j0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:M1++}),this.uuid=Xa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Kc(r[a].image)):s.push(Kc(r[a]))}else s=Kc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Kc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?S1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let E1=0;class rn extends zs{constructor(e=rn.DEFAULT_IMAGE,n=rn.DEFAULT_MAPPING,i=vr,r=vr,s=Un,a=_r,o=Fn,l=gi,c=rn.DEFAULT_ANISOTROPY,u=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:E1++}),this.uuid=Xa(),this.name="",this.source=new j0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==N0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ed:e.x=e.x-Math.floor(e.x);break;case vr:e.x=e.x<0?0:1;break;case wd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ed:e.y=e.y-Math.floor(e.y);break;case vr:e.y=e.y<0?0:1;break;case wd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=N0;rn.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,n=0,i=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],g=l[5],_=l[9],x=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+g+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,S=(g+1)/2,b=(h+1)/2,C=(u+f)/4,E=(d+x)/4,P=(_+m)/4;return v>S&&v>b?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=C/i,s=E/i):S>b?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=P/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=E/s,r=P/s),this.set(i,r,s,n),this}let y=Math.sqrt((m-_)*(m-_)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(d-x)/y,this.z=(f-u)/y,this.w=Math.acos((c+g+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class w1 extends zs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new rn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new j0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rr extends w1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class W0 extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class T1 extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[a+0],g=s[a+1],_=s[a+2],x=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(o===1){e[n+0]=f,e[n+1]=g,e[n+2]=_,e[n+3]=x;return}if(d!==x||l!==f||c!==g||u!==_){let m=1-o;const h=l*f+c*g+u*_+d*x,y=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const b=Math.sqrt(v),C=Math.atan2(b,h*y);m=Math.sin(m*C)/b,o=Math.sin(o*C)/b}const S=o*y;if(l=l*m+f*S,c=c*m+g*S,u=u*m+_*S,d=d*m+x*S,m===1-o){const b=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=b,c*=b,u*=b,d*=b}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],f=s[a+1],g=s[a+2],_=s[a+3];return e[n]=o*_+u*d+l*g-c*f,e[n+1]=l*_+u*f+c*d-o*g,e[n+2]=c*_+u*g+o*f-l*d,e[n+3]=u*_-o*d-l*f-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),f=l(i/2),g=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*u*d+c*g*_,this._y=c*g*d-f*u*_,this._z=c*u*_+f*g*d,this._w=c*u*d-f*g*_;break;case"YXZ":this._x=f*u*d+c*g*_,this._y=c*g*d-f*u*_,this._z=c*u*_-f*g*d,this._w=c*u*d+f*g*_;break;case"ZXY":this._x=f*u*d-c*g*_,this._y=c*g*d+f*u*_,this._z=c*u*_+f*g*d,this._w=c*u*d-f*g*_;break;case"ZYX":this._x=f*u*d-c*g*_,this._y=c*g*d+f*u*_,this._z=c*u*_-f*g*d,this._w=c*u*d+f*g*_;break;case"YZX":this._x=f*u*d+c*g*_,this._y=c*g*d+f*u*_,this._z=c*u*_-f*g*d,this._w=c*u*d-f*g*_;break;case"XZY":this._x=f*u*d-c*g*_,this._y=c*g*d-f*u*_,this._z=c*u*_+f*g*d,this._w=c*u*d+f*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+o+d;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(u-l)*g,this._y=(s-c)*g,this._z=(a-r)*g}else if(i>o&&i>d){const g=2*Math.sqrt(1+i-o-d);this._w=(u-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+c)/g}else if(o>d){const g=2*Math.sqrt(1+o-i-d);this._w=(s-c)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+u)/g}else{const g=2*Math.sqrt(1+d-i-o);this._w=(a-r)/g,this._x=(s+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-n;return this._w=g*a+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,n=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(am.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(am.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zc.copy(this).projectOnVector(e),this.sub(Zc)}reflect(e){return this.sub(Zc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zc=new G,am=new qa;class $a{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(An.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(An.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=An.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,An):An.fromBufferAttribute(s,a),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),So.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),So.copy(i.boundingBox)),So.applyMatrix4(e.matrixWorld),this.union(So)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),Mo.subVectors(this.max,Zs),kr.subVectors(e.a,Zs),zr.subVectors(e.b,Zs),Br.subVectors(e.c,Zs),Mi.subVectors(zr,kr),Ei.subVectors(Br,zr),nr.subVectors(kr,Br);let n=[0,-Mi.z,Mi.y,0,-Ei.z,Ei.y,0,-nr.z,nr.y,Mi.z,0,-Mi.x,Ei.z,0,-Ei.x,nr.z,0,-nr.x,-Mi.y,Mi.x,0,-Ei.y,Ei.x,0,-nr.y,nr.x,0];return!Qc(n,kr,zr,Br,Mo)||(n=[1,0,0,0,1,0,0,0,1],!Qc(n,kr,zr,Br,Mo))?!1:(Eo.crossVectors(Mi,Ei),n=[Eo.x,Eo.y,Eo.z],Qc(n,kr,zr,Br,Mo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qn=[new G,new G,new G,new G,new G,new G,new G,new G],An=new G,So=new $a,kr=new G,zr=new G,Br=new G,Mi=new G,Ei=new G,nr=new G,Zs=new G,Mo=new G,Eo=new G,ir=new G;function Qc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){ir.fromArray(t,s);const o=r.x*Math.abs(ir.x)+r.y*Math.abs(ir.y)+r.z*Math.abs(ir.z),l=e.dot(ir),c=n.dot(ir),u=i.dot(ir);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const C1=new $a,Qs=new G,Jc=new G;class nf{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):C1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qs.subVectors(e,this.center);const n=Qs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Qs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qs.copy(e.center).add(Jc)),this.expandByPoint(Qs.copy(e.center).sub(Jc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new G,eu=new G,wo=new G,wi=new G,tu=new G,To=new G,nu=new G;class A1{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Jn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,n),Jn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){eu.copy(e).add(n).multiplyScalar(.5),wo.copy(n).sub(e).normalize(),wi.copy(this.origin).sub(eu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(wo),o=wi.dot(this.direction),l=-wi.dot(wo),c=wi.lengthSq(),u=Math.abs(1-a*a);let d,f,g,_;if(u>0)if(d=a*l-o,f=a*o-l,_=s*u,d>=0)if(f>=-_)if(f<=_){const x=1/u;d*=x,f*=x,g=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),g=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),g=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),g=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),g=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),g=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),g=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(eu).addScaledVector(wo,f),g}intersectSphere(e,n){Jn.subVectors(e.center,this.origin);const i=Jn.dot(this.direction),r=Jn.dot(Jn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,n,i,r,s){tu.subVectors(n,e),To.subVectors(i,e),nu.crossVectors(tu,To);let a=this.direction.dot(nu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wi.subVectors(this.origin,e);const l=o*this.direction.dot(To.crossVectors(wi,To));if(l<0)return null;const c=o*this.direction.dot(tu.cross(wi));if(c<0||l+c>a)return null;const u=-o*wi.dot(nu);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(e,n,i,r,s,a,o,l,c,u,d,f,g,_,x,m){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,d,f,g,_,x,m)}set(e,n,i,r,s,a,o,l,c,u,d,f,g,_,x,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=g,h[7]=_,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Hr.setFromMatrixColumn(e,0).length(),s=1/Hr.setFromMatrixColumn(e,1).length(),a=1/Hr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,g=a*d,_=o*u,x=o*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=g+_*c,n[5]=f-x*c,n[9]=-o*l,n[2]=x-f*c,n[6]=_+g*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*u,g=l*d,_=c*u,x=c*d;n[0]=f+x*o,n[4]=_*o-g,n[8]=a*c,n[1]=a*d,n[5]=a*u,n[9]=-o,n[2]=g*o-_,n[6]=x+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*u,g=l*d,_=c*u,x=c*d;n[0]=f-x*o,n[4]=-a*d,n[8]=_+g*o,n[1]=g+_*o,n[5]=a*u,n[9]=x-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*u,g=a*d,_=o*u,x=o*d;n[0]=l*u,n[4]=_*c-g,n[8]=f*c+x,n[1]=l*d,n[5]=x*c+f,n[9]=g*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,g=a*c,_=o*l,x=o*c;n[0]=l*u,n[4]=x-f*d,n[8]=_*d+g,n[1]=d,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=g*d+_,n[10]=f-x*d}else if(e.order==="XZY"){const f=a*l,g=a*c,_=o*l,x=o*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+x,n[5]=a*u,n[9]=g*d-_,n[2]=_*d-g,n[6]=o*u,n[10]=x*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(R1,e,b1)}lookAt(e,n,i){const r=this.elements;return on.subVectors(e,n),on.lengthSq()===0&&(on.z=1),on.normalize(),Ti.crossVectors(i,on),Ti.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Ti.crossVectors(i,on)),Ti.normalize(),Co.crossVectors(on,Ti),r[0]=Ti.x,r[4]=Co.x,r[8]=on.x,r[1]=Ti.y,r[5]=Co.y,r[9]=on.y,r[2]=Ti.z,r[6]=Co.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],g=i[13],_=i[2],x=i[6],m=i[10],h=i[14],y=i[3],v=i[7],S=i[11],b=i[15],C=r[0],E=r[4],P=r[8],w=r[12],M=r[1],R=r[5],H=r[9],k=r[13],z=r[2],j=r[6],W=r[10],$=r[14],D=r[3],K=r[7],Q=r[11],se=r[15];return s[0]=a*C+o*M+l*z+c*D,s[4]=a*E+o*R+l*j+c*K,s[8]=a*P+o*H+l*W+c*Q,s[12]=a*w+o*k+l*$+c*se,s[1]=u*C+d*M+f*z+g*D,s[5]=u*E+d*R+f*j+g*K,s[9]=u*P+d*H+f*W+g*Q,s[13]=u*w+d*k+f*$+g*se,s[2]=_*C+x*M+m*z+h*D,s[6]=_*E+x*R+m*j+h*K,s[10]=_*P+x*H+m*W+h*Q,s[14]=_*w+x*k+m*$+h*se,s[3]=y*C+v*M+S*z+b*D,s[7]=y*E+v*R+S*j+b*K,s[11]=y*P+v*H+S*W+b*Q,s[15]=y*w+v*k+S*$+b*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],g=e[14],_=e[3],x=e[7],m=e[11],h=e[15];return _*(+s*l*d-r*c*d-s*o*f+i*c*f+r*o*g-i*l*g)+x*(+n*l*g-n*c*f+s*a*f-r*a*g+r*c*u-s*l*u)+m*(+n*c*d-n*o*g-s*a*d+i*a*g+s*o*u-i*c*u)+h*(-r*o*u-n*l*d+n*o*f+r*a*d-i*a*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],g=e[11],_=e[12],x=e[13],m=e[14],h=e[15],y=d*m*c-x*f*c+x*l*g-o*m*g-d*l*h+o*f*h,v=_*f*c-u*m*c-_*l*g+a*m*g+u*l*h-a*f*h,S=u*x*c-_*d*c+_*o*g-a*x*g-u*o*h+a*d*h,b=_*d*l-u*x*l-_*o*f+a*x*f+u*o*m-a*d*m,C=n*y+i*v+r*S+s*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/C;return e[0]=y*E,e[1]=(x*f*s-d*m*s-x*r*g+i*m*g+d*r*h-i*f*h)*E,e[2]=(o*m*s-x*l*s+x*r*c-i*m*c-o*r*h+i*l*h)*E,e[3]=(d*l*s-o*f*s-d*r*c+i*f*c+o*r*g-i*l*g)*E,e[4]=v*E,e[5]=(u*m*s-_*f*s+_*r*g-n*m*g-u*r*h+n*f*h)*E,e[6]=(_*l*s-a*m*s-_*r*c+n*m*c+a*r*h-n*l*h)*E,e[7]=(a*f*s-u*l*s+u*r*c-n*f*c-a*r*g+n*l*g)*E,e[8]=S*E,e[9]=(_*d*s-u*x*s-_*i*g+n*x*g+u*i*h-n*d*h)*E,e[10]=(a*x*s-_*o*s+_*i*c-n*x*c-a*i*h+n*o*h)*E,e[11]=(u*o*s-a*d*s-u*i*c+n*d*c+a*i*g-n*o*g)*E,e[12]=b*E,e[13]=(u*x*r-_*d*r+_*i*f-n*x*f-u*i*m+n*d*m)*E,e[14]=(_*o*r-a*x*r-_*i*l+n*x*l+a*i*m-n*o*m)*E,e[15]=(a*d*r-u*o*r+u*i*l-n*d*l-a*i*f+n*o*f)*E,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,d=o+o,f=s*c,g=s*u,_=s*d,x=a*u,m=a*d,h=o*d,y=l*c,v=l*u,S=l*d,b=i.x,C=i.y,E=i.z;return r[0]=(1-(x+h))*b,r[1]=(g+S)*b,r[2]=(_-v)*b,r[3]=0,r[4]=(g-S)*C,r[5]=(1-(f+h))*C,r[6]=(m+y)*C,r[7]=0,r[8]=(_+v)*E,r[9]=(m-y)*E,r[10]=(1-(f+x))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Hr.set(r[0],r[1],r[2]).length();const a=Hr.set(r[4],r[5],r[6]).length(),o=Hr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Rn.copy(this);const c=1/s,u=1/a,d=1/o;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=d,Rn.elements[9]*=d,Rn.elements[10]*=d,n.setFromRotationMatrix(Rn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=ui){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let g,_;if(o===ui)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===zl)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ui){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(a-s),f=(n+e)*c,g=(i+r)*u;let _,x;if(o===ui)_=(a+s)*d,x=-2*d;else if(o===zl)_=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Hr=new G,Rn=new wt,R1=new G(0,0,0),b1=new G(1,1,1),Ti=new G,Co=new G,on=new G,om=new wt,lm=new qa;class vi{constructor(e=0,n=0,i=0,r=vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return om.makeRotationFromQuaternion(e),this.setFromRotationMatrix(om,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return lm.setFromEuler(this),this.setFromQuaternion(lm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vi.DEFAULT_ORDER="XYZ";class X0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let P1=0;const cm=new G,Vr=new qa,ei=new wt,Ao=new G,Js=new G,N1=new G,L1=new qa,um=new G(1,0,0),dm=new G(0,1,0),hm=new G(0,0,1),fm={type:"added"},D1={type:"removed"},Gr={type:"childadded",child:null},iu={type:"childremoved",child:null};class hn extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:P1++}),this.uuid=Xa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new G,n=new vi,i=new qa,r=new G(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new ke}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new X0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Vr.setFromAxisAngle(e,n),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(e,n){return Vr.setFromAxisAngle(e,n),this.quaternion.premultiply(Vr),this}rotateX(e){return this.rotateOnAxis(um,e)}rotateY(e){return this.rotateOnAxis(dm,e)}rotateZ(e){return this.rotateOnAxis(hm,e)}translateOnAxis(e,n){return cm.copy(e).applyQuaternion(this.quaternion),this.position.add(cm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(um,e)}translateY(e){return this.translateOnAxis(dm,e)}translateZ(e){return this.translateOnAxis(hm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ao.copy(e):Ao.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Js,Ao,this.up):ei.lookAt(Ao,Js,this.up),this.quaternion.setFromRotationMatrix(ei),r&&(ei.extractRotation(r.matrixWorld),Vr.setFromRotationMatrix(ei),this.quaternion.premultiply(Vr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fm),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(D1),iu.child=e,this.dispatchEvent(iu),iu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fm),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,N1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,L1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),g=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}hn.DEFAULT_UP=new G(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new G,ti=new G,ru=new G,ni=new G,jr=new G,Wr=new G,pm=new G,su=new G,au=new G,ou=new G;class Xn{constructor(e=new G,n=new G,i=new G){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),bn.subVectors(e,n),r.cross(bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){bn.subVectors(r,n),ti.subVectors(i,n),ru.subVectors(e,n);const a=bn.dot(bn),o=bn.dot(ti),l=bn.dot(ru),c=ti.dot(ti),u=ti.dot(ru),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,g=(c*l-o*u)*f,_=(a*u-o*l)*f;return s.set(1-g-_,_,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ni.x),l.addScaledVector(a,ni.y),l.addScaledVector(o,ni.z),l)}static isFrontFacing(e,n,i,r){return bn.subVectors(i,n),ti.subVectors(e,n),bn.cross(ti).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),bn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Xn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Xn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;jr.subVectors(r,i),Wr.subVectors(s,i),su.subVectors(e,i);const l=jr.dot(su),c=Wr.dot(su);if(l<=0&&c<=0)return n.copy(i);au.subVectors(e,r);const u=jr.dot(au),d=Wr.dot(au);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(jr,a);ou.subVectors(e,s);const g=jr.dot(ou),_=Wr.dot(ou);if(_>=0&&g<=_)return n.copy(s);const x=g*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Wr,o);const m=u*_-g*d;if(m<=0&&d-u>=0&&g-_>=0)return pm.subVectors(s,r),o=(d-u)/(d-u+(g-_)),n.copy(r).addScaledVector(pm,o);const h=1/(m+x+f);return a=x*h,o=f*h,n.copy(i).addScaledVector(jr,a).addScaledVector(Wr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const q0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function lu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class tt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=v1(e,1),n=Zt(n,0,1),i=Zt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=lu(a,s,e+1/3),this.g=lu(a,s,e),this.b=lu(a,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=Gn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Gn){const i=q0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}copyLinearToSRGB(e){return this.r=Yc(e.r),this.g=Yc(e.g),this.b=Yc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return Je.fromWorkingColorSpace(Bt.copy(this),e),Math.round(Zt(Bt.r*255,0,255))*65536+Math.round(Zt(Bt.g*255,0,255))*256+Math.round(Zt(Bt.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(Bt.copy(this),n);const i=Bt.r,r=Bt.g,s=Bt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(Bt.copy(this),n),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Gn){Je.fromWorkingColorSpace(Bt.copy(this),e);const n=Bt.r,i=Bt.g,r=Bt.b;return e!==Gn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+n,Ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ci),e.getHSL(Ro);const i=qc(Ci.h,Ro.h,n),r=qc(Ci.s,Ro.s,n),s=qc(Ci.l,Ro.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new tt;tt.NAMES=q0;let U1=0;class lc extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:U1++}),this.uuid=Xa(),this.name="",this.type="Material",this.blending=xs,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xd,this.blendDst=yd,this.blendEquation=hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Il,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=em,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(i.blending=this.blending),this.side!==Yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==xd&&(i.blendSrc=this.blendSrc),this.blendDst!==yd&&(i.blendDst=this.blendDst),this.blendEquation!==hr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Il&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==em&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class $0 extends lc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=P0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new G,bo=new He;class Kn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=tm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return va("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)bo.fromBufferAttribute(this,n),bo.applyMatrix3(e),this.setXY(n,bo.x,bo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ys(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Yt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ys(n,this.array)),n}setX(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ys(n,this.array)),n}setY(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ys(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ys(n,this.array)),n}setW(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array),r=Yt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array),r=Yt(r,this.array),s=Yt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tm&&(e.usage=this.usage),e}}class Y0 extends Kn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class K0 extends Kn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Sr extends Kn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let I1=0;const vn=new wt,cu=new hn,Xr=new G,ln=new $a,ea=new $a,At=new G;class Dr extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:I1++}),this.uuid=Xa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(G0(e)?K0:Y0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,n,i){return vn.makeTranslation(e,n,i),this.applyMatrix4(vn),this}scale(e,n,i){return vn.makeScale(e,n,i),this.applyMatrix4(vn),this}lookAt(e){return cu.lookAt(e),cu.updateMatrix(),this.applyMatrix4(cu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Sr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $a);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ea.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(ln.min,ea.min),ln.expandByPoint(At),At.addVectors(ln.max,ea.max),ln.expandByPoint(At)):(ln.expandByPoint(ea.min),ln.expandByPoint(ea.max))}ln.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)At.fromBufferAttribute(o,c),l&&(Xr.fromBufferAttribute(e,c),At.add(Xr)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new G,l[P]=new G;const c=new G,u=new G,d=new G,f=new He,g=new He,_=new He,x=new G,m=new G;function h(P,w,M){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,M),f.fromBufferAttribute(s,P),g.fromBufferAttribute(s,w),_.fromBufferAttribute(s,M),u.sub(c),d.sub(c),g.sub(f),_.sub(f);const R=1/(g.x*_.y-_.x*g.y);isFinite(R)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(d,-g.y).multiplyScalar(R),m.copy(d).multiplyScalar(g.x).addScaledVector(u,-_.x).multiplyScalar(R),o[P].add(x),o[w].add(x),o[M].add(x),l[P].add(m),l[w].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,w=y.length;P<w;++P){const M=y[P],R=M.start,H=M.count;for(let k=R,z=R+H;k<z;k+=3)h(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const v=new G,S=new G,b=new G,C=new G;function E(P){b.fromBufferAttribute(r,P),C.copy(b);const w=o[P];v.copy(w),v.sub(b.multiplyScalar(b.dot(w))).normalize(),S.crossVectors(C,w);const R=S.dot(l[P])<0?-1:1;a.setXYZW(P,v.x,v.y,v.z,R)}for(let P=0,w=y.length;P<w;++P){const M=y[P],R=M.start,H=M.count;for(let k=R,z=R+H;k<z;k+=3)E(e.getX(k+0)),E(e.getX(k+1)),E(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new G,s=new G,a=new G,o=new G,l=new G,c=new G,u=new G,d=new G;if(e)for(let f=0,g=e.count;f<g;f+=3){const _=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,x),a.fromBufferAttribute(n,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,g=n.count;f<g;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)At.fromBufferAttribute(e,n),At.normalize(),e.setXYZ(n,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let g=0,_=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?g=l[x]*o.data.stride+o.offset:g=l[x]*u;for(let h=0;h<u;h++)f[_++]=c[g++]}return new Kn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Dr,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],g=e(f,i);l.push(g)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const g=c[d];u.push(g.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,g=d.length;f<g;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mm=new wt,rr=new A1,Po=new nf,gm=new G,qr=new G,$r=new G,Yr=new G,uu=new G,No=new G,Lo=new He,Do=new He,Uo=new He,vm=new G,_m=new G,xm=new G,Io=new G,Fo=new G;class qn extends hn{constructor(e=new Dr,n=new $0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){No.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(uu.fromBufferAttribute(d,e),a?No.addScaledVector(uu,u):No.addScaledVector(uu.sub(n),u))}n.add(No)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Po.copy(i.boundingSphere),Po.applyMatrix4(s),rr.copy(e.ray).recast(e.near),!(Po.containsPoint(rr.origin)===!1&&(rr.intersectSphere(Po,gm)===null||rr.origin.distanceToSquared(gm)>(e.far-e.near)**2))&&(mm.copy(s).invert(),rr.copy(e.ray).applyMatrix4(mm),!(i.boundingBox!==null&&rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,rr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){const m=f[_],h=a[m.materialIndex],y=Math.max(m.start,g.start),v=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let S=y,b=v;S<b;S+=3){const C=o.getX(S),E=o.getX(S+1),P=o.getX(S+2);r=Oo(this,h,e,i,c,u,d,C,E,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),x=Math.min(o.count,g.start+g.count);for(let m=_,h=x;m<h;m+=3){const y=o.getX(m),v=o.getX(m+1),S=o.getX(m+2);r=Oo(this,a,e,i,c,u,d,y,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){const m=f[_],h=a[m.materialIndex],y=Math.max(m.start,g.start),v=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let S=y,b=v;S<b;S+=3){const C=S,E=S+1,P=S+2;r=Oo(this,h,e,i,c,u,d,C,E,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),x=Math.min(l.count,g.start+g.count);for(let m=_,h=x;m<h;m+=3){const y=m,v=m+1,S=m+2;r=Oo(this,a,e,i,c,u,d,y,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function F1(t,e,n,i,r,s,a,o){let l;if(e.side===nn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Yi,o),l===null)return null;Fo.copy(o),Fo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Fo);return c<n.near||c>n.far?null:{distance:c,point:Fo.clone(),object:t}}function Oo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,qr),t.getVertexPosition(l,$r),t.getVertexPosition(c,Yr);const u=F1(t,e,n,i,qr,$r,Yr,Io);if(u){r&&(Lo.fromBufferAttribute(r,o),Do.fromBufferAttribute(r,l),Uo.fromBufferAttribute(r,c),u.uv=Xn.getInterpolation(Io,qr,$r,Yr,Lo,Do,Uo,new He)),s&&(Lo.fromBufferAttribute(s,o),Do.fromBufferAttribute(s,l),Uo.fromBufferAttribute(s,c),u.uv1=Xn.getInterpolation(Io,qr,$r,Yr,Lo,Do,Uo,new He)),a&&(vm.fromBufferAttribute(a,o),_m.fromBufferAttribute(a,l),xm.fromBufferAttribute(a,c),u.normal=Xn.getInterpolation(Io,qr,$r,Yr,vm,_m,xm,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new G,materialIndex:0};Xn.getNormal(qr,$r,Yr,d.normal),u.face=d}return u}class Ya extends Dr{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,g=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Sr(c,3)),this.setAttribute("normal",new Sr(u,3)),this.setAttribute("uv",new Sr(d,2));function _(x,m,h,y,v,S,b,C,E,P,w){const M=S/E,R=b/P,H=S/2,k=b/2,z=C/2,j=E+1,W=P+1;let $=0,D=0;const K=new G;for(let Q=0;Q<W;Q++){const se=Q*R-k;for(let xe=0;xe<j;xe++){const ue=xe*M-H;K[x]=ue*y,K[m]=se*v,K[h]=z,c.push(K.x,K.y,K.z),K[x]=0,K[m]=0,K[h]=C>0?1:-1,u.push(K.x,K.y,K.z),d.push(xe/E),d.push(1-Q/P),$+=1}}for(let Q=0;Q<P;Q++)for(let se=0;se<E;se++){const xe=f+se+j*Q,ue=f+se+j*(Q+1),B=f+(se+1)+j*(Q+1),Y=f+(se+1)+j*Q;l.push(xe,ue,Y),l.push(ue,B,Y),D+=6}o.addGroup(g,D,w),g+=D,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ya(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Us(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Gt(t){const e={};for(let n=0;n<t.length;n++){const i=Us(t[n]);for(const r in i)e[r]=i[r]}return e}function O1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Z0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const k1={clone:Us,merge:Gt};var z1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,B1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends lc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=z1,this.fragmentShader=B1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=O1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Q0 extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=ui}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new G,ym=new He,Sm=new He;class Dn extends Q0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Zd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zd*2*Math.atan(Math.tan(Xc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,n){return this.getViewBounds(e,ym,Sm),n.subVectors(Sm,ym)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Xc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Kr=-90,Zr=1;class H1 extends hn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Dn(Kr,Zr,e,n);r.layers=this.layers,this.add(r);const s=new Dn(Kr,Zr,e,n);s.layers=this.layers,this.add(s);const a=new Dn(Kr,Zr,e,n);a.layers=this.layers,this.add(a);const o=new Dn(Kr,Zr,e,n);o.layers=this.layers,this.add(o);const l=new Dn(Kr,Zr,e,n);l.layers=this.layers,this.add(l);const c=new Dn(Kr,Zr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,f,g),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class J0 extends rn{constructor(e,n,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Ps,super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class V1 extends Rr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new J0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Un}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ya(5,5,5),s=new _i({name:"CubemapFromEquirect",uniforms:Us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Wi});s.uniforms.tEquirect.value=n;const a=new qn(r,s),o=n.minFilter;return n.minFilter===_r&&(n.minFilter=Un),new H1(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const du=new G,G1=new G,j1=new ke;class ur{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=du.subVectors(i,n).cross(G1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(du),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||j1.getNormalMatrix(e),r=this.coplanarPoint(du).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sr=new nf,ko=new G;class e_{constructor(e=new ur,n=new ur,i=new ur,r=new ur,s=new ur,a=new ur){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ui){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],x=r[10],m=r[11],h=r[12],y=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,m-g,S-h).normalize(),i[1].setComponents(l+s,f+c,m+g,S+h).normalize(),i[2].setComponents(l+a,f+u,m+_,S+y).normalize(),i[3].setComponents(l-a,f-u,m-_,S-y).normalize(),i[4].setComponents(l-o,f-d,m-x,S-v).normalize(),n===ui)i[5].setComponents(l+o,f+d,m+x,S+v).normalize();else if(n===zl)i[5].setComponents(o,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){return sr.center.set(0,0,0),sr.radius=.7071067811865476,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ko.x=r.normal.x>0?e.max.x:e.min.x,ko.y=r.normal.y>0?e.max.y:e.min.y,ko.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ko)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function t_(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function W1(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),o.onUploadCallback();let g;if(c instanceof Float32Array)g=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=t.SHORT;else if(c instanceof Uint32Array)g=t.UNSIGNED_INT;else if(c instanceof Int32Array)g=t.INT;else if(c instanceof Int8Array)g=t.BYTE;else if(c instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l._updateRange,f=l.updateRanges;if(t.bindBuffer(c,o),d.count===-1&&f.length===0&&t.bufferSubData(c,0,u),f.length!==0){for(let g=0,_=f.length;g<_;g++){const x=f[g];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}d.count!==-1&&(t.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Ka extends Dr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,f=n/l,g=[],_=[],x=[],m=[];for(let h=0;h<u;h++){const y=h*f-a;for(let v=0;v<c;v++){const S=v*d-s;_.push(S,-y,0),x.push(0,0,1),m.push(v/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let y=0;y<o;y++){const v=y+c*h,S=y+c*(h+1),b=y+1+c*(h+1),C=y+1+c*h;g.push(v,S,C),g.push(S,b,C)}this.setIndex(g),this.setAttribute("position",new Sr(_,3)),this.setAttribute("normal",new Sr(x,3)),this.setAttribute("uv",new Sr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.width,e.height,e.widthSegments,e.heightSegments)}}var X1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,q1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Y1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Z1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Q1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,J1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ew=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,tw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,aw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ow=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,mw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_w=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ew=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ww=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Tw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Aw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Uw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Iw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ow=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ww=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$w=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,uT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_T=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ST=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ET=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,RT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,PT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,NT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,DT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,UT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,IT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,BT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,HT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,VT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const WT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$T=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,QT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,JT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,eC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,aC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,uC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_C=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,EC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:X1,alphahash_pars_fragment:q1,alphamap_fragment:$1,alphamap_pars_fragment:Y1,alphatest_fragment:K1,alphatest_pars_fragment:Z1,aomap_fragment:Q1,aomap_pars_fragment:J1,batching_pars_vertex:ew,batching_vertex:tw,begin_vertex:nw,beginnormal_vertex:iw,bsdfs:rw,iridescence_fragment:sw,bumpmap_pars_fragment:aw,clipping_planes_fragment:ow,clipping_planes_pars_fragment:lw,clipping_planes_pars_vertex:cw,clipping_planes_vertex:uw,color_fragment:dw,color_pars_fragment:hw,color_pars_vertex:fw,color_vertex:pw,common:mw,cube_uv_reflection_fragment:gw,defaultnormal_vertex:vw,displacementmap_pars_vertex:_w,displacementmap_vertex:xw,emissivemap_fragment:yw,emissivemap_pars_fragment:Sw,colorspace_fragment:Mw,colorspace_pars_fragment:Ew,envmap_fragment:ww,envmap_common_pars_fragment:Tw,envmap_pars_fragment:Cw,envmap_pars_vertex:Aw,envmap_physical_pars_fragment:kw,envmap_vertex:Rw,fog_vertex:bw,fog_pars_vertex:Pw,fog_fragment:Nw,fog_pars_fragment:Lw,gradientmap_pars_fragment:Dw,lightmap_pars_fragment:Uw,lights_lambert_fragment:Iw,lights_lambert_pars_fragment:Fw,lights_pars_begin:Ow,lights_toon_fragment:zw,lights_toon_pars_fragment:Bw,lights_phong_fragment:Hw,lights_phong_pars_fragment:Vw,lights_physical_fragment:Gw,lights_physical_pars_fragment:jw,lights_fragment_begin:Ww,lights_fragment_maps:Xw,lights_fragment_end:qw,logdepthbuf_fragment:$w,logdepthbuf_pars_fragment:Yw,logdepthbuf_pars_vertex:Kw,logdepthbuf_vertex:Zw,map_fragment:Qw,map_pars_fragment:Jw,map_particle_fragment:eT,map_particle_pars_fragment:tT,metalnessmap_fragment:nT,metalnessmap_pars_fragment:iT,morphinstance_vertex:rT,morphcolor_vertex:sT,morphnormal_vertex:aT,morphtarget_pars_vertex:oT,morphtarget_vertex:lT,normal_fragment_begin:cT,normal_fragment_maps:uT,normal_pars_fragment:dT,normal_pars_vertex:hT,normal_vertex:fT,normalmap_pars_fragment:pT,clearcoat_normal_fragment_begin:mT,clearcoat_normal_fragment_maps:gT,clearcoat_pars_fragment:vT,iridescence_pars_fragment:_T,opaque_fragment:xT,packing:yT,premultiplied_alpha_fragment:ST,project_vertex:MT,dithering_fragment:ET,dithering_pars_fragment:wT,roughnessmap_fragment:TT,roughnessmap_pars_fragment:CT,shadowmap_pars_fragment:AT,shadowmap_pars_vertex:RT,shadowmap_vertex:bT,shadowmask_pars_fragment:PT,skinbase_vertex:NT,skinning_pars_vertex:LT,skinning_vertex:DT,skinnormal_vertex:UT,specularmap_fragment:IT,specularmap_pars_fragment:FT,tonemapping_fragment:OT,tonemapping_pars_fragment:kT,transmission_fragment:zT,transmission_pars_fragment:BT,uv_pars_fragment:HT,uv_pars_vertex:VT,uv_vertex:GT,worldpos_vertex:jT,background_vert:WT,background_frag:XT,backgroundCube_vert:qT,backgroundCube_frag:$T,cube_vert:YT,cube_frag:KT,depth_vert:ZT,depth_frag:QT,distanceRGBA_vert:JT,distanceRGBA_frag:eC,equirect_vert:tC,equirect_frag:nC,linedashed_vert:iC,linedashed_frag:rC,meshbasic_vert:sC,meshbasic_frag:aC,meshlambert_vert:oC,meshlambert_frag:lC,meshmatcap_vert:cC,meshmatcap_frag:uC,meshnormal_vert:dC,meshnormal_frag:hC,meshphong_vert:fC,meshphong_frag:pC,meshphysical_vert:mC,meshphysical_frag:gC,meshtoon_vert:vC,meshtoon_frag:_C,points_vert:xC,points_frag:yC,shadow_vert:SC,shadow_frag:MC,sprite_vert:EC,sprite_frag:wC},he={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},jn={basic:{uniforms:Gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new tt(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Gt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Gt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new tt(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Gt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Gt([he.points,he.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Gt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Gt([he.common,he.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Gt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Gt([he.sprite,he.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Gt([he.common,he.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Gt([he.lights,he.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};jn.physical={uniforms:Gt([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const zo={r:0,b:0,g:0},ar=new vi,TC=new wt;function CC(t,e,n,i,r,s,a){const o=new tt(0);let l=s===!0?0:1,c,u,d=null,f=0,g=null;function _(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?n:e).get(v)),v}function x(y){let v=!1;const S=_(y);S===null?h(o,l):S&&S.isColor&&(h(S,1),v=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(y,v){const S=_(v);S&&(S.isCubeTexture||S.mapping===ac)?(u===void 0&&(u=new qn(new Ya(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:Us(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,C,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ar.copy(v.backgroundRotation),ar.x*=-1,ar.y*=-1,ar.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(TC.makeRotationFromEuler(ar)),u.material.toneMapped=Je.getTransfer(S.colorSpace)!==rt,(d!==S||f!==S.version||g!==t.toneMapping)&&(u.material.needsUpdate=!0,d=S,f=S.version,g=t.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new qn(new Ka(2,2),new _i({name:"BackgroundMaterial",uniforms:Us(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Je.getTransfer(S.colorSpace)!==rt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,g=t.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function h(y,v){y.getRGB(zo,Z0(t)),i.buffers.color.setClear(zo.r,zo.g,zo.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),l=v,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,h(o,l)},render:x,addToRenderList:m}}function AC(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(M,R,H,k,z){let j=!1;const W=d(k,H,R);s!==W&&(s=W,c(s.object)),j=g(M,k,H,z),j&&_(M,k,H,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,S(M,R,H,k),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function u(M){return t.deleteVertexArray(M)}function d(M,R,H){const k=H.wireframe===!0;let z=i[M.id];z===void 0&&(z={},i[M.id]=z);let j=z[R.id];j===void 0&&(j={},z[R.id]=j);let W=j[k];return W===void 0&&(W=f(l()),j[k]=W),W}function f(M){const R=[],H=[],k=[];for(let z=0;z<n;z++)R[z]=0,H[z]=0,k[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:H,attributeDivisors:k,object:M,attributes:{},index:null}}function g(M,R,H,k){const z=s.attributes,j=R.attributes;let W=0;const $=H.getAttributes();for(const D in $)if($[D].location>=0){const Q=z[D];let se=j[D];if(se===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(se=M.instanceColor)),Q===void 0||Q.attribute!==se||se&&Q.data!==se.data)return!0;W++}return s.attributesNum!==W||s.index!==k}function _(M,R,H,k){const z={},j=R.attributes;let W=0;const $=H.getAttributes();for(const D in $)if($[D].location>=0){let Q=j[D];Q===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor));const se={};se.attribute=Q,Q&&Q.data&&(se.data=Q.data),z[D]=se,W++}s.attributes=z,s.attributesNum=W,s.index=k}function x(){const M=s.newAttributes;for(let R=0,H=M.length;R<H;R++)M[R]=0}function m(M){h(M,0)}function h(M,R){const H=s.newAttributes,k=s.enabledAttributes,z=s.attributeDivisors;H[M]=1,k[M]===0&&(t.enableVertexAttribArray(M),k[M]=1),z[M]!==R&&(t.vertexAttribDivisor(M,R),z[M]=R)}function y(){const M=s.newAttributes,R=s.enabledAttributes;for(let H=0,k=R.length;H<k;H++)R[H]!==M[H]&&(t.disableVertexAttribArray(H),R[H]=0)}function v(M,R,H,k,z,j,W){W===!0?t.vertexAttribIPointer(M,R,H,z,j):t.vertexAttribPointer(M,R,H,k,z,j)}function S(M,R,H,k){x();const z=k.attributes,j=H.getAttributes(),W=R.defaultAttributeValues;for(const $ in j){const D=j[$];if(D.location>=0){let K=z[$];if(K===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(K=M.instanceColor)),K!==void 0){const Q=K.normalized,se=K.itemSize,xe=e.get(K);if(xe===void 0)continue;const ue=xe.buffer,B=xe.type,Y=xe.bytesPerElement,ne=B===t.INT||B===t.UNSIGNED_INT||K.gpuType===Yh;if(K.isInterleavedBufferAttribute){const ae=K.data,Me=ae.stride,Ee=K.offset;if(ae.isInstancedInterleavedBuffer){for(let Re=0;Re<D.locationSize;Re++)h(D.location+Re,ae.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Re=0;Re<D.locationSize;Re++)m(D.location+Re);t.bindBuffer(t.ARRAY_BUFFER,ue);for(let Re=0;Re<D.locationSize;Re++)v(D.location+Re,se/D.locationSize,B,Q,Me*Y,(Ee+se/D.locationSize*Re)*Y,ne)}else{if(K.isInstancedBufferAttribute){for(let ae=0;ae<D.locationSize;ae++)h(D.location+ae,K.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ae=0;ae<D.locationSize;ae++)m(D.location+ae);t.bindBuffer(t.ARRAY_BUFFER,ue);for(let ae=0;ae<D.locationSize;ae++)v(D.location+ae,se/D.locationSize,B,Q,se*Y,se/D.locationSize*ae*Y,ne)}}else if(W!==void 0){const Q=W[$];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(D.location,Q);break;case 3:t.vertexAttrib3fv(D.location,Q);break;case 4:t.vertexAttrib4fv(D.location,Q);break;default:t.vertexAttrib1fv(D.location,Q)}}}}y()}function b(){P();for(const M in i){const R=i[M];for(const H in R){const k=R[H];for(const z in k)u(k[z].object),delete k[z];delete R[H]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const R=i[M.id];for(const H in R){const k=R[H];for(const z in k)u(k[z].object),delete k[z];delete R[H]}delete i[M.id]}function E(M){for(const R in i){const H=i[R];if(H[M.id]===void 0)continue;const k=H[M.id];for(const z in k)u(k[z].object),delete k[z];delete H[M.id]}}function P(){w(),a=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:w,dispose:b,releaseStatesOfGeometry:C,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function RC(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];n.update(g,i,1)}function l(c,u,d,f){if(d===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<c.length;_++)a(c[_],u[_],f[_]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let _=0;for(let x=0;x<d;x++)_+=u[x];for(let x=0;x<f.length;x++)n.update(_,i,f[x])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function bC(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Fn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const E=C===Wa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==gi&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ci&&!E)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),h=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:h,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:S,maxSamples:b}}function PC(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new ur,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const g=d.length!==0||f||i!==0||r;return r=f,i=d.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,g){const _=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,h=t.get(d);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const y=s?0:i,v=y*4;let S=h.clippingState||null;l.value=S,S=u(_,f,v,g);for(let b=0;b!==v;++b)S[b]=n[b];h.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,g,_){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const h=g+x*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<h)&&(m=new Float32Array(h));for(let v=0,S=g;v!==x;++v,S+=4)a.copy(d[v]).applyMatrix4(y,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function NC(t){let e=new WeakMap;function n(a,o){return o===Sd?a.mapping=Ps:o===Md&&(a.mapping=Ns),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Sd||o===Md)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new V1(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class n_ extends Q0{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ds=4,Mm=[.125,.215,.35,.446,.526,.582],fr=20,hu=new n_,Em=new tt;let fu=null,pu=0,mu=0,gu=!1;const dr=(1+Math.sqrt(5))/2,Qr=1/dr,wm=[new G(-dr,Qr,0),new G(dr,Qr,0),new G(-Qr,0,dr),new G(Qr,0,dr),new G(0,dr,-Qr),new G(0,dr,Qr),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class Tm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){fu=this._renderer.getRenderTarget(),pu=this._renderer.getActiveCubeFace(),mu=this._renderer.getActiveMipmapLevel(),gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Am(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fu,pu,mu),this._renderer.xr.enabled=gu,e.scissorTest=!1,Bo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ps||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fu=this._renderer.getRenderTarget(),pu=this._renderer.getActiveCubeFace(),mu=this._renderer.getActiveMipmapLevel(),gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Wa,format:Fn,colorSpace:er,depthBuffer:!1},r=Cm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=LC(s)),this._blurMaterial=DC(s,e,n)}return r}_compileMaterial(e){const n=new qn(this._lodPlanes[0],e);this._renderer.compile(n,hu)}_sceneToCubeUV(e,n,i,r){const o=new Dn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Em),u.toneMapping=Xi,u.autoClear=!1;const g=new $0({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),_=new qn(new Ya,g);let x=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,x=!0):(g.color.copy(Em),x=!0);for(let h=0;h<6;h++){const y=h%3;y===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):y===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const v=this._cubeSize;Bo(r,y*v,h>2?v:0,v,v),u.setRenderTarget(r),x&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ps||e.mapping===Ns;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Am());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new qn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Bo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,hu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=wm[(r-s-1)%wm.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new qn(this._lodPlanes[r],c),f=c.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*fr-1),x=s/_,m=isFinite(s)?1+Math.floor(u*x):fr;m>fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fr}`);const h=[];let y=0;for(let E=0;E<fr;++E){const P=E/x,w=Math.exp(-P*P/2);h.push(w),E===0?y+=w:E<m&&(y+=2*w)}for(let E=0;E<h.length;E++)h[E]=h[E]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-i;const S=this._sizeLods[r],b=3*S*(r>v-ds?r-v+ds:0),C=4*(this._cubeSize-S);Bo(n,b,C,3*S,2*S),l.setRenderTarget(n),l.render(d,hu)}}function LC(t){const e=[],n=[],i=[];let r=t;const s=t-ds+1+Mm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-ds?l=Mm[a-t+ds-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],g=6,_=6,x=3,m=2,h=1,y=new Float32Array(x*_*g),v=new Float32Array(m*_*g),S=new Float32Array(h*_*g);for(let C=0;C<g;C++){const E=C%3*2/3-1,P=C>2?0:-1,w=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];y.set(w,x*_*C),v.set(f,m*_*C);const M=[C,C,C,C,C,C];S.set(M,h*_*C)}const b=new Dr;b.setAttribute("position",new Kn(y,x)),b.setAttribute("uv",new Kn(v,m)),b.setAttribute("faceIndex",new Kn(S,h)),e.push(b),r>ds&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Cm(t,e,n){const i=new Rr(t,e,n);return i.texture.mapping=ac,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function DC(t,e,n){const i=new Float32Array(fr),r=new G(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Am(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Rm(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function rf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function UC(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Sd||l===Md,u=l===Ps||l===Ns;if(c||u){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new Tm(t)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const g=o.image;return c&&g&&g.height>0||u&&g&&r(g)?(n===null&&(n=new Tm(t)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function IC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&va("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function FC(t,e,n,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const x=f.morphAttributes[_];for(let m=0,h=x.length;m<h;m++)e.remove(x[m])}f.removeEventListener("dispose",a),delete r[f.id];const g=s.get(f);g&&(e.remove(g),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],t.ARRAY_BUFFER);const g=d.morphAttributes;for(const _ in g){const x=g[_];for(let m=0,h=x.length;m<h;m++)e.update(x[m],t.ARRAY_BUFFER)}}function c(d){const f=[],g=d.index,_=d.attributes.position;let x=0;if(g!==null){const y=g.array;x=g.version;for(let v=0,S=y.length;v<S;v+=3){const b=y[v+0],C=y[v+1],E=y[v+2];f.push(b,C,C,E,E,b)}}else if(_!==void 0){const y=_.array;x=_.version;for(let v=0,S=y.length/3-1;v<S;v+=3){const b=v+0,C=v+1,E=v+2;f.push(b,C,C,E,E,b)}}else return;const m=new(G0(f)?K0:Y0)(f,1);m.version=x;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){const f=s.get(d);if(f){const g=d.index;g!==null&&f.version<g.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function OC(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,g){t.drawElements(i,g,s,f*a),n.update(g,i,1)}function c(f,g,_){_!==0&&(t.drawElementsInstanced(i,g,s,f*a,_),n.update(g,i,_))}function u(f,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,f,0,_);let m=0;for(let h=0;h<_;h++)m+=g[h];n.update(m,i,1)}function d(f,g,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/a,g[h],x[h]);else{m.multiDrawElementsInstancedWEBGL(i,g,0,s,f,0,x,0,_);let h=0;for(let y=0;y<_;y++)h+=g[y];for(let y=0;y<x.length;y++)n.update(h,i,x[y])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function kC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function zC(t,e,n){const i=new WeakMap,r=new bt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let M=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var g=M;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),x===!0&&(S=2),m===!0&&(S=3);let b=o.attributes.position.count*S,C=1;b>e.maxTextureSize&&(C=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const E=new Float32Array(b*C*4*d),P=new W0(E,b,C,d);P.type=ci,P.needsUpdate=!0;const w=S*4;for(let R=0;R<d;R++){const H=h[R],k=y[R],z=v[R],j=b*C*4*R;for(let W=0;W<H.count;W++){const $=W*w;_===!0&&(r.fromBufferAttribute(H,W),E[j+$+0]=r.x,E[j+$+1]=r.y,E[j+$+2]=r.z,E[j+$+3]=0),x===!0&&(r.fromBufferAttribute(k,W),E[j+$+4]=r.x,E[j+$+5]=r.y,E[j+$+6]=r.z,E[j+$+7]=0),m===!0&&(r.fromBufferAttribute(z,W),E[j+$+8]=r.x,E[j+$+9]=r.y,E[j+$+10]=r.z,E[j+$+11]=z.itemSize===4?r.w:1)}}f={count:d,texture:P,size:new He(b,C)},i.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const x=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function BC(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class i_ extends rn{constructor(e,n,i,r,s,a,o,l,c,u=ys){if(u!==ys&&u!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ys&&(i=Ar),i===void 0&&u===Ds&&(i=Ls),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Sn,this.minFilter=l!==void 0?l:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const r_=new rn,bm=new i_(1,1),s_=new W0,a_=new T1,o_=new J0,Pm=[],Nm=[],Lm=new Float32Array(16),Dm=new Float32Array(9),Um=new Float32Array(4);function Bs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Pm[r];if(s===void 0&&(s=new Float32Array(r),Pm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Tt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ct(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function cc(t,e){let n=Nm[e];n===void 0&&(n=new Int32Array(e),Nm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function HC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function VC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2fv(this.addr,e),Ct(n,e)}}function GC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tt(n,e))return;t.uniform3fv(this.addr,e),Ct(n,e)}}function jC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4fv(this.addr,e),Ct(n,e)}}function WC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ct(n,e)}else{if(Tt(n,i))return;Um.set(i),t.uniformMatrix2fv(this.addr,!1,Um),Ct(n,i)}}function XC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ct(n,e)}else{if(Tt(n,i))return;Dm.set(i),t.uniformMatrix3fv(this.addr,!1,Dm),Ct(n,i)}}function qC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ct(n,e)}else{if(Tt(n,i))return;Lm.set(i),t.uniformMatrix4fv(this.addr,!1,Lm),Ct(n,i)}}function $C(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function YC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2iv(this.addr,e),Ct(n,e)}}function KC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3iv(this.addr,e),Ct(n,e)}}function ZC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4iv(this.addr,e),Ct(n,e)}}function QC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function JC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2uiv(this.addr,e),Ct(n,e)}}function eA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3uiv(this.addr,e),Ct(n,e)}}function tA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4uiv(this.addr,e),Ct(n,e)}}function nA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(bm.compareFunction=V0,s=bm):s=r_,n.setTexture2D(e||s,r)}function iA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||a_,r)}function rA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||o_,r)}function sA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||s_,r)}function aA(t){switch(t){case 5126:return HC;case 35664:return VC;case 35665:return GC;case 35666:return jC;case 35674:return WC;case 35675:return XC;case 35676:return qC;case 5124:case 35670:return $C;case 35667:case 35671:return YC;case 35668:case 35672:return KC;case 35669:case 35673:return ZC;case 5125:return QC;case 36294:return JC;case 36295:return eA;case 36296:return tA;case 35678:case 36198:case 36298:case 36306:case 35682:return nA;case 35679:case 36299:case 36307:return iA;case 35680:case 36300:case 36308:case 36293:return rA;case 36289:case 36303:case 36311:case 36292:return sA}}function oA(t,e){t.uniform1fv(this.addr,e)}function lA(t,e){const n=Bs(e,this.size,2);t.uniform2fv(this.addr,n)}function cA(t,e){const n=Bs(e,this.size,3);t.uniform3fv(this.addr,n)}function uA(t,e){const n=Bs(e,this.size,4);t.uniform4fv(this.addr,n)}function dA(t,e){const n=Bs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function hA(t,e){const n=Bs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function fA(t,e){const n=Bs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function pA(t,e){t.uniform1iv(this.addr,e)}function mA(t,e){t.uniform2iv(this.addr,e)}function gA(t,e){t.uniform3iv(this.addr,e)}function vA(t,e){t.uniform4iv(this.addr,e)}function _A(t,e){t.uniform1uiv(this.addr,e)}function xA(t,e){t.uniform2uiv(this.addr,e)}function yA(t,e){t.uniform3uiv(this.addr,e)}function SA(t,e){t.uniform4uiv(this.addr,e)}function MA(t,e,n){const i=this.cache,r=e.length,s=cc(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||r_,s[a])}function EA(t,e,n){const i=this.cache,r=e.length,s=cc(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||a_,s[a])}function wA(t,e,n){const i=this.cache,r=e.length,s=cc(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||o_,s[a])}function TA(t,e,n){const i=this.cache,r=e.length,s=cc(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||s_,s[a])}function CA(t){switch(t){case 5126:return oA;case 35664:return lA;case 35665:return cA;case 35666:return uA;case 35674:return dA;case 35675:return hA;case 35676:return fA;case 5124:case 35670:return pA;case 35667:case 35671:return mA;case 35668:case 35672:return gA;case 35669:case 35673:return vA;case 5125:return _A;case 36294:return xA;case 36295:return yA;case 36296:return SA;case 35678:case 36198:case 36298:case 36306:case 35682:return MA;case 35679:case 36299:case 36307:return EA;case 35680:case 36300:case 36308:case 36293:return wA;case 36289:case 36303:case 36311:case 36292:return TA}}class AA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=aA(n.type)}}class RA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=CA(n.type)}}class bA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const vu=/(\w+)(\])?(\[|\.)?/g;function Im(t,e){t.seq.push(e),t.map[e.id]=e}function PA(t,e,n){const i=t.name,r=i.length;for(vu.lastIndex=0;;){const s=vu.exec(i),a=vu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Im(n,c===void 0?new AA(o,t,e):new RA(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new bA(o),Im(n,d)),n=d}}}class ol{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);PA(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Fm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const NA=37297;let LA=0;function DA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function UA(t){const e=Je.getPrimaries(Je.workingColorSpace),n=Je.getPrimaries(t);let i;switch(e===n?i="":e===kl&&n===Ol?i="LinearDisplayP3ToLinearSRGB":e===Ol&&n===kl&&(i="LinearSRGBToLinearDisplayP3"),t){case er:case oc:return[i,"LinearTransferOETF"];case Gn:case tf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Om(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+DA(t.getShaderSource(e),a)}else return r}function IA(t,e){const n=UA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function FA(t,e){let n;switch(e){case QE:n="Linear";break;case JE:n="Reinhard";break;case e1:n="OptimizedCineon";break;case t1:n="ACESFilmic";break;case i1:n="AgX";break;case r1:n="Neutral";break;case n1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ho=new G;function OA(){Je.getLuminanceCoefficients(Ho);const t=Ho.x.toFixed(4),e=Ho.y.toFixed(4),n=Ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(aa).join(`
`)}function zA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function BA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function aa(t){return t!==""}function km(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qd(t){return t.replace(HA,GA)}const VA=new Map;function GA(t,e){let n=Oe[e];if(n===void 0){const i=VA.get(e);if(i!==void 0)n=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qd(n)}const jA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bm(t){return t.replace(jA,WA)}function WA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function XA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===b0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===wE?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function qA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ps:case Ns:e="ENVMAP_TYPE_CUBE";break;case ac:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $A(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ns:e="ENVMAP_MODE_REFRACTION";break}return e}function YA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case P0:e="ENVMAP_BLENDING_MULTIPLY";break;case KE:e="ENVMAP_BLENDING_MIX";break;case ZE:e="ENVMAP_BLENDING_ADD";break}return e}function KA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ZA(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=XA(n),c=qA(n),u=$A(n),d=YA(n),f=KA(n),g=kA(n),_=zA(s),x=r.createProgram();let m,h,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(aa).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(aa).join(`
`),h.length>0&&(h+=`
`)):(m=[Hm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(aa).join(`
`),h=[Hm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Xi?"#define TONE_MAPPING":"",n.toneMapping!==Xi?Oe.tonemapping_pars_fragment:"",n.toneMapping!==Xi?FA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,IA("linearToOutputTexel",n.outputColorSpace),OA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(aa).join(`
`)),a=Qd(a),a=km(a,n),a=zm(a,n),o=Qd(o),o=km(o,n),o=zm(o,n),a=Bm(a),o=Bm(o),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===nm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===nm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=y+m+a,S=y+h+o,b=Fm(r,r.VERTEX_SHADER,v),C=Fm(r,r.FRAGMENT_SHADER,S);r.attachShader(x,b),r.attachShader(x,C),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function E(R){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(x).trim(),k=r.getShaderInfoLog(b).trim(),z=r.getShaderInfoLog(C).trim();let j=!0,W=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,b,C);else{const $=Om(r,b,"vertex"),D=Om(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+H+`
`+$+`
`+D)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(k===""||z==="")&&(W=!1);W&&(R.diagnostics={runnable:j,programLog:H,vertexShader:{log:k,prefix:m},fragmentShader:{log:z,prefix:h}})}r.deleteShader(b),r.deleteShader(C),P=new ol(r,x),w=BA(r,x)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,NA)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=LA++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=C,this}let QA=0;class JA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new eR(e),n.set(e,i)),i}}class eR{constructor(e){this.id=QA++,this.code=e,this.usedTimes=0}}function tR(t,e,n,i,r,s,a){const o=new X0,l=new JA,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,M,R,H,k){const z=H.fog,j=k.geometry,W=w.isMeshStandardMaterial?H.environment:null,$=(w.isMeshStandardMaterial?n:e).get(w.envMap||W),D=$&&$.mapping===ac?$.image.height:null,K=_[w.type];w.precision!==null&&(g=r.getMaxPrecision(w.precision),g!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const Q=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,se=Q!==void 0?Q.length:0;let xe=0;j.morphAttributes.position!==void 0&&(xe=1),j.morphAttributes.normal!==void 0&&(xe=2),j.morphAttributes.color!==void 0&&(xe=3);let ue,B,Y,ne;if(K){const Ye=jn[K];ue=Ye.vertexShader,B=Ye.fragmentShader}else ue=w.vertexShader,B=w.fragmentShader,l.update(w),Y=l.getVertexShaderID(w),ne=l.getFragmentShaderID(w);const ae=t.getRenderTarget(),Me=k.isInstancedMesh===!0,Ee=k.isBatchedMesh===!0,Re=!!w.map,Xe=!!w.matcap,L=!!$,dt=!!w.aoMap,qe=!!w.lightMap,$e=!!w.bumpMap,we=!!w.normalMap,vt=!!w.displacementMap,De=!!w.emissiveMap,Ie=!!w.metalnessMap,N=!!w.roughnessMap,T=w.anisotropy>0,q=w.clearcoat>0,te=w.dispersion>0,re=w.iridescence>0,ee=w.sheen>0,Ce=w.transmission>0,fe=T&&!!w.anisotropyMap,ve=q&&!!w.clearcoatMap,Fe=q&&!!w.clearcoatNormalMap,oe=q&&!!w.clearcoatRoughnessMap,ge=re&&!!w.iridescenceMap,Ve=re&&!!w.iridescenceThicknessMap,Le=ee&&!!w.sheenColorMap,_e=ee&&!!w.sheenRoughnessMap,Ue=!!w.specularMap,ze=!!w.specularColorMap,ot=!!w.specularIntensityMap,U=Ce&&!!w.transmissionMap,le=Ce&&!!w.thicknessMap,Z=!!w.gradientMap,J=!!w.alphaMap,de=w.alphaTest>0,be=!!w.alphaHash,Ge=!!w.extensions;let _t=Xi;w.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(_t=t.toneMapping);const Nt={shaderID:K,shaderType:w.type,shaderName:w.name,vertexShader:ue,fragmentShader:B,defines:w.defines,customVertexShaderID:Y,customFragmentShaderID:ne,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:Ee,batchingColor:Ee&&k._colorsTexture!==null,instancing:Me,instancingColor:Me&&k.instanceColor!==null,instancingMorph:Me&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ae===null?t.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:er,alphaToCoverage:!!w.alphaToCoverage,map:Re,matcap:Xe,envMap:L,envMapMode:L&&$.mapping,envMapCubeUVHeight:D,aoMap:dt,lightMap:qe,bumpMap:$e,normalMap:we,displacementMap:f&&vt,emissiveMap:De,normalMapObjectSpace:we&&w.normalMapType===c1,normalMapTangentSpace:we&&w.normalMapType===l1,metalnessMap:Ie,roughnessMap:N,anisotropy:T,anisotropyMap:fe,clearcoat:q,clearcoatMap:ve,clearcoatNormalMap:Fe,clearcoatRoughnessMap:oe,dispersion:te,iridescence:re,iridescenceMap:ge,iridescenceThicknessMap:Ve,sheen:ee,sheenColorMap:Le,sheenRoughnessMap:_e,specularMap:Ue,specularColorMap:ze,specularIntensityMap:ot,transmission:Ce,transmissionMap:U,thicknessMap:le,gradientMap:Z,opaque:w.transparent===!1&&w.blending===xs&&w.alphaToCoverage===!1,alphaMap:J,alphaTest:de,alphaHash:be,combine:w.combine,mapUv:Re&&x(w.map.channel),aoMapUv:dt&&x(w.aoMap.channel),lightMapUv:qe&&x(w.lightMap.channel),bumpMapUv:$e&&x(w.bumpMap.channel),normalMapUv:we&&x(w.normalMap.channel),displacementMapUv:vt&&x(w.displacementMap.channel),emissiveMapUv:De&&x(w.emissiveMap.channel),metalnessMapUv:Ie&&x(w.metalnessMap.channel),roughnessMapUv:N&&x(w.roughnessMap.channel),anisotropyMapUv:fe&&x(w.anisotropyMap.channel),clearcoatMapUv:ve&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:_e&&x(w.sheenRoughnessMap.channel),specularMapUv:Ue&&x(w.specularMap.channel),specularColorMapUv:ze&&x(w.specularColorMap.channel),specularIntensityMapUv:ot&&x(w.specularIntensityMap.channel),transmissionMapUv:U&&x(w.transmissionMap.channel),thicknessMapUv:le&&x(w.thicknessMap.channel),alphaMapUv:J&&x(w.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(we||T),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!j.attributes.uv&&(Re||J),fog:!!z,useFog:w.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:k.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:xe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:_t,decodeVideoTexture:Re&&w.map.isVideoTexture===!0&&Je.getTransfer(w.map.colorSpace)===rt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ai,flipSided:w.side===nn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ge&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&w.extensions.multiDraw===!0||Ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Nt.vertexUv1s=c.has(1),Nt.vertexUv2s=c.has(2),Nt.vertexUv3s=c.has(3),c.clear(),Nt}function h(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const R in w.defines)M.push(R),M.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(y(M,w),v(M,w),M.push(t.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function y(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function v(w,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.doubleSided&&o.enable(10),M.flipSided&&o.enable(11),M.useDepthPacking&&o.enable(12),M.dithering&&o.enable(13),M.transmission&&o.enable(14),M.sheen&&o.enable(15),M.opaque&&o.enable(16),M.pointsUvs&&o.enable(17),M.decodeVideoTexture&&o.enable(18),M.alphaToCoverage&&o.enable(19),w.push(o.mask)}function S(w){const M=_[w.type];let R;if(M){const H=jn[M];R=k1.clone(H.uniforms)}else R=w.uniforms;return R}function b(w,M){let R;for(let H=0,k=u.length;H<k;H++){const z=u[H];if(z.cacheKey===M){R=z,++R.usedTimes;break}}return R===void 0&&(R=new ZA(t,M,w,s),u.push(R)),R}function C(w){if(--w.usedTimes===0){const M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function E(w){l.remove(w)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:S,acquireProgram:b,releaseProgram:C,releaseShaderCache:E,programs:u,dispose:P}}function nR(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function iR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Vm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Gm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d,f,g,_,x,m){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:g,groupOrder:_,renderOrder:d.renderOrder,z:x,group:m},t[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=g,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=x,h.group=m),e++,h}function o(d,f,g,_,x,m){const h=a(d,f,g,_,x,m);g.transmission>0?i.push(h):g.transparent===!0?r.push(h):n.push(h)}function l(d,f,g,_,x,m){const h=a(d,f,g,_,x,m);g.transmission>0?i.unshift(h):g.transparent===!0?r.unshift(h):n.unshift(h)}function c(d,f){n.length>1&&n.sort(d||iR),i.length>1&&i.sort(f||Vm),r.length>1&&r.sort(f||Vm)}function u(){for(let d=e,f=t.length;d<f;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function rR(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Gm,t.set(i,[a])):r>=s.length?(a=new Gm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function sR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new G,color:new tt};break;case"SpotLight":n={position:new G,direction:new G,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":n={color:new tt,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=n,n}}}function aR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let oR=0;function lR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function cR(t){const e=new sR,n=aR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const r=new G,s=new wt,a=new wt;function o(c){let u=0,d=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let g=0,_=0,x=0,m=0,h=0,y=0,v=0,S=0,b=0,C=0,E=0;c.sort(lR);for(let w=0,M=c.length;w<M;w++){const R=c[w],H=R.color,k=R.intensity,z=R.distance,j=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=H.r*k,d+=H.g*k,f+=H.b*k;else if(R.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(R.sh.coefficients[W],k);E++}else if(R.isDirectionalLight){const W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const $=R.shadow,D=n.get(R);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,i.directionalShadow[g]=D,i.directionalShadowMap[g]=j,i.directionalShadowMatrix[g]=R.shadow.matrix,y++}i.directional[g]=W,g++}else if(R.isSpotLight){const W=e.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(H).multiplyScalar(k),W.distance=z,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,i.spot[x]=W;const $=R.shadow;if(R.map&&(i.spotLightMap[b]=R.map,b++,$.updateMatrices(R),R.castShadow&&C++),i.spotLightMatrix[x]=$.matrix,R.castShadow){const D=n.get(R);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,i.spotShadow[x]=D,i.spotShadowMap[x]=j,S++}x++}else if(R.isRectAreaLight){const W=e.get(R);W.color.copy(H).multiplyScalar(k),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=W,m++}else if(R.isPointLight){const W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){const $=R.shadow,D=n.get(R);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,D.shadowCameraNear=$.camera.near,D.shadowCameraFar=$.camera.far,i.pointShadow[_]=D,i.pointShadowMap[_]=j,i.pointShadowMatrix[_]=R.shadow.matrix,v++}i.point[_]=W,_++}else if(R.isHemisphereLight){const W=e.get(R);W.skyColor.copy(R.color).multiplyScalar(k),W.groundColor.copy(R.groundColor).multiplyScalar(k),i.hemi[h]=W,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==g||P.pointLength!==_||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==h||P.numDirectionalShadows!==y||P.numPointShadows!==v||P.numSpotShadows!==S||P.numSpotMaps!==b||P.numLightProbes!==E)&&(i.directional.length=g,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+b-C,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=E,P.directionalLength=g,P.pointLength=_,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=h,P.numDirectionalShadows=y,P.numPointShadows=v,P.numSpotShadows=S,P.numSpotMaps=b,P.numLightProbes=E,i.version=oR++)}function l(c,u){let d=0,f=0,g=0,_=0,x=0;const m=u.matrixWorldInverse;for(let h=0,y=c.length;h<y;h++){const v=c[h];if(v.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(v.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),g++}else if(v.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(v.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function jm(t){const e=new cR(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function o(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function uR(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new jm(t),e.set(r,[o])):s>=a.length?(o=new jm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class dR extends lc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=a1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hR extends lc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mR(t,e,n){let i=new e_;const r=new He,s=new He,a=new bt,o=new dR({depthPacking:o1}),l=new hR,c={},u=n.maxTextureSize,d={[Yi]:nn,[nn]:Yi,[ai]:ai},f=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:fR,fragmentShader:pR}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const _=new Dr;_.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new qn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=b0;let h=this.type;this.render=function(C,E,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const w=t.getRenderTarget(),M=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),H=t.state;H.setBlending(Wi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const k=h!==ii&&this.type===ii,z=h===ii&&this.type!==ii;for(let j=0,W=C.length;j<W;j++){const $=C[j],D=$.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const K=D.getFrameExtents();if(r.multiply(K),s.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/K.x),r.x=s.x*K.x,D.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/K.y),r.y=s.y*K.y,D.mapSize.y=s.y)),D.map===null||k===!0||z===!0){const se=this.type!==ii?{minFilter:Sn,magFilter:Sn}:{};D.map!==null&&D.map.dispose(),D.map=new Rr(r.x,r.y,se),D.map.texture.name=$.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const Q=D.getViewportCount();for(let se=0;se<Q;se++){const xe=D.getViewport(se);a.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),H.viewport(a),D.updateMatrices($,se),i=D.getFrustum(),S(E,P,D.camera,$,this.type)}D.isPointLightShadow!==!0&&this.type===ii&&y(D,P),D.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(w,M,R)};function y(C,E){const P=e.update(x);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Rr(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(E,null,P,f,x,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(E,null,P,g,x,null)}function v(C,E,P,w){let M=null;const R=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)M=R;else if(M=P.isPointLight===!0?l:o,t.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const H=M.uuid,k=E.uuid;let z=c[H];z===void 0&&(z={},c[H]=z);let j=z[k];j===void 0&&(j=M.clone(),z[k]=j,E.addEventListener("dispose",b)),M=j}if(M.visible=E.visible,M.wireframe=E.wireframe,w===ii?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:d[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const H=t.properties.get(M);H.light=P}return M}function S(C,E,P,w,M){if(C.visible===!1)return;if(C.layers.test(E.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===ii)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const k=e.update(C),z=C.material;if(Array.isArray(z)){const j=k.groups;for(let W=0,$=j.length;W<$;W++){const D=j[W],K=z[D.materialIndex];if(K&&K.visible){const Q=v(C,K,w,M);C.onBeforeShadow(t,C,E,P,k,Q,D),t.renderBufferDirect(P,null,k,Q,C,D),C.onAfterShadow(t,C,E,P,k,Q,D)}}}else if(z.visible){const j=v(C,z,w,M);C.onBeforeShadow(t,C,E,P,k,j,null),t.renderBufferDirect(P,null,k,j,C,null),C.onAfterShadow(t,C,E,P,k,j,null)}}const H=C.children;for(let k=0,z=H.length;k<z;k++)S(H[k],E,P,w,M)}function b(C){C.target.removeEventListener("dispose",b);for(const P in c){const w=c[P],M=C.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}function gR(t){function e(){let U=!1;const le=new bt;let Z=null;const J=new bt(0,0,0,0);return{setMask:function(de){Z!==de&&!U&&(t.colorMask(de,de,de,de),Z=de)},setLocked:function(de){U=de},setClear:function(de,be,Ge,_t,Nt){Nt===!0&&(de*=_t,be*=_t,Ge*=_t),le.set(de,be,Ge,_t),J.equals(le)===!1&&(t.clearColor(de,be,Ge,_t),J.copy(le))},reset:function(){U=!1,Z=null,J.set(-1,0,0,0)}}}function n(){let U=!1,le=null,Z=null,J=null;return{setTest:function(de){de?ne(t.DEPTH_TEST):ae(t.DEPTH_TEST)},setMask:function(de){le!==de&&!U&&(t.depthMask(de),le=de)},setFunc:function(de){if(Z!==de){switch(de){case GE:t.depthFunc(t.NEVER);break;case jE:t.depthFunc(t.ALWAYS);break;case WE:t.depthFunc(t.LESS);break;case Il:t.depthFunc(t.LEQUAL);break;case XE:t.depthFunc(t.EQUAL);break;case qE:t.depthFunc(t.GEQUAL);break;case $E:t.depthFunc(t.GREATER);break;case YE:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Z=de}},setLocked:function(de){U=de},setClear:function(de){J!==de&&(t.clearDepth(de),J=de)},reset:function(){U=!1,le=null,Z=null,J=null}}}function i(){let U=!1,le=null,Z=null,J=null,de=null,be=null,Ge=null,_t=null,Nt=null;return{setTest:function(Ye){U||(Ye?ne(t.STENCIL_TEST):ae(t.STENCIL_TEST))},setMask:function(Ye){le!==Ye&&!U&&(t.stencilMask(Ye),le=Ye)},setFunc:function(Ye,Zn,Bn){(Z!==Ye||J!==Zn||de!==Bn)&&(t.stencilFunc(Ye,Zn,Bn),Z=Ye,J=Zn,de=Bn)},setOp:function(Ye,Zn,Bn){(be!==Ye||Ge!==Zn||_t!==Bn)&&(t.stencilOp(Ye,Zn,Bn),be=Ye,Ge=Zn,_t=Bn)},setLocked:function(Ye){U=Ye},setClear:function(Ye){Nt!==Ye&&(t.clearStencil(Ye),Nt=Ye)},reset:function(){U=!1,le=null,Z=null,J=null,de=null,be=null,Ge=null,_t=null,Nt=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,f=[],g=null,_=!1,x=null,m=null,h=null,y=null,v=null,S=null,b=null,C=new tt(0,0,0),E=0,P=!1,w=null,M=null,R=null,H=null,k=null;const z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,W=0;const $=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec($)[1]),j=W>=1):$.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),j=W>=2);let D=null,K={};const Q=t.getParameter(t.SCISSOR_BOX),se=t.getParameter(t.VIEWPORT),xe=new bt().fromArray(Q),ue=new bt().fromArray(se);function B(U,le,Z,J){const de=new Uint8Array(4),be=t.createTexture();t.bindTexture(U,be),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ge=0;Ge<Z;Ge++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(le,0,t.RGBA,1,1,J,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(le+Ge,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return be}const Y={};Y[t.TEXTURE_2D]=B(t.TEXTURE_2D,t.TEXTURE_2D,1),Y[t.TEXTURE_CUBE_MAP]=B(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[t.TEXTURE_2D_ARRAY]=B(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Y[t.TEXTURE_3D]=B(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ne(t.DEPTH_TEST),s.setFunc(Il),$e(!1),we(Kp),ne(t.CULL_FACE),dt(Wi);function ne(U){c[U]!==!0&&(t.enable(U),c[U]=!0)}function ae(U){c[U]!==!1&&(t.disable(U),c[U]=!1)}function Me(U,le){return u[U]!==le?(t.bindFramebuffer(U,le),u[U]=le,U===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=le),U===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=le),!0):!1}function Ee(U,le){let Z=f,J=!1;if(U){Z=d.get(le),Z===void 0&&(Z=[],d.set(le,Z));const de=U.textures;if(Z.length!==de.length||Z[0]!==t.COLOR_ATTACHMENT0){for(let be=0,Ge=de.length;be<Ge;be++)Z[be]=t.COLOR_ATTACHMENT0+be;Z.length=de.length,J=!0}}else Z[0]!==t.BACK&&(Z[0]=t.BACK,J=!0);J&&t.drawBuffers(Z)}function Re(U){return g!==U?(t.useProgram(U),g=U,!0):!1}const Xe={[hr]:t.FUNC_ADD,[CE]:t.FUNC_SUBTRACT,[AE]:t.FUNC_REVERSE_SUBTRACT};Xe[RE]=t.MIN,Xe[bE]=t.MAX;const L={[PE]:t.ZERO,[NE]:t.ONE,[LE]:t.SRC_COLOR,[xd]:t.SRC_ALPHA,[kE]:t.SRC_ALPHA_SATURATE,[FE]:t.DST_COLOR,[UE]:t.DST_ALPHA,[DE]:t.ONE_MINUS_SRC_COLOR,[yd]:t.ONE_MINUS_SRC_ALPHA,[OE]:t.ONE_MINUS_DST_COLOR,[IE]:t.ONE_MINUS_DST_ALPHA,[zE]:t.CONSTANT_COLOR,[BE]:t.ONE_MINUS_CONSTANT_COLOR,[HE]:t.CONSTANT_ALPHA,[VE]:t.ONE_MINUS_CONSTANT_ALPHA};function dt(U,le,Z,J,de,be,Ge,_t,Nt,Ye){if(U===Wi){_===!0&&(ae(t.BLEND),_=!1);return}if(_===!1&&(ne(t.BLEND),_=!0),U!==TE){if(U!==x||Ye!==P){if((m!==hr||v!==hr)&&(t.blendEquation(t.FUNC_ADD),m=hr,v=hr),Ye)switch(U){case xs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Zp:t.blendFunc(t.ONE,t.ONE);break;case Qp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Jp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case xs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Zp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Qp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Jp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}h=null,y=null,S=null,b=null,C.set(0,0,0),E=0,x=U,P=Ye}return}de=de||le,be=be||Z,Ge=Ge||J,(le!==m||de!==v)&&(t.blendEquationSeparate(Xe[le],Xe[de]),m=le,v=de),(Z!==h||J!==y||be!==S||Ge!==b)&&(t.blendFuncSeparate(L[Z],L[J],L[be],L[Ge]),h=Z,y=J,S=be,b=Ge),(_t.equals(C)===!1||Nt!==E)&&(t.blendColor(_t.r,_t.g,_t.b,Nt),C.copy(_t),E=Nt),x=U,P=!1}function qe(U,le){U.side===ai?ae(t.CULL_FACE):ne(t.CULL_FACE);let Z=U.side===nn;le&&(Z=!Z),$e(Z),U.blending===xs&&U.transparent===!1?dt(Wi):dt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const J=U.stencilWrite;a.setTest(J),J&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),De(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ne(t.SAMPLE_ALPHA_TO_COVERAGE):ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function $e(U){w!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),w=U)}function we(U){U!==ME?(ne(t.CULL_FACE),U!==M&&(U===Kp?t.cullFace(t.BACK):U===EE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ae(t.CULL_FACE),M=U}function vt(U){U!==R&&(j&&t.lineWidth(U),R=U)}function De(U,le,Z){U?(ne(t.POLYGON_OFFSET_FILL),(H!==le||k!==Z)&&(t.polygonOffset(le,Z),H=le,k=Z)):ae(t.POLYGON_OFFSET_FILL)}function Ie(U){U?ne(t.SCISSOR_TEST):ae(t.SCISSOR_TEST)}function N(U){U===void 0&&(U=t.TEXTURE0+z-1),D!==U&&(t.activeTexture(U),D=U)}function T(U,le,Z){Z===void 0&&(D===null?Z=t.TEXTURE0+z-1:Z=D);let J=K[Z];J===void 0&&(J={type:void 0,texture:void 0},K[Z]=J),(J.type!==U||J.texture!==le)&&(D!==Z&&(t.activeTexture(Z),D=Z),t.bindTexture(U,le||Y[U]),J.type=U,J.texture=le)}function q(){const U=K[D];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function te(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ve(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(U){xe.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),xe.copy(U))}function _e(U){ue.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),ue.copy(U))}function Ue(U,le){let Z=l.get(le);Z===void 0&&(Z=new WeakMap,l.set(le,Z));let J=Z.get(U);J===void 0&&(J=t.getUniformBlockIndex(le,U.name),Z.set(U,J))}function ze(U,le){const J=l.get(le).get(U);o.get(le)!==J&&(t.uniformBlockBinding(le,J,U.__bindingPointIndex),o.set(le,J))}function ot(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},D=null,K={},u={},d=new WeakMap,f=[],g=null,_=!1,x=null,m=null,h=null,y=null,v=null,S=null,b=null,C=new tt(0,0,0),E=0,P=!1,w=null,M=null,R=null,H=null,k=null,xe.set(0,0,t.canvas.width,t.canvas.height),ue.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:ne,disable:ae,bindFramebuffer:Me,drawBuffers:Ee,useProgram:Re,setBlending:dt,setMaterial:qe,setFlipSided:$e,setCullFace:we,setLineWidth:vt,setPolygonOffset:De,setScissorTest:Ie,activeTexture:N,bindTexture:T,unbindTexture:q,compressedTexImage2D:te,compressedTexImage3D:re,texImage2D:ge,texImage3D:Ve,updateUBOMapping:Ue,uniformBlockBinding:ze,texStorage2D:Fe,texStorage3D:oe,texSubImage2D:ee,texSubImage3D:Ce,compressedTexSubImage2D:fe,compressedTexSubImage3D:ve,scissor:Le,viewport:_e,reset:ot}}function Wm(t,e,n,i){const r=vR(i);switch(n){case I0:return t*e;case O0:return t*e;case k0:return t*e*2;case z0:return t*e/r.components*r.byteLength;case Qh:return t*e/r.components*r.byteLength;case B0:return t*e*2/r.components*r.byteLength;case Jh:return t*e*2/r.components*r.byteLength;case F0:return t*e*3/r.components*r.byteLength;case Fn:return t*e*4/r.components*r.byteLength;case ef:return t*e*4/r.components*r.byteLength;case nl:case il:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case rl:case sl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Cd:case Rd:return Math.max(t,16)*Math.max(e,8)/4;case Td:case Ad:return Math.max(t,8)*Math.max(e,8)/2;case bd:case Pd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Nd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ld:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Dd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ud:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Id:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Od:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case kd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case zd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Bd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Hd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Vd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Gd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case jd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Wd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case al:case Xd:case qd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case H0:case $d:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Yd:case Kd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function vR(t){switch(t){case gi:case L0:return{byteLength:1,components:1};case ka:case D0:case Wa:return{byteLength:2,components:1};case Kh:case Zh:return{byteLength:2,components:4};case Ar:case Yh:case ci:return{byteLength:4,components:1};case U0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function _R(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,u=new WeakMap;let d;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(N,T){return g?new OffscreenCanvas(N,T):Bl("canvas")}function x(N,T,q){let te=1;const re=Ie(N);if((re.width>q||re.height>q)&&(te=q/Math.max(re.width,re.height)),te<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ee=Math.floor(te*re.width),Ce=Math.floor(te*re.height);d===void 0&&(d=_(ee,Ce));const fe=T?_(ee,Ce):d;return fe.width=ee,fe.height=Ce,fe.getContext("2d").drawImage(N,0,0,ee,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ee+"x"+Ce+")."),fe}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),N;return N}function m(N){return N.generateMipmaps&&N.minFilter!==Sn&&N.minFilter!==Un}function h(N){t.generateMipmap(N)}function y(N,T,q,te,re=!1){if(N!==null){if(t[N]!==void 0)return t[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ee=T;if(T===t.RED&&(q===t.FLOAT&&(ee=t.R32F),q===t.HALF_FLOAT&&(ee=t.R16F),q===t.UNSIGNED_BYTE&&(ee=t.R8)),T===t.RED_INTEGER&&(q===t.UNSIGNED_BYTE&&(ee=t.R8UI),q===t.UNSIGNED_SHORT&&(ee=t.R16UI),q===t.UNSIGNED_INT&&(ee=t.R32UI),q===t.BYTE&&(ee=t.R8I),q===t.SHORT&&(ee=t.R16I),q===t.INT&&(ee=t.R32I)),T===t.RG&&(q===t.FLOAT&&(ee=t.RG32F),q===t.HALF_FLOAT&&(ee=t.RG16F),q===t.UNSIGNED_BYTE&&(ee=t.RG8)),T===t.RG_INTEGER&&(q===t.UNSIGNED_BYTE&&(ee=t.RG8UI),q===t.UNSIGNED_SHORT&&(ee=t.RG16UI),q===t.UNSIGNED_INT&&(ee=t.RG32UI),q===t.BYTE&&(ee=t.RG8I),q===t.SHORT&&(ee=t.RG16I),q===t.INT&&(ee=t.RG32I)),T===t.RGB&&q===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),T===t.RGBA){const Ce=re?Fl:Je.getTransfer(te);q===t.FLOAT&&(ee=t.RGBA32F),q===t.HALF_FLOAT&&(ee=t.RGBA16F),q===t.UNSIGNED_BYTE&&(ee=Ce===rt?t.SRGB8_ALPHA8:t.RGBA8),q===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),q===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function v(N,T){let q;return N?T===null||T===Ar||T===Ls?q=t.DEPTH24_STENCIL8:T===ci?q=t.DEPTH32F_STENCIL8:T===ka&&(q=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ar||T===Ls?q=t.DEPTH_COMPONENT24:T===ci?q=t.DEPTH_COMPONENT32F:T===ka&&(q=t.DEPTH_COMPONENT16),q}function S(N,T){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==Sn&&N.minFilter!==Un?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function b(N){const T=N.target;T.removeEventListener("dispose",b),E(T),T.isVideoTexture&&u.delete(T)}function C(N){const T=N.target;T.removeEventListener("dispose",C),w(T)}function E(N){const T=i.get(N);if(T.__webglInit===void 0)return;const q=N.source,te=f.get(q);if(te){const re=te[T.__cacheKey];re.usedTimes--,re.usedTimes===0&&P(N),Object.keys(te).length===0&&f.delete(q)}i.remove(N)}function P(N){const T=i.get(N);t.deleteTexture(T.__webglTexture);const q=N.source,te=f.get(q);delete te[T.__cacheKey],a.memory.textures--}function w(N){const T=i.get(N);if(N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(T.__webglFramebuffer[te]))for(let re=0;re<T.__webglFramebuffer[te].length;re++)t.deleteFramebuffer(T.__webglFramebuffer[te][re]);else t.deleteFramebuffer(T.__webglFramebuffer[te]);T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer[te])}else{if(Array.isArray(T.__webglFramebuffer))for(let te=0;te<T.__webglFramebuffer.length;te++)t.deleteFramebuffer(T.__webglFramebuffer[te]);else t.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&t.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let te=0;te<T.__webglColorRenderbuffer.length;te++)T.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(T.__webglColorRenderbuffer[te]);T.__webglDepthRenderbuffer&&t.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const q=N.textures;for(let te=0,re=q.length;te<re;te++){const ee=i.get(q[te]);ee.__webglTexture&&(t.deleteTexture(ee.__webglTexture),a.memory.textures--),i.remove(q[te])}i.remove(N)}let M=0;function R(){M=0}function H(){const N=M;return N>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),M+=1,N}function k(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function z(N,T){const q=i.get(N);if(N.isVideoTexture&&vt(N),N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){const te=N.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(q,N,T);return}}n.bindTexture(t.TEXTURE_2D,q.__webglTexture,t.TEXTURE0+T)}function j(N,T){const q=i.get(N);if(N.version>0&&q.__version!==N.version){ue(q,N,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,q.__webglTexture,t.TEXTURE0+T)}function W(N,T){const q=i.get(N);if(N.version>0&&q.__version!==N.version){ue(q,N,T);return}n.bindTexture(t.TEXTURE_3D,q.__webglTexture,t.TEXTURE0+T)}function $(N,T){const q=i.get(N);if(N.version>0&&q.__version!==N.version){B(q,N,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture,t.TEXTURE0+T)}const D={[Ed]:t.REPEAT,[vr]:t.CLAMP_TO_EDGE,[wd]:t.MIRRORED_REPEAT},K={[Sn]:t.NEAREST,[s1]:t.NEAREST_MIPMAP_NEAREST,[yo]:t.NEAREST_MIPMAP_LINEAR,[Un]:t.LINEAR,[Wc]:t.LINEAR_MIPMAP_NEAREST,[_r]:t.LINEAR_MIPMAP_LINEAR},Q={[u1]:t.NEVER,[g1]:t.ALWAYS,[d1]:t.LESS,[V0]:t.LEQUAL,[h1]:t.EQUAL,[m1]:t.GEQUAL,[f1]:t.GREATER,[p1]:t.NOTEQUAL};function se(N,T){if(T.type===ci&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Un||T.magFilter===Wc||T.magFilter===yo||T.magFilter===_r||T.minFilter===Un||T.minFilter===Wc||T.minFilter===yo||T.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(N,t.TEXTURE_WRAP_S,D[T.wrapS]),t.texParameteri(N,t.TEXTURE_WRAP_T,D[T.wrapT]),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,D[T.wrapR]),t.texParameteri(N,t.TEXTURE_MAG_FILTER,K[T.magFilter]),t.texParameteri(N,t.TEXTURE_MIN_FILTER,K[T.minFilter]),T.compareFunction&&(t.texParameteri(N,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(N,t.TEXTURE_COMPARE_FUNC,Q[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Sn||T.minFilter!==yo&&T.minFilter!==_r||T.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");t.texParameterf(N,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function xe(N,T){let q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",b));const te=T.source;let re=f.get(te);re===void 0&&(re={},f.set(te,re));const ee=k(T);if(ee!==N.__cacheKey){re[ee]===void 0&&(re[ee]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,q=!0),re[ee].usedTimes++;const Ce=re[N.__cacheKey];Ce!==void 0&&(re[N.__cacheKey].usedTimes--,Ce.usedTimes===0&&P(T)),N.__cacheKey=ee,N.__webglTexture=re[ee].texture}return q}function ue(N,T,q){let te=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(te=t.TEXTURE_3D);const re=xe(N,T),ee=T.source;n.bindTexture(te,N.__webglTexture,t.TEXTURE0+q);const Ce=i.get(ee);if(ee.version!==Ce.__version||re===!0){n.activeTexture(t.TEXTURE0+q);const fe=Je.getPrimaries(Je.workingColorSpace),ve=T.colorSpace===Li?null:Je.getPrimaries(T.colorSpace),Fe=T.colorSpace===Li||fe===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let oe=x(T.image,!1,r.maxTextureSize);oe=De(T,oe);const ge=s.convert(T.format,T.colorSpace),Ve=s.convert(T.type);let Le=y(T.internalFormat,ge,Ve,T.colorSpace,T.isVideoTexture);se(te,T);let _e;const Ue=T.mipmaps,ze=T.isVideoTexture!==!0,ot=Ce.__version===void 0||re===!0,U=ee.dataReady,le=S(T,oe);if(T.isDepthTexture)Le=v(T.format===Ds,T.type),ot&&(ze?n.texStorage2D(t.TEXTURE_2D,1,Le,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,Le,oe.width,oe.height,0,ge,Ve,null));else if(T.isDataTexture)if(Ue.length>0){ze&&ot&&n.texStorage2D(t.TEXTURE_2D,le,Le,Ue[0].width,Ue[0].height);for(let Z=0,J=Ue.length;Z<J;Z++)_e=Ue[Z],ze?U&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,_e.width,_e.height,ge,Ve,_e.data):n.texImage2D(t.TEXTURE_2D,Z,Le,_e.width,_e.height,0,ge,Ve,_e.data);T.generateMipmaps=!1}else ze?(ot&&n.texStorage2D(t.TEXTURE_2D,le,Le,oe.width,oe.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,ge,Ve,oe.data)):n.texImage2D(t.TEXTURE_2D,0,Le,oe.width,oe.height,0,ge,Ve,oe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ze&&ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,Le,Ue[0].width,Ue[0].height,oe.depth);for(let Z=0,J=Ue.length;Z<J;Z++)if(_e=Ue[Z],T.format!==Fn)if(ge!==null)if(ze){if(U)if(T.layerUpdates.size>0){const de=Wm(_e.width,_e.height,T.format,T.type);for(const be of T.layerUpdates){const Ge=_e.data.subarray(be*de/_e.data.BYTES_PER_ELEMENT,(be+1)*de/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,be,_e.width,_e.height,1,ge,Ge,0,0)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,_e.width,_e.height,oe.depth,ge,_e.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Z,Le,_e.width,_e.height,oe.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,_e.width,_e.height,oe.depth,ge,Ve,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Z,Le,_e.width,_e.height,oe.depth,0,ge,Ve,_e.data)}else{ze&&ot&&n.texStorage2D(t.TEXTURE_2D,le,Le,Ue[0].width,Ue[0].height);for(let Z=0,J=Ue.length;Z<J;Z++)_e=Ue[Z],T.format!==Fn?ge!==null?ze?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,Z,0,0,_e.width,_e.height,ge,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,Z,Le,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?U&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,_e.width,_e.height,ge,Ve,_e.data):n.texImage2D(t.TEXTURE_2D,Z,Le,_e.width,_e.height,0,ge,Ve,_e.data)}else if(T.isDataArrayTexture)if(ze){if(ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,Le,oe.width,oe.height,oe.depth),U)if(T.layerUpdates.size>0){const Z=Wm(oe.width,oe.height,T.format,T.type);for(const J of T.layerUpdates){const de=oe.data.subarray(J*Z/oe.data.BYTES_PER_ELEMENT,(J+1)*Z/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,J,oe.width,oe.height,1,ge,Ve,de)}T.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ge,Ve,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,oe.width,oe.height,oe.depth,0,ge,Ve,oe.data);else if(T.isData3DTexture)ze?(ot&&n.texStorage3D(t.TEXTURE_3D,le,Le,oe.width,oe.height,oe.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ge,Ve,oe.data)):n.texImage3D(t.TEXTURE_3D,0,Le,oe.width,oe.height,oe.depth,0,ge,Ve,oe.data);else if(T.isFramebufferTexture){if(ot)if(ze)n.texStorage2D(t.TEXTURE_2D,le,Le,oe.width,oe.height);else{let Z=oe.width,J=oe.height;for(let de=0;de<le;de++)n.texImage2D(t.TEXTURE_2D,de,Le,Z,J,0,ge,Ve,null),Z>>=1,J>>=1}}else if(Ue.length>0){if(ze&&ot){const Z=Ie(Ue[0]);n.texStorage2D(t.TEXTURE_2D,le,Le,Z.width,Z.height)}for(let Z=0,J=Ue.length;Z<J;Z++)_e=Ue[Z],ze?U&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,ge,Ve,_e):n.texImage2D(t.TEXTURE_2D,Z,Le,ge,Ve,_e);T.generateMipmaps=!1}else if(ze){if(ot){const Z=Ie(oe);n.texStorage2D(t.TEXTURE_2D,le,Le,Z.width,Z.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Ve,oe)}else n.texImage2D(t.TEXTURE_2D,0,Le,ge,Ve,oe);m(T)&&h(te),Ce.__version=ee.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function B(N,T,q){if(T.image.length!==6)return;const te=xe(N,T),re=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+q);const ee=i.get(re);if(re.version!==ee.__version||te===!0){n.activeTexture(t.TEXTURE0+q);const Ce=Je.getPrimaries(Je.workingColorSpace),fe=T.colorSpace===Li?null:Je.getPrimaries(T.colorSpace),ve=T.colorSpace===Li||Ce===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Fe=T.isCompressedTexture||T.image[0].isCompressedTexture,oe=T.image[0]&&T.image[0].isDataTexture,ge=[];for(let J=0;J<6;J++)!Fe&&!oe?ge[J]=x(T.image[J],!0,r.maxCubemapSize):ge[J]=oe?T.image[J].image:T.image[J],ge[J]=De(T,ge[J]);const Ve=ge[0],Le=s.convert(T.format,T.colorSpace),_e=s.convert(T.type),Ue=y(T.internalFormat,Le,_e,T.colorSpace),ze=T.isVideoTexture!==!0,ot=ee.__version===void 0||te===!0,U=re.dataReady;let le=S(T,Ve);se(t.TEXTURE_CUBE_MAP,T);let Z;if(Fe){ze&&ot&&n.texStorage2D(t.TEXTURE_CUBE_MAP,le,Ue,Ve.width,Ve.height);for(let J=0;J<6;J++){Z=ge[J].mipmaps;for(let de=0;de<Z.length;de++){const be=Z[de];T.format!==Fn?Le!==null?ze?U&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,0,0,be.width,be.height,Le,be.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,Ue,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,0,0,be.width,be.height,Le,_e,be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,Ue,be.width,be.height,0,Le,_e,be.data)}}}else{if(Z=T.mipmaps,ze&&ot){Z.length>0&&le++;const J=Ie(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,le,Ue,J.width,J.height)}for(let J=0;J<6;J++)if(oe){ze?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ge[J].width,ge[J].height,Le,_e,ge[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ue,ge[J].width,ge[J].height,0,Le,_e,ge[J].data);for(let de=0;de<Z.length;de++){const Ge=Z[de].image[J].image;ze?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,0,0,Ge.width,Ge.height,Le,_e,Ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,Ue,Ge.width,Ge.height,0,Le,_e,Ge.data)}}else{ze?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Le,_e,ge[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ue,Le,_e,ge[J]);for(let de=0;de<Z.length;de++){const be=Z[de];ze?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,0,0,Le,_e,be.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,Ue,Le,_e,be.image[J])}}}m(T)&&h(t.TEXTURE_CUBE_MAP),ee.__version=re.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function Y(N,T,q,te,re,ee){const Ce=s.convert(q.format,q.colorSpace),fe=s.convert(q.type),ve=y(q.internalFormat,Ce,fe,q.colorSpace);if(!i.get(T).__hasExternalTextures){const oe=Math.max(1,T.width>>ee),ge=Math.max(1,T.height>>ee);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,ee,ve,oe,ge,T.depth,0,Ce,fe,null):n.texImage2D(re,ee,ve,oe,ge,0,Ce,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,N),we(T)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,re,i.get(q).__webglTexture,0,$e(T)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,re,i.get(q).__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ne(N,T,q){if(t.bindRenderbuffer(t.RENDERBUFFER,N),T.depthBuffer){const te=T.depthTexture,re=te&&te.isDepthTexture?te.type:null,ee=v(T.stencilBuffer,re),Ce=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=$e(T);we(T)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,ee,T.width,T.height):q?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,ee,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,ee,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ce,t.RENDERBUFFER,N)}else{const te=T.textures;for(let re=0;re<te.length;re++){const ee=te[re],Ce=s.convert(ee.format,ee.colorSpace),fe=s.convert(ee.type),ve=y(ee.internalFormat,Ce,fe,ee.colorSpace),Fe=$e(T);q&&we(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,ve,T.width,T.height):we(T)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Fe,ve,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,ve,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ae(N,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),z(T.depthTexture,0);const te=i.get(T.depthTexture).__webglTexture,re=$e(T);if(T.depthTexture.format===ys)we(T)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(T.depthTexture.format===Ds)we(T)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Me(N){const T=i.get(N),q=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!T.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");ae(T.__webglFramebuffer,N)}else if(q){T.__webglDepthbuffer=[];for(let te=0;te<6;te++)n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[te]),T.__webglDepthbuffer[te]=t.createRenderbuffer(),ne(T.__webglDepthbuffer[te],N,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=t.createRenderbuffer(),ne(T.__webglDepthbuffer,N,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ee(N,T,q){const te=i.get(N);T!==void 0&&Y(te.__webglFramebuffer,N,N.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),q!==void 0&&Me(N)}function Re(N){const T=N.texture,q=i.get(N),te=i.get(T);N.addEventListener("dispose",C);const re=N.textures,ee=N.isWebGLCubeRenderTarget===!0,Ce=re.length>1;if(Ce||(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=T.version,a.memory.textures++),ee){q.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer[fe]=[];for(let ve=0;ve<T.mipmaps.length;ve++)q.__webglFramebuffer[fe][ve]=t.createFramebuffer()}else q.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer=[];for(let fe=0;fe<T.mipmaps.length;fe++)q.__webglFramebuffer[fe]=t.createFramebuffer()}else q.__webglFramebuffer=t.createFramebuffer();if(Ce)for(let fe=0,ve=re.length;fe<ve;fe++){const Fe=i.get(re[fe]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=t.createTexture(),a.memory.textures++)}if(N.samples>0&&we(N)===!1){q.__webglMultisampledFramebuffer=t.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let fe=0;fe<re.length;fe++){const ve=re[fe];q.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,q.__webglColorRenderbuffer[fe]);const Fe=s.convert(ve.format,ve.colorSpace),oe=s.convert(ve.type),ge=y(ve.internalFormat,Fe,oe,ve.colorSpace,N.isXRRenderTarget===!0),Ve=$e(N);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,ge,N.width,N.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,q.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),N.depthBuffer&&(q.__webglDepthRenderbuffer=t.createRenderbuffer(),ne(q.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),se(t.TEXTURE_CUBE_MAP,T);for(let fe=0;fe<6;fe++)if(T.mipmaps&&T.mipmaps.length>0)for(let ve=0;ve<T.mipmaps.length;ve++)Y(q.__webglFramebuffer[fe][ve],N,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ve);else Y(q.__webglFramebuffer[fe],N,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(T)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ce){for(let fe=0,ve=re.length;fe<ve;fe++){const Fe=re[fe],oe=i.get(Fe);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),se(t.TEXTURE_2D,Fe),Y(q.__webglFramebuffer,N,Fe,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),m(Fe)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(fe=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,te.__webglTexture),se(fe,T),T.mipmaps&&T.mipmaps.length>0)for(let ve=0;ve<T.mipmaps.length;ve++)Y(q.__webglFramebuffer[ve],N,T,t.COLOR_ATTACHMENT0,fe,ve);else Y(q.__webglFramebuffer,N,T,t.COLOR_ATTACHMENT0,fe,0);m(T)&&h(fe),n.unbindTexture()}N.depthBuffer&&Me(N)}function Xe(N){const T=N.textures;for(let q=0,te=T.length;q<te;q++){const re=T[q];if(m(re)){const ee=N.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ce=i.get(re).__webglTexture;n.bindTexture(ee,Ce),h(ee),n.unbindTexture()}}}const L=[],dt=[];function qe(N){if(N.samples>0){if(we(N)===!1){const T=N.textures,q=N.width,te=N.height;let re=t.COLOR_BUFFER_BIT;const ee=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ce=i.get(N),fe=T.length>1;if(fe)for(let ve=0;ve<T.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let ve=0;ve<T.length;ve++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[ve]);const Fe=i.get(T[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Fe,0)}t.blitFramebuffer(0,0,q,te,0,0,q,te,re,t.NEAREST),l===!0&&(L.length=0,dt.length=0,L.push(t.COLOR_ATTACHMENT0+ve),N.depthBuffer&&N.resolveDepthBuffer===!1&&(L.push(ee),dt.push(ee),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,dt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,L))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let ve=0;ve<T.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[ve]);const Fe=i.get(T[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,Fe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){const T=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[T])}}}function $e(N){return Math.min(r.maxSamples,N.samples)}function we(N){const T=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function vt(N){const T=a.render.frame;u.get(N)!==T&&(u.set(N,T),N.update())}function De(N,T){const q=N.colorSpace,te=N.format,re=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||q!==er&&q!==Li&&(Je.getTransfer(q)===rt?(te!==Fn||re!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),T}function Ie(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=R,this.setTexture2D=z,this.setTexture2DArray=j,this.setTexture3D=W,this.setTextureCube=$,this.rebindTextures=Ee,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=we}function xR(t,e){function n(i,r=Li){let s;const a=Je.getTransfer(r);if(i===gi)return t.UNSIGNED_BYTE;if(i===Kh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Zh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===U0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===L0)return t.BYTE;if(i===D0)return t.SHORT;if(i===ka)return t.UNSIGNED_SHORT;if(i===Yh)return t.INT;if(i===Ar)return t.UNSIGNED_INT;if(i===ci)return t.FLOAT;if(i===Wa)return t.HALF_FLOAT;if(i===I0)return t.ALPHA;if(i===F0)return t.RGB;if(i===Fn)return t.RGBA;if(i===O0)return t.LUMINANCE;if(i===k0)return t.LUMINANCE_ALPHA;if(i===ys)return t.DEPTH_COMPONENT;if(i===Ds)return t.DEPTH_STENCIL;if(i===z0)return t.RED;if(i===Qh)return t.RED_INTEGER;if(i===B0)return t.RG;if(i===Jh)return t.RG_INTEGER;if(i===ef)return t.RGBA_INTEGER;if(i===nl||i===il||i===rl||i===sl)if(a===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===nl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===nl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===il)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===rl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Td||i===Cd||i===Ad||i===Rd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Td)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ad)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Rd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bd||i===Pd||i===Nd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===bd||i===Pd)return a===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Nd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ld||i===Dd||i===Ud||i===Id||i===Fd||i===Od||i===kd||i===zd||i===Bd||i===Hd||i===Vd||i===Gd||i===jd||i===Wd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ld)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Dd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ud)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Id)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Od)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===kd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===al||i===Xd||i===qd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===al)return a===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===qd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===H0||i===$d||i===Yd||i===Kd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===al)return s.COMPRESSED_RED_RGTC1_EXT;if(i===$d)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Kd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ls?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class yR extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vo extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const SR={type:"move"};class _u{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),h=this._getHandJoint(c,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),g=.02,_=.005;c.inputState.pinching&&f>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(SR)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Vo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const MR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ER=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class wR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new rn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new _i({vertexShader:MR,fragmentShader:ER,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new qn(new Ka(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TR extends zs{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,g=null,_=null;const x=new wR,m=n.getContextAttributes();let h=null,y=null;const v=[],S=[],b=new He;let C=null;const E=new Dn;E.layers.enable(1),E.viewport=new bt;const P=new Dn;P.layers.enable(2),P.viewport=new bt;const w=[E,P],M=new yR;M.layers.enable(1),M.layers.enable(2);let R=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Y=v[B];return Y===void 0&&(Y=new _u,v[B]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(B){let Y=v[B];return Y===void 0&&(Y=new _u,v[B]=Y),Y.getGripSpace()},this.getHand=function(B){let Y=v[B];return Y===void 0&&(Y=new _u,v[B]=Y),Y.getHandSpace()};function k(B){const Y=S.indexOf(B.inputSource);if(Y===-1)return;const ne=v[Y];ne!==void 0&&(ne.update(B.inputSource,B.frame,c||a),ne.dispatchEvent({type:B.type,data:B.inputSource}))}function z(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",j);for(let B=0;B<v.length;B++){const Y=S[B];Y!==null&&(S[B]=null,v[B].disconnect(Y))}R=null,H=null,x.reset(),e.setRenderTarget(h),g=null,f=null,d=null,r=null,y=null,ue.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",z),r.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){const Y={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,Y),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),y=new Rr(g.framebufferWidth,g.framebufferHeight,{format:Fn,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Y=null,ne=null,ae=null;m.depth&&(ae=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Y=m.stencil?Ds:ys,ne=m.stencil?Ls:Ar);const Me={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(Me),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Rr(f.textureWidth,f.textureHeight,{format:Fn,type:gi,depthTexture:new i_(f.textureWidth,f.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ue.setContext(r),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function j(B){for(let Y=0;Y<B.removed.length;Y++){const ne=B.removed[Y],ae=S.indexOf(ne);ae>=0&&(S[ae]=null,v[ae].disconnect(ne))}for(let Y=0;Y<B.added.length;Y++){const ne=B.added[Y];let ae=S.indexOf(ne);if(ae===-1){for(let Ee=0;Ee<v.length;Ee++)if(Ee>=S.length){S.push(ne),ae=Ee;break}else if(S[Ee]===null){S[Ee]=ne,ae=Ee;break}if(ae===-1)break}const Me=v[ae];Me&&Me.connect(ne)}}const W=new G,$=new G;function D(B,Y,ne){W.setFromMatrixPosition(Y.matrixWorld),$.setFromMatrixPosition(ne.matrixWorld);const ae=W.distanceTo($),Me=Y.projectionMatrix.elements,Ee=ne.projectionMatrix.elements,Re=Me[14]/(Me[10]-1),Xe=Me[14]/(Me[10]+1),L=(Me[9]+1)/Me[5],dt=(Me[9]-1)/Me[5],qe=(Me[8]-1)/Me[0],$e=(Ee[8]+1)/Ee[0],we=Re*qe,vt=Re*$e,De=ae/(-qe+$e),Ie=De*-qe;Y.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Ie),B.translateZ(De),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const N=Re+De,T=Xe+De,q=we-Ie,te=vt+(ae-Ie),re=L*Xe/T*N,ee=dt*Xe/T*N;B.projectionMatrix.makePerspective(q,te,re,ee,N,T),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function K(B,Y){Y===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Y.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;x.texture!==null&&(B.near=x.depthNear,B.far=x.depthFar),M.near=P.near=E.near=B.near,M.far=P.far=E.far=B.far,(R!==M.near||H!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,H=M.far,E.near=R,E.far=H,P.near=R,P.far=H,E.updateProjectionMatrix(),P.updateProjectionMatrix(),B.updateProjectionMatrix());const Y=B.parent,ne=M.cameras;K(M,Y);for(let ae=0;ae<ne.length;ae++)K(ne[ae],Y);ne.length===2?D(M,E,P):M.projectionMatrix.copy(E.projectionMatrix),Q(B,M,Y)};function Q(B,Y,ne){ne===null?B.matrix.copy(Y.matrixWorld):(B.matrix.copy(ne.matrixWorld),B.matrix.invert(),B.matrix.multiply(Y.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(Y.projectionMatrix),B.projectionMatrixInverse.copy(Y.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Zd*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(B){l=B,f!==null&&(f.fixedFoveation=B),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=B)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let se=null;function xe(B,Y){if(u=Y.getViewerPose(c||a),_=Y,u!==null){const ne=u.views;g!==null&&(e.setRenderTargetFramebuffer(y,g.framebuffer),e.setRenderTarget(y));let ae=!1;ne.length!==M.cameras.length&&(M.cameras.length=0,ae=!0);for(let Ee=0;Ee<ne.length;Ee++){const Re=ne[Ee];let Xe=null;if(g!==null)Xe=g.getViewport(Re);else{const dt=d.getViewSubImage(f,Re);Xe=dt.viewport,Ee===0&&(e.setRenderTargetTextures(y,dt.colorTexture,f.ignoreDepthValues?void 0:dt.depthStencilTexture),e.setRenderTarget(y))}let L=w[Ee];L===void 0&&(L=new Dn,L.layers.enable(Ee),L.viewport=new bt,w[Ee]=L),L.matrix.fromArray(Re.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(Re.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Ee===0&&(M.matrix.copy(L.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ae===!0&&M.cameras.push(L)}const Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")){const Ee=d.getDepthInformation(ne[0]);Ee&&Ee.isValid&&Ee.texture&&x.init(e,Ee,r.renderState)}}for(let ne=0;ne<v.length;ne++){const ae=S[ne],Me=v[ne];ae!==null&&Me!==void 0&&Me.update(ae,Y,c||a)}se&&se(B,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),_=null}const ue=new t_;ue.setAnimationLoop(xe),this.setAnimationLoop=function(B){se=B},this.dispose=function(){}}}const or=new vi,CR=new wt;function AR(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Z0(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,y,v,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&g(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),x(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,y,v):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===nn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===nn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const y=e.get(h),v=y.envMap,S=y.envMapRotation;v&&(m.envMap.value=v,or.copy(S),or.x*=-1,or.y*=-1,or.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),m.envMapRotation.value.setFromMatrix4(CR.makeRotationFromEuler(or)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,y,v){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*y,m.scale.value=v*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function g(m,h,y){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===nn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const y=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function RR(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){const S=v.program;i.uniformBlockBinding(y,S)}function c(y,v){let S=r[y.id];S===void 0&&(_(y),S=u(y),r[y.id]=S,y.addEventListener("dispose",m));const b=v.program;i.updateUBOMapping(y,b);const C=e.render.frame;s[y.id]!==C&&(f(y),s[y.id]=C)}function u(y){const v=d();y.__bindingPointIndex=v;const S=t.createBuffer(),b=y.__size,C=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,b,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const v=r[y.id],S=y.uniforms,b=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let C=0,E=S.length;C<E;C++){const P=Array.isArray(S[C])?S[C]:[S[C]];for(let w=0,M=P.length;w<M;w++){const R=P[w];if(g(R,C,w,b)===!0){const H=R.__offset,k=Array.isArray(R.value)?R.value:[R.value];let z=0;for(let j=0;j<k.length;j++){const W=k[j],$=x(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,H+z,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,z),z+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(y,v,S,b){const C=y.value,E=v+"_"+S;if(b[E]===void 0)return typeof C=="number"||typeof C=="boolean"?b[E]=C:b[E]=C.clone(),!0;{const P=b[E];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return b[E]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function _(y){const v=y.uniforms;let S=0;const b=16;for(let E=0,P=v.length;E<P;E++){const w=Array.isArray(v[E])?v[E]:[v[E]];for(let M=0,R=w.length;M<R;M++){const H=w[M],k=Array.isArray(H.value)?H.value:[H.value];for(let z=0,j=k.length;z<j;z++){const W=k[z],$=x(W),D=S%b,K=D%$.boundary,Q=D+K;S+=K,Q!==0&&b-Q<$.storage&&(S+=b-Q),H.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=$.storage}}}const C=S%b;return C>0&&(S+=b-C),y.__size=S,y.__cache={},this}function x(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function h(){for(const y in r)t.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}class bR{constructor(e={}){const{canvas:n=_1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let x=null,m=null;const h=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gn,this.toneMapping=Xi,this.toneMappingExposure=1;const v=this;let S=!1,b=0,C=0,E=null,P=-1,w=null;const M=new bt,R=new bt;let H=null;const k=new tt(0);let z=0,j=n.width,W=n.height,$=1,D=null,K=null;const Q=new bt(0,0,j,W),se=new bt(0,0,j,W);let xe=!1;const ue=new e_;let B=!1,Y=!1;const ne=new wt,ae=new G,Me=new bt,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Re=!1;function Xe(){return E===null?$:1}let L=i;function dt(A,I){return n.getContext(A,I)}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${$h}`),n.addEventListener("webglcontextlost",Z,!1),n.addEventListener("webglcontextrestored",J,!1),n.addEventListener("webglcontextcreationerror",de,!1),L===null){const I="webgl2";if(L=dt(I,A),L===null)throw dt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let qe,$e,we,vt,De,Ie,N,T,q,te,re,ee,Ce,fe,ve,Fe,oe,ge,Ve,Le,_e,Ue,ze,ot;function U(){qe=new IC(L),qe.init(),Ue=new xR(L,qe),$e=new bC(L,qe,e,Ue),we=new gR(L),vt=new kC(L),De=new nR,Ie=new _R(L,qe,we,De,$e,Ue,vt),N=new NC(v),T=new UC(v),q=new W1(L),ze=new AC(L,q),te=new FC(L,q,vt,ze),re=new BC(L,te,q,vt),Ve=new zC(L,$e,Ie),Fe=new PC(De),ee=new tR(v,N,T,qe,$e,ze,Fe),Ce=new AR(v,De),fe=new rR,ve=new uR(qe),ge=new CC(v,N,T,we,re,f,l),oe=new mR(v,re,$e),ot=new RR(L,vt,$e,we),Le=new RC(L,qe,vt),_e=new OC(L,qe,vt),vt.programs=ee.programs,v.capabilities=$e,v.extensions=qe,v.properties=De,v.renderLists=fe,v.shadowMap=oe,v.state=we,v.info=vt}U();const le=new TR(v,L);this.xr=le,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=qe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=qe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(A){A!==void 0&&($=A,this.setSize(j,W,!1))},this.getSize=function(A){return A.set(j,W)},this.setSize=function(A,I,V=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=A,W=I,n.width=Math.floor(A*$),n.height=Math.floor(I*$),V===!0&&(n.style.width=A+"px",n.style.height=I+"px"),this.setViewport(0,0,A,I)},this.getDrawingBufferSize=function(A){return A.set(j*$,W*$).floor()},this.setDrawingBufferSize=function(A,I,V){j=A,W=I,$=V,n.width=Math.floor(A*V),n.height=Math.floor(I*V),this.setViewport(0,0,A,I)},this.getCurrentViewport=function(A){return A.copy(M)},this.getViewport=function(A){return A.copy(Q)},this.setViewport=function(A,I,V,X){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,I,V,X),we.viewport(M.copy(Q).multiplyScalar($).round())},this.getScissor=function(A){return A.copy(se)},this.setScissor=function(A,I,V,X){A.isVector4?se.set(A.x,A.y,A.z,A.w):se.set(A,I,V,X),we.scissor(R.copy(se).multiplyScalar($).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(A){we.setScissorTest(xe=A)},this.setOpaqueSort=function(A){D=A},this.setTransparentSort=function(A){K=A},this.getClearColor=function(A){return A.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(A=!0,I=!0,V=!0){let X=0;if(A){let F=!1;if(E!==null){const ce=E.texture.format;F=ce===ef||ce===Jh||ce===Qh}if(F){const ce=E.texture.type,pe=ce===gi||ce===Ar||ce===ka||ce===Ls||ce===Kh||ce===Zh,ye=ge.getClearColor(),Se=ge.getClearAlpha(),Pe=ye.r,Ne=ye.g,Ae=ye.b;pe?(g[0]=Pe,g[1]=Ne,g[2]=Ae,g[3]=Se,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Pe,_[1]=Ne,_[2]=Ae,_[3]=Se,L.clearBufferiv(L.COLOR,0,_))}else X|=L.COLOR_BUFFER_BIT}I&&(X|=L.DEPTH_BUFFER_BIT),V&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Z,!1),n.removeEventListener("webglcontextrestored",J,!1),n.removeEventListener("webglcontextcreationerror",de,!1),fe.dispose(),ve.dispose(),De.dispose(),N.dispose(),T.dispose(),re.dispose(),ze.dispose(),ot.dispose(),ee.dispose(),le.dispose(),le.removeEventListener("sessionstart",Bn),le.removeEventListener("sessionend",uf),tr.stop()};function Z(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=vt.autoReset,I=oe.enabled,V=oe.autoUpdate,X=oe.needsUpdate,F=oe.type;U(),vt.autoReset=A,oe.enabled=I,oe.autoUpdate=V,oe.needsUpdate=X,oe.type=F}function de(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function be(A){const I=A.target;I.removeEventListener("dispose",be),Ge(I)}function Ge(A){_t(A),De.remove(A)}function _t(A){const I=De.get(A).programs;I!==void 0&&(I.forEach(function(V){ee.releaseProgram(V)}),A.isShaderMaterial&&ee.releaseShaderCache(A))}this.renderBufferDirect=function(A,I,V,X,F,ce){I===null&&(I=Ee);const pe=F.isMesh&&F.matrixWorld.determinant()<0,ye=u_(A,I,V,X,F);we.setMaterial(X,pe);let Se=V.index,Pe=1;if(X.wireframe===!0){if(Se=te.getWireframeAttribute(V),Se===void 0)return;Pe=2}const Ne=V.drawRange,Ae=V.attributes.position;let Ke=Ne.start*Pe,ht=(Ne.start+Ne.count)*Pe;ce!==null&&(Ke=Math.max(Ke,ce.start*Pe),ht=Math.min(ht,(ce.start+ce.count)*Pe)),Se!==null?(Ke=Math.max(Ke,0),ht=Math.min(ht,Se.count)):Ae!=null&&(Ke=Math.max(Ke,0),ht=Math.min(ht,Ae.count));const ft=ht-Ke;if(ft<0||ft===1/0)return;ze.setup(F,X,ye,V,Se);let sn,Ze=Le;if(Se!==null&&(sn=q.get(Se),Ze=_e,Ze.setIndex(sn)),F.isMesh)X.wireframe===!0?(we.setLineWidth(X.wireframeLinewidth*Xe()),Ze.setMode(L.LINES)):Ze.setMode(L.TRIANGLES);else if(F.isLine){let Te=X.linewidth;Te===void 0&&(Te=1),we.setLineWidth(Te*Xe()),F.isLineSegments?Ze.setMode(L.LINES):F.isLineLoop?Ze.setMode(L.LINE_LOOP):Ze.setMode(L.LINE_STRIP)}else F.isPoints?Ze.setMode(L.POINTS):F.isSprite&&Ze.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Ze.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))Ze.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Te=F._multiDrawStarts,Lt=F._multiDrawCounts,Qe=F._multiDrawCount,Tn=Se?q.get(Se).bytesPerElement:1,Ur=De.get(X).currentProgram.getUniforms();for(let an=0;an<Qe;an++)Ur.setValue(L,"_gl_DrawID",an),Ze.render(Te[an]/Tn,Lt[an])}else if(F.isInstancedMesh)Ze.renderInstances(Ke,ft,F.count);else if(V.isInstancedBufferGeometry){const Te=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Lt=Math.min(V.instanceCount,Te);Ze.renderInstances(Ke,ft,Lt)}else Ze.render(Ke,ft)};function Nt(A,I,V){A.transparent===!0&&A.side===ai&&A.forceSinglePass===!1?(A.side=nn,A.needsUpdate=!0,eo(A,I,V),A.side=Yi,A.needsUpdate=!0,eo(A,I,V),A.side=ai):eo(A,I,V)}this.compile=function(A,I,V=null){V===null&&(V=A),m=ve.get(V),m.init(I),y.push(m),V.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),A!==V&&A.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const X=new Set;return A.traverse(function(F){const ce=F.material;if(ce)if(Array.isArray(ce))for(let pe=0;pe<ce.length;pe++){const ye=ce[pe];Nt(ye,V,F),X.add(ye)}else Nt(ce,V,F),X.add(ce)}),y.pop(),m=null,X},this.compileAsync=function(A,I,V=null){const X=this.compile(A,I,V);return new Promise(F=>{function ce(){if(X.forEach(function(pe){De.get(pe).currentProgram.isReady()&&X.delete(pe)}),X.size===0){F(A);return}setTimeout(ce,10)}qe.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Ye=null;function Zn(A){Ye&&Ye(A)}function Bn(){tr.stop()}function uf(){tr.start()}const tr=new t_;tr.setAnimationLoop(Zn),typeof self<"u"&&tr.setContext(self),this.setAnimationLoop=function(A){Ye=A,le.setAnimationLoop(A),A===null?tr.stop():tr.start()},le.addEventListener("sessionstart",Bn),le.addEventListener("sessionend",uf),this.render=function(A,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(I),I=le.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,I,E),m=ve.get(A,y.length),m.init(I),y.push(m),ne.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),ue.setFromProjectionMatrix(ne),Y=this.localClippingEnabled,B=Fe.init(this.clippingPlanes,Y),x=fe.get(A,h.length),x.init(),h.push(x),le.enabled===!0&&le.isPresenting===!0){const ce=v.xr.getDepthSensingMesh();ce!==null&&uc(ce,I,-1/0,v.sortObjects)}uc(A,I,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(D,K),Re=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Re&&ge.addToRenderList(x,A),this.info.render.frame++,B===!0&&Fe.beginShadows();const V=m.state.shadowsArray;oe.render(V,A,I),B===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=x.opaque,F=x.transmissive;if(m.setupLights(),I.isArrayCamera){const ce=I.cameras;if(F.length>0)for(let pe=0,ye=ce.length;pe<ye;pe++){const Se=ce[pe];hf(X,F,A,Se)}Re&&ge.render(A);for(let pe=0,ye=ce.length;pe<ye;pe++){const Se=ce[pe];df(x,A,Se,Se.viewport)}}else F.length>0&&hf(X,F,A,I),Re&&ge.render(A),df(x,A,I);E!==null&&(Ie.updateMultisampleRenderTarget(E),Ie.updateRenderTargetMipmap(E)),A.isScene===!0&&A.onAfterRender(v,A,I),ze.resetDefaultState(),P=-1,w=null,y.pop(),y.length>0?(m=y[y.length-1],B===!0&&Fe.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function uc(A,I,V,X){if(A.visible===!1)return;if(A.layers.test(I.layers)){if(A.isGroup)V=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(I);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ue.intersectsSprite(A)){X&&Me.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ne);const pe=re.update(A),ye=A.material;ye.visible&&x.push(A,pe,ye,V,Me.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ue.intersectsObject(A))){const pe=re.update(A),ye=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Me.copy(A.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Me.copy(pe.boundingSphere.center)),Me.applyMatrix4(A.matrixWorld).applyMatrix4(ne)),Array.isArray(ye)){const Se=pe.groups;for(let Pe=0,Ne=Se.length;Pe<Ne;Pe++){const Ae=Se[Pe],Ke=ye[Ae.materialIndex];Ke&&Ke.visible&&x.push(A,pe,Ke,V,Me.z,Ae)}}else ye.visible&&x.push(A,pe,ye,V,Me.z,null)}}const ce=A.children;for(let pe=0,ye=ce.length;pe<ye;pe++)uc(ce[pe],I,V,X)}function df(A,I,V,X){const F=A.opaque,ce=A.transmissive,pe=A.transparent;m.setupLightsView(V),B===!0&&Fe.setGlobalState(v.clippingPlanes,V),X&&we.viewport(M.copy(X)),F.length>0&&Ja(F,I,V),ce.length>0&&Ja(ce,I,V),pe.length>0&&Ja(pe,I,V),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function hf(A,I,V,X){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[X.id]===void 0&&(m.state.transmissionRenderTarget[X.id]=new Rr(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float")?Wa:gi,minFilter:_r,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ce=m.state.transmissionRenderTarget[X.id],pe=X.viewport||M;ce.setSize(pe.z,pe.w);const ye=v.getRenderTarget();v.setRenderTarget(ce),v.getClearColor(k),z=v.getClearAlpha(),z<1&&v.setClearColor(16777215,.5),v.clear(),Re&&ge.render(V);const Se=v.toneMapping;v.toneMapping=Xi;const Pe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),m.setupLightsView(X),B===!0&&Fe.setGlobalState(v.clippingPlanes,X),Ja(A,V,X),Ie.updateMultisampleRenderTarget(ce),Ie.updateRenderTargetMipmap(ce),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Ae=0,Ke=I.length;Ae<Ke;Ae++){const ht=I[Ae],ft=ht.object,sn=ht.geometry,Ze=ht.material,Te=ht.group;if(Ze.side===ai&&ft.layers.test(X.layers)){const Lt=Ze.side;Ze.side=nn,Ze.needsUpdate=!0,ff(ft,V,X,sn,Ze,Te),Ze.side=Lt,Ze.needsUpdate=!0,Ne=!0}}Ne===!0&&(Ie.updateMultisampleRenderTarget(ce),Ie.updateRenderTargetMipmap(ce))}v.setRenderTarget(ye),v.setClearColor(k,z),Pe!==void 0&&(X.viewport=Pe),v.toneMapping=Se}function Ja(A,I,V){const X=I.isScene===!0?I.overrideMaterial:null;for(let F=0,ce=A.length;F<ce;F++){const pe=A[F],ye=pe.object,Se=pe.geometry,Pe=X===null?pe.material:X,Ne=pe.group;ye.layers.test(V.layers)&&ff(ye,I,V,Se,Pe,Ne)}}function ff(A,I,V,X,F,ce){A.onBeforeRender(v,I,V,X,F,ce),A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),F.transparent===!0&&F.side===ai&&F.forceSinglePass===!1?(F.side=nn,F.needsUpdate=!0,v.renderBufferDirect(V,I,X,F,A,ce),F.side=Yi,F.needsUpdate=!0,v.renderBufferDirect(V,I,X,F,A,ce),F.side=ai):v.renderBufferDirect(V,I,X,F,A,ce),A.onAfterRender(v,I,V,X,F,ce)}function eo(A,I,V){I.isScene!==!0&&(I=Ee);const X=De.get(A),F=m.state.lights,ce=m.state.shadowsArray,pe=F.state.version,ye=ee.getParameters(A,F.state,ce,I,V),Se=ee.getProgramCacheKey(ye);let Pe=X.programs;X.environment=A.isMeshStandardMaterial?I.environment:null,X.fog=I.fog,X.envMap=(A.isMeshStandardMaterial?T:N).get(A.envMap||X.environment),X.envMapRotation=X.environment!==null&&A.envMap===null?I.environmentRotation:A.envMapRotation,Pe===void 0&&(A.addEventListener("dispose",be),Pe=new Map,X.programs=Pe);let Ne=Pe.get(Se);if(Ne!==void 0){if(X.currentProgram===Ne&&X.lightsStateVersion===pe)return mf(A,ye),Ne}else ye.uniforms=ee.getUniforms(A),A.onBeforeCompile(ye,v),Ne=ee.acquireProgram(ye,Se),Pe.set(Se,Ne),X.uniforms=ye.uniforms;const Ae=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ae.clippingPlanes=Fe.uniform),mf(A,ye),X.needsLights=h_(A),X.lightsStateVersion=pe,X.needsLights&&(Ae.ambientLightColor.value=F.state.ambient,Ae.lightProbe.value=F.state.probe,Ae.directionalLights.value=F.state.directional,Ae.directionalLightShadows.value=F.state.directionalShadow,Ae.spotLights.value=F.state.spot,Ae.spotLightShadows.value=F.state.spotShadow,Ae.rectAreaLights.value=F.state.rectArea,Ae.ltc_1.value=F.state.rectAreaLTC1,Ae.ltc_2.value=F.state.rectAreaLTC2,Ae.pointLights.value=F.state.point,Ae.pointLightShadows.value=F.state.pointShadow,Ae.hemisphereLights.value=F.state.hemi,Ae.directionalShadowMap.value=F.state.directionalShadowMap,Ae.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ae.spotShadowMap.value=F.state.spotShadowMap,Ae.spotLightMatrix.value=F.state.spotLightMatrix,Ae.spotLightMap.value=F.state.spotLightMap,Ae.pointShadowMap.value=F.state.pointShadowMap,Ae.pointShadowMatrix.value=F.state.pointShadowMatrix),X.currentProgram=Ne,X.uniformsList=null,Ne}function pf(A){if(A.uniformsList===null){const I=A.currentProgram.getUniforms();A.uniformsList=ol.seqWithValue(I.seq,A.uniforms)}return A.uniformsList}function mf(A,I){const V=De.get(A);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.batchingColor=I.batchingColor,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.instancingMorph=I.instancingMorph,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function u_(A,I,V,X,F){I.isScene!==!0&&(I=Ee),Ie.resetTextureUnits();const ce=I.fog,pe=X.isMeshStandardMaterial?I.environment:null,ye=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:er,Se=(X.isMeshStandardMaterial?T:N).get(X.envMap||pe),Pe=X.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ne=!!V.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ae=!!V.morphAttributes.position,Ke=!!V.morphAttributes.normal,ht=!!V.morphAttributes.color;let ft=Xi;X.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(ft=v.toneMapping);const sn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ze=sn!==void 0?sn.length:0,Te=De.get(X),Lt=m.state.lights;if(B===!0&&(Y===!0||A!==w)){const gn=A===w&&X.id===P;Fe.setState(X,A,gn)}let Qe=!1;X.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Lt.state.version||Te.outputColorSpace!==ye||F.isBatchedMesh&&Te.batching===!1||!F.isBatchedMesh&&Te.batching===!0||F.isBatchedMesh&&Te.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Te.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Te.instancing===!1||!F.isInstancedMesh&&Te.instancing===!0||F.isSkinnedMesh&&Te.skinning===!1||!F.isSkinnedMesh&&Te.skinning===!0||F.isInstancedMesh&&Te.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Te.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Te.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Te.instancingMorph===!1&&F.morphTexture!==null||Te.envMap!==Se||X.fog===!0&&Te.fog!==ce||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==Fe.numPlanes||Te.numIntersection!==Fe.numIntersection)||Te.vertexAlphas!==Pe||Te.vertexTangents!==Ne||Te.morphTargets!==Ae||Te.morphNormals!==Ke||Te.morphColors!==ht||Te.toneMapping!==ft||Te.morphTargetsCount!==Ze)&&(Qe=!0):(Qe=!0,Te.__version=X.version);let Tn=Te.currentProgram;Qe===!0&&(Tn=eo(X,I,F));let Ur=!1,an=!1,dc=!1;const xt=Tn.getUniforms(),yi=Te.uniforms;if(we.useProgram(Tn.program)&&(Ur=!0,an=!0,dc=!0),X.id!==P&&(P=X.id,an=!0),Ur||w!==A){xt.setValue(L,"projectionMatrix",A.projectionMatrix),xt.setValue(L,"viewMatrix",A.matrixWorldInverse);const gn=xt.map.cameraPosition;gn!==void 0&&gn.setValue(L,ae.setFromMatrixPosition(A.matrixWorld)),$e.logarithmicDepthBuffer&&xt.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&xt.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,an=!0,dc=!0)}if(F.isSkinnedMesh){xt.setOptional(L,F,"bindMatrix"),xt.setOptional(L,F,"bindMatrixInverse");const gn=F.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),xt.setValue(L,"boneTexture",gn.boneTexture,Ie))}F.isBatchedMesh&&(xt.setOptional(L,F,"batchingTexture"),xt.setValue(L,"batchingTexture",F._matricesTexture,Ie),xt.setOptional(L,F,"batchingIdTexture"),xt.setValue(L,"batchingIdTexture",F._indirectTexture,Ie),xt.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&xt.setValue(L,"batchingColorTexture",F._colorsTexture,Ie));const hc=V.morphAttributes;if((hc.position!==void 0||hc.normal!==void 0||hc.color!==void 0)&&Ve.update(F,V,Tn),(an||Te.receiveShadow!==F.receiveShadow)&&(Te.receiveShadow=F.receiveShadow,xt.setValue(L,"receiveShadow",F.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(yi.envMap.value=Se,yi.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&I.environment!==null&&(yi.envMapIntensity.value=I.environmentIntensity),an&&(xt.setValue(L,"toneMappingExposure",v.toneMappingExposure),Te.needsLights&&d_(yi,dc),ce&&X.fog===!0&&Ce.refreshFogUniforms(yi,ce),Ce.refreshMaterialUniforms(yi,X,$,W,m.state.transmissionRenderTarget[A.id]),ol.upload(L,pf(Te),yi,Ie)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ol.upload(L,pf(Te),yi,Ie),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&xt.setValue(L,"center",F.center),xt.setValue(L,"modelViewMatrix",F.modelViewMatrix),xt.setValue(L,"normalMatrix",F.normalMatrix),xt.setValue(L,"modelMatrix",F.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const gn=X.uniformsGroups;for(let fc=0,f_=gn.length;fc<f_;fc++){const gf=gn[fc];ot.update(gf,Tn),ot.bind(gf,Tn)}}return Tn}function d_(A,I){A.ambientLightColor.needsUpdate=I,A.lightProbe.needsUpdate=I,A.directionalLights.needsUpdate=I,A.directionalLightShadows.needsUpdate=I,A.pointLights.needsUpdate=I,A.pointLightShadows.needsUpdate=I,A.spotLights.needsUpdate=I,A.spotLightShadows.needsUpdate=I,A.rectAreaLights.needsUpdate=I,A.hemisphereLights.needsUpdate=I}function h_(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(A,I,V){De.get(A.texture).__webglTexture=I,De.get(A.depthTexture).__webglTexture=V;const X=De.get(A);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=V===void 0,X.__autoAllocateDepthBuffer||qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,I){const V=De.get(A);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(A,I=0,V=0){E=A,b=I,C=V;let X=!0,F=null,ce=!1,pe=!1;if(A){const Se=De.get(A);Se.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(L.FRAMEBUFFER,null),X=!1):Se.__webglFramebuffer===void 0?Ie.setupRenderTarget(A):Se.__hasExternalTextures&&Ie.rebindTextures(A,De.get(A.texture).__webglTexture,De.get(A.depthTexture).__webglTexture);const Pe=A.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(pe=!0);const Ne=De.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ne[I])?F=Ne[I][V]:F=Ne[I],ce=!0):A.samples>0&&Ie.useMultisampledRTT(A)===!1?F=De.get(A).__webglMultisampledFramebuffer:Array.isArray(Ne)?F=Ne[V]:F=Ne,M.copy(A.viewport),R.copy(A.scissor),H=A.scissorTest}else M.copy(Q).multiplyScalar($).floor(),R.copy(se).multiplyScalar($).floor(),H=xe;if(we.bindFramebuffer(L.FRAMEBUFFER,F)&&X&&we.drawBuffers(A,F),we.viewport(M),we.scissor(R),we.setScissorTest(H),ce){const Se=De.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,Se.__webglTexture,V)}else if(pe){const Se=De.get(A.texture),Pe=I||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Se.__webglTexture,V||0,Pe)}P=-1},this.readRenderTargetPixels=function(A,I,V,X,F,ce,pe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=De.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&pe!==void 0&&(ye=ye[pe]),ye){we.bindFramebuffer(L.FRAMEBUFFER,ye);try{const Se=A.texture,Pe=Se.format,Ne=Se.type;if(!$e.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=A.width-X&&V>=0&&V<=A.height-F&&L.readPixels(I,V,X,F,Ue.convert(Pe),Ue.convert(Ne),ce)}finally{const Se=E!==null?De.get(E).__webglFramebuffer:null;we.bindFramebuffer(L.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(A,I,V,X,F,ce,pe){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=De.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&pe!==void 0&&(ye=ye[pe]),ye){we.bindFramebuffer(L.FRAMEBUFFER,ye);try{const Se=A.texture,Pe=Se.format,Ne=Se.type;if(!$e.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=A.width-X&&V>=0&&V<=A.height-F){const Ae=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ae),L.bufferData(L.PIXEL_PACK_BUFFER,ce.byteLength,L.STREAM_READ),L.readPixels(I,V,X,F,Ue.convert(Pe),Ue.convert(Ne),0),L.flush();const Ke=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await x1(L,Ke,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,Ae),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ce)}finally{L.deleteBuffer(Ae),L.deleteSync(Ke)}return ce}}finally{const Se=E!==null?De.get(E).__webglFramebuffer:null;we.bindFramebuffer(L.FRAMEBUFFER,Se)}}},this.copyFramebufferToTexture=function(A,I=null,V=0){A.isTexture!==!0&&(va("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,A=arguments[1]);const X=Math.pow(2,-V),F=Math.floor(A.image.width*X),ce=Math.floor(A.image.height*X),pe=I!==null?I.x:0,ye=I!==null?I.y:0;Ie.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,pe,ye,F,ce),we.unbindTexture()},this.copyTextureToTexture=function(A,I,V=null,X=null,F=0){A.isTexture!==!0&&(va("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1],I=arguments[2],F=arguments[3]||0,V=null);let ce,pe,ye,Se,Pe,Ne;V!==null?(ce=V.max.x-V.min.x,pe=V.max.y-V.min.y,ye=V.min.x,Se=V.min.y):(ce=A.image.width,pe=A.image.height,ye=0,Se=0),X!==null?(Pe=X.x,Ne=X.y):(Pe=0,Ne=0);const Ae=Ue.convert(I.format),Ke=Ue.convert(I.type);Ie.setTexture2D(I,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const ht=L.getParameter(L.UNPACK_ROW_LENGTH),ft=L.getParameter(L.UNPACK_IMAGE_HEIGHT),sn=L.getParameter(L.UNPACK_SKIP_PIXELS),Ze=L.getParameter(L.UNPACK_SKIP_ROWS),Te=L.getParameter(L.UNPACK_SKIP_IMAGES),Lt=A.isCompressedTexture?A.mipmaps[F]:A.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Lt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Lt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ye),L.pixelStorei(L.UNPACK_SKIP_ROWS,Se),A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,F,Pe,Ne,ce,pe,Ae,Ke,Lt.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,F,Pe,Ne,Lt.width,Lt.height,Ae,Lt.data):L.texSubImage2D(L.TEXTURE_2D,F,Pe,Ne,ce,pe,Ae,Ke,Lt),L.pixelStorei(L.UNPACK_ROW_LENGTH,ht),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ft),L.pixelStorei(L.UNPACK_SKIP_PIXELS,sn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ze),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Te),F===0&&I.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(A,I,V=null,X=null,F=0){A.isTexture!==!0&&(va("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,X=arguments[1]||null,A=arguments[2],I=arguments[3],F=arguments[4]||0);let ce,pe,ye,Se,Pe,Ne,Ae,Ke,ht;const ft=A.isCompressedTexture?A.mipmaps[F]:A.image;V!==null?(ce=V.max.x-V.min.x,pe=V.max.y-V.min.y,ye=V.max.z-V.min.z,Se=V.min.x,Pe=V.min.y,Ne=V.min.z):(ce=ft.width,pe=ft.height,ye=ft.depth,Se=0,Pe=0,Ne=0),X!==null?(Ae=X.x,Ke=X.y,ht=X.z):(Ae=0,Ke=0,ht=0);const sn=Ue.convert(I.format),Ze=Ue.convert(I.type);let Te;if(I.isData3DTexture)Ie.setTexture3D(I,0),Te=L.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)Ie.setTexture2DArray(I,0),Te=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const Lt=L.getParameter(L.UNPACK_ROW_LENGTH),Qe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Tn=L.getParameter(L.UNPACK_SKIP_PIXELS),Ur=L.getParameter(L.UNPACK_SKIP_ROWS),an=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ft.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ft.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Se),L.pixelStorei(L.UNPACK_SKIP_ROWS,Pe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ne),A.isDataTexture||A.isData3DTexture?L.texSubImage3D(Te,F,Ae,Ke,ht,ce,pe,ye,sn,Ze,ft.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(Te,F,Ae,Ke,ht,ce,pe,ye,sn,ft.data):L.texSubImage3D(Te,F,Ae,Ke,ht,ce,pe,ye,sn,Ze,ft),L.pixelStorei(L.UNPACK_ROW_LENGTH,Lt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Qe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Tn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ur),L.pixelStorei(L.UNPACK_SKIP_IMAGES,an),F===0&&I.generateMipmaps&&L.generateMipmap(Te),we.unbindTexture()},this.initRenderTarget=function(A){De.get(A).__webglFramebuffer===void 0&&Ie.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Ie.setTextureCube(A,0):A.isData3DTexture?Ie.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ie.setTexture2DArray(A,0):Ie.setTexture2D(A,0),we.unbindTexture()},this.resetState=function(){b=0,C=0,E=null,we.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===tf?"display-p3":"srgb",n.unpackColorSpace=Je.workingColorSpace===oc?"display-p3":"srgb"}}class PR extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class NR{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Xm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Xm(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$h}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$h);const LR=`
precision highp float;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,DR=`
precision highp float;

uniform float iTime;
uniform vec3  iResolution;
uniform float animationSpeed;

uniform bool enableTop;
uniform bool enableMiddle;
uniform bool enableBottom;

uniform int topLineCount;
uniform int middleLineCount;
uniform int bottomLineCount;

uniform float topLineDistance;
uniform float middleLineDistance;
uniform float bottomLineDistance;

uniform vec3 topWavePosition;
uniform vec3 middleWavePosition;
uniform vec3 bottomWavePosition;

uniform vec2 iMouse;
uniform bool interactive;
uniform float bendRadius;
uniform float bendStrength;
uniform float bendInfluence;

uniform bool parallax;
uniform float parallaxStrength;
uniform vec2 parallaxOffset;

uniform vec3 lineGradient[8];
uniform int lineGradientCount;

const vec3 BLACK = vec3(0.0);
const vec3 PINK  = vec3(233.0, 71.0, 245.0) / 255.0;
const vec3 BLUE  = vec3(47.0,  75.0, 162.0) / 255.0;

mat2 rotate(float r) {
  return mat2(cos(r), sin(r), -sin(r), cos(r));
}

vec3 background_color(vec2 uv) {
  vec3 col = vec3(0.0);

  float y = sin(uv.x - 0.2) * 0.3 - 0.1;
  float m = uv.y - y;

  col += mix(BLUE, BLACK, smoothstep(0.0, 1.0, abs(m)));
  col += mix(PINK, BLACK, smoothstep(0.0, 1.0, abs(m - 0.8)));
  return col * 0.5;
}

vec3 getLineColor(float t, vec3 baseColor) {
  if (lineGradientCount <= 0) {
    return baseColor;
  }

  vec3 gradientColor;
  
  if (lineGradientCount == 1) {
    gradientColor = lineGradient[0];
  } else {
    float clampedT = clamp(t, 0.0, 0.9999);
    float scaled = clampedT * float(lineGradientCount - 1);
    int idx = int(floor(scaled));
    float f = fract(scaled);
    int idx2 = min(idx + 1, lineGradientCount - 1);

    vec3 c1 = lineGradient[idx];
    vec3 c2 = lineGradient[idx2];
    
    gradientColor = mix(c1, c2, f);
  }
  
  return gradientColor * 0.5;
}

float wave(vec2 uv, float offset, vec2 screenUv, vec2 mouseUv, bool shouldBend) {
  float time = iTime * animationSpeed;

  float x_offset   = offset;
  float x_movement = time * 0.1;
  float amp        = sin(offset + time * 0.2) * 0.3;
  float y          = sin(uv.x + x_offset + x_movement) * amp;

  if (shouldBend) {
    vec2 d = screenUv - mouseUv;
    float influence = exp(-dot(d, d) * bendRadius);
    float bendOffset = (mouseUv.y - screenUv.y) * influence * bendStrength * bendInfluence;
    y += bendOffset;
  }

  float m = uv.y - y;
  return 0.0175 / max(abs(m) + 0.01, 1e-3) + 0.01;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 baseUv = (2.0 * fragCoord - iResolution.xy) / iResolution.y;
  baseUv.y *= -1.0;
  
  if (parallax) {
    baseUv += parallaxOffset;
  }

  vec3 col = vec3(0.0);

  vec3 b = lineGradientCount > 0 ? vec3(0.0) : background_color(baseUv);

  vec2 mouseUv = vec2(0.0);
  if (interactive) {
    mouseUv = (2.0 * iMouse - iResolution.xy) / iResolution.y;
    mouseUv.y *= -1.0;
  }
  
  if (enableBottom) {
    for (int i = 0; i < bottomLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(bottomLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      
      float angle = bottomWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      col += lineCol * wave(
        ruv + vec2(bottomLineDistance * fi + bottomWavePosition.x, bottomWavePosition.y),
        1.5 + 0.2 * fi,
        baseUv,
        mouseUv,
        interactive
      ) * 0.2;
    }
  }

  if (enableMiddle) {
    for (int i = 0; i < middleLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(middleLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      
      float angle = middleWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      col += lineCol * wave(
        ruv + vec2(middleLineDistance * fi + middleWavePosition.x, middleWavePosition.y),
        2.0 + 0.15 * fi,
        baseUv,
        mouseUv,
        interactive
      );
    }
  }

  if (enableTop) {
    for (int i = 0; i < topLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(topLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      
      float angle = topWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      ruv.x *= -1.0;
      col += lineCol * wave(
        ruv + vec2(topLineDistance * fi + topWavePosition.x, topWavePosition.y),
        1.0 + 0.2 * fi,
        baseUv,
        mouseUv,
        interactive
      ) * 0.1;
    }
  }

  fragColor = vec4(col, 1.0);
}

void main() {
  vec4 color = vec4(0.0);
  mainImage(color, gl_FragCoord.xy);
  gl_FragColor = color;
}
`,qm=8;function UR(t){let e=t.trim();e.startsWith("#")&&(e=e.slice(1));let n=255,i=255,r=255;return e.length===3?(n=parseInt(e[0]+e[0],16),i=parseInt(e[1]+e[1],16),r=parseInt(e[2]+e[2],16)):e.length===6&&(n=parseInt(e.slice(0,2),16),i=parseInt(e.slice(2,4),16),r=parseInt(e.slice(4,6),16)),new G(n/255,i/255,r/255)}function IR({linesGradient:t,enabledWaves:e=["top","middle","bottom"],lineCount:n=[6],lineDistance:i=[5],topWavePosition:r,middleWavePosition:s,bottomWavePosition:a={x:2,y:-.7,rotate:-1},animationSpeed:o=1,interactive:l=!0,bendRadius:c=5,bendStrength:u=-.5,mouseDamping:d=.05,parallax:f=!0,parallaxStrength:g=.2,mixBlendMode:_="screen"}){const x=O.useRef(null),m=O.useRef(new He(-1e3,-1e3)),h=O.useRef(new He(-1e3,-1e3)),y=O.useRef(0),v=O.useRef(0),S=O.useRef(new He(0,0)),b=O.useRef(new He(0,0)),C=z=>{if(typeof n=="number")return n;if(!e.includes(z))return 0;const j=e.indexOf(z);return n[j]??6},E=z=>{if(typeof i=="number")return i;if(!e.includes(z))return .1;const j=e.indexOf(z);return i[j]??.1},P=e.includes("top")?C("top"):0,w=e.includes("middle")?C("middle"):0,M=e.includes("bottom")?C("bottom"):0,R=e.includes("top")?E("top")*.01:.01,H=e.includes("middle")?E("middle")*.01:.01,k=e.includes("bottom")?E("bottom")*.01:.01;return O.useEffect(()=>{if(!x.current)return;const z=new PR,j=new n_(-1,1,1,-1,0,1);j.position.z=1;const W=new bR({antialias:!0,alpha:!1});W.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),W.domElement.style.width="100%",W.domElement.style.height="100%",x.current.appendChild(W.domElement);const $={iTime:{value:0},iResolution:{value:new G(1,1,1)},animationSpeed:{value:o},enableTop:{value:e.includes("top")},enableMiddle:{value:e.includes("middle")},enableBottom:{value:e.includes("bottom")},topLineCount:{value:P},middleLineCount:{value:w},bottomLineCount:{value:M},topLineDistance:{value:R},middleLineDistance:{value:H},bottomLineDistance:{value:k},topWavePosition:{value:new G((r==null?void 0:r.x)??10,(r==null?void 0:r.y)??.5,(r==null?void 0:r.rotate)??-.4)},middleWavePosition:{value:new G((s==null?void 0:s.x)??5,(s==null?void 0:s.y)??0,(s==null?void 0:s.rotate)??.2)},bottomWavePosition:{value:new G((a==null?void 0:a.x)??2,(a==null?void 0:a.y)??-.7,(a==null?void 0:a.rotate)??.4)},iMouse:{value:new He(-1e3,-1e3)},interactive:{value:l},bendRadius:{value:c},bendStrength:{value:u},bendInfluence:{value:0},parallax:{value:f},parallaxStrength:{value:g},parallaxOffset:{value:new He(0,0)},lineGradient:{value:Array.from({length:qm},()=>new G(1,1,1))},lineGradientCount:{value:0}};if(t&&t.length>0){const Me=t.slice(0,qm);$.lineGradientCount.value=Me.length,Me.forEach((Ee,Re)=>{const Xe=UR(Ee);$.lineGradient.value[Re].set(Xe.x,Xe.y,Xe.z)})}const D=new _i({uniforms:$,vertexShader:LR,fragmentShader:DR}),K=new Ka(2,2),Q=new qn(K,D);z.add(Q);const se=new NR,xe=()=>{const Me=x.current;if(!Me)return;const Ee=Me.clientWidth||1,Re=Me.clientHeight||1;W.setSize(Ee,Re,!1);const Xe=W.domElement.width,L=W.domElement.height;$.iResolution.value.set(Xe,L,1)};xe();const ue=typeof ResizeObserver<"u"?new ResizeObserver(xe):null;ue&&x.current&&ue.observe(x.current);const B=Me=>{const Ee=W.domElement.getBoundingClientRect(),Re=Me.clientX-Ee.left,Xe=Me.clientY-Ee.top,L=W.getPixelRatio();if(m.current.set(Re*L,(Ee.height-Xe)*L),y.current=1,f){const dt=Ee.width/2,qe=Ee.height/2,$e=(Re-dt)/Ee.width,we=-(Xe-qe)/Ee.height;S.current.set($e*g,we*g)}},Y=()=>{y.current=0};l&&(W.domElement.addEventListener("pointermove",B),W.domElement.addEventListener("pointerleave",Y));let ne=0;const ae=()=>{$.iTime.value=se.getElapsedTime(),l&&(h.current.lerp(m.current,d),$.iMouse.value.copy(h.current),v.current+=(y.current-v.current)*d,$.bendInfluence.value=v.current),f&&(b.current.lerp(S.current,d),$.parallaxOffset.value.copy(b.current)),W.render(z,j),ne=requestAnimationFrame(ae)};return ae(),()=>{cancelAnimationFrame(ne),ue&&x.current&&ue.disconnect(),l&&(W.domElement.removeEventListener("pointermove",B),W.domElement.removeEventListener("pointerleave",Y)),K.dispose(),D.dispose(),W.dispose(),W.domElement.parentElement&&W.domElement.parentElement.removeChild(W.domElement)}},[o,c,u,M,k,a,e,l,n,i,t,w,H,s,d,f,g,P,R,r]),p.jsx("div",{ref:x,className:"floating-lines-container",style:{mixBlendMode:_}})}function FR(){return p.jsxs("div",{className:"ambient-bg","aria-hidden":"true",children:[p.jsx("div",{className:"ambient-layer",children:p.jsx(SE,{gradientColors:["#1a1f2b","#0b1020","#2b1140"],blindCount:14,spotlightOpacity:.6,noise:.28,shineDirection:"right"})}),p.jsx("div",{className:"ambient-layer",style:{mixBlendMode:"screen",opacity:.6},children:p.jsx(IR,{linesGradient:["#22d3ee","#4f7cff"],lineCount:[3,5,3]})}),p.jsx("div",{className:"ambient-overlay"})]})}function OR(){const{pathname:t}=Lr();return O.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},[t]),null}const sf="http://localhost:8080";async function je(t,e){const n={"Content-Type":"application/json",...(e==null?void 0:e.headers)||{}},i=await fetch(`${sf}${t}`,{...e,headers:n});if(!i.ok){const r=await i.text();throw new Error(r||`Request failed: ${i.status}`)}return i.json()}const ta={heroTitle:"INERTIA 2.0: JEC Annual Tech Fest",heroSubtitle:"The flagship annual festival at Jabalpur Engineering College, featuring Hackathon, Workshops, Robo Race, eSports, Open Mic, and culture.",dates:"Coming 2026",location:"Jabalpur Engineering College, Jabalpur, Madhya Pradesh",highlights:["Hackathon","IoT Workshop","Robo Race","eSports Arena","Open Mic Stage","DJ Night & Culture Fest"]},_a=[{id:1,slug:"hackathon",title:"Hackathon",description:"12-hour hackathon, INR 300/team, on-spot problem statements, and internship interview opportunities.",dateLabel:"12 Hours",ctaLabel:"Register Hackathon"},{id:2,slug:"workshops",title:"Workshop",description:"IoT-based single phase induction motor and speed control system workshop.",dateLabel:"2 Days",ctaLabel:"Register Workshop"},{id:3,slug:"robo-race",title:"Kinetic ShowDown",description:"RC car design and race challenge with teams of 2 to 4 members.",dateLabel:"Final Day",ctaLabel:"Register Robo Race"},{id:4,slug:"esports",title:"eSports",description:"Compete in Valorant (5 players) or BGMI (4 players).",dateLabel:"Tournament",ctaLabel:"Register eSports"},{id:5,slug:"open-mic",title:"Open Mic",description:"Free stage registration for performers.",dateLabel:"Open Stage",ctaLabel:"Register Open Mic"}],xu=[{id:1,question:"How long is Hackathon?",answer:"Hackathon is a 12-hour event."},{id:2,question:"What is the hackathon registration fee?",answer:"The Hackathon registration fee is INR 300 per team."},{id:3,question:"What are the eSports team sizes?",answer:"Valorant needs 5 players, BGMI needs 4 players."},{id:4,question:"When are hackathon problem statements announced?",answer:"Problem statements are revealed on the spot."},{id:5,question:"Can I register for multiple events?",answer:"Yes, you can register for Hackathon, Workshops, Robo Race, eSports, and Open Mic."}];function $m(t){return t.replace(/CodeHunt Hackathon/gi,"Hackathon").replace(/Kinetic Showdown/gi,"Robo Race").replace(/Workshop Series/gi,"IoT Workshop")}function kR(t){const e=t.map(s=>s.slug==="robo-race"||s.slug==="kinetic-showdown"?{...s,slug:"robo-race",title:"Robo Race",ctaLabel:"Register Robo Race"}:s.slug==="hackathon"?{...s,title:"Hackathon",ctaLabel:"Register Hackathon"}:s.slug==="workshops"?{...s,title:"Workshop",description:"IoT-based single phase induction motor and speed control system workshop.",ctaLabel:"Register Workshop"}:s),n=e.some(s=>s.slug==="open-mic"),i=e.some(s=>s.slug==="esports"),r=[...e];return i||r.push(_a.find(s=>s.slug==="esports")),n||r.push(_a.find(s=>s.slug==="open-mic")),r}function zR(){const[t,e]=O.useState(ta),[n,i]=O.useState(_a),[r,s]=O.useState([]),[a,o]=O.useState(xu);return O.useEffect(()=>{je("/api/landing").then(l=>e({...ta,...l,heroSubtitle:ta.heroSubtitle,highlights:ta.highlights})).catch(()=>null),je("/api/events").then(l=>i(Array.isArray(l)&&l.length>0?kR(l):_a)).catch(()=>null),je("/api/gallery").then(l=>s(Array.isArray(l)?l:[])).catch(()=>s([])),je("/api/faqs").then(l=>o(Array.isArray(l)?l.map(c=>({...c,question:$m(c.question),answer:$m(c.answer)})):xu)).catch(()=>null)},[]),p.jsxs(p.Fragment,{children:[p.jsxs("section",{className:"hero",children:[p.jsx("div",{className:"hero-grid",children:p.jsxs("div",{className:"text-panel",children:[p.jsx("span",{className:"hero-tag",children:"Annual Tech Fest · JEC"}),p.jsx("h1",{className:"hero-title",children:t.heroTitle}),p.jsx("p",{className:"hero-subtitle",children:t.heroSubtitle}),p.jsxs("div",{className:"hero-actions",children:[p.jsx(Wt,{className:"btn btn-primary",to:"/register",children:"Register Now"}),p.jsx(Wt,{className:"btn btn-ghost",to:"/hackathon",children:"Hackathon Registration"})]}),p.jsxs("div",{className:"pillars",children:[p.jsx("span",{className:"pillar",children:t.dates}),p.jsx("span",{className:"pillar",children:t.location})]})]})}),p.jsx("div",{className:"section-divider"})]}),p.jsxs("section",{className:"section",children:[p.jsx("h2",{className:"section-title",children:"Fest Highlights"}),p.jsx("p",{className:"section-subtitle",children:"Explore the core experiences of Inertia 2.0 and plan your festival journey."}),p.jsx("div",{className:"cards-grid",children:(t.highlights??ta.highlights).map((l,c)=>p.jsxs("div",{className:"card",children:[p.jsx("span",{className:"badge",children:"Highlight"}),p.jsx("h4",{children:l}),p.jsx("p",{children:"Join early to secure your spot and stay updated on schedules."})]},c))})]}),p.jsxs("section",{className:"section",children:[p.jsx("h2",{className:"section-title",children:"About Jabalpur Engineering College"}),p.jsx("p",{className:"section-subtitle",children:"Jabalpur Engineering College (JEC) was established in 1947 and is the first engineering college in Central India. The campus hosts undergraduate, postgraduate, and doctoral programs and is known for academic excellence, research culture, and innovation-driven learning."}),p.jsxs("div",{className:"cards-grid",children:[p.jsxs("div",{className:"card",children:[p.jsx("h4",{children:"Legacy of Excellence"}),p.jsx("p",{children:"Decades of engineering education with strong industry and research outcomes."})]}),p.jsxs("div",{className:"card",children:[p.jsx("h4",{children:"Research & Innovation"}),p.jsx("p",{children:"Modern labs and faculty guidance that fuel experimentation and new ideas."})]}),p.jsxs("div",{className:"card",children:[p.jsx("h4",{children:"Campus Experience"}),p.jsx("p",{children:"A sprawling campus in Jabalpur built for collaboration and maker culture."})]})]})]}),p.jsxs("section",{className:"section",children:[p.jsx("h2",{className:"section-title",children:"INERTIA 2.0 Lineup"}),p.jsx("p",{className:"section-subtitle",children:"INERTIA 2.0 expands the festival with a stronger mix of technical and cultural experiences."}),p.jsxs("div",{className:"cards-grid",children:[p.jsxs("div",{className:"card",children:[p.jsx("h4",{children:"Tech Talks"}),p.jsx("p",{children:"Industry leaders and researchers share insights, trends, and real-world case studies."})]}),p.jsxs("div",{className:"card",children:[p.jsx("h4",{children:"Startup & Project Expo"}),p.jsx("p",{children:"Showcase innovations, prototypes, and student ventures from across the region."})]}),p.jsxs("div",{className:"card",children:[p.jsx("h4",{children:"Automotive Competition"}),p.jsx("p",{children:"Speed, strategy, and engineering challenges focused on mobility and design."})]}),p.jsxs("div",{className:"card",children:[p.jsx("h4",{children:"Defense Expo"}),p.jsx("p",{children:"Explore defense tech, engineering showcases, and innovation exhibits."})]}),p.jsxs("div",{className:"card",children:[p.jsx("h4",{children:"Cultural Extravaganza"}),p.jsx("p",{children:"Live stage performances, DJ night, and celebration across the campus."})]})]})]}),p.jsxs("section",{className:"section",children:[p.jsx("h2",{className:"section-title",children:"Workshop Spotlight"}),p.jsx("p",{className:"section-subtitle",children:"Only one workshop will be conducted: IoT-based single phase induction motor and speed control system."}),p.jsx("div",{className:"cards-grid",children:p.jsxs("div",{className:"card",children:[p.jsx("h4",{children:"IoT-Based Motor Speed Control Workshop"}),p.jsx("p",{children:"Mentor: Dr. Praveen Kumar Sharma (PhD, NIT Durgapur)."}),p.jsx("p",{children:"Date: 26-27 February 2026."}),p.jsx("p",{children:"Venue: Jashan Audi, JEC Jabalpur."}),p.jsx("p",{children:"Fee: INR 300."})]})})]}),p.jsxs("section",{className:"section dark",children:[p.jsx("h2",{className:"section-title",children:"Core Events"}),p.jsx("p",{className:"section-subtitle",children:"Hackathon, Workshop, Robo Race, eSports, and Open Mic with dedicated registration flows."}),p.jsx("div",{className:"event-grid",children:(n&&n.length>0?n:_a).map(l=>p.jsxs("div",{className:"event-card",children:[p.jsx("span",{className:"badge",children:l.dateLabel}),p.jsx("h3",{children:l.title}),p.jsx("p",{children:l.description}),p.jsx(Wt,{className:"btn btn-ghost",to:`/${l.slug}`,children:l.ctaLabel})]},l.id))})]}),p.jsxs("section",{className:"section",children:[p.jsx("h2",{className:"section-title",children:"Impact Snapshot"}),p.jsx("p",{className:"section-subtitle",children:"From participation to media reach, INERTIA continues to grow each year."}),p.jsxs("div",{className:"cards-grid",children:[p.jsxs("div",{className:"card",children:[p.jsx("span",{className:"badge",children:"Footfall"}),p.jsx("h4",{children:"1,900+"}),p.jsx("p",{children:"Peak campus footfall recorded for the INERTIA edition."})]}),p.jsxs("div",{className:"card",children:[p.jsx("span",{className:"badge",children:"Social Reach"}),p.jsx("h4",{children:"562+"}),p.jsx("p",{children:"Social media reach benchmark from the brochure insights."})]}),p.jsxs("div",{className:"card",children:[p.jsx("span",{className:"badge",children:"Media Coverage"}),p.jsx("h4",{children:"4 Outlets"}),p.jsx("p",{children:"Coverage across Dainik Bhaskar, Patrika, Nayi Dunia, and Hari Bhoomi."})]})]})]}),p.jsxs("section",{className:"section",children:[p.jsx("h2",{className:"section-title",children:"Glimpses"}),p.jsx("p",{className:"section-subtitle",children:"Highlights and memories from previous editions."}),r.length===0?p.jsx("div",{className:"banner empty-state",children:"No entries available yet."}):p.jsx("div",{className:"gallery-grid",children:r.map(l=>p.jsxs("div",{className:"gallery-card",children:[p.jsx("img",{src:l.imageUrl,alt:l.title}),p.jsxs("div",{className:"gallery-meta",children:[p.jsx("strong",{children:l.preview||l.title}),p.jsx("p",{children:l.description})]})]},l.id))})]}),p.jsxs("section",{className:"section",children:[p.jsx("h2",{className:"section-title",children:"FAQs"}),p.jsx("div",{className:"faq-list",children:(a??xu).map(l=>p.jsxs("div",{className:"faq-item",children:[p.jsx("strong",{children:l.question}),p.jsx("p",{children:l.answer})]},l.id))})]})]})}const Ym="razorpay-checkout-script";function BR(){if(window.Razorpay)return Promise.resolve();const t=document.getElementById(Ym);return t?new Promise((e,n)=>{t.addEventListener("load",()=>e(),{once:!0}),t.addEventListener("error",()=>n(new Error("Unable to load payment gateway")),{once:!0})}):new Promise((e,n)=>{const i=document.createElement("script");i.id=Ym,i.src="https://checkout.razorpay.com/v1/checkout.js",i.async=!0,i.onload=()=>e(),i.onerror=()=>n(new Error("Unable to load payment gateway")),document.body.appendChild(i)})}function HR(t,e,n){return new Promise((i,r)=>{if(!window.Razorpay){r(new Error("Payment gateway not available"));return}new window.Razorpay({key:t.key,amount:t.amount,currency:t.currency,name:"Inertia 2.0",description:`${n} Registration`,order_id:t.orderId,prefill:e,theme:{color:"#1d4ed8"},handler:a=>{i({razorpayOrderId:a.razorpay_order_id,razorpayPaymentId:a.razorpay_payment_id,razorpaySignature:a.razorpay_signature})},modal:{ondismiss:()=>r(new Error("Payment was cancelled"))}}).open()})}async function af(t,e,n){return l_(t,e,n)}async function l_(t,e,n,i){await BR();const r=await je("/api/payments/razorpay/order",{method:"POST",body:JSON.stringify({event:t})});return HR(r,e,n)}const Za={hackathon:"https://chat.whatsapp.com/Levkc07bFIPJrgUcvvHx18?mode=gi_t",kineticShowdown:"https://chat.whatsapp.com/IwlQQ0CvlZXDrQuOEysHNk?mode=gi_t",workshops:"https://chat.whatsapp.com/KdtdwL2U4LoLffzGjiy6Nj?mode=gi_t",esports:"https://chat.whatsapp.com/LGGupN5pEaf8oyTq3vNC1F?mode=gi_t",openMic:"https://chat.whatsapp.com/LbqecHlh4iZJXabqiVZPWM?mode=gi_t"};function Qa(t){window.location.href=t}const Km=()=>Array.from({length:4},()=>({name:"",phone:"",gender:"female"}));function VR(){const[t,e]=O.useState({teamName:"",contactName:"",contactPhone:"",collegeName:""}),[n,i]=O.useState(Km()),[r,s]=O.useState(""),[a,o]=O.useState(!1),l=(u,d,f)=>{i(g=>g.map((_,x)=>x===u?{..._,[d]:f}:_))},c=async u=>{u.preventDefault(),s(""),o(!0);try{if(n.filter(_=>_.gender.toLowerCase()==="female").length<1)throw new Error("At least one female member is required.");const f=await af("hackathon",{name:t.contactName,contact:t.contactPhone},"CodeHunt Hackathon"),g=await je("/api/hackathon/register",{method:"POST",body:JSON.stringify({...t,members:n,...f})});s(`${g.message} Redirecting to WhatsApp group...`),e({teamName:"",contactName:"",contactPhone:"",collegeName:""}),i(Km()),setTimeout(()=>Qa(Za.hackathon),1400)}catch(d){s(d instanceof Error?d.message:"Unable to complete registration")}finally{o(!1)}};return p.jsxs("section",{className:"section",children:[p.jsx("h2",{className:"section-title",children:"CodeHunt Hackathon"}),p.jsxs("div",{className:"prize-pool-spotlight",children:[p.jsx("span",{className:"prize-pool-label",children:"Prize Pool"}),p.jsx("div",{className:"prize-pool-value",children:"INR 12,000"})]}),p.jsx("p",{className:"section-subtitle",children:"12-hour hackathon with internship interview opportunities, product building, and live stage presentations."}),p.jsx("div",{className:"cards-grid",style:{marginTop:"24px"},children:p.jsxs("div",{className:"card",children:[p.jsx("h4",{children:"Hackathon Sponsors"}),p.jsxs("div",{className:"sponsor-row",children:[p.jsx("img",{className:"sponsor-logo",src:"/time.png",alt:"Time sponsor",onError:u=>u.currentTarget.style.display="none"}),p.jsx("img",{className:"sponsor-logo",src:"/upgrad.png",alt:"upGrad sponsor",onError:u=>u.currentTarget.style.display="none"})]}),p.jsx("p",{style:{marginTop:"12px"},children:"Sponsors: TIME and upGrad."})]})}),p.jsxs("div",{className:"banner",style:{marginTop:"22px"},children:[p.jsx("h4",{style:{marginTop:0},children:"Why Join CodeHunt Hackathon"}),p.jsxs("ul",{children:[p.jsx("li",{children:"Registration fee: INR 300 per team."}),p.jsx("li",{children:"Problem statements will be revealed on the spot."}),p.jsx("li",{children:"100% internship opportunity path: 10 participants will be shortlisted for internship interviews at upGrad or TIME."}),p.jsx("li",{children:"Refreshments will be provided during the hackathon."}),p.jsx("li",{children:"Strong exposure for students across Jabalpur."}),p.jsx("li",{children:"Teams will build a complete product and present it live on stage."})]})]}),p.jsxs("div",{className:"card",style:{marginTop:"24px"},children:[p.jsx("h4",{children:"Hackathon Team Registration"}),p.jsxs("form",{className:"form-grid",onSubmit:c,children:[p.jsx("input",{placeholder:"Team name",value:t.teamName,onChange:u=>e({...t,teamName:u.target.value}),required:!0}),p.jsx("input",{placeholder:"Leader name",value:t.contactName,onChange:u=>e({...t,contactName:u.target.value}),required:!0}),p.jsx("input",{placeholder:"Leader WhatsApp number",value:t.contactPhone,onChange:u=>e({...t,contactPhone:u.target.value}),required:!0}),p.jsx("input",{placeholder:"College name",value:t.collegeName,onChange:u=>e({...t,collegeName:u.target.value}),required:!0}),n.map((u,d)=>p.jsxs("div",{className:"card",children:[p.jsxs("h4",{children:["Member ",d+1]}),p.jsxs("div",{className:"form-grid",children:[p.jsx("input",{placeholder:"Member name",value:u.name,onChange:f=>l(d,"name",f.target.value),required:!0}),p.jsx("input",{placeholder:"Member WhatsApp number",value:u.phone,onChange:f=>l(d,"phone",f.target.value),required:!0}),p.jsxs("select",{value:u.gender,onChange:f=>l(d,"gender",f.target.value),children:[p.jsx("option",{value:"female",children:"Female"}),p.jsx("option",{value:"male",children:"Male"}),p.jsx("option",{value:"other",children:"Other"})]})]})]},d)),p.jsx("button",{className:"btn btn-primary",type:"submit",disabled:a,children:a?"Processing Payment...":"Pay & Register Hackathon"})]})]}),r&&p.jsx("div",{className:"banner",style:{marginTop:"20px"},children:r})]})}const Go={id:1,title:"IoT-Based Single Phase Induction Motor / Speed Control System",description:"Mentor: Dr. Praveen Kumar Sharma (PhD, NIT Durgapur) | Date: 26-27 Feb 2026 | Venue: Jashan Audi, JEC Jabalpur | Fee: INR 300."};function GR(){var c;const[t,e]=O.useState([Go]),[n,i]=O.useState({name:"",phone:"",collegeName:"",workshopId:String(Go.id)}),[r,s]=O.useState(""),[a,o]=O.useState(!1);O.useEffect(()=>{je("/api/workshops").then(u=>{if(!Array.isArray(u)||u.length===0)return;const d=u.find(f=>/iot|single phase|induction|speed control/i.test(`${f.title} ${f.description}`))??u[0];e([{...Go,id:d.id}]),i(f=>({...f,workshopId:String(d.id)}))}).catch(()=>null)},[]);const l=async u=>{u.preventDefault(),s(""),o(!0);try{const d=await af("workshops",{name:n.name,contact:n.phone},"Workshop"),f=await je("/api/workshops/register",{method:"POST",body:JSON.stringify({...n,...d})});s(`${f.message} Redirecting to WhatsApp group...`),i(g=>({name:"",phone:"",collegeName:"",workshopId:g.workshopId})),setTimeout(()=>Qa(Za.workshops),1400)}catch(d){s(d instanceof Error?d.message:"Unable to register")}finally{o(!1)}};return p.jsxs("section",{className:"section",children:[p.jsx("h2",{className:"section-title",children:"Workshop"}),p.jsx("p",{className:"section-subtitle",children:"Only one workshop is available. Complete registration below."}),p.jsx("div",{className:"cards-grid",children:t.map(u=>p.jsxs("div",{className:"card",children:[p.jsx("h4",{children:u.title}),p.jsx("p",{children:u.description})]},u.id))}),p.jsxs("div",{className:"card",style:{marginTop:"28px"},children:[p.jsx("h4",{children:"Workshop Registration"}),p.jsxs("form",{className:"form-grid",onSubmit:l,children:[p.jsx("input",{placeholder:"Full name",value:n.name,onChange:u=>i({...n,name:u.target.value}),required:!0}),p.jsx("input",{placeholder:"WhatsApp number",value:n.phone,onChange:u=>i({...n,phone:u.target.value}),required:!0}),p.jsx("input",{placeholder:"College name",value:n.collegeName,onChange:u=>i({...n,collegeName:u.target.value}),required:!0}),p.jsx("input",{value:((c=t[0])==null?void 0:c.title)??Go.title,readOnly:!0}),p.jsx("button",{className:"btn btn-primary",type:"submit",disabled:a,children:a?"Processing Payment...":"Pay & Register Workshop"})]}),r&&p.jsx("div",{className:"banner",style:{marginTop:"18px"},children:r})]})]})}function Zm(){const t=O.useRef(null),[e,n]=O.useState({teamName:"",teamLeaderName:"",phone:"",collegeName:"",memberCount:2}),[i,r]=O.useState([{name:"",phone:"",branch:"",semester:"",collegeName:""},{name:"",phone:"",branch:"",semester:"",collegeName:""}]),[s,a]=O.useState(""),[o,l]=O.useState(!1),c=O.useMemo(()=>Math.max(2,Math.min(4,e.memberCount)),[e.memberCount]),u=_=>{r(x=>x.length===_?x:x.length>_?x.slice(0,_):[...x,...Array.from({length:_-x.length},()=>({name:"",phone:"",branch:"",semester:"",collegeName:""}))])},d=_=>{const x=Number(_),m=Number.isNaN(x)?2:Math.max(2,Math.min(4,x));n(h=>({...h,memberCount:m})),u(m)},f=(_,x,m)=>{r(h=>h.map((y,v)=>v===_?{...y,[x]:m}:y))},g=async _=>{_.preventDefault(),a(""),l(!0);try{const x=await l_("kinetic-showdown",{name:e.teamLeaderName,contact:e.phone},"Kinetic Showdown"),m=i.map(y=>({...y,collegeName:y.collegeName||e.collegeName})),h=await je("/api/kinetic-showdown/register",{method:"POST",body:JSON.stringify({...e,memberCount:c,members:m,...x})});a(`${h.message} Redirecting to WhatsApp group...`),n({teamName:"",teamLeaderName:"",phone:"",collegeName:"",memberCount:2}),r([{name:"",phone:"",branch:"",semester:"",collegeName:""},{name:"",phone:"",branch:"",semester:"",collegeName:""}]),setTimeout(()=>Qa(Za.kineticShowdown),1400)}catch(x){a(x instanceof Error?x.message:"Unable to register")}finally{l(!1)}};return p.jsxs("section",{className:"section",children:[p.jsx("h2",{className:"section-title",children:"Kinetic Showdown"}),p.jsxs("div",{className:"prize-pool-spotlight",children:[p.jsx("span",{className:"prize-pool-label",children:"Prize Pool"}),p.jsx("div",{className:"prize-pool-value",children:"INR 12,000"})]}),p.jsx("p",{className:"section-subtitle",children:"Team entry: INR 300 per team. Choose 2 to 4 members and complete payment."}),p.jsxs("div",{className:"banner",children:[p.jsx("h4",{style:{marginTop:0},children:"RC Car Competition - Information Brochure"}),p.jsx("p",{children:"COSMOS JEC is organizing the Kinetic Showdown RC Car competition during Inertia."}),p.jsxs("ul",{children:[p.jsx("li",{children:"Team size: minimum 2 and maximum 4."}),p.jsx("li",{children:"Car limit: max 20cm x 20cm, max height 15cm, max weight 1.2kg."}),p.jsx("li",{children:"No readymade framework/design; participants must build their own solution."}),p.jsx("li",{children:"Wireless control required (Wi-Fi/Bluetooth/LoRa/Zigbee/RF modules)."}),p.jsx("li",{children:"Allowed stacks include Arduino, ESP, STM, Raspberry Pi, and similar platforms."}),p.jsx("li",{children:"Chassis can be MDF/foam/cardboard/acrylic/3D print or other strong material."}),p.jsx("li",{children:"Power must be on-board; no wired external power source."}),p.jsx("li",{children:"Scoring: Build quality 10%, component decisions 10%, architecture 20%, creativity 10%, race 50%."})]})]}),p.jsx("div",{style:{marginTop:"22px"},children:p.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>{var _;return(_=t.current)==null?void 0:_.scrollIntoView({behavior:"smooth",block:"start"})},children:"Registration"})}),p.jsxs("div",{className:"card",style:{marginTop:"24px"},ref:t,children:[p.jsx("h4",{children:"Kinetic Showdown Registration"}),p.jsxs("form",{className:"form-grid",onSubmit:g,children:[p.jsx("input",{placeholder:"Team name",value:e.teamName,onChange:_=>n({...e,teamName:_.target.value}),required:!0}),p.jsx("input",{placeholder:"Team leader name",value:e.teamLeaderName,onChange:_=>n({...e,teamLeaderName:_.target.value}),required:!0}),p.jsx("input",{placeholder:"WhatsApp number",value:e.phone,onChange:_=>n({...e,phone:_.target.value}),required:!0}),p.jsx("input",{placeholder:"College name",value:e.collegeName,onChange:_=>n({...e,collegeName:_.target.value}),required:!0}),p.jsx("input",{type:"number",min:2,max:4,value:c,onChange:_=>d(_.target.value),required:!0}),i.map((_,x)=>p.jsxs("div",{className:"card",children:[p.jsxs("h4",{children:["Student ",x+1]}),p.jsxs("div",{className:"form-grid",children:[p.jsx("input",{placeholder:"Student name",value:_.name,onChange:m=>f(x,"name",m.target.value),required:!0}),p.jsx("input",{placeholder:"Student WhatsApp number",value:_.phone,onChange:m=>f(x,"phone",m.target.value),required:!0}),p.jsx("input",{placeholder:"Branch",value:_.branch,onChange:m=>f(x,"branch",m.target.value),required:!0}),p.jsx("input",{placeholder:"Semester / Year",value:_.semester,onChange:m=>f(x,"semester",m.target.value),required:!0}),p.jsx("input",{placeholder:"College name",value:_.collegeName,onChange:m=>f(x,"collegeName",m.target.value),required:!0})]})]},x)),p.jsx("button",{className:"btn btn-primary",type:"submit",disabled:o,children:o?"Processing Payment...":"Pay INR 300 & Register"})]}),s&&p.jsx("div",{className:"banner",style:{marginTop:"18px"},children:s})]})]})}function Qm(t){return Array.from({length:t},()=>({name:"",whatsappNumber:"",gameId:""}))}function jR(){const[t,e]=O.useState("valorant"),[n,i]=O.useState({teamName:"",isCollegeParticipant:"yes",collegeName:"",teamLeaderName:"",teamLeaderPhone:""}),[r,s]=O.useState("no"),[a,o]=O.useState({name:"",gameId:"",whatsappNumber:""}),[l,c]=O.useState(Qm(5)),[u,d]=O.useState(!1),[f,g]=O.useState(""),_=O.useMemo(()=>t==="valorant"?5:4,[t]),x=t==="valorant"?"INR 300":"INR 200",m=t==="valorant"?"esports-valorant":"esports-bgmi",h=S=>{e(S),c(Qm(S==="valorant"?5:4))},y=(S,b,C)=>{c(E=>E.map((P,w)=>w===S?{...P,[b]:C}:P))},v=async S=>{S.preventDefault(),g(""),d(!0);try{const b=await af(m,{name:n.teamLeaderName,contact:n.teamLeaderPhone},`eSports ${t.toUpperCase()}`),C=l.map(P=>({...P})),E=await je("/api/esports/register",{method:"POST",body:JSON.stringify({...n,isCollegeParticipant:n.isCollegeParticipant==="yes",collegeName:n.isCollegeParticipant==="yes"?n.collegeName.trim():"",game:t,members:C,hasSubstitute:r==="yes",...r==="yes"?{substitutePlayer:a}:{},...b})});g(`${E.message} Redirecting to WhatsApp group...`),setTimeout(()=>Qa(Za.esports),1400)}catch(b){g(b instanceof Error?b.message:"Unable to register")}finally{d(!1)}};return p.jsxs("section",{className:"section",children:[p.jsx("h2",{className:"section-title",children:"eSports"}),p.jsxs("div",{className:"prize-pool-spotlight",children:[p.jsx("span",{className:"prize-pool-label",children:"Prize Pool"}),p.jsx("div",{className:"prize-pool-value",children:"INR 11,000"})]}),p.jsx("p",{className:"section-subtitle",children:"Select game first: Valorant (5 players, INR 300 per team) or BGMI (4 players, INR 200 per team)."}),p.jsxs("div",{className:"card",style:{marginTop:"20px"},children:[p.jsx("h4",{children:"Core Tournament Rules & Requirements"}),p.jsxs("ul",{children:[p.jsx("li",{children:"Team composition: 5 main players and up to 2 substitutes."}),p.jsx("li",{children:"No account recruitment is allowed."}),p.jsx("li",{children:"Device restriction (BGMI): only mobile/tablet devices are allowed. Emulator usage leads to ban/disqualification."}),p.jsx("li",{children:"Account requirements (BGMI): minimum tier and level may be required (for example Gold V and Level 15+)."}),p.jsx("li",{children:"Game mode (BGMI): Classic mode (Squad)."}),p.jsx("li",{children:"BGMI map pool: Erangel, Miramar, and Rondo."}),p.jsx("li",{children:"Valorant map order: Ascent, Split, Haven (Finale)."}),p.jsx("li",{children:"Points system (BGMI): based on placement and kills. Tiebreakers prioritize total kills, then Chicken Dinner count."}),p.jsx("li",{children:"Winning qualifies the team for the next round."}),p.jsx("li",{children:"No toxic behavior, toxic chat/voice chat, griefing, or team killing will be tolerated."})]}),p.jsx("h4",{style:{marginTop:"16px"},children:"Match Procedures"}),p.jsxs("ul",{children:[p.jsx("li",{children:"Check-in: teams must join the custom room/party 10-15 minutes before match start."}),p.jsx("li",{children:"Recording/proof: players may be required to record POV/screen and submit it if requested."}),p.jsx("li",{children:"Technical issues: players are responsible for their own internet connectivity."})]}),p.jsx("h4",{style:{marginTop:"16px"},children:"Violations & Penalties"}),p.jsxs("ul",{children:[p.jsx("li",{children:"Cheating (ESP, aimbot, hacks): permanent ban and disqualification."}),p.jsx("li",{children:"Intentional exploitation of bugs/glitches is prohibited."}),p.jsx("li",{children:"Offensive team names or player names are not allowed."})]})]}),p.jsxs("div",{className:"card",style:{marginTop:"24px"},children:[p.jsx("h4",{children:"eSports Registration"}),p.jsxs("form",{className:"form-grid",onSubmit:v,children:[p.jsxs("select",{value:t,onChange:S=>h(S.target.value),children:[p.jsx("option",{value:"valorant",children:"Valorant (5 players)"}),p.jsx("option",{value:"bgmi",children:"BGMI (4 players)"})]}),p.jsx("input",{placeholder:"Team name",value:n.teamName,onChange:S=>i({...n,teamName:S.target.value}),required:!0}),p.jsxs("select",{value:n.isCollegeParticipant,onChange:S=>i({...n,isCollegeParticipant:S.target.value}),children:[p.jsx("option",{value:"yes",children:"Are you from a college? Yes"}),p.jsx("option",{value:"no",children:"Are you from a college? No"})]}),n.isCollegeParticipant==="yes"&&p.jsx("input",{placeholder:"College name",value:n.collegeName,onChange:S=>i({...n,collegeName:S.target.value}),required:!0}),p.jsx("input",{placeholder:"Team leader name",value:n.teamLeaderName,onChange:S=>i({...n,teamLeaderName:S.target.value}),required:!0}),p.jsx("input",{placeholder:"Team leader WhatsApp number",value:n.teamLeaderPhone,onChange:S=>i({...n,teamLeaderPhone:S.target.value}),required:!0}),l.map((S,b)=>p.jsxs("div",{className:"card",children:[p.jsxs("h4",{children:["Player ",b+1]}),p.jsxs("div",{className:"form-grid",children:[p.jsx("input",{placeholder:"Name",value:S.name,onChange:C=>y(b,"name",C.target.value),required:!0}),p.jsx("input",{placeholder:"WhatsApp number",value:S.whatsappNumber,onChange:C=>y(b,"whatsappNumber",C.target.value),required:!0}),p.jsx("input",{placeholder:"Game ID",value:S.gameId,onChange:C=>y(b,"gameId",C.target.value),required:!0})]})]},b)),p.jsxs("select",{value:r,onChange:S=>s(S.target.value),children:[p.jsx("option",{value:"no",children:"Need substitute player? No"}),p.jsx("option",{value:"yes",children:"Need substitute player? Yes"})]}),r==="yes"&&p.jsxs("div",{className:"card",children:[p.jsx("h4",{children:"Substitute Player Details"}),p.jsxs("div",{className:"form-grid",children:[p.jsx("input",{placeholder:"Substitute name",value:a.name,onChange:S=>o({...a,name:S.target.value}),required:!0}),p.jsx("input",{placeholder:"Substitute Game ID",value:a.gameId,onChange:S=>o({...a,gameId:S.target.value}),required:!0}),p.jsx("input",{placeholder:"Substitute WhatsApp number",value:a.whatsappNumber,onChange:S=>o({...a,whatsappNumber:S.target.value}),required:!0})]})]}),p.jsx("button",{className:"btn btn-primary",type:"submit",disabled:u,children:u?"Processing Payment...":`Pay ${x} & Register`})]}),f&&p.jsx("div",{className:"banner",style:{marginTop:"18px"},children:f})]}),p.jsxs("p",{style:{marginTop:"14px",opacity:.8},children:["Required players for selected game: ",_]})]})}function WR(){const[t,e]=O.useState({name:"",phone:"",enrollmentNumber:"",year:"",collegeName:"",performanceType:"",scriptPdfUrl:""}),[n,i]=O.useState(null),[r,s]=O.useState(!1),[a,o]=O.useState(""),l=async u=>{const d=new FormData;d.append("document",u);const f=await fetch(`${sf}/api/uploads/document`,{method:"POST",body:d});if(!f.ok)throw new Error(await f.text());return(await f.json()).documentUrl},c=async u=>{u.preventDefault(),o(""),s(!0);try{if(!n&&!t.scriptPdfUrl)throw new Error("Please upload a PDF or provide a PDF link for your script/plan.");let d=t.scriptPdfUrl;n&&(d=await l(n));const f=await je("/api/open-mic/register",{method:"POST",body:JSON.stringify({...t,scriptPdfUrl:d})});o(`${f.message} Redirecting to WhatsApp group...`),setTimeout(()=>Qa(Za.openMic),1400)}catch(d){o(d instanceof Error?d.message:"Unable to register")}finally{s(!1)}};return p.jsxs("section",{className:"section",children:[p.jsx("h2",{className:"section-title",children:"Open Mic"}),p.jsx("p",{className:"section-subtitle",children:"Open Mic is free. Registration is mandatory."}),p.jsxs("div",{className:"card",style:{marginTop:"24px"},children:[p.jsx("h4",{children:"Open Mic Registration"}),p.jsxs("form",{className:"form-grid",onSubmit:c,children:[p.jsx("input",{placeholder:"Name",value:t.name,onChange:u=>e({...t,name:u.target.value}),required:!0}),p.jsx("input",{placeholder:"WhatsApp number",value:t.phone,onChange:u=>e({...t,phone:u.target.value}),required:!0}),p.jsx("input",{placeholder:"Enrollment number",value:t.enrollmentNumber,onChange:u=>e({...t,enrollmentNumber:u.target.value}),required:!0}),p.jsx("input",{placeholder:"Year",value:t.year,onChange:u=>e({...t,year:u.target.value}),required:!0}),p.jsx("input",{placeholder:"College name",value:t.collegeName,onChange:u=>e({...t,collegeName:u.target.value}),required:!0}),p.jsx("input",{placeholder:"What do you want to perform?",value:t.performanceType,onChange:u=>e({...t,performanceType:u.target.value}),required:!0}),p.jsx("input",{type:"url",placeholder:"Script/plan PDF URL (optional if uploading below)",value:t.scriptPdfUrl,onChange:u=>e({...t,scriptPdfUrl:u.target.value})}),p.jsx("input",{type:"file",accept:"application/pdf",onChange:u=>{var d;return i(((d=u.target.files)==null?void 0:d[0])??null)}}),p.jsx("button",{className:"btn btn-primary",type:"submit",disabled:r,children:r?"Submitting...":"Register Open Mic"})]}),a&&p.jsx("div",{className:"banner",style:{marginTop:"18px"},children:a})]})]})}function XR(){return p.jsxs("section",{className:"section",children:[p.jsx("h2",{className:"section-title",children:"Choose Registration"}),p.jsx("p",{className:"section-subtitle",children:"Select the event you want to register for."}),p.jsxs("div",{className:"cards-grid",style:{marginTop:"24px"},children:[p.jsxs("div",{className:"card",children:[p.jsx("h4",{children:"Hackathon"}),p.jsx("p",{children:"12-hour hackathon registration."}),p.jsx(Wt,{className:"btn btn-primary",to:"/hackathon",children:"Register Hackathon"})]}),p.jsxs("div",{className:"card",children:[p.jsx("h4",{children:"Robo Race"}),p.jsx("p",{children:"RC car competition. Team fee INR 300."}),p.jsx(Wt,{className:"btn btn-primary",to:"/kinetic-showdown",children:"Register Robo Race"})]}),p.jsxs("div",{className:"card",children:[p.jsx("h4",{children:"Workshops"}),p.jsx("p",{children:"Pick your workshop and complete payment."}),p.jsx(Wt,{className:"btn btn-primary",to:"/workshops",children:"Register Workshop"})]}),p.jsxs("div",{className:"card",children:[p.jsx("h4",{children:"eSports"}),p.jsx("p",{children:"Valorant (INR 300 per team) or BGMI (INR 200 per team)."}),p.jsx(Wt,{className:"btn btn-primary",to:"/esports",children:"Register eSports"})]}),p.jsxs("div",{className:"card",children:[p.jsx("h4",{children:"Open Mic"}),p.jsx("p",{children:"Free registration with performance details."}),p.jsx(Wt,{className:"btn btn-primary",to:"/open-mic",children:"Register Open Mic"})]})]})]})}function qR(){const[t,e]=O.useState([]);return O.useEffect(()=>{je("/api/culture/events").then(n=>e(Array.isArray(n)?n:[])).catch(()=>e([]))},[]),p.jsxs("section",{className:"section",children:[p.jsx("h2",{className:"section-title",children:"Culture Fest"}),p.jsx("p",{className:"section-subtitle",children:"When the coding ends, the celebration begins."}),t.length===0?p.jsx("div",{className:"banner empty-state",children:"No events announced yet."}):p.jsx("div",{className:"cards-grid",children:t.map(n=>p.jsxs("div",{className:"card",children:[n.imageUrl&&p.jsx("img",{src:n.imageUrl,alt:n.title,style:{width:"100%",borderRadius:"14px",marginBottom:"12px"}}),p.jsx("h4",{children:n.title}),p.jsx("p",{className:"team-preview",children:n.preview}),p.jsx("p",{children:n.description})]},n.id))})]})}function $R(){const[t,e]=O.useState([]);return O.useEffect(()=>{je("/api/gallery").then(n=>e(Array.isArray(n)?n:[])).catch(()=>e([]))},[]),p.jsxs("section",{className:"section",children:[p.jsx("h2",{className:"section-title",children:"Glimpses & Gallery"}),p.jsx("p",{className:"section-subtitle",children:"A curated gallery from past editions."}),t.length===0?p.jsx("div",{className:"banner empty-state",children:"No gallery items available yet."}):p.jsx("div",{className:"gallery-grid",children:t.map(n=>p.jsxs("div",{className:"gallery-card",children:[p.jsx("img",{src:n.imageUrl,alt:n.title}),p.jsxs("div",{className:"gallery-meta",children:[p.jsx("strong",{children:n.preview||n.title}),p.jsx("p",{children:n.description})]})]},n.id))})]})}function YR(){const[t,e]=O.useState([]);return O.useEffect(()=>{je("/api/team").then(n=>e(Array.isArray(n)?n:[])).catch(()=>e([]))},[]),p.jsxs("section",{className:"section",children:[p.jsx("h2",{className:"section-title",children:"Core Team"}),t.length===0?p.jsx("div",{className:"banner empty-state",children:"Team details will be published soon."}):p.jsx("div",{className:"team-grid",children:t.map(n=>p.jsxs("div",{className:"team-card",children:[p.jsx("img",{src:n.imageUrl,alt:n.name}),p.jsxs("div",{className:"team-meta",children:[p.jsx("strong",{children:n.name}),p.jsx("p",{className:"team-role",children:n.role}),p.jsx("p",{className:"team-preview",children:n.preview}),p.jsx("p",{children:n.about})]})]},n.id))})]})}function KR(){const[t,e]=O.useState({email:"",phone:""}),[n,i]=O.useState(!1),[r,s]=O.useState(""),a=async o=>{o.preventDefault(),s(""),i(!0);try{const l=await je("/api/contact",{method:"POST",body:JSON.stringify(t)});s(l.message),e({email:"",phone:""})}catch(l){s(l instanceof Error?l.message:"Unable to submit contact")}finally{i(!1)}};return p.jsxs("section",{className:"section",children:[p.jsx("h2",{className:"section-title",children:"Contact"}),p.jsx("p",{className:"section-subtitle",children:"Share your email and phone number. Our team will reach out to you."}),p.jsxs("div",{className:"card",style:{marginTop:"24px",maxWidth:"640px"},children:[p.jsx("h4",{children:"Contact Form"}),p.jsxs("form",{className:"form-grid",onSubmit:a,children:[p.jsx("input",{type:"email",placeholder:"Email",value:t.email,onChange:o=>e({...t,email:o.target.value}),required:!0}),p.jsx("input",{placeholder:"Phone number",value:t.phone,onChange:o=>e({...t,phone:o.target.value}),required:!0}),p.jsx("button",{className:"btn btn-primary",type:"submit",disabled:n,children:n?"Submitting...":"Submit Contact"})]}),r&&p.jsx("div",{className:"banner",style:{marginTop:"18px"},children:r})]})]})}const c_="mediacell@123",of="secret_admin_password";function lf(){return sessionStorage.getItem(of)===c_}function cf(t){return t!==c_?!1:(sessionStorage.setItem(of,t),!0)}function hs(){return sessionStorage.getItem(of)||""}function ZR(){const[t,e]=O.useState(lf()),[n,i]=O.useState(""),[r,s]=O.useState(""),[a,o]=O.useState(""),[l,c]=O.useState(""),[u,d]=O.useState(null),[f,g]=O.useState(""),[_,x]=O.useState(""),[m,h]=O.useState(""),[y,v]=O.useState(""),[S,b]=O.useState(null),[C,E]=O.useState(""),[P,w]=O.useState(""),[M,R]=O.useState(""),[H,k]=O.useState(null),[z,j]=O.useState(""),[W,$]=O.useState(!1),D=ue=>{if(ue.preventDefault(),!cf(n)){j("Wrong password.");return}j(""),e(!0),i("")},K=async ue=>{const B=new FormData;B.append("image",ue);const Y=await fetch(`${sf}/api/admin/upload`,{method:"POST",headers:{"X-Admin-Token":hs()},body:B});if(!Y.ok)throw new Error(await Y.text());const{imageUrl:ne}=await Y.json();return ne},Q=async ue=>{if(ue.preventDefault(),!u){j("Please select an image for gallery item.");return}$(!0),j("");try{const B=await K(u),Y=await je("/api/admin/glimpse",{method:"POST",headers:{"X-Admin-Token":hs()},body:JSON.stringify({title:r,preview:a,description:l,imageUrl:B})});j(Y.message),s(""),o(""),c(""),d(null)}catch(B){j(B instanceof Error?B.message:"Upload failed")}finally{$(!1)}},se=async ue=>{if(ue.preventDefault(),!S){j("Please select a team photo.");return}$(!0),j("");try{const B=await K(S),Y=await je("/api/admin/team",{method:"POST",headers:{"X-Admin-Token":hs()},body:JSON.stringify({name:f,role:_,preview:m,about:y,imageUrl:B})});j(Y.message),g(""),x(""),h(""),v(""),b(null)}catch(B){j(B instanceof Error?B.message:"Upload failed")}finally{$(!1)}},xe=async ue=>{if(ue.preventDefault(),!H){j("Please select a culture event photo.");return}$(!0),j("");try{const B=await K(H),Y=await je("/api/admin/culture-event",{method:"POST",headers:{"X-Admin-Token":hs()},body:JSON.stringify({title:C,preview:P,description:M,imageUrl:B})});j(Y.message),E(""),w(""),R(""),k(null)}catch(B){j(B instanceof Error?B.message:"Save failed")}finally{$(!1)}};return t?p.jsxs("section",{className:"section",children:[p.jsx("h2",{className:"section-title",children:"Management Panel"}),p.jsx("p",{className:"section-subtitle",children:"Manage content and registrations in one place."}),p.jsxs("div",{className:"admin-links",children:[p.jsx(Wt,{className:"btn btn-ghost",to:"/secret-admin/registrations",children:"View Registrations Data"}),p.jsx(Wt,{className:"btn btn-ghost",to:"/secret-admin/manage-content",children:"Edit / Delete Uploaded Content"})]}),p.jsxs("div",{className:"card",children:[p.jsx("h4",{children:"Upload Gallery Item"}),p.jsxs("form",{className:"form-grid",onSubmit:Q,children:[p.jsx("input",{placeholder:"Title",value:r,onChange:ue=>s(ue.target.value),required:!0}),p.jsx("input",{placeholder:"Preview text",value:a,onChange:ue=>o(ue.target.value),required:!0}),p.jsx("textarea",{placeholder:"Description",value:l,onChange:ue=>c(ue.target.value),rows:3,required:!0}),p.jsx("input",{type:"file",accept:"image/*",onChange:ue=>{var B;return d(((B=ue.target.files)==null?void 0:B[0])??null)},required:!0}),p.jsx("button",{className:"btn btn-primary",type:"submit",disabled:W,children:W?"Saving...":"Upload Gallery Item"})]})]}),p.jsxs("div",{className:"card",style:{marginTop:"28px"},children:[p.jsx("h4",{children:"Upload Team Member"}),p.jsxs("form",{className:"form-grid",onSubmit:se,children:[p.jsx("input",{placeholder:"Name",value:f,onChange:ue=>g(ue.target.value),required:!0}),p.jsx("input",{placeholder:"Role",value:_,onChange:ue=>x(ue.target.value),required:!0}),p.jsx("input",{placeholder:"Preview text",value:m,onChange:ue=>h(ue.target.value),required:!0}),p.jsx("textarea",{placeholder:"About",value:y,onChange:ue=>v(ue.target.value),rows:4,required:!0}),p.jsx("input",{type:"file",accept:"image/*",onChange:ue=>{var B;return b(((B=ue.target.files)==null?void 0:B[0])??null)},required:!0}),p.jsx("button",{className:"btn btn-primary",type:"submit",disabled:W,children:W?"Saving...":"Upload Team Member"})]})]}),p.jsxs("div",{className:"card",style:{marginTop:"28px"},children:[p.jsx("h4",{children:"Add Cultural Event"}),p.jsxs("form",{className:"form-grid",onSubmit:xe,children:[p.jsx("input",{placeholder:"Title",value:C,onChange:ue=>E(ue.target.value),required:!0}),p.jsx("input",{placeholder:"Preview text",value:P,onChange:ue=>w(ue.target.value),required:!0}),p.jsx("textarea",{placeholder:"Description",value:M,onChange:ue=>R(ue.target.value),rows:3,required:!0}),p.jsx("input",{type:"file",accept:"image/*",onChange:ue=>{var B;return k(((B=ue.target.files)==null?void 0:B[0])??null)},required:!0}),p.jsx("button",{className:"btn btn-primary",type:"submit",disabled:W,children:W?"Saving...":"Save Cultural Event"})]})]}),z&&p.jsx("div",{className:"banner",style:{marginTop:"18px"},children:z})]}):p.jsxs("section",{className:"section",children:[p.jsx("h2",{className:"section-title",children:"Management Access"}),p.jsxs("div",{className:"card",style:{maxWidth:"520px"},children:[p.jsx("h4",{children:"Enter Password"}),p.jsxs("form",{className:"form-grid",onSubmit:D,children:[p.jsx("input",{type:"password",placeholder:"Enter password",value:n,onChange:ue=>i(ue.target.value),required:!0}),p.jsx("button",{className:"btn btn-primary",type:"submit",children:"Unlock"})]}),z&&p.jsx("div",{className:"banner",style:{marginTop:"18px"},children:z})]})]})}function QR(t){return t.members.map((e,n)=>`${n+1}. ${e.name} (${e.gender}) | ${e.phone}`).join(`
`)}function JR(t){return t.members.map((e,n)=>`${n+1}. ${e.name} | ${e.phone} | ${e.branch} | ${e.semester} | ${e.collegeName}`).join(`
`)}function e2(){const[t,e]=O.useState(lf()),[n,i]=O.useState(""),[r,s]=O.useState(""),[a,o]=O.useState([]),[l,c]=O.useState([]),[u,d]=O.useState([]),[f,g]=O.useState([]),[_,x]=O.useState([]),[m,h]=O.useState([]);O.useEffect(()=>{if(!t)return;const v={"X-Admin-Token":hs()};je("/api/admin/registrations/hackathon",{headers:v}).then(S=>o(Array.isArray(S)?S:[])).catch(()=>o([])),je("/api/admin/registrations/workshops",{headers:v}).then(S=>c(Array.isArray(S)?S:[])).catch(()=>c([])),je("/api/admin/registrations/kinetic-showdown",{headers:v}).then(S=>d(Array.isArray(S)?S:[])).catch(()=>d([])),je("/api/admin/registrations/esports",{headers:v}).then(S=>g(Array.isArray(S)?S:[])).catch(()=>g([])),je("/api/admin/registrations/open-mic",{headers:v}).then(S=>x(Array.isArray(S)?S:[])).catch(()=>x([])),je("/api/admin/registrations/contact",{headers:v}).then(S=>h(Array.isArray(S)?S:[])).catch(()=>h([]))},[t]);const y=v=>{if(v.preventDefault(),!cf(n)){s("Wrong password.");return}s(""),i(""),e(!0)};return t?p.jsxs("section",{className:"section",children:[p.jsx("h2",{className:"section-title",children:"Registrations Dashboard"}),p.jsx("p",{className:"section-subtitle",children:"Segregated event-wise records with payment status and member details."}),p.jsx("div",{className:"admin-links",children:p.jsx(Wt,{className:"btn btn-ghost",to:"/secret-admin",children:"Back To Content Panel"})}),p.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[p.jsx("h4",{children:"Hackathon Teams"}),p.jsx("div",{className:"table-wrap",children:p.jsxs("table",{className:"admin-table",children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Team"}),p.jsx("th",{children:"Leader"}),p.jsx("th",{children:"Members"}),p.jsx("th",{children:"Payment"}),p.jsx("th",{children:"Created"})]})}),p.jsx("tbody",{children:a.length===0?p.jsx("tr",{children:p.jsx("td",{colSpan:5,children:"No registrations yet."})}):a.map(v=>p.jsxs("tr",{children:[p.jsxs("td",{children:[p.jsx("strong",{children:v.teamName}),p.jsxs("p",{children:[v.memberCount," members, ",v.femaleCount," female"]})]}),p.jsxs("td",{children:[p.jsxs("strong",{children:["Leader: ",v.contactName]}),p.jsx("p",{children:v.contactPhone}),p.jsx("p",{children:v.collegeName})]}),p.jsx("td",{style:{whiteSpace:"pre-wrap",minWidth:"360px"},children:QR(v)}),p.jsxs("td",{children:[p.jsx("strong",{children:v.paymentStatus||"unknown"}),p.jsx("p",{children:v.paymentId||"-"})]}),p.jsx("td",{children:v.createdAt})]},v.id))})]})})]}),p.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[p.jsx("h4",{children:"Workshop Registrations"}),p.jsx("div",{className:"table-wrap",children:p.jsxs("table",{className:"admin-table",children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Workshop"}),p.jsx("th",{children:"Name"}),p.jsx("th",{children:"Phone"}),p.jsx("th",{children:"College"}),p.jsx("th",{children:"Payment"}),p.jsx("th",{children:"Created"})]})}),p.jsx("tbody",{children:l.length===0?p.jsx("tr",{children:p.jsx("td",{colSpan:6,children:"No registrations yet."})}):l.map(v=>p.jsxs("tr",{children:[p.jsx("td",{children:v.workshop}),p.jsx("td",{children:v.name}),p.jsx("td",{children:v.phone}),p.jsx("td",{children:v.collegeName}),p.jsxs("td",{children:[p.jsx("strong",{children:v.paymentStatus||"unknown"}),p.jsx("p",{children:v.paymentId||"-"})]}),p.jsx("td",{children:v.createdAt})]},v.id))})]})})]}),p.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[p.jsx("h4",{children:"Kinetic Showdown Teams"}),p.jsx("div",{className:"table-wrap",children:p.jsxs("table",{className:"admin-table",children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Team"}),p.jsx("th",{children:"Team Leader"}),p.jsx("th",{children:"Members"}),p.jsx("th",{children:"Payment"}),p.jsx("th",{children:"Created"})]})}),p.jsx("tbody",{children:u.length===0?p.jsx("tr",{children:p.jsx("td",{colSpan:5,children:"No registrations yet."})}):u.map(v=>p.jsxs("tr",{children:[p.jsxs("td",{children:[p.jsx("strong",{children:v.teamName}),p.jsxs("p",{children:["College: ",v.collegeName]}),p.jsxs("p",{children:["Team size: ",v.memberCount]})]}),p.jsxs("td",{children:[p.jsx("strong",{children:v.captainName}),p.jsx("p",{children:v.phone})]}),p.jsx("td",{style:{whiteSpace:"pre-wrap",minWidth:"360px"},children:JR(v)}),p.jsxs("td",{children:[p.jsx("strong",{children:v.paymentStatus||"unknown"}),p.jsx("p",{children:v.paymentId||"-"})]}),p.jsx("td",{children:v.createdAt})]},v.id))})]})})]}),p.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[p.jsx("h4",{children:"eSports Teams"}),p.jsx("div",{className:"table-wrap",children:p.jsxs("table",{className:"admin-table",children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Team"}),p.jsx("th",{children:"Leader"}),p.jsx("th",{children:"Players"}),p.jsx("th",{children:"Payment"}),p.jsx("th",{children:"Created"})]})}),p.jsx("tbody",{children:f.length===0?p.jsx("tr",{children:p.jsx("td",{colSpan:5,children:"No registrations yet."})}):f.map(v=>{var S,b,C;return p.jsxs("tr",{children:[p.jsxs("td",{children:[p.jsx("strong",{children:v.teamName}),p.jsxs("p",{children:["Game: ",v.game]}),p.jsx("p",{children:v.isCollegeParticipant?`College: ${v.collegeName||"-"}`:"Not a college team"}),p.jsxs("p",{children:["Substitute: ",v.hasSubstitute?"Yes":"No"]}),v.hasSubstitute&&p.jsx("p",{children:`${((S=v.substitutePlayer)==null?void 0:S.name)||"-"} | ${((b=v.substitutePlayer)==null?void 0:b.gameId)||"-"} | ${((C=v.substitutePlayer)==null?void 0:C.whatsappNumber)||"-"}`})]}),p.jsxs("td",{children:[p.jsx("strong",{children:v.teamLeaderName}),p.jsx("p",{children:v.teamLeaderPhone})]}),p.jsx("td",{style:{whiteSpace:"pre-wrap",minWidth:"360px"},children:v.members.map((E,P)=>`${P+1}. ${E.name} | ${E.whatsappNumber||"-"} | ${E.gameId||"-"} | ${E.collegeName||"-"}`).join(`
`)}),p.jsxs("td",{children:[p.jsx("strong",{children:v.paymentStatus||"unknown"}),p.jsx("p",{children:v.paymentId||"-"})]}),p.jsx("td",{children:v.createdAt})]},v.id)})})]})})]}),p.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[p.jsx("h4",{children:"Contact Submissions"}),p.jsx("div",{className:"table-wrap",children:p.jsxs("table",{className:"admin-table",children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Email"}),p.jsx("th",{children:"Phone"}),p.jsx("th",{children:"Created"})]})}),p.jsx("tbody",{children:m.length===0?p.jsx("tr",{children:p.jsx("td",{colSpan:3,children:"No contact submissions yet."})}):m.map(v=>p.jsxs("tr",{children:[p.jsx("td",{children:v.email}),p.jsx("td",{children:v.phone}),p.jsx("td",{children:v.createdAt})]},v.id))})]})})]}),p.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[p.jsx("h4",{children:"Open Mic Registrations"}),p.jsx("div",{className:"table-wrap",children:p.jsxs("table",{className:"admin-table",children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Name"}),p.jsx("th",{children:"Contact"}),p.jsx("th",{children:"Enrollment"}),p.jsx("th",{children:"Performance"}),p.jsx("th",{children:"Created"})]})}),p.jsx("tbody",{children:_.length===0?p.jsx("tr",{children:p.jsx("td",{colSpan:5,children:"No registrations yet."})}):_.map(v=>p.jsxs("tr",{children:[p.jsxs("td",{children:[p.jsx("strong",{children:v.name}),p.jsx("p",{children:v.collegeName})]}),p.jsx("td",{children:p.jsx("p",{children:v.phone})}),p.jsxs("td",{children:[p.jsx("p",{children:v.enrollmentNumber}),p.jsx("p",{children:v.year})]}),p.jsxs("td",{children:[p.jsx("p",{children:v.performanceType}),p.jsx("p",{children:v.scriptPdfUrl||"-"})]}),p.jsx("td",{children:v.createdAt})]},v.id))})]})})]})]}):p.jsxs("section",{className:"section",children:[p.jsx("h2",{className:"section-title",children:"Management Access - Registrations"}),p.jsxs("div",{className:"card",style:{maxWidth:"520px"},children:[p.jsx("h4",{children:"Enter Password"}),p.jsxs("form",{className:"form-grid",onSubmit:y,children:[p.jsx("input",{type:"password",placeholder:"Enter password",value:n,onChange:v=>i(v.target.value),required:!0}),p.jsx("button",{className:"btn btn-primary",type:"submit",children:"Unlock"})]}),r&&p.jsx("div",{className:"banner",style:{marginTop:"18px"},children:r})]})]})}function t2(){const[t,e]=O.useState(lf()),[n,i]=O.useState(""),[r,s]=O.useState(""),[a,o]=O.useState(!1),[l,c]=O.useState([]),[u,d]=O.useState([]),[f,g]=O.useState([]),_={"X-Admin-Token":hs()},x=async()=>{const[E,P,w]=await Promise.all([je("/api/admin/content/gallery",{headers:_}),je("/api/admin/content/team",{headers:_}),je("/api/admin/content/culture-events",{headers:_})]);c(Array.isArray(E)?E:[]),d(Array.isArray(P)?P:[]),g(Array.isArray(w)?w.map(M=>({...M,imageUrl:M.imageUrl||""})):[])};O.useEffect(()=>{t&&x().catch(()=>{s("Could not load content data.")})},[t]);const m=E=>{if(E.preventDefault(),!cf(n)){s("Wrong password.");return}s(""),i(""),e(!0)},h=async E=>{o(!0),s("");try{const P=await je(`/api/admin/glimpse/${E.id}`,{method:"PUT",headers:_,body:JSON.stringify({title:E.title,preview:E.preview,description:E.description,imageUrl:E.imageUrl})});s(P.message),await x()}catch(P){s(P instanceof Error?P.message:"Update failed")}finally{o(!1)}},y=async E=>{o(!0),s("");try{const P=await je(`/api/admin/glimpse/${E}`,{method:"DELETE",headers:_});s(P.message),await x()}catch(P){s(P instanceof Error?P.message:"Delete failed")}finally{o(!1)}},v=async E=>{o(!0),s("");try{const P=await je(`/api/admin/team/${E.id}`,{method:"PUT",headers:_,body:JSON.stringify({name:E.name,role:E.role,preview:E.preview,about:E.about,imageUrl:E.imageUrl})});s(P.message),await x()}catch(P){s(P instanceof Error?P.message:"Update failed")}finally{o(!1)}},S=async E=>{o(!0),s("");try{const P=await je(`/api/admin/team/${E}`,{method:"DELETE",headers:_});s(P.message),await x()}catch(P){s(P instanceof Error?P.message:"Delete failed")}finally{o(!1)}},b=async E=>{o(!0),s("");try{const P=await je(`/api/admin/culture-event/${E.id}`,{method:"PUT",headers:_,body:JSON.stringify({title:E.title,preview:E.preview,description:E.description,imageUrl:E.imageUrl})});s(P.message),await x()}catch(P){s(P instanceof Error?P.message:"Update failed")}finally{o(!1)}},C=async E=>{o(!0),s("");try{const P=await je(`/api/admin/culture-event/${E}`,{method:"DELETE",headers:_});s(P.message),await x()}catch(P){s(P instanceof Error?P.message:"Delete failed")}finally{o(!1)}};return t?p.jsxs("section",{className:"section",children:[p.jsx("h2",{className:"section-title",children:"Content Manager"}),p.jsx("p",{className:"section-subtitle",children:"Edit or delete any uploaded gallery, team, or cultural content."}),p.jsx("div",{className:"admin-links",children:p.jsx(Wt,{className:"btn btn-ghost",to:"/secret-admin",children:"Back To Content Upload Panel"})}),p.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[p.jsx("h4",{children:"Gallery Items"}),l.length===0?p.jsx("p",{children:"No gallery items."}):l.map((E,P)=>p.jsx("div",{className:"card",style:{marginTop:P===0?"0":"16px"},children:p.jsxs("div",{className:"form-grid",children:[p.jsx("input",{value:E.title,onChange:w=>c(M=>M.map(R=>R.id===E.id?{...R,title:w.target.value}:R))}),p.jsx("input",{value:E.preview,onChange:w=>c(M=>M.map(R=>R.id===E.id?{...R,preview:w.target.value}:R))}),p.jsx("textarea",{rows:3,value:E.description,onChange:w=>c(M=>M.map(R=>R.id===E.id?{...R,description:w.target.value}:R))}),p.jsx("input",{value:E.imageUrl,onChange:w=>c(M=>M.map(R=>R.id===E.id?{...R,imageUrl:w.target.value}:R))}),p.jsxs("div",{className:"admin-links",children:[p.jsx("button",{className:"btn btn-primary",type:"button",disabled:a,onClick:()=>h(E),children:"Save"}),p.jsx("button",{className:"btn btn-ghost",type:"button",disabled:a,onClick:()=>y(E.id),children:"Delete"})]})]})},E.id))]}),p.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[p.jsx("h4",{children:"Team Members"}),u.length===0?p.jsx("p",{children:"No team members."}):u.map((E,P)=>p.jsx("div",{className:"card",style:{marginTop:P===0?"0":"16px"},children:p.jsxs("div",{className:"form-grid",children:[p.jsx("input",{value:E.name,onChange:w=>d(M=>M.map(R=>R.id===E.id?{...R,name:w.target.value}:R))}),p.jsx("input",{value:E.role,onChange:w=>d(M=>M.map(R=>R.id===E.id?{...R,role:w.target.value}:R))}),p.jsx("input",{value:E.preview,onChange:w=>d(M=>M.map(R=>R.id===E.id?{...R,preview:w.target.value}:R))}),p.jsx("textarea",{rows:3,value:E.about,onChange:w=>d(M=>M.map(R=>R.id===E.id?{...R,about:w.target.value}:R))}),p.jsx("input",{value:E.imageUrl,onChange:w=>d(M=>M.map(R=>R.id===E.id?{...R,imageUrl:w.target.value}:R))}),p.jsxs("div",{className:"admin-links",children:[p.jsx("button",{className:"btn btn-primary",type:"button",disabled:a,onClick:()=>v(E),children:"Save"}),p.jsx("button",{className:"btn btn-ghost",type:"button",disabled:a,onClick:()=>S(E.id),children:"Delete"})]})]})},E.id))]}),p.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[p.jsx("h4",{children:"Cultural Events"}),f.length===0?p.jsx("p",{children:"No cultural events."}):f.map((E,P)=>p.jsx("div",{className:"card",style:{marginTop:P===0?"0":"16px"},children:p.jsxs("div",{className:"form-grid",children:[p.jsx("input",{value:E.title,onChange:w=>g(M=>M.map(R=>R.id===E.id?{...R,title:w.target.value}:R))}),p.jsx("input",{value:E.preview,onChange:w=>g(M=>M.map(R=>R.id===E.id?{...R,preview:w.target.value}:R))}),p.jsx("textarea",{rows:3,value:E.description,onChange:w=>g(M=>M.map(R=>R.id===E.id?{...R,description:w.target.value}:R))}),p.jsx("input",{value:E.imageUrl||"",onChange:w=>g(M=>M.map(R=>R.id===E.id?{...R,imageUrl:w.target.value}:R))}),p.jsxs("div",{className:"admin-links",children:[p.jsx("button",{className:"btn btn-primary",type:"button",disabled:a,onClick:()=>b(E),children:"Save"}),p.jsx("button",{className:"btn btn-ghost",type:"button",disabled:a,onClick:()=>C(E.id),children:"Delete"})]})]})},E.id))]}),r&&p.jsx("div",{className:"banner",style:{marginTop:"18px"},children:r})]}):p.jsxs("section",{className:"section",children:[p.jsx("h2",{className:"section-title",children:"Management Access - Content Manager"}),p.jsxs("div",{className:"card",style:{maxWidth:"520px"},children:[p.jsx("h4",{children:"Enter Password"}),p.jsxs("form",{className:"form-grid",onSubmit:m,children:[p.jsx("input",{type:"password",placeholder:"Enter password",value:n,onChange:E=>i(E.target.value),required:!0}),p.jsx("button",{className:"btn btn-primary",type:"submit",children:"Unlock"})]}),r&&p.jsx("div",{className:"banner",style:{marginTop:"18px"},children:r})]})]})}function n2(){return p.jsxs("section",{className:"section",children:[p.jsx("h2",{className:"section-title",children:"Page Not Found"}),p.jsx("p",{className:"section-subtitle",children:"This page does not exist."}),p.jsx("a",{className:"btn btn-primary",href:"/",children:"Back to Home"})]})}function i2(){return O.useEffect(()=>{document.documentElement.dataset.theme="dark"},[]),p.jsxs("div",{className:"app-shell",children:[p.jsx(OR,{}),p.jsx(FR,{}),p.jsx(qS,{}),p.jsx("main",{className:"app-content",children:p.jsxs(LS,{children:[p.jsx(Dt,{path:"/",element:p.jsx(zR,{})}),p.jsx(Dt,{path:"/register",element:p.jsx(XR,{})}),p.jsx(Dt,{path:"/hackathon",element:p.jsx(VR,{})}),p.jsx(Dt,{path:"/workshops",element:p.jsx(GR,{})}),p.jsx(Dt,{path:"/kinetic-showdown",element:p.jsx(Zm,{})}),p.jsx(Dt,{path:"/robo-race",element:p.jsx(Zm,{})}),p.jsx(Dt,{path:"/esports",element:p.jsx(jR,{})}),p.jsx(Dt,{path:"/open-mic",element:p.jsx(WR,{})}),p.jsx(Dt,{path:"/culture",element:p.jsx(qR,{})}),p.jsx(Dt,{path:"/gallery",element:p.jsx($R,{})}),p.jsx(Dt,{path:"/team",element:p.jsx(YR,{})}),p.jsx(Dt,{path:"/contact",element:p.jsx(KR,{})}),p.jsx(Dt,{path:"/secret-admin",element:p.jsx(ZR,{})}),p.jsx(Dt,{path:"/secret-admin/registrations",element:p.jsx(e2,{})}),p.jsx(Dt,{path:"/secret-admin/manage-content",element:p.jsx(t2,{})}),p.jsx(Dt,{path:"*",element:p.jsx(n2,{})})]})}),p.jsx($S,{})]})}yu.createRoot(document.getElementById("root")).render(p.jsx(cg.StrictMode,{children:p.jsx(BS,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:p.jsx(i2,{})})}));
