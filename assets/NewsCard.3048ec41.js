import{_ as a}from"./NewsItem.68356172.js";import{a7 as e,a8 as s,a3 as o,a1 as t,f as l,g as d,p as i,F as n,J as c,a9 as r}from"./vendor.6d187631.js";const m={data:()=>({newsData:[],vedio:"",isPlay:!1}),created(){this.getNews();const a=this.$cloudbase.database(),e=a.command;a.collection("films").where({playlink:e.neq("")}).limit(5).orderBy("updated","desc").get().then((a=>{const e=a.data.length,s=Math.ceil(Math.random()*e);console.log(s),this.vedio=a.data[s].playlink}))},methods:{getNews(){const a=this.$cloudbase.database();a.command,a.collection("films").limit(5).orderBy("updated","desc").get().then((a=>{this.newsData=a.data,console.log(a.data,"111")}))},playVedio(){this.isPlay=!0}},components:{"news-item":a}},w=r();e("data-v-34ae404c");const h={class:"news-banner boxshadow"},p=d("h4",null,"推荐影片",-1),y={key:1,class:"iframe-vedio news-vedio"},v={class:"news-item boxshadow"};s();const b=w(((a,e,s,r,m,w)=>{const b=o("news-item");return t(),l(n,null,[d("div",h,[p,m.isPlay?(t(),l("iframe",{key:0,src:"//player.bilibili.com/player.html?bvid="+m.vedio+"&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",class:"iframe-vedio"},"\r\n    ",8,["src"])):i("",!0),m.isPlay?i("",!0):(t(),l("div",y,[d("div",{class:"vedio-play boxshadow",onClick:e[1]||(e[1]=(...a)=>w.playVedio&&w.playVedio(...a))},"播放")]))]),(t(!0),l(n,null,c(m.newsData,(a=>(t(),l("div",v,[d(b,{data:a,onGetNews:w.getNews},null,8,["data","onGetNews"])])))),256))],64)}));m.render=b,m.__scopeId="data-v-34ae404c";export default m;
