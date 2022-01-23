import React, { Component } from 'react';
import {Link, useNavigate, useParams, useLocation} from 'react-router-dom'
import {Menu} from 'antd';
import menuList from '../../config/menuConfig'
import memoryUtils from '../../utils/memoryUtils';
import './index.css'
import withRouter from '../route/withRouter';

const SubMenu = Menu.SubMenu;


// function withRouter(Component) {
//   return (props) => (
//     <Component
//       {...props}
//       params={useParams()}
//       location={useLocation()}
//       navigate={useNavigate()}
//     />
//   );
// }


/*
左侧导航的组件
*/
class LeftNav extends Component {


  // hashAuth = (item) => {
  //     const {key, isPublic} = item

  //     const menus = memoryUtils.user.role.menus
  //     const username = memoryUtils.user.username

  //     if(username === 'admin' || isPublic || menus.indexOf(key)!=-1){
  //       return true
  //     }else if(item.children){
  //       return !!item.children.find(child => menus.indexOf(child.key) !== -1)
  //     }

  //     return false
  // }

  getMenuNodes_map = (menuList) => {
    console.log(menuList)
    return menuList.map(item => {
      console.log("item",item.key)
      if(!item.children){
        return (
          <Menu.Item key={item.key}>
            <Link to={item.key}>
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        )
      }else{
        return (
          <SubMenu
            key={item.key}
            title={
              <span>{item.title}</span>
            }
          >
            {this.getMenuNodes_map(item.children)}
          </SubMenu>
        )
      }
    })
  }


  getMenuNodes = (menuList) => {
    console.log(this.props)
    const path = this.props.location.pathname
    return menuList.reduce((pre,item) => {
      //
      if(this.hashAuth(item)){
        if(!item.children){
          pre.push((
            <Menu.Item key={item.key}>
              <Link to={item.key}>
                <span>{item.title}</span>
              </Link>
            </Menu.Item>
          ))
        }else {

          const cItem = item.children.find(cItem => path.indexOf(cItem.key)===0)
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
      }
      return pre
    }, [])
  }

  /**
   * 在第一次render()之前执行一次
   * 为第一个render()准备数据(必须同步的)
   */
  UNSAFE_componentWillMount() {
    //this.menuNodes = this.getMenuNodes(menuList)
    console.log("componentWillMount",this.menuNodes)
  }

  render() {
    let path = this.props.location.pathname
    console.log("render()" , path)
    if(path.indexOf('/search')===0){
      path = '/search'
    }
    const openKey = this.openKey
    console.log(openKey)
    return (
      <div className='left-nav'>
        <Link to='/' className="left-nav-header">
          <h1>检索系统</h1>
        </Link>
        <Menu
          mode="inline"
          them="dark"
          selectedKeys={[path]}
          defaultSelectedKeys={[openKey]}
        >
          {
            this.getMenuNodes_map(menuList)
          }

        </Menu>
      </div>
    )
  }
}

export default withRouter(LeftNav)
