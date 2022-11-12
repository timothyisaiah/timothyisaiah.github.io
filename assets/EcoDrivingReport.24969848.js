import{_ as x,e as b,ao as k,m as S,o as y,i as R,j as I,n as g,Q as w,w as X,F as C}from"./index.01574b62.js";import{Q as D}from"./QTable.c8191670.js";import"./QItem.f75844ab.js";import"./position-engine.d9eff954.js";import"./format.865294d5.js";const E=[{name:"asset_name",label:"Asset Name",field:"asset_name"},{name:"driver_name",label:"Driver Name",field:"driver_name"},{name:"max_speed",label:"MaxSpeed [Km/hr]",field:"max_speed"},{name:"time",label:"Time",field:"time"},{name:"over_speeding_count",label:"Over Speeding Count",field:"over_speeding_count"},{name:"address",label:"Address",field:"address"},{name:"harsh_driving",label:"Harsh Driving",field:"harsh_driving"},{name:"harsh_driving_count",label:"Harsh Driving Count",field:"harsh_driving_count"},{name:"accident",label:"Accident",field:"accident"},{name:"driver_performance",label:"Driver / Vehicle Performance",field:"driver_performance"}],N=b({data(){return{columns:E,rows:[],loading:!0}},mounted(){let e=k.findIn(this.getReports.activeReports),s=e[e.findIndex(t=>t.title==="Eco-driving report")],o=e[e.findIndex(t=>t.title==="Speed violation report")];if(s&&o){let t=s.sheets,r=o.sheets;for(let i=1;i<t.length;i++){let n=t[i].header,h,l,v,_,d,c,p,f,u,a=r.findIndex(m=>m.header===n);a>=0?(h=r[a].sections[0].text.replace(r[a].sections[2].header,""),l=this.getMax(r[a].sections[2].data[0].rows),u=r[a].sections[2].data[0].rows.length,v=r[a].sections[2].data[0].rows[r[a].sections[2].data[0].rows.findIndex(m=>m.max_speed.raw===l)].max_speed_address.v,_=r[a].sections[2].data[0].rows[r[a].sections[2].data[0].rows.findIndex(m=>m.max_speed.raw===l)].start_time.v,d=t[i].sections[1].rows[2].v,c=d!==void 0?"YES":"NO",p=t[i].sections[1].rows[0].v,f="NO"):(h="Unidentified driver",l=0,l="-",u=0,v="-",_="-",t[i].sections.length>1?(d=t[i].sections[1].rows[2].v,c=d!==void 0?"YES":"NO",p=t[i].sections[1].rows[0].v):(d="-",c="-",p="-"),f="-"),this.rows.push({asset_name:n,driver_name:h,max_speed:l,time:_,over_speeding_count:u,address:v,harsh_driving:c,harsh_driving_count:d,accident:f,driver_performance:p})}}this.loading=!1},computed:{...S("reports",["getReports"])},methods:{getMax(e){for(var s,o=0;o<e.length;o++)(s==null||parseInt(e[o].max_speed.raw)>parseInt(s))&&(s=e[o].max_speed.raw);return s},exportTable(){let e=[];for(let r in this.rows){let i=[];for(let n in this.columns)i[this.columns[n].label]=this.rows[r][this.columns[n].field];e.push(i)}let s="Fuel Report.xlsx",o=XLSX.utils.json_to_sheet(e),t=XLSX.utils.book_new();XLSX.utils.book_append_sheet(t,o,"myWorkSheet"),XLSX.writeFile(t,s)}}}),B={class:"full-width q-mt-md",align:"right"};function $(e,s,o,t,r,i){return y(),R(C,null,[I("div",B,[g(w,{flat:"",onClick:s[0]||(s[0]=n=>this.$router.push("/home")),icon:"keyboard_arrow_left",class:"text-positive",title:"Back"})]),g(D,{title:"Eco Driving Report",rows:e.rows,columns:e.columns,"row-key":"asset_name",class:"sticky-column","rows-per-page-options":[10,20],loading:e.loading},{"top-right":X(()=>[g(w,{color:"primary","icon-right":"archive",label:"Export to xls","no-caps":"",onClick:e.exportTable},null,8,["onClick"])]),_:1},8,["rows","columns","loading"])],64)}var A=x(N,[["render",$]]);export{A as default};
