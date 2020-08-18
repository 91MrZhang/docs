---
autoGroup-8: 线程池
title: newScheduledThreadPool
---

### newScheduledThreadPool
``` java
package com.mrzhang.javalearn.bingfa.demo_06;

import com.google.common.util.concurrent.ThreadFactoryBuilder;

import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.TimeUnit;

/**
 * newScheduledThreadPool
 * 类似于过去的Timer类，优势在于可以多线程定时执行
 *
 * @author 91MrZhang on 2020/8/17
 */
public class PoolDemo04 {

    static ThreadFactory guavaThreadFactory = new ThreadFactoryBuilder().setNameFormat("guavaThreadFactory--%d").build();

    public static void m() {
        String tName = Thread.currentThread().getName();
        System.out.println("线程---->" + tName);
    }


    public static void main(String[] args) {
        ScheduledExecutorService threadPool = Executors.newScheduledThreadPool(4,guavaThreadFactory);
        for (int i = 0; i < 10; i++) {
            threadPool.scheduleAtFixedRate(PoolDemo04::m,1,3,TimeUnit.SECONDS);
        }
    }
}
 ```