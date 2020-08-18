(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{533:function(t,e,a){"use strict";a.r(e);var l=a(27),v=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务"}},[t._v("#")]),t._v(" 事务")]),t._v(" "),a("p",[t._v("事务就是一系列操作合在一起的集合，这个集合要满足ACID四个属性")]),t._v(" "),a("ol",[a("li",[t._v("原子性（Atomicity）: 这一系列操作，必须看成一个整体，要么全做完，要么全恢复原状，不能做一半放下")]),t._v(" "),a("li",[t._v("一致性（Consistency）：A减少50给B增加50，A和B的值都要变化，只能只变一个")]),t._v(" "),a("li",[t._v("隔离性（Isolation）：每个事务都是独立的，不互相影响")]),t._v(" "),a("li",[t._v("持久性（Durability）：事务提交了，数据就要存下来了")])]),t._v(" "),a("h3",{attrs:{id:"并发时产生的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#并发时产生的问题"}},[t._v("#")]),t._v(" 并发时产生的问题")]),t._v(" "),a("ol",[a("li",[t._v("脏读：事务B未提交的数据，被A读取到了，如果事务B回滚了，那么A读的这个就算脏数据了")]),t._v(" "),a("li",[t._v("不可重复读： 每次读的都不一样，事务A要多次读一条数据，结果第二次读的时候，这条数据被事务B给修改并提交了，那么事务A两次读取的就不一致")]),t._v(" "),a("li",[t._v("幻读：事务A在批量更新数据时，事务B又插入了一条并提交，这个时候A就会发现自己少更新了一条，以为是自己产生幻觉")])]),t._v(" "),a("h3",{attrs:{id:"mysql隔离级别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql隔离级别"}},[t._v("#")]),t._v(" Mysql隔离级别")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("事务隔离级别")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("脏读")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("不可重复读")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("幻读")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("读未提交（read-uncommitted）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("√")])]),t._v(" "),a("tr",[a("td",[t._v("不可重复读（read-committed）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("√")])]),t._v(" "),a("tr",[a("td",[t._v("可重复读（repeatable-read）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("√")])]),t._v(" "),a("tr",[a("td",[t._v("串行化（serializable）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),a("p",[t._v("1、串行化虽然很好，但是效率最低，Mysql默认使用的是"),a("strong",[t._v("可重复读（repeatable-read）")])]),t._v(" "),a("p",[t._v("2、实际上Mysql的可重复读（repeatable-read） 使用了MVCC机制（具体可百度，原理比较复杂），可以最大程度的解决幻读问题，所以一般用默认的没什么毛病")])])}),[],!1,null,null,null);e.default=v.exports}}]);