---
title: 时间校准
autoPrev: README
---
### 时间校准
单点登录、加解密经常由于服务器时间不准出问题

``` bash
ntpdate us.pool.ntp.org
```

如果没有ntpdate,不让yum或ntpdate之后提示找不到服务器，那就直接打开百度手动对时即可
``` bash
date -s "2020-04-15 14:15:00"  
clock -w
```