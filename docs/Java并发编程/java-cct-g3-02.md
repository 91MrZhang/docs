---
autoGroup-3: synchronized
title: 简单的死锁
---

::: tip 

这里提供一个synchronized实现简单死锁的Demo

:::

方法m1执行时，锁定自己，调用方法m2

方法m2执行时，锁定自己，调用方法m1

互相等待


``` java
package com.mrzhang.javalearn.bingfa.demo_02;

/**
 * Synchronized基本使用（四）
 * <p>
 * 一个简单的死锁
 *
 * @author 91MrZhang on 2020/7/31
 */
public class SynchronizedDemo04 {

    private final Object lock1 = new Object();
    private final Object lock2 = new Object();

    public void m1() {
        synchronized (lock2) {
            System.out.println("m1准备工作");
            try {
                Thread.sleep(2000);
                m2();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println("m1结束工作");
        }
    }

    public void m2() {
        synchronized (lock1) {
            System.out.println("m2准备工作");
            try {
                Thread.sleep(4000);
                m1();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println("m2结束工作");
        }
    }

    public static void main(String[] args) {
        SynchronizedDemo04 sd04 = new SynchronizedDemo04();
        new Thread(sd04::m1, "线程1号").start();
        new Thread(sd04::m2, "线程2号").start();
    }
}

```