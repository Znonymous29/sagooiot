import{d as e,h as a,a1 as l,R as s,S as t,ah as o,o as i,b as d,Y as u,W as p,a8 as n}from"./vue.1709626208081.js";import{b as r,E as c}from"./index.1709626208081.js";const m={"class":"dialog-footer"},f=e({__name:"bind",emits:["getList"],setup(e,{expose:f,emit:v}){const b=v,I=a(!1),y=a(),h=a(),_=a([]),g=l({apiIds:[]}),V={},k=async()=>{await h.value.validate(),await r.menu.api.add({menuId:y.value,apiIds:g.apiIds}),c.success("操作成功"),w(),I.value=!1,b("getList")},w=async()=>{Object.assign(g,{apiIds:[]}),h.value&&h.value.resetFields()};return f({open:async(e,a)=>{y.value=a,w(),r.api.getList({types:-1,status:-1}).then((e=>{_.value=e.Info||[]})),g.apiIds=e,I.value=!0}}),(e,a)=>{const l=o("el-cascader"),r=o("el-form-item"),c=o("el-form"),f=o("el-button"),v=o("el-dialog");return i(),s(v,{"class":"api-edit",modelValue:I.value,"onUpdate:modelValue":a[2]||(a[2]=e=>I.value=e),title:"批量绑定接口",width:"600px","close-on-click-modal":!1,"close-on-press-escape":!1},{footer:t((()=>[d("div",m,[u(f,{onClick:a[1]||(a[1]=e=>I.value=!1)},{"default":t((()=>[p("取消")])),_:1}),u(f,{type:"primary",onClick:k},{"default":t((()=>[p("确定")])),_:1})])])),"default":t((()=>[u(c,{ref_key:"formRef",ref:h,model:g,rules:V,"label-width":"80px",onKeyup:n(k,["enter"])},{"default":t((()=>[u(r,{label:"选择接口",prop:"apiIds"},{"default":t((()=>[u(l,{options:_.value,props:{checkStrictly:!1,multiple:!0,emitPath:!1,value:"id",label:"name"},placeholder:"请选择关联页面",filterable:"",clearable:"","class":"w100",modelValue:g.apiIds,"onUpdate:modelValue":a[0]||(a[0]=e=>g.apiIds=e)},null,8,["options","modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue"])}}});export{f as default};