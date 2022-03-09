import O from"./ShareUpload.9a301bbb.js";import{_ as F}from"./main.365dd05e.js";import{ac as $,r as i,o,c,F as C,a7 as z,a as s,t as r,d,e as f,p as w,g as S,b as a,w as n,f as g,m as E}from"./vendor.8020b7fb.js";const G=$({data(){return{email:"1193292553@qq.com",filmDetail:[],auth:localStorage.getItem("user_auth")=="admin"}},props:["filmid"],created(){this.getComments()},methods:{getComments(){const e=this.$cloudbase.database();e.command,e.collection("chats").where({filmId:this.filmid,chatFrom:"film",isOk:1}).orderBy("created","desc").get().then(t=>{this.filmDetail=t.data})},formaTime(e){return moment(e).fromNow()},deleteComment(e){this.$cloudbase.callFunction({name:"shuiteApi",data:{id:e,event:"DELETE_FILM_COMMENT",secret:"gyc199700"}}).then(t=>{this.$ElMessage.success({message:"\u5220\u9664\u6210\u529F\u4E86!",type:"success"}),this.getComments()}).catch(console.error)}},components:[]}),V=e=>(w("data-v-1ebdf3cc"),e=e(),S(),e),J={class:"film-chats boxshadow"},P=V(()=>s("h3",null,"\u8BC4\u8BBA",-1)),R=["id"],K=["src"],Q={class:"chat-box-message"},W=V(()=>s("span",null,"\u6765\u81EA\u5FEB\u4E50\u661F\u7403",-1)),X=["onClick"],Z={class:"message"};function x(e,t,l,p,y,v){const _=i("el-empty");return o(),c("div",J,[P,(o(!0),c(C,null,z(e.filmDetail,m=>(o(),c("div",{class:"chat-box",id:m._id},[s("img",{src:"https://q1.qlogo.cn/g?b=qq&nk="+m.email+"&s=640"},null,8,K),s("div",Q,[s("p",null,r(m.nickname),1),s("p",null,[s("div",null,[W,s("span",null,r(e.formaTime(m.created)),1)]),e.auth?(o(),c("span",{key:0,onClick:D=>e.deleteComment(m._id),class:"chat-delete"},"\u5220\u9664",8,X)):d("",!0)]),s("div",Z,r(m.chat),1)])],8,R))),256)),e.filmDetail[0]?d("",!0):(o(),f(_,{key:0,description:"\u6682\u65E0\u7559\u8A00..."}))])}var ee=F(G,[["render",x],["__scopeId","data-v-1ebdf3cc"]]);const te=$({data(){return{input:""}},props:{filmid:String,filmname:String},methods:{submitChat(){if(this.input=="")return this.$ElMessage.error("\u4E0D\u53EF\u8F93\u5165\u4E3A\u7A7A\uFF01"),!1;const e=this.$auth.currentUser,t=this.$cloudbase.database();t.command,t.collection("chats").add({filmId:this.filmid,filmName:this.filmname,chatFrom:"film",chat:this.input,nickname:e.nickName,appVersion:navigator.appVersion,email:e.email,created:Date.now(),updated:Date.now(),isOk:1}).then(l=>{this.$emit("nochat"),this.$ElMessage.success({message:"\u5410\u69FD\u6210\u529F\u4E86!",type:"success"})})}},components:{}}),se={class:"film-gochat boxshadow"},ae=g("\u63D0\u4EA4");function ie(e,t,l,p,y,v){const _=i("el-input"),m=i("el-button");return o(),c("div",se,[a(_,{placeholder:"\u5410\u69FD\u4E00\u4E0B\u5427",modelValue:e.input,"onUpdate:modelValue":t[0]||(t[0]=D=>e.input=D),clearable:"",class:"shuite-search"},null,8,["modelValue"]),a(m,{onClick:e.submitChat,type:"small",style:{height:"40px","margin-left":"10px"}},{default:n(()=>[ae]),_:1},8,["onClick"])])}var le=F(te,[["render",ie],["__scopeId","data-v-d3bc1988"]]);const oe=$({data(){return{loading:!0,cloud:cloudbase.init({env:"yui-7gel1hqtaf6fb79d"}),dialogTableVisible:!1,userAuth:localStorage.getItem("user_auth"),isLoved:!1,textareaStyle:{border:0,padding:0,color:"black"},chating:!1,islogin:!1,preFilm:"",nextFilm:""}},setup(e){return{filmDetail:E(""),nickname:E("")}},created(){this.cloud.auth({persistence:"local"}),this.getFilmDetail(),JSON.parse(localStorage.getItem("login_type_yui-7gel1hqtaf6fb79d")).content=="EMAIL"&&(this.islogin=!0)},mounted(){},methods:{formatterTime(e,t,l,p){return moment(l).format("YYYY/MM/DD")},formatterTimeYear(e,t,l,p){return moment(e).format("YYYY")},getFilmDetail(e){this.$auth.getAuthHeader();const t=this.cloud.database();t.command,t.collection("shares").where({_id:e||this.$route.params.id}).orderBy("created","desc").limit(1).get().then(l=>{this.filmDetail=l.data[0],this.$refs.comment&&this.$refs.comment.getComments(),t.collection("user").where({_openid:this.filmDetail._openid}).get().then(p=>{this.nickname=p.data[0].nickname,this.getPreFilm(),this.getNextFilm(),t.collection("mylove").where({_openid:this.filmDetail._openid,filmId:this.filmDetail._id}).get().then(y=>{y.data[0]?this.isLoved=!0:this.isLoved=!1;let v=setTimeout(()=>{this.loading=!1,clearTimeout(v)},200);v=""})})})},getStar(e){const t=this.$auth.getAuthHeader(),l=this.$cloudbase.database();l.command,JSON.parse(localStorage.getItem("login_type_yui-7gel1hqtaf6fb79d")).content==="ANONYMOUS"?ElMessage.info("\u8BF7\u5148\u767B\u5F55\u54E6!!!"):l.collection("mylove").where({_openid:t.uid,filmId:e}).get().then(y=>{y.data[0]||l.collection("mylove").add({filmId:e,created:Date.now(),updated:Date.now()}).then(v=>{this.getFilmDetail(),this.$ElMessage.success({message:"\u6536\u85CF\u6210\u529F\u4E86!",type:"success"})})})},delStar(e){const t=this.$auth.getAuthHeader(),l=this.$cloudbase.database();l.command,l.collection("mylove").where({_openid:t.uid,filmId:e}).remove().then(p=>{this.getFilmDetail(),this.$ElMessage.success({message:"\u53D6\u6D88\u6536\u85CF\u4E86!",type:"success"})})},getPreFilm(){const e=this.$cloudbase.database(),t=e.command;e.collection("shares").where({created:t.gt(this.filmDetail.created)}).orderBy("created","asc").limit(1).get().then(l=>{this.preFilm=l.data})},getNextFilm(){console.log(this.filmDetail);const e=this.$cloudbase.database(),t=e.command;e.collection("shares").where({created:t.lt(this.filmDetail.created)}).orderBy("created","desc").limit(1).get().then(l=>{this.nextFilm=l.data})},toChat(){this.chating=!0},noChat(){this.chating=!1,this.$refs.comment.getComments()},hideDialog(){this.dialogTableVisible=!1,this.getFilmDetail()}},components:{"share-upload":O,"share-chats":ee,"share-gochat":le}}),h=e=>(w("data-v-32406535"),e=e(),S(),e),ne={class:"filmdetail"},de={style:{padding:"14px"}},re={style:{display:"flex","align-items":"center","justify-items":"space-between","margin-top":"16px",height:"16px"}},me={class:"share-box",id:"aaaaaa"},ue={class:"share-top"},ce=["src"],he={class:"share-message"},pe={class:"name"},_e=h(()=>s("span",null,"\u540D\u79F0:",-1)),fe={class:"fclass"},ge=h(()=>s("span",null,"\u7C7B\u578B:",-1)),ye={class:"jianjie"},ve=h(()=>s("span",null,"\u5E74\u4EFD:",-1)),be={class:"upload-time"},De=h(()=>s("span",null,"\u4E0A\u4F20\u65F6\u95F4:",-1)),Fe={class:"upload-owner"},$e=h(()=>s("span",null,"\u4E0A\u4F20\u8005:",-1)),ke={class:"rate",style:{display:"flex"}},Ee=h(()=>s("span",null,"\u8BC4\u5206:",-1)),Ce={class:"share-btn boxshadow"},we=["href"],Se={key:1,class:"share-vedio boxshadow"},Ve=h(()=>s("h3",null,"\u89C6\u9891",-1)),Ae=["src"],Be={class:"share-main boxshadow"},Te=h(()=>s("h3",null,"\u7B80\u4ECB",-1)),Ie=h(()=>s("h3",null,"\u63A8\u8350\u7406\u7531",-1)),Ne={class:"recommend boxshadow"},Me={class:"recommend-left"},Ye=g(" \u4E0A\u4E00\u4E2A "),Le={key:1},qe={class:"recommend-right"},He=g(" \u4E0B\u4E00\u4E2A "),Ue={key:1};function je(e,t,l,p,y,v){const _=i("el-skeleton-item"),m=i("el-rate"),D=i("paperclip"),b=i("el-icon"),A=i("star"),B=i("star-filled"),T=i("chat-round"),I=i("edit"),N=i("aim"),M=i("share-gochat"),Y=i("el-input"),L=i("share-chats"),k=i("router-link"),q=i("el-skeleton"),H=i("el-space"),U=i("share-upload"),j=i("el-dialog");return o(),c(C,null,[s("div",ne,[a(H,{direction:"vertical",alignment:"flex-start",class:"shuite-el-space"},{default:n(()=>[a(q,{rows:15,animated:"",loading:e.loading,class:"shuite-el-skeleton"},{template:n(()=>[a(_,{variant:"image",style:{height:"267px"},class:"shuite-el-skeleton-item"}),s("div",de,[a(_,{variant:"h3",style:{width:"50%"}}),s("div",re,[a(_,{variant:"text",style:{"margin-right":"16px"}}),a(_,{variant:"text",style:{width:"30%"}})])])]),default:n(()=>[s("div",me,[s("div",ue,[e.filmDetail?(o(),c("img",{key:0,src:e.filmDetail.tempFileURL},null,8,ce)):d("",!0),s("div",he,[s("div",pe,[_e,g(r(e.filmDetail.name),1)]),s("div",fe,[ge,g(r(e.filmDetail.class),1)]),s("div",ye,[ve,g(r(e.formatterTimeYear(e.filmDetail.year)),1)]),s("div",be,[De,g(r(e.formatterTime(e.filmDetail.created)),1)]),s("div",Fe,[$e,g(r(e.nickname),1)]),s("div",ke,[Ee,a(m,{modelValue:e.filmDetail.rateValue,"onUpdate:modelValue":t[0]||(t[0]=u=>e.filmDetail.rateValue=u),"allow-half":"","show-score":"",disabled:""},null,8,["modelValue"])])])]),s("div",Ce,[s("a",{href:e.filmDetail.link,target:"_blank"},[a(b,null,{default:n(()=>[a(D)]),_:1})],8,we),!e.isLoved&&e.islogin?(o(),f(b,{key:0,onClick:t[1]||(t[1]=u=>e.getStar(e.filmDetail._id))},{default:n(()=>[a(A)]),_:1})):d("",!0),e.isLoved&&e.islogin?(o(),f(b,{key:1,onClick:t[2]||(t[2]=u=>e.delStar(e.filmDetail._id))},{default:n(()=>[a(B,{style:{color:"#fcc"}})]),_:1})):d("",!0),e.islogin?(o(),f(b,{key:2,onClick:e.toChat},{default:n(()=>[a(T)]),_:1},8,["onClick"])):d("",!0),e.userAuth=="admin"?(o(),f(b,{key:3,onClick:t[3]||(t[3]=u=>e.dialogTableVisible=!0)},{default:n(()=>[a(I)]),_:1})):d("",!0),a(b,null,{default:n(()=>[a(N)]),_:1})]),e.chating?(o(),f(M,{key:0,filmid:e.filmDetail._id,filmname:e.filmDetail.name,onNochat:e.noChat,class:"boxshadow"},null,8,["filmid","filmname","onNochat"])):d("",!0),e.filmDetail.playlink?(o(),c("div",Se,[Ve,s("iframe",{src:"//player.bilibili.com/player.html?bvid="+e.filmDetail.playlink+"&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",class:"iframe-vedio"},`\r
              `,8,Ae)])):d("",!0),s("div",Be,[Te,a(Y,{type:"textarea",modelValue:e.filmDetail.jianjie,"onUpdate:modelValue":t[4]||(t[4]=u=>e.filmDetail.jianjie=u),autosize:"",readonly:"",resize:"none",autofocus:"false",style:{"margin-bottom":"20px"},"input-style":e.textareaStyle},null,8,["modelValue","input-style"]),Ie,s("p",null,r(e.filmDetail.liyou),1)]),a(L,{filmid:e.filmDetail._id,ref:"comment"},null,8,["filmid"]),s("div",Ne,[s("div",Me,[e.preFilm[0]?(o(),f(k,{key:0,to:"/share/detail/"+e.preFilm[0]._id,onClick:t[5]||(t[5]=u=>e.getFilmDetail(e.preFilm[0]._id))},{default:n(()=>[Ye]),_:1},8,["to"])):d("",!0),e.preFilm[0]?(o(),c("p",Le,r(e.preFilm[0].name),1)):d("",!0)]),s("div",qe,[e.nextFilm[0]?(o(),f(k,{key:0,to:"/share/detail/"+e.nextFilm[0]._id,onClick:t[6]||(t[6]=u=>e.getFilmDetail(e.nextFilm[0]._id))},{default:n(()=>[He]),_:1},8,["to"])):d("",!0),e.nextFilm[0]?(o(),c("p",Ue,r(e.nextFilm[0].name),1)):d("",!0)])])])]),_:1},8,["loading"])]),_:1})]),a(j,{title:"\u4FE1\u606F\u4FEE\u6539",modelValue:e.dialogTableVisible,"onUpdate:modelValue":t[7]||(t[7]=u=>e.dialogTableVisible=u),top:"5vh",fullscreen:""},{default:n(()=>[a(U,{type:"2",shareData:e.filmDetail,onHideDialog:e.hideDialog},null,8,["shareData","onHideDialog"])]),_:1},8,["modelValue"])],64)}var Je=F(oe,[["render",je],["__scopeId","data-v-32406535"]]);export{Je as default};