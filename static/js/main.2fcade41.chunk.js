(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,function(e,t,a){e.exports={black:"loader_black__2eVUB",white:"loader_white__inqAH",large:"loader_large__1QqVl",small:"loader_small__3be_V",loader:"loader_loader__YazJ9",loaderDot:"loader_loaderDot__1FfVe","sk-bouncedelay":"loader_sk-bouncedelay__2VauF",loaderDot1:"loader_loaderDot1__3Y6ai",loaderDot2:"loader_loaderDot2__3VQQH",loaderWrapper:"loader_loaderWrapper__3_xKf"}},,,,,,,,,function(e,t,a){e.exports={contact:"contact_contact__CFDRa",number:"contact_number__Pz7HE",form:"contact_form__2u0X6",formInput:"contact_formInput__V4XIw"}},,function(e,t,a){e.exports={header:"header_header__5dKKi",name:"header_name__2B8Fc",nameContainer:"header_nameContainer__xfO5H","name-container__copy":"header_name-container__copy__3dLEi",nav:"header_nav__1v-wG",navLink:"header_navLink__25W0M","nav-list":"header_nav-list__2dQXt"}},function(e,t,a){e.exports={button:"button_button__36CJZ",isLoading:"button_isLoading__1UlN_",buttonLoaderWrapper:"button_buttonLoaderWrapper__nCLce",isDisabled:"button_isDisabled__1Wsmj",buttonText:"button_buttonText__JGIrp"}},function(e,t,a){e.exports={projectTitle:"project_projectTitle__24xXC",projectTools:"project_projectTools__1VPvn",projectCreated:"project_projectCreated__2gv9i",projectLink:"project_projectLink__3sbPj"}},,,,function(e,t,a){e.exports={description:"home_description__1NY_r",pageHeading:"home_pageHeading__1Alaz",projectTitle:"home_projectTitle__tHnSM"}},,,function(e,t,a){e.exports={text:"text_text__2_T5O",body:"text_body__2kaLC",medium:"text_medium__2cPcW",large:"text_large__2SadT",grey:"text_grey__33qKi",black:"text_black__NMkk_",red:"text_red__1SJhj"}},function(e,t,a){e.exports={textInput:"text-input_textInput__2DCls",isValid:"text-input_isValid__3qvdz",isInvalid:"text-input_isInvalid__3DoDB"}},function(e,t,a){e.exports={tiles:"tiles_tiles__1ETOP",tile:"tiles_tile__3fJ0i",isFullWidth:"tiles_isFullWidth__1jeCa"}},,,function(e,t,a){e.exports={link:"link_link__aLkBh"}},,,,,,,,,,,function(e,t,a){e.exports={errorMessage:"error-message_errorMessage__1kgWG"}},function(e,t,a){e.exports={textarea:"textarea_textarea__QzUO8"}},function(e,t,a){e.exports={wrapper:"wrapper_wrapper__3_PfG"}},function(e,t,a){e.exports={pageLoaderWrapper:"pageloader_pageLoaderWrapper__2Dpl-"}},,function(e,t,a){e.exports={body:"app_body__3Rh5n"}},function(e,t,a){e.exports=a(59)},,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(23),l=a.n(i),c=a(20),o=a(13),s=a(11),d=a(4),u=a(39),m=a(30),_=a.n(m),p=function(e){var t=e.children,a=e.to,n=e.dataId,i=e.isAnchor,l=e.isExternal;return r.a.createElement("span",{"data-qa":"link","data-id":n},i?r.a.createElement("a",Object.assign({href:a},l&&{target:"_blank",rel:"noopener noreferrer"},{className:_.a.link}),t):r.a.createElement(c.b,{className:_.a.link,to:a},t))};p.defaultProps={dataId:"",isAnchor:!1,isExternal:!1};var E=p,v=a(6),h=a.n(v),g=a(25),f=a.n(g),b=function(e){var t=e.children,a=e.element,n=e.color,i=e.style,l=e.dataId;return r.a.createElement(a,{className:h()(f.a.text,f.a[i],f.a[n]),"data-qa":"text","data-id":l},t)};b.styles={large:"large",medium:"medium",small:"small"},b.elements={p:"p",span:"span",h1:"h1"},b.colors={grey:"grey",black:"black",red:"red",white:"white"},b.defaultProps={element:b.elements.p,color:b.colors.black,style:b.styles.small,dataId:null};var j=b,O="/",y="/project",S="/contact",C="https://boggon.uk/wp-json",P=a(16),w=a.n(P),T=function(){return r.a.createElement("header",{className:w.a.header,"data-qa":"header"},r.a.createElement("div",{className:w.a.nameContainer},r.a.createElement("div",{className:w.a.name},r.a.createElement(j,{element:j.elements.span,style:j.styles.large,dataId:"name-link"},r.a.createElement(E,{to:O},"Jessica Mercer"))),r.a.createElement(j,{dataId:"job-description"},"Front End Web Developer")),r.a.createElement("div",{className:w.a.nav},r.a.createElement("div",{className:w.a.navLink},r.a.createElement(j,{element:j.elements.span,dataId:"contact-link"},r.a.createElement(E,{to:S},"Contact")))))},I=a(33),x=a(19),N=a(41),k=a.n(N),F=function(e){var t=e.children;return r.a.createElement("div",{className:k.a.errorMessage,"data-qa":"error-message"},r.a.createElement(j,{color:j.colors.red},t))},R=a(9),q=a(26),H=a.n(q),D=function(e){var t,a=e.type,n=e.isValid,i=e.isInvalid,l=e.onChange,c=e.name;return r.a.createElement("input",{type:a,"data-qa":"input",className:h()(H.a.textInput,(t={},Object(R.a)(t,H.a.isValid,n),Object(R.a)(t,H.a.isInvalid,i),t)),onChange:l,name:c,id:c})};D.defaultProps={type:(D.types={text:"text",password:"password",email:"email"}).text,isValid:!1,isInvalid:!1};var M=D,L=a(42),J=a.n(L),V=function(e){var t=e.type,a=e.onChange,n=e.name;return r.a.createElement("textarea",{type:t,"data-qa":"textarea-input",className:J.a.textarea,onChange:a,name:n,id:n})};V.defaultProps={type:"text"};var W=V,A=a(43),z=a.n(A),G=function(e){var t=e.children;return r.a.createElement("div",{className:z.a.wrapper,"data-qa":"wrapper"},t)},U=a(5),B=a.n(U),X=function(e){var t=e.color,a=e.style;return r.a.createElement("div",{className:h()(B.a.loaderWrapper),"data-qa":"loader"},r.a.createElement("div",{className:B.a.loader},r.a.createElement("div",{className:h()(B.a.loaderDot,B.a.loaderDot1,B.a[t],B.a[a]),"data-qa":"loader-dot"}),r.a.createElement("div",{className:h()(B.a.loaderDot,B.a.loaderDot2,B.a[t],B.a[a]),"data-qa":"loader-dot"}),r.a.createElement("div",{className:h()(B.a.loaderDot,B.a.loaderDot3,B.a[t],B.a[a]),"data-qa":"loader-dot"})))};X.colors={black:"black",white:"white"},X.styles={large:"large",small:"small"},X.defaultProps={color:X.colors.black,style:X.styles.large};var Q=X,K=a(17),$=a.n(K),Y=function(e){var t,a=e.children,n=e.isDisabled,i=e.isLoading,l=e.type,c=e.onClick;return r.a.createElement("button",{type:l,"data-qa":"button",className:h()($.a.button,(t={},Object(R.a)(t,$.a.isDisabled,n),Object(R.a)(t,$.a.isLoading,i),t)),disabled:n||i,onClick:c},i?r.a.createElement("span",{className:h()($.a.buttonLoaderWrapper),"data-qa":"button-loader-wrapper"},r.a.createElement(Q,{color:Q.colors.white,style:Q.styles.small})):null,r.a.createElement("span",{className:$.a.buttonText,"data-qa":"button-text"},a))};Y.types={submit:"submit",button:"button",reset:"reset"},Y.defaultProps={isDisabled:!1,isLoading:!1,type:"submit",onClick:void 0};var Z=Y,ee=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"This is required";return"string"===typeof e&&e?void 0:t};var te="".concat(C,"/jwt-auth/v1/token"),ae="".concat(C,"/wp/v2/jess_message");var ne=a(12),re={getPredicate:Object(ne.a)((function(e){return null===e||void 0===e?void 0:e.contact}),(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.isInitial,a=void 0!==t&&t,n=e.isPending,r=void 0!==n&&n,i=e.hasError,l=void 0!==i&&i,c=e.isSuccess,o=void 0!==c&&c;return{isInitial:a,isPending:r,hasError:l,isSuccess:o}}))},ie=a(14),le=a.n(ie),ce=function(){var e=Object(d.b)(),t=Object(d.c)(re.getPredicate),a=t.isPending,i=t.hasError,l=t.isSuccess,c=Object(n.useState)(!1),o=Object(I.a)(c,2),s=o[0],u=o[1];return i?r.a.createElement(F,null,"Oops, something went wrong with loading the contact form."):r.a.createElement("div",{className:le.a.contact},r.a.createElement(G,null,!l||s?r.a.createElement(x.b,{onSubmit:function(t){e(function(e){return function(t){t({type:"POST_MESSAGE"});var a=new FormData;return a.append("username","Auth"),a.append("password","MUe4@(Em3SGJ2$5ucnMIJsc5"),fetch(te,{method:"POST",body:a}).then((function(e){return e.json()})).then((function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=a.data,r=(n=void 0===n?{}:n).token;return fetch(ae,{method:"POST",body:JSON.stringify(e),headers:{Authorization:"Bearer ".concat(r),"Content-Type":"application/json",accept:"application/json"}}).then((function(){return t({type:"POST_MESSAGE_SUCCESS"})})).catch((function(){return t({type:"POST_MESSAGE_ERROR"})}))})).catch((function(){return t({type:"POST_MESSAGE_ERROR"})}))}}({title:t.email,status:"publish",fields:t})),u(!1)},render:function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit,className:le.a.form},r.a.createElement("div",{className:le.a.formInput},r.a.createElement(x.a,{name:"name",validate:function(e){return ee(e,"Name is required")}},(function(e){var t=e.meta,a=t.valid,i=t.invalid,l=t.submitFailed,c=e.input,o=c.onChange,s=c.name;return r.a.createElement(n.Fragment,null,r.a.createElement("label",{"data-id":s,htmlFor:s},"Full Name*"),r.a.createElement(M,{isValid:a,isInvalid:i&&l,onChange:o,name:s}))}))),r.a.createElement("div",{className:le.a.formInput},r.a.createElement(x.a,{name:"email",validate:function(e){return ee(e,"Email is required")||function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"This is required",a=/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;return a.test(e)?void 0:t}(e,"Please enter a valid email")}},(function(e){var t=e.meta,a=t.valid,i=t.invalid,l=t.submitFailed,c=e.input,o=c.onChange,s=c.name;return r.a.createElement(n.Fragment,null,r.a.createElement("label",{htmlFor:s,"data-id":s},"Email*"),r.a.createElement(M,{isValid:a,isInvalid:i&&l,onChange:o,name:s,type:M.types.email}))}))),r.a.createElement("div",{className:le.a.formInput},r.a.createElement(x.a,{name:"number",validate:function(e){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"This is required",a=/^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?#(\d{4}|\d{3}))?$/;return a.test(e)?void 0:t}(e,"Please enter a valid number")}},(function(e){var t=e.meta,a=t.valid,i=t.invalid,l=t.submitFailed,c=e.input,o=c.onChange,s=c.name;return r.a.createElement(n.Fragment,null,r.a.createElement("label",{htmlFor:s,"data-id":s},"Number"),r.a.createElement(M,{isValid:a,isInvalid:i&&l,onChange:o,name:s}))}))),r.a.createElement("div",{className:le.a.formInput},r.a.createElement(x.a,{name:"message"},(function(e){var t=e.input,a=t.onChange,i=t.name;return r.a.createElement(n.Fragment,null,r.a.createElement("label",{htmlFor:i,"data-id":i},"Message"),r.a.createElement(W,{onChange:a,name:i}))}))),r.a.createElement(Z,{isDisabled:e.invalid&&e.submitFailed,isLoading:a,type:Z.types.submit},"Submit"),e.invalid&&e.submitFailed&&Object.entries(e.errors).map((function(e){var t=Object(I.a)(e,2),a=t[0],n=t[1];return r.a.createElement("div",{key:a},r.a.createElement(j,{style:j.styles.small,color:j.colors.red,dataId:"error-".concat(a)},n))})))}}):r.a.createElement("div",null,r.a.createElement(j,{style:j.styles.medium,"data-qa":"success-message"},"Thank you for your message."),r.a.createElement(Z,{"data-qa":"success-button",onClick:function(){return u(!0)}},"Send another"))))},oe=a(27),se=a.n(oe),de=function(e){var t=e.children,a=e.dataId;return r.a.createElement("div",{className:se.a.tile,"data-qa":"tile","data-id":a},t)},ue=function(e){var t=e.children;return r.a.createElement("div",{className:h()(se.a.tiles,Object(R.a)({},se.a.isFullWidth,!Array.isArray(t))),"data-qa":"tiles"},t)};ue.Tile=de,de.defaultProps={dataId:null};var me=ue,_e=function(e){var t=e.srcSet,a=e.width;return r.a.createElement("source",{srcSet:t,"data-srcset":t,media:"(min-width: ".concat(a,"px)")})},pe=function(e){var t=e.src,a=e.alt,n=e.sources,i=e.dataId;return r.a.createElement("picture",{"data-qa":"image","data-id":i},n.map((function(e){var t=e.srcSet,a=e.width;return r.a.createElement(_e,{srcSet:t,width:a,key:t})})),r.a.createElement("img",{src:t,alt:a,"data-src":t}))};pe.defaultProps={sources:[],dataId:null};var Ee=pe,ve=a(44),he=a.n(ve),ge=function(){return r.a.createElement("div",{className:he.a.pageLoaderWrapper,"data-qa":"page-loader"},r.a.createElement(Q,null))};var fe="".concat(C,"/wp/v2/pages?slug=jess-home&_fields=acf");var be=Object(ne.a)((function(e){return null===e||void 0===e?void 0:e.home}),(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.isInitial,a=void 0!==t&&t,n=e.isPending,r=void 0!==n&&n,i=e.hasError,l=void 0!==i&&i;return{isInitial:a,isPending:r,hasError:l}})),je=function(e){var t,a;return null===e||void 0===e||null===(t=e.home)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.acf},Oe={getPredicate:be,getSimple:Object(ne.a)([function(e){var t;return null===(t=je(e))||void 0===t?void 0:t.description},function(e){var t;return null===(t=je(e))||void 0===t?void 0:t.heading}],(function(e,t){return{description:e,heading:t}}))},ye={getPredicate:Object(ne.a)((function(e){return null===e||void 0===e?void 0:e.projects}),(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.isInitial,a=void 0!==t&&t,n=e.isPending,r=void 0!==n&&n,i=e.hasError,l=void 0!==i&&i;return{isInitial:a,isPending:r,hasError:l}})),getProjects:Object(ne.a)([function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.projects;return null===t||void 0===t?void 0:t.data}],(function(e){return e}))};var Se="".concat(C,"/wp/v2/jess_project?_fields=title,acf,slug");function Ce(e){return function(t){return t({type:"FETCH_PROJECTS"}),fetch(function(e){return e?"".concat(Se,"&slug=").concat(e):Se}(e)).then((function(e){return e.json()})).then((function(e){return t(function(e){return{type:"FETCH_PROJECTS_SUCCESS",data:e}}(e))}),(function(){return t({type:"FETCH_PROJECTS_ERROR"})}))}}var Pe=a(22),we=a.n(Pe),Te=function(){var e=Object(d.b)(),t=Object(d.c)(Oe.getPredicate),a=t.isInitial,i=t.isPending,l=t.hasError,c=Object(d.c)(ye.getPredicate),o=c.isInitial,s=c.isPending,u=c.hasError,m=Object(d.c)(Oe.getSimple),_=m.description,p=m.heading,v=Object(d.c)(ye.getProjects);return Object(n.useEffect)((function(){e((function(e){return e({type:"FETCH_HOME"}),fetch(fe).then((function(e){return e.json()})).then((function(t){return e(function(e){return{type:"FETCH_HOME_SUCCESS",data:e}}(t))}),(function(){return e({type:"FETCH_HOME_ERROR"})}))})),e(Ce())}),[e]),Object(n.useEffect)((function(){return function(){e({type:"FETCH_PROJECTS_RESET"})}}),[e]),l||u?r.a.createElement(F,null,"Oops, something went wrong with loading the homepage."):a||i||o||s?r.a.createElement(ge,null):r.a.createElement("div",{className:we.a.home},r.a.createElement(G,null,r.a.createElement("div",{className:we.a.description},r.a.createElement(j,{style:j.styles.medium,dataId:"description"},_)),r.a.createElement("div",{className:we.a.pageHeading},r.a.createElement(j,{element:j.elements.h1,style:j.styles.large,dataId:"page-heading"},p)),r.a.createElement(me,null,v.map((function(e){var t=e.slug,a=e.title,n=e.acf,i=a.rendered;return r.a.createElement(me.Tile,{key:t,dataId:t},r.a.createElement(E,{to:"".concat(y,"/").concat(t)},r.a.createElement("div",null,r.a.createElement(Ee,{src:n.image.sizes.medium_large,alt:i,sources:[{srcSet:n.image.sizes["post-thumbnail"],width:n.image.sizes["medium_large-width"]}]})),r.a.createElement("div",{className:we.a.projectTitle},r.a.createElement(j,{style:j.styles.medium},i))))})))))},Ie=a(18),xe=a.n(Ie),Ne=function(){var e=Object(d.b)(),t=Object(d.c)(ye.getPredicate),a=t.isInitial,i=t.isPending,l=t.hasError,c=Object(o.e)().slug,s=Object(d.c)(ye.getProjects);console.log({projects:s});var u=s[0];if(Object(n.useEffect)((function(){e(Ce(c))}),[e,c]),Object(n.useEffect)((function(){return function(){e({type:"FETCH_PROJECTS_RESET"})}}),[e]),l||!u&&!a&&!i)return r.a.createElement(F,null,"Oops, something went wrong with loading the project.");if(a||i)return r.a.createElement(ge,null);var m=u.title.rendered,_=u.acf,p=_.image,v=_.tools,h=_.created_with,g=_.project_link,f=p.sizes;return r.a.createElement("div",{className:xe.a.project},r.a.createElement(G,null,r.a.createElement(me,null,r.a.createElement(me.Tile,null,r.a.createElement("div",{className:xe.a.projectTitle},r.a.createElement(j,{element:j.elements.h1,style:j.styles.large,dataId:"title"},m)),r.a.createElement("div",null,r.a.createElement(Ee,{src:f.medium_large,alt:m,sources:[{srcSet:f["1536x1536"],width:f["medium_large-width"]},{srcSet:f["twentytwenty-fullscreen"],width:f["1536x1536-width"]}]})),r.a.createElement("div",{className:xe.a.projectCreated},r.a.createElement(j,{style:j.styles.medium,dataId:"created-width"},"Created with: ",h)),r.a.createElement("div",{className:xe.a.projectTools},r.a.createElement(j,{style:j.styles.medium,dataId:"tools"},"Tools used: ",v)),g&&r.a.createElement("div",{className:xe.a.projectLink},r.a.createElement(j,null,r.a.createElement(E,{to:g.url,isAnchor:!0,isExternal:!0},g.title)))))))},ke=a(45),Fe=a(2),Re={isInitial:!0,isPending:!1,data:[],hasError:!1};var qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.data;switch(a){case"FETCH_HOME":return Object(Fe.a)(Object(Fe.a)({},e),{},{isPending:!0,isInitial:!1});case"FETCH_HOME_SUCCESS":return Object(Fe.a)(Object(Fe.a)({},e),{},{isInitial:!1,isPending:!1,data:n[0]});case"FETCH_HOME_ERROR":return Object(Fe.a)(Object(Fe.a)({},e),{},{isInitial:!1,isPending:!1,hasError:!0});default:return e}},He={isInitial:!0,isPending:!1,data:[],hasError:!1};var De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.data;switch(a){case"FETCH_PROJECTS":return Object(Fe.a)(Object(Fe.a)({},e),{},{isInitial:!1,isPending:!0});case"FETCH_PROJECTS_SUCCESS":return Object(Fe.a)(Object(Fe.a)({},e),{},{isInitial:!1,isPending:!1,data:n});case"FETCH_PROJECTS_ERROR":return Object(Fe.a)(Object(Fe.a)({},e),{},{isInitial:!1,isPending:!1,hasError:!0});case"FETCH_PROJECTS_RESET":return Object(Fe.a)(Object(Fe.a)({},e),He);default:return e}},Me={isInitial:!0,isPending:!1,hasError:!1,isSuccess:!1};var Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0,a=t.type;switch(a){case"POST_MESSAGE":return Object(Fe.a)(Object(Fe.a)({},e),{},{isPending:!0,isInitial:!1});case"POST_MESSAGE_SUCCESS":return Object(Fe.a)(Object(Fe.a)({},e),{},{isInitial:!1,isPending:!1,isSuccess:!0});case"POST_MESSAGE_ERROR":return Object(Fe.a)(Object(Fe.a)({},e),{},{isInitial:!1,isPending:!1,hasError:!0});default:return e}},Je=Object(s.c)({projects:De,home:qe,contact:Le,routing:ke.routerReducer}),Ve=a(46),We=a.n(Ve),Ae=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,ze=Object(s.e)(Je,Ae(Object(s.a)(u.a))),Ge=function(){return r.a.createElement(d.a,{store:ze},r.a.createElement(c.a,null,r.a.createElement("div",{className:We.a.body},r.a.createElement(T,null),r.a.createElement(o.a,{path:O,exact:!0,component:Te}),r.a.createElement(o.a,{path:"".concat(y,"/:slug"),component:Ne}),r.a.createElement(o.a,{path:S,exact:!0,component:ce}))))};l.a.render(r.a.createElement(Ge,null),document.getElementById("root"))}],[[47,1,2]]]);
//# sourceMappingURL=main.2fcade41.chunk.js.map