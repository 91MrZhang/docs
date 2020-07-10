---
title: 80转443
---
### 80转443
有的网站在浏览器上输入域名后，直接就可以跳转到https协议，在Nginx上加一句这个就可以了

``` nginx
server {
    listen 80;
    server_name www.域名.com;
    rewrite ^(.*)$ https://${server_name}$1 permanent;
}

```