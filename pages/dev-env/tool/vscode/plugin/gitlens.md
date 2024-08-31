## gitlens 破解
不懂Hack的开发不是好程序员，我是夜鸦，行走在hack路上不安分的程序员
gitlens是老外写的vscode插件，开始是免费的，后来收费，无奈收费太贵了，支持是不可能支持的，打工是不可能支持的
### 思路
众所周知，vscode插件就像跑在浏览器上的前端代码一样，代码是暴露的，基本上是压缩和混淆过的。不过呢，在这个插件中，字符串和一部分代码是没有混淆的，所以思路就是从字符串入手，查找代码里面判断会员和非会员的逻辑，修改if判断，从而达到欺骗目的。
比如：![image.jpg](https://cdn.dml.us.kg/docs/2024/png/202408131032401.png)
在插件代码里面搜索这个`Start Pro Trial`，就可以找到弹窗这个弹窗的逻辑位置(需要花点功夫)
下面是具体过程
### 找到gitlens插件目录
vscode的插件目录是在个人主目录下的的.vscode文件夹，比如我的是在`C:\Users\ming\.vscode`目录下
![image.jpg](https://cdn.dml.us.kg/docs/2024/png/202408131032402.png)
### 将dist目录拖到vscode打开
dist目录才是源码目录，找到里面
### 开始破解过程
要修改的文件只有两个，一个是`dist/gitlens.js`，另一个是`dist/browser/gitlens.js`

![image.jpg](https://cdn.dml.us.kg/docs/2024/png/202408131032403.png)

dist/gitlens.js，dist/browser/gitlens.js文件文件，Ctrl+F查找.qn.Free，然后Ctrl+H替换为.qn.Pro 最后重启vscode，搞定！

![image.jpg](https://cdn.dml.us.kg/docs/2024/png/202408131032404.png)
