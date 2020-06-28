---
autoGroup-2: 常用脚本
title: Oracle静默安装脚本
---
### Oracle静默安装脚本
在Linux非图形化界面上，安装Oracle是一个比较麻烦的事，步骤多，参数多

这份脚本按照脚本要求的路径放置11G的安装包，就可以一键静默安装了，还是比较爽的

oracle11_auto_install.sh
``` bash
#!/bin/sh
echo $(ifconfig |awk 'NR==2{split($2,a,":");print a[2]}') $(cat /etc/sysconfig/network | awk 'NR==2{split($1,a,"=");print a[2]}') >> /etc/hosts

set oraclesoftware
set oraclebase
oraclebase=/home/u01/oracle/


unzip p13390677_112040_Linux-x86-64_1of7.zip
unzip p13390677_112040_Linux-x86-64_2of7.zip
oraclesoftware=$(pwd | awk 'NR==1{print $1}')

#########################################
#yum install rpm 
########################################
count=0
arr=( binutils-2* compat-libstdc++-33* elfutils-libelf-0.* elfutils-libelf-devel-0.* elfutils-libelf-devel-static-0.* gcc-4.* gcc-c++-4* glibc-2.* glibc-common-2.* glibc-devel-2.* glibc-headers-2* kernel-headers-2.* ksh-* libaio-0.* libaio-devel-0.* libgcc-4.* libgomp-4.* libstdc++-4.* libstdc++-devel-* make-* numactl-devel-* sysstat-* )
len=${#arr[@]}
for((i=0;i<len;i++));
do
        char=${arr[$i]}
        rpm -qa | grep "^$char"
        if [ $? != 0 ] ; then
                error[$count]=${arr[$i]}
                count=$(($count+1))
                echo "+++++++++++++++the ${arr[$i]}^is not installed++++++++++++++++++"
                yum install -y ${arr[$i]}
        fi
done
if [ $count -lt "0" ];then
        echo "You have $count patchs are not installed."
        echo "the not installed patch is:"
len1=${#error[@]}
        for((ii=0;ii<len1;ii++));
        do
                echo "${error[$ii]}^"
        done
        echo -e  "Are you sure to install the patch[yes or no]:\c"
        read select
        if [ $select == "yes" ]; then
                for((is=0;is<len1;is++));
                do
                        var=${error[$is]}
                        yum install -y  ./patch/$var.rpm
                done
        fi
else
        echo "++++++++++++++++++++++CHECK PASS!+++++++++++++++++++++++++++"
fi
count=0

rpm -q  binutils compat-libstdc++-33 elfutils-libelf elfutils-libelf-devel expat gcc gcc-c++ glibc glibc-common glibc-devel glibc-headers libaio libaio-devel libgcc libstdc++ libstdc++-devel make pdksh sysstat  unixODBC unixODBC-devel | grep "not installed"

#############################################
# configure all oracle parameter
############################################


# A script to prepare for the enviornment for oracle installation.

# create oracle users and groups

/usr/sbin/groupadd -g 600 oinstall
/usr/sbin/groupadd -g 650 dba
/usr/sbin/useradd -g oinstall -G dba -u 600 oracle

# create oracle installation directory

mkdir -p $oraclebase
cd $oraclebase
cd ..
mkdir oraInventory
chown -R oracle:oinstall *
cd oraInventory
oraInv=$(pwd | awk 'NR==1{print $1}')
#chown -R oracle:oinstall $oraclebase
chmod -R 755 $oraclebase

export ORACLE_BASE=$oraclebase
export ORACLE_SID=orcl

# modify kernel parameters

cat << "EOFSYSCTL" >> /etc/sysctl.conf

#added by oracle installation
kernel.shmall = 4194304
kernel.shmmax = 4294967295
kernel.shmmni = 4096
kernel.sem = 250 32000 100 128
net.ipv4.ip_local_port_range = 9000 65000
net.core.rmem_default = 262144
net.core.rmem_max = 262144
net.core.wmem_default = 262144
net.core.wmem_max = 262144
EOFSYSCTL

sysctl -p

cat << "EOFLIMITS" >> /etc/security/limits.conf

#added by oracle installation
oracle              soft    nproc   2047
oracle              hard    nproc   16384
oracle              soft    nofile  1024
oracle              hard    nofile  65536
EOFLIMITS

# modify /etc/pam.d/login
cat << "EOFPAM" >> /etc/pam.d/login

#added by oracle installation
session    required     pam_limits.so
EOFPAM

# modify /etc/oraInst.loc
#cat << "EOFLOC" >> /etc/oraInst.loc

#added by oracle installation
#inventory_loc=/u01/oraInventory
#inst_group=oinstall
#EOFLOC

#chown oracle:oinstall /etc/oraInst.loc
#chmod 664 /etc/oraInst.loc

# modify /etc/profile
cat << "EOFPROFILE" >> /etc/profile

#added by oracle installation ...
if [ $USER = "oracle" ]; then
        if [ $SHELL = "/bin/ksh" ]; then
              ulimit -p 16384
              ulimit -n 65536
        else
              ulimit -u 16384 -n 65536
        fi
fi
EOFPROFILE

# modify oracle bash profile /home/oracle/.bash_profile

oracle_T=product/11.2.0/db_1
#cat << "EOFBASH" >> /home/oracle/.bash_profile

echo "#added by oracle installation" >> /home/oracle/.bash_profile
#echo ORACLE_BASE=$oraclebase >> /home/oracle/.bash_profile
#oracle_T=product/11.2.0/db_1
#echo ORACLE_HOME=$ORACLE_BASE$oracle_T >>/home/oracle/.bash_profile
#echo $ORACLE_HOME
#echo ORACLE_SID=orcl >>/home/oracle/.bash_profile
#echo NLS_LANG=AMERICAN_AMERICA.UTF8 >>/home/oracle/.bash_profile
#echo PATH=$PATH:$ORACLE_HOME/bin >>/home/oracle/.bash_profile
#echo export ORACLE_BASE ORACLE_HOME ORACLE_SID NLS_LANG PATH >> /home/oracle/.bash_profile
#EOFBASH

echo ORACLE_BASE=$oraclebase >> /home/oracle/.bash_profile
#oracle_T=product/11.2.0/db_1
oracle_T2=${oraclebase}${oracle_T}
echo $oracle_T2
echo ORACLE_HOME=$oracle_T2 >>/home/oracle/.bash_profile
#echo $ORACLE_HOME
echo ORACLE_SID=orcl >>/home/oracle/.bash_profile
echo NLS_LANG=AMERICAN_AMERICA.UTF8 >>/home/oracle/.bash_profile
echo PATH=$PATH:$ORACLE_HOME/bin >>/home/oracle/.bash_profile
echo export ORACLE_BASE ORACLE_HOME ORACLE_SID NLS_LANG PATH >> /home/oracle/.bash_profile

######################################
#modify response file
######################################


cd $oraclesoftware
#echo $(pwd)
chown -R oracle:oinstall database
cd database/response
#sed -i "s/oracle.install.option=/oracle.install.option=INSTALL_DB_SWONLY/g" db_install.rsp
#sed -i 's/ORACLE_HOSTNAME=/'"ORACLE_HOSTNAME=$(cat /etc/sysconfig/network | awk 'NR==2{split($1,a,"=");print a[2]}')"'/g' db_install.rsp
#sed -i "s/UNIX_GROUP_NAME=/UNIX_GROUP_NAME=oinstall/g" db_install.rsp
#sed -i 's/INVENTORY_LOCATION=/'"INVENTORY_LOCATION=\/u01\/oraInventory"'/g' db_install.rsp
#sed -i "s/ORACLE_HOME=/ORACLE_HOME=\/u01\/oracle\/product\/11.2.0\/db_1/g" db_install.rsp
#sed -i "s/ORACLE_BASE=/ORACLE_BASE=\/u01\/oracle/g" db_install.rsp
#sed -i "s/oracle.install.db.InstallEdition=/oracle.install.db.InstallEdition=EE/g" db_install.rsp
#sed -i "s/oracle.install.db.DBA_GROUP=/oracle.install.db.DBA_GROUP=dba/g" db_install.rsp
#sed -i "s/oracle.install.db.OPER_GROUP=/oracle.install.db.OPER_GROUP=oinstall/g"  db_install.rsp
#sed -i "s/oracle.install.db.config.starterdb.globalDBName=/oracle.install.db.config.starterdb.globalDBName=orcl/g" db_install.rsp
#sed -i "s/oracle.install.db.config.starterdb.type=/oracle.install.db.config.starterdb.type=GENERAL_PURPOSE/g"  db_install.rsp
#sed -i "s/oracle.install.db.config.starterdb.password.ALL=/oracle.install.db.config.starterdb.password.ALL=hejiale/g"   db_install.rsp
#sed -i "s/oracle.install.db.config.starterdb.SID=/oracle.install.db.config.starterdb.SID=orcl/g"  db_install.rsp
#sed -i 's/GDBNAME = \"orcl11g.us.oracle.com\"/'"GDBNAME = \"orcl.$(cat /etc/sysconfig/network | awk 'NR==2{split($1,a,"=");print a[2]}')\" "'/g' dbca.rsp
#sed -i "s/SID = \"orcl11g\"/SID = \"orcl\"/g"  dbca.rsp 
#sed -i "s/oracle.installer.autoupdates.option=/oracle.installer.autoupdates.option=SKIP_UPDATES/g"   db_install.rsp
#sed -i "s/DECLINE_SECURITY_UPDATES=/DECLINE_SECURITY_UPDATES=TRUE/g" db_install.rsp

####################################################################################################################################

sed -i "s/oracle.install.option=/oracle.install.option=INSTALL_DB_SWONLY/g" db_install.rsp
sed -i 's/ORACLE_HOSTNAME=/'"ORACLE_HOSTNAME=$(cat /etc/sysconfig/network | awk 'NR==2{split($1,a,"=");print a[2]}')"'/g' db_install.rsp
sed -i "s/UNIX_GROUP_NAME=/UNIX_GROUP_NAME=oinstall/g" db_install.rsp
#sed -i 's/INVENTORY_LOCATION=/'"INVENTORY_LOCATION=\/u01\/oraInventory"'/g' db_install.rsp
#sed -i "s/ORACLE_HOME=/ORACLE_HOME=\/u01\/oracle\/product\/11.2.0\/db_1/g" db_install.rsp
#sed -i "s/ORACLE_BASE=/ORACLE_BASE=\/u01\/oracle/g" db_install.rsp
sed -i "s/oracle.install.db.InstallEdition=/oracle.install.db.InstallEdition=EE/g" db_install.rsp
sed -i "s/oracle.install.db.DBA_GROUP=/oracle.install.db.DBA_GROUP=dba/g" db_install.rsp
sed -i "s/oracle.install.db.OPER_GROUP=/oracle.install.db.OPER_GROUP=oinstall/g"  db_install.rsp
sed -i "s/oracle.install.db.config.starterdb.globalDBName=/oracle.install.db.config.starterdb.globalDBName=orcl/g" db_install.rsp
sed -i "s/oracle.install.db.config.starterdb.type=/oracle.install.db.config.starterdb.type=GENERAL_PURPOSE/g"  db_install.rsp
sed -i "s/oracle.install.db.config.starterdb.password.ALL=/oracle.install.db.config.starterdb.password.ALL=hejiale/g"   db_install.rsp
sed -i "s/oracle.install.db.config.starterdb.SID=/oracle.install.db.config.starterdb.SID=orcl/g"  db_install.rsp
sed -i 's/GDBNAME = \"orcl11g.us.oracle.com\"/'"GDBNAME = \"orcl.$(cat /etc/sysconfig/network | awk 'NR==2{split($1,a,"=");print a[2]}')\" "'/g' dbca.rsp
sed -i "s/SID = \"orcl11g\"/SID = \"orcl\"/g"  dbca.rsp
sed -i "s/oracle.installer.autoupdates.option=/oracle.installer.autoupdates.option=SKIP_UPDATES/g"   db_install.rsp
sed -i "s/DECLINE_SECURITY_UPDATES=/DECLINE_SECURITY_UPDATES=TRUE/g" db_install.rsp
cat db_install.rsp | sed -e  "s:INVENTORY_LOCATION=:INVENTORY_LOCATION=$oraInv:g;s:ORACLE_HOME=:ORACLE_HOME=$ORACLE_HOME:g;s:ORACLE_BASE=:ORACLE_BASE=$ORACLE_BASE:g" > /home/oracle/db_install.rsp
chown -R oracle:oinstall /home/oracle/db_install.rsp




#########################################
##  silence install oracle
#########################################
echo $oraclesoftware/database/runInstaller -silent -force -ignorePrereq -responseFile /home/oracle/db_install.rsp >> /home/oracle/install.sh
chmod +x /home/oracle/install.sh
chown -R oracle:oinstall /home/oracle/install.sh
su - oracle -c '/home/oracle/install.sh'
~

```


::: danger 注意

p13390677_112040_Linux-x86-64_1of7.zip

p13390677_112040_Linux-x86-64_2of7.zip

和这个脚本放在一个目录下，直接执行就OK了

如果想修改默认的安装目录记得全局替换一下


:::