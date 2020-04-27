---
title: wc
---

### 统计文件个数
一般wc -l用得较多，主要统计返回结果行数，例如查有几个文件
``` bash
ll |wc -l
```
``` bash
[root@xxxx zyttest]# ll
total 0
-rw-r--r-- 1 root root 0 Apr 27 21:44 fb.txt
-rw-r--r-- 1 root root 0 Apr 27 21:44 fff.txt
-rw-r--r-- 1 root root 0 Apr 27 21:45 fk.txt
-rw-r--r-- 1 root root 0 Apr 27 21:44 kkk.txt
[root@xxxx zyttest]# ll |wc -l
5
[root@xxxx zyttest]# 
```
因为total也算一行，所以5-1=4 一共是4个文件