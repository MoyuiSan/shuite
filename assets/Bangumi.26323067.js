import{S as a,D as e}from"./main.584339ff.js";import{a7 as t,a8 as s,a3 as l,a1 as i,f as o,p as n,F as r,J as c,g as d,v as h,a9 as g}from"./vendor.6d187631.js";const p={data:()=>({zhuifanData:[],scrollReveal:a(),loading:!0}),created(){NProgress.start();const a=moment().format("YYYYMMDD");localStorage.getItem("bangumi_get_time")===a?(this.zhuifanData=JSON.parse(localStorage.getItem("bangumi_list")).list,localStorage.setItem("bangumi_get_time",a),this.$nextTick((()=>{this.initScrollReveal(),this.loading=!1})),NProgress.done()):e.get("https://698f6214-f151-4144-a617-9e6e592c19f9.bspapp.com/http/zhuifan").then((e=>{this.zhuifanData=e.data.data.data.list,localStorage.setItem("bangumi_list",JSON.stringify(e.data.data.data)),localStorage.setItem("bangumi_get_time",a),this.$nextTick((()=>{this.initScrollReveal(),this.loading=!1,NProgress.done()}))}))},methods:{initScrollReveal(){this.scrollReveal.reveal(".reveal-top",{duration:500,delay:100,origin:"bottom",reset:!1,mobile:!1,distance:"100px",opacity:.001,easing:"ease",scale:.9})}},components:{}},m=g();t("data-v-6830c32a");const u={class:"zhuifan"},f={key:1,class:"zhuifan-box"},v=d("h3",{style:{width:"100%"}},"我的追番列表",-1),_=d("div",{class:"zhuifan-hot"},null,-1),b={class:"zhuifan-box-item reveal-top"},y=d("div",{class:"image-slot",style:{width:"125px",height:"100%"}},null,-1),x={class:"item-message"},S={style:{position:"relative"},class:"look"},w=d("button",null,"观看",-1),z={class:"item-jianjie"};s();const k=m(((a,e,t,s,g,p)=>{const k=l("lottie-player"),D=l("el-image");return i(),o("div",u,[g.loading?(i(),o(k,{key:0,src:"https://assets1.lottiefiles.com/packages/lf20_gmswat4t.json",background:"transparent",speed:"1",style:{width:"300px",height:"300px",color:"black",margin:"0 auto"},loop:"",autoplay:""})):n("",!0),g.loading?n("",!0):(i(),o("div",f,[v,_,(i(!0),o(r,null,c(g.zhuifanData,((a,e)=>(i(),o("div",b,[d(D,{src:a.cover,style:{width:"125px",height:"100%"},lazy:"",referrerpolicy:"no-referrer"},{placeholder:m((()=>[y])),_:2},1032,["src"]),d("div",x,[d("span",null,"名字:"+h(a.title),1),d("span",null,"模式:"+h(a.badge),1),d("span",null,"集数:"+h(a.new_ep.index_show),1),d("span",null,"标签:"+h(a.subtitle?a.subtitle:"暂无"),1),d("span",null,"更新:"+h(a.renewal_time?a.renewal_time:"暂无"),1),d("span",null,"发布:"+h(a.publish.release_date_show),1)]),d("div",S,[d("a",{href:a.url,target:"_blank"},[w],8,["href"]),d("div",z,"简介:"+h(a.evaluate),1)])])))),256))]))])}));p.render=k,p.__scopeId="data-v-6830c32a";export default p;
