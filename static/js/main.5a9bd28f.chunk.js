(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{19:function(e,t,n){e.exports=n(33)},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),s=n(5),i=n(3),l=n(12),u=n(13);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(28),n(29);var d=n(14),h=n(15),m=n(17),b=n(16),E=n(18),f=(n(30),function(e){return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-2"},r.a.createElement("img",{className:"bg-sky-blue br-100 pa1 ba b--black-10 h5 w5",src:"https://robohash.org/".concat(e.name,"?size=200x200"),alt:"Avatar"}),r.a.createElement("div",null,r.a.createElement("h2",{className:"f3 mb2"},e.name),r.a.createElement("p",{className:"f5 fw4 gray mt0"},e.username)))}),p=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,n){return r.a.createElement(f,{key:n,id:t[n].id,name:t[n].name,username:t[n].username})})))},g=(n(31),function(){return r.a.createElement("nav",{className:"bg-custom pa3 pa4-ns"},r.a.createElement("a",{className:"link dim white b f1 f-headline-ns tc db mb3 mb4-ns",href:"../index.js",title:"Home"},"Client List"))}),v=(n(32),function(e){e.searchField;var t=e.searchChange;return r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("input",{type:"text",className:"custom-input",placeholder:"Find Friends","aria-label":"Find Friends","aria-describedby":"button-addon2",onChange:t}))}),O=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:"600px"}},e.children)},y=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.onFetchRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,a=e.robots,o=e.isPending,c=a.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement(g,null),r.a.createElement(v,{searchChange:n}),o?r.a.createElement("h1",null,"Loading"):r.a.createElement(O,null,r.a.createElement(p,{robots:c})))}}]),t}(a.Component),R=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,isPending:e.fetchRobots.isPending,robots:e.fetchRobots.robots,error:e.fetchRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onFetchRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(y),S={searchField:""},w={isPending:!1,robots:[],error:""},j=Object(l.createLogger)(),C=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},fetchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{isPending:!1,robots:t.payload});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{isPending:!1,error:t.payload});default:return e}}}),F=Object(i.d)(C,Object(i.a)(u.a,j));c.a.render(r.a.createElement(s.a,{store:F},r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.5a9bd28f.chunk.js.map