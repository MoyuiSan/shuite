import{c as B,s as D,r,o,a as i,b as e,e as _,t as d,f as m,g as u,j as C,h,F as f,a8 as g,p as F,d as V}from"./vendor.c71fd20d.js";import{_ as j}from"./main.6ba1aa7a.js";const I={data(){return{filmsData:[],loading:!0}},props:["filmClass","title"],setup(){},created(){const t=B.init({env:"yui-7gel1hqtaf6fb79d"});t.auth({persistence:"local"});const n=t.database();n.command;const l=D("");return n.collection("films").where({class:this.filmClass}).orderBy("created","desc").limit(5).get().then(c=>{this.filmsData=c.data,setTimeout(()=>{this.loading=!1},1e3),console.log(c.data)}),{filmsData:l}},methods:{formatterTime(t,n,l,c){return t?moment(t).format("YYYY"):"\u672A\u77E5"}},components:{}},v=t=>(F("data-v-567e12b8"),t=t(),V(),t),N={class:"article-item-title"},S=v(()=>e("i",{class:"el-icon-magic-stick"},null,-1)),T=_("\u66F4\u591A"),Y={class:"content"},w={class:"content-item"},L={class:"content-item-msg"},q={class:"title"},z={class:"rate"},E=v(()=>e("div",{class:"image-slot shuite-el-img-slot"},[_(" \u52A0\u8F7D\u4E2D"),e("span",{class:"dot"},"...")],-1)),R={class:"bottom-message"},U={class:"content-item nothing"};function A(t,n,l,c,a,b){const p=r("router-link"),y=r("shuite-loading"),k=r("el-rate"),x=r("el-image");return o(),i(f,null,[e("div",N,[e("h3",null,[S,_(d(l.title),1)]),m(p,{to:"/filmsmore?fclass="+l.filmClass},{default:u(()=>[T]),_:1},8,["to"])]),e("div",Y,[a.loading?(o(),C(y,{key:0})):h("",!0),a.loading?h("",!0):(o(!0),i(f,{key:1},g(a.filmsData,(s,G)=>(o(),i("div",w,[m(p,{to:{name:"filmdetail",params:{id:s._id}}},{default:u(()=>[e("div",L,[e("div",q,d(s.name),1),e("p",null,d(s.jianjie),1),e("div",z,[m(k,{"model-value":s.rateValue,"allow-half":"",disabled:""},null,8,["model-value"])])]),m(x,{class:"img shuite-el-img",src:s.tempFileURL,lazy:""},{placeholder:u(()=>[E]),_:2},1032,["src"]),e("div",R,d(b.formatterTime(s.year)),1)]),_:2},1032,["to"])]))),256)),a.filmsData.length&&!a.loading?(o(!0),i(f,{key:2},g(5-a.filmsData.length,s=>(o(),i("div",U," \u6682\u65E0\u6570\u636E "))),256)):h("",!0)])],64)}var K=j(I,[["render",A],["__scopeId","data-v-567e12b8"]]);export{K as F};
