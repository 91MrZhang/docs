---
title: 递归查询
---
### 表结构
course_contents
| pk1            |parent_pk1                                      |data                    | 
| ------------- |:------------------------------------------------|:----------------------:|
| 1             | null                                            |祖菜单                  |
| 2             | 1                                               |父菜单                  |
| 3             | 2                                               |子菜单                  |

### 递归SQL
``` sql
select pk1 from (
select pk1,parent_pk1 from course_contents
start with pk1 = 21971 connect by pk1 = prior parent_pk1) where parent_pk1 is null;
```

### 创建一个可以直接找到根PK的FUNCTION
``` sql
create or replace FUNCTION get_content_root_pk1(
child_pk1 IN NUMBER
)
RETURN NUMBER
IS
v_child_pk1 NUMBER;
v_root_pk1 NUMBER;
BEGIN

v_child_pk1 := child_pk1;
select pk1 into v_root_pk1 from (
select pk1,parent_pk1 from course_contents
start with pk1 = v_child_pk1 connect by pk1 = prior parent_pk1) where parent_pk1 is null;
return  v_root_pk1;
END;

```