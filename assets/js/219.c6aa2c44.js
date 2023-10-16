(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{1303:function(e,t,a){e.exports=a.p+"assets/img/6aedb651gy1fmncxvp4doj20xc2cfaim.56cec792.jpg"},1779:function(e,t,a){"use strict";a.r(t);var r=a(26),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"附-vue-实例的生命周期"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#附-vue-实例的生命周期"}},[e._v("#")]),e._v(" 附：Vue 实例的生命周期")]),e._v(" "),r("h2",{attrs:{id:"什么是生命周期"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是生命周期"}},[e._v("#")]),e._v(" 什么是生命周期")]),e._v(" "),r("p",[e._v("Vue 实例有一个完整的生命周期，也就是从开始创建、初始化数据、编译模板、挂载 DOM、渲染→更新→渲染、卸载等一系列过程，我们称这是 Vue 的生命周期。通俗说就是 Vue 实例从创建到销毁的过程，就是生命周期。")]),e._v(" "),r("p",[e._v("在 Vue 的整个生命周期中，它提供了一系列的事件，可以让我们在事件触发时注册 JS 方法，可以让我们用自己注册的 JS 方法控制整个大局，在这些事件响应方法中的 this 直接指向的是 Vue 的实例。")]),e._v(" "),r("p",[r("img",{attrs:{src:a(1303),alt:"img"}})]),e._v(" "),r("blockquote",[r("p",[e._v("特别值得注意的是 "),r("code",[e._v("created")]),e._v(" 钩子函数和 "),r("code",[e._v("mounted")]),e._v(" 钩子函数的区别")])]),e._v(" "),r("h2",{attrs:{id:"钩子函数的触发时机"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#钩子函数的触发时机"}},[e._v("#")]),e._v(" 钩子函数的触发时机")]),e._v(" "),r("h3",{attrs:{id:"beforecreate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#beforecreate"}},[e._v("#")]),e._v(" beforeCreate")]),e._v(" "),r("p",[e._v("在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。")]),e._v(" "),r("h3",{attrs:{id:"created"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#created"}},[e._v("#")]),e._v(" created")]),e._v(" "),r("p",[e._v("实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。")]),e._v(" "),r("h3",{attrs:{id:"beforemount"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#beforemount"}},[e._v("#")]),e._v(" beforeMount")]),e._v(" "),r("p",[e._v("在挂载开始之前被调用：相关的 render 函数首次被调用。")]),e._v(" "),r("h3",{attrs:{id:"mounted"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mounted"}},[e._v("#")]),e._v(" mounted")]),e._v(" "),r("p",[e._v("el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。")]),e._v(" "),r("h3",{attrs:{id:"beforeupdate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#beforeupdate"}},[e._v("#")]),e._v(" beforeUpdate")]),e._v(" "),r("p",[e._v("数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。")]),e._v(" "),r("h3",{attrs:{id:"updated"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#updated"}},[e._v("#")]),e._v(" updated")]),e._v(" "),r("p",[e._v("由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。")]),e._v(" "),r("p",[e._v("当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。该钩子在服务器端渲染期间不被调用。")]),e._v(" "),r("h3",{attrs:{id:"beforedestroy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#beforedestroy"}},[e._v("#")]),e._v(" beforeDestroy")]),e._v(" "),r("p",[e._v("实例销毁之前调用。在这一步，实例仍然完全可用。")]),e._v(" "),r("h3",{attrs:{id:"destroyed"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#destroyed"}},[e._v("#")]),e._v(" destroyed")]),e._v(" "),r("p",[e._v("Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。该钩子在服务器端渲染期间不被调用。")])])}),[],!1,null,null,null);t.default=s.exports}}]);