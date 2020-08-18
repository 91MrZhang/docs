(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{542:function(s,t,a){"use strict";a.r(t);var e=a(27),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"查询各表的dml记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询各表的dml记录"}},[s._v("#")]),s._v(" 查询各表的DML记录")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" all_tab_modifications"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" dba_tab_modifications"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" user_tab_modifications"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h3",{attrs:{id:"查询数据的插入时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询数据的插入时间"}},[s._v("#")]),s._v(" 查询数据的插入时间")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" to_char"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("scn_to_timestamp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ORA_ROWSCN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'yyyy-mm-dd hh24:mi:ss:ff8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" update_time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" XXX t "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pk1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("传说这条命令只能追溯最近5天的最后DML更新记录")]),s._v(" "),a("p",[s._v("如果全表查询不加条件，查到5天以外的数据，会报下面这个错误")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("ORA"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("08181")]),s._v(": 指定的编号不是有效的系统更改号\nORA"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("06512")]),s._v(": 在 "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SYS.SCN_TO_TIMESTAMP"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" line "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("08181.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"specified number is not a valid system change number"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("Cause:    supplied scn was beyond the bounds "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("of")]),s._v(" a valid scn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Action")]),s._v(":   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" a valid scn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" \n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);