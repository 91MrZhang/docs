---
title: JOB
---
::: warning JOB
建一个JOB可以定时帮我们执行写好的存储过程，例如每天跑一跑统计数据，从将日志访问类信息从主表向从表转移等
::: 

建一个每天3点钟开始执行的JOB
``` sql
variable job2 number;
begin                
sys.dbms_job.submit(:job2,'你的存储过程;',sysdate,'TRUNC(SYSDATE + 1) + 3/24');
end;

```

删除一个JOB
``` sql
begin
 dbms_job.remove(70);
end;
```


默认情况JOB执行时，如果失败16次以上，就会停止工作，需要手动处理