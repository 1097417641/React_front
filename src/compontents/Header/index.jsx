import React, { Component } from 'react'
import { Layout, Menu} from 'antd'
import './index.css'
import { Link } from 'react-router-dom'
import {formateDate} from '../../utils/detaUtils'





const {Header}  = Layout
export default class HeaderComponent extends Component {

    state = {
        navArr:[
            {key: '1', title:'档案检索', keyPath: '/search'},
            {key: '2', title:'关系可视化', keyPath: '/KG'},
            {key: '3', title:'问答系统', keyPath: '/qa'},
        ],
        currentTime: formateDate(Date.now())    
    }


    getTime = () => {
        
        this.intervalId = setInterval(() => {
            const currentTime = formateDate(Date.now())
            this.setState(currentTime)
        }, 1000)
    }

    

    pushShow = (keyPath) => {
        console.log(this.props)
        
    }

    render() {
        const {navArr} = this.state
        return (
            <div>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    
                    <div className="logo"/>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} >
                         {/*<Menu.Item key="1" onClick={() => this.pushShow("1")}>档案检索</Menu.Item>   
                          <Menu.Item key="2" onClick={() => this.pushShow("2")}>问答系统</Menu.Item>*/}
                          {navArr.map(navObj => {
                              return <Menu.Item key={navObj.key} >
                                     <Link to={navObj.keyPath}>{navObj.title}</Link>
                              </Menu.Item>
                          } )}
                    </Menu>
                </Header>

                <div>

                </div>

            </div>
        )
    }
}

