## 
以JAVA_HOME为列

查看JAVA_HOME

```shell
echo $JAVA_HOME
```

## 方法一：
> 修改exportJAVA_HOME=/usr/local/java/jdk-17.0.7 ，配置完后可以通过 echo$JAVA_HOME 查看配置结果。
>

```shell
export JAVA_HOME=/usr/local/java/jdk-17.0.7
```

生效方法：立即生效  
有效期限：临时改变，只能在当前的终端窗口中有效，当前窗口关闭后就会恢复原有的JAVA_HOME配置  
用户局限：仅对当前用户

## 方法二：
### 修改 .bashrc 文件:
> 通过修改.bashrc文件，在最后一行添上：export JAVA_HOME=/usr/local/java/jdk-17.0.7
>

```shell
vim ~/.bashrc
```

### 生效方法：
##### 方法1：
> 关闭当前终端窗口，重新打开一个新终端窗口就能生效
>

##### 方法2：
> ##### 输入 source ~/.bashrc 命令，立即生效

```shell
source ~/.bashrc
```

有效期限：永久有效  
用户局限：仅对当前用户

## 方法三：
通过修改 profile 文件 ，在最后一行添上：export JAVA_HOME=/usr/local/java/jdk-17.0.7

```shell
vim /etc/profile
```

生效方法：**系统重启**  
有效期限：永久有效  
用户局限：对所有用户



## 方法四:
通过修改environment文件，

```shell
vim /etc/environment
```

> 在PATH="xxxxxxxxxxx"中加入“xxxxxx”(根据实际情况调整)
>

生效方法：**系统重启**  
有效期限：永久有效  
用户局限：对所有用户

