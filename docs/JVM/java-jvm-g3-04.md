---
autoGroup-3: 虚拟机栈
title: 操作数栈
---
### Operrand Stack
操作数栈的功能参考下面的流程解释
``` java
package com.mrzhang.javalearn.jvm.zz;

/**
 * 操作数栈（一）
 *
 * @author 91MrZhang on 2020/8/12
 */
public class TestDemo3 {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        int d = 30;
        int c = a + (b * d) ;
    }
}
```
<img :src="$withBase('/assets/img/jvm/jvm-3-4-1.png')"  width="400" height="300">

1. bipush 10 : 将10压入操作数栈
2. istore_1  ： 将操作数栈中的第一个数赋值给1号变量
3. bipush 20 : 将20压入操作数栈
4. istore_2  ： 将操作数栈中的第一个数赋值给2号变量
5. bipush 30 : 将30压入操作数栈
6. istore_3  ： 将操作数栈中的第一个数赋值给3号变量
7. iload_1   ：将1号变量压入操作数栈
8. iload_2   ：将2号变量压入操作数栈
9. iload_3   ：将3号变量压入操作数栈
10. **此时操作数栈中有三个值，即10、20、30**
11. imul     ：最后入栈的和倒数第二个入栈的相乘，得到的值回栈
12. iadd     ：回栈的值和第一个进栈的值相加
13. istore_4  ： 将操作数栈中的第一个数赋值给4号变量

所以可以理解为，这次操作的栈深度为3,反编译一下
``` bash
javap -v TestDemo3.class
```

``` bash      
···
stack=3, locals=5, args_size=1
···

```
确实如此


#### 栈深度占位
和slot相似，32bit类型的内容占1个栈空间，64bit的占2个栈空间


### 栈顶缓存技术 Top-of-StackCashing
前面提到，基于寄存器的JVM效果更快更好，

目前Hotspot虚拟机也将操作数栈的快速变换内容转移到了寄存中，直接在寄存器计算