---
autoGroup-5: 类加载子系统
title: 双亲委派机制、沙箱机制
---
### 双亲委派机制、沙箱机制
再讲一下类加载过程
<img :src="$withBase('/assets/img/jvm/jvm-5-1-2.png')"  width="700" height="1200">

1. 一个类在加载时，JVM先不执行这个类当前的加载器，而是委托父类加载器加载，如果父类加载器自身还有父类加载器，那就继续递归
2. 到了根加载器之后，根加载器发现这个类不是自己管辖的（例如根加载器只加载rt.jar），就不管了，让它儿子去加载，它儿子发现也不在自己管辖范围内（例如它儿子只负责ext/xx.jar），就继续递归

#### 双亲委派的作用（一）
防止jre核心class被篡改

1. 自建一个String,同样在java.lang包下
``` java
package java.lang;

/**
 * 自建String类
 *
 * @author 91MrZhang on 2020/8/13
 */
public class String {
    public static void helloworld() {
        System.out.println("666");
    }
}

```
2. 调用
``` java
package com.mrzhang.javalearn.jvm.jzq;

/**
 * 类加载器测试（一）
 *
 * @author 91MrZhang on 2020/8/13
 */
public class TestDemo1 {

    public static void main(String[] args) {
        String.helloword();
    }
}

```
3. 结局
``` text
Error:(13, 15) java: 找不到符号
  符号:   方法 helloword()
  位置: 类 java.lang.String
```

这种情况就是String.class被加载时，Bootstrap ClassLoader会自动去rt.jar加载String.class，而不加载我们的，提高安全性

#### 双亲委派的作用（二）
保证一个class只加载一次
``` java
protected Class<?> loadClass(String name, boolean resolve)
            throws ClassNotFoundException
    {
        synchronized (getClassLoadingLock(name)) {
            // 首先检查这个classsh是否已经加载过了
            Class<?> c = findLoadedClass(name);
            if (c == null) {
                long t0 = System.nanoTime();
                try {
                    // c==null表示没有加载，如果有父类的加载器则让父类加载器加载
                    if (parent != null) {
                        c = parent.loadClass(name, false);
                    } else {
                        //如果父类的加载器为空 则说明递归到bootStrapClassloader了
                        //bootStrapClassloader比较特殊无法通过get获取
                        c = findBootstrapClassOrNull(name);
                    }
                } catch (ClassNotFoundException e) {}
                if (c == null) {
                    //如果bootstrapClassLoader 仍然没有加载过，则递归回来，尝试自己去加载class
                    long t1 = System.nanoTime();
                    c = findClass(name);
                    sun.misc.PerfCounter.getParentDelegationTime().addTime(t1 - t0);
                    sun.misc.PerfCounter.getFindClassTime().addElapsedTimeFrom(t1);
                    sun.misc.PerfCounter.getFindClasses().increment();
                }
            }
            if (resolve) {
                resolveClass(c);
            }
            return c;
        }
    }
```

#### 沙箱机制
正式因为这种类加载模式，可以保证自己类和类之间不冲突，一些NB的java框架都是有自己的类加载器的，来保证自己jar包内容的安全性