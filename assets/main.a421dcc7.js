import{c as A,o as m,a as f,w as $,v as V,b as l,p as w,d as E,e as y,r as p,f as a,g as _,h as g,F as N,n as C,i as z,j as k,k as M,K as H,l as Y,m as K,q as Q,t as L,s as W,u as Z,x as J,z as X,B as G,C as ee,H as te,S as oe,N as se,y as ne,A as ae,Q as ie,U as re,D as le,L as ce,E as ue,G as de,I as me,J as _e,M as he,O as pe,V as fe,P as ge,R as ve,T as ye,W as be,X as Ie,Y as Se,Z as Ae,_ as we,$ as Ee,a0 as ke,a1 as Le,a2 as Te,a3 as Pe}from"./vendor.893c1949.js";const $e=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function c(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=c(o);fetch(o.href,s)}};$e();var S=(e,t)=>{const c=e.__vccOpts||e;for(const[r,o]of t)c[r]=o;return c};AV;const Ve={name:"Login",data(){return{cloud:A.init({env:"yui-7gel1hqtaf6fb79d"}),email:"",password:"",test:""}},computed:{test(){return this.$store.state.islogin}},created(){AV.init({appId:"tYNddUiQgK4ghsF9PDzRiz2j-MdYXbMMI",appKey:"I3DfpmsVmqqeA66CARr0H1Br"})},mounted(){const e=new AV.Query("userinfo");e.equalTo("email",this.email),e.find().then(t=>{console.log(t)})},methods:{register(){NProgress.start();const e=this.email;/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(e)?this.cloud.auth().signUpWithEmailAndPassword(this.email,this.password).then(()=>{NProgress.done()}).catch(c=>{c&&this.$ElMessage.error("\u90AE\u7BB1\u5DF2\u5B58\u5728\uFF01"),NProgress.done()}):(alert("\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E"),NProgress.done())},login(){NProgress.start(),this.cloud.auth({persistence:"local"}).signInWithEmailAndPassword(this.email,this.password).then(t=>{localStorage.setItem("yui_login_user",this.email);const c=new AV.Query("userinfo");c.equalTo("email",this.email);const r=this.cloud.database();r.command;const s=this.cloud.auth({persistence:"local"}).currentUser;r.collection("user").where({email:this.email}).get().then(i=>{if(!!i.data[0]||localStorage.getItem("uesr_auth")=="normal")return!1;r.collection("user").add({email:this.email,uauth:"1",created:Date.now(),updated:Date.now(),isEffect:"1",uid:s.uid}).then(u=>{console.log(u)})}),r.collection("user").where({email:localStorage.getItem("yui_login_user")}).get().then(i=>{const u=i.data;i.data&&(u[0].isEffect==="1"&&u[0].uauth==="0"?localStorage.setItem("user_auth","admin"):localStorage.setItem("user_auth","normal"))}),c.find().then(i=>{if(!i){const h=AV.Object.extend("userinfo"),b=new h;b.set("nickname","\u65E0\u540D\u4EBA\u58EB"),b.set("email",this.email),b.save().then(v=>{console.log(`\u4FDD\u5B58\u6210\u529F\u3002objectId\uFF1A${v.id}`)},v=>{ElMessage.error("\u6570\u636E\u4FDD\u5B58\u5931\u8D25!")})}let u=setTimeout(()=>{this.$store.commit("increment"),NProgress.done(),window.location.reload(),clearTimeout(u)},500);u=null})});let e=setTimeout(()=>{localStorage.getItem("yui_login_user")||ElMessage.error("\u8D26\u6237\u5BC6\u7801\u9519\u8BEF!"),NProgress.done(),clearTimeout(e)},2e3);e=null}}},D=e=>(w("data-v-d4f45df8"),e=e(),E(),e),Ne={class:"login boxshadow"},Ce=D(()=>l("h2",null,"\u767B\u5F55",-1)),Me={class:"register"},De=y("\u6CA1\u6709\u8D26\u53F7?"),xe={class:"btn"},Oe=D(()=>l("button",null,"\u91CD\u7F6E",-1));function qe(e,t,c,r,o,s){return m(),f("div",Ne,[Ce,$(l("input",{type:"email",placeholder:"\u8BF7\u8F93\u5165\u4F60\u7684\u90AE\u7BB1","onUpdate:modelValue":t[0]||(t[0]=i=>o.email=i)},null,512),[[V,o.email]]),$(l("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=i=>o.password=i),placeholder:"\u8BF7\u8F93\u5165\u4F60\u7684\u5BC6\u7801"},null,512),[[V,o.password]]),l("div",Me,[De,l("span",{onClick:t[2]||(t[2]=(...i)=>s.register&&s.register(...i))},"\u6CE8\u518C\u4E00\u4E0B")]),l("div",xe,[l("button",{onClick:t[3]||(t[3]=(...i)=>s.login&&s.login(...i))},"\u767B\u9646"),Oe])])}var Re=S(Ve,[["render",qe],["__scopeId","data-v-d4f45df8"]]);const Fe={data(){return{userAuth:localStorage.getItem("user_auth")=="admin",islogin:!1,cloud:cloudbase.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,user:localStorage.getItem("yui_login_user"),menuStatus:!1}},computed:{},created(){this.auth=this.cloud.auth({persistence:"local"}),console.log(localStorage.getItem("user_auth")),localStorage.getItem("access_token_yui-7gel1hqtaf6fb79d")?JSON.parse(localStorage.getItem("login_type_yui-7gel1hqtaf6fb79d")).content==="ANONYMOUS"?console.log("\u533F\u540D\u767B\u5F55\u4E2D"):this.islogin=!0:this.islogin=!1},mounted(){},methods:{exit(){localStorage.removeItem("login_type_yui-7gel1hqtaf6fb79d"),localStorage.removeItem("user_info_yui-7gel1hqtaf6fb79d"),localStorage.removeItem("refresh_token_yui-7gel1hqtaf6fb79d"),localStorage.removeItem("yui_login_user"),localStorage.removeItem("access_token_yui-7gel1hqtaf6fb79d"),localStorage.removeItem("access_token_expire_yui-7gel1hqtaf6fb79d"),localStorage.removeItem("user_auth"),localStorage.removeItem("anonymous_uuid_yui-7gel1hqtaf6fb79d"),window.location.reload()},goLogin(){this.$store.commit("increment")},showAsideNav(){this.$store.commit("showAsideNav")}},components:{}},T=e=>(w("data-v-65ce9011"),e=e(),E(),e),je={class:"h-normal"},Ue={class:"header-left"},Be=y("\u7BA1\u7406 "),ze={class:"header-left-item"},He=y("\u9996\u9875 "),Ye={class:"header-left-item"},Ke=y("\u8FFD\u756A "),Qe={class:"header-left-item header-left-noshow"},We=y("\u65E5\u8BED "),Ze={class:"header-left-item header-left-noshow"},Je=y("\u77E5\u8BC6\u5E93 "),Xe={class:"header-left-item"},Ge=y("\u5173\u4E8E "),et={key:0,class:"header-right"},tt={class:"header-right-item header-right-menu"},ot={class:"user-menu"},st=T(()=>l("div",{class:"user-menu-item"},"\u6211\u7684\u4FE1\u606F",-1)),nt={key:0,class:"line"},at={key:0,class:"user-menu-item"},it=T(()=>l("div",{class:"line"},null,-1)),rt=T(()=>l("div",{class:"user-menu-item"},"\u9000\u51FA\u767B\u5F55",-1)),lt=[rt],ct=y("\u7BA1\u7406"),ut=y("\u91CD\u7F6E "),dt={key:1,class:"header-right"},mt={class:"header-right-item"},_t={class:"header-right-item header-right-menu"},ht=y(" \u767B\u5F55 "),pt={class:"user-menu"};function ft(e,t,c,r,o,s){const i=p("fold"),u=p("el-icon"),h=p("router-link"),b=p("house"),v=p("calendar"),R=p("school"),F=p("milkTea"),j=p("question-filled"),P=p("el-avatar"),U=p("setting"),B=p("refresh");return m(),f("header",je,[l("div",Ue,[a(h,{to:"/manage/films"},{default:_(()=>[o.menuStatus?(m(),f("div",{key:0,class:"header-left-item",onClick:t[0]||(t[0]=(...I)=>s.showAsideNav&&s.showAsideNav(...I))},[a(u,null,{default:_(()=>[a(i)]),_:1}),Be])):g("",!0)]),_:1}),a(h,{to:"/"},{default:_(()=>[l("div",ze,[a(u,null,{default:_(()=>[a(b)]),_:1}),He])]),_:1}),a(h,{to:"/bangumi"},{default:_(()=>[l("div",Ye,[a(u,null,{default:_(()=>[a(v)]),_:1}),Ke])]),_:1}),a(h,{to:"/nihongo"},{default:_(()=>[l("div",Qe,[a(u,null,{default:_(()=>[a(R)]),_:1}),We])]),_:1}),a(h,{to:"/learn"},{default:_(()=>[l("div",Ze,[a(u,null,{default:_(()=>[a(F)]),_:1}),Je])]),_:1}),a(h,{to:"/about"},{default:_(()=>[l("div",Xe,[a(u,null,{default:_(()=>[a(j)]),_:1}),Ge])]),_:1})]),o.islogin?(m(),f("div",et,[l("div",tt,[a(P,{size:"small",src:"https://q1.qlogo.cn/g?b=qq&nk="+this.user+"&s=640"},null,8,["src"]),l("div",ot,[a(h,{to:"/user"},{default:_(()=>[st]),_:1}),o.userAuth?(m(),f("div",nt)):g("",!0),a(h,{to:"/mylove"},{default:_(()=>[o.userAuth?(m(),f("div",at,"\u6211\u7684\u6536\u85CF")):g("",!0)]),_:1}),it,l("a",{onClick:t[1]||(t[1]=(...I)=>s.exit&&s.exit(...I)),href:"#"},lt)])]),o.menuStatus?g("",!0):(m(),f("div",{key:0,class:"header-right-item",onClick:t[2]||(t[2]=I=>o.menuStatus=!0)},[a(h,{to:"/manage/upload"},{default:_(()=>[a(u,null,{default:_(()=>[a(U)]),_:1}),ct]),_:1})])),o.menuStatus?(m(),f("div",{key:1,class:"header-right-item",onClick:t[3]||(t[3]=I=>o.menuStatus=!1)},[a(u,null,{default:_(()=>[a(B)]),_:1}),ut])):g("",!0)])):g("",!0),o.islogin?g("",!0):(m(),f("div",dt,[l("div",mt,[a(P,{src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"})]),l("div",_t,[ht,l("div",pt,[l("div",{class:"user-menu-item",onClick:t[4]||(t[4]=(...I)=>s.goLogin&&s.goLogin(...I))},"\u767B\u5F55/\u6CE8\u518C")])])]))])}var gt=S(Fe,[["render",ft],["__scopeId","data-v-65ce9011"]]);const vt={name:"Footer",data(){return{}},components:{}},x=e=>(w("data-v-4f6f6a1a"),e=e(),E(),e),yt=x(()=>l("canvas",{class:"fireworks",style:{position:"fixed",left:"0",top:"0","z-index":"999","pointer-events":"none"}},null,-1)),bt=x(()=>l("footer",null,"Copyright \xA9 2020-2021 \u522B\u52A8\u6211\u7ED3\u83DC",-1));function It(e,t,c,r,o,s){return m(),f(N,null,[yt,bt],64)}var St=S(vt,[["render",It],["__scopeId","data-v-4f6f6a1a"]]);const At={name:"App",step(){},data(){return{islogin:!1,ishow:!1,cloud:A.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,dialogVisible:!0}},computed:{isLogin(){return this.$store.state.islogin}},created(){this.auth=this.cloud.auth({persistence:"local"});const e=this.auth.currentUser;e&&localStorage.setItem("openid",e.uid);var t=document.location.protocol!="https:";console.log(t),t&&window.location.hostname!=="localhost"&&(window.location="https://site.shuiao.top"),this.auth.hasLoginState&&localStorage.getItem("login_type_yui-7gel1hqtaf6fb79d")||this.nmlogin();const c=this.cloud.database();c.command,c.collection("user").where({email:localStorage.getItem("yui_login_user")}).get().then(r=>{const o=r.data;!!r.data&&!!o[0]&&(o[0].isEffect==="1"&&o[0].uauth==="0"?localStorage.setItem("user_auth","admin"):localStorage.setItem("user_auth","normal"))})},components:{Login:Re,Header:gt,Footer:St},methods:{appClick(e){console.log(e),e.target.localName=="aside"&&this.$store.commit("noincrement")},async nmlogin(){const e=this.cloud.auth({persistence:"local"});await e.anonymousAuthProvider().signIn();const t=await e.getLoginState();console.log(t.isAnonymousAuth),window.location.reload()},confirm(){this.dialogVisible=!1,this.nmlogin()},goLogin(){this.$store.commit("increment"),this.dialogVisible=!1}}};function wt(e,t,c,r,o,s){const i=p("Header"),u=p("router-view"),h=p("Login"),b=p("Footer");return m(),f("div",{class:C({s_main:!s.isLogin,a_main:s.isLogin}),onClick:t[1]||(t[1]=z((...v)=>e.hideAside&&e.hideAside(...v),["self"]))},[a(i),l("main",null,[a(u,null,{default:_(({Component:v})=>[(m(),k(H,null,[e.$route.meta.keepAlive?(m(),k(M(v),{key:0})):g("",!0)],1024)),e.$route.meta.keepAlive?g("",!0):(m(),k(M(v),{key:0}))]),_:1})]),s.isLogin?(m(),f("aside",{key:0,class:C({noshow:o.ishow}),onClick:t[0]||(t[0]=(...v)=>s.appClick&&s.appClick(...v))},[a(h)],2)):g("",!0),a(b)],2)}var Et=S(At,[["render",wt],["__scopeId","data-v-3cc38f80"]]);const kt="modulepreload",O={},Lt="/",d=function(t,c){return!c||c.length===0?t():Promise.all(c.map(r=>{if(r=`${Lt}${r}`,r in O)return;O[r]=!0;const o=r.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${s}`))return;const i=document.createElement("link");if(i.rel=o?"stylesheet":kt,o||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),o)return new Promise((u,h)=>{i.addEventListener("load",u),i.addEventListener("error",h)})})).then(()=>t())},Tt=()=>d(()=>import("./Shouye.006f354d.js"),["assets/Shouye.006f354d.js","assets/Shouye.1f4c068e.css","assets/vendor.893c1949.js","assets/NewsItem.05fe5120.js","assets/NewsItem.c0cfb73e.css"]),Pt=()=>d(()=>import("./Top.a06d1c1f.js"),["assets/Top.a06d1c1f.js","assets/Top.4301bd42.css","assets/vendor.893c1949.js"]),$t=()=>d(()=>import("./Share.29409dcb.js"),["assets/Share.29409dcb.js","assets/Share.a89af4c3.css","assets/vendor.893c1949.js"]),Vt=()=>d(()=>import("./Chat.d02343f6.js"),["assets/Chat.d02343f6.js","assets/Chat.82ade952.css","assets/vendor.893c1949.js"]),Nt=()=>d(()=>import("./About.ba46bba3.js"),["assets/About.ba46bba3.js","assets/About.65904fc3.css","assets/vendor.893c1949.js"]),Ct=()=>d(()=>import("./User.5948d211.js"),["assets/User.5948d211.js","assets/User.eb970f1f.css","assets/vendor.893c1949.js"]),Mt=()=>d(()=>import("./Manage.e1a1f43c.js"),["assets/Manage.e1a1f43c.js","assets/Manage.c0f36a93.css","assets/vendor.893c1949.js"]),Dt=()=>d(()=>import("./FilmsManage.ab5de94e.js"),["assets/FilmsManage.ab5de94e.js","assets/FilmsManage.a7f0a5e8.css","assets/vendor.893c1949.js","assets/FilmsUpload.ceb59067.js","assets/FilmsUpload.3ef6c25c.css"]),xt=()=>d(()=>import("./FilmsUpload.ceb59067.js"),["assets/FilmsUpload.ceb59067.js","assets/FilmsUpload.3ef6c25c.css","assets/vendor.893c1949.js"]),Ot=()=>d(()=>import("./UserManage.141b89bf.js"),["assets/UserManage.141b89bf.js","assets/UserManage.4910776d.css","assets/vendor.893c1949.js"]),qt=()=>d(()=>import("./FilmsMore.485e1a7c.js"),["assets/FilmsMore.485e1a7c.js","assets/FilmsMore.bc1199b1.css","assets/vendor.893c1949.js"]),Rt=()=>d(()=>import("./Bangumi.812b1521.js"),["assets/Bangumi.812b1521.js","assets/Bangumi.6331e3e1.css","assets/vendor.893c1949.js"]),Ft=()=>d(()=>import("./Nihongo.cc076087.js"),["assets/Nihongo.cc076087.js","assets/Nihongo.b19ab4a0.css","assets/vendor.893c1949.js"]),jt=()=>d(()=>import("./Learn.ebc9eb4a.js"),["assets/Learn.ebc9eb4a.js","assets/Learn.4a252a5b.css","assets/vendor.893c1949.js"]),Ut=()=>d(()=>import("./FilmDetail.0b11df4a.js"),["assets/FilmDetail.0b11df4a.js","assets/FilmDetail.e8586ba6.css","assets/FilmsBox.f8641384.js","assets/FilmsBox.fd973d2b.css","assets/vendor.893c1949.js","assets/FilmsUpload.ceb59067.js","assets/FilmsUpload.3ef6c25c.css"]),Bt=()=>d(()=>import("./MyLove.e8f51516.js"),["assets/MyLove.e8f51516.js","assets/MyLove.6d69ea90.css","assets/vendor.893c1949.js"]),zt=()=>d(()=>import("./FilmsCard.28dc736e.js"),["assets/FilmsCard.28dc736e.js","assets/FilmsBox.f8641384.js","assets/FilmsBox.fd973d2b.css","assets/vendor.893c1949.js"]),q=()=>d(()=>import("./NewsCard.4e1b29cd.js"),["assets/NewsCard.4e1b29cd.js","assets/NewsCard.dbad340d.css","assets/NewsItem.05fe5120.js","assets/NewsItem.c0cfb73e.css","assets/vendor.893c1949.js"]),Ht=()=>d(()=>import("./MusicCard.254afa0f.js"),["assets/MusicCard.254afa0f.js","assets/MusicCard.cca693da.css","assets/vendor.893c1949.js"]),Yt=()=>d(()=>import("./MuiscManage.2ada511f.js"),["assets/MuiscManage.2ada511f.js","assets/vendor.893c1949.js"]),Kt=[{path:"/",component:Tt,children:[{path:"/",component:q,meta:{keepAlive:!0}},{path:"/shouye",component:q},{path:"shouye/filmscard",component:zt},{path:"shouye/musicard",component:Ht}]},{path:"/top",name:"top",component:Pt},{path:"/share",name:"share",component:$t},{path:"/chat",name:"chat",component:Vt},{path:"/about",name:"about",component:Nt},{path:"/user",name:"user",component:Ct},{path:"/manage",name:"manage",children:[{path:"films",component:Dt},{path:"upload",component:xt},{path:"user",component:Ot},{path:"music",component:Yt}],component:Mt},{path:"/filmsmore",name:"filmsmore",component:qt},{path:"/bangumi",name:"bangumi",component:Rt},{path:"/nihongo",name:"nihongo",component:Ft},{path:"/learn",name:"learn",component:jt},{path:"/filmdetail/:id",name:"filmdetail",component:Ut},{path:"/mylove",name:"mylove",component:Bt}],Qt=Y({history:K(),routes:Kt,scrollBehavior(e,t,c){return{top:0}}}),Wt=Q({state(){return{asideNavStatus:!0}},mutations:{showAsideNav(e){e.asideNavStatus=!0},hideAsideNav(e){e.asideNavStatus=!1}}});const Zt={data(){return{fomatTime:""}},props:["time","type"],computed:{fomatTime:function(){return this.fomatTime=this.$moment(this.time).format("YYYY-MM-DD hh:mm:ss"),this.fomatTime},FromNow:function(){return this.fomatTime=this.$moment(this.time).FromNow(),this.fomatTime}},created(){console.log(document.getElementsByClassName("shuite-timer"))},components:{}},Jt={key:0},Xt={key:1};function Gt(e,t,c,r,o,s){return m(),f(N,null,[c.type?g("",!0):(m(),f("span",Jt,L(s.fomatTime),1)),c.type=="1"?(m(),f("span",Xt,L(s.FromNow),1)):g("",!0)],64)}var eo=S(Zt,[["render",Gt]]);const to={data(){return{}},setup(){return{input:W("")}},props:{swidth:{default:700},subname:{default:"\u641C\u7D22"}},created(){},methods:{searchFunc(){this.$emit("search")}},components:{}},oo={class:"shuite-input boxshadow"};function so(e,t,c,r,o,s){const i=p("el-input"),u=p("el-button");return m(),f("div",oo,[a(i,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",modelValue:r.input,"onUpdate:modelValue":t[0]||(t[0]=h=>r.input=h),clearable:"",class:"shuite-search"},null,8,["modelValue"]),a(u,{onClick:s.searchFunc,type:"small",style:{height:"40px","margin-left":"10px","margin-right":"10px"}},{default:_(()=>[y(L(c.subname),1)]),_:1},8,["onClick"])])}var no=S(to,[["render",so],["__scopeId","data-v-4e421cb4"]]);const n=Z(Et);n.use(J,{locale:X});n.component("baseball",G);n.component("calendar",ee);n.component("house",te);n.component("school",oe);n.component("notebook",se);n.component("star",ne);n.component("star-filled",ae);n.component("question-filled",ie);n.component("user",re);n.component("close",le);n.component("link",ce);n.component("expand",ue);n.component("fold",de);n.component("location",me);n.component("setting",_e);n.component("upload",he);n.component("ship",pe);n.component("video-camera",fe);n.component("mic",ge);n.component("paperclip",ve);n.component("chat-round",ye);n.component("edit",be);n.component("more-filled",Ie);n.component("trophy",Se);n.component("milkTea",Ae);n.component("bell",we);n.component("refresh",Ee);n.config.globalProperties.$scrollReveal=ke;n.config.globalProperties.$axios=Le;n.config.globalProperties.$cloudbase=A;n.config.globalProperties.$moment=Te;n.config.globalProperties.$ElMessage=Pe;n.component("Timer",eo);n.component("shuite-input",no);A.init({env:"yui-7gel1hqtaf6fb79d"});const ao=A.auth({persistence:"local"});n.config.globalProperties.$auth=ao;n.use(Qt);n.use(Wt);n.mount("#app");export{no as S,S as _};