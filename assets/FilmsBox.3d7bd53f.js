import{c as B,s as D,r,o,a as i,b as e,e as _,t as d,f as m,g as u,j,h as p,F as h,a5 as g,p as C,d as F}from"./vendor.3249e4ba.js";import{_ as V}from"./main.fd4ddc42.js";const w={data(){return{filmsData:[],loading:!0}},props:["filmClass","title"],setup(){},created(){const t=B.init({env:"yui-7gel1hqtaf6fb79d"});t.auth({persistence:"local"});const c=t.database();c.command;const l=D("");return c.collection("films").where({class:this.filmClass}).orderBy("created","desc").limit(5).get().then(n=>{this.filmsData=n.data,setTimeout(()=>{this.loading=!1},1e3),console.log(n.data)}),{filmsData:l}},methods:{formatterTime(t,c,l,n){return t?moment(t).format("YYYY"):"\u672A\u77E5"}},components:{}},v=t=>(C("data-v-4c1453c4"),t=t(),F(),t),I={class:"article-item-title"},N=v(()=>e("i",{class:"el-icon-magic-stick"},null,-1)),S=_("\u66F4\u591A"),T={class:"content"},Y={class:"content-item"},L={class:"content-item-msg"},q={class:"title"},z={class:"rate"},E=v(()=>e("div",{class:"image-slot shuite-el-img-slot"},[_(" \u52A0\u8F7D\u4E2D"),e("span",{class:"dot"},"...")],-1)),R={class:"bottom-message"},U={class:"content-item nothing"};function A(t,c,l,n,a,y){const f=r("router-link"),k=r("lottie-player"),x=r("el-rate"),b=r("el-image");return o(),i(h,null,[e("div",I,[e("h3",null,[N,_(d(l.title),1)]),m(f,{to:"/filmsmore?fclass="+l.filmClass},{default:u(()=>[S]),_:1},8,["to"])]),e("div",T,[a.loading?(o(),j(k,{key:0,src:"https://assets1.lottiefiles.com/packages/lf20_gmswat4t.json",background:"transparent",speed:"1",style:{width:"300px",height:"300px",color:"black",margin:"0 auto"},loop:"",autoplay:""})):p("",!0),a.loading?p("",!0):(o(!0),i(h,{key:1},g(a.filmsData,(s,G)=>(o(),i("div",Y,[m(f,{to:{name:"filmdetail",params:{id:s._id}}},{default:u(()=>[e("div",L,[e("div",q,d(s.name),1),e("p",null,d(s.jianjie),1),e("div",z,[m(x,{"model-value":s.rateValue,"allow-half":"",disabled:""},null,8,["model-value"])])]),m(b,{class:"img shuite-el-img",src:s.tempFileURL,lazy:""},{placeholder:u(()=>[E]),_:2},1032,["src"]),e("div",R,d(y.formatterTime(s.year)),1)]),_:2},1032,["to"])]))),256)),a.filmsData.length&&!a.loading?(o(!0),i(h,{key:2},g(5-a.filmsData.length,s=>(o(),i("div",U," \u6682\u65E0\u6570\u636E "))),256)):p("",!0)])],64)}var K=V(w,[["render",A],["__scopeId","data-v-4c1453c4"]]);export{K as F};
