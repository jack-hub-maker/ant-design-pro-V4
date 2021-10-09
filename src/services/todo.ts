/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2021-10-09 13:46:27
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2021-10-09 13:47:41
 * @FilePath: \ant-design-pro\src\services\todo.ts
 * Copyright 2021 YingJie Xing, All Rights Reserved. 
 */
//获取所有的todolist
import request from "@/utils/request";
export const getTodoLists = async () => {
    return request('/api/todolists')
}