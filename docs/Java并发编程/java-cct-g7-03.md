---
autoGroup-7: 自旋锁
title: 排队锁
---

### 排队锁
这里给出一个排队锁的实现和使用Demo

好处：

    较于普通自旋锁，可以实现公平性

坏处:

    与普通自旋锁一样，自旋时需要CPU参与，消耗大

``` java
package com.mrzhang.javalearn.bingfa.demo_05;

import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * 排队锁的简单实现（一）
 *
 * @author 91MrZhang on 2020/8/15
 */
public class TicketLock {
    private AtomicInteger completeCtn = new AtomicInteger(0);
    private AtomicInteger totalCnt = new AtomicInteger(0);


    public void lock() {
        //先拿到自己的ticket号，并且通知前台总数+1
        Integer myTicket = totalCnt.getAndIncrement();
        //如果完成数量等于自己的ticket号，那就锁上
        while(myTicket != completeCtn.get()) {

        }

    }

    public void unlock() {
        completeCtn.incrementAndGet();
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
        TicketLock ticketLock = new TicketLock();
        new Thread(ticketLock::m, "线程1号").start();
        new Thread(ticketLock::m, "线程2号").start();
        new Thread(ticketLock::m, "线程3号").start();
    }
}
```