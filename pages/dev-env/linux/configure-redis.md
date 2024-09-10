# 1. 下载 redis

官网：

安装包
[redis-5.0.3.tar.gz](https://www.yuque.com/attachments/yuque/0/2021/gz/2350759/1620988959978-166cb531-7ae6-4af2-b0ef-971d94b888ed.gz?_lake_card=%7B%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2021%2Fgz%2F2350759%2F1620988959978-166cb531-7ae6-4af2-b0ef-971d94b888ed.gz%22%2C%22name%22%3A%22redis-5.0.3.tar.gz%22%2C%22size%22%3A1959445%2C%22type%22%3A%22%22%2C%22ext%22%3A%22gz%22%2C%22status%22%3A%22done%22%2C%22source%22%3A%22transfer%22%2C%22id%22%3A%22HhwMd%22%2C%22card%22%3A%22file%22%7D)

# 2. 安装

Redis 是 c 语言开发的。 安装 redis 需要 c 语言的编译环境。如果没有 gcc 需要在线安装。yum install gcc-c++

## 2.1 判断是否安装 gcc

执行 gcc --version 命令，如果 Linux 系统没有安装 gcc 编译器，会提示“Command not found”。

```shell
[root@localhost /]# gcc --version
-bash: gcc: command not found
```

## 2.2 安装 gcc

```shell
[root@localhost /]# yum install gcc-c++
```

## 2.3 上传 redis 压缩包

在 usr/local 文件夹下面 创建 redis 文件夹 上传 安装包 到 目录下面 并解压缩 redis

```shell
[root@localhost local]# tar zxvf redis-5.0.3.tar.gz
[root@localhost redis]# ls
redis-5.0.3  redis-5.0.3.tar.gz
```

## 2.4 编译，进入 redis 源码目录 make

```shell
[root@localhost redis-5.0.3]# make
```

## 2.5 安装，make install

```shell
[root@localhost redis-5.0.3]# make install
```

## 2.6 在 etc 下面创建目录

```shell
[root@localhost redis-5.0.3]# mkdir /etc/redis
```

## 2.7 复制 redis.conf 到 /etc/redis 目录下 并重名为 6379.conf

```shell
[root@localhost redis-5.0.3]# cp redis.conf /etc/redis/6379.conf
```

## 2.8 修改 6379.conf

参考文件
[redis conf 文件以及脚本.rar](https://www.yuque.com/attachments/yuque/0/2021/rar/2350759/1620989616713-b29a4051-af61-4dda-bda2-149abcf100b8.rar?_lake_card=%7B%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2021%2Frar%2F2350759%2F1620989616713-b29a4051-af61-4dda-bda2-149abcf100b8.rar%22%2C%22name%22%3A%22redis+conf%E6%96%87%E4%BB%B6%E4%BB%A5%E5%8F%8A%E8%84%9A%E6%9C%AC.rar%22%2C%22size%22%3A21793%2C%22type%22%3A%22%22%2C%22ext%22%3A%22rar%22%2C%22status%22%3A%22done%22%2C%22source%22%3A%22transfer%22%2C%22id%22%3A%22mhQTZ%22%2C%22card%22%3A%22file%22%7D)

```shell
修改requirepass Xinlisuo111
修改daemonize yes
```

## 2.9 将启动文件 redis 拷贝到 init.d 中

```shell
在usr/local/redis 文件夹下面 创建 redis 启动脚本  内容如下：

复制文件 到 /etc/init.d/redis 下面

[root@localhost redis]# cp redis /etc/init.d/redis
```

```shell
#!/bin/sh
#
# Simple Redis init.d script conceived to work on Linux systems
# as it does use of the /proc filesystem.

### BEGIN INIT INFO
# Provides:     redis_6379
# Default-Start:        2 3 4 5
# Default-Stop:         0 1 6
# Short-Description:    Redis data structure server
# Description:          Redis data structure server. See https://redis.io
### END INIT INFO

REDISPORT=6379
EXEC=/usr/local/bin/redis-server
CLIEXEC=/usr/local/bin/redis-cli

PIDFILE=/var/run/redis_${REDISPORT}.pid
CONF="/etc/redis/6379.conf"

case "$1" in
    start)
        if [ -f $PIDFILE ]
        then
                echo "$PIDFILE exists, process is already running or crashed"
        else
                echo "Starting Redis server..."
                $EXEC $CONF
        fi
        ;;
    stop)
        if [ ! -f $PIDFILE ]
        then
                echo "$PIDFILE does not exist, process is not running"
        else
                PID=$(cat $PIDFILE)
                echo "Stopping ..."
                $CLIEXEC -a "Xinlisuo111" -p $REDISPORT shutdown
                while [ -x /proc/${PID} ]
                do
                    echo "Waiting for Redis to shutdown ..."
                    sleep 1
                done
                echo "Redis stopped"
        fi
        ;;
    *)
        echo "Please use start or stop as first argument"
        ;;
esac

```

## 2.10 增加脚本执行权限

```shell
[root@localhost redis]# chmod +x /etc/init.d/redis

```

## 2.11 增加系统服务

```shell
[root@localhost redis]# chkconfig --add redis
[root@localhost redis]# chkconfig --list

Note: This output shows SysV services only and does not include native
      systemd services. SysV configuration data might be overridden by native
      systemd configuration.

      If you want to list systemd services use 'systemctl list-unit-files'.
      To see services enabled on particular target use
      'systemctl list-dependencies [target]'.

netconsole     	0:off	1:off	2:off	3:off	4:off	5:off	6:off
network        	0:off	1:off	2:on	3:on	4:on	5:on	6:off
redis          	0:off	1:off	2:on	3:on	4:on	5:on	6:off
[root@localhost redis]#

```

# 3. 连接 Redis

## 3.1 前台启动 ./redis-server 命令

````shell
[root@localhost redis-5.0.3]# cd ../
[root@localhost redis]# cd ../
[root@localhost local]# ls
6379.conf  bin  etc  games  include  lib  lib64  libexec  New Folder  redis  redis-5.0.3.tar.gz  sbin  share  src
[root@localhost local]# cd bin/
[root@localhost bin]# ls
redis-benchmark  redis-check-aof  redis-check-rdb  redis-cli  redis-sentinel  redis-server
[root@localhost bin]# ./redis-server
13459:C 14 May 2021 18:29:25.339 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
13459:C 14 May 2021 18:29:25.339 # Redis version=5.0.3, bits=64, commit=00000000, modified=0, pid=13459, just started
13459:C 14 May 2021 18:29:25.339 # Warning: no config file specified, using the default config. In order to specify a config file use ./redis-server /path/to/redis.conf
13459:M 14 May 2021 18:29:25.339 * Increased maximum number of open files to 10032 (it was originally set to 1024).
                _._
           _.-``__ ''-._
      _.-``    `.  `_.  ''-._           Redis 5.0.3 (00000000/0) 64 bit
  .-`` .-```.  ```\/    _.,_ ''-._
 (    '      ,       .-`  | `,    )     Running in standalone mode
 |`-._`-...-` __...-.``-._|'` _.-'|     Port: 6379
 |    `-._   `._    /     _.-'    |     PID: 13459
  `-._    `-._  `-./  _.-'    _.-'
 |`-._`-._    `-.__.-'    _.-'_.-'|
 |    `-._`-._        _.-'_.-'    |           http://redis.io
  `-._    `-._`-.__.-'_.-'    _.-'
 |`-._`-._    `-.__.-'    _.-'_.-'|
 |    `-._`-._        _.-'_.-'    |
  `-._    `-._`-.__.-'_.-'    _.-'
      `-._    `-.__.-'    _.-'
          `-._        _.-'
              `-.__.-'

13459:M 14 May 2021 18:29:25.341 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
13459:M 14 May 2021 18:29:25.341 # Server initialized
13459:M 14 May 2021 18:29:25.341 # WARNING overcommit_memory is set to 0! Background save may fail under low memory condition. To fix this issue add 'vm.overcommit_memory = 1' to /etc/sysctl.conf and then reboot or run the command 'sysctl vm.overcommit_memory=1' for this to take effect.
13459:M 14 May 2021 18:29:25.341 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot. Redis must be restarted after THP is disabled.
13459:M 14 May 2021 18:29:25.341 * Ready to accept connections

````

## 3.2 后台启动

由于 2.7 中 conf 复制到 /etc/redis 中 ，启动命令如下

```shell
[root@localhost bin]# ./redis-server /etc/redis/6379.conf
```

**查看 redis 进程：**

```shell
[root@localhost bin]# ps aux|grep redis
root      13464  0.0  0.7 153980  7636 ?        Ssl  18:31   0:00 ./redis-server 0.0.0.0:6379
root      13469  0.0  0.0 112812   976 pts/0    S+   18:31   0:00 grep --color=auto redis
[root@localhost bin]#
```

连接测试 ...

## 4.0 防火墙 开启 6379 端口

```shell
centos 7

查看已经开放的端口：
firewall-cmd --list-ports
开启端口
firewall-cmd --zone=public --add-port=80/tcp --permanent
命令含义：
–zone #作用域
–add-port=80/tcp #添加端口，格式为：端口/通讯协议
–permanent #永久生效，没有此参数重启后失效


firewall-cmd --reload #重启firewall
systemctl stop firewalld.service #停止firewall
systemctl disable firewalld.service #禁止firewall开机启动
firewall-cmd --state #查看默认防火墙状态（关闭后显示notrunning，开启后显示running）
```

![image.png](https://cdn.fpic.top/docs/0/2024/png/20240910133032511.png)
