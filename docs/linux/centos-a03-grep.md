---
title: grep
---
::: tip
grep 是一个很实用很实用的命令，有很多花样参数和应用场景

参数网上很多，在这里不赘述了，讲几个工作中常遇到的场景

:::

#### grep日志
例如，最近线上平台总是出问题，我知道出现问题时的日志关键字是 'XssRequestFilterImpl.java:125'

那我这样执行的话，就可以直接观测出哪个时间点出现了问题，方便统计

``` bash
[root@xxxx tomcat]# grep 'XssRequestFilterImpl.java:125' bt-20200426.log 
INFO   | jvm 1    | 2020/04/26 15:11:57 | 	at xxxx.XssRequestFilterImpl.filterRequest(XssRequestFilterImpl.java:125)
INFO   | jvm 1    | 2020/04/26 16:13:19 | 	at xxxx.XssRequestFilterImpl.filterRequest(XssRequestFilterImpl.java:125)
INFO   | jvm 1    | 2020/04/26 18:21:23 | 	at xxxx.XssRequestFilterImpl.filterRequest(XssRequestFilterImpl.java:125)
INFO   | jvm 1    | 2020/04/26 18:21:30 | 	at xxxx.XssRequestFilterImpl.filterRequest(XssRequestFilterImpl.java:125)
INFO   | jvm 1    | 2020/04/26 18:22:53 | 	at xxxx.XssRequestFilterImpl.filterRequest(XssRequestFilterImpl.java:125)
INFO   | jvm 1    | 2020/04/26 18:22:58 | 	at xxxx.XssRequestFilterImpl.filterRequest(XssRequestFilterImpl.java:125)
INFO   | jvm 1    | 2020/04/26 21:04:03 | 	at xxxx.XssRequestFilterImpl.filterRequest(XssRequestFilterImpl.java:125)
[root@xxxx tomcat]# 
```
#### grep递归
新上手一个系统，光配置文件就一大堆，想查某一个配置和哪些配置关联

这个递归查询命令，就比较实用了，例如我想查查这个8443都在哪些配置文件出现
``` bash
grep -rn '8443' *
```
或者指定文件类型
``` bash
grep -rn '8443' *.properties
```
就可以去下面这两个文件直接更改试试，看看是否生效了
``` bash
[root@xxxx config]# grep -rn '8443' *
config.properties:188:appserver.https.portnumber=8443
tomcat/conf/server.xml:78:               redirectPort="8443"/>
tomcat/conf/server.xml:89:    <!-- Direct HTTPS connector on port 8443. For standalone installations and direct application server use -->
tomcat/conf/server.xml:70:    <Connector port="8443"
```
#### grep条件
有的时候你想多查询几个条件，这里说一下与条件和或条件

或条件，-E参数使用
``` bash
ll |grep -E 'f|k'
```
与条件多个grep即可
``` bash
ll |grep k |grep f 
```

下方是查询结果
``` bash
[root@xxxx zyttest]# ll
total 0
-rw-r--r-- 1 root root 0 Apr 27 21:44 fb.txt
-rw-r--r-- 1 root root 0 Apr 27 21:44 fff.txt
-rw-r--r-- 1 root root 0 Apr 27 21:45 fk.txt
-rw-r--r-- 1 root root 0 Apr 27 21:44 kkk.txt
[root@xxxx zyttest]# ll |grep -E 'f|k'
-rw-r--r-- 1 root root 0 Apr 27 21:44 fb.txt
-rw-r--r-- 1 root root 0 Apr 27 21:44 fff.txt
-rw-r--r-- 1 root root 0 Apr 27 21:45 fk.txt
-rw-r--r-- 1 root root 0 Apr 27 21:44 kkk.txt
[root@xxxx zyttest]# ll |grep k |grep f 
-rw-r--r-- 1 root root 0 Apr 27 21:45 fk.txt
```
#### grep反向查询
如果我正在tail一个日志，但是总出现一堆垃圾信息

那么可以使用 grep -v 给反向掉
``` bash
grep -v
```
例如我只想查询LOG级别在DEBUG之外的，因为DEBUG太多了，影响观测
``` bash
tail -f stdout-stderr-20200427.log |grep -v 'DEBUG'
```

再复杂一些的，在工作中就很少用到了，因为我工作中是用win系统的，

过于复杂的文本分析，就直接down到本地拿文本编辑器处理了