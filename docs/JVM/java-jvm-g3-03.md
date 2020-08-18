---
autoGroup-3: 虚拟机栈
title: 局部变量表
---
### Local Variable Table
1. 每一个方法（栈帧）执行时的内部变量
2. 局部变量表是线程私有的

#### 查看变量表
``` java
package com.mrzhang.javalearn.jvm.zz;

/**
 * 局部变量表（一）
 *
 * @author 91MrZhang on 2020/8/12
 */
public class TestDemo2 {
    public int calculate(int pama) {
        int va = 6;
        int vb = 8;
        TestDemo1 td1 = new TestDemo1();
        return pama + va + vb;
    }
}

```

jclasslib查看一下calculate方法

<img :src="$withBase('/assets/img/jvm/jvm-3-3-1.png')"  width="900" height="400">


<img :src="$withBase('/assets/img/jvm/jvm-3-3-2.png')"  width="900" height="400">

1. 因为方法不是静态的，所以将this对象当作默认第一参数（index 0），这样你就可以调用this.xxx，算上方法参数，一共5个参数
2.  startPC代表从jvm指令多少行起开始生效，length代表作用长度，可以看到方法一共21行，startPC和length相加都是21的


#### slot 变量槽
局部变量表中，是以slot为单位存放的，32位的数据类型用一个slot（byte、short、char、boolean），64位（long、double）和引用型变量用两个slot

#### slot变量槽复用
如果一个变量在方法体中不是全作用域，那么超出作用域之后，再有新变量，新变量用这个旧变量的slot，不再新申请

jvm字节码也不会把这个旧变量算作一个参数，这种情况在for循环中的i++常见，节省空间
``` java
/**
 * 局部变量表（一）
 *
 * @author 91MrZhang on 2020/8/12
 */
public class TestDemo2 {
    public int calculate(int pama) {
        {
            int i = 1;
            System.out.println(i);
        }
        int j = 0;
        return j;
    }
}

```
<img :src="$withBase('/assets/img/jvm/jvm-3-3-3.png')"  width="900" height="400">


<img :src="$withBase('/assets/img/jvm/jvm-3-3-4.png')"  width="900" height="400">