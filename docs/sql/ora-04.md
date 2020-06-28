---
autoGroup-1: Oracle
title: 单表复制
---
### 快速备份一张表
``` sql
create table a as select * from b;
``` 

::: warning 注意

新建的表，主外键关系不会带过去，要注意

:::
