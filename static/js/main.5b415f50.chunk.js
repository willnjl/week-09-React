(this.webpackJsonpweek09=this.webpackJsonpweek09||[]).push([[0],{36:function(e,t,a){e.exports=a(49)},41:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),c=a.n(l),i=(a(41),a(4)),s=a(5),o=a(7),u=a(6),m=(n.Component,function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.names;return r.a.createElement("section",{className:"list-group"},r.a.createElement("ul",{onClick:function(){return console.log("Hello, World!")}},e?e.map((function(e,t){return r.a.createElement("li",{key:t,className:"list-group-item"},e)})):r.a.createElement("li",{className:"alert alert-warning",key:0}," ",'"Nothing To See Here"')))}}]),a}(n.Component)),h=a(8),p=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={clicked:!1},n.handleClick=n.handleClick.bind(Object(h.a)(n)),n}return Object(s.a)(a,[{key:"handleClick",value:function(){this.state.clicked;this.setState({clicked:!0}),console.log(this.state.clicked)}},{key:"render",value:function(){var e=this.state.clicked;return r.a.createElement("p",{className:"lead",onClick:this.handleClick},e?"Clicked":"Not Clicked")}}]),a}(n.Component),d=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={active:!1},n.handleClick=n.handleClick.bind(Object(h.a)(n)),n}return Object(s.a)(a,[{key:"handleClick",value:function(){var e=this.state.active;this.setState({active:!e})}},{key:"render",value:function(){var e={display:"block",backgroundColor:this.state.active?this.props.colour:"green",margin:"2rem auto",width:"200px",height:"200px"};return r.a.createElement("div",{onClick:this.handleClick,style:e})}}]),a}(n.Component),b=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={toggle:!1},n.toggler=n.toggler.bind(Object(h.a)(n)),n}return Object(s.a)(a,[{key:"toggler",value:function(){var e=this.state.toggle;this.setState({toggle:!e})}},{key:"render",value:function(){var e=this.props,t=e.initial,a=e.alternate;return r.a.createElement("div",{className:"border"},r.a.createElement("p",{className:"lead"},this.state.toggle?a:t),r.a.createElement("button",{className:"btn btn-danger",onClick:this.toggler}," ","Click Me!"))}}]),a}(n.Component),v=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={max:n.props.max,min:0,step:n.props.step,current:0},n.stepInc=n.stepInc.bind(Object(h.a)(n)),n.stepDec=n.stepDec.bind(Object(h.a)(n)),n}return Object(s.a)(a,[{key:"stepInc",value:function(){var e=this.state,t=e.max,a=e.step,n=e.current;n+a<=t&&this.setState({current:n+a})}},{key:"stepDec",value:function(){var e=this.state,t=e.min,a=e.step,n=e.current;n-a>=t&&this.setState({current:n-a})}},{key:"render",value:function(){var e=this.state.current;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"border"},r.a.createElement("p",{className:"lead"},e),r.a.createElement("button",{onClick:this.stepInc,className:"btn btn-primary"},"+"),r.a.createElement("button",{onClick:this.stepDec,className:"btn btn-secondary"},"-")))}}]),a}(n.Component);v.defaultProps={max:100};var f=v,E=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={top:15,jump:n.props.jump,moved:!1},n.jump=n.jump.bind(Object(h.a)(n)),n}return Object(s.a)(a,[{key:"jump",value:function(){var e=this.state,t=e.top,a=e.jump,n=(e.moved,t+a);this.setState({top:n}),this.setState({moved:!0})}},{key:"render",value:function(){return r.a.createElement("button",{onMouseEnter:this.jump,className:"jumper btn btn-warning",style:{top:this.state.top}},this.state.moved?"hehehe":"clickMe!")}}]),a}(n.Component),k=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={i:0},n.handleClick=n.handleClick.bind(Object(h.a)(n)),n}return Object(s.a)(a,[{key:"handleClick",value:function(){var e=this.state.i,t=e+1<this.props.names.length?e+1:0;this.setState({i:t})}},{key:"render",value:function(){var e=this.props.names,t=this.state.i;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"border"},r.a.createElement("p",null,e[t]),r.a.createElement("button",{onClick:this.handleClick,className:"btn btn-dark"},"Cycle")))}}]),a}(n.Component),g=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:""},r.a.createElement(p,null),r.a.createElement(E,{jump:50}),r.a.createElement(d,{colour:"hotpink"}),r.a.createElement(b,{initial:"Hello",alternate:"World!"}),r.a.createElement(f,{max:100,step:5}),r.a.createElement(k,{names:["Tom","Will","Oliver","Marta"]})))},j=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:"img-thumbnail",src:"http://78.media.tumblr.com/ea3884f17979500c2406fd4d21891195/tumblr_mr4humiiCH1r4xjo2o1_250.gif"}))},C=function(e){var t=e.pages;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"pagination"},t.map((function(e,t){return r.a.createElement("li",{className:"page-item",key:t},r.a.createElement("a",{href:"#",className:"page-link"},e))}))))},O=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container mt-4"},r.a.createElement("div",{className:"row"},r.a.createElement("aside",{className:"col-md-4"},r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Huius, Lyco, oratione locuples, rebus ipsis ielunior."),r.a.createElement(j,null)),r.a.createElement("section",{className:"col-md-8"},r.a.createElement("p",{className:"lead"},'" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Huius, Lyco, oratione locuples, rebus ipsis ielunior."'),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."),r.a.createElement(m,{names:["Rohan","Tom","Zack","G","Dean"]}),r.a.createElement(C,{pages:[1,2,3,4,5]})))))},y=function(e){var t=e.time,a=e.children;return r.a.createElement("div",{style:{animationName:"fade",animationDuration:t}},a)};y.defaultProps={time:"3s"};n.Component,n.Component;var N=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={duration:function(){return Math.floor(1e4*Math.random())},time:0,timerStart:!1,status:["Start","Aim","Fire","Hit","Miss"],index:0},n.start=n.start.bind(Object(h.a)(n)),n.shoot=n.shoot.bind(Object(h.a)(n)),n.timer=n.timer.bind(Object(h.a)(n)),n}return Object(s.a)(a,[{key:"timer",value:function(){var e=this,t=Date.now();this.state.time;setInterval((function(){e.setState({time:Date.now()-t})}),10)}},{key:"start",value:function(){var e=this,t=this.state,a=t.duration,n=(t.startTime,t.timeNow,t.status),r=t.index;this.setState({index:(r+1)%n.length});setTimeout((function(){e.setState({index:(e.state.index+1)%e.state.status.length,timerStart:!0}),e.timer()}),a())}},{key:"shoot",value:function(){var e=this.state;e.duration,e.time,e.status,e.index,e.timerStart;this.setState({timerStart:!1})}},{key:"render",value:function(){var e=this.state,t=(e.duration,e.time),a=e.status,n=e.index,l=e.timerStart,c=l||0!==t?"orange":"blue";return r.a.createElement("div",{style:{width:"300px",height:"300px",backgroundColor:c,display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,a[n]),l||t>0?r.a.createElement("p",null," ",Math.floor(t)):"",0===n?r.a.createElement("button",{className:"btn btn-primary",onClick:this.start},"Start"):"",0!==n?r.a.createElement("button",{className:"btn btn-danger",onClick:this.shoot},"Fire"):""))}}]),a}(n.Component),S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:""},r.a.createElement(N,null)))},x=(n.Component,function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={value1:0,value2:0},e.handle1=e.handle1.bind(Object(h.a)(e)),e.handle2=e.handle2.bind(Object(h.a)(e)),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.state,t=e.value2,a=e.value1;document.title=a+t}},{key:"componentDidUpdate",value:function(){var e=this.state,t=e.value2,a=e.value1;document.title=a+t}},{key:"handle1",value:function(){var e=this.state.value1;this.setState({value1:e+1})}},{key:"handle2",value:function(){var e=this.state.value2;this.setState({value2:e+1})}},{key:"render",value:function(){var e=this.state,t=e.value1,a=e.value2;return r.a.createElement("div",{className:"jumbotron"},r.a.createElement("p",null,r.a.createElement("button",{onClick:this.handle1,className:"btn btn-lg btn-danger"},"+"),r.a.createElement("span",{className:"alert alert-danger mr-2 ml-2"},t)),r.a.createElement("p",null,r.a.createElement("button",{onClick:this.handle2,className:"btn btn-lg btn-success"},"+"),r.a.createElement("span",{className:"alert alert-success mr-2 ml-2"},a)))}}]),a}(n.Component));n.Component,n.Component;function w(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null))}a(15),a(10),n.Component,n.Component;var D=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={max:n.props.max,min:0,step:n.props.step,current:0},n.stepInc=n.stepInc.bind(Object(h.a)(n)),n.stepDec=n.stepDec.bind(Object(h.a)(n)),n}return Object(s.a)(a,[{key:"stepInc",value:function(){var e=this.state,t=e.max,a=e.step,n=e.current;n+a<=t&&this.setState({current:n+a})}},{key:"stepDec",value:function(){var e=this.state,t=e.min,a=e.step,n=e.current;n-a>=t&&this.setState({current:n-a})}},{key:"render",value:function(){var e=this.state.current;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"border"},r.a.createElement("p",{className:"lead"},e),r.a.createElement("button",{onClick:this.stepInc,className:"btn btn-primary"},"+"),r.a.createElement("button",{onClick:this.stepDec,className:"btn btn-secondary"},"-")))}}]),a}(n.Component);D.defaultProps={max:100};a(31);var I=a(19),F=(n.Component,a(35)),M=(n.Component,a(33)),H=a(32),L=(n.Component,a(34));n.Component;a(48);var T=function(){return r.a.createElement("main",null,r.a.createElement("div",{className:"container",style:{justifyContent:"center",alignItems:"center",margin:"auto"}},r.a.createElement(O,null),r.a.createElement(g,null),r.a.createElement(S,null),r.a.createElement(w,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.5b415f50.chunk.js.map