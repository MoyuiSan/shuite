import{c as F,s as r,r as c,o as m,a as k,h as V,f as o,b as e,g as u,j as b,a8 as L,p as I,d as P,e as h}from"./vendor.3a7c3f84.js";import{_ as j}from"./main.bbe50dae.js";const x={data(){return{dialogImageUrl:"",dialogVisible:!1,disabled:!1,fileList:[],radio:"\u5F71\u89C6\u5267",cloud:F.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,up:!1}},props:{type:String,filmsData:Object},setup(i){return{input:r(""),input2:r(""),input3:r(""),input4:r(""),playlink:r(""),year:r("2021"),rateValue:r(null),nickname:"",user:""}},created(){this.auth=this.cloud.auth({persistence:"local"});const i=this.auth.currentUser;this.user=i,this.filmsData&&(this.input=this.filmsData.name,this.input2=this.filmsData.link,this.input3=this.filmsData.jianjie,this.input4=this.filmsData.liyou,this.playlink=this.filmsData.playlink,this.radio=this.filmsData.class,this.rateValue=this.filmsData.rateValue,this.year=this.filmsData.year,this.fileList=[{name:this.filmsData.name,url:this.filmsData.tempFileURL,fileID:this.filmsData.fileID}])},methods:{handleRemove(i){this.$refs.upload.clearFiles()},handlePictureCardPreview(i){this.dialogImageUrl=i.url,this.dialogVisible=!0},handleDownload(i){console.log(i)},fileChange(i,l){this.fileList=l,console.log(l),this.up=!0},upload(){const i=this.cloud.database();i.collection("films").where({name:this.input}).get().then(l=>{l.data.length==0?this.fileList[0]?this.cloud.uploadFile({cloudPath:"saosite/"+Date.now()+"."+this.fileList[0].name,filePath:this.fileList[0].raw}).then(p=>{let s=[];s.push(p.fileID),this.cloud.getTempFileURL({fileList:s}).then(a=>{console.log(a.fileList),i.collection("films").add({class:this.radio,name:this.input,link:this.input2,jianjie:this.input3,liyou:this.input4,playlink:this.playlink,rateValue:this.rateValue,year:this.year,created:Date.now(),updated:Date.now(),fileID:a.fileID,owner:this.user.nickName,tempFileURL:a.fileList[0].tempFileURL}).then(d=>{this.$ElMessage.success({message:"\u606D\u559C\u4F60\uFF0C\u4E0A\u4F20\u6210\u529F\u4E86!",type:"success"}),NProgress.done();const _=this.auth.currentUser,v=i.command;i.collection("user").where({_openid:_.uid}).update({score:v.inc(1)}).then(f=>{console.log(f)}),this.input="",this.input2="",this.input3="",this.input4="",this.playlink="",this.$refs.upload.clearFiles(),this.radio="1"})})}):(this.$ElMessage.error("\u9519\u4E86\u54E6\uFF0C\u672A\u9009\u62E9\u56FE\u7247!"),NProgress.done()):this.$ElMessage.error("\u6570\u636E\u5DF2\u5B58\u5728!")})},test(){console.log(this.filmsData)},update(){NProgress.start();const i=this.cloud.database();this.up?this.cloud.uploadFile({cloudPath:"saosite/"+Date.now()+"."+this.fileList[0].name,filePath:this.fileList[0].raw}).then(l=>{let p=[];p.push(l.fileID),this.cloud.getTempFileURL({fileList:p}).then(s=>{console.log(s.fileList),i.collection("films").where({_id:this.filmsData._id}).update({class:this.radio,name:this.input,link:this.input2,jianjie:this.input3,liyou:this.input4,playlink:this.playlink,rateValue:this.rateValue,year:this.year,created:Date.now(),updated:Date.now(),owner:this.user.nickName,fileID:s.fileList[0].fileID,tempFileURL:s.fileList[0].tempFileURL}).then(a=>{this.$ElMessage.success({message:"\u606D\u559C\u4F60\uFF0C\u66F4\u65B0\u6210\u529F\u4E86!",type:"success"});let d=[];d.push(this.filmsData.fileID),console.log(d,"111"),this.cloud.deleteFile({fileList:d}).then(_=>{console.log(_.fileList)}),NProgress.done()})})}):i.collection("films").where({_id:this.filmsData._id}).update({class:this.radio,name:this.input,link:this.input2,jianjie:this.input3,rateValue:this.rateValue,year:this.year,liyou:this.input4,owner:this.user.nickName,playlink:this.playlink,updated:Date.now()}).then(l=>{this.$emit("hideDialog"),this.ElMessage.success({message:"\u606D\u559C\u4F60\uFF0C\u66F4\u65B0\u6210\u529F\u4E86!",type:"success"}),NProgress.done()})}},components:{}},n=i=>(I("data-v-a1bd2fbc"),i=i(),P(),i),N={class:"films-upload"},R={key:0},E={class:"films-upload-main"},B={class:"films-upload-left"},K=n(()=>e("h3",{style:{}},"\u5C01\u9762(125*180)",-1)),M=n(()=>e("i",{class:"el-icon-plus"},null,-1)),S=["src"],z={class:"el-upload-list__item-actions",style:{display:"flex","align-items":"center"}},T=["onClick"],q=n(()=>e("i",{class:"el-icon-zoom-in"},null,-1)),O=[q],A=["onClick"],G=n(()=>e("i",{class:"el-icon-download"},null,-1)),H=[G],J=["onClick"],Q=n(()=>e("i",{class:"el-icon-delete"},null,-1)),W=[Q],X={class:"upload-left-btn"},Y=h("\u91CD\u7F6E"),Z=["src"],$={class:"films-upload-right"},ee=n(()=>e("h3",null,"\u57FA\u672C\u4FE1\u606F",-1)),le={class:"input-item"},te=n(()=>e("span",null,"\u8BC4\u661F",-1)),ie={class:"input-item-class"},se={class:"input-item"},ae=n(()=>e("span",null,"\u5E74\u4EFD",-1)),oe={class:"input-item-class"},ne={class:"input-item"},de=n(()=>e("span",null,"\u7C7B\u522B",-1)),ue={class:"input-item-div"},ce=h("\u5F71\u89C6\u5267"),pe=h("\u52A8\u6F2B"),re=h("\u6E38\u620F"),he=h("\u5176\u4ED6"),me={class:"input-item"},_e=n(()=>e("span",null,"\u540D\u79F0",-1)),fe={class:"input-item"},ye=n(()=>e("span",null,"\u94FE\u63A5",-1)),Ve={class:"input-item"},ge=n(()=>e("span",null,"BV",-1)),ke={class:"input-item"},ve=n(()=>e("span",null,"\u7B80\u4ECB",-1)),De={class:"input-item"},be=n(()=>e("span",null,"\u7406\u7531",-1)),Le=h("\u4E0A\u4F20"),we=h("\u66F4\u65B0");function Ue(i,l,p,s,a,d){const _=c("el-divider"),v=c("el-upload"),f=c("el-button"),w=c("el-dialog"),U=c("el-rate"),C=c("el-date-picker"),g=c("el-radio"),y=c("el-input");return m(),k("div",N,[this.filmsData?V("",!0):(m(),k("h2",R,"\u4E0A\u4F20\u5F71\u89C6")),o(_,{class:"timeline"}),e("div",E,[e("div",B,[K,o(v,{action:"#","list-type":"picture-card","auto-upload":!1,limit:1,"file-list":a.fileList,ref:"upload","on-change":d.fileChange,class:"films-upload-img"},{default:u(()=>[M]),file:u(({file:t})=>[e("div",null,[e("img",{class:"el-upload-list__item-thumbnail",src:t.url,alt:""},null,8,S),e("span",z,[e("span",{class:"el-upload-list__item-preview",onClick:D=>d.handlePictureCardPreview(t)},O,8,T),a.disabled?V("",!0):(m(),k("span",{key:0,class:"el-upload-list__item-delete",onClick:D=>d.handleDownload(t)},H,8,A)),a.disabled?V("",!0):(m(),k("span",{key:1,class:"el-upload-list__item-delete",onClick:D=>d.handleRemove(t)},W,8,J))])])]),_:1},8,["file-list","on-change"]),e("div",X,[o(f,{type:"primary",style:{"margin-top":"20px"},round:""},{default:u(()=>[Y]),_:1})]),o(w,{modelValue:a.dialogVisible,"onUpdate:modelValue":l[0]||(l[0]=t=>a.dialogVisible=t)},{default:u(()=>[e("img",{src:a.dialogImageUrl,alt:"",height:"300"},null,8,Z)]),_:1},8,["modelValue"])]),e("div",$,[ee,e("div",le,[te,e("div",ie,[o(U,{modelValue:s.rateValue,"onUpdate:modelValue":l[1]||(l[1]=t=>s.rateValue=t),"allow-half":""},null,8,["modelValue"])])]),e("div",se,[ae,e("div",oe,[o(C,{modelValue:s.year,"onUpdate:modelValue":l[2]||(l[2]=t=>s.year=t),type:"year",placeholder:"\u9009\u62E9\u5E74"},null,8,["modelValue"])])]),e("div",ne,[de,e("div",ue,[o(g,{modelValue:a.radio,"onUpdate:modelValue":l[3]||(l[3]=t=>a.radio=t),label:"\u5F71\u89C6\u5267"},{default:u(()=>[ce]),_:1},8,["modelValue"]),o(g,{modelValue:a.radio,"onUpdate:modelValue":l[4]||(l[4]=t=>a.radio=t),label:"\u52A8\u6F2B"},{default:u(()=>[pe]),_:1},8,["modelValue"]),o(g,{modelValue:a.radio,"onUpdate:modelValue":l[5]||(l[5]=t=>a.radio=t),label:"\u6E38\u620F"},{default:u(()=>[re]),_:1},8,["modelValue"]),o(g,{modelValue:a.radio,"onUpdate:modelValue":l[6]||(l[6]=t=>a.radio=t),label:"\u5176\u4ED6"},{default:u(()=>[he]),_:1},8,["modelValue"])])]),e("div",me,[_e,o(y,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",modelValue:s.input,"onUpdate:modelValue":l[7]||(l[7]=t=>s.input=t),clearable:"",class:"film-input"},null,8,["modelValue"])]),e("div",fe,[ye,o(y,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",modelValue:s.input2,"onUpdate:modelValue":l[8]||(l[8]=t=>s.input2=t),clearable:"",class:"film-input"},null,8,["modelValue"])]),e("div",Ve,[ge,o(y,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",modelValue:s.playlink,"onUpdate:modelValue":l[9]||(l[9]=t=>s.playlink=t),clearable:"",class:"film-input"},null,8,["modelValue"])]),e("div",ke,[ve,o(y,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",type:"textarea",autosize:"",modelValue:s.input3,"onUpdate:modelValue":l[10]||(l[10]=t=>s.input3=t),clearable:"",class:"film-input"},null,8,["modelValue"])]),e("div",De,[be,o(y,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",modelValue:s.input4,"onUpdate:modelValue":l[11]||(l[11]=t=>s.input4=t),type:"textarea",autosize:"",clearable:"",class:"film-input"},null,8,["modelValue"])]),p.type!=2?(m(),b(f,{key:0,type:"primary",style:{"margin-top":"20px"},onClick:d.upload,onKeyup:L(d.upload,["enter"]),round:""},{default:u(()=>[Le]),_:1},8,["onClick","onKeyup"])):V("",!0),p.type==2?(m(),b(f,{key:1,type:"primary",style:{"margin-top":"20px"},onClick:d.update,onKeyup:L(d.update,["enter"]),round:""},{default:u(()=>[we]),_:1},8,["onClick","onKeyup"])):V("",!0)])])])}var Ie=j(x,[["render",Ue],["__scopeId","data-v-a1bd2fbc"]]);export{Ie as default};
