import{_ as v}from"./main.5ab63654.js";import{r as a,o as c,j as I,g as l,b as e,t as m,a as i,F as y,a7 as S,f as t,a8 as V,p as w,d as k,n as g,h,s as L,e as j,k as M}from"./vendor.1807abaf.js";import{N as E}from"./NewsItem.db788880.js";const F={data(){return{}},props:["chatdata"],components:{}},T={class:"comment-item"},z=["src"],O={class:"user-text"};function G(s,r,n,f,p,b){const u=a("router-link");return c(),I(u,{to:"/filmdetail/"+n.chatdata.filmId},{default:l(()=>[e("div",T,[e("img",{src:"https://q1.qlogo.cn/g?b=qq&nk="+n.chatdata.email+"&s=640"},null,8,z),e("div",O,[e("p",null,m(n.chatdata.filmName),1),e("p",null,m(n.chatdata.nickname)+":"+m(n.chatdata.chat),1)])])]),_:1},8,["to"])}var H=v(F,[["render",G],["__scopeId","data-v-64e876d0"]]);const J={data(){return{commentData:[]}},created(){const s=this.$cloudbase.database();s.command,s.collection("chats").where({chatFrom:"film",isOk:1}).orderBy("created","desc").limit(10).get().then(r=>{NProgress.done(),console.log(r.data),this.commentData=r.data})},components:{"comment-item":H}},K=s=>(w("data-v-ec150102"),s=s(),k(),s),Q=V('<div class="textbox gongao boxshadow" data-v-ec150102><h4 data-v-ec150102>\u516C\u544A</h4><p data-v-ec150102>1.\u6765\u81EA\u54B8\u9C7C\u7684\u5206\u4EAB\u6570\u636E\u6C47\u603B</p><p data-v-ec150102>2.\u5408\u4F5C\u8BF7\u8054\u7CFB\u672C\u4EBA\u90AE\u7BB1</p></div><div class="textbox zhuiju boxshadow" data-v-ec150102><h4 data-v-ec150102>\u8FFD\u5267APP</h4><div class="app-box" data-v-ec150102><img class="app-item" src="https://cdn.jsdelivr.net/gh/MoyuiSan/shuiao-pic@master/20210509/\u817E\u8BAF\u89C6\u9891-01.4jmfeukb1180.svg" data-v-ec150102><img class="app-item" src="https://cdn.jsdelivr.net/gh/MoyuiSan/shuiao-pic@master/20210509/\u817E\u8BAF\u89C6\u9891-01.4jmfeukb1180.svg" data-v-ec150102><img class="app-item" src="https://cdn.jsdelivr.net/gh/MoyuiSan/shuiao-pic@master/20210509/\u817E\u8BAF\u89C6\u9891-01.4jmfeukb1180.svg" data-v-ec150102><img class="app-item" src="https://cdn.jsdelivr.net/gh/MoyuiSan/shuiao-pic@master/20210509/\u817E\u8BAF\u89C6\u9891-01.4jmfeukb1180.svg" data-v-ec150102></div></div><div class="textbox webinfo boxshadow" data-v-ec150102><h4 data-v-ec150102>\u7F51\u7AD9\u4FE1\u606F</h4><p data-v-ec150102>\u9F9F\u901F\u5F00\u53D1\u4E2D...1.0\u7248\u672C\u5F53\u524D\u8FDB\u5EA640%</p><p data-v-ec150102>\u6709\u4EFB\u4F55bug\u53EF\u4EE5\u53CA\u65F6\u53CD\u9988\u54E6</p></div>',3),U={class:"textbox comment boxshadow"},W=K(()=>e("h4",null,"\u6700\u65B0\u8BC4\u8BBA",-1)),X={class:"comment-user"};function Y(s,r,n,f,p,b){const u=a("comment-item");return c(),i(y,null,[Q,e("div",U,[W,(c(!0),i(y,null,S(p.commentData,o=>(c(),i("div",X,[t(u,{chatdata:o},null,8,["chatdata"])]))),256))])],64)}var Z=v(J,[["render",Y],["__scopeId","data-v-ec150102"]]);const ee={data(){return{}},props:["ishadow"],created(){console.log(this.$router.currentRoute._value.fullPath),this.$router.currentRoute._value.fullPath.indexOf("filmscard")},components:{NewsItem:E}},_=s=>(w("data-v-05d8b052"),s=s(),k(),s),te=_(()=>e("p",null,"\u52A8\u6001",-1)),se=_(()=>e("p",null,"\u5F71\u89C6",-1)),oe=_(()=>e("p",null,"\u97F3\u4E50",-1)),ae={class:"classbox-item"},ce=_(()=>e("p",null,"\u65E5\u8BED",-1)),ne={class:"classbox-item"},le=_(()=>e("p",null,"\u77E5\u8BC6\u5E93",-1)),ie={class:"classbox-item"},de=_(()=>e("p",null,"\u804A\u5929",-1)),_e={class:"classbox-item"},re=_(()=>e("p",null,"\u535A\u5BA2",-1)),ue={key:0,class:"classbox-item"},me=_(()=>e("p",null,"\u6E38\u620F",-1)),he={key:1,class:"classbox-item"},pe=_(()=>e("p",null,"\u66F4\u65B0",-1)),ve={key:2,class:"classbox-item"},fe=_(()=>e("i",{class:"el-icon-position"},null,-1)),be=_(()=>e("p",null,"\u5176\u4ED6",-1)),ge=[fe,be];function xe(s,r,n,f,p,b){const u=a("ship"),o=a("el-icon"),d=a("router-link"),x=a("video-camera"),$=a("mic"),q=a("school"),R=a("milkTea"),P=a("chat-round"),C=a("notebook"),A=a("trophy"),B=a("bell");return c(),i("div",{class:g({classbox:!0,boxshadow:n.ishadow})},[t(d,{to:"/shouye"},{default:l(()=>[e("div",{class:g({"classbox-item":!0,"select-now":this.$router.currentRoute._value.fullPath=="/shouye"})},[t(o,null,{default:l(()=>[t(u)]),_:1}),te],2)]),_:1}),t(d,{to:"/shouye/filmscard"},{default:l(()=>[e("div",{class:g({"classbox-item":!0,"select-now":this.$router.currentRoute._value.fullPath=="/shouye/filmscard"})},[t(o,null,{default:l(()=>[t(x)]),_:1}),se],2)]),_:1}),t(d,{to:"/shouye/musicard"},{default:l(()=>[e("div",{class:g({"classbox-item":!0,"select-now":this.$router.currentRoute._value.fullPath=="/shouye/musicard"})},[t(o,null,{default:l(()=>[t($)]),_:1}),oe],2)]),_:1}),t(d,{to:"/nihongo"},{default:l(()=>[e("div",ae,[t(o,null,{default:l(()=>[t(q)]),_:1}),ce])]),_:1}),e("div",ne,[t(o,null,{default:l(()=>[t(R)]),_:1}),le]),e("div",ie,[t(o,null,{default:l(()=>[t(P)]),_:1}),de]),e("div",_e,[t(o,null,{default:l(()=>[t(C)]),_:1}),re]),n.ishadow?h("",!0):(c(),i("div",ue,[t(o,null,{default:l(()=>[t(A)]),_:1}),me])),n.ishadow?h("",!0):(c(),i("div",he,[t(o,null,{default:l(()=>[t(B)]),_:1}),pe])),n.ishadow?(c(),i("div",ve,ge)):h("",!0)],2)}var N=v(ee,[["render",xe],["__scopeId","data-v-05d8b052"]]);const $e={name:"AsideLeft",data(){return{cloud:cloudbase.init({env:"yui-7gel1hqtaf6fb79d"}),userData:[]}},setup(){return{a:L("a")}},created(){this.cloud.auth({persistence:"local"});const s=this.cloud.database(),r=s.command;s.collection("user").where({score:r.gt(0)}).orderBy("score","desc").limit(5).get().then(n=>{console.log(n.data),this.userData=n.data})},components:{"select-item":N}},D=s=>(w("data-v-04dc76c0"),s=s(),k(),s),ye={class:"asidebox boxshadow"},we=D(()=>e("h4",null,"\u9009\u9879\u5361",-1)),ke=D(()=>e("h4",{style:{"margin-bottom":"10px"}},"\u79EF\u5206\u699C",-1)),Ie={class:"hexin-user"},Se=["src"],je={class:"user-text"},Ne={key:0},De={key:0},qe={key:1},Re={key:0},Pe=j("\u65E0\u540D\u4FA0\u58EB");function Ce(s,r,n,f,p,b){const u=a("select-item");return c(),i("div",ye,[we,t(u),ke,(c(!0),i(y,null,S(p.userData,(o,d)=>(c(),i("div",Ie,[e("img",{src:"https://q1.qlogo.cn/g?b=qq&nk="+o.email+"&s=640"},null,8,Se),e("div",je,[o.nickname?(c(),i("span",Ne,[d<=2?(c(),i("label",De,"No."+m(d+1),1)):h("",!0),j(m(o.nickname),1)])):h("",!0),o.nickname?h("",!0):(c(),i("span",qe,[d<=2?(c(),i("label",Re,"No."+m(d+1),1)):h("",!0),Pe])),e("span",null,m(o.score?"\u603B\u79EF\u5206:"+o.score:"\u7EE7\u7EED\u52A0\u6CB9"),1)])]))),256))])}var Ae=v($e,[["render",Ce],["__scopeId","data-v-04dc76c0"]]);const Be={name:"Shouye",data(){return{cloud:cloudbase.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,dramaData:[],animeData:[],gameData:[],scrollReveal:this.$scrollReveal()}},created(){},mounted(){new Swiper(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}}),this.scrollReveal.reveal(".reveal-top",{duration:500,delay:100,origin:"bottom",reset:!1,mobile:!1,distance:"100px",opacity:.001,easing:"ease",scale:.9})},methods:{loadImg(){alert(1)}},components:{"aside-right":Z,"aside-left":Ae,"select-item":N}},Ve={class:"shouye"},Le={style:{"margin-top":"20px"}},Me={class:"select-item"};function Ee(s,r,n,f,p,b){const u=a("aside-left"),o=a("select-item"),d=a("router-view"),x=a("aside-right");return c(),i("div",Ve,[e("aside",null,[t(u)]),e("article",Le,[e("div",Me,[t(o,{ishadow:!0})]),t(d,null,{default:l(({Component:$})=>[(c(),I(M($)))]),_:1})]),e("aside",null,[t(x)])])}var Oe=v(Be,[["render",Ee]]);export{Oe as default};
