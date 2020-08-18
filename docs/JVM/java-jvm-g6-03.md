---
autoGroup-6: 方法区
title: 永久代、元空间
---
### 永久代、元空间
永久代只有在Hotspot虚拟机才有的，后来Hotspot参考了JRockit，放弃了永久代，改成了元空间


<img :src="$withBase('/assets/img/jvm/jvm-6-3-1.svg')"  width="520" height="600">




1. **OutOfMemoryError: PermGen space** 就是永久代时代经常出现的问题，需要指定PermSize，而元空间改为了使用**直接内存**，基本上不会出现OOM
2. 过去字符串常量存在方法区中，程序运行会生成很多String，而方法区进行垃圾回收又不频繁，所以方法区很容易满，出现OOM的情况