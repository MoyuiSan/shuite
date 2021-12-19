import{_ as z,S as E}from"./main.2172689f.js";import{s as F,r as i,o as _,a as C,f as l,g as a,b as c,F as v,a7 as A,j as m,e as u,t as h,h as b,p as D,d as I}from"./vendor.1807abaf.js";const N={data(){return{tableData:[],currentPage:1,auth:null,dialogTableVisible:!1,dialogFormVisible:!1,authList:[{value:"1",label:"\u666E\u901A\u6743\u9650"},{value:"0",label:"\u7BA1\u7406\u5458"}],authValue:"",selectUid:""}},setup(){return{input:F("")}},created(){this.$auth.getAuthHeader();const t=this.$cloudbase.database();t.command,t.collection("user").where({uid:"9943f58b9fbc49af9f34f2ac0239244f"}).update({uauth:"0"}).then(o=>{console.log(o)}),this.getUserData()},methods:{handleSizeChange(t){console.log(`\u6BCF\u9875 ${t} \u6761`)},handleCurrentChange(t){console.log(`\u5F53\u524D\u9875: ${t}`)},getUserData(){const t=this.$cloudbase.database();t.command,t.collection("user").get().then(o=>{this.tableData=o.data})},formatter(t,o,n,y){if(o.property==="uauth"&&n==="1")return"\u666E\u901A\u7528\u6237";if(o.property==="uauth"&&n==="0")return"\u6838\u5FC3\u7528\u6237	";if(o.property==="isEffect"&&n==="1")return"\u751F\u6548";if(o.property==="isEffect"&&n==="0")return"\u5931\u6548"},onmyojiFormatter(t,o,n,y){return n.onmyojiStus==1?"\u5DF2\u8BA4\u8BC1":"\u7533\u8BF7\u4E2D"},noEffect(t){},modifyAuth(){this.dialogFormVisible=!1,console.log(this.selectUid,this.authValue),this.$cloudbase.callFunction({name:"shuiteApi",data:{editAuth:this.authValue,event:"EDIT_USER_AUTH"}}).then(t=>{this.getUserData(),console.log(t)}).catch(console.error)},modifyOnmyojiStus(t,o){console.log(t),this.$cloudbase.callFunction({name:"shuiteApi",data:{type:o==0?"access":"",id:t,event:"ONMYOJI_APPLY"}}).then(n=>{this.getUserData(),console.log(n),this.$message.success("\u66F4\u65B0\u6210\u529F!")}).catch(console.error)},handleClickAuth(t){this.dialogFormVisible=!0,this.selectUid=t.uid}},components:{"shuite-input":E}},p=t=>(D("data-v-6428c35d"),t=t(),I(),t),T=p(()=>c("h2",null,"\u7528\u6237\u7BA1\u7406",-1)),B={style:{float:"left"}},L={style:{float:"right",color:"#8492a6","font-size":"13px"}},O={class:"dialog-footer"},P=u("\u53D6 \u6D88"),M=u("\u786E \u5B9A"),H=p(()=>c("br",null,null,-1)),Y=p(()=>c("br",null,null,-1)),q=p(()=>c("span",{style:{color:"#ccc"}},"\u5931\u6548",-1)),J=u("\u751F\u6548"),R=u("\u6743\u9650"),G=u("\u5220\u9664"),K={class:"pageation"};function Q(t,o,n,y,s,r){const j=i("shuite-input"),k=i("el-option"),w=i("el-select"),d=i("el-button"),V=i("el-dialog"),f=i("el-table-column"),S=i("el-tooltip"),x=i("el-table"),U=i("el-pagination");return _(),C(v,null,[T,l(j),l(V,{title:"\u6743\u9650\u5217\u8868",modelValue:s.dialogFormVisible,"onUpdate:modelValue":o[2]||(o[2]=e=>s.dialogFormVisible=e)},{footer:a(()=>[c("span",O,[l(d,{onClick:o[1]||(o[1]=e=>s.dialogFormVisible=!1)},{default:a(()=>[P]),_:1}),l(d,{type:"primary",onClick:r.modifyAuth},{default:a(()=>[M]),_:1},8,["onClick"])])]),default:a(()=>[l(w,{modelValue:s.authValue,"onUpdate:modelValue":o[0]||(o[0]=e=>s.authValue=e),placeholder:"\u8BF7\u9009\u62E9"},{default:a(()=>[(_(!0),C(v,null,A(s.authList,e=>(_(),m(k,{key:e.value,label:e.label,value:e.value},{default:a(()=>[c("span",B,h(e.label),1),c("span",L,h(e.value),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),l(x,{data:s.tableData,"default-sort":{prop:"date",order:"descending"},class:"films-table"},{default:a(()=>[l(f,{prop:"email",label:"\u90AE\u7BB1",sortable:""}),l(f,{prop:"uauth",label:"\u6743\u9650",sortable:"",formatter:r.formatter},null,8,["formatter"]),l(f,{prop:"onmyoji",label:"\u9634\u9633\u5E08",sortable:""},{default:a(e=>[e.row.onmyoji?(_(),m(S,{key:0,content:"Top center",placement:"top"},{content:a(()=>[u(" \u6635\u79F0:"+h(e.row.onmyoji.nichen?e.row.onmyoji.nichen:"\u65E0"),1),H,u("\u533A\u670D:"+h(e.row.onmyoji.qufu),1),Y,u(" \u7B49\u7EA7:"+h(e.row.onmyoji.level),1)]),default:a(()=>[l(d,{onClick:g=>r.modifyOnmyojiStus(e.row._id,e.row.onmyoji.onmyojiStus)},{default:a(()=>[u(h(e.row.onmyoji.onmyojiStus==1?"\u5DF2\u8BA4\u8BC1":"\u7533\u8BF7\u4E2D"),1)]),_:2},1032,["onClick"])]),_:2},1024)):b("",!0)]),_:1}),l(f,{prop:"isEffect",label:"\u542F\u7528\u72B6\u6001",sortable:"",formatter:r.formatter},null,8,["formatter"]),l(f,{fixed:"right",label:"\u64CD\u4F5C",width:"120"},{default:a(e=>[e.row.isEffect=="1"?(_(),m(d,{key:0,onClick:g=>r.noEffect(e.row),type:"text",size:"small"},{default:a(()=>[q]),_:2},1032,["onClick"])):b("",!0),e.row.isEffect=="0"?(_(),m(d,{key:1,onClick:g=>r.noEffect(e.row),type:"text",size:"small"},{default:a(()=>[J]),_:2},1032,["onClick"])):b("",!0),l(d,{type:"text",size:"small",onClick:g=>r.handleClickAuth(e.row)},{default:a(()=>[R]),_:2},1032,["onClick"]),l(d,{type:"text",size:"small"},{default:a(()=>[G]),_:1})]),_:1})]),_:1},8,["data"]),c("div",K,[l(U,{onSizeChange:r.handleSizeChange,onCurrentChange:r.handleCurrentChange,"current-page":s.currentPage,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400,style:{"margin-top":"20px"},class:"boxshadow"},null,8,["onSizeChange","onCurrentChange","current-page"])])],64)}var Z=z(N,[["render",Q],["__scopeId","data-v-6428c35d"]]);export{Z as default};
