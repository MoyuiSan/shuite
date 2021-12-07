import{c as C,s as F,r as s,o as u,a as x,f as a,g as r,b as p,j as V,h as y,F as S,p as v,d as T,e as h}from"./vendor.893c1949.js";import k from"./FilmsUpload.ceb59067.js";import{_ as w}from"./main.a421dcc7.js";const z={data(){return{tableData:[],currentPage:1,cloud:C.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,currentData:{},isEdit:!1,page:1,total:0,dialogTableVisible:!1}},setup(){return{input:F("")}},created(){this.auth=this.cloud.auth({persistence:"local"}),this.getFilmsData(10);const e=this.cloud.database();e.command,e.collection("films").count().then(t=>{console.log(t.total),this.total=t.total})},methods:{getFilmsData(e){const t=this.cloud.database();t.command,t.collection("films").orderBy("created","desc").limit(e).skip((this.page-1)*e).get().then(i=>{this.tableData=i.data})},getFilmsDataByName(e){const t=this.cloud.database();t.command;const i=new t.RegExp({regexp:e,options:"i"});t.collection("films").where({name:i}).get().then(c=>{this.tableData=c.data,console.log(c)})},handleSizeChange(e){console.log(`\u6BCF\u9875 ${e} \u6761`),this.getFilmsData(e)},handleCurrentChange(e){console.log(`\u5F53\u524D\u9875: ${e}`),this.page=e,this.getFilmsData(10)},handleClick(e){this.currentData=e,console.log(e,"1231312"),this.dialogTableVisible=!0},hideModel(e){console.log(e.target.className),e.target.className==="edit-model"&&(this.isEdit=!1,this.getFilmsData(10))},hideDialog(){this.dialogTableVisible=!1,this.getFilmsData(10)},formatterTime(e,t,i,c){return moment(i).format("YYYY/MM/DD")},searchFilms(){this.$refs.ShuiteInput.input?this.getFilmsDataByName(this.$refs.ShuiteInput.input):this.getFilmsData(10)}},components:{"films-upload":k}},N=e=>(v("data-v-5e90096e"),e=e(),T(),e),B=N(()=>p("h2",null,"\u5F71\u89C6\u7BA1\u7406",-1)),I=h("\u7F16\u8F91"),j=h("\u5220\u9664"),M={class:"pageation"};function E(e,t,i,c,l,o){const g=s("shuite-input"),n=s("el-table-column"),m=s("el-button"),_=s("el-table"),f=s("el-pagination"),b=s("films-upload"),D=s("el-dialog");return u(),x(S,null,[B,a(g,{onSearch:o.searchFilms,ref:"ShuiteInput",class:"films-search"},null,8,["onSearch"]),a(_,{data:l.tableData,"default-sort":{prop:"date",order:"descending"},class:"films-table"},{default:r(()=>[a(n,{prop:"name",label:"\u540D\u5B57",sortable:""}),a(n,{prop:"class",label:"\u7C7B\u522B",sortable:""}),a(n,{prop:"created",label:"\u521B\u5EFA\u65F6\u95F4",formatter:o.formatterTime},null,8,["formatter"]),a(n,{prop:"updated",label:"\u66F4\u65B0\u65F6\u95F4",formatter:o.formatterTime},null,8,["formatter"]),a(n,{fixed:"right",label:"\u64CD\u4F5C",width:"100"},{default:r(d=>[a(m,{onClick:Y=>o.handleClick(d.row),type:"text",size:"small"},{default:r(()=>[I]),_:2},1032,["onClick"]),a(m,{type:"text",size:"small"},{default:r(()=>[j]),_:1})]),_:1})]),_:1},8,["data"]),p("div",M,[a(f,{onSizeChange:o.handleSizeChange,onCurrentChange:o.handleCurrentChange,"current-page":l.currentPage,"page-sizes":[10,100],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:l.total,style:{"margin-top":"20px"},class:"boxshadow"},null,8,["onSizeChange","onCurrentChange","current-page","total"])]),a(D,{title:"\u66F4\u65B0\u6570\u636E",modelValue:l.dialogTableVisible,"onUpdate:modelValue":t[0]||(t[0]=d=>l.dialogTableVisible=d),top:"5vh",fullscreen:""},{default:r(()=>[l.dialogTableVisible?(u(),V(b,{key:0,type:"2",filmsData:l.currentData,onHideDialog:o.hideDialog},null,8,["filmsData","onHideDialog"])):y("",!0)]),_:1},8,["modelValue"])],64)}var q=w(z,[["render",E],["__scopeId","data-v-5e90096e"]]);export{q as default};
