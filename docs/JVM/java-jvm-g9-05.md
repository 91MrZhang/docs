---
autoGroup-9: GC垃圾回收
title: 垃圾回收器介绍
---
目前JVM的垃圾回收器都是基于分代实现的，即年轻代和老年代，年轻代又分Eden区和S1、S2区
### 并行、并发的概念
1. 并行（Parallel）多个处理器，每个处理器都处理不同的任务
2. 并发（Concurrent）一个处理器处理多个任务，通过快速的切换，照顾到每一个任务

### 垃圾回收器组合关系图
这个关系图随着JDK和虚拟机版本是不停变化的，这里只写出1.8 HotSpot 64bit
<img :src="$withBase('/assets/img/jvm/jvm-9-5-1.svg')"  width="900" height="250">

#### Serial、Serial Old
第一代垃圾回收器组合，特点是串行的
1. 新生代满了，STW，Serial开始工作
2. 老年代满了，STW，Serial Old开始工作
#### Parallel Scavenge、Parallel Old
第二代垃圾回收器组合，由于串行太慢，就改成并行的了，较Serial系列 快了不少
1. 新生代满了，STW，Parallel Scavenge开始工作
2. 老年代满了，STW，Parallel Oldd开始工作
::: tip 

多线程移动对象时，也会使用堆中分配内存时的TLAB技术，减少资源竞争

:::
#### ParNew、CMS、Serial Old
第三代垃圾回收器组合，特点是可以边工作边清理垃圾

ParNew负责年轻代、CMS和Serial Old负责老年代

#### G1
第四代垃圾回收器，采用特有的Region模式，在JDK7中推出，目前使用较广泛

::: tip 

如果是单核处理器，Serial回收器的性能不一定比Parallel回收器差

:::


### 革命性的垃圾回收器
#### ZGC
未来的第五代垃圾回收器，目前还在实验期，实现过程很复杂，在性能上较前几代有颠覆性的提升