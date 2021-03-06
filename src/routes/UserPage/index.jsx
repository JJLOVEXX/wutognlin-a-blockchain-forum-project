import React, {Component} from 'react'
import { Layout, Icon, Avatar, List, Divider, Skeleton} from 'antd'
import './index.css';
import { connect } from 'react-redux'
import {fetchVisitData} from '../../redux/actions/visit'
import { Redirect, Link } from 'react-router-dom'
const { Content, Sider } = Layout;


// 模拟数据
  
  
const IconText = ({ type, text }) => (
<span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
</span>
);




class userPage extends Component{
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
    state = {
        openKeys: ['sub1'],
        list: [],
        listData: [],
        selfIntro: '',
    };

    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
            openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }
    componentDidMount (){
        this.props.dispatch(fetchVisitData(this.props.match.params.id))
        if(this.props.userArticles!==null) {
            setTimeout(() => {
                const articleList = [];
                const article = this.props.userArticles.map(item => {
                    if(item.release_status === 'yes'){
                        return item.post_title
                    } else {
                        return console.log('')
                    }
                })
                article.forEach((item) => {
                    if(typeof(item) !== "undefined") {
                        articleList.push(item)
                    }
                })
                const list = [];
                for (let i = 0; i < this.props.userArticles.length; i++) {
                    if(this.props.userArticles[i].release_status === 'yes') {
                        list.push({
                            title: this.props.userArticles[i].post_title,
                            avatar: this.props.user_avatar,
                            content: this.props.userArticles[i].article_intro,
                            img: this.props.userArticles[i].intro_img,
                            link: '/article/'+this.props.userArticles[i].post_id
                        });
                    }
                }
                this.setState({
                    list: [...articleList],
                    listData: [...list],
                    selfIntro: this.props.selfIntro
                });
                }, 50);
        } else {
            return
        }
        
            
    }
    render(){
        const { isFetching } = this.props
        const isEmpty = this.props.userArticles.length === 0
        if(!this.props.fetchStatus){
            return (<Redirect to="/404" />);
        }
        return( 
            <div className="visit-home-content">
                {isEmpty
                ? (isFetching ? <Skeleton active /> : <h2>Empty.</h2>)
                : <div>
                    <Layout style={{ padding: '24px 0', background: '#fff' }}>
                        <Content style={{ padding: '0 24px', minHeight: 280, overflow: 'hidden' }}>
                        <List
                            itemLayout="vertical"
                            size="large"
                            style={{ width: 1000 }}
                            pagination={{
                            onChange: (page) => {
                                console.log(page);
                            },
                            pageSize: 5,
                            }}
                            dataSource={this.state.listData}
                            footer={<div><b>区块链知识</b> 分享论坛</div>}
                            renderItem={item => (
                            <List.Item
                                key={item.title}
                                actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                                extra={item.img === ''
                                ? <div></div>:<img width={272} height={200} alt="logo" src={item.img} />
                                }
                            >
                                <List.Item.Meta
                                title={<Link to={item.link}>{item.title}</Link>}
                                description={item.description}
                                />
                                {item.content}
                            </List.Item>
                            )}
                        />
                        </Content>
                        <Sider width={350} collapsedWidth="0" style={{ background: '#fff', marginRight: '100'}}>
                        

                            <div className='page-sider'>
                            <div ><Avatar size={64} src={this.props.userInfo.user_avatar}></Avatar><h1>{this.props.userInfo.user_name}</h1></div>
                            <p>个人介绍</p>
                            <Divider />
                            <h3>{this.props.userInfo.self_introduction}</h3>
                            <Divider>创作经历</Divider>
                            <p>我的文章：</p>
                            <Divider dashed />
                            <List
                            size="small"
                            dataSource={this.state.list}
                            renderItem={item => (<List.Item>{item}</List.Item>)}
                            />
                            </div>
                        
                        </Sider>
                    </Layout>
                </div>

                }
                
            </div>
                  
        )
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.visitData.isFetching,
        userInfo: state.visitData.userInfo,
        userArticles: state.visitData.userArticles,
        fetchStatus: state.visitData.fetchStatus,
    }
}

export default connect(mapStateToProps)(userPage)