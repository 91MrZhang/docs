---
autoGroup-7: 堆
title: 栈上分配
---
### 逃逸分析
```java
//user的作用域超出了函数setUser的范围,是逃逸对象
//当函数结束调用时，不会自行销毁user
private User user;
public void setUser(){
    user = new User();
    user.setId(1);
    user.setName("blueStarWei");
}

//u只在函数内部生效，不是逃逸对象
//当函数调用结束，会自行销毁对象u
public void createUser(){
    User u = new User();
    u.setId(2);
    u.setName("JVM");
}
```

如果一个对象只在一个方法体中有效（线程私有），作用域被控制住了

那么JVM会优化分配策略，直接将对象分配在JVM虚拟机栈上，

这样直接在栈上分配和释放，效率更高

所以对象实例并不一定只存放在堆中


### 抄下其他人的demo
原文： https://www.cnblogs.com/BlueStarWei/p/9358757.html

``` java
package com.blueStarWei.templet;

public class AllotOnStack {

    public static void main(String[] args) {
        long start = System.currentTimeMillis();
        for (int i = 0; i < 100000000; i++) {
            alloc();
        }
        long end = System.currentTimeMillis();
        System.out.println(end - start);
    }

    private static void alloc() {
        User user = new User();
        user.setId(1);
        user.setName("blueStarWei");
    }
}
```
JVM把堆设置小一些，发现并没有发生GC，就说明没有在堆中分配

如果JVM参数改成下方的，则会产生大量GC

``` java
//不使用逃逸分析
-server -Xmx15m -Xms15m -XX:－DoEscapeAnalysis -XX:+PrintGC -XX:-UseTLAB -XX:+EliminateAllocations
```