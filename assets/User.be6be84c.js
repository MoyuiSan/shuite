import{c as C,s as _,r as f,o as i,a as l,b as t,t as c,h as u,w as v,v as w,e as g,a9 as k,f as h,g as p,F as j,a7 as S,p as q,d as E,j as F}from"./vendor.1807abaf.js";import{_ as I}from"./main.128febe3.js";AV;const L={data(){return{isEdit:!1,email:"",nickname:"",userid:"",cloud:C.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,relogin:!1,userinfo:[],dialogFormVisible:!1,options:[{value:"\u5B89\u5353",label:"\u5B89\u5353"},{value:"IOS",label:"IOS"}],platform:""}},setup(){return{platform:_(""),qufu:_(""),nichen:_(""),level:_("")}},created(){this.auth=this.cloud.auth({persistence:"local"}),localStorage.getItem("user_auth")||this.$router.push("/")},beforeEnter:(n,e)=>{if(!localStorage.getItem("user_auth"))return"/"},beforeMount(){this.auth.onLoginStateChanged(n=>{if(n){const e=this.auth.currentUser;this.email=e.email,this.nickname=e.nickName;const d=this.cloud.database();d.command,d.collection("user").where({uid:e.uid}).get().then(r=>{console.log(r.data),this.userinfo=r.data[0],this.userinfo.onmyoji&&(this.qufu=this.userinfo.onmyoji.qufu,this.platform=this.userinfo.onmyoji.platform,this.nichen=this.userinfo.onmyoji.nichen,this.level=this.userinfo.onmyoji.level)})}else this.email="\u8BF7\u91CD\u65B0\u83B7\u53D6\u767B\u5F55\u4FE1\u606F!",this.nickname="\u8BF7\u91CD\u65B0\u83B7\u53D6\u767B\u5F55\u4FE1\u606F!",this.relogin=!0,console.log("\u767B\u5F55\u5931\u6548")})},methods:{editUser(){this.isEdit=!0},saveUser(){this.isEdit=!1;const n=this.auth.currentUser;n.update({nickName:this.nickname}).then(()=>{const e=this.cloud.database();console.log(n.uid),e.collection("user").where({_openid:n.uid}).update({nickname:this.nickname}).then(d=>{console.log(d)}),console.log("\u66F4\u65B0\u7528\u6237\u8D44\u6599\u6210\u529F!")})},reLogin(){this.$store.commit("noincrement")},onmyojiCertificat(){const n=this.auth.currentUser;this.cloud.database().collection("user").where({_openid:n.uid}).update({onmyoji:{qufu:this.qufu,platform:this.platfrom,nichen:this.nichen,onmyojiStus:0,level:this.level}}).then(d=>{console.log(d)})},submitOnmyojiCertificat(){this.onmyojiCertificat(),this.dialogFormVisible=!1}},components:{}},a=n=>(q("data-v-eff92408"),n=n(),E(),n),N={key:0,class:"user-box"},B={class:"userinfo boxshadow"},O=a(()=>t("h3",null,"\u4E2A\u4EBA\u4FE1\u606F",-1)),D=a(()=>t("img",{src:"https://q1.qlogo.cn/g?b=qq&nk=1193292553&s=640",width:"80",height:"80"},null,-1)),M={class:"user-item"},T=a(()=>t("span",null,"\u6635\u79F0:",-1)),A={key:0},z={key:0,class:"user-item"},G=a(()=>t("span",null,"\u9634\u9633\u5E08:",-1)),H={key:1,class:"onmyoji-modify"},J={key:0,class:"onmyoji-mes"},K={key:1,class:"onmyoji-mes"},P={class:"onmyoji-mes"},Q={class:"user-item"},R=a(()=>t("span",null,"\u79EF\u5206:",-1)),W={class:"user-item"},X=a(()=>t("span",null,"\u8D26\u53F7\u72B6\u6001:",-1)),Y={class:"user-item"},Z=a(()=>t("span",null,"\u8D26\u53F7\u72B6\u6001:",-1)),$={class:"user-item"},ee=a(()=>t("span",null,"\u90AE\u7BB1:",-1)),oe={class:"onmyoji-apply"},se={class:"dialog-footer"},te=g("\u53D6 \u6D88"),ie=g("\u786E \u5B9A");function ne(n,e,d,r,o,m){const V=f("el-option"),x=f("el-select"),y=f("el-input"),b=f("el-button"),U=f("el-dialog");return i(),l(j,null,[o.userinfo?(i(),l("div",N,[t("div",B,[O,D,t("div",M,[T,o.isEdit?u("",!0):(i(),l("span",A,c(o.nickname),1)),o.isEdit?v((i(),l("input",{key:1,type:"text",placeholder:"\u8BF7\u8F93\u5165\u4F60\u7684\u6635\u79F0","onUpdate:modelValue":e[0]||(e[0]=s=>o.nickname=s)},null,512)),[[w,o.nickname]]):u("",!0)]),o.userinfo.onmyoji?(i(),l("div",z,[G,o.userinfo.onmyoji?u("",!0):(i(),l("span",{key:0,class:"onmyoji-certification",onClick:e[1]||(e[1]=s=>o.dialogFormVisible=!0)},"\u672A\u8BA4\u8BC1")),o.userinfo.onmyoji?(i(),l("div",H,[o.userinfo.onmyoji.onmyojiStus==1?(i(),l("div",J," \u5DF2\u8BA4\u8BC1 ")):u("",!0),o.userinfo.onmyoji.onmyojiStus!=1?(i(),l("div",K," \u5DF2\u7533\u8BF7 ")):u("",!0),t("div",P,[t("label",null,"Lv."+c(o.userinfo.onmyoji.level),1),g(c(o.userinfo.onmyoji.nichen),1)])])):u("",!0)])):u("",!0),t("div",Q,[R,t("span",null,c(o.userinfo.score),1)]),t("div",W,[X,t("span",null,c(o.userinfo.isEffect=="1"?"\u5DF2\u751F\u6548":"\u672A\u751F\u6548"),1)]),t("div",Y,[Z,t("span",null,c(o.userinfo.uauth=="1"?"\u666E\u901A\u7528\u6237":"\u6838\u5FC3\u7528\u6237"),1)]),t("div",$,[ee,t("span",null,c(o.email),1)]),o.isEdit?u("",!0):v((i(),l("button",{key:1,onClick:e[2]||(e[2]=(...s)=>m.editUser&&m.editUser(...s))},"\u7F16\u8F91",512)),[[k,!o.relogin]]),o.isEdit?(i(),l("button",{key:2,onClick:e[3]||(e[3]=(...s)=>m.saveUser&&m.saveUser(...s))},"\u4FDD\u5B58")):u("",!0),o.isEdit?u("",!0):v((i(),l("button",{key:3,onClick:e[4]||(e[4]=(...s)=>m.reLogin&&m.reLogin(...s))},"\u83B7\u53D6",512)),[[k,o.relogin]])])])):u("",!0),h(U,{title:"\u7533\u8BF7\u4FE1\u606F",modelValue:o.dialogFormVisible,"onUpdate:modelValue":e[10]||(e[10]=s=>o.dialogFormVisible=s)},{footer:p(()=>[t("span",se,[h(b,{onClick:e[9]||(e[9]=s=>o.dialogFormVisible=!1)},{default:p(()=>[te]),_:1}),h(b,{type:"primary",onClick:m.submitOnmyojiCertificat},{default:p(()=>[ie]),_:1},8,["onClick"])])]),default:p(()=>[t("div",oe,[h(x,{modelValue:r.platform,"onUpdate:modelValue":e[5]||(e[5]=s=>r.platform=s),placeholder:"\u8BF7\u9009\u62E9",style:{"margin-bottom":"20px",width:"250px"}},{default:p(()=>[(i(!0),l(j,null,S(o.options,s=>(i(),F(V,{key:s.value,label:s.label,value:s.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),h(y,{modelValue:r.qufu,"onUpdate:modelValue":e[6]||(e[6]=s=>r.qufu=s),placeholder:"\u8BF7\u8F93\u5165\u533A\u670D",style:{"margin-bottom":"20px",width:"250px"}},null,8,["modelValue"]),h(y,{modelValue:r.nichen,"onUpdate:modelValue":e[7]||(e[7]=s=>r.nichen=s),placeholder:"\u8BF7\u8F93\u5165\u6635\u79F0",style:{"margin-bottom":"20px",width:"250px"}},null,8,["modelValue"]),h(y,{modelValue:r.level,"onUpdate:modelValue":e[8]||(e[8]=s=>r.level=s),placeholder:"\u8BF7\u8F93\u5165\u7B49\u7EA7",style:{"margin-bottom":"20px",width:"250px"}},null,8,["modelValue"])])]),_:1},8,["modelValue"])],64)}var ue=I(L,[["render",ne],["__scopeId","data-v-eff92408"]]);export{ue as default};
