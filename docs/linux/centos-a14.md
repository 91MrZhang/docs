---
title: diff
---
### diff 文本
公司除了做SAAS业务外，还做很多私有自部署客户

自部署的客户如果每次要修改配置文件的话，我们都要cp一个备份出来

这样的话，如果出现了什么问题，第一时间先diff看看配置文件，就能判断出个一二来

``` bash
 diff xx-config.properties  xx-config.properties20190911
```

这样出现问题的话，先diff一下配置文件，即可先看到都改了什么东西
### diff 文件夹
一般打包个war文件到服务器上的时候，经常缺个class，或者哪个class被改动了，diff文件夹就比较合适了

我们先看看diff之前的情况

``` bash
[root@xxxxx zyttest]# ll
total 8
drwxr-xr-x 3 root root 4096 Apr 28 23:56 sourcefolder
drwxr-xr-x 2 root root 4096 Apr 28 23:56 tempfolder
[root@xxxxx zyttest]# cd sourcefolder/
[root@xxxxx sourcefolder]# ll
total 8
drwxr-xr-x 2 root root 4096 Apr 28 23:55 happ
-rw-r--r-- 1 root root    3 Apr 28 23:56 mm.txt
[root@xxxxx sourcefolder]# cd ..
[root@xxxxx zyttest]# cd tempfolder/
[root@xxxxx tempfolder]# ll
total 0
-rw-r--r-- 1 root root 0 Apr 28 23:56 mm.txt
[root@xxxxx tempfolder]# 
```
``` bash
diff sourcefolder tempfolder
```

结果
``` bash
[root@xxxxx zyttest]# diff sourcefolder tempfolder
Only in sourcefolder: happ
diff sourcefolder/mm.txt tempfolder/mm.txt
1d0
< ww
```

### diff 补丁
这个我们不常用哈。就不介绍了