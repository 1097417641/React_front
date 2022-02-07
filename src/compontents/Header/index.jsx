import React, { Component } from 'react'
import {formateDate} from '../../utils/detaUtils'
import LinkButton from '../link-button'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'
import menuList from '../../config/menuConfig'
import { Modal} from 'antd'
import withRouter from '../route/withRouter'
import './index.css'

class Header extends Component {

    // state = {
    //     navArr:[
    //         {key: '1', title:'档案检索', keyPath: '/search'},
    //         {key: '2', title:'关系可视化', keyPath: '/KG'},
    //         {key: '3', title:'问答系统', keyPath: '/qa'},
    //     ],
    //     currentTime: formateDate(Date.now())    
    // }


    state = {
        currentTime: formateDate(Date.now()), // 当前时间字符串
      }
    
    getTime = () => {
        // 每隔1s获取当前时间, 并更新状态数据currentTime
        this.intervalId = setInterval(() => {
          const currentTime = formateDate(Date.now())
          this.setState({currentTime})
        }, 1000)
      }

    getTitle = () => {
        // 得到当前请求路径
        const path = this.props.location.pathname
        //console.log("Path", path)
        let title
        menuList.forEach(item => {
          if (item.key===path) { // 如果当前item对象的key与path一样,item的title就是需要显示的title
            title = item.title
          } else if (item.children) {
            // 在所有子item中查找匹配的
            const cItem = item.children.find(cItem => path.indexOf(cItem.key)===0)
            // 如果有值才说明有匹配的
            if(cItem) {
              // 取出它的title
              title = cItem.title
            }
          }
        })
        return title
      }
    


    
    /*
    退出登陆
    */
    logout = () => {
        // 显示确认框
        Modal.confirm({
        content: '确定退出吗?',
        onOk: () => {
            console.log('OK', this)
            // 删除保存的user数据
            storageUtils.removeUser()
            memoryUtils.user = {}

            // 跳转到login
            this.props.navigate('/login')
        }
        })
    }


        /*
    第一次render()之后执行一次
    一般在此执行异步操作: 发ajax请求/启动定时器
    */
    componentDidMount () {
        // 获取当前的时间
        this.getTime()
    }


    /*
    当前组件卸载之前调用
    */
    componentWillUnmount () {
        // 清除定时器
        clearInterval(this.intervalId)
    }


    render() {

        const {currentTime} = this.state

        const username = memoryUtils.user.user_id

        
        // 得到当前需要显示的title
        const title = this.getTitle()
        //console.log("Title", title)
        return (
        <div className="header">
            <div className="header-top">
              <span>欢迎, {username}</span>
              <LinkButton onClick={this.logout}>退出</LinkButton>
            </div>
            <div className="header-bottom">
            <div className="header-bottom-left">{title}</div>
            <div className="header-bottom-right">
                <span>{currentTime}</span>
            </div>
            </div>
        </div>
        )
    }
    // render() {
    //     const {navArr} = this.state
    //     return (
    //         <div>
    //             <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    
    //                 <div className="logo"/>
    //                 <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} >
    //                      {/*<Menu.Item key="1" onClick={() => this.pushShow("1")}>档案检索</Menu.Item>   
    //                       <Menu.Item key="2" onClick={() => this.pushShow("2")}>问答系统</Menu.Item>*/}
    //                       {navArr.map(navObj => {
    //                           return <Menu.Item key={navObj.key} >
    //                                  <Link to={navObj.keyPath}>{navObj.title}</Link>
    //                           </Menu.Item>
    //                       } )}
    //                 </Menu>
    //             </Header>

    //             <div>

    //             </div>

    //         </div>
    //     )
    // }
}

export default withRouter(Header)

// function Header() {
    
//     const username = memoryUtils.user.username
//     const {time, setTime} = useState(formateDate(Date.now()))
//     const location = useLocation()
//     const navigate = useNavigate()
//     useEffect(() => {
//         const timer = setInterval(() => {
//             const currentTime = formateDate(Date.now())
//             setTime({currentTime})
//          }, 1000)
//         return () => {
//             console.log('清除定时器')
//             clearInterval(timer)
//         }
//     },[])


//     const  getTitle = () => {
//         // 得到当前请求路径
//         console.log('getTilte', location)
//         const path = location.pathname
//         let title
//         menuList.forEach(item => {
//           if (item.key===path) { // 如果当前item对象的key与path一样,item的title就是需要显示的title
//             title = item.title
//           } else if (item.children) {
//             // 在所有子item中查找匹配的
//             const cItem = item.children.find(cItem => path.indexOf(cItem.key)===0)
//             // 如果有值才说明有匹配的
//             if(cItem) {
//               // 取出它的title
//               title = cItem.title
//             }
//           }
//         })
//         return title
//       }

//      const logout = () => {
//         // 显示确认框
//         Modal.confirm({
//           content: '确定退出吗?',
//           onOk: () => {
//             console.log('OK', this)
//             // 删除保存的user数据
//             storageUtils.removeUser()
//             memoryUtils.user = {}
    
//             // 跳转到login
//             navigate('/login',{replace: true})
//           }
//         })
//       }
    
//     return (
//         <div className="header">
//         <div className="header-top">
//           <span>欢迎, {username}</span>
//           <LinkButton onClick={logout}>退出</LinkButton>
//         </div>
//         <div className="header-bottom">
//           <div className="header-bottom-left">{getTitle}</div>
//           <div className="header-bottom-right">
//             <span>{time}</span>
//           </div>
//         </div>
//       </div>
//     )

// }
//export default Header