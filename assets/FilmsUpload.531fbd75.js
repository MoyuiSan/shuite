import{d as e,i as l,a7 as i,a8 as a,a3 as t,a1 as s,f as n,g as o,p as u,S as d,a9 as p,Q as r}from"./vendor.6d187631.js";import{_ as c}from"./main.b607572e.js";const h={data:()=>({dialogImageUrl:"",dialogVisible:!1,disabled:!1,fileList:[],radio:"影视剧",cloud:e.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,up:!1}),props:{type:String,filmsData:Object},setup:e=>({input:l(""),input2:l(""),input3:l(""),input4:l(""),playlink:l(""),year:l("2021"),rateValue:l(null),nickname:"",user:""}),created(){this.auth=this.cloud.auth({persistence:"local"});const e=this.auth.currentUser;this.user=e,this.filmsData&&(this.input=this.filmsData.name,this.input2=this.filmsData.link,this.input3=this.filmsData.jianjie,this.input4=this.filmsData.liyou,this.playlink=this.filmsData.playlink,this.radio=this.filmsData.class,this.rateValue=this.filmsData.rateValue,this.year=this.filmsData.year,this.fileList=[{name:this.filmsData.name,url:this.filmsData.tempFileURL,fileID:this.filmsData.fileID}])},methods:{handleRemove(e){this.$refs.upload.clearFiles()},handlePictureCardPreview(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},handleDownload(e){console.log(e)},fileChange(e,l){this.fileList=l,console.log(l),this.up=!0},upload(){const e=this.cloud.database();e.collection("films").where({name:this.input}).get().then((l=>{0==l.data.length?this.fileList[0]?this.cloud.uploadFile({cloudPath:"saosite/"+Date.now()+"."+this.fileList[0].name,filePath:this.fileList[0].raw}).then((l=>{let i=[];i.push(l.fileID),this.cloud.getTempFileURL({fileList:i}).then((l=>{console.log(l.fileList),e.collection("films").add({class:this.radio,name:this.input,link:this.input2,jianjie:this.input3,liyou:this.input4,playlink:this.playlink,rateValue:this.rateValue,year:this.year,created:Date.now(),updated:Date.now(),fileID:l.fileID,owner:this.user.nickName,tempFileURL:l.fileList[0].tempFileURL}).then((l=>{c.success({message:"恭喜你，上传成功了!",type:"success"}),NProgress.done();const i=this.auth.currentUser,a=e.command;e.collection("user").where({_openid:i.uid}).update({score:a.inc(1)}).then((e=>{console.log(e)})),this.input="",this.input2="",this.input3="",this.input4="",this.playlink="",this.$refs.upload.clearFiles(),this.radio="1"}))}))})):(c.error("错了哦，未选择图片!"),NProgress.done()):c.error("数据已存在!")}))},test(){console.log(this.filmsData)},update(){NProgress.start();const e=this.cloud.database();this.up?this.cloud.uploadFile({cloudPath:"saosite/"+Date.now()+"."+this.fileList[0].name,filePath:this.fileList[0].raw}).then((l=>{let i=[];i.push(l.fileID),this.cloud.getTempFileURL({fileList:i}).then((l=>{console.log(l.fileList),e.collection("films").where({_id:this.filmsData._id}).update({class:this.radio,name:this.input,link:this.input2,jianjie:this.input3,liyou:this.input4,playlink:this.playlink,rateValue:this.rateValue,year:this.year,created:Date.now(),updated:Date.now(),owner:this.user.nickName,fileID:l.fileList[0].fileID,tempFileURL:l.fileList[0].tempFileURL}).then((e=>{c.success({message:"恭喜你，更新成功了!",type:"success"});let l=[];l.push(this.filmsData.fileID),console.log(l,"111"),this.cloud.deleteFile({fileList:l}).then((e=>{console.log(e.fileList)})),NProgress.done()}))}))})):e.collection("films").where({_id:this.filmsData._id}).update({class:this.radio,name:this.input,link:this.input2,jianjie:this.input3,rateValue:this.rateValue,year:this.year,liyou:this.input4,owner:this.user.nickName,playlink:this.playlink,updated:Date.now()}).then((e=>{this.$emit("hideDialog"),c.success({message:"恭喜你，更新成功了!",type:"success"}),NProgress.done()}))}},components:{}},m=p();i("data-v-a6aff69a");const f={class:"films-upload"},y=o("h3",null,"展示图(125*180)",-1),V=o("i",{class:"el-icon-plus"},null,-1),g={class:"el-upload-list__item-actions",style:{display:"flex","align-items":"center"}},D=o("i",{class:"el-icon-zoom-in"},null,-1),k=o("i",{class:"el-icon-download"},null,-1),_=o("i",{class:"el-icon-delete"},null,-1),L=o("h3",null,"基本信息",-1),U={class:"input-item"},b=o("span",null,"评星",-1),v={class:"input-item-class"},w={class:"input-item"},C=o("span",null,"年份",-1),I={class:"input-item-class"},P={class:"input-item"},F=o("span",null,"类别",-1),j={class:"input-item-div"},R=r("影视剧"),N=r("动漫"),x=r("游戏"),K=r("其他"),z={class:"input-item"},$=o("span",null,"名称",-1),S={class:"input-item"},T=o("span",null,"链接",-1),q={class:"input-item"},B=o("span",null,"BV",-1),O={class:"input-item"},Q=o("span",null,"简介",-1),A={class:"input-item"},E=o("span",null,"理由",-1),G=r("上传"),H=r("更新");a();const J=m(((e,l,i,a,p,r)=>{const c=t("el-upload"),h=t("el-dialog"),J=t("el-rate"),M=t("el-date-picker"),W=t("el-radio"),X=t("el-input"),Y=t("el-button");return s(),n("div",f,[y,o(c,{action:"#","list-type":"picture-card","auto-upload":!1,limit:1,"file-list":p.fileList,ref:"upload","on-change":r.fileChange,class:"films-upload-img"},{default:m((()=>[V])),file:m((({file:e})=>[o("div",null,[o("img",{class:"el-upload-list__item-thumbnail",src:e.url,alt:""},null,8,["src"]),o("span",g,[o("span",{class:"el-upload-list__item-preview",onClick:l=>r.handlePictureCardPreview(e)},[D],8,["onClick"]),p.disabled?u("",!0):(s(),n("span",{key:0,class:"el-upload-list__item-delete",onClick:l=>r.handleDownload(e)},[k],8,["onClick"])),p.disabled?u("",!0):(s(),n("span",{key:1,class:"el-upload-list__item-delete",onClick:l=>r.handleRemove(e)},[_],8,["onClick"]))])])])),_:1},8,["file-list","on-change"]),o(h,{modelValue:p.dialogVisible,"onUpdate:modelValue":l[1]||(l[1]=e=>p.dialogVisible=e)},{default:m((()=>[o("img",{src:p.dialogImageUrl,alt:"",height:"300"},null,8,["src"])])),_:1},8,["modelValue"]),L,o("div",U,[b,o("div",v,[o(J,{modelValue:a.rateValue,"onUpdate:modelValue":l[2]||(l[2]=e=>a.rateValue=e),"allow-half":""},null,8,["modelValue"])])]),o("div",w,[C,o("div",I,[o(M,{modelValue:a.year,"onUpdate:modelValue":l[3]||(l[3]=e=>a.year=e),type:"year",placeholder:"选择年"},null,8,["modelValue"])])]),o("div",P,[F,o("div",j,[o(W,{modelValue:p.radio,"onUpdate:modelValue":l[4]||(l[4]=e=>p.radio=e),label:"影视剧"},{default:m((()=>[R])),_:1},8,["modelValue"]),o(W,{modelValue:p.radio,"onUpdate:modelValue":l[5]||(l[5]=e=>p.radio=e),label:"动漫"},{default:m((()=>[N])),_:1},8,["modelValue"]),o(W,{modelValue:p.radio,"onUpdate:modelValue":l[6]||(l[6]=e=>p.radio=e),label:"游戏"},{default:m((()=>[x])),_:1},8,["modelValue"]),o(W,{modelValue:p.radio,"onUpdate:modelValue":l[7]||(l[7]=e=>p.radio=e),label:"其他"},{default:m((()=>[K])),_:1},8,["modelValue"])])]),o("div",z,[$,o(X,{placeholder:"请输入内容",modelValue:a.input,"onUpdate:modelValue":l[8]||(l[8]=e=>a.input=e),clearable:"",class:"film-input"},null,8,["modelValue"])]),o("div",S,[T,o(X,{placeholder:"请输入内容",modelValue:a.input2,"onUpdate:modelValue":l[9]||(l[9]=e=>a.input2=e),clearable:"",class:"film-input"},null,8,["modelValue"])]),o("div",q,[B,o(X,{placeholder:"请输入内容",modelValue:a.playlink,"onUpdate:modelValue":l[10]||(l[10]=e=>a.playlink=e),clearable:"",class:"film-input"},null,8,["modelValue"])]),o("div",O,[Q,o(X,{placeholder:"请输入内容",type:"textarea",autosize:"",modelValue:a.input3,"onUpdate:modelValue":l[11]||(l[11]=e=>a.input3=e),clearable:"",class:"film-input"},null,8,["modelValue"])]),o("div",A,[E,o(X,{placeholder:"请输入内容",modelValue:a.input4,"onUpdate:modelValue":l[12]||(l[12]=e=>a.input4=e),type:"textarea",autosize:"",clearable:"",class:"film-input"},null,8,["modelValue"])]),2!=i.type?(s(),n(Y,{key:0,type:"primary",style:{"margin-top":"20px"},onClick:r.upload,onKeyup:d(r.upload,["enter"])},{default:m((()=>[G])),_:1},8,["onClick","onKeyup"])):u("",!0),2==i.type?(s(),n(Y,{key:1,type:"primary",style:{"margin-top":"20px"},onClick:r.update,onKeyup:d(r.update,["enter"])},{default:m((()=>[H])),_:1},8,["onClick","onKeyup"])):u("",!0)])}));h.render=J,h.__scopeId="data-v-a6aff69a";export default h;
