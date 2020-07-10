---
title: 集群式配置
---

### 集群式配置
1. 前端节点是443端口，后端节点是8443端口
2. 配置了IP地址透传
3. 严格意义上来说nginx要有单独用户，不要nobody,并且要仔细地定义错误日志
4. 走https协议需要ssl证书

``` nginx
#user  nobody;
worker_processes  8;
error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;
#pid        logs/nginx.pid;
events {
    worker_connections  8196;
}

worker_rlimit_nofile 655350;
user root;
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
server {
    listen      443 ssl;
    server_name  xxx.edu.cn;
    ssl on;
    ssl_certificate      /soft/server.crt;
    ssl_certificate_key  /soft/server.key;
    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;
        location / {
        proxy_pass https://xxx.edu.cn;
        proxy_http_version 1.1;
	    proxy_set_header Host $host;
	    proxy_set_header X-Real-IP $remote_addr;
	    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;        
    }
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    } 
}
```