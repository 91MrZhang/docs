---
autoGroup-3: 虚拟机栈
title: 栈帧
---
### Stack Frame
线程的每一个方法都对应一个栈帧

#### 栈帧的入栈出栈流程

``` java
package com.mrzhang.javalearn.jvm.zz;
/**
 * 栈帧模拟（一）
 *
 * @author 91MrZhang on 2020/8/12
 */
public class TestDemo1 {
    public void calculate() {
        int va = 6;
        int vb = 8;
        int vc = add(va, vb);
        int vd = minus(va, vb);
    }

    public int add(int a, int b) {
        return a + b;
    }

    public int minus(int a, int b) {
        return a - b;
    }

    public static void main(String[] args) {
        TestDemo1 td2 = new TestDemo1();
        td2.calculate();
    }
}
```

calculate在栈中的表现表现为下图（粗略来说，JVM实现时会比这个复杂一些）
<img :src="$withBase('/assets/img/jvm/jvm-3-2-1.png')"  width="900" height="300">

1. calculate进栈
2. add进栈，执行完出栈
3. minus进栈，执行完出栈
4. calculate出栈

#### 栈帧的内部结构
<img :src="$withBase('/assets/img/jvm/jvm-3-2-2.png')"  width="900" height="150">

1. 局部变量表
2. 操作数栈
3. 动态链接
4. 方法返回地址