(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{364:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"条件拼装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#条件拼装"}},[t._v("#")]),t._v(" 条件拼装")]),t._v(" "),s("p",[s("code",[t._v("org.huiche.data.query.Query")]),t._v(",提供了方便查询的条件拼装的各种方法,默认在search,dao,service中已经被继承/实现,已方便调用")]),t._v(" "),s("h2",{attrs:{id:"常用拼装方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用拼装方法"}},[t._v("#")]),t._v(" 常用拼装方法")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("方法名")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("predicate")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("构造一个条件")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("and")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("用"),s("code",[t._v("and")]),t._v("拼接多个条件为一个条件")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("predicates")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("等同"),s("code",[t._v("and")]),t._v("方法,用"),s("code",[t._v("and")]),t._v("拼接多个条件为一个条件")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("or")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("用"),s("code",[t._v("or")]),t._v("拼接多个条件")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("extendColumn")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("扩展列")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("excludeColumn")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("排除列")])])])]),t._v(" "),s("h2",{attrs:{id:"条件拼装示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#条件拼装示例"}},[t._v("#")]),t._v(" 条件拼装示例")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查询姓林的,身高>=180的男生或身高>=165的女生 的学生")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Demo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Predicate")]),t._v(" p "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("predicates")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("QStudent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("student"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("startWith")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"林"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("or")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("predicates")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("QStudent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("student"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("eq")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Sex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MALE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("QStudent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("student"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("goe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("180")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("predicates")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("QStudent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("student"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("eq")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Sex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FEMALE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("QStudent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("student"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("goe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("165")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);