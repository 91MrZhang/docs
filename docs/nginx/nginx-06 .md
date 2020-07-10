---
title: 会话保持
---
### 会话保持
开发时没考虑session共享的问题，这个时候如果上了集群模式，原来的webA服务器的session，肯定是没办法直接传递给webB服务器的

在Nginx上，最简单的是通过ip_hash这个负载策略，即一个IP一直分配到同一台web服务器上
``` nginx
http {
    access_log off;
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;
    client_max_body_size 8192m;	
	upstream xxx.edu.cn {  
    server 10.10.10.11:8443  weight=1 max_fails=2 fail_timeout=30s;  
    server 10.10.10.12:8443  weight=1 max_fails=2 fail_timeout=30s;
	ip_hash;
    }  
```

但是很多情况下，访问网站的IP都是局域网，或者共享一个出口IP，这样ip_hash就不会work了

这个时候你就需要sticky模块了（需要额外编译一下，自行百度），具体的就是nginx会给你发配一个记录你该访问哪一台web服务器的cookie，确保你始终访问到同一台
``` nginx
http {
    access_log off;
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;
    client_max_body_size 8192m;	
	upstream xxx.edu.cn {  
    server 10.10.10.11:8443  weight=1 max_fails=2 fail_timeout=30s;  
    server 10.10.10.12:8443  weight=1 max_fails=2 fail_timeout=30s;
	sticky expires=1h domain=web.com path=/;
    }  
```