---
title: tree
---
### tree 命令
tree命令在windows上有，

linux上可能需要额外yum一下

如果你的客户或者同事需要部署个什么东西，但是不知道目录结构，哪个该放在哪里

那么你tree一下，复制粘贴过去，就比较有逼格了,也省着解释了

``` bash
[root@xxxx zyttest]# ll
total 8
drwxr-xr-x 3 root root 4096 Apr 28 23:56 sourcefolder
drwxr-xr-x 2 root root 4096 Apr 28 23:56 tempfolder
-rw-r--r-- 1 root root    0 May 20 20:30 test.txt
[root@xxxx zyttest]# tree
.
├── sourcefolder
│   ├── happ
│   └── mm.txt
├── tempfolder
│   └── mm.txt
└── test.txt

3 directories, 3 files
[root@xxxx zyttest]# 
```

