import{D as a}from"./index.4b4090ef.js";import{S as e}from"./index.56116ab8.js";import{a6 as t,a7 as s,a1 as l,$ as i,f as n,g as o,F as r,J as c,v as d,a8 as m}from"./vendor.afe498d6.js";const h={data:()=>({zhuifanData:[],scrollReveal:e()}),created(){NProgress.start();const e=moment().format("YYYYMMDD");localStorage.getItem("bangumi_get_time")===e?(this.zhuifanData=JSON.parse(localStorage.getItem("bangumi_list")).list,localStorage.setItem("bangumi_get_time",e),this.$nextTick((()=>{this.initScrollReveal()})),NProgress.done()):a.get("https://698f6214-f151-4144-a617-9e6e592c19f9.bspapp.com/http/zhuifan").then((a=>{this.zhuifanData=a.data.data.data.list,localStorage.setItem("bangumi_list",JSON.stringify(a.data.data.data)),localStorage.setItem("bangumi_get_time",e),this.$nextTick((()=>{this.initScrollReveal(),NProgress.done()}))}))},methods:{initScrollReveal(){this.scrollReveal.reveal(".reveal-top",{duration:500,delay:100,origin:"bottom",reset:!1,mobile:!1,distance:"100px",opacity:.001,easing:"ease",scale:.9})}},components:{}},u=m("data-v-20ba9bea");t("data-v-20ba9bea");const g={class:"zhuifan"},p={class:"zhuifan-box"},f=o("div",{class:"zhuifan-hot"},null,-1),b={class:"zhuifan-box-item reveal-top"},v=o("div",{class:"image-slot",style:{width:"125px",height:"100%"}},null,-1),_={class:"item-message"},x={style:{position:"relative"},class:"look"},S=o("button",null,"观看",-1),z={class:"item-jianjie"};s();const y=u(((a,e,t,s,m,h)=>{const y=l("el-image");return i(),n("div",g,[o("div",p,[f,(i(!0),n(r,null,c(m.zhuifanData,((a,e)=>(i(),n("div",b,[o(y,{src:a.cover,style:{width:"125px",height:"100%"},lazy:"",referrerpolicy:"no-referrer"},{placeholder:u((()=>[v])),_:2},1032,["src"]),o("div",_,[o("span",null,"名字:"+d(a.title),1),o("span",null,"模式:"+d(a.badge),1),o("span",null,"集数:"+d(a.new_ep.index_show),1),o("span",null,"标签:"+d(a.subtitle?a.subtitle:"暂无"),1),o("span",null,"更新:"+d(a.renewal_time?a.renewal_time:"暂无"),1),o("span",null,"发布:"+d(a.publish.release_date_show),1)]),o("div",x,[o("a",{href:a.url,target:"_blank"},[S],8,["href"]),o("div",z,"简介:"+d(a.evaluate),1)])])))),256))])])}));h.render=y,h.__scopeId="data-v-20ba9bea";export default h;
