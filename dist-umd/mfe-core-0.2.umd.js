(function(e,n){typeof exports=="object"&&typeof module<"u"?n(exports,require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","react","react-dom"],n):(e=typeof globalThis<"u"?globalThis:e||self,n(e.MFECore={},e.React,e.ReactDOM))})(this,(function(e,n,_){"use strict";var f={exports:{}},o={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d;function R(){if(d)return o;d=1;var v=n,O=Symbol.for("react.element"),h=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,E=v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S={key:!0,ref:!0,__self:!0,__source:!0};function p(i,r,a){var t,u={},s=null,m=null;a!==void 0&&(s=""+a),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(m=r.ref);for(t in r)j.call(r,t)&&!S.hasOwnProperty(t)&&(u[t]=r[t]);if(i&&i.defaultProps)for(t in r=i.defaultProps,r)u[t]===void 0&&(u[t]=r[t]);return{$$typeof:O,type:i,key:s,ref:m,props:u,_owner:E.current}}return o.Fragment=h,o.jsx=p,o.jsxs=p,o}var c;function l(){return c||(c=1,f.exports=R()),f.exports}var x=l();const y=()=>x.jsx("div",{children:"test from React"});e.React=n,e.ReactDOM=_,e.DataGridComponent=y,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
