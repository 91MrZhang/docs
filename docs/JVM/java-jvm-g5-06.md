---
autoGroup-5: 类加载子系统
title: 准备
---
### 准备 Prepare 部分
#### 实例变量和类变量
1. **类变量**指的是类中的static变量，不new就能用的变量
2. **实例变量**那种不带static的，new的时候才能用的变量

#### 初始化0值
**准备 Prepare**就是给**类变量**先申请出内存空间，并赋0值，final修饰的**类变量**直接赋值