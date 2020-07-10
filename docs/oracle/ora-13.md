---
title: exp/imp导出及导入
---
### 备份前的准备工作
1、停业务，停监听

2、不要停数据库实例

3、字符集要统一，不然容易EXP-00091

4、Oracle11G有一个不导空表的问题，自己百度下

### 开始备份
oracle用户下，这里只备份DATABASE1，并且是全库备份
``` bash
exp userid=system/oracle owner=DATABASE1 buffer=2048000 file=DATABASE1.dmp consistent=y log=DATABASE1.log
```

### 恢复前的准备工作
1、全库备份一般只做异机恢复，不做原机恢复

2、恢复之前确保表空间大小充足，最好新建一样名称的用户，因为有的存储过程或函数DML时喜欢按加上数据库用户

### 开始恢复
oracle用户下
``` bash
imp system/oracle file=DATABASE1.dmp fromuser=DATABASE1 touser=DATABASE1 commit=Y buffer=2048000 log=DATABASE1.log
```