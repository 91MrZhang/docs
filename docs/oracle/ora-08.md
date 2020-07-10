---
title: 表空间状态查询
---
### 表空间状态查询
``` sql
select file_name,autoextensible,tablespace_name,bytes/1024/1024 m,maxbytes/1024/1024 from dba_data_files order by file_name desc;
```
