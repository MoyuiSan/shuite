import"./main.7aa2fb9c.js";import{d as t,a6 as a,a7 as e,a1 as s,$ as o,f as i,g as c,p as l,F as n,J as h,v as d,E as u,a3 as r,a8 as m}from"./vendor.7cb940fd.js";AV;const g={data:()=>({ishowChat:!1,tucao:"",dataChat:[],cloud:t.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,nickname:"",email:"",userAuth:!!localStorage.getItem("user_auth"),loading:!0}),created(){this.auth=this.cloud.auth({persistence:"local"}),this.debouncedClick=_.debounce(this.tuCao,500)},unmounted(){this.debouncedClick.cancel()},components:{},computed:{},mounted(){this.auth.onLoginStateChanged((t=>{if(t){console.log(localStorage);const t=this.auth.currentUser;this.email=t.email,this.nickname=t.nickName}else console.log("登录失效")})),AV.init({appId:"tYNddUiQgK4ghsF9PDzRiz2j-MdYXbMMI",appKey:"I3DfpmsVmqqeA66CARr0H1Br"}),NProgress.start(),this.dataTucao()},methods:{showChat(){this.ishowChat?this.ishowChat=!1:this.ishowChat=!0},dataTucao(){const t=new AV.Query("tucao");new(AV.Object.extend("tucao")),t.descending("createdAt"),t.limit(20),t.find().then((t=>{NProgress.done(),console.log(t),this.dataChat=t,this.loading=!1}))},tuCao(){new AV.Query("tucao");const t=new(AV.Object.extend("tucao"));t.set("nickname",this.nickname),t.set("chat",this.tucao),t.set("email",this.email),t.save().then((t=>{console.log(`保存成功。objectId：${t.id}`),this.ishowChat=!1,this.dataTucao()}),(t=>{}))},formaTime:t=>moment(t).startOf("hour").fromNow(),deleteChat(t){AV.Object.createWithoutData("tucao",t).destroy();let a=setTimeout((()=>{this.dataTucao(),clearTimeout(a)}),500);a=null}}},p=m();a("data-v-01188d0b");const C=c("h3",{style:{"margin-top":"30px"}},"吐槽一下",-1),f={class:"chat"},b={class:"msg"},k={class:"msg-item",style:{"background-color":"#faa"}},w={class:"msg-item"},v=c("i",{class:"fas fa-comment"},null,-1);e();const y=p(((t,a,e,m,g,p)=>{const y=s("lottie-player");return o(),i(n,null,[C,c("div",f,[g.loading?(o(),i(y,{key:0,src:"https://assets1.lottiefiles.com/packages/lf20_gmswat4t.json",background:"transparent",speed:"1",style:{width:"300px",height:"300px",color:"black"},loop:"",autoplay:""})):l("",!0),g.loading?l("",!0):(o(!0),i(n,{key:1},h(g.dataChat,((t,a)=>(o(),i("div",{class:"chatbox",key:a,"data-scrollreveal":""},[c("img",{src:"https://q1.qlogo.cn/g?b=qq&nk="+t.attributes.email+"&s=640",width:"50",height:"50"},null,8,["src"]),c("div",b,[c("div",k,d(t.attributes.nickname),1),c("div",w,d(p.formaTime(t.createdAt)),1),g.userAuth?(o(),i("div",{key:0,class:"msg-item delete",onClick:a=>p.deleteChat(t.id)}," 删除 ",8,["onClick"])):l("",!0)]),c("p",null,d(t.attributes.chat),1)])))),128)),c("div",{class:"gochat",onClick:a[1]||(a[1]=(...t)=>p.showChat&&p.showChat(...t))},[v]),c("div",{class:{writechat:!0,showchat:g.ishowChat}},[u(c("input",{type:"text",placeholder:"吐槽一下吧",size:"30",maxlength:"50","onUpdate:modelValue":a[2]||(a[2]=t=>g.tucao=t)},null,512),[[r,g.tucao]]),c("i",{class:"fas fa-feather-alt",onClick:a[3]||(a[3]=(...t)=>p.tuCao&&p.tuCao(...t))})],2)])],64)}));g.render=y,g.__scopeId="data-v-01188d0b";export default g;
