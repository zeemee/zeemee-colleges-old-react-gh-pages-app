(this["webpackJsonpzeemee-colleges"]=this["webpackJsonpzeemee-colleges"]||[]).push([[0],{21:function(e,t,n){e.exports=n(33)},26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(19),c=n.n(r),o=(n(26),n(11)),u=n(1),i=n(6),s=n(7),m=n(9),h=n(8),d=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={error:null,isLoaded:!1,items:[]},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this,t="".concat("https://www.zaptack.com/api/poja/colleges","/case_studies.json");fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t.items})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.isLoaded,a=e.items;return t?l.a.createElement("div",null,"Error: ",t.message):n?l.a.createElement("div",null,l.a.createElement("h1",null,"Case Studies"),l.a.createElement("ul",null,a.map((function(e){return l.a.createElement("li",{key:e.name},e.name,l.a.createElement("ul",null,Object.keys(e).map((function(t){return l.a.createElement("li",{key:t},t,": ",e[t])}))))})))):l.a.createElement("div",null,"Loading...")}}]),n}(a.Component),p=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={error:null,isLoaded:!1,page:{}},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this,t="".concat("https://www.zaptack.com/api/poja/colleges","/college_page.json?slug=").concat(this.props.match.params.id);fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,page:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.isLoaded,a=e.page;return t?l.a.createElement("div",null,"Error: ",t.message):n?l.a.createElement("div",null,l.a.createElement("h1",null,"College Page"),l.a.createElement("h2",null,this.props.match.params.id),l.a.createElement("ul",null,Object.keys(a).map((function(e){return l.a.createElement("li",{key:e},e,": ",a[e])})))):l.a.createElement("div",null,"Loading...")}}]),n}(a.Component),E=n(13),v=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={value:"",error:null,success:!1},a.handleChange=a.handleChange.bind(Object(E.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(E.a)(a)),a}return Object(s.a)(n,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this,n="".concat("https://www.zaptack.com/api/poja/colleges","/more_info.json"),a={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:this.state.value})};fetch(n,a).then((function(e){return e.json()})).then((function(e){t.setState({success:!0})}),(function(e){t.setState({success:!0,error:e})})),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,"Name:",l.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange})),l.a.createElement("input",{type:"submit",value:"Submit"}))}}]),n}(a.Component),f=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Home Page ZeeMee Colleges"),l.a.createElement(v,null))}}]),n}(a.Component),b=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={error:null,isLoaded:!1,partners:[],colleges:[]},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this,t="".concat("https://www.zaptack.com/api/poja/colleges","/partners.json");fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,partners:t.items,colleges:t.colleges})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.isLoaded,a=e.colleges,r=e.partners;return t?l.a.createElement("div",null,"Error: ",t.message):n?l.a.createElement("div",null,l.a.createElement("h1",null,"Partners Page"),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",{valign:"top"},l.a.createElement("td",null,l.a.createElement("h2",null,"Partners"),l.a.createElement("ul",null,r.map((function(e){return l.a.createElement("li",{key:e.name},e.name)})))),l.a.createElement("td",null,l.a.createElement("h2",null,"Colleges"),l.a.createElement("ul",null,a.map((function(e){return l.a.createElement("li",{key:e},e)})))))))):l.a.createElement("div",null,"Loading...")}}]),n}(a.Component);function g(){return l.a.createElement(o.a,null,l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/partners"},"Partners")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/caseStudies"},"Case Studies")),l.a.createElement("li",null,"Discover Feed"),l.a.createElement("li",null,"For Students"),l.a.createElement("li",null,"Get the App"),l.a.createElement("li",null,"Learn More"),l.a.createElement("li",null,"Get the App"),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/plnu"},"College Page: PLNU")))),l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"/partners"},l.a.createElement(b,null)),l.a.createElement(u.a,{path:"/caseStudies"},l.a.createElement(d,null)),l.a.createElement(u.a,{path:"/:id",component:p}),l.a.createElement(u.a,{path:"/"},l.a.createElement(f,null))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(32);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.1c8d5e7f.chunk.js.map