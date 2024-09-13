> netstat-a  #显示所有活动的TCP连接以及计算机监听的TCP和UDP端口。
>
> netstat-e  #显示以太网发送和接收的字节数、数据包数等。
>
> netstat-n  #以数字形式显示所有活动的TCP连接的地址和端口号。
>
> netstat-o  #显示活动的TCP连接并包括每个连接的进程ID（PID）。
>
> netstat-s  #按协议显示各种连接的统计信息，包括端口号。
>
> netstat-an #查看所有开放的端口。
>

## 1. 查看端口占用
```shell
netstat -aon|findstr "8080"

taskkill /T /F /PID 9088 
```

运行结果：



```shell
TCP  127.0.0.1:80    0.0.0.0:0    LISTENING   2448
```



端口“8080”被PID（进程号）为2448的进程占用。  
查看端口“8080”被哪个应用占用，，继续执行下面命令：



```shell
tasklist|findstr "2448"
```



运行结果

```shell
notepad.exe        2016 Console         0     16,064 K
```

## 2、关闭进程
## 2.1 按进程号关闭进程


taskkill /pid 2152多个时格式为：



```shell
taskkill /pid 2152 /pid 1284
```



## 2.2 按进程名关闭进程
如要关闭notepad.exe,格式为：



```shell
taskkill /im notepad.exe
```



指定多个时格式为：



```shell
taskkill /im notepad.exe /im iexplorer.exe
```



如果是要关闭所有的,则使用通配符*,即：



```shell
taskkill /im *.exe
```



## 2.3 有提示的关闭进程


```shell
taskkill /t /im notepad.exe
taskkill /t /pid 2152
```



这个效果是提示后在使用者确定后关闭,有提示框。



## 2.4 强行终止进程
```shell
taskkill /f /im notepad.exe
taskkill /f /pid 2152
```

