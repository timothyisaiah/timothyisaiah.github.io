import{_ as w,e as b,ao as k,m as C,aM as D,aN as N,o as R,i as E,j as I,n as p,Q as x,w as S,F as T}from"./index.dbdc3668.js";import{Q as y}from"./QTable.0f697b30.js";import"./QItem.859ef144.js";import"./position-engine.b71822d5.js";import"./format.865294d5.js";const $=[{name:"asset_name",label:"Asset Name",field:"asset_name"},{name:"driver_name",label:"Driver Name",field:"driver_name"},{name:"max_speed",label:"MaxSpeed [Km/hr]",field:"max_speed"},{name:"time",label:"Time",field:"time"},{name:"over_speeding_count",label:"Over Speeding Count",field:"over_speeding_count"},{name:"address",label:"Address",field:"address"},{name:"harsh_driving",label:"Harsh Driving",field:"harsh_driving"},{name:"harsh_driving_count",label:"Harsh Driving Count",field:"harsh_driving_count"},{name:"accident",label:"Accident",field:"accident"},{name:"driver_performance",label:"Driver / Vehicle Performance",field:"driver_performance"}],B=b({data(){return{columns:$,rows:[],loading:!0}},mounted(){let e=k.findIn(this.getReports.activeReports),r=e[e.findIndex(s=>s.title==="Eco-driving report")],i=e[e.findIndex(s=>s.title==="Speed violation report")];if(r&&i&&r.sheets[0].header!="No data found"){let s=r.sheets,t=i.sheets;for(let a=1;a<s.length;a++){let v=s[a].header,h,n,f,g,l,c,m,_,u,o=t.findIndex(d=>d.header===v);o>=0?(h=t[o].sections[0].text.replace(t[o].sections[2].header,""),n=this.getMax(t[o].sections[2].data[0].rows),u=t[o].sections[2].data[0].rows.length,f=t[o].sections[2].data[0].rows[t[o].sections[2].data[0].rows.findIndex(d=>d.max_speed.raw===n)].max_speed_address.v,g=t[o].sections[2].data[0].rows[t[o].sections[2].data[0].rows.findIndex(d=>d.max_speed.raw===n)].start_time.v,l=s[a].sections[1].rows[2].v,c=l!==void 0?"YES":"NO",m=s[a].sections[1].rows[0].v,_="NO"):(h="Unidentified driver",n=0,n="-",u=0,f="-",g="-",s[a].sections.length>1?(l=s[a].sections[1].rows[2].v,c=l!==void 0?"YES":"NO",m=s[a].sections[1].rows[0].v):(l="-",c="-",m="-"),_="-"),this.rows.push({asset_name:v,driver_name:h,max_speed:n,time:g,over_speeding_count:u,address:f,harsh_driving:c,harsh_driving_count:l,accident:_,driver_performance:m})}}this.loading=!1},computed:{...C("reports",["getReports"])},methods:{getMax(e){for(var r,i=0;i<e.length;i++)(r==null||parseInt(e[i].max_speed.raw)>parseInt(r))&&(r=e[i].max_speed.raw);return r},exportTable(){D(this.columns,this.rows,"Eco Driving Report.xlsx")},exportCSV(){N(this.columns,this.rows,"Eco Driving Report.csv")}}}),V={class:"full-width q-mt-md",align:"right"};function M(e,r,i,s,t,a){return R(),E(T,null,[I("div",V,[p(x,{flat:"",onClick:r[0]||(r[0]=v=>this.$router.push("/home")),icon:"keyboard_arrow_left",class:"text-positive",title:"Back"})]),p(y,{title:"Eco Driving Report",rows:e.rows,columns:e.columns,"row-key":"asset_name",class:"sticky-column","rows-per-page-options":[10,20],loading:e.loading},{"top-right":S(()=>[p(x,{color:"primary","icon-right":"download",label:"xls","no-caps":"",onClick:e.exportTable},null,8,["onClick"]),p(x,{color:"primary","icon-right":"download",label:"csv","no-caps":"",onClick:e.exportTable,class:"q-mx-sm"},null,8,["onClick"])]),_:1},8,["rows","columns","loading"])],64)}var F=w(B,[["render",M]]);export{F as default};
