import{r as h,o as d,c as f,a as l,b as i,w as _,d as g,e as S,n as x,f as y,p as w,g as $,F as C,h as k,i as T,K as U,j as B,k as H,l as z,t as L,m as Y,q as j,C as v,s as J,u as K,z as W,B as G,v as Q,H as Z,S as X,N as ee,x as te,y as oe,Q as ne,U as se,A as ae,L as ie,E as re,D as le,G as ce,I as ue,J as de,M as _e,V as me,O as pe,P as he,R as ge,T as fe,W as ve,X as ye,Y as Se,Z as Ee,_ as be,$ as Ie,a0 as Ae,a1 as ke,a2 as Le,a3 as we,a4 as $e,a5 as Pe,a6 as Te}from"./vendor.8020b7fb.js";const De=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}};De();var E=(e,n)=>{const s=e.__vccOpts||e;for(const[r,o]of n)s[r]=o;return s};const xe={data(){return{userAuth:localStorage.getItem("user_auth")=="admin",cloud:cloudbase.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,user:localStorage.getItem("yui_login_user"),menuStatus:!1,userAuth:localStorage.getItem("user_auth"),headerFixed:!1}},props:{islogin:Boolean},computed:{getMenuStatus(){return this.$store.state.asideNavStatus}},created(){this.auth=this.cloud.auth({persistence:"local"})},mounted(){window.addEventListener("scroll",this.handleScroll)},methods:{exit(){localStorage.removeItem("login_type_yui-7gel1hqtaf6fb79d"),localStorage.removeItem("user_info_yui-7gel1hqtaf6fb79d"),localStorage.removeItem("refresh_token_yui-7gel1hqtaf6fb79d"),localStorage.removeItem("yui_login_user"),localStorage.removeItem("access_token_yui-7gel1hqtaf6fb79d"),localStorage.removeItem("access_token_expire_yui-7gel1hqtaf6fb79d"),localStorage.removeItem("user_auth"),localStorage.removeItem("anonymous_uuid_yui-7gel1hqtaf6fb79d"),window.location.reload()},goLogin(){this.$store.commit("increment")},showAsideNav(){this.$store.state.asideNavStatus?this.$store.commit("hideAsideNav"):this.$store.commit("showAsideNav")},handleScroll(){this.headerFixed=!0}},components:{}},b=e=>(w("data-v-6e25647d"),e=e(),$(),e),Ce={class:"header-left"},Ve={class:"header-left-item"},Oe=y("\u9996\u9875 "),Ne={class:"header-left-item"},Me=y("\u8FFD\u756A "),Re={class:"header-left-item header-left-noshow"},qe=y("\u65E5\u8BED "),Fe={class:"header-left-item header-left-noshow"},Ue=y("\u77E5\u8BC6\u5E93 "),Be={class:"header-left-item"},He=y("\u5173\u4E8E "),ze={class:"header-left-item"},Ye=y("\u62BD\u5956 "),je={key:0,class:"header-right"},Je={class:"header-right-item header-right-menu"},Ke={class:"user-menu"},We=b(()=>l("div",{class:"user-menu-item"},"\u6211\u7684\u4FE1\u606F",-1)),Ge={key:0,class:"line"},Qe={key:0,class:"user-menu-item"},Ze=b(()=>l("div",{class:"line"},null,-1)),Xe=b(()=>l("div",{class:"line"},null,-1)),et=b(()=>l("div",{class:"user-menu-item"},"\u9000\u51FA\u767B\u5F55",-1)),tt=[et],ot=b(()=>l("span",null,"\u4E0A\u4F20",-1)),nt=b(()=>l("span",null,"\u8F6C\u6B63",-1)),st={key:1,class:"header-right"},at={class:"header-right-item"},it={class:"header-right-item header-right-menu"},rt=y(" \u767B\u5F55 "),lt={class:"user-menu"},ct=b(()=>l("div",{class:"user-menu-item"},"\u767B\u5F55/\u6CE8\u518C",-1));function ut(e,n,s,r,o,a){const c=h("house"),p=h("el-icon"),m=h("router-link"),I=h("calendar"),M=h("school"),R=h("milkTea"),q=h("question-filled"),F=h("present"),P=h("el-avatar");return d(),f("header",{class:x({"shuite-header":o.headerFixed})},[l("div",Ce,[i(m,{to:"/"},{default:_(()=>[l("div",Ve,[i(p,null,{default:_(()=>[i(c)]),_:1}),Oe])]),_:1}),i(m,{to:"/bangumi"},{default:_(()=>[l("div",Ne,[i(p,null,{default:_(()=>[i(I)]),_:1}),Me])]),_:1}),i(m,{to:"/nihongo"},{default:_(()=>[l("div",Re,[i(p,null,{default:_(()=>[i(M)]),_:1}),qe])]),_:1}),i(m,{to:"/learn"},{default:_(()=>[l("div",Fe,[i(p,null,{default:_(()=>[i(R)]),_:1}),Ue])]),_:1}),i(m,{to:"/about"},{default:_(()=>[l("div",Be,[i(p,null,{default:_(()=>[i(q)]),_:1}),He])]),_:1}),i(m,{to:"/gift"},{default:_(()=>[l("div",ze,[i(p,null,{default:_(()=>[i(F)]),_:1}),Ye])]),_:1})]),s.islogin?(d(),f("div",je,[l("div",Je,[i(P,{size:"small",src:"https://q1.qlogo.cn/g?b=qq&nk="+this.user+"&s=640"},null,8,["src"]),l("div",Ke,[i(m,{to:"/user"},{default:_(()=>[We]),_:1}),o.userAuth?(d(),f("div",Ge)):g("",!0),i(m,{to:"/mylove"},{default:_(()=>[o.userAuth?(d(),f("div",Qe,"\u6211\u7684\u6536\u85CF")):g("",!0)]),_:1}),Ze,i(m,{to:"/manage/share"},{default:_(()=>[o.userAuth?(d(),f("div",{key:0,class:"user-menu-item",onClick:n[0]||(n[0]=(...A)=>a.showAsideNav&&a.showAsideNav(...A))}," \u7CFB\u7EDF\u7BA1\u7406 ")):g("",!0)]),_:1}),Xe,l("a",{onClick:n[1]||(n[1]=(...A)=>a.exit&&a.exit(...A)),href:"#"},tt)])]),l("div",{class:"header-right-item",onClick:n[2]||(n[2]=A=>o.menuStatus=!0)},[o.userAuth=="admin"?(d(),S(m,{key:0,to:"/manage/upload",class:"upload"},{default:_(()=>[ot]),_:1})):g("",!0),o.userAuth=="normal"?(d(),S(m,{key:1,to:"/manage/upload",class:"upload"},{default:_(()=>[nt]),_:1})):g("",!0)])])):g("",!0),s.islogin?g("",!0):(d(),f("div",st,[l("div",at,[i(P,{src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"})]),l("div",it,[rt,l("div",lt,[i(m,{to:"/login"},{default:_(()=>[ct]),_:1})])])]))],2)}var dt=E(xe,[["render",ut],["__scopeId","data-v-6e25647d"]]);const _t={name:"Footer",data(){return{}},components:{}},V=e=>(w("data-v-4f6f6a1a"),e=e(),$(),e),mt=V(()=>l("canvas",{class:"fireworks",style:{position:"fixed",left:"0",top:"0","z-index":"999","pointer-events":"none"}},null,-1)),pt=V(()=>l("footer",null,"Copyright \xA9 2020-2021 \u522B\u52A8\u6211\u7ED3\u83DC",-1));function ht(e,n,s,r,o,a){return d(),f(C,null,[mt,pt],64)}var gt=E(_t,[["render",ht],["__scopeId","data-v-4f6f6a1a"]]);const ft={name:"App",step(){},data(){return{islogin:!1,ishow:!1,cloud:k.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,dialogVisible:!0,onlyMain:!1}},computed:{isLogin(){return this.$store.state.islogin},onlyMain(){return this.$store.state.onlyMain}},created(){this.auth=this.cloud.auth({persistence:"local"});const e=this.cloud.database(),n=e.command,s=new Date(new Date().setHours(0,0,0,0)).getTime();let r;localStorage.getItem("login_type_yui-7gel1hqtaf6fb79d")&&(r=JSON.parse(localStorage.getItem("login_type_yui-7gel1hqtaf6fb79d")).content),console.log(r,"12313123123123");const o=this.auth.currentUser;o&&localStorage.setItem("openid",o.uid);var a=document.location.protocol!="https:";console.log(a),a&&window.location.hostname!=="localhost"&&(window.location="https://site.shuiao.top"),this.auth.hasLoginState&&localStorage.getItem("login_type_yui-7gel1hqtaf6fb79d")?(console.log(o.uid,"user"),r!="ANONYMOUS"&&(this.islogin=!0,e.collection("score_log").where({uid:o.uid,scoreFrom:"login",created:n.gt(s)}).get().then(c=>{console.log(c,"aaaaa"),c.data.length===0&&this.scoreUp()}))):this.nmlogin(),e.collection("user").where({email:localStorage.getItem("yui_login_user")}).get().then(c=>{const p=c.data;!!c.data&&!!p[0]&&(p[0].isEffect==="1"&&p[0].uauth==="0"?localStorage.setItem("user_auth","admin"):localStorage.setItem("user_auth","normal"))})},mounted(){setTimeout(()=>{this.ishow=!0,clearTimeout()},100)},components:{Header:dt,Footer:gt},methods:{scoreUp(){const e=this.cloud.database(),n=e.command,s=this.auth.currentUser,r=e.collection("user");e.collection("score_log").add({uid:s.uid,scoreFrom:"login",created:Date.now(),updated:Date.now()}).then(a=>{this.$ElMessage.success({message:"\u4ECA\u65E5\u79EF\u5206+1",type:"success"})}),r.where({_openid:s.uid}).update({score:n.inc(1)})},appClick(e){console.log(e),e.target.localName=="aside"&&this.$store.commit("noincrement")},async nmlogin(){const e=this.cloud.auth({persistence:"local"});await e.anonymousAuthProvider().signIn();const n=await e.getLoginState();console.log(n.isAnonymousAuth),window.location.reload()},confirm(){this.dialogVisible=!1,this.nmlogin()},goLogin(){this.$store.commit("increment"),this.dialogVisible=!1},hideLogin(){this.$store.commit("noincrement")}}};function vt(e,n,s,r,o,a){const c=h("Header"),p=h("router-view"),m=h("Footer");return o.ishow?(d(),f("div",{key:0,class:x({s_main:!a.isLogin,a_main:a.isLogin}),onDblclick:n[0]||(n[0]=(...I)=>a.hideLogin&&a.hideLogin(...I))},[e.$route.meta.onlyMain?g("",!0):(d(),S(c,{key:0,islogin:o.islogin},null,8,["islogin"])),l("section",null,[l("main",null,[i(p,null,{default:_(({Component:I})=>[(d(),S(U,null,[e.$route.meta.keepAlive?(d(),S(T(I),{key:0})):g("",!0)],1024)),e.$route.meta.keepAlive?g("",!0):(d(),S(T(I),{key:0}))]),_:1})])]),e.$route.meta.onlyMain?g("",!0):(d(),S(m,{key:1}))],34)):g("",!0)}var yt=E(ft,[["render",vt],["__scopeId","data-v-2f733bc4"]]);const St="modulepreload",D={},Et="/",u=function(n,s){return!s||s.length===0?n():Promise.all(s.map(r=>{if(r=`${Et}${r}`,r in D)return;D[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":St,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((p,m)=>{c.addEventListener("load",p),c.addEventListener("error",m)})})).then(()=>n())},bt=()=>u(()=>import("./Index.55c73343.js"),["assets/Index.55c73343.js","assets/Index.6d99d312.css","assets/vendor.8020b7fb.js","assets/NewsItem.62fb08dc.js","assets/NewsItem.a5c2b80d.css"]),It=()=>u(()=>import("./Top.3beeee93.js"),["assets/Top.3beeee93.js","assets/Top.4301bd42.css","assets/vendor.8020b7fb.js"]),At=()=>u(()=>import("./Share.6a32086e.js"),["assets/Share.6a32086e.js","assets/Share.a89af4c3.css","assets/vendor.8020b7fb.js"]),kt=()=>u(()=>import("./Chat.6c663fc5.js"),["assets/Chat.6c663fc5.js","assets/Chat.82ade952.css","assets/vendor.8020b7fb.js"]),Lt=()=>u(()=>import("./About.8615ebcb.js"),["assets/About.8615ebcb.js","assets/About.65904fc3.css","assets/vendor.8020b7fb.js"]),wt=()=>u(()=>import("./User.7c1345c3.js"),["assets/User.7c1345c3.js","assets/User.394f693e.css","assets/vendor.8020b7fb.js"]),$t=()=>u(()=>import("./Manage.6a2706c3.js"),["assets/Manage.6a2706c3.js","assets/Manage.7f135179.css","assets/vendor.8020b7fb.js"]),Pt=()=>u(()=>import("./ShareManage.cd6535eb.js"),["assets/ShareManage.cd6535eb.js","assets/ShareManage.aedad0de.css","assets/vendor.8020b7fb.js","assets/ShareUpload.9a301bbb.js","assets/ShareUpload.3edc2e43.css"]),Tt=()=>u(()=>import("./ShareUpload.9a301bbb.js"),["assets/ShareUpload.9a301bbb.js","assets/ShareUpload.3edc2e43.css","assets/vendor.8020b7fb.js"]),Dt=()=>u(()=>import("./UserManage.4bfe0a4f.js"),["assets/UserManage.4bfe0a4f.js","assets/UserManage.bca29c2d.css","assets/vendor.8020b7fb.js"]),xt=()=>u(()=>import("./ShareMore.0bb082be.js"),["assets/ShareMore.0bb082be.js","assets/ShareMore.da0bfa3a.css","assets/vendor.8020b7fb.js"]),Ct=()=>u(()=>import("./Bangumi.beecc1da.js"),["assets/Bangumi.beecc1da.js","assets/Bangumi.d10d5232.css","assets/vendor.8020b7fb.js"]),Vt=()=>u(()=>import("./Nihongo.9f5ddbbd.js"),["assets/Nihongo.9f5ddbbd.js","assets/Nihongo.b19ab4a0.css","assets/vendor.8020b7fb.js"]),Ot=()=>u(()=>import("./Learn.27736a42.js"),["assets/Learn.27736a42.js","assets/Learn.e7d41067.css","assets/vendor.8020b7fb.js"]),Nt=()=>u(()=>import("./ShareDetail.7574718a.js"),["assets/ShareDetail.7574718a.js","assets/ShareDetail.49b0c5ed.css","assets/ShareUpload.9a301bbb.js","assets/ShareUpload.3edc2e43.css","assets/vendor.8020b7fb.js"]),Mt=()=>u(()=>import("./MyLove.d68726eb.js"),["assets/MyLove.d68726eb.js","assets/MyLove.d0154d25.css","assets/vendor.8020b7fb.js"]),Rt=()=>u(()=>import("./ShareCard.181bff02.js"),["assets/ShareCard.181bff02.js","assets/ShareCard.cbc222aa.css","assets/vendor.8020b7fb.js"]),qt=()=>u(()=>import("./NewsCard.395f6abb.js"),["assets/NewsCard.395f6abb.js","assets/NewsCard.b338995b.css","assets/NewsItem.62fb08dc.js","assets/NewsItem.a5c2b80d.css","assets/vendor.8020b7fb.js"]),Ft=()=>u(()=>import("./MusicCard.742a1cd8.js"),["assets/MusicCard.742a1cd8.js","assets/MusicCard.f867acfe.css","assets/vendor.8020b7fb.js"]),Ut=()=>u(()=>import("./MuiscManage.e0d46b3d.js"),["assets/MuiscManage.e0d46b3d.js","assets/vendor.8020b7fb.js"]),Bt=()=>u(()=>import("./Draw.1b042903.js"),["assets/Draw.1b042903.js","assets/vendor.8020b7fb.js"]),Ht=()=>u(()=>import("./Login.dccba085.js"),["assets/Login.dccba085.js","assets/Login.14322f65.css","assets/vendor.8020b7fb.js"]),zt=()=>u(()=>import("./Gift.753b90f8.js"),["assets/Gift.753b90f8.js","assets/Gift.0b7ddf96.css","assets/vendor.8020b7fb.js"]),Yt=[{path:"/",component:bt,children:[{path:"/",component:qt,meta:{keepAlive:!0}},{path:"/share",component:Rt},{path:"/music",component:Ft},{path:"/draw",component:Bt}]},{path:"/login",component:Ht,meta:{onlyMain:!0}},{path:"/top",name:"top",component:It},{path:"/share",name:"share",component:At},{path:"/chat",name:"chat",component:kt},{path:"/about",name:"about",component:Lt},{path:"/user",name:"user",component:wt},{path:"/gift",name:"gift",component:zt,meta:{onlyMain:!0}},{path:"/manage",name:"manage",children:[{path:"share",component:Pt},{path:"upload",component:Tt},{path:"user",component:Dt},{path:"music",component:Ut}],component:$t},{path:"/share/more",name:"sharemore",component:xt},{path:"/bangumi",name:"bangumi",component:Ct},{path:"/nihongo",name:"nihongo",component:Vt},{path:"/learn",name:"learn",component:Ot},{path:"/share/detail/:id",name:"sharedetail",component:Nt},{path:"/mylove",name:"mylove",component:Mt}],jt=B({history:H(),routes:Yt,scrollBehavior(e,n,s){}}),Jt=z({state(){return{islogin:!1,loginStatus:!1,asideNavStatus:!0,onlyMain:!0}},mutations:{increment(e){e.islogin=!0},noincrement(e){e.islogin=!1},onlyShowMain(e){e.onlyMain=!1},notOnlyShowMain(e){e.onlyMain=!0},inlogin(e){e.loginStatus=!0},nologin(e){e.loginStatus=!1},showAsideNav(e){e.asideNavStatus=!0},hideAsideNav(e){e.asideNavStatus=!1}}});const Kt={data(){return{fomatTime:""}},props:["time","type"],computed:{fomatTime:function(){return this.fomatTime=this.$moment(this.time).format("YYYY-MM-DD hh:mm:ss"),this.fomatTime},FromNow:function(){return this.fomatTime=this.$moment(this.time).FromNow(),this.fomatTime}},created(){console.log(document.getElementsByClassName("shuite-timer"))},components:{}},Wt={key:0},Gt={key:1};function Qt(e,n,s,r,o,a){return d(),f(C,null,[s.type?g("",!0):(d(),f("span",Wt,L(a.fomatTime),1)),s.type=="1"?(d(),f("span",Gt,L(a.FromNow),1)):g("",!0)],64)}var Zt=E(Kt,[["render",Qt]]);const Xt={data(){return{}},setup(){return{input:Y("")}},props:{subname:{default:"\u641C\u7D22"}},created(){},methods:{searchFunc(){this.$emit("search")}},components:{}},eo={class:"shuite-input"};function to(e,n,s,r,o,a){const c=h("el-input"),p=h("el-button");return d(),f("div",eo,[i(c,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",modelValue:r.input,"onUpdate:modelValue":n[0]||(n[0]=m=>r.input=m),clearable:"",class:"shuite-search"},null,8,["modelValue"]),i(p,{onClick:a.searchFunc,style:{height:"40px","margin-left":"10px","margin-right":"10px"}},{default:_(()=>[y(L(s.subname),1)]),_:1},8,["onClick"])])}var oo=E(Xt,[["render",to],["__scopeId","data-v-c111c610"]]);const no={},so=e=>(w("data-v-0089b6c8"),e=e(),$(),e),ao={class:"lottie-player"},io=so(()=>l("span",null,"\u52A0\u8F7D\u4E2D...",-1));function ro(e,n){const s=h("lottie-player");return d(),f("div",ao,[i(s,{src:"https://assets5.lottiefiles.com/packages/lf20_jqtrvhhf.json",background:"transparent",speed:"1",loop:"",autoplay:""}),io])}var lo=E(no,[["render",ro],["__scopeId","data-v-0089b6c8"]]);const co={setup(){},props:{srcUrl:String,speed:Number,width:String,height:String}},uo={class:"lottie-player"};function _o(e,n,s,r,o,a){const c=h("lottie-player");return d(),f("div",uo,[i(c,{src:s.srcUrl,background:"transparent",loop:"",speed:s.speed,autoplay:"",style:j({width:s.width,height:s.height}),height:s.height},null,8,["src","speed","style","height"])])}var mo=E(co,[["render",_o],["__scopeId","data-v-668d6530"]]);const O=v.enc.Utf8.parse("1234123412ABCDEF"),N=v.enc.Utf8.parse("ABCDEF1234123412");function po(e){let n=v.enc.Hex.parse(e),s=v.enc.Base64.stringify(n);return v.AES.decrypt(s,O,{iv:N,mode:v.mode.CBC,padding:v.pad.Pkcs7}).toString(v.enc.Utf8).toString()}function ho(e){let n=v.enc.Utf8.parse(e);return v.AES.encrypt(n,O,{iv:N,mode:v.mode.CBC,padding:v.pad.Pkcs7}).ciphertext.toString().toUpperCase()}const t=J(yt);t.use(K,{locale:W});t.component("baseball",G);t.component("calendar",Q);t.component("house",Z);t.component("school",X);t.component("notebook",ee);t.component("star",te);t.component("star-filled",oe);t.component("question-filled",ne);t.component("user",se);t.component("close",ae);t.component("link",ie);t.component("expand",re);t.component("fold",le);t.component("location",ce);t.component("setting",ue);t.component("upload",de);t.component("ship",_e);t.component("video-camera",me);t.component("mic",pe);t.component("paperclip",he);t.component("chat-round",ge);t.component("edit",fe);t.component("more-filled",ve);t.component("trophy",ye);t.component("milkTea",Se);t.component("bell",Ee);t.component("refresh",be);t.component("delete",Ie);t.component("zoom-in",Ae);t.component("plus",ke);t.component("present",Le);t.config.globalProperties.$scrollReveal=we;t.config.globalProperties.$axios=$e;t.config.globalProperties.$cloudbase=k;t.config.globalProperties.$moment=Pe;t.config.globalProperties.$ElMessage=Te;t.config.globalProperties.$Encrypt=ho;t.config.globalProperties.$Decrypt=po;t.component("Timer",Zt);t.component("shuite-input",oo);t.component("shuite-loading",lo);t.component("lottie-player-s",mo);k.init({env:"yui-7gel1hqtaf6fb79d"});const go=k.auth({persistence:"local"});t.config.globalProperties.$auth=go;t.use(jt);t.use(Jt);t.mount("#app");export{oo as S,E as _};
