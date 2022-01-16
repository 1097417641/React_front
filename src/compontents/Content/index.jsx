import React, { Component } from 'react'
import { Layout} from 'antd'
import {Routes, Route } from 'react-router-dom'
import Search from "../../pages/search/search"
import QA from "../../pages/qa"
import KG from '../../pages/kg/kg'



const {Content} = Layout

export default class ContentComponent extends Component {
    render() {
        return (
            <div>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                    {/*<Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>*/}
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            <Routes>

                <Route path="/search/*" element={<Search/>}/>
                <Route path="/KG/*" element={<KG/>} />
                <Route path="/qa/*" element={<QA/>}/>
            </Routes>
            </div>
            </Content>
            </div>
        )
    }
}
