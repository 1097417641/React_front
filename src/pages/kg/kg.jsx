import React, { Component} from 'react'
import Input from "./Input/input"
import RelationKG  from './charts/relations'
export default class KG extends Component {
    
    state = {
        relations:[]
    }


    render() {
        console.log("This is in KG")
        return (
            <div className='KG' style={{height:"700px"}}>
                <Input/>
                <RelationKG  />

            </div>
        )
    }
}
