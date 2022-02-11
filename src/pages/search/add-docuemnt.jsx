import React, { useState } from 'react';
import LinkButton from '../../compontents/link-button';
import {
  Card,
  Upload,
  Form,
  Input,
  Button,
  DatePicker,
} from 'antd'
import {ArrowLeftOutlined, UploadOutlined} from '@ant-design/icons'
import { useForm } from 'antd/lib/form/Form';
import { useNavigate } from 'react-router-dom';

const {Item} = Form
const { TextArea } = Input


function AddDocuemnt (){
  
  const [fileList, setFileList] = useState([])
  const [form] = Form.useForm()
  const navigate = useNavigate()
  
    
  
  const handleDateChange = () => {

  }

  // 指定Item布局的配置对象
  const formItemLayout = {
      labelCol: { span: 2 },  // 左侧label的宽度
      wrapperCol: { span: 8 }, // 右侧包裹的宽度
    }
    


    const title = (
      <span>
        <LinkButton onClick={() => navigate(-1)}>
          <ArrowLeftOutlined />
          <span>返回检索</span>
        </LinkButton>
      </span>
    )


    return (
      <Card title={title}>
        <Form {...formItemLayout}>
          <Item label="档案名称"  rules={[{required: true, message: '必须输入商品名称'}]}>
                <Input placeholder='请输入档案名称'/>
          </Item>
          <Item label="年度">
            <DatePicker onChange={handleDateChange} picker="year" />
          </Item>
          <Item
            name="upload" label="上传文件">
            <Upload 
              name="document" 
              action="/document/upload"  
              maxCount={1}
              fileList={fileList} 
              >
              <Button icon={<UploadOutlined />}>点击上传</Button>
            </Upload>
          </Item>

        </Form>
      </Card>
    );
  
}

export default AddDocuemnt