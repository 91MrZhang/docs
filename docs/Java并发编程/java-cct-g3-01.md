---
autoGroup-3: synchronized
title: 基本概念
---

::: tip 

Java提供的Runnable接口中的run方法是启动线程的核心

Thread类中包含了丰富的线程操作方法，不过它也是通过实现Runnable接口来创建线程的

:::

### synchronized是锁定对象，而不是锁定代码的
1. 普通方法锁定this对象
2. 静态方法锁定类对象
3. 代码快锁定指定对象

锁定的对象就是一把锁头，想进屋子里执行代码，就先搞定锁
`` 

``` java
package com.mrzhang.javalearn.bingfa.demo_02;

/**
 * Synchronized基本使用（一）
 * <p>
 * synchronized并不锁定方法，而是锁定对象
 * 默认是锁定this对象，静态方法默认锁定.class
 *
 * @author 91MrZhang on 2020/7/31
 */
public class SynchronizedDemo01 {

    public /*synchronized*/ void printMsg(String threadName) {
        System.out.println(threadName + "开始执行");
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(threadName + "执行完毕");
    }

    public static void main(String[] args) {
        SynchronizedDemo01 sd01 = new SynchronizedDemo01();
        for (int i = 0; i < 5; i++) {
            new Thread(() -> sd01.printMsg(Thread.currentThread().getName()), "线程" + i).start();
        }
    }
}
```


### 锁住自定义对象时，不要切换引用地址
``` java
package com.mrzhang.javalearn.bingfa.demo_02;

/**
 * Synchronized基本使用（二）
 * <p>
 * 1. 手动锁定new出来的lock对象，所以锁是在堆里的，代码规范，锁对象都是需要加final的，如果Lock指向一个新new的对象的话，那么lock会失效
 * 2. 在方法中某一个部分加synchronized，比给整个方法都加synchronized效率要高一些
 *
 * @author 91MrZhang on 2020/7/31
 */
public class SynchronizedDemo02 {

    private /*final*/ Object lock = new Object();

    public void printMsg(String threadName) {
        synchronized (lock) {
            System.out.println(threadName + "开始执行");
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println(threadName + "执行完毕");
        }
    }

    public static void main(String[] args) {
        SynchronizedDemo02 sd01 = new SynchronizedDemo02();
        for (int i = 0; i < 5; i++) {
            new Thread(() -> {
                //锁失效的情况
                //sd01.lock = new Object();
                sd01.printMsg(Thread.currentThread().getName());
            },"线程" + i).start();
        }
    }
}
```

这里需要提到Java对象的内存模型（Markword中的信息），具体细节不在这里讲述了


### 静态方法不能sychronized this对象
``` java
/**
 * Synchronized基本使用（三）
 * <p>
 * 静态方法加锁，就不能用this了，需要用.class
 *
 * @author 91MrZhang on 2020/7/31
 */
public class SynchronizedDemo03 {

    public static void printMsg(String msg) {
        // 如果是this，编译器直接不通过
        // synchronized (this) {
        synchronized (SynchronizedDemo03.class) {
            System.out.println("嘿嘿嘿");
        }
    }
}

```