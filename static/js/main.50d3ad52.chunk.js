(this.webpackJsonpclasswork56=this.webpackJsonpclasswork56||[]).push([[0],{30:function(e,t,c){},31:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var a=c(1),r=c(19),n=c.n(r),s=(c(30),c(31),c(24)),i=c(4),o=c(0),l=function(){return Object(o.jsx)("div",{className:"d-flex justify-content-center",children:Object(o.jsx)("div",{className:"spinner-border text-primary",role:"status",children:Object(o.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},j=function(e){var t=e.message;return Object(o.jsx)("div",{className:"alert alert-danger",role:"alert",children:t})},u=c(8),b=function(e){var t=e.category;return Object(o.jsx)(u.b,{className:"col-6 col-sm-4 col-md-3 d-flex align-items-strech text-decoration-none",to:"/".concat(t.strCategory),children:Object(o.jsxs)("div",{className:"card text-center my-2",children:[Object(o.jsx)("img",{src:t.strCategoryThumb,alt:"{category.strCategory}"}),Object(o.jsx)("div",{className:"card-body",children:Object(o.jsx)("h3",{className:"card-title",children:t.strCategory})})]})})},d=c(12),h=c.n(d),m=c(17),O=c(22),x=c(23),f="https://www.themealdb.com/api/json/v1/1",g=function(){function e(){Object(O.a)(this,e)}return Object(x.a)(e,null,[{key:"getCategories",value:function(){return fetch("".concat(f,"/categories.php")).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw new Error(e.message)}))}},{key:"getMealsByCategory",value:function(){var e=Object(m.a)(h.a.mark((function e(t){var c,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(f,"/filter.php?c=").concat(t));case 3:if(!(c=e.sent).ok){e.next=9;break}return e.next=7,c.json();case 7:return a=e.sent,e.abrupt("return",a);case 9:throw new Error(c.status);case 12:throw e.prev=12,e.t0=e.catch(0),new Error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getMealById",value:function(){var e=Object(m.a)(h.a.mark((function e(t){var c,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(f,"/lookup.php?i=").concat(t));case 3:if(!(c=e.sent).ok){e.next=9;break}return e.next=7,c.json();case 7:return a=e.sent,e.abrupt("return",a);case 9:throw new Error(c.status);case 12:throw e.prev=12,e.t0=e.catch(0),new Error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),p=c(2),y=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],r=t[1],n=Object(p.f)();return Object(o.jsxs)("div",{className:"input-group my-5",children:[Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"type category","aria-describedby":"search-btn",value:c,onChange:function(e){r(e.target.value)}}),Object(o.jsx)("button",{className:"btn btn-primary",onClick:function(){var e;n.push("/".concat((e=c).slice(0,1).toUpperCase()+e.slice(1))),r("")},id:"search-btn",children:"search category"})]})};function v(){var e=Object(a.useState)(!0),t=Object(i.a)(e,2),c=t[0],r=t[1],n=Object(a.useState)([]),u=Object(i.a)(n,2),d=u[0],h=u[1],m=Object(a.useState)(null),O=Object(i.a)(m,2),x=O[0],f=O[1];Object(a.useEffect)((function(){g.getCategories().then((function(e){setTimeout((function(){h(Object(s.a)(e.categories)),r(!1)}),1e3)})).catch((function(e){f(e.message),r(!1)}))}),[]);return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h2",{className:"text-center text-primary my-5",children:"Our categories of meals"}),Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(y,{}),c?Object(o.jsx)(l,{}):x?Object(o.jsx)(j,{message:x}):d.map((function(e){return Object(o.jsx)(b,{category:e},e.strCategory)}))]})})]})}var N=function(e){var t=e.meal,c=Object(p.g)().category;return Object(o.jsx)(u.b,{className:"col-lg-3 col-md-4 col-6 mb-2 d-flex align-items-stretch",to:"/".concat(c,"/").concat(t.idMeal),children:Object(o.jsxs)("div",{className:"card mb-2",children:[Object(o.jsx)("img",{src:t.strMealThumb,className:"card-img-top",alt:t.strMeal}),Object(o.jsx)("div",{className:"card-body",children:Object(o.jsx)("h5",{className:"card-title",children:t.strMeal})})]})})},w=function(){var e=Object(p.g)(),t=e.category,c=e.idMeal;return Object(o.jsxs)("nav",{className:"navbar bg-dark d-flex justify-content-end",children:[c?Object(o.jsx)(u.b,{className:"navbar-brand mx-4 text-white",to:"/".concat(t),children:"back to meals list"}):null,Object(o.jsx)(u.b,{className:"navbar-brand mx-4 text-white",to:"/",children:" back to categories"})]})},k=function(e){var t=e.match,c=Object(a.useState)(!0),r=Object(i.a)(c,2),n=r[0],s=r[1],u=Object(a.useState)([]),b=Object(i.a)(u,2),d=b[0],h=b[1],m=Object(a.useState)(null),O=Object(i.a)(m,2),x=O[0],f=O[1],p=t.params.category;Object(a.useEffect)((function(){s(!0),f(null),g.getMealsByCategory(p).then((function(e){setTimeout((function(){e.meals?(s(!1),h(e.meals)):(f("no such category"),s(!1))}),1e3)})).catch((function(e){s(!1),f(e.message)}))}),[p]);return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(w,{}),Object(o.jsx)("h2",{className:"text-primary text-center",children:p}),Object(o.jsx)("div",{className:"row",children:n&&!x?Object(o.jsx)(l,{}):x?Object(o.jsx)(j,{message:x}):d.map((function(e){return Object(o.jsx)(N,{meal:e},e.idMeal)}))})]})},M=c(25),C=function(){var e=Object(a.useState)(!0),t=Object(i.a)(e,2),c=t[0],r=t[1],n=Object(a.useState)(null),s=Object(i.a)(n,2),u=s[0],b=s[1],d=Object(a.useState)(null),h=Object(i.a)(d,2),m=h[0],O=h[1],x=Object(p.g)().idMeal;return Object(a.useEffect)((function(){g.getMealById(x).then((function(e){setTimeout((function(){b(Object(M.a)({},e.meals[0])),r(!1)}),1e3)})).catch((function(e){O(e.message),r(!1)}))}),[x]),c?Object(o.jsx)(l,{}):m?Object(o.jsx)(j,{message:m}):Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(w,{}),Object(o.jsxs)("div",{className:"card my-2 col-8 mx-auto",children:[Object(o.jsx)("img",{src:u.strMealThumb,alt:u.strMeal}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("h2",{className:"card-title text-primary",children:u.strMeal}),Object(o.jsxs)("h4",{className:"card-title",children:["Category: ",u.strCategory]}),Object(o.jsxs)("p",{className:"card-text",children:["Recipe: ",u.strInstructions]}),Object(o.jsxs)("h5",{children:["Main ingredient: ",u.strIngredient1]})]})]})]})},S=function(){return Object(o.jsxs)(p.c,{children:[Object(o.jsx)(p.a,{exact:!0,path:"/",component:v}),Object(o.jsx)(p.a,{exact:!0,path:"/:category",component:k}),Object(o.jsx)(p.a,{path:"/:category/:idMeal",component:C})]})};c(39);n.a.render(Object(o.jsx)(u.a,{children:Object(o.jsx)(S,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.50d3ad52.chunk.js.map