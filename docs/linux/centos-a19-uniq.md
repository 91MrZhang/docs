---
title: uniq
---
### uniq 命令
#### 文本去重显示
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
去重看看结果
``` bash
uniq sort.txt
```
``` bash
[root@xxxx zyttest]# uniq sort.txt 
1
4
5
2
4
3
6
```

::: tip
没有去重？

实际上uniq只能按行为单位给相邻的内容做去重，

上例中的4和4中间夹了个5和2，所以需要用到刚学的sort命令，排序后，再uniq

所以你留意的话，很多时候sort和uniq都是成对出现的
:::

再试一次
``` bash
sort sort.txt | uniq
```
很明显，这次就一个4了
``` bash
[root@xxxx zyttest]# sort sort.txt | uniq
1
2
3
4
5
6
```
#### uniq -c 计数
这个-c计数，就很常用了

还记得查看系统cpu信息那条命令么？

``` bash
cat /proc/cpuinfo | grep name | cut -f2 -d: | uniq -c
```

这一条命令集合了，grep、cut、uniq

这次终于到了uniq -c了

之前不加uniq -c的结果是这样的
``` bash
[root@xxxx zyttest]# cat /proc/cpuinfo | grep name | cut -f2 -d: 
 Intel(R) Xeon(R) Platinum 8163 CPU @ 2.50GHz
 Intel(R) Xeon(R) Platinum 8163 CPU @ 2.50GHz
 Intel(R) Xeon(R) Platinum 8163 CPU @ 2.50GHz
 Intel(R) Xeon(R) Platinum 8163 CPU @ 2.50GHz
 Intel(R) Xeon(R) Platinum 8163 CPU @ 2.50GHz
 Intel(R) Xeon(R) Platinum 8163 CPU @ 2.50GHz
 Intel(R) Xeon(R) Platinum 8163 CPU @ 2.50GHz
 Intel(R) Xeon(R) Platinum 8163 CPU @ 2.50GHz
``` 

这次加上 uniq -c
``` bash
[root@xxxx zyttest]# cat /proc/cpuinfo | grep name | cut -f2 -d: | uniq -c
      8  Intel(R) Xeon(R) Platinum 8163 CPU @ 2.50GHz
``` 

发现第一列多了一个【8】,这个8就是-c计来的数

后续涉及到一些日志计数统计的命令，grep、sort、uniq、cut是经常要使用的
