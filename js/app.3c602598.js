(function(t){function e(e){for(var n,o,c=e[0],s=e[1],u=e[2],p=0,l=[];p<c.length;p++)o=c[p],i[o]&&l.push(i[o][0]),i[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);d&&d(e);while(l.length)l.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,o=1;o<r.length;o++){var s=r[o];0!==i[s]&&(n=!1)}n&&(a.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},i={app:0},a=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"44cf3688"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r=i[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise(function(e,n){r=i[t]=[e,n]});e.push(r[2]=n);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=o(t),a=function(e){s.onerror=s.onload=null,clearTimeout(u);var r=i[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+n+": "+a+")");o.type=n,o.request=a,r[1](o)}i[t]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:s})},12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/testarDeploy/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var p=0;p<s.length;p++)e(s[p]);var d=u;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0f26":function(t,e,r){t.exports=r.p+"img/slimJ-1.cfe3e570.jpg"},"13fc":function(t,e,r){t.exports=r.p+"img/image-5_45938452314_o.1a874827.jpg"},"1d0f":function(t,e,r){t.exports=r.p+"img/slimJ-4.53b31699.jpg"},"21bb":function(t,e,r){"use strict";var n=r("bcc9"),i=r.n(n);i.a},3360:function(t,e,r){var n={"./card-1.jpg":"9ae5","./card-2.jpg":"73f0","./card-4.jpg":"d461","./card-5.jpg":"96be","./image-5_45938452314_o.jpg":"13fc","./slimJ-1.jpg":"0f26","./slimJ-2.jpg":"6c5a","./slimJ-3.jpg":"bdf2","./slimJ-4.jpg":"1d0f","./slimJ-5.jpg":"6ad4","./t-shirt-1.jpg":"6743","./t-shirt-2.jpg":"6b1d","./t-shirt-3.jpg":"b29e"};function i(t){var e=a(t);return r(e)}function a(t){var e=n[t];if(!(e+1)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return e}i.keys=function(){return Object.keys(n)},i.resolve=a,t.exports=i,i.id="3360"},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"wrapper"}},[r("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v("|\n    "),r("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),r("router-view")],1)},a=[],o=(r("5c0b"),r("2877")),c={},s=Object(o["a"])(c,i,a,!1,null,null,null),u=s.exports,p=r("8c4f"),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"wrapper"},[r("h2",[t._v("Featured Items")]),r("ul",{staticClass:"featured-items"},t._l(t.products,function(e){return r("li",{key:e.id,staticClass:"featured-items__item"},[r("router-link",{attrs:{to:{name:"product",params:{id:e.id}}}},[r("img",{staticClass:"product-image",attrs:{src:t.imagePath(e),alt:""}}),r("p",{staticClass:"product-title"},[t._v(t._s(e.name))]),r("p",[r("em",[t._v("$"+t._s(e.price))])])])],1)}),0)])])},l=[],f={name:"home",computed:{products:function(){return this.$store.state.products}},methods:{imagePath:function(t){return r("3360")("./".concat(t.images[0]))}}},m=f,g=(r("21bb"),Object(o["a"])(m,d,l,!1,null,null,null)),h=g.exports,v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"wrapper"},[r("div",{staticClass:"flex-col"},[r("img",{staticClass:"flex-col--2",attrs:{src:t.imagePath(t.product),alt:""}}),r("div",{staticClass:"flex-col--2"},[r("h2",[t._v(t._s(t.product.name))]),r("p",[t._v("Price: $"+t._s(t.product.price))]),r("p",[t._v("Size: "+t._s(t.product.size))]),r("p",[t._v("Color: "+t._s(t.product.color))]),r("p",[r("em",[t._v(t._s(t.product.quantity)+" left in stock")])]),r("h3",[t._v("Details")]),r("ul",[r("li",[t._v("Material: "+t._s(t.product.details.material))]),r("li",[t._v("Fit: "+t._s(t.product.details.fit))]),r("li",[t._v("Maintenance: "+t._s(t.product.details.maintenance))]),t.product.details.additional?r("li",[t._v("Additional: "+t._s(t.product.details.additional))]):t._e()])])])])])},b=[],j={name:"product",data:function(){return{product:this.$store.getters.product(this.$route.params.id)}},methods:{imagePath:function(t){return r("3360")("./".concat(t.images[0]))}}},_=j,y=(r("bd21"),Object(o["a"])(_,v,b,!1,null,null,null)),w=y.exports;n["a"].use(p["a"]);var x=new p["a"]({mode:"history",base:"/testarDeploy/",routes:[{path:"/",name:"home",component:h},{path:"/products/:id",name:"product",component:w},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}]}),J=(r("c5f6"),r("2f62"));n["a"].use(J["a"]);var O=new J["a"].Store({state:{cart:[],products:[{name:"Crewneck T-Shirt",id:53362,price:9.5,color:"white",size:"small",gender:"men",quantity:10,dateAdded:"Tue Mar 24 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",category:"Shirts",details:{material:"cotton",fit:"regular",maintenance:"machine wash",additional:"Some colors feature different-colored yarns for a heathered effect."},images:["t-shirt-1.jpg","t-shirt-2.jpg","t-shirt-3.jpg"]},{name:"Cardigan Sweater",id:53363,price:49.5,color:"red",size:"medium",gender:"women",quantity:8,dateAdded:"Mon Mar 23 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",category:"Sweaters",details:{material:"cotton",fit:"regular",maintenance:"machine wash cold, air dry",additional:""},images:["card-1.jpg","card-2.jpg","card-3.jpg","card-4.jpg","card-5.jpg"]},{name:"Slim Fit Jeans",id:53364,price:29.5,color:"navy",size:{waist:32,length:32},gender:"men",quantity:5,dateAdded:"Wed Mar 25 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",category:"Pants",details:{material:"denim",fit:"slim",maintenance:"machine wash cold with like colors, air dry",additional:""},images:["slimJ-1.jpg","slimJ-2.jpg","slimJ-3.jpg","slimJ-4.jpg","slimJ-5.jpg"]}]},mutations:{},actions:{},getters:{product:function(t){return function(e){return t.products.filter(function(t){return t.id===Number(e)})[0]}}}});n["a"].config.productionTip=!1,new n["a"]({router:x,store:O,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("5e27"),i=r.n(n);i.a},"5e27":function(t,e,r){},6743:function(t,e,r){t.exports=r.p+"img/t-shirt-1.3a4a3685.jpg"},"6ad4":function(t,e,r){t.exports=r.p+"img/slimJ-5.860a893f.jpg"},"6b1d":function(t,e,r){t.exports=r.p+"img/t-shirt-2.b6269017.jpg"},"6c5a":function(t,e,r){t.exports=r.p+"img/slimJ-2.c739dc21.jpg"},"73f0":function(t,e,r){t.exports=r.p+"img/card-2.021a70db.jpg"},"96be":function(t,e,r){t.exports=r.p+"img/card-5.9c8ffecc.jpg"},"9ae5":function(t,e,r){t.exports=r.p+"img/card-1.a3a2fed1.jpg"},b29e:function(t,e,r){t.exports=r.p+"img/t-shirt-3.96a0e92f.jpg"},bcc9:function(t,e,r){},bd21:function(t,e,r){"use strict";var n=r("c619"),i=r.n(n);i.a},bdf2:function(t,e,r){t.exports=r.p+"img/slimJ-3.898f5102.jpg"},c619:function(t,e,r){},d461:function(t,e,r){t.exports=r.p+"img/card-4.d6d281e2.jpg"}});
//# sourceMappingURL=app.3c602598.js.map