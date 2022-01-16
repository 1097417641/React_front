import React, { Component } from 'react'
import { Routes, Route} from 'react-router-dom'
import Input from './Input'
import List from './List'


export default class SearchComponent extends Component {

    render() {
        console.log('search')
        return (
            <div>
                This is Search index
                <div>
                    <Input/>
                    <Routes>
                        <Route path="/result/:cotent/*" element={<List/>} />
                    </Routes>
                </div>
            </div>
        )
    }
}
