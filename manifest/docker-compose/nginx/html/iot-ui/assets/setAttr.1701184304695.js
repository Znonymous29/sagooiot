import{a as k}from"./index.170118430469519.js";import{E as g}from"./index.1701184304695.js";import{L as N,h as f,a2 as O,S as p,T as a,ai as s,o,b as z,_ as n,a as c,a8 as _,F as b,a9 as T,Y as m,Z as D}from"./vue.1701184304695.js";const A={class:"dialog-footer"},L=m("\u53D6 \u6D88"),q=m("\u8BBE \u7F6E"),$=N({__name:"setAttr",props:{deviceKey:String},setup(U,{expose:w}){const S=U,r=f(!1),v=f(!1),C=f([]),B={key:"",name:"",accessMode:0,valueType:{type:"",unit:"",elements:[]},value:""},e=O({...B});k.product.getDataType({status:-1}).then(i=>{const l=Object.values(i.dataType);l.forEach((d,t)=>{t==0?(l[t].label="\u57FA\u7840\u7C7B\u578B",l[t].options=d):(l[t].label="\u6269\u5C55\u7C7B\u578B",l[t].options=d)}),C.value=l||[]});function h(i){Object.assign(e,i),r.value=!0}function j(){if(!e.value)return g("\u8BF7\u5148\u8F93\u5165\u5C5E\u6027\u503C\uFF01");v.value=!0,k.product.propertySet({deviceKey:S.deviceKey,params:{[e.key]:e.value}}).then(()=>{Object.assign(e,{...B}),r.value=!1,g.success("\u64CD\u4F5C\u6210\u529F")}).finally(()=>v.value=!1)}return w({show:h}),(i,l)=>{const d=s("el-input"),t=s("el-form-item"),V=s("el-option"),x=s("el-option-group"),F=s("el-select"),K=s("el-form"),E=s("el-button"),M=s("el-dialog");return o(),p(M,{title:"\u8BBE\u7F6E\u5C5E\u6027",modelValue:r.value,"onUpdate:modelValue":l[7]||(l[7]=u=>r.value=u),width:"600px","append-to-body":""},{footer:a(()=>[z("span",A,[n(E,{onClick:l[6]||(l[6]=u=>r.value=!1),size:"default"},{default:a(()=>[L]),_:1}),n(E,{type:"primary",onClick:j,size:"default",loading:v.value},{default:a(()=>[q]),_:1},8,["loading"])])]),default:a(()=>[n(K,{model:e,ref:"queryRef","label-width":"68px"},{default:a(()=>[n(t,{label:"\u5C5E\u6027\u6807\u8BC6",prop:"key"},{default:a(()=>[n(d,{modelValue:e.key,"onUpdate:modelValue":l[0]||(l[0]=u=>e.key=u),disabled:"",placeholder:"\u8BF7\u8F93\u5165\u5C5E\u6027\u6807\u8BC6",clearable:""},null,8,["modelValue"])]),_:1}),n(t,{label:"\u5C5E\u6027\u540D\u79F0",prop:"name"},{default:a(()=>[n(d,{modelValue:e.name,"onUpdate:modelValue":l[1]||(l[1]=u=>e.name=u),disabled:"",placeholder:"\u8BF7\u8F93\u5165\u5C5E\u6027\u540D\u79F0",clearable:""},null,8,["modelValue"])]),_:1}),n(t,{label:"\u6570\u636E\u7C7B\u578B",prop:"type"},{default:a(()=>[n(F,{modelValue:e.valueType.type,"onUpdate:modelValue":l[2]||(l[2]=u=>e.valueType.type=u),placeholder:"\u8BF7\u9009\u62E9\u6570\u636E\u7C7B\u578B",disabled:"",style:{width:"100%"}},{default:a(()=>[(o(!0),c(b,null,_(C.value,u=>(o(),p(x,{key:u.label,label:u.label},{default:a(()=>[(o(!0),c(b,null,_(u.options,y=>(o(),p(V,{key:y.type,label:y.title,value:y.type},null,8,["label","value"]))),128))]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),n(t,{label:"\u5C5E\u6027\u503C",prop:"value"},{default:a(()=>[["int","long","float","double","date"].includes(e.valueType.type)?(o(),p(d,{key:0,type:"number",modelValue:e.value,"onUpdate:modelValue":l[3]||(l[3]=u=>e.value=u),modelModifiers:{number:!0},placeholder:"\u8BF7\u8F93\u5165\u5C5E\u6027\u503C",clearable:""},T({_:2},[e.valueType.unit?{name:"append",fn:a(()=>[m(D(e.valueType.unit),1)])}:void 0]),1032,["modelValue"])):["enum"].includes(e.valueType.type)?(o(),p(F,{key:1,modelValue:e.value,"onUpdate:modelValue":l[4]||(l[4]=u=>e.value=u),clearable:"",style:{wdith:"100% !important"}},{default:a(()=>[(o(!0),c(b,null,_(e.valueType.elements,u=>(o(),p(V,{key:u.value,value:u.value,label:u.text},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])):(o(),p(d,{key:2,modelValue:e.value,"onUpdate:modelValue":l[5]||(l[5]=u=>e.value=u),placeholder:"\u8BF7\u8F93\u5165\u5C5E\u6027\u503C",clearable:""},T({_:2},[e.valueType.unit?{name:"append",fn:a(()=>[m(D(e.valueType.unit),1)])}:void 0]),1032,["modelValue"]))]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])}}});export{$ as default};