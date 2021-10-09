/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2021-10-09 09:38:03
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2021-10-09 09:44:14
 * @FilePath: \ant-design-pro\src\models\person.ts
 * Copyright 2021 YingJie Xing, All Rights Reserved. 
 */
import { getPerson } from "@/services/person"
export default {
    namespcae: 'person',

    state: {
        persons: []
    },
    effects: {
        *fetchPersons(_, { call, put }) {
            const data = yield call(getPerson)
            yield put({
                type: 'setPerson',
                payload: data
            })
        }
    },
    reducers: {
        setPerson(state, action) {
            return {
                ...state,
                persons: action.payload
            }
        }
    }
}