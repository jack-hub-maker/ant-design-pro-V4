/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2021-10-09 13:46:27
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2021-10-09 18:58:59
 * @FilePath: \ant-design-pro\src\services\todo.ts
 * Copyright 2021 YingJie Xing, All Rights Reserved. 
 */
//获取所有的todolist
import request from "@/utils/request";
export const getTodoLists = async () => {
    return request('/api/todolists')
}
//添加todolist
export const add = async (data:any) => {
    const url = '/api/todo'
    const options = {data}
    return request.post(url,options)
}
//修改todolist状态
export const edit = async (data:any) => {
    const url = '/api/edit'
    const options = {data}
    return request.put(url,options)
}