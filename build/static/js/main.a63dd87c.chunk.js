(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{123:function(t,e,n){},124:function(t,e,n){},142:function(t,e,n){},182:function(t,e,n){},183:function(t,e,n){},184:function(t,e,n){},185:function(t,e,n){},186:function(t,e,n){},187:function(t,e,n){},188:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(0),c=n.n(r),s=n(18),i=n.n(s),o=(n(123),n(124),n(8)),u=n.n(o),l=n(23),d=n(89),j=n(90),h=n(117),m=n(112),b=n(21),f=n(198),p=n(200),x=n(201),O=n(113),g=n(190),v=n(194),k=n(24),y=n.n(k),w=n(195),A=(n(142),function(t){var e=Object(r.useState)(t.tags),n=Object(b.a)(e,2),c=n[0],s=n[1],i=Object(r.useState)(-1),o=Object(b.a)(i,2),d=o[0],j=o[1],h=Object(r.useState)(""),m=Object(b.a)(h,2),f=m[0],p=m[1],x=Object(r.useState)(!1),k=Object(b.a)(x,2),A=k[0],E=k[1],N=Object(r.useState)(""),B=Object(b.a)(N,2),C=B[0],_=B[1],D=function(e){function n(){return(n=Object(l.a)(u.a.mark((function e(n){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y()({url:"https://watchlist-cvs.herokuapp.com/watchlist/"+t.id,method:"PATCH",data:{tags:n}});case 2:if(!(200!==(a=e.sent).status&201!==a.status)){e.next=5;break}throw new Error("Error!");case 5:return e.next=7,a.data;case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(t){return n.apply(this,arguments)})(e).then((function(t){})).catch((function(t){console.log("error",t.message)}))},T=function(t){c[d]=f.toLowerCase(),s(c),D(c),j(-1),p(""),_(""),E(!1)},S=function(t){j(-1),p(""),_(""),E(!1)},L=function(t){p(t.target.value),_(""),E(!1)},I=c?c.map((function(t,e){var n=t.length>20;return d===e?Object(a.jsx)(g.a,{size:"small",className:"tag-input",value:f,onChange:L,onBlur:S,onPressEnter:T},e):Object(a.jsx)(v.a,{className:"edit-tag",color:"#2B3131",closable:!0,onClose:function(){return function(t){var e=c;e.splice(t,1),D(e),s(e)}(e)},children:Object(a.jsx)("span",{onDoubleClick:function(n){j(e),p(t),n.preventDefault()},children:n?"".concat(t.slice(0,20),"..."):t})},e)})):[];return Object(a.jsxs)("div",{className:"tags",children:[I,A&&Object(a.jsx)(g.a,{type:"text",size:"small",className:"tag-input",value:C,onChange:function(t){_(t.target.value)},onBlur:function(){_(""),E(!1),j(-1),p("")},onPressEnter:function(t){var e=t.target.value.toLowerCase();if(void 0===c||null===c){var n=[e];D(n),s(n)}else if(e&&-1===c.indexOf(e)){var a=[].concat(Object(O.a)(c),[e]);D(a),s(a)}_(""),E(!1),j(-1),p("")}}),!A&&Object(a.jsxs)(v.a,{className:"site-tag-plus",onClick:function(){E(!0),j(-1),p("")},children:[Object(a.jsx)(w.a,{})," New Tag"]})]})}),E=n(191),N=n(64),B=n(197),C=n(196),_=function(t){var e=c.a.useState(!1),n=Object(b.a)(e,2),r=n[0],s=n[1],i=function(t){(function(){var t=Object(l.a)(u.a.mark((function t(e){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y()({url:"https://watchlist-cvs.herokuapp.com/watchlist/"+e,method:"DELETE"});case 2:if(!(200!==(n=t.sent).status&201!==n.status)){t.next=5;break}throw new Error("Error!");case 5:return t.next=7,n.data;case 7:return a=t.sent,t.abrupt("return",a);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}})()(t).then((function(t){console.log(t)})).catch((function(t){console.log(t.message)}))};return Object(a.jsx)(N.a,{title:"Delete video from the list",children:Object(a.jsx)(B.a,{title:"Are you sure? This is forever.",placement:"bottom",visible:r,onConfirm:function(e){s(!1),i(t.id),E.a.error({message:"Deleted!",description:"Watchlist entry #".concat(t.id," has been deleted."),icon:Object(a.jsx)(C.a,{}),placement:"bottomRight"}),document.getElementById(t.id).style.display="none"},onCancel:function(){s(!1)},okText:"Yes",cancelText:"No",children:Object(a.jsx)("div",{className:"Button Button__delete",onClick:function(){s(!0)},children:Object(a.jsx)(C.a,{})})})})},D=n(192),T=function(t){return Object(a.jsx)(N.a,{title:"Delete video from the list",children:Object(a.jsx)(D.a,{defaultValue:t.rate,onChange:function(e){!function(e){function n(){return(n=Object(l.a)(u.a.mark((function n(){var a,r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y()({url:"https://watchlist-cvs.herokuapp.com/watchlist/"+t.id,method:"PATCH",data:{rate:e}});case 2:if(!(200!==(a=n.sent).status&201!==a.status)){n.next=5;break}throw new Error("Error!");case 5:return n.next=7,a.data;case 7:return r=n.sent,n.abrupt("return",r);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}(function(){return n.apply(this,arguments)})(e).then((function(t){})).catch((function(t){console.log("error",t.message)}))}(e),E.a.success({message:"Rating saved!",description:"Your ".concat(e,"-star rating of entry #").concat(t.id," has been successfully saved."),placement:"bottomRight"})}})})},S=n(199),L=(n(182),function(t){var e=function(e){!function(e){function n(){return(n=Object(l.a)(u.a.mark((function n(){var a,r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y()({url:"https://watchlist-cvs.herokuapp.com/watchlist/"+t.id,method:"PATCH",data:{done:e}});case 2:if(!(200!==(a=n.sent).status&201!==a.status)){n.next=5;break}throw new Error("Error!");case 5:return n.next=7,a.data;case 7:return r=n.sent,n.abrupt("return",r);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}(function(){return n.apply(this,arguments)})(e).then((function(t){var e=t;console.log("Sucess",e)})).catch((function(t){console.log("error",t.message)}))}(e),t.setIsDone(e);var n=e?"Watched! Let's forget it for now.":"Let me come back to this again ...",a=e?"has been marked as done":"is not marked as done anymore";E.a.success({message:n,description:"Watchlist entry #".concat(t.id," ").concat(a,"."),placement:"bottomRight"})};return Object(a.jsxs)(a.Fragment,{children:[!t.isDone&&Object(a.jsx)(N.a,{title:"Mark video as viewed",children:Object(a.jsx)("div",{className:"Button Button__check",onClick:function(){return e(!0)},children:Object(a.jsx)(f.a,{})})}),t.isDone&&Object(a.jsx)(N.a,{title:"Unmark video as viewed",children:Object(a.jsx)("div",{className:"Button Button__uncheck",onClick:function(){return e(!1)},children:Object(a.jsx)(S.a,{})})})]})}),I=(n(183),function(t){var e=Object(r.useState)(!1),n=Object(b.a)(e,2),c=n[0],s=n[1],i=Object(r.useState)(t.title),o=Object(b.a)(i,2),d=o[0],j=o[1],h=d.length>36;return Object(a.jsxs)(a.Fragment,{children:[!c&&Object(a.jsx)("div",{onDoubleClick:function(t){s(!0)},children:h?"".concat(d.slice(0,36),"..."):d}),c&&Object(a.jsx)(N.a,{title:"Press enter to save your cahnges",children:Object(a.jsx)("div",{children:Object(a.jsx)(g.a,{size:"small",className:"title-edit-input",value:d,onChange:function(t){j(t.target.value)},onBlur:function(){j(t.title),s(!1)},onPressEnter:function(e){!function(e){function n(){return(n=Object(l.a)(u.a.mark((function n(){var a,r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y()({url:"https://watchlist-cvs.herokuapp.com/watchlist/"+t.id,method:"PATCH",data:{title:e}});case 2:if(!(200!==(a=n.sent).status&201!==a.status)){n.next=5;break}throw new Error("Error!");case 5:return n.next=7,a.data;case 7:return r=n.sent,n.abrupt("return",r);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}(function(){return n.apply(this,arguments)})(e).then((function(t){})).catch((function(t){console.log("error",t.message)}))}(e.target.value),s(!1)}},"editTitle"+t.id)})})]})}),Y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABhklEQVRoge3ZsUsCYRjH8d/jhaQmlkuLf0FBU3SGBGpDm1vQ1NAQNNQU1ChNQZAEDTU1NLW3ieFwELa1tNRYQwRJ2ImEd09Di0SJD93xGjyf8e7e532/cDcdoJT610i6oJ23M2xxhYElAMmAztEipmrXwm6q2riXLBQFtPN2xrf4FkBadLzBvUbYmolfXT8NuiAimc4WVxDe4QEg7cM7lCyQBXy9NuEi2R6iAAT3zveTkjwsDRg6GmCaBpimAaZpgGkaYJoGmKYBpmmAaRpgmgaYpgGmaYBpGmBaWAEM4NInWiCfZkE4B+CFsdFIwPM+QLhgpv1krXHXc331LT+/Z1n+JsDrAEaD2lD0g+N9cY5/udUC6Czi4SBebzz2n2FPMvEGAVtgTPz0zFjtZuBz/TXgmQknXid6NO44Tcmsl1wuGRvtrgG8DSDTey/0ACI8MNNxwoudUr3ekcz4jpeno24zsQLGDoApQBYg4hZtxy1kS1wO/uPnMiJuIVtyi7YT9Gyl1BD7BGkmaI4lwsjMAAAAAElFTkSuQmCC",G=(n(184),function(t){var e=function(e){t.setIsBookmarked(e),function(e){function n(){return(n=Object(l.a)(u.a.mark((function n(){var a,r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y()({url:"https://watchlist-cvs.herokuapp.com/watchlist/"+t.id,method:"PATCH",data:{bookmark:e}});case 2:if(!(200!==(a=n.sent).status&201!==a.status)){n.next=5;break}throw new Error("Error!");case 5:return n.next=7,a.data;case 7:return r=n.sent,n.abrupt("return",r);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}(function(){return n.apply(this,arguments)})(e).then((function(t){var e=t;console.log("Sucess",e)})).catch((function(t){console.log("error",t.message)}))}(e)},n=t.isBookmarked,r=t.front;return Object(a.jsx)("div",{className:"bookmark",id:"bookmark",children:r?n&&Object(a.jsx)("img",{className:"bookmark__img",src:Y,alt:Y}):n?Object(a.jsx)(N.a,{placement:"right",title:"Delete the bookmark.",children:Object(a.jsx)("img",{onClick:function(){return e(!1)},className:"bookmark__img clickable",src:Y,alt:Y})}):Object(a.jsx)(N.a,{placement:"right",title:"Bookmark this.",children:Object(a.jsx)("img",{onClick:function(){return e(!0)},className:"bookmark__img clickable grey",src:Y,alt:Y})})})}),Q=(n(185),function(t){var e=Object(r.useState)(t.entry.done),n=Object(b.a)(e,2),c=n[0],s=n[1],i=Object(r.useState)(t.entry.bookmark),o=Object(b.a)(i,2),u=o[0],l=o[1],d=Object(r.useState)(t.entry.bookmark),j=Object(b.a)(d,2),h=j[0],m=j[1],O="inner"+t.entry.id,g="img"+t.entry.id,v="done"+t.entry.id,k="https://img.youtube.com/vi/"+t.entry.link.split("&")[0].split("=")[1]+"/0.jpg",y=new Date(t.entry.added).toLocaleDateString();return Object(a.jsx)("div",{className:"entry-card",id:t.entry.id,children:Object(a.jsxs)("div",{className:"entry-card-inner",id:"inner"+t.entry.id,children:[Object(a.jsxs)("div",{className:"entry-card-front",onClick:function(){document.getElementById(O).style.transform="translateX(-100%) rotateY(-180deg)",c&&setTimeout((function(){document.getElementById(v).style.display="none"}),500),setTimeout((function(){document.getElementById(g).style.display="none"}),500),m(!1)},children:[h&&Object(a.jsx)(G,{id:t.entry.id,setIsBookmarked:l,isBookmarked:u,front:!0}),c&&Object(a.jsx)("div",{className:"entry-card-front__done",id:"done"+t.entry.id,children:Object(a.jsx)(f.a,{})}),Object(a.jsx)("img",{className:"entry-card__img",id:"img"+t.entry.id,alt:t.entry.title,src:k}),Object(a.jsx)("div",{className:"entry-card__meta",children:t.entry.title})]}),Object(a.jsxs)("div",{className:"entry-card-back",children:[Object(a.jsx)(G,{id:t.entry.id,setIsBookmarked:l,isBookmarked:u,front:!1}),Object(a.jsx)("div",{className:"entry-card-back-corner",onClick:function(){c&&(document.getElementById(v).style.display="block"),document.getElementById(g).style.display="block",document.getElementById(O).style.transform="rotateY(0deg)",setTimeout((function(){m(u)}),250)},children:Object(a.jsx)(p.a,{})}),Object(a.jsxs)("div",{className:"entry-card-back__header",children:[Object(a.jsxs)("div",{className:"entry-card-back__header-added",children:["#",t.entry.id,", Added: ",y]}),Object(a.jsx)(I,{id:t.entry.id,title:t.entry.title})]}),Object(a.jsx)("div",{className:"entry-card-back__tags",children:Object(a.jsx)(A,{tags:t.entry.tags,id:t.entry.id})}),Object(a.jsxs)("div",{className:"entry-card-back__actions",children:[Object(a.jsx)(L,{id:t.entry.id,setIsDone:s,isDone:c}),Object(a.jsx)(T,{id:t.entry.id,rate:t.entry.rate}),Object(a.jsx)(_,{id:t.entry.id})]}),Object(a.jsx)("a",{href:t.entry.link,target:"_blank",children:Object(a.jsxs)("div",{className:"entry-card-back__play",children:[Object(a.jsx)(x.a,{}),"\xa0 Watch on Youtube"]})})]})]})})}),z=(n(186),function(t){Object(h.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={watchlistEntries:[],isLoading:!0},t}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.loadEntries()}},{key:"loadEntries",value:function(){var t=this;function e(){return(e=Object(l.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y()({url:"https://watchlist-cvs.herokuapp.com/watchlist",method:"GET"});case 2:if(!(200!==(e=t.sent).status&201!==e.status)){t.next=5;break}throw new Error("Error!");case 5:return t.next=7,e.data;case 7:return n=t.sent,t.abrupt("return",n);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().then((function(e){var n=e;t.setState({watchlistEntries:n}),t.setState({isLoading:!1})})).catch((function(t){console.log(t.message)}))}},{key:"render",value:function(){var t=this.state.watchlistEntries.map((function(t){t.link.split("&")[0].split("=")[1];return Object(a.jsx)(Q,{entry:t},t.id)}));return Object(a.jsx)("div",{style:{margin:30},children:this.state.isLoading?Object(a.jsxs)("div",{className:"entries__spinner",children:[Object(a.jsx)("img",{src:"https://avatars0.githubusercontent.com/u/12551446",className:"Entries-loader ",alt:"Loading"}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{style:{fontSize:18},children:"Loading ... "})]}):Object(a.jsx)("div",{className:"Entries__Main",children:t})})}}]),n}(r.Component)),P=(n(88),n(187),function(){return Object(a.jsxs)("div",{className:"Footer__Main",children:["Watchlist by ",Object(a.jsx)("a",{href:"http://www.clementvanstaen.com",target:"_blank",children:"Cl\xe9ment van Staen"}),", 2020"]})});var M=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{className:"App-header",children:Object(a.jsx)(z,{})}),Object(a.jsx)(P,{})]})};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(M,{})}),document.getElementById("root"))},88:function(t,e,n){}},[[188,1,2]]]);
//# sourceMappingURL=main.a63dd87c.chunk.js.map