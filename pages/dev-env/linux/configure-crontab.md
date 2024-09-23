## 1、查看本机是否已经安装了crontabs
```shell
service crond status
```

![](https://cdn.fpic.top/docs/0/2024/png/202409261341210.png)

## 2、为执行的脚本赋予权限
![](https://cdn.fpic.top/docs/0/2024/png/202409261341212.png)

## 3、添加和执行crontab定时任务
> （1）进入到/etc目录 cd /etc
>
> （2）配置定时任务 输入 crontab -e 打开开编辑界面后，设置如下定时任务
>

```shell
*/1 * * * * python3 /home/pyfile/aliyunpan_sign.py >>/home/pyfile/aliyunpan_sign.log 2>&1 &  #每分钟执行一次

0 10 * * * python3 /home/pyfile/aliyunpan_sign.py >>/home/pyfile/aliyunpan_sign.log 2>&1 &  #每天上午10点执行一次
```

## 4、查看定时任务
```shell
[root@VMcentos etc]# crontab -l
```

## 5、启动、停止定时任务
```shell
# 启动定时任务
/bin/systemctl start crond.service

tail /var/log/cron  //查看crontab日志       

tail /home/pyfile/aliyunpan_sign.log 或者 more /home/pyfile/aliyunpan_sign.log  //查看你的python运行日志

# 停止当前定时任务
/bin/systemctl stop crond.service  
```

