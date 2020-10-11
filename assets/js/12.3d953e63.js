(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{362:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"实体类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实体类"}},[t._v("#")]),t._v(" 实体类")]),t._v(" "),s("h2",{attrs:{id:"基础实体类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础实体类"}},[t._v("#")]),t._v(" 基础实体类")]),t._v(" "),s("p",[s("code",[t._v("org.huiche.data.BaseEntity")]),t._v(", 作为基础实体类, 它默认提供了如下属性")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("属性名")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("id")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Long")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("作为主键, 自增")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("createTime")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("创建时间(yyyy-MM-dd HH:mm:ss)")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("modifyTime")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("修改时间(yyyy-MM-dd HH:mm:ss)")])])])]),t._v(" "),s("h2",{attrs:{id:"实体类示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实体类示例"}},[t._v("#")]),t._v(" 实体类示例")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BaseEntity")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" sex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提醒")]),t._v(" "),s("p",[t._v("推荐使用 lombok 简化代码,@Accessors(chain = true)生成链式setter")])]),t._v(" "),s("h2",{attrs:{id:"为什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么"}},[t._v("#")]),t._v(" 为什么...?")]),t._v(" "),s("h3",{attrs:{id:"为什么使用long主键-而不类似springdata提供主键泛型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用long主键-而不类似springdata提供主键泛型"}},[t._v("#")]),t._v(" 为什么使用Long主键,而不类似SpringData提供主键泛型?")]),t._v(" "),s("p",[t._v("没什么特别理由,主要是为了方便封装增删改查,当您需要其他类型主键时,多添加一个属性当作实际使用的主键即可,huiche的定位即是中小项目的快速开发,当然您也可以fork进行调整")]),t._v(" "),s("h3",{attrs:{id:"为什么继承baseentity需要传递泛型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么继承baseentity需要传递泛型"}},[t._v("#")]),t._v(" 为什么继承BaseEntity需要传递泛型?")]),t._v(" "),s("p",[t._v("主要是为了配合lombok,生成链式调用的setter方法时,设置BaseEntity提供的id,createTime,modifyTime可以安全的返回原类型")])])}),[],!1,null,null,null);a.default=n.exports}}]);