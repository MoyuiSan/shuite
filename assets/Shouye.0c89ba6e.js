import{a7 as a,a8 as s,a9 as e,ah as t,a3 as i,a1 as d,f as o,g as l,p as c,i as n,F as r,J as p,v}from"./vendor.6d187631.js";import{_ as u}from"./NewsItem.150f6207.js";const m={data:()=>({}),components:{}},b=e();a("data-v-de99d46a");const h=t('<div class="textbox gongao boxshadow" data-v-de99d46a><h4 data-v-de99d46a>公告</h4><p data-v-de99d46a>1.来自咸鱼的分享数据汇总</p><p data-v-de99d46a>2.合作请联系本人邮箱</p></div><div class="textbox zhuiju boxshadow" data-v-de99d46a><h4 data-v-de99d46a>追剧APP</h4><div class="app-box" data-v-de99d46a><img class="app-item" src="https://cdn.jsdelivr.net/gh/MoyuiSan/shuiao-pic@master/20210509/腾讯视频-01.4jmfeukb1180.svg" data-v-de99d46a><img class="app-item" src="https://cdn.jsdelivr.net/gh/MoyuiSan/shuiao-pic@master/20210509/腾讯视频-01.4jmfeukb1180.svg" data-v-de99d46a><img class="app-item" src="https://cdn.jsdelivr.net/gh/MoyuiSan/shuiao-pic@master/20210509/腾讯视频-01.4jmfeukb1180.svg" data-v-de99d46a><img class="app-item" src="https://cdn.jsdelivr.net/gh/MoyuiSan/shuiao-pic@master/20210509/腾讯视频-01.4jmfeukb1180.svg" data-v-de99d46a></div></div><div class="textbox webinfo boxshadow" data-v-de99d46a><h4 data-v-de99d46a>网站信息</h4><p data-v-de99d46a>龟速开发中...1.0版本当前进度40%</p><p data-v-de99d46a>有任何bug可以及时反馈哦</p></div>',3);s();const f=b(((a,s,e,t,i,d)=>h));m.render=f,m.__scopeId="data-v-de99d46a";const g={data:()=>({}),props:["ishadow"],components:{NewsItem:u}},x=e();a("data-v-ef0011b6");const w=l("div",{class:"classbox-item"},[l("i",{class:"el-icon-position"}),l("p",null,"动态")],-1),y=l("div",{class:"classbox-item"},[l("i",{class:"el-icon-film"}),l("p",null,"影视")],-1),j=l("div",{class:"classbox-item"},[l("i",{class:"el-icon-headset"}),l("p",null,"音乐")],-1),k=t('<div class="classbox-item" data-v-ef0011b6><i class="el-icon-position" data-v-ef0011b6></i><p data-v-ef0011b6>分享</p></div><div class="classbox-item" data-v-ef0011b6><i class="el-icon-position" data-v-ef0011b6></i><p data-v-ef0011b6>分享</p></div><div class="classbox-item" data-v-ef0011b6><i class="el-icon-position" data-v-ef0011b6></i><p data-v-ef0011b6>分享</p></div><div class="classbox-item" data-v-ef0011b6><i class="el-icon-position" data-v-ef0011b6></i><p data-v-ef0011b6>分享</p></div>',4),_={key:0,class:"classbox-item"},q=l("i",{class:"el-icon-position"},null,-1),D=l("p",null,"分享",-1),I={key:1,class:"classbox-item"},S=l("i",{class:"el-icon-position"},null,-1),M=l("p",null,"分享",-1),R={key:2,class:"classbox-item"},A=l("i",{class:"el-icon-position"},null,-1),E=l("p",null,"其他",-1);s();const N=x(((a,s,e,t,n,r)=>{const p=i("router-link");return d(),o("div",{class:{classbox:!0,boxshadow:e.ishadow}},[l(p,{to:"/shouye"},{default:x((()=>[w])),_:1}),l(p,{to:"/shouye/filmscard"},{default:x((()=>[y])),_:1}),l(p,{to:"/shouye/musicard"},{default:x((()=>[j])),_:1}),k,e.ishadow?c("",!0):(d(),o("div",_,[q,D])),e.ishadow?c("",!0):(d(),o("div",I,[S,M])),e.ishadow?(d(),o("div",R,[A,E])):c("",!0)],2)}));g.render=N,g.__scopeId="data-v-ef0011b6";const P={name:"AsideLeft",data:()=>({cloud:cloudbase.init({env:"yui-7gel1hqtaf6fb79d"}),userData:[]}),setup:()=>({a:n("a")}),created(){this.cloud.auth({persistence:"local"});const a=this.cloud.database();a.command,a.collection("user").orderBy("score","desc").limit(5).get().then((a=>{console.log(a.data),this.userData=a.data}))},components:{"select-item":g}},z=e();a("data-v-a1db36ce");const B={class:"asidebox boxshadow"},F=l("h4",null,"选项卡",-1),J=l("h4",{style:{"margin-bottom":"10px"}},"贡献者",-1),L={class:"hexin-user"},$={class:"user-text"};s();const C=z(((a,s,e,t,c,n)=>{const u=i("select-item");return d(),o("div",B,[F,l(u),J,(d(!0),o(r,null,p(c.userData,(a=>(d(),o("div",L,[l("img",{src:"https://q1.qlogo.cn/g?b=qq&nk="+a.email+"&s=640"},null,8,["src"]),l("div",$,[l("span",null,v(a.nickname),1),l("span",null,v(a.score?a.score:"继续加油"),1)])])))),256))])}));P.render=C,P.__scopeId="data-v-a1db36ce";const G={name:"Shouye",data(){return{cloud:cloudbase.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,dramaData:[],animeData:[],gameData:[],scrollReveal:this.$scrollReveal()}},created(){},mounted(){new Swiper(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}}),this.scrollReveal.reveal(".reveal-top",{duration:500,delay:100,origin:"bottom",reset:!1,mobile:!1,distance:"100px",opacity:.001,easing:"ease",scale:.9})},methods:{loadImg(){alert(1)}},components:{"aside-right":m,"aside-left":P,"select-item":g}},H={class:"shouye"},K={style:{"margin-top":"20px"}},O={class:"select-item"};G.render=function(a,s,e,t,c,n){const r=i("aside-left"),p=i("select-item"),v=i("router-view"),u=i("aside-right");return d(),o("div",H,[l("aside",null,[l(r)]),l("article",K,[l("div",O,[l(p,{ishadow:!0})]),l(v)]),l("aside",null,[l(u)])])};export default G;
