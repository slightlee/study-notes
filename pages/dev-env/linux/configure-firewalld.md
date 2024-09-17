### 查看linux 防火墙是否打开
#### iptables 防火墙
```shell
iptables -L
```

#### firewalld 防火墙 **（比如在Fedora, CentOS, RHEL等系统上）**
```shell
firewall-cmd --state
```

#### ufw 防火墙 （比如在Ubuntu上）
```shell
ufw status
```

### 查看防火墙开放了哪些端口
#### **iptables防火墙**
```shell
iptables -L -n --line-numbers

这个命令将展示所有规则，并且-n参数避免将IP地址和端口号转换为名字（这会速度更快），
--line-numbers参数会给规则添加行号，方便管理。
```

#### **firewalld防火墙**
> **可以使用****firewall-cmd****命令。查看所有开放的端口**
>

```shell
firewall-cmd --list-ports
```

> **如果想查看具体的zone的情况，可以使用：**
>

```shell
firewall-cmd --zone=public --list-ports
```

#### ufw 防火墙
```bash
ufw status numbered
```

### 开放一个特定的端口
####   
iptables 防火墙
> **要开放一个特定端口，比如说8080，你可以使用如下命令：**
>

```shell
iptables -A INPUT -p tcp --dport 8080 -j ACCEPT
```

**这个命令添加了一个规则，允许所有进入的tcp流量通达端口8080。**  


#### firewalld 防火墙
> **首先，确保你的****firewalld****是运行状态。接着，你可以使用****firewall-cmd****来开放端口，例如开放端口8080：**
>

```bash
firewall-cmd --zone=public --add-port=8080/tcp --permanent
```

**这里的****--zone=public****表示在public区域添加规则，这是默认的区域，但是你可以根据需要使用任何其他的区域。**

**然后重新加载规则使改动生效：**

```shell
firewall-cmd --reload
```

#### ufw 防火墙
> **要开放一个特定端口，比如说8080，你可以使用如下命令：**
>

```bash
ufw allow 8080/tcp
```

