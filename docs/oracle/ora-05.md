---
title: 存储过程及函数的模板
---
### 存储过程DEMO
``` sql
create or replace procedure acc_xx_pro 
 as 
 v_date_format varchar2(50);
 v_this_day varchar2(50);
 v_create_table varchar2(500);
 v_insert_data varchar2(300);
begin  
    select to_char(sysdate-1,'yyyyMMdd') into v_date_format from dual;

    v_this_day:='acc_xx'||v_date_format;

    v_create_table:='CREATE TABLE '||v_this_day||' (
	 PK1      NUMBER(38)  NOT NULL,
	 EVENT_TYPE   VARCHAR2(30)  NOT NULL,
	 HANDLE  VARCHAR2(255),
	 STATUS      NUMBER,
	 SESSION_ID NUMBER(38)
	)';
    begin
    execute immediate v_create_table;
   v_insert_data:='insert into '||v_this_day||'   select * from acc_xx where timestamp>=trunc(sysdate-1) and timestamp<trunc(sysdate)';
    execute immediate v_insert_data;
   end;
   commit;
end;

```
### 函数DEMO
``` sql
create or replace FUNCTION get_cn_name(
   table_name IN varchar2 := NULL
)
RETURN varchar2
IS
   v_table_name VARCHAR2(32);
BEGIN
   v_table_name := upper(table_name);

   IF (v_table_name = 'TABLE_ONE') THEN
      return ('one');
   ELSIF (v_table_name = 'TABLE_TWO') THEN
      return ('two');
   ELSIF (v_table_name = 'TABLE_THREE') THEN
      return (NULL);
   ELSIF (v_table_name LIKE 'TABLE_FOUR' ) THEN
      return (NULL);          
   END IF;
   return ('other');
END;
```
### 带游标的DEMNO（隐式游标）
``` sql
DECLARE
 CURSOR emp_cursor IS
 SELECT employee_id, last_name FROM employees
 WHERE department_id = 50;
BEGIN
 FOR v_emp_record IN emp_cursor
 LOOP
 DBMS_OUTPUT.PUT_LINE(v_emp_record.employee_id|| ' ' ||v_emp_record.last_name);
 END LOOP;
END;
```
::: warning 注意

有了这几个模板，基本上什么存储过程都能照葫芦画瓢了

:::
