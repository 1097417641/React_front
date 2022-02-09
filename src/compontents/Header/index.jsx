import React, { Component } from 'react'
import LinkButton from '../link-button'
import memoryUtils from '../../utils/memoryUtils'
import { Menu, Button, Dropdown} from 'antd'

import withRouter from '../route/withRouter'
import {Link} from 'react-router-dom'
import menuList from '../../config/menuConfig'
import './index.css'
import { createFromIconfontCN, UserOutlined,DownOutlined} from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_3173484_k29mav3830l.js',
});

const SubMenu = Menu.SubMenu;

class Header extends Component {

    menu = (
        <Menu onClick={this.onClickDropDown}>
          <Menu.Item key="1">1st menu item</Menu.Item>
          <Menu.Item key="2">2nd menu item</Menu.Item>
          <Menu.Item key="3">3rd menu item</Menu.Item>
        </Menu>
      );

      onClickDropDown = ({key}) =>{
          console.log(key)
      }


    
    getMenuNodes = (menuList) => {
        console.log(this.props)
        const path = this.props.location.pathname
        return menuList.reduce((pre,item) => {
          //
            if(!item.children){
              pre.push((
                  <Menu.Item key={item.key}>
                    <IconFont type={item.icon}/>
                    
                    <Link to={item.key} style={{paddingLeft: "3px"}}>
                      <span>{item.title}</span>
                    </Link>
                  </Menu.Item>
                ))
              }else {
              // 查找一个与当前请求路径匹配的子Item
                const cItem = item.children.find(cItem => path.indexOf(cItem.key)===0)
                // 如果存在, 说明当前item的子列表需要打开
                if(cItem){
                  this.openKey = item.key
                }
                pre.push((
                  <SubMenu 
                    key={item.key}
                    title={
                    <span>{item.title}</span>}
                  >
                    {this.getMenuNodes(item.children)}
                  </SubMenu>
              ))
            }
          
          return pre
        }, [])
    }
    
      /**
       * 在第一次render()之前执行一次
       * 为第一个render()准备数据(必须同步的)
       */
    UNSAFE_componentWillMount() {
        this.menuNodes = this.getMenuNodes(menuList)
        console.log("componentWillMount",this.menuNodes)
    }

    handleLoginClick = () => {
        //console.log(this.props)
        const newNavigate = this.props.navigate
        newNavigate('/login')
    }

    render() {
        const user = memoryUtils.user

        const username = memoryUtils.user.user_id
        let path = this.props.location.pathname
        if(path.indexOf('/search')===0){
        path = '/search'
        }
        const openKey = this.openKey
        console.log('openKey', openKey)
        
        // 得到当前需要显示的title

        //console.log("Title", title)
        return (
        <div className="header"> 
            <Link to='/' className="header-nav-header">
                <h1>检索系统</h1>
            </Link>
            <Menu
                className='header-nav'
                mode="horizontal"
                theme="light"
                selectedKeys={[path]}
                defaultOpenKeys={[openKey]}
                >
                {
                    this.menuNodes
                }

            </Menu>
            {(!user || !user.user_id) ? 
                <Button 
                    className="login-button" 
                    type="primary" 
                    icon={<UserOutlined />}
                    onClick={this.handleLoginClick} >
                登录
                </Button>
                :
                <Dropdown overlay={this.menu} className="logined-menu" >
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                 {username} <DownOutlined />
                </a>
              </Dropdown>
            
            }
           
        </div>
        )
    }
}

export default withRouter(Header)
