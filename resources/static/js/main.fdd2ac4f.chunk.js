(this["webpackJsonpentando-mf-template"]=this["webpackJsonpentando-mf-template"]||[]).push([[0],{76:function(t,e){},77:function(t,e){},78:function(t,e,n){},80:function(t,e,n){"use strict";n.r(e);var c=n(26),a=n(27),r=n(28),o=n(30),i=n(31),u=n(29),s=n.n(u),l=n(3),d=n(0),p=n.n(d),m=n(2),f=n(13),h=n(14),b=n(5),j=n.n(b),I="".concat("http://localhost:1337"),g=("".concat("http://localhost:8081/api","/template/searchby/"),"EntKcToken"),O={Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUzNTY0NTIyLCJleHAiOjE2NTYxNTY1MjJ9.3KHp7YqpRXX0NnlxM1w9pWN1di8OC_7mzUZ2UAGlscc")},v=function(){var t=Object(m.a)(p.a.mark((function t(e){var n,c,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.get("".concat("http://localhost:8081/api","/template/"));case 2:return n=t.sent,c=n.data,a=c.filter((function(t){return e.indexOf(t.id+"")>-1})),t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(m.a)(p.a.mark((function t(e,n){var c,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e||n.length||console.error(e),c=n.map((function(t){return"".concat(I,"/content-manager/collection-types/api::").concat(e,".").concat(e,"/").concat(t)})),t.next=4,j.a.all(c.map((function(t){return j.a.get(t,x({},g))})));case 4:return a=t.sent,t.abrupt("return",a.map((function(t){return t.data})));case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),k=function(t){return console.log("ET-Widget",""),t===g?{headers:O}:{}},x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Bearer",n=k(e);return Object(h.a)(Object(h.a)({},t),n)},w=(n(78),n(4)),N=n(55),A="http://localhost:1337";var T=function(t){var e=t.contentName,n=t.contentIdsAndTemplateIds;e=e||"banner",n=n||"%5B%7B%22templateId%22:%2250%22,%22contentId%22:5%7D,%7B%22templateId%22:%2248%22,%22contentId%22:3%7D,%7B%22templateId%22:%2248%22,%22contentId%22:2%7D%5D";var c=Object(l.useState)(null),a=Object(f.a)(c,2),r=(a[0],a[1]),o=Object(l.useState)(decodeURI(n)),i=Object(f.a)(o,2),u=i[0];function s(t,e,n){if(t&&e&&Object.keys(n).length){var c=n.map((function(n){var c=e.filter((function(t){return t.id===n.contentId})),a=t.filter((function(t){return+t.id===+n.templateId}));return a.length&&c[0]&&Object.keys(c[0]).length?(Object.keys(c[0]).map((function(t,e){c[0][t]&&Array.isArray(c[0][t])?c[0][t]&&c[0][t][0]&&c[0][t][0].ext&&c[0][t].map((function(t){return t.url=A+t.url})):c[0][t]&&"object"===typeof c[0][t]&&(c[0][t]&&c[0][t].ext&&"object"===typeof c[0][t]&&(c[0][t].url=A+c[0][t].url),console.log("filterContent[0][key]",c[0][t]))})),N.render(a[0].contentShape,{content:c[0]})):""}));r(c)}}return i[1],Object(l.useEffect)(Object(m.a)(p.a.mark((function t(){var n,c,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length&&JSON.parse(u),t.next=3,v(n.map((function(t){return t.templateId})));case 3:return c=t.sent,t.next=6,y(e,n.map((function(t){return t.contentId})));case 6:a=t.sent,s(c,a,n);case 8:case"end":return t.stop()}}),t)}))),[]),Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("h1",{children:"Test main list page sachin"})})},E={contentName:"contentName",contentIdsAndTemplateIds:"contentIdsAndTemplateIds"},C=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"attributeChangedCallback",value:function(t,e,n){if(!Object.values(E).includes(t))throw new Error("Untracked changed attribute: ".concat(t));this.mountPoint&&n!==e&&this.render()}},{key:"connectedCallback",value:function(){this.mountPoint=document.createElement("div"),this.appendChild(this.mountPoint),this.render()}},{key:"render",value:function(){var t=this.getAttribute(E.contentName),e=this.getAttribute(E.contentIdsAndTemplateIds);console.log("contentName ==>",t,"contentIdsAndTemplateIds ==>",e),s.a.render(Object(w.jsx)(T,{contentName:t,contentIdsAndTemplateIds:e}),this.mountPoint)}}],[{key:"observedAttributes",get:function(){return Object.values(E)}}]),n}(Object(i.a)(HTMLElement));customElements.get("my-list-widget")||customElements.define("my-list-widget",C),console.log("custom list element main",customElements.get("list-content-widget-config")),customElements.upgrade(root)}},[[80,1,2]]]);
//# sourceMappingURL=main.fdd2ac4f.chunk.js.map