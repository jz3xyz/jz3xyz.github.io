(this.webpackJsonpjz3=this.webpackJsonpjz3||[]).push([[0],{122:function(t,e){},150:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(28),r=n.n(o),s=(n(95),n(38)),i=n(39),l=n(61),h=n(60),u=(n.p,n(96),n(97),n(189)),d=n(190),j=n(192),p=n(80),g=n.n(p),b=n(2),f=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={url:"-",loading:!1,content:null,error:null},t.handleClick=function(e){var n=t.state.url;t.setState({loading:!0}),n.startsWith("http")||(n="http://".concat(n)),console.log("url ".concat(n));var a="https://api.allorigins.win/get?url=".concat(encodeURIComponent(n));fetch(a,{referrer:"http://google.com","Cache-Control":"no-cache",Pragma:"no-cache",Expires:"0"}).then((function(t){if(t.ok)return t.json();throw new Error("Network response was not ok.")})).then((function(e){var n=e.contents;t.setState({content:n}),console.log("good")})).catch((function(e){console.error(e),t.setState({error:e}),console.log("bad")})).finally((function(){t.setState({loading:!1})}))},t.handleInput=function(e){console.log(e.target.value),t.setState({url:e.target.value})},t.handleKeyPress=function(e){console.log("key pressed ".concat(e.key)),"Enter"==e.key&&t.handleClick()},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=t.content,n=t.loading,a=t.url;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("header",{className:"App-header",children:Object(b.jsx)(v,{url:a,handleInput:this.handleInput,handleClick:this.handleClick,handleKeyPress:this.handleKeyPress})}),Object(b.jsx)(O,{content:e,loading:n})]})}}]),n}(c.a.Component),v=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=this.props,e=(t.url,t.handleClick),n=t.handleInput,a=t.handleKeyPress;return Object(b.jsxs)("div",{className:"top-container",children:[Object(b.jsx)(u.a,{autoFocus:!0,onKeyPress:a,className:"input-container",onChange:n,id:"standard-basic",label:"https://...",variant:"standard"}),Object(b.jsx)(d.a,{variant:"outlined",className:"button-container",onClick:e,children:"go"})]})}}]),n}(c.a.Component);function O(t){var e=t.content,n=t.loading;return Object(b.jsx)("div",{className:"content-container",children:n?Object(b.jsx)(j.a,{}):e?Object(b.jsx)("iframe",{style:{width:"100%",height:"100%"},sandbox:!0,srcdoc:e}):Object(b.jsx)(y,{})})}function y(){return Object(b.jsx)("div",{style:{display:"flex",alignItems:"center",height:"100%",width:"100%",justifyContent:"center"},children:Object(b.jsx)(g.a,{style:{width:"20vw",height:"20vh"}})})}var x=f,k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,193)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),o(t),r(t)}))};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root")),k()},95:function(t,e,n){},96:function(t,e,n){}},[[150,1,2]]]);
//# sourceMappingURL=main.fd37010a.chunk.js.map