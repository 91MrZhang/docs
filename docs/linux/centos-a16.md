---
title: sar
---
### sar 命令
经常会听见运维的同事来一句 "sar" 一下

sar命令是操作系统级别比较实用的监控命令

不过这个sar命令参数就太多了，网上一搜一堆，

随便抄一下自己常用的几个

``` bash
-A：所有报告的总和。
-u：CPU利用率
-v：进程、I节点、文件和锁表状态。
-d：硬盘使用报告。
-r：没有使用的内存页面和硬盘块。
-g：串口I/O的情况。
-b：缓冲区使用情况。
-a：文件读写情况。
-c：系统调用情况。
-R：进程的活动情况。
-y：终端设备活动情况。
-w：系统交换活动。 例一：使用命令行 sar -u t n
```

虽然现在一般都用云服务器或者虚拟机，它们外部都有图形化的仪表盘，监控网卡，CPU，磁盘IO等

但遇到一些在机房的老物理机，或者注重安全的自部署客户，

再或者在高峰期间，进行一些细时间粒度的分析，需要出一些报告的话，

这个命令会派上用场
