import"./index.123a157e.js";import{d as e,i as t,a6 as a,a7 as l,a1 as o,$ as s,f as r,g as n,p as i,F as d,a8 as c,Q as u}from"./vendor.a7466a64.js";const p={data:()=>({tableData:[],currentPage:1,cloud:e.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null}),setup:()=>({input:t("")}),created(){this.auth=this.cloud.auth({persistence:"local"}),this.getUserData()},methods:{handleSizeChange(e){console.log(`每页 ${e} 条`)},handleCurrentChange(e){console.log(`当前页: ${e}`)},getUserData(){const e=this.cloud.database();e.command,e.collection("user").get().then((e=>{this.tableData=e.data}))},emailAdd(){this.cloud.database().collection("user").add({email:this.input,onVerify:"1",created:Date.now(),updated:Date.now(),isEffect:"1"}).then((e=>{console.log(e)}))},formatter:(e,t,a,l)=>"onVerify"===t.property&&"1"===a?"验证中":"onVerify"===t.property&&"0"===a?"验证成功":"isEffect"===t.property&&"1"===a?"生效":"isEffect"===t.property&&"0"===a?"失效":void 0,handleClick(e){NProgress.start();const t=this.cloud.database();"0"==e.isEffect?t.collection("user").where({_id:e._id}).update({isEffect:"1"}).then((e=>{NProgress.done(),this.getUserData()})):t.collection("user").where({_id:e._id}).update({isEffect:"0"}).then((e=>{this.getUserData(),NProgress.done()}))}},components:{}},f=c();a("data-v-3fd4168a");const h={class:"user-add"},g={class:"input-email"},m=u("提交"),C=n("span",{style:{color:"#ccc"}},"失效",-1),b=u("生效"),y=u("删除"),_={class:"pageation"};l();const k=f(((e,t,a,l,c,u)=>{const p=o("el-input"),k=o("el-button"),z=o("el-table-column"),v=o("el-table"),w=o("el-pagination");return s(),r(d,null,[n("div",h,[n("form",g,[n(p,{placeholder:"请输入用户邮箱",modelValue:l.input,"onUpdate:modelValue":t[1]||(t[1]=e=>l.input=e),clearable:"",type:"email"},null,8,["modelValue"]),n(k,{"native-type":"submit",onClick:u.emailAdd},{default:f((()=>[m])),_:1},8,["onClick"])])]),n(v,{data:c.tableData,"default-sort":{prop:"date",order:"descending"},class:"films-table"},{default:f((()=>[n(z,{prop:"email",label:"邮箱",sortable:""}),n(z,{prop:"onVerify",label:"验证状态",sortable:"",formatter:u.formatter},null,8,["formatter"]),n(z,{prop:"isEffect",label:"启用状态",sortable:"",formatter:u.formatter},null,8,["formatter"]),n(z,{fixed:"right",label:"操作",width:"100"},{default:f((e=>["1"==e.row.isEffect?(s(),r(k,{key:0,onClick:t=>u.handleClick(e.row),type:"text",size:"small"},{default:f((()=>[C])),_:2},1032,["onClick"])):i("",!0),"0"==e.row.isEffect?(s(),r(k,{key:1,onClick:t=>u.handleClick(e.row),type:"text",size:"small"},{default:f((()=>[b])),_:2},1032,["onClick"])):i("",!0),n(k,{type:"text",size:"small"},{default:f((()=>[y])),_:1})])),_:1})])),_:1},8,["data"]),n("div",_,[n(w,{onSizeChange:u.handleSizeChange,onCurrentChange:u.handleCurrentChange,"current-page":c.currentPage,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400,style:{"margin-top":"20px"}},null,8,["onSizeChange","onCurrentChange","current-page"])])],64)}));p.render=k,p.__scopeId="data-v-3fd4168a";export default p;