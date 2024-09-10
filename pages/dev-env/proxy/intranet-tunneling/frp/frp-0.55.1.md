FRP（Fast Reverse Proxy）是一个高性能的反向代理应用，它主要用于内网穿透和远程访问。通过FRP，用户可以将内网服务暴露到外网，便于远程访问。以下是FRP的基本原理和工作流程：
### FRP的基本原理
#### 服务器和客户端角色：

   - **FRP服务器（frps）**：部署在具有公网IP的服务器上，负责接收外部请求并将其转发到内网服务。
   - **FRP客户端（frpc）**：部署在内网机器上，与FRP服务器保持长连接，将本地服务注册到FRP服务器上。
#### 内网穿透：

   - 内网机器通过FRP客户端与公网的FRP服务器建立长连接。FRP客户端会将内网服务的信息（如本地IP和端口）发送给FRP服务器。
   - FRP服务器会监听一个指定的公网端口。当接收到外部请求时，FRP服务器将请求通过长连接转发给对应的FRP客户端，后者再将请求转发给内网服务。
### FRP的工作流程
#### 建立连接：

   - 内网的FRP客户端启动后，会向FRP服务器发起连接，并进行身份验证（如token认证）。
   - FRP服务器验证通过后，保持与客户端的长连接。
#### 服务注册：

   - FRP客户端会根据配置文件，向FRP服务器注册本地服务，包括协议类型（如HTTP、TCP）、本地IP和端口等信息。
#### 请求转发：

   - 外部用户通过访问FRP服务器的公网IP和端口，发送请求到FRP服务器。
   - FRP服务器接收到请求后，根据配置将请求转发到对应的FRP客户端。
   - FRP客户端接收到请求后，将请求转发给本地内网服务，内网服务处理请求后，将响应结果通过FRP客户端返回给FRP服务器，最后由FRP服务器将响应返回给外部用户。
### 典型应用场景

- **内网穿透**：将内网的Web服务、数据库等暴露到外网，便于远程访问和管理。
- **远程办公**：通过FRP访问公司内部资源，如文件服务器、内部网站等。
- **IoT设备管理**：通过FRP访问和管理部署在内网的IoT设备。

