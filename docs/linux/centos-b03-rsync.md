---
autoGroup-2: 常用脚本
title: 异机备份
---
### 异机备份脚本
这个是我在实际生产环境中，帮助客户备份文件夹的一个脚本，用起来很爽，没什么问题

当然并不适用于数据库级的文件备份哈，只适用于静态资源备份

两个.sh文件

第一个daily_bak_part1.sh

该脚本用于rsync方式增量同步，而不是scp方式，所以用这种方式可以一天多次同步备份
``` bash
#!/usr/bin/expect -f
set password yourserverpassword
spawn rsync -a -H -v -e "ssh -p 22" --progress --stats root@10.10.10.10:/server/content /backup/daily_backup/content
set timeout 300
expect "root@10.10.10.10's password:"
set timeout 300
send "$password\r"
set timeout 21600
send "exit\r"
expect eof
```

第二个daily_bak_part2.sh

该脚本用于确认备份集保留数，目前ReservedNum=7 代表保留7天
``` bash
!/bin/bash

basepath='/backup/daily_backup'

#find $basepath -name "content" | while read file
#do
date=$(date +%Y%m%d)
cd ${basepath}
mv content content${date}
#done

ReservedNum=7
rm_file_dir='/backup/daily_backup'
cd $rm_file_dir
RootDir='/backup/daily_backup'
FileNum=$(ls -l |grep -v total |grep content|wc -l)
OldFile=$(ls -rt |head -1)
if [ $RootDir == $rm_file_dir ];then
    echo $RootDir
    echo $rm_file_dir
    while (($FileNum>$ReservedNum))
    do
    echo "Delete File:"$RootDir'/'$OldFile
    rm -rf $RootDir'/'$OldFile
    let "FileNum--"
    OldFile=$(ls -rt |grep -v total|grep content|head -1)
    done
else
    echo "error file path "
fi
```

然后在crontab里加两句

每天01:00、04:00、12:00、17:00这几个时间同步生产服务器文件系统

每天05:00执行一下重命名保留脚本

当然，这个执行频率需要根据你实际的使用量和磁盘大小来决定
``` bash
#BackUp Script
0 1,4,12,17 * * * /bb/daily_bak_part1.sh
0 5 * * * /bb/daily_bak_part2.sh
```