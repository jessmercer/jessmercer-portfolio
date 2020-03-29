(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{40:function(e,t,a){e.exports=a(68)},56:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),l=a.n(c),i=a(18),s=a(9),o=a(8),d=a(12),m=a(35),u=a(17),E=(a(56),function(e){var t=e.children,a=e.to,n=e.dataId;return r.a.createElement("span",{"data-qa":"link","data-id":n},r.a.createElement(i.b,{className:"link",to:a},t))});E.defaultProps={dataId:""};var p=E,f=a(37),h=a.n(f),v=(a(58),function(e){var t=e.children,a=e.element,n=e.color,c=e.style,l=e.dataId;return r.a.createElement(a,{className:h()("text",c,n),"data-qa":"text","data-id":l},t)});v.styles={large:"large",medium:"medium",small:"small"},v.elements={p:"p",span:"span",h1:"h1"},v.colors={grey:"grey",black:"black",red:"red"},v.defaultProps={element:v.elements.p,color:v.colors.black,style:v.styles.small,dataId:null};var g=v,_="/",O="/project",b="/contact",w="https://cors-anywhere.herokuapp.com/",j=(a(59),function(){return r.a.createElement("header",{className:"header","data-qa":"header"},r.a.createElement("div",{className:"name-container"},r.a.createElement("div",{className:"name"},r.a.createElement(g,{element:g.elements.span,style:g.styles.large,dataId:"name-link"},r.a.createElement(p,{to:_},"Jessica Mercer"))),r.a.createElement(g,{dataId:"job-description"},"Front End Web Developer")),r.a.createElement("div",{className:"nav"},r.a.createElement("div",{className:"nav__link"},r.a.createElement(g,{element:g.elements.span,dataId:"projects-link"},r.a.createElement(u.Link,{to:"projects",smooth:!0},"Projects"))),r.a.createElement("div",{className:"nav__link"},r.a.createElement(g,{element:g.elements.span,dataId:"contact-link"},r.a.createElement(p,{to:b},"Contact")))))}),C=a(39),y=(a(60),function(e){var t=e.children,a=e.dataId;return r.a.createElement("div",{className:"tile","data-qa":"tile","data-id":a},t)}),S=function(e){var t=e.children;return r.a.createElement("div",{className:"tiles","data-qa":"tiles"},t)};S.Tile=y,y.defaultProps={dataId:null};var I=S,N=function(e){var t=e.src,a=e.alt,n=e.sources,c=e.dataId;return r.a.createElement("picture",{"data-qa":"image","data-id":c},n.map((function(e){var t=e.srcSet,a=e.width;return r.a.createElement("source",{srcSet:t,media:"(min-width: ".concat(a,"px)"),key:t})})),r.a.createElement("img",{src:t,alt:a}))};N.defaultProps={sources:[],dataId:null};var P=N,R=(a(61),function(){return r.a.createElement("div",{className:"loader-wrapper","data-qa":"loader"},r.a.createElement("div",{className:"loader"},r.a.createElement("div",{className:"loader-dot loader-dot--1"}),r.a.createElement("div",{className:"loader-dot loader-dot--2"}),r.a.createElement("div",{className:"loader-dot loader-dot--3"})))}),T=(a(62),function(e){var t=e.children;return r.a.createElement("div",{className:"error-message","data-qa":"error"},r.a.createElement(g,{color:g.colors.red},t))}),k=(a(63),function(e){var t=e.children;return r.a.createElement("div",{className:"wrapper","data-qa":"wrapper"},t)});var H="".concat(w,"http://www.boggonbone.co.uk/api/wp-json/wp/v2/pages?slug=home&_fields=acf");var F="".concat(w,"http://www.boggonbone.co.uk/api/wp-json/wp/v2/project?_fields=title,acf,slug");a(64);var q=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.home})),a=t.isInitial,c=t.isPending,l=t.hasError,i=t.data,s=Object(d.c)((function(e){return e.projects})),o=s.isInitial,m=s.isPending,E=s.hasError,f=s.data;Object(n.useEffect)((function(){e((function(e){return e({type:"FETCH_HOME"}),fetch(H).then((function(e){return e.json()})).then((function(t){return e(function(e){return{type:"FETCH_HOME_SUCCESS",data:e}}(t))}),(function(){return e({type:"FETCH_HOME_ERROR"})}))})),e((function(e){return e({type:"FETCH_PROJECTS"}),fetch(F).then((function(e){return e.json()})).then((function(t){return e(function(e){return{type:"FETCH_PROJECTS_SUCCESS",data:e}}(t))}),(function(){return e({type:"FETCH_PROJECTS_ERROR"})}))}))}),[]);var h=Object(n.useState)(""),v=Object(C.a)(h,2),_=v[0],b=v[1];return Object(n.useEffect)((function(){var e;(e=w+"http://www.boggonbone.co.uk/api/wp-content/uploads/2020/03/test_image_2-scaled.jpeg",fetch(e).then((function(e){return e.blob()})).then((function(e){return new Promise((function(t,a){var n=new FileReader;n.onloadend=function(){return t(n.result)},n.onerror=a,n.readAsDataURL(e)}))}))).then((function(e){return b(e)}))}),[_]),a||c||o||m?r.a.createElement(R,null):l||E?r.a.createElement(T,null,"Oops, something went wrong with loading the homepage."):r.a.createElement("div",{className:"home"},r.a.createElement(k,null,r.a.createElement("div",{className:"description"},r.a.createElement(g,{style:g.styles.medium},i.acf.description)),r.a.createElement(u.Element,{name:"projects",className:"page-heading"},r.a.createElement(g,{element:g.elements.h1,style:g.styles.large},i.acf.heading)),r.a.createElement(I,null,f.map((function(e){var t=e.slug,a=e.title,n=e.acf,c=a.rendered;return r.a.createElement(I.Tile,{key:c},r.a.createElement(p,{to:"".concat(O,"/").concat(t)},r.a.createElement("div",{className:"project__img"},r.a.createElement(P,{src:_}),r.a.createElement(P,{src:n.image.sizes.medium_large,alt:c,sources:[{srcSet:n.image.sizes["1536x1536"],width:n.image.sizes["1536x1536-width"]}]})),r.a.createElement("div",{className:"project__title"},r.a.createElement(g,{style:g.styles.medium},c))))})))))},J=a(38),x=a(10),M={isInitial:!0,isPending:!1,data:[],hasError:!1};var U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.data;switch(a){case"FETCH_HOME":return Object(x.a)({},e,{isPending:!0,isInitial:!1});case"FETCH_HOME_SUCCESS":return Object(x.a)({},e,{isInitial:!1,isPending:!1,data:n[0]});case"FETCH_HOME_ERROR":return Object(x.a)({},e,{isInitial:!1,isPending:!1,hasError:!0});default:return e}},D={isInitial:!0,isPending:!1,data:[],hasError:!1};var z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.data;switch(a){case"FETCH_PROJECTS":return Object(x.a)({},e,{isInitial:!1,isPending:!0});case"FETCH_PROJECTS_SUCCESS":return Object(x.a)({},e,{isInitial:!1,isPending:!1,data:n});case"FETCH_PROJECTS_ERROR":return Object(x.a)({},e,{isInitial:!1,isPending:!1,hasError:!0});default:return e}},L=Object(o.c)({projects:z,home:U,routing:J.routerReducer}),X=(a(67),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d),A=Object(o.e)(L,X(Object(o.a)(m.a)));l.a.render(r.a.createElement((function(){return r.a.createElement(d.a,{store:A},r.a.createElement(i.a,null,r.a.createElement(j,null),r.a.createElement(s.a,{path:_,exact:!0,component:q}),r.a.createElement(s.a,{path:"".concat(O,"/:slug"),component:q}),r.a.createElement(s.a,{path:b,exact:!0,component:function(){return r.a.createElement("div",null,"contact test")}})))}),null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.d2cb0549.chunk.js.map