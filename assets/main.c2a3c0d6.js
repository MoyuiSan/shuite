import{r as p,o as d,c as f,a as l,b as i,w as _,d as g,e as y,n as T,f as v,p as A,g as k,F as P,h as L,i as M,K as R,j,k as q,l as F,t as w,m as U,q as B,s as H,u as z,z as Y,B as G,C as J,H as K,S as W,N as Q,v as Z,x as X,Q as ee,U as te,y as oe,L as se,E as ne,A as ae,D as ie,G as re,I as le,J as ce,V as ue,M as de,P as _e,O as me,R as he,T as pe,W as fe,X as ge,Y as ve,Z as ye,_ as Se,$ as be,a0 as Ie,a1 as Ee,a2 as Le,a3 as Ae,a4 as ke,a5 as we}from"./vendor.033f27fa.js";const $e=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}};$e();var S=(e,n)=>{const a=e.__vccOpts||e;for(const[r,o]of n)a[r]=o;return a};const Te={data(){return{userAuth:localStorage.getItem("user_auth")=="admin",islogin:!1,cloud:cloudbase.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,user:localStorage.getItem("yui_login_user"),menuStatus:!1,userAuth:localStorage.getItem("user_auth"),headerFixed:!1}},computed:{getMenuStatus(){return this.$store.state.asideNavStatus}},created(){this.auth=this.cloud.auth({persistence:"local"}),console.log(localStorage.getItem("user_auth")),localStorage.getItem("access_token_yui-7gel1hqtaf6fb79d")?JSON.parse(localStorage.getItem("login_type_yui-7gel1hqtaf6fb79d")).content==="ANONYMOUS"?console.log("\u533F\u540D\u767B\u5F55\u4E2D"):this.islogin=!0:this.islogin=!1},mounted(){window.addEventListener("scroll",this.handleScroll)},methods:{exit(){localStorage.removeItem("login_type_yui-7gel1hqtaf6fb79d"),localStorage.removeItem("user_info_yui-7gel1hqtaf6fb79d"),localStorage.removeItem("refresh_token_yui-7gel1hqtaf6fb79d"),localStorage.removeItem("yui_login_user"),localStorage.removeItem("access_token_yui-7gel1hqtaf6fb79d"),localStorage.removeItem("access_token_expire_yui-7gel1hqtaf6fb79d"),localStorage.removeItem("user_auth"),localStorage.removeItem("anonymous_uuid_yui-7gel1hqtaf6fb79d"),window.location.reload()},goLogin(){this.$store.commit("increment")},showAsideNav(){this.$store.state.asideNavStatus?this.$store.commit("hideAsideNav"):this.$store.commit("showAsideNav")},handleScroll(){this.headerFixed=!0}},components:{}},b=e=>(A("data-v-78743952"),e=e(),k(),e),Pe={class:"header-left"},Me={class:"header-left-item"},De=v("\u9996\u9875 "),Ne={class:"header-left-item"},Oe=v("\u8FFD\u756A "),Ve={class:"header-left-item header-left-noshow"},xe=v("\u65E5\u8BED "),Ce={class:"header-left-item header-left-noshow"},Re=v("\u77E5\u8BC6\u5E93 "),je={class:"header-left-item"},qe=v("\u5173\u4E8E "),Fe={class:"header-left-item"},Ue=v("\u62BD\u5956 "),Be={key:0,class:"header-right"},He={class:"header-right-item header-right-menu"},ze={class:"user-menu"},Ye=b(()=>l("div",{class:"user-menu-item"},"\u6211\u7684\u4FE1\u606F",-1)),Ge={key:0,class:"line"},Je={key:0,class:"user-menu-item"},Ke=b(()=>l("div",{class:"line"},null,-1)),We=b(()=>l("div",{class:"line"},null,-1)),Qe=b(()=>l("div",{class:"user-menu-item"},"\u9000\u51FA\u767B\u5F55",-1)),Ze=[Qe],Xe=b(()=>l("span",null,"\u4E0A\u4F20",-1)),et=b(()=>l("span",null,"\u8F6C\u6B63",-1)),tt={key:1,class:"header-right"},ot={class:"header-right-item"},st={class:"header-right-item header-right-menu"},nt=v(" \u767B\u5F55 "),at={class:"user-menu"},it=b(()=>l("div",{class:"user-menu-item"},"\u767B\u5F55/\u6CE8\u518C",-1));function rt(e,n,a,r,o,s){const c=p("house"),h=p("el-icon"),m=p("router-link"),I=p("calendar"),O=p("school"),V=p("milkTea"),x=p("question-filled"),C=p("present"),$=p("el-avatar");return d(),f("header",{class:T({"shuite-header":o.headerFixed})},[l("div",Pe,[i(m,{to:"/"},{default:_(()=>[l("div",Me,[i(h,null,{default:_(()=>[i(c)]),_:1}),De])]),_:1}),i(m,{to:"/bangumi"},{default:_(()=>[l("div",Ne,[i(h,null,{default:_(()=>[i(I)]),_:1}),Oe])]),_:1}),i(m,{to:"/nihongo"},{default:_(()=>[l("div",Ve,[i(h,null,{default:_(()=>[i(O)]),_:1}),xe])]),_:1}),i(m,{to:"/learn"},{default:_(()=>[l("div",Ce,[i(h,null,{default:_(()=>[i(V)]),_:1}),Re])]),_:1}),i(m,{to:"/about"},{default:_(()=>[l("div",je,[i(h,null,{default:_(()=>[i(x)]),_:1}),qe])]),_:1}),i(m,{to:"/gift"},{default:_(()=>[l("div",Fe,[i(h,null,{default:_(()=>[i(C)]),_:1}),Ue])]),_:1})]),o.islogin?(d(),f("div",Be,[l("div",He,[i($,{size:"small",src:"https://q1.qlogo.cn/g?b=qq&nk="+this.user+"&s=640"},null,8,["src"]),l("div",ze,[i(m,{to:"/user"},{default:_(()=>[Ye]),_:1}),o.userAuth?(d(),f("div",Ge)):g("",!0),i(m,{to:"/mylove"},{default:_(()=>[o.userAuth?(d(),f("div",Je,"\u6211\u7684\u6536\u85CF")):g("",!0)]),_:1}),Ke,i(m,{to:"/manage/share"},{default:_(()=>[o.userAuth?(d(),f("div",{key:0,class:"user-menu-item",onClick:n[0]||(n[0]=(...E)=>s.showAsideNav&&s.showAsideNav(...E))}," \u7CFB\u7EDF\u7BA1\u7406 ")):g("",!0)]),_:1}),We,l("a",{onClick:n[1]||(n[1]=(...E)=>s.exit&&s.exit(...E)),href:"#"},Ze)])]),l("div",{class:"header-right-item",onClick:n[2]||(n[2]=E=>o.menuStatus=!0)},[o.userAuth=="admin"?(d(),y(m,{key:0,to:"/manage/upload",class:"upload"},{default:_(()=>[Xe]),_:1})):g("",!0),o.userAuth=="normal"?(d(),y(m,{key:1,to:"/manage/upload",class:"upload"},{default:_(()=>[et]),_:1})):g("",!0)])])):g("",!0),o.islogin?g("",!0):(d(),f("div",tt,[l("div",ot,[i($,{src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"})]),l("div",st,[nt,l("div",at,[i(m,{to:"/login"},{default:_(()=>[it]),_:1})])])]))],2)}var lt=S(Te,[["render",rt],["__scopeId","data-v-78743952"]]);const ct={name:"Footer",data(){return{}},components:{}},D=e=>(A("data-v-4f6f6a1a"),e=e(),k(),e),ut=D(()=>l("canvas",{class:"fireworks",style:{position:"fixed",left:"0",top:"0","z-index":"999","pointer-events":"none"}},null,-1)),dt=D(()=>l("footer",null,"Copyright \xA9 2020-2021 \u522B\u52A8\u6211\u7ED3\u83DC",-1));function _t(e,n,a,r,o,s){return d(),f(P,null,[ut,dt],64)}var mt=S(ct,[["render",_t],["__scopeId","data-v-4f6f6a1a"]]);const ht={name:"App",step(){},data(){return{islogin:!1,ishow:!1,cloud:L.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,dialogVisible:!0,onlyMain:!1}},computed:{isLogin(){return this.$store.state.islogin},onlyMain(){return this.$store.state.onlyMain}},created(){this.auth=this.cloud.auth({persistence:"local"});const e=this.cloud.database(),n=e.command,a=new Date(new Date().setHours(0,0,0,0)).getTime();let r;localStorage.getItem("login_type_yui-7gel1hqtaf6fb79d")&&(r=JSON.parse(localStorage.getItem("login_type_yui-7gel1hqtaf6fb79d")).content),console.log(r,"12313123123123");const o=this.auth.currentUser;o&&localStorage.setItem("openid",o.uid);var s=document.location.protocol!="https:";console.log(s),s&&window.location.hostname!=="localhost"&&(window.location="https://site.shuiao.top"),this.auth.hasLoginState&&localStorage.getItem("login_type_yui-7gel1hqtaf6fb79d")?(console.log(o.uid,"user"),r!="ANONYMOUS"&&e.collection("score_log").where({uid:o.uid,scoreFrom:"login",created:n.gt(a)}).get().then(c=>{console.log(c,"aaaaa"),c.data.length===0&&this.scoreUp()})):this.nmlogin(),e.collection("user").where({email:localStorage.getItem("yui_login_user")}).get().then(c=>{const h=c.data;!!c.data&&!!h[0]&&(h[0].isEffect==="1"&&h[0].uauth==="0"?localStorage.setItem("user_auth","admin"):localStorage.setItem("user_auth","normal"))})},mounted(){setTimeout(()=>{this.ishow=!0,clearTimeout()},100)},components:{Header:lt,Footer:mt},methods:{scoreUp(){const e=this.cloud.database(),n=e.command,a=this.auth.currentUser,r=e.collection("user");e.collection("score_log").add({uid:a.uid,scoreFrom:"login",created:Date.now(),updated:Date.now()}).then(s=>{this.$ElMessage.success({message:"\u4ECA\u65E5\u79EF\u5206+1",type:"success"})}),r.where({_openid:a.uid}).update({score:n.inc(1)})},appClick(e){console.log(e),e.target.localName=="aside"&&this.$store.commit("noincrement")},async nmlogin(){const e=this.cloud.auth({persistence:"local"});await e.anonymousAuthProvider().signIn();const n=await e.getLoginState();console.log(n.isAnonymousAuth),window.location.reload()},confirm(){this.dialogVisible=!1,this.nmlogin()},goLogin(){this.$store.commit("increment"),this.dialogVisible=!1},hideLogin(){this.$store.commit("noincrement")}}};function pt(e,n,a,r,o,s){const c=p("Header"),h=p("router-view"),m=p("Footer");return o.ishow?(d(),f("div",{key:0,class:T({s_main:!s.isLogin,a_main:s.isLogin}),onDblclick:n[0]||(n[0]=(...I)=>s.hideLogin&&s.hideLogin(...I))},[e.$route.meta.onlyMain?g("",!0):(d(),y(c,{key:0})),l("section",null,[l("main",null,[i(h,null,{default:_(({Component:I})=>[(d(),y(R,null,[e.$route.meta.keepAlive?(d(),y(M(I),{key:0})):g("",!0)],1024)),e.$route.meta.keepAlive?g("",!0):(d(),y(M(I),{key:0}))]),_:1})])]),e.$route.meta.onlyMain?g("",!0):(d(),y(m,{key:1}))],34)):g("",!0)}var ft=S(ht,[["render",pt],["__scopeId","data-v-48dfe49e"]]);const gt="modulepreload",N={},vt="/",u=function(n,a){return!a||a.length===0?n():Promise.all(a.map(r=>{if(r=`${vt}${r}`,r in N)return;N[r]=!0;const o=r.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${s}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":gt,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((h,m)=>{c.addEventListener("load",h),c.addEventListener("error",m)})})).then(()=>n())},yt=()=>u(()=>import("./Index.4d026b9e.js"),["assets/Index.4d026b9e.js","assets/Index.6d99d312.css","assets/vendor.033f27fa.js","assets/NewsItem.9b5dd07c.js","assets/NewsItem.c93653b5.css"]),St=()=>u(()=>import("./Top.6fd86c40.js"),["assets/Top.6fd86c40.js","assets/Top.4301bd42.css","assets/vendor.033f27fa.js"]),bt=()=>u(()=>import("./Share.f4c61360.js"),["assets/Share.f4c61360.js","assets/Share.a89af4c3.css","assets/vendor.033f27fa.js"]),It=()=>u(()=>import("./Chat.f41b6b84.js"),["assets/Chat.f41b6b84.js","assets/Chat.82ade952.css","assets/vendor.033f27fa.js"]),Et=()=>u(()=>import("./About.a63f6ea1.js"),["assets/About.a63f6ea1.js","assets/About.65904fc3.css","assets/vendor.033f27fa.js"]),Lt=()=>u(()=>import("./User.ba47a3be.js"),["assets/User.ba47a3be.js","assets/User.394f693e.css","assets/vendor.033f27fa.js"]),At=()=>u(()=>import("./Manage.9fd301bf.js"),["assets/Manage.9fd301bf.js","assets/Manage.7f135179.css","assets/vendor.033f27fa.js"]),kt=()=>u(()=>import("./ShareManage.b28141d9.js"),["assets/ShareManage.b28141d9.js","assets/ShareManage.aedad0de.css","assets/vendor.033f27fa.js","assets/ShareUpload.4fd933cd.js","assets/ShareUpload.19bf16f1.css"]),wt=()=>u(()=>import("./ShareUpload.4fd933cd.js"),["assets/ShareUpload.4fd933cd.js","assets/ShareUpload.19bf16f1.css","assets/vendor.033f27fa.js"]),$t=()=>u(()=>import("./UserManage.9d7a1b1e.js"),["assets/UserManage.9d7a1b1e.js","assets/UserManage.bca29c2d.css","assets/vendor.033f27fa.js"]),Tt=()=>u(()=>import("./ShareMore.09705002.js"),["assets/ShareMore.09705002.js","assets/ShareMore.2c5a41cb.css","assets/vendor.033f27fa.js"]),Pt=()=>u(()=>import("./Bangumi.89e3f4bc.js"),["assets/Bangumi.89e3f4bc.js","assets/Bangumi.d10d5232.css","assets/vendor.033f27fa.js"]),Mt=()=>u(()=>import("./Nihongo.b89d46f1.js"),["assets/Nihongo.b89d46f1.js","assets/Nihongo.b19ab4a0.css","assets/vendor.033f27fa.js"]),Dt=()=>u(()=>import("./Learn.d8440045.js"),["assets/Learn.d8440045.js","assets/Learn.e7d41067.css","assets/vendor.033f27fa.js"]),Nt=()=>u(()=>import("./ShareDetail.5e3154ac.js"),["assets/ShareDetail.5e3154ac.js","assets/ShareDetail.49b0c5ed.css","assets/ShareUpload.4fd933cd.js","assets/ShareUpload.19bf16f1.css","assets/vendor.033f27fa.js"]),Ot=()=>u(()=>import("./MyLove.d071538f.js"),["assets/MyLove.d071538f.js","assets/MyLove.4d53bc59.css","assets/vendor.033f27fa.js"]),Vt=()=>u(()=>import("./ShareCard.96fbefd4.js"),["assets/ShareCard.96fbefd4.js","assets/ShareCard.cbc222aa.css","assets/vendor.033f27fa.js"]),xt=()=>u(()=>import("./NewsCard.4dedf683.js"),["assets/NewsCard.4dedf683.js","assets/NewsCard.21bb3844.css","assets/NewsItem.9b5dd07c.js","assets/NewsItem.c93653b5.css","assets/vendor.033f27fa.js"]),Ct=()=>u(()=>import("./MusicCard.98ec2657.js"),["assets/MusicCard.98ec2657.js","assets/MusicCard.cca693da.css","assets/vendor.033f27fa.js"]),Rt=()=>u(()=>import("./MuiscManage.05aa582e.js"),["assets/MuiscManage.05aa582e.js","assets/vendor.033f27fa.js"]),jt=()=>u(()=>import("./Draw.abeed8a3.js"),["assets/Draw.abeed8a3.js","assets/vendor.033f27fa.js"]),qt=()=>u(()=>import("./Login.fb7ad82c.js"),["assets/Login.fb7ad82c.js","assets/Login.55939ff2.css","assets/vendor.033f27fa.js"]),Ft=()=>u(()=>import("./Gift.a1effeec.js"),["assets/Gift.a1effeec.js","assets/Gift.0b7ddf96.css","assets/vendor.033f27fa.js"]),Ut=[{path:"/",component:yt,children:[{path:"/",component:xt,meta:{keepAlive:!0}},{path:"/share",component:Vt},{path:"/music",component:Ct},{path:"/draw",component:jt}]},{path:"/login",component:qt,meta:{onlyMain:!0}},{path:"/top",name:"top",component:St},{path:"/share",name:"share",component:bt},{path:"/chat",name:"chat",component:It},{path:"/about",name:"about",component:Et},{path:"/user",name:"user",component:Lt},{path:"/gift",name:"gift",component:Ft,meta:{onlyMain:!0}},{path:"/manage",name:"manage",children:[{path:"share",component:kt},{path:"upload",component:wt},{path:"user",component:$t},{path:"music",component:Rt}],component:At},{path:"/share/more",name:"sharemore",component:Tt},{path:"/bangumi",name:"bangumi",component:Pt},{path:"/nihongo",name:"nihongo",component:Mt},{path:"/learn",name:"learn",component:Dt},{path:"/share/detail/:id",name:"sharedetail",component:Nt},{path:"/mylove",name:"mylove",component:Ot}],Bt=j({history:q(),routes:Ut,scrollBehavior(e,n,a){}}),Ht=F({state(){return{islogin:!1,loginStatus:!1,asideNavStatus:!0,onlyMain:!0}},mutations:{increment(e){e.islogin=!0},noincrement(e){e.islogin=!1},onlyShowMain(e){e.onlyMain=!1},notOnlyShowMain(e){e.onlyMain=!0},inlogin(e){e.loginStatus=!0},nologin(e){e.loginStatus=!1},showAsideNav(e){e.asideNavStatus=!0},hideAsideNav(e){e.asideNavStatus=!1}}});const zt={data(){return{fomatTime:""}},props:["time","type"],computed:{fomatTime:function(){return this.fomatTime=this.$moment(this.time).format("YYYY-MM-DD hh:mm:ss"),this.fomatTime},FromNow:function(){return this.fomatTime=this.$moment(this.time).FromNow(),this.fomatTime}},created(){console.log(document.getElementsByClassName("shuite-timer"))},components:{}},Yt={key:0},Gt={key:1};function Jt(e,n,a,r,o,s){return d(),f(P,null,[a.type?g("",!0):(d(),f("span",Yt,w(s.fomatTime),1)),a.type=="1"?(d(),f("span",Gt,w(s.FromNow),1)):g("",!0)],64)}var Kt=S(zt,[["render",Jt]]);const Wt={data(){return{}},setup(){return{input:U("")}},props:{subname:{default:"\u641C\u7D22"}},created(){},methods:{searchFunc(){this.$emit("search")}},components:{}},Qt={class:"shuite-input"};function Zt(e,n,a,r,o,s){const c=p("el-input"),h=p("el-button");return d(),f("div",Qt,[i(c,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",modelValue:r.input,"onUpdate:modelValue":n[0]||(n[0]=m=>r.input=m),clearable:"",class:"shuite-search"},null,8,["modelValue"]),i(h,{onClick:s.searchFunc,style:{height:"40px","margin-left":"10px","margin-right":"10px"}},{default:_(()=>[v(w(a.subname),1)]),_:1},8,["onClick"])])}var Xt=S(Wt,[["render",Zt],["__scopeId","data-v-c111c610"]]);const eo={},to=e=>(A("data-v-0089b6c8"),e=e(),k(),e),oo={class:"lottie-player"},so=to(()=>l("span",null,"\u52A0\u8F7D\u4E2D...",-1));function no(e,n){const a=p("lottie-player");return d(),f("div",oo,[i(a,{src:"https://assets5.lottiefiles.com/packages/lf20_jqtrvhhf.json",background:"transparent",speed:"1",loop:"",autoplay:""}),so])}var ao=S(eo,[["render",no],["__scopeId","data-v-0089b6c8"]]);const io={setup(){},props:{srcUrl:String,speed:Number,width:String,height:String}},ro={class:"lottie-player"};function lo(e,n,a,r,o,s){const c=p("lottie-player");return d(),f("div",ro,[i(c,{src:a.srcUrl,background:"transparent",loop:"",speed:a.speed,autoplay:"",style:B({width:a.width,height:a.height}),height:a.height},null,8,["src","speed","style","height"])])}var co=S(io,[["render",lo],["__scopeId","data-v-668d6530"]]);const t=H(ft);t.use(z,{locale:Y});t.component("baseball",G);t.component("calendar",J);t.component("house",K);t.component("school",W);t.component("notebook",Q);t.component("star",Z);t.component("star-filled",X);t.component("question-filled",ee);t.component("user",te);t.component("close",oe);t.component("link",se);t.component("expand",ne);t.component("fold",ae);t.component("location",ie);t.component("setting",re);t.component("upload",le);t.component("ship",ce);t.component("video-camera",ue);t.component("mic",de);t.component("paperclip",_e);t.component("chat-round",me);t.component("edit",he);t.component("more-filled",pe);t.component("trophy",fe);t.component("milkTea",ge);t.component("bell",ve);t.component("refresh",ye);t.component("delete",Se);t.component("zoom-in",be);t.component("plus",Ie);t.component("present",Ee);t.config.globalProperties.$scrollReveal=Le;t.config.globalProperties.$axios=Ae;t.config.globalProperties.$cloudbase=L;t.config.globalProperties.$moment=ke;t.config.globalProperties.$ElMessage=we;t.component("Timer",Kt);t.component("shuite-input",Xt);t.component("shuite-loading",ao);t.component("lottie-player-s",co);L.init({env:"yui-7gel1hqtaf6fb79d"});const uo=L.auth({persistence:"local"});t.config.globalProperties.$auth=uo;t.use(Bt);t.use(Ht);t.mount("#app");export{Xt as S,S as _};