## 介绍
> 官网  [https://nvm.uihtm.com/](https://nvm.uihtm.com/)
> github地址 [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)

## 安装nvm
```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```
```shell
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```
> 1. wget 是一个命令行工具，用于通过 HTTP、HTTPS 或 FTP 协议从远程服务器下载文件。在这个命令中，wget 用于从指定的 URL 下载文件。
> 2. -qO- 是 wget 命令的选项。其中，-q 表示静默模式，不显示任何输出信息，而 -O- 表示将下载的文件内容输出到标准输出（即终端屏幕），而不保存到磁盘文件。
> 3. https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh 是要下载的文件的 URL。在这里，该 URL 指向 NVM 的安装脚本文件，版本号为 v0.39.5。
> 4. | 是管道符号，用于将前一个命令的输出作为后一个命令的输入。
> 5. bash 是要执行的命令，表示使用 bash 解释器执行之前下载的脚本文件。
> 
因此，整个命令的含义是，使用 wget 下载 NVM 的安装脚本文件，并将其内容通过管道传递给 bash 命令进行执行。这会导致 NVM 工具被安装到您的系统上。

如果上方命令提示链接失败可以下载这个文件然后本地执行安装
![image.png](https://cdn.dml.us.kg/docs/2024/png/202408121737476.png)
下载 install.sh 文件内容  可以重命名下文件  这里 重命名为  nvm-install.sh 
```shell
bash nvm-install.sh
```
![image.png](https://cdn.dml.us.kg/docs/2024/png/202408121737477.png)

```shell
bash: source ~/.bashrc

zsh: source ~/.zshrc

ksh: . ~/.profile
```

终端键入"command -v nvm"，回车，如果输出了 "nvm"，代表已经安装成功
![image.png](https://cdn.dml.us.kg/docs/2024/png/202408121737478.png)
或则
```shell
$ nvm -v                   
0.39.5
```
## 安装nodejs
### 安装指定版本的node
> v + node版本号

```shell
nvm install v8.17.0 
nvm install v12.22.12
nvm install v18.17.1
```
### 切换node版本
```shell
nvm use 18.17.1
```
想要修改默认的 Node.js 版本，运行下面的命令：
```shell
nvm alias default 18.17.1
```
重启终端
