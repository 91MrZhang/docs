---
title: ECS快照和NAS备份
---
### ECS快照和NAS备份

ECS服务器做快照简单，恢复也简单，收费便宜

NAS做备份是阿里云的脚本备份，备份和恢复都不如快照简单，并且做不出镜像，收费还贵；不过NAS也有好处，上限10PB，不用自己去给磁盘扩容，不够了买存储包就行

如果说你的业务量不超过2T，我建议还是单独买个ECS服务器，挂一块数据盘（好像ECS服务器最多能挂2T的盘），用快照备份

如果超过2T了，就只能选NAS了


