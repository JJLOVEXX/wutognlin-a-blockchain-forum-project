import React from 'react'
import './index.css'
import {Icon, Timeline} from 'antd'

const Jobs = () => (
    <div className="selection-content">
        <div className='All-Jobs'>
            <h1>工作进度如下所示：</h1>
                <Timeline>
                    <Timeline.Item color="green">
                    <p>项目初始阶段 3月8日</p>
                    <p>1.&nbsp;&nbsp;&nbsp;网站主页</p>
                    <p>2.&nbsp;&nbsp;&nbsp;网站登录模块</p>
                    <p>3.&nbsp;&nbsp;&nbsp;个人密码加密</p>
                    <p>4.&nbsp;&nbsp;&nbsp;网站个人主页面</p>
                    <p>5.&nbsp;&nbsp;&nbsp;奖励池页面</p>
                    </Timeline.Item>
                    <Timeline.Item color="green">
                    <p>第二次开会 3月26日</p>
                    <p>6.&nbsp;&nbsp;&nbsp;网站个人信息页面</p>
                    <p>7.&nbsp;&nbsp;&nbsp;创建网站写作模块</p>
                    <p>8.&nbsp;&nbsp;&nbsp;后端数据库表格设计</p>
                    <p>9.&nbsp;&nbsp;&nbsp;后端api接口</p>
                    </Timeline.Item>
                    <Timeline.Item color="green">
                    <p>第三次开会 4月10日</p>
                    <p>10.&nbsp;&nbsp;&nbsp;加入redux状态管理容器</p>
                    <p>11.&nbsp;&nbsp;&nbsp;后端token验证</p>
                    <p>12.&nbsp;&nbsp;&nbsp;浏览文章页面</p>
                    <p>13.&nbsp;&nbsp;&nbsp;网站写作模块完善</p>
                    <p>13.&nbsp;&nbsp;&nbsp;个人主页完善</p>
                    <p>14.&nbsp;&nbsp;&nbsp;代码重构</p>
                    <p>15.&nbsp;&nbsp;&nbsp;后端api接口维护</p>
                    </Timeline.Item>
                    <Timeline.Item>
                        <p>16.&nbsp;&nbsp;&nbsp;网站全局路由守护</p>
                        <p>16.&nbsp;&nbsp;&nbsp;评论点赞功能</p>
                        <p>16.&nbsp;&nbsp;&nbsp;404页面</p>
                        <p>16.&nbsp;&nbsp;&nbsp;网站全局路由守护</p>
                        <p>16.&nbsp;&nbsp;&nbsp;网站全局路由守护</p>
                        <p>16.&nbsp;&nbsp;&nbsp;网站全局路由守护</p>        
                    </Timeline.Item>
                </Timeline>
            <h1>本周完成的任务：</h1>
                <ul>
                    <p>1.&nbsp;&nbsp;&nbsp;路由守卫功能<Icon type="plus-circle" /></p>
                    <p>2.&nbsp;&nbsp;&nbsp;404页面<Icon type="plus-circle" /></p>
                </ul>
            <h1>修改完成的bug如下所示：</h1>
                <ul>
                    <p>1.&nbsp;&nbsp;&nbsp;编辑器用户文章列表新增文章异步操作有误<Icon type="exclamation" /></p>
                    <p>2.&nbsp;&nbsp;&nbsp;新增用户的个人界面写作经历bug<Icon type="check" /></p>
                    <p>3.&nbsp;&nbsp;&nbsp;action：skipLogin 未能在刷新页面先执行<Icon type="exclamation" /></p>
                    <p>4.&nbsp;&nbsp;&nbsp;通过url进入文章编辑界面，header未能隐藏<Icon type="exclamation" /></p>
                    <p>5.&nbsp;&nbsp;&nbsp;文章编辑页面异步获取文章数据有误<Icon type="exclamation" /></p>
                    <p>6.&nbsp;&nbsp;&nbsp;action：skipLogin 未能在刷新页面先执行<Icon type="exclamation" /></p>
                </ul>
         </div>
    </div>
)

export default Jobs;