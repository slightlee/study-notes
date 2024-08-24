## 前言
> 一种快速反向代理，可帮助您将 NAT 或防火墙后面的本地服务器暴露给 Internet。
> GitHub 地址 ： [https://github.com/fatedier/frp](https://github.com/fatedier/frp)
> **下载之后如果碰到杀毒软件报毒，可加入白名单处理**

## 1、服务端配置
> 公网IP服务器 以及 域名
> frp 版本： v0.44.0

### 1.1 下载软件
```shell
# 方式1： 本地直接下载上传到服务器

# 方式2： wget命令
wget https://github.com/fatedier/frp/releases/download/v0.44.0/frp_0.44.0_linux_amd64.tar.gz
```
### 1.2 配置
```shell
# 解压
[root@centos frp]# tar -zxvf frp_0.44.0_linux_amd64.tar.gz
# 进入目录
[root@centos frp_0.44.0_linux_amd64]# ls -ll
-rwxr-xr-x 1 1001 docker 10997760 Jul 11 00:15 frpc
-rw-r--r-- 1 1001 docker    10934 Jul 11 00:19 frpc_full.ini
-rw-r--r-- 1 1001 docker      126 Jul 11 00:19 frpc.ini
-rwxr-xr-x 1 1001 docker 14036992 Jul 11 00:15 frps
-rw-r--r-- 1 1001 docker     5686 Jul 11 00:19 frps_full.ini
-rw-r--r-- 1 1001 docker       26 Jul 11 00:19 frps.ini
-rw-r--r-- 1 1001 docker    11358 Jul 11 00:19 LICENSE
```
> 文件说明 
> frps   服务端配置文件
> frpc  客户端配置文件

#### 1.2.1 修改配置
```shell
[root@centos frp_0.44.0_linux_amd64]# vim frps.ini

[common]
# frp监听的端口，默认是7000，可以改成其他的
bind_port = 7000
# 授权码，请改成更复杂的 客户端会用到
token = token123456

# frp管理后台端口，请按自己需求更改
dashboard_port = 7001
# frp管理后台用户名和密码，请改成自己的
dashboard_user = admin
dashboard_pwd = admin
enable_prometheus = true

# frp日志配置
log_file = /var/log/frps.log
log_level = info
log_max_days = 3


# 服务端通过此端口接监听和接收公网用户的http请求
vhost_http_port = 7002

# 服务端的subdomain_host需要和客户端配置文件中的subdomain、local_port配合使用，
# 可通过{subdomain}.{subdomain_host} 的域名格式来访问自己本地的 web 服务。
# 假如服务端的subdomain_host为frp.xx.cn ,客户端某个配置组中的
# subdomain为a,local_port为 8001
# 则：
# 访问 a.frp.xx.cn ,等同于访问本地的 localhost:8001

subdomain_host = frp.xx.cn


```
#### 1.2.2 防火墙开启端口
> 开启 7000 7001 端口

#### 1.2.3 启动
> 启动命令

```shell
[root@centos frp_0.44.0_linux_amd64]# ./frps -c ./frps.ini
# 后台启动
[root@centos frp_0.44.0_linux_amd64]# ./frps -c ./frps.ini &
```
> 输入ip+端口号 ，输入账号密码  访问，页面如下： 
> 服务端配置已完成 .

![image.png](https://cdn.dml.us.kg/docs/2024/png/1665391948002-8c3810d7-b98c-49b1-972d-f610153027dc.png)
#### 1.2.4 停止
> 使用 kill 命令

```shell
[root@centos frp_0.44.0_linux_amd64]# ps -ef|grep frp
root     14235 10806  0 16:50 pts/0    00:00:00 ./frps -c ./frps.ini
root     18724 10806  0 17:23 pts/0    00:00:00 grep --color=auto frp
[root@centos frp_0.44.0_linux_amd64]# kill -9 14235
```
## 2、Nginx 配置
### 2.1、域名解析
> 域名解析 添加  frp 以及  *.frp 二级域名，域名可自定义

![image.png](https://cdn.dml.us.kg/docs/2024/png/1665395885818-340fa227-a5c0-4f8b-aece-3c39a192016f.png)
### 2.2、nginx 配置文件增加 如下配置
```shell
server {
    listen       80;
    listen  [::]:80;
    server_name *.frp.xx.cn;

    location / {
        proxy_set_header Host $host;
        proxy_pass http://公网ip:7002;
    }
}
```
## 3、客户端配置 
> 以 windows 客户端为例 
> frp 版本： v0.44.0

### 3.1 下载软件
```shell
# 直接下载
https://github.com/fatedier/frp/releases/download/v0.44.0/frp_0.44.0_windows_amd64.zip

```
### 3.2 配置
> 解压 frp_0.44.0_windows_amd64.zip

![image.png](https://cdn.dml.us.kg/docs/2024/png/1665393681002-f551bc2f-76e9-4c12-a630-6851adf135bb.png)
#### 3.2.1 修改配置
##### 3.2.1.1 默认方式
> 修改 frpc.ini 文件
> 这里用不到ssh 服务，暂不配置

```shell
# 客户端配置
[common]
server_addr = 公网服务器IP
 # 与frps.ini的bind_port一致
server_port = 7000
 # 与frps.ini的token一致
token = token123456

# 配置ssh服务
#[ssh]
#type = tcp
#local_ip = 127.0.0.1
#local_port = 22
 # 这个自定义，之后再ssh连接的时候要用
#remote_port = 6000 

# 配置http服务
# []内的代理服务名称在全局范围内确保唯一，每个人的每个代理服务不能重名，否则会影响正常使用。
 [doc]
type = http
#local_ip = 127.0.0.1
# local_port代表你想要暴露给外网的本地web服务端口
local_port = 18001
# subdomain 在全局范围内要确保唯一，每个代理服务的subdomain不能重名，否则会影响正常使用。
# 客户端的subdomain需和服务端的subdomain_host配合使用
subdomain = doc

# 配置...
 [doc2]
type = http
#local_ip = 127.0.0.1
# local_port代表你想要暴露给外网的本地web服务端口
local_port = 18002
# subdomain 在全局范围内要确保唯一，每个代理服务的subdomain不能重名，否则会影响正常使用。
# 客户端的subdomain需和服务端的subdomain_host配合使用
subdomain = doc2

```
##### 3.2.1.2  环境变量方式
> 客户端通过环境变量配置，可以进一步保护服务器信息，如果为了方便可以使用默认方式

```shell
# 客户端配置
[common]
server_addr = {{ .Envs.FRP_SERVER_ADDR }}
 # 与frps.ini的bind_port一致
server_port = {{ .Envs.FRP_SERVER_PORT }}
 # 与frps.ini的token一致
token = token123456

# 配置ssh服务
#[ssh]
#type = tcp
#local_ip = 127.0.0.1
#local_port = 22
 # 这个自定义，之后再ssh连接的时候要用
#remote_port = 6000 

# 配置http服务
# []内的代理服务名称在全局范围内确保唯一
 [doc]
type = http
#local_ip = 127.0.0.1
# local_port代表你想要暴露给外网的本地web服务端口
local_port = 18001
# subdomain 在全局范围内要确保唯一，每个代理服务的subdomain不能重名，否则会影响正常使用。
# 客户端的subdomain需和服务端的subdomain_host配合使用
subdomain = doc

# 配置...
 [doc2]
type = http
#local_ip = 127.0.0.1
# local_port代表你想要暴露给外网的本地web服务端口
local_port = 18002
# subdomain 在全局范围内要确保唯一，每个代理服务的subdomain不能重名，否则会影响正常使用。
# 客户端的subdomain需和服务端的subdomain_host配合使用
subdomain = doc2

```
#### 3.2.2 启动
##### 3.2.2.1 默认方式启动
> windows 下启动命令   .\frpc.exe -c .\frpc.ini
> 出现 start proxy success  说明配置成功

> linux下启动命令   
> ./frpc -c ./frpc.ini
> 出现 start proxy success  说明配置成功

##### 3.2.2.2 环境变量方式启动
> windows 下启动命令   
> set FRP_SERVER_ADDR="x.x.x.x" 
> set FRP_SERVER_PORT="7000"
> .\frpc.exe -c .\frpc.ini
> 出现 start proxy success  说明配置成功

> linux下启动命令   
> export FRP_SERVER_ADDR="x.x.x.x" 
> export FRP_SSH_REMOTE_PORT="7000" 
> ./frpc -c ./frpc.ini
> 出现 start proxy success  说明配置成功

```shell
D:\frp_0.44.0_windows_amd64> .\frpc.exe -c .\frpc.ini
2022/10/10 17:49:25 [I] [service.go:349] [5973463a297e8700] login to server success, get run id [5973463a297e8700], server udp port [0]
2022/10/10 17:49:25 [I] [proxy_manager.go:144] [5973463a297e8700] proxy added: [http-doc]
2022/10/10 17:49:25 [I] [control.go:181] [5973463a297e8700] [http-doc] start proxy success
```
#### 3.2.3  访问测试
> http://doc.frp.xx.cn/


## 4、完整的示例配置文件
### 4.1、 方式一：官方地址
[frps 的完整配置文件（服务器）](https://github.com/fatedier/frp/blob/dev/conf/frps_full.ini)
[frpc 的完整配置文件（客户端）](https://github.com/fatedier/frp/blob/dev/conf/frpc_full.ini)
### 4.2、方式二：下载软件目录
```latex
frps_full.ini （服务端）
frpc_full.ini （客户端）
```
## 5、系统对应软件说明
![image.png](https://cdn.dml.us.kg/docs/2024/png/1671075304146-8dba247c-2750-4936-be03-47ae72b537dd.png)
