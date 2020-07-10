---
title: 嵌套条件
---
### 嵌套条件
1. 因为Nginx不支持复杂的IF条件，所以可以做一个FLAG,经过一个条件拼接一位，最后判断结果即可
2. 我们常常用在一些普通的漏洞防御上，例如URL的SQL注入，XSS攻击等
``` nginx
set $flag 0;
if ($query_string ~* ".*('|--|union|insert|drop|truncate|update|from|grant|exec|where|select|and|or|count|chr|mid|like|iframe|script|alert|webscan|dbappsecurity|style|confirm|innerhtml|innertext|class).*"){
 set $flag "${flag}1";
}
if ($http_user_agent ~* YisouSpider|ApacheBench|WebBench|Jmeter|JoeDog|Havij|GetRight|TurnitinBot|GrabNet|masscan|mail2000|github|wget|curl|Java|python) {
 set $flag "${flag}1";
}
if ($flag = "011"){
 return 103; 
}
```