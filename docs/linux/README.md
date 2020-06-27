---
title: 前言
---
### 前言
::: warning 注意
Linux不同版本的命令有一定的差异，我这个只针对6版本

因为我们这的服务器，基本都装6版本的CentOS和Redhat，如果哪条神秘代码不好使了，我就不管了哈 :sunglasses:

:::
### 工具
我用windows哈，这里推荐几个我常用的ssh工具

<img :src="$withBase('/assets/img/centos/cs-001.png')"  width="805" height="177">

1、这几个除了SecureCRT，我都喜欢，SecureCRT其实也挺好使，但是很难破解激活

2、XStart、XFtp、XSheel是一家的，比较好破解，我比较喜欢他们，XStart可以百度搜一下，ssh时图形化用的，服务器上有什么软件命令行安装太麻烦的话，可以通过这个Xstart装

3、putty很精巧，一般堡垒机都用putty启动，其他的ssh工具，经常由于各种版本问题启动失败

4、SshClient.exe是绿色版的，缺点就是缺乏对中文的支持（至少我一直没搞定）

### 基础命令
我个人觉得像我这种菜狗程序员，以下命令玩得转，基本就可以应付绝大多数工作了，毕竟复杂的命令和脚本有专门的运维大哥去弄:sunglasses:
| No            |Command                                        |What                     | 
| ------------- |:---------------------------------------------:|:-----------------------:|
| 1             | yum、rpm                                      |装软件的                  |
| 2             | mkdir、rm、cd、cp、scp、mv                     |文件复制粘贴移动删除       |
| 3             | vi、more、tail                                |看配置文件或者看日志的      |
| 4             | cd、ll、pwd、clear                            |路径查看                   |
| 5             | chown、chmod                                  |权限                      |
| 6             | grep                                          |查找                      |
| 7             | ifconfig、iptabls、ping、telnet、tracert       |网络                      |
| 8             | top、free                                     |资源占用                   |
| 9             | du、df、mount                                 |分区、挂载                 |
| 10            | init、reboot                                  |关机重启                  |

