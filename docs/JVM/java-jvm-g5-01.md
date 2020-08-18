---
autoGroup-5: 类加载子系统
title: 基本概念
---
### Class Loader Subsystem

#### 类何时会被加载？
按需加载，程序时涉及到哪个类哪个类就会被加载

##### -XX:+TraceClassLoading
这个JVM参数可以在程序运行过程中打印被加载的类

#### 类加载过程
<img :src="$withBase('/assets/img/jvm/jvm-5-1-1.png')"  width="700" height="300">

下面这张图非常好，盗图了:joy:
<img :src="$withBase('/assets/img/jvm/jvm-5-1-2.png')"  width="700" height="1200">