(function(e){function t(t){for(var c,o,u=t[0],i=t[1],s=t[2],b=0,l=[];b<u.length;b++)o=u[b],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&l.push(r[o][0]),r[o]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);v&&v(t);while(l.length)l.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,u=1;u<n.length;u++){var i=n[u];0!==r[i]&&(c=!1)}c&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var c={},r={app:0},a=[];function o(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=c,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var v=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0b77":function(e,t,n){},"0ea6":function(e,t,n){},2568:function(e,t,n){},"47a0":function(e,t,n){"use strict";n("0ea6")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),r={class:"app"},a={id:"nav"},o=Object(c["f"])("Events"),u=Object(c["f"])(" | "),i=Object(c["f"])("About");function s(e,t){var n=Object(c["w"])("router-link"),s=Object(c["w"])("router-view");return Object(c["p"])(),Object(c["d"])("div",r,[Object(c["g"])("div",a,[Object(c["g"])(n,{to:{name:"EventList"}},{default:Object(c["B"])((function(){return[o]})),_:1}),u,Object(c["g"])(n,{to:{name:"About"}},{default:Object(c["B"])((function(){return[i]})),_:1})]),Object(c["g"])(s)])}n("e549");const v={};v.render=s;var b=v,l=n("6c02"),d=Object(c["C"])("data-v-49895cee");Object(c["s"])("data-v-49895cee");var p={class:"events"},f=Object(c["g"])("h1",null,"Events for Good",-1);Object(c["q"])();var j=d((function(e,t,n,r,a,o){var u=Object(c["w"])("EventCard");return Object(c["p"])(),Object(c["d"])("div",p,[f,(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(a.events,(function(e){return Object(c["p"])(),Object(c["d"])(u,{key:e.id,event:e},null,8,["event"])})),128))])})),O=Object(c["C"])("data-v-9ad67118");Object(c["s"])("data-v-9ad67118");var h={class:"event-card"};Object(c["q"])();var g=O((function(e,t,n,r,a,o){var u=Object(c["w"])("router-link");return Object(c["p"])(),Object(c["d"])(u,{class:"event-link",to:{name:"EventDetails",params:{id:n.event.id}}},{default:O((function(){return[Object(c["g"])("div",h,[Object(c["g"])("span",null,"@"+Object(c["y"])(n.event.time)+" on "+Object(c["y"])(n.event.date),1),Object(c["g"])("h4",null,Object(c["y"])(n.event.title),1)])]})),_:1},8,["to"])})),y={name:"EventCard",props:{event:Object}};n("47a0");y.render=g,y.__scopeId="data-v-9ad67118";var m=y,w=n("bc3a"),E=n.n(w),_=E.a.create({baseURL:"https://my-json-server.typicode.com/elvisximenes/test-db/",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),k={getEvents:function(){return _.get("/events")},getEvent:function(e){return _.get("/events/"+e)}},x={name:"Home",data:function(){return{events:null}},components:{EventCard:m},created:function(){var e=this;k.getEvents().then((function(t){e.events=t.data})).catch((function(e){console.log(e)}))}};n("a417");x.render=j,x.__scopeId="data-v-49895cee";var C=x,P=(n("a4d3"),n("e01a"),{key:0});function S(e,t,n,r,a,o){return a.event?(Object(c["p"])(),Object(c["d"])("div",P,[Object(c["g"])("h4",null,Object(c["y"])(a.event.title),1),Object(c["g"])("p",null,"@"+Object(c["y"])(a.event.time)+" on "+Object(c["y"])(a.event.date),1),Object(c["g"])("p",null,Object(c["y"])(a.event.description),1)])):Object(c["e"])("",!0)}var A={name:"EventDetails",data:function(){return{event:null}},props:["id"],created:function(){var e=this;k.getEvent(this.id).then((function(t){e.event=t.data})).catch((function(e){console.log(e)}))}};A.render=S;var M=A,T={class:"about"},D=Object(c["g"])("h1",null,"This is an about page",-1);function L(e,t){return Object(c["p"])(),Object(c["d"])("div",T,[D])}const q={};q.render=L;var B=q,I=[{path:"/",name:"EventList",component:C},{path:"/about",name:"About",component:B},{path:"/event/:id",name:"EventDetails",props:!0,component:M}],J=Object(l["a"])({history:Object(l["b"])("/"),routes:I}),G=J,H=n("5502"),R=Object(H["a"])({state:{},mutations:{},actions:{},modules:{}});Object(c["c"])(b).use(R).use(G).mount("#app")},a417:function(e,t,n){"use strict";n("2568")},e549:function(e,t,n){"use strict";n("0b77")}});
//# sourceMappingURL=app.8ff50c93.js.map