import{_ as F}from"./main.fe0d9170.js";import{r,o,a as n,f as i,b as l,F as d,a7 as m,p as S,d as v,g as h,t as g,e as D}from"./vendor.1807abaf.js";const z={data(){return{cloud:cloudbase.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,shouyeData:[],currentPage:1,total:0,pagesize:20}},created(){this.auth=this.cloud.auth({persistence:"local"}),this.getMoreFilms(this.currentPage)},mounted(){this.getTotal()},methods:{getMoreFilms(e){const t=this.cloud.database();t.command,t.collection("films").where({class:this.$route.query.fclass}).limit(20).skip((e-1)*this.pagesize).orderBy("created","desc").get().then(c=>{this.shouyeData=c.data})},getTotal(){const e=this.cloud.database();e.command,e.collection("films").where({class:this.$route.query.fclass}).count().then(t=>{this.total=t.total,console.log(this.total)})},searchFilm(){this.$refs.ShuiteInput.input?this.getFilmsDataByName(this.$refs.ShuiteInput.input):this.getMoreFilms()},handleSizeChange(e){console.log(`\u6BCF\u9875 ${e} \u6761`)},handleCurrentChange(e){this.getMoreFilms(e),console.log(`\u5F53\u524D\u9875: ${e}`)},getFilmsDataByName(e){const t=this.cloud.database();t.command;const c=new t.RegExp({regexp:e,options:"i"});t.collection("films").where({name:c}).get().then(p=>{this.shouyeData=p.data})}},components:{}},f=e=>(S("data-v-622ae1a6"),e=e(),v(),e),w={class:"films-more boxshadow"},k=f(()=>l("h2",null,"\u7535\u89C6\u5267",-1)),I={class:"films-box"},P={class:"films-box-items"},B=f(()=>l("div",{class:"image-slot"},[D("\u52A0\u8F7D\u4E2D"),l("span",{class:"dot"},"...")],-1)),M={class:"text",style:{"margin-top":"5px"}},N={style:{color:"#fcc"}},V={class:"films-box-items normal"},q={class:"films-box-items mobile"};function T(e,t,c,p,a,u){const y=r("shuite-input"),b=r("el-image"),_=r("router-link"),x=r("el-tooltip"),C=r("el-pagination");return o(),n("div",w,[k,i(y,{class:"films-search",subname:e.\u641C\u7D22,onSearch:u.searchFilm,ref:"ShuiteInput"},null,8,["subname","onSearch"]),l("div",I,[(o(!0),n(d,null,m(a.shouyeData,(s,j)=>(o(),n("div",P,[i(_,{to:{name:"filmdetail",params:{id:s._id}}},{default:h(()=>[i(b,{src:s.tempFileURL,class:"elimage",lazy:""},{placeholder:h(()=>[B]),_:2},1032,["src"])]),_:2},1032,["to"]),i(x,{class:"item",effect:"dark",content:s.name,placement:"top",style:{width:"125px"}},{default:h(()=>[i(_,{to:{name:"filmdetail",params:{id:s._id}}},{default:h(()=>[l("div",M,[l("span",null,g(s.name),1),l("span",N,g(s.rateValue),1)])]),_:2},1032,["to"])]),_:2},1032,["content"])]))),256)),(o(!0),n(d,null,m(6-(a.shouyeData.length%6==0?6:a.shouyeData.length%6),s=>(o(),n("div",V))),256)),(o(!0),n(d,null,m(3-(a.shouyeData.length%3==0?3:a.shouyeData.length%3),s=>(o(),n("div",q))),256))]),i(C,{currentPage:a.currentPage,"onUpdate:currentPage":t[0]||(t[0]=s=>a.currentPage=s),"page-size":a.pagesize,layout:"total, prev, pager, next",total:a.total,background:"",onSizeChange:u.handleSizeChange,onCurrentChange:u.handleCurrentChange},null,8,["currentPage","page-size","total","onSizeChange","onCurrentChange"])])}var R=F(z,[["render",T],["__scopeId","data-v-622ae1a6"]]);export{R as default};
