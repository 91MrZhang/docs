---
autoGroup-1: 系统配置
title: 开机启动
---
### 开机启动
#### rc.local
Linux可以在你开机后处理一些逻辑，执行脚本

例如挂载，启动服务

root权限修改此文件
``` bash
[root@xxx /]# vi /etc/rc.local 
```

```
#!/bin/sh
#
# This script will be executed *after* all the other init scripts.
# You can put your own initialization stuff in here if you don't
# want to do the full Sys V style init stuff.

touch /var/lock/subsys/local
mount -t nfs -o vers=3,nolock,proto=tcp,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,noresvport xxxxxx-xxxx.cn-shanghai.nas.aliyuncs.com:/ /data
```
比如我这里加一个mount命令，wq之后重启再开机就自动帮我挂上了