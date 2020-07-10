---
title: 安装
autoPrev: README
---

### Nginx安装
把[nginx.zip](/file/nginx.zip)上传到目标服务器上 并解压

yum一下安装所需要的依赖
``` bash
yum -y install gcc automake autoconf libtool make
yum install gcc gcc-c++
```

安装PCRE
``` bash
tar -zxvf pcre-8.21.tar.gz
cd pcre-8.21
./configure
make
make install
```

安装zlib
``` bash
tar -zxvf zlib-1.2.11.tar.gz
cd zlib-1.2.11
./configure
make
make install
```


安装openssl
``` bash
tar -zxvf openssl-fips-2.0.16.tar.gz
./config
make
make install
yum -y install openssl openssl-devel
```


安装nginx
``` bash
tar -zxvf nginx-1.13.10.tar.gz
cd nginx-1.13.10
./configure --with-http_ssl_module
make
make install
```

打开服务
```
cd /usr/local/nginx/sbin
./nginx
```

如果有内容则证明安装成功
``` bash
curl http://localhost
```
