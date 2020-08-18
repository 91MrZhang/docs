---
autoGroup-3: 虚拟机栈
title: 基本概念
---
### JVM Stack
1. 虚拟机栈是线程私有的，不被其他线程共享
2. 栈不参与垃圾回收，如果是StackOverflowError，则代表递归过于繁琐，可能出现了死循环
3. 生命周期和线程同步
   
<img :src="$withBase('/assets/img/jvm/jvm-3-1-1.png')"  width="272" height="404">
