---
autoGroup-2: 基本概念
title: JVM内存结构
---
### JVM内存结构
**PS：从processon.com上借鉴是最高效的**
<img :src="$withBase('/assets/img/jvm/jvm-1-1-1.png')"  width="1000" height="800">

#### 大致流程
1. 类加载子系统将.class文件进行一系列加载，加载到运行时数据区
2. 执行引擎执行运行时数据区的内容
3. 弄差不多了，执行引擎再回收垃圾