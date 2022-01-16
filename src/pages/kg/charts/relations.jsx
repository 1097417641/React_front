import React, {Component} from "react";
import {Card } from 'antd'
import ReactEcharts from "echarts-for-react";

const KG = {
    documents: [
      {
        id:'1',
        document_id: '1993-DQ12-5',
        year: 1993,
        name:'中国科技大学关于发布《处级以上干部廉政规定》的通知',
        url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fahqfjs.com%2Fupload%2Fimage%2F20181219%2F20181219105598169816.jpg&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg",
        start_date: '1993/9/23',
        end_date: '1993/9/23',
        archives:'纪检监察处',
        archive_date: '1994/9/12',
        number: 1,
        pages: 6,
        category:1,
        symbolSize:20,
      },
      {   
          id:'2',
          document_id: '1993-DQ12-6',
          year: 1993,
          name:'中国科技大学纪委关于严禁赌博通知',
          url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fahqfjs.com%2Fupload%2Fimage%2F20181219%2F20181219105598169816.jpg&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg",
          start_date: '1993/1/13',
          end_date: '1993/1/13',
          archives:'纪检监察处',
          archive_date: '1994/6/1',
          number: 1,
          pages: 2,
          category:1,
          symbolSize:24,
        },
        {
          id:'3',
          document_id: '1993-DQ12-7',
          year: 1993,
          name:'中国科技大学关于对马连海通知党内警告处分的批复',
          url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fahqfjs.com%2Fupload%2Fimage%2F20181219%2F20181219105598169816.jpg&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg",
          start_date: '1993/2/24',
          end_date: '1993/2/24',
          archives:'纪检监察处',
          archive_date: '1994/6/1',
          number: 1,
          pages: 2,
          category:1,
          symbolSize:24,
        },
        {
          id:'4',
          document_id: '1993-DQ13-1',
          year: 1993,
          name:'中科院党组织关于贯彻全国组织工作会议精神、做好选拔年轻干部工作的通知',
          url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fahqfjs.com%2Fupload%2Fimage%2F20181219%2F20181219105598169816.jpg&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg",
          start_date: '1993/1/20',
          end_date: '1993/9/10',
          archives:'组织部',
          archive_date: '1994/9/12',
          number: 2,
          pages: 18,
          category:1,
          symbolSize:24,
        },
        {
          id:'5',
          document_id: '1993-DQ13-2',
          year: 1993,
          name:'中科院党组、中国科技大学党委关于转发中组部对余翔林等同志职务任免的通知',
          url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fahqfjs.com%2Fupload%2Fimage%2F20181219%2F20181219105598169816.jpg&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg",
          start_date: '1993/8/24',
          end_date: '1993/10/25',
          archives:'组织部',
          archive_date: '1994/9/12',
          number: 4,
          pages: 9,
          category:1,
          symbolSize:24,
        },
        {
          id:'6',
          document_id: '1993-DQ13-3',
          year: 1993,
          name:'中国科技大学党委关于李龙泉等同志职务任免的通知',
          url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fahqfjs.com%2Fupload%2Fimage%2F20181219%2F20181219105598169816.jpg&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg",
          start_date: '1993/9/23',
          end_date: '1993/9/23',
          archives:'组织部',
          archive_date: '1994/9/12',
          number: 6,
          pages: 12,
          category:1,
          symbolSize:24,
        },
        {
          id:'7',
          document_id: '1993-DQ13-4',
          year: 1993,
          name:'中国科技大学党委关于成立科技开发院直属党支部的通知',
          url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fahqfjs.com%2Fupload%2Fimage%2F20181219%2F20181219105598169816.jpg&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg",
          start_date: '1993/9/23',
          end_date: '1993/9/23',
          archives:'组织部',
          archive_date: '1994/9/12',
          number: 1,
          pages: 2,
          category:1,
          symbolSize:20,
        },
        {
          id:'8',
          document_id: '1993-DQ13-5',
          year: 1993,
          name:'中国科技大学党委组织部一九九三年工作要点',
          url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fahqfjs.com%2Fupload%2Fimage%2F20181219%2F20181219105598169816.jpg&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg",
          start_date: '1993/9/23',
          end_date: '1993/9/23',
          archives:'组织部',
          archive_date: '1994/9/12',
          number: 1,
          pages: 6,
          category:1,
          symbolSize:20,
        },
        {
          id:'9',
          document_id: '1993-DQ13-6',
          year: 1993,
          name:'中国科技大学关于九九三年发展党员工作计划的报告、通知',
          url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fahqfjs.com%2Fupload%2Fimage%2F20181219%2F20181219105598169816.jpg&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg",
          start_date: '1993/9/23',
          end_date: '1993/9/23',
          archives:'组织部',
          archive_date: '1994/9/12',
          number: 2,
          pages: 11,
          category:1,
          symbolSize:20,
        },
        {
          id:'10',
          document_id: '1993-DQ13-7',
          year: 1993,
          name:'中国科技大学关于完善当的组织生活制度做好民主评议党员工作的通知',
          url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fahqfjs.com%2Fupload%2Fimage%2F20181219%2F20181219105598169816.jpg&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg",
          start_date: '1993/9/23',
          end_date: '1993/9/23',
          archives:'组织部',
          archive_date: '1994/9/12',
          number: 2,
          pages: 11,
          category:1,
          symbolSize:20,
        },
        {
          id:'11',
          document_id: '1993-DQ13-8',
          year: 1993,
          name:'中国科技大学关于举党支部书记培训班和招收普及班学员的通知、名册、校领导在结业典礼上的报告',
          url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fahqfjs.com%2Fupload%2Fimage%2F20181219%2F20181219105598169816.jpg&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg",
          start_date: '1993/9/23',
          end_date: '1993/9/23',
          archives:'组织部',
          archive_date: '1994/9/12',
          number: 5,
          pages: 38,
          category:1,
          symbolSize:20,
        },
        {
          id:'12',
          document_id: '1993-DQ13-9',
          year: 1993,
          name:'中国科技大学一九九三年党员转入组织关系介绍信及存根',
          url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fahqfjs.com%2Fupload%2Fimage%2F20181219%2F20181219105598169816.jpg&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg",
          start_date: '1993/9/23',
          end_date: '1993/9/23',
          archives:'组织部',
          archive_date: '1994/9/12',
          number: 57,
          pages: 58,
          category:2,
          symbolSize:20,
        },
        {
          id:'13',
          document_id: '1993-DQ13-10',
          year: 1993,
          name:'中国科技大学一九九三年党员转出组织关系介绍信及存根',
          url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fahqfjs.com%2Fupload%2Fimage%2F20181219%2F20181219105598169816.jpg&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg",
          start_date: '1993/9/23',
          end_date: '1993/9/23',
          archives:'组织部',
          archive_date: '1994/9/12',
          number: 78,
          pages: 83,
          category:2,
          symbolSize:20,
        },
        {
          id:'14',
          document_id: '1993-DQ13-11',
          year: 1993,
          name:'中国科技大学一九九三年党内统计年表',
          url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fahqfjs.com%2Fupload%2Fimage%2F20181219%2F20181219105598169816.jpg&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg",
          start_date: '1993/9/23',
          end_date: '1993/9/23',
          archives:'组织部',
          archive_date: '1994/9/12',
          number: 0,
          pages: 33,
          category:2,
          symbolSize:20,
        },
        {
          id:'15',
          document_id: '1993-DQ13-12',
          year: 1993,
          name:'中国科技大学一九九三年党员名册',
          url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fahqfjs.com%2Fupload%2Fimage%2F20181219%2F20181219105598169816.jpg&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg",
          start_date: '1993/9/23',
          end_date: '1993/9/23',
          archives:'组织部',
          archive_date: '1994/9/12',
          number: 2,
          pages: 120,
          category:2,
          symbolSize:20,
        },
       
    ],
    relations: [
      {
        source: "1",
        target: "10",
        name:"同部",
        },
        {
        source: "1",
        target: "2",
        name:"同部",
        },
        {
        source: "2",
        target: "10",
        name:"同部",
        },
        {
        source: "3",
        target: "10",
        name:"同部",
        },
        {
        source: "3",
        target: "2",
        name:"同部",
        },
        {
        source: "4",
        target: "10",
        name:"同部",
        },
        {
        source: "5",
        target: "10"
        },
        {
        source: "6",
        target: "10"
        },
        {
        source: "7",
        target: "10"
        },
        {
        source: "8",
        target: "10"
        },
        {
        source: "9",
        target: "10"
        },
        {
        source: "1",
        target: "3"
        },
  
    ],
    categories: [
      {
      name: "A"
      },
      {
      name: "B"
      },
      {
      name: "C"
      },
      {
      name: "D"
      },
      {
      name: "E"
      },
      {
      name: "F"
      },
      {
      name: "G"
      },
      {
      name: "H"
      },
      {
      name: "I"
      }],
  
  }


