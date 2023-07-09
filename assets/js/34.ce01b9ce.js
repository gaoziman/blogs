(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{359:function(e,a,t){"use strict";t.r(a);var s=t(7),n=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("配套视频参考："),a("a",{attrs:{href:"https://www.bilibili.com/video/BV1iq4y1u7vj?p=1&vd_source=cea816a08805c218ac4390ae9b61ae31",target:"_blank",rel:"noopener noreferrer"}},[e._v("MySQL数据库天花板--康师傅"),a("OutboundLink")],1)]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("多表查询，也称为关联查询，指两个或更多个表一起完成查询操作。")]),e._v(" "),a("p",[e._v("前提条件：这些一起查询的表之间是有关系的（一对一、一对多），它们之间一定是有关联字段，这个关联字段可能建立了外键，也可能没有建立外键。比如：员工表和部门表，这两个表依靠“部门编号”进行关联。")]),e._v(" "),a("h2",{attrs:{id:"_1-一个案例引发的多表连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-一个案例引发的多表连接"}},[e._v("#")]),e._v(" 1. 一个案例引发的多表连接")]),e._v(" "),a("h3",{attrs:{id:"_1-1-案例说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-案例说明"}},[e._v("#")]),e._v(" 1.1 案例说明")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554974984600.png",alt:"1554974984600"}})]),e._v(" "),a("p",[e._v("从多个表中获取数据：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554975020388.png",alt:"1554975020388"}})]),e._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#案例：查询员工的姓名及其部门名称\nSELECT last_name, department_name\nFROM employees, departments;\n")])])]),a("p",[a("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554975097631.png",alt:"1554975097631"}})]),e._v(" "),a("p",[e._v("查询结果：")]),e._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("+-----------+----------------------+\n| last_name | department_name      |\n+-----------+----------------------+\n| King      | Administration       |\n| King      | Marketing            |\n| King      | Purchasing           |\n| King      | Human Resources      |\n| King      | Shipping             |\n| King      | IT                   |\n| King      | Public Relations     |\n| King      | Sales                |\n| King      | Executive            |\n| King      | Finance              |\n| King      | Accounting           |\n| King      | Treasury             |\n...\n| Gietz     | IT Support           |\n| Gietz     | NOC                  |\n| Gietz     | IT Helpdesk          |\n| Gietz     | Government Sales     |\n| Gietz     | Retail Sales         |\n| Gietz     | Recruiting           |\n| Gietz     | Payroll              |\n+-----------+----------------------+\n2889 rows in set (0.01 sec)\n")])])]),a("p",[a("strong",[e._v("分析错误情况：")])]),e._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT COUNT(employee_id) FROM employees;\n#输出107行\n\nSELECT COUNT(department_id)FROM departments;\n#输出27行\n\nSELECT 107*27 FROM dual;\n")])])]),a("p",[e._v("我们把上述多表查询中出现的问题称为：笛卡尔积的错误。")]),e._v(" "),a("h3",{attrs:{id:"_1-2-笛卡尔积-或交叉连接-的理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-笛卡尔积-或交叉连接-的理解"}},[e._v("#")]),e._v(" 1.2 笛卡尔积（或交叉连接）的理解")]),e._v(" "),a("p",[e._v("笛卡尔乘积是一个数学运算。假设我有两个集合 X 和 Y，那么 X 和 Y 的笛卡尔积就是 X 和 Y 的所有可能组合，也就是第一个对象来自于 X，第二个对象来自于 Y 的所有可能。组合的个数即为两个集合中元素个数的乘积数。")]),e._v(" "),a("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/302046364841977.jpg",alt:"img"}}),e._v(" "),a("p",[e._v("SQL92中，笛卡尔积也称为"),a("code",[e._v("交叉连接")]),e._v("，英文是 "),a("code",[e._v("CROSS JOIN")]),e._v("。在 SQL99 中也是使用 CROSS JOIN表示交叉连接。它的作用就是可以把任意表进行连接，即使这两张表不相关。在MySQL中如下情况会出现笛卡尔积：")]),e._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#查询员工姓名和所在部门名称\nSELECT last_name,department_name FROM employees,departments;\nSELECT last_name,department_name FROM employees CROSS JOIN departments;\nSELECT last_name,department_name FROM employees INNER JOIN departments;\nSELECT last_name,department_name FROM employees JOIN departments;\n")])])]),a("h3",{attrs:{id:"_1-3-案例分析与问题解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-案例分析与问题解决"}},[e._v("#")]),e._v(" 1.3 案例分析与问题解决")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("笛卡尔积的错误会在下面条件下产生")]),e._v("：")]),e._v(" "),a("ul",[a("li",[e._v("省略多个表的连接条件（或关联条件）")]),e._v(" "),a("li",[e._v("连接条件（或关联条件）无效")]),e._v(" "),a("li",[e._v("所有表中的所有行互相连接")])])]),e._v(" "),a("li",[a("p",[e._v("为了避免笛卡尔积， 可以"),a("strong",[e._v("在 WHERE 加入有效的连接条件。")])])]),e._v(" "),a("li",[a("p",[e._v("加入连接条件后，查询语法：")]),e._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT\ttable1.column, table2.column\nFROM\ttable1, table2\nWHERE\ttable1.column1 = table2.column2;  #连接条件\n")])])]),a("ul",[a("li",[a("strong",[e._v("在 WHERE子句中写入连接条件。")])])])]),e._v(" "),a("li",[a("p",[e._v("正确写法：")]),e._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#案例：查询员工的姓名及其部门名称\nSELECT last_name, department_name\nFROM employees, departments\nWHERE employees.department_id = departments.department_id;\n")])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("在表中有相同列时，在列名之前加上表名前缀。")])])])]),e._v(" "),a("h2",{attrs:{id:"_2-多表查询分类讲解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-多表查询分类讲解"}},[e._v("#")]),e._v(" 2. 多表查询分类讲解")]),e._v(" "),a("h3",{attrs:{id:"分类1-等值连接-vs-非等值连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分类1-等值连接-vs-非等值连接"}},[e._v("#")]),e._v(" 分类1：等值连接 vs 非等值连接")]),e._v(" "),a("h4",{attrs:{id:"等值连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#等值连接"}},[e._v("#")]),e._v(" 等值连接")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554975496900.png",alt:"1554975496900"}})]),e._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT employees.employee_id, employees.last_name, \n       employees.department_id, departments.department_id,\n       departments.location_id\nFROM   employees, departments\nWHERE  employees.department_id = departments.department_id;\n")])])]),a("p",[a("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554975522600.png",alt:"1554975522600"}})]),e._v(" "),a("p",[a("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554975526339.png",alt:"1554975526339"}})]),e._v(" "),a("p",[a("strong",[e._v("拓展1：多个连接条件与 AND 操作符")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554975606231.png",alt:"1554975606231"}})]),e._v(" "),a("p",[a("strong",[e._v("拓展2：区分重复的列名")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("多个表中有相同列时，必须在列名之前加上表名前缀。")])]),e._v(" "),a("li",[e._v("在不同表中具有相同列名的列可以用"),a("code",[e._v("表名")]),e._v("加以区分。")])]),e._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT employees.last_name, departments.department_name,employees.department_id\nFROM employees, departments\nWHERE employees.department_id = departments.department_id;\n")])])]),a("p",[a("strong",[e._v("拓展3：表的别名")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("使用别名可以简化查询。")])]),e._v(" "),a("li",[a("p",[e._v("列名前使用表名前缀可以提高查询效率。")])])]),e._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT e.employee_id, e.last_name, e.department_id,\n       d.department_id, d.location_id\nFROM   employees e , departments d\nWHERE  e.department_id = d.department_id;\n")])])]),a("blockquote",[a("p",[e._v("需要注意的是，如果我们使用了表的别名，在查询字段中、过滤条件中就只能使用别名进行代替，不能使用原有的表名，否则就会报错。")])]),e._v(" "),a("blockquote",[a("p",[a("code",[e._v("阿里开发规范")]),e._v("：")]),e._v(" "),a("p",[e._v("【"),a("code",[e._v("强制")]),e._v("】对于数据库中表记录的查询和变更，只要涉及多个表，都需要在列名前加表的别名（或 表名）进行限定。")]),e._v(" "),a("p",[a("code",[e._v("说明")]),e._v("：对多表进行查询记录、更新记录、删除记录时，如果对操作列没有限定表的别名（或表名），并且操作列在多个表中存在时，就会抛异常。")]),e._v(" "),a("p",[a("code",[e._v("正例")]),e._v("：select t1.name from table_first as t1 , table_second as t2 where t1.id=t2.id;")]),e._v(" "),a("p",[a("code",[e._v("反例")]),e._v("：在某业务中，由于多表关联查询语句没有加表的别名（或表名）的限制，正常运行两年后，最近在 某个表中增加一个同名字段，在预发布环境做数据库变更后，线上查询语句出现出 1052 异常：Column  'name' in field list is ambiguous。")])]),e._v(" "),a("p",[a("strong",[e._v("拓展4：连接多个表")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554978354431.png",alt:"1554978354431"}})]),e._v(" "),a("p",[e._v("**总结：连接 n个表,至少需要n-1个连接条件。**比如，连接三个表，至少需要两个连接条件。")]),e._v(" "),a("p",[e._v("练习：查询出公司员工的 last_name,department_name, city")]),e._v(" "),a("h4",{attrs:{id:"非等值连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非等值连接"}},[e._v("#")]),e._v(" 非等值连接")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554978442447.png",alt:"1554978442447"}})]),e._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT e.last_name, e.salary, j.grade_level\nFROM   employees e, job_grades j\nWHERE  e.salary BETWEEN j.lowest_sal AND j.highest_sal;\n")])])]),a("p",[a("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554978477013.png",alt:"1554978477013"}})]),e._v(" "),a("p",[a("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554978482652.png",alt:"1554978482652"}})]),e._v(" "),a("h3",{attrs:{id:"分类2-自连接-vs-非自连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分类2-自连接-vs-非自连接"}},[e._v("#")]),e._v(" 分类2：自连接 vs 非自连接")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554978514321.png",alt:"1554978514321"}})]),e._v(" "),a("ul",[a("li",[e._v("当table1和table2本质上是同一张表，只是用取别名的方式虚拟成两张表以代表不同的意义。然后两个表再进行内连接，外连接等查询。")])]),e._v(" "),a("p",[a("strong",[e._v("题目：查询employees表，返回“Xxx  works for Xxx”")])]),e._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT CONCAT(worker.last_name ,' works for ' \n       , manager.last_name)\nFROM   employees worker, employees manager\nWHERE  worker.manager_id = manager.employee_id ;\n")])])]),a("p",[a("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554978684947.png",alt:"1554978684947"}})]),e._v(" "),a("p",[a("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554978690764.png",alt:"1554978690764"}})]),e._v(" "),a("p",[e._v("练习：查询出last_name为 ‘Chen’ 的员工的 manager 的信息。")]),e._v(" "),a("h3",{attrs:{id:"分类3-内连接-vs-外连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分类3-内连接-vs-外连接"}},[e._v("#")]),e._v(" 分类3：内连接 vs 外连接")]),e._v(" "),a("p",[e._v("除了查询满足条件的记录以外，外连接还可以查询某一方不满足条件的记录。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554978955659.png",alt:"1554978955659"}})]),e._v(" "),a("ul",[a("li",[a("p",[e._v("内连接: 合并具有同一列的两个以上的表的行, "),a("strong",[e._v("结果集中不包含一个表与另一个表不匹配的行")])])]),e._v(" "),a("li",[a("p",[e._v("外连接: 两个表在连接过程中除了返回满足连接条件的行以外"),a("strong",[e._v("还返回左（或右）表中不满足条件的行")]),e._v(" "),a("strong",[e._v("，这种连接称为左（或右） 外连接")]),e._v("。没有匹配的行时, 结果表中相应的列为空(NULL)。")])]),e._v(" "),a("li",[a("p",[e._v("如果是左外连接，则连接条件中左边的表也称为"),a("code",[e._v("主表")]),e._v("，右边的表称为"),a("code",[e._v("从表")]),e._v("。")]),e._v(" "),a("p",[e._v("如果是右外连接，则连接条件中右边的表也称为"),a("code",[e._v("主表")]),e._v("，左边的表称为"),a("code",[e._v("从表")]),e._v("。")])])]),e._v(" "),a("h4",{attrs:{id:"sql92-使用-创建连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql92-使用-创建连接"}},[e._v("#")]),e._v(" SQL92：使用(+)创建连接")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("在 SQL92 中采用（+）代表从表所在的位置。即左或右外连接中，(+) 表示哪个是从表。")])]),e._v(" "),a("li",[a("p",[e._v("Oracle 对 SQL92 支持较好，而 MySQL 则不支持 SQL92 的外连接。")]),e._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#左外连接\nSELECT last_name,department_name\nFROM employees ,departments\nWHERE employees.department_id = departments.department_id(+);\n\n#右外连接\nSELECT last_name,department_name\nFROM employees ,departments\nWHERE employees.department_id(+) = departments.department_id;\n")])])])]),e._v(" "),a("li",[a("p",[e._v("而且在 SQL92 中，只有左外连接和右外连接，没有满（或全）外连接。")])])]),e._v(" "),a("h2",{attrs:{id:"_3-sql99语法实现多表查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-sql99语法实现多表查询"}},[e._v("#")]),e._v(" 3. SQL99语法实现多表查询")]),e._v(" "),a("h3",{attrs:{id:"_3-1-基本语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-基本语法"}},[e._v("#")]),e._v(" 3.1 基本语法")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("使用JOIN...ON子句创建连接的语法结构：")]),e._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT table1.column, table2.column,table3.column\nFROM table1\n    JOIN table2 ON table1 和 table2 的连接条件\n        JOIN table3 ON table2 和 table3 的连接条件\n")])])]),a("p",[e._v("它的嵌套逻辑类似我们使用的 FOR 循环：")]),e._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("for t1 in table1:\n    for t2 in table2:\n       if condition1:\n           for t3 in table3:\n              if condition2:\n                  output t1 + t2 + t3\n")])])]),a("p",[e._v("SQL99 采用的这种嵌套结构非常清爽、层次性更强、可读性更强，即使再多的表进行连接也都清晰可见。如果你采用 SQL92，可读性就会大打折扣。")])]),e._v(" "),a("li",[a("p",[e._v("语法说明：")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("可以使用")]),e._v(" "),a("strong",[e._v("ON")]),e._v(" "),a("strong",[e._v("子句指定额外的连接条件")]),e._v("。")]),e._v(" "),a("li",[e._v("这个连接条件是与其它条件分开的。")]),e._v(" "),a("li",[a("strong",[e._v("ON")]),e._v(" "),a("strong",[e._v("子句使语句具有更高的易读性")]),e._v("。")]),e._v(" "),a("li",[e._v("关键字 JOIN、INNER JOIN、CROSS JOIN 的含义是一样的，都表示内连接")])])])]),e._v(" "),a("h3",{attrs:{id:"_3-2-内连接-inner-join-的实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-内连接-inner-join-的实现"}},[e._v("#")]),e._v(" 3.2 内连接(INNER JOIN)的实现")]),e._v(" "),a("ul",[a("li",[e._v("语法：")])]),e._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT 字段列表\nFROM A表 INNER JOIN B表\nON 关联条件\nWHERE 等其他子句;\n")])])]),a("p",[e._v("题目1：")]),e._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT e.employee_id, e.last_name, e.department_id, \n       d.department_id, d.location_id\nFROM   employees e JOIN departments d\nON     (e.department_id = d.department_id);\n")])])]),a("p",[a("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554979073996.png",alt:"1554979073996"}})]),e._v(" "),a("p",[a("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554979079395.png",alt:"1554979079395"}})]),e._v(" "),a("p",[e._v("题目2：")]),e._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT employee_id, city, department_name\nFROM   employees e \nJOIN   departments d\nON     d.department_id = e.department_id \nJOIN   locations l\nON     d.location_id = l.location_id;\n")])])]),a("p",[a("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554979110008.png",alt:"1554979110008"}})]),e._v(" "),a("p",[a("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554979115642.png",alt:"1554979115642"}})]),e._v(" "),a("h3",{attrs:{id:"_3-3-外连接-outer-join-的实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-外连接-outer-join-的实现"}},[e._v("#")]),e._v(" 3.3 外连接(OUTER JOIN)的实现")]),e._v(" "),a("h4",{attrs:{id:"_3-3-1-左外连接-left-outer-join"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-左外连接-left-outer-join"}},[e._v("#")]),e._v(" 3.3.1 左外连接(LEFT OUTER JOIN)")]),e._v(" "),a("ul",[a("li",[e._v("语法：")])]),e._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#实现查询结果是A\nSELECT 字段列表\nFROM A表 LEFT JOIN B表\nON 关联条件\nWHERE 等其他子句;\n")])])]),a("ul",[a("li",[e._v("举例：")])]),e._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT e.last_name, e.department_id, d.department_name\nFROM   employees e\nLEFT OUTER JOIN departments d\nON   (e.department_id = d.department_id) ;\n")])])]),a("p",[a("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554979200961.png",alt:"1554979200961"}})]),e._v(" "),a("h4",{attrs:{id:"_3-3-2-右外连接-right-outer-join"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-右外连接-right-outer-join"}},[e._v("#")]),e._v(" 3.3.2 右外连接(RIGHT OUTER JOIN)")]),e._v(" "),a("ul",[a("li",[e._v("语法：")])]),e._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#实现查询结果是B\nSELECT 字段列表\nFROM A表 RIGHT JOIN B表\nON 关联条件\nWHERE 等其他子句;\n")])])]),a("ul",[a("li",[e._v("举例：")])]),e._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT e.last_name, e.department_id, d.department_name\nFROM   employees e\nRIGHT OUTER JOIN departments d\nON    (e.department_id = d.department_id) ;\n")])])]),a("p",[a("img",{attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554979243194.png",alt:"1554979243194"}})]),e._v(" "),a("blockquote",[a("p",[e._v("需要注意的是，LEFT JOIN 和 RIGHT JOIN 只存在于 SQL99 及以后的标准中，在 SQL92 中不存在，只能用 (+) 表示。")])]),e._v(" "),a("h4",{attrs:{id:"_3-3-3-满外连接-full-outer-join"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-3-满外连接-full-outer-join"}},[e._v("#")]),e._v(" 3.3.3 满外连接(FULL OUTER JOIN)")]),e._v(" "),a("ul",[a("li",[e._v("满外连接的结果 = 左右表匹配的数据 + 左表没有匹配到的数据 + 右表没有匹配到的数据。")]),e._v(" "),a("li",[e._v("SQL99是支持满外连接的。使用FULL JOIN 或 FULL OUTER JOIN来实现。")]),e._v(" "),a("li",[e._v("需要注意的是，MySQL不支持FULL JOIN，但是可以用 LEFT JOIN "),a("strong",[e._v("UNION")]),e._v(" RIGHT join代替。")])]),e._v(" "),a("h2",{attrs:{id:"_4-union的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-union的使用"}},[e._v("#")]),e._v(" 4. UNION的使用")]),e._v(" "),a("p",[a("strong",[e._v("合并查询结果")]),e._v("\n利用UNION关键字，可以给出多条SELECT语句，并将它们的结果组合成单个结果集。合并时，两个表对应的列数和数据类型必须相同，并且相互对应。各个SELECT语句之间使用UNION或UNION ALL关键字分隔。")]),e._v(" "),a("p",[e._v("语法格式：")]),e._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT column,... FROM table1\nUNION [ALL]\nSELECT column,... FROM table2\n")])])]),a("p",[a("strong",[e._v("UNION操作符")])]),e._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554979317187.png",alt:"1554979317187"}}),e._v(" "),a("p",[e._v("UNION 操作符返回两个查询的结果集的并集，去除重复记录。")]),e._v(" "),a("p",[a("strong",[e._v("UNION ALL操作符")])]),e._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554979343634.png",alt:"1554979343634"}}),e._v(" "),a("p",[e._v("UNION ALL操作符返回两个查询的结果集的并集。对于两个结果集的重复部分，不去重。")]),e._v(" "),a("blockquote",[a("p",[e._v("注意：执行UNION ALL语句时所需要的资源比UNION语句少。如果明确知道合并数据后的结果数据不存在重复数据，或者不需要去除重复的数据，则尽量使用UNION ALL语句，以提高数据查询的效率。")])]),e._v(" "),a("p",[e._v("举例：查询部门编号>90或邮箱包含a的员工信息")]),e._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#方式1\nSELECT * FROM employees WHERE email LIKE '%a%' OR department_id>90;\n")])])]),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#方式2\nSELECT * FROM employees  WHERE email LIKE '%a%'\nUNION\nSELECT * FROM employees  WHERE department_id>90;\n")])])]),a("p",[e._v("举例：查询中国用户中男性的信息以及美国用户中年男性的用户信息")]),e._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT id,cname FROM t_chinamale WHERE csex='男'\nUNION ALL\nSELECT id,tname FROM t_usmale WHERE tGender='male';\n")])])]),a("h2",{attrs:{id:"_5-7种sql-joins的实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-7种sql-joins的实现"}},[e._v("#")]),e._v(" 5. 7种SQL JOINS的实现")]),e._v(" "),a("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554979255233.png",alt:"1554979255233"}}),e._v(" "),a("h3",{attrs:{id:"_5-7-1-代码实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-7-1-代码实现"}},[e._v("#")]),e._v(" 5.7.1 代码实现")]),e._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#中图：内连接 A∩B\nSELECT employee_id,last_name,department_name\nFROM employees e JOIN departments d\nON e.`department_id` = d.`department_id`;\n")])])]),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#左上图：左外连接\nSELECT employee_id,last_name,department_name\nFROM employees e LEFT JOIN departments d\nON e.`department_id` = d.`department_id`;\n")])])]),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#右上图：右外连接\nSELECT employee_id,last_name,department_name\nFROM employees e RIGHT JOIN departments d\nON e.`department_id` = d.`department_id`;\n")])])]),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#左中图：A - A∩B\nSELECT employee_id,last_name,department_name\nFROM employees e LEFT JOIN departments d\nON e.`department_id` = d.`department_id`\nWHERE d.`department_id` IS NULL\n")])])]),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#右中图：B-A∩B\nSELECT employee_id,last_name,department_name\nFROM employees e RIGHT JOIN departments d\nON e.`department_id` = d.`department_id`\nWHERE e.`department_id` IS NULL\n")])])]),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#左下图：满外连接\n# 左中图 + 右上图  A∪B\nSELECT employee_id,last_name,department_name\nFROM employees e LEFT JOIN departments d\nON e.`department_id` = d.`department_id`\nWHERE d.`department_id` IS NULL\nUNION ALL  #没有去重操作，效率高\nSELECT employee_id,last_name,department_name\nFROM employees e RIGHT JOIN departments d\nON e.`department_id` = d.`department_id`;\n")])])]),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#右下图\n#左中图 + 右中图  A ∪B- A∩B 或者 (A -  A∩B) ∪ （B - A∩B）\nSELECT employee_id,last_name,department_name\nFROM employees e LEFT JOIN departments d\nON e.`department_id` = d.`department_id`\nWHERE d.`department_id` IS NULL\nUNION ALL\nSELECT employee_id,last_name,department_name\nFROM employees e RIGHT JOIN departments d\nON e.`department_id` = d.`department_id`\nWHERE e.`department_id` IS NULL\n")])])]),a("h3",{attrs:{id:"_5-7-2-语法格式小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-7-2-语法格式小结"}},[e._v("#")]),e._v(" 5.7.2 语法格式小结")]),e._v(" "),a("ul",[a("li",[e._v("左中图")])]),e._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#实现A -  A∩B\nselect 字段列表\nfrom A表 left join B表\non 关联条件\nwhere 从表关联字段 is null and 等其他子句;\n")])])]),a("ul",[a("li",[e._v("右中图")])]),e._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#实现B -  A∩B\nselect 字段列表\nfrom A表 right join B表\non 关联条件\nwhere 从表关联字段 is null and 等其他子句;\n")])])]),a("ul",[a("li",[e._v("左下图")])]),e._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#实现查询结果是A∪B\n#用左外的A，union 右外的B\nselect 字段列表\nfrom A表 left join B表\non 关联条件\nwhere 等其他子句\n\nunion \n\nselect 字段列表\nfrom A表 right join B表\non 关联条件\nwhere 等其他子句;\n")])])]),a("ul",[a("li",[e._v("右下图")])]),e._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#实现A∪B -  A∩B  或   (A -  A∩B) ∪ （B - A∩B）\n#使用左外的 (A -  A∩B)  union 右外的（B - A∩B）\nselect 字段列表\nfrom A表 left join B表\non 关联条件\nwhere 从表关联字段 is null and 等其他子句\n\nunion\n\nselect 字段列表\nfrom A表 right join B表\non 关联条件\nwhere 从表关联字段 is null and 等其他子句\n")])])]),a("h2",{attrs:{id:"_6-sql99语法新特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-sql99语法新特性"}},[e._v("#")]),e._v(" 6. SQL99语法新特性")]),e._v(" "),a("h3",{attrs:{id:"_6-1-自然连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-自然连接"}},[e._v("#")]),e._v(" 6.1 自然连接")]),e._v(" "),a("p",[e._v("SQL99 在 SQL92 的基础上提供了一些特殊语法，比如 "),a("code",[e._v("NATURAL JOIN")]),e._v(" 用来表示自然连接。我们可以把自然连接理解为 SQL92 中的等值连接。它会帮你自动查询两张连接表中"),a("code",[e._v("所有相同的字段")]),e._v("，然后进行"),a("code",[e._v("等值连接")]),e._v("。")]),e._v(" "),a("p",[e._v("在SQL92标准中：")]),e._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT employee_id,last_name,department_name\nFROM employees e JOIN departments d\nON e.`department_id` = d.`department_id`\nAND e.`manager_id` = d.`manager_id`;\n")])])]),a("p",[e._v("在 SQL99 中你可以写成：")]),e._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT employee_id,last_name,department_name\nFROM employees e NATURAL JOIN departments d;\n")])])]),a("h3",{attrs:{id:"_6-2-using连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-using连接"}},[e._v("#")]),e._v(" 6.2 USING连接")]),e._v(" "),a("p",[e._v("当我们进行连接的时候，SQL99还支持使用 USING 指定数据表里的"),a("code",[e._v("同名字段")]),e._v("进行等值连接。但是只能配合JOIN一起使用。比如：")]),e._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT employee_id,last_name,department_name\nFROM employees e JOIN departments d\nUSING (department_id);\n")])])]),a("p",[e._v("你能看出与自然连接 NATURAL JOIN 不同的是，USING 指定了具体的相同的字段名称，你需要在 USING 的括号 () 中填入要指定的同名字段。同时使用 "),a("code",[e._v("JOIN...USING")]),e._v(" 可以简化 JOIN ON 的等值连接。它与下面的 SQL 查询结果是相同的：")]),e._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT employee_id,last_name,department_name\nFROM employees e ,departments d\nWHERE e.department_id = d.department_id;\n")])])]),a("h2",{attrs:{id:"_7-章节小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-章节小结"}},[e._v("#")]),e._v(" 7. 章节小结")]),e._v(" "),a("p",[e._v("表连接的约束条件可以有三种方式：WHERE, ON, USING")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("WHERE：适用于所有关联查询")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("ON")]),e._v("：只能和JOIN一起使用，只能写关联条件。虽然关联条件可以并到WHERE中和其他条件一起写，但分开写可读性更好。")])]),e._v(" "),a("li",[a("p",[e._v("USING：只能和JOIN一起使用，而且要求"),a("strong",[e._v("两个")]),e._v("关联字段在关联表中名称一致，而且只能表示关联字段值相等")])])]),e._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#关联条件\n#把关联条件写在where后面\nSELECT last_name,department_name \nFROM employees,departments \nWHERE employees.department_id = departments.department_id;\n\n#把关联条件写在on后面，只能和JOIN一起使用\nSELECT last_name,department_name \nFROM employees INNER JOIN departments \nON employees.department_id = departments.department_id;\n\nSELECT last_name,department_name \nFROM employees CROSS JOIN departments \nON employees.department_id = departments.department_id;\n\nSELECT last_name,department_name  \nFROM employees JOIN departments \nON employees.department_id = departments.department_id;\n\n#把关联字段写在using()中，只能和JOIN一起使用\n#而且两个表中的关联字段必须名称相同，而且只能表示=\n#查询员工姓名与基本工资\nSELECT last_name,job_title\nFROM employees INNER JOIN jobs USING(job_id);\n\n#n张表关联，需要n-1个关联条件\n#查询员工姓名，基本工资，部门名称\nSELECT last_name,job_title,department_name FROM employees,departments,jobs \nWHERE employees.department_id = departments.department_id \nAND employees.job_id = jobs.job_id;\n\nSELECT last_name,job_title,department_name \nFROM employees INNER JOIN departments INNER JOIN jobs \nON employees.department_id = departments.department_id \nAND employees.job_id = jobs.job_id;\n")])])]),a("p",[a("strong",[e._v("注意：")])]),e._v(" "),a("p",[e._v("我们要"),a("code",[e._v("控制连接表的数量")]),e._v("。多表连接就相当于嵌套 for 循环一样，非常消耗资源，会让 SQL 查询性能下降得很严重，因此不要连接不必要的表。在许多 DBMS 中，也都会有最大连接表的限制。")]),e._v(" "),a("blockquote",[a("p",[e._v("【强制】超过三个表禁止 join。需要 join 的字段，数据类型保持绝对一致；多表关联查询时， 保证被关联的字段需要有索引。")]),e._v(" "),a("p",[e._v("说明：即使双表 join 也要注意表索引、SQL 性能。")]),e._v(" "),a("p",[e._v("来源：阿里巴巴《Java开发手册》")])]),e._v(" "),a("h2",{attrs:{id:"附录-常用的-sql-标准有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附录-常用的-sql-标准有哪些"}},[e._v("#")]),e._v(" 附录：常用的 SQL 标准有哪些")]),e._v(" "),a("p",[e._v("在正式开始讲连接表的种类时，我们首先需要知道 SQL 存在不同版本的标准规范，因为不同规范下的表连接操作是有区别的。")]),e._v(" "),a("p",[e._v("SQL 有两个主要的标准，分别是 "),a("code",[e._v("SQL92")]),e._v(" 和 "),a("code",[e._v("SQL99")]),e._v("。92 和 99 代表了标准提出的时间，SQL92 就是 92 年提出的标准规范。当然除了 SQL92 和 SQL99 以外，还存在 SQL-86、SQL-89、SQL:2003、SQL:2008、SQL:2011 和 SQL:2016 等其他的标准。")]),e._v(" "),a("p",[e._v("这么多标准，到底该学习哪个呢？"),a("strong",[e._v("实际上最重要的 SQL 标准就是 SQL92 和 SQL99")]),e._v("。一般来说 SQL92 的形式更简单，但是写的 SQL 语句会比较长，可读性较差。而 SQL99 相比于 SQL92 来说，语法更加复杂，但可读性更强。我们从这两个标准发布的页数也能看出，SQL92 的标准有 500 页，而 SQL99 标准超过了 1000 页。实际上从 SQL99 之后，很少有人能掌握所有内容，因为确实太多了。就好比我们使用 Windows、Linux 和 Office 的时候，很少有人能掌握全部内容一样。我们只需要掌握一些核心的功能，满足日常工作的需求即可。")]),e._v(" "),a("p",[e._v("**SQL92 和 SQL99 是经典的 SQL 标准，也分别叫做 SQL-2 和 SQL-3 标准。**也正是在这两个标准发布之后，SQL 影响力越来越大，甚至超越了数据库领域。现如今 SQL 已经不仅仅是数据库领域的主流语言，还是信息领域中信息处理的主流语言。在图形检索、图像检索以及语音检索中都能看到 SQL 语言的使用。")])])}),[],!1,null,null,null);a.default=n.exports}}]);