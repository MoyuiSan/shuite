import{r as p,o as d,c as g,a as c,b as r,w as _,d as f,e as v,n as T,f as y,p as A,g as k,F as P,h as L,i as M,K as C,j as R,k as j,l as q,t as w,m as F,q as U,s as B,u as H,z,B as Y,C as J,H as K,S as W,N as Q,v as Z,x as G,Q as X,U as ee,y as te,L as oe,E as se,A as ne,D as ae,G as ie,I as re,J as le,V as ce,M as ue,P as de,O as _e,R as me,T as he,W as pe,X as ge,Y as fe,Z as ve,_ as ye,$ as Se,a0 as be,a1 as Ie,a2 as Ee,a3 as Le,a4 as Ae}from"./vendor.7bf13f67.js";const ke=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}};ke();var S=(e,n)=>{const a=e.__vccOpts||e;for(const[i,o]of n)a[i]=o;return a};const we={data(){return{userAuth:localStorage.getItem("user_auth")=="admin",islogin:!1,cloud:cloudbase.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,user:localStorage.getItem("yui_login_user"),menuStatus:!1,userAuth:localStorage.getItem("user_auth"),headerFixed:!1}},computed:{getMenuStatus(){return this.$store.state.asideNavStatus}},created(){this.auth=this.cloud.auth({persistence:"local"}),console.log(localStorage.getItem("user_auth")),localStorage.getItem("access_token_yui-7gel1hqtaf6fb79d")?JSON.parse(localStorage.getItem("login_type_yui-7gel1hqtaf6fb79d")).content==="ANONYMOUS"?console.log("\u533F\u540D\u767B\u5F55\u4E2D"):this.islogin=!0:this.islogin=!1},mounted(){window.addEventListener("scroll",this.handleScroll)},methods:{exit(){localStorage.removeItem("login_type_yui-7gel1hqtaf6fb79d"),localStorage.removeItem("user_info_yui-7gel1hqtaf6fb79d"),localStorage.removeItem("refresh_token_yui-7gel1hqtaf6fb79d"),localStorage.removeItem("yui_login_user"),localStorage.removeItem("access_token_yui-7gel1hqtaf6fb79d"),localStorage.removeItem("access_token_expire_yui-7gel1hqtaf6fb79d"),localStorage.removeItem("user_auth"),localStorage.removeItem("anonymous_uuid_yui-7gel1hqtaf6fb79d"),window.location.reload()},goLogin(){this.$store.commit("increment")},showAsideNav(){this.$store.state.asideNavStatus?this.$store.commit("hideAsideNav"):this.$store.commit("showAsideNav")},handleScroll(){this.headerFixed=!0}},components:{}},b=e=>(A("data-v-1a36d506"),e=e(),k(),e),$e={class:"header-left"},Te={class:"header-left-item"},Pe=y("\u9996\u9875 "),Me={class:"header-left-item"},De=y("\u8FFD\u756A "),Ne={class:"header-left-item header-left-noshow"},Oe=y("\u65E5\u8BED "),xe={class:"header-left-item header-left-noshow"},Ve=y("\u77E5\u8BC6\u5E93 "),Ce={class:"header-left-item"},Re=y("\u5173\u4E8E "),je={key:0,class:"header-right"},qe={class:"header-right-item header-right-menu"},Fe={class:"user-menu"},Ue=b(()=>c("div",{class:"user-menu-item"},"\u6211\u7684\u4FE1\u606F",-1)),Be={key:0,class:"line"},He={key:0,class:"user-menu-item"},ze=b(()=>c("div",{class:"line"},null,-1)),Ye=b(()=>c("div",{class:"line"},null,-1)),Je=b(()=>c("div",{class:"user-menu-item"},"\u9000\u51FA\u767B\u5F55",-1)),Ke=[Je],We=b(()=>c("span",null,"\u4E0A\u4F20",-1)),Qe=b(()=>c("span",null,"\u8F6C\u6B63",-1)),Ze={key:1,class:"header-right"},Ge={class:"header-right-item"},Xe={class:"header-right-item header-right-menu"},et=y(" \u767B\u5F55 "),tt={class:"user-menu"},ot=b(()=>c("div",{class:"user-menu-item"},"\u767B\u5F55/\u6CE8\u518C",-1));function st(e,n,a,i,o,s){const l=p("house"),h=p("el-icon"),m=p("router-link"),I=p("calendar"),O=p("school"),x=p("milkTea"),V=p("question-filled"),$=p("el-avatar");return d(),g("header",{class:T({"shuite-header":o.headerFixed})},[c("div",$e,[r(m,{to:"/"},{default:_(()=>[c("div",Te,[r(h,null,{default:_(()=>[r(l)]),_:1}),Pe])]),_:1}),r(m,{to:"/bangumi"},{default:_(()=>[c("div",Me,[r(h,null,{default:_(()=>[r(I)]),_:1}),De])]),_:1}),r(m,{to:"/nihongo"},{default:_(()=>[c("div",Ne,[r(h,null,{default:_(()=>[r(O)]),_:1}),Oe])]),_:1}),r(m,{to:"/learn"},{default:_(()=>[c("div",xe,[r(h,null,{default:_(()=>[r(x)]),_:1}),Ve])]),_:1}),r(m,{to:"/about"},{default:_(()=>[c("div",Ce,[r(h,null,{default:_(()=>[r(V)]),_:1}),Re])]),_:1})]),o.islogin?(d(),g("div",je,[c("div",qe,[r($,{size:"small",src:"https://q1.qlogo.cn/g?b=qq&nk="+this.user+"&s=640"},null,8,["src"]),c("div",Fe,[r(m,{to:"/user"},{default:_(()=>[Ue]),_:1}),o.userAuth?(d(),g("div",Be)):f("",!0),r(m,{to:"/mylove"},{default:_(()=>[o.userAuth?(d(),g("div",He,"\u6211\u7684\u6536\u85CF")):f("",!0)]),_:1}),ze,r(m,{to:"/manage/share"},{default:_(()=>[o.userAuth?(d(),g("div",{key:0,class:"user-menu-item",onClick:n[0]||(n[0]=(...E)=>s.showAsideNav&&s.showAsideNav(...E))}," \u7CFB\u7EDF\u7BA1\u7406 ")):f("",!0)]),_:1}),Ye,c("a",{onClick:n[1]||(n[1]=(...E)=>s.exit&&s.exit(...E)),href:"#"},Ke)])]),c("div",{class:"header-right-item",onClick:n[2]||(n[2]=E=>o.menuStatus=!0)},[o.userAuth=="admin"?(d(),v(m,{key:0,to:"/manage/upload",class:"upload"},{default:_(()=>[We]),_:1})):f("",!0),o.userAuth=="normal"?(d(),v(m,{key:1,to:"/manage/upload",class:"upload"},{default:_(()=>[Qe]),_:1})):f("",!0)])])):f("",!0),o.islogin?f("",!0):(d(),g("div",Ze,[c("div",Ge,[r($,{src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"})]),c("div",Xe,[et,c("div",tt,[r(m,{to:"/login"},{default:_(()=>[ot]),_:1})])])]))],2)}var nt=S(we,[["render",st],["__scopeId","data-v-1a36d506"]]);const at={name:"Footer",data(){return{}},components:{}},D=e=>(A("data-v-4f6f6a1a"),e=e(),k(),e),it=D(()=>c("canvas",{class:"fireworks",style:{position:"fixed",left:"0",top:"0","z-index":"999","pointer-events":"none"}},null,-1)),rt=D(()=>c("footer",null,"Copyright \xA9 2020-2021 \u522B\u52A8\u6211\u7ED3\u83DC",-1));function lt(e,n,a,i,o,s){return d(),g(P,null,[it,rt],64)}var ct=S(at,[["render",lt],["__scopeId","data-v-4f6f6a1a"]]);const ut={name:"App",step(){},data(){return{islogin:!1,ishow:!1,cloud:L.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,dialogVisible:!0,onlyMain:!1}},computed:{isLogin(){return this.$store.state.islogin},onlyMain(){return this.$store.state.onlyMain}},created(){this.auth=this.cloud.auth({persistence:"local"});const e=this.cloud.database(),n=e.command,a=new Date(new Date().setHours(0,0,0,0)).getTime();let i;localStorage.getItem("login_type_yui-7gel1hqtaf6fb79d")&&(i=JSON.parse(localStorage.getItem("login_type_yui-7gel1hqtaf6fb79d")).content),console.log(i,"12313123123123");const o=this.auth.currentUser;o&&localStorage.setItem("openid",o.uid);var s=document.location.protocol!="https:";console.log(s),s&&window.location.hostname!=="localhost"&&(window.location="https://site.shuiao.top"),this.auth.hasLoginState&&localStorage.getItem("login_type_yui-7gel1hqtaf6fb79d")?(console.log(o.uid,"user"),i!="ANONYMOUS"&&e.collection("score_log").where({uid:o.uid,scoreFrom:"login",created:n.gt(a)}).get().then(l=>{console.log(l,"aaaaa"),l.data.length===0&&this.scoreUp()})):this.nmlogin(),e.collection("user").where({email:localStorage.getItem("yui_login_user")}).get().then(l=>{const h=l.data;!!l.data&&!!h[0]&&(h[0].isEffect==="1"&&h[0].uauth==="0"?localStorage.setItem("user_auth","admin"):localStorage.setItem("user_auth","normal"))})},components:{Header:nt,Footer:ct},methods:{scoreUp(){const e=this.cloud.database(),n=e.command,a=this.auth.currentUser,i=e.collection("user");e.collection("score_log").add({uid:a.uid,scoreFrom:"login",created:Date.now(),updated:Date.now()}).then(s=>{this.$ElMessage.success({message:"\u4ECA\u65E5\u79EF\u5206+1",type:"success"})}),i.where({_openid:a.uid}).update({score:n.inc(1)})},appClick(e){console.log(e),e.target.localName=="aside"&&this.$store.commit("noincrement")},async nmlogin(){const e=this.cloud.auth({persistence:"local"});await e.anonymousAuthProvider().signIn();const n=await e.getLoginState();console.log(n.isAnonymousAuth),window.location.reload()},confirm(){this.dialogVisible=!1,this.nmlogin()},goLogin(){this.$store.commit("increment"),this.dialogVisible=!1},hideLogin(){this.$store.commit("noincrement")}}};function dt(e,n,a,i,o,s){const l=p("Header"),h=p("router-view"),m=p("Footer");return d(),g("div",{class:T({s_main:!s.isLogin,a_main:s.isLogin}),onDblclick:n[0]||(n[0]=(...I)=>s.hideLogin&&s.hideLogin(...I))},[e.$route.meta.onlyMain?f("",!0):(d(),v(l,{key:0})),c("section",null,[c("main",null,[r(h,null,{default:_(({Component:I})=>[(d(),v(C,null,[e.$route.meta.keepAlive?(d(),v(M(I),{key:0})):f("",!0)],1024)),e.$route.meta.keepAlive?f("",!0):(d(),v(M(I),{key:0}))]),_:1})])]),e.$route.meta.onlyMain?f("",!0):(d(),v(m,{key:1}))],34)}var _t=S(ut,[["render",dt],["__scopeId","data-v-41393e45"]]);const mt="modulepreload",N={},ht="/",u=function(n,a){return!a||a.length===0?n():Promise.all(a.map(i=>{if(i=`${ht}${i}`,i in N)return;N[i]=!0;const o=i.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${s}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":mt,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((h,m)=>{l.addEventListener("load",h),l.addEventListener("error",m)})})).then(()=>n())},pt=()=>u(()=>import("./Index.42159666.js"),["assets/Index.42159666.js","assets/Index.6d99d312.css","assets/vendor.7bf13f67.js","assets/NewsItem.bbf75f04.js","assets/NewsItem.c93653b5.css"]),gt=()=>u(()=>import("./Top.9f8e15e6.js"),["assets/Top.9f8e15e6.js","assets/Top.4301bd42.css","assets/vendor.7bf13f67.js"]),ft=()=>u(()=>import("./Share.1794d325.js"),["assets/Share.1794d325.js","assets/Share.a89af4c3.css","assets/vendor.7bf13f67.js"]),vt=()=>u(()=>import("./Chat.051cf317.js"),["assets/Chat.051cf317.js","assets/Chat.82ade952.css","assets/vendor.7bf13f67.js"]),yt=()=>u(()=>import("./About.ef14ff40.js"),["assets/About.ef14ff40.js","assets/About.65904fc3.css","assets/vendor.7bf13f67.js"]),St=()=>u(()=>import("./User.088e3ed4.js"),["assets/User.088e3ed4.js","assets/User.eb970f1f.css","assets/vendor.7bf13f67.js"]),bt=()=>u(()=>import("./Manage.59ef0227.js"),["assets/Manage.59ef0227.js","assets/Manage.7f135179.css","assets/vendor.7bf13f67.js"]),It=()=>u(()=>import("./ShareManage.4cc40958.js"),["assets/ShareManage.4cc40958.js","assets/ShareManage.39e3c4c2.css","assets/vendor.7bf13f67.js","assets/ShareUpload.e3a06b1c.js","assets/ShareUpload.48561461.css"]),Et=()=>u(()=>import("./ShareUpload.e3a06b1c.js"),["assets/ShareUpload.e3a06b1c.js","assets/ShareUpload.48561461.css","assets/vendor.7bf13f67.js"]),Lt=()=>u(()=>import("./UserManage.6304ef75.js"),["assets/UserManage.6304ef75.js","assets/UserManage.4910776d.css","assets/vendor.7bf13f67.js"]),At=()=>u(()=>import("./ShareMore.e2b10297.js"),["assets/ShareMore.e2b10297.js","assets/ShareMore.2c5a41cb.css","assets/vendor.7bf13f67.js"]),kt=()=>u(()=>import("./Bangumi.01a64e4d.js"),["assets/Bangumi.01a64e4d.js","assets/Bangumi.d10d5232.css","assets/vendor.7bf13f67.js"]),wt=()=>u(()=>import("./Nihongo.11ef91a8.js"),["assets/Nihongo.11ef91a8.js","assets/Nihongo.b19ab4a0.css","assets/vendor.7bf13f67.js"]),$t=()=>u(()=>import("./Learn.c43e1f92.js"),["assets/Learn.c43e1f92.js","assets/Learn.e7d41067.css","assets/vendor.7bf13f67.js"]),Tt=()=>u(()=>import("./ShareDetail.119ec6e7.js"),["assets/ShareDetail.119ec6e7.js","assets/ShareDetail.4d39e953.css","assets/ShareUpload.e3a06b1c.js","assets/ShareUpload.48561461.css","assets/vendor.7bf13f67.js"]),Pt=()=>u(()=>import("./MyLove.996225bd.js"),["assets/MyLove.996225bd.js","assets/MyLove.4d53bc59.css","assets/vendor.7bf13f67.js"]),Mt=()=>u(()=>import("./ShareCard.a01535cb.js"),["assets/ShareCard.a01535cb.js","assets/ShareCard.cbc222aa.css","assets/vendor.7bf13f67.js"]),Dt=()=>u(()=>import("./NewsCard.78958079.js"),["assets/NewsCard.78958079.js","assets/NewsCard.21bb3844.css","assets/NewsItem.bbf75f04.js","assets/NewsItem.c93653b5.css","assets/vendor.7bf13f67.js"]),Nt=()=>u(()=>import("./MusicCard.0beddcf9.js"),["assets/MusicCard.0beddcf9.js","assets/MusicCard.cca693da.css","assets/vendor.7bf13f67.js"]),Ot=()=>u(()=>import("./MuiscManage.8d934d13.js"),["assets/MuiscManage.8d934d13.js","assets/vendor.7bf13f67.js"]),xt=()=>u(()=>import("./Draw.aa836c1c.js"),["assets/Draw.aa836c1c.js","assets/vendor.7bf13f67.js"]),Vt=()=>u(()=>import("./Login.5d0d989b.js"),["assets/Login.5d0d989b.js","assets/Login.55939ff2.css","assets/vendor.7bf13f67.js"]),Ct=[{path:"/",component:pt,children:[{path:"/",component:Dt,meta:{keepAlive:!0}},{path:"/share",component:Mt},{path:"/music",component:Nt},{path:"/draw",component:xt}]},{path:"/login",component:Vt,meta:{onlyMain:!0}},{path:"/top",name:"top",component:gt},{path:"/share",name:"share",component:ft},{path:"/chat",name:"chat",component:vt},{path:"/about",name:"about",component:yt},{path:"/user",name:"user",component:St},{path:"/manage",name:"manage",children:[{path:"share",component:It},{path:"upload",component:Et},{path:"user",component:Lt},{path:"music",component:Ot}],component:bt},{path:"/share/more",name:"sharemore",component:At},{path:"/bangumi",name:"bangumi",component:kt},{path:"/nihongo",name:"nihongo",component:wt},{path:"/learn",name:"learn",component:$t},{path:"/share/detail/:id",name:"sharedetail",component:Tt},{path:"/mylove",name:"mylove",component:Pt}],Rt=R({history:j(),routes:Ct,scrollBehavior(e,n,a){}}),jt=q({state(){return{islogin:!1,loginStatus:!1,asideNavStatus:!0,onlyMain:!0}},mutations:{increment(e){e.islogin=!0},noincrement(e){e.islogin=!1},onlyShowMain(e){e.onlyMain=!1},notOnlyShowMain(e){e.onlyMain=!0},inlogin(e){e.loginStatus=!0},nologin(e){e.loginStatus=!1},showAsideNav(e){e.asideNavStatus=!0},hideAsideNav(e){e.asideNavStatus=!1}}});const qt={data(){return{fomatTime:""}},props:["time","type"],computed:{fomatTime:function(){return this.fomatTime=this.$moment(this.time).format("YYYY-MM-DD hh:mm:ss"),this.fomatTime},FromNow:function(){return this.fomatTime=this.$moment(this.time).FromNow(),this.fomatTime}},created(){console.log(document.getElementsByClassName("shuite-timer"))},components:{}},Ft={key:0},Ut={key:1};function Bt(e,n,a,i,o,s){return d(),g(P,null,[a.type?f("",!0):(d(),g("span",Ft,w(s.fomatTime),1)),a.type=="1"?(d(),g("span",Ut,w(s.FromNow),1)):f("",!0)],64)}var Ht=S(qt,[["render",Bt]]);const zt={data(){return{}},setup(){return{input:F("")}},props:{subname:{default:"\u641C\u7D22"}},created(){},methods:{searchFunc(){this.$emit("search")}},components:{}},Yt={class:"shuite-input"};function Jt(e,n,a,i,o,s){const l=p("el-input"),h=p("el-button");return d(),g("div",Yt,[r(l,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",modelValue:i.input,"onUpdate:modelValue":n[0]||(n[0]=m=>i.input=m),clearable:"",class:"shuite-search"},null,8,["modelValue"]),r(h,{onClick:s.searchFunc,style:{height:"40px","margin-left":"10px","margin-right":"10px"}},{default:_(()=>[y(w(a.subname),1)]),_:1},8,["onClick"])])}var Kt=S(zt,[["render",Jt],["__scopeId","data-v-c111c610"]]);const Wt={},Qt=e=>(A("data-v-0089b6c8"),e=e(),k(),e),Zt={class:"lottie-player"},Gt=Qt(()=>c("span",null,"\u52A0\u8F7D\u4E2D...",-1));function Xt(e,n){const a=p("lottie-player");return d(),g("div",Zt,[r(a,{src:"https://assets5.lottiefiles.com/packages/lf20_jqtrvhhf.json",background:"transparent",speed:"1",loop:"",autoplay:""}),Gt])}var eo=S(Wt,[["render",Xt],["__scopeId","data-v-0089b6c8"]]);const to={setup(){},props:{srcUrl:String,speed:Number,width:String,height:String}},oo={class:"lottie-player"};function so(e,n,a,i,o,s){const l=p("lottie-player");return d(),g("div",oo,[r(l,{src:a.srcUrl,background:"transparent",loop:"",speed:a.speed,autoplay:"",style:U({width:a.width,height:a.height}),height:a.height},null,8,["src","speed","style","height"])])}var no=S(to,[["render",so],["__scopeId","data-v-668d6530"]]);const t=B(_t);t.use(H,{locale:z});t.component("baseball",Y);t.component("calendar",J);t.component("house",K);t.component("school",W);t.component("notebook",Q);t.component("star",Z);t.component("star-filled",G);t.component("question-filled",X);t.component("user",ee);t.component("close",te);t.component("link",oe);t.component("expand",se);t.component("fold",ne);t.component("location",ae);t.component("setting",ie);t.component("upload",re);t.component("ship",le);t.component("video-camera",ce);t.component("mic",ue);t.component("paperclip",de);t.component("chat-round",_e);t.component("edit",me);t.component("more-filled",he);t.component("trophy",pe);t.component("milkTea",ge);t.component("bell",fe);t.component("refresh",ve);t.component("delete",ye);t.component("zoom-in",Se);t.component("plus",be);t.config.globalProperties.$scrollReveal=Ie;t.config.globalProperties.$axios=Ee;t.config.globalProperties.$cloudbase=L;t.config.globalProperties.$moment=Le;t.config.globalProperties.$ElMessage=Ae;t.component("Timer",Ht);t.component("shuite-input",Kt);t.component("shuite-loading",eo);t.component("lottie-player-s",no);L.init({env:"yui-7gel1hqtaf6fb79d"});const ao=L.auth({persistence:"local"});t.config.globalProperties.$auth=ao;t.use(Rt);t.use(jt);t.mount("#app");export{Kt as S,S as _};
