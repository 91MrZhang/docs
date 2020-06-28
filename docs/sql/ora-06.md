---
autoGroup-1: Oracle
title: listagg和wm_concat
---
### 数据源
<img :src="$withBase('/assets/img/sql/ora-6-1.png')"  width="300" height="1200">

这两个函数是干什么用的，一两句说不清，直接看效果
### wm_concat
``` sql
select course_id,wm_concat(user_id) user_ids from zyt_finaltest group by course_id
```
<img :src="$withBase('/assets/img/sql/ora-6-2.png')"  width="1800" height="200">

### listagg
``` sql
select course_id,listagg(user_id,',') within group (order by user_id) user_ids from zyt_finaltest group by course_id
```
<img :src="$withBase('/assets/img/sql/ora-6-3.png')"  width="1800" height="200">

::: warning 注意

实际上Oracle官方比较推荐listagg,

wm_concat在12C已经取消了

但我觉得实际使用起来,还是wm_concat顺手

:::