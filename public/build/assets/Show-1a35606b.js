import{l as N,m as dt,v as ht,u as Zt,i as Qt}from"./pin-eef2b704.js";import{_ as Ht}from"./AppLayout-950c99a8.js";import"./proj4leaflet-9b7f940e.js";import{latLng as Gt,latLngBounds as Wt}from"./leaflet-src.esm-9c358b30.js";import{x as Jt,y as pt,d as I,p as Xt,q as Yt,o as j,c as gt,w as Q,a as f,t as x,u as g,b as L,f as H,g as G,e as D,h as te,F as ee}from"./app-9bf64e70.js";const M=/^[a-z0-9]+(-[a-z0-9]+)*$/,$=(t,e,n,r="")=>{const o=t.split(":");if(t.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),l=o.pop(),a={provider:o.length>0?o[0]:r,prefix:l,name:c};return e&&!R(a)?null:a}const s=o[0],i=s.split("-");if(i.length>1){const c={provider:r,prefix:i.shift(),name:i.join("-")};return e&&!R(c)?null:c}if(n&&r===""){const c={provider:r,prefix:"",name:s};return e&&!R(c,n)?null:c}return null},R=(t,e)=>t?!!((t.provider===""||t.provider.match(M))&&(e&&t.prefix===""||t.prefix.match(M))&&t.name.match(M)):!1,Et=Object.freeze({left:0,top:0,width:16,height:16}),q=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),V=Object.freeze({...Et,...q}),Y=Object.freeze({...V,body:"",hidden:!1});function ne(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const r=((t.rotate||0)+(e.rotate||0))%4;return r&&(n.rotate=r),n}function mt(t,e){const n=ne(t,e);for(const r in Y)r in q?r in t&&!(r in n)&&(n[r]=q[r]):r in e?n[r]=e[r]:r in t&&(n[r]=t[r]);return n}function oe(t,e){const n=t.icons,r=t.aliases||Object.create(null),o=Object.create(null);function s(i){if(n[i])return o[i]=[];if(!(i in o)){o[i]=null;const c=r[i]&&r[i].parent,l=c&&s(c);l&&(o[i]=[c].concat(l))}return o[i]}return(e||Object.keys(n).concat(Object.keys(r))).forEach(s),o}function re(t,e,n){const r=t.icons,o=t.aliases||Object.create(null);let s={};function i(c){s=mt(r[c]||o[c],s)}return i(e),n.forEach(i),mt(t,s)}function At(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(o=>{e(o,null),n.push(o)});const r=oe(t);for(const o in r){const s=r[o];s&&(e(o,re(t,o,s)),n.push(o))}return n}const se={provider:"",aliases:{},not_found:{},...Et};function W(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function Mt(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!W(t,se))return null;const n=e.icons;for(const o in n){const s=n[o];if(!o.match(M)||typeof s.body!="string"||!W(s,Y))return null}const r=e.aliases||Object.create(null);for(const o in r){const s=r[o],i=s.parent;if(!o.match(M)||typeof i!="string"||!n[i]&&!r[i]||!W(s,Y))return null}return e}const yt=Object.create(null);function ie(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function T(t,e){const n=yt[t]||(yt[t]=Object.create(null));return n[e]||(n[e]=ie(t,e))}function it(t,e){return Mt(e)?At(e,(n,r)=>{r?t.icons[n]=r:t.missing.add(n)}):[]}function ce(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let P=!1;function Pt(t){return typeof t=="boolean"&&(P=t),P}function le(t){const e=typeof t=="string"?$(t,!0,P):t;if(e){const n=T(e.provider,e.prefix),r=e.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function ae(t,e){const n=$(t,!0,P);if(!n)return!1;const r=T(n.provider,n.prefix);return ce(r,n.name,e)}function ue(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),P&&!e&&!t.prefix){let o=!1;return Mt(t)&&(t.prefix="",At(t,(s,i)=>{i&&ae(s,i)&&(o=!0)})),o}const n=t.prefix;if(!R({provider:e,prefix:n,name:"a"}))return!1;const r=T(e,n);return!!it(r,t)}const Ot=Object.freeze({width:null,height:null}),Ft=Object.freeze({...Ot,...q}),fe=/(-?[0-9.]*[0-9]+[0-9.]*)/g,de=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function bt(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const r=t.split(fe);if(r===null||!r.length)return t;const o=[];let s=r.shift(),i=de.test(s);for(;;){if(i){const c=parseFloat(s);isNaN(c)?o.push(s):o.push(Math.ceil(c*e*n)/n)}else o.push(s);if(s=r.shift(),s===void 0)return o.join("");i=!i}}const he=t=>t==="unset"||t==="undefined"||t==="none";function pe(t,e){const n={...V,...t},r={...Ft,...e},o={left:n.left,top:n.top,width:n.width,height:n.height};let s=n.body;[n,r].forEach(w=>{const d=[],p=w.hFlip,k=w.vFlip;let _=w.rotate;p?k?_+=2:(d.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),d.push("scale(-1 1)"),o.top=o.left=0):k&&(d.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),d.push("scale(1 -1)"),o.top=o.left=0);let v;switch(_<0&&(_-=Math.floor(_/4)*4),_=_%4,_){case 1:v=o.height/2+o.top,d.unshift("rotate(90 "+v.toString()+" "+v.toString()+")");break;case 2:d.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:v=o.width/2+o.left,d.unshift("rotate(-90 "+v.toString()+" "+v.toString()+")");break}_%2===1&&(o.left!==o.top&&(v=o.left,o.left=o.top,o.top=v),o.width!==o.height&&(v=o.width,o.width=o.height,o.height=v)),d.length&&(s='<g transform="'+d.join(" ")+'">'+s+"</g>")});const i=r.width,c=r.height,l=o.width,a=o.height;let u,h;i===null?(h=c===null?"1em":c==="auto"?a:c,u=bt(h,l/a)):(u=i==="auto"?l:i,h=c===null?bt(u,a/l):c==="auto"?a:c);const y={},b=(w,d)=>{he(d)||(y[w]=d.toString())};return b("width",u),b("height",h),y.viewBox=o.left.toString()+" "+o.top.toString()+" "+l.toString()+" "+a.toString(),{attributes:y,body:s}}const ge=/\sid="(\S+)"/g,me="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let ye=0;function be(t,e=me){const n=[];let r;for(;r=ge.exec(t);)n.push(r[1]);if(!n.length)return t;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(s=>{const i=typeof e=="function"?e(s):e+(ye++).toString(),c=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+i+o+"$3")}),t=t.replace(new RegExp(o,"g"),""),t}const tt=Object.create(null);function we(t,e){tt[t]=e}function et(t){return tt[t]||tt[""]}function ct(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const lt=Object.create(null),A=["https://api.simplesvg.com","https://api.unisvg.com"],U=[];for(;A.length>0;)A.length===1||Math.random()>.5?U.push(A.shift()):U.push(A.pop());lt[""]=ct({resources:["https://api.iconify.design"].concat(U)});function xe(t,e){const n=ct(e);return n===null?!1:(lt[t]=n,!0)}function at(t){return lt[t]}const _e=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let wt=_e();function ve(t,e){const n=at(t);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(i=>{o=Math.max(o,i.length)});const s=e+".json?icons=";r=n.maxURL-o-n.path.length-s.length}return r}function Se(t){return t===404}const Ie=(t,e,n)=>{const r=[],o=ve(t,e),s="icons";let i={type:s,provider:t,prefix:e,icons:[]},c=0;return n.forEach((l,a)=>{c+=l.length+1,c>=o&&a>0&&(r.push(i),i={type:s,provider:t,prefix:e,icons:[]},c=l.length),i.icons.push(l)}),r.push(i),r};function ke(t){if(typeof t=="string"){const e=at(t);if(e)return e.path}return"/"}const Ce=(t,e,n)=>{if(!wt){n("abort",424);return}let r=ke(e.provider);switch(e.type){case"icons":{const s=e.prefix,c=e.icons.join(","),l=new URLSearchParams({icons:c});r+=s+".json?"+l.toString();break}case"custom":{const s=e.uri;r+=s.slice(0,1)==="/"?s.slice(1):s;break}default:n("abort",400);return}let o=503;wt(t+r).then(s=>{const i=s.status;if(i!==200){setTimeout(()=>{n(Se(i)?"abort":"next",i)});return}return o=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?n("abort",s):n("next",o)});return}setTimeout(()=>{n("success",s)})}).catch(()=>{n("next",o)})},Te={prepare:Ie,send:Ce};function je(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((o,s)=>o.provider!==s.provider?o.provider.localeCompare(s.provider):o.prefix!==s.prefix?o.prefix.localeCompare(s.prefix):o.name.localeCompare(s.name));let r={provider:"",prefix:"",name:""};return t.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const s=o.provider,i=o.prefix,c=o.name,l=n[s]||(n[s]=Object.create(null)),a=l[i]||(l[i]=T(s,i));let u;c in a.icons?u=e.loaded:i===""||a.missing.has(c)?u=e.missing:u=e.pending;const h={provider:s,prefix:i,name:c};u.push(h)}),e}function Nt(t,e){t.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(o=>o.id!==e))})}function Le(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const r=t.provider,o=t.prefix;e.forEach(s=>{const i=s.icons,c=i.pending.length;i.pending=i.pending.filter(l=>{if(l.prefix!==o)return!0;const a=l.name;if(t.icons[a])i.loaded.push({provider:r,prefix:o,name:a});else if(t.missing.has(a))i.missing.push({provider:r,prefix:o,name:a});else return n=!0,!0;return!1}),i.pending.length!==c&&(n||Nt([t],s.id),s.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),s.abort))})}))}let Ee=0;function Ae(t,e,n){const r=Ee++,o=Nt.bind(null,n,r);if(!e.pending.length)return o;const s={id:r,icons:e,callback:t,abort:o};return n.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(s)}),o}function Me(t,e=!0,n=!1){const r=[];return t.forEach(o=>{const s=typeof o=="string"?$(o,e,n):o;s&&r.push(s)}),r}var Pe={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Oe(t,e,n,r){const o=t.resources.length,s=t.random?Math.floor(Math.random()*o):t.index;let i;if(t.random){let m=t.resources.slice(0);for(i=[];m.length>1;){const S=Math.floor(Math.random()*m.length);i.push(m[S]),m=m.slice(0,S).concat(m.slice(S+1))}i=i.concat(m)}else i=t.resources.slice(s).concat(t.resources.slice(0,s));const c=Date.now();let l="pending",a=0,u,h=null,y=[],b=[];typeof r=="function"&&b.push(r);function w(){h&&(clearTimeout(h),h=null)}function d(){l==="pending"&&(l="aborted"),w(),y.forEach(m=>{m.status==="pending"&&(m.status="aborted")}),y=[]}function p(m,S){S&&(b=[]),typeof m=="function"&&b.push(m)}function k(){return{startTime:c,payload:e,status:l,queriesSent:a,queriesPending:y.length,subscribe:p,abort:d}}function _(){l="failed",b.forEach(m=>{m(void 0,u)})}function v(){y.forEach(m=>{m.status==="pending"&&(m.status="aborted")}),y=[]}function Kt(m,S,E){const F=S!=="success";switch(y=y.filter(C=>C!==m),l){case"pending":break;case"failed":if(F||!t.dataAfterTimeout)return;break;default:return}if(S==="abort"){u=E,_();return}if(F){u=E,y.length||(i.length?Z():_());return}if(w(),v(),!t.random){const C=t.resources.indexOf(m.resource);C!==-1&&C!==t.index&&(t.index=C)}l="completed",b.forEach(C=>{C(E)})}function Z(){if(l!=="pending")return;w();const m=i.shift();if(m===void 0){if(y.length){h=setTimeout(()=>{w(),l==="pending"&&(v(),_())},t.timeout);return}_();return}const S={status:"pending",resource:m,callback:(E,F)=>{Kt(S,E,F)}};y.push(S),a++,h=setTimeout(Z,t.rotate),n(m,e,S.callback)}return setTimeout(Z),k}function Dt(t){const e={...Pe,...t};let n=[];function r(){n=n.filter(c=>c().status==="pending")}function o(c,l,a){const u=Oe(e,c,l,(h,y)=>{r(),a&&a(h,y)});return n.push(u),u}function s(c){return n.find(l=>c(l))||null}return{query:o,find:s,setIndex:c=>{e.index=c},getIndex:()=>e.index,cleanup:r}}function xt(){}const J=Object.create(null);function Fe(t){if(!J[t]){const e=at(t);if(!e)return;const n=Dt(e),r={config:e,redundancy:n};J[t]=r}return J[t]}function Ne(t,e,n){let r,o;if(typeof t=="string"){const s=et(t);if(!s)return n(void 0,424),xt;o=s.send;const i=Fe(t);i&&(r=i.redundancy)}else{const s=ct(t);if(s){r=Dt(s);const i=t.resources?t.resources[0]:"",c=et(i);c&&(o=c.send)}}return!r||!o?(n(void 0,424),xt):r.query(e,o,n)().abort}const _t="iconify2",O="iconify",zt=O+"-count",vt=O+"-version",Rt=36e5,De=168;function nt(t,e){try{return t.getItem(e)}catch{}}function ut(t,e,n){try{return t.setItem(e,n),!0}catch{}}function St(t,e){try{t.removeItem(e)}catch{}}function ot(t,e){return ut(t,zt,e.toString())}function rt(t){return parseInt(nt(t,zt))||0}const K={local:!0,session:!0},Ut={local:new Set,session:new Set};let ft=!1;function ze(t){ft=t}let z=typeof window>"u"?{}:window;function Bt(t){const e=t+"Storage";try{if(z&&z[e]&&typeof z[e].length=="number")return z[e]}catch{}K[t]=!1}function qt(t,e){const n=Bt(t);if(!n)return;const r=nt(n,vt);if(r!==_t){if(r){const c=rt(n);for(let l=0;l<c;l++)St(n,O+l.toString())}ut(n,vt,_t),ot(n,0);return}const o=Math.floor(Date.now()/Rt)-De,s=c=>{const l=O+c.toString(),a=nt(n,l);if(typeof a=="string"){try{const u=JSON.parse(a);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>o&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&e(u,c))return!0}catch{}St(n,l)}};let i=rt(n);for(let c=i-1;c>=0;c--)s(c)||(c===i-1?(i--,ot(n,i)):Ut[t].add(c))}function $t(){if(!ft){ze(!0);for(const t in K)qt(t,e=>{const n=e.data,r=e.provider,o=n.prefix,s=T(r,o);if(!it(s,n).length)return!1;const i=n.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,i):i,!0})}}function Re(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const r in K)qt(r,o=>{const s=o.data;return o.provider!==t.provider||s.prefix!==t.prefix||s.lastModified===e});return!0}function Ue(t,e){ft||$t();function n(r){let o;if(!K[r]||!(o=Bt(r)))return;const s=Ut[r];let i;if(s.size)s.delete(i=Array.from(s).shift());else if(i=rt(o),!ot(o,i+1))return;const c={cached:Math.floor(Date.now()/Rt),provider:t.provider,data:e};return ut(o,O+i.toString(),JSON.stringify(c))}e.lastModified&&!Re(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function It(){}function Be(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,Le(t)}))}function qe(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:r}=t,o=t.iconsToLoad;delete t.iconsToLoad;let s;if(!o||!(s=et(n)))return;s.prepare(n,r,o).forEach(c=>{Ne(n,c,l=>{if(typeof l!="object")c.icons.forEach(a=>{t.missing.add(a)});else try{const a=it(t,l);if(!a.length)return;const u=t.pendingIcons;u&&a.forEach(h=>{u.delete(h)}),Ue(t,l)}catch(a){console.error(a)}Be(t)})})}))}const $e=(t,e)=>{const n=Me(t,!0,Pt()),r=je(n);if(!r.pending.length){let l=!0;return e&&setTimeout(()=>{l&&e(r.loaded,r.missing,r.pending,It)}),()=>{l=!1}}const o=Object.create(null),s=[];let i,c;return r.pending.forEach(l=>{const{provider:a,prefix:u}=l;if(u===c&&a===i)return;i=a,c=u,s.push(T(a,u));const h=o[a]||(o[a]=Object.create(null));h[u]||(h[u]=[])}),r.pending.forEach(l=>{const{provider:a,prefix:u,name:h}=l,y=T(a,u),b=y.pendingIcons||(y.pendingIcons=new Set);b.has(h)||(b.add(h),o[a][u].push(h))}),s.forEach(l=>{const{provider:a,prefix:u}=l;o[a][u].length&&qe(l,o[a][u])}),e?Ae(e,r,s):It};function Ve(t,e){const n={...t};for(const r in e){const o=e[r],s=typeof o;r in Ot?(o===null||o&&(s==="string"||s==="number"))&&(n[r]=o):s===typeof n[r]&&(n[r]=r==="rotate"?o%4:o)}return n}const Ke=/[\s,]+/;function Ze(t,e){e.split(Ke).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function Qe(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(t);return isNaN(o)?0:r(o)}else if(n!==t){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let s=parseFloat(t.slice(0,t.length-n.length));return isNaN(s)?0:(s=s/o,s%1===0?r(s):0)}}return e}function He(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in e)n+=" "+r+'="'+e[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function Ge(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function We(t){return"data:image/svg+xml,"+Ge(t)}function Je(t){return'url("'+We(t)+'")'}const kt={...Ft,inline:!1},Xe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Ye={display:"inline-block"},st={backgroundColor:"currentColor"},Vt={backgroundColor:"transparent"},Ct={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Tt={webkitMask:st,mask:st,background:Vt};for(const t in Tt){const e=Tt[t];for(const n in Ct)e[t+n]=Ct[n]}const B={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";B[t+"-flip"]=e,B[t.slice(0,1)+"-flip"]=e,B[t+"Flip"]=e});function jt(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const Lt=(t,e)=>{const n=Ve(kt,e),r={...Xe},o=e.mode||"svg",s={},i=e.style,c=typeof i=="object"&&!(i instanceof Array)?i:{};for(let d in e){const p=e[d];if(p!==void 0)switch(d){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[d]=p===!0||p==="true"||p===1;break;case"flip":typeof p=="string"&&Ze(n,p);break;case"color":s.color=p;break;case"rotate":typeof p=="string"?n[d]=Qe(p):typeof p=="number"&&(n[d]=p);break;case"ariaHidden":case"aria-hidden":p!==!0&&p!=="true"&&delete r["aria-hidden"];break;default:{const k=B[d];k?(p===!0||p==="true"||p===1)&&(n[k]=!0):kt[d]===void 0&&(r[d]=p)}}}const l=pe(t,n),a=l.attributes;if(n.inline&&(s.verticalAlign="-0.125em"),o==="svg"){r.style={...s,...c},Object.assign(r,a);let d=0,p=e.id;return typeof p=="string"&&(p=p.replace(/-/g,"_")),r.innerHTML=be(l.body,p?()=>p+"ID"+d++:"iconifyVue"),pt("svg",r)}const{body:u,width:h,height:y}=t,b=o==="mask"||(o==="bg"?!1:u.indexOf("currentColor")!==-1),w=He(u,{...a,width:h+"",height:y+""});return r.style={...s,"--svg":Je(w),width:jt(a.width),height:jt(a.height),...Ye,...b?st:Vt,...c},pt("span",r)};Pt(!0);we("",Te);if(typeof document<"u"&&typeof window<"u"){$t();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!ue(r))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const r="IconifyProviders["+n+"] is invalid.";try{const o=e[n];if(typeof o!="object"||!o||o.resources===void 0)continue;xe(n,o)||console.error(r)}catch{console.error(r)}}}}const tn={...V,body:""},X=Jt({inheritAttrs:!1,data(){return{iconMounted:!1,counter:0}},mounted(){this._name="",this._loadingIcon=null,this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let n;if(typeof t!="string"||(n=$(t,!1,!0))===null)return this.abortLoading(),null;const r=le(n);if(!r)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",r!==null&&(this._loadingIcon={name:t,abort:$e([n],()=>{this.counter++})})),null;this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t));const o=["iconify"];return n.prefix!==""&&o.push("iconify--"+n.prefix),n.provider!==""&&o.push("iconify--"+n.provider),{data:r,classes:o}}},render(){this.counter;const t=this.$attrs,e=this.iconMounted?this.getIcon(t.icon,t.onLoad):null;if(!e)return Lt(tn,t);let n=t;return e.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+e.classes.join(" ")}),Lt({...V,...e.data},n)}}),en={class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"},nn={class:"relative",style:{height:"400px",width:"100%"}},on={class:"text-gray-600 body-font"},rn={class:"container px-5 py-24 mx-auto"},sn={class:"flex flex-wrap -m-4"},cn={class:"p-4 lg:w-1/3 md:w-full"},ln={class:"card bg-base-100 shadow-xl"},an={class:"card-body gap-4"},un={class:"card-title"},fn={class:"text-xl"},dn={key:0},hn={class:"text-xl"},pn={key:1},gn={class:"text-xl"},mn={class:"text-xl"},yn={class:"p-4 lg:w-2/3 md:w-full"},bn={class:"card bg-base-100 shadow-xl"},wn={class:"card-body gap-4"},xn={class:"card-title"},_n={class:"overflow-x-auto"},vn={class:"table"},Sn=f("thead",null,[f("tr",null,[f("th",null,"Measuring time"),f("th",null,"Author")])],-1),In={class:"flex items-center gap-3"},kn={class:"avatar"},Cn={class:"mask mask-squircle w-12 h-12"},Tn=["src","alt"],jn={class:"font-bold"},Ln=f("tfoot",null,[f("tr",null,[f("th",null,"Measuring time"),f("th",null,"Author")])],-1),Fn={__name:"Show",props:{observation_spot:{type:Object,required:!1,default:null},water_body:{type:Object,required:!0},coordinates:{type:Object,required:!1,default:null},observations:{type:Object,required:!1,default:null}},setup(t){const e=t,n=I(null),r=I(4),o=I([51.505,-.09]);I(!0),I(!0),I(!0),I(!1);const s=N.icon({iconUrl:dt,iconSize:[55,55],iconAnchor:[25,55],popupAnchor:[0,-55]});I(""),I(!1);let i=I(!1),c=I(!0),l=Gt(58.379,24.554),a=Wt([60.4349,29.4338],[56.7458,20.373]),u=null;function h(){console.log("map ready"),u=n.value.leafletObject,u&&u.scrollWheelZoom.disable()}N.icon({iconUrl:dt,iconSize:[55,55],iconAnchor:[25,55],popupAnchor:[0,-55],className:"marker-icon"});var y=new N.Proj.CRS("EPSG:3301","+proj=lcc +lat_1=59.33333333333334 +lat_2=58 +lat_0=57.51755393055556 +lon_0=24 +x_0=500000 +y_0=6375000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",{resolutions:[4e3,2e3,1e3,500,250,125,62.5,31.25,15.625,7.8125,3.90625,1.953125,.9765625,.48828125,.244140625,.122070313,.061035156,.030517578,.015258789],origin:[40500,5993e3],bounds:N.bounds([40500,5993e3],[1064500,7017e3])});return Xt(async()=>{i.value=!0}),Yt([o,r],([b,w])=>{n.value&&(n.value={center:b,zoom:w})}),(b,w)=>(j(),gt(Ht,{title:"Dashboard"},{header:Q(()=>[f("h2",en,x(g(e).water_body.title)+" - "+x(g(e).observation_spot.name),1)]),default:Q(()=>[f("main",nn,[L(g(Qt),{ref_key:"map",ref:n,crs:g(y),zoom:r.value,"onUpdate:zoom":w[0]||(w[0]=d=>r.value=d),useGlobalLeaflet:!0,center:g(l),bounds:g(a),maxZoom:14,minZoom:3,scrollWheelZoom:!1,onReady:h},{default:Q(()=>[L(g(ht),{url:"https://tiles.maaamet.ee/tm/tms/1.0.0/vreljeef/{z}/{x}/{y}.png&ASUTUS=TLU&KESKKOND=ADAPTEST",tms:g(c),"full-screen":!1,worldCopyJump:!0,"z-index":1,options:{maxNativeZoom:13,maxZoom:13,minZoom:3}},null,8,["tms"]),L(g(ht),{url:"https://tiles.maaamet.ee/tm/tms/1.0.0/hybriid/{z}/{x}/{y}.png&ASUTUS=TLU&KESKKOND=ADAPTEST",attribution:"Maa-ameti kaart, <a href='http://www.maaamet.ee'>Maa-amet</a>",tms:g(c),"full-screen":!1,worldCopyJump:!0,"z-index":2,options:{maxNativeZoom:13,maxZoom:13,minZoom:3}},null,8,["tms"]),g(e).coordinates?(j(),gt(g(Zt),{key:0,"lat-lng":g(e).coordinates,icon:g(s),ref:"marker"},null,8,["lat-lng","icon"])):H("",!0)]),_:1},8,["crs","zoom","center","bounds"])]),f("section",on,[f("div",rn,[f("div",sn,[f("div",cn,[f("div",ln,[f("div",an,[f("h2",un,x(g(e).water_body.title),1),f("div",null,[f("h3",fn,[L(g(X),{icon:"mdi:water",class:"w-6 h-6 inline-block"}),G(" "+x(b.$t("Type")),1)]),f("p",null,x(g(e).water_body.type),1)]),g(e).water_body.area?(j(),D("div",dn,[f("h3",hn,x(b.$t("Area")),1),f("p",null,x(g(e).water_body.area),1)])):H("",!0),g(e).water_body.watershed?(j(),D("div",pn,[f("h3",gn,[L(g(X),{icon:"carbon:area",class:"w-6 h-6 inline-block"}),G(" "+x(b.$t("Watershed")),1)]),f("p",null,x(g(e).water_body.watershed),1)])):H("",!0),f("div",null,[f("h3",mn,[L(g(X),{icon:"tabler:id",class:"w-6 h-6 inline-block"}),G(" "+x(b.$t("Code")),1)]),f("p",null,x(g(e).water_body.code),1)])])])]),f("div",yn,[f("div",bn,[f("div",wn,[f("h2",xn,x(g(e).observation_spot.name),1),f("div",_n,[f("table",vn,[Sn,f("tbody",null,[(j(!0),D(ee,null,te(g(e).observations,d=>(j(),D("tr",{key:d.id},[f("td",null,[f("div",In,[f("div",kn,[f("div",Cn,[f("img",{src:d.user.profile_photo_url,alt:d.user.name},null,8,Tn)])]),f("div",null,[f("div",jn,x(d.measuring_time),1)])])]),f("td",null,x(d.user.name),1)]))),128))]),Ln])])])])])])])])]),_:1}))}};export{Fn as default};