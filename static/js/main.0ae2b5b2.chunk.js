(this.webpackJsonpkrf=this.webpackJsonpkrf||[]).push([[0],{105:function(e,t,n){e.exports=n(122)},110:function(e,t,n){},122:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),o=n.n(c),u=(n(110),n(25)),s=n(12),i=n(176),l="AUTH_ACTIVATE_REQUESTED",p="AUTH_ACTIVATE_SUCCEEDED",d="AUTH_ACTIVATE_FAILED",m="AUTH_LOGIN_REQUESTED",f="AUTH_LOGIN_SUCCEEDED",b="AUTH_LOGIN_FAILED",O="AUTH_TOKEN_EXPIRED",E="USER_HOME_REQUESTED",y="USER_HOME_SUCCEEDED",v="USER_HOME_FAILED",h="USER_CARD_REQUESTED",j="USER_CARD_SUCCEEDED",g="USER_CARD_FAILED",x="USER_DONATIONS_REQUESTED",k="USER_DONATIONS_SUCCEEDED",w="USER_DONATIONS_FAILED",S="USER_DONATION_REQUESTED",D="USER_DONATION_SUCCEEDED",A="USER_DONATION_FAILED",P="USER_DONATION_RESULT_REQUESTED",T="USER_DONATION_RESULT_SUCCEEDED",R="USER_DONATION_RESULT_FAILED",_="USER_DONATION_PARAM_REQUESTED",N="USER_DONATION_PARAM_SUCCEEDED",C="USER_DONATION_PARAM_FAILED",U="SETTINGS_PARAMS_REQUESTED",I="SETTINGS_PARAMS_SUCCEEDED",L="SETTINGS_PARAMS_FAILED",H=function(e){return{type:l,payload:e}},M=function(e){return{type:"AUTH_ACTIVATE_ENABLE",payload:e}},F=function(e,t){return{type:m,payload:{user:e,pass:t}}},K=function(){return{type:"AUTH_CLEAR"}},B=function(e){return{type:E,payload:e}},W=function(e){return{type:h,payload:e}},z=function(e){return{type:x,payload:e}},Q=function(e,t){return{type:S,payload:{token:e,id:t}}},V=function(e,t,n){return{type:_,payload:{token:e,id:t,paramId:n}}},X=function(e){return{type:U,payload:e}},G=n(158),J=n(150),$=n(157),Z=n(155),q=n(154),Y=n(174);function ee(){var e=Object(s.b)(),t=Object(a.useState)(""),n=Object(u.a)(t,2),c=n[0],o=n[1];return r.a.createElement("div",null,r.a.createElement(J.a,{open:!0,"aria-labelledby":"form-dialog-title"},r.a.createElement(q.a,{id:"form-dialog-title"},"Aktiv\xe1cia"),r.a.createElement(Z.a,null,r.a.createElement(Y.a,{autoFocus:!0,margin:"dense",id:"user_id",label:"U\u017e\xedvatelsk\xe9 \u010d\xedslo",type:"text",fullWidth:!0,onInput:function(e){o(e.target.value)}})),r.a.createElement($.a,null,r.a.createElement(G.a,{onClick:function(){e(M(c))},color:"primary",disabled:c.length<6},"Presko\u010di\u0165"),r.a.createElement(G.a,{onClick:function(){e(H(c))},color:"primary",disabled:c.length<6},"Aktivova\u0165"))))}var te=n(89),ne=n(20),ae=n(23),re=n(66),ce=n(33),oe=n(159),ue=n(160),se=n(125),ie=n(124),le=n(80),pe=n(4),de=Object(se.a)((function(e){return Object(ie.a)({root:{padding:"0 10px"},grid:Object(ne.a)({display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"},e.breakpoints.up("xl"),{maxWidth:"70%",margin:"auto"}),paper:{marginBottom:2,width:"100%",textAlign:"center",padding:"15px 2px"},card:{flex:1,minWidth:120,alignSelf:"stretch",margin:2,textAlign:"center"},selectedCard:{background:e.palette.primary.main,color:e.palette.primary.contrastText},cardArea:{padding:"10px 0",height:"100%"}})})),me=function(e){var t=Object(ae.a)();return r.a.createElement(le.a,{chartType:"ColumnChart",loader:r.a.createElement("div",null,"Loading Chart"),data:[["Odber","Hodnota",{role:"annotation"}]].concat(Object(te.a)(e.data.map((function(e){return[e.Datum.replace(/(\d+)-(\d+)-(\d+).+/,"$3.$2.$1"),e.Hodnota,e.Hodnota]})))),options:{animation:{startup:!0,duration:200},annotations:{textStyle:{fontSize:12}},backgroundColor:t.palette.background.default,chartArea:{width:"100%",left:40,top:40},colors:[t.palette.primary.main],hAxis:{title:"D\xe1tum odberu",gridlines:{count:20,color:"#fff"},baselineColor:t.palette.text.primary,textColor:t.palette.text.primary,titleTextStyle:{color:t.palette.text.primary}},vAxis:{title:"Hodnota zlo\u017eky krvi",minValue:0,textColor:t.palette.text.primary,baselineColor:t.palette.text.primary,titleTextStyle:{color:t.palette.text.primary}},legend:{position:"none"},height:250,width:"100%",title:e.title,titleTextStyle:{color:t.palette.text.primary,fontSize:15}},rootProps:{"data-testid":"2"}})};function fe(e){var t=de(),n=Object(s.b)(),c=Object(s.c)((function(e){return e.authReducer.token})),o=Object(s.c)((function(e){return e.donationReducer.info})),i=Object(s.c)((function(e){return e.donationReducer.result})),l=Object(s.c)((function(e){return e.donationReducer.param})),p=Object(s.c)((function(e){return e.settingsReducer.params.slice(0,-1)})),d=e.match.params.id,m=Object(a.useState)(null),f=Object(u.a)(m,2),b=f[0],O=f[1];return r.a.createElement("div",{className:t.root},r.a.createElement(me,{title:b&&"".concat(b.Nazov," [ ").concat(b.MernaJednotka," ]"),data:l}),r.a.createElement("div",{className:t.grid},r.a.createElement(re.a,{className:t.paper},r.a.createElement(ce.a,{variant:"h6"},new Date(o.Zaciatok).toLocaleDateString()+" "+new Date(o.Zaciatok).toLocaleTimeString()+" - "+new Date(o.Koniec).toLocaleTimeString())),p.map((function(e,a){return r.a.createElement(oe.a,{className:Object(pe.a)(t.card,b&&b.Id===e.Id&&t.selectedCard),key:e.Id,onClick:function(){return O(t=e),void n(V(c,d,t.Id));var t}},r.a.createElement(ue.a,{className:t.cardArea},r.a.createElement(ce.a,{variant:"body2"},e.Nazov),r.a.createElement(ce.a,{variant:"body1",noWrap:!0},i[a]?i[a].Hodnota:0," ",e.MernaJednotka)))}))))}var be=n(156),Oe=n(161),Ee=n(162),ye=n(163);function ve(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.donationsReducer})),n=Object(s.c)((function(e){return e.authReducer.token}));return 0===t.length&&e(z(n)),r.a.createElement(be.a,null,t.map((function(t){return r.a.createElement(r.a.Fragment,{key:t.Id},r.a.createElement(Oe.a,{button:!0,onClick:function(){return a=t.Id,void e(Q(n,a));var a}},r.a.createElement(Ee.a,null,t.Pracovisko),r.a.createElement(Ee.a,null,new Date(t.DatumOdberu).toLocaleDateString()),r.a.createElement(Ee.a,null,t.TypOdberu,r.a.createElement("br",null),t.MnozstvoMl," ml")),r.a.createElement(ye.a,{variant:"middle",component:"li"}))})))}var he=n(82),je=n.n(he);function ge(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(s.b)(),i=Object(s.c)((function(e){return e.authReducer.user})),l=Object(s.c)((function(e){return e.authReducer.pass}));null!==l&&o(F(i,l));return r.a.createElement("div",null,r.a.createElement(J.a,{open:!0,"aria-labelledby":"form-dialog-title"},r.a.createElement(q.a,{id:"form-dialog-title"},"Prihl\xe1senie"),r.a.createElement(Z.a,null,r.a.createElement(Y.a,{autoFocus:!0,margin:"dense",id:"pass",label:"Pin",type:"password",fullWidth:!0,onInput:function(e){c(e.target.value)}})),r.a.createElement($.a,null,r.a.createElement(G.a,{onClick:function(){o(F(i,je()(n)))},color:"primary",disabled:4!==n.length},"Prihl\xe1si\u0165 sa"))))}var xe=n(164),ke=n(165),we=n(166),Se=Object(se.a)((function(e){return Object(ie.a)({root:{padding:e.spacing(2)},card:{margin:"auto",maxWidth:700},cardHeader:{paddingBottom:0},avatar:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText}})}));function De(){var e=Se(),t=Object(s.c)((function(e){return e.userReducer}));return console.log(t),r.a.createElement("div",{className:e.root},r.a.createElement(oe.a,{className:e.card},r.a.createElement(xe.a,{className:e.cardHeader,title:r.a.createElement(ce.a,{variant:"body1"},t.Meno),subheader:r.a.createElement(r.a.Fragment,null,t.KrvnaSkupina+" "+t.FenotypAsString,r.a.createElement("br",null),t.Poistovna),avatar:r.a.createElement(ke.a,{"aria-label":"Recipe",className:e.avatar},t.Meno[0])}),r.a.createElement(we.a,null,r.a.createElement(ye.a,null),r.a.createElement(be.a,null,r.a.createElement(Oe.a,null,r.a.createElement(Ee.a,{primary:"Po\u010det odberov",secondary:t.PocetOdberov})),r.a.createElement(Oe.a,null,r.a.createElement(Ee.a,{primary:"Nasleduj\xfaci odpor\xfa\u010dan\xfd odber",secondary:new Date(t.TerminNasledOdberu).toLocaleDateString()})),r.a.createElement(Oe.a,null,r.a.createElement(Ee.a,{primary:"Registrovan\xe9 pracovisko",secondary:t.DomovskePracovisko}))))))}var Ae=n(83),Pe=n(167),Te=n(168),Re=n(169),_e=n(170),Ne=n(177),Ce=n(171),Ue=n(58),Ie=n.n(Ue),Le=n(86),He=n.n(Le),Me=n(85),Fe=n.n(Me),Ke=n(84),Be=n.n(Ke),We=n(43),ze=n(91);function Qe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Ve(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Qe(n,!0).forEach((function(t){Object(ne.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Xe=Object(Ae.a)((function(e){return Object(Pe.a)({root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawerPaper:{width:240},drawerHeader:Ve({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,paddingTop:e.spacing(1),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:0},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:240},paletteMode:{position:"absolute",left:0}})}));function Ge(e){var t=Xe(),n=Object(s.b)(),c=Object(ze.a)(),o=Object(a.useState)(!1),i=Object(u.a)(o,2),l=i[0],p=i[1],d=e.togglePalleteMode,m=function(){p(!l)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(Te.a,{position:"fixed",className:Object(pe.a)(t.appBar,Object(ne.a)({},t.appBarShift,l))},r.a.createElement(Re.a,null,r.a.createElement(_e.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:m,className:Object(pe.a)(t.menuButton,l&&t.hide)},r.a.createElement(Ie.a,null)),r.a.createElement(ce.a,{variant:"h6",noWrap:!0},"Slovensk\xe9 darovanie krvi"))),r.a.createElement(Ne.a,{variant:"persistent",anchor:"left",open:l,classes:{paper:t.drawerPaper},onTransitionEnd:function(){window.dispatchEvent(new Event("resize"))}},r.a.createElement("div",{className:t.drawerHeader},r.a.createElement(_e.a,{onClick:d,className:t.paletteMode},"dark"===c.palette.type?r.a.createElement(Be.a,null):r.a.createElement(Fe.a,null)),r.a.createElement(_e.a,{onClick:m},r.a.createElement(He.a,null))),r.a.createElement(ye.a,null),r.a.createElement(be.a,null,["Darca","V\xfdsledky"].map((function(e,t){return r.a.createElement(Oe.a,{button:!0,key:e,onClick:function(){return function(e){return n(Object(We.push)(["/user","/"][e]))}(t)}},r.a.createElement(Ce.a,null,r.a.createElement(Ie.a,null)),r.a.createElement(Ee.a,{primary:e}))}))),r.a.createElement(ye.a,null),r.a.createElement(be.a,null,[{text:"Odhl\xe1si\u0165 sa",handler:function(){return n(K())}}].map((function(e){var t=e.text,n=e.handler;return r.a.createElement(Oe.a,{button:!0,key:t,onClick:n},r.a.createElement(Ce.a,null,r.a.createElement(Ie.a,null)),r.a.createElement(Ee.a,{primary:t}))})))),r.a.createElement("main",{className:Object(pe.a)(t.content,Object(ne.a)({},t.contentShift,l))},r.a.createElement("div",{className:t.drawerHeader}),e.children))}var Je=n(173),$e=n(175),Ze=n(88),qe=n(172);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ye=n(29),et=n(31),tt=n(90),nt=n(9),at=n.n(nt),rt=n(8),ct=n(30),ot="https://krv.roxor.cloud/API",ut={auth:{activate:function(){var e=Object(ct.a)(at.a.mark((function e(t){var n,a;return at.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(ot+"/Authentication/ActivateRequest",{method:"POST",headers:{evc:t},body:JSON.stringify({evc:t})});case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),login:function(){var e=Object(ct.a)(at.a.mark((function e(t,n){var a,r;return at.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(ot+"/Authentication/login",{headers:{evc:t,pin:n}});case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},user:{home:function(){var e=Object(ct.a)(at.a.mark((function e(t){var n,a;return at.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(ot+"/darca/Vitajte",{headers:{"X-EKDToken":t}});case 2:return n=e.sent,a=n.json(),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),card:function(){var e=Object(ct.a)(at.a.mark((function e(t){var n,a;return at.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(ot+"/darca/PreukazDarcu",{headers:{"X-EKDToken":t}});case 2:return n=e.sent,a=n.json(),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),donations:function(){var e=Object(ct.a)(at.a.mark((function e(t){var n,a;return at.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(ot+"/darca/odber",{headers:{"X-EKDToken":t}});case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),donation:function(){var e=Object(ct.a)(at.a.mark((function e(t,n){var a,r;return at.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(ot+"/darca/odber/".concat(n),{headers:{"X-EKDToken":t}});case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),donationResult:function(){var e=Object(ct.a)(at.a.mark((function e(t,n){var a,r;return at.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(ot+"/darca/odber/".concat(n,"/lvko"),{headers:{"X-EKDToken":t}});case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),donationResultParam:function(){var e=Object(ct.a)(at.a.mark((function e(t,n,a){var r,c;return at.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(ot+"/darca/lvko/".concat(a,"/").concat(n),{headers:{"X-EKDToken":t}});case 2:return r=e.sent,e.next=5,r.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}()},settings:{params:function(){var e=Object(ct.a)(at.a.mark((function e(t){var n,a;return at.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(ot+"/ciselniky/ParametreKO",{headers:{"X-EKDToken":t}});case 2:return n=e.sent,a=n.json(),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},st=at.a.mark(yt),it=at.a.mark(vt),lt=at.a.mark(ht),pt=at.a.mark(jt),dt=at.a.mark(gt),mt=at.a.mark(xt),ft=at.a.mark(kt),bt=at.a.mark(wt),Ot=at.a.mark(St),Et=at.a.mark(Dt);function yt(e){var t,n,a;return at.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t=e.payload,r.next=4,Object(rt.b)(ut.auth.activate,t);case 4:return n=r.sent,r.next=7,Object(rt.c)({type:p,payload:n});case 7:r.next=14;break;case 9:return r.prev=9,r.t0=r.catch(0),a=r.t0.message,r.next=14,Object(rt.c)({type:d,message:a});case 14:case"end":return r.stop()}}),st,null,[[0,9]])}function vt(e){var t,n,a,r,c;return at.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,t=e.payload,n=t.user,a=t.pass,o.next=4,Object(rt.b)(ut.auth.login,n,a);case 4:return r=o.sent,o.next=7,Object(rt.c)({type:f,payload:r});case 7:o.next=14;break;case 9:return o.prev=9,o.t0=o.catch(0),c=o.t0.message,o.next=14,Object(rt.c)({type:b,message:c});case 14:case"end":return o.stop()}}),it,null,[[0,9]])}function ht(e){var t,n,a;return at.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t=e.payload,r.next=4,Object(rt.b)(ut.user.home,t);case 4:return n=r.sent,r.next=7,Object(rt.c)({type:y,payload:n});case 7:r.next=14;break;case 9:return r.prev=9,r.t0=r.catch(0),a=r.t0.message,r.next=14,Object(rt.c)({type:v,message:a});case 14:case"end":return r.stop()}}),lt,null,[[0,9]])}function jt(e){var t,n,a;return at.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t=e.payload,r.next=4,Object(rt.b)(ut.user.card,t);case 4:return n=r.sent,r.next=7,Object(rt.c)({type:j,payload:n});case 7:r.next=14;break;case 9:return r.prev=9,r.t0=r.catch(0),a=r.t0.message,r.next=14,Object(rt.c)({type:g,message:a});case 14:case"end":return r.stop()}}),pt,null,[[0,9]])}function gt(e){var t,n,a;return at.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t=e.payload,r.next=4,Object(rt.b)(ut.user.donations,t);case 4:return n=r.sent,r.next=7,Object(rt.c)({type:k,payload:n});case 7:r.next=16;break;case 9:return r.prev=9,r.t0=r.catch(0),a=r.t0.message,r.next=14,Object(rt.c)({type:w,message:a});case 14:return r.next=16,Object(rt.c)({type:O});case 16:case"end":return r.stop()}}),dt,null,[[0,9]])}function xt(e){var t,n,a,r,c;return at.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,t=e.payload,n=t.token,a=t.id,o.next=4,Object(rt.b)(ut.user.donation,n,a);case 4:return r=o.sent,o.next=7,Object(rt.c)({type:D,payload:r});case 7:return o.next=9,Object(rt.c)({type:P,payload:e.payload});case 9:return o.next=11,Object(rt.c)(Object(We.push)("/donation/"+a));case 11:o.next=20;break;case 13:return o.prev=13,o.t0=o.catch(0),c=o.t0.message,o.next=18,Object(rt.c)({type:A,message:c});case 18:return o.next=20,Object(rt.c)({type:O});case 20:case"end":return o.stop()}}),mt,null,[[0,13]])}function kt(e){var t,n,a,r,c;return at.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,t=e.payload,n=t.token,a=t.id,o.next=4,Object(rt.b)(ut.user.donationResult,n,a);case 4:return r=o.sent,o.next=7,Object(rt.c)({type:T,payload:r});case 7:o.next=16;break;case 9:return o.prev=9,o.t0=o.catch(0),c=o.t0.message,o.next=14,Object(rt.c)({type:R,message:c});case 14:return o.next=16,Object(rt.c)({type:O});case 16:case"end":return o.stop()}}),ft,null,[[0,9]])}function wt(e){var t,n,a,r,c,o;return at.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,t=e.payload,n=t.token,a=t.id,r=t.paramId,u.next=4,Object(rt.b)(ut.user.donationResultParam,n,a,r);case 4:return c=u.sent,u.next=7,Object(rt.c)({type:N,payload:c});case 7:u.next=16;break;case 9:return u.prev=9,u.t0=u.catch(0),o=u.t0.message,u.next=14,Object(rt.c)({type:C,message:o});case 14:return u.next=16,Object(rt.c)({type:O});case 16:case"end":return u.stop()}}),bt,null,[[0,9]])}function St(e){var t,n,a;return at.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t=e.payload,r.next=4,Object(rt.b)(ut.settings.params,t);case 4:return n=r.sent,r.next=7,Object(rt.c)({type:I,payload:n});case 7:r.next=16;break;case 9:return r.prev=9,r.t0=r.catch(0),a=r.t0.message,r.next=14,Object(rt.c)({type:L,message:a});case 14:return r.next=16,Object(rt.c)({type:O});case 16:case"end":return r.stop()}}),Ot,null,[[0,9]])}function Dt(){return at.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=rt.a,e.next=3,Object(rt.d)(l,yt);case 3:return e.t1=e.sent,e.next=6,Object(rt.d)(m,vt);case 6:return e.t2=e.sent,e.next=9,Object(rt.d)(E,ht);case 9:return e.t3=e.sent,e.next=12,Object(rt.d)(h,jt);case 12:return e.t4=e.sent,e.next=15,Object(rt.d)(x,gt);case 15:return e.t5=e.sent,e.next=18,Object(rt.d)(S,xt);case 18:return e.t6=e.sent,e.next=21,Object(rt.d)(P,kt);case 21:return e.t7=e.sent,e.next=24,Object(rt.d)(_,wt);case 24:return e.t8=e.sent,e.next=27,Object(rt.d)(U,St);case 27:return e.t9=e.sent,e.t10=[e.t1,e.t2,e.t3,e.t4,e.t5,e.t6,e.t7,e.t8,e.t9],e.next=31,(0,e.t0)(e.t10);case 31:case"end":return e.stop()}}),Et)}function At(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Pt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?At(n,!0).forEach((function(t){Object(ne.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):At(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Tt={user:null,token:null,activated:!1,pass:null},Rt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:case"AUTH_ACTIVATE_ENABLE":return Pt({},e,{user:t.payload,activated:!0});case d:return Pt({},e,{user:null,activated:!1});case m:return Pt({},e,{pass:t.payload.pass});case f:return Pt({},e,{token:t.payload});case b:return Pt({},e,{token:null,pass:null});case O:return Pt({},e,{token:null});case"AUTH_CLEAR":return Tt;default:return e}};function _t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Nt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_t(n,!0).forEach((function(t){Object(ne.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_t(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ct={info:{}},Ut={result:[]},It={param:[]},Lt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Nt({},Ct,{},It,{},Ut),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Nt({},e,{info:t.payload});case A:return Nt({},e,{},Ct);case T:return Nt({},e,{result:t.payload});case R:return Nt({},e,{},Ut);case N:return Nt({},e,{param:t.payload});case C:return Nt({},e,{},It);default:return e}},Ht=[],Mt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ht,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return t.payload;case w:return Ht;default:return e}};function Ft(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Kt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ft(n,!0).forEach((function(t){Object(ne.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ft(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Bt={params:[]},Wt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Bt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Kt({},e,{params:t.payload});case L:return Kt({},e,{},Bt);default:return e}};function zt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Qt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?zt(n,!0).forEach((function(t){Object(ne.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):zt(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Vt={TerminNasledOdberu:null,KrvnaSkupina:null,Fenotyp:null,FenotypAsString:null,Pohlavie:null},Xt={Meno:null,Priezvisko:null,RodneCislo:null,DomovskePracovisko:null,PocetOdberov:null,KrvnaSkupinaPopis:null,FenotypAsText:null,Poistovna:null,KrvnaSkupinaZaklad:null},Gt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qt({},Vt,{},Xt),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Qt({},e,{},t.payload);case v:return Qt({},e,{},Vt);case j:return Qt({},e,{},t.payload);case g:return Qt({},e,{},Xt);default:return e}},Jt=Object(et.c)({authReducer:Rt,donationReducer:Lt,donationsReducer:Mt,settingsReducer:Wt,userReducer:Gt}),$t=Object(Ye.a)(),Zt=Object(tt.a)(),qt=Object(et.e)(Jt,JSON.parse(localStorage.state||"{}"),Object(et.a)(Zt,Object(We.routerMiddleware)($t)));Zt.run(Dt),o.a.render(r.a.createElement(s.a,{store:qt},r.a.createElement(i.b,{history:$t},r.a.createElement((function(){var e=Object(s.b)(),t=Object(a.useState)(0),n=Object(u.a)(t,2),c=n[0],o=n[1],l=Object($e.a)(Object(Ze.a)({palette:{type:["dark","light"][c],primary:{main:"#c62828"},secondary:{main:"#1976d2"}}})),p=Object(s.c)((function(e){return null===e.authReducer.user||!e.authReducer.activated})),d=Object(s.c)((function(e){return null===e.authReducer.token})),m=Object(s.c)((function(e){return e.userReducer})),f=Object(s.c)((function(e){return e.settingsReducer.params})),b=Object(s.c)((function(e){return e.authReducer.token}));return p?r.a.createElement(ee,null):d?r.a.createElement(ge,null):(null===m.Meno&&(e(B(b)),e(W(b))),0===f.length&&e(X(b)),console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/krf"})),r.a.createElement(qe.a,{theme:l},r.a.createElement(Je.a,null),r.a.createElement(Ge,{togglePalleteMode:function(){o((c+1)%2)}},r.a.createElement(i.a,{exact:!0,path:"/krf/",component:ve}),r.a.createElement(i.a,{exact:!0,path:"/krf/user",component:De}),r.a.createElement(i.a,{path:"/krf/donation/:id",component:fe}))))}),null))),document.getElementById("root")),window.onbeforeunload=function(){localStorage.state=JSON.stringify(qt.getState())},"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[105,1,2]]]);
//# sourceMappingURL=main.0ae2b5b2.chunk.js.map