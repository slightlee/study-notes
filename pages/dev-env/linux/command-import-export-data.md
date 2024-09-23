> 简单的方式，使用 **Navicat** 工具转储结构和数据的时候，生成的 sql 文件会比较大，因为每一条数据都会生成一条 sql 语句，所以会导致 使用 source 还原的时候会很慢很慢很慢，就会出现卡死的问题！！！
>

---

## 一、导出数据库
### 1.导出完整的数据：表结构+数据
```plain
mysqldump -u 用户名 -p 数据库名 > 路径+数据库名.sql
```

按下回车键后会提示输入密码，输入即可。  
注意：mysqldump 命令路径是根据你 MySQL 安装路径决定的。

### 2.只导出表结构
可以使用 -d 选项，只需要导出表结构，无数据内容，格式如下：

```plain
mysqldump -u用户名 -p -d 数据库名 > 数据库名.sql
```

按下回车键后会提示输入密码，输入即可。

## 二、导入数据库
### 1.source方式
（1）选择数据库

```plain
# 创建数据库
mysql> create database evaluation;
# 使用数据库
mysql>use demoDatabase;
```

（2）设置数据库编码

```plain
mysql>set names utf8;
```

（3）导入数据（注意sql文件的路径）

```plain
mysql>source /路径+数据库名.sql
```

### 2.mysql 方式
mysql -u用户名 -p密码 数据库名 < 数据库名.sql

```plain
mysql -u 用户名 -p 数据库名 < 数据库名.sql
```



