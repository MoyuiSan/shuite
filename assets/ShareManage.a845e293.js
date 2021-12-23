import{c as C,s as x,r as s,o as u,a as S,f as a,g as r,b as m,j as F,h as V,F as y,p as v,d as T,e as p}from"./vendor.1807abaf.js";import k from"./ShareUpload.6c6d9593.js";import{_ as w}from"./main.2e4e7b6f.js";const z={data(){return{tableData:[],currentPage:1,cloud:C.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,currentData:{},isEdit:!1,page:1,total:0,dialogTableVisible:!1}},setup(){return{input:x("")}},created(){this.auth=this.cloud.auth({persistence:"local"}),this.getFilmsData(10);const e=this.cloud.database();e.command,e.collection("shares").count().then(t=>{console.log(t.total),this.total=t.total})},methods:{getFilmsData(e){const t=this.cloud.database();t.command,t.collection("shares").orderBy("created","desc").limit(e).skip((this.page-1)*e).get().then(n=>{this.tableData=n.data})},getFilmsDataByName(e){const t=this.cloud.database();t.command;const n=new t.RegExp({regexp:e,options:"i"});t.collection("shares").where({name:n}).get().then(c=>{this.tableData=c.data,console.log(c)})},handleSizeChange(e){console.log(`\u6BCF\u9875 ${e} \u6761`),this.getFilmsData(e)},handleCurrentChange(e){console.log(`\u5F53\u524D\u9875: ${e}`),this.page=e,this.getFilmsData(10)},handleClick(e){this.currentData=e,console.log(e,"1231312"),this.dialogTableVisible=!0},hideModel(e){console.log(e.target.className),e.target.className==="edit-model"&&(this.isEdit=!1,this.getFilmsData(10))},hideDialog(){this.dialogTableVisible=!1,this.getFilmsData(10)},formatterTime(e,t,n,c){return moment(n).format("YYYY/MM/DD")},searchFilms(){this.$refs.ShuiteInput.input?this.getFilmsDataByName(this.$refs.ShuiteInput.input):this.getFilmsData(10)}},components:{"shares-upload":k}},N=e=>(v("data-v-32d51c6c"),e=e(),T(),e),B=N(()=>m("h2",null,"\u5F71\u89C6\u7BA1\u7406",-1)),I=p("\u7F16\u8F91"),j=p("\u5220\u9664"),M={class:"pageation"};function E(e,t,n,c,l,o){const g=s("shuite-input"),i=s("el-table-column"),h=s("el-button"),_=s("el-table"),b=s("el-pagination"),f=s("shares-upload"),D=s("el-dialog");return u(),S(y,null,[B,a(g,{onSearch:o.searchFilms,ref:"ShuiteInput",class:"shares-search"},null,8,["onSearch"]),a(_,{data:l.tableData,"default-sort":{prop:"date",order:"descending"},class:"shares-table"},{default:r(()=>[a(i,{prop:"name",label:"\u540D\u5B57",sortable:""}),a(i,{prop:"class",label:"\u7C7B\u522B",sortable:""}),a(i,{prop:"created",label:"\u521B\u5EFA\u65F6\u95F4",formatter:o.formatterTime},null,8,["formatter"]),a(i,{prop:"updated",label:"\u66F4\u65B0\u65F6\u95F4",formatter:o.formatterTime},null,8,["formatter"]),a(i,{fixed:"right",label:"\u64CD\u4F5C",width:"100"},{default:r(d=>[a(h,{onClick:Y=>o.handleClick(d.row),type:"text",size:"small"},{default:r(()=>[I]),_:2},1032,["onClick"]),a(h,{type:"text",size:"small"},{default:r(()=>[j]),_:1})]),_:1})]),_:1},8,["data"]),m("div",M,[a(b,{onSizeChange:o.handleSizeChange,onCurrentChange:o.handleCurrentChange,"current-page":l.currentPage,"page-sizes":[10,100],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:l.total,style:{"margin-top":"20px"},class:"boxshadow"},null,8,["onSizeChange","onCurrentChange","current-page","total"])]),a(D,{title:"\u66F4\u65B0\u6570\u636E",modelValue:l.dialogTableVisible,"onUpdate:modelValue":t[0]||(t[0]=d=>l.dialogTableVisible=d),top:"5vh",fullscreen:""},{default:r(()=>[l.dialogTableVisible?(u(),F(f,{key:0,type:"2",filmsData:l.currentData,onHideDialog:o.hideDialog},null,8,["filmsData","onHideDialog"])):V("",!0)]),_:1},8,["modelValue"])],64)}var q=w(z,[["render",E],["__scopeId","data-v-32d51c6c"]]);export{q as default};
