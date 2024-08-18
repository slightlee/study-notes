# git log
## format 定制显示的记录格式
```shell
# --pretty=format 列出了常用的格式占位符写法及其代表的意义
git log --pretty=format:"%h - %an, %ar : %s"
```
![image.png](https://cdn.nlark.com/yuque/0/2023/png/2350759/1686013036048-19925ec4-d797-41b2-ad2d-43f7f94f1afd.png#averageHue=%23120d09&clientId=u05616f01-a3a2-4&from=paste&height=113&id=u0a4cab44&originHeight=113&originWidth=535&originalType=binary&ratio=1&rotation=0&showTitle=false&size=9677&status=done&style=none&taskId=u24e96e22-b004-4ca0-bbe7-9514f031e58&title=&width=535)
## 2、--graph 添加了一些ASCII字符串来形象地展示你的分支、合并历史：
```shell
git log --pretty=format:"%h - %an, %ar : %s" --graph
```
![image.png](https://cdn.nlark.com/yuque/0/2023/png/2350759/1686013060201-79b49916-dcb5-4fd5-815e-90ba73564dbf.png#averageHue=%23080503&clientId=u05616f01-a3a2-4&from=paste&height=245&id=uc41321ae&originHeight=245&originWidth=602&originalType=binary&ratio=1&rotation=0&showTitle=false&size=23350&status=done&style=none&taskId=u57bc883f-2409-47eb-b343-0a53e12b2e5&title=&width=602)
## 3、commit数量
```shell
git log --pretty=%aN | sort | uniq -c | sort -k1 -n -r | head -n 10
```
![image.png](https://cdn.nlark.com/yuque/0/2023/png/2350759/1686015816050-426264da-aff8-4e56-a8ab-056e012aca3b.png#averageHue=%23030201&clientId=u4c7974ad-6374-4&from=paste&height=68&id=u022ffd22&originHeight=68&originWidth=525&originalType=binary&ratio=1&rotation=0&showTitle=false&size=3990&status=done&style=none&taskId=u1cc4f127-871a-4bb4-835f-719f2b01aa1&title=&width=525)

