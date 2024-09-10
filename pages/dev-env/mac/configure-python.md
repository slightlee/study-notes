## 搜索 python 版本
```shell
brew search python
```
![image.png](https://cdn.fpic.top/docs/0/2024/png/20240910133241933.png)
## 安装 python 命令
```shell
brew install python
```
![image.png](https://cdn.fpic.top/docs/0/2024/png/20240910133245104.png)
![image.png](https://cdn.fpic.top/docs/0/2024/png/20240910133249295.png)
## 安装路径
> brew 安装路径 
> **/usr/local/Cellar **

![image.png](https://cdn.fpic.top/docs/0/2024/png/20240910133252649.png)

![image.png](https://cdn.fpic.top/docs/0/2024/png/20240910141023996.png)
## 配置环境变量
> 在  .zshrc 文件 添加 

```shell
#python
export PATH=$PATH:/usr/local/Cellar/python@3.11/3.11.5/bin
```
刷新环境变量或者重启终端
```shell
source .zshrc
```
## 查看版本
### python 版本
```shell
╰─$ python3 --version
Python 3.11.5
```
### pip 版本
```shell
╰─$ pip3 -V
pip 23.2.1 from /usr/local/lib/python3.11/site-packages/pip (python 3.11)
```

## 查询本机python3实际路径
```shell
python3 -c "import sys;print(sys.path)"
```
