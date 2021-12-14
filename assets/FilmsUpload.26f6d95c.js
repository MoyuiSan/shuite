import{c as N,s as r,r as u,o as m,a as b,h as g,j as L,b as l,f as a,g as n,aa as U,p as R,d as E,e as h}from"./vendor.c71fd20d.js";import{_ as B}from"./main.22792a72.js";const K={data(){return{dialogImageUrl:"",dialogVisible:!1,disabled:!1,fileList:[],radio:"\u5F71\u89C6\u5267",cloud:N.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,up:!1}},props:{type:String,filmsData:Object},setup(i){return{input:r(""),input2:r(""),input3:r(""),input4:r(""),playlink:r(""),year:r("2021"),rateValue:r(null),nickname:"",user:""}},created(){this.auth=this.cloud.auth({persistence:"local"});const i=this.auth.currentUser;this.user=i,this.filmsData&&(this.input=this.filmsData.name,this.input2=this.filmsData.link,this.input3=this.filmsData.jianjie,this.input4=this.filmsData.liyou,this.playlink=this.filmsData.playlink,this.radio=this.filmsData.class,this.rateValue=this.filmsData.rateValue,this.year=this.filmsData.year,this.fileList=[{name:this.filmsData.name,url:this.filmsData.tempFileURL,fileID:this.filmsData.fileID}]),this.debouncedClick=_.debounce(this.upload,500)},unmounted(){this.debouncedClick.cancel()},methods:{handleRemove(i){this.$refs.upload.clearFiles()},handlePictureCardPreview(i){this.dialogImageUrl=i.url,this.dialogVisible=!0},handleDownload(i){console.log(i)},fileChange(i,e){this.fileList=e,console.log(e),this.up=!0},upload(){const i=this.cloud.database();i.collection("films").where({name:this.input}).get().then(e=>{e.data.length==0?this.fileList[0]?this.cloud.uploadFile({cloudPath:"saosite/"+Date.now()+"."+this.fileList[0].name,filePath:this.fileList[0].raw}).then(c=>{let s=[];s.push(c.fileID),this.cloud.getTempFileURL({fileList:s}).then(o=>{console.log(o.fileList),i.collection("films").add({class:this.radio,name:this.input,link:this.input2,jianjie:this.input3,liyou:this.input4,playlink:this.playlink,rateValue:this.rateValue,year:this.year,created:Date.now(),updated:Date.now(),fileID:o.fileID,owner:this.user.nickName,tempFileURL:o.fileList[0].tempFileURL}).then(d=>{this.$ElMessage.success({message:"\u606D\u559C\u4F60\uFF0C\u4E0A\u4F20\u6210\u529F\u4E86!",type:"success"}),NProgress.done();const f=this.auth.currentUser,D=i.command;i.collection("user").where({_openid:f.uid}).update({score:D.inc(1)}).then(y=>{console.log(y)}),this.input="",this.input2="",this.input3="",this.input4="",this.playlink="",this.$refs.upload.clearFiles(),this.radio="1"})})}):(this.$ElMessage.error("\u9519\u4E86\u54E6\uFF0C\u672A\u9009\u62E9\u56FE\u7247!"),NProgress.done()):this.$ElMessage.error("\u6570\u636E\u5DF2\u5B58\u5728!")})},test(){console.log(this.filmsData)},update(){const i=this.cloud.database();this.up?this.cloud.uploadFile({cloudPath:"saosite/"+Date.now()+"."+this.fileList[0].name,filePath:this.fileList[0].raw}).then(e=>{let c=[];c.push(e.fileID),this.cloud.getTempFileURL({fileList:c}).then(s=>{console.log(s.fileList),i.collection("films").where({_id:this.filmsData._id}).update({class:this.radio,name:this.input,link:this.input2,jianjie:this.input3,liyou:this.input4,playlink:this.playlink,rateValue:this.rateValue,year:this.year,created:Date.now(),updated:Date.now(),owner:this.user.nickName,fileID:s.fileList[0].fileID,tempFileURL:s.fileList[0].tempFileURL}).then(o=>{this.$ElMessage.success({message:"\u606D\u559C\u4F60\uFF0C\u66F4\u65B0\u6210\u529F\u4E86!",type:"success"});let d=[];d.push(this.filmsData.fileID),console.log(d,"111"),this.cloud.deleteFile({fileList:d}).then(f=>{console.log(f.fileList)}),NProgress.done()})})}):i.collection("films").where({_id:this.filmsData._id}).update({class:this.radio,name:this.input,link:this.input2,jianjie:this.input3,rateValue:this.rateValue,year:this.year,liyou:this.input4,owner:this.user.nickName,playlink:this.playlink,updated:Date.now()}).then(e=>{this.$emit("hideDialog"),this.$ElMessage.success({message:"\u606D\u559C\u4F60\uFF0C\u66F4\u65B0\u6210\u529F\u4E86!",type:"success"}),NProgress.done()})}},components:{}},p=i=>(R("data-v-6f1437f8"),i=i(),E(),i),M={class:"films-upload"},z={key:0},S={class:"films-upload-main"},T={class:"films-upload-left"},q=p(()=>l("h3",{style:{}},"\u5C01\u9762(125*180)",-1)),O=["src"],A={class:"el-upload-list__item-actions",style:{display:"flex","align-items":"center"}},G=["onClick"],H=["onClick"],J={class:"upload-left-btn"},Q=h("\u91CD\u7F6E"),W=["src"],X={class:"films-upload-right"},Y=p(()=>l("h3",null,"\u57FA\u672C\u4FE1\u606F",-1)),Z={class:"input-item"},$=p(()=>l("span",null,"\u8BC4\u661F",-1)),ee={class:"input-item-class"},le={class:"input-item"},te=p(()=>l("span",null,"\u5E74\u4EFD",-1)),ie={class:"input-item-class"},se={class:"input-item"},ae=p(()=>l("span",null,"\u7C7B\u522B",-1)),oe={class:"input-item-div"},ne=h("\u5F71\u89C6\u5267"),de=h("\u52A8\u6F2B"),ue=h("\u6E38\u620F"),pe=h("\u5176\u4ED6"),ce={class:"input-item"},re=p(()=>l("span",null,"\u540D\u79F0",-1)),he={class:"input-item"},me=p(()=>l("span",null,"\u94FE\u63A5",-1)),_e={class:"input-item"},fe=p(()=>l("span",null,"BV",-1)),ye={class:"input-item"},Ve=p(()=>l("span",null,"\u7B80\u4ECB",-1)),ge={class:"input-item"},ke=p(()=>l("span",null,"\u7406\u7531",-1)),De=h("\u4E0A\u4F20"),ve=h("\u66F4\u65B0");function be(i,e,c,s,o,d){const f=u("el-divider"),D=u("plus"),y=u("el-icon"),w=u("zoom-in"),C=u("delete"),F=u("el-upload"),v=u("el-button"),I=u("el-dialog"),j=u("el-rate"),x=u("el-date-picker"),k=u("el-radio"),V=u("el-input");return m(),b("div",M,[this.filmsData?g("",!0):(m(),b("h2",z,"\u4E0A\u4F20\u5F71\u89C6")),this.filmsData?g("",!0):(m(),L(f,{key:1,class:"timeline"})),l("div",S,[l("div",T,[q,a(F,{action:"#","list-type":"picture-card","auto-upload":!1,limit:1,"file-list":o.fileList,ref:"upload","on-change":d.fileChange,class:"films-upload-img"},{default:n(()=>[a(y,null,{default:n(()=>[a(D)]),_:1})]),file:n(({file:t})=>[l("div",null,[l("img",{class:"el-upload-list__item-thumbnail",src:t.url,alt:""},null,8,O),l("span",A,[l("span",{class:"el-upload-list__item-preview",onClick:P=>d.handlePictureCardPreview(t)},[a(y,null,{default:n(()=>[a(w)]),_:1})],8,G),o.disabled?g("",!0):(m(),b("span",{key:0,class:"el-upload-list__item-delete",onClick:P=>d.handleRemove(t)},[a(y,null,{default:n(()=>[a(C)]),_:1})],8,H))])])]),_:1},8,["file-list","on-change"]),l("div",J,[a(v,{type:"primary",style:{"margin-top":"20px"},round:""},{default:n(()=>[Q]),_:1})]),a(I,{modelValue:o.dialogVisible,"onUpdate:modelValue":e[0]||(e[0]=t=>o.dialogVisible=t)},{default:n(()=>[l("img",{src:o.dialogImageUrl,alt:"",height:"300"},null,8,W)]),_:1},8,["modelValue"])]),l("div",X,[Y,l("div",Z,[$,l("div",ee,[a(j,{modelValue:s.rateValue,"onUpdate:modelValue":e[1]||(e[1]=t=>s.rateValue=t),"allow-half":""},null,8,["modelValue"])])]),l("div",le,[te,l("div",ie,[a(x,{modelValue:s.year,"onUpdate:modelValue":e[2]||(e[2]=t=>s.year=t),type:"year",placeholder:"\u9009\u62E9\u5E74"},null,8,["modelValue"])])]),l("div",se,[ae,l("div",oe,[a(k,{modelValue:o.radio,"onUpdate:modelValue":e[3]||(e[3]=t=>o.radio=t),label:"\u5F71\u89C6\u5267"},{default:n(()=>[ne]),_:1},8,["modelValue"]),a(k,{modelValue:o.radio,"onUpdate:modelValue":e[4]||(e[4]=t=>o.radio=t),label:"\u52A8\u6F2B"},{default:n(()=>[de]),_:1},8,["modelValue"]),a(k,{modelValue:o.radio,"onUpdate:modelValue":e[5]||(e[5]=t=>o.radio=t),label:"\u6E38\u620F"},{default:n(()=>[ue]),_:1},8,["modelValue"]),a(k,{modelValue:o.radio,"onUpdate:modelValue":e[6]||(e[6]=t=>o.radio=t),label:"\u5176\u4ED6"},{default:n(()=>[pe]),_:1},8,["modelValue"])])]),l("div",ce,[re,a(V,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",modelValue:s.input,"onUpdate:modelValue":e[7]||(e[7]=t=>s.input=t),clearable:"",class:"film-input"},null,8,["modelValue"])]),l("div",he,[me,a(V,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",modelValue:s.input2,"onUpdate:modelValue":e[8]||(e[8]=t=>s.input2=t),clearable:"",class:"film-input"},null,8,["modelValue"])]),l("div",_e,[fe,a(V,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",modelValue:s.playlink,"onUpdate:modelValue":e[9]||(e[9]=t=>s.playlink=t),clearable:"",class:"film-input"},null,8,["modelValue"])]),l("div",ye,[Ve,a(V,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",type:"textarea",autosize:"",modelValue:s.input3,"onUpdate:modelValue":e[10]||(e[10]=t=>s.input3=t),clearable:"",class:"film-input"},null,8,["modelValue"])]),l("div",ge,[ke,a(V,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",modelValue:s.input4,"onUpdate:modelValue":e[11]||(e[11]=t=>s.input4=t),type:"textarea",autosize:"",clearable:"",class:"film-input"},null,8,["modelValue"])]),c.type!=2?(m(),L(v,{key:0,type:"primary",style:{"margin-top":"20px"},onClick:d.upload,onKeyup:U(d.upload,["enter"]),round:""},{default:n(()=>[De]),_:1},8,["onClick","onKeyup"])):g("",!0),c.type==2?(m(),L(v,{key:1,type:"primary",style:{"margin-top":"20px"},onClick:d.update,onKeyup:U(d.update,["enter"]),round:""},{default:n(()=>[ve]),_:1},8,["onClick","onKeyup"])):g("",!0)])])])}var we=B(K,[["render",be],["__scopeId","data-v-6f1437f8"]]);export{we as default};
