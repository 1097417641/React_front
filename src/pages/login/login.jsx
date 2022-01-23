//import React, { Component } from 'react'
import React, {useState, useEffect} from 'react';
import { reqLogin } from '../../api'
import { message, Form,Input, Button, Card, Typography } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'
import {Navigate, useNavigate} from 'react-router-dom'
import './login.css'

const {Item} = Form
const {Title} = Typography

function Login () {

    const [form] = Form.useForm()
    const navigate = useNavigate()
    const [user, setUser] = useState({})

    useEffect(() => {
        const loginUser = memoryUtils.user
        setUser(loginUser)
    }, [user])
    
    
    const handleSubmist = () => {
        form.validateFields().then(async (values) =>{
        const {username, password} = values
        const result  = await reqLogin(username, password)
        if(result.status===0){
            message.success('登录成功')

            const user = result.validataPwd
            memoryUtils.user = user
            storageUtils.saveUser(user)

            //跳转到管理页面
            navigate.replace('/')
        }else{
            console.log('请求出错')
            message.error(result.msg)
        }
        }).catch((error)=>{
            console.log('检验失败')
        })
    }
    

    const validataPwd = (rule, value, callback) => {
        if(!value) {
            callback('密码必须输入')
        } else if (value.length < 4){
            callback('密码长度不能小于4位')
        } else if(value.length > 12){
            callback('密码长度不能大于12位')
        }else if(!/^[a-zA-Z0-9_]+$/.test(value)){
            callback('密码必须是英文、数字或下划线组成')
        }else{
            callback()
        }
    }



     return (
       <div className='login'>
        {
        (user&&user._id) ?
            <Navigate replace to='/'/> 
                         :            
            <div >
                <Title className='login-header'>档案检索: 知识图谱档案检索</Title>
                <Card className='login-content'>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={
                            {username: 'admin',}
                        }
                        form={form}
                        onFinish={handleSubmist}
                      
                        >
                        <Item 
                            name="username"
                            rules={[
                                    {required: true, whitespace: true, message: '用户名必须输入'},
                                    {min: 4, message: '用户名至少4位'},
                                    {max: 12, message: '用户名最多12位'},
                                    {pattern: /^[a-zA-Z0-9_]+$/, message:'用户名必须是英文、数字或下划线'}
                                ]}>
                
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                        </Item>
                        <Item 
                            name="password"
                            rules={[{validator: validataPwd}]}>
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="密码"
                            />        
                        </Item>

                        <Item>
                            <Button type="primary" htmlType="submit" className="login-form-nbutton" shape='round'>
                            登录
                            </Button>
                        </Item>
                    </Form>
                </Card>
                
                
            </div>
        
            
        }
        </div>
        )
}


export default Login









// export default class Login extends Component {
    
//      formRef = React.createRef();
//     // handleSubmist = (event) => {
//     //     console.log(event)
//     //     //event.preventDefault()
//     //     console.log(this.props)
//     //     //对所有表单进行检验
//     //     this.props.form.validateFiedls(async (err, values) => {
//     //         //检验成功
//     //         if(!err) {
//     //             const {username, password} = values
//     //             const result = await reqLogin(username, password)
//     //             if(result.status===0){
//     //                 message.success('登录成功')

//     //                 //保存user
//     //                 const user = result.data
//     //                 memoryUtils.user = user //保存在内存中
//     //                 storageUtils.saveUser(user)//保存在local中


//     //                 //跳转到管理界面
//     //                 this.props.history.replace('/')
                    
//     //             }else{
//     //                 message.error('检验失败')
//     //             }
//     //         }
        
//     //     });
//     // }
    //  handleSubmist = () => {
        
    //     this.formRef.current.validateFields().then(async (values) =>{
    //         const {username, password} = values
    //         const result  = await reqLogin(username, password)
    //         if(result.status===0){
    //             message.success('登录成功')

    //             const user = result.validataPwd
    //             memoryUtils.user = user
    //             storageUtils.saveUser(user)
                

    //         }


    //     }).catch((error)=>{
    //         console.log('检验失败')
    //     })
        

    //  }
    

    // validataPwd = (rule, value, callback) => {
    //     console.log('validatePwd()', rule, value)
    //     if(!value) {
    //         callback('密码必须输入')
    //     } else if (value.length < 4){
    //         callback('密码长度不能小于4位')
    //     } else if(value.length > 12){
    //         callback('密码长度不能大于12位')
    //     }else if(!/^[a-zA-Z0-9_]+$/.test(value)){
    //         callback('密码必须是英文、数字或下划线组成')
    //     }else{
    //         callback()
    //     }
    // }
    
    
    
    
    
//     render() {
//         //如果用户已经登录，自动跳转到管理界面
//         const user = memoryUtils.user
//         if(user && user._id) {
//             return <Navigate replace to="/" />
//         }


//         return (
            // <div className='login'>
            //     <header className="login-header">
            //         <h1 style={{'color': '#fff'}}>档案检索: 知识图谱档案检索</h1>
            //     </header>
            //     <Card className='login-content'>
            //         <Form
            //             name="normal_login"
            //             className="login-form"
            //             initialValues={
            //                 {username: 'admin',}
            //             }
            //             ref={this.formRef}
            //             onFinish={this.handleSubmist}
                      
            //             >
            //             <Item 
            //                 name="username"
            //                 rules={[
            //                         {required: true, whitespace: true, message: '用户名必须输入'},
            //                         {min: 4, message: '用户名至少4位'},
            //                         {max: 12, message: '用户名最多12位'},
            //                         {pattern: /^[a-zA-Z0-9_]+$/, message:'用户名必须是英文、数字或下划线'}
            //                     ]}>
                
            //                 <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
            //             </Item>
            //             <Item 
            //                 name="password"
            //                 rules={[{validator: this.validataPwd}]}>
            //                 <Input
            //                     prefix={<LockOutlined className="site-form-item-icon" />}
            //                     type="password"
            //                     placeholder="密码"
            //                 />        
            //             </Item>

            //             <Item>
            //                 <Button type="primary" htmlType="submit" className="login-form-nbutton">
            //                 登录
            //                 </Button>
            //             </Item>
            //         </Form>
            //     </Card>
                
                
            // </div>
//         )
//     }
// }
//
