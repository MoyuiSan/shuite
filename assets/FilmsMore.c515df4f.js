import{a7 as e,a8 as s,a3 as a,a1 as t,f as l,g as i,F as o,J as n,v as c,a9 as m,Q as h}from"./vendor.6d187631.js";const u={data:()=>({cloud:cloudbase.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,shouyeData:[]}),created(){this.auth=this.cloud.auth({persistence:"local"}),this.getMoreFilms()},methods:{getMoreFilms(){const e=this.cloud.database();e.command,e.collection("films").where({class:this.$route.query.fclass}).limit(20).orderBy("created","desc").get().then((e=>{this.shouyeData=e.data}))},searchFilm(){this.$refs.ShuiteInput.input?this.getFilmsDataByName(this.$refs.ShuiteInput.input):this.getMoreFilms()},getFilmsDataByName(e){const s=this.cloud.database();s.command;const a=new s.RegExp({regexp:e,options:"i"});s.collection("films").where({name:a}).get().then((e=>{this.shouyeData=e.data}))}},components:{}},d=m();e("data-v-589cb872");const r={class:"films-more"},p=i("h3",null,"电视剧",-1),f={class:"films-box"},g={class:"films-box-items"},y=i("div",{class:"image-slot"},[h("加载中"),i("span",{class:"dot"},"...")],-1),b={class:"text"},v={style:{color:"#fcc"}},D={class:"films-box-items normal"},x={class:"films-box-items mobile"};s();const F=d(((e,s,m,h,u,F)=>{const _=a("shuite-input"),S=a("el-image"),w=a("el-tooltip"),I=a("router-link");return t(),l("div",r,[p,i(_,{class:"films-search",subname:e.搜索,onSearch:F.searchFilm,ref:"ShuiteInput"},null,8,["subname","onSearch"]),i("div",f,[(t(!0),l(o,null,n(u.shouyeData,((e,s)=>(t(),l("div",g,[i(I,{to:{name:"filmdetail",params:{id:e._id}}},{default:d((()=>[i(S,{src:e.tempFileURL,class:"elimage",lazy:""},{placeholder:d((()=>[y])),_:2},1032,["src"]),i(w,{class:"item",effect:"dark",content:e.name,placement:"top",style:{width:"125px"}},{default:d((()=>[i("div",b,[i("span",null,c(e.name),1),i("span",v,c(e.rateValue),1)])])),_:2},1032,["content"])])),_:2},1032,["to"])])))),256)),(t(!0),l(o,null,n(6-(u.shouyeData.length%6==0?6:u.shouyeData.length%6),(e=>(t(),l("div",D)))),256)),(t(!0),l(o,null,n(3-(u.shouyeData.length%3==0?3:u.shouyeData.length%3),(e=>(t(),l("div",x)))),256))])])}));u.render=F,u.__scopeId="data-v-589cb872";export default u;
