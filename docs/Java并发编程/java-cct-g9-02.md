---
autoGroup-8: 线程池
title: newSingleThreadExecutor
---

### newSingleThreadExecutor
``` java
package com.mrzhang.javalearn.bingfa.demo_06;

import com.google.common.util.concurrent.ThreadFactoryBuilder;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.ThreadFactory;

/**
 * newSingleThreadExecutor
 *
 * @author 91MrZhang on 2020/8/17
 */
public class PoolDemo01 {


    static ThreadFactory guavaThreadFactory = new ThreadFactoryBuilder().setNameFormat("guavaThreadFactory--%d").build();


    public static void m() {
        String tName = Thread.currentThread().getName();
        System.out.println("线程---->" + tName);
    }

    public static void main(String[] args) {
        ExecutorService threadPool = Executors.newSingleThreadExecutor(guavaThreadFactory);
        for (int i = 0; i < 10; i++) {
            threadPool.execute(PoolDemo01::m);
        }

        //threadPool.shutdown();
    }
}

 ```