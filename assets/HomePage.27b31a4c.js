import{c as te,L as ye,aj as be,N as ke,r as D,b as f,ak as xe,P as $e,al as Te,R as we,am as Se,I as M,B as F,ai as V,ad as W,Y as Ce,h as P,an as Re,g as oe,y as ae,a9 as Pe,G as Oe,H as E,K as _e,_ as qe,e as Ee,ao as Qe,m as Ae,f as De,p as Le,o as v,k as C,w as d,n as i,j as x,Q as R,i as w,l as z,v as He,F as Be,q as G,T as K,ap as Ie,t as Q,aq as Y,ar as Ne}from"./index.7d7e5758.js";import{d as U,Q as je,c as Me,a as A,b as X}from"./QItem.9f6d823c.js";import{u as Fe,v as J,a as Ve,p as Z,b as We,c as ze,r as ee,s as Ge,d as Ke}from"./position-engine.ba8c5c32.js";import{Q as Ye}from"./QPage.bb695496.js";import{A as Ue}from"./AuthErrors.6e630b45.js";var Xe=te({name:"QTooltip",inheritAttrs:!1,props:{...Fe,...ye,...be,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:J},self:{type:String,default:"top middle",validator:J},offset:{type:Array,default:()=>[14,14],validator:Ve},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...ke],setup(e,{slots:o,emit:s,attrs:a}){let r,u;const p=oe(),{proxy:{$q:t}}=p,h=D(null),b=D(!1),O=f(()=>Z(e.anchor,t.lang.rtl)),l=f(()=>Z(e.self,t.lang.rtl)),m=f(()=>e.persistent!==!0),{registerTick:y,removeTick:S}=xe(),{registerTimeout:c}=$e(),{transition:se,transitionStyle:re}=Te(e,b),{localScrollTarget:L,changeScrollEvent:ne,unconfigureScrollTarget:le}=We(e,N),{anchorEl:g,canShow:ie,anchorEvents:$}=ze({showing:b,configureAnchorEl:ge}),{show:ue,hide:_}=we({showing:b,canShow:ie,handleShow:de,handleHide:fe,hideOnRouteChange:m,processOnMount:!0});Object.assign($,{delayShow:pe,delayHide:he});const{showPortal:H,hidePortal:B,renderPortal:ce}=Se(p,h,me);if(t.platform.is.mobile===!0){const n={anchorEl:g,innerRef:h,onClickOutside(k){return _(k),k.target.classList.contains("q-dialog__backdrop")&&Pe(k),!0}},q=f(()=>e.modelValue===null&&e.persistent!==!0&&b.value===!0);M(q,k=>{(k===!0?Ke:ee)(n)}),F(()=>{ee(n)})}function de(n){H(),y(()=>{u=new MutationObserver(()=>T()),u.observe(h.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),T(),N()}),r===void 0&&(r=M(()=>t.screen.width+"|"+t.screen.height+"|"+e.self+"|"+e.anchor+"|"+t.lang.rtl,T)),c(()=>{H(!0),s("show",n)},e.transitionDuration)}function fe(n){S(),B(),I(),c(()=>{B(!0),s("hide",n)},e.transitionDuration)}function I(){u!==void 0&&(u.disconnect(),u=void 0),r!==void 0&&(r(),r=void 0),le(),V($,"tooltipTemp")}function T(){const n=h.value;g.value===null||!n||Ge({el:n,offset:e.offset,anchorEl:g.value,anchorOrigin:O.value,selfOrigin:l.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function pe(n){if(t.platform.is.mobile===!0){U(),document.body.classList.add("non-selectable");const q=g.value,k=["touchmove","touchcancel","touchend","click"].map(j=>[q,j,"delayHide","passiveCapture"]);W($,"tooltipTemp",k)}c(()=>{ue(n)},e.delay)}function he(n){t.platform.is.mobile===!0&&(V($,"tooltipTemp"),U(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),c(()=>{_(n)},e.hideDelay)}function ge(){if(e.noParentEvent===!0||g.value===null)return;const n=t.platform.is.mobile===!0?[[g.value,"touchstart","delayShow","passive"]]:[[g.value,"mouseenter","delayShow","passive"],[g.value,"mouseleave","delayHide","passive"]];W($,"anchor",n)}function N(){if(g.value!==null||e.scrollTarget!==void 0){L.value=Ce(g.value,e.scrollTarget);const n=e.noParentEvent===!0?T:_;ne(L.value,n)}}function ve(){return b.value===!0?P("div",{...a,ref:h,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",a.class],style:[a.style,re.value],role:"tooltip"},ae(o.default)):null}function me(){return P(Re,{name:se.value,appear:!0},ve)}return F(I),Object.assign(p.proxy,{updatePosition:T}),ce}});const Je={position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,validator:e=>e.length===2},expand:Boolean};function Ze(){const{props:e,proxy:{$q:o}}=oe(),s=Oe(_e,E);if(s===E)return console.error("QPageSticky needs to be child of QLayout"),E;const a=f(()=>{const l=e.position;return{top:l.indexOf("top")>-1,right:l.indexOf("right")>-1,bottom:l.indexOf("bottom")>-1,left:l.indexOf("left")>-1,vertical:l==="top"||l==="bottom",horizontal:l==="left"||l==="right"}}),r=f(()=>s.header.offset),u=f(()=>s.right.offset),p=f(()=>s.footer.offset),t=f(()=>s.left.offset),h=f(()=>{let l=0,m=0;const y=a.value,S=o.lang.rtl===!0?-1:1;y.top===!0&&r.value!==0?m=`${r.value}px`:y.bottom===!0&&p.value!==0&&(m=`${-p.value}px`),y.left===!0&&t.value!==0?l=`${S*t.value}px`:y.right===!0&&u.value!==0&&(l=`${-S*u.value}px`);const c={transform:`translate(${l}, ${m})`};return e.offset&&(c.margin=`${e.offset[1]}px ${e.offset[0]}px`),y.vertical===!0?(t.value!==0&&(c[o.lang.rtl===!0?"right":"left"]=`${t.value}px`),u.value!==0&&(c[o.lang.rtl===!0?"left":"right"]=`${u.value}px`)):y.horizontal===!0&&(r.value!==0&&(c.top=`${r.value}px`),p.value!==0&&(c.bottom=`${p.value}px`)),c}),b=f(()=>`q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand===!0?"expand":"shrink"}`);function O(l){const m=ae(l.default);return P("div",{class:b.value,style:h.value},e.expand===!0?m:[P("div",m)])}return{$layout:s,getStickyContent:O}}var et=te({name:"QPageSticky",props:Je,setup(e,{slots:o}){const{getStickyContent:s}=Ze();return()=>s(o)}});const tt=Ee({data(){let e=Qe.query().all();var o=[],s=[];let a=0;for(let r in e)r=="0"&&(o[a]=[],s.push(a)),o[a].length==0||!o[a].includes(e[r])&&e[r].id-o[a][o[a].length-1].id<7||(a+=1,o[a]=[],s.push(a)),o[a].push(e[r]);return{reports:o.reverse(),keys:s,dialog:D(null)}},components:{errors:Ue},computed:{...Ae("reports",["getReports"])},methods:{...De("reports",["deleteReports","setActiveReport","refresh","updateReports"]),deleteReport(e){this.dialog=this.$q.dialog({title:"Confirm Delete",message:"This action can not be undone.",persistent:!0,ok:{label:"DELETE",color:"negative"},cancel:!0}).onOk(o=>{this.dialog=this.$q.dialog({title:"Deleting...",message:"0%",progress:!0,persistent:!0,ok:!1}),this.deleteReports(e);const s=setInterval(()=>{this.dialog.update({message:`${this.getReports.deleting}%`}),this.getReports.deleting===100&&(clearInterval(s),this.dialog.update({title:"Done!",message:"Delete completed successfully",progress:!1,ok:!0}).onOk(()=>{this.$router.go(this.$router.currentRoute)}))},500)})},viewReport(e){this.setActiveReport(e),this.$router.push("/report/fleet-operations-report")}},mounted(){this.updateReports({pending:!1})}}),ot={class:"text-right q-pa-md"},at={key:0,class:"text-h5 text-primary text-bold q-py-xl q-px-md q-my-xl"},st={key:0,class:"text-red"},rt=x("td",{class:"text-bold"},"From:",-1),nt=x("td",{class:"text-bold"},"To:",-1),lt={key:2,class:"flex flex-center text-center",style:{height:"90vh"}};function it(e,o,s,a,r,u){const p=Le("errors");return v(),C(Ye,{class:"full-screen bg-white"},{default:d(()=>[i(p),x("div",ot,[i(R,{label:"Refresh","no-caps":"",icon:"refresh",class:"text-primary",onClick:o[0]||(o[0]=t=>{e.refresh().then(()=>{this.$router.go(this.$router.currentRoute)})}),loading:e.getReports.pending,flat:"",unelevated:""},null,8,["loading"])]),e.keys.length>0?(v(),w("label",at,"Available Reports")):z("",!0),e.keys.length>0?(v(),C(je,{key:1,class:"fit-screen-content"},{default:d(()=>[(v(!0),w(Be,null,He(e.keys,t=>(v(),w("div",{key:t},[K((v(),C(Me,{clickable:"",class:"history"},{default:d(()=>[i(A,{avatar:"",onClick:h=>e.viewReport(e.reports[t])},{default:d(()=>[i(Ie,{class:"bg-primary text-white",icon:"list"})]),_:2},1032,["onClick"]),i(A,{onClick:h=>e.viewReport(e.reports[t])},{default:d(()=>[i(X,{lines:"1",class:"text-primary text-bold"},{default:d(()=>[G("Fleet Report "+Q(e.reports[t][0].created)+" ",1),e.reports[t].length<7?(v(),w("span",st,"INCOMPLETE ")):z("",!0)]),_:2},1024),i(X,{caption:"",lines:"2"},{default:d(()=>[x("tr",null,[rt,x("td",null,Q(e.reports[t][0].from),1)]),x("tr",null,[nt,x("td",null,Q(e.reports[t][0].to),1)])]),_:2},1024)]),_:2},1032,["onClick"]),K((v(),C(A,{side:"",clickable:""},{default:d(()=>[i(R,{class:"text-negative",icon:"delete",flat:"",dense:"",round:"",title:"Delete Report",onClick:h=>e.deleteReport(e.reports[t])},null,8,["onClick"])]),_:2},1024)),[[Y]])]),_:2},1024)),[[Y]]),i(Ne,{inset:"item"})]))),128))]),_:1})):(v(),w("div",lt,[i(R,{flat:"",class:"bg-primary text-white",label:"Create Report","no-caps":"",to:"/new-report"})])),i(et,{position:"bottom-right",offset:[18,18]},{default:d(()=>[i(R,{fab:"",icon:"add",color:"primary",to:"/new-report"},{default:d(()=>[i(Xe,{anchor:"top right",offset:[-20,15],"transition-show":"scale","transition-hide":"scale","content-class":"transparent"},{default:d(()=>[G(" Create new report ")]),_:1})]),_:1})]),_:1})]),_:1})}var ht=qe(tt,[["render",it]]);export{ht as default};
