(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{13:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){},29:function(t,e,n){},47:function(t,e,n){},48:function(t,e,n){},49:function(t,e,n){"use strict";n.r(e);var s=n(0),a=n(2),c=n.n(a),r=n(14),i=n.n(r),l=(n(26),n(27),n(4)),o=n.n(l),d=n(15),j=n(16),u=n(17),h=n(20),b=n(19),m=(n(29),function(t){var e="https://img.youtube.com/vi/"+t.entry.link.split("&")[0].split("=")[1]+"/0.jpg",n=t.entry.tags.map((function(t){return Object(s.jsxs)("div",{className:"entry-card-back__tag",children:[t," "]})})),a=new Date(t.entry.added).toLocaleDateString();return Object(s.jsx)("div",{className:"entry-card",children:Object(s.jsxs)("div",{className:"entry-card-inner",children:[Object(s.jsxs)("div",{className:"entry-card-front",children:[Object(s.jsx)("a",{href:t.entry.link,target:"_blank",children:Object(s.jsx)("img",{className:"entry-card__img",alt:t.entry.title,src:e})}),Object(s.jsx)("div",{className:"entry-card__meta",children:t.entry.title})]}),Object(s.jsxs)("div",{className:"entry-card-back",children:["added: ",a,Object(s.jsx)("br",{}),t.entry.detail,Object(s.jsx)("div",{className:"entry-card-back__tags",children:n})]})]})})}),p=n(18),x=n.n(p),O=(n(47),function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(j.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={watchlistEntries:[],isLoading:!0},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){console.log("component did mount"),this.loadEntries()}},{key:"loadEntries",value:function(){var t=this;function e(){return(e=Object(d.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x()({url:"https://watchlist-cvs.herokuapp.com/watchlist",method:"GET"});case 2:if(!(200!==(e=t.sent).status&201!==e.status)){t.next=5;break}throw new Error("Unauthenticated!");case 5:return t.next=7,e.data;case 7:return n=t.sent,t.abrupt("return",n);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().then((function(e){console.log(e);var n=e;t.setState({watchlistEntries:n}),t.setState({isLoading:!1})})).catch((function(t){console.log(t.message)}))}},{key:"render",value:function(){var t=this.state.watchlistEntries.map((function(t){t.link.split("&")[0].split("=")[1];return Object(s.jsx)(m,{entry:t})}));return Object(s.jsx)("div",{style:{margin:30},children:this.state.isLoading?Object(s.jsxs)("div",{className:"entries__spinner",children:[Object(s.jsx)("img",{src:"https://avatars0.githubusercontent.com/u/12551446",className:"App-logo",alt:"logo"}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{style:{fontSize:18},children:"Loading ... "})]}):Object(s.jsx)("div",{className:"Entries__Main",children:t})})}}]),n}(a.Component)),f=(n(13),function(t){var e=t.straightText?"MenuItem MenuItem_straight":"MenuItem MenuItem__turned";return Object(s.jsx)("a",{href:"#",alt:t.title,children:Object(s.jsx)("div",{className:e,children:t.title})})}),v=function(){return Object(s.jsxs)("div",{className:"Menu",children:[Object(s.jsx)(f,{title:"add"}),Object(s.jsx)(f,{title:"filter"}),Object(s.jsx)(f,{title:"?",straightText:!0})]})},g=(n(48),function(){return Object(s.jsxs)("div",{className:"Footer__Main",children:["Watchlist by ",Object(s.jsx)("a",{href:"http://www.clementvanstaen.com",target:"_blank",children:"Cl\xe9ment van Staen"}),", 2020"]})});var y=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsxs)("header",{className:"App-header",children:[Object(s.jsx)(v,{}),Object(s.jsx)(O,{})]}),Object(s.jsx)(g,{})]})};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(y,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.d2f7b53e.chunk.js.map