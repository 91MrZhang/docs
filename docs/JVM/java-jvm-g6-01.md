---
autoGroup-6: 方法区
title: 基本概念
---
### Method Area

#### 方法区包含什么
##### 类信息
1. 类型，class、interface、enum还是annotation
2. 完整名称，父类的完整名称，包名.类名，
3. 修饰符，public、abstract、final
4. 直接接口的有序列表
##### 运行时常量池
.class文件中的constant pool
##### 静态变量
static变量
##### 域信息
public，private，final等关键字 
##### 方法信息
1. 方法的变量、返回值
2. 方法的修饰符，public，sychronized等
3. 异常处理表
##### JIT代码缓存
执行引擎会通过字节码分析出哪些指令被经常调用，不由解释器执行，改为即时编译，将字节码指令直接翻译成机器指令，缓存在方法区中，供调用者直接执行

#### 垃圾回收
方法区在虚拟机规范中提到，是需要回收的