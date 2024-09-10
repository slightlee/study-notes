# git log
## format 定制显示的记录格式
```shell
# --pretty=format 列出了常用的格式占位符写法及其代表的意义
git log --pretty=format:"%h - %an, %ar : %s"
```
![image.png](https://cdn.fpic.top/docs/0/2024/png/20240910140850224.png)
## 2、--graph 添加了一些ASCII字符串来形象地展示你的分支、合并历史：
```shell
git log --pretty=format:"%h - %an, %ar : %s" --graph
```
![image.png](https://cdn.fpic.top/docs/0/2024/png/20240910140851570.png)
## 3、commit数量
```shell
git log --pretty=%aN | sort | uniq -c | sort -k1 -n -r | head -n 10
```
![image.png](https://cdn.fpic.top/docs/0/2024/png/20240910140859126.png)

