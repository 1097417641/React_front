import {Table} from 'antd'
import { useLocation} from "react-router-dom";
import columns from './Columns';
import React, { useEffect, useState } from 'react'


const  List = () =>  {


  const [searchList, setSearchList] = useState([])
  const location = useLocation()

    useEffect(() => {

        const searchResult = location.state
        console.log(location)
        setSearchList(searchResult)
        
      },[location])

      

  
  return (
      <div>
        <Table size="small" columns={columns} dataSource={searchList}/>
      </div>
    
  )
}

export default List