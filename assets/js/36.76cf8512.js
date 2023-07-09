(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{361:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("配套视频参考："),s("a",{attrs:{href:"https://www.bilibili.com/video/BV1iq4y1u7vj?p=1&vd_source=cea816a08805c218ac4390ae9b61ae31",target:"_blank",rel:"noopener noreferrer"}},[t._v("MySQL数据库天花板--康师傅"),s("OutboundLink")],1)]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("我们上一章讲到了 SQL 单行函数。实际上 SQL 函数还有一类，叫做聚合（或聚集、分组）函数，它是对一组数据进行汇总的函数，输入的是一组数据的集合，输出的是单个值。")]),t._v(" "),s("h2",{attrs:{id:"_1-聚合函数介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-聚合函数介绍"}},[t._v("#")]),t._v(" 1. 聚合函数介绍")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("什么是聚合函数")])])]),t._v(" "),s("p",[t._v("聚合函数作用于一组数据，并对一组数据返回一个值。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554980924940.png",alt:"1554980924940"}})]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("聚合函数类型")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("AVG()")])]),t._v(" "),s("li",[s("strong",[t._v("SUM()")])]),t._v(" "),s("li",[s("strong",[t._v("MAX()")])]),t._v(" "),s("li",[s("strong",[t._v("MIN()")])]),t._v(" "),s("li",[t._v("**COUNT() **")])])]),t._v(" "),s("li",[s("p",[t._v("聚合函数语法")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554981029920.png",alt:"1554981029920"}})]),t._v(" "),s("ul",[s("li",[t._v("聚合函数不能嵌套调用。比如不能出现类似“AVG(SUM(字段名称))”形式的调用。")])]),t._v(" "),s("h3",{attrs:{id:"_1-1-avg和sum函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-avg和sum函数"}},[t._v("#")]),t._v(" 1.1 AVG和SUM函数")]),t._v(" "),s("p",[t._v("可以对"),s("strong",[t._v("数值型数据")]),t._v("使用AVG 和 SUM 函数。")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AVG")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("salary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MAX")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("salary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MIN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("salary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SUM")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("salary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v("   employees\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v("  job_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%REP%'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554981279723.png",alt:"1554981279723"}})]),t._v(" "),s("h3",{attrs:{id:"_1-2-min和max函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-min和max函数"}},[t._v("#")]),t._v(" 1.2 MIN和MAX函数")]),t._v(" "),s("p",[t._v("可以对"),s("strong",[t._v("任意数据类型")]),t._v("的数据使用 MIN 和 MAX 函数。")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MIN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hire_date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MAX")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hire_date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v("\t  employees"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554981253194.png",alt:"1554981253194"}})]),t._v(" "),s("h3",{attrs:{id:"_1-3-count函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-count函数"}},[t._v("#")]),t._v(" 1.3 COUNT函数")]),t._v(" "),s("ul",[s("li",[t._v("COUNT(*)返回表中记录总数，适用于"),s("strong",[t._v("任意数据类型")]),t._v("。")])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("COUNT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v("\t  employees\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v("  department_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554981241299.png",alt:"1554981241299"}})]),t._v(" "),s("ul",[s("li",[t._v("COUNT(expr) 返回"),s("strong",[t._v("expr不为空")]),t._v("的记录总数。")])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("COUNT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("commission_pct"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v("   employees\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v("  department_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554981328678.png",alt:"1554981328678"}})]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("问题：用count(*)，count(1)，count(列名)谁好呢?")])]),t._v(" "),s("p",[t._v("其实，对于MyISAM引擎的表是没有区别的。这种引擎内部有一计数器在维护着行数。")]),t._v(" "),s("p",[t._v("Innodb引擎的表用count(*),count(1)直接读行数，复杂度是O(n)，因为innodb真的要去数一遍。但好于具体的count(列名)。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("问题：能不能使用count(列名)替换count(*)?")])]),t._v(" "),s("p",[t._v("不要使用 count(列名)来替代 "),s("code",[t._v("count(*)")]),t._v("，"),s("code",[t._v("count(*)")]),t._v("是 SQL92 定义的标准统计行数的语法，跟数据库无关，跟 NULL 和非 NULL 无关。")]),t._v(" "),s("p",[t._v("说明：count(*)会统计值为 NULL 的行，而 count(列名)不会统计此列为 NULL 值的行。")])])]),t._v(" "),s("h2",{attrs:{id:"_2-group-by"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-group-by"}},[t._v("#")]),t._v(" 2. GROUP BY")]),t._v(" "),s("h3",{attrs:{id:"_2-1-基本使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-基本使用"}},[t._v("#")]),t._v(" 2.1 基本使用")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554981374920.png",alt:"1554981374920"}})]),t._v(" "),s("p",[s("strong",[t._v("可以使用GROUP BY子句将表中的数据分成若干组")])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("column")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" group_function"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("column")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v("\tcondition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v("\tgroup_by_expression"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("column")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("blockquote",[s("p",[s("strong",[t._v("明确：WHERE一定放在FROM后面")])])]),t._v(" "),s("p",[s("strong",[t._v("在SELECT列表中所有未包含在组函数中的列都应该包含在 GROUP BY子句中")])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v("   department_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AVG")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("salary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v("     employees\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" department_id "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554981539408.png",alt:"1554981539408"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554981544191.png",alt:"1554981544191"}})]),t._v(" "),s("p",[t._v("包含在 GROUP BY 子句中的列不必包含在SELECT 列表中")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AVG")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("salary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v("     employees\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" department_id "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554981574152.png",alt:"1554981574152"}})]),t._v(" "),s("h3",{attrs:{id:"_2-2-使用多个列分组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-使用多个列分组"}},[t._v("#")]),t._v(" 2.2 使用多个列分组")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554981607442.png",alt:"1554981607442"}})]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v("   department_id dept_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" job_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SUM")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("salary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v("     employees\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" department_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" job_id "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554981624864.png",alt:"1554981624864"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"images/1554981629733.png",alt:"1554981629733"}})]),t._v(" "),s("h3",{attrs:{id:"_2-3-group-by中使用with-rollup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-group-by中使用with-rollup"}},[t._v("#")]),t._v(" 2.3 GROUP BY中使用WITH ROLLUP")]),t._v(" "),s("p",[t._v("使用"),s("code",[t._v("WITH ROLLUP")]),t._v("关键字之后，在所有查询出的分组记录之后增加一条记录，该记录计算查询出的所有记录的总和，即统计记录数量。")]),t._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("SELECT department_id,AVG(salary)\nFROM employees\nWHERE department_id > 80\nGROUP BY department_id WITH ROLLUP;\n")])])]),s("blockquote",[s("p",[t._v("注意：")]),t._v(" "),s("p",[t._v("当使用ROLLUP时，不能同时使用ORDER BY子句进行结果排序，即ROLLUP和ORDER BY是互相排斥的。")])]),t._v(" "),s("h2",{attrs:{id:"_3-having"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-having"}},[t._v("#")]),t._v(" 3. HAVING")]),t._v(" "),s("h3",{attrs:{id:"_3-1-基本使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-基本使用"}},[t._v("#")]),t._v(" 3.1 基本使用")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554981656798.png",alt:"1554981656798"}})]),t._v(" "),s("p",[s("strong",[t._v("过滤分组：HAVING子句")])]),t._v(" "),s("ol",[s("li",[t._v("行已经被分组。")]),t._v(" "),s("li",[t._v("使用了聚合函数。")]),t._v(" "),s("li",[t._v("满足HAVING 子句中条件的分组将被显示。")]),t._v(" "),s("li",[t._v("HAVING 不能单独使用，必须要跟 GROUP BY 一起使用。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554981808091.png",alt:"1554981808091"}})]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v("   department_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MAX")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("salary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v("     employees\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" department_id\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("HAVING")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MAX")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("salary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554981824564.png",alt:"1554981824564"}})]),t._v(" "),s("ul",[s("li",[t._v("**非法使用聚合函数 ： 不能在 WHERE 子句中使用聚合函数。**如下：")])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v("   department_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AVG")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("salary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v("     employees\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AVG")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("salary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8000")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" department_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554981724375.png",alt:"1554981724375"}})]),t._v(" "),s("h3",{attrs:{id:"_3-2-where和having的对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-where和having的对比"}},[t._v("#")]),t._v(" 3.2 WHERE和HAVING的对比")]),t._v(" "),s("p",[s("strong",[t._v("区别1：WHERE 可以直接使用表中的字段作为筛选条件，但不能使用分组中的计算函数作为筛选条件；HAVING 必须要与 GROUP BY 配合使用，可以把分组计算的函数和分组字段作为筛选条件。")])]),t._v(" "),s("p",[t._v("这决定了，在需要对数据进行分组统计的时候，HAVING 可以完成 WHERE 不能完成的任务。这是因为，在查询语法结构中，WHERE 在 GROUP BY 之前，所以无法对分组结果进行筛选。HAVING 在 GROUP BY 之后，可以使用分组字段和分组中的计算函数，对分组的结果集进行筛选，这个功能是 WHERE 无法完成的。另外，WHERE排除的记录不再包括在分组中。")]),t._v(" "),s("p",[s("strong",[t._v("区别2：如果需要通过连接从关联表中获取需要的数据，WHERE 是先筛选后连接，而 HAVING 是先连接后筛选。")]),t._v(" 这一点，就决定了在关联查询中，WHERE 比 HAVING 更高效。因为 WHERE 可以先筛选，用一个筛选后的较小数据集和关联表进行连接，这样占用的资源比较少，执行效率也比较高。HAVING 则需要先把结果集准备好，也就是用未被筛选的数据集进行关联，然后对这个大的数据集进行筛选，这样占用的资源就比较多，执行效率也较低。")]),t._v(" "),s("p",[t._v("小结如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th"),t._v(" "),s("th",[t._v("优点")]),t._v(" "),s("th",[t._v("缺点")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("WHERE")]),t._v(" "),s("td",[t._v("先筛选数据再关联，执行效率高")]),t._v(" "),s("td",[t._v("不能使用分组中的计算函数进行筛选")])]),t._v(" "),s("tr",[s("td",[t._v("HAVING")]),t._v(" "),s("td",[t._v("可以使用分组中的计算函数")]),t._v(" "),s("td",[t._v("在最后的结果集中进行筛选，执行效率较低")])])])]),t._v(" "),s("p",[s("strong",[t._v("开发中的选择：")])]),t._v(" "),s("p",[t._v("WHERE 和 HAVING 也不是互相排斥的，我们可以在一个查询里面同时使用 WHERE 和 HAVING。包含分组统计函数的条件用 HAVING，普通条件用 WHERE。这样，我们就既利用了 WHERE 条件的高效快速，又发挥了 HAVING 可以使用包含分组统计函数的查询条件的优点。当数据量特别大的时候，运行效率会有很大的差别。")]),t._v(" "),s("h2",{attrs:{id:"_4-select的执行过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-select的执行过程"}},[t._v("#")]),t._v(" 4. SELECT的执行过程")]),t._v(" "),s("h3",{attrs:{id:"_4-1-查询的结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-查询的结构"}},[t._v("#")]),t._v(" 4.1 查询的结构")]),t._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("#方式1：\nSELECT ...,....,...\nFROM ...,...,....\nWHERE 多表的连接条件\nAND 不包含组函数的过滤条件\nGROUP BY ...,...\nHAVING 包含组函数的过滤条件\nORDER BY ... ASC/DESC\nLIMIT ...,...\n\n#方式2：\nSELECT ...,....,...\nFROM ... JOIN ... \nON 多表的连接条件\nJOIN ...\nON ...\nWHERE 不包含组函数的过滤条件\nAND/OR 不包含组函数的过滤条件\nGROUP BY ...,...\nHAVING 包含组函数的过滤条件\nORDER BY ... ASC/DESC\nLIMIT ...,...\n\n#其中：\n#（1）from：从哪些表中筛选\n#（2）on：关联多表查询时，去除笛卡尔积\n#（3）where：从表中筛选的条件\n#（4）group by：分组依据\n#（5）having：在统计结果中再次筛选\n#（6）order by：排序\n#（7）limit：分页\n")])])]),s("h3",{attrs:{id:"_4-2-select执行顺序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-select执行顺序"}},[t._v("#")]),t._v(" 4.2 SELECT执行顺序")]),t._v(" "),s("p",[t._v("你需要记住 SELECT 查询时的两个顺序：")]),t._v(" "),s("p",[s("strong",[t._v("1. 关键字的顺序是不能颠倒的：")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("SELECT ... FROM ... WHERE ... GROUP BY ... HAVING ... ORDER BY ... LIMIT...\n")])])]),s("p",[s("strong",[t._v("2.SELECT 语句的执行顺序")]),t._v("（在 MySQL 和 Oracle 中，SELECT 执行顺序基本相同）：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("FROM -> WHERE -> GROUP BY -> HAVING -> SELECT 的字段 -> DISTINCT -> ORDER BY -> LIMIT\n")])])]),s("p",[s("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1566872301088.png",alt:"1566872301088"}})]),t._v(" "),s("p",[t._v("比如你写了一个 SQL 语句，那么它的关键字顺序和执行顺序是下面这样的：")]),t._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("SELECT DISTINCT player_id, player_name, count(*) as num # 顺序 5\nFROM player JOIN team ON player.team_id = team.team_id # 顺序 1\nWHERE height > 1.80 # 顺序 2\nGROUP BY player.team_id # 顺序 3\nHAVING num > 2 # 顺序 4\nORDER BY num DESC # 顺序 6\nLIMIT 2 # 顺序 7\n")])])]),s("p",[t._v("在 SELECT 语句执行这些步骤的时候，每个步骤都会产生一个"),s("code",[t._v("虚拟表")]),t._v("，然后将这个虚拟表传入下一个步骤中作为输入。需要注意的是，这些步骤隐含在 SQL 的执行过程中，对于我们来说是不可见的。")]),t._v(" "),s("h3",{attrs:{id:"_4-3-sql-的执行原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-sql-的执行原理"}},[t._v("#")]),t._v(" 4.3 SQL 的执行原理")]),t._v(" "),s("p",[t._v("SELECT 是先执行 FROM 这一步的。在这个阶段，如果是多张表联查，还会经历下面的几个步骤：")]),t._v(" "),s("ol",[s("li",[t._v("首先先通过 CROSS JOIN 求笛卡尔积，相当于得到虚拟表 vt（virtual table）1-1；")]),t._v(" "),s("li",[t._v("通过 ON 进行筛选，在虚拟表 vt1-1 的基础上进行筛选，得到虚拟表 vt1-2；")]),t._v(" "),s("li",[t._v("添加外部行。如果我们使用的是左连接、右链接或者全连接，就会涉及到外部行，也就是在虚拟表 vt1-2 的基础上增加外部行，得到虚拟表 vt1-3。")])]),t._v(" "),s("p",[t._v("当然如果我们操作的是两张以上的表，还会重复上面的步骤，直到所有表都被处理完为止。这个过程得到是我们的原始数据。")]),t._v(" "),s("p",[t._v("当我们拿到了查询数据表的原始数据，也就是最终的虚拟表 "),s("code",[t._v("vt1")]),t._v("，就可以在此基础上再进行 "),s("code",[t._v("WHERE 阶段")]),t._v("。在这个阶段中，会根据 vt1 表的结果进行筛选过滤，得到虚拟表 "),s("code",[t._v("vt2")]),t._v("。")]),t._v(" "),s("p",[t._v("然后进入第三步和第四步，也就是 "),s("code",[t._v("GROUP 和 HAVING 阶段")]),t._v("。在这个阶段中，实际上是在虚拟表 vt2 的基础上进行分组和分组过滤，得到中间的虚拟表 "),s("code",[t._v("vt3")]),t._v(" 和 "),s("code",[t._v("vt4")]),t._v("。")]),t._v(" "),s("p",[t._v("当我们完成了条件筛选部分之后，就可以筛选表中提取的字段，也就是进入到 "),s("code",[t._v("SELECT 和 DISTINCT 阶段")]),t._v("。")]),t._v(" "),s("p",[t._v("首先在 SELECT 阶段会提取想要的字段，然后在 DISTINCT 阶段过滤掉重复的行，分别得到中间的虚拟表 "),s("code",[t._v("vt5-1")]),t._v(" 和 "),s("code",[t._v("vt5-2")]),t._v("。")]),t._v(" "),s("p",[t._v("当我们提取了想要的字段数据之后，就可以按照指定的字段进行排序，也就是 "),s("code",[t._v("ORDER BY 阶段")]),t._v("，得到虚拟表 "),s("code",[t._v("vt6")]),t._v("。")]),t._v(" "),s("p",[t._v("最后在 vt6 的基础上，取出指定行的记录，也就是 "),s("code",[t._v("LIMIT 阶段")]),t._v("，得到最终的结果，对应的是虚拟表 "),s("code",[t._v("vt7")]),t._v("。")]),t._v(" "),s("p",[t._v("当然我们在写 SELECT 语句的时候，不一定存在所有的关键字，相应的阶段就会省略。")]),t._v(" "),s("p",[t._v("同时因为 SQL 是一门类似英语的结构化查询语言，所以我们在写 SELECT 语句的时候，还要注意相应的关键字顺序，"),s("strong",[t._v("所谓底层运行的原理，就是我们刚才讲到的执行顺序。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);