---
autoGroup-5: 类加载子系统
title: 自定义类加载器
---
### 自定义类加载器

#### 需要自定义类加载器的场景
1. 隔离加载类
2. 为加密的.class文件在加载时解密

#### 继承ClassLoader
主要是将findClass方法实现
``` java
package com.mrzhang.javalearn.jvm.jzq;

/**
 * 自定义加载器
 *
 * @author 91MrZhang on 2020/8/13
 */
public class CusClassLoader extends ClassLoader{
    @Override
    protected Class<?> findClass(String name) throws ClassNotFoundException {
        // ......好好写一写
        return super.findClass(name);
    }
}

```