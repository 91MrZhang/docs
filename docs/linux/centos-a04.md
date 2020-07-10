---
title: rsync
---
### rsync
#### rsync同步
碎文件、大文件使用这个命令可以断了续，续了断，比cp强一些

服务器上做增量备份，实际上多数都用这个，我记得cp -u好像也只拷贝更新文件，但还是这个最好使

其余参数网上搜即可

注意一下带/和不带/有一点区别


``` bash
rsync -a -H -v --progress --stats /soft1/database /soft2
```

``` bash
rsync -a -H -v --progress --stats /soft1/database/ /soft2
```

第一个是把database这个文件夹，搬到了soft2

第二个是把database这个文件夹下的内容，搬到了soft2

在生产平台使用之前，最好先在本地好好同步一下，试试

#### rsync远程同步
``` bash
rsync -a -H -v --progress --stats  root@1.2.3.4:/home/www/test2   /soft2
```
这样传输细碎文件的话，如果断了，在执行一次这个命令，还会接着传