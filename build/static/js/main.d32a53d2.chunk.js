(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{128:function(t,e,n){},129:function(t,e,n){},147:function(t,e,n){},187:function(t,e,n){},192:function(t,e,n){},193:function(t,e,n){},194:function(t,e,n){},195:function(t,e,n){},196:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n(0),c=n.n(a),s=n(19),i=n.n(s),o=(n(128),n(129),n(15)),u=n.n(o),l=n(27),d=n(94),j=n(95),h=n(122),b=n(117),f=n(26),m=n(207),p=n(209),O=n(210),x=n(118),v=n(198),y=n(201),g=n(28),k=n.n(g),w=n(202),E=(n(147),function(t){var e=Object(a.useState)(t.tags),n=Object(f.a)(e,2),c=n[0],s=n[1],i=Object(a.useState)(-1),o=Object(f.a)(i,2),d=o[0],j=o[1],h=Object(a.useState)(""),b=Object(f.a)(h,2),m=b[0],p=b[1],O=Object(a.useState)(!1),g=Object(f.a)(O,2),E=g[0],N=g[1],_=Object(a.useState)(""),C=Object(f.a)(_,2),B=C[0],S=C[1],D=function(e){function n(){return(n=Object(l.a)(u.a.mark((function e(n){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k()({url:"https://watchlist-cvs.herokuapp.com/watchlist/"+t.id,method:"PATCH",data:{tags:n}});case 2:if(!(200!==(r=e.sent).status&201!==r.status)){e.next=5;break}throw new Error("Error!");case 5:return e.next=7,r.data;case 7:return a=e.sent,e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(t){return n.apply(this,arguments)})(e).then((function(t){})).catch((function(t){console.log("error",t.message)}))},T=function(t){c[d]=m.toLowerCase(),s(c),D(c),j(-1),p(""),S(""),N(!1)},I=function(t){j(-1),p(""),S(""),N(!1)},A=function(t){p(t.target.value),S(""),N(!1)},L=c?c.map((function(t,e){var n=t.length>20;return d===e?Object(r.jsx)(v.a,{size:"small",className:"tag-input",value:m,onChange:A,onBlur:I,onPressEnter:T},e):Object(r.jsx)(y.a,{className:"edit-tag",color:"#2B3131",closable:!0,onClose:function(){return function(t){var e=c;e.splice(t,1),D(e),s(e)}(e)},children:Object(r.jsx)("span",{onDoubleClick:function(n){j(e),p(t),n.preventDefault()},children:n?"".concat(t.slice(0,20),"..."):t})},e)})):[];return Object(r.jsxs)("div",{className:"tags",children:[L,E&&Object(r.jsx)(v.a,{type:"text",size:"small",className:"tag-input",value:B,onChange:function(t){S(t.target.value)},onBlur:function(){S(""),N(!1),j(-1),p("")},onPressEnter:function(t){var e=t.target.value.toLowerCase();if(void 0===c||null===c){var n=[e];D(n),s(n)}else if(e&&-1===c.indexOf(e)){var r=[].concat(Object(x.a)(c),[e]);D(r),s(r)}S(""),N(!1),j(-1),p("")}}),!E&&Object(r.jsxs)(y.a,{className:"site-tag-plus",onClick:function(){N(!0),j(-1),p("")},children:[Object(r.jsx)(w.a,{})," New Tag"]})]})}),N=n(203),_=n(69),C=n(205),B=n(204),S=function(t){var e=c.a.useState(!1),n=Object(f.a)(e,2),a=n[0],s=n[1],i=function(t){(function(){var t=Object(l.a)(u.a.mark((function t(e){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k()({url:"https://watchlist-cvs.herokuapp.com/watchlist/"+e,method:"DELETE"});case 2:if(!(200!==(n=t.sent).status&201!==n.status)){t.next=5;break}throw new Error("Error!");case 5:return t.next=7,n.data;case 7:return r=t.sent,t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}})()(t).then((function(t){console.log(t)})).catch((function(t){console.log(t.message)}))};return Object(r.jsx)(_.a,{title:"Delete video from the list",children:Object(r.jsx)(C.a,{title:"Are you sure? This is forever.",placement:"bottom",visible:a,onConfirm:function(e){s(!1),i(t.id),N.a.error({message:"Deleted!",description:"Watchlist entry id ".concat(t.id," has been deleted."),icon:Object(r.jsx)(B.a,{}),placement:"bottomRight"}),document.getElementById(t.id).style.display="none"},onCancel:function(){s(!1)},okText:"Yes",cancelText:"No",children:Object(r.jsx)("div",{className:"Button Button__delete",onClick:function(){s(!0)},children:Object(r.jsx)(B.a,{})})})})},D=n(199),T=function(t){return Object(r.jsx)(_.a,{title:"Delete video from the list",children:Object(r.jsx)(D.a,{defaultValue:t.rate,onChange:function(e){!function(e){function n(){return(n=Object(l.a)(u.a.mark((function n(){var r,a;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k()({url:"https://watchlist-cvs.herokuapp.com/watchlist/"+t.id,method:"PATCH",data:{rate:e}});case 2:if(!(200!==(r=n.sent).status&201!==r.status)){n.next=5;break}throw new Error("Error!");case 5:return n.next=7,r.data;case 7:return a=n.sent,n.abrupt("return",a);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}(function(){return n.apply(this,arguments)})(e).then((function(t){})).catch((function(t){console.log("error",t.message)}))}(e)}})})},I=n(206),A=n(208),L=(n(187),function(t){var e=function(e){!function(e){function n(){return(n=Object(l.a)(u.a.mark((function n(){var r,a;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k()({url:"https://watchlist-cvs.herokuapp.com/watchlist/"+t.id,method:"PATCH",data:{done:e}});case 2:if(!(200!==(r=n.sent).status&201!==r.status)){n.next=5;break}throw new Error("Error!");case 5:return n.next=7,r.data;case 7:return a=n.sent,n.abrupt("return",a);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}(function(){return n.apply(this,arguments)})(e).then((function(t){var e=t;console.log("Sucess",e)})).catch((function(t){console.log("error",t.message)}))}(e),t.setIsDone(e);var n=e?"has been marked as done":"is not marked as done anymore";I.b.success({content:"Watchlist entry #".concat(t.id," ").concat(n,"."),icon:Object(r.jsx)(m.a,{})})};return Object(r.jsxs)(r.Fragment,{children:[!t.isDone&&Object(r.jsx)(_.a,{title:"Mark video as viewed",children:Object(r.jsx)("div",{className:"Button Button__check",onClick:function(){return e(!0)},children:Object(r.jsx)(m.a,{})})}),t.isDone&&Object(r.jsx)(_.a,{title:"Unmark video as viewed",children:Object(r.jsx)("div",{className:"Button Button__uncheck",onClick:function(){return e(!1)},children:Object(r.jsx)(A.a,{})})})]})}),P=(n(192),function(t){var e=Object(a.useState)(!1),n=Object(f.a)(e,2),c=n[0],s=n[1],i=Object(a.useState)(t.title),o=Object(f.a)(i,2),d=o[0],j=o[1],h=d.length>35;return Object(r.jsxs)(r.Fragment,{children:[!c&&Object(r.jsx)("div",{onDoubleClick:function(t){s(!0)},children:h?"".concat(d.slice(0,35),"..."):d}),c&&Object(r.jsx)(_.a,{title:"Press enter to save your cahnges",children:Object(r.jsx)("div",{children:Object(r.jsx)(v.a,{size:"small",className:"title-edit-input",value:d,onChange:function(t){j(t.target.value)},onBlur:function(){j(t.title),s(!1)},onPressEnter:function(e){!function(e){function n(){return(n=Object(l.a)(u.a.mark((function n(){var r,a;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k()({url:"https://watchlist-cvs.herokuapp.com/watchlist/"+t.id,method:"PATCH",data:{title:e}});case 2:if(!(200!==(r=n.sent).status&201!==r.status)){n.next=5;break}throw new Error("Error!");case 5:return n.next=7,r.data;case 7:return a=n.sent,n.abrupt("return",a);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}(function(){return n.apply(this,arguments)})(e).then((function(t){var e=t;console.log("Sucess",e)})).catch((function(t){console.log("error",t.message)}))}(e.target.value),s(!1)}},"editTitle"+t.id)})})]})}),M=(n(193),function(t){var e=Object(a.useState)(t.entry.done),n=Object(f.a)(e,2),c=n[0],s=n[1],i="inner"+t.entry.id,o="img"+t.entry.id,u="done"+t.entry.id,l="https://img.youtube.com/vi/"+t.entry.link.split("&")[0].split("=")[1]+"/0.jpg",d=new Date(t.entry.added).toLocaleDateString();return Object(r.jsx)("div",{className:"entry-card",id:t.entry.id,children:Object(r.jsxs)("div",{className:"entry-card-inner",id:"inner"+t.entry.id,children:[Object(r.jsxs)("div",{className:"entry-card-front",onClick:function(){document.getElementById(i).style.transform="translateX(-100%) rotateY(-180deg)",c&&setTimeout((function(){document.getElementById(u).style.display="none"}),500),setTimeout((function(){document.getElementById(o).style.display="none"}),500)},children:[c&&Object(r.jsx)("div",{className:"entry-card-front__done",id:"done"+t.entry.id,children:Object(r.jsx)(m.a,{})}),Object(r.jsx)("img",{className:"entry-card__img",id:"img"+t.entry.id,alt:t.entry.title,src:l}),Object(r.jsx)("div",{className:"entry-card__meta",children:t.entry.title})]}),Object(r.jsxs)("div",{className:"entry-card-back",children:[Object(r.jsx)("div",{className:"entry-card-back-corner",onClick:function(){c&&(document.getElementById(u).style.display="block"),document.getElementById(o).style.display="block",document.getElementById(i).style.transform="rotateY(0deg)"},children:Object(r.jsx)(p.a,{})}),Object(r.jsxs)("div",{className:"entry-card-back__header",children:[Object(r.jsxs)("div",{className:"entry-card-back__header-added",children:["#",t.entry.id,", Added: ",d]}),Object(r.jsx)(P,{id:t.entry.id,title:t.entry.title})]}),Object(r.jsx)("div",{className:"entry-card-back__tags",children:Object(r.jsx)(E,{tags:t.entry.tags,id:t.entry.id})}),Object(r.jsxs)("div",{className:"entry-card-back__actions",children:[Object(r.jsx)(L,{id:t.entry.id,setIsDone:s,isDone:c}),Object(r.jsx)(T,{id:t.entry.id,rate:t.entry.rate}),Object(r.jsx)(S,{id:t.entry.id})]}),Object(r.jsx)("a",{href:t.entry.link,target:"_blank",children:Object(r.jsxs)("div",{className:"entry-card-back__play",children:[Object(r.jsx)(O.a,{}),"\xa0 Watch on Youtube"]})})]})]})})}),z=(n(194),function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={watchlistEntries:[],isLoading:!0},t}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.loadEntries()}},{key:"loadEntries",value:function(){var t=this;function e(){return(e=Object(l.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k()({url:"https://watchlist-cvs.herokuapp.com/watchlist",method:"GET"});case 2:if(!(200!==(e=t.sent).status&201!==e.status)){t.next=5;break}throw new Error("Error!");case 5:return t.next=7,e.data;case 7:return n=t.sent,t.abrupt("return",n);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().then((function(e){var n=e;t.setState({watchlistEntries:n}),t.setState({isLoading:!1})})).catch((function(t){console.log(t.message)}))}},{key:"render",value:function(){var t=this.state.watchlistEntries.map((function(t){t.link.split("&")[0].split("=")[1];return Object(r.jsx)(M,{entry:t},t.id)}));return Object(r.jsx)("div",{style:{margin:30},children:this.state.isLoading?Object(r.jsxs)("div",{className:"entries__spinner",children:[Object(r.jsx)("img",{src:"https://avatars0.githubusercontent.com/u/12551446",className:"Entries-loader ",alt:"Loading"}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{style:{fontSize:18},children:"Loading ... "})]}):Object(r.jsx)("div",{className:"Entries__Main",children:t})})}}]),n}(a.Component)),H=(n(93),n(195),function(){return Object(r.jsxs)("div",{className:"Footer__Main",children:["Watchlist by ",Object(r.jsx)("a",{href:"http://www.clementvanstaen.com",target:"_blank",children:"Cl\xe9ment van Staen"}),", 2020"]})});var W=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("header",{className:"App-header",children:Object(r.jsx)(z,{})}),Object(r.jsx)(H,{})]})};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(W,{})}),document.getElementById("root"))},93:function(t,e,n){}},[[196,1,2]]]);
//# sourceMappingURL=main.d32a53d2.chunk.js.map