<!--
 * @Author: demain_lee lmm_work@163.com
 * @Date: 2024-09-24 14:14:20
 * @LastEditors: demain_lee lmm_work@163.com
 * @LastEditTime: 2024-09-24 14:15:24
 * @FilePath: \study-notes\pages\dev-env\linux\centos_yum源_切换.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
### 报错信息
```shell
yum install git
Repository extras is listed more than once in the configuration
CentOS Linux 8 - AppStream                                                                                0.0  B/s |   0  B     00:00
Errors during downloading metadata for repository 'appstream':
  - Curl error (6): Couldn't resolve host name for http://mirrorlist.centos.org/?release=8&arch=x86_64&repo=AppStream&infra=stock [Could not resolve host: mirrorlist.centos.org]
Error: Failed to download metadata for repo 'appstream': Cannot prepare internal mirrorlist: Curl error (6): Couldn't resolve host name for http://mirrorlist.centos.org/?release=8&arch=x86_64&repo=AppStream&infra=stock [Could not resolve host: mirrorlist.centos.org]
Repository extras is listed more than once in the configuration
CentOS Linux 8 - AppStream                                                                                0.0  B/s |   0  B     00:00
Errors during downloading metadata for repository 'appstream':
  - Curl error (6): Couldn't resolve host name for http://mirrorlist.centos.org/?release=8&arch=x86_64&repo=AppStream&infra=stock [Could not resolve host: mirrorlist.centos.org]
Error: Failed to download metadata for repo 'appstream': Cannot prepare internal mirrorlist: Curl error (6): Couldn't resolve host name for http://mirrorlist.centos.org/?release=8&arch=x86_64&repo=AppStream&infra=stock [Could not resolve host: mirrorlist.centos.org]
[root@iZ2zedzqu2rkbmmh35wpi9Z /]# Repository extras is listed more than once in the configuration
-bash: Repository: command not found

```

### 原因
> CentOS 停止维护导致
>

### 解决方案 
#### 查看服务器信息
> lsb_release -a
>

![](https://cdn.fpic.top/docs/0/2024/png/202409261416320.png)

#### 切换华为镜像
> [https://mirrors.huaweicloud.com/mirrorDetail/5ea14ecab05943f36fb75ee5?mirrorName=centos&catalog=os](https://mirrors.huaweicloud.com/mirrorDetail/5ea14ecab05943f36fb75ee5?mirrorName=centos&catalog=os)
>

![](https://cdn.fpic.top/docs/0/2024/png/202409261416321.png)

##### 根据提示 这里使用 Centos-Vault 配置
![](https://cdn.fpic.top/docs/0/2024/png/202409261416322.png)

##### 按照步骤操作:
```shell
wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.huaweicloud.com/artifactory/os-conf/centos/centos-8.repo
```



