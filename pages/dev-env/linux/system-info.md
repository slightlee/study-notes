## 系统信息
### 查看Linux系统版本
```shell
lsb_release -a
```

>  这个命令适用于所有的Linux发行版，包括Redhat、SuSE、Debian…等发行版。
>

![](https://cdn.fpic.top/docs/0/2024/png/202409251429213.png)

### 查看CPU信息（型号）
```shell
cat /proc/cpuinfo | grep name | cut -f2 -d: | uniq -c
```

![](https://cdn.fpic.top/docs/0/2024/png/202409251429214.png)

### 物理CPU个数
```shell
cat /proc/cpuinfo| grep "physical id"| sort| uniq| wc -l
```

![](https://cdn.fpic.top/docs/0/2024/png/202409251429215.png)

### 每个物理CPU中core的个数(即核数)
```shell
cat /proc/cpuinfo| grep "cpu cores"| uniq
```

![](https://cdn.fpic.top/docs/0/2024/png/202409251429216.png)

### 查看逻辑CPU的个数
```shell
cat /proc/cpuinfo| grep "processor"| wc -l
```

![](https://cdn.fpic.top/docs/0/2024/png/202409251429217.png)

### 系统内存大小的信息
```shell
cat /proc/meminfo
```



## 文件大小
### 查看指定文件夹的总大小
> 这里 `-s` 表示汇总（summarize）文件夹的大小，`-h` 表示以易读的格式显示（如KB、MB、GB）。
>

```shell
du -sh /path/to/directory
```

![](https://cdn.fpic.top/docs/0/2024/png/202409251429218.png)

### 查看指定文件夹内每个子文件夹的大小
> `--max-depth=1` 表示限制输出结果的深度，这里只显示一层子目录的大小。
>

```shell
du -h --max-depth=1 /path/to/directory
```

![](https://cdn.fpic.top/docs/0/2024/png/202409251429219.png)

### 文件大小排序
> du -sh /path/to/directory/* | sort -hr
>

![](https://cdn.fpic.top/docs/0/2024/png/202409251429220.png)

