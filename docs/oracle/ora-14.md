---
title: expdp/impdp数据泵导出及导入
---
::: warning 注意

exp/imp配套使用

expdb/impdp配套使用

不能混用
:::
### 备份前的准备工作
1、停业务，停监听

2、不要停数据库实例

3、oracle权限先建一个物理路径
``` bash
mkdir /oracle/expdb/dump
```
4、sqlplus建一个逻辑路径，绑定上
``` sql
create directory expdpdump as '/oracle/expdb/dump;
```

### 开始备份
oracle用户下，这里只备份DATABASE1，CONTENT=ALL指全库备份，

PARALLEL=32指32个线程同时导出，量力而行，并且我印象中，导出是多少线程，导入就要多少线程
``` bash
expdp system/oracle  schemas=DATABASE1  DIRECTORY=expdpdump DUMPFILE=DATABASE1_%U.dmp logfile=DATABASE1.log  CONTENT=ALL PARALLEL=32
```

### 恢复前的准备工作
1、全库备份一般只做异机恢复，不做原机恢复

2、恢复之前确保表空间大小充足，最好新建一样名称的用户，因为有的存储过程或函数DML时喜欢按加上数据库用户

3、导入之前也要像导出时建一个物理目录，并且把导出文件放进去，然后再创建一个逻辑路径

### 开始恢复
oracle用户下
``` bash
impdp system/oracle DIRECTORY=expdpdump DUMPFILE=DATABASE1_%U.dmp logfile=imp_DATABASE1.log PARALLEL=32 comm
it=Y
```