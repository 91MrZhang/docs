---
autoGroup-9: GC垃圾回收
title: CMS原理
---
### CMS （Concurrent-Mark-Sweep)
CMS的好处是低延迟（低STW），并行统计GCRoot

CMS在JDK9已经被废弃了，在JDK14就撤出历史舞台了

### CMS工作流程

#### 初始标记阶段（Initital Mark）
先STW一次，**仅仅标记能直接关联的GCRoot**
#### 并发标记阶段（Concurrent Mark）
与其他线程同步执行，顺着第一步标记的GCRoot向下遍历，找出所有关联对象，因为这一步很耗时，所以并发执行，大大减少STW时间，是CMS关键所在
#### 重标记阶段（Remark）
并发标记过程中，其他线程也在执行，有引用更新调整的情况发生，所以需要STW一下，重新标记一次

::: tip 

这里涉及到一个**Card Table**的概念

并发标记阶段过程中，出现变更的对象会被记录在Card Table里

这样可以大大提高Remark阶段的效率

:::
#### 并发清除阶段 （Concurrent Sweep）
标记好之后，再并发清除

##### 参考文章
https://www.jianshu.com/p/a88dabfc2f60

### 弊端
#### 内存碎片
因为是并行清理的，只清理垃圾，不能调现有引用的地址，所以无法避免产生许多的内存碎片
#### 浮动垃圾
在清理过程中，可能还会产生新的垃圾，无法避免的，只能等待下一次GC触发
#### 触发Serial Old清理
老年代内存碎片太多了，没办法担保分配了，会触发Serial Old进行FullGC，而Serial Old又是串行的STW，效率很差
CMSInitiatingOccupancyFraction是CMS的老年代内存达到一定的百分比之后触发Serial Old的阈值

### 适用场景
1. 追求低延迟的强调用户体验的应用
2. 内存不是特别大的，6G以下，如果内存特别大，那么真触发了一次Serial Old，FullGC大内存很麻烦，影响CMS口碑