import{a as e,b as r,p as d,U as l,O as o,q as n,S as y,aU as F,ah as E,m as u}from"./chunks/framework.wJb5Bb0T.js";const c=n("h1",{id:"pagination-分页",tabindex:"-1"},[y("Pagination 分页 "),n("a",{class:"header-anchor",href:"#pagination-分页","aria-label":'Permalink to "Pagination 分页"'},"​")],-1),C=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,'该组件是基于element-plus，然后添加了slot组成的。设置layout，表示需要显示的内容，用逗号分隔，布局元素会依次显示。 分页元素如下： prev (上一页按钮), next (下一页按钮), pager (分页列表), jumper (跳转), total (总计), sizes (每页条数选择) 和 -> (every element after this symbol will be pulled to the right)；layout，包含"->, prev, next, slot"时，会显示首页、尾页的Icon按钮。')],-1),v=n("div",{class:"m-y-20 font-bold f-16"},"默认用带页码的分页",-1),m=n("div",{class:"m-y-20 font-bold f-16"},"无页码分页",-1),B=n("div",{class:"m-y-20 font-bold f-16"},"隐藏左侧总数量和条数的分页",-1),q=n("div",{class:"m-y-20 font-bold f-16"},"小型分页",-1),z=F("",2),x=JSON.parse('{"title":"Pagination 分页","description":"","frontmatter":{"title":"Pagination 分页"},"headers":[],"relativePath":"components/pagination.md","filePath":"components/pagination.md","lastUpdated":1714444501000}'),A={name:"components/pagination.md"},_=Object.assign(A,{setup(D){const a=e(1),t=e(10),p=e(95);return r([a,t],(k,s)=>{if((s==null?void 0:s[1])!=(k==null?void 0:k[1])&&a.value!=1){a.value=1;return}console.log("🚀 ~ watch ~ pageNum, pageSize:",a.value,t.value)}),(k,s)=>{const h=E("zrx-pagination"),g=E("ClientOnly");return u(),d("div",null,[c,C,l(g,null,{default:o(()=>[v,l(h,{total:p.value,"current-page":a.value,"onUpdate:currentPage":s[0]||(s[0]=i=>a.value=i),"page-size":t.value,"onUpdate:pageSize":s[1]||(s[1]=i=>t.value=i)},null,8,["total","current-page","page-size"]),m,l(h,{total:p.value,"current-page":a.value,"onUpdate:currentPage":s[2]||(s[2]=i=>a.value=i),"page-size":t.value,"onUpdate:pageSize":s[3]||(s[3]=i=>t.value=i),layout:"total, sizes, ->, prev, next, slot"},null,8,["total","current-page","page-size"]),B,l(h,{total:p.value,"current-page":a.value,"onUpdate:currentPage":s[4]||(s[4]=i=>a.value=i),"page-size":t.value,"onUpdate:pageSize":s[5]||(s[5]=i=>t.value=i),layout:"->, prev, next, slot"},null,8,["total","current-page","page-size"]),q,l(h,{total:p.value,"current-page":a.value,"onUpdate:currentPage":s[6]||(s[6]=i=>a.value=i),"page-size":t.value,"onUpdate:pageSize":s[7]||(s[7]=i=>t.value=i),layout:"->, prev, pager, next"},null,8,["total","current-page","page-size"]),l(h,{total:p.value,"current-page":a.value,"onUpdate:currentPage":s[8]||(s[8]=i=>a.value=i),"page-size":t.value,"onUpdate:pageSize":s[9]||(s[9]=i=>t.value=i),layout:"->, prev, next"},null,8,["total","current-page","page-size"])]),_:1}),z])}}});export{x as __pageData,_ as default};
