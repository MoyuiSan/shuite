import{_ as z,S as E}from"./main.6a54a368.js";import{s as F,r as i,o as f,a as y,f as a,g as l,b as d,F as C,a5 as A,e as u,t as _,j as p,h as v,p as D,d as I}from"./vendor.3249e4ba.js";const N={data(){return{tableData:[],currentPage:1,auth:null,dialogTableVisible:!1,dialogFormVisible:!1,authList:[{value:"1",label:"\u666E\u901A\u6743\u9650"},{value:"0",label:"\u7BA1\u7406\u5458"}],authValue:"",selectUid:""}},setup(){return{input:F("")}},created(){this.$auth.getAuthHeader();const e=this.$cloudbase.database();e.command,e.collection("user").where({uid:"9943f58b9fbc49af9f34f2ac0239244f"}).update({uauth:"0"}).then(o=>{console.log(o)}),this.getUserData()},methods:{handleSizeChange(e){console.log(`\u6BCF\u9875 ${e} \u6761`)},handleCurrentChange(e){console.log(`\u5F53\u524D\u9875: ${e}`)},getUserData(){const e=this.$cloudbase.database();e.command,e.collection("user").get().then(o=>{this.tableData=o.data})},formatter(e,o,n,b){if(o.property==="uauth"&&n==="1")return"\u666E\u901A\u7528\u6237";if(o.property==="uauth"&&n==="0")return"\u6838\u5FC3\u7528\u6237	";if(o.property==="isEffect"&&n==="1")return"\u751F\u6548";if(o.property==="isEffect"&&n==="0")return"\u5931\u6548"},onmyojiFormatter(e,o,n,b){return n.onmyojiStus==1?"\u5DF2\u8BA4\u8BC1":"\u7533\u8BF7\u4E2D"},noEffect(e){},modifyAuth(){this.dialogFormVisible=!1,console.log(this.selectUid,this.authValue),this.$cloudbase.callFunction({name:"shuiteApi",data:{editAuth:this.authValue,event:"EDIT_USER_AUTH"}}).then(e=>{this.getUserData(),console.log(e)}).catch(console.error)},modifyOnmyojiStus(e,o){console.log(e),this.$cloudbase.callFunction({name:"shuiteApi",data:{type:o==0?"access":"",id:e,event:"ONMYOJI_APPLY"}}).then(n=>{this.getUserData(),console.log(n),this.$message.success("\u66F4\u65B0\u6210\u529F!")}).catch(console.error)},handleClickAuth(e){this.dialogFormVisible=!0,this.selectUid=e.uid}},components:{"shuite-input":E}},g=e=>(D("data-v-02f7842c"),e=e(),I(),e),T={style:{float:"left"}},B={style:{float:"right",color:"#8492a6","font-size":"13px"}},L={class:"dialog-footer"},O=u("\u53D6 \u6D88"),P=u("\u786E \u5B9A"),M=g(()=>d("br",null,null,-1)),H=g(()=>d("br",null,null,-1)),Y=g(()=>d("span",{style:{color:"#ccc"}},"\u5931\u6548",-1)),q=u("\u751F\u6548"),J=u("\u6743\u9650"),R=u("\u5220\u9664"),G={class:"pageation"};function K(e,o,n,b,s,r){const k=i("shuite-input"),V=i("el-option"),j=i("el-select"),c=i("el-button"),S=i("el-dialog"),h=i("el-table-column"),w=i("el-tooltip"),x=i("el-table"),U=i("el-pagination");return f(),y(C,null,[a(k),a(S,{title:"\u6743\u9650\u5217\u8868",modelValue:s.dialogFormVisible,"onUpdate:modelValue":o[2]||(o[2]=t=>s.dialogFormVisible=t)},{footer:l(()=>[d("span",L,[a(c,{onClick:o[1]||(o[1]=t=>s.dialogFormVisible=!1)},{default:l(()=>[O]),_:1}),a(c,{type:"primary",onClick:r.modifyAuth},{default:l(()=>[P]),_:1},8,["onClick"])])]),default:l(()=>[a(j,{modelValue:s.authValue,"onUpdate:modelValue":o[0]||(o[0]=t=>s.authValue=t),placeholder:"\u8BF7\u9009\u62E9"},{default:l(()=>[(f(!0),y(C,null,A(s.authList,t=>(f(),p(V,{key:t.value,label:t.label,value:t.value},{default:l(()=>[d("span",T,_(t.label),1),d("span",B,_(t.value),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),a(x,{data:s.tableData,"default-sort":{prop:"date",order:"descending"},class:"films-table"},{default:l(()=>[a(h,{prop:"email",label:"\u90AE\u7BB1",sortable:""}),a(h,{prop:"uauth",label:"\u6743\u9650",sortable:"",formatter:r.formatter},null,8,["formatter"]),a(h,{prop:"onmyoji",label:"\u9634\u9633\u5E08",sortable:""},{default:l(t=>[a(w,{content:"Top center",placement:"top"},{content:l(()=>[u(" \u6635\u79F0:"+_(t.row.onmyoji.nichen),1),M,u("\u533A\u670D:"+_(t.row.onmyoji.qufu),1),H,u(" \u7B49\u7EA7:"+_(t.row.onmyoji.level),1)]),default:l(()=>[a(c,{onClick:m=>r.modifyOnmyojiStus(t.row._id,t.row.onmyoji.onmyojiStus)},{default:l(()=>[u(_(t.row.onmyoji.onmyojiStus==1?"\u5DF2\u8BA4\u8BC1":"\u7533\u8BF7\u4E2D"),1)]),_:2},1032,["onClick"])]),_:2},1024)]),_:1}),a(h,{prop:"isEffect",label:"\u542F\u7528\u72B6\u6001",sortable:"",formatter:r.formatter},null,8,["formatter"]),a(h,{fixed:"right",label:"\u64CD\u4F5C",width:"120"},{default:l(t=>[t.row.isEffect=="1"?(f(),p(c,{key:0,onClick:m=>r.noEffect(t.row),type:"text",size:"small"},{default:l(()=>[Y]),_:2},1032,["onClick"])):v("",!0),t.row.isEffect=="0"?(f(),p(c,{key:1,onClick:m=>r.noEffect(t.row),type:"text",size:"small"},{default:l(()=>[q]),_:2},1032,["onClick"])):v("",!0),a(c,{type:"text",size:"small",onClick:m=>r.handleClickAuth(t.row)},{default:l(()=>[J]),_:2},1032,["onClick"]),a(c,{type:"text",size:"small"},{default:l(()=>[R]),_:1})]),_:1})]),_:1},8,["data"]),d("div",G,[a(U,{onSizeChange:r.handleSizeChange,onCurrentChange:r.handleCurrentChange,"current-page":s.currentPage,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400,style:{"margin-top":"20px"}},null,8,["onSizeChange","onCurrentChange","current-page"])])],64)}var X=z(N,[["render",K],["__scopeId","data-v-02f7842c"]]);export{X as default};
