---
autoGroup-9: GC垃圾回收
title: STW、Safe Point、Safe Region
---
### STW （Stop The World）
一些垃圾回收器，在进行垃圾回收时，为了统计准确，需要暂停JVM中所有**应用线程**的工作，对于使用者，直观的感受就是“卡了一下”，STW的时间长短，是一个垃圾回收器质量好坏的关键
### Safe Point
JVM准备进行垃圾回收时，会将一个标志位设成True，其他各个线程每每执行到Safe Point处时，会查看这个标志位是否为True，如果为True，则将自己挂起（主动式中断），STW后，线程恢复，继续向下执行
### Safe Region
如果线程已经不工作了，例如状态为Sleep、Block等状态，这种情况，JVM会设置出一个Safe Region，如果线程打算进入Sleep、Block等状态，它们的引用信息就是暂时不变的，垃圾回收器直接统计是没有问题的，相反的，如果线程想跳出Safe Region（由Sleep、Block等状态恢复），则必须轮询，等待这次垃圾回收器工作完毕