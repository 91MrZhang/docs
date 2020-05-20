---
title: 结束进程
---
### 结束进程
``` bash
ps -ef |grep tomcat
```
查出来后，找到第二列的PID
``` bash
kill -9 4394
```
-9比较有效，直接shutdown,生产平台慎用