import React, { Component } from 'react'
import { Layout } from 'antd'
import LeftNav from '../../compontents/left-nav'
import Header from '../../compontents/header'
import memoryUtils from '../../utils/memoryUtils'
import { Navigate, Outlet } from 'react-router-dom'


const {Footer, Sider, Content} = Layout


export default class Admin extends Component {
    render() {
        const user = memoryUtils.user
        console.log("Admin",user)
        if(!user || !user.user_id){
            console.log("redirect to login")
            return <Navigate to='/login'/>
        }

        return (
            <Layout style={{minHeight: '100%'}}>
                <Sider>
                    <LeftNav/>
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content style={{margin: 20, backgroundColor: '#fff'}}>
                        <Outlet/>


                    </Content>
                    <Footer style={{textAlign: 'center', color: '#ccccccc'}}>HFUT</Footer>
                </Layout>

            </Layout>
        )
    }
}
