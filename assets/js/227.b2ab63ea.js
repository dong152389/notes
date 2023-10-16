(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{1323:function(a,t,e){"use strict";e.r(t);var s=e(26),i=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"使用-gitlab-持续集成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-gitlab-持续集成"}},[a._v("#")]),a._v(" 使用 GitLab 持续集成")]),a._v(" "),e("h2",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[a._v("#")]),a._v(" 简介")]),a._v(" "),e("p",[a._v("从 GitLab 8.0 开始，GitLab CI 就已经集成在 GitLab 中，我们只要在项目中添加一个 "),e("code",[a._v(".gitlab-ci.yml")]),a._v(" 文件，然后添加一个 Runner，即可进行持续集成。 而且随着 GitLab 的升级，GitLab CI 变得越来越强大。")]),a._v(" "),e("h2",{attrs:{id:"概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[a._v("#")]),a._v(" 概念")]),a._v(" "),e("h3",{attrs:{id:"pipeline"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pipeline"}},[a._v("#")]),a._v(" Pipeline")]),a._v(" "),e("p",[a._v("一次 Pipeline 其实相当于一次构建任务，里面可以包含多个流程，如安装依赖、运行测试、编译、部署测试服务器、部署生产服务器等流程。")]),a._v(" "),e("p",[a._v("任何提交或者 Merge Request 的合并都可以触发 Pipeline，如下图所示：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("+------------------+           +----------------+\n|                  |  trigger  |                |\n|   Commit / MR    +----------\x3e+    Pipeline    |\n|                  |           |                |\n+------------------+           +----------------+\n")])])]),e("h3",{attrs:{id:"stages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stages"}},[a._v("#")]),a._v(" Stages")]),a._v(" "),e("p",[a._v("Stages 表示构建阶段，说白了就是上面提到的流程。我们可以在一次 Pipeline 中定义多个 Stages，这些 Stages 会有以下特点：")]),a._v(" "),e("ul",[e("li",[a._v("所有 Stages 会按照顺序运行，即当一个 Stage 完成后，下一个 Stage 才会开始")]),a._v(" "),e("li",[a._v("只有当所有 Stages 完成后，该构建任务 (Pipeline) 才会成功")]),a._v(" "),e("li",[a._v("如果任何一个 Stage 失败，那么后面的 Stages 不会执行，该构建任务 (Pipeline) 失败")])]),a._v(" "),e("p",[a._v("因此，Stages 和 Pipeline 的关系就是：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("+--------------------------------------------------------+\n|                                                        |\n|  Pipeline                                              |\n|                                                        |\n|  +-----------+     +------------+      +------------+  |\n|  |  Stage 1  |----\x3e|   Stage 2  |-----\x3e|   Stage 3  |  |\n|  +-----------+     +------------+      +------------+  |\n|                                                        |\n+--------------------------------------------------------+\n")])])]),e("h3",{attrs:{id:"jobs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jobs"}},[a._v("#")]),a._v(" Jobs")]),a._v(" "),e("p",[a._v("Jobs 表示构建工作，表示某个 Stage 里面执行的工作。我们可以在 Stages 里面定义多个 Jobs，这些 Jobs 会有以下特点：")]),a._v(" "),e("ul",[e("li",[a._v("相同 Stage 中的 Jobs 会并行执行")]),a._v(" "),e("li",[a._v("相同 Stage 中的 Jobs 都执行成功时，该 Stage 才会成功")]),a._v(" "),e("li",[a._v("如果任何一个 Job 失败，那么该 Stage 失败，即该构建任务 (Pipeline) 失败")])]),a._v(" "),e("p",[a._v("所以，Jobs 和 Stage 的关系图就是：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("+------------------------------------------+\n|                                          |\n|  Stage 1                                 |\n|                                          |\n|  +---------+  +---------+  +---------+   |\n|  |  Job 1  |  |  Job 2  |  |  Job 3  |   |\n|  +---------+  +---------+  +---------+   |\n|                                          |\n+------------------------------------------+\n")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);