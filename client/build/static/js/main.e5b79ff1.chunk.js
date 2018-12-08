(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"fetchUser",function(){return k}),a.d(n,"signupUser",function(){return C}),a.d(n,"loginUser",function(){return U});var r=a(1),l=a.n(r),c=a(28),s=a.n(c),i=a(16),o=a(6),u=a(80),m=a(32),p=a(33),d=a(44),E=a(34),b=a(45),f=a(48),v=a(120),h=a(97),g=a(125),y=a(9),O=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(E.a)(t).call(this,e))).toggle=a.toggle.bind(Object(f.a)(Object(f.a)(a))),a.state={isOpen:!1},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"renderUser",value:function(){switch(this.props.user){case null:return;case!1:return l.a.createElement(y.e,{className:"ml-auto",navbar:!0},l.a.createElement(y.f,null,l.a.createElement(v.a,{to:"/login",className:"nav-link",activeClassName:"active"},"login")),l.a.createElement(y.f,null,l.a.createElement(v.a,{to:"/signup",className:"nav-link",activeClassName:"active"},"signup")));default:return l.a.createElement(y.e,{className:"ml-auto",navbar:!0},l.a.createElement(y.i,{nav:!0,inNavbar:!0},l.a.createElement(y.d,{nav:!0,caret:!0},this.props.user.firstname),l.a.createElement(y.c,{right:!0},l.a.createElement(y.b,null,"setings"),l.a.createElement(y.b,null,"profile"),l.a.createElement(y.b,{divider:!0}),l.a.createElement(y.b,null,"logout"))))}}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(y.g,{className:"mb-3",color:"dark",dark:!0,expand:"md"},l.a.createElement("div",{className:"container"},l.a.createElement(h.a,{className:"navbar-brand",to:"/"},"UTech"),l.a.createElement(y.h,{onClick:this.toggle}),l.a.createElement(y.a,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(y.e,{navbar:!0},l.a.createElement(y.f,null,l.a.createElement(v.a,{to:"/courses",className:"nav-link",activeClassName:"active"},"Courses")),l.a.createElement(y.f,null,l.a.createElement(v.a,{to:"/trainers",className:"nav-link",activeClassName:"active"},"Trainers")),l.a.createElement(y.f,null,l.a.createElement(v.a,{to:"/about",className:"nav-link",activeClassName:"active"},"About"))),this.renderUser()))))}}]),t}(l.a.Component);var j=Object(g.a)(Object(i.b)(function(e){return{user:e.authUser}})(O)),N=a(61),w=a.n(N),k=function(){return function(e){w.a.get("/auth/current_user").then(function(t){return e({type:"FETCH_USER",payload:t.data.user})}).catch(function(t){return e({type:"FETCH_USER",payload:!1})})}},C=function(e,t){return function(a){w.a.post("/auth/signup",e).then(function(e){a({type:"FETCH_USER",payload:e.data.user}),t.push("/")}).catch(function(e){return a({type:"FETCH_USER",payload:!1})})}},U=function(e,t){return function(a){w.a.post("/auth/signup",e).then(function(e){a({type:"FETCH_USER",payload:e.data.user}),t.push("/")}).catch(function(e){return a({type:"FETCH_USER",payload:!1})})}},S=a(123),F=a(82),x=a(122),T=a(121),_=function(e){var t=e.input,a=e.label,n=e.type,r=e.meta,c=r.error;return r.touched&&c?l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,a),l.a.createElement("input",Object.assign({className:"form-control is-invalid"},t,{type:n})),l.a.createElement("div",{className:"invalid-feedback"},c)):l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,a),l.a.createElement("input",Object.assign({className:"form-control"},t,{type:n})))},H=[{name:"firstname",label:"First Name",type:"text"},{name:"lastname",label:"Last Name",type:"text"},{name:"email",label:"Email",type:"email"},{name:"password",label:"Password",type:"password"},{name:"password2",label:"Confirm Password",type:"password"}],R=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"renderFields",value:function(){return H.map(function(e){var t=e.name,a=e.label,n=e.type;return l.a.createElement(x.a,{name:t,label:a,component:_,type:n,key:t})})}},{key:"render",value:function(){var e=this,t=this.props.history;return console.log(t),l.a.createElement("form",{onSubmit:this.props.handleSubmit(function(a){return e.props.signupUser(a,t)})},this.renderFields(),l.a.createElement("div",null,l.a.createElement("button",{type:"submit",className:"btn btn-primary right"},"Signup !")))}}]),t}(r.Component);var A=Object(T.a)({form:"signupForm",validate:function(e){var t={};return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"),H.forEach(function(a){e[a.name]||(t[a.name]="".concat(a.label," requierd !"))}),e.password!==e.password2&&(t.password2="passwords are not matched"),e.password&&e.password.length<6&&(t.password="Password length should be 6 or greater"),t}})(Object(g.a)(Object(i.b)(null,n)(R))),P=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6 col-md-8"},l.a.createElement(h.a,{to:"/"},"Back"),l.a.createElement("h1",null,"Signup"),l.a.createElement(A,null))))},Z=function(){return l.a.createElement("div",null,"main page")},B=function(){return l.a.createElement("div",null,"About")},I=function(){return l.a.createElement("div",null,"courses")},J=function(){return l.a.createElement("div",null,"trainers")},q=function(){return l.a.createElement("div",null,"login")},D=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchUser()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(S.a,null,l.a.createElement("div",null,l.a.createElement(j,null),l.a.createElement(F.a,{path:"/",exact:!0,component:Z}),l.a.createElement(F.a,{path:"/about",component:B}),l.a.createElement(F.a,{path:"/courses",exact:!0,component:I}),l.a.createElement(F.a,{path:"/trainers",exact:!0,component:J}),l.a.createElement(F.a,{path:"/login",exact:!0,component:q}),l.a.createElement(F.a,{path:"/signup",exact:!0,component:P}))))}}]),t}(r.Component),L=Object(i.b)(null,n)(D),M=(a(117),a(124)),$=Object(o.c)({authUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER":return t.payload;default:return e}},form:M.a}),z=Object(o.d)($,{},Object(o.a)(u.a));s.a.render(l.a.createElement(i.a,{store:z},l.a.createElement(L,null)),document.getElementById("root"))},88:function(e,t,a){e.exports=a(119)}},[[88,2,1]]]);
//# sourceMappingURL=main.e5b79ff1.chunk.js.map