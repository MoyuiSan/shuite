import"./main.2ebbf567.js";import{a7 as a,a8 as t,d as s,i as e,a3 as l,a1 as i,f as o,g as n,Q as m,v as c,p as d,F as r,J as f,a9 as g}from"./vendor.6d187631.js";const p={data:()=>({filmsData:[],loading:!0}),props:["filmClass","title"],setup(){},created(){const a=s.init({env:"yui-7gel1hqtaf6fb79d"});a.auth({persistence:"local"});const t=a.database();t.command;const l=e("");return t.collection("films").where({class:this.filmClass}).orderBy("created","desc").limit(5).get().then((a=>{this.filmsData=a.data,setTimeout((()=>{this.loading=!1}),1e3),console.log(a.data)})),{filmsData:l}},methods:{formatterTime:(a,t,s,e)=>a?moment(a).format("YYYY"):"未知"},components:{}},u=g();a("data-v-a850d08e");const h={class:"article-item-title"},v=n("i",{class:"el-icon-magic-stick"},null,-1),y=m("更多"),b={class:"content"},k={class:"content-item"},_={class:"content-item-msg"},D={class:"title"},j={class:"rate"},w=n("div",{class:"image-slot shuite-el-img-slot"},[m(" 加载中"),n("span",{class:"dot"},"...")],-1),Y={class:"bottom-message"},x={class:"content-item nothing"};t();const C=u(((a,t,s,e,g,p)=>{const C=l("router-link"),T=l("lottie-player"),F=l("el-rate"),q=l("el-image");return i(),o(r,null,[n("div",h,[n("h3",null,[v,m(c(s.title),1)]),n(C,{to:"/filmsmore?fclass="+s.filmClass},{default:u((()=>[y])),_:1},8,["to"])]),n("div",b,[g.loading?(i(),o(T,{key:0,src:"https://assets1.lottiefiles.com/packages/lf20_gmswat4t.json",background:"transparent",speed:"1",style:{width:"300px",height:"300px",color:"black",margin:"0 auto"},loop:"",autoplay:""})):d("",!0),g.loading?d("",!0):(i(!0),o(r,{key:1},f(g.filmsData,((a,t)=>(i(),o("div",k,[n(C,{to:{name:"filmdetail",params:{id:a._id}}},{default:u((()=>[n("div",_,[n("div",D,c(a.name),1),n("p",null,c(a.jianjie),1),n("div",j,[n(F,{"model-value":a.rateValue,"allow-half":"",disabled:""},null,8,["model-value"])])]),n(q,{class:"img shuite-el-img",src:a.tempFileURL,lazy:""},{placeholder:u((()=>[w])),_:2},1032,["src"]),n("div",Y,c(p.formatterTime(a.year)),1)])),_:2},1032,["to"])])))),256)),g.filmsData.length&&!g.loading?(i(!0),o(r,{key:2},f(5-g.filmsData.length,(a=>(i(),o("div",x," 暂无数据 ")))),256)):d("",!0)])],64)}));p.render=C,p.__scopeId="data-v-a850d08e";export{p as _};
