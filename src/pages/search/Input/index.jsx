import React, { useState, useRef } from 'react'
import PubSub from 'pubsub-js'
import {Input,Row,Col, Card, Button} from 'antd'
import axios from 'axios'
import {useNavigate,} from 'react-router-dom' 
import Detail from './detail/detail'



const {Search} = Input

const InputComponent = () => {
    
    const [searched, setSearched] = useState(false)
    const [detail, setDetail] = useState(false)
    const inputContent = useRef()
    const navigate = useNavigate()


    const onSearch = async () => {
        setSearched(true)
        const {value} = inputContent.current.state 
        axios.get(`/api/search?q=${value}`).then(
            response => {
                PubSub.publish('search', {searchList: response.data.documents })
                setSearched(false)
                navigate(`/search/result/${value}`, {state: response.data.documents})
            },
            error => {
                console.log(error.message)
                setSearched(false)
            }
        )


    }


    const handleAdvancedSearch = () => {
        //console.log('This is Advanced Search')
        setDetail(!detail)

    }

    return (
        <div className='input_part'>
          <Card>
            <Row>
                <Col span={8}></Col>
                    <Col span={8}>
                        <Search 
                        ref={inputContent}
                        placeholder="input search loading with enterButton" 
                        onSearch={onSearch}
                        loading={searched} 
                        enterButton>
                        </Search>
                    </Col>
                    <Col span={8}>
                        <Button type="text" onClick={handleAdvancedSearch}>高级检索</Button>
                    </Col>
                </Row>
            <Row>
                <div id='details' style={{display: detail? "none": "", width:"100%"}}>
                    <Detail />
                </div>
            </Row>
          </Card>
            
        </div>
    )



}
export default InputComponent


/*
export default class InputComponent extends Component {

    state = {
        isSearch: false,
        succeed: false,
    }

    onSearch = async () => {
        this.setState({isSearch:true})
        const {value} = this.inputElement.state

        axios.get(`/api/search?q=${value}`).then(
            response => {
                //console.log(response.data)
                PubSub.publish('search', {searchList: response.data.documents })
                PubSub.publish('relation', {relations: response.data.relations })
                this.setState({isSearch:false, succeed:true})
            },
            error => {
                console.log(error.message)
            }
        )
    }


    render() {
        console.log(this.state)
        const {isSearch,succeed} = this.state
        return (
            <div>
                <Search 
                    ref={c => this.inputElement = c}
                    placeholder="input search loading with enterButton" 
                    onSearch={ this.onSearch}
                    loading={isSearch} 
                    enterButton />
                {succeed && (<Navigate to='/search/result'/>)}
            </div>
        )
    }
}*/

