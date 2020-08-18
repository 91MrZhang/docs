---
autoGroup-4: wait、notify
title: 案例
---

### 案例
``` java
package com.mrzhang.javalearn.bingfa.demo_03;

import java.util.concurrent.TimeUnit;

/**
 * wait、notify、notifyAll使用（五）
 * <p>
 * 综合使用一下wait、notify，注意观察执行顺序和执行时间
 *
 * @author 91MrZhang on 2020/7/31
 */
public class WaitOrNotifyDemo05 {

    private final Object lock = new Object();

    public void m1() {
        Long startTimeT = System.currentTimeMillis();
        synchronized (lock) {
            Long startTime = System.currentTimeMillis();
            System.out.println("m1准备工作3秒钟");
            try {
                TimeUnit.SECONDS.sleep(3);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println("m1已经工作了3s，准备休眠");
            try {
                lock.wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println("m1休眠结束，准备继续工作6秒钟");
            try {
                TimeUnit.SECONDS.sleep(6);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            Long endTime = System.currentTimeMillis();
            System.out.println("m1又工作了6s，准备唤醒m2");
            lock.notifyAll();
            System.out.println("m1在synchronized中一共耗时(s)----->" + (endTime - startTime) / 1000);
        }
        Long endTimeT = System.currentTimeMillis();
        System.out.println("m1在整个方法中 一共耗时(s)----->" + (endTimeT - startTimeT) / 1000);
    }

    public void m2() {
        Long startTimeT = System.currentTimeMillis();
        synchronized (lock) {
            Long startTime = System.currentTimeMillis();
            System.out.println("m2准备工作5秒钟");
            try {
                TimeUnit.SECONDS.sleep(5);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            lock.notifyAll();
            System.out.println("m2已经工作了5s，准备休眠");
            try {
                lock.wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println("m2休眠结束");
            Long endTime = System.currentTimeMillis();
            System.out.println("m2在synchronized中 一共耗时(s)----->" + (endTime - startTime) / 1000);
        }
        Long endTimeT = System.currentTimeMillis();
        System.out.println("m2在整个方法中 一共耗时(s)----->" + (endTimeT - startTimeT) / 1000);
    }

    public static void main(String[] args) {
        WaitOrNotifyDemo05 wnd05 = new WaitOrNotifyDemo05();
        new Thread(wnd05::m1, "线程1号").start();
        new Thread(wnd05::m2, "线程2号").start();
    }
}
```


控制台
```
m1准备工作3秒钟
m1已经工作了3s，准备休眠
m2准备工作5秒钟
m2已经工作了5s，准备休眠
m1休眠结束，准备继续工作6秒钟
m1又工作了6s，准备唤醒m2
m1在synchronized中一共耗时(s)----->14
m1在整个方法中 一共耗时(s)----->14
m2休眠结束
m2在synchronized中 一共耗时(s)----->11
m2在整个方法中 一共耗时(s)----->14
```