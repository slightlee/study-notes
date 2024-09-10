
## 1、指定默认命令行 快捷键【Ctrl + shirt + P】
> 默认使用 pwsh  【PowerShell】

![image.png](https://cdn.fpic.top/docs/0/2024/png/20240910133413551.png)
![image.png](https://cdn.fpic.top/docs/0/2024/png/20240910133417291.png)
## 2、setttings.json文件增加配置
```json
// 默认激活命令行的配置 
"terminal.integrated.defaultProfile.windows": "PowerShell",


// 解决命令行乱码问题  chcp 默认输出 936  utf-8(65001)  GBK(936 )
"terminal.integrated.profiles.windows": {
    "Command Prompt": {
        "path": "C:\\Windows\\System32\\cmd.exe",
        "args": ["-NoExit", "/K", "chcp 65001"]
    },
    "PowerShell": {
        "source": "PowerShell",
        "args": ["-NoExit", "/C", "chcp 65001"]
    }
},
```
## 3、再次查看
![image.png](https://cdn.fpic.top/docs/0/2024/png/20240910133418483.png)
