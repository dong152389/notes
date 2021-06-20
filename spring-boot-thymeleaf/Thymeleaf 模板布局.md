# Thymeleaf 模板布局

这节主要介绍模板的引入。及如何在不改变前端人员的 HTML 显示结果的情况下设计模板（通过属性配置动态时不显示的部分）。

## 模板模块导入

首先定义一个 `/resources/templates/footer.html` 文件：

```html
<!DOCTYPE html SYSTEM "http://www.thymeleaf.org/dtd/xhtml1-strict-thymeleaf-4.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:th="http://www.thymeleaf.org">
    <body>
        <div th:fragment="copy">
            &copy; 2018 Copyright by Lusifer.
        </div>
    </body>
</html>
```

上面的代码定义了一个片段称为 `copy`，我们可以很容易地使用 `th:include` 或者 `th:replace` 属性包含在我们的主页上

```html
<body>
...
<div th:include="footer :: copy"></div>
</body>
```

`include` 的表达式想当简洁。这里有三种写法：

- `templatename::domselector` 或者 `templatename::[domselector]` 引入模板页面中的某个模块
- `templatename` 引入模板页面
- `::domselector` 或者 `this::domselector` 引入自身模板的模块

上面所有的 `templatename` 和 `domselector` 的写法都支持表达式写法：

```html
<div th:include="footer :: (${user.isAdmin}? #{footer.admin} : #{footer.normaluser})"></div>
```

## 不使用 `th:fragment` 来引用模块

```html
<div id="copy-section">
&copy; 2018 Copyright by Lusifer.
</div>
```

我们可以用 CSS 的选择器写法来引入

```html
<body>
...
<div th:include="footer :: #copy-section"></div>
</body>
```

## `th:include` 和 `th:replace` 的区别

`th:include` 和 `th:replace` 都可以引入模块，两者的区别在于：

- `th:include`：引入子模块的 children，依然保留父模块的 tag
- `th:replace`：引入子模块的所有，不保留父模块的 tag

### 举个例子

```html
<footer th:fragment="copy">
&copy; 2018 Copyright by Lusifer.
</footer>
```

### 引入界面

```html
<body>
...
<div th:include="footer :: copy"></div>
<div th:replace="footer :: copy"></div>
</body>
```

### 显示结果

```html
<body>
...
<div>
&copy; 2018 Copyright by Lusifer.
</div>
<footer>
&copy; 2018 Copyright by Lusifer.
</footer>
</body>
```

