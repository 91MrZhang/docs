---
title: 软连接
---
### 软连接
::: tip
软连接我觉得是一个比较妙的命令，windows的快捷方式就不如它的效果好

例如有的时候程序中写死了文件夹存储的路径，

而我们在服务器上有时候又需要更换一下这个路径

软连接就派上用场了


:::
### 创建一个软连接
我们先看看创建之前的效果
``` bash
[root@xxxxx zyttest]# mkdir -p sourcefolder/sourcefolderchild
[root@xxxxx zyttest]# ll
total 4
drwxr-xr-x 3 root root 4096 Apr 28 23:14 sourcefolder
```

将连接，连接到一个不存在的文件夹上
``` bash
ln -s sourcefolder test1
```

看看效果
``` bash
[root@xxxxx zyttest]# ll
total 4
drwxr-xr-x 3 root root 4096 Apr 28 23:19 sourcefolder
[root@xxxxx zyttest]# ln -s sourcefolder test1
[root@xxxxx zyttest]# ll
total 4
drwxr-xr-x 3 root root 4096 Apr 28 23:19 sourcefolder
lrwxrwxrwx 1 root root   12 Apr 28 23:20 test1 -> sourcefolder
[root@xxxxx zyttest]# cd test1/
[root@xxxxx test1]# ll
total 4
drwxr-xr-x 2 root root 4096 Apr 28 23:18 sourcefolderchild
[root@xxxxx test1]# 
```
很明显，以后从test1进入，

也可以看到sourcefolder里一样的内容了

这样我们就可以在配置文件中，直接将之前不方便的路径指向/zyttest/test1即可

### 修改一个软连接
``` bash
ln -snf tempfolder test1
```

看看效果
``` bash
[root@xxxxx zyttest]# ll
total 8
drwxr-xr-x 3 root root 4096 Apr 28 23:19 sourcefolder
drwxr-xr-x 2 root root 4096 Apr 28 23:23 tempfolder
lrwxrwxrwx 1 root root   12 Apr 28 23:20 test1 -> sourcefolder
[root@xxxxx zyttest]# ln -snf tempfolder test1
[root@xxxxx zyttest]# ll
total 8
drwxr-xr-x 3 root root 4096 Apr 28 23:19 sourcefolder
drwxr-xr-x 2 root root 4096 Apr 28 23:23 tempfolder
lrwxrwxrwx 1 root root   10 Apr 28 23:23 test1 -> tempfolder
[root@xxxxx zyttest]# cd test1/
[root@xxxxx test1]# ll
total 0
[root@xxxxx test1]# 
```
可以发现，看不到sourcefolderchild了

### 删除一个软连接

先切换回来
``` bash
ln -snf sourcefolder test1
```

``` bash
[root@xxxxx zyttest]# ln -snf sourcefolder test1
[root@xxxxx zyttest]# ll
total 8
drwxr-xr-x 3 root root 4096 Apr 28 23:19 sourcefolder
drwxr-xr-x 2 root root 4096 Apr 28 23:23 tempfolder
lrwxrwxrwx 1 root root   12 Apr 28 23:25 test1 -> sourcefolder
[root@xxxxx zyttest]# cd test1/
[root@xxxxx test1]# ll
total 4
drwxr-xr-x 2 root root 4096 Apr 28 23:18 sourcefolderchild
[root@xxxxx test1]# 
```

::: danger
软连接不要轻易删除，如果在生产平台上更要慎重！！！

区别就是 rm -rf xx 和 rm -rf xx/

如果你建错了软连接打算删除掉的话，没有把握还是请求旁边的同事协助一下

:::

好了，准备删除
``` bash
rm -rf test1
```

看看效果
``` bash
[root@xxxxx zyttest]# ll
total 8
drwxr-xr-x 3 root root 4096 Apr 28 23:19 sourcefolder
drwxr-xr-x 2 root root 4096 Apr 28 23:23 tempfolder
lrwxrwxrwx 1 root root   12 Apr 28 23:25 test1 -> sourcefolder
[root@xxxxx zyttest]# rm -rf test1
[root@xxxxx zyttest]# ll
total 8
drwxr-xr-x 3 root root 4096 Apr 28 23:19 sourcefolder
drwxr-xr-x 2 root root 4096 Apr 28 23:23 tempfolder
[root@xxxxx zyttest]# 
```

如果你用rm -rf test1/ 呢？
``` bash
[root@xxxxx zyttest]# ll
total 8
drwxr-xr-x 3 root root 4096 Apr 28 23:19 sourcefolder
drwxr-xr-x 2 root root 4096 Apr 28 23:23 tempfolder
lrwxrwxrwx 1 root root   12 Apr 28 23:29 test1 -> sourcefolder
[root@xxxxx zyttest]# cd test1/
[root@xxxxx test1]# ll
total 4
drwxr-xr-x 2 root root 4096 Apr 28 23:18 sourcefolderchild
[root@xxxxx test1]# cd ..
[root@xxxxx zyttest]# rm -rf test1/
[root@xxxxx zyttest]# ll
total 8
drwxr-xr-x 2 root root 4096 Apr 28 23:30 sourcefolder
drwxr-xr-x 2 root root 4096 Apr 28 23:23 tempfolder
lrwxrwxrwx 1 root root   12 Apr 28 23:29 test1 -> sourcefolder
[root@xxxxx zyttest]# cd test1/
[root@xxxxx test1]# ll
total 0
```

看到了么？ 实际上你是把test1/下的文件都删除了
所以在Linux上，要时刻区分文件夹级别的操作，带/和不带/的区别