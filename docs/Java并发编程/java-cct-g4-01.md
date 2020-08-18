---
autoGroup-4: wait、notify
title: 基本概念
---
### 基本概念
1. wait和notify配套用时，要保证是同一个对象被synchronized了
2. wait和notify一般要交互着使用，如果wait不指定时间，就必须有其他线程notify，没人叫醒它，它就会一直阻塞
3. wait瞬间就会把锁释放掉，等到收到notify信号时，再去重新竞争锁，而不是直接得到锁
4. 同理，如果notify其他线程了，自己并不会释放锁，如果自己这条线程一直阻塞，其他线程虽然醒了，也需要等自己执行完再去重新竞争锁
5. **wait方法是让当前线程阻塞，而不是什么父线程或者子线程**

``` java
package com.mrzhang.javalearn.bingfa.demo_03;

import java.util.concurrent.TimeUnit;

/**
 * wait、notify、notifyAll使用（一）
 * <p>
 * 0. wait和notify配套用时，要保证是同一个对象被synchronized了
 * 1. wait和notify一般要交互着使用，如果wait不指定时间，就必须有其他线程notify，没人叫醒它，它就会一直阻塞
 * 2. wait瞬间就会把锁释放掉，等到收到notify信号时，再去重新竞争锁，而不是直接得到锁
 * 3. 同理，如果notify其他线程了，自己并不会释放锁，如果自己这条线程一直阻塞，其他线程虽然醒了，也需要等自己执行完再去重新竞争锁
 * 4. wait方法是让当前线程阻塞，而不是什么父线程或者子线程
 *
 * @author 91MrZhang on 2020/7/31
 */
public class WaitOrNotifyDemo01 {

    private final Object lock = new Object();

    public void m1() {
        synchronized (lock) {
            System.out.println("m1放弃锁");
            try {
                lock.wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println("m1重新获得锁，执行完成");
        }
    }

    public void m2() {
        synchronized (lock) {
            System.out.println("m2获得锁");
            lock.notifyAll();
            System.out.println("m2虽然通知其他线程，但是自己一直不结束");
            try {
                TimeUnit.SECONDS.sleep(10);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println("m2睡了10秒，才结束，锁释放，其他线程竞争，得到锁");
        }
    }

    public static void main(String[] args) {
        WaitOrNotifyDemo01 wnd01 = new WaitOrNotifyDemo01();
        new Thread(wnd01::m1, "线程1号").start();
        new Thread(wnd01::m2, "线程2号").start();
    }
}


```