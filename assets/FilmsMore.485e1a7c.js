import{_ as v}from"./main.a421dcc7.js";import{r as n,o as s,a as o,f as c,b as a,F as r,a5 as m,p as F,d as D,g as u,t as _,e as S}from"./vendor.893c1949.js";const I={data(){return{cloud:cloudbase.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,shouyeData:[]}},created(){this.auth=this.cloud.auth({persistence:"local"}),this.getMoreFilms()},methods:{getMoreFilms(){const e=this.cloud.database();e.command,e.collection("films").where({class:this.$route.query.fclass}).limit(20).orderBy("created","desc").get().then(i=>{this.shouyeData=i.data})},searchFilm(){this.$refs.ShuiteInput.input?this.getFilmsDataByName(this.$refs.ShuiteInput.input):this.getMoreFilms()},getFilmsDataByName(e){const i=this.cloud.database();i.command;const d=new i.RegExp({regexp:e,options:"i"});i.collection("films").where({name:d}).get().then(h=>{this.shouyeData=h.data})}},components:{}},p=e=>(F("data-v-5a13426f"),e=e(),D(),e),w={class:"films-more"},B=p(()=>a("h3",null,"\u7535\u89C6\u5267",-1)),k={class:"films-box"},M={class:"films-box-items"},N=p(()=>a("div",{class:"image-slot"},[S("\u52A0\u8F7D\u4E2D"),a("span",{class:"dot"},"...")],-1)),V={class:"text",style:{"margin-top":"5px"}},j={style:{color:"#fcc"}},q={class:"films-box-items normal"},C={class:"films-box-items mobile"};function E(e,i,d,h,l,f){const g=n("shuite-input"),y=n("el-image"),x=n("router-link"),b=n("el-tooltip");return s(),o("div",w,[B,c(g,{class:"films-search",subname:e.\u641C\u7D22,onSearch:f.searchFilm,ref:"ShuiteInput"},null,8,["subname","onSearch"]),a("div",k,[(s(!0),o(r,null,m(l.shouyeData,(t,L)=>(s(),o("div",M,[c(y,{src:t.tempFileURL,class:"elimage",lazy:""},{placeholder:u(()=>[N]),_:2},1032,["src"]),c(b,{class:"item",effect:"dark",content:t.name,placement:"top",style:{width:"125px"}},{default:u(()=>[c(x,{to:{name:"filmdetail",params:{id:t._id}}},{default:u(()=>[a("div",V,[a("span",null,_(t.name),1),a("span",j,_(t.rateValue),1)])]),_:2},1032,["to"])]),_:2},1032,["content"])]))),256)),(s(!0),o(r,null,m(6-(l.shouyeData.length%6==0?6:l.shouyeData.length%6),t=>(s(),o("div",q))),256)),(s(!0),o(r,null,m(3-(l.shouyeData.length%3==0?3:l.shouyeData.length%3),t=>(s(),o("div",C))),256))])])}var T=v(I,[["render",E],["__scopeId","data-v-5a13426f"]]);export{T as default};