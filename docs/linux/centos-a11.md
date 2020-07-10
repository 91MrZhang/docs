---
title: wc
---
### wc
#### 返回行数
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

#### 统计当前文件夹下文件或文件夹的个数
文件个数
``` bash
ll -l |grep "^-"|wc -l
```
目录个数
``` bash
ll -l |grep "^d"|wc -l
```

``` bash
[root@xxxx zyttest]# ll
total 8
drwxr-xr-x 3 root root 4096 Apr 28 23:56 sourcefolder
drwxr-xr-x 2 root root 4096 Apr 28 23:56 tempfolder
-rw-r--r-- 1 root root    0 May 20 20:30 test.txt
[root@xxxx zyttest]# ll -l |grep "^-"|wc -l
1
[root@xxxx zyttest]# ll -l |grep "^d"|wc -l
2
[root@xxxx zyttest]# 
```
原理就是 grep后面的正则表达式 "^-"和 "^d"匹配了返回结果的第一位 ,

ll命令返回的结果就是这样，如果第一个字符是【d】,就是目录，如果第一个字符是【-】就是文件

