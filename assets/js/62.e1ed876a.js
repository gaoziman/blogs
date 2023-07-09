(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{388:function(a,t,e){"use strict";e.r(t);var _=e(7),i=Object(_.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("配套视频参考："),t("a",{attrs:{href:"https://www.bilibili.com/video/BV1iq4y1u7vj?p=1&vd_source=cea816a08805c218ac4390ae9b61ae31",target:"_blank",rel:"noopener noreferrer"}},[a._v("MySQL数据库天花板--康师傅"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"_1-什么是mvcc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是mvcc"}},[a._v("#")]),a._v(" 1. 什么是MVCC")]),a._v(" "),t("p",[a._v("MVCC （Multiversion Concurrency Control），多版本并发控制。顾名思义，MVCC 是通过数据行的多个版本管理来实现数据库的 "),t("code",[a._v("并发控制")]),a._v("。这项技术使得在InnoDB的事务隔离级别下执行 "),t("code",[a._v("一致性读")]),a._v(" 操作有了保证。换言之，就是为了查询一些正在被另一个事务更新的行，并且可以看到它们被更新之前的值，这样 在做查询的时候就不用等待另一个事务释放锁。")]),a._v(" "),t("p",[a._v("MVCC没有正式的标准，在不同的DBMS中MVCC的实现方式可能是不同的，也不是普遍使用的（大家可以参考相关的DBMS文档）。这里讲解InnoDB中MVCC的实现机制（MySQL其他的存储引擎并不支持它）。")]),a._v(" "),t("h2",{attrs:{id:"_2-快照读与当前读"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-快照读与当前读"}},[a._v("#")]),a._v(" 2. 快照读与当前读")]),a._v(" "),t("p",[a._v("MVCC在MySQL InnoDB中的实现主要是为了提高数据库并发性能，用更好的方式去处理 "),t("code",[a._v("读-写冲突")]),a._v(" ，做到 即使有读写冲突时，也能做到 "),t("code",[a._v("不加锁")]),a._v(" ， "),t("code",[a._v("非阻塞并发读")]),a._v(" ，而这个读指的就是 "),t("code",[a._v("快照读")]),a._v(" , 而非 "),t("code",[a._v("当前读")]),a._v(" 。当前 读实际上是一种加锁的操作，是悲观锁的实现。而MVCC本质是采用乐观锁思想的一种方式。")]),a._v(" "),t("h3",{attrs:{id:"_2-1-快照读"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-快照读"}},[a._v("#")]),a._v(" 2.1 快照读")]),a._v(" "),t("p",[a._v("快照读又叫一致性读，读取的是快照数据。"),t("strong",[a._v("不加锁的简单的 SELECT 都属于快照读")]),a._v("，即不加锁的非阻塞 读；比如这样：")]),a._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("SELECT * FROM player WHERE ...\n")])])]),t("p",[a._v("之所以出现快照读的情况，是基于提高并发性能的考虑，快照读的实现是基于MVCC，它在很多情况下， 避免了加锁操作，降低了开销。")]),a._v(" "),t("p",[a._v("既然是基于多版本，那么快照读可能读到的并不一定是数据的最新版本，而有可能是之前的历史版本。")]),a._v(" "),t("p",[a._v("快照读的前提是隔离级别不是串行级别，串行级别下的快照读会退化成当前读。")]),a._v(" "),t("h3",{attrs:{id:"_2-2-当前读"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-当前读"}},[a._v("#")]),a._v(" 2.2 当前读")]),a._v(" "),t("p",[a._v("当前读读取的是记录的最新版本（最新数据，而不是历史版本的数据），读取时还要保证其他并发事务 不能修改当前记录，会对读取的记录进行加锁。加锁的 SELECT，或者对数据进行增删改都会进行当前 读。比如：")]),a._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("SELECT * FROM student LOCK IN SHARE MODE; # 共享锁\nSELECT * FROM student FOR UPDATE; # 排他锁\nINSERT INTO student values ... # 排他锁\nDELETE FROM student WHERE ... # 排他锁\nUPDATE student SET ... # 排他锁\n")])])]),t("h2",{attrs:{id:"_3-复习"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-复习"}},[a._v("#")]),a._v(" 3. 复习")]),a._v(" "),t("h3",{attrs:{id:"_3-1-再谈隔离级别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-再谈隔离级别"}},[a._v("#")]),a._v(" 3.1 再谈隔离级别")]),a._v(" "),t("p",[a._v("我们知道事务有 4 个隔离级别，可能存在三种并发问题：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220714140441064.png",alt:"image-20220714140441064"}})]),a._v(" "),t("img",{staticStyle:{float:"left"},attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220714140510426.png",alt:"image-20220714140510426"}}),a._v(" "),t("p",[t("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220714140541555.png",alt:"image-20220714140541555"}})]),a._v(" "),t("h3",{attrs:{id:"_3-2-隐藏字段、undo-log版本链"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-隐藏字段、undo-log版本链"}},[a._v("#")]),a._v(" 3.2 隐藏字段、Undo Log版本链")]),a._v(" "),t("p",[a._v("回顾一下undo日志的版本链，对于使用 InnoDB 存储引擎的表来说，它的聚簇索引记录中都包含两个必要的隐藏列。")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("trx_id")]),a._v(" ：每次一个事务对某条聚簇索引记录进行改动时，都会把该事务的 "),t("code",[a._v("事务id")]),a._v(" 赋值给 "),t("code",[a._v("trx_id")]),a._v(" 隐藏列。")]),a._v(" "),t("li",[t("code",[a._v("roll_pointer")]),a._v(" ：每次对某条聚簇索引记录进行改动时，都会把旧的版本写入到 "),t("code",[a._v("undo日志")]),a._v(" 中，然 后这个隐藏列就相当于一个指针，可以通过它来找到该记录修改前的信息。")])]),a._v(" "),t("img",{staticStyle:{float:"left"},attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220714140716427.png",alt:"image-20220714140716427"}}),a._v(" "),t("p",[a._v("假设插入该记录的"),t("code",[a._v("事务id")]),a._v("为"),t("code",[a._v("8")]),a._v("，那么此刻该条记录的示意图如下所示：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220714140801595.png",alt:"image-20220714140801595"}})]),a._v(" "),t("blockquote",[t("p",[a._v("insert undo只在事务回滚时起作用，当事务提交后，该类型的undo日志就没用了，它占用的Undo Log Segment也会被系统回收（也就是该undo日志占用的Undo页面链表要么被重用，要么被释放）。")])]),a._v(" "),t("p",[a._v("假设之后两个事务id分别为 "),t("code",[a._v("10")]),a._v(" 、 "),t("code",[a._v("20")]),a._v(" 的事务对这条记录进行"),t("code",[a._v("UPDATE")]),a._v(" 操作，操作流程如下：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220714140846658.png",alt:"image-20220714140846658"}})]),a._v(" "),t("img",{staticStyle:{float:"left"},attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220714140908661.png",alt:"image-20220714140908661"}}),a._v(" "),t("p",[a._v("每次对记录进行改动，都会记录一条undo日志，每条undo日志也都有一个 "),t("code",[a._v("roll_pointer")]),a._v(" 属性 （ "),t("code",[a._v("INSERT")]),a._v(" 操作对应的undo日志没有该属性，因为该记录并没有更早的版本），可以将这些 "),t("code",[a._v("undo日志")]),a._v(" 都连起来，串成一个链表：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220714141012874.png",alt:"image-20220714141012874"}})]),a._v(" "),t("p",[a._v("对该记录每次更新后，都会将旧值放到一条 "),t("code",[a._v("undo日志")]),a._v(" 中，就算是该记录的一个旧版本，随着更新次数 的增多，所有的版本都会被 "),t("code",[a._v("roll_pointer")]),a._v(" 属性连接成一个链表，我们把这个链表称之为 "),t("code",[a._v("版本链")]),a._v(" ，版 本链的头节点就是当前记录最新的值。")]),a._v(" "),t("p",[a._v("每个版本中还包含生成该版本时对应的"),t("code",[a._v("事务id")]),a._v("。")]),a._v(" "),t("h2",{attrs:{id:"_4-mvcc实现原理之readview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-mvcc实现原理之readview"}},[a._v("#")]),a._v(" 4. MVCC实现原理之ReadView")]),a._v(" "),t("p",[a._v("MVCC 的实现依赖于："),t("code",[a._v("隐藏字段")]),a._v("、"),t("code",[a._v("Undo Log")]),a._v("、"),t("code",[a._v("Read View")]),a._v("。")]),a._v(" "),t("h3",{attrs:{id:"_4-1-什么是readview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-什么是readview"}},[a._v("#")]),a._v(" 4.1 什么是ReadView")]),a._v(" "),t("img",{staticStyle:{float:"left"},attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220714141154235.png",alt:"image-20220714141154235"}}),a._v(" "),t("h3",{attrs:{id:"_4-2-设计思路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-设计思路"}},[a._v("#")]),a._v(" 4.2 设计思路")]),a._v(" "),t("p",[a._v("使用 "),t("code",[a._v("READ UNCOMMITTED")]),a._v(" 隔离级别的事务，由于可以读到未提交事务修改过的记录，所以直接读取记录的最新版本就好了。")]),a._v(" "),t("p",[a._v("使用 "),t("code",[a._v("SERIALIZABLE")]),a._v(" 隔离级别的事务，InnoDB规定使用加锁的方式来访问记录。")]),a._v(" "),t("p",[a._v("使用 "),t("code",[a._v("READ COMMITTED")]),a._v(" 和 "),t("code",[a._v("REPEATABLE READ")]),a._v(" 隔离级别的事务，都必须保证读到 "),t("code",[a._v("已经提交了的")]),a._v(" 事务修改过的记录。假如另一个事务已经修改了记录但是尚未提交，是不能直接读取最新版本的记录的，核心问题就是需要判断一下版本链中的哪个版本是当前事务可见的，这是ReadView要解决的主要问题。")]),a._v(" "),t("p",[a._v("这个ReadView中主要包含4个比较重要的内容，分别如下：")]),a._v(" "),t("ol",[t("li",[t("p",[t("code",[a._v("creator_trx_id")]),a._v(" ，创建这个 Read View 的事务 ID。")]),a._v(" "),t("blockquote",[t("p",[a._v("说明：只有在对表中的记录做改动时（执行INSERT、DELETE、UPDATE这些语句时）才会为 事务分配事务id，否则在一个只读事务中的事务id值都默认为0。")])])]),a._v(" "),t("li",[t("p",[t("code",[a._v("trx_ids")]),a._v(" ，表示在生成ReadView时当前系统中活跃的读写事务的 "),t("code",[a._v("事务id列表")]),a._v(" 。")])]),a._v(" "),t("li",[t("p",[t("code",[a._v("up_limit_id")]),a._v(" ，活跃的事务中最小的事务 ID。")])]),a._v(" "),t("li",[t("p",[t("code",[a._v("low_limit_id")]),a._v(" ，表示生成ReadView时系统中应该分配给下一个事务的 id 值。low_limit_id 是系 统最大的事务id值，这里要注意是系统中的事务id，需要区别于正在活跃的事务ID。")])])]),a._v(" "),t("blockquote",[t("p",[a._v("注意：low_limit_id并不是trx_ids中的最大值，事务id是递增分配的。比如，现在有id为1， 2，3这三个事务，之后id为3的事务提交了。那么一个新的读事务在生成ReadView时， trx_ids就包括1和2，up_limit_id的值就是1，low_limit_id的值就是4。")])]),a._v(" "),t("img",{staticStyle:{float:"left"},attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220714142254768.png",alt:"image-20220714142254768"}}),a._v(" "),t("h3",{attrs:{id:"_4-3-readview的规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-readview的规则"}},[a._v("#")]),a._v(" 4.3 ReadView的规则")]),a._v(" "),t("p",[a._v("有了这个ReadView，这样在访问某条记录时，只需要按照下边的步骤判断记录的某个版本是否可见。")]),a._v(" "),t("ul",[t("li",[a._v("如果被访问版本的trx_id属性值与ReadView中的 creator_trx_id 值相同，意味着当前事务在访问它自己修改过的记录，所以该版本可以被当前事务访问。")]),a._v(" "),t("li",[a._v("如果被访问版本的trx_id属性值小于ReadView中的 up_limit_id 值，表明生成该版本的事务在当前事务生成ReadView前已经提交，所以该版本可以被当前事务访问。")]),a._v(" "),t("li",[a._v("如果被访问版本的trx_id属性值大于或等于ReadView中的 low_limit_id 值，表明生成该版本的事务在当前事务生成ReadView后才开启，所以该版本不可以被当前事务访问。")]),a._v(" "),t("li",[a._v("如果被访问版本的trx_id属性值在ReadView的 up_limit_id 和 low_limit_id 之间，那就需要判断一下trx_id属性值是不是在 trx_ids 列表中。\n"),t("ul",[t("li",[a._v("如果在，说明创建ReadView时生成该版本的事务还是活跃的，该版本不可以被访问。")]),a._v(" "),t("li",[a._v("如果不在，说明创建ReadView时生成该版本的事务已经被提交，该版本可以被访问。")])])])]),a._v(" "),t("h3",{attrs:{id:"_4-4-mvcc整体操作流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-mvcc整体操作流程"}},[a._v("#")]),a._v(" 4.4 MVCC整体操作流程")]),a._v(" "),t("p",[a._v("了解了这些概念之后，我们来看下当查询一条记录的时候，系统如何通过MVCC找到它：")]),a._v(" "),t("ol",[t("li",[a._v("首先获取事务自己的版本号，也就是事务 ID；")]),a._v(" "),t("li",[a._v("获取 ReadView；")]),a._v(" "),t("li",[a._v("查询得到的数据，然后与 ReadView 中的事务版本号进行比较；")]),a._v(" "),t("li",[a._v("如果不符合 ReadView 规则，就需要从 Undo Log 中获取历史快照；")]),a._v(" "),t("li",[a._v("最后返回符合规则的数据。")])]),a._v(" "),t("img",{staticStyle:{float:"left"},attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220715130639408.png",alt:"image-20220715130639408"}}),a._v(" "),t("p",[a._v("在隔离级别为读已提交（Read Committed）时，一个事务中的每一次 SELECT 查询都会重新获取一次 Read View。")]),a._v(" "),t("p",[a._v("如表所示：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220715130843147.png",alt:"image-20220715130843147"}})]),a._v(" "),t("blockquote",[t("p",[a._v("注意，此时同样的查询语句都会重新获取一次 Read View，这时如果 Read View 不同，就可能产生不可重复读或者幻读的情况。")])]),a._v(" "),t("p",[a._v("当隔离级别为可重复读的时候，就避免了不可重复读，这是因为一个事务只在第一次 SELECT 的时候会获取一次 Read View，而后面所有的 SELECT 都会复用这个 Read View，如下表所示：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220715130916437.png",alt:"image-20220715130916437"}})]),a._v(" "),t("h2",{attrs:{id:"_5-举例说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-举例说明"}},[a._v("#")]),a._v(" 5. 举例说明")]),a._v(" "),t("img",{staticStyle:{float:"left"},attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220715131200077.png",alt:"image-20220715131200077"}}),a._v(" "),t("h3",{attrs:{id:"_5-1-read-committed隔离级别下"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-read-committed隔离级别下"}},[a._v("#")]),a._v(" 5.1 READ COMMITTED隔离级别下")]),a._v(" "),t("p",[t("strong",[a._v("READ COMMITTED ：每次读取数据前都生成一个ReadView。")])]),a._v(" "),t("p",[a._v("现在有两个 "),t("code",[a._v("事务id")]),a._v(" 分别为 "),t("code",[a._v("10")]),a._v(" 、 "),t("code",[a._v("20")]),a._v(" 的事务在执行:")]),a._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('# Transaction 10\nBEGIN;\nUPDATE student SET name="李四" WHERE id=1;\nUPDATE student SET name="王五" WHERE id=1;\n# Transaction 20\nBEGIN;\n# 更新了一些别的表的记录\n...\n')])])]),t("blockquote",[t("p",[a._v("说明：事务执行过程中，只有在第一次真正修改记录时（比如使用INSERT、DELETE、UPDATE语句），才会被分配一个单独的事务id，这个事务id是递增的。所以我们才在事务2中更新一些别的表的记录，目的是让它分配事务id。")])]),a._v(" "),t("p",[a._v("此刻，表student 中 id 为 1 的记录得到的版本链表如下所示：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220715133640655.png",alt:"image-20220715133640655"}})]),a._v(" "),t("p",[a._v("假设现在有一个使用 "),t("code",[a._v("READ COMMITTED")]),a._v(" 隔离级别的事务开始执行：")]),a._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# 使用READ COMMITTED隔离级别的事务\nBEGIN;\n\n# SELECT1：Transaction 10、20未提交\nSELECT * FROM student WHERE id = 1; # 得到的列name的值为'张三'\n")])])]),t("img",{staticStyle:{float:"left"},attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220715134540737.png",alt:"image-20220715134540737"}}),a._v(" "),t("p",[a._v("之后，我们把 "),t("code",[a._v("事务id")]),a._v(" 为 "),t("code",[a._v("10")]),a._v(" 的事务提交一下：")]),a._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('# Transaction 10\nBEGIN;\nUPDATE student SET name="李四" WHERE id=1;\nUPDATE student SET name="王五" WHERE id=1;\nCOMMIT;\n')])])]),t("p",[a._v("然后再到 "),t("code",[a._v("事务id")]),a._v(" 为 "),t("code",[a._v("20")]),a._v(" 的事务中更新一下表 "),t("code",[a._v("student")]),a._v(" 中 "),t("code",[a._v("id")]),a._v(" 为 "),t("code",[a._v("1")]),a._v(" 的记录：")]),a._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('# Transaction 20\nBEGIN;\n# 更新了一些别的表的记录\n...\nUPDATE student SET name="钱七" WHERE id=1;\nUPDATE student SET name="宋八" WHERE id=1;\n')])])]),t("p",[a._v("此刻，表student中 "),t("code",[a._v("id")]),a._v(" 为 "),t("code",[a._v("1")]),a._v(" 的记录的版本链就长这样：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220715134839081.png",alt:"image-20220715134839081"}})]),a._v(" "),t("p",[a._v("然后再到刚才使用 "),t("code",[a._v("READ COMMITTED")]),a._v(" 隔离级别的事务中继续查找这个 id 为 1 的记录，如下：")]),a._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# 使用READ COMMITTED隔离级别的事务\nBEGIN;\n\n# SELECT1：Transaction 10、20均未提交\nSELECT * FROM student WHERE id = 1; # 得到的列name的值为'张三'\n\n# SELECT2：Transaction 10提交，Transaction 20未提交\nSELECT * FROM student WHERE id = 1; # 得到的列name的值为'王五'\n")])])]),t("img",{staticStyle:{float:"left"},attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220715135017000.png",alt:"image-20220715135017000"}}),a._v(" "),t("img",{staticStyle:{float:"left"},attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220715135143939.png",alt:"image-20220715135143939"}}),a._v(" "),t("h3",{attrs:{id:"_5-2-repeatable-read隔离级别下"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-repeatable-read隔离级别下"}},[a._v("#")]),a._v(" 5.2 REPEATABLE READ隔离级别下")]),a._v(" "),t("p",[a._v("使用 "),t("code",[a._v("REPEATABLE READ")]),a._v(" 隔离级别的事务来说，只会在第一次执行查询语句时生成一个 "),t("code",[a._v("ReadView")]),a._v(" ，之后的查询就不会重复生成了。")]),a._v(" "),t("p",[a._v("比如，系统里有两个 "),t("code",[a._v("事务id")]),a._v(" 分别为 "),t("code",[a._v("10")]),a._v(" 、 "),t("code",[a._v("20")]),a._v(" 的事务在执行：")]),a._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('# Transaction 10\nBEGIN;\nUPDATE student SET name="李四" WHERE id=1;\nUPDATE student SET name="王五" WHERE id=1;\n# Transaction 20\nBEGIN;\n# 更新了一些别的表的记录\n...\n')])])]),t("p",[a._v("此刻，表student 中 id 为 1 的记录得到的版本链表如下所示：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220715140006061.png",alt:"image-20220715140006061"}})]),a._v(" "),t("p",[a._v("假设现在有一个使用 "),t("code",[a._v("REPEATABLE READ")]),a._v(" 隔离级别的事务开始执行：")]),a._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# 使用REPEATABLE READ隔离级别的事务\nBEGIN;\n\n# SELECT1：Transaction 10、20未提交\nSELECT * FROM student WHERE id = 1; # 得到的列name的值为'张三'\n")])])]),t("img",{staticStyle:{float:"left"},attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220715140155744.png",alt:"image-20220715140155744"}}),a._v(" "),t("p",[a._v("之后，我们把 "),t("code",[a._v("事务id")]),a._v(" 为 "),t("code",[a._v("10")]),a._v(" 的事务提交一下，就像这样：")]),a._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('# Transaction 10\nBEGIN;\n\nUPDATE student SET name="李四" WHERE id=1;\nUPDATE student SET name="王五" WHERE id=1;\n\nCOMMIT;\n')])])]),t("p",[a._v("然后再到 "),t("code",[a._v("事务id")]),a._v(" 为 "),t("code",[a._v("20")]),a._v(" 的事务中更新一下表 "),t("code",[a._v("student")]),a._v(" 中 "),t("code",[a._v("id")]),a._v(" 为 "),t("code",[a._v("1")]),a._v(" 的记录：")]),a._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('# Transaction 20\nBEGIN;\n# 更新了一些别的表的记录\n...\nUPDATE student SET name="钱七" WHERE id=1;\nUPDATE student SET name="宋八" WHERE id=1;\n')])])]),t("p",[a._v("此刻，表student 中 "),t("code",[a._v("id")]),a._v(" 为 "),t("code",[a._v("1")]),a._v(" 的记录的版本链长这样：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220715140354217.png",alt:"image-20220715140354217"}})]),a._v(" "),t("p",[a._v("然后再到刚才使用 "),t("code",[a._v("REPEATABLE READ")]),a._v(" 隔离级别的事务中继续查找这个 "),t("code",[a._v("id")]),a._v(" 为 "),t("code",[a._v("1")]),a._v(" 的记录，如下：")]),a._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# 使用REPEATABLE READ隔离级别的事务\nBEGIN;\n# SELECT1：Transaction 10、20均未提交\nSELECT * FROM student WHERE id = 1; # 得到的列name的值为'张三'\n# SELECT2：Transaction 10提交，Transaction 20未提交\nSELECT * FROM student WHERE id = 1; # 得到的列name的值仍为'张三'\n")])])]),t("img",{staticStyle:{float:"left"},attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220715140555172.png",alt:"image-20220715140555172"}}),a._v(" "),t("img",{staticStyle:{float:"left"},attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220715140620328.png",alt:"image-20220715140620328"}}),a._v(" "),t("p",[a._v("这次"),t("code",[a._v("SELECT")]),a._v("查询得到的结果是重复的，记录的列"),t("code",[a._v("c")]),a._v("值都是"),t("code",[a._v("张三")]),a._v("，这就是"),t("code",[a._v("可重复读")]),a._v("的含义。如果我们之后再把"),t("code",[a._v("事务id")]),a._v("为"),t("code",[a._v("20")]),a._v("的记录提交了，然后再到刚才使用"),t("code",[a._v("REPEATABLE READ")]),a._v("隔离级别的事务中继续查找这个"),t("code",[a._v("id")]),a._v("为"),t("code",[a._v("1")]),a._v("的记录，得到的结果还是"),t("code",[a._v("张三")]),a._v("，具体执行过程大家可以自己分析一下。")]),a._v(" "),t("h3",{attrs:{id:"_5-3-如何解决幻读"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-如何解决幻读"}},[a._v("#")]),a._v(" 5.3 如何解决幻读")]),a._v(" "),t("p",[a._v("接下来说明InnoDB 是如何解决幻读的。")]),a._v(" "),t("p",[a._v("假设现在表 student 中只有一条数据，数据内容中，主键 id=1，隐藏的 trx_id=10，它的 undo log 如下图所示。")]),a._v(" "),t("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220715141002035.png",alt:"image-20220715141002035"}}),a._v(" "),t("p",[a._v("假设现在有事务 A 和事务 B 并发执行，"),t("code",[a._v("事务 A")]),a._v(" 的事务 id 为 "),t("code",[a._v("20")]),a._v(" ， "),t("code",[a._v("事务 B")]),a._v(" 的事务 id 为 "),t("code",[a._v("30")]),a._v(" 。")]),a._v(" "),t("p",[a._v("步骤1：事务 A 开始第一次查询数据，查询的 SQL 语句如下。")]),a._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("select * from student where id >= 1;\n")])])]),t("p",[a._v("在开始查询之前，MySQL 会为事务 A 产生一个 ReadView，此时 ReadView 的内容如下： "),t("code",[a._v("trx_ids= [20,30] ， up_limit_id=20 ， low_limit_id=31 ， creator_trx_id=20")]),a._v(" 。")]),a._v(" "),t("p",[a._v("由于此时表 student 中只有一条数据，且符合 where id>=1 条件，因此会查询出来。然后根据 ReadView 机制，发现该行数据的trx_id=10，小于事务 A 的 ReadView 里 up_limit_id，这表示这条数据是事务 A 开启之前，其他事务就已经提交了的数据，因此事务 A 可以读取到。")]),a._v(" "),t("p",[a._v("结论：事务 A 的第一次查询，能读取到一条数据，id=1。")]),a._v(" "),t("p",[a._v("步骤2：接着事务 B(trx_id=30)，往表 student 中新插入两条数据，并提交事务。")]),a._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("insert into student(id,name) values(2,'李四');\ninsert into student(id,name) values(3,'王五');\n")])])]),t("p",[a._v("此时表student 中就有三条数据了，对应的 undo 如下图所示：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220715141208667.png",alt:"image-20220715141208667"}})]),a._v(" "),t("p",[a._v("步骤3：接着事务 A 开启第二次查询，根据可重复读隔离级别的规则，此时事务 A 并不会再重新生成 ReadView。此时表 student 中的 3 条数据都满足 where id>=1 的条件，因此会先查出来。然后根据 ReadView 机制，判断每条数据是不是都可以被事务 A 看到。")]),a._v(" "),t("p",[a._v("1）首先 id=1 的这条数据，前面已经说过了，可以被事务 A 看到。")]),a._v(" "),t("p",[a._v("2）然后是 id=2 的数据，它的 trx_id=30，此时事务 A 发现，这个值处于 up_limit_id 和 low_limit_id 之 间，因此还需要再判断 30 是否处于 trx_ids 数组内。由于事务 A 的 trx_ids=[20,30]，因此在数组内，这表 示 id=2 的这条数据是与事务 A 在同一时刻启动的其他事务提交的，所以这条数据不能让事务 A 看到。")]),a._v(" "),t("p",[a._v("3）同理，id=3 的这条数据，trx_id 也为 30，因此也不能被事务 A 看见。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220715141243993.png",alt:"image-20220715141243993"}})]),a._v(" "),t("p",[a._v("结论：最终事务 A 的第二次查询，只能查询出 id=1 的这条数据。这和事务 A 的第一次查询的结果是一样 的，因此没有出现幻读现象，所以说在 MySQL 的可重复读隔离级别下，不存在幻读问题。")]),a._v(" "),t("h2",{attrs:{id:"_6-总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-总结"}},[a._v("#")]),a._v(" 6. 总结")]),a._v(" "),t("p",[a._v("这里介绍了 MVCC 在 "),t("code",[a._v("READ COMMITTD")]),a._v(" 、 "),t("code",[a._v("REPEATABLE READ")]),a._v(" 这两种隔离级别的事务在执行快照读操作时 访问记录的版本链的过程。这样使不同事务的 "),t("code",[a._v("读-写")]),a._v(" 、 "),t("code",[a._v("写-读")]),a._v(" 操作并发执行，从而提升系统性能。")]),a._v(" "),t("p",[a._v("核心点在于 ReadView 的原理， "),t("code",[a._v("READ COMMITTD")]),a._v(" 、 "),t("code",[a._v("REPEATABLE READ")]),a._v(" 这两个隔离级别的一个很大不同 就是生成ReadView的时机不同：")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("READ COMMITTD")]),a._v(" 在每一次进行普通SELECT操作前都会生成一个ReadView")]),a._v(" "),t("li",[t("code",[a._v("REPEATABLE READ")]),a._v(" 只在第一次进行普通SELECT操作前生成一个ReadView，之后的查询操作都重复 使用这个ReadView就好了。")])]),a._v(" "),t("img",{staticStyle:{float:"left"},attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220715141413135.png",alt:"image-20220715141413135"}}),a._v(" "),t("p",[a._v("通过MVCC我们可以解决：")]),a._v(" "),t("img",{staticStyle:{float:"left"},attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220715141515370.png",alt:"image-20220715141515370"}})])}),[],!1,null,null,null);t.default=i.exports}}]);