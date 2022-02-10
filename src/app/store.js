import {configureStore} from '@reduxjs/toolkit'
import documentReducer from '../pages/search/list/documentSlice'


export default configureStore({
    reducer:{
        document: documentReducer
    }
})
