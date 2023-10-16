(window.webpackJsonp=window.webpackJsonp||[]).push([[351],{1524:function(a,s,t){"use strict";t.r(s);var e=t(26),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"linux-安装-mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-安装-mysql"}},[a._v("#")]),a._v(" Linux 安装 MySQL")]),a._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),t("h3",{attrs:{id:"更新数据源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新数据源"}},[a._v("#")]),a._v(" 更新数据源")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("apt-get update\n")])])]),t("h3",{attrs:{id:"安装-mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-mysql"}},[a._v("#")]),a._v(" 安装 MySQL")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("apt-get install mysql-server\n")])])]),t("p",[a._v("系统将提示您在安装过程中创建 root 密码。选择一个安全的密码，并确保你记住它，因为你以后需要它。接下来，我们将完成 MySQL 的配置。")]),a._v(" "),t("h2",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[a._v("#")]),a._v(" 配置")]),a._v(" "),t("p",[a._v("因为是全新安装，您需要运行附带的安全脚本。这会更改一些不太安全的默认选项，例如远程 root 登录和示例用户。在旧版本的 MySQL 上，您需要手动初始化数据目录，但 Mysql 5.7 已经自动完成了。")]),a._v(" "),t("p",[a._v("运行安全脚本：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("mysql_secure_installation\n")])])]),t("p",[a._v("这将提示您输入您在之前步骤中创建的 root 密码。您可以按 Y，然后 ENTER 接受所有后续问题的默认值，但是要询问您是否要更改 root 密码。您只需在之前步骤中进行设置即可，因此无需现在更改。")]),a._v(" "),t("h2",{attrs:{id:"测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[a._v("#")]),a._v(" 测试")]),a._v(" "),t("p",[a._v("按上边方式安装完成后，MySQL 应该已经开始自动运行了。要测试它，请检查其状态。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("lusifer@ubuntu:~$ systemctl status mysql.service\n● mysql.service - MySQL Community Server\n   Loaded: loaded (/lib/systemd/system/mysql.service; enabled; vendor preset: enabled)\n   Active: active (running) since Tue 2017-11-21 13:04:34 CST; 3min 24s ago\n Main PID: 2169 (mysqld)\n   CGroup: /system.slice/mysql.service\n           └─2169 /usr/sbin/mysqld\n\nNov 21 13:04:33 ubuntu systemd[1]: Starting MySQL Community Server...\nNov 21 13:04:34 ubuntu systemd[1]: Started MySQL Community Server.\n")])])]),t("p",[a._v("查看 MySQL 版本：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("mysqladmin -p -u root version\n")])])]),t("h2",{attrs:{id:"配置远程访问"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置远程访问"}},[a._v("#")]),a._v(" 配置远程访问")]),a._v(" "),t("ul",[t("li",[a._v("修改配置文件")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("nano /etc/mysql/mysql.conf.d/mysqld.cnf\n")])])]),t("ul",[t("li",[a._v("注释掉(语句前面加上 # 即可)：")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("bind-address = 127.0.0.1\n")])])]),t("ul",[t("li",[a._v("重启 MySQL")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("service mysql restart\n")])])]),t("ul",[t("li",[a._v("登录 MySQL")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("mysql -u root -p\n")])])]),t("ul",[t("li",[a._v("授权 root 用户允许所有人连接")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("grant all privileges on *.* to 'root'@'%' identified by '你的 mysql root 账户密码';\n")])])]),t("h3",{attrs:{id:"因弱口令无法成功授权解决步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#因弱口令无法成功授权解决步骤"}},[a._v("#")]),a._v(" 因弱口令无法成功授权解决步骤")]),a._v(" "),t("ul",[t("li",[a._v("查看和设置密码安全级别")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("select @@validate_password_policy;\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("set global validate_password_policy=0;\n")])])]),t("ul",[t("li",[a._v("查看和设置密码长度限制")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("select @@validate_password_length;\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("set global validate_password_length=1;\n")])])]),t("h2",{attrs:{id:"常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[a._v("#")]),a._v(" 常用命令")]),a._v(" "),t("h3",{attrs:{id:"启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[a._v("#")]),a._v(" 启动")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("service mysql start\n")])])]),t("h3",{attrs:{id:"停止"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#停止"}},[a._v("#")]),a._v(" 停止")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("service mysql stop\n")])])]),t("h3",{attrs:{id:"重启"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重启"}},[a._v("#")]),a._v(" 重启")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("service mysql restart\n")])])]),t("h2",{attrs:{id:"其它配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其它配置"}},[a._v("#")]),a._v(" 其它配置")]),a._v(" "),t("p",[a._v("修改配置 "),t("code",[a._v("mysqld.cnf")]),a._v(" 配置文件")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("vi /etc/mysql/mysql.conf.d/mysqld.cnf\n")])])]),t("h3",{attrs:{id:"配置默认字符集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置默认字符集"}},[a._v("#")]),a._v(" 配置默认字符集")]),a._v(" "),t("p",[a._v("在 "),t("code",[a._v("[mysqld]")]),a._v(" 节点上增加如下配置")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("[client]\ndefault-character-set=utf8\n")])])]),t("p",[a._v("在 "),t("code",[a._v("[mysqld]")]),a._v(" 节点底部增加如下配置")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("default-storage-engine=INNODB\ncharacter-set-server=utf8\ncollation-server=utf8_general_ci\n")])])]),t("h3",{attrs:{id:"配置忽略数据库大小写敏感"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置忽略数据库大小写敏感"}},[a._v("#")]),a._v(" 配置忽略数据库大小写敏感")]),a._v(" "),t("p",[a._v("在 "),t("code",[a._v("[mysqld]")]),a._v(" 节点底部增加如下配置")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("lower-case-table-names = 1\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);