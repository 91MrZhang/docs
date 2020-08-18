---
autoGroup-7: 自旋锁
title: 简单自旋锁
---

### 简单自旋锁
这里给出一个自旋锁的实现和使用Demo

因为这种自旋，需要计算机底层帮助实现CAS操作，性能消耗大

``` java
package com.mrzhang.javalearn.bingfa.demo_05;

import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicReference;

/**
 * 自旋锁简单实现(一)
 *
 * @author 91MrZhang on 2020/8/15
 */
public class SpinLock {

    // Atomic系列中的AtomicReference，基于CAS原理实现的
    private AtomicReference<Thread> owner = new AtomicReference<Thread>();

    public void lock() {
        Thread t = Thread.currentThread();
        System.out.println(t.getName() + "尝试lock");
        //owner.compareAndSet：
        // 1.如果在写入时owner中的引用是null，则set当前线程，并返回true
        // 2.如果返回false，这一直while，达到自旋效果
        while (!owner.compareAndSet(null, t)) {
        }
    }

    public void unlock() {
        owner.set(null);
    }

    // 测试方法
    public void m() {
        String tName = Thread.currentThread().getName();
        lock();
        for (int i = 0; i < 10; i++) {
            try {
                TimeUnit.SECONDS.sleep(1);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println(tName + "->心跳第" + (i + 1) + "次");
        }
        unlock();
    }

    public static void main(String[] args) {
        SpinLock spinLock = new SpinLock();
        new Thread(spinLock::m, "线程1号").start();
        new Thread(spinLock::m, "线程2号").start();
    }
}
```