import{_ as v}from"./main.37982aba.js";import{r as o,o as n,j as I,g as i,b as e,t as m,a as l,F as y,a7 as S,f as t,a8 as V,p as w,d as k,n as g,h,s as L,e as j,k as M}from"./vendor.1807abaf.js";import{N as E}from"./NewsItem.83f8bc43.js";const F={data(){return{}},props:["chatdata"],components:{}},T={class:"comment-item"},z=["src"],O={class:"user-text"};function G(s,r,c,f,p,b){const u=o("router-link");return n(),I(u,{to:"/share/detail/"+c.chatdata.filmId},{default:i(()=>[e("div",T,[e("img",{src:"https://q1.qlogo.cn/g?b=qq&nk="+c.chatdata.email+"&s=640"},null,8,z),e("div",O,[e("p",null,m(c.chatdata.filmName),1),e("p",null,m(c.chatdata.nickname)+":"+m(c.chatdata.chat),1)])])]),_:1},8,["to"])}var H=v(F,[["render",G],["__scopeId","data-v-f68fe328"]]);const J={data(){return{commentData:[]}},created(){const s=this.$cloudbase.database();s.command,s.collection("chats").where({chatFrom:"film",isOk:1}).orderBy("created","desc").limit(10).get().then(r=>{NProgress.done(),console.log(r.data),this.commentData=r.data})},components:{"comment-item":H}},K=s=>(w("data-v-2a0eefd8"),s=s(),k(),s),Q=V('<div class="textbox gongao boxshadow" data-v-2a0eefd8><h4 data-v-2a0eefd8>\u516C\u544A</h4><p data-v-2a0eefd8>1.\u6765\u81EA\u54B8\u9C7C\u7684\u5206\u4EAB\u6570\u636E\u6C47\u603B</p><p data-v-2a0eefd8>2.\u5408\u4F5C\u8BF7\u8054\u7CFB\u672C\u4EBA\u90AE\u7BB1</p></div><div class="textbox zhuiju boxshadow" data-v-2a0eefd8><h4 data-v-2a0eefd8>\u8FFD\u5267APP</h4><div class="app-box" data-v-2a0eefd8><img class="app-item" src="https://cdn.jsdelivr.net/gh/MoyuiSan/shuiao-pic@master/20210509/\u817E\u8BAF\u89C6\u9891-01.4jmfeukb1180.svg" data-v-2a0eefd8><img class="app-item" src="https://cdn.jsdelivr.net/gh/MoyuiSan/shuiao-pic@master/20210509/\u817E\u8BAF\u89C6\u9891-01.4jmfeukb1180.svg" data-v-2a0eefd8><img class="app-item" src="https://cdn.jsdelivr.net/gh/MoyuiSan/shuiao-pic@master/20210509/\u817E\u8BAF\u89C6\u9891-01.4jmfeukb1180.svg" data-v-2a0eefd8><img class="app-item" src="https://cdn.jsdelivr.net/gh/MoyuiSan/shuiao-pic@master/20210509/\u817E\u8BAF\u89C6\u9891-01.4jmfeukb1180.svg" data-v-2a0eefd8></div></div><div class="textbox webinfo boxshadow" data-v-2a0eefd8><h4 data-v-2a0eefd8>\u7F51\u7AD9\u4FE1\u606F</h4><p data-v-2a0eefd8>\u9F9F\u901F\u5F00\u53D1\u4E2D...1.0\u7248\u672C\u5F53\u524D\u8FDB\u5EA640%</p><p data-v-2a0eefd8>\u6709\u4EFB\u4F55bug\u53EF\u4EE5\u53CA\u65F6\u53CD\u9988\u54E6</p></div>',3),U={class:"textbox comment boxshadow"},W=K(()=>e("h4",null,"\u6700\u65B0\u8BC4\u8BBA",-1)),X={class:"comment-user"};function Y(s,r,c,f,p,b){const u=o("comment-item");return n(),l(y,null,[Q,e("div",U,[W,(n(!0),l(y,null,S(p.commentData,a=>(n(),l("div",X,[t(u,{chatdata:a},null,8,["chatdata"])]))),256))])],64)}var Z=v(J,[["render",Y],["__scopeId","data-v-2a0eefd8"]]);const ee={data(){return{}},props:["ishadow"],created(){console.log(this.$router.currentRoute._value.fullPath),this.$router.currentRoute._value.fullPath.indexOf("filmscard")},components:{NewsItem:E}},_=s=>(w("data-v-7afd355f"),s=s(),k(),s),te=_(()=>e("p",null,"\u52A8\u6001",-1)),se=_(()=>e("p",null,"\u5206\u4EAB",-1)),ae=_(()=>e("p",null,"\u97F3\u4E50",-1)),oe={class:"classbox-item"},ne=_(()=>e("p",null,"\u65E5\u8BED",-1)),ce={class:"classbox-item"},ie=_(()=>e("p",null,"\u77E5\u8BC6\u5E93",-1)),le={class:"classbox-item"},de=_(()=>e("p",null,"\u804A\u5929",-1)),_e={class:"classbox-item"},re=_(()=>e("p",null,"\u535A\u5BA2",-1)),ue={key:0,class:"classbox-item"},me=_(()=>e("p",null,"\u6E38\u620F",-1)),he={key:1,class:"classbox-item"},pe=_(()=>e("p",null,"\u66F4\u65B0",-1)),ve={key:2,class:"classbox-item"},fe=_(()=>e("i",{class:"el-icon-position"},null,-1)),be=_(()=>e("p",null,"\u5176\u4ED6",-1)),ge=[fe,be];function xe(s,r,c,f,p,b){const u=o("ship"),a=o("el-icon"),d=o("router-link"),x=o("video-camera"),$=o("mic"),q=o("school"),R=o("milkTea"),P=o("chat-round"),C=o("notebook"),A=o("trophy"),B=o("bell");return n(),l("div",{class:g({classbox:!0,boxshadow:c.ishadow})},[t(d,{to:"/"},{default:i(()=>[e("div",{class:g({"classbox-item":!0,"select-now":this.$router.currentRoute._value.fullPath=="/shouye"})},[t(a,null,{default:i(()=>[t(u)]),_:1}),te],2)]),_:1}),t(d,{to:"/share"},{default:i(()=>[e("div",{class:g({"classbox-item":!0,"select-now":this.$router.currentRoute._value.fullPath=="/shouye/filmscard"})},[t(a,null,{default:i(()=>[t(x)]),_:1}),se],2)]),_:1}),t(d,{to:"/music"},{default:i(()=>[e("div",{class:g({"classbox-item":!0,"select-now":this.$router.currentRoute._value.fullPath=="/shouye/musicard"})},[t(a,null,{default:i(()=>[t($)]),_:1}),ae],2)]),_:1}),t(d,{to:"/nihongo"},{default:i(()=>[e("div",oe,[t(a,null,{default:i(()=>[t(q)]),_:1}),ne])]),_:1}),e("div",ce,[t(a,null,{default:i(()=>[t(R)]),_:1}),ie]),e("div",le,[t(a,null,{default:i(()=>[t(P)]),_:1}),de]),e("div",_e,[t(a,null,{default:i(()=>[t(C)]),_:1}),re]),c.ishadow?h("",!0):(n(),l("div",ue,[t(a,null,{default:i(()=>[t(A)]),_:1}),me])),c.ishadow?h("",!0):(n(),l("div",he,[t(a,null,{default:i(()=>[t(B)]),_:1}),pe])),c.ishadow?(n(),l("div",ve,ge)):h("",!0)],2)}var N=v(ee,[["render",xe],["__scopeId","data-v-7afd355f"]]);const $e={name:"AsideLeft",data(){return{cloud:cloudbase.init({env:"yui-7gel1hqtaf6fb79d"}),userData:[]}},setup(){return{a:L("a")}},created(){this.cloud.auth({persistence:"local"});const s=this.cloud.database(),r=s.command;s.collection("user").where({score:r.gt(0)}).orderBy("score","desc").limit(5).get().then(c=>{console.log(c.data),this.userData=c.data})},components:{"select-item":N}},D=s=>(w("data-v-c35c5e8a"),s=s(),k(),s),ye={class:"asidebox"},we={class:"asidebox-item boxshadow"},ke=D(()=>e("h4",null,"\u9009\u9879\u5361",-1)),Ie={class:"asidebox-item boxshadow"},Se=D(()=>e("h4",{style:{"margin-bottom":"10px"}},"\u79EF\u5206\u699C",-1)),je={class:"hexin-user"},Ne=["src"],De={class:"user-text"},qe={key:0},Re={key:0},Pe={key:1},Ce={key:0},Ae=j("\u65E0\u540D\u4FA0\u58EB");function Be(s,r,c,f,p,b){const u=o("select-item");return n(),l("div",ye,[e("div",we,[ke,t(u)]),e("div",Ie,[Se,(n(!0),l(y,null,S(p.userData,(a,d)=>(n(),l("div",je,[e("img",{src:"https://q1.qlogo.cn/g?b=qq&nk="+a.email+"&s=640"},null,8,Ne),e("div",De,[a.nickname?(n(),l("span",qe,[d<=2?(n(),l("label",Re,"No."+m(d+1),1)):h("",!0),j(m(a.nickname),1)])):h("",!0),a.nickname?h("",!0):(n(),l("span",Pe,[d<=2?(n(),l("label",Ce,"No."+m(d+1),1)):h("",!0),Ae])),e("span",null,m(a.score?"\u603B\u79EF\u5206:"+a.score:"\u7EE7\u7EED\u52A0\u6CB9"),1)])]))),256))])])}var Ve=v($e,[["render",Be],["__scopeId","data-v-c35c5e8a"]]);const Le={name:"Shouye",data(){return{cloud:cloudbase.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,dramaData:[],animeData:[],gameData:[],scrollReveal:this.$scrollReveal()}},created(){},mounted(){new Swiper(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}}),this.scrollReveal.reveal(".reveal-top",{duration:500,delay:100,origin:"bottom",reset:!1,mobile:!1,distance:"100px",opacity:.001,easing:"ease",scale:.9})},methods:{loadImg(){alert(1)}},components:{"aside-right":Z,"aside-left":Ve,"select-item":N}},Me={class:"shouye"},Ee={class:"select-item"};function Fe(s,r,c,f,p,b){const u=o("aside-left"),a=o("select-item"),d=o("router-view"),x=o("aside-right");return n(),l("div",Me,[e("aside",null,[t(u)]),e("article",null,[e("div",Ee,[t(a,{ishadow:!0})]),t(d,null,{default:i(({Component:$})=>[(n(),I(M($)))]),_:1})]),e("aside",null,[t(x)])])}var Ge=v(Le,[["render",Fe]]);export{Ge as default};
