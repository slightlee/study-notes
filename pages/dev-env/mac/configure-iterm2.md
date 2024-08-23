## 1、环境配置介绍
Mac系统默认使用bash作为终端，但是新的Mac系统已经默认使用zsh，查看方式：
```shell
➜  ~ cat /etc/shells
# List of acceptable shells for chpass(1).
# Ftpd will not allow users to connect who are not using
# one of these shells.

/bin/bash
/bin/csh
/bin/dash
/bin/ksh
/bin/sh
/bin/tcsh
/bin/zsh
```
### bash与zsh切换命令
```shell
chsh -s /bin/zsh
chsh -s /bin/bash
```
### bash与zsh配置文件

- **bash的配置文件**：`~/.bash_profile`
- **zsh的配置文件**：`~/.zshrc`

## 2、iTerm2简介
> `Mac OS`自带的终端，用起来虽然有些不太方便，界面也不够友好，`iTerm2`是一款相对比较好用的终端工具。`iTerm2`常用操作包括主题选择、声明高亮、自动填充建议、隐藏用户名和主机名、分屏效果等


## **3、iTerm2**安装
`iTerm2`下载地址：[https://www.iterm2.com/downloads.html](https://www.iterm2.com/downloads.html)
`注：下载的是压缩文件，解压后直接双击执行程序文件，或者直接将它拖到Applications目录下。`
也可以直接使用`Homebrew`进行安装：
```shell
brew cask install iterm2
```

## 4、iTerm2主题配置
### Dracula 主题
> [https://github.com/dracula/iterm/blob/master/Dracula.itermcolors](https://github.com/dracula/iterm/blob/master/Dracula.itermcolors)


#### 4.1 先导入下载的 主题
#### 4.2 选择 Dracula 主题
![image.png](https://cdn.dml.us.kg/docs/2024/png/202408230859380.png)

## 5、配置Oh My Zsh
`Oh My Zsh` 是对主题的进一步扩展。

### 安装方式1：
> 官网：[https://ohmyz.sh/](https://ohmyz.sh/)

 ![image.png](https://cdn.dml.us.kg/docs/2024/png/202408230859381.png)
### 安装方式2：
> github地址：[https://github.com/ohmyzsh/ohmyzsh](https://github.com/ohmyzsh/ohmyzsh)

```shell
## 找到仓库， 然后clone到本地
git clone https://github.com/ohmyzsh/ohmyzsh.git
## 把仓库复制到 .oh-my-zsh目录
cp -r ohmyzsh ~/.oh-my-zsh
## 复制.zshrc
cp ohmyzsh/templates/zshrc.zsh-template ~/.zshrc
## shell换成zsh
chsh -s /bin/zsh
```

## 6、声明高亮
`zsh-syntax-highlighting` 插件为 `shell zsh` 提供语法高亮显示。当命令在 `zsh` 提示符下输入到交互式终端时，它可以突出显示命令。这有助于在运行命令之前检查命令，特别是捕获语法错误。
### 方式一：`Homebrew` 安装：
```shell
brew install zsh-syntax-highlighting
```
### 方式二：`git` 命令安装：
```shell
cd ~/.oh-my-zsh/custom/plugins/
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git
```
安装成功之后，编辑 `vim ~/.zshrc` 文件，找到 `plugins`，我们需要把高亮插件加上：
```
plugins=(git zsh-syntax-highlighting)
```

`**注：请务必保证插件顺序，zsh-syntax-highlighting 必须在最后一个。**`

```shell
source ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
```
### 操作命令
```shell
vim ~/.zshrc

source ~/.zshrc
```
![image.png](https://cdn.dml.us.kg/docs/2024/png/202408230859382.png)
![image.png](https://cdn.dml.us.kg/docs/2024/png/202408230859383.png)

## 7、自动建议填充
这个功能是非常实用的，可以方便我们快速的敲命令。
配置步骤，先克隆 `zsh-autosuggestions` 项目，到指定目录：
```shell
git clone https://github.com/zsh-users/zsh-autosuggestions ~/.oh-my-zsh/custom/plugins/zsh-autosuggestions
```
然后编辑 `vim ~/.zshrc` 文件，找到 `plugins` 配置，增加 `zsh-autosuggestions` 插件。

`**注：请务必保证插件顺序，zsh-syntax-highlighting 必须在最后一个。**`

用下方这个
![image.png](https://cdn.dml.us.kg/docs/2024/png/202408230859384.png)

效果如下：
![image.png](https://cdn.dml.us.kg/docs/2024/png/202408230859385.png)
