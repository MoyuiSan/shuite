import{_ as C}from"./main.79ca7377.js";import{r as i,o,a as n,f as l,b as r,F as d,a7 as p,p as v,d as D,g as h,t as m,e as z}from"./vendor.1807abaf.js";const w={data(){return{cloud:cloudbase.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,shouyeData:[],currentPage:1,total:0,pagesize:20}},created(){this.auth=this.cloud.auth({persistence:"local"}),this.getMoreShares(this.currentPage)},mounted(){this.getTotal()},methods:{getMoreShares(e){const t=this.cloud.database();t.command,t.collection("shares").where({class:this.$route.query.fclass}).limit(20).skip((e-1)*this.pagesize).orderBy("created","desc").get().then(c=>{this.shouyeData=c.data})},getTotal(){const e=this.cloud.database();e.command,e.collection("shares").where({class:this.$route.query.fclass}).count().then(t=>{this.total=t.total,console.log(this.total)})},searchShare(){this.$refs.ShuiteInput.input?this.getShareDataByName(this.$refs.ShuiteInput.input):this.getMoreShares()},handleSizeChange(e){console.log(`\u6BCF\u9875 ${e} \u6761`)},handleCurrentChange(e){this.getMoreShares(e),console.log(`\u5F53\u524D\u9875: ${e}`)},getShareDataByName(e){const t=this.cloud.database();t.command;const c=new t.RegExp({regexp:e,options:"i"});t.collection("shares").where({name:c}).get().then(_=>{this.shouyeData=_.data})}},components:{}},f=e=>(v("data-v-61cb90e6"),e=e(),D(),e),k={class:"share-more boxshadow"},I=f(()=>r("h2",null,"\u7535\u89C6\u5267",-1)),P={class:"share-box"},B={class:"share-box-items"},M=f(()=>r("div",{class:"image-slot"},[z("\u52A0\u8F7D\u4E2D"),r("span",{class:"dot"},"...")],-1)),N={class:"text",style:{"margin-top":"5px"}},V={style:{color:"#fcc"}},q={class:"share-box-items normal"},F={class:"share-box-items mobile"};function T(e,t,c,_,s,u){const S=i("shuite-input"),y=i("el-image"),g=i("router-link"),b=i("el-tooltip"),x=i("el-pagination");return o(),n("div",k,[I,l(S,{class:"share-search",subname:e.\u641C\u7D22,onSearch:u.searchShare,ref:"ShuiteInput"},null,8,["subname","onSearch"]),r("div",P,[(o(!0),n(d,null,p(s.shouyeData,(a,j)=>(o(),n("div",B,[l(g,{to:{name:"sharedetail",params:{id:a._id}}},{default:h(()=>[l(y,{src:a.tempFileURL,class:"elimage",lazy:""},{placeholder:h(()=>[M]),_:2},1032,["src"])]),_:2},1032,["to"]),l(b,{class:"item",effect:"dark",content:a.name,placement:"top",style:{width:"125px"}},{default:h(()=>[l(g,{to:{name:"sharedetail",params:{id:a._id}}},{default:h(()=>[r("div",N,[r("span",null,m(a.name),1),r("span",V,m(a.rateValue),1)])]),_:2},1032,["to"])]),_:2},1032,["content"])]))),256)),(o(!0),n(d,null,p(6-(s.shouyeData.length%6==0?6:s.shouyeData.length%6),a=>(o(),n("div",q))),256)),(o(!0),n(d,null,p(3-(s.shouyeData.length%3==0?3:s.shouyeData.length%3),a=>(o(),n("div",F))),256))]),l(x,{currentPage:s.currentPage,"onUpdate:currentPage":t[0]||(t[0]=a=>s.currentPage=a),"page-size":s.pagesize,layout:"total, prev, pager, next",total:s.total,background:"",onSizeChange:u.handleSizeChange,onCurrentChange:u.handleCurrentChange},null,8,["currentPage","page-size","total","onSizeChange","onCurrentChange"])])}var R=C(w,[["render",T],["__scopeId","data-v-61cb90e6"]]);export{R as default};
