import { Outlet, useSearchParams, useNavigate } from "react-router-dom";
import { PAGE_SIZE } from '../../../utils/constant'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchDocumentBySearch, fecthDocumnetByPage, fetchRelationByKey } from './documentSlice'
import { Card, Table, Row, Col } from 'antd'
import ReactEcharts from "echarts-for-react";
import columns from './Columns'

//const Option = Select.Option
function ListComponent() {
  const [loading, setLoading] = useState(false)
  const [pageNum, setPageNum] = useState(1)
  const [document, setDocument] = useState([])
  const { list, total, links, categories, centerNode } = useSelector((state) => state.document)
  const dispatch = useDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const [activeTabKey, setActiveTabKey] = useState('tab1');

  //const navitgate = useNavigate()
  const tabList = [
    {
      key: 'tab1',
      tab: '档案信息',
    },
    {
      key: 'tab2',
      tab: '档案关系',
    },
  ];

  const contentList = {
    tab1: <p>content1</p>,
    tab2: <p>content2</p>,
  };


  useEffect(() => {

    if (list.length === 0) {
      const searchContent = searchParams.get('q')
      const searchType = searchParams.get('type')
      dispatch(fetchDocumentBySearch({ searchContent: searchContent, searchType: searchType }))
      console.log("the length of list 0: ", list.length)
    }
    console.log("the length of list 1: ", list.length)
    pageFilter(pageNum)

  }, [list])




  const pageFilter = (num) => {

    let page_num = num * 1
    console.log("pageFilte:", page_num)
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

  const getOption = (nodes, links, categories) => {
    return {
      name: {
        text: '档案关系图',
        top: 'bottom',
        left: 'right'
      },
      tooltip: {
        show: true,
        formatter: function (x) {
          if (x.dataType == "edge") {

            var source = nodes.find(item => item.id === x.data.source)
            var target = nodes.find(item => item.id === x.data.target)
            return 'source: ' + source.name + '<br/> ' + 'relation: ' + x.data.name + '<br/>' + 'target: ' + target.name
          }

        }
      },
      legend: [
        {
          //selectedMode: 'single',
          data: categories.map(function (a) {
            return a.name;
          })
        }
      ],
      animationDuration: 1000,
      animationEasingUpdate: 'quinticInOut',
      series: [
        {
          type: 'graph',
          layout: 'force',
          data: nodes,
          edges: links,
          categories: categories,
          edgeSymbol: ['circle', 'arrow'],
          edgeSymbolSize: [2, 10],
          draggable: true,
          label: {
            show: false,
            position: 'right',
            formatter: '{b}'
          },
          force: {
            repulsion: 400,
            edgeLength: [30, 50]
          },
          lineStyle: {
            color: 'source',
            curveness: 0.3
          },
          emphasis: {
            focus: 'adjacency',
            lineStyle: {
              width: 5,
            }
          },

        }
      ]
    }
  }

  const handleChartClick = (e) => {
    console.log("Click the charts", e)
  }
  const onTabChange = key => {
    setActiveTabKey(key);
  };



  return (
    <div>
      <Row>
        <Col flex={1}>
          <Card>
            <Table
              bordered
              size="small"
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
              style={{ width: "500px", height: "500px" }}
              option={getOption(list, links, categories)}
              onEvents={{ "click": handleChartClick }} />
          </Card>

        </Col>
      </Row>
      {/* <Row>
        <Card
          style={{ width: '100%', minHeight:'300px' }}
          tabList={tabList}
          activeTabKey={activeTabKey}
          onTabChange={key => {
            onTabChange(key);
          }}
        >
         <h1>Hello World</h1> 
        </Card>
      </Row> */}
    </div>

  )
}


export default ListComponent