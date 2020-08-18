---
autoGroup-9: 线程池
title: ThreadFactory
---

### ThreadFactory
``` java
package com.mrzhang.javalearn.bingfa.demo_06;

import com.google.common.util.concurrent.ThreadFactoryBuilder;
import org.apache.commons.lang3.concurrent.BasicThreadFactory;
import org.springframework.scheduling.concurrent.CustomizableThreadFactory;

import java.util.concurrent.ThreadFactory;

/**
 * ThreadFactory的几种实现
 * <p>
 * 使用线程池时，最好不用直接使用execute方法，而是使用线程工厂
 * <p>
 * 单独给线程起名字，发生问题时，后台分析时较方便
 *
 * @author 91MrZhang on 2020/8/17
 */
public class ThreadFactoryDemo01 {

    //guava包下的实现
    ThreadFactory guavaThreadFactory = new ThreadFactoryBuilder().setNameFormat("guavaThreadFactory-%d").build();

    //commons-lang3
    ThreadFactory basicThreadFactory = new BasicThreadFactory.Builder().namingPattern("basicThreadFactory--%d").build();

    //spring-core
    ThreadFactory springThreadFactory = new CustomizableThreadFactory("springThreadFactory--");

    public void m() {
        String tName = Thread.currentThread().getName();
        System.out.println("线程---->" + tName);
    }

    public static void main(String[] args) {
        ThreadFactoryDemo01 tf = new ThreadFactoryDemo01();
        for (int i = 0; i < 10; i++) {
            tf.guavaThreadFactory.newThread(tf::m).start();
            tf.basicThreadFactory.newThread(tf::m).start();
            tf.springThreadFactory.newThread(tf::m).start();
        }

    }
}

 ```