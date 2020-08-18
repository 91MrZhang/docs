---
autoGroup-7: 堆
title: TLAB
---
### Thread Local Allocation Buffer
多个线程在要申请一块内存地址存放实例时，容易出现竞争，进而出现互相等待的情况，影响性能

在线程创建之初，虚拟机就在Eden区划分了一小块区域，专门给这个线程用

refill_waste是一个阈值参数，如果线程的TLAB快要满了，又来了一个新对象，那么有两种可能

1. TLAB保留，新对象在堆中分配
2. 旧TLAB恢复成普通堆空间，该线程再申请一个新TLAB空间
