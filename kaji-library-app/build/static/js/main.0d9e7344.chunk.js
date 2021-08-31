(this["webpackJsonpkaji-library-app"]=this["webpackJsonpkaji-library-app"]||[]).push([[0],{124:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),c=a.n(o),i=(a(94),a(95),a(16)),s=a(13),l=a(80),u=a(185),d=a(186),p=a(165),g=a(171),m=a(15),b=a(168),h=a(170),f=a(77),v=a.n(f),w=a(78),k=a.n(w),E=a(79),x=a.n(E),j=a(3),O=Object(p.a)({menu:{width:"100%",backgroundColor:"#d9b891",position:"relative","&::before":{content:"''",width:"100%",height:"30px",backgroundImage:"url('".concat("","/image/wave.svg')"),backgroundSize:"auto 30px",backgroundRepeat:"repeat-x",position:"absolute",top:-25}},actionItem:{color:"#58311f",paddingTop:0,"&$selected":{color:"#f2e7d9",fontWeight:"bold"}},selected:{}});function y(e){var t=O(),a=Object(s.g)(),n=r.a.useState(a.pathname),o=Object(m.a)(n,2),c=o[0],l=o[1];return r.a.createElement("div",{className:e.className},r.a.createElement(b.a,{value:c,onChange:function(e,t){l(t)},className:Object(j.a)(t.menu)},r.a.createElement(h.a,{classes:{root:t.actionItem,selected:t.selected},label:"\u898b\u3064\u3051\u308b",icon:r.a.createElement(v.a,null),component:i.b,to:"/bookList/1",value:"/bookList/1"}),r.a.createElement(h.a,{classes:{root:t.actionItem,selected:t.selected},label:"\u8cb8\u51fa\u4e2d",icon:r.a.createElement(k.a,null),component:i.b,to:"/borrowedList",value:"/borrowedList"}),r.a.createElement(h.a,{classes:{root:t.actionItem,selected:t.selected},label:"\u4f7f\u3044\u65b9",icon:r.a.createElement(x.a,null),component:i.b,to:"/info",value:"/info"})))}var N=Object(p.a)((function(e){return{root:{width:"100%",height:"100%",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",backgroundColor:"#f2e7d9",backgroundRepeat:"repeat-y",backgroundAttachment:"fixed"},logo:{width:120,marginTop:e.spacing(3),marginBottom:e.spacing(1)},waveMenu:{width:"100%",position:"fixed",zIndex:100,bottom:0},container:{paddingTop:e.spacing(2),paddingBottom:e.spacing(12),paddingLeft:0,paddingRight:0}}}));function C(e){var t=N();return r.a.createElement("div",{className:t.root},r.a.createElement("img",{src:"".concat("","/image/kaji_library.svg"),className:t.logo}),r.a.createElement("main",null,r.a.createElement(g.a,{className:t.container},e.children)),r.a.createElement(y,{className:t.waveMenu}))}var I=a(7),B=a.n(I),R=a(11),z=a(47),L=function(){var e=Object(z.create)({baseURL:"https://server.bigbell.dev/api",withCredentials:!1}),t={},a={},n={};return a.getWhereHasReturned=function(){var t=Object(R.a)(B.a.mark((function t(a){var n;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e({method:"get",url:"/borroweds",params:{"filter[where][hasReturned]":a}});case 3:return n=t.sent,t.abrupt("return",n.data);case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0.response.data),t.abrupt("return",{});case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),a.getBorrowedsList=Object(R.a)(B.a.mark((function t(){var a;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e({method:"get",url:"/borroweds"});case 3:return a=t.sent,t.abrupt("return",a.data);case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0.response.data),t.abrupt("return",{});case 11:case"end":return t.stop()}}),t,null,[[0,7]])}))),t.getById=function(){var t=Object(R.a)(B.a.mark((function t(a){var n;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e({method:"get",url:"/books/"+a});case 3:return n=t.sent,t.abrupt("return",n.data);case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0.response.data),t.abrupt("return",{});case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),t.getBooksList=function(){var t=Object(R.a)(B.a.mark((function t(a){var n;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e({method:"get",url:"/books"});case 3:return n=t.sent,t.abrupt("return",n.data);case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0.response.data),t.abrupt("return",{});case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),t.getBooksLimitList=function(){var t=Object(R.a)(B.a.mark((function t(a,n){var r;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e({method:"get",url:"/books",params:{"filter[skip]":a,"filter[limit]":n}});case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0.response.data),t.abrupt("return",{});case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,a){return t.apply(this,arguments)}}(),n.getById=function(){var t=Object(R.a)(B.a.mark((function t(a){var n;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e({method:"get",url:"/users/"+a});case 3:return n=t.sent,t.abrupt("return",n.data);case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0.response.data),t.abrupt("return",{});case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),t.hasReturnedById=function(){var t=Object(R.a)(B.a.mark((function t(a){var n;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e({method:"get",url:"/books/"+a+"/borroweds",params:{"filter[where][hasReturned]":"false"}});case 3:return n=t.sent,t.abrupt("return",!(n.data.length>0));case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0.response.data),t.abrupt("return",{});case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),t.findByFilter=function(){var t=Object(R.a)(B.a.mark((function t(a){var n;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e({method:"get",url:"/books",params:{filter:JSON.stringify(a)}});case 3:return n=t.sent,t.abrupt("return",n.data);case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0.response.data),t.abrupt("return",{});case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),a.getById=function(){var t=Object(R.a)(B.a.mark((function t(a){var n;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e({method:"get",url:"/books/"+a+"/borroweds/"});case 3:return n=t.sent,t.abrupt("return",n.data);case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0.response.data),t.abrupt("return",{});case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),{books:t,borroweds:a,users:n}},S=a(31),D=a(173),W=a(174),H=a(175),T=a(176),M=a(188),F=a(177),J=a(172);function _(e){var t={size:50,color:"black",backgroundColor:"white"};e.size&&(t.size=e.size),e.color&&(t.color=e.color),e.backgroundColor&&(t.backgroundColor=e.backgroundColor);var a=Object(p.a)((function(e){return{customBadge:{"& > span":{color:t.color,fontSize:.65*t.size,width:t.size,height:t.size,borderRadius:t.size/2,backgroundColor:t.backgroundColor}}}}))();return r.a.createElement(J.a,{overlap:e.overlap,badgeContent:e.badgeContent,className:a.customBadge},e.children)}var G=function(){var e=Object(z.create)({baseURL:"https://www.googleapis.com/",withCredentials:!1}),t={};return t.getByIsbn=function(){var t=Object(R.a)(B.a.mark((function t(a){var n;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e({method:"get",url:"/books/v1/volumes",params:{q:"isbn:"+a}});case 3:return n=t.sent,t.abrupt("return",n.data);case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0.response.data),t.abrupt("return",{});case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),{books:t}},P=Object(p.a)((function(e){return{card:{padding:0,display:"flex",alignItems:"center",width:320,height:125},content:{height:"100%",flex:1,padding:e.spacing(2),paddingLeft:e.spacing(1),paddingRight:e.spacing(0)},cover:{height:"100%",width:90},tags:{height:"100%",width:"100%",padding:e.spacing(1),paddingLeft:e.spacing(0),paddingRight:e.spacing(0),display:"flex"},tag:{marginRight:10},activeClassName:{textDecoration:"none"}}}));function U(e){var t=P(),a=r.a.useState(),o=Object(m.a)(a,2),c=o[0],s=o[1],l=r.a.useCallback(Object(R.a)(B.a.mark((function t(){var a,n,r,o,c,i,l,u;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L().books.getById(e.id);case 2:return r=t.sent,t.next=5,G().books.getByIsbn(r.isbn);case 5:return o=t.sent,t.next=8,L().books.hasReturnedById(e.id);case 8:c=t.sent,i=null===(a=o.items)||void 0===a||null===(n=a[0].volumeInfo.imageLinks)||void 0===n?void 0:n.thumbnail,l=r.title.length>9?r.title.slice(0,8)+"...":r.title,u=r.author.length>9?r.author.slice(0,8)+"...":r.author,s(Object(S.a)(Object(S.a)({thumbnail:i||"".concat("","/image/NoImage.png")},r),{},{title:l,author:u,hasReturned:c}));case 13:case"end":return t.stop()}}),t)}))),[]);Object(n.useEffect)((function(){l()}),[l]);var u=c?c.tags.map((function(e){return r.a.createElement(M.a,{className:t.tag,label:e,variant:"outlined",key:"".concat(c.id,"_").concat(e)})})):"";return r.a.createElement("div",{className:e.className},r.a.createElement(_,{size:20,backgroundColor:c?c.hasReturned?"#56f000":"#ffb302":"#9ea7ad",badgeContent:" "},r.a.createElement(i.b,{to:"/bookDetail/".concat(null===c||void 0===c?void 0:c.id),className:t.activeClassName},r.a.createElement(D.a,{className:t.card},r.a.createElement(W.a,{className:t.cover,image:c?c.thumbnail:"/image/loading.svg",title:"Live from space album cover"}),r.a.createElement(H.a,{className:t.content},r.a.createElement(T.a,{variant:"h6",align:"left"},c?c.title:r.a.createElement(F.a,{variant:"text"})),r.a.createElement(T.a,{variant:"subtitle1",align:"left"},c?c.author:r.a.createElement(F.a,{variant:"text"})),r.a.createElement("div",{className:t.tags},u))))))}var $=Object(p.a)((function(e){return{root:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center"},card:{margin:e.spacing(2)}}}));function q(){var e=$(),t=r.a.useState(),a=Object(m.a)(t,2),o=a[0],c=a[1],i=r.a.useCallback(Object(R.a)(B.a.mark((function e(){var t;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L().borroweds.getWhereHasReturned(!1);case 2:t=e.sent,c(t),console.log(t);case 5:case"end":return e.stop()}}),e)}))),[]),l=Object(s.g)();Object(n.useEffect)((function(){console.log(l.pathname),i()}),[i]);var u=o?o.map((function(t){return r.a.createElement(U,{key:t.id,id:t.booksId,className:e.card})})):"";return r.a.createElement("div",{className:e.root},u)}var A=a(179),V=a(183),K=a(182),Q=a(178),X=a(180),Y=a(181),Z=a(126);function ee(e){var t=r.a.useMemo((function(){var t={blur:e.blur?e.blur:10,coverColor:e.coverColor?e.coverColor:""};return Object(p.a)((function(a){return{background:{height:"inherit",background:"url(".concat(e.src,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",overflow:"hidden",position:"relative",zIndex:1,"&::before":{content:"''",background:"inherit",backgroundColor:"rgba(255, 255, 255, 0.3)",filter:"blur(".concat(t.blur,"px)"),position:"absolute",top:"-".concat(t.blur,"px"),left:"-".concat(t.blur,"px"),right:"-".concat(t.blur,"px"),bottom:"-".concat(t.blur,"px"),zIndex:-1}},backgroundCover:{height:"100%",width:"100%",backgroundColor:t.coverColor}}}))}),[e])();return r.a.createElement("div",{className:Object(j.a)(t.background,e.className)},r.a.createElement("div",{className:t.backgroundCover},e.children))}function te(e){var t={size:50,width:"auto",color:"black",backgroundColor:"white"};e.size&&(t.size=e.size),e.width&&(t.width=e.width),e.color&&(t.color=e.color),e.backgroundColor&&(t.backgroundColor=e.backgroundColor);var a=Object(p.a)((function(e){return{customChip:{"& > span":{color:t.color,fontSize:.65*t.size,minWidth:t.size,width:t.width,height:t.size,borderRadius:t.size/2,backgroundColor:t.backgroundColor}}}}))();return r.a.createElement(M.a,{label:e.chipLabel,className:a.customChip},e.children)}var ae=Object(p.a)((function(e){return{root:{display:"flex",flexDirection:"column",justifyContent:"center"},header:{height:300,minWidth:200,width:"100vw",position:"relative"},whiteGradeMask:{height:"100%",width:"100%",position:"relative","&::after":{position:"absolute",bottom:-1,zIndex:2,content:"''",width:"100%",height:"50%",background:"linear-gradient(rgba(242, 231, 217, 0) 0, rgba(242, 231, 217, .7) 20%, rgba(242, 231, 217, 1) 80%)"}},bookImage:{height:200,width:142,backgroundColor:"red",zIndex:3,position:"absolute",top:"20%",left:"5%"},returned:{width:100,height:30,zIndex:4,position:"absolute",top:"77%",right:"10%"},info:{minHeight:100,width:"85vw",zIndex:4,margin:"0 auto"},tags:{height:"100%",width:"100%",padding:e.spacing(1),paddingLeft:e.spacing(0),paddingRight:e.spacing(0),display:"flex"},tag:{marginRight:10},textSnippet:{backgroundColor:"#E6D6C1"}}}));function ne(e,t,a,n){return console.log(e,t,a,n),{hasReturned:e,slackName:t,borrowingStartDate:a,borrowingEndDate:n}}function re(){var e=ae(),t=Object(s.h)(),o=r.a.useState(),c=Object(m.a)(o,2),i=c[0],l=c[1],u=r.a.useState([]),d=Object(m.a)(u,2),p=d[0],g=d[1],b=a(123),h=r.a.useCallback(Object(R.a)(B.a.mark((function e(){var a,n,r,o,c;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L().books.getById(t.id);case 2:return a=e.sent,e.next=5,G().books.getByIsbn(a.isbn);case 5:return n=e.sent,e.next=8,L().books.hasReturnedById(t.id);case 8:return r=e.sent,o=Object(S.a)(Object(S.a)(Object(S.a)({},n.items[0]),a),{},{hasReturned:r}),e.next=12,L().borroweds.getById(t.id);case 12:return c=e.sent,e.t0=g,e.next=16,Promise.all(c.map(function(){var e=Object(R.a)(B.a.mark((function e(t){var a;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L().users.getById(t.usersId);case 2:return a=e.sent,console.log(a),console.log(b(t.borrowingStartDate,"isoDate")),e.abrupt("return",ne(t.hasReturned,a.slackName,b(t.borrowingStartDate,"isoDate"),(null===t||void 0===t?void 0:t.borrowingEndDate)?b(t.borrowingEndDate,"isoDate"):""));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 16:e.t1=e.sent,(0,e.t0)(e.t1),console.log(p[0]),l(o),console.log(o);case 21:case"end":return e.stop()}}),e)}))),[]);Object(s.g)();Object(n.useEffect)((function(){h()}),[]);var f=i?i.tags.map((function(t){return r.a.createElement(te,{className:e.tag,chipLabel:t,variant:"outlined",key:"".concat(i.id,"_").concat(t),backgroundColor:"white",size:"30"})})):"";return r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.header},r.a.createElement("div",{className:e.whiteGradeMask},r.a.createElement(ee,{src:i?i.volumeInfo.imageLinks.thumbnail:"/image/loading.svg",className:e.blurImage})),r.a.createElement("img",{src:i?i.volumeInfo.imageLinks.thumbnail:"/image/loading.svg",className:e.bookImage}),r.a.createElement("div",{className:e.returned},r.a.createElement(te,{backgroundColor:i?i.hasReturned?"#56f000":"#ffb302":"#9ea7ad",chipLabel:" ",size:30,width:100}))),r.a.createElement("div",{className:e.info},r.a.createElement(T.a,{variant:"h5",gutterBottom:!0},i?i.title:"NoData"),r.a.createElement(T.a,{variant:"h5",gutterBottom:!0},i?i.author:"NoData"),r.a.createElement("div",{className:e.tags},f)),r.a.createElement("div",{className:e.textSnippet},r.a.createElement(T.a,{variant:"h6",gutterBottom:!0},i?i.searchInfo.textSnippet:"NoData")),r.a.createElement("div",{className:e.table},r.a.createElement(Q.a,{component:Z.a},r.a.createElement(A.a,{className:e.table,"aria-label":"simple table"},r.a.createElement(X.a,null,r.a.createElement(Y.a,null,r.a.createElement(K.a,null,"\u8cb8\u51fa\u72b6\u6cc1"),r.a.createElement(K.a,{align:"right"},"slack\u540d"),r.a.createElement(K.a,{align:"right"},"\u8cb8\u51fa\u65e5"),r.a.createElement(K.a,{align:"right"},"\u8fd4\u5374\u65e5"))),r.a.createElement(V.a,null,p?p.map((function(e){return r.a.createElement(Y.a,{key:e.hasReturned},r.a.createElement(K.a,{component:"th",scope:"row"},e.hasReturned?"\u8fd4\u5374\u6e08":"\u8cb8\u51fa\u4e2d"),r.a.createElement(K.a,{align:"right"},e.slackName),r.a.createElement(K.a,{align:"right"},e.borrowingStartDate),r.a.createElement(K.a,{align:"right"},e.borrowingEndDate))})):"")))))}Object(p.a)((function(e){return{card:{padding:0,display:"flex",alignItems:"center",width:320,height:125},content:{height:"100%",flex:1,padding:e.spacing(2),paddingLeft:e.spacing(1),paddingRight:e.spacing(0)},cover:{height:"100%",width:90},tags:{height:"100%",width:"100%",padding:e.spacing(1),paddingLeft:e.spacing(0),paddingRight:e.spacing(0),display:"flex"},tag:{marginRight:10}}}));var oe=Object(p.a)((function(e){return{root:{display:"flex",flexDirection:"column",justifyContent:"center"},Info:{width:"100%",maxWidth:300,margin:e.spacing(1),borderRadius:"5%",border:"3px solid",borderColor:"#d9b891"}}}));function ce(){var e=oe();return r.a.createElement("div",{className:e.root},r.a.createElement("img",{src:"".concat("","/image/HowTo/1.png"),className:e.Info}),r.a.createElement("img",{src:"".concat("","/image/HowTo/2.png"),className:e.Info}),r.a.createElement("img",{src:"".concat("","/image/HowTo/3.png"),className:e.Info}),r.a.createElement("img",{src:"".concat("","/image/HowTo/4.png"),className:e.Info}),r.a.createElement("img",{src:"".concat("","/image/HowTo/5.png"),className:e.Info}))}var ie=a(187),se=Object(p.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"}}}}));function le(e){var t=se(),a=r.a.useState(e.value?e.value:""),n=Object(m.a)(a,2),o=n[0],c=n[1];return r.a.createElement("div",{className:e.className},r.a.createElement("form",{className:t.root,noValidate:!0,autoComplete:"off"},r.a.createElement(ie.a,{label:"Search",variant:"outlined",name:"search",value:o,onChange:function(t){c(t.target.value),e.onChange&&e.onChange(t)}})))}var ue=Object(p.a)((function(e){return{root:{display:"flex",flexDirection:"row",flexWrap:"wrap"},card:{margin:e.spacing(2)},search:{margin:"0 auto"}}}));function de(){var e=ue(),t=r.a.useState(),a=Object(m.a)(t,2),o=a[0],c=a[1],i=r.a.useState(""),l=Object(m.a)(i,2),u=l[0],d=l[1],p=r.a.useCallback(Object(R.a)(B.a.mark((function e(){var t;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L().books.getBooksList();case 2:t=e.sent,console.log(t),c(t);case 5:case"end":return e.stop()}}),e)}))),[]),g=Object(s.g)();Object(n.useEffect)((function(){console.log(g.pathname),p()}),[p]);var b=function(){var e=Object(R.a)(B.a.mark((function e(t){var a;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(t.target.value),e.next=3,L().books.findByFilter({where:{title:{regexp:t.target.value?"/".concat(t.target.value,"/"):".*"}}});case 3:a=e.sent,c(a),console.log(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=o?o.map((function(t){return r.a.createElement(U,{key:t.id,id:t.id,className:e.card})})):"";return r.a.createElement("div",{className:e.root},r.a.createElement(le,{value:u,onChange:b,className:e.search}),h)}var pe=a(184),ge=Object(p.a)((function(e){return{root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},search:{margin:"0 auto"},cards:{display:"flex",flexDirection:"row",justifyContent:"center",flexWrap:"wrap",width:"90vw"},card:{margin:e.spacing(2)},page:{display:"flex",justifyContent:"center",flexWrap:"wrap",width:"90vw"}}}));function me(){var e=ge(),t=Object(s.f)(),a=r.a.useState(),o=Object(m.a)(a,2),c=o[0],i=o[1],l=r.a.useState(""),u=Object(m.a)(l,2),d=u[0],p=u[1],g=r.a.useState(Number(Object(s.h)().page)),b=Object(m.a)(g,2),h=b[0],f=(b[1],r.a.useCallback(Object(R.a)(B.a.mark((function e(){var t;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L().books.getBooksLimitList(10*h-10,10);case 2:t=e.sent,console.log(t),i(t);case 5:case"end":return e.stop()}}),e)}))),[])),v=Object(s.g)();Object(n.useEffect)((function(){console.log(v.pathname),f()}),[f]);var w=function(){var e=Object(R.a)(B.a.mark((function e(t){var a;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(t.target.value),e.next=3,L().books.findByFilter({where:{title:{regexp:t.target.value?"/".concat(t.target.value,"/"):".*"}}});case 3:a=e.sent,i(a),console.log(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=c?c.map((function(t){return r.a.createElement(U,{key:t.id,id:t.id,className:e.card})})):"";return r.a.createElement("div",{className:e.root},r.a.createElement(le,{value:d,onChange:w,className:e.search}),r.a.createElement("div",{className:e.cards},k),r.a.createElement("div",{className:e.page},r.a.createElement(pe.a,{onClick:function(){console.log("end"),t.push("/bookList/".concat(h+1))}},"\u6b21\u3078")))}var be=function(){var e=Object(l.a)({typography:{fontFamily:'"Noto Sans JP", sans-serif !important'},overrides:{MuiButtonBase:{root:{outline:"0 !important"}}}});return r.a.createElement(u.a,{theme:e},r.a.createElement(i.a,null,r.a.createElement(d.a,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/"},r.a.createElement(C,null,r.a.createElement(s.a,{path:"/borrowedList",component:q}),r.a.createElement(s.a,{path:"/bookDetail/:id",component:re}),r.a.createElement(s.a,{path:"/info",component:ce}),r.a.createElement(s.a,{path:"/search",component:de}),r.a.createElement(s.a,{path:"/bookList/:page",component:me}))),r.a.createElement(s.a,null,"404"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(be,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,t,a){},95:function(e,t,a){}},[[124,1,2]]]);
//# sourceMappingURL=main.0d9e7344.chunk.js.map