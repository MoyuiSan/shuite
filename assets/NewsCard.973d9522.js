import{N as w}from"./NewsItem.21b33e5d.js";import{_ as y}from"./main.2342804b.js";import{r as l,o,c as a,a as m,d as i,b as r,F as _,a5 as v,p as b,g}from"./vendor.7bf13f67.js";const N={name:"NewsCard",data(){return{newsData:[],vedio:"",isPlay:!1,loading:!0}},created(){this.getNews();const e=this.$cloudbase.database(),n=e.command;e.collection("shares").where({playlink:n.neq("")}).limit(5).orderBy("updated","desc").get().then(t=>{if(t.data){const d=t.data.length,s=Math.ceil(Math.random()*d);this.vedio=t.data[s].playlink}})},mounted(){},methods:{getNews(){const e=this.$cloudbase.database();e.command,e.collection("shares").limit(5).orderBy("updated","desc").get().then(n=>{console.log(n);let t=setTimeout(()=>{this.newsData=n.data,this.loading=!1,clearTimeout(t)},200);t=null})},playVedio(){this.isPlay=!0}},components:{"news-item":w}},k=e=>(b("data-v-fdf5881e"),e=e(),g(),e),x={class:"news-banner boxshadow"},C=k(()=>m("h4",null,"\u63A8\u8350\u5F71\u7247",-1)),I=["src"],B={key:1,class:"iframe-vedio news-vedio"},V={key:0,class:"loading"},j={class:"news-item"};function D(e,n,t,d,s,c){const p=l("lottie-player-s"),u=l("shuite-loading"),h=l("news-item");return o(),a(_,null,[m("div",x,[C,s.isPlay?(o(),a("iframe",{key:0,src:"//player.bilibili.com/player.html?bvid="+s.vedio+"&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",class:"iframe-vedio"},`\r
    `,8,I)):i("",!0),s.isPlay?i("",!0):(o(),a("div",B,[r(p,{srcUrl:"https://assets7.lottiefiles.com/private_files/lf30_O7bXs2.json",style:{cursor:"pointer"},speed:.6,onClick:c.playVedio,width:"200px"},null,8,["srcUrl","speed","onClick"])]))]),s.loading?(o(),a("div",V,[r(u,{class:"boxshadow"})])):i("",!0),s.newsData?(o(!0),a(_,{key:1},v(s.newsData,f=>(o(),a("div",j,[r(h,{data:f,onGetNews:c.getNews},null,8,["data","onGetNews"])]))),256)):i("",!0)],64)}var G=y(N,[["render",D],["__scopeId","data-v-fdf5881e"]]);export{G as default};
