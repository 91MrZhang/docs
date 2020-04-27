---
title: 防火墙
---

#### 看看状态
``` bash
service iptables status
```
#### 开启
``` bash
service iptables restart
```
#### 关闭
``` bash
service iptables stop
```

#### 重定向
访问80时，自动转到8081，访问443时，自动转到8444
``` bash
iptables -t nat -A PREROUTING -p tcp -m tcp --dport 80 -j REDIRECT --to-ports 8081
iptables -t nat -A PREROUTING -p tcp -m tcp --dport 443 -j REDIRECT --to-ports 8444
service iptables save
service iptables restart
```

#### 白名单
把8443和8080开放
``` bash
iptables -A INPUT -p tcp -m state --state NEW -m tcp --dport 8080 -j ACCEPT
iptables -A INPUT -p tcp -m state --state NEW -m tcp --dport 8443 -j ACCEPT
service iptables save
service iptables restart
```