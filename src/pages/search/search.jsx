import React, { Component } from 'react'
import {
    Card,
    Select,
    Input,
    Button,
    Table,

  } from 'antd'
import {PlusOutlined} from '@ant-design/icons'
import LinkButton from '../../compontents/link-button'
import {PAGE_SIZE} from '../../utils/constant'
import columns from './List/Columns'
import withRouter from '../../compontents/route/withRouter'
import { reqSearchDocuments, reqDocuments } from '../../api'

const Option = Select.Option
class SearchComponent extends Component {
    
    
    state = {
        total: 0, // 档案的总数量
        documents: [], // 档案的数组
        loading: false, // 是否正在加载中
        searchName: '', // 搜索的关键字
        searchType: 'documentName', // 根据哪个字段搜索
      }
    
      getDocuments = async (pageNum) => {

        this.pageNum = pageNum // 保存pageNum, 让其它方法可以看到
        this.setState({loading: true}) // 显示loading
        
        console.log('Search Page', this.state)
        const {searchName, searchType} = this.state
        // 如果搜索关键字有值, 说明我们要做搜索分页
        let result
        if (searchName) {
          result = await reqSearchDocuments({pageNum, pageSize: PAGE_SIZE, searchName, searchType})
        } else { // 一般分页请求
          result = await reqDocuments(pageNum, PAGE_SIZE)
        }
    
        this.setState({loading: false}) // 隐藏loading
        console.log('Search Page', result.data)
        if (result.status === 0) {
          // 取出分页数据, 更新状态, 显示分页列表
          const {total, list} = result.data
          this.setState({
            total,
            documents: list
          })
        }
      }



    render() {
        const {documents, total, loading, searchType, searchName} = this.state
        
        const title = (
            <span>
              <Select
                value= {searchType}
                style={{width: 150}}
                onChange={value => this.setState({searchType:value})}
              >
                <Option value='documentName'>按名称搜索</Option>
                <Option value='documentContent'>按内容搜索</Option>
              </Select>
              <Input
                placeholder='关键字'
                style={{width: 150, margin: '0 15px'}}
                value={searchName}
                onChange={event => this.setState({searchName:event.target.value})}
              />
              <Button type='primary' onClick={() => this.getDocuments(1)}>搜索</Button>
            </span>
          )
      
          const extra = (
            <Button type='primary' onClick={() => this.props.navigate('/search/addDocument')}>
              <PlusOutlined />
              添加档案
            </Button>
          )
      

       
        return (
            <Card title={title} extra={extra}>
                <Table
                    bordered
                    loading={loading}
                    dataSource={documents}
                    columns={columns}
                    pagination={{
                        current: this.pageNum,
                        total,
                        defaultPageSize: PAGE_SIZE,
                        showQuickJumper: true,
                        onChange: this.getDocuments
                    }}
                />
          </Card>

        )
    }
}

export default withRouter(SearchComponent)