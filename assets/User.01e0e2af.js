import"./index.2925d606.js";import{d as e,a6 as s,a7 as i,$ as t,f as n,g as a,v as o,p as l,E as c,a3 as d,O as r,a8 as u}from"./vendor.7cb940fd.js";AV;const h={data:()=>({isEdit:!1,email:"",nickname:"",userid:"",cloud:e.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,relogin:!1}),created(){this.auth=this.cloud.auth({persistence:"local"})},beforeMount(){this.auth.onLoginStateChanged((e=>{if(e){const e=this.auth.currentUser;this.email=e.email,this.nickname=e.nickName}else this.email="请重新获取登录信息!",this.nickname="请重新获取登录信息!",this.relogin=!0,console.log("登录失效")}))},methods:{editUser(){this.isEdit=!0},saveUser(){this.isEdit=!1;const e=this.auth.currentUser;e.update({nickName:this.nickname}).then((()=>{const s=this.cloud.database();console.log(e.uid),s.collection("user").where({_openid:e.uid}).update({nickname:this.nickname}).then((e=>{console.log(e)})),console.log("更新用户资料成功!")}))},reLogin(){this.$store.commit("noincrement")}},components:{}},m=u();s("data-v-117c4447");const k={class:"user"},g=a("img",{src:"https://q1.qlogo.cn/g?b=qq&nk=1193292553&s=640",width:"80",height:"80"},null,-1),p=a("div",{class:"sline"},null,-1),v={class:"user-item"},E=a("span",null,"昵称:",-1),U={key:0},b={class:"user-item"},f=a("span",null,"邮箱:",-1),y=a("div",{class:"sline"},null,-1);i();const q=m(((e,s,i,u,h,m)=>(t(),n("div",k,[g,p,a("div",v,[E,h.isEdit?l("",!0):(t(),n("span",U,o(h.nickname),1)),h.isEdit?c((t(),n("input",{key:1,type:"text",placeholder:"请输入你的昵称","onUpdate:modelValue":s[1]||(s[1]=e=>h.nickname=e)},null,512)),[[d,h.nickname]]):l("",!0)]),a("div",b,[f,a("span",null,o(h.email),1)]),y,h.isEdit?l("",!0):c((t(),n("button",{key:0,onClick:s[2]||(s[2]=(...e)=>m.editUser&&m.editUser(...e))},"编辑",512)),[[r,!h.relogin]]),h.isEdit?(t(),n("button",{key:1,onClick:s[3]||(s[3]=(...e)=>m.saveUser&&m.saveUser(...e))},"保存")):l("",!0),h.isEdit?l("",!0):c((t(),n("button",{key:2,onClick:s[4]||(s[4]=(...e)=>m.reLogin&&m.reLogin(...e))},"获取",512)),[[r,h.relogin]])]))));h.render=q,h.__scopeId="data-v-117c4447";export default h;
