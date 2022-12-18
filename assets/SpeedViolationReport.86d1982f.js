import{_ as m,e as p,m as c,ao as u,aN as f,aO as h,o as _,i as v,j as x,n as l,Q as d,w,F as b}from"./index.a1805e5d.js";import{Q as g}from"./QTable.237c86ab.js";import"./QItem.50e00458.js";import"./rtl.b51694b1.js";import"./position-engine.fbe6e9dd.js";import"./selection.bfef7e8b.js";import"./format.865294d5.js";const k=[{name:"asset_name",label:"Asset Name",field:"asset_name"},{name:"driver_name",label:"Driver Name",field:"driver_name"},{name:"date",label:"Date",field:"date"},{name:"start_time",label:"Start Time",field:"start_time"},{name:"duration",label:"Duration",field:"duration"},{name:"max_speed",label:"Max. Speed [Km/hr]",field:"max_speed"},{name:"address",label:"Address",field:"address"}],S=p({data(){return{columns:k,rows:[],loading:!0}},computed:{...c("reports",["getReports"])},mounted(){let e=u.findIn(this.getReports.activeReports),a=e[e.findIndex(t=>t.title==="Speed violation report")];if(a&&a.sheets[0].header!="No data found"){let t=a.sheets;for(let s in t){let n=t[s].sections[2].data;for(let r=0;r<n.length;r++){let o=n[r].rows;for(let i in o)this.rows.push({asset_name:t[s].header,driver_name:t[s].sections[0].text.split(":")[0],date:t[s].sections[2].data[r].header,start_time:o[i].start_time.v,duration:o[i].duration.v,max_speed:o[i].max_speed.v,address:o[i].max_speed_address.v})}}}this.loading=!1},methods:{exportTable(){f(this.columns,this.rows,"Speed Violation Report.xlsx")},exportCSV(){h(this.columns,this.rows,"Speed Violation Report.csv")}}}),C={class:"full-width q-mt-md",align:"right"};function R(e,a,t,s,n,r){return _(),v(b,null,[x("div",C,[l(d,{flat:"",onClick:a[0]||(a[0]=o=>this.$router.push("/home")),icon:"keyboard_arrow_left",class:"text-positive",title:"Back"})]),l(g,{title:"Speed Violation Report",rows:e.rows,columns:e.columns,"row-key":"asset_name",class:"sticky-column","rows-per-page-options":[10,20,100,200],loading:e.loading},{"top-right":w(()=>[l(d,{color:"primary","icon-right":"download",label:"xls","no-caps":"",onClick:e.exportTable},null,8,["onClick"]),l(d,{color:"primary","icon-right":"download",label:"csv",class:"q-mx-sm","no-caps":"",onClick:e.exportCSV},null,8,["onClick"])]),_:1},8,["rows","columns","loading"])],64)}var Q=m(S,[["render",R]]);export{Q as default};
