function Tx(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const a=Object.getOwnPropertyDescriptor(i,r);a&&Object.defineProperty(t,r,a.get?a:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();function Ax(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var cg={exports:{}},Wl={},ug={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vs=Symbol.for("react.element"),Rx=Symbol.for("react.portal"),Px=Symbol.for("react.fragment"),Nx=Symbol.for("react.strict_mode"),Ix=Symbol.for("react.profiler"),Dx=Symbol.for("react.provider"),Lx=Symbol.for("react.context"),Ux=Symbol.for("react.forward_ref"),kx=Symbol.for("react.suspense"),Fx=Symbol.for("react.memo"),Ox=Symbol.for("react.lazy"),Mf=Symbol.iterator;function zx(t){return t===null||typeof t!="object"?null:(t=Mf&&t[Mf]||t["@@iterator"],typeof t=="function"?t:null)}var dg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hg=Object.assign,fg={};function Oa(t,e,n){this.props=t,this.context=e,this.refs=fg,this.updater=n||dg}Oa.prototype.isReactComponent={};Oa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Oa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function pg(){}pg.prototype=Oa.prototype;function uh(t,e,n){this.props=t,this.context=e,this.refs=fg,this.updater=n||dg}var dh=uh.prototype=new pg;dh.constructor=uh;hg(dh,Oa.prototype);dh.isPureReactComponent=!0;var Ef=Array.isArray,mg=Object.prototype.hasOwnProperty,hh={current:null},gg={key:!0,ref:!0,__self:!0,__source:!0};function yg(t,e,n){var i,r={},a=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(a=""+e.key),e)mg.call(e,i)&&!gg.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Vs,type:t,key:a,ref:s,props:r,_owner:hh.current}}function Bx(t,e){return{$$typeof:Vs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function fh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Vs}function jx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Cf=/\/+/g;function wc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?jx(""+t.key):e.toString(36)}function qo(t,e,n,i,r){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Vs:case Rx:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+wc(s,0):i,Ef(r)?(n="",t!=null&&(n=t.replace(Cf,"$&/")+"/"),qo(r,e,n,"",function(u){return u})):r!=null&&(fh(r)&&(r=Bx(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Cf,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",Ef(t))for(var o=0;o<t.length;o++){a=t[o];var l=i+wc(a,o);s+=qo(a,e,n,l,r)}else if(l=zx(t),typeof l=="function")for(t=l.call(t),o=0;!(a=t.next()).done;)a=a.value,l=i+wc(a,o++),s+=qo(a,e,n,l,r);else if(a==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function no(t,e,n){if(t==null)return t;var i=[],r=0;return qo(t,i,"","",function(a){return e.call(n,a,r++)}),i}function Vx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Xt={current:null},Xo={transition:null},Hx={ReactCurrentDispatcher:Xt,ReactCurrentBatchConfig:Xo,ReactCurrentOwner:hh};function vg(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:no,forEach:function(t,e,n){no(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return no(t,function(){e++}),e},toArray:function(t){return no(t,function(e){return e})||[]},only:function(t){if(!fh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=Oa;je.Fragment=Px;je.Profiler=Ix;je.PureComponent=uh;je.StrictMode=Nx;je.Suspense=kx;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hx;je.act=vg;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=hg({},t.props),r=t.key,a=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,s=hh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)mg.call(e,l)&&!gg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Vs,type:t.type,key:r,ref:a,props:i,_owner:s}};je.createContext=function(t){return t={$$typeof:Lx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Dx,_context:t},t.Consumer=t};je.createElement=yg;je.createFactory=function(t){var e=yg.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:Ux,render:t}};je.isValidElement=fh;je.lazy=function(t){return{$$typeof:Ox,_payload:{_status:-1,_result:t},_init:Vx}};je.memo=function(t,e){return{$$typeof:Fx,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=Xo.transition;Xo.transition={};try{t()}finally{Xo.transition=e}};je.unstable_act=vg;je.useCallback=function(t,e){return Xt.current.useCallback(t,e)};je.useContext=function(t){return Xt.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return Xt.current.useDeferredValue(t)};je.useEffect=function(t,e){return Xt.current.useEffect(t,e)};je.useId=function(){return Xt.current.useId()};je.useImperativeHandle=function(t,e,n){return Xt.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return Xt.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return Xt.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return Xt.current.useMemo(t,e)};je.useReducer=function(t,e,n){return Xt.current.useReducer(t,e,n)};je.useRef=function(t){return Xt.current.useRef(t)};je.useState=function(t){return Xt.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return Xt.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return Xt.current.useTransition()};je.version="18.3.1";ug.exports=je;var U=ug.exports;const xg=Ax(U),Gx=Tx({__proto__:null,default:xg},[U]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wx=U,qx=Symbol.for("react.element"),Xx=Symbol.for("react.fragment"),$x=Object.prototype.hasOwnProperty,Yx=Wx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Kx={key:!0,ref:!0,__self:!0,__source:!0};function _g(t,e,n){var i,r={},a=null,s=null;n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)$x.call(e,i)&&!Kx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:qx,type:t,key:a,ref:s,props:r,_owner:Yx.current}}Wl.Fragment=Xx;Wl.jsx=_g;Wl.jsxs=_g;cg.exports=Wl;var c=cg.exports,Pu={},Sg={exports:{}},pn={},bg={exports:{}},wg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,K){var J=k.length;k.push(K);e:for(;0<J;){var ae=J-1>>>1,xe=k[ae];if(0<r(xe,K))k[ae]=K,k[J]=xe,J=ae;else break e}}function n(k){return k.length===0?null:k[0]}function i(k){if(k.length===0)return null;var K=k[0],J=k.pop();if(J!==K){k[0]=J;e:for(var ae=0,xe=k.length,ue=xe>>>1;ae<ue;){var V=2*(ae+1)-1,Y=k[V],ne=V+1,se=k[ne];if(0>r(Y,J))ne<xe&&0>r(se,Y)?(k[ae]=se,k[ne]=J,ae=ne):(k[ae]=Y,k[V]=J,ae=V);else if(ne<xe&&0>r(se,J))k[ae]=se,k[ne]=J,ae=ne;else break e}}return K}function r(k,K){var J=k.sortIndex-K.sortIndex;return J!==0?J:k.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,o=s.now();t.unstable_now=function(){return s.now()-o}}var l=[],u=[],d=1,f=null,p=3,g=!1,y=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(k){for(var K=n(u);K!==null;){if(K.callback===null)i(u);else if(K.startTime<=k)i(u),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(u)}}function M(k){if(x=!1,_(k),!y)if(n(l)!==null)y=!0,H(P);else{var K=n(u);K!==null&&$(M,K.startTime-k)}}function P(k,K){y=!1,x&&(x=!1,h(w),w=-1),g=!0;var J=p;try{for(_(K),f=n(l);f!==null&&(!(f.expirationTime>K)||k&&!T());){var ae=f.callback;if(typeof ae=="function"){f.callback=null,p=f.priorityLevel;var xe=ae(f.expirationTime<=K);K=t.unstable_now(),typeof xe=="function"?f.callback=xe:f===n(l)&&i(l),_(K)}else i(l);f=n(l)}if(f!==null)var ue=!0;else{var V=n(u);V!==null&&$(M,V.startTime-K),ue=!1}return ue}finally{f=null,p=J,g=!1}}var A=!1,E=null,w=-1,S=5,b=-1;function T(){return!(t.unstable_now()-b<S)}function z(){if(E!==null){var k=t.unstable_now();b=k;var K=!0;try{K=E(!0,k)}finally{K?N():(A=!1,E=null)}}else A=!1}var N;if(typeof v=="function")N=function(){v(z)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,B=D.port2;D.port1.onmessage=z,N=function(){B.postMessage(null)}}else N=function(){m(z,0)};function H(k){E=k,A||(A=!0,N())}function $(k,K){w=m(function(){k(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,H(P))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(p){case 1:case 2:case 3:var K=3;break;default:K=p}var J=p;p=K;try{return k()}finally{p=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,K){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var J=p;p=k;try{return K()}finally{p=J}},t.unstable_scheduleCallback=function(k,K,J){var ae=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ae+J:ae):J=ae,k){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=J+xe,k={id:d++,callback:K,priorityLevel:k,startTime:J,expirationTime:xe,sortIndex:-1},J>ae?(k.sortIndex=J,e(u,k),n(l)===null&&k===n(u)&&(x?(h(w),w=-1):x=!0,$(M,J-ae))):(k.sortIndex=xe,e(l,k),y||g||(y=!0,H(P))),k},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(k){var K=p;return function(){var J=p;p=K;try{return k.apply(this,arguments)}finally{p=J}}}})(wg);bg.exports=wg;var Zx=bg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jx=U,fn=Zx;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mg=new Set,bs={};function Nr(t,e){Ea(t,e),Ea(t+"Capture",e)}function Ea(t,e){for(bs[t]=e,t=0;t<e.length;t++)Mg.add(e[t])}var fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nu=Object.prototype.hasOwnProperty,Qx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Tf={},Af={};function e0(t){return Nu.call(Af,t)?!0:Nu.call(Tf,t)?!1:Qx.test(t)?Af[t]=!0:(Tf[t]=!0,!1)}function t0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function n0(t,e,n,i){if(e===null||typeof e>"u"||t0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $t(t,e,n,i,r,a,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=s}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new $t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new $t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new $t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new $t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new $t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new $t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new $t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new $t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new $t(t,5,!1,t.toLowerCase(),null,!1,!1)});var ph=/[\-:]([a-z])/g;function mh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ph,mh);Ft[e]=new $t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ph,mh);Ft[e]=new $t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ph,mh);Ft[e]=new $t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new $t(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new $t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new $t(t,1,!1,t.toLowerCase(),null,!0,!0)});function gh(t,e,n,i){var r=Ft.hasOwnProperty(e)?Ft[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(n0(e,n,r,i)&&(n=null),i||r===null?e0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var _i=Jx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,io=Symbol.for("react.element"),na=Symbol.for("react.portal"),ia=Symbol.for("react.fragment"),yh=Symbol.for("react.strict_mode"),Iu=Symbol.for("react.profiler"),Eg=Symbol.for("react.provider"),Cg=Symbol.for("react.context"),vh=Symbol.for("react.forward_ref"),Du=Symbol.for("react.suspense"),Lu=Symbol.for("react.suspense_list"),xh=Symbol.for("react.memo"),Pi=Symbol.for("react.lazy"),Tg=Symbol.for("react.offscreen"),Rf=Symbol.iterator;function Ga(t){return t===null||typeof t!="object"?null:(t=Rf&&t[Rf]||t["@@iterator"],typeof t=="function"?t:null)}var ut=Object.assign,Mc;function as(t){if(Mc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Mc=e&&e[1]||""}return`
`+Mc+t}var Ec=!1;function Cc(t,e){if(!t||Ec)return"";Ec=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),a=i.stack.split(`
`),s=r.length-1,o=a.length-1;1<=s&&0<=o&&r[s]!==a[o];)o--;for(;1<=s&&0<=o;s--,o--)if(r[s]!==a[o]){if(s!==1||o!==1)do if(s--,o--,0>o||r[s]!==a[o]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=o);break}}}finally{Ec=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?as(t):""}function i0(t){switch(t.tag){case 5:return as(t.type);case 16:return as("Lazy");case 13:return as("Suspense");case 19:return as("SuspenseList");case 0:case 2:case 15:return t=Cc(t.type,!1),t;case 11:return t=Cc(t.type.render,!1),t;case 1:return t=Cc(t.type,!0),t;default:return""}}function Uu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ia:return"Fragment";case na:return"Portal";case Iu:return"Profiler";case yh:return"StrictMode";case Du:return"Suspense";case Lu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Cg:return(t.displayName||"Context")+".Consumer";case Eg:return(t._context.displayName||"Context")+".Provider";case vh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xh:return e=t.displayName||null,e!==null?e:Uu(t.type)||"Memo";case Pi:e=t._payload,t=t._init;try{return Uu(t(e))}catch{}}return null}function r0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Uu(e);case 8:return e===yh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Yi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ag(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function a0(t){var e=Ag(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,a=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,a.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ro(t){t._valueTracker||(t._valueTracker=a0(t))}function Rg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Ag(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function dl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ku(t,e){var n=e.checked;return ut({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Pf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Yi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Pg(t,e){e=e.checked,e!=null&&gh(t,"checked",e,!1)}function Fu(t,e){Pg(t,e);var n=Yi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ou(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ou(t,e.type,Yi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Nf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ou(t,e,n){(e!=="number"||dl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ss=Array.isArray;function ga(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Yi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function zu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return ut({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function If(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(ss(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Yi(n)}}function Ng(t,e){var n=Yi(e.value),i=Yi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Df(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ig(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ig(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ao,Dg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ao=ao||document.createElement("div"),ao.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ao.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ws(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var us={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},s0=["Webkit","ms","Moz","O"];Object.keys(us).forEach(function(t){s0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),us[e]=us[t]})});function Lg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||us.hasOwnProperty(t)&&us[t]?(""+e).trim():e+"px"}function Ug(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Lg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var o0=ut({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ju(t,e){if(e){if(o0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function Vu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hu=null;function _h(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gu=null,ya=null,va=null;function Lf(t){if(t=Ws(t)){if(typeof Gu!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=Kl(e),Gu(t.stateNode,t.type,e))}}function kg(t){ya?va?va.push(t):va=[t]:ya=t}function Fg(){if(ya){var t=ya,e=va;if(va=ya=null,Lf(t),e)for(t=0;t<e.length;t++)Lf(e[t])}}function Og(t,e){return t(e)}function zg(){}var Tc=!1;function Bg(t,e,n){if(Tc)return t(e,n);Tc=!0;try{return Og(t,e,n)}finally{Tc=!1,(ya!==null||va!==null)&&(zg(),Fg())}}function Ms(t,e){var n=t.stateNode;if(n===null)return null;var i=Kl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var Wu=!1;if(fi)try{var Wa={};Object.defineProperty(Wa,"passive",{get:function(){Wu=!0}}),window.addEventListener("test",Wa,Wa),window.removeEventListener("test",Wa,Wa)}catch{Wu=!1}function l0(t,e,n,i,r,a,s,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var ds=!1,hl=null,fl=!1,qu=null,c0={onError:function(t){ds=!0,hl=t}};function u0(t,e,n,i,r,a,s,o,l){ds=!1,hl=null,l0.apply(c0,arguments)}function d0(t,e,n,i,r,a,s,o,l){if(u0.apply(this,arguments),ds){if(ds){var u=hl;ds=!1,hl=null}else throw Error(ie(198));fl||(fl=!0,qu=u)}}function Ir(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function jg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Uf(t){if(Ir(t)!==t)throw Error(ie(188))}function h0(t){var e=t.alternate;if(!e){if(e=Ir(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var a=r.alternate;if(a===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===n)return Uf(r),t;if(a===i)return Uf(r),e;a=a.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=a;else{for(var s=!1,o=r.child;o;){if(o===n){s=!0,n=r,i=a;break}if(o===i){s=!0,i=r,n=a;break}o=o.sibling}if(!s){for(o=a.child;o;){if(o===n){s=!0,n=a,i=r;break}if(o===i){s=!0,i=a,n=r;break}o=o.sibling}if(!s)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function Vg(t){return t=h0(t),t!==null?Hg(t):null}function Hg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Hg(t);if(e!==null)return e;t=t.sibling}return null}var Gg=fn.unstable_scheduleCallback,kf=fn.unstable_cancelCallback,f0=fn.unstable_shouldYield,p0=fn.unstable_requestPaint,gt=fn.unstable_now,m0=fn.unstable_getCurrentPriorityLevel,Sh=fn.unstable_ImmediatePriority,Wg=fn.unstable_UserBlockingPriority,pl=fn.unstable_NormalPriority,g0=fn.unstable_LowPriority,qg=fn.unstable_IdlePriority,ql=null,Yn=null;function y0(t){if(Yn&&typeof Yn.onCommitFiberRoot=="function")try{Yn.onCommitFiberRoot(ql,t,void 0,(t.current.flags&128)===128)}catch{}}var Fn=Math.clz32?Math.clz32:_0,v0=Math.log,x0=Math.LN2;function _0(t){return t>>>=0,t===0?32:31-(v0(t)/x0|0)|0}var so=64,oo=4194304;function os(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ml(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,a=t.pingedLanes,s=n&268435455;if(s!==0){var o=s&~r;o!==0?i=os(o):(a&=s,a!==0&&(i=os(a)))}else s=n&~r,s!==0?i=os(s):a!==0&&(i=os(a));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,a=e&-e,r>=a||r===16&&(a&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Fn(e),r=1<<n,i|=t[n],e&=~r;return i}function S0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function b0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,a=t.pendingLanes;0<a;){var s=31-Fn(a),o=1<<s,l=r[s];l===-1?(!(o&n)||o&i)&&(r[s]=S0(o,e)):l<=e&&(t.expiredLanes|=o),a&=~o}}function Xu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Xg(){var t=so;return so<<=1,!(so&4194240)&&(so=64),t}function Ac(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Hs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Fn(e),t[e]=n}function w0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Fn(n),a=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~a}}function bh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Fn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function $g(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Yg,wh,Kg,Zg,Jg,$u=!1,lo=[],Oi=null,zi=null,Bi=null,Es=new Map,Cs=new Map,Ii=[],M0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ff(t,e){switch(t){case"focusin":case"focusout":Oi=null;break;case"dragenter":case"dragleave":zi=null;break;case"mouseover":case"mouseout":Bi=null;break;case"pointerover":case"pointerout":Es.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cs.delete(e.pointerId)}}function qa(t,e,n,i,r,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[r]},e!==null&&(e=Ws(e),e!==null&&wh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function E0(t,e,n,i,r){switch(e){case"focusin":return Oi=qa(Oi,t,e,n,i,r),!0;case"dragenter":return zi=qa(zi,t,e,n,i,r),!0;case"mouseover":return Bi=qa(Bi,t,e,n,i,r),!0;case"pointerover":var a=r.pointerId;return Es.set(a,qa(Es.get(a)||null,t,e,n,i,r)),!0;case"gotpointercapture":return a=r.pointerId,Cs.set(a,qa(Cs.get(a)||null,t,e,n,i,r)),!0}return!1}function Qg(t){var e=gr(t.target);if(e!==null){var n=Ir(e);if(n!==null){if(e=n.tag,e===13){if(e=jg(n),e!==null){t.blockedOn=e,Jg(t.priority,function(){Kg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $o(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Yu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Hu=i,n.target.dispatchEvent(i),Hu=null}else return e=Ws(n),e!==null&&wh(e),t.blockedOn=n,!1;e.shift()}return!0}function Of(t,e,n){$o(t)&&n.delete(e)}function C0(){$u=!1,Oi!==null&&$o(Oi)&&(Oi=null),zi!==null&&$o(zi)&&(zi=null),Bi!==null&&$o(Bi)&&(Bi=null),Es.forEach(Of),Cs.forEach(Of)}function Xa(t,e){t.blockedOn===e&&(t.blockedOn=null,$u||($u=!0,fn.unstable_scheduleCallback(fn.unstable_NormalPriority,C0)))}function Ts(t){function e(r){return Xa(r,t)}if(0<lo.length){Xa(lo[0],t);for(var n=1;n<lo.length;n++){var i=lo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Oi!==null&&Xa(Oi,t),zi!==null&&Xa(zi,t),Bi!==null&&Xa(Bi,t),Es.forEach(e),Cs.forEach(e),n=0;n<Ii.length;n++)i=Ii[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ii.length&&(n=Ii[0],n.blockedOn===null);)Qg(n),n.blockedOn===null&&Ii.shift()}var xa=_i.ReactCurrentBatchConfig,gl=!0;function T0(t,e,n,i){var r=et,a=xa.transition;xa.transition=null;try{et=1,Mh(t,e,n,i)}finally{et=r,xa.transition=a}}function A0(t,e,n,i){var r=et,a=xa.transition;xa.transition=null;try{et=4,Mh(t,e,n,i)}finally{et=r,xa.transition=a}}function Mh(t,e,n,i){if(gl){var r=Yu(t,e,n,i);if(r===null)Oc(t,e,i,yl,n),Ff(t,i);else if(E0(r,t,e,n,i))i.stopPropagation();else if(Ff(t,i),e&4&&-1<M0.indexOf(t)){for(;r!==null;){var a=Ws(r);if(a!==null&&Yg(a),a=Yu(t,e,n,i),a===null&&Oc(t,e,i,yl,n),a===r)break;r=a}r!==null&&i.stopPropagation()}else Oc(t,e,i,null,n)}}var yl=null;function Yu(t,e,n,i){if(yl=null,t=_h(i),t=gr(t),t!==null)if(e=Ir(t),e===null)t=null;else if(n=e.tag,n===13){if(t=jg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return yl=t,null}function ey(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(m0()){case Sh:return 1;case Wg:return 4;case pl:case g0:return 16;case qg:return 536870912;default:return 16}default:return 16}}var Ui=null,Eh=null,Yo=null;function ty(){if(Yo)return Yo;var t,e=Eh,n=e.length,i,r="value"in Ui?Ui.value:Ui.textContent,a=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[a-i];i++);return Yo=r.slice(t,1<i?1-i:void 0)}function Ko(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function co(){return!0}function zf(){return!1}function mn(t){function e(n,i,r,a,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?co:zf,this.isPropagationStopped=zf,this}return ut(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=co)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=co)},persist:function(){},isPersistent:co}),e}var za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ch=mn(za),Gs=ut({},za,{view:0,detail:0}),R0=mn(Gs),Rc,Pc,$a,Xl=ut({},Gs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Th,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$a&&($a&&t.type==="mousemove"?(Rc=t.screenX-$a.screenX,Pc=t.screenY-$a.screenY):Pc=Rc=0,$a=t),Rc)},movementY:function(t){return"movementY"in t?t.movementY:Pc}}),Bf=mn(Xl),P0=ut({},Xl,{dataTransfer:0}),N0=mn(P0),I0=ut({},Gs,{relatedTarget:0}),Nc=mn(I0),D0=ut({},za,{animationName:0,elapsedTime:0,pseudoElement:0}),L0=mn(D0),U0=ut({},za,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),k0=mn(U0),F0=ut({},za,{data:0}),jf=mn(F0),O0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},z0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function j0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=B0[t])?!!e[t]:!1}function Th(){return j0}var V0=ut({},Gs,{key:function(t){if(t.key){var e=O0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ko(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?z0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Th,charCode:function(t){return t.type==="keypress"?Ko(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ko(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),H0=mn(V0),G0=ut({},Xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vf=mn(G0),W0=ut({},Gs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Th}),q0=mn(W0),X0=ut({},za,{propertyName:0,elapsedTime:0,pseudoElement:0}),$0=mn(X0),Y0=ut({},Xl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),K0=mn(Y0),Z0=[9,13,27,32],Ah=fi&&"CompositionEvent"in window,hs=null;fi&&"documentMode"in document&&(hs=document.documentMode);var J0=fi&&"TextEvent"in window&&!hs,ny=fi&&(!Ah||hs&&8<hs&&11>=hs),Hf=" ",Gf=!1;function iy(t,e){switch(t){case"keyup":return Z0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ry(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ra=!1;function Q0(t,e){switch(t){case"compositionend":return ry(e);case"keypress":return e.which!==32?null:(Gf=!0,Hf);case"textInput":return t=e.data,t===Hf&&Gf?null:t;default:return null}}function e_(t,e){if(ra)return t==="compositionend"||!Ah&&iy(t,e)?(t=ty(),Yo=Eh=Ui=null,ra=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ny&&e.locale!=="ko"?null:e.data;default:return null}}var t_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!t_[t.type]:e==="textarea"}function ay(t,e,n,i){kg(i),e=vl(e,"onChange"),0<e.length&&(n=new Ch("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var fs=null,As=null;function n_(t){gy(t,0)}function $l(t){var e=oa(t);if(Rg(e))return t}function i_(t,e){if(t==="change")return e}var sy=!1;if(fi){var Ic;if(fi){var Dc="oninput"in document;if(!Dc){var qf=document.createElement("div");qf.setAttribute("oninput","return;"),Dc=typeof qf.oninput=="function"}Ic=Dc}else Ic=!1;sy=Ic&&(!document.documentMode||9<document.documentMode)}function Xf(){fs&&(fs.detachEvent("onpropertychange",oy),As=fs=null)}function oy(t){if(t.propertyName==="value"&&$l(As)){var e=[];ay(e,As,t,_h(t)),Bg(n_,e)}}function r_(t,e,n){t==="focusin"?(Xf(),fs=e,As=n,fs.attachEvent("onpropertychange",oy)):t==="focusout"&&Xf()}function a_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $l(As)}function s_(t,e){if(t==="click")return $l(e)}function o_(t,e){if(t==="input"||t==="change")return $l(e)}function l_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zn=typeof Object.is=="function"?Object.is:l_;function Rs(t,e){if(zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Nu.call(e,r)||!zn(t[r],e[r]))return!1}return!0}function $f(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yf(t,e){var n=$f(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$f(n)}}function ly(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ly(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function cy(){for(var t=window,e=dl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=dl(t.document)}return e}function Rh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function c_(t){var e=cy(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ly(n.ownerDocument.documentElement,n)){if(i!==null&&Rh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,a=Math.min(i.start,r);i=i.end===void 0?a:Math.min(i.end,r),!t.extend&&a>i&&(r=i,i=a,a=r),r=Yf(n,a);var s=Yf(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),a>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var u_=fi&&"documentMode"in document&&11>=document.documentMode,aa=null,Ku=null,ps=null,Zu=!1;function Kf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zu||aa==null||aa!==dl(i)||(i=aa,"selectionStart"in i&&Rh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ps&&Rs(ps,i)||(ps=i,i=vl(Ku,"onSelect"),0<i.length&&(e=new Ch("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=aa)))}function uo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var sa={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},Lc={},uy={};fi&&(uy=document.createElement("div").style,"AnimationEvent"in window||(delete sa.animationend.animation,delete sa.animationiteration.animation,delete sa.animationstart.animation),"TransitionEvent"in window||delete sa.transitionend.transition);function Yl(t){if(Lc[t])return Lc[t];if(!sa[t])return t;var e=sa[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in uy)return Lc[t]=e[n];return t}var dy=Yl("animationend"),hy=Yl("animationiteration"),fy=Yl("animationstart"),py=Yl("transitionend"),my=new Map,Zf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ji(t,e){my.set(t,e),Nr(e,[t])}for(var Uc=0;Uc<Zf.length;Uc++){var kc=Zf[Uc],d_=kc.toLowerCase(),h_=kc[0].toUpperCase()+kc.slice(1);Ji(d_,"on"+h_)}Ji(dy,"onAnimationEnd");Ji(hy,"onAnimationIteration");Ji(fy,"onAnimationStart");Ji("dblclick","onDoubleClick");Ji("focusin","onFocus");Ji("focusout","onBlur");Ji(py,"onTransitionEnd");Ea("onMouseEnter",["mouseout","mouseover"]);Ea("onMouseLeave",["mouseout","mouseover"]);Ea("onPointerEnter",["pointerout","pointerover"]);Ea("onPointerLeave",["pointerout","pointerover"]);Nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ls="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),f_=new Set("cancel close invalid load scroll toggle".split(" ").concat(ls));function Jf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,d0(i,e,void 0,t),t.currentTarget=null}function gy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var a=void 0;if(e)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==a&&r.isPropagationStopped())break e;Jf(r,o,u),a=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,u=o.currentTarget,o=o.listener,l!==a&&r.isPropagationStopped())break e;Jf(r,o,u),a=l}}}if(fl)throw t=qu,fl=!1,qu=null,t}function it(t,e){var n=e[nd];n===void 0&&(n=e[nd]=new Set);var i=t+"__bubble";n.has(i)||(yy(e,t,2,!1),n.add(i))}function Fc(t,e,n){var i=0;e&&(i|=4),yy(n,t,i,e)}var ho="_reactListening"+Math.random().toString(36).slice(2);function Ps(t){if(!t[ho]){t[ho]=!0,Mg.forEach(function(n){n!=="selectionchange"&&(f_.has(n)||Fc(n,!1,t),Fc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ho]||(e[ho]=!0,Fc("selectionchange",!1,e))}}function yy(t,e,n,i){switch(ey(e)){case 1:var r=T0;break;case 4:r=A0;break;default:r=Mh}n=r.bind(null,e,n,t),r=void 0,!Wu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Oc(t,e,n,i,r){var a=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;o!==null;){if(s=gr(o),s===null)return;if(l=s.tag,l===5||l===6){i=a=s;continue e}o=o.parentNode}}i=i.return}Bg(function(){var u=a,d=_h(n),f=[];e:{var p=my.get(t);if(p!==void 0){var g=Ch,y=t;switch(t){case"keypress":if(Ko(n)===0)break e;case"keydown":case"keyup":g=H0;break;case"focusin":y="focus",g=Nc;break;case"focusout":y="blur",g=Nc;break;case"beforeblur":case"afterblur":g=Nc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Bf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=N0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=q0;break;case dy:case hy:case fy:g=L0;break;case py:g=$0;break;case"scroll":g=R0;break;case"wheel":g=K0;break;case"copy":case"cut":case"paste":g=k0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Vf}var x=(e&4)!==0,m=!x&&t==="scroll",h=x?p!==null?p+"Capture":null:p;x=[];for(var v=u,_;v!==null;){_=v;var M=_.stateNode;if(_.tag===5&&M!==null&&(_=M,h!==null&&(M=Ms(v,h),M!=null&&x.push(Ns(v,M,_)))),m)break;v=v.return}0<x.length&&(p=new g(p,y,null,n,d),f.push({event:p,listeners:x}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",p&&n!==Hu&&(y=n.relatedTarget||n.fromElement)&&(gr(y)||y[pi]))break e;if((g||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?gr(y):null,y!==null&&(m=Ir(y),y!==m||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(x=Bf,M="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=Vf,M="onPointerLeave",h="onPointerEnter",v="pointer"),m=g==null?p:oa(g),_=y==null?p:oa(y),p=new x(M,v+"leave",g,n,d),p.target=m,p.relatedTarget=_,M=null,gr(d)===u&&(x=new x(h,v+"enter",y,n,d),x.target=_,x.relatedTarget=m,M=x),m=M,g&&y)t:{for(x=g,h=y,v=0,_=x;_;_=Fr(_))v++;for(_=0,M=h;M;M=Fr(M))_++;for(;0<v-_;)x=Fr(x),v--;for(;0<_-v;)h=Fr(h),_--;for(;v--;){if(x===h||h!==null&&x===h.alternate)break t;x=Fr(x),h=Fr(h)}x=null}else x=null;g!==null&&Qf(f,p,g,x,!1),y!==null&&m!==null&&Qf(f,m,y,x,!0)}}e:{if(p=u?oa(u):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var P=i_;else if(Wf(p))if(sy)P=o_;else{P=a_;var A=r_}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(P=s_);if(P&&(P=P(t,u))){ay(f,P,n,d);break e}A&&A(t,p,u),t==="focusout"&&(A=p._wrapperState)&&A.controlled&&p.type==="number"&&Ou(p,"number",p.value)}switch(A=u?oa(u):window,t){case"focusin":(Wf(A)||A.contentEditable==="true")&&(aa=A,Ku=u,ps=null);break;case"focusout":ps=Ku=aa=null;break;case"mousedown":Zu=!0;break;case"contextmenu":case"mouseup":case"dragend":Zu=!1,Kf(f,n,d);break;case"selectionchange":if(u_)break;case"keydown":case"keyup":Kf(f,n,d)}var E;if(Ah)e:{switch(t){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else ra?iy(t,n)&&(w="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(ny&&n.locale!=="ko"&&(ra||w!=="onCompositionStart"?w==="onCompositionEnd"&&ra&&(E=ty()):(Ui=d,Eh="value"in Ui?Ui.value:Ui.textContent,ra=!0)),A=vl(u,w),0<A.length&&(w=new jf(w,t,null,n,d),f.push({event:w,listeners:A}),E?w.data=E:(E=ry(n),E!==null&&(w.data=E)))),(E=J0?Q0(t,n):e_(t,n))&&(u=vl(u,"onBeforeInput"),0<u.length&&(d=new jf("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=E))}gy(f,e)})}function Ns(t,e,n){return{instance:t,listener:e,currentTarget:n}}function vl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,a=r.stateNode;r.tag===5&&a!==null&&(r=a,a=Ms(t,n),a!=null&&i.unshift(Ns(t,a,r)),a=Ms(t,e),a!=null&&i.push(Ns(t,a,r))),t=t.return}return i}function Fr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Qf(t,e,n,i,r){for(var a=e._reactName,s=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=Ms(n,a),l!=null&&s.unshift(Ns(n,l,o))):r||(l=Ms(n,a),l!=null&&s.push(Ns(n,l,o)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var p_=/\r\n?/g,m_=/\u0000|\uFFFD/g;function ep(t){return(typeof t=="string"?t:""+t).replace(p_,`
`).replace(m_,"")}function fo(t,e,n){if(e=ep(e),ep(t)!==e&&n)throw Error(ie(425))}function xl(){}var Ju=null,Qu=null;function ed(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var td=typeof setTimeout=="function"?setTimeout:void 0,g_=typeof clearTimeout=="function"?clearTimeout:void 0,tp=typeof Promise=="function"?Promise:void 0,y_=typeof queueMicrotask=="function"?queueMicrotask:typeof tp<"u"?function(t){return tp.resolve(null).then(t).catch(v_)}:td;function v_(t){setTimeout(function(){throw t})}function zc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ts(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ts(e)}function ji(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function np(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ba=Math.random().toString(36).slice(2),Wn="__reactFiber$"+Ba,Is="__reactProps$"+Ba,pi="__reactContainer$"+Ba,nd="__reactEvents$"+Ba,x_="__reactListeners$"+Ba,__="__reactHandles$"+Ba;function gr(t){var e=t[Wn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[pi]||n[Wn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=np(t);t!==null;){if(n=t[Wn])return n;t=np(t)}return e}t=n,n=t.parentNode}return null}function Ws(t){return t=t[Wn]||t[pi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function oa(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function Kl(t){return t[Is]||null}var id=[],la=-1;function Qi(t){return{current:t}}function at(t){0>la||(t.current=id[la],id[la]=null,la--)}function nt(t,e){la++,id[la]=t.current,t.current=e}var Ki={},Ht=Qi(Ki),Qt=Qi(!1),Mr=Ki;function Ca(t,e){var n=t.type.contextTypes;if(!n)return Ki;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},a;for(a in n)r[a]=e[a];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function en(t){return t=t.childContextTypes,t!=null}function _l(){at(Qt),at(Ht)}function ip(t,e,n){if(Ht.current!==Ki)throw Error(ie(168));nt(Ht,e),nt(Qt,n)}function vy(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,r0(t)||"Unknown",r));return ut({},n,i)}function Sl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ki,Mr=Ht.current,nt(Ht,t),nt(Qt,Qt.current),!0}function rp(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=vy(t,e,Mr),i.__reactInternalMemoizedMergedChildContext=t,at(Qt),at(Ht),nt(Ht,t)):at(Qt),nt(Qt,n)}var si=null,Zl=!1,Bc=!1;function xy(t){si===null?si=[t]:si.push(t)}function S_(t){Zl=!0,xy(t)}function er(){if(!Bc&&si!==null){Bc=!0;var t=0,e=et;try{var n=si;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}si=null,Zl=!1}catch(r){throw si!==null&&(si=si.slice(t+1)),Gg(Sh,er),r}finally{et=e,Bc=!1}}return null}var ca=[],ua=0,bl=null,wl=0,vn=[],xn=0,Er=null,li=1,ci="";function ur(t,e){ca[ua++]=wl,ca[ua++]=bl,bl=t,wl=e}function _y(t,e,n){vn[xn++]=li,vn[xn++]=ci,vn[xn++]=Er,Er=t;var i=li;t=ci;var r=32-Fn(i)-1;i&=~(1<<r),n+=1;var a=32-Fn(e)+r;if(30<a){var s=r-r%5;a=(i&(1<<s)-1).toString(32),i>>=s,r-=s,li=1<<32-Fn(e)+r|n<<r|i,ci=a+t}else li=1<<a|n<<r|i,ci=t}function Ph(t){t.return!==null&&(ur(t,1),_y(t,1,0))}function Nh(t){for(;t===bl;)bl=ca[--ua],ca[ua]=null,wl=ca[--ua],ca[ua]=null;for(;t===Er;)Er=vn[--xn],vn[xn]=null,ci=vn[--xn],vn[xn]=null,li=vn[--xn],vn[xn]=null}var dn=null,un=null,st=!1,In=null;function Sy(t,e){var n=_n(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ap(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,dn=t,un=ji(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,dn=t,un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Er!==null?{id:li,overflow:ci}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=_n(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,dn=t,un=null,!0):!1;default:return!1}}function rd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ad(t){if(st){var e=un;if(e){var n=e;if(!ap(t,e)){if(rd(t))throw Error(ie(418));e=ji(n.nextSibling);var i=dn;e&&ap(t,e)?Sy(i,n):(t.flags=t.flags&-4097|2,st=!1,dn=t)}}else{if(rd(t))throw Error(ie(418));t.flags=t.flags&-4097|2,st=!1,dn=t}}}function sp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;dn=t}function po(t){if(t!==dn)return!1;if(!st)return sp(t),st=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ed(t.type,t.memoizedProps)),e&&(e=un)){if(rd(t))throw by(),Error(ie(418));for(;e;)Sy(t,e),e=ji(e.nextSibling)}if(sp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){un=ji(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}un=null}}else un=dn?ji(t.stateNode.nextSibling):null;return!0}function by(){for(var t=un;t;)t=ji(t.nextSibling)}function Ta(){un=dn=null,st=!1}function Ih(t){In===null?In=[t]:In.push(t)}var b_=_i.ReactCurrentBatchConfig;function Ya(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,a=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(s){var o=r.refs;s===null?delete o[a]:o[a]=s},e._stringRef=a,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function mo(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function op(t){var e=t._init;return e(t._payload)}function wy(t){function e(h,v){if(t){var _=h.deletions;_===null?(h.deletions=[v],h.flags|=16):_.push(v)}}function n(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=Wi(h,v),h.index=0,h.sibling=null,h}function a(h,v,_){return h.index=_,t?(_=h.alternate,_!==null?(_=_.index,_<v?(h.flags|=2,v):_):(h.flags|=2,v)):(h.flags|=1048576,v)}function s(h){return t&&h.alternate===null&&(h.flags|=2),h}function o(h,v,_,M){return v===null||v.tag!==6?(v=Xc(_,h.mode,M),v.return=h,v):(v=r(v,_),v.return=h,v)}function l(h,v,_,M){var P=_.type;return P===ia?d(h,v,_.props.children,M,_.key):v!==null&&(v.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Pi&&op(P)===v.type)?(M=r(v,_.props),M.ref=Ya(h,v,_),M.return=h,M):(M=il(_.type,_.key,_.props,null,h.mode,M),M.ref=Ya(h,v,_),M.return=h,M)}function u(h,v,_,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=$c(_,h.mode,M),v.return=h,v):(v=r(v,_.children||[]),v.return=h,v)}function d(h,v,_,M,P){return v===null||v.tag!==7?(v=br(_,h.mode,M,P),v.return=h,v):(v=r(v,_),v.return=h,v)}function f(h,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Xc(""+v,h.mode,_),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case io:return _=il(v.type,v.key,v.props,null,h.mode,_),_.ref=Ya(h,null,v),_.return=h,_;case na:return v=$c(v,h.mode,_),v.return=h,v;case Pi:var M=v._init;return f(h,M(v._payload),_)}if(ss(v)||Ga(v))return v=br(v,h.mode,_,null),v.return=h,v;mo(h,v)}return null}function p(h,v,_,M){var P=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return P!==null?null:o(h,v,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case io:return _.key===P?l(h,v,_,M):null;case na:return _.key===P?u(h,v,_,M):null;case Pi:return P=_._init,p(h,v,P(_._payload),M)}if(ss(_)||Ga(_))return P!==null?null:d(h,v,_,M,null);mo(h,_)}return null}function g(h,v,_,M,P){if(typeof M=="string"&&M!==""||typeof M=="number")return h=h.get(_)||null,o(v,h,""+M,P);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case io:return h=h.get(M.key===null?_:M.key)||null,l(v,h,M,P);case na:return h=h.get(M.key===null?_:M.key)||null,u(v,h,M,P);case Pi:var A=M._init;return g(h,v,_,A(M._payload),P)}if(ss(M)||Ga(M))return h=h.get(_)||null,d(v,h,M,P,null);mo(v,M)}return null}function y(h,v,_,M){for(var P=null,A=null,E=v,w=v=0,S=null;E!==null&&w<_.length;w++){E.index>w?(S=E,E=null):S=E.sibling;var b=p(h,E,_[w],M);if(b===null){E===null&&(E=S);break}t&&E&&b.alternate===null&&e(h,E),v=a(b,v,w),A===null?P=b:A.sibling=b,A=b,E=S}if(w===_.length)return n(h,E),st&&ur(h,w),P;if(E===null){for(;w<_.length;w++)E=f(h,_[w],M),E!==null&&(v=a(E,v,w),A===null?P=E:A.sibling=E,A=E);return st&&ur(h,w),P}for(E=i(h,E);w<_.length;w++)S=g(E,h,w,_[w],M),S!==null&&(t&&S.alternate!==null&&E.delete(S.key===null?w:S.key),v=a(S,v,w),A===null?P=S:A.sibling=S,A=S);return t&&E.forEach(function(T){return e(h,T)}),st&&ur(h,w),P}function x(h,v,_,M){var P=Ga(_);if(typeof P!="function")throw Error(ie(150));if(_=P.call(_),_==null)throw Error(ie(151));for(var A=P=null,E=v,w=v=0,S=null,b=_.next();E!==null&&!b.done;w++,b=_.next()){E.index>w?(S=E,E=null):S=E.sibling;var T=p(h,E,b.value,M);if(T===null){E===null&&(E=S);break}t&&E&&T.alternate===null&&e(h,E),v=a(T,v,w),A===null?P=T:A.sibling=T,A=T,E=S}if(b.done)return n(h,E),st&&ur(h,w),P;if(E===null){for(;!b.done;w++,b=_.next())b=f(h,b.value,M),b!==null&&(v=a(b,v,w),A===null?P=b:A.sibling=b,A=b);return st&&ur(h,w),P}for(E=i(h,E);!b.done;w++,b=_.next())b=g(E,h,w,b.value,M),b!==null&&(t&&b.alternate!==null&&E.delete(b.key===null?w:b.key),v=a(b,v,w),A===null?P=b:A.sibling=b,A=b);return t&&E.forEach(function(z){return e(h,z)}),st&&ur(h,w),P}function m(h,v,_,M){if(typeof _=="object"&&_!==null&&_.type===ia&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case io:e:{for(var P=_.key,A=v;A!==null;){if(A.key===P){if(P=_.type,P===ia){if(A.tag===7){n(h,A.sibling),v=r(A,_.props.children),v.return=h,h=v;break e}}else if(A.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Pi&&op(P)===A.type){n(h,A.sibling),v=r(A,_.props),v.ref=Ya(h,A,_),v.return=h,h=v;break e}n(h,A);break}else e(h,A);A=A.sibling}_.type===ia?(v=br(_.props.children,h.mode,M,_.key),v.return=h,h=v):(M=il(_.type,_.key,_.props,null,h.mode,M),M.ref=Ya(h,v,_),M.return=h,h=M)}return s(h);case na:e:{for(A=_.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(h,v.sibling),v=r(v,_.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else e(h,v);v=v.sibling}v=$c(_,h.mode,M),v.return=h,h=v}return s(h);case Pi:return A=_._init,m(h,v,A(_._payload),M)}if(ss(_))return y(h,v,_,M);if(Ga(_))return x(h,v,_,M);mo(h,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(h,v.sibling),v=r(v,_),v.return=h,h=v):(n(h,v),v=Xc(_,h.mode,M),v.return=h,h=v),s(h)):n(h,v)}return m}var Aa=wy(!0),My=wy(!1),Ml=Qi(null),El=null,da=null,Dh=null;function Lh(){Dh=da=El=null}function Uh(t){var e=Ml.current;at(Ml),t._currentValue=e}function sd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function _a(t,e){El=t,Dh=da=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jt=!0),t.firstContext=null)}function wn(t){var e=t._currentValue;if(Dh!==t)if(t={context:t,memoizedValue:e,next:null},da===null){if(El===null)throw Error(ie(308));da=t,El.dependencies={lanes:0,firstContext:t}}else da=da.next=t;return e}var yr=null;function kh(t){yr===null?yr=[t]:yr.push(t)}function Ey(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,kh(e)):(n.next=r.next,r.next=n),e.interleaved=n,mi(t,i)}function mi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ni=!1;function Fh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Vi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,We&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,mi(t,n)}return r=i.interleaved,r===null?(e.next=e,kh(i)):(e.next=r.next,r.next=e),i.interleaved=e,mi(t,n)}function Zo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,bh(t,n)}}function lp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?r=a=s:a=a.next=s,n=n.next}while(n!==null);a===null?r=a=e:a=a.next=e}else r=a=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Cl(t,e,n,i){var r=t.updateQueue;Ni=!1;var a=r.firstBaseUpdate,s=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,s===null?a=u:s.next=u,s=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==s&&(o===null?d.firstBaseUpdate=u:o.next=u,d.lastBaseUpdate=l))}if(a!==null){var f=r.baseState;s=0,d=u=l=null,o=a;do{var p=o.lane,g=o.eventTime;if((i&p)===p){d!==null&&(d=d.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var y=t,x=o;switch(p=e,g=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){f=y.call(g,f,p);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,p=typeof y=="function"?y.call(g,f,p):y,p==null)break e;f=ut({},f,p);break e;case 2:Ni=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[o]:p.push(o))}else g={eventTime:g,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(u=d=g,l=f):d=d.next=g,s|=p;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;p=o,o=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else a===null&&(r.shared.lanes=0);Tr|=s,t.lanes=s,t.memoizedState=f}}function cp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var qs={},Kn=Qi(qs),Ds=Qi(qs),Ls=Qi(qs);function vr(t){if(t===qs)throw Error(ie(174));return t}function Oh(t,e){switch(nt(Ls,e),nt(Ds,t),nt(Kn,qs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Bu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Bu(e,t)}at(Kn),nt(Kn,e)}function Ra(){at(Kn),at(Ds),at(Ls)}function Ty(t){vr(Ls.current);var e=vr(Kn.current),n=Bu(e,t.type);e!==n&&(nt(Ds,t),nt(Kn,n))}function zh(t){Ds.current===t&&(at(Kn),at(Ds))}var lt=Qi(0);function Tl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jc=[];function Bh(){for(var t=0;t<jc.length;t++)jc[t]._workInProgressVersionPrimary=null;jc.length=0}var Jo=_i.ReactCurrentDispatcher,Vc=_i.ReactCurrentBatchConfig,Cr=0,ct=null,wt=null,Rt=null,Al=!1,ms=!1,Us=0,w_=0;function Ot(){throw Error(ie(321))}function jh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!zn(t[n],e[n]))return!1;return!0}function Vh(t,e,n,i,r,a){if(Cr=a,ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Jo.current=t===null||t.memoizedState===null?T_:A_,t=n(i,r),ms){a=0;do{if(ms=!1,Us=0,25<=a)throw Error(ie(301));a+=1,Rt=wt=null,e.updateQueue=null,Jo.current=R_,t=n(i,r)}while(ms)}if(Jo.current=Rl,e=wt!==null&&wt.next!==null,Cr=0,Rt=wt=ct=null,Al=!1,e)throw Error(ie(300));return t}function Hh(){var t=Us!==0;return Us=0,t}function Vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?ct.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function Mn(){if(wt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=Rt===null?ct.memoizedState:Rt.next;if(e!==null)Rt=e,wt=t;else{if(t===null)throw Error(ie(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Rt===null?ct.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function ks(t,e){return typeof e=="function"?e(t):e}function Hc(t){var e=Mn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=wt,r=i.baseQueue,a=n.pending;if(a!==null){if(r!==null){var s=r.next;r.next=a.next,a.next=s}i.baseQueue=r=a,n.pending=null}if(r!==null){a=r.next,i=i.baseState;var o=s=null,l=null,u=a;do{var d=u.lane;if((Cr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=f,s=i):l=l.next=f,ct.lanes|=d,Tr|=d}u=u.next}while(u!==null&&u!==a);l===null?s=i:l.next=o,zn(i,e.memoizedState)||(Jt=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do a=r.lane,ct.lanes|=a,Tr|=a,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gc(t){var e=Mn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,a=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do a=t(a,s.action),s=s.next;while(s!==r);zn(a,e.memoizedState)||(Jt=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),n.lastRenderedState=a}return[a,i]}function Ay(){}function Ry(t,e){var n=ct,i=Mn(),r=e(),a=!zn(i.memoizedState,r);if(a&&(i.memoizedState=r,Jt=!0),i=i.queue,Gh(Iy.bind(null,n,i,t),[t]),i.getSnapshot!==e||a||Rt!==null&&Rt.memoizedState.tag&1){if(n.flags|=2048,Fs(9,Ny.bind(null,n,i,r,e),void 0,null),It===null)throw Error(ie(349));Cr&30||Py(n,e,r)}return r}function Py(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ny(t,e,n,i){e.value=n,e.getSnapshot=i,Dy(e)&&Ly(t)}function Iy(t,e,n){return n(function(){Dy(e)&&Ly(t)})}function Dy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zn(t,n)}catch{return!0}}function Ly(t){var e=mi(t,1);e!==null&&On(e,t,1,-1)}function up(t){var e=Vn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ks,lastRenderedState:t},e.queue=t,t=t.dispatch=C_.bind(null,ct,t),[e.memoizedState,t]}function Fs(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Uy(){return Mn().memoizedState}function Qo(t,e,n,i){var r=Vn();ct.flags|=t,r.memoizedState=Fs(1|e,n,void 0,i===void 0?null:i)}function Jl(t,e,n,i){var r=Mn();i=i===void 0?null:i;var a=void 0;if(wt!==null){var s=wt.memoizedState;if(a=s.destroy,i!==null&&jh(i,s.deps)){r.memoizedState=Fs(e,n,a,i);return}}ct.flags|=t,r.memoizedState=Fs(1|e,n,a,i)}function dp(t,e){return Qo(8390656,8,t,e)}function Gh(t,e){return Jl(2048,8,t,e)}function ky(t,e){return Jl(4,2,t,e)}function Fy(t,e){return Jl(4,4,t,e)}function Oy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function zy(t,e,n){return n=n!=null?n.concat([t]):null,Jl(4,4,Oy.bind(null,e,t),n)}function Wh(){}function By(t,e){var n=Mn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&jh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function jy(t,e){var n=Mn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&jh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Vy(t,e,n){return Cr&21?(zn(n,e)||(n=Xg(),ct.lanes|=n,Tr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=n)}function M_(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=Vc.transition;Vc.transition={};try{t(!1),e()}finally{et=n,Vc.transition=i}}function Hy(){return Mn().memoizedState}function E_(t,e,n){var i=Gi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Gy(t))Wy(e,n);else if(n=Ey(t,e,n,i),n!==null){var r=qt();On(n,t,i,r),qy(n,e,i)}}function C_(t,e,n){var i=Gi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gy(t))Wy(e,r);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var s=e.lastRenderedState,o=a(s,n);if(r.hasEagerState=!0,r.eagerState=o,zn(o,s)){var l=e.interleaved;l===null?(r.next=r,kh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Ey(t,e,r,i),n!==null&&(r=qt(),On(n,t,i,r),qy(n,e,i))}}function Gy(t){var e=t.alternate;return t===ct||e!==null&&e===ct}function Wy(t,e){ms=Al=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function qy(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,bh(t,n)}}var Rl={readContext:wn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},T_={readContext:wn,useCallback:function(t,e){return Vn().memoizedState=[t,e===void 0?null:e],t},useContext:wn,useEffect:dp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Qo(4194308,4,Oy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Qo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Qo(4,2,t,e)},useMemo:function(t,e){var n=Vn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Vn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=E_.bind(null,ct,t),[i.memoizedState,t]},useRef:function(t){var e=Vn();return t={current:t},e.memoizedState=t},useState:up,useDebugValue:Wh,useDeferredValue:function(t){return Vn().memoizedState=t},useTransition:function(){var t=up(!1),e=t[0];return t=M_.bind(null,t[1]),Vn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ct,r=Vn();if(st){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),It===null)throw Error(ie(349));Cr&30||Py(i,e,n)}r.memoizedState=n;var a={value:n,getSnapshot:e};return r.queue=a,dp(Iy.bind(null,i,a,t),[t]),i.flags|=2048,Fs(9,Ny.bind(null,i,a,n,e),void 0,null),n},useId:function(){var t=Vn(),e=It.identifierPrefix;if(st){var n=ci,i=li;n=(i&~(1<<32-Fn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Us++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=w_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},A_={readContext:wn,useCallback:By,useContext:wn,useEffect:Gh,useImperativeHandle:zy,useInsertionEffect:ky,useLayoutEffect:Fy,useMemo:jy,useReducer:Hc,useRef:Uy,useState:function(){return Hc(ks)},useDebugValue:Wh,useDeferredValue:function(t){var e=Mn();return Vy(e,wt.memoizedState,t)},useTransition:function(){var t=Hc(ks)[0],e=Mn().memoizedState;return[t,e]},useMutableSource:Ay,useSyncExternalStore:Ry,useId:Hy,unstable_isNewReconciler:!1},R_={readContext:wn,useCallback:By,useContext:wn,useEffect:Gh,useImperativeHandle:zy,useInsertionEffect:ky,useLayoutEffect:Fy,useMemo:jy,useReducer:Gc,useRef:Uy,useState:function(){return Gc(ks)},useDebugValue:Wh,useDeferredValue:function(t){var e=Mn();return wt===null?e.memoizedState=t:Vy(e,wt.memoizedState,t)},useTransition:function(){var t=Gc(ks)[0],e=Mn().memoizedState;return[t,e]},useMutableSource:Ay,useSyncExternalStore:Ry,useId:Hy,unstable_isNewReconciler:!1};function Pn(t,e){if(t&&t.defaultProps){e=ut({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function od(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ut({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ql={isMounted:function(t){return(t=t._reactInternals)?Ir(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=qt(),r=Gi(t),a=hi(i,r);a.payload=e,n!=null&&(a.callback=n),e=Vi(t,a,r),e!==null&&(On(e,t,r,i),Zo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=qt(),r=Gi(t),a=hi(i,r);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=Vi(t,a,r),e!==null&&(On(e,t,r,i),Zo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qt(),i=Gi(t),r=hi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Vi(t,r,i),e!==null&&(On(e,t,i,n),Zo(e,t,i))}};function hp(t,e,n,i,r,a,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,a,s):e.prototype&&e.prototype.isPureReactComponent?!Rs(n,i)||!Rs(r,a):!0}function Xy(t,e,n){var i=!1,r=Ki,a=e.contextType;return typeof a=="object"&&a!==null?a=wn(a):(r=en(e)?Mr:Ht.current,i=e.contextTypes,a=(i=i!=null)?Ca(t,r):Ki),e=new e(n,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ql,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=a),e}function fp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ql.enqueueReplaceState(e,e.state,null)}function ld(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Fh(t);var a=e.contextType;typeof a=="object"&&a!==null?r.context=wn(a):(a=en(e)?Mr:Ht.current,r.context=Ca(t,a)),r.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(od(t,e,a,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ql.enqueueReplaceState(r,r.state,null),Cl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Pa(t,e){try{var n="",i=e;do n+=i0(i),i=i.return;while(i);var r=n}catch(a){r=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:r,digest:null}}function Wc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function cd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var P_=typeof WeakMap=="function"?WeakMap:Map;function $y(t,e,n){n=hi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Nl||(Nl=!0,xd=i),cd(t,e)},n}function Yy(t,e,n){n=hi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){cd(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){cd(t,e),typeof i!="function"&&(Hi===null?Hi=new Set([this]):Hi.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function pp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new P_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=G_.bind(null,t,e,n),e.then(t,t))}function mp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function gp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hi(-1,1),e.tag=2,Vi(n,e,1))),n.lanes|=1),t)}var N_=_i.ReactCurrentOwner,Jt=!1;function Wt(t,e,n,i){e.child=t===null?My(e,null,n,i):Aa(e,t.child,n,i)}function yp(t,e,n,i,r){n=n.render;var a=e.ref;return _a(e,r),i=Vh(t,e,n,i,a,r),n=Hh(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gi(t,e,r)):(st&&n&&Ph(e),e.flags|=1,Wt(t,e,i,r),e.child)}function vp(t,e,n,i,r){if(t===null){var a=n.type;return typeof a=="function"&&!Qh(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=a,Ky(t,e,a,i,r)):(t=il(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!(t.lanes&r)){var s=a.memoizedProps;if(n=n.compare,n=n!==null?n:Rs,n(s,i)&&t.ref===e.ref)return gi(t,e,r)}return e.flags|=1,t=Wi(a,i),t.ref=e.ref,t.return=e,e.child=t}function Ky(t,e,n,i,r){if(t!==null){var a=t.memoizedProps;if(Rs(a,i)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=i=a,(t.lanes&r)!==0)t.flags&131072&&(Jt=!0);else return e.lanes=t.lanes,gi(t,e,r)}return ud(t,e,n,i,r)}function Zy(t,e,n){var i=e.pendingProps,r=i.children,a=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(fa,cn),cn|=n;else{if(!(n&1073741824))return t=a!==null?a.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,nt(fa,cn),cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:n,nt(fa,cn),cn|=i}else a!==null?(i=a.baseLanes|n,e.memoizedState=null):i=n,nt(fa,cn),cn|=i;return Wt(t,e,r,n),e.child}function Jy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ud(t,e,n,i,r){var a=en(n)?Mr:Ht.current;return a=Ca(e,a),_a(e,r),n=Vh(t,e,n,i,a,r),i=Hh(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gi(t,e,r)):(st&&i&&Ph(e),e.flags|=1,Wt(t,e,n,r),e.child)}function xp(t,e,n,i,r){if(en(n)){var a=!0;Sl(e)}else a=!1;if(_a(e,r),e.stateNode===null)el(t,e),Xy(e,n,i),ld(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,o=e.memoizedProps;s.props=o;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=wn(u):(u=en(n)?Mr:Ht.current,u=Ca(e,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==i||l!==u)&&fp(e,s,i,u),Ni=!1;var p=e.memoizedState;s.state=p,Cl(e,i,s,r),l=e.memoizedState,o!==i||p!==l||Qt.current||Ni?(typeof d=="function"&&(od(e,n,d,i),l=e.memoizedState),(o=Ni||hp(e,n,o,i,p,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=o):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,Cy(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:Pn(e.type,o),s.props=u,f=e.pendingProps,p=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=wn(l):(l=en(n)?Mr:Ht.current,l=Ca(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==f||p!==l)&&fp(e,s,i,l),Ni=!1,p=e.memoizedState,s.state=p,Cl(e,i,s,r);var y=e.memoizedState;o!==f||p!==y||Qt.current||Ni?(typeof g=="function"&&(od(e,n,g,i),y=e.memoizedState),(u=Ni||hp(e,n,u,i,p,y,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,y,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),s.props=i,s.state=y,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return dd(t,e,n,i,a,r)}function dd(t,e,n,i,r,a){Jy(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&rp(e,n,!1),gi(t,e,a);i=e.stateNode,N_.current=e;var o=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=Aa(e,t.child,null,a),e.child=Aa(e,null,o,a)):Wt(t,e,o,a),e.memoizedState=i.state,r&&rp(e,n,!0),e.child}function Qy(t){var e=t.stateNode;e.pendingContext?ip(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ip(t,e.context,!1),Oh(t,e.containerInfo)}function _p(t,e,n,i,r){return Ta(),Ih(r),e.flags|=256,Wt(t,e,n,i),e.child}var hd={dehydrated:null,treeContext:null,retryLane:0};function fd(t){return{baseLanes:t,cachePool:null,transitions:null}}function ev(t,e,n){var i=e.pendingProps,r=lt.current,a=!1,s=(e.flags&128)!==0,o;if((o=s)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),nt(lt,r&1),t===null)return ad(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,a?(i=e.mode,a=e.child,s={mode:"hidden",children:s},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=nc(s,i,0,null),t=br(t,i,n,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=fd(n),e.memoizedState=hd,t):qh(e,s));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return I_(t,e,s,i,o,r,n);if(a){a=i.fallback,s=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Wi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?a=Wi(o,a):(a=br(a,s,n,null),a.flags|=2),a.return=e,i.return=e,i.sibling=a,e.child=i,i=a,a=e.child,s=t.child.memoizedState,s=s===null?fd(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=t.childLanes&~n,e.memoizedState=hd,i}return a=t.child,t=a.sibling,i=Wi(a,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function qh(t,e){return e=nc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function go(t,e,n,i){return i!==null&&Ih(i),Aa(e,t.child,null,n),t=qh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function I_(t,e,n,i,r,a,s){if(n)return e.flags&256?(e.flags&=-257,i=Wc(Error(ie(422))),go(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(a=i.fallback,r=e.mode,i=nc({mode:"visible",children:i.children},r,0,null),a=br(a,r,s,null),a.flags|=2,i.return=e,a.return=e,i.sibling=a,e.child=i,e.mode&1&&Aa(e,t.child,null,s),e.child.memoizedState=fd(s),e.memoizedState=hd,a);if(!(e.mode&1))return go(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,a=Error(ie(419)),i=Wc(a,i,void 0),go(t,e,s,i)}if(o=(s&t.childLanes)!==0,Jt||o){if(i=It,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==a.retryLane&&(a.retryLane=r,mi(t,r),On(i,t,r,-1))}return Jh(),i=Wc(Error(ie(421))),go(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=W_.bind(null,t),r._reactRetry=e,null):(t=a.treeContext,un=ji(r.nextSibling),dn=e,st=!0,In=null,t!==null&&(vn[xn++]=li,vn[xn++]=ci,vn[xn++]=Er,li=t.id,ci=t.overflow,Er=e),e=qh(e,i.children),e.flags|=4096,e)}function Sp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),sd(t.return,e,n)}function qc(t,e,n,i,r){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=r)}function tv(t,e,n){var i=e.pendingProps,r=i.revealOrder,a=i.tail;if(Wt(t,e,i.children,n),i=lt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sp(t,n,e);else if(t.tag===19)Sp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(nt(lt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Tl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),qc(e,!1,r,n,a);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Tl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}qc(e,!0,n,null,a);break;case"together":qc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function el(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Tr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=Wi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function D_(t,e,n){switch(e.tag){case 3:Qy(e),Ta();break;case 5:Ty(e);break;case 1:en(e.type)&&Sl(e);break;case 4:Oh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;nt(Ml,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(nt(lt,lt.current&1),e.flags|=128,null):n&e.child.childLanes?ev(t,e,n):(nt(lt,lt.current&1),t=gi(t,e,n),t!==null?t.sibling:null);nt(lt,lt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return tv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),nt(lt,lt.current),i)break;return null;case 22:case 23:return e.lanes=0,Zy(t,e,n)}return gi(t,e,n)}var nv,pd,iv,rv;nv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pd=function(){};iv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,vr(Kn.current);var a=null;switch(n){case"input":r=ku(t,r),i=ku(t,i),a=[];break;case"select":r=ut({},r,{value:void 0}),i=ut({},i,{value:void 0}),a=[];break;case"textarea":r=zu(t,r),i=zu(t,i),a=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=xl)}ju(n,i);var s;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(s in o)o.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(bs.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(s in o)!o.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&o[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(bs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&it("scroll",t),a||o===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(e.updateQueue=u)&&(e.flags|=4)}};rv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ka(t,e){if(!st)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function L_(t,e,n){var i=e.pendingProps;switch(Nh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return en(e.type)&&_l(),zt(e),null;case 3:return i=e.stateNode,Ra(),at(Qt),at(Ht),Bh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(po(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,In!==null&&(bd(In),In=null))),pd(t,e),zt(e),null;case 5:zh(e);var r=vr(Ls.current);if(n=e.type,t!==null&&e.stateNode!=null)iv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return zt(e),null}if(t=vr(Kn.current),po(e)){i=e.stateNode,n=e.type;var a=e.memoizedProps;switch(i[Wn]=e,i[Is]=a,t=(e.mode&1)!==0,n){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(r=0;r<ls.length;r++)it(ls[r],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":Pf(i,a),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},it("invalid",i);break;case"textarea":If(i,a),it("invalid",i)}ju(n,a),r=null;for(var s in a)if(a.hasOwnProperty(s)){var o=a[s];s==="children"?typeof o=="string"?i.textContent!==o&&(a.suppressHydrationWarning!==!0&&fo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&fo(i.textContent,o,t),r=["children",""+o]):bs.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&it("scroll",i)}switch(n){case"input":ro(i),Nf(i,a,!0);break;case"textarea":ro(i),Df(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=xl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ig(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[Wn]=e,t[Is]=i,nv(t,e,!1,!1),e.stateNode=t;e:{switch(s=Vu(n,i),n){case"dialog":it("cancel",t),it("close",t),r=i;break;case"iframe":case"object":case"embed":it("load",t),r=i;break;case"video":case"audio":for(r=0;r<ls.length;r++)it(ls[r],t);r=i;break;case"source":it("error",t),r=i;break;case"img":case"image":case"link":it("error",t),it("load",t),r=i;break;case"details":it("toggle",t),r=i;break;case"input":Pf(t,i),r=ku(t,i),it("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ut({},i,{value:void 0}),it("invalid",t);break;case"textarea":If(t,i),r=zu(t,i),it("invalid",t);break;default:r=i}ju(n,r),o=r;for(a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="style"?Ug(t,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Dg(t,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ws(t,l):typeof l=="number"&&ws(t,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(bs.hasOwnProperty(a)?l!=null&&a==="onScroll"&&it("scroll",t):l!=null&&gh(t,a,l,s))}switch(n){case"input":ro(t),Nf(t,i,!1);break;case"textarea":ro(t),Df(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Yi(i.value));break;case"select":t.multiple=!!i.multiple,a=i.value,a!=null?ga(t,!!i.multiple,a,!1):i.defaultValue!=null&&ga(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=xl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zt(e),null;case 6:if(t&&e.stateNode!=null)rv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=vr(Ls.current),vr(Kn.current),po(e)){if(i=e.stateNode,n=e.memoizedProps,i[Wn]=e,(a=i.nodeValue!==n)&&(t=dn,t!==null))switch(t.tag){case 3:fo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fo(i.nodeValue,n,(t.mode&1)!==0)}a&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Wn]=e,e.stateNode=i}return zt(e),null;case 13:if(at(lt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(st&&un!==null&&e.mode&1&&!(e.flags&128))by(),Ta(),e.flags|=98560,a=!1;else if(a=po(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(ie(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(ie(317));a[Wn]=e}else Ta(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zt(e),a=!1}else In!==null&&(bd(In),In=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||lt.current&1?Mt===0&&(Mt=3):Jh())),e.updateQueue!==null&&(e.flags|=4),zt(e),null);case 4:return Ra(),pd(t,e),t===null&&Ps(e.stateNode.containerInfo),zt(e),null;case 10:return Uh(e.type._context),zt(e),null;case 17:return en(e.type)&&_l(),zt(e),null;case 19:if(at(lt),a=e.memoizedState,a===null)return zt(e),null;if(i=(e.flags&128)!==0,s=a.rendering,s===null)if(i)Ka(a,!1);else{if(Mt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Tl(t),s!==null){for(e.flags|=128,Ka(a,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)a=n,t=i,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,t=s.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return nt(lt,lt.current&1|2),e.child}t=t.sibling}a.tail!==null&&gt()>Na&&(e.flags|=128,i=!0,Ka(a,!1),e.lanes=4194304)}else{if(!i)if(t=Tl(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ka(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!st)return zt(e),null}else 2*gt()-a.renderingStartTime>Na&&n!==1073741824&&(e.flags|=128,i=!0,Ka(a,!1),e.lanes=4194304);a.isBackwards?(s.sibling=e.child,e.child=s):(n=a.last,n!==null?n.sibling=s:e.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=gt(),e.sibling=null,n=lt.current,nt(lt,i?n&1|2:n&1),e):(zt(e),null);case 22:case 23:return Zh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?cn&1073741824&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function U_(t,e){switch(Nh(e),e.tag){case 1:return en(e.type)&&_l(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ra(),at(Qt),at(Ht),Bh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return zh(e),null;case 13:if(at(lt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));Ta()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return at(lt),null;case 4:return Ra(),null;case 10:return Uh(e.type._context),null;case 22:case 23:return Zh(),null;case 24:return null;default:return null}}var yo=!1,Vt=!1,k_=typeof WeakSet=="function"?WeakSet:Set,me=null;function ha(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){pt(t,e,i)}else n.current=null}function md(t,e,n){try{n()}catch(i){pt(t,e,i)}}var bp=!1;function F_(t,e){if(Ju=gl,t=cy(),Rh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var s=0,o=-1,l=-1,u=0,d=0,f=t,p=null;t:for(;;){for(var g;f!==n||r!==0&&f.nodeType!==3||(o=s+r),f!==a||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===t)break t;if(p===n&&++u===r&&(o=s),p===a&&++d===i&&(l=s),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qu={focusedElem:t,selectionRange:n},gl=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,m=y.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?x:Pn(e.type,x),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(M){pt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return y=bp,bp=!1,y}function gs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var a=r.destroy;r.destroy=void 0,a!==void 0&&md(e,n,a)}r=r.next}while(r!==i)}}function ec(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function gd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function av(t){var e=t.alternate;e!==null&&(t.alternate=null,av(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Wn],delete e[Is],delete e[nd],delete e[x_],delete e[__])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function sv(t){return t.tag===5||t.tag===3||t.tag===4}function wp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||sv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=xl));else if(i!==4&&(t=t.child,t!==null))for(yd(t,e,n),t=t.sibling;t!==null;)yd(t,e,n),t=t.sibling}function vd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(vd(t,e,n),t=t.sibling;t!==null;)vd(t,e,n),t=t.sibling}var Ut=null,Nn=!1;function bi(t,e,n){for(n=n.child;n!==null;)ov(t,e,n),n=n.sibling}function ov(t,e,n){if(Yn&&typeof Yn.onCommitFiberUnmount=="function")try{Yn.onCommitFiberUnmount(ql,n)}catch{}switch(n.tag){case 5:Vt||ha(n,e);case 6:var i=Ut,r=Nn;Ut=null,bi(t,e,n),Ut=i,Nn=r,Ut!==null&&(Nn?(t=Ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ut.removeChild(n.stateNode));break;case 18:Ut!==null&&(Nn?(t=Ut,n=n.stateNode,t.nodeType===8?zc(t.parentNode,n):t.nodeType===1&&zc(t,n),Ts(t)):zc(Ut,n.stateNode));break;case 4:i=Ut,r=Nn,Ut=n.stateNode.containerInfo,Nn=!0,bi(t,e,n),Ut=i,Nn=r;break;case 0:case 11:case 14:case 15:if(!Vt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var a=r,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&md(n,e,s),r=r.next}while(r!==i)}bi(t,e,n);break;case 1:if(!Vt&&(ha(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){pt(n,e,o)}bi(t,e,n);break;case 21:bi(t,e,n);break;case 22:n.mode&1?(Vt=(i=Vt)||n.memoizedState!==null,bi(t,e,n),Vt=i):bi(t,e,n);break;default:bi(t,e,n)}}function Mp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new k_),e.forEach(function(i){var r=q_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Cn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var a=t,s=e,o=s;e:for(;o!==null;){switch(o.tag){case 5:Ut=o.stateNode,Nn=!1;break e;case 3:Ut=o.stateNode.containerInfo,Nn=!0;break e;case 4:Ut=o.stateNode.containerInfo,Nn=!0;break e}o=o.return}if(Ut===null)throw Error(ie(160));ov(a,s,r),Ut=null,Nn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){pt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)lv(e,t),e=e.sibling}function lv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Cn(e,t),jn(t),i&4){try{gs(3,t,t.return),ec(3,t)}catch(x){pt(t,t.return,x)}try{gs(5,t,t.return)}catch(x){pt(t,t.return,x)}}break;case 1:Cn(e,t),jn(t),i&512&&n!==null&&ha(n,n.return);break;case 5:if(Cn(e,t),jn(t),i&512&&n!==null&&ha(n,n.return),t.flags&32){var r=t.stateNode;try{ws(r,"")}catch(x){pt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var a=t.memoizedProps,s=n!==null?n.memoizedProps:a,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&Pg(r,a),Vu(o,s);var u=Vu(o,a);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d==="style"?Ug(r,f):d==="dangerouslySetInnerHTML"?Dg(r,f):d==="children"?ws(r,f):gh(r,d,f,u)}switch(o){case"input":Fu(r,a);break;case"textarea":Ng(r,a);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!a.multiple;var g=a.value;g!=null?ga(r,!!a.multiple,g,!1):p!==!!a.multiple&&(a.defaultValue!=null?ga(r,!!a.multiple,a.defaultValue,!0):ga(r,!!a.multiple,a.multiple?[]:"",!1))}r[Is]=a}catch(x){pt(t,t.return,x)}}break;case 6:if(Cn(e,t),jn(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,a=t.memoizedProps;try{r.nodeValue=a}catch(x){pt(t,t.return,x)}}break;case 3:if(Cn(e,t),jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ts(e.containerInfo)}catch(x){pt(t,t.return,x)}break;case 4:Cn(e,t),jn(t);break;case 13:Cn(e,t),jn(t),r=t.child,r.flags&8192&&(a=r.memoizedState!==null,r.stateNode.isHidden=a,!a||r.alternate!==null&&r.alternate.memoizedState!==null||(Yh=gt())),i&4&&Mp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Vt=(u=Vt)||d,Cn(e,t),Vt=u):Cn(e,t),jn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(me=t,d=t.child;d!==null;){for(f=me=d;me!==null;){switch(p=me,g=p.child,p.tag){case 0:case 11:case 14:case 15:gs(4,p,p.return);break;case 1:ha(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(x){pt(i,n,x)}}break;case 5:ha(p,p.return);break;case 22:if(p.memoizedState!==null){Cp(f);continue}}g!==null?(g.return=p,me=g):Cp(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,u?(a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Lg("display",s))}catch(x){pt(t,t.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){pt(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Cn(e,t),jn(t),i&4&&Mp(t);break;case 21:break;default:Cn(e,t),jn(t)}}function jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(sv(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ws(r,""),i.flags&=-33);var a=wp(t);vd(t,a,r);break;case 3:case 4:var s=i.stateNode.containerInfo,o=wp(t);yd(t,o,s);break;default:throw Error(ie(161))}}catch(l){pt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function O_(t,e,n){me=t,cv(t)}function cv(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,a=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||yo;if(!s){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Vt;o=yo;var u=Vt;if(yo=s,(Vt=l)&&!u)for(me=r;me!==null;)s=me,l=s.child,s.tag===22&&s.memoizedState!==null?Tp(r):l!==null?(l.return=s,me=l):Tp(r);for(;a!==null;)me=a,cv(a),a=a.sibling;me=r,yo=o,Vt=u}Ep(t)}else r.subtreeFlags&8772&&a!==null?(a.return=r,me=a):Ep(t)}}function Ep(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vt||ec(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Vt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Pn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&cp(e,a,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}cp(e,s,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Ts(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Vt||e.flags&512&&gd(e)}catch(p){pt(e,e.return,p)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function Cp(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function Tp(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ec(4,e)}catch(l){pt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){pt(e,r,l)}}var a=e.return;try{gd(e)}catch(l){pt(e,a,l)}break;case 5:var s=e.return;try{gd(e)}catch(l){pt(e,s,l)}}}catch(l){pt(e,e.return,l)}if(e===t){me=null;break}var o=e.sibling;if(o!==null){o.return=e.return,me=o;break}me=e.return}}var z_=Math.ceil,Pl=_i.ReactCurrentDispatcher,Xh=_i.ReactCurrentOwner,bn=_i.ReactCurrentBatchConfig,We=0,It=null,St=null,kt=0,cn=0,fa=Qi(0),Mt=0,Os=null,Tr=0,tc=0,$h=0,ys=null,Kt=null,Yh=0,Na=1/0,ai=null,Nl=!1,xd=null,Hi=null,vo=!1,ki=null,Il=0,vs=0,_d=null,tl=-1,nl=0;function qt(){return We&6?gt():tl!==-1?tl:tl=gt()}function Gi(t){return t.mode&1?We&2&&kt!==0?kt&-kt:b_.transition!==null?(nl===0&&(nl=Xg()),nl):(t=et,t!==0||(t=window.event,t=t===void 0?16:ey(t.type)),t):1}function On(t,e,n,i){if(50<vs)throw vs=0,_d=null,Error(ie(185));Hs(t,n,i),(!(We&2)||t!==It)&&(t===It&&(!(We&2)&&(tc|=n),Mt===4&&Di(t,kt)),tn(t,i),n===1&&We===0&&!(e.mode&1)&&(Na=gt()+500,Zl&&er()))}function tn(t,e){var n=t.callbackNode;b0(t,e);var i=ml(t,t===It?kt:0);if(i===0)n!==null&&kf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&kf(n),e===1)t.tag===0?S_(Ap.bind(null,t)):xy(Ap.bind(null,t)),y_(function(){!(We&6)&&er()}),n=null;else{switch($g(i)){case 1:n=Sh;break;case 4:n=Wg;break;case 16:n=pl;break;case 536870912:n=qg;break;default:n=pl}n=yv(n,uv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function uv(t,e){if(tl=-1,nl=0,We&6)throw Error(ie(327));var n=t.callbackNode;if(Sa()&&t.callbackNode!==n)return null;var i=ml(t,t===It?kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Dl(t,i);else{e=i;var r=We;We|=2;var a=hv();(It!==t||kt!==e)&&(ai=null,Na=gt()+500,Sr(t,e));do try{V_();break}catch(o){dv(t,o)}while(!0);Lh(),Pl.current=a,We=r,St!==null?e=0:(It=null,kt=0,e=Mt)}if(e!==0){if(e===2&&(r=Xu(t),r!==0&&(i=r,e=Sd(t,r))),e===1)throw n=Os,Sr(t,0),Di(t,i),tn(t,gt()),n;if(e===6)Di(t,i);else{if(r=t.current.alternate,!(i&30)&&!B_(r)&&(e=Dl(t,i),e===2&&(a=Xu(t),a!==0&&(i=a,e=Sd(t,a))),e===1))throw n=Os,Sr(t,0),Di(t,i),tn(t,gt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:dr(t,Kt,ai);break;case 3:if(Di(t,i),(i&130023424)===i&&(e=Yh+500-gt(),10<e)){if(ml(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=td(dr.bind(null,t,Kt,ai),e);break}dr(t,Kt,ai);break;case 4:if(Di(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-Fn(i);a=1<<s,s=e[s],s>r&&(r=s),i&=~a}if(i=r,i=gt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*z_(i/1960))-i,10<i){t.timeoutHandle=td(dr.bind(null,t,Kt,ai),i);break}dr(t,Kt,ai);break;case 5:dr(t,Kt,ai);break;default:throw Error(ie(329))}}}return tn(t,gt()),t.callbackNode===n?uv.bind(null,t):null}function Sd(t,e){var n=ys;return t.current.memoizedState.isDehydrated&&(Sr(t,e).flags|=256),t=Dl(t,e),t!==2&&(e=Kt,Kt=n,e!==null&&bd(e)),t}function bd(t){Kt===null?Kt=t:Kt.push.apply(Kt,t)}function B_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],a=r.getSnapshot;r=r.value;try{if(!zn(a(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Di(t,e){for(e&=~$h,e&=~tc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Fn(e),i=1<<n;t[n]=-1,e&=~i}}function Ap(t){if(We&6)throw Error(ie(327));Sa();var e=ml(t,0);if(!(e&1))return tn(t,gt()),null;var n=Dl(t,e);if(t.tag!==0&&n===2){var i=Xu(t);i!==0&&(e=i,n=Sd(t,i))}if(n===1)throw n=Os,Sr(t,0),Di(t,e),tn(t,gt()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,dr(t,Kt,ai),tn(t,gt()),null}function Kh(t,e){var n=We;We|=1;try{return t(e)}finally{We=n,We===0&&(Na=gt()+500,Zl&&er())}}function Ar(t){ki!==null&&ki.tag===0&&!(We&6)&&Sa();var e=We;We|=1;var n=bn.transition,i=et;try{if(bn.transition=null,et=1,t)return t()}finally{et=i,bn.transition=n,We=e,!(We&6)&&er()}}function Zh(){cn=fa.current,at(fa)}function Sr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,g_(n)),St!==null)for(n=St.return;n!==null;){var i=n;switch(Nh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&_l();break;case 3:Ra(),at(Qt),at(Ht),Bh();break;case 5:zh(i);break;case 4:Ra();break;case 13:at(lt);break;case 19:at(lt);break;case 10:Uh(i.type._context);break;case 22:case 23:Zh()}n=n.return}if(It=t,St=t=Wi(t.current,null),kt=cn=e,Mt=0,Os=null,$h=tc=Tr=0,Kt=ys=null,yr!==null){for(e=0;e<yr.length;e++)if(n=yr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,a=n.pending;if(a!==null){var s=a.next;a.next=r,i.next=s}n.pending=i}yr=null}return t}function dv(t,e){do{var n=St;try{if(Lh(),Jo.current=Rl,Al){for(var i=ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Al=!1}if(Cr=0,Rt=wt=ct=null,ms=!1,Us=0,Xh.current=null,n===null||n.return===null){Mt=1,Os=e,St=null;break}e:{var a=t,s=n.return,o=n,l=e;if(e=kt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=o,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=mp(s);if(g!==null){g.flags&=-257,gp(g,s,o,a,e),g.mode&1&&pp(a,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var x=new Set;x.add(l),e.updateQueue=x}else y.add(l);break e}else{if(!(e&1)){pp(a,u,e),Jh();break e}l=Error(ie(426))}}else if(st&&o.mode&1){var m=mp(s);if(m!==null){!(m.flags&65536)&&(m.flags|=256),gp(m,s,o,a,e),Ih(Pa(l,o));break e}}a=l=Pa(l,o),Mt!==4&&(Mt=2),ys===null?ys=[a]:ys.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var h=$y(a,l,e);lp(a,h);break e;case 1:o=l;var v=a.type,_=a.stateNode;if(!(a.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Hi===null||!Hi.has(_)))){a.flags|=65536,e&=-e,a.lanes|=e;var M=Yy(a,o,e);lp(a,M);break e}}a=a.return}while(a!==null)}pv(n)}catch(P){e=P,St===n&&n!==null&&(St=n=n.return);continue}break}while(!0)}function hv(){var t=Pl.current;return Pl.current=Rl,t===null?Rl:t}function Jh(){(Mt===0||Mt===3||Mt===2)&&(Mt=4),It===null||!(Tr&268435455)&&!(tc&268435455)||Di(It,kt)}function Dl(t,e){var n=We;We|=2;var i=hv();(It!==t||kt!==e)&&(ai=null,Sr(t,e));do try{j_();break}catch(r){dv(t,r)}while(!0);if(Lh(),We=n,Pl.current=i,St!==null)throw Error(ie(261));return It=null,kt=0,Mt}function j_(){for(;St!==null;)fv(St)}function V_(){for(;St!==null&&!f0();)fv(St)}function fv(t){var e=gv(t.alternate,t,cn);t.memoizedProps=t.pendingProps,e===null?pv(t):St=e,Xh.current=null}function pv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=U_(n,e),n!==null){n.flags&=32767,St=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Mt=6,St=null;return}}else if(n=L_(n,e,cn),n!==null){St=n;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);Mt===0&&(Mt=5)}function dr(t,e,n){var i=et,r=bn.transition;try{bn.transition=null,et=1,H_(t,e,n,i)}finally{bn.transition=r,et=i}return null}function H_(t,e,n,i){do Sa();while(ki!==null);if(We&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var a=n.lanes|n.childLanes;if(w0(t,a),t===It&&(St=It=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vo||(vo=!0,yv(pl,function(){return Sa(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=bn.transition,bn.transition=null;var s=et;et=1;var o=We;We|=4,Xh.current=null,F_(t,n),lv(n,t),c_(Qu),gl=!!Ju,Qu=Ju=null,t.current=n,O_(n),p0(),We=o,et=s,bn.transition=a}else t.current=n;if(vo&&(vo=!1,ki=t,Il=r),a=t.pendingLanes,a===0&&(Hi=null),y0(n.stateNode),tn(t,gt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Nl)throw Nl=!1,t=xd,xd=null,t;return Il&1&&t.tag!==0&&Sa(),a=t.pendingLanes,a&1?t===_d?vs++:(vs=0,_d=t):vs=0,er(),null}function Sa(){if(ki!==null){var t=$g(Il),e=bn.transition,n=et;try{if(bn.transition=null,et=16>t?16:t,ki===null)var i=!1;else{if(t=ki,ki=null,Il=0,We&6)throw Error(ie(331));var r=We;for(We|=4,me=t.current;me!==null;){var a=me,s=a.child;if(me.flags&16){var o=a.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(me=u;me!==null;){var d=me;switch(d.tag){case 0:case 11:case 15:gs(8,d,a)}var f=d.child;if(f!==null)f.return=d,me=f;else for(;me!==null;){d=me;var p=d.sibling,g=d.return;if(av(d),d===u){me=null;break}if(p!==null){p.return=g,me=p;break}me=g}}}var y=a.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}me=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,me=s;else e:for(;me!==null;){if(a=me,a.flags&2048)switch(a.tag){case 0:case 11:case 15:gs(9,a,a.return)}var h=a.sibling;if(h!==null){h.return=a.return,me=h;break e}me=a.return}}var v=t.current;for(me=v;me!==null;){s=me;var _=s.child;if(s.subtreeFlags&2064&&_!==null)_.return=s,me=_;else e:for(s=v;me!==null;){if(o=me,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:ec(9,o)}}catch(P){pt(o,o.return,P)}if(o===s){me=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,me=M;break e}me=o.return}}if(We=r,er(),Yn&&typeof Yn.onPostCommitFiberRoot=="function")try{Yn.onPostCommitFiberRoot(ql,t)}catch{}i=!0}return i}finally{et=n,bn.transition=e}}return!1}function Rp(t,e,n){e=Pa(n,e),e=$y(t,e,1),t=Vi(t,e,1),e=qt(),t!==null&&(Hs(t,1,e),tn(t,e))}function pt(t,e,n){if(t.tag===3)Rp(t,t,n);else for(;e!==null;){if(e.tag===3){Rp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Hi===null||!Hi.has(i))){t=Pa(n,t),t=Yy(e,t,1),e=Vi(e,t,1),t=qt(),e!==null&&(Hs(e,1,t),tn(e,t));break}}e=e.return}}function G_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=qt(),t.pingedLanes|=t.suspendedLanes&n,It===t&&(kt&n)===n&&(Mt===4||Mt===3&&(kt&130023424)===kt&&500>gt()-Yh?Sr(t,0):$h|=n),tn(t,e)}function mv(t,e){e===0&&(t.mode&1?(e=oo,oo<<=1,!(oo&130023424)&&(oo=4194304)):e=1);var n=qt();t=mi(t,e),t!==null&&(Hs(t,e,n),tn(t,n))}function W_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),mv(t,n)}function q_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),mv(t,n)}var gv;gv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Qt.current)Jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Jt=!1,D_(t,e,n);Jt=!!(t.flags&131072)}else Jt=!1,st&&e.flags&1048576&&_y(e,wl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;el(t,e),t=e.pendingProps;var r=Ca(e,Ht.current);_a(e,n),r=Vh(null,e,i,t,r,n);var a=Hh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,en(i)?(a=!0,Sl(e)):a=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Fh(e),r.updater=Ql,e.stateNode=r,r._reactInternals=e,ld(e,i,t,n),e=dd(null,e,i,!0,a,n)):(e.tag=0,st&&a&&Ph(e),Wt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(el(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=$_(i),t=Pn(i,t),r){case 0:e=ud(null,e,i,t,n);break e;case 1:e=xp(null,e,i,t,n);break e;case 11:e=yp(null,e,i,t,n);break e;case 14:e=vp(null,e,i,Pn(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),ud(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),xp(t,e,i,r,n);case 3:e:{if(Qy(e),t===null)throw Error(ie(387));i=e.pendingProps,a=e.memoizedState,r=a.element,Cy(t,e),Cl(e,i,null,n);var s=e.memoizedState;if(i=s.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){r=Pa(Error(ie(423)),e),e=_p(t,e,i,n,r);break e}else if(i!==r){r=Pa(Error(ie(424)),e),e=_p(t,e,i,n,r);break e}else for(un=ji(e.stateNode.containerInfo.firstChild),dn=e,st=!0,In=null,n=My(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ta(),i===r){e=gi(t,e,n);break e}Wt(t,e,i,n)}e=e.child}return e;case 5:return Ty(e),t===null&&ad(e),i=e.type,r=e.pendingProps,a=t!==null?t.memoizedProps:null,s=r.children,ed(i,r)?s=null:a!==null&&ed(i,a)&&(e.flags|=32),Jy(t,e),Wt(t,e,s,n),e.child;case 6:return t===null&&ad(e),null;case 13:return ev(t,e,n);case 4:return Oh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Aa(e,null,i,n):Wt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),yp(t,e,i,r,n);case 7:return Wt(t,e,e.pendingProps,n),e.child;case 8:return Wt(t,e,e.pendingProps.children,n),e.child;case 12:return Wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,a=e.memoizedProps,s=r.value,nt(Ml,i._currentValue),i._currentValue=s,a!==null)if(zn(a.value,s)){if(a.children===r.children&&!Qt.current){e=gi(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){s=a.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(a.tag===1){l=hi(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),sd(a.return,n,e),o.lanes|=n;break}l=l.next}}else if(a.tag===10)s=a.type===e.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(ie(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),sd(s,n,e),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}Wt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,_a(e,n),r=wn(r),i=i(r),e.flags|=1,Wt(t,e,i,n),e.child;case 14:return i=e.type,r=Pn(i,e.pendingProps),r=Pn(i.type,r),vp(t,e,i,r,n);case 15:return Ky(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),el(t,e),e.tag=1,en(i)?(t=!0,Sl(e)):t=!1,_a(e,n),Xy(e,i,r),ld(e,i,r,n),dd(null,e,i,!0,t,n);case 19:return tv(t,e,n);case 22:return Zy(t,e,n)}throw Error(ie(156,e.tag))};function yv(t,e){return Gg(t,e)}function X_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(t,e,n,i){return new X_(t,e,n,i)}function Qh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $_(t){if(typeof t=="function")return Qh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===vh)return 11;if(t===xh)return 14}return 2}function Wi(t,e){var n=t.alternate;return n===null?(n=_n(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function il(t,e,n,i,r,a){var s=2;if(i=t,typeof t=="function")Qh(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case ia:return br(n.children,r,a,e);case yh:s=8,r|=8;break;case Iu:return t=_n(12,n,e,r|2),t.elementType=Iu,t.lanes=a,t;case Du:return t=_n(13,n,e,r),t.elementType=Du,t.lanes=a,t;case Lu:return t=_n(19,n,e,r),t.elementType=Lu,t.lanes=a,t;case Tg:return nc(n,r,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Eg:s=10;break e;case Cg:s=9;break e;case vh:s=11;break e;case xh:s=14;break e;case Pi:s=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=_n(s,n,e,r),e.elementType=t,e.type=i,e.lanes=a,e}function br(t,e,n,i){return t=_n(7,t,i,e),t.lanes=n,t}function nc(t,e,n,i){return t=_n(22,t,i,e),t.elementType=Tg,t.lanes=n,t.stateNode={isHidden:!1},t}function Xc(t,e,n){return t=_n(6,t,null,e),t.lanes=n,t}function $c(t,e,n){return e=_n(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Y_(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ac(0),this.expirationTimes=Ac(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ac(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ef(t,e,n,i,r,a,s,o,l){return t=new Y_(t,e,n,o,l),e===1?(e=1,a===!0&&(e|=8)):e=0,a=_n(3,null,null,e),t.current=a,a.stateNode=t,a.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fh(a),t}function K_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:na,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function vv(t){if(!t)return Ki;t=t._reactInternals;e:{if(Ir(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(en(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(en(n))return vy(t,n,e)}return e}function xv(t,e,n,i,r,a,s,o,l){return t=ef(n,i,!0,t,r,a,s,o,l),t.context=vv(null),n=t.current,i=qt(),r=Gi(n),a=hi(i,r),a.callback=e??null,Vi(n,a,r),t.current.lanes=r,Hs(t,r,i),tn(t,i),t}function ic(t,e,n,i){var r=e.current,a=qt(),s=Gi(r);return n=vv(n),e.context===null?e.context=n:e.pendingContext=n,e=hi(a,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Vi(r,e,s),t!==null&&(On(t,r,s,a),Zo(t,r,s)),s}function Ll(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Pp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function tf(t,e){Pp(t,e),(t=t.alternate)&&Pp(t,e)}function Z_(){return null}var _v=typeof reportError=="function"?reportError:function(t){console.error(t)};function nf(t){this._internalRoot=t}rc.prototype.render=nf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));ic(t,e,null,null)};rc.prototype.unmount=nf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ar(function(){ic(null,t,null,null)}),e[pi]=null}};function rc(t){this._internalRoot=t}rc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Zg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ii.length&&e!==0&&e<Ii[n].priority;n++);Ii.splice(n,0,t),n===0&&Qg(t)}};function rf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ac(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Np(){}function J_(t,e,n,i,r){if(r){if(typeof i=="function"){var a=i;i=function(){var u=Ll(s);a.call(u)}}var s=xv(e,i,t,0,null,!1,!1,"",Np);return t._reactRootContainer=s,t[pi]=s.current,Ps(t.nodeType===8?t.parentNode:t),Ar(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=Ll(l);o.call(u)}}var l=ef(t,0,!1,null,null,!1,!1,"",Np);return t._reactRootContainer=l,t[pi]=l.current,Ps(t.nodeType===8?t.parentNode:t),Ar(function(){ic(e,l,n,i)}),l}function sc(t,e,n,i,r){var a=n._reactRootContainer;if(a){var s=a;if(typeof r=="function"){var o=r;r=function(){var l=Ll(s);o.call(l)}}ic(e,s,t,r)}else s=J_(n,e,t,r,i);return Ll(s)}Yg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=os(e.pendingLanes);n!==0&&(bh(e,n|1),tn(e,gt()),!(We&6)&&(Na=gt()+500,er()))}break;case 13:Ar(function(){var i=mi(t,1);if(i!==null){var r=qt();On(i,t,1,r)}}),tf(t,1)}};wh=function(t){if(t.tag===13){var e=mi(t,134217728);if(e!==null){var n=qt();On(e,t,134217728,n)}tf(t,134217728)}};Kg=function(t){if(t.tag===13){var e=Gi(t),n=mi(t,e);if(n!==null){var i=qt();On(n,t,e,i)}tf(t,e)}};Zg=function(){return et};Jg=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};Gu=function(t,e,n){switch(e){case"input":if(Fu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Kl(i);if(!r)throw Error(ie(90));Rg(i),Fu(i,r)}}}break;case"textarea":Ng(t,n);break;case"select":e=n.value,e!=null&&ga(t,!!n.multiple,e,!1)}};Og=Kh;zg=Ar;var Q_={usingClientEntryPoint:!1,Events:[Ws,oa,Kl,kg,Fg,Kh]},Za={findFiberByHostInstance:gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},eS={bundleType:Za.bundleType,version:Za.version,rendererPackageName:Za.rendererPackageName,rendererConfig:Za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_i.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Vg(t),t===null?null:t.stateNode},findFiberByHostInstance:Za.findFiberByHostInstance||Z_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xo.isDisabled&&xo.supportsFiber)try{ql=xo.inject(eS),Yn=xo}catch{}}pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q_;pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rf(e))throw Error(ie(200));return K_(t,e,null,n)};pn.createRoot=function(t,e){if(!rf(t))throw Error(ie(299));var n=!1,i="",r=_v;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ef(t,1,!1,null,null,n,!1,i,r),t[pi]=e.current,Ps(t.nodeType===8?t.parentNode:t),new nf(e)};pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=Vg(e),t=t===null?null:t.stateNode,t};pn.flushSync=function(t){return Ar(t)};pn.hydrate=function(t,e,n){if(!ac(e))throw Error(ie(200));return sc(null,t,e,!0,n)};pn.hydrateRoot=function(t,e,n){if(!rf(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,a="",s=_v;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=xv(e,null,t,1,n??null,r,!1,a,s),t[pi]=e.current,Ps(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new rc(e)};pn.render=function(t,e,n){if(!ac(e))throw Error(ie(200));return sc(null,t,e,!1,n)};pn.unmountComponentAtNode=function(t){if(!ac(t))throw Error(ie(40));return t._reactRootContainer?(Ar(function(){sc(null,null,t,!1,function(){t._reactRootContainer=null,t[pi]=null})}),!0):!1};pn.unstable_batchedUpdates=Kh;pn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ac(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return sc(t,e,n,!1,i)};pn.version="18.3.1-next-f1338f8080-20240426";function Sv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sv)}catch(t){console.error(t)}}Sv(),Sg.exports=pn;var tS=Sg.exports,Ip=tS;Pu.createRoot=Ip.createRoot,Pu.hydrateRoot=Ip.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zs(){return zs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},zs.apply(this,arguments)}var Fi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Fi||(Fi={}));const Dp="popstate";function nS(t){t===void 0&&(t={});function e(i,r){let{pathname:a,search:s,hash:o}=i.location;return wd("",{pathname:a,search:s,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:Ul(r)}return rS(e,n,null,t)}function mt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function af(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function iS(){return Math.random().toString(36).substr(2,8)}function Lp(t,e){return{usr:t.state,key:t.key,idx:e}}function wd(t,e,n,i){return n===void 0&&(n=null),zs({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ja(e):e,{state:n,key:e&&e.key||i||iS()})}function Ul(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function ja(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function rS(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:a=!1}=i,s=r.history,o=Fi.Pop,l=null,u=d();u==null&&(u=0,s.replaceState(zs({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function f(){o=Fi.Pop;let m=d(),h=m==null?null:m-u;u=m,l&&l({action:o,location:x.location,delta:h})}function p(m,h){o=Fi.Push;let v=wd(x.location,m,h);u=d()+1;let _=Lp(v,u),M=x.createHref(v);try{s.pushState(_,"",M)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;r.location.assign(M)}a&&l&&l({action:o,location:x.location,delta:1})}function g(m,h){o=Fi.Replace;let v=wd(x.location,m,h);u=d();let _=Lp(v,u),M=x.createHref(v);s.replaceState(_,"",M),a&&l&&l({action:o,location:x.location,delta:0})}function y(m){let h=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof m=="string"?m:Ul(m);return v=v.replace(/ $/,"%20"),mt(h,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,h)}let x={get action(){return o},get location(){return t(r,s)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Dp,f),l=m,()=>{r.removeEventListener(Dp,f),l=null}},createHref(m){return e(r,m)},createURL:y,encodeLocation(m){let h=y(m);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:g,go(m){return s.go(m)}};return x}var Up;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Up||(Up={}));function aS(t,e,n){return n===void 0&&(n="/"),sS(t,e,n)}function sS(t,e,n,i){let r=typeof e=="string"?ja(e):e,a=Ia(r.pathname||"/",n);if(a==null)return null;let s=bv(t);oS(s);let o=null;for(let l=0;o==null&&l<s.length;++l){let u=vS(a);o=gS(s[l],u)}return o}function bv(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(a,s,o)=>{let l={relativePath:o===void 0?a.path||"":o,caseSensitive:a.caseSensitive===!0,childrenIndex:s,route:a};l.relativePath.startsWith("/")&&(mt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=qi([i,l.relativePath]),d=n.concat(l);a.children&&a.children.length>0&&(mt(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),bv(a.children,e,d,u)),!(a.path==null&&!a.index)&&e.push({path:u,score:pS(u,a.index),routesMeta:d})};return t.forEach((a,s)=>{var o;if(a.path===""||!((o=a.path)!=null&&o.includes("?")))r(a,s);else for(let l of wv(a.path))r(a,s,l)}),e}function wv(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),a=n.replace(/\?$/,"");if(i.length===0)return r?[a,""]:[a];let s=wv(i.join("/")),o=[];return o.push(...s.map(l=>l===""?a:[a,l].join("/"))),r&&o.push(...s),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function oS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:mS(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const lS=/^:[\w-]+$/,cS=3,uS=2,dS=1,hS=10,fS=-2,kp=t=>t==="*";function pS(t,e){let n=t.split("/"),i=n.length;return n.some(kp)&&(i+=fS),e&&(i+=uS),n.filter(r=>!kp(r)).reduce((r,a)=>r+(lS.test(a)?cS:a===""?dS:hS),i)}function mS(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function gS(t,e,n){let{routesMeta:i}=t,r={},a="/",s=[];for(let o=0;o<i.length;++o){let l=i[o],u=o===i.length-1,d=a==="/"?e:e.slice(a.length)||"/",f=Md({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),p=l.route;if(!f)return null;Object.assign(r,f.params),s.push({params:r,pathname:qi([a,f.pathname]),pathnameBase:wS(qi([a,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(a=qi([a,f.pathnameBase]))}return s}function Md(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=yS(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let a=r[0],s=a.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((u,d,f)=>{let{paramName:p,isOptional:g}=d;if(p==="*"){let x=o[f]||"";s=a.slice(0,a.length-x.length).replace(/(.)\/+$/,"$1")}const y=o[f];return g&&!y?u[p]=void 0:u[p]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:s,pattern:t}}function yS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),af(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function vS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return af(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ia(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const xS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_S=t=>xS.test(t);function SS(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?ja(t):t,a;if(n)if(_S(n))a=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),af(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?a=Fp(n.substring(1),"/"):a=Fp(n,e)}else a=e;return{pathname:a,search:MS(i),hash:ES(r)}}function Fp(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Yc(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function bS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Mv(t,e){let n=bS(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Ev(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=ja(t):(r=zs({},t),mt(!r.pathname||!r.pathname.includes("?"),Yc("?","pathname","search",r)),mt(!r.pathname||!r.pathname.includes("#"),Yc("#","pathname","hash",r)),mt(!r.search||!r.search.includes("#"),Yc("#","search","hash",r)));let a=t===""||r.pathname==="",s=a?"/":r.pathname,o;if(s==null)o=n;else{let f=e.length-1;if(!i&&s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),f-=1;r.pathname=p.join("/")}o=f>=0?e[f]:"/"}let l=SS(r,o),u=s&&s!=="/"&&s.endsWith("/"),d=(a||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const qi=t=>t.join("/").replace(/\/\/+/g,"/"),wS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),MS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ES=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function CS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Cv=["post","put","patch","delete"];new Set(Cv);const TS=["get",...Cv];new Set(TS);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bs(){return Bs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Bs.apply(this,arguments)}const oc=U.createContext(null),Tv=U.createContext(null),tr=U.createContext(null),lc=U.createContext(null),Dr=U.createContext({outlet:null,matches:[],isDataRoute:!1}),Av=U.createContext(null);function AS(t,e){let{relative:n}=e===void 0?{}:e;Xs()||mt(!1);let{basename:i,navigator:r}=U.useContext(tr),{hash:a,pathname:s,search:o}=cc(t,{relative:n}),l=s;return i!=="/"&&(l=s==="/"?i:qi([i,s])),r.createHref({pathname:l,search:o,hash:a})}function Xs(){return U.useContext(lc)!=null}function Lr(){return Xs()||mt(!1),U.useContext(lc).location}function Rv(t){U.useContext(tr).static||U.useLayoutEffect(t)}function Pv(){let{isDataRoute:t}=U.useContext(Dr);return t?jS():RS()}function RS(){Xs()||mt(!1);let t=U.useContext(oc),{basename:e,future:n,navigator:i}=U.useContext(tr),{matches:r}=U.useContext(Dr),{pathname:a}=Lr(),s=JSON.stringify(Mv(r,n.v7_relativeSplatPath)),o=U.useRef(!1);return Rv(()=>{o.current=!0}),U.useCallback(function(u,d){if(d===void 0&&(d={}),!o.current)return;if(typeof u=="number"){i.go(u);return}let f=Ev(u,JSON.parse(s),a,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:qi([e,f.pathname])),(d.replace?i.replace:i.push)(f,d.state,d)},[e,i,s,a,t])}function cc(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=U.useContext(tr),{matches:r}=U.useContext(Dr),{pathname:a}=Lr(),s=JSON.stringify(Mv(r,i.v7_relativeSplatPath));return U.useMemo(()=>Ev(t,JSON.parse(s),a,n==="path"),[t,s,a,n])}function PS(t,e){return NS(t,e)}function NS(t,e,n,i){Xs()||mt(!1);let{navigator:r}=U.useContext(tr),{matches:a}=U.useContext(Dr),s=a[a.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=Lr(),d;if(e){var f;let m=typeof e=="string"?ja(e):e;l==="/"||(f=m.pathname)!=null&&f.startsWith(l)||mt(!1),d=m}else d=u;let p=d.pathname||"/",g=p;if(l!=="/"){let m=l.replace(/^\//,"").split("/");g="/"+p.replace(/^\//,"").split("/").slice(m.length).join("/")}let y=aS(t,{pathname:g}),x=kS(y&&y.map(m=>Object.assign({},m,{params:Object.assign({},o,m.params),pathname:qi([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:qi([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),a,n,i);return e&&x?U.createElement(lc.Provider,{value:{location:Bs({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Fi.Pop}},x):x}function IS(){let t=BS(),e=CS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},e),n?U.createElement("pre",{style:r},n):null,null)}const DS=U.createElement(IS,null);class LS extends U.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?U.createElement(Dr.Provider,{value:this.props.routeContext},U.createElement(Av.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function US(t){let{routeContext:e,match:n,children:i}=t,r=U.useContext(oc);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),U.createElement(Dr.Provider,{value:e},i)}function kS(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var a;if(!n)return null;if(n.errors)t=n.matches;else if((a=i)!=null&&a.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let d=s.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);d>=0||mt(!1),s=s.slice(0,Math.min(s.length,d+1))}let l=!1,u=-1;if(n&&i&&i.v7_partialHydration)for(let d=0;d<s.length;d++){let f=s[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:p,errors:g}=n,y=f.route.loader&&p[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||y){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((d,f,p)=>{let g,y=!1,x=null,m=null;n&&(g=o&&f.route.id?o[f.route.id]:void 0,x=f.route.errorElement||DS,l&&(u<0&&p===0?(VS("route-fallback"),y=!0,m=null):u===p&&(y=!0,m=f.route.hydrateFallbackElement||null)));let h=e.concat(s.slice(0,p+1)),v=()=>{let _;return g?_=x:y?_=m:f.route.Component?_=U.createElement(f.route.Component,null):f.route.element?_=f.route.element:_=d,U.createElement(US,{match:f,routeContext:{outlet:d,matches:h,isDataRoute:n!=null},children:_})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?U.createElement(LS,{location:n.location,revalidation:n.revalidation,component:x,error:g,children:v(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):v()},null)}var Nv=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Nv||{}),Iv=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Iv||{});function FS(t){let e=U.useContext(oc);return e||mt(!1),e}function OS(t){let e=U.useContext(Tv);return e||mt(!1),e}function zS(t){let e=U.useContext(Dr);return e||mt(!1),e}function Dv(t){let e=zS(),n=e.matches[e.matches.length-1];return n.route.id||mt(!1),n.route.id}function BS(){var t;let e=U.useContext(Av),n=OS(),i=Dv();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function jS(){let{router:t}=FS(Nv.UseNavigateStable),e=Dv(Iv.UseNavigateStable),n=U.useRef(!1);return Rv(()=>{n.current=!0}),U.useCallback(function(r,a){a===void 0&&(a={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Bs({fromRouteId:e},a)))},[t,e])}const Op={};function VS(t,e,n){Op[t]||(Op[t]=!0)}function HS(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function bt(t){mt(!1)}function GS(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Fi.Pop,navigator:a,static:s=!1,future:o}=t;Xs()&&mt(!1);let l=e.replace(/^\/*/,"/"),u=U.useMemo(()=>({basename:l,navigator:a,static:s,future:Bs({v7_relativeSplatPath:!1},o)}),[l,o,a,s]);typeof i=="string"&&(i=ja(i));let{pathname:d="/",search:f="",hash:p="",state:g=null,key:y="default"}=i,x=U.useMemo(()=>{let m=Ia(d,l);return m==null?null:{location:{pathname:m,search:f,hash:p,state:g,key:y},navigationType:r}},[l,d,f,p,g,y,r]);return x==null?null:U.createElement(tr.Provider,{value:u},U.createElement(lc.Provider,{children:n,value:x}))}function WS(t){let{children:e,location:n}=t;return PS(Ed(e),n)}new Promise(()=>{});function Ed(t,e){e===void 0&&(e=[]);let n=[];return U.Children.forEach(t,(i,r)=>{if(!U.isValidElement(i))return;let a=[...e,r];if(i.type===U.Fragment){n.push.apply(n,Ed(i.props.children,a));return}i.type!==bt&&mt(!1),!i.props.index||!i.props.children||mt(!1);let s={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(s.children=Ed(i.props.children,a)),n.push(s)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kl(){return kl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},kl.apply(this,arguments)}function Lv(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,a;for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function qS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function XS(t,e){return t.button===0&&(!e||e==="_self")&&!qS(t)}const $S=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],YS=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],KS="6";try{window.__reactRouterVersion=KS}catch{}const ZS=U.createContext({isTransitioning:!1}),JS="startTransition",zp=Gx[JS];function QS(t){let{basename:e,children:n,future:i,window:r}=t,a=U.useRef();a.current==null&&(a.current=nS({window:r,v5Compat:!0}));let s=a.current,[o,l]=U.useState({action:s.action,location:s.location}),{v7_startTransition:u}=i||{},d=U.useCallback(f=>{u&&zp?zp(()=>l(f)):l(f)},[l,u]);return U.useLayoutEffect(()=>s.listen(d),[s,d]),U.useEffect(()=>HS(i),[i]),U.createElement(GS,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s,future:i})}const eb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",tb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pt=U.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:a,replace:s,state:o,target:l,to:u,preventScrollReset:d,viewTransition:f}=e,p=Lv(e,$S),{basename:g}=U.useContext(tr),y,x=!1;if(typeof u=="string"&&tb.test(u)&&(y=u,eb))try{let _=new URL(window.location.href),M=u.startsWith("//")?new URL(_.protocol+u):new URL(u),P=Ia(M.pathname,g);M.origin===_.origin&&P!=null?u=P+M.search+M.hash:x=!0}catch{}let m=AS(u,{relative:r}),h=rb(u,{replace:s,state:o,target:l,preventScrollReset:d,relative:r,viewTransition:f});function v(_){i&&i(_),_.defaultPrevented||h(_)}return U.createElement("a",kl({},p,{href:y||m,onClick:x||a?i:v,ref:n,target:l}))}),nb=U.forwardRef(function(e,n){let{"aria-current":i="page",caseSensitive:r=!1,className:a="",end:s=!1,style:o,to:l,viewTransition:u,children:d}=e,f=Lv(e,YS),p=cc(l,{relative:f.relative}),g=Lr(),y=U.useContext(Tv),{navigator:x,basename:m}=U.useContext(tr),h=y!=null&&ab(p)&&u===!0,v=x.encodeLocation?x.encodeLocation(p).pathname:p.pathname,_=g.pathname,M=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;r||(_=_.toLowerCase(),M=M?M.toLowerCase():null,v=v.toLowerCase()),M&&m&&(M=Ia(M,m)||M);const P=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let A=_===v||!s&&_.startsWith(v)&&_.charAt(P)==="/",E=M!=null&&(M===v||!s&&M.startsWith(v)&&M.charAt(v.length)==="/"),w={isActive:A,isPending:E,isTransitioning:h},S=A?i:void 0,b;typeof a=="function"?b=a(w):b=[a,A?"active":null,E?"pending":null,h?"transitioning":null].filter(Boolean).join(" ");let T=typeof o=="function"?o(w):o;return U.createElement(Pt,kl({},f,{"aria-current":S,className:b,ref:n,style:T,to:l,viewTransition:u}),typeof d=="function"?d(w):d)});var Cd;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Cd||(Cd={}));var Bp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Bp||(Bp={}));function ib(t){let e=U.useContext(oc);return e||mt(!1),e}function rb(t,e){let{target:n,replace:i,state:r,preventScrollReset:a,relative:s,viewTransition:o}=e===void 0?{}:e,l=Pv(),u=Lr(),d=cc(t,{relative:s});return U.useCallback(f=>{if(XS(f,n)){f.preventDefault();let p=i!==void 0?i:Ul(u)===Ul(d);l(t,{replace:p,state:r,preventScrollReset:a,relative:s,viewTransition:o})}},[u,l,d,i,r,n,t,a,s,o])}function ab(t,e){e===void 0&&(e={});let n=U.useContext(ZS);n==null&&mt(!1);let{basename:i}=ib(Cd.useViewTransitionState),r=cc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let a=Ia(n.currentLocation.pathname,i)||n.currentLocation.pathname,s=Ia(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Md(r.pathname,s)!=null||Md(r.pathname,a)!=null}const jp=[{to:"/",label:"Home"},{to:"/hackathon",label:"CodeHunt Hackathon"},{to:"/workshops",label:"Workshops"},{to:"/kinetic-showdown",label:"Kinetic Showdown"},{to:"/esports",label:"eSports"},{to:"/open-mic",label:"Open Mic"},{to:"/culture",label:"Culture"},{to:"/gallery",label:"Gallery"},{to:"/team",label:"Team"}];function sb(){const t=Lr(),e=Pv(),n=t.pathname==="/robo-race"?"/kinetic-showdown":t.pathname;return c.jsxs("header",{className:"site-header",children:[c.jsx("div",{className:"brand",children:c.jsx("img",{className:"logo-image",src:"/logo.png",alt:"Inertia logo"})}),c.jsx("nav",{className:"nav-links",children:jp.map(i=>c.jsx(nb,{to:i.to,className:({isActive:r})=>r?"nav-link nav-link-active":"nav-link",children:i.label},i.to))}),c.jsx("div",{className:"mobile-nav",children:c.jsx("select",{className:"mobile-nav-select","aria-label":"Select page",value:n,onChange:i=>e(i.target.value),children:jp.map(i=>c.jsx("option",{value:i.to,children:i.label},i.to))})}),c.jsx("div",{className:"header-cta",children:c.jsx(Pt,{className:"btn btn-primary",to:"/register",children:"Register Now"})})]})}function ob(){return c.jsxs("footer",{className:"site-footer",children:[c.jsxs("div",{className:"footer-grid",children:[c.jsxs("div",{children:[c.jsx("p",{className:"footer-title",children:"Inertia 2026"}),c.jsx("p",{className:"footer-text",children:"The annual festival of Jabalpur Engineering College. Build, compete, and celebrate innovation."})]}),c.jsxs("div",{children:[c.jsx("p",{className:"footer-title",children:"Contact"}),c.jsx("p",{className:"footer-text",children:"Jabalpur Engineering College, Jabalpur"}),c.jsx(Pt,{className:"btn btn-ghost",to:"/contact",children:"Contact Page"})]}),c.jsxs("div",{children:[c.jsx("p",{className:"footer-title",children:"Events"}),c.jsx("p",{className:"footer-text",children:"CodeHunt Hackathon, Workshops, Kinetic Showdown, eSports, Open Mic"}),c.jsx("p",{className:"footer-text",children:"Culture Fest and gallery highlights"})]})]}),c.jsx("div",{className:"footer-bottom",children:c.jsx("p",{children:"Made with ❤️ by Pavitra Durgesh Pandey"})})]})}function xs(t){let e=t[0],n=t[1],i=t[2];return Math.sqrt(e*e+n*n+i*i)}function Td(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function lb(t,e,n,i){return t[0]=e,t[1]=n,t[2]=i,t}function Vp(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t}function Hp(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t}function cb(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t[2]=e[2]*n[2],t}function ub(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t[2]=e[2]/n[2],t}function Kc(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t}function db(t,e){let n=e[0]-t[0],i=e[1]-t[1],r=e[2]-t[2];return Math.sqrt(n*n+i*i+r*r)}function hb(t,e){let n=e[0]-t[0],i=e[1]-t[1],r=e[2]-t[2];return n*n+i*i+r*r}function Gp(t){let e=t[0],n=t[1],i=t[2];return e*e+n*n+i*i}function fb(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}function pb(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}function Ad(t,e){let n=e[0],i=e[1],r=e[2],a=n*n+i*i+r*r;return a>0&&(a=1/Math.sqrt(a)),t[0]=e[0]*a,t[1]=e[1]*a,t[2]=e[2]*a,t}function Uv(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function Wp(t,e,n){let i=e[0],r=e[1],a=e[2],s=n[0],o=n[1],l=n[2];return t[0]=r*l-a*o,t[1]=a*s-i*l,t[2]=i*o-r*s,t}function mb(t,e,n,i){let r=e[0],a=e[1],s=e[2];return t[0]=r+i*(n[0]-r),t[1]=a+i*(n[1]-a),t[2]=s+i*(n[2]-s),t}function gb(t,e,n,i,r){const a=Math.exp(-i*r);let s=e[0],o=e[1],l=e[2];return t[0]=n[0]+(s-n[0])*a,t[1]=n[1]+(o-n[1])*a,t[2]=n[2]+(l-n[2])*a,t}function yb(t,e,n){let i=e[0],r=e[1],a=e[2],s=n[3]*i+n[7]*r+n[11]*a+n[15];return s=s||1,t[0]=(n[0]*i+n[4]*r+n[8]*a+n[12])/s,t[1]=(n[1]*i+n[5]*r+n[9]*a+n[13])/s,t[2]=(n[2]*i+n[6]*r+n[10]*a+n[14])/s,t}function vb(t,e,n){let i=e[0],r=e[1],a=e[2],s=n[3]*i+n[7]*r+n[11]*a+n[15];return s=s||1,t[0]=(n[0]*i+n[4]*r+n[8]*a)/s,t[1]=(n[1]*i+n[5]*r+n[9]*a)/s,t[2]=(n[2]*i+n[6]*r+n[10]*a)/s,t}function xb(t,e,n){let i=e[0],r=e[1],a=e[2];return t[0]=i*n[0]+r*n[3]+a*n[6],t[1]=i*n[1]+r*n[4]+a*n[7],t[2]=i*n[2]+r*n[5]+a*n[8],t}function _b(t,e,n){let i=e[0],r=e[1],a=e[2],s=n[0],o=n[1],l=n[2],u=n[3],d=o*a-l*r,f=l*i-s*a,p=s*r-o*i,g=o*p-l*f,y=l*d-s*p,x=s*f-o*d,m=u*2;return d*=m,f*=m,p*=m,g*=2,y*=2,x*=2,t[0]=i+d+g,t[1]=r+f+y,t[2]=a+p+x,t}const Sb=function(){const t=[0,0,0],e=[0,0,0];return function(n,i){Td(t,n),Td(e,i),Ad(t,t),Ad(e,e);let r=Uv(t,e);return r>1?0:r<-1?Math.PI:Math.acos(r)}}();function bb(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}class Un extends Array{constructor(e=0,n=e,i=e){return super(e,n,i),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this[0]=e}set y(e){this[1]=e}set z(e){this[2]=e}set(e,n=e,i=e){return e.length?this.copy(e):(lb(this,e,n,i),this)}copy(e){return Td(this,e),this}add(e,n){return n?Vp(this,e,n):Vp(this,this,e),this}sub(e,n){return n?Hp(this,e,n):Hp(this,this,e),this}multiply(e){return e.length?cb(this,this,e):Kc(this,this,e),this}divide(e){return e.length?ub(this,this,e):Kc(this,this,1/e),this}inverse(e=this){return pb(this,e),this}len(){return xs(this)}distance(e){return e?db(this,e):xs(this)}squaredLen(){return Gp(this)}squaredDistance(e){return e?hb(this,e):Gp(this)}negate(e=this){return fb(this,e),this}cross(e,n){return n?Wp(this,e,n):Wp(this,this,e),this}scale(e){return Kc(this,this,e),this}normalize(){return Ad(this,this),this}dot(e){return Uv(this,e)}equals(e){return bb(this,e)}applyMatrix3(e){return xb(this,this,e),this}applyMatrix4(e){return yb(this,this,e),this}scaleRotateMatrix4(e){return vb(this,this,e),this}applyQuaternion(e){return _b(this,this,e),this}angle(e){return Sb(this,e)}lerp(e,n){return mb(this,this,e,n),this}smoothLerp(e,n,i){return gb(this,this,e,n,i),this}clone(){return new Un(this[0],this[1],this[2])}fromArray(e,n=0){return this[0]=e[n],this[1]=e[n+1],this[2]=e[n+2],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e}transformDirection(e){const n=this[0],i=this[1],r=this[2];return this[0]=e[0]*n+e[4]*i+e[8]*r,this[1]=e[1]*n+e[5]*i+e[9]*r,this[2]=e[2]*n+e[6]*i+e[10]*r,this.normalize()}}const qp=new Un;let wb=1,Mb=1,Xp=!1;class Eb{constructor(e,n={}){e.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=e,this.attributes=n,this.id=wb++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let i in n)this.addAttribute(i,n[i])}addAttribute(e,n){if(this.attributes[e]=n,n.id=Mb++,n.size=n.size||1,n.type=n.type||(n.data.constructor===Float32Array?this.gl.FLOAT:n.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),n.target=e==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,n.normalized=n.normalized||!1,n.stride=n.stride||0,n.offset=n.offset||0,n.count=n.count||(n.stride?n.data.byteLength/n.stride:n.data.length/n.size),n.divisor=n.instanced||0,n.needsUpdate=!1,n.usage=n.usage||this.gl.STATIC_DRAW,n.buffer||this.updateAttribute(n),n.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==n.count*n.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,n.count*n.divisor);this.instancedCount=n.count*n.divisor}else e==="index"?this.drawRange.count=n.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,n.count))}updateAttribute(e){const n=!e.buffer;n&&(e.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==e.buffer&&(this.gl.bindBuffer(e.target,e.buffer),this.glState.boundBuffer=e.buffer),n?this.gl.bufferData(e.target,e.data,e.usage):this.gl.bufferSubData(e.target,0,e.data),e.needsUpdate=!1}setIndex(e){this.addAttribute("index",e)}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}setInstancedCount(e){this.instancedCount=e}createVAO(e){this.VAOs[e.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.bindAttributes(e)}bindAttributes(e){e.attributeLocations.forEach((n,{name:i,type:r})=>{if(!this.attributes[i]){console.warn(`active attribute ${i} not being supplied`);return}const a=this.attributes[i];this.gl.bindBuffer(a.target,a.buffer),this.glState.boundBuffer=a.buffer;let s=1;r===35674&&(s=2),r===35675&&(s=3),r===35676&&(s=4);const o=a.size/s,l=s===1?0:s*s*4,u=s===1?0:s*4;for(let d=0;d<s;d++)this.gl.vertexAttribPointer(n+d,o,a.type,a.normalized,a.stride+l,a.offset+d*u),this.gl.enableVertexAttribArray(n+d),this.gl.renderer.vertexAttribDivisor(n+d,a.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:e,mode:n=this.gl.TRIANGLES}){var r;this.gl.renderer.currentGeometry!==`${this.id}_${e.attributeOrder}`&&(this.VAOs[e.attributeOrder]||this.createVAO(e),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${e.attributeOrder}`),e.attributeLocations.forEach((a,{name:s})=>{const o=this.attributes[s];o.needsUpdate&&this.updateAttribute(o)});let i=2;((r=this.attributes.index)==null?void 0:r.type)===this.gl.UNSIGNED_INT&&(i=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(n,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*i,this.instancedCount):this.gl.renderer.drawArraysInstanced(n,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(n,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*i):this.gl.drawArrays(n,this.drawRange.start,this.drawRange.count)}getPosition(){const e=this.attributes.position;if(e.data)return e;if(!Xp)return console.warn("No position buffer data found to compute bounds"),Xp=!0}computeBoundingBox(e){e||(e=this.getPosition());const n=e.data,i=e.size;this.bounds||(this.bounds={min:new Un,max:new Un,center:new Un,scale:new Un,radius:1/0});const r=this.bounds.min,a=this.bounds.max,s=this.bounds.center,o=this.bounds.scale;r.set(1/0),a.set(-1/0);for(let l=0,u=n.length;l<u;l+=i){const d=n[l],f=n[l+1],p=n[l+2];r.x=Math.min(d,r.x),r.y=Math.min(f,r.y),r.z=Math.min(p,r.z),a.x=Math.max(d,a.x),a.y=Math.max(f,a.y),a.z=Math.max(p,a.z)}o.sub(a,r),s.add(r,a).divide(2)}computeBoundingSphere(e){e||(e=this.getPosition());const n=e.data,i=e.size;this.bounds||this.computeBoundingBox(e);let r=0;for(let a=0,s=n.length;a<s;a+=i)qp.fromArray(n,a),r=Math.max(r,this.bounds.center.squaredDistance(qp));this.bounds.radius=Math.sqrt(r)}remove(){for(let e in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[e]),delete this.VAOs[e];for(let e in this.attributes)this.gl.deleteBuffer(this.attributes[e].buffer),delete this.attributes[e]}}let Cb=1;const $p={};class Tb{constructor(e,{vertex:n,fragment:i,uniforms:r={},transparent:a=!1,cullFace:s=e.BACK,frontFace:o=e.CCW,depthTest:l=!0,depthWrite:u=!0,depthFunc:d=e.LEQUAL}={}){e.canvas||console.error("gl not passed as first argument to Program"),this.gl=e,this.uniforms=r,this.id=Cb++,n||console.warn("vertex shader not supplied"),i||console.warn("fragment shader not supplied"),this.transparent=a,this.cullFace=s,this.frontFace=o,this.depthTest=l,this.depthWrite=u,this.depthFunc=d,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=e.createShader(e.VERTEX_SHADER),this.fragmentShader=e.createShader(e.FRAGMENT_SHADER),this.program=e.createProgram(),e.attachShader(this.program,this.vertexShader),e.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:n,fragment:i})}setShaders({vertex:e,fragment:n}){if(e&&(this.gl.shaderSource(this.vertexShader,e),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${Yp(e)}`)),n&&(this.gl.shaderSource(this.fragmentShader,n),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${Yp(n)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let i=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let s=0;s<i;s++){let o=this.gl.getActiveUniform(this.program,s);this.uniformLocations.set(o,this.gl.getUniformLocation(this.program,o.name));const l=o.name.match(/(\w+)/g);o.uniformName=l[0],o.nameComponents=l.slice(1)}this.attributeLocations=new Map;const r=[],a=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let s=0;s<a;s++){const o=this.gl.getActiveAttrib(this.program,s),l=this.gl.getAttribLocation(this.program,o.name);l!==-1&&(r[l]=o.name,this.attributeLocations.set(o,l))}this.attributeOrder=r.join("")}setBlendFunc(e,n,i,r){this.blendFunc.src=e,this.blendFunc.dst=n,this.blendFunc.srcAlpha=i,this.blendFunc.dstAlpha=r,e&&(this.transparent=!0)}setBlendEquation(e,n){this.blendEquation.modeRGB=e,this.blendEquation.modeAlpha=n}setStencilFunc(e,n,i){this.stencilRef=n,this.stencilFunc.func=e,this.stencilFunc.ref=n,this.stencilFunc.mask=i}setStencilOp(e,n,i){this.stencilOp.stencilFail=e,this.stencilOp.depthFail=n,this.stencilOp.depthPass=i}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:e=!1}={}){let n=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((r,a)=>{let s=this.uniforms[a.uniformName];for(const o of a.nameComponents){if(!s)break;if(o in s)s=s[o];else{if(Array.isArray(s.value))break;s=void 0;break}}if(!s)return Kp(`Active uniform ${a.name} has not been supplied`);if(s&&s.value===void 0)return Kp(`${a.name} uniform is missing a value parameter`);if(s.value.texture)return n=n+1,s.value.update(n),Zc(this.gl,a.type,r,n);if(s.value.length&&s.value[0].texture){const o=[];return s.value.forEach(l=>{n=n+1,l.update(n),o.push(n)}),Zc(this.gl,a.type,r,o)}Zc(this.gl,a.type,r,s.value)}),this.applyState(),e&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function Zc(t,e,n,i){i=i.length?Ab(i):i;const r=t.renderer.state.uniformLocations.get(n);if(i.length)if(r===void 0||r.length!==i.length)t.renderer.state.uniformLocations.set(n,i.slice(0));else{if(Rb(r,i))return;r.set?r.set(i):Pb(r,i),t.renderer.state.uniformLocations.set(n,r)}else{if(r===i)return;t.renderer.state.uniformLocations.set(n,i)}switch(e){case 5126:return i.length?t.uniform1fv(n,i):t.uniform1f(n,i);case 35664:return t.uniform2fv(n,i);case 35665:return t.uniform3fv(n,i);case 35666:return t.uniform4fv(n,i);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return i.length?t.uniform1iv(n,i):t.uniform1i(n,i);case 35671:case 35667:return t.uniform2iv(n,i);case 35672:case 35668:return t.uniform3iv(n,i);case 35673:case 35669:return t.uniform4iv(n,i);case 35674:return t.uniformMatrix2fv(n,!1,i);case 35675:return t.uniformMatrix3fv(n,!1,i);case 35676:return t.uniformMatrix4fv(n,!1,i)}}function Yp(t){let e=t.split(`
`);for(let n=0;n<e.length;n++)e[n]=n+1+": "+e[n];return e.join(`
`)}function Ab(t){const e=t.length,n=t[0].length;if(n===void 0)return t;const i=e*n;let r=$p[i];r||($p[i]=r=new Float32Array(i));for(let a=0;a<e;a++)r.set(t[a],a*n);return r}function Rb(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pb(t,e){for(let n=0,i=t.length;n<i;n++)t[n]=e[n]}let Jc=0;function Kp(t){Jc>100||(console.warn(t),Jc++,Jc>100&&console.warn("More than 100 program warnings - stopping logs."))}const Qc=new Un;let Nb=1;class Ib{constructor({canvas:e=document.createElement("canvas"),width:n=300,height:i=150,dpr:r=1,alpha:a=!1,depth:s=!0,stencil:o=!1,antialias:l=!1,premultipliedAlpha:u=!1,preserveDrawingBuffer:d=!1,powerPreference:f="default",autoClear:p=!0,webgl:g=2}={}){const y={alpha:a,depth:s,stencil:o,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:d,powerPreference:f};this.dpr=r,this.alpha=a,this.color=!0,this.depth=s,this.stencil=o,this.premultipliedAlpha=u,this.autoClear=p,this.id=Nb++,g===2&&(this.gl=e.getContext("webgl2",y)),this.isWebgl2=!!this.gl,this.gl||(this.gl=e.getContext("webgl",y)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(n,i),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(e,n){this.width=e,this.height=n,this.gl.canvas.width=e*this.dpr,this.gl.canvas.height=n*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:e+"px",height:n+"px"})}setViewport(e,n,i=0,r=0){this.state.viewport.width===e&&this.state.viewport.height===n||(this.state.viewport.width=e,this.state.viewport.height=n,this.state.viewport.x=i,this.state.viewport.y=r,this.gl.viewport(i,r,e,n))}setScissor(e,n,i=0,r=0){this.gl.scissor(i,r,e,n)}enable(e){this.state[e]!==!0&&(this.gl.enable(e),this.state[e]=!0)}disable(e){this.state[e]!==!1&&(this.gl.disable(e),this.state[e]=!1)}setBlendFunc(e,n,i,r){this.state.blendFunc.src===e&&this.state.blendFunc.dst===n&&this.state.blendFunc.srcAlpha===i&&this.state.blendFunc.dstAlpha===r||(this.state.blendFunc.src=e,this.state.blendFunc.dst=n,this.state.blendFunc.srcAlpha=i,this.state.blendFunc.dstAlpha=r,i!==void 0?this.gl.blendFuncSeparate(e,n,i,r):this.gl.blendFunc(e,n))}setBlendEquation(e,n){e=e||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===e&&this.state.blendEquation.modeAlpha===n)&&(this.state.blendEquation.modeRGB=e,this.state.blendEquation.modeAlpha=n,n!==void 0?this.gl.blendEquationSeparate(e,n):this.gl.blendEquation(e))}setCullFace(e){this.state.cullFace!==e&&(this.state.cullFace=e,this.gl.cullFace(e))}setFrontFace(e){this.state.frontFace!==e&&(this.state.frontFace=e,this.gl.frontFace(e))}setDepthMask(e){this.state.depthMask!==e&&(this.state.depthMask=e,this.gl.depthMask(e))}setDepthFunc(e){this.state.depthFunc!==e&&(this.state.depthFunc=e,this.gl.depthFunc(e))}setStencilMask(e){this.state.stencilMask!==e&&(this.state.stencilMask=e,this.gl.stencilMask(e))}setStencilFunc(e,n,i){this.state.stencilFunc===e&&this.state.stencilRef===n&&this.state.stencilFuncMask===i||(this.state.stencilFunc=e||this.gl.ALWAYS,this.state.stencilRef=n||0,this.state.stencilFuncMask=i||0,this.gl.stencilFunc(e||this.gl.ALWAYS,n||0,i||0))}setStencilOp(e,n,i){this.state.stencilFail===e&&this.state.stencilDepthFail===n&&this.state.stencilDepthPass===i||(this.state.stencilFail=e,this.state.stencilDepthFail=n,this.state.stencilDepthPass=i,this.gl.stencilOp(e,n,i))}activeTexture(e){this.state.activeTextureUnit!==e&&(this.state.activeTextureUnit=e,this.gl.activeTexture(this.gl.TEXTURE0+e))}bindFramebuffer({target:e=this.gl.FRAMEBUFFER,buffer:n=null}={}){this.state.framebuffer!==n&&(this.state.framebuffer=n,this.gl.bindFramebuffer(e,n))}getExtension(e,n,i){return n&&this.gl[n]?this.gl[n].bind(this.gl):(this.extensions[e]||(this.extensions[e]=this.gl.getExtension(e)),n?this.extensions[e]?this.extensions[e][i].bind(this.extensions[e]):null:this.extensions[e])}sortOpaque(e,n){return e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.program.id!==n.program.id?e.program.id-n.program.id:e.zDepth!==n.zDepth?e.zDepth-n.zDepth:n.id-e.id}sortTransparent(e,n){return e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.zDepth!==n.zDepth?n.zDepth-e.zDepth:n.id-e.id}sortUI(e,n){return e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.program.id!==n.program.id?e.program.id-n.program.id:n.id-e.id}getRenderList({scene:e,camera:n,frustumCull:i,sort:r}){let a=[];if(n&&i&&n.updateFrustum(),e.traverse(s=>{if(!s.visible)return!0;s.draw&&(i&&s.frustumCulled&&n&&!n.frustumIntersectsMesh(s)||a.push(s))}),r){const s=[],o=[],l=[];a.forEach(u=>{u.program.transparent?u.program.depthTest?o.push(u):l.push(u):s.push(u),u.zDepth=0,!(u.renderOrder!==0||!u.program.depthTest||!n)&&(u.worldMatrix.getTranslation(Qc),Qc.applyMatrix4(n.projectionViewMatrix),u.zDepth=Qc.z)}),s.sort(this.sortOpaque),o.sort(this.sortTransparent),l.sort(this.sortUI),a=s.concat(o,l)}return a}render({scene:e,camera:n,target:i=null,update:r=!0,sort:a=!0,frustumCull:s=!0,clear:o}){i===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(i),this.setViewport(i.width,i.height)),(o||this.autoClear&&o!==!1)&&(this.depth&&(!i||i.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!i||i.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),r&&e.updateMatrixWorld(),n&&n.updateMatrixWorld(),this.getRenderList({scene:e,camera:n,frustumCull:s,sort:a}).forEach(u=>{u.draw({camera:n})})}}function Db(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function Lb(t,e,n,i,r){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t}function Ub(t,e){let n=e[0],i=e[1],r=e[2],a=e[3],s=n*n+i*i+r*r+a*a;return s>0&&(s=1/Math.sqrt(s)),t[0]=n*s,t[1]=i*s,t[2]=r*s,t[3]=a*s,t}function kb(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]}function Fb(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function Ob(t,e,n){n=n*.5;let i=Math.sin(n);return t[0]=i*e[0],t[1]=i*e[1],t[2]=i*e[2],t[3]=Math.cos(n),t}function Zp(t,e,n){let i=e[0],r=e[1],a=e[2],s=e[3],o=n[0],l=n[1],u=n[2],d=n[3];return t[0]=i*d+s*o+r*u-a*l,t[1]=r*d+s*l+a*o-i*u,t[2]=a*d+s*u+i*l-r*o,t[3]=s*d-i*o-r*l-a*u,t}function zb(t,e,n){n*=.5;let i=e[0],r=e[1],a=e[2],s=e[3],o=Math.sin(n),l=Math.cos(n);return t[0]=i*l+s*o,t[1]=r*l+a*o,t[2]=a*l-r*o,t[3]=s*l-i*o,t}function Bb(t,e,n){n*=.5;let i=e[0],r=e[1],a=e[2],s=e[3],o=Math.sin(n),l=Math.cos(n);return t[0]=i*l-a*o,t[1]=r*l+s*o,t[2]=a*l+i*o,t[3]=s*l-r*o,t}function jb(t,e,n){n*=.5;let i=e[0],r=e[1],a=e[2],s=e[3],o=Math.sin(n),l=Math.cos(n);return t[0]=i*l+r*o,t[1]=r*l-i*o,t[2]=a*l+s*o,t[3]=s*l-a*o,t}function Vb(t,e,n,i){let r=e[0],a=e[1],s=e[2],o=e[3],l=n[0],u=n[1],d=n[2],f=n[3],p,g,y,x,m;return g=r*l+a*u+s*d+o*f,g<0&&(g=-g,l=-l,u=-u,d=-d,f=-f),1-g>1e-6?(p=Math.acos(g),y=Math.sin(p),x=Math.sin((1-i)*p)/y,m=Math.sin(i*p)/y):(x=1-i,m=i),t[0]=x*r+m*l,t[1]=x*a+m*u,t[2]=x*s+m*d,t[3]=x*o+m*f,t}function Hb(t,e){let n=e[0],i=e[1],r=e[2],a=e[3],s=n*n+i*i+r*r+a*a,o=s?1/s:0;return t[0]=-n*o,t[1]=-i*o,t[2]=-r*o,t[3]=a*o,t}function Gb(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function Wb(t,e){let n=e[0]+e[4]+e[8],i;if(n>0)i=Math.sqrt(n+1),t[3]=.5*i,i=.5/i,t[0]=(e[5]-e[7])*i,t[1]=(e[6]-e[2])*i,t[2]=(e[1]-e[3])*i;else{let r=0;e[4]>e[0]&&(r=1),e[8]>e[r*3+r]&&(r=2);let a=(r+1)%3,s=(r+2)%3;i=Math.sqrt(e[r*3+r]-e[a*3+a]-e[s*3+s]+1),t[r]=.5*i,i=.5/i,t[3]=(e[a*3+s]-e[s*3+a])*i,t[a]=(e[a*3+r]+e[r*3+a])*i,t[s]=(e[s*3+r]+e[r*3+s])*i}return t}function qb(t,e,n="YXZ"){let i=Math.sin(e[0]*.5),r=Math.cos(e[0]*.5),a=Math.sin(e[1]*.5),s=Math.cos(e[1]*.5),o=Math.sin(e[2]*.5),l=Math.cos(e[2]*.5);return n==="XYZ"?(t[0]=i*s*l+r*a*o,t[1]=r*a*l-i*s*o,t[2]=r*s*o+i*a*l,t[3]=r*s*l-i*a*o):n==="YXZ"?(t[0]=i*s*l+r*a*o,t[1]=r*a*l-i*s*o,t[2]=r*s*o-i*a*l,t[3]=r*s*l+i*a*o):n==="ZXY"?(t[0]=i*s*l-r*a*o,t[1]=r*a*l+i*s*o,t[2]=r*s*o+i*a*l,t[3]=r*s*l-i*a*o):n==="ZYX"?(t[0]=i*s*l-r*a*o,t[1]=r*a*l+i*s*o,t[2]=r*s*o-i*a*l,t[3]=r*s*l+i*a*o):n==="YZX"?(t[0]=i*s*l+r*a*o,t[1]=r*a*l+i*s*o,t[2]=r*s*o-i*a*l,t[3]=r*s*l-i*a*o):n==="XZY"&&(t[0]=i*s*l-r*a*o,t[1]=r*a*l-i*s*o,t[2]=r*s*o+i*a*l,t[3]=r*s*l+i*a*o),t}const Xb=Db,$b=Lb,Yb=kb,Kb=Ub;class Zb extends Array{constructor(e=0,n=0,i=0,r=1){super(e,n,i,r),this.onChange=()=>{},this._target=this;const a=["0","1","2","3"];return new Proxy(this,{set(s,o){const l=Reflect.set(...arguments);return l&&a.includes(o)&&s.onChange(),l}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set w(e){this._target[3]=e,this.onChange()}identity(){return Fb(this._target),this.onChange(),this}set(e,n,i,r){return e.length?this.copy(e):($b(this._target,e,n,i,r),this.onChange(),this)}rotateX(e){return zb(this._target,this._target,e),this.onChange(),this}rotateY(e){return Bb(this._target,this._target,e),this.onChange(),this}rotateZ(e){return jb(this._target,this._target,e),this.onChange(),this}inverse(e=this._target){return Hb(this._target,e),this.onChange(),this}conjugate(e=this._target){return Gb(this._target,e),this.onChange(),this}copy(e){return Xb(this._target,e),this.onChange(),this}normalize(e=this._target){return Kb(this._target,e),this.onChange(),this}multiply(e,n){return n?Zp(this._target,e,n):Zp(this._target,this._target,e),this.onChange(),this}dot(e){return Yb(this._target,e)}fromMatrix3(e){return Wb(this._target,e),this.onChange(),this}fromEuler(e,n){return qb(this._target,e,e.order),n||this.onChange(),this}fromAxisAngle(e,n){return Ob(this._target,e,n),this.onChange(),this}slerp(e,n){return Vb(this._target,this._target,e,n),this.onChange(),this}fromArray(e,n=0){return this._target[0]=e[n],this._target[1]=e[n+1],this._target[2]=e[n+2],this._target[3]=e[n+3],this.onChange(),this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e[n+3]=this[3],e}}const Jb=1e-6;function Qb(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function ew(t,e,n,i,r,a,s,o,l,u,d,f,p,g,y,x,m){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t[4]=a,t[5]=s,t[6]=o,t[7]=l,t[8]=u,t[9]=d,t[10]=f,t[11]=p,t[12]=g,t[13]=y,t[14]=x,t[15]=m,t}function tw(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function nw(t,e){let n=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],u=e[7],d=e[8],f=e[9],p=e[10],g=e[11],y=e[12],x=e[13],m=e[14],h=e[15],v=n*o-i*s,_=n*l-r*s,M=n*u-a*s,P=i*l-r*o,A=i*u-a*o,E=r*u-a*l,w=d*x-f*y,S=d*m-p*y,b=d*h-g*y,T=f*m-p*x,z=f*h-g*x,N=p*h-g*m,D=v*N-_*z+M*T+P*b-A*S+E*w;return D?(D=1/D,t[0]=(o*N-l*z+u*T)*D,t[1]=(r*z-i*N-a*T)*D,t[2]=(x*E-m*A+h*P)*D,t[3]=(p*A-f*E-g*P)*D,t[4]=(l*b-s*N-u*S)*D,t[5]=(n*N-r*b+a*S)*D,t[6]=(m*M-y*E-h*_)*D,t[7]=(d*E-p*M+g*_)*D,t[8]=(s*z-o*b+u*w)*D,t[9]=(i*b-n*z-a*w)*D,t[10]=(y*A-x*M+h*v)*D,t[11]=(f*M-d*A-g*v)*D,t[12]=(o*S-s*T-l*w)*D,t[13]=(n*T-i*S+r*w)*D,t[14]=(x*_-y*P-m*v)*D,t[15]=(d*P-f*_+p*v)*D,t):null}function kv(t){let e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],s=t[5],o=t[6],l=t[7],u=t[8],d=t[9],f=t[10],p=t[11],g=t[12],y=t[13],x=t[14],m=t[15],h=e*s-n*a,v=e*o-i*a,_=e*l-r*a,M=n*o-i*s,P=n*l-r*s,A=i*l-r*o,E=u*y-d*g,w=u*x-f*g,S=u*m-p*g,b=d*x-f*y,T=d*m-p*y,z=f*m-p*x;return h*z-v*T+_*b+M*S-P*w+A*E}function Jp(t,e,n){let i=e[0],r=e[1],a=e[2],s=e[3],o=e[4],l=e[5],u=e[6],d=e[7],f=e[8],p=e[9],g=e[10],y=e[11],x=e[12],m=e[13],h=e[14],v=e[15],_=n[0],M=n[1],P=n[2],A=n[3];return t[0]=_*i+M*o+P*f+A*x,t[1]=_*r+M*l+P*p+A*m,t[2]=_*a+M*u+P*g+A*h,t[3]=_*s+M*d+P*y+A*v,_=n[4],M=n[5],P=n[6],A=n[7],t[4]=_*i+M*o+P*f+A*x,t[5]=_*r+M*l+P*p+A*m,t[6]=_*a+M*u+P*g+A*h,t[7]=_*s+M*d+P*y+A*v,_=n[8],M=n[9],P=n[10],A=n[11],t[8]=_*i+M*o+P*f+A*x,t[9]=_*r+M*l+P*p+A*m,t[10]=_*a+M*u+P*g+A*h,t[11]=_*s+M*d+P*y+A*v,_=n[12],M=n[13],P=n[14],A=n[15],t[12]=_*i+M*o+P*f+A*x,t[13]=_*r+M*l+P*p+A*m,t[14]=_*a+M*u+P*g+A*h,t[15]=_*s+M*d+P*y+A*v,t}function iw(t,e,n){let i=n[0],r=n[1],a=n[2],s,o,l,u,d,f,p,g,y,x,m,h;return e===t?(t[12]=e[0]*i+e[4]*r+e[8]*a+e[12],t[13]=e[1]*i+e[5]*r+e[9]*a+e[13],t[14]=e[2]*i+e[6]*r+e[10]*a+e[14],t[15]=e[3]*i+e[7]*r+e[11]*a+e[15]):(s=e[0],o=e[1],l=e[2],u=e[3],d=e[4],f=e[5],p=e[6],g=e[7],y=e[8],x=e[9],m=e[10],h=e[11],t[0]=s,t[1]=o,t[2]=l,t[3]=u,t[4]=d,t[5]=f,t[6]=p,t[7]=g,t[8]=y,t[9]=x,t[10]=m,t[11]=h,t[12]=s*i+d*r+y*a+e[12],t[13]=o*i+f*r+x*a+e[13],t[14]=l*i+p*r+m*a+e[14],t[15]=u*i+g*r+h*a+e[15]),t}function rw(t,e,n){let i=n[0],r=n[1],a=n[2];return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t[3]=e[3]*i,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*a,t[9]=e[9]*a,t[10]=e[10]*a,t[11]=e[11]*a,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function aw(t,e,n,i){let r=i[0],a=i[1],s=i[2],o=Math.hypot(r,a,s),l,u,d,f,p,g,y,x,m,h,v,_,M,P,A,E,w,S,b,T,z,N,D,B;return Math.abs(o)<Jb?null:(o=1/o,r*=o,a*=o,s*=o,l=Math.sin(n),u=Math.cos(n),d=1-u,f=e[0],p=e[1],g=e[2],y=e[3],x=e[4],m=e[5],h=e[6],v=e[7],_=e[8],M=e[9],P=e[10],A=e[11],E=r*r*d+u,w=a*r*d+s*l,S=s*r*d-a*l,b=r*a*d-s*l,T=a*a*d+u,z=s*a*d+r*l,N=r*s*d+a*l,D=a*s*d-r*l,B=s*s*d+u,t[0]=f*E+x*w+_*S,t[1]=p*E+m*w+M*S,t[2]=g*E+h*w+P*S,t[3]=y*E+v*w+A*S,t[4]=f*b+x*T+_*z,t[5]=p*b+m*T+M*z,t[6]=g*b+h*T+P*z,t[7]=y*b+v*T+A*z,t[8]=f*N+x*D+_*B,t[9]=p*N+m*D+M*B,t[10]=g*N+h*D+P*B,t[11]=y*N+v*D+A*B,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}function sw(t,e){return t[0]=e[12],t[1]=e[13],t[2]=e[14],t}function Fv(t,e){let n=e[0],i=e[1],r=e[2],a=e[4],s=e[5],o=e[6],l=e[8],u=e[9],d=e[10];return t[0]=Math.hypot(n,i,r),t[1]=Math.hypot(a,s,o),t[2]=Math.hypot(l,u,d),t}function ow(t){let e=t[0],n=t[1],i=t[2],r=t[4],a=t[5],s=t[6],o=t[8],l=t[9],u=t[10];const d=e*e+n*n+i*i,f=r*r+a*a+s*s,p=o*o+l*l+u*u;return Math.sqrt(Math.max(d,f,p))}const Ov=function(){const t=[1,1,1];return function(e,n){let i=t;Fv(i,n);let r=1/i[0],a=1/i[1],s=1/i[2],o=n[0]*r,l=n[1]*a,u=n[2]*s,d=n[4]*r,f=n[5]*a,p=n[6]*s,g=n[8]*r,y=n[9]*a,x=n[10]*s,m=o+f+x,h=0;return m>0?(h=Math.sqrt(m+1)*2,e[3]=.25*h,e[0]=(p-y)/h,e[1]=(g-u)/h,e[2]=(l-d)/h):o>f&&o>x?(h=Math.sqrt(1+o-f-x)*2,e[3]=(p-y)/h,e[0]=.25*h,e[1]=(l+d)/h,e[2]=(g+u)/h):f>x?(h=Math.sqrt(1+f-o-x)*2,e[3]=(g-u)/h,e[0]=(l+d)/h,e[1]=.25*h,e[2]=(p+y)/h):(h=Math.sqrt(1+x-o-f)*2,e[3]=(l-d)/h,e[0]=(g+u)/h,e[1]=(p+y)/h,e[2]=.25*h),e}}();function lw(t,e,n,i){let r=xs([t[0],t[1],t[2]]);const a=xs([t[4],t[5],t[6]]),s=xs([t[8],t[9],t[10]]);kv(t)<0&&(r=-r),n[0]=t[12],n[1]=t[13],n[2]=t[14];const l=t.slice(),u=1/r,d=1/a,f=1/s;l[0]*=u,l[1]*=u,l[2]*=u,l[4]*=d,l[5]*=d,l[6]*=d,l[8]*=f,l[9]*=f,l[10]*=f,Ov(e,l),i[0]=r,i[1]=a,i[2]=s}function cw(t,e,n,i){const r=t,a=e[0],s=e[1],o=e[2],l=e[3],u=a+a,d=s+s,f=o+o,p=a*u,g=a*d,y=a*f,x=s*d,m=s*f,h=o*f,v=l*u,_=l*d,M=l*f,P=i[0],A=i[1],E=i[2];return r[0]=(1-(x+h))*P,r[1]=(g+M)*P,r[2]=(y-_)*P,r[3]=0,r[4]=(g-M)*A,r[5]=(1-(p+h))*A,r[6]=(m+v)*A,r[7]=0,r[8]=(y+_)*E,r[9]=(m-v)*E,r[10]=(1-(p+x))*E,r[11]=0,r[12]=n[0],r[13]=n[1],r[14]=n[2],r[15]=1,r}function uw(t,e){let n=e[0],i=e[1],r=e[2],a=e[3],s=n+n,o=i+i,l=r+r,u=n*s,d=i*s,f=i*o,p=r*s,g=r*o,y=r*l,x=a*s,m=a*o,h=a*l;return t[0]=1-f-y,t[1]=d+h,t[2]=p-m,t[3]=0,t[4]=d-h,t[5]=1-u-y,t[6]=g+x,t[7]=0,t[8]=p+m,t[9]=g-x,t[10]=1-u-f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function dw(t,e,n,i,r){let a=1/Math.tan(e/2),s=1/(i-r);return t[0]=a/n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(r+i)*s,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*r*i*s,t[15]=0,t}function hw(t,e,n,i,r,a,s){let o=1/(e-n),l=1/(i-r),u=1/(a-s);return t[0]=-2*o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*l,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*u,t[11]=0,t[12]=(e+n)*o,t[13]=(r+i)*l,t[14]=(s+a)*u,t[15]=1,t}function fw(t,e,n,i){let r=e[0],a=e[1],s=e[2],o=i[0],l=i[1],u=i[2],d=r-n[0],f=a-n[1],p=s-n[2],g=d*d+f*f+p*p;g===0?p=1:(g=1/Math.sqrt(g),d*=g,f*=g,p*=g);let y=l*p-u*f,x=u*d-o*p,m=o*f-l*d;return g=y*y+x*x+m*m,g===0&&(u?o+=1e-6:l?u+=1e-6:l+=1e-6,y=l*p-u*f,x=u*d-o*p,m=o*f-l*d,g=y*y+x*x+m*m),g=1/Math.sqrt(g),y*=g,x*=g,m*=g,t[0]=y,t[1]=x,t[2]=m,t[3]=0,t[4]=f*m-p*x,t[5]=p*y-d*m,t[6]=d*x-f*y,t[7]=0,t[8]=d,t[9]=f,t[10]=p,t[11]=0,t[12]=r,t[13]=a,t[14]=s,t[15]=1,t}function Qp(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t[3]=e[3]+n[3],t[4]=e[4]+n[4],t[5]=e[5]+n[5],t[6]=e[6]+n[6],t[7]=e[7]+n[7],t[8]=e[8]+n[8],t[9]=e[9]+n[9],t[10]=e[10]+n[10],t[11]=e[11]+n[11],t[12]=e[12]+n[12],t[13]=e[13]+n[13],t[14]=e[14]+n[14],t[15]=e[15]+n[15],t}function em(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t[3]=e[3]-n[3],t[4]=e[4]-n[4],t[5]=e[5]-n[5],t[6]=e[6]-n[6],t[7]=e[7]-n[7],t[8]=e[8]-n[8],t[9]=e[9]-n[9],t[10]=e[10]-n[10],t[11]=e[11]-n[11],t[12]=e[12]-n[12],t[13]=e[13]-n[13],t[14]=e[14]-n[14],t[15]=e[15]-n[15],t}function pw(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*n,t[9]=e[9]*n,t[10]=e[10]*n,t[11]=e[11]*n,t[12]=e[12]*n,t[13]=e[13]*n,t[14]=e[14]*n,t[15]=e[15]*n,t}class Fl extends Array{constructor(e=1,n=0,i=0,r=0,a=0,s=1,o=0,l=0,u=0,d=0,f=1,p=0,g=0,y=0,x=0,m=1){return super(e,n,i,r,a,s,o,l,u,d,f,p,g,y,x,m),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(e){this[12]=e}set y(e){this[13]=e}set z(e){this[14]=e}set w(e){this[15]=e}set(e,n,i,r,a,s,o,l,u,d,f,p,g,y,x,m){return e.length?this.copy(e):(ew(this,e,n,i,r,a,s,o,l,u,d,f,p,g,y,x,m),this)}translate(e,n=this){return iw(this,n,e),this}rotate(e,n,i=this){return aw(this,i,e,n),this}scale(e,n=this){return rw(this,n,typeof e=="number"?[e,e,e]:e),this}add(e,n){return n?Qp(this,e,n):Qp(this,this,e),this}sub(e,n){return n?em(this,e,n):em(this,this,e),this}multiply(e,n){return e.length?n?Jp(this,e,n):Jp(this,this,e):pw(this,this,e),this}identity(){return tw(this),this}copy(e){return Qb(this,e),this}fromPerspective({fov:e,aspect:n,near:i,far:r}={}){return dw(this,e,n,i,r),this}fromOrthogonal({left:e,right:n,bottom:i,top:r,near:a,far:s}){return hw(this,e,n,i,r,a,s),this}fromQuaternion(e){return uw(this,e),this}setPosition(e){return this.x=e[0],this.y=e[1],this.z=e[2],this}inverse(e=this){return nw(this,e),this}compose(e,n,i){return cw(this,e,n,i),this}decompose(e,n,i){return lw(this,e,n,i),this}getRotation(e){return Ov(e,this),this}getTranslation(e){return sw(e,this),this}getScaling(e){return Fv(e,this),this}getMaxScaleOnAxis(){return ow(this)}lookAt(e,n,i){return fw(this,e,n,i),this}determinant(){return kv(this)}fromArray(e,n=0){return this[0]=e[n],this[1]=e[n+1],this[2]=e[n+2],this[3]=e[n+3],this[4]=e[n+4],this[5]=e[n+5],this[6]=e[n+6],this[7]=e[n+7],this[8]=e[n+8],this[9]=e[n+9],this[10]=e[n+10],this[11]=e[n+11],this[12]=e[n+12],this[13]=e[n+13],this[14]=e[n+14],this[15]=e[n+15],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e[n+3]=this[3],e[n+4]=this[4],e[n+5]=this[5],e[n+6]=this[6],e[n+7]=this[7],e[n+8]=this[8],e[n+9]=this[9],e[n+10]=this[10],e[n+11]=this[11],e[n+12]=this[12],e[n+13]=this[13],e[n+14]=this[14],e[n+15]=this[15],e}}function mw(t,e,n="YXZ"){return n==="XYZ"?(t[1]=Math.asin(Math.min(Math.max(e[8],-1),1)),Math.abs(e[8])<.99999?(t[0]=Math.atan2(-e[9],e[10]),t[2]=Math.atan2(-e[4],e[0])):(t[0]=Math.atan2(e[6],e[5]),t[2]=0)):n==="YXZ"?(t[0]=Math.asin(-Math.min(Math.max(e[9],-1),1)),Math.abs(e[9])<.99999?(t[1]=Math.atan2(e[8],e[10]),t[2]=Math.atan2(e[1],e[5])):(t[1]=Math.atan2(-e[2],e[0]),t[2]=0)):n==="ZXY"?(t[0]=Math.asin(Math.min(Math.max(e[6],-1),1)),Math.abs(e[6])<.99999?(t[1]=Math.atan2(-e[2],e[10]),t[2]=Math.atan2(-e[4],e[5])):(t[1]=0,t[2]=Math.atan2(e[1],e[0]))):n==="ZYX"?(t[1]=Math.asin(-Math.min(Math.max(e[2],-1),1)),Math.abs(e[2])<.99999?(t[0]=Math.atan2(e[6],e[10]),t[2]=Math.atan2(e[1],e[0])):(t[0]=0,t[2]=Math.atan2(-e[4],e[5]))):n==="YZX"?(t[2]=Math.asin(Math.min(Math.max(e[1],-1),1)),Math.abs(e[1])<.99999?(t[0]=Math.atan2(-e[9],e[5]),t[1]=Math.atan2(-e[2],e[0])):(t[0]=0,t[1]=Math.atan2(e[8],e[10]))):n==="XZY"&&(t[2]=Math.asin(-Math.min(Math.max(e[4],-1),1)),Math.abs(e[4])<.99999?(t[0]=Math.atan2(e[6],e[5]),t[1]=Math.atan2(e[8],e[0])):(t[0]=Math.atan2(-e[9],e[10]),t[1]=0)),t}const tm=new Fl;let gw=class extends Array{constructor(e=0,n=e,i=e,r="YXZ"){super(e,n,i),this.order=r,this.onChange=()=>{},this._target=this;const a=["0","1","2"];return new Proxy(this,{set(s,o){const l=Reflect.set(...arguments);return l&&a.includes(o)&&s.onChange(),l}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set(e,n=e,i=e){return e.length?this.copy(e):(this._target[0]=e,this._target[1]=n,this._target[2]=i,this.onChange(),this)}copy(e){return this._target[0]=e[0],this._target[1]=e[1],this._target[2]=e[2],this.onChange(),this}reorder(e){return this._target.order=e,this.onChange(),this}fromRotationMatrix(e,n=this.order){return mw(this._target,e,n),this.onChange(),this}fromQuaternion(e,n=this.order,i){return tm.fromQuaternion(e),this._target.fromRotationMatrix(tm,n),i||this.onChange(),this}fromArray(e,n=0){return this._target[0]=e[n],this._target[1]=e[n+1],this._target[2]=e[n+2],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e}};class yw{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new Fl,this.worldMatrix=new Fl,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new Un,this.quaternion=new Zb,this.scale=new Un(1),this.rotation=new gw,this.up=new Un(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(e,n=!0){this.parent&&e!==this.parent&&this.parent.removeChild(this,!1),this.parent=e,n&&e&&e.addChild(this,!1)}addChild(e,n=!0){~this.children.indexOf(e)||this.children.push(e),n&&e.setParent(this,!1)}removeChild(e,n=!0){~this.children.indexOf(e)&&this.children.splice(this.children.indexOf(e),1),n&&e.setParent(null,!1)}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||e)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,e=!0);for(let n=0,i=this.children.length;n<i;n++)this.children[n].updateMatrixWorld(e)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(e){if(!e(this))for(let n=0,i=this.children.length;n<i;n++)this.children[n].traverse(e)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(e,n=!1){n?this.matrix.lookAt(this.position,e,this.up):this.matrix.lookAt(e,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}}function vw(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t}function xw(t,e){let n=e[0],i=e[1],r=e[2],a=e[3],s=n+n,o=i+i,l=r+r,u=n*s,d=i*s,f=i*o,p=r*s,g=r*o,y=r*l,x=a*s,m=a*o,h=a*l;return t[0]=1-f-y,t[3]=d-h,t[6]=p+m,t[1]=d+h,t[4]=1-u-y,t[7]=g-x,t[2]=p-m,t[5]=g+x,t[8]=1-u-f,t}function _w(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function Sw(t,e,n,i,r,a,s,o,l,u){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t[4]=a,t[5]=s,t[6]=o,t[7]=l,t[8]=u,t}function bw(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function ww(t,e){let n=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],u=e[7],d=e[8],f=d*s-o*u,p=-d*a+o*l,g=u*a-s*l,y=n*f+i*p+r*g;return y?(y=1/y,t[0]=f*y,t[1]=(-d*i+r*u)*y,t[2]=(o*i-r*s)*y,t[3]=p*y,t[4]=(d*n-r*l)*y,t[5]=(-o*n+r*a)*y,t[6]=g*y,t[7]=(-u*n+i*l)*y,t[8]=(s*n-i*a)*y,t):null}function nm(t,e,n){let i=e[0],r=e[1],a=e[2],s=e[3],o=e[4],l=e[5],u=e[6],d=e[7],f=e[8],p=n[0],g=n[1],y=n[2],x=n[3],m=n[4],h=n[5],v=n[6],_=n[7],M=n[8];return t[0]=p*i+g*s+y*u,t[1]=p*r+g*o+y*d,t[2]=p*a+g*l+y*f,t[3]=x*i+m*s+h*u,t[4]=x*r+m*o+h*d,t[5]=x*a+m*l+h*f,t[6]=v*i+_*s+M*u,t[7]=v*r+_*o+M*d,t[8]=v*a+_*l+M*f,t}function Mw(t,e,n){let i=e[0],r=e[1],a=e[2],s=e[3],o=e[4],l=e[5],u=e[6],d=e[7],f=e[8],p=n[0],g=n[1];return t[0]=i,t[1]=r,t[2]=a,t[3]=s,t[4]=o,t[5]=l,t[6]=p*i+g*s+u,t[7]=p*r+g*o+d,t[8]=p*a+g*l+f,t}function Ew(t,e,n){let i=e[0],r=e[1],a=e[2],s=e[3],o=e[4],l=e[5],u=e[6],d=e[7],f=e[8],p=Math.sin(n),g=Math.cos(n);return t[0]=g*i+p*s,t[1]=g*r+p*o,t[2]=g*a+p*l,t[3]=g*s-p*i,t[4]=g*o-p*r,t[5]=g*l-p*a,t[6]=u,t[7]=d,t[8]=f,t}function Cw(t,e,n){let i=n[0],r=n[1];return t[0]=i*e[0],t[1]=i*e[1],t[2]=i*e[2],t[3]=r*e[3],t[4]=r*e[4],t[5]=r*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function Tw(t,e){let n=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],u=e[7],d=e[8],f=e[9],p=e[10],g=e[11],y=e[12],x=e[13],m=e[14],h=e[15],v=n*o-i*s,_=n*l-r*s,M=n*u-a*s,P=i*l-r*o,A=i*u-a*o,E=r*u-a*l,w=d*x-f*y,S=d*m-p*y,b=d*h-g*y,T=f*m-p*x,z=f*h-g*x,N=p*h-g*m,D=v*N-_*z+M*T+P*b-A*S+E*w;return D?(D=1/D,t[0]=(o*N-l*z+u*T)*D,t[1]=(l*b-s*N-u*S)*D,t[2]=(s*z-o*b+u*w)*D,t[3]=(r*z-i*N-a*T)*D,t[4]=(n*N-r*b+a*S)*D,t[5]=(i*b-n*z-a*w)*D,t[6]=(x*E-m*A+h*P)*D,t[7]=(m*M-y*E-h*_)*D,t[8]=(y*A-x*M+h*v)*D,t):null}class Aw extends Array{constructor(e=1,n=0,i=0,r=0,a=1,s=0,o=0,l=0,u=1){return super(e,n,i,r,a,s,o,l,u),this}set(e,n,i,r,a,s,o,l,u){return e.length?this.copy(e):(Sw(this,e,n,i,r,a,s,o,l,u),this)}translate(e,n=this){return Mw(this,n,e),this}rotate(e,n=this){return Ew(this,n,e),this}scale(e,n=this){return Cw(this,n,e),this}multiply(e,n){return n?nm(this,e,n):nm(this,this,e),this}identity(){return bw(this),this}copy(e){return _w(this,e),this}fromMatrix4(e){return vw(this,e),this}fromQuaternion(e){return xw(this,e),this}fromBasis(e,n,i){return this.set(e[0],e[1],e[2],n[0],n[1],n[2],i[0],i[1],i[2]),this}inverse(e=this){return ww(this,e),this}getNormalMatrix(e){return Tw(this,e),this}}let Rw=0,Pw=class extends yw{constructor(e,{geometry:n,program:i,mode:r=e.TRIANGLES,frustumCulled:a=!0,renderOrder:s=0}={}){super(),e.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=e,this.id=Rw++,this.geometry=n,this.program=i,this.mode=r,this.frustumCulled=a,this.renderOrder=s,this.modelViewMatrix=new Fl,this.normalMatrix=new Aw,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(e){return this.beforeRenderCallbacks.push(e),this}onAfterRender(e){return this.afterRenderCallbacks.push(e),this}draw({camera:e}={}){e&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=e.projectionMatrix,this.program.uniforms.cameraPosition.value=e.worldPosition,this.program.uniforms.viewMatrix.value=e.viewMatrix,this.modelViewMatrix.multiply(e.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:e}));let n=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:n}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:e}))}},Nw=class extends Eb{constructor(e,{attributes:n={}}={}){Object.assign(n,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(e,n)}};const _o=8,Iw=t=>{const e=t.replace("#","").padEnd(6,"0"),n=parseInt(e.slice(0,2),16)/255,i=parseInt(e.slice(2,4),16)/255,r=parseInt(e.slice(4,6),16)/255;return[n,i,r]},Dw=t=>{const e=(t&&t.length?t:["#FF9FFC","#5227FF"]).slice(0,_o);for(e.length===1&&e.push(e[0]);e.length<_o;)e.push(e[e.length-1]);const n=[];for(let r=0;r<_o;r+=1)n.push(Iw(e[r]));const i=Math.max(2,Math.min(_o,(t==null?void 0:t.length)??2));return{arr:n,count:i}},Lw=({className:t,dpr:e,paused:n=!1,gradientColors:i,angle:r=0,noise:a=.3,blindCount:s=16,blindMinWidth:o=60,mouseDampening:l=.15,mirrorGradient:u=!1,spotlightRadius:d=.5,spotlightSoftness:f=1,spotlightOpacity:p=1,distortAmount:g=0,shineDirection:y="left",mixBlendMode:x="lighten"})=>{const m=U.useRef(null),h=U.useRef(null),v=U.useRef(null),_=U.useRef(null),M=U.useRef(null),P=U.useRef(null),A=U.useRef([0,0]),E=U.useRef(0),w=U.useRef(!0);return U.useEffect(()=>{const S=m.current;if(!S)return;const b=new Ib({dpr:e??(typeof window<"u"&&window.devicePixelRatio||1),alpha:!0,antialias:!0});P.current=b;const T=b.gl,z=T.canvas;z.style.width="100%",z.style.height="100%",z.style.display="block",S.appendChild(z);const N=`
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`,D=`
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
`,{arr:B,count:H}=Dw(i),$={iResolution:{value:[T.drawingBufferWidth,T.drawingBufferHeight,1]},iMouse:{value:[0,0]},iTime:{value:0},uAngle:{value:r*Math.PI/180},uNoise:{value:a},uBlindCount:{value:Math.max(1,s)},uSpotlightRadius:{value:d},uSpotlightSoftness:{value:f},uSpotlightOpacity:{value:p},uMirror:{value:u?1:0},uDistort:{value:g},uShineFlip:{value:y==="right"?1:0},uColor0:{value:B[0]},uColor1:{value:B[1]},uColor2:{value:B[2]},uColor3:{value:B[3]},uColor4:{value:B[4]},uColor5:{value:B[5]},uColor6:{value:B[6]},uColor7:{value:B[7]},uColorCount:{value:H}},k=new Tb(T,{vertex:N,fragment:D,uniforms:$});v.current=k;const K=new Nw(T);M.current=K;const J=new Pw(T,{geometry:K,program:k});_.current=J;const ae=()=>{const Y=S.getBoundingClientRect();if(b.setSize(Y.width,Y.height),$.iResolution.value=[T.drawingBufferWidth,T.drawingBufferHeight,1],o&&o>0){const ne=Math.max(1,Math.floor(Y.width/o)),se=s?Math.min(s,ne):ne;$.uBlindCount.value=Math.max(1,se)}else $.uBlindCount.value=Math.max(1,s);if(w.current){w.current=!1;const ne=T.drawingBufferWidth/2,se=T.drawingBufferHeight/2;$.iMouse.value=[ne,se],A.current=[ne,se]}};ae();const xe=new ResizeObserver(ae);xe.observe(S);const ue=Y=>{const ne=z.getBoundingClientRect(),se=b.dpr||1,be=(Y.clientX-ne.left)*se,we=(ne.height-(Y.clientY-ne.top))*se;A.current=[be,we],l<=0&&($.iMouse.value=[be,we])};z.addEventListener("pointermove",ue);const V=Y=>{if(h.current=requestAnimationFrame(V),$.iTime.value=Y*.001,l>0){E.current||(E.current=Y);const ne=(Y-E.current)/1e3;E.current=Y;const se=Math.max(1e-4,l);let be=1-Math.exp(-ne/se);be>1&&(be=1);const we=A.current,Ae=$.iMouse.value;Ae[0]+=(we[0]-Ae[0])*be,Ae[1]+=(we[1]-Ae[1])*be}else E.current=Y;if(!n&&v.current&&_.current)try{b.render({scene:_.current})}catch(ne){console.error(ne)}};return h.current=requestAnimationFrame(V),()=>{h.current&&cancelAnimationFrame(h.current),z.removeEventListener("pointermove",ue),xe.disconnect(),z.parentElement===S&&S.removeChild(z);const Y=(ne,se)=>{ne&&typeof ne[se]=="function"&&ne[se].call(ne)};Y(v.current,"remove"),Y(M.current,"remove"),Y(_.current,"remove"),Y(P.current,"destroy"),v.current=null,M.current=null,_.current=null,P.current=null}},[r,s,o,e,g,i,u,l,a,n,y,p,d,f]),c.jsx("div",{ref:m,className:`gradient-blinds-container ${t??""}`,style:{...x&&{mixBlendMode:x}}})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sf="167",Uw=0,im=1,kw=2,zv=1,Fw=2,ri=3,Zi=0,nn=1,oi=2,Xi=0,ba=1,rm=2,am=3,sm=4,Ow=5,pr=100,zw=101,Bw=102,jw=103,Vw=104,Hw=200,Gw=201,Ww=202,qw=203,Rd=204,Pd=205,Xw=206,$w=207,Yw=208,Kw=209,Zw=210,Jw=211,Qw=212,eM=213,tM=214,nM=0,iM=1,rM=2,Ol=3,aM=4,sM=5,oM=6,lM=7,Bv=0,cM=1,uM=2,$i=0,dM=1,hM=2,fM=3,pM=4,mM=5,gM=6,yM=7,jv=300,Da=301,La=302,Nd=303,Id=304,uc=306,Dd=1e3,xr=1001,Ld=1002,Sn=1003,vM=1004,So=1005,Ln=1006,eu=1007,_r=1008,yi=1009,Vv=1010,Hv=1011,js=1012,of=1013,Rr=1014,ui=1015,$s=1016,lf=1017,cf=1018,Ua=1020,Gv=35902,Wv=1021,qv=1022,kn=1023,Xv=1024,$v=1025,wa=1026,ka=1027,Yv=1028,uf=1029,Kv=1030,df=1031,hf=1033,rl=33776,al=33777,sl=33778,ol=33779,Ud=35840,kd=35841,Fd=35842,Od=35843,zd=36196,Bd=37492,jd=37496,Vd=37808,Hd=37809,Gd=37810,Wd=37811,qd=37812,Xd=37813,$d=37814,Yd=37815,Kd=37816,Zd=37817,Jd=37818,Qd=37819,eh=37820,th=37821,ll=36492,nh=36494,ih=36495,Zv=36283,rh=36284,ah=36285,sh=36286,xM=3200,_M=3201,SM=0,bM=1,Li="",Hn="srgb",nr="srgb-linear",ff="display-p3",dc="display-p3-linear",zl="linear",rt="srgb",Bl="rec709",jl="p3",Or=7680,om=519,wM=512,MM=513,EM=514,Jv=515,CM=516,TM=517,AM=518,RM=519,lm=35044,cm="300 es",di=2e3,Vl=2001;class Va{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(n);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tu=Math.PI/180,oh=180/Math.PI;function Ys(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[t&255]+Bt[t>>8&255]+Bt[t>>16&255]+Bt[t>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[n&63|128]+Bt[n>>8&255]+"-"+Bt[n>>16&255]+Bt[n>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Zt(t,e,n){return Math.max(e,Math.min(n,t))}function PM(t,e){return(t%e+e)%e}function nu(t,e,n){return(1-n)*t+n*e}function Ja(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Yt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(e=0,n=0){Ve.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,n,i,r,a,s,o,l,u){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,a,s,o,l,u)}set(e,n,i,r,a,s,o,l,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=a,d[5]=l,d[6]=i,d[7]=s,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,s=i[0],o=i[3],l=i[6],u=i[1],d=i[4],f=i[7],p=i[2],g=i[5],y=i[8],x=r[0],m=r[3],h=r[6],v=r[1],_=r[4],M=r[7],P=r[2],A=r[5],E=r[8];return a[0]=s*x+o*v+l*P,a[3]=s*m+o*_+l*A,a[6]=s*h+o*M+l*E,a[1]=u*x+d*v+f*P,a[4]=u*m+d*_+f*A,a[7]=u*h+d*M+f*E,a[2]=p*x+g*v+y*P,a[5]=p*m+g*_+y*A,a[8]=p*h+g*M+y*E,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],u=e[7],d=e[8];return n*s*d-n*o*u-i*a*d+i*o*l+r*a*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],u=e[7],d=e[8],f=d*s-o*u,p=o*l-d*a,g=u*a-s*l,y=n*f+i*p+r*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/y;return e[0]=f*x,e[1]=(r*u-d*i)*x,e[2]=(o*i-r*s)*x,e[3]=p*x,e[4]=(d*n-r*l)*x,e[5]=(r*a-o*n)*x,e[6]=g*x,e[7]=(i*l-u*n)*x,e[8]=(s*n-i*a)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,a,s,o){const l=Math.cos(a),u=Math.sin(a);return this.set(i*l,i*u,-i*(l*s+u*o)+s+e,-r*u,r*l,-r*(-u*s+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(iu.makeScale(e,n)),this}rotate(e){return this.premultiply(iu.makeRotation(-e)),this}translate(e,n){return this.premultiply(iu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const iu=new ze;function Qv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Hl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function NM(){const t=Hl("canvas");return t.style.display="block",t}const um={};function _s(t){t in um||(um[t]=!0,console.warn(t))}function IM(t,e,n){return new Promise(function(i,r){function a(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}const dm=new ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hm=new ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qa={[nr]:{transfer:zl,primaries:Bl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Hn]:{transfer:rt,primaries:Bl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[dc]:{transfer:zl,primaries:jl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(hm),fromReference:t=>t.applyMatrix3(dm)},[ff]:{transfer:rt,primaries:jl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(hm),fromReference:t=>t.applyMatrix3(dm).convertLinearToSRGB()}},DM=new Set([nr,dc]),Qe={enabled:!0,_workingColorSpace:nr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!DM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Qa[e].toReference,r=Qa[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Qa[t].primaries},getTransfer:function(t){return t===Li?zl:Qa[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Qa[e].luminanceCoefficients)}};function Ma(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ru(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let zr;class LM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zr===void 0&&(zr=Hl("canvas")),zr.width=e.width,zr.height=e.height;const i=zr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=zr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Hl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Ma(a[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ma(n[i]/255)*255):n[i]=Ma(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let UM=0;class ex{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=Ys(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(au(r[s].image)):a.push(au(r[s]))}else a=au(r);i.url=a}return n||(e.images[this.uuid]=i),i}}function au(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?LM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kM=0;class rn extends Va{constructor(e=rn.DEFAULT_IMAGE,n=rn.DEFAULT_MAPPING,i=xr,r=xr,a=Ln,s=_r,o=kn,l=yi,u=rn.DEFAULT_ANISOTROPY,d=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=Ys(),this.name="",this.source=new ex(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dd:e.x=e.x-Math.floor(e.x);break;case xr:e.x=e.x<0?0:1;break;case Ld:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dd:e.y=e.y-Math.floor(e.y);break;case xr:e.y=e.y<0?0:1;break;case Ld:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=jv;rn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,n=0,i=0,r=1){Nt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,a;const l=e.elements,u=l[0],d=l[4],f=l[8],p=l[1],g=l[5],y=l[9],x=l[2],m=l[6],h=l[10];if(Math.abs(d-p)<.01&&Math.abs(f-x)<.01&&Math.abs(y-m)<.01){if(Math.abs(d+p)<.1&&Math.abs(f+x)<.1&&Math.abs(y+m)<.1&&Math.abs(u+g+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,M=(g+1)/2,P=(h+1)/2,A=(d+p)/4,E=(f+x)/4,w=(y+m)/4;return _>M&&_>P?_<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(_),r=A/i,a=E/i):M>P?M<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(M),i=A/r,a=w/r):P<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(P),i=E/a,r=w/a),this.set(i,r,a,n),this}let v=Math.sqrt((m-y)*(m-y)+(f-x)*(f-x)+(p-d)*(p-d));return Math.abs(v)<.001&&(v=1),this.x=(m-y)/v,this.y=(f-x)/v,this.z=(p-d)/v,this.w=Math.acos((u+g+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class FM extends Va{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Nt(0,0,e,n),this.scissorTest=!1,this.viewport=new Nt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new rn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new ex(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pr extends FM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class tx extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class OM extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ks{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,a,s,o){let l=i[r+0],u=i[r+1],d=i[r+2],f=i[r+3];const p=a[s+0],g=a[s+1],y=a[s+2],x=a[s+3];if(o===0){e[n+0]=l,e[n+1]=u,e[n+2]=d,e[n+3]=f;return}if(o===1){e[n+0]=p,e[n+1]=g,e[n+2]=y,e[n+3]=x;return}if(f!==x||l!==p||u!==g||d!==y){let m=1-o;const h=l*p+u*g+d*y+f*x,v=h>=0?1:-1,_=1-h*h;if(_>Number.EPSILON){const P=Math.sqrt(_),A=Math.atan2(P,h*v);m=Math.sin(m*A)/P,o=Math.sin(o*A)/P}const M=o*v;if(l=l*m+p*M,u=u*m+g*M,d=d*m+y*M,f=f*m+x*M,m===1-o){const P=1/Math.sqrt(l*l+u*u+d*d+f*f);l*=P,u*=P,d*=P,f*=P}}e[n]=l,e[n+1]=u,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,a,s){const o=i[r],l=i[r+1],u=i[r+2],d=i[r+3],f=a[s],p=a[s+1],g=a[s+2],y=a[s+3];return e[n]=o*y+d*f+l*g-u*p,e[n+1]=l*y+d*p+u*f-o*g,e[n+2]=u*y+d*g+o*p-l*f,e[n+3]=d*y-o*f-l*p-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,u=o(i/2),d=o(r/2),f=o(a/2),p=l(i/2),g=l(r/2),y=l(a/2);switch(s){case"XYZ":this._x=p*d*f+u*g*y,this._y=u*g*f-p*d*y,this._z=u*d*y+p*g*f,this._w=u*d*f-p*g*y;break;case"YXZ":this._x=p*d*f+u*g*y,this._y=u*g*f-p*d*y,this._z=u*d*y-p*g*f,this._w=u*d*f+p*g*y;break;case"ZXY":this._x=p*d*f-u*g*y,this._y=u*g*f+p*d*y,this._z=u*d*y+p*g*f,this._w=u*d*f-p*g*y;break;case"ZYX":this._x=p*d*f-u*g*y,this._y=u*g*f+p*d*y,this._z=u*d*y-p*g*f,this._w=u*d*f+p*g*y;break;case"YZX":this._x=p*d*f+u*g*y,this._y=u*g*f+p*d*y,this._z=u*d*y-p*g*f,this._w=u*d*f-p*g*y;break;case"XZY":this._x=p*d*f-u*g*y,this._y=u*g*f-p*d*y,this._z=u*d*y+p*g*f,this._w=u*d*f+p*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],a=n[8],s=n[1],o=n[5],l=n[9],u=n[2],d=n[6],f=n[10],p=i+o+f;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(d-l)*g,this._y=(a-u)*g,this._z=(s-r)*g}else if(i>o&&i>f){const g=2*Math.sqrt(1+i-o-f);this._w=(d-l)/g,this._x=.25*g,this._y=(r+s)/g,this._z=(a+u)/g}else if(o>f){const g=2*Math.sqrt(1+o-i-f);this._w=(a-u)/g,this._x=(r+s)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+f-i-o);this._w=(s-r)/g,this._x=(a+u)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,a=e._z,s=e._w,o=n._x,l=n._y,u=n._z,d=n._w;return this._x=i*d+s*o+r*u-a*l,this._y=r*d+s*l+a*o-i*u,this._z=a*d+s*u+i*l-r*o,this._w=s*d-i*o-r*l-a*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+i*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=r,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-n;return this._w=g*s+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*a+n*this._z,this.normalize(),this}const u=Math.sqrt(l),d=Math.atan2(u,o),f=Math.sin((1-n)*d)/u,p=Math.sin(n*d)/u;return this._w=s*f+this._w*p,this._x=i*f+this._x*p,this._y=r*f+this._y*p,this._z=a*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(n),a*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,n=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(fm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(fm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6]*r,this.y=a[1]*n+a[4]*i+a[7]*r,this.z=a[2]*n+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*n+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*n+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*n+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,u=2*(s*r-o*i),d=2*(o*n-a*r),f=2*(a*i-s*n);return this.x=n+l*u+s*f-o*d,this.y=i+l*d+o*u-a*f,this.z=r+l*f+a*d-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r,this.y=a[1]*n+a[5]*i+a[9]*r,this.z=a[2]*n+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,a=e.z,s=n.x,o=n.y,l=n.z;return this.x=r*l-a*o,this.y=a*s-i*l,this.z=i*o-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return su.copy(this).projectOnVector(e),this.sub(su)}reflect(e){return this.sub(su.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const su=new W,fm=new Ks;class Zs{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Tn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Tn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Tn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(n===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Tn):Tn.fromBufferAttribute(a,s),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),bo.copy(i.boundingBox)),bo.applyMatrix4(e.matrixWorld),this.union(bo)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(es),wo.subVectors(this.max,es),Br.subVectors(e.a,es),jr.subVectors(e.b,es),Vr.subVectors(e.c,es),wi.subVectors(jr,Br),Mi.subVectors(Vr,jr),rr.subVectors(Br,Vr);let n=[0,-wi.z,wi.y,0,-Mi.z,Mi.y,0,-rr.z,rr.y,wi.z,0,-wi.x,Mi.z,0,-Mi.x,rr.z,0,-rr.x,-wi.y,wi.x,0,-Mi.y,Mi.x,0,-rr.y,rr.x,0];return!ou(n,Br,jr,Vr,wo)||(n=[1,0,0,0,1,0,0,0,1],!ou(n,Br,jr,Vr,wo))?!1:(Mo.crossVectors(wi,Mi),n=[Mo.x,Mo.y,Mo.z],ou(n,Br,jr,Vr,wo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qn=[new W,new W,new W,new W,new W,new W,new W,new W],Tn=new W,bo=new Zs,Br=new W,jr=new W,Vr=new W,wi=new W,Mi=new W,rr=new W,es=new W,wo=new W,Mo=new W,ar=new W;function ou(t,e,n,i,r){for(let a=0,s=t.length-3;a<=s;a+=3){ar.fromArray(t,a);const o=r.x*Math.abs(ar.x)+r.y*Math.abs(ar.y)+r.z*Math.abs(ar.z),l=e.dot(ar),u=n.dot(ar),d=i.dot(ar);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>o)return!1}return!0}const zM=new Zs,ts=new W,lu=new W;class pf{constructor(e=new W,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):zM.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ts.subVectors(e,this.center);const n=ts.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ts,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ts.copy(e.center).add(lu)),this.expandByPoint(ts.copy(e.center).sub(lu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new W,cu=new W,Eo=new W,Ei=new W,uu=new W,Co=new W,du=new W;class BM{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ei.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,n),ei.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){cu.copy(e).add(n).multiplyScalar(.5),Eo.copy(n).sub(e).normalize(),Ei.copy(this.origin).sub(cu);const a=e.distanceTo(n)*.5,s=-this.direction.dot(Eo),o=Ei.dot(this.direction),l=-Ei.dot(Eo),u=Ei.lengthSq(),d=Math.abs(1-s*s);let f,p,g,y;if(d>0)if(f=s*l-o,p=s*o-l,y=a*d,f>=0)if(p>=-y)if(p<=y){const x=1/d;f*=x,p*=x,g=f*(f+s*p+2*o)+p*(s*f+p+2*l)+u}else p=a,f=Math.max(0,-(s*p+o)),g=-f*f+p*(p+2*l)+u;else p=-a,f=Math.max(0,-(s*p+o)),g=-f*f+p*(p+2*l)+u;else p<=-y?(f=Math.max(0,-(-s*a+o)),p=f>0?-a:Math.min(Math.max(-a,-l),a),g=-f*f+p*(p+2*l)+u):p<=y?(f=0,p=Math.min(Math.max(-a,-l),a),g=p*(p+2*l)+u):(f=Math.max(0,-(s*a+o)),p=f>0?a:Math.min(Math.max(-a,-l),a),g=-f*f+p*(p+2*l)+u);else p=s>0?-a:a,f=Math.max(0,-(s*p+o)),g=-f*f+p*(p+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(cu).addScaledVector(Eo,p),g}intersectSphere(e,n){ei.subVectors(e.center,this.origin);const i=ei.dot(this.direction),r=ei.dot(ei)-i*i,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,a,s,o,l;const u=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,p=this.origin;return u>=0?(i=(e.min.x-p.x)*u,r=(e.max.x-p.x)*u):(i=(e.max.x-p.x)*u,r=(e.min.x-p.x)*u),d>=0?(a=(e.min.y-p.y)*d,s=(e.max.y-p.y)*d):(a=(e.max.y-p.y)*d,s=(e.min.y-p.y)*d),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),f>=0?(o=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(o=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,n,i,r,a){uu.subVectors(n,e),Co.subVectors(i,e),du.crossVectors(uu,Co);let s=this.direction.dot(du),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Ei.subVectors(this.origin,e);const l=o*this.direction.dot(Co.crossVectors(Ei,Co));if(l<0)return null;const u=o*this.direction.dot(uu.cross(Ei));if(u<0||l+u>s)return null;const d=-o*Ei.dot(du);return d<0?null:this.at(d/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,n,i,r,a,s,o,l,u,d,f,p,g,y,x,m){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,a,s,o,l,u,d,f,p,g,y,x,m)}set(e,n,i,r,a,s,o,l,u,d,f,p,g,y,x,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=a,h[5]=s,h[9]=o,h[13]=l,h[2]=u,h[6]=d,h[10]=f,h[14]=p,h[3]=g,h[7]=y,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Hr.setFromMatrixColumn(e,0).length(),a=1/Hr.setFromMatrixColumn(e,1).length(),s=1/Hr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),d=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const p=s*d,g=s*f,y=o*d,x=o*f;n[0]=l*d,n[4]=-l*f,n[8]=u,n[1]=g+y*u,n[5]=p-x*u,n[9]=-o*l,n[2]=x-p*u,n[6]=y+g*u,n[10]=s*l}else if(e.order==="YXZ"){const p=l*d,g=l*f,y=u*d,x=u*f;n[0]=p+x*o,n[4]=y*o-g,n[8]=s*u,n[1]=s*f,n[5]=s*d,n[9]=-o,n[2]=g*o-y,n[6]=x+p*o,n[10]=s*l}else if(e.order==="ZXY"){const p=l*d,g=l*f,y=u*d,x=u*f;n[0]=p-x*o,n[4]=-s*f,n[8]=y+g*o,n[1]=g+y*o,n[5]=s*d,n[9]=x-p*o,n[2]=-s*u,n[6]=o,n[10]=s*l}else if(e.order==="ZYX"){const p=s*d,g=s*f,y=o*d,x=o*f;n[0]=l*d,n[4]=y*u-g,n[8]=p*u+x,n[1]=l*f,n[5]=x*u+p,n[9]=g*u-y,n[2]=-u,n[6]=o*l,n[10]=s*l}else if(e.order==="YZX"){const p=s*l,g=s*u,y=o*l,x=o*u;n[0]=l*d,n[4]=x-p*f,n[8]=y*f+g,n[1]=f,n[5]=s*d,n[9]=-o*d,n[2]=-u*d,n[6]=g*f+y,n[10]=p-x*f}else if(e.order==="XZY"){const p=s*l,g=s*u,y=o*l,x=o*u;n[0]=l*d,n[4]=-f,n[8]=u*d,n[1]=p*f+x,n[5]=s*d,n[9]=g*f-y,n[2]=y*f-g,n[6]=o*d,n[10]=x*f+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jM,e,VM)}lookAt(e,n,i){const r=this.elements;return on.subVectors(e,n),on.lengthSq()===0&&(on.z=1),on.normalize(),Ci.crossVectors(i,on),Ci.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Ci.crossVectors(i,on)),Ci.normalize(),To.crossVectors(on,Ci),r[0]=Ci.x,r[4]=To.x,r[8]=on.x,r[1]=Ci.y,r[5]=To.y,r[9]=on.y,r[2]=Ci.z,r[6]=To.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,s=i[0],o=i[4],l=i[8],u=i[12],d=i[1],f=i[5],p=i[9],g=i[13],y=i[2],x=i[6],m=i[10],h=i[14],v=i[3],_=i[7],M=i[11],P=i[15],A=r[0],E=r[4],w=r[8],S=r[12],b=r[1],T=r[5],z=r[9],N=r[13],D=r[2],B=r[6],H=r[10],$=r[14],k=r[3],K=r[7],J=r[11],ae=r[15];return a[0]=s*A+o*b+l*D+u*k,a[4]=s*E+o*T+l*B+u*K,a[8]=s*w+o*z+l*H+u*J,a[12]=s*S+o*N+l*$+u*ae,a[1]=d*A+f*b+p*D+g*k,a[5]=d*E+f*T+p*B+g*K,a[9]=d*w+f*z+p*H+g*J,a[13]=d*S+f*N+p*$+g*ae,a[2]=y*A+x*b+m*D+h*k,a[6]=y*E+x*T+m*B+h*K,a[10]=y*w+x*z+m*H+h*J,a[14]=y*S+x*N+m*$+h*ae,a[3]=v*A+_*b+M*D+P*k,a[7]=v*E+_*T+M*B+P*K,a[11]=v*w+_*z+M*H+P*J,a[15]=v*S+_*N+M*$+P*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],u=e[13],d=e[2],f=e[6],p=e[10],g=e[14],y=e[3],x=e[7],m=e[11],h=e[15];return y*(+a*l*f-r*u*f-a*o*p+i*u*p+r*o*g-i*l*g)+x*(+n*l*g-n*u*p+a*s*p-r*s*g+r*u*d-a*l*d)+m*(+n*u*f-n*o*g-a*s*f+i*s*g+a*o*d-i*u*d)+h*(-r*o*d-n*l*f+n*o*p+r*s*f-i*s*p+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],u=e[7],d=e[8],f=e[9],p=e[10],g=e[11],y=e[12],x=e[13],m=e[14],h=e[15],v=f*m*u-x*p*u+x*l*g-o*m*g-f*l*h+o*p*h,_=y*p*u-d*m*u-y*l*g+s*m*g+d*l*h-s*p*h,M=d*x*u-y*f*u+y*o*g-s*x*g-d*o*h+s*f*h,P=y*f*l-d*x*l-y*o*p+s*x*p+d*o*m-s*f*m,A=n*v+i*_+r*M+a*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return e[0]=v*E,e[1]=(x*p*a-f*m*a-x*r*g+i*m*g+f*r*h-i*p*h)*E,e[2]=(o*m*a-x*l*a+x*r*u-i*m*u-o*r*h+i*l*h)*E,e[3]=(f*l*a-o*p*a-f*r*u+i*p*u+o*r*g-i*l*g)*E,e[4]=_*E,e[5]=(d*m*a-y*p*a+y*r*g-n*m*g-d*r*h+n*p*h)*E,e[6]=(y*l*a-s*m*a-y*r*u+n*m*u+s*r*h-n*l*h)*E,e[7]=(s*p*a-d*l*a+d*r*u-n*p*u-s*r*g+n*l*g)*E,e[8]=M*E,e[9]=(y*f*a-d*x*a-y*i*g+n*x*g+d*i*h-n*f*h)*E,e[10]=(s*x*a-y*o*a+y*i*u-n*x*u-s*i*h+n*o*h)*E,e[11]=(d*o*a-s*f*a-d*i*u+n*f*u+s*i*g-n*o*g)*E,e[12]=P*E,e[13]=(d*x*r-y*f*r+y*i*p-n*x*p-d*i*m+n*f*m)*E,e[14]=(y*o*r-s*x*r-y*i*l+n*x*l+s*i*m-n*o*m)*E,e[15]=(s*f*r-d*o*r+d*i*l-n*f*l-s*i*p+n*o*p)*E,this}scale(e){const n=this.elements,i=e.x,r=e.y,a=e.z;return n[0]*=i,n[4]*=r,n[8]*=a,n[1]*=i,n[5]*=r,n[9]*=a,n[2]*=i,n[6]*=r,n[10]*=a,n[3]*=i,n[7]*=r,n[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),a=1-i,s=e.x,o=e.y,l=e.z,u=a*s,d=a*o;return this.set(u*s+i,u*o-r*l,u*l+r*o,0,u*o+r*l,d*o+i,d*l-r*s,0,u*l-r*o,d*l+r*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,a=n._x,s=n._y,o=n._z,l=n._w,u=a+a,d=s+s,f=o+o,p=a*u,g=a*d,y=a*f,x=s*d,m=s*f,h=o*f,v=l*u,_=l*d,M=l*f,P=i.x,A=i.y,E=i.z;return r[0]=(1-(x+h))*P,r[1]=(g+M)*P,r[2]=(y-_)*P,r[3]=0,r[4]=(g-M)*A,r[5]=(1-(p+h))*A,r[6]=(m+v)*A,r[7]=0,r[8]=(y+_)*E,r[9]=(m-v)*E,r[10]=(1-(p+x))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let a=Hr.set(r[0],r[1],r[2]).length();const s=Hr.set(r[4],r[5],r[6]).length(),o=Hr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],An.copy(this);const u=1/a,d=1/s,f=1/o;return An.elements[0]*=u,An.elements[1]*=u,An.elements[2]*=u,An.elements[4]*=d,An.elements[5]*=d,An.elements[6]*=d,An.elements[8]*=f,An.elements[9]*=f,An.elements[10]*=f,n.setFromRotationMatrix(An),i.x=a,i.y=s,i.z=o,this}makePerspective(e,n,i,r,a,s,o=di){const l=this.elements,u=2*a/(n-e),d=2*a/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let g,y;if(o===di)g=-(s+a)/(s-a),y=-2*s*a/(s-a);else if(o===Vl)g=-s/(s-a),y=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,a,s,o=di){const l=this.elements,u=1/(n-e),d=1/(i-r),f=1/(s-a),p=(n+e)*u,g=(i+r)*d;let y,x;if(o===di)y=(s+a)*f,x=-2*f;else if(o===Vl)y=a*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=x,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Hr=new W,An=new Et,jM=new W(0,0,0),VM=new W(1,1,1),Ci=new W,To=new W,on=new W,pm=new Et,mm=new Ks;class vi{constructor(e=0,n=0,i=0,r=vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],u=r[5],d=r[9],f=r[2],p=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Zt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return pm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return mm.setFromEuler(this),this.setFromQuaternion(mm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vi.DEFAULT_ORDER="XYZ";class nx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let HM=0;const gm=new W,Gr=new Ks,ti=new Et,Ao=new W,ns=new W,GM=new W,WM=new Ks,ym=new W(1,0,0),vm=new W(0,1,0),xm=new W(0,0,1),_m={type:"added"},qM={type:"removed"},Wr={type:"childadded",child:null},hu={type:"childremoved",child:null};class hn extends Va{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HM++}),this.uuid=Ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new W,n=new vi,i=new Ks,r=new W(1,1,1);function a(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new ze}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Gr.setFromAxisAngle(e,n),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(e,n){return Gr.setFromAxisAngle(e,n),this.quaternion.premultiply(Gr),this}rotateX(e){return this.rotateOnAxis(ym,e)}rotateY(e){return this.rotateOnAxis(vm,e)}rotateZ(e){return this.rotateOnAxis(xm,e)}translateOnAxis(e,n){return gm.copy(e).applyQuaternion(this.quaternion),this.position.add(gm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ym,e)}translateY(e){return this.translateOnAxis(vm,e)}translateZ(e){return this.translateOnAxis(xm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ao.copy(e):Ao.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(ns,Ao,this.up):ti.lookAt(Ao,ns,this.up),this.quaternion.setFromRotationMatrix(ti),r&&(ti.extractRotation(r.matrixWorld),Gr.setFromRotationMatrix(ti),this.quaternion.premultiply(Gr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_m),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(qM),hu.child=e,this.dispatchEvent(hu),hu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_m),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,e,GM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,WM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const f=l[u];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(n){const o=s(e.geometries),l=s(e.materials),u=s(e.textures),d=s(e.images),f=s(e.shapes),p=s(e.skeletons),g=s(e.animations),y=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),g.length>0&&(i.animations=g),y.length>0&&(i.nodes=y)}return i.object=r,i;function s(o){const l=[];for(const u in o){const d=o[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}hn.DEFAULT_UP=new W(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new W,ni=new W,fu=new W,ii=new W,qr=new W,Xr=new W,Sm=new W,pu=new W,mu=new W,gu=new W;class qn{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Rn.subVectors(e,n),r.cross(Rn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,n,i,r,a){Rn.subVectors(r,n),ni.subVectors(i,n),fu.subVectors(e,n);const s=Rn.dot(Rn),o=Rn.dot(ni),l=Rn.dot(fu),u=ni.dot(ni),d=ni.dot(fu),f=s*u-o*o;if(f===0)return a.set(0,0,0),null;const p=1/f,g=(u*l-o*d)*p,y=(s*d-o*l)*p;return a.set(1-g-y,y,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,n,i,r,a,s,o,l){return this.getBarycoord(e,n,i,r,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,ii.x),l.addScaledVector(s,ii.y),l.addScaledVector(o,ii.z),l)}static isFrontFacing(e,n,i,r){return Rn.subVectors(i,n),ni.subVectors(e,n),Rn.cross(ni).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Rn.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return qn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,a){return qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,a)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,a=this.c;let s,o;qr.subVectors(r,i),Xr.subVectors(a,i),pu.subVectors(e,i);const l=qr.dot(pu),u=Xr.dot(pu);if(l<=0&&u<=0)return n.copy(i);mu.subVectors(e,r);const d=qr.dot(mu),f=Xr.dot(mu);if(d>=0&&f<=d)return n.copy(r);const p=l*f-d*u;if(p<=0&&l>=0&&d<=0)return s=l/(l-d),n.copy(i).addScaledVector(qr,s);gu.subVectors(e,a);const g=qr.dot(gu),y=Xr.dot(gu);if(y>=0&&g<=y)return n.copy(a);const x=g*u-l*y;if(x<=0&&u>=0&&y<=0)return o=u/(u-y),n.copy(i).addScaledVector(Xr,o);const m=d*y-g*f;if(m<=0&&f-d>=0&&g-y>=0)return Sm.subVectors(a,r),o=(f-d)/(f-d+(g-y)),n.copy(r).addScaledVector(Sm,o);const h=1/(m+x+p);return s=x*h,o=p*h,n.copy(i).addScaledVector(qr,s).addScaledVector(Xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ix={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function yu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class tt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=PM(e,1),n=Zt(n,0,1),i=Zt(i,0,1),n===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+n):i+n-i*n,s=2*i-a;this.r=yu(s,a,e+1/3),this.g=yu(s,a,e),this.b=yu(s,a,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=Hn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Hn){const i=ix[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ma(e.r),this.g=Ma(e.g),this.b=Ma(e.b),this}copyLinearToSRGB(e){return this.r=ru(e.r),this.g=ru(e.g),this.b=ru(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return Qe.fromWorkingColorSpace(jt.copy(this),e),Math.round(Zt(jt.r*255,0,255))*65536+Math.round(Zt(jt.g*255,0,255))*256+Math.round(Zt(jt.b*255,0,255))}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(jt.copy(this),n);const i=jt.r,r=jt.g,a=jt.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let l,u;const d=(o+s)/2;if(o===s)l=0,u=0;else{const f=s-o;switch(u=d<=.5?f/(s+o):f/(2-s-o),s){case i:l=(r-a)/f+(r<a?6:0);break;case r:l=(a-i)/f+2;break;case a:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Hn){Qe.fromWorkingColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,r=jt.b;return e!==Hn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+n,Ti.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ti),e.getHSL(Ro);const i=nu(Ti.h,Ro.h,n),r=nu(Ti.s,Ro.s,n),a=nu(Ti.l,Ro.l,n);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*n+a[3]*i+a[6]*r,this.g=a[1]*n+a[4]*i+a[7]*r,this.b=a[2]*n+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new tt;tt.NAMES=ix;let XM=0;class hc extends Va{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XM++}),this.uuid=Ys(),this.name="",this.type="Material",this.blending=ba,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rd,this.blendDst=Pd,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Ol,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=om,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ba&&(i.blending=this.blending),this.side!==Zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Rd&&(i.blendSrc=this.blendSrc),this.blendDst!==Pd&&(i.blendDst=this.blendDst),this.blendEquation!==pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ol&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==om&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Or&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Or&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Or&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(n){const a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class rx extends hc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=Bv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new W,Po=new Ve;class Zn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=lm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return _s("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Po.fromBufferAttribute(this,n),Po.applyMatrix3(e),this.setXY(n,Po.x,Po.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix3(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix4(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyNormalMatrix(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.transformDirection(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ja(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Yt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ja(n,this.array)),n}setX(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ja(n,this.array)),n}setY(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ja(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ja(n,this.array)),n}setW(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array),r=Yt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,a){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array),r=Yt(r,this.array),a=Yt(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lm&&(e.usage=this.usage),e}}class ax extends Zn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class sx extends Zn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class wr extends Zn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let $M=0;const yn=new Et,vu=new hn,$r=new W,ln=new Zs,is=new Zs,At=new W;class Ur extends Va{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$M++}),this.uuid=Ys(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qv(e)?sx:ax)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new ze().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,n,i){return yn.makeTranslation(e,n,i),this.applyMatrix4(yn),this}scale(e,n,i){return yn.makeScale(e,n,i),this.applyMatrix4(yn),this}lookAt(e){return vu.lookAt(e),vu.updateMatrix(),this.applyMatrix4(vu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new wr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const a=n[i];ln.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),n)for(let a=0,s=n.length;a<s;a++){const o=n[a];is.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(ln.min,is.min),ln.expandByPoint(At),At.addVectors(ln.max,is.max),ln.expandByPoint(At)):(ln.expandByPoint(is.min),ln.expandByPoint(is.max))}ln.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)At.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(At));if(n)for(let a=0,s=n.length;a<s;a++){const o=n[a],l=this.morphTargetsRelative;for(let u=0,d=o.count;u<d;u++)At.fromBufferAttribute(o,u),l&&($r.fromBufferAttribute(e,u),At.add($r)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,a=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let w=0;w<i.count;w++)o[w]=new W,l[w]=new W;const u=new W,d=new W,f=new W,p=new Ve,g=new Ve,y=new Ve,x=new W,m=new W;function h(w,S,b){u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,S),f.fromBufferAttribute(i,b),p.fromBufferAttribute(a,w),g.fromBufferAttribute(a,S),y.fromBufferAttribute(a,b),d.sub(u),f.sub(u),g.sub(p),y.sub(p);const T=1/(g.x*y.y-y.x*g.y);isFinite(T)&&(x.copy(d).multiplyScalar(y.y).addScaledVector(f,-g.y).multiplyScalar(T),m.copy(f).multiplyScalar(g.x).addScaledVector(d,-y.x).multiplyScalar(T),o[w].add(x),o[S].add(x),o[b].add(x),l[w].add(m),l[S].add(m),l[b].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let w=0,S=v.length;w<S;++w){const b=v[w],T=b.start,z=b.count;for(let N=T,D=T+z;N<D;N+=3)h(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const _=new W,M=new W,P=new W,A=new W;function E(w){P.fromBufferAttribute(r,w),A.copy(P);const S=o[w];_.copy(S),_.sub(P.multiplyScalar(P.dot(S))).normalize(),M.crossVectors(A,S);const T=M.dot(l[w])<0?-1:1;s.setXYZW(w,_.x,_.y,_.z,T)}for(let w=0,S=v.length;w<S;++w){const b=v[w],T=b.start,z=b.count;for(let N=T,D=T+z;N<D;N+=3)E(e.getX(N+0)),E(e.getX(N+1)),E(e.getX(N+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,g=i.count;p<g;p++)i.setXYZ(p,0,0,0);const r=new W,a=new W,s=new W,o=new W,l=new W,u=new W,d=new W,f=new W;if(e)for(let p=0,g=e.count;p<g;p+=3){const y=e.getX(p+0),x=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(n,y),a.fromBufferAttribute(n,x),s.fromBufferAttribute(n,m),d.subVectors(s,a),f.subVectors(r,a),d.cross(f),o.fromBufferAttribute(i,y),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,m),o.add(d),l.add(d),u.add(d),i.setXYZ(y,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let p=0,g=n.count;p<g;p+=3)r.fromBufferAttribute(n,p+0),a.fromBufferAttribute(n,p+1),s.fromBufferAttribute(n,p+2),d.subVectors(s,a),f.subVectors(r,a),d.cross(f),i.setXYZ(p+0,d.x,d.y,d.z),i.setXYZ(p+1,d.x,d.y,d.z),i.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)At.fromBufferAttribute(e,n),At.normalize(),e.setXYZ(n,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const u=o.array,d=o.itemSize,f=o.normalized,p=new u.constructor(l.length*d);let g=0,y=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?g=l[x]*o.data.stride+o.offset:g=l[x]*d;for(let h=0;h<d;h++)p[y++]=u[g++]}return new Zn(p,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ur,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const a=this.morphAttributes;for(const o in a){const l=[],u=a[o];for(let d=0,f=u.length;d<f;d++){const p=u[d],g=e(p,i);l.push(g)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const u=s[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let f=0,p=u.length;f<p;f++){const g=u[f];d.push(g.toJSON(e.data))}d.length>0&&(r[l]=d,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(n))}const a=e.morphAttributes;for(const u in a){const d=[],f=a[u];for(let p=0,g=f.length;p<g;p++)d.push(f[p].clone(n));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,d=s.length;u<d;u++){const f=s[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bm=new Et,sr=new BM,No=new pf,wm=new W,Yr=new W,Kr=new W,Zr=new W,xu=new W,Io=new W,Do=new Ve,Lo=new Ve,Uo=new Ve,Mm=new W,Em=new W,Cm=new W,ko=new W,Fo=new W;class Xn extends hn{constructor(e=new Ur,n=new rx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){Io.set(0,0,0);for(let l=0,u=a.length;l<u;l++){const d=o[l],f=a[l];d!==0&&(xu.fromBufferAttribute(f,e),s?Io.addScaledVector(xu,d):Io.addScaledVector(xu.sub(n),d))}n.add(Io)}return n}raycast(e,n){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(a),sr.copy(e.ray).recast(e.near),!(No.containsPoint(sr.origin)===!1&&(sr.intersectSphere(No,wm)===null||sr.origin.distanceToSquared(wm)>(e.far-e.near)**2))&&(bm.copy(a).invert(),sr.copy(e.ray).applyMatrix4(bm),!(i.boundingBox!==null&&sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,sr)))}_computeIntersections(e,n,i){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,u=a.attributes.uv,d=a.attributes.uv1,f=a.attributes.normal,p=a.groups,g=a.drawRange;if(o!==null)if(Array.isArray(s))for(let y=0,x=p.length;y<x;y++){const m=p[y],h=s[m.materialIndex],v=Math.max(m.start,g.start),_=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let M=v,P=_;M<P;M+=3){const A=o.getX(M),E=o.getX(M+1),w=o.getX(M+2);r=Oo(this,h,e,i,u,d,f,A,E,w),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,g.start),x=Math.min(o.count,g.start+g.count);for(let m=y,h=x;m<h;m+=3){const v=o.getX(m),_=o.getX(m+1),M=o.getX(m+2);r=Oo(this,s,e,i,u,d,f,v,_,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let y=0,x=p.length;y<x;y++){const m=p[y],h=s[m.materialIndex],v=Math.max(m.start,g.start),_=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let M=v,P=_;M<P;M+=3){const A=M,E=M+1,w=M+2;r=Oo(this,h,e,i,u,d,f,A,E,w),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,g.start),x=Math.min(l.count,g.start+g.count);for(let m=y,h=x;m<h;m+=3){const v=m,_=m+1,M=m+2;r=Oo(this,s,e,i,u,d,f,v,_,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function YM(t,e,n,i,r,a,s,o){let l;if(e.side===nn?l=i.intersectTriangle(s,a,r,!0,o):l=i.intersectTriangle(r,a,s,e.side===Zi,o),l===null)return null;Fo.copy(o),Fo.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Fo);return u<n.near||u>n.far?null:{distance:u,point:Fo.clone(),object:t}}function Oo(t,e,n,i,r,a,s,o,l,u){t.getVertexPosition(o,Yr),t.getVertexPosition(l,Kr),t.getVertexPosition(u,Zr);const d=YM(t,e,n,i,Yr,Kr,Zr,ko);if(d){r&&(Do.fromBufferAttribute(r,o),Lo.fromBufferAttribute(r,l),Uo.fromBufferAttribute(r,u),d.uv=qn.getInterpolation(ko,Yr,Kr,Zr,Do,Lo,Uo,new Ve)),a&&(Do.fromBufferAttribute(a,o),Lo.fromBufferAttribute(a,l),Uo.fromBufferAttribute(a,u),d.uv1=qn.getInterpolation(ko,Yr,Kr,Zr,Do,Lo,Uo,new Ve)),s&&(Mm.fromBufferAttribute(s,o),Em.fromBufferAttribute(s,l),Cm.fromBufferAttribute(s,u),d.normal=qn.getInterpolation(ko,Yr,Kr,Zr,Mm,Em,Cm,new W),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new W,materialIndex:0};qn.getNormal(Yr,Kr,Zr,f.normal),d.face=f}return d}class Js extends Ur{constructor(e=1,n=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],u=[],d=[],f=[];let p=0,g=0;y("z","y","x",-1,-1,i,n,e,s,a,0),y("z","y","x",1,-1,i,n,-e,s,a,1),y("x","z","y",1,1,e,i,n,r,s,2),y("x","z","y",1,-1,e,i,-n,r,s,3),y("x","y","z",1,-1,e,n,i,r,a,4),y("x","y","z",-1,-1,e,n,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new wr(u,3)),this.setAttribute("normal",new wr(d,3)),this.setAttribute("uv",new wr(f,2));function y(x,m,h,v,_,M,P,A,E,w,S){const b=M/E,T=P/w,z=M/2,N=P/2,D=A/2,B=E+1,H=w+1;let $=0,k=0;const K=new W;for(let J=0;J<H;J++){const ae=J*T-N;for(let xe=0;xe<B;xe++){const ue=xe*b-z;K[x]=ue*v,K[m]=ae*_,K[h]=D,u.push(K.x,K.y,K.z),K[x]=0,K[m]=0,K[h]=A>0?1:-1,d.push(K.x,K.y,K.z),f.push(xe/E),f.push(1-J/w),$+=1}}for(let J=0;J<w;J++)for(let ae=0;ae<E;ae++){const xe=p+ae+B*J,ue=p+ae+B*(J+1),V=p+(ae+1)+B*(J+1),Y=p+(ae+1)+B*J;l.push(xe,ue,Y),l.push(ue,V,Y),k+=6}o.addGroup(g,k,S),g+=k,p+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fa(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Gt(t){const e={};for(let n=0;n<t.length;n++){const i=Fa(t[n]);for(const r in i)e[r]=i[r]}return e}function KM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function ox(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const ZM={clone:Fa,merge:Gt};var JM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,QM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends hc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JM,this.fragmentShader=QM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fa(e.uniforms),this.uniformsGroups=KM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class lx extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=di}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new W,Tm=new Ve,Am=new Ve;class Dn extends lx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=oh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oh*2*Math.atan(Math.tan(tu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,n){return this.getViewBounds(e,Tm,Am),n.subVectors(Am,Tm)}setViewOffset(e,n,i,r,a,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(tu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;a+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Jr=-90,Qr=1;class eE extends hn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Dn(Jr,Qr,e,n);r.layers=this.layers,this.add(r);const a=new Dn(Jr,Qr,e,n);a.layers=this.layers,this.add(a);const s=new Dn(Jr,Qr,e,n);s.layers=this.layers,this.add(s);const o=new Dn(Jr,Qr,e,n);o.layers=this.layers,this.add(o);const l=new Dn(Jr,Qr,e,n);l.layers=this.layers,this.add(l);const u=new Dn(Jr,Qr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,a,s,o,l]=n;for(const u of n)this.remove(u);if(e===di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,u,d]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,a),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,p,g),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class cx extends rn{constructor(e,n,i,r,a,s,o,l,u,d){e=e!==void 0?e:[],n=n!==void 0?n:Da,super(e,n,i,r,a,s,o,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tE extends Pr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new cx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ln}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Js(5,5,5),a=new xi({name:"CubemapFromEquirect",uniforms:Fa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Xi});a.uniforms.tEquirect.value=n;const s=new Xn(r,a),o=n.minFilter;return n.minFilter===_r&&(n.minFilter=Ln),new eE(1,10,this).update(e,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(a)}}const _u=new W,nE=new W,iE=new ze;class hr{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=_u.subVectors(i,n).cross(nE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(_u),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:n.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||iE.getNormalMatrix(e),r=this.coplanarPoint(_u).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const or=new pf,zo=new W;class ux{constructor(e=new hr,n=new hr,i=new hr,r=new hr,a=new hr,s=new hr){this.planes=[e,n,i,r,a,s]}set(e,n,i,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=di){const i=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],l=r[3],u=r[4],d=r[5],f=r[6],p=r[7],g=r[8],y=r[9],x=r[10],m=r[11],h=r[12],v=r[13],_=r[14],M=r[15];if(i[0].setComponents(l-a,p-u,m-g,M-h).normalize(),i[1].setComponents(l+a,p+u,m+g,M+h).normalize(),i[2].setComponents(l+s,p+d,m+y,M+v).normalize(),i[3].setComponents(l-s,p-d,m-y,M-v).normalize(),i[4].setComponents(l-o,p-f,m-x,M-_).normalize(),n===di)i[5].setComponents(l+o,p+f,m+x,M+_).normalize();else if(n===Vl)i[5].setComponents(o,f,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){return or.center.set(0,0,0),or.radius=.7071067811865476,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(zo.x=r.normal.x>0?e.max.x:e.min.x,zo.y=r.normal.y>0?e.max.y:e.min.y,zo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(zo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dx(){let t=null,e=!1,n=null,i=null;function r(a,s){n(a,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){n=a},setContext:function(a){t=a}}}function rE(t){const e=new WeakMap;function n(o,l){const u=o.array,d=o.usage,f=u.byteLength,p=t.createBuffer();t.bindBuffer(l,p),t.bufferData(l,u,d),o.onUploadCallback();let g;if(u instanceof Float32Array)g=t.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=t.SHORT;else if(u instanceof Uint32Array)g=t.UNSIGNED_INT;else if(u instanceof Int32Array)g=t.INT;else if(u instanceof Int8Array)g=t.BYTE;else if(u instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,u){const d=l.array,f=l._updateRange,p=l.updateRanges;if(t.bindBuffer(u,o),f.count===-1&&p.length===0&&t.bufferSubData(u,0,d),p.length!==0){for(let g=0,y=p.length;g<y;g++){const x=p[g];t.bufferSubData(u,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}f.count!==-1&&(t.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:a,update:s}}class Qs extends Ur{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const a=e/2,s=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,d=l+1,f=e/o,p=n/l,g=[],y=[],x=[],m=[];for(let h=0;h<d;h++){const v=h*p-s;for(let _=0;_<u;_++){const M=_*f-a;y.push(M,-v,0),x.push(0,0,1),m.push(_/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<o;v++){const _=v+u*h,M=v+u*(h+1),P=v+1+u*(h+1),A=v+1+u*h;g.push(_,M,A),g.push(M,P,A)}this.setIndex(g),this.setAttribute("position",new wr(y,3)),this.setAttribute("normal",new wr(x,3)),this.setAttribute("uv",new wr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.width,e.height,e.widthSegments,e.heightSegments)}}var aE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sE=`#ifdef USE_ALPHAHASH
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
#endif`,oE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dE=`#ifdef USE_AOMAP
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
#endif`,hE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fE=`#ifdef USE_BATCHING
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
#endif`,pE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vE=`#ifdef USE_IRIDESCENCE
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
#endif`,xE=`#ifdef USE_BUMPMAP
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
#endif`,_E=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,SE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ME=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,EE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,CE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,TE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,AE=`#define PI 3.141592653589793
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
} // validated`,RE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,PE=`vec3 transformedNormal = objectNormal;
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
#endif`,NE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,IE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,DE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,UE="gl_FragColor = linearToOutputTexel( gl_FragColor );",kE=`
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
}`,FE=`#ifdef USE_ENVMAP
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
#endif`,OE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zE=`#ifdef USE_ENVMAP
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
#endif`,BE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jE=`#ifdef USE_ENVMAP
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
#endif`,VE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,HE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,GE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,WE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qE=`#ifdef USE_GRADIENTMAP
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
}`,XE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$E=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,YE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,KE=`uniform bool receiveShadow;
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
#endif`,ZE=`#ifdef USE_ENVMAP
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
#endif`,JE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,QE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nC=`PhysicalMaterial material;
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
#endif`,iC=`struct PhysicalMaterial {
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
}`,rC=`
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
#endif`,aC=`#if defined( RE_IndirectDiffuse )
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
#endif`,sC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oC=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lC=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cC=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uC=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pC=`#if defined( USE_POINTS_UV )
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
#endif`,mC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_C=`#ifdef USE_MORPHTARGETS
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
#endif`,SC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,MC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,TC=`#ifdef USE_NORMALMAP
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
#endif`,AC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,NC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,IC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,LC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,UC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,VC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,HC=`float getShadowMask() {
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
}`,GC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,WC=`#ifdef USE_SKINNING
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
#endif`,qC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,XC=`#ifdef USE_SKINNING
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
#endif`,$C=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,YC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,KC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,JC=`#ifdef USE_TRANSMISSION
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
#endif`,QC=`#ifdef USE_TRANSMISSION
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
#endif`,e1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const r1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,a1=`uniform sampler2D t2D;
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
}`,s1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,l1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u1=`#include <common>
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
}`,d1=`#if DEPTH_PACKING == 3200
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
}`,h1=`#define DISTANCE
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
}`,f1=`#define DISTANCE
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
}`,p1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,m1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g1=`uniform float scale;
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
}`,y1=`uniform vec3 diffuse;
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
}`,v1=`#include <common>
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
}`,x1=`uniform vec3 diffuse;
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
}`,_1=`#define LAMBERT
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
}`,S1=`#define LAMBERT
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
}`,b1=`#define MATCAP
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
}`,w1=`#define MATCAP
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
}`,M1=`#define NORMAL
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
}`,E1=`#define NORMAL
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
}`,C1=`#define PHONG
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
}`,T1=`#define PHONG
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
}`,A1=`#define STANDARD
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
}`,R1=`#define STANDARD
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
}`,P1=`#define TOON
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
}`,N1=`#define TOON
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
}`,I1=`uniform float size;
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
}`,D1=`uniform vec3 diffuse;
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
}`,L1=`#include <common>
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
}`,U1=`uniform vec3 color;
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
}`,k1=`uniform float rotation;
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
}`,F1=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:aE,alphahash_pars_fragment:sE,alphamap_fragment:oE,alphamap_pars_fragment:lE,alphatest_fragment:cE,alphatest_pars_fragment:uE,aomap_fragment:dE,aomap_pars_fragment:hE,batching_pars_vertex:fE,batching_vertex:pE,begin_vertex:mE,beginnormal_vertex:gE,bsdfs:yE,iridescence_fragment:vE,bumpmap_pars_fragment:xE,clipping_planes_fragment:_E,clipping_planes_pars_fragment:SE,clipping_planes_pars_vertex:bE,clipping_planes_vertex:wE,color_fragment:ME,color_pars_fragment:EE,color_pars_vertex:CE,color_vertex:TE,common:AE,cube_uv_reflection_fragment:RE,defaultnormal_vertex:PE,displacementmap_pars_vertex:NE,displacementmap_vertex:IE,emissivemap_fragment:DE,emissivemap_pars_fragment:LE,colorspace_fragment:UE,colorspace_pars_fragment:kE,envmap_fragment:FE,envmap_common_pars_fragment:OE,envmap_pars_fragment:zE,envmap_pars_vertex:BE,envmap_physical_pars_fragment:ZE,envmap_vertex:jE,fog_vertex:VE,fog_pars_vertex:HE,fog_fragment:GE,fog_pars_fragment:WE,gradientmap_pars_fragment:qE,lightmap_pars_fragment:XE,lights_lambert_fragment:$E,lights_lambert_pars_fragment:YE,lights_pars_begin:KE,lights_toon_fragment:JE,lights_toon_pars_fragment:QE,lights_phong_fragment:eC,lights_phong_pars_fragment:tC,lights_physical_fragment:nC,lights_physical_pars_fragment:iC,lights_fragment_begin:rC,lights_fragment_maps:aC,lights_fragment_end:sC,logdepthbuf_fragment:oC,logdepthbuf_pars_fragment:lC,logdepthbuf_pars_vertex:cC,logdepthbuf_vertex:uC,map_fragment:dC,map_pars_fragment:hC,map_particle_fragment:fC,map_particle_pars_fragment:pC,metalnessmap_fragment:mC,metalnessmap_pars_fragment:gC,morphinstance_vertex:yC,morphcolor_vertex:vC,morphnormal_vertex:xC,morphtarget_pars_vertex:_C,morphtarget_vertex:SC,normal_fragment_begin:bC,normal_fragment_maps:wC,normal_pars_fragment:MC,normal_pars_vertex:EC,normal_vertex:CC,normalmap_pars_fragment:TC,clearcoat_normal_fragment_begin:AC,clearcoat_normal_fragment_maps:RC,clearcoat_pars_fragment:PC,iridescence_pars_fragment:NC,opaque_fragment:IC,packing:DC,premultiplied_alpha_fragment:LC,project_vertex:UC,dithering_fragment:kC,dithering_pars_fragment:FC,roughnessmap_fragment:OC,roughnessmap_pars_fragment:zC,shadowmap_pars_fragment:BC,shadowmap_pars_vertex:jC,shadowmap_vertex:VC,shadowmask_pars_fragment:HC,skinbase_vertex:GC,skinning_pars_vertex:WC,skinning_vertex:qC,skinnormal_vertex:XC,specularmap_fragment:$C,specularmap_pars_fragment:YC,tonemapping_fragment:KC,tonemapping_pars_fragment:ZC,transmission_fragment:JC,transmission_pars_fragment:QC,uv_pars_fragment:e1,uv_pars_vertex:t1,uv_vertex:n1,worldpos_vertex:i1,background_vert:r1,background_frag:a1,backgroundCube_vert:s1,backgroundCube_frag:o1,cube_vert:l1,cube_frag:c1,depth_vert:u1,depth_frag:d1,distanceRGBA_vert:h1,distanceRGBA_frag:f1,equirect_vert:p1,equirect_frag:m1,linedashed_vert:g1,linedashed_frag:y1,meshbasic_vert:v1,meshbasic_frag:x1,meshlambert_vert:_1,meshlambert_frag:S1,meshmatcap_vert:b1,meshmatcap_frag:w1,meshnormal_vert:M1,meshnormal_frag:E1,meshphong_vert:C1,meshphong_frag:T1,meshphysical_vert:A1,meshphysical_frag:R1,meshtoon_vert:P1,meshtoon_frag:N1,points_vert:I1,points_frag:D1,shadow_vert:L1,shadow_frag:U1,sprite_vert:k1,sprite_frag:F1},he={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Gn={basic:{uniforms:Gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new tt(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Gt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Gt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new tt(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Gt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Gt([he.points,he.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Gt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Gt([he.common,he.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Gt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Gt([he.sprite,he.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Gt([he.common,he.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Gt([he.lights,he.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Gn.physical={uniforms:Gt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Bo={r:0,b:0,g:0},lr=new vi,O1=new Et;function z1(t,e,n,i,r,a,s){const o=new tt(0);let l=a===!0?0:1,u,d,f=null,p=0,g=null;function y(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?n:e).get(_)),_}function x(v){let _=!1;const M=y(v);M===null?h(o,l):M&&M.isColor&&(h(M,1),_=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,s):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,_){const M=y(_);M&&(M.isCubeTexture||M.mapping===uc)?(d===void 0&&(d=new Xn(new Js(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:Fa(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),lr.copy(_.backgroundRotation),lr.x*=-1,lr.y*=-1,lr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),d.material.uniforms.envMap.value=M,d.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(O1.makeRotationFromEuler(lr)),d.material.toneMapped=Qe.getTransfer(M.colorSpace)!==rt,(f!==M||p!==M.version||g!==t.toneMapping)&&(d.material.needsUpdate=!0,f=M,p=M.version,g=t.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):M&&M.isTexture&&(u===void 0&&(u=new Xn(new Qs(2,2),new xi({name:"BackgroundMaterial",uniforms:Fa(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=M,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=Qe.getTransfer(M.colorSpace)!==rt,M.matrixAutoUpdate===!0&&M.updateMatrix(),u.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||p!==M.version||g!==t.toneMapping)&&(u.material.needsUpdate=!0,f=M,p=M.version,g=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function h(v,_){v.getRGB(Bo,ox(t)),i.buffers.color.setClear(Bo.r,Bo.g,Bo.b,_,s)}return{getClearColor:function(){return o},setClearColor:function(v,_=1){o.set(v),l=_,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,h(o,l)},render:x,addToRenderList:m}}function B1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=p(null);let a=r,s=!1;function o(b,T,z,N,D){let B=!1;const H=f(N,z,T);a!==H&&(a=H,u(a.object)),B=g(b,N,z,D),B&&y(b,N,z,D),D!==null&&e.update(D,t.ELEMENT_ARRAY_BUFFER),(B||s)&&(s=!1,M(b,T,z,N),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return t.createVertexArray()}function u(b){return t.bindVertexArray(b)}function d(b){return t.deleteVertexArray(b)}function f(b,T,z){const N=z.wireframe===!0;let D=i[b.id];D===void 0&&(D={},i[b.id]=D);let B=D[T.id];B===void 0&&(B={},D[T.id]=B);let H=B[N];return H===void 0&&(H=p(l()),B[N]=H),H}function p(b){const T=[],z=[],N=[];for(let D=0;D<n;D++)T[D]=0,z[D]=0,N[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:z,attributeDivisors:N,object:b,attributes:{},index:null}}function g(b,T,z,N){const D=a.attributes,B=T.attributes;let H=0;const $=z.getAttributes();for(const k in $)if($[k].location>=0){const J=D[k];let ae=B[k];if(ae===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(ae=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(ae=b.instanceColor)),J===void 0||J.attribute!==ae||ae&&J.data!==ae.data)return!0;H++}return a.attributesNum!==H||a.index!==N}function y(b,T,z,N){const D={},B=T.attributes;let H=0;const $=z.getAttributes();for(const k in $)if($[k].location>=0){let J=B[k];J===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(J=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(J=b.instanceColor));const ae={};ae.attribute=J,J&&J.data&&(ae.data=J.data),D[k]=ae,H++}a.attributes=D,a.attributesNum=H,a.index=N}function x(){const b=a.newAttributes;for(let T=0,z=b.length;T<z;T++)b[T]=0}function m(b){h(b,0)}function h(b,T){const z=a.newAttributes,N=a.enabledAttributes,D=a.attributeDivisors;z[b]=1,N[b]===0&&(t.enableVertexAttribArray(b),N[b]=1),D[b]!==T&&(t.vertexAttribDivisor(b,T),D[b]=T)}function v(){const b=a.newAttributes,T=a.enabledAttributes;for(let z=0,N=T.length;z<N;z++)T[z]!==b[z]&&(t.disableVertexAttribArray(z),T[z]=0)}function _(b,T,z,N,D,B,H){H===!0?t.vertexAttribIPointer(b,T,z,D,B):t.vertexAttribPointer(b,T,z,N,D,B)}function M(b,T,z,N){x();const D=N.attributes,B=z.getAttributes(),H=T.defaultAttributeValues;for(const $ in B){const k=B[$];if(k.location>=0){let K=D[$];if(K===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(K=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(K=b.instanceColor)),K!==void 0){const J=K.normalized,ae=K.itemSize,xe=e.get(K);if(xe===void 0)continue;const ue=xe.buffer,V=xe.type,Y=xe.bytesPerElement,ne=V===t.INT||V===t.UNSIGNED_INT||K.gpuType===of;if(K.isInterleavedBufferAttribute){const se=K.data,be=se.stride,we=K.offset;if(se.isInstancedInterleavedBuffer){for(let Ae=0;Ae<k.locationSize;Ae++)h(k.location+Ae,se.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ae=0;Ae<k.locationSize;Ae++)m(k.location+Ae);t.bindBuffer(t.ARRAY_BUFFER,ue);for(let Ae=0;Ae<k.locationSize;Ae++)_(k.location+Ae,ae/k.locationSize,V,J,be*Y,(we+ae/k.locationSize*Ae)*Y,ne)}else{if(K.isInstancedBufferAttribute){for(let se=0;se<k.locationSize;se++)h(k.location+se,K.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let se=0;se<k.locationSize;se++)m(k.location+se);t.bindBuffer(t.ARRAY_BUFFER,ue);for(let se=0;se<k.locationSize;se++)_(k.location+se,ae/k.locationSize,V,J,ae*Y,ae/k.locationSize*se*Y,ne)}}else if(H!==void 0){const J=H[$];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(k.location,J);break;case 3:t.vertexAttrib3fv(k.location,J);break;case 4:t.vertexAttrib4fv(k.location,J);break;default:t.vertexAttrib1fv(k.location,J)}}}}v()}function P(){w();for(const b in i){const T=i[b];for(const z in T){const N=T[z];for(const D in N)d(N[D].object),delete N[D];delete T[z]}delete i[b]}}function A(b){if(i[b.id]===void 0)return;const T=i[b.id];for(const z in T){const N=T[z];for(const D in N)d(N[D].object),delete N[D];delete T[z]}delete i[b.id]}function E(b){for(const T in i){const z=i[T];if(z[b.id]===void 0)continue;const N=z[b.id];for(const D in N)d(N[D].object),delete N[D];delete z[b.id]}}function w(){S(),s=!0,a!==r&&(a=r,u(a.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:w,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function j1(t,e,n){let i;function r(u){i=u}function a(u,d){t.drawArrays(i,u,d),n.update(d,i,1)}function s(u,d,f){f!==0&&(t.drawArraysInstanced(i,u,d,f),n.update(d,i,f))}function o(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,d,0,f);let g=0;for(let y=0;y<f;y++)g+=d[y];n.update(g,i,1)}function l(u,d,f,p){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<u.length;y++)s(u[y],d[y],p[y]);else{g.multiDrawArraysInstancedWEBGL(i,u,0,d,0,p,0,f);let y=0;for(let x=0;x<f;x++)y+=d[x];for(let x=0;x<p.length;x++)n.update(y,i,p[x])}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function V1(t,e,n,i){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(A){return!(A!==kn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const E=A===$s&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==yi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ui&&!E)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const d=l(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const f=n.logarithmicDepthBuffer===!0,p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),h=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=g>0,P=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:h,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:M,maxSamples:P}}function H1(t){const e=this;let n=null,i=0,r=!1,a=!1;const s=new hr,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const g=f.length!==0||p||i!==0||r;return r=p,i=f.length,g},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,p){n=d(f,p,0)},this.setState=function(f,p,g){const y=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||y===null||y.length===0||a&&!m)a?d(null):u();else{const v=a?0:i,_=v*4;let M=h.clippingState||null;l.value=M,M=d(y,p,_,g);for(let P=0;P!==_;++P)M[P]=n[P];h.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,p,g,y){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,y!==!0||m===null){const h=g+x*4,v=p.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let _=0,M=g;_!==x;++_,M+=4)s.copy(f[_]).applyMatrix4(v,o),s.normal.toArray(m,M),m[M+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function G1(t){let e=new WeakMap;function n(s,o){return o===Nd?s.mapping=Da:o===Id&&(s.mapping=La),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===Nd||o===Id)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new tE(l.height);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",r),n(u.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class hx extends lx{constructor(e=-1,n=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,s=a+u*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const pa=4,Rm=[.125,.215,.35,.446,.526,.582],mr=20,Su=new hx,Pm=new tt;let bu=null,wu=0,Mu=0,Eu=!1;const fr=(1+Math.sqrt(5))/2,ea=1/fr,Nm=[new W(-fr,ea,0),new W(fr,ea,0),new W(-ea,0,fr),new W(ea,0,fr),new W(0,fr,-ea),new W(0,fr,ea),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class Im{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){bu=this._renderer.getRenderTarget(),wu=this._renderer.getActiveCubeFace(),Mu=this._renderer.getActiveMipmapLevel(),Eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),n>0&&this._blur(a,0,0,n),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Um(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bu,wu,Mu),this._renderer.xr.enabled=Eu,e.scissorTest=!1,jo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Da||e.mapping===La?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bu=this._renderer.getRenderTarget(),wu=this._renderer.getActiveCubeFace(),Mu=this._renderer.getActiveMipmapLevel(),Eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:$s,format:kn,colorSpace:nr,depthBuffer:!1},r=Dm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dm(e,n,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=W1(a)),this._blurMaterial=q1(a,e,n)}return r}_compileMaterial(e){const n=new Xn(this._lodPlanes[0],e);this._renderer.compile(n,Su)}_sceneToCubeUV(e,n,i,r){const o=new Dn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Pm),d.toneMapping=$i,d.autoClear=!1;const g=new rx({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),y=new Xn(new Js,g);let x=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,x=!0):(g.color.copy(Pm),x=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(o.up.set(0,l[h],0),o.lookAt(u[h],0,0)):v===1?(o.up.set(0,0,l[h]),o.lookAt(0,u[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,u[h]));const _=this._cubeSize;jo(r,v*_,h>2?_:0,_,_),d.setRenderTarget(r),x&&d.render(y,o),d.render(e,o)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Da||e.mapping===La;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Um()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lm());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new Xn(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;jo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Su)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Nm[(r-a-1)%Nm.length];this._blur(e,a-1,a,s,o)}n.autoClear=i}_blur(e,n,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,n,i,r,a,s,o){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Xn(this._lodPlanes[r],u),p=u.uniforms,g=this._sizeLods[i]-1,y=isFinite(a)?Math.PI/(2*g):2*Math.PI/(2*mr-1),x=a/y,m=isFinite(a)?1+Math.floor(d*x):mr;m>mr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mr}`);const h=[];let v=0;for(let E=0;E<mr;++E){const w=E/x,S=Math.exp(-w*w/2);h.push(S),E===0?v+=S:E<m&&(v+=2*S)}for(let E=0;E<h.length;E++)h[E]=h[E]/v;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=h,p.latitudinal.value=s==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:_}=this;p.dTheta.value=y,p.mipInt.value=_-i;const M=this._sizeLods[r],P=3*M*(r>_-pa?r-_+pa:0),A=4*(this._cubeSize-M);jo(n,P,A,3*M,2*M),l.setRenderTarget(n),l.render(f,Su)}}function W1(t){const e=[],n=[],i=[];let r=t;const a=t-pa+1+Rm.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);n.push(o);let l=1/o;s>t-pa?l=Rm[s-t+pa-1]:s===0&&(l=0),i.push(l);const u=1/(o-2),d=-u,f=1+u,p=[d,d,f,d,f,f,d,d,f,f,d,f],g=6,y=6,x=3,m=2,h=1,v=new Float32Array(x*y*g),_=new Float32Array(m*y*g),M=new Float32Array(h*y*g);for(let A=0;A<g;A++){const E=A%3*2/3-1,w=A>2?0:-1,S=[E,w,0,E+2/3,w,0,E+2/3,w+1,0,E,w,0,E+2/3,w+1,0,E,w+1,0];v.set(S,x*y*A),_.set(p,m*y*A);const b=[A,A,A,A,A,A];M.set(b,h*y*A)}const P=new Ur;P.setAttribute("position",new Zn(v,x)),P.setAttribute("uv",new Zn(_,m)),P.setAttribute("faceIndex",new Zn(M,h)),e.push(P),r>pa&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Dm(t,e,n){const i=new Pr(t,e,n);return i.texture.mapping=uc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function q1(t,e,n){const i=new Float32Array(mr),r=new W(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:mf(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Lm(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mf(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Um(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function mf(){return`

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
	`}function X1(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===Nd||l===Id,d=l===Da||l===La;if(u||d){let f=e.get(o);const p=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return n===null&&(n=new Im(t)),f=u?n.fromEquirectangular(o,f):n.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const g=o.image;return u&&g&&g.height>0||d&&g&&r(g)?(n===null&&(n=new Im(t)),f=u?n.fromEquirectangular(o):n.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",a),f.texture):null}}}return o}function r(o){let l=0;const u=6;for(let d=0;d<u;d++)o[d]!==void 0&&l++;return l===u}function a(o){const l=o.target;l.removeEventListener("dispose",a);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function $1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&_s("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Y1(t,e,n,i){const r={},a=new WeakMap;function s(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const y in p.attributes)e.remove(p.attributes[y]);for(const y in p.morphAttributes){const x=p.morphAttributes[y];for(let m=0,h=x.length;m<h;m++)e.remove(x[m])}p.removeEventListener("dispose",s),delete r[p.id];const g=a.get(p);g&&(e.remove(g),a.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function o(f,p){return r[p.id]===!0||(p.addEventListener("dispose",s),r[p.id]=!0,n.memory.geometries++),p}function l(f){const p=f.attributes;for(const y in p)e.update(p[y],t.ARRAY_BUFFER);const g=f.morphAttributes;for(const y in g){const x=g[y];for(let m=0,h=x.length;m<h;m++)e.update(x[m],t.ARRAY_BUFFER)}}function u(f){const p=[],g=f.index,y=f.attributes.position;let x=0;if(g!==null){const v=g.array;x=g.version;for(let _=0,M=v.length;_<M;_+=3){const P=v[_+0],A=v[_+1],E=v[_+2];p.push(P,A,A,E,E,P)}}else if(y!==void 0){const v=y.array;x=y.version;for(let _=0,M=v.length/3-1;_<M;_+=3){const P=_+0,A=_+1,E=_+2;p.push(P,A,A,E,E,P)}}else return;const m=new(Qv(p)?sx:ax)(p,1);m.version=x;const h=a.get(f);h&&e.remove(h),a.set(f,m)}function d(f){const p=a.get(f);if(p){const g=f.index;g!==null&&p.version<g.version&&u(f)}else u(f);return a.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function K1(t,e,n){let i;function r(p){i=p}let a,s;function o(p){a=p.type,s=p.bytesPerElement}function l(p,g){t.drawElements(i,g,a,p*s),n.update(g,i,1)}function u(p,g,y){y!==0&&(t.drawElementsInstanced(i,g,a,p*s,y),n.update(g,i,y))}function d(p,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,a,p,0,y);let m=0;for(let h=0;h<y;h++)m+=g[h];n.update(m,i,1)}function f(p,g,y,x){if(y===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<p.length;h++)u(p[h]/s,g[h],x[h]);else{m.multiDrawElementsInstancedWEBGL(i,g,0,a,p,0,x,0,y);let h=0;for(let v=0;v<y;v++)h+=g[v];for(let v=0;v<x.length;v++)n.update(h,i,x[v])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function Z1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=o*(a/3);break;case t.LINES:n.lines+=o*(a/2);break;case t.LINE_STRIP:n.lines+=o*(a-1);break;case t.LINE_LOOP:n.lines+=o*a;break;case t.POINTS:n.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function J1(t,e,n){const i=new WeakMap,r=new Nt;function a(s,o,l){const u=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let p=i.get(o);if(p===void 0||p.count!==f){let b=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",b)};var g=b;p!==void 0&&p.texture.dispose();const y=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let M=0;y===!0&&(M=1),x===!0&&(M=2),m===!0&&(M=3);let P=o.attributes.position.count*M,A=1;P>e.maxTextureSize&&(A=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const E=new Float32Array(P*A*4*f),w=new tx(E,P,A,f);w.type=ui,w.needsUpdate=!0;const S=M*4;for(let T=0;T<f;T++){const z=h[T],N=v[T],D=_[T],B=P*A*4*T;for(let H=0;H<z.count;H++){const $=H*S;y===!0&&(r.fromBufferAttribute(z,H),E[B+$+0]=r.x,E[B+$+1]=r.y,E[B+$+2]=r.z,E[B+$+3]=0),x===!0&&(r.fromBufferAttribute(N,H),E[B+$+4]=r.x,E[B+$+5]=r.y,E[B+$+6]=r.z,E[B+$+7]=0),m===!0&&(r.fromBufferAttribute(D,H),E[B+$+8]=r.x,E[B+$+9]=r.y,E[B+$+10]=r.z,E[B+$+11]=D.itemSize===4?r.w:1)}}p={count:f,texture:w,size:new Ve(P,A)},i.set(o,p),o.addEventListener("dispose",b)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let y=0;for(let m=0;m<u.length;m++)y+=u[m];const x=o.morphTargetsRelative?1:1-y;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}return{update:a}}function Q1(t,e,n,i){let r=new WeakMap;function a(l){const u=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return f}function s(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:s}}class fx extends rn{constructor(e,n,i,r,a,s,o,l,u,d=wa){if(d!==wa&&d!==ka)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===wa&&(i=Rr),i===void 0&&d===ka&&(i=Ua),super(null,r,a,s,o,l,d,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Sn,this.minFilter=l!==void 0?l:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const px=new rn,km=new fx(1,1),mx=new tx,gx=new OM,yx=new cx,Fm=[],Om=[],zm=new Float32Array(16),Bm=new Float32Array(9),jm=new Float32Array(4);function Ha(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let a=Fm[r];if(a===void 0&&(a=new Float32Array(r),Fm[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=n,t[s].toArray(a,o)}return a}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Tt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function fc(t,e){let n=Om[e];n===void 0&&(n=new Int32Array(e),Om[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function eT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function tT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),Tt(n,e)}}function nT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),Tt(n,e)}}function iT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),Tt(n,e)}}function rT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Tt(n,e)}else{if(Ct(n,i))return;jm.set(i),t.uniformMatrix2fv(this.addr,!1,jm),Tt(n,i)}}function aT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Tt(n,e)}else{if(Ct(n,i))return;Bm.set(i),t.uniformMatrix3fv(this.addr,!1,Bm),Tt(n,i)}}function sT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Tt(n,e)}else{if(Ct(n,i))return;zm.set(i),t.uniformMatrix4fv(this.addr,!1,zm),Tt(n,i)}}function oT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function lT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),Tt(n,e)}}function cT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),Tt(n,e)}}function uT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),Tt(n,e)}}function dT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function hT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),Tt(n,e)}}function fT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),Tt(n,e)}}function pT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),Tt(n,e)}}function mT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let a;this.type===t.SAMPLER_2D_SHADOW?(km.compareFunction=Jv,a=km):a=px,n.setTexture2D(e||a,r)}function gT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||gx,r)}function yT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||yx,r)}function vT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||mx,r)}function xT(t){switch(t){case 5126:return eT;case 35664:return tT;case 35665:return nT;case 35666:return iT;case 35674:return rT;case 35675:return aT;case 35676:return sT;case 5124:case 35670:return oT;case 35667:case 35671:return lT;case 35668:case 35672:return cT;case 35669:case 35673:return uT;case 5125:return dT;case 36294:return hT;case 36295:return fT;case 36296:return pT;case 35678:case 36198:case 36298:case 36306:case 35682:return mT;case 35679:case 36299:case 36307:return gT;case 35680:case 36300:case 36308:case 36293:return yT;case 36289:case 36303:case 36311:case 36292:return vT}}function _T(t,e){t.uniform1fv(this.addr,e)}function ST(t,e){const n=Ha(e,this.size,2);t.uniform2fv(this.addr,n)}function bT(t,e){const n=Ha(e,this.size,3);t.uniform3fv(this.addr,n)}function wT(t,e){const n=Ha(e,this.size,4);t.uniform4fv(this.addr,n)}function MT(t,e){const n=Ha(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ET(t,e){const n=Ha(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function CT(t,e){const n=Ha(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function TT(t,e){t.uniform1iv(this.addr,e)}function AT(t,e){t.uniform2iv(this.addr,e)}function RT(t,e){t.uniform3iv(this.addr,e)}function PT(t,e){t.uniform4iv(this.addr,e)}function NT(t,e){t.uniform1uiv(this.addr,e)}function IT(t,e){t.uniform2uiv(this.addr,e)}function DT(t,e){t.uniform3uiv(this.addr,e)}function LT(t,e){t.uniform4uiv(this.addr,e)}function UT(t,e,n){const i=this.cache,r=e.length,a=fc(n,r);Ct(i,a)||(t.uniform1iv(this.addr,a),Tt(i,a));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||px,a[s])}function kT(t,e,n){const i=this.cache,r=e.length,a=fc(n,r);Ct(i,a)||(t.uniform1iv(this.addr,a),Tt(i,a));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||gx,a[s])}function FT(t,e,n){const i=this.cache,r=e.length,a=fc(n,r);Ct(i,a)||(t.uniform1iv(this.addr,a),Tt(i,a));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||yx,a[s])}function OT(t,e,n){const i=this.cache,r=e.length,a=fc(n,r);Ct(i,a)||(t.uniform1iv(this.addr,a),Tt(i,a));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||mx,a[s])}function zT(t){switch(t){case 5126:return _T;case 35664:return ST;case 35665:return bT;case 35666:return wT;case 35674:return MT;case 35675:return ET;case 35676:return CT;case 5124:case 35670:return TT;case 35667:case 35671:return AT;case 35668:case 35672:return RT;case 35669:case 35673:return PT;case 5125:return NT;case 36294:return IT;case 36295:return DT;case 36296:return LT;case 35678:case 36198:case 36298:case 36306:case 35682:return UT;case 35679:case 36299:case 36307:return kT;case 35680:case 36300:case 36308:case 36293:return FT;case 36289:case 36303:case 36311:case 36292:return OT}}class BT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=xT(n.type)}}class jT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=zT(n.type)}}class VT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,n[o.id],i)}}}const Cu=/(\w+)(\])?(\[|\.)?/g;function Vm(t,e){t.seq.push(e),t.map[e.id]=e}function HT(t,e,n){const i=t.name,r=i.length;for(Cu.lastIndex=0;;){const a=Cu.exec(i),s=Cu.lastIndex;let o=a[1];const l=a[2]==="]",u=a[3];if(l&&(o=o|0),u===void 0||u==="["&&s+2===r){Vm(n,u===void 0?new BT(o,t,e):new jT(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new VT(o),Vm(n,f)),n=f}}}class cl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(n,r),s=e.getUniformLocation(n,a.name);HT(a,s,this)}}setValue(e,n,i,r){const a=this.map[n];a!==void 0&&a.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let a=0,s=n.length;a!==s;++a){const o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function Hm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const GT=37297;let WT=0;function qT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,n.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}function XT(t){const e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t);let i;switch(e===n?i="":e===jl&&n===Bl?i="LinearDisplayP3ToLinearSRGB":e===Bl&&n===jl&&(i="LinearSRGBToLinearDisplayP3"),t){case nr:case dc:return[i,"LinearTransferOETF"];case Hn:case ff:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Gm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+qT(t.getShaderSource(e),s)}else return r}function $T(t,e){const n=XT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function YT(t,e){let n;switch(e){case dM:n="Linear";break;case hM:n="Reinhard";break;case fM:n="OptimizedCineon";break;case pM:n="ACESFilmic";break;case gM:n="AgX";break;case yM:n="Neutral";break;case mM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Vo=new W;function KT(){Qe.getLuminanceCoefficients(Vo);const t=Vo.x.toFixed(4),e=Vo.y.toFixed(4),n=Vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ZT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cs).join(`
`)}function JT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function QT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=t.getActiveAttrib(e,r),s=a.name;let o=1;a.type===t.FLOAT_MAT2&&(o=2),a.type===t.FLOAT_MAT3&&(o=3),a.type===t.FLOAT_MAT4&&(o=4),n[s]={type:a.type,location:t.getAttribLocation(e,s),locationSize:o}}return n}function cs(t){return t!==""}function Wm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eA=/^[ \t]*#include +<([\w\d./]+)>/gm;function lh(t){return t.replace(eA,nA)}const tA=new Map;function nA(t,e){let n=Oe[e];if(n===void 0){const i=tA.get(e);if(i!==void 0)n=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return lh(n)}const iA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xm(t){return t.replace(iA,rA)}function rA(t,e,n,i){let r="";for(let a=parseInt(e);a<parseInt(n);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function $m(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function aA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===zv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Fw?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function sA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Da:case La:e="ENVMAP_TYPE_CUBE";break;case uc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function oA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case La:e="ENVMAP_MODE_REFRACTION";break}return e}function lA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Bv:e="ENVMAP_BLENDING_MULTIPLY";break;case cM:e="ENVMAP_BLENDING_MIX";break;case uM:e="ENVMAP_BLENDING_ADD";break}return e}function cA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function uA(t,e,n,i){const r=t.getContext(),a=n.defines;let s=n.vertexShader,o=n.fragmentShader;const l=aA(n),u=sA(n),d=oA(n),f=lA(n),p=cA(n),g=ZT(n),y=JT(a),x=r.createProgram();let m,h,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(cs).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(cs).join(`
`),h.length>0&&(h+=`
`)):(m=[$m(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cs).join(`
`),h=[$m(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==$i?"#define TONE_MAPPING":"",n.toneMapping!==$i?Oe.tonemapping_pars_fragment:"",n.toneMapping!==$i?YT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,$T("linearToOutputTexel",n.outputColorSpace),KT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(cs).join(`
`)),s=lh(s),s=Wm(s,n),s=qm(s,n),o=lh(o),o=Wm(o,n),o=qm(o,n),s=Xm(s),o=Xm(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===cm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===cm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const _=v+m+s,M=v+h+o,P=Hm(r,r.VERTEX_SHADER,_),A=Hm(r,r.FRAGMENT_SHADER,M);r.attachShader(x,P),r.attachShader(x,A),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function E(T){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(x).trim(),N=r.getShaderInfoLog(P).trim(),D=r.getShaderInfoLog(A).trim();let B=!0,H=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(B=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,P,A);else{const $=Gm(r,P,"vertex"),k=Gm(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+z+`
`+$+`
`+k)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(N===""||D==="")&&(H=!1);H&&(T.diagnostics={runnable:B,programLog:z,vertexShader:{log:N,prefix:m},fragmentShader:{log:D,prefix:h}})}r.deleteShader(P),r.deleteShader(A),w=new cl(r,x),S=QT(r,x)}let w;this.getUniforms=function(){return w===void 0&&E(this),w};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(x,GT)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=WT++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=A,this}let dA=0;class hA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new fA(e),n.set(e,i)),i}}class fA{constructor(e){this.id=dA++,this.code=e,this.usedTimes=0}}function pA(t,e,n,i,r,a,s){const o=new nx,l=new hA,u=new Set,d=[],f=r.logarithmicDepthBuffer,p=r.vertexTextures;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return u.add(S),S===0?"uv":`uv${S}`}function m(S,b,T,z,N){const D=z.fog,B=N.geometry,H=S.isMeshStandardMaterial?z.environment:null,$=(S.isMeshStandardMaterial?n:e).get(S.envMap||H),k=$&&$.mapping===uc?$.image.height:null,K=y[S.type];S.precision!==null&&(g=r.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const J=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ae=J!==void 0?J.length:0;let xe=0;B.morphAttributes.position!==void 0&&(xe=1),B.morphAttributes.normal!==void 0&&(xe=2),B.morphAttributes.color!==void 0&&(xe=3);let ue,V,Y,ne;if(K){const Ye=Gn[K];ue=Ye.vertexShader,V=Ye.fragmentShader}else ue=S.vertexShader,V=S.fragmentShader,l.update(S),Y=l.getVertexShaderID(S),ne=l.getFragmentShaderID(S);const se=t.getRenderTarget(),be=N.isInstancedMesh===!0,we=N.isBatchedMesh===!0,Ae=!!S.map,qe=!!S.matcap,L=!!$,dt=!!S.aoMap,Xe=!!S.lightMap,$e=!!S.bumpMap,Me=!!S.normalMap,yt=!!S.displacementMap,De=!!S.emissiveMap,Ue=!!S.metalnessMap,I=!!S.roughnessMap,C=S.anisotropy>0,X=S.clearcoat>0,te=S.dispersion>0,re=S.iridescence>0,ee=S.sheen>0,Ce=S.transmission>0,fe=C&&!!S.anisotropyMap,ye=X&&!!S.clearcoatMap,Fe=X&&!!S.clearcoatNormalMap,oe=X&&!!S.clearcoatRoughnessMap,ge=re&&!!S.iridescenceMap,He=re&&!!S.iridescenceThicknessMap,Ie=ee&&!!S.sheenColorMap,ve=ee&&!!S.sheenRoughnessMap,Le=!!S.specularMap,Be=!!S.specularColorMap,ot=!!S.specularIntensityMap,F=Ce&&!!S.transmissionMap,le=Ce&&!!S.thicknessMap,Z=!!S.gradientMap,Q=!!S.alphaMap,de=S.alphaTest>0,Re=!!S.alphaHash,Ge=!!S.extensions;let vt=$i;S.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(vt=t.toneMapping);const Dt={shaderID:K,shaderType:S.type,shaderName:S.name,vertexShader:ue,fragmentShader:V,defines:S.defines,customVertexShaderID:Y,customFragmentShaderID:ne,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,batching:we,batchingColor:we&&N._colorsTexture!==null,instancing:be,instancingColor:be&&N.instanceColor!==null,instancingMorph:be&&N.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:se===null?t.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:nr,alphaToCoverage:!!S.alphaToCoverage,map:Ae,matcap:qe,envMap:L,envMapMode:L&&$.mapping,envMapCubeUVHeight:k,aoMap:dt,lightMap:Xe,bumpMap:$e,normalMap:Me,displacementMap:p&&yt,emissiveMap:De,normalMapObjectSpace:Me&&S.normalMapType===bM,normalMapTangentSpace:Me&&S.normalMapType===SM,metalnessMap:Ue,roughnessMap:I,anisotropy:C,anisotropyMap:fe,clearcoat:X,clearcoatMap:ye,clearcoatNormalMap:Fe,clearcoatRoughnessMap:oe,dispersion:te,iridescence:re,iridescenceMap:ge,iridescenceThicknessMap:He,sheen:ee,sheenColorMap:Ie,sheenRoughnessMap:ve,specularMap:Le,specularColorMap:Be,specularIntensityMap:ot,transmission:Ce,transmissionMap:F,thicknessMap:le,gradientMap:Z,opaque:S.transparent===!1&&S.blending===ba&&S.alphaToCoverage===!1,alphaMap:Q,alphaTest:de,alphaHash:Re,combine:S.combine,mapUv:Ae&&x(S.map.channel),aoMapUv:dt&&x(S.aoMap.channel),lightMapUv:Xe&&x(S.lightMap.channel),bumpMapUv:$e&&x(S.bumpMap.channel),normalMapUv:Me&&x(S.normalMap.channel),displacementMapUv:yt&&x(S.displacementMap.channel),emissiveMapUv:De&&x(S.emissiveMap.channel),metalnessMapUv:Ue&&x(S.metalnessMap.channel),roughnessMapUv:I&&x(S.roughnessMap.channel),anisotropyMapUv:fe&&x(S.anisotropyMap.channel),clearcoatMapUv:ye&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:He&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:ve&&x(S.sheenRoughnessMap.channel),specularMapUv:Le&&x(S.specularMap.channel),specularColorMapUv:Be&&x(S.specularColorMap.channel),specularIntensityMapUv:ot&&x(S.specularIntensityMap.channel),transmissionMapUv:F&&x(S.transmissionMap.channel),thicknessMapUv:le&&x(S.thicknessMap.channel),alphaMapUv:Q&&x(S.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Me||C),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(Ae||Q),fog:!!D,useFog:S.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:N.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:xe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&T.length>0,shadowMapType:t.shadowMap.type,toneMapping:vt,decodeVideoTexture:Ae&&S.map.isVideoTexture===!0&&Qe.getTransfer(S.map.colorSpace)===rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===oi,flipSided:S.side===nn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ge&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&S.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Dt.vertexUv1s=u.has(1),Dt.vertexUv2s=u.has(2),Dt.vertexUv3s=u.has(3),u.clear(),Dt}function h(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const T in S.defines)b.push(T),b.push(S.defines[T]);return S.isRawShaderMaterial===!1&&(v(b,S),_(b,S),b.push(t.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function v(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function _(S,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.doubleSided&&o.enable(10),b.flipSided&&o.enable(11),b.useDepthPacking&&o.enable(12),b.dithering&&o.enable(13),b.transmission&&o.enable(14),b.sheen&&o.enable(15),b.opaque&&o.enable(16),b.pointsUvs&&o.enable(17),b.decodeVideoTexture&&o.enable(18),b.alphaToCoverage&&o.enable(19),S.push(o.mask)}function M(S){const b=y[S.type];let T;if(b){const z=Gn[b];T=ZM.clone(z.uniforms)}else T=S.uniforms;return T}function P(S,b){let T;for(let z=0,N=d.length;z<N;z++){const D=d[z];if(D.cacheKey===b){T=D,++T.usedTimes;break}}return T===void 0&&(T=new uA(t,b,S,a),d.push(T)),T}function A(S){if(--S.usedTimes===0){const b=d.indexOf(S);d[b]=d[d.length-1],d.pop(),S.destroy()}}function E(S){l.remove(S)}function w(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:M,acquireProgram:P,releaseProgram:A,releaseShaderCache:E,programs:d,dispose:w}}function mA(){let t=new WeakMap;function e(a){let s=t.get(a);return s===void 0&&(s={},t.set(a,s)),s}function n(a){t.delete(a)}function i(a,s,o){t.get(a)[s]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function gA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Ym(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Km(){const t=[];let e=0;const n=[],i=[],r=[];function a(){e=0,n.length=0,i.length=0,r.length=0}function s(f,p,g,y,x,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:p,material:g,groupOrder:y,renderOrder:f.renderOrder,z:x,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=p,h.material=g,h.groupOrder=y,h.renderOrder=f.renderOrder,h.z=x,h.group=m),e++,h}function o(f,p,g,y,x,m){const h=s(f,p,g,y,x,m);g.transmission>0?i.push(h):g.transparent===!0?r.push(h):n.push(h)}function l(f,p,g,y,x,m){const h=s(f,p,g,y,x,m);g.transmission>0?i.unshift(h):g.transparent===!0?r.unshift(h):n.unshift(h)}function u(f,p){n.length>1&&n.sort(f||gA),i.length>1&&i.sort(p||Ym),r.length>1&&r.sort(p||Ym)}function d(){for(let f=e,p=t.length;f<p;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:a,push:o,unshift:l,finish:d,sort:u}}function yA(){let t=new WeakMap;function e(i,r){const a=t.get(i);let s;return a===void 0?(s=new Km,t.set(i,[s])):r>=a.length?(s=new Km,a.push(s)):s=a[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function vA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new tt};break;case"SpotLight":n={position:new W,direction:new W,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":n={color:new tt,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function xA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let _A=0;function SA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function bA(t){const e=new vA,n=xA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new W);const r=new W,a=new Et,s=new Et;function o(u){let d=0,f=0,p=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let g=0,y=0,x=0,m=0,h=0,v=0,_=0,M=0,P=0,A=0,E=0;u.sort(SA);for(let S=0,b=u.length;S<b;S++){const T=u[S],z=T.color,N=T.intensity,D=T.distance,B=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)d+=z.r*N,f+=z.g*N,p+=z.b*N;else if(T.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(T.sh.coefficients[H],N);E++}else if(T.isDirectionalLight){const H=e.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const $=T.shadow,k=n.get(T);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,i.directionalShadow[g]=k,i.directionalShadowMap[g]=B,i.directionalShadowMatrix[g]=T.shadow.matrix,v++}i.directional[g]=H,g++}else if(T.isSpotLight){const H=e.get(T);H.position.setFromMatrixPosition(T.matrixWorld),H.color.copy(z).multiplyScalar(N),H.distance=D,H.coneCos=Math.cos(T.angle),H.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),H.decay=T.decay,i.spot[x]=H;const $=T.shadow;if(T.map&&(i.spotLightMap[P]=T.map,P++,$.updateMatrices(T),T.castShadow&&A++),i.spotLightMatrix[x]=$.matrix,T.castShadow){const k=n.get(T);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,i.spotShadow[x]=k,i.spotShadowMap[x]=B,M++}x++}else if(T.isRectAreaLight){const H=e.get(T);H.color.copy(z).multiplyScalar(N),H.halfWidth.set(T.width*.5,0,0),H.halfHeight.set(0,T.height*.5,0),i.rectArea[m]=H,m++}else if(T.isPointLight){const H=e.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),H.distance=T.distance,H.decay=T.decay,T.castShadow){const $=T.shadow,k=n.get(T);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,k.shadowCameraNear=$.camera.near,k.shadowCameraFar=$.camera.far,i.pointShadow[y]=k,i.pointShadowMap[y]=B,i.pointShadowMatrix[y]=T.shadow.matrix,_++}i.point[y]=H,y++}else if(T.isHemisphereLight){const H=e.get(T);H.skyColor.copy(T.color).multiplyScalar(N),H.groundColor.copy(T.groundColor).multiplyScalar(N),i.hemi[h]=H,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=p;const w=i.hash;(w.directionalLength!==g||w.pointLength!==y||w.spotLength!==x||w.rectAreaLength!==m||w.hemiLength!==h||w.numDirectionalShadows!==v||w.numPointShadows!==_||w.numSpotShadows!==M||w.numSpotMaps!==P||w.numLightProbes!==E)&&(i.directional.length=g,i.spot.length=x,i.rectArea.length=m,i.point.length=y,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+P-A,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=E,w.directionalLength=g,w.pointLength=y,w.spotLength=x,w.rectAreaLength=m,w.hemiLength=h,w.numDirectionalShadows=v,w.numPointShadows=_,w.numSpotShadows=M,w.numSpotMaps=P,w.numLightProbes=E,i.version=_A++)}function l(u,d){let f=0,p=0,g=0,y=0,x=0;const m=d.matrixWorldInverse;for(let h=0,v=u.length;h<v;h++){const _=u[h];if(_.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(_.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),g++}else if(_.isRectAreaLight){const M=i.rectArea[y];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),s.identity(),a.copy(_.matrixWorld),a.premultiply(m),s.extractRotation(a),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),y++}else if(_.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),p++}else if(_.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function Zm(t){const e=new bA(t),n=[],i=[];function r(d){u.camera=d,n.length=0,i.length=0}function a(d){n.push(d)}function s(d){i.push(d)}function o(){e.setup(n)}function l(d){e.setupView(n,d)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function wA(t){let e=new WeakMap;function n(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new Zm(t),e.set(r,[o])):a>=s.length?(o=new Zm(t),s.push(o)):o=s[a],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class MA extends hc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class EA extends hc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const CA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TA=`uniform sampler2D shadow_pass;
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
}`;function AA(t,e,n){let i=new ux;const r=new Ve,a=new Ve,s=new Nt,o=new MA({depthPacking:_M}),l=new EA,u={},d=n.maxTextureSize,f={[Zi]:nn,[nn]:Zi,[oi]:oi},p=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:CA,fragmentShader:TA}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const y=new Ur;y.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Xn(y,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zv;let h=this.type;this.render=function(A,E,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=t.getRenderTarget(),b=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Xi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const N=h!==ri&&this.type===ri,D=h===ri&&this.type!==ri;for(let B=0,H=A.length;B<H;B++){const $=A[B],k=$.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const K=k.getFrameExtents();if(r.multiply(K),a.copy(k.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/K.x),r.x=a.x*K.x,k.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/K.y),r.y=a.y*K.y,k.mapSize.y=a.y)),k.map===null||N===!0||D===!0){const ae=this.type!==ri?{minFilter:Sn,magFilter:Sn}:{};k.map!==null&&k.map.dispose(),k.map=new Pr(r.x,r.y,ae),k.map.texture.name=$.name+".shadowMap",k.camera.updateProjectionMatrix()}t.setRenderTarget(k.map),t.clear();const J=k.getViewportCount();for(let ae=0;ae<J;ae++){const xe=k.getViewport(ae);s.set(a.x*xe.x,a.y*xe.y,a.x*xe.z,a.y*xe.w),z.viewport(s),k.updateMatrices($,ae),i=k.getFrustum(),M(E,w,k.camera,$,this.type)}k.isPointLightShadow!==!0&&this.type===ri&&v(k,w),k.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(S,b,T)};function v(A,E){const w=e.update(x);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,g.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Pr(r.x,r.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(E,null,w,p,x,null),g.uniforms.shadow_pass.value=A.mapPass.texture,g.uniforms.resolution.value=A.mapSize,g.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(E,null,w,g,x,null)}function _(A,E,w,S){let b=null;const T=w.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(T!==void 0)b=T;else if(b=w.isPointLight===!0?l:o,t.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const z=b.uuid,N=E.uuid;let D=u[z];D===void 0&&(D={},u[z]=D);let B=D[N];B===void 0&&(B=b.clone(),D[N]=B,E.addEventListener("dispose",P)),b=B}if(b.visible=E.visible,b.wireframe=E.wireframe,S===ri?b.side=E.shadowSide!==null?E.shadowSide:E.side:b.side=E.shadowSide!==null?E.shadowSide:f[E.side],b.alphaMap=E.alphaMap,b.alphaTest=E.alphaTest,b.map=E.map,b.clipShadows=E.clipShadows,b.clippingPlanes=E.clippingPlanes,b.clipIntersection=E.clipIntersection,b.displacementMap=E.displacementMap,b.displacementScale=E.displacementScale,b.displacementBias=E.displacementBias,b.wireframeLinewidth=E.wireframeLinewidth,b.linewidth=E.linewidth,w.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const z=t.properties.get(b);z.light=w}return b}function M(A,E,w,S,b){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===ri)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,A.matrixWorld);const N=e.update(A),D=A.material;if(Array.isArray(D)){const B=N.groups;for(let H=0,$=B.length;H<$;H++){const k=B[H],K=D[k.materialIndex];if(K&&K.visible){const J=_(A,K,S,b);A.onBeforeShadow(t,A,E,w,N,J,k),t.renderBufferDirect(w,null,N,J,A,k),A.onAfterShadow(t,A,E,w,N,J,k)}}}else if(D.visible){const B=_(A,D,S,b);A.onBeforeShadow(t,A,E,w,N,B,null),t.renderBufferDirect(w,null,N,B,A,null),A.onAfterShadow(t,A,E,w,N,B,null)}}const z=A.children;for(let N=0,D=z.length;N<D;N++)M(z[N],E,w,S,b)}function P(A){A.target.removeEventListener("dispose",P);for(const w in u){const S=u[w],b=A.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}function RA(t){function e(){let F=!1;const le=new Nt;let Z=null;const Q=new Nt(0,0,0,0);return{setMask:function(de){Z!==de&&!F&&(t.colorMask(de,de,de,de),Z=de)},setLocked:function(de){F=de},setClear:function(de,Re,Ge,vt,Dt){Dt===!0&&(de*=vt,Re*=vt,Ge*=vt),le.set(de,Re,Ge,vt),Q.equals(le)===!1&&(t.clearColor(de,Re,Ge,vt),Q.copy(le))},reset:function(){F=!1,Z=null,Q.set(-1,0,0,0)}}}function n(){let F=!1,le=null,Z=null,Q=null;return{setTest:function(de){de?ne(t.DEPTH_TEST):se(t.DEPTH_TEST)},setMask:function(de){le!==de&&!F&&(t.depthMask(de),le=de)},setFunc:function(de){if(Z!==de){switch(de){case nM:t.depthFunc(t.NEVER);break;case iM:t.depthFunc(t.ALWAYS);break;case rM:t.depthFunc(t.LESS);break;case Ol:t.depthFunc(t.LEQUAL);break;case aM:t.depthFunc(t.EQUAL);break;case sM:t.depthFunc(t.GEQUAL);break;case oM:t.depthFunc(t.GREATER);break;case lM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Z=de}},setLocked:function(de){F=de},setClear:function(de){Q!==de&&(t.clearDepth(de),Q=de)},reset:function(){F=!1,le=null,Z=null,Q=null}}}function i(){let F=!1,le=null,Z=null,Q=null,de=null,Re=null,Ge=null,vt=null,Dt=null;return{setTest:function(Ye){F||(Ye?ne(t.STENCIL_TEST):se(t.STENCIL_TEST))},setMask:function(Ye){le!==Ye&&!F&&(t.stencilMask(Ye),le=Ye)},setFunc:function(Ye,Jn,Bn){(Z!==Ye||Q!==Jn||de!==Bn)&&(t.stencilFunc(Ye,Jn,Bn),Z=Ye,Q=Jn,de=Bn)},setOp:function(Ye,Jn,Bn){(Re!==Ye||Ge!==Jn||vt!==Bn)&&(t.stencilOp(Ye,Jn,Bn),Re=Ye,Ge=Jn,vt=Bn)},setLocked:function(Ye){F=Ye},setClear:function(Ye){Dt!==Ye&&(t.clearStencil(Ye),Dt=Ye)},reset:function(){F=!1,le=null,Z=null,Q=null,de=null,Re=null,Ge=null,vt=null,Dt=null}}}const r=new e,a=new n,s=new i,o=new WeakMap,l=new WeakMap;let u={},d={},f=new WeakMap,p=[],g=null,y=!1,x=null,m=null,h=null,v=null,_=null,M=null,P=null,A=new tt(0,0,0),E=0,w=!1,S=null,b=null,T=null,z=null,N=null;const D=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,H=0;const $=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec($)[1]),B=H>=1):$.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),B=H>=2);let k=null,K={};const J=t.getParameter(t.SCISSOR_BOX),ae=t.getParameter(t.VIEWPORT),xe=new Nt().fromArray(J),ue=new Nt().fromArray(ae);function V(F,le,Z,Q){const de=new Uint8Array(4),Re=t.createTexture();t.bindTexture(F,Re),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ge=0;Ge<Z;Ge++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(le,0,t.RGBA,1,1,Q,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(le+Ge,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return Re}const Y={};Y[t.TEXTURE_2D]=V(t.TEXTURE_2D,t.TEXTURE_2D,1),Y[t.TEXTURE_CUBE_MAP]=V(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[t.TEXTURE_2D_ARRAY]=V(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Y[t.TEXTURE_3D]=V(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),s.setClear(0),ne(t.DEPTH_TEST),a.setFunc(Ol),$e(!1),Me(im),ne(t.CULL_FACE),dt(Xi);function ne(F){u[F]!==!0&&(t.enable(F),u[F]=!0)}function se(F){u[F]!==!1&&(t.disable(F),u[F]=!1)}function be(F,le){return d[F]!==le?(t.bindFramebuffer(F,le),d[F]=le,F===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=le),F===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=le),!0):!1}function we(F,le){let Z=p,Q=!1;if(F){Z=f.get(le),Z===void 0&&(Z=[],f.set(le,Z));const de=F.textures;if(Z.length!==de.length||Z[0]!==t.COLOR_ATTACHMENT0){for(let Re=0,Ge=de.length;Re<Ge;Re++)Z[Re]=t.COLOR_ATTACHMENT0+Re;Z.length=de.length,Q=!0}}else Z[0]!==t.BACK&&(Z[0]=t.BACK,Q=!0);Q&&t.drawBuffers(Z)}function Ae(F){return g!==F?(t.useProgram(F),g=F,!0):!1}const qe={[pr]:t.FUNC_ADD,[zw]:t.FUNC_SUBTRACT,[Bw]:t.FUNC_REVERSE_SUBTRACT};qe[jw]=t.MIN,qe[Vw]=t.MAX;const L={[Hw]:t.ZERO,[Gw]:t.ONE,[Ww]:t.SRC_COLOR,[Rd]:t.SRC_ALPHA,[Zw]:t.SRC_ALPHA_SATURATE,[Yw]:t.DST_COLOR,[Xw]:t.DST_ALPHA,[qw]:t.ONE_MINUS_SRC_COLOR,[Pd]:t.ONE_MINUS_SRC_ALPHA,[Kw]:t.ONE_MINUS_DST_COLOR,[$w]:t.ONE_MINUS_DST_ALPHA,[Jw]:t.CONSTANT_COLOR,[Qw]:t.ONE_MINUS_CONSTANT_COLOR,[eM]:t.CONSTANT_ALPHA,[tM]:t.ONE_MINUS_CONSTANT_ALPHA};function dt(F,le,Z,Q,de,Re,Ge,vt,Dt,Ye){if(F===Xi){y===!0&&(se(t.BLEND),y=!1);return}if(y===!1&&(ne(t.BLEND),y=!0),F!==Ow){if(F!==x||Ye!==w){if((m!==pr||_!==pr)&&(t.blendEquation(t.FUNC_ADD),m=pr,_=pr),Ye)switch(F){case ba:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case rm:t.blendFunc(t.ONE,t.ONE);break;case am:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case sm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ba:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case rm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case am:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case sm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}h=null,v=null,M=null,P=null,A.set(0,0,0),E=0,x=F,w=Ye}return}de=de||le,Re=Re||Z,Ge=Ge||Q,(le!==m||de!==_)&&(t.blendEquationSeparate(qe[le],qe[de]),m=le,_=de),(Z!==h||Q!==v||Re!==M||Ge!==P)&&(t.blendFuncSeparate(L[Z],L[Q],L[Re],L[Ge]),h=Z,v=Q,M=Re,P=Ge),(vt.equals(A)===!1||Dt!==E)&&(t.blendColor(vt.r,vt.g,vt.b,Dt),A.copy(vt),E=Dt),x=F,w=!1}function Xe(F,le){F.side===oi?se(t.CULL_FACE):ne(t.CULL_FACE);let Z=F.side===nn;le&&(Z=!Z),$e(Z),F.blending===ba&&F.transparent===!1?dt(Xi):dt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const Q=F.stencilWrite;s.setTest(Q),Q&&(s.setMask(F.stencilWriteMask),s.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),s.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),De(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ne(t.SAMPLE_ALPHA_TO_COVERAGE):se(t.SAMPLE_ALPHA_TO_COVERAGE)}function $e(F){S!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),S=F)}function Me(F){F!==Uw?(ne(t.CULL_FACE),F!==b&&(F===im?t.cullFace(t.BACK):F===kw?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):se(t.CULL_FACE),b=F}function yt(F){F!==T&&(B&&t.lineWidth(F),T=F)}function De(F,le,Z){F?(ne(t.POLYGON_OFFSET_FILL),(z!==le||N!==Z)&&(t.polygonOffset(le,Z),z=le,N=Z)):se(t.POLYGON_OFFSET_FILL)}function Ue(F){F?ne(t.SCISSOR_TEST):se(t.SCISSOR_TEST)}function I(F){F===void 0&&(F=t.TEXTURE0+D-1),k!==F&&(t.activeTexture(F),k=F)}function C(F,le,Z){Z===void 0&&(k===null?Z=t.TEXTURE0+D-1:Z=k);let Q=K[Z];Q===void 0&&(Q={type:void 0,texture:void 0},K[Z]=Q),(Q.type!==F||Q.texture!==le)&&(k!==Z&&(t.activeTexture(Z),k=Z),t.bindTexture(F,le||Y[F]),Q.type=F,Q.texture=le)}function X(){const F=K[k];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function te(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ee(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Fe(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function He(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(F){xe.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),xe.copy(F))}function ve(F){ue.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),ue.copy(F))}function Le(F,le){let Z=l.get(le);Z===void 0&&(Z=new WeakMap,l.set(le,Z));let Q=Z.get(F);Q===void 0&&(Q=t.getUniformBlockIndex(le,F.name),Z.set(F,Q))}function Be(F,le){const Q=l.get(le).get(F);o.get(le)!==Q&&(t.uniformBlockBinding(le,Q,F.__bindingPointIndex),o.set(le,Q))}function ot(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},k=null,K={},d={},f=new WeakMap,p=[],g=null,y=!1,x=null,m=null,h=null,v=null,_=null,M=null,P=null,A=new tt(0,0,0),E=0,w=!1,S=null,b=null,T=null,z=null,N=null,xe.set(0,0,t.canvas.width,t.canvas.height),ue.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),s.reset()}return{buffers:{color:r,depth:a,stencil:s},enable:ne,disable:se,bindFramebuffer:be,drawBuffers:we,useProgram:Ae,setBlending:dt,setMaterial:Xe,setFlipSided:$e,setCullFace:Me,setLineWidth:yt,setPolygonOffset:De,setScissorTest:Ue,activeTexture:I,bindTexture:C,unbindTexture:X,compressedTexImage2D:te,compressedTexImage3D:re,texImage2D:ge,texImage3D:He,updateUBOMapping:Le,uniformBlockBinding:Be,texStorage2D:Fe,texStorage3D:oe,texSubImage2D:ee,texSubImage3D:Ce,compressedTexSubImage2D:fe,compressedTexSubImage3D:ye,scissor:Ie,viewport:ve,reset:ot}}function Jm(t,e,n,i){const r=PA(i);switch(n){case Wv:return t*e;case Xv:return t*e;case $v:return t*e*2;case Yv:return t*e/r.components*r.byteLength;case uf:return t*e/r.components*r.byteLength;case Kv:return t*e*2/r.components*r.byteLength;case df:return t*e*2/r.components*r.byteLength;case qv:return t*e*3/r.components*r.byteLength;case kn:return t*e*4/r.components*r.byteLength;case hf:return t*e*4/r.components*r.byteLength;case rl:case al:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case sl:case ol:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case kd:case Od:return Math.max(t,16)*Math.max(e,8)/4;case Ud:case Fd:return Math.max(t,8)*Math.max(e,8)/2;case zd:case Bd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case jd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Vd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Hd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Gd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Wd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case qd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Xd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case $d:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Yd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Kd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Jd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Qd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case eh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case th:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ll:case nh:case ih:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Zv:case rh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case ah:case sh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function PA(t){switch(t){case yi:case Vv:return{byteLength:1,components:1};case js:case Hv:case $s:return{byteLength:2,components:1};case lf:case cf:return{byteLength:2,components:4};case Rr:case of:case ui:return{byteLength:4,components:1};case Gv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function NA(t,e,n,i,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ve,d=new WeakMap;let f;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(I,C){return g?new OffscreenCanvas(I,C):Hl("canvas")}function x(I,C,X){let te=1;const re=Ue(I);if((re.width>X||re.height>X)&&(te=X/Math.max(re.width,re.height)),te<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ee=Math.floor(te*re.width),Ce=Math.floor(te*re.height);f===void 0&&(f=y(ee,Ce));const fe=C?y(ee,Ce):f;return fe.width=ee,fe.height=Ce,fe.getContext("2d").drawImage(I,0,0,ee,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ee+"x"+Ce+")."),fe}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),I;return I}function m(I){return I.generateMipmaps&&I.minFilter!==Sn&&I.minFilter!==Ln}function h(I){t.generateMipmap(I)}function v(I,C,X,te,re=!1){if(I!==null){if(t[I]!==void 0)return t[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ee=C;if(C===t.RED&&(X===t.FLOAT&&(ee=t.R32F),X===t.HALF_FLOAT&&(ee=t.R16F),X===t.UNSIGNED_BYTE&&(ee=t.R8)),C===t.RED_INTEGER&&(X===t.UNSIGNED_BYTE&&(ee=t.R8UI),X===t.UNSIGNED_SHORT&&(ee=t.R16UI),X===t.UNSIGNED_INT&&(ee=t.R32UI),X===t.BYTE&&(ee=t.R8I),X===t.SHORT&&(ee=t.R16I),X===t.INT&&(ee=t.R32I)),C===t.RG&&(X===t.FLOAT&&(ee=t.RG32F),X===t.HALF_FLOAT&&(ee=t.RG16F),X===t.UNSIGNED_BYTE&&(ee=t.RG8)),C===t.RG_INTEGER&&(X===t.UNSIGNED_BYTE&&(ee=t.RG8UI),X===t.UNSIGNED_SHORT&&(ee=t.RG16UI),X===t.UNSIGNED_INT&&(ee=t.RG32UI),X===t.BYTE&&(ee=t.RG8I),X===t.SHORT&&(ee=t.RG16I),X===t.INT&&(ee=t.RG32I)),C===t.RGB&&X===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),C===t.RGBA){const Ce=re?zl:Qe.getTransfer(te);X===t.FLOAT&&(ee=t.RGBA32F),X===t.HALF_FLOAT&&(ee=t.RGBA16F),X===t.UNSIGNED_BYTE&&(ee=Ce===rt?t.SRGB8_ALPHA8:t.RGBA8),X===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),X===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function _(I,C){let X;return I?C===null||C===Rr||C===Ua?X=t.DEPTH24_STENCIL8:C===ui?X=t.DEPTH32F_STENCIL8:C===js&&(X=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Rr||C===Ua?X=t.DEPTH_COMPONENT24:C===ui?X=t.DEPTH_COMPONENT32F:C===js&&(X=t.DEPTH_COMPONENT16),X}function M(I,C){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Sn&&I.minFilter!==Ln?Math.log2(Math.max(C.width,C.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?C.mipmaps.length:1}function P(I){const C=I.target;C.removeEventListener("dispose",P),E(C),C.isVideoTexture&&d.delete(C)}function A(I){const C=I.target;C.removeEventListener("dispose",A),S(C)}function E(I){const C=i.get(I);if(C.__webglInit===void 0)return;const X=I.source,te=p.get(X);if(te){const re=te[C.__cacheKey];re.usedTimes--,re.usedTimes===0&&w(I),Object.keys(te).length===0&&p.delete(X)}i.remove(I)}function w(I){const C=i.get(I);t.deleteTexture(C.__webglTexture);const X=I.source,te=p.get(X);delete te[C.__cacheKey],s.memory.textures--}function S(I){const C=i.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(C.__webglFramebuffer[te]))for(let re=0;re<C.__webglFramebuffer[te].length;re++)t.deleteFramebuffer(C.__webglFramebuffer[te][re]);else t.deleteFramebuffer(C.__webglFramebuffer[te]);C.__webglDepthbuffer&&t.deleteRenderbuffer(C.__webglDepthbuffer[te])}else{if(Array.isArray(C.__webglFramebuffer))for(let te=0;te<C.__webglFramebuffer.length;te++)t.deleteFramebuffer(C.__webglFramebuffer[te]);else t.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&t.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&t.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let te=0;te<C.__webglColorRenderbuffer.length;te++)C.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(C.__webglColorRenderbuffer[te]);C.__webglDepthRenderbuffer&&t.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const X=I.textures;for(let te=0,re=X.length;te<re;te++){const ee=i.get(X[te]);ee.__webglTexture&&(t.deleteTexture(ee.__webglTexture),s.memory.textures--),i.remove(X[te])}i.remove(I)}let b=0;function T(){b=0}function z(){const I=b;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),b+=1,I}function N(I){const C=[];return C.push(I.wrapS),C.push(I.wrapT),C.push(I.wrapR||0),C.push(I.magFilter),C.push(I.minFilter),C.push(I.anisotropy),C.push(I.internalFormat),C.push(I.format),C.push(I.type),C.push(I.generateMipmaps),C.push(I.premultiplyAlpha),C.push(I.flipY),C.push(I.unpackAlignment),C.push(I.colorSpace),C.join()}function D(I,C){const X=i.get(I);if(I.isVideoTexture&&yt(I),I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){const te=I.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(X,I,C);return}}n.bindTexture(t.TEXTURE_2D,X.__webglTexture,t.TEXTURE0+C)}function B(I,C){const X=i.get(I);if(I.version>0&&X.__version!==I.version){ue(X,I,C);return}n.bindTexture(t.TEXTURE_2D_ARRAY,X.__webglTexture,t.TEXTURE0+C)}function H(I,C){const X=i.get(I);if(I.version>0&&X.__version!==I.version){ue(X,I,C);return}n.bindTexture(t.TEXTURE_3D,X.__webglTexture,t.TEXTURE0+C)}function $(I,C){const X=i.get(I);if(I.version>0&&X.__version!==I.version){V(X,I,C);return}n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture,t.TEXTURE0+C)}const k={[Dd]:t.REPEAT,[xr]:t.CLAMP_TO_EDGE,[Ld]:t.MIRRORED_REPEAT},K={[Sn]:t.NEAREST,[vM]:t.NEAREST_MIPMAP_NEAREST,[So]:t.NEAREST_MIPMAP_LINEAR,[Ln]:t.LINEAR,[eu]:t.LINEAR_MIPMAP_NEAREST,[_r]:t.LINEAR_MIPMAP_LINEAR},J={[wM]:t.NEVER,[RM]:t.ALWAYS,[MM]:t.LESS,[Jv]:t.LEQUAL,[EM]:t.EQUAL,[AM]:t.GEQUAL,[CM]:t.GREATER,[TM]:t.NOTEQUAL};function ae(I,C){if(C.type===ui&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Ln||C.magFilter===eu||C.magFilter===So||C.magFilter===_r||C.minFilter===Ln||C.minFilter===eu||C.minFilter===So||C.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(I,t.TEXTURE_WRAP_S,k[C.wrapS]),t.texParameteri(I,t.TEXTURE_WRAP_T,k[C.wrapT]),(I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY)&&t.texParameteri(I,t.TEXTURE_WRAP_R,k[C.wrapR]),t.texParameteri(I,t.TEXTURE_MAG_FILTER,K[C.magFilter]),t.texParameteri(I,t.TEXTURE_MIN_FILTER,K[C.minFilter]),C.compareFunction&&(t.texParameteri(I,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(I,t.TEXTURE_COMPARE_FUNC,J[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Sn||C.minFilter!==So&&C.minFilter!==_r||C.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||i.get(C).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");t.texParameterf(I,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy}}}function xe(I,C){let X=!1;I.__webglInit===void 0&&(I.__webglInit=!0,C.addEventListener("dispose",P));const te=C.source;let re=p.get(te);re===void 0&&(re={},p.set(te,re));const ee=N(C);if(ee!==I.__cacheKey){re[ee]===void 0&&(re[ee]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,X=!0),re[ee].usedTimes++;const Ce=re[I.__cacheKey];Ce!==void 0&&(re[I.__cacheKey].usedTimes--,Ce.usedTimes===0&&w(C)),I.__cacheKey=ee,I.__webglTexture=re[ee].texture}return X}function ue(I,C,X){let te=t.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),C.isData3DTexture&&(te=t.TEXTURE_3D);const re=xe(I,C),ee=C.source;n.bindTexture(te,I.__webglTexture,t.TEXTURE0+X);const Ce=i.get(ee);if(ee.version!==Ce.__version||re===!0){n.activeTexture(t.TEXTURE0+X);const fe=Qe.getPrimaries(Qe.workingColorSpace),ye=C.colorSpace===Li?null:Qe.getPrimaries(C.colorSpace),Fe=C.colorSpace===Li||fe===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,C.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,C.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let oe=x(C.image,!1,r.maxTextureSize);oe=De(C,oe);const ge=a.convert(C.format,C.colorSpace),He=a.convert(C.type);let Ie=v(C.internalFormat,ge,He,C.colorSpace,C.isVideoTexture);ae(te,C);let ve;const Le=C.mipmaps,Be=C.isVideoTexture!==!0,ot=Ce.__version===void 0||re===!0,F=ee.dataReady,le=M(C,oe);if(C.isDepthTexture)Ie=_(C.format===ka,C.type),ot&&(Be?n.texStorage2D(t.TEXTURE_2D,1,Ie,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,Ie,oe.width,oe.height,0,ge,He,null));else if(C.isDataTexture)if(Le.length>0){Be&&ot&&n.texStorage2D(t.TEXTURE_2D,le,Ie,Le[0].width,Le[0].height);for(let Z=0,Q=Le.length;Z<Q;Z++)ve=Le[Z],Be?F&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,ve.width,ve.height,ge,He,ve.data):n.texImage2D(t.TEXTURE_2D,Z,Ie,ve.width,ve.height,0,ge,He,ve.data);C.generateMipmaps=!1}else Be?(ot&&n.texStorage2D(t.TEXTURE_2D,le,Ie,oe.width,oe.height),F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,ge,He,oe.data)):n.texImage2D(t.TEXTURE_2D,0,Ie,oe.width,oe.height,0,ge,He,oe.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Be&&ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,Ie,Le[0].width,Le[0].height,oe.depth);for(let Z=0,Q=Le.length;Z<Q;Z++)if(ve=Le[Z],C.format!==kn)if(ge!==null)if(Be){if(F)if(C.layerUpdates.size>0){const de=Jm(ve.width,ve.height,C.format,C.type);for(const Re of C.layerUpdates){const Ge=ve.data.subarray(Re*de/ve.data.BYTES_PER_ELEMENT,(Re+1)*de/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,Re,ve.width,ve.height,1,ge,Ge,0,0)}C.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,ve.width,ve.height,oe.depth,ge,ve.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Z,Ie,ve.width,ve.height,oe.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,ve.width,ve.height,oe.depth,ge,He,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Z,Ie,ve.width,ve.height,oe.depth,0,ge,He,ve.data)}else{Be&&ot&&n.texStorage2D(t.TEXTURE_2D,le,Ie,Le[0].width,Le[0].height);for(let Z=0,Q=Le.length;Z<Q;Z++)ve=Le[Z],C.format!==kn?ge!==null?Be?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,Z,0,0,ve.width,ve.height,ge,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,Z,Ie,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?F&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,ve.width,ve.height,ge,He,ve.data):n.texImage2D(t.TEXTURE_2D,Z,Ie,ve.width,ve.height,0,ge,He,ve.data)}else if(C.isDataArrayTexture)if(Be){if(ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,Ie,oe.width,oe.height,oe.depth),F)if(C.layerUpdates.size>0){const Z=Jm(oe.width,oe.height,C.format,C.type);for(const Q of C.layerUpdates){const de=oe.data.subarray(Q*Z/oe.data.BYTES_PER_ELEMENT,(Q+1)*Z/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Q,oe.width,oe.height,1,ge,He,de)}C.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ge,He,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ie,oe.width,oe.height,oe.depth,0,ge,He,oe.data);else if(C.isData3DTexture)Be?(ot&&n.texStorage3D(t.TEXTURE_3D,le,Ie,oe.width,oe.height,oe.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ge,He,oe.data)):n.texImage3D(t.TEXTURE_3D,0,Ie,oe.width,oe.height,oe.depth,0,ge,He,oe.data);else if(C.isFramebufferTexture){if(ot)if(Be)n.texStorage2D(t.TEXTURE_2D,le,Ie,oe.width,oe.height);else{let Z=oe.width,Q=oe.height;for(let de=0;de<le;de++)n.texImage2D(t.TEXTURE_2D,de,Ie,Z,Q,0,ge,He,null),Z>>=1,Q>>=1}}else if(Le.length>0){if(Be&&ot){const Z=Ue(Le[0]);n.texStorage2D(t.TEXTURE_2D,le,Ie,Z.width,Z.height)}for(let Z=0,Q=Le.length;Z<Q;Z++)ve=Le[Z],Be?F&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,ge,He,ve):n.texImage2D(t.TEXTURE_2D,Z,Ie,ge,He,ve);C.generateMipmaps=!1}else if(Be){if(ot){const Z=Ue(oe);n.texStorage2D(t.TEXTURE_2D,le,Ie,Z.width,Z.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,He,oe)}else n.texImage2D(t.TEXTURE_2D,0,Ie,ge,He,oe);m(C)&&h(te),Ce.__version=ee.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function V(I,C,X){if(C.image.length!==6)return;const te=xe(I,C),re=C.source;n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+X);const ee=i.get(re);if(re.version!==ee.__version||te===!0){n.activeTexture(t.TEXTURE0+X);const Ce=Qe.getPrimaries(Qe.workingColorSpace),fe=C.colorSpace===Li?null:Qe.getPrimaries(C.colorSpace),ye=C.colorSpace===Li||Ce===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,C.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,C.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Fe=C.isCompressedTexture||C.image[0].isCompressedTexture,oe=C.image[0]&&C.image[0].isDataTexture,ge=[];for(let Q=0;Q<6;Q++)!Fe&&!oe?ge[Q]=x(C.image[Q],!0,r.maxCubemapSize):ge[Q]=oe?C.image[Q].image:C.image[Q],ge[Q]=De(C,ge[Q]);const He=ge[0],Ie=a.convert(C.format,C.colorSpace),ve=a.convert(C.type),Le=v(C.internalFormat,Ie,ve,C.colorSpace),Be=C.isVideoTexture!==!0,ot=ee.__version===void 0||te===!0,F=re.dataReady;let le=M(C,He);ae(t.TEXTURE_CUBE_MAP,C);let Z;if(Fe){Be&&ot&&n.texStorage2D(t.TEXTURE_CUBE_MAP,le,Le,He.width,He.height);for(let Q=0;Q<6;Q++){Z=ge[Q].mipmaps;for(let de=0;de<Z.length;de++){const Re=Z[de];C.format!==kn?Ie!==null?Be?F&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,de,0,0,Re.width,Re.height,Ie,Re.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,de,Le,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,de,0,0,Re.width,Re.height,Ie,ve,Re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,de,Le,Re.width,Re.height,0,Ie,ve,Re.data)}}}else{if(Z=C.mipmaps,Be&&ot){Z.length>0&&le++;const Q=Ue(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,le,Le,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(oe){Be?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ge[Q].width,ge[Q].height,Ie,ve,ge[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Le,ge[Q].width,ge[Q].height,0,Ie,ve,ge[Q].data);for(let de=0;de<Z.length;de++){const Ge=Z[de].image[Q].image;Be?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,de+1,0,0,Ge.width,Ge.height,Ie,ve,Ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,de+1,Le,Ge.width,Ge.height,0,Ie,ve,Ge.data)}}else{Be?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ie,ve,ge[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Le,Ie,ve,ge[Q]);for(let de=0;de<Z.length;de++){const Re=Z[de];Be?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,de+1,0,0,Ie,ve,Re.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,de+1,Le,Ie,ve,Re.image[Q])}}}m(C)&&h(t.TEXTURE_CUBE_MAP),ee.__version=re.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function Y(I,C,X,te,re,ee){const Ce=a.convert(X.format,X.colorSpace),fe=a.convert(X.type),ye=v(X.internalFormat,Ce,fe,X.colorSpace);if(!i.get(C).__hasExternalTextures){const oe=Math.max(1,C.width>>ee),ge=Math.max(1,C.height>>ee);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,ee,ye,oe,ge,C.depth,0,Ce,fe,null):n.texImage2D(re,ee,ye,oe,ge,0,Ce,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,I),Me(C)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,re,i.get(X).__webglTexture,0,$e(C)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,re,i.get(X).__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ne(I,C,X){if(t.bindRenderbuffer(t.RENDERBUFFER,I),C.depthBuffer){const te=C.depthTexture,re=te&&te.isDepthTexture?te.type:null,ee=_(C.stencilBuffer,re),Ce=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=$e(C);Me(C)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,ee,C.width,C.height):X?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,ee,C.width,C.height):t.renderbufferStorage(t.RENDERBUFFER,ee,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ce,t.RENDERBUFFER,I)}else{const te=C.textures;for(let re=0;re<te.length;re++){const ee=te[re],Ce=a.convert(ee.format,ee.colorSpace),fe=a.convert(ee.type),ye=v(ee.internalFormat,Ce,fe,ee.colorSpace),Fe=$e(C);X&&Me(C)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,ye,C.width,C.height):Me(C)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Fe,ye,C.width,C.height):t.renderbufferStorage(t.RENDERBUFFER,ye,C.width,C.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function se(I,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,I),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),D(C.depthTexture,0);const te=i.get(C.depthTexture).__webglTexture,re=$e(C);if(C.depthTexture.format===wa)Me(C)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(C.depthTexture.format===ka)Me(C)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function be(I){const C=i.get(I),X=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!C.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");se(C.__webglFramebuffer,I)}else if(X){C.__webglDepthbuffer=[];for(let te=0;te<6;te++)n.bindFramebuffer(t.FRAMEBUFFER,C.__webglFramebuffer[te]),C.__webglDepthbuffer[te]=t.createRenderbuffer(),ne(C.__webglDepthbuffer[te],I,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=t.createRenderbuffer(),ne(C.__webglDepthbuffer,I,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function we(I,C,X){const te=i.get(I);C!==void 0&&Y(te.__webglFramebuffer,I,I.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),X!==void 0&&be(I)}function Ae(I){const C=I.texture,X=i.get(I),te=i.get(C);I.addEventListener("dispose",A);const re=I.textures,ee=I.isWebGLCubeRenderTarget===!0,Ce=re.length>1;if(Ce||(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=C.version,s.memory.textures++),ee){X.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(C.mipmaps&&C.mipmaps.length>0){X.__webglFramebuffer[fe]=[];for(let ye=0;ye<C.mipmaps.length;ye++)X.__webglFramebuffer[fe][ye]=t.createFramebuffer()}else X.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){X.__webglFramebuffer=[];for(let fe=0;fe<C.mipmaps.length;fe++)X.__webglFramebuffer[fe]=t.createFramebuffer()}else X.__webglFramebuffer=t.createFramebuffer();if(Ce)for(let fe=0,ye=re.length;fe<ye;fe++){const Fe=i.get(re[fe]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=t.createTexture(),s.memory.textures++)}if(I.samples>0&&Me(I)===!1){X.__webglMultisampledFramebuffer=t.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let fe=0;fe<re.length;fe++){const ye=re[fe];X.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,X.__webglColorRenderbuffer[fe]);const Fe=a.convert(ye.format,ye.colorSpace),oe=a.convert(ye.type),ge=v(ye.internalFormat,Fe,oe,ye.colorSpace,I.isXRRenderTarget===!0),He=$e(I);t.renderbufferStorageMultisample(t.RENDERBUFFER,He,ge,I.width,I.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,X.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),I.depthBuffer&&(X.__webglDepthRenderbuffer=t.createRenderbuffer(),ne(X.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),ae(t.TEXTURE_CUBE_MAP,C);for(let fe=0;fe<6;fe++)if(C.mipmaps&&C.mipmaps.length>0)for(let ye=0;ye<C.mipmaps.length;ye++)Y(X.__webglFramebuffer[fe][ye],I,C,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ye);else Y(X.__webglFramebuffer[fe],I,C,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(C)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ce){for(let fe=0,ye=re.length;fe<ye;fe++){const Fe=re[fe],oe=i.get(Fe);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),ae(t.TEXTURE_2D,Fe),Y(X.__webglFramebuffer,I,Fe,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),m(Fe)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(fe=I.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,te.__webglTexture),ae(fe,C),C.mipmaps&&C.mipmaps.length>0)for(let ye=0;ye<C.mipmaps.length;ye++)Y(X.__webglFramebuffer[ye],I,C,t.COLOR_ATTACHMENT0,fe,ye);else Y(X.__webglFramebuffer,I,C,t.COLOR_ATTACHMENT0,fe,0);m(C)&&h(fe),n.unbindTexture()}I.depthBuffer&&be(I)}function qe(I){const C=I.textures;for(let X=0,te=C.length;X<te;X++){const re=C[X];if(m(re)){const ee=I.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ce=i.get(re).__webglTexture;n.bindTexture(ee,Ce),h(ee),n.unbindTexture()}}}const L=[],dt=[];function Xe(I){if(I.samples>0){if(Me(I)===!1){const C=I.textures,X=I.width,te=I.height;let re=t.COLOR_BUFFER_BIT;const ee=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ce=i.get(I),fe=C.length>1;if(fe)for(let ye=0;ye<C.length;ye++)n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let ye=0;ye<C.length;ye++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[ye]);const Fe=i.get(C[ye]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Fe,0)}t.blitFramebuffer(0,0,X,te,0,0,X,te,re,t.NEAREST),l===!0&&(L.length=0,dt.length=0,L.push(t.COLOR_ATTACHMENT0+ye),I.depthBuffer&&I.resolveDepthBuffer===!1&&(L.push(ee),dt.push(ee),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,dt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,L))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let ye=0;ye<C.length;ye++){n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[ye]);const Fe=i.get(C[ye]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,Fe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const C=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[C])}}}function $e(I){return Math.min(r.maxSamples,I.samples)}function Me(I){const C=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function yt(I){const C=s.render.frame;d.get(I)!==C&&(d.set(I,C),I.update())}function De(I,C){const X=I.colorSpace,te=I.format,re=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||X!==nr&&X!==Li&&(Qe.getTransfer(X)===rt?(te!==kn||re!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),C}function Ue(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(u.width=I.naturalWidth||I.width,u.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(u.width=I.displayWidth,u.height=I.displayHeight):(u.width=I.width,u.height=I.height),u}this.allocateTextureUnit=z,this.resetTextureUnits=T,this.setTexture2D=D,this.setTexture2DArray=B,this.setTexture3D=H,this.setTextureCube=$,this.rebindTextures=we,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=Me}function IA(t,e){function n(i,r=Li){let a;const s=Qe.getTransfer(r);if(i===yi)return t.UNSIGNED_BYTE;if(i===lf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===cf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Gv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Vv)return t.BYTE;if(i===Hv)return t.SHORT;if(i===js)return t.UNSIGNED_SHORT;if(i===of)return t.INT;if(i===Rr)return t.UNSIGNED_INT;if(i===ui)return t.FLOAT;if(i===$s)return t.HALF_FLOAT;if(i===Wv)return t.ALPHA;if(i===qv)return t.RGB;if(i===kn)return t.RGBA;if(i===Xv)return t.LUMINANCE;if(i===$v)return t.LUMINANCE_ALPHA;if(i===wa)return t.DEPTH_COMPONENT;if(i===ka)return t.DEPTH_STENCIL;if(i===Yv)return t.RED;if(i===uf)return t.RED_INTEGER;if(i===Kv)return t.RG;if(i===df)return t.RG_INTEGER;if(i===hf)return t.RGBA_INTEGER;if(i===rl||i===al||i===sl||i===ol)if(s===rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===rl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===al)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ol)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===rl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===al)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ol)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ud||i===kd||i===Fd||i===Od)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Ud)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===kd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Od)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zd||i===Bd||i===jd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===zd||i===Bd)return s===rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===jd)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Vd||i===Hd||i===Gd||i===Wd||i===qd||i===Xd||i===$d||i===Yd||i===Kd||i===Zd||i===Jd||i===Qd||i===eh||i===th)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Vd)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hd)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gd)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wd)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qd)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xd)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$d)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Yd)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Kd)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zd)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jd)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Qd)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===eh)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===th)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ll||i===nh||i===ih)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===ll)return s===rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ih)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zv||i===rh||i===ah||i===sh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===ll)return a.COMPRESSED_RED_RGTC1_EXT;if(i===rh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ah)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ua?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class DA extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ho extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const LA={type:"move"};class Tu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ho,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ho,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ho,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),h=this._getHandJoint(u,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const d=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],p=d.position.distanceTo(f.position),g=.02,y=.005;u.inputState.pinching&&p>g+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&p<=g-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=n.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(LA)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ho;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const UA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kA=`
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

}`;class FA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new rn,a=e.properties.get(r);a.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new xi({vertexShader:UA,fragmentShader:kA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Xn(new Qs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class OA extends Va{constructor(e,n){super();const i=this;let r=null,a=1,s=null,o="local-floor",l=1,u=null,d=null,f=null,p=null,g=null,y=null;const x=new FA,m=n.getContextAttributes();let h=null,v=null;const _=[],M=[],P=new Ve;let A=null;const E=new Dn;E.layers.enable(1),E.viewport=new Nt;const w=new Dn;w.layers.enable(2),w.viewport=new Nt;const S=[E,w],b=new DA;b.layers.enable(1),b.layers.enable(2);let T=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Y=_[V];return Y===void 0&&(Y=new Tu,_[V]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(V){let Y=_[V];return Y===void 0&&(Y=new Tu,_[V]=Y),Y.getGripSpace()},this.getHand=function(V){let Y=_[V];return Y===void 0&&(Y=new Tu,_[V]=Y),Y.getHandSpace()};function N(V){const Y=M.indexOf(V.inputSource);if(Y===-1)return;const ne=_[Y];ne!==void 0&&(ne.update(V.inputSource,V.frame,u||s),ne.dispatchEvent({type:V.type,data:V.inputSource}))}function D(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",B);for(let V=0;V<_.length;V++){const Y=M[V];Y!==null&&(M[V]=null,_[V].disconnect(Y))}T=null,z=null,x.reset(),e.setRenderTarget(h),g=null,p=null,f=null,r=null,v=null,ue.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(V){u=V},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return f},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",D),r.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const Y={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(r,n,Y),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),v=new Pr(g.framebufferWidth,g.framebufferHeight,{format:kn,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Y=null,ne=null,se=null;m.depth&&(se=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Y=m.stencil?ka:wa,ne=m.stencil?Ua:Rr);const be={colorFormat:n.RGBA8,depthFormat:se,scaleFactor:a};f=new XRWebGLBinding(r,n),p=f.createProjectionLayer(be),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),v=new Pr(p.textureWidth,p.textureHeight,{format:kn,type:yi,depthTexture:new fx(p.textureWidth,p.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(o),ue.setContext(r),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function B(V){for(let Y=0;Y<V.removed.length;Y++){const ne=V.removed[Y],se=M.indexOf(ne);se>=0&&(M[se]=null,_[se].disconnect(ne))}for(let Y=0;Y<V.added.length;Y++){const ne=V.added[Y];let se=M.indexOf(ne);if(se===-1){for(let we=0;we<_.length;we++)if(we>=M.length){M.push(ne),se=we;break}else if(M[we]===null){M[we]=ne,se=we;break}if(se===-1)break}const be=_[se];be&&be.connect(ne)}}const H=new W,$=new W;function k(V,Y,ne){H.setFromMatrixPosition(Y.matrixWorld),$.setFromMatrixPosition(ne.matrixWorld);const se=H.distanceTo($),be=Y.projectionMatrix.elements,we=ne.projectionMatrix.elements,Ae=be[14]/(be[10]-1),qe=be[14]/(be[10]+1),L=(be[9]+1)/be[5],dt=(be[9]-1)/be[5],Xe=(be[8]-1)/be[0],$e=(we[8]+1)/we[0],Me=Ae*Xe,yt=Ae*$e,De=se/(-Xe+$e),Ue=De*-Xe;Y.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ue),V.translateZ(De),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const I=Ae+De,C=qe+De,X=Me-Ue,te=yt+(se-Ue),re=L*qe/C*I,ee=dt*qe/C*I;V.projectionMatrix.makePerspective(X,te,re,ee,I,C),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function K(V,Y){Y===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Y.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;x.texture!==null&&(V.near=x.depthNear,V.far=x.depthFar),b.near=w.near=E.near=V.near,b.far=w.far=E.far=V.far,(T!==b.near||z!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),T=b.near,z=b.far,E.near=T,E.far=z,w.near=T,w.far=z,E.updateProjectionMatrix(),w.updateProjectionMatrix(),V.updateProjectionMatrix());const Y=V.parent,ne=b.cameras;K(b,Y);for(let se=0;se<ne.length;se++)K(ne[se],Y);ne.length===2?k(b,E,w):b.projectionMatrix.copy(E.projectionMatrix),J(V,b,Y)};function J(V,Y,ne){ne===null?V.matrix.copy(Y.matrixWorld):(V.matrix.copy(ne.matrixWorld),V.matrix.invert(),V.matrix.multiply(Y.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Y.projectionMatrix),V.projectionMatrixInverse.copy(Y.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=oh*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(p===null&&g===null))return l},this.setFoveation=function(V){l=V,p!==null&&(p.fixedFoveation=V),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=V)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let ae=null;function xe(V,Y){if(d=Y.getViewerPose(u||s),y=Y,d!==null){const ne=d.views;g!==null&&(e.setRenderTargetFramebuffer(v,g.framebuffer),e.setRenderTarget(v));let se=!1;ne.length!==b.cameras.length&&(b.cameras.length=0,se=!0);for(let we=0;we<ne.length;we++){const Ae=ne[we];let qe=null;if(g!==null)qe=g.getViewport(Ae);else{const dt=f.getViewSubImage(p,Ae);qe=dt.viewport,we===0&&(e.setRenderTargetTextures(v,dt.colorTexture,p.ignoreDepthValues?void 0:dt.depthStencilTexture),e.setRenderTarget(v))}let L=S[we];L===void 0&&(L=new Dn,L.layers.enable(we),L.viewport=new Nt,S[we]=L),L.matrix.fromArray(Ae.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(Ae.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(qe.x,qe.y,qe.width,qe.height),we===0&&(b.matrix.copy(L.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),se===!0&&b.cameras.push(L)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")){const we=f.getDepthInformation(ne[0]);we&&we.isValid&&we.texture&&x.init(e,we,r.renderState)}}for(let ne=0;ne<_.length;ne++){const se=M[ne],be=_[ne];se!==null&&be!==void 0&&be.update(se,Y,u||s)}ae&&ae(V,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),y=null}const ue=new dx;ue.setAnimationLoop(xe),this.setAnimationLoop=function(V){ae=V},this.dispose=function(){}}}const cr=new vi,zA=new Et;function BA(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,ox(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,_,M){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(m,h):h.isMeshToonMaterial?(a(m,h),f(m,h)):h.isMeshPhongMaterial?(a(m,h),d(m,h)):h.isMeshStandardMaterial?(a(m,h),p(m,h),h.isMeshPhysicalMaterial&&g(m,h,M)):h.isMeshMatcapMaterial?(a(m,h),y(m,h)):h.isMeshDepthMaterial?a(m,h):h.isMeshDistanceMaterial?(a(m,h),x(m,h)):h.isMeshNormalMaterial?a(m,h):h.isLineBasicMaterial?(s(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,v,_):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===nn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===nn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h),_=v.envMap,M=v.envMapRotation;_&&(m.envMap.value=_,cr.copy(M),cr.x*=-1,cr.y*=-1,cr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),m.envMapRotation.value.setFromMatrix4(zA.makeRotationFromEuler(cr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function s(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,_){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=_*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function p(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function g(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===nn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function jA(t,e,n,i){let r={},a={},s=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){const M=_.program;i.uniformBlockBinding(v,M)}function u(v,_){let M=r[v.id];M===void 0&&(y(v),M=d(v),r[v.id]=M,v.addEventListener("dispose",m));const P=_.program;i.updateUBOMapping(v,P);const A=e.render.frame;a[v.id]!==A&&(p(v),a[v.id]=A)}function d(v){const _=f();v.__bindingPointIndex=_;const M=t.createBuffer(),P=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,P,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,M),M}function f(){for(let v=0;v<o;v++)if(s.indexOf(v)===-1)return s.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(v){const _=r[v.id],M=v.uniforms,P=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let A=0,E=M.length;A<E;A++){const w=Array.isArray(M[A])?M[A]:[M[A]];for(let S=0,b=w.length;S<b;S++){const T=w[S];if(g(T,A,S,P)===!0){const z=T.__offset,N=Array.isArray(T.value)?T.value:[T.value];let D=0;for(let B=0;B<N.length;B++){const H=N[B],$=x(H);typeof H=="number"||typeof H=="boolean"?(T.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,z+D,T.__data)):H.isMatrix3?(T.__data[0]=H.elements[0],T.__data[1]=H.elements[1],T.__data[2]=H.elements[2],T.__data[3]=0,T.__data[4]=H.elements[3],T.__data[5]=H.elements[4],T.__data[6]=H.elements[5],T.__data[7]=0,T.__data[8]=H.elements[6],T.__data[9]=H.elements[7],T.__data[10]=H.elements[8],T.__data[11]=0):(H.toArray(T.__data,D),D+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,T.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(v,_,M,P){const A=v.value,E=_+"_"+M;if(P[E]===void 0)return typeof A=="number"||typeof A=="boolean"?P[E]=A:P[E]=A.clone(),!0;{const w=P[E];if(typeof A=="number"||typeof A=="boolean"){if(w!==A)return P[E]=A,!0}else if(w.equals(A)===!1)return w.copy(A),!0}return!1}function y(v){const _=v.uniforms;let M=0;const P=16;for(let E=0,w=_.length;E<w;E++){const S=Array.isArray(_[E])?_[E]:[_[E]];for(let b=0,T=S.length;b<T;b++){const z=S[b],N=Array.isArray(z.value)?z.value:[z.value];for(let D=0,B=N.length;D<B;D++){const H=N[D],$=x(H),k=M%P,K=k%$.boundary,J=k+K;M+=K,J!==0&&P-J<$.storage&&(M+=P-J),z.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=$.storage}}}const A=M%P;return A>0&&(M+=P-A),v.__size=M,v.__cache={},this}function x(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const M=s.indexOf(_.__bindingPointIndex);s.splice(M,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete a[_.id]}function h(){for(const v in r)t.deleteBuffer(r[v]);s=[],r={},a={}}return{bind:l,update:u,dispose:h}}class VA{constructor(e={}){const{canvas:n=NM(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;const g=new Uint32Array(4),y=new Int32Array(4);let x=null,m=null;const h=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Hn,this.toneMapping=$i,this.toneMappingExposure=1;const _=this;let M=!1,P=0,A=0,E=null,w=-1,S=null;const b=new Nt,T=new Nt;let z=null;const N=new tt(0);let D=0,B=n.width,H=n.height,$=1,k=null,K=null;const J=new Nt(0,0,B,H),ae=new Nt(0,0,B,H);let xe=!1;const ue=new ux;let V=!1,Y=!1;const ne=new Et,se=new W,be=new Nt,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ae=!1;function qe(){return E===null?$:1}let L=i;function dt(R,O){return n.getContext(R,O)}try{const R={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${sf}`),n.addEventListener("webglcontextlost",Z,!1),n.addEventListener("webglcontextrestored",Q,!1),n.addEventListener("webglcontextcreationerror",de,!1),L===null){const O="webgl2";if(L=dt(O,R),L===null)throw dt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Xe,$e,Me,yt,De,Ue,I,C,X,te,re,ee,Ce,fe,ye,Fe,oe,ge,He,Ie,ve,Le,Be,ot;function F(){Xe=new $1(L),Xe.init(),Le=new IA(L,Xe),$e=new V1(L,Xe,e,Le),Me=new RA(L),yt=new Z1(L),De=new mA,Ue=new NA(L,Xe,Me,De,$e,Le,yt),I=new G1(_),C=new X1(_),X=new rE(L),Be=new B1(L,X),te=new Y1(L,X,yt,Be),re=new Q1(L,te,X,yt),He=new J1(L,$e,Ue),Fe=new H1(De),ee=new pA(_,I,C,Xe,$e,Be,Fe),Ce=new BA(_,De),fe=new yA,ye=new wA(Xe),ge=new z1(_,I,C,Me,re,p,l),oe=new AA(_,re,$e),ot=new jA(L,yt,$e,Me),Ie=new j1(L,Xe,yt),ve=new K1(L,Xe,yt),yt.programs=ee.programs,_.capabilities=$e,_.extensions=Xe,_.properties=De,_.renderLists=fe,_.shadowMap=oe,_.state=Me,_.info=yt}F();const le=new OA(_,L);this.xr=le,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const R=Xe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Xe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(R){R!==void 0&&($=R,this.setSize(B,H,!1))},this.getSize=function(R){return R.set(B,H)},this.setSize=function(R,O,G=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,H=O,n.width=Math.floor(R*$),n.height=Math.floor(O*$),G===!0&&(n.style.width=R+"px",n.style.height=O+"px"),this.setViewport(0,0,R,O)},this.getDrawingBufferSize=function(R){return R.set(B*$,H*$).floor()},this.setDrawingBufferSize=function(R,O,G){B=R,H=O,$=G,n.width=Math.floor(R*G),n.height=Math.floor(O*G),this.setViewport(0,0,R,O)},this.getCurrentViewport=function(R){return R.copy(b)},this.getViewport=function(R){return R.copy(J)},this.setViewport=function(R,O,G,q){R.isVector4?J.set(R.x,R.y,R.z,R.w):J.set(R,O,G,q),Me.viewport(b.copy(J).multiplyScalar($).round())},this.getScissor=function(R){return R.copy(ae)},this.setScissor=function(R,O,G,q){R.isVector4?ae.set(R.x,R.y,R.z,R.w):ae.set(R,O,G,q),Me.scissor(T.copy(ae).multiplyScalar($).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(R){Me.setScissorTest(xe=R)},this.setOpaqueSort=function(R){k=R},this.setTransparentSort=function(R){K=R},this.getClearColor=function(R){return R.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(R=!0,O=!0,G=!0){let q=0;if(R){let j=!1;if(E!==null){const ce=E.texture.format;j=ce===hf||ce===df||ce===uf}if(j){const ce=E.texture.type,pe=ce===yi||ce===Rr||ce===js||ce===Ua||ce===lf||ce===cf,_e=ge.getClearColor(),Se=ge.getClearAlpha(),Pe=_e.r,Ne=_e.g,Te=_e.b;pe?(g[0]=Pe,g[1]=Ne,g[2]=Te,g[3]=Se,L.clearBufferuiv(L.COLOR,0,g)):(y[0]=Pe,y[1]=Ne,y[2]=Te,y[3]=Se,L.clearBufferiv(L.COLOR,0,y))}else q|=L.COLOR_BUFFER_BIT}O&&(q|=L.DEPTH_BUFFER_BIT),G&&(q|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Z,!1),n.removeEventListener("webglcontextrestored",Q,!1),n.removeEventListener("webglcontextcreationerror",de,!1),fe.dispose(),ye.dispose(),De.dispose(),I.dispose(),C.dispose(),re.dispose(),Be.dispose(),ot.dispose(),ee.dispose(),le.dispose(),le.removeEventListener("sessionstart",Bn),le.removeEventListener("sessionend",yf),ir.stop()};function Z(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const R=yt.autoReset,O=oe.enabled,G=oe.autoUpdate,q=oe.needsUpdate,j=oe.type;F(),yt.autoReset=R,oe.enabled=O,oe.autoUpdate=G,oe.needsUpdate=q,oe.type=j}function de(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Re(R){const O=R.target;O.removeEventListener("dispose",Re),Ge(O)}function Ge(R){vt(R),De.remove(R)}function vt(R){const O=De.get(R).programs;O!==void 0&&(O.forEach(function(G){ee.releaseProgram(G)}),R.isShaderMaterial&&ee.releaseShaderCache(R))}this.renderBufferDirect=function(R,O,G,q,j,ce){O===null&&(O=we);const pe=j.isMesh&&j.matrixWorld.determinant()<0,_e=wx(R,O,G,q,j);Me.setMaterial(q,pe);let Se=G.index,Pe=1;if(q.wireframe===!0){if(Se=te.getWireframeAttribute(G),Se===void 0)return;Pe=2}const Ne=G.drawRange,Te=G.attributes.position;let Ke=Ne.start*Pe,ht=(Ne.start+Ne.count)*Pe;ce!==null&&(Ke=Math.max(Ke,ce.start*Pe),ht=Math.min(ht,(ce.start+ce.count)*Pe)),Se!==null?(Ke=Math.max(Ke,0),ht=Math.min(ht,Se.count)):Te!=null&&(Ke=Math.max(Ke,0),ht=Math.min(ht,Te.count));const ft=ht-Ke;if(ft<0||ft===1/0)return;Be.setup(j,q,_e,G,Se);let an,Ze=Ie;if(Se!==null&&(an=X.get(Se),Ze=ve,Ze.setIndex(an)),j.isMesh)q.wireframe===!0?(Me.setLineWidth(q.wireframeLinewidth*qe()),Ze.setMode(L.LINES)):Ze.setMode(L.TRIANGLES);else if(j.isLine){let Ee=q.linewidth;Ee===void 0&&(Ee=1),Me.setLineWidth(Ee*qe()),j.isLineSegments?Ze.setMode(L.LINES):j.isLineLoop?Ze.setMode(L.LINE_LOOP):Ze.setMode(L.LINE_STRIP)}else j.isPoints?Ze.setMode(L.POINTS):j.isSprite&&Ze.setMode(L.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Ze.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))Ze.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Ee=j._multiDrawStarts,Lt=j._multiDrawCounts,Je=j._multiDrawCount,En=Se?X.get(Se).bytesPerElement:1,kr=De.get(q).currentProgram.getUniforms();for(let sn=0;sn<Je;sn++)kr.setValue(L,"_gl_DrawID",sn),Ze.render(Ee[sn]/En,Lt[sn])}else if(j.isInstancedMesh)Ze.renderInstances(Ke,ft,j.count);else if(G.isInstancedBufferGeometry){const Ee=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Lt=Math.min(G.instanceCount,Ee);Ze.renderInstances(Ke,ft,Lt)}else Ze.render(Ke,ft)};function Dt(R,O,G){R.transparent===!0&&R.side===oi&&R.forceSinglePass===!1?(R.side=nn,R.needsUpdate=!0,to(R,O,G),R.side=Zi,R.needsUpdate=!0,to(R,O,G),R.side=oi):to(R,O,G)}this.compile=function(R,O,G=null){G===null&&(G=R),m=ye.get(G),m.init(O),v.push(m),G.traverseVisible(function(j){j.isLight&&j.layers.test(O.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),R!==G&&R.traverseVisible(function(j){j.isLight&&j.layers.test(O.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights();const q=new Set;return R.traverse(function(j){const ce=j.material;if(ce)if(Array.isArray(ce))for(let pe=0;pe<ce.length;pe++){const _e=ce[pe];Dt(_e,G,j),q.add(_e)}else Dt(ce,G,j),q.add(ce)}),v.pop(),m=null,q},this.compileAsync=function(R,O,G=null){const q=this.compile(R,O,G);return new Promise(j=>{function ce(){if(q.forEach(function(pe){De.get(pe).currentProgram.isReady()&&q.delete(pe)}),q.size===0){j(R);return}setTimeout(ce,10)}Xe.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Ye=null;function Jn(R){Ye&&Ye(R)}function Bn(){ir.stop()}function yf(){ir.start()}const ir=new dx;ir.setAnimationLoop(Jn),typeof self<"u"&&ir.setContext(self),this.setAnimationLoop=function(R){Ye=R,le.setAnimationLoop(R),R===null?ir.stop():ir.start()},le.addEventListener("sessionstart",Bn),le.addEventListener("sessionend",yf),this.render=function(R,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(O),O=le.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,O,E),m=ye.get(R,v.length),m.init(O),v.push(m),ne.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ue.setFromProjectionMatrix(ne),Y=this.localClippingEnabled,V=Fe.init(this.clippingPlanes,Y),x=fe.get(R,h.length),x.init(),h.push(x),le.enabled===!0&&le.isPresenting===!0){const ce=_.xr.getDepthSensingMesh();ce!==null&&xc(ce,O,-1/0,_.sortObjects)}xc(R,O,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(k,K),Ae=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Ae&&ge.addToRenderList(x,R),this.info.render.frame++,V===!0&&Fe.beginShadows();const G=m.state.shadowsArray;oe.render(G,R,O),V===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=x.opaque,j=x.transmissive;if(m.setupLights(),O.isArrayCamera){const ce=O.cameras;if(j.length>0)for(let pe=0,_e=ce.length;pe<_e;pe++){const Se=ce[pe];xf(q,j,R,Se)}Ae&&ge.render(R);for(let pe=0,_e=ce.length;pe<_e;pe++){const Se=ce[pe];vf(x,R,Se,Se.viewport)}}else j.length>0&&xf(q,j,R,O),Ae&&ge.render(R),vf(x,R,O);E!==null&&(Ue.updateMultisampleRenderTarget(E),Ue.updateRenderTargetMipmap(E)),R.isScene===!0&&R.onAfterRender(_,R,O),Be.resetDefaultState(),w=-1,S=null,v.pop(),v.length>0?(m=v[v.length-1],V===!0&&Fe.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function xc(R,O,G,q){if(R.visible===!1)return;if(R.layers.test(O.layers)){if(R.isGroup)G=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(O);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ue.intersectsSprite(R)){q&&be.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ne);const pe=re.update(R),_e=R.material;_e.visible&&x.push(R,pe,_e,G,be.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ue.intersectsObject(R))){const pe=re.update(R),_e=R.material;if(q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),be.copy(R.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),be.copy(pe.boundingSphere.center)),be.applyMatrix4(R.matrixWorld).applyMatrix4(ne)),Array.isArray(_e)){const Se=pe.groups;for(let Pe=0,Ne=Se.length;Pe<Ne;Pe++){const Te=Se[Pe],Ke=_e[Te.materialIndex];Ke&&Ke.visible&&x.push(R,pe,Ke,G,be.z,Te)}}else _e.visible&&x.push(R,pe,_e,G,be.z,null)}}const ce=R.children;for(let pe=0,_e=ce.length;pe<_e;pe++)xc(ce[pe],O,G,q)}function vf(R,O,G,q){const j=R.opaque,ce=R.transmissive,pe=R.transparent;m.setupLightsView(G),V===!0&&Fe.setGlobalState(_.clippingPlanes,G),q&&Me.viewport(b.copy(q)),j.length>0&&eo(j,O,G),ce.length>0&&eo(ce,O,G),pe.length>0&&eo(pe,O,G),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function xf(R,O,G,q){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new Pr(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?$s:yi,minFilter:_r,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const ce=m.state.transmissionRenderTarget[q.id],pe=q.viewport||b;ce.setSize(pe.z,pe.w);const _e=_.getRenderTarget();_.setRenderTarget(ce),_.getClearColor(N),D=_.getClearAlpha(),D<1&&_.setClearColor(16777215,.5),_.clear(),Ae&&ge.render(G);const Se=_.toneMapping;_.toneMapping=$i;const Pe=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),V===!0&&Fe.setGlobalState(_.clippingPlanes,q),eo(R,G,q),Ue.updateMultisampleRenderTarget(ce),Ue.updateRenderTargetMipmap(ce),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Te=0,Ke=O.length;Te<Ke;Te++){const ht=O[Te],ft=ht.object,an=ht.geometry,Ze=ht.material,Ee=ht.group;if(Ze.side===oi&&ft.layers.test(q.layers)){const Lt=Ze.side;Ze.side=nn,Ze.needsUpdate=!0,_f(ft,G,q,an,Ze,Ee),Ze.side=Lt,Ze.needsUpdate=!0,Ne=!0}}Ne===!0&&(Ue.updateMultisampleRenderTarget(ce),Ue.updateRenderTargetMipmap(ce))}_.setRenderTarget(_e),_.setClearColor(N,D),Pe!==void 0&&(q.viewport=Pe),_.toneMapping=Se}function eo(R,O,G){const q=O.isScene===!0?O.overrideMaterial:null;for(let j=0,ce=R.length;j<ce;j++){const pe=R[j],_e=pe.object,Se=pe.geometry,Pe=q===null?pe.material:q,Ne=pe.group;_e.layers.test(G.layers)&&_f(_e,O,G,Se,Pe,Ne)}}function _f(R,O,G,q,j,ce){R.onBeforeRender(_,O,G,q,j,ce),R.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.transparent===!0&&j.side===oi&&j.forceSinglePass===!1?(j.side=nn,j.needsUpdate=!0,_.renderBufferDirect(G,O,q,j,R,ce),j.side=Zi,j.needsUpdate=!0,_.renderBufferDirect(G,O,q,j,R,ce),j.side=oi):_.renderBufferDirect(G,O,q,j,R,ce),R.onAfterRender(_,O,G,q,j,ce)}function to(R,O,G){O.isScene!==!0&&(O=we);const q=De.get(R),j=m.state.lights,ce=m.state.shadowsArray,pe=j.state.version,_e=ee.getParameters(R,j.state,ce,O,G),Se=ee.getProgramCacheKey(_e);let Pe=q.programs;q.environment=R.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(R.isMeshStandardMaterial?C:I).get(R.envMap||q.environment),q.envMapRotation=q.environment!==null&&R.envMap===null?O.environmentRotation:R.envMapRotation,Pe===void 0&&(R.addEventListener("dispose",Re),Pe=new Map,q.programs=Pe);let Ne=Pe.get(Se);if(Ne!==void 0){if(q.currentProgram===Ne&&q.lightsStateVersion===pe)return bf(R,_e),Ne}else _e.uniforms=ee.getUniforms(R),R.onBeforeCompile(_e,_),Ne=ee.acquireProgram(_e,Se),Pe.set(Se,Ne),q.uniforms=_e.uniforms;const Te=q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Te.clippingPlanes=Fe.uniform),bf(R,_e),q.needsLights=Ex(R),q.lightsStateVersion=pe,q.needsLights&&(Te.ambientLightColor.value=j.state.ambient,Te.lightProbe.value=j.state.probe,Te.directionalLights.value=j.state.directional,Te.directionalLightShadows.value=j.state.directionalShadow,Te.spotLights.value=j.state.spot,Te.spotLightShadows.value=j.state.spotShadow,Te.rectAreaLights.value=j.state.rectArea,Te.ltc_1.value=j.state.rectAreaLTC1,Te.ltc_2.value=j.state.rectAreaLTC2,Te.pointLights.value=j.state.point,Te.pointLightShadows.value=j.state.pointShadow,Te.hemisphereLights.value=j.state.hemi,Te.directionalShadowMap.value=j.state.directionalShadowMap,Te.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Te.spotShadowMap.value=j.state.spotShadowMap,Te.spotLightMatrix.value=j.state.spotLightMatrix,Te.spotLightMap.value=j.state.spotLightMap,Te.pointShadowMap.value=j.state.pointShadowMap,Te.pointShadowMatrix.value=j.state.pointShadowMatrix),q.currentProgram=Ne,q.uniformsList=null,Ne}function Sf(R){if(R.uniformsList===null){const O=R.currentProgram.getUniforms();R.uniformsList=cl.seqWithValue(O.seq,R.uniforms)}return R.uniformsList}function bf(R,O){const G=De.get(R);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function wx(R,O,G,q,j){O.isScene!==!0&&(O=we),Ue.resetTextureUnits();const ce=O.fog,pe=q.isMeshStandardMaterial?O.environment:null,_e=E===null?_.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:nr,Se=(q.isMeshStandardMaterial?C:I).get(q.envMap||pe),Pe=q.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ne=!!G.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Te=!!G.morphAttributes.position,Ke=!!G.morphAttributes.normal,ht=!!G.morphAttributes.color;let ft=$i;q.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(ft=_.toneMapping);const an=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ze=an!==void 0?an.length:0,Ee=De.get(q),Lt=m.state.lights;if(V===!0&&(Y===!0||R!==S)){const gn=R===S&&q.id===w;Fe.setState(q,R,gn)}let Je=!1;q.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Lt.state.version||Ee.outputColorSpace!==_e||j.isBatchedMesh&&Ee.batching===!1||!j.isBatchedMesh&&Ee.batching===!0||j.isBatchedMesh&&Ee.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ee.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ee.instancing===!1||!j.isInstancedMesh&&Ee.instancing===!0||j.isSkinnedMesh&&Ee.skinning===!1||!j.isSkinnedMesh&&Ee.skinning===!0||j.isInstancedMesh&&Ee.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ee.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ee.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ee.instancingMorph===!1&&j.morphTexture!==null||Ee.envMap!==Se||q.fog===!0&&Ee.fog!==ce||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Fe.numPlanes||Ee.numIntersection!==Fe.numIntersection)||Ee.vertexAlphas!==Pe||Ee.vertexTangents!==Ne||Ee.morphTargets!==Te||Ee.morphNormals!==Ke||Ee.morphColors!==ht||Ee.toneMapping!==ft||Ee.morphTargetsCount!==Ze)&&(Je=!0):(Je=!0,Ee.__version=q.version);let En=Ee.currentProgram;Je===!0&&(En=to(q,O,j));let kr=!1,sn=!1,_c=!1;const xt=En.getUniforms(),Si=Ee.uniforms;if(Me.useProgram(En.program)&&(kr=!0,sn=!0,_c=!0),q.id!==w&&(w=q.id,sn=!0),kr||S!==R){xt.setValue(L,"projectionMatrix",R.projectionMatrix),xt.setValue(L,"viewMatrix",R.matrixWorldInverse);const gn=xt.map.cameraPosition;gn!==void 0&&gn.setValue(L,se.setFromMatrixPosition(R.matrixWorld)),$e.logarithmicDepthBuffer&&xt.setValue(L,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&xt.setValue(L,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,sn=!0,_c=!0)}if(j.isSkinnedMesh){xt.setOptional(L,j,"bindMatrix"),xt.setOptional(L,j,"bindMatrixInverse");const gn=j.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),xt.setValue(L,"boneTexture",gn.boneTexture,Ue))}j.isBatchedMesh&&(xt.setOptional(L,j,"batchingTexture"),xt.setValue(L,"batchingTexture",j._matricesTexture,Ue),xt.setOptional(L,j,"batchingIdTexture"),xt.setValue(L,"batchingIdTexture",j._indirectTexture,Ue),xt.setOptional(L,j,"batchingColorTexture"),j._colorsTexture!==null&&xt.setValue(L,"batchingColorTexture",j._colorsTexture,Ue));const Sc=G.morphAttributes;if((Sc.position!==void 0||Sc.normal!==void 0||Sc.color!==void 0)&&He.update(j,G,En),(sn||Ee.receiveShadow!==j.receiveShadow)&&(Ee.receiveShadow=j.receiveShadow,xt.setValue(L,"receiveShadow",j.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Si.envMap.value=Se,Si.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&O.environment!==null&&(Si.envMapIntensity.value=O.environmentIntensity),sn&&(xt.setValue(L,"toneMappingExposure",_.toneMappingExposure),Ee.needsLights&&Mx(Si,_c),ce&&q.fog===!0&&Ce.refreshFogUniforms(Si,ce),Ce.refreshMaterialUniforms(Si,q,$,H,m.state.transmissionRenderTarget[R.id]),cl.upload(L,Sf(Ee),Si,Ue)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(cl.upload(L,Sf(Ee),Si,Ue),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&xt.setValue(L,"center",j.center),xt.setValue(L,"modelViewMatrix",j.modelViewMatrix),xt.setValue(L,"normalMatrix",j.normalMatrix),xt.setValue(L,"modelMatrix",j.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const gn=q.uniformsGroups;for(let bc=0,Cx=gn.length;bc<Cx;bc++){const wf=gn[bc];ot.update(wf,En),ot.bind(wf,En)}}return En}function Mx(R,O){R.ambientLightColor.needsUpdate=O,R.lightProbe.needsUpdate=O,R.directionalLights.needsUpdate=O,R.directionalLightShadows.needsUpdate=O,R.pointLights.needsUpdate=O,R.pointLightShadows.needsUpdate=O,R.spotLights.needsUpdate=O,R.spotLightShadows.needsUpdate=O,R.rectAreaLights.needsUpdate=O,R.hemisphereLights.needsUpdate=O}function Ex(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(R,O,G){De.get(R.texture).__webglTexture=O,De.get(R.depthTexture).__webglTexture=G;const q=De.get(R);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=G===void 0,q.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,O){const G=De.get(R);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(R,O=0,G=0){E=R,P=O,A=G;let q=!0,j=null,ce=!1,pe=!1;if(R){const Se=De.get(R);Se.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(L.FRAMEBUFFER,null),q=!1):Se.__webglFramebuffer===void 0?Ue.setupRenderTarget(R):Se.__hasExternalTextures&&Ue.rebindTextures(R,De.get(R.texture).__webglTexture,De.get(R.depthTexture).__webglTexture);const Pe=R.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(pe=!0);const Ne=De.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ne[O])?j=Ne[O][G]:j=Ne[O],ce=!0):R.samples>0&&Ue.useMultisampledRTT(R)===!1?j=De.get(R).__webglMultisampledFramebuffer:Array.isArray(Ne)?j=Ne[G]:j=Ne,b.copy(R.viewport),T.copy(R.scissor),z=R.scissorTest}else b.copy(J).multiplyScalar($).floor(),T.copy(ae).multiplyScalar($).floor(),z=xe;if(Me.bindFramebuffer(L.FRAMEBUFFER,j)&&q&&Me.drawBuffers(R,j),Me.viewport(b),Me.scissor(T),Me.setScissorTest(z),ce){const Se=De.get(R.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,Se.__webglTexture,G)}else if(pe){const Se=De.get(R.texture),Pe=O||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Se.__webglTexture,G||0,Pe)}w=-1},this.readRenderTargetPixels=function(R,O,G,q,j,ce,pe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=De.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&pe!==void 0&&(_e=_e[pe]),_e){Me.bindFramebuffer(L.FRAMEBUFFER,_e);try{const Se=R.texture,Pe=Se.format,Ne=Se.type;if(!$e.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=R.width-q&&G>=0&&G<=R.height-j&&L.readPixels(O,G,q,j,Le.convert(Pe),Le.convert(Ne),ce)}finally{const Se=E!==null?De.get(E).__webglFramebuffer:null;Me.bindFramebuffer(L.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(R,O,G,q,j,ce,pe){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=De.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&pe!==void 0&&(_e=_e[pe]),_e){Me.bindFramebuffer(L.FRAMEBUFFER,_e);try{const Se=R.texture,Pe=Se.format,Ne=Se.type;if(!$e.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=R.width-q&&G>=0&&G<=R.height-j){const Te=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Te),L.bufferData(L.PIXEL_PACK_BUFFER,ce.byteLength,L.STREAM_READ),L.readPixels(O,G,q,j,Le.convert(Pe),Le.convert(Ne),0),L.flush();const Ke=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await IM(L,Ke,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,Te),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ce)}finally{L.deleteBuffer(Te),L.deleteSync(Ke)}return ce}}finally{const Se=E!==null?De.get(E).__webglFramebuffer:null;Me.bindFramebuffer(L.FRAMEBUFFER,Se)}}},this.copyFramebufferToTexture=function(R,O=null,G=0){R.isTexture!==!0&&(_s("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,R=arguments[1]);const q=Math.pow(2,-G),j=Math.floor(R.image.width*q),ce=Math.floor(R.image.height*q),pe=O!==null?O.x:0,_e=O!==null?O.y:0;Ue.setTexture2D(R,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,pe,_e,j,ce),Me.unbindTexture()},this.copyTextureToTexture=function(R,O,G=null,q=null,j=0){R.isTexture!==!0&&(_s("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,R=arguments[1],O=arguments[2],j=arguments[3]||0,G=null);let ce,pe,_e,Se,Pe,Ne;G!==null?(ce=G.max.x-G.min.x,pe=G.max.y-G.min.y,_e=G.min.x,Se=G.min.y):(ce=R.image.width,pe=R.image.height,_e=0,Se=0),q!==null?(Pe=q.x,Ne=q.y):(Pe=0,Ne=0);const Te=Le.convert(O.format),Ke=Le.convert(O.type);Ue.setTexture2D(O,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const ht=L.getParameter(L.UNPACK_ROW_LENGTH),ft=L.getParameter(L.UNPACK_IMAGE_HEIGHT),an=L.getParameter(L.UNPACK_SKIP_PIXELS),Ze=L.getParameter(L.UNPACK_SKIP_ROWS),Ee=L.getParameter(L.UNPACK_SKIP_IMAGES),Lt=R.isCompressedTexture?R.mipmaps[j]:R.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Lt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Lt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,_e),L.pixelStorei(L.UNPACK_SKIP_ROWS,Se),R.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,j,Pe,Ne,ce,pe,Te,Ke,Lt.data):R.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,j,Pe,Ne,Lt.width,Lt.height,Te,Lt.data):L.texSubImage2D(L.TEXTURE_2D,j,Pe,Ne,ce,pe,Te,Ke,Lt),L.pixelStorei(L.UNPACK_ROW_LENGTH,ht),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ft),L.pixelStorei(L.UNPACK_SKIP_PIXELS,an),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ze),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ee),j===0&&O.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(R,O,G=null,q=null,j=0){R.isTexture!==!0&&(_s("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,q=arguments[1]||null,R=arguments[2],O=arguments[3],j=arguments[4]||0);let ce,pe,_e,Se,Pe,Ne,Te,Ke,ht;const ft=R.isCompressedTexture?R.mipmaps[j]:R.image;G!==null?(ce=G.max.x-G.min.x,pe=G.max.y-G.min.y,_e=G.max.z-G.min.z,Se=G.min.x,Pe=G.min.y,Ne=G.min.z):(ce=ft.width,pe=ft.height,_e=ft.depth,Se=0,Pe=0,Ne=0),q!==null?(Te=q.x,Ke=q.y,ht=q.z):(Te=0,Ke=0,ht=0);const an=Le.convert(O.format),Ze=Le.convert(O.type);let Ee;if(O.isData3DTexture)Ue.setTexture3D(O,0),Ee=L.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)Ue.setTexture2DArray(O,0),Ee=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const Lt=L.getParameter(L.UNPACK_ROW_LENGTH),Je=L.getParameter(L.UNPACK_IMAGE_HEIGHT),En=L.getParameter(L.UNPACK_SKIP_PIXELS),kr=L.getParameter(L.UNPACK_SKIP_ROWS),sn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ft.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ft.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Se),L.pixelStorei(L.UNPACK_SKIP_ROWS,Pe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ne),R.isDataTexture||R.isData3DTexture?L.texSubImage3D(Ee,j,Te,Ke,ht,ce,pe,_e,an,Ze,ft.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(Ee,j,Te,Ke,ht,ce,pe,_e,an,ft.data):L.texSubImage3D(Ee,j,Te,Ke,ht,ce,pe,_e,an,Ze,ft),L.pixelStorei(L.UNPACK_ROW_LENGTH,Lt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Je),L.pixelStorei(L.UNPACK_SKIP_PIXELS,En),L.pixelStorei(L.UNPACK_SKIP_ROWS,kr),L.pixelStorei(L.UNPACK_SKIP_IMAGES,sn),j===0&&O.generateMipmaps&&L.generateMipmap(Ee),Me.unbindTexture()},this.initRenderTarget=function(R){De.get(R).__webglFramebuffer===void 0&&Ue.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Ue.setTextureCube(R,0):R.isData3DTexture?Ue.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Ue.setTexture2DArray(R,0):Ue.setTexture2D(R,0),Me.unbindTexture()},this.resetState=function(){P=0,A=0,E=null,Me.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===ff?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===dc?"display-p3":"srgb"}}class HA extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class GA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Qm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Qm(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sf);const WA=`
precision highp float;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,qA=`
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
`,eg=8;function XA(t){let e=t.trim();e.startsWith("#")&&(e=e.slice(1));let n=255,i=255,r=255;return e.length===3?(n=parseInt(e[0]+e[0],16),i=parseInt(e[1]+e[1],16),r=parseInt(e[2]+e[2],16)):e.length===6&&(n=parseInt(e.slice(0,2),16),i=parseInt(e.slice(2,4),16),r=parseInt(e.slice(4,6),16)),new W(n/255,i/255,r/255)}function $A({linesGradient:t,enabledWaves:e=["top","middle","bottom"],lineCount:n=[6],lineDistance:i=[5],topWavePosition:r,middleWavePosition:a,bottomWavePosition:s={x:2,y:-.7,rotate:-1},animationSpeed:o=1,interactive:l=!0,bendRadius:u=5,bendStrength:d=-.5,mouseDamping:f=.05,parallax:p=!0,parallaxStrength:g=.2,mixBlendMode:y="screen"}){const x=U.useRef(null),m=U.useRef(new Ve(-1e3,-1e3)),h=U.useRef(new Ve(-1e3,-1e3)),v=U.useRef(0),_=U.useRef(0),M=U.useRef(new Ve(0,0)),P=U.useRef(new Ve(0,0)),A=D=>{if(typeof n=="number")return n;if(!e.includes(D))return 0;const B=e.indexOf(D);return n[B]??6},E=D=>{if(typeof i=="number")return i;if(!e.includes(D))return .1;const B=e.indexOf(D);return i[B]??.1},w=e.includes("top")?A("top"):0,S=e.includes("middle")?A("middle"):0,b=e.includes("bottom")?A("bottom"):0,T=e.includes("top")?E("top")*.01:.01,z=e.includes("middle")?E("middle")*.01:.01,N=e.includes("bottom")?E("bottom")*.01:.01;return U.useEffect(()=>{if(!x.current)return;const D=new HA,B=new hx(-1,1,1,-1,0,1);B.position.z=1;const H=new VA({antialias:!0,alpha:!1});H.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),H.domElement.style.width="100%",H.domElement.style.height="100%",x.current.appendChild(H.domElement);const $={iTime:{value:0},iResolution:{value:new W(1,1,1)},animationSpeed:{value:o},enableTop:{value:e.includes("top")},enableMiddle:{value:e.includes("middle")},enableBottom:{value:e.includes("bottom")},topLineCount:{value:w},middleLineCount:{value:S},bottomLineCount:{value:b},topLineDistance:{value:T},middleLineDistance:{value:z},bottomLineDistance:{value:N},topWavePosition:{value:new W((r==null?void 0:r.x)??10,(r==null?void 0:r.y)??.5,(r==null?void 0:r.rotate)??-.4)},middleWavePosition:{value:new W((a==null?void 0:a.x)??5,(a==null?void 0:a.y)??0,(a==null?void 0:a.rotate)??.2)},bottomWavePosition:{value:new W((s==null?void 0:s.x)??2,(s==null?void 0:s.y)??-.7,(s==null?void 0:s.rotate)??.4)},iMouse:{value:new Ve(-1e3,-1e3)},interactive:{value:l},bendRadius:{value:u},bendStrength:{value:d},bendInfluence:{value:0},parallax:{value:p},parallaxStrength:{value:g},parallaxOffset:{value:new Ve(0,0)},lineGradient:{value:Array.from({length:eg},()=>new W(1,1,1))},lineGradientCount:{value:0}};if(t&&t.length>0){const be=t.slice(0,eg);$.lineGradientCount.value=be.length,be.forEach((we,Ae)=>{const qe=XA(we);$.lineGradient.value[Ae].set(qe.x,qe.y,qe.z)})}const k=new xi({uniforms:$,vertexShader:WA,fragmentShader:qA}),K=new Qs(2,2),J=new Xn(K,k);D.add(J);const ae=new GA,xe=()=>{const be=x.current;if(!be)return;const we=be.clientWidth||1,Ae=be.clientHeight||1;H.setSize(we,Ae,!1);const qe=H.domElement.width,L=H.domElement.height;$.iResolution.value.set(qe,L,1)};xe();const ue=typeof ResizeObserver<"u"?new ResizeObserver(xe):null;ue&&x.current&&ue.observe(x.current);const V=be=>{const we=H.domElement.getBoundingClientRect(),Ae=be.clientX-we.left,qe=be.clientY-we.top,L=H.getPixelRatio();if(m.current.set(Ae*L,(we.height-qe)*L),v.current=1,p){const dt=we.width/2,Xe=we.height/2,$e=(Ae-dt)/we.width,Me=-(qe-Xe)/we.height;M.current.set($e*g,Me*g)}},Y=()=>{v.current=0};l&&(H.domElement.addEventListener("pointermove",V),H.domElement.addEventListener("pointerleave",Y));let ne=0;const se=()=>{$.iTime.value=ae.getElapsedTime(),l&&(h.current.lerp(m.current,f),$.iMouse.value.copy(h.current),_.current+=(v.current-_.current)*f,$.bendInfluence.value=_.current),p&&(P.current.lerp(M.current,f),$.parallaxOffset.value.copy(P.current)),H.render(D,B),ne=requestAnimationFrame(se)};return se(),()=>{cancelAnimationFrame(ne),ue&&x.current&&ue.disconnect(),l&&(H.domElement.removeEventListener("pointermove",V),H.domElement.removeEventListener("pointerleave",Y)),K.dispose(),k.dispose(),H.dispose(),H.domElement.parentElement&&H.domElement.parentElement.removeChild(H.domElement)}},[o,u,d,b,N,s,e,l,n,i,t,S,z,a,f,p,g,w,T,r]),c.jsx("div",{ref:x,className:"floating-lines-container",style:{mixBlendMode:y}})}function YA(){return c.jsxs("div",{className:"ambient-bg","aria-hidden":"true",children:[c.jsx("div",{className:"ambient-layer",children:c.jsx(Lw,{gradientColors:["#1a1f2b","#0b1020","#2b1140"],blindCount:14,spotlightOpacity:.6,noise:.28,shineDirection:"right"})}),c.jsx("div",{className:"ambient-layer",style:{mixBlendMode:"screen",opacity:.6},children:c.jsx($A,{linesGradient:["#22d3ee","#4f7cff"],lineCount:[3,5,3]})}),c.jsx("div",{className:"ambient-overlay"})]})}function KA(){const{pathname:t}=Lr();return U.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},[t]),null}const pc="http://localhost:8080";async function ke(t,e){const n={"Content-Type":"application/json",...(e==null?void 0:e.headers)||{}},i=await fetch(`${pc}${t}`,{...e,headers:n});if(!i.ok){const r=await i.text();throw new Error(r||`Request failed: ${i.status}`)}return i.json()}const rs={heroTitle:"INERTIA 2.0: JEC Annual Tech Fest",heroSubtitle:"The flagship annual festival at Jabalpur Engineering College, featuring Hackathon, Workshops, Robo Race, eSports, Open Mic, and culture.",dates:"Coming 2026",location:"Jabalpur Engineering College, Jabalpur, Madhya Pradesh",highlights:["Hackathon","IoT Workshop","Robo Race","eSports Arena","Open Mic Stage","DJ Night & Culture Fest"]},Ss=[{id:1,slug:"hackathon",title:"Hackathon",description:"2-day hackathon: prototype build on 26 Feb and stage presentation on 27 Feb. Fixed team size: 4 (leader + 3 members).",dateLabel:"26-27 Feb",ctaLabel:"Register Hackathon"},{id:2,slug:"workshops",title:"Workshop",description:"IoT-based single phase induction motor and speed control system workshop.",dateLabel:"2 Days",ctaLabel:"Register Workshop"},{id:3,slug:"robo-race",title:"Kinetic ShowDown",description:"RC car design and race challenge with teams of 2 to 4 members.",dateLabel:"Final Day",ctaLabel:"Register Robo Race"},{id:4,slug:"esports",title:"eSports",description:"Compete in Valorant (5 players) or BGMI (4 players).",dateLabel:"Tournament",ctaLabel:"Register eSports"},{id:5,slug:"open-mic",title:"Open Mic",description:"Free stage registration for performers.",dateLabel:"Open Stage",ctaLabel:"Register Open Mic"}],Au=[{id:1,question:"What is the hackathon schedule?",answer:"26 February: prototype build. 27 February: stage presentation and explanation."},{id:2,question:"What is the hackathon registration fee?",answer:"The Hackathon registration fee is INR 300 per team."},{id:6,question:"What is the hackathon team size?",answer:"Exactly 4 members per team: 1 leader + 3 members."},{id:3,question:"What are the eSports team sizes?",answer:"Valorant needs 5 players, BGMI needs 4 players."},{id:4,question:"When are hackathon problem statements announced?",answer:"Problem statements are revealed on the spot."},{id:5,question:"Can I register for multiple events?",answer:"Yes, you can register for Hackathon, Workshops, Robo Race, eSports, and Open Mic."}];function tg(t){return t.replace(/CodeHunt Hackathon/gi,"Hackathon").replace(/Kinetic Showdown/gi,"Robo Race").replace(/Workshop Series/gi,"IoT Workshop")}function ZA(t){const e=t.map(a=>a.slug==="robo-race"||a.slug==="kinetic-showdown"?{...a,slug:"robo-race",title:"Robo Race",ctaLabel:"Register Robo Race"}:a.slug==="hackathon"?{...a,title:"Hackathon",ctaLabel:"Register Hackathon"}:a.slug==="workshops"?{...a,title:"Workshop",description:"IoT-based single phase induction motor and speed control system workshop.",ctaLabel:"Register Workshop"}:a),n=e.some(a=>a.slug==="open-mic"),i=e.some(a=>a.slug==="esports"),r=[...e];return i||r.push(Ss.find(a=>a.slug==="esports")),n||r.push(Ss.find(a=>a.slug==="open-mic")),r}function JA(){const[t,e]=U.useState(rs),[n,i]=U.useState(Ss),[r,a]=U.useState([]),[s,o]=U.useState(Au);return U.useEffect(()=>{ke("/api/landing").then(l=>e({...rs,...l,heroSubtitle:rs.heroSubtitle,highlights:rs.highlights})).catch(()=>null),ke("/api/events").then(l=>i(Array.isArray(l)&&l.length>0?ZA(l):Ss)).catch(()=>null),ke("/api/gallery").then(l=>a(Array.isArray(l)?l:[])).catch(()=>a([])),ke("/api/faqs").then(l=>o(Array.isArray(l)?l.map(u=>({...u,question:tg(u.question),answer:tg(u.answer)})):Au)).catch(()=>null)},[]),c.jsxs(c.Fragment,{children:[c.jsxs("section",{className:"hero",children:[c.jsx("div",{className:"hero-grid",children:c.jsxs("div",{className:"text-panel",children:[c.jsx("span",{className:"hero-tag",children:"Annual Tech Fest · JEC"}),c.jsx("h1",{className:"hero-title",children:t.heroTitle}),c.jsx("p",{className:"hero-subtitle",children:t.heroSubtitle}),c.jsxs("div",{className:"hero-actions",children:[c.jsx(Pt,{className:"btn btn-primary",to:"/register",children:"Register Now"}),c.jsx(Pt,{className:"btn btn-ghost",to:"/hackathon",children:"Hackathon Registration"})]}),c.jsxs("div",{className:"pillars",children:[c.jsx("span",{className:"pillar",children:t.dates}),c.jsx("span",{className:"pillar",children:t.location})]})]})}),c.jsx("div",{className:"section-divider"})]}),c.jsxs("section",{className:"section",children:[c.jsx("h2",{className:"section-title",children:"Fest Highlights"}),c.jsx("p",{className:"section-subtitle",children:"Explore the core experiences of Inertia 2.0 and plan your festival journey."}),c.jsx("div",{className:"cards-grid",children:(t.highlights??rs.highlights).map((l,u)=>c.jsxs("div",{className:"card",children:[c.jsx("span",{className:"badge",children:"Highlight"}),c.jsx("h4",{children:l}),c.jsx("p",{children:"Join early to secure your spot and stay updated on schedules."})]},u))})]}),c.jsxs("section",{className:"section",children:[c.jsx("h2",{className:"section-title",children:"About Jabalpur Engineering College"}),c.jsx("p",{className:"section-subtitle",children:"Jabalpur Engineering College (JEC) was established in 1947 and is the first engineering college in Central India. The campus hosts undergraduate, postgraduate, and doctoral programs and is known for academic excellence, research culture, and innovation-driven learning."}),c.jsxs("div",{className:"cards-grid",children:[c.jsxs("div",{className:"card",children:[c.jsx("h4",{children:"Legacy of Excellence"}),c.jsx("p",{children:"Decades of engineering education with strong industry and research outcomes."})]}),c.jsxs("div",{className:"card",children:[c.jsx("h4",{children:"Research & Innovation"}),c.jsx("p",{children:"Modern labs and faculty guidance that fuel experimentation and new ideas."})]}),c.jsxs("div",{className:"card",children:[c.jsx("h4",{children:"Campus Experience"}),c.jsx("p",{children:"A sprawling campus in Jabalpur built for collaboration and maker culture."})]})]})]}),c.jsxs("section",{className:"section",children:[c.jsx("h2",{className:"section-title",children:"INERTIA 2.0 Lineup"}),c.jsx("p",{className:"section-subtitle",children:"INERTIA 2.0 expands the festival with a stronger mix of technical and cultural experiences."}),c.jsxs("div",{className:"cards-grid",children:[c.jsxs("div",{className:"card",children:[c.jsx("h4",{children:"Tech Talks"}),c.jsx("p",{children:"Industry leaders and researchers share insights, trends, and real-world case studies."})]}),c.jsxs("div",{className:"card",children:[c.jsx("h4",{children:"Startup & Project Expo"}),c.jsx("p",{children:"Showcase innovations, prototypes, and student ventures from across the region."})]}),c.jsxs("div",{className:"card",children:[c.jsx("h4",{children:"Automotive Competition"}),c.jsx("p",{children:"Speed, strategy, and engineering challenges focused on mobility and design."})]}),c.jsxs("div",{className:"card",children:[c.jsx("h4",{children:"Defense Expo"}),c.jsx("p",{children:"Explore defense tech, engineering showcases, and innovation exhibits."})]}),c.jsxs("div",{className:"card",children:[c.jsx("h4",{children:"Cultural Extravaganza"}),c.jsx("p",{children:"Live stage performances, DJ night, and celebration across the campus."})]})]})]}),c.jsxs("section",{className:"section",children:[c.jsx("h2",{className:"section-title",children:"Workshop Spotlight"}),c.jsx("p",{className:"section-subtitle",children:"Only one workshop will be conducted: IoT-based single phase induction motor and speed control system."}),c.jsx("div",{className:"cards-grid",children:c.jsxs("div",{className:"card",children:[c.jsx("h4",{children:"IoT-Based Motor Speed Control Workshop"}),c.jsx("p",{children:"Mentor: Dr. Praveen Kumar Sharma (PhD, NIT Durgapur)."}),c.jsx("p",{children:"Date: 26-27 February 2026."}),c.jsx("p",{children:"Venue: Jashan Audi, JEC Jabalpur."}),c.jsx("p",{children:"Fee: INR 300."})]})})]}),c.jsxs("section",{className:"section dark",children:[c.jsx("h2",{className:"section-title",children:"Core Events"}),c.jsx("p",{className:"section-subtitle",children:"Hackathon, Workshop, Robo Race, eSports, and Open Mic with dedicated registration flows."}),c.jsx("div",{className:"event-grid",children:(n&&n.length>0?n:Ss).map(l=>c.jsxs("div",{className:"event-card",children:[c.jsx("span",{className:"badge",children:l.dateLabel}),c.jsx("h3",{children:l.title}),c.jsx("p",{children:l.description}),c.jsx(Pt,{className:"btn btn-ghost",to:`/${l.slug}`,children:l.ctaLabel})]},l.id))})]}),c.jsxs("section",{className:"section",children:[c.jsx("h2",{className:"section-title",children:"Impact Snapshot"}),c.jsx("p",{className:"section-subtitle",children:"From participation to media reach, INERTIA continues to grow each year."}),c.jsxs("div",{className:"cards-grid",children:[c.jsxs("div",{className:"card",children:[c.jsx("span",{className:"badge",children:"Footfall"}),c.jsx("h4",{children:"1,900+"}),c.jsx("p",{children:"Peak campus footfall recorded for the INERTIA edition."})]}),c.jsxs("div",{className:"card",children:[c.jsx("span",{className:"badge",children:"Social Reach"}),c.jsx("h4",{children:"562+"}),c.jsx("p",{children:"Social media reach benchmark from the brochure insights."})]}),c.jsxs("div",{className:"card",children:[c.jsx("span",{className:"badge",children:"Media Coverage"}),c.jsx("h4",{children:"4 Outlets"}),c.jsx("p",{children:"Coverage across Dainik Bhaskar, Patrika, Nayi Dunia, and Hari Bhoomi."})]})]})]}),c.jsxs("section",{className:"section",children:[c.jsx("h2",{className:"section-title",children:"Glimpses"}),c.jsx("p",{className:"section-subtitle",children:"Highlights and memories from previous editions."}),r.length===0?c.jsx("div",{className:"banner empty-state",children:"No entries available yet."}):c.jsx("div",{className:"gallery-grid",children:r.map(l=>c.jsxs("div",{className:"gallery-card",children:[c.jsx("img",{src:l.imageUrl,alt:l.title}),c.jsxs("div",{className:"gallery-meta",children:[c.jsx("strong",{children:l.preview||l.title}),c.jsx("p",{children:l.description})]})]},l.id))})]}),c.jsxs("section",{className:"section",children:[c.jsx("h2",{className:"section-title",children:"FAQs"}),c.jsx("div",{className:"faq-list",children:(s??Au).map(l=>c.jsxs("div",{className:"faq-item",children:[c.jsx("strong",{children:l.question}),c.jsx("p",{children:l.answer})]},l.id))})]})]})}function QA(){const[t,e]=U.useState(""),[n,i]=U.useState(!1),[r,a]=U.useState(""),[s,o]=U.useState({phone:"",code:""}),[l,u]=U.useState(!1),[d,f]=U.useState(""),[p,g]=U.useState(null),y=async h=>{h.preventDefault(),a(""),i(!0);try{const v=await ke("/api/hackathon/id-card/request",{method:"POST",body:JSON.stringify({leaderPhone:t})});a(v.message),e("")}catch(v){a(v instanceof Error?v.message:"Unable to send request")}finally{i(!1)}},x=async h=>{h.preventDefault(),f(""),u(!0);try{const v=await ke("/api/hackathon/id-card/verify",{method:"POST",body:JSON.stringify({phone:s.phone,code:s.code})});g(v),f("ID card generated successfully.")}catch(v){g(null),f(v instanceof Error?v.message:"Unable to verify details")}finally{u(!1)}},m=()=>{p&&(f(""),fetch(`${pc}/api/hackathon/id-card/download`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({phone:s.phone,code:s.code})}).then(async h=>{if(!h.ok){const A=await h.text();throw new Error(A||"Unable to download ID card")}const v=await h.blob(),_=window.URL.createObjectURL(v),M=document.createElement("a"),P=p.participantName.trim().toLowerCase().replace(/[^a-z0-9]+/g,"-");M.href=_,M.download=`${P||"participant"}-hackathon-id.svg`,document.body.appendChild(M),M.click(),M.remove(),window.URL.revokeObjectURL(_)}).catch(h=>{f(h instanceof Error?h.message:"Unable to download ID card")}))};return c.jsxs("section",{className:"section",children:[c.jsx("h2",{className:"section-title",children:"CodeHunt Hackathon"}),c.jsxs("div",{className:"banner",style:{marginBottom:"18px"},children:[c.jsx("strong",{children:"Top Note: We only need the solution for the idea."}),c.jsx("p",{style:{margin:"8px 0 0"},children:"Focus on solving the problem clearly. Your implementation can be simple, scrappy, or polished. Vibe coding is allowed."})]}),c.jsxs("div",{className:"banner",style:{marginBottom:"18px"},children:[c.jsx("strong",{children:"Hackathon registrations are closed."}),c.jsx("p",{style:{margin:"8px 0 0"},children:"If your team is already registered, use the sections below for e-ID card and problem statement."})]}),c.jsxs("div",{className:"prize-pool-spotlight",children:[c.jsx("span",{className:"prize-pool-label",children:"Prize Pool"}),c.jsx("div",{className:"prize-pool-value",children:"INR 12,000"})]}),c.jsx("p",{className:"section-subtitle",children:"Two-day hackathon with internship interview opportunities, prototype building, and live stage presentations."}),c.jsx("div",{className:"cards-grid",style:{marginTop:"24px"},children:c.jsxs("div",{className:"card",children:[c.jsx("h4",{children:"Hackathon Sponsors"}),c.jsxs("div",{className:"sponsor-row",children:[c.jsx("img",{className:"sponsor-logo",src:"/time.png",alt:"Time sponsor",onError:h=>h.currentTarget.style.display="none"}),c.jsx("img",{className:"sponsor-logo",src:"/upgrad.png",alt:"upGrad sponsor",onError:h=>h.currentTarget.style.display="none"})]}),c.jsx("p",{style:{marginTop:"12px"},children:"Sponsors: TIME and upGrad."})]})}),c.jsxs("div",{className:"cards-grid",style:{marginTop:"24px"},children:[c.jsxs("div",{className:"card",children:[c.jsx("h4",{children:"Team Leader: Request e-ID Card"}),c.jsx("p",{children:"Enter the registered leader phone number and send request to hackathon manager."}),c.jsxs("form",{className:"form-grid",onSubmit:y,children:[c.jsx("input",{placeholder:"Registered leader WhatsApp number",value:t,onChange:h=>e(h.target.value),required:!0}),c.jsx("button",{className:"btn btn-primary",type:"submit",disabled:n,children:n?"Sending Request...":"Request e-ID Card"})]}),r&&c.jsx("div",{className:"banner",style:{marginTop:"16px"},children:r})]}),c.jsxs("div",{className:"card",children:[c.jsx("h4",{children:"Team Member: Get e-ID Card"}),c.jsx("p",{children:"Enter your registered phone number and 4-digit code from manager."}),c.jsxs("form",{className:"form-grid",onSubmit:x,children:[c.jsx("input",{placeholder:"Registered phone number",value:s.phone,onChange:h=>o(v=>({...v,phone:h.target.value})),required:!0}),c.jsx("input",{placeholder:"4-digit code",value:s.code,maxLength:4,onChange:h=>o(v=>({...v,code:h.target.value})),required:!0}),c.jsx("button",{className:"btn btn-primary",type:"submit",disabled:l,children:l?"Verifying...":"Get ID Card"})]}),d&&c.jsx("div",{className:"banner",style:{marginTop:"16px"},children:d})]})]}),p&&c.jsxs("div",{className:"card",style:{marginTop:"24px"},children:[c.jsx("h4",{children:"Your Hackathon e-ID Card"}),c.jsxs("div",{className:"id-card-preview",children:[c.jsxs("div",{className:"id-card-header",children:[c.jsx("div",{className:"id-card-event",children:"CODEHUNT HACKATHON"}),c.jsx("div",{className:"id-card-subtitle",children:"Official Participant ID"})]}),c.jsxs("div",{className:"id-card-body",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Name:"})," ",p.participantName]}),c.jsxs("p",{children:[c.jsx("strong",{children:"Role:"})," ",p.role]}),c.jsxs("p",{children:[c.jsx("strong",{children:"Phone:"})," ",p.participantPhone]}),c.jsxs("p",{children:[c.jsx("strong",{children:"Team:"})," ",p.teamName]}),c.jsxs("p",{children:[c.jsx("strong",{children:"College:"})," ",p.collegeName]}),c.jsxs("p",{children:[c.jsx("strong",{children:"Team ID:"})," ",p.teamId]}),c.jsxs("p",{children:[c.jsx("strong",{children:"Team Code:"})," ",p.teamCode]}),c.jsxs("p",{children:[c.jsx("strong",{children:"Issued:"})," ",p.issuedAt]})]})]}),c.jsx("button",{className:"btn btn-primary",type:"button",style:{marginTop:"16px"},onClick:m,children:"Download ID Card"})]}),c.jsxs("div",{className:"card",style:{marginTop:"24px"},children:[c.jsx("h4",{children:"Problem Statements"}),c.jsx("p",{children:"After receiving Team ID from manager, open complete problem statement flow."}),c.jsx(Pt,{className:"btn btn-primary",to:"/problemstatement",children:"View Problem Statement"})]})]})}const ng="razorpay-checkout-script";function eR(){if(window.Razorpay)return Promise.resolve();const t=document.getElementById(ng);return t?new Promise((e,n)=>{t.addEventListener("load",()=>e(),{once:!0}),t.addEventListener("error",()=>n(new Error("Unable to load payment gateway")),{once:!0})}):new Promise((e,n)=>{const i=document.createElement("script");i.id=ng,i.src="https://checkout.razorpay.com/v1/checkout.js",i.async=!0,i.onload=()=>e(),i.onerror=()=>n(new Error("Unable to load payment gateway")),document.body.appendChild(i)})}function tR(t,e,n){return new Promise((i,r)=>{if(!window.Razorpay){r(new Error("Payment gateway not available"));return}new window.Razorpay({key:t.key,amount:t.amount,currency:t.currency,name:"Inertia 2.0",description:`${n} Registration`,order_id:t.orderId,prefill:e,theme:{color:"#1d4ed8"},handler:s=>{i({razorpayOrderId:s.razorpay_order_id,razorpayPaymentId:s.razorpay_payment_id,razorpaySignature:s.razorpay_signature})},modal:{ondismiss:()=>r(new Error("Payment was cancelled"))}}).open()})}async function vx(t,e,n){return xx(t,e,n)}async function xx(t,e,n,i){await eR();const r=await ke("/api/payments/razorpay/order",{method:"POST",body:JSON.stringify({event:t})});return tR(r,e,n)}const mc={hackathon:"https://chat.whatsapp.com/Levkc07bFIPJrgUcvvHx18?mode=gi_t",kineticShowdown:"https://chat.whatsapp.com/IwlQQ0CvlZXDrQuOEysHNk?mode=gi_t",workshops:"https://chat.whatsapp.com/KdtdwL2U4LoLffzGjiy6Nj?mode=gi_t",esports:"https://chat.whatsapp.com/LGGupN5pEaf8oyTq3vNC1F?mode=gi_t",openMic:"https://chat.whatsapp.com/LbqecHlh4iZJXabqiVZPWM?mode=gi_t"};function gc(t){window.location.href=t}const Go={id:1,title:"IoT-Based Single Phase Induction Motor / Speed Control System",description:"Mentor: Dr. Praveen Kumar Sharma (PhD, NIT Durgapur) | Date: 26-27 Feb 2026 | Venue: Jashan Audi, JEC Jabalpur | Fee: INR 300."};function nR(){var u;const[t,e]=U.useState([Go]),[n,i]=U.useState({name:"",phone:"",collegeName:"",workshopId:String(Go.id)}),[r,a]=U.useState(""),[s,o]=U.useState(!1);U.useEffect(()=>{ke("/api/workshops").then(d=>{if(!Array.isArray(d)||d.length===0)return;const f=d.find(p=>/iot|single phase|induction|speed control/i.test(`${p.title} ${p.description}`))??d[0];e([{...Go,id:f.id}]),i(p=>({...p,workshopId:String(f.id)}))}).catch(()=>null)},[]);const l=async d=>{d.preventDefault(),a(""),o(!0);try{const f=await vx("workshops",{name:n.name,contact:n.phone},"Workshop"),p=await ke("/api/workshops/register",{method:"POST",body:JSON.stringify({...n,...f})});a(`${p.message} Redirecting to WhatsApp group...`),i(g=>({name:"",phone:"",collegeName:"",workshopId:g.workshopId})),setTimeout(()=>gc(mc.workshops),1400)}catch(f){a(f instanceof Error?f.message:"Unable to register")}finally{o(!1)}};return c.jsxs("section",{className:"section",children:[c.jsx("h2",{className:"section-title",children:"Workshop"}),c.jsx("p",{className:"section-subtitle",children:"Only one workshop is available. Complete registration below."}),c.jsx("div",{className:"cards-grid",children:t.map(d=>c.jsxs("div",{className:"card",children:[c.jsx("h4",{children:d.title}),c.jsx("p",{children:d.description})]},d.id))}),c.jsxs("div",{className:"card",style:{marginTop:"28px"},children:[c.jsx("h4",{children:"Workshop Registration"}),c.jsxs("form",{className:"form-grid",onSubmit:l,children:[c.jsx("input",{placeholder:"Full name",value:n.name,onChange:d=>i({...n,name:d.target.value}),required:!0}),c.jsx("input",{placeholder:"WhatsApp number",value:n.phone,onChange:d=>i({...n,phone:d.target.value}),required:!0}),c.jsx("input",{placeholder:"College name",value:n.collegeName,onChange:d=>i({...n,collegeName:d.target.value}),required:!0}),c.jsx("input",{value:((u=t[0])==null?void 0:u.title)??Go.title,readOnly:!0}),c.jsx("button",{className:"btn btn-primary",type:"submit",disabled:s,children:s?"Processing Payment...":"Pay & Register Workshop"})]}),r&&c.jsx("div",{className:"banner",style:{marginTop:"18px"},children:r})]})]})}function ig(){const t=U.useRef(null),[e,n]=U.useState({teamName:"",teamLeaderName:"",phone:"",collegeName:"",memberCount:2}),[i,r]=U.useState([{name:"",phone:"",branch:"",semester:"",collegeName:""},{name:"",phone:"",branch:"",semester:"",collegeName:""}]),[a,s]=U.useState(""),[o,l]=U.useState(!1),u=U.useMemo(()=>Math.max(2,Math.min(4,e.memberCount)),[e.memberCount]),d=y=>{r(x=>x.length===y?x:x.length>y?x.slice(0,y):[...x,...Array.from({length:y-x.length},()=>({name:"",phone:"",branch:"",semester:"",collegeName:""}))])},f=y=>{const x=Number(y),m=Number.isNaN(x)?2:Math.max(2,Math.min(4,x));n(h=>({...h,memberCount:m})),d(m)},p=(y,x,m)=>{r(h=>h.map((v,_)=>_===y?{...v,[x]:m}:v))},g=async y=>{y.preventDefault(),s(""),l(!0);try{const x=await xx("kinetic-showdown",{name:e.teamLeaderName,contact:e.phone},"Kinetic Showdown"),m=i.map(v=>({...v,collegeName:v.collegeName||e.collegeName})),h=await ke("/api/kinetic-showdown/register",{method:"POST",body:JSON.stringify({...e,memberCount:u,members:m,...x})});s(`${h.message} Redirecting to WhatsApp group...`),n({teamName:"",teamLeaderName:"",phone:"",collegeName:"",memberCount:2}),r([{name:"",phone:"",branch:"",semester:"",collegeName:""},{name:"",phone:"",branch:"",semester:"",collegeName:""}]),setTimeout(()=>gc(mc.kineticShowdown),1400)}catch(x){s(x instanceof Error?x.message:"Unable to register")}finally{l(!1)}};return c.jsxs("section",{className:"section",children:[c.jsx("h2",{className:"section-title",children:"Kinetic Showdown"}),c.jsxs("div",{className:"prize-pool-spotlight",children:[c.jsx("span",{className:"prize-pool-label",children:"Prize Pool"}),c.jsx("div",{className:"prize-pool-value",children:"INR 12,000"})]}),c.jsx("p",{className:"section-subtitle",children:"Team entry: INR 300 per team. Choose 2 to 4 members and complete payment."}),c.jsxs("div",{className:"banner",children:[c.jsx("h4",{style:{marginTop:0},children:"RC Car Competition - Information Brochure"}),c.jsx("p",{children:"COSMOS JEC is organizing the Kinetic Showdown RC Car competition during Inertia."}),c.jsxs("ul",{children:[c.jsx("li",{children:"Team size: minimum 2 and maximum 4."}),c.jsx("li",{children:"Car limit: max 20cm x 20cm, max height 15cm, max weight 1.2kg."}),c.jsx("li",{children:"No readymade framework/design; participants must build their own solution."}),c.jsx("li",{children:"Wireless control required (Wi-Fi/Bluetooth/LoRa/Zigbee/RF modules)."}),c.jsx("li",{children:"Allowed stacks include Arduino, ESP, STM, Raspberry Pi, and similar platforms."}),c.jsx("li",{children:"Chassis can be MDF/foam/cardboard/acrylic/3D print or other strong material."}),c.jsx("li",{children:"Power must be on-board; no wired external power source."}),c.jsx("li",{children:"Scoring: Build quality 10%, component decisions 10%, architecture 20%, creativity 10%, race 50%."})]})]}),c.jsx("div",{style:{marginTop:"22px"},children:c.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>{var y;return(y=t.current)==null?void 0:y.scrollIntoView({behavior:"smooth",block:"start"})},children:"Registration"})}),c.jsxs("div",{className:"card",style:{marginTop:"24px"},ref:t,children:[c.jsx("h4",{children:"Kinetic Showdown Registration"}),c.jsxs("form",{className:"form-grid",onSubmit:g,children:[c.jsx("input",{placeholder:"Team name",value:e.teamName,onChange:y=>n({...e,teamName:y.target.value}),required:!0}),c.jsx("input",{placeholder:"Team leader name",value:e.teamLeaderName,onChange:y=>n({...e,teamLeaderName:y.target.value}),required:!0}),c.jsx("input",{placeholder:"WhatsApp number",value:e.phone,onChange:y=>n({...e,phone:y.target.value}),required:!0}),c.jsx("input",{placeholder:"College name",value:e.collegeName,onChange:y=>n({...e,collegeName:y.target.value}),required:!0}),c.jsx("input",{type:"number",min:2,max:4,value:u,onChange:y=>f(y.target.value),required:!0}),i.map((y,x)=>c.jsxs("div",{className:"card",children:[c.jsxs("h4",{children:["Student ",x+1]}),c.jsxs("div",{className:"form-grid",children:[c.jsx("input",{placeholder:"Student name",value:y.name,onChange:m=>p(x,"name",m.target.value),required:!0}),c.jsx("input",{placeholder:"Student WhatsApp number",value:y.phone,onChange:m=>p(x,"phone",m.target.value),required:!0}),c.jsx("input",{placeholder:"Branch",value:y.branch,onChange:m=>p(x,"branch",m.target.value),required:!0}),c.jsx("input",{placeholder:"Semester / Year",value:y.semester,onChange:m=>p(x,"semester",m.target.value),required:!0}),c.jsx("input",{placeholder:"College name",value:y.collegeName,onChange:m=>p(x,"collegeName",m.target.value),required:!0})]})]},x)),c.jsx("button",{className:"btn btn-primary",type:"submit",disabled:o,children:o?"Processing Payment...":"Pay INR 300 & Register"})]}),a&&c.jsx("div",{className:"banner",style:{marginTop:"18px"},children:a})]})]})}function rg(t){return Array.from({length:t},()=>({name:"",whatsappNumber:"",gameId:""}))}function iR(){const[t,e]=U.useState("team"),[n,i]=U.useState("valorant"),[r,a]=U.useState({teamName:"",isCollegeParticipant:"yes",collegeName:"",teamLeaderName:"",teamLeaderPhone:""}),[s,o]=U.useState({playerName:"",whatsappNumber:"",gameId:"",isCollegeParticipant:"yes",collegeName:""}),[l,u]=U.useState("no"),[d,f]=U.useState({name:"",gameId:"",whatsappNumber:""}),[p,g]=U.useState(rg(5)),[y,x]=U.useState(!1),[m,h]=U.useState(""),v=n==="bgmi",_=U.useMemo(()=>n==="valorant"?5:4,[n]),M=U.useMemo(()=>t==="solo"?n==="valorant"?"INR 60":"INR 50":n==="valorant"?"INR 300":"INR 200",[n,t]),P=U.useMemo(()=>t==="solo"?n==="valorant"?"esports-solo-valorant":"esports-solo-bgmi":n==="valorant"?"esports-valorant":"esports-bgmi",[n,t]),A=S=>{i(S),g(rg(S==="valorant"?5:4))},E=(S,b,T)=>{g(z=>z.map((N,D)=>D===S?{...N,[b]:T}:N))},w=async S=>{if(S.preventDefault(),h(""),v){h("BGMI seats are full. Registrations are closed.");return}x(!0);try{const b=t==="solo"?{name:s.playerName,contact:s.whatsappNumber}:{name:r.teamLeaderName,contact:r.teamLeaderPhone},T=await vx(P,b,t==="solo"?`Solo eSports ${n.toUpperCase()}`:`eSports ${n.toUpperCase()}`),z=t==="solo"?"/api/esports/solo-register":"/api/esports/register",N=t==="solo"?{game:n,playerName:s.playerName,whatsappNumber:s.whatsappNumber,gameId:s.gameId,isCollegeParticipant:s.isCollegeParticipant==="yes",collegeName:s.isCollegeParticipant==="yes"?s.collegeName.trim():"",...T}:{...r,isCollegeParticipant:r.isCollegeParticipant==="yes",collegeName:r.isCollegeParticipant==="yes"?r.collegeName.trim():"",game:n,members:p.map(B=>({...B})),hasSubstitute:l==="yes",...l==="yes"?{substitutePlayer:d}:{},...T},D=await ke(z,{method:"POST",body:JSON.stringify(N)});h(`${D.message} Redirecting to WhatsApp group...`),setTimeout(()=>gc(mc.esports),1400)}catch(b){h(b instanceof Error?b.message:"Unable to register")}finally{x(!1)}};return c.jsxs("section",{className:"section",children:[c.jsx("h2",{className:"section-title",children:"eSports"}),c.jsxs("div",{className:"prize-pool-spotlight",children:[c.jsx("span",{className:"prize-pool-label",children:"Prize Pool"}),c.jsx("div",{className:"prize-pool-value",children:"INR 11,000"})]}),c.jsx("p",{className:"section-subtitle",children:"Select game first: Valorant (5 players, INR 300 per team) or BGMI (4 players, INR 200 per team)."}),c.jsxs("div",{className:"card",style:{marginTop:"20px"},children:[c.jsx("h4",{children:"Core Tournament Rules & Requirements"}),c.jsxs("ul",{children:[c.jsx("li",{children:"Team composition: 5 main players and up to 2 substitutes."}),c.jsx("li",{children:"No account recruitment is allowed."}),c.jsx("li",{children:"Device restriction (BGMI): only mobile/tablet devices are allowed. Emulator usage leads to ban/disqualification."}),c.jsx("li",{children:"Account requirements (BGMI): minimum tier and level may be required (for example Gold V and Level 15+)."}),c.jsx("li",{children:"Game mode (BGMI): Classic mode (Squad)."}),c.jsx("li",{children:"BGMI map pool: Erangel, Miramar, and Rondo."}),c.jsx("li",{children:"Valorant map order: Ascent, Split, Haven (Finale)."}),c.jsx("li",{children:"Points system (BGMI): based on placement and kills. Tiebreakers prioritize total kills, then Chicken Dinner count."}),c.jsx("li",{children:"Winning qualifies the team for the next round."}),c.jsx("li",{children:"No toxic behavior, toxic chat/voice chat, griefing, or team killing will be tolerated."})]}),c.jsx("h4",{style:{marginTop:"16px"},children:"Match Procedures"}),c.jsxs("ul",{children:[c.jsx("li",{children:"Check-in: teams must join the custom room/party 10-15 minutes before match start."}),c.jsx("li",{children:"Recording/proof: players may be required to record POV/screen and submit it if requested."}),c.jsx("li",{children:"Technical issues: players are responsible for their own internet connectivity."})]}),c.jsx("h4",{style:{marginTop:"16px"},children:"Violations & Penalties"}),c.jsxs("ul",{children:[c.jsx("li",{children:"Cheating (ESP, aimbot, hacks): permanent ban and disqualification."}),c.jsx("li",{children:"Intentional exploitation of bugs/glitches is prohibited."}),c.jsx("li",{children:"Offensive team names or player names are not allowed."})]})]}),c.jsxs("div",{className:"card",style:{marginTop:"24px"},children:[c.jsx("h4",{children:"eSports Registration"}),c.jsxs("form",{className:"form-grid",onSubmit:w,children:[c.jsxs("select",{value:n,onChange:S=>A(S.target.value),children:[c.jsx("option",{value:"valorant",children:"Valorant (5 players)"}),c.jsx("option",{value:"bgmi",children:"BGMI (Seats Full)"})]}),v&&c.jsx("div",{className:"banner",children:"BGMI seats are full. Registrations are closed."}),c.jsxs("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:[c.jsx("button",{type:"button",className:`btn ${t==="team"?"btn-primary":"btn-ghost"}`,onClick:()=>e("team"),children:"Team Registration"}),c.jsx("button",{type:"button",className:`btn ${t==="solo"?"btn-primary":"btn-ghost"}`,onClick:()=>e("solo"),children:"Solo Registration"})]}),t==="solo"&&c.jsx("div",{className:"banner",style:{marginBottom:"8px"},children:"You can register solo for BGMI or Valorant. You will still play in squad format and we will match you with random teammates. If a full team cannot be formed, your registration amount will be refunded."}),t==="team"?c.jsxs(c.Fragment,{children:[c.jsx("input",{placeholder:"Team name",value:r.teamName,onChange:S=>a({...r,teamName:S.target.value}),required:!0}),c.jsxs("select",{value:r.isCollegeParticipant,onChange:S=>a({...r,isCollegeParticipant:S.target.value}),children:[c.jsx("option",{value:"yes",children:"Are you from a college? Yes"}),c.jsx("option",{value:"no",children:"Are you from a college? No"})]}),r.isCollegeParticipant==="yes"&&c.jsx("input",{placeholder:"College name",value:r.collegeName,onChange:S=>a({...r,collegeName:S.target.value}),required:!0}),c.jsx("input",{placeholder:"Team leader name",value:r.teamLeaderName,onChange:S=>a({...r,teamLeaderName:S.target.value}),required:!0}),c.jsx("input",{placeholder:"Team leader WhatsApp number",value:r.teamLeaderPhone,onChange:S=>a({...r,teamLeaderPhone:S.target.value}),required:!0}),p.map((S,b)=>c.jsxs("div",{className:"card",children:[c.jsxs("h4",{children:["Player ",b+1]}),c.jsxs("div",{className:"form-grid",children:[c.jsx("input",{placeholder:"Name",value:S.name,onChange:T=>E(b,"name",T.target.value),required:!0}),c.jsx("input",{placeholder:"WhatsApp number",value:S.whatsappNumber,onChange:T=>E(b,"whatsappNumber",T.target.value),required:!0}),c.jsx("input",{placeholder:"Game ID",value:S.gameId,onChange:T=>E(b,"gameId",T.target.value),required:!0})]})]},b)),c.jsxs("select",{value:l,onChange:S=>u(S.target.value),children:[c.jsx("option",{value:"no",children:"Need substitute player? No"}),c.jsx("option",{value:"yes",children:"Need substitute player? Yes"})]}),l==="yes"&&c.jsxs("div",{className:"card",children:[c.jsx("h4",{children:"Substitute Player Details"}),c.jsxs("div",{className:"form-grid",children:[c.jsx("input",{placeholder:"Substitute name",value:d.name,onChange:S=>f({...d,name:S.target.value}),required:!0}),c.jsx("input",{placeholder:"Substitute Game ID",value:d.gameId,onChange:S=>f({...d,gameId:S.target.value}),required:!0}),c.jsx("input",{placeholder:"Substitute WhatsApp number",value:d.whatsappNumber,onChange:S=>f({...d,whatsappNumber:S.target.value}),required:!0})]})]})]}):c.jsxs(c.Fragment,{children:[c.jsx("input",{placeholder:"Player name",value:s.playerName,onChange:S=>o({...s,playerName:S.target.value}),required:!0}),c.jsx("input",{placeholder:"WhatsApp number",value:s.whatsappNumber,onChange:S=>o({...s,whatsappNumber:S.target.value}),required:!0}),c.jsx("input",{placeholder:"Game ID",value:s.gameId,onChange:S=>o({...s,gameId:S.target.value}),required:!0}),c.jsxs("select",{value:s.isCollegeParticipant,onChange:S=>o({...s,isCollegeParticipant:S.target.value}),children:[c.jsx("option",{value:"yes",children:"Are you from a college? Yes"}),c.jsx("option",{value:"no",children:"Are you from a college? No"})]}),s.isCollegeParticipant==="yes"&&c.jsx("input",{placeholder:"College name",value:s.collegeName,onChange:S=>o({...s,collegeName:S.target.value}),required:!0})]}),c.jsx("button",{className:"btn btn-primary",type:"submit",disabled:y||v,children:y?"Processing Payment...":`Pay ${M} & Register`})]}),m&&c.jsx("div",{className:"banner",style:{marginTop:"18px"},children:m})]}),c.jsxs("p",{style:{marginTop:"14px",opacity:.8},children:["Required players for selected game: ",_]})]})}function rR(){const[t,e]=U.useState({name:"",phone:"",enrollmentNumber:"",year:"",collegeName:"",performanceType:"",scriptPdfUrl:""}),[n,i]=U.useState(null),[r,a]=U.useState(!1),[s,o]=U.useState(""),l=async d=>{const f=new FormData;f.append("document",d);const p=await fetch(`${pc}/api/uploads/document`,{method:"POST",body:f});if(!p.ok)throw new Error(await p.text());return(await p.json()).documentUrl},u=async d=>{d.preventDefault(),o(""),a(!0);try{if(!n&&!t.scriptPdfUrl)throw new Error("Please upload a PDF or provide a PDF link for your script/plan.");let f=t.scriptPdfUrl;n&&(f=await l(n));const p=await ke("/api/open-mic/register",{method:"POST",body:JSON.stringify({...t,scriptPdfUrl:f})});o(`${p.message} Redirecting to WhatsApp group...`),setTimeout(()=>gc(mc.openMic),1400)}catch(f){o(f instanceof Error?f.message:"Unable to register")}finally{a(!1)}};return c.jsxs("section",{className:"section",children:[c.jsx("h2",{className:"section-title",children:"Open Mic"}),c.jsx("p",{className:"section-subtitle",children:"Open Mic is free. Registration is mandatory."}),c.jsxs("div",{className:"card",style:{marginTop:"24px"},children:[c.jsx("h4",{children:"Open Mic Registration"}),c.jsxs("form",{className:"form-grid",onSubmit:u,children:[c.jsx("input",{placeholder:"Name",value:t.name,onChange:d=>e({...t,name:d.target.value}),required:!0}),c.jsx("input",{placeholder:"WhatsApp number",value:t.phone,onChange:d=>e({...t,phone:d.target.value}),required:!0}),c.jsx("input",{placeholder:"Enrollment number",value:t.enrollmentNumber,onChange:d=>e({...t,enrollmentNumber:d.target.value}),required:!0}),c.jsx("input",{placeholder:"Year",value:t.year,onChange:d=>e({...t,year:d.target.value}),required:!0}),c.jsx("input",{placeholder:"College name",value:t.collegeName,onChange:d=>e({...t,collegeName:d.target.value}),required:!0}),c.jsx("input",{placeholder:"What do you want to perform?",value:t.performanceType,onChange:d=>e({...t,performanceType:d.target.value}),required:!0}),c.jsx("input",{type:"url",placeholder:"Script/plan PDF URL (optional if uploading below)",value:t.scriptPdfUrl,onChange:d=>e({...t,scriptPdfUrl:d.target.value})}),c.jsx("input",{type:"file",accept:"application/pdf",onChange:d=>{var f;return i(((f=d.target.files)==null?void 0:f[0])??null)}}),c.jsx("button",{className:"btn btn-primary",type:"submit",disabled:r,children:r?"Submitting...":"Register Open Mic"})]}),s&&c.jsx("div",{className:"banner",style:{marginTop:"18px"},children:s})]})]})}function aR(){return c.jsxs("section",{className:"section",children:[c.jsx("h2",{className:"section-title",children:"Choose Registration"}),c.jsx("p",{className:"section-subtitle",children:"Select the event you want to register for."}),c.jsxs("div",{className:"cards-grid",style:{marginTop:"24px"},children:[c.jsxs("div",{className:"card",children:[c.jsx("h4",{children:"Hackathon"}),c.jsx("p",{children:"12-hour hackathon registration."}),c.jsx(Pt,{className:"btn btn-primary",to:"/hackathon",children:"Register Hackathon"})]}),c.jsxs("div",{className:"card",children:[c.jsx("h4",{children:"Robo Race"}),c.jsx("p",{children:"RC car competition. Team fee INR 300."}),c.jsx(Pt,{className:"btn btn-primary",to:"/kinetic-showdown",children:"Register Robo Race"})]}),c.jsxs("div",{className:"card",children:[c.jsx("h4",{children:"Workshops"}),c.jsx("p",{children:"Pick your workshop and complete payment."}),c.jsx(Pt,{className:"btn btn-primary",to:"/workshops",children:"Register Workshop"})]}),c.jsxs("div",{className:"card",children:[c.jsx("h4",{children:"eSports"}),c.jsx("p",{children:"Valorant registration is open. BGMI seats are full."}),c.jsx(Pt,{className:"btn btn-primary",to:"/esports",children:"Register eSports"})]}),c.jsxs("div",{className:"card",children:[c.jsx("h4",{children:"Open Mic"}),c.jsx("p",{children:"Free registration with performance details."}),c.jsx(Pt,{className:"btn btn-primary",to:"/open-mic",children:"Register Open Mic"})]})]})]})}function sR(){const[t,e]=U.useState([]);return U.useEffect(()=>{ke("/api/culture/events").then(n=>e(Array.isArray(n)?n:[])).catch(()=>e([]))},[]),c.jsxs("section",{className:"section",children:[c.jsx("h2",{className:"section-title",children:"Culture Fest"}),c.jsx("p",{className:"section-subtitle",children:"When the coding ends, the celebration begins."}),t.length===0?c.jsx("div",{className:"banner empty-state",children:"No events announced yet."}):c.jsx("div",{className:"cards-grid",children:t.map(n=>c.jsxs("div",{className:"card",children:[n.imageUrl&&c.jsx("img",{src:n.imageUrl,alt:n.title,style:{width:"100%",borderRadius:"14px",marginBottom:"12px"}}),c.jsx("h4",{children:n.title}),c.jsx("p",{className:"team-preview",children:n.preview}),c.jsx("p",{children:n.description})]},n.id))})]})}function oR(){const[t,e]=U.useState([]);return U.useEffect(()=>{ke("/api/gallery").then(n=>e(Array.isArray(n)?n:[])).catch(()=>e([]))},[]),c.jsxs("section",{className:"section",children:[c.jsx("h2",{className:"section-title",children:"Glimpses & Gallery"}),c.jsx("p",{className:"section-subtitle",children:"A curated gallery from past editions."}),t.length===0?c.jsx("div",{className:"banner empty-state",children:"No gallery items available yet."}):c.jsx("div",{className:"gallery-grid",children:t.map(n=>c.jsxs("div",{className:"gallery-card",children:[c.jsx("img",{src:n.imageUrl,alt:n.title}),c.jsxs("div",{className:"gallery-meta",children:[c.jsx("strong",{children:n.preview||n.title}),c.jsx("p",{children:n.description})]})]},n.id))})]})}function lR(){const[t,e]=U.useState([]);return U.useEffect(()=>{ke("/api/team").then(n=>e(Array.isArray(n)?n:[])).catch(()=>e([]))},[]),c.jsxs("section",{className:"section",children:[c.jsx("h2",{className:"section-title",children:"Core Team"}),t.length===0?c.jsx("div",{className:"banner empty-state",children:"Team details will be published soon."}):c.jsx("div",{className:"team-grid",children:t.map(n=>c.jsxs("div",{className:"team-card",children:[c.jsx("img",{src:n.imageUrl,alt:n.name}),c.jsxs("div",{className:"team-meta",children:[c.jsx("strong",{children:n.name}),c.jsx("p",{className:"team-role",children:n.role}),c.jsx("p",{className:"team-preview",children:n.preview}),c.jsx("p",{children:n.about})]})]},n.id))})]})}function cR(){const[t,e]=U.useState({email:"",phone:"",issue:""}),[n,i]=U.useState(!1),[r,a]=U.useState(""),s=async o=>{o.preventDefault(),a(""),i(!0);try{const l=await ke("/api/contact",{method:"POST",body:JSON.stringify(t)});a(l.message),e({email:"",phone:"",issue:""})}catch(l){a(l instanceof Error?l.message:"Unable to submit contact")}finally{i(!1)}};return c.jsxs("section",{className:"section",children:[c.jsx("h2",{className:"section-title",children:"Contact"}),c.jsx("p",{className:"section-subtitle",children:"Share your email, phone number, and issue. Our team will reach out to you."}),c.jsxs("div",{className:"card",style:{marginTop:"24px",maxWidth:"640px"},children:[c.jsx("h4",{children:"Contact Form"}),c.jsxs("form",{className:"form-grid",onSubmit:s,children:[c.jsx("input",{type:"email",placeholder:"Email",value:t.email,onChange:o=>e({...t,email:o.target.value}),required:!0}),c.jsx("input",{placeholder:"Phone number",value:t.phone,onChange:o=>e({...t,phone:o.target.value}),required:!0}),c.jsx("textarea",{placeholder:"Type your issue",value:t.issue,onChange:o=>e({...t,issue:o.target.value}),rows:5,required:!0}),c.jsx("button",{className:"btn btn-primary",type:"submit",disabled:n,children:n?"Submitting...":"Submit Contact"})]}),r&&c.jsx("div",{className:"banner",style:{marginTop:"18px"},children:r})]})]})}const _x="mediacell@123",gf="secret_admin_password";function yc(){return sessionStorage.getItem(gf)===_x}function vc(t){return t!==_x?!1:(sessionStorage.setItem(gf,t),!0)}function $n(){return sessionStorage.getItem(gf)||""}function uR(){const[t,e]=U.useState(yc()),[n,i]=U.useState(""),[r,a]=U.useState(""),[s,o]=U.useState(""),[l,u]=U.useState(""),[d,f]=U.useState(null),[p,g]=U.useState(""),[y,x]=U.useState(""),[m,h]=U.useState(""),[v,_]=U.useState(""),[M,P]=U.useState(null),[A,E]=U.useState(""),[w,S]=U.useState(""),[b,T]=U.useState(""),[z,N]=U.useState(null),[D,B]=U.useState(""),[H,$]=U.useState(!1),k=ue=>{if(ue.preventDefault(),!vc(n)){B("Wrong password.");return}B(""),e(!0),i("")},K=async ue=>{const V=new FormData;V.append("image",ue);const Y=await fetch(`${pc}/api/admin/upload`,{method:"POST",headers:{"X-Admin-Token":$n()},body:V});if(!Y.ok)throw new Error(await Y.text());const{imageUrl:ne}=await Y.json();return ne},J=async ue=>{if(ue.preventDefault(),!d){B("Please select an image for gallery item.");return}$(!0),B("");try{const V=await K(d),Y=await ke("/api/admin/glimpse",{method:"POST",headers:{"X-Admin-Token":$n()},body:JSON.stringify({title:r,preview:s,description:l,imageUrl:V})});B(Y.message),a(""),o(""),u(""),f(null)}catch(V){B(V instanceof Error?V.message:"Upload failed")}finally{$(!1)}},ae=async ue=>{if(ue.preventDefault(),!M){B("Please select a team photo.");return}$(!0),B("");try{const V=await K(M),Y=await ke("/api/admin/team",{method:"POST",headers:{"X-Admin-Token":$n()},body:JSON.stringify({name:p,role:y,preview:m,about:v,imageUrl:V})});B(Y.message),g(""),x(""),h(""),_(""),P(null)}catch(V){B(V instanceof Error?V.message:"Upload failed")}finally{$(!1)}},xe=async ue=>{if(ue.preventDefault(),!z){B("Please select a culture event photo.");return}$(!0),B("");try{const V=await K(z),Y=await ke("/api/admin/culture-event",{method:"POST",headers:{"X-Admin-Token":$n()},body:JSON.stringify({title:A,preview:w,description:b,imageUrl:V})});B(Y.message),E(""),S(""),T(""),N(null)}catch(V){B(V instanceof Error?V.message:"Save failed")}finally{$(!1)}};return t?c.jsxs("section",{className:"section",children:[c.jsx("h2",{className:"section-title",children:"Management Panel"}),c.jsx("p",{className:"section-subtitle",children:"Manage content and registrations in one place."}),c.jsxs("div",{className:"admin-links",children:[c.jsx(Pt,{className:"btn btn-ghost",to:"/secret-admin/registrations",children:"View Registrations Data"}),c.jsx(Pt,{className:"btn btn-ghost",to:"/secret-admin/manage-content",children:"Edit / Delete Uploaded Content"}),c.jsx(Pt,{className:"btn btn-ghost",to:"/hackathon-manager",children:"Hackathon Manager"})]}),c.jsxs("div",{className:"card",children:[c.jsx("h4",{children:"Upload Gallery Item"}),c.jsxs("form",{className:"form-grid",onSubmit:J,children:[c.jsx("input",{placeholder:"Title",value:r,onChange:ue=>a(ue.target.value),required:!0}),c.jsx("input",{placeholder:"Preview text",value:s,onChange:ue=>o(ue.target.value),required:!0}),c.jsx("textarea",{placeholder:"Description",value:l,onChange:ue=>u(ue.target.value),rows:3,required:!0}),c.jsx("input",{type:"file",accept:"image/*",onChange:ue=>{var V;return f(((V=ue.target.files)==null?void 0:V[0])??null)},required:!0}),c.jsx("button",{className:"btn btn-primary",type:"submit",disabled:H,children:H?"Saving...":"Upload Gallery Item"})]})]}),c.jsxs("div",{className:"card",style:{marginTop:"28px"},children:[c.jsx("h4",{children:"Upload Team Member"}),c.jsxs("form",{className:"form-grid",onSubmit:ae,children:[c.jsx("input",{placeholder:"Name",value:p,onChange:ue=>g(ue.target.value),required:!0}),c.jsx("input",{placeholder:"Role",value:y,onChange:ue=>x(ue.target.value),required:!0}),c.jsx("input",{placeholder:"Preview text",value:m,onChange:ue=>h(ue.target.value),required:!0}),c.jsx("textarea",{placeholder:"About",value:v,onChange:ue=>_(ue.target.value),rows:4,required:!0}),c.jsx("input",{type:"file",accept:"image/*",onChange:ue=>{var V;return P(((V=ue.target.files)==null?void 0:V[0])??null)},required:!0}),c.jsx("button",{className:"btn btn-primary",type:"submit",disabled:H,children:H?"Saving...":"Upload Team Member"})]})]}),c.jsxs("div",{className:"card",style:{marginTop:"28px"},children:[c.jsx("h4",{children:"Add Cultural Event"}),c.jsxs("form",{className:"form-grid",onSubmit:xe,children:[c.jsx("input",{placeholder:"Title",value:A,onChange:ue=>E(ue.target.value),required:!0}),c.jsx("input",{placeholder:"Preview text",value:w,onChange:ue=>S(ue.target.value),required:!0}),c.jsx("textarea",{placeholder:"Description",value:b,onChange:ue=>T(ue.target.value),rows:3,required:!0}),c.jsx("input",{type:"file",accept:"image/*",onChange:ue=>{var V;return N(((V=ue.target.files)==null?void 0:V[0])??null)},required:!0}),c.jsx("button",{className:"btn btn-primary",type:"submit",disabled:H,children:H?"Saving...":"Save Cultural Event"})]})]}),D&&c.jsx("div",{className:"banner",style:{marginTop:"18px"},children:D})]}):c.jsxs("section",{className:"section",children:[c.jsx("h2",{className:"section-title",children:"Management Access"}),c.jsxs("div",{className:"card",style:{maxWidth:"520px"},children:[c.jsx("h4",{children:"Enter Password"}),c.jsxs("form",{className:"form-grid",onSubmit:k,children:[c.jsx("input",{type:"password",placeholder:"Enter password",value:n,onChange:ue=>i(ue.target.value),required:!0}),c.jsx("button",{className:"btn btn-primary",type:"submit",children:"Unlock"})]}),D&&c.jsx("div",{className:"banner",style:{marginTop:"18px"},children:D})]})]})}const dR={codehunt:"codehunt@09",kinetic:"kineticshowdown@15",esports:"esports@19",openMic:"openmic@07",workshop:"workshop@08"};function hR(t){return t.members.map((e,n)=>`${n+1}. ${e.name} (${e.gender}) | ${e.phone}`).join(`
`)}function fR(t){return t.members.map((e,n)=>`${n+1}. ${e.name} | ${e.phone} | ${e.branch} | ${e.semester} | ${e.collegeName}`).join(`
`)}function pR(){const[t,e]=U.useState(yc()),[n,i]=U.useState(""),[r,a]=U.useState(""),[s,o]=U.useState({codehunt:"",kinetic:"",esports:"",openMic:"",workshop:""}),[l,u]=U.useState({codehunt:!1,kinetic:!1,esports:!1,openMic:!1,workshop:!1}),[d,f]=U.useState([]),[p,g]=U.useState([]),[y,x]=U.useState([]),[m,h]=U.useState([]),[v,_]=U.useState([]),[M,P]=U.useState([]);U.useEffect(()=>{if(!t)return;const w={"X-Admin-Token":$n()};ke("/api/admin/registrations/hackathon",{headers:w}).then(S=>f(Array.isArray(S)?S:[])).catch(()=>f([])),ke("/api/admin/registrations/kinetic-showdown",{headers:w}).then(S=>g(Array.isArray(S)?S:[])).catch(()=>g([])),ke("/api/admin/registrations/esports",{headers:w}).then(S=>x(Array.isArray(S)?S:[])).catch(()=>x([])),ke("/api/admin/registrations/open-mic",{headers:w}).then(S=>h(Array.isArray(S)?S:[])).catch(()=>h([])),ke("/api/admin/registrations/workshops",{headers:w}).then(S=>_(Array.isArray(S)?S:[])).catch(()=>_([])),ke("/api/admin/registrations/contact",{headers:w}).then(S=>P(Array.isArray(S)?S:[])).catch(()=>P([]))},[t]);const A=w=>{if(w.preventDefault(),!vc(n)){a("Wrong password.");return}a(""),i(""),e(!0)},E=w=>{if(s[w]!==dR[w]){a("Table password is incorrect.");return}a(""),u(S=>({...S,[w]:!0})),o(S=>({...S,[w]:""}))};return t?c.jsxs("section",{className:"section",children:[c.jsx("h2",{className:"section-title",children:"Management Panel - Event Tables"}),c.jsx("p",{className:"section-subtitle",children:"Each table has separate access."}),c.jsx("div",{className:"admin-links",children:c.jsx(Pt,{className:"btn btn-ghost",to:"/secret-admin",children:"Back To Content Panel"})}),r&&c.jsx("div",{className:"banner",style:{marginTop:"18px"},children:r}),c.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[c.jsx("h4",{children:"CodeHunt Teams"}),l.codehunt?c.jsx("div",{className:"table-wrap",children:c.jsxs("table",{className:"admin-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Team"}),c.jsx("th",{children:"Leader"}),c.jsx("th",{children:"Members"}),c.jsx("th",{children:"Payment"}),c.jsx("th",{children:"Created"})]})}),c.jsx("tbody",{children:d.length===0?c.jsx("tr",{children:c.jsx("td",{colSpan:5,children:"No registrations yet."})}):d.map(w=>c.jsxs("tr",{children:[c.jsxs("td",{children:[c.jsx("strong",{children:w.teamName}),c.jsxs("p",{children:[w.memberCount," members, ",w.femaleCount," female"]})]}),c.jsxs("td",{children:[c.jsxs("strong",{children:["Leader: ",w.contactName]}),c.jsx("p",{children:w.contactPhone}),c.jsx("p",{children:w.collegeName})]}),c.jsx("td",{style:{whiteSpace:"pre-wrap",minWidth:"360px"},children:hR(w)}),c.jsxs("td",{children:[c.jsx("strong",{children:w.paymentStatus||"unknown"}),c.jsx("p",{children:w.paymentId||"-"})]}),c.jsx("td",{children:w.createdAt})]},w.id))})]})}):c.jsxs("div",{className:"form-grid",children:[c.jsx("input",{type:"password",placeholder:"Enter table password",value:s.codehunt,onChange:w=>o(S=>({...S,codehunt:w.target.value}))}),c.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>E("codehunt"),children:"Unlock Table"})]})]}),c.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[c.jsx("h4",{children:"Kinetic Showdown Teams"}),l.kinetic?c.jsx("div",{className:"table-wrap",children:c.jsxs("table",{className:"admin-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Team"}),c.jsx("th",{children:"Team Leader"}),c.jsx("th",{children:"Members"}),c.jsx("th",{children:"Payment"}),c.jsx("th",{children:"Created"})]})}),c.jsx("tbody",{children:p.length===0?c.jsx("tr",{children:c.jsx("td",{colSpan:5,children:"No registrations yet."})}):p.map(w=>c.jsxs("tr",{children:[c.jsxs("td",{children:[c.jsx("strong",{children:w.teamName}),c.jsxs("p",{children:["College: ",w.collegeName]}),c.jsxs("p",{children:["Team size: ",w.memberCount]})]}),c.jsxs("td",{children:[c.jsx("strong",{children:w.captainName}),c.jsx("p",{children:w.phone})]}),c.jsx("td",{style:{whiteSpace:"pre-wrap",minWidth:"360px"},children:fR(w)}),c.jsxs("td",{children:[c.jsx("strong",{children:w.paymentStatus||"unknown"}),c.jsx("p",{children:w.paymentId||"-"})]}),c.jsx("td",{children:w.createdAt})]},w.id))})]})}):c.jsxs("div",{className:"form-grid",children:[c.jsx("input",{type:"password",placeholder:"Enter table password",value:s.kinetic,onChange:w=>o(S=>({...S,kinetic:w.target.value}))}),c.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>E("kinetic"),children:"Unlock Table"})]})]}),c.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[c.jsx("h4",{children:"eSports Teams"}),l.esports?c.jsx("div",{className:"table-wrap",children:c.jsxs("table",{className:"admin-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Team"}),c.jsx("th",{children:"Leader"}),c.jsx("th",{children:"Players"}),c.jsx("th",{children:"Payment"}),c.jsx("th",{children:"Created"})]})}),c.jsx("tbody",{children:y.length===0?c.jsx("tr",{children:c.jsx("td",{colSpan:5,children:"No registrations yet."})}):y.map(w=>{var S,b,T;return c.jsxs("tr",{children:[c.jsxs("td",{children:[c.jsx("strong",{children:w.teamName}),c.jsxs("p",{children:["Game: ",w.game]}),c.jsx("p",{children:w.isCollegeParticipant?`College: ${w.collegeName||"-"}`:"Not a college team"}),c.jsxs("p",{children:["Substitute: ",w.hasSubstitute?"Yes":"No"]}),w.hasSubstitute&&c.jsx("p",{children:`${((S=w.substitutePlayer)==null?void 0:S.name)||"-"} | ${((b=w.substitutePlayer)==null?void 0:b.gameId)||"-"} | ${((T=w.substitutePlayer)==null?void 0:T.whatsappNumber)||"-"}`})]}),c.jsxs("td",{children:[c.jsx("strong",{children:w.teamLeaderName}),c.jsx("p",{children:w.teamLeaderPhone})]}),c.jsx("td",{style:{whiteSpace:"pre-wrap",minWidth:"360px"},children:w.members.map((z,N)=>`${N+1}. ${z.name} | ${z.whatsappNumber||"-"} | ${z.gameId||"-"} | ${z.collegeName||"-"}`).join(`
`)}),c.jsxs("td",{children:[c.jsx("strong",{children:w.paymentStatus||"unknown"}),c.jsx("p",{children:w.paymentId||"-"})]}),c.jsx("td",{children:w.createdAt})]},w.id)})})]})}):c.jsxs("div",{className:"form-grid",children:[c.jsx("input",{type:"password",placeholder:"Enter table password",value:s.esports,onChange:w=>o(S=>({...S,esports:w.target.value}))}),c.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>E("esports"),children:"Unlock Table"})]})]}),c.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[c.jsx("h4",{children:"Open Mic Registrations"}),l.openMic?c.jsx("div",{className:"table-wrap",children:c.jsxs("table",{className:"admin-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Name"}),c.jsx("th",{children:"Contact"}),c.jsx("th",{children:"Enrollment"}),c.jsx("th",{children:"Performance"}),c.jsx("th",{children:"Created"})]})}),c.jsx("tbody",{children:m.length===0?c.jsx("tr",{children:c.jsx("td",{colSpan:5,children:"No registrations yet."})}):m.map(w=>c.jsxs("tr",{children:[c.jsxs("td",{children:[c.jsx("strong",{children:w.name}),c.jsx("p",{children:w.collegeName})]}),c.jsx("td",{children:c.jsx("p",{children:w.phone})}),c.jsxs("td",{children:[c.jsx("p",{children:w.enrollmentNumber}),c.jsx("p",{children:w.year})]}),c.jsxs("td",{children:[c.jsx("p",{children:w.performanceType}),c.jsx("p",{children:w.scriptPdfUrl||"-"})]}),c.jsx("td",{children:w.createdAt})]},w.id))})]})}):c.jsxs("div",{className:"form-grid",children:[c.jsx("input",{type:"password",placeholder:"Enter table password",value:s.openMic,onChange:w=>o(S=>({...S,openMic:w.target.value}))}),c.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>E("openMic"),children:"Unlock Table"})]})]}),c.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[c.jsx("h4",{children:"Workshop Registrations"}),l.workshop?c.jsx("div",{className:"table-wrap",children:c.jsxs("table",{className:"admin-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Workshop"}),c.jsx("th",{children:"Name"}),c.jsx("th",{children:"Phone"}),c.jsx("th",{children:"College"}),c.jsx("th",{children:"Payment"}),c.jsx("th",{children:"Created"})]})}),c.jsx("tbody",{children:v.length===0?c.jsx("tr",{children:c.jsx("td",{colSpan:6,children:"No registrations yet."})}):v.map(w=>c.jsxs("tr",{children:[c.jsx("td",{children:w.workshop}),c.jsx("td",{children:w.name}),c.jsx("td",{children:w.phone}),c.jsx("td",{children:w.collegeName}),c.jsxs("td",{children:[c.jsx("strong",{children:w.paymentStatus||"unknown"}),c.jsx("p",{children:w.paymentId||"-"})]}),c.jsx("td",{children:w.createdAt})]},w.id))})]})}):c.jsxs("div",{className:"form-grid",children:[c.jsx("input",{type:"password",placeholder:"Enter table password",value:s.workshop,onChange:w=>o(S=>({...S,workshop:w.target.value}))}),c.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>E("workshop"),children:"Unlock Table"})]})]}),c.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[c.jsx("h4",{children:"Contact Us Submissions"}),c.jsx("div",{className:"table-wrap",children:c.jsxs("table",{className:"admin-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Email"}),c.jsx("th",{children:"Phone"}),c.jsx("th",{children:"Issue"}),c.jsx("th",{children:"Created"})]})}),c.jsx("tbody",{children:M.length===0?c.jsx("tr",{children:c.jsx("td",{colSpan:4,children:"No contact submissions yet."})}):M.map(w=>c.jsxs("tr",{children:[c.jsx("td",{children:w.email}),c.jsx("td",{children:w.phone}),c.jsx("td",{style:{whiteSpace:"pre-wrap",minWidth:"280px"},children:w.issue}),c.jsx("td",{children:w.createdAt})]},w.id))})]})})]})]}):c.jsxs("section",{className:"section",children:[c.jsx("h2",{className:"section-title",children:"Management Access - Registrations"}),c.jsxs("div",{className:"card",style:{maxWidth:"520px"},children:[c.jsx("h4",{children:"Enter Password"}),c.jsxs("form",{className:"form-grid",onSubmit:A,children:[c.jsx("input",{type:"password",placeholder:"Enter password",value:n,onChange:w=>i(w.target.value),required:!0}),c.jsx("button",{className:"btn btn-primary",type:"submit",children:"Unlock"})]}),r&&c.jsx("div",{className:"banner",style:{marginTop:"18px"},children:r})]})]})}function mR(){const[t,e]=U.useState(yc()),[n,i]=U.useState(""),[r,a]=U.useState(""),[s,o]=U.useState(!1),[l,u]=U.useState([]),[d,f]=U.useState([]),[p,g]=U.useState([]),y={"X-Admin-Token":$n()},x=async()=>{const[E,w,S]=await Promise.all([ke("/api/admin/content/gallery",{headers:y}),ke("/api/admin/content/team",{headers:y}),ke("/api/admin/content/culture-events",{headers:y})]);u(Array.isArray(E)?E:[]),f(Array.isArray(w)?w:[]),g(Array.isArray(S)?S.map(b=>({...b,imageUrl:b.imageUrl||""})):[])};U.useEffect(()=>{t&&x().catch(()=>{a("Could not load content data.")})},[t]);const m=E=>{if(E.preventDefault(),!vc(n)){a("Wrong password.");return}a(""),i(""),e(!0)},h=async E=>{o(!0),a("");try{const w=await ke(`/api/admin/glimpse/${E.id}`,{method:"PUT",headers:y,body:JSON.stringify({title:E.title,preview:E.preview,description:E.description,imageUrl:E.imageUrl})});a(w.message),await x()}catch(w){a(w instanceof Error?w.message:"Update failed")}finally{o(!1)}},v=async E=>{o(!0),a("");try{const w=await ke(`/api/admin/glimpse/${E}`,{method:"DELETE",headers:y});a(w.message),await x()}catch(w){a(w instanceof Error?w.message:"Delete failed")}finally{o(!1)}},_=async E=>{o(!0),a("");try{const w=await ke(`/api/admin/team/${E.id}`,{method:"PUT",headers:y,body:JSON.stringify({name:E.name,role:E.role,preview:E.preview,about:E.about,imageUrl:E.imageUrl})});a(w.message),await x()}catch(w){a(w instanceof Error?w.message:"Update failed")}finally{o(!1)}},M=async E=>{o(!0),a("");try{const w=await ke(`/api/admin/team/${E}`,{method:"DELETE",headers:y});a(w.message),await x()}catch(w){a(w instanceof Error?w.message:"Delete failed")}finally{o(!1)}},P=async E=>{o(!0),a("");try{const w=await ke(`/api/admin/culture-event/${E.id}`,{method:"PUT",headers:y,body:JSON.stringify({title:E.title,preview:E.preview,description:E.description,imageUrl:E.imageUrl})});a(w.message),await x()}catch(w){a(w instanceof Error?w.message:"Update failed")}finally{o(!1)}},A=async E=>{o(!0),a("");try{const w=await ke(`/api/admin/culture-event/${E}`,{method:"DELETE",headers:y});a(w.message),await x()}catch(w){a(w instanceof Error?w.message:"Delete failed")}finally{o(!1)}};return t?c.jsxs("section",{className:"section",children:[c.jsx("h2",{className:"section-title",children:"Content Manager"}),c.jsx("p",{className:"section-subtitle",children:"Edit or delete any uploaded gallery, team, or cultural content."}),c.jsx("div",{className:"admin-links",children:c.jsx(Pt,{className:"btn btn-ghost",to:"/secret-admin",children:"Back To Content Upload Panel"})}),c.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[c.jsx("h4",{children:"Gallery Items"}),l.length===0?c.jsx("p",{children:"No gallery items."}):l.map((E,w)=>c.jsx("div",{className:"card",style:{marginTop:w===0?"0":"16px"},children:c.jsxs("div",{className:"form-grid",children:[c.jsx("input",{value:E.title,onChange:S=>u(b=>b.map(T=>T.id===E.id?{...T,title:S.target.value}:T))}),c.jsx("input",{value:E.preview,onChange:S=>u(b=>b.map(T=>T.id===E.id?{...T,preview:S.target.value}:T))}),c.jsx("textarea",{rows:3,value:E.description,onChange:S=>u(b=>b.map(T=>T.id===E.id?{...T,description:S.target.value}:T))}),c.jsx("input",{value:E.imageUrl,onChange:S=>u(b=>b.map(T=>T.id===E.id?{...T,imageUrl:S.target.value}:T))}),c.jsxs("div",{className:"admin-links",children:[c.jsx("button",{className:"btn btn-primary",type:"button",disabled:s,onClick:()=>h(E),children:"Save"}),c.jsx("button",{className:"btn btn-ghost",type:"button",disabled:s,onClick:()=>v(E.id),children:"Delete"})]})]})},E.id))]}),c.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[c.jsx("h4",{children:"Team Members"}),d.length===0?c.jsx("p",{children:"No team members."}):d.map((E,w)=>c.jsx("div",{className:"card",style:{marginTop:w===0?"0":"16px"},children:c.jsxs("div",{className:"form-grid",children:[c.jsx("input",{value:E.name,onChange:S=>f(b=>b.map(T=>T.id===E.id?{...T,name:S.target.value}:T))}),c.jsx("input",{value:E.role,onChange:S=>f(b=>b.map(T=>T.id===E.id?{...T,role:S.target.value}:T))}),c.jsx("input",{value:E.preview,onChange:S=>f(b=>b.map(T=>T.id===E.id?{...T,preview:S.target.value}:T))}),c.jsx("textarea",{rows:3,value:E.about,onChange:S=>f(b=>b.map(T=>T.id===E.id?{...T,about:S.target.value}:T))}),c.jsx("input",{value:E.imageUrl,onChange:S=>f(b=>b.map(T=>T.id===E.id?{...T,imageUrl:S.target.value}:T))}),c.jsxs("div",{className:"admin-links",children:[c.jsx("button",{className:"btn btn-primary",type:"button",disabled:s,onClick:()=>_(E),children:"Save"}),c.jsx("button",{className:"btn btn-ghost",type:"button",disabled:s,onClick:()=>M(E.id),children:"Delete"})]})]})},E.id))]}),c.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[c.jsx("h4",{children:"Cultural Events"}),p.length===0?c.jsx("p",{children:"No cultural events."}):p.map((E,w)=>c.jsx("div",{className:"card",style:{marginTop:w===0?"0":"16px"},children:c.jsxs("div",{className:"form-grid",children:[c.jsx("input",{value:E.title,onChange:S=>g(b=>b.map(T=>T.id===E.id?{...T,title:S.target.value}:T))}),c.jsx("input",{value:E.preview,onChange:S=>g(b=>b.map(T=>T.id===E.id?{...T,preview:S.target.value}:T))}),c.jsx("textarea",{rows:3,value:E.description,onChange:S=>g(b=>b.map(T=>T.id===E.id?{...T,description:S.target.value}:T))}),c.jsx("input",{value:E.imageUrl||"",onChange:S=>g(b=>b.map(T=>T.id===E.id?{...T,imageUrl:S.target.value}:T))}),c.jsxs("div",{className:"admin-links",children:[c.jsx("button",{className:"btn btn-primary",type:"button",disabled:s,onClick:()=>P(E),children:"Save"}),c.jsx("button",{className:"btn btn-ghost",type:"button",disabled:s,onClick:()=>A(E.id),children:"Delete"})]})]})},E.id))]}),r&&c.jsx("div",{className:"banner",style:{marginTop:"18px"},children:r})]}):c.jsxs("section",{className:"section",children:[c.jsx("h2",{className:"section-title",children:"Management Access - Content Manager"}),c.jsxs("div",{className:"card",style:{maxWidth:"520px"},children:[c.jsx("h4",{children:"Enter Password"}),c.jsxs("form",{className:"form-grid",onSubmit:m,children:[c.jsx("input",{type:"password",placeholder:"Enter password",value:n,onChange:E=>i(E.target.value),required:!0}),c.jsx("button",{className:"btn btn-primary",type:"submit",children:"Unlock"})]}),r&&c.jsx("div",{className:"banner",style:{marginTop:"18px"},children:r})]})]})}function ag(t,e){return`${t.trim().toLowerCase()}|${e.replace(/\D/g,"")}`}function gR(){const[t,e]=U.useState(yc()),[n,i]=U.useState(""),[r,a]=U.useState(""),[s,o]=U.useState(!1),[l,u]=U.useState([]),[d,f]=U.useState({}),[p,g]=U.useState(null),[y,x]=U.useState([]),[m,h]=U.useState([]),[v,_]=U.useState([]),M=async()=>{if(t){o(!0),a("");try{const w=await ke("/api/admin/hackathon/id-card/requests",{headers:{"X-Admin-Token":$n()}}),S=await ke("/api/admin/hackathon/problem-statements",{headers:{"X-Admin-Token":$n()}}),b=await ke("/api/admin/hackathon/id-card/issued",{headers:{"X-Admin-Token":$n()}}),T=Array.isArray(w)?w:[],z=Array.isArray(S)?S:[],N=Array.isArray(b)?b:[];u(T),_(z),h(N),f(D=>{const B={};for(const H of T)B[H.requestId]=D[H.requestId]||{};return B})}catch(w){u([]),_([]),h([]),a(w instanceof Error?w.message:"Unable to load requests")}finally{o(!1)}}};U.useEffect(()=>{M()},[t]);const P=w=>{if(w.preventDefault(),!vc(n)){a("Wrong password.");return}a(""),i(""),e(!0)},A=(w,S)=>{f(b=>({...b,[w]:{...b[w]||{},[S]:!(b[w]||{})[S]}}))},E=async w=>{const S=d[w.requestId]||{},b=w.participants.filter(T=>S[ag(T.name,T.phone)]).map(T=>({name:T.name,phone:T.phone}));if(b.length===0){a(`Select at least one participant for ${w.teamName}.`);return}g(w.requestId),a("");try{const T=await ke("/api/admin/hackathon/id-card/generate-code",{method:"POST",headers:{"X-Admin-Token":$n()},body:JSON.stringify({requestId:w.requestId,participants:b})});x(z=>[{requestId:w.requestId,teamName:w.teamName,code:T.code,issuedAt:new Date().toLocaleString()},...z]),u(z=>z.filter(N=>N.requestId!==w.requestId)),a(`${w.teamName}: 4-digit code generated successfully.`)}catch(T){a(T instanceof Error?T.message:"Unable to generate code")}finally{g(null)}};return t?c.jsxs("section",{className:"section",children:[c.jsx("h2",{className:"section-title",children:"Hackathon Manager"}),c.jsx("p",{className:"section-subtitle",children:"Review team requests, select participants, and generate 4-digit ID-card code."}),c.jsxs("div",{className:"admin-links",children:[c.jsx(Pt,{className:"btn btn-ghost",to:"/secret-admin",children:"Back To Admin"}),c.jsx("button",{className:"btn btn-ghost",type:"button",onClick:M,disabled:s,children:s?"Refreshing...":"Refresh Requests"})]}),r&&c.jsx("div",{className:"banner",style:{marginTop:"18px"},children:r}),c.jsx("div",{className:"cards-grid",style:{marginTop:"24px"},children:l.map(w=>c.jsxs("div",{className:"card",children:[c.jsx("h4",{children:w.teamName}),c.jsxs("p",{children:[c.jsx("strong",{children:"Team ID:"})," ",w.teamId]}),c.jsxs("p",{children:[c.jsx("strong",{children:"College:"})," ",w.collegeName]}),c.jsxs("p",{children:[c.jsx("strong",{children:"Leader:"})," ",w.leaderName," (",w.leaderPhone,")"]}),c.jsxs("p",{children:[c.jsx("strong",{children:"Requested At:"})," ",w.requestedAt]}),c.jsx("div",{className:"form-grid",style:{marginTop:"12px"},children:w.participants.map(S=>{const b=ag(S.name,S.phone),T=(d[w.requestId]||{})[b]||!1;return c.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[c.jsx("input",{type:"checkbox",style:{width:"18px",height:"18px"},checked:T,onChange:()=>A(w.requestId,b)}),c.jsxs("span",{children:[S.name," | ",S.phone," | ",S.role,S.gender?` | ${S.gender}`:""]})]},b)})}),c.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>E(w),disabled:p===w.requestId,style:{marginTop:"16px"},children:p===w.requestId?"Generating...":"Generate 4-Digit Code"})]},w.requestId))}),l.length===0&&c.jsx("div",{className:"banner",style:{marginTop:"20px"},children:"No pending hackathon ID-card requests."}),y.length>0&&c.jsxs("div",{className:"card",style:{marginTop:"24px"},children:[c.jsx("h4",{children:"Recently Generated Codes"}),c.jsx("div",{className:"table-wrap",children:c.jsxs("table",{className:"admin-table",style:{minWidth:"600px"},children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Team"}),c.jsx("th",{children:"Code"}),c.jsx("th",{children:"Generated At"})]})}),c.jsx("tbody",{children:y.map(w=>c.jsxs("tr",{children:[c.jsx("td",{children:w.teamName}),c.jsx("td",{children:c.jsx("strong",{children:w.code})}),c.jsx("td",{children:w.issuedAt})]},`${w.requestId}-${w.code}-${w.issuedAt}`))})]})})]}),c.jsxs("div",{className:"card",style:{marginTop:"24px"},children:[c.jsx("h4",{children:"Chosen Problem Statements"}),c.jsx("div",{className:"table-wrap",children:c.jsxs("table",{className:"admin-table",style:{minWidth:"920px"},children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Team ID"}),c.jsx("th",{children:"Team Name"}),c.jsx("th",{children:"Leader"}),c.jsx("th",{children:"Theme"}),c.jsx("th",{children:"Domain"}),c.jsx("th",{children:"Chosen Statement"}),c.jsx("th",{children:"Confirmed At"})]})}),c.jsx("tbody",{children:v.length===0?c.jsx("tr",{children:c.jsx("td",{colSpan:7,children:"No team has confirmed a problem statement yet."})}):v.map(w=>c.jsxs("tr",{children:[c.jsx("td",{children:c.jsx("strong",{children:w.teamId})}),c.jsx("td",{children:w.teamName}),c.jsx("td",{children:w.leaderName}),c.jsx("td",{children:w.themeName}),c.jsx("td",{children:w.domain}),c.jsx("td",{children:w.title}),c.jsx("td",{children:w.confirmedAt})]},`${w.teamId}-${w.confirmedAt}-${w.title}`))})]})})]}),c.jsxs("div",{className:"card",style:{marginTop:"24px"},children:[c.jsx("h4",{children:"Approved e-ID Teams (Fixed Team IDs)"}),c.jsx("div",{className:"table-wrap",children:c.jsxs("table",{className:"admin-table",style:{minWidth:"760px"},children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Team ID"}),c.jsx("th",{children:"Team Name"}),c.jsx("th",{children:"Leader"}),c.jsx("th",{children:"Code"}),c.jsx("th",{children:"Approved At"})]})}),c.jsx("tbody",{children:m.length===0?c.jsx("tr",{children:c.jsx("td",{colSpan:5,children:"No team has been approved for e-ID yet."})}):m.map(w=>c.jsxs("tr",{children:[c.jsx("td",{children:c.jsx("strong",{children:w.teamId})}),c.jsx("td",{children:w.teamName}),c.jsx("td",{children:w.leaderName}),c.jsx("td",{children:w.code}),c.jsx("td",{children:w.issuedAt})]},`${w.teamId}-${w.code}-${w.issuedAt}`))})]})})]})]}):c.jsxs("section",{className:"section",children:[c.jsx("h2",{className:"section-title",children:"Hackathon Manager Access"}),c.jsxs("div",{className:"card",style:{maxWidth:"520px"},children:[c.jsx("h4",{children:"Enter Password"}),c.jsxs("form",{className:"form-grid",onSubmit:P,children:[c.jsx("input",{type:"password",placeholder:"Enter password",value:n,onChange:w=>i(w.target.value),required:!0}),c.jsx("button",{className:"btn btn-primary",type:"submit",children:"Unlock"})]}),r&&c.jsx("div",{className:"banner",style:{marginTop:"18px"},children:r})]})]})}const yR=`Professional Hackathon Problem Statements
Compendium
This professional edition contains 88 fully structured, industry-grade hackathon problem statements
across 22 strategic themes. Each theme includes four domains: Full Stack, Blockchain,
Cybersecurity,
and AI & ML. Every problem statement is organized with the following sections:
• Background & Industry Context
• Detailed Problem Statement
• Functional Requirements
• Technical Expectations & Constraints
• Deliverables
• Evaluation Criteria
All descriptions are expanded and structured for national and international-level hackathons.

\fTheme: Transport & Mobility

Full Stack Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Transport & Mobility.
Problem Statement:
Participants must design and implement a comprehensive Full Stack solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Transport & Mobility follows the structured
professional
description as detailed in the full compendium version previously defined.)

Blockchain Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints

\fspecific to Transport & Mobility.
Problem Statement:
Participants must design and implement a comprehensive Blockchain solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Transport & Mobility follows the structured
professional
description as detailed in the full compendium version previously defined.)

Cybersecurity Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Transport & Mobility.
Problem Statement:
Participants must design and implement a comprehensive Cybersecurity solution addressing
systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:

\f• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Transport & Mobility follows the structured
professional
description as detailed in the full compendium version previously defined.)

AI & ML Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Transport & Mobility.
Problem Statement:
Participants must design and implement a comprehensive AI & ML solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices

\f• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Transport & Mobility follows the structured
professional
description as detailed in the full compendium version previously defined.)

\fTheme: Logistics & Supply Chain

Full Stack Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Logistics & Supply Chain.
Problem Statement:
Participants must design and implement a comprehensive Full Stack solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Logistics & Supply Chain follows the
structured professional
description as detailed in the full compendium version previously defined.)

Blockchain Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints

\fspecific to Logistics & Supply Chain.
Problem Statement:
Participants must design and implement a comprehensive Blockchain solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Logistics & Supply Chain follows the
structured professional
description as detailed in the full compendium version previously defined.)

Cybersecurity Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Logistics & Supply Chain.
Problem Statement:
Participants must design and implement a comprehensive Cybersecurity solution addressing
systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:

\f• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Logistics & Supply Chain follows the
structured professional
description as detailed in the full compendium version previously defined.)

AI & ML Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Logistics & Supply Chain.
Problem Statement:
Participants must design and implement a comprehensive AI & ML solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices

\f• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Logistics & Supply Chain follows the
structured professional
description as detailed in the full compendium version previously defined.)

\fTheme: Toys, Games & Entertainment

Full Stack Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Toys, Games & Entertainment.
Problem Statement:
Participants must design and implement a comprehensive Full Stack solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Toys, Games & Entertainment follows the
structured professional
description as detailed in the full compendium version previously defined.)

Blockchain Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints

\fspecific to Toys, Games & Entertainment.
Problem Statement:
Participants must design and implement a comprehensive Blockchain solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Toys, Games & Entertainment follows the
structured professional
description as detailed in the full compendium version previously defined.)

Cybersecurity Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Toys, Games & Entertainment.
Problem Statement:
Participants must design and implement a comprehensive Cybersecurity solution addressing
systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:

\f• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Toys, Games & Entertainment follows the
structured professional
description as detailed in the full compendium version previously defined.)

AI & ML Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Toys, Games & Entertainment.
Problem Statement:
Participants must design and implement a comprehensive AI & ML solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices

\f• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Toys, Games & Entertainment follows the
structured professional
description as detailed in the full compendium version previously defined.)

\fTheme: Healthcare & Medical Systems

Full Stack Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Healthcare & Medical Systems.
Problem Statement:
Participants must design and implement a comprehensive Full Stack solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Healthcare & Medical Systems follows the
structured professional
description as detailed in the full compendium version previously defined.)

Blockchain Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints

\fspecific to Healthcare & Medical Systems.
Problem Statement:
Participants must design and implement a comprehensive Blockchain solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Healthcare & Medical Systems follows the
structured professional
description as detailed in the full compendium version previously defined.)

Cybersecurity Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Healthcare & Medical Systems.
Problem Statement:
Participants must design and implement a comprehensive Cybersecurity solution addressing
systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:

\f• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Healthcare & Medical Systems follows the
structured professional
description as detailed in the full compendium version previously defined.)

AI & ML Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Healthcare & Medical Systems.
Problem Statement:
Participants must design and implement a comprehensive AI & ML solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices

\f• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Healthcare & Medical Systems follows the
structured professional
description as detailed in the full compendium version previously defined.)

\fTheme: Education & Learning Solutions

Full Stack Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Education & Learning Solutions.
Problem Statement:
Participants must design and implement a comprehensive Full Stack solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Education & Learning Solutions follows the
structured professional
description as detailed in the full compendium version previously defined.)

Blockchain Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints

\fspecific to Education & Learning Solutions.
Problem Statement:
Participants must design and implement a comprehensive Blockchain solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Education & Learning Solutions follows the
structured professional
description as detailed in the full compendium version previously defined.)

Cybersecurity Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Education & Learning Solutions.
Problem Statement:
Participants must design and implement a comprehensive Cybersecurity solution addressing
systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:

\f• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Education & Learning Solutions follows the
structured professional
description as detailed in the full compendium version previously defined.)

AI & ML Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Education & Learning Solutions.
Problem Statement:
Participants must design and implement a comprehensive AI & ML solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices

\f• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Education & Learning Solutions follows the
structured professional
description as detailed in the full compendium version previously defined.)

\fTheme: Agriculture & Agri-Tech

Full Stack Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Agriculture & Agri-Tech.
Problem Statement:
Participants must design and implement a comprehensive Full Stack solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Agriculture & Agri-Tech follows the structured
professional
description as detailed in the full compendium version previously defined.)

Blockchain Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints

\fspecific to Agriculture & Agri-Tech.
Problem Statement:
Participants must design and implement a comprehensive Blockchain solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Agriculture & Agri-Tech follows the structured
professional
description as detailed in the full compendium version previously defined.)

Cybersecurity Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Agriculture & Agri-Tech.
Problem Statement:
Participants must design and implement a comprehensive Cybersecurity solution addressing
systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:

\f• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Agriculture & Agri-Tech follows the structured
professional
description as detailed in the full compendium version previously defined.)

AI & ML Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Agriculture & Agri-Tech.
Problem Statement:
Participants must design and implement a comprehensive AI & ML solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices

\f• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Agriculture & Agri-Tech follows the structured
professional
description as detailed in the full compendium version previously defined.)

\fTheme: Banking, Finance & Insurance

Full Stack Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Banking, Finance & Insurance.
Problem Statement:
Participants must design and implement a comprehensive Full Stack solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Banking, Finance & Insurance follows the
structured professional
description as detailed in the full compendium version previously defined.)

Blockchain Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints

\fspecific to Banking, Finance & Insurance.
Problem Statement:
Participants must design and implement a comprehensive Blockchain solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Banking, Finance & Insurance follows the
structured professional
description as detailed in the full compendium version previously defined.)

Cybersecurity Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Banking, Finance & Insurance.
Problem Statement:
Participants must design and implement a comprehensive Cybersecurity solution addressing
systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:

\f• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Banking, Finance & Insurance follows the
structured professional
description as detailed in the full compendium version previously defined.)

AI & ML Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Banking, Finance & Insurance.
Problem Statement:
Participants must design and implement a comprehensive AI & ML solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices

\f• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Banking, Finance & Insurance follows the
structured professional
description as detailed in the full compendium version previously defined.)

\fTheme: Retail & E-commerce

Full Stack Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Retail & E-commerce.
Problem Statement:
Participants must design and implement a comprehensive Full Stack solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Retail & E-commerce follows the structured
professional
description as detailed in the full compendium version previously defined.)

Blockchain Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints

\fspecific to Retail & E-commerce.
Problem Statement:
Participants must design and implement a comprehensive Blockchain solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Retail & E-commerce follows the structured
professional
description as detailed in the full compendium version previously defined.)

Cybersecurity Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Retail & E-commerce.
Problem Statement:
Participants must design and implement a comprehensive Cybersecurity solution addressing
systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:

\f• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Retail & E-commerce follows the structured
professional
description as detailed in the full compendium version previously defined.)

AI & ML Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Retail & E-commerce.
Problem Statement:
Participants must design and implement a comprehensive AI & ML solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices

\f• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Retail & E-commerce follows the structured
professional
description as detailed in the full compendium version previously defined.)

\fTheme: Energy & Power Management

Full Stack Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Energy & Power Management.
Problem Statement:
Participants must design and implement a comprehensive Full Stack solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Energy & Power Management follows the
structured professional
description as detailed in the full compendium version previously defined.)

Blockchain Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints

\fspecific to Energy & Power Management.
Problem Statement:
Participants must design and implement a comprehensive Blockchain solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Energy & Power Management follows the
structured professional
description as detailed in the full compendium version previously defined.)

Cybersecurity Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Energy & Power Management.
Problem Statement:
Participants must design and implement a comprehensive Cybersecurity solution addressing
systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:

\f• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Energy & Power Management follows the
structured professional
description as detailed in the full compendium version previously defined.)

AI & ML Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Energy & Power Management.
Problem Statement:
Participants must design and implement a comprehensive AI & ML solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices

\f• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Energy & Power Management follows the
structured professional
description as detailed in the full compendium version previously defined.)

\fTheme: Smart Cities & Urban Development

Full Stack Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Smart Cities & Urban Development.
Problem Statement:
Participants must design and implement a comprehensive Full Stack solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Smart Cities & Urban Development follows the
structured professional
description as detailed in the full compendium version previously defined.)

Blockchain Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints

\fspecific to Smart Cities & Urban Development.
Problem Statement:
Participants must design and implement a comprehensive Blockchain solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Smart Cities & Urban Development follows the
structured professional
description as detailed in the full compendium version previously defined.)

Cybersecurity Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Smart Cities & Urban Development.
Problem Statement:
Participants must design and implement a comprehensive Cybersecurity solution addressing
systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:

\f• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Smart Cities & Urban Development follows the
structured professional
description as detailed in the full compendium version previously defined.)

AI & ML Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Smart Cities & Urban Development.
Problem Statement:
Participants must design and implement a comprehensive AI & ML solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices

\f• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Smart Cities & Urban Development follows the
structured professional
description as detailed in the full compendium version previously defined.)

\fTheme: Tourism & Hospitality

Full Stack Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Tourism & Hospitality.
Problem Statement:
Participants must design and implement a comprehensive Full Stack solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Tourism & Hospitality follows the structured
professional
description as detailed in the full compendium version previously defined.)

Blockchain Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints

\fspecific to Tourism & Hospitality.
Problem Statement:
Participants must design and implement a comprehensive Blockchain solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Tourism & Hospitality follows the structured
professional
description as detailed in the full compendium version previously defined.)

Cybersecurity Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Tourism & Hospitality.
Problem Statement:
Participants must design and implement a comprehensive Cybersecurity solution addressing
systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:

\f• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Tourism & Hospitality follows the structured
professional
description as detailed in the full compendium version previously defined.)

AI & ML Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Tourism & Hospitality.
Problem Statement:
Participants must design and implement a comprehensive AI & ML solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices

\f• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Tourism & Hospitality follows the structured
professional
description as detailed in the full compendium version previously defined.)

\fTheme: Sports & Fitness

Full Stack Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Sports & Fitness.
Problem Statement:
Participants must design and implement a comprehensive Full Stack solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Sports & Fitness follows the structured
professional
description as detailed in the full compendium version previously defined.)

Blockchain Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints

\fspecific to Sports & Fitness.
Problem Statement:
Participants must design and implement a comprehensive Blockchain solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Sports & Fitness follows the structured
professional
description as detailed in the full compendium version previously defined.)

Cybersecurity Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Sports & Fitness.
Problem Statement:
Participants must design and implement a comprehensive Cybersecurity solution addressing
systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:

\f• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Sports & Fitness follows the structured
professional
description as detailed in the full compendium version previously defined.)

AI & ML Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Sports & Fitness.
Problem Statement:
Participants must design and implement a comprehensive AI & ML solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices

\f• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Sports & Fitness follows the structured
professional
description as detailed in the full compendium version previously defined.)

\fTheme: Food & Nutrition

Full Stack Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Food & Nutrition.
Problem Statement:
Participants must design and implement a comprehensive Full Stack solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Food & Nutrition follows the structured
professional
description as detailed in the full compendium version previously defined.)

Blockchain Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints

\fspecific to Food & Nutrition.
Problem Statement:
Participants must design and implement a comprehensive Blockchain solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Food & Nutrition follows the structured
professional
description as detailed in the full compendium version previously defined.)

Cybersecurity Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Food & Nutrition.
Problem Statement:
Participants must design and implement a comprehensive Cybersecurity solution addressing
systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:

\f• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Food & Nutrition follows the structured
professional
description as detailed in the full compendium version previously defined.)

AI & ML Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Food & Nutrition.
Problem Statement:
Participants must design and implement a comprehensive AI & ML solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices

\f• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Food & Nutrition follows the structured
professional
description as detailed in the full compendium version previously defined.)

\fTheme: Environment & Sustainability

Full Stack Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Environment & Sustainability.
Problem Statement:
Participants must design and implement a comprehensive Full Stack solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Environment & Sustainability follows the
structured professional
description as detailed in the full compendium version previously defined.)

Blockchain Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints

\fspecific to Environment & Sustainability.
Problem Statement:
Participants must design and implement a comprehensive Blockchain solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Environment & Sustainability follows the
structured professional
description as detailed in the full compendium version previously defined.)

Cybersecurity Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Environment & Sustainability.
Problem Statement:
Participants must design and implement a comprehensive Cybersecurity solution addressing
systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:

\f• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Environment & Sustainability follows the
structured professional
description as detailed in the full compendium version previously defined.)

AI & ML Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Environment & Sustainability.
Problem Statement:
Participants must design and implement a comprehensive AI & ML solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices

\f• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Environment & Sustainability follows the
structured professional
description as detailed in the full compendium version previously defined.)

\fTheme: Manufacturing & Industrial Automation

Full Stack Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Manufacturing & Industrial Automation.
Problem Statement:
Participants must design and implement a comprehensive Full Stack solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Manufacturing & Industrial Automation follows
the structured professional
description as detailed in the full compendium version previously defined.)

Blockchain Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints

\fspecific to Manufacturing & Industrial Automation.
Problem Statement:
Participants must design and implement a comprehensive Blockchain solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Manufacturing & Industrial Automation follows
the structured professional
description as detailed in the full compendium version previously defined.)

Cybersecurity Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Manufacturing & Industrial Automation.
Problem Statement:
Participants must design and implement a comprehensive Cybersecurity solution addressing
systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:

\f• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Manufacturing & Industrial Automation follows
the structured professional
description as detailed in the full compendium version previously defined.)

AI & ML Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Manufacturing & Industrial Automation.
Problem Statement:
Participants must design and implement a comprehensive AI & ML solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices

\f• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Manufacturing & Industrial Automation follows
the structured professional
description as detailed in the full compendium version previously defined.)

\fTheme: Cybersecurity & Data Protection

Full Stack Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Cybersecurity & Data Protection.
Problem Statement:
Participants must design and implement a comprehensive Full Stack solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Cybersecurity & Data Protection follows the
structured professional
description as detailed in the full compendium version previously defined.)

Blockchain Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints

\fspecific to Cybersecurity & Data Protection.
Problem Statement:
Participants must design and implement a comprehensive Blockchain solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Cybersecurity & Data Protection follows the
structured professional
description as detailed in the full compendium version previously defined.)

Cybersecurity Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Cybersecurity & Data Protection.
Problem Statement:
Participants must design and implement a comprehensive Cybersecurity solution addressing
systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:

\f• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Cybersecurity & Data Protection follows the
structured professional
description as detailed in the full compendium version previously defined.)

AI & ML Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Cybersecurity & Data Protection.
Problem Statement:
Participants must design and implement a comprehensive AI & ML solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices

\f• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Cybersecurity & Data Protection follows the
structured professional
description as detailed in the full compendium version previously defined.)

\fTheme: Media & Digital Content

Full Stack Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Media & Digital Content.
Problem Statement:
Participants must design and implement a comprehensive Full Stack solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Media & Digital Content follows the structured
professional
description as detailed in the full compendium version previously defined.)

Blockchain Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints

\fspecific to Media & Digital Content.
Problem Statement:
Participants must design and implement a comprehensive Blockchain solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Media & Digital Content follows the structured
professional
description as detailed in the full compendium version previously defined.)

Cybersecurity Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Media & Digital Content.
Problem Statement:
Participants must design and implement a comprehensive Cybersecurity solution addressing
systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:

\f• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Media & Digital Content follows the structured
professional
description as detailed in the full compendium version previously defined.)

AI & ML Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Media & Digital Content.
Problem Statement:
Participants must design and implement a comprehensive AI & ML solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices

\f• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Media & Digital Content follows the structured
professional
description as detailed in the full compendium version previously defined.)

\fTheme: Real Estate & Infrastructure

Full Stack Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Real Estate & Infrastructure.
Problem Statement:
Participants must design and implement a comprehensive Full Stack solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Real Estate & Infrastructure follows the
structured professional
description as detailed in the full compendium version previously defined.)

Blockchain Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints

\fspecific to Real Estate & Infrastructure.
Problem Statement:
Participants must design and implement a comprehensive Blockchain solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Real Estate & Infrastructure follows the
structured professional
description as detailed in the full compendium version previously defined.)

Cybersecurity Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Real Estate & Infrastructure.
Problem Statement:
Participants must design and implement a comprehensive Cybersecurity solution addressing
systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:

\f• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Real Estate & Infrastructure follows the
structured professional
description as detailed in the full compendium version previously defined.)

AI & ML Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Real Estate & Infrastructure.
Problem Statement:
Participants must design and implement a comprehensive AI & ML solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices

\f• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Real Estate & Infrastructure follows the
structured professional
description as detailed in the full compendium version previously defined.)

\fTheme: Defense & Public Safety

Full Stack Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Defense & Public Safety.
Problem Statement:
Participants must design and implement a comprehensive Full Stack solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Defense & Public Safety follows the structured
professional
description as detailed in the full compendium version previously defined.)

Blockchain Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints

\fspecific to Defense & Public Safety.
Problem Statement:
Participants must design and implement a comprehensive Blockchain solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Defense & Public Safety follows the structured
professional
description as detailed in the full compendium version previously defined.)

Cybersecurity Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Defense & Public Safety.
Problem Statement:
Participants must design and implement a comprehensive Cybersecurity solution addressing
systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:

\f• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Defense & Public Safety follows the structured
professional
description as detailed in the full compendium version previously defined.)

AI & ML Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Defense & Public Safety.
Problem Statement:
Participants must design and implement a comprehensive AI & ML solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices

\f• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Defense & Public Safety follows the structured
professional
description as detailed in the full compendium version previously defined.)

\fTheme: Social Impact & NGOs

Full Stack Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Social Impact & NGOs.
Problem Statement:
Participants must design and implement a comprehensive Full Stack solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Social Impact & NGOs follows the structured
professional
description as detailed in the full compendium version previously defined.)

Blockchain Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints

\fspecific to Social Impact & NGOs.
Problem Statement:
Participants must design and implement a comprehensive Blockchain solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Social Impact & NGOs follows the structured
professional
description as detailed in the full compendium version previously defined.)

Cybersecurity Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Social Impact & NGOs.
Problem Statement:
Participants must design and implement a comprehensive Cybersecurity solution addressing
systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:

\f• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Social Impact & NGOs follows the structured
professional
description as detailed in the full compendium version previously defined.)

AI & ML Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Social Impact & NGOs.
Problem Statement:
Participants must design and implement a comprehensive AI & ML solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices

\f• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Social Impact & NGOs follows the structured
professional
description as detailed in the full compendium version previously defined.)

\fTheme: Waste Management & Recycling

Full Stack Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Waste Management & Recycling.
Problem Statement:
Participants must design and implement a comprehensive Full Stack solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Waste Management & Recycling follows the
structured professional
description as detailed in the full compendium version previously defined.)

Blockchain Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints

\fspecific to Waste Management & Recycling.
Problem Statement:
Participants must design and implement a comprehensive Blockchain solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Waste Management & Recycling follows the
structured professional
description as detailed in the full compendium version previously defined.)

Cybersecurity Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Waste Management & Recycling.
Problem Statement:
Participants must design and implement a comprehensive Cybersecurity solution addressing
systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:

\f• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Waste Management & Recycling follows the
structured professional
description as detailed in the full compendium version previously defined.)

AI & ML Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Waste Management & Recycling.
Problem Statement:
Participants must design and implement a comprehensive AI & ML solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices

\f• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Waste Management & Recycling follows the
structured professional
description as detailed in the full compendium version previously defined.)

\fTheme: Human Resources & Workforce Tech

Full Stack Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Human Resources & Workforce Tech.
Problem Statement:
Participants must design and implement a comprehensive Full Stack solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Human Resources & Workforce Tech follows
the structured professional
description as detailed in the full compendium version previously defined.)

Blockchain Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints

\fspecific to Human Resources & Workforce Tech.
Problem Statement:
Participants must design and implement a comprehensive Blockchain solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Human Resources & Workforce Tech follows
the structured professional
description as detailed in the full compendium version previously defined.)

Cybersecurity Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Human Resources & Workforce Tech.
Problem Statement:
Participants must design and implement a comprehensive Cybersecurity solution addressing
systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:

\f• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices
• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Human Resources & Workforce Tech follows
the structured professional
description as detailed in the full compendium version previously defined.)

AI & ML Problem Statement

Background & Context:
This section provides an in-depth explanation of industry challenges, operational inefficiencies,
technological gaps, regulatory concerns, scalability limitations, and real-world constraints
specific to Human Resources & Workforce Tech.
Problem Statement:
Participants must design and implement a comprehensive AI & ML solution addressing systemic
industry problems while ensuring scalability, security, performance optimization, and practical
feasibility.
Functional Requirements:
• Clearly defined modules and workflows
• Role-based access control where applicable
• Real-time or batch data handling (as per domain relevance)
• Secure authentication and authorization mechanisms
• Operational dashboards and analytics components
Technical Expectations & Constraints:
• Production-ready architecture design
• Secure coding practices

\f• Scalability considerations
• Compliance and regulatory awareness
• Optimization for performance and cost efficiency
Deliverables:
• Fully functional prototype or MVP
• Architecture documentation
• Source code repository
• Demonstration presentation
Evaluation Criteria:
• Innovation and originality
• Technical depth and architectural soundness
• Security robustness
• Scalability and real-world applicability
• Clarity of presentation and documentation
(Complete expanded narrative for this domain under Human Resources & Workforce Tech follows
the structured professional
description as detailed in the full compendium version previously defined.)

\f`,ch=["fullstack","ai_ml","cybersecurity","blockchain"],Ri=[{slug:"transport-mobility",name:"Transport & Mobility",statements:{fullstack:{domain:"fullstack",title:"Integrated Multi-Modal Urban Mobility Management Platform",summary:"Build one platform for route planning, tracking, ticketing, and transport analytics."},ai_ml:{domain:"ai_ml",title:"AI-Based Traffic Congestion Prediction & Dynamic Routing System",summary:"Predict congestion and recommend better routes and traffic signal actions."},cybersecurity:{domain:"cybersecurity",title:"Secure Connected Vehicle & Transport Infrastructure Monitoring System",summary:"Detect spoofing, intrusion, and anomalies in connected transport systems."},blockchain:{domain:"blockchain",title:"Decentralized Smart Ticketing & Fare Settlement System",summary:"Use smart contracts for transparent ticketing and automated fare splits."}}},{slug:"logistics-supply-chain",name:"Logistics & Supply Chain",statements:{fullstack:{domain:"fullstack",title:"End-to-End Digital Supply Chain Visibility Platform",summary:"Create end-to-end tracking across warehouse, shipments, and vendors."},ai_ml:{domain:"ai_ml",title:"AI-Powered Demand Forecasting & Inventory Optimization System",summary:"Forecast demand and optimize stock across locations."},cybersecurity:{domain:"cybersecurity",title:"Supply Chain Cyber Risk Detection & Vendor Vulnerability Monitoring System",summary:"Monitor vendor risk and detect weak links in the supply chain network."},blockchain:{domain:"blockchain",title:"Immutable Supply Chain Provenance & Anti-Counterfeit System",summary:"Track provenance and verify authenticity with tamper-proof records."}}},{slug:"toys-games-entertainment",name:"Toys, Games & Entertainment",statements:{fullstack:{domain:"fullstack",title:"Adaptive Cross-Platform Gaming & Community Engagement Ecosystem",summary:"Build identity, progression, events, and engagement features for players."},ai_ml:{domain:"ai_ml",title:"AI-Driven Personalized Gaming Experience Engine",summary:"Personalize difficulty, content, and retention using behavior data."},cybersecurity:{domain:"cybersecurity",title:"Online Gaming Fraud & Cheating Detection System",summary:"Detect bots, account abuse, and transaction fraud in real time."},blockchain:{domain:"blockchain",title:"Decentralized Ownership & NFT-Based In-Game Asset Marketplace",summary:"Enable secure ownership and transfer of digital game assets."}}},{slug:"healthcare-medical",name:"Healthcare & Medical Systems",statements:{fullstack:{domain:"fullstack",title:"Integrated Digital Health Records & Telemedicine Platform",summary:"Unify EMR, appointments, teleconsultation, and prescriptions."},ai_ml:{domain:"ai_ml",title:"AI-Based Early Disease Detection & Risk Stratification System",summary:"Predict risk early with explainable clinical AI models."},cybersecurity:{domain:"cybersecurity",title:"Medical IoT Device Intrusion Detection System",summary:"Secure connected medical devices and detect anomalous activity."},blockchain:{domain:"blockchain",title:"Decentralized Patient Data Exchange & Consent Management System",summary:"Use consent smart contracts and immutable access trails."}}},{slug:"education-learning",name:"Education & Learning Solutions",statements:{fullstack:{domain:"fullstack",title:"Intelligent Unified Learning Management & Academic Analytics Platform",summary:"Create an integrated LMS with engagement and performance analytics."},ai_ml:{domain:"ai_ml",title:"AI-Powered Personalized Learning & Adaptive Curriculum Engine",summary:"Recommend personalized study plans and adaptive content."},cybersecurity:{domain:"cybersecurity",title:"Secure Online Examination & Academic Integrity Monitoring System",summary:"Protect exams against impersonation and cheating."},blockchain:{domain:"blockchain",title:"Decentralized Academic Credit & Micro-Credential Verification Network",summary:"Issue and verify tamper-proof credits across institutions."}}},{slug:"agriculture-agritech",name:"Agriculture & Agri-Tech",statements:{fullstack:{domain:"fullstack",title:"Digital Farm Management & Crop Monitoring Platform",summary:"Track crop lifecycle, weather, pest alerts, and market insights."},ai_ml:{domain:"ai_ml",title:"AI-Based Crop Yield Prediction & Disease Detection System",summary:"Predict yield and detect diseases using time-series and vision models."},cybersecurity:{domain:"cybersecurity",title:"Secure Agricultural IoT Infrastructure Protection System",summary:"Protect farm IoT devices and detect unauthorized access."},blockchain:{domain:"blockchain",title:"Transparent Farm-to-Consumer Produce Traceability System",summary:"Ensure produce traceability and authenticity from farm to retail."}}},{slug:"bfsi",name:"Banking, Finance & Insurance",statements:{fullstack:{domain:"fullstack",title:"Unified Digital Banking & Financial Services Super-App",summary:"Integrate accounts, payments, loans, insurance, and analytics."},ai_ml:{domain:"ai_ml",title:"AI-Based Credit Risk Assessment & Loan Default Prediction System",summary:"Predict defaults with interpretable and fair credit models."},cybersecurity:{domain:"cybersecurity",title:"Real-Time Financial Fraud Detection & Risk Monitoring System",summary:"Identify suspicious transactions and account compromise in real time."},blockchain:{domain:"blockchain",title:"Decentralized Cross-Border Payment & Settlement Network",summary:"Enable transparent, near real-time cross-border settlement."}}},{slug:"retail-ecommerce",name:"Retail & E-commerce",statements:{fullstack:{domain:"fullstack",title:"Omnichannel Retail Experience & Inventory Intelligence Platform",summary:"Unify catalog, inventory sync, order flow, and analytics."},ai_ml:{domain:"ai_ml",title:"AI-Driven Personalized Shopping & Demand Forecasting Engine",summary:"Recommend products and forecast demand simultaneously."},cybersecurity:{domain:"cybersecurity",title:"E-Commerce Platform Threat Detection & Payment Security System",summary:"Detect bots, fraud, and suspicious purchase behavior."},blockchain:{domain:"blockchain",title:"Decentralized Product Authenticity & Anti-Counterfeit Verification System",summary:"Offer product authenticity verification with blockchain traceability."}}},{slug:"energy-power",name:"Energy & Power Management",statements:{fullstack:{domain:"fullstack",title:"Intelligent Energy Monitoring & Distributed Grid Management Platform",summary:"Monitor distributed energy systems and optimize load management."},ai_ml:{domain:"ai_ml",title:"AI-Based Energy Demand Forecasting & Load Optimization System",summary:"Predict demand and improve load balancing strategies."},cybersecurity:{domain:"cybersecurity",title:"Critical Infrastructure Protection for Smart Power Grids",summary:"Secure SCADA and smart grid communications against cyber threats."},blockchain:{domain:"blockchain",title:"Decentralized Peer-to-Peer Renewable Energy Trading Platform",summary:"Trade surplus renewable energy with smart-contract settlement."}}},{slug:"smart-cities",name:"Smart Cities & Urban Development",statements:{fullstack:{domain:"fullstack",title:"Integrated Urban Operations & Citizen Engagement Platform",summary:"Centralize city services, complaints, tracking, and analytics."},ai_ml:{domain:"ai_ml",title:"AI-Driven Urban Planning & Resource Allocation Optimization System",summary:"Model growth and optimize urban resource planning."},cybersecurity:{domain:"cybersecurity",title:"Urban Infrastructure Threat Detection & Surveillance Security System",summary:"Detect cyber anomalies in city networks and surveillance systems."},blockchain:{domain:"blockchain",title:"Transparent Municipal Governance & Budget Allocation Tracking System",summary:"Track municipal budgets and expenditures transparently."}}},{slug:"tourism-hospitality",name:"Tourism & Hospitality",statements:{fullstack:{domain:"fullstack",title:"Intelligent End-to-End Travel Planning & Hospitality Management Platform",summary:"Unify bookings, itineraries, and hospitality operations."},ai_ml:{domain:"ai_ml",title:"AI-Powered Dynamic Pricing & Personalized Travel Recommendation Engine",summary:"Forecast demand and optimize pricing and recommendations."},cybersecurity:{domain:"cybersecurity",title:"Hospitality Data Breach Prevention & Booking Fraud Detection System",summary:"Detect fraud and suspicious access across booking flows."},blockchain:{domain:"blockchain",title:"Decentralized Global Travel Identity & Loyalty Rewards Network",summary:"Secure identity and interoperable loyalty rewards."}}},{slug:"sports-fitness",name:"Sports & Fitness",statements:{fullstack:{domain:"fullstack",title:"Integrated Athlete Performance & Fan Engagement Platform",summary:"Track athlete metrics and improve fan interaction in one system."},ai_ml:{domain:"ai_ml",title:"AI-Based Athlete Performance Prediction & Injury Risk Assessment System",summary:"Predict injury risk and optimize training loads."},cybersecurity:{domain:"cybersecurity",title:"Sports Event Infrastructure & Streaming Security Protection System",summary:"Protect ticketing and streaming pipelines from attacks."},blockchain:{domain:"blockchain",title:"Transparent Athlete Contract & Sponsorship Management System",summary:"Automate sponsorship and royalty agreements transparently."}}},{slug:"food-nutrition",name:"Food & Nutrition",statements:{fullstack:{domain:"fullstack",title:"Intelligent Digital Nutrition & Meal Planning Ecosystem",summary:"Plan meals, track nutrients, and integrate grocery workflows."},ai_ml:{domain:"ai_ml",title:"AI-Based Personalized Nutrition Recommendation & Health Risk Prediction System",summary:"Personalize nutrition and predict diet-related risk."},cybersecurity:{domain:"cybersecurity",title:"Food Industry Digital Infrastructure & Payment Security Monitoring System",summary:"Detect fraud, abuse, and payment anomalies in food systems."},blockchain:{domain:"blockchain",title:"Transparent Food Supply Chain & Nutritional Authenticity Verification System",summary:"Verify food provenance and nutritional authenticity."}}},{slug:"environment-sustainability",name:"Environment & Sustainability",statements:{fullstack:{domain:"fullstack",title:"Integrated Environmental Monitoring & Sustainability Reporting Platform",summary:"Track emissions and environmental metrics with live reporting."},ai_ml:{domain:"ai_ml",title:"AI-Driven Climate Risk Prediction & Sustainability Optimization System",summary:"Predict climate risk and recommend sustainability actions."},cybersecurity:{domain:"cybersecurity",title:"Critical Environmental Infrastructure Security & Data Integrity Monitoring System",summary:"Protect environmental systems against tampering and breach."},blockchain:{domain:"blockchain",title:"Decentralized Carbon Credit Trading & Emission Verification System",summary:"Tokenize and track carbon credits with transparent retirement."}}},{slug:"manufacturing-automation",name:"Manufacturing & Industrial Automation",statements:{fullstack:{domain:"fullstack",title:"Smart Factory Operations & Production Intelligence Platform",summary:"Manage production, maintenance, quality, and workforce analytics."},ai_ml:{domain:"ai_ml",title:"AI-Based Predictive Maintenance & Production Optimization System",summary:"Predict failures and optimize maintenance and throughput."},cybersecurity:{domain:"cybersecurity",title:"Industrial Control System (ICS) Intrusion Detection & Protection Framework",summary:"Detect attacks and anomalies in ICS/SCADA environments."},blockchain:{domain:"blockchain",title:"Immutable Manufacturing Process & Quality Assurance Ledger",summary:"Track components and quality checks in tamper-proof records."}}},{slug:"cybersecurity-data-protection",name:"Cybersecurity & Data Protection",statements:{fullstack:{domain:"fullstack",title:"Enterprise Data Governance & Access Management Platform",summary:"Centralize access control, policies, and compliance reporting."},ai_ml:{domain:"ai_ml",title:"AI-Driven Insider Threat & Data Leakage Prediction System",summary:"Predict insider risk with behavioral analytics."},cybersecurity:{domain:"cybersecurity",title:"AI-Augmented Security Operations Center (SOC) Monitoring System",summary:"Aggregate logs and prioritize incidents automatically."},blockchain:{domain:"blockchain",title:"Decentralized Identity (DID) & Secure Data Sharing Framework",summary:"Enable selective disclosure with decentralized identity."}}},{slug:"media-digital-content",name:"Media & Digital Content",statements:{fullstack:{domain:"fullstack",title:"Unified Digital Content Creation, Distribution & Monetization Platform",summary:"Support upload, streaming, monetization, and analytics."},ai_ml:{domain:"ai_ml",title:"AI-Powered Content Recommendation & Audience Engagement Optimization Engine",summary:"Deliver personalized recommendations and reduce churn."},cybersecurity:{domain:"cybersecurity",title:"Digital Media Platform Threat Detection & Anti-Piracy Monitoring System",summary:"Identify scraping, abuse, piracy, and attack patterns."},blockchain:{domain:"blockchain",title:"Decentralized Digital Rights Management & Royalty Distribution System",summary:"Track ownership and automate transparent royalty payouts."}}},{slug:"real-estate-infrastructure",name:"Real Estate & Infrastructure",statements:{fullstack:{domain:"fullstack",title:"Smart Property Management & Infrastructure Analytics Platform",summary:"Manage property, tenants, maintenance, and occupancy analytics."},ai_ml:{domain:"ai_ml",title:"AI-Driven Property Valuation & Infrastructure Investment Optimization System",summary:"Predict prices and optimize investment allocation."},cybersecurity:{domain:"cybersecurity",title:"Smart Building Infrastructure Security Monitoring System",summary:"Protect smart building networks, access controls, and tenant data."},blockchain:{domain:"blockchain",title:"Decentralized Real Estate Title Registry & Transaction Platform",summary:"Maintain immutable title and ownership transfer records."}}},{slug:"defense-public-safety",name:"Defense & Public Safety",statements:{fullstack:{domain:"fullstack",title:"Integrated Emergency Response & Public Safety Command Platform",summary:"Coordinate incidents, resources, and inter-agency communication."},ai_ml:{domain:"ai_ml",title:"AI-Based Predictive Threat Assessment & Disaster Risk Forecasting System",summary:"Forecast risk zones and likely incident severity."},cybersecurity:{domain:"cybersecurity",title:"Critical National Infrastructure Threat Intelligence & Intrusion Detection System",summary:"Detect and prioritize risks across critical national systems."},blockchain:{domain:"blockchain",title:"Tamper-Proof Defense Supply Chain & Asset Tracking System",summary:"Track defense assets and inspections with immutable trails."}}},{slug:"social-impact-ngos",name:"Social Impact & NGOs",statements:{fullstack:{domain:"fullstack",title:"NGO Program Management & Impact Analytics Platform",summary:"Manage beneficiaries, volunteers, donations, and impact reporting."},ai_ml:{domain:"ai_ml",title:"AI-Based Social Impact Measurement & Resource Allocation Optimization System",summary:"Score outcomes and optimize resource placement."},cybersecurity:{domain:"cybersecurity",title:"NGO Data Privacy & Donor Information Protection Framework",summary:"Protect donor and beneficiary data from leaks and abuse."},blockchain:{domain:"blockchain",title:"Transparent Donation Tracking & Fund Allocation System",summary:"Track donation flow with milestone smart contracts."}}},{slug:"waste-management-recycling",name:"Waste Management & Recycling",statements:{fullstack:{domain:"fullstack",title:"Smart Waste Collection & Route Optimization Platform",summary:"Optimize collection routes and track operations efficiently."},ai_ml:{domain:"ai_ml",title:"AI-Based Waste Segregation & Recycling Efficiency Optimization System",summary:"Classify waste and improve recycling decision-making."},cybersecurity:{domain:"cybersecurity",title:"Smart Waste Infrastructure Security Monitoring System",summary:"Secure IoT-based waste infrastructure and monitor anomalies."},blockchain:{domain:"blockchain",title:"Incentivized Recycling & Waste Credit Trading System",summary:"Issue and redeem recycling credits transparently."}}},{slug:"hr-workforce-tech",name:"Human Resources & Workforce Tech",statements:{fullstack:{domain:"fullstack",title:"Unified Talent Management & Workforce Analytics Platform",summary:"Integrate hiring, performance, and workforce planning analytics."},ai_ml:{domain:"ai_ml",title:"AI-Based Talent Matching & Workforce Retention Prediction System",summary:"Improve hiring fit and predict attrition risk."},cybersecurity:{domain:"cybersecurity",title:"Enterprise Insider Threat & HR Data Protection Monitoring System",summary:"Monitor HR data access and detect insider anomalies."},blockchain:{domain:"blockchain",title:"Decentralized Employment Credential & Experience Verification Network",summary:"Verify employment history with tamper-proof records."}}}],sg=["education-learning","transport-mobility","healthcare-medical"],ul={fullstack:"Full Stack",ai_ml:"AI & ML",cybersecurity:"Cybersecurity",blockchain:"Blockchain"},vR={"Full Stack Problem Statement":"fullstack","Blockchain Problem Statement":"blockchain","Cybersecurity Problem Statement":"cybersecurity","AI & ML Problem Statement":"ai_ml"};function Sx(t){return t.toLowerCase().replace(/[^a-z0-9]+/g,"")}function ma(t){return t.replace(/\s+/g," ").trim()}function Wo(t){const e=t.split(`
`).map(r=>r.trim()).filter(Boolean),n=[];let i="";for(const r of e){if(r.startsWith("•")){i&&n.push(ma(i)),i=r.replace(/^•\s*/,"");continue}i&&(i+=` ${r}`)}return i&&n.push(ma(i)),n}function ta(t,e,n){const i=t.indexOf(e);if(i<0)return"";const r=i+e.length,a=t.slice(r);let s=a.length;for(const o of n){const l=a.indexOf(o);l>=0&&l<s&&(s=l)}return a.slice(0,s).trim()}function xR(t){const e=t.replace(/\r/g,`
`).replace(/\f/g,`
`),n=/Theme:\s*([^\n]+)\n([\s\S]*?)(?=\nTheme:|\s*$)/g,i=/(Full Stack Problem Statement|Blockchain Problem Statement|Cybersecurity Problem Statement|AI & ML Problem Statement)\n([\s\S]*?)(?=(?:Full Stack Problem Statement|Blockchain Problem Statement|Cybersecurity Problem Statement|AI & ML Problem Statement)\n|$)/g,r={};let a=n.exec(e);for(;a;){const s=ma(a[1]),o=a[2];i.lastIndex=0;let l=i.exec(o);for(;l;){const u=ma(l[1]),d=vR[u],f=l[2];if(d){const p=ta(f,"Background & Context:",["Problem Statement:"]),g=ta(f,"Problem Statement:",["Functional Requirements:"]),y=ta(f,"Functional Requirements:",["Technical Expectations & Constraints:"]),x=ta(f,"Technical Expectations & Constraints:",["Deliverables:"]),m=ta(f,"Deliverables:",["Evaluation Criteria:"]),h=ta(f,"Evaluation Criteria:",[]),v=`${Sx(s)}::${d}`;r[v]={background:ma(p),problemStatement:ma(g),functionalRequirements:Wo(y),technicalExpectations:Wo(x),deliverables:Wo(m),evaluationCriteria:Wo(h),constraints:[]}}l=i.exec(o)}a=n.exec(e)}return r}const _R=xR(yR);function Ru(t){const e=t.toLowerCase();return e.includes("this section provides an in-depth explanation")||e.includes("participants must design and implement a comprehensive")||e.includes("complete expanded narrative")}function SR(t){return Ru(t.background)||Ru(t.problemStatement)?!0:[...t.functionalRequirements,...t.technicalExpectations,...t.deliverables,...t.evaluationCriteria,...t.constraints].some(Ru)}const bR={"transport-mobility":{challenge:"fragmented multimodal journeys, congestion, and poor real-time coordination",stakeholders:"commuters, transport operators, municipal planners, and traffic authorities",impact:"improved commuter experience, lower congestion, and better operational planning"},"logistics-supply-chain":{challenge:"siloed visibility across procurement, warehousing, movement, and delivery",stakeholders:"manufacturers, logistics providers, distributors, and retailers",impact:"faster decisions, reduced delays, and stronger supply chain resilience"},"toys-games-entertainment":{challenge:"player retention, trust, and monetization across fragmented gaming ecosystems",stakeholders:"players, creators, game studios, and platform operators",impact:"higher engagement, fairer digital ownership, and improved platform integrity"},"healthcare-medical":{challenge:"disconnected records, security risks, and delayed predictive interventions",stakeholders:"patients, clinicians, hospitals, and health administrators",impact:"safer care pathways, better outcomes, and stronger data governance"},"education-learning":{challenge:"non-personalized learning and disconnected institutional systems",stakeholders:"students, faculty, administrators, and credential verifiers",impact:"improved learning outcomes and stronger academic transparency"},"agriculture-agritech":{challenge:"low digital visibility in farm operations and high uncertainty in yield planning",stakeholders:"farmers, cooperatives, agri-enterprises, and buyers",impact:"better farm decisions, lower losses, and improved market confidence"},bfsi:{challenge:"fraud risk, fragmented digital services, and slow settlement layers",stakeholders:"customers, banks, insurers, lenders, and regulators",impact:"secure financial access, faster transactions, and robust risk control"},"retail-ecommerce":{challenge:"inventory mismatch, fraud, and inconsistent omnichannel experiences",stakeholders:"consumers, merchants, marketplaces, and supply teams",impact:"higher conversion, lower fraud losses, and tighter operations"},"energy-power":{challenge:"demand-supply variability and distributed grid complexity",stakeholders:"utilities, prosumers, grid operators, and communities",impact:"better load balancing, improved sustainability, and operational reliability"},"smart-cities":{challenge:"unintegrated urban systems and weak service transparency",stakeholders:"citizens, municipal bodies, planners, and public service teams",impact:"faster service delivery and smarter city-level decisions"},"tourism-hospitality":{challenge:"fragmented booking journeys and weak operational intelligence",stakeholders:"travelers, hotels, operators, and destination managers",impact:"better traveler experiences and improved occupancy efficiency"},"sports-fitness":{challenge:"scattered athlete data, integrity threats, and uneven fan engagement",stakeholders:"athletes, coaches, clubs, leagues, and fans",impact:"better performance, reduced risk, and stronger event trust"},"food-nutrition":{challenge:"low nutrition personalization and weak food provenance confidence",stakeholders:"consumers, nutrition experts, food platforms, and producers",impact:"healthier behavior and safer, more trusted food systems"},"environment-sustainability":{challenge:"fragmented environmental monitoring and low emissions accountability",stakeholders:"governments, enterprises, communities, and sustainability teams",impact:"better climate decision support and measurable sustainability progress"},"manufacturing-automation":{challenge:"downtime, quality drift, and poor process traceability",stakeholders:"plant operators, quality teams, maintenance teams, and suppliers",impact:"higher throughput, lower defects, and stronger auditability"},"cybersecurity-data-protection":{challenge:"distributed attack surfaces and weak policy-to-practice enforcement",stakeholders:"security operations teams, governance teams, and enterprise users",impact:"reduced breach probability and stronger compliance posture"},"media-digital-content":{challenge:"content abuse, piracy, and unclear creator monetization",stakeholders:"creators, platforms, advertisers, and audiences",impact:"fair revenue models and trustworthy digital distribution"},"real-estate-infrastructure":{challenge:"manual workflows in ownership, operations, and property analytics",stakeholders:"developers, managers, tenants, and public registries",impact:"transparent transactions and efficient asset operations"},"defense-public-safety":{challenge:"high-stakes incident coordination and critical infrastructure security",stakeholders:"response agencies, operators, planners, and citizens",impact:"faster incident response and stronger public safety readiness"},"social-impact-ngos":{challenge:"limited transparency in beneficiary impact and funding utilization",stakeholders:"NGOs, donors, volunteers, and beneficiary communities",impact:"higher donor trust and measurable social outcomes"},"waste-management-recycling":{challenge:"inefficient collection operations and weak recycling incentives",stakeholders:"municipal teams, recyclers, citizens, and waste operators",impact:"cleaner cities and improved circular economy outcomes"},"hr-workforce-tech":{challenge:"fragmented talent workflows and data sensitivity in employee systems",stakeholders:"candidates, HR teams, managers, and enterprises",impact:"better hiring outcomes and safer workforce data practices"}};function og(t,e){const n=`${Sx(t.name)}::${e.domain}`,i=_R[n];if(i&&!SR(i))return i;const r=bR[t.slug]||{challenge:"cross-functional digital transformation and operational modernization",stakeholders:"business operators, end users, and technical teams"},a=`${t.name} ecosystems currently face ${r.challenge}. This creates delivery risk for ${r.stakeholders}.`,s=`Design and implement an industry-ready ${ul[e.domain]} solution for "${e.title}" that can be deployed at scale and measured against business outcomes.`;return e.domain==="fullstack"?{background:`${a} Existing tools are often disconnected, leading to data silos and low operational visibility.`,problemStatement:`${s} The solution must provide an integrated product workflow with strong user and admin experiences.`,functionalRequirements:["Role-based user and admin modules with secure authentication and authorization.",`Core workflow implementation aligned to ${t.name} operations.`,"Operational dashboard with status tracking, filters, and actionable alerts.","Audit-friendly activity logs for critical user and system events.","Search, drill-down views, and lifecycle state transitions.","Exportable reporting for operational and management review."],technicalExpectations:["Modular service-oriented backend with clean API contracts.","Normalized data model with indexing strategy for scale.","Caching and pagination support for high-volume read scenarios.","Cloud-ready deployment architecture with environment separation.","Input validation, rate limiting, and secure secret handling.","Observability: health checks, structured logging, and metrics."],deliverables:["Working deployed application (frontend + backend + datastore).","Architecture diagram and component interaction notes.","API specification with request/response examples.","Test evidence for core business and failure paths.","Demo script showing end-to-end workflow value."],evaluationCriteria:["Functional completeness and requirement fit.","System scalability and reliability under load assumptions.","Security posture and data integrity protections.","UX clarity and decision support quality.","Practicality for real-world adoption."],constraints:[]}:e.domain==="blockchain"?{background:`${a} Trust, verification, and auditability are difficult with centralized ledgers and opaque reconciliation.`,problemStatement:`${s} Use distributed ledger design to improve transparency, integrity, and verifiable transactions.`,functionalRequirements:["On-chain asset/record lifecycle tracking with verifiable state changes.","Smart contract logic for automated execution and settlement rules.","Identity-aware participant actions with role restrictions.","Event timeline or ledger explorer for transparent auditing.","Integrity validation flow using transaction/hash references.","Admin controls for contract configuration and emergency handling."],technicalExpectations:["Well-structured smart contracts with access control checks.","Gas-aware contract design and optimized state writes.","Off-chain storage strategy with on-chain hash anchoring.","Wallet integration and transaction signature flow.","Replay-safe request handling and contract error management.","Clear test coverage for core and adversarial scenarios."],deliverables:["Deployed contracts with ABI and interaction scripts.","DApp or API gateway for contract operations.","Transaction evidence for core lifecycle operations.","Security notes: assumptions, threat model, and mitigations.","Cost analysis for representative transaction volume."],evaluationCriteria:["Smart contract correctness and security hygiene.","Transparency and traceability of lifecycle events.","Gas efficiency and operational feasibility.","Integration quality between on-chain and off-chain layers.","Clarity of business value and ecosystem fit."],constraints:["Do not place sensitive personally identifiable data directly on-chain.","Provide a strategy for key compromise and role recovery.","Ensure transaction cost remains practical for intended scale."]}:e.domain==="cybersecurity"?{background:`${a} Expanding digital surfaces increase breach risk, operational disruption, and compliance exposure.`,problemStatement:`${s} Build a proactive security monitoring and response framework with measurable detection quality.`,functionalRequirements:["Ingestion pipeline for security-relevant telemetry and activity logs.","Detection logic for anomalies, misuse patterns, and threat indicators.","Risk scoring and incident prioritization workflow.","Real-time alerting with contextual evidence for triage.","Investigation dashboard with timeline and entity correlation.","Response playbooks for containment and recovery actions."],technicalExpectations:["Low-latency stream or near-real-time event processing.","Rule + behavior-based detection strategy with tunable thresholds.","False-positive control mechanisms and suppression logic.","Secure storage for logs with tamper-evident retention controls.","Access control and least-privilege operations.","Metrics on precision, recall proxy, and response SLA."],deliverables:["Operational detection dashboard with live/recorded scenarios.","Threat model and attack surface documentation.","Detection rulebook or model description with tuning notes.","Incident simulation report with outcomes and limitations.","Hardening checklist for production rollout."],evaluationCriteria:["Detection effectiveness and incident triage quality.","Robustness against noisy or adversarial inputs.","Operational usability for security teams.","Scalability and maintainability of detection logic.","Practical defense impact for the target domain."],constraints:["Respect privacy boundaries while collecting telemetry.","Minimize detection blind spots without over-alerting teams.","Document assumptions and known bypass risks."]}:{background:`${a} Static decisioning is insufficient where data variability and uncertainty are high.`,problemStatement:`${s} Build an explainable, production-oriented AI workflow that improves decision quality and operational outcomes.`,functionalRequirements:["Data ingestion and preprocessing pipeline with quality checks.","Model training workflow aligned with problem objective.","Evaluation module with suitable metrics and validation split.","Inference pipeline for real-time or batch prediction use.","Decision dashboard exposing outputs and confidence signals.","Feedback loop for continuous model monitoring and retraining."],technicalExpectations:["Feature engineering with clear domain rationale.","Bias, drift, and model stability assessment.","Model versioning and reproducible training setup.","Latency and throughput planning for target usage.","Explainability support for critical predictions.","Secure handling of sensitive training/inference data."],deliverables:["Trained model artifacts and reproducible training notebook/pipeline.","Inference service or evaluation harness.","Model card including assumptions, metrics, and failure modes.","Dataset documentation and preprocessing rationale.","Business impact simulation or scenario-based validation."],evaluationCriteria:["Predictive performance and generalization quality.","Interpretability and trustworthiness of outputs.","Operational fitness for production deployment.","Fairness/risk awareness in model behavior.","Clarity of measurable domain impact."],constraints:["Avoid leakage between train/validation/test workflows.","Document data limitations and model confidence boundaries.","Provide rollback strategy for underperforming model versions."]}}function Gl(t){let e=0;for(let n=0;n<t.length;n+=1)e=(e<<5)-e+t.charCodeAt(n)|0;return Math.abs(e)}function wR(t){return ch[Gl(`${t}:hidden`)%ch.length]}function bx(t){return`problem_statement_state_v1:${t.trim().toUpperCase()}`}function lg(t){const e=Gl(`${t}:theme`)%Ri.length;return{baseThemeIndex:e,activeThemeIndex:e,hiddenDomain:wR(t),changeThemeState:"unused",revealState:"unused",superUsed:!1,superThemeSlug:"",selectedKey:"",confirmedKey:""}}function MR(t){const e=bx(t),n=localStorage.getItem(e);if(!n)return lg(t);try{return JSON.parse(n)}catch{return lg(t)}}function ER(t,e){localStorage.setItem(bx(t),JSON.stringify(e))}function CR(){const[t,e]=U.useState(""),[n,i]=U.useState(""),[r,a]=U.useState(null),[s,o]=U.useState(null),[l,u]=U.useState(null),[d,f]=U.useState(""),[p,g]=U.useState(!1),[y,x]=U.useState(!1),[m,h]=U.useState(""),v=U.useMemo(()=>r?r.superUsed&&r.superThemeSlug?Ri.find(N=>N.slug===r.superThemeSlug)||Ri[r.baseThemeIndex]:Ri[r.activeThemeIndex]||Ri[r.baseThemeIndex]:null,[r]),_=U.useMemo(()=>!r||!v?[]:r.superUsed?[v.statements.fullstack]:ch.filter(N=>r.revealState==="active"||N!==r.hiddenDomain).map(N=>v.statements[N]),[r,v]),M=async N=>{N.preventDefault();const D=t.trim().toUpperCase();if(!D){f("Team ID is required.");return}x(!0),f("");try{const B=await ke("/api/hackathon/problem-statement/team",{method:"POST",body:JSON.stringify({teamId:D})}),H=B.teamId.trim().toUpperCase(),$=MR(H);o({teamId:B.teamId,teamName:B.teamName,leaderName:B.leaderName}),i(H),u(B.locked&&B.choice?B.choice:null),a(B.locked?null:$),h(""),f("")}catch(B){o(null),a(null),u(null),f(B instanceof Error?B.message:"Unable to validate team ID")}finally{x(!1)}},P=N=>{if(!r||!n)return;const D=N(r);a(D),ER(n,D)},A=()=>{!r||r.superUsed||r.changeThemeState!=="reverted"&&P(N=>{if(N.changeThemeState==="unused"){const D=(N.activeThemeIndex+1+Gl(`${n}:change`)%(Ri.length-1))%Ri.length;return{...N,activeThemeIndex:D,changeThemeState:"active",selectedKey:"",confirmedKey:""}}return{...N,activeThemeIndex:N.baseThemeIndex,changeThemeState:"reverted",selectedKey:"",confirmedKey:""}})},E=()=>{!r||r.superUsed||r.revealState!=="reverted"&&P(N=>N.revealState==="unused"?{...N,revealState:"active",selectedKey:"",confirmedKey:""}:{...N,revealState:"reverted",selectedKey:"",confirmedKey:""})},w=()=>{if(!r||r.superUsed)return;const N=Gl(`${n}:super`)%sg.length,D=sg[N];P(B=>({...B,superUsed:!0,superThemeSlug:D,selectedKey:"",confirmedKey:""}))},S=async()=>{if(!r||!r.selectedKey||!v){f("Select one problem statement first.");return}const N=_.find(D=>`${v.slug}:${D.domain}`===r.selectedKey);if(!N){f("Selected statement is not available. Please select again.");return}g(!0);try{const D=await ke("/api/hackathon/problem-statement/confirm",{method:"POST",body:JSON.stringify({teamId:n,themeSlug:v.slug,themeName:v.name,domain:N.domain,title:N.title,summary:N.summary})});P(B=>({...B,confirmedKey:B.selectedKey})),u({teamId:(s==null?void 0:s.teamId)||n,teamName:(s==null?void 0:s.teamName)||"",leaderName:(s==null?void 0:s.leaderName)||"",themeSlug:v.slug,themeName:v.name,domain:N.domain,title:N.title,summary:N.summary,confirmedAt:new Date().toLocaleString()}),a(null),f(D.message||"Problem statement confirmed successfully.")}catch(D){try{const B=await ke("/api/hackathon/problem-statement/team",{method:"POST",body:JSON.stringify({teamId:n})});B.locked&&B.choice?(o({teamId:B.teamId,teamName:B.teamName,leaderName:B.leaderName}),u(B.choice),a(null),f("Problem statement is already locked for this team.")):f(D instanceof Error?D.message:"Unable to confirm problem statement")}catch{f(D instanceof Error?D.message:"Unable to confirm problem statement")}}finally{g(!1)}},b=U.useMemo(()=>!v||!m?null:_.find(N=>`${v.slug}:${N.domain}`===m)||null,[v,m,_]),T=U.useMemo(()=>l&&Ri.find(N=>N.slug===l.themeSlug||N.name===l.themeName)||null,[l]),z=U.useMemo(()=>!l||l.domain!=="fullstack"&&l.domain!=="ai_ml"&&l.domain!=="cybersecurity"&&l.domain!=="blockchain"?null:{domain:l.domain,title:l.title,summary:l.summary},[l]);return c.jsxs("section",{className:"section",children:[c.jsx("h2",{className:"section-title",children:"Problem Statement"}),c.jsx("p",{className:"section-subtitle",children:"Enter valid Team ID to unlock assigned theme and select final statement."}),!s&&c.jsxs("div",{className:"card",style:{maxWidth:"620px",marginTop:"20px"},children:[c.jsx("h4",{children:"Enter Team ID"}),c.jsxs("form",{className:"form-grid",onSubmit:M,children:[c.jsx("input",{placeholder:"Team ID",value:t,onChange:N=>e(N.target.value),required:!0}),c.jsx("button",{className:"btn btn-primary",type:"submit",disabled:y,children:y?"Validating...":"Unlock Theme"})]}),d&&c.jsx("div",{className:"banner",style:{marginTop:"16px"},children:d})]}),s&&l&&T&&z&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[c.jsx("h4",{children:"Problem Statement Locked"}),c.jsxs("p",{children:[c.jsx("strong",{children:"Team ID:"})," ",s.teamId]}),c.jsxs("p",{children:[c.jsx("strong",{children:"Team Name:"})," ",s.teamName]}),c.jsxs("p",{children:[c.jsx("strong",{children:"Leader:"})," ",s.leaderName]}),c.jsxs("p",{children:[c.jsx("strong",{children:"Theme:"})," ",l.themeName]}),c.jsxs("p",{children:[c.jsx("strong",{children:"Confirmed At:"})," ",l.confirmedAt]})]}),c.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[c.jsx("h4",{children:ul[z.domain]}),c.jsx("p",{children:c.jsx("strong",{children:z.title})}),c.jsx("p",{children:z.summary}),(()=>{const N=og(T,z);return c.jsxs("div",{className:"problem-details",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Background:"})," ",N.background]}),c.jsxs("p",{children:[c.jsx("strong",{children:"Problem Statement:"})," ",N.problemStatement]}),c.jsx("p",{children:c.jsx("strong",{children:"Functional Requirements:"})}),c.jsx("ul",{children:N.functionalRequirements.map(D=>c.jsx("li",{children:D},D))}),c.jsx("p",{children:c.jsx("strong",{children:"Technical Expectations & Constraints:"})}),c.jsx("ul",{children:N.technicalExpectations.map(D=>c.jsx("li",{children:D},D))}),c.jsx("p",{children:c.jsx("strong",{children:"Deliverables:"})}),c.jsx("ul",{children:N.deliverables.map(D=>c.jsx("li",{children:D},D))}),c.jsx("p",{children:c.jsx("strong",{children:"Evaluation Criteria:"})}),c.jsx("ul",{children:N.evaluationCriteria.map(D=>c.jsx("li",{children:D},D))}),N.constraints.length>0&&c.jsxs(c.Fragment,{children:[c.jsx("p",{children:c.jsx("strong",{children:"Constraints:"})}),c.jsx("ul",{children:N.constraints.map(D=>c.jsx("li",{children:D},D))})]})]})})()]})]}),r&&v&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[c.jsx("h4",{children:"Team & Assigned Theme"}),c.jsxs("p",{children:[c.jsx("strong",{children:"Team ID:"})," ",(s==null?void 0:s.teamId)||n]}),c.jsxs("p",{children:[c.jsx("strong",{children:"Team Name:"})," ",(s==null?void 0:s.teamName)||"-"]}),c.jsxs("p",{children:[c.jsx("strong",{children:"Leader:"})," ",(s==null?void 0:s.leaderName)||"-"]}),c.jsxs("p",{children:[c.jsx("strong",{children:"Theme:"})," ",v.name]}),r.superUsed&&c.jsxs("p",{children:[c.jsx("strong",{children:"Mode:"})," Super Power Key Active (non-revertible)"]})]}),c.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[c.jsx("h4",{children:"Available Problem Statements"}),c.jsxs("p",{children:["Select one statement and use ",c.jsx("strong",{children:"View Complete Statement"})," to read full details."]}),_.map(N=>{const D=`${v.slug}:${N.domain}`,B=r.selectedKey===D,H=r.confirmedKey===D;return c.jsxs("div",{className:"card",style:{marginTop:"14px"},children:[c.jsx("h4",{style:{marginBottom:"8px"},children:ul[N.domain]}),c.jsx("p",{children:c.jsx("strong",{children:N.title})}),c.jsx("p",{children:N.summary}),c.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"10px",marginTop:"10px"},children:[c.jsx("input",{type:"checkbox",checked:B,onChange:()=>P($=>({...$,selectedKey:B?"":D})),style:{width:"18px",height:"18px"}}),c.jsx("span",{children:"Select this statement"})]}),c.jsx("button",{className:"btn btn-ghost",type:"button",style:{marginTop:"10px"},onClick:()=>h(D),children:"View Complete Statement"}),H&&c.jsx("p",{style:{marginTop:"10px",color:"#86efac"},children:c.jsx("strong",{children:"Confirmed"})})]},D)})]}),c.jsxs("div",{className:"card",style:{marginTop:"20px"},children:[c.jsx("h4",{children:"Power Key"}),c.jsxs("div",{className:"power-key-grid",children:[c.jsxs("button",{className:"btn btn-ghost",type:"button",onClick:A,disabled:r.superUsed||r.changeThemeState==="reverted",children:[r.changeThemeState==="unused"&&"Change Theme (One Time)",r.changeThemeState==="active"&&"Revert Theme (Final)",r.changeThemeState==="reverted"&&"Change Theme Used"]}),c.jsxs("button",{className:"btn btn-ghost",type:"button",onClick:E,disabled:r.superUsed||r.revealState==="reverted",children:[r.revealState==="unused"&&"Reveal Hidden 4th Statement",r.revealState==="active"&&"Revert Hidden Statement (Final)",r.revealState==="reverted"&&"Reveal Power Used"]}),c.jsx("button",{className:"btn btn-primary",type:"button",onClick:w,disabled:r.superUsed,children:r.superUsed?"Super Power Key Used":"Activate Super Power Key (One Time, No Revert)"})]})]}),c.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[c.jsx("button",{className:"btn btn-primary",type:"button",onClick:S,disabled:p,children:p?"Confirming...":"Confirm Problem Statement"}),d&&c.jsx("div",{className:"banner",style:{marginTop:"16px"},children:d})]}),b&&c.jsx("div",{className:"ps-modal-overlay",children:c.jsxs("div",{className:"ps-modal-card",children:[c.jsx("button",{className:"ps-modal-close",type:"button",onClick:()=>h(""),children:"x"}),c.jsx("h3",{style:{marginTop:0},children:ul[b.domain]}),c.jsx("p",{children:c.jsx("strong",{children:b.title})}),c.jsx("p",{children:b.summary}),(()=>{const N=og(v,b);return c.jsxs("div",{className:"problem-details",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Background:"})," ",N.background]}),c.jsxs("p",{children:[c.jsx("strong",{children:"Problem Statement:"})," ",N.problemStatement]}),c.jsx("p",{children:c.jsx("strong",{children:"Functional Requirements:"})}),c.jsx("ul",{children:N.functionalRequirements.map(D=>c.jsx("li",{children:D},D))}),c.jsx("p",{children:c.jsx("strong",{children:"Technical Expectations & Constraints:"})}),c.jsx("ul",{children:N.technicalExpectations.map(D=>c.jsx("li",{children:D},D))}),c.jsx("p",{children:c.jsx("strong",{children:"Deliverables:"})}),c.jsx("ul",{children:N.deliverables.map(D=>c.jsx("li",{children:D},D))}),c.jsx("p",{children:c.jsx("strong",{children:"Evaluation Criteria:"})}),c.jsx("ul",{children:N.evaluationCriteria.map(D=>c.jsx("li",{children:D},D))}),N.constraints.length>0&&c.jsxs(c.Fragment,{children:[c.jsx("p",{children:c.jsx("strong",{children:"Constraints:"})}),c.jsx("ul",{children:N.constraints.map(D=>c.jsx("li",{children:D},D))})]})]})})()]})})]})]})}function TR(){return c.jsxs("section",{className:"section",children:[c.jsx("h2",{className:"section-title",children:"Page Not Found"}),c.jsx("p",{className:"section-subtitle",children:"This page does not exist."}),c.jsx("a",{className:"btn btn-primary",href:"/",children:"Back to Home"})]})}function AR(){return U.useEffect(()=>{document.documentElement.dataset.theme="dark"},[]),c.jsxs("div",{className:"app-shell",children:[c.jsx(KA,{}),c.jsx(YA,{}),c.jsx(sb,{}),c.jsx("main",{className:"app-content",children:c.jsxs(WS,{children:[c.jsx(bt,{path:"/",element:c.jsx(JA,{})}),c.jsx(bt,{path:"/register",element:c.jsx(aR,{})}),c.jsx(bt,{path:"/hackathon",element:c.jsx(QA,{})}),c.jsx(bt,{path:"/problemstatement",element:c.jsx(CR,{})}),c.jsx(bt,{path:"/workshops",element:c.jsx(nR,{})}),c.jsx(bt,{path:"/kinetic-showdown",element:c.jsx(ig,{})}),c.jsx(bt,{path:"/robo-race",element:c.jsx(ig,{})}),c.jsx(bt,{path:"/esports",element:c.jsx(iR,{})}),c.jsx(bt,{path:"/open-mic",element:c.jsx(rR,{})}),c.jsx(bt,{path:"/culture",element:c.jsx(sR,{})}),c.jsx(bt,{path:"/gallery",element:c.jsx(oR,{})}),c.jsx(bt,{path:"/team",element:c.jsx(lR,{})}),c.jsx(bt,{path:"/contact",element:c.jsx(cR,{})}),c.jsx(bt,{path:"/secret-admin",element:c.jsx(uR,{})}),c.jsx(bt,{path:"/secret-admin/registrations",element:c.jsx(pR,{})}),c.jsx(bt,{path:"/secret-admin/manage-content",element:c.jsx(mR,{})}),c.jsx(bt,{path:"/hackathon-manager",element:c.jsx(gR,{})}),c.jsx(bt,{path:"*",element:c.jsx(TR,{})})]})}),c.jsx(ob,{})]})}Pu.createRoot(document.getElementById("root")).render(c.jsx(xg.StrictMode,{children:c.jsx(QS,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:c.jsx(AR,{})})}));
