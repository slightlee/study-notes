[pnpm](https://pnpm.io/zh/installation)含义为 performant npm 意指『高性能的 npm』，与npm一样的都是软件包管理工具。pnpm 比其他包管理器快 2 倍
## 安装pnpm
使用npm安装
```
npm install -g pnpm
```
## 镜像加速
使用镜像加速可以让我们下载软件更快，可参考 nrm 文档使用
## 常用命令
下面介绍pnpm常用命令的使用。
#### 安装软件
##### 全局安装
```
pnpm add -g <Module Name>
```
##### 为当前项目安装软件包
```
pnpm add <Module Name>
```
##### 根据package.json安装软件
```
pnpm install 
# 或
pnpm i
```
##### 生产环境

- 在package.json文件dependencies属性下增加记录
- pnpm install 时会自动安装该软件包
- 使用pnpm install --production或者NODE_ENV变量值为production时，安装该软件包
```
pnpm add <Module Name>
```
##### 开发环境

- 在package.json文件devDependencies属性下增加记录
- pnpm install 时会自动安装该软件包
- 使用pnpm install --production或者NODE_ENV变量值为production时，不会安装该软件包

```
pnpm add -D <Module Name>
```
### 查看软件
##### 列出项目的依赖
```
pnpm ls
# 或
pnpm list
```
##### 查看本地已安装的包信息
```
pnpm ls tailwindcss
或
pnpm ls | grep tailwindcss
```
##### 查看包信息
```
pnpm info tailwindcss
或
pnpm view tailwindcss
```
##### 列出项目的依赖，并限制显示的依赖深度
```
pnpm list --depth=2
```
##### 查看全局包信息
```
pnpm list -g
```
### 更新软件
##### 更新pnpm自身
```
pnpm add -g pnpm
```
##### 更新所有软件包
```
pnpm update
# 或
pnpm up
```
##### 更新指定软件包
```
pnpm update <Module Name>
```
### 卸载软件
##### 删除全局软件
```
pnpm uninstall -g <Module Name>
# 或
pnpm rm -g <Module Name>
# 或
pnpm un  -g <Module Name>
```
##### 删除项目中软件包
```
pnpm un <Module Name>
```
