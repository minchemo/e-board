(function(t){function e(e){for(var a,i,c=e[0],s=e[1],u=e[2],p=0,f=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"153b":function(t,e,n){},"2a0d":function(t,e,n){},3574:function(t,e,n){t.exports=n.p+"img/team.c703bce0.svg"},"3d02":function(t,e,n){t.exports=n.p+"img/logo.43d30dbc.png"},"511b":function(t,e,n){t.exports=n.p+"img/product.9b25e7d4.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a,r,o,i,c=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view",{key:t.$route.fullPath})],1)},u=[],l=n("2877"),p={},f=Object(l["a"])(p,s,u,!1,null,null,null),m=f.exports,v=(n("f5df1"),n("2f62")),d=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Nav",{attrs:{theme:"home-theme"}}),t._m(0)],1)},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg"},[a("div",{staticClass:"logo",attrs:{"data-aos":"fade-up","data-aos-duration":"2000"}},[a("img",{attrs:{src:n("3d02"),alt:"",srcset:""}})])])}],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"navigation",staticClass:"navigation active"},[n("div",{ref:"nav",staticClass:"nav"},t._l(t.navList,(function(e){return n("router-link",{key:e.title,staticClass:"nav-item",class:{selected:t.$props.theme==e.themeName},attrs:{to:e.path+"/1"}},[n("div",{staticClass:"nav-icon"},[n("img",{attrs:{src:e.icon,alt:"",srcset:""}})]),n("div",{staticClass:"nav-title"},[t._v(t._s(e.title))])])})),1),t.subnavList.length>0?n("div",{ref:"subnavbar",staticClass:"subnavbar"},[t._l(t.subnavList,(function(e){return[n("router-link",{key:e.title,staticClass:"item",attrs:{to:e.path}},[n("div",{staticClass:"title"},[t._v(" "+t._s(e.title)+" ")])])]}))],2):t._e()])},_=[],x=(n("4de4"),n("7db0"),{name:"navbar",props:{theme:String},computed:{navList:function(){return this.$router.options.routes.filter((function(t){return t.children.length>0}))},subnavList:function(){var t=this,e=this.$router.options.routes.find((function(e){return e.path==t.$route.matched[0].path}));return e?e.children:[]}},data:function(){return{}},mounted:function(){this.$refs.navigation.classList.add(this.$props.theme)}}),y=x,O=(n("be41"),Object(l["a"])(y,g,_,!1,null,"591d9c14",null)),C=O.exports,j={name:"Home",components:{Nav:C},mounted:function(){}},$=j,w=(n("8fc1"),Object(l["a"])($,h,b,!1,null,"105379ab",null)),N=w.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"env"},[n("div",{staticClass:"bg"}),n("Nav",{attrs:{theme:"env-theme"}})],1)},E=[],k={name:"Env",components:{Nav:C}},S=k,L=(n("a317"),Object(l["a"])(S,P,E,!1,null,"574d2535",null)),T=L.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product"},[t._v(" 產品 "),n("div",{staticClass:"bg"}),n("Nav",{attrs:{theme:"product-theme"}})],1)},H=[],J={name:"Product",components:{Nav:C}},q=J,z=(n("c354"),Object(l["a"])(q,M,H,!1,null,"5009deb8",null)),A=z.exports,B={},D=Object(l["a"])(B,a,r,!1,null,null,null),F=D.exports,G={},I=Object(l["a"])(G,o,i,!1,null,null,null),K=I.exports,Q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},R=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"texture"},[n("div",{staticClass:"bg"})])}],U={name:"ProductTexture",components:{}},V=U,W=(n("fbbb"),Object(l["a"])(V,Q,R,!1,null,"c6ad852c",null)),X=W.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"team"},[n("div",{staticClass:"bg"}),n("Nav",{attrs:{theme:"team-theme"}})],1)},Z=[],tt={name:"Team",components:{Nav:C}},et=tt,nt=(n("ba98"),Object(l["a"])(et,Y,Z,!1,null,"f4f51bb2",null)),at=nt.exports;c["a"].use(d["a"]);var rt=[{title:"首頁",path:"/",name:"Home",component:N,children:[]},{title:"周邊環境",themeName:"env-theme",icon:n("fa10"),path:"/env",name:"Env",component:T,children:[{title:"人口",path:"/env/1",component:T},{title:"交通",path:"/env/2",component:T},{title:"媒體園區",path:"/env/3",component:T},{title:"景點",path:"/env/4",component:T},{title:"學校",path:"/env/5",component:T}]},{title:"團隊介紹",themeName:"team-theme",icon:n("3574"),path:"/team",name:"Team",component:at,children:[{title:"長虹",path:"/team/1",component:at},{title:"森聯",path:"/team/2",component:at},{title:"建築職人",path:"/team/3",component:at},{title:"空間展演",path:"/team/4",component:at}]},{title:"產品導覽",themeName:"product-theme",icon:n("511b"),path:"/product",name:"Product",component:A,children:[{title:"基本資料",path:"/product/1",component:F},{title:"傢配圖",path:"/product/2",component:K},{title:"建材",path:"/product/3",component:X}]}],ot=new d["a"]({base:"",routes:rt}),it=ot,ct=n("f5af"),st=n.n(ct);n("e829");c["a"].use(v["a"]);var ut=new v["a"].Store({state:{}});c["a"].config.productionTip=!1,new c["a"]({render:function(t){return t(m)},router:it,store:ut,mounted:function(){st.a.init({offset:0,delay:0,easing:"ease",once:!1,anchorPlacement:"top-bottom"})}}).$mount("#app")},"5e2e":function(t,e,n){},"65f0":function(t,e,n){},"8fc1":function(t,e,n){"use strict";n("153b")},a317:function(t,e,n){"use strict";n("acaa")},a610:function(t,e,n){},acaa:function(t,e,n){},ba98:function(t,e,n){"use strict";n("65f0")},be41:function(t,e,n){"use strict";n("5e2e")},c354:function(t,e,n){"use strict";n("2a0d")},fa10:function(t,e,n){t.exports=n.p+"img/env.8ffea713.svg"},fbbb:function(t,e,n){"use strict";n("a610")}});
//# sourceMappingURL=app.0f6ca55c.js.map