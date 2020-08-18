---
autoGroup-5: 其他线程方法
title: join自锁
---

### join自锁
如果你想从一个公司撤退，可以用这个方案
``` java
package com.mrzhang.javalearn.bingfa.demo_03;

/**
 * join基本使用（二）
 * <p>
 * join自己把自己锁了,实际上就是自己wait自己
 *
 * @author 91MrZhang on 2020/8/1
 */
public class JoinDemo02 {

    public static void main(String[] args) {
        try {
            Thread.currentThread().join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("不会执行结束");
    }
}
```


