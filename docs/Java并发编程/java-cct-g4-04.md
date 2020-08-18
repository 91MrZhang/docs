---
autoGroup-4: wait、notify
title: 当前线程阻塞
---

### 当前线程阻塞
``` java
package com.mrzhang.javalearn.bingfa.demo_03;

/**
 * wait、notify、notifyAll使用（四）
 * <p>
 * wait方法是让当前线程阻塞，而不是什么父线程或者子线程
 *
 * @author 91MrZhang on 2020/7/31
 */
public class WaitOrNotifyDemo04 {

    private final Object lock = new Object();

    public boolean insideWait = true;


    public void m() {
        synchronized (lock) {
            System.out.println("放弃锁");
            try {
                lock.wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println("重新获得锁，执行完成");
        }
    }


    public static void main(String[] args) {
        //下面这两段执行的结果就不一样，所以要区分什么是当前线程
        WaitOrNotifyDemo04 wnd04 = new WaitOrNotifyDemo04();
        // type1
        //new Thread(wnd04::m, "线程1号").start();
        //System.out.println("main线程可以向下执行");

        // type2
        synchronized (wnd04.lock) {
            try {
                wnd04.lock.wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        System.out.println("main线程可以向下执行");
    }
}

```