(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{122:function(e,n,t){"use strict";t.d(n,{Z:function(){return w}});var r=t(3366),o=t(7462),a=t(7294),i=(t(5697),t(6010)),s=t(7463),u=t(4844),c=t(1796),l=t(8216),d=t(1496),p=t(3616),m=t(8791),h=t(1705),f=t(5861),g=t(1420);function v(e){return(0,g.Z)("MuiLink",e)}var x=(0,t(1271).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),b=t(5893);const y=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},j=(0,d.ZP)(f.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[`underline${(0,l.Z)(t.underline)}`],"button"===t.component&&n.button]}})((({theme:e,ownerState:n})=>{const t=(0,u.D)(e,`palette.${(e=>Z[e]||e)(n.color)}`)||n.color;return(0,o.Z)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==t?(0,c.Fq)(t,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===n.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${x.focusVisible}`]:{outline:"auto"}})}));var w=a.forwardRef((function(e,n){const t=(0,p.Z)({props:e,name:"MuiLink"}),{className:u,color:c="primary",component:d="a",onBlur:f,onFocus:g,TypographyClasses:x,underline:Z="always",variant:w="inherit"}=t,S=(0,r.Z)(t,y),{isFocusVisibleRef:k,onBlur:_,onFocus:I,ref:A}=(0,m.Z)(),[C,P]=a.useState(!1),D=(0,h.Z)(n,A),N=(0,o.Z)({},t,{color:c,component:d,focusVisible:C,underline:Z,variant:w}),L=(e=>{const{classes:n,component:t,focusVisible:r,underline:o}=e,a={root:["root",`underline${(0,l.Z)(o)}`,"button"===t&&"button",r&&"focusVisible"]};return(0,s.Z)(a,v,n)})(N);return(0,b.jsx)(j,(0,o.Z)({className:(0,i.Z)(L.root,u),classes:x,color:c,component:d,onBlur:e=>{_(e),!1===k.current&&P(!1),f&&f(e)},onFocus:e=>{I(e),!0===k.current&&P(!0),g&&g(e)},ref:D,ownerState:N,variant:w},S))}))},7156:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return t(6749)}])},7035:function(e,n,t){"use strict";t.d(n,{I8:function(){return i},tO:function(){return a}});var r=t(1923),o=t.n(r);t(5978),t(4642),t(6690),t(5450),t(7528),t(6257);o().apps.length||o().initializeApp({apiKey:"AIzaSyBSEx2-ykPTb70keLZh3LAuDtQT2VyCsco",authDomain:"evencloud-26d32.firebaseapp.com",databaseURL:"https://evencloud-26d32.firebaseio.com",projectId:"evencloud-26d32",storageBucket:"evencloud-26d32.appspot.com",messagingSenderId:"599725599274",appId:"1:599725599274:web:8f9a716ca577fc72a1f153",measurementId:"G-VSJNQ5LYK5"});var a=o().storage(),i=(o().database(),o().auth());o().firestore(),new(o().auth.GoogleAuthProvider),new(o().auth.FacebookAuthProvider),new(o().auth.TwitterAuthProvider)},8977:function(e,n,t){"use strict";t.d(n,{V:function(){return r}});var r="https://steamlab.herokuapp.com"},6749:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return b}});var r=t(5893),o=t(9008),a=t(7294),i=t(7948),s=t(7357),u=t(5861),c=t(2474),l=t(1057),d=t(122),p=t(1664),m=t(1163),h=t(9669),f=t.n(h),g=t(7035),v=t(8977),x=function(){var e=(0,a.useState)(""),n=e[0],t=e[1],o=(0,a.useState)(""),h=o[0],x=o[1],b=(0,m.useRouter)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(i.Z,{maxWidth:"sm",children:(0,r.jsxs)("form",{children:[(0,r.jsxs)(s.Z,{sx:{my:3},children:[(0,r.jsx)("center",{children:(0,r.jsx)("img",{style:{width:"30%",marginBottom:"20px"},src:"https://res.cloudinary.com/dx9dnqzaj/image/upload/v1638790703/fileuploadproject3d/Plan_de_travail_1_seli1r.png",alt:"Logo"})}),(0,r.jsx)(u.Z,{color:"textPrimary",variant:"h4",children:"Sign in"}),(0,r.jsx)(u.Z,{color:"textSecondary",gutterBottom:!0,variant:"body2",children:"Sign in on the internal platform"})]}),(0,r.jsx)(s.Z,{sx:{pb:1}}),(0,r.jsx)(c.Z,{fullWidth:!0,margin:"normal",label:"Email address",name:"email",onChange:function(e){return t(e.target.value)},type:"email",variant:"outlined"}),(0,r.jsx)(c.Z,{fullWidth:!0,label:"Password",margin:"normal",name:"password",type:"password",onChange:function(e){return x(e.target.value)},variant:"outlined"}),(0,r.jsx)(s.Z,{sx:{py:2},children:(0,r.jsx)(l.Z,{color:"primary",fullWidth:!0,size:"large",onClick:function(e){e.preventDefault(),f().get("".concat(v.V,"/api/v1/main/getuseraccesspermissionfileupload/").concat(n)).then((function(e){e.data[0].access?g.I8.signInWithEmailAndPassword(n,h).then((function(){g.I8.onAuthStateChanged((function(e){e&&(sessionStorage.setItem("userId",e.uid),sessionStorage.setItem("userEmail",e.email),b.push({pathname:"/"}))}))})).catch((function(e){var n=e.message;alert(n)})):alert("Your Account is Blocked")})).catch((function(e){return console.log(e)}))},type:"button",variant:"contained",children:"Sign In Now"})}),(0,r.jsxs)(u.Z,{color:"textSecondary",variant:"body2",children:["Don't have an account?"," ",(0,r.jsx)(p.default,{href:"/register",children:(0,r.jsx)(d.Z,{to:"/register",variant:"subtitle2",underline:"hover",sx:{cursor:"pointer"},children:"Sign Up"})})]})]})})})},b=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.default,{children:(0,r.jsx)("title",{children:"Steamlab | Login"})}),(0,r.jsx)(s.Z,{component:"main",sx:{alignItems:"center",display:"flex",flexGrow:1,minHeight:"100%",mt:2},children:(0,r.jsx)(x,{})})]})}}},function(e){e.O(0,[883,775,239,63,650,474,774,888,179],(function(){return n=7156,e(e.s=n);var n}));var n=e.O();_N_E=n}]);