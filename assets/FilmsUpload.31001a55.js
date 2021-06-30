import{h as e}from"./index.e4fe5246.js";import{d as l,i,a6 as t,a7 as a,a1 as s,$ as o,f as n,g as u,p as d,a8 as p,Q as h}from"./vendor.7cb940fd.js";const r={data:()=>({dialogImageUrl:"",dialogVisible:!1,disabled:!1,fileList:[],radio:"1",cloud:l.init({env:"yui-7gel1hqtaf6fb79d"}),auth:null,up:!1}),props:{type:String,filmsData:Object},setup:e=>({input:i(""),input2:i(""),input3:i(""),input4:i(""),year:i("2021"),rateValue:i(null),nickname:""}),created(){this.auth=this.cloud.auth({persistence:"local"}),this.filmsData&&(this.input=this.filmsData.name,this.input2=this.filmsData.link,this.input3=this.filmsData.jianjie,this.input4=this.filmsData.liyou,this.radio=this.filmsData.class,this.rateValue=this.filmsData.rateValue,this.year=this.filmsData.year,this.fileList=[{name:this.filmsData.name,url:this.filmsData.tempFileURL,fileID:this.filmsData.fileID}])},methods:{handleRemove(e){this.$refs.upload.clearFiles()},handlePictureCardPreview(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},handleDownload(e){console.log(e)},fileChange(e,l){this.fileList=l,console.log(l),this.up=!0},insertNewData(l){db.collection("films").add({class:this.radio,name:this.input,link:this.input2,jianjie:this.input3,liyou:this.input4,rate:this.rateValue,year:this.year,created:Date.now(),updated:Date.now(),fileID:l.fileID,tempFileURL:l.fileList[0].tempFileURL}).then((l=>{e.success({message:"恭喜你，上传成功了!",type:"success"}),NProgress.done(),this.input="",this.input2="",this.input3="",this.input4="",this.$refs.upload.clearFiles(),this.radio="1",this.rateValue="0",this.year="2021"}))},upload(){NProgress.start();const l=this.cloud.database();this.fileList[0]?this.cloud.uploadFile({cloudPath:"saosite/"+Date.now()+"."+this.fileList[0].name,filePath:this.fileList[0].raw}).then((i=>{let t=[];t.push(i.fileID),this.cloud.getTempFileURL({fileList:t}).then((i=>{console.log(i.fileList),l.collection("films").add({class:this.radio,name:this.input,link:this.input2,jianjie:this.input3,liyou:this.input4,rateValue:this.rateValue,year:this.year,created:Date.now(),updated:Date.now(),fileID:i.fileID,tempFileURL:i.fileList[0].tempFileURL}).then((l=>{e.success({message:"恭喜你，上传成功了!",type:"success"}),NProgress.done(),this.input="",this.input2="",this.input3="",this.input4="",this.$refs.upload.clearFiles(),this.radio="1"}))}))})):(e.error("错了哦，未选择图片!"),NProgress.done())},test(){console.log(this.filmsData)},update(){NProgress.start();const l=this.cloud.database();this.up?this.cloud.uploadFile({cloudPath:"saosite/"+Date.now()+"."+this.fileList[0].name,filePath:this.fileList[0].raw}).then((i=>{let t=[];t.push(i.fileID),this.cloud.getTempFileURL({fileList:t}).then((i=>{console.log(i.fileList),l.collection("films").where({_id:this.filmsData._id}).update({class:this.radio,name:this.input,link:this.input2,jianjie:this.input3,liyou:this.input4,rateValue:this.rateValue,year:this.year,created:Date.now(),updated:Date.now(),fileID:i.fileList[0].fileID,tempFileURL:i.fileList[0].tempFileURL}).then((l=>{e.success({message:"恭喜你，更新成功了!",type:"success"});let i=[];i.push(this.filmsData.fileID),console.log(i,"111"),this.cloud.deleteFile({fileList:i}).then((e=>{console.log(e.fileList)})),NProgress.done()}))}))})):l.collection("films").where({_id:this.filmsData._id}).update({class:this.radio,name:this.input,link:this.input2,jianjie:this.input3,rateValue:this.rateValue,year:this.year,liyou:this.input4,updated:Date.now()}).then((l=>{e.success({message:"恭喜你，更新成功了!",type:"success"}),NProgress.done()}))}},components:{}},c=p();t("data-v-6b906a71");const m={class:"films-upload"},f=u("h3",null,"展示图(125*180)",-1),y=u("i",{class:"el-icon-plus"},null,-1),V={class:"el-upload-list__item-actions",style:{display:"flex","align-items":"center"}},g=u("i",{class:"el-icon-zoom-in"},null,-1),D=u("i",{class:"el-icon-download"},null,-1),L=u("i",{class:"el-icon-delete"},null,-1),w=u("h3",null,"基本信息",-1),b={class:"input-item"},_=u("span",null,"评星",-1),U={style:{width:"400px",display:"flex"}},v={class:"input-item"},k=u("span",null,"年份",-1),x={style:{width:"400px",display:"flex"}},F={class:"input-item"},I=u("span",null,"类别",-1),P={class:"input-item-div"},C=h("电视剧"),j=h("动漫"),R=h("游戏"),N=h("其他"),$={class:"input-item"},z=u("span",null,"名称",-1),T={class:"input-item"},q=u("span",null,"链接",-1),O={class:"input-item"},Q=u("span",null,"简介",-1),S={class:"input-item"},A=u("span",null,"理由",-1),B=h("上传"),E=h("更新");a();const G=c(((e,l,i,t,a,p)=>{const h=s("el-upload"),r=s("el-dialog"),G=s("el-rate"),H=s("el-date-picker"),J=s("el-radio"),K=s("el-input"),M=s("el-button");return o(),n("div",m,[f,u(h,{action:"#","list-type":"picture-card","auto-upload":!1,limit:1,"file-list":a.fileList,ref:"upload","on-change":p.fileChange},{default:c((()=>[y])),file:c((({file:e})=>[u("div",null,[u("img",{class:"el-upload-list__item-thumbnail",src:e.url,alt:""},null,8,["src"]),u("span",V,[u("span",{class:"el-upload-list__item-preview",onClick:l=>p.handlePictureCardPreview(e)},[g],8,["onClick"]),a.disabled?d("",!0):(o(),n("span",{key:0,class:"el-upload-list__item-delete",onClick:l=>p.handleDownload(e)},[D],8,["onClick"])),a.disabled?d("",!0):(o(),n("span",{key:1,class:"el-upload-list__item-delete",onClick:l=>p.handleRemove(e)},[L],8,["onClick"]))])])])),_:1},8,["file-list","on-change"]),u(r,{modelValue:a.dialogVisible,"onUpdate:modelValue":l[1]||(l[1]=e=>a.dialogVisible=e)},{default:c((()=>[u("img",{src:a.dialogImageUrl,alt:"",height:"300"},null,8,["src"])])),_:1},8,["modelValue"]),w,u("div",b,[_,u("div",U,[u(G,{modelValue:t.rateValue,"onUpdate:modelValue":l[2]||(l[2]=e=>t.rateValue=e),"allow-half":""},null,8,["modelValue"])])]),u("div",v,[k,u("div",x,[u(H,{modelValue:t.year,"onUpdate:modelValue":l[3]||(l[3]=e=>t.year=e),type:"year",placeholder:"选择年"},null,8,["modelValue"])])]),u("div",F,[I,u("div",P,[u(J,{modelValue:a.radio,"onUpdate:modelValue":l[4]||(l[4]=e=>a.radio=e),label:"1"},{default:c((()=>[C])),_:1},8,["modelValue"]),u(J,{modelValue:a.radio,"onUpdate:modelValue":l[5]||(l[5]=e=>a.radio=e),label:"2"},{default:c((()=>[j])),_:1},8,["modelValue"]),u(J,{modelValue:a.radio,"onUpdate:modelValue":l[6]||(l[6]=e=>a.radio=e),label:"3"},{default:c((()=>[R])),_:1},8,["modelValue"]),u(J,{modelValue:a.radio,"onUpdate:modelValue":l[7]||(l[7]=e=>a.radio=e),label:"4"},{default:c((()=>[N])),_:1},8,["modelValue"])])]),u("div",$,[z,u(K,{placeholder:"请输入内容",modelValue:t.input,"onUpdate:modelValue":l[8]||(l[8]=e=>t.input=e),clearable:"",style:{width:"400px"}},null,8,["modelValue"])]),u("div",T,[q,u(K,{placeholder:"请输入内容",modelValue:t.input2,"onUpdate:modelValue":l[9]||(l[9]=e=>t.input2=e),clearable:"",style:{width:"400px"}},null,8,["modelValue"])]),u("div",O,[Q,u(K,{placeholder:"请输入内容",type:"textarea",autosize:"",modelValue:t.input3,"onUpdate:modelValue":l[10]||(l[10]=e=>t.input3=e),clearable:"",style:{width:"400px"}},null,8,["modelValue"])]),u("div",S,[A,u(K,{placeholder:"请输入内容",modelValue:t.input4,"onUpdate:modelValue":l[11]||(l[11]=e=>t.input4=e),type:"textarea",autosize:"",clearable:"",style:{width:"400px"}},null,8,["modelValue"])]),2!=i.type?(o(),n(M,{key:0,type:"primary",style:{"margin-top":"20px"},onClick:p.upload},{default:c((()=>[B])),_:1},8,["onClick"])):d("",!0),2==i.type?(o(),n(M,{key:1,type:"primary",style:{"margin-top":"20px"},onClick:p.update},{default:c((()=>[E])),_:1},8,["onClick"])):d("",!0)])}));r.render=G,r.__scopeId="data-v-6b906a71";export default r;
