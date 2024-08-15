
```powershell
下载地址
https://www.oracle.com/java/technologies/javase/javase8-archive-downloads.html

# 解压
tar -zxvf jdk-11.0.13_linux-x64_bin.tar.gz

# 配置环境变量
vim /etc/profile

# 修改/etc/profile 最下面添加配置
export JAVA_HOME=/usr/local/jdk-11.0.13
export PATH=$PATH:$JAVA_HOME/bin

#刷新配置
source /etc/profile

#查看版本
java -version
```
