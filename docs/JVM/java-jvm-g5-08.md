---
autoGroup-5: 类加载子系统
title: 初始化
---
### 初始化 Initialization
#### jvm中的init、clinit方法
1. init是类实例构造器，即instance方法
2. clint是类构造器，主攻静态变量的方法
3. init和clint都是先加载父类，再加载自己的
4. clint在加载时，JVM需要加锁，只保证一个线程来加载
   
#### 为什么要先加载父类再加载自己的？
子类如果没有复写父类方法，那么没办法调用，所以必须先把父类搞定

比如说Object对象的toString，hashCode，wait等方法，一般情况是不会复写的

#### 执行特点
1. 静态变量只执行一次，有前后顺序
2. 代码块在实例的构造方法之前执行，有前后顺序
``` java
package com.mrzhang.javalearn.jvm.jzq;

/**
 * 类加载器测试（父类）
 *
 * @author 91MrZhang on 2020/8/13
 */
public class TestFather {

    public TestFather() {
        System.out.println("父类方法构造器");
    }

    {
        System.out.println("父类代码块");
    }

    static {
        System.out.println("父类静态代码块");
    }
}

```
``` java
package com.mrzhang.javalearn.jvm.jzq;

/**
 * 类加载器测试（子类）
 *
 * @author 91MrZhang on 2020/8/13
 */
public class TestSon extends TestFather {

    public TestSon() {
        System.out.println("子方法构造器");
    }

    {
        System.out.println("子类代码块");
    }

    static {
        System.out.println("子类静态代码块");
    }

}
```
``` java
package com.mrzhang.javalearn.jvm.jzq;

/**
 * 初始化顺序
 *
 * @author 91MrZhang on 2020/8/13
 */
public class TestDemo3 {

    public static void main(String[] args) {
        TestSon ts1 = new TestSon();
        System.out.println("---------------");
        TestSon ts2 = new TestSon();
        System.out.println("---------------");
    }

}

```

```
父类静态代码块
子类静态代码块
父类代码块
父类方法构造器
子类代码块
子方法构造器
---------------
父类代码块
父类方法构造器
子类代码块
子方法构造器
---------------

```