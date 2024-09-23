## free 命令
```shell
[root@iZ2ze home]# free
              total        used        free      shared  buff/cache   available
Mem:        1759448      921628      102636        2100      735184      660816
Swap:             0           0           0

```

## free -h 命令
```shell
[root@iZ2ze home]# free -h
              total        used        free      shared  buff/cache   available
Mem:          1.7Gi       900Mi        99Mi       2.0Mi       717Mi       644Mi
Swap:            0B          0B          0B
```

## top 命令
```shell
[root@iZ2ze home]# top
top - 17:45:11 up 16 days, 15:49,  1 user,  load average: 0.83, 0.39, 0.38
Tasks: 118 total,   1 running, 117 sleeping,   0 stopped,   0 zombie
%Cpu(s):  3.7 us,  2.7 sy,  0.0 ni, 93.1 id,  0.0 wa,  0.3 hi,  0.2 si,  0.0 st
MiB Mem :   1718.2 total,    119.3 free,    902.2 used,    696.8 buff/cache
MiB Swap:      0.0 total,      0.0 free,      0.0 used.    643.7 avail Mem

    PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
   1215 root      20   0  666920 197216  11984 S   0.7  11.2 249:20.57 tuned
     11 root      rt   0       0      0      0 S   0.3   0.0   1:40.93 migration/1
   1150 root      20   0 1365040  45388  19224 S   0.3   2.6  23:03.88 containerd
  54267 root      20   0  719844  16264   5688 S   0.3   0.9  13:40.96 containerd-shim
  51288 systemd+  20   0 1796404 430448  23296 S   0.3  24.5  49:43.89 mysqld
      1 root      20   0   90804  10616   7748 S   0.0   0.6  14:10.30 systemd
      2 root      20   0       0      0      0 S   0.0   0.0   0:00.26 kthreadd
      3 root       0 -20       0      0      0 I   0.0   0.0   0:00.00 rcu_gp
      4 root       0 -20       0      0      0 I   0.0   0.0   0:00.00 rcu_par_gp
      6 root       0 -20       0      0      0 I   0.0   0.0   0:00.00 kworker/0:0H-events_highpri

```

