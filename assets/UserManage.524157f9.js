import"./main.e78ec603.js";import{d as e,i as a,a6 as t,a7 as l,a1 as o,$ as s,f as i,g as r,F as n,J as d,v as u,p as c,a8 as h,Q as f}from"./vendor.7cb940fd.js";const p={data:()=>({tableData:[],currentPage:1,cloud:e.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,dialogTableVisible:!1,dialogFormVisible:!1,authList:[{value:"1",label:"普通权限"},{value:"0",label:"管理员"}],authValue:"",selectUid:""}),setup:()=>({input:a("")}),created(){this.auth=this.cloud.auth({persistence:"local"});const e=this.cloud.database();e.command,e.collection("user").where({uid:"9943f58b9fbc49af9f34f2ac0239244f"}).update({uauth:"0"}).then((e=>{console.log(e)})),this.getUserData()},methods:{handleSizeChange(e){console.log(`每页 ${e} 条`)},handleCurrentChange(e){console.log(`当前页: ${e}`)},getUserData(){const e=this.cloud.database();e.command,e.collection("user").get().then((e=>{this.tableData=e.data}))},emailAdd(){this.cloud.database().collection("user").add({email:this.input,onVerify:"1",created:Date.now(),updated:Date.now(),isEffect:"1",score:"0"}).then((e=>{console.log(e)}))},formatter:(e,a,t,l)=>"uauth"===a.property&&"1"===t?"普通用户":"uauth"===a.property&&"0"===t?"核心用户\t":"isEffect"===a.property&&"1"===t?"生效":"isEffect"===a.property&&"0"===t?"失效":void 0,handleClick(e){NProgress.start();const a=this.cloud.database();"0"==e.isEffect?a.collection("user").where({_id:e._id}).update({isEffect:"1"}).then((e=>{NProgress.done(),this.getUserData()})):a.collection("user").where({_id:e._id}).update({isEffect:"0"}).then((e=>{this.getUserData(),NProgress.done()}))},modifyAuth(){this.dialogFormVisible=!1,console.log(this.selectUid,this.authValue)},handleClickAuth(e){this.dialogFormVisible=!0,this.selectUid=e.uid}},components:{}},g=h();t("data-v-37f3e26d");const m={style:{float:"left"}},b={style:{float:"right",color:"#8492a6","font-size":"13px"}},C={class:"dialog-footer"},y=f("取 消"),V=f("确 定"),k=r("span",{style:{color:"#ccc"}},"失效",-1),_=f("生效"),v=f("权限"),z=f("删除"),w={class:"pageation"};l();const x=g(((e,a,t,l,h,f)=>{const p=o("el-option"),x=o("el-select"),D=o("el-button"),E=o("el-dialog"),U=o("el-table-column"),F=o("el-table"),A=o("el-pagination");return s(),i(n,null,[r(E,{title:"权限列表",modelValue:h.dialogFormVisible,"onUpdate:modelValue":a[3]||(a[3]=e=>h.dialogFormVisible=e)},{footer:g((()=>[r("span",C,[r(D,{onClick:a[2]||(a[2]=e=>h.dialogFormVisible=!1)},{default:g((()=>[y])),_:1}),r(D,{type:"primary",onClick:f.modifyAuth},{default:g((()=>[V])),_:1},8,["onClick"])])])),default:g((()=>[r(x,{modelValue:h.authValue,"onUpdate:modelValue":a[1]||(a[1]=e=>h.authValue=e),placeholder:"请选择"},{default:g((()=>[(s(!0),i(n,null,d(h.authList,(e=>(s(),i(p,{key:e.value,label:e.label,value:e.value},{default:g((()=>[r("span",m,u(e.label),1),r("span",b,u(e.value),1)])),_:2},1032,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1},8,["modelValue"]),r(F,{data:h.tableData,"default-sort":{prop:"date",order:"descending"},class:"films-table"},{default:g((()=>[r(U,{prop:"email",label:"邮箱",sortable:""}),r(U,{prop:"uauth",label:"权限",sortable:"",formatter:f.formatter},null,8,["formatter"]),r(U,{prop:"isEffect",label:"启用状态",sortable:"",formatter:f.formatter},null,8,["formatter"]),r(U,{fixed:"right",label:"操作",width:"120"},{default:g((e=>["1"==e.row.isEffect?(s(),i(D,{key:0,onClick:a=>f.handleClick(e.row),type:"text",size:"small"},{default:g((()=>[k])),_:2},1032,["onClick"])):c("",!0),"0"==e.row.isEffect?(s(),i(D,{key:1,onClick:a=>f.handleClick(e.row),type:"text",size:"small"},{default:g((()=>[_])),_:2},1032,["onClick"])):c("",!0),r(D,{type:"text",size:"small",onClick:a=>f.handleClickAuth(e.row)},{default:g((()=>[v])),_:2},1032,["onClick"]),r(D,{type:"text",size:"small"},{default:g((()=>[z])),_:1})])),_:1})])),_:1},8,["data"]),r("div",w,[r(A,{onSizeChange:f.handleSizeChange,onCurrentChange:f.handleCurrentChange,"current-page":h.currentPage,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400,style:{"margin-top":"20px"}},null,8,["onSizeChange","onCurrentChange","current-page"])])],64)}));p.render=x,p.__scopeId="data-v-37f3e26d";export default p;
