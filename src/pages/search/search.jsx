import React, { useState } from 'react'
import {
  Select,
  Input,
  Row,
} from 'antd'
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom'
import { PAGE_SIZE } from "../../utils/constant"
import { reqSearchDocuments, reqDocuments } from '../../api'
import './search.css'


const Option = Select.Option;
const { Search } = Input;

function SearchComponent() {


  
  const [searchContent, setSearchContent] = useState('')
  const [searchType, setSearchType] = useState('name')
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()




  // const extra = (
  //   <Button type='primary' onClick={() => this.props.navigate('/search/addDocument')}>
  //     <PlusOutlined />
  //     添加档案
  //   </Button>
  // )

  return (
    <div className='search'>
      <span className='search-input'>
        <Select
          defaultValue={searchParams.get('type') || searchType}
          style={{ width: 150 }}
          onChange={value => setSearchType(value)}
        >
          <Option value='name'>按名称搜索</Option>
          <Option value='content'>按内容搜索</Option>
        </Select>
        <Search
          placeholder="请输入需要检索的内容"
          enterButton="搜索"
          value={searchParams.get("q") || searchContent}
          onChange={event => setSearchContent(event.target.value)}
          style={{ width: 350, margin: '0 15px' }}
          onSearch={() => navigate(`document?q=${searchContent}&type=${searchType}`)}
        />
      </span>
      <Row>
        <Outlet />
      </Row>
      <Row>

      </Row>
    </div>



  )
}


export default SearchComponent