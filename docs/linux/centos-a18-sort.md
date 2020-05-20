---
title: sort
---
### sort 命令
#### 文件按时间排序显示
默认的
``` bash
[root@xxxx zyttest]# ll
total 12
-rw-r--r-- 1 root root    0 May 20 22:17 hello.txt
-rw-r--r-- 1 root root   14 May 20 22:21 sort.txt
drwxr-xr-x 3 root root 4096 Apr 28 23:56 sourcefolder
drwxr-xr-x 2 root root 4096 Apr 28 23:56 tempfolder
-rw-r--r-- 1 root root    0 May 20 20:30 test.txt
```
##### 正序
``` bash
ll | sort
```
``` bash
[root@xxxx zyttest]# ll | sort
drwxr-xr-x 2 root root 4096 Apr 28 23:56 tempfolder
drwxr-xr-x 3 root root 4096 Apr 28 23:56 sourcefolder
-rw-r--r-- 1 root root    0 May 20 20:30 test.txt
-rw-r--r-- 1 root root    0 May 20 22:17 hello.txt
-rw-r--r-- 1 root root   14 May 20 22:21 sort.txt
total 12
[root@xxxx zyttest]# 
```
##### 倒序
加一个-r 
``` bash
ll | sort -r
```
``` bash
[root@xxxx zyttest]# ll | sort -r
total 12
-rw-r--r-- 1 root root   14 May 20 22:21 sort.txt
-rw-r--r-- 1 root root    0 May 20 22:17 hello.txt
-rw-r--r-- 1 root root    0 May 20 20:30 test.txt
drwxr-xr-x 3 root root 4096 Apr 28 23:56 sourcefolder
drwxr-xr-x 2 root root 4096 Apr 28 23:56 tempfolder
[root@xxxx zyttest]# 
```

很明显total跑到上面来了

#### 文本内容排序
有这么一个txt文件
``` bash
sort.txt
1
4
5
2
4
3
6
```
##### 正序
``` bash
sort sort.txt
```
``` bash
[root@xxxx zyttest]# sort sort.txt 
1
2
3
4
4
5
6
```
##### 倒序
``` bash
sort -r sort.txt
```
``` bash
[root@xxxx zyttest]# sort -r sort.txt 
6
5
4
4
3
2
1
```