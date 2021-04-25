import"./index.6f087996.js";import t from"./FilmsUpload.c21d6276.js";import{d as e,i as a,a6 as l,a7 as s,a1 as o,$ as i,f as n,g as r,p as d,F as c,a8 as m,Q as p}from"./vendor.afe498d6.js";const h={data:()=>({tableData:[],currentPage:1,cloud:e.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,currentData:{},isEdit:!1,page:1,total:0}),setup:()=>({input:a("")}),created(){this.auth=this.cloud.auth({persistence:"local"}),this.getFilmsData(10);const t=this.cloud.database();t.command,t.collection("films").count().then((t=>{console.log(t.total),this.total=t.total}))},methods:{getFilmsData(t){const e=this.cloud.database();e.command,e.collection("films").orderBy("created","desc").limit(t).skip((this.page-1)*t).get().then((t=>{this.tableData=t.data}))},getFilmsDataByName(){const t=this.cloud.database();t.command;const e=new t.RegExp({regexp:this.input,options:"i"});t.collection("films").where({name:e}).get().then((t=>{this.tableData=t.data,console.log(t)}))},handleSizeChange(t){console.log(`每页 ${t} 条`),this.getFilmsData(t)},handleCurrentChange(t){console.log(`当前页: ${t}`),this.page=t},handleClick(t){this.currentData=t,this.isEdit=!0},hideModel(t){console.log(t.target.className),"edit-model"===t.target.className&&(this.isEdit=!1,this.getFilmsData())},formatter:(t,e,a,l)=>"class"===e.property&&"1"===a?"电视剧":"class"===e.property&&"2"===a?"动漫":"class"===e.property&&"3"===a?"游戏":"class"===e.property&&"4"===a?"其他":void 0,formatterTime:(t,e,a,l)=>moment(a).format("YYYY/MM/DD"),searchFilms(){this.input?this.getFilmsDataByName():this.getFilmsData(10)}},components:{"films-upload":t}},u=m("data-v-58123693");l("data-v-58123693");const g={style:{display:"flex"}},f=p("提交"),b=p("编辑"),C=p("删除"),y={class:"pageation"},D={class:"edit-model-box"};s();const x=u(((t,e,a,l,s,m)=>{const p=o("el-input"),h=o("el-button"),x=o("el-table-column"),v=o("el-table"),F=o("el-pagination"),k=o("films-upload");return i(),n(c,null,[r("div",g,[r(p,{placeholder:"请输入内容",modelValue:l.input,"onUpdate:modelValue":e[1]||(e[1]=t=>l.input=t),clearable:"",class:"film-search"},null,8,["modelValue"]),r(h,{onClick:m.searchFilms,type:"small",style:{height:"40px","margin-left":"10px"}},{default:u((()=>[f])),_:1},8,["onClick"])]),r(v,{data:s.tableData,"default-sort":{prop:"date",order:"descending"},class:"films-table"},{default:u((()=>[r(x,{prop:"name",label:"名字",sortable:""}),r(x,{prop:"class",label:"类别",sortable:"",formatter:m.formatter},null,8,["formatter"]),r(x,{prop:"link",label:"链接"}),r(x,{prop:"created",label:"创建时间",formatter:m.formatterTime},null,8,["formatter"]),r(x,{fixed:"right",label:"操作",width:"100"},{default:u((t=>[r(h,{onClick:e=>m.handleClick(t.row),type:"text",size:"small"},{default:u((()=>[b])),_:2},1032,["onClick"]),r(h,{type:"text",size:"small"},{default:u((()=>[C])),_:1})])),_:1})])),_:1},8,["data"]),r("div",y,[r(F,{onSizeChange:m.handleSizeChange,onCurrentChange:m.handleCurrentChange,"current-page":s.currentPage,"page-sizes":[10,100],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:s.total,style:{"margin-top":"20px"}},null,8,["onSizeChange","onCurrentChange","current-page","total"])]),s.isEdit?(i(),n("div",{key:0,class:"edit-model",onClick:e[2]||(e[2]=(...t)=>m.hideModel&&m.hideModel(...t))},[r("div",D,[r(k,{type:"2",filmsData:s.currentData},null,8,["filmsData"])])])):d("",!0)],64)}));h.render=x,h.__scopeId="data-v-58123693";export default h;
