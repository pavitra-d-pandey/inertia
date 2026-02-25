function Cx(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const a=Object.getOwnPropertyDescriptor(i,r);a&&Object.defineProperty(t,r,a.get?a:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();function Tx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var og={exports:{}},Gl={},lg={exports:{}},Be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var js=Symbol.for("react.element"),Ax=Symbol.for("react.portal"),Rx=Symbol.for("react.fragment"),Px=Symbol.for("react.strict_mode"),Nx=Symbol.for("react.profiler"),Ix=Symbol.for("react.provider"),Dx=Symbol.for("react.context"),Lx=Symbol.for("react.forward_ref"),Ux=Symbol.for("react.suspense"),kx=Symbol.for("react.memo"),Fx=Symbol.for("react.lazy"),wf=Symbol.iterator;function Ox(t){return t===null||typeof t!="object"?null:(t=wf&&t[wf]||t["@@iterator"],typeof t=="function"?t:null)}var cg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ug=Object.assign,dg={};function Oa(t,e,n){this.props=t,this.context=e,this.refs=dg,this.updater=n||cg}Oa.prototype.isReactComponent={};Oa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Oa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function hg(){}hg.prototype=Oa.prototype;function lh(t,e,n){this.props=t,this.context=e,this.refs=dg,this.updater=n||cg}var ch=lh.prototype=new hg;ch.constructor=lh;ug(ch,Oa.prototype);ch.isPureReactComponent=!0;var Mf=Array.isArray,fg=Object.prototype.hasOwnProperty,uh={current:null},pg={key:!0,ref:!0,__self:!0,__source:!0};function mg(t,e,n){var i,r={},a=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(a=""+e.key),e)fg.call(e,i)&&!pg.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:js,type:t,key:a,ref:s,props:r,_owner:uh.current}}function zx(t,e){return{$$typeof:js,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function dh(t){return typeof t=="object"&&t!==null&&t.$$typeof===js}function Bx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ef=/\/+/g;function Sc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Bx(""+t.key):e.toString(36)}function Xo(t,e,n,i,r){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case js:case Ax:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+Sc(s,0):i,Mf(r)?(n="",t!=null&&(n=t.replace(Ef,"$&/")+"/"),Xo(r,e,n,"",function(c){return c})):r!=null&&(dh(r)&&(r=zx(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Ef,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",Mf(t))for(var o=0;o<t.length;o++){a=t[o];var l=i+Sc(a,o);s+=Xo(a,e,n,l,r)}else if(l=Ox(t),typeof l=="function")for(t=l.call(t),o=0;!(a=t.next()).done;)a=a.value,l=i+Sc(a,o++),s+=Xo(a,e,n,l,r);else if(a==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function no(t,e,n){if(t==null)return t;var i=[],r=0;return Xo(t,i,"","",function(a){return e.call(n,a,r++)}),i}function Vx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qt={current:null},qo={transition:null},jx={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:qo,ReactCurrentOwner:uh};function gg(){throw Error("act(...) is not supported in production builds of React.")}Be.Children={map:no,forEach:function(t,e,n){no(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return no(t,function(){e++}),e},toArray:function(t){return no(t,function(e){return e})||[]},only:function(t){if(!dh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Be.Component=Oa;Be.Fragment=Rx;Be.Profiler=Nx;Be.PureComponent=lh;Be.StrictMode=Px;Be.Suspense=Ux;Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jx;Be.act=gg;Be.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=ug({},t.props),r=t.key,a=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,s=uh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)fg.call(e,l)&&!pg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:js,type:t.type,key:r,ref:a,props:i,_owner:s}};Be.createContext=function(t){return t={$$typeof:Dx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ix,_context:t},t.Consumer=t};Be.createElement=mg;Be.createFactory=function(t){var e=mg.bind(null,t);return e.type=t,e};Be.createRef=function(){return{current:null}};Be.forwardRef=function(t){return{$$typeof:Lx,render:t}};Be.isValidElement=dh;Be.lazy=function(t){return{$$typeof:Fx,_payload:{_status:-1,_result:t},_init:Vx}};Be.memo=function(t,e){return{$$typeof:kx,type:t,compare:e===void 0?null:e}};Be.startTransition=function(t){var e=qo.transition;qo.transition={};try{t()}finally{qo.transition=e}};Be.unstable_act=gg;Be.useCallback=function(t,e){return qt.current.useCallback(t,e)};Be.useContext=function(t){return qt.current.useContext(t)};Be.useDebugValue=function(){};Be.useDeferredValue=function(t){return qt.current.useDeferredValue(t)};Be.useEffect=function(t,e){return qt.current.useEffect(t,e)};Be.useId=function(){return qt.current.useId()};Be.useImperativeHandle=function(t,e,n){return qt.current.useImperativeHandle(t,e,n)};Be.useInsertionEffect=function(t,e){return qt.current.useInsertionEffect(t,e)};Be.useLayoutEffect=function(t,e){return qt.current.useLayoutEffect(t,e)};Be.useMemo=function(t,e){return qt.current.useMemo(t,e)};Be.useReducer=function(t,e,n){return qt.current.useReducer(t,e,n)};Be.useRef=function(t){return qt.current.useRef(t)};Be.useState=function(t){return qt.current.useState(t)};Be.useSyncExternalStore=function(t,e,n){return qt.current.useSyncExternalStore(t,e,n)};Be.useTransition=function(){return qt.current.useTransition()};Be.version="18.3.1";lg.exports=Be;var L=lg.exports;const yg=Tx(L),Hx=Cx({__proto__:null,default:yg},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gx=L,Wx=Symbol.for("react.element"),Xx=Symbol.for("react.fragment"),qx=Object.prototype.hasOwnProperty,$x=Gx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Yx={key:!0,ref:!0,__self:!0,__source:!0};function vg(t,e,n){var i,r={},a=null,s=null;n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)qx.call(e,i)&&!Yx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Wx,type:t,key:a,ref:s,props:r,_owner:$x.current}}Gl.Fragment=Xx;Gl.jsx=vg;Gl.jsxs=vg;og.exports=Gl;var u=og.exports,Au={},xg={exports:{}},pn={},_g={exports:{}},Sg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,K){var Q=D.length;D.push(K);e:for(;0<Q;){var ae=Q-1>>>1,xe=D[ae];if(0<r(xe,K))D[ae]=K,D[Q]=xe,Q=ae;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var K=D[0],Q=D.pop();if(Q!==K){D[0]=Q;e:for(var ae=0,xe=D.length,ue=xe>>>1;ae<ue;){var V=2*(ae+1)-1,Y=D[V],ne=V+1,se=D[ne];if(0>r(Y,Q))ne<xe&&0>r(se,Y)?(D[ae]=se,D[ne]=Q,ae=ne):(D[ae]=Y,D[V]=Q,ae=V);else if(ne<xe&&0>r(se,Q))D[ae]=se,D[ne]=Q,ae=ne;else break e}}return K}function r(D,K){var Q=D.sortIndex-K.sortIndex;return Q!==0?Q:D.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,o=s.now();t.unstable_now=function(){return s.now()-o}}var l=[],c=[],d=1,f=null,p=3,g=!1,y=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(D){for(var K=n(c);K!==null;){if(K.callback===null)i(c);else if(K.startTime<=D)i(c),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(c)}}function M(D){if(_=!1,x(D),!y)if(n(l)!==null)y=!0,W(P);else{var K=n(c);K!==null&&$(M,K.startTime-D)}}function P(D,K){y=!1,_&&(_=!1,h(E),E=-1),g=!0;var Q=p;try{for(x(K),f=n(l);f!==null&&(!(f.expirationTime>K)||D&&!R());){var ae=f.callback;if(typeof ae=="function"){f.callback=null,p=f.priorityLevel;var xe=ae(f.expirationTime<=K);K=t.unstable_now(),typeof xe=="function"?f.callback=xe:f===n(l)&&i(l),x(K)}else i(l);f=n(l)}if(f!==null)var ue=!0;else{var V=n(c);V!==null&&$(M,V.startTime-K),ue=!1}return ue}finally{f=null,p=Q,g=!1}}var C=!1,w=null,E=-1,S=5,b=-1;function R(){return!(t.unstable_now()-b<S)}function z(){if(w!==null){var D=t.unstable_now();b=D;var K=!0;try{K=w(!0,D)}finally{K?F():(C=!1,w=null)}}else C=!1}var F;if(typeof v=="function")F=function(){v(z)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,G=B.port2;B.port1.onmessage=z,F=function(){G.postMessage(null)}}else F=function(){m(z,0)};function W(D){w=D,C||(C=!0,F())}function $(D,K){E=m(function(){D(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,W(P))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(p){case 1:case 2:case 3:var K=3;break;default:K=p}var Q=p;p=K;try{return D()}finally{p=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,K){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Q=p;p=D;try{return K()}finally{p=Q}},t.unstable_scheduleCallback=function(D,K,Q){var ae=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ae+Q:ae):Q=ae,D){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=Q+xe,D={id:d++,callback:K,priorityLevel:D,startTime:Q,expirationTime:xe,sortIndex:-1},Q>ae?(D.sortIndex=Q,e(c,D),n(l)===null&&D===n(c)&&(_?(h(E),E=-1):_=!0,$(M,Q-ae))):(D.sortIndex=xe,e(l,D),y||g||(y=!0,W(P))),D},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(D){var K=p;return function(){var Q=p;p=K;try{return D.apply(this,arguments)}finally{p=Q}}}})(Sg);_g.exports=Sg;var Kx=_g.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zx=L,fn=Kx;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bg=new Set,bs={};function Nr(t,e){Ea(t,e),Ea(t+"Capture",e)}function Ea(t,e){for(bs[t]=e,t=0;t<e.length;t++)bg.add(e[t])}var fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ru=Object.prototype.hasOwnProperty,Qx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cf={},Tf={};function Jx(t){return Ru.call(Tf,t)?!0:Ru.call(Cf,t)?!1:Qx.test(t)?Tf[t]=!0:(Cf[t]=!0,!1)}function e0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function t0(t,e,n,i){if(e===null||typeof e>"u"||e0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $t(t,e,n,i,r,a,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=s}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new $t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new $t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new $t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new $t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new $t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new $t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new $t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new $t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new $t(t,5,!1,t.toLowerCase(),null,!1,!1)});var hh=/[\-:]([a-z])/g;function fh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(hh,fh);Ft[e]=new $t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(hh,fh);Ft[e]=new $t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(hh,fh);Ft[e]=new $t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new $t(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new $t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new $t(t,1,!1,t.toLowerCase(),null,!0,!0)});function ph(t,e,n,i){var r=Ft.hasOwnProperty(e)?Ft[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(t0(e,n,r,i)&&(n=null),i||r===null?Jx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var _i=Zx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,io=Symbol.for("react.element"),na=Symbol.for("react.portal"),ia=Symbol.for("react.fragment"),mh=Symbol.for("react.strict_mode"),Pu=Symbol.for("react.profiler"),wg=Symbol.for("react.provider"),Mg=Symbol.for("react.context"),gh=Symbol.for("react.forward_ref"),Nu=Symbol.for("react.suspense"),Iu=Symbol.for("react.suspense_list"),yh=Symbol.for("react.memo"),Ri=Symbol.for("react.lazy"),Eg=Symbol.for("react.offscreen"),Af=Symbol.iterator;function Ga(t){return t===null||typeof t!="object"?null:(t=Af&&t[Af]||t["@@iterator"],typeof t=="function"?t:null)}var ut=Object.assign,bc;function as(t){if(bc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);bc=e&&e[1]||""}return`
`+bc+t}var wc=!1;function Mc(t,e){if(!t||wc)return"";wc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),a=i.stack.split(`
`),s=r.length-1,o=a.length-1;1<=s&&0<=o&&r[s]!==a[o];)o--;for(;1<=s&&0<=o;s--,o--)if(r[s]!==a[o]){if(s!==1||o!==1)do if(s--,o--,0>o||r[s]!==a[o]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=o);break}}}finally{wc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?as(t):""}function n0(t){switch(t.tag){case 5:return as(t.type);case 16:return as("Lazy");case 13:return as("Suspense");case 19:return as("SuspenseList");case 0:case 2:case 15:return t=Mc(t.type,!1),t;case 11:return t=Mc(t.type.render,!1),t;case 1:return t=Mc(t.type,!0),t;default:return""}}function Du(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ia:return"Fragment";case na:return"Portal";case Pu:return"Profiler";case mh:return"StrictMode";case Nu:return"Suspense";case Iu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Mg:return(t.displayName||"Context")+".Consumer";case wg:return(t._context.displayName||"Context")+".Provider";case gh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case yh:return e=t.displayName||null,e!==null?e:Du(t.type)||"Memo";case Ri:e=t._payload,t=t._init;try{return Du(t(e))}catch{}}return null}function i0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Du(e);case 8:return e===mh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function $i(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Cg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function r0(t){var e=Cg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,a=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,a.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ro(t){t._valueTracker||(t._valueTracker=r0(t))}function Tg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Cg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ul(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Lu(t,e){var n=e.checked;return ut({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Rf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=$i(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ag(t,e){e=e.checked,e!=null&&ph(t,"checked",e,!1)}function Uu(t,e){Ag(t,e);var n=$i(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ku(t,e.type,n):e.hasOwnProperty("defaultValue")&&ku(t,e.type,$i(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Pf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ku(t,e,n){(e!=="number"||ul(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ss=Array.isArray;function ga(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+$i(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Fu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return ut({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Nf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(ss(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:$i(n)}}function Rg(t,e){var n=$i(e.value),i=$i(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function If(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Pg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ou(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Pg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ao,Ng=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ao=ao||document.createElement("div"),ao.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ao.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ws(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var us={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},a0=["Webkit","ms","Moz","O"];Object.keys(us).forEach(function(t){a0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),us[e]=us[t]})});function Ig(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||us.hasOwnProperty(t)&&us[t]?(""+e).trim():e+"px"}function Dg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Ig(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var s0=ut({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zu(t,e){if(e){if(s0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function Bu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vu=null;function vh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ju=null,ya=null,va=null;function Df(t){if(t=Ws(t)){if(typeof ju!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=Yl(e),ju(t.stateNode,t.type,e))}}function Lg(t){ya?va?va.push(t):va=[t]:ya=t}function Ug(){if(ya){var t=ya,e=va;if(va=ya=null,Df(t),e)for(t=0;t<e.length;t++)Df(e[t])}}function kg(t,e){return t(e)}function Fg(){}var Ec=!1;function Og(t,e,n){if(Ec)return t(e,n);Ec=!0;try{return kg(t,e,n)}finally{Ec=!1,(ya!==null||va!==null)&&(Fg(),Ug())}}function Ms(t,e){var n=t.stateNode;if(n===null)return null;var i=Yl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var Hu=!1;if(fi)try{var Wa={};Object.defineProperty(Wa,"passive",{get:function(){Hu=!0}}),window.addEventListener("test",Wa,Wa),window.removeEventListener("test",Wa,Wa)}catch{Hu=!1}function o0(t,e,n,i,r,a,s,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ds=!1,dl=null,hl=!1,Gu=null,l0={onError:function(t){ds=!0,dl=t}};function c0(t,e,n,i,r,a,s,o,l){ds=!1,dl=null,o0.apply(l0,arguments)}function u0(t,e,n,i,r,a,s,o,l){if(c0.apply(this,arguments),ds){if(ds){var c=dl;ds=!1,dl=null}else throw Error(ie(198));hl||(hl=!0,Gu=c)}}function Ir(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function zg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Lf(t){if(Ir(t)!==t)throw Error(ie(188))}function d0(t){var e=t.alternate;if(!e){if(e=Ir(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var a=r.alternate;if(a===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===n)return Lf(r),t;if(a===i)return Lf(r),e;a=a.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=a;else{for(var s=!1,o=r.child;o;){if(o===n){s=!0,n=r,i=a;break}if(o===i){s=!0,i=r,n=a;break}o=o.sibling}if(!s){for(o=a.child;o;){if(o===n){s=!0,n=a,i=r;break}if(o===i){s=!0,i=a,n=r;break}o=o.sibling}if(!s)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function Bg(t){return t=d0(t),t!==null?Vg(t):null}function Vg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Vg(t);if(e!==null)return e;t=t.sibling}return null}var jg=fn.unstable_scheduleCallback,Uf=fn.unstable_cancelCallback,h0=fn.unstable_shouldYield,f0=fn.unstable_requestPaint,gt=fn.unstable_now,p0=fn.unstable_getCurrentPriorityLevel,xh=fn.unstable_ImmediatePriority,Hg=fn.unstable_UserBlockingPriority,fl=fn.unstable_NormalPriority,m0=fn.unstable_LowPriority,Gg=fn.unstable_IdlePriority,Wl=null,$n=null;function g0(t){if($n&&typeof $n.onCommitFiberRoot=="function")try{$n.onCommitFiberRoot(Wl,t,void 0,(t.current.flags&128)===128)}catch{}}var Fn=Math.clz32?Math.clz32:x0,y0=Math.log,v0=Math.LN2;function x0(t){return t>>>=0,t===0?32:31-(y0(t)/v0|0)|0}var so=64,oo=4194304;function os(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,a=t.pingedLanes,s=n&268435455;if(s!==0){var o=s&~r;o!==0?i=os(o):(a&=s,a!==0&&(i=os(a)))}else s=n&~r,s!==0?i=os(s):a!==0&&(i=os(a));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,a=e&-e,r>=a||r===16&&(a&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Fn(e),r=1<<n,i|=t[n],e&=~r;return i}function _0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function S0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,a=t.pendingLanes;0<a;){var s=31-Fn(a),o=1<<s,l=r[s];l===-1?(!(o&n)||o&i)&&(r[s]=_0(o,e)):l<=e&&(t.expiredLanes|=o),a&=~o}}function Wu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Wg(){var t=so;return so<<=1,!(so&4194240)&&(so=64),t}function Cc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Hs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Fn(e),t[e]=n}function b0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Fn(n),a=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~a}}function _h(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Fn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function Xg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var qg,Sh,$g,Yg,Kg,Xu=!1,lo=[],Fi=null,Oi=null,zi=null,Es=new Map,Cs=new Map,Ni=[],w0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kf(t,e){switch(t){case"focusin":case"focusout":Fi=null;break;case"dragenter":case"dragleave":Oi=null;break;case"mouseover":case"mouseout":zi=null;break;case"pointerover":case"pointerout":Es.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cs.delete(e.pointerId)}}function Xa(t,e,n,i,r,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[r]},e!==null&&(e=Ws(e),e!==null&&Sh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function M0(t,e,n,i,r){switch(e){case"focusin":return Fi=Xa(Fi,t,e,n,i,r),!0;case"dragenter":return Oi=Xa(Oi,t,e,n,i,r),!0;case"mouseover":return zi=Xa(zi,t,e,n,i,r),!0;case"pointerover":var a=r.pointerId;return Es.set(a,Xa(Es.get(a)||null,t,e,n,i,r)),!0;case"gotpointercapture":return a=r.pointerId,Cs.set(a,Xa(Cs.get(a)||null,t,e,n,i,r)),!0}return!1}function Zg(t){var e=gr(t.target);if(e!==null){var n=Ir(e);if(n!==null){if(e=n.tag,e===13){if(e=zg(n),e!==null){t.blockedOn=e,Kg(t.priority,function(){$g(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $o(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=qu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Vu=i,n.target.dispatchEvent(i),Vu=null}else return e=Ws(n),e!==null&&Sh(e),t.blockedOn=n,!1;e.shift()}return!0}function Ff(t,e,n){$o(t)&&n.delete(e)}function E0(){Xu=!1,Fi!==null&&$o(Fi)&&(Fi=null),Oi!==null&&$o(Oi)&&(Oi=null),zi!==null&&$o(zi)&&(zi=null),Es.forEach(Ff),Cs.forEach(Ff)}function qa(t,e){t.blockedOn===e&&(t.blockedOn=null,Xu||(Xu=!0,fn.unstable_scheduleCallback(fn.unstable_NormalPriority,E0)))}function Ts(t){function e(r){return qa(r,t)}if(0<lo.length){qa(lo[0],t);for(var n=1;n<lo.length;n++){var i=lo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Fi!==null&&qa(Fi,t),Oi!==null&&qa(Oi,t),zi!==null&&qa(zi,t),Es.forEach(e),Cs.forEach(e),n=0;n<Ni.length;n++)i=Ni[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ni.length&&(n=Ni[0],n.blockedOn===null);)Zg(n),n.blockedOn===null&&Ni.shift()}var xa=_i.ReactCurrentBatchConfig,ml=!0;function C0(t,e,n,i){var r=et,a=xa.transition;xa.transition=null;try{et=1,bh(t,e,n,i)}finally{et=r,xa.transition=a}}function T0(t,e,n,i){var r=et,a=xa.transition;xa.transition=null;try{et=4,bh(t,e,n,i)}finally{et=r,xa.transition=a}}function bh(t,e,n,i){if(ml){var r=qu(t,e,n,i);if(r===null)kc(t,e,i,gl,n),kf(t,i);else if(M0(r,t,e,n,i))i.stopPropagation();else if(kf(t,i),e&4&&-1<w0.indexOf(t)){for(;r!==null;){var a=Ws(r);if(a!==null&&qg(a),a=qu(t,e,n,i),a===null&&kc(t,e,i,gl,n),a===r)break;r=a}r!==null&&i.stopPropagation()}else kc(t,e,i,null,n)}}var gl=null;function qu(t,e,n,i){if(gl=null,t=vh(i),t=gr(t),t!==null)if(e=Ir(t),e===null)t=null;else if(n=e.tag,n===13){if(t=zg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return gl=t,null}function Qg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(p0()){case xh:return 1;case Hg:return 4;case fl:case m0:return 16;case Gg:return 536870912;default:return 16}default:return 16}}var Li=null,wh=null,Yo=null;function Jg(){if(Yo)return Yo;var t,e=wh,n=e.length,i,r="value"in Li?Li.value:Li.textContent,a=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[a-i];i++);return Yo=r.slice(t,1<i?1-i:void 0)}function Ko(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function co(){return!0}function Of(){return!1}function mn(t){function e(n,i,r,a,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?co:Of,this.isPropagationStopped=Of,this}return ut(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=co)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=co)},persist:function(){},isPersistent:co}),e}var za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mh=mn(za),Gs=ut({},za,{view:0,detail:0}),A0=mn(Gs),Tc,Ac,$a,Xl=ut({},Gs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$a&&($a&&t.type==="mousemove"?(Tc=t.screenX-$a.screenX,Ac=t.screenY-$a.screenY):Ac=Tc=0,$a=t),Tc)},movementY:function(t){return"movementY"in t?t.movementY:Ac}}),zf=mn(Xl),R0=ut({},Xl,{dataTransfer:0}),P0=mn(R0),N0=ut({},Gs,{relatedTarget:0}),Rc=mn(N0),I0=ut({},za,{animationName:0,elapsedTime:0,pseudoElement:0}),D0=mn(I0),L0=ut({},za,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),U0=mn(L0),k0=ut({},za,{data:0}),Bf=mn(k0),F0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},O0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},z0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function B0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=z0[t])?!!e[t]:!1}function Eh(){return B0}var V0=ut({},Gs,{key:function(t){if(t.key){var e=F0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ko(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?O0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eh,charCode:function(t){return t.type==="keypress"?Ko(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ko(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),j0=mn(V0),H0=ut({},Xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vf=mn(H0),G0=ut({},Gs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eh}),W0=mn(G0),X0=ut({},za,{propertyName:0,elapsedTime:0,pseudoElement:0}),q0=mn(X0),$0=ut({},Xl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Y0=mn($0),K0=[9,13,27,32],Ch=fi&&"CompositionEvent"in window,hs=null;fi&&"documentMode"in document&&(hs=document.documentMode);var Z0=fi&&"TextEvent"in window&&!hs,ey=fi&&(!Ch||hs&&8<hs&&11>=hs),jf=" ",Hf=!1;function ty(t,e){switch(t){case"keyup":return K0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ny(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ra=!1;function Q0(t,e){switch(t){case"compositionend":return ny(e);case"keypress":return e.which!==32?null:(Hf=!0,jf);case"textInput":return t=e.data,t===jf&&Hf?null:t;default:return null}}function J0(t,e){if(ra)return t==="compositionend"||!Ch&&ty(t,e)?(t=Jg(),Yo=wh=Li=null,ra=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ey&&e.locale!=="ko"?null:e.data;default:return null}}var e_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!e_[t.type]:e==="textarea"}function iy(t,e,n,i){Lg(i),e=yl(e,"onChange"),0<e.length&&(n=new Mh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var fs=null,As=null;function t_(t){py(t,0)}function ql(t){var e=oa(t);if(Tg(e))return t}function n_(t,e){if(t==="change")return e}var ry=!1;if(fi){var Pc;if(fi){var Nc="oninput"in document;if(!Nc){var Wf=document.createElement("div");Wf.setAttribute("oninput","return;"),Nc=typeof Wf.oninput=="function"}Pc=Nc}else Pc=!1;ry=Pc&&(!document.documentMode||9<document.documentMode)}function Xf(){fs&&(fs.detachEvent("onpropertychange",ay),As=fs=null)}function ay(t){if(t.propertyName==="value"&&ql(As)){var e=[];iy(e,As,t,vh(t)),Og(t_,e)}}function i_(t,e,n){t==="focusin"?(Xf(),fs=e,As=n,fs.attachEvent("onpropertychange",ay)):t==="focusout"&&Xf()}function r_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ql(As)}function a_(t,e){if(t==="click")return ql(e)}function s_(t,e){if(t==="input"||t==="change")return ql(e)}function o_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zn=typeof Object.is=="function"?Object.is:o_;function Rs(t,e){if(zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ru.call(e,r)||!zn(t[r],e[r]))return!1}return!0}function qf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $f(t,e){var n=qf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qf(n)}}function sy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?sy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function oy(){for(var t=window,e=ul();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ul(t.document)}return e}function Th(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function l_(t){var e=oy(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&sy(n.ownerDocument.documentElement,n)){if(i!==null&&Th(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,a=Math.min(i.start,r);i=i.end===void 0?a:Math.min(i.end,r),!t.extend&&a>i&&(r=i,i=a,a=r),r=$f(n,a);var s=$f(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),a>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var c_=fi&&"documentMode"in document&&11>=document.documentMode,aa=null,$u=null,ps=null,Yu=!1;function Yf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yu||aa==null||aa!==ul(i)||(i=aa,"selectionStart"in i&&Th(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ps&&Rs(ps,i)||(ps=i,i=yl($u,"onSelect"),0<i.length&&(e=new Mh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=aa)))}function uo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var sa={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},Ic={},ly={};fi&&(ly=document.createElement("div").style,"AnimationEvent"in window||(delete sa.animationend.animation,delete sa.animationiteration.animation,delete sa.animationstart.animation),"TransitionEvent"in window||delete sa.transitionend.transition);function $l(t){if(Ic[t])return Ic[t];if(!sa[t])return t;var e=sa[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ly)return Ic[t]=e[n];return t}var cy=$l("animationend"),uy=$l("animationiteration"),dy=$l("animationstart"),hy=$l("transitionend"),fy=new Map,Kf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zi(t,e){fy.set(t,e),Nr(e,[t])}for(var Dc=0;Dc<Kf.length;Dc++){var Lc=Kf[Dc],u_=Lc.toLowerCase(),d_=Lc[0].toUpperCase()+Lc.slice(1);Zi(u_,"on"+d_)}Zi(cy,"onAnimationEnd");Zi(uy,"onAnimationIteration");Zi(dy,"onAnimationStart");Zi("dblclick","onDoubleClick");Zi("focusin","onFocus");Zi("focusout","onBlur");Zi(hy,"onTransitionEnd");Ea("onMouseEnter",["mouseout","mouseover"]);Ea("onMouseLeave",["mouseout","mouseover"]);Ea("onPointerEnter",["pointerout","pointerover"]);Ea("onPointerLeave",["pointerout","pointerover"]);Nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ls="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),h_=new Set("cancel close invalid load scroll toggle".split(" ").concat(ls));function Zf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,u0(i,e,void 0,t),t.currentTarget=null}function py(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var a=void 0;if(e)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&r.isPropagationStopped())break e;Zf(r,o,c),a=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&r.isPropagationStopped())break e;Zf(r,o,c),a=l}}}if(hl)throw t=Gu,hl=!1,Gu=null,t}function it(t,e){var n=e[ed];n===void 0&&(n=e[ed]=new Set);var i=t+"__bubble";n.has(i)||(my(e,t,2,!1),n.add(i))}function Uc(t,e,n){var i=0;e&&(i|=4),my(n,t,i,e)}var ho="_reactListening"+Math.random().toString(36).slice(2);function Ps(t){if(!t[ho]){t[ho]=!0,bg.forEach(function(n){n!=="selectionchange"&&(h_.has(n)||Uc(n,!1,t),Uc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ho]||(e[ho]=!0,Uc("selectionchange",!1,e))}}function my(t,e,n,i){switch(Qg(e)){case 1:var r=C0;break;case 4:r=T0;break;default:r=bh}n=r.bind(null,e,n,t),r=void 0,!Hu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function kc(t,e,n,i,r){var a=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;o!==null;){if(s=gr(o),s===null)return;if(l=s.tag,l===5||l===6){i=a=s;continue e}o=o.parentNode}}i=i.return}Og(function(){var c=a,d=vh(n),f=[];e:{var p=fy.get(t);if(p!==void 0){var g=Mh,y=t;switch(t){case"keypress":if(Ko(n)===0)break e;case"keydown":case"keyup":g=j0;break;case"focusin":y="focus",g=Rc;break;case"focusout":y="blur",g=Rc;break;case"beforeblur":case"afterblur":g=Rc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=zf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=P0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=W0;break;case cy:case uy:case dy:g=D0;break;case hy:g=q0;break;case"scroll":g=A0;break;case"wheel":g=Y0;break;case"copy":case"cut":case"paste":g=U0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Vf}var _=(e&4)!==0,m=!_&&t==="scroll",h=_?p!==null?p+"Capture":null:p;_=[];for(var v=c,x;v!==null;){x=v;var M=x.stateNode;if(x.tag===5&&M!==null&&(x=M,h!==null&&(M=Ms(v,h),M!=null&&_.push(Ns(v,M,x)))),m)break;v=v.return}0<_.length&&(p=new g(p,y,null,n,d),f.push({event:p,listeners:_}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",p&&n!==Vu&&(y=n.relatedTarget||n.fromElement)&&(gr(y)||y[pi]))break e;if((g||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=c,y=y?gr(y):null,y!==null&&(m=Ir(y),y!==m||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=c),g!==y)){if(_=zf,M="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(_=Vf,M="onPointerLeave",h="onPointerEnter",v="pointer"),m=g==null?p:oa(g),x=y==null?p:oa(y),p=new _(M,v+"leave",g,n,d),p.target=m,p.relatedTarget=x,M=null,gr(d)===c&&(_=new _(h,v+"enter",y,n,d),_.target=x,_.relatedTarget=m,M=_),m=M,g&&y)t:{for(_=g,h=y,v=0,x=_;x;x=Fr(x))v++;for(x=0,M=h;M;M=Fr(M))x++;for(;0<v-x;)_=Fr(_),v--;for(;0<x-v;)h=Fr(h),x--;for(;v--;){if(_===h||h!==null&&_===h.alternate)break t;_=Fr(_),h=Fr(h)}_=null}else _=null;g!==null&&Qf(f,p,g,_,!1),y!==null&&m!==null&&Qf(f,m,y,_,!0)}}e:{if(p=c?oa(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var P=n_;else if(Gf(p))if(ry)P=s_;else{P=r_;var C=i_}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(P=a_);if(P&&(P=P(t,c))){iy(f,P,n,d);break e}C&&C(t,p,c),t==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&ku(p,"number",p.value)}switch(C=c?oa(c):window,t){case"focusin":(Gf(C)||C.contentEditable==="true")&&(aa=C,$u=c,ps=null);break;case"focusout":ps=$u=aa=null;break;case"mousedown":Yu=!0;break;case"contextmenu":case"mouseup":case"dragend":Yu=!1,Yf(f,n,d);break;case"selectionchange":if(c_)break;case"keydown":case"keyup":Yf(f,n,d)}var w;if(Ch)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else ra?ty(t,n)&&(E="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(ey&&n.locale!=="ko"&&(ra||E!=="onCompositionStart"?E==="onCompositionEnd"&&ra&&(w=Jg()):(Li=d,wh="value"in Li?Li.value:Li.textContent,ra=!0)),C=yl(c,E),0<C.length&&(E=new Bf(E,t,null,n,d),f.push({event:E,listeners:C}),w?E.data=w:(w=ny(n),w!==null&&(E.data=w)))),(w=Z0?Q0(t,n):J0(t,n))&&(c=yl(c,"onBeforeInput"),0<c.length&&(d=new Bf("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=w))}py(f,e)})}function Ns(t,e,n){return{instance:t,listener:e,currentTarget:n}}function yl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,a=r.stateNode;r.tag===5&&a!==null&&(r=a,a=Ms(t,n),a!=null&&i.unshift(Ns(t,a,r)),a=Ms(t,e),a!=null&&i.push(Ns(t,a,r))),t=t.return}return i}function Fr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Qf(t,e,n,i,r){for(var a=e._reactName,s=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Ms(n,a),l!=null&&s.unshift(Ns(n,l,o))):r||(l=Ms(n,a),l!=null&&s.push(Ns(n,l,o)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var f_=/\r\n?/g,p_=/\u0000|\uFFFD/g;function Jf(t){return(typeof t=="string"?t:""+t).replace(f_,`
`).replace(p_,"")}function fo(t,e,n){if(e=Jf(e),Jf(t)!==e&&n)throw Error(ie(425))}function vl(){}var Ku=null,Zu=null;function Qu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ju=typeof setTimeout=="function"?setTimeout:void 0,m_=typeof clearTimeout=="function"?clearTimeout:void 0,ep=typeof Promise=="function"?Promise:void 0,g_=typeof queueMicrotask=="function"?queueMicrotask:typeof ep<"u"?function(t){return ep.resolve(null).then(t).catch(y_)}:Ju;function y_(t){setTimeout(function(){throw t})}function Fc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ts(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ts(e)}function Bi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function tp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ba=Math.random().toString(36).slice(2),Wn="__reactFiber$"+Ba,Is="__reactProps$"+Ba,pi="__reactContainer$"+Ba,ed="__reactEvents$"+Ba,v_="__reactListeners$"+Ba,x_="__reactHandles$"+Ba;function gr(t){var e=t[Wn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[pi]||n[Wn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=tp(t);t!==null;){if(n=t[Wn])return n;t=tp(t)}return e}t=n,n=t.parentNode}return null}function Ws(t){return t=t[Wn]||t[pi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function oa(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function Yl(t){return t[Is]||null}var td=[],la=-1;function Qi(t){return{current:t}}function at(t){0>la||(t.current=td[la],td[la]=null,la--)}function nt(t,e){la++,td[la]=t.current,t.current=e}var Yi={},Ht=Qi(Yi),Jt=Qi(!1),Mr=Yi;function Ca(t,e){var n=t.type.contextTypes;if(!n)return Yi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},a;for(a in n)r[a]=e[a];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function en(t){return t=t.childContextTypes,t!=null}function xl(){at(Jt),at(Ht)}function np(t,e,n){if(Ht.current!==Yi)throw Error(ie(168));nt(Ht,e),nt(Jt,n)}function gy(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,i0(t)||"Unknown",r));return ut({},n,i)}function _l(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Yi,Mr=Ht.current,nt(Ht,t),nt(Jt,Jt.current),!0}function ip(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=gy(t,e,Mr),i.__reactInternalMemoizedMergedChildContext=t,at(Jt),at(Ht),nt(Ht,t)):at(Jt),nt(Jt,n)}var ai=null,Kl=!1,Oc=!1;function yy(t){ai===null?ai=[t]:ai.push(t)}function __(t){Kl=!0,yy(t)}function Ji(){if(!Oc&&ai!==null){Oc=!0;var t=0,e=et;try{var n=ai;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ai=null,Kl=!1}catch(r){throw ai!==null&&(ai=ai.slice(t+1)),jg(xh,Ji),r}finally{et=e,Oc=!1}}return null}var ca=[],ua=0,Sl=null,bl=0,vn=[],xn=0,Er=null,oi=1,li="";function cr(t,e){ca[ua++]=bl,ca[ua++]=Sl,Sl=t,bl=e}function vy(t,e,n){vn[xn++]=oi,vn[xn++]=li,vn[xn++]=Er,Er=t;var i=oi;t=li;var r=32-Fn(i)-1;i&=~(1<<r),n+=1;var a=32-Fn(e)+r;if(30<a){var s=r-r%5;a=(i&(1<<s)-1).toString(32),i>>=s,r-=s,oi=1<<32-Fn(e)+r|n<<r|i,li=a+t}else oi=1<<a|n<<r|i,li=t}function Ah(t){t.return!==null&&(cr(t,1),vy(t,1,0))}function Rh(t){for(;t===Sl;)Sl=ca[--ua],ca[ua]=null,bl=ca[--ua],ca[ua]=null;for(;t===Er;)Er=vn[--xn],vn[xn]=null,li=vn[--xn],vn[xn]=null,oi=vn[--xn],vn[xn]=null}var dn=null,un=null,st=!1,In=null;function xy(t,e){var n=_n(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function rp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,dn=t,un=Bi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,dn=t,un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Er!==null?{id:oi,overflow:li}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=_n(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,dn=t,un=null,!0):!1;default:return!1}}function nd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function id(t){if(st){var e=un;if(e){var n=e;if(!rp(t,e)){if(nd(t))throw Error(ie(418));e=Bi(n.nextSibling);var i=dn;e&&rp(t,e)?xy(i,n):(t.flags=t.flags&-4097|2,st=!1,dn=t)}}else{if(nd(t))throw Error(ie(418));t.flags=t.flags&-4097|2,st=!1,dn=t}}}function ap(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;dn=t}function po(t){if(t!==dn)return!1;if(!st)return ap(t),st=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Qu(t.type,t.memoizedProps)),e&&(e=un)){if(nd(t))throw _y(),Error(ie(418));for(;e;)xy(t,e),e=Bi(e.nextSibling)}if(ap(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){un=Bi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}un=null}}else un=dn?Bi(t.stateNode.nextSibling):null;return!0}function _y(){for(var t=un;t;)t=Bi(t.nextSibling)}function Ta(){un=dn=null,st=!1}function Ph(t){In===null?In=[t]:In.push(t)}var S_=_i.ReactCurrentBatchConfig;function Ya(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,a=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(s){var o=r.refs;s===null?delete o[a]:o[a]=s},e._stringRef=a,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function mo(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function sp(t){var e=t._init;return e(t._payload)}function Sy(t){function e(h,v){if(t){var x=h.deletions;x===null?(h.deletions=[v],h.flags|=16):x.push(v)}}function n(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=Gi(h,v),h.index=0,h.sibling=null,h}function a(h,v,x){return h.index=x,t?(x=h.alternate,x!==null?(x=x.index,x<v?(h.flags|=2,v):x):(h.flags|=2,v)):(h.flags|=1048576,v)}function s(h){return t&&h.alternate===null&&(h.flags|=2),h}function o(h,v,x,M){return v===null||v.tag!==6?(v=Wc(x,h.mode,M),v.return=h,v):(v=r(v,x),v.return=h,v)}function l(h,v,x,M){var P=x.type;return P===ia?d(h,v,x.props.children,M,x.key):v!==null&&(v.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ri&&sp(P)===v.type)?(M=r(v,x.props),M.ref=Ya(h,v,x),M.return=h,M):(M=il(x.type,x.key,x.props,null,h.mode,M),M.ref=Ya(h,v,x),M.return=h,M)}function c(h,v,x,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Xc(x,h.mode,M),v.return=h,v):(v=r(v,x.children||[]),v.return=h,v)}function d(h,v,x,M,P){return v===null||v.tag!==7?(v=br(x,h.mode,M,P),v.return=h,v):(v=r(v,x),v.return=h,v)}function f(h,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Wc(""+v,h.mode,x),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case io:return x=il(v.type,v.key,v.props,null,h.mode,x),x.ref=Ya(h,null,v),x.return=h,x;case na:return v=Xc(v,h.mode,x),v.return=h,v;case Ri:var M=v._init;return f(h,M(v._payload),x)}if(ss(v)||Ga(v))return v=br(v,h.mode,x,null),v.return=h,v;mo(h,v)}return null}function p(h,v,x,M){var P=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return P!==null?null:o(h,v,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case io:return x.key===P?l(h,v,x,M):null;case na:return x.key===P?c(h,v,x,M):null;case Ri:return P=x._init,p(h,v,P(x._payload),M)}if(ss(x)||Ga(x))return P!==null?null:d(h,v,x,M,null);mo(h,x)}return null}function g(h,v,x,M,P){if(typeof M=="string"&&M!==""||typeof M=="number")return h=h.get(x)||null,o(v,h,""+M,P);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case io:return h=h.get(M.key===null?x:M.key)||null,l(v,h,M,P);case na:return h=h.get(M.key===null?x:M.key)||null,c(v,h,M,P);case Ri:var C=M._init;return g(h,v,x,C(M._payload),P)}if(ss(M)||Ga(M))return h=h.get(x)||null,d(v,h,M,P,null);mo(v,M)}return null}function y(h,v,x,M){for(var P=null,C=null,w=v,E=v=0,S=null;w!==null&&E<x.length;E++){w.index>E?(S=w,w=null):S=w.sibling;var b=p(h,w,x[E],M);if(b===null){w===null&&(w=S);break}t&&w&&b.alternate===null&&e(h,w),v=a(b,v,E),C===null?P=b:C.sibling=b,C=b,w=S}if(E===x.length)return n(h,w),st&&cr(h,E),P;if(w===null){for(;E<x.length;E++)w=f(h,x[E],M),w!==null&&(v=a(w,v,E),C===null?P=w:C.sibling=w,C=w);return st&&cr(h,E),P}for(w=i(h,w);E<x.length;E++)S=g(w,h,E,x[E],M),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?E:S.key),v=a(S,v,E),C===null?P=S:C.sibling=S,C=S);return t&&w.forEach(function(R){return e(h,R)}),st&&cr(h,E),P}function _(h,v,x,M){var P=Ga(x);if(typeof P!="function")throw Error(ie(150));if(x=P.call(x),x==null)throw Error(ie(151));for(var C=P=null,w=v,E=v=0,S=null,b=x.next();w!==null&&!b.done;E++,b=x.next()){w.index>E?(S=w,w=null):S=w.sibling;var R=p(h,w,b.value,M);if(R===null){w===null&&(w=S);break}t&&w&&R.alternate===null&&e(h,w),v=a(R,v,E),C===null?P=R:C.sibling=R,C=R,w=S}if(b.done)return n(h,w),st&&cr(h,E),P;if(w===null){for(;!b.done;E++,b=x.next())b=f(h,b.value,M),b!==null&&(v=a(b,v,E),C===null?P=b:C.sibling=b,C=b);return st&&cr(h,E),P}for(w=i(h,w);!b.done;E++,b=x.next())b=g(w,h,E,b.value,M),b!==null&&(t&&b.alternate!==null&&w.delete(b.key===null?E:b.key),v=a(b,v,E),C===null?P=b:C.sibling=b,C=b);return t&&w.forEach(function(z){return e(h,z)}),st&&cr(h,E),P}function m(h,v,x,M){if(typeof x=="object"&&x!==null&&x.type===ia&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case io:e:{for(var P=x.key,C=v;C!==null;){if(C.key===P){if(P=x.type,P===ia){if(C.tag===7){n(h,C.sibling),v=r(C,x.props.children),v.return=h,h=v;break e}}else if(C.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ri&&sp(P)===C.type){n(h,C.sibling),v=r(C,x.props),v.ref=Ya(h,C,x),v.return=h,h=v;break e}n(h,C);break}else e(h,C);C=C.sibling}x.type===ia?(v=br(x.props.children,h.mode,M,x.key),v.return=h,h=v):(M=il(x.type,x.key,x.props,null,h.mode,M),M.ref=Ya(h,v,x),M.return=h,h=M)}return s(h);case na:e:{for(C=x.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(h,v.sibling),v=r(v,x.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else e(h,v);v=v.sibling}v=Xc(x,h.mode,M),v.return=h,h=v}return s(h);case Ri:return C=x._init,m(h,v,C(x._payload),M)}if(ss(x))return y(h,v,x,M);if(Ga(x))return _(h,v,x,M);mo(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(h,v.sibling),v=r(v,x),v.return=h,h=v):(n(h,v),v=Wc(x,h.mode,M),v.return=h,h=v),s(h)):n(h,v)}return m}var Aa=Sy(!0),by=Sy(!1),wl=Qi(null),Ml=null,da=null,Nh=null;function Ih(){Nh=da=Ml=null}function Dh(t){var e=wl.current;at(wl),t._currentValue=e}function rd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function _a(t,e){Ml=t,Nh=da=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Qt=!0),t.firstContext=null)}function wn(t){var e=t._currentValue;if(Nh!==t)if(t={context:t,memoizedValue:e,next:null},da===null){if(Ml===null)throw Error(ie(308));da=t,Ml.dependencies={lanes:0,firstContext:t}}else da=da.next=t;return e}var yr=null;function Lh(t){yr===null?yr=[t]:yr.push(t)}function wy(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Lh(e)):(n.next=r.next,r.next=n),e.interleaved=n,mi(t,i)}function mi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Pi=!1;function Uh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function My(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Vi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,We&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,mi(t,n)}return r=i.interleaved,r===null?(e.next=e,Lh(i)):(e.next=r.next,r.next=e),i.interleaved=e,mi(t,n)}function Zo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,_h(t,n)}}function op(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?r=a=s:a=a.next=s,n=n.next}while(n!==null);a===null?r=a=e:a=a.next=e}else r=a=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function El(t,e,n,i){var r=t.updateQueue;Pi=!1;var a=r.firstBaseUpdate,s=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,s===null?a=c:s.next=c,s=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==s&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(a!==null){var f=r.baseState;s=0,d=c=l=null,o=a;do{var p=o.lane,g=o.eventTime;if((i&p)===p){d!==null&&(d=d.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var y=t,_=o;switch(p=e,g=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){f=y.call(g,f,p);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,p=typeof y=="function"?y.call(g,f,p):y,p==null)break e;f=ut({},f,p);break e;case 2:Pi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[o]:p.push(o))}else g={eventTime:g,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=g,l=f):d=d.next=g,s|=p;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;p=o,o=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else a===null&&(r.shared.lanes=0);Tr|=s,t.lanes=s,t.memoizedState=f}}function lp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Xs={},Yn=Qi(Xs),Ds=Qi(Xs),Ls=Qi(Xs);function vr(t){if(t===Xs)throw Error(ie(174));return t}function kh(t,e){switch(nt(Ls,e),nt(Ds,t),nt(Yn,Xs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ou(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ou(e,t)}at(Yn),nt(Yn,e)}function Ra(){at(Yn),at(Ds),at(Ls)}function Ey(t){vr(Ls.current);var e=vr(Yn.current),n=Ou(e,t.type);e!==n&&(nt(Ds,t),nt(Yn,n))}function Fh(t){Ds.current===t&&(at(Yn),at(Ds))}var lt=Qi(0);function Cl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var zc=[];function Oh(){for(var t=0;t<zc.length;t++)zc[t]._workInProgressVersionPrimary=null;zc.length=0}var Qo=_i.ReactCurrentDispatcher,Bc=_i.ReactCurrentBatchConfig,Cr=0,ct=null,wt=null,Rt=null,Tl=!1,ms=!1,Us=0,b_=0;function Ot(){throw Error(ie(321))}function zh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!zn(t[n],e[n]))return!1;return!0}function Bh(t,e,n,i,r,a){if(Cr=a,ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Qo.current=t===null||t.memoizedState===null?C_:T_,t=n(i,r),ms){a=0;do{if(ms=!1,Us=0,25<=a)throw Error(ie(301));a+=1,Rt=wt=null,e.updateQueue=null,Qo.current=A_,t=n(i,r)}while(ms)}if(Qo.current=Al,e=wt!==null&&wt.next!==null,Cr=0,Rt=wt=ct=null,Tl=!1,e)throw Error(ie(300));return t}function Vh(){var t=Us!==0;return Us=0,t}function jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?ct.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function Mn(){if(wt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=Rt===null?ct.memoizedState:Rt.next;if(e!==null)Rt=e,wt=t;else{if(t===null)throw Error(ie(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Rt===null?ct.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function ks(t,e){return typeof e=="function"?e(t):e}function Vc(t){var e=Mn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=wt,r=i.baseQueue,a=n.pending;if(a!==null){if(r!==null){var s=r.next;r.next=a.next,a.next=s}i.baseQueue=r=a,n.pending=null}if(r!==null){a=r.next,i=i.baseState;var o=s=null,l=null,c=a;do{var d=c.lane;if((Cr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,s=i):l=l.next=f,ct.lanes|=d,Tr|=d}c=c.next}while(c!==null&&c!==a);l===null?s=i:l.next=o,zn(i,e.memoizedState)||(Qt=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do a=r.lane,ct.lanes|=a,Tr|=a,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function jc(t){var e=Mn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,a=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do a=t(a,s.action),s=s.next;while(s!==r);zn(a,e.memoizedState)||(Qt=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),n.lastRenderedState=a}return[a,i]}function Cy(){}function Ty(t,e){var n=ct,i=Mn(),r=e(),a=!zn(i.memoizedState,r);if(a&&(i.memoizedState=r,Qt=!0),i=i.queue,jh(Py.bind(null,n,i,t),[t]),i.getSnapshot!==e||a||Rt!==null&&Rt.memoizedState.tag&1){if(n.flags|=2048,Fs(9,Ry.bind(null,n,i,r,e),void 0,null),It===null)throw Error(ie(349));Cr&30||Ay(n,e,r)}return r}function Ay(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ry(t,e,n,i){e.value=n,e.getSnapshot=i,Ny(e)&&Iy(t)}function Py(t,e,n){return n(function(){Ny(e)&&Iy(t)})}function Ny(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zn(t,n)}catch{return!0}}function Iy(t){var e=mi(t,1);e!==null&&On(e,t,1,-1)}function cp(t){var e=jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ks,lastRenderedState:t},e.queue=t,t=t.dispatch=E_.bind(null,ct,t),[e.memoizedState,t]}function Fs(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Dy(){return Mn().memoizedState}function Jo(t,e,n,i){var r=jn();ct.flags|=t,r.memoizedState=Fs(1|e,n,void 0,i===void 0?null:i)}function Zl(t,e,n,i){var r=Mn();i=i===void 0?null:i;var a=void 0;if(wt!==null){var s=wt.memoizedState;if(a=s.destroy,i!==null&&zh(i,s.deps)){r.memoizedState=Fs(e,n,a,i);return}}ct.flags|=t,r.memoizedState=Fs(1|e,n,a,i)}function up(t,e){return Jo(8390656,8,t,e)}function jh(t,e){return Zl(2048,8,t,e)}function Ly(t,e){return Zl(4,2,t,e)}function Uy(t,e){return Zl(4,4,t,e)}function ky(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Fy(t,e,n){return n=n!=null?n.concat([t]):null,Zl(4,4,ky.bind(null,e,t),n)}function Hh(){}function Oy(t,e){var n=Mn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&zh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function zy(t,e){var n=Mn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&zh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function By(t,e,n){return Cr&21?(zn(n,e)||(n=Wg(),ct.lanes|=n,Tr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Qt=!0),t.memoizedState=n)}function w_(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=Bc.transition;Bc.transition={};try{t(!1),e()}finally{et=n,Bc.transition=i}}function Vy(){return Mn().memoizedState}function M_(t,e,n){var i=Hi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},jy(t))Hy(e,n);else if(n=wy(t,e,n,i),n!==null){var r=Xt();On(n,t,i,r),Gy(n,e,i)}}function E_(t,e,n){var i=Hi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(jy(t))Hy(e,r);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var s=e.lastRenderedState,o=a(s,n);if(r.hasEagerState=!0,r.eagerState=o,zn(o,s)){var l=e.interleaved;l===null?(r.next=r,Lh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=wy(t,e,r,i),n!==null&&(r=Xt(),On(n,t,i,r),Gy(n,e,i))}}function jy(t){var e=t.alternate;return t===ct||e!==null&&e===ct}function Hy(t,e){ms=Tl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Gy(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,_h(t,n)}}var Al={readContext:wn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},C_={readContext:wn,useCallback:function(t,e){return jn().memoizedState=[t,e===void 0?null:e],t},useContext:wn,useEffect:up,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Jo(4194308,4,ky.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Jo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Jo(4,2,t,e)},useMemo:function(t,e){var n=jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=jn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=M_.bind(null,ct,t),[i.memoizedState,t]},useRef:function(t){var e=jn();return t={current:t},e.memoizedState=t},useState:cp,useDebugValue:Hh,useDeferredValue:function(t){return jn().memoizedState=t},useTransition:function(){var t=cp(!1),e=t[0];return t=w_.bind(null,t[1]),jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ct,r=jn();if(st){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),It===null)throw Error(ie(349));Cr&30||Ay(i,e,n)}r.memoizedState=n;var a={value:n,getSnapshot:e};return r.queue=a,up(Py.bind(null,i,a,t),[t]),i.flags|=2048,Fs(9,Ry.bind(null,i,a,n,e),void 0,null),n},useId:function(){var t=jn(),e=It.identifierPrefix;if(st){var n=li,i=oi;n=(i&~(1<<32-Fn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Us++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=b_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},T_={readContext:wn,useCallback:Oy,useContext:wn,useEffect:jh,useImperativeHandle:Fy,useInsertionEffect:Ly,useLayoutEffect:Uy,useMemo:zy,useReducer:Vc,useRef:Dy,useState:function(){return Vc(ks)},useDebugValue:Hh,useDeferredValue:function(t){var e=Mn();return By(e,wt.memoizedState,t)},useTransition:function(){var t=Vc(ks)[0],e=Mn().memoizedState;return[t,e]},useMutableSource:Cy,useSyncExternalStore:Ty,useId:Vy,unstable_isNewReconciler:!1},A_={readContext:wn,useCallback:Oy,useContext:wn,useEffect:jh,useImperativeHandle:Fy,useInsertionEffect:Ly,useLayoutEffect:Uy,useMemo:zy,useReducer:jc,useRef:Dy,useState:function(){return jc(ks)},useDebugValue:Hh,useDeferredValue:function(t){var e=Mn();return wt===null?e.memoizedState=t:By(e,wt.memoizedState,t)},useTransition:function(){var t=jc(ks)[0],e=Mn().memoizedState;return[t,e]},useMutableSource:Cy,useSyncExternalStore:Ty,useId:Vy,unstable_isNewReconciler:!1};function Pn(t,e){if(t&&t.defaultProps){e=ut({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ad(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ut({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ql={isMounted:function(t){return(t=t._reactInternals)?Ir(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=Hi(t),a=hi(i,r);a.payload=e,n!=null&&(a.callback=n),e=Vi(t,a,r),e!==null&&(On(e,t,r,i),Zo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=Hi(t),a=hi(i,r);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=Vi(t,a,r),e!==null&&(On(e,t,r,i),Zo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xt(),i=Hi(t),r=hi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Vi(t,r,i),e!==null&&(On(e,t,i,n),Zo(e,t,i))}};function dp(t,e,n,i,r,a,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,a,s):e.prototype&&e.prototype.isPureReactComponent?!Rs(n,i)||!Rs(r,a):!0}function Wy(t,e,n){var i=!1,r=Yi,a=e.contextType;return typeof a=="object"&&a!==null?a=wn(a):(r=en(e)?Mr:Ht.current,i=e.contextTypes,a=(i=i!=null)?Ca(t,r):Yi),e=new e(n,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ql,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=a),e}function hp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ql.enqueueReplaceState(e,e.state,null)}function sd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Uh(t);var a=e.contextType;typeof a=="object"&&a!==null?r.context=wn(a):(a=en(e)?Mr:Ht.current,r.context=Ca(t,a)),r.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(ad(t,e,a,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ql.enqueueReplaceState(r,r.state,null),El(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Pa(t,e){try{var n="",i=e;do n+=n0(i),i=i.return;while(i);var r=n}catch(a){r=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:r,digest:null}}function Hc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function od(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var R_=typeof WeakMap=="function"?WeakMap:Map;function Xy(t,e,n){n=hi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Pl||(Pl=!0,yd=i),od(t,e)},n}function qy(t,e,n){n=hi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){od(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){od(t,e),typeof i!="function"&&(ji===null?ji=new Set([this]):ji.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function fp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new R_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=H_.bind(null,t,e,n),e.then(t,t))}function pp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function mp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hi(-1,1),e.tag=2,Vi(n,e,1))),n.lanes|=1),t)}var P_=_i.ReactCurrentOwner,Qt=!1;function Wt(t,e,n,i){e.child=t===null?by(e,null,n,i):Aa(e,t.child,n,i)}function gp(t,e,n,i,r){n=n.render;var a=e.ref;return _a(e,r),i=Bh(t,e,n,i,a,r),n=Vh(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gi(t,e,r)):(st&&n&&Ah(e),e.flags|=1,Wt(t,e,i,r),e.child)}function yp(t,e,n,i,r){if(t===null){var a=n.type;return typeof a=="function"&&!Zh(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=a,$y(t,e,a,i,r)):(t=il(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!(t.lanes&r)){var s=a.memoizedProps;if(n=n.compare,n=n!==null?n:Rs,n(s,i)&&t.ref===e.ref)return gi(t,e,r)}return e.flags|=1,t=Gi(a,i),t.ref=e.ref,t.return=e,e.child=t}function $y(t,e,n,i,r){if(t!==null){var a=t.memoizedProps;if(Rs(a,i)&&t.ref===e.ref)if(Qt=!1,e.pendingProps=i=a,(t.lanes&r)!==0)t.flags&131072&&(Qt=!0);else return e.lanes=t.lanes,gi(t,e,r)}return ld(t,e,n,i,r)}function Yy(t,e,n){var i=e.pendingProps,r=i.children,a=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(fa,cn),cn|=n;else{if(!(n&1073741824))return t=a!==null?a.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,nt(fa,cn),cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:n,nt(fa,cn),cn|=i}else a!==null?(i=a.baseLanes|n,e.memoizedState=null):i=n,nt(fa,cn),cn|=i;return Wt(t,e,r,n),e.child}function Ky(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ld(t,e,n,i,r){var a=en(n)?Mr:Ht.current;return a=Ca(e,a),_a(e,r),n=Bh(t,e,n,i,a,r),i=Vh(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gi(t,e,r)):(st&&i&&Ah(e),e.flags|=1,Wt(t,e,n,r),e.child)}function vp(t,e,n,i,r){if(en(n)){var a=!0;_l(e)}else a=!1;if(_a(e,r),e.stateNode===null)el(t,e),Wy(e,n,i),sd(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,o=e.memoizedProps;s.props=o;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=wn(c):(c=en(n)?Mr:Ht.current,c=Ca(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==i||l!==c)&&hp(e,s,i,c),Pi=!1;var p=e.memoizedState;s.state=p,El(e,i,s,r),l=e.memoizedState,o!==i||p!==l||Jt.current||Pi?(typeof d=="function"&&(ad(e,n,d,i),l=e.memoizedState),(o=Pi||dp(e,n,o,i,p,l,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=c,i=o):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,My(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Pn(e.type,o),s.props=c,f=e.pendingProps,p=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=wn(l):(l=en(n)?Mr:Ht.current,l=Ca(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==f||p!==l)&&hp(e,s,i,l),Pi=!1,p=e.memoizedState,s.state=p,El(e,i,s,r);var y=e.memoizedState;o!==f||p!==y||Jt.current||Pi?(typeof g=="function"&&(ad(e,n,g,i),y=e.memoizedState),(c=Pi||dp(e,n,c,i,p,y,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,y,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),s.props=i,s.state=y,s.context=l,i=c):(typeof s.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return cd(t,e,n,i,a,r)}function cd(t,e,n,i,r,a){Ky(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&ip(e,n,!1),gi(t,e,a);i=e.stateNode,P_.current=e;var o=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=Aa(e,t.child,null,a),e.child=Aa(e,null,o,a)):Wt(t,e,o,a),e.memoizedState=i.state,r&&ip(e,n,!0),e.child}function Zy(t){var e=t.stateNode;e.pendingContext?np(t,e.pendingContext,e.pendingContext!==e.context):e.context&&np(t,e.context,!1),kh(t,e.containerInfo)}function xp(t,e,n,i,r){return Ta(),Ph(r),e.flags|=256,Wt(t,e,n,i),e.child}var ud={dehydrated:null,treeContext:null,retryLane:0};function dd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Qy(t,e,n){var i=e.pendingProps,r=lt.current,a=!1,s=(e.flags&128)!==0,o;if((o=s)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),nt(lt,r&1),t===null)return id(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,a?(i=e.mode,a=e.child,s={mode:"hidden",children:s},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=tc(s,i,0,null),t=br(t,i,n,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=dd(n),e.memoizedState=ud,t):Gh(e,s));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return N_(t,e,s,i,o,r,n);if(a){a=i.fallback,s=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Gi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?a=Gi(o,a):(a=br(a,s,n,null),a.flags|=2),a.return=e,i.return=e,i.sibling=a,e.child=i,i=a,a=e.child,s=t.child.memoizedState,s=s===null?dd(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=t.childLanes&~n,e.memoizedState=ud,i}return a=t.child,t=a.sibling,i=Gi(a,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Gh(t,e){return e=tc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function go(t,e,n,i){return i!==null&&Ph(i),Aa(e,t.child,null,n),t=Gh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function N_(t,e,n,i,r,a,s){if(n)return e.flags&256?(e.flags&=-257,i=Hc(Error(ie(422))),go(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(a=i.fallback,r=e.mode,i=tc({mode:"visible",children:i.children},r,0,null),a=br(a,r,s,null),a.flags|=2,i.return=e,a.return=e,i.sibling=a,e.child=i,e.mode&1&&Aa(e,t.child,null,s),e.child.memoizedState=dd(s),e.memoizedState=ud,a);if(!(e.mode&1))return go(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,a=Error(ie(419)),i=Hc(a,i,void 0),go(t,e,s,i)}if(o=(s&t.childLanes)!==0,Qt||o){if(i=It,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==a.retryLane&&(a.retryLane=r,mi(t,r),On(i,t,r,-1))}return Kh(),i=Hc(Error(ie(421))),go(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=G_.bind(null,t),r._reactRetry=e,null):(t=a.treeContext,un=Bi(r.nextSibling),dn=e,st=!0,In=null,t!==null&&(vn[xn++]=oi,vn[xn++]=li,vn[xn++]=Er,oi=t.id,li=t.overflow,Er=e),e=Gh(e,i.children),e.flags|=4096,e)}function _p(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),rd(t.return,e,n)}function Gc(t,e,n,i,r){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=r)}function Jy(t,e,n){var i=e.pendingProps,r=i.revealOrder,a=i.tail;if(Wt(t,e,i.children,n),i=lt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_p(t,n,e);else if(t.tag===19)_p(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(nt(lt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Cl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Gc(e,!1,r,n,a);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Cl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Gc(e,!0,n,null,a);break;case"together":Gc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function el(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Tr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=Gi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Gi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function I_(t,e,n){switch(e.tag){case 3:Zy(e),Ta();break;case 5:Ey(e);break;case 1:en(e.type)&&_l(e);break;case 4:kh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;nt(wl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(nt(lt,lt.current&1),e.flags|=128,null):n&e.child.childLanes?Qy(t,e,n):(nt(lt,lt.current&1),t=gi(t,e,n),t!==null?t.sibling:null);nt(lt,lt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Jy(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),nt(lt,lt.current),i)break;return null;case 22:case 23:return e.lanes=0,Yy(t,e,n)}return gi(t,e,n)}var ev,hd,tv,nv;ev=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hd=function(){};tv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,vr(Yn.current);var a=null;switch(n){case"input":r=Lu(t,r),i=Lu(t,i),a=[];break;case"select":r=ut({},r,{value:void 0}),i=ut({},i,{value:void 0}),a=[];break;case"textarea":r=Fu(t,r),i=Fu(t,i),a=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=vl)}zu(n,i);var s;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(s in o)o.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(bs.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(s in o)!o.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&o[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(a||(a=[]),a.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(a=a||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(bs.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&it("scroll",t),a||o===l||(a=[])):(a=a||[]).push(c,l))}n&&(a=a||[]).push("style",n);var c=a;(e.updateQueue=c)&&(e.flags|=4)}};nv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ka(t,e){if(!st)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function D_(t,e,n){var i=e.pendingProps;switch(Rh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return en(e.type)&&xl(),zt(e),null;case 3:return i=e.stateNode,Ra(),at(Jt),at(Ht),Oh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(po(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,In!==null&&(_d(In),In=null))),hd(t,e),zt(e),null;case 5:Fh(e);var r=vr(Ls.current);if(n=e.type,t!==null&&e.stateNode!=null)tv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return zt(e),null}if(t=vr(Yn.current),po(e)){i=e.stateNode,n=e.type;var a=e.memoizedProps;switch(i[Wn]=e,i[Is]=a,t=(e.mode&1)!==0,n){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(r=0;r<ls.length;r++)it(ls[r],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":Rf(i,a),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},it("invalid",i);break;case"textarea":Nf(i,a),it("invalid",i)}zu(n,a),r=null;for(var s in a)if(a.hasOwnProperty(s)){var o=a[s];s==="children"?typeof o=="string"?i.textContent!==o&&(a.suppressHydrationWarning!==!0&&fo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&fo(i.textContent,o,t),r=["children",""+o]):bs.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&it("scroll",i)}switch(n){case"input":ro(i),Pf(i,a,!0);break;case"textarea":ro(i),If(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=vl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Pg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[Wn]=e,t[Is]=i,ev(t,e,!1,!1),e.stateNode=t;e:{switch(s=Bu(n,i),n){case"dialog":it("cancel",t),it("close",t),r=i;break;case"iframe":case"object":case"embed":it("load",t),r=i;break;case"video":case"audio":for(r=0;r<ls.length;r++)it(ls[r],t);r=i;break;case"source":it("error",t),r=i;break;case"img":case"image":case"link":it("error",t),it("load",t),r=i;break;case"details":it("toggle",t),r=i;break;case"input":Rf(t,i),r=Lu(t,i),it("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ut({},i,{value:void 0}),it("invalid",t);break;case"textarea":Nf(t,i),r=Fu(t,i),it("invalid",t);break;default:r=i}zu(n,r),o=r;for(a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="style"?Dg(t,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ng(t,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ws(t,l):typeof l=="number"&&ws(t,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(bs.hasOwnProperty(a)?l!=null&&a==="onScroll"&&it("scroll",t):l!=null&&ph(t,a,l,s))}switch(n){case"input":ro(t),Pf(t,i,!1);break;case"textarea":ro(t),If(t);break;case"option":i.value!=null&&t.setAttribute("value",""+$i(i.value));break;case"select":t.multiple=!!i.multiple,a=i.value,a!=null?ga(t,!!i.multiple,a,!1):i.defaultValue!=null&&ga(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=vl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zt(e),null;case 6:if(t&&e.stateNode!=null)nv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=vr(Ls.current),vr(Yn.current),po(e)){if(i=e.stateNode,n=e.memoizedProps,i[Wn]=e,(a=i.nodeValue!==n)&&(t=dn,t!==null))switch(t.tag){case 3:fo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fo(i.nodeValue,n,(t.mode&1)!==0)}a&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Wn]=e,e.stateNode=i}return zt(e),null;case 13:if(at(lt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(st&&un!==null&&e.mode&1&&!(e.flags&128))_y(),Ta(),e.flags|=98560,a=!1;else if(a=po(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(ie(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(ie(317));a[Wn]=e}else Ta(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zt(e),a=!1}else In!==null&&(_d(In),In=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||lt.current&1?Mt===0&&(Mt=3):Kh())),e.updateQueue!==null&&(e.flags|=4),zt(e),null);case 4:return Ra(),hd(t,e),t===null&&Ps(e.stateNode.containerInfo),zt(e),null;case 10:return Dh(e.type._context),zt(e),null;case 17:return en(e.type)&&xl(),zt(e),null;case 19:if(at(lt),a=e.memoizedState,a===null)return zt(e),null;if(i=(e.flags&128)!==0,s=a.rendering,s===null)if(i)Ka(a,!1);else{if(Mt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Cl(t),s!==null){for(e.flags|=128,Ka(a,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)a=n,t=i,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,t=s.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return nt(lt,lt.current&1|2),e.child}t=t.sibling}a.tail!==null&&gt()>Na&&(e.flags|=128,i=!0,Ka(a,!1),e.lanes=4194304)}else{if(!i)if(t=Cl(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ka(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!st)return zt(e),null}else 2*gt()-a.renderingStartTime>Na&&n!==1073741824&&(e.flags|=128,i=!0,Ka(a,!1),e.lanes=4194304);a.isBackwards?(s.sibling=e.child,e.child=s):(n=a.last,n!==null?n.sibling=s:e.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=gt(),e.sibling=null,n=lt.current,nt(lt,i?n&1|2:n&1),e):(zt(e),null);case 22:case 23:return Yh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?cn&1073741824&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function L_(t,e){switch(Rh(e),e.tag){case 1:return en(e.type)&&xl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ra(),at(Jt),at(Ht),Oh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Fh(e),null;case 13:if(at(lt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));Ta()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return at(lt),null;case 4:return Ra(),null;case 10:return Dh(e.type._context),null;case 22:case 23:return Yh(),null;case 24:return null;default:return null}}var yo=!1,jt=!1,U_=typeof WeakSet=="function"?WeakSet:Set,me=null;function ha(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){pt(t,e,i)}else n.current=null}function fd(t,e,n){try{n()}catch(i){pt(t,e,i)}}var Sp=!1;function k_(t,e){if(Ku=ml,t=oy(),Th(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var s=0,o=-1,l=-1,c=0,d=0,f=t,p=null;t:for(;;){for(var g;f!==n||r!==0&&f.nodeType!==3||(o=s+r),f!==a||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===t)break t;if(p===n&&++c===r&&(o=s),p===a&&++d===i&&(l=s),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zu={focusedElem:t,selectionRange:n},ml=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,m=y.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?_:Pn(e.type,_),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(M){pt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return y=Sp,Sp=!1,y}function gs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var a=r.destroy;r.destroy=void 0,a!==void 0&&fd(e,n,a)}r=r.next}while(r!==i)}}function Jl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function pd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function iv(t){var e=t.alternate;e!==null&&(t.alternate=null,iv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Wn],delete e[Is],delete e[ed],delete e[v_],delete e[x_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function rv(t){return t.tag===5||t.tag===3||t.tag===4}function bp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||rv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function md(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=vl));else if(i!==4&&(t=t.child,t!==null))for(md(t,e,n),t=t.sibling;t!==null;)md(t,e,n),t=t.sibling}function gd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(gd(t,e,n),t=t.sibling;t!==null;)gd(t,e,n),t=t.sibling}var Ut=null,Nn=!1;function bi(t,e,n){for(n=n.child;n!==null;)av(t,e,n),n=n.sibling}function av(t,e,n){if($n&&typeof $n.onCommitFiberUnmount=="function")try{$n.onCommitFiberUnmount(Wl,n)}catch{}switch(n.tag){case 5:jt||ha(n,e);case 6:var i=Ut,r=Nn;Ut=null,bi(t,e,n),Ut=i,Nn=r,Ut!==null&&(Nn?(t=Ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ut.removeChild(n.stateNode));break;case 18:Ut!==null&&(Nn?(t=Ut,n=n.stateNode,t.nodeType===8?Fc(t.parentNode,n):t.nodeType===1&&Fc(t,n),Ts(t)):Fc(Ut,n.stateNode));break;case 4:i=Ut,r=Nn,Ut=n.stateNode.containerInfo,Nn=!0,bi(t,e,n),Ut=i,Nn=r;break;case 0:case 11:case 14:case 15:if(!jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var a=r,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&fd(n,e,s),r=r.next}while(r!==i)}bi(t,e,n);break;case 1:if(!jt&&(ha(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){pt(n,e,o)}bi(t,e,n);break;case 21:bi(t,e,n);break;case 22:n.mode&1?(jt=(i=jt)||n.memoizedState!==null,bi(t,e,n),jt=i):bi(t,e,n);break;default:bi(t,e,n)}}function wp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new U_),e.forEach(function(i){var r=W_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Cn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var a=t,s=e,o=s;e:for(;o!==null;){switch(o.tag){case 5:Ut=o.stateNode,Nn=!1;break e;case 3:Ut=o.stateNode.containerInfo,Nn=!0;break e;case 4:Ut=o.stateNode.containerInfo,Nn=!0;break e}o=o.return}if(Ut===null)throw Error(ie(160));av(a,s,r),Ut=null,Nn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){pt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)sv(e,t),e=e.sibling}function sv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Cn(e,t),Vn(t),i&4){try{gs(3,t,t.return),Jl(3,t)}catch(_){pt(t,t.return,_)}try{gs(5,t,t.return)}catch(_){pt(t,t.return,_)}}break;case 1:Cn(e,t),Vn(t),i&512&&n!==null&&ha(n,n.return);break;case 5:if(Cn(e,t),Vn(t),i&512&&n!==null&&ha(n,n.return),t.flags&32){var r=t.stateNode;try{ws(r,"")}catch(_){pt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var a=t.memoizedProps,s=n!==null?n.memoizedProps:a,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&Ag(r,a),Bu(o,s);var c=Bu(o,a);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d==="style"?Dg(r,f):d==="dangerouslySetInnerHTML"?Ng(r,f):d==="children"?ws(r,f):ph(r,d,f,c)}switch(o){case"input":Uu(r,a);break;case"textarea":Rg(r,a);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!a.multiple;var g=a.value;g!=null?ga(r,!!a.multiple,g,!1):p!==!!a.multiple&&(a.defaultValue!=null?ga(r,!!a.multiple,a.defaultValue,!0):ga(r,!!a.multiple,a.multiple?[]:"",!1))}r[Is]=a}catch(_){pt(t,t.return,_)}}break;case 6:if(Cn(e,t),Vn(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,a=t.memoizedProps;try{r.nodeValue=a}catch(_){pt(t,t.return,_)}}break;case 3:if(Cn(e,t),Vn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ts(e.containerInfo)}catch(_){pt(t,t.return,_)}break;case 4:Cn(e,t),Vn(t);break;case 13:Cn(e,t),Vn(t),r=t.child,r.flags&8192&&(a=r.memoizedState!==null,r.stateNode.isHidden=a,!a||r.alternate!==null&&r.alternate.memoizedState!==null||(qh=gt())),i&4&&wp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(jt=(c=jt)||d,Cn(e,t),jt=c):Cn(e,t),Vn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(me=t,d=t.child;d!==null;){for(f=me=d;me!==null;){switch(p=me,g=p.child,p.tag){case 0:case 11:case 14:case 15:gs(4,p,p.return);break;case 1:ha(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){pt(i,n,_)}}break;case 5:ha(p,p.return);break;case 22:if(p.memoizedState!==null){Ep(f);continue}}g!==null?(g.return=p,me=g):Ep(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Ig("display",s))}catch(_){pt(t,t.return,_)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(_){pt(t,t.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Cn(e,t),Vn(t),i&4&&wp(t);break;case 21:break;default:Cn(e,t),Vn(t)}}function Vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(rv(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ws(r,""),i.flags&=-33);var a=bp(t);gd(t,a,r);break;case 3:case 4:var s=i.stateNode.containerInfo,o=bp(t);md(t,o,s);break;default:throw Error(ie(161))}}catch(l){pt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function F_(t,e,n){me=t,ov(t)}function ov(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,a=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||yo;if(!s){var o=r.alternate,l=o!==null&&o.memoizedState!==null||jt;o=yo;var c=jt;if(yo=s,(jt=l)&&!c)for(me=r;me!==null;)s=me,l=s.child,s.tag===22&&s.memoizedState!==null?Cp(r):l!==null?(l.return=s,me=l):Cp(r);for(;a!==null;)me=a,ov(a),a=a.sibling;me=r,yo=o,jt=c}Mp(t)}else r.subtreeFlags&8772&&a!==null?(a.return=r,me=a):Mp(t)}}function Mp(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||Jl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Pn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&lp(e,a,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}lp(e,s,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Ts(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}jt||e.flags&512&&pd(e)}catch(p){pt(e,e.return,p)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function Ep(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function Cp(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Jl(4,e)}catch(l){pt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){pt(e,r,l)}}var a=e.return;try{pd(e)}catch(l){pt(e,a,l)}break;case 5:var s=e.return;try{pd(e)}catch(l){pt(e,s,l)}}}catch(l){pt(e,e.return,l)}if(e===t){me=null;break}var o=e.sibling;if(o!==null){o.return=e.return,me=o;break}me=e.return}}var O_=Math.ceil,Rl=_i.ReactCurrentDispatcher,Wh=_i.ReactCurrentOwner,bn=_i.ReactCurrentBatchConfig,We=0,It=null,St=null,kt=0,cn=0,fa=Qi(0),Mt=0,Os=null,Tr=0,ec=0,Xh=0,ys=null,Kt=null,qh=0,Na=1/0,ri=null,Pl=!1,yd=null,ji=null,vo=!1,Ui=null,Nl=0,vs=0,vd=null,tl=-1,nl=0;function Xt(){return We&6?gt():tl!==-1?tl:tl=gt()}function Hi(t){return t.mode&1?We&2&&kt!==0?kt&-kt:S_.transition!==null?(nl===0&&(nl=Wg()),nl):(t=et,t!==0||(t=window.event,t=t===void 0?16:Qg(t.type)),t):1}function On(t,e,n,i){if(50<vs)throw vs=0,vd=null,Error(ie(185));Hs(t,n,i),(!(We&2)||t!==It)&&(t===It&&(!(We&2)&&(ec|=n),Mt===4&&Ii(t,kt)),tn(t,i),n===1&&We===0&&!(e.mode&1)&&(Na=gt()+500,Kl&&Ji()))}function tn(t,e){var n=t.callbackNode;S0(t,e);var i=pl(t,t===It?kt:0);if(i===0)n!==null&&Uf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Uf(n),e===1)t.tag===0?__(Tp.bind(null,t)):yy(Tp.bind(null,t)),g_(function(){!(We&6)&&Ji()}),n=null;else{switch(Xg(i)){case 1:n=xh;break;case 4:n=Hg;break;case 16:n=fl;break;case 536870912:n=Gg;break;default:n=fl}n=mv(n,lv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function lv(t,e){if(tl=-1,nl=0,We&6)throw Error(ie(327));var n=t.callbackNode;if(Sa()&&t.callbackNode!==n)return null;var i=pl(t,t===It?kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Il(t,i);else{e=i;var r=We;We|=2;var a=uv();(It!==t||kt!==e)&&(ri=null,Na=gt()+500,Sr(t,e));do try{V_();break}catch(o){cv(t,o)}while(!0);Ih(),Rl.current=a,We=r,St!==null?e=0:(It=null,kt=0,e=Mt)}if(e!==0){if(e===2&&(r=Wu(t),r!==0&&(i=r,e=xd(t,r))),e===1)throw n=Os,Sr(t,0),Ii(t,i),tn(t,gt()),n;if(e===6)Ii(t,i);else{if(r=t.current.alternate,!(i&30)&&!z_(r)&&(e=Il(t,i),e===2&&(a=Wu(t),a!==0&&(i=a,e=xd(t,a))),e===1))throw n=Os,Sr(t,0),Ii(t,i),tn(t,gt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:ur(t,Kt,ri);break;case 3:if(Ii(t,i),(i&130023424)===i&&(e=qh+500-gt(),10<e)){if(pl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Xt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ju(ur.bind(null,t,Kt,ri),e);break}ur(t,Kt,ri);break;case 4:if(Ii(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-Fn(i);a=1<<s,s=e[s],s>r&&(r=s),i&=~a}if(i=r,i=gt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*O_(i/1960))-i,10<i){t.timeoutHandle=Ju(ur.bind(null,t,Kt,ri),i);break}ur(t,Kt,ri);break;case 5:ur(t,Kt,ri);break;default:throw Error(ie(329))}}}return tn(t,gt()),t.callbackNode===n?lv.bind(null,t):null}function xd(t,e){var n=ys;return t.current.memoizedState.isDehydrated&&(Sr(t,e).flags|=256),t=Il(t,e),t!==2&&(e=Kt,Kt=n,e!==null&&_d(e)),t}function _d(t){Kt===null?Kt=t:Kt.push.apply(Kt,t)}function z_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],a=r.getSnapshot;r=r.value;try{if(!zn(a(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ii(t,e){for(e&=~Xh,e&=~ec,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Fn(e),i=1<<n;t[n]=-1,e&=~i}}function Tp(t){if(We&6)throw Error(ie(327));Sa();var e=pl(t,0);if(!(e&1))return tn(t,gt()),null;var n=Il(t,e);if(t.tag!==0&&n===2){var i=Wu(t);i!==0&&(e=i,n=xd(t,i))}if(n===1)throw n=Os,Sr(t,0),Ii(t,e),tn(t,gt()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ur(t,Kt,ri),tn(t,gt()),null}function $h(t,e){var n=We;We|=1;try{return t(e)}finally{We=n,We===0&&(Na=gt()+500,Kl&&Ji())}}function Ar(t){Ui!==null&&Ui.tag===0&&!(We&6)&&Sa();var e=We;We|=1;var n=bn.transition,i=et;try{if(bn.transition=null,et=1,t)return t()}finally{et=i,bn.transition=n,We=e,!(We&6)&&Ji()}}function Yh(){cn=fa.current,at(fa)}function Sr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,m_(n)),St!==null)for(n=St.return;n!==null;){var i=n;switch(Rh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&xl();break;case 3:Ra(),at(Jt),at(Ht),Oh();break;case 5:Fh(i);break;case 4:Ra();break;case 13:at(lt);break;case 19:at(lt);break;case 10:Dh(i.type._context);break;case 22:case 23:Yh()}n=n.return}if(It=t,St=t=Gi(t.current,null),kt=cn=e,Mt=0,Os=null,Xh=ec=Tr=0,Kt=ys=null,yr!==null){for(e=0;e<yr.length;e++)if(n=yr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,a=n.pending;if(a!==null){var s=a.next;a.next=r,i.next=s}n.pending=i}yr=null}return t}function cv(t,e){do{var n=St;try{if(Ih(),Qo.current=Al,Tl){for(var i=ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Tl=!1}if(Cr=0,Rt=wt=ct=null,ms=!1,Us=0,Wh.current=null,n===null||n.return===null){Mt=1,Os=e,St=null;break}e:{var a=t,s=n.return,o=n,l=e;if(e=kt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=pp(s);if(g!==null){g.flags&=-257,mp(g,s,o,a,e),g.mode&1&&fp(a,c,e),e=g,l=c;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){fp(a,c,e),Kh();break e}l=Error(ie(426))}}else if(st&&o.mode&1){var m=pp(s);if(m!==null){!(m.flags&65536)&&(m.flags|=256),mp(m,s,o,a,e),Ph(Pa(l,o));break e}}a=l=Pa(l,o),Mt!==4&&(Mt=2),ys===null?ys=[a]:ys.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var h=Xy(a,l,e);op(a,h);break e;case 1:o=l;var v=a.type,x=a.stateNode;if(!(a.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(ji===null||!ji.has(x)))){a.flags|=65536,e&=-e,a.lanes|=e;var M=qy(a,o,e);op(a,M);break e}}a=a.return}while(a!==null)}hv(n)}catch(P){e=P,St===n&&n!==null&&(St=n=n.return);continue}break}while(!0)}function uv(){var t=Rl.current;return Rl.current=Al,t===null?Al:t}function Kh(){(Mt===0||Mt===3||Mt===2)&&(Mt=4),It===null||!(Tr&268435455)&&!(ec&268435455)||Ii(It,kt)}function Il(t,e){var n=We;We|=2;var i=uv();(It!==t||kt!==e)&&(ri=null,Sr(t,e));do try{B_();break}catch(r){cv(t,r)}while(!0);if(Ih(),We=n,Rl.current=i,St!==null)throw Error(ie(261));return It=null,kt=0,Mt}function B_(){for(;St!==null;)dv(St)}function V_(){for(;St!==null&&!h0();)dv(St)}function dv(t){var e=pv(t.alternate,t,cn);t.memoizedProps=t.pendingProps,e===null?hv(t):St=e,Wh.current=null}function hv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=L_(n,e),n!==null){n.flags&=32767,St=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Mt=6,St=null;return}}else if(n=D_(n,e,cn),n!==null){St=n;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);Mt===0&&(Mt=5)}function ur(t,e,n){var i=et,r=bn.transition;try{bn.transition=null,et=1,j_(t,e,n,i)}finally{bn.transition=r,et=i}return null}function j_(t,e,n,i){do Sa();while(Ui!==null);if(We&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var a=n.lanes|n.childLanes;if(b0(t,a),t===It&&(St=It=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vo||(vo=!0,mv(fl,function(){return Sa(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=bn.transition,bn.transition=null;var s=et;et=1;var o=We;We|=4,Wh.current=null,k_(t,n),sv(n,t),l_(Zu),ml=!!Ku,Zu=Ku=null,t.current=n,F_(n),f0(),We=o,et=s,bn.transition=a}else t.current=n;if(vo&&(vo=!1,Ui=t,Nl=r),a=t.pendingLanes,a===0&&(ji=null),g0(n.stateNode),tn(t,gt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Pl)throw Pl=!1,t=yd,yd=null,t;return Nl&1&&t.tag!==0&&Sa(),a=t.pendingLanes,a&1?t===vd?vs++:(vs=0,vd=t):vs=0,Ji(),null}function Sa(){if(Ui!==null){var t=Xg(Nl),e=bn.transition,n=et;try{if(bn.transition=null,et=16>t?16:t,Ui===null)var i=!1;else{if(t=Ui,Ui=null,Nl=0,We&6)throw Error(ie(331));var r=We;for(We|=4,me=t.current;me!==null;){var a=me,s=a.child;if(me.flags&16){var o=a.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(me=c;me!==null;){var d=me;switch(d.tag){case 0:case 11:case 15:gs(8,d,a)}var f=d.child;if(f!==null)f.return=d,me=f;else for(;me!==null;){d=me;var p=d.sibling,g=d.return;if(iv(d),d===c){me=null;break}if(p!==null){p.return=g,me=p;break}me=g}}}var y=a.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}me=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,me=s;else e:for(;me!==null;){if(a=me,a.flags&2048)switch(a.tag){case 0:case 11:case 15:gs(9,a,a.return)}var h=a.sibling;if(h!==null){h.return=a.return,me=h;break e}me=a.return}}var v=t.current;for(me=v;me!==null;){s=me;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,me=x;else e:for(s=v;me!==null;){if(o=me,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Jl(9,o)}}catch(P){pt(o,o.return,P)}if(o===s){me=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,me=M;break e}me=o.return}}if(We=r,Ji(),$n&&typeof $n.onPostCommitFiberRoot=="function")try{$n.onPostCommitFiberRoot(Wl,t)}catch{}i=!0}return i}finally{et=n,bn.transition=e}}return!1}function Ap(t,e,n){e=Pa(n,e),e=Xy(t,e,1),t=Vi(t,e,1),e=Xt(),t!==null&&(Hs(t,1,e),tn(t,e))}function pt(t,e,n){if(t.tag===3)Ap(t,t,n);else for(;e!==null;){if(e.tag===3){Ap(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ji===null||!ji.has(i))){t=Pa(n,t),t=qy(e,t,1),e=Vi(e,t,1),t=Xt(),e!==null&&(Hs(e,1,t),tn(e,t));break}}e=e.return}}function H_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Xt(),t.pingedLanes|=t.suspendedLanes&n,It===t&&(kt&n)===n&&(Mt===4||Mt===3&&(kt&130023424)===kt&&500>gt()-qh?Sr(t,0):Xh|=n),tn(t,e)}function fv(t,e){e===0&&(t.mode&1?(e=oo,oo<<=1,!(oo&130023424)&&(oo=4194304)):e=1);var n=Xt();t=mi(t,e),t!==null&&(Hs(t,e,n),tn(t,n))}function G_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),fv(t,n)}function W_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),fv(t,n)}var pv;pv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Jt.current)Qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Qt=!1,I_(t,e,n);Qt=!!(t.flags&131072)}else Qt=!1,st&&e.flags&1048576&&vy(e,bl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;el(t,e),t=e.pendingProps;var r=Ca(e,Ht.current);_a(e,n),r=Bh(null,e,i,t,r,n);var a=Vh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,en(i)?(a=!0,_l(e)):a=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Uh(e),r.updater=Ql,e.stateNode=r,r._reactInternals=e,sd(e,i,t,n),e=cd(null,e,i,!0,a,n)):(e.tag=0,st&&a&&Ah(e),Wt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(el(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=q_(i),t=Pn(i,t),r){case 0:e=ld(null,e,i,t,n);break e;case 1:e=vp(null,e,i,t,n);break e;case 11:e=gp(null,e,i,t,n);break e;case 14:e=yp(null,e,i,Pn(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),ld(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),vp(t,e,i,r,n);case 3:e:{if(Zy(e),t===null)throw Error(ie(387));i=e.pendingProps,a=e.memoizedState,r=a.element,My(t,e),El(e,i,null,n);var s=e.memoizedState;if(i=s.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){r=Pa(Error(ie(423)),e),e=xp(t,e,i,n,r);break e}else if(i!==r){r=Pa(Error(ie(424)),e),e=xp(t,e,i,n,r);break e}else for(un=Bi(e.stateNode.containerInfo.firstChild),dn=e,st=!0,In=null,n=by(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ta(),i===r){e=gi(t,e,n);break e}Wt(t,e,i,n)}e=e.child}return e;case 5:return Ey(e),t===null&&id(e),i=e.type,r=e.pendingProps,a=t!==null?t.memoizedProps:null,s=r.children,Qu(i,r)?s=null:a!==null&&Qu(i,a)&&(e.flags|=32),Ky(t,e),Wt(t,e,s,n),e.child;case 6:return t===null&&id(e),null;case 13:return Qy(t,e,n);case 4:return kh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Aa(e,null,i,n):Wt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),gp(t,e,i,r,n);case 7:return Wt(t,e,e.pendingProps,n),e.child;case 8:return Wt(t,e,e.pendingProps.children,n),e.child;case 12:return Wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,a=e.memoizedProps,s=r.value,nt(wl,i._currentValue),i._currentValue=s,a!==null)if(zn(a.value,s)){if(a.children===r.children&&!Jt.current){e=gi(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){s=a.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(a.tag===1){l=hi(-1,n&-n),l.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),rd(a.return,n,e),o.lanes|=n;break}l=l.next}}else if(a.tag===10)s=a.type===e.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(ie(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),rd(s,n,e),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}Wt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,_a(e,n),r=wn(r),i=i(r),e.flags|=1,Wt(t,e,i,n),e.child;case 14:return i=e.type,r=Pn(i,e.pendingProps),r=Pn(i.type,r),yp(t,e,i,r,n);case 15:return $y(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),el(t,e),e.tag=1,en(i)?(t=!0,_l(e)):t=!1,_a(e,n),Wy(e,i,r),sd(e,i,r,n),cd(null,e,i,!0,t,n);case 19:return Jy(t,e,n);case 22:return Yy(t,e,n)}throw Error(ie(156,e.tag))};function mv(t,e){return jg(t,e)}function X_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(t,e,n,i){return new X_(t,e,n,i)}function Zh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function q_(t){if(typeof t=="function")return Zh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===gh)return 11;if(t===yh)return 14}return 2}function Gi(t,e){var n=t.alternate;return n===null?(n=_n(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function il(t,e,n,i,r,a){var s=2;if(i=t,typeof t=="function")Zh(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case ia:return br(n.children,r,a,e);case mh:s=8,r|=8;break;case Pu:return t=_n(12,n,e,r|2),t.elementType=Pu,t.lanes=a,t;case Nu:return t=_n(13,n,e,r),t.elementType=Nu,t.lanes=a,t;case Iu:return t=_n(19,n,e,r),t.elementType=Iu,t.lanes=a,t;case Eg:return tc(n,r,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case wg:s=10;break e;case Mg:s=9;break e;case gh:s=11;break e;case yh:s=14;break e;case Ri:s=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=_n(s,n,e,r),e.elementType=t,e.type=i,e.lanes=a,e}function br(t,e,n,i){return t=_n(7,t,i,e),t.lanes=n,t}function tc(t,e,n,i){return t=_n(22,t,i,e),t.elementType=Eg,t.lanes=n,t.stateNode={isHidden:!1},t}function Wc(t,e,n){return t=_n(6,t,null,e),t.lanes=n,t}function Xc(t,e,n){return e=_n(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function $_(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cc(0),this.expirationTimes=Cc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Qh(t,e,n,i,r,a,s,o,l){return t=new $_(t,e,n,o,l),e===1?(e=1,a===!0&&(e|=8)):e=0,a=_n(3,null,null,e),t.current=a,a.stateNode=t,a.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uh(a),t}function Y_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:na,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function gv(t){if(!t)return Yi;t=t._reactInternals;e:{if(Ir(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(en(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(en(n))return gy(t,n,e)}return e}function yv(t,e,n,i,r,a,s,o,l){return t=Qh(n,i,!0,t,r,a,s,o,l),t.context=gv(null),n=t.current,i=Xt(),r=Hi(n),a=hi(i,r),a.callback=e??null,Vi(n,a,r),t.current.lanes=r,Hs(t,r,i),tn(t,i),t}function nc(t,e,n,i){var r=e.current,a=Xt(),s=Hi(r);return n=gv(n),e.context===null?e.context=n:e.pendingContext=n,e=hi(a,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Vi(r,e,s),t!==null&&(On(t,r,s,a),Zo(t,r,s)),s}function Dl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Rp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Jh(t,e){Rp(t,e),(t=t.alternate)&&Rp(t,e)}function K_(){return null}var vv=typeof reportError=="function"?reportError:function(t){console.error(t)};function ef(t){this._internalRoot=t}ic.prototype.render=ef.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));nc(t,e,null,null)};ic.prototype.unmount=ef.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ar(function(){nc(null,t,null,null)}),e[pi]=null}};function ic(t){this._internalRoot=t}ic.prototype.unstable_scheduleHydration=function(t){if(t){var e=Yg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ni.length&&e!==0&&e<Ni[n].priority;n++);Ni.splice(n,0,t),n===0&&Zg(t)}};function tf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function rc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Pp(){}function Z_(t,e,n,i,r){if(r){if(typeof i=="function"){var a=i;i=function(){var c=Dl(s);a.call(c)}}var s=yv(e,i,t,0,null,!1,!1,"",Pp);return t._reactRootContainer=s,t[pi]=s.current,Ps(t.nodeType===8?t.parentNode:t),Ar(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Dl(l);o.call(c)}}var l=Qh(t,0,!1,null,null,!1,!1,"",Pp);return t._reactRootContainer=l,t[pi]=l.current,Ps(t.nodeType===8?t.parentNode:t),Ar(function(){nc(e,l,n,i)}),l}function ac(t,e,n,i,r){var a=n._reactRootContainer;if(a){var s=a;if(typeof r=="function"){var o=r;r=function(){var l=Dl(s);o.call(l)}}nc(e,s,t,r)}else s=Z_(n,e,t,r,i);return Dl(s)}qg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=os(e.pendingLanes);n!==0&&(_h(e,n|1),tn(e,gt()),!(We&6)&&(Na=gt()+500,Ji()))}break;case 13:Ar(function(){var i=mi(t,1);if(i!==null){var r=Xt();On(i,t,1,r)}}),Jh(t,1)}};Sh=function(t){if(t.tag===13){var e=mi(t,134217728);if(e!==null){var n=Xt();On(e,t,134217728,n)}Jh(t,134217728)}};$g=function(t){if(t.tag===13){var e=Hi(t),n=mi(t,e);if(n!==null){var i=Xt();On(n,t,e,i)}Jh(t,e)}};Yg=function(){return et};Kg=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};ju=function(t,e,n){switch(e){case"input":if(Uu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Yl(i);if(!r)throw Error(ie(90));Tg(i),Uu(i,r)}}}break;case"textarea":Rg(t,n);break;case"select":e=n.value,e!=null&&ga(t,!!n.multiple,e,!1)}};kg=$h;Fg=Ar;var Q_={usingClientEntryPoint:!1,Events:[Ws,oa,Yl,Lg,Ug,$h]},Za={findFiberByHostInstance:gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},J_={bundleType:Za.bundleType,version:Za.version,rendererPackageName:Za.rendererPackageName,rendererConfig:Za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_i.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Bg(t),t===null?null:t.stateNode},findFiberByHostInstance:Za.findFiberByHostInstance||K_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xo.isDisabled&&xo.supportsFiber)try{Wl=xo.inject(J_),$n=xo}catch{}}pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q_;pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tf(e))throw Error(ie(200));return Y_(t,e,null,n)};pn.createRoot=function(t,e){if(!tf(t))throw Error(ie(299));var n=!1,i="",r=vv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Qh(t,1,!1,null,null,n,!1,i,r),t[pi]=e.current,Ps(t.nodeType===8?t.parentNode:t),new ef(e)};pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=Bg(e),t=t===null?null:t.stateNode,t};pn.flushSync=function(t){return Ar(t)};pn.hydrate=function(t,e,n){if(!rc(e))throw Error(ie(200));return ac(null,t,e,!0,n)};pn.hydrateRoot=function(t,e,n){if(!tf(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,a="",s=vv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=yv(e,null,t,1,n??null,r,!1,a,s),t[pi]=e.current,Ps(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ic(e)};pn.render=function(t,e,n){if(!rc(e))throw Error(ie(200));return ac(null,t,e,!1,n)};pn.unmountComponentAtNode=function(t){if(!rc(t))throw Error(ie(40));return t._reactRootContainer?(Ar(function(){ac(null,null,t,!1,function(){t._reactRootContainer=null,t[pi]=null})}),!0):!1};pn.unstable_batchedUpdates=$h;pn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!rc(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return ac(t,e,n,!1,i)};pn.version="18.3.1-next-f1338f8080-20240426";function xv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xv)}catch(t){console.error(t)}}xv(),xg.exports=pn;var eS=xg.exports,Np=eS;Au.createRoot=Np.createRoot,Au.hydrateRoot=Np.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zs(){return zs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},zs.apply(this,arguments)}var ki;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ki||(ki={}));const Ip="popstate";function tS(t){t===void 0&&(t={});function e(i,r){let{pathname:a,search:s,hash:o}=i.location;return Sd("",{pathname:a,search:s,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:Ll(r)}return iS(e,n,null,t)}function mt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function nf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function nS(){return Math.random().toString(36).substr(2,8)}function Dp(t,e){return{usr:t.state,key:t.key,idx:e}}function Sd(t,e,n,i){return n===void 0&&(n=null),zs({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Va(e):e,{state:n,key:e&&e.key||i||nS()})}function Ll(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Va(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function iS(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:a=!1}=i,s=r.history,o=ki.Pop,l=null,c=d();c==null&&(c=0,s.replaceState(zs({},s.state,{idx:c}),""));function d(){return(s.state||{idx:null}).idx}function f(){o=ki.Pop;let m=d(),h=m==null?null:m-c;c=m,l&&l({action:o,location:_.location,delta:h})}function p(m,h){o=ki.Push;let v=Sd(_.location,m,h);c=d()+1;let x=Dp(v,c),M=_.createHref(v);try{s.pushState(x,"",M)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;r.location.assign(M)}a&&l&&l({action:o,location:_.location,delta:1})}function g(m,h){o=ki.Replace;let v=Sd(_.location,m,h);c=d();let x=Dp(v,c),M=_.createHref(v);s.replaceState(x,"",M),a&&l&&l({action:o,location:_.location,delta:0})}function y(m){let h=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof m=="string"?m:Ll(m);return v=v.replace(/ $/,"%20"),mt(h,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,h)}let _={get action(){return o},get location(){return t(r,s)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Ip,f),l=m,()=>{r.removeEventListener(Ip,f),l=null}},createHref(m){return e(r,m)},createURL:y,encodeLocation(m){let h=y(m);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:g,go(m){return s.go(m)}};return _}var Lp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Lp||(Lp={}));function rS(t,e,n){return n===void 0&&(n="/"),aS(t,e,n)}function aS(t,e,n,i){let r=typeof e=="string"?Va(e):e,a=Ia(r.pathname||"/",n);if(a==null)return null;let s=_v(t);sS(s);let o=null;for(let l=0;o==null&&l<s.length;++l){let c=yS(a);o=mS(s[l],c)}return o}function _v(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(a,s,o)=>{let l={relativePath:o===void 0?a.path||"":o,caseSensitive:a.caseSensitive===!0,childrenIndex:s,route:a};l.relativePath.startsWith("/")&&(mt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Wi([i,l.relativePath]),d=n.concat(l);a.children&&a.children.length>0&&(mt(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),_v(a.children,e,d,c)),!(a.path==null&&!a.index)&&e.push({path:c,score:fS(c,a.index),routesMeta:d})};return t.forEach((a,s)=>{var o;if(a.path===""||!((o=a.path)!=null&&o.includes("?")))r(a,s);else for(let l of Sv(a.path))r(a,s,l)}),e}function Sv(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),a=n.replace(/\?$/,"");if(i.length===0)return r?[a,""]:[a];let s=Sv(i.join("/")),o=[];return o.push(...s.map(l=>l===""?a:[a,l].join("/"))),r&&o.push(...s),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function sS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:pS(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const oS=/^:[\w-]+$/,lS=3,cS=2,uS=1,dS=10,hS=-2,Up=t=>t==="*";function fS(t,e){let n=t.split("/"),i=n.length;return n.some(Up)&&(i+=hS),e&&(i+=cS),n.filter(r=>!Up(r)).reduce((r,a)=>r+(oS.test(a)?lS:a===""?uS:dS),i)}function pS(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function mS(t,e,n){let{routesMeta:i}=t,r={},a="/",s=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,d=a==="/"?e:e.slice(a.length)||"/",f=bd({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),p=l.route;if(!f)return null;Object.assign(r,f.params),s.push({params:r,pathname:Wi([a,f.pathname]),pathnameBase:bS(Wi([a,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(a=Wi([a,f.pathnameBase]))}return s}function bd(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=gS(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let a=r[0],s=a.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((c,d,f)=>{let{paramName:p,isOptional:g}=d;if(p==="*"){let _=o[f]||"";s=a.slice(0,a.length-_.length).replace(/(.)\/+$/,"$1")}const y=o[f];return g&&!y?c[p]=void 0:c[p]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:a,pathnameBase:s,pattern:t}}function gS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),nf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function yS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return nf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ia(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const vS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xS=t=>vS.test(t);function _S(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Va(t):t,a;if(n)if(xS(n))a=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),nf(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?a=kp(n.substring(1),"/"):a=kp(n,e)}else a=e;return{pathname:a,search:wS(i),hash:MS(r)}}function kp(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function qc(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function SS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function bv(t,e){let n=SS(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function wv(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Va(t):(r=zs({},t),mt(!r.pathname||!r.pathname.includes("?"),qc("?","pathname","search",r)),mt(!r.pathname||!r.pathname.includes("#"),qc("#","pathname","hash",r)),mt(!r.search||!r.search.includes("#"),qc("#","search","hash",r)));let a=t===""||r.pathname==="",s=a?"/":r.pathname,o;if(s==null)o=n;else{let f=e.length-1;if(!i&&s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),f-=1;r.pathname=p.join("/")}o=f>=0?e[f]:"/"}let l=_S(r,o),c=s&&s!=="/"&&s.endsWith("/"),d=(a||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const Wi=t=>t.join("/").replace(/\/\/+/g,"/"),bS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),wS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,MS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function ES(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Mv=["post","put","patch","delete"];new Set(Mv);const CS=["get",...Mv];new Set(CS);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bs(){return Bs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Bs.apply(this,arguments)}const sc=L.createContext(null),Ev=L.createContext(null),er=L.createContext(null),oc=L.createContext(null),Dr=L.createContext({outlet:null,matches:[],isDataRoute:!1}),Cv=L.createContext(null);function TS(t,e){let{relative:n}=e===void 0?{}:e;qs()||mt(!1);let{basename:i,navigator:r}=L.useContext(er),{hash:a,pathname:s,search:o}=lc(t,{relative:n}),l=s;return i!=="/"&&(l=s==="/"?i:Wi([i,s])),r.createHref({pathname:l,search:o,hash:a})}function qs(){return L.useContext(oc)!=null}function Lr(){return qs()||mt(!1),L.useContext(oc).location}function Tv(t){L.useContext(er).static||L.useLayoutEffect(t)}function Av(){let{isDataRoute:t}=L.useContext(Dr);return t?BS():AS()}function AS(){qs()||mt(!1);let t=L.useContext(sc),{basename:e,future:n,navigator:i}=L.useContext(er),{matches:r}=L.useContext(Dr),{pathname:a}=Lr(),s=JSON.stringify(bv(r,n.v7_relativeSplatPath)),o=L.useRef(!1);return Tv(()=>{o.current=!0}),L.useCallback(function(c,d){if(d===void 0&&(d={}),!o.current)return;if(typeof c=="number"){i.go(c);return}let f=wv(c,JSON.parse(s),a,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Wi([e,f.pathname])),(d.replace?i.replace:i.push)(f,d.state,d)},[e,i,s,a,t])}function lc(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=L.useContext(er),{matches:r}=L.useContext(Dr),{pathname:a}=Lr(),s=JSON.stringify(bv(r,i.v7_relativeSplatPath));return L.useMemo(()=>wv(t,JSON.parse(s),a,n==="path"),[t,s,a,n])}function RS(t,e){return PS(t,e)}function PS(t,e,n,i){qs()||mt(!1);let{navigator:r}=L.useContext(er),{matches:a}=L.useContext(Dr),s=a[a.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let c=Lr(),d;if(e){var f;let m=typeof e=="string"?Va(e):e;l==="/"||(f=m.pathname)!=null&&f.startsWith(l)||mt(!1),d=m}else d=c;let p=d.pathname||"/",g=p;if(l!=="/"){let m=l.replace(/^\//,"").split("/");g="/"+p.replace(/^\//,"").split("/").slice(m.length).join("/")}let y=rS(t,{pathname:g}),_=US(y&&y.map(m=>Object.assign({},m,{params:Object.assign({},o,m.params),pathname:Wi([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:Wi([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),a,n,i);return e&&_?L.createElement(oc.Provider,{value:{location:Bs({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:ki.Pop}},_):_}function NS(){let t=zS(),e=ES(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},e),n?L.createElement("pre",{style:r},n):null,null)}const IS=L.createElement(NS,null);class DS extends L.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?L.createElement(Dr.Provider,{value:this.props.routeContext},L.createElement(Cv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function LS(t){let{routeContext:e,match:n,children:i}=t,r=L.useContext(sc);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),L.createElement(Dr.Provider,{value:e},i)}function US(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var a;if(!n)return null;if(n.errors)t=n.matches;else if((a=i)!=null&&a.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let d=s.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);d>=0||mt(!1),s=s.slice(0,Math.min(s.length,d+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let d=0;d<s.length;d++){let f=s[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:p,errors:g}=n,y=f.route.loader&&p[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||y){l=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((d,f,p)=>{let g,y=!1,_=null,m=null;n&&(g=o&&f.route.id?o[f.route.id]:void 0,_=f.route.errorElement||IS,l&&(c<0&&p===0?(VS("route-fallback"),y=!0,m=null):c===p&&(y=!0,m=f.route.hydrateFallbackElement||null)));let h=e.concat(s.slice(0,p+1)),v=()=>{let x;return g?x=_:y?x=m:f.route.Component?x=L.createElement(f.route.Component,null):f.route.element?x=f.route.element:x=d,L.createElement(LS,{match:f,routeContext:{outlet:d,matches:h,isDataRoute:n!=null},children:x})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?L.createElement(DS,{location:n.location,revalidation:n.revalidation,component:_,error:g,children:v(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):v()},null)}var Rv=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Rv||{}),Pv=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Pv||{});function kS(t){let e=L.useContext(sc);return e||mt(!1),e}function FS(t){let e=L.useContext(Ev);return e||mt(!1),e}function OS(t){let e=L.useContext(Dr);return e||mt(!1),e}function Nv(t){let e=OS(),n=e.matches[e.matches.length-1];return n.route.id||mt(!1),n.route.id}function zS(){var t;let e=L.useContext(Cv),n=FS(),i=Nv();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function BS(){let{router:t}=kS(Rv.UseNavigateStable),e=Nv(Pv.UseNavigateStable),n=L.useRef(!1);return Tv(()=>{n.current=!0}),L.useCallback(function(r,a){a===void 0&&(a={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Bs({fromRouteId:e},a)))},[t,e])}const Fp={};function VS(t,e,n){Fp[t]||(Fp[t]=!0)}function jS(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function bt(t){mt(!1)}function HS(t){let{basename:e="/",children:n=null,location:i,navigationType:r=ki.Pop,navigator:a,static:s=!1,future:o}=t;qs()&&mt(!1);let l=e.replace(/^\/*/,"/"),c=L.useMemo(()=>({basename:l,navigator:a,static:s,future:Bs({v7_relativeSplatPath:!1},o)}),[l,o,a,s]);typeof i=="string"&&(i=Va(i));let{pathname:d="/",search:f="",hash:p="",state:g=null,key:y="default"}=i,_=L.useMemo(()=>{let m=Ia(d,l);return m==null?null:{location:{pathname:m,search:f,hash:p,state:g,key:y},navigationType:r}},[l,d,f,p,g,y,r]);return _==null?null:L.createElement(er.Provider,{value:c},L.createElement(oc.Provider,{children:n,value:_}))}function GS(t){let{children:e,location:n}=t;return RS(wd(e),n)}new Promise(()=>{});function wd(t,e){e===void 0&&(e=[]);let n=[];return L.Children.forEach(t,(i,r)=>{if(!L.isValidElement(i))return;let a=[...e,r];if(i.type===L.Fragment){n.push.apply(n,wd(i.props.children,a));return}i.type!==bt&&mt(!1),!i.props.index||!i.props.children||mt(!1);let s={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(s.children=wd(i.props.children,a)),n.push(s)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ul(){return Ul=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ul.apply(this,arguments)}function Iv(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,a;for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function WS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function XS(t,e){return t.button===0&&(!e||e==="_self")&&!WS(t)}const qS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],$S=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],YS="6";try{window.__reactRouterVersion=YS}catch{}const KS=L.createContext({isTransitioning:!1}),ZS="startTransition",Op=Hx[ZS];function QS(t){let{basename:e,children:n,future:i,window:r}=t,a=L.useRef();a.current==null&&(a.current=tS({window:r,v5Compat:!0}));let s=a.current,[o,l]=L.useState({action:s.action,location:s.location}),{v7_startTransition:c}=i||{},d=L.useCallback(f=>{c&&Op?Op(()=>l(f)):l(f)},[l,c]);return L.useLayoutEffect(()=>s.listen(d),[s,d]),L.useEffect(()=>jS(i),[i]),L.createElement(HS,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s,future:i})}const JS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",eb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pt=L.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:a,replace:s,state:o,target:l,to:c,preventScrollReset:d,viewTransition:f}=e,p=Iv(e,qS),{basename:g}=L.useContext(er),y,_=!1;if(typeof c=="string"&&eb.test(c)&&(y=c,JS))try{let x=new URL(window.location.href),M=c.startsWith("//")?new URL(x.protocol+c):new URL(c),P=Ia(M.pathname,g);M.origin===x.origin&&P!=null?c=P+M.search+M.hash:_=!0}catch{}let m=TS(c,{relative:r}),h=ib(c,{replace:s,state:o,target:l,preventScrollReset:d,relative:r,viewTransition:f});function v(x){i&&i(x),x.defaultPrevented||h(x)}return L.createElement("a",Ul({},p,{href:y||m,onClick:_||a?i:v,ref:n,target:l}))}),tb=L.forwardRef(function(e,n){let{"aria-current":i="page",caseSensitive:r=!1,className:a="",end:s=!1,style:o,to:l,viewTransition:c,children:d}=e,f=Iv(e,$S),p=lc(l,{relative:f.relative}),g=Lr(),y=L.useContext(Ev),{navigator:_,basename:m}=L.useContext(er),h=y!=null&&rb(p)&&c===!0,v=_.encodeLocation?_.encodeLocation(p).pathname:p.pathname,x=g.pathname,M=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;r||(x=x.toLowerCase(),M=M?M.toLowerCase():null,v=v.toLowerCase()),M&&m&&(M=Ia(M,m)||M);const P=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let C=x===v||!s&&x.startsWith(v)&&x.charAt(P)==="/",w=M!=null&&(M===v||!s&&M.startsWith(v)&&M.charAt(v.length)==="/"),E={isActive:C,isPending:w,isTransitioning:h},S=C?i:void 0,b;typeof a=="function"?b=a(E):b=[a,C?"active":null,w?"pending":null,h?"transitioning":null].filter(Boolean).join(" ");let R=typeof o=="function"?o(E):o;return L.createElement(Pt,Ul({},f,{"aria-current":S,className:b,ref:n,style:R,to:l,viewTransition:c}),typeof d=="function"?d(E):d)});var Md;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Md||(Md={}));var zp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(zp||(zp={}));function nb(t){let e=L.useContext(sc);return e||mt(!1),e}function ib(t,e){let{target:n,replace:i,state:r,preventScrollReset:a,relative:s,viewTransition:o}=e===void 0?{}:e,l=Av(),c=Lr(),d=lc(t,{relative:s});return L.useCallback(f=>{if(XS(f,n)){f.preventDefault();let p=i!==void 0?i:Ll(c)===Ll(d);l(t,{replace:p,state:r,preventScrollReset:a,relative:s,viewTransition:o})}},[c,l,d,i,r,n,t,a,s,o])}function rb(t,e){e===void 0&&(e={});let n=L.useContext(KS);n==null&&mt(!1);let{basename:i}=nb(Md.useViewTransitionState),r=lc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let a=Ia(n.currentLocation.pathname,i)||n.currentLocation.pathname,s=Ia(n.nextLocation.pathname,i)||n.nextLocation.pathname;return bd(r.pathname,s)!=null||bd(r.pathname,a)!=null}const Bp=[{to:"/",label:"Home"},{to:"/hackathon",label:"CodeHunt Hackathon"},{to:"/workshops",label:"Workshops"},{to:"/kinetic-showdown",label:"Kinetic Showdown"},{to:"/esports",label:"eSports"},{to:"/open-mic",label:"Open Mic"},{to:"/culture",label:"Culture"},{to:"/gallery",label:"Gallery"},{to:"/team",label:"Team"}];function ab(){const t=Lr(),e=Av(),n=t.pathname==="/robo-race"?"/kinetic-showdown":t.pathname;return u.jsxs("header",{className:"site-header",children:[u.jsx("div",{className:"brand",children:u.jsx("img",{className:"logo-image",src:"/logo.png",alt:"Inertia logo"})}),u.jsx("nav",{className:"nav-links",children:Bp.map(i=>u.jsx(tb,{to:i.to,className:({isActive:r})=>r?"nav-link nav-link-active":"nav-link",children:i.label},i.to))}),u.jsx("div",{className:"mobile-nav",children:u.jsx("select",{className:"mobile-nav-select","aria-label":"Select page",value:n,onChange:i=>e(i.target.value),children:Bp.map(i=>u.jsx("option",{value:i.to,children:i.label},i.to))})}),u.jsx("div",{className:"header-cta",children:u.jsx(Pt,{className:"btn btn-primary",to:"/register",children:"Register Now"})})]})}function sb(){return u.jsxs("footer",{className:"site-footer",children:[u.jsxs("div",{className:"footer-grid",children:[u.jsxs("div",{children:[u.jsx("p",{className:"footer-title",children:"Inertia 2026"}),u.jsx("p",{className:"footer-text",children:"The annual festival of Jabalpur Engineering College. Build, compete, and celebrate innovation."})]}),u.jsxs("div",{children:[u.jsx("p",{className:"footer-title",children:"Contact"}),u.jsx("p",{className:"footer-text",children:"Jabalpur Engineering College, Jabalpur"}),u.jsx(Pt,{className:"btn btn-ghost",to:"/contact",children:"Contact Page"})]}),u.jsxs("div",{children:[u.jsx("p",{className:"footer-title",children:"Events"}),u.jsx("p",{className:"footer-text",children:"CodeHunt Hackathon, Workshops, Kinetic Showdown, eSports, Open Mic"}),u.jsx("p",{className:"footer-text",children:"Culture Fest and gallery highlights"})]})]}),u.jsx("div",{className:"footer-bottom",children:u.jsx("p",{children:"Made with ❤️ by Pavitra Durgesh Pandey"})})]})}function xs(t){let e=t[0],n=t[1],i=t[2];return Math.sqrt(e*e+n*n+i*i)}function Ed(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function ob(t,e,n,i){return t[0]=e,t[1]=n,t[2]=i,t}function Vp(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t}function jp(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t}function lb(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t[2]=e[2]*n[2],t}function cb(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t[2]=e[2]/n[2],t}function $c(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t}function ub(t,e){let n=e[0]-t[0],i=e[1]-t[1],r=e[2]-t[2];return Math.sqrt(n*n+i*i+r*r)}function db(t,e){let n=e[0]-t[0],i=e[1]-t[1],r=e[2]-t[2];return n*n+i*i+r*r}function Hp(t){let e=t[0],n=t[1],i=t[2];return e*e+n*n+i*i}function hb(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}function fb(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}function Cd(t,e){let n=e[0],i=e[1],r=e[2],a=n*n+i*i+r*r;return a>0&&(a=1/Math.sqrt(a)),t[0]=e[0]*a,t[1]=e[1]*a,t[2]=e[2]*a,t}function Dv(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function Gp(t,e,n){let i=e[0],r=e[1],a=e[2],s=n[0],o=n[1],l=n[2];return t[0]=r*l-a*o,t[1]=a*s-i*l,t[2]=i*o-r*s,t}function pb(t,e,n,i){let r=e[0],a=e[1],s=e[2];return t[0]=r+i*(n[0]-r),t[1]=a+i*(n[1]-a),t[2]=s+i*(n[2]-s),t}function mb(t,e,n,i,r){const a=Math.exp(-i*r);let s=e[0],o=e[1],l=e[2];return t[0]=n[0]+(s-n[0])*a,t[1]=n[1]+(o-n[1])*a,t[2]=n[2]+(l-n[2])*a,t}function gb(t,e,n){let i=e[0],r=e[1],a=e[2],s=n[3]*i+n[7]*r+n[11]*a+n[15];return s=s||1,t[0]=(n[0]*i+n[4]*r+n[8]*a+n[12])/s,t[1]=(n[1]*i+n[5]*r+n[9]*a+n[13])/s,t[2]=(n[2]*i+n[6]*r+n[10]*a+n[14])/s,t}function yb(t,e,n){let i=e[0],r=e[1],a=e[2],s=n[3]*i+n[7]*r+n[11]*a+n[15];return s=s||1,t[0]=(n[0]*i+n[4]*r+n[8]*a)/s,t[1]=(n[1]*i+n[5]*r+n[9]*a)/s,t[2]=(n[2]*i+n[6]*r+n[10]*a)/s,t}function vb(t,e,n){let i=e[0],r=e[1],a=e[2];return t[0]=i*n[0]+r*n[3]+a*n[6],t[1]=i*n[1]+r*n[4]+a*n[7],t[2]=i*n[2]+r*n[5]+a*n[8],t}function xb(t,e,n){let i=e[0],r=e[1],a=e[2],s=n[0],o=n[1],l=n[2],c=n[3],d=o*a-l*r,f=l*i-s*a,p=s*r-o*i,g=o*p-l*f,y=l*d-s*p,_=s*f-o*d,m=c*2;return d*=m,f*=m,p*=m,g*=2,y*=2,_*=2,t[0]=i+d+g,t[1]=r+f+y,t[2]=a+p+_,t}const _b=function(){const t=[0,0,0],e=[0,0,0];return function(n,i){Ed(t,n),Ed(e,i),Cd(t,t),Cd(e,e);let r=Dv(t,e);return r>1?0:r<-1?Math.PI:Math.acos(r)}}();function Sb(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}class Un extends Array{constructor(e=0,n=e,i=e){return super(e,n,i),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this[0]=e}set y(e){this[1]=e}set z(e){this[2]=e}set(e,n=e,i=e){return e.length?this.copy(e):(ob(this,e,n,i),this)}copy(e){return Ed(this,e),this}add(e,n){return n?Vp(this,e,n):Vp(this,this,e),this}sub(e,n){return n?jp(this,e,n):jp(this,this,e),this}multiply(e){return e.length?lb(this,this,e):$c(this,this,e),this}divide(e){return e.length?cb(this,this,e):$c(this,this,1/e),this}inverse(e=this){return fb(this,e),this}len(){return xs(this)}distance(e){return e?ub(this,e):xs(this)}squaredLen(){return Hp(this)}squaredDistance(e){return e?db(this,e):Hp(this)}negate(e=this){return hb(this,e),this}cross(e,n){return n?Gp(this,e,n):Gp(this,this,e),this}scale(e){return $c(this,this,e),this}normalize(){return Cd(this,this),this}dot(e){return Dv(this,e)}equals(e){return Sb(this,e)}applyMatrix3(e){return vb(this,this,e),this}applyMatrix4(e){return gb(this,this,e),this}scaleRotateMatrix4(e){return yb(this,this,e),this}applyQuaternion(e){return xb(this,this,e),this}angle(e){return _b(this,e)}lerp(e,n){return pb(this,this,e,n),this}smoothLerp(e,n,i){return mb(this,this,e,n,i),this}clone(){return new Un(this[0],this[1],this[2])}fromArray(e,n=0){return this[0]=e[n],this[1]=e[n+1],this[2]=e[n+2],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e}transformDirection(e){const n=this[0],i=this[1],r=this[2];return this[0]=e[0]*n+e[4]*i+e[8]*r,this[1]=e[1]*n+e[5]*i+e[9]*r,this[2]=e[2]*n+e[6]*i+e[10]*r,this.normalize()}}const Wp=new Un;let bb=1,wb=1,Xp=!1;class Mb{constructor(e,n={}){e.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=e,this.attributes=n,this.id=bb++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let i in n)this.addAttribute(i,n[i])}addAttribute(e,n){if(this.attributes[e]=n,n.id=wb++,n.size=n.size||1,n.type=n.type||(n.data.constructor===Float32Array?this.gl.FLOAT:n.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),n.target=e==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,n.normalized=n.normalized||!1,n.stride=n.stride||0,n.offset=n.offset||0,n.count=n.count||(n.stride?n.data.byteLength/n.stride:n.data.length/n.size),n.divisor=n.instanced||0,n.needsUpdate=!1,n.usage=n.usage||this.gl.STATIC_DRAW,n.buffer||this.updateAttribute(n),n.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==n.count*n.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,n.count*n.divisor);this.instancedCount=n.count*n.divisor}else e==="index"?this.drawRange.count=n.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,n.count))}updateAttribute(e){const n=!e.buffer;n&&(e.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==e.buffer&&(this.gl.bindBuffer(e.target,e.buffer),this.glState.boundBuffer=e.buffer),n?this.gl.bufferData(e.target,e.data,e.usage):this.gl.bufferSubData(e.target,0,e.data),e.needsUpdate=!1}setIndex(e){this.addAttribute("index",e)}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}setInstancedCount(e){this.instancedCount=e}createVAO(e){this.VAOs[e.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.bindAttributes(e)}bindAttributes(e){e.attributeLocations.forEach((n,{name:i,type:r})=>{if(!this.attributes[i]){console.warn(`active attribute ${i} not being supplied`);return}const a=this.attributes[i];this.gl.bindBuffer(a.target,a.buffer),this.glState.boundBuffer=a.buffer;let s=1;r===35674&&(s=2),r===35675&&(s=3),r===35676&&(s=4);const o=a.size/s,l=s===1?0:s*s*4,c=s===1?0:s*4;for(let d=0;d<s;d++)this.gl.vertexAttribPointer(n+d,o,a.type,a.normalized,a.stride+l,a.offset+d*c),this.gl.enableVertexAttribArray(n+d),this.gl.renderer.vertexAttribDivisor(n+d,a.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:e,mode:n=this.gl.TRIANGLES}){var r;this.gl.renderer.currentGeometry!==`${this.id}_${e.attributeOrder}`&&(this.VAOs[e.attributeOrder]||this.createVAO(e),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${e.attributeOrder}`),e.attributeLocations.forEach((a,{name:s})=>{const o=this.attributes[s];o.needsUpdate&&this.updateAttribute(o)});let i=2;((r=this.attributes.index)==null?void 0:r.type)===this.gl.UNSIGNED_INT&&(i=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(n,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*i,this.instancedCount):this.gl.renderer.drawArraysInstanced(n,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(n,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*i):this.gl.drawArrays(n,this.drawRange.start,this.drawRange.count)}getPosition(){const e=this.attributes.position;if(e.data)return e;if(!Xp)return console.warn("No position buffer data found to compute bounds"),Xp=!0}computeBoundingBox(e){e||(e=this.getPosition());const n=e.data,i=e.size;this.bounds||(this.bounds={min:new Un,max:new Un,center:new Un,scale:new Un,radius:1/0});const r=this.bounds.min,a=this.bounds.max,s=this.bounds.center,o=this.bounds.scale;r.set(1/0),a.set(-1/0);for(let l=0,c=n.length;l<c;l+=i){const d=n[l],f=n[l+1],p=n[l+2];r.x=Math.min(d,r.x),r.y=Math.min(f,r.y),r.z=Math.min(p,r.z),a.x=Math.max(d,a.x),a.y=Math.max(f,a.y),a.z=Math.max(p,a.z)}o.sub(a,r),s.add(r,a).divide(2)}computeBoundingSphere(e){e||(e=this.getPosition());const n=e.data,i=e.size;this.bounds||this.computeBoundingBox(e);let r=0;for(let a=0,s=n.length;a<s;a+=i)Wp.fromArray(n,a),r=Math.max(r,this.bounds.center.squaredDistance(Wp));this.bounds.radius=Math.sqrt(r)}remove(){for(let e in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[e]),delete this.VAOs[e];for(let e in this.attributes)this.gl.deleteBuffer(this.attributes[e].buffer),delete this.attributes[e]}}let Eb=1;const qp={};class Cb{constructor(e,{vertex:n,fragment:i,uniforms:r={},transparent:a=!1,cullFace:s=e.BACK,frontFace:o=e.CCW,depthTest:l=!0,depthWrite:c=!0,depthFunc:d=e.LEQUAL}={}){e.canvas||console.error("gl not passed as first argument to Program"),this.gl=e,this.uniforms=r,this.id=Eb++,n||console.warn("vertex shader not supplied"),i||console.warn("fragment shader not supplied"),this.transparent=a,this.cullFace=s,this.frontFace=o,this.depthTest=l,this.depthWrite=c,this.depthFunc=d,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=e.createShader(e.VERTEX_SHADER),this.fragmentShader=e.createShader(e.FRAGMENT_SHADER),this.program=e.createProgram(),e.attachShader(this.program,this.vertexShader),e.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:n,fragment:i})}setShaders({vertex:e,fragment:n}){if(e&&(this.gl.shaderSource(this.vertexShader,e),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${$p(e)}`)),n&&(this.gl.shaderSource(this.fragmentShader,n),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${$p(n)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let i=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let s=0;s<i;s++){let o=this.gl.getActiveUniform(this.program,s);this.uniformLocations.set(o,this.gl.getUniformLocation(this.program,o.name));const l=o.name.match(/(\w+)/g);o.uniformName=l[0],o.nameComponents=l.slice(1)}this.attributeLocations=new Map;const r=[],a=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let s=0;s<a;s++){const o=this.gl.getActiveAttrib(this.program,s),l=this.gl.getAttribLocation(this.program,o.name);l!==-1&&(r[l]=o.name,this.attributeLocations.set(o,l))}this.attributeOrder=r.join("")}setBlendFunc(e,n,i,r){this.blendFunc.src=e,this.blendFunc.dst=n,this.blendFunc.srcAlpha=i,this.blendFunc.dstAlpha=r,e&&(this.transparent=!0)}setBlendEquation(e,n){this.blendEquation.modeRGB=e,this.blendEquation.modeAlpha=n}setStencilFunc(e,n,i){this.stencilRef=n,this.stencilFunc.func=e,this.stencilFunc.ref=n,this.stencilFunc.mask=i}setStencilOp(e,n,i){this.stencilOp.stencilFail=e,this.stencilOp.depthFail=n,this.stencilOp.depthPass=i}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:e=!1}={}){let n=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((r,a)=>{let s=this.uniforms[a.uniformName];for(const o of a.nameComponents){if(!s)break;if(o in s)s=s[o];else{if(Array.isArray(s.value))break;s=void 0;break}}if(!s)return Yp(`Active uniform ${a.name} has not been supplied`);if(s&&s.value===void 0)return Yp(`${a.name} uniform is missing a value parameter`);if(s.value.texture)return n=n+1,s.value.update(n),Yc(this.gl,a.type,r,n);if(s.value.length&&s.value[0].texture){const o=[];return s.value.forEach(l=>{n=n+1,l.update(n),o.push(n)}),Yc(this.gl,a.type,r,o)}Yc(this.gl,a.type,r,s.value)}),this.applyState(),e&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function Yc(t,e,n,i){i=i.length?Tb(i):i;const r=t.renderer.state.uniformLocations.get(n);if(i.length)if(r===void 0||r.length!==i.length)t.renderer.state.uniformLocations.set(n,i.slice(0));else{if(Ab(r,i))return;r.set?r.set(i):Rb(r,i),t.renderer.state.uniformLocations.set(n,r)}else{if(r===i)return;t.renderer.state.uniformLocations.set(n,i)}switch(e){case 5126:return i.length?t.uniform1fv(n,i):t.uniform1f(n,i);case 35664:return t.uniform2fv(n,i);case 35665:return t.uniform3fv(n,i);case 35666:return t.uniform4fv(n,i);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return i.length?t.uniform1iv(n,i):t.uniform1i(n,i);case 35671:case 35667:return t.uniform2iv(n,i);case 35672:case 35668:return t.uniform3iv(n,i);case 35673:case 35669:return t.uniform4iv(n,i);case 35674:return t.uniformMatrix2fv(n,!1,i);case 35675:return t.uniformMatrix3fv(n,!1,i);case 35676:return t.uniformMatrix4fv(n,!1,i)}}function $p(t){let e=t.split(`
`);for(let n=0;n<e.length;n++)e[n]=n+1+": "+e[n];return e.join(`
`)}function Tb(t){const e=t.length,n=t[0].length;if(n===void 0)return t;const i=e*n;let r=qp[i];r||(qp[i]=r=new Float32Array(i));for(let a=0;a<e;a++)r.set(t[a],a*n);return r}function Ab(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Rb(t,e){for(let n=0,i=t.length;n<i;n++)t[n]=e[n]}let Kc=0;function Yp(t){Kc>100||(console.warn(t),Kc++,Kc>100&&console.warn("More than 100 program warnings - stopping logs."))}const Zc=new Un;let Pb=1;class Nb{constructor({canvas:e=document.createElement("canvas"),width:n=300,height:i=150,dpr:r=1,alpha:a=!1,depth:s=!0,stencil:o=!1,antialias:l=!1,premultipliedAlpha:c=!1,preserveDrawingBuffer:d=!1,powerPreference:f="default",autoClear:p=!0,webgl:g=2}={}){const y={alpha:a,depth:s,stencil:o,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:d,powerPreference:f};this.dpr=r,this.alpha=a,this.color=!0,this.depth=s,this.stencil=o,this.premultipliedAlpha=c,this.autoClear=p,this.id=Pb++,g===2&&(this.gl=e.getContext("webgl2",y)),this.isWebgl2=!!this.gl,this.gl||(this.gl=e.getContext("webgl",y)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(n,i),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(e,n){this.width=e,this.height=n,this.gl.canvas.width=e*this.dpr,this.gl.canvas.height=n*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:e+"px",height:n+"px"})}setViewport(e,n,i=0,r=0){this.state.viewport.width===e&&this.state.viewport.height===n||(this.state.viewport.width=e,this.state.viewport.height=n,this.state.viewport.x=i,this.state.viewport.y=r,this.gl.viewport(i,r,e,n))}setScissor(e,n,i=0,r=0){this.gl.scissor(i,r,e,n)}enable(e){this.state[e]!==!0&&(this.gl.enable(e),this.state[e]=!0)}disable(e){this.state[e]!==!1&&(this.gl.disable(e),this.state[e]=!1)}setBlendFunc(e,n,i,r){this.state.blendFunc.src===e&&this.state.blendFunc.dst===n&&this.state.blendFunc.srcAlpha===i&&this.state.blendFunc.dstAlpha===r||(this.state.blendFunc.src=e,this.state.blendFunc.dst=n,this.state.blendFunc.srcAlpha=i,this.state.blendFunc.dstAlpha=r,i!==void 0?this.gl.blendFuncSeparate(e,n,i,r):this.gl.blendFunc(e,n))}setBlendEquation(e,n){e=e||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===e&&this.state.blendEquation.modeAlpha===n)&&(this.state.blendEquation.modeRGB=e,this.state.blendEquation.modeAlpha=n,n!==void 0?this.gl.blendEquationSeparate(e,n):this.gl.blendEquation(e))}setCullFace(e){this.state.cullFace!==e&&(this.state.cullFace=e,this.gl.cullFace(e))}setFrontFace(e){this.state.frontFace!==e&&(this.state.frontFace=e,this.gl.frontFace(e))}setDepthMask(e){this.state.depthMask!==e&&(this.state.depthMask=e,this.gl.depthMask(e))}setDepthFunc(e){this.state.depthFunc!==e&&(this.state.depthFunc=e,this.gl.depthFunc(e))}setStencilMask(e){this.state.stencilMask!==e&&(this.state.stencilMask=e,this.gl.stencilMask(e))}setStencilFunc(e,n,i){this.state.stencilFunc===e&&this.state.stencilRef===n&&this.state.stencilFuncMask===i||(this.state.stencilFunc=e||this.gl.ALWAYS,this.state.stencilRef=n||0,this.state.stencilFuncMask=i||0,this.gl.stencilFunc(e||this.gl.ALWAYS,n||0,i||0))}setStencilOp(e,n,i){this.state.stencilFail===e&&this.state.stencilDepthFail===n&&this.state.stencilDepthPass===i||(this.state.stencilFail=e,this.state.stencilDepthFail=n,this.state.stencilDepthPass=i,this.gl.stencilOp(e,n,i))}activeTexture(e){this.state.activeTextureUnit!==e&&(this.state.activeTextureUnit=e,this.gl.activeTexture(this.gl.TEXTURE0+e))}bindFramebuffer({target:e=this.gl.FRAMEBUFFER,buffer:n=null}={}){this.state.framebuffer!==n&&(this.state.framebuffer=n,this.gl.bindFramebuffer(e,n))}getExtension(e,n,i){return n&&this.gl[n]?this.gl[n].bind(this.gl):(this.extensions[e]||(this.extensions[e]=this.gl.getExtension(e)),n?this.extensions[e]?this.extensions[e][i].bind(this.extensions[e]):null:this.extensions[e])}sortOpaque(e,n){return e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.program.id!==n.program.id?e.program.id-n.program.id:e.zDepth!==n.zDepth?e.zDepth-n.zDepth:n.id-e.id}sortTransparent(e,n){return e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.zDepth!==n.zDepth?n.zDepth-e.zDepth:n.id-e.id}sortUI(e,n){return e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.program.id!==n.program.id?e.program.id-n.program.id:n.id-e.id}getRenderList({scene:e,camera:n,frustumCull:i,sort:r}){let a=[];if(n&&i&&n.updateFrustum(),e.traverse(s=>{if(!s.visible)return!0;s.draw&&(i&&s.frustumCulled&&n&&!n.frustumIntersectsMesh(s)||a.push(s))}),r){const s=[],o=[],l=[];a.forEach(c=>{c.program.transparent?c.program.depthTest?o.push(c):l.push(c):s.push(c),c.zDepth=0,!(c.renderOrder!==0||!c.program.depthTest||!n)&&(c.worldMatrix.getTranslation(Zc),Zc.applyMatrix4(n.projectionViewMatrix),c.zDepth=Zc.z)}),s.sort(this.sortOpaque),o.sort(this.sortTransparent),l.sort(this.sortUI),a=s.concat(o,l)}return a}render({scene:e,camera:n,target:i=null,update:r=!0,sort:a=!0,frustumCull:s=!0,clear:o}){i===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(i),this.setViewport(i.width,i.height)),(o||this.autoClear&&o!==!1)&&(this.depth&&(!i||i.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!i||i.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),r&&e.updateMatrixWorld(),n&&n.updateMatrixWorld(),this.getRenderList({scene:e,camera:n,frustumCull:s,sort:a}).forEach(c=>{c.draw({camera:n})})}}function Ib(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function Db(t,e,n,i,r){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t}function Lb(t,e){let n=e[0],i=e[1],r=e[2],a=e[3],s=n*n+i*i+r*r+a*a;return s>0&&(s=1/Math.sqrt(s)),t[0]=n*s,t[1]=i*s,t[2]=r*s,t[3]=a*s,t}function Ub(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]}function kb(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function Fb(t,e,n){n=n*.5;let i=Math.sin(n);return t[0]=i*e[0],t[1]=i*e[1],t[2]=i*e[2],t[3]=Math.cos(n),t}function Kp(t,e,n){let i=e[0],r=e[1],a=e[2],s=e[3],o=n[0],l=n[1],c=n[2],d=n[3];return t[0]=i*d+s*o+r*c-a*l,t[1]=r*d+s*l+a*o-i*c,t[2]=a*d+s*c+i*l-r*o,t[3]=s*d-i*o-r*l-a*c,t}function Ob(t,e,n){n*=.5;let i=e[0],r=e[1],a=e[2],s=e[3],o=Math.sin(n),l=Math.cos(n);return t[0]=i*l+s*o,t[1]=r*l+a*o,t[2]=a*l-r*o,t[3]=s*l-i*o,t}function zb(t,e,n){n*=.5;let i=e[0],r=e[1],a=e[2],s=e[3],o=Math.sin(n),l=Math.cos(n);return t[0]=i*l-a*o,t[1]=r*l+s*o,t[2]=a*l+i*o,t[3]=s*l-r*o,t}function Bb(t,e,n){n*=.5;let i=e[0],r=e[1],a=e[2],s=e[3],o=Math.sin(n),l=Math.cos(n);return t[0]=i*l+r*o,t[1]=r*l-i*o,t[2]=a*l+s*o,t[3]=s*l-a*o,t}function Vb(t,e,n,i){let r=e[0],a=e[1],s=e[2],o=e[3],l=n[0],c=n[1],d=n[2],f=n[3],p,g,y,_,m;return g=r*l+a*c+s*d+o*f,g<0&&(g=-g,l=-l,c=-c,d=-d,f=-f),1-g>1e-6?(p=Math.acos(g),y=Math.sin(p),_=Math.sin((1-i)*p)/y,m=Math.sin(i*p)/y):(_=1-i,m=i),t[0]=_*r+m*l,t[1]=_*a+m*c,t[2]=_*s+m*d,t[3]=_*o+m*f,t}function jb(t,e){let n=e[0],i=e[1],r=e[2],a=e[3],s=n*n+i*i+r*r+a*a,o=s?1/s:0;return t[0]=-n*o,t[1]=-i*o,t[2]=-r*o,t[3]=a*o,t}function Hb(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function Gb(t,e){let n=e[0]+e[4]+e[8],i;if(n>0)i=Math.sqrt(n+1),t[3]=.5*i,i=.5/i,t[0]=(e[5]-e[7])*i,t[1]=(e[6]-e[2])*i,t[2]=(e[1]-e[3])*i;else{let r=0;e[4]>e[0]&&(r=1),e[8]>e[r*3+r]&&(r=2);let a=(r+1)%3,s=(r+2)%3;i=Math.sqrt(e[r*3+r]-e[a*3+a]-e[s*3+s]+1),t[r]=.5*i,i=.5/i,t[3]=(e[a*3+s]-e[s*3+a])*i,t[a]=(e[a*3+r]+e[r*3+a])*i,t[s]=(e[s*3+r]+e[r*3+s])*i}return t}function Wb(t,e,n="YXZ"){let i=Math.sin(e[0]*.5),r=Math.cos(e[0]*.5),a=Math.sin(e[1]*.5),s=Math.cos(e[1]*.5),o=Math.sin(e[2]*.5),l=Math.cos(e[2]*.5);return n==="XYZ"?(t[0]=i*s*l+r*a*o,t[1]=r*a*l-i*s*o,t[2]=r*s*o+i*a*l,t[3]=r*s*l-i*a*o):n==="YXZ"?(t[0]=i*s*l+r*a*o,t[1]=r*a*l-i*s*o,t[2]=r*s*o-i*a*l,t[3]=r*s*l+i*a*o):n==="ZXY"?(t[0]=i*s*l-r*a*o,t[1]=r*a*l+i*s*o,t[2]=r*s*o+i*a*l,t[3]=r*s*l-i*a*o):n==="ZYX"?(t[0]=i*s*l-r*a*o,t[1]=r*a*l+i*s*o,t[2]=r*s*o-i*a*l,t[3]=r*s*l+i*a*o):n==="YZX"?(t[0]=i*s*l+r*a*o,t[1]=r*a*l+i*s*o,t[2]=r*s*o-i*a*l,t[3]=r*s*l-i*a*o):n==="XZY"&&(t[0]=i*s*l-r*a*o,t[1]=r*a*l-i*s*o,t[2]=r*s*o+i*a*l,t[3]=r*s*l+i*a*o),t}const Xb=Ib,qb=Db,$b=Ub,Yb=Lb;class Kb extends Array{constructor(e=0,n=0,i=0,r=1){super(e,n,i,r),this.onChange=()=>{},this._target=this;const a=["0","1","2","3"];return new Proxy(this,{set(s,o){const l=Reflect.set(...arguments);return l&&a.includes(o)&&s.onChange(),l}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set w(e){this._target[3]=e,this.onChange()}identity(){return kb(this._target),this.onChange(),this}set(e,n,i,r){return e.length?this.copy(e):(qb(this._target,e,n,i,r),this.onChange(),this)}rotateX(e){return Ob(this._target,this._target,e),this.onChange(),this}rotateY(e){return zb(this._target,this._target,e),this.onChange(),this}rotateZ(e){return Bb(this._target,this._target,e),this.onChange(),this}inverse(e=this._target){return jb(this._target,e),this.onChange(),this}conjugate(e=this._target){return Hb(this._target,e),this.onChange(),this}copy(e){return Xb(this._target,e),this.onChange(),this}normalize(e=this._target){return Yb(this._target,e),this.onChange(),this}multiply(e,n){return n?Kp(this._target,e,n):Kp(this._target,this._target,e),this.onChange(),this}dot(e){return $b(this._target,e)}fromMatrix3(e){return Gb(this._target,e),this.onChange(),this}fromEuler(e,n){return Wb(this._target,e,e.order),n||this.onChange(),this}fromAxisAngle(e,n){return Fb(this._target,e,n),this.onChange(),this}slerp(e,n){return Vb(this._target,this._target,e,n),this.onChange(),this}fromArray(e,n=0){return this._target[0]=e[n],this._target[1]=e[n+1],this._target[2]=e[n+2],this._target[3]=e[n+3],this.onChange(),this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e[n+3]=this[3],e}}const Zb=1e-6;function Qb(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function Jb(t,e,n,i,r,a,s,o,l,c,d,f,p,g,y,_,m){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t[4]=a,t[5]=s,t[6]=o,t[7]=l,t[8]=c,t[9]=d,t[10]=f,t[11]=p,t[12]=g,t[13]=y,t[14]=_,t[15]=m,t}function ew(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function tw(t,e){let n=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],p=e[10],g=e[11],y=e[12],_=e[13],m=e[14],h=e[15],v=n*o-i*s,x=n*l-r*s,M=n*c-a*s,P=i*l-r*o,C=i*c-a*o,w=r*c-a*l,E=d*_-f*y,S=d*m-p*y,b=d*h-g*y,R=f*m-p*_,z=f*h-g*_,F=p*h-g*m,B=v*F-x*z+M*R+P*b-C*S+w*E;return B?(B=1/B,t[0]=(o*F-l*z+c*R)*B,t[1]=(r*z-i*F-a*R)*B,t[2]=(_*w-m*C+h*P)*B,t[3]=(p*C-f*w-g*P)*B,t[4]=(l*b-s*F-c*S)*B,t[5]=(n*F-r*b+a*S)*B,t[6]=(m*M-y*w-h*x)*B,t[7]=(d*w-p*M+g*x)*B,t[8]=(s*z-o*b+c*E)*B,t[9]=(i*b-n*z-a*E)*B,t[10]=(y*C-_*M+h*v)*B,t[11]=(f*M-d*C-g*v)*B,t[12]=(o*S-s*R-l*E)*B,t[13]=(n*R-i*S+r*E)*B,t[14]=(_*x-y*P-m*v)*B,t[15]=(d*P-f*x+p*v)*B,t):null}function Lv(t){let e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],s=t[5],o=t[6],l=t[7],c=t[8],d=t[9],f=t[10],p=t[11],g=t[12],y=t[13],_=t[14],m=t[15],h=e*s-n*a,v=e*o-i*a,x=e*l-r*a,M=n*o-i*s,P=n*l-r*s,C=i*l-r*o,w=c*y-d*g,E=c*_-f*g,S=c*m-p*g,b=d*_-f*y,R=d*m-p*y,z=f*m-p*_;return h*z-v*R+x*b+M*S-P*E+C*w}function Zp(t,e,n){let i=e[0],r=e[1],a=e[2],s=e[3],o=e[4],l=e[5],c=e[6],d=e[7],f=e[8],p=e[9],g=e[10],y=e[11],_=e[12],m=e[13],h=e[14],v=e[15],x=n[0],M=n[1],P=n[2],C=n[3];return t[0]=x*i+M*o+P*f+C*_,t[1]=x*r+M*l+P*p+C*m,t[2]=x*a+M*c+P*g+C*h,t[3]=x*s+M*d+P*y+C*v,x=n[4],M=n[5],P=n[6],C=n[7],t[4]=x*i+M*o+P*f+C*_,t[5]=x*r+M*l+P*p+C*m,t[6]=x*a+M*c+P*g+C*h,t[7]=x*s+M*d+P*y+C*v,x=n[8],M=n[9],P=n[10],C=n[11],t[8]=x*i+M*o+P*f+C*_,t[9]=x*r+M*l+P*p+C*m,t[10]=x*a+M*c+P*g+C*h,t[11]=x*s+M*d+P*y+C*v,x=n[12],M=n[13],P=n[14],C=n[15],t[12]=x*i+M*o+P*f+C*_,t[13]=x*r+M*l+P*p+C*m,t[14]=x*a+M*c+P*g+C*h,t[15]=x*s+M*d+P*y+C*v,t}function nw(t,e,n){let i=n[0],r=n[1],a=n[2],s,o,l,c,d,f,p,g,y,_,m,h;return e===t?(t[12]=e[0]*i+e[4]*r+e[8]*a+e[12],t[13]=e[1]*i+e[5]*r+e[9]*a+e[13],t[14]=e[2]*i+e[6]*r+e[10]*a+e[14],t[15]=e[3]*i+e[7]*r+e[11]*a+e[15]):(s=e[0],o=e[1],l=e[2],c=e[3],d=e[4],f=e[5],p=e[6],g=e[7],y=e[8],_=e[9],m=e[10],h=e[11],t[0]=s,t[1]=o,t[2]=l,t[3]=c,t[4]=d,t[5]=f,t[6]=p,t[7]=g,t[8]=y,t[9]=_,t[10]=m,t[11]=h,t[12]=s*i+d*r+y*a+e[12],t[13]=o*i+f*r+_*a+e[13],t[14]=l*i+p*r+m*a+e[14],t[15]=c*i+g*r+h*a+e[15]),t}function iw(t,e,n){let i=n[0],r=n[1],a=n[2];return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t[3]=e[3]*i,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*a,t[9]=e[9]*a,t[10]=e[10]*a,t[11]=e[11]*a,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function rw(t,e,n,i){let r=i[0],a=i[1],s=i[2],o=Math.hypot(r,a,s),l,c,d,f,p,g,y,_,m,h,v,x,M,P,C,w,E,S,b,R,z,F,B,G;return Math.abs(o)<Zb?null:(o=1/o,r*=o,a*=o,s*=o,l=Math.sin(n),c=Math.cos(n),d=1-c,f=e[0],p=e[1],g=e[2],y=e[3],_=e[4],m=e[5],h=e[6],v=e[7],x=e[8],M=e[9],P=e[10],C=e[11],w=r*r*d+c,E=a*r*d+s*l,S=s*r*d-a*l,b=r*a*d-s*l,R=a*a*d+c,z=s*a*d+r*l,F=r*s*d+a*l,B=a*s*d-r*l,G=s*s*d+c,t[0]=f*w+_*E+x*S,t[1]=p*w+m*E+M*S,t[2]=g*w+h*E+P*S,t[3]=y*w+v*E+C*S,t[4]=f*b+_*R+x*z,t[5]=p*b+m*R+M*z,t[6]=g*b+h*R+P*z,t[7]=y*b+v*R+C*z,t[8]=f*F+_*B+x*G,t[9]=p*F+m*B+M*G,t[10]=g*F+h*B+P*G,t[11]=y*F+v*B+C*G,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}function aw(t,e){return t[0]=e[12],t[1]=e[13],t[2]=e[14],t}function Uv(t,e){let n=e[0],i=e[1],r=e[2],a=e[4],s=e[5],o=e[6],l=e[8],c=e[9],d=e[10];return t[0]=Math.hypot(n,i,r),t[1]=Math.hypot(a,s,o),t[2]=Math.hypot(l,c,d),t}function sw(t){let e=t[0],n=t[1],i=t[2],r=t[4],a=t[5],s=t[6],o=t[8],l=t[9],c=t[10];const d=e*e+n*n+i*i,f=r*r+a*a+s*s,p=o*o+l*l+c*c;return Math.sqrt(Math.max(d,f,p))}const kv=function(){const t=[1,1,1];return function(e,n){let i=t;Uv(i,n);let r=1/i[0],a=1/i[1],s=1/i[2],o=n[0]*r,l=n[1]*a,c=n[2]*s,d=n[4]*r,f=n[5]*a,p=n[6]*s,g=n[8]*r,y=n[9]*a,_=n[10]*s,m=o+f+_,h=0;return m>0?(h=Math.sqrt(m+1)*2,e[3]=.25*h,e[0]=(p-y)/h,e[1]=(g-c)/h,e[2]=(l-d)/h):o>f&&o>_?(h=Math.sqrt(1+o-f-_)*2,e[3]=(p-y)/h,e[0]=.25*h,e[1]=(l+d)/h,e[2]=(g+c)/h):f>_?(h=Math.sqrt(1+f-o-_)*2,e[3]=(g-c)/h,e[0]=(l+d)/h,e[1]=.25*h,e[2]=(p+y)/h):(h=Math.sqrt(1+_-o-f)*2,e[3]=(l-d)/h,e[0]=(g+c)/h,e[1]=(p+y)/h,e[2]=.25*h),e}}();function ow(t,e,n,i){let r=xs([t[0],t[1],t[2]]);const a=xs([t[4],t[5],t[6]]),s=xs([t[8],t[9],t[10]]);Lv(t)<0&&(r=-r),n[0]=t[12],n[1]=t[13],n[2]=t[14];const l=t.slice(),c=1/r,d=1/a,f=1/s;l[0]*=c,l[1]*=c,l[2]*=c,l[4]*=d,l[5]*=d,l[6]*=d,l[8]*=f,l[9]*=f,l[10]*=f,kv(e,l),i[0]=r,i[1]=a,i[2]=s}function lw(t,e,n,i){const r=t,a=e[0],s=e[1],o=e[2],l=e[3],c=a+a,d=s+s,f=o+o,p=a*c,g=a*d,y=a*f,_=s*d,m=s*f,h=o*f,v=l*c,x=l*d,M=l*f,P=i[0],C=i[1],w=i[2];return r[0]=(1-(_+h))*P,r[1]=(g+M)*P,r[2]=(y-x)*P,r[3]=0,r[4]=(g-M)*C,r[5]=(1-(p+h))*C,r[6]=(m+v)*C,r[7]=0,r[8]=(y+x)*w,r[9]=(m-v)*w,r[10]=(1-(p+_))*w,r[11]=0,r[12]=n[0],r[13]=n[1],r[14]=n[2],r[15]=1,r}function cw(t,e){let n=e[0],i=e[1],r=e[2],a=e[3],s=n+n,o=i+i,l=r+r,c=n*s,d=i*s,f=i*o,p=r*s,g=r*o,y=r*l,_=a*s,m=a*o,h=a*l;return t[0]=1-f-y,t[1]=d+h,t[2]=p-m,t[3]=0,t[4]=d-h,t[5]=1-c-y,t[6]=g+_,t[7]=0,t[8]=p+m,t[9]=g-_,t[10]=1-c-f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function uw(t,e,n,i,r){let a=1/Math.tan(e/2),s=1/(i-r);return t[0]=a/n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(r+i)*s,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*r*i*s,t[15]=0,t}function dw(t,e,n,i,r,a,s){let o=1/(e-n),l=1/(i-r),c=1/(a-s);return t[0]=-2*o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*l,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*c,t[11]=0,t[12]=(e+n)*o,t[13]=(r+i)*l,t[14]=(s+a)*c,t[15]=1,t}function hw(t,e,n,i){let r=e[0],a=e[1],s=e[2],o=i[0],l=i[1],c=i[2],d=r-n[0],f=a-n[1],p=s-n[2],g=d*d+f*f+p*p;g===0?p=1:(g=1/Math.sqrt(g),d*=g,f*=g,p*=g);let y=l*p-c*f,_=c*d-o*p,m=o*f-l*d;return g=y*y+_*_+m*m,g===0&&(c?o+=1e-6:l?c+=1e-6:l+=1e-6,y=l*p-c*f,_=c*d-o*p,m=o*f-l*d,g=y*y+_*_+m*m),g=1/Math.sqrt(g),y*=g,_*=g,m*=g,t[0]=y,t[1]=_,t[2]=m,t[3]=0,t[4]=f*m-p*_,t[5]=p*y-d*m,t[6]=d*_-f*y,t[7]=0,t[8]=d,t[9]=f,t[10]=p,t[11]=0,t[12]=r,t[13]=a,t[14]=s,t[15]=1,t}function Qp(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t[3]=e[3]+n[3],t[4]=e[4]+n[4],t[5]=e[5]+n[5],t[6]=e[6]+n[6],t[7]=e[7]+n[7],t[8]=e[8]+n[8],t[9]=e[9]+n[9],t[10]=e[10]+n[10],t[11]=e[11]+n[11],t[12]=e[12]+n[12],t[13]=e[13]+n[13],t[14]=e[14]+n[14],t[15]=e[15]+n[15],t}function Jp(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t[3]=e[3]-n[3],t[4]=e[4]-n[4],t[5]=e[5]-n[5],t[6]=e[6]-n[6],t[7]=e[7]-n[7],t[8]=e[8]-n[8],t[9]=e[9]-n[9],t[10]=e[10]-n[10],t[11]=e[11]-n[11],t[12]=e[12]-n[12],t[13]=e[13]-n[13],t[14]=e[14]-n[14],t[15]=e[15]-n[15],t}function fw(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*n,t[9]=e[9]*n,t[10]=e[10]*n,t[11]=e[11]*n,t[12]=e[12]*n,t[13]=e[13]*n,t[14]=e[14]*n,t[15]=e[15]*n,t}class kl extends Array{constructor(e=1,n=0,i=0,r=0,a=0,s=1,o=0,l=0,c=0,d=0,f=1,p=0,g=0,y=0,_=0,m=1){return super(e,n,i,r,a,s,o,l,c,d,f,p,g,y,_,m),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(e){this[12]=e}set y(e){this[13]=e}set z(e){this[14]=e}set w(e){this[15]=e}set(e,n,i,r,a,s,o,l,c,d,f,p,g,y,_,m){return e.length?this.copy(e):(Jb(this,e,n,i,r,a,s,o,l,c,d,f,p,g,y,_,m),this)}translate(e,n=this){return nw(this,n,e),this}rotate(e,n,i=this){return rw(this,i,e,n),this}scale(e,n=this){return iw(this,n,typeof e=="number"?[e,e,e]:e),this}add(e,n){return n?Qp(this,e,n):Qp(this,this,e),this}sub(e,n){return n?Jp(this,e,n):Jp(this,this,e),this}multiply(e,n){return e.length?n?Zp(this,e,n):Zp(this,this,e):fw(this,this,e),this}identity(){return ew(this),this}copy(e){return Qb(this,e),this}fromPerspective({fov:e,aspect:n,near:i,far:r}={}){return uw(this,e,n,i,r),this}fromOrthogonal({left:e,right:n,bottom:i,top:r,near:a,far:s}){return dw(this,e,n,i,r,a,s),this}fromQuaternion(e){return cw(this,e),this}setPosition(e){return this.x=e[0],this.y=e[1],this.z=e[2],this}inverse(e=this){return tw(this,e),this}compose(e,n,i){return lw(this,e,n,i),this}decompose(e,n,i){return ow(this,e,n,i),this}getRotation(e){return kv(e,this),this}getTranslation(e){return aw(e,this),this}getScaling(e){return Uv(e,this),this}getMaxScaleOnAxis(){return sw(this)}lookAt(e,n,i){return hw(this,e,n,i),this}determinant(){return Lv(this)}fromArray(e,n=0){return this[0]=e[n],this[1]=e[n+1],this[2]=e[n+2],this[3]=e[n+3],this[4]=e[n+4],this[5]=e[n+5],this[6]=e[n+6],this[7]=e[n+7],this[8]=e[n+8],this[9]=e[n+9],this[10]=e[n+10],this[11]=e[n+11],this[12]=e[n+12],this[13]=e[n+13],this[14]=e[n+14],this[15]=e[n+15],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e[n+3]=this[3],e[n+4]=this[4],e[n+5]=this[5],e[n+6]=this[6],e[n+7]=this[7],e[n+8]=this[8],e[n+9]=this[9],e[n+10]=this[10],e[n+11]=this[11],e[n+12]=this[12],e[n+13]=this[13],e[n+14]=this[14],e[n+15]=this[15],e}}function pw(t,e,n="YXZ"){return n==="XYZ"?(t[1]=Math.asin(Math.min(Math.max(e[8],-1),1)),Math.abs(e[8])<.99999?(t[0]=Math.atan2(-e[9],e[10]),t[2]=Math.atan2(-e[4],e[0])):(t[0]=Math.atan2(e[6],e[5]),t[2]=0)):n==="YXZ"?(t[0]=Math.asin(-Math.min(Math.max(e[9],-1),1)),Math.abs(e[9])<.99999?(t[1]=Math.atan2(e[8],e[10]),t[2]=Math.atan2(e[1],e[5])):(t[1]=Math.atan2(-e[2],e[0]),t[2]=0)):n==="ZXY"?(t[0]=Math.asin(Math.min(Math.max(e[6],-1),1)),Math.abs(e[6])<.99999?(t[1]=Math.atan2(-e[2],e[10]),t[2]=Math.atan2(-e[4],e[5])):(t[1]=0,t[2]=Math.atan2(e[1],e[0]))):n==="ZYX"?(t[1]=Math.asin(-Math.min(Math.max(e[2],-1),1)),Math.abs(e[2])<.99999?(t[0]=Math.atan2(e[6],e[10]),t[2]=Math.atan2(e[1],e[0])):(t[0]=0,t[2]=Math.atan2(-e[4],e[5]))):n==="YZX"?(t[2]=Math.asin(Math.min(Math.max(e[1],-1),1)),Math.abs(e[1])<.99999?(t[0]=Math.atan2(-e[9],e[5]),t[1]=Math.atan2(-e[2],e[0])):(t[0]=0,t[1]=Math.atan2(e[8],e[10]))):n==="XZY"&&(t[2]=Math.asin(-Math.min(Math.max(e[4],-1),1)),Math.abs(e[4])<.99999?(t[0]=Math.atan2(e[6],e[5]),t[1]=Math.atan2(e[8],e[0])):(t[0]=Math.atan2(-e[9],e[10]),t[1]=0)),t}const em=new kl;let mw=class extends Array{constructor(e=0,n=e,i=e,r="YXZ"){super(e,n,i),this.order=r,this.onChange=()=>{},this._target=this;const a=["0","1","2"];return new Proxy(this,{set(s,o){const l=Reflect.set(...arguments);return l&&a.includes(o)&&s.onChange(),l}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set(e,n=e,i=e){return e.length?this.copy(e):(this._target[0]=e,this._target[1]=n,this._target[2]=i,this.onChange(),this)}copy(e){return this._target[0]=e[0],this._target[1]=e[1],this._target[2]=e[2],this.onChange(),this}reorder(e){return this._target.order=e,this.onChange(),this}fromRotationMatrix(e,n=this.order){return pw(this._target,e,n),this.onChange(),this}fromQuaternion(e,n=this.order,i){return em.fromQuaternion(e),this._target.fromRotationMatrix(em,n),i||this.onChange(),this}fromArray(e,n=0){return this._target[0]=e[n],this._target[1]=e[n+1],this._target[2]=e[n+2],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e}};class gw{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new kl,this.worldMatrix=new kl,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new Un,this.quaternion=new Kb,this.scale=new Un(1),this.rotation=new mw,this.up=new Un(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(e,n=!0){this.parent&&e!==this.parent&&this.parent.removeChild(this,!1),this.parent=e,n&&e&&e.addChild(this,!1)}addChild(e,n=!0){~this.children.indexOf(e)||this.children.push(e),n&&e.setParent(this,!1)}removeChild(e,n=!0){~this.children.indexOf(e)&&this.children.splice(this.children.indexOf(e),1),n&&e.setParent(null,!1)}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||e)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,e=!0);for(let n=0,i=this.children.length;n<i;n++)this.children[n].updateMatrixWorld(e)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(e){if(!e(this))for(let n=0,i=this.children.length;n<i;n++)this.children[n].traverse(e)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(e,n=!1){n?this.matrix.lookAt(this.position,e,this.up):this.matrix.lookAt(e,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}}function yw(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t}function vw(t,e){let n=e[0],i=e[1],r=e[2],a=e[3],s=n+n,o=i+i,l=r+r,c=n*s,d=i*s,f=i*o,p=r*s,g=r*o,y=r*l,_=a*s,m=a*o,h=a*l;return t[0]=1-f-y,t[3]=d-h,t[6]=p+m,t[1]=d+h,t[4]=1-c-y,t[7]=g-_,t[2]=p-m,t[5]=g+_,t[8]=1-c-f,t}function xw(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function _w(t,e,n,i,r,a,s,o,l,c){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t[4]=a,t[5]=s,t[6]=o,t[7]=l,t[8]=c,t}function Sw(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function bw(t,e){let n=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*s-o*c,p=-d*a+o*l,g=c*a-s*l,y=n*f+i*p+r*g;return y?(y=1/y,t[0]=f*y,t[1]=(-d*i+r*c)*y,t[2]=(o*i-r*s)*y,t[3]=p*y,t[4]=(d*n-r*l)*y,t[5]=(-o*n+r*a)*y,t[6]=g*y,t[7]=(-c*n+i*l)*y,t[8]=(s*n-i*a)*y,t):null}function tm(t,e,n){let i=e[0],r=e[1],a=e[2],s=e[3],o=e[4],l=e[5],c=e[6],d=e[7],f=e[8],p=n[0],g=n[1],y=n[2],_=n[3],m=n[4],h=n[5],v=n[6],x=n[7],M=n[8];return t[0]=p*i+g*s+y*c,t[1]=p*r+g*o+y*d,t[2]=p*a+g*l+y*f,t[3]=_*i+m*s+h*c,t[4]=_*r+m*o+h*d,t[5]=_*a+m*l+h*f,t[6]=v*i+x*s+M*c,t[7]=v*r+x*o+M*d,t[8]=v*a+x*l+M*f,t}function ww(t,e,n){let i=e[0],r=e[1],a=e[2],s=e[3],o=e[4],l=e[5],c=e[6],d=e[7],f=e[8],p=n[0],g=n[1];return t[0]=i,t[1]=r,t[2]=a,t[3]=s,t[4]=o,t[5]=l,t[6]=p*i+g*s+c,t[7]=p*r+g*o+d,t[8]=p*a+g*l+f,t}function Mw(t,e,n){let i=e[0],r=e[1],a=e[2],s=e[3],o=e[4],l=e[5],c=e[6],d=e[7],f=e[8],p=Math.sin(n),g=Math.cos(n);return t[0]=g*i+p*s,t[1]=g*r+p*o,t[2]=g*a+p*l,t[3]=g*s-p*i,t[4]=g*o-p*r,t[5]=g*l-p*a,t[6]=c,t[7]=d,t[8]=f,t}function Ew(t,e,n){let i=n[0],r=n[1];return t[0]=i*e[0],t[1]=i*e[1],t[2]=i*e[2],t[3]=r*e[3],t[4]=r*e[4],t[5]=r*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function Cw(t,e){let n=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],p=e[10],g=e[11],y=e[12],_=e[13],m=e[14],h=e[15],v=n*o-i*s,x=n*l-r*s,M=n*c-a*s,P=i*l-r*o,C=i*c-a*o,w=r*c-a*l,E=d*_-f*y,S=d*m-p*y,b=d*h-g*y,R=f*m-p*_,z=f*h-g*_,F=p*h-g*m,B=v*F-x*z+M*R+P*b-C*S+w*E;return B?(B=1/B,t[0]=(o*F-l*z+c*R)*B,t[1]=(l*b-s*F-c*S)*B,t[2]=(s*z-o*b+c*E)*B,t[3]=(r*z-i*F-a*R)*B,t[4]=(n*F-r*b+a*S)*B,t[5]=(i*b-n*z-a*E)*B,t[6]=(_*w-m*C+h*P)*B,t[7]=(m*M-y*w-h*x)*B,t[8]=(y*C-_*M+h*v)*B,t):null}class Tw extends Array{constructor(e=1,n=0,i=0,r=0,a=1,s=0,o=0,l=0,c=1){return super(e,n,i,r,a,s,o,l,c),this}set(e,n,i,r,a,s,o,l,c){return e.length?this.copy(e):(_w(this,e,n,i,r,a,s,o,l,c),this)}translate(e,n=this){return ww(this,n,e),this}rotate(e,n=this){return Mw(this,n,e),this}scale(e,n=this){return Ew(this,n,e),this}multiply(e,n){return n?tm(this,e,n):tm(this,this,e),this}identity(){return Sw(this),this}copy(e){return xw(this,e),this}fromMatrix4(e){return yw(this,e),this}fromQuaternion(e){return vw(this,e),this}fromBasis(e,n,i){return this.set(e[0],e[1],e[2],n[0],n[1],n[2],i[0],i[1],i[2]),this}inverse(e=this){return bw(this,e),this}getNormalMatrix(e){return Cw(this,e),this}}let Aw=0,Rw=class extends gw{constructor(e,{geometry:n,program:i,mode:r=e.TRIANGLES,frustumCulled:a=!0,renderOrder:s=0}={}){super(),e.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=e,this.id=Aw++,this.geometry=n,this.program=i,this.mode=r,this.frustumCulled=a,this.renderOrder=s,this.modelViewMatrix=new kl,this.normalMatrix=new Tw,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(e){return this.beforeRenderCallbacks.push(e),this}onAfterRender(e){return this.afterRenderCallbacks.push(e),this}draw({camera:e}={}){e&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=e.projectionMatrix,this.program.uniforms.cameraPosition.value=e.worldPosition,this.program.uniforms.viewMatrix.value=e.viewMatrix,this.modelViewMatrix.multiply(e.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:e}));let n=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:n}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:e}))}},Pw=class extends Mb{constructor(e,{attributes:n={}}={}){Object.assign(n,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(e,n)}};const _o=8,Nw=t=>{const e=t.replace("#","").padEnd(6,"0"),n=parseInt(e.slice(0,2),16)/255,i=parseInt(e.slice(2,4),16)/255,r=parseInt(e.slice(4,6),16)/255;return[n,i,r]},Iw=t=>{const e=(t&&t.length?t:["#FF9FFC","#5227FF"]).slice(0,_o);for(e.length===1&&e.push(e[0]);e.length<_o;)e.push(e[e.length-1]);const n=[];for(let r=0;r<_o;r+=1)n.push(Nw(e[r]));const i=Math.max(2,Math.min(_o,(t==null?void 0:t.length)??2));return{arr:n,count:i}},Dw=({className:t,dpr:e,paused:n=!1,gradientColors:i,angle:r=0,noise:a=.3,blindCount:s=16,blindMinWidth:o=60,mouseDampening:l=.15,mirrorGradient:c=!1,spotlightRadius:d=.5,spotlightSoftness:f=1,spotlightOpacity:p=1,distortAmount:g=0,shineDirection:y="left",mixBlendMode:_="lighten"})=>{const m=L.useRef(null),h=L.useRef(null),v=L.useRef(null),x=L.useRef(null),M=L.useRef(null),P=L.useRef(null),C=L.useRef([0,0]),w=L.useRef(0),E=L.useRef(!0);return L.useEffect(()=>{const S=m.current;if(!S)return;const b=new Nb({dpr:e??(typeof window<"u"&&window.devicePixelRatio||1),alpha:!0,antialias:!0});P.current=b;const R=b.gl,z=R.canvas;z.style.width="100%",z.style.height="100%",z.style.display="block",S.appendChild(z);const F=`
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`,B=`
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
`,{arr:G,count:W}=Iw(i),$={iResolution:{value:[R.drawingBufferWidth,R.drawingBufferHeight,1]},iMouse:{value:[0,0]},iTime:{value:0},uAngle:{value:r*Math.PI/180},uNoise:{value:a},uBlindCount:{value:Math.max(1,s)},uSpotlightRadius:{value:d},uSpotlightSoftness:{value:f},uSpotlightOpacity:{value:p},uMirror:{value:c?1:0},uDistort:{value:g},uShineFlip:{value:y==="right"?1:0},uColor0:{value:G[0]},uColor1:{value:G[1]},uColor2:{value:G[2]},uColor3:{value:G[3]},uColor4:{value:G[4]},uColor5:{value:G[5]},uColor6:{value:G[6]},uColor7:{value:G[7]},uColorCount:{value:W}},D=new Cb(R,{vertex:F,fragment:B,uniforms:$});v.current=D;const K=new Pw(R);M.current=K;const Q=new Rw(R,{geometry:K,program:D});x.current=Q;const ae=()=>{const Y=S.getBoundingClientRect();if(b.setSize(Y.width,Y.height),$.iResolution.value=[R.drawingBufferWidth,R.drawingBufferHeight,1],o&&o>0){const ne=Math.max(1,Math.floor(Y.width/o)),se=s?Math.min(s,ne):ne;$.uBlindCount.value=Math.max(1,se)}else $.uBlindCount.value=Math.max(1,s);if(E.current){E.current=!1;const ne=R.drawingBufferWidth/2,se=R.drawingBufferHeight/2;$.iMouse.value=[ne,se],C.current=[ne,se]}};ae();const xe=new ResizeObserver(ae);xe.observe(S);const ue=Y=>{const ne=z.getBoundingClientRect(),se=b.dpr||1,be=(Y.clientX-ne.left)*se,we=(ne.height-(Y.clientY-ne.top))*se;C.current=[be,we],l<=0&&($.iMouse.value=[be,we])};z.addEventListener("pointermove",ue);const V=Y=>{if(h.current=requestAnimationFrame(V),$.iTime.value=Y*.001,l>0){w.current||(w.current=Y);const ne=(Y-w.current)/1e3;w.current=Y;const se=Math.max(1e-4,l);let be=1-Math.exp(-ne/se);be>1&&(be=1);const we=C.current,Ae=$.iMouse.value;Ae[0]+=(we[0]-Ae[0])*be,Ae[1]+=(we[1]-Ae[1])*be}else w.current=Y;if(!n&&v.current&&x.current)try{b.render({scene:x.current})}catch(ne){console.error(ne)}};return h.current=requestAnimationFrame(V),()=>{h.current&&cancelAnimationFrame(h.current),z.removeEventListener("pointermove",ue),xe.disconnect(),z.parentElement===S&&S.removeChild(z);const Y=(ne,se)=>{ne&&typeof ne[se]=="function"&&ne[se].call(ne)};Y(v.current,"remove"),Y(M.current,"remove"),Y(x.current,"remove"),Y(P.current,"destroy"),v.current=null,M.current=null,x.current=null,P.current=null}},[r,s,o,e,g,i,c,l,a,n,y,p,d,f]),u.jsx("div",{ref:m,className:`gradient-blinds-container ${t??""}`,style:{..._&&{mixBlendMode:_}}})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rf="167",Lw=0,nm=1,Uw=2,Fv=1,kw=2,ii=3,Ki=0,nn=1,si=2,Xi=0,ba=1,im=2,rm=3,am=4,Fw=5,pr=100,Ow=101,zw=102,Bw=103,Vw=104,jw=200,Hw=201,Gw=202,Ww=203,Td=204,Ad=205,Xw=206,qw=207,$w=208,Yw=209,Kw=210,Zw=211,Qw=212,Jw=213,eM=214,tM=0,nM=1,iM=2,Fl=3,rM=4,aM=5,sM=6,oM=7,Ov=0,lM=1,cM=2,qi=0,uM=1,dM=2,hM=3,fM=4,pM=5,mM=6,gM=7,zv=300,Da=301,La=302,Rd=303,Pd=304,cc=306,Nd=1e3,xr=1001,Id=1002,Sn=1003,yM=1004,So=1005,Ln=1006,Qc=1007,_r=1008,yi=1009,Bv=1010,Vv=1011,Vs=1012,af=1013,Rr=1014,ci=1015,$s=1016,sf=1017,of=1018,Ua=1020,jv=35902,Hv=1021,Gv=1022,kn=1023,Wv=1024,Xv=1025,wa=1026,ka=1027,qv=1028,lf=1029,$v=1030,cf=1031,uf=1033,rl=33776,al=33777,sl=33778,ol=33779,Dd=35840,Ld=35841,Ud=35842,kd=35843,Fd=36196,Od=37492,zd=37496,Bd=37808,Vd=37809,jd=37810,Hd=37811,Gd=37812,Wd=37813,Xd=37814,qd=37815,$d=37816,Yd=37817,Kd=37818,Zd=37819,Qd=37820,Jd=37821,ll=36492,eh=36494,th=36495,Yv=36283,nh=36284,ih=36285,rh=36286,vM=3200,xM=3201,_M=0,SM=1,Di="",Hn="srgb",tr="srgb-linear",df="display-p3",uc="display-p3-linear",Ol="linear",rt="srgb",zl="rec709",Bl="p3",Or=7680,sm=519,bM=512,wM=513,MM=514,Kv=515,EM=516,CM=517,TM=518,AM=519,om=35044,lm="300 es",ui=2e3,Vl=2001;class ja{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(n);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jc=Math.PI/180,ah=180/Math.PI;function Ys(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[t&255]+Bt[t>>8&255]+Bt[t>>16&255]+Bt[t>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[n&63|128]+Bt[n>>8&255]+"-"+Bt[n>>16&255]+Bt[n>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Zt(t,e,n){return Math.max(e,Math.min(n,t))}function RM(t,e){return(t%e+e)%e}function eu(t,e,n){return(1-n)*t+n*e}function Qa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Yt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class je{constructor(e=0,n=0){je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,n,i,r,a,s,o,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,a,s,o,l,c)}set(e,n,i,r,a,s,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=a,d[5]=l,d[6]=i,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],d=i[4],f=i[7],p=i[2],g=i[5],y=i[8],_=r[0],m=r[3],h=r[6],v=r[1],x=r[4],M=r[7],P=r[2],C=r[5],w=r[8];return a[0]=s*_+o*v+l*P,a[3]=s*m+o*x+l*C,a[6]=s*h+o*M+l*w,a[1]=c*_+d*v+f*P,a[4]=c*m+d*x+f*C,a[7]=c*h+d*M+f*w,a[2]=p*_+g*v+y*P,a[5]=p*m+g*x+y*C,a[8]=p*h+g*M+y*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*s*d-n*o*c-i*a*d+i*o*l+r*a*c-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*s-o*c,p=o*l-d*a,g=c*a-s*l,y=n*f+i*p+r*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/y;return e[0]=f*_,e[1]=(r*c-d*i)*_,e[2]=(o*i-r*s)*_,e[3]=p*_,e[4]=(d*n-r*l)*_,e[5]=(r*a-o*n)*_,e[6]=g*_,e[7]=(i*l-c*n)*_,e[8]=(s*n-i*a)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(tu.makeScale(e,n)),this}rotate(e){return this.premultiply(tu.makeRotation(-e)),this}translate(e,n){return this.premultiply(tu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tu=new Oe;function Zv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function jl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function PM(){const t=jl("canvas");return t.style.display="block",t}const cm={};function _s(t){t in cm||(cm[t]=!0,console.warn(t))}function NM(t,e,n){return new Promise(function(i,r){function a(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}const um=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),dm=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ja={[tr]:{transfer:Ol,primaries:zl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Hn]:{transfer:rt,primaries:zl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[uc]:{transfer:Ol,primaries:Bl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(dm),fromReference:t=>t.applyMatrix3(um)},[df]:{transfer:rt,primaries:Bl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(dm),fromReference:t=>t.applyMatrix3(um).convertLinearToSRGB()}},IM=new Set([tr,uc]),Je={enabled:!0,_workingColorSpace:tr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!IM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ja[e].toReference,r=Ja[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ja[t].primaries},getTransfer:function(t){return t===Di?Ol:Ja[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Ja[e].luminanceCoefficients)}};function Ma(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function nu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let zr;class DM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zr===void 0&&(zr=jl("canvas")),zr.width=e.width,zr.height=e.height;const i=zr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=zr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=jl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Ma(a[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ma(n[i]/255)*255):n[i]=Ma(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let LM=0;class Qv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=Ys(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(iu(r[s].image)):a.push(iu(r[s]))}else a=iu(r);i.url=a}return n||(e.images[this.uuid]=i),i}}function iu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?DM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let UM=0;class rn extends ja{constructor(e=rn.DEFAULT_IMAGE,n=rn.DEFAULT_MAPPING,i=xr,r=xr,a=Ln,s=_r,o=kn,l=yi,c=rn.DEFAULT_ANISOTROPY,d=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=Ys(),this.name="",this.source=new Qv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nd:e.x=e.x-Math.floor(e.x);break;case xr:e.x=e.x<0?0:1;break;case Id:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nd:e.y=e.y-Math.floor(e.y);break;case xr:e.y=e.y<0?0:1;break;case Id:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=zv;rn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,n=0,i=0,r=1){Nt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,a;const l=e.elements,c=l[0],d=l[4],f=l[8],p=l[1],g=l[5],y=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(d-p)<.01&&Math.abs(f-_)<.01&&Math.abs(y-m)<.01){if(Math.abs(d+p)<.1&&Math.abs(f+_)<.1&&Math.abs(y+m)<.1&&Math.abs(c+g+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,M=(g+1)/2,P=(h+1)/2,C=(d+p)/4,w=(f+_)/4,E=(y+m)/4;return x>M&&x>P?x<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(x),r=C/i,a=w/i):M>P?M<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(M),i=C/r,a=E/r):P<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(P),i=w/a,r=E/a),this.set(i,r,a,n),this}let v=Math.sqrt((m-y)*(m-y)+(f-_)*(f-_)+(p-d)*(p-d));return Math.abs(v)<.001&&(v=1),this.x=(m-y)/v,this.y=(f-_)/v,this.z=(p-d)/v,this.w=Math.acos((c+g+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kM extends ja{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Nt(0,0,e,n),this.scissorTest=!1,this.viewport=new Nt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new rn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Qv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pr extends kM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Jv extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class FM extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ks{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,a,s,o){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const p=a[s+0],g=a[s+1],y=a[s+2],_=a[s+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(o===1){e[n+0]=p,e[n+1]=g,e[n+2]=y,e[n+3]=_;return}if(f!==_||l!==p||c!==g||d!==y){let m=1-o;const h=l*p+c*g+d*y+f*_,v=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const P=Math.sqrt(x),C=Math.atan2(P,h*v);m=Math.sin(m*C)/P,o=Math.sin(o*C)/P}const M=o*v;if(l=l*m+p*M,c=c*m+g*M,d=d*m+y*M,f=f*m+_*M,m===1-o){const P=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=P,c*=P,d*=P,f*=P}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,a,s){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=a[s],p=a[s+1],g=a[s+2],y=a[s+3];return e[n]=o*y+d*f+l*g-c*p,e[n+1]=l*y+d*p+c*f-o*g,e[n+2]=c*y+d*g+o*p-l*f,e[n+3]=d*y-o*f-l*p-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),f=o(a/2),p=l(i/2),g=l(r/2),y=l(a/2);switch(s){case"XYZ":this._x=p*d*f+c*g*y,this._y=c*g*f-p*d*y,this._z=c*d*y+p*g*f,this._w=c*d*f-p*g*y;break;case"YXZ":this._x=p*d*f+c*g*y,this._y=c*g*f-p*d*y,this._z=c*d*y-p*g*f,this._w=c*d*f+p*g*y;break;case"ZXY":this._x=p*d*f-c*g*y,this._y=c*g*f+p*d*y,this._z=c*d*y+p*g*f,this._w=c*d*f-p*g*y;break;case"ZYX":this._x=p*d*f-c*g*y,this._y=c*g*f+p*d*y,this._z=c*d*y-p*g*f,this._w=c*d*f+p*g*y;break;case"YZX":this._x=p*d*f+c*g*y,this._y=c*g*f+p*d*y,this._z=c*d*y-p*g*f,this._w=c*d*f-p*g*y;break;case"XZY":this._x=p*d*f-c*g*y,this._y=c*g*f-p*d*y,this._z=c*d*y+p*g*f,this._w=c*d*f+p*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],a=n[8],s=n[1],o=n[5],l=n[9],c=n[2],d=n[6],f=n[10],p=i+o+f;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(d-l)*g,this._y=(a-c)*g,this._z=(s-r)*g}else if(i>o&&i>f){const g=2*Math.sqrt(1+i-o-f);this._w=(d-l)/g,this._x=.25*g,this._y=(r+s)/g,this._z=(a+c)/g}else if(o>f){const g=2*Math.sqrt(1+o-i-f);this._w=(a-c)/g,this._x=(r+s)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+f-i-o);this._w=(s-r)/g,this._x=(a+c)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,a=e._z,s=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+s*o+r*c-a*l,this._y=r*d+s*l+a*o-i*c,this._z=a*d+s*c+i*l-r*o,this._w=s*d-i*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+i*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=r,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-n;return this._w=g*s+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*a+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),f=Math.sin((1-n)*d)/c,p=Math.sin(n*d)/c;return this._w=s*f+this._w*p,this._x=i*f+this._x*p,this._y=r*f+this._y*p,this._z=a*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(n),a*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,n=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(hm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(hm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6]*r,this.y=a[1]*n+a[4]*i+a[7]*r,this.z=a[2]*n+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*n+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*n+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*n+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*i),d=2*(o*n-a*r),f=2*(a*i-s*n);return this.x=n+l*c+s*f-o*d,this.y=i+l*d+o*c-a*f,this.z=r+l*f+a*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r,this.y=a[1]*n+a[5]*i+a[9]*r,this.z=a[2]*n+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,a=e.z,s=n.x,o=n.y,l=n.z;return this.x=r*l-a*o,this.y=a*s-i*l,this.z=i*o-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ru.copy(this).projectOnVector(e),this.sub(ru)}reflect(e){return this.sub(ru.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ru=new H,hm=new Ks;class Zs{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Tn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Tn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Tn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(n===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Tn):Tn.fromBufferAttribute(a,s),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),bo.copy(i.boundingBox)),bo.applyMatrix4(e.matrixWorld),this.union(bo)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(es),wo.subVectors(this.max,es),Br.subVectors(e.a,es),Vr.subVectors(e.b,es),jr.subVectors(e.c,es),wi.subVectors(Vr,Br),Mi.subVectors(jr,Vr),ir.subVectors(Br,jr);let n=[0,-wi.z,wi.y,0,-Mi.z,Mi.y,0,-ir.z,ir.y,wi.z,0,-wi.x,Mi.z,0,-Mi.x,ir.z,0,-ir.x,-wi.y,wi.x,0,-Mi.y,Mi.x,0,-ir.y,ir.x,0];return!au(n,Br,Vr,jr,wo)||(n=[1,0,0,0,1,0,0,0,1],!au(n,Br,Vr,jr,wo))?!1:(Mo.crossVectors(wi,Mi),n=[Mo.x,Mo.y,Mo.z],au(n,Br,Vr,jr,wo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qn=[new H,new H,new H,new H,new H,new H,new H,new H],Tn=new H,bo=new Zs,Br=new H,Vr=new H,jr=new H,wi=new H,Mi=new H,ir=new H,es=new H,wo=new H,Mo=new H,rr=new H;function au(t,e,n,i,r){for(let a=0,s=t.length-3;a<=s;a+=3){rr.fromArray(t,a);const o=r.x*Math.abs(rr.x)+r.y*Math.abs(rr.y)+r.z*Math.abs(rr.z),l=e.dot(rr),c=n.dot(rr),d=i.dot(rr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const OM=new Zs,ts=new H,su=new H;class hf{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):OM.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ts.subVectors(e,this.center);const n=ts.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ts,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(su.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ts.copy(e.center).add(su)),this.expandByPoint(ts.copy(e.center).sub(su))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new H,ou=new H,Eo=new H,Ei=new H,lu=new H,Co=new H,cu=new H;class zM{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Jn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,n),Jn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ou.copy(e).add(n).multiplyScalar(.5),Eo.copy(n).sub(e).normalize(),Ei.copy(this.origin).sub(ou);const a=e.distanceTo(n)*.5,s=-this.direction.dot(Eo),o=Ei.dot(this.direction),l=-Ei.dot(Eo),c=Ei.lengthSq(),d=Math.abs(1-s*s);let f,p,g,y;if(d>0)if(f=s*l-o,p=s*o-l,y=a*d,f>=0)if(p>=-y)if(p<=y){const _=1/d;f*=_,p*=_,g=f*(f+s*p+2*o)+p*(s*f+p+2*l)+c}else p=a,f=Math.max(0,-(s*p+o)),g=-f*f+p*(p+2*l)+c;else p=-a,f=Math.max(0,-(s*p+o)),g=-f*f+p*(p+2*l)+c;else p<=-y?(f=Math.max(0,-(-s*a+o)),p=f>0?-a:Math.min(Math.max(-a,-l),a),g=-f*f+p*(p+2*l)+c):p<=y?(f=0,p=Math.min(Math.max(-a,-l),a),g=p*(p+2*l)+c):(f=Math.max(0,-(s*a+o)),p=f>0?a:Math.min(Math.max(-a,-l),a),g=-f*f+p*(p+2*l)+c);else p=s>0?-a:a,f=Math.max(0,-(s*p+o)),g=-f*f+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ou).addScaledVector(Eo,p),g}intersectSphere(e,n){Jn.subVectors(e.center,this.origin);const i=Jn.dot(this.direction),r=Jn.dot(Jn)-i*i,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,a,s,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),d>=0?(a=(e.min.y-p.y)*d,s=(e.max.y-p.y)*d):(a=(e.max.y-p.y)*d,s=(e.min.y-p.y)*d),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),f>=0?(o=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(o=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,n,i,r,a){lu.subVectors(n,e),Co.subVectors(i,e),cu.crossVectors(lu,Co);let s=this.direction.dot(cu),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Ei.subVectors(this.origin,e);const l=o*this.direction.dot(Co.crossVectors(Ei,Co));if(l<0)return null;const c=o*this.direction.dot(lu.cross(Ei));if(c<0||l+c>s)return null;const d=-o*Ei.dot(cu);return d<0?null:this.at(d/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,n,i,r,a,s,o,l,c,d,f,p,g,y,_,m){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,a,s,o,l,c,d,f,p,g,y,_,m)}set(e,n,i,r,a,s,o,l,c,d,f,p,g,y,_,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=a,h[5]=s,h[9]=o,h[13]=l,h[2]=c,h[6]=d,h[10]=f,h[14]=p,h[3]=g,h[7]=y,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Hr.setFromMatrixColumn(e,0).length(),a=1/Hr.setFromMatrixColumn(e,1).length(),s=1/Hr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const p=s*d,g=s*f,y=o*d,_=o*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=g+y*c,n[5]=p-_*c,n[9]=-o*l,n[2]=_-p*c,n[6]=y+g*c,n[10]=s*l}else if(e.order==="YXZ"){const p=l*d,g=l*f,y=c*d,_=c*f;n[0]=p+_*o,n[4]=y*o-g,n[8]=s*c,n[1]=s*f,n[5]=s*d,n[9]=-o,n[2]=g*o-y,n[6]=_+p*o,n[10]=s*l}else if(e.order==="ZXY"){const p=l*d,g=l*f,y=c*d,_=c*f;n[0]=p-_*o,n[4]=-s*f,n[8]=y+g*o,n[1]=g+y*o,n[5]=s*d,n[9]=_-p*o,n[2]=-s*c,n[6]=o,n[10]=s*l}else if(e.order==="ZYX"){const p=s*d,g=s*f,y=o*d,_=o*f;n[0]=l*d,n[4]=y*c-g,n[8]=p*c+_,n[1]=l*f,n[5]=_*c+p,n[9]=g*c-y,n[2]=-c,n[6]=o*l,n[10]=s*l}else if(e.order==="YZX"){const p=s*l,g=s*c,y=o*l,_=o*c;n[0]=l*d,n[4]=_-p*f,n[8]=y*f+g,n[1]=f,n[5]=s*d,n[9]=-o*d,n[2]=-c*d,n[6]=g*f+y,n[10]=p-_*f}else if(e.order==="XZY"){const p=s*l,g=s*c,y=o*l,_=o*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=p*f+_,n[5]=s*d,n[9]=g*f-y,n[2]=y*f-g,n[6]=o*d,n[10]=_*f+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(BM,e,VM)}lookAt(e,n,i){const r=this.elements;return on.subVectors(e,n),on.lengthSq()===0&&(on.z=1),on.normalize(),Ci.crossVectors(i,on),Ci.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Ci.crossVectors(i,on)),Ci.normalize(),To.crossVectors(on,Ci),r[0]=Ci.x,r[4]=To.x,r[8]=on.x,r[1]=Ci.y,r[5]=To.y,r[9]=on.y,r[2]=Ci.z,r[6]=To.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],d=i[1],f=i[5],p=i[9],g=i[13],y=i[2],_=i[6],m=i[10],h=i[14],v=i[3],x=i[7],M=i[11],P=i[15],C=r[0],w=r[4],E=r[8],S=r[12],b=r[1],R=r[5],z=r[9],F=r[13],B=r[2],G=r[6],W=r[10],$=r[14],D=r[3],K=r[7],Q=r[11],ae=r[15];return a[0]=s*C+o*b+l*B+c*D,a[4]=s*w+o*R+l*G+c*K,a[8]=s*E+o*z+l*W+c*Q,a[12]=s*S+o*F+l*$+c*ae,a[1]=d*C+f*b+p*B+g*D,a[5]=d*w+f*R+p*G+g*K,a[9]=d*E+f*z+p*W+g*Q,a[13]=d*S+f*F+p*$+g*ae,a[2]=y*C+_*b+m*B+h*D,a[6]=y*w+_*R+m*G+h*K,a[10]=y*E+_*z+m*W+h*Q,a[14]=y*S+_*F+m*$+h*ae,a[3]=v*C+x*b+M*B+P*D,a[7]=v*w+x*R+M*G+P*K,a[11]=v*E+x*z+M*W+P*Q,a[15]=v*S+x*F+M*$+P*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],p=e[10],g=e[14],y=e[3],_=e[7],m=e[11],h=e[15];return y*(+a*l*f-r*c*f-a*o*p+i*c*p+r*o*g-i*l*g)+_*(+n*l*g-n*c*p+a*s*p-r*s*g+r*c*d-a*l*d)+m*(+n*c*f-n*o*g-a*s*f+i*s*g+a*o*d-i*c*d)+h*(-r*o*d-n*l*f+n*o*p+r*s*f-i*s*p+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],p=e[10],g=e[11],y=e[12],_=e[13],m=e[14],h=e[15],v=f*m*c-_*p*c+_*l*g-o*m*g-f*l*h+o*p*h,x=y*p*c-d*m*c-y*l*g+s*m*g+d*l*h-s*p*h,M=d*_*c-y*f*c+y*o*g-s*_*g-d*o*h+s*f*h,P=y*f*l-d*_*l-y*o*p+s*_*p+d*o*m-s*f*m,C=n*v+i*x+r*M+a*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=v*w,e[1]=(_*p*a-f*m*a-_*r*g+i*m*g+f*r*h-i*p*h)*w,e[2]=(o*m*a-_*l*a+_*r*c-i*m*c-o*r*h+i*l*h)*w,e[3]=(f*l*a-o*p*a-f*r*c+i*p*c+o*r*g-i*l*g)*w,e[4]=x*w,e[5]=(d*m*a-y*p*a+y*r*g-n*m*g-d*r*h+n*p*h)*w,e[6]=(y*l*a-s*m*a-y*r*c+n*m*c+s*r*h-n*l*h)*w,e[7]=(s*p*a-d*l*a+d*r*c-n*p*c-s*r*g+n*l*g)*w,e[8]=M*w,e[9]=(y*f*a-d*_*a-y*i*g+n*_*g+d*i*h-n*f*h)*w,e[10]=(s*_*a-y*o*a+y*i*c-n*_*c-s*i*h+n*o*h)*w,e[11]=(d*o*a-s*f*a-d*i*c+n*f*c+s*i*g-n*o*g)*w,e[12]=P*w,e[13]=(d*_*r-y*f*r+y*i*p-n*_*p-d*i*m+n*f*m)*w,e[14]=(y*o*r-s*_*r-y*i*l+n*_*l+s*i*m-n*o*m)*w,e[15]=(s*f*r-d*o*r+d*i*l-n*f*l-s*i*p+n*o*p)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,a=e.z;return n[0]*=i,n[4]*=r,n[8]*=a,n[1]*=i,n[5]*=r,n[9]*=a,n[2]*=i,n[6]*=r,n[10]*=a,n[3]*=i,n[7]*=r,n[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),a=1-i,s=e.x,o=e.y,l=e.z,c=a*s,d=a*o;return this.set(c*s+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*s,0,c*l-r*o,d*l+r*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,a=n._x,s=n._y,o=n._z,l=n._w,c=a+a,d=s+s,f=o+o,p=a*c,g=a*d,y=a*f,_=s*d,m=s*f,h=o*f,v=l*c,x=l*d,M=l*f,P=i.x,C=i.y,w=i.z;return r[0]=(1-(_+h))*P,r[1]=(g+M)*P,r[2]=(y-x)*P,r[3]=0,r[4]=(g-M)*C,r[5]=(1-(p+h))*C,r[6]=(m+v)*C,r[7]=0,r[8]=(y+x)*w,r[9]=(m-v)*w,r[10]=(1-(p+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let a=Hr.set(r[0],r[1],r[2]).length();const s=Hr.set(r[4],r[5],r[6]).length(),o=Hr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],An.copy(this);const c=1/a,d=1/s,f=1/o;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=d,An.elements[5]*=d,An.elements[6]*=d,An.elements[8]*=f,An.elements[9]*=f,An.elements[10]*=f,n.setFromRotationMatrix(An),i.x=a,i.y=s,i.z=o,this}makePerspective(e,n,i,r,a,s,o=ui){const l=this.elements,c=2*a/(n-e),d=2*a/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let g,y;if(o===ui)g=-(s+a)/(s-a),y=-2*s*a/(s-a);else if(o===Vl)g=-s/(s-a),y=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,a,s,o=ui){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(s-a),p=(n+e)*c,g=(i+r)*d;let y,_;if(o===ui)y=(s+a)*f,_=-2*f;else if(o===Vl)y=a*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=_,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Hr=new H,An=new Et,BM=new H(0,0,0),VM=new H(1,1,1),Ci=new H,To=new H,on=new H,fm=new Et,pm=new Ks;class vi{constructor(e=0,n=0,i=0,r=vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],d=r[9],f=r[2],p=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Zt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return fm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return pm.setFromEuler(this),this.setFromQuaternion(pm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vi.DEFAULT_ORDER="XYZ";class ex{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jM=0;const mm=new H,Gr=new Ks,ei=new Et,Ao=new H,ns=new H,HM=new H,GM=new Ks,gm=new H(1,0,0),ym=new H(0,1,0),vm=new H(0,0,1),xm={type:"added"},WM={type:"removed"},Wr={type:"childadded",child:null},uu={type:"childremoved",child:null};class hn extends ja{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=Ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new H,n=new vi,i=new Ks,r=new H(1,1,1);function a(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new Oe}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ex,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Gr.setFromAxisAngle(e,n),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(e,n){return Gr.setFromAxisAngle(e,n),this.quaternion.premultiply(Gr),this}rotateX(e){return this.rotateOnAxis(gm,e)}rotateY(e){return this.rotateOnAxis(ym,e)}rotateZ(e){return this.rotateOnAxis(vm,e)}translateOnAxis(e,n){return mm.copy(e).applyQuaternion(this.quaternion),this.position.add(mm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(gm,e)}translateY(e){return this.translateOnAxis(ym,e)}translateZ(e){return this.translateOnAxis(vm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ao.copy(e):Ao.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(ns,Ao,this.up):ei.lookAt(Ao,ns,this.up),this.quaternion.setFromRotationMatrix(ei),r&&(ei.extractRotation(r.matrixWorld),Gr.setFromRotationMatrix(ei),this.quaternion.premultiply(Gr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xm),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(WM),uu.child=e,this.dispatchEvent(uu),uu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xm),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,e,HM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,GM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(n){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),f=s(e.shapes),p=s(e.skeletons),g=s(e.animations),y=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),g.length>0&&(i.animations=g),y.length>0&&(i.nodes=y)}return i.object=r,i;function s(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}hn.DEFAULT_UP=new H(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new H,ti=new H,du=new H,ni=new H,Xr=new H,qr=new H,_m=new H,hu=new H,fu=new H,pu=new H;class Xn{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Rn.subVectors(e,n),r.cross(Rn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,n,i,r,a){Rn.subVectors(r,n),ti.subVectors(i,n),du.subVectors(e,n);const s=Rn.dot(Rn),o=Rn.dot(ti),l=Rn.dot(du),c=ti.dot(ti),d=ti.dot(du),f=s*c-o*o;if(f===0)return a.set(0,0,0),null;const p=1/f,g=(c*l-o*d)*p,y=(s*d-o*l)*p;return a.set(1-g-y,y,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,n,i,r,a,s,o,l){return this.getBarycoord(e,n,i,r,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,ni.x),l.addScaledVector(s,ni.y),l.addScaledVector(o,ni.z),l)}static isFrontFacing(e,n,i,r){return Rn.subVectors(i,n),ti.subVectors(e,n),Rn.cross(ti).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Rn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Xn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,a){return Xn.getInterpolation(e,this.a,this.b,this.c,n,i,r,a)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,a=this.c;let s,o;Xr.subVectors(r,i),qr.subVectors(a,i),hu.subVectors(e,i);const l=Xr.dot(hu),c=qr.dot(hu);if(l<=0&&c<=0)return n.copy(i);fu.subVectors(e,r);const d=Xr.dot(fu),f=qr.dot(fu);if(d>=0&&f<=d)return n.copy(r);const p=l*f-d*c;if(p<=0&&l>=0&&d<=0)return s=l/(l-d),n.copy(i).addScaledVector(Xr,s);pu.subVectors(e,a);const g=Xr.dot(pu),y=qr.dot(pu);if(y>=0&&g<=y)return n.copy(a);const _=g*c-l*y;if(_<=0&&c>=0&&y<=0)return o=c/(c-y),n.copy(i).addScaledVector(qr,o);const m=d*y-g*f;if(m<=0&&f-d>=0&&g-y>=0)return _m.subVectors(a,r),o=(f-d)/(f-d+(g-y)),n.copy(r).addScaledVector(_m,o);const h=1/(m+_+p);return s=_*h,o=p*h,n.copy(i).addScaledVector(Xr,s).addScaledVector(qr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function mu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class tt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=RM(e,1),n=Zt(n,0,1),i=Zt(i,0,1),n===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+n):i+n-i*n,s=2*i-a;this.r=mu(s,a,e+1/3),this.g=mu(s,a,e),this.b=mu(s,a,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=Hn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Hn){const i=tx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ma(e.r),this.g=Ma(e.g),this.b=Ma(e.b),this}copyLinearToSRGB(e){return this.r=nu(e.r),this.g=nu(e.g),this.b=nu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return Je.fromWorkingColorSpace(Vt.copy(this),e),Math.round(Zt(Vt.r*255,0,255))*65536+Math.round(Zt(Vt.g*255,0,255))*256+Math.round(Zt(Vt.b*255,0,255))}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(Vt.copy(this),n);const i=Vt.r,r=Vt.g,a=Vt.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let l,c;const d=(o+s)/2;if(o===s)l=0,c=0;else{const f=s-o;switch(c=d<=.5?f/(s+o):f/(2-s-o),s){case i:l=(r-a)/f+(r<a?6:0);break;case r:l=(a-i)/f+2;break;case a:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(Vt.copy(this),n),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Hn){Je.fromWorkingColorSpace(Vt.copy(this),e);const n=Vt.r,i=Vt.g,r=Vt.b;return e!==Hn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+n,Ti.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ti),e.getHSL(Ro);const i=eu(Ti.h,Ro.h,n),r=eu(Ti.s,Ro.s,n),a=eu(Ti.l,Ro.l,n);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*n+a[3]*i+a[6]*r,this.g=a[1]*n+a[4]*i+a[7]*r,this.b=a[2]*n+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new tt;tt.NAMES=tx;let XM=0;class dc extends ja{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XM++}),this.uuid=Ys(),this.name="",this.type="Material",this.blending=ba,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Td,this.blendDst=Ad,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Fl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ba&&(i.blending=this.blending),this.side!==Ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Td&&(i.blendSrc=this.blendSrc),this.blendDst!==Ad&&(i.blendDst=this.blendDst),this.blendEquation!==pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Or&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Or&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Or&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(n){const a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class nx extends dc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=Ov,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new H,Po=new je;class Kn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=om,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return _s("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Po.fromBufferAttribute(this,n),Po.applyMatrix3(e),this.setXY(n,Po.x,Po.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix3(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix4(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyNormalMatrix(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.transformDirection(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Qa(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Yt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Qa(n,this.array)),n}setX(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Qa(n,this.array)),n}setY(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Qa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Qa(n,this.array)),n}setW(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array),r=Yt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,a){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array),r=Yt(r,this.array),a=Yt(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==om&&(e.usage=this.usage),e}}class ix extends Kn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class rx extends Kn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class wr extends Kn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let qM=0;const yn=new Et,gu=new hn,$r=new H,ln=new Zs,is=new Zs,At=new H;class Ur extends ja{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qM++}),this.uuid=Ys(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zv(e)?rx:ix)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Oe().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,n,i){return yn.makeTranslation(e,n,i),this.applyMatrix4(yn),this}scale(e,n,i){return yn.makeScale(e,n,i),this.applyMatrix4(yn),this}lookAt(e){return gu.lookAt(e),gu.updateMatrix(),this.applyMatrix4(gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new wr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const a=n[i];ln.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),n)for(let a=0,s=n.length;a<s;a++){const o=n[a];is.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(ln.min,is.min),ln.expandByPoint(At),At.addVectors(ln.max,is.max),ln.expandByPoint(At)):(ln.expandByPoint(is.min),ln.expandByPoint(is.max))}ln.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)At.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(At));if(n)for(let a=0,s=n.length;a<s;a++){const o=n[a],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)At.fromBufferAttribute(o,c),l&&($r.fromBufferAttribute(e,c),At.add($r)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,a=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let E=0;E<i.count;E++)o[E]=new H,l[E]=new H;const c=new H,d=new H,f=new H,p=new je,g=new je,y=new je,_=new H,m=new H;function h(E,S,b){c.fromBufferAttribute(i,E),d.fromBufferAttribute(i,S),f.fromBufferAttribute(i,b),p.fromBufferAttribute(a,E),g.fromBufferAttribute(a,S),y.fromBufferAttribute(a,b),d.sub(c),f.sub(c),g.sub(p),y.sub(p);const R=1/(g.x*y.y-y.x*g.y);isFinite(R)&&(_.copy(d).multiplyScalar(y.y).addScaledVector(f,-g.y).multiplyScalar(R),m.copy(f).multiplyScalar(g.x).addScaledVector(d,-y.x).multiplyScalar(R),o[E].add(_),o[S].add(_),o[b].add(_),l[E].add(m),l[S].add(m),l[b].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let E=0,S=v.length;E<S;++E){const b=v[E],R=b.start,z=b.count;for(let F=R,B=R+z;F<B;F+=3)h(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const x=new H,M=new H,P=new H,C=new H;function w(E){P.fromBufferAttribute(r,E),C.copy(P);const S=o[E];x.copy(S),x.sub(P.multiplyScalar(P.dot(S))).normalize(),M.crossVectors(C,S);const R=M.dot(l[E])<0?-1:1;s.setXYZW(E,x.x,x.y,x.z,R)}for(let E=0,S=v.length;E<S;++E){const b=v[E],R=b.start,z=b.count;for(let F=R,B=R+z;F<B;F+=3)w(e.getX(F+0)),w(e.getX(F+1)),w(e.getX(F+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,g=i.count;p<g;p++)i.setXYZ(p,0,0,0);const r=new H,a=new H,s=new H,o=new H,l=new H,c=new H,d=new H,f=new H;if(e)for(let p=0,g=e.count;p<g;p+=3){const y=e.getX(p+0),_=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(n,y),a.fromBufferAttribute(n,_),s.fromBufferAttribute(n,m),d.subVectors(s,a),f.subVectors(r,a),d.cross(f),o.fromBufferAttribute(i,y),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(d),l.add(d),c.add(d),i.setXYZ(y,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,g=n.count;p<g;p+=3)r.fromBufferAttribute(n,p+0),a.fromBufferAttribute(n,p+1),s.fromBufferAttribute(n,p+2),d.subVectors(s,a),f.subVectors(r,a),d.cross(f),i.setXYZ(p+0,d.x,d.y,d.z),i.setXYZ(p+1,d.x,d.y,d.z),i.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)At.fromBufferAttribute(e,n),At.normalize(),e.setXYZ(n,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,p=new c.constructor(l.length*d);let g=0,y=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?g=l[_]*o.data.stride+o.offset:g=l[_]*d;for(let h=0;h<d;h++)p[y++]=c[g++]}return new Kn(p,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ur,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let d=0,f=c.length;d<f;d++){const p=c[d],g=e(p,i);l.push(g)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,p=c.length;f<p;f++){const g=c[f];d.push(g.toJSON(e.data))}d.length>0&&(r[l]=d,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const a=e.morphAttributes;for(const c in a){const d=[],f=a[c];for(let p=0,g=f.length;p<g;p++)d.push(f[p].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sm=new Et,ar=new zM,No=new hf,bm=new H,Yr=new H,Kr=new H,Zr=new H,yu=new H,Io=new H,Do=new je,Lo=new je,Uo=new je,wm=new H,Mm=new H,Em=new H,ko=new H,Fo=new H;class qn extends hn{constructor(e=new Ur,n=new nx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){Io.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const d=o[l],f=a[l];d!==0&&(yu.fromBufferAttribute(f,e),s?Io.addScaledVector(yu,d):Io.addScaledVector(yu.sub(n),d))}n.add(Io)}return n}raycast(e,n){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(a),ar.copy(e.ray).recast(e.near),!(No.containsPoint(ar.origin)===!1&&(ar.intersectSphere(No,bm)===null||ar.origin.distanceToSquared(bm)>(e.far-e.near)**2))&&(Sm.copy(a).invert(),ar.copy(e.ray).applyMatrix4(Sm),!(i.boundingBox!==null&&ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ar)))}_computeIntersections(e,n,i){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,d=a.attributes.uv1,f=a.attributes.normal,p=a.groups,g=a.drawRange;if(o!==null)if(Array.isArray(s))for(let y=0,_=p.length;y<_;y++){const m=p[y],h=s[m.materialIndex],v=Math.max(m.start,g.start),x=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let M=v,P=x;M<P;M+=3){const C=o.getX(M),w=o.getX(M+1),E=o.getX(M+2);r=Oo(this,h,e,i,c,d,f,C,w,E),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,g.start),_=Math.min(o.count,g.start+g.count);for(let m=y,h=_;m<h;m+=3){const v=o.getX(m),x=o.getX(m+1),M=o.getX(m+2);r=Oo(this,s,e,i,c,d,f,v,x,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let y=0,_=p.length;y<_;y++){const m=p[y],h=s[m.materialIndex],v=Math.max(m.start,g.start),x=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let M=v,P=x;M<P;M+=3){const C=M,w=M+1,E=M+2;r=Oo(this,h,e,i,c,d,f,C,w,E),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,g.start),_=Math.min(l.count,g.start+g.count);for(let m=y,h=_;m<h;m+=3){const v=m,x=m+1,M=m+2;r=Oo(this,s,e,i,c,d,f,v,x,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function $M(t,e,n,i,r,a,s,o){let l;if(e.side===nn?l=i.intersectTriangle(s,a,r,!0,o):l=i.intersectTriangle(r,a,s,e.side===Ki,o),l===null)return null;Fo.copy(o),Fo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Fo);return c<n.near||c>n.far?null:{distance:c,point:Fo.clone(),object:t}}function Oo(t,e,n,i,r,a,s,o,l,c){t.getVertexPosition(o,Yr),t.getVertexPosition(l,Kr),t.getVertexPosition(c,Zr);const d=$M(t,e,n,i,Yr,Kr,Zr,ko);if(d){r&&(Do.fromBufferAttribute(r,o),Lo.fromBufferAttribute(r,l),Uo.fromBufferAttribute(r,c),d.uv=Xn.getInterpolation(ko,Yr,Kr,Zr,Do,Lo,Uo,new je)),a&&(Do.fromBufferAttribute(a,o),Lo.fromBufferAttribute(a,l),Uo.fromBufferAttribute(a,c),d.uv1=Xn.getInterpolation(ko,Yr,Kr,Zr,Do,Lo,Uo,new je)),s&&(wm.fromBufferAttribute(s,o),Mm.fromBufferAttribute(s,l),Em.fromBufferAttribute(s,c),d.normal=Xn.getInterpolation(ko,Yr,Kr,Zr,wm,Mm,Em,new H),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new H,materialIndex:0};Xn.getNormal(Yr,Kr,Zr,f.normal),d.face=f}return d}class Qs extends Ur{constructor(e=1,n=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],d=[],f=[];let p=0,g=0;y("z","y","x",-1,-1,i,n,e,s,a,0),y("z","y","x",1,-1,i,n,-e,s,a,1),y("x","z","y",1,1,e,i,n,r,s,2),y("x","z","y",1,-1,e,i,-n,r,s,3),y("x","y","z",1,-1,e,n,i,r,a,4),y("x","y","z",-1,-1,e,n,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new wr(c,3)),this.setAttribute("normal",new wr(d,3)),this.setAttribute("uv",new wr(f,2));function y(_,m,h,v,x,M,P,C,w,E,S){const b=M/w,R=P/E,z=M/2,F=P/2,B=C/2,G=w+1,W=E+1;let $=0,D=0;const K=new H;for(let Q=0;Q<W;Q++){const ae=Q*R-F;for(let xe=0;xe<G;xe++){const ue=xe*b-z;K[_]=ue*v,K[m]=ae*x,K[h]=B,c.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[h]=C>0?1:-1,d.push(K.x,K.y,K.z),f.push(xe/w),f.push(1-Q/E),$+=1}}for(let Q=0;Q<E;Q++)for(let ae=0;ae<w;ae++){const xe=p+ae+G*Q,ue=p+ae+G*(Q+1),V=p+(ae+1)+G*(Q+1),Y=p+(ae+1)+G*Q;l.push(xe,ue,Y),l.push(ue,V,Y),D+=6}o.addGroup(g,D,S),g+=D,p+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fa(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Gt(t){const e={};for(let n=0;n<t.length;n++){const i=Fa(t[n]);for(const r in i)e[r]=i[r]}return e}function YM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function ax(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const KM={clone:Fa,merge:Gt};var ZM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,QM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends dc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ZM,this.fragmentShader=QM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fa(e.uniforms),this.uniformsGroups=YM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class sx extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=ui}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new H,Cm=new je,Tm=new je;class Dn extends sx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ah*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ah*2*Math.atan(Math.tan(Jc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,n){return this.getViewBounds(e,Cm,Tm),n.subVectors(Tm,Cm)}setViewOffset(e,n,i,r,a,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Jc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,n-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Qr=-90,Jr=1;class JM extends hn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Dn(Qr,Jr,e,n);r.layers=this.layers,this.add(r);const a=new Dn(Qr,Jr,e,n);a.layers=this.layers,this.add(a);const s=new Dn(Qr,Jr,e,n);s.layers=this.layers,this.add(s);const o=new Dn(Qr,Jr,e,n);o.layers=this.layers,this.add(o);const l=new Dn(Qr,Jr,e,n);l.layers=this.layers,this.add(l);const c=new Dn(Qr,Jr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,a,s,o,l]=n;for(const c of n)this.remove(c);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,d]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,a),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,p,g),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class ox extends rn{constructor(e,n,i,r,a,s,o,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Da,super(e,n,i,r,a,s,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class eE extends Pr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ox(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ln}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Qs(5,5,5),a=new xi({name:"CubemapFromEquirect",uniforms:Fa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Xi});a.uniforms.tEquirect.value=n;const s=new qn(r,a),o=n.minFilter;return n.minFilter===_r&&(n.minFilter=Ln),new JM(1,10,this).update(e,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(a)}}const vu=new H,tE=new H,nE=new Oe;class dr{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=vu.subVectors(i,n).cross(tE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(vu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:n.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||nE.getNormalMatrix(e),r=this.coplanarPoint(vu).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sr=new hf,zo=new H;class lx{constructor(e=new dr,n=new dr,i=new dr,r=new dr,a=new dr,s=new dr){this.planes=[e,n,i,r,a,s]}set(e,n,i,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ui){const i=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],l=r[3],c=r[4],d=r[5],f=r[6],p=r[7],g=r[8],y=r[9],_=r[10],m=r[11],h=r[12],v=r[13],x=r[14],M=r[15];if(i[0].setComponents(l-a,p-c,m-g,M-h).normalize(),i[1].setComponents(l+a,p+c,m+g,M+h).normalize(),i[2].setComponents(l+s,p+d,m+y,M+v).normalize(),i[3].setComponents(l-s,p-d,m-y,M-v).normalize(),i[4].setComponents(l-o,p-f,m-_,M-x).normalize(),n===ui)i[5].setComponents(l+o,p+f,m+_,M+x).normalize();else if(n===Vl)i[5].setComponents(o,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){return sr.center.set(0,0,0),sr.radius=.7071067811865476,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(zo.x=r.normal.x>0?e.max.x:e.min.x,zo.y=r.normal.y>0?e.max.y:e.min.y,zo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(zo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cx(){let t=null,e=!1,n=null,i=null;function r(a,s){n(a,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){n=a},setContext:function(a){t=a}}}function iE(t){const e=new WeakMap;function n(o,l){const c=o.array,d=o.usage,f=c.byteLength,p=t.createBuffer();t.bindBuffer(l,p),t.bufferData(l,c,d),o.onUploadCallback();let g;if(c instanceof Float32Array)g=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=t.SHORT;else if(c instanceof Uint32Array)g=t.UNSIGNED_INT;else if(c instanceof Int32Array)g=t.INT;else if(c instanceof Int8Array)g=t.BYTE;else if(c instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const d=l.array,f=l._updateRange,p=l.updateRanges;if(t.bindBuffer(c,o),f.count===-1&&p.length===0&&t.bufferSubData(c,0,d),p.length!==0){for(let g=0,y=p.length;g<y;g++){const _=p[g];t.bufferSubData(c,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}f.count!==-1&&(t.bufferSubData(c,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:a,update:s}}class Js extends Ur{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const a=e/2,s=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,f=e/o,p=n/l,g=[],y=[],_=[],m=[];for(let h=0;h<d;h++){const v=h*p-s;for(let x=0;x<c;x++){const M=x*f-a;y.push(M,-v,0),_.push(0,0,1),m.push(x/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<o;v++){const x=v+c*h,M=v+c*(h+1),P=v+1+c*(h+1),C=v+1+c*h;g.push(x,M,C),g.push(M,P,C)}this.setIndex(g),this.setAttribute("position",new wr(y,3)),this.setAttribute("normal",new wr(_,3)),this.setAttribute("uv",new wr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.width,e.height,e.widthSegments,e.heightSegments)}}var rE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aE=`#ifdef USE_ALPHAHASH
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
#endif`,sE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uE=`#ifdef USE_AOMAP
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
#endif`,dE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hE=`#ifdef USE_BATCHING
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
#endif`,fE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yE=`#ifdef USE_IRIDESCENCE
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
#endif`,vE=`#ifdef USE_BUMPMAP
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
#endif`,xE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_E=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,SE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ME=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,EE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,CE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,TE=`#define PI 3.141592653589793
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
} // validated`,AE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,RE=`vec3 transformedNormal = objectNormal;
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
#endif`,PE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,IE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,LE="gl_FragColor = linearToOutputTexel( gl_FragColor );",UE=`
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
}`,kE=`#ifdef USE_ENVMAP
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
#endif`,FE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,OE=`#ifdef USE_ENVMAP
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
#endif`,zE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,BE=`#ifdef USE_ENVMAP
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
#endif`,jE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,HE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,WE=`#ifdef USE_GRADIENTMAP
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
#endif`,qE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$E=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,YE=`uniform bool receiveShadow;
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
#endif`,KE=`#ifdef USE_ENVMAP
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
#endif`,ZE=`ToonMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,JE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tC=`PhysicalMaterial material;
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
#endif`,nC=`struct PhysicalMaterial {
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
}`,iC=`
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
#endif`,rC=`#if defined( RE_IndirectDiffuse )
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
#endif`,aC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sC=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oC=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lC=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cC=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fC=`#if defined( USE_POINTS_UV )
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
#endif`,pC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xC=`#ifdef USE_MORPHTARGETS
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
#endif`,_C=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,CC=`#ifdef USE_NORMALMAP
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
#endif`,TC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,AC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,RC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,PC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,DC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,LC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,UC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,FC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,OC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,BC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jC=`float getShadowMask() {
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
}`,HC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GC=`#ifdef USE_SKINNING
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
#endif`,WC=`#ifdef USE_SKINNING
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
#endif`,qC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$C=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,YC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ZC=`#ifdef USE_TRANSMISSION
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
#endif`,JC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const i1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,r1=`uniform sampler2D t2D;
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
}`,a1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,o1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c1=`#include <common>
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
}`,u1=`#if DEPTH_PACKING == 3200
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
}`,d1=`#define DISTANCE
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
}`,h1=`#define DISTANCE
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
}`,f1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m1=`uniform float scale;
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
}`,g1=`uniform vec3 diffuse;
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
}`,y1=`#include <common>
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
}`,v1=`uniform vec3 diffuse;
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
}`,x1=`#define LAMBERT
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
}`,_1=`#define LAMBERT
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
}`,S1=`#define MATCAP
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
}`,b1=`#define MATCAP
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
}`,w1=`#define NORMAL
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
}`,M1=`#define NORMAL
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
}`,E1=`#define PHONG
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
}`,C1=`#define PHONG
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
}`,T1=`#define STANDARD
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
}`,A1=`#define STANDARD
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
}`,R1=`#define TOON
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
}`,P1=`#define TOON
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
}`,N1=`uniform float size;
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
}`,I1=`uniform vec3 diffuse;
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
}`,D1=`#include <common>
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
}`,L1=`uniform vec3 color;
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
}`,U1=`uniform float rotation;
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
}`,k1=`uniform vec3 diffuse;
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
}`,Fe={alphahash_fragment:rE,alphahash_pars_fragment:aE,alphamap_fragment:sE,alphamap_pars_fragment:oE,alphatest_fragment:lE,alphatest_pars_fragment:cE,aomap_fragment:uE,aomap_pars_fragment:dE,batching_pars_vertex:hE,batching_vertex:fE,begin_vertex:pE,beginnormal_vertex:mE,bsdfs:gE,iridescence_fragment:yE,bumpmap_pars_fragment:vE,clipping_planes_fragment:xE,clipping_planes_pars_fragment:_E,clipping_planes_pars_vertex:SE,clipping_planes_vertex:bE,color_fragment:wE,color_pars_fragment:ME,color_pars_vertex:EE,color_vertex:CE,common:TE,cube_uv_reflection_fragment:AE,defaultnormal_vertex:RE,displacementmap_pars_vertex:PE,displacementmap_vertex:NE,emissivemap_fragment:IE,emissivemap_pars_fragment:DE,colorspace_fragment:LE,colorspace_pars_fragment:UE,envmap_fragment:kE,envmap_common_pars_fragment:FE,envmap_pars_fragment:OE,envmap_pars_vertex:zE,envmap_physical_pars_fragment:KE,envmap_vertex:BE,fog_vertex:VE,fog_pars_vertex:jE,fog_fragment:HE,fog_pars_fragment:GE,gradientmap_pars_fragment:WE,lightmap_pars_fragment:XE,lights_lambert_fragment:qE,lights_lambert_pars_fragment:$E,lights_pars_begin:YE,lights_toon_fragment:ZE,lights_toon_pars_fragment:QE,lights_phong_fragment:JE,lights_phong_pars_fragment:eC,lights_physical_fragment:tC,lights_physical_pars_fragment:nC,lights_fragment_begin:iC,lights_fragment_maps:rC,lights_fragment_end:aC,logdepthbuf_fragment:sC,logdepthbuf_pars_fragment:oC,logdepthbuf_pars_vertex:lC,logdepthbuf_vertex:cC,map_fragment:uC,map_pars_fragment:dC,map_particle_fragment:hC,map_particle_pars_fragment:fC,metalnessmap_fragment:pC,metalnessmap_pars_fragment:mC,morphinstance_vertex:gC,morphcolor_vertex:yC,morphnormal_vertex:vC,morphtarget_pars_vertex:xC,morphtarget_vertex:_C,normal_fragment_begin:SC,normal_fragment_maps:bC,normal_pars_fragment:wC,normal_pars_vertex:MC,normal_vertex:EC,normalmap_pars_fragment:CC,clearcoat_normal_fragment_begin:TC,clearcoat_normal_fragment_maps:AC,clearcoat_pars_fragment:RC,iridescence_pars_fragment:PC,opaque_fragment:NC,packing:IC,premultiplied_alpha_fragment:DC,project_vertex:LC,dithering_fragment:UC,dithering_pars_fragment:kC,roughnessmap_fragment:FC,roughnessmap_pars_fragment:OC,shadowmap_pars_fragment:zC,shadowmap_pars_vertex:BC,shadowmap_vertex:VC,shadowmask_pars_fragment:jC,skinbase_vertex:HC,skinning_pars_vertex:GC,skinning_vertex:WC,skinnormal_vertex:XC,specularmap_fragment:qC,specularmap_pars_fragment:$C,tonemapping_fragment:YC,tonemapping_pars_fragment:KC,transmission_fragment:ZC,transmission_pars_fragment:QC,uv_pars_fragment:JC,uv_pars_vertex:e1,uv_vertex:t1,worldpos_vertex:n1,background_vert:i1,background_frag:r1,backgroundCube_vert:a1,backgroundCube_frag:s1,cube_vert:o1,cube_frag:l1,depth_vert:c1,depth_frag:u1,distanceRGBA_vert:d1,distanceRGBA_frag:h1,equirect_vert:f1,equirect_frag:p1,linedashed_vert:m1,linedashed_frag:g1,meshbasic_vert:y1,meshbasic_frag:v1,meshlambert_vert:x1,meshlambert_frag:_1,meshmatcap_vert:S1,meshmatcap_frag:b1,meshnormal_vert:w1,meshnormal_frag:M1,meshphong_vert:E1,meshphong_frag:C1,meshphysical_vert:T1,meshphysical_frag:A1,meshtoon_vert:R1,meshtoon_frag:P1,points_vert:N1,points_frag:I1,shadow_vert:D1,shadow_frag:L1,sprite_vert:U1,sprite_frag:k1},he={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Gn={basic:{uniforms:Gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new tt(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Gt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Gt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new tt(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Gt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Gt([he.points,he.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Gt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Gt([he.common,he.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Gt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Gt([he.sprite,he.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Gt([he.common,he.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Gt([he.lights,he.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Gn.physical={uniforms:Gt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Bo={r:0,b:0,g:0},or=new vi,F1=new Et;function O1(t,e,n,i,r,a,s){const o=new tt(0);let l=a===!0?0:1,c,d,f=null,p=0,g=null;function y(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?n:e).get(x)),x}function _(v){let x=!1;const M=y(v);M===null?h(o,l):M&&M.isColor&&(h(M,1),x=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,s):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,x){const M=y(x);M&&(M.isCubeTexture||M.mapping===cc)?(d===void 0&&(d=new qn(new Qs(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:Fa(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),or.copy(x.backgroundRotation),or.x*=-1,or.y*=-1,or.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),d.material.uniforms.envMap.value=M,d.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(F1.makeRotationFromEuler(or)),d.material.toneMapped=Je.getTransfer(M.colorSpace)!==rt,(f!==M||p!==M.version||g!==t.toneMapping)&&(d.material.needsUpdate=!0,f=M,p=M.version,g=t.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new qn(new Js(2,2),new xi({name:"BackgroundMaterial",uniforms:Fa(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Je.getTransfer(M.colorSpace)!==rt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||p!==M.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,f=M,p=M.version,g=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function h(v,x){v.getRGB(Bo,ax(t)),i.buffers.color.setClear(Bo.r,Bo.g,Bo.b,x,s)}return{getClearColor:function(){return o},setClearColor:function(v,x=1){o.set(v),l=x,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,h(o,l)},render:_,addToRenderList:m}}function z1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=p(null);let a=r,s=!1;function o(b,R,z,F,B){let G=!1;const W=f(F,z,R);a!==W&&(a=W,c(a.object)),G=g(b,F,z,B),G&&y(b,F,z,B),B!==null&&e.update(B,t.ELEMENT_ARRAY_BUFFER),(G||s)&&(s=!1,M(b,R,z,F),B!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return t.createVertexArray()}function c(b){return t.bindVertexArray(b)}function d(b){return t.deleteVertexArray(b)}function f(b,R,z){const F=z.wireframe===!0;let B=i[b.id];B===void 0&&(B={},i[b.id]=B);let G=B[R.id];G===void 0&&(G={},B[R.id]=G);let W=G[F];return W===void 0&&(W=p(l()),G[F]=W),W}function p(b){const R=[],z=[],F=[];for(let B=0;B<n;B++)R[B]=0,z[B]=0,F[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:z,attributeDivisors:F,object:b,attributes:{},index:null}}function g(b,R,z,F){const B=a.attributes,G=R.attributes;let W=0;const $=z.getAttributes();for(const D in $)if($[D].location>=0){const Q=B[D];let ae=G[D];if(ae===void 0&&(D==="instanceMatrix"&&b.instanceMatrix&&(ae=b.instanceMatrix),D==="instanceColor"&&b.instanceColor&&(ae=b.instanceColor)),Q===void 0||Q.attribute!==ae||ae&&Q.data!==ae.data)return!0;W++}return a.attributesNum!==W||a.index!==F}function y(b,R,z,F){const B={},G=R.attributes;let W=0;const $=z.getAttributes();for(const D in $)if($[D].location>=0){let Q=G[D];Q===void 0&&(D==="instanceMatrix"&&b.instanceMatrix&&(Q=b.instanceMatrix),D==="instanceColor"&&b.instanceColor&&(Q=b.instanceColor));const ae={};ae.attribute=Q,Q&&Q.data&&(ae.data=Q.data),B[D]=ae,W++}a.attributes=B,a.attributesNum=W,a.index=F}function _(){const b=a.newAttributes;for(let R=0,z=b.length;R<z;R++)b[R]=0}function m(b){h(b,0)}function h(b,R){const z=a.newAttributes,F=a.enabledAttributes,B=a.attributeDivisors;z[b]=1,F[b]===0&&(t.enableVertexAttribArray(b),F[b]=1),B[b]!==R&&(t.vertexAttribDivisor(b,R),B[b]=R)}function v(){const b=a.newAttributes,R=a.enabledAttributes;for(let z=0,F=R.length;z<F;z++)R[z]!==b[z]&&(t.disableVertexAttribArray(z),R[z]=0)}function x(b,R,z,F,B,G,W){W===!0?t.vertexAttribIPointer(b,R,z,B,G):t.vertexAttribPointer(b,R,z,F,B,G)}function M(b,R,z,F){_();const B=F.attributes,G=z.getAttributes(),W=R.defaultAttributeValues;for(const $ in G){const D=G[$];if(D.location>=0){let K=B[$];if(K===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(K=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(K=b.instanceColor)),K!==void 0){const Q=K.normalized,ae=K.itemSize,xe=e.get(K);if(xe===void 0)continue;const ue=xe.buffer,V=xe.type,Y=xe.bytesPerElement,ne=V===t.INT||V===t.UNSIGNED_INT||K.gpuType===af;if(K.isInterleavedBufferAttribute){const se=K.data,be=se.stride,we=K.offset;if(se.isInstancedInterleavedBuffer){for(let Ae=0;Ae<D.locationSize;Ae++)h(D.location+Ae,se.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ae=0;Ae<D.locationSize;Ae++)m(D.location+Ae);t.bindBuffer(t.ARRAY_BUFFER,ue);for(let Ae=0;Ae<D.locationSize;Ae++)x(D.location+Ae,ae/D.locationSize,V,Q,be*Y,(we+ae/D.locationSize*Ae)*Y,ne)}else{if(K.isInstancedBufferAttribute){for(let se=0;se<D.locationSize;se++)h(D.location+se,K.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let se=0;se<D.locationSize;se++)m(D.location+se);t.bindBuffer(t.ARRAY_BUFFER,ue);for(let se=0;se<D.locationSize;se++)x(D.location+se,ae/D.locationSize,V,Q,ae*Y,ae/D.locationSize*se*Y,ne)}}else if(W!==void 0){const Q=W[$];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(D.location,Q);break;case 3:t.vertexAttrib3fv(D.location,Q);break;case 4:t.vertexAttrib4fv(D.location,Q);break;default:t.vertexAttrib1fv(D.location,Q)}}}}v()}function P(){E();for(const b in i){const R=i[b];for(const z in R){const F=R[z];for(const B in F)d(F[B].object),delete F[B];delete R[z]}delete i[b]}}function C(b){if(i[b.id]===void 0)return;const R=i[b.id];for(const z in R){const F=R[z];for(const B in F)d(F[B].object),delete F[B];delete R[z]}delete i[b.id]}function w(b){for(const R in i){const z=i[R];if(z[b.id]===void 0)continue;const F=z[b.id];for(const B in F)d(F[B].object),delete F[B];delete z[b.id]}}function E(){S(),s=!0,a!==r&&(a=r,c(a.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:E,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function B1(t,e,n){let i;function r(c){i=c}function a(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function s(c,d,f){f!==0&&(t.drawArraysInstanced(i,c,d,f),n.update(d,i,f))}function o(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let g=0;for(let y=0;y<f;y++)g+=d[y];n.update(g,i,1)}function l(c,d,f,p){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<c.length;y++)s(c[y],d[y],p[y]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,d,0,p,0,f);let y=0;for(let _=0;_<f;_++)y+=d[_];for(let _=0;_<p.length;_++)n.update(y,i,p[_])}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function V1(t,e,n,i){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(C){return!(C!==kn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const w=C===$s&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==yi&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ci&&!w)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),h=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=g>0,P=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:h,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:M,maxSamples:P}}function j1(t){const e=this;let n=null,i=0,r=!1,a=!1;const s=new dr,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const g=f.length!==0||p||i!==0||r;return r=p,i=f.length,g},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,p){n=d(f,p,0)},this.setState=function(f,p,g){const y=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||y===null||y.length===0||a&&!m)a?d(null):c();else{const v=a?0:i,x=v*4;let M=h.clippingState||null;l.value=M,M=d(y,p,x,g);for(let P=0;P!==x;++P)M[P]=n[P];h.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,p,g,y){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,y!==!0||m===null){const h=g+_*4,v=p.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let x=0,M=g;x!==_;++x,M+=4)s.copy(f[x]).applyMatrix4(v,o),s.normal.toArray(m,M),m[M+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function H1(t){let e=new WeakMap;function n(s,o){return o===Rd?s.mapping=Da:o===Pd&&(s.mapping=La),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===Rd||o===Pd)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new eE(l.height);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",r),n(c.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class ux extends sx{constructor(e=-1,n=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const pa=4,Am=[.125,.215,.35,.446,.526,.582],mr=20,xu=new ux,Rm=new tt;let _u=null,Su=0,bu=0,wu=!1;const hr=(1+Math.sqrt(5))/2,ea=1/hr,Pm=[new H(-hr,ea,0),new H(hr,ea,0),new H(-ea,0,hr),new H(ea,0,hr),new H(0,hr,-ea),new H(0,hr,ea),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class Nm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){_u=this._renderer.getRenderTarget(),Su=this._renderer.getActiveCubeFace(),bu=this._renderer.getActiveMipmapLevel(),wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),n>0&&this._blur(a,0,0,n),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_u,Su,bu),this._renderer.xr.enabled=wu,e.scissorTest=!1,Vo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Da||e.mapping===La?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_u=this._renderer.getRenderTarget(),Su=this._renderer.getActiveCubeFace(),bu=this._renderer.getActiveMipmapLevel(),wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:$s,format:kn,colorSpace:tr,depthBuffer:!1},r=Im(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Im(e,n,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=G1(a)),this._blurMaterial=W1(a,e,n)}return r}_compileMaterial(e){const n=new qn(this._lodPlanes[0],e);this._renderer.compile(n,xu)}_sceneToCubeUV(e,n,i,r){const o=new Dn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Rm),d.toneMapping=qi,d.autoClear=!1;const g=new nx({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),y=new qn(new Qs,g);let _=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,_=!0):(g.color.copy(Rm),_=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):v===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const x=this._cubeSize;Vo(r,v*x,h>2?x:0,x,x),d.setRenderTarget(r),_&&d.render(y,o),d.render(e,o)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Da||e.mapping===La;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dm());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new qn(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Vo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,xu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Pm[(r-a-1)%Pm.length];this._blur(e,a-1,a,s,o)}n.autoClear=i}_blur(e,n,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,n,i,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new qn(this._lodPlanes[r],c),p=c.uniforms,g=this._sizeLods[i]-1,y=isFinite(a)?Math.PI/(2*g):2*Math.PI/(2*mr-1),_=a/y,m=isFinite(a)?1+Math.floor(d*_):mr;m>mr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mr}`);const h=[];let v=0;for(let w=0;w<mr;++w){const E=w/_,S=Math.exp(-E*E/2);h.push(S),w===0?v+=S:w<m&&(v+=2*S)}for(let w=0;w<h.length;w++)h[w]=h[w]/v;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=h,p.latitudinal.value=s==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:x}=this;p.dTheta.value=y,p.mipInt.value=x-i;const M=this._sizeLods[r],P=3*M*(r>x-pa?r-x+pa:0),C=4*(this._cubeSize-M);Vo(n,P,C,3*M,2*M),l.setRenderTarget(n),l.render(f,xu)}}function G1(t){const e=[],n=[],i=[];let r=t;const a=t-pa+1+Am.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);n.push(o);let l=1/o;s>t-pa?l=Am[s-t+pa-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,f=1+c,p=[d,d,f,d,f,f,d,d,f,f,d,f],g=6,y=6,_=3,m=2,h=1,v=new Float32Array(_*y*g),x=new Float32Array(m*y*g),M=new Float32Array(h*y*g);for(let C=0;C<g;C++){const w=C%3*2/3-1,E=C>2?0:-1,S=[w,E,0,w+2/3,E,0,w+2/3,E+1,0,w,E,0,w+2/3,E+1,0,w,E+1,0];v.set(S,_*y*C),x.set(p,m*y*C);const b=[C,C,C,C,C,C];M.set(b,h*y*C)}const P=new Ur;P.setAttribute("position",new Kn(v,_)),P.setAttribute("uv",new Kn(x,m)),P.setAttribute("faceIndex",new Kn(M,h)),e.push(P),r>pa&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Im(t,e,n){const i=new Pr(t,e,n);return i.texture.mapping=cc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function W1(t,e,n){const i=new Float32Array(mr),r=new H(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ff(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Dm(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ff(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Lm(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function ff(){return`

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
	`}function X1(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Rd||l===Pd,d=l===Da||l===La;if(c||d){let f=e.get(o);const p=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return n===null&&(n=new Nm(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const g=o.image;return c&&g&&g.height>0||d&&g&&r(g)?(n===null&&(n=new Nm(t)),f=c?n.fromEquirectangular(o):n.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",a),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function q1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&_s("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function $1(t,e,n,i){const r={},a=new WeakMap;function s(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const y in p.attributes)e.remove(p.attributes[y]);for(const y in p.morphAttributes){const _=p.morphAttributes[y];for(let m=0,h=_.length;m<h;m++)e.remove(_[m])}p.removeEventListener("dispose",s),delete r[p.id];const g=a.get(p);g&&(e.remove(g),a.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function o(f,p){return r[p.id]===!0||(p.addEventListener("dispose",s),r[p.id]=!0,n.memory.geometries++),p}function l(f){const p=f.attributes;for(const y in p)e.update(p[y],t.ARRAY_BUFFER);const g=f.morphAttributes;for(const y in g){const _=g[y];for(let m=0,h=_.length;m<h;m++)e.update(_[m],t.ARRAY_BUFFER)}}function c(f){const p=[],g=f.index,y=f.attributes.position;let _=0;if(g!==null){const v=g.array;_=g.version;for(let x=0,M=v.length;x<M;x+=3){const P=v[x+0],C=v[x+1],w=v[x+2];p.push(P,C,C,w,w,P)}}else if(y!==void 0){const v=y.array;_=y.version;for(let x=0,M=v.length/3-1;x<M;x+=3){const P=x+0,C=x+1,w=x+2;p.push(P,C,C,w,w,P)}}else return;const m=new(Zv(p)?rx:ix)(p,1);m.version=_;const h=a.get(f);h&&e.remove(h),a.set(f,m)}function d(f){const p=a.get(f);if(p){const g=f.index;g!==null&&p.version<g.version&&c(f)}else c(f);return a.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function Y1(t,e,n){let i;function r(p){i=p}let a,s;function o(p){a=p.type,s=p.bytesPerElement}function l(p,g){t.drawElements(i,g,a,p*s),n.update(g,i,1)}function c(p,g,y){y!==0&&(t.drawElementsInstanced(i,g,a,p*s,y),n.update(g,i,y))}function d(p,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,a,p,0,y);let m=0;for(let h=0;h<y;h++)m+=g[h];n.update(m,i,1)}function f(p,g,y,_){if(y===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<p.length;h++)c(p[h]/s,g[h],_[h]);else{m.multiDrawElementsInstancedWEBGL(i,g,0,a,p,0,_,0,y);let h=0;for(let v=0;v<y;v++)h+=g[v];for(let v=0;v<_.length;v++)n.update(h,i,_[v])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function K1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=o*(a/3);break;case t.LINES:n.lines+=o*(a/2);break;case t.LINE_STRIP:n.lines+=o*(a-1);break;case t.LINE_LOOP:n.lines+=o*a;break;case t.POINTS:n.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Z1(t,e,n){const i=new WeakMap,r=new Nt;function a(s,o,l){const c=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let p=i.get(o);if(p===void 0||p.count!==f){let b=function(){E.dispose(),i.delete(o),o.removeEventListener("dispose",b)};var g=b;p!==void 0&&p.texture.dispose();const y=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let M=0;y===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let P=o.attributes.position.count*M,C=1;P>e.maxTextureSize&&(C=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const w=new Float32Array(P*C*4*f),E=new Jv(w,P,C,f);E.type=ci,E.needsUpdate=!0;const S=M*4;for(let R=0;R<f;R++){const z=h[R],F=v[R],B=x[R],G=P*C*4*R;for(let W=0;W<z.count;W++){const $=W*S;y===!0&&(r.fromBufferAttribute(z,W),w[G+$+0]=r.x,w[G+$+1]=r.y,w[G+$+2]=r.z,w[G+$+3]=0),_===!0&&(r.fromBufferAttribute(F,W),w[G+$+4]=r.x,w[G+$+5]=r.y,w[G+$+6]=r.z,w[G+$+7]=0),m===!0&&(r.fromBufferAttribute(B,W),w[G+$+8]=r.x,w[G+$+9]=r.y,w[G+$+10]=r.z,w[G+$+11]=B.itemSize===4?r.w:1)}}p={count:f,texture:E,size:new je(P,C)},i.set(o,p),o.addEventListener("dispose",b)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let y=0;for(let m=0;m<c.length;m++)y+=c[m];const _=o.morphTargetsRelative?1:1-y;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}return{update:a}}function Q1(t,e,n,i){let r=new WeakMap;function a(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return f}function s(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:s}}class dx extends rn{constructor(e,n,i,r,a,s,o,l,c,d=wa){if(d!==wa&&d!==ka)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===wa&&(i=Rr),i===void 0&&d===ka&&(i=Ua),super(null,r,a,s,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Sn,this.minFilter=l!==void 0?l:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const hx=new rn,Um=new dx(1,1),fx=new Jv,px=new FM,mx=new ox,km=[],Fm=[],Om=new Float32Array(16),zm=new Float32Array(9),Bm=new Float32Array(4);function Ha(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let a=km[r];if(a===void 0&&(a=new Float32Array(r),km[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=n,t[s].toArray(a,o)}return a}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Tt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function hc(t,e){let n=Fm[e];n===void 0&&(n=new Int32Array(e),Fm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function J1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function eT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),Tt(n,e)}}function tT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),Tt(n,e)}}function nT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),Tt(n,e)}}function iT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Tt(n,e)}else{if(Ct(n,i))return;Bm.set(i),t.uniformMatrix2fv(this.addr,!1,Bm),Tt(n,i)}}function rT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Tt(n,e)}else{if(Ct(n,i))return;zm.set(i),t.uniformMatrix3fv(this.addr,!1,zm),Tt(n,i)}}function aT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Tt(n,e)}else{if(Ct(n,i))return;Om.set(i),t.uniformMatrix4fv(this.addr,!1,Om),Tt(n,i)}}function sT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function oT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),Tt(n,e)}}function lT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),Tt(n,e)}}function cT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),Tt(n,e)}}function uT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function dT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),Tt(n,e)}}function hT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),Tt(n,e)}}function fT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),Tt(n,e)}}function pT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let a;this.type===t.SAMPLER_2D_SHADOW?(Um.compareFunction=Kv,a=Um):a=hx,n.setTexture2D(e||a,r)}function mT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||px,r)}function gT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||mx,r)}function yT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||fx,r)}function vT(t){switch(t){case 5126:return J1;case 35664:return eT;case 35665:return tT;case 35666:return nT;case 35674:return iT;case 35675:return rT;case 35676:return aT;case 5124:case 35670:return sT;case 35667:case 35671:return oT;case 35668:case 35672:return lT;case 35669:case 35673:return cT;case 5125:return uT;case 36294:return dT;case 36295:return hT;case 36296:return fT;case 35678:case 36198:case 36298:case 36306:case 35682:return pT;case 35679:case 36299:case 36307:return mT;case 35680:case 36300:case 36308:case 36293:return gT;case 36289:case 36303:case 36311:case 36292:return yT}}function xT(t,e){t.uniform1fv(this.addr,e)}function _T(t,e){const n=Ha(e,this.size,2);t.uniform2fv(this.addr,n)}function ST(t,e){const n=Ha(e,this.size,3);t.uniform3fv(this.addr,n)}function bT(t,e){const n=Ha(e,this.size,4);t.uniform4fv(this.addr,n)}function wT(t,e){const n=Ha(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function MT(t,e){const n=Ha(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function ET(t,e){const n=Ha(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function CT(t,e){t.uniform1iv(this.addr,e)}function TT(t,e){t.uniform2iv(this.addr,e)}function AT(t,e){t.uniform3iv(this.addr,e)}function RT(t,e){t.uniform4iv(this.addr,e)}function PT(t,e){t.uniform1uiv(this.addr,e)}function NT(t,e){t.uniform2uiv(this.addr,e)}function IT(t,e){t.uniform3uiv(this.addr,e)}function DT(t,e){t.uniform4uiv(this.addr,e)}function LT(t,e,n){const i=this.cache,r=e.length,a=hc(n,r);Ct(i,a)||(t.uniform1iv(this.addr,a),Tt(i,a));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||hx,a[s])}function UT(t,e,n){const i=this.cache,r=e.length,a=hc(n,r);Ct(i,a)||(t.uniform1iv(this.addr,a),Tt(i,a));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||px,a[s])}function kT(t,e,n){const i=this.cache,r=e.length,a=hc(n,r);Ct(i,a)||(t.uniform1iv(this.addr,a),Tt(i,a));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||mx,a[s])}function FT(t,e,n){const i=this.cache,r=e.length,a=hc(n,r);Ct(i,a)||(t.uniform1iv(this.addr,a),Tt(i,a));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||fx,a[s])}function OT(t){switch(t){case 5126:return xT;case 35664:return _T;case 35665:return ST;case 35666:return bT;case 35674:return wT;case 35675:return MT;case 35676:return ET;case 5124:case 35670:return CT;case 35667:case 35671:return TT;case 35668:case 35672:return AT;case 35669:case 35673:return RT;case 5125:return PT;case 36294:return NT;case 36295:return IT;case 36296:return DT;case 35678:case 36198:case 36298:case 36306:case 35682:return LT;case 35679:case 36299:case 36307:return UT;case 35680:case 36300:case 36308:case 36293:return kT;case 36289:case 36303:case 36311:case 36292:return FT}}class zT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=vT(n.type)}}class BT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=OT(n.type)}}class VT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,n[o.id],i)}}}const Mu=/(\w+)(\])?(\[|\.)?/g;function Vm(t,e){t.seq.push(e),t.map[e.id]=e}function jT(t,e,n){const i=t.name,r=i.length;for(Mu.lastIndex=0;;){const a=Mu.exec(i),s=Mu.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){Vm(n,c===void 0?new zT(o,t,e):new BT(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new VT(o),Vm(n,f)),n=f}}}class cl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(n,r),s=e.getUniformLocation(n,a.name);jT(a,s,this)}}setValue(e,n,i,r){const a=this.map[n];a!==void 0&&a.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let a=0,s=n.length;a!==s;++a){const o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function jm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const HT=37297;let GT=0;function WT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,n.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}function XT(t){const e=Je.getPrimaries(Je.workingColorSpace),n=Je.getPrimaries(t);let i;switch(e===n?i="":e===Bl&&n===zl?i="LinearDisplayP3ToLinearSRGB":e===zl&&n===Bl&&(i="LinearSRGBToLinearDisplayP3"),t){case tr:case uc:return[i,"LinearTransferOETF"];case Hn:case df:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Hm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+WT(t.getShaderSource(e),s)}else return r}function qT(t,e){const n=XT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function $T(t,e){let n;switch(e){case uM:n="Linear";break;case dM:n="Reinhard";break;case hM:n="OptimizedCineon";break;case fM:n="ACESFilmic";break;case mM:n="AgX";break;case gM:n="Neutral";break;case pM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const jo=new H;function YT(){Je.getLuminanceCoefficients(jo);const t=jo.x.toFixed(4),e=jo.y.toFixed(4),n=jo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cs).join(`
`)}function ZT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function QT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=t.getActiveAttrib(e,r),s=a.name;let o=1;a.type===t.FLOAT_MAT2&&(o=2),a.type===t.FLOAT_MAT3&&(o=3),a.type===t.FLOAT_MAT4&&(o=4),n[s]={type:a.type,location:t.getAttribLocation(e,s),locationSize:o}}return n}function cs(t){return t!==""}function Gm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const JT=/^[ \t]*#include +<([\w\d./]+)>/gm;function sh(t){return t.replace(JT,tA)}const eA=new Map;function tA(t,e){let n=Fe[e];if(n===void 0){const i=eA.get(e);if(i!==void 0)n=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return sh(n)}const nA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xm(t){return t.replace(nA,iA)}function iA(t,e,n,i){let r="";for(let a=parseInt(e);a<parseInt(n);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function qm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function rA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Fv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===kw?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function aA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Da:case La:e="ENVMAP_TYPE_CUBE";break;case cc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case La:e="ENVMAP_MODE_REFRACTION";break}return e}function oA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Ov:e="ENVMAP_BLENDING_MULTIPLY";break;case lM:e="ENVMAP_BLENDING_MIX";break;case cM:e="ENVMAP_BLENDING_ADD";break}return e}function lA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function cA(t,e,n,i){const r=t.getContext(),a=n.defines;let s=n.vertexShader,o=n.fragmentShader;const l=rA(n),c=aA(n),d=sA(n),f=oA(n),p=lA(n),g=KT(n),y=ZT(a),_=r.createProgram();let m,h,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(cs).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(cs).join(`
`),h.length>0&&(h+=`
`)):(m=[qm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cs).join(`
`),h=[qm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==qi?"#define TONE_MAPPING":"",n.toneMapping!==qi?Fe.tonemapping_pars_fragment:"",n.toneMapping!==qi?$T("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,qT("linearToOutputTexel",n.outputColorSpace),YT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(cs).join(`
`)),s=sh(s),s=Gm(s,n),s=Wm(s,n),o=sh(o),o=Gm(o,n),o=Wm(o,n),s=Xm(s),o=Xm(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===lm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===lm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=v+m+s,M=v+h+o,P=jm(r,r.VERTEX_SHADER,x),C=jm(r,r.FRAGMENT_SHADER,M);r.attachShader(_,P),r.attachShader(_,C),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(R){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(_).trim(),F=r.getShaderInfoLog(P).trim(),B=r.getShaderInfoLog(C).trim();let G=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(G=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,P,C);else{const $=Hm(r,P,"vertex"),D=Hm(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+z+`
`+$+`
`+D)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(F===""||B==="")&&(W=!1);W&&(R.diagnostics={runnable:G,programLog:z,vertexShader:{log:F,prefix:m},fragmentShader:{log:B,prefix:h}})}r.deleteShader(P),r.deleteShader(C),E=new cl(r,_),S=QT(r,_)}let E;this.getUniforms=function(){return E===void 0&&w(this),E};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(_,HT)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=GT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=C,this}let uA=0;class dA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new hA(e),n.set(e,i)),i}}class hA{constructor(e){this.id=uA++,this.code=e,this.usedTimes=0}}function fA(t,e,n,i,r,a,s){const o=new ex,l=new dA,c=new Set,d=[],f=r.logarithmicDepthBuffer,p=r.vertexTextures;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,b,R,z,F){const B=z.fog,G=F.geometry,W=S.isMeshStandardMaterial?z.environment:null,$=(S.isMeshStandardMaterial?n:e).get(S.envMap||W),D=$&&$.mapping===cc?$.image.height:null,K=y[S.type];S.precision!==null&&(g=r.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const Q=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ae=Q!==void 0?Q.length:0;let xe=0;G.morphAttributes.position!==void 0&&(xe=1),G.morphAttributes.normal!==void 0&&(xe=2),G.morphAttributes.color!==void 0&&(xe=3);let ue,V,Y,ne;if(K){const Ye=Gn[K];ue=Ye.vertexShader,V=Ye.fragmentShader}else ue=S.vertexShader,V=S.fragmentShader,l.update(S),Y=l.getVertexShaderID(S),ne=l.getFragmentShaderID(S);const se=t.getRenderTarget(),be=F.isInstancedMesh===!0,we=F.isBatchedMesh===!0,Ae=!!S.map,Xe=!!S.matcap,I=!!$,dt=!!S.aoMap,qe=!!S.lightMap,$e=!!S.bumpMap,Me=!!S.normalMap,yt=!!S.displacementMap,De=!!S.emissiveMap,Ue=!!S.metalnessMap,N=!!S.roughnessMap,T=S.anisotropy>0,q=S.clearcoat>0,te=S.dispersion>0,re=S.iridescence>0,ee=S.sheen>0,Ce=S.transmission>0,fe=T&&!!S.anisotropyMap,ye=q&&!!S.clearcoatMap,ke=q&&!!S.clearcoatNormalMap,oe=q&&!!S.clearcoatRoughnessMap,ge=re&&!!S.iridescenceMap,He=re&&!!S.iridescenceThicknessMap,Ie=ee&&!!S.sheenColorMap,ve=ee&&!!S.sheenRoughnessMap,Le=!!S.specularMap,ze=!!S.specularColorMap,ot=!!S.specularIntensityMap,U=Ce&&!!S.transmissionMap,le=Ce&&!!S.thicknessMap,Z=!!S.gradientMap,J=!!S.alphaMap,de=S.alphaTest>0,Re=!!S.alphaHash,Ge=!!S.extensions;let vt=qi;S.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(vt=t.toneMapping);const Dt={shaderID:K,shaderType:S.type,shaderName:S.name,vertexShader:ue,fragmentShader:V,defines:S.defines,customVertexShaderID:Y,customFragmentShaderID:ne,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,batching:we,batchingColor:we&&F._colorsTexture!==null,instancing:be,instancingColor:be&&F.instanceColor!==null,instancingMorph:be&&F.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:se===null?t.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:tr,alphaToCoverage:!!S.alphaToCoverage,map:Ae,matcap:Xe,envMap:I,envMapMode:I&&$.mapping,envMapCubeUVHeight:D,aoMap:dt,lightMap:qe,bumpMap:$e,normalMap:Me,displacementMap:p&&yt,emissiveMap:De,normalMapObjectSpace:Me&&S.normalMapType===SM,normalMapTangentSpace:Me&&S.normalMapType===_M,metalnessMap:Ue,roughnessMap:N,anisotropy:T,anisotropyMap:fe,clearcoat:q,clearcoatMap:ye,clearcoatNormalMap:ke,clearcoatRoughnessMap:oe,dispersion:te,iridescence:re,iridescenceMap:ge,iridescenceThicknessMap:He,sheen:ee,sheenColorMap:Ie,sheenRoughnessMap:ve,specularMap:Le,specularColorMap:ze,specularIntensityMap:ot,transmission:Ce,transmissionMap:U,thicknessMap:le,gradientMap:Z,opaque:S.transparent===!1&&S.blending===ba&&S.alphaToCoverage===!1,alphaMap:J,alphaTest:de,alphaHash:Re,combine:S.combine,mapUv:Ae&&_(S.map.channel),aoMapUv:dt&&_(S.aoMap.channel),lightMapUv:qe&&_(S.lightMap.channel),bumpMapUv:$e&&_(S.bumpMap.channel),normalMapUv:Me&&_(S.normalMap.channel),displacementMapUv:yt&&_(S.displacementMap.channel),emissiveMapUv:De&&_(S.emissiveMap.channel),metalnessMapUv:Ue&&_(S.metalnessMap.channel),roughnessMapUv:N&&_(S.roughnessMap.channel),anisotropyMapUv:fe&&_(S.anisotropyMap.channel),clearcoatMapUv:ye&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ke&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:He&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:ve&&_(S.sheenRoughnessMap.channel),specularMapUv:Le&&_(S.specularMap.channel),specularColorMapUv:ze&&_(S.specularColorMap.channel),specularIntensityMapUv:ot&&_(S.specularIntensityMap.channel),transmissionMapUv:U&&_(S.transmissionMap.channel),thicknessMapUv:le&&_(S.thicknessMap.channel),alphaMapUv:J&&_(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Me||T),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!G.attributes.uv&&(Ae||J),fog:!!B,useFog:S.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:F.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:xe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:vt,decodeVideoTexture:Ae&&S.map.isVideoTexture===!0&&Je.getTransfer(S.map.colorSpace)===rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===si,flipSided:S.side===nn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ge&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&S.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Dt.vertexUv1s=c.has(1),Dt.vertexUv2s=c.has(2),Dt.vertexUv3s=c.has(3),c.clear(),Dt}function h(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)b.push(R),b.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(v(b,S),x(b,S),b.push(t.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function v(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function x(S,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.doubleSided&&o.enable(10),b.flipSided&&o.enable(11),b.useDepthPacking&&o.enable(12),b.dithering&&o.enable(13),b.transmission&&o.enable(14),b.sheen&&o.enable(15),b.opaque&&o.enable(16),b.pointsUvs&&o.enable(17),b.decodeVideoTexture&&o.enable(18),b.alphaToCoverage&&o.enable(19),S.push(o.mask)}function M(S){const b=y[S.type];let R;if(b){const z=Gn[b];R=KM.clone(z.uniforms)}else R=S.uniforms;return R}function P(S,b){let R;for(let z=0,F=d.length;z<F;z++){const B=d[z];if(B.cacheKey===b){R=B,++R.usedTimes;break}}return R===void 0&&(R=new cA(t,b,S,a),d.push(R)),R}function C(S){if(--S.usedTimes===0){const b=d.indexOf(S);d[b]=d[d.length-1],d.pop(),S.destroy()}}function w(S){l.remove(S)}function E(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:M,acquireProgram:P,releaseProgram:C,releaseShaderCache:w,programs:d,dispose:E}}function pA(){let t=new WeakMap;function e(a){let s=t.get(a);return s===void 0&&(s={},t.set(a,s)),s}function n(a){t.delete(a)}function i(a,s,o){t.get(a)[s]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function mA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function $m(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ym(){const t=[];let e=0;const n=[],i=[],r=[];function a(){e=0,n.length=0,i.length=0,r.length=0}function s(f,p,g,y,_,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:p,material:g,groupOrder:y,renderOrder:f.renderOrder,z:_,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=p,h.material=g,h.groupOrder=y,h.renderOrder=f.renderOrder,h.z=_,h.group=m),e++,h}function o(f,p,g,y,_,m){const h=s(f,p,g,y,_,m);g.transmission>0?i.push(h):g.transparent===!0?r.push(h):n.push(h)}function l(f,p,g,y,_,m){const h=s(f,p,g,y,_,m);g.transmission>0?i.unshift(h):g.transparent===!0?r.unshift(h):n.unshift(h)}function c(f,p){n.length>1&&n.sort(f||mA),i.length>1&&i.sort(p||$m),r.length>1&&r.sort(p||$m)}function d(){for(let f=e,p=t.length;f<p;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:a,push:o,unshift:l,finish:d,sort:c}}function gA(){let t=new WeakMap;function e(i,r){const a=t.get(i);let s;return a===void 0?(s=new Ym,t.set(i,[s])):r>=a.length?(s=new Ym,a.push(s)):s=a[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function yA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new tt};break;case"SpotLight":n={position:new H,direction:new H,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":n={color:new tt,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function vA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let xA=0;function _A(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function SA(t){const e=new yA,n=vA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,a=new Et,s=new Et;function o(c){let d=0,f=0,p=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let g=0,y=0,_=0,m=0,h=0,v=0,x=0,M=0,P=0,C=0,w=0;c.sort(_A);for(let S=0,b=c.length;S<b;S++){const R=c[S],z=R.color,F=R.intensity,B=R.distance,G=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=z.r*F,f+=z.g*F,p+=z.b*F;else if(R.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(R.sh.coefficients[W],F);w++}else if(R.isDirectionalLight){const W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const $=R.shadow,D=n.get(R);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,i.directionalShadow[g]=D,i.directionalShadowMap[g]=G,i.directionalShadowMatrix[g]=R.shadow.matrix,v++}i.directional[g]=W,g++}else if(R.isSpotLight){const W=e.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(z).multiplyScalar(F),W.distance=B,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,i.spot[_]=W;const $=R.shadow;if(R.map&&(i.spotLightMap[P]=R.map,P++,$.updateMatrices(R),R.castShadow&&C++),i.spotLightMatrix[_]=$.matrix,R.castShadow){const D=n.get(R);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,i.spotShadow[_]=D,i.spotShadowMap[_]=G,M++}_++}else if(R.isRectAreaLight){const W=e.get(R);W.color.copy(z).multiplyScalar(F),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=W,m++}else if(R.isPointLight){const W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){const $=R.shadow,D=n.get(R);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,D.shadowCameraNear=$.camera.near,D.shadowCameraFar=$.camera.far,i.pointShadow[y]=D,i.pointShadowMap[y]=G,i.pointShadowMatrix[y]=R.shadow.matrix,x++}i.point[y]=W,y++}else if(R.isHemisphereLight){const W=e.get(R);W.skyColor.copy(R.color).multiplyScalar(F),W.groundColor.copy(R.groundColor).multiplyScalar(F),i.hemi[h]=W,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=p;const E=i.hash;(E.directionalLength!==g||E.pointLength!==y||E.spotLength!==_||E.rectAreaLength!==m||E.hemiLength!==h||E.numDirectionalShadows!==v||E.numPointShadows!==x||E.numSpotShadows!==M||E.numSpotMaps!==P||E.numLightProbes!==w)&&(i.directional.length=g,i.spot.length=_,i.rectArea.length=m,i.point.length=y,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=M+P-C,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=w,E.directionalLength=g,E.pointLength=y,E.spotLength=_,E.rectAreaLength=m,E.hemiLength=h,E.numDirectionalShadows=v,E.numPointShadows=x,E.numSpotShadows=M,E.numSpotMaps=P,E.numLightProbes=w,i.version=xA++)}function l(c,d){let f=0,p=0,g=0,y=0,_=0;const m=d.matrixWorldInverse;for(let h=0,v=c.length;h<v;h++){const x=c[h];if(x.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(x.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),g++}else if(x.isRectAreaLight){const M=i.rectArea[y];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),s.identity(),a.copy(x.matrixWorld),a.premultiply(m),s.extractRotation(a),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),y++}else if(x.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),p++}else if(x.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function Km(t){const e=new SA(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function a(d){n.push(d)}function s(d){i.push(d)}function o(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function bA(t){let e=new WeakMap;function n(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new Km(t),e.set(r,[o])):a>=s.length?(o=new Km(t),s.push(o)):o=s[a],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class wA extends dc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class MA extends dc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const EA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CA=`uniform sampler2D shadow_pass;
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
}`;function TA(t,e,n){let i=new lx;const r=new je,a=new je,s=new Nt,o=new wA({depthPacking:xM}),l=new MA,c={},d=n.maxTextureSize,f={[Ki]:nn,[nn]:Ki,[si]:si},p=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:EA,fragmentShader:CA}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const y=new Ur;y.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new qn(y,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fv;let h=this.type;this.render=function(C,w,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const S=t.getRenderTarget(),b=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Xi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const F=h!==ii&&this.type===ii,B=h===ii&&this.type!==ii;for(let G=0,W=C.length;G<W;G++){const $=C[G],D=$.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const K=D.getFrameExtents();if(r.multiply(K),a.copy(D.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/K.x),r.x=a.x*K.x,D.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/K.y),r.y=a.y*K.y,D.mapSize.y=a.y)),D.map===null||F===!0||B===!0){const ae=this.type!==ii?{minFilter:Sn,magFilter:Sn}:{};D.map!==null&&D.map.dispose(),D.map=new Pr(r.x,r.y,ae),D.map.texture.name=$.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const Q=D.getViewportCount();for(let ae=0;ae<Q;ae++){const xe=D.getViewport(ae);s.set(a.x*xe.x,a.y*xe.y,a.x*xe.z,a.y*xe.w),z.viewport(s),D.updateMatrices($,ae),i=D.getFrustum(),M(w,E,D.camera,$,this.type)}D.isPointLightShadow!==!0&&this.type===ii&&v(D,E),D.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(S,b,R)};function v(C,w){const E=e.update(_);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Pr(r.x,r.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(w,null,E,p,_,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(w,null,E,g,_,null)}function x(C,w,E,S){let b=null;const R=E.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)b=R;else if(b=E.isPointLight===!0?l:o,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const z=b.uuid,F=w.uuid;let B=c[z];B===void 0&&(B={},c[z]=B);let G=B[F];G===void 0&&(G=b.clone(),B[F]=G,w.addEventListener("dispose",P)),b=G}if(b.visible=w.visible,b.wireframe=w.wireframe,S===ii?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:f[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,E.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const z=t.properties.get(b);z.light=E}return b}function M(C,w,E,S,b){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===ii)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,C.matrixWorld);const F=e.update(C),B=C.material;if(Array.isArray(B)){const G=F.groups;for(let W=0,$=G.length;W<$;W++){const D=G[W],K=B[D.materialIndex];if(K&&K.visible){const Q=x(C,K,S,b);C.onBeforeShadow(t,C,w,E,F,Q,D),t.renderBufferDirect(E,null,F,Q,C,D),C.onAfterShadow(t,C,w,E,F,Q,D)}}}else if(B.visible){const G=x(C,B,S,b);C.onBeforeShadow(t,C,w,E,F,G,null),t.renderBufferDirect(E,null,F,G,C,null),C.onAfterShadow(t,C,w,E,F,G,null)}}const z=C.children;for(let F=0,B=z.length;F<B;F++)M(z[F],w,E,S,b)}function P(C){C.target.removeEventListener("dispose",P);for(const E in c){const S=c[E],b=C.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}function AA(t){function e(){let U=!1;const le=new Nt;let Z=null;const J=new Nt(0,0,0,0);return{setMask:function(de){Z!==de&&!U&&(t.colorMask(de,de,de,de),Z=de)},setLocked:function(de){U=de},setClear:function(de,Re,Ge,vt,Dt){Dt===!0&&(de*=vt,Re*=vt,Ge*=vt),le.set(de,Re,Ge,vt),J.equals(le)===!1&&(t.clearColor(de,Re,Ge,vt),J.copy(le))},reset:function(){U=!1,Z=null,J.set(-1,0,0,0)}}}function n(){let U=!1,le=null,Z=null,J=null;return{setTest:function(de){de?ne(t.DEPTH_TEST):se(t.DEPTH_TEST)},setMask:function(de){le!==de&&!U&&(t.depthMask(de),le=de)},setFunc:function(de){if(Z!==de){switch(de){case tM:t.depthFunc(t.NEVER);break;case nM:t.depthFunc(t.ALWAYS);break;case iM:t.depthFunc(t.LESS);break;case Fl:t.depthFunc(t.LEQUAL);break;case rM:t.depthFunc(t.EQUAL);break;case aM:t.depthFunc(t.GEQUAL);break;case sM:t.depthFunc(t.GREATER);break;case oM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Z=de}},setLocked:function(de){U=de},setClear:function(de){J!==de&&(t.clearDepth(de),J=de)},reset:function(){U=!1,le=null,Z=null,J=null}}}function i(){let U=!1,le=null,Z=null,J=null,de=null,Re=null,Ge=null,vt=null,Dt=null;return{setTest:function(Ye){U||(Ye?ne(t.STENCIL_TEST):se(t.STENCIL_TEST))},setMask:function(Ye){le!==Ye&&!U&&(t.stencilMask(Ye),le=Ye)},setFunc:function(Ye,Zn,Bn){(Z!==Ye||J!==Zn||de!==Bn)&&(t.stencilFunc(Ye,Zn,Bn),Z=Ye,J=Zn,de=Bn)},setOp:function(Ye,Zn,Bn){(Re!==Ye||Ge!==Zn||vt!==Bn)&&(t.stencilOp(Ye,Zn,Bn),Re=Ye,Ge=Zn,vt=Bn)},setLocked:function(Ye){U=Ye},setClear:function(Ye){Dt!==Ye&&(t.clearStencil(Ye),Dt=Ye)},reset:function(){U=!1,le=null,Z=null,J=null,de=null,Re=null,Ge=null,vt=null,Dt=null}}}const r=new e,a=new n,s=new i,o=new WeakMap,l=new WeakMap;let c={},d={},f=new WeakMap,p=[],g=null,y=!1,_=null,m=null,h=null,v=null,x=null,M=null,P=null,C=new tt(0,0,0),w=0,E=!1,S=null,b=null,R=null,z=null,F=null;const B=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,W=0;const $=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec($)[1]),G=W>=1):$.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),G=W>=2);let D=null,K={};const Q=t.getParameter(t.SCISSOR_BOX),ae=t.getParameter(t.VIEWPORT),xe=new Nt().fromArray(Q),ue=new Nt().fromArray(ae);function V(U,le,Z,J){const de=new Uint8Array(4),Re=t.createTexture();t.bindTexture(U,Re),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ge=0;Ge<Z;Ge++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(le,0,t.RGBA,1,1,J,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(le+Ge,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return Re}const Y={};Y[t.TEXTURE_2D]=V(t.TEXTURE_2D,t.TEXTURE_2D,1),Y[t.TEXTURE_CUBE_MAP]=V(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[t.TEXTURE_2D_ARRAY]=V(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Y[t.TEXTURE_3D]=V(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),s.setClear(0),ne(t.DEPTH_TEST),a.setFunc(Fl),$e(!1),Me(nm),ne(t.CULL_FACE),dt(Xi);function ne(U){c[U]!==!0&&(t.enable(U),c[U]=!0)}function se(U){c[U]!==!1&&(t.disable(U),c[U]=!1)}function be(U,le){return d[U]!==le?(t.bindFramebuffer(U,le),d[U]=le,U===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=le),U===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=le),!0):!1}function we(U,le){let Z=p,J=!1;if(U){Z=f.get(le),Z===void 0&&(Z=[],f.set(le,Z));const de=U.textures;if(Z.length!==de.length||Z[0]!==t.COLOR_ATTACHMENT0){for(let Re=0,Ge=de.length;Re<Ge;Re++)Z[Re]=t.COLOR_ATTACHMENT0+Re;Z.length=de.length,J=!0}}else Z[0]!==t.BACK&&(Z[0]=t.BACK,J=!0);J&&t.drawBuffers(Z)}function Ae(U){return g!==U?(t.useProgram(U),g=U,!0):!1}const Xe={[pr]:t.FUNC_ADD,[Ow]:t.FUNC_SUBTRACT,[zw]:t.FUNC_REVERSE_SUBTRACT};Xe[Bw]=t.MIN,Xe[Vw]=t.MAX;const I={[jw]:t.ZERO,[Hw]:t.ONE,[Gw]:t.SRC_COLOR,[Td]:t.SRC_ALPHA,[Kw]:t.SRC_ALPHA_SATURATE,[$w]:t.DST_COLOR,[Xw]:t.DST_ALPHA,[Ww]:t.ONE_MINUS_SRC_COLOR,[Ad]:t.ONE_MINUS_SRC_ALPHA,[Yw]:t.ONE_MINUS_DST_COLOR,[qw]:t.ONE_MINUS_DST_ALPHA,[Zw]:t.CONSTANT_COLOR,[Qw]:t.ONE_MINUS_CONSTANT_COLOR,[Jw]:t.CONSTANT_ALPHA,[eM]:t.ONE_MINUS_CONSTANT_ALPHA};function dt(U,le,Z,J,de,Re,Ge,vt,Dt,Ye){if(U===Xi){y===!0&&(se(t.BLEND),y=!1);return}if(y===!1&&(ne(t.BLEND),y=!0),U!==Fw){if(U!==_||Ye!==E){if((m!==pr||x!==pr)&&(t.blendEquation(t.FUNC_ADD),m=pr,x=pr),Ye)switch(U){case ba:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case im:t.blendFunc(t.ONE,t.ONE);break;case rm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case am:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ba:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case im:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case rm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case am:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}h=null,v=null,M=null,P=null,C.set(0,0,0),w=0,_=U,E=Ye}return}de=de||le,Re=Re||Z,Ge=Ge||J,(le!==m||de!==x)&&(t.blendEquationSeparate(Xe[le],Xe[de]),m=le,x=de),(Z!==h||J!==v||Re!==M||Ge!==P)&&(t.blendFuncSeparate(I[Z],I[J],I[Re],I[Ge]),h=Z,v=J,M=Re,P=Ge),(vt.equals(C)===!1||Dt!==w)&&(t.blendColor(vt.r,vt.g,vt.b,Dt),C.copy(vt),w=Dt),_=U,E=!1}function qe(U,le){U.side===si?se(t.CULL_FACE):ne(t.CULL_FACE);let Z=U.side===nn;le&&(Z=!Z),$e(Z),U.blending===ba&&U.transparent===!1?dt(Xi):dt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const J=U.stencilWrite;s.setTest(J),J&&(s.setMask(U.stencilWriteMask),s.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),s.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),De(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ne(t.SAMPLE_ALPHA_TO_COVERAGE):se(t.SAMPLE_ALPHA_TO_COVERAGE)}function $e(U){S!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),S=U)}function Me(U){U!==Lw?(ne(t.CULL_FACE),U!==b&&(U===nm?t.cullFace(t.BACK):U===Uw?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):se(t.CULL_FACE),b=U}function yt(U){U!==R&&(G&&t.lineWidth(U),R=U)}function De(U,le,Z){U?(ne(t.POLYGON_OFFSET_FILL),(z!==le||F!==Z)&&(t.polygonOffset(le,Z),z=le,F=Z)):se(t.POLYGON_OFFSET_FILL)}function Ue(U){U?ne(t.SCISSOR_TEST):se(t.SCISSOR_TEST)}function N(U){U===void 0&&(U=t.TEXTURE0+B-1),D!==U&&(t.activeTexture(U),D=U)}function T(U,le,Z){Z===void 0&&(D===null?Z=t.TEXTURE0+B-1:Z=D);let J=K[Z];J===void 0&&(J={type:void 0,texture:void 0},K[Z]=J),(J.type!==U||J.texture!==le)&&(D!==Z&&(t.activeTexture(Z),D=Z),t.bindTexture(U,le||Y[U]),J.type=U,J.texture=le)}function q(){const U=K[D];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function te(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function He(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(U){xe.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),xe.copy(U))}function ve(U){ue.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),ue.copy(U))}function Le(U,le){let Z=l.get(le);Z===void 0&&(Z=new WeakMap,l.set(le,Z));let J=Z.get(U);J===void 0&&(J=t.getUniformBlockIndex(le,U.name),Z.set(U,J))}function ze(U,le){const J=l.get(le).get(U);o.get(le)!==J&&(t.uniformBlockBinding(le,J,U.__bindingPointIndex),o.set(le,J))}function ot(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},D=null,K={},d={},f=new WeakMap,p=[],g=null,y=!1,_=null,m=null,h=null,v=null,x=null,M=null,P=null,C=new tt(0,0,0),w=0,E=!1,S=null,b=null,R=null,z=null,F=null,xe.set(0,0,t.canvas.width,t.canvas.height),ue.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),s.reset()}return{buffers:{color:r,depth:a,stencil:s},enable:ne,disable:se,bindFramebuffer:be,drawBuffers:we,useProgram:Ae,setBlending:dt,setMaterial:qe,setFlipSided:$e,setCullFace:Me,setLineWidth:yt,setPolygonOffset:De,setScissorTest:Ue,activeTexture:N,bindTexture:T,unbindTexture:q,compressedTexImage2D:te,compressedTexImage3D:re,texImage2D:ge,texImage3D:He,updateUBOMapping:Le,uniformBlockBinding:ze,texStorage2D:ke,texStorage3D:oe,texSubImage2D:ee,texSubImage3D:Ce,compressedTexSubImage2D:fe,compressedTexSubImage3D:ye,scissor:Ie,viewport:ve,reset:ot}}function Zm(t,e,n,i){const r=RA(i);switch(n){case Hv:return t*e;case Wv:return t*e;case Xv:return t*e*2;case qv:return t*e/r.components*r.byteLength;case lf:return t*e/r.components*r.byteLength;case $v:return t*e*2/r.components*r.byteLength;case cf:return t*e*2/r.components*r.byteLength;case Gv:return t*e*3/r.components*r.byteLength;case kn:return t*e*4/r.components*r.byteLength;case uf:return t*e*4/r.components*r.byteLength;case rl:case al:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case sl:case ol:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ld:case kd:return Math.max(t,16)*Math.max(e,8)/4;case Dd:case Ud:return Math.max(t,8)*Math.max(e,8)/2;case Fd:case Od:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case zd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Bd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Vd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case jd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Hd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Wd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case qd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case $d:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Kd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Zd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Qd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Jd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ll:case eh:case th:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Yv:case nh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case ih:case rh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function RA(t){switch(t){case yi:case Bv:return{byteLength:1,components:1};case Vs:case Vv:case $s:return{byteLength:2,components:1};case sf:case of:return{byteLength:2,components:4};case Rr:case af:case ci:return{byteLength:4,components:1};case jv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function PA(t,e,n,i,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,d=new WeakMap;let f;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(N,T){return g?new OffscreenCanvas(N,T):jl("canvas")}function _(N,T,q){let te=1;const re=Ue(N);if((re.width>q||re.height>q)&&(te=q/Math.max(re.width,re.height)),te<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ee=Math.floor(te*re.width),Ce=Math.floor(te*re.height);f===void 0&&(f=y(ee,Ce));const fe=T?y(ee,Ce):f;return fe.width=ee,fe.height=Ce,fe.getContext("2d").drawImage(N,0,0,ee,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ee+"x"+Ce+")."),fe}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),N;return N}function m(N){return N.generateMipmaps&&N.minFilter!==Sn&&N.minFilter!==Ln}function h(N){t.generateMipmap(N)}function v(N,T,q,te,re=!1){if(N!==null){if(t[N]!==void 0)return t[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ee=T;if(T===t.RED&&(q===t.FLOAT&&(ee=t.R32F),q===t.HALF_FLOAT&&(ee=t.R16F),q===t.UNSIGNED_BYTE&&(ee=t.R8)),T===t.RED_INTEGER&&(q===t.UNSIGNED_BYTE&&(ee=t.R8UI),q===t.UNSIGNED_SHORT&&(ee=t.R16UI),q===t.UNSIGNED_INT&&(ee=t.R32UI),q===t.BYTE&&(ee=t.R8I),q===t.SHORT&&(ee=t.R16I),q===t.INT&&(ee=t.R32I)),T===t.RG&&(q===t.FLOAT&&(ee=t.RG32F),q===t.HALF_FLOAT&&(ee=t.RG16F),q===t.UNSIGNED_BYTE&&(ee=t.RG8)),T===t.RG_INTEGER&&(q===t.UNSIGNED_BYTE&&(ee=t.RG8UI),q===t.UNSIGNED_SHORT&&(ee=t.RG16UI),q===t.UNSIGNED_INT&&(ee=t.RG32UI),q===t.BYTE&&(ee=t.RG8I),q===t.SHORT&&(ee=t.RG16I),q===t.INT&&(ee=t.RG32I)),T===t.RGB&&q===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),T===t.RGBA){const Ce=re?Ol:Je.getTransfer(te);q===t.FLOAT&&(ee=t.RGBA32F),q===t.HALF_FLOAT&&(ee=t.RGBA16F),q===t.UNSIGNED_BYTE&&(ee=Ce===rt?t.SRGB8_ALPHA8:t.RGBA8),q===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),q===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function x(N,T){let q;return N?T===null||T===Rr||T===Ua?q=t.DEPTH24_STENCIL8:T===ci?q=t.DEPTH32F_STENCIL8:T===Vs&&(q=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Rr||T===Ua?q=t.DEPTH_COMPONENT24:T===ci?q=t.DEPTH_COMPONENT32F:T===Vs&&(q=t.DEPTH_COMPONENT16),q}function M(N,T){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==Sn&&N.minFilter!==Ln?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function P(N){const T=N.target;T.removeEventListener("dispose",P),w(T),T.isVideoTexture&&d.delete(T)}function C(N){const T=N.target;T.removeEventListener("dispose",C),S(T)}function w(N){const T=i.get(N);if(T.__webglInit===void 0)return;const q=N.source,te=p.get(q);if(te){const re=te[T.__cacheKey];re.usedTimes--,re.usedTimes===0&&E(N),Object.keys(te).length===0&&p.delete(q)}i.remove(N)}function E(N){const T=i.get(N);t.deleteTexture(T.__webglTexture);const q=N.source,te=p.get(q);delete te[T.__cacheKey],s.memory.textures--}function S(N){const T=i.get(N);if(N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(T.__webglFramebuffer[te]))for(let re=0;re<T.__webglFramebuffer[te].length;re++)t.deleteFramebuffer(T.__webglFramebuffer[te][re]);else t.deleteFramebuffer(T.__webglFramebuffer[te]);T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer[te])}else{if(Array.isArray(T.__webglFramebuffer))for(let te=0;te<T.__webglFramebuffer.length;te++)t.deleteFramebuffer(T.__webglFramebuffer[te]);else t.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&t.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let te=0;te<T.__webglColorRenderbuffer.length;te++)T.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(T.__webglColorRenderbuffer[te]);T.__webglDepthRenderbuffer&&t.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const q=N.textures;for(let te=0,re=q.length;te<re;te++){const ee=i.get(q[te]);ee.__webglTexture&&(t.deleteTexture(ee.__webglTexture),s.memory.textures--),i.remove(q[te])}i.remove(N)}let b=0;function R(){b=0}function z(){const N=b;return N>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),b+=1,N}function F(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function B(N,T){const q=i.get(N);if(N.isVideoTexture&&yt(N),N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){const te=N.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(q,N,T);return}}n.bindTexture(t.TEXTURE_2D,q.__webglTexture,t.TEXTURE0+T)}function G(N,T){const q=i.get(N);if(N.version>0&&q.__version!==N.version){ue(q,N,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,q.__webglTexture,t.TEXTURE0+T)}function W(N,T){const q=i.get(N);if(N.version>0&&q.__version!==N.version){ue(q,N,T);return}n.bindTexture(t.TEXTURE_3D,q.__webglTexture,t.TEXTURE0+T)}function $(N,T){const q=i.get(N);if(N.version>0&&q.__version!==N.version){V(q,N,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture,t.TEXTURE0+T)}const D={[Nd]:t.REPEAT,[xr]:t.CLAMP_TO_EDGE,[Id]:t.MIRRORED_REPEAT},K={[Sn]:t.NEAREST,[yM]:t.NEAREST_MIPMAP_NEAREST,[So]:t.NEAREST_MIPMAP_LINEAR,[Ln]:t.LINEAR,[Qc]:t.LINEAR_MIPMAP_NEAREST,[_r]:t.LINEAR_MIPMAP_LINEAR},Q={[bM]:t.NEVER,[AM]:t.ALWAYS,[wM]:t.LESS,[Kv]:t.LEQUAL,[MM]:t.EQUAL,[TM]:t.GEQUAL,[EM]:t.GREATER,[CM]:t.NOTEQUAL};function ae(N,T){if(T.type===ci&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ln||T.magFilter===Qc||T.magFilter===So||T.magFilter===_r||T.minFilter===Ln||T.minFilter===Qc||T.minFilter===So||T.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(N,t.TEXTURE_WRAP_S,D[T.wrapS]),t.texParameteri(N,t.TEXTURE_WRAP_T,D[T.wrapT]),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,D[T.wrapR]),t.texParameteri(N,t.TEXTURE_MAG_FILTER,K[T.magFilter]),t.texParameteri(N,t.TEXTURE_MIN_FILTER,K[T.minFilter]),T.compareFunction&&(t.texParameteri(N,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(N,t.TEXTURE_COMPARE_FUNC,Q[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Sn||T.minFilter!==So&&T.minFilter!==_r||T.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");t.texParameterf(N,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function xe(N,T){let q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",P));const te=T.source;let re=p.get(te);re===void 0&&(re={},p.set(te,re));const ee=F(T);if(ee!==N.__cacheKey){re[ee]===void 0&&(re[ee]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,q=!0),re[ee].usedTimes++;const Ce=re[N.__cacheKey];Ce!==void 0&&(re[N.__cacheKey].usedTimes--,Ce.usedTimes===0&&E(T)),N.__cacheKey=ee,N.__webglTexture=re[ee].texture}return q}function ue(N,T,q){let te=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(te=t.TEXTURE_3D);const re=xe(N,T),ee=T.source;n.bindTexture(te,N.__webglTexture,t.TEXTURE0+q);const Ce=i.get(ee);if(ee.version!==Ce.__version||re===!0){n.activeTexture(t.TEXTURE0+q);const fe=Je.getPrimaries(Je.workingColorSpace),ye=T.colorSpace===Di?null:Je.getPrimaries(T.colorSpace),ke=T.colorSpace===Di||fe===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let oe=_(T.image,!1,r.maxTextureSize);oe=De(T,oe);const ge=a.convert(T.format,T.colorSpace),He=a.convert(T.type);let Ie=v(T.internalFormat,ge,He,T.colorSpace,T.isVideoTexture);ae(te,T);let ve;const Le=T.mipmaps,ze=T.isVideoTexture!==!0,ot=Ce.__version===void 0||re===!0,U=ee.dataReady,le=M(T,oe);if(T.isDepthTexture)Ie=x(T.format===ka,T.type),ot&&(ze?n.texStorage2D(t.TEXTURE_2D,1,Ie,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,Ie,oe.width,oe.height,0,ge,He,null));else if(T.isDataTexture)if(Le.length>0){ze&&ot&&n.texStorage2D(t.TEXTURE_2D,le,Ie,Le[0].width,Le[0].height);for(let Z=0,J=Le.length;Z<J;Z++)ve=Le[Z],ze?U&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,ve.width,ve.height,ge,He,ve.data):n.texImage2D(t.TEXTURE_2D,Z,Ie,ve.width,ve.height,0,ge,He,ve.data);T.generateMipmaps=!1}else ze?(ot&&n.texStorage2D(t.TEXTURE_2D,le,Ie,oe.width,oe.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,ge,He,oe.data)):n.texImage2D(t.TEXTURE_2D,0,Ie,oe.width,oe.height,0,ge,He,oe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ze&&ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,Ie,Le[0].width,Le[0].height,oe.depth);for(let Z=0,J=Le.length;Z<J;Z++)if(ve=Le[Z],T.format!==kn)if(ge!==null)if(ze){if(U)if(T.layerUpdates.size>0){const de=Zm(ve.width,ve.height,T.format,T.type);for(const Re of T.layerUpdates){const Ge=ve.data.subarray(Re*de/ve.data.BYTES_PER_ELEMENT,(Re+1)*de/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,Re,ve.width,ve.height,1,ge,Ge,0,0)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,ve.width,ve.height,oe.depth,ge,ve.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Z,Ie,ve.width,ve.height,oe.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,ve.width,ve.height,oe.depth,ge,He,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Z,Ie,ve.width,ve.height,oe.depth,0,ge,He,ve.data)}else{ze&&ot&&n.texStorage2D(t.TEXTURE_2D,le,Ie,Le[0].width,Le[0].height);for(let Z=0,J=Le.length;Z<J;Z++)ve=Le[Z],T.format!==kn?ge!==null?ze?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,Z,0,0,ve.width,ve.height,ge,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,Z,Ie,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?U&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,ve.width,ve.height,ge,He,ve.data):n.texImage2D(t.TEXTURE_2D,Z,Ie,ve.width,ve.height,0,ge,He,ve.data)}else if(T.isDataArrayTexture)if(ze){if(ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,Ie,oe.width,oe.height,oe.depth),U)if(T.layerUpdates.size>0){const Z=Zm(oe.width,oe.height,T.format,T.type);for(const J of T.layerUpdates){const de=oe.data.subarray(J*Z/oe.data.BYTES_PER_ELEMENT,(J+1)*Z/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,J,oe.width,oe.height,1,ge,He,de)}T.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ge,He,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ie,oe.width,oe.height,oe.depth,0,ge,He,oe.data);else if(T.isData3DTexture)ze?(ot&&n.texStorage3D(t.TEXTURE_3D,le,Ie,oe.width,oe.height,oe.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ge,He,oe.data)):n.texImage3D(t.TEXTURE_3D,0,Ie,oe.width,oe.height,oe.depth,0,ge,He,oe.data);else if(T.isFramebufferTexture){if(ot)if(ze)n.texStorage2D(t.TEXTURE_2D,le,Ie,oe.width,oe.height);else{let Z=oe.width,J=oe.height;for(let de=0;de<le;de++)n.texImage2D(t.TEXTURE_2D,de,Ie,Z,J,0,ge,He,null),Z>>=1,J>>=1}}else if(Le.length>0){if(ze&&ot){const Z=Ue(Le[0]);n.texStorage2D(t.TEXTURE_2D,le,Ie,Z.width,Z.height)}for(let Z=0,J=Le.length;Z<J;Z++)ve=Le[Z],ze?U&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,ge,He,ve):n.texImage2D(t.TEXTURE_2D,Z,Ie,ge,He,ve);T.generateMipmaps=!1}else if(ze){if(ot){const Z=Ue(oe);n.texStorage2D(t.TEXTURE_2D,le,Ie,Z.width,Z.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,He,oe)}else n.texImage2D(t.TEXTURE_2D,0,Ie,ge,He,oe);m(T)&&h(te),Ce.__version=ee.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function V(N,T,q){if(T.image.length!==6)return;const te=xe(N,T),re=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+q);const ee=i.get(re);if(re.version!==ee.__version||te===!0){n.activeTexture(t.TEXTURE0+q);const Ce=Je.getPrimaries(Je.workingColorSpace),fe=T.colorSpace===Di?null:Je.getPrimaries(T.colorSpace),ye=T.colorSpace===Di||Ce===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const ke=T.isCompressedTexture||T.image[0].isCompressedTexture,oe=T.image[0]&&T.image[0].isDataTexture,ge=[];for(let J=0;J<6;J++)!ke&&!oe?ge[J]=_(T.image[J],!0,r.maxCubemapSize):ge[J]=oe?T.image[J].image:T.image[J],ge[J]=De(T,ge[J]);const He=ge[0],Ie=a.convert(T.format,T.colorSpace),ve=a.convert(T.type),Le=v(T.internalFormat,Ie,ve,T.colorSpace),ze=T.isVideoTexture!==!0,ot=ee.__version===void 0||te===!0,U=re.dataReady;let le=M(T,He);ae(t.TEXTURE_CUBE_MAP,T);let Z;if(ke){ze&&ot&&n.texStorage2D(t.TEXTURE_CUBE_MAP,le,Le,He.width,He.height);for(let J=0;J<6;J++){Z=ge[J].mipmaps;for(let de=0;de<Z.length;de++){const Re=Z[de];T.format!==kn?Ie!==null?ze?U&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,0,0,Re.width,Re.height,Ie,Re.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,Le,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,0,0,Re.width,Re.height,Ie,ve,Re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,Le,Re.width,Re.height,0,Ie,ve,Re.data)}}}else{if(Z=T.mipmaps,ze&&ot){Z.length>0&&le++;const J=Ue(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,le,Le,J.width,J.height)}for(let J=0;J<6;J++)if(oe){ze?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ge[J].width,ge[J].height,Ie,ve,ge[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Le,ge[J].width,ge[J].height,0,Ie,ve,ge[J].data);for(let de=0;de<Z.length;de++){const Ge=Z[de].image[J].image;ze?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,0,0,Ge.width,Ge.height,Ie,ve,Ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,Le,Ge.width,Ge.height,0,Ie,ve,Ge.data)}}else{ze?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ie,ve,ge[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Le,Ie,ve,ge[J]);for(let de=0;de<Z.length;de++){const Re=Z[de];ze?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,0,0,Ie,ve,Re.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,Le,Ie,ve,Re.image[J])}}}m(T)&&h(t.TEXTURE_CUBE_MAP),ee.__version=re.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function Y(N,T,q,te,re,ee){const Ce=a.convert(q.format,q.colorSpace),fe=a.convert(q.type),ye=v(q.internalFormat,Ce,fe,q.colorSpace);if(!i.get(T).__hasExternalTextures){const oe=Math.max(1,T.width>>ee),ge=Math.max(1,T.height>>ee);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,ee,ye,oe,ge,T.depth,0,Ce,fe,null):n.texImage2D(re,ee,ye,oe,ge,0,Ce,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,N),Me(T)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,re,i.get(q).__webglTexture,0,$e(T)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,re,i.get(q).__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ne(N,T,q){if(t.bindRenderbuffer(t.RENDERBUFFER,N),T.depthBuffer){const te=T.depthTexture,re=te&&te.isDepthTexture?te.type:null,ee=x(T.stencilBuffer,re),Ce=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=$e(T);Me(T)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,ee,T.width,T.height):q?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,ee,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,ee,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ce,t.RENDERBUFFER,N)}else{const te=T.textures;for(let re=0;re<te.length;re++){const ee=te[re],Ce=a.convert(ee.format,ee.colorSpace),fe=a.convert(ee.type),ye=v(ee.internalFormat,Ce,fe,ee.colorSpace),ke=$e(T);q&&Me(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ke,ye,T.width,T.height):Me(T)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ke,ye,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,ye,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function se(N,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),B(T.depthTexture,0);const te=i.get(T.depthTexture).__webglTexture,re=$e(T);if(T.depthTexture.format===wa)Me(T)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(T.depthTexture.format===ka)Me(T)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function be(N){const T=i.get(N),q=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!T.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");se(T.__webglFramebuffer,N)}else if(q){T.__webglDepthbuffer=[];for(let te=0;te<6;te++)n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[te]),T.__webglDepthbuffer[te]=t.createRenderbuffer(),ne(T.__webglDepthbuffer[te],N,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=t.createRenderbuffer(),ne(T.__webglDepthbuffer,N,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function we(N,T,q){const te=i.get(N);T!==void 0&&Y(te.__webglFramebuffer,N,N.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),q!==void 0&&be(N)}function Ae(N){const T=N.texture,q=i.get(N),te=i.get(T);N.addEventListener("dispose",C);const re=N.textures,ee=N.isWebGLCubeRenderTarget===!0,Ce=re.length>1;if(Ce||(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=T.version,s.memory.textures++),ee){q.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer[fe]=[];for(let ye=0;ye<T.mipmaps.length;ye++)q.__webglFramebuffer[fe][ye]=t.createFramebuffer()}else q.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer=[];for(let fe=0;fe<T.mipmaps.length;fe++)q.__webglFramebuffer[fe]=t.createFramebuffer()}else q.__webglFramebuffer=t.createFramebuffer();if(Ce)for(let fe=0,ye=re.length;fe<ye;fe++){const ke=i.get(re[fe]);ke.__webglTexture===void 0&&(ke.__webglTexture=t.createTexture(),s.memory.textures++)}if(N.samples>0&&Me(N)===!1){q.__webglMultisampledFramebuffer=t.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let fe=0;fe<re.length;fe++){const ye=re[fe];q.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,q.__webglColorRenderbuffer[fe]);const ke=a.convert(ye.format,ye.colorSpace),oe=a.convert(ye.type),ge=v(ye.internalFormat,ke,oe,ye.colorSpace,N.isXRRenderTarget===!0),He=$e(N);t.renderbufferStorageMultisample(t.RENDERBUFFER,He,ge,N.width,N.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,q.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),N.depthBuffer&&(q.__webglDepthRenderbuffer=t.createRenderbuffer(),ne(q.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),ae(t.TEXTURE_CUBE_MAP,T);for(let fe=0;fe<6;fe++)if(T.mipmaps&&T.mipmaps.length>0)for(let ye=0;ye<T.mipmaps.length;ye++)Y(q.__webglFramebuffer[fe][ye],N,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ye);else Y(q.__webglFramebuffer[fe],N,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(T)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ce){for(let fe=0,ye=re.length;fe<ye;fe++){const ke=re[fe],oe=i.get(ke);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),ae(t.TEXTURE_2D,ke),Y(q.__webglFramebuffer,N,ke,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),m(ke)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(fe=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,te.__webglTexture),ae(fe,T),T.mipmaps&&T.mipmaps.length>0)for(let ye=0;ye<T.mipmaps.length;ye++)Y(q.__webglFramebuffer[ye],N,T,t.COLOR_ATTACHMENT0,fe,ye);else Y(q.__webglFramebuffer,N,T,t.COLOR_ATTACHMENT0,fe,0);m(T)&&h(fe),n.unbindTexture()}N.depthBuffer&&be(N)}function Xe(N){const T=N.textures;for(let q=0,te=T.length;q<te;q++){const re=T[q];if(m(re)){const ee=N.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ce=i.get(re).__webglTexture;n.bindTexture(ee,Ce),h(ee),n.unbindTexture()}}}const I=[],dt=[];function qe(N){if(N.samples>0){if(Me(N)===!1){const T=N.textures,q=N.width,te=N.height;let re=t.COLOR_BUFFER_BIT;const ee=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ce=i.get(N),fe=T.length>1;if(fe)for(let ye=0;ye<T.length;ye++)n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let ye=0;ye<T.length;ye++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[ye]);const ke=i.get(T[ye]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ke,0)}t.blitFramebuffer(0,0,q,te,0,0,q,te,re,t.NEAREST),l===!0&&(I.length=0,dt.length=0,I.push(t.COLOR_ATTACHMENT0+ye),N.depthBuffer&&N.resolveDepthBuffer===!1&&(I.push(ee),dt.push(ee),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,dt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,I))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let ye=0;ye<T.length;ye++){n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[ye]);const ke=i.get(T[ye]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){const T=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[T])}}}function $e(N){return Math.min(r.maxSamples,N.samples)}function Me(N){const T=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function yt(N){const T=s.render.frame;d.get(N)!==T&&(d.set(N,T),N.update())}function De(N,T){const q=N.colorSpace,te=N.format,re=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||q!==tr&&q!==Di&&(Je.getTransfer(q)===rt?(te!==kn||re!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),T}function Ue(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=R,this.setTexture2D=B,this.setTexture2DArray=G,this.setTexture3D=W,this.setTextureCube=$,this.rebindTextures=we,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=Me}function NA(t,e){function n(i,r=Di){let a;const s=Je.getTransfer(r);if(i===yi)return t.UNSIGNED_BYTE;if(i===sf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===of)return t.UNSIGNED_SHORT_5_5_5_1;if(i===jv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Bv)return t.BYTE;if(i===Vv)return t.SHORT;if(i===Vs)return t.UNSIGNED_SHORT;if(i===af)return t.INT;if(i===Rr)return t.UNSIGNED_INT;if(i===ci)return t.FLOAT;if(i===$s)return t.HALF_FLOAT;if(i===Hv)return t.ALPHA;if(i===Gv)return t.RGB;if(i===kn)return t.RGBA;if(i===Wv)return t.LUMINANCE;if(i===Xv)return t.LUMINANCE_ALPHA;if(i===wa)return t.DEPTH_COMPONENT;if(i===ka)return t.DEPTH_STENCIL;if(i===qv)return t.RED;if(i===lf)return t.RED_INTEGER;if(i===$v)return t.RG;if(i===cf)return t.RG_INTEGER;if(i===uf)return t.RGBA_INTEGER;if(i===rl||i===al||i===sl||i===ol)if(s===rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===rl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===al)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ol)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===rl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===al)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ol)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Dd||i===Ld||i===Ud||i===kd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Dd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ld)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ud)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===kd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fd||i===Od||i===zd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Fd||i===Od)return s===rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===zd)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Bd||i===Vd||i===jd||i===Hd||i===Gd||i===Wd||i===Xd||i===qd||i===$d||i===Yd||i===Kd||i===Zd||i===Qd||i===Jd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Bd)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vd)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===jd)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hd)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gd)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wd)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xd)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qd)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$d)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Yd)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kd)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zd)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qd)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jd)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ll||i===eh||i===th)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===ll)return s===rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===eh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===th)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Yv||i===nh||i===ih||i===rh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===ll)return a.COMPRESSED_RED_RGTC1_EXT;if(i===nh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ih)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ua?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class IA extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ho extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DA={type:"move"};class Eu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ho,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ho,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ho,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),h=this._getHandJoint(c,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=d.position.distanceTo(f.position),g=.02,y=.005;c.inputState.pinching&&p>g+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=g-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=n.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(DA)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ho;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const LA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UA=`
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

}`;class kA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new rn,a=e.properties.get(r);a.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new xi({vertexShader:LA,fragmentShader:UA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new qn(new Js(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FA extends ja{constructor(e,n){super();const i=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,d=null,f=null,p=null,g=null,y=null;const _=new kA,m=n.getContextAttributes();let h=null,v=null;const x=[],M=[],P=new je;let C=null;const w=new Dn;w.layers.enable(1),w.viewport=new Nt;const E=new Dn;E.layers.enable(2),E.viewport=new Nt;const S=[w,E],b=new IA;b.layers.enable(1),b.layers.enable(2);let R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Y=x[V];return Y===void 0&&(Y=new Eu,x[V]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(V){let Y=x[V];return Y===void 0&&(Y=new Eu,x[V]=Y),Y.getGripSpace()},this.getHand=function(V){let Y=x[V];return Y===void 0&&(Y=new Eu,x[V]=Y),Y.getHandSpace()};function F(V){const Y=M.indexOf(V.inputSource);if(Y===-1)return;const ne=x[Y];ne!==void 0&&(ne.update(V.inputSource,V.frame,c||s),ne.dispatchEvent({type:V.type,data:V.inputSource}))}function B(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",G);for(let V=0;V<x.length;V++){const Y=M[V];Y!==null&&(M[V]=null,x[V].disconnect(Y))}R=null,z=null,_.reset(),e.setRenderTarget(h),g=null,p=null,f=null,r=null,v=null,ue.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return f},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",B),r.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const Y={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(r,n,Y),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),v=new Pr(g.framebufferWidth,g.framebufferHeight,{format:kn,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Y=null,ne=null,se=null;m.depth&&(se=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Y=m.stencil?ka:wa,ne=m.stencil?Ua:Rr);const be={colorFormat:n.RGBA8,depthFormat:se,scaleFactor:a};f=new XRWebGLBinding(r,n),p=f.createProjectionLayer(be),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),v=new Pr(p.textureWidth,p.textureHeight,{format:kn,type:yi,depthTexture:new dx(p.textureWidth,p.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),ue.setContext(r),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G(V){for(let Y=0;Y<V.removed.length;Y++){const ne=V.removed[Y],se=M.indexOf(ne);se>=0&&(M[se]=null,x[se].disconnect(ne))}for(let Y=0;Y<V.added.length;Y++){const ne=V.added[Y];let se=M.indexOf(ne);if(se===-1){for(let we=0;we<x.length;we++)if(we>=M.length){M.push(ne),se=we;break}else if(M[we]===null){M[we]=ne,se=we;break}if(se===-1)break}const be=x[se];be&&be.connect(ne)}}const W=new H,$=new H;function D(V,Y,ne){W.setFromMatrixPosition(Y.matrixWorld),$.setFromMatrixPosition(ne.matrixWorld);const se=W.distanceTo($),be=Y.projectionMatrix.elements,we=ne.projectionMatrix.elements,Ae=be[14]/(be[10]-1),Xe=be[14]/(be[10]+1),I=(be[9]+1)/be[5],dt=(be[9]-1)/be[5],qe=(be[8]-1)/be[0],$e=(we[8]+1)/we[0],Me=Ae*qe,yt=Ae*$e,De=se/(-qe+$e),Ue=De*-qe;Y.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ue),V.translateZ(De),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const N=Ae+De,T=Xe+De,q=Me-Ue,te=yt+(se-Ue),re=I*Xe/T*N,ee=dt*Xe/T*N;V.projectionMatrix.makePerspective(q,te,re,ee,N,T),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function K(V,Y){Y===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Y.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;_.texture!==null&&(V.near=_.depthNear,V.far=_.depthFar),b.near=E.near=w.near=V.near,b.far=E.far=w.far=V.far,(R!==b.near||z!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),R=b.near,z=b.far,w.near=R,w.far=z,E.near=R,E.far=z,w.updateProjectionMatrix(),E.updateProjectionMatrix(),V.updateProjectionMatrix());const Y=V.parent,ne=b.cameras;K(b,Y);for(let se=0;se<ne.length;se++)K(ne[se],Y);ne.length===2?D(b,w,E):b.projectionMatrix.copy(w.projectionMatrix),Q(V,b,Y)};function Q(V,Y,ne){ne===null?V.matrix.copy(Y.matrixWorld):(V.matrix.copy(ne.matrixWorld),V.matrix.invert(),V.matrix.multiply(Y.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Y.projectionMatrix),V.projectionMatrixInverse.copy(Y.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ah*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(p===null&&g===null))return l},this.setFoveation=function(V){l=V,p!==null&&(p.fixedFoveation=V),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let ae=null;function xe(V,Y){if(d=Y.getViewerPose(c||s),y=Y,d!==null){const ne=d.views;g!==null&&(e.setRenderTargetFramebuffer(v,g.framebuffer),e.setRenderTarget(v));let se=!1;ne.length!==b.cameras.length&&(b.cameras.length=0,se=!0);for(let we=0;we<ne.length;we++){const Ae=ne[we];let Xe=null;if(g!==null)Xe=g.getViewport(Ae);else{const dt=f.getViewSubImage(p,Ae);Xe=dt.viewport,we===0&&(e.setRenderTargetTextures(v,dt.colorTexture,p.ignoreDepthValues?void 0:dt.depthStencilTexture),e.setRenderTarget(v))}let I=S[we];I===void 0&&(I=new Dn,I.layers.enable(we),I.viewport=new Nt,S[we]=I),I.matrix.fromArray(Ae.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(Ae.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),we===0&&(b.matrix.copy(I.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),se===!0&&b.cameras.push(I)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")){const we=f.getDepthInformation(ne[0]);we&&we.isValid&&we.texture&&_.init(e,we,r.renderState)}}for(let ne=0;ne<x.length;ne++){const se=M[ne],be=x[ne];se!==null&&be!==void 0&&be.update(se,Y,c||s)}ae&&ae(V,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),y=null}const ue=new cx;ue.setAnimationLoop(xe),this.setAnimationLoop=function(V){ae=V},this.dispose=function(){}}}const lr=new vi,OA=new Et;function zA(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,ax(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,x,M){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(m,h):h.isMeshToonMaterial?(a(m,h),f(m,h)):h.isMeshPhongMaterial?(a(m,h),d(m,h)):h.isMeshStandardMaterial?(a(m,h),p(m,h),h.isMeshPhysicalMaterial&&g(m,h,M)):h.isMeshMatcapMaterial?(a(m,h),y(m,h)):h.isMeshDepthMaterial?a(m,h):h.isMeshDistanceMaterial?(a(m,h),_(m,h)):h.isMeshNormalMaterial?a(m,h):h.isLineBasicMaterial?(s(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,v,x):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===nn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===nn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h),x=v.envMap,M=v.envMapRotation;x&&(m.envMap.value=x,lr.copy(M),lr.x*=-1,lr.y*=-1,lr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),m.envMapRotation.value.setFromMatrix4(OA.makeRotationFromEuler(lr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function s(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,x){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=x*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function p(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function g(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===nn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function BA(t,e,n,i){let r={},a={},s=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const M=x.program;i.uniformBlockBinding(v,M)}function c(v,x){let M=r[v.id];M===void 0&&(y(v),M=d(v),r[v.id]=M,v.addEventListener("dispose",m));const P=x.program;i.updateUBOMapping(v,P);const C=e.render.frame;a[v.id]!==C&&(p(v),a[v.id]=C)}function d(v){const x=f();v.__bindingPointIndex=x;const M=t.createBuffer(),P=v.__size,C=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,P,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,M),M}function f(){for(let v=0;v<o;v++)if(s.indexOf(v)===-1)return s.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(v){const x=r[v.id],M=v.uniforms,P=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let C=0,w=M.length;C<w;C++){const E=Array.isArray(M[C])?M[C]:[M[C]];for(let S=0,b=E.length;S<b;S++){const R=E[S];if(g(R,C,S,P)===!0){const z=R.__offset,F=Array.isArray(R.value)?R.value:[R.value];let B=0;for(let G=0;G<F.length;G++){const W=F[G],$=_(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,z+B,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,B),B+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(v,x,M,P){const C=v.value,w=x+"_"+M;if(P[w]===void 0)return typeof C=="number"||typeof C=="boolean"?P[w]=C:P[w]=C.clone(),!0;{const E=P[w];if(typeof C=="number"||typeof C=="boolean"){if(E!==C)return P[w]=C,!0}else if(E.equals(C)===!1)return E.copy(C),!0}return!1}function y(v){const x=v.uniforms;let M=0;const P=16;for(let w=0,E=x.length;w<E;w++){const S=Array.isArray(x[w])?x[w]:[x[w]];for(let b=0,R=S.length;b<R;b++){const z=S[b],F=Array.isArray(z.value)?z.value:[z.value];for(let B=0,G=F.length;B<G;B++){const W=F[B],$=_(W),D=M%P,K=D%$.boundary,Q=D+K;M+=K,Q!==0&&P-Q<$.storage&&(M+=P-Q),z.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=$.storage}}}const C=M%P;return C>0&&(M+=P-C),v.__size=M,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const M=s.indexOf(x.__bindingPointIndex);s.splice(M,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete a[x.id]}function h(){for(const v in r)t.deleteBuffer(r[v]);s=[],r={},a={}}return{bind:l,update:c,dispose:h}}class VA{constructor(e={}){const{canvas:n=PM(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;const g=new Uint32Array(4),y=new Int32Array(4);let _=null,m=null;const h=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Hn,this.toneMapping=qi,this.toneMappingExposure=1;const x=this;let M=!1,P=0,C=0,w=null,E=-1,S=null;const b=new Nt,R=new Nt;let z=null;const F=new tt(0);let B=0,G=n.width,W=n.height,$=1,D=null,K=null;const Q=new Nt(0,0,G,W),ae=new Nt(0,0,G,W);let xe=!1;const ue=new lx;let V=!1,Y=!1;const ne=new Et,se=new H,be=new Nt,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ae=!1;function Xe(){return w===null?$:1}let I=i;function dt(A,k){return n.getContext(A,k)}try{const A={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${rf}`),n.addEventListener("webglcontextlost",Z,!1),n.addEventListener("webglcontextrestored",J,!1),n.addEventListener("webglcontextcreationerror",de,!1),I===null){const k="webgl2";if(I=dt(k,A),I===null)throw dt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let qe,$e,Me,yt,De,Ue,N,T,q,te,re,ee,Ce,fe,ye,ke,oe,ge,He,Ie,ve,Le,ze,ot;function U(){qe=new q1(I),qe.init(),Le=new NA(I,qe),$e=new V1(I,qe,e,Le),Me=new AA(I),yt=new K1(I),De=new pA,Ue=new PA(I,qe,Me,De,$e,Le,yt),N=new H1(x),T=new X1(x),q=new iE(I),ze=new z1(I,q),te=new $1(I,q,yt,ze),re=new Q1(I,te,q,yt),He=new Z1(I,$e,Ue),ke=new j1(De),ee=new fA(x,N,T,qe,$e,ze,ke),Ce=new zA(x,De),fe=new gA,ye=new bA(qe),ge=new O1(x,N,T,Me,re,p,l),oe=new TA(x,re,$e),ot=new BA(I,yt,$e,Me),Ie=new B1(I,qe,yt),ve=new Y1(I,qe,yt),yt.programs=ee.programs,x.capabilities=$e,x.extensions=qe,x.properties=De,x.renderLists=fe,x.shadowMap=oe,x.state=Me,x.info=yt}U();const le=new FA(x,I);this.xr=le,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=qe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=qe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(A){A!==void 0&&($=A,this.setSize(G,W,!1))},this.getSize=function(A){return A.set(G,W)},this.setSize=function(A,k,j=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=A,W=k,n.width=Math.floor(A*$),n.height=Math.floor(k*$),j===!0&&(n.style.width=A+"px",n.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(G*$,W*$).floor()},this.setDrawingBufferSize=function(A,k,j){G=A,W=k,$=j,n.width=Math.floor(A*j),n.height=Math.floor(k*j),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(b)},this.getViewport=function(A){return A.copy(Q)},this.setViewport=function(A,k,j,X){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,k,j,X),Me.viewport(b.copy(Q).multiplyScalar($).round())},this.getScissor=function(A){return A.copy(ae)},this.setScissor=function(A,k,j,X){A.isVector4?ae.set(A.x,A.y,A.z,A.w):ae.set(A,k,j,X),Me.scissor(R.copy(ae).multiplyScalar($).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(A){Me.setScissorTest(xe=A)},this.setOpaqueSort=function(A){D=A},this.setTransparentSort=function(A){K=A},this.getClearColor=function(A){return A.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(A=!0,k=!0,j=!0){let X=0;if(A){let O=!1;if(w!==null){const ce=w.texture.format;O=ce===uf||ce===cf||ce===lf}if(O){const ce=w.texture.type,pe=ce===yi||ce===Rr||ce===Vs||ce===Ua||ce===sf||ce===of,_e=ge.getClearColor(),Se=ge.getClearAlpha(),Pe=_e.r,Ne=_e.g,Te=_e.b;pe?(g[0]=Pe,g[1]=Ne,g[2]=Te,g[3]=Se,I.clearBufferuiv(I.COLOR,0,g)):(y[0]=Pe,y[1]=Ne,y[2]=Te,y[3]=Se,I.clearBufferiv(I.COLOR,0,y))}else X|=I.COLOR_BUFFER_BIT}k&&(X|=I.DEPTH_BUFFER_BIT),j&&(X|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Z,!1),n.removeEventListener("webglcontextrestored",J,!1),n.removeEventListener("webglcontextcreationerror",de,!1),fe.dispose(),ye.dispose(),De.dispose(),N.dispose(),T.dispose(),re.dispose(),ze.dispose(),ot.dispose(),ee.dispose(),le.dispose(),le.removeEventListener("sessionstart",Bn),le.removeEventListener("sessionend",gf),nr.stop()};function Z(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const A=yt.autoReset,k=oe.enabled,j=oe.autoUpdate,X=oe.needsUpdate,O=oe.type;U(),yt.autoReset=A,oe.enabled=k,oe.autoUpdate=j,oe.needsUpdate=X,oe.type=O}function de(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Re(A){const k=A.target;k.removeEventListener("dispose",Re),Ge(k)}function Ge(A){vt(A),De.remove(A)}function vt(A){const k=De.get(A).programs;k!==void 0&&(k.forEach(function(j){ee.releaseProgram(j)}),A.isShaderMaterial&&ee.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,j,X,O,ce){k===null&&(k=we);const pe=O.isMesh&&O.matrixWorld.determinant()<0,_e=bx(A,k,j,X,O);Me.setMaterial(X,pe);let Se=j.index,Pe=1;if(X.wireframe===!0){if(Se=te.getWireframeAttribute(j),Se===void 0)return;Pe=2}const Ne=j.drawRange,Te=j.attributes.position;let Ke=Ne.start*Pe,ht=(Ne.start+Ne.count)*Pe;ce!==null&&(Ke=Math.max(Ke,ce.start*Pe),ht=Math.min(ht,(ce.start+ce.count)*Pe)),Se!==null?(Ke=Math.max(Ke,0),ht=Math.min(ht,Se.count)):Te!=null&&(Ke=Math.max(Ke,0),ht=Math.min(ht,Te.count));const ft=ht-Ke;if(ft<0||ft===1/0)return;ze.setup(O,X,_e,j,Se);let an,Ze=Ie;if(Se!==null&&(an=q.get(Se),Ze=ve,Ze.setIndex(an)),O.isMesh)X.wireframe===!0?(Me.setLineWidth(X.wireframeLinewidth*Xe()),Ze.setMode(I.LINES)):Ze.setMode(I.TRIANGLES);else if(O.isLine){let Ee=X.linewidth;Ee===void 0&&(Ee=1),Me.setLineWidth(Ee*Xe()),O.isLineSegments?Ze.setMode(I.LINES):O.isLineLoop?Ze.setMode(I.LINE_LOOP):Ze.setMode(I.LINE_STRIP)}else O.isPoints?Ze.setMode(I.POINTS):O.isSprite&&Ze.setMode(I.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Ze.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))Ze.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ee=O._multiDrawStarts,Lt=O._multiDrawCounts,Qe=O._multiDrawCount,En=Se?q.get(Se).bytesPerElement:1,kr=De.get(X).currentProgram.getUniforms();for(let sn=0;sn<Qe;sn++)kr.setValue(I,"_gl_DrawID",sn),Ze.render(Ee[sn]/En,Lt[sn])}else if(O.isInstancedMesh)Ze.renderInstances(Ke,ft,O.count);else if(j.isInstancedBufferGeometry){const Ee=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Lt=Math.min(j.instanceCount,Ee);Ze.renderInstances(Ke,ft,Lt)}else Ze.render(Ke,ft)};function Dt(A,k,j){A.transparent===!0&&A.side===si&&A.forceSinglePass===!1?(A.side=nn,A.needsUpdate=!0,to(A,k,j),A.side=Ki,A.needsUpdate=!0,to(A,k,j),A.side=si):to(A,k,j)}this.compile=function(A,k,j=null){j===null&&(j=A),m=ye.get(j),m.init(k),v.push(m),j.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),A!==j&&A.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const X=new Set;return A.traverse(function(O){const ce=O.material;if(ce)if(Array.isArray(ce))for(let pe=0;pe<ce.length;pe++){const _e=ce[pe];Dt(_e,j,O),X.add(_e)}else Dt(ce,j,O),X.add(ce)}),v.pop(),m=null,X},this.compileAsync=function(A,k,j=null){const X=this.compile(A,k,j);return new Promise(O=>{function ce(){if(X.forEach(function(pe){De.get(pe).currentProgram.isReady()&&X.delete(pe)}),X.size===0){O(A);return}setTimeout(ce,10)}qe.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Ye=null;function Zn(A){Ye&&Ye(A)}function Bn(){nr.stop()}function gf(){nr.start()}const nr=new cx;nr.setAnimationLoop(Zn),typeof self<"u"&&nr.setContext(self),this.setAnimationLoop=function(A){Ye=A,le.setAnimationLoop(A),A===null?nr.stop():nr.start()},le.addEventListener("sessionstart",Bn),le.addEventListener("sessionend",gf),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(k),k=le.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,k,w),m=ye.get(A,v.length),m.init(k),v.push(m),ne.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ue.setFromProjectionMatrix(ne),Y=this.localClippingEnabled,V=ke.init(this.clippingPlanes,Y),_=fe.get(A,h.length),_.init(),h.push(_),le.enabled===!0&&le.isPresenting===!0){const ce=x.xr.getDepthSensingMesh();ce!==null&&yc(ce,k,-1/0,x.sortObjects)}yc(A,k,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(D,K),Ae=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Ae&&ge.addToRenderList(_,A),this.info.render.frame++,V===!0&&ke.beginShadows();const j=m.state.shadowsArray;oe.render(j,A,k),V===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=_.opaque,O=_.transmissive;if(m.setupLights(),k.isArrayCamera){const ce=k.cameras;if(O.length>0)for(let pe=0,_e=ce.length;pe<_e;pe++){const Se=ce[pe];vf(X,O,A,Se)}Ae&&ge.render(A);for(let pe=0,_e=ce.length;pe<_e;pe++){const Se=ce[pe];yf(_,A,Se,Se.viewport)}}else O.length>0&&vf(X,O,A,k),Ae&&ge.render(A),yf(_,A,k);w!==null&&(Ue.updateMultisampleRenderTarget(w),Ue.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(x,A,k),ze.resetDefaultState(),E=-1,S=null,v.pop(),v.length>0?(m=v[v.length-1],V===!0&&ke.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function yc(A,k,j,X){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ue.intersectsSprite(A)){X&&be.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ne);const pe=re.update(A),_e=A.material;_e.visible&&_.push(A,pe,_e,j,be.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ue.intersectsObject(A))){const pe=re.update(A),_e=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),be.copy(A.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),be.copy(pe.boundingSphere.center)),be.applyMatrix4(A.matrixWorld).applyMatrix4(ne)),Array.isArray(_e)){const Se=pe.groups;for(let Pe=0,Ne=Se.length;Pe<Ne;Pe++){const Te=Se[Pe],Ke=_e[Te.materialIndex];Ke&&Ke.visible&&_.push(A,pe,Ke,j,be.z,Te)}}else _e.visible&&_.push(A,pe,_e,j,be.z,null)}}const ce=A.children;for(let pe=0,_e=ce.length;pe<_e;pe++)yc(ce[pe],k,j,X)}function yf(A,k,j,X){const O=A.opaque,ce=A.transmissive,pe=A.transparent;m.setupLightsView(j),V===!0&&ke.setGlobalState(x.clippingPlanes,j),X&&Me.viewport(b.copy(X)),O.length>0&&eo(O,k,j),ce.length>0&&eo(ce,k,j),pe.length>0&&eo(pe,k,j),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function vf(A,k,j,X){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[X.id]===void 0&&(m.state.transmissionRenderTarget[X.id]=new Pr(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float")?$s:yi,minFilter:_r,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ce=m.state.transmissionRenderTarget[X.id],pe=X.viewport||b;ce.setSize(pe.z,pe.w);const _e=x.getRenderTarget();x.setRenderTarget(ce),x.getClearColor(F),B=x.getClearAlpha(),B<1&&x.setClearColor(16777215,.5),x.clear(),Ae&&ge.render(j);const Se=x.toneMapping;x.toneMapping=qi;const Pe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),m.setupLightsView(X),V===!0&&ke.setGlobalState(x.clippingPlanes,X),eo(A,j,X),Ue.updateMultisampleRenderTarget(ce),Ue.updateRenderTargetMipmap(ce),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Te=0,Ke=k.length;Te<Ke;Te++){const ht=k[Te],ft=ht.object,an=ht.geometry,Ze=ht.material,Ee=ht.group;if(Ze.side===si&&ft.layers.test(X.layers)){const Lt=Ze.side;Ze.side=nn,Ze.needsUpdate=!0,xf(ft,j,X,an,Ze,Ee),Ze.side=Lt,Ze.needsUpdate=!0,Ne=!0}}Ne===!0&&(Ue.updateMultisampleRenderTarget(ce),Ue.updateRenderTargetMipmap(ce))}x.setRenderTarget(_e),x.setClearColor(F,B),Pe!==void 0&&(X.viewport=Pe),x.toneMapping=Se}function eo(A,k,j){const X=k.isScene===!0?k.overrideMaterial:null;for(let O=0,ce=A.length;O<ce;O++){const pe=A[O],_e=pe.object,Se=pe.geometry,Pe=X===null?pe.material:X,Ne=pe.group;_e.layers.test(j.layers)&&xf(_e,k,j,Se,Pe,Ne)}}function xf(A,k,j,X,O,ce){A.onBeforeRender(x,k,j,X,O,ce),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),O.transparent===!0&&O.side===si&&O.forceSinglePass===!1?(O.side=nn,O.needsUpdate=!0,x.renderBufferDirect(j,k,X,O,A,ce),O.side=Ki,O.needsUpdate=!0,x.renderBufferDirect(j,k,X,O,A,ce),O.side=si):x.renderBufferDirect(j,k,X,O,A,ce),A.onAfterRender(x,k,j,X,O,ce)}function to(A,k,j){k.isScene!==!0&&(k=we);const X=De.get(A),O=m.state.lights,ce=m.state.shadowsArray,pe=O.state.version,_e=ee.getParameters(A,O.state,ce,k,j),Se=ee.getProgramCacheKey(_e);let Pe=X.programs;X.environment=A.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(A.isMeshStandardMaterial?T:N).get(A.envMap||X.environment),X.envMapRotation=X.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Pe===void 0&&(A.addEventListener("dispose",Re),Pe=new Map,X.programs=Pe);let Ne=Pe.get(Se);if(Ne!==void 0){if(X.currentProgram===Ne&&X.lightsStateVersion===pe)return Sf(A,_e),Ne}else _e.uniforms=ee.getUniforms(A),A.onBeforeCompile(_e,x),Ne=ee.acquireProgram(_e,Se),Pe.set(Se,Ne),X.uniforms=_e.uniforms;const Te=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Te.clippingPlanes=ke.uniform),Sf(A,_e),X.needsLights=Mx(A),X.lightsStateVersion=pe,X.needsLights&&(Te.ambientLightColor.value=O.state.ambient,Te.lightProbe.value=O.state.probe,Te.directionalLights.value=O.state.directional,Te.directionalLightShadows.value=O.state.directionalShadow,Te.spotLights.value=O.state.spot,Te.spotLightShadows.value=O.state.spotShadow,Te.rectAreaLights.value=O.state.rectArea,Te.ltc_1.value=O.state.rectAreaLTC1,Te.ltc_2.value=O.state.rectAreaLTC2,Te.pointLights.value=O.state.point,Te.pointLightShadows.value=O.state.pointShadow,Te.hemisphereLights.value=O.state.hemi,Te.directionalShadowMap.value=O.state.directionalShadowMap,Te.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Te.spotShadowMap.value=O.state.spotShadowMap,Te.spotLightMatrix.value=O.state.spotLightMatrix,Te.spotLightMap.value=O.state.spotLightMap,Te.pointShadowMap.value=O.state.pointShadowMap,Te.pointShadowMatrix.value=O.state.pointShadowMatrix),X.currentProgram=Ne,X.uniformsList=null,Ne}function _f(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=cl.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function Sf(A,k){const j=De.get(A);j.outputColorSpace=k.outputColorSpace,j.batching=k.batching,j.batchingColor=k.batchingColor,j.instancing=k.instancing,j.instancingColor=k.instancingColor,j.instancingMorph=k.instancingMorph,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function bx(A,k,j,X,O){k.isScene!==!0&&(k=we),Ue.resetTextureUnits();const ce=k.fog,pe=X.isMeshStandardMaterial?k.environment:null,_e=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:tr,Se=(X.isMeshStandardMaterial?T:N).get(X.envMap||pe),Pe=X.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ne=!!j.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Te=!!j.morphAttributes.position,Ke=!!j.morphAttributes.normal,ht=!!j.morphAttributes.color;let ft=qi;X.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ft=x.toneMapping);const an=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ze=an!==void 0?an.length:0,Ee=De.get(X),Lt=m.state.lights;if(V===!0&&(Y===!0||A!==S)){const gn=A===S&&X.id===E;ke.setState(X,A,gn)}let Qe=!1;X.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Lt.state.version||Ee.outputColorSpace!==_e||O.isBatchedMesh&&Ee.batching===!1||!O.isBatchedMesh&&Ee.batching===!0||O.isBatchedMesh&&Ee.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ee.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ee.instancing===!1||!O.isInstancedMesh&&Ee.instancing===!0||O.isSkinnedMesh&&Ee.skinning===!1||!O.isSkinnedMesh&&Ee.skinning===!0||O.isInstancedMesh&&Ee.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ee.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ee.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ee.instancingMorph===!1&&O.morphTexture!==null||Ee.envMap!==Se||X.fog===!0&&Ee.fog!==ce||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ke.numPlanes||Ee.numIntersection!==ke.numIntersection)||Ee.vertexAlphas!==Pe||Ee.vertexTangents!==Ne||Ee.morphTargets!==Te||Ee.morphNormals!==Ke||Ee.morphColors!==ht||Ee.toneMapping!==ft||Ee.morphTargetsCount!==Ze)&&(Qe=!0):(Qe=!0,Ee.__version=X.version);let En=Ee.currentProgram;Qe===!0&&(En=to(X,k,O));let kr=!1,sn=!1,vc=!1;const xt=En.getUniforms(),Si=Ee.uniforms;if(Me.useProgram(En.program)&&(kr=!0,sn=!0,vc=!0),X.id!==E&&(E=X.id,sn=!0),kr||S!==A){xt.setValue(I,"projectionMatrix",A.projectionMatrix),xt.setValue(I,"viewMatrix",A.matrixWorldInverse);const gn=xt.map.cameraPosition;gn!==void 0&&gn.setValue(I,se.setFromMatrixPosition(A.matrixWorld)),$e.logarithmicDepthBuffer&&xt.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&xt.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,sn=!0,vc=!0)}if(O.isSkinnedMesh){xt.setOptional(I,O,"bindMatrix"),xt.setOptional(I,O,"bindMatrixInverse");const gn=O.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),xt.setValue(I,"boneTexture",gn.boneTexture,Ue))}O.isBatchedMesh&&(xt.setOptional(I,O,"batchingTexture"),xt.setValue(I,"batchingTexture",O._matricesTexture,Ue),xt.setOptional(I,O,"batchingIdTexture"),xt.setValue(I,"batchingIdTexture",O._indirectTexture,Ue),xt.setOptional(I,O,"batchingColorTexture"),O._colorsTexture!==null&&xt.setValue(I,"batchingColorTexture",O._colorsTexture,Ue));const xc=j.morphAttributes;if((xc.position!==void 0||xc.normal!==void 0||xc.color!==void 0)&&He.update(O,j,En),(sn||Ee.receiveShadow!==O.receiveShadow)&&(Ee.receiveShadow=O.receiveShadow,xt.setValue(I,"receiveShadow",O.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Si.envMap.value=Se,Si.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&(Si.envMapIntensity.value=k.environmentIntensity),sn&&(xt.setValue(I,"toneMappingExposure",x.toneMappingExposure),Ee.needsLights&&wx(Si,vc),ce&&X.fog===!0&&Ce.refreshFogUniforms(Si,ce),Ce.refreshMaterialUniforms(Si,X,$,W,m.state.transmissionRenderTarget[A.id]),cl.upload(I,_f(Ee),Si,Ue)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(cl.upload(I,_f(Ee),Si,Ue),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&xt.setValue(I,"center",O.center),xt.setValue(I,"modelViewMatrix",O.modelViewMatrix),xt.setValue(I,"normalMatrix",O.normalMatrix),xt.setValue(I,"modelMatrix",O.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const gn=X.uniformsGroups;for(let _c=0,Ex=gn.length;_c<Ex;_c++){const bf=gn[_c];ot.update(bf,En),ot.bind(bf,En)}}return En}function wx(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function Mx(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,k,j){De.get(A.texture).__webglTexture=k,De.get(A.depthTexture).__webglTexture=j;const X=De.get(A);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=j===void 0,X.__autoAllocateDepthBuffer||qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,k){const j=De.get(A);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,j=0){w=A,P=k,C=j;let X=!0,O=null,ce=!1,pe=!1;if(A){const Se=De.get(A);Se.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(I.FRAMEBUFFER,null),X=!1):Se.__webglFramebuffer===void 0?Ue.setupRenderTarget(A):Se.__hasExternalTextures&&Ue.rebindTextures(A,De.get(A.texture).__webglTexture,De.get(A.depthTexture).__webglTexture);const Pe=A.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(pe=!0);const Ne=De.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ne[k])?O=Ne[k][j]:O=Ne[k],ce=!0):A.samples>0&&Ue.useMultisampledRTT(A)===!1?O=De.get(A).__webglMultisampledFramebuffer:Array.isArray(Ne)?O=Ne[j]:O=Ne,b.copy(A.viewport),R.copy(A.scissor),z=A.scissorTest}else b.copy(Q).multiplyScalar($).floor(),R.copy(ae).multiplyScalar($).floor(),z=xe;if(Me.bindFramebuffer(I.FRAMEBUFFER,O)&&X&&Me.drawBuffers(A,O),Me.viewport(b),Me.scissor(R),Me.setScissorTest(z),ce){const Se=De.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,Se.__webglTexture,j)}else if(pe){const Se=De.get(A.texture),Pe=k||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Se.__webglTexture,j||0,Pe)}E=-1},this.readRenderTargetPixels=function(A,k,j,X,O,ce,pe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=De.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&pe!==void 0&&(_e=_e[pe]),_e){Me.bindFramebuffer(I.FRAMEBUFFER,_e);try{const Se=A.texture,Pe=Se.format,Ne=Se.type;if(!$e.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-X&&j>=0&&j<=A.height-O&&I.readPixels(k,j,X,O,Le.convert(Pe),Le.convert(Ne),ce)}finally{const Se=w!==null?De.get(w).__webglFramebuffer:null;Me.bindFramebuffer(I.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(A,k,j,X,O,ce,pe){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=De.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&pe!==void 0&&(_e=_e[pe]),_e){Me.bindFramebuffer(I.FRAMEBUFFER,_e);try{const Se=A.texture,Pe=Se.format,Ne=Se.type;if(!$e.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=A.width-X&&j>=0&&j<=A.height-O){const Te=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Te),I.bufferData(I.PIXEL_PACK_BUFFER,ce.byteLength,I.STREAM_READ),I.readPixels(k,j,X,O,Le.convert(Pe),Le.convert(Ne),0),I.flush();const Ke=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);await NM(I,Ke,4);try{I.bindBuffer(I.PIXEL_PACK_BUFFER,Te),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ce)}finally{I.deleteBuffer(Te),I.deleteSync(Ke)}return ce}}finally{const Se=w!==null?De.get(w).__webglFramebuffer:null;Me.bindFramebuffer(I.FRAMEBUFFER,Se)}}},this.copyFramebufferToTexture=function(A,k=null,j=0){A.isTexture!==!0&&(_s("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,A=arguments[1]);const X=Math.pow(2,-j),O=Math.floor(A.image.width*X),ce=Math.floor(A.image.height*X),pe=k!==null?k.x:0,_e=k!==null?k.y:0;Ue.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,j,0,0,pe,_e,O,ce),Me.unbindTexture()},this.copyTextureToTexture=function(A,k,j=null,X=null,O=0){A.isTexture!==!0&&(_s("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1],k=arguments[2],O=arguments[3]||0,j=null);let ce,pe,_e,Se,Pe,Ne;j!==null?(ce=j.max.x-j.min.x,pe=j.max.y-j.min.y,_e=j.min.x,Se=j.min.y):(ce=A.image.width,pe=A.image.height,_e=0,Se=0),X!==null?(Pe=X.x,Ne=X.y):(Pe=0,Ne=0);const Te=Le.convert(k.format),Ke=Le.convert(k.type);Ue.setTexture2D(k,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const ht=I.getParameter(I.UNPACK_ROW_LENGTH),ft=I.getParameter(I.UNPACK_IMAGE_HEIGHT),an=I.getParameter(I.UNPACK_SKIP_PIXELS),Ze=I.getParameter(I.UNPACK_SKIP_ROWS),Ee=I.getParameter(I.UNPACK_SKIP_IMAGES),Lt=A.isCompressedTexture?A.mipmaps[O]:A.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Lt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Lt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,_e),I.pixelStorei(I.UNPACK_SKIP_ROWS,Se),A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,O,Pe,Ne,ce,pe,Te,Ke,Lt.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,O,Pe,Ne,Lt.width,Lt.height,Te,Lt.data):I.texSubImage2D(I.TEXTURE_2D,O,Pe,Ne,ce,pe,Te,Ke,Lt),I.pixelStorei(I.UNPACK_ROW_LENGTH,ht),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ft),I.pixelStorei(I.UNPACK_SKIP_PIXELS,an),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ze),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ee),O===0&&k.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(A,k,j=null,X=null,O=0){A.isTexture!==!0&&(_s("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,X=arguments[1]||null,A=arguments[2],k=arguments[3],O=arguments[4]||0);let ce,pe,_e,Se,Pe,Ne,Te,Ke,ht;const ft=A.isCompressedTexture?A.mipmaps[O]:A.image;j!==null?(ce=j.max.x-j.min.x,pe=j.max.y-j.min.y,_e=j.max.z-j.min.z,Se=j.min.x,Pe=j.min.y,Ne=j.min.z):(ce=ft.width,pe=ft.height,_e=ft.depth,Se=0,Pe=0,Ne=0),X!==null?(Te=X.x,Ke=X.y,ht=X.z):(Te=0,Ke=0,ht=0);const an=Le.convert(k.format),Ze=Le.convert(k.type);let Ee;if(k.isData3DTexture)Ue.setTexture3D(k,0),Ee=I.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)Ue.setTexture2DArray(k,0),Ee=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const Lt=I.getParameter(I.UNPACK_ROW_LENGTH),Qe=I.getParameter(I.UNPACK_IMAGE_HEIGHT),En=I.getParameter(I.UNPACK_SKIP_PIXELS),kr=I.getParameter(I.UNPACK_SKIP_ROWS),sn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ft.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ft.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Se),I.pixelStorei(I.UNPACK_SKIP_ROWS,Pe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ne),A.isDataTexture||A.isData3DTexture?I.texSubImage3D(Ee,O,Te,Ke,ht,ce,pe,_e,an,Ze,ft.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(Ee,O,Te,Ke,ht,ce,pe,_e,an,ft.data):I.texSubImage3D(Ee,O,Te,Ke,ht,ce,pe,_e,an,Ze,ft),I.pixelStorei(I.UNPACK_ROW_LENGTH,Lt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Qe),I.pixelStorei(I.UNPACK_SKIP_PIXELS,En),I.pixelStorei(I.UNPACK_SKIP_ROWS,kr),I.pixelStorei(I.UNPACK_SKIP_IMAGES,sn),O===0&&k.generateMipmaps&&I.generateMipmap(Ee),Me.unbindTexture()},this.initRenderTarget=function(A){De.get(A).__webglFramebuffer===void 0&&Ue.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Ue.setTextureCube(A,0):A.isData3DTexture?Ue.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ue.setTexture2DArray(A,0):Ue.setTexture2D(A,0),Me.unbindTexture()},this.resetState=function(){P=0,C=0,w=null,Me.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===df?"display-p3":"srgb",n.unpackColorSpace=Je.workingColorSpace===uc?"display-p3":"srgb"}}class jA extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class HA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Qm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Qm(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rf);const GA=`
precision highp float;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,WA=`
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
`,Jm=8;function XA(t){let e=t.trim();e.startsWith("#")&&(e=e.slice(1));let n=255,i=255,r=255;return e.length===3?(n=parseInt(e[0]+e[0],16),i=parseInt(e[1]+e[1],16),r=parseInt(e[2]+e[2],16)):e.length===6&&(n=parseInt(e.slice(0,2),16),i=parseInt(e.slice(2,4),16),r=parseInt(e.slice(4,6),16)),new H(n/255,i/255,r/255)}function qA({linesGradient:t,enabledWaves:e=["top","middle","bottom"],lineCount:n=[6],lineDistance:i=[5],topWavePosition:r,middleWavePosition:a,bottomWavePosition:s={x:2,y:-.7,rotate:-1},animationSpeed:o=1,interactive:l=!0,bendRadius:c=5,bendStrength:d=-.5,mouseDamping:f=.05,parallax:p=!0,parallaxStrength:g=.2,mixBlendMode:y="screen"}){const _=L.useRef(null),m=L.useRef(new je(-1e3,-1e3)),h=L.useRef(new je(-1e3,-1e3)),v=L.useRef(0),x=L.useRef(0),M=L.useRef(new je(0,0)),P=L.useRef(new je(0,0)),C=B=>{if(typeof n=="number")return n;if(!e.includes(B))return 0;const G=e.indexOf(B);return n[G]??6},w=B=>{if(typeof i=="number")return i;if(!e.includes(B))return .1;const G=e.indexOf(B);return i[G]??.1},E=e.includes("top")?C("top"):0,S=e.includes("middle")?C("middle"):0,b=e.includes("bottom")?C("bottom"):0,R=e.includes("top")?w("top")*.01:.01,z=e.includes("middle")?w("middle")*.01:.01,F=e.includes("bottom")?w("bottom")*.01:.01;return L.useEffect(()=>{if(!_.current)return;const B=new jA,G=new ux(-1,1,1,-1,0,1);G.position.z=1;const W=new VA({antialias:!0,alpha:!1});W.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),W.domElement.style.width="100%",W.domElement.style.height="100%",_.current.appendChild(W.domElement);const $={iTime:{value:0},iResolution:{value:new H(1,1,1)},animationSpeed:{value:o},enableTop:{value:e.includes("top")},enableMiddle:{value:e.includes("middle")},enableBottom:{value:e.includes("bottom")},topLineCount:{value:E},middleLineCount:{value:S},bottomLineCount:{value:b},topLineDistance:{value:R},middleLineDistance:{value:z},bottomLineDistance:{value:F},topWavePosition:{value:new H((r==null?void 0:r.x)??10,(r==null?void 0:r.y)??.5,(r==null?void 0:r.rotate)??-.4)},middleWavePosition:{value:new H((a==null?void 0:a.x)??5,(a==null?void 0:a.y)??0,(a==null?void 0:a.rotate)??.2)},bottomWavePosition:{value:new H((s==null?void 0:s.x)??2,(s==null?void 0:s.y)??-.7,(s==null?void 0:s.rotate)??.4)},iMouse:{value:new je(-1e3,-1e3)},interactive:{value:l},bendRadius:{value:c},bendStrength:{value:d},bendInfluence:{value:0},parallax:{value:p},parallaxStrength:{value:g},parallaxOffset:{value:new je(0,0)},lineGradient:{value:Array.from({length:Jm},()=>new H(1,1,1))},lineGradientCount:{value:0}};if(t&&t.length>0){const be=t.slice(0,Jm);$.lineGradientCount.value=be.length,be.forEach((we,Ae)=>{const Xe=XA(we);$.lineGradient.value[Ae].set(Xe.x,Xe.y,Xe.z)})}const D=new xi({uniforms:$,vertexShader:GA,fragmentShader:WA}),K=new Js(2,2),Q=new qn(K,D);B.add(Q);const ae=new HA,xe=()=>{const be=_.current;if(!be)return;const we=be.clientWidth||1,Ae=be.clientHeight||1;W.setSize(we,Ae,!1);const Xe=W.domElement.width,I=W.domElement.height;$.iResolution.value.set(Xe,I,1)};xe();const ue=typeof ResizeObserver<"u"?new ResizeObserver(xe):null;ue&&_.current&&ue.observe(_.current);const V=be=>{const we=W.domElement.getBoundingClientRect(),Ae=be.clientX-we.left,Xe=be.clientY-we.top,I=W.getPixelRatio();if(m.current.set(Ae*I,(we.height-Xe)*I),v.current=1,p){const dt=we.width/2,qe=we.height/2,$e=(Ae-dt)/we.width,Me=-(Xe-qe)/we.height;M.current.set($e*g,Me*g)}},Y=()=>{v.current=0};l&&(W.domElement.addEventListener("pointermove",V),W.domElement.addEventListener("pointerleave",Y));let ne=0;const se=()=>{$.iTime.value=ae.getElapsedTime(),l&&(h.current.lerp(m.current,f),$.iMouse.value.copy(h.current),x.current+=(v.current-x.current)*f,$.bendInfluence.value=x.current),p&&(P.current.lerp(M.current,f),$.parallaxOffset.value.copy(P.current)),W.render(B,G),ne=requestAnimationFrame(se)};return se(),()=>{cancelAnimationFrame(ne),ue&&_.current&&ue.disconnect(),l&&(W.domElement.removeEventListener("pointermove",V),W.domElement.removeEventListener("pointerleave",Y)),K.dispose(),D.dispose(),W.dispose(),W.domElement.parentElement&&W.domElement.parentElement.removeChild(W.domElement)}},[o,c,d,b,F,s,e,l,n,i,t,S,z,a,f,p,g,E,R,r]),u.jsx("div",{ref:_,className:"floating-lines-container",style:{mixBlendMode:y}})}function $A(){return u.jsxs("div",{className:"ambient-bg","aria-hidden":"true",children:[u.jsx("div",{className:"ambient-layer",children:u.jsx(Dw,{gradientColors:["#1a1f2b","#0b1020","#2b1140"],blindCount:14,spotlightOpacity:.6,noise:.28,shineDirection:"right"})}),u.jsx("div",{className:"ambient-layer",style:{mixBlendMode:"screen",opacity:.6},children:u.jsx(qA,{linesGradient:["#22d3ee","#4f7cff"],lineCount:[3,5,3]})}),u.jsx("div",{className:"ambient-overlay"})]})}function YA(){const{pathname:t}=Lr();return L.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},[t]),null}const pf="http://localhost:8080";async function Ve(t,e){const n={"Content-Type":"application/json",...(e==null?void 0:e.headers)||{}},i=await fetch(`${pf}${t}`,{...e,headers:n});if(!i.ok){const r=await i.text();throw new Error(r||`Request failed: ${i.status}`)}return i.json()}const rs={heroTitle:"INERTIA 2.0: JEC Annual Tech Fest",heroSubtitle:"The flagship annual festival at Jabalpur Engineering College, featuring Hackathon, Workshops, Robo Race, eSports, Open Mic, and culture.",dates:"Coming 2026",location:"Jabalpur Engineering College, Jabalpur, Madhya Pradesh",highlights:["Hackathon","IoT Workshop","Robo Race","eSports Arena","Open Mic Stage","DJ Night & Culture Fest"]},Ss=[{id:1,slug:"hackathon",title:"Hackathon",description:"2-day hackathon: prototype build on 26 Feb and stage presentation on 27 Feb. Fixed team size: 4 (leader + 3 members).",dateLabel:"26-27 Feb",ctaLabel:"Register Hackathon"},{id:2,slug:"workshops",title:"Workshop",description:"IoT-based single phase induction motor and speed control system workshop.",dateLabel:"2 Days",ctaLabel:"Register Workshop"},{id:3,slug:"robo-race",title:"Kinetic ShowDown",description:"RC car design and race challenge with teams of 2 to 4 members.",dateLabel:"Final Day",ctaLabel:"Register Robo Race"},{id:4,slug:"esports",title:"eSports",description:"Compete in Valorant (5 players) or BGMI (4 players).",dateLabel:"Tournament",ctaLabel:"Register eSports"},{id:5,slug:"open-mic",title:"Open Mic",description:"Free stage registration for performers.",dateLabel:"Open Stage",ctaLabel:"Register Open Mic"}],Cu=[{id:1,question:"What is the hackathon schedule?",answer:"26 February: prototype build. 27 February: stage presentation and explanation."},{id:2,question:"What is the hackathon registration fee?",answer:"The Hackathon registration fee is INR 300 per team."},{id:6,question:"What is the hackathon team size?",answer:"Exactly 4 members per team: 1 leader + 3 members."},{id:3,question:"What are the eSports team sizes?",answer:"Valorant needs 5 players, BGMI needs 4 players."},{id:4,question:"When are hackathon problem statements announced?",answer:"Problem statements are revealed on the spot."},{id:5,question:"Can I register for multiple events?",answer:"Yes, you can register for Hackathon, Workshops, Robo Race, eSports, and Open Mic."}];function eg(t){return t.replace(/CodeHunt Hackathon/gi,"Hackathon").replace(/Kinetic Showdown/gi,"Robo Race").replace(/Workshop Series/gi,"IoT Workshop")}function KA(t){const e=t.map(a=>a.slug==="robo-race"||a.slug==="kinetic-showdown"?{...a,slug:"robo-race",title:"Robo Race",ctaLabel:"Register Robo Race"}:a.slug==="hackathon"?{...a,title:"Hackathon",ctaLabel:"Register Hackathon"}:a.slug==="workshops"?{...a,title:"Workshop",description:"IoT-based single phase induction motor and speed control system workshop.",ctaLabel:"Register Workshop"}:a),n=e.some(a=>a.slug==="open-mic"),i=e.some(a=>a.slug==="esports"),r=[...e];return i||r.push(Ss.find(a=>a.slug==="esports")),n||r.push(Ss.find(a=>a.slug==="open-mic")),r}function ZA(){const[t,e]=L.useState(rs),[n,i]=L.useState(Ss),[r,a]=L.useState([]),[s,o]=L.useState(Cu);return L.useEffect(()=>{Ve("/api/landing").then(l=>e({...rs,...l,heroSubtitle:rs.heroSubtitle,highlights:rs.highlights})).catch(()=>null),Ve("/api/events").then(l=>i(Array.isArray(l)&&l.length>0?KA(l):Ss)).catch(()=>null),Ve("/api/gallery").then(l=>a(Array.isArray(l)?l:[])).catch(()=>a([])),Ve("/api/faqs").then(l=>o(Array.isArray(l)?l.map(c=>({...c,question:eg(c.question),answer:eg(c.answer)})):Cu)).catch(()=>null)},[]),u.jsxs(u.Fragment,{children:[u.jsxs("section",{className:"hero",children:[u.jsx("div",{className:"hero-grid",children:u.jsxs("div",{className:"text-panel",children:[u.jsx("span",{className:"hero-tag",children:"Annual Tech Fest · JEC"}),u.jsx("h1",{className:"hero-title",children:t.heroTitle}),u.jsx("p",{className:"hero-subtitle",children:t.heroSubtitle}),u.jsxs("div",{className:"hero-actions",children:[u.jsx(Pt,{className:"btn btn-primary",to:"/register",children:"Register Now"}),u.jsx(Pt,{className:"btn btn-ghost",to:"/hackathon",children:"Hackathon Registration"})]}),u.jsxs("div",{className:"pillars",children:[u.jsx("span",{className:"pillar",children:t.dates}),u.jsx("span",{className:"pillar",children:t.location})]})]})}),u.jsx("div",{className:"section-divider"})]}),u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Fest Highlights"}),u.jsx("p",{className:"section-subtitle",children:"Explore the core experiences of Inertia 2.0 and plan your festival journey."}),u.jsx("div",{className:"cards-grid",children:(t.highlights??rs.highlights).map((l,c)=>u.jsxs("div",{className:"card",children:[u.jsx("span",{className:"badge",children:"Highlight"}),u.jsx("h4",{children:l}),u.jsx("p",{children:"Join early to secure your spot and stay updated on schedules."})]},c))})]}),u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"About Jabalpur Engineering College"}),u.jsx("p",{className:"section-subtitle",children:"Jabalpur Engineering College (JEC) was established in 1947 and is the first engineering college in Central India. The campus hosts undergraduate, postgraduate, and doctoral programs and is known for academic excellence, research culture, and innovation-driven learning."}),u.jsxs("div",{className:"cards-grid",children:[u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:"Legacy of Excellence"}),u.jsx("p",{children:"Decades of engineering education with strong industry and research outcomes."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:"Research & Innovation"}),u.jsx("p",{children:"Modern labs and faculty guidance that fuel experimentation and new ideas."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:"Campus Experience"}),u.jsx("p",{children:"A sprawling campus in Jabalpur built for collaboration and maker culture."})]})]})]}),u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"INERTIA 2.0 Lineup"}),u.jsx("p",{className:"section-subtitle",children:"INERTIA 2.0 expands the festival with a stronger mix of technical and cultural experiences."}),u.jsxs("div",{className:"cards-grid",children:[u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:"Tech Talks"}),u.jsx("p",{children:"Industry leaders and researchers share insights, trends, and real-world case studies."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:"Startup & Project Expo"}),u.jsx("p",{children:"Showcase innovations, prototypes, and student ventures from across the region."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:"Automotive Competition"}),u.jsx("p",{children:"Speed, strategy, and engineering challenges focused on mobility and design."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:"Defense Expo"}),u.jsx("p",{children:"Explore defense tech, engineering showcases, and innovation exhibits."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:"Cultural Extravaganza"}),u.jsx("p",{children:"Live stage performances, DJ night, and celebration across the campus."})]})]})]}),u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Workshop Spotlight"}),u.jsx("p",{className:"section-subtitle",children:"Only one workshop will be conducted: IoT-based single phase induction motor and speed control system."}),u.jsx("div",{className:"cards-grid",children:u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:"IoT-Based Motor Speed Control Workshop"}),u.jsx("p",{children:"Mentor: Dr. Praveen Kumar Sharma (PhD, NIT Durgapur)."}),u.jsx("p",{children:"Date: 26-27 February 2026."}),u.jsx("p",{children:"Venue: Jashan Audi, JEC Jabalpur."}),u.jsx("p",{children:"Fee: INR 300."})]})})]}),u.jsxs("section",{className:"section dark",children:[u.jsx("h2",{className:"section-title",children:"Core Events"}),u.jsx("p",{className:"section-subtitle",children:"Hackathon, Workshop, Robo Race, eSports, and Open Mic with dedicated registration flows."}),u.jsx("div",{className:"event-grid",children:(n&&n.length>0?n:Ss).map(l=>u.jsxs("div",{className:"event-card",children:[u.jsx("span",{className:"badge",children:l.dateLabel}),u.jsx("h3",{children:l.title}),u.jsx("p",{children:l.description}),u.jsx(Pt,{className:"btn btn-ghost",to:`/${l.slug}`,children:l.ctaLabel})]},l.id))})]}),u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Impact Snapshot"}),u.jsx("p",{className:"section-subtitle",children:"From participation to media reach, INERTIA continues to grow each year."}),u.jsxs("div",{className:"cards-grid",children:[u.jsxs("div",{className:"card",children:[u.jsx("span",{className:"badge",children:"Footfall"}),u.jsx("h4",{children:"1,900+"}),u.jsx("p",{children:"Peak campus footfall recorded for the INERTIA edition."})]}),u.jsxs("div",{className:"card",children:[u.jsx("span",{className:"badge",children:"Social Reach"}),u.jsx("h4",{children:"562+"}),u.jsx("p",{children:"Social media reach benchmark from the brochure insights."})]}),u.jsxs("div",{className:"card",children:[u.jsx("span",{className:"badge",children:"Media Coverage"}),u.jsx("h4",{children:"4 Outlets"}),u.jsx("p",{children:"Coverage across Dainik Bhaskar, Patrika, Nayi Dunia, and Hari Bhoomi."})]})]})]}),u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Glimpses"}),u.jsx("p",{className:"section-subtitle",children:"Highlights and memories from previous editions."}),r.length===0?u.jsx("div",{className:"banner empty-state",children:"No entries available yet."}):u.jsx("div",{className:"gallery-grid",children:r.map(l=>u.jsxs("div",{className:"gallery-card",children:[u.jsx("img",{src:l.imageUrl,alt:l.title}),u.jsxs("div",{className:"gallery-meta",children:[u.jsx("strong",{children:l.preview||l.title}),u.jsx("p",{children:l.description})]})]},l.id))})]}),u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"FAQs"}),u.jsx("div",{className:"faq-list",children:(s??Cu).map(l=>u.jsxs("div",{className:"faq-item",children:[u.jsx("strong",{children:l.question}),u.jsx("p",{children:l.answer})]},l.id))})]})]})}function QA(){return u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"CodeHunt Hackathon"}),u.jsxs("div",{className:"banner",style:{marginBottom:"18px"},children:[u.jsx("strong",{children:"Top Note: We only need the solution for the idea."}),u.jsx("p",{style:{margin:"8px 0 0"},children:"Focus on solving the problem clearly. Your implementation can be simple, scrappy, or polished. Vibe coding is allowed."})]}),u.jsxs("div",{className:"banner",style:{marginBottom:"18px"},children:[u.jsx("strong",{children:"Important: Team size is fixed to 4 members only"}),u.jsx("p",{style:{margin:"8px 0 0"},children:"1 Leader + 3 Team Members"})]}),u.jsxs("div",{className:"prize-pool-spotlight",children:[u.jsx("span",{className:"prize-pool-label",children:"Prize Pool"}),u.jsx("div",{className:"prize-pool-value",children:"INR 12,000"})]}),u.jsx("p",{className:"section-subtitle",children:"Two-day hackathon with internship interview opportunities, prototype building, and live stage presentations."}),u.jsx("div",{className:"cards-grid",style:{marginTop:"24px"},children:u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:"Hackathon Sponsors"}),u.jsxs("div",{className:"sponsor-row",children:[u.jsx("img",{className:"sponsor-logo",src:"/time.png",alt:"Time sponsor",onError:t=>t.currentTarget.style.display="none"}),u.jsx("img",{className:"sponsor-logo",src:"/upgrad.png",alt:"upGrad sponsor",onError:t=>t.currentTarget.style.display="none"})]}),u.jsx("p",{style:{marginTop:"12px"},children:"Sponsors: TIME and upGrad."})]})}),u.jsxs("div",{className:"banner",style:{marginTop:"22px"},children:[u.jsx("h4",{style:{marginTop:0},children:"Why Join CodeHunt Hackathon"}),u.jsxs("ul",{children:[u.jsxs("li",{children:[u.jsx("strong",{children:"Day 1 (26 February):"})," Build your prototype."]}),u.jsxs("li",{children:[u.jsx("strong",{children:"Day 2 (27 February):"})," Present and explain your prototype live on stage."]}),u.jsxs("li",{children:[u.jsx("strong",{children:"Team size rule:"})," Exactly 4 members (1 leader + 3 members)."]}),u.jsx("li",{children:"Problem statements are available in your team dashboard."}),u.jsxs("li",{children:[u.jsx("strong",{children:"Vibe coding is allowed:"})," Use AI tools, rapid prototyping, and creative workflows to build your solution faster."]}),u.jsx("li",{children:"100% internship opportunity path: 10 participants will be shortlisted for internship interviews at upGrad or TIME."}),u.jsx("li",{children:"Refreshments will be provided during the hackathon."}),u.jsx("li",{children:"Strong exposure for students across Jabalpur."})]})]}),u.jsxs("div",{className:"card",style:{marginTop:"24px"},children:[u.jsx("h4",{children:"Problem Statements"}),u.jsx("p",{children:"Use your Team ID to unlock your assigned theme and choose your final problem statement."}),u.jsx(Pt,{className:"btn btn-primary",to:"/problemstatement",children:"View Problem Statement"})]})]})}const tg="razorpay-checkout-script";function JA(){if(window.Razorpay)return Promise.resolve();const t=document.getElementById(tg);return t?new Promise((e,n)=>{t.addEventListener("load",()=>e(),{once:!0}),t.addEventListener("error",()=>n(new Error("Unable to load payment gateway")),{once:!0})}):new Promise((e,n)=>{const i=document.createElement("script");i.id=tg,i.src="https://checkout.razorpay.com/v1/checkout.js",i.async=!0,i.onload=()=>e(),i.onerror=()=>n(new Error("Unable to load payment gateway")),document.body.appendChild(i)})}function eR(t,e,n){return new Promise((i,r)=>{if(!window.Razorpay){r(new Error("Payment gateway not available"));return}new window.Razorpay({key:t.key,amount:t.amount,currency:t.currency,name:"Inertia 2.0",description:`${n} Registration`,order_id:t.orderId,prefill:e,theme:{color:"#1d4ed8"},handler:s=>{i({razorpayOrderId:s.razorpay_order_id,razorpayPaymentId:s.razorpay_payment_id,razorpaySignature:s.razorpay_signature})},modal:{ondismiss:()=>r(new Error("Payment was cancelled"))}}).open()})}async function gx(t,e,n){return yx(t,e,n)}async function yx(t,e,n,i){await JA();const r=await Ve("/api/payments/razorpay/order",{method:"POST",body:JSON.stringify({event:t})});return eR(r,e,n)}const fc={hackathon:"https://chat.whatsapp.com/Levkc07bFIPJrgUcvvHx18?mode=gi_t",kineticShowdown:"https://chat.whatsapp.com/IwlQQ0CvlZXDrQuOEysHNk?mode=gi_t",workshops:"https://chat.whatsapp.com/KdtdwL2U4LoLffzGjiy6Nj?mode=gi_t",esports:"https://chat.whatsapp.com/LGGupN5pEaf8oyTq3vNC1F?mode=gi_t",openMic:"https://chat.whatsapp.com/LbqecHlh4iZJXabqiVZPWM?mode=gi_t"};function pc(t){window.location.href=t}const Go={id:1,title:"IoT-Based Single Phase Induction Motor / Speed Control System",description:"Mentor: Dr. Praveen Kumar Sharma (PhD, NIT Durgapur) | Date: 26-27 Feb 2026 | Venue: Jashan Audi, JEC Jabalpur | Fee: INR 300."};function tR(){var c;const[t,e]=L.useState([Go]),[n,i]=L.useState({name:"",phone:"",collegeName:"",workshopId:String(Go.id)}),[r,a]=L.useState(""),[s,o]=L.useState(!1);L.useEffect(()=>{Ve("/api/workshops").then(d=>{if(!Array.isArray(d)||d.length===0)return;const f=d.find(p=>/iot|single phase|induction|speed control/i.test(`${p.title} ${p.description}`))??d[0];e([{...Go,id:f.id}]),i(p=>({...p,workshopId:String(f.id)}))}).catch(()=>null)},[]);const l=async d=>{d.preventDefault(),a(""),o(!0);try{const f=await gx("workshops",{name:n.name,contact:n.phone},"Workshop"),p=await Ve("/api/workshops/register",{method:"POST",body:JSON.stringify({...n,...f})});a(`${p.message} Redirecting to WhatsApp group...`),i(g=>({name:"",phone:"",collegeName:"",workshopId:g.workshopId})),setTimeout(()=>pc(fc.workshops),1400)}catch(f){a(f instanceof Error?f.message:"Unable to register")}finally{o(!1)}};return u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Workshop"}),u.jsx("p",{className:"section-subtitle",children:"Only one workshop is available. Complete registration below."}),u.jsx("div",{className:"cards-grid",children:t.map(d=>u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:d.title}),u.jsx("p",{children:d.description})]},d.id))}),u.jsxs("div",{className:"card",style:{marginTop:"28px"},children:[u.jsx("h4",{children:"Workshop Registration"}),u.jsxs("form",{className:"form-grid",onSubmit:l,children:[u.jsx("input",{placeholder:"Full name",value:n.name,onChange:d=>i({...n,name:d.target.value}),required:!0}),u.jsx("input",{placeholder:"WhatsApp number",value:n.phone,onChange:d=>i({...n,phone:d.target.value}),required:!0}),u.jsx("input",{placeholder:"College name",value:n.collegeName,onChange:d=>i({...n,collegeName:d.target.value}),required:!0}),u.jsx("input",{value:((c=t[0])==null?void 0:c.title)??Go.title,readOnly:!0}),u.jsx("button",{className:"btn btn-primary",type:"submit",disabled:s,children:s?"Processing Payment...":"Pay & Register Workshop"})]}),r&&u.jsx("div",{className:"banner",style:{marginTop:"18px"},children:r})]})]})}function ng(){const t=L.useRef(null),[e,n]=L.useState({teamName:"",teamLeaderName:"",phone:"",collegeName:"",memberCount:2}),[i,r]=L.useState([{name:"",phone:"",branch:"",semester:"",collegeName:""},{name:"",phone:"",branch:"",semester:"",collegeName:""}]),[a,s]=L.useState(""),[o,l]=L.useState(!1),c=L.useMemo(()=>Math.max(2,Math.min(4,e.memberCount)),[e.memberCount]),d=y=>{r(_=>_.length===y?_:_.length>y?_.slice(0,y):[..._,...Array.from({length:y-_.length},()=>({name:"",phone:"",branch:"",semester:"",collegeName:""}))])},f=y=>{const _=Number(y),m=Number.isNaN(_)?2:Math.max(2,Math.min(4,_));n(h=>({...h,memberCount:m})),d(m)},p=(y,_,m)=>{r(h=>h.map((v,x)=>x===y?{...v,[_]:m}:v))},g=async y=>{y.preventDefault(),s(""),l(!0);try{const _=await yx("kinetic-showdown",{name:e.teamLeaderName,contact:e.phone},"Kinetic Showdown"),m=i.map(v=>({...v,collegeName:v.collegeName||e.collegeName})),h=await Ve("/api/kinetic-showdown/register",{method:"POST",body:JSON.stringify({...e,memberCount:c,members:m,..._})});s(`${h.message} Redirecting to WhatsApp group...`),n({teamName:"",teamLeaderName:"",phone:"",collegeName:"",memberCount:2}),r([{name:"",phone:"",branch:"",semester:"",collegeName:""},{name:"",phone:"",branch:"",semester:"",collegeName:""}]),setTimeout(()=>pc(fc.kineticShowdown),1400)}catch(_){s(_ instanceof Error?_.message:"Unable to register")}finally{l(!1)}};return u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Kinetic Showdown"}),u.jsxs("div",{className:"prize-pool-spotlight",children:[u.jsx("span",{className:"prize-pool-label",children:"Prize Pool"}),u.jsx("div",{className:"prize-pool-value",children:"INR 12,000"})]}),u.jsx("p",{className:"section-subtitle",children:"Team entry: INR 300 per team. Choose 2 to 4 members and complete payment."}),u.jsxs("div",{className:"banner",children:[u.jsx("h4",{style:{marginTop:0},children:"RC Car Competition - Information Brochure"}),u.jsx("p",{children:"COSMOS JEC is organizing the Kinetic Showdown RC Car competition during Inertia."}),u.jsxs("ul",{children:[u.jsx("li",{children:"Team size: minimum 2 and maximum 4."}),u.jsx("li",{children:"Car limit: max 20cm x 20cm, max height 15cm, max weight 1.2kg."}),u.jsx("li",{children:"No readymade framework/design; participants must build their own solution."}),u.jsx("li",{children:"Wireless control required (Wi-Fi/Bluetooth/LoRa/Zigbee/RF modules)."}),u.jsx("li",{children:"Allowed stacks include Arduino, ESP, STM, Raspberry Pi, and similar platforms."}),u.jsx("li",{children:"Chassis can be MDF/foam/cardboard/acrylic/3D print or other strong material."}),u.jsx("li",{children:"Power must be on-board; no wired external power source."}),u.jsx("li",{children:"Scoring: Build quality 10%, component decisions 10%, architecture 20%, creativity 10%, race 50%."})]})]}),u.jsx("div",{style:{marginTop:"22px"},children:u.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>{var y;return(y=t.current)==null?void 0:y.scrollIntoView({behavior:"smooth",block:"start"})},children:"Registration"})}),u.jsxs("div",{className:"card",style:{marginTop:"24px"},ref:t,children:[u.jsx("h4",{children:"Kinetic Showdown Registration"}),u.jsxs("form",{className:"form-grid",onSubmit:g,children:[u.jsx("input",{placeholder:"Team name",value:e.teamName,onChange:y=>n({...e,teamName:y.target.value}),required:!0}),u.jsx("input",{placeholder:"Team leader name",value:e.teamLeaderName,onChange:y=>n({...e,teamLeaderName:y.target.value}),required:!0}),u.jsx("input",{placeholder:"WhatsApp number",value:e.phone,onChange:y=>n({...e,phone:y.target.value}),required:!0}),u.jsx("input",{placeholder:"College name",value:e.collegeName,onChange:y=>n({...e,collegeName:y.target.value}),required:!0}),u.jsx("input",{type:"number",min:2,max:4,value:c,onChange:y=>f(y.target.value),required:!0}),i.map((y,_)=>u.jsxs("div",{className:"card",children:[u.jsxs("h4",{children:["Student ",_+1]}),u.jsxs("div",{className:"form-grid",children:[u.jsx("input",{placeholder:"Student name",value:y.name,onChange:m=>p(_,"name",m.target.value),required:!0}),u.jsx("input",{placeholder:"Student WhatsApp number",value:y.phone,onChange:m=>p(_,"phone",m.target.value),required:!0}),u.jsx("input",{placeholder:"Branch",value:y.branch,onChange:m=>p(_,"branch",m.target.value),required:!0}),u.jsx("input",{placeholder:"Semester / Year",value:y.semester,onChange:m=>p(_,"semester",m.target.value),required:!0}),u.jsx("input",{placeholder:"College name",value:y.collegeName,onChange:m=>p(_,"collegeName",m.target.value),required:!0})]})]},_)),u.jsx("button",{className:"btn btn-primary",type:"submit",disabled:o,children:o?"Processing Payment...":"Pay INR 300 & Register"})]}),a&&u.jsx("div",{className:"banner",style:{marginTop:"18px"},children:a})]})]})}function ig(t){return Array.from({length:t},()=>({name:"",whatsappNumber:"",gameId:""}))}function nR(){const[t,e]=L.useState("team"),[n,i]=L.useState("valorant"),[r,a]=L.useState({teamName:"",isCollegeParticipant:"yes",collegeName:"",teamLeaderName:"",teamLeaderPhone:""}),[s,o]=L.useState({playerName:"",whatsappNumber:"",gameId:"",isCollegeParticipant:"yes",collegeName:""}),[l,c]=L.useState("no"),[d,f]=L.useState({name:"",gameId:"",whatsappNumber:""}),[p,g]=L.useState(ig(5)),[y,_]=L.useState(!1),[m,h]=L.useState(""),v=n==="bgmi",x=L.useMemo(()=>n==="valorant"?5:4,[n]),M=L.useMemo(()=>t==="solo"?n==="valorant"?"INR 60":"INR 50":n==="valorant"?"INR 300":"INR 200",[n,t]),P=L.useMemo(()=>t==="solo"?n==="valorant"?"esports-solo-valorant":"esports-solo-bgmi":n==="valorant"?"esports-valorant":"esports-bgmi",[n,t]),C=S=>{i(S),g(ig(S==="valorant"?5:4))},w=(S,b,R)=>{g(z=>z.map((F,B)=>B===S?{...F,[b]:R}:F))},E=async S=>{if(S.preventDefault(),h(""),v){h("BGMI seats are full. Registrations are closed.");return}_(!0);try{const b=t==="solo"?{name:s.playerName,contact:s.whatsappNumber}:{name:r.teamLeaderName,contact:r.teamLeaderPhone},R=await gx(P,b,t==="solo"?`Solo eSports ${n.toUpperCase()}`:`eSports ${n.toUpperCase()}`),z=t==="solo"?"/api/esports/solo-register":"/api/esports/register",F=t==="solo"?{game:n,playerName:s.playerName,whatsappNumber:s.whatsappNumber,gameId:s.gameId,isCollegeParticipant:s.isCollegeParticipant==="yes",collegeName:s.isCollegeParticipant==="yes"?s.collegeName.trim():"",...R}:{...r,isCollegeParticipant:r.isCollegeParticipant==="yes",collegeName:r.isCollegeParticipant==="yes"?r.collegeName.trim():"",game:n,members:p.map(G=>({...G})),hasSubstitute:l==="yes",...l==="yes"?{substitutePlayer:d}:{},...R},B=await Ve(z,{method:"POST",body:JSON.stringify(F)});h(`${B.message} Redirecting to WhatsApp group...`),setTimeout(()=>pc(fc.esports),1400)}catch(b){h(b instanceof Error?b.message:"Unable to register")}finally{_(!1)}};return u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"eSports"}),u.jsxs("div",{className:"prize-pool-spotlight",children:[u.jsx("span",{className:"prize-pool-label",children:"Prize Pool"}),u.jsx("div",{className:"prize-pool-value",children:"INR 11,000"})]}),u.jsx("p",{className:"section-subtitle",children:"Select game first: Valorant (5 players, INR 300 per team) or BGMI (4 players, INR 200 per team)."}),u.jsxs("div",{className:"card",style:{marginTop:"20px"},children:[u.jsx("h4",{children:"Core Tournament Rules & Requirements"}),u.jsxs("ul",{children:[u.jsx("li",{children:"Team composition: 5 main players and up to 2 substitutes."}),u.jsx("li",{children:"No account recruitment is allowed."}),u.jsx("li",{children:"Device restriction (BGMI): only mobile/tablet devices are allowed. Emulator usage leads to ban/disqualification."}),u.jsx("li",{children:"Account requirements (BGMI): minimum tier and level may be required (for example Gold V and Level 15+)."}),u.jsx("li",{children:"Game mode (BGMI): Classic mode (Squad)."}),u.jsx("li",{children:"BGMI map pool: Erangel, Miramar, and Rondo."}),u.jsx("li",{children:"Valorant map order: Ascent, Split, Haven (Finale)."}),u.jsx("li",{children:"Points system (BGMI): based on placement and kills. Tiebreakers prioritize total kills, then Chicken Dinner count."}),u.jsx("li",{children:"Winning qualifies the team for the next round."}),u.jsx("li",{children:"No toxic behavior, toxic chat/voice chat, griefing, or team killing will be tolerated."})]}),u.jsx("h4",{style:{marginTop:"16px"},children:"Match Procedures"}),u.jsxs("ul",{children:[u.jsx("li",{children:"Check-in: teams must join the custom room/party 10-15 minutes before match start."}),u.jsx("li",{children:"Recording/proof: players may be required to record POV/screen and submit it if requested."}),u.jsx("li",{children:"Technical issues: players are responsible for their own internet connectivity."})]}),u.jsx("h4",{style:{marginTop:"16px"},children:"Violations & Penalties"}),u.jsxs("ul",{children:[u.jsx("li",{children:"Cheating (ESP, aimbot, hacks): permanent ban and disqualification."}),u.jsx("li",{children:"Intentional exploitation of bugs/glitches is prohibited."}),u.jsx("li",{children:"Offensive team names or player names are not allowed."})]})]}),u.jsxs("div",{className:"card",style:{marginTop:"24px"},children:[u.jsx("h4",{children:"eSports Registration"}),u.jsxs("form",{className:"form-grid",onSubmit:E,children:[u.jsxs("select",{value:n,onChange:S=>C(S.target.value),children:[u.jsx("option",{value:"valorant",children:"Valorant (5 players)"}),u.jsx("option",{value:"bgmi",children:"BGMI (Seats Full)"})]}),v&&u.jsx("div",{className:"banner",children:"BGMI seats are full. Registrations are closed."}),u.jsxs("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:[u.jsx("button",{type:"button",className:`btn ${t==="team"?"btn-primary":"btn-ghost"}`,onClick:()=>e("team"),children:"Team Registration"}),u.jsx("button",{type:"button",className:`btn ${t==="solo"?"btn-primary":"btn-ghost"}`,onClick:()=>e("solo"),children:"Solo Registration"})]}),t==="solo"&&u.jsx("div",{className:"banner",style:{marginBottom:"8px"},children:"You can register solo for BGMI or Valorant. You will still play in squad format and we will match you with random teammates. If a full team cannot be formed, your registration amount will be refunded."}),t==="team"?u.jsxs(u.Fragment,{children:[u.jsx("input",{placeholder:"Team name",value:r.teamName,onChange:S=>a({...r,teamName:S.target.value}),required:!0}),u.jsxs("select",{value:r.isCollegeParticipant,onChange:S=>a({...r,isCollegeParticipant:S.target.value}),children:[u.jsx("option",{value:"yes",children:"Are you from a college? Yes"}),u.jsx("option",{value:"no",children:"Are you from a college? No"})]}),r.isCollegeParticipant==="yes"&&u.jsx("input",{placeholder:"College name",value:r.collegeName,onChange:S=>a({...r,collegeName:S.target.value}),required:!0}),u.jsx("input",{placeholder:"Team leader name",value:r.teamLeaderName,onChange:S=>a({...r,teamLeaderName:S.target.value}),required:!0}),u.jsx("input",{placeholder:"Team leader WhatsApp number",value:r.teamLeaderPhone,onChange:S=>a({...r,teamLeaderPhone:S.target.value}),required:!0}),p.map((S,b)=>u.jsxs("div",{className:"card",children:[u.jsxs("h4",{children:["Player ",b+1]}),u.jsxs("div",{className:"form-grid",children:[u.jsx("input",{placeholder:"Name",value:S.name,onChange:R=>w(b,"name",R.target.value),required:!0}),u.jsx("input",{placeholder:"WhatsApp number",value:S.whatsappNumber,onChange:R=>w(b,"whatsappNumber",R.target.value),required:!0}),u.jsx("input",{placeholder:"Game ID",value:S.gameId,onChange:R=>w(b,"gameId",R.target.value),required:!0})]})]},b)),u.jsxs("select",{value:l,onChange:S=>c(S.target.value),children:[u.jsx("option",{value:"no",children:"Need substitute player? No"}),u.jsx("option",{value:"yes",children:"Need substitute player? Yes"})]}),l==="yes"&&u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:"Substitute Player Details"}),u.jsxs("div",{className:"form-grid",children:[u.jsx("input",{placeholder:"Substitute name",value:d.name,onChange:S=>f({...d,name:S.target.value}),required:!0}),u.jsx("input",{placeholder:"Substitute Game ID",value:d.gameId,onChange:S=>f({...d,gameId:S.target.value}),required:!0}),u.jsx("input",{placeholder:"Substitute WhatsApp number",value:d.whatsappNumber,onChange:S=>f({...d,whatsappNumber:S.target.value}),required:!0})]})]})]}):u.jsxs(u.Fragment,{children:[u.jsx("input",{placeholder:"Player name",value:s.playerName,onChange:S=>o({...s,playerName:S.target.value}),required:!0}),u.jsx("input",{placeholder:"WhatsApp number",value:s.whatsappNumber,onChange:S=>o({...s,whatsappNumber:S.target.value}),required:!0}),u.jsx("input",{placeholder:"Game ID",value:s.gameId,onChange:S=>o({...s,gameId:S.target.value}),required:!0}),u.jsxs("select",{value:s.isCollegeParticipant,onChange:S=>o({...s,isCollegeParticipant:S.target.value}),children:[u.jsx("option",{value:"yes",children:"Are you from a college? Yes"}),u.jsx("option",{value:"no",children:"Are you from a college? No"})]}),s.isCollegeParticipant==="yes"&&u.jsx("input",{placeholder:"College name",value:s.collegeName,onChange:S=>o({...s,collegeName:S.target.value}),required:!0})]}),u.jsx("button",{className:"btn btn-primary",type:"submit",disabled:y||v,children:y?"Processing Payment...":`Pay ${M} & Register`})]}),m&&u.jsx("div",{className:"banner",style:{marginTop:"18px"},children:m})]}),u.jsxs("p",{style:{marginTop:"14px",opacity:.8},children:["Required players for selected game: ",x]})]})}function iR(){const[t,e]=L.useState({name:"",phone:"",enrollmentNumber:"",year:"",collegeName:"",performanceType:"",scriptPdfUrl:""}),[n,i]=L.useState(null),[r,a]=L.useState(!1),[s,o]=L.useState(""),l=async d=>{const f=new FormData;f.append("document",d);const p=await fetch(`${pf}/api/uploads/document`,{method:"POST",body:f});if(!p.ok)throw new Error(await p.text());return(await p.json()).documentUrl},c=async d=>{d.preventDefault(),o(""),a(!0);try{if(!n&&!t.scriptPdfUrl)throw new Error("Please upload a PDF or provide a PDF link for your script/plan.");let f=t.scriptPdfUrl;n&&(f=await l(n));const p=await Ve("/api/open-mic/register",{method:"POST",body:JSON.stringify({...t,scriptPdfUrl:f})});o(`${p.message} Redirecting to WhatsApp group...`),setTimeout(()=>pc(fc.openMic),1400)}catch(f){o(f instanceof Error?f.message:"Unable to register")}finally{a(!1)}};return u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Open Mic"}),u.jsx("p",{className:"section-subtitle",children:"Open Mic is free. Registration is mandatory."}),u.jsxs("div",{className:"card",style:{marginTop:"24px"},children:[u.jsx("h4",{children:"Open Mic Registration"}),u.jsxs("form",{className:"form-grid",onSubmit:c,children:[u.jsx("input",{placeholder:"Name",value:t.name,onChange:d=>e({...t,name:d.target.value}),required:!0}),u.jsx("input",{placeholder:"WhatsApp number",value:t.phone,onChange:d=>e({...t,phone:d.target.value}),required:!0}),u.jsx("input",{placeholder:"Enrollment number",value:t.enrollmentNumber,onChange:d=>e({...t,enrollmentNumber:d.target.value}),required:!0}),u.jsx("input",{placeholder:"Year",value:t.year,onChange:d=>e({...t,year:d.target.value}),required:!0}),u.jsx("input",{placeholder:"College name",value:t.collegeName,onChange:d=>e({...t,collegeName:d.target.value}),required:!0}),u.jsx("input",{placeholder:"What do you want to perform?",value:t.performanceType,onChange:d=>e({...t,performanceType:d.target.value}),required:!0}),u.jsx("input",{type:"url",placeholder:"Script/plan PDF URL (optional if uploading below)",value:t.scriptPdfUrl,onChange:d=>e({...t,scriptPdfUrl:d.target.value})}),u.jsx("input",{type:"file",accept:"application/pdf",onChange:d=>{var f;return i(((f=d.target.files)==null?void 0:f[0])??null)}}),u.jsx("button",{className:"btn btn-primary",type:"submit",disabled:r,children:r?"Submitting...":"Register Open Mic"})]}),s&&u.jsx("div",{className:"banner",style:{marginTop:"18px"},children:s})]})]})}function rR(){return u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Choose Registration"}),u.jsx("p",{className:"section-subtitle",children:"Select the event you want to register for."}),u.jsxs("div",{className:"cards-grid",style:{marginTop:"24px"},children:[u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:"Hackathon"}),u.jsx("p",{children:"12-hour hackathon registration."}),u.jsx(Pt,{className:"btn btn-primary",to:"/hackathon",children:"Register Hackathon"})]}),u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:"Robo Race"}),u.jsx("p",{children:"RC car competition. Team fee INR 300."}),u.jsx(Pt,{className:"btn btn-primary",to:"/kinetic-showdown",children:"Register Robo Race"})]}),u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:"Workshops"}),u.jsx("p",{children:"Pick your workshop and complete payment."}),u.jsx(Pt,{className:"btn btn-primary",to:"/workshops",children:"Register Workshop"})]}),u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:"eSports"}),u.jsx("p",{children:"Valorant registration is open. BGMI seats are full."}),u.jsx(Pt,{className:"btn btn-primary",to:"/esports",children:"Register eSports"})]}),u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:"Open Mic"}),u.jsx("p",{children:"Free registration with performance details."}),u.jsx(Pt,{className:"btn btn-primary",to:"/open-mic",children:"Register Open Mic"})]})]})]})}function aR(){const[t,e]=L.useState([]);return L.useEffect(()=>{Ve("/api/culture/events").then(n=>e(Array.isArray(n)?n:[])).catch(()=>e([]))},[]),u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Culture Fest"}),u.jsx("p",{className:"section-subtitle",children:"When the coding ends, the celebration begins."}),t.length===0?u.jsx("div",{className:"banner empty-state",children:"No events announced yet."}):u.jsx("div",{className:"cards-grid",children:t.map(n=>u.jsxs("div",{className:"card",children:[n.imageUrl&&u.jsx("img",{src:n.imageUrl,alt:n.title,style:{width:"100%",borderRadius:"14px",marginBottom:"12px"}}),u.jsx("h4",{children:n.title}),u.jsx("p",{className:"team-preview",children:n.preview}),u.jsx("p",{children:n.description})]},n.id))})]})}function sR(){const[t,e]=L.useState([]);return L.useEffect(()=>{Ve("/api/gallery").then(n=>e(Array.isArray(n)?n:[])).catch(()=>e([]))},[]),u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Glimpses & Gallery"}),u.jsx("p",{className:"section-subtitle",children:"A curated gallery from past editions."}),t.length===0?u.jsx("div",{className:"banner empty-state",children:"No gallery items available yet."}):u.jsx("div",{className:"gallery-grid",children:t.map(n=>u.jsxs("div",{className:"gallery-card",children:[u.jsx("img",{src:n.imageUrl,alt:n.title}),u.jsxs("div",{className:"gallery-meta",children:[u.jsx("strong",{children:n.preview||n.title}),u.jsx("p",{children:n.description})]})]},n.id))})]})}function oR(){const[t,e]=L.useState([]);return L.useEffect(()=>{Ve("/api/team").then(n=>e(Array.isArray(n)?n:[])).catch(()=>e([]))},[]),u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Core Team"}),t.length===0?u.jsx("div",{className:"banner empty-state",children:"Team details will be published soon."}):u.jsx("div",{className:"team-grid",children:t.map(n=>u.jsxs("div",{className:"team-card",children:[u.jsx("img",{src:n.imageUrl,alt:n.name}),u.jsxs("div",{className:"team-meta",children:[u.jsx("strong",{children:n.name}),u.jsx("p",{className:"team-role",children:n.role}),u.jsx("p",{className:"team-preview",children:n.preview}),u.jsx("p",{children:n.about})]})]},n.id))})]})}function lR(){const[t,e]=L.useState({email:"",phone:"",issue:""}),[n,i]=L.useState(!1),[r,a]=L.useState(""),s=async o=>{o.preventDefault(),a(""),i(!0);try{const l=await Ve("/api/contact",{method:"POST",body:JSON.stringify(t)});a(l.message),e({email:"",phone:"",issue:""})}catch(l){a(l instanceof Error?l.message:"Unable to submit contact")}finally{i(!1)}};return u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Contact"}),u.jsx("p",{className:"section-subtitle",children:"Share your email, phone number, and issue. Our team will reach out to you."}),u.jsxs("div",{className:"card",style:{marginTop:"24px",maxWidth:"640px"},children:[u.jsx("h4",{children:"Contact Form"}),u.jsxs("form",{className:"form-grid",onSubmit:s,children:[u.jsx("input",{type:"email",placeholder:"Email",value:t.email,onChange:o=>e({...t,email:o.target.value}),required:!0}),u.jsx("input",{placeholder:"Phone number",value:t.phone,onChange:o=>e({...t,phone:o.target.value}),required:!0}),u.jsx("textarea",{placeholder:"Type your issue",value:t.issue,onChange:o=>e({...t,issue:o.target.value}),rows:5,required:!0}),u.jsx("button",{className:"btn btn-primary",type:"submit",disabled:n,children:n?"Submitting...":"Submit Contact"})]}),r&&u.jsx("div",{className:"banner",style:{marginTop:"18px"},children:r})]})]})}const vx="mediacell@123",mf="secret_admin_password";function mc(){return sessionStorage.getItem(mf)===vx}function gc(t){return t!==vx?!1:(sessionStorage.setItem(mf,t),!0)}function di(){return sessionStorage.getItem(mf)||""}function cR(){const[t,e]=L.useState(mc()),[n,i]=L.useState(""),[r,a]=L.useState(""),[s,o]=L.useState(""),[l,c]=L.useState(""),[d,f]=L.useState(null),[p,g]=L.useState(""),[y,_]=L.useState(""),[m,h]=L.useState(""),[v,x]=L.useState(""),[M,P]=L.useState(null),[C,w]=L.useState(""),[E,S]=L.useState(""),[b,R]=L.useState(""),[z,F]=L.useState(null),[B,G]=L.useState(""),[W,$]=L.useState(!1),D=ue=>{if(ue.preventDefault(),!gc(n)){G("Wrong password.");return}G(""),e(!0),i("")},K=async ue=>{const V=new FormData;V.append("image",ue);const Y=await fetch(`${pf}/api/admin/upload`,{method:"POST",headers:{"X-Admin-Token":di()},body:V});if(!Y.ok)throw new Error(await Y.text());const{imageUrl:ne}=await Y.json();return ne},Q=async ue=>{if(ue.preventDefault(),!d){G("Please select an image for gallery item.");return}$(!0),G("");try{const V=await K(d),Y=await Ve("/api/admin/glimpse",{method:"POST",headers:{"X-Admin-Token":di()},body:JSON.stringify({title:r,preview:s,description:l,imageUrl:V})});G(Y.message),a(""),o(""),c(""),f(null)}catch(V){G(V instanceof Error?V.message:"Upload failed")}finally{$(!1)}},ae=async ue=>{if(ue.preventDefault(),!M){G("Please select a team photo.");return}$(!0),G("");try{const V=await K(M),Y=await Ve("/api/admin/team",{method:"POST",headers:{"X-Admin-Token":di()},body:JSON.stringify({name:p,role:y,preview:m,about:v,imageUrl:V})});G(Y.message),g(""),_(""),h(""),x(""),P(null)}catch(V){G(V instanceof Error?V.message:"Upload failed")}finally{$(!1)}},xe=async ue=>{if(ue.preventDefault(),!z){G("Please select a culture event photo.");return}$(!0),G("");try{const V=await K(z),Y=await Ve("/api/admin/culture-event",{method:"POST",headers:{"X-Admin-Token":di()},body:JSON.stringify({title:C,preview:E,description:b,imageUrl:V})});G(Y.message),w(""),S(""),R(""),F(null)}catch(V){G(V instanceof Error?V.message:"Save failed")}finally{$(!1)}};return t?u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Management Panel"}),u.jsx("p",{className:"section-subtitle",children:"Manage content and registrations in one place."}),u.jsxs("div",{className:"admin-links",children:[u.jsx(Pt,{className:"btn btn-ghost",to:"/secret-admin/registrations",children:"View Registrations Data"}),u.jsx(Pt,{className:"btn btn-ghost",to:"/secret-admin/manage-content",children:"Edit / Delete Uploaded Content"}),u.jsx(Pt,{className:"btn btn-ghost",to:"/hackathon-manager",children:"Hackathon Manager"})]}),u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:"Upload Gallery Item"}),u.jsxs("form",{className:"form-grid",onSubmit:Q,children:[u.jsx("input",{placeholder:"Title",value:r,onChange:ue=>a(ue.target.value),required:!0}),u.jsx("input",{placeholder:"Preview text",value:s,onChange:ue=>o(ue.target.value),required:!0}),u.jsx("textarea",{placeholder:"Description",value:l,onChange:ue=>c(ue.target.value),rows:3,required:!0}),u.jsx("input",{type:"file",accept:"image/*",onChange:ue=>{var V;return f(((V=ue.target.files)==null?void 0:V[0])??null)},required:!0}),u.jsx("button",{className:"btn btn-primary",type:"submit",disabled:W,children:W?"Saving...":"Upload Gallery Item"})]})]}),u.jsxs("div",{className:"card",style:{marginTop:"28px"},children:[u.jsx("h4",{children:"Upload Team Member"}),u.jsxs("form",{className:"form-grid",onSubmit:ae,children:[u.jsx("input",{placeholder:"Name",value:p,onChange:ue=>g(ue.target.value),required:!0}),u.jsx("input",{placeholder:"Role",value:y,onChange:ue=>_(ue.target.value),required:!0}),u.jsx("input",{placeholder:"Preview text",value:m,onChange:ue=>h(ue.target.value),required:!0}),u.jsx("textarea",{placeholder:"About",value:v,onChange:ue=>x(ue.target.value),rows:4,required:!0}),u.jsx("input",{type:"file",accept:"image/*",onChange:ue=>{var V;return P(((V=ue.target.files)==null?void 0:V[0])??null)},required:!0}),u.jsx("button",{className:"btn btn-primary",type:"submit",disabled:W,children:W?"Saving...":"Upload Team Member"})]})]}),u.jsxs("div",{className:"card",style:{marginTop:"28px"},children:[u.jsx("h4",{children:"Add Cultural Event"}),u.jsxs("form",{className:"form-grid",onSubmit:xe,children:[u.jsx("input",{placeholder:"Title",value:C,onChange:ue=>w(ue.target.value),required:!0}),u.jsx("input",{placeholder:"Preview text",value:E,onChange:ue=>S(ue.target.value),required:!0}),u.jsx("textarea",{placeholder:"Description",value:b,onChange:ue=>R(ue.target.value),rows:3,required:!0}),u.jsx("input",{type:"file",accept:"image/*",onChange:ue=>{var V;return F(((V=ue.target.files)==null?void 0:V[0])??null)},required:!0}),u.jsx("button",{className:"btn btn-primary",type:"submit",disabled:W,children:W?"Saving...":"Save Cultural Event"})]})]}),B&&u.jsx("div",{className:"banner",style:{marginTop:"18px"},children:B})]}):u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Management Access"}),u.jsxs("div",{className:"card",style:{maxWidth:"520px"},children:[u.jsx("h4",{children:"Enter Password"}),u.jsxs("form",{className:"form-grid",onSubmit:D,children:[u.jsx("input",{type:"password",placeholder:"Enter password",value:n,onChange:ue=>i(ue.target.value),required:!0}),u.jsx("button",{className:"btn btn-primary",type:"submit",children:"Unlock"})]}),B&&u.jsx("div",{className:"banner",style:{marginTop:"18px"},children:B})]})]})}const uR={codehunt:"codehunt@09",kinetic:"kineticshowdown@15",esports:"esports@19",openMic:"openmic@07",workshop:"workshop@08"};function dR(t){return t.members.map((e,n)=>`${n+1}. ${e.name} (${e.gender}) | ${e.phone}`).join(`
`)}function hR(t){return t.members.map((e,n)=>`${n+1}. ${e.name} | ${e.phone} | ${e.branch} | ${e.semester} | ${e.collegeName}`).join(`
`)}function fR(){const[t,e]=L.useState(mc()),[n,i]=L.useState(""),[r,a]=L.useState(""),[s,o]=L.useState({codehunt:"",kinetic:"",esports:"",openMic:"",workshop:""}),[l,c]=L.useState({codehunt:!1,kinetic:!1,esports:!1,openMic:!1,workshop:!1}),[d,f]=L.useState([]),[p,g]=L.useState([]),[y,_]=L.useState([]),[m,h]=L.useState([]),[v,x]=L.useState([]),[M,P]=L.useState([]);L.useEffect(()=>{if(!t)return;const E={"X-Admin-Token":di()};Ve("/api/admin/registrations/hackathon",{headers:E}).then(S=>f(Array.isArray(S)?S:[])).catch(()=>f([])),Ve("/api/admin/registrations/kinetic-showdown",{headers:E}).then(S=>g(Array.isArray(S)?S:[])).catch(()=>g([])),Ve("/api/admin/registrations/esports",{headers:E}).then(S=>_(Array.isArray(S)?S:[])).catch(()=>_([])),Ve("/api/admin/registrations/open-mic",{headers:E}).then(S=>h(Array.isArray(S)?S:[])).catch(()=>h([])),Ve("/api/admin/registrations/workshops",{headers:E}).then(S=>x(Array.isArray(S)?S:[])).catch(()=>x([])),Ve("/api/admin/registrations/contact",{headers:E}).then(S=>P(Array.isArray(S)?S:[])).catch(()=>P([]))},[t]);const C=E=>{if(E.preventDefault(),!gc(n)){a("Wrong password.");return}a(""),i(""),e(!0)},w=E=>{if(s[E]!==uR[E]){a("Table password is incorrect.");return}a(""),c(S=>({...S,[E]:!0})),o(S=>({...S,[E]:""}))};return t?u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Management Panel - Event Tables"}),u.jsx("p",{className:"section-subtitle",children:"Each table has separate access."}),u.jsx("div",{className:"admin-links",children:u.jsx(Pt,{className:"btn btn-ghost",to:"/secret-admin",children:"Back To Content Panel"})}),r&&u.jsx("div",{className:"banner",style:{marginTop:"18px"},children:r}),u.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[u.jsx("h4",{children:"CodeHunt Teams"}),l.codehunt?u.jsx("div",{className:"table-wrap",children:u.jsxs("table",{className:"admin-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Team"}),u.jsx("th",{children:"Leader"}),u.jsx("th",{children:"Members"}),u.jsx("th",{children:"Payment"}),u.jsx("th",{children:"Created"})]})}),u.jsx("tbody",{children:d.length===0?u.jsx("tr",{children:u.jsx("td",{colSpan:5,children:"No registrations yet."})}):d.map(E=>u.jsxs("tr",{children:[u.jsxs("td",{children:[u.jsx("strong",{children:E.teamName}),u.jsxs("p",{children:[E.memberCount," members, ",E.femaleCount," female"]})]}),u.jsxs("td",{children:[u.jsxs("strong",{children:["Leader: ",E.contactName]}),u.jsx("p",{children:E.contactPhone}),u.jsx("p",{children:E.collegeName})]}),u.jsx("td",{style:{whiteSpace:"pre-wrap",minWidth:"360px"},children:dR(E)}),u.jsxs("td",{children:[u.jsx("strong",{children:E.paymentStatus||"unknown"}),u.jsx("p",{children:E.paymentId||"-"})]}),u.jsx("td",{children:E.createdAt})]},E.id))})]})}):u.jsxs("div",{className:"form-grid",children:[u.jsx("input",{type:"password",placeholder:"Enter table password",value:s.codehunt,onChange:E=>o(S=>({...S,codehunt:E.target.value}))}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>w("codehunt"),children:"Unlock Table"})]})]}),u.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[u.jsx("h4",{children:"Kinetic Showdown Teams"}),l.kinetic?u.jsx("div",{className:"table-wrap",children:u.jsxs("table",{className:"admin-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Team"}),u.jsx("th",{children:"Team Leader"}),u.jsx("th",{children:"Members"}),u.jsx("th",{children:"Payment"}),u.jsx("th",{children:"Created"})]})}),u.jsx("tbody",{children:p.length===0?u.jsx("tr",{children:u.jsx("td",{colSpan:5,children:"No registrations yet."})}):p.map(E=>u.jsxs("tr",{children:[u.jsxs("td",{children:[u.jsx("strong",{children:E.teamName}),u.jsxs("p",{children:["College: ",E.collegeName]}),u.jsxs("p",{children:["Team size: ",E.memberCount]})]}),u.jsxs("td",{children:[u.jsx("strong",{children:E.captainName}),u.jsx("p",{children:E.phone})]}),u.jsx("td",{style:{whiteSpace:"pre-wrap",minWidth:"360px"},children:hR(E)}),u.jsxs("td",{children:[u.jsx("strong",{children:E.paymentStatus||"unknown"}),u.jsx("p",{children:E.paymentId||"-"})]}),u.jsx("td",{children:E.createdAt})]},E.id))})]})}):u.jsxs("div",{className:"form-grid",children:[u.jsx("input",{type:"password",placeholder:"Enter table password",value:s.kinetic,onChange:E=>o(S=>({...S,kinetic:E.target.value}))}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>w("kinetic"),children:"Unlock Table"})]})]}),u.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[u.jsx("h4",{children:"eSports Teams"}),l.esports?u.jsx("div",{className:"table-wrap",children:u.jsxs("table",{className:"admin-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Team"}),u.jsx("th",{children:"Leader"}),u.jsx("th",{children:"Players"}),u.jsx("th",{children:"Payment"}),u.jsx("th",{children:"Created"})]})}),u.jsx("tbody",{children:y.length===0?u.jsx("tr",{children:u.jsx("td",{colSpan:5,children:"No registrations yet."})}):y.map(E=>{var S,b,R;return u.jsxs("tr",{children:[u.jsxs("td",{children:[u.jsx("strong",{children:E.teamName}),u.jsxs("p",{children:["Game: ",E.game]}),u.jsx("p",{children:E.isCollegeParticipant?`College: ${E.collegeName||"-"}`:"Not a college team"}),u.jsxs("p",{children:["Substitute: ",E.hasSubstitute?"Yes":"No"]}),E.hasSubstitute&&u.jsx("p",{children:`${((S=E.substitutePlayer)==null?void 0:S.name)||"-"} | ${((b=E.substitutePlayer)==null?void 0:b.gameId)||"-"} | ${((R=E.substitutePlayer)==null?void 0:R.whatsappNumber)||"-"}`})]}),u.jsxs("td",{children:[u.jsx("strong",{children:E.teamLeaderName}),u.jsx("p",{children:E.teamLeaderPhone})]}),u.jsx("td",{style:{whiteSpace:"pre-wrap",minWidth:"360px"},children:E.members.map((z,F)=>`${F+1}. ${z.name} | ${z.whatsappNumber||"-"} | ${z.gameId||"-"} | ${z.collegeName||"-"}`).join(`
`)}),u.jsxs("td",{children:[u.jsx("strong",{children:E.paymentStatus||"unknown"}),u.jsx("p",{children:E.paymentId||"-"})]}),u.jsx("td",{children:E.createdAt})]},E.id)})})]})}):u.jsxs("div",{className:"form-grid",children:[u.jsx("input",{type:"password",placeholder:"Enter table password",value:s.esports,onChange:E=>o(S=>({...S,esports:E.target.value}))}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>w("esports"),children:"Unlock Table"})]})]}),u.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[u.jsx("h4",{children:"Open Mic Registrations"}),l.openMic?u.jsx("div",{className:"table-wrap",children:u.jsxs("table",{className:"admin-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Name"}),u.jsx("th",{children:"Contact"}),u.jsx("th",{children:"Enrollment"}),u.jsx("th",{children:"Performance"}),u.jsx("th",{children:"Created"})]})}),u.jsx("tbody",{children:m.length===0?u.jsx("tr",{children:u.jsx("td",{colSpan:5,children:"No registrations yet."})}):m.map(E=>u.jsxs("tr",{children:[u.jsxs("td",{children:[u.jsx("strong",{children:E.name}),u.jsx("p",{children:E.collegeName})]}),u.jsx("td",{children:u.jsx("p",{children:E.phone})}),u.jsxs("td",{children:[u.jsx("p",{children:E.enrollmentNumber}),u.jsx("p",{children:E.year})]}),u.jsxs("td",{children:[u.jsx("p",{children:E.performanceType}),u.jsx("p",{children:E.scriptPdfUrl||"-"})]}),u.jsx("td",{children:E.createdAt})]},E.id))})]})}):u.jsxs("div",{className:"form-grid",children:[u.jsx("input",{type:"password",placeholder:"Enter table password",value:s.openMic,onChange:E=>o(S=>({...S,openMic:E.target.value}))}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>w("openMic"),children:"Unlock Table"})]})]}),u.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[u.jsx("h4",{children:"Workshop Registrations"}),l.workshop?u.jsx("div",{className:"table-wrap",children:u.jsxs("table",{className:"admin-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Workshop"}),u.jsx("th",{children:"Name"}),u.jsx("th",{children:"Phone"}),u.jsx("th",{children:"College"}),u.jsx("th",{children:"Payment"}),u.jsx("th",{children:"Created"})]})}),u.jsx("tbody",{children:v.length===0?u.jsx("tr",{children:u.jsx("td",{colSpan:6,children:"No registrations yet."})}):v.map(E=>u.jsxs("tr",{children:[u.jsx("td",{children:E.workshop}),u.jsx("td",{children:E.name}),u.jsx("td",{children:E.phone}),u.jsx("td",{children:E.collegeName}),u.jsxs("td",{children:[u.jsx("strong",{children:E.paymentStatus||"unknown"}),u.jsx("p",{children:E.paymentId||"-"})]}),u.jsx("td",{children:E.createdAt})]},E.id))})]})}):u.jsxs("div",{className:"form-grid",children:[u.jsx("input",{type:"password",placeholder:"Enter table password",value:s.workshop,onChange:E=>o(S=>({...S,workshop:E.target.value}))}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>w("workshop"),children:"Unlock Table"})]})]}),u.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[u.jsx("h4",{children:"Contact Us Submissions"}),u.jsx("div",{className:"table-wrap",children:u.jsxs("table",{className:"admin-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Email"}),u.jsx("th",{children:"Phone"}),u.jsx("th",{children:"Issue"}),u.jsx("th",{children:"Created"})]})}),u.jsx("tbody",{children:M.length===0?u.jsx("tr",{children:u.jsx("td",{colSpan:4,children:"No contact submissions yet."})}):M.map(E=>u.jsxs("tr",{children:[u.jsx("td",{children:E.email}),u.jsx("td",{children:E.phone}),u.jsx("td",{style:{whiteSpace:"pre-wrap",minWidth:"280px"},children:E.issue}),u.jsx("td",{children:E.createdAt})]},E.id))})]})})]})]}):u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Management Access - Registrations"}),u.jsxs("div",{className:"card",style:{maxWidth:"520px"},children:[u.jsx("h4",{children:"Enter Password"}),u.jsxs("form",{className:"form-grid",onSubmit:C,children:[u.jsx("input",{type:"password",placeholder:"Enter password",value:n,onChange:E=>i(E.target.value),required:!0}),u.jsx("button",{className:"btn btn-primary",type:"submit",children:"Unlock"})]}),r&&u.jsx("div",{className:"banner",style:{marginTop:"18px"},children:r})]})]})}function pR(){const[t,e]=L.useState(mc()),[n,i]=L.useState(""),[r,a]=L.useState(""),[s,o]=L.useState(!1),[l,c]=L.useState([]),[d,f]=L.useState([]),[p,g]=L.useState([]),y={"X-Admin-Token":di()},_=async()=>{const[w,E,S]=await Promise.all([Ve("/api/admin/content/gallery",{headers:y}),Ve("/api/admin/content/team",{headers:y}),Ve("/api/admin/content/culture-events",{headers:y})]);c(Array.isArray(w)?w:[]),f(Array.isArray(E)?E:[]),g(Array.isArray(S)?S.map(b=>({...b,imageUrl:b.imageUrl||""})):[])};L.useEffect(()=>{t&&_().catch(()=>{a("Could not load content data.")})},[t]);const m=w=>{if(w.preventDefault(),!gc(n)){a("Wrong password.");return}a(""),i(""),e(!0)},h=async w=>{o(!0),a("");try{const E=await Ve(`/api/admin/glimpse/${w.id}`,{method:"PUT",headers:y,body:JSON.stringify({title:w.title,preview:w.preview,description:w.description,imageUrl:w.imageUrl})});a(E.message),await _()}catch(E){a(E instanceof Error?E.message:"Update failed")}finally{o(!1)}},v=async w=>{o(!0),a("");try{const E=await Ve(`/api/admin/glimpse/${w}`,{method:"DELETE",headers:y});a(E.message),await _()}catch(E){a(E instanceof Error?E.message:"Delete failed")}finally{o(!1)}},x=async w=>{o(!0),a("");try{const E=await Ve(`/api/admin/team/${w.id}`,{method:"PUT",headers:y,body:JSON.stringify({name:w.name,role:w.role,preview:w.preview,about:w.about,imageUrl:w.imageUrl})});a(E.message),await _()}catch(E){a(E instanceof Error?E.message:"Update failed")}finally{o(!1)}},M=async w=>{o(!0),a("");try{const E=await Ve(`/api/admin/team/${w}`,{method:"DELETE",headers:y});a(E.message),await _()}catch(E){a(E instanceof Error?E.message:"Delete failed")}finally{o(!1)}},P=async w=>{o(!0),a("");try{const E=await Ve(`/api/admin/culture-event/${w.id}`,{method:"PUT",headers:y,body:JSON.stringify({title:w.title,preview:w.preview,description:w.description,imageUrl:w.imageUrl})});a(E.message),await _()}catch(E){a(E instanceof Error?E.message:"Update failed")}finally{o(!1)}},C=async w=>{o(!0),a("");try{const E=await Ve(`/api/admin/culture-event/${w}`,{method:"DELETE",headers:y});a(E.message),await _()}catch(E){a(E instanceof Error?E.message:"Delete failed")}finally{o(!1)}};return t?u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Content Manager"}),u.jsx("p",{className:"section-subtitle",children:"Edit or delete any uploaded gallery, team, or cultural content."}),u.jsx("div",{className:"admin-links",children:u.jsx(Pt,{className:"btn btn-ghost",to:"/secret-admin",children:"Back To Content Upload Panel"})}),u.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[u.jsx("h4",{children:"Gallery Items"}),l.length===0?u.jsx("p",{children:"No gallery items."}):l.map((w,E)=>u.jsx("div",{className:"card",style:{marginTop:E===0?"0":"16px"},children:u.jsxs("div",{className:"form-grid",children:[u.jsx("input",{value:w.title,onChange:S=>c(b=>b.map(R=>R.id===w.id?{...R,title:S.target.value}:R))}),u.jsx("input",{value:w.preview,onChange:S=>c(b=>b.map(R=>R.id===w.id?{...R,preview:S.target.value}:R))}),u.jsx("textarea",{rows:3,value:w.description,onChange:S=>c(b=>b.map(R=>R.id===w.id?{...R,description:S.target.value}:R))}),u.jsx("input",{value:w.imageUrl,onChange:S=>c(b=>b.map(R=>R.id===w.id?{...R,imageUrl:S.target.value}:R))}),u.jsxs("div",{className:"admin-links",children:[u.jsx("button",{className:"btn btn-primary",type:"button",disabled:s,onClick:()=>h(w),children:"Save"}),u.jsx("button",{className:"btn btn-ghost",type:"button",disabled:s,onClick:()=>v(w.id),children:"Delete"})]})]})},w.id))]}),u.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[u.jsx("h4",{children:"Team Members"}),d.length===0?u.jsx("p",{children:"No team members."}):d.map((w,E)=>u.jsx("div",{className:"card",style:{marginTop:E===0?"0":"16px"},children:u.jsxs("div",{className:"form-grid",children:[u.jsx("input",{value:w.name,onChange:S=>f(b=>b.map(R=>R.id===w.id?{...R,name:S.target.value}:R))}),u.jsx("input",{value:w.role,onChange:S=>f(b=>b.map(R=>R.id===w.id?{...R,role:S.target.value}:R))}),u.jsx("input",{value:w.preview,onChange:S=>f(b=>b.map(R=>R.id===w.id?{...R,preview:S.target.value}:R))}),u.jsx("textarea",{rows:3,value:w.about,onChange:S=>f(b=>b.map(R=>R.id===w.id?{...R,about:S.target.value}:R))}),u.jsx("input",{value:w.imageUrl,onChange:S=>f(b=>b.map(R=>R.id===w.id?{...R,imageUrl:S.target.value}:R))}),u.jsxs("div",{className:"admin-links",children:[u.jsx("button",{className:"btn btn-primary",type:"button",disabled:s,onClick:()=>x(w),children:"Save"}),u.jsx("button",{className:"btn btn-ghost",type:"button",disabled:s,onClick:()=>M(w.id),children:"Delete"})]})]})},w.id))]}),u.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[u.jsx("h4",{children:"Cultural Events"}),p.length===0?u.jsx("p",{children:"No cultural events."}):p.map((w,E)=>u.jsx("div",{className:"card",style:{marginTop:E===0?"0":"16px"},children:u.jsxs("div",{className:"form-grid",children:[u.jsx("input",{value:w.title,onChange:S=>g(b=>b.map(R=>R.id===w.id?{...R,title:S.target.value}:R))}),u.jsx("input",{value:w.preview,onChange:S=>g(b=>b.map(R=>R.id===w.id?{...R,preview:S.target.value}:R))}),u.jsx("textarea",{rows:3,value:w.description,onChange:S=>g(b=>b.map(R=>R.id===w.id?{...R,description:S.target.value}:R))}),u.jsx("input",{value:w.imageUrl||"",onChange:S=>g(b=>b.map(R=>R.id===w.id?{...R,imageUrl:S.target.value}:R))}),u.jsxs("div",{className:"admin-links",children:[u.jsx("button",{className:"btn btn-primary",type:"button",disabled:s,onClick:()=>P(w),children:"Save"}),u.jsx("button",{className:"btn btn-ghost",type:"button",disabled:s,onClick:()=>C(w.id),children:"Delete"})]})]})},w.id))]}),r&&u.jsx("div",{className:"banner",style:{marginTop:"18px"},children:r})]}):u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Management Access - Content Manager"}),u.jsxs("div",{className:"card",style:{maxWidth:"520px"},children:[u.jsx("h4",{children:"Enter Password"}),u.jsxs("form",{className:"form-grid",onSubmit:m,children:[u.jsx("input",{type:"password",placeholder:"Enter password",value:n,onChange:w=>i(w.target.value),required:!0}),u.jsx("button",{className:"btn btn-primary",type:"submit",children:"Unlock"})]}),r&&u.jsx("div",{className:"banner",style:{marginTop:"18px"},children:r})]})]})}function rg(t,e){return`${t.trim().toLowerCase()}|${e.replace(/\D/g,"")}`}function mR(){const[t,e]=L.useState(mc()),[n,i]=L.useState(""),[r,a]=L.useState(""),[s,o]=L.useState(!1),[l,c]=L.useState([]),[d,f]=L.useState({}),[p,g]=L.useState(null),[y,_]=L.useState([]),[m,h]=L.useState([]),v=async()=>{if(t){o(!0),a("");try{const C=await Ve("/api/admin/hackathon/id-card/requests",{headers:{"X-Admin-Token":di()}}),w=await Ve("/api/admin/hackathon/problem-statements",{headers:{"X-Admin-Token":di()}}),E=Array.isArray(C)?C:[],S=Array.isArray(w)?w:[];c(E),h(S),f(b=>{const R={};for(const z of E)R[z.requestId]=b[z.requestId]||{};return R})}catch(C){c([]),h([]),a(C instanceof Error?C.message:"Unable to load requests")}finally{o(!1)}}};L.useEffect(()=>{v()},[t]);const x=C=>{if(C.preventDefault(),!gc(n)){a("Wrong password.");return}a(""),i(""),e(!0)},M=(C,w)=>{f(E=>({...E,[C]:{...E[C]||{},[w]:!(E[C]||{})[w]}}))},P=async C=>{const w=d[C.requestId]||{},E=C.participants.filter(S=>w[rg(S.name,S.phone)]).map(S=>({name:S.name,phone:S.phone}));if(E.length===0){a(`Select at least one participant for ${C.teamName}.`);return}g(C.requestId),a("");try{const S=await Ve("/api/admin/hackathon/id-card/generate-code",{method:"POST",headers:{"X-Admin-Token":di()},body:JSON.stringify({requestId:C.requestId,participants:E})});_(b=>[{requestId:C.requestId,teamName:C.teamName,code:S.code,issuedAt:new Date().toLocaleString()},...b]),c(b=>b.filter(R=>R.requestId!==C.requestId)),a(`${C.teamName}: 4-digit code generated successfully.`)}catch(S){a(S instanceof Error?S.message:"Unable to generate code")}finally{g(null)}};return t?u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Hackathon Manager"}),u.jsx("p",{className:"section-subtitle",children:"Review team requests, select participants, and generate 4-digit ID-card code."}),u.jsxs("div",{className:"admin-links",children:[u.jsx(Pt,{className:"btn btn-ghost",to:"/secret-admin",children:"Back To Admin"}),u.jsx("button",{className:"btn btn-ghost",type:"button",onClick:v,disabled:s,children:s?"Refreshing...":"Refresh Requests"})]}),r&&u.jsx("div",{className:"banner",style:{marginTop:"18px"},children:r}),u.jsx("div",{className:"cards-grid",style:{marginTop:"24px"},children:l.map(C=>u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:C.teamName}),u.jsxs("p",{children:[u.jsx("strong",{children:"College:"})," ",C.collegeName]}),u.jsxs("p",{children:[u.jsx("strong",{children:"Leader:"})," ",C.leaderName," (",C.leaderPhone,")"]}),u.jsxs("p",{children:[u.jsx("strong",{children:"Requested At:"})," ",C.requestedAt]}),u.jsx("div",{className:"form-grid",style:{marginTop:"12px"},children:C.participants.map(w=>{const E=rg(w.name,w.phone),S=(d[C.requestId]||{})[E]||!1;return u.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[u.jsx("input",{type:"checkbox",style:{width:"18px",height:"18px"},checked:S,onChange:()=>M(C.requestId,E)}),u.jsxs("span",{children:[w.name," | ",w.phone," | ",w.role,w.gender?` | ${w.gender}`:""]})]},E)})}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>P(C),disabled:p===C.requestId,style:{marginTop:"16px"},children:p===C.requestId?"Generating...":"Generate 4-Digit Code"})]},C.requestId))}),l.length===0&&u.jsx("div",{className:"banner",style:{marginTop:"20px"},children:"No pending hackathon ID-card requests."}),y.length>0&&u.jsxs("div",{className:"card",style:{marginTop:"24px"},children:[u.jsx("h4",{children:"Recently Generated Codes"}),u.jsx("div",{className:"table-wrap",children:u.jsxs("table",{className:"admin-table",style:{minWidth:"600px"},children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Team"}),u.jsx("th",{children:"Code"}),u.jsx("th",{children:"Generated At"})]})}),u.jsx("tbody",{children:y.map(C=>u.jsxs("tr",{children:[u.jsx("td",{children:C.teamName}),u.jsx("td",{children:u.jsx("strong",{children:C.code})}),u.jsx("td",{children:C.issuedAt})]},`${C.requestId}-${C.code}-${C.issuedAt}`))})]})})]}),u.jsxs("div",{className:"card",style:{marginTop:"24px"},children:[u.jsx("h4",{children:"Chosen Problem Statements"}),u.jsx("div",{className:"table-wrap",children:u.jsxs("table",{className:"admin-table",style:{minWidth:"920px"},children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Team ID"}),u.jsx("th",{children:"Team Name"}),u.jsx("th",{children:"Leader"}),u.jsx("th",{children:"Theme"}),u.jsx("th",{children:"Domain"}),u.jsx("th",{children:"Chosen Statement"}),u.jsx("th",{children:"Confirmed At"})]})}),u.jsx("tbody",{children:m.length===0?u.jsx("tr",{children:u.jsx("td",{colSpan:7,children:"No team has confirmed a problem statement yet."})}):m.map(C=>u.jsxs("tr",{children:[u.jsx("td",{children:u.jsx("strong",{children:C.teamId})}),u.jsx("td",{children:C.teamName}),u.jsx("td",{children:C.leaderName}),u.jsx("td",{children:C.themeName}),u.jsx("td",{children:C.domain}),u.jsx("td",{children:C.title}),u.jsx("td",{children:C.confirmedAt})]},`${C.teamId}-${C.confirmedAt}-${C.title}`))})]})})]})]}):u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Hackathon Manager Access"}),u.jsxs("div",{className:"card",style:{maxWidth:"520px"},children:[u.jsx("h4",{children:"Enter Password"}),u.jsxs("form",{className:"form-grid",onSubmit:x,children:[u.jsx("input",{type:"password",placeholder:"Enter password",value:n,onChange:C=>i(C.target.value),required:!0}),u.jsx("button",{className:"btn btn-primary",type:"submit",children:"Unlock"})]}),r&&u.jsx("div",{className:"banner",style:{marginTop:"18px"},children:r})]})]})}const gR=`Professional Hackathon Problem Statements
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

\f`,oh=["fullstack","ai_ml","cybersecurity","blockchain"],fr=[{slug:"transport-mobility",name:"Transport & Mobility",statements:{fullstack:{domain:"fullstack",title:"Integrated Multi-Modal Urban Mobility Management Platform",summary:"Build one platform for route planning, tracking, ticketing, and transport analytics."},ai_ml:{domain:"ai_ml",title:"AI-Based Traffic Congestion Prediction & Dynamic Routing System",summary:"Predict congestion and recommend better routes and traffic signal actions."},cybersecurity:{domain:"cybersecurity",title:"Secure Connected Vehicle & Transport Infrastructure Monitoring System",summary:"Detect spoofing, intrusion, and anomalies in connected transport systems."},blockchain:{domain:"blockchain",title:"Decentralized Smart Ticketing & Fare Settlement System",summary:"Use smart contracts for transparent ticketing and automated fare splits."}}},{slug:"logistics-supply-chain",name:"Logistics & Supply Chain",statements:{fullstack:{domain:"fullstack",title:"End-to-End Digital Supply Chain Visibility Platform",summary:"Create end-to-end tracking across warehouse, shipments, and vendors."},ai_ml:{domain:"ai_ml",title:"AI-Powered Demand Forecasting & Inventory Optimization System",summary:"Forecast demand and optimize stock across locations."},cybersecurity:{domain:"cybersecurity",title:"Supply Chain Cyber Risk Detection & Vendor Vulnerability Monitoring System",summary:"Monitor vendor risk and detect weak links in the supply chain network."},blockchain:{domain:"blockchain",title:"Immutable Supply Chain Provenance & Anti-Counterfeit System",summary:"Track provenance and verify authenticity with tamper-proof records."}}},{slug:"toys-games-entertainment",name:"Toys, Games & Entertainment",statements:{fullstack:{domain:"fullstack",title:"Adaptive Cross-Platform Gaming & Community Engagement Ecosystem",summary:"Build identity, progression, events, and engagement features for players."},ai_ml:{domain:"ai_ml",title:"AI-Driven Personalized Gaming Experience Engine",summary:"Personalize difficulty, content, and retention using behavior data."},cybersecurity:{domain:"cybersecurity",title:"Online Gaming Fraud & Cheating Detection System",summary:"Detect bots, account abuse, and transaction fraud in real time."},blockchain:{domain:"blockchain",title:"Decentralized Ownership & NFT-Based In-Game Asset Marketplace",summary:"Enable secure ownership and transfer of digital game assets."}}},{slug:"healthcare-medical",name:"Healthcare & Medical Systems",statements:{fullstack:{domain:"fullstack",title:"Integrated Digital Health Records & Telemedicine Platform",summary:"Unify EMR, appointments, teleconsultation, and prescriptions."},ai_ml:{domain:"ai_ml",title:"AI-Based Early Disease Detection & Risk Stratification System",summary:"Predict risk early with explainable clinical AI models."},cybersecurity:{domain:"cybersecurity",title:"Medical IoT Device Intrusion Detection System",summary:"Secure connected medical devices and detect anomalous activity."},blockchain:{domain:"blockchain",title:"Decentralized Patient Data Exchange & Consent Management System",summary:"Use consent smart contracts and immutable access trails."}}},{slug:"education-learning",name:"Education & Learning Solutions",statements:{fullstack:{domain:"fullstack",title:"Intelligent Unified Learning Management & Academic Analytics Platform",summary:"Create an integrated LMS with engagement and performance analytics."},ai_ml:{domain:"ai_ml",title:"AI-Powered Personalized Learning & Adaptive Curriculum Engine",summary:"Recommend personalized study plans and adaptive content."},cybersecurity:{domain:"cybersecurity",title:"Secure Online Examination & Academic Integrity Monitoring System",summary:"Protect exams against impersonation and cheating."},blockchain:{domain:"blockchain",title:"Decentralized Academic Credit & Micro-Credential Verification Network",summary:"Issue and verify tamper-proof credits across institutions."}}},{slug:"agriculture-agritech",name:"Agriculture & Agri-Tech",statements:{fullstack:{domain:"fullstack",title:"Digital Farm Management & Crop Monitoring Platform",summary:"Track crop lifecycle, weather, pest alerts, and market insights."},ai_ml:{domain:"ai_ml",title:"AI-Based Crop Yield Prediction & Disease Detection System",summary:"Predict yield and detect diseases using time-series and vision models."},cybersecurity:{domain:"cybersecurity",title:"Secure Agricultural IoT Infrastructure Protection System",summary:"Protect farm IoT devices and detect unauthorized access."},blockchain:{domain:"blockchain",title:"Transparent Farm-to-Consumer Produce Traceability System",summary:"Ensure produce traceability and authenticity from farm to retail."}}},{slug:"bfsi",name:"Banking, Finance & Insurance",statements:{fullstack:{domain:"fullstack",title:"Unified Digital Banking & Financial Services Super-App",summary:"Integrate accounts, payments, loans, insurance, and analytics."},ai_ml:{domain:"ai_ml",title:"AI-Based Credit Risk Assessment & Loan Default Prediction System",summary:"Predict defaults with interpretable and fair credit models."},cybersecurity:{domain:"cybersecurity",title:"Real-Time Financial Fraud Detection & Risk Monitoring System",summary:"Identify suspicious transactions and account compromise in real time."},blockchain:{domain:"blockchain",title:"Decentralized Cross-Border Payment & Settlement Network",summary:"Enable transparent, near real-time cross-border settlement."}}},{slug:"retail-ecommerce",name:"Retail & E-commerce",statements:{fullstack:{domain:"fullstack",title:"Omnichannel Retail Experience & Inventory Intelligence Platform",summary:"Unify catalog, inventory sync, order flow, and analytics."},ai_ml:{domain:"ai_ml",title:"AI-Driven Personalized Shopping & Demand Forecasting Engine",summary:"Recommend products and forecast demand simultaneously."},cybersecurity:{domain:"cybersecurity",title:"E-Commerce Platform Threat Detection & Payment Security System",summary:"Detect bots, fraud, and suspicious purchase behavior."},blockchain:{domain:"blockchain",title:"Decentralized Product Authenticity & Anti-Counterfeit Verification System",summary:"Offer product authenticity verification with blockchain traceability."}}},{slug:"energy-power",name:"Energy & Power Management",statements:{fullstack:{domain:"fullstack",title:"Intelligent Energy Monitoring & Distributed Grid Management Platform",summary:"Monitor distributed energy systems and optimize load management."},ai_ml:{domain:"ai_ml",title:"AI-Based Energy Demand Forecasting & Load Optimization System",summary:"Predict demand and improve load balancing strategies."},cybersecurity:{domain:"cybersecurity",title:"Critical Infrastructure Protection for Smart Power Grids",summary:"Secure SCADA and smart grid communications against cyber threats."},blockchain:{domain:"blockchain",title:"Decentralized Peer-to-Peer Renewable Energy Trading Platform",summary:"Trade surplus renewable energy with smart-contract settlement."}}},{slug:"smart-cities",name:"Smart Cities & Urban Development",statements:{fullstack:{domain:"fullstack",title:"Integrated Urban Operations & Citizen Engagement Platform",summary:"Centralize city services, complaints, tracking, and analytics."},ai_ml:{domain:"ai_ml",title:"AI-Driven Urban Planning & Resource Allocation Optimization System",summary:"Model growth and optimize urban resource planning."},cybersecurity:{domain:"cybersecurity",title:"Urban Infrastructure Threat Detection & Surveillance Security System",summary:"Detect cyber anomalies in city networks and surveillance systems."},blockchain:{domain:"blockchain",title:"Transparent Municipal Governance & Budget Allocation Tracking System",summary:"Track municipal budgets and expenditures transparently."}}},{slug:"tourism-hospitality",name:"Tourism & Hospitality",statements:{fullstack:{domain:"fullstack",title:"Intelligent End-to-End Travel Planning & Hospitality Management Platform",summary:"Unify bookings, itineraries, and hospitality operations."},ai_ml:{domain:"ai_ml",title:"AI-Powered Dynamic Pricing & Personalized Travel Recommendation Engine",summary:"Forecast demand and optimize pricing and recommendations."},cybersecurity:{domain:"cybersecurity",title:"Hospitality Data Breach Prevention & Booking Fraud Detection System",summary:"Detect fraud and suspicious access across booking flows."},blockchain:{domain:"blockchain",title:"Decentralized Global Travel Identity & Loyalty Rewards Network",summary:"Secure identity and interoperable loyalty rewards."}}},{slug:"sports-fitness",name:"Sports & Fitness",statements:{fullstack:{domain:"fullstack",title:"Integrated Athlete Performance & Fan Engagement Platform",summary:"Track athlete metrics and improve fan interaction in one system."},ai_ml:{domain:"ai_ml",title:"AI-Based Athlete Performance Prediction & Injury Risk Assessment System",summary:"Predict injury risk and optimize training loads."},cybersecurity:{domain:"cybersecurity",title:"Sports Event Infrastructure & Streaming Security Protection System",summary:"Protect ticketing and streaming pipelines from attacks."},blockchain:{domain:"blockchain",title:"Transparent Athlete Contract & Sponsorship Management System",summary:"Automate sponsorship and royalty agreements transparently."}}},{slug:"food-nutrition",name:"Food & Nutrition",statements:{fullstack:{domain:"fullstack",title:"Intelligent Digital Nutrition & Meal Planning Ecosystem",summary:"Plan meals, track nutrients, and integrate grocery workflows."},ai_ml:{domain:"ai_ml",title:"AI-Based Personalized Nutrition Recommendation & Health Risk Prediction System",summary:"Personalize nutrition and predict diet-related risk."},cybersecurity:{domain:"cybersecurity",title:"Food Industry Digital Infrastructure & Payment Security Monitoring System",summary:"Detect fraud, abuse, and payment anomalies in food systems."},blockchain:{domain:"blockchain",title:"Transparent Food Supply Chain & Nutritional Authenticity Verification System",summary:"Verify food provenance and nutritional authenticity."}}},{slug:"environment-sustainability",name:"Environment & Sustainability",statements:{fullstack:{domain:"fullstack",title:"Integrated Environmental Monitoring & Sustainability Reporting Platform",summary:"Track emissions and environmental metrics with live reporting."},ai_ml:{domain:"ai_ml",title:"AI-Driven Climate Risk Prediction & Sustainability Optimization System",summary:"Predict climate risk and recommend sustainability actions."},cybersecurity:{domain:"cybersecurity",title:"Critical Environmental Infrastructure Security & Data Integrity Monitoring System",summary:"Protect environmental systems against tampering and breach."},blockchain:{domain:"blockchain",title:"Decentralized Carbon Credit Trading & Emission Verification System",summary:"Tokenize and track carbon credits with transparent retirement."}}},{slug:"manufacturing-automation",name:"Manufacturing & Industrial Automation",statements:{fullstack:{domain:"fullstack",title:"Smart Factory Operations & Production Intelligence Platform",summary:"Manage production, maintenance, quality, and workforce analytics."},ai_ml:{domain:"ai_ml",title:"AI-Based Predictive Maintenance & Production Optimization System",summary:"Predict failures and optimize maintenance and throughput."},cybersecurity:{domain:"cybersecurity",title:"Industrial Control System (ICS) Intrusion Detection & Protection Framework",summary:"Detect attacks and anomalies in ICS/SCADA environments."},blockchain:{domain:"blockchain",title:"Immutable Manufacturing Process & Quality Assurance Ledger",summary:"Track components and quality checks in tamper-proof records."}}},{slug:"cybersecurity-data-protection",name:"Cybersecurity & Data Protection",statements:{fullstack:{domain:"fullstack",title:"Enterprise Data Governance & Access Management Platform",summary:"Centralize access control, policies, and compliance reporting."},ai_ml:{domain:"ai_ml",title:"AI-Driven Insider Threat & Data Leakage Prediction System",summary:"Predict insider risk with behavioral analytics."},cybersecurity:{domain:"cybersecurity",title:"AI-Augmented Security Operations Center (SOC) Monitoring System",summary:"Aggregate logs and prioritize incidents automatically."},blockchain:{domain:"blockchain",title:"Decentralized Identity (DID) & Secure Data Sharing Framework",summary:"Enable selective disclosure with decentralized identity."}}},{slug:"media-digital-content",name:"Media & Digital Content",statements:{fullstack:{domain:"fullstack",title:"Unified Digital Content Creation, Distribution & Monetization Platform",summary:"Support upload, streaming, monetization, and analytics."},ai_ml:{domain:"ai_ml",title:"AI-Powered Content Recommendation & Audience Engagement Optimization Engine",summary:"Deliver personalized recommendations and reduce churn."},cybersecurity:{domain:"cybersecurity",title:"Digital Media Platform Threat Detection & Anti-Piracy Monitoring System",summary:"Identify scraping, abuse, piracy, and attack patterns."},blockchain:{domain:"blockchain",title:"Decentralized Digital Rights Management & Royalty Distribution System",summary:"Track ownership and automate transparent royalty payouts."}}},{slug:"real-estate-infrastructure",name:"Real Estate & Infrastructure",statements:{fullstack:{domain:"fullstack",title:"Smart Property Management & Infrastructure Analytics Platform",summary:"Manage property, tenants, maintenance, and occupancy analytics."},ai_ml:{domain:"ai_ml",title:"AI-Driven Property Valuation & Infrastructure Investment Optimization System",summary:"Predict prices and optimize investment allocation."},cybersecurity:{domain:"cybersecurity",title:"Smart Building Infrastructure Security Monitoring System",summary:"Protect smart building networks, access controls, and tenant data."},blockchain:{domain:"blockchain",title:"Decentralized Real Estate Title Registry & Transaction Platform",summary:"Maintain immutable title and ownership transfer records."}}},{slug:"defense-public-safety",name:"Defense & Public Safety",statements:{fullstack:{domain:"fullstack",title:"Integrated Emergency Response & Public Safety Command Platform",summary:"Coordinate incidents, resources, and inter-agency communication."},ai_ml:{domain:"ai_ml",title:"AI-Based Predictive Threat Assessment & Disaster Risk Forecasting System",summary:"Forecast risk zones and likely incident severity."},cybersecurity:{domain:"cybersecurity",title:"Critical National Infrastructure Threat Intelligence & Intrusion Detection System",summary:"Detect and prioritize risks across critical national systems."},blockchain:{domain:"blockchain",title:"Tamper-Proof Defense Supply Chain & Asset Tracking System",summary:"Track defense assets and inspections with immutable trails."}}},{slug:"social-impact-ngos",name:"Social Impact & NGOs",statements:{fullstack:{domain:"fullstack",title:"NGO Program Management & Impact Analytics Platform",summary:"Manage beneficiaries, volunteers, donations, and impact reporting."},ai_ml:{domain:"ai_ml",title:"AI-Based Social Impact Measurement & Resource Allocation Optimization System",summary:"Score outcomes and optimize resource placement."},cybersecurity:{domain:"cybersecurity",title:"NGO Data Privacy & Donor Information Protection Framework",summary:"Protect donor and beneficiary data from leaks and abuse."},blockchain:{domain:"blockchain",title:"Transparent Donation Tracking & Fund Allocation System",summary:"Track donation flow with milestone smart contracts."}}},{slug:"waste-management-recycling",name:"Waste Management & Recycling",statements:{fullstack:{domain:"fullstack",title:"Smart Waste Collection & Route Optimization Platform",summary:"Optimize collection routes and track operations efficiently."},ai_ml:{domain:"ai_ml",title:"AI-Based Waste Segregation & Recycling Efficiency Optimization System",summary:"Classify waste and improve recycling decision-making."},cybersecurity:{domain:"cybersecurity",title:"Smart Waste Infrastructure Security Monitoring System",summary:"Secure IoT-based waste infrastructure and monitor anomalies."},blockchain:{domain:"blockchain",title:"Incentivized Recycling & Waste Credit Trading System",summary:"Issue and redeem recycling credits transparently."}}},{slug:"hr-workforce-tech",name:"Human Resources & Workforce Tech",statements:{fullstack:{domain:"fullstack",title:"Unified Talent Management & Workforce Analytics Platform",summary:"Integrate hiring, performance, and workforce planning analytics."},ai_ml:{domain:"ai_ml",title:"AI-Based Talent Matching & Workforce Retention Prediction System",summary:"Improve hiring fit and predict attrition risk."},cybersecurity:{domain:"cybersecurity",title:"Enterprise Insider Threat & HR Data Protection Monitoring System",summary:"Monitor HR data access and detect insider anomalies."},blockchain:{domain:"blockchain",title:"Decentralized Employment Credential & Experience Verification Network",summary:"Verify employment history with tamper-proof records."}}}],ag=["education-learning","transport-mobility","healthcare-medical"],xx={fullstack:"Full Stack",ai_ml:"AI & ML",cybersecurity:"Cybersecurity",blockchain:"Blockchain"},yR={"Full Stack Problem Statement":"fullstack","Blockchain Problem Statement":"blockchain","Cybersecurity Problem Statement":"cybersecurity","AI & ML Problem Statement":"ai_ml"};function _x(t){return t.toLowerCase().replace(/[^a-z0-9]+/g,"")}function ma(t){return t.replace(/\s+/g," ").trim()}function Wo(t){const e=t.split(`
`).map(r=>r.trim()).filter(Boolean),n=[];let i="";for(const r of e){if(r.startsWith("•")){i&&n.push(ma(i)),i=r.replace(/^•\s*/,"");continue}i&&(i+=` ${r}`)}return i&&n.push(ma(i)),n}function ta(t,e,n){const i=t.indexOf(e);if(i<0)return"";const r=i+e.length,a=t.slice(r);let s=a.length;for(const o of n){const l=a.indexOf(o);l>=0&&l<s&&(s=l)}return a.slice(0,s).trim()}function vR(t){const e=t.replace(/\r/g,`
`).replace(/\f/g,`
`),n=/Theme:\s*([^\n]+)\n([\s\S]*?)(?=\nTheme:|\s*$)/g,i=/(Full Stack Problem Statement|Blockchain Problem Statement|Cybersecurity Problem Statement|AI & ML Problem Statement)\n([\s\S]*?)(?=(?:Full Stack Problem Statement|Blockchain Problem Statement|Cybersecurity Problem Statement|AI & ML Problem Statement)\n|$)/g,r={};let a=n.exec(e);for(;a;){const s=ma(a[1]),o=a[2];i.lastIndex=0;let l=i.exec(o);for(;l;){const c=ma(l[1]),d=yR[c],f=l[2];if(d){const p=ta(f,"Background & Context:",["Problem Statement:"]),g=ta(f,"Problem Statement:",["Functional Requirements:"]),y=ta(f,"Functional Requirements:",["Technical Expectations & Constraints:"]),_=ta(f,"Technical Expectations & Constraints:",["Deliverables:"]),m=ta(f,"Deliverables:",["Evaluation Criteria:"]),h=ta(f,"Evaluation Criteria:",[]),v=`${_x(s)}::${d}`;r[v]={background:ma(p),problemStatement:ma(g),functionalRequirements:Wo(y),technicalExpectations:Wo(_),deliverables:Wo(m),evaluationCriteria:Wo(h),constraints:[]}}l=i.exec(o)}a=n.exec(e)}return r}const xR=vR(gR);function Tu(t){const e=t.toLowerCase();return e.includes("this section provides an in-depth explanation")||e.includes("participants must design and implement a comprehensive")||e.includes("complete expanded narrative")}function _R(t){return Tu(t.background)||Tu(t.problemStatement)?!0:[...t.functionalRequirements,...t.technicalExpectations,...t.deliverables,...t.evaluationCriteria,...t.constraints].some(Tu)}const SR={"transport-mobility":{challenge:"fragmented multimodal journeys, congestion, and poor real-time coordination",stakeholders:"commuters, transport operators, municipal planners, and traffic authorities",impact:"improved commuter experience, lower congestion, and better operational planning"},"logistics-supply-chain":{challenge:"siloed visibility across procurement, warehousing, movement, and delivery",stakeholders:"manufacturers, logistics providers, distributors, and retailers",impact:"faster decisions, reduced delays, and stronger supply chain resilience"},"toys-games-entertainment":{challenge:"player retention, trust, and monetization across fragmented gaming ecosystems",stakeholders:"players, creators, game studios, and platform operators",impact:"higher engagement, fairer digital ownership, and improved platform integrity"},"healthcare-medical":{challenge:"disconnected records, security risks, and delayed predictive interventions",stakeholders:"patients, clinicians, hospitals, and health administrators",impact:"safer care pathways, better outcomes, and stronger data governance"},"education-learning":{challenge:"non-personalized learning and disconnected institutional systems",stakeholders:"students, faculty, administrators, and credential verifiers",impact:"improved learning outcomes and stronger academic transparency"},"agriculture-agritech":{challenge:"low digital visibility in farm operations and high uncertainty in yield planning",stakeholders:"farmers, cooperatives, agri-enterprises, and buyers",impact:"better farm decisions, lower losses, and improved market confidence"},bfsi:{challenge:"fraud risk, fragmented digital services, and slow settlement layers",stakeholders:"customers, banks, insurers, lenders, and regulators",impact:"secure financial access, faster transactions, and robust risk control"},"retail-ecommerce":{challenge:"inventory mismatch, fraud, and inconsistent omnichannel experiences",stakeholders:"consumers, merchants, marketplaces, and supply teams",impact:"higher conversion, lower fraud losses, and tighter operations"},"energy-power":{challenge:"demand-supply variability and distributed grid complexity",stakeholders:"utilities, prosumers, grid operators, and communities",impact:"better load balancing, improved sustainability, and operational reliability"},"smart-cities":{challenge:"unintegrated urban systems and weak service transparency",stakeholders:"citizens, municipal bodies, planners, and public service teams",impact:"faster service delivery and smarter city-level decisions"},"tourism-hospitality":{challenge:"fragmented booking journeys and weak operational intelligence",stakeholders:"travelers, hotels, operators, and destination managers",impact:"better traveler experiences and improved occupancy efficiency"},"sports-fitness":{challenge:"scattered athlete data, integrity threats, and uneven fan engagement",stakeholders:"athletes, coaches, clubs, leagues, and fans",impact:"better performance, reduced risk, and stronger event trust"},"food-nutrition":{challenge:"low nutrition personalization and weak food provenance confidence",stakeholders:"consumers, nutrition experts, food platforms, and producers",impact:"healthier behavior and safer, more trusted food systems"},"environment-sustainability":{challenge:"fragmented environmental monitoring and low emissions accountability",stakeholders:"governments, enterprises, communities, and sustainability teams",impact:"better climate decision support and measurable sustainability progress"},"manufacturing-automation":{challenge:"downtime, quality drift, and poor process traceability",stakeholders:"plant operators, quality teams, maintenance teams, and suppliers",impact:"higher throughput, lower defects, and stronger auditability"},"cybersecurity-data-protection":{challenge:"distributed attack surfaces and weak policy-to-practice enforcement",stakeholders:"security operations teams, governance teams, and enterprise users",impact:"reduced breach probability and stronger compliance posture"},"media-digital-content":{challenge:"content abuse, piracy, and unclear creator monetization",stakeholders:"creators, platforms, advertisers, and audiences",impact:"fair revenue models and trustworthy digital distribution"},"real-estate-infrastructure":{challenge:"manual workflows in ownership, operations, and property analytics",stakeholders:"developers, managers, tenants, and public registries",impact:"transparent transactions and efficient asset operations"},"defense-public-safety":{challenge:"high-stakes incident coordination and critical infrastructure security",stakeholders:"response agencies, operators, planners, and citizens",impact:"faster incident response and stronger public safety readiness"},"social-impact-ngos":{challenge:"limited transparency in beneficiary impact and funding utilization",stakeholders:"NGOs, donors, volunteers, and beneficiary communities",impact:"higher donor trust and measurable social outcomes"},"waste-management-recycling":{challenge:"inefficient collection operations and weak recycling incentives",stakeholders:"municipal teams, recyclers, citizens, and waste operators",impact:"cleaner cities and improved circular economy outcomes"},"hr-workforce-tech":{challenge:"fragmented talent workflows and data sensitivity in employee systems",stakeholders:"candidates, HR teams, managers, and enterprises",impact:"better hiring outcomes and safer workforce data practices"}};function bR(t,e){const n=`${_x(t.name)}::${e.domain}`,i=xR[n];if(i&&!_R(i))return i;const r=SR[t.slug]||{challenge:"cross-functional digital transformation and operational modernization",stakeholders:"business operators, end users, and technical teams"},a=`${t.name} ecosystems currently face ${r.challenge}. This creates delivery risk for ${r.stakeholders}.`,s=`Design and implement an industry-ready ${xx[e.domain]} solution for "${e.title}" that can be deployed at scale and measured against business outcomes.`;return e.domain==="fullstack"?{background:`${a} Existing tools are often disconnected, leading to data silos and low operational visibility.`,problemStatement:`${s} The solution must provide an integrated product workflow with strong user and admin experiences.`,functionalRequirements:["Role-based user and admin modules with secure authentication and authorization.",`Core workflow implementation aligned to ${t.name} operations.`,"Operational dashboard with status tracking, filters, and actionable alerts.","Audit-friendly activity logs for critical user and system events.","Search, drill-down views, and lifecycle state transitions.","Exportable reporting for operational and management review."],technicalExpectations:["Modular service-oriented backend with clean API contracts.","Normalized data model with indexing strategy for scale.","Caching and pagination support for high-volume read scenarios.","Cloud-ready deployment architecture with environment separation.","Input validation, rate limiting, and secure secret handling.","Observability: health checks, structured logging, and metrics."],deliverables:["Working deployed application (frontend + backend + datastore).","Architecture diagram and component interaction notes.","API specification with request/response examples.","Test evidence for core business and failure paths.","Demo script showing end-to-end workflow value."],evaluationCriteria:["Functional completeness and requirement fit.","System scalability and reliability under load assumptions.","Security posture and data integrity protections.","UX clarity and decision support quality.","Practicality for real-world adoption."],constraints:[]}:e.domain==="blockchain"?{background:`${a} Trust, verification, and auditability are difficult with centralized ledgers and opaque reconciliation.`,problemStatement:`${s} Use distributed ledger design to improve transparency, integrity, and verifiable transactions.`,functionalRequirements:["On-chain asset/record lifecycle tracking with verifiable state changes.","Smart contract logic for automated execution and settlement rules.","Identity-aware participant actions with role restrictions.","Event timeline or ledger explorer for transparent auditing.","Integrity validation flow using transaction/hash references.","Admin controls for contract configuration and emergency handling."],technicalExpectations:["Well-structured smart contracts with access control checks.","Gas-aware contract design and optimized state writes.","Off-chain storage strategy with on-chain hash anchoring.","Wallet integration and transaction signature flow.","Replay-safe request handling and contract error management.","Clear test coverage for core and adversarial scenarios."],deliverables:["Deployed contracts with ABI and interaction scripts.","DApp or API gateway for contract operations.","Transaction evidence for core lifecycle operations.","Security notes: assumptions, threat model, and mitigations.","Cost analysis for representative transaction volume."],evaluationCriteria:["Smart contract correctness and security hygiene.","Transparency and traceability of lifecycle events.","Gas efficiency and operational feasibility.","Integration quality between on-chain and off-chain layers.","Clarity of business value and ecosystem fit."],constraints:["Do not place sensitive personally identifiable data directly on-chain.","Provide a strategy for key compromise and role recovery.","Ensure transaction cost remains practical for intended scale."]}:e.domain==="cybersecurity"?{background:`${a} Expanding digital surfaces increase breach risk, operational disruption, and compliance exposure.`,problemStatement:`${s} Build a proactive security monitoring and response framework with measurable detection quality.`,functionalRequirements:["Ingestion pipeline for security-relevant telemetry and activity logs.","Detection logic for anomalies, misuse patterns, and threat indicators.","Risk scoring and incident prioritization workflow.","Real-time alerting with contextual evidence for triage.","Investigation dashboard with timeline and entity correlation.","Response playbooks for containment and recovery actions."],technicalExpectations:["Low-latency stream or near-real-time event processing.","Rule + behavior-based detection strategy with tunable thresholds.","False-positive control mechanisms and suppression logic.","Secure storage for logs with tamper-evident retention controls.","Access control and least-privilege operations.","Metrics on precision, recall proxy, and response SLA."],deliverables:["Operational detection dashboard with live/recorded scenarios.","Threat model and attack surface documentation.","Detection rulebook or model description with tuning notes.","Incident simulation report with outcomes and limitations.","Hardening checklist for production rollout."],evaluationCriteria:["Detection effectiveness and incident triage quality.","Robustness against noisy or adversarial inputs.","Operational usability for security teams.","Scalability and maintainability of detection logic.","Practical defense impact for the target domain."],constraints:["Respect privacy boundaries while collecting telemetry.","Minimize detection blind spots without over-alerting teams.","Document assumptions and known bypass risks."]}:{background:`${a} Static decisioning is insufficient where data variability and uncertainty are high.`,problemStatement:`${s} Build an explainable, production-oriented AI workflow that improves decision quality and operational outcomes.`,functionalRequirements:["Data ingestion and preprocessing pipeline with quality checks.","Model training workflow aligned with problem objective.","Evaluation module with suitable metrics and validation split.","Inference pipeline for real-time or batch prediction use.","Decision dashboard exposing outputs and confidence signals.","Feedback loop for continuous model monitoring and retraining."],technicalExpectations:["Feature engineering with clear domain rationale.","Bias, drift, and model stability assessment.","Model versioning and reproducible training setup.","Latency and throughput planning for target usage.","Explainability support for critical predictions.","Secure handling of sensitive training/inference data."],deliverables:["Trained model artifacts and reproducible training notebook/pipeline.","Inference service or evaluation harness.","Model card including assumptions, metrics, and failure modes.","Dataset documentation and preprocessing rationale.","Business impact simulation or scenario-based validation."],evaluationCriteria:["Predictive performance and generalization quality.","Interpretability and trustworthiness of outputs.","Operational fitness for production deployment.","Fairness/risk awareness in model behavior.","Clarity of measurable domain impact."],constraints:["Avoid leakage between train/validation/test workflows.","Document data limitations and model confidence boundaries.","Provide rollback strategy for underperforming model versions."]}}function Hl(t){let e=0;for(let n=0;n<t.length;n+=1)e=(e<<5)-e+t.charCodeAt(n)|0;return Math.abs(e)}function wR(t){return oh[Hl(`${t}:hidden`)%oh.length]}function Sx(t){return`problem_statement_state_v1:${t.trim().toUpperCase()}`}function sg(t){const e=Hl(`${t}:theme`)%fr.length;return{baseThemeIndex:e,activeThemeIndex:e,hiddenDomain:wR(t),changeThemeState:"unused",revealState:"unused",superUsed:!1,superThemeSlug:"",selectedKey:"",confirmedKey:""}}function MR(t){const e=Sx(t),n=localStorage.getItem(e);if(!n)return sg(t);try{return JSON.parse(n)}catch{return sg(t)}}function ER(t,e){localStorage.setItem(Sx(t),JSON.stringify(e))}function CR(){const[t,e]=L.useState(""),[n,i]=L.useState(""),[r,a]=L.useState(null),[s,o]=L.useState(""),[l,c]=L.useState(!1),d=L.useMemo(()=>r?r.superUsed&&r.superThemeSlug?fr.find(v=>v.slug===r.superThemeSlug)||fr[r.baseThemeIndex]:fr[r.activeThemeIndex]||fr[r.baseThemeIndex]:null,[r]),f=L.useMemo(()=>!r||!d?[]:r.superUsed?[d.statements.fullstack]:oh.filter(v=>r.revealState==="active"||v!==r.hiddenDomain).map(v=>d.statements[v]),[r,d]),p=v=>{v.preventDefault();const x=t.trim().toUpperCase();if(!x){o("Team ID is required.");return}const M=MR(x);i(x),a(M),o("")},g=v=>{if(!r||!n)return;const x=v(r);a(x),ER(n,x)},y=()=>{!r||r.superUsed||r.changeThemeState!=="reverted"&&g(v=>{if(v.changeThemeState==="unused"){const x=(v.activeThemeIndex+1+Hl(`${n}:change`)%(fr.length-1))%fr.length;return{...v,activeThemeIndex:x,changeThemeState:"active",selectedKey:"",confirmedKey:""}}return{...v,activeThemeIndex:v.baseThemeIndex,changeThemeState:"reverted",selectedKey:"",confirmedKey:""}})},_=()=>{!r||r.superUsed||r.revealState!=="reverted"&&g(v=>v.revealState==="unused"?{...v,revealState:"active",selectedKey:"",confirmedKey:""}:{...v,revealState:"reverted",selectedKey:"",confirmedKey:""})},m=()=>{if(!r||r.superUsed)return;const v=Hl(`${n}:super`)%ag.length,x=ag[v];g(M=>({...M,superUsed:!0,superThemeSlug:x,selectedKey:"",confirmedKey:""}))},h=async()=>{if(!r||!r.selectedKey||!d){o("Select one problem statement first.");return}const v=f.find(x=>`${d.slug}:${x.domain}`===r.selectedKey);if(!v){o("Selected statement is not available. Please select again.");return}c(!0);try{const x=await Ve("/api/hackathon/problem-statement/confirm",{method:"POST",body:JSON.stringify({teamId:n,themeSlug:d.slug,themeName:d.name,domain:v.domain,title:v.title,summary:v.summary})});g(M=>({...M,confirmedKey:M.selectedKey})),o(x.message||"Problem statement confirmed successfully.")}catch(x){o(x instanceof Error?x.message:"Unable to confirm problem statement")}finally{c(!1)}};return u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Problem Statement"}),u.jsx("p",{className:"section-subtitle",children:"Enter Team ID to unlock your assigned theme and select the final statement."}),!r&&u.jsxs("div",{className:"card",style:{maxWidth:"620px",marginTop:"20px"},children:[u.jsx("h4",{children:"Enter Team ID"}),u.jsxs("form",{className:"form-grid",onSubmit:p,children:[u.jsx("input",{placeholder:"Team ID",value:t,onChange:v=>e(v.target.value),required:!0}),u.jsx("button",{className:"btn btn-primary",type:"submit",children:"Unlock Theme"})]}),s&&u.jsx("div",{className:"banner",style:{marginTop:"16px"},children:s})]}),r&&d&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[u.jsx("h4",{children:"Assigned Theme"}),u.jsxs("p",{children:[u.jsx("strong",{children:"Team ID:"})," ",n]}),u.jsxs("p",{children:[u.jsx("strong",{children:"Theme:"})," ",d.name]}),r.superUsed&&u.jsxs("p",{children:[u.jsx("strong",{children:"Mode:"})," Super Power Key Active (non-revertible)"]})]}),u.jsxs("div",{className:"card",style:{marginTop:"20px"},children:[u.jsx("h4",{children:"Power Key"}),u.jsxs("div",{className:"power-key-grid",children:[u.jsxs("button",{className:"btn btn-ghost",type:"button",onClick:y,disabled:r.superUsed||r.changeThemeState==="reverted",children:[r.changeThemeState==="unused"&&"Change Theme (One Time)",r.changeThemeState==="active"&&"Revert Theme (Final)",r.changeThemeState==="reverted"&&"Change Theme Used"]}),u.jsxs("button",{className:"btn btn-ghost",type:"button",onClick:_,disabled:r.superUsed||r.revealState==="reverted",children:[r.revealState==="unused"&&"Reveal Hidden 4th Statement",r.revealState==="active"&&"Revert Hidden Statement (Final)",r.revealState==="reverted"&&"Reveal Power Used"]}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:m,disabled:r.superUsed,children:r.superUsed?"Super Power Key Used":"Activate Super Power Key (One Time, No Revert)"})]})]}),u.jsx("div",{className:"cards-grid",style:{marginTop:"22px"},children:f.map(v=>{const x=`${d.slug}:${v.domain}`,M=r.selectedKey===x,P=r.confirmedKey===x,C=bR(d,v);return u.jsxs("div",{className:"card",children:[u.jsx("h4",{children:xx[v.domain]}),u.jsx("p",{children:u.jsx("strong",{children:v.title})}),u.jsx("p",{children:v.summary}),u.jsxs("div",{className:"problem-details",children:[u.jsxs("p",{children:[u.jsx("strong",{children:"Background:"})," ",C.background]}),u.jsxs("p",{children:[u.jsx("strong",{children:"Problem Statement:"})," ",C.problemStatement]}),u.jsx("p",{children:u.jsx("strong",{children:"Functional Requirements:"})}),u.jsx("ul",{children:C.functionalRequirements.map(w=>u.jsx("li",{children:w},w))}),u.jsx("p",{children:u.jsx("strong",{children:"Technical Expectations & Constraints:"})}),u.jsx("ul",{children:C.technicalExpectations.map(w=>u.jsx("li",{children:w},w))}),u.jsx("p",{children:u.jsx("strong",{children:"Deliverables:"})}),u.jsx("ul",{children:C.deliverables.map(w=>u.jsx("li",{children:w},w))}),u.jsx("p",{children:u.jsx("strong",{children:"Evaluation Criteria:"})}),u.jsx("ul",{children:C.evaluationCriteria.map(w=>u.jsx("li",{children:w},w))}),C.constraints.length>0&&u.jsxs(u.Fragment,{children:[u.jsx("p",{children:u.jsx("strong",{children:"Constraints:"})}),u.jsx("ul",{children:C.constraints.map(w=>u.jsx("li",{children:w},w))})]})]}),u.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"10px",marginTop:"12px"},children:[u.jsx("input",{type:"checkbox",checked:M,onChange:()=>g(w=>({...w,selectedKey:M?"":x})),style:{width:"18px",height:"18px"}}),u.jsx("span",{children:"Select this statement"})]}),P&&u.jsx("p",{style:{marginTop:"10px",color:"#86efac"},children:u.jsx("strong",{children:"Confirmed"})})]},x)})}),u.jsxs("div",{className:"card",style:{marginTop:"22px"},children:[u.jsx("button",{className:"btn btn-primary",type:"button",onClick:h,disabled:l,children:l?"Confirming...":"Confirm Problem Statement"}),s&&u.jsx("div",{className:"banner",style:{marginTop:"16px"},children:s})]})]})]})}function TR(){return u.jsxs("section",{className:"section",children:[u.jsx("h2",{className:"section-title",children:"Page Not Found"}),u.jsx("p",{className:"section-subtitle",children:"This page does not exist."}),u.jsx("a",{className:"btn btn-primary",href:"/",children:"Back to Home"})]})}function AR(){return L.useEffect(()=>{document.documentElement.dataset.theme="dark"},[]),u.jsxs("div",{className:"app-shell",children:[u.jsx(YA,{}),u.jsx($A,{}),u.jsx(ab,{}),u.jsx("main",{className:"app-content",children:u.jsxs(GS,{children:[u.jsx(bt,{path:"/",element:u.jsx(ZA,{})}),u.jsx(bt,{path:"/register",element:u.jsx(rR,{})}),u.jsx(bt,{path:"/hackathon",element:u.jsx(QA,{})}),u.jsx(bt,{path:"/problemstatement",element:u.jsx(CR,{})}),u.jsx(bt,{path:"/workshops",element:u.jsx(tR,{})}),u.jsx(bt,{path:"/kinetic-showdown",element:u.jsx(ng,{})}),u.jsx(bt,{path:"/robo-race",element:u.jsx(ng,{})}),u.jsx(bt,{path:"/esports",element:u.jsx(nR,{})}),u.jsx(bt,{path:"/open-mic",element:u.jsx(iR,{})}),u.jsx(bt,{path:"/culture",element:u.jsx(aR,{})}),u.jsx(bt,{path:"/gallery",element:u.jsx(sR,{})}),u.jsx(bt,{path:"/team",element:u.jsx(oR,{})}),u.jsx(bt,{path:"/contact",element:u.jsx(lR,{})}),u.jsx(bt,{path:"/secret-admin",element:u.jsx(cR,{})}),u.jsx(bt,{path:"/secret-admin/registrations",element:u.jsx(fR,{})}),u.jsx(bt,{path:"/secret-admin/manage-content",element:u.jsx(pR,{})}),u.jsx(bt,{path:"/hackathon-manager",element:u.jsx(mR,{})}),u.jsx(bt,{path:"*",element:u.jsx(TR,{})})]})}),u.jsx(sb,{})]})}Au.createRoot(document.getElementById("root")).render(u.jsx(yg.StrictMode,{children:u.jsx(QS,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:u.jsx(AR,{})})}));
