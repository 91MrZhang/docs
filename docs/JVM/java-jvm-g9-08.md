---
autoGroup-9: GC垃圾回收
title: JVM、GC参数
---
::: tip
这里介绍一下实际工作中常用的JVM、GC参数

:::
### JVM
#### 堆设置
``` java
-Xms8196m -Xmx8196m -Xss400k
```
目前业界基本都设成一样的，好处如下：
1. 初次启动时，垃圾回收器会因为你的最小值多进行很多次GC
2. GC完成了，JVM释放堆内存给OS，不够了还需要向OS申请，麻烦
3. 如果你的操作系统用了硬盘当虚拟内存，真实内存不够的话，向硬盘申请效率奇低（JVM把用真实内存的机会让给了其他应用）

方法区不用额外设置，因为1.8使用直接内存了

原则上尽最大限度保证堆空间大小，并且不要随意改分代大小和分代比例（JDK厂商经过大量实践给出的结论，一定是有道理的，自己乱调容易东边不亮西边亮）

#### OOM时，生成堆快照
``` java
-XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=\usr\xxx\logs\
```
这个会在OOM时，生成一个xxx.hprof的堆快照文件，用JProfiler后者Eclipse的MAT都可以打开，在实际工作中很有用，分析结果定位问题

### GC
#### 各种GC回收器的指定方式
| -XX:+UseSerialGC        | 新生代和老年代都使用串行收集器     |
| ----------------------- | ------------------------------------------------- |
| -XX:+UseParNewGC        | 新生代使用ParNew垃圾回收器，老年代使用串行收集器 |
| -XX:+UseParallelGC      | 新生代使用PararllelGC回收器，老年代使用串行收集器 |
| -XX:+UseParallelOldGC   | 新生代使用ParallelGC,老年代使用ParallelOldGC |
| -XX:+UseConcMarkSweepGC | 新生代ParNew,老年代使用CMS                |
| -XX:+UseG1GC            | 使用G1回收器，作用于新老代            |



#### CMS
``` java
–XX:CMSInitiatingOccupancyFraction=70
-XX:+UseCMSInitiatingOccupancyOnly
```
CMS回收阈值，如果想指定，必须把Only那个参数也带上，否则JVM只管一次，后续自动调整

我一般都不设置这两个参数:joy:


``` java
-XX:+ExplicitGCInvokesConcurrent
```
如果代码中有system.gc()的话，会直接来一次FullGC

这个参数可以让CMS并行执行FullGC

#### G1
``` java
-XX:MaxGCPauseMillis=200
```
每次回收的软时间限制

``` java
-XX:InitiatingHeapOccupancyPercent=45
```
**启动并发收集时的百分比**这个参数很重要，而且特异性很强，建议仔细研究研究

``` java
-XX:+UseStringDeduplication
```
G1独有的字符串去重技术，很推荐加上