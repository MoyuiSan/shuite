import{a7 as a,a8 as e,a3 as s,a1 as o,f as t,g as l,Q as d,v as n,p as i,F as c,a9 as m,J as r}from"./vendor.6d187631.js";const u={data:()=>({onmyojiRz:null}),props:["data"],created(){const a=this.$cloudbase.database();a.command,a.collection("user").where({_openid:this.data._openid}).get().then((a=>{console.log(a.data),this.onmyojiRz=a.data[0].onmyoji}))},methods:{fromNow:a=>moment(a).fromNow()},components:{}},p=m();a("data-v-ed04fe8e");const y=l("h4",null,[l("span",null,"影视"),l("i",{class:"el-icon-more"})],-1),h={class:"new-item-box"},v={class:"box-message"},b={key:0,class:"onmyoji-rz"},g=l("br",null,null,-1),w=l("br",null,null,-1),f=l("label",null,"阴阳师",-1),j={key:0},k={key:1},_={class:"message"},q={class:"message-iamge"},z={class:"message-main"},R={class:"main-m"},x={class:"main-m"};e();const N=p(((a,e,m,r,u,N)=>{const P=s("el-tooltip"),V=s("router-link");return o(),t(c,null,[y,l("div",h,[l("img",{src:"https://q1.qlogo.cn/g?b=qq&nk=1193292553@qq.com&s=640"},null,8,["src"]),l("div",v,[l("span",null,[d(n(m.data.owner)+" ",1),u.onmyojiRz&&1==u.onmyojiRz.onmyojiStus?(o(),t("div",b,[l(P,{placement:"top"},{content:p((()=>[d(" 昵称:"+n(u.onmyojiRz.nichen)+" ",1),g,d(" 区服:"+n(u.onmyojiRz.qufu)+" ",1),w,d("等级:"+n(u.onmyojiRz.level),1)])),default:p((()=>[f])),_:1})])):i("",!0)]),m.data.created===m.data.updated?(o(),t("span",j,"创建于"+n(N.fromNow(m.data.updated)),1)):i("",!0),m.data.created!==m.data.updated?(o(),t("span",k,"更新于"+n(N.fromNow(m.data.updated)),1)):i("",!0),l(V,{to:"/filmdetail/"+m.data._id},{default:p((()=>[l("div",_,[l("div",q,[l("img",{src:m.data.tempFileURL},null,8,["src"])]),l("div",z,[l("div",R,[l("label",null,n(m.data.class),1),d(n(m.data.name),1)]),l("div",x," 评分"+n(m.data.rateValue)+" 推介理由："+n(m.data.liyou),1)])])])),_:1},8,["to"])])])],64)}));u.render=N,u.__scopeId="data-v-ed04fe8e";const P={data:()=>({newsData:[],vedio:"",isPlay:!1}),created(){this.getNews();const a=this.$cloudbase.database(),e=a.command;a.collection("films").where({playlink:e.neq("")}).limit(5).orderBy("updated","desc").get().then((a=>{const e=a.data.length,s=Math.ceil(Math.random()*e);console.log(s),this.vedio=a.data[s].playlink}))},methods:{getNews(){const a=this.$cloudbase.database();a.command,a.collection("films").limit(5).orderBy("updated","desc").get().then((a=>{this.newsData=a.data,console.log(a.data,"111")}))},playVedio(){this.isPlay=!0}},components:{"news-item":u}},V=m();a("data-v-4dbe4b0a");const D={class:"news-banner boxshadow"},$=l("h4",null,"推荐影片",-1),B={key:1,class:"iframe-vedio news-vedio"},F={class:"news-item boxshadow"};e();const I=V(((a,e,d,n,m,u)=>{const p=s("news-item");return o(),t(c,null,[l("div",D,[$,m.isPlay?(o(),t("iframe",{key:0,src:"//player.bilibili.com/player.html?bvid="+m.vedio+"&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",class:"iframe-vedio"},"\r\n    ",8,["src"])):i("",!0),m.isPlay?i("",!0):(o(),t("div",B,[l("div",{class:"vedio-play boxshadow",onClick:e[1]||(e[1]=(...a)=>u.playVedio&&u.playVedio(...a))},"播放")]))]),(o(!0),t(c,null,r(m.newsData,(a=>(o(),t("div",F,[l(p,{data:a},null,8,["data"])])))),256))],64)}));P.render=I,P.__scopeId="data-v-4dbe4b0a";export default P;