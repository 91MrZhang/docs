---
autoGroup-8: synchronized锁优化
title: 锁消除、锁粗化
---

### 锁消除
StringBuffer的append方法是线程安全的，但是大多出场合，都是在局部变量中使用

所以在代码执行时，这个append是不需要加锁的，执行引擎会选择性消除锁

但是并不是所有StringBuffer都是这样的，要注意作用域，和逃逸分析这两个概念

### 锁粗化
``` java
for(int i=0;i<size;i++){
    synchronized(lock){
    }
}
```
这段代码，执行引擎在执行时，也会帮你优化成
``` java
synchronized(lock){
    for(int i=0;i<size;i++){
    }
}
 ```