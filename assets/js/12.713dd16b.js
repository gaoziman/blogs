(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{340:function(t,a,s){"use strict";s.r(a);var r=s(7),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[a("code",[t._v("jmeter")]),t._v("算是我们日常比较常用的压测工具，这篇文章笔者就介绍一下基于"),a("code",[t._v("win10")]),t._v("完成"),a("code",[t._v("jmeter")]),t._v("的安装及使用。")]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("h3",{attrs:{id:"下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[t._v("#")]),t._v(" 下载")]),t._v(" "),a("p",[t._v("首先我们必须到达官网下载对应的安装包。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://archive.apache.org/dist/jmeter/binaries/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://archive.apache.org/dist/jmeter/binaries/(opens new window)"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("注意下载的时候必须下载"),a("code",[t._v("Binaries")]),t._v("类型而非源码类型，否则启动时可能会抛出"),a("code",[t._v("Unable to access jarfile ApacheJMeter")]),t._v("，如下图所示，笔者本次下载的就是"),a("code",[t._v("5.1")]),t._v("版本。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202304021053945.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("h3",{attrs:{id:"配置环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置环境变量"}},[t._v("#")]),t._v(" 配置环境变量")]),t._v(" "),a("p",[t._v("完成下载后，我们可以将"),a("code",[t._v("jmeter")]),t._v("存放到自己喜欢的目录然后设置环境变量。首先添加一个环境变量"),a("code",[t._v("JMETER_HOME")]),t._v("，值为"),a("code",[t._v("jmeter")]),t._v("的存放路径")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202304021053630.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("然后在环境变量"),a("code",[t._v("path")]),t._v("添加一条"),a("code",[t._v("%JMETER_HOME%\\bin")])]),t._v(" "),a("h3",{attrs:{id:"启动测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动测试"}},[t._v("#")]),t._v(" 启动测试")]),t._v(" "),a("p",[t._v("配置完成环境变量后，我们就可以启动测试可用性了，我们打开"),a("code",[t._v("cmd")]),t._v("控制台输入"),a("code",[t._v("jmeter")]),t._v("，如下所示，如果输出这样一段文字并且启动的"),a("code",[t._v("jmeter")]),t._v("的图形界面则说明安装成功了。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("C")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\\"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Users")]),t._v("\\shark"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Gao")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("jmeter\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Don")]),t._v("'t use "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GUI")]),t._v(" mode "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" load testing "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" only "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")]),t._v(" creation and "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("debugging"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("\nFor")]),t._v(" load testing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" use "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CLI")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Mode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("was "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NON")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GUI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n   jmeter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("t "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("jmx file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("l "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("results file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("e "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("o "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Path")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("web")]),t._v(" report folder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" increase "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Java")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Heap")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("meet")]),t._v(" your test requirements"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Modify")]),t._v(" current env variable "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-Xms1g -Xmx1g -XX:MaxMetaspaceSize=256m"')]),t._v(" in the jmeter batch file\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Check")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("jmeter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usermanual"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("best"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("practices"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("\n")])])]),a("h3",{attrs:{id:"调整为中文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调整为中文"}},[t._v("#")]),t._v(" 调整为中文")]),t._v(" "),a("p",[t._v("我们进入"),a("code",[t._v("apache-jmeter-5.1\\bin")]),t._v("找到文件"),a("code",[t._v("jmeter.properties")]),t._v("，如下图，找到"),a("code",[t._v("language")]),t._v("改为"),a("code",[t._v("zh_CN")]),t._v("，下次启动直接生效。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202304021053666.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("h2",{attrs:{id:"压测"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#压测"}},[t._v("#")]),t._v(" 压测")]),t._v(" "),a("h3",{attrs:{id:"创建线程组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建线程组"}},[t._v("#")]),t._v(" 创建线程组")]),t._v(" "),a("p",[t._v("要进行压测，我们首先需要创建一个线程组。如下图所示:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202304021053723.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("创建线程组之后，我们就可以设置线程组名称，压测参数。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202304021053695.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("h3",{attrs:{id:"创建压测地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建压测地址"}},[t._v("#")]),t._v(" 创建压测地址")]),t._v(" "),a("p",[t._v("如下图，右键创建"),a("code",[t._v("HTTP")]),t._v("请求。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202304021053967.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("输入请求的协议类型，地址、端口号、映射路径、参数等。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202304021053934.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("h3",{attrs:{id:"添加结果树和聚合报告"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加结果树和聚合报告"}},[t._v("#")]),t._v(" 添加结果树和聚合报告")]),t._v(" "),a("p",[t._v("然后我们就可以进行压测了，但是笔者希望看到压测结果和聚合报告，这时候我们就可以右键刚刚创建的"),a("code",[t._v("HTTP")]),t._v("请求，添加结果树和聚合报告")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202304021053070.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("h3",{attrs:{id:"点击启动进行压测"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#点击启动进行压测"}},[t._v("#")]),t._v(" 点击启动进行压测")]),t._v(" "),a("p",[t._v("如下图，我们点击这个绿色按钮即可开始压测。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202304021053616.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("点击结果树就能看到请求结果")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202304021053556.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("点击聚合报告就能看到性能测试报告")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202304021053589.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("h2",{attrs:{id:"基于jmeter测试post请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于jmeter测试post请求"}},[t._v("#")]),t._v(" 基于Jmeter测试POST请求")]),t._v(" "),a("p",[t._v("了解了jmeter整体的操作之后，我们再来补充一下日常用的最多的json传参的post请求，由于jmeter界面发起POST稍微有些麻烦，所以笔者就在这里补充一下post请求的配置步骤：")]),t._v(" "),a("ol",[a("li",[t._v("首先自然是填写"),a("code",[t._v("HTTP")]),t._v("请求的常规信息，如下图，设置请求方式、映射地址、请求参数、端口号等信息:")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202304021053231.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("ol",[a("li",[t._v("重点来了，我们必须手动创建"),a("code",[t._v("HTTP")]),t._v("信息头管理器，配置文本类型告知"),a("code",[t._v("Jmeter")]),t._v("我们当前发起的请求是参数为"),a("code",[t._v("JSON")]),t._v("格式的"),a("code",[t._v("POST")]),t._v("请求，如下图所示点击对应选项创建"),a("code",[t._v("HTTP")]),t._v("信息头管理器。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202304021053228.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("如下图，"),a("code",[t._v("key")]),t._v("和"),a("code",[t._v("value")]),t._v("分别配置"),a("code",[t._v("Content-Type")]),t._v("和"),a("code",[t._v("application/json;charset=UTF-8")]),t._v("，完成信息头的配置之后，我们就可以发起"),a("code",[t._v("POST")]),t._v("请求开始着手压测了。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202304021053290.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/Jenny_He/article/details/88926605",target:"_blank",rel:"noopener noreferrer"}},[t._v("win10 jmeter 5.1.1安装教程(opens new window)"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/wlwxww/article/details/87890886",target:"_blank",rel:"noopener noreferrer"}},[t._v("jmeter 启动Error: Unable to access jarfile ApacheJMeter.jar错误(opens new window)"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/weixin_45412176/article/details/106790525",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用Jmeter查看聚合报告(opens new window)"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/lht3347/article/details/110186172",target:"_blank",rel:"noopener noreferrer"}},[t._v("一文搞定Jmeter发送Get与Post请求(HTTP)"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);