(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{555:function(a,s,t){"use strict";t.r(s);var e=t(27),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("通用性")]),a._v(" "),t("p",[a._v("Rman备份及恢复的特点我就不介绍了")]),a._v(" "),t("p",[a._v("如果你们公司的数据量每天不超过100G并且磁盘IO还可以的话,那么用我这个脚本是完全够用的")])]),a._v(" "),t("h3",{attrs:{id:"准备工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[a._v("#")]),a._v(" 准备工作")]),a._v(" "),t("p",[a._v("RMAN备份，首先要开归档（归档模式）之后才能做RMAN备份，一般默认都是关闭的")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SQL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" archive log list"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("Database")]),a._v(" log "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("mode")]),a._v("              "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("No")]),a._v(" Archive "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("Mode")]),a._v("\nAutomatic archival             Disabled\nArchive destination            USE_DB_RECOVERY_FILE_DEST\nOldest online log sequence     "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("Current")]),a._v(" log sequence           "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SQL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" \n")])])]),t("p",[a._v("再建几个文件夹")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@sdb ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# mkdir /sdata/")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@sdb ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# chown -R oracle:oinstall /sdata/")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("oracle@sdb sdata"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" logs\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("oracle@sdb sdata"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" arch\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("oracle@sdb sdata"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" backup\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("oracle@sdb sdata"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" bin\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("oracle@sdb sdata"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v("\narch  backup  bin  logs\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("oracle@sdb sdata"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ \n")])])]),t("h3",{attrs:{id:"开启归档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启归档"}},[a._v("#")]),a._v(" 开启归档")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("alter")]),a._v(" system "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("set")]),a._v(" log_archive_dest_1"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'location=/sdata/arch'")]),a._v(" scope"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("both"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("shutdown")]),a._v(" immediate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("  \nstartup mount"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("   \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("alter")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("database")]),a._v(" archivelog"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("alter")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("database")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("open")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\narchive log list"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SQL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" archive log list"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("Database")]),a._v(" log "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("mode")]),a._v("              Archive "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("Mode")]),a._v("\nAutomatic archival             Enabled\nArchive destination            "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("sdata"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("arch\nOldest online log sequence     "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("Next")]),a._v(" log sequence "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("to")]),a._v(" archive   "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("Current")]),a._v(" log sequence           "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SQL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" \n")])])]),t("p",[a._v("查询以确定数据库位于archivelog模式中且归档过程正在运行")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" log_mode "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" v$"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("database")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("  \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" archiver "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" v$instance"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("  \n")])])]),t("p",[a._v("日志切换 (这一句的目的是，确保你未来产生的日志文件都发生在你刚刚建好的文件夹里)")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("alter")]),a._v(" system switch logfile"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("  \n")])])]),t("h3",{attrs:{id:"rman备份"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rman备份"}},[a._v("#")]),a._v(" RMAN备份")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vi")]),a._v(" /sdata/bin/rman_backup_lev0.sh                 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("级备份脚本\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/usr/bin/bash")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("  /home/oracle/.bash_profile\nrman nocatalog target  /  msglog /sdata/logs/rman_backup_"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" +%Y%m%d"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(".log "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("EOF \nCONFIGURE RETENTION POLICY TO REDUNDANCY 2;\nrun {\nallocate channel dev1 type disk maxpiecesize=6G;\nallocate channel dev2 type disk maxpiecesize=6G;\n\nbackup as compressed backupset \nincremental level=0\ndatabase format '/sdata/backup/inc0_%d_%T_%U' tag='inc0' include current controlfile;\nsql \"alter system archive log current\";\nchange archivelog all crosscheck;\nbackup as compressed backupset \narchivelog all format '/sdata/backup/arch_%d_%T_%U' tag='bakarch';\ndelete noprompt archivelog until time 'sysdate-3' all;\n\nbackup as compressed backupset\nformat='/sdata/backup/ctlbak_%s_%p_%T_%d.ctl'\ntag='bkctl'\ncurrent controlfile reuse;\nbackup spfile format='/sdata/backup/spfilebak_%s_%p_%T_%d';\nCROSSCHECK BACKUP;\ndelete noprompt obsolete;\n\nrelease channel dev1;\nrelease channel dev2;\n}\nexit;\nEOF")]),a._v("\n")])])]),t("p",[a._v("给脚本赋权限：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("oracle@sdb bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" +x rman_backup_lev0.sh \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("oracle@sdb bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" -rlt\ntotal "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v("\n-rwxr-xr-x. "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" oracle oinstall "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("929")]),a._v(" Jan "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("16")]),a._v(" 08:29 rman_backup_lev0.sh\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("oracle@sdb bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ \n")])])]),t("h3",{attrs:{id:"定时任务（用oracle用户建）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定时任务（用oracle用户建）"}},[a._v("#")]),a._v(" 定时任务（用oracle用户建）")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("crontab")]),a._v(" -e\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("35")]),a._v(" 08 * * *     "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v(" /sdata/bin/rman_backup_lev0.sh  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/dev/null "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("2")]),a._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("&1")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#RMAN Backup")]),a._v("\n")])])]),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[a._v("注意")]),a._v(" "),t("p",[a._v("1、不要有明显报错“RMAN-”,“FAILED”,“ERROR”,“ORA-”")]),a._v(" "),t("p",[a._v("2、CONFIGURE RETENTION POLICY TO REDUNDANCY 2; 指的是备份两份结果，如果往大了改,要注意arch、backup的空间使用率，不要超过40%")]),a._v(" "),t("p",[a._v("3、定时任务尽量业务不繁忙时做。因为rman这套东西备份起来很吃IO")])])])}),[],!1,null,null,null);s.default=n.exports}}]);