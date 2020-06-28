---
autoGroup-1: Oracle
title: Flashback Query恢复误操作数据
---
### 某张表在某个时间点的切面状态
``` sql
select * from xxx as of timestamp to_timestamp('2020-03-28 10:29:00','yyyy-mm-dd hh24:mi:ss');
``` 

::: warning 注意

印象中这个查询访问，并不是和Oracle是否开启归档有直接关系的

而是和数据库创建时的UNDO_RETENTION设置多少有关系

建议误操作之后，赶紧回查并备份一下，如果数据变化量大，UNDO空间很容易被写满

使用这个命令想查也查不到了

:::
