"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[923],{5102:function(e,a,t){t.d(a,{J:function(){return n}});var r=t(9058),n=[{id:(0,r.Z)(),address:{country:"USA",state:"West Virginia",city:"Parkersburg",street:"2849 Fulton Street"},avatarUrl:"/static/images/avatars/avatar_3.png",createdAt:15550164e5,email:"ekaterina.tankova@devias.io",name:"Ekaterina Tankova",phone:"304-428-3097"},{id:(0,r.Z)(),address:{country:"USA",state:"Bristow",city:"Iowa",street:"1865  Pleasant Hill Road"},avatarUrl:"/static/images/avatars/avatar_4.png",createdAt:15550164e5,email:"cao.yu@devias.io",name:"Cao Yu",phone:"712-351-5711"},{id:(0,r.Z)(),address:{country:"USA",state:"Georgia",city:"Atlanta",street:"4894  Lakeland Park Drive"},avatarUrl:"/static/images/avatars/avatar_2.png",createdAt:15550164e5,email:"alexa.richardson@devias.io",name:"Alexa Richardson",phone:"770-635-2682"},{id:(0,r.Z)(),address:{country:"USA",state:"Ohio",city:"Dover",street:"4158  Hedge Street"},avatarUrl:"/static/images/avatars/avatar_5.png",createdAt:155493e7,email:"anje.keizer@devias.io",name:"Anje Keizer",phone:"908-691-3242"},{id:(0,r.Z)(),address:{country:"USA",state:"Texas",city:"Dallas",street:"75247"},avatarUrl:"/static/images/avatars/avatar_6.png",createdAt:15547572e5,email:"clarke.gillebert@devias.io",name:"Clarke Gillebert",phone:"972-333-4106"},{id:(0,r.Z)(),address:{country:"USA",state:"California",city:"Bakerfield",street:"317 Angus Road"},avatarUrl:"/static/images/avatars/avatar_1.png",createdAt:15546708e5,email:"adam.denisov@devias.io",name:"Adam Denisov",phone:"858-602-3409"},{id:(0,r.Z)(),address:{country:"USA",state:"California",city:"Redondo Beach",street:"2188  Armbrester Drive"},avatarUrl:"/static/images/avatars/avatar_7.png",createdAt:15543252e5,email:"ava.gregoraci@devias.io",name:"Ava Gregoraci",phone:"415-907-2647"},{id:(0,r.Z)(),address:{country:"USA",state:"Nevada",city:"Las Vegas",street:"1798  Hickory Ridge Drive"},avatarUrl:"/static/images/avatars/avatar_8.png",createdAt:15230484e5,email:"emilee.simchenko@devias.io",name:"Emilee Simchenko",phone:"702-661-1654"},{id:(0,r.Z)(),address:{country:"USA",state:"Michigan",city:"Detroit",street:"3934  Wildrose Lane"},avatarUrl:"/static/images/avatars/avatar_9.png",createdAt:15547028e5,email:"kwak.seong.min@devias.io",name:"Kwak Seong-Min",phone:"313-812-8947"},{id:(0,r.Z)(),address:{country:"USA",state:"Utah",city:"Salt Lake City",street:"368 Lamberts Branch Road"},avatarUrl:"/static/images/avatars/avatar_10.png",createdAt:15227028e5,email:"merrile.burgett@devias.io",name:"Merrile Burgett",phone:"801-301-7894"}]},2873:function(e,a,t){t.d(a,{P:function(){return w}});var r=t(5893),n=t(7294),i=t(1964),s=t.n(i),c=t(5697),o=t.n(c),l=t(2912),d=t(6242),u=t(7357),h=t(7906),v=t(3184),m=t(3816),g=t(3252),x=t(5071),p=t(295),f=t(9661),j=t(5861),y=t(8530);function Z(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function b(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var w=function(e){var a=e.customers,t=b(e,["customers"]),i=(0,n.useState)([]),c=i[0],o=i[1],w=(0,n.useState)(10),A=w[0],k=w[1],O=(0,n.useState)(0),S=O[0],U=O[1];return(0,r.jsxs)(d.Z,function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(a){Z(e,a,t[a])}))}return e}({},t,{children:[(0,r.jsx)(s(),{children:(0,r.jsx)(u.Z,{sx:{minWidth:1050},children:(0,r.jsxs)(h.Z,{children:[(0,r.jsx)(v.Z,{children:(0,r.jsxs)(m.Z,{children:[(0,r.jsx)(g.Z,{padding:"checkbox",children:(0,r.jsx)(x.Z,{checked:c.length===a.length,color:"primary",indeterminate:c.length>0&&c.length<a.length,onChange:function(e){var t;t=e.target.checked?a.map((function(e){return e.id})):[],o(t)}})}),(0,r.jsx)(g.Z,{children:"Name"}),(0,r.jsx)(g.Z,{children:"Email"}),(0,r.jsx)(g.Z,{children:"Location"}),(0,r.jsx)(g.Z,{children:"Phone"}),(0,r.jsx)(g.Z,{children:"Registration date"})]})}),(0,r.jsx)(p.Z,{children:a.slice(0,A).map((function(e){return(0,r.jsxs)(m.Z,{hover:!0,selected:-1!==c.indexOf(e.id),children:[(0,r.jsx)(g.Z,{padding:"checkbox",children:(0,r.jsx)(x.Z,{checked:-1!==c.indexOf(e.id),onChange:function(a){return function(e,a){var t=c.indexOf(a),r=[];-1===t?r=r.concat(c,a):0===t?r=r.concat(c.slice(1)):t===c.length-1?r=r.concat(c.slice(0,-1)):t>0&&(r=r.concat(c.slice(0,t),c.slice(t+1))),o(r)}(0,e.id)},value:"true"})}),(0,r.jsx)(g.Z,{children:(0,r.jsxs)(u.Z,{sx:{alignItems:"center",display:"flex"},children:[(0,r.jsx)(f.Z,{src:e.avatarUrl,sx:{mr:2},children:(a=e.name,(void 0===a?"":a).replace(/\s+/," ").split(" ").slice(0,2).map((function(e){return e&&e[0].toUpperCase()})).join(""))}),(0,r.jsx)(j.Z,{color:"textPrimary",variant:"body1",children:e.name})]})}),(0,r.jsx)(g.Z,{children:e.email}),(0,r.jsx)(g.Z,{children:"".concat(e.address.city,", ").concat(e.address.state,", ").concat(e.address.country)}),(0,r.jsx)(g.Z,{children:e.phone}),(0,r.jsx)(g.Z,{children:(0,l.Z)(e.createdAt,"dd/MM/yyyy")})]},e.id);var a}))})]})})}),(0,r.jsx)(y.Z,{component:"div",count:a.length,onPageChange:function(e,a){U(a)},onRowsPerPageChange:function(e){k(e.target.value)},page:S,rowsPerPage:A,rowsPerPageOptions:[5,10,25]})]}))};w.propTypes={customers:o().array.isRequired}},2379:function(e,a,t){t.d(a,{J:function(){return x}});var r=t(5893),n=t(7357),i=t(5861),s=t(1057),c=t(6242),o=t(4267),l=t(2474),d=t(7109),u=t(3219),h=t(7169),v=t(2248),m=t(4747);function g(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var x=function(e){return(0,r.jsxs)(n.Z,function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(a){g(e,a,t[a])}))}return e}({},e,{children:[(0,r.jsxs)(n.Z,{sx:{alignItems:"center",display:"flex",justifyContent:"space-between",flexWrap:"wrap",m:-1},children:[(0,r.jsx)(i.Z,{sx:{m:1},variant:"h4",children:"Customers"}),(0,r.jsxs)(n.Z,{sx:{m:1},children:[(0,r.jsx)(s.Z,{startIcon:(0,r.jsx)(v.g,{fontSize:"small"}),sx:{mr:1},children:"Import"}),(0,r.jsx)(s.Z,{startIcon:(0,r.jsx)(m.U,{fontSize:"small"}),sx:{mr:1},children:"Export"}),(0,r.jsx)(s.Z,{color:"primary",variant:"contained",children:"Add Customers"})]})]}),(0,r.jsx)(n.Z,{sx:{mt:3},children:(0,r.jsx)(c.Z,{children:(0,r.jsx)(o.Z,{children:(0,r.jsx)(n.Z,{sx:{maxWidth:500},children:(0,r.jsx)(l.Z,{fullWidth:!0,InputProps:{startAdornment:(0,r.jsx)(d.Z,{position:"start",children:(0,r.jsx)(u.Z,{color:"action",fontSize:"small",children:(0,r.jsx)(h.o,{})})})},placeholder:"Search customer",variant:"outlined"})})})})})]}))}},4747:function(e,a,t){t.d(a,{U:function(){return n}});var r=t(5893),n=(0,t(2066).Z)((0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"})}),"Download")},7169:function(e,a,t){t.d(a,{o:function(){return n}});var r=t(5893),n=(0,t(2066).Z)((0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})}),"Search")},2248:function(e,a,t){t.d(a,{g:function(){return n}});var r=t(5893),n=(0,t(2066).Z)((0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})}),"Upload")}}]);