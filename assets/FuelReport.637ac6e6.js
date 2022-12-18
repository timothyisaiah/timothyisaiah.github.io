import{_ as f,e as _,m as g,ao as b,aN as h,aO as v,o as w,i as x,j as C,n as s,Q as a,w as F,F as k}from"./index.a1805e5d.js";import{Q as R}from"./QTable.237c86ab.js";import"./QItem.50e00458.js";import"./rtl.b51694b1.js";import"./position-engine.fbe6e9dd.js";import"./selection.bfef7e8b.js";import"./format.865294d5.js";const V=[{name:"asset_name",label:"Asset Name",field:"asset_name"},{name:"mileage",label:"Mileage",field:"mileage"},{name:"fuel_consumed",label:"Fuel Consumed [ltrs]",field:"fuel_consumed"},{name:"consumption",label:"Consumption",field:"consumption"},{name:"refueling",label:"Refueling",field:"refueling"},{name:"fuel_lost",label:"Fuel Lost (Siphoned) [ltrs]",field:"fuel_lost"},{name:"cost",label:"cost/ltr [Ugx]",field:"cost"},{name:"cost_of_fuel_consumed",label:"Cost Of Fuel Consumed [Ugx]",field:"cost_of_fuel_consumed"},{name:"initial_volume",label:"Initial Volume [ltrs]",field:"initial_volume"},{name:"final_volume",label:"Final Volume [ltrs]",field:"final_volume"}],y=_({data(){return{rows:[],columns:V,loading:!0}},computed:{...g("reports",["getReports"])},mounted(){let l=b.findIn(this.getReports.activeReports),t=l[l.findIndex(e=>e.title==="Fuel report")];if(t&&t.sheets[0].sections[0].text!="No data"){let e=t.sheets[0].sections[0].data[0].rows;for(let o in e){let n=e[o].object.v,i=e[o].fillingsVolume.v,r=e[o].consumed.v;(3800*e[o].consumed.raw).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");let u=e[o].drainsVolume.v,m=e[o].mileage_by_gps.v,c=Number(m/e[o].consumed.raw).toFixed(2),d="",p="";this.rows.push({asset_name:n,mileage:m,fuel_consumed:r,consumption:c,refueling:i,fuel_lost:u,cost:"",cost_of_fuel_consumed:"",initial_volume:d,final_volume:p})}}this.loading=!1},methods:{exportTable(){h(this.columns,this.rows,"Fuel Report.xlsx")},exportCSV(){v(this.columns,this.rows,"Fuel Report.csv")}}}),B={class:"full-width q-mt-md",align:"right"};function N(l,t,e,o,n,i){return w(),x(k,null,[C("div",B,[s(a,{flat:"",onClick:t[0]||(t[0]=r=>this.$router.push("/home")),icon:"keyboard_arrow_left",class:"text-positive",title:"Back"})]),s(R,{title:"Fuel Report",rows:l.rows,columns:l.columns,"row-key":"asset_name",class:"sticky-column","rows-per-page-options":[10,20,100],loading:l.loading},{"top-right":F(()=>[s(a,{color:"primary","icon-right":"download",label:"xls","no-caps":"",onClick:l.exportTable},null,8,["onClick"]),s(a,{color:"primary","icon-right":"download",label:"csv","no-caps":"",onClick:l.exportCSV,class:"q-mx-sm"},null,8,["onClick"])]),_:1},8,["rows","columns","loading"])],64)}var O=f(y,[["render",N]]);export{O as default};
