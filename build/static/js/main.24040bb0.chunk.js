(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{125:function(e,t,n){},126:function(e,t,n){},144:function(e,t,n){},184:function(e,t,n){},185:function(e,t,n){},186:function(e,t,n){},187:function(e,t,n){},188:function(e,t,n){},189:function(e,t,n){},190:function(e,t,n){},191:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),s=n.n(a),c=n(23),i=n.n(c),o=(n(125),n(12)),l=(n(126),n(11)),u=n.n(l),d=n(20),A=n(92),j=n(93),b=n(119),m=n(114),h=n(206),g=n(202),f=n(204),v=n(205),O=n(44),p=n(193),x=n(198),w=n(21),k=n.n(w),E=n(200),B=(n(144),function(e){var t=Object(a.useState)(e.tags),n=Object(o.a)(t,2),s=n[0],c=n[1],i=Object(a.useState)(-1),l=Object(o.a)(i,2),A=l[0],j=l[1],b=Object(a.useState)(""),m=Object(o.a)(b,2),h=m[0],g=m[1],f=Object(a.useState)(!1),v=Object(o.a)(f,2),w=v[0],B=v[1],N=Object(a.useState)(""),y=Object(o.a)(N,2),C=y[0],I=y[1],D=function(t){function n(){return(n=Object(d.a)(u.a.mark((function t(n){var r,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k()({url:"https://watchlist-cvs.herokuapp.com/watchlist/"+e.id,method:"PATCH",data:{tags:n}});case 2:if(!(200!==(r=t.sent).status&201!==r.status)){t.next=5;break}throw new Error("Error!");case 5:return t.next=7,r.data;case 7:return a=t.sent,t.abrupt("return",a);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(function(e){return n.apply(this,arguments)})(t).then((function(e){})).catch((function(e){console.log("error",e.message)}))},Q=function(e){s[A]=h.toLowerCase(),c(s),D(s),j(-1),g(""),I(""),B(!1)},R=function(e){j(-1),g(""),I(""),B(!1)},U=function(e){g(e.target.value),I(""),B(!1)},T=s?s.map((function(e,t){var n=e.length>20;return A===t?Object(r.jsx)(p.a,{size:"small",className:"tag-input",value:h,onChange:U,onBlur:R,onPressEnter:Q},t):Object(r.jsx)(x.a,{className:"edit-tag",color:"#1A2626",closable:!0,onClose:function(){return function(e){var t=s;t.splice(e,1),D(t),c(t)}(t)},children:Object(r.jsx)("span",{onDoubleClick:function(n){j(t),g(e),n.preventDefault()},children:n?"".concat(e.slice(0,20),"..."):e})},t)})):[];return Object(r.jsxs)("div",{className:"tags",children:[T,w&&Object(r.jsx)(p.a,{type:"text",size:"small",className:"tag-input",value:C,onChange:function(e){I(e.target.value)},onBlur:function(){I(""),B(!1),j(-1),g("")},onPressEnter:function(e){var t=e.target.value.toLowerCase();if(void 0===s||null===s){var n=[t];D(n),c(n)}else if(t&&-1===s.indexOf(t)){var r=[].concat(Object(O.a)(s),[t]);D(r),c(r)}I(""),B(!1),j(-1),g("")}}),!w&&Object(r.jsxs)(x.a,{className:"site-tag-plus",onClick:function(){B(!0),j(-1),g("")},children:[Object(r.jsx)(E.a,{})," New Tag"]})]})}),N=n(194),y=n(69),C=n(199),I=n(201),D=function(e){var t=s.a.useState(!1),n=Object(o.a)(t,2),a=n[0],c=n[1],i=function(t){(function(){var e=Object(d.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k()({url:"https://watchlist-cvs.herokuapp.com/watchlist/"+t,method:"DELETE"});case 2:if(!(200!==(n=e.sent).status&201!==n.status)){e.next=5;break}throw new Error("Error!");case 5:return e.next=7,n.data;case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(t).then((function(t){N.a.error({message:"Deleted!",description:"Watchlist entry #".concat(e.id," has been deleted."),icon:Object(r.jsx)(I.a,{}),placement:"bottomRight"})})).catch((function(e){console.log(e.message),N.a.error({message:"Error!",description:e.message,icon:Object(r.jsx)(I.a,{}),placement:"bottomRight"})}))};return Object(r.jsx)(y.a,{title:"Delete video from the list",children:Object(r.jsx)(C.a,{title:"Are you sure? This is forever.",placement:"bottom",visible:a,onConfirm:function(t){c(!1),i(e.id),document.getElementById(e.id).style.display="none"},onCancel:function(){c(!1)},okText:"Yes",cancelText:"No",children:Object(r.jsx)("div",{className:"Button Button__delete",onClick:function(){c(!0)},children:Object(r.jsx)(I.a,{})})})})},Q=n(195),R=function(e){return Object(r.jsx)(y.a,{title:"Delete video from the list",children:Object(r.jsx)(Q.a,{defaultValue:e.rate,onChange:function(t){!function(t){function n(){return(n=Object(d.a)(u.a.mark((function n(){var r,a;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k()({url:"https://watchlist-cvs.herokuapp.com/watchlist/"+e.id,method:"PATCH",data:{rate:t}});case 2:if(!(200!==(r=n.sent).status&201!==r.status)){n.next=5;break}throw new Error("Error!");case 5:return n.next=7,r.data;case 7:return a=n.sent,n.abrupt("return",a);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}(function(){return n.apply(this,arguments)})(t).then((function(n){N.a.success({message:"Rating saved!",description:"Your ".concat(t,"-star rating of entry #").concat(e.id," has been successfully saved."),placement:"bottomRight"})})).catch((function(e){console.log("error",e.message),N.a.error({message:"Error!",description:e.message,placement:"bottomRight"})}))}(t)}})})},U=n(203),T=(n(184),function(e){var t=function(t){!function(t){function n(){return(n=Object(d.a)(u.a.mark((function n(){var r,a;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k()({url:"https://watchlist-cvs.herokuapp.com/watchlist/"+e.id,method:"PATCH",data:{done:t}});case 2:if(!(200!==(r=n.sent).status&201!==r.status)){n.next=5;break}throw new Error("Error!");case 5:return n.next=7,r.data;case 7:return a=n.sent,n.abrupt("return",a);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}(function(){return n.apply(this,arguments)})(t).then((function(n){var r=n;console.log("Sucess",r);var a=t?"Watched!":"Let me come back to this again ...",s=t?"has been marked as done":"is not marked as done anymore";N.a.success({message:a,description:"Watchlist entry #".concat(e.id," ").concat(s,"."),placement:"bottomRight"})})).catch((function(e){console.log("error",e.message),N.a.error({message:"Error",description:e.message,placement:"bottomRight"})}))}(t),e.setIsDone(t)};return Object(r.jsxs)(r.Fragment,{children:[!e.isDone&&Object(r.jsx)(y.a,{title:"Mark video as viewed",children:Object(r.jsx)("div",{className:"Button Button__check",onClick:function(){return t(!0)},children:Object(r.jsx)(g.a,{})})}),e.isDone&&Object(r.jsx)(y.a,{title:"Unmark video as viewed",children:Object(r.jsx)("div",{className:"Button Button__uncheck",onClick:function(){return t(!1)},children:Object(r.jsx)(U.a,{})})})]})}),L=(n(185),function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),s=n[0],c=n[1],i=Object(a.useState)(e.title),l=Object(o.a)(i,2),A=l[0],j=l[1],b=A.length>36;return Object(r.jsxs)(r.Fragment,{children:[!s&&Object(r.jsx)("div",{onDoubleClick:function(e){c(!0)},children:b?"".concat(A.slice(0,36),"..."):A}),s&&Object(r.jsx)(y.a,{title:"Press enter to save your cahnges",children:Object(r.jsx)("div",{children:Object(r.jsx)(p.a,{size:"small",className:"title-edit-input",value:A,onChange:function(e){j(e.target.value)},onBlur:function(){j(e.title),c(!1)},onPressEnter:function(t){!function(t){function n(){return(n=Object(d.a)(u.a.mark((function n(){var r,a;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k()({url:"https://watchlist-cvs.herokuapp.com/watchlist/"+e.id,method:"PATCH",data:{title:t}});case 2:if(!(200!==(r=n.sent).status&201!==r.status)){n.next=5;break}throw new Error("Error!");case 5:return n.next=7,r.data;case 7:return a=n.sent,n.abrupt("return",a);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}(function(){return n.apply(this,arguments)})(t).then((function(e){})).catch((function(e){console.log("error",e.message)}))}(t.target.value),c(!1)}},"editTitle"+e.id)})})]})}),F="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABhklEQVRoge3ZsUsCYRjH8d/jhaQmlkuLf0FBU3SGBGpDm1vQ1NAQNNQU1ChNQZAEDTU1NLW3ieFwELa1tNRYQwRJ2ImEd09Di0SJD93xGjyf8e7e532/cDcdoJT610i6oJ23M2xxhYElAMmAztEipmrXwm6q2riXLBQFtPN2xrf4FkBadLzBvUbYmolfXT8NuiAimc4WVxDe4QEg7cM7lCyQBXy9NuEi2R6iAAT3zveTkjwsDRg6GmCaBpimAaZpgGkaYJoGmKYBpmmAaRpgmgaYpgGmaYBpGmBaWAEM4NInWiCfZkE4B+CFsdFIwPM+QLhgpv1krXHXc331LT+/Z1n+JsDrAEaD2lD0g+N9cY5/udUC6Czi4SBebzz2n2FPMvEGAVtgTPz0zFjtZuBz/TXgmQknXid6NO44Tcmsl1wuGRvtrgG8DSDTey/0ACI8MNNxwoudUr3ekcz4jpeno24zsQLGDoApQBYg4hZtxy1kS1wO/uPnMiJuIVtyi7YT9Gyl1BD7BGkmaI4lwsjMAAAAAElFTkSuQmCC",G=(n(186),function(e){var t=function(t){e.setIsBookmarked(t),function(t){function n(){return(n=Object(d.a)(u.a.mark((function t(n){var r,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k()({url:"https://watchlist-cvs.herokuapp.com/watchlist/"+e.id,method:"PATCH",data:{bookmark:n}});case 2:if(!(200!==(r=t.sent).status&201!==r.status)){t.next=5;break}throw new Error("Error!");case 5:return t.next=7,r.data;case 7:return a=t.sent,t.abrupt("return",a);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(function(e){return n.apply(this,arguments)})(t).then((function(n){var r=t?"Bookmarked!":"Bookmarked deleted",a=t?"will appears with a bookmark from now on.":"is not bookmarked anymore";N.a.success({message:r,description:"Watchlist entry #".concat(e.id," ").concat(a,"."),placement:"bottomRight"})})).catch((function(e){console.log("error",e.message),N.a.error({message:messageTitle,description:e.message,placement:"bottomRight"})}))}(t)},n=e.isBookmarked,a=e.front;return Object(r.jsx)("div",{className:"bookmark",id:"bookmark",children:a?n&&Object(r.jsx)("img",{className:"bookmark__img",src:F,alt:F}):n?Object(r.jsx)(y.a,{placement:"right",title:"Delete the bookmark.",children:Object(r.jsx)("img",{onClick:function(){return t(!1)},className:"bookmark__img clickable",src:F,alt:F})}):Object(r.jsx)(y.a,{placement:"right",title:"Bookmark this.",children:Object(r.jsx)("img",{onClick:function(){return t(!0)},className:"bookmark__img clickable grey",src:F,alt:F})})})}),X=(n(187),function(e){var t=Object(a.useState)(e.entry.done),n=Object(o.a)(t,2),s=n[0],c=n[1],i=Object(a.useState)(e.entry.bookmark),l=Object(o.a)(i,2),u=l[0],d=l[1],A=Object(a.useState)(e.entry.bookmark),j=Object(o.a)(A,2),b=j[0],m=j[1],h="inner"+e.entry.id,O="img"+e.entry.id,p="done"+e.entry.id,x="https://img.youtube.com/vi/"+e.entry.link.split("&")[0].split("=")[1]+"/0.jpg",w=new Date(e.entry.added).toLocaleDateString();return Object(r.jsx)("div",{className:"entry-card",id:e.entry.id,children:Object(r.jsxs)("div",{className:"entry-card-inner",id:"inner"+e.entry.id,children:[Object(r.jsxs)("div",{className:"entry-card-front",onClick:function(){document.getElementById(h).style.transform="translateX(-100%) rotateY(-180deg)",s&&setTimeout((function(){document.getElementById(p).style.display="none"}),500),u&&setTimeout((function(){m(!1)}),200),setTimeout((function(){document.getElementById(O).style.display="none"}),500)},children:[b&&Object(r.jsx)(G,{id:e.entry.id,setIsBookmarked:d,isBookmarked:u,front:!0}),s&&Object(r.jsx)("div",{className:"entry-card-front__done",id:"done"+e.entry.id,children:Object(r.jsx)(g.a,{})}),Object(r.jsx)("img",{className:"entry-card__img",id:"img"+e.entry.id,alt:e.entry.title,src:x}),Object(r.jsx)("div",{className:"entry-card__meta",children:e.entry.title})]}),Object(r.jsxs)("div",{className:"entry-card-back",children:[Object(r.jsx)(G,{id:e.entry.id,setIsBookmarked:d,isBookmarked:u,front:!1}),Object(r.jsx)("div",{className:"entry-card-back-corner",onClick:function(){s&&(document.getElementById(p).style.display="block"),document.getElementById(O).style.display="block",document.getElementById(h).style.transform="rotateY(0deg)",setTimeout((function(){m(u)}),250)},children:Object(r.jsx)(f.a,{})}),Object(r.jsxs)("div",{className:"entry-card-back__header",children:[Object(r.jsxs)("div",{className:"entry-card-back__header-added",children:["#",e.entry.id,", Added: ",w]}),Object(r.jsx)(L,{id:e.entry.id,title:e.entry.title})]}),Object(r.jsx)("div",{className:"entry-card-back__tags",children:Object(r.jsx)(B,{tags:e.entry.tags,id:e.entry.id})}),Object(r.jsxs)("div",{className:"entry-card-back__actions",children:[Object(r.jsx)(T,{id:e.entry.id,setIsDone:c,isDone:s}),Object(r.jsx)(R,{id:e.entry.id,rate:e.entry.rate}),Object(r.jsx)(D,{id:e.entry.id})]}),Object(r.jsx)("a",{href:e.entry.link,target:"_blank",children:Object(r.jsxs)("div",{className:"entry-card-back__play",children:[Object(r.jsx)(v.a,{}),"\xa0 Watch on Youtube"]})})]})]})})}),V=(n(91),function(e){var t=e.filters,n=t?t.map((function(n,a){return Object(r.jsx)(x.a,{className:"filter-tag",color:"#1A2626",closable:!0,onClose:function(){return function(n){var r=t;r.splice(n,1),e.setFilters(Object(O.a)(r))}(a)},children:n},a)})):[];return n.length>0&&Object(r.jsx)("div",{style:{marginTop:20},children:0!=t.length&&Object(r.jsxs)("div",{className:"filter",children:[n," (",e.results," results)"]})})}),Y=(n(188),function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var r;return Object(A.a)(this,n),(r=t.call(this,e)).state={watchlistEntries:[],isLoading:!0,isError:!1},r}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.loadEntries()}},{key:"loadEntries",value:function(){var e=this;function t(){return(t=Object(d.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k()({url:"https://watchlist-cvs.herokuapp.com/watchlist",method:"GET"});case 2:if(!(200!==(t=e.sent).status&201!==t.status)){e.next=5;break}throw new Error("Error!");case 5:return e.next=7,t.data;case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return t.apply(this,arguments)})().then((function(t){var n=t;e.setState({watchlistEntries:n}),e.setState({isLoading:!1})})).catch((function(t){e.setState({isError:!0,isLoading:!1}),console.log(t.message)}))}},{key:"render",value:function(){var e=this,t=this.state.watchlistEntries.map((function(t){return e.props.filters.every((function(e){return t.tags.includes(e)}))?Object(r.jsx)(X,{entry:t},t.id):null})),n=t.filter((function(e){return null!=e}));return Object(r.jsx)("div",{style:{margin:10,width:"100%"},children:this.state.isLoading?Object(r.jsx)("div",{className:"Entries__spinner",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("img",{src:"https://avatars0.githubusercontent.com/u/12551446",className:"loader",alt:"Loading"}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{style:{fontSize:18,marginTop:10,color:"white"},children:"Loading ... "})]})}):this.state.isError?Object(r.jsx)("div",{className:"Entries__spinner",children:Object(r.jsxs)("div",{children:[Object(r.jsx)(h.a,{className:"error__icon"}),Object(r.jsx)("img",{src:"https://avatars0.githubusercontent.com/u/12551446",className:"error",alt:"Error"}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{style:{fontSize:18,marginTop:10,color:"white"},children:"Error connecting to the backend! "})]})}):Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"Entries__Filter",children:Object(r.jsx)(V,{results:n.length,filters:this.props.filters,setFilters:this.props.setFilters})}),Object(r.jsx)("div",{className:"Entries__Main",children:t})]})})}}]),n}(a.Component)),M=(n(189),function(e){var t=e.isFilterVisible?"nav-link nav-link-active":"nav-link";return Object(r.jsx)("div",{children:Object(r.jsx)("nav",{className:"navbar",children:Object(r.jsxs)("ul",{className:"navbar-nav",children:[Object(r.jsx)("li",{className:"logo",children:Object(r.jsxs)("div",{className:"nav-logo",children:[Object(r.jsx)("img",{className:"nav-icon",src:"data:image/png;base64,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",alt:"Sort"}),Object(r.jsx)(y.a,{placement:"right",title:"Visit the author's page.",children:Object(r.jsx)("a",{href:"http://www.clementvanstaen.com",target:"_blank",children:Object(r.jsx)("img",{src:"https://avatars0.githubusercontent.com/u/12551446",className:"link-text logo-text",alt:"Loading"})})})]})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(y.a,{placement:"right",title:"Add a link",children:Object(r.jsx)("a",{href:"#",className:"nav-link",children:Object(r.jsx)("img",{className:"nav-icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABmJLR0QA/wD/AP+gvaeTAAAB8klEQVR4nO3bTWrCQBjG8XfUXKHQdSFYsEcwi6TgbaxdeIoumuu0EKEtnkChJei6oDeomnQl2ED9evJOwvj81jUjw+s/Q6oiRERERER0MoO82E/ivKw3UoKvppeHn8Hjt81FGzYXU9berMzo9v352uaipUxgGg2g66AKnwSrk+jSBEouMhWR9nplXm9enq5srKmygX4Sj/1R/KFx7X2y9SrKRaZGpNNoeYmNTdSZQCOZ5Mb6DWbeGy5sb6LKBqbhoJtGD4HGtQ+Z94aL3GuEImZiRDrNlvemeWNxqoFbs6C/zDwTiZiJKN+dnWrgrlnQX27WP/faNxanGlhko4nONbBIu4lONrBIs4nONrBIq4lON7BIo4mtst7crjQcdDWue8ipT4e2mygid+eueREN3MeIdJDXq0ygn8RjMZLZmsRznwaV8TzzohqowakGVuHiG4i6mHOglto30E/ivGb/vPqDDQSxgSA2EFT7BtYdGwhiA0FsIIgNBFXawFMOyMf8bRXf0WEDQZU+DzxmYuryDbD/sIEgngNBbCCI50AQGwhiA0FsIIgNBKl8hMtsYF0P0FtsIIgNBLGBIJ4DQWwgiA0EsYEgNhDEBoLYQBAbCGIDQWwgiA0EsYEgNhDEBoLYQFApE1jnnyFo4wQSEREREZF9vwBUHRKpAUAuAAAAAElFTkSuQmCC",alt:"Sort"})})})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(y.a,{placement:"right",title:"Sort results",children:Object(r.jsx)("a",{href:"#",className:"nav-link",children:Object(r.jsx)("img",{className:"nav-icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABmJLR0QA/wD/AP+gvaeTAAADEklEQVR4nO2cwW7TQBCG/3WzfYNYcE7lFtGeORFUB9QzBx6iQYrCoU+RQ61K5CWQuAfVqQhUcG8QVZReAbVvgB0vB1hhmZY6mXW9ceY7VYky2X7amYmymQUYhmEYhmEYhkhj0HMbg55b9jruEmEqUGPQc52aDAFAScefNjtXpmLbjGMiiJYngG0BbIsoGW6MjuomYpvCC4NTbxh8MB2XLDAtTz+mJVqVzgIJlFDmwxJIy1PAWEvUfytgnMRR62Lv4NLMcu1j4R24MTqqr9XWj/9IO1935DP9nJKOD4gzAWyv1eT7hyev7xlZrYUsJHBjdFR3IhUCagfAuXTk7pfdlz/089Nm5yqRogWIMwBbURKdPBgd3je1aJuYW+Bt8jRZibNIDKsocS6BjUHPFVEyBNSOAsazOHpynTzNtNm5msU/nypgDGArjsS7shpL6V042zDyNoeLvYPLJI5aurE4NRmWIrHMLpw3bb0wUAAwaXX/iZuNsSaV/7X56jv1HyibXDvQiZMXedP2JrLpPIvF87lXayG5BE78bl9Atamf6XQ6C6j2xO/2F41TWbwwUDqNbaP0JrL0FNREaqYD2srE7z4uIu7q7MCCWBmBXAOpcA2kwTXQUlZGoBcGn73j4JPpuCuTwgAemTtC+8vK7MCiYIFEWCARFkiEBRJhgURYIBEWSIQFEmGBRFggERZIhAUSYYFEWCARFkiEBRIx+420wMciTr5sxqjAok6+bIZTmIhRgUWd/tuM2R1Y0Om/zXANJMI1kAjXQCJcAxlgMzzcv232JM/vtxuDnrsZHu7P895LXwO9YdBWEH3qAI8eJFIQfW8YtPO+bukFJjXnTXoydJF5vOzkqRTybd7XLn0Toc7jzTv/l6USTWTRebxF5//SFPCLufL43zxedo4v7/zfbSx9DUyTd0bZlDygYjtQc91OnEXiGwAk0nFNyQMqKhC4uwsxjAr0wuAUAoktXypcdyUL8FuiqdtEKtGFbyLdnfVjpq9iqWwKp0ntRDGLI7/K99gUxipejMYwDMMwDMMwTFX5BZVLx/Uf+Nm5AAAAAElFTkSuQmCC",alt:"Sort"})})})}),Object(r.jsx)("li",{className:"nav-item",onClick:function(){e.isFilterVisible?e.setIsFilterVisible(!1):e.setIsFilterVisible(!0)},children:Object(r.jsx)(y.a,{placement:"right",title:"Filter results",children:Object(r.jsx)("a",{href:"#",className:t,children:Object(r.jsx)("img",{className:"nav-icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABmJLR0QA/wD/AP+gvaeTAAAB0klEQVR4nO3bMU4CQRQG4H+I2IpiIwdAE28AsRHPYIceQWwMsQH1AK5HgNI7rB16AhNDbKGShBqSHRuIxqjjmp284e3/VexQzOQxkGH+PICIiIiIiIgoX4zUxPv33fXZ9saNSUwTBjuL4TGAfnEy7Twfd2dSa0tjTWriebl0bSwuvnyEFQDt+damBXApsrCUCoJzNwEgsbY2bLTMsNEyBZg6AMDYU8F1pSJZwAoAvB6dPy0HXhpnj5/fWwWSBVThz7+B1TiyPhfyy7wDGCTDw9aBxLNL+DvQIIE1Vuw5VNU4st/t6p/GQxX+DgycZAHHALAX39WWA7sPt/XFy5HIiv5B7CANoA+gncAOqnEEALDLL65BT2xVKYkVsDiZdublEgCc4OPcN4JBr/g2vZJaFxERERERUfjEUrmsSaV8kpcJmZJK+TTdB4qkfJoKKJLyaSqgiOBTuazlL5XLmpZULmtSKV/+dmDGNBVQJOVTc5CGUMqnpoBM+YiIiIiIKD+8pXJaeuFcvP0X1tIL5+LzOktFL5yLzwKq6IVz0XShKkI8lZPuhVv9VE66Fy7UVE5LL5yL/A5ccT4LqKIXzsVnqKSiF87FWwGZkhERERERERHp9A5qU2cOxaBHNgAAAABJRU5ErkJggg==",alt:"Sort"})})})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(y.a,{placement:"right",title:"Info & Impressum",children:Object(r.jsx)("a",{href:"#",className:"nav-link",children:Object(r.jsx)("img",{className:"nav-icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAEvUlEQVR4nO3cT2xUVRTH8e95UygSFRQWiigEmNca2GFcYGOkUwR14UrCQoyVpNGFdJAFGw3jUkNh6o5EUhM1BuJGJFBiB5TQRGKI0YRIZyqRWP9sJpZo2rTYd1xMaxrSf9N5b+a+4XxWM2/ePT3tL/c2czu3YIwxxhhjjDHGGGOMMcaYkEmtG1iUU6cSTat/f0EDdiK0AA8BDwJF0D9R6Q8k6B0srj3L7t0TNe62LLELpKkv+7IKGWDjAm4fFNXMQNuBT6PuKyyxCWTNl8eX37t8pAdkd+mK5IGewJOvdXzsxs+31hU3rri5SpY2bvACfQZoB/VLt3JyZFnQPrTtrdGafQMLFItA1l/sWbY0uHUa2AEMI3TmLw1/QiYTzDook/H8lgf2IpoFVqpyXse9Fwef3z9Wrb4XIxaB+LnsEeAgMJSYkNafnu0sLHRsc1+XH0jiAvCIir5faD1wKLJGQ+B8IMmvjj0unvwIEATek4M79n9fbo3mC91bA9VvAUTYMtCaHgi7z7B4tW5gPp5IO9Cg8OFiwgC43tp5VYQTQIMq7eF2GC7nA1FhJ0AC+bjCSpPjdVelPUXJ+UCA9QDjwei1SoqMCZPjvfWVtxSdGAQiGm49DbleuGIQiN4EWJJo3FJJlUZlc6kcv4TQVGScD0RFe0uPZG9FdQJeKZWht+KmIuR8ICINPcC/quxrvtC9dTE1mi4efQKR14Dbnk70hNthuJwPJL/9zeuiHAMaAtXTzX1dfjnjm/u6fA28L4AGoOt628F8JI2GxPlAACbGvXdUOQ+sCSRxJZk79iqZzNy9ZzJeMtfdHkjiCrAGOLekOHy4Gv1Wwvl36lNKm4ujJ4A9AAoFUT4K0IsTyI11ieHizYmVqxLoBg/ZjtAObJoc/tnIPcE+21yMgN/XvQfh3f93cuc2gHI435Y+GXljIYldIEBpOXp6xXOisgulBeFhYBVQRPkD4TIi5/KX/uqdc0fYGGOMqSPO/VL3c9l+YFuEX6I/n0q3RFi/Ii6+MYwyDICnIq5fkYZaNzCbfCod+uz1c1mnt97BzRlyV3N2hswkmcvmBZIKhUIq7U89h9JWSiGV9qffNzmsmE+lV9es6TLFKpCpH/hsz2e6HodlajpbshxjgTjG2SVrjqVmCLQjnzpwrqoNVYmLM6R/ntfXInK8Kp3UgHMzZL530X4uqyiPVqufanNxhtzVLBDHWCCOsUAcY4E4xgJxjAXiGAvEMRaIYywQx1ggjrFAHGOBOMYCcUzdB6Kw4H/D4YK6D2S2D0K4qu4DiRsLxDF1H0gyl3X61O2d6j6QaZ9gjIW6DyRuLBDHWCCOsUAcY4E4xgJxjBMfJS37oKfwaxnl/2m6/N59Ay2H/gaGgLVlnBmp+gFRV2ZIWWFIIB1l1P5Ox5a1lR5qR5lhVv2AqBMzZEoUBz1VOSqiRzb3Hv3mWukIw2MLGVerk1euzJDIFNrSZwT5/PYS74emXPalTWc/uL/WPc2l7gMBGEh1vq3KGwqve43Bb34uq9P3uJK5bP7Oa7Xi1JIVpUJb+gxwZsbXHPqbyV0xQ+LEAnGMU0tW3M6UR8GVGTLfQc/aEC7XugVjjDHGGGOMMcYYY4wxxph68x9AnmDqo4ExVgAAAABJRU5ErkJggg==",alt:"Sort"})})})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(y.a,{placement:"right",title:"Login",children:Object(r.jsx)("a",{href:"#",className:"nav-link",children:Object(r.jsx)("img",{className:"nav-icon",src:"data:image/png;base64,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",alt:"Sort"})})})})]})})})}),W=n(196),J=function(e){var t=Object(a.useState)(!0),n=Object(o.a)(t,2),s=n[0],c=n[1],i=Object(a.useState)([]),l=Object(o.a)(i,2),A=l[0],j=l[1];Object(a.useEffect)((function(){b(),c(!1)}),[]);var b=function(){function e(){return(e=Object(d.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k()({url:"https://watchlist-cvs.herokuapp.com/tags",method:"GET"});case 2:if(!(200!==(t=e.sent).status&201!==t.status)){e.next=5;break}throw new Error("Error!");case 5:return e.next=7,t.data;case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().then((function(e){j(e),c(!1)})).catch((function(e){console.log(e.message),c(!1)}))},m=A?A.map((function(t,n){var a={},s=e.filters.includes(t.tag);switch(!0){case s:a={color:"#000",borderColor:"#000",backgroundColor:"#26BD90"};break;case t.score<2:a={color:"#666",borderColor:"#666",backgroundColor:"#233232"};break;case t.score<3:a={color:"#aaa",borderColor:"#aaa",backgroundColor:"#233232"};break;case t.score<6:a={color:"#ddd",borderColor:"#ddd",backgroundColor:"#233232"};break;default:a={color:"#fff",borderColor:"#fff",backgroundColor:"#233232"}}return Object(r.jsxs)(x.a,{visible:!0,className:"clickable",style:a,onClick:function(){return function(t){var n=e.filters;e.filters.includes(t)||(n.push(t),e.setFilters(Object(O.a)(n))),console.log(e.filters)}(t.tag)},closable:s,onClose:function(){return function(t){var n=e.filters,r=e.filters.indexOf(t);n.splice(r,1),e.setFilters(Object(O.a)(n)),console.log(e.filters)}(t.tag)},children:[t.tag," (",t.score,")"]},n)})):[];return Object(r.jsx)(W.a,{placement:"bottom",closable:!1,onClose:function(){e.setIsFilterVisible(!1)},visible:e.isFilterVisible,getContainer:!1,height:"auto",children:Object(r.jsx)("div",{className:"drawer__listtags",children:s?Object(r.jsx)("div",{style:{color:"#bbb",borderColor:"#bbb"},children:" Loading ... "}):m})})},H=(n(190),function(){return Object(r.jsx)("div",{className:"Footer__Main",children:Object(r.jsxs)("div",{className:"Footer__text",children:["Watchlist by ",Object(r.jsx)("a",{href:"http://www.clementvanstaen.com",target:"_blank",children:"Cl\xe9ment van Staen"}),", 2020"]})})});var S=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(!1),i=Object(o.a)(c,2),l=(i[0],i[1],Object(a.useState)([])),u=Object(o.a)(l,2),d=u[0],A=u[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(M,{isFilterVisible:n,setIsFilterVisible:s}),Object(r.jsxs)("div",{className:"Drawers-Wrapper",children:[Object(r.jsx)(J,{isFilterVisible:n,setIsFilterVisible:s,filters:d,setFilters:A}),Object(r.jsx)("div",{className:"App-body",children:Object(r.jsx)(Y,{filters:d,setFilters:A})}),Object(r.jsx)(H,{})]})]})};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(S,{})}),document.getElementById("root"))},91:function(e,t,n){}},[[191,1,2]]]);
//# sourceMappingURL=main.24040bb0.chunk.js.map