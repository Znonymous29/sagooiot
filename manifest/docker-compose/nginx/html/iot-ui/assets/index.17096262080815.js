import s from"./account.1709626208081.js";import{_ as e,s as a,m as o,d as t,b as n,u as i}from"./index.1709626208081.js";import{d as l,a1 as c,l as m,aa as r,a as d,Y as u,b as f,W as g,X as y,V as h,ah as p,o as v,aA as b,aB as C}from"./vue.1709626208081.js";import"./changePwd.1709626208081.js";import"./rsa.1709626208081.js";const k=l({name:"loginIndex",components:{Account:s},data:function(){return{Sunny:a,Moon:o,dayjs:t,showImg:!1,sysinfo:{buildVersion:"",systemName:"",buildTime:"",systemCopyright:"",systemLogo:"",systemLoginPIC:""}}},mounted(){n.sysinfo().then((s=>{this.sysinfo=s}))["finally"]((()=>this.showImg=!0))},setup(){const s=i(),e=c({tabsActiveName:"account",isScan:!1}),a=m((()=>s.state.themeConfig.themeConfig));return{onAddDarkChange:()=>{const s=document.documentElement;a.value.isIsDark?(s.setAttribute("data-theme","dark"),document.querySelector("html").className="dark"):(s.setAttribute("data-theme",""),document.querySelector("html").className="")},logoMini:"/imgs/logo.png",getThemeConfig:a,...r(e)}}}),I={key:0,"class":"login-container flex-row"},w={"class":"part left"},A={"class":"flex logo"},j={key:0,"class":"text"},x={key:1,"class":"text"},D={"class":"part"},T=(s=>(b("data-v-b4fe8a3c"),s=s(),C(),s))((()=>f("div",{"class":"title"},"登录",-1)));var V=e(k,[["render",function(s,e,a,o,t,n){const i=p("el-switch"),l=p("el-image"),c=p("Account");return s.showImg?(v(),d("div",I,[u(i,{"class":"switch",modelValue:s.getThemeConfig.isIsDark,"onUpdate:modelValue":e[0]||(e[0]=e=>s.getThemeConfig.isIsDark=e),size:"large","inline-prompt":"",onChange:s.onAddDarkChange,"active-icon":s.Sunny,"inactive-icon":s.Moon,style:{"--el-switch-on-color":"#fff","--el-switch-off-color":"#151515"}},null,8,["modelValue","onChange","active-icon","inactive-icon"]),f("div",w,[f("div",A,[u(l,{"class":"logoimg",src:s.sysinfo.systemLogo},null,8,["src"]),g(" "+y(s.sysinfo.systemName),1)]),u(l,{"class":"img",src:s.sysinfo.systemLoginPIC},null,8,["src"]),s.sysinfo.buildTime?(v(),d("span",j,y(s.sysinfo.buildVersion),1)):h("",!0),s.sysinfo.buildTime?(v(),d("span",x,y(s.dayjs(s.sysinfo.buildTime).format("YYYY-MM-DD HH:mm:ss")),1)):h("",!0)]),f("div",D,[T,u(c)])])):h("",!0)}],["__scopeId","data-v-b4fe8a3c"]]);export{V as default};