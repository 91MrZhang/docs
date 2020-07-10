---
title: curl、wget
---
curl和wget都是常用的http工具，但是wget一般偏向于下载方向，curl一般偏向于http测试方向,因为curl命令可以携带的参数很多
### wget
断点续传
``` bash
wget -c http://www.heihei.com/SDDE-222.avi
```

### curl
响应一个网站
``` bash
curl -k https://www.baidu.com
```
