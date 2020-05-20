---
title: 权限管理
---
### 权限管理
#### chown更改所有权
``` bash
chown -R runoob:runoobgroup *
```
#### chmod更改访问权
r=4，可读；w=2，可写；x=1, 可执行
``` bash
chmod 761 test.sh
```
执行后，

当前用户对这个文件有所有权限，

当前用户的组没有执行权限，

其他用户只有执行权限

工作中，一般Nas存储777出现的比较多，其余777的情况谨慎使用
