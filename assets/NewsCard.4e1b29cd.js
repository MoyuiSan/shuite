import{N as p}from"./NewsItem.05fe5120.js";import{_ as u}from"./main.a421dcc7.js";import{r as w,o as t,a as o,b as r,h as c,F as m,a5 as h,p as f,d as v,f as y}from"./vendor.893c1949.js";const b={name:"NewsCard",data(){return{newsData:[],vedio:"",isPlay:!1}},created(){this.getNews();const e=this.$cloudbase.database(),s=e.command;e.collection("films").where({playlink:s.neq("")}).limit(5).orderBy("updated","desc").get().then(n=>{if(n.data){const l=n.data.length,a=Math.ceil(Math.random()*l);console.log(a),this.vedio=n.data[a].playlink}})},mounted(){},methods:{getNews(){const e=this.$cloudbase.database();e.command,e.collection("films").limit(5).orderBy("updated","desc").get().then(s=>{this.newsData=s.data,console.log(s.data,"111")})},playVedio(){this.isPlay=!0}},components:{"news-item":p}},N=e=>(f("data-v-6c6fa2ab"),e=e(),v(),e),g={class:"news-banner"},k=N(()=>r("h4",null,"\u63A8\u8350\u5F71\u7247",-1)),x=["src"],C={key:1,class:"iframe-vedio news-vedio"},I={class:"news-item boxshadow"};function V(e,s,n,l,a,d){const _=w("news-item");return t(),o(m,null,[r("div",g,[k,a.isPlay?(t(),o("iframe",{key:0,src:"//player.bilibili.com/player.html?bvid="+a.vedio+"&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",class:"iframe-vedio"},`\r
    `,8,x)):c("",!0),a.isPlay?c("",!0):(t(),o("div",C,[r("div",{class:"vedio-play boxshadow",onClick:s[0]||(s[0]=(...i)=>d.playVedio&&d.playVedio(...i))},"\u64AD\u653E")]))]),a.newsData?(t(!0),o(m,{key:0},h(a.newsData,i=>(t(),o("div",I,[y(_,{data:i,onGetNews:d.getNews},null,8,["data","onGetNews"])]))),256)):c("",!0)],64)}var j=u(b,[["render",V],["__scopeId","data-v-6c6fa2ab"]]);export{j as default};