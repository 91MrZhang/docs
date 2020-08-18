---
autoGroup-3: 虚拟机栈
title: 方法返回地址
---
### Return Address
结合程序计数器使用

每一个栈帧中，最后如果有一个return之类的JVM命令，就是弹出当前帧，让程序计数器复位给前一个栈帧的方法执行处，让其继续向下执行

<img :src="$withBase('/assets/img/jvm/jvm-3-6-1.png')"  width="500" height="200">