![](https://cdn.fpic.top/docs/0/2024/png/20240910133319223.png)

> 注意：从 [v0.52.0] 版本开始，配置文件由 frps.ini 改成了 frps.toml

## 1、服务端配置
> 公网IP服务器 以及 域名 frp 版本： v0.55.1

### 1.1 下载软件
```shell
# 方式1： 本地直接下载上传到服务器

# 方式2： wget命令
wget https://github.com/fatedier/frp/releases/download/v0.55.1/frp_0.55.1_linux_amd64.tar.gz
```
### 1.2 配置
```shell
# 解压
[root@centos frp]# tar -zxvf frp_0.55.1_linux_amd64.tar.gz
# 进入目录
[root@centos frp_0.55.1_linux_amd64]# ls -ll
-rwxr-xr-x 1 1001 docker 14442648 Mar 12 18:14 frpc
-rw-r--r-- 1 1001 docker      142 Mar 12 18:17 frpc.toml
-rwxr-xr-x 1 1001 docker 18387096 Mar 12 18:14 frps
-rw-r--r-- 1 1001 docker      414 Mar 14 14:02 frps.toml
-rw-r--r-- 1 1001 docker    11358 Mar 12 18:17 LICENSE
```
> 文件说明 frps 服务端配置文件 frpc 客户端配置文件

#### 1.2.1 修改配置
> 修改frps.toml 文件

```shell
[root@iZ2zedzqu2r frp_0.55.1_linux_amd64]# cat frps.toml
# 服务端口
bindPort = 7000

# 授权码，请改成更复杂的 客户端会用到
auth.token = "token123456"

# 服务端通过此端口接监听和接收公网用户的http请求
vhostHTTPPort = 7000 # 

# dashboard配置
webServer.addr = "0.0.0.0"
webServer.port = 7001
# dashboard 用户名密码，可选，默认为空
webServer.user = "admin"
webServer.password = "admin"

```
#### 1.2.2 防火墙开启端口
> 开启 7000 7001 端口

#### 1.2.3 启动
> 启动命令

```shell
[root@centos frp_0.44.0_linux_amd64]# ./frps -c ./frps.toml
# 后台启动
[root@centos frp_0.44.0_linux_amd64]# ./frps -c ./frps.toml &

```
输入ip+端口号 ，输入账号密码 访问 dashboard，页面如下： 服务端配置已完成 .
![image.png](https://cdn.fpic.top/docs/0/2024/png/20240910133321227.png)



#### 1.2.4 加入 systemd 服务 （可选）
> 在 Linux 系统下，使用 systemd 可以方便地控制 frps 服务端的启动、停止、配置后台运行以及开机自启动。

操作步骤：

1. **安装 systemd**如果您的 Linux 服务器上尚未安装 systemd，可以使用包管理器如 yum（适用于 CentOS/RHEL）或 apt（适用于 Debian/Ubuntu）来安装它：
```
# 使用 yum 安装 systemd（CentOS/RHEL）
yum install systemd

# 使用 apt 安装 systemd（Debian/Ubuntu）
apt install systemd
```

2. **创建 frps.service 文件**

使用文本编辑器 (如 vim) 在 /etc/systemd/system 目录下创建一个 frps.service 文件，用于配置 frps 服务。
```
$ sudo vim /etc/systemd/system/frps.service
```
写入内容
```powershell
[Unit]
# 服务名称，可自定义
Description = frp server
After = network.target syslog.target
Wants = network.target

[Service]
Type = simple
# 启动frps的命令，需修改为您的frps的安装路径
ExecStart = /path/to/frps -c /path/to/frps.toml

[Install]
WantedBy = multi-user.target
```

3. **使用 systemd 命令管理 frps 服务**
```
# 启动frp
sudo systemctl start frps
# 停止frp
sudo systemctl stop frps
# 重启frp
sudo systemctl restart frps
# 查看frp状态
sudo systemctl status frps
```

4. **设置 frps 开机自启动**
```
sudo systemctl enable frps
```
## 2、Nginx 配置
### 2.1、域名解析
域名解析 添加 frp 以及 *.frp 二级域名，域名可自定义![image.png](https://cdn.fpic.top/docs/0/2024/png/20240910133323717.png)
### 2.2、nginx 配置文件增加 如下配置
```
server {
    listen       80;
    listen  [::]:80;
    server_name *.frp.xxx.cn;

    location / {
        proxy_set_header Host $host;
        #frp监听客户端http请求
        proxy_pass http://公网IP:7000;
    }

}


server {
    listen       80;
    listen  [::]:80;
    server_name frp.xxx.cn;

    location / {
        proxy_set_header Host $host;
        # 管理面板
        proxy_pass http://公网IP:7001;
    }

}

```
## 3、客户端配置
> 以 windows 客户端为例 frp 版本： v0.55.1

### 3.1 下载软件
```http
# 直接下载
https://github.com/fatedier/frp/releases/download/v0.55.1/frp_0.55.1_windows_amd64.zip
```

### 3.2 配置
> 解压 frp_0.55.1_windows_amd64.zip

![image.png](https://cdn.fpic.top/docs/0/2024/png/20240910133325139.png)
#### 3.2.1 修改配置
> 修改frpc.toml 文件

```shell
# 此配置不可更改
serverAddr = "公网ip"
serverPort = 7000
 # 授权码和服务端一致
auth.token = "token123456"

# lee 改成你自定义的名字用来区分用户
user = "lee"

# 代理配置①
[[proxies]]
name = "web2"	   # web2改成自定义的项目名
type = "http"	
localPort = 1668   # 1668改成想代理的端口号				
customDomains = ["web2.frp.xxx.cn"] # 此处只改三级域名（*.frp.xxx.cn）* 改为你自定义的名字

# 代理配置②
#[[proxies]]
#name = "web3"	   # web2改成自定义的项目名
#type = "http"	
#localPort = 1669  
#customDomains = ["web3.frp.xxx.cn"]
```
#### 3.2.2 启动命令
```shell
windows 下启动命令：

.\frpc.exe -c .\frpc.toml

出现 start proxy success 说明配置成功
```
#### 3.2.3 访问 dashboard 页面
> 可以看到 web 代理已经成功

![image.png](https://cdn.fpic.top/docs/0/2024/png/20240910133327477.png)

#### 3.2.4 浏览器访问代理接口
![image.png](https://cdn.fpic.top/docs/0/2024/png/20240910133329940.png)

## 参考文档
> 官方文档： [https://gofrp.org/zh-cn/docs/overview/](https://gofrp.org/zh-cn/docs/overview/)

