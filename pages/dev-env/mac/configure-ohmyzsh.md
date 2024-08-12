### oh my zsh
#### 介绍
> 官方地址：[https://ohmyz.sh/](https://ohmyz.sh/)
> github地址：[https://github.com/ohmyzsh/ohmyzsh](https://github.com/ohmyzsh/ohmyzsh)

#### 安装 oh-my-zsh 
```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```
```shell
sh -c "$(wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"
```
如果上面的不行，试试下面的命令
```
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```
如果还是不能下载，就再试试下面的命令
```
sh -c "$(curl -fsSL https://gitee.com/shmhlsy/oh-my-zsh-install.sh/raw/master/install.sh)"
```

![image.png](https://cdn.dml.us.kg/docs/2024/png/202408121747480.png)
#### 设置主题
ZSH 拥有[丰富的主题](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes)
修改配置文件 ~/.zshrc 中的 ZSH_THEME 来设置使用的风格
```
ZSH_THEME="bira"
```
![image.png](https://cdn.dml.us.kg/docs/2024/png/202408121747481.png)
更新配置或则重启终端
```
source ~/.zshrc
```
#### 插件扩展
##### [#](https://doc.houdunren.com/%E6%95%88%E7%8E%87%E6%8F%90%E5%8D%87/4%20zsh.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6)配置文件

- 插件需要修改 ~/.zshrc 配置文件中的 plugins配置段
- 在目录 ~/.oh-my-zsh/plugins中默认存在了大量插件，只要添加到配置项中即可。
- 更新配置后使用source ~/.zshrc命令重新加载配置
