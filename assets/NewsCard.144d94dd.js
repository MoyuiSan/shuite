import{N as p}from"./NewsItem.aaad712f.js";import{_ as h}from"./main.8482b230.js";import{r as w,o as t,a as o,b as r,h as l,F as m,a4 as u,p as f,d as v,f as y}from"./vendor.dd298bfa.js";const b={data(){return{newsData:[],vedio:"",isPlay:!1}},created(){this.getNews();const e=this.$cloudbase.database(),s=e.command;e.collection("films").where({playlink:s.neq("")}).limit(5).orderBy("updated","desc").get().then(d=>{if(d.data){const c=d.data.length,a=Math.ceil(Math.random()*c);console.log(a),this.vedio=d.data[a].playlink}})},methods:{getNews(){const e=this.$cloudbase.database();e.command,e.collection("films").limit(5).orderBy("updated","desc").get().then(s=>{this.newsData=s.data,console.log(s.data,"111")})},playVedio(){this.isPlay=!0}},components:{"news-item":p}},g=e=>(f("data-v-a0e643c2"),e=e(),v(),e),N={class:"news-banner boxshadow"},k=g(()=>r("h4",null,"\u63A8\u8350\u5F71\u7247",-1)),x=["src"],I={key:1,class:"iframe-vedio news-vedio"},V={class:"news-item boxshadow"};function B(e,s,d,c,a,n){const _=w("news-item");return t(),o(m,null,[r("div",N,[k,a.isPlay?(t(),o("iframe",{key:0,src:"//player.bilibili.com/player.html?bvid="+a.vedio+"&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",class:"iframe-vedio"},`\r
    `,8,x)):l("",!0),a.isPlay?l("",!0):(t(),o("div",I,[r("div",{class:"vedio-play boxshadow",onClick:s[0]||(s[0]=(...i)=>n.playVedio&&n.playVedio(...i))},"\u64AD\u653E")]))]),a.newsData?(t(!0),o(m,{key:0},u(a.newsData,i=>(t(),o("div",V,[y(_,{data:i,onGetNews:n.getNews},null,8,["data","onGetNews"])]))),256)):l("",!0)],64)}var j=h(b,[["render",B],["__scopeId","data-v-a0e643c2"]]);export{j as default};