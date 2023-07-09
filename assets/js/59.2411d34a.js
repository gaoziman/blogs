(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{385:function(a,s,e){"use strict";e.r(s);var t=e(7),_=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("配套视频参考："),s("a",{attrs:{href:"https://www.bilibili.com/video/BV1iq4y1u7vj?p=1&vd_source=cea816a08805c218ac4390ae9b61ae31",target:"_blank",rel:"noopener noreferrer"}},[a._v("MySQL数据库天花板--康师傅"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"_1-数据库事务概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-数据库事务概述"}},[a._v("#")]),a._v(" 1. 数据库事务概述")]),a._v(" "),s("h3",{attrs:{id:"_1-1-存储引擎支持情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-存储引擎支持情况"}},[a._v("#")]),a._v(" 1.1 存储引擎支持情况")]),a._v(" "),s("p",[s("code",[a._v("SHOW ENGINES")]),a._v(" 命令来查看当前 MySQL 支持的存储引擎都有哪些，以及这些存储引擎是否支持事务。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220708124306444.png",alt:"image-20220708124306444"}})]),a._v(" "),s("p",[a._v("能看出在 MySQL 中，只有InnoDB 是支持事务的。")]),a._v(" "),s("h3",{attrs:{id:"_1-2-基本概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-基本概念"}},[a._v("#")]),a._v(" 1.2 基本概念")]),a._v(" "),s("p",[a._v("**事务：**一组逻辑操作单元，使数据从一种状态变换到另一种状态。")]),a._v(" "),s("p",[a._v("**事务处理的原则：**保证所有事务都作为 "),s("code",[a._v("一个工作单元")]),a._v(" 来执行，即使出现了故障，都不能改变这种执行方 式。当在一个事务中执行多个操作时，要么所有的事务都被提交( "),s("code",[a._v("commit")]),a._v(" )，那么这些修改就 "),s("code",[a._v("永久")]),a._v(" 地保 "),s("code",[a._v("存下来")]),a._v("；要么数据库管理系统将 "),s("code",[a._v("放弃")]),a._v(" 所作的所有 "),s("code",[a._v("修改")]),a._v(" ，整个事务回滚( rollback )到最初状态。")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# 案例：AA用户给BB用户转账100\nupdate account set money = money - 100 where name = 'AA';\n# 服务器宕机\nupdate account set money = money + 100 where name = 'BB';\n")])])]),s("h3",{attrs:{id:"_1-3-事务的acid特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-事务的acid特性"}},[a._v("#")]),a._v(" 1.3 事务的ACID特性")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("原子性（atomicity）：")])])]),a._v(" "),s("p",[a._v("原子性是指事务是一个不可分割的工作单位，要么全部提交，要么全部失败回滚。即要么转账成功，要么转账失败，是不存在中间的状态。如果无法保证原子性会怎么样？就会出现数据不一致的情形，A账户减去100元，而B账户增加100元操作失败，系统将无故丢失100元。")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("一致性（consistency）：")])])]),a._v(" "),s("p",[a._v("（国内很多网站上对一致性的阐述有误，具体你可以参考 Wikipedia 对Consistency的阐述）")]),a._v(" "),s("p",[a._v("根据定义，一致性是指事务执行前后，数据从一个 "),s("code",[a._v("合法性状态")]),a._v(" 变换到另外一个 "),s("code",[a._v("合法性状态")]),a._v(" 。这种状态是 "),s("code",[a._v("语义上")]),a._v(" 的而不是语法上的，跟具体的业务有关。")]),a._v(" "),s("p",[a._v("那什么是合法的数据状态呢？满足 "),s("code",[a._v("预定的约束")]),a._v(" 的状态就叫做合法的状态。通俗一点，这状态是由你自己来定义的（比如满足现实世界中的约束）。满足这个状态，数据就是一致的，不满足这个状态，数据就 是不一致的！如果事务中的某个操作失败了，系统就会自动撤销当前正在执行的事务，返回到事务操作 之前的状态。")]),a._v(" "),s("p",[a._v("**举例1：**A账户有200元，转账300元出去，此时A账户余额为-100元。你自然就发现此时数据是不一致的，为什么呢？因为你定义了一个状态，余额这列必须>=0。")]),a._v(" "),s("p",[a._v("**举例2：**A账户有200元，转账50元给B账户，A账户的钱扣了，但是B账户因为各种意外，余额并没有增加。你也知道此时的数据是不一致的，为什么呢？因为你定义了一个状态，要求A+B的总余额必须不变。")]),a._v(" "),s("p",[a._v("**举例3：**在数据表中我们将"),s("code",[a._v("姓名")]),a._v("字段设置为"),s("code",[a._v("唯一性约束")]),a._v("，这时当事务进行提交或者事务发生回滚的时候，如果数据表的姓名不唯一，就破坏了事务的一致性要求。")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("隔离型（isolation）：")])])]),a._v(" "),s("p",[a._v("事务的隔离性是指一个事务的执行"),s("code",[a._v("不能被其他事务干扰")]),a._v("，即一个事务内部的操作及使用的数据对"),s("code",[a._v("并发")]),a._v("的其他事务是隔离的，并发执行的各个事务之间不能相互干扰。")]),a._v(" "),s("p",[a._v("如果无法保证隔离性会怎么样？假设A账户有200元，B账户0元。A账户往B账户转账两次，每次金额为50 元，分别在两个事务中执行。如果无法保证隔离性，会出现下面的情形：")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("UPDATE accounts SET money = money - 50 WHERE NAME = 'AA';\nUPDATE accounts SET money = money + 50 WHERE NAME = 'BB';\n")])])]),s("p",[s("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220708164610193.png",alt:"image-20220708164610193"}})]),a._v(" "),s("p",[s("strong",[a._v("持久性（durability）：")])]),a._v(" "),s("p",[a._v("持久性是指一个事务一旦被提交，它对数据库中数据的改变就是 永久性的 ，接下来的其他操作和数据库 故障不应该对其有任何影响。")]),a._v(" "),s("p",[a._v("持久性是通过 "),s("code",[a._v("事务日志")]),a._v(" 来保证的。日志包括了 "),s("code",[a._v("重做日志")]),a._v(" 和 "),s("code",[a._v("回滚日志")]),a._v(" 。当我们通过事务对数据进行修改 的时候，首先会将数据库的变化信息记录到重做日志中，然后再对数据库中对应的行进行修改。这样做 的好处是，即使数据库系统崩溃，数据库重启后也能找到没有更新到数据库系统中的重做日志，重新执 行，从而使事务具有持久性。")]),a._v(" "),s("blockquote",[s("p",[a._v("总结")]),a._v(" "),s("p",[a._v("ACID是事务的四大特征，在这四个特性中，原子性是基础，隔离性是手段，一致性是约束条件， 而持久性是我们的目的。")]),a._v(" "),s("p",[a._v("数据库事务，其实就是数据库设计者为了方便起见，把需要保证"),s("code",[a._v("原子性")]),a._v("、"),s("code",[a._v("隔离性")]),a._v("、"),s("code",[a._v("一致性")]),a._v("和"),s("code",[a._v("持久性")]),a._v("的一个或多个数据库操作称为一个事务。")])]),a._v(" "),s("h3",{attrs:{id:"_1-4-事务的状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-事务的状态"}},[a._v("#")]),a._v(" 1.4 事务的状态")]),a._v(" "),s("p",[a._v("我们现在知道 "),s("code",[a._v("事务")]),a._v(" 是一个抽象的概念，它其实对应着一个或多个数据库操作，MySQL根据这些操作所执 行的不同阶段把 "),s("code",[a._v("事务")]),a._v(" 大致划分成几个状态：")]),a._v(" "),s("ul",[s("li",[s("p",[s("strong",[a._v("活动的（active）")])]),a._v(" "),s("p",[a._v("事务对应的数据库操作正在执行过程中时，我们就说该事务处在 "),s("code",[a._v("活动的")]),a._v(" 状态。")])]),a._v(" "),s("li",[s("p",[s("strong",[a._v("部分提交的（partially committed）")])]),a._v(" "),s("p",[a._v("当事务中的最后一个操作执行完成，但由于操作都在内存中执行，所造成的影响并 "),s("code",[a._v("没有刷新到磁盘")]),a._v(" 时，我们就说该事务处在 "),s("code",[a._v("部分提交的")]),a._v(" 状态。")])]),a._v(" "),s("li",[s("p",[s("strong",[a._v("失败的（failed）")])]),a._v(" "),s("p",[a._v("当事务处在 "),s("code",[a._v("活动的")]),a._v(" 或者 部分提交的 状态时，可能遇到了某些错误（数据库自身的错误、操作系统 错误或者直接断电等）而无法继续执行，或者人为的停止当前事务的执行，我们就说该事务处在 失 败的 状态。")])]),a._v(" "),s("li",[s("p",[s("strong",[a._v("中止的（aborted）")])]),a._v(" "),s("p",[a._v("如果事务执行了一部分而变为 "),s("code",[a._v("失败的")]),a._v(" 状态，那么就需要把已经修改的事务中的操作还原到事务执 行前的状态。换句话说，就是要撤销失败事务对当前数据库造成的影响。我们把这个撤销的过程称之为 "),s("code",[a._v("回滚")]),a._v(" 。当 "),s("code",[a._v("回滚")]),a._v(" 操作执行完毕时，也就是数据库恢复到了执行事务之前的状态，我们就说该事 务处在了 "),s("code",[a._v("中止的")]),a._v(" 状态。")]),a._v(" "),s("p",[a._v("举例：")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("UPDATE accounts SET money = money - 50 WHERE NAME = 'AA';\n\nUPDATE accounts SET money = money + 50 WHERE NAME = 'BB';\n")])])])]),a._v(" "),s("li",[s("p",[s("strong",[a._v("提交的（committed）")])]),a._v(" "),s("p",[a._v("当一个处在 "),s("code",[a._v("部分提交的")]),a._v(" 状态的事务将修改过的数据都 "),s("code",[a._v("同步到磁盘")]),a._v(" 上之后，我们就可以说该事务处在了 "),s("code",[a._v("提交的")]),a._v(" 状态。")]),a._v(" "),s("p",[a._v("一个基本的状态转换图如下所示：")]),a._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220708171859055.png",alt:"image-20220708171859055"}}),a._v(" "),s("p",[a._v("图中可见，只有当事务处于"),s("code",[a._v("提交的")]),a._v("或者"),s("code",[a._v("中止的")]),a._v("状态时，一个事务的生命周期才算是结束了。对于已经提交的事务来说，该事务对数据库所做的修改将永久生效，对于处于中止状态的事务，该事务对数据库所做的所有修改都会被回滚到没执行该事务之前的状态。")])])]),a._v(" "),s("h2",{attrs:{id:"_2-如何使用事务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何使用事务"}},[a._v("#")]),a._v(" 2. 如何使用事务")]),a._v(" "),s("p",[a._v("使用事务有两种方式，分别为 "),s("code",[a._v("显式事务")]),a._v(" 和 "),s("code",[a._v("隐式事务")]),a._v(" 。")]),a._v(" "),s("h3",{attrs:{id:"_2-1-显式事务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-显式事务"}},[a._v("#")]),a._v(" 2.1 显式事务")]),a._v(" "),s("p",[s("strong",[a._v("步骤1：")]),a._v(" START TRANSACTION 或者 BEGIN ，作用是显式开启一个事务。")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mysql> BEGIN;\n#或者\nmysql> START TRANSACTION;\n")])])]),s("p",[s("code",[a._v("START TRANSACTION")]),a._v(" 语句相较于 "),s("code",[a._v("BEGIN")]),a._v(" 特别之处在于，后边能跟随几个 "),s("code",[a._v("修饰符")]),a._v(" ：")]),a._v(" "),s("p",[a._v("① "),s("code",[a._v("READ ONLY")]),a._v(" ：标识当前事务是一个 "),s("code",[a._v("只读事务")]),a._v(" ，也就是属于该事务的数据库操作只能读取数据，而不能修改数据。")]),a._v(" "),s("blockquote",[s("p",[a._v("补充：只读事务中只是不允许修改那些其他事务也能访问到的表中的数据，对于临时表来说（我们使用 CREATE TMEPORARY TABLE 创建的表），由于它们只能再当前会话中可见，所有只读事务其实也是可以对临时表进行增、删、改操作的。")])]),a._v(" "),s("p",[a._v("② "),s("code",[a._v("READ WRITE")]),a._v(" ：标识当前事务是一个 "),s("code",[a._v("读写事务")]),a._v(" ，也就是属于该事务的数据库操作既可以读取数据， 也可以修改数据。")]),a._v(" "),s("p",[a._v("③ "),s("code",[a._v("WITH CONSISTENT SNAPSHOT")]),a._v(" ：启动一致性读。")]),a._v(" "),s("p",[a._v("比如：")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("START TRANSACTION READ ONLY; # 开启一个只读事务\n")])])]),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("START TRANSACTION READ ONLY, WITH CONSISTENT SNAPSHOT # 开启只读事务和一致性读\n")])])]),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("START TRANSACTION READ WRITE, WITH CONSISTENT SNAPSHOT # 开启读写事务和一致性读\n")])])]),s("p",[a._v("注意：")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("READ ONLY")]),a._v("和"),s("code",[a._v("READ WRITE")]),a._v("是用来设置所谓的事务"),s("code",[a._v("访问模式")]),a._v("的，就是以只读还是读写的方式来访问数据库中的数据，一个事务的访问模式不能同时即设置为"),s("code",[a._v("只读")]),a._v("的也设置为"),s("code",[a._v("读写")]),a._v("的，所以不能同时把"),s("code",[a._v("READ ONLY")]),a._v("和"),s("code",[a._v("READ WRITE")]),a._v("放到"),s("code",[a._v("START TRANSACTION")]),a._v("语句后边。")]),a._v(" "),s("li",[a._v("如果我们不显式指定事务的访问模式，那么该事务的访问模式就是"),s("code",[a._v("读写")]),a._v("模式")])]),a._v(" "),s("p",[a._v("**步骤2：**一系列事务中的操作（主要是DML，不含DDL）")]),a._v(" "),s("p",[a._v("**步骤3：**提交事务 或 中止事务（即回滚事务）")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# 提交事务。当提交事务后，对数据库的修改是永久性的。\nmysql> COMMIT;\n")])])]),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# 回滚事务。即撤销正在进行的所有没有提交的修改\nmysql> ROLLBACK;\n\n# 将事务回滚到某个保存点。\nmysql> ROLLBACK TO [SAVEPOINT]\n")])])]),s("p",[a._v("其中关于SAVEPOINT相关操作有：")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# 在事务中创建保存点，方便后续针对保存点进行回滚。一个事务中可以存在多个保存点。\nSAVEPOINT 保存点名称;\n")])])]),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# 删除某个保存点\nRELEASE SAVEPOINT 保存点名称;\n")])])]),s("h3",{attrs:{id:"_2-2-隐式事务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-隐式事务"}},[a._v("#")]),a._v(" 2.2 隐式事务")]),a._v(" "),s("p",[a._v("MySQL中有一个系统变量 "),s("code",[a._v("autocommit")]),a._v(" ：")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mysql> SHOW VARIABLES LIKE 'autocommit';\n+---------------+-------+\n| Variable_name | Value |\n+---------------+-------+\n| autocommit    |  ON   |\n+---------------+-------+\n1 row in set (0.01 sec)\n")])])]),s("p",[a._v("当然，如果我们想关闭这种 "),s("code",[a._v("自动提交")]),a._v(" 的功能，可以使用下边两种方法之一：")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("显式的的使用 "),s("code",[a._v("START TRANSACTION")]),a._v(" 或者 "),s("code",[a._v("BEGIN")]),a._v(" 语句开启一个事务。这样在本次事务提交或者回滚前会暂时关闭掉自动提交的功能。")])]),a._v(" "),s("li",[s("p",[a._v("把系统变量 "),s("code",[a._v("autocommit")]),a._v(" 的值设置为 "),s("code",[a._v("OFF")]),a._v(" ，就像这样：")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("SET autocommit = OFF;\n#或\nSET autocommit = 0;\n")])])])])]),a._v(" "),s("h3",{attrs:{id:"_2-3-隐式提交数据的情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-隐式提交数据的情况"}},[a._v("#")]),a._v(" 2.3 隐式提交数据的情况")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("数据定义语言（Data definition language，缩写为：DDL）")]),a._v(" "),s("p",[a._v("数据库对象，指的就是"),s("code",[a._v("数据库、表、视图、存储过程")]),a._v("等结构。当我们"),s("code",[a._v("CREATE、ALTER、DROP")]),a._v("等语句去修改数据库对象时，就会隐式的提交前边语句所属于的事务。即：")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("BEGIN;\n\nSELECT ... # 事务中的一条语句\nUPDATE ... # 事务中的一条语句\n... # 事务中的其他语句\n\nCREATE TABLE ... # 此语句会隐式的提交前边语句所属于的事务\n")])])])]),a._v(" "),s("li",[s("p",[a._v("隐式使用或修改mysql数据库中的表")]),a._v(" "),s("p",[a._v("当我们使用"),s("code",[a._v("ALTER USER")]),a._v("、"),s("code",[a._v("CREATE USER")]),a._v("、"),s("code",[a._v("DROP USER")]),a._v("、"),s("code",[a._v("GRANT")]),a._v("、"),s("code",[a._v("RENAME USER")]),a._v("、"),s("code",[a._v("REVOKE")]),a._v("、"),s("code",[a._v("SET PASSWORD")]),a._v("等语句时也会隐式的提交前边语句所属于的事务。")])]),a._v(" "),s("li",[s("p",[a._v("事务控制或关于锁定的语句")]),a._v(" "),s("p",[a._v("① 当我们在一个事务还没提交或者回滚时就又使用 START TRANSACTION 或者 BEGIN 语句开启了另一个事务时，会隐式的提交上一个事务。即：")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("BEGIN;\n\nSELECT ... # 事务中的一条语句\nUPDATE ... # 事务中的一条语句\n... # 事务中的其他语句\n\nBEGIN; # 此语句会隐式的提交前边语句所属于的事务\n")])])]),s("p",[a._v("② 当前的 autocommit 系统变量的值为 OFF ，我们手动把它调为 ON 时，也会 隐式的提交前边语句所属的事务。")]),a._v(" "),s("p",[a._v("③ 使用 LOCK TABLES 、 UNLOCK TABLES 等关于锁定的语句也会 隐式的提交 前边语句所属的事务。")])]),a._v(" "),s("li",[s("p",[a._v("加载数据的语句")]),a._v(" "),s("p",[a._v("使用"),s("code",[a._v("LOAD DATA")]),a._v("语句来批量往数据库中导入数据时，也会"),s("code",[a._v("隐式的提交")]),a._v("前边语句所属的事务。")])]),a._v(" "),s("li",[s("p",[a._v("关于MySQL复制的一些语句")]),a._v(" "),s("p",[a._v("使用"),s("code",[a._v("START SLAVE、STOP SLAVE、RESET SLAVE、CHANGE MASTER TO")]),a._v("等语句会隐式的提交前边语句所属的事务")])]),a._v(" "),s("li",[s("p",[a._v("其他的一些语句")]),a._v(" "),s("p",[a._v("使用"),s("code",[a._v("ANALYZE TABLE、CACHE INDEX、CAECK TABLE、FLUSH、LOAD INDEX INTO CACHE、OPTIMIZE TABLE、REPAIR TABLE、RESET")]),a._v("等语句也会隐式的提交前边语句所属的事务。")])])]),a._v(" "),s("h3",{attrs:{id:"_2-4-使用举例1-提交与回滚"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-使用举例1-提交与回滚"}},[a._v("#")]),a._v(" 2.4 使用举例1：提交与回滚")]),a._v(" "),s("p",[a._v("我们看下在 MySQL 的默认状态下，下面这个事务最后的处理结果是什么。")]),a._v(" "),s("p",[s("strong",[a._v("情况1：")])]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("CREATE TABLE user(name varchar(20), PRIMARY KEY (name)) ENGINE=InnoDB;\n\nBEGIN;\nINSERT INTO user SELECT '张三';\nCOMMIT;\n\nBEGIN;\nINSERT INTO user SELECT '李四';\nINSERT INTO user SELECT '李四';\nROLLBACK;\n\nSELECT * FROM user;\n")])])]),s("p",[a._v("运行结果（1 行数据）：")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mysql> commit;\nQuery OK, 0 rows affected (0.00 秒)\n\nmysql> BEGIN;\nQuery OK, 0 rows affected (0.00 秒)\n\nmysql> INSERT INTO user SELECT '李四';\nQuery OK, 1 rows affected (0.00 秒)\n\nmysql> INSERT INTO user SELECT '李四';\nDuplicate entry '李四' for key 'user.PRIMARY'\nmysql> ROLLBACK;\nQuery OK, 0 rows affected (0.01 秒)\n\nmysql> select * from user;\n+--------+\n| name   |\n+--------+\n| 张三    |\n+--------+\n1 行于数据集 (0.01 秒)\n")])])]),s("p",[s("strong",[a._v("情况2：")])]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("CREATE TABLE user (name varchar(20), PRIMARY KEY (name)) ENGINE=InnoDB;\n\nBEGIN;\nINSERT INTO user SELECT '张三';\nCOMMIT;\n\nINSERT INTO user SELECT '李四';\nINSERT INTO user SELECT '李四';\nROLLBACK;\n")])])]),s("p",[a._v("运行结果（2 行数据）：")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mysql> SELECT * FROM user;\n+--------+\n| name   |\n+--------+\n| 张三    |\n| 李四    |\n+--------+\n2 行于数据集 (0.01 秒)\n")])])]),s("p",[s("strong",[a._v("情况3：")])]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("CREATE TABLE user(name varchar(255), PRIMARY KEY (name)) ENGINE=InnoDB;\n\nSET @@completion_type = 1;\nBEGIN;\nINSERT INTO user SELECT '张三';\nCOMMIT;\n\nINSERT INTO user SELECT '李四';\nINSERT INTO user SELECT '李四';\nROLLBACK;\n\nSELECT * FROM user;\n")])])]),s("p",[a._v("运行结果（1 行数据）：")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mysql> SELECT * FROM user;\n+--------+\n| name   |\n+--------+\n| 张三    |\n+--------+\n1 行于数据集 (0.01 秒)\n")])])]),s("img",{staticStyle:{float:"left"},attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220708201221316.png",alt:"image-20220708201221316"}}),a._v(" "),s("blockquote",[s("p",[a._v("当我们设置 autocommit=0 时，不论是否采用 START TRANSACTION 或者 BEGIN 的方式来开启事 务，都需要用 COMMIT 进行提交，让事务生效，使用 ROLLBACK 对事务进行回滚。")]),a._v(" "),s("p",[a._v("当我们设置 autocommit=1 时，每条 SQL 语句都会自动进行提交。 不过这时，如果你采用 START TRANSACTION 或者 BEGIN 的方式来显式地开启事务，那么这个事务只有在 COMMIT 时才会生效， 在 ROLLBACK 时才会回滚。")])]),a._v(" "),s("h3",{attrs:{id:"_2-5-使用举例2-测试不支持事务的engine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-使用举例2-测试不支持事务的engine"}},[a._v("#")]),a._v(" 2.5 使用举例2：测试不支持事务的engine")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("CREATE TABLE test1(i INT) ENGINE=InnoDB;\n\nCREATE TABLE test2(i INT) ENGINE=MYISAM;\n")])])]),s("p",[a._v("针对于InnoDB表")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("BEGIN;\nINSERT INTO test1 VALUES(1);\nROLLBACK;\n\nSELECT * FROM test1;\n")])])]),s("p",[a._v("结果：没有数据")]),a._v(" "),s("p",[a._v("针对于MYISAM表：")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("BEGIN;\nINSERT INTO test1 VALUES(1);\nROLLBACK;\n\nSELECT * FROM test2;\n")])])]),s("p",[a._v("结果：有一条数据")]),a._v(" "),s("h3",{attrs:{id:"_2-6-使用举例3-savepoint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-使用举例3-savepoint"}},[a._v("#")]),a._v(" 2.6 使用举例3：SAVEPOINT")]),a._v(" "),s("p",[a._v("创建表并添加数据：")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("CREATE TABLE account(\nid INT PRIMARY KEY AUTO_INCREMENT,\nNAME VARCHAR(15),\nbalance DECIMAL(10,2)\n);\n\nINSERT INTO account(NAME,balance)\nVALUES\n('张三',1000),\n('李四',1000);\n")])])]),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("BEGIN;\nUPDATE account SET balance = balance - 100 WHERE NAME = '张三';\nUPDATE account SET balance = balance - 100 WHERE NAME = '张三';\nSAVEPOINT s1; # 设置保存点\nUPDATE account SET balance = balance + 1 WHERE NAME = '张三';\nROLLBACK TO s1; # 回滚到保存点\n")])])]),s("p",[a._v("结果：张三：800.00")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("ROLLBACK;\n")])])]),s("p",[a._v("结果：张三：1000.00")]),a._v(" "),s("h2",{attrs:{id:"_3-事务隔离级别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-事务隔离级别"}},[a._v("#")]),a._v(" 3. 事务隔离级别")]),a._v(" "),s("p",[a._v("MySQL是一个 "),s("code",[a._v("客户端／服务器")]),a._v(" 架构的软件，对于同一个服务器来说，可以有若干个客户端与之连接，每 个客户端与服务器连接上之后，就可以称为一个会话（ "),s("code",[a._v("Session")]),a._v(" ）。每个客户端都可以在自己的会话中 向服务器发出请求语句，一个请求语句可能是某个事务的一部分，也就是对于服务器来说可能同时处理多个事务。事务有 "),s("code",[a._v("隔离性")]),a._v(" 的特性，理论上在某个事务 "),s("code",[a._v("对某个数据进行访问")]),a._v(" 时，其他事务应该进行"),s("code",[a._v("排队")]),a._v(" ，当该事务提交之后，其他事务才可以继续访问这个数据。但是这样对 "),s("code",[a._v("性能影响太大")]),a._v(" ，我们既想保持事务的隔离性，又想让服务器在处理访问同一数据的多个事务时 "),s("code",[a._v("性能尽量高些")]),a._v(" ，那就看二者如何权衡取 舍了。")]),a._v(" "),s("h3",{attrs:{id:"_3-1-数据准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-数据准备"}},[a._v("#")]),a._v(" 3.1 数据准备")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("CREATE TABLE student (\n    studentno INT,\n    name VARCHAR(20),\n    class varchar(20),\n    PRIMARY KEY (studentno)\n) Engine=InnoDB CHARSET=utf8;\n")])])]),s("p",[a._v("然后向这个表里插入一条数据：")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("INSERT INTO student VALUES(1, '小谷', '1班');\n")])])]),s("p",[a._v("现在表里的数据就是这样的：")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mysql> select * from student;\n+-----------+--------+-------+\n| studentno | name   | class |\n+-----------+--------+-------+\n|      1    |   小谷  | 1班   |\n+-----------+--------+-------+\n1 row in set (0.00 sec)\n")])])]),s("h3",{attrs:{id:"_3-2-数据并发问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-数据并发问题"}},[a._v("#")]),a._v(" 3.2 数据并发问题")]),a._v(" "),s("p",[a._v("针对事务的隔离性和并发性，我们怎么做取舍呢？先看一下访问相同数据的事务在 不保证串行执行 （也 就是执行完一个再执行另一个）的情况下可能会出现哪些问题：")]),a._v(" "),s("p",[s("strong",[a._v("1. 脏写（ Dirty Write ）")])]),a._v(" "),s("p",[a._v("对于两个事务 Session A、Session B，如果事务Session A "),s("code",[a._v("修改了")]),a._v(" 另一个 "),s("code",[a._v("未提交")]),a._v(" 事务Session B "),s("code",[a._v("修改过")]),a._v(" 的数据，那就意味着发生了 "),s("code",[a._v("脏写")]),a._v("，示意图如下：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220708214453902.png",alt:"image-20220708214453902"}})]),a._v(" "),s("p",[a._v("Session A 和 Session B 各开启了一个事务，Sesssion B 中的事务先将studentno列为1的记录的name列更新为'李四'，然后Session A中的事务接着又把这条studentno列为1的记录的name列更新为'张三'。如果之后Session B中的事务进行了回滚，那么Session A中的更新也将不复存在，这种现象称之为脏写。这时Session A中的事务就没有效果了，明明把数据更新了，最后也提交事务了，最后看到的数据什么变化也没有。这里大家对事务的隔离性比较了解的话，会发现默认隔离级别下，上面Session A中的更新语句会处于等待状态，这里只是跟大家说明一下会出现这样的现象。")]),a._v(" "),s("p",[s("strong",[a._v("2. 脏读（ Dirty Read ）")])]),a._v(" "),s("p",[a._v("对于两个事务 Session A、Session B，Session A "),s("code",[a._v("读取")]),a._v(" 了已经被 Session B "),s("code",[a._v("更新")]),a._v(" 但还 "),s("code",[a._v("没有被提交")]),a._v(" 的字段。 之后若 Session B "),s("code",[a._v("回滚")]),a._v(" ，Session A "),s("code",[a._v("读取")]),a._v("的内容就是 "),s("code",[a._v("临时且无效")]),a._v(" 的。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220708215109480.png",alt:"image-20220708215109480"}})]),a._v(" "),s("p",[a._v("Session A和Session B各开启了一个事务，Session B中的事务先将studentno列为1的记录的name列更新 为'张三'，然后Session A中的事务再去查询这条studentno为1的记录，如果读到列name的值为'张三'，而 Session B中的事务稍后进行了回滚，那么Session A中的事务相当于读到了一个不存在的数据，这种现象就称之为 "),s("code",[a._v("脏读")]),a._v(" 。")]),a._v(" "),s("p",[s("strong",[a._v("3. 不可重复读（ Non-Repeatable Read ）")])]),a._v(" "),s("p",[a._v("对于两个事务Session A、Session B，Session A "),s("code",[a._v("读取")]),a._v("了一个字段，然后 Session B "),s("code",[a._v("更新")]),a._v("了该字段。 之后 Session A "),s("code",[a._v("再次读取")]),a._v(" 同一个字段， "),s("code",[a._v("值就不同")]),a._v(" 了。那就意味着发生了不可重复读。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220708215626435.png",alt:"image-20220708215626435"}})]),a._v(" "),s("p",[a._v("我们在Session B中提交了几个 "),s("code",[a._v("隐式事务")]),a._v(" （注意是隐式事务，意味着语句结束事务就提交了），这些事务 都修改了studentno列为1的记录的列name的值，每次事务提交之后，如果Session A中的事务都可以查看到最新的值，这种现象也被称之为 "),s("code",[a._v("不可重复读")]),a._v("。")]),a._v(" "),s("p",[s("strong",[a._v("4. 幻读（ Phantom ）")])]),a._v(" "),s("p",[a._v("对于两个事务Session A、Session B, Session A 从一个表中 "),s("code",[a._v("读取")]),a._v(" 了一个字段, 然后 Session B 在该表中 插 入 了一些新的行。 之后, 如果 Session A "),s("code",[a._v("再次读取")]),a._v(" 同一个表, 就会多出几行。那就意味着发生了"),s("code",[a._v("幻读")]),a._v("。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220708220102342.png",alt:"image-20220708220102342"}})]),a._v(" "),s("p",[a._v("Session A中的事务先根据条件 studentno > 0这个条件查询表student，得到了name列值为'张三'的记录； 之后Session B中提交了一个 "),s("code",[a._v("隐式事务")]),a._v(" ，该事务向表student中插入了一条新记录；之后Session A中的事务 再根据相同的条件 studentno > 0查询表student，得到的结果集中包含Session B中的事务新插入的那条记 录，这种现象也被称之为 幻读 。我们把新插入的那些记录称之为 "),s("code",[a._v("幻影记录")]),a._v(" 。")]),a._v(" "),s("img",{staticStyle:{float:"left"},attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220708220228436.png",alt:"image-20220708220228436"}}),a._v(" "),s("h3",{attrs:{id:"_3-3-sql中的四种隔离级别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-sql中的四种隔离级别"}},[a._v("#")]),a._v(" 3.3 SQL中的四种隔离级别")]),a._v(" "),s("p",[a._v("上面介绍了几种并发事务执行过程中可能遇到的一些问题，这些问题有轻重缓急之分，我们给这些问题 按照严重性来排一下序：")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("脏写 > 脏读 > 不可重复读 > 幻读\n")])])]),s("p",[a._v("我们愿意舍弃一部分隔离性来换取一部分性能在这里就体现在：设立一些隔离级别，隔离级别越低，并发问题发生的就越多。 "),s("code",[a._v("SQL标准")]),a._v(" 中设立了4个 "),s("code",[a._v("隔离级别")]),a._v(" ：")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("READ UNCOMMITTED")]),a._v(" ：读未提交，在该隔离级别，所有事务都可以看到其他未提交事务的执行结 果。不能避免脏读、不可重复读、幻读。")]),a._v(" "),s("li",[s("code",[a._v("READ COMMITTED")]),a._v(" ：读已提交，它满足了隔离的简单定义：一个事务只能看见已经提交事务所做 的改变。这是大多数数据库系统的默认隔离级别（但不是MySQL默认的）。可以避免脏读，但不可 重复读、幻读问题仍然存在。")]),a._v(" "),s("li",[s("code",[a._v("REPEATABLE READ")]),a._v(" ：可重复读，事务A在读到一条数据之后，此时事务B对该数据进行了修改并提 交，那么事务A再读该数据，读到的还是原来的内容。可以避免脏读、不可重复读，但幻读问题仍 然存在。这是MySQL的默认隔离级别。")]),a._v(" "),s("li",[s("code",[a._v("SERIALIZABLE")]),a._v(" ：可串行化，确保事务可以从一个表中读取相同的行。在这个事务持续期间，禁止 其他事务对该表执行插入、更新和删除操作。所有的并发问题都可以避免，但性能十分低下。能避 免脏读、不可重复读和幻读。")])]),a._v(" "),s("p",[s("code",[a._v("SQL标准")]),a._v(" 中规定，针对不同的隔离级别，并发事务可以发生不同严重程度的问题，具体情况如下：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220708220917267.png",alt:"image-20220708220917267"}})]),a._v(" "),s("p",[s("code",[a._v("脏写")]),a._v("怎么没涉及到？因为脏写这个问题太严重了，不论是哪种隔离级别，都不允许脏写的情况发生。")]),a._v(" "),s("p",[a._v("不同的隔离级别有不同的现象，并有不同的锁和并发机制，隔离级别越高，数据库的并发性能就越差，4 种事务隔离级别与并发性能的关系如下：")]),a._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220708220957108.png",alt:"image-20220708220957108"}}),a._v(" "),s("h3",{attrs:{id:"_3-4-mysql支持的四种隔离级别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-mysql支持的四种隔离级别"}},[a._v("#")]),a._v(" 3.4 MySQL支持的四种隔离级别")]),a._v(" "),s("img",{staticStyle:{float:"left"},attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220708221639979.png",alt:"image-20220708221639979"}}),a._v(" "),s("p",[a._v("MySQL的默认隔离级别为REPEATABLE READ，我们可以手动修改一下事务的隔离级别。")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# 查看隔离级别，MySQL 5.7.20的版本之前：\nmysql> SHOW VARIABLES LIKE 'tx_isolation';\n+---------------+-----------------+\n| Variable_name | Value           |\n+---------------+-----------------+\n| tx_isolation  | REPEATABLE-READ |\n+---------------+-----------------+\n1 row in set (0.00 sec)\n# MySQL 5.7.20版本之后，引入transaction_isolation来替换tx_isolation\n\n# 查看隔离级别，MySQL 5.7.20的版本及之后：\nmysql> SHOW VARIABLES LIKE 'transaction_isolation';\n+-----------------------+-----------------+\n| Variable_name         | Value           |\n+-----------------------+-----------------+\n| transaction_isolation | REPEATABLE-READ |\n+-----------------------+-----------------+\n1 row in set (0.02 sec)\n\n#或者不同MySQL版本中都可以使用的：\nSELECT @@transaction_isolation;\n")])])]),s("h3",{attrs:{id:"_3-5-如何设置事务的隔离级别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-如何设置事务的隔离级别"}},[a._v("#")]),a._v(" 3.5 如何设置事务的隔离级别")]),a._v(" "),s("p",[s("strong",[a._v("通过下面的语句修改事务的隔离级别：")])]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("SET [GLOBAL|SESSION] TRANSACTION ISOLATION LEVEL 隔离级别;\n#其中，隔离级别格式：\n> READ UNCOMMITTED\n> READ COMMITTED\n> REPEATABLE READ\n> SERIALIZABLE\n")])])]),s("p",[a._v("或者：")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("SET [GLOBAL|SESSION] TRANSACTION_ISOLATION = '隔离级别'\n#其中，隔离级别格式：\n> READ-UNCOMMITTED\n> READ-COMMITTED\n> REPEATABLE-READ\n> SERIALIZABLE\n")])])]),s("p",[s("strong",[a._v("关于设置时使用GLOBAL或SESSION的影响：")])]),a._v(" "),s("ul",[s("li",[s("p",[a._v("使用 GLOBAL 关键字（在全局范围影响）：")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("SET GLOBAL TRANSACTION ISOLATION LEVEL SERIALIZABLE;\n#或\nSET GLOBAL TRANSACTION_ISOLATION = 'SERIALIZABLE';\n")])])]),s("p",[a._v("则：")]),a._v(" "),s("ul",[s("li",[a._v("当前已经存在的会话无效")]),a._v(" "),s("li",[a._v("只对执行完该语句之后产生的会话起作用")])])]),a._v(" "),s("li",[s("p",[a._v("使用 "),s("code",[a._v("SESSION")]),a._v(" 关键字（在会话范围影响）：")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("SET SESSION TRANSACTION ISOLATION LEVEL SERIALIZABLE;\n#或\nSET SESSION TRANSACTION_ISOLATION = 'SERIALIZABLE';\n")])])]),s("p",[a._v("则：")]),a._v(" "),s("ul",[s("li",[a._v("对当前会话的所有后续的事务有效")]),a._v(" "),s("li",[a._v("如果在事务之间执行，则对后续的事务有效")]),a._v(" "),s("li",[a._v("该语句可以在已经开启的事务中间执行，但不会影响当前正在执行的事务")])])])]),a._v(" "),s("p",[a._v("如果在服务器启动时想改变事务的默认隔离级别，可以修改启动参数"),s("code",[a._v("transaction_isolation")]),a._v("的值。比如，在启动服务器时指定了"),s("code",[a._v("transaction_isolation=SERIALIZABLE")]),a._v("，那么事务的默认隔离界别就从原来的"),s("code",[a._v("REPEATABLE-READ")]),a._v("变成了"),s("code",[a._v("SERIALIZABLE")]),a._v("。")]),a._v(" "),s("blockquote",[s("p",[a._v("小结：")]),a._v(" "),s("p",[a._v("数据库规定了多种事务隔离级别，不同隔离级别对应不同的干扰程度，隔离级别越高，数据一致性就越好，但并发性越弱。")])]),a._v(" "),s("h3",{attrs:{id:"_3-6-不同隔离级别举例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-不同隔离级别举例"}},[a._v("#")]),a._v(" 3.6 不同隔离级别举例")]),a._v(" "),s("p",[a._v("初始化数据：")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("TRUNCATE TABLE account;\nINSERT INTO account VALUES (1,'张三','100'), (2,'李四','0');\n")])])]),s("img",{staticStyle:{float:"left"},attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220708223250773.png",alt:"image-20220708223250773"}}),a._v(" "),s("p",[s("strong",[a._v("演示1. 读未提交之脏读")])]),a._v(" "),s("p",[a._v("设置隔离级别为未提交读：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710193920008.png",alt:"image-20220710193920008"}})]),a._v(" "),s("p",[a._v("脏读就是指当前事务就在访问数据，并且对数据进行了修改，而这种修改还没有提交到数据库中，这时，另外一个事务也访问了这个数据，然后使用了这个数据。")]),a._v(" "),s("p",[s("strong",[a._v("演示2：读已提交")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710194440101.png",alt:"image-20220710194440101"}})]),a._v(" "),s("p",[s("strong",[a._v("演示3. 不可重复读")])]),a._v(" "),s("p",[a._v("设置隔离级别为可重复读，事务的执行流程如下：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710194144826.png",alt:"image-20220710194144826"}})]),a._v(" "),s("p",[a._v("当我们将当前会话的隔离级别设置为可重复读的时候，当前会话可以重复读，就是每次读取的结果集都相同，而不管其他事务有没有提交。但是在可重复读的隔离级别上会出现幻读的问题。")]),a._v(" "),s("p",[s("strong",[a._v("演示4：幻读")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710194042096.png",alt:"image-20220710194042096"}})]),a._v(" "),s("img",{staticStyle:{float:"left"},attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710194612317.png",alt:"image-20220710194612317"}}),a._v(" "),s("h2",{attrs:{id:"_4-事务的常见分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-事务的常见分类"}},[a._v("#")]),a._v(" 4. 事务的常见分类")]),a._v(" "),s("p",[a._v("从事务理论的角度来看，可以把事务分为以下几种类型：")]),a._v(" "),s("ul",[s("li",[a._v("扁平事务（Flat Transactions）")]),a._v(" "),s("li",[a._v("带有保存点的扁平事务（Flat Transactions with Savepoints）")]),a._v(" "),s("li",[a._v("链事务（Chained Transactions）")]),a._v(" "),s("li",[a._v("嵌套事务（Nested Transactions）")]),a._v(" "),s("li",[a._v("分布式事务（Distributed Transactions）")])])])}),[],!1,null,null,null);s.default=_.exports}}]);