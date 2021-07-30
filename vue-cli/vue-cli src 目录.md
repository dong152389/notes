# vue-cli src 目录

## 概述

`src` 目录是项目的源码目录，所有代码都会写在这里

![img](./img/Lusifer_20190106170155.png)

## main.js

项目的入口文件，我们知道所有的程序都会有一个入口

```javascript
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
```

- `import Vue from 'vue'`：ES6 写法，会被转换成 `require("vue");` （require 是 NodeJS 提供的模块加载器）

- `import App from './App'`：意思同上，但是指定了查找路径，`./` 为当前目录

- `Vue.config.productionTip = false`：关闭浏览器控制台关于环境的相关提示

- ```
  new Vue({...})
  ```

  ：实例化 Vue

  - `el: '#app'`：查找 index.html 中 id 为 app 的元素
  - `template: '<App/>'`：模板，会将 index.html 中 `<div id="app"></div>` 替换为 `<App />`
  - `components: { App }`：引入组件，使用的是 `import App from './App'` 定义的 App 组件

## App.vue

组件模板

```vue
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  <!-- 字体 -->
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  <!-- 文字平滑效果 -->
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

- `template`：HTML 代码模板，会替换 `<App />` 中的内容

- `import HelloWorld from './components/HelloWorld'`：引入 HelloWorld 组件，用于替换 `template` 中的 `<HelloWorld/>`

- ```
  export default{...}
  ```

  ：导出 NodeJS 对象，作用是可以通过

   

  ```
  import
  ```

   

  关键字导入

  - `name: 'App'`：定义组件的名称
  - `components: { HelloWorld }`：定义子组件

## HelloWorld.vue

基本同上，不解释..

关于 `<style scoped>` 的说明：CSS 样式仅在当前组件有效，声明了样式的作用域