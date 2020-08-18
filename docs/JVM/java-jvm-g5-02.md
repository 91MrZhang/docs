---
autoGroup-5: 类加载子系统
title: ClassLoader
---
### Bootstrap ClassLoader、Extension ClassLoader、System ClassLoader(Application ClassLoader)
1. Bootstrap ClassLoader （启动类加载器），它是基于C/C++写的，在Java程序中无法调用，它的工作是负责加载JVM运行时必要的类，如jre/lib/rt.jar
2. Extension ClassLoader （扩展类加载器），加载jre/lib/ext目录下的类
3. Application ClassLoader（应用程序加载器），加载环境变量中classpath下面的类，如果你写的代码不特殊指定ClassLoader，那么也用这个
<img :src="$withBase('/assets/img/jvm/jvm-5-2-1.png')"  width="700" height="300">


#### 你可以简单的理解为一种继承关系
``` java
package com.mrzhang.javalearn.jvm.jzq;

import jdk.nashorn.tools.Shell;

/**
 * 类加载器测试（一）
 *
 * @author 91MrZhang on 2020/8/13
 */
public class TestDemo1 {

    public static void main(String[] args) {
        //String.class 是rt.jar包下的类
        System.out.println("String.class 加载器---->" + String.class.getClassLoader());
        //Shell.class 是ext/nashorn.jar下的类
        System.out.println("Shell.class 加载器---->" + Shell.class.getClassLoader());
        System.out.println("Shell.class 父类加载器---->" + Shell.class.getClassLoader().getParent());
        //TestDemo1.class 是当前类
        System.out.println("TestDemo1.class 加载器---->" + TestDemo1.class.getClassLoader());
        System.out.println("TestDemo1.class 父类加载器---->" + TestDemo1.class.getClassLoader().getParent());
        System.out.println("TestDemo1.class 祖父类加载器---->" + TestDemo1.class.getClassLoader().getParent().getParent());
        //Bootstrap ClassLoader不允许java调用，所以显示NULL
    }
}

```
控制台
```
String.class 加载器---->null
Shell.class 加载器---->sun.misc.Launcher$ExtClassLoader@45ee12a7
Shell.class 父类加载器---->null
TestDemo1.class 加载器---->sun.misc.Launcher$AppClassLoader@18b4aac2
TestDemo1.class 父类加载器---->sun.misc.Launcher$ExtClassLoader@45ee12a7
TestDemo1.class 祖父类加载器---->null

Process finished with exit code 0

```

