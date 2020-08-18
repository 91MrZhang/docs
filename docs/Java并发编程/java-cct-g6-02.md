---
autoGroup-6: volatile
title: volatile、sychronized区别
---

### volatile、sychronized区别
volatile不保证原子性

``` java
package com.mrzhang.javalearn.bingfa.demo_04;

import java.util.concurrent.TimeUnit;

/**
 * volatile基本使用(二）
 * <p>
 * 1. volatile虽然能保证读到的都是最新的，可是多个线程++后的值可能都是相同的，再同时写入就发生问题了
 * 2. volatile只保证读，synchronized读写均保证
 * 3. volatile效率相对于synchronized更高一些，并且volatile不阻塞
 *
 * @author 91MrZhang on 2020/8/1
 */
public class VolatileDemo02 {

    private volatile Integer count = 0;

    public void countIncrease() {
        for (int i = 0; i < 5000; i++) {
            count++;
        }
        String threadName = Thread.currentThread().getName();
        System.out.println(threadName + "--->已经结束");
    }


    public static void main(String[] args) {
        VolatileDemo02 vd02 = new VolatileDemo02();
        for (int i = 0; i < 10; i++) {
            new Thread(vd02::countIncrease, "线程" + i).start();
        }
        //主线程等待子线程结束的方式有很多，这里先最简单的sleep+线程打印判断
        try {
            TimeUnit.SECONDS.sleep(3);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        //理论上count应该=5000*10，电脑性能越好，这个数值越低
        System.out.println(vd02.count);
    }
}

```


