import{c as F,s as p,r,o as m,a as k,h as g,b as e,f as o,g as u,j as b,a7 as L,F as C,p as I,d as P,e as h}from"./vendor.893c1949.js";import{_ as j}from"./main.a421dcc7.js";const x={data(){return{dialogImageUrl:"",dialogVisible:!1,disabled:!1,fileList:[],radio:"\u5F71\u89C6\u5267",cloud:F.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,up:!1}},props:{type:String,filmsData:Object},setup(i){return{input:p(""),input2:p(""),input3:p(""),input4:p(""),playlink:p(""),year:p("2021"),rateValue:p(null),nickname:"",user:""}},created(){this.auth=this.cloud.auth({persistence:"local"});const i=this.auth.currentUser;this.user=i,this.filmsData&&(this.input=this.filmsData.name,this.input2=this.filmsData.link,this.input3=this.filmsData.jianjie,this.input4=this.filmsData.liyou,this.playlink=this.filmsData.playlink,this.radio=this.filmsData.class,this.rateValue=this.filmsData.rateValue,this.year=this.filmsData.year,this.fileList=[{name:this.filmsData.name,url:this.filmsData.tempFileURL,fileID:this.filmsData.fileID}])},methods:{handleRemove(i){this.$refs.upload.clearFiles()},handlePictureCardPreview(i){this.dialogImageUrl=i.url,this.dialogVisible=!0},handleDownload(i){console.log(i)},fileChange(i,l){this.fileList=l,console.log(l),this.up=!0},upload(){const i=this.cloud.database();i.collection("films").where({name:this.input}).get().then(l=>{l.data.length==0?this.fileList[0]?this.cloud.uploadFile({cloudPath:"saosite/"+Date.now()+"."+this.fileList[0].name,filePath:this.fileList[0].raw}).then(c=>{let s=[];s.push(c.fileID),this.cloud.getTempFileURL({fileList:s}).then(a=>{console.log(a.fileList),i.collection("films").add({class:this.radio,name:this.input,link:this.input2,jianjie:this.input3,liyou:this.input4,playlink:this.playlink,rateValue:this.rateValue,year:this.year,created:Date.now(),updated:Date.now(),fileID:a.fileID,owner:this.user.nickName,tempFileURL:a.fileList[0].tempFileURL}).then(d=>{this.$ElMessage.success({message:"\u606D\u559C\u4F60\uFF0C\u4E0A\u4F20\u6210\u529F\u4E86!",type:"success"}),NProgress.done();const _=this.auth.currentUser,f=i.command;i.collection("user").where({_openid:_.uid}).update({score:f.inc(1)}).then(D=>{console.log(D)}),this.input="",this.input2="",this.input3="",this.input4="",this.playlink="",this.$refs.upload.clearFiles(),this.radio="1"})})}):(this.$ElMessage.error("\u9519\u4E86\u54E6\uFF0C\u672A\u9009\u62E9\u56FE\u7247!"),NProgress.done()):this.$ElMessage.error("\u6570\u636E\u5DF2\u5B58\u5728!")})},test(){console.log(this.filmsData)},update(){NProgress.start();const i=this.cloud.database();this.up?this.cloud.uploadFile({cloudPath:"saosite/"+Date.now()+"."+this.fileList[0].name,filePath:this.fileList[0].raw}).then(l=>{let c=[];c.push(l.fileID),this.cloud.getTempFileURL({fileList:c}).then(s=>{console.log(s.fileList),i.collection("films").where({_id:this.filmsData._id}).update({class:this.radio,name:this.input,link:this.input2,jianjie:this.input3,liyou:this.input4,playlink:this.playlink,rateValue:this.rateValue,year:this.year,created:Date.now(),updated:Date.now(),owner:this.user.nickName,fileID:s.fileList[0].fileID,tempFileURL:s.fileList[0].tempFileURL}).then(a=>{this.$ElMessage.success({message:"\u606D\u559C\u4F60\uFF0C\u66F4\u65B0\u6210\u529F\u4E86!",type:"success"});let d=[];d.push(this.filmsData.fileID),console.log(d,"111"),this.cloud.deleteFile({fileList:d}).then(_=>{console.log(_.fileList)}),NProgress.done()})})}):i.collection("films").where({_id:this.filmsData._id}).update({class:this.radio,name:this.input,link:this.input2,jianjie:this.input3,rateValue:this.rateValue,year:this.year,liyou:this.input4,owner:this.user.nickName,playlink:this.playlink,updated:Date.now()}).then(l=>{this.$emit("hideDialog"),this.ElMessage.success({message:"\u606D\u559C\u4F60\uFF0C\u66F4\u65B0\u6210\u529F\u4E86!",type:"success"}),NProgress.done()})}},components:{}},n=i=>(I("data-v-32936af2"),i=i(),P(),i),N={key:0},R={class:"films-upload"},E={class:"films-upload-left"},B=n(()=>e("h3",{style:{}},"\u5C01\u9762(125*180)",-1)),K=n(()=>e("i",{class:"el-icon-plus"},null,-1)),M=["src"],S={class:"el-upload-list__item-actions",style:{display:"flex","align-items":"center"}},z=["onClick"],T=n(()=>e("i",{class:"el-icon-zoom-in"},null,-1)),q=[T],O=["onClick"],A=n(()=>e("i",{class:"el-icon-download"},null,-1)),G=[A],H=["onClick"],J=n(()=>e("i",{class:"el-icon-delete"},null,-1)),Q=[J],W={class:"upload-left-btn"},X=h("\u91CD\u7F6E"),Y=["src"],Z={class:"films-upload-right"},$=n(()=>e("h3",null,"\u57FA\u672C\u4FE1\u606F",-1)),ee={class:"input-item"},le=n(()=>e("span",null,"\u8BC4\u661F",-1)),te={class:"input-item-class"},ie={class:"input-item"},se=n(()=>e("span",null,"\u5E74\u4EFD",-1)),ae={class:"input-item-class"},oe={class:"input-item"},ne=n(()=>e("span",null,"\u7C7B\u522B",-1)),de={class:"input-item-div"},ue=h("\u5F71\u89C6\u5267"),ce=h("\u52A8\u6F2B"),pe=h("\u6E38\u620F"),re=h("\u5176\u4ED6"),he={class:"input-item"},me=n(()=>e("span",null,"\u540D\u79F0",-1)),_e={class:"input-item"},fe=n(()=>e("span",null,"\u94FE\u63A5",-1)),ye={class:"input-item"},ge=n(()=>e("span",null,"BV",-1)),Ve={class:"input-item"},ke=n(()=>e("span",null,"\u7B80\u4ECB",-1)),De={class:"input-item"},ve=n(()=>e("span",null,"\u7406\u7531",-1)),be=h("\u4E0A\u4F20"),Le=h("\u66F4\u65B0");function we(i,l,c,s,a,d){const _=r("el-upload"),f=r("el-button"),D=r("el-dialog"),w=r("el-rate"),U=r("el-date-picker"),V=r("el-radio"),y=r("el-input");return m(),k(C,null,[this.filmsData?g("",!0):(m(),k("h2",N,"\u4E0A\u4F20\u5F71\u89C6")),e("div",R,[e("div",E,[B,o(_,{action:"#","list-type":"picture-card","auto-upload":!1,limit:1,"file-list":a.fileList,ref:"upload","on-change":d.fileChange,class:"films-upload-img"},{default:u(()=>[K]),file:u(({file:t})=>[e("div",null,[e("img",{class:"el-upload-list__item-thumbnail",src:t.url,alt:""},null,8,M),e("span",S,[e("span",{class:"el-upload-list__item-preview",onClick:v=>d.handlePictureCardPreview(t)},q,8,z),a.disabled?g("",!0):(m(),k("span",{key:0,class:"el-upload-list__item-delete",onClick:v=>d.handleDownload(t)},G,8,O)),a.disabled?g("",!0):(m(),k("span",{key:1,class:"el-upload-list__item-delete",onClick:v=>d.handleRemove(t)},Q,8,H))])])]),_:1},8,["file-list","on-change"]),e("div",W,[o(f,{type:"primary",style:{"margin-top":"20px"},round:""},{default:u(()=>[X]),_:1})]),o(D,{modelValue:a.dialogVisible,"onUpdate:modelValue":l[0]||(l[0]=t=>a.dialogVisible=t)},{default:u(()=>[e("img",{src:a.dialogImageUrl,alt:"",height:"300"},null,8,Y)]),_:1},8,["modelValue"])]),e("div",Z,[$,e("div",ee,[le,e("div",te,[o(w,{modelValue:s.rateValue,"onUpdate:modelValue":l[1]||(l[1]=t=>s.rateValue=t),"allow-half":""},null,8,["modelValue"])])]),e("div",ie,[se,e("div",ae,[o(U,{modelValue:s.year,"onUpdate:modelValue":l[2]||(l[2]=t=>s.year=t),type:"year",placeholder:"\u9009\u62E9\u5E74"},null,8,["modelValue"])])]),e("div",oe,[ne,e("div",de,[o(V,{modelValue:a.radio,"onUpdate:modelValue":l[3]||(l[3]=t=>a.radio=t),label:"\u5F71\u89C6\u5267"},{default:u(()=>[ue]),_:1},8,["modelValue"]),o(V,{modelValue:a.radio,"onUpdate:modelValue":l[4]||(l[4]=t=>a.radio=t),label:"\u52A8\u6F2B"},{default:u(()=>[ce]),_:1},8,["modelValue"]),o(V,{modelValue:a.radio,"onUpdate:modelValue":l[5]||(l[5]=t=>a.radio=t),label:"\u6E38\u620F"},{default:u(()=>[pe]),_:1},8,["modelValue"]),o(V,{modelValue:a.radio,"onUpdate:modelValue":l[6]||(l[6]=t=>a.radio=t),label:"\u5176\u4ED6"},{default:u(()=>[re]),_:1},8,["modelValue"])])]),e("div",he,[me,o(y,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",modelValue:s.input,"onUpdate:modelValue":l[7]||(l[7]=t=>s.input=t),clearable:"",class:"film-input"},null,8,["modelValue"])]),e("div",_e,[fe,o(y,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",modelValue:s.input2,"onUpdate:modelValue":l[8]||(l[8]=t=>s.input2=t),clearable:"",class:"film-input"},null,8,["modelValue"])]),e("div",ye,[ge,o(y,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",modelValue:s.playlink,"onUpdate:modelValue":l[9]||(l[9]=t=>s.playlink=t),clearable:"",class:"film-input"},null,8,["modelValue"])]),e("div",Ve,[ke,o(y,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",type:"textarea",autosize:"",modelValue:s.input3,"onUpdate:modelValue":l[10]||(l[10]=t=>s.input3=t),clearable:"",class:"film-input"},null,8,["modelValue"])]),e("div",De,[ve,o(y,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",modelValue:s.input4,"onUpdate:modelValue":l[11]||(l[11]=t=>s.input4=t),type:"textarea",autosize:"",clearable:"",class:"film-input"},null,8,["modelValue"])]),c.type!=2?(m(),b(f,{key:0,type:"primary",style:{"margin-top":"20px"},onClick:d.upload,onKeyup:L(d.upload,["enter"]),round:""},{default:u(()=>[be]),_:1},8,["onClick","onKeyup"])):g("",!0),c.type==2?(m(),b(f,{key:1,type:"primary",style:{"margin-top":"20px"},onClick:d.update,onKeyup:L(d.update,["enter"]),round:""},{default:u(()=>[Le]),_:1},8,["onClick","onKeyup"])):g("",!0)])])],64)}var Ce=j(x,[["render",we],["__scopeId","data-v-32936af2"]]);export{Ce as default};
