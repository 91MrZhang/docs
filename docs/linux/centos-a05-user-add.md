---
title: adduser
---
### 添加用户
``` bash
useradd -u 700 bbuser
```
::: danger 注意
集群模式，最好都用一样的UID,

不然挂载之类的话，权限很难搞

这里意思就是创建一个uid为700的用户
:::

