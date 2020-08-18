---
autoGroup-2: 程序计数器
title: 基本概念
---
程序计数器算是JVM中所有结构中，最简单的一款了:joy:
### PC Register
1. 程序计数器并不是CPU的寄存器，两个不是一个概念
2. 程序计数器记录每一个线程执行到了哪一步,线程结束了也跟着消失
3. 在JVM中占用资源不大，执行效率高
   
<img :src="$withBase('/assets/img/jvm/jvm-2-1-1.png')"  width="200" height="300">

``` java
package com.mrzhang.javalearn.jvm.cxjsq;

/**
 * 程序计数器测试（一)
 *
 * @author 91MrZhang on 2020/8/12
 */
public class TestDemo1 {
    public static void main(String[] args) {
        int va = 6;
        int vb = 8;
        int vc = 6 + 8;
        System.out.println(vc);
    }
}



```
通过jclasslib等工具，将.class字节码文件可视化，可以看到jvm指令，

**实际上程序计数器就是记录这些jvm指令运行的到了哪一行的**
<img :src="$withBase('/assets/img/jvm/jvm-2-1-2.png')"  width="768" height="430">

#### CPU的时间片
1. 宏观上看起来各个线程是交替执行的，微观上CPU为了公平，只能一个线程执行一会，再去执行下一个，轮着来，所以需要引入程序计数器这个概念，保证下次CPU过来执行的时候，直接能知道执行到哪里了
2. 程序计数器是线程私有的，A线程执行时，A线程的程序计数器只为A服务