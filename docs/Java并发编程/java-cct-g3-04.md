---
autoGroup-3: synchronized
title: 可重入锁（递归锁）
---

::: tip 

方法A、方法B都是锁定同一对象的话

方法A调用方法B时，不需要重新申请

这里不详细介绍，后续章节介绍

:::


``` java
package com.mrzhang.javalearn.bingfa.demo_02;

import java.util.concurrent.TimeUnit;

/**
 * Synchronized基本使用（六）
 * <p>
 * Synchronized可重入锁
 *
 * @author 91MrZhang on 2020/7/31
 */
public class SynchronizedDemo06 {

    private final Object lock = new Object();

    public synchronized void m1() {
        System.out.println("m1准备工作3秒");
        m2();
        try {
            TimeUnit.SECONDS.sleep(3);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("m1已经工作完3秒");
    }

    public synchronized void m2() {
        String tname = Thread.currentThread().getName();
        System.out.println(tname + "->m2准备工作5秒");
        try {
            TimeUnit.SECONDS.sleep(5);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(tname + "->m2已经工作完5秒");
    }


    public static void main(String[] args) {
        SynchronizedDemo06 sd05 = new SynchronizedDemo06();
        new Thread(sd05::m1, "线程1号").start();
        try {
            TimeUnit.SECONDS.sleep(2);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        new Thread(sd05::m2, "线程2号").start();
    }
}


```