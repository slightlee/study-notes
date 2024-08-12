[nrm(opens new window)](https://github.com/Pana/nrm)可以帮助我们在不同的镜像间进行切换，帮助你加快软件的下载
首先安装命令。如果安装不成功，可以先按上面步骤将npm手动设置为淘宝源。
```
pnpm add -g nrm 
#或
npm install -g nrm
```
## 常用命名
### 查看镜像列表
```
nrm ls
```
结果如下
```
npm ---------- https://registry.npmjs.org/
yarn --------- https://registry.yarnpkg.com/
tencent ------ https://mirrors.cloud.tencent.com/npm/
cnpm --------- https://r.cnpmjs.org/
taobao ------- https://registry.npmmirror.com/
npmMirror ---- https://skimdb.npmjs.com/registry/
```
### 选择淘宝镜像
```
nrm use taobao
```
### 查看当前源
```
nrm current
//或
nrm test
```
### 测试速度
```
nrm test
```
## 其他方法
设置镜像加速可以加快软件下载速度，下面是设置npm的镜像源为阿里云。
```
npm config set registry https://registry.npmmirror.com
```
也可以使用 [淘宝镜像(opens new window)](https://npmmirror.com/)安装 cnpm 命令
```
npm install -g cnpm --registry=https://registry.npmmirror.com
```
## 常见问题
mac m1芯片电脑修改失败，请执行以下命令
```
npm uninstall -g nrm
npm i -g @adams549659584/nrm
```
