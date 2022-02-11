import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import Header from '../../compontents/header'
import memoryUtils from '../../utils/memoryUtils'
import { Navigate, Outlet } from 'react-router-dom'
import './admin.css'

const {Footer, Sider, Content} = Layout


export default class Admin extends Component {
    render() {
       
        
        return (
            <Layout>
            <Header className="site-header" />

            <Content className="site-layout">
                <Outlet/>
            </Content>
            <Footer className="site-footer" >HFUT</Footer>
          </Layout>
        )
    }
}
