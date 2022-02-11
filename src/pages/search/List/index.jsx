import { Outlet, useSearchParams, useNavigate } from "react-router-dom";
import { PAGE_SIZE } from '../../../utils/constant'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchDocumentBySearch, fecthDocumnetByPage,fetchRelationByKey} from './documentSlice'
import { Card, Table, Row, Col } from 'antd'
import ReactEcharts from "echarts-for-react";
import columns from './Columns'

//const Option = Select.Option
function ListComponent() {
  const [loading, setLoading] = useState(false)
  const [pageNum, setPageNum] = useState(1)
  const [document, setDocument] = useState([])
  const { list, total, links, categories} = useSelector((state) => state.document)
  const dispatch = useDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const navitgate = useNavigate()


  console.log(categories)
  useEffect(() => {
    
      if(list.length === 0){
        const searchContent = searchParams.get('q')
        const searchType = searchParams.get('type')
        dispatch(fetchDocumentBySearch({ searchContent: searchContent, searchType: searchType }))
        console.log("the length of list 0: " ,list.length)
      }
      console.log("the length of list 1: " ,list.length)
      pageFilter(pageNum)
   
  }, [list])


  const pageFilter = (num) => {
  
    let page_num = num * 1
    console.log("pageFilte:",page_num)
    let pageSize = PAGE_SIZE * 1
    // = Math.floor((total + pageSize - 1) / pageSize)
    const start = pageSize * (page_num - 1)
    const end = start + pageSize <= total ? start + pageSize : total
    const pageList = []
    for (var i = start; i < end; i++) {
      pageList.push(list[i])
    }
    setDocument(pageList)
    
  }

  const getDocumnet = (pageNum) => {
    setPageNum(pageNum)
   
    pageFilter(pageNum)
    //dispatch(fecthDocumnetByPage({ pageNum: pageNum, pageSize: PAGE_SIZE }))

  }

  const getOption = (nodes, links, categories)  => {
    return {
        name: {
            text: 'Les Miserables',
            subtext: 'Default layout',
            top: 'bottom',
            left: 'right'
          },
        tooltip: {
            show:true,
          },
        legend: [
            {
              //selectedMode: 'single',
              data: categories.map(function (a) {
                return a.name;
              })
            }
          ],
        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
            {
            name: 'Les Miserables',
            type: 'graph',
            layout: 'force',
            data: nodes,
            edges: links,
            categories: categories,
           
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [2, 10],
            draggable: true,
            label: {
                show:false,
                position: 'right',
                formatter: '{b}'
            },
            force:{
              repulsion: 250,
              edgeLength: [10, 50]
            },
            lineStyle: {
                color: 'source',
                curveness: 0.3
            },
            emphasis: {
                focus: 'adjacency',
                lineStyle: {
                  width: 10,
                    }
                },
            
            }
        ]
    }
}

  const handleChartClick = () =>{
    console.log("Click the charts")
  }

  return (
    <div>
      <Row>
        <Col flex={1}>
          <Card>
            <Table
              bordered
              dataSource={document}
              columns={columns}
              pagination={{
                total: total,
                pageNum: pageNum,
                defaultPageSize: PAGE_SIZE,
                showQuickJumper: true,
                onChange: getDocumnet
              }}
            />
          </Card>
        </Col>
        <Col flex={1}>
          <Card name='关系图' >
                    <ReactEcharts 
                      style={{ width:"500px",height:"500px"}}
                      option={getOption(list, links, categories)} 
                      onEvents={handleChartClick}/>
                </Card>

        </Col>
      </Row>

    </div>

  )
}


export default ListComponent