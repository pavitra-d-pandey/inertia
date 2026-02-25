function m_(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function g_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var eg={exports:{}},jl={},tg={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var za=Symbol.for("react.element"),v_=Symbol.for("react.portal"),__=Symbol.for("react.fragment"),x_=Symbol.for("react.strict_mode"),y_=Symbol.for("react.profiler"),S_=Symbol.for("react.provider"),M_=Symbol.for("react.context"),E_=Symbol.for("react.forward_ref"),w_=Symbol.for("react.suspense"),T_=Symbol.for("react.memo"),C_=Symbol.for("react.lazy"),vf=Symbol.iterator;function A_(t){return t===null||typeof t!="object"?null:(t=vf&&t[vf]||t["@@iterator"],typeof t=="function"?t:null)}var ng={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ig=Object.assign,rg={};function Us(t,e,n){this.props=t,this.context=e,this.refs=rg,this.updater=n||ng}Us.prototype.isReactComponent={};Us.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Us.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function sg(){}sg.prototype=Us.prototype;function nh(t,e,n){this.props=t,this.context=e,this.refs=rg,this.updater=n||ng}var ih=nh.prototype=new sg;ih.constructor=nh;ig(ih,Us.prototype);ih.isPureReactComponent=!0;var _f=Array.isArray,ag=Object.prototype.hasOwnProperty,rh={current:null},og={key:!0,ref:!0,__self:!0,__source:!0};function lg(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)ag.call(e,i)&&!og.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:za,type:t,key:s,ref:a,props:r,_owner:rh.current}}function R_(t,e){return{$$typeof:za,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function sh(t){return typeof t=="object"&&t!==null&&t.$$typeof===za}function b_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var xf=/\/+/g;function vc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?b_(""+t.key):e.toString(36)}function Go(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case za:case v_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+vc(a,0):i,_f(r)?(n="",t!=null&&(n=t.replace(xf,"$&/")+"/"),Go(r,e,n,"",function(c){return c})):r!=null&&(sh(r)&&(r=R_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(xf,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",_f(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+vc(s,o);a+=Go(s,e,n,l,r)}else if(l=A_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+vc(s,o++),a+=Go(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function to(t,e,n){if(t==null)return t;var i=[],r=0;return Go(t,i,"","",function(s){return e.call(n,s,r++)}),i}function P_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qt={current:null},Wo={transition:null},N_={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:Wo,ReactCurrentOwner:rh};function cg(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:to,forEach:function(t,e,n){to(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return to(t,function(){e++}),e},toArray:function(t){return to(t,function(e){return e})||[]},only:function(t){if(!sh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=Us;je.Fragment=__;je.Profiler=y_;je.PureComponent=nh;je.StrictMode=x_;je.Suspense=w_;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N_;je.act=cg;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=ig({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=rh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)ag.call(e,l)&&!og.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:za,type:t.type,key:r,ref:s,props:i,_owner:a}};je.createContext=function(t){return t={$$typeof:M_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:S_,_context:t},t.Consumer=t};je.createElement=lg;je.createFactory=function(t){var e=lg.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:E_,render:t}};je.isValidElement=sh;je.lazy=function(t){return{$$typeof:C_,_payload:{_status:-1,_result:t},_init:P_}};je.memo=function(t,e){return{$$typeof:T_,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=Wo.transition;Wo.transition={};try{t()}finally{Wo.transition=e}};je.unstable_act=cg;je.useCallback=function(t,e){return qt.current.useCallback(t,e)};je.useContext=function(t){return qt.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return qt.current.useDeferredValue(t)};je.useEffect=function(t,e){return qt.current.useEffect(t,e)};je.useId=function(){return qt.current.useId()};je.useImperativeHandle=function(t,e,n){return qt.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return qt.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return qt.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return qt.current.useMemo(t,e)};je.useReducer=function(t,e,n){return qt.current.useReducer(t,e,n)};je.useRef=function(t){return qt.current.useRef(t)};je.useState=function(t){return qt.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return qt.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return qt.current.useTransition()};je.version="18.3.1";tg.exports=je;var U=tg.exports;const ug=g_(U),L_=m_({__proto__:null,default:ug},[U]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_=U,D_=Symbol.for("react.element"),U_=Symbol.for("react.fragment"),F_=Object.prototype.hasOwnProperty,O_=I_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k_={key:!0,ref:!0,__self:!0,__source:!0};function dg(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)F_.call(e,i)&&!k_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:D_,type:t,key:s,ref:a,props:r,_owner:O_.current}}jl.Fragment=U_;jl.jsx=dg;jl.jsxs=dg;eg.exports=jl;var u=eg.exports,Eu={},hg={exports:{}},pn={},fg={exports:{}},pg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,K){var J=D.length;D.push(K);e:for(;0<J;){var se=J-1>>>1,xe=D[se];if(0<r(xe,K))D[se]=K,D[J]=xe,J=se;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var K=D[0],J=D.pop();if(J!==K){D[0]=J;e:for(var se=0,xe=D.length,ue=xe>>>1;se<ue;){var j=2*(se+1)-1,Y=D[j],ne=j+1,ae=D[ne];if(0>r(Y,J))ne<xe&&0>r(ae,Y)?(D[se]=ae,D[ne]=J,se=ne):(D[se]=Y,D[j]=J,se=j);else if(ne<xe&&0>r(ae,J))D[se]=ae,D[ne]=J,se=ne;else break e}}return K}function r(D,K){var J=D.sortIndex-K.sortIndex;return J!==0?J:D.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],d=1,f=null,p=3,g=!1,v=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(D){for(var K=n(c);K!==null;){if(K.callback===null)i(c);else if(K.startTime<=D)i(c),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(c)}}function S(D){if(_=!1,x(D),!v)if(n(l)!==null)v=!0,V(P);else{var K=n(c);K!==null&&$(S,K.startTime-D)}}function P(D,K){v=!1,_&&(_=!1,h(T),T=-1),g=!0;var J=p;try{for(x(K),f=n(l);f!==null&&(!(f.expirationTime>K)||D&&!C());){var se=f.callback;if(typeof se=="function"){f.callback=null,p=f.priorityLevel;var xe=se(f.expirationTime<=K);K=t.unstable_now(),typeof xe=="function"?f.callback=xe:f===n(l)&&i(l),x(K)}else i(l);f=n(l)}if(f!==null)var ue=!0;else{var j=n(c);j!==null&&$(S,j.startTime-K),ue=!1}return ue}finally{f=null,p=J,g=!1}}var R=!1,w=null,T=-1,M=5,E=-1;function C(){return!(t.unstable_now()-E<M)}function I(){if(w!==null){var D=t.unstable_now();E=D;var K=!0;try{K=w(!0,D)}finally{K?F():(R=!1,w=null)}}else R=!1}var F;if(typeof y=="function")F=function(){y(I)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,H=z.port2;z.port1.onmessage=I,F=function(){H.postMessage(null)}}else F=function(){m(I,0)};function V(D){w=D,R||(R=!0,F())}function $(D,K){T=m(function(){D(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,V(P))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(p){case 1:case 2:case 3:var K=3;break;default:K=p}var J=p;p=K;try{return D()}finally{p=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,K){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var J=p;p=D;try{return K()}finally{p=J}},t.unstable_scheduleCallback=function(D,K,J){var se=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?se+J:se):J=se,D){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=J+xe,D={id:d++,callback:K,priorityLevel:D,startTime:J,expirationTime:xe,sortIndex:-1},J>se?(D.sortIndex=J,e(c,D),n(l)===null&&D===n(c)&&(_?(h(T),T=-1):_=!0,$(S,J-se))):(D.sortIndex=xe,e(l,D),v||g||(v=!0,V(P))),D},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(D){var K=p;return function(){var J=p;p=K;try{return D.apply(this,arguments)}finally{p=J}}}})(pg);fg.exports=pg;var z_=fg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_=U,fn=z_;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mg=new Set,xa={};function Pr(t,e){Ms(t,e),Ms(t+"Capture",e)}function Ms(t,e){for(xa[t]=e,t=0;t<e.length;t++)mg.add(e[t])}var hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wu=Object.prototype.hasOwnProperty,j_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yf={},Sf={};function H_(t){return wu.call(Sf,t)?!0:wu.call(yf,t)?!1:j_.test(t)?Sf[t]=!0:(yf[t]=!0,!1)}function V_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function G_(t,e,n,i){if(e===null||typeof e>"u"||V_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $t(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ot[t]=new $t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ot[e]=new $t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ot[t]=new $t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ot[t]=new $t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ot[t]=new $t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ot[t]=new $t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ot[t]=new $t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ot[t]=new $t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ot[t]=new $t(t,5,!1,t.toLowerCase(),null,!1,!1)});var ah=/[\-:]([a-z])/g;function oh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ah,oh);Ot[e]=new $t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ah,oh);Ot[e]=new $t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ah,oh);Ot[e]=new $t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ot[t]=new $t(t,1,!1,t.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new $t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ot[t]=new $t(t,1,!1,t.toLowerCase(),null,!0,!0)});function lh(t,e,n,i){var r=Ot.hasOwnProperty(e)?Ot[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(G_(e,n,r,i)&&(n=null),i||r===null?H_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var xi=B_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,no=Symbol.for("react.element"),es=Symbol.for("react.portal"),ts=Symbol.for("react.fragment"),ch=Symbol.for("react.strict_mode"),Tu=Symbol.for("react.profiler"),gg=Symbol.for("react.provider"),vg=Symbol.for("react.context"),uh=Symbol.for("react.forward_ref"),Cu=Symbol.for("react.suspense"),Au=Symbol.for("react.suspense_list"),dh=Symbol.for("react.memo"),Ri=Symbol.for("react.lazy"),_g=Symbol.for("react.offscreen"),Mf=Symbol.iterator;function js(t){return t===null||typeof t!="object"?null:(t=Mf&&t[Mf]||t["@@iterator"],typeof t=="function"?t:null)}var ut=Object.assign,_c;function na(t){if(_c===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);_c=e&&e[1]||""}return`
`+_c+t}var xc=!1;function yc(t,e){if(!t||xc)return"";xc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{xc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?na(t):""}function W_(t){switch(t.tag){case 5:return na(t.type);case 16:return na("Lazy");case 13:return na("Suspense");case 19:return na("SuspenseList");case 0:case 2:case 15:return t=yc(t.type,!1),t;case 11:return t=yc(t.type.render,!1),t;case 1:return t=yc(t.type,!0),t;default:return""}}function Ru(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ts:return"Fragment";case es:return"Portal";case Tu:return"Profiler";case ch:return"StrictMode";case Cu:return"Suspense";case Au:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case vg:return(t.displayName||"Context")+".Consumer";case gg:return(t._context.displayName||"Context")+".Provider";case uh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case dh:return e=t.displayName||null,e!==null?e:Ru(t.type)||"Memo";case Ri:e=t._payload,t=t._init;try{return Ru(t(e))}catch{}}return null}function X_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ru(e);case 8:return e===ch?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function $i(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function q_(t){var e=xg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function io(t){t._valueTracker||(t._valueTracker=q_(t))}function yg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=xg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ll(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bu(t,e){var n=e.checked;return ut({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ef(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=$i(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Sg(t,e){e=e.checked,e!=null&&lh(t,"checked",e,!1)}function Pu(t,e){Sg(t,e);var n=$i(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Nu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Nu(t,e.type,$i(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function wf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Nu(t,e,n){(e!=="number"||ll(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ia=Array.isArray;function fs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+$i(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Lu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return ut({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Tf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(ia(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:$i(n)}}function Mg(t,e){var n=$i(e.value),i=$i(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Cf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Eg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Iu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Eg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ro,wg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ro=ro||document.createElement("div"),ro.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ro.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ya(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var oa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$_=["Webkit","ms","Moz","O"];Object.keys(oa).forEach(function(t){$_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),oa[e]=oa[t]})});function Tg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||oa.hasOwnProperty(t)&&oa[t]?(""+e).trim():e+"px"}function Cg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Tg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Y_=ut({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Du(t,e){if(e){if(Y_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function Uu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fu=null;function hh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ou=null,ps=null,ms=null;function Af(t){if(t=Ha(t)){if(typeof Ou!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=Xl(e),Ou(t.stateNode,t.type,e))}}function Ag(t){ps?ms?ms.push(t):ms=[t]:ps=t}function Rg(){if(ps){var t=ps,e=ms;if(ms=ps=null,Af(t),e)for(t=0;t<e.length;t++)Af(e[t])}}function bg(t,e){return t(e)}function Pg(){}var Sc=!1;function Ng(t,e,n){if(Sc)return t(e,n);Sc=!0;try{return bg(t,e,n)}finally{Sc=!1,(ps!==null||ms!==null)&&(Pg(),Rg())}}function Sa(t,e){var n=t.stateNode;if(n===null)return null;var i=Xl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var ku=!1;if(hi)try{var Hs={};Object.defineProperty(Hs,"passive",{get:function(){ku=!0}}),window.addEventListener("test",Hs,Hs),window.removeEventListener("test",Hs,Hs)}catch{ku=!1}function K_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var la=!1,cl=null,ul=!1,zu=null,Z_={onError:function(t){la=!0,cl=t}};function J_(t,e,n,i,r,s,a,o,l){la=!1,cl=null,K_.apply(Z_,arguments)}function Q_(t,e,n,i,r,s,a,o,l){if(J_.apply(this,arguments),la){if(la){var c=cl;la=!1,cl=null}else throw Error(ie(198));ul||(ul=!0,zu=c)}}function Nr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Lg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Rf(t){if(Nr(t)!==t)throw Error(ie(188))}function ex(t){var e=t.alternate;if(!e){if(e=Nr(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Rf(r),t;if(s===i)return Rf(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function Ig(t){return t=ex(t),t!==null?Dg(t):null}function Dg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Dg(t);if(e!==null)return e;t=t.sibling}return null}var Ug=fn.unstable_scheduleCallback,bf=fn.unstable_cancelCallback,tx=fn.unstable_shouldYield,nx=fn.unstable_requestPaint,gt=fn.unstable_now,ix=fn.unstable_getCurrentPriorityLevel,fh=fn.unstable_ImmediatePriority,Fg=fn.unstable_UserBlockingPriority,dl=fn.unstable_NormalPriority,rx=fn.unstable_LowPriority,Og=fn.unstable_IdlePriority,Hl=null,$n=null;function sx(t){if($n&&typeof $n.onCommitFiberRoot=="function")try{$n.onCommitFiberRoot(Hl,t,void 0,(t.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:lx,ax=Math.log,ox=Math.LN2;function lx(t){return t>>>=0,t===0?32:31-(ax(t)/ox|0)|0}var so=64,ao=4194304;function ra(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function hl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ra(o):(s&=a,s!==0&&(i=ra(s)))}else a=n&~r,a!==0?i=ra(a):s!==0&&(i=ra(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-On(e),r=1<<n,i|=t[n],e&=~r;return i}function cx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ux(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-On(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=cx(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Bu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function kg(){var t=so;return so<<=1,!(so&4194240)&&(so=64),t}function Mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ba(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-On(e),t[e]=n}function dx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-On(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function ph(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-On(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function zg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Bg,mh,jg,Hg,Vg,ju=!1,oo=[],Oi=null,ki=null,zi=null,Ma=new Map,Ea=new Map,Pi=[],hx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pf(t,e){switch(t){case"focusin":case"focusout":Oi=null;break;case"dragenter":case"dragleave":ki=null;break;case"mouseover":case"mouseout":zi=null;break;case"pointerover":case"pointerout":Ma.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ea.delete(e.pointerId)}}function Vs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ha(e),e!==null&&mh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function fx(t,e,n,i,r){switch(e){case"focusin":return Oi=Vs(Oi,t,e,n,i,r),!0;case"dragenter":return ki=Vs(ki,t,e,n,i,r),!0;case"mouseover":return zi=Vs(zi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ma.set(s,Vs(Ma.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ea.set(s,Vs(Ea.get(s)||null,t,e,n,i,r)),!0}return!1}function Gg(t){var e=mr(t.target);if(e!==null){var n=Nr(e);if(n!==null){if(e=n.tag,e===13){if(e=Lg(n),e!==null){t.blockedOn=e,Vg(t.priority,function(){jg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Hu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Fu=i,n.target.dispatchEvent(i),Fu=null}else return e=Ha(n),e!==null&&mh(e),t.blockedOn=n,!1;e.shift()}return!0}function Nf(t,e,n){Xo(t)&&n.delete(e)}function px(){ju=!1,Oi!==null&&Xo(Oi)&&(Oi=null),ki!==null&&Xo(ki)&&(ki=null),zi!==null&&Xo(zi)&&(zi=null),Ma.forEach(Nf),Ea.forEach(Nf)}function Gs(t,e){t.blockedOn===e&&(t.blockedOn=null,ju||(ju=!0,fn.unstable_scheduleCallback(fn.unstable_NormalPriority,px)))}function wa(t){function e(r){return Gs(r,t)}if(0<oo.length){Gs(oo[0],t);for(var n=1;n<oo.length;n++){var i=oo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Oi!==null&&Gs(Oi,t),ki!==null&&Gs(ki,t),zi!==null&&Gs(zi,t),Ma.forEach(e),Ea.forEach(e),n=0;n<Pi.length;n++)i=Pi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Pi.length&&(n=Pi[0],n.blockedOn===null);)Gg(n),n.blockedOn===null&&Pi.shift()}var gs=xi.ReactCurrentBatchConfig,fl=!0;function mx(t,e,n,i){var r=et,s=gs.transition;gs.transition=null;try{et=1,gh(t,e,n,i)}finally{et=r,gs.transition=s}}function gx(t,e,n,i){var r=et,s=gs.transition;gs.transition=null;try{et=4,gh(t,e,n,i)}finally{et=r,gs.transition=s}}function gh(t,e,n,i){if(fl){var r=Hu(t,e,n,i);if(r===null)Lc(t,e,i,pl,n),Pf(t,i);else if(fx(r,t,e,n,i))i.stopPropagation();else if(Pf(t,i),e&4&&-1<hx.indexOf(t)){for(;r!==null;){var s=Ha(r);if(s!==null&&Bg(s),s=Hu(t,e,n,i),s===null&&Lc(t,e,i,pl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Lc(t,e,i,null,n)}}var pl=null;function Hu(t,e,n,i){if(pl=null,t=hh(i),t=mr(t),t!==null)if(e=Nr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Lg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return pl=t,null}function Wg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ix()){case fh:return 1;case Fg:return 4;case dl:case rx:return 16;case Og:return 536870912;default:return 16}default:return 16}}var Ii=null,vh=null,qo=null;function Xg(){if(qo)return qo;var t,e=vh,n=e.length,i,r="value"in Ii?Ii.value:Ii.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return qo=r.slice(t,1<i?1-i:void 0)}function $o(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function lo(){return!0}function Lf(){return!1}function mn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?lo:Lf,this.isPropagationStopped=Lf,this}return ut(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=lo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=lo)},persist:function(){},isPersistent:lo}),e}var Fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_h=mn(Fs),ja=ut({},Fs,{view:0,detail:0}),vx=mn(ja),Ec,wc,Ws,Vl=ut({},ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ws&&(Ws&&t.type==="mousemove"?(Ec=t.screenX-Ws.screenX,wc=t.screenY-Ws.screenY):wc=Ec=0,Ws=t),Ec)},movementY:function(t){return"movementY"in t?t.movementY:wc}}),If=mn(Vl),_x=ut({},Vl,{dataTransfer:0}),xx=mn(_x),yx=ut({},ja,{relatedTarget:0}),Tc=mn(yx),Sx=ut({},Fs,{animationName:0,elapsedTime:0,pseudoElement:0}),Mx=mn(Sx),Ex=ut({},Fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),wx=mn(Ex),Tx=ut({},Fs,{data:0}),Df=mn(Tx),Cx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ax={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Rx[t])?!!e[t]:!1}function xh(){return bx}var Px=ut({},ja,{key:function(t){if(t.key){var e=Cx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=$o(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ax[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xh,charCode:function(t){return t.type==="keypress"?$o(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$o(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Nx=mn(Px),Lx=ut({},Vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uf=mn(Lx),Ix=ut({},ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xh}),Dx=mn(Ix),Ux=ut({},Fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fx=mn(Ux),Ox=ut({},Vl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kx=mn(Ox),zx=[9,13,27,32],yh=hi&&"CompositionEvent"in window,ca=null;hi&&"documentMode"in document&&(ca=document.documentMode);var Bx=hi&&"TextEvent"in window&&!ca,qg=hi&&(!yh||ca&&8<ca&&11>=ca),Ff=" ",Of=!1;function $g(t,e){switch(t){case"keyup":return zx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function jx(t,e){switch(t){case"compositionend":return Yg(e);case"keypress":return e.which!==32?null:(Of=!0,Ff);case"textInput":return t=e.data,t===Ff&&Of?null:t;default:return null}}function Hx(t,e){if(ns)return t==="compositionend"||!yh&&$g(t,e)?(t=Xg(),qo=vh=Ii=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return qg&&e.locale!=="ko"?null:e.data;default:return null}}var Vx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Vx[t.type]:e==="textarea"}function Kg(t,e,n,i){Ag(i),e=ml(e,"onChange"),0<e.length&&(n=new _h("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ua=null,Ta=null;function Gx(t){ov(t,0)}function Gl(t){var e=ss(t);if(yg(e))return t}function Wx(t,e){if(t==="change")return e}var Zg=!1;if(hi){var Cc;if(hi){var Ac="oninput"in document;if(!Ac){var zf=document.createElement("div");zf.setAttribute("oninput","return;"),Ac=typeof zf.oninput=="function"}Cc=Ac}else Cc=!1;Zg=Cc&&(!document.documentMode||9<document.documentMode)}function Bf(){ua&&(ua.detachEvent("onpropertychange",Jg),Ta=ua=null)}function Jg(t){if(t.propertyName==="value"&&Gl(Ta)){var e=[];Kg(e,Ta,t,hh(t)),Ng(Gx,e)}}function Xx(t,e,n){t==="focusin"?(Bf(),ua=e,Ta=n,ua.attachEvent("onpropertychange",Jg)):t==="focusout"&&Bf()}function qx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gl(Ta)}function $x(t,e){if(t==="click")return Gl(e)}function Yx(t,e){if(t==="input"||t==="change")return Gl(e)}function Kx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zn=typeof Object.is=="function"?Object.is:Kx;function Ca(t,e){if(zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!wu.call(e,r)||!zn(t[r],e[r]))return!1}return!0}function jf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hf(t,e){var n=jf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jf(n)}}function Qg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Qg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ev(){for(var t=window,e=ll();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ll(t.document)}return e}function Sh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Zx(t){var e=ev(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Qg(n.ownerDocument.documentElement,n)){if(i!==null&&Sh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Hf(n,s);var a=Hf(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Jx=hi&&"documentMode"in document&&11>=document.documentMode,is=null,Vu=null,da=null,Gu=!1;function Vf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gu||is==null||is!==ll(i)||(i=is,"selectionStart"in i&&Sh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),da&&Ca(da,i)||(da=i,i=ml(Vu,"onSelect"),0<i.length&&(e=new _h("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=is)))}function co(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var rs={animationend:co("Animation","AnimationEnd"),animationiteration:co("Animation","AnimationIteration"),animationstart:co("Animation","AnimationStart"),transitionend:co("Transition","TransitionEnd")},Rc={},tv={};hi&&(tv=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function Wl(t){if(Rc[t])return Rc[t];if(!rs[t])return t;var e=rs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in tv)return Rc[t]=e[n];return t}var nv=Wl("animationend"),iv=Wl("animationiteration"),rv=Wl("animationstart"),sv=Wl("transitionend"),av=new Map,Gf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zi(t,e){av.set(t,e),Pr(e,[t])}for(var bc=0;bc<Gf.length;bc++){var Pc=Gf[bc],Qx=Pc.toLowerCase(),ey=Pc[0].toUpperCase()+Pc.slice(1);Zi(Qx,"on"+ey)}Zi(nv,"onAnimationEnd");Zi(iv,"onAnimationIteration");Zi(rv,"onAnimationStart");Zi("dblclick","onDoubleClick");Zi("focusin","onFocus");Zi("focusout","onBlur");Zi(sv,"onTransitionEnd");Ms("onMouseEnter",["mouseout","mouseover"]);Ms("onMouseLeave",["mouseout","mouseover"]);Ms("onPointerEnter",["pointerout","pointerover"]);Ms("onPointerLeave",["pointerout","pointerover"]);Pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ty=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function Wf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Q_(i,e,void 0,t),t.currentTarget=null}function ov(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Wf(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Wf(r,o,c),s=l}}}if(ul)throw t=zu,ul=!1,zu=null,t}function it(t,e){var n=e[Yu];n===void 0&&(n=e[Yu]=new Set);var i=t+"__bubble";n.has(i)||(lv(e,t,2,!1),n.add(i))}function Nc(t,e,n){var i=0;e&&(i|=4),lv(n,t,i,e)}var uo="_reactListening"+Math.random().toString(36).slice(2);function Aa(t){if(!t[uo]){t[uo]=!0,mg.forEach(function(n){n!=="selectionchange"&&(ty.has(n)||Nc(n,!1,t),Nc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[uo]||(e[uo]=!0,Nc("selectionchange",!1,e))}}function lv(t,e,n,i){switch(Wg(e)){case 1:var r=mx;break;case 4:r=gx;break;default:r=gh}n=r.bind(null,e,n,t),r=void 0,!ku||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Lc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=mr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Ng(function(){var c=s,d=hh(n),f=[];e:{var p=av.get(t);if(p!==void 0){var g=_h,v=t;switch(t){case"keypress":if($o(n)===0)break e;case"keydown":case"keyup":g=Nx;break;case"focusin":v="focus",g=Tc;break;case"focusout":v="blur",g=Tc;break;case"beforeblur":case"afterblur":g=Tc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=If;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=xx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Dx;break;case nv:case iv:case rv:g=Mx;break;case sv:g=Fx;break;case"scroll":g=vx;break;case"wheel":g=kx;break;case"copy":case"cut":case"paste":g=wx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Uf}var _=(e&4)!==0,m=!_&&t==="scroll",h=_?p!==null?p+"Capture":null:p;_=[];for(var y=c,x;y!==null;){x=y;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,h!==null&&(S=Sa(y,h),S!=null&&_.push(Ra(y,S,x)))),m)break;y=y.return}0<_.length&&(p=new g(p,v,null,n,d),f.push({event:p,listeners:_}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",p&&n!==Fu&&(v=n.relatedTarget||n.fromElement)&&(mr(v)||v[fi]))break e;if((g||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=c,v=v?mr(v):null,v!==null&&(m=Nr(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=c),g!==v)){if(_=If,S="onMouseLeave",h="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(_=Uf,S="onPointerLeave",h="onPointerEnter",y="pointer"),m=g==null?p:ss(g),x=v==null?p:ss(v),p=new _(S,y+"leave",g,n,d),p.target=m,p.relatedTarget=x,S=null,mr(d)===c&&(_=new _(h,y+"enter",v,n,d),_.target=x,_.relatedTarget=m,S=_),m=S,g&&v)t:{for(_=g,h=v,y=0,x=_;x;x=Fr(x))y++;for(x=0,S=h;S;S=Fr(S))x++;for(;0<y-x;)_=Fr(_),y--;for(;0<x-y;)h=Fr(h),x--;for(;y--;){if(_===h||h!==null&&_===h.alternate)break t;_=Fr(_),h=Fr(h)}_=null}else _=null;g!==null&&Xf(f,p,g,_,!1),v!==null&&m!==null&&Xf(f,m,v,_,!0)}}e:{if(p=c?ss(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var P=Wx;else if(kf(p))if(Zg)P=Yx;else{P=qx;var R=Xx}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(P=$x);if(P&&(P=P(t,c))){Kg(f,P,n,d);break e}R&&R(t,p,c),t==="focusout"&&(R=p._wrapperState)&&R.controlled&&p.type==="number"&&Nu(p,"number",p.value)}switch(R=c?ss(c):window,t){case"focusin":(kf(R)||R.contentEditable==="true")&&(is=R,Vu=c,da=null);break;case"focusout":da=Vu=is=null;break;case"mousedown":Gu=!0;break;case"contextmenu":case"mouseup":case"dragend":Gu=!1,Vf(f,n,d);break;case"selectionchange":if(Jx)break;case"keydown":case"keyup":Vf(f,n,d)}var w;if(yh)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else ns?$g(t,n)&&(T="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(qg&&n.locale!=="ko"&&(ns||T!=="onCompositionStart"?T==="onCompositionEnd"&&ns&&(w=Xg()):(Ii=d,vh="value"in Ii?Ii.value:Ii.textContent,ns=!0)),R=ml(c,T),0<R.length&&(T=new Df(T,t,null,n,d),f.push({event:T,listeners:R}),w?T.data=w:(w=Yg(n),w!==null&&(T.data=w)))),(w=Bx?jx(t,n):Hx(t,n))&&(c=ml(c,"onBeforeInput"),0<c.length&&(d=new Df("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=w))}ov(f,e)})}function Ra(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ml(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Sa(t,n),s!=null&&i.unshift(Ra(t,s,r)),s=Sa(t,e),s!=null&&i.push(Ra(t,s,r))),t=t.return}return i}function Fr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Xf(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Sa(n,s),l!=null&&a.unshift(Ra(n,l,o))):r||(l=Sa(n,s),l!=null&&a.push(Ra(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var ny=/\r\n?/g,iy=/\u0000|\uFFFD/g;function qf(t){return(typeof t=="string"?t:""+t).replace(ny,`
`).replace(iy,"")}function ho(t,e,n){if(e=qf(e),qf(t)!==e&&n)throw Error(ie(425))}function gl(){}var Wu=null,Xu=null;function qu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $u=typeof setTimeout=="function"?setTimeout:void 0,ry=typeof clearTimeout=="function"?clearTimeout:void 0,$f=typeof Promise=="function"?Promise:void 0,sy=typeof queueMicrotask=="function"?queueMicrotask:typeof $f<"u"?function(t){return $f.resolve(null).then(t).catch(ay)}:$u;function ay(t){setTimeout(function(){throw t})}function Ic(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),wa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);wa(e)}function Bi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Yf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Os=Math.random().toString(36).slice(2),Wn="__reactFiber$"+Os,ba="__reactProps$"+Os,fi="__reactContainer$"+Os,Yu="__reactEvents$"+Os,oy="__reactListeners$"+Os,ly="__reactHandles$"+Os;function mr(t){var e=t[Wn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[fi]||n[Wn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Yf(t);t!==null;){if(n=t[Wn])return n;t=Yf(t)}return e}t=n,n=t.parentNode}return null}function Ha(t){return t=t[Wn]||t[fi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function Xl(t){return t[ba]||null}var Ku=[],as=-1;function Ji(t){return{current:t}}function st(t){0>as||(t.current=Ku[as],Ku[as]=null,as--)}function nt(t,e){as++,Ku[as]=t.current,t.current=e}var Yi={},Vt=Ji(Yi),Qt=Ji(!1),Er=Yi;function Es(t,e){var n=t.type.contextTypes;if(!n)return Yi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function en(t){return t=t.childContextTypes,t!=null}function vl(){st(Qt),st(Vt)}function Kf(t,e,n){if(Vt.current!==Yi)throw Error(ie(168));nt(Vt,e),nt(Qt,n)}function cv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,X_(t)||"Unknown",r));return ut({},n,i)}function _l(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Yi,Er=Vt.current,nt(Vt,t),nt(Qt,Qt.current),!0}function Zf(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=cv(t,e,Er),i.__reactInternalMemoizedMergedChildContext=t,st(Qt),st(Vt),nt(Vt,t)):st(Qt),nt(Qt,n)}var si=null,ql=!1,Dc=!1;function uv(t){si===null?si=[t]:si.push(t)}function cy(t){ql=!0,uv(t)}function Qi(){if(!Dc&&si!==null){Dc=!0;var t=0,e=et;try{var n=si;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}si=null,ql=!1}catch(r){throw si!==null&&(si=si.slice(t+1)),Ug(fh,Qi),r}finally{et=e,Dc=!1}}return null}var os=[],ls=0,xl=null,yl=0,_n=[],xn=0,wr=null,oi=1,li="";function cr(t,e){os[ls++]=yl,os[ls++]=xl,xl=t,yl=e}function dv(t,e,n){_n[xn++]=oi,_n[xn++]=li,_n[xn++]=wr,wr=t;var i=oi;t=li;var r=32-On(i)-1;i&=~(1<<r),n+=1;var s=32-On(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,oi=1<<32-On(e)+r|n<<r|i,li=s+t}else oi=1<<s|n<<r|i,li=t}function Mh(t){t.return!==null&&(cr(t,1),dv(t,1,0))}function Eh(t){for(;t===xl;)xl=os[--ls],os[ls]=null,yl=os[--ls],os[ls]=null;for(;t===wr;)wr=_n[--xn],_n[xn]=null,li=_n[--xn],_n[xn]=null,oi=_n[--xn],_n[xn]=null}var dn=null,un=null,at=!1,Ln=null;function hv(t,e){var n=yn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Jf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,dn=t,un=Bi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,dn=t,un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=wr!==null?{id:oi,overflow:li}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=yn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,dn=t,un=null,!0):!1;default:return!1}}function Zu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ju(t){if(at){var e=un;if(e){var n=e;if(!Jf(t,e)){if(Zu(t))throw Error(ie(418));e=Bi(n.nextSibling);var i=dn;e&&Jf(t,e)?hv(i,n):(t.flags=t.flags&-4097|2,at=!1,dn=t)}}else{if(Zu(t))throw Error(ie(418));t.flags=t.flags&-4097|2,at=!1,dn=t}}}function Qf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;dn=t}function fo(t){if(t!==dn)return!1;if(!at)return Qf(t),at=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!qu(t.type,t.memoizedProps)),e&&(e=un)){if(Zu(t))throw fv(),Error(ie(418));for(;e;)hv(t,e),e=Bi(e.nextSibling)}if(Qf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){un=Bi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}un=null}}else un=dn?Bi(t.stateNode.nextSibling):null;return!0}function fv(){for(var t=un;t;)t=Bi(t.nextSibling)}function ws(){un=dn=null,at=!1}function wh(t){Ln===null?Ln=[t]:Ln.push(t)}var uy=xi.ReactCurrentBatchConfig;function Xs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function po(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ep(t){var e=t._init;return e(t._payload)}function pv(t){function e(h,y){if(t){var x=h.deletions;x===null?(h.deletions=[y],h.flags|=16):x.push(y)}}function n(h,y){if(!t)return null;for(;y!==null;)e(h,y),y=y.sibling;return null}function i(h,y){for(h=new Map;y!==null;)y.key!==null?h.set(y.key,y):h.set(y.index,y),y=y.sibling;return h}function r(h,y){return h=Gi(h,y),h.index=0,h.sibling=null,h}function s(h,y,x){return h.index=x,t?(x=h.alternate,x!==null?(x=x.index,x<y?(h.flags|=2,y):x):(h.flags|=2,y)):(h.flags|=1048576,y)}function a(h){return t&&h.alternate===null&&(h.flags|=2),h}function o(h,y,x,S){return y===null||y.tag!==6?(y=jc(x,h.mode,S),y.return=h,y):(y=r(y,x),y.return=h,y)}function l(h,y,x,S){var P=x.type;return P===ts?d(h,y,x.props.children,S,x.key):y!==null&&(y.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ri&&ep(P)===y.type)?(S=r(y,x.props),S.ref=Xs(h,y,x),S.return=h,S):(S=tl(x.type,x.key,x.props,null,h.mode,S),S.ref=Xs(h,y,x),S.return=h,S)}function c(h,y,x,S){return y===null||y.tag!==4||y.stateNode.containerInfo!==x.containerInfo||y.stateNode.implementation!==x.implementation?(y=Hc(x,h.mode,S),y.return=h,y):(y=r(y,x.children||[]),y.return=h,y)}function d(h,y,x,S,P){return y===null||y.tag!==7?(y=Sr(x,h.mode,S,P),y.return=h,y):(y=r(y,x),y.return=h,y)}function f(h,y,x){if(typeof y=="string"&&y!==""||typeof y=="number")return y=jc(""+y,h.mode,x),y.return=h,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case no:return x=tl(y.type,y.key,y.props,null,h.mode,x),x.ref=Xs(h,null,y),x.return=h,x;case es:return y=Hc(y,h.mode,x),y.return=h,y;case Ri:var S=y._init;return f(h,S(y._payload),x)}if(ia(y)||js(y))return y=Sr(y,h.mode,x,null),y.return=h,y;po(h,y)}return null}function p(h,y,x,S){var P=y!==null?y.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return P!==null?null:o(h,y,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case no:return x.key===P?l(h,y,x,S):null;case es:return x.key===P?c(h,y,x,S):null;case Ri:return P=x._init,p(h,y,P(x._payload),S)}if(ia(x)||js(x))return P!==null?null:d(h,y,x,S,null);po(h,x)}return null}function g(h,y,x,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(x)||null,o(y,h,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case no:return h=h.get(S.key===null?x:S.key)||null,l(y,h,S,P);case es:return h=h.get(S.key===null?x:S.key)||null,c(y,h,S,P);case Ri:var R=S._init;return g(h,y,x,R(S._payload),P)}if(ia(S)||js(S))return h=h.get(x)||null,d(y,h,S,P,null);po(y,S)}return null}function v(h,y,x,S){for(var P=null,R=null,w=y,T=y=0,M=null;w!==null&&T<x.length;T++){w.index>T?(M=w,w=null):M=w.sibling;var E=p(h,w,x[T],S);if(E===null){w===null&&(w=M);break}t&&w&&E.alternate===null&&e(h,w),y=s(E,y,T),R===null?P=E:R.sibling=E,R=E,w=M}if(T===x.length)return n(h,w),at&&cr(h,T),P;if(w===null){for(;T<x.length;T++)w=f(h,x[T],S),w!==null&&(y=s(w,y,T),R===null?P=w:R.sibling=w,R=w);return at&&cr(h,T),P}for(w=i(h,w);T<x.length;T++)M=g(w,h,T,x[T],S),M!==null&&(t&&M.alternate!==null&&w.delete(M.key===null?T:M.key),y=s(M,y,T),R===null?P=M:R.sibling=M,R=M);return t&&w.forEach(function(C){return e(h,C)}),at&&cr(h,T),P}function _(h,y,x,S){var P=js(x);if(typeof P!="function")throw Error(ie(150));if(x=P.call(x),x==null)throw Error(ie(151));for(var R=P=null,w=y,T=y=0,M=null,E=x.next();w!==null&&!E.done;T++,E=x.next()){w.index>T?(M=w,w=null):M=w.sibling;var C=p(h,w,E.value,S);if(C===null){w===null&&(w=M);break}t&&w&&C.alternate===null&&e(h,w),y=s(C,y,T),R===null?P=C:R.sibling=C,R=C,w=M}if(E.done)return n(h,w),at&&cr(h,T),P;if(w===null){for(;!E.done;T++,E=x.next())E=f(h,E.value,S),E!==null&&(y=s(E,y,T),R===null?P=E:R.sibling=E,R=E);return at&&cr(h,T),P}for(w=i(h,w);!E.done;T++,E=x.next())E=g(w,h,T,E.value,S),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?T:E.key),y=s(E,y,T),R===null?P=E:R.sibling=E,R=E);return t&&w.forEach(function(I){return e(h,I)}),at&&cr(h,T),P}function m(h,y,x,S){if(typeof x=="object"&&x!==null&&x.type===ts&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case no:e:{for(var P=x.key,R=y;R!==null;){if(R.key===P){if(P=x.type,P===ts){if(R.tag===7){n(h,R.sibling),y=r(R,x.props.children),y.return=h,h=y;break e}}else if(R.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ri&&ep(P)===R.type){n(h,R.sibling),y=r(R,x.props),y.ref=Xs(h,R,x),y.return=h,h=y;break e}n(h,R);break}else e(h,R);R=R.sibling}x.type===ts?(y=Sr(x.props.children,h.mode,S,x.key),y.return=h,h=y):(S=tl(x.type,x.key,x.props,null,h.mode,S),S.ref=Xs(h,y,x),S.return=h,h=S)}return a(h);case es:e:{for(R=x.key;y!==null;){if(y.key===R)if(y.tag===4&&y.stateNode.containerInfo===x.containerInfo&&y.stateNode.implementation===x.implementation){n(h,y.sibling),y=r(y,x.children||[]),y.return=h,h=y;break e}else{n(h,y);break}else e(h,y);y=y.sibling}y=Hc(x,h.mode,S),y.return=h,h=y}return a(h);case Ri:return R=x._init,m(h,y,R(x._payload),S)}if(ia(x))return v(h,y,x,S);if(js(x))return _(h,y,x,S);po(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,y!==null&&y.tag===6?(n(h,y.sibling),y=r(y,x),y.return=h,h=y):(n(h,y),y=jc(x,h.mode,S),y.return=h,h=y),a(h)):n(h,y)}return m}var Ts=pv(!0),mv=pv(!1),Sl=Ji(null),Ml=null,cs=null,Th=null;function Ch(){Th=cs=Ml=null}function Ah(t){var e=Sl.current;st(Sl),t._currentValue=e}function Qu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function vs(t,e){Ml=t,Th=cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jt=!0),t.firstContext=null)}function En(t){var e=t._currentValue;if(Th!==t)if(t={context:t,memoizedValue:e,next:null},cs===null){if(Ml===null)throw Error(ie(308));cs=t,Ml.dependencies={lanes:0,firstContext:t}}else cs=cs.next=t;return e}var gr=null;function Rh(t){gr===null?gr=[t]:gr.push(t)}function gv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Rh(e)):(n.next=r.next,r.next=n),e.interleaved=n,pi(t,i)}function pi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var bi=!1;function bh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function di(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ji(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,We&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,pi(t,n)}return r=i.interleaved,r===null?(e.next=e,Rh(i)):(e.next=r.next,r.next=e),i.interleaved=e,pi(t,n)}function Yo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ph(t,n)}}function tp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function El(t,e,n,i){var r=t.updateQueue;bi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,d=c=l=null,o=s;do{var p=o.lane,g=o.eventTime;if((i&p)===p){d!==null&&(d=d.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,_=o;switch(p=e,g=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){f=v.call(g,f,p);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,p=typeof v=="function"?v.call(g,f,p):v,p==null)break e;f=ut({},f,p);break e;case 2:bi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[o]:p.push(o))}else g={eventTime:g,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=g,l=f):d=d.next=g,a|=p;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;p=o,o=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Cr|=a,t.lanes=a,t.memoizedState=f}}function np(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Va={},Yn=Ji(Va),Pa=Ji(Va),Na=Ji(Va);function vr(t){if(t===Va)throw Error(ie(174));return t}function Ph(t,e){switch(nt(Na,e),nt(Pa,t),nt(Yn,Va),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Iu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Iu(e,t)}st(Yn),nt(Yn,e)}function Cs(){st(Yn),st(Pa),st(Na)}function _v(t){vr(Na.current);var e=vr(Yn.current),n=Iu(e,t.type);e!==n&&(nt(Pa,t),nt(Yn,n))}function Nh(t){Pa.current===t&&(st(Yn),st(Pa))}var lt=Ji(0);function wl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Uc=[];function Lh(){for(var t=0;t<Uc.length;t++)Uc[t]._workInProgressVersionPrimary=null;Uc.length=0}var Ko=xi.ReactCurrentDispatcher,Fc=xi.ReactCurrentBatchConfig,Tr=0,ct=null,Mt=null,bt=null,Tl=!1,ha=!1,La=0,dy=0;function kt(){throw Error(ie(321))}function Ih(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!zn(t[n],e[n]))return!1;return!0}function Dh(t,e,n,i,r,s){if(Tr=s,ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ko.current=t===null||t.memoizedState===null?my:gy,t=n(i,r),ha){s=0;do{if(ha=!1,La=0,25<=s)throw Error(ie(301));s+=1,bt=Mt=null,e.updateQueue=null,Ko.current=vy,t=n(i,r)}while(ha)}if(Ko.current=Cl,e=Mt!==null&&Mt.next!==null,Tr=0,bt=Mt=ct=null,Tl=!1,e)throw Error(ie(300));return t}function Uh(){var t=La!==0;return La=0,t}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?ct.memoizedState=bt=t:bt=bt.next=t,bt}function wn(){if(Mt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=Mt.next;var e=bt===null?ct.memoizedState:bt.next;if(e!==null)bt=e,Mt=t;else{if(t===null)throw Error(ie(310));Mt=t,t={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},bt===null?ct.memoizedState=bt=t:bt=bt.next=t}return bt}function Ia(t,e){return typeof e=="function"?e(t):e}function Oc(t){var e=wn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=Mt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var d=c.lane;if((Tr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,ct.lanes|=d,Cr|=d}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,zn(i,e.memoizedState)||(Jt=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ct.lanes|=s,Cr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function kc(t){var e=wn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);zn(s,e.memoizedState)||(Jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function xv(){}function yv(t,e){var n=ct,i=wn(),r=e(),s=!zn(i.memoizedState,r);if(s&&(i.memoizedState=r,Jt=!0),i=i.queue,Fh(Ev.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||bt!==null&&bt.memoizedState.tag&1){if(n.flags|=2048,Da(9,Mv.bind(null,n,i,r,e),void 0,null),Nt===null)throw Error(ie(349));Tr&30||Sv(n,e,r)}return r}function Sv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Mv(t,e,n,i){e.value=n,e.getSnapshot=i,wv(e)&&Tv(t)}function Ev(t,e,n){return n(function(){wv(e)&&Tv(t)})}function wv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zn(t,n)}catch{return!0}}function Tv(t){var e=pi(t,1);e!==null&&kn(e,t,1,-1)}function ip(t){var e=Hn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:t},e.queue=t,t=t.dispatch=py.bind(null,ct,t),[e.memoizedState,t]}function Da(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Cv(){return wn().memoizedState}function Zo(t,e,n,i){var r=Hn();ct.flags|=t,r.memoizedState=Da(1|e,n,void 0,i===void 0?null:i)}function $l(t,e,n,i){var r=wn();i=i===void 0?null:i;var s=void 0;if(Mt!==null){var a=Mt.memoizedState;if(s=a.destroy,i!==null&&Ih(i,a.deps)){r.memoizedState=Da(e,n,s,i);return}}ct.flags|=t,r.memoizedState=Da(1|e,n,s,i)}function rp(t,e){return Zo(8390656,8,t,e)}function Fh(t,e){return $l(2048,8,t,e)}function Av(t,e){return $l(4,2,t,e)}function Rv(t,e){return $l(4,4,t,e)}function bv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Pv(t,e,n){return n=n!=null?n.concat([t]):null,$l(4,4,bv.bind(null,e,t),n)}function Oh(){}function Nv(t,e){var n=wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ih(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Lv(t,e){var n=wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ih(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Iv(t,e,n){return Tr&21?(zn(n,e)||(n=kg(),ct.lanes|=n,Cr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=n)}function hy(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=Fc.transition;Fc.transition={};try{t(!1),e()}finally{et=n,Fc.transition=i}}function Dv(){return wn().memoizedState}function fy(t,e,n){var i=Vi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Uv(t))Fv(e,n);else if(n=gv(t,e,n,i),n!==null){var r=Xt();kn(n,t,i,r),Ov(n,e,i)}}function py(t,e,n){var i=Vi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Uv(t))Fv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,zn(o,a)){var l=e.interleaved;l===null?(r.next=r,Rh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=gv(t,e,r,i),n!==null&&(r=Xt(),kn(n,t,i,r),Ov(n,e,i))}}function Uv(t){var e=t.alternate;return t===ct||e!==null&&e===ct}function Fv(t,e){ha=Tl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ov(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ph(t,n)}}var Cl={readContext:En,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},my={readContext:En,useCallback:function(t,e){return Hn().memoizedState=[t,e===void 0?null:e],t},useContext:En,useEffect:rp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Zo(4194308,4,bv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Zo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Zo(4,2,t,e)},useMemo:function(t,e){var n=Hn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Hn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=fy.bind(null,ct,t),[i.memoizedState,t]},useRef:function(t){var e=Hn();return t={current:t},e.memoizedState=t},useState:ip,useDebugValue:Oh,useDeferredValue:function(t){return Hn().memoizedState=t},useTransition:function(){var t=ip(!1),e=t[0];return t=hy.bind(null,t[1]),Hn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ct,r=Hn();if(at){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Nt===null)throw Error(ie(349));Tr&30||Sv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,rp(Ev.bind(null,i,s,t),[t]),i.flags|=2048,Da(9,Mv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Hn(),e=Nt.identifierPrefix;if(at){var n=li,i=oi;n=(i&~(1<<32-On(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=La++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=dy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},gy={readContext:En,useCallback:Nv,useContext:En,useEffect:Fh,useImperativeHandle:Pv,useInsertionEffect:Av,useLayoutEffect:Rv,useMemo:Lv,useReducer:Oc,useRef:Cv,useState:function(){return Oc(Ia)},useDebugValue:Oh,useDeferredValue:function(t){var e=wn();return Iv(e,Mt.memoizedState,t)},useTransition:function(){var t=Oc(Ia)[0],e=wn().memoizedState;return[t,e]},useMutableSource:xv,useSyncExternalStore:yv,useId:Dv,unstable_isNewReconciler:!1},vy={readContext:En,useCallback:Nv,useContext:En,useEffect:Fh,useImperativeHandle:Pv,useInsertionEffect:Av,useLayoutEffect:Rv,useMemo:Lv,useReducer:kc,useRef:Cv,useState:function(){return kc(Ia)},useDebugValue:Oh,useDeferredValue:function(t){var e=wn();return Mt===null?e.memoizedState=t:Iv(e,Mt.memoizedState,t)},useTransition:function(){var t=kc(Ia)[0],e=wn().memoizedState;return[t,e]},useMutableSource:xv,useSyncExternalStore:yv,useId:Dv,unstable_isNewReconciler:!1};function Pn(t,e){if(t&&t.defaultProps){e=ut({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ed(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ut({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Yl={isMounted:function(t){return(t=t._reactInternals)?Nr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=Vi(t),s=di(i,r);s.payload=e,n!=null&&(s.callback=n),e=ji(t,s,r),e!==null&&(kn(e,t,r,i),Yo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=Vi(t),s=di(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ji(t,s,r),e!==null&&(kn(e,t,r,i),Yo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xt(),i=Vi(t),r=di(n,i);r.tag=2,e!=null&&(r.callback=e),e=ji(t,r,i),e!==null&&(kn(e,t,i,n),Yo(e,t,i))}};function sp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ca(n,i)||!Ca(r,s):!0}function kv(t,e,n){var i=!1,r=Yi,s=e.contextType;return typeof s=="object"&&s!==null?s=En(s):(r=en(e)?Er:Vt.current,i=e.contextTypes,s=(i=i!=null)?Es(t,r):Yi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Yl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function ap(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Yl.enqueueReplaceState(e,e.state,null)}function td(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},bh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=En(s):(s=en(e)?Er:Vt.current,r.context=Es(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ed(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Yl.enqueueReplaceState(r,r.state,null),El(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function As(t,e){try{var n="",i=e;do n+=W_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function zc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function nd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var _y=typeof WeakMap=="function"?WeakMap:Map;function zv(t,e,n){n=di(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Rl||(Rl=!0,hd=i),nd(t,e)},n}function Bv(t,e,n){n=di(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){nd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){nd(t,e),typeof i!="function"&&(Hi===null?Hi=new Set([this]):Hi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function op(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new _y;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Ly.bind(null,t,e,n),e.then(t,t))}function lp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function cp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=di(-1,1),e.tag=2,ji(n,e,1))),n.lanes|=1),t)}var xy=xi.ReactCurrentOwner,Jt=!1;function Wt(t,e,n,i){e.child=t===null?mv(e,null,n,i):Ts(e,t.child,n,i)}function up(t,e,n,i,r){n=n.render;var s=e.ref;return vs(e,r),i=Dh(t,e,n,i,s,r),n=Uh(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,mi(t,e,r)):(at&&n&&Mh(e),e.flags|=1,Wt(t,e,i,r),e.child)}function dp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Wh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,jv(t,e,s,i,r)):(t=tl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ca,n(a,i)&&t.ref===e.ref)return mi(t,e,r)}return e.flags|=1,t=Gi(s,i),t.ref=e.ref,t.return=e,e.child=t}function jv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ca(s,i)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Jt=!0);else return e.lanes=t.lanes,mi(t,e,r)}return id(t,e,n,i,r)}function Hv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(ds,cn),cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,nt(ds,cn),cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,nt(ds,cn),cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,nt(ds,cn),cn|=i;return Wt(t,e,r,n),e.child}function Vv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function id(t,e,n,i,r){var s=en(n)?Er:Vt.current;return s=Es(e,s),vs(e,r),n=Dh(t,e,n,i,s,r),i=Uh(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,mi(t,e,r)):(at&&i&&Mh(e),e.flags|=1,Wt(t,e,n,r),e.child)}function hp(t,e,n,i,r){if(en(n)){var s=!0;_l(e)}else s=!1;if(vs(e,r),e.stateNode===null)Jo(t,e),kv(e,n,i),td(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=En(c):(c=en(n)?Er:Vt.current,c=Es(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&ap(e,a,i,c),bi=!1;var p=e.memoizedState;a.state=p,El(e,i,a,r),l=e.memoizedState,o!==i||p!==l||Qt.current||bi?(typeof d=="function"&&(ed(e,n,d,i),l=e.memoizedState),(o=bi||sp(e,n,o,i,p,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,vv(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Pn(e.type,o),a.props=c,f=e.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=En(l):(l=en(n)?Er:Vt.current,l=Es(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||p!==l)&&ap(e,a,i,l),bi=!1,p=e.memoizedState,a.state=p,El(e,i,a,r);var v=e.memoizedState;o!==f||p!==v||Qt.current||bi?(typeof g=="function"&&(ed(e,n,g,i),v=e.memoizedState),(c=bi||sp(e,n,c,i,p,v,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return rd(t,e,n,i,s,r)}function rd(t,e,n,i,r,s){Vv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Zf(e,n,!1),mi(t,e,s);i=e.stateNode,xy.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ts(e,t.child,null,s),e.child=Ts(e,null,o,s)):Wt(t,e,o,s),e.memoizedState=i.state,r&&Zf(e,n,!0),e.child}function Gv(t){var e=t.stateNode;e.pendingContext?Kf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Kf(t,e.context,!1),Ph(t,e.containerInfo)}function fp(t,e,n,i,r){return ws(),wh(r),e.flags|=256,Wt(t,e,n,i),e.child}var sd={dehydrated:null,treeContext:null,retryLane:0};function ad(t){return{baseLanes:t,cachePool:null,transitions:null}}function Wv(t,e,n){var i=e.pendingProps,r=lt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),nt(lt,r&1),t===null)return Ju(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Jl(a,i,0,null),t=Sr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ad(n),e.memoizedState=sd,t):kh(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return yy(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Gi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Gi(o,s):(s=Sr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?ad(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=sd,i}return s=t.child,t=s.sibling,i=Gi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function kh(t,e){return e=Jl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function mo(t,e,n,i){return i!==null&&wh(i),Ts(e,t.child,null,n),t=kh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function yy(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=zc(Error(ie(422))),mo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Jl({mode:"visible",children:i.children},r,0,null),s=Sr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ts(e,t.child,null,a),e.child.memoizedState=ad(a),e.memoizedState=sd,s);if(!(e.mode&1))return mo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ie(419)),i=zc(s,i,void 0),mo(t,e,a,i)}if(o=(a&t.childLanes)!==0,Jt||o){if(i=Nt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,pi(t,r),kn(i,t,r,-1))}return Gh(),i=zc(Error(ie(421))),mo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Iy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,un=Bi(r.nextSibling),dn=e,at=!0,Ln=null,t!==null&&(_n[xn++]=oi,_n[xn++]=li,_n[xn++]=wr,oi=t.id,li=t.overflow,wr=e),e=kh(e,i.children),e.flags|=4096,e)}function pp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Qu(t.return,e,n)}function Bc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Xv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Wt(t,e,i.children,n),i=lt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pp(t,n,e);else if(t.tag===19)pp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(nt(lt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&wl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Bc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&wl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Bc(e,!0,n,null,s);break;case"together":Bc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Jo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function mi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Cr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=Gi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Gi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Sy(t,e,n){switch(e.tag){case 3:Gv(e),ws();break;case 5:_v(e);break;case 1:en(e.type)&&_l(e);break;case 4:Ph(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;nt(Sl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(nt(lt,lt.current&1),e.flags|=128,null):n&e.child.childLanes?Wv(t,e,n):(nt(lt,lt.current&1),t=mi(t,e,n),t!==null?t.sibling:null);nt(lt,lt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Xv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),nt(lt,lt.current),i)break;return null;case 22:case 23:return e.lanes=0,Hv(t,e,n)}return mi(t,e,n)}var qv,od,$v,Yv;qv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};od=function(){};$v=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,vr(Yn.current);var s=null;switch(n){case"input":r=bu(t,r),i=bu(t,i),s=[];break;case"select":r=ut({},r,{value:void 0}),i=ut({},i,{value:void 0}),s=[];break;case"textarea":r=Lu(t,r),i=Lu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=gl)}Du(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(xa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(xa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&it("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Yv=function(t,e,n,i){n!==i&&(e.flags|=4)};function qs(t,e){if(!at)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function My(t,e,n){var i=e.pendingProps;switch(Eh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return en(e.type)&&vl(),zt(e),null;case 3:return i=e.stateNode,Cs(),st(Qt),st(Vt),Lh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(fo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ln!==null&&(md(Ln),Ln=null))),od(t,e),zt(e),null;case 5:Nh(e);var r=vr(Na.current);if(n=e.type,t!==null&&e.stateNode!=null)$v(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return zt(e),null}if(t=vr(Yn.current),fo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Wn]=e,i[ba]=s,t=(e.mode&1)!==0,n){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(r=0;r<sa.length;r++)it(sa[r],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":Ef(i,s),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},it("invalid",i);break;case"textarea":Tf(i,s),it("invalid",i)}Du(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&ho(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&ho(i.textContent,o,t),r=["children",""+o]):xa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&it("scroll",i)}switch(n){case"input":io(i),wf(i,s,!0);break;case"textarea":io(i),Cf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=gl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Eg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Wn]=e,t[ba]=i,qv(t,e,!1,!1),e.stateNode=t;e:{switch(a=Uu(n,i),n){case"dialog":it("cancel",t),it("close",t),r=i;break;case"iframe":case"object":case"embed":it("load",t),r=i;break;case"video":case"audio":for(r=0;r<sa.length;r++)it(sa[r],t);r=i;break;case"source":it("error",t),r=i;break;case"img":case"image":case"link":it("error",t),it("load",t),r=i;break;case"details":it("toggle",t),r=i;break;case"input":Ef(t,i),r=bu(t,i),it("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ut({},i,{value:void 0}),it("invalid",t);break;case"textarea":Tf(t,i),r=Lu(t,i),it("invalid",t);break;default:r=i}Du(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Cg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&wg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ya(t,l):typeof l=="number"&&ya(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(xa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&it("scroll",t):l!=null&&lh(t,s,l,a))}switch(n){case"input":io(t),wf(t,i,!1);break;case"textarea":io(t),Cf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+$i(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?fs(t,!!i.multiple,s,!1):i.defaultValue!=null&&fs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=gl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zt(e),null;case 6:if(t&&e.stateNode!=null)Yv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=vr(Na.current),vr(Yn.current),fo(e)){if(i=e.stateNode,n=e.memoizedProps,i[Wn]=e,(s=i.nodeValue!==n)&&(t=dn,t!==null))switch(t.tag){case 3:ho(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ho(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Wn]=e,e.stateNode=i}return zt(e),null;case 13:if(st(lt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(at&&un!==null&&e.mode&1&&!(e.flags&128))fv(),ws(),e.flags|=98560,s=!1;else if(s=fo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[Wn]=e}else ws(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zt(e),s=!1}else Ln!==null&&(md(Ln),Ln=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||lt.current&1?Et===0&&(Et=3):Gh())),e.updateQueue!==null&&(e.flags|=4),zt(e),null);case 4:return Cs(),od(t,e),t===null&&Aa(e.stateNode.containerInfo),zt(e),null;case 10:return Ah(e.type._context),zt(e),null;case 17:return en(e.type)&&vl(),zt(e),null;case 19:if(st(lt),s=e.memoizedState,s===null)return zt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)qs(s,!1);else{if(Et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=wl(t),a!==null){for(e.flags|=128,qs(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return nt(lt,lt.current&1|2),e.child}t=t.sibling}s.tail!==null&&gt()>Rs&&(e.flags|=128,i=!0,qs(s,!1),e.lanes=4194304)}else{if(!i)if(t=wl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),qs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!at)return zt(e),null}else 2*gt()-s.renderingStartTime>Rs&&n!==1073741824&&(e.flags|=128,i=!0,qs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=gt(),e.sibling=null,n=lt.current,nt(lt,i?n&1|2:n&1),e):(zt(e),null);case 22:case 23:return Vh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?cn&1073741824&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function Ey(t,e){switch(Eh(e),e.tag){case 1:return en(e.type)&&vl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Cs(),st(Qt),st(Vt),Lh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Nh(e),null;case 13:if(st(lt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return st(lt),null;case 4:return Cs(),null;case 10:return Ah(e.type._context),null;case 22:case 23:return Vh(),null;case 24:return null;default:return null}}var go=!1,Ht=!1,wy=typeof WeakSet=="function"?WeakSet:Set,me=null;function us(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){pt(t,e,i)}else n.current=null}function ld(t,e,n){try{n()}catch(i){pt(t,e,i)}}var mp=!1;function Ty(t,e){if(Wu=fl,t=ev(),Sh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,d=0,f=t,p=null;t:for(;;){for(var g;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===t)break t;if(p===n&&++c===r&&(o=a),p===s&&++d===i&&(l=a),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xu={focusedElem:t,selectionRange:n},fl=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,m=v.memoizedState,h=e.stateNode,y=h.getSnapshotBeforeUpdate(e.elementType===e.type?_:Pn(e.type,_),m);h.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(S){pt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return v=mp,mp=!1,v}function fa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ld(e,n,s)}r=r.next}while(r!==i)}}function Kl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function cd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Kv(t){var e=t.alternate;e!==null&&(t.alternate=null,Kv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Wn],delete e[ba],delete e[Yu],delete e[oy],delete e[ly])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Zv(t){return t.tag===5||t.tag===3||t.tag===4}function gp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Zv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ud(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=gl));else if(i!==4&&(t=t.child,t!==null))for(ud(t,e,n),t=t.sibling;t!==null;)ud(t,e,n),t=t.sibling}function dd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(dd(t,e,n),t=t.sibling;t!==null;)dd(t,e,n),t=t.sibling}var Dt=null,Nn=!1;function Si(t,e,n){for(n=n.child;n!==null;)Jv(t,e,n),n=n.sibling}function Jv(t,e,n){if($n&&typeof $n.onCommitFiberUnmount=="function")try{$n.onCommitFiberUnmount(Hl,n)}catch{}switch(n.tag){case 5:Ht||us(n,e);case 6:var i=Dt,r=Nn;Dt=null,Si(t,e,n),Dt=i,Nn=r,Dt!==null&&(Nn?(t=Dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Dt.removeChild(n.stateNode));break;case 18:Dt!==null&&(Nn?(t=Dt,n=n.stateNode,t.nodeType===8?Ic(t.parentNode,n):t.nodeType===1&&Ic(t,n),wa(t)):Ic(Dt,n.stateNode));break;case 4:i=Dt,r=Nn,Dt=n.stateNode.containerInfo,Nn=!0,Si(t,e,n),Dt=i,Nn=r;break;case 0:case 11:case 14:case 15:if(!Ht&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&ld(n,e,a),r=r.next}while(r!==i)}Si(t,e,n);break;case 1:if(!Ht&&(us(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){pt(n,e,o)}Si(t,e,n);break;case 21:Si(t,e,n);break;case 22:n.mode&1?(Ht=(i=Ht)||n.memoizedState!==null,Si(t,e,n),Ht=i):Si(t,e,n);break;default:Si(t,e,n)}}function vp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new wy),e.forEach(function(i){var r=Dy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Cn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Dt=o.stateNode,Nn=!1;break e;case 3:Dt=o.stateNode.containerInfo,Nn=!0;break e;case 4:Dt=o.stateNode.containerInfo,Nn=!0;break e}o=o.return}if(Dt===null)throw Error(ie(160));Jv(s,a,r),Dt=null,Nn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){pt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Qv(e,t),e=e.sibling}function Qv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Cn(e,t),jn(t),i&4){try{fa(3,t,t.return),Kl(3,t)}catch(_){pt(t,t.return,_)}try{fa(5,t,t.return)}catch(_){pt(t,t.return,_)}}break;case 1:Cn(e,t),jn(t),i&512&&n!==null&&us(n,n.return);break;case 5:if(Cn(e,t),jn(t),i&512&&n!==null&&us(n,n.return),t.flags&32){var r=t.stateNode;try{ya(r,"")}catch(_){pt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Sg(r,s),Uu(o,a);var c=Uu(o,s);for(a=0;a<l.length;a+=2){var d=l[a],f=l[a+1];d==="style"?Cg(r,f):d==="dangerouslySetInnerHTML"?wg(r,f):d==="children"?ya(r,f):lh(r,d,f,c)}switch(o){case"input":Pu(r,s);break;case"textarea":Mg(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?fs(r,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?fs(r,!!s.multiple,s.defaultValue,!0):fs(r,!!s.multiple,s.multiple?[]:"",!1))}r[ba]=s}catch(_){pt(t,t.return,_)}}break;case 6:if(Cn(e,t),jn(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){pt(t,t.return,_)}}break;case 3:if(Cn(e,t),jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{wa(e.containerInfo)}catch(_){pt(t,t.return,_)}break;case 4:Cn(e,t),jn(t);break;case 13:Cn(e,t),jn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(jh=gt())),i&4&&vp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ht=(c=Ht)||d,Cn(e,t),Ht=c):Cn(e,t),jn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(me=t,d=t.child;d!==null;){for(f=me=d;me!==null;){switch(p=me,g=p.child,p.tag){case 0:case 11:case 14:case 15:fa(4,p,p.return);break;case 1:us(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){pt(i,n,_)}}break;case 5:us(p,p.return);break;case 22:if(p.memoizedState!==null){xp(f);continue}}g!==null?(g.return=p,me=g):xp(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Tg("display",a))}catch(_){pt(t,t.return,_)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(_){pt(t,t.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Cn(e,t),jn(t),i&4&&vp(t);break;case 21:break;default:Cn(e,t),jn(t)}}function jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Zv(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ya(r,""),i.flags&=-33);var s=gp(t);dd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=gp(t);ud(t,o,a);break;default:throw Error(ie(161))}}catch(l){pt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Cy(t,e,n){me=t,e0(t)}function e0(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||go;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Ht;o=go;var c=Ht;if(go=a,(Ht=l)&&!c)for(me=r;me!==null;)a=me,l=a.child,a.tag===22&&a.memoizedState!==null?yp(r):l!==null?(l.return=a,me=l):yp(r);for(;s!==null;)me=s,e0(s),s=s.sibling;me=r,go=o,Ht=c}_p(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):_p(t)}}function _p(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ht||Kl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ht)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Pn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&np(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}np(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&wa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Ht||e.flags&512&&cd(e)}catch(p){pt(e,e.return,p)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function xp(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function yp(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Kl(4,e)}catch(l){pt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){pt(e,r,l)}}var s=e.return;try{cd(e)}catch(l){pt(e,s,l)}break;case 5:var a=e.return;try{cd(e)}catch(l){pt(e,a,l)}}}catch(l){pt(e,e.return,l)}if(e===t){me=null;break}var o=e.sibling;if(o!==null){o.return=e.return,me=o;break}me=e.return}}var Ay=Math.ceil,Al=xi.ReactCurrentDispatcher,zh=xi.ReactCurrentOwner,Mn=xi.ReactCurrentBatchConfig,We=0,Nt=null,St=null,Ft=0,cn=0,ds=Ji(0),Et=0,Ua=null,Cr=0,Zl=0,Bh=0,pa=null,Kt=null,jh=0,Rs=1/0,ri=null,Rl=!1,hd=null,Hi=null,vo=!1,Di=null,bl=0,ma=0,fd=null,Qo=-1,el=0;function Xt(){return We&6?gt():Qo!==-1?Qo:Qo=gt()}function Vi(t){return t.mode&1?We&2&&Ft!==0?Ft&-Ft:uy.transition!==null?(el===0&&(el=kg()),el):(t=et,t!==0||(t=window.event,t=t===void 0?16:Wg(t.type)),t):1}function kn(t,e,n,i){if(50<ma)throw ma=0,fd=null,Error(ie(185));Ba(t,n,i),(!(We&2)||t!==Nt)&&(t===Nt&&(!(We&2)&&(Zl|=n),Et===4&&Ni(t,Ft)),tn(t,i),n===1&&We===0&&!(e.mode&1)&&(Rs=gt()+500,ql&&Qi()))}function tn(t,e){var n=t.callbackNode;ux(t,e);var i=hl(t,t===Nt?Ft:0);if(i===0)n!==null&&bf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&bf(n),e===1)t.tag===0?cy(Sp.bind(null,t)):uv(Sp.bind(null,t)),sy(function(){!(We&6)&&Qi()}),n=null;else{switch(zg(i)){case 1:n=fh;break;case 4:n=Fg;break;case 16:n=dl;break;case 536870912:n=Og;break;default:n=dl}n=l0(n,t0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function t0(t,e){if(Qo=-1,el=0,We&6)throw Error(ie(327));var n=t.callbackNode;if(_s()&&t.callbackNode!==n)return null;var i=hl(t,t===Nt?Ft:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Pl(t,i);else{e=i;var r=We;We|=2;var s=i0();(Nt!==t||Ft!==e)&&(ri=null,Rs=gt()+500,yr(t,e));do try{Py();break}catch(o){n0(t,o)}while(!0);Ch(),Al.current=s,We=r,St!==null?e=0:(Nt=null,Ft=0,e=Et)}if(e!==0){if(e===2&&(r=Bu(t),r!==0&&(i=r,e=pd(t,r))),e===1)throw n=Ua,yr(t,0),Ni(t,i),tn(t,gt()),n;if(e===6)Ni(t,i);else{if(r=t.current.alternate,!(i&30)&&!Ry(r)&&(e=Pl(t,i),e===2&&(s=Bu(t),s!==0&&(i=s,e=pd(t,s))),e===1))throw n=Ua,yr(t,0),Ni(t,i),tn(t,gt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:ur(t,Kt,ri);break;case 3:if(Ni(t,i),(i&130023424)===i&&(e=jh+500-gt(),10<e)){if(hl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Xt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=$u(ur.bind(null,t,Kt,ri),e);break}ur(t,Kt,ri);break;case 4:if(Ni(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-On(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=gt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ay(i/1960))-i,10<i){t.timeoutHandle=$u(ur.bind(null,t,Kt,ri),i);break}ur(t,Kt,ri);break;case 5:ur(t,Kt,ri);break;default:throw Error(ie(329))}}}return tn(t,gt()),t.callbackNode===n?t0.bind(null,t):null}function pd(t,e){var n=pa;return t.current.memoizedState.isDehydrated&&(yr(t,e).flags|=256),t=Pl(t,e),t!==2&&(e=Kt,Kt=n,e!==null&&md(e)),t}function md(t){Kt===null?Kt=t:Kt.push.apply(Kt,t)}function Ry(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!zn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ni(t,e){for(e&=~Bh,e&=~Zl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-On(e),i=1<<n;t[n]=-1,e&=~i}}function Sp(t){if(We&6)throw Error(ie(327));_s();var e=hl(t,0);if(!(e&1))return tn(t,gt()),null;var n=Pl(t,e);if(t.tag!==0&&n===2){var i=Bu(t);i!==0&&(e=i,n=pd(t,i))}if(n===1)throw n=Ua,yr(t,0),Ni(t,e),tn(t,gt()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ur(t,Kt,ri),tn(t,gt()),null}function Hh(t,e){var n=We;We|=1;try{return t(e)}finally{We=n,We===0&&(Rs=gt()+500,ql&&Qi())}}function Ar(t){Di!==null&&Di.tag===0&&!(We&6)&&_s();var e=We;We|=1;var n=Mn.transition,i=et;try{if(Mn.transition=null,et=1,t)return t()}finally{et=i,Mn.transition=n,We=e,!(We&6)&&Qi()}}function Vh(){cn=ds.current,st(ds)}function yr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ry(n)),St!==null)for(n=St.return;n!==null;){var i=n;switch(Eh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&vl();break;case 3:Cs(),st(Qt),st(Vt),Lh();break;case 5:Nh(i);break;case 4:Cs();break;case 13:st(lt);break;case 19:st(lt);break;case 10:Ah(i.type._context);break;case 22:case 23:Vh()}n=n.return}if(Nt=t,St=t=Gi(t.current,null),Ft=cn=e,Et=0,Ua=null,Bh=Zl=Cr=0,Kt=pa=null,gr!==null){for(e=0;e<gr.length;e++)if(n=gr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}gr=null}return t}function n0(t,e){do{var n=St;try{if(Ch(),Ko.current=Cl,Tl){for(var i=ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Tl=!1}if(Tr=0,bt=Mt=ct=null,ha=!1,La=0,zh.current=null,n===null||n.return===null){Et=1,Ua=e,St=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Ft,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=lp(a);if(g!==null){g.flags&=-257,cp(g,a,o,s,e),g.mode&1&&op(s,c,e),e=g,l=c;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){op(s,c,e),Gh();break e}l=Error(ie(426))}}else if(at&&o.mode&1){var m=lp(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),cp(m,a,o,s,e),wh(As(l,o));break e}}s=l=As(l,o),Et!==4&&(Et=2),pa===null?pa=[s]:pa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=zv(s,l,e);tp(s,h);break e;case 1:o=l;var y=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Hi===null||!Hi.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Bv(s,o,e);tp(s,S);break e}}s=s.return}while(s!==null)}s0(n)}catch(P){e=P,St===n&&n!==null&&(St=n=n.return);continue}break}while(!0)}function i0(){var t=Al.current;return Al.current=Cl,t===null?Cl:t}function Gh(){(Et===0||Et===3||Et===2)&&(Et=4),Nt===null||!(Cr&268435455)&&!(Zl&268435455)||Ni(Nt,Ft)}function Pl(t,e){var n=We;We|=2;var i=i0();(Nt!==t||Ft!==e)&&(ri=null,yr(t,e));do try{by();break}catch(r){n0(t,r)}while(!0);if(Ch(),We=n,Al.current=i,St!==null)throw Error(ie(261));return Nt=null,Ft=0,Et}function by(){for(;St!==null;)r0(St)}function Py(){for(;St!==null&&!tx();)r0(St)}function r0(t){var e=o0(t.alternate,t,cn);t.memoizedProps=t.pendingProps,e===null?s0(t):St=e,zh.current=null}function s0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ey(n,e),n!==null){n.flags&=32767,St=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Et=6,St=null;return}}else if(n=My(n,e,cn),n!==null){St=n;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);Et===0&&(Et=5)}function ur(t,e,n){var i=et,r=Mn.transition;try{Mn.transition=null,et=1,Ny(t,e,n,i)}finally{Mn.transition=r,et=i}return null}function Ny(t,e,n,i){do _s();while(Di!==null);if(We&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(dx(t,s),t===Nt&&(St=Nt=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vo||(vo=!0,l0(dl,function(){return _s(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Mn.transition,Mn.transition=null;var a=et;et=1;var o=We;We|=4,zh.current=null,Ty(t,n),Qv(n,t),Zx(Xu),fl=!!Wu,Xu=Wu=null,t.current=n,Cy(n),nx(),We=o,et=a,Mn.transition=s}else t.current=n;if(vo&&(vo=!1,Di=t,bl=r),s=t.pendingLanes,s===0&&(Hi=null),sx(n.stateNode),tn(t,gt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Rl)throw Rl=!1,t=hd,hd=null,t;return bl&1&&t.tag!==0&&_s(),s=t.pendingLanes,s&1?t===fd?ma++:(ma=0,fd=t):ma=0,Qi(),null}function _s(){if(Di!==null){var t=zg(bl),e=Mn.transition,n=et;try{if(Mn.transition=null,et=16>t?16:t,Di===null)var i=!1;else{if(t=Di,Di=null,bl=0,We&6)throw Error(ie(331));var r=We;for(We|=4,me=t.current;me!==null;){var s=me,a=s.child;if(me.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(me=c;me!==null;){var d=me;switch(d.tag){case 0:case 11:case 15:fa(8,d,s)}var f=d.child;if(f!==null)f.return=d,me=f;else for(;me!==null;){d=me;var p=d.sibling,g=d.return;if(Kv(d),d===c){me=null;break}if(p!==null){p.return=g,me=p;break}me=g}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}me=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,me=a;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:fa(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,me=h;break e}me=s.return}}var y=t.current;for(me=y;me!==null;){a=me;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,me=x;else e:for(a=y;me!==null;){if(o=me,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Kl(9,o)}}catch(P){pt(o,o.return,P)}if(o===a){me=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,me=S;break e}me=o.return}}if(We=r,Qi(),$n&&typeof $n.onPostCommitFiberRoot=="function")try{$n.onPostCommitFiberRoot(Hl,t)}catch{}i=!0}return i}finally{et=n,Mn.transition=e}}return!1}function Mp(t,e,n){e=As(n,e),e=zv(t,e,1),t=ji(t,e,1),e=Xt(),t!==null&&(Ba(t,1,e),tn(t,e))}function pt(t,e,n){if(t.tag===3)Mp(t,t,n);else for(;e!==null;){if(e.tag===3){Mp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Hi===null||!Hi.has(i))){t=As(n,t),t=Bv(e,t,1),e=ji(e,t,1),t=Xt(),e!==null&&(Ba(e,1,t),tn(e,t));break}}e=e.return}}function Ly(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Xt(),t.pingedLanes|=t.suspendedLanes&n,Nt===t&&(Ft&n)===n&&(Et===4||Et===3&&(Ft&130023424)===Ft&&500>gt()-jh?yr(t,0):Bh|=n),tn(t,e)}function a0(t,e){e===0&&(t.mode&1?(e=ao,ao<<=1,!(ao&130023424)&&(ao=4194304)):e=1);var n=Xt();t=pi(t,e),t!==null&&(Ba(t,e,n),tn(t,n))}function Iy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),a0(t,n)}function Dy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),a0(t,n)}var o0;o0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Qt.current)Jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Jt=!1,Sy(t,e,n);Jt=!!(t.flags&131072)}else Jt=!1,at&&e.flags&1048576&&dv(e,yl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Jo(t,e),t=e.pendingProps;var r=Es(e,Vt.current);vs(e,n),r=Dh(null,e,i,t,r,n);var s=Uh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,en(i)?(s=!0,_l(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,bh(e),r.updater=Yl,e.stateNode=r,r._reactInternals=e,td(e,i,t,n),e=rd(null,e,i,!0,s,n)):(e.tag=0,at&&s&&Mh(e),Wt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Jo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Fy(i),t=Pn(i,t),r){case 0:e=id(null,e,i,t,n);break e;case 1:e=hp(null,e,i,t,n);break e;case 11:e=up(null,e,i,t,n);break e;case 14:e=dp(null,e,i,Pn(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),id(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),hp(t,e,i,r,n);case 3:e:{if(Gv(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,vv(t,e),El(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=As(Error(ie(423)),e),e=fp(t,e,i,n,r);break e}else if(i!==r){r=As(Error(ie(424)),e),e=fp(t,e,i,n,r);break e}else for(un=Bi(e.stateNode.containerInfo.firstChild),dn=e,at=!0,Ln=null,n=mv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ws(),i===r){e=mi(t,e,n);break e}Wt(t,e,i,n)}e=e.child}return e;case 5:return _v(e),t===null&&Ju(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,qu(i,r)?a=null:s!==null&&qu(i,s)&&(e.flags|=32),Vv(t,e),Wt(t,e,a,n),e.child;case 6:return t===null&&Ju(e),null;case 13:return Wv(t,e,n);case 4:return Ph(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ts(e,null,i,n):Wt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),up(t,e,i,r,n);case 7:return Wt(t,e,e.pendingProps,n),e.child;case 8:return Wt(t,e,e.pendingProps.children,n),e.child;case 12:return Wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,nt(Sl,i._currentValue),i._currentValue=a,s!==null)if(zn(s.value,a)){if(s.children===r.children&&!Qt.current){e=mi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=di(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Qu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ie(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Qu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Wt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,vs(e,n),r=En(r),i=i(r),e.flags|=1,Wt(t,e,i,n),e.child;case 14:return i=e.type,r=Pn(i,e.pendingProps),r=Pn(i.type,r),dp(t,e,i,r,n);case 15:return jv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),Jo(t,e),e.tag=1,en(i)?(t=!0,_l(e)):t=!1,vs(e,n),kv(e,i,r),td(e,i,r,n),rd(null,e,i,!0,t,n);case 19:return Xv(t,e,n);case 22:return Hv(t,e,n)}throw Error(ie(156,e.tag))};function l0(t,e){return Ug(t,e)}function Uy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(t,e,n,i){return new Uy(t,e,n,i)}function Wh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Fy(t){if(typeof t=="function")return Wh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===uh)return 11;if(t===dh)return 14}return 2}function Gi(t,e){var n=t.alternate;return n===null?(n=yn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function tl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Wh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ts:return Sr(n.children,r,s,e);case ch:a=8,r|=8;break;case Tu:return t=yn(12,n,e,r|2),t.elementType=Tu,t.lanes=s,t;case Cu:return t=yn(13,n,e,r),t.elementType=Cu,t.lanes=s,t;case Au:return t=yn(19,n,e,r),t.elementType=Au,t.lanes=s,t;case _g:return Jl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case gg:a=10;break e;case vg:a=9;break e;case uh:a=11;break e;case dh:a=14;break e;case Ri:a=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=yn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Sr(t,e,n,i){return t=yn(7,t,i,e),t.lanes=n,t}function Jl(t,e,n,i){return t=yn(22,t,i,e),t.elementType=_g,t.lanes=n,t.stateNode={isHidden:!1},t}function jc(t,e,n){return t=yn(6,t,null,e),t.lanes=n,t}function Hc(t,e,n){return e=yn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Oy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mc(0),this.expirationTimes=Mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Xh(t,e,n,i,r,s,a,o,l){return t=new Oy(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=yn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bh(s),t}function ky(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:es,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function c0(t){if(!t)return Yi;t=t._reactInternals;e:{if(Nr(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(en(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(en(n))return cv(t,n,e)}return e}function u0(t,e,n,i,r,s,a,o,l){return t=Xh(n,i,!0,t,r,s,a,o,l),t.context=c0(null),n=t.current,i=Xt(),r=Vi(n),s=di(i,r),s.callback=e??null,ji(n,s,r),t.current.lanes=r,Ba(t,r,i),tn(t,i),t}function Ql(t,e,n,i){var r=e.current,s=Xt(),a=Vi(r);return n=c0(n),e.context===null?e.context=n:e.pendingContext=n,e=di(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ji(r,e,a),t!==null&&(kn(t,r,a,s),Yo(t,r,a)),a}function Nl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ep(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function qh(t,e){Ep(t,e),(t=t.alternate)&&Ep(t,e)}function zy(){return null}var d0=typeof reportError=="function"?reportError:function(t){console.error(t)};function $h(t){this._internalRoot=t}ec.prototype.render=$h.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));Ql(t,e,null,null)};ec.prototype.unmount=$h.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ar(function(){Ql(null,t,null,null)}),e[fi]=null}};function ec(t){this._internalRoot=t}ec.prototype.unstable_scheduleHydration=function(t){if(t){var e=Hg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Pi.length&&e!==0&&e<Pi[n].priority;n++);Pi.splice(n,0,t),n===0&&Gg(t)}};function Yh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function tc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function wp(){}function By(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Nl(a);s.call(c)}}var a=u0(e,i,t,0,null,!1,!1,"",wp);return t._reactRootContainer=a,t[fi]=a.current,Aa(t.nodeType===8?t.parentNode:t),Ar(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Nl(l);o.call(c)}}var l=Xh(t,0,!1,null,null,!1,!1,"",wp);return t._reactRootContainer=l,t[fi]=l.current,Aa(t.nodeType===8?t.parentNode:t),Ar(function(){Ql(e,l,n,i)}),l}function nc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Nl(a);o.call(l)}}Ql(e,a,t,r)}else a=By(n,e,t,r,i);return Nl(a)}Bg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ra(e.pendingLanes);n!==0&&(ph(e,n|1),tn(e,gt()),!(We&6)&&(Rs=gt()+500,Qi()))}break;case 13:Ar(function(){var i=pi(t,1);if(i!==null){var r=Xt();kn(i,t,1,r)}}),qh(t,1)}};mh=function(t){if(t.tag===13){var e=pi(t,134217728);if(e!==null){var n=Xt();kn(e,t,134217728,n)}qh(t,134217728)}};jg=function(t){if(t.tag===13){var e=Vi(t),n=pi(t,e);if(n!==null){var i=Xt();kn(n,t,e,i)}qh(t,e)}};Hg=function(){return et};Vg=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};Ou=function(t,e,n){switch(e){case"input":if(Pu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Xl(i);if(!r)throw Error(ie(90));yg(i),Pu(i,r)}}}break;case"textarea":Mg(t,n);break;case"select":e=n.value,e!=null&&fs(t,!!n.multiple,e,!1)}};bg=Hh;Pg=Ar;var jy={usingClientEntryPoint:!1,Events:[Ha,ss,Xl,Ag,Rg,Hh]},$s={findFiberByHostInstance:mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hy={bundleType:$s.bundleType,version:$s.version,rendererPackageName:$s.rendererPackageName,rendererConfig:$s.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ig(t),t===null?null:t.stateNode},findFiberByHostInstance:$s.findFiberByHostInstance||zy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_o.isDisabled&&_o.supportsFiber)try{Hl=_o.inject(Hy),$n=_o}catch{}}pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jy;pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yh(e))throw Error(ie(200));return ky(t,e,null,n)};pn.createRoot=function(t,e){if(!Yh(t))throw Error(ie(299));var n=!1,i="",r=d0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Xh(t,1,!1,null,null,n,!1,i,r),t[fi]=e.current,Aa(t.nodeType===8?t.parentNode:t),new $h(e)};pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=Ig(e),t=t===null?null:t.stateNode,t};pn.flushSync=function(t){return Ar(t)};pn.hydrate=function(t,e,n){if(!tc(e))throw Error(ie(200));return nc(null,t,e,!0,n)};pn.hydrateRoot=function(t,e,n){if(!Yh(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=d0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=u0(e,null,t,1,n??null,r,!1,s,a),t[fi]=e.current,Aa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ec(e)};pn.render=function(t,e,n){if(!tc(e))throw Error(ie(200));return nc(null,t,e,!1,n)};pn.unmountComponentAtNode=function(t){if(!tc(t))throw Error(ie(40));return t._reactRootContainer?(Ar(function(){nc(null,null,t,!1,function(){t._reactRootContainer=null,t[fi]=null})}),!0):!1};pn.unstable_batchedUpdates=Hh;pn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!tc(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return nc(t,e,n,!1,i)};pn.version="18.3.1-next-f1338f8080-20240426";function h0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h0)}catch(t){console.error(t)}}h0(),hg.exports=pn;var Vy=hg.exports,Tp=Vy;Eu.createRoot=Tp.createRoot,Eu.hydrateRoot=Tp.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fa(){return Fa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Fa.apply(this,arguments)}var Ui;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ui||(Ui={}));const Cp="popstate";function Gy(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:a,hash:o}=i.location;return gd("",{pathname:s,search:a,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:Ll(r)}return Xy(e,n,null,t)}function mt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Kh(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Wy(){return Math.random().toString(36).substr(2,8)}function Ap(t,e){return{usr:t.state,key:t.key,idx:e}}function gd(t,e,n,i){return n===void 0&&(n=null),Fa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ks(e):e,{state:n,key:e&&e.key||i||Wy()})}function Ll(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function ks(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function Xy(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=Ui.Pop,l=null,c=d();c==null&&(c=0,a.replaceState(Fa({},a.state,{idx:c}),""));function d(){return(a.state||{idx:null}).idx}function f(){o=Ui.Pop;let m=d(),h=m==null?null:m-c;c=m,l&&l({action:o,location:_.location,delta:h})}function p(m,h){o=Ui.Push;let y=gd(_.location,m,h);c=d()+1;let x=Ap(y,c),S=_.createHref(y);try{a.pushState(x,"",S)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;r.location.assign(S)}s&&l&&l({action:o,location:_.location,delta:1})}function g(m,h){o=Ui.Replace;let y=gd(_.location,m,h);c=d();let x=Ap(y,c),S=_.createHref(y);a.replaceState(x,"",S),s&&l&&l({action:o,location:_.location,delta:0})}function v(m){let h=r.location.origin!=="null"?r.location.origin:r.location.href,y=typeof m=="string"?m:Ll(m);return y=y.replace(/ $/,"%20"),mt(h,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,h)}let _={get action(){return o},get location(){return t(r,a)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Cp,f),l=m,()=>{r.removeEventListener(Cp,f),l=null}},createHref(m){return e(r,m)},createURL:v,encodeLocation(m){let h=v(m);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:g,go(m){return a.go(m)}};return _}var Rp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Rp||(Rp={}));function qy(t,e,n){return n===void 0&&(n="/"),$y(t,e,n)}function $y(t,e,n,i){let r=typeof e=="string"?ks(e):e,s=bs(r.pathname||"/",n);if(s==null)return null;let a=f0(t);Yy(a);let o=null;for(let l=0;o==null&&l<a.length;++l){let c=aS(s);o=rS(a[l],c)}return o}function f0(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(mt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Wi([i,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(mt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),f0(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:nS(c,s.index),routesMeta:d})};return t.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of p0(s.path))r(s,a,l)}),e}function p0(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=p0(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function Yy(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:iS(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const Ky=/^:[\w-]+$/,Zy=3,Jy=2,Qy=1,eS=10,tS=-2,bp=t=>t==="*";function nS(t,e){let n=t.split("/"),i=n.length;return n.some(bp)&&(i+=tS),e&&(i+=Jy),n.filter(r=>!bp(r)).reduce((r,s)=>r+(Ky.test(s)?Zy:s===""?Qy:eS),i)}function iS(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function rS(t,e,n){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=vd({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),p=l.route;if(!f)return null;Object.assign(r,f.params),a.push({params:r,pathname:Wi([s,f.pathname]),pathnameBase:dS(Wi([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=Wi([s,f.pathnameBase]))}return a}function vd(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=sS(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((c,d,f)=>{let{paramName:p,isOptional:g}=d;if(p==="*"){let _=o[f]||"";a=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const v=o[f];return g&&!v?c[p]=void 0:c[p]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:a,pattern:t}}function sS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Kh(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function aS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Kh(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function bs(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const oS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lS=t=>oS.test(t);function cS(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?ks(t):t,s;if(n)if(lS(n))s=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),Kh(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?s=Pp(n.substring(1),"/"):s=Pp(n,e)}else s=e;return{pathname:s,search:hS(i),hash:fS(r)}}function Pp(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Vc(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function uS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function m0(t,e){let n=uS(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function g0(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=ks(t):(r=Fa({},t),mt(!r.pathname||!r.pathname.includes("?"),Vc("?","pathname","search",r)),mt(!r.pathname||!r.pathname.includes("#"),Vc("#","pathname","hash",r)),mt(!r.search||!r.search.includes("#"),Vc("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let f=e.length-1;if(!i&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),f-=1;r.pathname=p.join("/")}o=f>=0?e[f]:"/"}let l=cS(r,o),c=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const Wi=t=>t.join("/").replace(/\/\/+/g,"/"),dS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),hS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,fS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function pS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const v0=["post","put","patch","delete"];new Set(v0);const mS=["get",...v0];new Set(mS);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oa(){return Oa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Oa.apply(this,arguments)}const ic=U.createContext(null),_0=U.createContext(null),er=U.createContext(null),rc=U.createContext(null),Lr=U.createContext({outlet:null,matches:[],isDataRoute:!1}),x0=U.createContext(null);function gS(t,e){let{relative:n}=e===void 0?{}:e;Ga()||mt(!1);let{basename:i,navigator:r}=U.useContext(er),{hash:s,pathname:a,search:o}=sc(t,{relative:n}),l=a;return i!=="/"&&(l=a==="/"?i:Wi([i,a])),r.createHref({pathname:l,search:o,hash:s})}function Ga(){return U.useContext(rc)!=null}function Ir(){return Ga()||mt(!1),U.useContext(rc).location}function y0(t){U.useContext(er).static||U.useLayoutEffect(t)}function S0(){let{isDataRoute:t}=U.useContext(Lr);return t?bS():vS()}function vS(){Ga()||mt(!1);let t=U.useContext(ic),{basename:e,future:n,navigator:i}=U.useContext(er),{matches:r}=U.useContext(Lr),{pathname:s}=Ir(),a=JSON.stringify(m0(r,n.v7_relativeSplatPath)),o=U.useRef(!1);return y0(()=>{o.current=!0}),U.useCallback(function(c,d){if(d===void 0&&(d={}),!o.current)return;if(typeof c=="number"){i.go(c);return}let f=g0(c,JSON.parse(a),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Wi([e,f.pathname])),(d.replace?i.replace:i.push)(f,d.state,d)},[e,i,a,s,t])}function sc(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=U.useContext(er),{matches:r}=U.useContext(Lr),{pathname:s}=Ir(),a=JSON.stringify(m0(r,i.v7_relativeSplatPath));return U.useMemo(()=>g0(t,JSON.parse(a),s,n==="path"),[t,a,s,n])}function _S(t,e){return xS(t,e)}function xS(t,e,n,i){Ga()||mt(!1);let{navigator:r}=U.useContext(er),{matches:s}=U.useContext(Lr),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=Ir(),d;if(e){var f;let m=typeof e=="string"?ks(e):e;l==="/"||(f=m.pathname)!=null&&f.startsWith(l)||mt(!1),d=m}else d=c;let p=d.pathname||"/",g=p;if(l!=="/"){let m=l.replace(/^\//,"").split("/");g="/"+p.replace(/^\//,"").split("/").slice(m.length).join("/")}let v=qy(t,{pathname:g}),_=wS(v&&v.map(m=>Object.assign({},m,{params:Object.assign({},o,m.params),pathname:Wi([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:Wi([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,n,i);return e&&_?U.createElement(rc.Provider,{value:{location:Oa({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Ui.Pop}},_):_}function yS(){let t=RS(),e=pS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},e),n?U.createElement("pre",{style:r},n):null,null)}const SS=U.createElement(yS,null);class MS extends U.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?U.createElement(Lr.Provider,{value:this.props.routeContext},U.createElement(x0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ES(t){let{routeContext:e,match:n,children:i}=t,r=U.useContext(ic);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),U.createElement(Lr.Provider,{value:e},i)}function wS(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let d=a.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);d>=0||mt(!1),a=a.slice(0,Math.min(a.length,d+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let d=0;d<a.length;d++){let f=a[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:p,errors:g}=n,v=f.route.loader&&p[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||v){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((d,f,p)=>{let g,v=!1,_=null,m=null;n&&(g=o&&f.route.id?o[f.route.id]:void 0,_=f.route.errorElement||SS,l&&(c<0&&p===0?(PS("route-fallback"),v=!0,m=null):c===p&&(v=!0,m=f.route.hydrateFallbackElement||null)));let h=e.concat(a.slice(0,p+1)),y=()=>{let x;return g?x=_:v?x=m:f.route.Component?x=U.createElement(f.route.Component,null):f.route.element?x=f.route.element:x=d,U.createElement(ES,{match:f,routeContext:{outlet:d,matches:h,isDataRoute:n!=null},children:x})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?U.createElement(MS,{location:n.location,revalidation:n.revalidation,component:_,error:g,children:y(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):y()},null)}var M0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(M0||{}),E0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(E0||{});function TS(t){let e=U.useContext(ic);return e||mt(!1),e}function CS(t){let e=U.useContext(_0);return e||mt(!1),e}function AS(t){let e=U.useContext(Lr);return e||mt(!1),e}function w0(t){let e=AS(),n=e.matches[e.matches.length-1];return n.route.id||mt(!1),n.route.id}function RS(){var t;let e=U.useContext(x0),n=CS(),i=w0();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function bS(){let{router:t}=TS(M0.UseNavigateStable),e=w0(E0.UseNavigateStable),n=U.useRef(!1);return y0(()=>{n.current=!0}),U.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Oa({fromRouteId:e},s)))},[t,e])}const Np={};function PS(t,e,n){Np[t]||(Np[t]=!0)}function NS(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Rt(t){mt(!1)}function LS(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Ui.Pop,navigator:s,static:a=!1,future:o}=t;Ga()&&mt(!1);let l=e.replace(/^\/*/,"/"),c=U.useMemo(()=>({basename:l,navigator:s,static:a,future:Oa({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);typeof i=="string"&&(i=ks(i));let{pathname:d="/",search:f="",hash:p="",state:g=null,key:v="default"}=i,_=U.useMemo(()=>{let m=bs(d,l);return m==null?null:{location:{pathname:m,search:f,hash:p,state:g,key:v},navigationType:r}},[l,d,f,p,g,v,r]);return _==null?null:U.createElement(er.Provider,{value:c},U.createElement(rc.Provider,{children:n,value:_}))}function IS(t){let{children:e,location:n}=t;return _S(_d(e),n)}new Promise(()=>{});function _d(t,e){e===void 0&&(e=[]);let n=[];return U.Children.forEach(t,(i,r)=>{if(!U.isValidElement(i))return;let s=[...e,r];if(i.type===U.Fragment){n.push.apply(n,_d(i.props.children,s));return}i.type!==Rt&&mt(!1),!i.props.index||!i.props.children||mt(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=_d(i.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Il(){return Il=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Il.apply(this,arguments)}function T0(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function DS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function US(t,e){return t.button===0&&(!e||e==="_self")&&!DS(t)}const FS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],OS=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],kS="6";try{window.__reactRouterVersion=kS}catch{}const zS=U.createContext({isTransitioning:!1}),BS="startTransition",Lp=L_[BS];function jS(t){let{basename:e,children:n,future:i,window:r}=t,s=U.useRef();s.current==null&&(s.current=Gy({window:r,v5Compat:!0}));let a=s.current,[o,l]=U.useState({action:a.action,location:a.location}),{v7_startTransition:c}=i||{},d=U.useCallback(f=>{c&&Lp?Lp(()=>l(f)):l(f)},[l,c]);return U.useLayoutEffect(()=>a.listen(d),[a,d]),U.useEffect(()=>NS(i),[i]),U.createElement(LS,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:a,future:i})}const HS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",VS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ut=U.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:a,state:o,target:l,to:c,preventScrollReset:d,viewTransition:f}=e,p=T0(e,FS),{basename:g}=U.useContext(er),v,_=!1;if(typeof c=="string"&&VS.test(c)&&(v=c,HS))try{let x=new URL(window.location.href),S=c.startsWith("//")?new URL(x.protocol+c):new URL(c),P=bs(S.pathname,g);S.origin===x.origin&&P!=null?c=P+S.search+S.hash:_=!0}catch{}let m=gS(c,{relative:r}),h=XS(c,{replace:a,state:o,target:l,preventScrollReset:d,relative:r,viewTransition:f});function y(x){i&&i(x),x.defaultPrevented||h(x)}return U.createElement("a",Il({},p,{href:v||m,onClick:_||s?i:y,ref:n,target:l}))}),GS=U.forwardRef(function(e,n){let{"aria-current":i="page",caseSensitive:r=!1,className:s="",end:a=!1,style:o,to:l,viewTransition:c,children:d}=e,f=T0(e,OS),p=sc(l,{relative:f.relative}),g=Ir(),v=U.useContext(_0),{navigator:_,basename:m}=U.useContext(er),h=v!=null&&qS(p)&&c===!0,y=_.encodeLocation?_.encodeLocation(p).pathname:p.pathname,x=g.pathname,S=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;r||(x=x.toLowerCase(),S=S?S.toLowerCase():null,y=y.toLowerCase()),S&&m&&(S=bs(S,m)||S);const P=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let R=x===y||!a&&x.startsWith(y)&&x.charAt(P)==="/",w=S!=null&&(S===y||!a&&S.startsWith(y)&&S.charAt(y.length)==="/"),T={isActive:R,isPending:w,isTransitioning:h},M=R?i:void 0,E;typeof s=="function"?E=s(T):E=[s,R?"active":null,w?"pending":null,h?"transitioning":null].filter(Boolean).join(" ");let C=typeof o=="function"?o(T):o;return U.createElement(Ut,Il({},f,{"aria-current":M,className:E,ref:n,style:C,to:l,viewTransition:c}),typeof d=="function"?d(T):d)});var xd;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(xd||(xd={}));var Ip;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ip||(Ip={}));function WS(t){let e=U.useContext(ic);return e||mt(!1),e}function XS(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:a,viewTransition:o}=e===void 0?{}:e,l=S0(),c=Ir(),d=sc(t,{relative:a});return U.useCallback(f=>{if(US(f,n)){f.preventDefault();let p=i!==void 0?i:Ll(c)===Ll(d);l(t,{replace:p,state:r,preventScrollReset:s,relative:a,viewTransition:o})}},[c,l,d,i,r,n,t,s,a,o])}function qS(t,e){e===void 0&&(e={});let n=U.useContext(zS);n==null&&mt(!1);let{basename:i}=WS(xd.useViewTransitionState),r=sc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=bs(n.currentLocation.pathname,i)||n.currentLocation.pathname,a=bs(n.nextLocation.pathname,i)||n.nextLocation.pathname;return vd(r.pathname,a)!=null||vd(r.pathname,s)!=null}const Dp=[{to:"/",label:"Home"},{to:"/hackathon",label:"CodeHunt Hackathon"},{to:"/workshops",label:"Workshops"},{to:"/kinetic-showdown",label:"Kinetic Showdown"},{to:"/esports",label:"eSports"},{to:"/open-mic",label:"Open Mic"},{to:"/culture",label:"Culture"},{to:"/gallery",label:"Gallery"},{to:"/team",label:"Team"}];function $S(){const t=Ir(),e=S0(),n=t.pathname==="/robo-race"?"/kinetic-showdown":t.pathname;return u.jsxs("header",{className:"site-header",children:[u.jsx("div",{className:"brand",children:u.jsx("img",{className:"logo-image",src:"/logo.png",alt:"Inertia logo"})}),u.jsx("nav",{className:"nav-links",children:Dp.map(i=>u.jsx(GS,{to:i.to,className:({isActive:r})=>r?"nav-link nav-link-active":"nav-link",children:i.label},i.to))}),u.jsx("div",{className:"mobile-nav",children:u.jsx("select",{className:"mobile-nav-select","aria-label":"Select page",value:n,onChange:i=>e(i.target.value),children:Dp.map(i=>u.jsx("option",{value:i.to,children:i.label},i.to))})}),u.jsx("div",{className:"header-cta",children:u.jsx(Ut,{className:"btn btn-primary",to:"/register",children:"Register Now"})})]})}function YS(){return u.jsxs("footer",{className:"site-footer",children:[u.jsxs("div",{className:"footer-grid",children:[u.jsxs("div",{children:[u.jsx("p",{className:"footer-title",children:"Inertia 2026"}),u.jsx("p",{className:"footer-text",children:"The annual festival of Jabalpur Engineering College. Build, compete, and celebrate innovation."})]}),u.jsxs("div",{children:[u.jsx("p",{className:"footer-title",children:"Contact"}),u.jsx("p",{className:"footer-text",children:"Jabalpur Engineering College, Jabalpur"}),u.jsx(Ut,{className:"btn btn-ghost",to:"/contact",children:"Contact Page"})]}),u.jsxs("div",{children:[u.jsx("p",{className:"footer-title",children:"Events"}),u.jsx("p",{className:"footer-text",children:"CodeHunt Hackathon, Workshops, Kinetic Showdown, eSports, Open Mic"}),u.jsx("p",{className:"footer-text",children:"Culture Fest and gallery highlights"})]})]}),u.jsx("div",{className:"footer-bottom",children:u.jsx("p",{children:"Made with ❤️ by Pavitra Durgesh Pandey"})})]})}function ga(t){let e=t[0],n=t[1],i=t[2];return Math.sqrt(e*e+n*n+i*i)}function yd(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function KS(t,e,n,i){return t[0]=e,t[1]=n,t[2]=i,t}function Up(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t}function Fp(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t}function ZS(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t[2]=e[2]*n[2],t}function JS(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t[2]=e[2]/n[2],t}function Gc(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t}function QS(t,e){let n=e[0]-t[0],i=e[1]-t[1],r=e[2]-t[2];return Math.sqrt(n*n+i*i+r*r)}function eM(t,e){let n=e[0]-t[0],i=e[1]-t[1],r=e[2]-t[2];return n*n+i*i+r*r}function Op(t){let e=t[0],n=t[1],i=t[2];return e*e+n*n+i*i}function tM(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}function nM(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}function Sd(t,e){let n=e[0],i=e[1],r=e[2],s=n*n+i*i+r*r;return s>0&&(s=1/Math.sqrt(s)),t[0]=e[0]*s,t[1]=e[1]*s,t[2]=e[2]*s,t}function C0(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function kp(t,e,n){let i=e[0],r=e[1],s=e[2],a=n[0],o=n[1],l=n[2];return t[0]=r*l-s*o,t[1]=s*a-i*l,t[2]=i*o-r*a,t}function iM(t,e,n,i){let r=e[0],s=e[1],a=e[2];return t[0]=r+i*(n[0]-r),t[1]=s+i*(n[1]-s),t[2]=a+i*(n[2]-a),t}function rM(t,e,n,i,r){const s=Math.exp(-i*r);let a=e[0],o=e[1],l=e[2];return t[0]=n[0]+(a-n[0])*s,t[1]=n[1]+(o-n[1])*s,t[2]=n[2]+(l-n[2])*s,t}function sM(t,e,n){let i=e[0],r=e[1],s=e[2],a=n[3]*i+n[7]*r+n[11]*s+n[15];return a=a||1,t[0]=(n[0]*i+n[4]*r+n[8]*s+n[12])/a,t[1]=(n[1]*i+n[5]*r+n[9]*s+n[13])/a,t[2]=(n[2]*i+n[6]*r+n[10]*s+n[14])/a,t}function aM(t,e,n){let i=e[0],r=e[1],s=e[2],a=n[3]*i+n[7]*r+n[11]*s+n[15];return a=a||1,t[0]=(n[0]*i+n[4]*r+n[8]*s)/a,t[1]=(n[1]*i+n[5]*r+n[9]*s)/a,t[2]=(n[2]*i+n[6]*r+n[10]*s)/a,t}function oM(t,e,n){let i=e[0],r=e[1],s=e[2];return t[0]=i*n[0]+r*n[3]+s*n[6],t[1]=i*n[1]+r*n[4]+s*n[7],t[2]=i*n[2]+r*n[5]+s*n[8],t}function lM(t,e,n){let i=e[0],r=e[1],s=e[2],a=n[0],o=n[1],l=n[2],c=n[3],d=o*s-l*r,f=l*i-a*s,p=a*r-o*i,g=o*p-l*f,v=l*d-a*p,_=a*f-o*d,m=c*2;return d*=m,f*=m,p*=m,g*=2,v*=2,_*=2,t[0]=i+d+g,t[1]=r+f+v,t[2]=s+p+_,t}const cM=function(){const t=[0,0,0],e=[0,0,0];return function(n,i){yd(t,n),yd(e,i),Sd(t,t),Sd(e,e);let r=C0(t,e);return r>1?0:r<-1?Math.PI:Math.acos(r)}}();function uM(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}class Un extends Array{constructor(e=0,n=e,i=e){return super(e,n,i),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this[0]=e}set y(e){this[1]=e}set z(e){this[2]=e}set(e,n=e,i=e){return e.length?this.copy(e):(KS(this,e,n,i),this)}copy(e){return yd(this,e),this}add(e,n){return n?Up(this,e,n):Up(this,this,e),this}sub(e,n){return n?Fp(this,e,n):Fp(this,this,e),this}multiply(e){return e.length?ZS(this,this,e):Gc(this,this,e),this}divide(e){return e.length?JS(this,this,e):Gc(this,this,1/e),this}inverse(e=this){return nM(this,e),this}len(){return ga(this)}distance(e){return e?QS(this,e):ga(this)}squaredLen(){return Op(this)}squaredDistance(e){return e?eM(this,e):Op(this)}negate(e=this){return tM(this,e),this}cross(e,n){return n?kp(this,e,n):kp(this,this,e),this}scale(e){return Gc(this,this,e),this}normalize(){return Sd(this,this),this}dot(e){return C0(this,e)}equals(e){return uM(this,e)}applyMatrix3(e){return oM(this,this,e),this}applyMatrix4(e){return sM(this,this,e),this}scaleRotateMatrix4(e){return aM(this,this,e),this}applyQuaternion(e){return lM(this,this,e),this}angle(e){return cM(this,e)}lerp(e,n){return iM(this,this,e,n),this}smoothLerp(e,n,i){return rM(this,this,e,n,i),this}clone(){return new Un(this[0],this[1],this[2])}fromArray(e,n=0){return this[0]=e[n],this[1]=e[n+1],this[2]=e[n+2],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e}transformDirection(e){const n=this[0],i=this[1],r=this[2];return this[0]=e[0]*n+e[4]*i+e[8]*r,this[1]=e[1]*n+e[5]*i+e[9]*r,this[2]=e[2]*n+e[6]*i+e[10]*r,this.normalize()}}const zp=new Un;let dM=1,hM=1,Bp=!1;class fM{constructor(e,n={}){e.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=e,this.attributes=n,this.id=dM++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let i in n)this.addAttribute(i,n[i])}addAttribute(e,n){if(this.attributes[e]=n,n.id=hM++,n.size=n.size||1,n.type=n.type||(n.data.constructor===Float32Array?this.gl.FLOAT:n.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),n.target=e==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,n.normalized=n.normalized||!1,n.stride=n.stride||0,n.offset=n.offset||0,n.count=n.count||(n.stride?n.data.byteLength/n.stride:n.data.length/n.size),n.divisor=n.instanced||0,n.needsUpdate=!1,n.usage=n.usage||this.gl.STATIC_DRAW,n.buffer||this.updateAttribute(n),n.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==n.count*n.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,n.count*n.divisor);this.instancedCount=n.count*n.divisor}else e==="index"?this.drawRange.count=n.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,n.count))}updateAttribute(e){const n=!e.buffer;n&&(e.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==e.buffer&&(this.gl.bindBuffer(e.target,e.buffer),this.glState.boundBuffer=e.buffer),n?this.gl.bufferData(e.target,e.data,e.usage):this.gl.bufferSubData(e.target,0,e.data),e.needsUpdate=!1}setIndex(e){this.addAttribute("index",e)}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}setInstancedCount(e){this.instancedCount=e}createVAO(e){this.VAOs[e.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.bindAttributes(e)}bindAttributes(e){e.attributeLocations.forEach((n,{name:i,type:r})=>{if(!this.attributes[i]){console.warn(`active attribute ${i} not being supplied`);return}const s=this.attributes[i];this.gl.bindBuffer(s.target,s.buffer),this.glState.boundBuffer=s.buffer;let a=1;r===35674&&(a=2),r===35675&&(a=3),r===35676&&(a=4);const o=s.size/a,l=a===1?0:a*a*4,c=a===1?0:a*4;for(let d=0;d<a;d++)this.gl.vertexAttribPointer(n+d,o,s.type,s.normalized,s.stride+l,s.offset+d*c),this.gl.enableVertexAttribArray(n+d),this.gl.renderer.vertexAttribDivisor(n+d,s.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:e,mode:n=this.gl.TRIANGLES}){var r;this.gl.renderer.currentGeometry!==`${this.id}_${e.attributeOrder}`&&(this.VAOs[e.attributeOrder]||this.createVAO(e),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${e.attributeOrder}`),e.attributeLocations.forEach((s,{name:a})=>{const o=this.attributes[a];o.needsUpdate&&this.updateAttribute(o)});let i=2;((r=this.attributes.index)==null?void 0:r.type)===this.gl.UNSIGNED_INT&&(i=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(n,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*i,this.instancedCount):this.gl.renderer.drawArraysInstanced(n,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(n,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*i):this.gl.drawArrays(n,this.drawRange.start,this.drawRange.count)}getPosition(){const e=this.attributes.position;if(e.data)return e;if(!Bp)return console.warn("No position buffer data found to compute bounds"),Bp=!0}computeBoundingBox(e){e||(e=this.getPosition());const n=e.data,i=e.size;this.bounds||(this.bounds={min:new Un,max:new Un,center:new Un,scale:new Un,radius:1/0});const r=this.bounds.min,s=this.bounds.max,a=this.bounds.center,o=this.bounds.scale;r.set(1/0),s.set(-1/0);for(let l=0,c=n.length;l<c;l+=i){const d=n[l],f=n[l+1],p=n[l+2];r.x=Math.min(d,r.x),r.y=Math.min(f,r.y),r.z=Math.min(p,r.z),s.x=Math.max(d,s.x),s.y=Math.max(f,s.y),s.z=Math.max(p,s.z)}o.sub(s,r),a.add(r,s).divide(2)}computeBoundingSphere(e){e||(e=this.getPosition());const n=e.data,i=e.size;this.bounds||this.computeBoundingBox(e);let r=0;for(let s=0,a=n.length;s<a;s+=i)zp.fromArray(n,s),r=Math.max(r,this.bounds.center.squaredDistance(zp));this.bounds.radius=Math.sqrt(r)}remove(){for(let e in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[e]),delete this.VAOs[e];for(let e in this.attributes)this.gl.deleteBuffer(this.attributes[e].buffer),delete this.attributes[e]}}let pM=1;const jp={};class mM{constructor(e,{vertex:n,fragment:i,uniforms:r={},transparent:s=!1,cullFace:a=e.BACK,frontFace:o=e.CCW,depthTest:l=!0,depthWrite:c=!0,depthFunc:d=e.LEQUAL}={}){e.canvas||console.error("gl not passed as first argument to Program"),this.gl=e,this.uniforms=r,this.id=pM++,n||console.warn("vertex shader not supplied"),i||console.warn("fragment shader not supplied"),this.transparent=s,this.cullFace=a,this.frontFace=o,this.depthTest=l,this.depthWrite=c,this.depthFunc=d,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=e.createShader(e.VERTEX_SHADER),this.fragmentShader=e.createShader(e.FRAGMENT_SHADER),this.program=e.createProgram(),e.attachShader(this.program,this.vertexShader),e.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:n,fragment:i})}setShaders({vertex:e,fragment:n}){if(e&&(this.gl.shaderSource(this.vertexShader,e),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${Hp(e)}`)),n&&(this.gl.shaderSource(this.fragmentShader,n),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${Hp(n)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let i=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let a=0;a<i;a++){let o=this.gl.getActiveUniform(this.program,a);this.uniformLocations.set(o,this.gl.getUniformLocation(this.program,o.name));const l=o.name.match(/(\w+)/g);o.uniformName=l[0],o.nameComponents=l.slice(1)}this.attributeLocations=new Map;const r=[],s=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const o=this.gl.getActiveAttrib(this.program,a),l=this.gl.getAttribLocation(this.program,o.name);l!==-1&&(r[l]=o.name,this.attributeLocations.set(o,l))}this.attributeOrder=r.join("")}setBlendFunc(e,n,i,r){this.blendFunc.src=e,this.blendFunc.dst=n,this.blendFunc.srcAlpha=i,this.blendFunc.dstAlpha=r,e&&(this.transparent=!0)}setBlendEquation(e,n){this.blendEquation.modeRGB=e,this.blendEquation.modeAlpha=n}setStencilFunc(e,n,i){this.stencilRef=n,this.stencilFunc.func=e,this.stencilFunc.ref=n,this.stencilFunc.mask=i}setStencilOp(e,n,i){this.stencilOp.stencilFail=e,this.stencilOp.depthFail=n,this.stencilOp.depthPass=i}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:e=!1}={}){let n=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((r,s)=>{let a=this.uniforms[s.uniformName];for(const o of s.nameComponents){if(!a)break;if(o in a)a=a[o];else{if(Array.isArray(a.value))break;a=void 0;break}}if(!a)return Vp(`Active uniform ${s.name} has not been supplied`);if(a&&a.value===void 0)return Vp(`${s.name} uniform is missing a value parameter`);if(a.value.texture)return n=n+1,a.value.update(n),Wc(this.gl,s.type,r,n);if(a.value.length&&a.value[0].texture){const o=[];return a.value.forEach(l=>{n=n+1,l.update(n),o.push(n)}),Wc(this.gl,s.type,r,o)}Wc(this.gl,s.type,r,a.value)}),this.applyState(),e&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function Wc(t,e,n,i){i=i.length?gM(i):i;const r=t.renderer.state.uniformLocations.get(n);if(i.length)if(r===void 0||r.length!==i.length)t.renderer.state.uniformLocations.set(n,i.slice(0));else{if(vM(r,i))return;r.set?r.set(i):_M(r,i),t.renderer.state.uniformLocations.set(n,r)}else{if(r===i)return;t.renderer.state.uniformLocations.set(n,i)}switch(e){case 5126:return i.length?t.uniform1fv(n,i):t.uniform1f(n,i);case 35664:return t.uniform2fv(n,i);case 35665:return t.uniform3fv(n,i);case 35666:return t.uniform4fv(n,i);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return i.length?t.uniform1iv(n,i):t.uniform1i(n,i);case 35671:case 35667:return t.uniform2iv(n,i);case 35672:case 35668:return t.uniform3iv(n,i);case 35673:case 35669:return t.uniform4iv(n,i);case 35674:return t.uniformMatrix2fv(n,!1,i);case 35675:return t.uniformMatrix3fv(n,!1,i);case 35676:return t.uniformMatrix4fv(n,!1,i)}}function Hp(t){let e=t.split(`
`);for(let n=0;n<e.length;n++)e[n]=n+1+": "+e[n];return e.join(`
`)}function gM(t){const e=t.length,n=t[0].length;if(n===void 0)return t;const i=e*n;let r=jp[i];r||(jp[i]=r=new Float32Array(i));for(let s=0;s<e;s++)r.set(t[s],s*n);return r}function vM(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function _M(t,e){for(let n=0,i=t.length;n<i;n++)t[n]=e[n]}let Xc=0;function Vp(t){Xc>100||(console.warn(t),Xc++,Xc>100&&console.warn("More than 100 program warnings - stopping logs."))}const qc=new Un;let xM=1;class yM{constructor({canvas:e=document.createElement("canvas"),width:n=300,height:i=150,dpr:r=1,alpha:s=!1,depth:a=!0,stencil:o=!1,antialias:l=!1,premultipliedAlpha:c=!1,preserveDrawingBuffer:d=!1,powerPreference:f="default",autoClear:p=!0,webgl:g=2}={}){const v={alpha:s,depth:a,stencil:o,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:d,powerPreference:f};this.dpr=r,this.alpha=s,this.color=!0,this.depth=a,this.stencil=o,this.premultipliedAlpha=c,this.autoClear=p,this.id=xM++,g===2&&(this.gl=e.getContext("webgl2",v)),this.isWebgl2=!!this.gl,this.gl||(this.gl=e.getContext("webgl",v)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(n,i),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(e,n){this.width=e,this.height=n,this.gl.canvas.width=e*this.dpr,this.gl.canvas.height=n*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:e+"px",height:n+"px"})}setViewport(e,n,i=0,r=0){this.state.viewport.width===e&&this.state.viewport.height===n||(this.state.viewport.width=e,this.state.viewport.height=n,this.state.viewport.x=i,this.state.viewport.y=r,this.gl.viewport(i,r,e,n))}setScissor(e,n,i=0,r=0){this.gl.scissor(i,r,e,n)}enable(e){this.state[e]!==!0&&(this.gl.enable(e),this.state[e]=!0)}disable(e){this.state[e]!==!1&&(this.gl.disable(e),this.state[e]=!1)}setBlendFunc(e,n,i,r){this.state.blendFunc.src===e&&this.state.blendFunc.dst===n&&this.state.blendFunc.srcAlpha===i&&this.state.blendFunc.dstAlpha===r||(this.state.blendFunc.src=e,this.state.blendFunc.dst=n,this.state.blendFunc.srcAlpha=i,this.state.blendFunc.dstAlpha=r,i!==void 0?this.gl.blendFuncSeparate(e,n,i,r):this.gl.blendFunc(e,n))}setBlendEquation(e,n){e=e||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===e&&this.state.blendEquation.modeAlpha===n)&&(this.state.blendEquation.modeRGB=e,this.state.blendEquation.modeAlpha=n,n!==void 0?this.gl.blendEquationSeparate(e,n):this.gl.blendEquation(e))}setCullFace(e){this.state.cullFace!==e&&(this.state.cullFace=e,this.gl.cullFace(e))}setFrontFace(e){this.state.frontFace!==e&&(this.state.frontFace=e,this.gl.frontFace(e))}setDepthMask(e){this.state.depthMask!==e&&(this.state.depthMask=e,this.gl.depthMask(e))}setDepthFunc(e){this.state.depthFunc!==e&&(this.state.depthFunc=e,this.gl.depthFunc(e))}setStencilMask(e){this.state.stencilMask!==e&&(this.state.stencilMask=e,this.gl.stencilMask(e))}setStencilFunc(e,n,i){this.state.stencilFunc===e&&this.state.stencilRef===n&&this.state.stencilFuncMask===i||(this.state.stencilFunc=e||this.gl.ALWAYS,this.state.stencilRef=n||0,this.state.stencilFuncMask=i||0,this.gl.stencilFunc(e||this.gl.ALWAYS,n||0,i||0))}setStencilOp(e,n,i){this.state.stencilFail===e&&this.state.stencilDepthFail===n&&this.state.stencilDepthPass===i||(this.state.stencilFail=e,this.state.stencilDepthFail=n,this.state.stencilDepthPass=i,this.gl.stencilOp(e,n,i))}activeTexture(e){this.state.activeTextureUnit!==e&&(this.state.activeTextureUnit=e,this.gl.activeTexture(this.gl.TEXTURE0+e))}bindFramebuffer({target:e=this.gl.FRAMEBUFFER,buffer:n=null}={}){this.state.framebuffer!==n&&(this.state.framebuffer=n,this.gl.bindFramebuffer(e,n))}getExtension(e,n,i){return n&&this.gl[n]?this.gl[n].bind(this.gl):(this.extensions[e]||(this.extensions[e]=this.gl.getExtension(e)),n?this.extensions[e]?this.extensions[e][i].bind(this.extensions[e]):null:this.extensions[e])}sortOpaque(e,n){return e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.program.id!==n.program.id?e.program.id-n.program.id:e.zDepth!==n.zDepth?e.zDepth-n.zDepth:n.id-e.id}sortTransparent(e,n){return e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.zDepth!==n.zDepth?n.zDepth-e.zDepth:n.id-e.id}sortUI(e,n){return e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.program.id!==n.program.id?e.program.id-n.program.id:n.id-e.id}getRenderList({scene:e,camera:n,frustumCull:i,sort:r}){let s=[];if(n&&i&&n.updateFrustum(),e.traverse(a=>{if(!a.visible)return!0;a.draw&&(i&&a.frustumCulled&&n&&!n.frustumIntersectsMesh(a)||s.push(a))}),r){const a=[],o=[],l=[];s.forEach(c=>{c.program.transparent?c.program.depthTest?o.push(c):l.push(c):a.push(c),c.zDepth=0,!(c.renderOrder!==0||!c.program.depthTest||!n)&&(c.worldMatrix.getTranslation(qc),qc.applyMatrix4(n.projectionViewMatrix),c.zDepth=qc.z)}),a.sort(this.sortOpaque),o.sort(this.sortTransparent),l.sort(this.sortUI),s=a.concat(o,l)}return s}render({scene:e,camera:n,target:i=null,update:r=!0,sort:s=!0,frustumCull:a=!0,clear:o}){i===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(i),this.setViewport(i.width,i.height)),(o||this.autoClear&&o!==!1)&&(this.depth&&(!i||i.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!i||i.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),r&&e.updateMatrixWorld(),n&&n.updateMatrixWorld(),this.getRenderList({scene:e,camera:n,frustumCull:a,sort:s}).forEach(c=>{c.draw({camera:n})})}}function SM(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function MM(t,e,n,i,r){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t}function EM(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],a=n*n+i*i+r*r+s*s;return a>0&&(a=1/Math.sqrt(a)),t[0]=n*a,t[1]=i*a,t[2]=r*a,t[3]=s*a,t}function wM(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]}function TM(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function CM(t,e,n){n=n*.5;let i=Math.sin(n);return t[0]=i*e[0],t[1]=i*e[1],t[2]=i*e[2],t[3]=Math.cos(n),t}function Gp(t,e,n){let i=e[0],r=e[1],s=e[2],a=e[3],o=n[0],l=n[1],c=n[2],d=n[3];return t[0]=i*d+a*o+r*c-s*l,t[1]=r*d+a*l+s*o-i*c,t[2]=s*d+a*c+i*l-r*o,t[3]=a*d-i*o-r*l-s*c,t}function AM(t,e,n){n*=.5;let i=e[0],r=e[1],s=e[2],a=e[3],o=Math.sin(n),l=Math.cos(n);return t[0]=i*l+a*o,t[1]=r*l+s*o,t[2]=s*l-r*o,t[3]=a*l-i*o,t}function RM(t,e,n){n*=.5;let i=e[0],r=e[1],s=e[2],a=e[3],o=Math.sin(n),l=Math.cos(n);return t[0]=i*l-s*o,t[1]=r*l+a*o,t[2]=s*l+i*o,t[3]=a*l-r*o,t}function bM(t,e,n){n*=.5;let i=e[0],r=e[1],s=e[2],a=e[3],o=Math.sin(n),l=Math.cos(n);return t[0]=i*l+r*o,t[1]=r*l-i*o,t[2]=s*l+a*o,t[3]=a*l-s*o,t}function PM(t,e,n,i){let r=e[0],s=e[1],a=e[2],o=e[3],l=n[0],c=n[1],d=n[2],f=n[3],p,g,v,_,m;return g=r*l+s*c+a*d+o*f,g<0&&(g=-g,l=-l,c=-c,d=-d,f=-f),1-g>1e-6?(p=Math.acos(g),v=Math.sin(p),_=Math.sin((1-i)*p)/v,m=Math.sin(i*p)/v):(_=1-i,m=i),t[0]=_*r+m*l,t[1]=_*s+m*c,t[2]=_*a+m*d,t[3]=_*o+m*f,t}function NM(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],a=n*n+i*i+r*r+s*s,o=a?1/a:0;return t[0]=-n*o,t[1]=-i*o,t[2]=-r*o,t[3]=s*o,t}function LM(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function IM(t,e){let n=e[0]+e[4]+e[8],i;if(n>0)i=Math.sqrt(n+1),t[3]=.5*i,i=.5/i,t[0]=(e[5]-e[7])*i,t[1]=(e[6]-e[2])*i,t[2]=(e[1]-e[3])*i;else{let r=0;e[4]>e[0]&&(r=1),e[8]>e[r*3+r]&&(r=2);let s=(r+1)%3,a=(r+2)%3;i=Math.sqrt(e[r*3+r]-e[s*3+s]-e[a*3+a]+1),t[r]=.5*i,i=.5/i,t[3]=(e[s*3+a]-e[a*3+s])*i,t[s]=(e[s*3+r]+e[r*3+s])*i,t[a]=(e[a*3+r]+e[r*3+a])*i}return t}function DM(t,e,n="YXZ"){let i=Math.sin(e[0]*.5),r=Math.cos(e[0]*.5),s=Math.sin(e[1]*.5),a=Math.cos(e[1]*.5),o=Math.sin(e[2]*.5),l=Math.cos(e[2]*.5);return n==="XYZ"?(t[0]=i*a*l+r*s*o,t[1]=r*s*l-i*a*o,t[2]=r*a*o+i*s*l,t[3]=r*a*l-i*s*o):n==="YXZ"?(t[0]=i*a*l+r*s*o,t[1]=r*s*l-i*a*o,t[2]=r*a*o-i*s*l,t[3]=r*a*l+i*s*o):n==="ZXY"?(t[0]=i*a*l-r*s*o,t[1]=r*s*l+i*a*o,t[2]=r*a*o+i*s*l,t[3]=r*a*l-i*s*o):n==="ZYX"?(t[0]=i*a*l-r*s*o,t[1]=r*s*l+i*a*o,t[2]=r*a*o-i*s*l,t[3]=r*a*l+i*s*o):n==="YZX"?(t[0]=i*a*l+r*s*o,t[1]=r*s*l+i*a*o,t[2]=r*a*o-i*s*l,t[3]=r*a*l-i*s*o):n==="XZY"&&(t[0]=i*a*l-r*s*o,t[1]=r*s*l-i*a*o,t[2]=r*a*o+i*s*l,t[3]=r*a*l+i*s*o),t}const UM=SM,FM=MM,OM=wM,kM=EM;class zM extends Array{constructor(e=0,n=0,i=0,r=1){super(e,n,i,r),this.onChange=()=>{},this._target=this;const s=["0","1","2","3"];return new Proxy(this,{set(a,o){const l=Reflect.set(...arguments);return l&&s.includes(o)&&a.onChange(),l}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set w(e){this._target[3]=e,this.onChange()}identity(){return TM(this._target),this.onChange(),this}set(e,n,i,r){return e.length?this.copy(e):(FM(this._target,e,n,i,r),this.onChange(),this)}rotateX(e){return AM(this._target,this._target,e),this.onChange(),this}rotateY(e){return RM(this._target,this._target,e),this.onChange(),this}rotateZ(e){return bM(this._target,this._target,e),this.onChange(),this}inverse(e=this._target){return NM(this._target,e),this.onChange(),this}conjugate(e=this._target){return LM(this._target,e),this.onChange(),this}copy(e){return UM(this._target,e),this.onChange(),this}normalize(e=this._target){return kM(this._target,e),this.onChange(),this}multiply(e,n){return n?Gp(this._target,e,n):Gp(this._target,this._target,e),this.onChange(),this}dot(e){return OM(this._target,e)}fromMatrix3(e){return IM(this._target,e),this.onChange(),this}fromEuler(e,n){return DM(this._target,e,e.order),n||this.onChange(),this}fromAxisAngle(e,n){return CM(this._target,e,n),this.onChange(),this}slerp(e,n){return PM(this._target,this._target,e,n),this.onChange(),this}fromArray(e,n=0){return this._target[0]=e[n],this._target[1]=e[n+1],this._target[2]=e[n+2],this._target[3]=e[n+3],this.onChange(),this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e[n+3]=this[3],e}}const BM=1e-6;function jM(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function HM(t,e,n,i,r,s,a,o,l,c,d,f,p,g,v,_,m){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t[4]=s,t[5]=a,t[6]=o,t[7]=l,t[8]=c,t[9]=d,t[10]=f,t[11]=p,t[12]=g,t[13]=v,t[14]=_,t[15]=m,t}function VM(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function GM(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],p=e[10],g=e[11],v=e[12],_=e[13],m=e[14],h=e[15],y=n*o-i*a,x=n*l-r*a,S=n*c-s*a,P=i*l-r*o,R=i*c-s*o,w=r*c-s*l,T=d*_-f*v,M=d*m-p*v,E=d*h-g*v,C=f*m-p*_,I=f*h-g*_,F=p*h-g*m,z=y*F-x*I+S*C+P*E-R*M+w*T;return z?(z=1/z,t[0]=(o*F-l*I+c*C)*z,t[1]=(r*I-i*F-s*C)*z,t[2]=(_*w-m*R+h*P)*z,t[3]=(p*R-f*w-g*P)*z,t[4]=(l*E-a*F-c*M)*z,t[5]=(n*F-r*E+s*M)*z,t[6]=(m*S-v*w-h*x)*z,t[7]=(d*w-p*S+g*x)*z,t[8]=(a*I-o*E+c*T)*z,t[9]=(i*E-n*I-s*T)*z,t[10]=(v*R-_*S+h*y)*z,t[11]=(f*S-d*R-g*y)*z,t[12]=(o*M-a*C-l*T)*z,t[13]=(n*C-i*M+r*T)*z,t[14]=(_*x-v*P-m*y)*z,t[15]=(d*P-f*x+p*y)*z,t):null}function A0(t){let e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],c=t[8],d=t[9],f=t[10],p=t[11],g=t[12],v=t[13],_=t[14],m=t[15],h=e*a-n*s,y=e*o-i*s,x=e*l-r*s,S=n*o-i*a,P=n*l-r*a,R=i*l-r*o,w=c*v-d*g,T=c*_-f*g,M=c*m-p*g,E=d*_-f*v,C=d*m-p*v,I=f*m-p*_;return h*I-y*C+x*E+S*M-P*T+R*w}function Wp(t,e,n){let i=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5],c=e[6],d=e[7],f=e[8],p=e[9],g=e[10],v=e[11],_=e[12],m=e[13],h=e[14],y=e[15],x=n[0],S=n[1],P=n[2],R=n[3];return t[0]=x*i+S*o+P*f+R*_,t[1]=x*r+S*l+P*p+R*m,t[2]=x*s+S*c+P*g+R*h,t[3]=x*a+S*d+P*v+R*y,x=n[4],S=n[5],P=n[6],R=n[7],t[4]=x*i+S*o+P*f+R*_,t[5]=x*r+S*l+P*p+R*m,t[6]=x*s+S*c+P*g+R*h,t[7]=x*a+S*d+P*v+R*y,x=n[8],S=n[9],P=n[10],R=n[11],t[8]=x*i+S*o+P*f+R*_,t[9]=x*r+S*l+P*p+R*m,t[10]=x*s+S*c+P*g+R*h,t[11]=x*a+S*d+P*v+R*y,x=n[12],S=n[13],P=n[14],R=n[15],t[12]=x*i+S*o+P*f+R*_,t[13]=x*r+S*l+P*p+R*m,t[14]=x*s+S*c+P*g+R*h,t[15]=x*a+S*d+P*v+R*y,t}function WM(t,e,n){let i=n[0],r=n[1],s=n[2],a,o,l,c,d,f,p,g,v,_,m,h;return e===t?(t[12]=e[0]*i+e[4]*r+e[8]*s+e[12],t[13]=e[1]*i+e[5]*r+e[9]*s+e[13],t[14]=e[2]*i+e[6]*r+e[10]*s+e[14],t[15]=e[3]*i+e[7]*r+e[11]*s+e[15]):(a=e[0],o=e[1],l=e[2],c=e[3],d=e[4],f=e[5],p=e[6],g=e[7],v=e[8],_=e[9],m=e[10],h=e[11],t[0]=a,t[1]=o,t[2]=l,t[3]=c,t[4]=d,t[5]=f,t[6]=p,t[7]=g,t[8]=v,t[9]=_,t[10]=m,t[11]=h,t[12]=a*i+d*r+v*s+e[12],t[13]=o*i+f*r+_*s+e[13],t[14]=l*i+p*r+m*s+e[14],t[15]=c*i+g*r+h*s+e[15]),t}function XM(t,e,n){let i=n[0],r=n[1],s=n[2];return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t[3]=e[3]*i,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*s,t[9]=e[9]*s,t[10]=e[10]*s,t[11]=e[11]*s,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function qM(t,e,n,i){let r=i[0],s=i[1],a=i[2],o=Math.hypot(r,s,a),l,c,d,f,p,g,v,_,m,h,y,x,S,P,R,w,T,M,E,C,I,F,z,H;return Math.abs(o)<BM?null:(o=1/o,r*=o,s*=o,a*=o,l=Math.sin(n),c=Math.cos(n),d=1-c,f=e[0],p=e[1],g=e[2],v=e[3],_=e[4],m=e[5],h=e[6],y=e[7],x=e[8],S=e[9],P=e[10],R=e[11],w=r*r*d+c,T=s*r*d+a*l,M=a*r*d-s*l,E=r*s*d-a*l,C=s*s*d+c,I=a*s*d+r*l,F=r*a*d+s*l,z=s*a*d-r*l,H=a*a*d+c,t[0]=f*w+_*T+x*M,t[1]=p*w+m*T+S*M,t[2]=g*w+h*T+P*M,t[3]=v*w+y*T+R*M,t[4]=f*E+_*C+x*I,t[5]=p*E+m*C+S*I,t[6]=g*E+h*C+P*I,t[7]=v*E+y*C+R*I,t[8]=f*F+_*z+x*H,t[9]=p*F+m*z+S*H,t[10]=g*F+h*z+P*H,t[11]=v*F+y*z+R*H,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}function $M(t,e){return t[0]=e[12],t[1]=e[13],t[2]=e[14],t}function R0(t,e){let n=e[0],i=e[1],r=e[2],s=e[4],a=e[5],o=e[6],l=e[8],c=e[9],d=e[10];return t[0]=Math.hypot(n,i,r),t[1]=Math.hypot(s,a,o),t[2]=Math.hypot(l,c,d),t}function YM(t){let e=t[0],n=t[1],i=t[2],r=t[4],s=t[5],a=t[6],o=t[8],l=t[9],c=t[10];const d=e*e+n*n+i*i,f=r*r+s*s+a*a,p=o*o+l*l+c*c;return Math.sqrt(Math.max(d,f,p))}const b0=function(){const t=[1,1,1];return function(e,n){let i=t;R0(i,n);let r=1/i[0],s=1/i[1],a=1/i[2],o=n[0]*r,l=n[1]*s,c=n[2]*a,d=n[4]*r,f=n[5]*s,p=n[6]*a,g=n[8]*r,v=n[9]*s,_=n[10]*a,m=o+f+_,h=0;return m>0?(h=Math.sqrt(m+1)*2,e[3]=.25*h,e[0]=(p-v)/h,e[1]=(g-c)/h,e[2]=(l-d)/h):o>f&&o>_?(h=Math.sqrt(1+o-f-_)*2,e[3]=(p-v)/h,e[0]=.25*h,e[1]=(l+d)/h,e[2]=(g+c)/h):f>_?(h=Math.sqrt(1+f-o-_)*2,e[3]=(g-c)/h,e[0]=(l+d)/h,e[1]=.25*h,e[2]=(p+v)/h):(h=Math.sqrt(1+_-o-f)*2,e[3]=(l-d)/h,e[0]=(g+c)/h,e[1]=(p+v)/h,e[2]=.25*h),e}}();function KM(t,e,n,i){let r=ga([t[0],t[1],t[2]]);const s=ga([t[4],t[5],t[6]]),a=ga([t[8],t[9],t[10]]);A0(t)<0&&(r=-r),n[0]=t[12],n[1]=t[13],n[2]=t[14];const l=t.slice(),c=1/r,d=1/s,f=1/a;l[0]*=c,l[1]*=c,l[2]*=c,l[4]*=d,l[5]*=d,l[6]*=d,l[8]*=f,l[9]*=f,l[10]*=f,b0(e,l),i[0]=r,i[1]=s,i[2]=a}function ZM(t,e,n,i){const r=t,s=e[0],a=e[1],o=e[2],l=e[3],c=s+s,d=a+a,f=o+o,p=s*c,g=s*d,v=s*f,_=a*d,m=a*f,h=o*f,y=l*c,x=l*d,S=l*f,P=i[0],R=i[1],w=i[2];return r[0]=(1-(_+h))*P,r[1]=(g+S)*P,r[2]=(v-x)*P,r[3]=0,r[4]=(g-S)*R,r[5]=(1-(p+h))*R,r[6]=(m+y)*R,r[7]=0,r[8]=(v+x)*w,r[9]=(m-y)*w,r[10]=(1-(p+_))*w,r[11]=0,r[12]=n[0],r[13]=n[1],r[14]=n[2],r[15]=1,r}function JM(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],a=n+n,o=i+i,l=r+r,c=n*a,d=i*a,f=i*o,p=r*a,g=r*o,v=r*l,_=s*a,m=s*o,h=s*l;return t[0]=1-f-v,t[1]=d+h,t[2]=p-m,t[3]=0,t[4]=d-h,t[5]=1-c-v,t[6]=g+_,t[7]=0,t[8]=p+m,t[9]=g-_,t[10]=1-c-f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function QM(t,e,n,i,r){let s=1/Math.tan(e/2),a=1/(i-r);return t[0]=s/n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=s,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(r+i)*a,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*r*i*a,t[15]=0,t}function eE(t,e,n,i,r,s,a){let o=1/(e-n),l=1/(i-r),c=1/(s-a);return t[0]=-2*o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*l,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*c,t[11]=0,t[12]=(e+n)*o,t[13]=(r+i)*l,t[14]=(a+s)*c,t[15]=1,t}function tE(t,e,n,i){let r=e[0],s=e[1],a=e[2],o=i[0],l=i[1],c=i[2],d=r-n[0],f=s-n[1],p=a-n[2],g=d*d+f*f+p*p;g===0?p=1:(g=1/Math.sqrt(g),d*=g,f*=g,p*=g);let v=l*p-c*f,_=c*d-o*p,m=o*f-l*d;return g=v*v+_*_+m*m,g===0&&(c?o+=1e-6:l?c+=1e-6:l+=1e-6,v=l*p-c*f,_=c*d-o*p,m=o*f-l*d,g=v*v+_*_+m*m),g=1/Math.sqrt(g),v*=g,_*=g,m*=g,t[0]=v,t[1]=_,t[2]=m,t[3]=0,t[4]=f*m-p*_,t[5]=p*v-d*m,t[6]=d*_-f*v,t[7]=0,t[8]=d,t[9]=f,t[10]=p,t[11]=0,t[12]=r,t[13]=s,t[14]=a,t[15]=1,t}function Xp(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t[3]=e[3]+n[3],t[4]=e[4]+n[4],t[5]=e[5]+n[5],t[6]=e[6]+n[6],t[7]=e[7]+n[7],t[8]=e[8]+n[8],t[9]=e[9]+n[9],t[10]=e[10]+n[10],t[11]=e[11]+n[11],t[12]=e[12]+n[12],t[13]=e[13]+n[13],t[14]=e[14]+n[14],t[15]=e[15]+n[15],t}function qp(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t[3]=e[3]-n[3],t[4]=e[4]-n[4],t[5]=e[5]-n[5],t[6]=e[6]-n[6],t[7]=e[7]-n[7],t[8]=e[8]-n[8],t[9]=e[9]-n[9],t[10]=e[10]-n[10],t[11]=e[11]-n[11],t[12]=e[12]-n[12],t[13]=e[13]-n[13],t[14]=e[14]-n[14],t[15]=e[15]-n[15],t}function nE(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*n,t[9]=e[9]*n,t[10]=e[10]*n,t[11]=e[11]*n,t[12]=e[12]*n,t[13]=e[13]*n,t[14]=e[14]*n,t[15]=e[15]*n,t}class Dl extends Array{constructor(e=1,n=0,i=0,r=0,s=0,a=1,o=0,l=0,c=0,d=0,f=1,p=0,g=0,v=0,_=0,m=1){return super(e,n,i,r,s,a,o,l,c,d,f,p,g,v,_,m),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(e){this[12]=e}set y(e){this[13]=e}set z(e){this[14]=e}set w(e){this[15]=e}set(e,n,i,r,s,a,o,l,c,d,f,p,g,v,_,m){return e.length?this.copy(e):(HM(this,e,n,i,r,s,a,o,l,c,d,f,p,g,v,_,m),this)}translate(e,n=this){return WM(this,n,e),this}rotate(e,n,i=this){return qM(this,i,e,n),this}scale(e,n=this){return XM(this,n,typeof e=="number"?[e,e,e]:e),this}add(e,n){return n?Xp(this,e,n):Xp(this,this,e),this}sub(e,n){return n?qp(this,e,n):qp(this,this,e),this}multiply(e,n){return e.length?n?Wp(this,e,n):Wp(this,this,e):nE(this,this,e),this}identity(){return VM(this),this}copy(e){return jM(this,e),this}fromPerspective({fov:e,aspect:n,near:i,far:r}={}){return QM(this,e,n,i,r),this}fromOrthogonal({left:e,right:n,bottom:i,top:r,near:s,far:a}){return eE(this,e,n,i,r,s,a),this}fromQuaternion(e){return JM(this,e),this}setPosition(e){return this.x=e[0],this.y=e[1],this.z=e[2],this}inverse(e=this){return GM(this,e),this}compose(e,n,i){return ZM(this,e,n,i),this}decompose(e,n,i){return KM(this,e,n,i),this}getRotation(e){return b0(e,this),this}getTranslation(e){return $M(e,this),this}getScaling(e){return R0(e,this),this}getMaxScaleOnAxis(){return YM(this)}lookAt(e,n,i){return tE(this,e,n,i),this}determinant(){return A0(this)}fromArray(e,n=0){return this[0]=e[n],this[1]=e[n+1],this[2]=e[n+2],this[3]=e[n+3],this[4]=e[n+4],this[5]=e[n+5],this[6]=e[n+6],this[7]=e[n+7],this[8]=e[n+8],this[9]=e[n+9],this[10]=e[n+10],this[11]=e[n+11],this[12]=e[n+12],this[13]=e[n+13],this[14]=e[n+14],this[15]=e[n+15],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e[n+3]=this[3],e[n+4]=this[4],e[n+5]=this[5],e[n+6]=this[6],e[n+7]=this[7],e[n+8]=this[8],e[n+9]=this[9],e[n+10]=this[10],e[n+11]=this[11],e[n+12]=this[12],e[n+13]=this[13],e[n+14]=this[14],e[n+15]=this[15],e}}function iE(t,e,n="YXZ"){return n==="XYZ"?(t[1]=Math.asin(Math.min(Math.max(e[8],-1),1)),Math.abs(e[8])<.99999?(t[0]=Math.atan2(-e[9],e[10]),t[2]=Math.atan2(-e[4],e[0])):(t[0]=Math.atan2(e[6],e[5]),t[2]=0)):n==="YXZ"?(t[0]=Math.asin(-Math.min(Math.max(e[9],-1),1)),Math.abs(e[9])<.99999?(t[1]=Math.atan2(e[8],e[10]),t[2]=Math.atan2(e[1],e[5])):(t[1]=Math.atan2(-e[2],e[0]),t[2]=0)):n==="ZXY"?(t[0]=Math.asin(Math.min(Math.max(e[6],-1),1)),Math.abs(e[6])<.99999?(t[1]=Math.atan2(-e[2],e[10]),t[2]=Math.atan2(-e[4],e[5])):(t[1]=0,t[2]=Math.atan2(e[1],e[0]))):n==="ZYX"?(t[1]=Math.asin(-Math.min(Math.max(e[2],-1),1)),Math.abs(e[2])<.99999?(t[0]=Math.atan2(e[6],e[10]),t[2]=Math.atan2(e[1],e[0])):(t[0]=0,t[2]=Math.atan2(-e[4],e[5]))):n==="YZX"?(t[2]=Math.asin(Math.min(Math.max(e[1],-1),1)),Math.abs(e[1])<.99999?(t[0]=Math.atan2(-e[9],e[5]),t[1]=Math.atan2(-e[2],e[0])):(t[0]=0,t[1]=Math.atan2(e[8],e[10]))):n==="XZY"&&(t[2]=Math.asin(-Math.min(Math.max(e[4],-1),1)),Math.abs(e[4])<.99999?(t[0]=Math.atan2(e[6],e[5]),t[1]=Math.atan2(e[8],e[0])):(t[0]=Math.atan2(-e[9],e[10]),t[1]=0)),t}const $p=new Dl;let rE=class extends Array{constructor(e=0,n=e,i=e,r="YXZ"){super(e,n,i),this.order=r,this.onChange=()=>{},this._target=this;const s=["0","1","2"];return new Proxy(this,{set(a,o){const l=Reflect.set(...arguments);return l&&s.includes(o)&&a.onChange(),l}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set(e,n=e,i=e){return e.length?this.copy(e):(this._target[0]=e,this._target[1]=n,this._target[2]=i,this.onChange(),this)}copy(e){return this._target[0]=e[0],this._target[1]=e[1],this._target[2]=e[2],this.onChange(),this}reorder(e){return this._target.order=e,this.onChange(),this}fromRotationMatrix(e,n=this.order){return iE(this._target,e,n),this.onChange(),this}fromQuaternion(e,n=this.order,i){return $p.fromQuaternion(e),this._target.fromRotationMatrix($p,n),i||this.onChange(),this}fromArray(e,n=0){return this._target[0]=e[n],this._target[1]=e[n+1],this._target[2]=e[n+2],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e}};class sE{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new Dl,this.worldMatrix=new Dl,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new Un,this.quaternion=new zM,this.scale=new Un(1),this.rotation=new rE,this.up=new Un(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(e,n=!0){this.parent&&e!==this.parent&&this.parent.removeChild(this,!1),this.parent=e,n&&e&&e.addChild(this,!1)}addChild(e,n=!0){~this.children.indexOf(e)||this.children.push(e),n&&e.setParent(this,!1)}removeChild(e,n=!0){~this.children.indexOf(e)&&this.children.splice(this.children.indexOf(e),1),n&&e.setParent(null,!1)}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||e)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,e=!0);for(let n=0,i=this.children.length;n<i;n++)this.children[n].updateMatrixWorld(e)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(e){if(!e(this))for(let n=0,i=this.children.length;n<i;n++)this.children[n].traverse(e)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(e,n=!1){n?this.matrix.lookAt(this.position,e,this.up):this.matrix.lookAt(e,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}}function aE(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t}function oE(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],a=n+n,o=i+i,l=r+r,c=n*a,d=i*a,f=i*o,p=r*a,g=r*o,v=r*l,_=s*a,m=s*o,h=s*l;return t[0]=1-f-v,t[3]=d-h,t[6]=p+m,t[1]=d+h,t[4]=1-c-v,t[7]=g-_,t[2]=p-m,t[5]=g+_,t[8]=1-c-f,t}function lE(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function cE(t,e,n,i,r,s,a,o,l,c){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t[4]=s,t[5]=a,t[6]=o,t[7]=l,t[8]=c,t}function uE(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function dE(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*a-o*c,p=-d*s+o*l,g=c*s-a*l,v=n*f+i*p+r*g;return v?(v=1/v,t[0]=f*v,t[1]=(-d*i+r*c)*v,t[2]=(o*i-r*a)*v,t[3]=p*v,t[4]=(d*n-r*l)*v,t[5]=(-o*n+r*s)*v,t[6]=g*v,t[7]=(-c*n+i*l)*v,t[8]=(a*n-i*s)*v,t):null}function Yp(t,e,n){let i=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5],c=e[6],d=e[7],f=e[8],p=n[0],g=n[1],v=n[2],_=n[3],m=n[4],h=n[5],y=n[6],x=n[7],S=n[8];return t[0]=p*i+g*a+v*c,t[1]=p*r+g*o+v*d,t[2]=p*s+g*l+v*f,t[3]=_*i+m*a+h*c,t[4]=_*r+m*o+h*d,t[5]=_*s+m*l+h*f,t[6]=y*i+x*a+S*c,t[7]=y*r+x*o+S*d,t[8]=y*s+x*l+S*f,t}function hE(t,e,n){let i=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5],c=e[6],d=e[7],f=e[8],p=n[0],g=n[1];return t[0]=i,t[1]=r,t[2]=s,t[3]=a,t[4]=o,t[5]=l,t[6]=p*i+g*a+c,t[7]=p*r+g*o+d,t[8]=p*s+g*l+f,t}function fE(t,e,n){let i=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5],c=e[6],d=e[7],f=e[8],p=Math.sin(n),g=Math.cos(n);return t[0]=g*i+p*a,t[1]=g*r+p*o,t[2]=g*s+p*l,t[3]=g*a-p*i,t[4]=g*o-p*r,t[5]=g*l-p*s,t[6]=c,t[7]=d,t[8]=f,t}function pE(t,e,n){let i=n[0],r=n[1];return t[0]=i*e[0],t[1]=i*e[1],t[2]=i*e[2],t[3]=r*e[3],t[4]=r*e[4],t[5]=r*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function mE(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],p=e[10],g=e[11],v=e[12],_=e[13],m=e[14],h=e[15],y=n*o-i*a,x=n*l-r*a,S=n*c-s*a,P=i*l-r*o,R=i*c-s*o,w=r*c-s*l,T=d*_-f*v,M=d*m-p*v,E=d*h-g*v,C=f*m-p*_,I=f*h-g*_,F=p*h-g*m,z=y*F-x*I+S*C+P*E-R*M+w*T;return z?(z=1/z,t[0]=(o*F-l*I+c*C)*z,t[1]=(l*E-a*F-c*M)*z,t[2]=(a*I-o*E+c*T)*z,t[3]=(r*I-i*F-s*C)*z,t[4]=(n*F-r*E+s*M)*z,t[5]=(i*E-n*I-s*T)*z,t[6]=(_*w-m*R+h*P)*z,t[7]=(m*S-v*w-h*x)*z,t[8]=(v*R-_*S+h*y)*z,t):null}class gE extends Array{constructor(e=1,n=0,i=0,r=0,s=1,a=0,o=0,l=0,c=1){return super(e,n,i,r,s,a,o,l,c),this}set(e,n,i,r,s,a,o,l,c){return e.length?this.copy(e):(cE(this,e,n,i,r,s,a,o,l,c),this)}translate(e,n=this){return hE(this,n,e),this}rotate(e,n=this){return fE(this,n,e),this}scale(e,n=this){return pE(this,n,e),this}multiply(e,n){return n?Yp(this,e,n):Yp(this,this,e),this}identity(){return uE(this),this}copy(e){return lE(this,e),this}fromMatrix4(e){return aE(this,e),this}fromQuaternion(e){return oE(this,e),this}fromBasis(e,n,i){return this.set(e[0],e[1],e[2],n[0],n[1],n[2],i[0],i[1],i[2]),this}inverse(e=this){return dE(this,e),this}getNormalMatrix(e){return mE(this,e),this}}let vE=0,_E=class extends sE{constructor(e,{geometry:n,program:i,mode:r=e.TRIANGLES,frustumCulled:s=!0,renderOrder:a=0}={}){super(),e.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=e,this.id=vE++,this.geometry=n,this.program=i,this.mode=r,this.frustumCulled=s,this.renderOrder=a,this.modelViewMatrix=new Dl,this.normalMatrix=new gE,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(e){return this.beforeRenderCallbacks.push(e),this}onAfterRender(e){return this.afterRenderCallbacks.push(e),this}draw({camera:e}={}){e&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=e.projectionMatrix,this.program.uniforms.cameraPosition.value=e.worldPosition,this.program.uniforms.viewMatrix.value=e.viewMatrix,this.modelViewMatrix.multiply(e.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:e}));let n=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:n}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:e}))}},xE=class extends fM{constructor(e,{attributes:n={}}={}){Object.assign(n,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(e,n)}};const xo=8,yE=t=>{const e=t.replace("#","").padEnd(6,"0"),n=parseInt(e.slice(0,2),16)/255,i=parseInt(e.slice(2,4),16)/255,r=parseInt(e.slice(4,6),16)/255;return[n,i,r]},SE=t=>{const e=(t&&t.length?t:["#FF9FFC","#5227FF"]).slice(0,xo);for(e.length===1&&e.push(e[0]);e.length<xo;)e.push(e[e.length-1]);const n=[];for(let r=0;r<xo;r+=1)n.push(yE(e[r]));const i=Math.max(2,Math.min(xo,(t==null?void 0:t.length)??2));return{arr:n,count:i}},ME=({className:t,dpr:e,paused:n=!1,gradientColors:i,angle:r=0,noise:s=.3,blindCount:a=16,blindMinWidth:o=60,mouseDampening:l=.15,mirrorGradient:c=!1,spotlightRadius:d=.5,spotlightSoftness:f=1,spotlightOpacity:p=1,distortAmount:g=0,shineDirection:v="left",mixBlendMode:_="lighten"})=>{const m=U.useRef(null),h=U.useRef(null),y=U.useRef(null),x=U.useRef(null),S=U.useRef(null),P=U.useRef(null),R=U.useRef([0,0]),w=U.useRef(0),T=U.useRef(!0);return U.useEffect(()=>{const M=m.current;if(!M)return;const E=new yM({dpr:e??(typeof window<"u"&&window.devicePixelRatio||1),alpha:!0,antialias:!0});P.current=E;const C=E.gl,I=C.canvas;I.style.width="100%",I.style.height="100%",I.style.display="block",M.appendChild(I);const F=`
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
`,{arr:H,count:V}=SE(i),$={iResolution:{value:[C.drawingBufferWidth,C.drawingBufferHeight,1]},iMouse:{value:[0,0]},iTime:{value:0},uAngle:{value:r*Math.PI/180},uNoise:{value:s},uBlindCount:{value:Math.max(1,a)},uSpotlightRadius:{value:d},uSpotlightSoftness:{value:f},uSpotlightOpacity:{value:p},uMirror:{value:c?1:0},uDistort:{value:g},uShineFlip:{value:v==="right"?1:0},uColor0:{value:H[0]},uColor1:{value:H[1]},uColor2:{value:H[2]},uColor3:{value:H[3]},uColor4:{value:H[4]},uColor5:{value:H[5]},uColor6:{value:H[6]},uColor7:{value:H[7]},uColorCount:{value:V}},D=new mM(C,{vertex:F,fragment:z,uniforms:$});y.current=D;const K=new xE(C);S.current=K;const J=new _E(C,{geometry:K,program:D});x.current=J;const se=()=>{const Y=M.getBoundingClientRect();if(E.setSize(Y.width,Y.height),$.iResolution.value=[C.drawingBufferWidth,C.drawingBufferHeight,1],o&&o>0){const ne=Math.max(1,Math.floor(Y.width/o)),ae=a?Math.min(a,ne):ne;$.uBlindCount.value=Math.max(1,ae)}else $.uBlindCount.value=Math.max(1,a);if(T.current){T.current=!1;const ne=C.drawingBufferWidth/2,ae=C.drawingBufferHeight/2;$.iMouse.value=[ne,ae],R.current=[ne,ae]}};se();const xe=new ResizeObserver(se);xe.observe(M);const ue=Y=>{const ne=I.getBoundingClientRect(),ae=E.dpr||1,Me=(Y.clientX-ne.left)*ae,Ee=(ne.height-(Y.clientY-ne.top))*ae;R.current=[Me,Ee],l<=0&&($.iMouse.value=[Me,Ee])};I.addEventListener("pointermove",ue);const j=Y=>{if(h.current=requestAnimationFrame(j),$.iTime.value=Y*.001,l>0){w.current||(w.current=Y);const ne=(Y-w.current)/1e3;w.current=Y;const ae=Math.max(1e-4,l);let Me=1-Math.exp(-ne/ae);Me>1&&(Me=1);const Ee=R.current,Re=$.iMouse.value;Re[0]+=(Ee[0]-Re[0])*Me,Re[1]+=(Ee[1]-Re[1])*Me}else w.current=Y;if(!n&&y.current&&x.current)try{E.render({scene:x.current})}catch(ne){console.error(ne)}};return h.current=requestAnimationFrame(j),()=>{h.current&&cancelAnimationFrame(h.current),I.removeEventListener("pointermove",ue),xe.disconnect(),I.parentElement===M&&M.removeChild(I);const Y=(ne,ae)=>{ne&&typeof ne[ae]=="function"&&ne[ae].call(ne)};Y(y.current,"remove"),Y(S.current,"remove"),Y(x.current,"remove"),Y(P.current,"destroy"),y.current=null,S.current=null,x.current=null,P.current=null}},[r,a,o,e,g,i,c,l,s,n,v,p,d,f]),u.jsx("div",{ref:m,className:`gradient-blinds-container ${t??""}`,style:{..._&&{mixBlendMode:_}}})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zh="167",EE=0,Kp=1,wE=2,P0=1,TE=2,ii=3,Ki=0,nn=1,ai=2,Xi=0,xs=1,Zp=2,Jp=3,Qp=4,CE=5,fr=100,AE=101,RE=102,bE=103,PE=104,NE=200,LE=201,IE=202,DE=203,Md=204,Ed=205,UE=206,FE=207,OE=208,kE=209,zE=210,BE=211,jE=212,HE=213,VE=214,GE=0,WE=1,XE=2,Ul=3,qE=4,$E=5,YE=6,KE=7,N0=0,ZE=1,JE=2,qi=0,QE=1,e1=2,t1=3,n1=4,i1=5,r1=6,s1=7,L0=300,Ps=301,Ns=302,wd=303,Td=304,ac=306,Cd=1e3,_r=1001,Ad=1002,Sn=1003,a1=1004,yo=1005,Dn=1006,$c=1007,xr=1008,gi=1009,I0=1010,D0=1011,ka=1012,Jh=1013,Rr=1014,ci=1015,Wa=1016,Qh=1017,ef=1018,Ls=1020,U0=35902,F0=1021,O0=1022,Fn=1023,k0=1024,z0=1025,ys=1026,Is=1027,B0=1028,tf=1029,j0=1030,nf=1031,rf=1033,nl=33776,il=33777,rl=33778,sl=33779,Rd=35840,bd=35841,Pd=35842,Nd=35843,Ld=36196,Id=37492,Dd=37496,Ud=37808,Fd=37809,Od=37810,kd=37811,zd=37812,Bd=37813,jd=37814,Hd=37815,Vd=37816,Gd=37817,Wd=37818,Xd=37819,qd=37820,$d=37821,al=36492,Yd=36494,Kd=36495,H0=36283,Zd=36284,Jd=36285,Qd=36286,o1=3200,l1=3201,c1=0,u1=1,Li="",Vn="srgb",tr="srgb-linear",sf="display-p3",oc="display-p3-linear",Fl="linear",rt="srgb",Ol="rec709",kl="p3",Or=7680,em=519,d1=512,h1=513,f1=514,V0=515,p1=516,m1=517,g1=518,v1=519,tm=35044,nm="300 es",ui=2e3,zl=2001;class zs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yc=Math.PI/180,eh=180/Math.PI;function Xa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[t&255]+Bt[t>>8&255]+Bt[t>>16&255]+Bt[t>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[n&63|128]+Bt[n>>8&255]+"-"+Bt[n>>16&255]+Bt[n>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Zt(t,e,n){return Math.max(e,Math.min(n,t))}function _1(t,e){return(t%e+e)%e}function Kc(t,e,n){return(1-n)*t+n*e}function Ys(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Yt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class He{constructor(e=0,n=0){He.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,n,i,r,s,a,o,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],f=i[7],p=i[2],g=i[5],v=i[8],_=r[0],m=r[3],h=r[6],y=r[1],x=r[4],S=r[7],P=r[2],R=r[5],w=r[8];return s[0]=a*_+o*y+l*P,s[3]=a*m+o*x+l*R,s[6]=a*h+o*S+l*w,s[1]=c*_+d*y+f*P,s[4]=c*m+d*x+f*R,s[7]=c*h+d*S+f*w,s[2]=p*_+g*y+v*P,s[5]=p*m+g*x+v*R,s[8]=p*h+g*S+v*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*a*d-n*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*a-o*c,p=o*l-d*s,g=c*s-a*l,v=n*f+i*p+r*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=f*_,e[1]=(r*c-d*i)*_,e[2]=(o*i-r*a)*_,e[3]=p*_,e[4]=(d*n-r*l)*_,e[5]=(r*s-o*n)*_,e[6]=g*_,e[7]=(i*l-c*n)*_,e[8]=(a*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Zc.makeScale(e,n)),this}rotate(e){return this.premultiply(Zc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Zc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zc=new ke;function G0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Bl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function x1(){const t=Bl("canvas");return t.style.display="block",t}const im={};function va(t){t in im||(im[t]=!0,console.warn(t))}function y1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const rm=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),sm=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ks={[tr]:{transfer:Fl,primaries:Ol,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Vn]:{transfer:rt,primaries:Ol,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[oc]:{transfer:Fl,primaries:kl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(sm),fromReference:t=>t.applyMatrix3(rm)},[sf]:{transfer:rt,primaries:kl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(sm),fromReference:t=>t.applyMatrix3(rm).convertLinearToSRGB()}},S1=new Set([tr,oc]),Qe={enabled:!0,_workingColorSpace:tr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!S1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ks[e].toReference,r=Ks[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ks[t].primaries},getTransfer:function(t){return t===Li?Fl:Ks[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Ks[e].luminanceCoefficients)}};function Ss(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Jc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let kr;class M1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{kr===void 0&&(kr=Bl("canvas")),kr.width=e.width,kr.height=e.height;const i=kr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=kr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Bl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ss(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ss(n[i]/255)*255):n[i]=Ss(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let E1=0;class W0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:E1++}),this.uuid=Xa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Qc(r[a].image)):s.push(Qc(r[a]))}else s=Qc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Qc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?M1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let w1=0;class rn extends zs{constructor(e=rn.DEFAULT_IMAGE,n=rn.DEFAULT_MAPPING,i=_r,r=_r,s=Dn,a=xr,o=Fn,l=gi,c=rn.DEFAULT_ANISOTROPY,d=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:w1++}),this.uuid=Xa(),this.name="",this.source=new W0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==L0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cd:e.x=e.x-Math.floor(e.x);break;case _r:e.x=e.x<0?0:1;break;case Ad:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cd:e.y=e.y-Math.floor(e.y);break;case _r:e.y=e.y<0?0:1;break;case Ad:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=L0;rn.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,n=0,i=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],p=l[1],g=l[5],v=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(d-p)<.01&&Math.abs(f-_)<.01&&Math.abs(v-m)<.01){if(Math.abs(d+p)<.1&&Math.abs(f+_)<.1&&Math.abs(v+m)<.1&&Math.abs(c+g+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,S=(g+1)/2,P=(h+1)/2,R=(d+p)/4,w=(f+_)/4,T=(v+m)/4;return x>S&&x>P?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=R/i,s=w/i):S>P?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=R/r,s=T/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=w/s,r=T/s),this.set(i,r,s,n),this}let y=Math.sqrt((m-v)*(m-v)+(f-_)*(f-_)+(p-d)*(p-d));return Math.abs(y)<.001&&(y=1),this.x=(m-v)/y,this.y=(f-_)/y,this.z=(p-d)/y,this.w=Math.acos((c+g+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class T1 extends zs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new rn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new W0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class br extends T1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class X0 extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class C1 extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const p=s[a+0],g=s[a+1],v=s[a+2],_=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(o===1){e[n+0]=p,e[n+1]=g,e[n+2]=v,e[n+3]=_;return}if(f!==_||l!==p||c!==g||d!==v){let m=1-o;const h=l*p+c*g+d*v+f*_,y=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const P=Math.sqrt(x),R=Math.atan2(P,h*y);m=Math.sin(m*R)/P,o=Math.sin(o*R)/P}const S=o*y;if(l=l*m+p*S,c=c*m+g*S,d=d*m+v*S,f=f*m+_*S,m===1-o){const P=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=P,c*=P,d*=P,f*=P}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[a],p=s[a+1],g=s[a+2],v=s[a+3];return e[n]=o*v+d*f+l*g-c*p,e[n+1]=l*v+d*p+c*f-o*g,e[n+2]=c*v+d*g+o*p-l*f,e[n+3]=d*v-o*f-l*p-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),f=o(s/2),p=l(i/2),g=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=p*d*f+c*g*v,this._y=c*g*f-p*d*v,this._z=c*d*v+p*g*f,this._w=c*d*f-p*g*v;break;case"YXZ":this._x=p*d*f+c*g*v,this._y=c*g*f-p*d*v,this._z=c*d*v-p*g*f,this._w=c*d*f+p*g*v;break;case"ZXY":this._x=p*d*f-c*g*v,this._y=c*g*f+p*d*v,this._z=c*d*v+p*g*f,this._w=c*d*f-p*g*v;break;case"ZYX":this._x=p*d*f-c*g*v,this._y=c*g*f+p*d*v,this._z=c*d*v-p*g*f,this._w=c*d*f+p*g*v;break;case"YZX":this._x=p*d*f+c*g*v,this._y=c*g*f+p*d*v,this._z=c*d*v-p*g*f,this._w=c*d*f-p*g*v;break;case"XZY":this._x=p*d*f-c*g*v,this._y=c*g*f-p*d*v,this._z=c*d*v+p*g*f,this._w=c*d*f+p*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],d=n[6],f=n[10],p=i+o+f;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(d-l)*g,this._y=(s-c)*g,this._z=(a-r)*g}else if(i>o&&i>f){const g=2*Math.sqrt(1+i-o-f);this._w=(d-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+c)/g}else if(o>f){const g=2*Math.sqrt(1+o-i-f);this._w=(s-c)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+f-i-o);this._w=(a-r)/g,this._x=(s+c)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-n;return this._w=g*a+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),f=Math.sin((1-n)*d)/c,p=Math.sin(n*d)/c;return this._w=a*f+this._w*p,this._x=i*f+this._x*p,this._y=r*f+this._y*p,this._z=s*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,n=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(am.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(am.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*d,this.y=i+l*d+o*c-s*f,this.z=r+l*f+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return eu.copy(this).projectOnVector(e),this.sub(eu)}reflect(e){return this.sub(eu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const eu=new W,am=new qa;class $a{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(An.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(An.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=An.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,An):An.fromBufferAttribute(s,a),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),So.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),So.copy(i.boundingBox)),So.applyMatrix4(e.matrixWorld),this.union(So)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),Mo.subVectors(this.max,Zs),zr.subVectors(e.a,Zs),Br.subVectors(e.b,Zs),jr.subVectors(e.c,Zs),Mi.subVectors(Br,zr),Ei.subVectors(jr,Br),ir.subVectors(zr,jr);let n=[0,-Mi.z,Mi.y,0,-Ei.z,Ei.y,0,-ir.z,ir.y,Mi.z,0,-Mi.x,Ei.z,0,-Ei.x,ir.z,0,-ir.x,-Mi.y,Mi.x,0,-Ei.y,Ei.x,0,-ir.y,ir.x,0];return!tu(n,zr,Br,jr,Mo)||(n=[1,0,0,0,1,0,0,0,1],!tu(n,zr,Br,jr,Mo))?!1:(Eo.crossVectors(Mi,Ei),n=[Eo.x,Eo.y,Eo.z],tu(n,zr,Br,jr,Mo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jn=[new W,new W,new W,new W,new W,new W,new W,new W],An=new W,So=new $a,zr=new W,Br=new W,jr=new W,Mi=new W,Ei=new W,ir=new W,Zs=new W,Mo=new W,Eo=new W,rr=new W;function tu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){rr.fromArray(t,s);const o=r.x*Math.abs(rr.x)+r.y*Math.abs(rr.y)+r.z*Math.abs(rr.z),l=e.dot(rr),c=n.dot(rr),d=i.dot(rr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const A1=new $a,Js=new W,nu=new W;class af{constructor(e=new W,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):A1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);const n=Js.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Js,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(nu)),this.expandByPoint(Js.copy(e.center).sub(nu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new W,iu=new W,wo=new W,wi=new W,ru=new W,To=new W,su=new W;class R1{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Qn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,n),Qn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){iu.copy(e).add(n).multiplyScalar(.5),wo.copy(n).sub(e).normalize(),wi.copy(this.origin).sub(iu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(wo),o=wi.dot(this.direction),l=-wi.dot(wo),c=wi.lengthSq(),d=Math.abs(1-a*a);let f,p,g,v;if(d>0)if(f=a*l-o,p=a*o-l,v=s*d,f>=0)if(p>=-v)if(p<=v){const _=1/d;f*=_,p*=_,g=f*(f+a*p+2*o)+p*(a*f+p+2*l)+c}else p=s,f=Math.max(0,-(a*p+o)),g=-f*f+p*(p+2*l)+c;else p=-s,f=Math.max(0,-(a*p+o)),g=-f*f+p*(p+2*l)+c;else p<=-v?(f=Math.max(0,-(-a*s+o)),p=f>0?-s:Math.min(Math.max(-s,-l),s),g=-f*f+p*(p+2*l)+c):p<=v?(f=0,p=Math.min(Math.max(-s,-l),s),g=p*(p+2*l)+c):(f=Math.max(0,-(a*s+o)),p=f>0?s:Math.min(Math.max(-s,-l),s),g=-f*f+p*(p+2*l)+c);else p=a>0?-s:s,f=Math.max(0,-(a*p+o)),g=-f*f+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(iu).addScaledVector(wo,p),g}intersectSphere(e,n){Qn.subVectors(e.center,this.origin);const i=Qn.dot(this.direction),r=Qn.dot(Qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),d>=0?(s=(e.min.y-p.y)*d,a=(e.max.y-p.y)*d):(s=(e.max.y-p.y)*d,a=(e.min.y-p.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(o=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,n,i,r,s){ru.subVectors(n,e),To.subVectors(i,e),su.crossVectors(ru,To);let a=this.direction.dot(su),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wi.subVectors(this.origin,e);const l=o*this.direction.dot(To.crossVectors(wi,To));if(l<0)return null;const c=o*this.direction.dot(ru.cross(wi));if(c<0||l+c>a)return null;const d=-o*wi.dot(su);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(e,n,i,r,s,a,o,l,c,d,f,p,g,v,_,m){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,d,f,p,g,v,_,m)}set(e,n,i,r,s,a,o,l,c,d,f,p,g,v,_,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=d,h[10]=f,h[14]=p,h[3]=g,h[7]=v,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Hr.setFromMatrixColumn(e,0).length(),s=1/Hr.setFromMatrixColumn(e,1).length(),a=1/Hr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const p=a*d,g=a*f,v=o*d,_=o*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=g+v*c,n[5]=p-_*c,n[9]=-o*l,n[2]=_-p*c,n[6]=v+g*c,n[10]=a*l}else if(e.order==="YXZ"){const p=l*d,g=l*f,v=c*d,_=c*f;n[0]=p+_*o,n[4]=v*o-g,n[8]=a*c,n[1]=a*f,n[5]=a*d,n[9]=-o,n[2]=g*o-v,n[6]=_+p*o,n[10]=a*l}else if(e.order==="ZXY"){const p=l*d,g=l*f,v=c*d,_=c*f;n[0]=p-_*o,n[4]=-a*f,n[8]=v+g*o,n[1]=g+v*o,n[5]=a*d,n[9]=_-p*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const p=a*d,g=a*f,v=o*d,_=o*f;n[0]=l*d,n[4]=v*c-g,n[8]=p*c+_,n[1]=l*f,n[5]=_*c+p,n[9]=g*c-v,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const p=a*l,g=a*c,v=o*l,_=o*c;n[0]=l*d,n[4]=_-p*f,n[8]=v*f+g,n[1]=f,n[5]=a*d,n[9]=-o*d,n[2]=-c*d,n[6]=g*f+v,n[10]=p-_*f}else if(e.order==="XZY"){const p=a*l,g=a*c,v=o*l,_=o*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=p*f+_,n[5]=a*d,n[9]=g*f-v,n[2]=v*f-g,n[6]=o*d,n[10]=_*f+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(b1,e,P1)}lookAt(e,n,i){const r=this.elements;return on.subVectors(e,n),on.lengthSq()===0&&(on.z=1),on.normalize(),Ti.crossVectors(i,on),Ti.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Ti.crossVectors(i,on)),Ti.normalize(),Co.crossVectors(on,Ti),r[0]=Ti.x,r[4]=Co.x,r[8]=on.x,r[1]=Ti.y,r[5]=Co.y,r[9]=on.y,r[2]=Ti.z,r[6]=Co.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],f=i[5],p=i[9],g=i[13],v=i[2],_=i[6],m=i[10],h=i[14],y=i[3],x=i[7],S=i[11],P=i[15],R=r[0],w=r[4],T=r[8],M=r[12],E=r[1],C=r[5],I=r[9],F=r[13],z=r[2],H=r[6],V=r[10],$=r[14],D=r[3],K=r[7],J=r[11],se=r[15];return s[0]=a*R+o*E+l*z+c*D,s[4]=a*w+o*C+l*H+c*K,s[8]=a*T+o*I+l*V+c*J,s[12]=a*M+o*F+l*$+c*se,s[1]=d*R+f*E+p*z+g*D,s[5]=d*w+f*C+p*H+g*K,s[9]=d*T+f*I+p*V+g*J,s[13]=d*M+f*F+p*$+g*se,s[2]=v*R+_*E+m*z+h*D,s[6]=v*w+_*C+m*H+h*K,s[10]=v*T+_*I+m*V+h*J,s[14]=v*M+_*F+m*$+h*se,s[3]=y*R+x*E+S*z+P*D,s[7]=y*w+x*C+S*H+P*K,s[11]=y*T+x*I+S*V+P*J,s[15]=y*M+x*F+S*$+P*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],p=e[10],g=e[14],v=e[3],_=e[7],m=e[11],h=e[15];return v*(+s*l*f-r*c*f-s*o*p+i*c*p+r*o*g-i*l*g)+_*(+n*l*g-n*c*p+s*a*p-r*a*g+r*c*d-s*l*d)+m*(+n*c*f-n*o*g-s*a*f+i*a*g+s*o*d-i*c*d)+h*(-r*o*d-n*l*f+n*o*p+r*a*f-i*a*p+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],p=e[10],g=e[11],v=e[12],_=e[13],m=e[14],h=e[15],y=f*m*c-_*p*c+_*l*g-o*m*g-f*l*h+o*p*h,x=v*p*c-d*m*c-v*l*g+a*m*g+d*l*h-a*p*h,S=d*_*c-v*f*c+v*o*g-a*_*g-d*o*h+a*f*h,P=v*f*l-d*_*l-v*o*p+a*_*p+d*o*m-a*f*m,R=n*y+i*x+r*S+s*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=y*w,e[1]=(_*p*s-f*m*s-_*r*g+i*m*g+f*r*h-i*p*h)*w,e[2]=(o*m*s-_*l*s+_*r*c-i*m*c-o*r*h+i*l*h)*w,e[3]=(f*l*s-o*p*s-f*r*c+i*p*c+o*r*g-i*l*g)*w,e[4]=x*w,e[5]=(d*m*s-v*p*s+v*r*g-n*m*g-d*r*h+n*p*h)*w,e[6]=(v*l*s-a*m*s-v*r*c+n*m*c+a*r*h-n*l*h)*w,e[7]=(a*p*s-d*l*s+d*r*c-n*p*c-a*r*g+n*l*g)*w,e[8]=S*w,e[9]=(v*f*s-d*_*s-v*i*g+n*_*g+d*i*h-n*f*h)*w,e[10]=(a*_*s-v*o*s+v*i*c-n*_*c-a*i*h+n*o*h)*w,e[11]=(d*o*s-a*f*s-d*i*c+n*f*c+a*i*g-n*o*g)*w,e[12]=P*w,e[13]=(d*_*r-v*f*r+v*i*p-n*_*p-d*i*m+n*f*m)*w,e[14]=(v*o*r-a*_*r-v*i*l+n*_*l+a*i*m-n*o*m)*w,e[15]=(a*f*r-d*o*r+d*i*l-n*f*l-a*i*p+n*o*p)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,d=a+a,f=o+o,p=s*c,g=s*d,v=s*f,_=a*d,m=a*f,h=o*f,y=l*c,x=l*d,S=l*f,P=i.x,R=i.y,w=i.z;return r[0]=(1-(_+h))*P,r[1]=(g+S)*P,r[2]=(v-x)*P,r[3]=0,r[4]=(g-S)*R,r[5]=(1-(p+h))*R,r[6]=(m+y)*R,r[7]=0,r[8]=(v+x)*w,r[9]=(m-y)*w,r[10]=(1-(p+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Hr.set(r[0],r[1],r[2]).length();const a=Hr.set(r[4],r[5],r[6]).length(),o=Hr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Rn.copy(this);const c=1/s,d=1/a,f=1/o;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=d,Rn.elements[5]*=d,Rn.elements[6]*=d,Rn.elements[8]*=f,Rn.elements[9]*=f,Rn.elements[10]*=f,n.setFromRotationMatrix(Rn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=ui){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let g,v;if(o===ui)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===zl)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ui){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(a-s),p=(n+e)*c,g=(i+r)*d;let v,_;if(o===ui)v=(a+s)*f,_=-2*f;else if(o===zl)v=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Hr=new W,Rn=new wt,b1=new W(0,0,0),P1=new W(1,1,1),Ti=new W,Co=new W,on=new W,om=new wt,lm=new qa;class vi{constructor(e=0,n=0,i=0,r=vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],f=r[2],p=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return om.makeRotationFromQuaternion(e),this.setFromRotationMatrix(om,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return lm.setFromEuler(this),this.setFromQuaternion(lm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vi.DEFAULT_ORDER="XYZ";class q0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let N1=0;const cm=new W,Vr=new qa,ei=new wt,Ao=new W,Qs=new W,L1=new W,I1=new qa,um=new W(1,0,0),dm=new W(0,1,0),hm=new W(0,0,1),fm={type:"added"},D1={type:"removed"},Gr={type:"childadded",child:null},au={type:"childremoved",child:null};class hn extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:N1++}),this.uuid=Xa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new W,n=new vi,i=new qa,r=new W(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new ke}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new q0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Vr.setFromAxisAngle(e,n),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(e,n){return Vr.setFromAxisAngle(e,n),this.quaternion.premultiply(Vr),this}rotateX(e){return this.rotateOnAxis(um,e)}rotateY(e){return this.rotateOnAxis(dm,e)}rotateZ(e){return this.rotateOnAxis(hm,e)}translateOnAxis(e,n){return cm.copy(e).applyQuaternion(this.quaternion),this.position.add(cm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(um,e)}translateY(e){return this.translateOnAxis(dm,e)}translateZ(e){return this.translateOnAxis(hm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ao.copy(e):Ao.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Qs,Ao,this.up):ei.lookAt(Ao,Qs,this.up),this.quaternion.setFromRotationMatrix(ei),r&&(ei.extractRotation(r.matrixWorld),Vr.setFromRotationMatrix(ei),this.quaternion.premultiply(Vr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fm),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(D1),au.child=e,this.dispatchEvent(au),au.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fm),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,e,L1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,I1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),f=a(e.shapes),p=a(e.skeletons),g=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),g.length>0&&(i.animations=g),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}hn.DEFAULT_UP=new W(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new W,ti=new W,ou=new W,ni=new W,Wr=new W,Xr=new W,pm=new W,lu=new W,cu=new W,uu=new W;class Xn{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),bn.subVectors(e,n),r.cross(bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){bn.subVectors(r,n),ti.subVectors(i,n),ou.subVectors(e,n);const a=bn.dot(bn),o=bn.dot(ti),l=bn.dot(ou),c=ti.dot(ti),d=ti.dot(ou),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const p=1/f,g=(c*l-o*d)*p,v=(a*d-o*l)*p;return s.set(1-g-v,v,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ni.x),l.addScaledVector(a,ni.y),l.addScaledVector(o,ni.z),l)}static isFrontFacing(e,n,i,r){return bn.subVectors(i,n),ti.subVectors(e,n),bn.cross(ti).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),bn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Xn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Xn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Wr.subVectors(r,i),Xr.subVectors(s,i),lu.subVectors(e,i);const l=Wr.dot(lu),c=Xr.dot(lu);if(l<=0&&c<=0)return n.copy(i);cu.subVectors(e,r);const d=Wr.dot(cu),f=Xr.dot(cu);if(d>=0&&f<=d)return n.copy(r);const p=l*f-d*c;if(p<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(Wr,a);uu.subVectors(e,s);const g=Wr.dot(uu),v=Xr.dot(uu);if(v>=0&&g<=v)return n.copy(s);const _=g*c-l*v;if(_<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(Xr,o);const m=d*v-g*f;if(m<=0&&f-d>=0&&g-v>=0)return pm.subVectors(s,r),o=(f-d)/(f-d+(g-v)),n.copy(r).addScaledVector(pm,o);const h=1/(m+_+p);return a=_*h,o=p*h,n.copy(i).addScaledVector(Wr,a).addScaledVector(Xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function du(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class tt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=_1(e,1),n=Zt(n,0,1),i=Zt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=du(a,s,e+1/3),this.g=du(a,s,e),this.b=du(a,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=Vn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Vn){const i=$0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}copyLinearToSRGB(e){return this.r=Jc(e.r),this.g=Jc(e.g),this.b=Jc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vn){return Qe.fromWorkingColorSpace(jt.copy(this),e),Math.round(Zt(jt.r*255,0,255))*65536+Math.round(Zt(jt.g*255,0,255))*256+Math.round(Zt(jt.b*255,0,255))}getHexString(e=Vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(jt.copy(this),n);const i=jt.r,r=jt.g,s=jt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=d<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Vn){Qe.fromWorkingColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,r=jt.b;return e!==Vn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+n,Ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ci),e.getHSL(Ro);const i=Kc(Ci.h,Ro.h,n),r=Kc(Ci.s,Ro.s,n),s=Kc(Ci.l,Ro.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new tt;tt.NAMES=$0;let U1=0;class lc extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:U1++}),this.uuid=Xa(),this.name="",this.type="Material",this.blending=xs,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Md,this.blendDst=Ed,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Ul,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=em,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(i.blending=this.blending),this.side!==Ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Md&&(i.blendSrc=this.blendSrc),this.blendDst!==Ed&&(i.blendDst=this.blendDst),this.blendEquation!==fr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ul&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==em&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Or&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Or&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Or&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Y0 extends lc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=N0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new W,bo=new He;class Kn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=tm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return va("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)bo.fromBufferAttribute(this,n),bo.applyMatrix3(e),this.setXY(n,bo.x,bo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ys(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Yt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ys(n,this.array)),n}setX(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ys(n,this.array)),n}setY(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ys(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ys(n,this.array)),n}setW(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array),r=Yt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array),r=Yt(r,this.array),s=Yt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tm&&(e.usage=this.usage),e}}class K0 extends Kn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Z0 extends Kn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Mr extends Kn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let F1=0;const vn=new wt,hu=new hn,qr=new W,ln=new $a,ea=new $a,At=new W;class Dr extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:F1++}),this.uuid=Xa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(G0(e)?Z0:K0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,n,i){return vn.makeTranslation(e,n,i),this.applyMatrix4(vn),this}scale(e,n,i){return vn.makeScale(e,n,i),this.applyMatrix4(vn),this}lookAt(e){return hu.lookAt(e),hu.updateMatrix(),this.applyMatrix4(hu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Mr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $a);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new af);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ea.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(ln.min,ea.min),ln.expandByPoint(At),At.addVectors(ln.max,ea.max),ln.expandByPoint(At)):(ln.expandByPoint(ea.min),ln.expandByPoint(ea.max))}ln.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)At.fromBufferAttribute(o,c),l&&(qr.fromBufferAttribute(e,c),At.add(qr)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let T=0;T<i.count;T++)o[T]=new W,l[T]=new W;const c=new W,d=new W,f=new W,p=new He,g=new He,v=new He,_=new W,m=new W;function h(T,M,E){c.fromBufferAttribute(i,T),d.fromBufferAttribute(i,M),f.fromBufferAttribute(i,E),p.fromBufferAttribute(s,T),g.fromBufferAttribute(s,M),v.fromBufferAttribute(s,E),d.sub(c),f.sub(c),g.sub(p),v.sub(p);const C=1/(g.x*v.y-v.x*g.y);isFinite(C)&&(_.copy(d).multiplyScalar(v.y).addScaledVector(f,-g.y).multiplyScalar(C),m.copy(f).multiplyScalar(g.x).addScaledVector(d,-v.x).multiplyScalar(C),o[T].add(_),o[M].add(_),o[E].add(_),l[T].add(m),l[M].add(m),l[E].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let T=0,M=y.length;T<M;++T){const E=y[T],C=E.start,I=E.count;for(let F=C,z=C+I;F<z;F+=3)h(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const x=new W,S=new W,P=new W,R=new W;function w(T){P.fromBufferAttribute(r,T),R.copy(P);const M=o[T];x.copy(M),x.sub(P.multiplyScalar(P.dot(M))).normalize(),S.crossVectors(R,M);const C=S.dot(l[T])<0?-1:1;a.setXYZW(T,x.x,x.y,x.z,C)}for(let T=0,M=y.length;T<M;++T){const E=y[T],C=E.start,I=E.count;for(let F=C,z=C+I;F<z;F+=3)w(e.getX(F+0)),w(e.getX(F+1)),w(e.getX(F+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,g=i.count;p<g;p++)i.setXYZ(p,0,0,0);const r=new W,s=new W,a=new W,o=new W,l=new W,c=new W,d=new W,f=new W;if(e)for(let p=0,g=e.count;p<g;p+=3){const v=e.getX(p+0),_=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,m),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(d),l.add(d),c.add(d),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,g=n.count;p<g;p+=3)r.fromBufferAttribute(n,p+0),s.fromBufferAttribute(n,p+1),a.fromBufferAttribute(n,p+2),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),i.setXYZ(p+0,d.x,d.y,d.z),i.setXYZ(p+1,d.x,d.y,d.z),i.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)At.fromBufferAttribute(e,n),At.normalize(),e.setXYZ(n,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,p=new c.constructor(l.length*d);let g=0,v=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?g=l[_]*o.data.stride+o.offset:g=l[_]*d;for(let h=0;h<d;h++)p[v++]=c[g++]}return new Kn(p,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Dr,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,f=c.length;d<f;d++){const p=c[d],g=e(p,i);l.push(g)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,p=c.length;f<p;f++){const g=c[f];d.push(g.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let p=0,g=f.length;p<g;p++)d.push(f[p].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mm=new wt,sr=new R1,Po=new af,gm=new W,$r=new W,Yr=new W,Kr=new W,fu=new W,No=new W,Lo=new He,Io=new He,Do=new He,vm=new W,_m=new W,xm=new W,Uo=new W,Fo=new W;class qn extends hn{constructor(e=new Dr,n=new Y0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){No.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],f=s[l];d!==0&&(fu.fromBufferAttribute(f,e),a?No.addScaledVector(fu,d):No.addScaledVector(fu.sub(n),d))}n.add(No)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Po.copy(i.boundingSphere),Po.applyMatrix4(s),sr.copy(e.ray).recast(e.near),!(Po.containsPoint(sr.origin)===!1&&(sr.intersectSphere(Po,gm)===null||sr.origin.distanceToSquared(gm)>(e.far-e.near)**2))&&(mm.copy(s).invert(),sr.copy(e.ray).applyMatrix4(mm),!(i.boundingBox!==null&&sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,sr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,p=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,_=p.length;v<_;v++){const m=p[v],h=a[m.materialIndex],y=Math.max(m.start,g.start),x=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let S=y,P=x;S<P;S+=3){const R=o.getX(S),w=o.getX(S+1),T=o.getX(S+2);r=Oo(this,h,e,i,c,d,f,R,w,T),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,g.start),_=Math.min(o.count,g.start+g.count);for(let m=v,h=_;m<h;m+=3){const y=o.getX(m),x=o.getX(m+1),S=o.getX(m+2);r=Oo(this,a,e,i,c,d,f,y,x,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,_=p.length;v<_;v++){const m=p[v],h=a[m.materialIndex],y=Math.max(m.start,g.start),x=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let S=y,P=x;S<P;S+=3){const R=S,w=S+1,T=S+2;r=Oo(this,h,e,i,c,d,f,R,w,T),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,g.start),_=Math.min(l.count,g.start+g.count);for(let m=v,h=_;m<h;m+=3){const y=m,x=m+1,S=m+2;r=Oo(this,a,e,i,c,d,f,y,x,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function O1(t,e,n,i,r,s,a,o){let l;if(e.side===nn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Ki,o),l===null)return null;Fo.copy(o),Fo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Fo);return c<n.near||c>n.far?null:{distance:c,point:Fo.clone(),object:t}}function Oo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,$r),t.getVertexPosition(l,Yr),t.getVertexPosition(c,Kr);const d=O1(t,e,n,i,$r,Yr,Kr,Uo);if(d){r&&(Lo.fromBufferAttribute(r,o),Io.fromBufferAttribute(r,l),Do.fromBufferAttribute(r,c),d.uv=Xn.getInterpolation(Uo,$r,Yr,Kr,Lo,Io,Do,new He)),s&&(Lo.fromBufferAttribute(s,o),Io.fromBufferAttribute(s,l),Do.fromBufferAttribute(s,c),d.uv1=Xn.getInterpolation(Uo,$r,Yr,Kr,Lo,Io,Do,new He)),a&&(vm.fromBufferAttribute(a,o),_m.fromBufferAttribute(a,l),xm.fromBufferAttribute(a,c),d.normal=Xn.getInterpolation(Uo,$r,Yr,Kr,vm,_m,xm,new W),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new W,materialIndex:0};Xn.getNormal($r,Yr,Kr,f.normal),d.face=f}return d}class Ya extends Dr{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],f=[];let p=0,g=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Mr(c,3)),this.setAttribute("normal",new Mr(d,3)),this.setAttribute("uv",new Mr(f,2));function v(_,m,h,y,x,S,P,R,w,T,M){const E=S/w,C=P/T,I=S/2,F=P/2,z=R/2,H=w+1,V=T+1;let $=0,D=0;const K=new W;for(let J=0;J<V;J++){const se=J*C-F;for(let xe=0;xe<H;xe++){const ue=xe*E-I;K[_]=ue*y,K[m]=se*x,K[h]=z,c.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[h]=R>0?1:-1,d.push(K.x,K.y,K.z),f.push(xe/w),f.push(1-J/T),$+=1}}for(let J=0;J<T;J++)for(let se=0;se<w;se++){const xe=p+se+H*J,ue=p+se+H*(J+1),j=p+(se+1)+H*(J+1),Y=p+(se+1)+H*J;l.push(xe,ue,Y),l.push(ue,j,Y),D+=6}o.addGroup(g,D,M),g+=D,p+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ya(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ds(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Gt(t){const e={};for(let n=0;n<t.length;n++){const i=Ds(t[n]);for(const r in i)e[r]=i[r]}return e}function k1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function J0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const z1={clone:Ds,merge:Gt};var B1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,j1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends lc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=B1,this.fragmentShader=j1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=k1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Q0 extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=ui}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new W,ym=new He,Sm=new He;class In extends Q0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=eh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return eh*2*Math.atan(Math.tan(Yc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,n){return this.getViewBounds(e,ym,Sm),n.subVectors(Sm,ym)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Yc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Zr=-90,Jr=1;class H1 extends hn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new In(Zr,Jr,e,n);r.layers=this.layers,this.add(r);const s=new In(Zr,Jr,e,n);s.layers=this.layers,this.add(s);const a=new In(Zr,Jr,e,n);a.layers=this.layers,this.add(a);const o=new In(Zr,Jr,e,n);o.layers=this.layers,this.add(o);const l=new In(Zr,Jr,e,n);l.layers=this.layers,this.add(l);const c=new In(Zr,Jr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,p,g),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class e_ extends rn{constructor(e,n,i,r,s,a,o,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Ps,super(e,n,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class V1 extends br{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new e_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Dn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ya(5,5,5),s=new _i({name:"CubemapFromEquirect",uniforms:Ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Xi});s.uniforms.tEquirect.value=n;const a=new qn(r,s),o=n.minFilter;return n.minFilter===xr&&(n.minFilter=Dn),new H1(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const pu=new W,G1=new W,W1=new ke;class dr{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=pu.subVectors(i,n).cross(G1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(pu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||W1.getNormalMatrix(e),r=this.coplanarPoint(pu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new af,ko=new W;class t_{constructor(e=new dr,n=new dr,i=new dr,r=new dr,s=new dr,a=new dr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ui){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],d=r[5],f=r[6],p=r[7],g=r[8],v=r[9],_=r[10],m=r[11],h=r[12],y=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,p-c,m-g,S-h).normalize(),i[1].setComponents(l+s,p+c,m+g,S+h).normalize(),i[2].setComponents(l+a,p+d,m+v,S+y).normalize(),i[3].setComponents(l-a,p-d,m-v,S-y).normalize(),i[4].setComponents(l-o,p-f,m-_,S-x).normalize(),n===ui)i[5].setComponents(l+o,p+f,m+_,S+x).normalize();else if(n===zl)i[5].setComponents(o,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){return ar.center.set(0,0,0),ar.radius=.7071067811865476,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ko.x=r.normal.x>0?e.max.x:e.min.x,ko.y=r.normal.y>0?e.max.y:e.min.y,ko.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ko)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function n_(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function X1(t){const e=new WeakMap;function n(o,l){const c=o.array,d=o.usage,f=c.byteLength,p=t.createBuffer();t.bindBuffer(l,p),t.bufferData(l,c,d),o.onUploadCallback();let g;if(c instanceof Float32Array)g=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=t.SHORT;else if(c instanceof Uint32Array)g=t.UNSIGNED_INT;else if(c instanceof Int32Array)g=t.INT;else if(c instanceof Int8Array)g=t.BYTE;else if(c instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const d=l.array,f=l._updateRange,p=l.updateRanges;if(t.bindBuffer(c,o),f.count===-1&&p.length===0&&t.bufferSubData(c,0,d),p.length!==0){for(let g=0,v=p.length;g<v;g++){const _=p[g];t.bufferSubData(c,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}f.count!==-1&&(t.bufferSubData(c,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Ka extends Dr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,f=e/o,p=n/l,g=[],v=[],_=[],m=[];for(let h=0;h<d;h++){const y=h*p-a;for(let x=0;x<c;x++){const S=x*f-s;v.push(S,-y,0),_.push(0,0,1),m.push(x/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let y=0;y<o;y++){const x=y+c*h,S=y+c*(h+1),P=y+1+c*(h+1),R=y+1+c*h;g.push(x,S,R),g.push(S,P,R)}this.setIndex(g),this.setAttribute("position",new Mr(v,3)),this.setAttribute("normal",new Mr(_,3)),this.setAttribute("uv",new Mr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.width,e.height,e.widthSegments,e.heightSegments)}}var q1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$1=`#ifdef USE_ALPHAHASH
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
#endif`,Y1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,K1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,J1=`#ifdef USE_ALPHATEST
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
#endif`,ew=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tw=`#ifdef USE_BATCHING
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
#endif`,nw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,aw=`#ifdef USE_IRIDESCENCE
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
#endif`,ow=`#ifdef USE_BUMPMAP
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
#endif`,lw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mw=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gw=`#define PI 3.141592653589793
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
} // validated`,vw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_w=`vec3 transformedNormal = objectNormal;
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
#endif`,xw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ew="gl_FragColor = linearToOutputTexel( gl_FragColor );",ww=`
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
}`,Tw=`#ifdef USE_ENVMAP
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
#endif`,Cw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Aw=`#ifdef USE_ENVMAP
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
#endif`,Rw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bw=`#ifdef USE_ENVMAP
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
#endif`,Pw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Iw=`#ifdef USE_FOG
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
#endif`,Fw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ow=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kw=`uniform bool receiveShadow;
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
#endif`,zw=`#ifdef USE_ENVMAP
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
#endif`,Bw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jw=`varying vec3 vViewPosition;
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
#endif`,Ww=`struct PhysicalMaterial {
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
}`,Xw=`
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
#endif`,qw=`#if defined( RE_IndirectDiffuse )
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
#endif`,$w=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nT=`#if defined( USE_POINTS_UV )
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
#endif`,iT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,aT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lT=`#ifdef USE_MORPHTARGETS
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
#endif`,cT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mT=`#ifdef USE_NORMALMAP
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
#endif`,gT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_T=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ST=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,MT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ET=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,AT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,NT=`float getShadowMask() {
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
}`,LT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,IT=`#ifdef USE_SKINNING
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
#endif`,FT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,BT=`#ifdef USE_TRANSMISSION
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
#endif`,jT=`#ifdef USE_TRANSMISSION
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
#endif`,WT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qT=`uniform sampler2D t2D;
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
}`,$T=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,KT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JT=`#include <common>
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
}`,eC=`#define DISTANCE
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
}`,tC=`#define DISTANCE
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
}`,nC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rC=`uniform float scale;
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
}`,sC=`uniform vec3 diffuse;
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
}`,aC=`#include <common>
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
}`,oC=`uniform vec3 diffuse;
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
}`,lC=`#define LAMBERT
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
}`,cC=`#define LAMBERT
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
}`,uC=`#define MATCAP
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
}`,dC=`#define MATCAP
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
}`,hC=`#define NORMAL
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
}`,fC=`#define NORMAL
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
}`,pC=`#define PHONG
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
}`,mC=`#define PHONG
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
}`,gC=`#define STANDARD
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
}`,vC=`#define STANDARD
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
}`,_C=`#define TOON
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
}`,xC=`#define TOON
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
}`,yC=`uniform float size;
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
}`,SC=`uniform vec3 diffuse;
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
}`,MC=`#include <common>
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
}`,EC=`uniform vec3 color;
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
}`,wC=`uniform float rotation;
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
}`,TC=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:q1,alphahash_pars_fragment:$1,alphamap_fragment:Y1,alphamap_pars_fragment:K1,alphatest_fragment:Z1,alphatest_pars_fragment:J1,aomap_fragment:Q1,aomap_pars_fragment:ew,batching_pars_vertex:tw,batching_vertex:nw,begin_vertex:iw,beginnormal_vertex:rw,bsdfs:sw,iridescence_fragment:aw,bumpmap_pars_fragment:ow,clipping_planes_fragment:lw,clipping_planes_pars_fragment:cw,clipping_planes_pars_vertex:uw,clipping_planes_vertex:dw,color_fragment:hw,color_pars_fragment:fw,color_pars_vertex:pw,color_vertex:mw,common:gw,cube_uv_reflection_fragment:vw,defaultnormal_vertex:_w,displacementmap_pars_vertex:xw,displacementmap_vertex:yw,emissivemap_fragment:Sw,emissivemap_pars_fragment:Mw,colorspace_fragment:Ew,colorspace_pars_fragment:ww,envmap_fragment:Tw,envmap_common_pars_fragment:Cw,envmap_pars_fragment:Aw,envmap_pars_vertex:Rw,envmap_physical_pars_fragment:zw,envmap_vertex:bw,fog_vertex:Pw,fog_pars_vertex:Nw,fog_fragment:Lw,fog_pars_fragment:Iw,gradientmap_pars_fragment:Dw,lightmap_pars_fragment:Uw,lights_lambert_fragment:Fw,lights_lambert_pars_fragment:Ow,lights_pars_begin:kw,lights_toon_fragment:Bw,lights_toon_pars_fragment:jw,lights_phong_fragment:Hw,lights_phong_pars_fragment:Vw,lights_physical_fragment:Gw,lights_physical_pars_fragment:Ww,lights_fragment_begin:Xw,lights_fragment_maps:qw,lights_fragment_end:$w,logdepthbuf_fragment:Yw,logdepthbuf_pars_fragment:Kw,logdepthbuf_pars_vertex:Zw,logdepthbuf_vertex:Jw,map_fragment:Qw,map_pars_fragment:eT,map_particle_fragment:tT,map_particle_pars_fragment:nT,metalnessmap_fragment:iT,metalnessmap_pars_fragment:rT,morphinstance_vertex:sT,morphcolor_vertex:aT,morphnormal_vertex:oT,morphtarget_pars_vertex:lT,morphtarget_vertex:cT,normal_fragment_begin:uT,normal_fragment_maps:dT,normal_pars_fragment:hT,normal_pars_vertex:fT,normal_vertex:pT,normalmap_pars_fragment:mT,clearcoat_normal_fragment_begin:gT,clearcoat_normal_fragment_maps:vT,clearcoat_pars_fragment:_T,iridescence_pars_fragment:xT,opaque_fragment:yT,packing:ST,premultiplied_alpha_fragment:MT,project_vertex:ET,dithering_fragment:wT,dithering_pars_fragment:TT,roughnessmap_fragment:CT,roughnessmap_pars_fragment:AT,shadowmap_pars_fragment:RT,shadowmap_pars_vertex:bT,shadowmap_vertex:PT,shadowmask_pars_fragment:NT,skinbase_vertex:LT,skinning_pars_vertex:IT,skinning_vertex:DT,skinnormal_vertex:UT,specularmap_fragment:FT,specularmap_pars_fragment:OT,tonemapping_fragment:kT,tonemapping_pars_fragment:zT,transmission_fragment:BT,transmission_pars_fragment:jT,uv_pars_fragment:HT,uv_pars_vertex:VT,uv_vertex:GT,worldpos_vertex:WT,background_vert:XT,background_frag:qT,backgroundCube_vert:$T,backgroundCube_frag:YT,cube_vert:KT,cube_frag:ZT,depth_vert:JT,depth_frag:QT,distanceRGBA_vert:eC,distanceRGBA_frag:tC,equirect_vert:nC,equirect_frag:iC,linedashed_vert:rC,linedashed_frag:sC,meshbasic_vert:aC,meshbasic_frag:oC,meshlambert_vert:lC,meshlambert_frag:cC,meshmatcap_vert:uC,meshmatcap_frag:dC,meshnormal_vert:hC,meshnormal_frag:fC,meshphong_vert:pC,meshphong_frag:mC,meshphysical_vert:gC,meshphysical_frag:vC,meshtoon_vert:_C,meshtoon_frag:xC,points_vert:yC,points_frag:SC,shadow_vert:MC,shadow_frag:EC,sprite_vert:wC,sprite_frag:TC},he={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Gn={basic:{uniforms:Gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new tt(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Gt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Gt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new tt(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Gt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Gt([he.points,he.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Gt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Gt([he.common,he.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Gt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Gt([he.sprite,he.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Gt([he.common,he.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Gt([he.lights,he.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Gn.physical={uniforms:Gt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const zo={r:0,b:0,g:0},or=new vi,CC=new wt;function AC(t,e,n,i,r,s,a){const o=new tt(0);let l=s===!0?0:1,c,d,f=null,p=0,g=null;function v(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?n:e).get(x)),x}function _(y){let x=!1;const S=v(y);S===null?h(o,l):S&&S.isColor&&(h(S,1),x=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(y,x){const S=v(x);S&&(S.isCubeTexture||S.mapping===ac)?(d===void 0&&(d=new qn(new Ya(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:Ds(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),or.copy(x.backgroundRotation),or.x*=-1,or.y*=-1,or.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),d.material.uniforms.envMap.value=S,d.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(CC.makeRotationFromEuler(or)),d.material.toneMapped=Qe.getTransfer(S.colorSpace)!==rt,(f!==S||p!==S.version||g!==t.toneMapping)&&(d.material.needsUpdate=!0,f=S,p=S.version,g=t.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new qn(new Ka(2,2),new _i({name:"BackgroundMaterial",uniforms:Ds(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(S.colorSpace)!==rt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||p!==S.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,f=S,p=S.version,g=t.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function h(y,x){y.getRGB(zo,J0(t)),i.buffers.color.setClear(zo.r,zo.g,zo.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),l=x,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,h(o,l)},render:_,addToRenderList:m}}function RC(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,a=!1;function o(E,C,I,F,z){let H=!1;const V=f(F,I,C);s!==V&&(s=V,c(s.object)),H=g(E,F,I,z),H&&v(E,F,I,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,S(E,C,I,F),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return t.createVertexArray()}function c(E){return t.bindVertexArray(E)}function d(E){return t.deleteVertexArray(E)}function f(E,C,I){const F=I.wireframe===!0;let z=i[E.id];z===void 0&&(z={},i[E.id]=z);let H=z[C.id];H===void 0&&(H={},z[C.id]=H);let V=H[F];return V===void 0&&(V=p(l()),H[F]=V),V}function p(E){const C=[],I=[],F=[];for(let z=0;z<n;z++)C[z]=0,I[z]=0,F[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:I,attributeDivisors:F,object:E,attributes:{},index:null}}function g(E,C,I,F){const z=s.attributes,H=C.attributes;let V=0;const $=I.getAttributes();for(const D in $)if($[D].location>=0){const J=z[D];let se=H[D];if(se===void 0&&(D==="instanceMatrix"&&E.instanceMatrix&&(se=E.instanceMatrix),D==="instanceColor"&&E.instanceColor&&(se=E.instanceColor)),J===void 0||J.attribute!==se||se&&J.data!==se.data)return!0;V++}return s.attributesNum!==V||s.index!==F}function v(E,C,I,F){const z={},H=C.attributes;let V=0;const $=I.getAttributes();for(const D in $)if($[D].location>=0){let J=H[D];J===void 0&&(D==="instanceMatrix"&&E.instanceMatrix&&(J=E.instanceMatrix),D==="instanceColor"&&E.instanceColor&&(J=E.instanceColor));const se={};se.attribute=J,J&&J.data&&(se.data=J.data),z[D]=se,V++}s.attributes=z,s.attributesNum=V,s.index=F}function _(){const E=s.newAttributes;for(let C=0,I=E.length;C<I;C++)E[C]=0}function m(E){h(E,0)}function h(E,C){const I=s.newAttributes,F=s.enabledAttributes,z=s.attributeDivisors;I[E]=1,F[E]===0&&(t.enableVertexAttribArray(E),F[E]=1),z[E]!==C&&(t.vertexAttribDivisor(E,C),z[E]=C)}function y(){const E=s.newAttributes,C=s.enabledAttributes;for(let I=0,F=C.length;I<F;I++)C[I]!==E[I]&&(t.disableVertexAttribArray(I),C[I]=0)}function x(E,C,I,F,z,H,V){V===!0?t.vertexAttribIPointer(E,C,I,z,H):t.vertexAttribPointer(E,C,I,F,z,H)}function S(E,C,I,F){_();const z=F.attributes,H=I.getAttributes(),V=C.defaultAttributeValues;for(const $ in H){const D=H[$];if(D.location>=0){let K=z[$];if(K===void 0&&($==="instanceMatrix"&&E.instanceMatrix&&(K=E.instanceMatrix),$==="instanceColor"&&E.instanceColor&&(K=E.instanceColor)),K!==void 0){const J=K.normalized,se=K.itemSize,xe=e.get(K);if(xe===void 0)continue;const ue=xe.buffer,j=xe.type,Y=xe.bytesPerElement,ne=j===t.INT||j===t.UNSIGNED_INT||K.gpuType===Jh;if(K.isInterleavedBufferAttribute){const ae=K.data,Me=ae.stride,Ee=K.offset;if(ae.isInstancedInterleavedBuffer){for(let Re=0;Re<D.locationSize;Re++)h(D.location+Re,ae.meshPerAttribute);E.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Re=0;Re<D.locationSize;Re++)m(D.location+Re);t.bindBuffer(t.ARRAY_BUFFER,ue);for(let Re=0;Re<D.locationSize;Re++)x(D.location+Re,se/D.locationSize,j,J,Me*Y,(Ee+se/D.locationSize*Re)*Y,ne)}else{if(K.isInstancedBufferAttribute){for(let ae=0;ae<D.locationSize;ae++)h(D.location+ae,K.meshPerAttribute);E.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ae=0;ae<D.locationSize;ae++)m(D.location+ae);t.bindBuffer(t.ARRAY_BUFFER,ue);for(let ae=0;ae<D.locationSize;ae++)x(D.location+ae,se/D.locationSize,j,J,se*Y,se/D.locationSize*ae*Y,ne)}}else if(V!==void 0){const J=V[$];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(D.location,J);break;case 3:t.vertexAttrib3fv(D.location,J);break;case 4:t.vertexAttrib4fv(D.location,J);break;default:t.vertexAttrib1fv(D.location,J)}}}}y()}function P(){T();for(const E in i){const C=i[E];for(const I in C){const F=C[I];for(const z in F)d(F[z].object),delete F[z];delete C[I]}delete i[E]}}function R(E){if(i[E.id]===void 0)return;const C=i[E.id];for(const I in C){const F=C[I];for(const z in F)d(F[z].object),delete F[z];delete C[I]}delete i[E.id]}function w(E){for(const C in i){const I=i[C];if(I[E.id]===void 0)continue;const F=I[E.id];for(const z in F)d(F[z].object),delete F[z];delete I[E.id]}}function T(){M(),a=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:M,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function bC(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function a(c,d,f){f!==0&&(t.drawArraysInstanced(i,c,d,f),n.update(d,i,f))}function o(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=d[v];n.update(g,i,1)}function l(c,d,f,p){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<c.length;v++)a(c[v],d[v],p[v]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,d,0,p,0,f);let v=0;for(let _=0;_<f;_++)v+=d[_];for(let _=0;_<p.length;_++)n.update(v,i,p[_])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function PC(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==Fn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const w=R===Wa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==gi&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ci&&!w)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),h=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,P=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:h,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:S,maxSamples:P}}function NC(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new dr,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const g=f.length!==0||p||i!==0||r;return r=p,i=f.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,p){n=d(f,p,0)},this.setState=function(f,p,g){const v=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||v===null||v.length===0||s&&!m)s?d(null):c();else{const y=s?0:i,x=y*4;let S=h.clippingState||null;l.value=S,S=d(v,p,x,g);for(let P=0;P!==x;++P)S[P]=n[P];h.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,p,g,v){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,v!==!0||m===null){const h=g+_*4,y=p.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<h)&&(m=new Float32Array(h));for(let x=0,S=g;x!==_;++x,S+=4)a.copy(f[x]).applyMatrix4(y,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function LC(t){let e=new WeakMap;function n(a,o){return o===wd?a.mapping=Ps:o===Td&&(a.mapping=Ns),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===wd||o===Td)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new V1(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class i_ extends Q0{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const hs=4,Mm=[.125,.215,.35,.446,.526,.582],pr=20,mu=new i_,Em=new tt;let gu=null,vu=0,_u=0,xu=!1;const hr=(1+Math.sqrt(5))/2,Qr=1/hr,wm=[new W(-hr,Qr,0),new W(hr,Qr,0),new W(-Qr,0,hr),new W(Qr,0,hr),new W(0,hr,-Qr),new W(0,hr,Qr),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class Tm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){gu=this._renderer.getRenderTarget(),vu=this._renderer.getActiveCubeFace(),_u=this._renderer.getActiveMipmapLevel(),xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Am(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gu,vu,_u),this._renderer.xr.enabled=xu,e.scissorTest=!1,Bo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ps||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gu=this._renderer.getRenderTarget(),vu=this._renderer.getActiveCubeFace(),_u=this._renderer.getActiveMipmapLevel(),xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Wa,format:Fn,colorSpace:tr,depthBuffer:!1},r=Cm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=IC(s)),this._blurMaterial=DC(s,e,n)}return r}_compileMaterial(e){const n=new qn(this._lodPlanes[0],e);this._renderer.compile(n,mu)}_sceneToCubeUV(e,n,i,r){const o=new In(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Em),d.toneMapping=qi,d.autoClear=!1;const g=new Y0({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),v=new qn(new Ya,g);let _=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,_=!0):(g.color.copy(Em),_=!0);for(let h=0;h<6;h++){const y=h%3;y===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):y===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const x=this._cubeSize;Bo(r,y*x,h>2?x:0,x,x),d.setRenderTarget(r),_&&d.render(v,o),d.render(e,o)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ps||e.mapping===Ns;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Am());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new qn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Bo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,mu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=wm[(r-s-1)%wm.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new qn(this._lodPlanes[r],c),p=c.uniforms,g=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*pr-1),_=s/v,m=isFinite(s)?1+Math.floor(d*_):pr;m>pr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${pr}`);const h=[];let y=0;for(let w=0;w<pr;++w){const T=w/_,M=Math.exp(-T*T/2);h.push(M),w===0?y+=M:w<m&&(y+=2*M)}for(let w=0;w<h.length;w++)h[w]=h[w]/y;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=h,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:x}=this;p.dTheta.value=v,p.mipInt.value=x-i;const S=this._sizeLods[r],P=3*S*(r>x-hs?r-x+hs:0),R=4*(this._cubeSize-S);Bo(n,P,R,3*S,2*S),l.setRenderTarget(n),l.render(f,mu)}}function IC(t){const e=[],n=[],i=[];let r=t;const s=t-hs+1+Mm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-hs?l=Mm[a-t+hs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,f=1+c,p=[d,d,f,d,f,f,d,d,f,f,d,f],g=6,v=6,_=3,m=2,h=1,y=new Float32Array(_*v*g),x=new Float32Array(m*v*g),S=new Float32Array(h*v*g);for(let R=0;R<g;R++){const w=R%3*2/3-1,T=R>2?0:-1,M=[w,T,0,w+2/3,T,0,w+2/3,T+1,0,w,T,0,w+2/3,T+1,0,w,T+1,0];y.set(M,_*v*R),x.set(p,m*v*R);const E=[R,R,R,R,R,R];S.set(E,h*v*R)}const P=new Dr;P.setAttribute("position",new Kn(y,_)),P.setAttribute("uv",new Kn(x,m)),P.setAttribute("faceIndex",new Kn(S,h)),e.push(P),r>hs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Cm(t,e,n){const i=new br(t,e,n);return i.texture.mapping=ac,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function DC(t,e,n){const i=new Float32Array(pr),r=new W(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:of(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Am(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:of(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Rm(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function of(){return`

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
	`}function UC(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===wd||l===Td,d=l===Ps||l===Ns;if(c||d){let f=e.get(o);const p=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return n===null&&(n=new Tm(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const g=o.image;return c&&g&&g.height>0||d&&g&&r(g)?(n===null&&(n=new Tm(t)),f=c?n.fromEquirectangular(o):n.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function FC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&va("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function OC(t,e,n,i){const r={},s=new WeakMap;function a(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const v in p.attributes)e.remove(p.attributes[v]);for(const v in p.morphAttributes){const _=p.morphAttributes[v];for(let m=0,h=_.length;m<h;m++)e.remove(_[m])}p.removeEventListener("dispose",a),delete r[p.id];const g=s.get(p);g&&(e.remove(g),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function o(f,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,n.memory.geometries++),p}function l(f){const p=f.attributes;for(const v in p)e.update(p[v],t.ARRAY_BUFFER);const g=f.morphAttributes;for(const v in g){const _=g[v];for(let m=0,h=_.length;m<h;m++)e.update(_[m],t.ARRAY_BUFFER)}}function c(f){const p=[],g=f.index,v=f.attributes.position;let _=0;if(g!==null){const y=g.array;_=g.version;for(let x=0,S=y.length;x<S;x+=3){const P=y[x+0],R=y[x+1],w=y[x+2];p.push(P,R,R,w,w,P)}}else if(v!==void 0){const y=v.array;_=v.version;for(let x=0,S=y.length/3-1;x<S;x+=3){const P=x+0,R=x+1,w=x+2;p.push(P,R,R,w,w,P)}}else return;const m=new(G0(p)?Z0:K0)(p,1);m.version=_;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function d(f){const p=s.get(f);if(p){const g=f.index;g!==null&&p.version<g.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function kC(t,e,n){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function l(p,g){t.drawElements(i,g,s,p*a),n.update(g,i,1)}function c(p,g,v){v!==0&&(t.drawElementsInstanced(i,g,s,p*a,v),n.update(g,i,v))}function d(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,p,0,v);let m=0;for(let h=0;h<v;h++)m+=g[h];n.update(m,i,1)}function f(p,g,v,_){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<p.length;h++)c(p[h]/a,g[h],_[h]);else{m.multiDrawElementsInstancedWEBGL(i,g,0,s,p,0,_,0,v);let h=0;for(let y=0;y<v;y++)h+=g[y];for(let y=0;y<_.length;y++)n.update(h,i,_[y])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function zC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function BC(t,e,n){const i=new WeakMap,r=new Pt;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let p=i.get(o);if(p===void 0||p.count!==f){let E=function(){T.dispose(),i.delete(o),o.removeEventListener("dispose",E)};var g=E;p!==void 0&&p.texture.dispose();const v=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let S=0;v===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let P=o.attributes.position.count*S,R=1;P>e.maxTextureSize&&(R=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const w=new Float32Array(P*R*4*f),T=new X0(w,P,R,f);T.type=ci,T.needsUpdate=!0;const M=S*4;for(let C=0;C<f;C++){const I=h[C],F=y[C],z=x[C],H=P*R*4*C;for(let V=0;V<I.count;V++){const $=V*M;v===!0&&(r.fromBufferAttribute(I,V),w[H+$+0]=r.x,w[H+$+1]=r.y,w[H+$+2]=r.z,w[H+$+3]=0),_===!0&&(r.fromBufferAttribute(F,V),w[H+$+4]=r.x,w[H+$+5]=r.y,w[H+$+6]=r.z,w[H+$+7]=0),m===!0&&(r.fromBufferAttribute(z,V),w[H+$+8]=r.x,w[H+$+9]=r.y,w[H+$+10]=r.z,w[H+$+11]=z.itemSize===4?r.w:1)}}p={count:f,texture:T,size:new He(P,R)},i.set(o,p),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const _=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}return{update:s}}function jC(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class r_ extends rn{constructor(e,n,i,r,s,a,o,l,c,d=ys){if(d!==ys&&d!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===ys&&(i=Rr),i===void 0&&d===Is&&(i=Ls),super(null,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Sn,this.minFilter=l!==void 0?l:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const s_=new rn,bm=new r_(1,1),a_=new X0,o_=new C1,l_=new e_,Pm=[],Nm=[],Lm=new Float32Array(16),Im=new Float32Array(9),Dm=new Float32Array(4);function Bs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Pm[r];if(s===void 0&&(s=new Float32Array(r),Pm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Tt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ct(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function cc(t,e){let n=Nm[e];n===void 0&&(n=new Int32Array(e),Nm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function HC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function VC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2fv(this.addr,e),Ct(n,e)}}function GC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tt(n,e))return;t.uniform3fv(this.addr,e),Ct(n,e)}}function WC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4fv(this.addr,e),Ct(n,e)}}function XC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ct(n,e)}else{if(Tt(n,i))return;Dm.set(i),t.uniformMatrix2fv(this.addr,!1,Dm),Ct(n,i)}}function qC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ct(n,e)}else{if(Tt(n,i))return;Im.set(i),t.uniformMatrix3fv(this.addr,!1,Im),Ct(n,i)}}function $C(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ct(n,e)}else{if(Tt(n,i))return;Lm.set(i),t.uniformMatrix4fv(this.addr,!1,Lm),Ct(n,i)}}function YC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function KC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2iv(this.addr,e),Ct(n,e)}}function ZC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3iv(this.addr,e),Ct(n,e)}}function JC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4iv(this.addr,e),Ct(n,e)}}function QC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function eA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2uiv(this.addr,e),Ct(n,e)}}function tA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3uiv(this.addr,e),Ct(n,e)}}function nA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4uiv(this.addr,e),Ct(n,e)}}function iA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(bm.compareFunction=V0,s=bm):s=s_,n.setTexture2D(e||s,r)}function rA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||o_,r)}function sA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||l_,r)}function aA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||a_,r)}function oA(t){switch(t){case 5126:return HC;case 35664:return VC;case 35665:return GC;case 35666:return WC;case 35674:return XC;case 35675:return qC;case 35676:return $C;case 5124:case 35670:return YC;case 35667:case 35671:return KC;case 35668:case 35672:return ZC;case 35669:case 35673:return JC;case 5125:return QC;case 36294:return eA;case 36295:return tA;case 36296:return nA;case 35678:case 36198:case 36298:case 36306:case 35682:return iA;case 35679:case 36299:case 36307:return rA;case 35680:case 36300:case 36308:case 36293:return sA;case 36289:case 36303:case 36311:case 36292:return aA}}function lA(t,e){t.uniform1fv(this.addr,e)}function cA(t,e){const n=Bs(e,this.size,2);t.uniform2fv(this.addr,n)}function uA(t,e){const n=Bs(e,this.size,3);t.uniform3fv(this.addr,n)}function dA(t,e){const n=Bs(e,this.size,4);t.uniform4fv(this.addr,n)}function hA(t,e){const n=Bs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function fA(t,e){const n=Bs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function pA(t,e){const n=Bs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function mA(t,e){t.uniform1iv(this.addr,e)}function gA(t,e){t.uniform2iv(this.addr,e)}function vA(t,e){t.uniform3iv(this.addr,e)}function _A(t,e){t.uniform4iv(this.addr,e)}function xA(t,e){t.uniform1uiv(this.addr,e)}function yA(t,e){t.uniform2uiv(this.addr,e)}function SA(t,e){t.uniform3uiv(this.addr,e)}function MA(t,e){t.uniform4uiv(this.addr,e)}function EA(t,e,n){const i=this.cache,r=e.length,s=cc(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||s_,s[a])}function wA(t,e,n){const i=this.cache,r=e.length,s=cc(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||o_,s[a])}function TA(t,e,n){const i=this.cache,r=e.length,s=cc(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||l_,s[a])}function CA(t,e,n){const i=this.cache,r=e.length,s=cc(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||a_,s[a])}function AA(t){switch(t){case 5126:return lA;case 35664:return cA;case 35665:return uA;case 35666:return dA;case 35674:return hA;case 35675:return fA;case 35676:return pA;case 5124:case 35670:return mA;case 35667:case 35671:return gA;case 35668:case 35672:return vA;case 35669:case 35673:return _A;case 5125:return xA;case 36294:return yA;case 36295:return SA;case 36296:return MA;case 35678:case 36198:case 36298:case 36306:case 35682:return EA;case 35679:case 36299:case 36307:return wA;case 35680:case 36300:case 36308:case 36293:return TA;case 36289:case 36303:case 36311:case 36292:return CA}}class RA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=oA(n.type)}}class bA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=AA(n.type)}}class PA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const yu=/(\w+)(\])?(\[|\.)?/g;function Um(t,e){t.seq.push(e),t.map[e.id]=e}function NA(t,e,n){const i=t.name,r=i.length;for(yu.lastIndex=0;;){const s=yu.exec(i),a=yu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Um(n,c===void 0?new RA(o,t,e):new bA(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new PA(o),Um(n,f)),n=f}}}class ol{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);NA(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Fm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const LA=37297;let IA=0;function DA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function UA(t){const e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t);let i;switch(e===n?i="":e===kl&&n===Ol?i="LinearDisplayP3ToLinearSRGB":e===Ol&&n===kl&&(i="LinearSRGBToLinearDisplayP3"),t){case tr:case oc:return[i,"LinearTransferOETF"];case Vn:case sf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Om(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+DA(t.getShaderSource(e),a)}else return r}function FA(t,e){const n=UA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function OA(t,e){let n;switch(e){case QE:n="Linear";break;case e1:n="Reinhard";break;case t1:n="OptimizedCineon";break;case n1:n="ACESFilmic";break;case r1:n="AgX";break;case s1:n="Neutral";break;case i1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const jo=new W;function kA(){Qe.getLuminanceCoefficients(jo);const t=jo.x.toFixed(4),e=jo.y.toFixed(4),n=jo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(aa).join(`
`)}function BA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function jA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function aa(t){return t!==""}function km(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HA=/^[ \t]*#include +<([\w\d./]+)>/gm;function th(t){return t.replace(HA,GA)}const VA=new Map;function GA(t,e){let n=Oe[e];if(n===void 0){const i=VA.get(e);if(i!==void 0)n=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return th(n)}const WA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bm(t){return t.replace(WA,XA)}function XA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function jm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function qA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===P0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===TE?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function $A(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ps:case Ns:e="ENVMAP_TYPE_CUBE";break;case ac:e="ENVMAP_TYPE_CUBE_UV";break}return e}function YA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ns:e="ENVMAP_MODE_REFRACTION";break}return e}function KA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case N0:e="ENVMAP_BLENDING_MULTIPLY";break;case ZE:e="ENVMAP_BLENDING_MIX";break;case JE:e="ENVMAP_BLENDING_ADD";break}return e}function ZA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function JA(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=qA(n),c=$A(n),d=YA(n),f=KA(n),p=ZA(n),g=zA(n),v=BA(s),_=r.createProgram();let m,h,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(aa).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(aa).join(`
`),h.length>0&&(h+=`
`)):(m=[jm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(aa).join(`
`),h=[jm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==qi?"#define TONE_MAPPING":"",n.toneMapping!==qi?Oe.tonemapping_pars_fragment:"",n.toneMapping!==qi?OA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,FA("linearToOutputTexel",n.outputColorSpace),kA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(aa).join(`
`)),a=th(a),a=km(a,n),a=zm(a,n),o=th(o),o=km(o,n),o=zm(o,n),a=Bm(a),o=Bm(o),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===nm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===nm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=y+m+a,S=y+h+o,P=Fm(r,r.VERTEX_SHADER,x),R=Fm(r,r.FRAGMENT_SHADER,S);r.attachShader(_,P),r.attachShader(_,R),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(C){if(t.debug.checkShaderErrors){const I=r.getProgramInfoLog(_).trim(),F=r.getShaderInfoLog(P).trim(),z=r.getShaderInfoLog(R).trim();let H=!0,V=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(H=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,P,R);else{const $=Om(r,P,"vertex"),D=Om(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+$+`
`+D)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(F===""||z==="")&&(V=!1);V&&(C.diagnostics={runnable:H,programLog:I,vertexShader:{log:F,prefix:m},fragmentShader:{log:z,prefix:h}})}r.deleteShader(P),r.deleteShader(R),T=new ol(r,_),M=jA(r,_)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(_,LA)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=IA++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=R,this}let QA=0;class eR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new tR(e),n.set(e,i)),i}}class tR{constructor(e){this.id=QA++,this.code=e,this.usedTimes=0}}function nR(t,e,n,i,r,s,a){const o=new q0,l=new eR,c=new Set,d=[],f=r.logarithmicDepthBuffer,p=r.vertexTextures;let g=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,E,C,I,F){const z=I.fog,H=F.geometry,V=M.isMeshStandardMaterial?I.environment:null,$=(M.isMeshStandardMaterial?n:e).get(M.envMap||V),D=$&&$.mapping===ac?$.image.height:null,K=v[M.type];M.precision!==null&&(g=r.getMaxPrecision(M.precision),g!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));const J=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,se=J!==void 0?J.length:0;let xe=0;H.morphAttributes.position!==void 0&&(xe=1),H.morphAttributes.normal!==void 0&&(xe=2),H.morphAttributes.color!==void 0&&(xe=3);let ue,j,Y,ne;if(K){const Ye=Gn[K];ue=Ye.vertexShader,j=Ye.fragmentShader}else ue=M.vertexShader,j=M.fragmentShader,l.update(M),Y=l.getVertexShaderID(M),ne=l.getFragmentShaderID(M);const ae=t.getRenderTarget(),Me=F.isInstancedMesh===!0,Ee=F.isBatchedMesh===!0,Re=!!M.map,Xe=!!M.matcap,L=!!$,dt=!!M.aoMap,qe=!!M.lightMap,$e=!!M.bumpMap,we=!!M.normalMap,vt=!!M.displacementMap,Ie=!!M.emissiveMap,Ue=!!M.metalnessMap,N=!!M.roughnessMap,A=M.anisotropy>0,q=M.clearcoat>0,te=M.dispersion>0,re=M.iridescence>0,ee=M.sheen>0,Ce=M.transmission>0,fe=A&&!!M.anisotropyMap,ve=q&&!!M.clearcoatMap,Fe=q&&!!M.clearcoatNormalMap,oe=q&&!!M.clearcoatRoughnessMap,ge=re&&!!M.iridescenceMap,Ve=re&&!!M.iridescenceThicknessMap,Le=ee&&!!M.sheenColorMap,_e=ee&&!!M.sheenRoughnessMap,De=!!M.specularMap,ze=!!M.specularColorMap,ot=!!M.specularIntensityMap,O=Ce&&!!M.transmissionMap,le=Ce&&!!M.thicknessMap,Z=!!M.gradientMap,Q=!!M.alphaMap,de=M.alphaTest>0,be=!!M.alphaHash,Ge=!!M.extensions;let _t=qi;M.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(_t=t.toneMapping);const Lt={shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:ue,fragmentShader:j,defines:M.defines,customVertexShaderID:Y,customFragmentShaderID:ne,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:Ee,batchingColor:Ee&&F._colorsTexture!==null,instancing:Me,instancingColor:Me&&F.instanceColor!==null,instancingMorph:Me&&F.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ae===null?t.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:tr,alphaToCoverage:!!M.alphaToCoverage,map:Re,matcap:Xe,envMap:L,envMapMode:L&&$.mapping,envMapCubeUVHeight:D,aoMap:dt,lightMap:qe,bumpMap:$e,normalMap:we,displacementMap:p&&vt,emissiveMap:Ie,normalMapObjectSpace:we&&M.normalMapType===u1,normalMapTangentSpace:we&&M.normalMapType===c1,metalnessMap:Ue,roughnessMap:N,anisotropy:A,anisotropyMap:fe,clearcoat:q,clearcoatMap:ve,clearcoatNormalMap:Fe,clearcoatRoughnessMap:oe,dispersion:te,iridescence:re,iridescenceMap:ge,iridescenceThicknessMap:Ve,sheen:ee,sheenColorMap:Le,sheenRoughnessMap:_e,specularMap:De,specularColorMap:ze,specularIntensityMap:ot,transmission:Ce,transmissionMap:O,thicknessMap:le,gradientMap:Z,opaque:M.transparent===!1&&M.blending===xs&&M.alphaToCoverage===!1,alphaMap:Q,alphaTest:de,alphaHash:be,combine:M.combine,mapUv:Re&&_(M.map.channel),aoMapUv:dt&&_(M.aoMap.channel),lightMapUv:qe&&_(M.lightMap.channel),bumpMapUv:$e&&_(M.bumpMap.channel),normalMapUv:we&&_(M.normalMap.channel),displacementMapUv:vt&&_(M.displacementMap.channel),emissiveMapUv:Ie&&_(M.emissiveMap.channel),metalnessMapUv:Ue&&_(M.metalnessMap.channel),roughnessMapUv:N&&_(M.roughnessMap.channel),anisotropyMapUv:fe&&_(M.anisotropyMap.channel),clearcoatMapUv:ve&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:_e&&_(M.sheenRoughnessMap.channel),specularMapUv:De&&_(M.specularMap.channel),specularColorMapUv:ze&&_(M.specularColorMap.channel),specularIntensityMapUv:ot&&_(M.specularIntensityMap.channel),transmissionMapUv:O&&_(M.transmissionMap.channel),thicknessMapUv:le&&_(M.thicknessMap.channel),alphaMapUv:Q&&_(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(we||A),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(Re||Q),fog:!!z,useFog:M.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:F.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:xe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&C.length>0,shadowMapType:t.shadowMap.type,toneMapping:_t,decodeVideoTexture:Re&&M.map.isVideoTexture===!0&&Qe.getTransfer(M.map.colorSpace)===rt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ai,flipSided:M.side===nn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ge&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&M.extensions.multiDraw===!0||Ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Lt.vertexUv1s=c.has(1),Lt.vertexUv2s=c.has(2),Lt.vertexUv3s=c.has(3),c.clear(),Lt}function h(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)E.push(C),E.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(y(E,M),x(E,M),E.push(t.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function y(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function x(M,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.doubleSided&&o.enable(10),E.flipSided&&o.enable(11),E.useDepthPacking&&o.enable(12),E.dithering&&o.enable(13),E.transmission&&o.enable(14),E.sheen&&o.enable(15),E.opaque&&o.enable(16),E.pointsUvs&&o.enable(17),E.decodeVideoTexture&&o.enable(18),E.alphaToCoverage&&o.enable(19),M.push(o.mask)}function S(M){const E=v[M.type];let C;if(E){const I=Gn[E];C=z1.clone(I.uniforms)}else C=M.uniforms;return C}function P(M,E){let C;for(let I=0,F=d.length;I<F;I++){const z=d[I];if(z.cacheKey===E){C=z,++C.usedTimes;break}}return C===void 0&&(C=new JA(t,E,M,s),d.push(C)),C}function R(M){if(--M.usedTimes===0){const E=d.indexOf(M);d[E]=d[d.length-1],d.pop(),M.destroy()}}function w(M){l.remove(M)}function T(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:S,acquireProgram:P,releaseProgram:R,releaseShaderCache:w,programs:d,dispose:T}}function iR(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function rR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Hm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Vm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,p,g,v,_,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:p,material:g,groupOrder:v,renderOrder:f.renderOrder,z:_,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=p,h.material=g,h.groupOrder=v,h.renderOrder=f.renderOrder,h.z=_,h.group=m),e++,h}function o(f,p,g,v,_,m){const h=a(f,p,g,v,_,m);g.transmission>0?i.push(h):g.transparent===!0?r.push(h):n.push(h)}function l(f,p,g,v,_,m){const h=a(f,p,g,v,_,m);g.transmission>0?i.unshift(h):g.transparent===!0?r.unshift(h):n.unshift(h)}function c(f,p){n.length>1&&n.sort(f||rR),i.length>1&&i.sort(p||Hm),r.length>1&&r.sort(p||Hm)}function d(){for(let f=e,p=t.length;f<p;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:d,sort:c}}function sR(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Vm,t.set(i,[a])):r>=s.length?(a=new Vm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function aR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new tt};break;case"SpotLight":n={position:new W,direction:new W,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":n={color:new tt,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function oR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let lR=0;function cR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function uR(t){const e=new aR,n=oR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const r=new W,s=new wt,a=new wt;function o(c){let d=0,f=0,p=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let g=0,v=0,_=0,m=0,h=0,y=0,x=0,S=0,P=0,R=0,w=0;c.sort(cR);for(let M=0,E=c.length;M<E;M++){const C=c[M],I=C.color,F=C.intensity,z=C.distance,H=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=I.r*F,f+=I.g*F,p+=I.b*F;else if(C.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(C.sh.coefficients[V],F);w++}else if(C.isDirectionalLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const $=C.shadow,D=n.get(C);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,i.directionalShadow[g]=D,i.directionalShadowMap[g]=H,i.directionalShadowMatrix[g]=C.shadow.matrix,y++}i.directional[g]=V,g++}else if(C.isSpotLight){const V=e.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(I).multiplyScalar(F),V.distance=z,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,i.spot[_]=V;const $=C.shadow;if(C.map&&(i.spotLightMap[P]=C.map,P++,$.updateMatrices(C),C.castShadow&&R++),i.spotLightMatrix[_]=$.matrix,C.castShadow){const D=n.get(C);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,i.spotShadow[_]=D,i.spotShadowMap[_]=H,S++}_++}else if(C.isRectAreaLight){const V=e.get(C);V.color.copy(I).multiplyScalar(F),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=V,m++}else if(C.isPointLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){const $=C.shadow,D=n.get(C);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,D.shadowCameraNear=$.camera.near,D.shadowCameraFar=$.camera.far,i.pointShadow[v]=D,i.pointShadowMap[v]=H,i.pointShadowMatrix[v]=C.shadow.matrix,x++}i.point[v]=V,v++}else if(C.isHemisphereLight){const V=e.get(C);V.skyColor.copy(C.color).multiplyScalar(F),V.groundColor.copy(C.groundColor).multiplyScalar(F),i.hemi[h]=V,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=p;const T=i.hash;(T.directionalLength!==g||T.pointLength!==v||T.spotLength!==_||T.rectAreaLength!==m||T.hemiLength!==h||T.numDirectionalShadows!==y||T.numPointShadows!==x||T.numSpotShadows!==S||T.numSpotMaps!==P||T.numLightProbes!==w)&&(i.directional.length=g,i.spot.length=_,i.rectArea.length=m,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+P-R,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=w,T.directionalLength=g,T.pointLength=v,T.spotLength=_,T.rectAreaLength=m,T.hemiLength=h,T.numDirectionalShadows=y,T.numPointShadows=x,T.numSpotShadows=S,T.numSpotMaps=P,T.numLightProbes=w,i.version=lR++)}function l(c,d){let f=0,p=0,g=0,v=0,_=0;const m=d.matrixWorldInverse;for(let h=0,y=c.length;h<y;h++){const x=c[h];if(x.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(x.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),g++}else if(x.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(x.isPointLight){const S=i.point[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),p++}else if(x.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function Gm(t){const e=new uR(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function a(d){i.push(d)}function o(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function dR(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Gm(t),e.set(r,[o])):s>=a.length?(o=new Gm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class hR extends lc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=o1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fR extends lc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const pR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mR=`uniform sampler2D shadow_pass;
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
}`;function gR(t,e,n){let i=new t_;const r=new He,s=new He,a=new Pt,o=new hR({depthPacking:l1}),l=new fR,c={},d=n.maxTextureSize,f={[Ki]:nn,[nn]:Ki,[ai]:ai},p=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:pR,fragmentShader:mR}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const v=new Dr;v.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new qn(v,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=P0;let h=this.type;this.render=function(R,w,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const M=t.getRenderTarget(),E=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),I=t.state;I.setBlending(Xi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const F=h!==ii&&this.type===ii,z=h===ii&&this.type!==ii;for(let H=0,V=R.length;H<V;H++){const $=R[H],D=$.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const K=D.getFrameExtents();if(r.multiply(K),s.copy(D.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/K.x),r.x=s.x*K.x,D.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/K.y),r.y=s.y*K.y,D.mapSize.y=s.y)),D.map===null||F===!0||z===!0){const se=this.type!==ii?{minFilter:Sn,magFilter:Sn}:{};D.map!==null&&D.map.dispose(),D.map=new br(r.x,r.y,se),D.map.texture.name=$.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const J=D.getViewportCount();for(let se=0;se<J;se++){const xe=D.getViewport(se);a.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),I.viewport(a),D.updateMatrices($,se),i=D.getFrustum(),S(w,T,D.camera,$,this.type)}D.isPointLightShadow!==!0&&this.type===ii&&y(D,T),D.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(M,E,C)};function y(R,w){const T=e.update(_);p.defines.VSM_SAMPLES!==R.blurSamples&&(p.defines.VSM_SAMPLES=R.blurSamples,g.defines.VSM_SAMPLES=R.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new br(r.x,r.y)),p.uniforms.shadow_pass.value=R.map.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(w,null,T,p,_,null),g.uniforms.shadow_pass.value=R.mapPass.texture,g.uniforms.resolution.value=R.mapSize,g.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(w,null,T,g,_,null)}function x(R,w,T,M){let E=null;const C=T.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)E=C;else if(E=T.isPointLight===!0?l:o,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const I=E.uuid,F=w.uuid;let z=c[I];z===void 0&&(z={},c[I]=z);let H=z[F];H===void 0&&(H=E.clone(),z[F]=H,w.addEventListener("dispose",P)),E=H}if(E.visible=w.visible,E.wireframe=w.wireframe,M===ii?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:f[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,T.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const I=t.properties.get(E);I.light=T}return E}function S(R,w,T,M,E){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===ii)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,R.matrixWorld);const F=e.update(R),z=R.material;if(Array.isArray(z)){const H=F.groups;for(let V=0,$=H.length;V<$;V++){const D=H[V],K=z[D.materialIndex];if(K&&K.visible){const J=x(R,K,M,E);R.onBeforeShadow(t,R,w,T,F,J,D),t.renderBufferDirect(T,null,F,J,R,D),R.onAfterShadow(t,R,w,T,F,J,D)}}}else if(z.visible){const H=x(R,z,M,E);R.onBeforeShadow(t,R,w,T,F,H,null),t.renderBufferDirect(T,null,F,H,R,null),R.onAfterShadow(t,R,w,T,F,H,null)}}const I=R.children;for(let F=0,z=I.length;F<z;F++)S(I[F],w,T,M,E)}function P(R){R.target.removeEventListener("dispose",P);for(const T in c){const M=c[T],E=R.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function vR(t){function e(){let O=!1;const le=new Pt;let Z=null;const Q=new Pt(0,0,0,0);return{setMask:function(de){Z!==de&&!O&&(t.colorMask(de,de,de,de),Z=de)},setLocked:function(de){O=de},setClear:function(de,be,Ge,_t,Lt){Lt===!0&&(de*=_t,be*=_t,Ge*=_t),le.set(de,be,Ge,_t),Q.equals(le)===!1&&(t.clearColor(de,be,Ge,_t),Q.copy(le))},reset:function(){O=!1,Z=null,Q.set(-1,0,0,0)}}}function n(){let O=!1,le=null,Z=null,Q=null;return{setTest:function(de){de?ne(t.DEPTH_TEST):ae(t.DEPTH_TEST)},setMask:function(de){le!==de&&!O&&(t.depthMask(de),le=de)},setFunc:function(de){if(Z!==de){switch(de){case GE:t.depthFunc(t.NEVER);break;case WE:t.depthFunc(t.ALWAYS);break;case XE:t.depthFunc(t.LESS);break;case Ul:t.depthFunc(t.LEQUAL);break;case qE:t.depthFunc(t.EQUAL);break;case $E:t.depthFunc(t.GEQUAL);break;case YE:t.depthFunc(t.GREATER);break;case KE:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Z=de}},setLocked:function(de){O=de},setClear:function(de){Q!==de&&(t.clearDepth(de),Q=de)},reset:function(){O=!1,le=null,Z=null,Q=null}}}function i(){let O=!1,le=null,Z=null,Q=null,de=null,be=null,Ge=null,_t=null,Lt=null;return{setTest:function(Ye){O||(Ye?ne(t.STENCIL_TEST):ae(t.STENCIL_TEST))},setMask:function(Ye){le!==Ye&&!O&&(t.stencilMask(Ye),le=Ye)},setFunc:function(Ye,Zn,Bn){(Z!==Ye||Q!==Zn||de!==Bn)&&(t.stencilFunc(Ye,Zn,Bn),Z=Ye,Q=Zn,de=Bn)},setOp:function(Ye,Zn,Bn){(be!==Ye||Ge!==Zn||_t!==Bn)&&(t.stencilOp(Ye,Zn,Bn),be=Ye,Ge=Zn,_t=Bn)},setLocked:function(Ye){O=Ye},setClear:function(Ye){Lt!==Ye&&(t.clearStencil(Ye),Lt=Ye)},reset:function(){O=!1,le=null,Z=null,Q=null,de=null,be=null,Ge=null,_t=null,Lt=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,l=new WeakMap;let c={},d={},f=new WeakMap,p=[],g=null,v=!1,_=null,m=null,h=null,y=null,x=null,S=null,P=null,R=new tt(0,0,0),w=0,T=!1,M=null,E=null,C=null,I=null,F=null;const z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,V=0;const $=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec($)[1]),H=V>=1):$.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),H=V>=2);let D=null,K={};const J=t.getParameter(t.SCISSOR_BOX),se=t.getParameter(t.VIEWPORT),xe=new Pt().fromArray(J),ue=new Pt().fromArray(se);function j(O,le,Z,Q){const de=new Uint8Array(4),be=t.createTexture();t.bindTexture(O,be),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ge=0;Ge<Z;Ge++)O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY?t.texImage3D(le,0,t.RGBA,1,1,Q,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(le+Ge,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return be}const Y={};Y[t.TEXTURE_2D]=j(t.TEXTURE_2D,t.TEXTURE_2D,1),Y[t.TEXTURE_CUBE_MAP]=j(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[t.TEXTURE_2D_ARRAY]=j(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Y[t.TEXTURE_3D]=j(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ne(t.DEPTH_TEST),s.setFunc(Ul),$e(!1),we(Kp),ne(t.CULL_FACE),dt(Xi);function ne(O){c[O]!==!0&&(t.enable(O),c[O]=!0)}function ae(O){c[O]!==!1&&(t.disable(O),c[O]=!1)}function Me(O,le){return d[O]!==le?(t.bindFramebuffer(O,le),d[O]=le,O===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=le),O===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=le),!0):!1}function Ee(O,le){let Z=p,Q=!1;if(O){Z=f.get(le),Z===void 0&&(Z=[],f.set(le,Z));const de=O.textures;if(Z.length!==de.length||Z[0]!==t.COLOR_ATTACHMENT0){for(let be=0,Ge=de.length;be<Ge;be++)Z[be]=t.COLOR_ATTACHMENT0+be;Z.length=de.length,Q=!0}}else Z[0]!==t.BACK&&(Z[0]=t.BACK,Q=!0);Q&&t.drawBuffers(Z)}function Re(O){return g!==O?(t.useProgram(O),g=O,!0):!1}const Xe={[fr]:t.FUNC_ADD,[AE]:t.FUNC_SUBTRACT,[RE]:t.FUNC_REVERSE_SUBTRACT};Xe[bE]=t.MIN,Xe[PE]=t.MAX;const L={[NE]:t.ZERO,[LE]:t.ONE,[IE]:t.SRC_COLOR,[Md]:t.SRC_ALPHA,[zE]:t.SRC_ALPHA_SATURATE,[OE]:t.DST_COLOR,[UE]:t.DST_ALPHA,[DE]:t.ONE_MINUS_SRC_COLOR,[Ed]:t.ONE_MINUS_SRC_ALPHA,[kE]:t.ONE_MINUS_DST_COLOR,[FE]:t.ONE_MINUS_DST_ALPHA,[BE]:t.CONSTANT_COLOR,[jE]:t.ONE_MINUS_CONSTANT_COLOR,[HE]:t.CONSTANT_ALPHA,[VE]:t.ONE_MINUS_CONSTANT_ALPHA};function dt(O,le,Z,Q,de,be,Ge,_t,Lt,Ye){if(O===Xi){v===!0&&(ae(t.BLEND),v=!1);return}if(v===!1&&(ne(t.BLEND),v=!0),O!==CE){if(O!==_||Ye!==T){if((m!==fr||x!==fr)&&(t.blendEquation(t.FUNC_ADD),m=fr,x=fr),Ye)switch(O){case xs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Zp:t.blendFunc(t.ONE,t.ONE);break;case Jp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Qp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case xs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Zp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Jp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Qp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}h=null,y=null,S=null,P=null,R.set(0,0,0),w=0,_=O,T=Ye}return}de=de||le,be=be||Z,Ge=Ge||Q,(le!==m||de!==x)&&(t.blendEquationSeparate(Xe[le],Xe[de]),m=le,x=de),(Z!==h||Q!==y||be!==S||Ge!==P)&&(t.blendFuncSeparate(L[Z],L[Q],L[be],L[Ge]),h=Z,y=Q,S=be,P=Ge),(_t.equals(R)===!1||Lt!==w)&&(t.blendColor(_t.r,_t.g,_t.b,Lt),R.copy(_t),w=Lt),_=O,T=!1}function qe(O,le){O.side===ai?ae(t.CULL_FACE):ne(t.CULL_FACE);let Z=O.side===nn;le&&(Z=!Z),$e(Z),O.blending===xs&&O.transparent===!1?dt(Xi):dt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),s.setFunc(O.depthFunc),s.setTest(O.depthTest),s.setMask(O.depthWrite),r.setMask(O.colorWrite);const Q=O.stencilWrite;a.setTest(Q),Q&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ie(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ne(t.SAMPLE_ALPHA_TO_COVERAGE):ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function $e(O){M!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),M=O)}function we(O){O!==EE?(ne(t.CULL_FACE),O!==E&&(O===Kp?t.cullFace(t.BACK):O===wE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ae(t.CULL_FACE),E=O}function vt(O){O!==C&&(H&&t.lineWidth(O),C=O)}function Ie(O,le,Z){O?(ne(t.POLYGON_OFFSET_FILL),(I!==le||F!==Z)&&(t.polygonOffset(le,Z),I=le,F=Z)):ae(t.POLYGON_OFFSET_FILL)}function Ue(O){O?ne(t.SCISSOR_TEST):ae(t.SCISSOR_TEST)}function N(O){O===void 0&&(O=t.TEXTURE0+z-1),D!==O&&(t.activeTexture(O),D=O)}function A(O,le,Z){Z===void 0&&(D===null?Z=t.TEXTURE0+z-1:Z=D);let Q=K[Z];Q===void 0&&(Q={type:void 0,texture:void 0},K[Z]=Q),(Q.type!==O||Q.texture!==le)&&(D!==Z&&(t.activeTexture(Z),D=Z),t.bindTexture(O,le||Y[O]),Q.type=O,Q.texture=le)}function q(){const O=K[D];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function te(){try{t.compressedTexImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function re(){try{t.compressedTexImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ee(){try{t.texSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(){try{t.texSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ve(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Fe(){try{t.texStorage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function oe(){try{t.texStorage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ve(){try{t.texImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Le(O){xe.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),xe.copy(O))}function _e(O){ue.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),ue.copy(O))}function De(O,le){let Z=l.get(le);Z===void 0&&(Z=new WeakMap,l.set(le,Z));let Q=Z.get(O);Q===void 0&&(Q=t.getUniformBlockIndex(le,O.name),Z.set(O,Q))}function ze(O,le){const Q=l.get(le).get(O);o.get(le)!==Q&&(t.uniformBlockBinding(le,Q,O.__bindingPointIndex),o.set(le,Q))}function ot(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},D=null,K={},d={},f=new WeakMap,p=[],g=null,v=!1,_=null,m=null,h=null,y=null,x=null,S=null,P=null,R=new tt(0,0,0),w=0,T=!1,M=null,E=null,C=null,I=null,F=null,xe.set(0,0,t.canvas.width,t.canvas.height),ue.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:ne,disable:ae,bindFramebuffer:Me,drawBuffers:Ee,useProgram:Re,setBlending:dt,setMaterial:qe,setFlipSided:$e,setCullFace:we,setLineWidth:vt,setPolygonOffset:Ie,setScissorTest:Ue,activeTexture:N,bindTexture:A,unbindTexture:q,compressedTexImage2D:te,compressedTexImage3D:re,texImage2D:ge,texImage3D:Ve,updateUBOMapping:De,uniformBlockBinding:ze,texStorage2D:Fe,texStorage3D:oe,texSubImage2D:ee,texSubImage3D:Ce,compressedTexSubImage2D:fe,compressedTexSubImage3D:ve,scissor:Le,viewport:_e,reset:ot}}function Wm(t,e,n,i){const r=_R(i);switch(n){case F0:return t*e;case k0:return t*e;case z0:return t*e*2;case B0:return t*e/r.components*r.byteLength;case tf:return t*e/r.components*r.byteLength;case j0:return t*e*2/r.components*r.byteLength;case nf:return t*e*2/r.components*r.byteLength;case O0:return t*e*3/r.components*r.byteLength;case Fn:return t*e*4/r.components*r.byteLength;case rf:return t*e*4/r.components*r.byteLength;case nl:case il:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case rl:case sl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case bd:case Nd:return Math.max(t,16)*Math.max(e,8)/4;case Rd:case Pd:return Math.max(t,8)*Math.max(e,8)/2;case Ld:case Id:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Dd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ud:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Od:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case kd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case zd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Bd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case jd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Vd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Wd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Xd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case qd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case $d:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case al:case Yd:case Kd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case H0:case Zd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Jd:case Qd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function _R(t){switch(t){case gi:case I0:return{byteLength:1,components:1};case ka:case D0:case Wa:return{byteLength:2,components:1};case Qh:case ef:return{byteLength:2,components:4};case Rr:case Jh:case ci:return{byteLength:4,components:1};case U0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function xR(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,d=new WeakMap;let f;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(N,A){return g?new OffscreenCanvas(N,A):Bl("canvas")}function _(N,A,q){let te=1;const re=Ue(N);if((re.width>q||re.height>q)&&(te=q/Math.max(re.width,re.height)),te<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ee=Math.floor(te*re.width),Ce=Math.floor(te*re.height);f===void 0&&(f=v(ee,Ce));const fe=A?v(ee,Ce):f;return fe.width=ee,fe.height=Ce,fe.getContext("2d").drawImage(N,0,0,ee,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ee+"x"+Ce+")."),fe}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),N;return N}function m(N){return N.generateMipmaps&&N.minFilter!==Sn&&N.minFilter!==Dn}function h(N){t.generateMipmap(N)}function y(N,A,q,te,re=!1){if(N!==null){if(t[N]!==void 0)return t[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ee=A;if(A===t.RED&&(q===t.FLOAT&&(ee=t.R32F),q===t.HALF_FLOAT&&(ee=t.R16F),q===t.UNSIGNED_BYTE&&(ee=t.R8)),A===t.RED_INTEGER&&(q===t.UNSIGNED_BYTE&&(ee=t.R8UI),q===t.UNSIGNED_SHORT&&(ee=t.R16UI),q===t.UNSIGNED_INT&&(ee=t.R32UI),q===t.BYTE&&(ee=t.R8I),q===t.SHORT&&(ee=t.R16I),q===t.INT&&(ee=t.R32I)),A===t.RG&&(q===t.FLOAT&&(ee=t.RG32F),q===t.HALF_FLOAT&&(ee=t.RG16F),q===t.UNSIGNED_BYTE&&(ee=t.RG8)),A===t.RG_INTEGER&&(q===t.UNSIGNED_BYTE&&(ee=t.RG8UI),q===t.UNSIGNED_SHORT&&(ee=t.RG16UI),q===t.UNSIGNED_INT&&(ee=t.RG32UI),q===t.BYTE&&(ee=t.RG8I),q===t.SHORT&&(ee=t.RG16I),q===t.INT&&(ee=t.RG32I)),A===t.RGB&&q===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),A===t.RGBA){const Ce=re?Fl:Qe.getTransfer(te);q===t.FLOAT&&(ee=t.RGBA32F),q===t.HALF_FLOAT&&(ee=t.RGBA16F),q===t.UNSIGNED_BYTE&&(ee=Ce===rt?t.SRGB8_ALPHA8:t.RGBA8),q===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),q===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function x(N,A){let q;return N?A===null||A===Rr||A===Ls?q=t.DEPTH24_STENCIL8:A===ci?q=t.DEPTH32F_STENCIL8:A===ka&&(q=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Rr||A===Ls?q=t.DEPTH_COMPONENT24:A===ci?q=t.DEPTH_COMPONENT32F:A===ka&&(q=t.DEPTH_COMPONENT16),q}function S(N,A){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==Sn&&N.minFilter!==Dn?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function P(N){const A=N.target;A.removeEventListener("dispose",P),w(A),A.isVideoTexture&&d.delete(A)}function R(N){const A=N.target;A.removeEventListener("dispose",R),M(A)}function w(N){const A=i.get(N);if(A.__webglInit===void 0)return;const q=N.source,te=p.get(q);if(te){const re=te[A.__cacheKey];re.usedTimes--,re.usedTimes===0&&T(N),Object.keys(te).length===0&&p.delete(q)}i.remove(N)}function T(N){const A=i.get(N);t.deleteTexture(A.__webglTexture);const q=N.source,te=p.get(q);delete te[A.__cacheKey],a.memory.textures--}function M(N){const A=i.get(N);if(N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(A.__webglFramebuffer[te]))for(let re=0;re<A.__webglFramebuffer[te].length;re++)t.deleteFramebuffer(A.__webglFramebuffer[te][re]);else t.deleteFramebuffer(A.__webglFramebuffer[te]);A.__webglDepthbuffer&&t.deleteRenderbuffer(A.__webglDepthbuffer[te])}else{if(Array.isArray(A.__webglFramebuffer))for(let te=0;te<A.__webglFramebuffer.length;te++)t.deleteFramebuffer(A.__webglFramebuffer[te]);else t.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&t.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&t.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let te=0;te<A.__webglColorRenderbuffer.length;te++)A.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(A.__webglColorRenderbuffer[te]);A.__webglDepthRenderbuffer&&t.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const q=N.textures;for(let te=0,re=q.length;te<re;te++){const ee=i.get(q[te]);ee.__webglTexture&&(t.deleteTexture(ee.__webglTexture),a.memory.textures--),i.remove(q[te])}i.remove(N)}let E=0;function C(){E=0}function I(){const N=E;return N>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),E+=1,N}function F(N){const A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function z(N,A){const q=i.get(N);if(N.isVideoTexture&&vt(N),N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){const te=N.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(q,N,A);return}}n.bindTexture(t.TEXTURE_2D,q.__webglTexture,t.TEXTURE0+A)}function H(N,A){const q=i.get(N);if(N.version>0&&q.__version!==N.version){ue(q,N,A);return}n.bindTexture(t.TEXTURE_2D_ARRAY,q.__webglTexture,t.TEXTURE0+A)}function V(N,A){const q=i.get(N);if(N.version>0&&q.__version!==N.version){ue(q,N,A);return}n.bindTexture(t.TEXTURE_3D,q.__webglTexture,t.TEXTURE0+A)}function $(N,A){const q=i.get(N);if(N.version>0&&q.__version!==N.version){j(q,N,A);return}n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture,t.TEXTURE0+A)}const D={[Cd]:t.REPEAT,[_r]:t.CLAMP_TO_EDGE,[Ad]:t.MIRRORED_REPEAT},K={[Sn]:t.NEAREST,[a1]:t.NEAREST_MIPMAP_NEAREST,[yo]:t.NEAREST_MIPMAP_LINEAR,[Dn]:t.LINEAR,[$c]:t.LINEAR_MIPMAP_NEAREST,[xr]:t.LINEAR_MIPMAP_LINEAR},J={[d1]:t.NEVER,[v1]:t.ALWAYS,[h1]:t.LESS,[V0]:t.LEQUAL,[f1]:t.EQUAL,[g1]:t.GEQUAL,[p1]:t.GREATER,[m1]:t.NOTEQUAL};function se(N,A){if(A.type===ci&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Dn||A.magFilter===$c||A.magFilter===yo||A.magFilter===xr||A.minFilter===Dn||A.minFilter===$c||A.minFilter===yo||A.minFilter===xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(N,t.TEXTURE_WRAP_S,D[A.wrapS]),t.texParameteri(N,t.TEXTURE_WRAP_T,D[A.wrapT]),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,D[A.wrapR]),t.texParameteri(N,t.TEXTURE_MAG_FILTER,K[A.magFilter]),t.texParameteri(N,t.TEXTURE_MIN_FILTER,K[A.minFilter]),A.compareFunction&&(t.texParameteri(N,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(N,t.TEXTURE_COMPARE_FUNC,J[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Sn||A.minFilter!==yo&&A.minFilter!==xr||A.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");t.texParameterf(N,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function xe(N,A){let q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",P));const te=A.source;let re=p.get(te);re===void 0&&(re={},p.set(te,re));const ee=F(A);if(ee!==N.__cacheKey){re[ee]===void 0&&(re[ee]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,q=!0),re[ee].usedTimes++;const Ce=re[N.__cacheKey];Ce!==void 0&&(re[N.__cacheKey].usedTimes--,Ce.usedTimes===0&&T(A)),N.__cacheKey=ee,N.__webglTexture=re[ee].texture}return q}function ue(N,A,q){let te=t.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),A.isData3DTexture&&(te=t.TEXTURE_3D);const re=xe(N,A),ee=A.source;n.bindTexture(te,N.__webglTexture,t.TEXTURE0+q);const Ce=i.get(ee);if(ee.version!==Ce.__version||re===!0){n.activeTexture(t.TEXTURE0+q);const fe=Qe.getPrimaries(Qe.workingColorSpace),ve=A.colorSpace===Li?null:Qe.getPrimaries(A.colorSpace),Fe=A.colorSpace===Li||fe===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let oe=_(A.image,!1,r.maxTextureSize);oe=Ie(A,oe);const ge=s.convert(A.format,A.colorSpace),Ve=s.convert(A.type);let Le=y(A.internalFormat,ge,Ve,A.colorSpace,A.isVideoTexture);se(te,A);let _e;const De=A.mipmaps,ze=A.isVideoTexture!==!0,ot=Ce.__version===void 0||re===!0,O=ee.dataReady,le=S(A,oe);if(A.isDepthTexture)Le=x(A.format===Is,A.type),ot&&(ze?n.texStorage2D(t.TEXTURE_2D,1,Le,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,Le,oe.width,oe.height,0,ge,Ve,null));else if(A.isDataTexture)if(De.length>0){ze&&ot&&n.texStorage2D(t.TEXTURE_2D,le,Le,De[0].width,De[0].height);for(let Z=0,Q=De.length;Z<Q;Z++)_e=De[Z],ze?O&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,_e.width,_e.height,ge,Ve,_e.data):n.texImage2D(t.TEXTURE_2D,Z,Le,_e.width,_e.height,0,ge,Ve,_e.data);A.generateMipmaps=!1}else ze?(ot&&n.texStorage2D(t.TEXTURE_2D,le,Le,oe.width,oe.height),O&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,ge,Ve,oe.data)):n.texImage2D(t.TEXTURE_2D,0,Le,oe.width,oe.height,0,ge,Ve,oe.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ze&&ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,Le,De[0].width,De[0].height,oe.depth);for(let Z=0,Q=De.length;Z<Q;Z++)if(_e=De[Z],A.format!==Fn)if(ge!==null)if(ze){if(O)if(A.layerUpdates.size>0){const de=Wm(_e.width,_e.height,A.format,A.type);for(const be of A.layerUpdates){const Ge=_e.data.subarray(be*de/_e.data.BYTES_PER_ELEMENT,(be+1)*de/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,be,_e.width,_e.height,1,ge,Ge,0,0)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,_e.width,_e.height,oe.depth,ge,_e.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Z,Le,_e.width,_e.height,oe.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?O&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,_e.width,_e.height,oe.depth,ge,Ve,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Z,Le,_e.width,_e.height,oe.depth,0,ge,Ve,_e.data)}else{ze&&ot&&n.texStorage2D(t.TEXTURE_2D,le,Le,De[0].width,De[0].height);for(let Z=0,Q=De.length;Z<Q;Z++)_e=De[Z],A.format!==Fn?ge!==null?ze?O&&n.compressedTexSubImage2D(t.TEXTURE_2D,Z,0,0,_e.width,_e.height,ge,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,Z,Le,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?O&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,_e.width,_e.height,ge,Ve,_e.data):n.texImage2D(t.TEXTURE_2D,Z,Le,_e.width,_e.height,0,ge,Ve,_e.data)}else if(A.isDataArrayTexture)if(ze){if(ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,Le,oe.width,oe.height,oe.depth),O)if(A.layerUpdates.size>0){const Z=Wm(oe.width,oe.height,A.format,A.type);for(const Q of A.layerUpdates){const de=oe.data.subarray(Q*Z/oe.data.BYTES_PER_ELEMENT,(Q+1)*Z/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Q,oe.width,oe.height,1,ge,Ve,de)}A.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ge,Ve,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,oe.width,oe.height,oe.depth,0,ge,Ve,oe.data);else if(A.isData3DTexture)ze?(ot&&n.texStorage3D(t.TEXTURE_3D,le,Le,oe.width,oe.height,oe.depth),O&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ge,Ve,oe.data)):n.texImage3D(t.TEXTURE_3D,0,Le,oe.width,oe.height,oe.depth,0,ge,Ve,oe.data);else if(A.isFramebufferTexture){if(ot)if(ze)n.texStorage2D(t.TEXTURE_2D,le,Le,oe.width,oe.height);else{let Z=oe.width,Q=oe.height;for(let de=0;de<le;de++)n.texImage2D(t.TEXTURE_2D,de,Le,Z,Q,0,ge,Ve,null),Z>>=1,Q>>=1}}else if(De.length>0){if(ze&&ot){const Z=Ue(De[0]);n.texStorage2D(t.TEXTURE_2D,le,Le,Z.width,Z.height)}for(let Z=0,Q=De.length;Z<Q;Z++)_e=De[Z],ze?O&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,ge,Ve,_e):n.texImage2D(t.TEXTURE_2D,Z,Le,ge,Ve,_e);A.generateMipmaps=!1}else if(ze){if(ot){const Z=Ue(oe);n.texStorage2D(t.TEXTURE_2D,le,Le,Z.width,Z.height)}O&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Ve,oe)}else n.texImage2D(t.TEXTURE_2D,0,Le,ge,Ve,oe);m(A)&&h(te),Ce.__version=ee.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function j(N,A,q){if(A.image.length!==6)return;const te=xe(N,A),re=A.source;n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+q);const ee=i.get(re);if(re.version!==ee.__version||te===!0){n.activeTexture(t.TEXTURE0+q);const Ce=Qe.getPrimaries(Qe.workingColorSpace),fe=A.colorSpace===Li?null:Qe.getPrimaries(A.colorSpace),ve=A.colorSpace===Li||Ce===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Fe=A.isCompressedTexture||A.image[0].isCompressedTexture,oe=A.image[0]&&A.image[0].isDataTexture,ge=[];for(let Q=0;Q<6;Q++)!Fe&&!oe?ge[Q]=_(A.image[Q],!0,r.maxCubemapSize):ge[Q]=oe?A.image[Q].image:A.image[Q],ge[Q]=Ie(A,ge[Q]);const Ve=ge[0],Le=s.convert(A.format,A.colorSpace),_e=s.convert(A.type),De=y(A.internalFormat,Le,_e,A.colorSpace),ze=A.isVideoTexture!==!0,ot=ee.__version===void 0||te===!0,O=re.dataReady;let le=S(A,Ve);se(t.TEXTURE_CUBE_MAP,A);let Z;if(Fe){ze&&ot&&n.texStorage2D(t.TEXTURE_CUBE_MAP,le,De,Ve.width,Ve.height);for(let Q=0;Q<6;Q++){Z=ge[Q].mipmaps;for(let de=0;de<Z.length;de++){const be=Z[de];A.format!==Fn?Le!==null?ze?O&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,de,0,0,be.width,be.height,Le,be.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,de,De,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,de,0,0,be.width,be.height,Le,_e,be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,de,De,be.width,be.height,0,Le,_e,be.data)}}}else{if(Z=A.mipmaps,ze&&ot){Z.length>0&&le++;const Q=Ue(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,le,De,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(oe){ze?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ge[Q].width,ge[Q].height,Le,_e,ge[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,De,ge[Q].width,ge[Q].height,0,Le,_e,ge[Q].data);for(let de=0;de<Z.length;de++){const Ge=Z[de].image[Q].image;ze?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,de+1,0,0,Ge.width,Ge.height,Le,_e,Ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,de+1,De,Ge.width,Ge.height,0,Le,_e,Ge.data)}}else{ze?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Le,_e,ge[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,De,Le,_e,ge[Q]);for(let de=0;de<Z.length;de++){const be=Z[de];ze?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,de+1,0,0,Le,_e,be.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,de+1,De,Le,_e,be.image[Q])}}}m(A)&&h(t.TEXTURE_CUBE_MAP),ee.__version=re.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function Y(N,A,q,te,re,ee){const Ce=s.convert(q.format,q.colorSpace),fe=s.convert(q.type),ve=y(q.internalFormat,Ce,fe,q.colorSpace);if(!i.get(A).__hasExternalTextures){const oe=Math.max(1,A.width>>ee),ge=Math.max(1,A.height>>ee);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,ee,ve,oe,ge,A.depth,0,Ce,fe,null):n.texImage2D(re,ee,ve,oe,ge,0,Ce,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,N),we(A)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,re,i.get(q).__webglTexture,0,$e(A)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,re,i.get(q).__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ne(N,A,q){if(t.bindRenderbuffer(t.RENDERBUFFER,N),A.depthBuffer){const te=A.depthTexture,re=te&&te.isDepthTexture?te.type:null,ee=x(A.stencilBuffer,re),Ce=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=$e(A);we(A)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,ee,A.width,A.height):q?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,ee,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,ee,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ce,t.RENDERBUFFER,N)}else{const te=A.textures;for(let re=0;re<te.length;re++){const ee=te[re],Ce=s.convert(ee.format,ee.colorSpace),fe=s.convert(ee.type),ve=y(ee.internalFormat,Ce,fe,ee.colorSpace),Fe=$e(A);q&&we(A)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,ve,A.width,A.height):we(A)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Fe,ve,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,ve,A.width,A.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ae(N,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),z(A.depthTexture,0);const te=i.get(A.depthTexture).__webglTexture,re=$e(A);if(A.depthTexture.format===ys)we(A)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(A.depthTexture.format===Is)we(A)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Me(N){const A=i.get(N),q=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!A.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");ae(A.__webglFramebuffer,N)}else if(q){A.__webglDepthbuffer=[];for(let te=0;te<6;te++)n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer[te]),A.__webglDepthbuffer[te]=t.createRenderbuffer(),ne(A.__webglDepthbuffer[te],N,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=t.createRenderbuffer(),ne(A.__webglDepthbuffer,N,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ee(N,A,q){const te=i.get(N);A!==void 0&&Y(te.__webglFramebuffer,N,N.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),q!==void 0&&Me(N)}function Re(N){const A=N.texture,q=i.get(N),te=i.get(A);N.addEventListener("dispose",R);const re=N.textures,ee=N.isWebGLCubeRenderTarget===!0,Ce=re.length>1;if(Ce||(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=A.version,a.memory.textures++),ee){q.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer[fe]=[];for(let ve=0;ve<A.mipmaps.length;ve++)q.__webglFramebuffer[fe][ve]=t.createFramebuffer()}else q.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer=[];for(let fe=0;fe<A.mipmaps.length;fe++)q.__webglFramebuffer[fe]=t.createFramebuffer()}else q.__webglFramebuffer=t.createFramebuffer();if(Ce)for(let fe=0,ve=re.length;fe<ve;fe++){const Fe=i.get(re[fe]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=t.createTexture(),a.memory.textures++)}if(N.samples>0&&we(N)===!1){q.__webglMultisampledFramebuffer=t.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let fe=0;fe<re.length;fe++){const ve=re[fe];q.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,q.__webglColorRenderbuffer[fe]);const Fe=s.convert(ve.format,ve.colorSpace),oe=s.convert(ve.type),ge=y(ve.internalFormat,Fe,oe,ve.colorSpace,N.isXRRenderTarget===!0),Ve=$e(N);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,ge,N.width,N.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,q.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),N.depthBuffer&&(q.__webglDepthRenderbuffer=t.createRenderbuffer(),ne(q.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),se(t.TEXTURE_CUBE_MAP,A);for(let fe=0;fe<6;fe++)if(A.mipmaps&&A.mipmaps.length>0)for(let ve=0;ve<A.mipmaps.length;ve++)Y(q.__webglFramebuffer[fe][ve],N,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ve);else Y(q.__webglFramebuffer[fe],N,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(A)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ce){for(let fe=0,ve=re.length;fe<ve;fe++){const Fe=re[fe],oe=i.get(Fe);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),se(t.TEXTURE_2D,Fe),Y(q.__webglFramebuffer,N,Fe,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),m(Fe)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(fe=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,te.__webglTexture),se(fe,A),A.mipmaps&&A.mipmaps.length>0)for(let ve=0;ve<A.mipmaps.length;ve++)Y(q.__webglFramebuffer[ve],N,A,t.COLOR_ATTACHMENT0,fe,ve);else Y(q.__webglFramebuffer,N,A,t.COLOR_ATTACHMENT0,fe,0);m(A)&&h(fe),n.unbindTexture()}N.depthBuffer&&Me(N)}function Xe(N){const A=N.textures;for(let q=0,te=A.length;q<te;q++){const re=A[q];if(m(re)){const ee=N.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ce=i.get(re).__webglTexture;n.bindTexture(ee,Ce),h(ee),n.unbindTexture()}}}const L=[],dt=[];function qe(N){if(N.samples>0){if(we(N)===!1){const A=N.textures,q=N.width,te=N.height;let re=t.COLOR_BUFFER_BIT;const ee=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ce=i.get(N),fe=A.length>1;if(fe)for(let ve=0;ve<A.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let ve=0;ve<A.length;ve++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[ve]);const Fe=i.get(A[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Fe,0)}t.blitFramebuffer(0,0,q,te,0,0,q,te,re,t.NEAREST),l===!0&&(L.length=0,dt.length=0,L.push(t.COLOR_ATTACHMENT0+ve),N.depthBuffer&&N.resolveDepthBuffer===!1&&(L.push(ee),dt.push(ee),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,dt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,L))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let ve=0;ve<A.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[ve]);const Fe=i.get(A[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,Fe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){const A=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[A])}}}function $e(N){return Math.min(r.maxSamples,N.samples)}function we(N){const A=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function vt(N){const A=a.render.frame;d.get(N)!==A&&(d.set(N,A),N.update())}function Ie(N,A){const q=N.colorSpace,te=N.format,re=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||q!==tr&&q!==Li&&(Qe.getTransfer(q)===rt?(te!==Fn||re!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),A}function Ue(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=C,this.setTexture2D=z,this.setTexture2DArray=H,this.setTexture3D=V,this.setTextureCube=$,this.rebindTextures=Ee,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=we}function yR(t,e){function n(i,r=Li){let s;const a=Qe.getTransfer(r);if(i===gi)return t.UNSIGNED_BYTE;if(i===Qh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===ef)return t.UNSIGNED_SHORT_5_5_5_1;if(i===U0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===I0)return t.BYTE;if(i===D0)return t.SHORT;if(i===ka)return t.UNSIGNED_SHORT;if(i===Jh)return t.INT;if(i===Rr)return t.UNSIGNED_INT;if(i===ci)return t.FLOAT;if(i===Wa)return t.HALF_FLOAT;if(i===F0)return t.ALPHA;if(i===O0)return t.RGB;if(i===Fn)return t.RGBA;if(i===k0)return t.LUMINANCE;if(i===z0)return t.LUMINANCE_ALPHA;if(i===ys)return t.DEPTH_COMPONENT;if(i===Is)return t.DEPTH_STENCIL;if(i===B0)return t.RED;if(i===tf)return t.RED_INTEGER;if(i===j0)return t.RG;if(i===nf)return t.RG_INTEGER;if(i===rf)return t.RGBA_INTEGER;if(i===nl||i===il||i===rl||i===sl)if(a===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===nl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===nl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===il)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===rl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Rd||i===bd||i===Pd||i===Nd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Rd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===bd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Nd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ld||i===Id||i===Dd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ld||i===Id)return a===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Dd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ud||i===Fd||i===Od||i===kd||i===zd||i===Bd||i===jd||i===Hd||i===Vd||i===Gd||i===Wd||i===Xd||i===qd||i===$d)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ud)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Od)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$d)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===al||i===Yd||i===Kd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===al)return a===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===H0||i===Zd||i===Jd||i===Qd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===al)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Zd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Jd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ls?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class SR extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ho extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const MR={type:"move"};class Su{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ho,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ho,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ho,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),h=this._getHandJoint(c,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=d.position.distanceTo(f.position),g=.02,v=.005;c.inputState.pinching&&p>g+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=g-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(MR)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ho;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const ER=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wR=`
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

}`;class TR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new rn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new _i({vertexShader:ER,fragmentShader:wR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new qn(new Ka(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class CR extends zs{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,f=null,p=null,g=null,v=null;const _=new TR,m=n.getContextAttributes();let h=null,y=null;const x=[],S=[],P=new He;let R=null;const w=new In;w.layers.enable(1),w.viewport=new Pt;const T=new In;T.layers.enable(2),T.viewport=new Pt;const M=[w,T],E=new SR;E.layers.enable(1),E.layers.enable(2);let C=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Y=x[j];return Y===void 0&&(Y=new Su,x[j]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(j){let Y=x[j];return Y===void 0&&(Y=new Su,x[j]=Y),Y.getGripSpace()},this.getHand=function(j){let Y=x[j];return Y===void 0&&(Y=new Su,x[j]=Y),Y.getHandSpace()};function F(j){const Y=S.indexOf(j.inputSource);if(Y===-1)return;const ne=x[Y];ne!==void 0&&(ne.update(j.inputSource,j.frame,c||a),ne.dispatchEvent({type:j.type,data:j.inputSource}))}function z(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",H);for(let j=0;j<x.length;j++){const Y=S[j];Y!==null&&(S[j]=null,x[j].disconnect(Y))}C=null,I=null,_.reset(),e.setRenderTarget(h),g=null,p=null,f=null,r=null,y=null,ue.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",z),r.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const Y={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,Y),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),y=new br(g.framebufferWidth,g.framebufferHeight,{format:Fn,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Y=null,ne=null,ae=null;m.depth&&(ae=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Y=m.stencil?Is:ys,ne=m.stencil?Ls:Rr);const Me={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:s};f=new XRWebGLBinding(r,n),p=f.createProjectionLayer(Me),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new br(p.textureWidth,p.textureHeight,{format:Fn,type:gi,depthTexture:new r_(p.textureWidth,p.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ue.setContext(r),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function H(j){for(let Y=0;Y<j.removed.length;Y++){const ne=j.removed[Y],ae=S.indexOf(ne);ae>=0&&(S[ae]=null,x[ae].disconnect(ne))}for(let Y=0;Y<j.added.length;Y++){const ne=j.added[Y];let ae=S.indexOf(ne);if(ae===-1){for(let Ee=0;Ee<x.length;Ee++)if(Ee>=S.length){S.push(ne),ae=Ee;break}else if(S[Ee]===null){S[Ee]=ne,ae=Ee;break}if(ae===-1)break}const Me=x[ae];Me&&Me.connect(ne)}}const V=new W,$=new W;function D(j,Y,ne){V.setFromMatrixPosition(Y.matrixWorld),$.setFromMatrixPosition(ne.matrixWorld);const ae=V.distanceTo($),Me=Y.projectionMatrix.elements,Ee=ne.projectionMatrix.elements,Re=Me[14]/(Me[10]-1),Xe=Me[14]/(Me[10]+1),L=(Me[9]+1)/Me[5],dt=(Me[9]-1)/Me[5],qe=(Me[8]-1)/Me[0],$e=(Ee[8]+1)/Ee[0],we=Re*qe,vt=Re*$e,Ie=ae/(-qe+$e),Ue=Ie*-qe;Y.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ue),j.translateZ(Ie),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const N=Re+Ie,A=Xe+Ie,q=we-Ue,te=vt+(ae-Ue),re=L*Xe/A*N,ee=dt*Xe/A*N;j.projectionMatrix.makePerspective(q,te,re,ee,N,A),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function K(j,Y){Y===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Y.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;_.texture!==null&&(j.near=_.depthNear,j.far=_.depthFar),E.near=T.near=w.near=j.near,E.far=T.far=w.far=j.far,(C!==E.near||I!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),C=E.near,I=E.far,w.near=C,w.far=I,T.near=C,T.far=I,w.updateProjectionMatrix(),T.updateProjectionMatrix(),j.updateProjectionMatrix());const Y=j.parent,ne=E.cameras;K(E,Y);for(let ae=0;ae<ne.length;ae++)K(ne[ae],Y);ne.length===2?D(E,w,T):E.projectionMatrix.copy(w.projectionMatrix),J(j,E,Y)};function J(j,Y,ne){ne===null?j.matrix.copy(Y.matrixWorld):(j.matrix.copy(ne.matrixWorld),j.matrix.invert(),j.matrix.multiply(Y.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Y.projectionMatrix),j.projectionMatrixInverse.copy(Y.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=eh*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(p===null&&g===null))return l},this.setFoveation=function(j){l=j,p!==null&&(p.fixedFoveation=j),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(E)};let se=null;function xe(j,Y){if(d=Y.getViewerPose(c||a),v=Y,d!==null){const ne=d.views;g!==null&&(e.setRenderTargetFramebuffer(y,g.framebuffer),e.setRenderTarget(y));let ae=!1;ne.length!==E.cameras.length&&(E.cameras.length=0,ae=!0);for(let Ee=0;Ee<ne.length;Ee++){const Re=ne[Ee];let Xe=null;if(g!==null)Xe=g.getViewport(Re);else{const dt=f.getViewSubImage(p,Re);Xe=dt.viewport,Ee===0&&(e.setRenderTargetTextures(y,dt.colorTexture,p.ignoreDepthValues?void 0:dt.depthStencilTexture),e.setRenderTarget(y))}let L=M[Ee];L===void 0&&(L=new In,L.layers.enable(Ee),L.viewport=new Pt,M[Ee]=L),L.matrix.fromArray(Re.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(Re.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Ee===0&&(E.matrix.copy(L.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ae===!0&&E.cameras.push(L)}const Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")){const Ee=f.getDepthInformation(ne[0]);Ee&&Ee.isValid&&Ee.texture&&_.init(e,Ee,r.renderState)}}for(let ne=0;ne<x.length;ne++){const ae=S[ne],Me=x[ne];ae!==null&&Me!==void 0&&Me.update(ae,Y,c||a)}se&&se(j,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),v=null}const ue=new n_;ue.setAnimationLoop(xe),this.setAnimationLoop=function(j){se=j},this.dispose=function(){}}}const lr=new vi,AR=new wt;function RR(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,J0(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,y,x,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),d(m,h)):h.isMeshStandardMaterial?(s(m,h),p(m,h),h.isMeshPhysicalMaterial&&g(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),v(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),_(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,y,x):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===nn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===nn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const y=e.get(h),x=y.envMap,S=y.envMapRotation;x&&(m.envMap.value=x,lr.copy(S),lr.x*=-1,lr.y*=-1,lr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),m.envMapRotation.value.setFromMatrix4(AR.makeRotationFromEuler(lr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,y,x){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*y,m.scale.value=x*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function p(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function g(m,h,y){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===nn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const y=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function bR(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const S=x.program;i.uniformBlockBinding(y,S)}function c(y,x){let S=r[y.id];S===void 0&&(v(y),S=d(y),r[y.id]=S,y.addEventListener("dispose",m));const P=x.program;i.updateUBOMapping(y,P);const R=e.render.frame;s[y.id]!==R&&(p(y),s[y.id]=R)}function d(y){const x=f();y.__bindingPointIndex=x;const S=t.createBuffer(),P=y.__size,R=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,P,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,S),S}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){const x=r[y.id],S=y.uniforms,P=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let R=0,w=S.length;R<w;R++){const T=Array.isArray(S[R])?S[R]:[S[R]];for(let M=0,E=T.length;M<E;M++){const C=T[M];if(g(C,R,M,P)===!0){const I=C.__offset,F=Array.isArray(C.value)?C.value:[C.value];let z=0;for(let H=0;H<F.length;H++){const V=F[H],$=_(V);typeof V=="number"||typeof V=="boolean"?(C.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,I+z,C.__data)):V.isMatrix3?(C.__data[0]=V.elements[0],C.__data[1]=V.elements[1],C.__data[2]=V.elements[2],C.__data[3]=0,C.__data[4]=V.elements[3],C.__data[5]=V.elements[4],C.__data[6]=V.elements[5],C.__data[7]=0,C.__data[8]=V.elements[6],C.__data[9]=V.elements[7],C.__data[10]=V.elements[8],C.__data[11]=0):(V.toArray(C.__data,z),z+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,I,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(y,x,S,P){const R=y.value,w=x+"_"+S;if(P[w]===void 0)return typeof R=="number"||typeof R=="boolean"?P[w]=R:P[w]=R.clone(),!0;{const T=P[w];if(typeof R=="number"||typeof R=="boolean"){if(T!==R)return P[w]=R,!0}else if(T.equals(R)===!1)return T.copy(R),!0}return!1}function v(y){const x=y.uniforms;let S=0;const P=16;for(let w=0,T=x.length;w<T;w++){const M=Array.isArray(x[w])?x[w]:[x[w]];for(let E=0,C=M.length;E<C;E++){const I=M[E],F=Array.isArray(I.value)?I.value:[I.value];for(let z=0,H=F.length;z<H;z++){const V=F[z],$=_(V),D=S%P,K=D%$.boundary,J=D+K;S+=K,J!==0&&P-J<$.storage&&(S+=P-J),I.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=$.storage}}}const R=S%P;return R>0&&(S+=P-R),y.__size=S,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const y in r)t.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}class PR{constructor(e={}){const{canvas:n=x1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),v=new Int32Array(4);let _=null,m=null;const h=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vn,this.toneMapping=qi,this.toneMappingExposure=1;const x=this;let S=!1,P=0,R=0,w=null,T=-1,M=null;const E=new Pt,C=new Pt;let I=null;const F=new tt(0);let z=0,H=n.width,V=n.height,$=1,D=null,K=null;const J=new Pt(0,0,H,V),se=new Pt(0,0,H,V);let xe=!1;const ue=new t_;let j=!1,Y=!1;const ne=new wt,ae=new W,Me=new Pt,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Re=!1;function Xe(){return w===null?$:1}let L=i;function dt(b,k){return n.getContext(b,k)}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Zh}`),n.addEventListener("webglcontextlost",Z,!1),n.addEventListener("webglcontextrestored",Q,!1),n.addEventListener("webglcontextcreationerror",de,!1),L===null){const k="webgl2";if(L=dt(k,b),L===null)throw dt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let qe,$e,we,vt,Ie,Ue,N,A,q,te,re,ee,Ce,fe,ve,Fe,oe,ge,Ve,Le,_e,De,ze,ot;function O(){qe=new FC(L),qe.init(),De=new yR(L,qe),$e=new PC(L,qe,e,De),we=new vR(L),vt=new zC(L),Ie=new iR,Ue=new xR(L,qe,we,Ie,$e,De,vt),N=new LC(x),A=new UC(x),q=new X1(L),ze=new RC(L,q),te=new OC(L,q,vt,ze),re=new jC(L,te,q,vt),Ve=new BC(L,$e,Ue),Fe=new NC(Ie),ee=new nR(x,N,A,qe,$e,ze,Fe),Ce=new RR(x,Ie),fe=new sR,ve=new dR(qe),ge=new AC(x,N,A,we,re,p,l),oe=new gR(x,re,$e),ot=new bR(L,vt,$e,we),Le=new bC(L,qe,vt),_e=new kC(L,qe,vt),vt.programs=ee.programs,x.capabilities=$e,x.extensions=qe,x.properties=Ie,x.renderLists=fe,x.shadowMap=oe,x.state=we,x.info=vt}O();const le=new CR(x,L);this.xr=le,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=qe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=qe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(b){b!==void 0&&($=b,this.setSize(H,V,!1))},this.getSize=function(b){return b.set(H,V)},this.setSize=function(b,k,G=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=b,V=k,n.width=Math.floor(b*$),n.height=Math.floor(k*$),G===!0&&(n.style.width=b+"px",n.style.height=k+"px"),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(H*$,V*$).floor()},this.setDrawingBufferSize=function(b,k,G){H=b,V=k,$=G,n.width=Math.floor(b*G),n.height=Math.floor(k*G),this.setViewport(0,0,b,k)},this.getCurrentViewport=function(b){return b.copy(E)},this.getViewport=function(b){return b.copy(J)},this.setViewport=function(b,k,G,X){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,k,G,X),we.viewport(E.copy(J).multiplyScalar($).round())},this.getScissor=function(b){return b.copy(se)},this.setScissor=function(b,k,G,X){b.isVector4?se.set(b.x,b.y,b.z,b.w):se.set(b,k,G,X),we.scissor(C.copy(se).multiplyScalar($).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(b){we.setScissorTest(xe=b)},this.setOpaqueSort=function(b){D=b},this.setTransparentSort=function(b){K=b},this.getClearColor=function(b){return b.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(b=!0,k=!0,G=!0){let X=0;if(b){let B=!1;if(w!==null){const ce=w.texture.format;B=ce===rf||ce===nf||ce===tf}if(B){const ce=w.texture.type,pe=ce===gi||ce===Rr||ce===ka||ce===Ls||ce===Qh||ce===ef,ye=ge.getClearColor(),Se=ge.getClearAlpha(),Pe=ye.r,Ne=ye.g,Ae=ye.b;pe?(g[0]=Pe,g[1]=Ne,g[2]=Ae,g[3]=Se,L.clearBufferuiv(L.COLOR,0,g)):(v[0]=Pe,v[1]=Ne,v[2]=Ae,v[3]=Se,L.clearBufferiv(L.COLOR,0,v))}else X|=L.COLOR_BUFFER_BIT}k&&(X|=L.DEPTH_BUFFER_BIT),G&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Z,!1),n.removeEventListener("webglcontextrestored",Q,!1),n.removeEventListener("webglcontextcreationerror",de,!1),fe.dispose(),ve.dispose(),Ie.dispose(),N.dispose(),A.dispose(),re.dispose(),ze.dispose(),ot.dispose(),ee.dispose(),le.dispose(),le.removeEventListener("sessionstart",Bn),le.removeEventListener("sessionend",uf),nr.stop()};function Z(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=vt.autoReset,k=oe.enabled,G=oe.autoUpdate,X=oe.needsUpdate,B=oe.type;O(),vt.autoReset=b,oe.enabled=k,oe.autoUpdate=G,oe.needsUpdate=X,oe.type=B}function de(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function be(b){const k=b.target;k.removeEventListener("dispose",be),Ge(k)}function Ge(b){_t(b),Ie.remove(b)}function _t(b){const k=Ie.get(b).programs;k!==void 0&&(k.forEach(function(G){ee.releaseProgram(G)}),b.isShaderMaterial&&ee.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,G,X,B,ce){k===null&&(k=Ee);const pe=B.isMesh&&B.matrixWorld.determinant()<0,ye=d_(b,k,G,X,B);we.setMaterial(X,pe);let Se=G.index,Pe=1;if(X.wireframe===!0){if(Se=te.getWireframeAttribute(G),Se===void 0)return;Pe=2}const Ne=G.drawRange,Ae=G.attributes.position;let Ke=Ne.start*Pe,ht=(Ne.start+Ne.count)*Pe;ce!==null&&(Ke=Math.max(Ke,ce.start*Pe),ht=Math.min(ht,(ce.start+ce.count)*Pe)),Se!==null?(Ke=Math.max(Ke,0),ht=Math.min(ht,Se.count)):Ae!=null&&(Ke=Math.max(Ke,0),ht=Math.min(ht,Ae.count));const ft=ht-Ke;if(ft<0||ft===1/0)return;ze.setup(B,X,ye,G,Se);let sn,Ze=Le;if(Se!==null&&(sn=q.get(Se),Ze=_e,Ze.setIndex(sn)),B.isMesh)X.wireframe===!0?(we.setLineWidth(X.wireframeLinewidth*Xe()),Ze.setMode(L.LINES)):Ze.setMode(L.TRIANGLES);else if(B.isLine){let Te=X.linewidth;Te===void 0&&(Te=1),we.setLineWidth(Te*Xe()),B.isLineSegments?Ze.setMode(L.LINES):B.isLineLoop?Ze.setMode(L.LINE_LOOP):Ze.setMode(L.LINE_STRIP)}else B.isPoints?Ze.setMode(L.POINTS):B.isSprite&&Ze.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Ze.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))Ze.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Te=B._multiDrawStarts,It=B._multiDrawCounts,Je=B._multiDrawCount,Tn=Se?q.get(Se).bytesPerElement:1,Ur=Ie.get(X).currentProgram.getUniforms();for(let an=0;an<Je;an++)Ur.setValue(L,"_gl_DrawID",an),Ze.render(Te[an]/Tn,It[an])}else if(B.isInstancedMesh)Ze.renderInstances(Ke,ft,B.count);else if(G.isInstancedBufferGeometry){const Te=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,It=Math.min(G.instanceCount,Te);Ze.renderInstances(Ke,ft,It)}else Ze.render(Ke,ft)};function Lt(b,k,G){b.transparent===!0&&b.side===ai&&b.forceSinglePass===!1?(b.side=nn,b.needsUpdate=!0,eo(b,k,G),b.side=Ki,b.needsUpdate=!0,eo(b,k,G),b.side=ai):eo(b,k,G)}this.compile=function(b,k,G=null){G===null&&(G=b),m=ve.get(G),m.init(k),y.push(m),G.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),b!==G&&b.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();const X=new Set;return b.traverse(function(B){const ce=B.material;if(ce)if(Array.isArray(ce))for(let pe=0;pe<ce.length;pe++){const ye=ce[pe];Lt(ye,G,B),X.add(ye)}else Lt(ce,G,B),X.add(ce)}),y.pop(),m=null,X},this.compileAsync=function(b,k,G=null){const X=this.compile(b,k,G);return new Promise(B=>{function ce(){if(X.forEach(function(pe){Ie.get(pe).currentProgram.isReady()&&X.delete(pe)}),X.size===0){B(b);return}setTimeout(ce,10)}qe.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Ye=null;function Zn(b){Ye&&Ye(b)}function Bn(){nr.stop()}function uf(){nr.start()}const nr=new n_;nr.setAnimationLoop(Zn),typeof self<"u"&&nr.setContext(self),this.setAnimationLoop=function(b){Ye=b,le.setAnimationLoop(b),b===null?nr.stop():nr.start()},le.addEventListener("sessionstart",Bn),le.addEventListener("sessionend",uf),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(k),k=le.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,k,w),m=ve.get(b,y.length),m.init(k),y.push(m),ne.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ue.setFromProjectionMatrix(ne),Y=this.localClippingEnabled,j=Fe.init(this.clippingPlanes,Y),_=fe.get(b,h.length),_.init(),h.push(_),le.enabled===!0&&le.isPresenting===!0){const ce=x.xr.getDepthSensingMesh();ce!==null&&fc(ce,k,-1/0,x.sortObjects)}fc(b,k,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(D,K),Re=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Re&&ge.addToRenderList(_,b),this.info.render.frame++,j===!0&&Fe.beginShadows();const G=m.state.shadowsArray;oe.render(G,b,k),j===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=_.opaque,B=_.transmissive;if(m.setupLights(),k.isArrayCamera){const ce=k.cameras;if(B.length>0)for(let pe=0,ye=ce.length;pe<ye;pe++){const Se=ce[pe];hf(X,B,b,Se)}Re&&ge.render(b);for(let pe=0,ye=ce.length;pe<ye;pe++){const Se=ce[pe];df(_,b,Se,Se.viewport)}}else B.length>0&&hf(X,B,b,k),Re&&ge.render(b),df(_,b,k);w!==null&&(Ue.updateMultisampleRenderTarget(w),Ue.updateRenderTargetMipmap(w)),b.isScene===!0&&b.onAfterRender(x,b,k),ze.resetDefaultState(),T=-1,M=null,y.pop(),y.length>0?(m=y[y.length-1],j===!0&&Fe.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function fc(b,k,G,X){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ue.intersectsSprite(b)){X&&Me.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ne);const pe=re.update(b),ye=b.material;ye.visible&&_.push(b,pe,ye,G,Me.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ue.intersectsObject(b))){const pe=re.update(b),ye=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Me.copy(b.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Me.copy(pe.boundingSphere.center)),Me.applyMatrix4(b.matrixWorld).applyMatrix4(ne)),Array.isArray(ye)){const Se=pe.groups;for(let Pe=0,Ne=Se.length;Pe<Ne;Pe++){const Ae=Se[Pe],Ke=ye[Ae.materialIndex];Ke&&Ke.visible&&_.push(b,pe,Ke,G,Me.z,Ae)}}else ye.visible&&_.push(b,pe,ye,G,Me.z,null)}}const ce=b.children;for(let pe=0,ye=ce.length;pe<ye;pe++)fc(ce[pe],k,G,X)}function df(b,k,G,X){const B=b.opaque,ce=b.transmissive,pe=b.transparent;m.setupLightsView(G),j===!0&&Fe.setGlobalState(x.clippingPlanes,G),X&&we.viewport(E.copy(X)),B.length>0&&Qa(B,k,G),ce.length>0&&Qa(ce,k,G),pe.length>0&&Qa(pe,k,G),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function hf(b,k,G,X){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[X.id]===void 0&&(m.state.transmissionRenderTarget[X.id]=new br(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float")?Wa:gi,minFilter:xr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const ce=m.state.transmissionRenderTarget[X.id],pe=X.viewport||E;ce.setSize(pe.z,pe.w);const ye=x.getRenderTarget();x.setRenderTarget(ce),x.getClearColor(F),z=x.getClearAlpha(),z<1&&x.setClearColor(16777215,.5),x.clear(),Re&&ge.render(G);const Se=x.toneMapping;x.toneMapping=qi;const Pe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),m.setupLightsView(X),j===!0&&Fe.setGlobalState(x.clippingPlanes,X),Qa(b,G,X),Ue.updateMultisampleRenderTarget(ce),Ue.updateRenderTargetMipmap(ce),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Ae=0,Ke=k.length;Ae<Ke;Ae++){const ht=k[Ae],ft=ht.object,sn=ht.geometry,Ze=ht.material,Te=ht.group;if(Ze.side===ai&&ft.layers.test(X.layers)){const It=Ze.side;Ze.side=nn,Ze.needsUpdate=!0,ff(ft,G,X,sn,Ze,Te),Ze.side=It,Ze.needsUpdate=!0,Ne=!0}}Ne===!0&&(Ue.updateMultisampleRenderTarget(ce),Ue.updateRenderTargetMipmap(ce))}x.setRenderTarget(ye),x.setClearColor(F,z),Pe!==void 0&&(X.viewport=Pe),x.toneMapping=Se}function Qa(b,k,G){const X=k.isScene===!0?k.overrideMaterial:null;for(let B=0,ce=b.length;B<ce;B++){const pe=b[B],ye=pe.object,Se=pe.geometry,Pe=X===null?pe.material:X,Ne=pe.group;ye.layers.test(G.layers)&&ff(ye,k,G,Se,Pe,Ne)}}function ff(b,k,G,X,B,ce){b.onBeforeRender(x,k,G,X,B,ce),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.transparent===!0&&B.side===ai&&B.forceSinglePass===!1?(B.side=nn,B.needsUpdate=!0,x.renderBufferDirect(G,k,X,B,b,ce),B.side=Ki,B.needsUpdate=!0,x.renderBufferDirect(G,k,X,B,b,ce),B.side=ai):x.renderBufferDirect(G,k,X,B,b,ce),b.onAfterRender(x,k,G,X,B,ce)}function eo(b,k,G){k.isScene!==!0&&(k=Ee);const X=Ie.get(b),B=m.state.lights,ce=m.state.shadowsArray,pe=B.state.version,ye=ee.getParameters(b,B.state,ce,k,G),Se=ee.getProgramCacheKey(ye);let Pe=X.programs;X.environment=b.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(b.isMeshStandardMaterial?A:N).get(b.envMap||X.environment),X.envMapRotation=X.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,Pe===void 0&&(b.addEventListener("dispose",be),Pe=new Map,X.programs=Pe);let Ne=Pe.get(Se);if(Ne!==void 0){if(X.currentProgram===Ne&&X.lightsStateVersion===pe)return mf(b,ye),Ne}else ye.uniforms=ee.getUniforms(b),b.onBeforeCompile(ye,x),Ne=ee.acquireProgram(ye,Se),Pe.set(Se,Ne),X.uniforms=ye.uniforms;const Ae=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ae.clippingPlanes=Fe.uniform),mf(b,ye),X.needsLights=f_(b),X.lightsStateVersion=pe,X.needsLights&&(Ae.ambientLightColor.value=B.state.ambient,Ae.lightProbe.value=B.state.probe,Ae.directionalLights.value=B.state.directional,Ae.directionalLightShadows.value=B.state.directionalShadow,Ae.spotLights.value=B.state.spot,Ae.spotLightShadows.value=B.state.spotShadow,Ae.rectAreaLights.value=B.state.rectArea,Ae.ltc_1.value=B.state.rectAreaLTC1,Ae.ltc_2.value=B.state.rectAreaLTC2,Ae.pointLights.value=B.state.point,Ae.pointLightShadows.value=B.state.pointShadow,Ae.hemisphereLights.value=B.state.hemi,Ae.directionalShadowMap.value=B.state.directionalShadowMap,Ae.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ae.spotShadowMap.value=B.state.spotShadowMap,Ae.spotLightMatrix.value=B.state.spotLightMatrix,Ae.spotLightMap.value=B.state.spotLightMap,Ae.pointShadowMap.value=B.state.pointShadowMap,Ae.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Ne,X.uniformsList=null,Ne}function pf(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=ol.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function mf(b,k){const G=Ie.get(b);G.outputColorSpace=k.outputColorSpace,G.batching=k.batching,G.batchingColor=k.batchingColor,G.instancing=k.instancing,G.instancingColor=k.instancingColor,G.instancingMorph=k.instancingMorph,G.skinning=k.skinning,G.morphTargets=k.morphTargets,G.morphNormals=k.morphNormals,G.morphColors=k.morphColors,G.morphTargetsCount=k.morphTargetsCount,G.numClippingPlanes=k.numClippingPlanes,G.numIntersection=k.numClipIntersection,G.vertexAlphas=k.vertexAlphas,G.vertexTangents=k.vertexTangents,G.toneMapping=k.toneMapping}function d_(b,k,G,X,B){k.isScene!==!0&&(k=Ee),Ue.resetTextureUnits();const ce=k.fog,pe=X.isMeshStandardMaterial?k.environment:null,ye=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:tr,Se=(X.isMeshStandardMaterial?A:N).get(X.envMap||pe),Pe=X.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ne=!!G.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ae=!!G.morphAttributes.position,Ke=!!G.morphAttributes.normal,ht=!!G.morphAttributes.color;let ft=qi;X.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ft=x.toneMapping);const sn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ze=sn!==void 0?sn.length:0,Te=Ie.get(X),It=m.state.lights;if(j===!0&&(Y===!0||b!==M)){const gn=b===M&&X.id===T;Fe.setState(X,b,gn)}let Je=!1;X.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==It.state.version||Te.outputColorSpace!==ye||B.isBatchedMesh&&Te.batching===!1||!B.isBatchedMesh&&Te.batching===!0||B.isBatchedMesh&&Te.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Te.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Te.instancing===!1||!B.isInstancedMesh&&Te.instancing===!0||B.isSkinnedMesh&&Te.skinning===!1||!B.isSkinnedMesh&&Te.skinning===!0||B.isInstancedMesh&&Te.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Te.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Te.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Te.instancingMorph===!1&&B.morphTexture!==null||Te.envMap!==Se||X.fog===!0&&Te.fog!==ce||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==Fe.numPlanes||Te.numIntersection!==Fe.numIntersection)||Te.vertexAlphas!==Pe||Te.vertexTangents!==Ne||Te.morphTargets!==Ae||Te.morphNormals!==Ke||Te.morphColors!==ht||Te.toneMapping!==ft||Te.morphTargetsCount!==Ze)&&(Je=!0):(Je=!0,Te.__version=X.version);let Tn=Te.currentProgram;Je===!0&&(Tn=eo(X,k,B));let Ur=!1,an=!1,pc=!1;const xt=Tn.getUniforms(),yi=Te.uniforms;if(we.useProgram(Tn.program)&&(Ur=!0,an=!0,pc=!0),X.id!==T&&(T=X.id,an=!0),Ur||M!==b){xt.setValue(L,"projectionMatrix",b.projectionMatrix),xt.setValue(L,"viewMatrix",b.matrixWorldInverse);const gn=xt.map.cameraPosition;gn!==void 0&&gn.setValue(L,ae.setFromMatrixPosition(b.matrixWorld)),$e.logarithmicDepthBuffer&&xt.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&xt.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,an=!0,pc=!0)}if(B.isSkinnedMesh){xt.setOptional(L,B,"bindMatrix"),xt.setOptional(L,B,"bindMatrixInverse");const gn=B.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),xt.setValue(L,"boneTexture",gn.boneTexture,Ue))}B.isBatchedMesh&&(xt.setOptional(L,B,"batchingTexture"),xt.setValue(L,"batchingTexture",B._matricesTexture,Ue),xt.setOptional(L,B,"batchingIdTexture"),xt.setValue(L,"batchingIdTexture",B._indirectTexture,Ue),xt.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&xt.setValue(L,"batchingColorTexture",B._colorsTexture,Ue));const mc=G.morphAttributes;if((mc.position!==void 0||mc.normal!==void 0||mc.color!==void 0)&&Ve.update(B,G,Tn),(an||Te.receiveShadow!==B.receiveShadow)&&(Te.receiveShadow=B.receiveShadow,xt.setValue(L,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(yi.envMap.value=Se,yi.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&(yi.envMapIntensity.value=k.environmentIntensity),an&&(xt.setValue(L,"toneMappingExposure",x.toneMappingExposure),Te.needsLights&&h_(yi,pc),ce&&X.fog===!0&&Ce.refreshFogUniforms(yi,ce),Ce.refreshMaterialUniforms(yi,X,$,V,m.state.transmissionRenderTarget[b.id]),ol.upload(L,pf(Te),yi,Ue)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ol.upload(L,pf(Te),yi,Ue),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&xt.setValue(L,"center",B.center),xt.setValue(L,"modelViewMatrix",B.modelViewMatrix),xt.setValue(L,"normalMatrix",B.normalMatrix),xt.setValue(L,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const gn=X.uniformsGroups;for(let gc=0,p_=gn.length;gc<p_;gc++){const gf=gn[gc];ot.update(gf,Tn),ot.bind(gf,Tn)}}return Tn}function h_(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function f_(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(b,k,G){Ie.get(b.texture).__webglTexture=k,Ie.get(b.depthTexture).__webglTexture=G;const X=Ie.get(b);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=G===void 0,X.__autoAllocateDepthBuffer||qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,k){const G=Ie.get(b);G.__webglFramebuffer=k,G.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(b,k=0,G=0){w=b,P=k,R=G;let X=!0,B=null,ce=!1,pe=!1;if(b){const Se=Ie.get(b);Se.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(L.FRAMEBUFFER,null),X=!1):Se.__webglFramebuffer===void 0?Ue.setupRenderTarget(b):Se.__hasExternalTextures&&Ue.rebindTextures(b,Ie.get(b.texture).__webglTexture,Ie.get(b.depthTexture).__webglTexture);const Pe=b.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(pe=!0);const Ne=Ie.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ne[k])?B=Ne[k][G]:B=Ne[k],ce=!0):b.samples>0&&Ue.useMultisampledRTT(b)===!1?B=Ie.get(b).__webglMultisampledFramebuffer:Array.isArray(Ne)?B=Ne[G]:B=Ne,E.copy(b.viewport),C.copy(b.scissor),I=b.scissorTest}else E.copy(J).multiplyScalar($).floor(),C.copy(se).multiplyScalar($).floor(),I=xe;if(we.bindFramebuffer(L.FRAMEBUFFER,B)&&X&&we.drawBuffers(b,B),we.viewport(E),we.scissor(C),we.setScissorTest(I),ce){const Se=Ie.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+k,Se.__webglTexture,G)}else if(pe){const Se=Ie.get(b.texture),Pe=k||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Se.__webglTexture,G||0,Pe)}T=-1},this.readRenderTargetPixels=function(b,k,G,X,B,ce,pe){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ie.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pe!==void 0&&(ye=ye[pe]),ye){we.bindFramebuffer(L.FRAMEBUFFER,ye);try{const Se=b.texture,Pe=Se.format,Ne=Se.type;if(!$e.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-X&&G>=0&&G<=b.height-B&&L.readPixels(k,G,X,B,De.convert(Pe),De.convert(Ne),ce)}finally{const Se=w!==null?Ie.get(w).__webglFramebuffer:null;we.bindFramebuffer(L.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(b,k,G,X,B,ce,pe){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Ie.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pe!==void 0&&(ye=ye[pe]),ye){we.bindFramebuffer(L.FRAMEBUFFER,ye);try{const Se=b.texture,Pe=Se.format,Ne=Se.type;if(!$e.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=b.width-X&&G>=0&&G<=b.height-B){const Ae=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ae),L.bufferData(L.PIXEL_PACK_BUFFER,ce.byteLength,L.STREAM_READ),L.readPixels(k,G,X,B,De.convert(Pe),De.convert(Ne),0),L.flush();const Ke=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await y1(L,Ke,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,Ae),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ce)}finally{L.deleteBuffer(Ae),L.deleteSync(Ke)}return ce}}finally{const Se=w!==null?Ie.get(w).__webglFramebuffer:null;we.bindFramebuffer(L.FRAMEBUFFER,Se)}}},this.copyFramebufferToTexture=function(b,k=null,G=0){b.isTexture!==!0&&(va("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,b=arguments[1]);const X=Math.pow(2,-G),B=Math.floor(b.image.width*X),ce=Math.floor(b.image.height*X),pe=k!==null?k.x:0,ye=k!==null?k.y:0;Ue.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,pe,ye,B,ce),we.unbindTexture()},this.copyTextureToTexture=function(b,k,G=null,X=null,B=0){b.isTexture!==!0&&(va("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,b=arguments[1],k=arguments[2],B=arguments[3]||0,G=null);let ce,pe,ye,Se,Pe,Ne;G!==null?(ce=G.max.x-G.min.x,pe=G.max.y-G.min.y,ye=G.min.x,Se=G.min.y):(ce=b.image.width,pe=b.image.height,ye=0,Se=0),X!==null?(Pe=X.x,Ne=X.y):(Pe=0,Ne=0);const Ae=De.convert(k.format),Ke=De.convert(k.type);Ue.setTexture2D(k,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);const ht=L.getParameter(L.UNPACK_ROW_LENGTH),ft=L.getParameter(L.UNPACK_IMAGE_HEIGHT),sn=L.getParameter(L.UNPACK_SKIP_PIXELS),Ze=L.getParameter(L.UNPACK_SKIP_ROWS),Te=L.getParameter(L.UNPACK_SKIP_IMAGES),It=b.isCompressedTexture?b.mipmaps[B]:b.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,It.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,It.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ye),L.pixelStorei(L.UNPACK_SKIP_ROWS,Se),b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,B,Pe,Ne,ce,pe,Ae,Ke,It.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,B,Pe,Ne,It.width,It.height,Ae,It.data):L.texSubImage2D(L.TEXTURE_2D,B,Pe,Ne,ce,pe,Ae,Ke,It),L.pixelStorei(L.UNPACK_ROW_LENGTH,ht),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ft),L.pixelStorei(L.UNPACK_SKIP_PIXELS,sn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ze),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Te),B===0&&k.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(b,k,G=null,X=null,B=0){b.isTexture!==!0&&(va("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,X=arguments[1]||null,b=arguments[2],k=arguments[3],B=arguments[4]||0);let ce,pe,ye,Se,Pe,Ne,Ae,Ke,ht;const ft=b.isCompressedTexture?b.mipmaps[B]:b.image;G!==null?(ce=G.max.x-G.min.x,pe=G.max.y-G.min.y,ye=G.max.z-G.min.z,Se=G.min.x,Pe=G.min.y,Ne=G.min.z):(ce=ft.width,pe=ft.height,ye=ft.depth,Se=0,Pe=0,Ne=0),X!==null?(Ae=X.x,Ke=X.y,ht=X.z):(Ae=0,Ke=0,ht=0);const sn=De.convert(k.format),Ze=De.convert(k.type);let Te;if(k.isData3DTexture)Ue.setTexture3D(k,0),Te=L.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)Ue.setTexture2DArray(k,0),Te=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);const It=L.getParameter(L.UNPACK_ROW_LENGTH),Je=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Tn=L.getParameter(L.UNPACK_SKIP_PIXELS),Ur=L.getParameter(L.UNPACK_SKIP_ROWS),an=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ft.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ft.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Se),L.pixelStorei(L.UNPACK_SKIP_ROWS,Pe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ne),b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Te,B,Ae,Ke,ht,ce,pe,ye,sn,Ze,ft.data):k.isCompressedArrayTexture?L.compressedTexSubImage3D(Te,B,Ae,Ke,ht,ce,pe,ye,sn,ft.data):L.texSubImage3D(Te,B,Ae,Ke,ht,ce,pe,ye,sn,Ze,ft),L.pixelStorei(L.UNPACK_ROW_LENGTH,It),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Je),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Tn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ur),L.pixelStorei(L.UNPACK_SKIP_IMAGES,an),B===0&&k.generateMipmaps&&L.generateMipmap(Te),we.unbindTexture()},this.initRenderTarget=function(b){Ie.get(b).__webglFramebuffer===void 0&&Ue.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ue.setTextureCube(b,0):b.isData3DTexture?Ue.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ue.setTexture2DArray(b,0):Ue.setTexture2D(b,0),we.unbindTexture()},this.resetState=function(){P=0,R=0,w=null,we.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===sf?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===oc?"display-p3":"srgb"}}class NR extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class LR{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Xm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Xm(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zh);const IR=`
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
`,qm=8;function UR(t){let e=t.trim();e.startsWith("#")&&(e=e.slice(1));let n=255,i=255,r=255;return e.length===3?(n=parseInt(e[0]+e[0],16),i=parseInt(e[1]+e[1],16),r=parseInt(e[2]+e[2],16)):e.length===6&&(n=parseInt(e.slice(0,2),16),i=parseInt(e.slice(2,4),16),r=parseInt(e.slice(4,6),16)),new W(n/255,i/255,r/255)}function FR({linesGradient:t,enabledWaves:e=["top","middle","bottom"],lineCount:n=[6],lineDistance:i=[5],topWavePosition:r,middleWavePosition:s,bottomWavePosition:a={x:2,y:-.7,rotate:-1},animationSpeed:o=1,interactive:l=!0,bendRadius:c=5,bendStrength:d=-.5,mouseDamping:f=.05,parallax:p=!0,parallaxStrength:g=.2,mixBlendMode:v="screen"}){const _=U.useRef(null),m=U.useRef(new He(-1e3,-1e3)),h=U.useRef(new He(-1e3,-1e3)),y=U.useRef(0),x=U.useRef(0),S=U.useRef(new He(0,0)),P=U.useRef(new He(0,0)),R=z=>{if(typeof n=="number")return n;if(!e.includes(z))return 0;const H=e.indexOf(z);return n[H]??6},w=z=>{if(typeof i=="number")return i;if(!e.includes(z))return .1;const H=e.indexOf(z);return i[H]??.1},T=e.includes("top")?R("top"):0,M=e.includes("middle")?R("middle"):0,E=e.includes("bottom")?R("bottom"):0,C=e.includes("top")?w("top")*.01:.01,I=e.includes("middle")?w("middle")*.01:.01,F=e.includes("bottom")?w("bottom")*.01:.01;return U.useEffect(()=>{if(!_.current)return;const z=new NR,H=new i_(-1,1,1,-1,0,1);H.position.z=1;const V=new PR({antialias:!0,alpha:!1});V.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),V.domElement.style.width="100%",V.domElement.style.height="100%",_.current.appendChild(V.domElement);const $={iTime:{value:0},iResolution:{value:new W(1,1,1)},animationSpeed:{value:o},enableTop:{value:e.includes("top")},enableMiddle:{value:e.includes("middle")},enableBottom:{value:e.includes("bottom")},topLineCount:{value:T},middleLineCount:{value:M},bottomLineCount:{value:E},topLineDistance:{value:C},middleLineDistance:{value:I},bottomLineDistance:{value:F},topWavePosition:{value:new W((r==null?void 0:r.x)??10,(r==null?void 0:r.y)??.5,(r==null?void 0:r.rotate)??-.4)},middleWavePosition:{value:new W((s==null?void 0:s.x)??5,(s==null?void 0:s.y)??0,(s==null?void 0:s.rotate)??.2)},bottomWavePosition:{value:new W((a==null?void 0:a.x)??2,(a==null?void 0:a.y)??-.7,(a==null?void 0:a.rotate)??.4)},iMouse:{value:new He(-1e3,-1e3)},interactive:{value:l},bendRadius:{value:c},bendStrength:{value:d},bendInfluence:{value:0},parallax:{value:p},parallaxStrength:{value:g},parallaxOffset:{value:new He(0,0)},lineGradient:{value:Array.from({length:qm},()=>new W(1,1,1))},lineGradientCount:{value:0}};if(t&&t.length>0){const Me=t.slice(0,qm);$.lineGradientCount.value=Me.length,Me.forEach((Ee,Re)=>{const Xe=UR(Ee);$.lineGradient.value[Re].set(Xe.x,Xe.y,Xe.z)})}const D=new _i({uniforms:$,vertexShader:IR,fragmentShader:DR}),K=new Ka(2,2),J=new qn(K,D);z.add(J);const se=new LR,xe=()=>{const Me=_.current;if(!Me)return;const Ee=Me.clientWidth||1,Re=Me.clientHeight||1;V.setSize(Ee,Re,!1);const Xe=V.domElement.width,L=V.domElement.height;$.iResolution.value.set(Xe,L,1)};xe();const ue=typeof ResizeObserver<"u"?new ResizeObserver(xe):null;ue&&_.current&&ue.observe(_.current);const j=Me=>{const Ee=V.domElement.getBoundingClientRect(),Re=Me.clientX-Ee.left,Xe=Me.clientY-Ee.top,L=V.getPixelRatio();if(m.current.set(Re*L,(Ee.height-Xe)*L),y.current=1,p){const dt=Ee.width/2,qe=Ee.height/2,$e=(Re-dt)/Ee.width,we=-(Xe-qe)/Ee.height;S.current.set($e*g,we*g)}},Y=()=>{y.current=0};l&&(V.domElement.addEventListener("pointermove",j),V.domElement.addEventListener("pointerleave",Y));let ne=0;const ae=()=>{$.iTime.value=se.getElapsedTime(),l&&(h.current.lerp(m.current,f),$.iMouse.value.copy(h.current),x.current+=(y.current-x.current)*f,$.bendInfluence.value=x.current),p&&(P.current.lerp(S.current,f),$.parallaxOffset.value.copy(P.current)),V.render(z,H),ne=requestAnimationFrame(ae)};return ae(),()=>{cancelAnimationFrame(ne),ue&&_.current&&ue.disconnect(),l&&(V.domElement.removeEventListener("pointermove",j),V.domElement.removeEventListener("pointerleave",Y)),K.dispose(),D.dispose(),V.dispose(),V.domElement.parentElement&&V.domElement.parentElement.removeChild(V.domElement)}},[o,c,d,E,F,a,e,l,n,i,t,M,I,s,f,p,g,T,C,r]),u.jsx("div",{ref:_,className:"floating-lines-container",style:{mixBlendMode:v}})}function OR(){return u.jsxs("div",{className:"ambient-bg","aria-hidden":"true",children:[u.jsx("div",{className:"ambient-layer",children:u.jsx(ME,{gradientColors:["#1a1f2b","#0b1020","#2b1140"],blindCount:14,spotlightOpacity:.6,noise:.28,shineDirection:"right"})}),u.jsx("div",{className:"ambient-layer",style:{mixBlendMode:"screen",opacity:.6},children:u.jsx(FR,{linesGradient:["#22d3ee","#4f7cff"],lineCount:[3,5,3]})}),u.jsx("div",{className:"ambient-overlay"})]})}function kR(){const{pathname:t}=Ir();return U.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},[t]),null}const uc="http://localhost:8080";async function Be(t,e){const n={"Content-Type":"application/json",...(e==null?void 0:e.headers)||{}},i=await fetch(`${uc}${t}`,{...e,headers:n});if(!i.ok){const r=await i.text();throw new Error(r||`Request failed: ${i.status}`)}return i.json()}const ta={heroTitle:"INERTIA 2.0: JEC Annual Tech Fest",heroSubtitle:"The flagship annual festival at Jabalpur Engineering College, featuring Hackathon, Workshops, Robo Race, eSports, Open Mic, and culture.",dates:"Coming 2026",location:"Jabalpur Engineering College, Jabalpur, Madhya Pradesh",highlights:["Hackathon","IoT Workshop","Robo Race","eSports Arena","Open Mic Stage","DJ Night & Culture Fest"]},_a=[{id:1,slug:"hackathon",title:"Hackathon",description:"2-day hackathon: prototype build on 26 Feb and stage presentation on 27 Feb. Fixed team size: 4 (leader + 3 members).",dateLabel:"26-27 Feb",ctaLabel:"Register Hackathon"},{id:2,slug:"workshops",title:"Workshop",description:"IoT-based single phase induction motor and speed control system workshop.",dateLabel:"2 Days",ctaLabel:"Register Workshop"},{id:3,slug:"robo-race",title:"Kinetic ShowDown",description:"RC car design and race challenge with teams of 2 to 4 members.",dateLabel:"Final Day",ctaLabel:"Register Robo Race"},{id:4,slug:"esports",title:"eSports",description:"Compete in Valorant (5 players) or BGMI (4 players).",dateLabel:"Tournament",ctaLabel:"Register eSports"},{id:5,slug:"open-mic",title:"Open Mic",description:"Free stage registration for performers.",dateLabel:"Open Stage",ctaLabel:"Register Open Mic"}],Mu=[{id:1,question:"What is the hackathon schedule?",answer:"26 February: prototype build. 27 February: stage presentation and explanation."},{id:2,question:"What is the hackathon registration fee?",answer:"The Hackathon registration fee is INR 300 per team."},{id:6,question:"What is the hackathon team size?",answer:"Exactly 4 members per team: 1 leader + 3 members."},{id:3,question:"What are the eSports team sizes?",answer:"Valorant needs 5 players, BGMI needs 4 players."},{id:4,question:"When are hackathon problem statements announced?",answer:"Problem statements are revealed on the spot."},{id:5,question:"Can I register for multiple events?",answer:"Yes, you can register for Hackathon, Workshops, Robo Race, eSports, and Open Mic."}];function $m(t){return t.replace(/CodeHunt Hackathon/gi,"Hackathon").replace(/Kinetic Showdown/gi,"Robo Race").replace(/Workshop Series/gi,"IoT Workshop")}function zR(t){const e=t.map(s=>s.slug==="robo-race"||s.slug==="kinetic-showdown"?{...s,slug:"robo-race",title:"Robo Race",ctaLabel:"Register Robo Race"}:s.slug==="hackathon"?{...s,title:"Hackathon",ctaLabel:"Register Hackathon"}:s.slug==="workshops"?{...s,title:"Workshop",description:"IoT-based single phase induction motor and speed control system workshop.",ctaLabel:"Register Workshop"}:s),n=e.some(s=>s.slug==="open-mic"),i=e.some(s=>s.slug==="esports"),r=[...e];return i||r.push(_a.find(s=>s.slug==="esports")),n||r.push(_a.find(s=>s.slug==="open-mic")),r}function BR(){const[t,e]=U.useState(ta),[n,i]=U.useState(_a),[r,s]=U.useState([]),[a,o]=U.useState(Mu);return U.useEffect(()=>{Be("/api/landing").then(l=>e({...ta,...l,heroSubtitle:ta.heroSubtitle,highlights:ta.highlights})).catch(()=>null),Be("/api/events").then(l=>i(Array.isArray(l)&&l.length>0?zR(l):_a)).catch(()=>null),Be("/api/gallery").then(l=>s(Array.isArray(l)?l:[])).catch(()=>s([])),Be("/api/faqs").then(l=>o(Array.isArray(l)?l.map(c=>({...c,question:$m(c.question),answer:$m(c.answer)})):Mu)).catch(()=>null)},[]),u.jsxs(u.Fragment,{children:[u.jsxs("section",{className:"hero",children:[u.jsx("div",{className:"hero-grid",children:u.jsxs("div",{className:"text-panel",children:[u.jsx("span",{className:"hero-tag",children:"Annual Tech Fest · JEC"}),u.jsx("h1",{className:"hero-title",children:t.heroTitle}),u.jsx("p",{className:"hero-subtitle",children:t.heroSubtitle}),u.jsxs("div",{className:"hero-actions",children:[u.jsx(Ut,{className:"btn btn-primary",to:"/register",children:"Register Now"}),u.jsx(Ut,{className:"btn btn-ghost",to:"/hackathon",children:"Hackathon Registration"})]}),u.jsxs("div",{className:"pillars",children:[u.jsx("span",{className:"pillar",children:t.dates}),u.jsx("span",{className:"pillar",children:t.location})]})]})}),u.jsx("div",{className:"section-divider"})]}),u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Fest Highlights"}),u.jsx("p",{className:"section-subtitle",children:"Explore the core experiences of Inertia 2.0 and plan your festival journey."}),u.jsx("div",{className:"cards-grid",children:(t.highlights??ta.highlights).map((l,c)=>u.jsxs("div",{className:"card",children:[u.jsx("span",{className:"badge",children:"Highlight"}),u.jsx("h4",{children:l}),u.jsx("p",{children:"Join early to secure your spot and stay updated on schedules."})]},c))})]}),u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"About Jabalpur Engineering College"}),u.jsx("p",{className:"section-subtitle",children:"Jabalpur Engineering College (JEC) was established in 1947 and is the first engineering college in Central India. The campus hosts undergraduate, postgraduate, and doctoral programs and is known for academic excellence, research culture, and innovation-driven learning."}),u.jsxs("div",{className:"cards-grid",children:[u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:"Legacy of Excellence"}),u.jsx("p",{children:"Decades of engineering education with strong industry and research outcomes."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:"Research & Innovation"}),u.jsx("p",{children:"Modern labs and faculty guidance that fuel experimentation and new ideas."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:"Campus Experience"}),u.jsx("p",{children:"A sprawling campus in Jabalpur built for collaboration and maker culture."})]})]})]}),u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"INERTIA 2.0 Lineup"}),u.jsx("p",{className:"section-subtitle",children:"INERTIA 2.0 expands the festival with a stronger mix of technical and cultural experiences."}),u.jsxs("div",{className:"cards-grid",children:[u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:"Tech Talks"}),u.jsx("p",{children:"Industry leaders and researchers share insights, trends, and real-world case studies."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:"Startup & Project Expo"}),u.jsx("p",{children:"Showcase innovations, prototypes, and student ventures from across the region."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:"Automotive Competition"}),u.jsx("p",{children:"Speed, strategy, and engineering challenges focused on mobility and design."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:"Defense Expo"}),u.jsx("p",{children:"Explore defense tech, engineering showcases, and innovation exhibits."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:"Cultural Extravaganza"}),u.jsx("p",{children:"Live stage performances, DJ night, and celebration across the campus."})]})]})]}),u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Workshop Spotlight"}),u.jsx("p",{className:"section-subtitle",children:"Only one workshop will be conducted: IoT-based single phase induction motor and speed control system."}),u.jsx("div",{className:"cards-grid",children:u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:"IoT-Based Motor Speed Control Workshop"}),u.jsx("p",{children:"Mentor: Dr. Praveen Kumar Sharma (PhD, NIT Durgapur)."}),u.jsx("p",{children:"Date: 26-27 February 2026."}),u.jsx("p",{children:"Venue: Jashan Audi, JEC Jabalpur."}),u.jsx("p",{children:"Fee: INR 300."})]})})]}),u.jsxs("section",{className:"section dark",children:[u.jsx("h2",{className:"section-title",children:"Core Events"}),u.jsx("p",{className:"section-subtitle",children:"Hackathon, Workshop, Robo Race, eSports, and Open Mic with dedicated registration flows."}),u.jsx("div",{className:"event-grid",children:(n&&n.length>0?n:_a).map(l=>u.jsxs("div",{className:"event-card",children:[u.jsx("span",{className:"badge",children:l.dateLabel}),u.jsx("h3",{children:l.title}),u.jsx("p",{children:l.description}),u.jsx(Ut,{className:"btn btn-ghost",to:`/${l.slug}`,children:l.ctaLabel})]},l.id))})]}),u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Impact Snapshot"}),u.jsx("p",{className:"section-subtitle",children:"From participation to media reach, INERTIA continues to grow each year."}),u.jsxs("div",{className:"cards-grid",children:[u.jsxs("div",{className:"card",children:[u.jsx("span",{className:"badge",children:"Footfall"}),u.jsx("h4",{children:"1,900+"}),u.jsx("p",{children:"Peak campus footfall recorded for the INERTIA edition."})]}),u.jsxs("div",{className:"card",children:[u.jsx("span",{className:"badge",children:"Social Reach"}),u.jsx("h4",{children:"562+"}),u.jsx("p",{children:"Social media reach benchmark from the brochure insights."})]}),u.jsxs("div",{className:"card",children:[u.jsx("span",{className:"badge",children:"Media Coverage"}),u.jsx("h4",{children:"4 Outlets"}),u.jsx("p",{children:"Coverage across Dainik Bhaskar, Patrika, Nayi Dunia, and Hari Bhoomi."})]})]})]}),u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Glimpses"}),u.jsx("p",{className:"section-subtitle",children:"Highlights and memories from previous editions."}),r.length===0?u.jsx("div",{className:"banner empty-state",children:"No entries available yet."}):u.jsx("div",{className:"gallery-grid",children:r.map(l=>u.jsxs("div",{className:"gallery-card",children:[u.jsx("img",{src:l.imageUrl,alt:l.title}),u.jsxs("div",{className:"gallery-meta",children:[u.jsx("strong",{children:l.preview||l.title}),u.jsx("p",{children:l.description})]})]},l.id))})]}),u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"FAQs"}),u.jsx("div",{className:"faq-list",children:(a??Mu).map(l=>u.jsxs("div",{className:"faq-item",children:[u.jsx("strong",{children:l.question}),u.jsx("p",{children:l.answer})]},l.id))})]})]})}const Ym="razorpay-checkout-script";function jR(){if(window.Razorpay)return Promise.resolve();const t=document.getElementById(Ym);return t?new Promise((e,n)=>{t.addEventListener("load",()=>e(),{once:!0}),t.addEventListener("error",()=>n(new Error("Unable to load payment gateway")),{once:!0})}):new Promise((e,n)=>{const i=document.createElement("script");i.id=Ym,i.src="https://checkout.razorpay.com/v1/checkout.js",i.async=!0,i.onload=()=>e(),i.onerror=()=>n(new Error("Unable to load payment gateway")),document.body.appendChild(i)})}function HR(t,e,n){return new Promise((i,r)=>{if(!window.Razorpay){r(new Error("Payment gateway not available"));return}new window.Razorpay({key:t.key,amount:t.amount,currency:t.currency,name:"Inertia 2.0",description:`${n} Registration`,order_id:t.orderId,prefill:e,theme:{color:"#1d4ed8"},handler:a=>{i({razorpayOrderId:a.razorpay_order_id,razorpayPaymentId:a.razorpay_payment_id,razorpaySignature:a.razorpay_signature})},modal:{ondismiss:()=>r(new Error("Payment was cancelled"))}}).open()})}async function lf(t,e,n){return c_(t,e,n)}async function c_(t,e,n,i){await jR();const r=await Be("/api/payments/razorpay/order",{method:"POST",body:JSON.stringify({event:t})});return HR(r,e,n)}const Za={hackathon:"https://chat.whatsapp.com/Levkc07bFIPJrgUcvvHx18?mode=gi_t",kineticShowdown:"https://chat.whatsapp.com/IwlQQ0CvlZXDrQuOEysHNk?mode=gi_t",workshops:"https://chat.whatsapp.com/KdtdwL2U4LoLffzGjiy6Nj?mode=gi_t",esports:"https://chat.whatsapp.com/LGGupN5pEaf8oyTq3vNC1F?mode=gi_t",openMic:"https://chat.whatsapp.com/LbqecHlh4iZJXabqiVZPWM?mode=gi_t"};function Ja(t){window.location.href=t}const Km=()=>Array.from({length:3},()=>({name:"",phone:"",gender:"female"}));function VR(){const[t,e]=U.useState({teamName:"",contactName:"",contactPhone:"",collegeName:""}),[n,i]=U.useState(Km()),[r,s]=U.useState(""),[a,o]=U.useState(!1),[l,c]=U.useState(""),[d,f]=U.useState(!1),[p,g]=U.useState(""),[v,_]=U.useState({phone:"",code:""}),[m,h]=U.useState(!1),[y,x]=U.useState(""),[S,P]=U.useState(null),R=(C,I,F)=>{i(z=>z.map((H,V)=>V===C?{...H,[I]:F}:H))},w=async C=>{C.preventDefault(),s(""),o(!0);try{if(n.filter(H=>H.gender.toLowerCase()==="female").length<1)throw new Error("At least one female member is required.");const F=await lf("hackathon",{name:t.contactName,contact:t.contactPhone},"CodeHunt Hackathon"),z=await Be("/api/hackathon/register",{method:"POST",body:JSON.stringify({...t,members:n,...F})});s(`${z.message} Redirecting to WhatsApp group...`),e({teamName:"",contactName:"",contactPhone:"",collegeName:""}),i(Km()),setTimeout(()=>Ja(Za.hackathon),1400)}catch(I){s(I instanceof Error?I.message:"Unable to complete registration")}finally{o(!1)}},T=async C=>{C.preventDefault(),g(""),f(!0);try{const I=await Be("/api/hackathon/id-card/request",{method:"POST",body:JSON.stringify({leaderPhone:l})});g(I.message),c("")}catch(I){g(I instanceof Error?I.message:"Unable to send request")}finally{f(!1)}},M=async C=>{C.preventDefault(),x(""),h(!0);try{const I=await Be("/api/hackathon/id-card/verify",{method:"POST",body:JSON.stringify({phone:v.phone,code:v.code})});P(I),x("ID card generated successfully.")}catch(I){P(null),x(I instanceof Error?I.message:"Unable to verify details")}finally{h(!1)}},E=()=>{S&&(x(""),fetch(`${uc}/api/hackathon/id-card/download`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({phone:v.phone,code:v.code})}).then(async C=>{if(!C.ok){const V=await C.text();throw new Error(V||"Unable to download ID card")}const I=await C.blob(),F=window.URL.createObjectURL(I),z=document.createElement("a"),H=S.participantName.trim().toLowerCase().replace(/[^a-z0-9]+/g,"-");z.href=F,z.download=`${H||"participant"}-hackathon-id.svg`,document.body.appendChild(z),z.click(),z.remove(),window.URL.revokeObjectURL(F)}).catch(C=>{x(C instanceof Error?C.message:"Unable to download ID card")}))};return u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"CodeHunt Hackathon"}),u.jsxs("div",{className:"banner",style:{marginBottom:"18px"},children:[u.jsx("strong",{children:"Top Note: We only need the solution for the idea."}),u.jsx("p",{style:{margin:"8px 0 0"},children:"Focus on solving the problem clearly. Your implementation can be simple, scrappy, or polished. Vibe coding is allowed."})]}),u.jsxs("div",{className:"banner",style:{marginBottom:"18px"},children:[u.jsx("strong",{children:"Important: Team size is fixed to 4 members only"}),u.jsx("p",{style:{margin:"8px 0 0"},children:"1 Leader + 3 Team Members"})]}),u.jsxs("div",{className:"prize-pool-spotlight",children:[u.jsx("span",{className:"prize-pool-label",children:"Prize Pool"}),u.jsx("div",{className:"prize-pool-value",children:"INR 12,000"})]}),u.jsx("p",{className:"section-subtitle",children:"Two-day hackathon with internship interview opportunities, prototype building, and live stage presentations."}),u.jsx("div",{className:"cards-grid",style:{marginTop:"24px"},children:u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:"Hackathon Sponsors"}),u.jsxs("div",{className:"sponsor-row",children:[u.jsx("img",{className:"sponsor-logo",src:"/time.png",alt:"Time sponsor",onError:C=>C.currentTarget.style.display="none"}),u.jsx("img",{className:"sponsor-logo",src:"/upgrad.png",alt:"upGrad sponsor",onError:C=>C.currentTarget.style.display="none"})]}),u.jsx("p",{style:{marginTop:"12px"},children:"Sponsors: TIME and upGrad."})]})}),u.jsxs("div",{className:"banner",style:{marginTop:"22px"},children:[u.jsx("h4",{style:{marginTop:0},children:"Why Join CodeHunt Hackathon"}),u.jsxs("ul",{children:[u.jsxs("li",{children:[u.jsx("strong",{children:"Day 1 (26 February):"})," Build your prototype."]}),u.jsxs("li",{children:[u.jsx("strong",{children:"Day 2 (27 February):"})," Present and explain your prototype live on stage."]}),u.jsxs("li",{children:[u.jsx("strong",{children:"Team size rule:"})," Exactly 4 members (1 leader + 3 members)."]}),u.jsx("li",{children:"Registration fee: INR 300 per team."}),u.jsx("li",{children:"Problem statements will be revealed on the spot."}),u.jsxs("li",{children:[u.jsx("strong",{children:"Vibe coding is allowed:"})," Use AI tools, rapid prototyping, and creative workflows to build your solution faster."]}),u.jsx("li",{children:"100% internship opportunity path: 10 participants will be shortlisted for internship interviews at upGrad or TIME."}),u.jsx("li",{children:"Refreshments will be provided during the hackathon."}),u.jsx("li",{children:"Strong exposure for students across Jabalpur."})]})]}),u.jsxs("div",{className:"card",style:{marginTop:"24px"},children:[u.jsx("h4",{children:"Hackathon Team Registration"}),u.jsx("p",{style:{marginTop:0},children:"Fill details for the leader first, then add 3 team members."}),u.jsxs("form",{className:"form-grid",onSubmit:w,children:[u.jsx("input",{placeholder:"Team name",value:t.teamName,onChange:C=>e({...t,teamName:C.target.value}),required:!0}),u.jsx("input",{placeholder:"Leader name",value:t.contactName,onChange:C=>e({...t,contactName:C.target.value}),required:!0}),u.jsx("input",{placeholder:"Leader WhatsApp number",value:t.contactPhone,onChange:C=>e({...t,contactPhone:C.target.value}),required:!0}),u.jsx("input",{placeholder:"College name",value:t.collegeName,onChange:C=>e({...t,collegeName:C.target.value}),required:!0}),n.map((C,I)=>u.jsxs("div",{className:"card",children:[u.jsxs("h4",{children:["Team Member ",I+1]}),u.jsxs("div",{className:"form-grid",children:[u.jsx("input",{placeholder:`Member ${I+1} name`,value:C.name,onChange:F=>R(I,"name",F.target.value),required:!0}),u.jsx("input",{placeholder:`Member ${I+1} WhatsApp number`,value:C.phone,onChange:F=>R(I,"phone",F.target.value),required:!0}),u.jsxs("select",{value:C.gender,onChange:F=>R(I,"gender",F.target.value),children:[u.jsx("option",{value:"female",children:"Female"}),u.jsx("option",{value:"male",children:"Male"}),u.jsx("option",{value:"other",children:"Other"})]})]})]},I)),u.jsx("button",{className:"btn btn-primary",type:"submit",disabled:a,children:a?"Processing Payment...":"Pay & Register Hackathon"})]})]}),r&&u.jsx("div",{className:"banner",style:{marginTop:"20px"},children:r}),u.jsxs("div",{className:"cards-grid",style:{marginTop:"24px"},children:[u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:"Team Leader: Request e-ID Card"}),u.jsx("p",{children:"Enter the registered leader phone number and send request to hackathon manager."}),u.jsxs("form",{className:"form-grid",onSubmit:T,children:[u.jsx("input",{placeholder:"Registered leader WhatsApp number",value:l,onChange:C=>c(C.target.value),required:!0}),u.jsx("button",{className:"btn btn-primary",type:"submit",disabled:d,children:d?"Sending Request...":"Request e-ID Card"})]}),p&&u.jsx("div",{className:"banner",style:{marginTop:"16px"},children:p})]}),u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:"Team Member: Get e-ID Card"}),u.jsx("p",{children:"Enter your registered phone number and 4-digit code from manager."}),u.jsxs("form",{className:"form-grid",onSubmit:M,children:[u.jsx("input",{placeholder:"Registered phone number",value:v.phone,onChange:C=>_(I=>({...I,phone:C.target.value})),required:!0}),u.jsx("input",{placeholder:"4-digit code",value:v.code,maxLength:4,onChange:C=>_(I=>({...I,code:C.target.value})),required:!0}),u.jsx("button",{className:"btn btn-primary",type:"submit",disabled:m,children:m?"Verifying...":"Get ID Card"})]}),y&&u.jsx("div",{className:"banner",style:{marginTop:"16px"},children:y})]})]}),S&&u.jsxs("div",{className:"card",style:{marginTop:"24px"},children:[u.jsx("h4",{children:"Your Hackathon e-ID Card"}),u.jsxs("div",{className:"id-card-preview",children:[u.jsxs("div",{className:"id-card-header",children:[u.jsx("div",{className:"id-card-event",children:"CODEHUNT HACKATHON"}),u.jsx("div",{className:"id-card-subtitle",children:"Official Participant ID"})]}),u.jsxs("div",{className:"id-card-body",children:[u.jsxs("p",{children:[u.jsx("strong",{children:"Name:"})," ",S.participantName]}),u.jsxs("p",{children:[u.jsx("strong",{children:"Role:"})," ",S.role]}),u.jsxs("p",{children:[u.jsx("strong",{children:"Phone:"})," ",S.participantPhone]}),u.jsxs("p",{children:[u.jsx("strong",{children:"Team:"})," ",S.teamName]}),u.jsxs("p",{children:[u.jsx("strong",{children:"College:"})," ",S.collegeName]}),u.jsxs("p",{children:[u.jsx("strong",{children:"Team ID:"})," CH-",S.teamId]}),u.jsxs("p",{children:[u.jsx("strong",{children:"Team Code:"})," ",S.teamCode]}),u.jsxs("p",{children:[u.jsx("strong",{children:"Issued:"})," ",S.issuedAt]})]})]}),u.jsx("button",{className:"btn btn-primary",type:"button",style:{marginTop:"16px"},onClick:E,children:"Download ID Card"})]})]})}const Vo={id:1,title:"IoT-Based Single Phase Induction Motor / Speed Control System",description:"Mentor: Dr. Praveen Kumar Sharma (PhD, NIT Durgapur) | Date: 26-27 Feb 2026 | Venue: Jashan Audi, JEC Jabalpur | Fee: INR 300."};function GR(){var c;const[t,e]=U.useState([Vo]),[n,i]=U.useState({name:"",phone:"",collegeName:"",workshopId:String(Vo.id)}),[r,s]=U.useState(""),[a,o]=U.useState(!1);U.useEffect(()=>{Be("/api/workshops").then(d=>{if(!Array.isArray(d)||d.length===0)return;const f=d.find(p=>/iot|single phase|induction|speed control/i.test(`${p.title} ${p.description}`))??d[0];e([{...Vo,id:f.id}]),i(p=>({...p,workshopId:String(f.id)}))}).catch(()=>null)},[]);const l=async d=>{d.preventDefault(),s(""),o(!0);try{const f=await lf("workshops",{name:n.name,contact:n.phone},"Workshop"),p=await Be("/api/workshops/register",{method:"POST",body:JSON.stringify({...n,...f})});s(`${p.message} Redirecting to WhatsApp group...`),i(g=>({name:"",phone:"",collegeName:"",workshopId:g.workshopId})),setTimeout(()=>Ja(Za.workshops),1400)}catch(f){s(f instanceof Error?f.message:"Unable to register")}finally{o(!1)}};return u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Workshop"}),u.jsx("p",{className:"section-subtitle",children:"Only one workshop is available. Complete registration below."}),u.jsx("div",{className:"cards-grid",children:t.map(d=>u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:d.title}),u.jsx("p",{children:d.description})]},d.id))}),u.jsxs("div",{className:"card",style:{marginTop:"28px"},children:[u.jsx("h4",{children:"Workshop Registration"}),u.jsxs("form",{className:"form-grid",onSubmit:l,children:[u.jsx("input",{placeholder:"Full name",value:n.name,onChange:d=>i({...n,name:d.target.value}),required:!0}),u.jsx("input",{placeholder:"WhatsApp number",value:n.phone,onChange:d=>i({...n,phone:d.target.value}),required:!0}),u.jsx("input",{placeholder:"College name",value:n.collegeName,onChange:d=>i({...n,collegeName:d.target.value}),required:!0}),u.jsx("input",{value:((c=t[0])==null?void 0:c.title)??Vo.title,readOnly:!0}),u.jsx("button",{className:"btn btn-primary",type:"submit",disabled:a,children:a?"Processing Payment...":"Pay & Register Workshop"})]}),r&&u.jsx("div",{className:"banner",style:{marginTop:"18px"},children:r})]})]})}function Zm(){const t=U.useRef(null),[e,n]=U.useState({teamName:"",teamLeaderName:"",phone:"",collegeName:"",memberCount:2}),[i,r]=U.useState([{name:"",phone:"",branch:"",semester:"",collegeName:""},{name:"",phone:"",branch:"",semester:"",collegeName:""}]),[s,a]=U.useState(""),[o,l]=U.useState(!1),c=U.useMemo(()=>Math.max(2,Math.min(4,e.memberCount)),[e.memberCount]),d=v=>{r(_=>_.length===v?_:_.length>v?_.slice(0,v):[..._,...Array.from({length:v-_.length},()=>({name:"",phone:"",branch:"",semester:"",collegeName:""}))])},f=v=>{const _=Number(v),m=Number.isNaN(_)?2:Math.max(2,Math.min(4,_));n(h=>({...h,memberCount:m})),d(m)},p=(v,_,m)=>{r(h=>h.map((y,x)=>x===v?{...y,[_]:m}:y))},g=async v=>{v.preventDefault(),a(""),l(!0);try{const _=await c_("kinetic-showdown",{name:e.teamLeaderName,contact:e.phone},"Kinetic Showdown"),m=i.map(y=>({...y,collegeName:y.collegeName||e.collegeName})),h=await Be("/api/kinetic-showdown/register",{method:"POST",body:JSON.stringify({...e,memberCount:c,members:m,..._})});a(`${h.message} Redirecting to WhatsApp group...`),n({teamName:"",teamLeaderName:"",phone:"",collegeName:"",memberCount:2}),r([{name:"",phone:"",branch:"",semester:"",collegeName:""},{name:"",phone:"",branch:"",semester:"",collegeName:""}]),setTimeout(()=>Ja(Za.kineticShowdown),1400)}catch(_){a(_ instanceof Error?_.message:"Unable to register")}finally{l(!1)}};return u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Kinetic Showdown"}),u.jsxs("div",{className:"prize-pool-spotlight",children:[u.jsx("span",{className:"prize-pool-label",children:"Prize Pool"}),u.jsx("div",{className:"prize-pool-value",children:"INR 12,000"})]}),u.jsx("p",{className:"section-subtitle",children:"Team entry: INR 300 per team. Choose 2 to 4 members and complete payment."}),u.jsxs("div",{className:"banner",children:[u.jsx("h4",{style:{marginTop:0},children:"RC Car Competition - Information Brochure"}),u.jsx("p",{children:"COSMOS JEC is organizing the Kinetic Showdown RC Car competition during Inertia."}),u.jsxs("ul",{children:[u.jsx("li",{children:"Team size: minimum 2 and maximum 4."}),u.jsx("li",{children:"Car limit: max 20cm x 20cm, max height 15cm, max weight 1.2kg."}),u.jsx("li",{children:"No readymade framework/design; participants must build their own solution."}),u.jsx("li",{children:"Wireless control required (Wi-Fi/Bluetooth/LoRa/Zigbee/RF modules)."}),u.jsx("li",{children:"Allowed stacks include Arduino, ESP, STM, Raspberry Pi, and similar platforms."}),u.jsx("li",{children:"Chassis can be MDF/foam/cardboard/acrylic/3D print or other strong material."}),u.jsx("li",{children:"Power must be on-board; no wired external power source."}),u.jsx("li",{children:"Scoring: Build quality 10%, component decisions 10%, architecture 20%, creativity 10%, race 50%."})]})]}),u.jsx("div",{style:{marginTop:"22px"},children:u.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>{var v;return(v=t.current)==null?void 0:v.scrollIntoView({behavior:"smooth",block:"start"})},children:"Registration"})}),u.jsxs("div",{className:"card",style:{marginTop:"24px"},ref:t,children:[u.jsx("h4",{children:"Kinetic Showdown Registration"}),u.jsxs("form",{className:"form-grid",onSubmit:g,children:[u.jsx("input",{placeholder:"Team name",value:e.teamName,onChange:v=>n({...e,teamName:v.target.value}),required:!0}),u.jsx("input",{placeholder:"Team leader name",value:e.teamLeaderName,onChange:v=>n({...e,teamLeaderName:v.target.value}),required:!0}),u.jsx("input",{placeholder:"WhatsApp number",value:e.phone,onChange:v=>n({...e,phone:v.target.value}),required:!0}),u.jsx("input",{placeholder:"College name",value:e.collegeName,onChange:v=>n({...e,collegeName:v.target.value}),required:!0}),u.jsx("input",{type:"number",min:2,max:4,value:c,onChange:v=>f(v.target.value),required:!0}),i.map((v,_)=>u.jsxs("div",{className:"card",children:[u.jsxs("h4",{children:["Student ",_+1]}),u.jsxs("div",{className:"form-grid",children:[u.jsx("input",{placeholder:"Student name",value:v.name,onChange:m=>p(_,"name",m.target.value),required:!0}),u.jsx("input",{placeholder:"Student WhatsApp number",value:v.phone,onChange:m=>p(_,"phone",m.target.value),required:!0}),u.jsx("input",{placeholder:"Branch",value:v.branch,onChange:m=>p(_,"branch",m.target.value),required:!0}),u.jsx("input",{placeholder:"Semester / Year",value:v.semester,onChange:m=>p(_,"semester",m.target.value),required:!0}),u.jsx("input",{placeholder:"College name",value:v.collegeName,onChange:m=>p(_,"collegeName",m.target.value),required:!0})]})]},_)),u.jsx("button",{className:"btn btn-primary",type:"submit",disabled:o,children:o?"Processing Payment...":"Pay INR 300 & Register"})]}),s&&u.jsx("div",{className:"banner",style:{marginTop:"18px"},children:s})]})]})}function Jm(t){return Array.from({length:t},()=>({name:"",whatsappNumber:"",gameId:""}))}function WR(){const[t,e]=U.useState("team"),[n,i]=U.useState("valorant"),[r,s]=U.useState({teamName:"",isCollegeParticipant:"yes",collegeName:"",teamLeaderName:"",teamLeaderPhone:""}),[a,o]=U.useState({playerName:"",whatsappNumber:"",gameId:"",isCollegeParticipant:"yes",collegeName:""}),[l,c]=U.useState("no"),[d,f]=U.useState({name:"",gameId:"",whatsappNumber:""}),[p,g]=U.useState(Jm(5)),[v,_]=U.useState(!1),[m,h]=U.useState(""),y=n==="bgmi",x=U.useMemo(()=>n==="valorant"?5:4,[n]),S=U.useMemo(()=>t==="solo"?n==="valorant"?"INR 60":"INR 50":n==="valorant"?"INR 300":"INR 200",[n,t]),P=U.useMemo(()=>t==="solo"?n==="valorant"?"esports-solo-valorant":"esports-solo-bgmi":n==="valorant"?"esports-valorant":"esports-bgmi",[n,t]),R=M=>{i(M),g(Jm(M==="valorant"?5:4))},w=(M,E,C)=>{g(I=>I.map((F,z)=>z===M?{...F,[E]:C}:F))},T=async M=>{if(M.preventDefault(),h(""),y){h("BGMI seats are full. Registrations are closed.");return}_(!0);try{const E=t==="solo"?{name:a.playerName,contact:a.whatsappNumber}:{name:r.teamLeaderName,contact:r.teamLeaderPhone},C=await lf(P,E,t==="solo"?`Solo eSports ${n.toUpperCase()}`:`eSports ${n.toUpperCase()}`),I=t==="solo"?"/api/esports/solo-register":"/api/esports/register",F=t==="solo"?{game:n,playerName:a.playerName,whatsappNumber:a.whatsappNumber,gameId:a.gameId,isCollegeParticipant:a.isCollegeParticipant==="yes",collegeName:a.isCollegeParticipant==="yes"?a.collegeName.trim():"",...C}:{...r,isCollegeParticipant:r.isCollegeParticipant==="yes",collegeName:r.isCollegeParticipant==="yes"?r.collegeName.trim():"",game:n,members:p.map(H=>({...H})),hasSubstitute:l==="yes",...l==="yes"?{substitutePlayer:d}:{},...C},z=await Be(I,{method:"POST",body:JSON.stringify(F)});h(`${z.message} Redirecting to WhatsApp group...`),setTimeout(()=>Ja(Za.esports),1400)}catch(E){h(E instanceof Error?E.message:"Unable to register")}finally{_(!1)}};return u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"eSports"}),u.jsxs("div",{className:"prize-pool-spotlight",children:[u.jsx("span",{className:"prize-pool-label",children:"Prize Pool"}),u.jsx("div",{className:"prize-pool-value",children:"INR 11,000"})]}),u.jsx("p",{className:"section-subtitle",children:"Select game first: Valorant (5 players, INR 300 per team) or BGMI (4 players, INR 200 per team)."}),u.jsxs("div",{className:"card",style:{marginTop:"20px"},children:[u.jsx("h4",{children:"Core Tournament Rules & Requirements"}),u.jsxs("ul",{children:[u.jsx("li",{children:"Team composition: 5 main players and up to 2 substitutes."}),u.jsx("li",{children:"No account recruitment is allowed."}),u.jsx("li",{children:"Device restriction (BGMI): only mobile/tablet devices are allowed. Emulator usage leads to ban/disqualification."}),u.jsx("li",{children:"Account requirements (BGMI): minimum tier and level may be required (for example Gold V and Level 15+)."}),u.jsx("li",{children:"Game mode (BGMI): Classic mode (Squad)."}),u.jsx("li",{children:"BGMI map pool: Erangel, Miramar, and Rondo."}),u.jsx("li",{children:"Valorant map order: Ascent, Split, Haven (Finale)."}),u.jsx("li",{children:"Points system (BGMI): based on placement and kills. Tiebreakers prioritize total kills, then Chicken Dinner count."}),u.jsx("li",{children:"Winning qualifies the team for the next round."}),u.jsx("li",{children:"No toxic behavior, toxic chat/voice chat, griefing, or team killing will be tolerated."})]}),u.jsx("h4",{style:{marginTop:"16px"},children:"Match Procedures"}),u.jsxs("ul",{children:[u.jsx("li",{children:"Check-in: teams must join the custom room/party 10-15 minutes before match start."}),u.jsx("li",{children:"Recording/proof: players may be required to record POV/screen and submit it if requested."}),u.jsx("li",{children:"Technical issues: players are responsible for their own internet connectivity."})]}),u.jsx("h4",{style:{marginTop:"16px"},children:"Violations & Penalties"}),u.jsxs("ul",{children:[u.jsx("li",{children:"Cheating (ESP, aimbot, hacks): permanent ban and disqualification."}),u.jsx("li",{children:"Intentional exploitation of bugs/glitches is prohibited."}),u.jsx("li",{children:"Offensive team names or player names are not allowed."})]})]}),u.jsxs("div",{className:"card",style:{marginTop:"24px"},children:[u.jsx("h4",{children:"eSports Registration"}),u.jsxs("form",{className:"form-grid",onSubmit:T,children:[u.jsxs("select",{value:n,onChange:M=>R(M.target.value),children:[u.jsx("option",{value:"valorant",children:"Valorant (5 players)"}),u.jsx("option",{value:"bgmi",children:"BGMI (Seats Full)"})]}),y&&u.jsx("div",{className:"banner",children:"BGMI seats are full. Registrations are closed."}),u.jsxs("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:[u.jsx("button",{type:"button",className:`btn ${t==="team"?"btn-primary":"btn-ghost"}`,onClick:()=>e("team"),children:"Team Registration"}),u.jsx("button",{type:"button",className:`btn ${t==="solo"?"btn-primary":"btn-ghost"}`,onClick:()=>e("solo"),children:"Solo Registration"})]}),t==="solo"&&u.jsx("div",{className:"banner",style:{marginBottom:"8px"},children:"You can register solo for BGMI or Valorant. You will still play in squad format and we will match you with random teammates. If a full team cannot be formed, your registration amount will be refunded."}),t==="team"?u.jsxs(u.Fragment,{children:[u.jsx("input",{placeholder:"Team name",value:r.teamName,onChange:M=>s({...r,teamName:M.target.value}),required:!0}),u.jsxs("select",{value:r.isCollegeParticipant,onChange:M=>s({...r,isCollegeParticipant:M.target.value}),children:[u.jsx("option",{value:"yes",children:"Are you from a college? Yes"}),u.jsx("option",{value:"no",children:"Are you from a college? No"})]}),r.isCollegeParticipant==="yes"&&u.jsx("input",{placeholder:"College name",value:r.collegeName,onChange:M=>s({...r,collegeName:M.target.value}),required:!0}),u.jsx("input",{placeholder:"Team leader name",value:r.teamLeaderName,onChange:M=>s({...r,teamLeaderName:M.target.value}),required:!0}),u.jsx("input",{placeholder:"Team leader WhatsApp number",value:r.teamLeaderPhone,onChange:M=>s({...r,teamLeaderPhone:M.target.value}),required:!0}),p.map((M,E)=>u.jsxs("div",{className:"card",children:[u.jsxs("h4",{children:["Player ",E+1]}),u.jsxs("div",{className:"form-grid",children:[u.jsx("input",{placeholder:"Name",value:M.name,onChange:C=>w(E,"name",C.target.value),required:!0}),u.jsx("input",{placeholder:"WhatsApp number",value:M.whatsappNumber,onChange:C=>w(E,"whatsappNumber",C.target.value),required:!0}),u.jsx("input",{placeholder:"Game ID",value:M.gameId,onChange:C=>w(E,"gameId",C.target.value),required:!0})]})]},E)),u.jsxs("select",{value:l,onChange:M=>c(M.target.value),children:[u.jsx("option",{value:"no",children:"Need substitute player? No"}),u.jsx("option",{value:"yes",children:"Need substitute player? Yes"})]}),l==="yes"&&u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:"Substitute Player Details"}),u.jsxs("div",{className:"form-grid",children:[u.jsx("input",{placeholder:"Substitute name",value:d.name,onChange:M=>f({...d,name:M.target.value}),required:!0}),u.jsx("input",{placeholder:"Substitute Game ID",value:d.gameId,onChange:M=>f({...d,gameId:M.target.value}),required:!0}),u.jsx("input",{placeholder:"Substitute WhatsApp number",value:d.whatsappNumber,onChange:M=>f({...d,whatsappNumber:M.target.value}),required:!0})]})]})]}):u.jsxs(u.Fragment,{children:[u.jsx("input",{placeholder:"Player name",value:a.playerName,onChange:M=>o({...a,playerName:M.target.value}),required:!0}),u.jsx("input",{placeholder:"WhatsApp number",value:a.whatsappNumber,onChange:M=>o({...a,whatsappNumber:M.target.value}),required:!0}),u.jsx("input",{placeholder:"Game ID",value:a.gameId,onChange:M=>o({...a,gameId:M.target.value}),required:!0}),u.jsxs("select",{value:a.isCollegeParticipant,onChange:M=>o({...a,isCollegeParticipant:M.target.value}),children:[u.jsx("option",{value:"yes",children:"Are you from a college? Yes"}),u.jsx("option",{value:"no",children:"Are you from a college? No"})]}),a.isCollegeParticipant==="yes"&&u.jsx("input",{placeholder:"College name",value:a.collegeName,onChange:M=>o({...a,collegeName:M.target.value}),required:!0})]}),u.jsx("button",{className:"btn btn-primary",type:"submit",disabled:v||y,children:v?"Processing Payment...":`Pay ${S} & Register`})]}),m&&u.jsx("div",{className:"banner",style:{marginTop:"18px"},children:m})]}),u.jsxs("p",{style:{marginTop:"14px",opacity:.8},children:["Required players for selected game: ",x]})]})}function XR(){const[t,e]=U.useState({name:"",phone:"",enrollmentNumber:"",year:"",collegeName:"",performanceType:"",scriptPdfUrl:""}),[n,i]=U.useState(null),[r,s]=U.useState(!1),[a,o]=U.useState(""),l=async d=>{const f=new FormData;f.append("document",d);const p=await fetch(`${uc}/api/uploads/document`,{method:"POST",body:f});if(!p.ok)throw new Error(await p.text());return(await p.json()).documentUrl},c=async d=>{d.preventDefault(),o(""),s(!0);try{if(!n&&!t.scriptPdfUrl)throw new Error("Please upload a PDF or provide a PDF link for your script/plan.");let f=t.scriptPdfUrl;n&&(f=await l(n));const p=await Be("/api/open-mic/register",{method:"POST",body:JSON.stringify({...t,scriptPdfUrl:f})});o(`${p.message} Redirecting to WhatsApp group...`),setTimeout(()=>Ja(Za.openMic),1400)}catch(f){o(f instanceof Error?f.message:"Unable to register")}finally{s(!1)}};return u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Open Mic"}),u.jsx("p",{className:"section-subtitle",children:"Open Mic is free. Registration is mandatory."}),u.jsxs("div",{className:"card",style:{marginTop:"24px"},children:[u.jsx("h4",{children:"Open Mic Registration"}),u.jsxs("form",{className:"form-grid",onSubmit:c,children:[u.jsx("input",{placeholder:"Name",value:t.name,onChange:d=>e({...t,name:d.target.value}),required:!0}),u.jsx("input",{placeholder:"WhatsApp number",value:t.phone,onChange:d=>e({...t,phone:d.target.value}),required:!0}),u.jsx("input",{placeholder:"Enrollment number",value:t.enrollmentNumber,onChange:d=>e({...t,enrollmentNumber:d.target.value}),required:!0}),u.jsx("input",{placeholder:"Year",value:t.year,onChange:d=>e({...t,year:d.target.value}),required:!0}),u.jsx("input",{placeholder:"College name",value:t.collegeName,onChange:d=>e({...t,collegeName:d.target.value}),required:!0}),u.jsx("input",{placeholder:"What do you want to perform?",value:t.performanceType,onChange:d=>e({...t,performanceType:d.target.value}),required:!0}),u.jsx("input",{type:"url",placeholder:"Script/plan PDF URL (optional if uploading below)",value:t.scriptPdfUrl,onChange:d=>e({...t,scriptPdfUrl:d.target.value})}),u.jsx("input",{type:"file",accept:"application/pdf",onChange:d=>{var f;return i(((f=d.target.files)==null?void 0:f[0])??null)}}),u.jsx("button",{className:"btn btn-primary",type:"submit",disabled:r,children:r?"Submitting...":"Register Open Mic"})]}),a&&u.jsx("div",{className:"banner",style:{marginTop:"18px"},children:a})]})]})}function qR(){return u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Choose Registration"}),u.jsx("p",{className:"section-subtitle",children:"Select the event you want to register for."}),u.jsxs("div",{className:"cards-grid",style:{marginTop:"24px"},children:[u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:"Hackathon"}),u.jsx("p",{children:"12-hour hackathon registration."}),u.jsx(Ut,{className:"btn btn-primary",to:"/hackathon",children:"Register Hackathon"})]}),u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:"Robo Race"}),u.jsx("p",{children:"RC car competition. Team fee INR 300."}),u.jsx(Ut,{className:"btn btn-primary",to:"/kinetic-showdown",children:"Register Robo Race"})]}),u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:"Workshops"}),u.jsx("p",{children:"Pick your workshop and complete payment."}),u.jsx(Ut,{className:"btn btn-primary",to:"/workshops",children:"Register Workshop"})]}),u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:"eSports"}),u.jsx("p",{children:"Valorant registration is open. BGMI seats are full."}),u.jsx(Ut,{className:"btn btn-primary",to:"/esports",children:"Register eSports"})]}),u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:"Open Mic"}),u.jsx("p",{children:"Free registration with performance details."}),u.jsx(Ut,{className:"btn btn-primary",to:"/open-mic",children:"Register Open Mic"})]})]})]})}function $R(){const[t,e]=U.useState([]);return U.useEffect(()=>{Be("/api/culture/events").then(n=>e(Array.isArray(n)?n:[])).catch(()=>e([]))},[]),u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Culture Fest"}),u.jsx("p",{className:"section-subtitle",children:"When the coding ends, the celebration begins."}),t.length===0?u.jsx("div",{className:"banner empty-state",children:"No events announced yet."}):u.jsx("div",{className:"cards-grid",children:t.map(n=>u.jsxs("div",{className:"card",children:[n.imageUrl&&u.jsx("img",{src:n.imageUrl,alt:n.title,style:{width:"100%",borderRadius:"14px",marginBottom:"12px"}}),u.jsx("h4",{children:n.title}),u.jsx("p",{className:"team-preview",children:n.preview}),u.jsx("p",{children:n.description})]},n.id))})]})}function YR(){const[t,e]=U.useState([]);return U.useEffect(()=>{Be("/api/gallery").then(n=>e(Array.isArray(n)?n:[])).catch(()=>e([]))},[]),u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Glimpses & Gallery"}),u.jsx("p",{className:"section-subtitle",children:"A curated gallery from past editions."}),t.length===0?u.jsx("div",{className:"banner empty-state",children:"No gallery items available yet."}):u.jsx("div",{className:"gallery-grid",children:t.map(n=>u.jsxs("div",{className:"gallery-card",children:[u.jsx("img",{src:n.imageUrl,alt:n.title}),u.jsxs("div",{className:"gallery-meta",children:[u.jsx("strong",{children:n.preview||n.title}),u.jsx("p",{children:n.description})]})]},n.id))})]})}function KR(){const[t,e]=U.useState([]);return U.useEffect(()=>{Be("/api/team").then(n=>e(Array.isArray(n)?n:[])).catch(()=>e([]))},[]),u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Core Team"}),t.length===0?u.jsx("div",{className:"banner empty-state",children:"Team details will be published soon."}):u.jsx("div",{className:"team-grid",children:t.map(n=>u.jsxs("div",{className:"team-card",children:[u.jsx("img",{src:n.imageUrl,alt:n.name}),u.jsxs("div",{className:"team-meta",children:[u.jsx("strong",{children:n.name}),u.jsx("p",{className:"team-role",children:n.role}),u.jsx("p",{className:"team-preview",children:n.preview}),u.jsx("p",{children:n.about})]})]},n.id))})]})}function ZR(){const[t,e]=U.useState({email:"",phone:"",issue:""}),[n,i]=U.useState(!1),[r,s]=U.useState(""),a=async o=>{o.preventDefault(),s(""),i(!0);try{const l=await Be("/api/contact",{method:"POST",body:JSON.stringify(t)});s(l.message),e({email:"",phone:"",issue:""})}catch(l){s(l instanceof Error?l.message:"Unable to submit contact")}finally{i(!1)}};return u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Contact"}),u.jsx("p",{className:"section-subtitle",children:"Share your email, phone number, and issue. Our team will reach out to you."}),u.jsxs("div",{className:"card",style:{marginTop:"24px",maxWidth:"640px"},children:[u.jsx("h4",{children:"Contact Form"}),u.jsxs("form",{className:"form-grid",onSubmit:a,children:[u.jsx("input",{type:"email",placeholder:"Email",value:t.email,onChange:o=>e({...t,email:o.target.value}),required:!0}),u.jsx("input",{placeholder:"Phone number",value:t.phone,onChange:o=>e({...t,phone:o.target.value}),required:!0}),u.jsx("textarea",{placeholder:"Type your issue",value:t.issue,onChange:o=>e({...t,issue:o.target.value}),rows:5,required:!0}),u.jsx("button",{className:"btn btn-primary",type:"submit",disabled:n,children:n?"Submitting...":"Submit Contact"})]}),r&&u.jsx("div",{className:"banner",style:{marginTop:"18px"},children:r})]})]})}const u_="mediacell@123",cf="secret_admin_password";function dc(){return sessionStorage.getItem(cf)===u_}function hc(t){return t!==u_?!1:(sessionStorage.setItem(cf,t),!0)}function Fi(){return sessionStorage.getItem(cf)||""}function JR(){const[t,e]=U.useState(dc()),[n,i]=U.useState(""),[r,s]=U.useState(""),[a,o]=U.useState(""),[l,c]=U.useState(""),[d,f]=U.useState(null),[p,g]=U.useState(""),[v,_]=U.useState(""),[m,h]=U.useState(""),[y,x]=U.useState(""),[S,P]=U.useState(null),[R,w]=U.useState(""),[T,M]=U.useState(""),[E,C]=U.useState(""),[I,F]=U.useState(null),[z,H]=U.useState(""),[V,$]=U.useState(!1),D=ue=>{if(ue.preventDefault(),!hc(n)){H("Wrong password.");return}H(""),e(!0),i("")},K=async ue=>{const j=new FormData;j.append("image",ue);const Y=await fetch(`${uc}/api/admin/upload`,{method:"POST",headers:{"X-Admin-Token":Fi()},body:j});if(!Y.ok)throw new Error(await Y.text());const{imageUrl:ne}=await Y.json();return ne},J=async ue=>{if(ue.preventDefault(),!d){H("Please select an image for gallery item.");return}$(!0),H("");try{const j=await K(d),Y=await Be("/api/admin/glimpse",{method:"POST",headers:{"X-Admin-Token":Fi()},body:JSON.stringify({title:r,preview:a,description:l,imageUrl:j})});H(Y.message),s(""),o(""),c(""),f(null)}catch(j){H(j instanceof Error?j.message:"Upload failed")}finally{$(!1)}},se=async ue=>{if(ue.preventDefault(),!S){H("Please select a team photo.");return}$(!0),H("");try{const j=await K(S),Y=await Be("/api/admin/team",{method:"POST",headers:{"X-Admin-Token":Fi()},body:JSON.stringify({name:p,role:v,preview:m,about:y,imageUrl:j})});H(Y.message),g(""),_(""),h(""),x(""),P(null)}catch(j){H(j instanceof Error?j.message:"Upload failed")}finally{$(!1)}},xe=async ue=>{if(ue.preventDefault(),!I){H("Please select a culture event photo.");return}$(!0),H("");try{const j=await K(I),Y=await Be("/api/admin/culture-event",{method:"POST",headers:{"X-Admin-Token":Fi()},body:JSON.stringify({title:R,preview:T,description:E,imageUrl:j})});H(Y.message),w(""),M(""),C(""),F(null)}catch(j){H(j instanceof Error?j.message:"Save failed")}finally{$(!1)}};return t?u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Management Panel"}),u.jsx("p",{className:"section-subtitle",children:"Manage content and registrations in one place."}),u.jsxs("div",{className:"admin-links",children:[u.jsx(Ut,{className:"btn btn-ghost",to:"/secret-admin/registrations",children:"View Registrations Data"}),u.jsx(Ut,{className:"btn btn-ghost",to:"/secret-admin/manage-content",children:"Edit / Delete Uploaded Content"}),u.jsx(Ut,{className:"btn btn-ghost",to:"/hackathon-manager",children:"Hackathon Manager"})]}),u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:"Upload Gallery Item"}),u.jsxs("form",{className:"form-grid",onSubmit:J,children:[u.jsx("input",{placeholder:"Title",value:r,onChange:ue=>s(ue.target.value),required:!0}),u.jsx("input",{placeholder:"Preview text",value:a,onChange:ue=>o(ue.target.value),required:!0}),u.jsx("textarea",{placeholder:"Description",value:l,onChange:ue=>c(ue.target.value),rows:3,required:!0}),u.jsx("input",{type:"file",accept:"image/*",onChange:ue=>{var j;return f(((j=ue.target.files)==null?void 0:j[0])??null)},required:!0}),u.jsx("button",{className:"btn btn-primary",type:"submit",disabled:V,children:V?"Saving...":"Upload Gallery Item"})]})]}),u.jsxs("div",{className:"card",style:{marginTop:"28px"},children:[u.jsx("h4",{children:"Upload Team Member"}),u.jsxs("form",{className:"form-grid",onSubmit:se,children:[u.jsx("input",{placeholder:"Name",value:p,onChange:ue=>g(ue.target.value),required:!0}),u.jsx("input",{placeholder:"Role",value:v,onChange:ue=>_(ue.target.value),required:!0}),u.jsx("input",{placeholder:"Preview text",value:m,onChange:ue=>h(ue.target.value),required:!0}),u.jsx("textarea",{placeholder:"About",value:y,onChange:ue=>x(ue.target.value),rows:4,required:!0}),u.jsx("input",{type:"file",accept:"image/*",onChange:ue=>{var j;return P(((j=ue.target.files)==null?void 0:j[0])??null)},required:!0}),u.jsx("button",{className:"btn btn-primary",type:"submit",disabled:V,children:V?"Saving...":"Upload Team Member"})]})]}),u.jsxs("div",{className:"card",style:{marginTop:"28px"},children:[u.jsx("h4",{children:"Add Cultural Event"}),u.jsxs("form",{className:"form-grid",onSubmit:xe,children:[u.jsx("input",{placeholder:"Title",value:R,onChange:ue=>w(ue.target.value),required:!0}),u.jsx("input",{placeholder:"Preview text",value:T,onChange:ue=>M(ue.target.value),required:!0}),u.jsx("textarea",{placeholder:"Description",value:E,onChange:ue=>C(ue.target.value),rows:3,required:!0}),u.jsx("input",{type:"file",accept:"image/*",onChange:ue=>{var j;return F(((j=ue.target.files)==null?void 0:j[0])??null)},required:!0}),u.jsx("button",{className:"btn btn-primary",type:"submit",disabled:V,children:V?"Saving...":"Save Cultural Event"})]})]}),z&&u.jsx("div",{className:"banner",style:{marginTop:"18px"},children:z})]}):u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Management Access"}),u.jsxs("div",{className:"card",style:{maxWidth:"520px"},children:[u.jsx("h4",{children:"Enter Password"}),u.jsxs("form",{className:"form-grid",onSubmit:D,children:[u.jsx("input",{type:"password",placeholder:"Enter password",value:n,onChange:ue=>i(ue.target.value),required:!0}),u.jsx("button",{className:"btn btn-primary",type:"submit",children:"Unlock"})]}),z&&u.jsx("div",{className:"banner",style:{marginTop:"18px"},children:z})]})]})}const QR={codehunt:"codehunt@09",kinetic:"kineticshowdown@15",esports:"esports@19",openMic:"openmic@07",workshop:"workshop@08"};function eb(t){return t.members.map((e,n)=>`${n+1}. ${e.name} (${e.gender}) | ${e.phone}`).join(`
`)}function tb(t){return t.members.map((e,n)=>`${n+1}. ${e.name} | ${e.phone} | ${e.branch} | ${e.semester} | ${e.collegeName}`).join(`
`)}function nb(){const[t,e]=U.useState(dc()),[n,i]=U.useState(""),[r,s]=U.useState(""),[a,o]=U.useState({codehunt:"",kinetic:"",esports:"",openMic:"",workshop:""}),[l,c]=U.useState({codehunt:!1,kinetic:!1,esports:!1,openMic:!1,workshop:!1}),[d,f]=U.useState([]),[p,g]=U.useState([]),[v,_]=U.useState([]),[m,h]=U.useState([]),[y,x]=U.useState([]),[S,P]=U.useState([]);U.useEffect(()=>{if(!t)return;const T={"X-Admin-Token":Fi()};Be("/api/admin/registrations/hackathon",{headers:T}).then(M=>f(Array.isArray(M)?M:[])).catch(()=>f([])),Be("/api/admin/registrations/kinetic-showdown",{headers:T}).then(M=>g(Array.isArray(M)?M:[])).catch(()=>g([])),Be("/api/admin/registrations/esports",{headers:T}).then(M=>_(Array.isArray(M)?M:[])).catch(()=>_([])),Be("/api/admin/registrations/open-mic",{headers:T}).then(M=>h(Array.isArray(M)?M:[])).catch(()=>h([])),Be("/api/admin/registrations/workshops",{headers:T}).then(M=>x(Array.isArray(M)?M:[])).catch(()=>x([])),Be("/api/admin/registrations/contact",{headers:T}).then(M=>P(Array.isArray(M)?M:[])).catch(()=>P([]))},[t]);const R=T=>{if(T.preventDefault(),!hc(n)){s("Wrong password.");return}s(""),i(""),e(!0)},w=T=>{if(a[T]!==QR[T]){s("Table password is incorrect.");return}s(""),c(M=>({...M,[T]:!0})),o(M=>({...M,[T]:""}))};return t?u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Management Panel - Event Tables"}),u.jsx("p",{className:"section-subtitle",children:"Each table has separate access."}),u.jsx("div",{className:"admin-links",children:u.jsx(Ut,{className:"btn btn-ghost",to:"/secret-admin",children:"Back To Content Panel"})}),r&&u.jsx("div",{className:"banner",style:{marginTop:"18px"},children:r}),u.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[u.jsx("h4",{children:"CodeHunt Teams"}),l.codehunt?u.jsx("div",{className:"table-wrap",children:u.jsxs("table",{className:"admin-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Team"}),u.jsx("th",{children:"Leader"}),u.jsx("th",{children:"Members"}),u.jsx("th",{children:"Payment"}),u.jsx("th",{children:"Created"})]})}),u.jsx("tbody",{children:d.length===0?u.jsx("tr",{children:u.jsx("td",{colSpan:5,children:"No registrations yet."})}):d.map(T=>u.jsxs("tr",{children:[u.jsxs("td",{children:[u.jsx("strong",{children:T.teamName}),u.jsxs("p",{children:[T.memberCount," members, ",T.femaleCount," female"]})]}),u.jsxs("td",{children:[u.jsxs("strong",{children:["Leader: ",T.contactName]}),u.jsx("p",{children:T.contactPhone}),u.jsx("p",{children:T.collegeName})]}),u.jsx("td",{style:{whiteSpace:"pre-wrap",minWidth:"360px"},children:eb(T)}),u.jsxs("td",{children:[u.jsx("strong",{children:T.paymentStatus||"unknown"}),u.jsx("p",{children:T.paymentId||"-"})]}),u.jsx("td",{children:T.createdAt})]},T.id))})]})}):u.jsxs("div",{className:"form-grid",children:[u.jsx("input",{type:"password",placeholder:"Enter table password",value:a.codehunt,onChange:T=>o(M=>({...M,codehunt:T.target.value}))}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>w("codehunt"),children:"Unlock Table"})]})]}),u.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[u.jsx("h4",{children:"Kinetic Showdown Teams"}),l.kinetic?u.jsx("div",{className:"table-wrap",children:u.jsxs("table",{className:"admin-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Team"}),u.jsx("th",{children:"Team Leader"}),u.jsx("th",{children:"Members"}),u.jsx("th",{children:"Payment"}),u.jsx("th",{children:"Created"})]})}),u.jsx("tbody",{children:p.length===0?u.jsx("tr",{children:u.jsx("td",{colSpan:5,children:"No registrations yet."})}):p.map(T=>u.jsxs("tr",{children:[u.jsxs("td",{children:[u.jsx("strong",{children:T.teamName}),u.jsxs("p",{children:["College: ",T.collegeName]}),u.jsxs("p",{children:["Team size: ",T.memberCount]})]}),u.jsxs("td",{children:[u.jsx("strong",{children:T.captainName}),u.jsx("p",{children:T.phone})]}),u.jsx("td",{style:{whiteSpace:"pre-wrap",minWidth:"360px"},children:tb(T)}),u.jsxs("td",{children:[u.jsx("strong",{children:T.paymentStatus||"unknown"}),u.jsx("p",{children:T.paymentId||"-"})]}),u.jsx("td",{children:T.createdAt})]},T.id))})]})}):u.jsxs("div",{className:"form-grid",children:[u.jsx("input",{type:"password",placeholder:"Enter table password",value:a.kinetic,onChange:T=>o(M=>({...M,kinetic:T.target.value}))}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>w("kinetic"),children:"Unlock Table"})]})]}),u.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[u.jsx("h4",{children:"eSports Teams"}),l.esports?u.jsx("div",{className:"table-wrap",children:u.jsxs("table",{className:"admin-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Team"}),u.jsx("th",{children:"Leader"}),u.jsx("th",{children:"Players"}),u.jsx("th",{children:"Payment"}),u.jsx("th",{children:"Created"})]})}),u.jsx("tbody",{children:v.length===0?u.jsx("tr",{children:u.jsx("td",{colSpan:5,children:"No registrations yet."})}):v.map(T=>{var M,E,C;return u.jsxs("tr",{children:[u.jsxs("td",{children:[u.jsx("strong",{children:T.teamName}),u.jsxs("p",{children:["Game: ",T.game]}),u.jsx("p",{children:T.isCollegeParticipant?`College: ${T.collegeName||"-"}`:"Not a college team"}),u.jsxs("p",{children:["Substitute: ",T.hasSubstitute?"Yes":"No"]}),T.hasSubstitute&&u.jsx("p",{children:`${((M=T.substitutePlayer)==null?void 0:M.name)||"-"} | ${((E=T.substitutePlayer)==null?void 0:E.gameId)||"-"} | ${((C=T.substitutePlayer)==null?void 0:C.whatsappNumber)||"-"}`})]}),u.jsxs("td",{children:[u.jsx("strong",{children:T.teamLeaderName}),u.jsx("p",{children:T.teamLeaderPhone})]}),u.jsx("td",{style:{whiteSpace:"pre-wrap",minWidth:"360px"},children:T.members.map((I,F)=>`${F+1}. ${I.name} | ${I.whatsappNumber||"-"} | ${I.gameId||"-"} | ${I.collegeName||"-"}`).join(`
`)}),u.jsxs("td",{children:[u.jsx("strong",{children:T.paymentStatus||"unknown"}),u.jsx("p",{children:T.paymentId||"-"})]}),u.jsx("td",{children:T.createdAt})]},T.id)})})]})}):u.jsxs("div",{className:"form-grid",children:[u.jsx("input",{type:"password",placeholder:"Enter table password",value:a.esports,onChange:T=>o(M=>({...M,esports:T.target.value}))}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>w("esports"),children:"Unlock Table"})]})]}),u.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[u.jsx("h4",{children:"Open Mic Registrations"}),l.openMic?u.jsx("div",{className:"table-wrap",children:u.jsxs("table",{className:"admin-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Name"}),u.jsx("th",{children:"Contact"}),u.jsx("th",{children:"Enrollment"}),u.jsx("th",{children:"Performance"}),u.jsx("th",{children:"Created"})]})}),u.jsx("tbody",{children:m.length===0?u.jsx("tr",{children:u.jsx("td",{colSpan:5,children:"No registrations yet."})}):m.map(T=>u.jsxs("tr",{children:[u.jsxs("td",{children:[u.jsx("strong",{children:T.name}),u.jsx("p",{children:T.collegeName})]}),u.jsx("td",{children:u.jsx("p",{children:T.phone})}),u.jsxs("td",{children:[u.jsx("p",{children:T.enrollmentNumber}),u.jsx("p",{children:T.year})]}),u.jsxs("td",{children:[u.jsx("p",{children:T.performanceType}),u.jsx("p",{children:T.scriptPdfUrl||"-"})]}),u.jsx("td",{children:T.createdAt})]},T.id))})]})}):u.jsxs("div",{className:"form-grid",children:[u.jsx("input",{type:"password",placeholder:"Enter table password",value:a.openMic,onChange:T=>o(M=>({...M,openMic:T.target.value}))}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>w("openMic"),children:"Unlock Table"})]})]}),u.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[u.jsx("h4",{children:"Workshop Registrations"}),l.workshop?u.jsx("div",{className:"table-wrap",children:u.jsxs("table",{className:"admin-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Workshop"}),u.jsx("th",{children:"Name"}),u.jsx("th",{children:"Phone"}),u.jsx("th",{children:"College"}),u.jsx("th",{children:"Payment"}),u.jsx("th",{children:"Created"})]})}),u.jsx("tbody",{children:y.length===0?u.jsx("tr",{children:u.jsx("td",{colSpan:6,children:"No registrations yet."})}):y.map(T=>u.jsxs("tr",{children:[u.jsx("td",{children:T.workshop}),u.jsx("td",{children:T.name}),u.jsx("td",{children:T.phone}),u.jsx("td",{children:T.collegeName}),u.jsxs("td",{children:[u.jsx("strong",{children:T.paymentStatus||"unknown"}),u.jsx("p",{children:T.paymentId||"-"})]}),u.jsx("td",{children:T.createdAt})]},T.id))})]})}):u.jsxs("div",{className:"form-grid",children:[u.jsx("input",{type:"password",placeholder:"Enter table password",value:a.workshop,onChange:T=>o(M=>({...M,workshop:T.target.value}))}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>w("workshop"),children:"Unlock Table"})]})]}),u.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[u.jsx("h4",{children:"Contact Us Submissions"}),u.jsx("div",{className:"table-wrap",children:u.jsxs("table",{className:"admin-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Email"}),u.jsx("th",{children:"Phone"}),u.jsx("th",{children:"Issue"}),u.jsx("th",{children:"Created"})]})}),u.jsx("tbody",{children:S.length===0?u.jsx("tr",{children:u.jsx("td",{colSpan:4,children:"No contact submissions yet."})}):S.map(T=>u.jsxs("tr",{children:[u.jsx("td",{children:T.email}),u.jsx("td",{children:T.phone}),u.jsx("td",{style:{whiteSpace:"pre-wrap",minWidth:"280px"},children:T.issue}),u.jsx("td",{children:T.createdAt})]},T.id))})]})})]})]}):u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Management Access - Registrations"}),u.jsxs("div",{className:"card",style:{maxWidth:"520px"},children:[u.jsx("h4",{children:"Enter Password"}),u.jsxs("form",{className:"form-grid",onSubmit:R,children:[u.jsx("input",{type:"password",placeholder:"Enter password",value:n,onChange:T=>i(T.target.value),required:!0}),u.jsx("button",{className:"btn btn-primary",type:"submit",children:"Unlock"})]}),r&&u.jsx("div",{className:"banner",style:{marginTop:"18px"},children:r})]})]})}function ib(){const[t,e]=U.useState(dc()),[n,i]=U.useState(""),[r,s]=U.useState(""),[a,o]=U.useState(!1),[l,c]=U.useState([]),[d,f]=U.useState([]),[p,g]=U.useState([]),v={"X-Admin-Token":Fi()},_=async()=>{const[w,T,M]=await Promise.all([Be("/api/admin/content/gallery",{headers:v}),Be("/api/admin/content/team",{headers:v}),Be("/api/admin/content/culture-events",{headers:v})]);c(Array.isArray(w)?w:[]),f(Array.isArray(T)?T:[]),g(Array.isArray(M)?M.map(E=>({...E,imageUrl:E.imageUrl||""})):[])};U.useEffect(()=>{t&&_().catch(()=>{s("Could not load content data.")})},[t]);const m=w=>{if(w.preventDefault(),!hc(n)){s("Wrong password.");return}s(""),i(""),e(!0)},h=async w=>{o(!0),s("");try{const T=await Be(`/api/admin/glimpse/${w.id}`,{method:"PUT",headers:v,body:JSON.stringify({title:w.title,preview:w.preview,description:w.description,imageUrl:w.imageUrl})});s(T.message),await _()}catch(T){s(T instanceof Error?T.message:"Update failed")}finally{o(!1)}},y=async w=>{o(!0),s("");try{const T=await Be(`/api/admin/glimpse/${w}`,{method:"DELETE",headers:v});s(T.message),await _()}catch(T){s(T instanceof Error?T.message:"Delete failed")}finally{o(!1)}},x=async w=>{o(!0),s("");try{const T=await Be(`/api/admin/team/${w.id}`,{method:"PUT",headers:v,body:JSON.stringify({name:w.name,role:w.role,preview:w.preview,about:w.about,imageUrl:w.imageUrl})});s(T.message),await _()}catch(T){s(T instanceof Error?T.message:"Update failed")}finally{o(!1)}},S=async w=>{o(!0),s("");try{const T=await Be(`/api/admin/team/${w}`,{method:"DELETE",headers:v});s(T.message),await _()}catch(T){s(T instanceof Error?T.message:"Delete failed")}finally{o(!1)}},P=async w=>{o(!0),s("");try{const T=await Be(`/api/admin/culture-event/${w.id}`,{method:"PUT",headers:v,body:JSON.stringify({title:w.title,preview:w.preview,description:w.description,imageUrl:w.imageUrl})});s(T.message),await _()}catch(T){s(T instanceof Error?T.message:"Update failed")}finally{o(!1)}},R=async w=>{o(!0),s("");try{const T=await Be(`/api/admin/culture-event/${w}`,{method:"DELETE",headers:v});s(T.message),await _()}catch(T){s(T instanceof Error?T.message:"Delete failed")}finally{o(!1)}};return t?u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Content Manager"}),u.jsx("p",{className:"section-subtitle",children:"Edit or delete any uploaded gallery, team, or cultural content."}),u.jsx("div",{className:"admin-links",children:u.jsx(Ut,{className:"btn btn-ghost",to:"/secret-admin",children:"Back To Content Upload Panel"})}),u.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[u.jsx("h4",{children:"Gallery Items"}),l.length===0?u.jsx("p",{children:"No gallery items."}):l.map((w,T)=>u.jsx("div",{className:"card",style:{marginTop:T===0?"0":"16px"},children:u.jsxs("div",{className:"form-grid",children:[u.jsx("input",{value:w.title,onChange:M=>c(E=>E.map(C=>C.id===w.id?{...C,title:M.target.value}:C))}),u.jsx("input",{value:w.preview,onChange:M=>c(E=>E.map(C=>C.id===w.id?{...C,preview:M.target.value}:C))}),u.jsx("textarea",{rows:3,value:w.description,onChange:M=>c(E=>E.map(C=>C.id===w.id?{...C,description:M.target.value}:C))}),u.jsx("input",{value:w.imageUrl,onChange:M=>c(E=>E.map(C=>C.id===w.id?{...C,imageUrl:M.target.value}:C))}),u.jsxs("div",{className:"admin-links",children:[u.jsx("button",{className:"btn btn-primary",type:"button",disabled:a,onClick:()=>h(w),children:"Save"}),u.jsx("button",{className:"btn btn-ghost",type:"button",disabled:a,onClick:()=>y(w.id),children:"Delete"})]})]})},w.id))]}),u.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[u.jsx("h4",{children:"Team Members"}),d.length===0?u.jsx("p",{children:"No team members."}):d.map((w,T)=>u.jsx("div",{className:"card",style:{marginTop:T===0?"0":"16px"},children:u.jsxs("div",{className:"form-grid",children:[u.jsx("input",{value:w.name,onChange:M=>f(E=>E.map(C=>C.id===w.id?{...C,name:M.target.value}:C))}),u.jsx("input",{value:w.role,onChange:M=>f(E=>E.map(C=>C.id===w.id?{...C,role:M.target.value}:C))}),u.jsx("input",{value:w.preview,onChange:M=>f(E=>E.map(C=>C.id===w.id?{...C,preview:M.target.value}:C))}),u.jsx("textarea",{rows:3,value:w.about,onChange:M=>f(E=>E.map(C=>C.id===w.id?{...C,about:M.target.value}:C))}),u.jsx("input",{value:w.imageUrl,onChange:M=>f(E=>E.map(C=>C.id===w.id?{...C,imageUrl:M.target.value}:C))}),u.jsxs("div",{className:"admin-links",children:[u.jsx("button",{className:"btn btn-primary",type:"button",disabled:a,onClick:()=>x(w),children:"Save"}),u.jsx("button",{className:"btn btn-ghost",type:"button",disabled:a,onClick:()=>S(w.id),children:"Delete"})]})]})},w.id))]}),u.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[u.jsx("h4",{children:"Cultural Events"}),p.length===0?u.jsx("p",{children:"No cultural events."}):p.map((w,T)=>u.jsx("div",{className:"card",style:{marginTop:T===0?"0":"16px"},children:u.jsxs("div",{className:"form-grid",children:[u.jsx("input",{value:w.title,onChange:M=>g(E=>E.map(C=>C.id===w.id?{...C,title:M.target.value}:C))}),u.jsx("input",{value:w.preview,onChange:M=>g(E=>E.map(C=>C.id===w.id?{...C,preview:M.target.value}:C))}),u.jsx("textarea",{rows:3,value:w.description,onChange:M=>g(E=>E.map(C=>C.id===w.id?{...C,description:M.target.value}:C))}),u.jsx("input",{value:w.imageUrl||"",onChange:M=>g(E=>E.map(C=>C.id===w.id?{...C,imageUrl:M.target.value}:C))}),u.jsxs("div",{className:"admin-links",children:[u.jsx("button",{className:"btn btn-primary",type:"button",disabled:a,onClick:()=>P(w),children:"Save"}),u.jsx("button",{className:"btn btn-ghost",type:"button",disabled:a,onClick:()=>R(w.id),children:"Delete"})]})]})},w.id))]}),r&&u.jsx("div",{className:"banner",style:{marginTop:"18px"},children:r})]}):u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Management Access - Content Manager"}),u.jsxs("div",{className:"card",style:{maxWidth:"520px"},children:[u.jsx("h4",{children:"Enter Password"}),u.jsxs("form",{className:"form-grid",onSubmit:m,children:[u.jsx("input",{type:"password",placeholder:"Enter password",value:n,onChange:w=>i(w.target.value),required:!0}),u.jsx("button",{className:"btn btn-primary",type:"submit",children:"Unlock"})]}),r&&u.jsx("div",{className:"banner",style:{marginTop:"18px"},children:r})]})]})}function Qm(t,e){return`${t.trim().toLowerCase()}|${e.replace(/\D/g,"")}`}function rb(){const[t,e]=U.useState(dc()),[n,i]=U.useState(""),[r,s]=U.useState(""),[a,o]=U.useState(!1),[l,c]=U.useState([]),[d,f]=U.useState({}),[p,g]=U.useState(null),[v,_]=U.useState([]),m=async()=>{if(t){o(!0),s("");try{const S=await Be("/api/admin/hackathon/id-card/requests",{headers:{"X-Admin-Token":Fi()}}),P=Array.isArray(S)?S:[];c(P),f(R=>{const w={};for(const T of P)w[T.requestId]=R[T.requestId]||{};return w})}catch(S){c([]),s(S instanceof Error?S.message:"Unable to load requests")}finally{o(!1)}}};U.useEffect(()=>{m()},[t]);const h=S=>{if(S.preventDefault(),!hc(n)){s("Wrong password.");return}s(""),i(""),e(!0)},y=(S,P)=>{f(R=>({...R,[S]:{...R[S]||{},[P]:!(R[S]||{})[P]}}))},x=async S=>{const P=d[S.requestId]||{},R=S.participants.filter(w=>P[Qm(w.name,w.phone)]).map(w=>({name:w.name,phone:w.phone}));if(R.length===0){s(`Select at least one participant for ${S.teamName}.`);return}g(S.requestId),s("");try{const w=await Be("/api/admin/hackathon/id-card/generate-code",{method:"POST",headers:{"X-Admin-Token":Fi()},body:JSON.stringify({requestId:S.requestId,participants:R})});_(T=>[{requestId:S.requestId,teamName:S.teamName,code:w.code,issuedAt:new Date().toLocaleString()},...T]),c(T=>T.filter(M=>M.requestId!==S.requestId)),s(`${S.teamName}: 4-digit code generated successfully.`)}catch(w){s(w instanceof Error?w.message:"Unable to generate code")}finally{g(null)}};return t?u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Hackathon Manager"}),u.jsx("p",{className:"section-subtitle",children:"Review team requests, select participants, and generate 4-digit ID-card code."}),u.jsxs("div",{className:"admin-links",children:[u.jsx(Ut,{className:"btn btn-ghost",to:"/secret-admin",children:"Back To Admin"}),u.jsx("button",{className:"btn btn-ghost",type:"button",onClick:m,disabled:a,children:a?"Refreshing...":"Refresh Requests"})]}),r&&u.jsx("div",{className:"banner",style:{marginTop:"18px"},children:r}),u.jsx("div",{className:"cards-grid",style:{marginTop:"24px"},children:l.map(S=>u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:S.teamName}),u.jsxs("p",{children:[u.jsx("strong",{children:"College:"})," ",S.collegeName]}),u.jsxs("p",{children:[u.jsx("strong",{children:"Leader:"})," ",S.leaderName," (",S.leaderPhone,")"]}),u.jsxs("p",{children:[u.jsx("strong",{children:"Requested At:"})," ",S.requestedAt]}),u.jsx("div",{className:"form-grid",style:{marginTop:"12px"},children:S.participants.map(P=>{const R=Qm(P.name,P.phone),w=(d[S.requestId]||{})[R]||!1;return u.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[u.jsx("input",{type:"checkbox",style:{width:"18px",height:"18px"},checked:w,onChange:()=>y(S.requestId,R)}),u.jsxs("span",{children:[P.name," | ",P.phone," | ",P.role,P.gender?` | ${P.gender}`:""]})]},R)})}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>x(S),disabled:p===S.requestId,style:{marginTop:"16px"},children:p===S.requestId?"Generating...":"Generate 4-Digit Code"})]},S.requestId))}),l.length===0&&u.jsx("div",{className:"banner",style:{marginTop:"20px"},children:"No pending hackathon ID-card requests."}),v.length>0&&u.jsxs("div",{className:"card",style:{marginTop:"24px"},children:[u.jsx("h4",{children:"Recently Generated Codes"}),u.jsx("div",{className:"table-wrap",children:u.jsxs("table",{className:"admin-table",style:{minWidth:"600px"},children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Team"}),u.jsx("th",{children:"Code"}),u.jsx("th",{children:"Generated At"})]})}),u.jsx("tbody",{children:v.map(S=>u.jsxs("tr",{children:[u.jsx("td",{children:S.teamName}),u.jsx("td",{children:u.jsx("strong",{children:S.code})}),u.jsx("td",{children:S.issuedAt})]},`${S.requestId}-${S.code}-${S.issuedAt}`))})]})})]})]}):u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Hackathon Manager Access"}),u.jsxs("div",{className:"card",style:{maxWidth:"520px"},children:[u.jsx("h4",{children:"Enter Password"}),u.jsxs("form",{className:"form-grid",onSubmit:h,children:[u.jsx("input",{type:"password",placeholder:"Enter password",value:n,onChange:S=>i(S.target.value),required:!0}),u.jsx("button",{className:"btn btn-primary",type:"submit",children:"Unlock"})]}),r&&u.jsx("div",{className:"banner",style:{marginTop:"18px"},children:r})]})]})}function sb(){return u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Page Not Found"}),u.jsx("p",{className:"section-subtitle",children:"This page does not exist."}),u.jsx("a",{className:"btn btn-primary",href:"/",children:"Back to Home"})]})}function ab(){return U.useEffect(()=>{document.documentElement.dataset.theme="dark"},[]),u.jsxs("div",{className:"app-shell",children:[u.jsx(kR,{}),u.jsx(OR,{}),u.jsx($S,{}),u.jsx("main",{className:"app-content",children:u.jsxs(IS,{children:[u.jsx(Rt,{path:"/",element:u.jsx(BR,{})}),u.jsx(Rt,{path:"/register",element:u.jsx(qR,{})}),u.jsx(Rt,{path:"/hackathon",element:u.jsx(VR,{})}),u.jsx(Rt,{path:"/workshops",element:u.jsx(GR,{})}),u.jsx(Rt,{path:"/kinetic-showdown",element:u.jsx(Zm,{})}),u.jsx(Rt,{path:"/robo-race",element:u.jsx(Zm,{})}),u.jsx(Rt,{path:"/esports",element:u.jsx(WR,{})}),u.jsx(Rt,{path:"/open-mic",element:u.jsx(XR,{})}),u.jsx(Rt,{path:"/culture",element:u.jsx($R,{})}),u.jsx(Rt,{path:"/gallery",element:u.jsx(YR,{})}),u.jsx(Rt,{path:"/team",element:u.jsx(KR,{})}),u.jsx(Rt,{path:"/contact",element:u.jsx(ZR,{})}),u.jsx(Rt,{path:"/secret-admin",element:u.jsx(JR,{})}),u.jsx(Rt,{path:"/secret-admin/registrations",element:u.jsx(nb,{})}),u.jsx(Rt,{path:"/secret-admin/manage-content",element:u.jsx(ib,{})}),u.jsx(Rt,{path:"/hackathon-manager",element:u.jsx(rb,{})}),u.jsx(Rt,{path:"*",element:u.jsx(sb,{})})]})}),u.jsx(YS,{})]})}Eu.createRoot(document.getElementById("root")).render(u.jsx(ug.StrictMode,{children:u.jsx(jS,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:u.jsx(ab,{})})}));
