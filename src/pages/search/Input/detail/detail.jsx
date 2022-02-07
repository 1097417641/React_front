import React, { Component } from 'react'
import { Row, Col, Select, Divider, DatePicker} from 'antd'




const {Option}  = Select

export default class detail extends Component {


    onChange(value) {
        console.log(`selected ${value}`);
      }
      
    onSearch(val) {
        console.log('search:', val);
      }


    handleYearChange(){

    }

    handleDateChange(){
        
    }

    render() {
        return (
            <div>
                 <Divider/>
               <Row justify="center">
                    <Col span={6} offset={4} >
                        <Select
                            showSearch
                            placeholder="选择归档单位"
                            optionFilterProp="children"
                            onChange={this.onChange}
                            onSearch={this.onSearch}
                            filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="db">党办</Option>
                            <Option value="xb">校办</Option>
                            <Option value="tw">团委</Option>
                            <Option value="xcb">宣传部</Option>
                            <Option value="zzb">组织部</Option>
                            <Option value="jcc">纪检监察处</Option>
                        </Select>
                    </Col>
                    <Col span={6} >
                        <DatePicker placeholder='选择年度' onChange={this.handleYearChange} picker="year"/>
                    </Col>
                    <Col span={6} >
                    <DatePicker onChange={this.handleDateChange} placeholder='归档日期' />
                    </Col>
               </Row>

            </div>
           
        )
    }
}
