---
title: nohup
---
nohup跟Ctrl+Z、&不同，nohub即使你退出了终端，它依然会执行
### nohup
启动个jar文件
``` bash
nohup java -jar xxx.jar
```
这样你退出终端了，关闭ssh工具了，依然会后台执行

如果想关闭的话，需要ps -ef再kill进程