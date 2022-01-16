import React, { Component } from 'react'
import { reqLogin } from '../../api'
import { message, Form,Input, Button, PageHeader, Card} from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'
import {Navigate} from 'react-router-dom'
import './login.less'
const {Item} = Form
export default class Login extends Component {
    
    handleSubmist = (event) => {
        event.preventDefault()

        //对所有表单进行检验
        this.props.form.validateFiedls(async (err, values) => {
            //检验成功
            if(!err) {
                const {username, password} = values
                const result = await reqLogin(username, password)
                if(result.status===0){
                    message.success('登录成功')

                    //保存user
                    const user = result.data
                    memoryUtils.user = user //保存在内存中
                    storageUtils.saveUser(user)//保存在local中


                    //跳转到管理界面
                    this.props.history.replace('/')
                    
                }else{
                    message.error('检验失败')
                }
            }
        
        });
    }
    

    validataPwd = (rule, value, callback) => {
        console.log('validatePwd()', rule, value)
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
    
    
    
    
    
    render() {
        //如果用户已经登录，自动跳转到管理界面
        const user = memoryUtils.user
        if(user && user._id) {
            return <Navigate replace to="/" />
        }


        return (
            <div className='login'>
                 <PageHeader
                    className="login-header"
                    title="档案检索系统"
                    subTitle="基于知识图谱的档案检索系统"
                />
                <Card className='login-content'>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={
                            {username: 'admin',}
                        }
                        onFinish={this.handleSubmist}
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
                            rules={[{validatpr: this.validataPwd}]}>
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="密码"
                            />        
                        </Item>

                        <Item>
                            <Button type="primary" htmlType="submit" className="login-form-nbutton">
                            登录
                            </Button>
                        </Item>
                    </Form>
                </Card>
                
                
            </div>
        )
    }
}

