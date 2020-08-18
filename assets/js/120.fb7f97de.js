(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{530:function(t,e,l){"use strict";l.r(e);var a=l(27),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h3",{attrs:{id:"存储引擎"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#存储引擎"}},[t._v("#")]),t._v(" 存储引擎")]),t._v(" "),l("div",{staticClass:"custom-block tip"},[l("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),l("p",[t._v("1、Mysql提供了数据存储的接口，引擎就是这些接口各种各样的实现方案")]),t._v(" "),l("p",[t._v("2、Mysql有好几种存储引擎，各有特点")]),t._v(" "),l("p",[t._v("3、存储引擎不是针对数据库的，是以表为单位的，如果数据库有10张表，这10张表想用哪个引擎都随便")])]),t._v(" "),l("p",[t._v("进入到Mysql数据库下")]),t._v(" "),l("div",{staticClass:"language-sql extra-class"},[l("pre",{pre:!0,attrs:{class:"language-sql"}},[l("code",[l("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("show")]),t._v(" ENGINES；\n")])])]),l("p",[t._v("列表如下")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Engine")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Support")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Comment")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Transactions")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("XA")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Savepoints")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("FEDERATED")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NO")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("small",[t._v("Federated MySQL storage engine")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("MRG_MYISAM")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("YES")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("small",[t._v("Collection of identical MyISAM tables")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NO")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NO")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NO")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("MyISAM")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("YES")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("small",[t._v("MyISAM storage engine")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NO")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NO")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NO")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("BLACKHOLE")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("YES")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("small",[t._v("/dev/null storage engine (anything you write to it disappears)")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NO")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NO")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NO")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("CSV")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("YES")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("small",[t._v("CSV storage engine")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NO")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NO")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NO")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("MEMORY")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("YES")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("small",[t._v("Hash based, stored in memory, useful for temporary tables")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NO")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NO")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NO")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("ARCHIVE")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("YES")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("small",[t._v("Archive storage engine")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NO")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NO")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NO")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("InnoDB")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("DEFAULT")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("small",[t._v("Supports transactions, row-level locking, and foreign keys")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("YES")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("YES")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("YES")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("PERFORMANCE_SCHEMA")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("YES")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("small",[t._v("Performance Schema")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NO")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NO")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NO")])])])]),t._v(" "),l("p",[t._v("常用的也就InnoDB、MyISAM")]),t._v(" "),l("p",[t._v("InnoDB是上面这些引擎中，唯一支持事务的,并且是行级锁，大多数人也都用这个，MyISAM不支持事务，而且还是表级锁，插入一条数据时，其他人再想向这表里插，就都得排队等着")]),t._v(" "),l("p",[t._v("关于选择InnoDB还是MyISAM并不是绝对的,常见的说法就是")]),t._v(" "),l("p",[l("strong",[t._v("如果写操作多就用InnoDB，读操作多就用MyISAM")])])])}),[],!1,null,null,null);e.default=i.exports}}]);