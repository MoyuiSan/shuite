import{t as i,c as w,r,o as l,a as d,b as a,j as y,h,F as m,a7 as v,n as x,w as N,v as T,f as u,g as V}from"./vendor.1807abaf.js";import{_ as p}from"./main.ab6b560c.js";const q={data(){return{filmName:""}},props:["filmid"],created(){const e=this.$cloudbase.database();e.command,e.collection("films").where({_id:this.filmid}).get().then(t=>{console.log(t),this.filmName=t.data[0].name})},components:{}};function j(e,t,c,f,s,n){return i(s.filmName)}var A=p(q,[["render",j]]);AV;const I={data(){return{ishowChat:!1,tucao:"",dataChat:[],cloud:w.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,nickname:"\u533F\u540D\u7528\u6237",email:"2717902644@qq.com",userAuth:!!localStorage.getItem("user_auth"),loading:!0}},created(){this.auth=this.cloud.auth({persistence:"local"}),this.debouncedClick=_.debounce(this.tuCao,500)},unmounted(){this.debouncedClick.cancel()},components:{},computed:{},mounted(){this.auth.onLoginStateChanged(e=>{console.log(e?localStorage:"\u767B\u5F55\u5931\u6548")}),AV.init({appId:"tYNddUiQgK4ghsF9PDzRiz2j-MdYXbMMI",appKey:"I3DfpmsVmqqeA66CARr0H1Br"}),NProgress.start(),this.dataTucao()},methods:{showChat(){this.ishowChat?this.ishowChat=!1:this.ishowChat=!0},dataTucao(){const e=this.$cloudbase.database();e.command,e.collection("chats").orderBy("created","desc").limit(10).get().then(t=>{NProgress.done(),console.log(t.data),this.dataChat=t.data,this.loading=!1})},tuCao(){new AV.Query("tucao");const e=AV.Object.extend("tucao"),t=new e;t.set("nickname",this.nickname),t.set("chat",this.tucao),t.set("email",this.email),t.save().then(c=>{console.log(`\u4FDD\u5B58\u6210\u529F\u3002objectId\uFF1A${c.id}`),this.ishowChat=!1,this.dataTucao()},c=>{})},formaTime(e){return moment(e).startOf("hour").fromNow()},deleteChat(e){AV.Object.createWithoutData("tucao",e).destroy();let c=setTimeout(()=>{this.dataTucao(),clearTimeout(c)},500);c=null}},components:{"chat-from":A}},B={style:{"margin-top":"60px"}},D={class:"chat"},z=["src"],F={class:"msg"},M={class:"msg-item",style:{"background-color":"#faa"}},S={class:"msg-item"},O={class:"msg-item"};function P(e,t,c,f,s,n){const g=r("lottie-player"),C=r("chat-from"),b=r("router-link");return l(),d(m,null,[a("h3",B,"\u6700\u65B0\u7559\u8A00("+i(s.dataChat.length)+")",1),a("div",D,[s.loading?(l(),y(g,{key:0,src:"https://assets1.lottiefiles.com/packages/lf20_gmswat4t.json",background:"transparent",speed:"1",style:{width:"300px",height:"300px",color:"black"},loop:"",autoplay:""})):h("",!0),s.loading?h("",!0):(l(!0),d(m,{key:1},v(s.dataChat,(o,k)=>(l(),d("div",{class:"chatbox boxshadow",key:k,"data-scrollreveal":""},[a("img",{src:"https://q1.qlogo.cn/g?b=qq&nk="+o.email+"&s=640",width:"50",height:"50"},null,8,z),a("div",F,[a("div",M,i(o.nickname),1),u(b,{to:{name:"filmdetail",params:{id:o.filmId}}},{default:V(()=>[a("div",S,[u(C,{filmid:o.filmId},null,8,["filmid"])])]),_:2},1032,["to"]),a("div",O,i(n.formaTime(o.created)),1)]),a("p",null,i(o.chat),1)]))),128)),a("div",{class:x({writechat:!0,showchat:s.ishowChat})},[N(a("input",{type:"text",placeholder:"\u5410\u69FD\u4E00\u4E0B\u5427",size:"30",maxlength:"50","onUpdate:modelValue":t[0]||(t[0]=o=>s.tucao=o)},null,512),[[T,s.tucao]]),a("i",{class:"fas fa-feather-alt",onClick:t[1]||(t[1]=(...o)=>n.tuCao&&n.tuCao(...o))})],2)])],64)}var Q=p(I,[["render",P],["__scopeId","data-v-4e5c88fc"]]);export{Q as default};
