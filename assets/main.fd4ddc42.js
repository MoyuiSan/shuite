import{c as A,o as _,a as f,w as $,v as V,b as l,p as w,d as E,e as g,r as p,f as a,g as d,h as v,F as N,n as C,i as H,j as k,k as M,K as Y,l as K,m as Q,q as W,t as L,s as Z,u as J,x as X,z as G,B as ee,C as te,H as oe,S as se,N as ne,y as ae,A as ie,Q as re,U as le,D as ce,L as ue,E as de,G as me,I as _e,J as he,M as pe,O as fe,V as ge,P as ve,R as ye,T as be,W as Se,X as Ie,Y as Ae,Z as we,_ as Ee,$ as ke,a0 as Le,a1 as Te,a2 as Pe,a3 as $e}from"./vendor.3249e4ba.js";const Ve=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function c(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=c(o);fetch(o.href,s)}};Ve();var I=(e,t)=>{const c=e.__vccOpts||e;for(const[r,o]of t)c[r]=o;return c};AV;const Ne={name:"Login",data(){return{cloud:A.init({env:"yui-7gel1hqtaf6fb79d"}),email:"",password:"",test:""}},computed:{test(){return this.$store.state.islogin}},created(){AV.init({appId:"tYNddUiQgK4ghsF9PDzRiz2j-MdYXbMMI",appKey:"I3DfpmsVmqqeA66CARr0H1Br"})},mounted(){const e=new AV.Query("userinfo");e.equalTo("email",this.email),e.find().then(t=>{console.log(t)})},methods:{register(){NProgress.start();const e=this.email;/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(e)?this.cloud.auth().signUpWithEmailAndPassword(this.email,this.password).then(()=>{NProgress.done()}).catch(c=>{c&&this.$ElMessage.error("\u90AE\u7BB1\u5DF2\u5B58\u5728\uFF01"),NProgress.done()}):(alert("\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E"),NProgress.done())},login(){NProgress.start(),this.cloud.auth({persistence:"local"}).signInWithEmailAndPassword(this.email,this.password).then(t=>{localStorage.setItem("yui_login_user",this.email);const c=new AV.Query("userinfo");c.equalTo("email",this.email);const r=this.cloud.database();r.command;const s=this.cloud.auth({persistence:"local"}).currentUser;r.collection("user").where({email:this.email}).get().then(i=>{if(!!i.data[0]||localStorage.getItem("uesr_auth")=="normal")return!1;r.collection("user").add({email:this.email,uauth:"1",created:Date.now(),updated:Date.now(),isEffect:"1",uid:s.uid}).then(u=>{console.log(u)})}),r.collection("user").where({email:localStorage.getItem("yui_login_user")}).get().then(i=>{const u=i.data;i.data&&(u[0].isEffect==="1"&&u[0].uauth==="0"?localStorage.setItem("user_auth","admin"):localStorage.setItem("user_auth","normal"))}),c.find().then(i=>{if(!i){const h=AV.Object.extend("userinfo"),b=new h;b.set("nickname","\u65E0\u540D\u4EBA\u58EB"),b.set("email",this.email),b.save().then(y=>{console.log(`\u4FDD\u5B58\u6210\u529F\u3002objectId\uFF1A${y.id}`)},y=>{ElMessage.error("\u6570\u636E\u4FDD\u5B58\u5931\u8D25!")})}let u=setTimeout(()=>{this.$store.commit("increment"),NProgress.done(),window.location.reload(),clearTimeout(u)},500);u=null})});let e=setTimeout(()=>{localStorage.getItem("yui_login_user")||ElMessage.error("\u8D26\u6237\u5BC6\u7801\u9519\u8BEF!"),NProgress.done(),clearTimeout(e)},2e3);e=null}}},D=e=>(w("data-v-d4f45df8"),e=e(),E(),e),Ce={class:"login boxshadow"},Me=D(()=>l("h2",null,"\u767B\u5F55",-1)),De={class:"register"},xe=g("\u6CA1\u6709\u8D26\u53F7?"),Oe={class:"btn"},qe=D(()=>l("button",null,"\u91CD\u7F6E",-1));function Re(e,t,c,r,o,s){return _(),f("div",Ce,[Me,$(l("input",{type:"email",placeholder:"\u8BF7\u8F93\u5165\u4F60\u7684\u90AE\u7BB1","onUpdate:modelValue":t[0]||(t[0]=i=>o.email=i)},null,512),[[V,o.email]]),$(l("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=i=>o.password=i),placeholder:"\u8BF7\u8F93\u5165\u4F60\u7684\u5BC6\u7801"},null,512),[[V,o.password]]),l("div",De,[xe,l("span",{onClick:t[2]||(t[2]=(...i)=>s.register&&s.register(...i))},"\u6CE8\u518C\u4E00\u4E0B")]),l("div",Oe,[l("button",{onClick:t[3]||(t[3]=(...i)=>s.login&&s.login(...i))},"\u767B\u9646"),qe])])}var Fe=I(Ne,[["render",Re],["__scopeId","data-v-d4f45df8"]]);const je={data(){return{userAuth:localStorage.getItem("user_auth")=="admin",islogin:!1,cloud:cloudbase.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,user:localStorage.getItem("yui_login_user"),menuStatus:!1}},computed:{},created(){this.auth=this.cloud.auth({persistence:"local"}),console.log(localStorage.getItem("user_auth")),localStorage.getItem("access_token_yui-7gel1hqtaf6fb79d")?JSON.parse(localStorage.getItem("login_type_yui-7gel1hqtaf6fb79d")).content==="ANONYMOUS"?console.log("\u533F\u540D\u767B\u5F55\u4E2D"):this.islogin=!0:this.islogin=!1},mounted(){},methods:{exit(){localStorage.removeItem("login_type_yui-7gel1hqtaf6fb79d"),localStorage.removeItem("user_info_yui-7gel1hqtaf6fb79d"),localStorage.removeItem("refresh_token_yui-7gel1hqtaf6fb79d"),localStorage.removeItem("yui_login_user"),localStorage.removeItem("access_token_yui-7gel1hqtaf6fb79d"),localStorage.removeItem("access_token_expire_yui-7gel1hqtaf6fb79d"),localStorage.removeItem("user_auth"),localStorage.removeItem("anonymous_uuid_yui-7gel1hqtaf6fb79d"),window.location.reload()},goLogin(){this.$store.commit("increment")},showAsideNav(){this.$store.commit("showAsideNav")}},components:{}},T=e=>(w("data-v-78790cac"),e=e(),E(),e),Ue={class:"h-normal"},Be={class:"header-left"},ze=g("\u7BA1\u7406 "),He={class:"header-left-item"},Ye=g("\u9996\u9875 "),Ke={class:"header-left-item header-left-noshow"},Qe=g("\u5410\u69FD "),We={class:"header-left-item"},Ze=g("\u8FFD\u756A "),Je={class:"header-left-item header-left-noshow"},Xe=g("\u65E5\u8BED "),Ge={class:"header-left-item header-left-noshow"},et=g("\u77E5\u8BC6\u5E93 "),tt={class:"header-left-item"},ot=g("\u5173\u4E8E "),st={key:0,class:"header-right"},nt={class:"header-right-item header-right-menu"},at={class:"user-menu"},it=T(()=>l("div",{class:"user-menu-item"},"\u6211\u7684\u4FE1\u606F",-1)),rt={key:0,class:"line"},lt={key:0,class:"user-menu-item"},ct=T(()=>l("div",{class:"line"},null,-1)),ut=T(()=>l("div",{class:"user-menu-item"},"\u9000\u51FA\u767B\u5F55",-1)),dt=[ut],mt=g("\u7BA1\u7406"),_t=g("\u91CD\u7F6E "),ht={key:1,class:"header-right"},pt={class:"header-right-item"},ft={class:"header-right-item header-right-menu"},gt=g(" \u767B\u5F55 "),vt={class:"user-menu"};function yt(e,t,c,r,o,s){const i=p("fold"),u=p("el-icon"),h=p("router-link"),b=p("house"),y=p("baseball"),R=p("calendar"),F=p("school"),j=p("milkTea"),U=p("question-filled"),P=p("el-avatar"),B=p("setting"),z=p("refresh");return _(),f("header",Ue,[l("div",Be,[a(h,{to:"/manage/films"},{default:d(()=>[o.menuStatus?(_(),f("div",{key:0,class:"header-left-item",onClick:t[0]||(t[0]=(...S)=>s.showAsideNav&&s.showAsideNav(...S))},[a(u,null,{default:d(()=>[a(i)]),_:1}),ze])):v("",!0)]),_:1}),a(h,{to:"/"},{default:d(()=>[l("div",He,[a(u,null,{default:d(()=>[a(b)]),_:1}),Ye])]),_:1}),a(h,{to:"/chat"},{default:d(()=>[l("div",Ke,[a(u,null,{default:d(()=>[a(y)]),_:1}),Qe])]),_:1}),a(h,{to:"/bangumi"},{default:d(()=>[l("div",We,[a(u,null,{default:d(()=>[a(R)]),_:1}),Ze])]),_:1}),a(h,{to:"/nihongo"},{default:d(()=>[l("div",Je,[a(u,null,{default:d(()=>[a(F)]),_:1}),Xe])]),_:1}),a(h,{to:"/learn"},{default:d(()=>[l("div",Ge,[a(u,null,{default:d(()=>[a(j)]),_:1}),et])]),_:1}),a(h,{to:"/about"},{default:d(()=>[l("div",tt,[a(u,null,{default:d(()=>[a(U)]),_:1}),ot])]),_:1})]),o.islogin?(_(),f("div",st,[l("div",nt,[a(P,{size:"small",src:"https://q1.qlogo.cn/g?b=qq&nk="+this.user+"&s=640"},null,8,["src"]),l("div",at,[a(h,{to:"/user"},{default:d(()=>[it]),_:1}),o.userAuth?(_(),f("div",rt)):v("",!0),a(h,{to:"/mylove"},{default:d(()=>[o.userAuth?(_(),f("div",lt,"\u6211\u7684\u6536\u85CF")):v("",!0)]),_:1}),ct,l("a",{onClick:t[1]||(t[1]=(...S)=>s.exit&&s.exit(...S)),href:"#"},dt)])]),o.menuStatus?v("",!0):(_(),f("div",{key:0,class:"header-right-item",onClick:t[2]||(t[2]=S=>o.menuStatus=!0)},[a(h,{to:"/manage/films"},{default:d(()=>[a(u,null,{default:d(()=>[a(B)]),_:1}),mt]),_:1})])),o.menuStatus?(_(),f("div",{key:1,class:"header-right-item",onClick:t[3]||(t[3]=S=>o.menuStatus=!1)},[a(u,null,{default:d(()=>[a(z)]),_:1}),_t])):v("",!0)])):v("",!0),o.islogin?v("",!0):(_(),f("div",ht,[l("div",pt,[a(P,{src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"})]),l("div",ft,[gt,l("div",vt,[l("div",{class:"user-menu-item",onClick:t[4]||(t[4]=(...S)=>s.goLogin&&s.goLogin(...S))},"\u767B\u5F55/\u6CE8\u518C")])])]))])}var bt=I(je,[["render",yt],["__scopeId","data-v-78790cac"]]);const St={name:"Footer",data(){return{}},components:{}},x=e=>(w("data-v-4f6f6a1a"),e=e(),E(),e),It=x(()=>l("canvas",{class:"fireworks",style:{position:"fixed",left:"0",top:"0","z-index":"999","pointer-events":"none"}},null,-1)),At=x(()=>l("footer",null,"Copyright \xA9 2020-2021 \u522B\u52A8\u6211\u7ED3\u83DC",-1));function wt(e,t,c,r,o,s){return _(),f(N,null,[It,At],64)}var Et=I(St,[["render",wt],["__scopeId","data-v-4f6f6a1a"]]);const kt={name:"App",step(){},data(){return{islogin:!1,ishow:!1,cloud:A.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,dialogVisible:!0}},computed:{isLogin(){return this.$store.state.islogin}},created(){this.auth=this.cloud.auth({persistence:"local"});const e=this.auth.currentUser;e&&localStorage.setItem("openid",e.uid);var t=document.location.protocol!="https:";console.log(t),t&&window.location.hostname!=="localhost"&&(window.location="https://site.shuiao.top"),this.auth.hasLoginState&&localStorage.getItem("login_type_yui-7gel1hqtaf6fb79d")||this.nmlogin();const c=this.cloud.database();c.command,c.collection("user").where({email:localStorage.getItem("yui_login_user")}).get().then(r=>{const o=r.data;!!r.data&&!!o[0]&&(o[0].isEffect==="1"&&o[0].uauth==="0"?localStorage.setItem("user_auth","admin"):localStorage.setItem("user_auth","normal"))})},components:{Login:Fe,Header:bt,Footer:Et},methods:{appClick(e){console.log(e),e.target.localName=="aside"&&this.$store.commit("noincrement")},async nmlogin(){const e=this.cloud.auth({persistence:"local"});await e.anonymousAuthProvider().signIn();const t=await e.getLoginState();console.log(t.isAnonymousAuth),window.location.reload()},confirm(){this.dialogVisible=!1,this.nmlogin()},goLogin(){this.$store.commit("increment"),this.dialogVisible=!1}}};function Lt(e,t,c,r,o,s){const i=p("Header"),u=p("router-view"),h=p("Login"),b=p("Footer");return _(),f("div",{class:C({s_main:!s.isLogin,a_main:s.isLogin}),onClick:t[1]||(t[1]=H((...y)=>e.hideAside&&e.hideAside(...y),["self"]))},[a(i),l("main",null,[a(u,null,{default:d(({Component:y})=>[(_(),k(Y,null,[e.$route.meta.keepAlive?(_(),k(M(y),{key:0})):v("",!0)],1024)),e.$route.meta.keepAlive?v("",!0):(_(),k(M(y),{key:0}))]),_:1})]),s.isLogin?(_(),f("aside",{key:0,class:C({noshow:o.ishow}),onClick:t[0]||(t[0]=(...y)=>s.appClick&&s.appClick(...y))},[a(h)],2)):v("",!0),a(b)],2)}var Tt=I(kt,[["render",Lt],["__scopeId","data-v-3cc38f80"]]);const Pt="modulepreload",O={},$t="/",m=function(t,c){return!c||c.length===0?t():Promise.all(c.map(r=>{if(r=`${$t}${r}`,r in O)return;O[r]=!0;const o=r.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${s}`))return;const i=document.createElement("link");if(i.rel=o?"stylesheet":Pt,o||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),o)return new Promise((u,h)=>{i.addEventListener("load",u),i.addEventListener("error",h)})})).then(()=>t())},Vt=()=>m(()=>import("./Shouye.52d72047.js"),["assets/Shouye.52d72047.js","assets/Shouye.1f4c068e.css","assets/vendor.3249e4ba.js","assets/NewsItem.b0bdba55.js","assets/NewsItem.2da22fc5.css"]),Nt=()=>m(()=>import("./Top.62492fbf.js"),["assets/Top.62492fbf.js","assets/Top.4301bd42.css","assets/vendor.3249e4ba.js"]),Ct=()=>m(()=>import("./Share.4c505da2.js"),["assets/Share.4c505da2.js","assets/Share.a89af4c3.css","assets/vendor.3249e4ba.js"]),Mt=()=>m(()=>import("./Chat.0acdfb25.js"),["assets/Chat.0acdfb25.js","assets/Chat.dd5e87cd.css","assets/vendor.3249e4ba.js"]),Dt=()=>m(()=>import("./About.2fafb192.js"),["assets/About.2fafb192.js","assets/About.65904fc3.css","assets/vendor.3249e4ba.js"]),xt=()=>m(()=>import("./User.8ce82335.js"),["assets/User.8ce82335.js","assets/User.eb970f1f.css","assets/vendor.3249e4ba.js"]),Ot=()=>m(()=>import("./Manage.e06aeb14.js"),["assets/Manage.e06aeb14.js","assets/Manage.754b026b.css","assets/vendor.3249e4ba.js"]),qt=()=>m(()=>import("./FilmsManage.99e16c9a.js"),["assets/FilmsManage.99e16c9a.js","assets/FilmsManage.842b643b.css","assets/vendor.3249e4ba.js","assets/FilmsUpload.61f09b23.js","assets/FilmsUpload.8b97d871.css"]),Rt=()=>m(()=>import("./FilmsUpload.61f09b23.js"),["assets/FilmsUpload.61f09b23.js","assets/FilmsUpload.8b97d871.css","assets/vendor.3249e4ba.js"]),Ft=()=>m(()=>import("./UserManage.da66f96c.js"),["assets/UserManage.da66f96c.js","assets/UserManage.49ef573f.css","assets/vendor.3249e4ba.js"]),jt=()=>m(()=>import("./FilmsMore.883c32cc.js"),["assets/FilmsMore.883c32cc.js","assets/FilmsMore.31ad3db9.css","assets/vendor.3249e4ba.js"]),Ut=()=>m(()=>import("./Bangumi.4ddbcd27.js"),["assets/Bangumi.4ddbcd27.js","assets/Bangumi.6331e3e1.css","assets/vendor.3249e4ba.js"]),Bt=()=>m(()=>import("./Nihongo.0b59e8e5.js"),["assets/Nihongo.0b59e8e5.js","assets/Nihongo.b19ab4a0.css","assets/vendor.3249e4ba.js"]),zt=()=>m(()=>import("./Learn.aee90704.js"),["assets/Learn.aee90704.js","assets/Learn.4a252a5b.css","assets/vendor.3249e4ba.js"]),Ht=()=>m(()=>import("./FilmDetail.4bf768ba.js"),["assets/FilmDetail.4bf768ba.js","assets/FilmDetail.7f1cf89f.css","assets/FilmsBox.3d7bd53f.js","assets/FilmsBox.fd973d2b.css","assets/vendor.3249e4ba.js","assets/FilmsUpload.61f09b23.js","assets/FilmsUpload.8b97d871.css"]),Yt=()=>m(()=>import("./MyLove.f9fcf430.js"),["assets/MyLove.f9fcf430.js","assets/MyLove.a4262ca3.css","assets/vendor.3249e4ba.js"]),Kt=()=>m(()=>import("./FilmsCard.7a80f62e.js"),["assets/FilmsCard.7a80f62e.js","assets/FilmsBox.3d7bd53f.js","assets/FilmsBox.fd973d2b.css","assets/vendor.3249e4ba.js"]),q=()=>m(()=>import("./NewsCard.c1d3adea.js"),["assets/NewsCard.c1d3adea.js","assets/NewsCard.177a6ed3.css","assets/NewsItem.b0bdba55.js","assets/NewsItem.2da22fc5.css","assets/vendor.3249e4ba.js"]),Qt=()=>m(()=>import("./MusicCard.1625017f.js"),["assets/MusicCard.1625017f.js","assets/MusicCard.cca693da.css","assets/vendor.3249e4ba.js"]),Wt=()=>m(()=>import("./MuiscManage.0d86ba16.js"),["assets/MuiscManage.0d86ba16.js","assets/vendor.3249e4ba.js"]),Zt=[{path:"/",component:Vt,children:[{path:"/",component:q,meta:{keepAlive:!0}},{path:"/shouye",component:q},{path:"shouye/filmscard",component:Kt},{path:"shouye/musicard",component:Qt}]},{path:"/top",name:"top",component:Nt},{path:"/share",name:"share",component:Ct},{path:"/chat",name:"chat",component:Mt},{path:"/about",name:"about",component:Dt},{path:"/user",name:"user",component:xt},{path:"/manage",name:"manage",children:[{path:"films",component:qt},{path:"upload",component:Rt},{path:"user",component:Ft},{path:"music",component:Wt}],component:Ot},{path:"/filmsmore",name:"filmsmore",component:jt},{path:"/bangumi",name:"bangumi",component:Ut},{path:"/nihongo",name:"nihongo",component:Bt},{path:"/learn",name:"learn",component:zt},{path:"/filmdetail/:id",name:"filmdetail",component:Ht},{path:"/mylove",name:"mylove",component:Yt}],Jt=K({history:Q(),routes:Zt,scrollBehavior(e,t,c){return{top:0}}}),Xt=W({state(){return{islogin:!1,loginStatus:!1,asideNavStatus:!1}},mutations:{increment(e){e.islogin=!0},noincrement(e){e.islogin=!1},inlogin(e){e.loginStatus=!0},nologin(e){e.loginStatus=!1},showAsideNav(e){e.asideNavStatus=!0},hideAsideNav(e){e.asideNavStatus=!1}}});const Gt={data(){return{fomatTime:""}},props:["time","type"],computed:{fomatTime:function(){return this.fomatTime=this.$moment(this.time).format("YYYY-MM-DD hh:mm:ss"),this.fomatTime},FromNow:function(){return this.fomatTime=this.$moment(this.time).FromNow(),this.fomatTime}},created(){console.log(document.getElementsByClassName("shuite-timer"))},components:{}},eo={key:0},to={key:1};function oo(e,t,c,r,o,s){return _(),f(N,null,[c.type?v("",!0):(_(),f("span",eo,L(s.fomatTime),1)),c.type=="1"?(_(),f("span",to,L(s.FromNow),1)):v("",!0)],64)}var so=I(Gt,[["render",oo]]);const no={data(){return{}},setup(){return{input:Z("")}},props:{swidth:{default:700},subname:{default:"\u641C\u7D22"}},created(){},methods:{searchFunc(){this.$emit("search")}},components:{}},ao={class:"shuite-input boxshadow"};function io(e,t,c,r,o,s){const i=p("el-input"),u=p("el-button");return _(),f("div",ao,[a(i,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",modelValue:r.input,"onUpdate:modelValue":t[0]||(t[0]=h=>r.input=h),clearable:"",class:"shuite-search"},null,8,["modelValue"]),a(u,{onClick:s.searchFunc,type:"small",style:{height:"40px","margin-left":"10px","margin-right":"10px"}},{default:d(()=>[g(L(c.subname),1)]),_:1},8,["onClick"])])}var ro=I(no,[["render",io],["__scopeId","data-v-4e421cb4"]]);const n=J(Tt);n.use(X,{locale:G});n.component("baseball",ee);n.component("calendar",te);n.component("house",oe);n.component("school",se);n.component("notebook",ne);n.component("star",ae);n.component("star-filled",ie);n.component("question-filled",re);n.component("user",le);n.component("close",ce);n.component("link",ue);n.component("expand",de);n.component("fold",me);n.component("location",_e);n.component("setting",he);n.component("upload",pe);n.component("ship",fe);n.component("video-camera",ge);n.component("mic",ve);n.component("paperclip",ye);n.component("chat-round",be);n.component("edit",Se);n.component("more-filled",Ie);n.component("trophy",Ae);n.component("milkTea",we);n.component("bell",Ee);n.component("refresh",ke);n.config.globalProperties.$scrollReveal=Le;n.config.globalProperties.$axios=Te;n.config.globalProperties.$cloudbase=A;n.config.globalProperties.$moment=Pe;n.config.globalProperties.$ElMessage=$e;n.component("Timer",so);n.component("shuite-input",ro);A.init({env:"yui-7gel1hqtaf6fb79d"});const lo=A.auth({persistence:"local"});n.config.globalProperties.$auth=lo;n.use(Jt);n.use(Xt);n.mount("#app");export{ro as S,I as _};
