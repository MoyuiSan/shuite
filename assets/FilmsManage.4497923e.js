import"./main.95043788.js";import e from"./FilmsUpload.29ec971a.js";import{a7 as t,a8 as a,i as l,a3 as s,a1 as i,f as o,g as n,a9 as r,Q as d,d as c,p as u,F as h}from"./vendor.6d187631.js";const m={data:()=>({}),setup:()=>({input:l("")}),methods:{searchFunc(){this.$emit("search")}},components:{}},p=r();t("data-v-02feecdf");const g={class:"shuite-input"},f=d("提交");a();const b=p(((e,t,a,l,r,d)=>{const c=s("el-input"),u=s("el-button");return i(),o("div",g,[n(c,{placeholder:"请输入内容",modelValue:l.input,"onUpdate:modelValue":t[1]||(t[1]=e=>l.input=e),clearable:"",class:"shuite-search"},null,8,["modelValue"]),n(u,{onClick:d.searchFunc,type:"small",style:{height:"40px","margin-left":"10px"}},{default:p((()=>[f])),_:1},8,["onClick"])])}));m.render=b,m.__scopeId="data-v-02feecdf";const D={data:()=>({tableData:[],currentPage:1,cloud:c.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,currentData:{},isEdit:!1,page:1,total:0,dialogTableVisible:!1}),setup:()=>({input:l("")}),created(){this.auth=this.cloud.auth({persistence:"local"}),this.getFilmsData(10);const e=this.cloud.database();e.command,e.collection("films").count().then((e=>{console.log(e.total),this.total=e.total}))},methods:{getFilmsData(e){const t=this.cloud.database();t.command,t.collection("films").orderBy("created","desc").limit(e).skip((this.page-1)*e).get().then((e=>{this.tableData=e.data}))},getFilmsDataByName(e){const t=this.cloud.database();t.command;const a=new t.RegExp({regexp:e,options:"i"});t.collection("films").where({name:a}).get().then((e=>{this.tableData=e.data,console.log(e)}))},handleSizeChange(e){console.log(`每页 ${e} 条`),this.getFilmsData(e)},handleCurrentChange(e){console.log(`当前页: ${e}`),this.page=e,this.getFilmsData(10)},handleClick(e){this.currentData=e,console.log(e,"1231312"),this.dialogTableVisible=!0},hideModel(e){console.log(e.target.className),"edit-model"===e.target.className&&(this.isEdit=!1,this.getFilmsData(10))},hideDialog(){this.dialogTableVisible=!1,this.getFilmsData(10)},formatterTime:(e,t,a,l)=>moment(a).format("YYYY/MM/DD"),searchFilms(){this.$refs.ShuiteInput.input?this.getFilmsDataByName(this.$refs.ShuiteInput.input):this.getFilmsData(10)}},components:{"films-upload":e,"shuite-input":m}},C=r();t("data-v-b33535f0");const F=d("编辑"),y=d("删除"),V={class:"pageation"};a();const v=C(((e,t,a,l,r,d)=>{const c=s("shuite-input"),m=s("el-table-column"),p=s("el-button"),g=s("el-table"),f=s("el-pagination"),b=s("films-upload"),D=s("el-dialog");return i(),o(h,null,[n(c,{onSearch:d.searchFilms,ref:"ShuiteInput"},null,8,["onSearch"]),n(g,{data:r.tableData,"default-sort":{prop:"date",order:"descending"},class:"films-table"},{default:C((()=>[n(m,{prop:"name",label:"名字",sortable:""}),n(m,{prop:"class",label:"类别",sortable:""}),n(m,{prop:"created",label:"创建时间",formatter:d.formatterTime},null,8,["formatter"]),n(m,{prop:"updated",label:"更新时间",formatter:d.formatterTime},null,8,["formatter"]),n(m,{fixed:"right",label:"操作",width:"100"},{default:C((e=>[n(p,{onClick:t=>d.handleClick(e.row),type:"text",size:"small"},{default:C((()=>[F])),_:2},1032,["onClick"]),n(p,{type:"text",size:"small"},{default:C((()=>[y])),_:1})])),_:1})])),_:1},8,["data"]),n("div",V,[n(f,{onSizeChange:d.handleSizeChange,onCurrentChange:d.handleCurrentChange,"current-page":r.currentPage,"page-sizes":[10,100],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:r.total,style:{"margin-top":"20px"}},null,8,["onSizeChange","onCurrentChange","current-page","total"])]),n(D,{title:"更新数据",modelValue:r.dialogTableVisible,"onUpdate:modelValue":t[1]||(t[1]=e=>r.dialogTableVisible=e),top:"5vh",fullscreen:""},{default:C((()=>[r.dialogTableVisible?(i(),o(b,{key:0,type:"2",filmsData:r.currentData,onHideDialog:d.hideDialog},null,8,["filmsData","onHideDialog"])):u("",!0)])),_:1},8,["modelValue"])],64)}));D.render=v,D.__scopeId="data-v-b33535f0";export default D;
