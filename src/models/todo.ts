/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2021-10-09 14:30:44
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2021-10-09 14:34:26
 * @FilePath: \ant-design-pro\src\models\todo.ts
 * Copyright 2021 YingJie Xing, All Rights Reserved. 
 */
import { getTodoLists } from "@/services/todo"
export default {
    namespcae: 'todo',

    state: {
        todoList: []
    },
    effects: {
        *getTodoList({payload,callback}, { call, put }) {
            const data = yield call(getTodoLists)
            yield put({
                type: 'setTodoList',
                payload: data
            })
        }
    },
    reducers: {
        setTodoList(state, action) {
            return {
                ...state,
                todoList: action.payload
            }
        }
    }
}