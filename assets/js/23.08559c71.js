(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{428:function(t,s,a){"use strict";a.r(s);var n=a(27),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("程序计数器算是JVM中所有结构中，最简单的一款了😂")]),t._v(" "),a("h3",{attrs:{id:"pc-register"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pc-register"}},[t._v("#")]),t._v(" PC Register")]),t._v(" "),a("ol",[a("li",[t._v("程序计数器并不是CPU的寄存器，两个不是一个概念")]),t._v(" "),a("li",[t._v("程序计数器记录每一个线程执行到了哪一步,线程结束了也跟着消失")]),t._v(" "),a("li",[t._v("在JVM中占用资源不大，执行效率高")])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/img/jvm/jvm-2-1-1.png"),width:"200",height:"300"}}),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mrzhang"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("javalearn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jvm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cxjsq")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 程序计数器测试（一)\n *\n * @author 91MrZhang on 2020/8/12\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestDemo1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" va "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" vb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" vc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n\n")])])]),a("p",[t._v("通过jclasslib等工具，将.class字节码文件可视化，可以看到jvm指令，")]),t._v(" "),a("p",[a("strong",[t._v("实际上程序计数器就是记录这些jvm指令运行的到了哪一行的")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/img/jvm/jvm-2-1-2.png"),width:"768",height:"430"}})]),t._v(" "),a("h4",{attrs:{id:"cpu的时间片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cpu的时间片"}},[t._v("#")]),t._v(" CPU的时间片")]),t._v(" "),a("ol",[a("li",[t._v("宏观上看起来各个线程是交替执行的，微观上CPU为了公平，只能一个线程执行一会，再去执行下一个，轮着来，所以需要引入程序计数器这个概念，保证下次CPU过来执行的时候，直接能知道执行到哪里了")]),t._v(" "),a("li",[t._v("程序计数器是线程私有的，A线程执行时，A线程的程序计数器只为A服务")])])])}),[],!1,null,null,null);s.default=e.exports}}]);