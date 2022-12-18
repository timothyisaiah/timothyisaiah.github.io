import{_ as F,e as O,ao as T,aM as Y,m as Q,f as V,aN as $,aO as j,o as z,k as A,w as S,j as B,n as _,Q as w}from"./index.a1805e5d.js";import{Q as K}from"./QTable.237c86ab.js";import{Q as W}from"./QPage.bb8a1e6b.js";import"./QItem.50e00458.js";import"./rtl.b51694b1.js";import"./position-engine.fbe6e9dd.js";import"./selection.bfef7e8b.js";import"./format.865294d5.js";const G=[{name:"asset_name",label:"Asset Name",field:"asset_name"},{name:"driver_name",label:"Driver Name",field:"driver_name"},{name:"mileage_covered",label:"Mileage covered (KM)",field:"mileage_covered"},{name:"engine_runtime",label:"Engine Runtime [HH:mm:ss]",field:"engine_runtime"},{name:"idling_time",label:"Idling Time [HH:mm:ss]",field:"idling_time"},{name:"driving_time",label:"Driving Time [HH:mm:ss]",field:"driving_time"},{name:"parking_time",label:"Parking Time [HH:mm:ss]",field:"parking_time"},{name:"asset_utilization",label:"Asset Utilization [%]",field:"asset_utilization"},{name:"weekend_driving",label:"Weekend Driving",field:"weekend_driving"},{name:"weekend_mileage_covered",label:"Weekend Mileage Covered [Km]",field:"weekend_mileage_covered"},{name:"night_driving",label:"Night Driving",field:"night_driving"},{name:"night_mileage_covered",label:"Night Mileage Covered [Km]",field:"night_mileage_covered"},{name:"early_morning_driving",label:"Early Morning Driving",field:"early_morning_driving"},{name:"early_morning_mileage_covered",label:"Ealy Morning Mileage Covered [Km]",field:"early_morning_mileage_covered"},{name:"geofence_exit",label:"Geofence Exit/Entry",field:"geofence_exit"}],q=O({data(){return{columns:G,rows:[],loading:!0}},async mounted(){let i=T.findIn(this.getReports.activeReports),e=i[i.findIndex(r=>r.title==="Trip report")];e&&e.sheets=="Exceeded Memory Limit"&&await Y.report.retreiveReport(e.id).then(r=>{e=r.report});let d=i[i.findIndex(r=>r.title==="Engine hours report")],m=i[i.findIndex(r=>r.title==="Geofence entry/exit events")];if(e&&d&&d.sheets[0].header!="No data found"&&e.sheets[0].header!="No data found"){let r=e.sheets[0].sections[0].data,o=d.sheets[0].sections[0].data,g=this.dateDiffInDays(e.from,e.to,"days");for(let n=0;n<r.length;n++){let s=r[n].header,c=r[n].rows[0].object.v;if(r[n].rows.length>1)for(let t in r[n].rows)c=r[n].rows[t].object.v!=="Unidentified driver"?r[n].rows[t].object.v:r[n].rows[0].object.v;let p=r[n].rows[0].length,f=this.formatInHHMMSS(o[0].rows[n].in_movement.v,o[0].rows[n].idle.v),u=(o[0].rows[n].in_movement.raw,o[0].rows[n].idle.raw),E=o[0].rows[n].idle.v,H=o[0].rows[n].in_movement.v,R=r[n].rows[0].idle_duration.v,D=Number(u/(12*60*60*g)*100).toFixed(2),b,y,I,k,M=0,x=0,N=0,h=0,C=0,v=0;if(e.sheets.findIndex(t=>t.header===s)>-1){let t=e.sheets[e.sheets.findIndex(l=>l.header===s)].sections[0].data;for(let l in t){if((t[l].header.includes("Sun")||t[l].header.includes("Sat"))&&(M+=parseInt(t[l].header.split(":")[1].trim()),t[l].rows.length>0))for(let a in t[l].rows)x+=t[l].rows[a].length.raw;if(t[l].rows.length>0)for(let a in t[l].rows)(parseInt(t[l].rows[a].from.v.split(":")[0])>19&&parseInt(t[l].rows[a].from.v.split(":")[0])<24||parseInt(t[l].rows[a].to.v.split(":")[0])>20&&parseInt(t[l].rows[a].to.v.split(":")[0])<24)&&(N++,h+=t[l].rows[a].length.raw),(parseInt(t[l].rows[a].from.v.split(":")[0])>=0&&parseInt(t[l].rows[a].from.v.split(":")[0])<6||parseInt(t[l].rows[a].to.v.split(":")[0])>0&&parseInt(t[l].rows[a].to.v.split(":")[0])<6)&&(C++,v+=t[l].rows[a].length.raw)}}b=Number(x).toFixed(2),y=M>0?"YES":"NO",h=Number(h).toFixed(2),I=N>0?"YES":"NO",v=Number(v).toFixed(2),k=C>0?"YES":"NO",this.rows.push({asset_name:s,driver_name:c,mileage_covered:p.v,engine_runtime:f,idling_time:E,driving_time:H,parking_time:R,asset_utilization:D,weekend_driving:y,weekend_mileage_covered:b,night_driving:I,night_mileage_covered:h,early_morning_driving:k,early_morning_mileage_covered:v,geofence_exit:m.sheets.findIndex(t=>t.header===s)!==-1?"YES":"NO"})}}this.loading=!1},computed:{...Q("reports",["getReports"])},methods:{...V("reports",["retreiveReport"]),dateDiffInDays(i,e,d){let m=1e3,r=m*60,o=r*60,g=o*24,n=g*7;i=new Date(i),e=new Date(e);let s=e-i;if(isNaN(s))return NaN;switch(d){case"years":return e.getFullYear()-i.getFullYear();case"months":return e.getFullYear()*12+e.getMonth()-(i.getFullYear()*12+i.getMonth());case"weeks":return Math.floor(s/n);case"days":return Math.floor(s/g);case"hours":return Math.floor(s/o);case"minutes":return Math.floor(s/r);case"seconds":return Math.floor(s/m);default:return}},formatInHHMMSS(i,e){let d=parseInt(i.split(":")[2]),m=parseInt(i.split(":")[1]),r=parseInt(i.split(":")[0]),o=parseInt(e.split(":")[2]),g=parseInt(e.split(":")[1]),n=parseInt(e.split(":")[0]),s=0,c=0,p=d+o;p>59&&(p=p%60,s=1);let f=m+g+s;f>59&&(f=f%60,c=1);let u=r+n+c;return Number.isNaN(u)?i:u+":"+f+":"+p},exportTable(){$(this.columns,this.rows,"Fleet Operations Report.xlsx")},exportCSV(){j(this.columns,this.rows,"Fuel Report.csv")}}}),L={class:"full-width q-mt-md",align:"right"};function P(i,e,d,m,r,o){return z(),A(W,{class:"full-screen bg-white"},{default:S(()=>[B("div",L,[_(w,{flat:"",onClick:e[0]||(e[0]=g=>this.$router.push("/home")),icon:"keyboard_arrow_left",class:"text-positive",title:"Back"})]),_(K,{title:"Fleet Operations Report",rows:i.rows,columns:i.columns,"row-key":"asset_name",class:"sticky-column","rows-per-page-options":[10,20],loading:i.loading},{"top-right":S(()=>[_(w,{color:"primary",icon:"download",label:"xls","no-caps":"",onClick:i.exportTable},null,8,["onClick"]),_(w,{color:"primary",icon:"download",label:"csv","no-caps":"",class:"q-mx-sm",onClick:i.exportCSV},null,8,["onClick"])]),_:1},8,["rows","columns","loading"])]),_:1})}var ne=F(q,[["render",P]]);export{ne as default};
