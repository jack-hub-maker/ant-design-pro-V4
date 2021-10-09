/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2021-10-09 13:44:49
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2021-10-09 19:05:27
 * @FilePath: \ant-design-pro\mock\todo.ts
 * Copyright 2021 YingJie Xing, All Rights Reserved. 
 */
let list = [
    {
        id: 1,
        title: 'todolist列表',
        status: 0,
    },
    {
        id: 2,
        title: 'todolist列表1',
        status: 1,
    },
    {
        id: 3,
        title: 'todolist列表2',
        status: 0,
    },
    {
        id: 4,
        title: 'todolist列表3',
        status: 2,
    },
    {
        id: 5,
        title: 'todolist列表5',
        status: 2,
    },
    {
        id: 6,
        title: 'todolist列表6',
        status: 1,
    },
    {
        id: 7,
        title: 'todolist列表7',
        status: 0,
    },
]
export default {
    'GET /api/todolists': list,
    'POST /api/todo': (req: any, res:any) => {
        //添加todo
        //req.body:{todo:''}
        // console.log('req:',req);
        // console.log('res:',res);
        const item = {
            id: list.length + 1,
            title: req.body.todo,
            status: 0,
        }
        list.unshift(item)
        //返回添加结果
        res.send({
            code: 0,
            message: '添加待办事项成功'
        })
    },
    'PUT /api/edit': (req: any, res:any) => {
        //筛选todo进行修改
        const {id,status} = req.body
        list.map((item:any,index:number)=>{
            if(item.id == id) list[index].status = status
        })
        //返回添加结果
        res.send({
            code: 0,
            message: '修改待办成功'
        })
    },
}