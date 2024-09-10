## 1、maven下载
> 官方地址: [http://maven.apache.org/download.cgi](http://maven.apache.org/download.cgi) 

![image.png](https://cdn.fpic.top/docs/0/2024/png/20240910141013824.png)
## 2、解压
> 解压下载好的maven 放到指定路径下

### 2.1 设置环境变量
#### 2.1.1 编辑配置文件
```shell
vim ~/.bash_profile
```
```shell
export M2_HOME=/Users/ming/local/apache-maven-3.8.6
export PATH=$PATH:$M2_HOME/bin
```
#### 2.1.2 刷新配置
```shell
source ~/.bash_profile
```
### 2.2 查看版本
> 使用 mvn -v 命令查看mvn版本

```shell
➜  ~ mvn -v
Apache Maven 3.8.6 (40f52333136460af0dc0d7232c0dc0bcf0d9e117; 2019-08-27T23:06:16+08:00)
Maven home: /Users/ming/local/apache-maven-3.8.6
Java version: 17.0.5, vendor: Eclipse Adoptium, runtime: /Library/Java/JavaVirtualMachines/temurin-17.jdk/Contents/Home
Default locale: zh_CN_#Hans, platform encoding: UTF-8
OS name: "mac os x", version: "13.0.1", arch: "x86_64", family: "mac"
```
