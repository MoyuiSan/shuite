import"./main.1da3edb4.js";import{d as e,a7 as s,a8 as i,a1 as n,f as t,g as a,v as o,p as l,G as c,a0 as u,O as d,a9 as r}from"./vendor.6d187631.js";AV;const h={data:()=>({isEdit:!1,email:"",nickname:"",userid:"",cloud:e.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,relogin:!1,userinfo:[]}),created(){this.auth=this.cloud.auth({persistence:"local"})},beforeMount(){this.auth.onLoginStateChanged((e=>{if(e){const e=this.auth.currentUser;this.email=e.email,this.nickname=e.nickName;const s=this.cloud.database();s.command,s.collection("user").where({uid:e.uid}).get().then((e=>{console.log(e.data),this.userinfo=e.data[0]}))}else this.email="请重新获取登录信息!",this.nickname="请重新获取登录信息!",this.relogin=!0,console.log("登录失效")}))},methods:{editUser(){this.isEdit=!0},saveUser(){this.isEdit=!1;const e=this.auth.currentUser;e.update({nickName:this.nickname}).then((()=>{const s=this.cloud.database();console.log(e.uid),s.collection("user").where({_openid:e.uid}).update({nickname:this.nickname}).then((e=>{console.log(e)})),console.log("更新用户资料成功!")}))},reLogin(){this.$store.commit("noincrement")}},components:{}},m=r();s("data-v-0eca1fb2");const p={class:"user-box"},g=a("h3",null,"个人信息",-1),k={class:"userinfo boxshadow"},f=a("img",{src:"https://q1.qlogo.cn/g?b=qq&nk=1193292553&s=640",width:"80",height:"80"},null,-1),v={class:"user-item"},b=a("span",null,"昵称:",-1),E={key:0},U={class:"user-item"},y=a("span",null,"积分:",-1),q={class:"user-item"},w=a("span",null,"账号状态:",-1),x={class:"user-item"},C=a("span",null,"账号状态:",-1),L={class:"user-item"},_=a("span",null,"邮箱:",-1);i();const j=m(((e,s,i,r,h,m)=>(n(),t("div",p,[g,a("div",k,[f,a("div",v,[b,h.isEdit?l("",!0):(n(),t("span",E,o(h.nickname),1)),h.isEdit?c((n(),t("input",{key:1,type:"text",placeholder:"请输入你的昵称","onUpdate:modelValue":s[1]||(s[1]=e=>h.nickname=e)},null,512)),[[u,h.nickname]]):l("",!0)]),a("div",U,[y,a("span",null,o(h.userinfo.score),1)]),a("div",q,[w,a("span",null,o("1"==h.userinfo.isEffect?"已生效":"未生效"),1)]),a("div",x,[C,a("span",null,o("1"==h.userinfo.uauth?"普通用户":"核心用户"),1)]),a("div",L,[_,a("span",null,o(h.email),1)]),h.isEdit?l("",!0):c((n(),t("button",{key:0,onClick:s[2]||(s[2]=(...e)=>m.editUser&&m.editUser(...e))},"编辑",512)),[[d,!h.relogin]]),h.isEdit?(n(),t("button",{key:1,onClick:s[3]||(s[3]=(...e)=>m.saveUser&&m.saveUser(...e))},"保存")):l("",!0),h.isEdit?l("",!0):c((n(),t("button",{key:2,onClick:s[4]||(s[4]=(...e)=>m.reLogin&&m.reLogin(...e))},"获取",512)),[[d,h.relogin]])])]))));h.render=j,h.__scopeId="data-v-0eca1fb2";export default h;
