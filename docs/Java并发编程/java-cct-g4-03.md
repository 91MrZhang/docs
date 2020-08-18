---
autoGroup-4: wait、notify
title: notify和notifyAll
---

### notify和notifyAll
``` java
package com.mrzhang.javalearn.bingfa.demo_03;

import java.util.concurrent.TimeUnit;

/**
 * wait、notify、notifyAll使用（三）
 * <p>
 * 1. notify一次随机叫醒一个线程，而notifyAll一次都叫醒，
 * 2. 如果要用notify，那就需要多调用几次
 * 3. notify之后线程得到的顺序不一定和start的顺序一致
 *
 * @author 91MrZhang on 2020/7/31
 */
public class WaitOrNotifyDemo03 {

    private final Object lock = new Object();

    public void m1() {
        synchronized (lock) {
            String threadName = Thread.currentThread().getName();
            System.out.println(threadName + "------>已经放弃锁");
            try {
                lock.wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println(threadName + "------>重新获得锁，执行完成");
        }
    }


    public static void main(String[] args) {
        WaitOrNotifyDemo03 wnd03 = new WaitOrNotifyDemo03();
        for (int i = 0; i < 10; i++) {
            new Thread(wnd03::m1, "线程" + i + "号").start();
        }
        //等待4秒
        try {
            TimeUnit.SECONDS.sleep(4);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        synchronized (wnd03.lock) {
            //随机唤醒一个
            wnd03.lock.notify();
            //全部唤醒
            //wnd01.lock.notifyAll();
        }
    }
}
```