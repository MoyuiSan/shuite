import"./index.b98b9d41.js";import{d as e,a6 as i,a7 as s,$ as t,f as n,g as a,v as l,p as o,E as d,a3 as c,O as r,a8 as u}from"./vendor.7cb940fd.js";AV;const h={data:()=>({isEdit:!1,email:"",nickname:"",userid:"",cloud:e.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,relogin:!1}),created(){this.auth=this.cloud.auth({persistence:"local"})},beforeMount(){this.auth.onLoginStateChanged((e=>{if(e){const e=this.auth.currentUser;this.email=e.email,this.nickname=e.nickName}else this.email="请重新获取登录信息!",this.nickname="请重新获取登录信息!",this.relogin=!0,console.log("登录失效")}))},methods:{editUser(){this.isEdit=!0},saveUser(){this.isEdit=!1;const e=this.auth.currentUser;e.update({nickName:this.nickname}).then((()=>{this.cloud.database().collection("user").where({_openid:e.uid}).update({nickname:this.nickname}).then((e=>{console.log(e.data)})),console.log("更新用户资料成功!")}))},reLogin(){this.$store.commit("noincrement")}},components:{}},m=u();i("data-v-0df45037");const k={class:"user"},p=a("img",{src:"https://q1.qlogo.cn/g?b=qq&nk=1193292553&s=640",width:"80",height:"80"},null,-1),g=a("div",{class:"sline"},null,-1),v={class:"user-item"},b=a("span",null,"昵称:",-1),f={key:0},E={class:"user-item"},U=a("span",null,"邮箱:",-1),y=a("div",{class:"sline"},null,-1);s();const q=m(((e,i,s,u,h,m)=>(t(),n("div",k,[p,g,a("div",v,[b,h.isEdit?o("",!0):(t(),n("span",f,l(h.nickname),1)),h.isEdit?d((t(),n("input",{key:1,type:"text",placeholder:"请输入你的昵称","onUpdate:modelValue":i[1]||(i[1]=e=>h.nickname=e)},null,512)),[[c,h.nickname]]):o("",!0)]),a("div",E,[U,a("span",null,l(h.email),1)]),y,h.isEdit?o("",!0):d((t(),n("button",{key:0,onClick:i[2]||(i[2]=(...e)=>m.editUser&&m.editUser(...e))},"编辑",512)),[[r,!h.relogin]]),h.isEdit?(t(),n("button",{key:1,onClick:i[3]||(i[3]=(...e)=>m.saveUser&&m.saveUser(...e))},"保存")):o("",!0),h.isEdit?o("",!0):d((t(),n("button",{key:2,onClick:i[4]||(i[4]=(...e)=>m.reLogin&&m.reLogin(...e))},"获取",512)),[[r,h.relogin]])]))));h.render=q,h.__scopeId="data-v-0df45037";export default h;