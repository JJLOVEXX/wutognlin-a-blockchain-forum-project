# wutognlin-a-blockchain-forum-project
华南理工大学-梧桐林开发小队的开发项目

论坛主体部分，包括用户前端页面和后端服务器。

本地运行方式：
## 本地数据库建立
1. 按照代码中的schema目录的实体模型，在本地的mySQL中建立nodesql数据库并设计好表
2. 更改server目录下的config中default.js的数据库配置

## 进入项目根目录
1. npm i 安装依赖
2. npm start 启动前端
3. node .\server\app.js 启动后端
