import{_ as v}from"./main.a31aa49f.js";import{r as n,o as s,a,f as c,b as o,F as r,a5 as m,p as F,d as D,g as u,t as _,e as S}from"./vendor.aac64fcf.js";const I={data(){return{cloud:cloudbase.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,shouyeData:[]}},created(){this.auth=this.cloud.auth({persistence:"local"}),this.getMoreFilms()},methods:{getMoreFilms(){const e=this.cloud.database();e.command,e.collection("films").where({class:this.$route.query.fclass}).limit(20).orderBy("created","desc").get().then(i=>{this.shouyeData=i.data})},searchFilm(){this.$refs.ShuiteInput.input?this.getFilmsDataByName(this.$refs.ShuiteInput.input):this.getMoreFilms()},getFilmsDataByName(e){const i=this.cloud.database();i.command;const h=new i.RegExp({regexp:e,options:"i"});i.collection("films").where({name:h}).get().then(d=>{this.shouyeData=d.data})}},components:{}},p=e=>(F("data-v-589cb872"),e=e(),D(),e),w={class:"films-more"},B=p(()=>o("h3",null,"\u7535\u89C6\u5267",-1)),k={class:"films-box"},M={class:"films-box-items"},N=p(()=>o("div",{class:"image-slot"},[S("\u52A0\u8F7D\u4E2D"),o("span",{class:"dot"},"...")],-1)),V={class:"text"},j={style:{color:"#fcc"}},q={class:"films-box-items normal"},C={class:"films-box-items mobile"};function E(e,i,h,d,l,f){const g=n("shuite-input"),y=n("el-image"),b=n("el-tooltip"),x=n("router-link");return s(),a("div",w,[B,c(g,{class:"films-search",subname:e.\u641C\u7D22,onSearch:f.searchFilm,ref:"ShuiteInput"},null,8,["subname","onSearch"]),o("div",k,[(s(!0),a(r,null,m(l.shouyeData,(t,L)=>(s(),a("div",M,[c(x,{to:{name:"filmdetail",params:{id:t._id}}},{default:u(()=>[c(y,{src:t.tempFileURL,class:"elimage",lazy:""},{placeholder:u(()=>[N]),_:2},1032,["src"]),c(b,{class:"item",effect:"dark",content:t.name,placement:"top",style:{width:"125px"}},{default:u(()=>[o("div",V,[o("span",null,_(t.name),1),o("span",j,_(t.rateValue),1)])]),_:2},1032,["content"])]),_:2},1032,["to"])]))),256)),(s(!0),a(r,null,m(6-(l.shouyeData.length%6==0?6:l.shouyeData.length%6),t=>(s(),a("div",q))),256)),(s(!0),a(r,null,m(3-(l.shouyeData.length%3==0?3:l.shouyeData.length%3),t=>(s(),a("div",C))),256))])])}var T=v(I,[["render",E],["__scopeId","data-v-589cb872"]]);export{T as default};
