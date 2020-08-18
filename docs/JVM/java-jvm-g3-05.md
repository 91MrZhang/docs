---
autoGroup-3: 虚拟机栈
title: 动态链接
---
### Dynamic Linking
1. .class会把类中的一些字符挪到类的常量池中，并按索引排列，通过#号寻找目标，节省存储资源
2. 一个类被加载之前，是不会知道自己未来内存地址的，所以需要暂时通过这种#号，保持关系，在需要真正的调用时，找到目标，完成内存分配
``` java
/**
 * 动态链接（一）
 *
 * @author 91MrZhang on 2020/8/12
 */
public class TestDemo4 {

    public void m1(){
        int a = 0;
    }

    public static void main(String[] args) {
        TestDemo4 td4 = new TestDemo4();
        td4.m1();
    }
}
```
反编译.class文件，截取常量池这部分
``` 
Constant pool:
   #1 = Methodref          #5.#23         // java/lang/Object."<init>":()V
   #2 = Class              #24            // com/mrzhang/javalearn/jvm/zz/TestDemo4
   #3 = Methodref          #2.#23         // com/mrzhang/javalearn/jvm/zz/TestDemo4."<init>":()V
   #4 = Methodref          #2.#25         // com/mrzhang/javalearn/jvm/zz/TestDemo4.m1:()V
   #5 = Class              #26            // java/lang/Object
   #6 = Utf8               <init>
   #7 = Utf8               ()V
   #8 = Utf8               Code
   #9 = Utf8               LineNumberTable
  #10 = Utf8               LocalVariableTable
  #11 = Utf8               this
  #12 = Utf8               Lcom/mrzhang/javalearn/jvm/zz/TestDemo4;
  #13 = Utf8               m1
  #14 = Utf8               a
  #15 = Utf8               I
  #16 = Utf8               main
  #17 = Utf8               ([Ljava/lang/String;)V
  #18 = Utf8               args
  #19 = Utf8               [Ljava/lang/String;
  #20 = Utf8               td4
  #21 = Utf8               SourceFile
  #22 = Utf8               TestDemo4.java
  #23 = NameAndType        #6:#7          // "<init>":()V
  #24 = Utf8               com/mrzhang/javalearn/jvm/zz/TestDemo4
  #25 = NameAndType        #13:#7         // m1:()V
  #26 = Utf8               java/lang/Object
```
<img :src="$withBase('/assets/img/jvm/jvm-3-5-1.png')"  width="600" height="400">

以 invokespecial #4 为例，查询Constant Pool,就可以通过#4定位出即将调用的m1方法