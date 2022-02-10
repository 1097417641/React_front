import {createSlice} from "@reduxjs/toolkit"
import { reqSearchDocuments } from '../../../api'


export const documentSlice = createSlice({
    name: 'document',
    initialState:{
        list:[],
        total:0,
    },
    reducers: {
        getDocument: (state, action) => {
            
            console.log('action', action)
            state.list = action.payload.list
            state.total = action.payload.total
        }
    }
})

export const {getDocument} = documentSlice.actions;


export const fetchDocument = ({pageNum, pageSize,searchContent, searchType}) => {
    
    return async (dispatch, getState) => {
        try{
            
            const result = await reqSearchDocuments({pageNum, pageSize,searchContent,searchType})
            
            dispatch(getDocument({list: result.data.list, total: result.data.total}))
        }catch(err){
            console.log(err)
        }
    }
}



export default documentSlice.reducer