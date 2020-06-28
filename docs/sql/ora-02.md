---
autoGroup-1: Oracle
title: DML时间记录
---
### 查询各表的DML记录
``` sql
select * from all_tab_modifications;
select * from dba_tab_modifications;
select * from user_tab_modifications;
``` 

### 查询数据的插入时间
``` sql
select to_char(scn_to_timestamp(ORA_ROWSCN),'yyyy-mm-dd hh24:mi:ss:ff8') update_time,t.* from XXX t where t.pk1 = 123456
```
::: warning 注意

传说这条命令只能追溯最近5天的最后DML更新记录

如果全表查询不加条件，查到5天以外的数据，会报下面这个错误

:::

``` sql
ORA-08181: 指定的编号不是有效的系统更改号
ORA-06512: 在 "SYS.SCN_TO_TIMESTAMP", line 1
08181. 00000 -  "specified number is not a valid system change number"
*Cause:    supplied scn was beyond the bounds of a valid scn.
*Action:   use a valid scn.
```