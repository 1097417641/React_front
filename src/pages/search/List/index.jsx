import { useLocation, useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from '../../../utils/constant'
import React, { useEffect, useState } from 'react'
import { reqSearchDocuments, reqDocuments } from '../../../api'
import { useSelector, useDispatch } from "react-redux";
import {fetchDocument} from './documentSlice' 
import {Card, Table} from 'antd'
import columns from './Columns'

//const Option = Select.Option
function ListComponent(){
  const [loading, setLoading] = useState(false)
  const[pageNum, setPageNum] = useState(1)

  const {list, total} = useSelector((state) => state.document)
  const dispatch = useDispatch()
  const [searchParams, setSearchParams]= useSearchParams()
  const location = useLocation()

  console.log("list", list)  

  useEffect(() => {
    const searchContent = searchParams.get('q')
    const searchType = searchParams.get('type')
    dispatch(fetchDocument({pageNum:pageNum, pageSize:PAGE_SIZE, searchContent:searchContent,  searchType:searchType}))

  },[])




  return (
      <div>
        <Card>
          <Table
            bordered
            dataSource={list}
            columns={columns}
            pagination={{
              total:total,
              pageNum:pageNum,
              defaultPageSize: PAGE_SIZE,
              showQuickJumper: true,
            }}
          /> 
          Hello World
        </Card>
      </div>

    )
}


export default ListComponent