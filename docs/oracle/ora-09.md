---
title: SQLPLUS执行SQL文件
---
### SQLPLUS命令行

如果需要到生产机上执行一大段命令,隔着各种堡垒机,网络环境极其卡顿,复制粘贴执行命令基本没戏

所以把要执行的SQL放到服务器之上,赋正确权限,从sqlplus执行即可

``` sql
@/home/oracle/testsql/test.sql
```