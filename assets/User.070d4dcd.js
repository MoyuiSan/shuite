import"./main.96d3c66c.js";import{d as e,i,a7 as o,a8 as l,a3 as s,a1 as n,f as t,g as a,v as u,p as r,G as m,a0 as d,Q as c,O as h,F as p,J as f,a9 as y}from"./vendor.6d187631.js";AV;const g={data:()=>({isEdit:!1,email:"",nickname:"",userid:"",cloud:e.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,relogin:!1,userinfo:[],dialogFormVisible:!1,options:[{value:"安卓",label:"安卓"},{value:"IOS",label:"IOS"}],platform:""}),setup:()=>({platform:i(""),qufu:i(""),nichen:i(""),level:i("")}),created(){this.auth=this.cloud.auth({persistence:"local"}),localStorage.getItem("user_auth")||this.$router.push("/")},beforeEnter:(e,i)=>{if(!localStorage.getItem("user_auth"))return"/"},beforeMount(){this.auth.onLoginStateChanged((e=>{if(e){const e=this.auth.currentUser;this.email=e.email,this.nickname=e.nickName;const i=this.cloud.database();i.command,i.collection("user").where({uid:e.uid}).get().then((e=>{console.log(e.data),this.userinfo=e.data[0],this.userinfo.onmyoji&&(this.qufu=this.userinfo.onmyoji.qufu,this.platform=this.userinfo.onmyoji.platform,this.nichen=this.userinfo.onmyoji.nichen,this.level=this.userinfo.onmyoji.level)}))}else this.email="请重新获取登录信息!",this.nickname="请重新获取登录信息!",this.relogin=!0,console.log("登录失效")}))},methods:{editUser(){this.isEdit=!0},saveUser(){this.isEdit=!1;const e=this.auth.currentUser;e.update({nickName:this.nickname}).then((()=>{const i=this.cloud.database();console.log(e.uid),i.collection("user").where({_openid:e.uid}).update({nickname:this.nickname}).then((e=>{console.log(e)})),console.log("更新用户资料成功!")}))},reLogin(){this.$store.commit("noincrement")},onmyojiCertificat(){const e=this.auth.currentUser;this.cloud.database().collection("user").where({_openid:e.uid}).update({onmyoji:{qufu:this.qufu,platform:this.platfrom,nichen:this.nichen,onmyojiStus:0,level:this.level}}).then((e=>{console.log(e)}))},submitOnmyojiCertificat(){this.onmyojiCertificat(),this.dialogFormVisible=!1}},components:{}},v=y();o("data-v-3506fae8");const b={key:0,class:"user-box"},k={class:"userinfo boxshadow"},j=a("h3",null,"个人信息",-1),V=a("img",{src:"https://q1.qlogo.cn/g?b=qq&nk=1193292553&s=640",width:"80",height:"80"},null,-1),U={class:"user-item"},q=a("span",null,"昵称:",-1),x={key:0},C={key:0,class:"user-item"},E=a("span",null,"阴阳师:",-1),_={key:1,class:"onmyoji-modify"},w={key:0,class:"onmyoji-mes"},S={key:1,class:"onmyoji-mes"},F={class:"onmyoji-mes"},I={class:"user-item"},L=a("span",null,"积分:",-1),O={class:"user-item"},N=a("span",null,"账号状态:",-1),$={class:"user-item"},A=a("span",null,"账号状态:",-1),G={class:"user-item"},J=a("span",null,"邮箱:",-1),M={class:"onmyoji-apply"},Q={class:"dialog-footer"},z=c("取 消"),B=c("确 定");l();const D=v(((e,i,o,l,y,g)=>{const D=s("el-option"),H=s("el-select"),K=s("el-input"),P=s("el-button"),R=s("el-dialog");return n(),t(p,null,[y.userinfo?(n(),t("div",b,[a("div",k,[j,V,a("div",U,[q,y.isEdit?r("",!0):(n(),t("span",x,u(y.nickname),1)),y.isEdit?m((n(),t("input",{key:1,type:"text",placeholder:"请输入你的昵称","onUpdate:modelValue":i[1]||(i[1]=e=>y.nickname=e)},null,512)),[[d,y.nickname]]):r("",!0)]),y.userinfo.onmyoji?(n(),t("div",C,[E,y.userinfo.onmyoji?r("",!0):(n(),t("span",{key:0,class:"onmyoji-certification",onClick:i[2]||(i[2]=e=>y.dialogFormVisible=!0)},"未认证")),y.userinfo.onmyoji?(n(),t("div",_,[1==y.userinfo.onmyoji.onmyojiStus?(n(),t("div",w," 已认证 ")):r("",!0),1!=y.userinfo.onmyoji.onmyojiStus?(n(),t("div",S," 已申请 ")):r("",!0),a("div",F,[a("label",null,"Lv."+u(y.userinfo.onmyoji.level),1),c(u(y.userinfo.onmyoji.nichen),1)])])):r("",!0)])):r("",!0),a("div",I,[L,a("span",null,u(y.userinfo.score),1)]),a("div",O,[N,a("span",null,u("1"==y.userinfo.isEffect?"已生效":"未生效"),1)]),a("div",$,[A,a("span",null,u("1"==y.userinfo.uauth?"普通用户":"核心用户"),1)]),a("div",G,[J,a("span",null,u(y.email),1)]),y.isEdit?r("",!0):m((n(),t("button",{key:1,onClick:i[3]||(i[3]=(...e)=>g.editUser&&g.editUser(...e))},"编辑",512)),[[h,!y.relogin]]),y.isEdit?(n(),t("button",{key:2,onClick:i[4]||(i[4]=(...e)=>g.saveUser&&g.saveUser(...e))},"保存")):r("",!0),y.isEdit?r("",!0):m((n(),t("button",{key:3,onClick:i[5]||(i[5]=(...e)=>g.reLogin&&g.reLogin(...e))},"获取",512)),[[h,y.relogin]])])])):r("",!0),a(R,{title:"申请信息",modelValue:y.dialogFormVisible,"onUpdate:modelValue":i[11]||(i[11]=e=>y.dialogFormVisible=e)},{footer:v((()=>[a("span",Q,[a(P,{onClick:i[10]||(i[10]=e=>y.dialogFormVisible=!1)},{default:v((()=>[z])),_:1}),a(P,{type:"primary",onClick:g.submitOnmyojiCertificat},{default:v((()=>[B])),_:1},8,["onClick"])])])),default:v((()=>[a("div",M,[a(H,{modelValue:l.platform,"onUpdate:modelValue":i[6]||(i[6]=e=>l.platform=e),placeholder:"请选择",style:{"margin-bottom":"20px",width:"250px"}},{default:v((()=>[(n(!0),t(p,null,f(y.options,(e=>(n(),t(D,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),a(K,{modelValue:l.qufu,"onUpdate:modelValue":i[7]||(i[7]=e=>l.qufu=e),placeholder:"请输入区服",style:{"margin-bottom":"20px",width:"250px"}},null,8,["modelValue"]),a(K,{modelValue:l.nichen,"onUpdate:modelValue":i[8]||(i[8]=e=>l.nichen=e),placeholder:"请输入昵称",style:{"margin-bottom":"20px",width:"250px"}},null,8,["modelValue"]),a(K,{modelValue:l.level,"onUpdate:modelValue":i[9]||(i[9]=e=>l.level=e),placeholder:"请输入等级",style:{"margin-bottom":"20px",width:"250px"}},null,8,["modelValue"])])])),_:1},8,["modelValue"])],64)}));g.render=D,g.__scopeId="data-v-3506fae8";export default g;
