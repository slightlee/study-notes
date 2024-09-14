## 1、修改注册表
> 打开文件夹
>
> 计算机\HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Directory\shell
>
> 打开文件
>
> 计算机\HKEY_CLASSES_ROOT\*\shell
>

## 2、操作
> 举例：idea
>

### 2.1、shell 下新建项 软件命名的文件夹 idea


#### 2.1.1 修改默认值
![.png](https://cdn.fpic.top/docs/0/2024/png/202409251359115.png)

#### 2.1.2 idea 文件夹右键 新建字符串值
> 数值名称为 Icon
>
> 数值数据为  目录地址
>
> C:\Users\ming\AppData\Local\Programs\IntelliJ IDEA Ultimate\bin\idea64.exe
>

![.png](https://cdn.fpic.top/docs/0/2024/png/202409251359116.png)

最后效果![](https://cdn.fpic.top/docs/0/2024/png/202409251359117.png)

### 2.2、**<font style="color:rgb(38, 38, 38);">idea 文件夹右键</font>**新建项 命名为 command
#### 2.2.1、修改
```shell
"C:\Users\ming\AppData\Local\Programs\IntelliJ IDEA Ultimate\bin\idea64.exe" "%1"
```

![](https://cdn.nlark.com/yuque/0/2023/png/2350759/1702524937245-5a8cab18-9a56-4f33-862c-c76f38c9c7dd.png)![](https://cdn.fpic.top/docs/0/2024/png/202409251359118.png)

