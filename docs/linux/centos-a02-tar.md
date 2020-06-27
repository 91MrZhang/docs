---
title: tar
---
### tar
::: tip tar
打包这个命令，总是复制粘贴，始终记不牢
:::
#### 打包
把mubiao这个文件夹，打包成mubiao.tar
``` bash
tar -cvf mubiao.tar mubiao
```
把file1 file2 dir1，打包成123.tar
``` bash
tar -cvf 123.tar file1 file2 dir1
```
压缩打包，酌情使用，一般也就文本类的压缩率高一些，并且这种打包很费时间

把aaa.txt   bbb.txt   ccc.txt

打包压缩为一个名叫xxx.tar.gz 压缩包

``` bash
tar -zcvf xxx.tar.gz aaa.txt bbb.txt ccc.txt
```
#### 解包
普通解
``` bash
tar -xvf mubiao.tar
```
压缩包解包
``` bash
tar -zxvf apache-tomcat-7.0.75.tar.gz 
```