export default class Relations extends Component {
    
    
    state = {
        nodes: KG.documents,
        links: KG.relations,
        categories: KG.categories,
    }

    getOption = (nodes, links, categories)  => {
        return {
            name: {
                text: 'Les Miserables',
                subtext: 'Default layout',
                top: 'bottom',
                left: 'right'
              },
            tooltip: {
                //show:false,
              },
            legend: [
                {
                  // selectedMode: 'single',
                  //data: categories
                }
              ],
            animationDuration: 1500,
            animationEasingUpdate: 'quinticInOut',
            series: [
                {
                name: 'Les Miserables',
                type: 'graph',
                layout: 'circular',
                data: nodes,
                edges: links,
                categories: categories,
                roam: true,
                label: {
                    show:false,
                    position: 'right',
                    formatter: '{b}'
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
                    }
                }
            ]
        }
    }

    // state = {
    //     sales: [5, 20, 36, 10, 10, 20], // 销量的数组
    //     stores: [6, 10, 25, 20, 15, 10], // 库存的数组
    //   }

    
    //   /*
    //   返回柱状图的配置对象
    //    */
    //   getOption = (sales, stores) => {
    //     return {
    //       name: {
    //         text: 'ECharts 入门示例'
    //       },
    //       tooltip: {},
    //       legend: {
    //         data:['销量', '库存']
    //       },
    //       xAxis: {
    //         data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    //       },
    //       yAxis: {},
    //       series: [{
    //         name: '销量',
    //         type: 'bar',
    //         data: sales
    //       }, {
    //         name: '库存',
    //         type: 'bar',
    //         data: stores
    //       }]
    //     }
    //   }
    


    render() {
        const {nodes, links, categories} = this.state
        //const {sales, stores} = this.state
        return (
            <div style={{height:"600px"}}>
                <Card name='关系图' style={{top:"20px"}} >
                    <ReactEcharts style={{height:"600px"}} option={this.getOption(nodes, links, categories)} />
                </Card>
            </div>
        )
    }
}
