import{_ as f}from"./main.a3dfecda.js";import{r as a,o as n,e as I,w as i,a as t,t as h,c as d,F as y,a5 as S,b as e,a6 as B,p as k,g as w,n as x,d as m,m as V,f as j,i as L}from"./vendor.7bf13f67.js";import{N as F}from"./NewsItem.bbf75f04.js";const T={data(){return{}},props:["chatdata"],components:{}},z={class:"comment-item"},O=["src"],E={class:"user-text"};function G(s,r,c,b,p,v){const u=a("router-link");return n(),I(u,{to:"/share/detail/"+c.chatdata.filmId+"#"+c.chatdata._id},{default:i(()=>[t("div",z,[t("img",{src:"https://q1.qlogo.cn/g?b=qq&nk="+c.chatdata.email+"&s=640"},null,8,O),t("div",E,[t("p",null,h(c.chatdata.filmName),1),t("p",null,h(c.chatdata.nickname)+":"+h(c.chatdata.chat),1)])])]),_:1},8,["to"])}var H=f(T,[["render",G],["__scopeId","data-v-54127946"]]);const J={data(){return{commentData:[]}},created(){const s=this.$cloudbase.database();s.command,s.collection("chats").where({chatFrom:"film",isOk:1}).orderBy("created","desc").limit(10).get().then(r=>{NProgress.done(),console.log(r.data),this.commentData=r.data})},components:{"comment-item":H}},K=s=>(k("data-v-964df922"),s=s(),w(),s),Q=B('<div class="textbox gongao boxshadow" data-v-964df922><h4 data-v-964df922>\u516C\u544A</h4><p data-v-964df922>1.\u6765\u81EA\u54B8\u9C7C\u7684\u5206\u4EAB\u6570\u636E\u6C47\u603B</p><p data-v-964df922>2.\u5408\u4F5C\u8BF7\u8054\u7CFB\u672C\u4EBA\u90AE\u7BB1</p></div><div class="textbox zhuiju boxshadow" data-v-964df922><h4 data-v-964df922>\u8FFD\u5267APP</h4><div class="app-box" data-v-964df922><img class="app-item" src="https://cdn.jsdelivr.net/gh/MoyuiSan/shuiao-pic@master/20210509/\u817E\u8BAF\u89C6\u9891-01.4jmfeukb1180.svg" data-v-964df922><img class="app-item" src="https://cdn.jsdelivr.net/gh/MoyuiSan/shuiao-pic@master/20210509/\u817E\u8BAF\u89C6\u9891-01.4jmfeukb1180.svg" data-v-964df922><img class="app-item" src="https://cdn.jsdelivr.net/gh/MoyuiSan/shuiao-pic@master/20210509/\u817E\u8BAF\u89C6\u9891-01.4jmfeukb1180.svg" data-v-964df922><img class="app-item" src="https://cdn.jsdelivr.net/gh/MoyuiSan/shuiao-pic@master/20210509/\u817E\u8BAF\u89C6\u9891-01.4jmfeukb1180.svg" data-v-964df922></div></div><div class="textbox webinfo boxshadow" data-v-964df922><h4 data-v-964df922>\u7F51\u7AD9\u4FE1\u606F</h4><p data-v-964df922>\u9F9F\u901F\u5F00\u53D1\u4E2D...1.0\u7248\u672C\u5F53\u524D\u8FDB\u5EA640%</p><p data-v-964df922>\u6709\u4EFB\u4F55bug\u53EF\u4EE5\u53CA\u65F6\u53CD\u9988\u54E6</p></div>',3),U={class:"textbox comment boxshadow"},W=K(()=>t("h4",null,"\u6700\u65B0\u8BC4\u8BBA",-1)),X={class:"comment-user"};function Y(s,r,c,b,p,v){const u=a("comment-item");return n(),d(y,null,[Q,t("div",U,[W,(n(!0),d(y,null,S(p.commentData,o=>(n(),d("div",X,[e(u,{chatdata:o},null,8,["chatdata"])]))),256))])],64)}var Z=f(J,[["render",Y],["__scopeId","data-v-964df922"]]);const tt={data(){return{}},props:["ishadow"],created(){console.log(this.$router.currentRoute._value.fullPath),this.$router.currentRoute._value.fullPath.indexOf("filmscard")},components:{NewsItem:F}},_=s=>(k("data-v-33ad95b8"),s=s(),w(),s),et=_(()=>t("p",null,"\u52A8\u6001",-1)),st=_(()=>t("p",null,"\u5206\u4EAB",-1)),ot=_(()=>t("p",null,"\u97F3\u4E50",-1)),at={class:"classbox-item"},nt=_(()=>t("p",null,"\u65E5\u8BED",-1)),ct={class:"classbox-item"},dt=_(()=>t("p",null,"\u77E5\u8BC6\u5E93",-1)),it={class:"classbox-item"},lt=_(()=>t("p",null,"\u804A\u5929",-1)),_t={class:"classbox-item"},rt=_(()=>t("p",null,"\u535A\u5BA2",-1)),ut={key:0,class:"classbox-item"},mt=_(()=>t("p",null,"\u6E38\u620F",-1)),ht={key:1,class:"classbox-item"},pt=_(()=>t("p",null,"\u66F4\u65B0",-1)),vt={key:2,class:"classbox-item"},ft=_(()=>t("i",{class:"el-icon-position"},null,-1)),bt=_(()=>t("p",null,"\u5176\u4ED6",-1)),xt=[ft,bt];function gt(s,r,c,b,p,v){const u=a("ship"),o=a("el-icon"),l=a("router-link"),g=a("video-camera"),$=a("mic"),q=a("school"),P=a("milkTea"),C=a("chat-round"),M=a("notebook"),R=a("trophy"),A=a("bell");return n(),d("div",{class:x({classbox:!0,boxshadow:c.ishadow})},[e(l,{to:"/"},{default:i(()=>[t("div",{class:x({"classbox-item":!0,"select-now":this.$router.currentRoute._value.fullPath=="/shouye"})},[e(o,null,{default:i(()=>[e(u)]),_:1}),et],2)]),_:1}),e(l,{to:"/share"},{default:i(()=>[t("div",{class:x({"classbox-item":!0,"select-now":this.$router.currentRoute._value.fullPath=="/shouye/filmscard"})},[e(o,null,{default:i(()=>[e(g)]),_:1}),st],2)]),_:1}),e(l,{to:"/music"},{default:i(()=>[t("div",{class:x({"classbox-item":!0,"select-now":this.$router.currentRoute._value.fullPath=="/shouye/musicard"})},[e(o,null,{default:i(()=>[e($)]),_:1}),ot],2)]),_:1}),e(l,{to:"/nihongo"},{default:i(()=>[t("div",at,[e(o,null,{default:i(()=>[e(q)]),_:1}),nt])]),_:1}),t("div",ct,[e(o,null,{default:i(()=>[e(P)]),_:1}),dt]),t("div",it,[e(o,null,{default:i(()=>[e(C)]),_:1}),lt]),t("div",_t,[e(o,null,{default:i(()=>[e(M)]),_:1}),rt]),c.ishadow?m("",!0):(n(),d("div",ut,[e(o,null,{default:i(()=>[e(R)]),_:1}),mt])),c.ishadow?m("",!0):(n(),d("div",ht,[e(o,null,{default:i(()=>[e(A)]),_:1}),pt])),c.ishadow?(n(),d("div",vt,xt)):m("",!0)],2)}var N=f(tt,[["render",gt],["__scopeId","data-v-33ad95b8"]]);const $t={name:"AsideLeft",data(){return{cloud:cloudbase.init({env:"yui-7gel1hqtaf6fb79d"}),userData:[]}},setup(){return{a:V("a")}},created(){this.cloud.auth({persistence:"local"});const s=this.cloud.database(),r=s.command;s.collection("user").where({score:r.gt(0)}).orderBy("score","desc").limit(5).get().then(c=>{console.log(c.data),this.userData=c.data})},components:{"select-item":N}},D=s=>(k("data-v-6e283c40"),s=s(),w(),s),yt={class:"asidebox"},kt={class:"asidebox-item boxshadow"},wt=D(()=>t("h4",null,"\u9009\u9879\u5361",-1)),It={class:"asidebox-item boxshadow"},St=D(()=>t("h4",{style:{"margin-bottom":"10px"}},"\u79EF\u5206\u699C",-1)),jt={class:"hexin-user"},Nt=["src"],Dt={class:"user-text"},qt={key:0},Pt={key:0},Ct={key:1},Mt={key:0},Rt=j("\u65E0\u540D\u4FA0\u58EB");function At(s,r,c,b,p,v){const u=a("select-item");return n(),d("div",yt,[t("div",kt,[wt,e(u)]),t("div",It,[St,(n(!0),d(y,null,S(p.userData,(o,l)=>(n(),d("div",jt,[t("img",{src:"https://q1.qlogo.cn/g?b=qq&nk="+o.email+"&s=640"},null,8,Nt),t("div",Dt,[o.nickname?(n(),d("span",qt,[l<=2?(n(),d("label",Pt,"No."+h(l+1),1)):m("",!0),j(h(o.nickname),1)])):m("",!0),o.nickname?m("",!0):(n(),d("span",Ct,[l<=2?(n(),d("label",Mt,"No."+h(l+1),1)):m("",!0),Rt])),t("span",null,h(o.score?"\u603B\u79EF\u5206:"+o.score:"\u7EE7\u7EED\u52A0\u6CB9"),1)])]))),256))])])}var Bt=f($t,[["render",At],["__scopeId","data-v-6e283c40"]]);const Vt={name:"Shouye",data(){return{cloud:cloudbase.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,dramaData:[],animeData:[],gameData:[]}},computed:{onlyMain(){return this.$store.state.onlyMain}},created(){},mounted(){},methods:{loadImg(){alert(1)}},components:{"aside-right":Z,"aside-left":Bt,"select-item":N}},Lt={class:"shouye"},Ft={key:0,class:"select-item"};function Tt(s,r,c,b,p,v){const u=a("aside-left"),o=a("select-item"),l=a("router-view"),g=a("aside-right");return n(),d("div",Lt,[t("aside",null,[e(u)]),t("article",null,[v.onlyMain?(n(),d("div",Ft,[e(o,{ishadow:!0})])):m("",!0),e(l,null,{default:i(({Component:$})=>[(n(),I(L($)))]),_:1})]),t("aside",null,[e(g)])])}var Gt=f(Vt,[["render",Tt]]);export{Gt as default};
