(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{10:function(e,t,a){e.exports={loaderWrapper:"loader_loaderWrapper__3_xKf",loader:"loader_loader__YazJ9",loaderDot:"loader_loaderDot__1FfVe","sk-bouncedelay":"loader_sk-bouncedelay__2VauF",loaderDot1:"loader_loaderDot1__3Y6ai",loaderDot2:"loader_loaderDot2__3VQQH"}},15:function(e,t,a){e.exports={header:"header_header__5dKKi",name:"header_name__2B8Fc",nameContainer:"header_nameContainer__xfO5H","name-container__copy":"header_name-container__copy__3dLEi",nav:"header_nav__1v-wG",navLink:"header_navLink__25W0M","nav-list":"header_nav-list__2dQXt"}},16:function(e,t,a){e.exports={projectTitle:"project_projectTitle__24xXC",projectTools:"project_projectTools__1VPvn",projectCreated:"project_projectCreated__2gv9i",projectLink:"project_projectLink__3sbPj"}},19:function(e,t,a){e.exports={contact:"contact_contact__CFDRa",number:"contact_number__Pz7HE"}},20:function(e,t,a){e.exports={description:"home_description__1NY_r",pageHeading:"home_pageHeading__1Alaz",projectTitle:"home_projectTitle__tHnSM"}},24:function(e,t,a){e.exports={text:"text_text__2_T5O",body:"text_body__2kaLC",medium:"text_medium__2cPcW",large:"text_large__2SadT",grey:"text_grey__33qKi",black:"text_black__NMkk_",red:"text_red__1SJhj"}},25:function(e,t,a){e.exports={tiles:"tiles_tiles__1ETOP",tile:"tiles_tile__3fJ0i",isFullWidth:"tiles_isFullWidth__1jeCa"}},28:function(e,t,a){e.exports={link:"link_link__aLkBh"}},38:function(e,t,a){e.exports={errorMessage:"error-message_errorMessage__1kgWG"}},39:function(e,t,a){e.exports={wrapper:"wrapper_wrapper__3_PfG"}},41:function(e,t,a){e.exports={body:"app_body__3Rh5n"}},42:function(e,t,a){e.exports=a(54)},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(21),c=a.n(i),l=a(17),o=a(13),s=a(11),d=a(3),u=a(36),m=a(28),_=a.n(m),E=function(e){var t=e.children,a=e.to,n=e.dataId,i=e.isAnchor,c=e.isExternal;return r.a.createElement("span",{"data-qa":"link","data-id":n},i?r.a.createElement("a",Object.assign({href:a},c&&{target:"_blank",rel:"noopener noreferrer"},{className:_.a.link}),t):r.a.createElement(l.b,{className:_.a.link,to:a},t))};E.defaultProps={dataId:"",isAnchor:!1,isExternal:!1};var p=E,v=a(12),f=a.n(v),h=a(24),g=a.n(h),j=function(e){var t=e.children,a=e.element,n=e.color,i=e.style,c=e.dataId;return r.a.createElement(a,{className:f()(g.a.text,g.a[i],g.a[n]),"data-qa":"text","data-id":c},t)};j.styles={large:"large",medium:"medium",small:"small"},j.elements={p:"p",span:"span",h1:"h1"},j.colors={grey:"grey",black:"black",red:"red"},j.defaultProps={element:j.elements.p,color:j.colors.black,style:j.styles.small,dataId:null};var O=j,C="/",b="/project",T="/contact",y="https://boggon.uk/index.php/wp-json/wp/v2",S=a(15),P=a.n(S),I=function(){return r.a.createElement("header",{className:P.a.header,"data-qa":"header"},r.a.createElement("div",{className:P.a.nameContainer},r.a.createElement("div",{className:P.a.name},r.a.createElement(O,{element:O.elements.span,style:O.styles.large,dataId:"name-link"},r.a.createElement(p,{to:C},"Jessica Mercer"))),r.a.createElement(O,{dataId:"job-description"},"Front End Web Developer")),r.a.createElement("div",{className:P.a.nav},r.a.createElement("div",{className:P.a.navLink},r.a.createElement(O,{element:O.elements.span,dataId:"contact-link"},r.a.createElement(p,{to:T},"Contact")))))},N=a(38),w=a.n(N),x=function(e){var t=e.children;return r.a.createElement("div",{className:w.a.errorMessage,"data-qa":"error-message"},r.a.createElement(O,{color:O.colors.red},t))},H=a(10),R=a.n(H),k=function(){return r.a.createElement("div",{className:R.a.loaderWrapper,"data-qa":"loader"},r.a.createElement("div",{className:R.a.loader},r.a.createElement("div",{className:f()(R.a.loaderDot,R.a.loaderDot1)}),r.a.createElement("div",{className:f()(R.a.loaderDot,R.a.loaderDot2)}),r.a.createElement("div",{className:f()(R.a.loaderDot,R.a.loaderDot3)})))},F=a(39),D=a.n(F),J=function(e){var t=e.children;return r.a.createElement("div",{className:D.a.wrapper,"data-qa":"wrapper"},t)};var A="".concat(y,"/pages?slug=jess-contact&_fields=acf");var M=a(14),q=Object(M.a)((function(e){return null===e||void 0===e?void 0:e.contact}),(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.isInitial,a=void 0!==t&&t,n=e.isPending,r=void 0!==n&&n,i=e.hasError,c=void 0!==i&&i;return{isInitial:a,isPending:r,hasError:c}})),L=function(e){var t,a;return null===e||void 0===e?void 0:null===(t=e.contact)||void 0===t?void 0:null===(a=t.data)||void 0===a?void 0:a.acf},W={getPredicate:q,getSimple:Object(M.a)([function(e){var t;return null===(t=L(e))||void 0===t?void 0:t.description},function(e){var t;return null===(t=L(e))||void 0===t?void 0:t.number},function(e){var t;return null===(t=L(e))||void 0===t?void 0:t.email}],(function(e,t,a){return{description:e,number:t,email:a}}))},z=a(19),U=a.n(z),V=function(){var e=Object(d.b)(),t=Object(d.c)(W.getPredicate),a=t.isInitial,i=t.isPending,c=t.hasError,l=Object(d.c)(W.getSimple),o=l.description,s=l.number,u=l.email;return Object(n.useEffect)((function(){e((function(e){return e({type:"FETCH_CONTACT"}),fetch(A).then((function(e){return e.json()})).then((function(t){return e(function(e){return{type:"FETCH_CONTACT_SUCCESS",data:e}}(t))}),(function(){return e({type:"FETCH_CONTACT_ERROR"})}))}))}),[e]),c?r.a.createElement(x,null,"Oops, something went wrong with loading the contact page."):a||i?r.a.createElement(k,null):r.a.createElement("div",{className:U.a.contact},r.a.createElement(J,null,r.a.createElement("div",{className:U.a.description},r.a.createElement(O,{style:O.styles.large,dataId:"description"},o)),r.a.createElement("div",null,r.a.createElement("div",{className:U.a.number},r.a.createElement(O,{style:O.styles.medium,dataId:"number"},r.a.createElement(p,{to:"tel:".concat(s),isAnchor:!0},s))),r.a.createElement("div",{className:U.a.email},r.a.createElement(O,{style:O.styles.medium,dataId:"email"},r.a.createElement(p,{to:"mailto:"+u,isAnchor:!0},u))))))},K=a(23),X=a(25),B=a.n(X),G=function(e){var t=e.children,a=e.dataId;return r.a.createElement("div",{className:B.a.tile,"data-qa":"tile","data-id":a},t)},Q=function(e){var t=e.children;return r.a.createElement("div",{className:f()(B.a.tiles,Object(K.a)({},B.a.isFullWidth,!Array.isArray(t))),"data-qa":"tiles"},t)};Q.Tile=G,G.defaultProps={dataId:null};var Y=Q,Z=function(e){var t=e.srcSet,a=e.width;return r.a.createElement("source",{srcSet:t,"data-srcset":t,media:"(min-width: ".concat(a,"px)")})},$=function(e){var t=e.src,a=e.alt,n=e.sources,i=e.dataId;return r.a.createElement("picture",{"data-qa":"image","data-id":i},n.map((function(e){var t=e.srcSet,a=e.width;return r.a.createElement(Z,{srcSet:t,width:a,key:t})})),r.a.createElement("img",{src:t,alt:a,"data-src":t}))};$.defaultProps={sources:[],dataId:null};var ee=$;var te="".concat(y,"/pages?slug=jess-home&_fields=acf");var ae=Object(M.a)((function(e){return null===e||void 0===e?void 0:e.home}),(function(e){return{isInitial:e.isInitial,isPending:e.isPending,hasError:e.hasError}})),ne=function(e){var t,a;return null===e||void 0===e?void 0:null===(t=e.home)||void 0===t?void 0:null===(a=t.data)||void 0===a?void 0:a.acf},re={getPredicate:ae,getSimple:Object(M.a)([function(e){var t;return null===(t=ne(e))||void 0===t?void 0:t.description},function(e){var t;return null===(t=ne(e))||void 0===t?void 0:t.heading}],(function(e,t){return{description:e,heading:t}}))};var ie="".concat(y,"/jess_project?_fields=title,acf,slug");function ce(e){return function(t){return t({type:"FETCH_PROJECTS"}),fetch(function(e){return e?"".concat(ie,"&slug=").concat(e):ie}(e)).then((function(e){return e.json()})).then((function(e){return t(function(e){return{type:"FETCH_PROJECTS_SUCCESS",data:e}}(e))}),(function(){return t({type:"FETCH_PROJECTS_ERROR"})}))}}var le=a(20),oe=a.n(le),se=function(){var e=Object(d.b)(),t=Object(d.c)(re.getPredicate),a=t.isInitial,i=t.isPending,c=t.hasError,l=Object(d.c)((function(e){return e.projects})),o=l.isInitial,s=l.isPending,u=l.hasError,m=l.data,_=Object(d.c)(re.getSimple),E=_.description,v=_.heading;return Object(n.useEffect)((function(){e((function(e){return e({type:"FETCH_HOME"}),fetch(te).then((function(e){return e.json()})).then((function(t){return e(function(e){return{type:"FETCH_HOME_SUCCESS",data:e}}(t))}),(function(){return e({type:"FETCH_HOME_ERROR"})}))})),e(ce())}),[e]),Object(n.useEffect)((function(){return function(){e({type:"FETCH_PROJECTS_RESET"})}}),[e]),c||u?r.a.createElement(x,null,"Oops, something went wrong with loading the homepage."):a||i||o||s?r.a.createElement(k,null):r.a.createElement("div",{className:oe.a.home},r.a.createElement(J,null,r.a.createElement("div",{className:oe.a.description},r.a.createElement(O,{style:O.styles.medium,dataId:"description"},E)),r.a.createElement("div",{className:oe.a.pageHeading},r.a.createElement(O,{element:O.elements.h1,style:O.styles.large,dataId:"page-heading"},v)),r.a.createElement(Y,null,m.map((function(e){var t=e.slug,a=e.title,n=e.acf,i=a.rendered;return r.a.createElement(Y.Tile,{key:t,dataId:t},r.a.createElement(p,{to:"".concat(b,"/").concat(t)},r.a.createElement("div",null,r.a.createElement(ee,{src:n.image.sizes.medium_large,alt:i,sources:[{srcSet:n.image.sizes["post-thumbnail"],width:n.image.sizes["medium_large-width"]}]})),r.a.createElement("div",{className:oe.a.projectTitle},r.a.createElement(O,{style:O.styles.medium},i))))})))))},de=a(16),ue=a.n(de),me=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.projects})),a=t.isInitial,i=t.isPending,c=t.hasError,l=t.data,s=Object(o.e)().slug,u=l[0];if(Object(n.useEffect)((function(){e(ce(s))}),[e,s]),Object(n.useEffect)((function(){return function(){e({type:"FETCH_PROJECTS_RESET"})}}),[e]),c||!u&&!a&&!i)return r.a.createElement(x,null,"Oops, something went wrong with loading the project.");if(a||i)return r.a.createElement(k,null);var m=u.title.rendered,_=u.acf,E=_.image,v=_.tools,f=_.created_with,h=_.project_link,g=E.sizes;return r.a.createElement("div",{className:ue.a.project},r.a.createElement(J,null,r.a.createElement(Y,null,r.a.createElement(Y.Tile,null,r.a.createElement("div",{className:ue.a.projectTitle},r.a.createElement(O,{element:O.elements.h1,style:O.styles.large,dataId:"title"},m)),r.a.createElement("div",null,r.a.createElement(ee,{src:g.medium_large,alt:m,sources:[{srcSet:g["1536x1536"],width:g["medium_large-width"]},{srcSet:g["twentytwenty-fullscreen"],width:g["1536x1536-width"]}]})),r.a.createElement("div",{className:ue.a.projectCreated},r.a.createElement(O,{style:O.styles.medium,dataId:"created-width"},"Created with: ",f)),r.a.createElement("div",{className:ue.a.projectTools},r.a.createElement(O,{style:O.styles.medium,dataId:"tools"},"Tools used: ",v)),h&&r.a.createElement("div",{className:ue.a.projectLink},r.a.createElement(O,null,r.a.createElement(p,{to:h.url,isAnchor:!0,isExternal:!0},h.title)))))))},_e=a(40),Ee=a(5),pe={isInitial:!0,isPending:!1,data:[],hasError:!1};var ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.data;switch(a){case"FETCH_HOME":return Object(Ee.a)({},e,{isPending:!0,isInitial:!1});case"FETCH_HOME_SUCCESS":return Object(Ee.a)({},e,{isInitial:!1,isPending:!1,data:n[0]});case"FETCH_HOME_ERROR":return Object(Ee.a)({},e,{isInitial:!1,isPending:!1,hasError:!0});default:return e}},fe={isInitial:!0,isPending:!1,data:[],hasError:!1};var he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.data;switch(a){case"FETCH_PROJECTS":return Object(Ee.a)({},e,{isInitial:!1,isPending:!0});case"FETCH_PROJECTS_SUCCESS":return Object(Ee.a)({},e,{isInitial:!1,isPending:!1,data:n});case"FETCH_PROJECTS_ERROR":return Object(Ee.a)({},e,{isInitial:!1,isPending:!1,hasError:!0});case"FETCH_PROJECTS_RESET":return Object(Ee.a)({},e,{},fe);default:return e}},ge={isInitial:!0,isPending:!1,data:[],hasError:!1};var je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.data;switch(a){case"FETCH_CONTACT":return Object(Ee.a)({},e,{isPending:!0,isInitial:!1});case"FETCH_CONTACT_SUCCESS":return Object(Ee.a)({},e,{isInitial:!1,isPending:!1,data:n[0]});case"FETCH_CONTACT_ERROR":return Object(Ee.a)({},e,{isInitial:!1,isPending:!1,hasError:!0});default:return e}},Oe=Object(s.c)({projects:he,home:ve,contact:je,routing:_e.routerReducer}),Ce=a(41),be=a.n(Ce),Te=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,ye=Object(s.e)(Oe,Te(Object(s.a)(u.a)));c.a.render(r.a.createElement((function(){return r.a.createElement(d.a,{store:ye},r.a.createElement(l.a,null,r.a.createElement("div",{className:be.a.body},r.a.createElement(I,null),r.a.createElement(o.a,{path:C,exact:!0,component:se}),r.a.createElement(o.a,{path:"".concat(b,"/:slug"),component:me}),r.a.createElement(o.a,{path:T,exact:!0,component:V}))))}),null),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.d539c44c.chunk.js.map