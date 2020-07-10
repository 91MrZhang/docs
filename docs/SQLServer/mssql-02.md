---
title: 建表
---
简单的建张表
``` sql
create table TEST_DATABASE.dbo.user_info(
user_id NVARCHAR (50) primary key not null, 
first_name NVARCHAR (100) not null,  
email NVARCHAR (100) not null,
password NVARCHAR (32) not null, 
department_id NVARCHAR (255) not null
);

```

