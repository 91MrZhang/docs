---
title: Rman的异机恢复
---
::: warning 通用性

这篇文章是我从网上找来的,实践了10余次,没什么问题

不过要注意以下,Rman恢复时,新旧Oracle的版本,差一个小版本号都是不行的

::: 

::: tip 版权声明

版权声明：本文为CSDN博主「DolphinHat」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。

原文链接：[https://blog.csdn.net/orcldb/java/article/details/11803071](https://blog.csdn.net/orcldb/java/article/details/11803071)

:::

### 正文
利用rman进行异机还原(目录相同)

源始库：192.168.201.2

目标库：192.168.201.3

--192.168.201.2

--rman

``` sql
[oracle@db01 ~]$ rman target /

Recovery Manager: Release 10.2.0.1.0 - Production on Wed Sep 18 08:52:25 2013

Copyright (c) 1982, 2005, Oracle.  All rights reserved.

connected to target database: ORCL (DBID=1354163930)--dbid

--备份数据文件
RMAN> backup database format '/u02/backup/dbf_%T_%U.bak';

Starting backup at 18-SEP-13
using target database control file instead of recovery catalog
allocated channel: ORA_DISK_1
channel ORA_DISK_1: sid=140 devtype=DISK
channel ORA_DISK_1: starting full datafile backupset
channel ORA_DISK_1: specifying datafile(s) in backupset
input datafile fno=00001 name=/u02/oradata/orcl/system01.dbf
input datafile fno=00002 name=/u02/oradata/orcl/undotbs01.dbf
input datafile fno=00003 name=/u02/oradata/orcl/sysaux01.dbf
input datafile fno=00005 name=/u02/oradata/orcl/app01.dbf
input datafile fno=00004 name=/u02/oradata/orcl/users01.dbf
channel ORA_DISK_1: starting piece 1 at 18-SEP-13
channel ORA_DISK_1: finished piece 1 at 18-SEP-13
piece handle=/u02/backup/dbf_20130918_05ok565a_1_1.bak tag=TAG20130918T085402

comment=NONE
channel ORA_DISK_1: backup set complete, elapsed time: 00:01:25
channel ORA_DISK_1: starting full datafile backupset
channel ORA_DISK_1: specifying datafile(s) in backupset
including current control file in backupset
including current SPFILE in backupset
channel ORA_DISK_1: starting piece 1 at 18-SEP-13
channel ORA_DISK_1: finished piece 1 at 18-SEP-13
piece handle=/u02/backup/dbf_20130918_06ok567v_1_1.bak tag=TAG20130918T085402

comment=NONE
channel ORA_DISK_1: backup set complete, elapsed time: 00:00:03
Finished backup at 18-SEP-13

--备份归档日志
RMAN> backup archivelog all format '/u02/backup/arc_%T_%U.bak' delete input;

Starting backup at 18-SEP-13
current log archived
using channel ORA_DISK_1
channel ORA_DISK_1: starting archive log backupset
channel ORA_DISK_1: specifying archive log(s) in backup set
input archive log thread=1 sequence=33 recid=6 stamp=826448032
input archive log thread=1 sequence=34 recid=7 stamp=826448303
channel ORA_DISK_1: starting piece 1 at 18-SEP-13
channel ORA_DISK_1: finished piece 1 at 18-SEP-13
piece handle=/u02/backup/arc_20130918_07ok56dg_1_1.bak tag=TAG20130918T085823

comment=NONE
channel ORA_DISK_1: backup set complete, elapsed time: 00:00:02
channel ORA_DISK_1: deleting archive log(s)
archive log filename=/u02/archivelog/1_33_826383194.dbf recid=6 stamp=826448032
archive log filename=/u02/archivelog/1_34_826383194.dbf recid=7 stamp=826448303
Finished backup at 18-SEP-13

--备份控制文件
RMAN> backup current controlfile format '/u02/backup/ctl_%T_%U.bak';

Starting backup at 18-SEP-13
using channel ORA_DISK_1
channel ORA_DISK_1: starting full datafile backupset
channel ORA_DISK_1: specifying datafile(s) in backupset
including current control file in backupset
channel ORA_DISK_1: starting piece 1 at 18-SEP-13
channel ORA_DISK_1: finished piece 1 at 18-SEP-13
piece handle=/u02/backup/ctl_20130918_08ok56fa_1_1.bak tag=TAG20130918T085922

comment=NONE
channel ORA_DISK_1: backup set complete, elapsed time: 00:00:01
Finished backup at 18-SEP-13
```

--192.168.201.3

--关闭数据库

``` sql
[oracle@db02 orcl]$ sqlplus /nolog

SQL*Plus: Release 10.2.0.1.0 - Production on Wed Sep 18 07:39:50 2013

Copyright (c) 1982, 2005, Oracle.  All rights reserved.

SQL> conn /as sysdba
Connected.

SQL> shutdown immediate;
Database closed.
Database dismounted.
ORACLE instance shut down.

--打开数据库到nomount状态
SQL> startup nomount;
ORACLE instance started.

Total System Global Area  734003200 bytes
Fixed Size      1221564 bytes
Variable Size    213912644 bytes
Database Buffers   515899392 bytes
Redo Buffers      2969600 bytes

--rman
[oracle@db02 bdump]$ rman target /

Recovery Manager: Release 10.2.0.1.0 - Production on Wed Sep 18 09:02:02 2013

Copyright (c) 1982, 2005, Oracle.  All rights reserved.

connected to target database: orcl (not mounted)

--设置dbid(与源库保持一致，如果与源库不同，则会无法恢复，后面再演示)
RMAN> set dbid=1354163930

executing command: SET DBID

--还原控制文件
RMAN> restore controlfile from '/u02/backup/ctl_20130918_0cok56kv_1_1.bak';

Starting restore at 18-SEP-13
using target database control file instead of recovery catalog
allocated channel: ORA_DISK_1
channel ORA_DISK_1: sid=155 devtype=DISK

channel ORA_DISK_1: restoring control file
channel ORA_DISK_1: restore complete, elapsed time: 00:00:02
output filename=/u02/oradata/orcl/control01.ctl
output filename=/u02/oradata/orcl/control02.ctl
output filename=/u02/oradata/orcl/control03.ctl
Finished restore at 18-SEP-13

--打开数据库到mount状态
RMAN> alter database mount;

database mounted
released channel: ORA_DISK_1

--还原数据库
RMAN> restore database;

Starting restore at 18-SEP-13
Starting implicit crosscheck backup at 18-SEP-13
allocated channel: ORA_DISK_1
channel ORA_DISK_1: sid=155 devtype=DISK
Crosschecked 11 objects
Finished implicit crosscheck backup at 18-SEP-13

Starting implicit crosscheck copy at 18-SEP-13
using channel ORA_DISK_1
Finished implicit crosscheck copy at 18-SEP-13

searching for all files in the recovery area
cataloging files...
no files cataloged

using channel ORA_DISK_1

channel ORA_DISK_1: starting datafile backupset restore
channel ORA_DISK_1: specifying datafile(s) to restore from backup set
restoring datafile 00001 to /u02/oradata/orcl/system01.dbf
restoring datafile 00002 to /u02/oradata/orcl/undotbs01.dbf
restoring datafile 00003 to /u02/oradata/orcl/sysaux01.dbf
restoring datafile 00004 to /u02/oradata/orcl/users01.dbf
restoring datafile 00005 to /u02/oradata/orcl/app01.dbf
channel ORA_DISK_1: reading from backup piece /u02/backup/dbf_20130918_09ok56i6_1_1.bak
channel ORA_DISK_1: restored backup piece 1
piece handle=/u02/backup/dbf_20130918_09ok56i6_1_1.bak tag=TAG20130918T090054
channel ORA_DISK_1: restore complete, elapsed time: 00:00:45
Finished restore at 18-SEP-13

--恢复数据库
RMAN> recover database;

Starting recover at 18-SEP-13
using channel ORA_DISK_1

starting media recovery

channel ORA_DISK_1: starting archive log restore to default destination
channel ORA_DISK_1: restoring archive log
archive log thread=1 sequence=35
channel ORA_DISK_1: restoring archive log
archive log thread=1 sequence=36
channel ORA_DISK_1: reading from backup piece /u02/backup/arc_20130918_0bok56kj_1_1.bak
channel ORA_DISK_1: restored backup piece 1
piece handle=/u02/backup/arc_20130918_0bok56kj_1_1.bak tag=TAG20130918T090211
channel ORA_DISK_1: restore complete, elapsed time: 00:00:01
archive log filename=/u02/archivelog/1_35_826383194.dbf thread=1 sequence=35
archive log filename=/u02/archivelog/1_36_826383194.dbf thread=1 sequence=36
unable to find archive log
archive log thread=1 sequence=37
RMAN-00571: ===========================================================
RMAN-00569: =============== ERROR MESSAGE STACK FOLLOWS ===============
RMAN-00571: ===========================================================
RMAN-03002: failure of recover command at 09/18/2013 09:05:45
RMAN-06054: media recovery requesting unknown log: thread 1 seq 37 lowscn 372817
--注：此处报错属于正常现象，因为前面创建的备份非一致性备份

--打开数据库
RMAN> alter database open resetlogs;

database opened

--注：至此，恢复完成。
```

下面演示目标库的dbid与原始库的dbid设置的不一致所出现的问题
``` sql
--关闭数据库
SQL> shutdown immediate;
Database closed.
Database dismounted.
ORACLE instance shut down.

--打开数据库到nomount状态
SQL> startup nomount;
ORACLE instance started.

Total System Global Area  734003200 bytes
Fixed Size      1221564 bytes
Variable Size    213912644 bytes
Database Buffers   515899392 bytes
Redo Buffers      2969600 bytes

--rman
[oracle@db02 bdump]$ rman target /

Recovery Manager: Release 10.2.0.1.0 - Production on Wed Sep 18 09:10:37 2013

Copyright (c) 1982, 2005, Oracle.  All rights reserved.

connected to target database: orcl (not mounted)

--设置dbid
RMAN> set dbid=546330155

executing command: SET DBID

--还原控制文件
RMAN> restore controlfile from '/u02/backup/ctl_20130918_0cok56kv_1_1.bak';

Starting restore at 18-SEP-13
using target database control file instead of recovery catalog
allocated channel: ORA_DISK_1
channel ORA_DISK_1: sid=155 devtype=DISK

channel ORA_DISK_1: restoring control file
channel ORA_DISK_1: restore complete, elapsed time: 00:00:01
output filename=/u02/oradata/orcl/control01.ctl
output filename=/u02/oradata/orcl/control02.ctl
output filename=/u02/oradata/orcl/control03.ctl
Finished restore at 18-SEP-13

--打开数据库到mount状态
RMAN> alter database mount;

database mounted
released channel: ORA_DISK_1

RMAN> restore database;

Starting restore at 18-SEP-13
Starting implicit crosscheck backup at 18-SEP-13
RMAN-00571: ===========================================================
RMAN-00569: =============== ERROR MESSAGE STACK FOLLOWS ===============
RMAN-00571: ===========================================================
RMAN-03002: failure of restore command at 09/18/2013 09:12:30
RMAN-12010: automatic channel allocation initialization failed
RMAN-06189: current DBID 546330155 does not match target mounted database (1354163930)
--注：这里还原数据库的时候报错。
```





