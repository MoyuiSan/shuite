import{N as w}from"./NewsItem.1215f265.js";import{_ as f}from"./main.22792a72.js";import{r as m,o as t,a as o,b as r,h as d,f as _,F as p,a8 as v,p as y,d as b}from"./vendor.c71fd20d.js";const g={name:"NewsCard",data(){return{newsData:[],vedio:"",isPlay:!1,loading:!0}},created(){this.getNews();const e=this.$cloudbase.database(),a=e.command;e.collection("films").where({playlink:a.neq("")}).limit(5).orderBy("updated","desc").get().then(n=>{if(n.data){const c=n.data.length,s=Math.ceil(Math.random()*c);console.log(s),this.vedio=n.data[s].playlink}})},mounted(){},methods:{getNews(){const e=this.$cloudbase.database();e.command,e.collection("films").limit(5).orderBy("updated","desc").get().then(a=>{setTimeout(()=>{this.newsData=a.data,this.loading=!1},1e3)})},playVedio(){this.isPlay=!0}},components:{"news-item":w}},N=e=>(y("data-v-49d8b172"),e=e(),b(),e),k={class:"news-banner boxshadow"},x=N(()=>r("h4",null,"\u63A8\u8350\u5F71\u7247",-1)),C=["src"],I={key:1,class:"iframe-vedio news-vedio"},V={key:0,class:"loading"},B={class:"news-item"};function D(e,a,n,c,s,i){const u=m("shuite-loading"),h=m("news-item");return t(),o(p,null,[r("div",k,[x,s.isPlay?(t(),o("iframe",{key:0,src:"//player.bilibili.com/player.html?bvid="+s.vedio+"&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",class:"iframe-vedio"},`\r
    `,8,C)):d("",!0),s.isPlay?d("",!0):(t(),o("div",I,[r("div",{class:"vedio-play boxshadow",onClick:a[0]||(a[0]=(...l)=>i.playVedio&&i.playVedio(...l))},"\u64AD\u653E")]))]),s.loading?(t(),o("div",V,[_(u,{class:"boxshadow"})])):d("",!0),s.newsData?(t(!0),o(p,{key:1},v(s.newsData,l=>(t(),o("div",B,[_(h,{data:l,onGetNews:i.getNews},null,8,["data","onGetNews"])]))),256)):d("",!0)],64)}var F=f(g,[["render",D],["__scopeId","data-v-49d8b172"]]);export{F as default};
