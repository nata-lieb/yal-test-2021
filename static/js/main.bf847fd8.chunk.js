(this["webpackJsonpyal-test-2021"]=this["webpackJsonpyal-test-2021"]||[]).push([[0],{54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),i=n(8),c=n.n(i),a=n(3),o=n(11),d=n(4),u=n(5),l=n(10),j=n(15),m=n.n(j),f=n(24),h=n(6),b=n(25),p=n.n(b),O=function(e){"string"===typeof e&&(e=new Date(e));var t=new Intl.DateTimeFormat("en",{month:"long"}).format(e);return"".concat(e.getDate()," ").concat(t,", ").concat(e.getFullYear()," year")},g=function(e,t){return e.lastName===t.lastName?e.firstName>t.firstName?1:-1:e.lastName>t.lastName?1:-1},v=function(){return"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")},x=function(){var e=(new Date).getMonth(),t=function(){var e=new Intl.DateTimeFormat("en",{month:"long"});return Object(o.a)(Array(12).keys()).map((function(t){return{monthId:t,name:e.format(new Date(1970,t))}}))}().map((function(e){return Object(d.a)(Object(d.a)({},e),{},{users:[]})}));return t.concat(t.splice(0,e))}(),y=Object(h.b)("users/list",Object(f.a)(m.a.mark((function e(){var t,n,r,s,i,c,a,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("https://yalantis-react-school-api.yalantis.com/api/task0/users");case 3:return t=e.sent,e.next=6,t.data;case 6:if(n=e.sent,r=n.sort(g),!((null===(s=window.localStorage.getItem("YTappSelectedUsers"))||void 0===s?void 0:s.length)>0)){e.next=16;break}return i=JSON.parse(s),c=x.map((function(e){return Object(d.a)({},e)})),(a=r.filter((function(e){return i.includes(e.id)}))).length<i.length&&window.localStorage.setItem("YTappSelectedUsers",JSON.stringify(a.map((function(e){return e.id})))),o=a.reduce((function(e,t){var n=e.findIndex((function(e){return e.monthId===new Date(t.dob).getMonth()}));return e[n].users=e[n].users.concat(t),e}),c).map((function(e){return e.users.length>1&&e.users.sort(g),e})),e.abrupt("return",{users:r,selected:i,months:o});case 16:return e.abrupt("return",{users:r});case 19:return e.prev=19,e.t0=e.catch(0),console.log("Error fetching users list: ",e.t0),e.abrupt("return",{users:[]});case 23:case"end":return e.stop()}}),e,null,[[0,19]])})))),w=Object(h.c)({}),S=w.getSelectors((function(e){return e.users})).selectAll,I=Object(h.d)({name:"users",initialState:w.getInitialState({selected:[],months:x}),reducers:{selectedAdd:function(e,t){e.selected.push(t.payload.id);var n=e.months.findIndex((function(e){return e.monthId===new Date(t.payload.dob).getMonth()}));e.months[n].users=e.months[n].users.concat(t.payload).sort(g),window.localStorage.setItem("YTappSelectedUsers",JSON.stringify(e.selected))},selectedRemove:function(e,t){e.selected=e.selected.filter((function(e){return e!==t.payload.id}));var n=e.months.findIndex((function(e){return e.monthId===new Date(t.payload.dob).getMonth()}));e.months[n].users=e.months[n].users.filter((function(e){return e.id!==t.payload.id})),window.localStorage.setItem("YTappSelectedUsers",JSON.stringify(e.selected))}},extraReducers:Object(l.a)({},y.fulfilled,(function(e,t){w.setAll(e,t.payload.users),t.payload.selected&&(e.selected=t.payload.selected,e.months=t.payload.months)}))}),N=I.actions,W=N.selectedAdd,A=N.selectedRemove,E=I.reducer,D=n(1),T={fontWeight:"bold",fontSize:"1em",margin:"1em 0 0.5em"},k=function(e){var t=e.user,n=Object(a.b)(),s=Object(a.c)((function(e){return e.users.selected})),i=Object(r.useState)((function(){return s.includes(t.id)})),c=Object(u.a)(i,2),o=c[0],l=c[1],j=function(){l((function(e){return!e})),n(o?A(t):W(t))};return Object(D.jsxs)("div",{children:[Object(D.jsxs)("div",{style:o?Object(d.a)(Object(d.a)({},T),{},{color:"blue"}):T,children:[t.lastName," ",t.firstName]}),Object(D.jsxs)("div",{children:[Object(D.jsxs)("div",{children:[Object(D.jsx)("input",{type:"radio",checked:!o,onChange:j}),"not active"]}),Object(D.jsxs)("div",{children:[Object(D.jsx)("input",{type:"radio",checked:o,onChange:j}),"active"]})]})]})},z={fontWeight:"bold",fontSize:"1.5em",margin:"0.5em 0 2.5em",textAlign:"center"},J={fontWeight:"bold",fontSize:"1em",margin:"0.5em 0"},R={display:"flex",flexWrap:"wrap",borderRight:"2px solid lightgray"},M=function(e){var t=e.letter,n=e.users;return Object(D.jsxs)("div",{style:{margin:"0 1em 2em",minWidth:"7.5em"},children:[Object(D.jsx)("div",{style:J,children:t}),(null===n||void 0===n?void 0:n.length)>0?n.map((function(e){return Object(D.jsx)(k,{user:e},e.id)})):"-----"]})},Y=function(){var e=Object(a.c)(S),t=Object(r.useState)(v),n=Object(u.a)(t,2),s=n[0],i=n[1];return Object(r.useEffect)((function(){e.length>0&&i(e.reduce((function(e,t){return e.map((function(e){return e.letter===t.lastName[0]?Object(d.a)(Object(d.a)({},e),{},{users:[].concat(Object(o.a)(e.users),[t])}):e}))}),v().map((function(e){return{letter:e,users:[]}}))))}),[e]),Object(D.jsxs)("div",{children:[Object(D.jsx)("div",{style:z,children:"Employees"}),Object(D.jsx)("div",{style:R,children:e.length>0?s.map((function(e,t){return Object(D.jsx)(M,{letter:e.letter,users:e.users},t)})):"no users found"})]})},F={fontWeight:"bold",fontSize:"1em",margin:"0.5em 0"},U=function(e){var t=e.name,n=e.users;return Object(D.jsxs)("div",{style:{margin:"2.5em"},children:[Object(D.jsx)("div",{style:F,children:t}),Object(D.jsx)("ul",{children:n.map((function(e){return Object(D.jsxs)("li",{children:[e.lastName," ",e.firstName," - ",O(e.dob)]},e.id)}))})]})},L={fontWeight:"bold",fontSize:"1.5em",margin:"0.5em 0 2.5em",textAlign:"center"},B={width:"75%",borderTop:"2px solid lightgray",textAlign:"center",marginBottom:"2em"},C=function(){var e=Object(a.c)((function(e){return e.users.months})),t=Object(a.c)((function(e){return e.users.selected}));return Object(D.jsxs)("div",{children:[Object(D.jsx)("div",{style:L,children:"Employees birthday"}),Object(D.jsxs)("div",{children:[Object(D.jsx)("hr",{style:B}),t.length>0?e.map((function(e){return e.users.length>0&&Object(D.jsx)(U,{name:e.name,users:e.users},e.monthId)})):Object(D.jsx)("div",{style:{margin:"2.5em"},children:"Employees List is empty"})]})]})},G={width:"50%",borderTop:"2px solid lightgray",textAlign:"center",marginTop:"7em"},H=function(){var e=Object(a.b)(),t=Object(a.c)(S),n=function(){var e="object"===typeof window,t=Object(r.useRef)(),n=function(){if(e)return window.innerWidth>=1920?1920:window.innerWidth>=1280?1280:window.innerWidth>=960?960:window.innerWidth>=600?600:window.innerWidth>=0?0:void 0},s=Object(r.useState)(n),i=Object(u.a)(s,2),c=i[0],a=i[1];return Object(r.useEffect)((function(){if(!e)return!1;var r=function(){var e;if((null===(e=window)||void 0===e?void 0:e.innerWidth)!==t.current){var r=n();t.current=r,a(r)}};return window.addEventListener("resize",r),function(){return window.removeEventListener("resize",r)}})),c}();return Object(r.useEffect)((function(){0===t.length&&e(y({}))}),[t]),Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)("div",{className:"App",style:{width:"100%",display:"flex"},children:[Object(D.jsx)("div",{style:{width:n>=600?"60%":"50%"},children:Object(D.jsx)(Y,{})}),Object(D.jsx)("div",{style:{borderRight:"2px solid lightgray",height:"100%"}}),Object(D.jsx)("div",{style:{width:n>=600?"40%":"50%"},children:Object(D.jsx)(C,{})})]}),Object(D.jsx)("hr",{style:G})]})},K=(n(54),Object(h.a)({reducer:{users:E}}));c.a.render(Object(D.jsx)(s.a.StrictMode,{children:Object(D.jsx)(a.a,{store:K,children:Object(D.jsx)(H,{})})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.bf847fd8.chunk.js.map