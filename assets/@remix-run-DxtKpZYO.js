/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function v(){return v=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},v.apply(this,arguments)}var m;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(m||(m={}));const W="popstate";function N(t){t===void 0&&(t={});function e(a,r){let{pathname:f,search:l,hash:o}=a.location;return L("",{pathname:f,search:l,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(a,r){return typeof r=="string"?r:B(r)}return A(e,n,null,t)}function x(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function b(){return Math.random().toString(36).substr(2,8)}function j(t,e){return{usr:t.state,key:t.key,idx:e}}function L(t,e,n,a){return n===void 0&&(n=null),v({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?C(e):e,{state:n,key:e&&e.key||a||b()})}function B(t){let{pathname:e="/",search:n="",hash:a=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),a&&a!=="#"&&(e+=a.charAt(0)==="#"?a:"#"+a),e}function C(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let a=t.indexOf("?");a>=0&&(e.search=t.substr(a),t=t.substr(0,a)),t&&(e.pathname=t)}return e}function A(t,e,n,a){a===void 0&&(a={});let{window:r=document.defaultView,v5Compat:f=!1}=a,l=r.history,o=m.Pop,s=null,h=p();h==null&&(h=0,l.replaceState(v({},l.state,{idx:h}),""));function p(){return(l.state||{idx:null}).idx}function g(){o=m.Pop;let i=p(),c=i==null?null:i-h;h=i,s&&s({action:o,location:d.location,delta:c})}function y(i,c){o=m.Push;let u=L(d.location,i,c);h=p()+1;let P=j(u,h),w=d.createHref(u);try{l.pushState(P,"",w)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;r.location.assign(w)}f&&s&&s({action:o,location:d.location,delta:1})}function I(i,c){o=m.Replace;let u=L(d.location,i,c);h=p();let P=j(u,h),w=d.createHref(u);l.replaceState(P,"",w),f&&s&&s({action:o,location:d.location,delta:0})}function O(i){let c=r.location.origin!=="null"?r.location.origin:r.location.href,u=typeof i=="string"?i:B(i);return u=u.replace(/ $/,"%20"),x(c,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,c)}let d={get action(){return o},get location(){return t(r,l)},listen(i){if(s)throw new Error("A history only accepts one active listener");return r.addEventListener(W,g),s=i,()=>{r.removeEventListener(W,g),s=null}},createHref(i){return e(r,i)},createURL:O,encodeLocation(i){let c=O(i);return{pathname:c.pathname,search:c.search,hash:c.hash}},push:y,replace:I,go(i){return l.go(i)}};return d}var M;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(M||(M={}));function $(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,a=t.charAt(n);return a&&a!=="/"?null:t.slice(n)||"/"}function U(t,e){e===void 0&&(e="/");let{pathname:n,search:a="",hash:r=""}=typeof t=="string"?C(t):t;return{pathname:n?n.startsWith("/")?n:k(n,e):e,search:T(a),hash:z(r)}}function k(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function E(t,e,n,a){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function R(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function q(t,e){let n=R(t);return e?n.map((a,r)=>r===t.length-1?a.pathname:a.pathnameBase):n.map(a=>a.pathnameBase)}function J(t,e,n,a){a===void 0&&(a=!1);let r;typeof t=="string"?r=C(t):(r=v({},t),x(!r.pathname||!r.pathname.includes("?"),E("?","pathname","search",r)),x(!r.pathname||!r.pathname.includes("#"),E("#","pathname","hash",r)),x(!r.search||!r.search.includes("#"),E("#","search","hash",r)));let f=t===""||r.pathname==="",l=f?"/":r.pathname,o;if(l==null)o=n;else{let g=e.length-1;if(!a&&l.startsWith("..")){let y=l.split("/");for(;y[0]==="..";)y.shift(),g-=1;r.pathname=y.join("/")}o=g>=0?e[g]:"/"}let s=U(r,o),h=l&&l!=="/"&&l.endsWith("/"),p=(f||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(h||p)&&(s.pathname+="/"),s}const K=t=>t.join("/").replace(/\/\/+/g,"/"),T=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,z=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,H=["post","put","patch","delete"];new Set(H);const D=["get",...H];new Set(D);export{m as A,B as a,N as c,q as g,x as i,K as j,C as p,J as r,$ as s};
