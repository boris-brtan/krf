(this.webpackJsonpkrf=this.webpackJsonpkrf||[]).push([[0],{122:function(e,t,n){e.exports=n(173)},127:function(e,t,n){},173:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),o=n.n(c),i=(n(127),n(25)),s=n(12),u=n(227),l="AUTH_ACTIVATE_REQUESTED",p="AUTH_ACTIVATE_SUCCEEDED",d="AUTH_ACTIVATE_FAILED",f="AUTH_LOGIN_REQUESTED",b="AUTH_LOGIN_SUCCEEDED",m="AUTH_LOGIN_FAILED",O="AUTH_TOKEN_EXPIRED",v="USER_HOME_REQUESTED",E="USER_HOME_SUCCEEDED",y="USER_HOME_FAILED",h="USER_CARD_REQUESTED",g="USER_CARD_SUCCEEDED",j="USER_CARD_FAILED",x="USER_DONATIONS_REQUESTED",w="USER_DONATIONS_SUCCEEDED",k="USER_DONATIONS_FAILED",S="USER_DONATION_REQUESTED",D="USER_DONATION_SUCCEEDED",A="USER_DONATION_FAILED",T="USER_DONATION_RESULT_REQUESTED",R="USER_DONATION_RESULT_SUCCEEDED",P="USER_DONATION_RESULT_FAILED",_="USER_DONATION_PARAM_REQUESTED",N="USER_DONATION_PARAM_SUCCEEDED",C="USER_DONATION_PARAM_FAILED",U="SETTINGS_PARAMS_REQUESTED",I="SETTINGS_PARAMS_SUCCEEDED",L="SETTINGS_PARAMS_FAILED",H=function(e){return{type:l,payload:e}},M=function(e){return{type:"AUTH_ACTIVATE_ENABLE",payload:e}},F=function(e,t){return{type:f,payload:{user:e,pass:t}}},W=function(){return{type:"AUTH_CLEAR"}},K=function(e){return{type:v,payload:e}},B=function(e){return{type:h,payload:e}},z=function(e){return{type:x,payload:e}},X=function(e,t){return{type:S,payload:{token:e,id:t}}},Q=function(e,t,n){return{type:_,payload:{token:e,id:t,paramId:n}}},V=function(e){return{type:U,payload:e}},G=n(209),J=n(201),$=n(208),Z=n(206),q=n(205),Y=n(225);function ee(){var e=Object(s.b)(),t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],o=n[1];return r.a.createElement("div",null,r.a.createElement(J.a,{open:!0,"aria-labelledby":"form-dialog-title"},r.a.createElement(q.a,{id:"form-dialog-title"},"Aktiv\xe1cia"),r.a.createElement(Z.a,null,r.a.createElement(Y.a,{autoFocus:!0,margin:"dense",id:"user_id",label:"U\u017e\xedvatelsk\xe9 \u010d\xedslo",type:"text",fullWidth:!0,onInput:function(e){o(e.target.value)}})),r.a.createElement($.a,null,r.a.createElement(G.a,{onClick:function(){e(M(c))},color:"primary",disabled:c.length<6},"Presko\u010di\u0165"),r.a.createElement(G.a,{onClick:function(){e(H(c))},color:"primary",disabled:c.length<6},"Aktivova\u0165"))))}var te=n(106),ne=n(20),ae=n(24),re=n(74),ce=n(34),oe=n(210),ie=n(211),se=n(176),ue=n(175),le=n(95),pe=n(4),de=Object(se.a)((function(e){return Object(ue.a)({root:{padding:"0 10px"},grid:Object(ne.a)({display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"},e.breakpoints.up("xl"),{maxWidth:"70%",margin:"auto"}),paper:{marginBottom:2,width:"100%",textAlign:"center",padding:"15px 2px"},card:{flex:1,minWidth:120,alignSelf:"stretch",margin:2,textAlign:"center"},selectedCard:{background:e.palette.primary.main,color:e.palette.primary.contrastText},cardArea:{padding:"10px 0",height:"100%"}})})),fe=function(e){var t=Object(ae.a)();return r.a.createElement(le.a,{chartType:"ColumnChart",loader:r.a.createElement("div",null,"Loading Chart"),data:[["Odber","Hodnota",{role:"annotation"}]].concat(Object(te.a)(e.data.map((function(e){return[e.Datum.replace(/(\d+)-(\d+)-(\d+).+/,"$3.$2.$1"),e.Hodnota,e.Hodnota]})))),options:{animation:{startup:!0,duration:200},annotations:{textStyle:{fontSize:12}},backgroundColor:t.palette.background.default,chartArea:{width:"100%",left:40,top:40},colors:[t.palette.primary.main],hAxis:{title:"D\xe1tum odberu",gridlines:{count:20,color:"#fff"},baselineColor:t.palette.text.primary,textColor:t.palette.text.primary,titleTextStyle:{color:t.palette.text.primary}},vAxis:{title:"Hodnota zlo\u017eky krvi",minValue:0,textColor:t.palette.text.primary,baselineColor:t.palette.text.primary,titleTextStyle:{color:t.palette.text.primary}},legend:{position:"none"},height:250,width:"100%",title:e.title,titleTextStyle:{color:t.palette.text.primary,fontSize:15}},rootProps:{"data-testid":"2"}})};function be(e){var t=de(),n=Object(s.b)(),c=Object(s.c)((function(e){return e.authReducer.token})),o=Object(s.c)((function(e){return e.donationReducer.info})),u=Object(s.c)((function(e){return e.donationReducer.result})),l=Object(s.c)((function(e){return e.donationReducer.param})),p=Object(s.c)((function(e){return e.settingsReducer.params.slice(0,-1)})),d=e.match.params.id,f=Object(a.useState)(null),b=Object(i.a)(f,2),m=b[0],O=b[1];return r.a.createElement("div",{className:t.root},r.a.createElement(fe,{title:m&&"".concat(m.Nazov," [ ").concat(m.MernaJednotka," ]"),data:l}),r.a.createElement("div",{className:t.grid},r.a.createElement(re.a,{className:t.paper},r.a.createElement(ce.a,{variant:"h6"},new Date(o.Zaciatok).toLocaleString().replace(",","")+" - "+new Date(o.Koniec).toLocaleTimeString())),p.map((function(e,a){return r.a.createElement(oe.a,{className:Object(pe.a)(t.card,m&&m.Id===e.Id&&t.selectedCard),key:e.Id,onClick:function(){return O(t=e),void n(Q(c,d,t.Id));var t}},r.a.createElement(ie.a,{className:t.cardArea},r.a.createElement(ce.a,{variant:"body2"},e.Nazov),r.a.createElement(ce.a,{variant:"body1",noWrap:!0},u[a]?u[a].Hodnota:0," ",e.MernaJednotka)))}))))}var me=n(207),Oe=n(212),ve=n(213),Ee=n(214);function ye(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.donationsReducer})),n=Object(s.c)((function(e){return e.authReducer.token}));return 0===t.length&&e(z(n)),r.a.createElement(me.a,null,t.map((function(t){return r.a.createElement(r.a.Fragment,{key:t.Id},r.a.createElement(Oe.a,{button:!0,onClick:function(){return a=t.Id,void e(X(n,a));var a}},r.a.createElement(ve.a,null,t.Pracovisko),r.a.createElement(ve.a,null,new Date(t.DatumOdberu).toLocaleDateString()),r.a.createElement(ve.a,null,t.TypOdberu,r.a.createElement("br",null),t.MnozstvoMl," ml")),r.a.createElement(Ee.a,{variant:"middle",component:"li"}))})))}var he=n(97),ge=n.n(he);function je(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(s.b)(),u=Object(s.c)((function(e){return e.authReducer.user})),l=Object(s.c)((function(e){return e.authReducer.pass}));null!==l&&o(F(u,l));return r.a.createElement("div",null,r.a.createElement(J.a,{open:!0,"aria-labelledby":"form-dialog-title"},r.a.createElement(q.a,{id:"form-dialog-title"},"Prihl\xe1senie"),r.a.createElement(Z.a,null,r.a.createElement(Y.a,{autoFocus:!0,margin:"dense",id:"pass",label:"Pin",type:"password",fullWidth:!0,onInput:function(e){c(e.target.value)}})),r.a.createElement($.a,null,r.a.createElement(G.a,{onClick:function(){o(F(u,ge()(n)))},color:"primary",disabled:4!==n.length},"Prihl\xe1si\u0165 sa"))))}var xe=n(215),we=n(216),ke=n(217),Se=n(218),De=n(99),Ae=n.n(De),Te=n(98),Re=n.n(Te),Pe=Object(se.a)((function(e){return Object(ue.a)({root:{padding:e.spacing(2)},card:{margin:"auto",maxWidth:700},cardHeader:{paddingBottom:0},avatar:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},barcode:{marginTop:e.spacing(2),marginRight:e.spacing(2)}})}));function _e(){var e=Pe(),t=Object(s.c)((function(e){return e.userReducer})),n=Object(s.c)((function(e){return e.authReducer.user})),c=Object(a.useState)(!1),o=Object(i.a)(c,2),u=o[0],l=o[1];Object(a.useEffect)((function(){setTimeout((function(){}),1e3)}),[n]);var p=function(){l(!u),u||setTimeout((function(){return Re()(".barcode",n,{width:3,format:"code128"})}),200)};return r.a.createElement("div",{className:e.root},r.a.createElement(J.a,{open:u,onClose:p},r.a.createElement("svg",{className:"barcode"})),r.a.createElement(oe.a,{className:e.card},r.a.createElement(xe.a,{className:e.cardHeader,title:r.a.createElement(ce.a,{variant:"body1"},t.Meno),subheader:r.a.createElement(r.a.Fragment,null,t.KrvnaSkupina+" "+t.FenotypAsString,r.a.createElement("br",null),t.Poistovna),avatar:r.a.createElement(we.a,{"aria-label":"Recipe",className:e.avatar},t.Meno[0]),action:r.a.createElement(ke.a,{"aria-label":"barcode",className:e.barcode,onClick:p},r.a.createElement(Ae.a,{fontSize:"large"}))}),r.a.createElement(Se.a,null,r.a.createElement(Ee.a,null),r.a.createElement(me.a,null,r.a.createElement(Oe.a,null,r.a.createElement(ve.a,{primary:"Po\u010det odberov",secondary:t.PocetOdberov})),r.a.createElement(Oe.a,null,r.a.createElement(ve.a,{primary:"Nasleduj\xfaci odpor\xfa\u010dan\xfd odber",secondary:new Date(t.TerminNasledOdberu).toLocaleDateString()})),r.a.createElement(Oe.a,null,r.a.createElement(ve.a,{primary:"Registrovan\xe9 pracovisko",secondary:t.DomovskePracovisko}))))))}var Ne=n(100),Ce=n(219),Ue=n(220),Ie=n(221),Le=n(228),He=n(222),Me=n(66),Fe=n.n(Me),We=n(103),Ke=n.n(We),Be=n(102),ze=n.n(Be),Xe=n(101),Qe=n.n(Xe),Ve=n(45),Ge=n(108);function Je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function $e(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Je(n,!0).forEach((function(t){Object(ne.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Je(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ze=Object(Ne.a)((function(e){return Object(Ce.a)({root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawerPaper:{width:240},drawerHeader:$e({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,paddingTop:e.spacing(1),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:0},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:240},paletteMode:{position:"absolute",left:0}})}));function qe(e){var t=Ze(),n=Object(s.b)(),c=Object(Ge.a)(),o=Object(a.useState)(!1),u=Object(i.a)(o,2),l=u[0],p=u[1],d=e.togglePalleteMode,f=function(){p(!l)};return r.a.createElement("div",{onTouchStart:function(e){var t=e.nativeEvent,n=t.touches[0].clientX;(!l&&n<50||l&&n<300)&&t.target.addEventListener("touchend",(function e(a){var r=a.changedTouches[0].clientX-n;!l&&r>150?p(!0):l&&r<-150&&p(!1),t.target.removeEventListener("touchend",e)}))}},r.a.createElement(Ue.a,{position:"fixed",className:Object(pe.a)(t.appBar,Object(ne.a)({},t.appBarShift,l))},r.a.createElement(Ie.a,null,r.a.createElement(ke.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:f,className:Object(pe.a)(t.menuButton,l&&t.hide)},r.a.createElement(Fe.a,null)),r.a.createElement(ce.a,{variant:"h6",noWrap:!0},"Slovensk\xe9 darovanie krvi"))),r.a.createElement(Le.a,{variant:"persistent",anchor:"left",open:l,classes:{paper:t.drawerPaper},onTransitionEnd:function(){window.dispatchEvent(new Event("resize"))}},r.a.createElement("div",{className:t.drawerHeader},r.a.createElement(ke.a,{onClick:d,className:t.paletteMode},"dark"===c.palette.type?r.a.createElement(Qe.a,null):r.a.createElement(ze.a,null)),r.a.createElement(ke.a,{onClick:f},r.a.createElement(Ke.a,null))),r.a.createElement(Ee.a,null),r.a.createElement(me.a,null,["Darca","V\xfdsledky"].map((function(e,t){return r.a.createElement(Oe.a,{button:!0,key:e,onClick:function(){return function(e){return n(Object(Ve.push)(["/user","/"][e]))}(t)}},r.a.createElement(He.a,null,r.a.createElement(Fe.a,null)),r.a.createElement(ve.a,{primary:e}))}))),r.a.createElement(Ee.a,null),r.a.createElement(me.a,null,[{text:"Odhl\xe1si\u0165 sa",handler:function(){return n(W())}}].map((function(e){var t=e.text,n=e.handler;return r.a.createElement(Oe.a,{button:!0,key:t,onClick:n},r.a.createElement(He.a,null,r.a.createElement(Fe.a,null)),r.a.createElement(ve.a,{primary:t}))})))),r.a.createElement("main",{className:Object(pe.a)(t.content,Object(ne.a)({},t.contentShift,l))},r.a.createElement("div",{className:t.drawerHeader}),e.children))}var Ye=n(224),et=n(226),tt=n(105),nt=n(223);var at=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function rt(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ct=n(27),ot=n(32),it=n(107),st=n(9),ut=n.n(st),lt=n(8),pt=n(31),dt="https://krv.roxor.cloud/API",ft={auth:{activate:function(){var e=Object(pt.a)(ut.a.mark((function e(t){var n,a;return ut.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(dt+"/Authentication/ActivateRequest",{method:"POST",headers:{evc:t},body:JSON.stringify({evc:t})});case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),login:function(){var e=Object(pt.a)(ut.a.mark((function e(t,n){var a,r;return ut.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(dt+"/Authentication/login",{headers:{evc:t,pin:n}});case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},user:{home:function(){var e=Object(pt.a)(ut.a.mark((function e(t){var n,a;return ut.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(dt+"/darca/Vitajte",{headers:{"X-EKDToken":t}});case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),card:function(){var e=Object(pt.a)(ut.a.mark((function e(t){var n,a;return ut.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(dt+"/darca/PreukazDarcu",{headers:{"X-EKDToken":t}});case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),donations:function(){var e=Object(pt.a)(ut.a.mark((function e(t){var n,a;return ut.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(dt+"/darca/odber",{headers:{"X-EKDToken":t}});case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),donation:function(){var e=Object(pt.a)(ut.a.mark((function e(t,n){var a,r;return ut.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(dt+"/darca/odber/".concat(n),{headers:{"X-EKDToken":t}});case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),donationResult:function(){var e=Object(pt.a)(ut.a.mark((function e(t,n){var a,r;return ut.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(dt+"/darca/odber/".concat(n,"/lvko"),{headers:{"X-EKDToken":t}});case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),donationResultParam:function(){var e=Object(pt.a)(ut.a.mark((function e(t,n,a){var r,c;return ut.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(dt+"/darca/lvko/".concat(a,"/").concat(n),{headers:{"X-EKDToken":t}});case 2:return r=e.sent,e.next=5,r.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}()},settings:{params:function(){var e=Object(pt.a)(ut.a.mark((function e(t){var n,a;return ut.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(dt+"/ciselniky/ParametreKO",{headers:{"X-EKDToken":t}});case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},bt=ut.a.mark(wt),mt=ut.a.mark(kt),Ot=ut.a.mark(St),vt=ut.a.mark(Dt),Et=ut.a.mark(At),yt=ut.a.mark(Tt),ht=ut.a.mark(Rt),gt=ut.a.mark(Pt),jt=ut.a.mark(_t),xt=ut.a.mark(Nt);function wt(e){var t,n,a;return ut.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t=e.payload,r.next=4,Object(lt.b)(ft.auth.activate,t);case 4:return n=r.sent,r.next=7,Object(lt.c)({type:p,payload:n});case 7:r.next=14;break;case 9:return r.prev=9,r.t0=r.catch(0),a=r.t0.message,r.next=14,Object(lt.c)({type:d,message:a});case 14:case"end":return r.stop()}}),bt,null,[[0,9]])}function kt(e){var t,n,a,r,c;return ut.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,t=e.payload,n=t.user,a=t.pass,o.next=4,Object(lt.b)(ft.auth.login,n,a);case 4:return r=o.sent,o.next=7,Object(lt.c)({type:b,payload:r});case 7:o.next=14;break;case 9:return o.prev=9,o.t0=o.catch(0),c=o.t0.message,o.next=14,Object(lt.c)({type:m,message:c});case 14:case"end":return o.stop()}}),mt,null,[[0,9]])}function St(e){var t,n,a;return ut.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t=e.payload,r.next=4,Object(lt.b)(ft.user.home,t);case 4:return n=r.sent,r.next=7,Object(lt.c)({type:E,payload:n});case 7:r.next=14;break;case 9:return r.prev=9,r.t0=r.catch(0),a=r.t0.message,r.next=14,Object(lt.c)({type:y,message:a});case 14:case"end":return r.stop()}}),Ot,null,[[0,9]])}function Dt(e){var t,n,a;return ut.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t=e.payload,r.next=4,Object(lt.b)(ft.user.card,t);case 4:return n=r.sent,r.next=7,Object(lt.c)({type:g,payload:n});case 7:r.next=14;break;case 9:return r.prev=9,r.t0=r.catch(0),a=r.t0.message,r.next=14,Object(lt.c)({type:j,message:a});case 14:case"end":return r.stop()}}),vt,null,[[0,9]])}function At(e){var t,n,a;return ut.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t=e.payload,r.next=4,Object(lt.b)(ft.user.donations,t);case 4:return n=r.sent,r.next=7,Object(lt.c)({type:w,payload:n});case 7:r.next=16;break;case 9:return r.prev=9,r.t0=r.catch(0),a=r.t0.message,r.next=14,Object(lt.c)({type:k,message:a});case 14:return r.next=16,Object(lt.c)({type:O});case 16:case"end":return r.stop()}}),Et,null,[[0,9]])}function Tt(e){var t,n,a,r,c;return ut.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,t=e.payload,n=t.token,a=t.id,o.next=4,Object(lt.b)(ft.user.donation,n,a);case 4:return r=o.sent,o.next=7,Object(lt.c)({type:D,payload:r});case 7:return o.next=9,Object(lt.c)({type:T,payload:e.payload});case 9:return o.next=11,Object(lt.c)(Object(Ve.push)("/donation/"+a));case 11:o.next=20;break;case 13:return o.prev=13,o.t0=o.catch(0),c=o.t0.message,o.next=18,Object(lt.c)({type:A,message:c});case 18:return o.next=20,Object(lt.c)({type:O});case 20:case"end":return o.stop()}}),yt,null,[[0,13]])}function Rt(e){var t,n,a,r,c;return ut.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,t=e.payload,n=t.token,a=t.id,o.next=4,Object(lt.b)(ft.user.donationResult,n,a);case 4:return r=o.sent,o.next=7,Object(lt.c)({type:R,payload:r});case 7:o.next=16;break;case 9:return o.prev=9,o.t0=o.catch(0),c=o.t0.message,o.next=14,Object(lt.c)({type:P,message:c});case 14:return o.next=16,Object(lt.c)({type:O});case 16:case"end":return o.stop()}}),ht,null,[[0,9]])}function Pt(e){var t,n,a,r,c,o;return ut.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,t=e.payload,n=t.token,a=t.id,r=t.paramId,i.next=4,Object(lt.b)(ft.user.donationResultParam,n,a,r);case 4:return c=i.sent,i.next=7,Object(lt.c)({type:N,payload:c});case 7:i.next=16;break;case 9:return i.prev=9,i.t0=i.catch(0),o=i.t0.message,i.next=14,Object(lt.c)({type:C,message:o});case 14:return i.next=16,Object(lt.c)({type:O});case 16:case"end":return i.stop()}}),gt,null,[[0,9]])}function _t(e){var t,n,a;return ut.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t=e.payload,r.next=4,Object(lt.b)(ft.settings.params,t);case 4:return n=r.sent,r.next=7,Object(lt.c)({type:I,payload:n});case 7:r.next=16;break;case 9:return r.prev=9,r.t0=r.catch(0),a=r.t0.message,r.next=14,Object(lt.c)({type:L,message:a});case 14:return r.next=16,Object(lt.c)({type:O});case 16:case"end":return r.stop()}}),jt,null,[[0,9]])}function Nt(){return ut.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=lt.a,e.next=3,Object(lt.d)(l,wt);case 3:return e.t1=e.sent,e.next=6,Object(lt.d)(f,kt);case 6:return e.t2=e.sent,e.next=9,Object(lt.d)(v,St);case 9:return e.t3=e.sent,e.next=12,Object(lt.d)(h,Dt);case 12:return e.t4=e.sent,e.next=15,Object(lt.d)(x,At);case 15:return e.t5=e.sent,e.next=18,Object(lt.d)(S,Tt);case 18:return e.t6=e.sent,e.next=21,Object(lt.d)(T,Rt);case 21:return e.t7=e.sent,e.next=24,Object(lt.d)(_,Pt);case 24:return e.t8=e.sent,e.next=27,Object(lt.d)(U,_t);case 27:return e.t9=e.sent,e.t10=[e.t1,e.t2,e.t3,e.t4,e.t5,e.t6,e.t7,e.t8,e.t9],e.next=31,(0,e.t0)(e.t10);case 31:case"end":return e.stop()}}),xt)}function Ct(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Ut(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ct(n,!0).forEach((function(t){Object(ne.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ct(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var It={user:null,token:null,activated:!1,pass:null},Lt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:It,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:case"AUTH_ACTIVATE_ENABLE":return Ut({},e,{user:t.payload,activated:!0});case d:return Ut({},e,{user:null,activated:!1});case f:return Ut({},e,{pass:t.payload.pass});case b:return Ut({},e,{token:t.payload});case m:return Ut({},e,{token:null,pass:null});case O:return Ut({},e,{token:null});case"AUTH_CLEAR":return It;default:return e}};function Ht(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Mt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ht(n,!0).forEach((function(t){Object(ne.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ht(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ft={info:{}},Wt={result:[]},Kt={param:[]},Bt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Mt({},Ft,{},Kt,{},Wt),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Mt({},e,{info:t.payload});case A:return Mt({},e,{},Ft);case R:return Mt({},e,{result:t.payload});case P:return Mt({},e,{},Wt);case N:return Mt({},e,{param:t.payload});case C:return Mt({},e,{},Kt);default:return e}},zt=[],Xt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:zt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return t.payload;case k:return zt;default:return e}};function Qt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Vt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Qt(n,!0).forEach((function(t){Object(ne.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qt(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Gt={params:[]},Jt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Gt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Vt({},e,{params:t.payload});case L:return Vt({},e,{},Gt);default:return e}};function $t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Zt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$t(n,!0).forEach((function(t){Object(ne.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$t(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var qt={TerminNasledOdberu:null,KrvnaSkupina:null,Fenotyp:null,FenotypAsString:null,Pohlavie:null},Yt={Meno:null,Priezvisko:null,RodneCislo:null,DomovskePracovisko:null,PocetOdberov:null,KrvnaSkupinaPopis:null,FenotypAsText:null,Poistovna:null,KrvnaSkupinaZaklad:null},en=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Zt({},qt,{},Yt),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Zt({},e,{},t.payload);case y:return Zt({},e,{},qt);case g:return Zt({},e,{},t.payload);case j:return Zt({},e,{},Yt);default:return e}},tn=Object(ot.c)({authReducer:Lt,donationReducer:Bt,donationsReducer:Xt,settingsReducer:Jt,userReducer:en}),nn=-1==="/krf".search(/krf/)?Object(ct.a)():Object(ct.b)(),an=Object(it.a)(),rn=Object(ot.e)(tn,JSON.parse(localStorage.state||"{}"),Object(ot.a)(an,Object(Ve.routerMiddleware)(nn)));an.run(Nt),o.a.render(r.a.createElement(s.a,{store:rn},r.a.createElement(u.b,{history:nn},r.a.createElement((function(){var e=Object(s.b)(),t=Object(a.useState)(0),n=Object(i.a)(t,2),c=n[0],o=n[1],l=Object(et.a)(Object(tt.a)({palette:{type:["dark","light"][c],primary:{main:"#c62828"},secondary:{main:"#1976d2"}}})),p=Object(s.c)((function(e){return null===e.authReducer.user||!e.authReducer.activated})),d=Object(s.c)((function(e){return null===e.authReducer.token})),f=Object(s.c)((function(e){return e.userReducer})),b=Object(s.c)((function(e){return e.settingsReducer.params})),m=Object(s.c)((function(e){return e.authReducer.token}));return p?r.a.createElement(ee,null):d?r.a.createElement(je,null):(null===f.Meno&&(e(K(m)),e(B(m))),0===b.length&&e(V(m)),r.a.createElement(nt.a,{theme:l},r.a.createElement(Ye.a,null),r.a.createElement(qe,{togglePalleteMode:function(){o((c+1)%2)}},r.a.createElement(u.a,{exact:!0,path:"/",component:ye}),r.a.createElement(u.a,{exact:!0,path:"/user",component:_e}),r.a.createElement(u.a,{path:"/donation/:id",component:be}))))}),null))),document.getElementById("root")),window.onbeforeunload=function(){localStorage.state=JSON.stringify(rn.getState())},function(e){if("serviceWorker"in navigator){if(new URL("/krf",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/krf","/service-worker.js");at?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):rt(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):rt(t,e)}))}}()}},[[122,1,2]]]);
//# sourceMappingURL=main.44d67c98.chunk.js.map