# problems && record

## node fs 的使用需要下载 node 且 ts 环境下还需要下载@type/node

## 引入的第三方工具可以封装到 utils 中

## tsc 别名不编译

    需要使用tsc-alias 进行别名替换(仍然不行)

## await 简化 promise 的情况是：只管 promise 正常返回，不用管错误场景

想管的话需要使用 try、catch

## process.cwd()是 node 执行时所处的路径, \_\_dirname 是当前文件的所在位置

const currPath = process.cwd() +"\\" + projectName ;path 拼接时不能识别'\'
