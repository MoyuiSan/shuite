import"./main.96d3c66c.js";import e from"./FilmsUpload.8e820328.js";import{d as a,i as t,a7 as l,a8 as i,a3 as s,a1 as o,f as n,g as r,p as d,F as c,a9 as m,Q as h}from"./vendor.6d187631.js";const u={data:()=>({tableData:[],currentPage:1,cloud:a.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,currentData:{},isEdit:!1,page:1,total:0,dialogTableVisible:!1}),setup:()=>({input:t("")}),created(){this.auth=this.cloud.auth({persistence:"local"}),this.getFilmsData(10);const e=this.cloud.database();e.command,e.collection("films").count().then((e=>{console.log(e.total),this.total=e.total}))},methods:{getFilmsData(e){const a=this.cloud.database();a.command,a.collection("films").orderBy("created","desc").limit(e).skip((this.page-1)*e).get().then((e=>{this.tableData=e.data}))},getFilmsDataByName(e){const a=this.cloud.database();a.command;const t=new a.RegExp({regexp:e,options:"i"});a.collection("films").where({name:t}).get().then((e=>{this.tableData=e.data,console.log(e)}))},handleSizeChange(e){console.log(`每页 ${e} 条`),this.getFilmsData(e)},handleCurrentChange(e){console.log(`当前页: ${e}`),this.page=e,this.getFilmsData(10)},handleClick(e){this.currentData=e,console.log(e,"1231312"),this.dialogTableVisible=!0},hideModel(e){console.log(e.target.className),"edit-model"===e.target.className&&(this.isEdit=!1,this.getFilmsData(10))},hideDialog(){this.dialogTableVisible=!1,this.getFilmsData(10)},formatterTime:(e,a,t,l)=>moment(t).format("YYYY/MM/DD"),searchFilms(){this.$refs.ShuiteInput.input?this.getFilmsDataByName(this.$refs.ShuiteInput.input):this.getFilmsData(10)}},components:{"films-upload":e}},g=m();l("data-v-641cf1d9");const p=h("编辑"),f=h("删除"),b={class:"pageation"};i();const D=g(((e,a,t,l,i,m)=>{const h=s("shuite-input"),u=s("el-table-column"),D=s("el-button"),C=s("el-table"),F=s("el-pagination"),y=s("films-upload"),z=s("el-dialog");return o(),n(c,null,[r(h,{onSearch:m.searchFilms,ref:"ShuiteInput",class:"films-search"},null,8,["onSearch"]),r(C,{data:i.tableData,"default-sort":{prop:"date",order:"descending"},class:"films-table"},{default:g((()=>[r(u,{prop:"name",label:"名字",sortable:""}),r(u,{prop:"class",label:"类别",sortable:""}),r(u,{prop:"created",label:"创建时间",formatter:m.formatterTime},null,8,["formatter"]),r(u,{prop:"updated",label:"更新时间",formatter:m.formatterTime},null,8,["formatter"]),r(u,{fixed:"right",label:"操作",width:"100"},{default:g((e=>[r(D,{onClick:a=>m.handleClick(e.row),type:"text",size:"small"},{default:g((()=>[p])),_:2},1032,["onClick"]),r(D,{type:"text",size:"small"},{default:g((()=>[f])),_:1})])),_:1})])),_:1},8,["data"]),r("div",b,[r(F,{onSizeChange:m.handleSizeChange,onCurrentChange:m.handleCurrentChange,"current-page":i.currentPage,"page-sizes":[10,100],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:i.total,style:{"margin-top":"20px"}},null,8,["onSizeChange","onCurrentChange","current-page","total"])]),r(z,{title:"更新数据",modelValue:i.dialogTableVisible,"onUpdate:modelValue":a[1]||(a[1]=e=>i.dialogTableVisible=e),top:"5vh",fullscreen:""},{default:g((()=>[i.dialogTableVisible?(o(),n(y,{key:0,type:"2",filmsData:i.currentData,onHideDialog:m.hideDialog},null,8,["filmsData","onHideDialog"])):d("",!0)])),_:1},8,["modelValue"])],64)}));u.render=D,u.__scopeId="data-v-641cf1d9";export default u;
