import{a6 as a,a7 as s,a1 as e,$ as t,f as l,g as o,F as c,J as i,v as n,a8 as d,Q as m}from"./vendor.7cb940fd.js";const u={data:()=>({cloud:cloudbase.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,shouyeData:[]}),created(){this.auth=this.cloud.auth({persistence:"local"});const a=this.cloud.database();a.command,a.collection("films").where({class:"1"}).limit(20).orderBy("created","desc").get().then((a=>{this.shouyeData=a.data}))},components:{}},r=d();a("data-v-68eb17d5");const h={class:"films-more"},f=o("h3",null,"电视剧",-1),p={class:"films-box"},v={class:"films-box-items"},y=o("div",{class:"image-slot"},[m("加载中"),o("span",{class:"dot"},"...")],-1),b={class:"text"},g={style:{color:"#fcc"}},x={class:"films-box-items normal"},D={class:"films-box-items mobile"};s();const _=r(((a,s,d,m,u,_)=>{const k=e("el-image"),w=e("el-tooltip"),F=e("router-link");return t(),l("div",h,[f,o("div",p,[(t(!0),l(c,null,i(u.shouyeData,((a,s)=>(t(),l("div",v,[o(F,{to:{name:"filmdetail",params:{id:a._id}}},{default:r((()=>[o(k,{src:a.tempFileURL,class:"elimage",lazy:""},{placeholder:r((()=>[y])),_:2},1032,["src"]),o(w,{class:"item",effect:"dark",content:a.name,placement:"top",style:{width:"125px"}},{default:r((()=>[o("div",b,[o("span",null,n(a.name),1),o("span",g,n(a.rateValue),1)])])),_:2},1032,["content"])])),_:2},1032,["to"])])))),256)),(t(!0),l(c,null,i(6-u.shouyeData.length%6==0?6:6-u.shouyeData.length%6,(a=>(t(),l("div",x)))),256)),(t(!0),l(c,null,i(3-u.shouyeData.length%3==0?3:3-u.shouyeData.length%3,(a=>(t(),l("div",D)))),256))])])}));u.render=_,u.__scopeId="data-v-68eb17d5";export default u;