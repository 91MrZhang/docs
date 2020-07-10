---
title: Rman备份脚本
---
::: warning 通用性

Rman备份及恢复的特点我就不介绍了

如果你们公司的数据量每天不超过100G并且磁盘IO还可以的话,那么用我这个脚本是完全够用的

:::
### 准备工作
RMAN备份，首先要开归档（归档模式）之后才能做RMAN备份，一般默认都是关闭的

``` sql
SQL> archive log list;
Database log mode              No Archive Mode
Automatic archival             Disabled
Archive destination            USE_DB_RECOVERY_FILE_DEST
Oldest online log sequence     6
Current log sequence           8
SQL> 
``` 

再建几个文件夹
``` bash
[root@sdb ~]# mkdir /sdata/
[root@sdb ~]# chown -R oracle:oinstall /sdata/

[oracle@sdb sdata]$ mkdir logs
[oracle@sdb sdata]$ mkdir arch
[oracle@sdb sdata]$ mkdir backup
[oracle@sdb sdata]$ mkdir bin
[oracle@sdb sdata]$ ls
arch  backup  bin  logs
[oracle@sdb sdata]$ 
``` 
### 开启归档

``` sql
alter system set log_archive_dest_1='location=/sdata/arch' scope=both;

shutdown immediate;  
startup mount;   
alter database archivelog;
alter database open;
archive log list;

SQL> archive log list;
Database log mode              Archive Mode
Automatic archival             Enabled
Archive destination            /sdata/arch
Oldest online log sequence     6
Next log sequence to archive   8
Current log sequence           8
SQL> 
```

查询以确定数据库位于archivelog模式中且归档过程正在运行  
``` sql
select log_mode from v$database;  
select archiver from v$instance;  
``` 

日志切换 (这一句的目的是，确保你未来产生的日志文件都发生在你刚刚建好的文件夹里)
``` sql
alter system switch logfile;  
``` 

### RMAN备份

``` bash
vi /sdata/bin/rman_backup_lev0.sh                 0级备份脚本
```

``` bash
#!/usr/bin/bash
.  /home/oracle/.bash_profile
rman nocatalog target  /  msglog /sdata/logs/rman_backup_`date +%Y%m%d`.log << EOF 
CONFIGURE RETENTION POLICY TO REDUNDANCY 2;
run {
allocate channel dev1 type disk maxpiecesize=6G;
allocate channel dev2 type disk maxpiecesize=6G;

backup as compressed backupset 
incremental level=0
database format '/sdata/backup/inc0_%d_%T_%U' tag='inc0' include current controlfile;
sql "alter system archive log current";
change archivelog all crosscheck;
backup as compressed backupset 
archivelog all format '/sdata/backup/arch_%d_%T_%U' tag='bakarch';
delete noprompt archivelog until time 'sysdate-3' all;

backup as compressed backupset
format='/sdata/backup/ctlbak_%s_%p_%T_%d.ctl'
tag='bkctl'
current controlfile reuse;
backup spfile format='/sdata/backup/spfilebak_%s_%p_%T_%d';
CROSSCHECK BACKUP;
delete noprompt obsolete;

release channel dev1;
release channel dev2;
}
exit;
EOF
```

给脚本赋权限：
``` bash
[oracle@sdb bin]$ chmod +x rman_backup_lev0.sh 
[oracle@sdb bin]$ ls -rlt
total 4
-rwxr-xr-x. 1 oracle oinstall 929 Jan 16 08:29 rman_backup_lev0.sh
[oracle@sdb bin]$ 
```

### 定时任务（用oracle用户建）
``` bash
crontab -e
35 08 * * *     sh /sdata/bin/rman_backup_lev0.sh  >/dev/null 2>&1 #RMAN Backup
```

::: danger 注意
1、不要有明显报错“RMAN-”,“FAILED”,“ERROR”,“ORA-”

2、CONFIGURE RETENTION POLICY TO REDUNDANCY 2; 指的是备份两份结果，如果往大了改,要注意arch、backup的空间使用率，不要超过40%

3、定时任务尽量业务不繁忙时做。因为rman这套东西备份起来很吃IO

:::