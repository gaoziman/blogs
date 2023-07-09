(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{401:function(t,_,v){"use strict";v.r(_);var i=v(7),a=Object(i.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[t._v("随着互联网技术的快速发展，一些传统的IT系统支撑遇到了越来越多的问题：")]),t._v(" "),_("ul",[_("li",[t._v("系统的复杂性越来越高")]),t._v(" "),_("li",[t._v("线上访问压力大，交付速度无法满足业务需求")]),t._v(" "),_("li",[t._v("设备采购和维护成本高，测试、部署成本高")]),t._v(" "),_("li",[t._v("IT运维管理复杂，构建一只全功能团队困难")])]),t._v(" "),_("p",[t._v("针对上述问题，传统的单体结构已经不再适用于复杂度日益渐增的产品，因此一种新的软件架构提供了解决方案——"),_("code",[t._v("微服务")]),t._v("。")]),t._v(" "),_("p",[t._v("随着互联网行业的发展，对服务的要求也越来越高，服务架构也从单体架构逐渐演变为现在流行的微服务架构。这些架构之间有怎样的差别呢？")]),t._v(" "),_("h2",{attrs:{id:"_1-互联网应用架构演进"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-互联网应用架构演进"}},[t._v("#")]),t._v(" 1. 互联网应用架构演进")]),t._v(" "),_("h3",{attrs:{id:"_1-1-单体应用架构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-单体应用架构"}},[t._v("#")]),t._v(" 1.1 单体应用架构")]),t._v(" "),_("p",[t._v("在诞生之初，系统的用户量、数据量规模都比较小，项目所有的功能模块都放在一个工程中编码、编译、打包并且部署在一个Tomcat容器中的架构模式就是单体应用架构，这样的架构既简单实用、便于维护，成本又低，成为了那个时代的主流架构方式。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306081533614.png",alt:"image-20230608153308548"}})]),t._v(" "),_("p",[_("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306081529000.png",alt:"image-20230608152904928"}})]),t._v(" "),_("p",[_("strong",[t._v("优点：")])]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("高效开发")]),t._v("：项目前期开发节奏快，团队成员少的时候能够快速迭代")]),t._v(" "),_("li",[_("strong",[t._v("架构简单")]),t._v("：MVC架构，只需要借助IDE开发、调试即可")]),t._v(" "),_("li",[_("strong",[t._v("易于测试")]),t._v("：只需要通过单元测试或者浏览器完成")]),t._v(" "),_("li",[_("strong",[t._v("易于部署")]),t._v("：打包成单个可执行的jar或者打成war包放到容器内启动")])]),t._v(" "),_("p",[t._v("​\t单体架构的应用比较容易部署、测试， 在项目的初期，单体应用可以很好地运行。然而，随着需求的不断增加， 越来越多的人加入开发团队，代码库也在飞速地膨胀。慢慢地，单体应用变得越来越臃肿，可维护性、灵活性逐渐降低，维护成本越来越高。")]),t._v(" "),_("p",[_("strong",[t._v("缺点：")])]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("可靠性差")]),t._v("： 某个应用Bug，例如死循环、内存溢出等， 可能会导致整个应用的崩溃")]),t._v(" "),_("li",[_("strong",[t._v("复杂性高")]),t._v("： 以一个百万行级别的单体应用为例，整个项目包含的模块多、模块的边界模糊、 依赖关系不清晰、 代码质量参差不齐、 混乱地堆砌在一起。使得整个项目非常复杂。")]),t._v(" "),_("li",[_("strong",[t._v("扩展能力受限")]),t._v("： 单体应用只能作为一个整体进行扩展，无法根据业务模块的需要进行伸缩。例如，应用中有的模块是计算密集型的，它需要强劲的CPU； 有的模块则是IO密集型的，需要更大的内存。 由于这些模块部署在一起，不得不在硬件的选择上做出妥协。")])]),t._v(" "),_("p",[t._v("业务量上涨之后，单体应用架构进一步丰富变化，比如应用集群部署、使用Nginx进行负载均衡、增加缓存服务器、增加文件服务器、数据库集群并做读写分离等，通过以上措施增强应对高并发的能力、应对一定的复杂业务场景，但依然属于单体应用架构。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306081551049.png",alt:"image-20230608155148956"}})]),t._v(" "),_("h3",{attrs:{id:"_1-2-垂直应用架构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-垂直应用架构"}},[t._v("#")]),t._v(" 1.2 垂直应用架构")]),t._v(" "),_("p",[t._v("​\t\t为了避免上面提到的那些问题，开始做模块的垂直划分，做垂直划分的原则是基于系统现有的业务特性来做，核心目标第一个是为了业务之间互不影响，第二个是在研发团队的壮大后为了提高效率，减少组件之间的依赖。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306081522326.png",alt:"image-20200921115149514"}})]),t._v(" "),_("p",[_("strong",[t._v("优点")])]),t._v(" "),_("ul",[_("li",[_("p",[t._v("系统拆分实现了流量分担，解决了并发问题")])]),t._v(" "),_("li",[_("p",[t._v("可以针对不同模块进行优化")])]),t._v(" "),_("li",[_("p",[t._v("方便水平扩展，负载均衡，容错率提高")])]),t._v(" "),_("li",[_("p",[t._v("系统间相互独立，互不影响，新的业务迭代时更加高效")]),t._v(" "),_("p",[_("strong",[t._v("缺点")])])]),t._v(" "),_("li",[_("p",[t._v("服务之间相互调用，如果某个服务的端扣或者ip地址发生改变，调用的系统得手动改变")])]),t._v(" "),_("li",[_("p",[t._v("搭建集群之后，实现负载均衡比较复杂，如：内网负载，在迁移机器时会影响调用方的路 由，导致线上故障")])]),t._v(" "),_("li",[_("p",[t._v("服务之间调用方式不统一，基于 httpclient 、 webservice ，接口协议不统一")])]),t._v(" "),_("li",[_("p",[t._v("服务监控不到位：除了依靠端口、进程的监控，调用的成功率、失败率、总耗时等等这些监 控指标是没有的")])])]),t._v(" "),_("h3",{attrs:{id:"_1-3-soa应用架构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-soa应用架构"}},[t._v("#")]),t._v(" 1.3 SOA应用架构")]),t._v(" "),_("p",[t._v("​\t\t在做了垂直划分以后，模块随之增多，维护的成本在也变高，一些通用的业务和模块重复的越来越多，为了解决上面提到的接口协议不统一、服务无法监控、服务的负载均衡，引入了阿里巴巴开源的 Dubbo ，一款高性能、轻量级的开源Java RPC框架，可以和Spring框架无缝集成。它提供了三个核心能力：面向接口的远程方法调用，智能容错和负载均衡，以及服务自动注册和发现。")]),t._v(" "),_("p",[t._v("​\t\tSOA (Service-Oriented Architecture)，即面向服务的架构。根据实际业务，把系统拆分成合适的、独立部署的模块，模块之间相互独立（通过Webservice/Dubbo等技术进行通信）。")]),t._v(" "),_("p",[t._v("​\t\t优点：分布式、松耦合、扩展灵活、可重用。")]),t._v(" "),_("p",[t._v("​\t\t缺点：服务抽取粒度较大、服务调用方和提供方耦合度较高（接口耦合度）")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306081525273.png",alt:"image-20200921115445100"}})]),t._v(" "),_("h3",{attrs:{id:"_1-4-微服务应用架构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-微服务应用架构"}},[t._v("#")]),t._v(" 1.4 微服务应用架构")]),t._v(" "),_("p",[t._v("​\t\t微服务架构可以说是SOA架构的一种拓展，这种架构模式下它"),_("strong",[t._v("拆分粒度更小")]),t._v("、服务更独立。把应用拆分成为一个个微小的服务，不同的服务可以使用不同的开发语言和存储，服务之间往往通过Restful等轻量级通信。微服务架构关键在于"),_("strong",[t._v("微小、独立、轻量级通信")]),t._v("。")]),t._v(" "),_("p",[t._v("​\t\t微服务是在 SOA 上做的升华粒度更加细致，微服务架构强调的⼀个重点是"),_("strong",[t._v("业务需要彻底的组件化和服务化")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306081525284.png",alt:"image-20200921115721307"}})]),t._v(" "),_("p",[t._v("微服务架构和SOA架构相似又不同")]),t._v(" "),_("p",[t._v("​\t\t微服务架构和SOA架构很明显的一个区别就是"),_("strong",[t._v("服务拆分粒度的不同")]),t._v("，但是对于系统的架构发展来说，我们所看到的SOA阶段其实服务拆分粒度相对来说已经比较细了（超前哦！），所以上述系统SOA到系统微服务，从服务拆分上来说变化并不大，只是引入了相对完整的新一代Spring Cloud微服务技术。自然，上述我们看到的都是系统架构演变的阶段结果，每一个阶段其实都经历了很多变化，系统的服务拆分其实也是走过了从粗到细，并非绝对的一步到位。")]),t._v(" "),_("p",[t._v("​\t\t"),_("strong",[t._v("举个系统案例来说明SOA和微服务拆分粒度不同")])]),t._v(" "),_("p",[t._v("​\t\t我们在SOA架构的初期，“"),_("code",[t._v("简历投递模块")]),t._v("”和“"),_("code",[t._v("人才搜索模块")]),t._v("”都有简历内容展示的需求，只不过说可能略有区别，一开始在两个模块中各维护了一套简历查询和展示的代码；后期我们将服务更细粒度拆分，拆分出简历基础服务，那么不同模块调用这个基础服务即可。")]),t._v(" "),_("h2",{attrs:{id:"_2-微服务架构体现的思想及优缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-微服务架构体现的思想及优缺点"}},[t._v("#")]),t._v(" 2. 微服务架构体现的思想及优缺点")]),t._v(" "),_("p",[t._v("微服务架构设计的核心思想就是**“微”**，拆分的粒度相对比较小，这样的话单一职责、开发的耦合度就会降低、微小的功能可以独立部署扩展、灵活性强，升级改造影响范围小。")]),t._v(" "),_("p",[_("strong",[t._v("微服务架构的优点")]),t._v(":")]),t._v(" "),_("ul",[_("li",[t._v("微服务很小，便于特定业务功能的聚焦")]),t._v(" "),_("li",[t._v("微服务很小，每个微服务都可以被一个小团队单独实施（开发、测试、部署上线、运维），团队合作一定程度解耦，便于实施敏捷开发")]),t._v(" "),_("li",[t._v("微服务很小，便于重用和模块之间的组装")]),t._v(" "),_("li",[t._v("微服务很独立，那么不同的微服务可以使用不同的语言开发，松耦合")]),t._v(" "),_("li",[t._v("微服务架构下，我们更容易引入新技术")])]),t._v(" "),_("p",[_("strong",[t._v("微服务架构的缺点")])]),t._v(" "),_("ul",[_("li",[_("p",[t._v("微服务架构下，分布式复杂难以管理，当服务数量增加，管理将越加复杂；")])]),t._v(" "),_("li",[_("p",[t._v("微服务架构下，分布式链路跟踪难等；")])])]),t._v(" "),_("h2",{attrs:{id:"_3-微服务架构中的核心概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-微服务架构中的核心概念"}},[t._v("#")]),t._v(" 3. 微服务架构中的核心概念")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("服务注册与服务发现")])]),t._v(" "),_("p",[t._v("例如：订单模块 ->用户模块")]),t._v(" "),_("p",[t._v("​\t服务提供者：用户模块")]),t._v(" "),_("p",[t._v("​\t服务消费者：订单模块")])])]),t._v(" "),_("p",[t._v("​\t\t**服务注册：**服务提供者将所提供服务的信息（服务器IP和端口、服务访问协议等）注册/登记到注册中心")]),t._v(" "),_("p",[t._v("​\t\t**服务发现：**服务消费者能够从注册中心获取到较为实时的服务列表，然后根究一定的策略选择一个服务访问")]),t._v(" "),_("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306081913807.png",alt:"image-20200921121002811"}}),t._v(" "),_("p",[_("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306081553190.png",alt:"image-20201001143512949"}})]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("负载均衡")])])]),t._v(" "),_("p",[t._v("负载均衡即将请求压力分配到多个服务器（应用服务器、数据库服务器等），以此来提高服务的性能、可靠性")]),t._v(" "),_("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306081913689.png",alt:"image-20200921121612979"}}),t._v(" "),_("ul",[_("li",[_("strong",[t._v("熔断")])])]),t._v(" "),_("p",[t._v("​\t\t熔断即断路保护。微服务架构中，如果下游服务因访问压力过大而响应变慢或失败，上游服务为了保护系统整体可用性，可以暂时切断对下游服务的调用。这种牺牲局部，保全整体的措施就叫做熔断。")]),t._v(" "),_("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306081913063.png",alt:"image-20200921121900709"}}),t._v(" "),_("p",[_("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306081553197.png",alt:"image-20201001143852876"}})]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("链路追踪")])])]),t._v(" "),_("p",[t._v("微服务架构越发流行，一个项目往往拆分成很多个服务，那么一次请求就需要涉及到很多个服务。不同的微服务可能是由不同的团队开发、可能使用不同的编程语言实现、整个项目也有可能部署在了很多服务器上（甚至百台、千台）横跨多个不同的数据中心。所谓链路追踪，就是对一次请求涉及的很多个服务链路进行日志记录、性能监控")]),t._v(" "),_("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306081913612.png",alt:"image-20200921122004045"}}),t._v(" "),_("ul",[_("li",[_("strong",[t._v("API 网关")])])]),t._v(" "),_("p",[t._v("​\t\t微服务架构下，不同的微服务往往会有不同的访问地址，客户端可能需要调用多个服务的接口才能完成一个业务需求，如果让客户端直接与各个微服务通信可能出现：")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("客户端需要调用不同的url地址，增加了维护调用难度")])]),t._v(" "),_("li",[_("p",[t._v("在一定的场景下，也存在跨域请求的问题（前后端分离就会碰到跨域问题，原本我们在后端采用Cors就能解决，现在利用网关，那么就放在网关这层做好了）")])]),t._v(" "),_("li",[_("p",[t._v("每个微服务都需要进行单独的身份认证")]),t._v(" "),_("blockquote",[_("p",[t._v("​\t\t那么，API网关就可以较好的统一处理上述问题，API请求调用统一接入API网关层，由网关转发请求。API网关更专注在安全、路由、流量等问题的处理上（微服务团队专注于处理业务逻辑即可），它的功能比如")])])])]),t._v(" "),_("p",[t._v("​            1.  统一接入（路由）")]),t._v(" "),_("p",[t._v("​\t\t   2.  安全防护（统一鉴权，负责网关访问身份认证验证，与“访问认证中心”通信，实际认证业务逻辑交移“访问认证中心”处理）")]),t._v(" "),_("p",[t._v("​\t\t 3.  黑白名单（实现通过IP地址控制禁止访问网关功能，控制访问）")]),t._v(" "),_("p",[t._v("​\t\t4. 协议适配（实现通信协议校验、适配转换的功能）")]),t._v(" "),_("p",[t._v("​\t\t5. 流量管控（限流）")]),t._v(" "),_("p",[t._v("​\t\t6.  长短链接支持")]),t._v(" "),_("p",[t._v("​\t\t7.   容错能力（负载均衡）")]),t._v(" "),_("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306081553305.png",alt:"image-20200921122144344"}}),t._v(" "),_("h2",{attrs:{id:"_4-spring-cloud概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-spring-cloud概述"}},[t._v("#")]),t._v(" 4.  Spring Cloud概述")]),t._v(" "),_("h3",{attrs:{id:"_4-1-spring-cloud-是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-spring-cloud-是什么"}},[t._v("#")]),t._v(" 4.1 Spring Cloud 是什么")]),t._v(" "),_("p",[t._v("**我摘抄了百度百科的原话： **")]),t._v(" "),_("p",[t._v("Spring Cloud是一系列框架的有序集合。它利用Spring Boot的开发便利性巧妙地简化了分布式系统基础设施的开发，如服务发现注册、配置中心、消息总线、负载均衡、断路器、数据监控等，都可以用 Spring Boot的开发风格做到一键启动和部署。"),_("strong",[t._v("Spring Cloud并没有重复制造轮子，它只是将目前各家公司开发的比较成熟、经得起实际考验的服务框架组合起来，通过Spring Boot风格进行再封装屏蔽掉了复杂的配置和实现原理，最终给开发者留出了一套简单易懂、易部署和易维护的分布式系统开发工具包")]),t._v("。")]),t._v(" "),_("blockquote",[_("p",[t._v("Spring Cloud是一系列框架的有序集合（Spring Cloud是一个规范）")]),t._v(" "),_("p",[t._v("开发服务发现注册、配置中心、消息总线、负载均衡、断路器、数据监控等")]),t._v(" "),_("p",[t._v("利用Spring Boot的开发便利性简化了微服务架构的开发（自动装配）")])]),t._v(" "),_("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306081913492.png",alt:"image-20200921141543080"}}),t._v(" "),_("p",[t._v("这里，我们需要注意，"),_("code",[t._v("Spring Cloud")]),t._v("其实是一套规范，是一套用于构建微服务架构的规范，而不是一个可以拿来即用的框架（所谓规范就是应该有哪些功能组件，然后组件之间怎么配合，共同完成什么事情）。在这个规范之下第三方的"),_("code",[t._v("Netflix")]),t._v("公司开发了一些组件、Spring官方开发了一些"),_("code",[t._v("框架/组件")]),t._v("，包括第三方的阿里巴巴开发了一套框架/组件集合"),_("code",[t._v("Spring Cloud Alibaba")]),t._v("，这些才是"),_("code",[t._v("Spring Cloud")]),t._v("规范的实现。")]),t._v(" "),_("blockquote",[_("p",[t._v("​\t\tNetflix搞了一套 ，简称SCN")]),t._v(" "),_("p",[t._v("​\t\tSpring Cloud 吸收了Netflix公司的产品基础之上自己也搞了几个组件")]),t._v(" "),_("p",[t._v("​\t\t阿里巴巴在之前的基础上搞出了一堆微服务组件,Spring Cloud Alibaba（SCA）")])]),t._v(" "),_("h3",{attrs:{id:"_4-2-spring-cloud-解决什么问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-spring-cloud-解决什么问题"}},[t._v("#")]),t._v(" 4.2 Spring Cloud 解决什么问题")]),t._v(" "),_("p",[_("code",[t._v("Spring Cloud")]),t._v(" 规范及实现意图要解决的问题其实就是微服务架构实施过程中存在的一些问题，比如微服务架构中的服务注册发现问题、网络问题（比如熔断场景）、统一认证安全授权问题、负载均衡问题、链路追踪等问题。")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("Distributed/versioned configuration （分布式/版本化配置）")])]),t._v(" "),_("li",[_("p",[t._v("Service registration and discovery （服务注册和发现）")])]),t._v(" "),_("li",[_("p",[t._v("Routing （智能路由）")])]),t._v(" "),_("li",[_("p",[t._v("Service-to-service calls （服务调用）")])]),t._v(" "),_("li",[_("p",[t._v("Load balancing （负载均衡）")])]),t._v(" "),_("li",[_("p",[t._v("Circuit Breakers （熔断器）")])]),t._v(" "),_("li",[_("p",[t._v("Global locks  （全局锁）")])]),t._v(" "),_("li",[_("p",[t._v("Leadership election and cluster state （ 选举与集群状态管理）")])]),t._v(" "),_("li",[_("p",[t._v("Distributed messaging  （分布式消息传递平台）")])])]),t._v(" "),_("h2",{attrs:{id:"_5-spring-cloud-架构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-spring-cloud-架构"}},[t._v("#")]),t._v(" 5. Spring Cloud 架构")]),t._v(" "),_("p",[t._v("如前所述，Spring Cloud是一个微服务相关规范，这个规范意图为搭建微服务架构提供一站式服务，"),_("strong",[t._v("采用组件（框架）化机制")]),t._v("定义一系列组件，各类组件针对性的处理微服务中的特定问题，这些组件共同来构成"),_("strong",[t._v("Spring Cloud微服务技术栈")])]),t._v(" "),_("h3",{attrs:{id:"_5-1-spring-cloud-核心组件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-spring-cloud-核心组件"}},[t._v("#")]),t._v(" 5.1 Spring Cloud 核心组件")]),t._v(" "),_("p",[t._v("​\t\tSpring Cloud 生态圈中的组件，按照发展可以分为第一代 Spring Cloud组件和第二代 Spring Cloud组件。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"left"}}),t._v(" "),_("th",{staticStyle:{"text-align":"left"}},[t._v("第一代 Spring Cloud（Netflix，SCN）")]),t._v(" "),_("th",[t._v("第二代 Spring Cloud（主要就是Spring Cloud Alibaba，SCA）")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("注册中心")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("Netflix Eureka")]),t._v(" "),_("td",[t._v("阿里巴巴 Nacos")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("客户端负载均衡")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("Netflix Ribbon")]),t._v(" "),_("td",[t._v("阿里巴巴 Dubbo LB、Spring Cloud Loadbalancer")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("熔断器")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("Netflix Hystrix")]),t._v(" "),_("td",[t._v("阿里巴巴 Sentinel")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("网关")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("Netflix Zuul：性能一般，未来将退出Spring Cloud 生态圈")]),t._v(" "),_("td",[_("strong",[t._v("官方 Spring Cloud Gateway")])])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("配置中心")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("官方 Spring Cloud Config")]),t._v(" "),_("td",[t._v("阿里巴巴 Nacos、携程 Apollo")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("服务调用")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("Netflix Feign")]),t._v(" "),_("td",[t._v("阿里巴巴 Dubbo RPC")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("消息驱动")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[_("strong",[t._v("官方 Spring Cloud Stream")])]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("链路追踪")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[_("strong",[t._v("官方 Spring Cloud Sleuth/Zipkin")])]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}}),t._v(" "),_("td",{staticStyle:{"text-align":"left"}}),t._v(" "),_("td",[_("strong",[t._v("阿里巴巴 seata 分布式事务方案")])])])])]),t._v(" "),_("h3",{attrs:{id:"_5-2-spring-cloud-体系结构-组件协同工作机制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-spring-cloud-体系结构-组件协同工作机制"}},[t._v("#")]),t._v(" 5.2 Spring Cloud 体系结构（组件协同工作机制）")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306081611634.png",alt:"image-20200921142652330"}})]),t._v(" "),_("p",[t._v("Spring Cloud中的各组件协同工作，才能够支持一个完整的微服务架构。比如")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("注册中心负责服务的注册与发现，很好将各服务连接起来")])]),t._v(" "),_("li",[_("p",[t._v("API网关负责转发所有外来的请求")])]),t._v(" "),_("li",[_("p",[t._v("断路器负责监控服务之间的调用情况，连续多次失败进行熔断保护。")])]),t._v(" "),_("li",[_("p",[t._v("配置中心提供了统一的配置信息管理服务,可以实时的通知各个服务获取最新的配置信息")])])]),t._v(" "),_("h2",{attrs:{id:"_6-spring-cloud-与-dubbo-对比"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-spring-cloud-与-dubbo-对比"}},[t._v("#")]),t._v(" 6. Spring Cloud 与 Dubbo 对比")]),t._v(" "),_("p",[t._v("​\t\tDubbo是阿里巴巴公司开源的一个高性能优秀的服务框架，基于RPC调用，对于目前使用率较高的Spring Cloud Netflix来说，它是基于HTTP的，所以效率上没有Dubbo高，但问题在于Dubbo体系的组件不全，不能够提供一站式解决方案，比如服务注册与发现需要借助于Zookeeper等实现，而Spring Cloud Netflix则是真正的提供了一站式服务化解决方案，且有Spring大家族背景。")]),t._v(" "),_("p",[t._v("​\t\t前些年，Dubbo使用率高于SpringCloud，但目前Spring Cloud在服务化/微服务解决方案中已经有了非常好的发展趋势。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306081612568.png",alt:"image-20201001165006733"}})]),t._v(" "),_("h2",{attrs:{id:"_7-springcloud-与-springboot-的关系"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-springcloud-与-springboot-的关系"}},[t._v("#")]),t._v(" 7. SpringCloud 与 SpringBoot 的关系")]),t._v(" "),_("p",[t._v("​\t\tSpring Cloud 只是利用了Spring Boot 的特点，让我们能够快速的实现微服务组件开发，否则不使用Spring Boot的话，我们在使用Spring Cloud时，每一个组件的相关Jar包都需要我们自己导入配置以及需要开发人员考虑兼容性等各种情况。所以Spring Boot是我们快速把Spring Cloud微服务技术应用起来的一种方式。")]),t._v(" "),_("p",[_("strong",[t._v("另外，SpringCloud底层是依赖于"),_("code",[t._v("SpringBoot")]),t._v("的，并且有版本的兼容关系，如下：")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306081614098.png",alt:"image-20210713205003790"}})]),t._v(" "),_("p",[t._v("笔者这次的版本是 Hoxton.SR10，因此对应的SpringBoot版本是2.3.x版本。")]),t._v(" "),_("h2",{attrs:{id:"_8-总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-总结"}},[t._v("#")]),t._v(" 8. 总结")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("单体架构：简单方便，高度耦合，扩展性差，适合小型项目。例如：xxx管理系统")])]),t._v(" "),_("li",[_("p",[t._v("分布式架构：松耦合，扩展性好，但架构复杂，难度大。适合大型互联网项目，例如：京东、淘宝")])]),t._v(" "),_("li",[_("p",[t._v("微服务：一种良好的分布式架构方案")]),t._v(" "),_("p",[t._v("①优点：拆分粒度更小、服务更独立、耦合度更低")]),t._v(" "),_("p",[t._v("②缺点：架构非常复杂，运维、监控、部署难度提高")])]),t._v(" "),_("li",[_("p",[t._v("SpringCloud是微服务架构的一站式解决方案，集成了各种优秀微服务功能组件")])])]),t._v(" "),_("p",[t._v("这一节主要是让我们可以系统的认识到互联网架构的一个演变，以及对"),_("code",[t._v("SpringCloud")]),t._v("微服务架构有一个初步认识，下一节我们通过一些"),_("code",[t._v("实战案例")]),t._v("用代码去体会到我们在开发中怎么去构建"),_("code",[t._v("SpringCloud")]),t._v("项目以及如果进一步了解"),_("code",[t._v("SpringCloud")]),t._v("组件，在咱们下期见！欢迎评论区交流讨论！")])])}),[],!1,null,null,null);_.default=a.exports}}]);