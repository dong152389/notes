# v-if,v-else

## 条件判断语句

- `v-if`
- `v-else`

什么是条件判断语句，就不需要我说明了吧（￣▽￣），直接看语法上效果

## HTML

```html
<div id="vue">
    <h1 v-if="ok">YES</h1>
    <h1 v-else>NO</h1>
</div>
```

## JavaScript

```javascript
<script type="text/javascript">
    var vm = new Vue({
        el: '#vue',
        data: {
            ok: true
        }
    });
</script>
```

## 测试效果

- 在 `Chrome` 浏览器上运行，并按 `F12` 进入 `开发者工具`

![img](./img/Lusifer_20181218033118.png)

- 在控制台输入 `vm.ok = false` ，然后 `回车`，你会发现浏览器中显示的内容会直接变成 `NO`

![img](./img/Lusifer_20181218033338.png)

注：使用 `v-*` 属性绑定数据是不需要 `双花括号` 包裹的

## 完整的 HTML

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>语法篇 v-if</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>
</head>
<body>

<div id="vue">
    <h1 v-if="ok">YES</h1>
    <h1 v-else>NO</h1>
</div>

<script type="text/javascript">
    var vm = new Vue({
        el: '#vue',
        data: {
            ok: true
        }
    });
</script>
</body>
</html>
```