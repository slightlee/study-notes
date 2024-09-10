## 1、brew安装
```shell
brew install nginx
```
安装完成后nginx的安装路径
```shell
/usr/local/Cellar/nginx
```
配置文件路径
```shell
/usr/local/etc/nginx/nginx.conf
```
## 2、查看nginx信息
```shell
brew info nginx
```
![image.png](https://cdn.fpic.top/docs/0/2024/png/20240910133206542.png)
## 3、homebrew方式启动和关闭nginx
### 启动
```
brew services start nginx
```
### 重启
```
brew services restart nginx
```
### 停止
```
brew services stop nginx
```
## 4、直接使用nginx启动
### 启动
```
sudo nginx   或则 ./nginx  
```
![image.png](https://cdn.fpic.top/docs/0/2024/png/20240910133212173.png)
### 关闭

   - stop 表示立即停止nginx，不保存相关信息
   - quit 表示正常退出nginx，并保存相关信息
```
sudo nginx -s stop    或者    nginx -s quit
```
### 重新加载配置文件
```
sudo nginx -s reload
```
## 5、访问测试
![image.png](https://cdn.fpic.top/docs/0/2024/png/20240910133215242.png)
