---
title: 存储过程及函数模板
---

这里保存两个模板，业务实际需要时拿来就能用
``` sql
CREATE PROCEDURE [dbo].[procProcTemplete]
(
	@a INT, -- 入参
	@b INT OUTPUT --出参
)
AS
BEGIN
	SET NOCOUNT ON;

	--变量定义
	--计算过程执行时长
	DECLARE @starttime DATETIME
	DECLARE @totaltime INT
	--流程控制(成功失败)
	DECLARE @Result INT
	--执行影响行数
	DECLARE @ROW INT
	--错误日志
	DECLARE @ErrorMessage VARCHAR(1000)

	--变量赋值
	SET @starttime = GETDATE()
	SET @Result = 0
	
	--创建临时表
	CREATE TABLE #tmp_aa
	(Id INT,
	 Value VARCHAR(50))

	 --处理临时表数据
	 INSERT INTO #tmp_aa
	         ( Id, Value )
	 VALUES  ( 0, -- Id - int
	           'AAA'  -- Value - varchar(50)
	           )

	 --开启事务
	 BEGIN TRAN
	 BEGIN TRY

	 --计算逻辑
	 IF EXISTS(SELECT 1 FROM #tmp_aa
	 WHERE Id = @a)
	 BEGIN 

	 SET @b = 1
	 SET @Result = 0
	 SET @ROW = @@ROWCOUNT
	 
	 END	
	 ELSE 
	 BEGIN 
	 SET @Result = 1
	 END

	 --计算总时长
	 SET @totaltime=datediff(second,@starttime,getdate());

	 END TRY
	 BEGIN CATCH

	IF @@TRANCOUNT > 0
	BEGIN
		ROLLBACK TRAN
	SELECT @ErrorMessage='操作发生异常:'+CAST(ERROR_NUMBER() AS VARCHAR)+','+ERROR_MESSAGE(),@Result = -1
	END

	END CATCH

	IF @@TRANCOUNT > 0 AND @Result = 0
	BEGIN
		COMMIT TRAN;
	END

	IF @@TRANCOUNT > 0 AND @Result <> 0
	BEGIN
		ROLLBACK TRAN;
	END

	--SELECT @b AS b;

	--删除临时表
	IF EXISTS(SELECT * FROM tempdb..sysobjects WHERE id=OBJECT_ID('tempdb..#tmp_aa'))
	BEGIN
	DROP TABLE #tmp_aa
	END

	--记录日志
	INSERT INTO tb_SYSLOGS(Logger,Logtime,LogIP,Logname,LogTotalTime,LevelCode,Message,LogSQL)
	SELECT 'Templete',GETDATE(),'::1','sa',@totaltime,'procProcTemplete','','影响行数' + CAST(@ROW AS VARCHAR(10)) + ',' + @ErrorMessage;

	END
```

简短一点的
``` sql
--课程 公告信息
if object_id('provide_announcements_info') is not null
drop proc provide_announcements_info
go
create proc provide_announcements_info
as
begin
	delete from announcements_info
	insert into announcements_info(
			announcementid,--课程公告 id，不能为空和重复
			title,--课程公告名称，不能为空
			launchCourseid,--选课 id，不能为空
			description,--课程简介
			creatorid,--课程公告发布 userid，不能为空
			createdtime,--时间格式：2009-11-26 13：17：35，不能为空
			modifiedtime--时间格式：2009-11-26 13：17：35，不能为空
	)
	select distinct
		pk1,
		isnull(subject,'') as subject,
		isnull(crsmain_pk1,'') as crsmain_pk1,
		isnull(announcement,'') as announcement,
		isnull(users_pk1,'') as users_pk1,
		isnull(dtcreated,'') as dtcreated,
		isnull(dtmodified,'') as dtmodified
	from
		anno
	where crsmain_pk1 in (123,456,789) 
end


```