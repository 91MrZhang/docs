---
autoGroup-4: wait、notify
title: wait指定时间
---

### wait指定时间
``` java
package com.mrzhang.javalearn.bingfa.demo_03;

/**
 * wait、notify、notifyAll使用（二）
 * <p>
 * 1. wait之后无人唤醒
 * 2. wait指定时间自醒
 *
 * @author 91MrZhang on 2020/7/31
 */
public class WaitOrNotifyDemo02 {

    private final Object lock = new Object();

    public void m1() {
        synchronized (lock) {
            System.out.println("m1放弃锁");
            try {
                lock.wait();
                //lock.wait(2000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println("m1重新获得锁，执行完成");
        }
    }

    public void m2() {
        synchronized (lock) {
            System.out.println("m2获得锁并且执行完成");
        }
    }

    public static void main(String[] args) {
        WaitOrNotifyDemo02 wnd02 = new WaitOrNotifyDemo02();
        new Thread(wnd02::m1, "线程1号").start();
        new Thread(wnd02::m2, "线程2号").start();
    }
}


```