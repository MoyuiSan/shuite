import{a7 as a,a8 as s,a9 as e,ah as i,i as t,a1 as d,f as c,F as l,J as o,g as v,v as n,a3 as p}from"./vendor.6d187631.js";import{_ as r}from"./FilmsBox.d747c30f.js";import"./main.95043788.js";const m={data:()=>({}),components:{}},f=e();a("data-v-01cc11ac");const u=i('<div class="textbox gongao" data-v-01cc11ac><h4 data-v-01cc11ac>公告</h4><p data-v-01cc11ac>1.来自咸鱼的分享数据汇总</p><p data-v-01cc11ac>2.合作请联系本人邮箱</p></div><div class="textbox zhuiju" data-v-01cc11ac><h4 data-v-01cc11ac>追剧APP</h4><div class="app-box" data-v-01cc11ac><img class="app-item" src="https://cdn.jsdelivr.net/gh/MoyuiSan/shuiao-pic@master/20210509/腾讯视频-01.4jmfeukb1180.svg" data-v-01cc11ac><img class="app-item" src="https://cdn.jsdelivr.net/gh/MoyuiSan/shuiao-pic@master/20210509/腾讯视频-01.4jmfeukb1180.svg" data-v-01cc11ac><img class="app-item" src="https://cdn.jsdelivr.net/gh/MoyuiSan/shuiao-pic@master/20210509/腾讯视频-01.4jmfeukb1180.svg" data-v-01cc11ac><img class="app-item" src="https://cdn.jsdelivr.net/gh/MoyuiSan/shuiao-pic@master/20210509/腾讯视频-01.4jmfeukb1180.svg" data-v-01cc11ac></div></div><div class="textbox webinfo" data-v-01cc11ac><h4 data-v-01cc11ac>网站信息</h4><p data-v-01cc11ac>龟速开发中...1.0版本当前进度40%</p><p data-v-01cc11ac>有任何bug可以及时反馈哦</p></div>',3);s();const h=f(((a,s,e,i,t,d)=>u));m.render=h,m.__scopeId="data-v-01cc11ac";const b={name:"AsideLeft",data:()=>({cloud:cloudbase.init({env:"yui-7gel1hqtaf6fb79d"}),userData:[]}),setup:()=>({a:t("a")}),created(){this.cloud.auth({persistence:"local"});const a=this.cloud.database();a.command,a.collection("user").orderBy("score","desc").limit(5).get().then((a=>{console.log(a.data),this.userData=a.data}))},components:{}},g=e();a("data-v-5e68d8af");const x={class:"asidebox"},w=i('<h4 data-v-5e68d8af>选项卡</h4><div class="classbox" data-v-5e68d8af><div class="classbox-item" data-v-5e68d8af><i class="el-icon-position" data-v-5e68d8af></i><p data-v-5e68d8af>动态</p></div><div class="classbox-item" data-v-5e68d8af><i class="el-icon-position" data-v-5e68d8af></i><p data-v-5e68d8af>影视</p></div><div class="classbox-item" data-v-5e68d8af><i class="el-icon-position" data-v-5e68d8af></i><p data-v-5e68d8af>分享</p></div><div class="classbox-item" data-v-5e68d8af><i class="el-icon-position" data-v-5e68d8af></i><p data-v-5e68d8af>分享</p></div><div class="classbox-item" data-v-5e68d8af><i class="el-icon-position" data-v-5e68d8af></i><p data-v-5e68d8af>分享</p></div><div class="classbox-item" data-v-5e68d8af><i class="el-icon-position" data-v-5e68d8af></i><p data-v-5e68d8af>分享</p></div><div class="classbox-item" data-v-5e68d8af><i class="el-icon-position" data-v-5e68d8af></i><p data-v-5e68d8af>分享</p></div><div class="classbox-item" data-v-5e68d8af><i class="el-icon-position" data-v-5e68d8af></i><p data-v-5e68d8af>分享</p></div><div class="classbox-item" data-v-5e68d8af><i class="el-icon-position" data-v-5e68d8af></i><p data-v-5e68d8af>分享</p></div></div><h4 style="margin-bottom:10px;" data-v-5e68d8af>核心用户</h4>',3),y={class:"hexin-user"},j={class:"user-text"};s();const q=g(((a,s,e,i,t,p)=>(d(),c("div",x,[w,(d(!0),c(l,null,o(t.userData,(a=>(d(),c("div",y,[v("img",{src:"https://q1.qlogo.cn/g?b=qq&nk="+a.email+"&s=640"},null,8,["src"]),v("div",j,[v("span",null,n(a.nickname),1),v("span",null,n(a.score?a.score:"继续加油"),1)])])))),256))]))));b.render=q,b.__scopeId="data-v-5e68d8af";const k={name:"Shouye",data(){return{cloud:cloudbase.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,dramaData:[],animeData:[],gameData:[],scrollReveal:this.$scrollReveal()}},created(){},mounted(){new Swiper(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}}),this.scrollReveal.reveal(".reveal-top",{duration:500,delay:100,origin:"bottom",reset:!1,mobile:!1,distance:"100px",opacity:.001,easing:"ease",scale:.9})},methods:{loadImg(){alert(1)}},components:{"aside-right":m,"aside-left":b,"films-box":r}},_=e();a("data-v-c54e74d0");const D={class:"shouye"},S=i('<div class="swiper-container" data-v-c54e74d0><div class="swiper-wrapper" data-v-c54e74d0><div class="swiper-slide" data-v-c54e74d0><img src="https://7975-yui-7gel1hqtaf6fb79d-1255352246.tcb.qcloud.la/shuiao/zhuixu.webp?sign=65cbb4c7e35b3d8f8928d56250a67591&amp;t=1616137702" data-v-c54e74d0></div><div class="swiper-slide" data-v-c54e74d0><img src="https://7975-yui-7gel1hqtaf6fb79d-1255352246.tcb.qcloud.la/shuiao/blr03.jpeg?sign=463bca40b7edd70385d6aec896608e11&amp;t=1616137792" data-v-c54e74d0></div></div><div class="swiper-pagination" data-v-c54e74d0></div></div>',1),I={class:"article-item reveal-top"},M={class:"article-item reveal-top"},R={class:"article-item reveal-top"};s();const z=_(((a,s,e,i,t,l)=>{const o=p("aside-left"),n=p("films-box"),r=p("aside-right");return d(),c("div",D,[v("aside",null,[v(o)]),v("article",null,[S,v("div",I,[v(n,{title:"影视剧","film-class":"影视剧",icon:"el-icon-video-camera"})]),v("div",M,[v(n,{title:"动漫","film-class":"动漫",icon:"el-icon-magic-stick"})]),v("div",R,[v(n,{title:"游戏","film-class":"游戏",icon:"el-icon-sugar"})])]),v("aside",null,[v(r)])])}));k.render=z,k.__scopeId="data-v-c54e74d0";export default k;
