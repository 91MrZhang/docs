---
autoGroup-5: 其他线程方法
title: yield
---

### yield
``` java
package com.mrzhang.javalearn.bingfa.demo_03;

/**
 * yield基本使用(一）
 * <p>
 * 1. 可暂停当前线程执行，允许其他线程执行，该线程仍可以运行，不转为阻塞状态，此时，系统选择其他相同或更高优先级线程执行，若没有，则该线程继续执行
 * 2. 但是JDK官方注释中说，yield有的时候不一定好使
 *
 * @author 91MrZhang on 2020/8/1
 */
public class YieldDemo01 {

    public void m() {
        String threadName = Thread.currentThread().getName();
        System.out.println(threadName + " 开始工作");
        for (int i = 0; i < 30; i++) {
            if (i == 15) {
                System.out.println(threadName + " 开始yield");
                Thread.yield();
            }

            System.out.println(threadName + " 开始输出--->" + i);
        }
        System.out.println(threadName + " 结束工作");
    }

    public static void main(String[] args) {
        YieldDemo01 yd01 = new YieldDemo01();
        new Thread(yd01::m, "线程1").start();
        new Thread(yd01::m, "线程2").start();
    }
}

```


