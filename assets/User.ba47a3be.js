import{h as w,m as y,r as p,o as n,c as u,a as o,t as m,d as a,e as b,f as g,a8 as k,aa as V,b as c,w as _,F as j,a6 as S,p as q,g as E}from"./vendor.033f27fa.js";import{_ as F}from"./main.c2a3c0d6.js";AV;const I={data(){return{isEdit:!1,email:"",nickname:"",userid:"",cloud:w.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,relogin:!1,userinfo:[],dialogFormVisible:!1,options:[{value:"\u5B89\u5353",label:"\u5B89\u5353"},{value:"IOS",label:"IOS"}],platform:""}},setup(){return{platform:y(""),qufu:y(""),nichen:y(""),level:y("")}},created(){this.auth=this.cloud.auth({persistence:"local"}),localStorage.getItem("user_auth")||this.$router.push("/")},beforeEnter:(t,e)=>{if(!localStorage.getItem("user_auth"))return"/"},beforeMount(){this.auth.onLoginStateChanged(t=>{if(t){const e=this.auth.currentUser;this.email=e.email,this.nickname=e.nickName;const h=this.cloud.database();h.command,h.collection("user").where({uid:e.uid}).get().then(r=>{console.log(r.data),this.userinfo=r.data[0],this.userinfo.onmyoji&&(this.qufu=this.userinfo.onmyoji.qufu,this.platform=this.userinfo.onmyoji.platform,this.nichen=this.userinfo.onmyoji.nichen,this.level=this.userinfo.onmyoji.level)})}else this.email="\u8BF7\u91CD\u65B0\u83B7\u53D6\u767B\u5F55\u4FE1\u606F!",this.nickname="\u8BF7\u91CD\u65B0\u83B7\u53D6\u767B\u5F55\u4FE1\u606F!",this.relogin=!0,console.log("\u767B\u5F55\u5931\u6548")})},methods:{editUser(){this.isEdit=!0},saveUser(){this.isEdit=!1;const t=this.auth.currentUser;t.update({nickName:this.nickname}).then(()=>{const e=this.cloud.database();console.log(t.uid),e.collection("user").where({_openid:t.uid}).update({nickname:this.nickname}).then(h=>{this.$ElMessage.success("\u66F4\u65B0\u7528\u6237\u8D44\u6599\u6210\u529F!")}),console.log("\u66F4\u65B0\u7528\u6237\u8D44\u6599\u6210\u529F!")})},reLogin(){this.$store.commit("noincrement")},onmyojiCertificat(){const t=this.auth.currentUser;this.cloud.database().collection("user").where({_openid:t.uid}).update({onmyoji:{qufu:this.qufu,platform:this.platform,nichen:this.nichen,onmyojiStus:0,level:this.level}}).then(h=>{console.log(h)})},submitOnmyojiCertificat(){this.onmyojiCertificat(),this.dialogFormVisible=!1}},components:{}},l=t=>(q("data-v-7721f800"),t=t(),E(),t),L={key:0,class:"user-box"},N={class:"userinfo boxshadow"},B=l(()=>o("h3",null,"\u4E2A\u4EBA\u4FE1\u606F",-1)),O=l(()=>o("img",{src:"https://q1.qlogo.cn/g?b=qq&nk=1193292553&s=640",width:"80",height:"80"},null,-1)),D={class:"user-item"},M=l(()=>o("span",null,"\u6635\u79F0:",-1)),A={key:0},T={class:"user-item"},z=l(()=>o("span",null,"\u9634\u9633\u5E08:",-1)),G={key:1,class:"onmyoji-modify"},H={key:0,class:"onmyoji-mes"},J={class:"onmyoji-mes"},K={class:"user-item"},P=l(()=>o("span",null,"\u79EF\u5206:",-1)),Q={class:"user-item"},R=l(()=>o("span",null,"\u8D26\u53F7\u72B6\u6001:",-1)),W={class:"user-item"},X=l(()=>o("span",null,"\u8D26\u53F7\u72B6\u6001:",-1)),Y={class:"user-item"},Z=l(()=>o("span",null,"\u90AE\u7BB1:",-1)),$={class:"onmyoji-apply"},ee=l(()=>o("span",{style:{"margin-right":"15px"}},"\u5E73\u53F0:",-1)),oe=l(()=>o("span",{style:{"margin-right":"15px"}},"\u533A\u670D:",-1)),se=l(()=>o("span",{style:{"margin-right":"15px"}},"\u6635\u79F0:",-1)),ie=l(()=>o("span",{style:{"margin-right":"15px"}},"\u7B49\u7EA7:",-1)),te={class:"dialog-footer"},ne=g("\u53D6 \u6D88"),le=g("\u786E \u5B9A");function re(t,e,h,r,s,d){const f=p("el-input"),x=p("el-option"),U=p("el-select"),v=p("el-button"),C=p("el-dialog");return n(),u(j,null,[s.userinfo?(n(),u("div",L,[o("div",N,[B,O,o("div",D,[M,s.isEdit?a("",!0):(n(),u("span",A,m(s.nickname),1)),s.isEdit?(n(),b(f,{key:1,type:"text",placeholder:"\u8BF7\u8F93\u5165\u4F60\u7684\u6635\u79F0",modelValue:s.nickname,"onUpdate:modelValue":e[0]||(e[0]=i=>s.nickname=i),class:"user-item-nickname-input"},null,8,["modelValue"])):a("",!0)]),o("div",T,[z,s.userinfo.onmyoji?a("",!0):(n(),u("span",{key:0,class:"onmyoji-certification",onClick:e[1]||(e[1]=i=>s.dialogFormVisible=!0)},"\u672A\u8BA4\u8BC1")),s.userinfo.onmyoji?(n(),u("div",G,[s.userinfo.onmyoji.onmyojiStus==1?(n(),u("div",H," \u5DF2\u8BA4\u8BC1 ")):a("",!0),s.userinfo.onmyoji.onmyojiStus!=1?(n(),u("div",{key:1,class:"onmyoji-mes",onClick:e[2]||(e[2]=i=>s.dialogFormVisible=!0)}," \u5DF2\u7533\u8BF7 ")):a("",!0),o("div",J,[o("label",null,"Lv."+m(s.userinfo.onmyoji.level),1),g(m(s.userinfo.onmyoji.nichen),1)])])):a("",!0)]),o("div",K,[P,o("span",null,m(s.userinfo.score),1)]),o("div",Q,[R,o("span",null,m(s.userinfo.isEffect=="1"?"\u5DF2\u751F\u6548":"\u672A\u751F\u6548"),1)]),o("div",W,[X,o("span",null,m(s.userinfo.uauth=="1"?"\u666E\u901A\u7528\u6237":"\u6838\u5FC3\u7528\u6237"),1)]),o("div",Y,[Z,o("span",null,m(s.email),1)]),s.isEdit?a("",!0):k((n(),u("button",{key:0,onClick:e[3]||(e[3]=(...i)=>d.editUser&&d.editUser(...i))},"\u7F16\u8F91",512)),[[V,!s.relogin]]),s.isEdit?(n(),u("button",{key:1,onClick:e[4]||(e[4]=(...i)=>d.saveUser&&d.saveUser(...i))},"\u4FDD\u5B58")):a("",!0),s.isEdit?a("",!0):k((n(),u("button",{key:2,onClick:e[5]||(e[5]=(...i)=>d.reLogin&&d.reLogin(...i))},"\u83B7\u53D6",512)),[[V,s.relogin]])])])):a("",!0),c(C,{title:"\u7533\u8BF7\u4FE1\u606F",modelValue:s.dialogFormVisible,"onUpdate:modelValue":e[11]||(e[11]=i=>s.dialogFormVisible=i)},{footer:_(()=>[o("span",te,[c(v,{onClick:e[10]||(e[10]=i=>s.dialogFormVisible=!1)},{default:_(()=>[ne]),_:1}),c(v,{type:"primary",onClick:d.submitOnmyojiCertificat},{default:_(()=>[le]),_:1},8,["onClick"])])]),default:_(()=>[o("div",$,[o("div",null,[ee,c(U,{modelValue:r.platform,"onUpdate:modelValue":e[6]||(e[6]=i=>r.platform=i),placeholder:"\u8BF7\u9009\u62E9",style:{"margin-bottom":"20px",width:"250px"}},{default:_(()=>[(n(!0),u(j,null,S(s.options,i=>(n(),b(x,{key:i.value,label:i.label,value:i.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),o("div",null,[oe,c(f,{modelValue:r.qufu,"onUpdate:modelValue":e[7]||(e[7]=i=>r.qufu=i),placeholder:"\u8BF7\u8F93\u5165\u533A\u670D",style:{"margin-bottom":"20px",width:"250px"}},null,8,["modelValue"])]),o("div",null,[se,c(f,{modelValue:r.nichen,"onUpdate:modelValue":e[8]||(e[8]=i=>r.nichen=i),placeholder:"\u8BF7\u8F93\u5165\u6635\u79F0",style:{"margin-bottom":"20px",width:"250px"}},null,8,["modelValue"])]),o("div",null,[ie,c(f,{modelValue:r.level,"onUpdate:modelValue":e[9]||(e[9]=i=>r.level=i),placeholder:"\u8BF7\u8F93\u5165\u7B49\u7EA7",style:{"margin-bottom":"20px",width:"250px"}},null,8,["modelValue"])])])]),_:1},8,["modelValue"])],64)}var de=F(I,[["render",re],["__scopeId","data-v-7721f800"]]);export{de as default};