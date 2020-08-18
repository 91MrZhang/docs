---
autoGroup-5: 其他线程方法
title: interrupt
---

### interrupt
``` java
package com.mrzhang.javalearn.bingfa.demo_03;

import java.util.concurrent.TimeUnit;

/**
 * interrupt基本使用（一）
 * <p>
 * 线程曾经的stop、suspend、resume方法已经被废弃了
 * stop等方法执行后，会立即释放锁，导致数据不安全，所以不推荐使用了
 * 目前是通过interrupt方法结合代码自己实现退出
 *
 * @author 91MrZhang on 2020/8/1
 */
public class InterruptDemo01 {

    public void m() {
        while (true) {
            System.out.println("让我们荡起双桨");
            try {
                TimeUnit.SECONDS.sleep(1);
            } catch (InterruptedException e) {
                System.out.println("收到打断信号,准备撤退");
                e.printStackTrace();
                break;
            }
        }
        System.out.println("结束循环");
    }

    public static void main(String[] args) {
        InterruptDemo01 itd = new InterruptDemo01();
        Thread t1 = new Thread(itd::m);
        t1.start();
        try {
            TimeUnit.SECONDS.sleep(3);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        t1.interrupt();
    }
}


```


