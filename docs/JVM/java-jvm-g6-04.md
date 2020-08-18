---
autoGroup-6: 方法区
title: 静态变量在堆中
---
### 静态变量在堆中
JDK1.6和1.8在这里不同，在此以1.8为例

``` java
package com.mrzhang.javalearn.jvm.ffq;

/**
 * 方法区测试(一）
 *
 * -Xms50m -Xmx50m -XX:MetaspaceSize=50M -XX:MaxMetaspaceSize=50M
 * @author 91MrZhang on 2020/8/13
 */
public class TestDemo1 {

    private static byte[] _100M = new byte[100 * 1024 * 1024 ];

    public static void main(String[] args) {
        System.out.println("ok");
    }
}

```

```
java.lang.OutOfMemoryError: Java heap space
	at com.mrzhang.javalearn.jvm.ffq.TestDemo1.<clinit>(TestDemo1.java:11)
Exception in thread "main" 
Process finished with exit code 1
```