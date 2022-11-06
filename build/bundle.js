var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function f(){return a(" ")}function d(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let $;function p(t){$=t}const g=[],v=[],y=[],k=[],j=Promise.resolve();let x=!1;function b(t){y.push(t)}const _=new Set;let C=0;function w(){const t=$;do{for(;C<g.length;){const t=g[C];C++,p(t),E(t.$$)}for(p(null),g.length=0,C=0;v.length;)v.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];_.has(e)||(_.add(e),e())}y.length=0}while(g.length);for(;k.length;)k.pop()();x=!1,_.clear(),p(t)}function E(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(b)}}const q=new Set;let z;function A(){z={r:0,c:[],p:z}}function M(){z.r||o(z.c),z=z.p}function T(t,e){t&&t.i&&(q.delete(t),t.i(e))}function N(t,e,n,o){if(t&&t.o){if(q.has(t))return;q.add(t),z.c.push((()=>{q.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}function O(t){t&&t.c()}function S(t,n,c,i){const{fragment:s,after_update:l}=t.$$;s&&s.m(n,c),i||b((()=>{const n=t.$$.on_mount.map(e).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),l.forEach(b)}function B(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function L(t,e){-1===t.$$.dirty[0]&&(g.push(t),x||(x=!0,j.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function R(e,r,c,i,s,u,a,f=[-1]){const d=$;p(e);const m=e.$$={fragment:null,ctx:[],props:u,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:r.target||d.$$.root};a&&a(m.root);let h=!1;if(m.ctx=c?c(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return m.ctx&&s(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),h&&L(e,t)),n})):[],m.update(),h=!0,o(m.before_update),m.fragment=!!i&&i(m.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);m.fragment&&m.fragment.l(t),t.forEach(l)}else m.fragment&&m.fragment.c();r.intro&&T(e.$$.fragment),S(e,r.target,r.anchor,r.customElement),w()}p(d)}class G{$destroy(){B(this,1),this.$destroy=t}$on(e,n){if(!r(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function I(t){let e,n,o,r=t[0].emoji+"";return{c(){e=u("div"),n=a(r),m(e,"id",t[2]),m(e,"data",o=t[0].emoji),m(e,"class","svelte-1m8vwdo")},m(t,o){s(t,e,o),i(e,n)},p(t,c){1&c&&r!==(r=t[0].emoji+"")&&h(n,r),4&c&&m(e,"id",t[2]),1&c&&o!==(o=t[0].emoji)&&m(e,"data",o)},d(t){t&&l(e)}}}function P(t){let e,n,o;return{c(){e=u("div"),n=a("?"),m(e,"id",t[2]),m(e,"data",o=t[0].emoji),m(e,"class","svelte-1m8vwdo")},m(t,o){s(t,e,o),i(e,n)},p(t,n){4&n&&m(e,"id",t[2]),1&n&&o!==(o=t[0].emoji)&&m(e,"data",o)},d(t){t&&l(e)}}}function D(e){let n,o,r;function c(t,e){return 0==t[0].active?P:I}let i=c(e),a=i(e);return{c(){n=u("main"),a.c(),m(n,"class","svelte-1m8vwdo")},m(t,c){s(t,n,c),a.m(n,null),o||(r=d(n,"click",e[3]),o=!0)},p(t,[e]){i===(i=c(t))&&a?a.p(t,e):(a.d(1),a=i(t),a&&(a.c(),a.m(n,null)))},i:t,o:t,d(t){t&&l(n),a.d(),o=!1,r()}}}function F(t,e,n){let{emoji:o}=e,{onClick:r}=e,{key:c}=e;return t.$$set=t=>{"emoji"in t&&n(0,o=t.emoji),"onClick"in t&&n(1,r=t.onClick),"key"in t&&n(2,c=t.key)},[o,r,c,t=>r(t)]}class H extends G{constructor(t){super(),R(this,t,F,D,c,{emoji:0,onClick:1,key:2})}}function J(t,e,n){const o=t.slice();return o[2]=e[n],o[4]=n,o}function K(t){let e,n;return e=new H({props:{emoji:t[2],onClick:t[1],key:t[4]}}),{c(){O(e.$$.fragment)},m(t,o){S(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.emoji=t[2]),2&n&&(o.onClick=t[1]),e.$set(o)},i(t){n||(T(e.$$.fragment,t),n=!0)},o(t){N(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function Q(t){let e,n,o=t[0],r=[];for(let e=0;e<o.length;e+=1)r[e]=K(J(t,o,e));const c=t=>N(r[t],1,1,(()=>{r[t]=null}));return{c(){e=u("main");for(let t=0;t<r.length;t+=1)r[t].c();m(e,"class","svelte-cthzis")},m(t,o){s(t,e,o);for(let t=0;t<r.length;t+=1)r[t].m(e,null);n=!0},p(t,[n]){if(3&n){let i;for(o=t[0],i=0;i<o.length;i+=1){const c=J(t,o,i);r[i]?(r[i].p(c,n),T(r[i],1)):(r[i]=K(c),r[i].c(),T(r[i],1),r[i].m(e,null))}for(A(),i=o.length;i<r.length;i+=1)c(i);M()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)T(r[t]);n=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)N(r[t]);n=!1},d(t){t&&l(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(r,t)}}}function U(t,e,n){let{emojis:o}=e,{onClick:r}=e;return t.$$set=t=>{"emojis"in t&&n(0,o=t.emojis),"onClick"in t&&n(1,r=t.onClick)},[o,r]}class V extends G{constructor(t){super(),R(this,t,U,Q,c,{emojis:0,onClick:1})}}function W(e){let n,o,r,c,$,p,g,v,y,k,j,x,b=e[1]>0?"Congratulations, you have a decent memory":"My bro you should take some vitamins to improve that memory";return{c(){n=u("div"),o=u("h2"),r=a("Game finished!! "),c=a(b),$=f(),p=u("h2"),g=a("This is your score: "),v=a(e[1]),y=f(),k=u("button"),k.textContent="Restart",m(k,"class","svelte-1rujqzh"),m(n,"id","modal"),m(n,"class","svelte-1rujqzh")},m(t,l){s(t,n,l),i(n,o),i(o,r),i(o,c),i(n,$),i(n,p),i(p,g),i(p,v),i(n,y),i(n,k),j||(x=d(k,"click",e[3]),j=!0)},p(t,e){2&e&&b!==(b=t[1]>0?"Congratulations, you have a decent memory":"My bro you should take some vitamins to improve that memory")&&h(c,b),2&e&&h(v,t[1])},i:t,o:t,d(t){t&&l(n),j=!1,x()}}}function X(t){let e,n,o,r,c,i;return e=new V({props:{emojis:t[0],onClick:t[4]}}),{c(){O(e.$$.fragment),n=f(),o=u("button"),o.textContent="Restart",m(o,"class","svelte-1rujqzh")},m(l,u){S(e,l,u),s(l,n,u),s(l,o,u),r=!0,c||(i=d(o,"click",t[3]),c=!0)},p(t,n){const o={};1&n&&(o.emojis=t[0]),e.$set(o)},i(t){r||(T(e.$$.fragment,t),r=!0)},o(t){N(e.$$.fragment,t),r=!1},d(t){B(e,t),t&&l(n),t&&l(o),c=!1,i()}}}function Y(t){let e,n,o,r,c,d,$,p;const g=[X,W],v=[];function y(t,e){return 0==t[2]?0:1}return d=y(t),$=v[d]=g[d](t),{c(){e=u("main"),n=u("h1"),o=a("Score: "),r=a(t[1]),c=f(),$.c(),m(n,"class","svelte-1rujqzh"),m(e,"class","svelte-1rujqzh")},m(t,l){s(t,e,l),i(e,n),i(n,o),i(n,r),i(e,c),v[d].m(e,null),p=!0},p(t,[n]){(!p||2&n)&&h(r,t[1]);let o=d;d=y(t),d===o?v[d].p(t,n):(A(),N(v[o],1,1,(()=>{v[o]=null})),M(),$=v[d],$?$.p(t,n):($=v[d]=g[d](t),$.c()),T($,1),$.m(e,null))},i(t){p||(T($),p=!0)},o(t){N($),p=!1},d(t){t&&l(e),v[d].d()}}}function Z(t,e,n){const o=["🥔","🍒","🥑","🌽","🥕","🍇","🍉","🍌","🥭","🍍"].reduce(((t,e)=>t.concat([e,e])),[]).sort((()=>Math.random()-.5));let r=[],c={},i={},s=!0,l=0,u=!1;(()=>{for(let t=0;t<o.length;t++)n(0,r=[...r,{emoji:o[t],active:!0,key:t}])})();const a=()=>{setTimeout((()=>{for(let t=0;t<r.length;t++)n(0,r[t].active=!1,r)}),1500)};a();return t.$$.update=()=>{3&t.$$.dirty&&(r.every((t=>1==t.active))&&0!=l?n(2,u=!0):n(2,u=!1))},[r,l,u,()=>{r.sort((()=>Math.random()-.5));for(let t=0;t<r.length;t++)n(0,r[t].active=!0,r);a(),n(1,l=0),1==u&&n(2,u=!1)},t=>{const e=parseInt(t.target.id),o=t.target.getAttribute("data");1==s?(c={index:e,character:o},s=!1,n(0,r[e].active=!0,r)):0==s&&e!==c.index&&(i={index:e,character:o},n(0,r[e].active=!0,r),s=!0,c.character!=i.character&&c.index!=i.index?(setTimeout((()=>{n(0,r[c.index].active=!1,r),n(0,r[i.index].active=!1,r)}),700),n(1,l--,l)):n(1,l++,l))}]}class tt extends G{constructor(t){super(),R(this,t,Z,Y,c,{})}}function et(e){let n,o,r;return o=new tt({}),{c(){n=u("main"),O(o.$$.fragment)},m(t,e){s(t,n,e),S(o,n,null),r=!0},p:t,i(t){r||(T(o.$$.fragment,t),r=!0)},o(t){N(o.$$.fragment,t),r=!1},d(t){t&&l(n),B(o)}}}return new class extends G{constructor(t){super(),R(this,t,null,et,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
