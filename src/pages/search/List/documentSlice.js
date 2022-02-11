import {createSlice} from "@reduxjs/toolkit"
import { reqSearchDocuments,reqDocuments, reqSearchRelation} from '../../../api'


export const documentSlice = createSlice({
    name: 'document',
    initialState:{
        list:[],
        links:[],
        categories:[],
        total:0,
    },
    reducers: {
        getDocument: (state, action) => {
            
            console.log('getDocument: action', action)
            state.list = action.payload.list
            state.total = action.payload.total
        },

        getRelation: (state, action) => {
            console.log("getRelation: action", action)
            state.links = action.payload.links
            state.categories = action.payload.categories
        }
    }
})

export const {getDocument, getRelation} = documentSlice.actions;


export const fetchDocumentBySearch = ({searchContent, searchType}) => {
    
    return async (dispatch, getState) => {
        try{
            
            const resultDocument = await reqSearchDocuments({searchContent,searchType})
            if (resultDocument.status === 0){
                const {list,total} = resultDocument.data
                dispatch(getDocument({list: list, total:total}))
                if(list.length !== 0){
                    let centerNode = list[0]
                    console.log("the center Node ", centerNode)
                    const resultRelation = await reqSearchRelation({key: centerNode.key})
                    const {categories, links} = resultRelation.data
                    dispatch(getRelation({categories:categories, links:links}))
                }
            }
           
        }catch(err){
            console.log(err)
        }
    }
}

export const fetchRelationByKey = ({key}) => {
    return async (dispatch, getState) => {
        try{
            const result = await reqSearchRelation({key})
            if(result.status === 0){
              dispatch(getRelation({links:result.data.links, categories:result.data.categories}))
            }
           
        }catch(err){
            console.log(err)
        }
    }
}



export const fecthDocumnetByPage = ({pageNum, pageSize}) => {
    return async (dispatch,getState) => {
        try{
            console.log("fectchDocumentByPage", pageNum, pageSize)
            const result = await reqDocuments({pageNum, pageSize})
            dispatch(getDocument({list: result.data.list, total:result.data.total}))
        }catch(err){
            console.log(err)
        }
    }
}



export default documentSlice.reducer