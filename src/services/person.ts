/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2021-10-08 19:06:54
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2021-10-08 19:08:12
 * @FilePath: \ant-design-pro\src\services\person.ts
 * Copyright 2021 YingJie Xing, All Rights Reserved. 
 */
import request from "@/utils/request";
export const getPerson = async () => {
    return request('/api/persons')
}