import{F as H}from"./FilmsBox.b1b79c5c.js";import O from"./FilmsUpload.ea533d8b.js";import{r as a,o as m,a as u,F,a7 as z,b as l,t as _,h as d,j as b,p as w,d as C,f as o,g as r,e as v,s as V}from"./vendor.1807abaf.js";import{_ as k}from"./main.2172689f.js";const G={data(){return{email:"1193292553@qq.com",filmDetail:[],auth:localStorage.getItem("user_auth")=="admin"}},props:["filmid"],created(){this.getComments()},methods:{getComments(){const t=this.$cloudbase.database();t.command,t.collection("chats").where({filmId:this.filmid,chatFrom:"film",isOk:1}).get().then(e=>{this.filmDetail=e.data})},formaTime(t){return moment(t).fromNow()},deleteComment(t){this.$cloudbase.callFunction({name:"shuiteApi",data:{id:t,event:"DELETE_FILM_COMMENT",secret:"gyc199700"}}).then(e=>{this.$ElMessage.success({message:"\u5220\u9664\u6210\u529F\u4E86!",type:"success"}),this.getComments()}).catch(console.error)}},components:[]},T=t=>(w("data-v-6f5eaeae"),t=t(),C(),t),J={class:"film-chats boxshadow"},P=T(()=>l("h3",null,"\u8BC4\u8BBA",-1)),R={class:"chat-box"},K=["src"],Q={class:"chat-box-message"},W=T(()=>l("span",null,"\u6765\u81EA\u5FEB\u4E50\u661F\u7403",-1)),X=["onClick"],Z={class:"message"};function $(t,e,n,s,i,c){const g=a("el-empty");return m(),u("div",J,[P,(m(!0),u(F,null,z(i.filmDetail,f=>(m(),u("div",R,[l("img",{src:"https://q1.qlogo.cn/g?b=qq&nk="+f.email+"&s=640"},null,8,K),l("div",Q,[l("p",null,_(f.nickname),1),l("p",null,[l("div",null,[W,l("span",null,_(c.formaTime(f.created)),1)]),i.auth?(m(),u("span",{key:0,onClick:D=>c.deleteComment(f._id),class:"chat-delete"},"\u5220\u9664",8,X)):d("",!0)]),l("div",Z,_(f.chat),1)])]))),256)),i.filmDetail[0]?d("",!0):(m(),b(g,{key:0,description:"\u6682\u65E0\u7559\u8A00..."}))])}var ee=k(G,[["render",$],["__scopeId","data-v-6f5eaeae"]]);const te={data(){return{input:""}},props:["filmid","filmname"],methods:{submitChat(){const t=this.$auth.currentUser,e=this.$cloudbase.database();e.command,e.collection("chats").add({filmId:this.filmid,filmName:this.filmname,chatFrom:"film",chat:this.input,nickname:t.nickName,appVersion:navigator.appVersion,email:t.email,created:Date.now(),updated:Date.now(),isOk:1}).then(n=>{this.$emit("nochat"),this.$ElMessage.success({message:"\u5410\u69FD\u6210\u529F\u4E86!",type:"success"})})}},components:{}},le={class:"film-gochat boxshadow"},ie=v("\u63D0\u4EA4");function se(t,e,n,s,i,c){const g=a("el-input"),f=a("el-button");return m(),u("div",le,[o(g,{placeholder:"\u5410\u69FD\u4E00\u4E0B\u5427",modelValue:i.input,"onUpdate:modelValue":e[0]||(e[0]=D=>i.input=D),clearable:"",class:"shuite-search"},null,8,["modelValue"]),o(f,{onClick:c.submitChat,type:"small",style:{height:"40px","margin-left":"10px"}},{default:r(()=>[ie]),_:1},8,["onClick"])])}var oe=k(te,[["render",se],["__scopeId","data-v-0e92229c"]]);const ae={data(){return{loading:!0,post:null,error:null,cloud:cloudbase.init({env:"yui-7gel1hqtaf6fb79d"}),dialogTableVisible:!1,userAuth:localStorage.getItem("user_auth"),isLoved:!1,textareaStyle:{border:0,padding:0,color:"black"},chating:!1,islogin:!1,preFilm:"",nextFilm:""}},setup(t){return{filmDetail:V(""),nickname:V("")}},created(){this.cloud.auth({persistence:"local"}),this.getFilmDetail(),JSON.parse(localStorage.getItem("login_type_yui-7gel1hqtaf6fb79d")).content=="EMAIL"&&(this.islogin=!0)},methods:{formatterTime(t,e,n,s){return moment(n).format("YYYY/MM/DD")},formatterTimeYear(t,e,n,s){return moment(t).format("YYYY")},getFilmDetail(t){this.$auth.getAuthHeader();const e=this.cloud.database();e.command,scrollTo(0,0),e.collection("films").where({_id:t||this.$route.params.id}).orderBy("created","desc").limit(1).get().then(n=>{this.filmDetail=n.data[0],this.$refs.comment&&this.$refs.comment.getComments(),e.collection("user").where({_openid:this.filmDetail._openid}).get().then(s=>{this.nickname=s.data[0].nickname,this.getPreFilm(),this.getNextFilm(),e.collection("mylove").where({_openid:this.filmDetail._openid,filmId:this.filmDetail._id}).get().then(i=>{i.data[0]?this.isLoved=!0:this.isLoved=!1;let c=setTimeout(()=>{this.loading=!1,clearTimeout(c)},200);c=null})})})},getStar(t){const e=this.$auth.getAuthHeader(),n=this.$cloudbase.database();n.command,JSON.parse(localStorage.getItem("login_type_yui-7gel1hqtaf6fb79d")).content=="ANONYMOUS"?ElMessage.info("\u8BF7\u5148\u767B\u5F55\u54E6!!!"):n.collection("mylove").where({_openid:e.uid,filmId:t}).get().then(i=>{i.data[0]||n.collection("mylove").add({filmId:t,created:Date.now(),updated:Date.now()}).then(c=>{this.getFilmDetail(),this.$ElMessage.success({message:"\u6536\u85CF\u6210\u529F\u4E86!",type:"success"})})})},delStar(t){const e=this.$auth.getAuthHeader(),n=this.$cloudbase.database();n.command,n.collection("mylove").where({_openid:e.uid,filmId:t}).remove().then(s=>{this.getFilmDetail(),this.$ElMessage.success({message:"\u53D6\u6D88\u6536\u85CF\u4E86!",type:"success"})})},getPreFilm(){console.log(this.filmDetail);const t=this.$cloudbase.database(),e=t.command;t.collection("films").where({created:e.gt(this.filmDetail.created)}).orderBy("created","asc").limit(1).get().then(n=>{this.preFilm=n.data})},getNextFilm(){console.log(this.filmDetail);const t=this.$cloudbase.database(),e=t.command;t.collection("films").where({created:e.lt(this.filmDetail.created)}).orderBy("created","desc").limit(1).get().then(n=>{this.nextFilm=n.data})},toChat(){this.chating=!0},noChat(){this.chating=!1,this.$refs.comment.getComments()},hideDialog(){this.dialogTableVisible=!1,this.getFilmDetail()}},components:{FilmsBox:H,"films-upload":O,"film-chats":ee,"film-gochat":oe}},p=t=>(w("data-v-0c7bcb58"),t=t(),C(),t),ne={class:"filmdetail"},ce={style:{padding:"14px"}},me={style:{display:"flex","align-items":"center","justify-items":"space-between","margin-top":"16px",height:"16px"}},de={class:"film-box"},re={class:"film-top"},_e=["src"],he={class:"film-message"},ue={class:"name"},fe=p(()=>l("span",null,"\u540D\u79F0:",-1)),pe={class:"fclass"},ge=p(()=>l("span",null,"\u7C7B\u578B:",-1)),be={class:"jianjie"},ve=p(()=>l("span",null,"\u5E74\u4EFD:",-1)),ye={class:"upload-time"},De=p(()=>l("span",null,"\u4E0A\u4F20\u65F6\u95F4:",-1)),ke={class:"upload-owner"},xe=p(()=>l("span",null,"\u4E0A\u4F20\u8005:",-1)),Fe={class:"rate",style:{display:"flex"}},we=p(()=>l("span",null,"\u8BC4\u5206:",-1)),Ce={class:"film-btn boxshadow"},Ve=["href"],Te={key:1,class:"film-vedio boxshadow"},Ie=p(()=>l("h3",null,"\u89C6\u9891",-1)),Se=["src"],Ne={class:"film-main boxshadow"},je=p(()=>l("h3",null,"\u7B80\u4ECB",-1)),Me=p(()=>l("h3",null,"\u63A8\u8350\u7406\u7531",-1)),Ee={class:"recommend boxshadow"},Ye={class:"recommend-left"},Le=v(" \u4E0A\u4E00\u4E2A "),qe={key:1},Be={class:"recommend-right"},Ue=v(" \u4E0B\u4E00\u4E2A "),Ae={key:1};function He(t,e,n,s,i,c){const g=a("el-skeleton-item"),f=a("el-rate"),D=a("paperclip"),y=a("el-icon"),I=a("star"),S=a("star-filled"),N=a("chat-round"),j=a("edit"),M=a("aim"),E=a("film-gochat"),Y=a("el-input"),L=a("film-chats"),x=a("router-link"),q=a("el-skeleton"),B=a("el-space"),U=a("films-upload"),A=a("el-dialog");return m(),u(F,null,[l("div",ne,[o(B,{direction:"vertical",alignment:"flex-start",class:"shuite-el-space"},{default:r(()=>[o(q,{rows:15,animated:"",loading:i.loading,class:"shuite-el-skeleton"},{template:r(()=>[o(g,{variant:"image",style:{height:"267px"},class:"shuite-el-skeleton-item"}),l("div",ce,[o(g,{variant:"h3",style:{width:"50%"}}),l("div",me,[o(g,{variant:"text",style:{"margin-right":"16px"}}),o(g,{variant:"text",style:{width:"30%"}})])])]),default:r(()=>[l("div",de,[l("div",re,[s.filmDetail?(m(),u("img",{key:0,src:s.filmDetail.tempFileURL},null,8,_e)):d("",!0),l("div",he,[l("div",ue,[fe,v(_(s.filmDetail.name),1)]),l("div",pe,[ge,v(_(s.filmDetail.class),1)]),l("div",be,[ve,v(_(c.formatterTimeYear(s.filmDetail.year)),1)]),l("div",ye,[De,v(_(c.formatterTime(s.filmDetail.created)),1)]),l("div",ke,[xe,v(_(s.nickname),1)]),l("div",Fe,[we,o(f,{modelValue:s.filmDetail.rateValue,"onUpdate:modelValue":e[0]||(e[0]=h=>s.filmDetail.rateValue=h),"allow-half":"","show-score":"",disabled:""},null,8,["modelValue"])])])]),l("div",Ce,[l("a",{href:s.filmDetail.link,target:"_blank"},[o(y,null,{default:r(()=>[o(D)]),_:1})],8,Ve),!i.isLoved&&i.islogin?(m(),b(y,{key:0,onClick:e[1]||(e[1]=h=>c.getStar(s.filmDetail._id))},{default:r(()=>[o(I)]),_:1})):d("",!0),i.isLoved&&i.islogin?(m(),b(y,{key:1,onClick:e[2]||(e[2]=h=>c.delStar(s.filmDetail._id))},{default:r(()=>[o(S,{style:{color:"#fcc"}})]),_:1})):d("",!0),i.islogin?(m(),b(y,{key:2,onClick:c.toChat},{default:r(()=>[o(N)]),_:1},8,["onClick"])):d("",!0),i.userAuth=="admin"?(m(),b(y,{key:3,onClick:e[3]||(e[3]=h=>i.dialogTableVisible=!0)},{default:r(()=>[o(j)]),_:1})):d("",!0),o(y,null,{default:r(()=>[o(M)]),_:1})]),i.chating?(m(),b(E,{key:0,filmid:s.filmDetail._id,filmname:s.filmDetail.name,onNochat:c.noChat,class:"boxshadow"},null,8,["filmid","filmname","onNochat"])):d("",!0),s.filmDetail.playlink?(m(),u("div",Te,[Ie,l("iframe",{src:"//player.bilibili.com/player.html?bvid="+s.filmDetail.playlink+"&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",class:"iframe-vedio"},`\r
              `,8,Se)])):d("",!0),l("div",Ne,[je,o(Y,{type:"textarea",modelValue:s.filmDetail.jianjie,"onUpdate:modelValue":e[4]||(e[4]=h=>s.filmDetail.jianjie=h),autosize:"",readonly:"",resize:"none",autofocus:"false",style:{"margin-bottom":"20px"},"input-style":i.textareaStyle},null,8,["modelValue","input-style"]),Me,l("p",null,_(s.filmDetail.liyou),1)]),o(L,{filmid:s.filmDetail._id,ref:"comment"},null,8,["filmid"]),l("div",Ee,[l("div",Ye,[i.preFilm[0]?(m(),b(x,{key:0,to:"/filmdetail/"+i.preFilm[0]._id,onClick:e[5]||(e[5]=h=>c.getFilmDetail(i.preFilm[0]._id))},{default:r(()=>[Le]),_:1},8,["to"])):d("",!0),i.preFilm[0]?(m(),u("p",qe,_(i.preFilm[0].name),1)):d("",!0)]),l("div",Be,[i.nextFilm[0]?(m(),b(x,{key:0,to:"/filmdetail/"+i.nextFilm[0]._id,onClick:e[6]||(e[6]=h=>c.getFilmDetail(i.nextFilm[0]._id))},{default:r(()=>[Ue]),_:1},8,["to"])):d("",!0),i.nextFilm[0]?(m(),u("p",Ae,_(i.nextFilm[0].name),1)):d("",!0)])])])]),_:1},8,["loading"])]),_:1})]),o(A,{title:"\u4FE1\u606F\u4FEE\u6539",modelValue:i.dialogTableVisible,"onUpdate:modelValue":e[7]||(e[7]=h=>i.dialogTableVisible=h),top:"5vh",fullscreen:""},{default:r(()=>[o(U,{type:"2",filmsData:s.filmDetail,onHideDialog:c.hideDialog},null,8,["filmsData","onHideDialog"])]),_:1},8,["modelValue"])],64)}var Pe=k(ae,[["render",He],["__scopeId","data-v-0c7bcb58"]]);export{Pe as default};