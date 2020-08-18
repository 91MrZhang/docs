(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{431:function(t,a,n){"use strict";n.r(a);var s=n(27),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"dynamic-linking"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-linking"}},[t._v("#")]),t._v(" Dynamic Linking")]),t._v(" "),n("ol",[n("li",[t._v(".class会把类中的一些字符挪到类的常量池中，并按索引排列，通过#号寻找目标，节省存储资源")]),t._v(" "),n("li",[t._v("一个类被加载之前，是不会知道自己未来内存地址的，所以需要暂时通过这种#号，保持关系，在需要真正的调用时，找到目标，完成内存分配")])]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 动态链接（一）\n *\n * @author 91MrZhang on 2020/8/12\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestDemo4")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("m1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestDemo4")]),t._v(" td4 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestDemo4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        td4"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("m1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("反编译.class文件，截取常量池这部分")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('Constant pool:\n   #1 = Methodref          #5.#23         // java/lang/Object."<init>":()V\n   #2 = Class              #24            // com/mrzhang/javalearn/jvm/zz/TestDemo4\n   #3 = Methodref          #2.#23         // com/mrzhang/javalearn/jvm/zz/TestDemo4."<init>":()V\n   #4 = Methodref          #2.#25         // com/mrzhang/javalearn/jvm/zz/TestDemo4.m1:()V\n   #5 = Class              #26            // java/lang/Object\n   #6 = Utf8               <init>\n   #7 = Utf8               ()V\n   #8 = Utf8               Code\n   #9 = Utf8               LineNumberTable\n  #10 = Utf8               LocalVariableTable\n  #11 = Utf8               this\n  #12 = Utf8               Lcom/mrzhang/javalearn/jvm/zz/TestDemo4;\n  #13 = Utf8               m1\n  #14 = Utf8               a\n  #15 = Utf8               I\n  #16 = Utf8               main\n  #17 = Utf8               ([Ljava/lang/String;)V\n  #18 = Utf8               args\n  #19 = Utf8               [Ljava/lang/String;\n  #20 = Utf8               td4\n  #21 = Utf8               SourceFile\n  #22 = Utf8               TestDemo4.java\n  #23 = NameAndType        #6:#7          // "<init>":()V\n  #24 = Utf8               com/mrzhang/javalearn/jvm/zz/TestDemo4\n  #25 = NameAndType        #13:#7         // m1:()V\n  #26 = Utf8               java/lang/Object\n')])])]),n("img",{attrs:{src:t.$withBase("/assets/img/jvm/jvm-3-5-1.png"),width:"600",height:"400"}}),t._v(" "),n("p",[t._v("以 invokespecial #4 为例，查询Constant Pool,就可以通过#4定位出即将调用的m1方法")])])}),[],!1,null,null,null);a.default=e.exports}}]);