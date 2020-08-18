---
autoGroup-9: GC垃圾回收
title: 调优工具
---
### JDK命令
#### jps
jps查看操作系统中各个Java进程的pid
#### jstack、jmap、jstat
1. jstack分析栈使用情况
2. jmap分析堆使用情况，导出dump文件，hprof文件
3. jstat分析各个类，垃圾分区情况

### 工具
#### Eclipse MAT
免费的

#### Jprofier
收费的，UI简单，更易上手


#### Arthas
阿里开源软件，基于命令行使用，

很多时候生产平台并不支持图形化工具，只让你上去简单的SSH

Arthas是个比较好的选择