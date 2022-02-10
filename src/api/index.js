/**
 * 要求：根据接口文档定义接口请求
 * 包含应用中所有接口请求函数的模块
 * 每个函数的返回值都是promise
 * 
 *
 */

import { message } from "antd";
import axjx from "./ajax"

const BASE = '/api'


export const reqLogin = (username, password) => axjx(BASE + '/login', {username, password}, 'POST')


export const reqDocuments = (pageNum, pageSize) => axjx(BASE + '/documents/search', {pageNum, pageSize})

export const reqSearchDocuments = ({pageNum, pageSize, searchName, searchType}) => axjx(BASE + '/documents/search',{pageNum, pageSize, searchName, searchType})



