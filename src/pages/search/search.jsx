import React, { Component } from 'react'
import {Outlet} from 'react-router-dom'
import Input from './Input'



export default class SearchComponent extends Component {

    render() {
        console.log('search')
        return (
            <div>
                This is Search index
                <div>
                    <Input/>

                    <Outlet/>
                </div>
            </div>
        )
    }
}
