(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{42:function(e,t,n){"use strict";n.r(t);var r=n(17),a=n.n(r),c=n(1),u=n.n(c),o=n(4),s=n(5),i=n(6),l=n(3),d=n(7),b=n.n(d),p="/api/persons";function f(){return(f=Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(p);case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return(j=Object(o.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post(p,t);case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=Object(o.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.put("".concat(p,"/").concat(t.id),t);case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return(m=Object(o.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.delete("".concat(p,"/").concat(t.id));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x={getAll:function(){return f.apply(this,arguments)},addNew:function(e){return j.apply(this,arguments)},update:function(e){return h.apply(this,arguments)},deletePerson:function(e){return m.apply(this,arguments)}},O=n(0),v=function(e){var t=e.filterString,n=e.handler;return Object(O.jsxs)(O.Fragment,{children:["Filter names: ",Object(O.jsx)("input",{value:t,onChange:n})]})},g=function(e){var t=e.submitHandler,n=e.name,r=e.nameHandler,a=e.number,c=e.numberHandler;return Object(O.jsxs)(O.Fragment,{children:["Add new person:",Object(O.jsxs)("form",{onSubmit:t,children:[Object(O.jsxs)("div",{children:["name: ",Object(O.jsx)("input",{value:n,onChange:r})]}),Object(O.jsxs)("div",{children:["Phone number: ",Object(O.jsx)("input",{value:a,onChange:c})]}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{type:"submit",disabled:!(n&&a),children:"add"})})]})]})},w=function(e){var t=e.persons,n=e.filterString,r=e.handleDelete,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})).sort((function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?1:-1}));return Object(O.jsx)("ul",{children:a.map((function(e){return Object(O.jsx)(k,{person:e,handleDelete:r},e.id)}))})},k=function(e){var t=e.person,n=e.handleDelete;return Object(O.jsxs)("li",{children:[t.name," ",t.number," ",Object(O.jsx)(y,{person:t,handleDelete:function(){return n(t)}})]})},y=function(e){var t=e.handleDelete;return Object(O.jsx)("button",{onClick:t,children:"Delete"})},S=function(e){var t=e.text,n=e.color;if(!t)return null;var r={fontSize:30,color:n,backgroundColor:"snow",border:5,borderStyle:"solid",borderRadius:10,padding:14,marginBottom:16,textAlign:"center"};return Object(O.jsx)("div",{style:r,children:t})},C=function(){var e=Object(l.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(l.useState)(""),c=Object(i.a)(a,2),d=c[0],b=c[1],p=Object(l.useState)(""),f=Object(i.a)(p,2),j=f[0],h=f[1],m=Object(l.useState)(""),k=Object(i.a)(m,2),y=k[0],C=k[1],D=Object(l.useState)({text:null,color:"snow"}),A=Object(i.a)(D,2),H=A[0],P=A[1];function L(e,t){P({text:e,color:t}),setTimeout((function(){return P(Object(s.a)(Object(s.a)({},H),{},{text:null}))}),3e3)}function F(e){return N.apply(this,arguments)}function N(){return(N=Object(o.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.number){e.next=4;break}if(console.log("Person already exists in array, prompting update",t),window.confirm("Update ".concat(d,"'s number from ").concat(t.number," to ").concat(j||"blank","?"))){e.next=4;break}return e.abrupt("return");case 4:return e.prev=4,e.next=7,x.update(Object(s.a)(Object(s.a)({},t),{},{number:j}));case 7:a=e.sent,r(n.map((function(e){return e.id===a.id?a:e}))),L("Updated ".concat(a.name,"'s number to ").concat(j),"green"),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0),L("Oops, ".concat(t.name," doesn't exist in the database. Refetching data."),"red"),x.getAll().then(r);case 17:case"end":return e.stop()}}),e,null,[[4,12]])})))).apply(this,arguments)}Object(l.useEffect)((function(){return x.getAll().then(r)}),[]);var R=function(){var e=Object(o.a)(u.a.mark((function e(t){var a,c,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a={name:d,number:j},!(c=n.find((function(e){return e.name===d})))){e.next=7;break}F(c),e.next=12;break;case 7:return e.next=9,x.addNew(a);case 9:o=e.sent,L("Added ".concat(o.name),"green"),r(n.concat(o));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(o.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.confirm("Confirm deletion of ".concat(t.name,"?"))){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,x.deletePerson(t);case 6:L("Deleted ".concat(t.name),"green"),r(n.filter((function(e){return e.id!==t.id}))),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(3),console.log("Tried to delete following person, but they didn't exist in the database",t),x.getAll().then(r),L("Oops, ".concat(t.name," doesn't exist in the database. Refetching data."),"red");case 15:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),E=function(e){return function(t){return e(t.target.value)}},J={submitHandler:R,name:d,nameHandler:E(b),number:j,numberHandler:E(h)};return Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"Phonebook"}),Object(O.jsx)(S,Object(s.a)({},H)),Object(O.jsx)(g,Object(s.a)({},J)),Object(O.jsx)("h2",{children:"Numbers"}),Object(O.jsx)(v,{filterString:y,handler:E(C)}),Object(O.jsx)(w,{persons:n,filterString:y,handleDelete:B})]})};a.a.render(Object(O.jsx)(C,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.cffaab36.chunk.js.map