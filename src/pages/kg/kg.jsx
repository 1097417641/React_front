import React, { Component} from 'react'
import Input from "./Input/input"
import { Outlet } from 'react-router-dom'
export default class KG extends Component {
    
    state = {
        relations:[]
    }


    render() {
        console.log("This is in KG")
        return (
            <div className='KG' style={{height:"700px"}}>
                <Input/>
                <Outlet/>

            </div>
        )
    }
}
