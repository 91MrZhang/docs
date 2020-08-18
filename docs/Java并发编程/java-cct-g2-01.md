---
autoGroup-2: 线程实现
title: 创建线程
---

::: tip 

Java提供的Runnable接口中的run方法是启动线程的核心

Thread类中包含了丰富的线程操作方法，不过它也是通过实现Runnable接口来创建线程的

:::

### 1.继承Thread类，重写run方法
``` java
package com.mrzhang.javalearn.bingfa.demo_01;

/**
 * 线程创建方式(一)
 * <p>
 * 继承Thread类，重写run方法
 * java是单继承的，这样的话就没办法继承其他父类
 *
 * @author 91MrZhang on 2020/7/31
 */
public class ThreadCreator1 extends Thread {
    @Override
    public void run() {
        System.out.println("线程---> " + Thread.currentThread().getName() + " 启动");
    }

    public static void main(String[] args) {
        for (int i = 0; i < 10; i++) {
            ThreadCreator1 tco = new ThreadCreator1();
            tco.setName(i + " 号");
            tco.start();
        }
    }
}
```

### 2.实现Runnable接口中的run方法，传递给Thread类管理
``` java
/**
 * 线程创建方式(二)
 * <p>
 * 实现Runnable接口中的run方法，传递给Thread类管理
 *
 * @author 91MrZhang on 2020/7/31
 */
public class ThreadCreator2 implements Runnable {


    @Override
    public void run() {
        System.out.println("线程---> " + Thread.currentThread().getName() + " 启动");
    }

    public static void main(String[] args) {
        ThreadCreator2 tct = new ThreadCreator2();
        for (int i = 0; i < 10; i++) {
            new Thread(tct, i + "号").start();
        }
    }
}
```

### 3.实现Callable接口中的call方法
``` java
package com.mrzhang.javalearn.bingfa.demo_01;

import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.FutureTask;

/**
 * 线程创建方式(三)
 * <p>
 * 实现Callable接口中的call方法
 * 这种起线程的优势在于它可以有返回值，还能抛出异常
 * 不过需要配合Future或FutureTask
 *
 * @author 91MrZhang on 2020/7/31
 */
public class ThreadCreator3 implements Callable<Long> {


    @Override
    public Long call() throws Exception {
        System.out.println("线程---> " + Thread.currentThread().getName() + " 启动");
        Thread.sleep(5000);
        //int i = 1 / 0;
        System.out.println("线程---> " + Thread.currentThread().getName() + " 结束");
        return System.currentTimeMillis();
    }


    public static void main(String[] args) {
        ThreadCreator3 tct = new ThreadCreator3();
        FutureTask<Long> futureTask = new FutureTask<>(tct);
        new Thread(futureTask, "Callable").start();
        try {
            System.out.println(futureTask.get());
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }
    }
}
```