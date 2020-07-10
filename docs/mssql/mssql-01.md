---
title: 初始化
autoPrev: README
---
创建数据库
``` sql
create database TEST_DATABASE 
on  primary  -- 默认就属于primary文件组,可省略
(
/*--数据文件的具体描述--*/
    name='TEST_DATABASE',  -- 主数据文件的逻辑名称
    filename='C:\DBDATA\TEST_DATABASE.mdf', -- 主数据文件的物理名称
    size=5mb, --主数据文件的初始大小
    maxsize=100mb, -- 主数据文件增长的最大值
    filegrowth=15%--主数据文件的增长率
)
log on
(
/*--日志文件的具体描述,各参数含义同上--*/
    name='TEST_DATABASE._log',
    filename='C:\DBDATA\TEST_DATABASE._log.ldf',
    size=2mb,
    filegrowth=1mb
)

```

删除数据库
``` sql
use master
go
if exists(select * from sysdatabases where name='TEST_DATABASE')
drop database TEST_DATABASE
go
```


创建用户
```sql
use TEST_DATABASE

create login TEST_DATABASE with password='TEST_DATABASE', default_database=TEST_DATABASE

create user TEST_DATABASE for login TEST_DATABASE with default_schema=dbo

exec sp_addrolemember 'db_owner', 'TEST_DATABASE'
```
