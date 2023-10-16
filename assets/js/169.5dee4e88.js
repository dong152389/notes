(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{1456:function(t,s,a){"use strict";a.r(s);var n=a(26),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"gradle-对测试支持"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gradle-对测试支持"}},[t._v("#")]),t._v(" Gradle 对测试支持")]),t._v(" "),n("p",[t._v("测试任务自动检测并执行测试源集中的所有单元测试。测试执行完成后会生成一个报告。支持 JUnit 和 TestNG 测试 。")]),t._v(" "),n("h2",{attrs:{id:"默认测试目录及标准输出"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#默认测试目录及标准输出"}},[t._v("#")]),t._v(" 默认测试目录及标准输出")]),t._v(" "),n("p",[n("img",{attrs:{src:a(326),alt:""}})]),t._v(" "),n("h2",{attrs:{id:"junit-使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#junit-使用"}},[t._v("#")]),t._v(" Junit 使用")]),t._v(" "),n("p",[t._v("Gradle 对于 Junit4.x 支持")]),t._v(" "),n("div",{staticClass:"language-groovy extra-class"},[n("pre",{pre:!0,attrs:{class:"language-groovy"}},[n("code",[t._v("dependencies "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ttestImplementation group"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'junit'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'junit'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" version"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'4.12'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \ntest "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("useJUnit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("Gradle 对于 Junit5.x 版本支持")]),t._v(" "),n("div",{staticClass:"language-groovy extra-class"},[n("pre",{pre:!0,attrs:{class:"language-groovy"}},[n("code",[t._v("dependencies "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    testImplementation "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'org.junit.jupiter:junit-jupiter-api:5.8.1'")]),t._v("\n    testRuntimeOnly "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'org.junit.jupiter:junit-jupiter-engine:5.8.1'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \ntest "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("useJUnitPlatform")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("blockquote",[n("p",[t._v("无论是 Junt4.x 版本还是 Junit5.x 版本，只需在 build.gradle 目录下执行 gradle test 指令，gradle 就会帮执行所有的加了@Test 注解的测试，并生成测试报告。")])]),t._v(" "),n("h2",{attrs:{id:"包含和排除特定测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#包含和排除特定测试"}},[t._v("#")]),t._v(" 包含和排除特定测试")]),t._v(" "),n("div",{staticClass:"language-groovy extra-class"},[n("pre",{pre:!0,attrs:{class:"language-groovy"}},[n("code",[t._v("test "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    enabled "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("useJUnit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    include "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com/**'")]),t._v("\n    exclude "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com/abc/**'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("gradle 在 junit 中的批量测试,可以设置包含或者排除某些特定测试。")])])}),[],!1,null,null,null);s.default=e.exports},326:function(t,s,a){t.exports=a.p+"assets/img/Snipaste_2022-08-31_15-28-22.c97951dd.png"}}]);