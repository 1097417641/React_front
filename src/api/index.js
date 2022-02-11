/**
 * 要求：根据接口文档定义接口请求
 * 包含应用中所有接口请求函数的模块
 * 每个函数的返回值都是promise
 * 
 *
 */

import { message } from "antd";
import ajax from "./ajax"

const BASE = '/api'


export const reqLogin = (username, password) => ajax(BASE + '/login', {username, password}, 'POST')


export const reqDocuments = ({pageNum, pageSize}) => ajax(BASE + '/documents/search', {pageNum, pageSize})

export const reqSearchDocuments = ({searchName, searchType}) => ajax(BASE + '/documents/search',{searchName, searchType})

export const reqSearchRelation = ({key}) => ajax(BASE + "/documents/search/relation", {key})



