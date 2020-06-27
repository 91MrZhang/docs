---
title: '>,>>'
---
### >和>>
### >命令
'>' 直接将目前内容，覆盖给目标文件

清空内容
``` bash
> kkk.txt
```
将fff.txt中包含happyday的行，输出到kkk.txt
``` bash
grep -r 'happyday' fff.txt > kkk.txt
```

### >>命令
'>>' 将目前内容，追加给目标文件

例如将日志中，包含error80091的信息，都输出到all_day.log中


``` bash
grep -r 'error80091' fff.txt >> all_day.log
```
线上集群模式部署的话，有多个应用节点共享一个NAS存储，都集中输出到一个Log中的，省去了去每个服务器获取的时间