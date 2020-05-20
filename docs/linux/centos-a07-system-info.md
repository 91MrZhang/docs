---
title: 系统信息
---
### 系统信息
::: tip
老板让看一下客户的服务器够不够劲，

查了半天百度，最合适的还是这两句
:::

#### 看系统
``` bash
head -n 1 /etc/issue 
```

#### 看CPU
``` bash
cat /proc/cpuinfo | grep name | cut -f2 -d: | uniq -c
```

#### 看内存
``` bash
free -m
```

#### 看硬盘
``` bash
du -sh
```

再看看还有没有没分区的硬盘
``` bash
fdisk -l
```