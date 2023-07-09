(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{354:function(s,t,a){"use strict";a.r(t);var n=a(7),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"mysql-8-0-绿色版安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql-8-0-绿色版安装"}},[s._v("#")]),s._v(" MySQL 8.0 绿色版安装")]),s._v(" "),t("blockquote",[t("p",[s._v("今天记录一下MySQL 8.0 绿色版安装过程，简单粗暴。")])]),s._v(" "),t("h2",{attrs:{id:"一、下载mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、下载mysql"}},[s._v("#")]),s._v(" 一、下载MySQL")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("进入官网找到自己所需的安装包："),t("a",{attrs:{href:"https://dev.mysql.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL :: Developer Zone"),t("OutboundLink")],1),s._v("，")])]),s._v(" "),t("li",[t("p",[s._v("软件路径：DOWNLOAD–>MYSQL Community Downloads–>MYSQL on Windows")])])]),s._v(" "),t("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/blog/image-20230308152917146.png",alt:"image-20230308152917146"}}),s._v(" "),t("h2",{attrs:{id:"二、解压"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、解压"}},[s._v("#")]),s._v(" 二、解压")]),s._v(" "),t("p",[t("strong",[s._v("解压zip压缩包至想要安装的目录，比如解压到 D:\\mysql-8.0.32-winx64")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/blog/image-20230308153548884.png",alt:"image-20230308153548884"}})]),s._v(" "),t("h2",{attrs:{id:"三、配置my-ini文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、配置my-ini文件"}},[s._v("#")]),s._v(" 三、配置my.ini文件")]),s._v(" "),t("p",[t("strong",[s._v("在解压目录")]),s._v("D:\\mysql-8.0.29-winx64中创建"),t("a",{attrs:{href:"https://so.csdn.net/so/search?q=MySQL%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL配置文件"),t("OutboundLink")],1),t("strong",[s._v("my.ini")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/blog/image-20230308153653898.png",alt:"image-20230308153653898"}})]),s._v(" "),t("p",[s._v("配置文件"),t("strong",[s._v("my.ini")]),s._v("内容如下")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqld"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置3306端口")]),s._v("\nport"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置mysql的安装目录")]),s._v("\nbasedir"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("D:\\Program Files\\"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DataBase")]),s._v("\\MySql\\mysql8"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置mysql数据库的数据的存放目录")]),s._v("\ndatadir"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("D:\\Program Files\\"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DataBase")]),s._v("\\MySql\\mysql8"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\\"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Data")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许最大连接数")]),s._v("\nmax_connections"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许连接失败的次数。这是为了防止有人从该主机试图攻击数据库系统")]),s._v("\nmax_connect_errors"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务端使用的字符集默认为UTF8")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("character")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("server"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建新表时将使用的默认存储引擎")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("storage"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("engine")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INNODB")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认使用“mysql_native_password”插件认证")]),s._v("\ndefault_authentication_plugin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql_native_password\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置mysql客户端默认字符集")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("character")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8mb4\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置mysql客户端连接服务端时默认使用的端口")]),s._v("\nport"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("character")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8\n")])])]),t("h2",{attrs:{id:"四、运行准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、运行准备"}},[s._v("#")]),s._v(" 四、运行准备")]),s._v(" "),t("p",[t("strong",[s._v("以管理员身份打开命令行，切换到安装MySQL的目录下，再切换到bin目录下")])]),s._v(" "),t("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/blog/image-20230308154130024.png",alt:"image-20230308154130024"}}),s._v(" "),t("p",[t("strong",[s._v("然后切换到mysql的bin目录下")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/blog/image-20230308163450092.png",alt:"image-20230308163450092"}})]),s._v(" "),t("h2",{attrs:{id:"五、安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、安装"}},[s._v("#")]),s._v(" 五、安装")]),s._v(" "),t("p",[t("strong",[s._v("执行MySQL初始化命令 mysqld --initialize --console")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/blog/image-20230308163623315.png",alt:"image-20230308163623315"}})]),s._v(" "),t("p",[t("strong",[s._v("初始化完成后生成的用户名和密码（红框所示位置即为密码），即root用户和生成的密码，后续我们可以更改。")])]),s._v(" "),t("p",[t("strong",[s._v("安装MySQL的服务mysqld，同样在bin目录下，执行MySQL服务安装命令 mysqld --install 服务名(不写的话默认服务名是mysql)")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/blog/image-20230308163714601.png",alt:"image-20230308163714601"}})]),s._v(" "),t("p",[t("code",[s._v("因为我这里先前已经安装了，这里只是展示一下")]),s._v("。")]),s._v(" "),t("p",[s._v("启动MySQL服务，命令为：net start mysql80。其中(停止服务：net stop mysql80 ，卸载服务：sc delete 服务名)")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/blog/image-20230308163746873.png",alt:"image-20230308163746873"}})]),s._v(" "),t("h2",{attrs:{id:"六、登录mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六、登录mysql"}},[s._v("#")]),s._v(" 六、登录MySQL")]),s._v(" "),t("p",[t("strong",[s._v("输入命令：mysql -u root -p ，（其中-u root表示用户名为root，-p表示登录密码）登录，然后提示输入密码，密位为先前初始化红框所示。")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/blog/image-20230308163817166.png",alt:"image-20230308163817166"}})]),s._v(" "),t("p",[t("strong",[s._v("由于自动生成的密码比较复杂，我们可以更改密码，更改密码命令为：alter user root@’localhost’ identified by ‘xsq!@123’; 其中单引号内为更改后的密码。")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/blog/image-20230308163834647.png",alt:"image-20230308163834647"}})]),s._v(" "),t("p",[t("strong",[s._v("然后输入exit;命令退出mysql，重新登录mysql检验一下密码是否修改成功，")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/blog/image-20230308164103186.png",alt:"image-20230308164103186"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);