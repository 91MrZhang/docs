---
autoGroup-3: synchronized
title: 锁定对象的独立性
---

::: tip 

下面这段Demo证明了锁定this对象和锁定自定义对象是独立不冲突的

:::


``` java
package com.mrzhang.javalearn.bingfa.demo_02;

import java.util.concurrent.TimeUnit;

/**
 * Synchronized基本使用（五）
 * <p>
 * 1. 两个线程锁一个对象了，就排队等着
 * 2. 没锁同一个对象就各自独立，什么都没锁就更独立了
 *
 * @author 91MrZhang on 2020/7/31
 */
public class SynchronizedDemo05 {

    private final Object lock = new Object();

    public synchronized void m1() {
        System.out.println("m1准备工作3秒");
        try {
            TimeUnit.SECONDS.sleep(3);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("m1已经工作完3秒");
    }

    public synchronized void m2() {
        System.out.println("m2准备工作5秒");
        try {
            TimeUnit.SECONDS.sleep(5);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("m2已经工作完5秒");
    }

    public void m3() {
        synchronized (lock) {
            System.out.println("m3准备工作4秒");
            try {
                TimeUnit.SECONDS.sleep(4);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println("m3已经工作完4秒");
        }
    }

    public void m4() {
        System.out.println("m4准备工作1秒");
        try {
            TimeUnit.SECONDS.sleep(1);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("m4已经工作完1秒");

    }

    public static void main(String[] args) {
        SynchronizedDemo05 sd05 = new SynchronizedDemo05();
        new Thread(sd05::m1, "线程1号").start();
        new Thread(sd05::m2, "线程2号").start();
        new Thread(sd05::m3, "线程3号").start();
        new Thread(sd05::m4, "线程4号").start();
    }
}

```