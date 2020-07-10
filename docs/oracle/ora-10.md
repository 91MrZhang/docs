---
title: AWR报告
---
### 什么是AWR？

这个东西百度一搜就一堆啦,简单来说就是Oracle的监控报告,能把一段时间内的SQL执行情况反应给你,让你自行分析

1、比如数据库莫名其妙总是连接溢出,是哪条SQL导致的？

2、运行一段时间后,看一看哪些SQL吃资源?

### 导出AWR报告
使用Sqlplus连接Oracle实例（SID_NAME用实际实例名称替换）
``` sql
$ORACLE_SID=SID_NAME
$export ORACLE_SID
$sqlplus / as sysdba
SQL>
```
运行$ORACLE_HOME/rdbms/admin/awrrpt.sql脚本，产生AWR报告。
``` sql
SQL> @?/rdbms/admin/awrrpt.sql

Current Instance
~~~~~~~~~~~~~~~~

   DB Id    DB Name      Inst Num Instance
----------- ------------ -------- ------------
2474782443 MOON                1 MOON


Specify the Report Type
~~~~~~~~~~~~~~~~~~~~~~~
Would you like an HTML report, or a plain text report?
Enter 'html' for an HTML report, or 'text' for plain text
Defaults to 'html
输入报告文件类型（html或者text）
[code]Enter value for report_type: [b][i]html[/i][/b]

Type Specified:                  html


Instances in this Workload Repository schema
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   DB Id     Inst Num DB Name      Instance     Host
------------ -------- ------------ ------------ ------------
* 2474782443        1 MOON         MOON         racdb2

Using 2474782443 for database Id
Using          1 for instance number


Specify the number of days of snapshots to choose from
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Entering the number of days (n) will result in the most recent
(n) days of snapshots being listed.  Pressing <return> without
specifying a number lists all completed snapshots.
```
输入需要收集几天内的AWR信息
``` sql
Enter value for num_days:

Listing the last day's Completed Snapshots

                                                        Snap
Instance     DB Name        Snap Id    Snap Started    Level
------------ ------------ --------- ------------------ -----
MOON         MOON                54 17 62010 09:3     1
                                    9
                                 55 17 62010 11:0     1
                                    0
                                 56 17 62010 12:0     1
                                    0
                                 57 17 62010 13:0     1
                                    0

                                 58 17 62010 16:5     1
                                    0
                                 59 17 62010 18:0     1
                                    0

Specify the Begin and End Snapshot Ids
```
根据以上列出的快照号（SNAP ID）和快照时间，选择需要的分析的快照信息（begin_snap和end_snap）
``` sql
Enter value for begin_snap:54
Begin Snapshot Id specified: 54
```

选择结束快照号
``` sql
Enter value for end_snap:57
End   Snapshot Id specified: 57
```

``` sql
Specify the Report Name
~~~~~~~~~~~~~~~~~~~~~~~
The default report file name is awrrpt_1_54_57.html.  To use this name,
press <return> to continue, otherwise enter an alternative.
```

输入生成报告的文件名称
``` sql
Enter value for report_name:?/awrrpt.html
```


生成的文件位于$ORACLE_HOME目录,使用ftp或者sftp工具将该文件下载到本地硬盘，进行分析。