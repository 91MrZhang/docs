---
autoGroup-1: 系统配置
title: crontab
---
### crontab
#### crontab -e
首先你必须要了解cron表达式


[在线Cron表达式](https://www.beejson.com/tool/cron.html)

``` bash
[root@xxx /]# crontab -e
```
``` bash
*/1 * * * *  sh /usr/local/tcp_sta.sh
```

编辑好后，wq即可

这里就表示每秒执行一下tcp_sta这个脚本

#### 不同用户
crontab是针对每一个用户的，谁的crontab就以谁的身份去执行
