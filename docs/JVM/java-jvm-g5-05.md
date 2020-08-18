---
autoGroup-5: 类加载子系统
title: 验证
---
### 验证 Verify 部分
1. 类加载器加载阶段完成后，会得到一个byte文件
2. 验证部分的工作就是判断这个byte文件是不是合法，如果不合法则直接抛回



#### 验证内容
1. 文件格式
2. 元数据
3. 字节码
4. 符号引用

这里有一个彩蛋

.class文件用16进制查看的话，会发现它的魔数是CAFEBABE（魔数自行百度）

<img :src="$withBase('/assets/img/jvm/jvm-5-5-1.png')"  width="400" height="300">