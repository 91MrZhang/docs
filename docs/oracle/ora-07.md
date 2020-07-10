---
title: 初始化SQL
---
### 1、建表空间
1)、物理存放位置要有IO权限

2)、实际生产环境不建议一个表空间只映射一个自增的dbf,如果哪天数据库服务器这个唯一的dbf出现坏块了,那就麻烦了
``` sql
create tablespace "TESTDB_TABSPSC" logging datafile '/usr/local/oracle/data/TESTDB_TABSPSC.dbf' size 500M autoextend on next 100M maxsize unlimited extent management local segment space management auto;
```
3)、所以你最好这么建
``` sql
create tablespace "TESTDB_TABSPSC" logging datafile '/usr/local/oracle/data/TESTDB_TABSPSC_01.dbf' size 50m autoextend on next 50m maxsize 2000m;

alter tablespace "TESTDB_TABSPSC" logging datafile '/usr/local/oracle/data/TESTDB_TABSPSC_02.dbf' size 50m autoextend on next 50m maxsize 2000m;

alter tablespace "TESTDB_TABSPSC" logging datafile '/usr/local/oracle/data/TESTDB_TABSPSC_03.dbf' size 50m autoextend on next 50m maxsize 2000m;
```

### 2、建用户
``` sql
create user TESTDB identified by TESTDBPW 
default tablespace TESTDB_TABSPSC;
```

### 3、给用户赋权限
``` sql
grant connect,resource to TESTDB;
grant create any sequence to TESTDB;
grant create any table to TESTDB;
grant delete any table to TESTDB;
grant insert any table to TESTDB;
grant select any table to TESTDB;
grant unlimited tablespace to TESTDB;
grant execute any procedure to TESTDB;
grant update any table to TESTDB;
grant create any view to TESTDB;
```

### 4、建表
``` sql
create table TESTDB.user_info(
user_id NVARCHAR2 (50) primary key not null, 
first_name NVARCHAR2 (100) not null,  
email NVARCHAR2 (100) not null,
password NVARCHAR2 (32) not null, 
department_id NVARCHAR2 (255) not null,
isImported NVARCHAR2 (255) not null
);
```