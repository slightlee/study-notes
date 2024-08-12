### whistle官方地址
> [https://wproxy.org/whistle/](https://wproxy.org/whistle/)
> 安装配置文档
> [https://wproxy.org/whistle/install.html](https://wproxy.org/whistle/install.html)

## 安装whistle
### 安装
```shell
npm install -g whistle
```
### 查看whistle的帮助信息
```shell
执行命令 whistle help 或 w2 help
```
![image.png](https://cdn.dml.us.kg/docs/2024/png/202408121743780.png)
## 常用命令
### 启动whistle
> 最新版本的whistle支持三种等价的命令 whistle、w2、wproxy

```shell
w2 start
```
![image.png](https://cdn.dml.us.kg/docs/2024/png/202408121743781.png)
如果要防止其他人访问配置页面，可以在启动时加上登录用户名和密码 

```shell
w2 start -n yourusername -w yourpassword
```
### 重启whsitle
```shell
w2 restart
```
### 停止whistle
```shell
w2 stop
```
### 调试模式启动
> 调试模式启动whistle(主要用于查看whistle的异常及插件开发)

```shell
w2 run
```


