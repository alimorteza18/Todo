(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n(24)},19:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a,o,r,l,c,i,u,s,p,m=n(0),d=n.n(m),h=n(9),b=n.n(h),O=(n(19),n(2)),f=n(3),j=n(5),g=n(4),y=n(6),v=n(7),w=(n(22),n(10)),E=n(8),k=(n(13),n(1)),C=(a=function(){function e(t,n,a,l){Object(O.a)(this,e),this.store=void 0,this.id=void 0,Object(w.a)(this,"title",o,this),Object(w.a)(this,"completed",r,this),this.title=n,this.completed=a,this.id=l,this.store=t}return Object(f.a)(e,[{key:"toggle",value:function(){this.completed=!this.completed}}]),e}(),o=Object(E.a)(a.prototype,"title",[k.l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),r=Object(E.a)(a.prototype,"completed",[k.l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Object(E.a)(a.prototype,"toggle",[k.d],Object.getOwnPropertyDescriptor(a.prototype,"toggle"),a.prototype),a),N=new(l=function(){function e(){Object(O.a)(this,e),Object(w.a)(this,"todos",c,this),this.lastID=0}return Object(f.a)(e,[{key:"addTodo",value:function(e){this.todos.push(new C(this,e,!1,this.lastID++))}},{key:"Count",get:function(){return this.todos.filter(function(e){return!e.completed}).length}}]),e}(),c=Object(E.a)(l.prototype,"todos",[k.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Object(E.a)(l.prototype,"addTodo",[k.d],Object.getOwnPropertyDescriptor(l.prototype,"addTodo"),l.prototype),Object(E.a)(l.prototype,"Count",[k.e],Object.getOwnPropertyDescriptor(l.prototype,"Count"),l.prototype),l),D=function(e){function t(){var e,n;Object(O.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(j.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(o)))).state={value:""},n.handleKeyDown=function(e){13===e.keyCode&&(e.preventDefault(),N.addTodo(n.state.value),n.setState({value:""}))},n}return Object(y.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this;return d.a.createElement(d.a.Fragment,null,d.a.createElement("header",{className:"header"},d.a.createElement("h1",null,"todos"),d.a.createElement("input",{className:"new-todo",value:this.state.value,placeholder:"What needs to be done?",autofocus:!0,onChange:function(t){return e.setState({value:t.target.value})},onKeyDown:function(t){return e.handleKeyDown(t)}})))}}]),t}(m.Component),T=Object(v.a)(i=function(e){function t(){var e,n;Object(O.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(j.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(o)))).onToggle=function(){n.props.todo.toggle()},n}return Object(y.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.todo,n=e.onDelete;return d.a.createElement(d.a.Fragment,null,d.a.createElement("li",{className:t.completed?"completed":""},d.a.createElement("div",{class:"view"},d.a.createElement("input",{className:"toggle",type:"checkbox",checked:t.completed,onChange:this.onToggle}),d.a.createElement("label",null,t.title),d.a.createElement("button",{className:"destroy",onClick:n})),d.a.createElement("input",{className:"edit",value:"Rule the web"})))}}]),t}(m.Component))||i,F=Object(v.a)(u=function(e){function t(){return Object(O.a)(this,t),Object(j.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement("section",{className:"main"},d.a.createElement("input",{id:"toggle-all",className:"toggle-all",type:"checkbox"}),d.a.createElement("label",{for:"toggle-all"},"Mark all as complete"),d.a.createElement("ul",{className:"todo-list"},N.todos.map(function(e,t){return d.a.createElement(T,{todo:e,key:t,onDelete:function(){return N.todos.splice(t,1)}})}))))}}]),t}(m.Component))||u,x=Object(v.a)(s=function(e){function t(){return Object(O.a)(this,t),Object(j.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement("footer",{className:"footer"},d.a.createElement("span",{className:"todo-count"},d.a.createElement("strong",null,N.Count)," item left")))}}]),t}(m.Component))||s,z=Object(v.a)(p=function(e){function t(){return Object(O.a)(this,t),Object(j.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return[d.a.createElement(d.a.Fragment,null,d.a.createElement("section",{className:"todoapp"},d.a.createElement(D,null),d.a.createElement(F,null),d.a.createElement(x,null)))]}}]),t}(m.Component))||p;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));b.a.render(d.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,2,1]]]);
//# sourceMappingURL=main.a8d07751.chunk.js.map