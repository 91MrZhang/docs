---
title: cut
---
### cut 命令
#### 查看CPU信息的命令
之前的查看系统信息中，我们有这样一条命令
``` bash
cat /proc/cpuinfo | grep name | cut -f2 -d: | uniq -c
```
我们一步一步看一下结果
``` bash
cat /proc/cpuinfo
```
``` bash
[root@xxxx zyttest]# cat /proc/cpuinfo
processor	: 0
vendor_id	: GenuineIntel
cpu family	: 6
model		: 85
model name	: Intel(R) Xeon(R) Platinum 8163 CPU @ 2.50GHz
stepping	: 4
cpu MHz		: 2500.002
cache size	: 33792 KB
physical id	: 0
siblings	: 8
core id		: 0
cpu cores	: 4
apicid		: 0
initial apicid	: 0
fpu		: yes
fpu_exception	: yes
cpuid level	: 13
wp		: yes
flags		: fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ss ht syscall nx pdpe1gb rdtscp lm constant_tsc rep_good unfair_spinlock pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand hypervisor lahf_lm abm 3dnowprefetch xsaveopt fsgsbase bmi1 hle avx2 smep bmi2 erms invpcid rtm
bogomips	: 5000.00
clflush size	: 64
cache_alignment	: 64
address sizes	: 46 bits physical, 48 bits virtual
power management:

processor	: 1
vendor_id	: GenuineIntel
cpu family	: 6
model		: 85
model name	: Intel(R) Xeon(R) Platinum 8163 CPU @ 2.50GHz
stepping	: 4
cpu MHz		: 2500.002
cache size	: 33792 KB
physical id	: 0
siblings	: 8
core id		: 0
cpu cores	: 4
apicid		: 1
initial apicid	: 1
fpu		: yes
fpu_exception	: yes
cpuid level	: 13
wp		: yes
flags		: fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ss ht syscall nx pdpe1gb rdtscp lm constant_tsc rep_good unfair_spinlock pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand hypervisor lahf_lm abm 3dnowprefetch xsaveopt fsgsbase bmi1 hle avx2 smep bmi2 erms invpcid rtm
bogomips	: 5000.00
clflush size	: 64
cache_alignment	: 64
address sizes	: 46 bits physical, 48 bits virtual
power management:
·······
```

返回的就是所有CPU的状态信息

加上之前讲过的grep之后
``` bash
cat /proc/cpuinfo | grep name
```
很明显，每一行只有包含name被过滤出来了
``` bash
[root@xxxx zyttest]# cat /proc/cpuinfo | grep name
model name	: Intel(R) Xeon(R) Platinum 8163 CPU @ 2.50GHz
model name	: Intel(R) Xeon(R) Platinum 8163 CPU @ 2.50GHz
model name	: Intel(R) Xeon(R) Platinum 8163 CPU @ 2.50GHz
model name	: Intel(R) Xeon(R) Platinum 8163 CPU @ 2.50GHz
model name	: Intel(R) Xeon(R) Platinum 8163 CPU @ 2.50GHz
model name	: Intel(R) Xeon(R) Platinum 8163 CPU @ 2.50GHz
model name	: Intel(R) Xeon(R) Platinum 8163 CPU @ 2.50GHz
model name	: Intel(R) Xeon(R) Platinum 8163 CPU @ 2.50GHz
[root@xxxx zyttest]# 
```

之前还讲过，与条件实际上是加一个|，所以加上cut试试
``` bash
cat /proc/cpuinfo | grep name | cut -f2 -d: 
```
很明显【model name	】被cut掉了
```
[root@xxxx zyttest]# cat /proc/cpuinfo | grep name | cut -f2 -d: 
 Intel(R) Xeon(R) Platinum 8163 CPU @ 2.50GHz
 Intel(R) Xeon(R) Platinum 8163 CPU @ 2.50GHz
 Intel(R) Xeon(R) Platinum 8163 CPU @ 2.50GHz
 Intel(R) Xeon(R) Platinum 8163 CPU @ 2.50GHz
 Intel(R) Xeon(R) Platinum 8163 CPU @ 2.50GHz
 Intel(R) Xeon(R) Platinum 8163 CPU @ 2.50GHz
 Intel(R) Xeon(R) Platinum 8163 CPU @ 2.50GHz
 Intel(R) Xeon(R) Platinum 8163 CPU @ 2.50GHz
[root@xxxx zyttest]# 
```

那我们试试
``` bash
cat /proc/cpuinfo | grep name | cut -f1 -d: 
```
``` bash
[root@xxxx zyttest]# cat /proc/cpuinfo | grep name | cut -f1 -d: 
model name	
model name	
model name	
model name	
model name	
model name	
model name	
model name	
[root@xxxx zyttest]# 
```

根据上面的结果，可以简单得出 cut命令中 -f -d是怎么用的了

【-d:】中的【:】，指的是【model name	: Intel(R) Xeon(R) Platinum 8163 CPU @ 2.50GHz】这一行，按【:】分割

【-f1】指的就是按【:】分割后，取第一列，【-f2】指的就是取第二列

#### cut其他参数

除了-f -d分割的方式之外，

还可以有其他的cut方式，但是我一般用这个用的多一些，其余的就先不记了
