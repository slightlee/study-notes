## 一、主分支Master
首先，代码库应该有一个、且仅有一个主分支。所有提供给用户使用的正式版本，都在这个主分支上发布。
![.png](https://cdn.nlark.com/yuque/0/2021/webp/2350759/1639727588476-bef068f0-ced7-4e4a-a537-1aa8e898321f.webp#averageHue=%23fae395&height=600&id=u7afb4f2a&originHeight=600&originWidth=300&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=300)
Git主分支的名字，默认叫做Master或者Main。它是自动建立的，版本库初始化以后，默认就是在主分支在进行开发。
## 二、开发分支Develop
主分支只用来发布重大版本，日常开发应该在另一条分支上完成。我们把开发用的分支，叫做Develop。
![.png](https://cdn.nlark.com/yuque/0/2021/webp/2350759/1639727672987-cbc880bd-c737-4497-b509-94345c428efe.webp#averageHue=%23deefc4&height=553&id=ue7d7e635&originHeight=553&originWidth=500&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=500)

这个分支可以用来生成代码的最新隔夜版本（nightly）。如果想正式对外发布，就在Master分支上，对Develop分支进行"合并"（merge）。
### 1、Git创建Develop分支的命令：
```git
git checkout -b develop master
```
### 2、将Develop分支发布到Master分支的命令
```git
# 切换到Master分支
git checkout master

# 对Develop分支进行合并
git merge --no-ff develop
```
#### 1、 --no-ff参数
这里稍微解释一下上一条命令的--no-ff参数是什么意思。默认情况下，Git执行"快进式合并"（fast-farward merge），会直接将Master分支指向Develop分支。

 ![](https://cdn.nlark.com/yuque/0/2021/webp/2350759/1639727875275-23c6a1f7-fb84-4e55-aa86-ad06492c7357.webp#averageHue=%23c5ead4&height=606&id=ufd031542&originHeight=606&originWidth=500&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=500)
使用--no-ff参数后，会执行正常合并，在Master分支上生成一个新节点。为了保证版本演进的清晰，我们希望采用这种做法。
![.png](https://cdn.nlark.com/yuque/0/2021/webp/2350759/1639727920294-a56494d8-fb54-4075-9cdf-bc9276af871b.webp#averageHue=%23b3e0c7&height=726&id=u84c12160&originHeight=726&originWidth=250&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=250)
## 三、临时性分支
前面讲到版本库的两条主要分支：Master 和 Develop。前者用于正式发布，后者用于日常开发。其实，常设分支只需要这两条就够了，不需要其他了。
但是，除了常设分支以外，还有一些临时性分支，用于应对一些特定目的的版本开发。临时性分支主要有三种：

- 功能（feature）分支
- 预发布（release）分支
- 修补bug（fixbug）分支

这三种分支都属于临时性需要，使用完以后，应该删除，使得代码库的常设分支始终只有Master和Develop。
接下来，一个个来看这三种"临时性分支"。
#### 第一种是功能分支 feature-*
它是为了开发某种特定功能，从Develop分支上面分出来的。开发完成后，要再并入Develop。
![.png](https://cdn.nlark.com/yuque/0/2021/webp/2350759/1639727989560-4bd1da33-c4ba-4d8f-aa3e-926eca567ad3.webp#averageHue=%23cee69f&height=727&id=u1fae4872&originHeight=727&originWidth=400&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=400)
功能分支的名字，可以采用feature-*的形式命名。
##### 1、创建一个功能分支
创建一个功能分支：
```git
 git checkout -b feature-x develop
```
##### 2、合并到develop分支
开发完成后，将功能分支合并到develop分支：
```git
git checkout develop

git merge --no-ff feature-x
```
##### 3、删除feature分支
删除feature分支：
```git
git branch -d feature-x
```
##### 拓展：删除远程分支
> 如果本地分支已推送到远程分支，删除本地分支之后想删除远程分支操作

```shell
git push origin --delete feature-x
```
#### 第二种是预发布分支 release-*
它是指发布正式版本之前（即合并到Master分支之前），我们可能需要有一个预发布的版本进行测试。
预发布分支是从Develop分支上面分出来的，预发布结束以后，必须合并进Develop和Master分支。它的命名，可以采用release-*的形式。
##### 1、创建一个预发布分支
创建一个预发布分支：
```git
git checkout -b release-1.2 develop
```
##### 2、合并到master分支
确认没有问题后，合并到master分支：
```git
git checkout master

git merge --no-ff release-1.2

# 对合并生成的新节点，做一个标签
git tag -a 1.2
```
##### 3、合并到develop分支
再合并到develop分支：
```git
git checkout develop

git merge --no-ff release-1.2
```
##### 4、删除预发布分支
最后，删除预发布分支：
```git
git branch -d release-1.2
```
#### 第三种是修补bug分支 fixbug-* 
软件正式发布以后，难免会出现bug。这时就需要创建一个分支，进行bug修补。
修补bug分支是从Master分支上面分出来的。修补结束以后，再合并进Master和Develop分支。它的命名，可以采用fixbug-*的形式。
![.png](https://cdn.nlark.com/yuque/0/2021/webp/2350759/1639728657311-db1f58d8-7bed-40e8-a55d-3a7cc3b02d5d.webp#averageHue=%23e9df81&height=427&id=ub36500b1&originHeight=427&originWidth=500&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=500)
##### 1、创建一个修补bug分支
创建一个修补bug分支：
```git
git checkout -b fixbug-0.1 master
```
##### 2、合并到master分支
修补结束后，合并到master分支：
```git
git checkout master

git merge --no-ff fixbug-0.1

git tag -a 0.1.1
```
##### 3、合并到develop分支
再合并到develop分支：
```git
git checkout develop

git merge --no-ff fixbug-0.1
```
##### 4、删除修补bug分支
最后，删除"修补bug分支"：
```git
git branch -d fixbug-0.1
```

## 四、常用命令![git.png](https://cdn.nlark.com/yuque/0/2023/png/2350759/1700701822882-635a5963-aa21-44d3-9fe5-a8c65202ebe7.png#averageHue=%23203336&clientId=u02b94979-bfa0-4&from=drop&id=u4c1d79e8&originHeight=812&originWidth=1217&originalType=binary&ratio=1&rotation=0&showTitle=false&size=831978&status=done&style=none&taskId=uf6119040-0a2f-4a27-b443-7bdc512f284&title=)


> 来源：
> [https://mp.weixin.qq.com/s/pLlUROkQfbfiW-bBT4BPFg](https://mp.weixin.qq.com/s/pLlUROkQfbfiW-bBT4BPFg)
> [https://www.ruanyifeng.com/blog/2012/07/git.html](https://www.ruanyifeng.com/blog/2012/07/git.html)