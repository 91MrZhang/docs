---
title: 虚拟主机配置
---
### 虚拟主机配置
1. 只有一台服务器一个公网IP，但是给它解析了多个域名，不同域名走不同的服务，这个就是Nginx的虚拟主机了
2. 对于小微企业来说，一台服务器装个官网，再装几个可以展示的产品，一台服务器多域名可以省挺多成本了

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
http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;

    upstream yewu1.xxx.com {  
    server localhost:8080 weight=1 max_fails=2 fail_timeout=30s;  
    ip_hash;
    } 

    upstream yewu2.xxx.com {
    server localhost:8088 weight=1 max_fails=2 fail_timeout=30s;
    ip_hash;
    }

server {
	listen      443 ssl;
	server_name  yewu1.xxx.com;
	ssl on;
	ssl_certificate      /usr/local/nginx/server.crt;
	ssl_certificate_key  /usr/local/nginx/server.key;
	ssl_session_timeout 5m;
	ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
	ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
	ssl_prefer_server_ciphers on;
	location / {
	    proxy_pass http://yewu1.xxx.com;
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
server {
	listen      443 ssl;
	server_name  yewu2.xxx.com;
	ssl on;
	ssl_certificate      /usr/local/nginx/server.crt;
	ssl_certificate_key  /usr/local/nginx/server.key;
	ssl_session_timeout 5m;
	ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
	ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
	ssl_prefer_server_ciphers on;
	location / {
	    proxy_pass yewu2.xxx.com;
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