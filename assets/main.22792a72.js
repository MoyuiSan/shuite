import{c as A,o as d,a as p,w as T,v as V,b as c,p as w,d as E,e as y,r as _,f as a,g as h,h as g,F as N,n as C,i as z,j as k,k as D,K as H,l as Y,m as K,q as Q,t as L,s as W,u as Z,x as J,z as X,B as G,C as ee,H as te,S as oe,N as se,y as ne,A as ae,Q as ie,U as re,D as le,L as ce,E as ue,G as de,I as me,J as _e,M as he,O as pe,V as fe,P as ge,R as ve,T as ye,W as be,X as Ie,Y as Se,Z as Ae,_ as we,$ as Ee,a0 as ke,a1 as Le,a2 as $e,a3 as Pe,a4 as Te,a5 as Ve,a6 as Ne}from"./vendor.c71fd20d.js";const Ce=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}};Ce();var S=(e,t)=>{const r=e.__vccOpts||e;for(const[l,o]of t)r[l]=o;return r};AV;const De={name:"Login",data(){return{cloud:A.init({env:"yui-7gel1hqtaf6fb79d"}),email:"",password:"",test:""}},computed:{test(){return this.$store.state.islogin}},created(){AV.init({appId:"tYNddUiQgK4ghsF9PDzRiz2j-MdYXbMMI",appKey:"I3DfpmsVmqqeA66CARr0H1Br"})},mounted(){const e=new AV.Query("userinfo");e.equalTo("email",this.email),e.find().then(t=>{console.log(t)})},methods:{register(){NProgress.start();const e=this.email;/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(e)?this.cloud.auth().signUpWithEmailAndPassword(this.email,this.password).then(()=>{NProgress.done()}).catch(r=>{r&&this.$ElMessage.error("\u90AE\u7BB1\u5DF2\u5B58\u5728\uFF01"),NProgress.done()}):(alert("\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E"),NProgress.done())},login(){NProgress.start(),this.cloud.auth({persistence:"local"}).signInWithEmailAndPassword(this.email,this.password).then(t=>{localStorage.setItem("yui_login_user",this.email);const r=new AV.Query("userinfo");r.equalTo("email",this.email);const l=this.cloud.database();l.command;const n=this.cloud.auth({persistence:"local"}).currentUser;l.collection("user").where({email:this.email}).get().then(i=>{if(!!i.data[0]||localStorage.getItem("uesr_auth")=="normal")return!1;l.collection("user").add({email:this.email,uauth:"1",created:Date.now(),updated:Date.now(),isEffect:"1",uid:n.uid}).then(u=>{console.log(u)})}),l.collection("user").where({email:localStorage.getItem("yui_login_user")}).get().then(i=>{const u=i.data;i.data&&(u[0].isEffect==="1"&&u[0].uauth==="0"?localStorage.setItem("user_auth","admin"):localStorage.setItem("user_auth","normal"))}),r.find().then(i=>{if(!i){const b=AV.Object.extend("userinfo"),f=new b;f.set("nickname","\u65E0\u540D\u4EBA\u58EB"),f.set("email",this.email),f.save().then(v=>{console.log(`\u4FDD\u5B58\u6210\u529F\u3002objectId\uFF1A${v.id}`)},v=>{ElMessage.error("\u6570\u636E\u4FDD\u5B58\u5931\u8D25!")})}let u=setTimeout(()=>{this.$store.commit("increment"),NProgress.done(),window.location.reload(),clearTimeout(u)},500);u=null})});let e=setTimeout(()=>{localStorage.getItem("yui_login_user")||ElMessage.error("\u8D26\u6237\u5BC6\u7801\u9519\u8BEF!"),NProgress.done(),clearTimeout(e)},2e3);e=null}}},M=e=>(w("data-v-d4f45df8"),e=e(),E(),e),Me={class:"login boxshadow"},xe=M(()=>c("h2",null,"\u767B\u5F55",-1)),Oe={class:"register"},qe=y("\u6CA1\u6709\u8D26\u53F7?"),Re={class:"btn"},Fe=M(()=>c("button",null,"\u91CD\u7F6E",-1));function je(e,t,r,l,o,n){return d(),p("div",Me,[xe,T(c("input",{type:"email",placeholder:"\u8BF7\u8F93\u5165\u4F60\u7684\u90AE\u7BB1","onUpdate:modelValue":t[0]||(t[0]=i=>o.email=i)},null,512),[[V,o.email]]),T(c("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=i=>o.password=i),placeholder:"\u8BF7\u8F93\u5165\u4F60\u7684\u5BC6\u7801"},null,512),[[V,o.password]]),c("div",Oe,[qe,c("span",{onClick:t[2]||(t[2]=(...i)=>n.register&&n.register(...i))},"\u6CE8\u518C\u4E00\u4E0B")]),c("div",Re,[c("button",{onClick:t[3]||(t[3]=(...i)=>n.login&&n.login(...i))},"\u767B\u9646"),Fe])])}var Ue=S(De,[["render",je],["__scopeId","data-v-d4f45df8"]]);const Be={data(){return{userAuth:localStorage.getItem("user_auth")=="admin",islogin:!1,cloud:cloudbase.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,user:localStorage.getItem("yui_login_user"),menuStatus:!1}},computed:{},created(){this.auth=this.cloud.auth({persistence:"local"}),console.log(localStorage.getItem("user_auth")),localStorage.getItem("access_token_yui-7gel1hqtaf6fb79d")?JSON.parse(localStorage.getItem("login_type_yui-7gel1hqtaf6fb79d")).content==="ANONYMOUS"?console.log("\u533F\u540D\u767B\u5F55\u4E2D"):this.islogin=!0:this.islogin=!1},mounted(){},methods:{exit(){localStorage.removeItem("login_type_yui-7gel1hqtaf6fb79d"),localStorage.removeItem("user_info_yui-7gel1hqtaf6fb79d"),localStorage.removeItem("refresh_token_yui-7gel1hqtaf6fb79d"),localStorage.removeItem("yui_login_user"),localStorage.removeItem("access_token_yui-7gel1hqtaf6fb79d"),localStorage.removeItem("access_token_expire_yui-7gel1hqtaf6fb79d"),localStorage.removeItem("user_auth"),localStorage.removeItem("anonymous_uuid_yui-7gel1hqtaf6fb79d"),window.location.reload()},goLogin(){this.$store.commit("increment")},showAsideNav(){this.$store.commit("showAsideNav")}},components:{}},$=e=>(w("data-v-5b9c686b"),e=e(),E(),e),ze={class:"h-normal"},He={class:"header-left"},Ye=y("\u7BA1\u7406 "),Ke={class:"header-left-item"},Qe=y("\u9996\u9875 "),We={class:"header-left-item"},Ze=y("\u8FFD\u756A "),Je={class:"header-left-item header-left-noshow"},Xe=y("\u65E5\u8BED "),Ge={class:"header-left-item header-left-noshow"},et=y("\u77E5\u8BC6\u5E93 "),tt={class:"header-left-item"},ot=y("\u5173\u4E8E "),st={key:0,class:"header-right"},nt={class:"header-right-item header-right-menu"},at={class:"user-menu"},it=$(()=>c("div",{class:"user-menu-item"},"\u6211\u7684\u4FE1\u606F",-1)),rt={key:0,class:"line"},lt={key:0,class:"user-menu-item"},ct=$(()=>c("div",{class:"line"},null,-1)),ut=$(()=>c("div",{class:"user-menu-item"},"\u9000\u51FA\u767B\u5F55",-1)),dt=[ut],mt=y("\u7BA1\u7406"),_t=y("\u91CD\u7F6E "),ht={key:1,class:"header-right"},pt={class:"header-right-item"},ft={class:"header-right-item header-right-menu"},gt=y(" \u767B\u5F55 "),vt={class:"user-menu"};function yt(e,t,r,l,o,n){const i=_("fold"),u=_("el-icon"),b=_("house"),f=_("router-link"),v=_("calendar"),R=_("school"),F=_("milkTea"),j=_("question-filled"),P=_("el-avatar"),U=_("setting"),B=_("refresh");return d(),p("header",ze,[c("div",He,[o.menuStatus?(d(),p("div",{key:0,class:"header-left-item",onClick:t[0]||(t[0]=(...I)=>n.showAsideNav&&n.showAsideNav(...I))},[a(u,null,{default:h(()=>[a(i)]),_:1}),Ye])):g("",!0),a(f,{to:"/"},{default:h(()=>[c("div",Ke,[a(u,null,{default:h(()=>[a(b)]),_:1}),Qe])]),_:1}),a(f,{to:"/bangumi"},{default:h(()=>[c("div",We,[a(u,null,{default:h(()=>[a(v)]),_:1}),Ze])]),_:1}),a(f,{to:"/nihongo"},{default:h(()=>[c("div",Je,[a(u,null,{default:h(()=>[a(R)]),_:1}),Xe])]),_:1}),a(f,{to:"/learn"},{default:h(()=>[c("div",Ge,[a(u,null,{default:h(()=>[a(F)]),_:1}),et])]),_:1}),a(f,{to:"/about"},{default:h(()=>[c("div",tt,[a(u,null,{default:h(()=>[a(j)]),_:1}),ot])]),_:1})]),o.islogin?(d(),p("div",st,[c("div",nt,[a(P,{size:"small",src:"https://q1.qlogo.cn/g?b=qq&nk="+this.user+"&s=640"},null,8,["src"]),c("div",at,[a(f,{to:"/user"},{default:h(()=>[it]),_:1}),o.userAuth?(d(),p("div",rt)):g("",!0),a(f,{to:"/mylove"},{default:h(()=>[o.userAuth?(d(),p("div",lt,"\u6211\u7684\u6536\u85CF")):g("",!0)]),_:1}),ct,c("a",{onClick:t[1]||(t[1]=(...I)=>n.exit&&n.exit(...I)),href:"#"},dt)])]),o.menuStatus?g("",!0):(d(),p("div",{key:0,class:"header-right-item",onClick:t[2]||(t[2]=I=>o.menuStatus=!0)},[a(f,{to:"/manage/upload"},{default:h(()=>[a(u,null,{default:h(()=>[a(U)]),_:1}),mt]),_:1})])),o.menuStatus?(d(),p("div",{key:1,class:"header-right-item",onClick:t[3]||(t[3]=I=>o.menuStatus=!1)},[a(u,null,{default:h(()=>[a(B)]),_:1}),_t])):g("",!0)])):g("",!0),o.islogin?g("",!0):(d(),p("div",ht,[c("div",pt,[a(P,{src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"})]),c("div",ft,[gt,c("div",vt,[c("div",{class:"user-menu-item",onClick:t[4]||(t[4]=(...I)=>n.goLogin&&n.goLogin(...I))},"\u767B\u5F55/\u6CE8\u518C")])])]))])}var bt=S(Be,[["render",yt],["__scopeId","data-v-5b9c686b"]]);const It={name:"Footer",data(){return{}},components:{}},x=e=>(w("data-v-4f6f6a1a"),e=e(),E(),e),St=x(()=>c("canvas",{class:"fireworks",style:{position:"fixed",left:"0",top:"0","z-index":"999","pointer-events":"none"}},null,-1)),At=x(()=>c("footer",null,"Copyright \xA9 2020-2021 \u522B\u52A8\u6211\u7ED3\u83DC",-1));function wt(e,t,r,l,o,n){return d(),p(N,null,[St,At],64)}var Et=S(It,[["render",wt],["__scopeId","data-v-4f6f6a1a"]]);const kt={name:"App",step(){},data(){return{islogin:!1,ishow:!1,cloud:A.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,dialogVisible:!0}},computed:{isLogin(){return this.$store.state.islogin}},created(){this.auth=this.cloud.auth({persistence:"local"});const e=this.auth.currentUser;e&&localStorage.setItem("openid",e.uid);var t=document.location.protocol!="https:";console.log(t),t&&window.location.hostname!=="localhost"&&(window.location="https://site.shuiao.top"),this.auth.hasLoginState&&localStorage.getItem("login_type_yui-7gel1hqtaf6fb79d")||this.nmlogin();const r=this.cloud.database();r.command,r.collection("user").where({email:localStorage.getItem("yui_login_user")}).get().then(l=>{const o=l.data;!!l.data&&!!o[0]&&(o[0].isEffect==="1"&&o[0].uauth==="0"?localStorage.setItem("user_auth","admin"):localStorage.setItem("user_auth","normal"))})},components:{Login:Ue,Header:bt,Footer:Et},methods:{appClick(e){console.log(e),e.target.localName=="aside"&&this.$store.commit("noincrement")},async nmlogin(){const e=this.cloud.auth({persistence:"local"});await e.anonymousAuthProvider().signIn();const t=await e.getLoginState();console.log(t.isAnonymousAuth),window.location.reload()},confirm(){this.dialogVisible=!1,this.nmlogin()},goLogin(){this.$store.commit("increment"),this.dialogVisible=!1}}};function Lt(e,t,r,l,o,n){const i=_("Header"),u=_("router-view"),b=_("Login"),f=_("Footer");return d(),p("div",{class:C({s_main:!n.isLogin,a_main:n.isLogin}),onClick:t[1]||(t[1]=z((...v)=>e.hideAside&&e.hideAside(...v),["self"]))},[a(i),c("main",null,[a(u,null,{default:h(({Component:v})=>[(d(),k(H,null,[e.$route.meta.keepAlive?(d(),k(D(v),{key:0})):g("",!0)],1024)),e.$route.meta.keepAlive?g("",!0):(d(),k(D(v),{key:0}))]),_:1})]),n.isLogin?(d(),p("aside",{key:0,class:C({noshow:o.ishow}),onClick:t[0]||(t[0]=(...v)=>n.appClick&&n.appClick(...v))},[a(b)],2)):g("",!0),a(f)],2)}var $t=S(kt,[["render",Lt],["__scopeId","data-v-3d3f5624"]]);const Pt="modulepreload",O={},Tt="/",m=function(t,r){return!r||r.length===0?t():Promise.all(r.map(l=>{if(l=`${Tt}${l}`,l in O)return;O[l]=!0;const o=l.endsWith(".css"),n=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${n}`))return;const i=document.createElement("link");if(i.rel=o?"stylesheet":Pt,o||(i.as="script",i.crossOrigin=""),i.href=l,document.head.appendChild(i),o)return new Promise((u,b)=>{i.addEventListener("load",u),i.addEventListener("error",b)})})).then(()=>t())},Vt=()=>m(()=>import("./Shouye.a39a904d.js"),["assets/Shouye.a39a904d.js","assets/Shouye.484c0f9d.css","assets/vendor.c71fd20d.js","assets/NewsItem.1215f265.js","assets/NewsItem.b4e0ecc0.css"]),Nt=()=>m(()=>import("./Top.27b6c4f4.js"),["assets/Top.27b6c4f4.js","assets/Top.4301bd42.css","assets/vendor.c71fd20d.js"]),Ct=()=>m(()=>import("./Share.e58b832c.js"),["assets/Share.e58b832c.js","assets/Share.a89af4c3.css","assets/vendor.c71fd20d.js"]),Dt=()=>m(()=>import("./Chat.139c935d.js"),["assets/Chat.139c935d.js","assets/Chat.82ade952.css","assets/vendor.c71fd20d.js"]),Mt=()=>m(()=>import("./About.34a8fbd0.js"),["assets/About.34a8fbd0.js","assets/About.65904fc3.css","assets/vendor.c71fd20d.js"]),xt=()=>m(()=>import("./User.25db0c2c.js"),["assets/User.25db0c2c.js","assets/User.eb970f1f.css","assets/vendor.c71fd20d.js"]),Ot=()=>m(()=>import("./Manage.d4a1d647.js"),["assets/Manage.d4a1d647.js","assets/Manage.7e89eae8.css","assets/vendor.c71fd20d.js"]),qt=()=>m(()=>import("./FilmsManage.a0ac3232.js"),["assets/FilmsManage.a0ac3232.js","assets/FilmsManage.a7f0a5e8.css","assets/vendor.c71fd20d.js","assets/FilmsUpload.26f6d95c.js","assets/FilmsUpload.768f405d.css"]),Rt=()=>m(()=>import("./FilmsUpload.26f6d95c.js"),["assets/FilmsUpload.26f6d95c.js","assets/FilmsUpload.768f405d.css","assets/vendor.c71fd20d.js"]),Ft=()=>m(()=>import("./UserManage.bbe9c559.js"),["assets/UserManage.bbe9c559.js","assets/UserManage.4910776d.css","assets/vendor.c71fd20d.js"]),jt=()=>m(()=>import("./FilmsMore.fdca2882.js"),["assets/FilmsMore.fdca2882.js","assets/FilmsMore.e3a0c017.css","assets/vendor.c71fd20d.js"]),Ut=()=>m(()=>import("./Bangumi.de8ff2e3.js"),["assets/Bangumi.de8ff2e3.js","assets/Bangumi.d10d5232.css","assets/vendor.c71fd20d.js"]),Bt=()=>m(()=>import("./Nihongo.5df6101b.js"),["assets/Nihongo.5df6101b.js","assets/Nihongo.b19ab4a0.css","assets/vendor.c71fd20d.js"]),zt=()=>m(()=>import("./Learn.d2484735.js"),["assets/Learn.d2484735.js","assets/Learn.e7d41067.css","assets/vendor.c71fd20d.js"]),Ht=()=>m(()=>import("./FilmDetail.3a802d5a.js"),["assets/FilmDetail.3a802d5a.js","assets/FilmDetail.e8586ba6.css","assets/FilmsBox.da154bd1.js","assets/FilmsBox.fc45bb8a.css","assets/vendor.c71fd20d.js","assets/FilmsUpload.26f6d95c.js","assets/FilmsUpload.768f405d.css"]),Yt=()=>m(()=>import("./MyLove.c81e3298.js"),["assets/MyLove.c81e3298.js","assets/MyLove.94c856e5.css","assets/vendor.c71fd20d.js"]),Kt=()=>m(()=>import("./FilmsCard.5e3abcdd.js"),["assets/FilmsCard.5e3abcdd.js","assets/FilmsBox.da154bd1.js","assets/FilmsBox.fc45bb8a.css","assets/vendor.c71fd20d.js"]),q=()=>m(()=>import("./NewsCard.2e6f32dd.js"),["assets/NewsCard.2e6f32dd.js","assets/NewsCard.72cd36d5.css","assets/NewsItem.1215f265.js","assets/NewsItem.b4e0ecc0.css","assets/vendor.c71fd20d.js"]),Qt=()=>m(()=>import("./MusicCard.8688b9aa.js"),["assets/MusicCard.8688b9aa.js","assets/MusicCard.cca693da.css","assets/vendor.c71fd20d.js"]),Wt=()=>m(()=>import("./MuiscManage.3f2fb3d2.js"),["assets/MuiscManage.3f2fb3d2.js","assets/vendor.c71fd20d.js"]),Zt=[{path:"/",component:Vt,children:[{path:"/",component:q,meta:{keepAlive:!0}},{path:"/shouye",component:q},{path:"shouye/filmscard",component:Kt},{path:"shouye/musicard",component:Qt}]},{path:"/top",name:"top",component:Nt},{path:"/share",name:"share",component:Ct},{path:"/chat",name:"chat",component:Dt},{path:"/about",name:"about",component:Mt},{path:"/user",name:"user",component:xt},{path:"/manage",name:"manage",children:[{path:"films",component:qt},{path:"upload",component:Rt},{path:"user",component:Ft},{path:"music",component:Wt}],component:Ot},{path:"/filmsmore",name:"filmsmore",component:jt},{path:"/bangumi",name:"bangumi",component:Ut},{path:"/nihongo",name:"nihongo",component:Bt},{path:"/learn",name:"learn",component:zt},{path:"/filmdetail/:id",name:"filmdetail",component:Ht},{path:"/mylove",name:"mylove",component:Yt}],Jt=Y({history:K(),routes:Zt,scrollBehavior(e,t,r){return{top:0}}}),Xt=Q({state(){return{islogin:!1,loginStatus:!1,asideNavStatus:!0}},mutations:{increment(e){e.islogin=!0},noincrement(e){e.islogin=!1},inlogin(e){e.loginStatus=!0},nologin(e){e.loginStatus=!1},showAsideNav(e){e.asideNavStatus=!0},hideAsideNav(e){e.asideNavStatus=!1}}});const Gt={data(){return{fomatTime:""}},props:["time","type"],computed:{fomatTime:function(){return this.fomatTime=this.$moment(this.time).format("YYYY-MM-DD hh:mm:ss"),this.fomatTime},FromNow:function(){return this.fomatTime=this.$moment(this.time).FromNow(),this.fomatTime}},created(){console.log(document.getElementsByClassName("shuite-timer"))},components:{}},eo={key:0},to={key:1};function oo(e,t,r,l,o,n){return d(),p(N,null,[r.type?g("",!0):(d(),p("span",eo,L(n.fomatTime),1)),r.type=="1"?(d(),p("span",to,L(n.FromNow),1)):g("",!0)],64)}var so=S(Gt,[["render",oo]]);const no={data(){return{}},setup(){return{input:W("")}},props:{swidth:{default:700},subname:{default:"\u641C\u7D22"}},created(){},methods:{searchFunc(){this.$emit("search")}},components:{}},ao={class:"shuite-input"};function io(e,t,r,l,o,n){const i=_("el-input"),u=_("el-button");return d(),p("div",ao,[a(i,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",modelValue:l.input,"onUpdate:modelValue":t[0]||(t[0]=b=>l.input=b),clearable:"",class:"shuite-search"},null,8,["modelValue"]),a(u,{onClick:n.searchFunc,type:"small",style:{height:"40px","margin-left":"10px","margin-right":"10px"}},{default:h(()=>[y(L(r.subname),1)]),_:1},8,["onClick"])])}var ro=S(no,[["render",io],["__scopeId","data-v-4e6a41bb"]]);const lo={},co=e=>(w("data-v-0089b6c8"),e=e(),E(),e),uo={class:"lottie-player"},mo=co(()=>c("span",null,"\u52A0\u8F7D\u4E2D...",-1));function _o(e,t){const r=_("lottie-player");return d(),p("div",uo,[a(r,{src:"https://assets5.lottiefiles.com/packages/lf20_jqtrvhhf.json",background:"transparent",speed:"1",loop:"",autoplay:""}),mo])}var ho=S(lo,[["render",_o],["__scopeId","data-v-0089b6c8"]]);const s=Z($t);s.use(J,{locale:X});s.component("baseball",G);s.component("calendar",ee);s.component("house",te);s.component("school",oe);s.component("notebook",se);s.component("star",ne);s.component("star-filled",ae);s.component("question-filled",ie);s.component("user",re);s.component("close",le);s.component("link",ce);s.component("expand",ue);s.component("fold",de);s.component("location",me);s.component("setting",_e);s.component("upload",he);s.component("ship",pe);s.component("video-camera",fe);s.component("mic",ge);s.component("paperclip",ve);s.component("chat-round",ye);s.component("edit",be);s.component("more-filled",Ie);s.component("trophy",Se);s.component("milkTea",Ae);s.component("bell",we);s.component("refresh",Ee);s.component("delete",ke);s.component("zoom-in",Le);s.component("plus",$e);s.config.globalProperties.$scrollReveal=Pe;s.config.globalProperties.$axios=Te;s.config.globalProperties.$cloudbase=A;s.config.globalProperties.$moment=Ve;s.config.globalProperties.$ElMessage=Ne;s.component("Timer",so);s.component("shuite-input",ro);s.component("shuite-loading",ho);A.init({env:"yui-7gel1hqtaf6fb79d"});const po=A.auth({persistence:"local"});s.config.globalProperties.$auth=po;s.use(Jt);s.use(Xt);s.mount("#app");export{ro as S,S as _};
