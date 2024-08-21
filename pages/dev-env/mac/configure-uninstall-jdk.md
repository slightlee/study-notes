# 卸载JDK
## 1、删除运行路径和运行环境等
```shell
sudo rm -fr /Library/Internet\ Plug-Ins/JavaAppletPlugin.plugin 
sudo rm -fr /Library/PreferencesPanes/JavaControlPanel.prefPane 
sudo rm -fr ~/Library/Application\ Support/Java
```
## 2、删除当前版本的jdk
```shell
sudo rm -rf /Library/Java/JavaVirtualMachines/jdk1.8.0_212.jdk
```
（注：不确定版本号先查看当前版本 ls /Library/Java/JavaVirtualMachines/）
## 3、检查是否卸载成功
```shell
java -version
```
