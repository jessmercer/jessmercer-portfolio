(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{17:function(e,t,a){e.exports={contact:"contact_contact__CFDRa",number:"contact_number__Pz7HE",form:"contact_form__2u0X6",formInput:"contact_formInput__V4XIw"}},20:function(e,t,a){e.exports={header:"header_header__5dKKi",name:"header_name__2B8Fc",nameContainer:"header_nameContainer__xfO5H","name-container__copy":"header_name-container__copy__3dLEi",nav:"header_nav__1v-wG",navLink:"header_navLink__25W0M","nav-list":"header_nav-list__2dQXt"}},21:function(e,t,a){e.exports={button:"button_button__36CJZ",isLoading:"button_isLoading__1UlN_",buttonLoaderWrapper:"button_buttonLoaderWrapper__nCLce",isDisabled:"button_isDisabled__1Wsmj",buttonText:"button_buttonText__JGIrp"}},22:function(e,t,a){e.exports={projectTitle:"project_projectTitle__24xXC",projectTools:"project_projectTools__1VPvn",projectCreated:"project_projectCreated__2gv9i",projectLink:"project_projectLink__3sbPj"}},32:function(e,t,a){e.exports={text:"text_text__2_T5O",body:"text_body__2kaLC",medium:"text_medium__2cPcW",large:"text_large__2SadT",grey:"text_grey__33qKi",black:"text_black__NMkk_",red:"text_red__1SJhj"}},33:function(e,t,a){e.exports={textInput:"text-input_textInput__2DCls",isValid:"text-input_isValid__3qvdz",isInvalid:"text-input_isInvalid__3DoDB"}},34:function(e,t,a){e.exports={tiles:"tiles_tiles__1ETOP",tile:"tiles_tile__3fJ0i",isFullWidth:"tiles_isFullWidth__1jeCa"}},35:function(e,t,a){e.exports={description:"home_description__1NY_r",pageHeading:"home_pageHeading__1Alaz",projectTitle:"home_projectTitle__tHnSM"}},37:function(e,t,a){e.exports={link:"link_link__aLkBh"}},53:function(e,t,a){e.exports={errorMessage:"error-message_errorMessage__1kgWG"}},54:function(e,t,a){e.exports={textarea:"textarea_textarea__QzUO8"}},55:function(e,t,a){e.exports={wrapper:"wrapper_wrapper__3_PfG"}},56:function(e,t,a){e.exports={pageLoaderWrapper:"pageloader_pageLoaderWrapper__2Dpl-"}},57:function(e,t,a){e.exports={body:"app_body__3Rh5n"}},8:function(e,t,a){e.exports={black:"loader_black__2eVUB",white:"loader_white__inqAH",large:"loader_large__1QqVl",small:"loader_small__3be_V",loader:"loader_loader__YazJ9",loaderDot:"loader_loaderDot__1FfVe","sk-bouncedelay":"loader_sk-bouncedelay__2VauF",loaderDot1:"loader_loaderDot1__3Y6ai",loaderDot2:"loader_loaderDot2__3VQQH",loaderWrapper:"loader_loaderWrapper__3_xKf",text:"loader_text__1Jmt8"}},86:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(51),s=a.n(r),i=a(25),c=a(6),l=a(88),o=a(30),d=a(16),j=a(37),u=a.n(j),h=a(0),p=function(e){var t=e.children,a=e.to,n=e.isAnchor,r=e.isExternal;return Object(h.jsx)("span",{children:n?Object(h.jsx)("a",Object(d.a)(Object(d.a)({href:a},r&&{target:"_blank",rel:"noopener noreferrer"}),{},{className:u.a.link,children:t})):Object(h.jsx)(i.b,{className:u.a.link,to:a,children:t})})};p.defaultProps={isAnchor:!1,isExternal:!1};var m=p,b=a(11),_=a.n(b),x=a(32),v=a.n(x),O=function(e){var t=e.children,a=e.element,n=e.color,r=e.style;return Object(h.jsx)(a,{className:_()(v.a.text,v.a[r],v.a[n]),children:t})};O.styles={large:"large",medium:"medium",small:"small"},O.elements={p:"p",span:"span",h1:"h1"},O.colors={grey:"grey",black:"black",red:"red",white:"white"},O.defaultProps={element:O.elements.p,color:O.colors.black,style:O.styles.small};var g=O,f="/",y="/project",w="/contact",N="https://boggon.uk/wp-json",k=a(20),C=a.n(k),F=function(){return Object(h.jsxs)("header",{className:C.a.header,children:[Object(h.jsxs)("div",{className:C.a.nameContainer,children:[Object(h.jsx)("div",{className:C.a.name,children:Object(h.jsx)(g,{element:g.elements.span,style:g.styles.large,children:Object(h.jsx)(m,{to:f,children:"Jessica Mercer"})})}),Object(h.jsx)(g,{children:"Front End Web Developer"})]}),Object(h.jsx)("div",{className:C.a.nav,children:Object(h.jsx)("div",{className:C.a.navLink,children:Object(h.jsx)(g,{element:g.elements.span,children:Object(h.jsx)(m,{to:w,children:"Contact"})})})})]})},D=a(40),L=a(23),T=a(53),I=a.n(T),S=function(e){var t=e.children;return Object(h.jsx)("div",{className:I.a.errorMessage,children:Object(h.jsx)(g,{color:g.colors.red,children:t})})},E=a(13),W=a(33),P=a.n(W),V=function(e){var t,a=e.type,n=e.isValid,r=e.isInvalid,s=e.onChange,i=e.name;return Object(h.jsx)("input",{type:a,className:_()(P.a.textInput,(t={},Object(E.a)(t,P.a.isValid,n),Object(E.a)(t,P.a.isInvalid,r),t)),onChange:s,name:i,id:i,"aria-label":i})};V.defaultProps={type:(V.types={text:"text",password:"password",email:"email"}).text,isValid:!1,isInvalid:!1};var q=V,z=a(54),J=a.n(z),M=function(e){var t=e.type,a=e.onChange,n=e.name;return Object(h.jsx)("textarea",{type:t,className:J.a.textarea,onChange:a,name:n,id:n})};M.defaultProps={type:"text"};var A=M,K=a(55),H=a.n(K),B=function(e){var t=e.children;return Object(h.jsx)("div",{className:H.a.wrapper,children:t})},Q=a(8),G=a.n(Q),U=function(e){var t=e.color,a=e.style;return Object(h.jsxs)("div",{className:_()(G.a.loaderWrapper),children:[Object(h.jsxs)("div",{className:G.a.loader,children:[Object(h.jsx)("div",{className:_()(G.a.loaderDot,G.a.loaderDot1,G.a[t],G.a[a])}),Object(h.jsx)("div",{className:_()(G.a.loaderDot,G.a.loaderDot2,G.a[t],G.a[a])}),Object(h.jsx)("div",{className:_()(G.a.loaderDot,G.a.loaderDot3,G.a[t],G.a[a])})]}),Object(h.jsx)("span",{className:G.a.text,children:"Loading"})]})};U.colors={black:"black",white:"white"},U.styles={large:"large",small:"small"},U.defaultProps={color:U.colors.black,style:U.styles.large};var X=U,$=a(21),Y=a.n($),R=function(e){var t,a=e.children,n=e.isDisabled,r=e.isLoading,s=e.type,i=e.onClick;return Object(h.jsxs)("button",{type:s,className:_()(Y.a.button,(t={},Object(E.a)(t,Y.a.isDisabled,n),Object(E.a)(t,Y.a.isLoading,r),t)),disabled:n||r,onClick:i,children:[r?Object(h.jsx)("span",{className:Y.a.buttonLoaderWrapper,children:Object(h.jsx)(X,{color:X.colors.white,style:X.styles.small})}):null,Object(h.jsx)("span",{className:Y.a.buttonText,children:a})]})};R.types={submit:"submit",button:"button",reset:"reset"},R.defaultProps={isDisabled:!1,isLoading:!1,type:"submit",onClick:void 0};var Z=R,ee=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"This is required";return"string"===typeof e&&e?void 0:t},te=a(90),ae=a(26),ne=a.n(ae),re={endpoint:"".concat(N,"/jwt-auth/v1/token")},se=["post","put","patch"],ie={contact:{queryKey:"contact",endpoint:"".concat(N,"/wp/v2/jess_message")}},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.method,n=void 0===a?"post":a,r=t.useMutationOptions,s=e.queryKey,i=e.endpoint;if(!se.includes(n.toLowerCase()))throw Error("".concat(n," is not an accepted method"));if(!s)throw Error("The query key does not exist");return Object(te.a)((function(e){var t=new FormData;return t.append("username","Auth"),t.append("password","MUe4@(Em3SGJ2$5ucnMIJsc5"),ne.a.post(re.endpoint,t).then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.data,r=(a=void 0===a?{}:a).data,s=(r=void 0===r?{}:r).token;return ne.a[n](i,JSON.stringify(e),{headers:{Authorization:"Bearer ".concat(s),"Content-Type":"application/json",accept:"application/json"}}).then((function(e){return e.data}))}))}),r)},le=a(17),oe=a.n(le),de=function(){var e=ce(ie.contact),t=Object(n.useState)(!1),a=Object(D.a)(t,2),r=a[0],s=a[1];return e.isError?Object(h.jsx)(S,{children:"Oops, something went wrong with loading the contact form."}):Object(h.jsx)("div",{className:oe.a.contact,children:Object(h.jsx)(B,{children:!e.isSuccess||r?Object(h.jsx)(L.b,{onSubmit:function(t){e.mutate({title:t.email,status:"publish",fields:t}),s(!1)},render:function(t){return Object(h.jsxs)("form",{onSubmit:t.handleSubmit,className:oe.a.form,children:[Object(h.jsx)("div",{className:oe.a.formInput,children:Object(h.jsx)(L.a,{name:"name",validate:function(e){return ee(e,"Name is required")},children:function(e){var t=e.meta,a=t.valid,r=t.invalid,s=t.submitFailed,i=t.pristine,c=e.input,l=c.onChange,o=c.name;return Object(h.jsxs)(n.Fragment,{children:[Object(h.jsx)("label",{htmlFor:o,children:"Full Name*"}),Object(h.jsx)(q,{isValid:a&&!i,isInvalid:r&&s,onChange:l,name:o})]})}})}),Object(h.jsx)("div",{className:oe.a.formInput,children:Object(h.jsx)(L.a,{name:"email",validate:function(e){return ee(e,"Email is required")||function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Please enter a valid email address";return/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i.test(e)?void 0:t}(e,"Please enter a valid email")},children:function(e){var t=e.meta,a=t.valid,r=t.invalid,s=t.submitFailed,i=t.pristine,c=e.input,l=c.onChange,o=c.name;return Object(h.jsxs)(n.Fragment,{children:[Object(h.jsx)("label",{htmlFor:o,children:"Email*"}),Object(h.jsx)(q,{isValid:a&&!i,isInvalid:r&&s,onChange:l,name:o,type:q.types.email})]})}})}),Object(h.jsx)("div",{className:oe.a.formInput,children:Object(h.jsx)(L.a,{name:"number",validate:function(e){if(e)return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"This is not a valid number";return/^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?#(\d{4}|\d{3}))?$/.test(e)?void 0:t}(e,"Please enter a valid number")},children:function(e){var t=e.meta,a=t.valid,r=t.invalid,s=t.submitFailed,i=t.pristine,c=e.input,l=c.onChange,o=c.name;return Object(h.jsxs)(n.Fragment,{children:[Object(h.jsx)("label",{htmlFor:o,children:"Number"}),Object(h.jsx)(q,{isValid:a&&!i,isInvalid:r&&s,onChange:l,name:o})]})}})}),Object(h.jsx)("div",{className:oe.a.formInput,children:Object(h.jsx)(L.a,{name:"message",children:function(e){var t=e.input,a=t.onChange,r=t.name;return Object(h.jsxs)(n.Fragment,{children:[Object(h.jsx)("label",{htmlFor:r,children:"Message"}),Object(h.jsx)(A,{onChange:a,name:r})]})}})}),Object(h.jsx)(Z,{isDisabled:t.invalid&&t.submitFailed,isLoading:e.isLoading,type:Z.types.submit,children:"Submit"}),t.invalid&&t.submitFailed&&Object.entries(t.errors).map((function(e){var t=Object(D.a)(e,2),a=t[0],n=t[1];return Object(h.jsx)("div",{children:Object(h.jsx)(g,{style:g.styles.small,color:g.colors.red,children:n})},a)}))]})}}):Object(h.jsxs)("div",{children:[Object(h.jsx)(g,{style:g.styles.medium,children:"Thank you for your message."}),Object(h.jsx)(Z,{onClick:function(){return s(!0)},children:"Send another"})]})})})},je=a(34),ue=a.n(je),he=function(e){var t=e.children;return Object(h.jsx)("div",{className:_()(ue.a.tiles,Object(E.a)({},ue.a.isFullWidth,!Array.isArray(t))),children:t})};he.Tile=function(e){var t=e.children;return Object(h.jsx)("div",{className:ue.a.tile,children:t})};var pe=he,me=function(e){var t=e.srcSet,a=e.width;return Object(h.jsx)("source",{srcSet:t,"data-testid":t,media:"(min-width: ".concat(a,"px)")})},be=function(e){var t=e.src,a=e.alt,n=e.sources;return Object(h.jsxs)("picture",{children:[n.map((function(e){var t=e.srcSet,a=e.width;return Object(h.jsx)(me,{srcSet:t,width:a},t)})),Object(h.jsx)("img",{src:t,alt:a,"data-src":t})]})};be.defaultProps={sources:[]};var _e=be,xe=a(56),ve=a.n(xe),Oe=function(){return Object(h.jsx)("div",{className:ve.a.pageLoaderWrapper,children:Object(h.jsx)(X,{})})},ge=function(e){var t;return null===e||void 0===e||null===(t=e[0])||void 0===t?void 0:t.acf},fe=function(e){var t,a;return{description:null===(t=ge(e))||void 0===t?void 0:t.description,heading:null===(a=ge(e))||void 0===a?void 0:a.heading}},ye=a(89),we={home:{queryKey:"home",endpoint:"".concat(N,"/wp/v2/pages"),params:{slug:"jess-home",_fields:"acf"}},projects:{queryKey:"projects",endpoint:"".concat(N,"/wp/v2/jess_project"),params:{_fields:"title,acf,slug"}}},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.useQueryOptions,n=t.options,r=void 0===n?{}:n,s=e.queryKey,i=e.endpoint,c=e.params;if(!s)throw Error("The query key does not exist");return Object(ye.a)(s,(function(){return ne.a.get(i,{params:Object(d.a)(Object(d.a)({},c),r.params)}).then((function(e){return e.data}))}),Object(d.a)({refetchOnWindowFocus:!1,retry:0},a))},ke=a(35),Ce=a.n(ke),Fe=function(){var e=Ne(we.home),t=Ne(we.projects),a=t.data||[],n=fe(e.data),r=n.description,s=n.heading;return e.isError||t.isError?Object(h.jsx)(S,{children:"Oops, something went wrong with loading the homepage."}):e.isFetching||t.isFetching?Object(h.jsx)(Oe,{}):Object(h.jsxs)(B,{children:[Object(h.jsx)("div",{className:Ce.a.description,children:Object(h.jsx)(g,{style:g.styles.medium,children:r})}),Object(h.jsx)("div",{className:Ce.a.pageHeading,children:Object(h.jsx)(g,{element:g.elements.h1,style:g.styles.large,children:s})}),Object(h.jsx)(pe,{children:a.map((function(e){var t=e.slug,a=e.title,n=e.acf,r=a.rendered;return Object(h.jsx)(pe.Tile,{children:Object(h.jsxs)(m,{to:"".concat(y,"/").concat(t),children:[Object(h.jsx)("div",{children:Object(h.jsx)(_e,{src:n.image.sizes.medium_large,alt:r,sources:[{srcSet:n.image.sizes["post-thumbnail"],width:n.image.sizes["medium_large-width"]}]})}),Object(h.jsx)("div",{className:Ce.a.projectTitle,children:Object(h.jsx)(g,{style:g.styles.medium,children:r})})]})},t)}))})]})},De=a(22),Le=a.n(De),Te=function(){var e,t=Object(c.e)(),a=Ne(we.projects,{options:{params:{slug:t.slug}}}),n=null===a||void 0===a||null===(e=a.data)||void 0===e?void 0:e[0];if(a.isFetching)return Object(h.jsx)(Oe,{});if(a.isError||!n&&a.isSuccess)return Object(h.jsx)(S,{children:"Oops, something went wrong with loading the project."});var r=n.title.rendered,s=n.acf,i=s.image,l=s.tools,o=s.created_with,d=s.project_link,j=i.sizes;return Object(h.jsx)("div",{className:Le.a.project,children:Object(h.jsx)(B,{children:Object(h.jsx)(pe,{children:Object(h.jsxs)(pe.Tile,{children:[Object(h.jsx)("div",{className:Le.a.projectTitle,children:Object(h.jsx)(g,{element:g.elements.h1,style:g.styles.large,children:r})}),Object(h.jsx)("div",{children:Object(h.jsx)(_e,{src:j.medium_large,alt:r,sources:[{srcSet:j["1536x1536"],width:j["medium_large-width"]},{srcSet:j["twentytwenty-fullscreen"],width:j["1536x1536-width"]}]})}),Object(h.jsx)("div",{className:Le.a.projectCreated,children:Object(h.jsxs)(g,{style:g.styles.medium,children:["Created with: ",o]})}),Object(h.jsx)("div",{className:Le.a.projectTools,children:Object(h.jsxs)(g,{style:g.styles.medium,children:["Tools used: ",l]})}),d&&Object(h.jsx)("div",{className:Le.a.projectLink,children:Object(h.jsx)(g,{children:Object(h.jsx)(m,{to:d.url,isAnchor:!0,isExternal:!0,children:d.title})})})]})})})})},Ie=a(57),Se=a.n(Ie),Ee=new l.a,We=function(){return Object(h.jsx)(o.a,{client:Ee,children:Object(h.jsx)(i.a,{children:Object(h.jsxs)("div",{className:Se.a.body,children:[Object(h.jsx)(F,{}),Object(h.jsx)(c.a,{path:f,exact:!0,component:Fe}),Object(h.jsx)(c.a,{path:"".concat(y,"/:slug"),component:Te}),Object(h.jsx)(c.a,{path:w,exact:!0,component:de})]})})})};s.a.render(Object(h.jsx)(We,{}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.21858208.chunk.js.map