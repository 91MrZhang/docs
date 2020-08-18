---
autoGroup-8: synchronized锁优化
title: 对象内存模型、对象头
---

### 优化原因
1. synchronized的底层实现，涉及到了操作系统中的lock等指令，需要操作系统、CPU协助配合，所以效率低，是一把**重量级的锁**
2. Java早期版本，很多方法的实现都存在synchronized关键字，而开发者使用时，这些方法使用的场景并不依赖多线程，这就导致了很多额外的性能开销
3. JDK1.6对锁进行了优化，提升了效率

### 32位、64位对象内存模型

这里不重复造轮子了，有现成的文档

https://www.bilibili.com/read/cv4982999/

需要带着问题去了解

1. 为什么压缩指针在32G的内存会失效？
2. 为什么垃圾回收年轻代的代数是15代？
3. UseCompressedOops、CompressedClassPointers是有区别的

