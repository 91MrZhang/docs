---
autoGroup-6: volatile
title: 基本概念
---

### 线程间的可见性
``` java
package com.mrzhang.javalearn.bingfa.demo_04;

import java.util.concurrent.TimeUnit;

/**
 * volatile基本使用(一）
 *
 * @author 91MrZhang on 2020/8/1
 */
public class VolatileDemo01 {

    // 看看这个关键字的效果
    private /*volatile*/ boolean isRunning = true;

    public void changeStatus() {
        isRunning = !isRunning;
        System.out.println("isRunning---->" + isRunning);
    }

    public void doWork() {
        System.out.println("工作开始");
        while (isRunning) {
        }
        System.out.println("工作结束");
    }

    public static void main(String[] args) {
        VolatileDemo01 vd01 = new VolatileDemo01();
        new Thread(vd01::doWork, "工作线程").start();

        // 2s之后改变状态
        try {
            TimeUnit.SECONDS.sleep(2);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        new Thread(vd01::changeStatus, "控制线程").start();
    }
}


```


