---
autoGroup-6: volatile
title: 禁止指令重排
---

### 禁止指令重排
volatile主要体现指令重排，而非线程可见性
``` java
instance = new VolatileDemo03();
```
这个过程，实际上在JVM中，是分两步的，

第一步： 是先分配内存，初始化类变量和实例变量

第二步： 是修改引用指向

但是CPU有时会把第一步和第二步的执行顺序颠倒，先修改引用，再去安排实例实例化

如果实例化还没OK，这很可能拿到引用就是空指针

所以需要严格按顺序执行，禁止指令重排就是这个作用


``` java
package com.mrzhang.javalearn.bingfa.demo_04;

/**
 * volatile基本使用(三）
 * <p>
 * 双重检查的单例模式，volatile主要体现指令重排，而非线程可见性
 * DCL,Double Check Lock 单例
 *
 * @author 91MrZhang on 2020/8/1
 */
public class VolatileDemo03 {

    private volatile static VolatileDemo03 instance = null;

    private VolatileDemo03() {
    }

    /**
     * 单例创建
     * synchronized能保证原子性，也就说明保证了可见性
     * volatile这里的作用就是禁止指令重排，关于指令重排需要自行百度一手
     *
     * @return VolatileDemo03
     */
    public static VolatileDemo03 getInstance() {
        if (instance == null) {
            synchronized (VolatileDemo03.class) {
                if (instance == null) {
                    instance = new VolatileDemo03();
                }
            }
        }
        return instance;
    }
}

```


