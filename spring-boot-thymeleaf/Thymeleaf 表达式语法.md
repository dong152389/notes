# Thymeleaf 表达式语法

## Message 表达式

```
#{...}
<p th:utext="#{home.welcome(${session.user.name})}"> Welcome to our grocery store, Sebastian Pepper!</p>
<p th:utext="#{${welcomeMsgKey}(${session.user.name})}"> Welcome to our grocery store, Sebastian Pepper!</p>
```

## 变量表达式

```
${}
ongl 标准语法，方法也可以被调用
```

## 选择变量表达式

```html
*{}
<div th:object="${session.user}">
    <p>Name: <span th:text="*{firstName}">Sebastian</span>.</p>
    <p>Surname: <span th:text="*{lastName}">Pepper</span>.</p> 
    <p>Nationality: <span th:text={nationality}">Saturn</span>.</p>
</div> 

等价于

<div>
    <p>Name: <span th:text="${session.user.firstName}">Sebastian</span>.</p> 
    <p>Surname: <span th:text="${session.user.lastName}">Pepper</span>.</p> 
    <p>Nationality: <span th:text="${session.user.nationality}">Saturn</span>.</p>
</div>

当然了，这两者可以混合使用
还有一种方式

<div>
    <p>Name: <span th:text="*{session.user.name}">Sebastian</span>.</p> 
    <p>Surname: <span th:text="*{session.user.surname}">Pepper</span>.</p> 
    <p>Nationality: <span th:text="*{session.user.nationality}">Saturn</span>.</p>
</div>  
```

## 链接 URL 表达式

```html
@{}
<!-- Will produce 'http://localhost:8080/gtvg/order/details?orderId=3' (plus rewriting) --> <a href="details.html"

th:href="@{http://localhost:8080/gtvg/order/details(orderId=${o.id})}">view</a> <!-- Will produce '/gtvg/order/details?orderId=3' (plus rewriting) -->

<a href="details.html" th:href="@{/order/details(orderId=${o.id})}">view</a>

<!-- Will produce '/gtvg/order/3/details' (plus rewriting) -->

<a href="details.html" th:href="@{/order/{orderId}/details(orderId=${o.id})}">view</a>
```

## 变量

| 分类     | 实例                            |
| -------- | ------------------------------- |
| 文本     | `one text`，`Another one!`，... |
| 数字     | 0 , 34 , 3.0 , 12.3 ,…          |
| 真假     | true , false                    |
| 文字符号 | one , sometext , main ,…        |

## 算数运算

| 分类          | 实例               |
| ------------- | ------------------ |
| +, -, *, /, % | 二元运算符         |
| -             | 减号（一元运算符） |

## 真假运算

| 分类     | 实例               |
| -------- | ------------------ |
| and , or | 二元运算符         |
| ! , not  | 否定（一元运算符） |

## 比较运算

| 分类                          | 实例 |
| ----------------------------- | ---- |
| >, <, >=, <= (gt, lt, ge, le) | 比较 |
| == , != ( eq , ne )           | 平等 |

## 条件运算

| 分类         | 实例                      |
| ------------ | ------------------------- |
| if-then      | (if) ? (then)             |
| if-then-else | (if) ? (then) : (else)    |
| Default      | (value) ?: (defaultvalue) |