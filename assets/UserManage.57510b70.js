import{a as e}from"./main.584339ff.js";import{i as t,a7 as a,a8 as l,a3 as o,a1 as s,f as i,g as n,F as r,J as u,v as c,Q as d,p as h,a9 as f}from"./vendor.6d187631.js";const p={data:()=>({tableData:[],currentPage:1,auth:null,dialogTableVisible:!1,dialogFormVisible:!1,authList:[{value:"1",label:"普通权限"},{value:"0",label:"管理员"}],authValue:"",selectUid:""}),setup:()=>({input:t("")}),created(){this.$auth.getAuthHeader();const e=this.$cloudbase.database();e.command,e.collection("user").where({uid:"9943f58b9fbc49af9f34f2ac0239244f"}).update({uauth:"0"}).then((e=>{console.log(e)})),this.getUserData()},methods:{handleSizeChange(e){console.log(`每页 ${e} 条`)},handleCurrentChange(e){console.log(`当前页: ${e}`)},getUserData(){const e=this.$cloudbase.database();e.command,e.collection("user").get().then((e=>{this.tableData=e.data}))},formatter:(e,t,a,l)=>"uauth"===t.property&&"1"===a?"普通用户":"uauth"===t.property&&"0"===a?"核心用户\t":"isEffect"===t.property&&"1"===a?"生效":"isEffect"===t.property&&"0"===a?"失效":void 0,onmyojiFormatter:(e,t,a,l)=>1==a.onmyojiStus?"已认证":"申请中",noEffect(e){},modifyAuth(){this.dialogFormVisible=!1,console.log(this.selectUid,this.authValue),this.$cloudbase.callFunction({name:"shuiteApi",data:{editAuth:this.authValue,event:"EDIT_USER_AUTH"}}).then((e=>{this.getUserData(),console.log(e)})).catch(console.error)},modifyOnmyojiStus(e,t){console.log(e),this.$cloudbase.callFunction({name:"shuiteApi",data:{type:0==t?"access":"",id:e,event:"ONMYOJI_APPLY"}}).then((e=>{this.getUserData(),console.log(e),this.$ElMessage.success("更新成功!")})).catch(console.error)},handleClickAuth(e){this.dialogFormVisible=!0,this.selectUid=e.uid}},components:{"shuite-input":e}},m=f();a("data-v-10da6ea2");const g={style:{float:"left"}},b={style:{float:"right",color:"#8492a6","font-size":"13px"}},y={class:"dialog-footer"},C=d("取 消"),_=d("确 定"),V=n("br",null,null,-1),v=n("br",null,null,-1),k=n("span",{style:{color:"#ccc"}},"失效",-1),j=d("生效"),w=d("权限"),z=d("删除"),E={class:"pageation"};l();const U=m(((e,t,a,l,f,p)=>{const U=o("shuite-input"),A=o("el-option"),F=o("el-select"),S=o("el-button"),x=o("el-dialog"),D=o("el-table-column"),$=o("el-tooltip"),O=o("el-table"),P=o("el-pagination");return s(),i(r,null,[n(U),n(x,{title:"权限列表",modelValue:f.dialogFormVisible,"onUpdate:modelValue":t[3]||(t[3]=e=>f.dialogFormVisible=e)},{footer:m((()=>[n("span",y,[n(S,{onClick:t[2]||(t[2]=e=>f.dialogFormVisible=!1)},{default:m((()=>[C])),_:1}),n(S,{type:"primary",onClick:p.modifyAuth},{default:m((()=>[_])),_:1},8,["onClick"])])])),default:m((()=>[n(F,{modelValue:f.authValue,"onUpdate:modelValue":t[1]||(t[1]=e=>f.authValue=e),placeholder:"请选择"},{default:m((()=>[(s(!0),i(r,null,u(f.authList,(e=>(s(),i(A,{key:e.value,label:e.label,value:e.value},{default:m((()=>[n("span",g,c(e.label),1),n("span",b,c(e.value),1)])),_:2},1032,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1},8,["modelValue"]),n(O,{data:f.tableData,"default-sort":{prop:"date",order:"descending"},class:"films-table"},{default:m((()=>[n(D,{prop:"email",label:"邮箱",sortable:""}),n(D,{prop:"uauth",label:"权限",sortable:"",formatter:p.formatter},null,8,["formatter"]),n(D,{prop:"onmyoji",label:"阴阳师",sortable:""},{default:m((e=>[n($,{content:"Top center",placement:"top"},{content:m((()=>[d(" 昵称:"+c(e.row.onmyoji.nichen),1),V,d("区服:"+c(e.row.onmyoji.qufu),1),v,d(" 等级:"+c(e.row.onmyoji.level),1)])),default:m((()=>[n(S,{onClick:t=>p.modifyOnmyojiStus(e.row._id,e.row.onmyoji.onmyojiStus)},{default:m((()=>[d(c(1==e.row.onmyoji.onmyojiStus?"已认证":"申请中"),1)])),_:2},1032,["onClick"])])),_:2},1024)])),_:1}),n(D,{prop:"isEffect",label:"启用状态",sortable:"",formatter:p.formatter},null,8,["formatter"]),n(D,{fixed:"right",label:"操作",width:"120"},{default:m((e=>["1"==e.row.isEffect?(s(),i(S,{key:0,onClick:t=>p.noEffect(e.row),type:"text",size:"small"},{default:m((()=>[k])),_:2},1032,["onClick"])):h("",!0),"0"==e.row.isEffect?(s(),i(S,{key:1,onClick:t=>p.noEffect(e.row),type:"text",size:"small"},{default:m((()=>[j])),_:2},1032,["onClick"])):h("",!0),n(S,{type:"text",size:"small",onClick:t=>p.handleClickAuth(e.row)},{default:m((()=>[w])),_:2},1032,["onClick"]),n(S,{type:"text",size:"small"},{default:m((()=>[z])),_:1})])),_:1})])),_:1},8,["data"]),n("div",E,[n(P,{onSizeChange:p.handleSizeChange,onCurrentChange:p.handleCurrentChange,"current-page":f.currentPage,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400,style:{"margin-top":"20px"}},null,8,["onSizeChange","onCurrentChange","current-page"])])],64)}));p.render=U,p.__scopeId="data-v-10da6ea2";export default p;
