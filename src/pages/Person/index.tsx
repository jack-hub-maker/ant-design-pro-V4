/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2021-10-08 17:26:55
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2021-10-09 15:02:20
 * @FilePath: \ant-design-pro\src\pages\Person\index.tsx
 * Copyright 2021 YingJie Xing, All Rights Reserved. 
 */
import React, { useRef,useEffect } from 'react';
import { DownOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Tooltip, Tag, Space, Menu, Dropdown, Card } from 'antd';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';
import request from 'umi-request';
import { getPerson } from "@/services/person"
import {connect} from 'umi'

const valueEnum = {
    0: 'close',
    1: 'running',
    2: 'online',
    3: 'error',
};

export type TableListItem = {
    key: number;
    name: string;
    containers: number;
    creator: string;
    status: string;
    createdAt: number;
    memo: string;
};

const columns: ProColumns<TableListItem>[] = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        hideInSearch: true,

    },

];
const data = [
    { id: 1, name: 'tom', age: 18 },
    { id: 2, name: 'jack', age: 28 }
]

const Person = (props:any) => {
    console.log('props:',props);

    useEffect(()=>{
        //调用model,更新数据
        dispatch({
            type:'person/fetchPersons',
            payload:null
        })
    },[])
    const {dispatch} = props
    const personList = async () => {
        //发起请求获取数据
        // const data = await getPerson();
        // return {data}
    

        const data = props.person.persons
        return {data}
    }
    const actionRef = useRef<ActionType>();
    return (
        <PageContainer>
            <Card>
                <ProTable<TableListItem>
                    columns={columns}
                    dataSource={props.person.persons}
                    // request={(params, sorter, filter) =>
                    //     personList()
                    // }
                    rowKey="key"
                    pagination={{
                        showQuickJumper: true,
                    }}
                    search={{
                        // optionRender: false,
                        // collapsed: false,
                    }}
                    dateFormatter="string"
                    headerTitle="表格标题"
                    toolBarRender={() => [
                        <Button key="show">查看日志</Button>,
                        <Button key="out">
                            导出数据
                            <DownOutlined />
                        </Button>,
                        <Button type="primary" key="primary">
                            创建应用
                        </Button>,
                    ]}
                />
            </Card>
        </PageContainer>
    );
};
export default connect(({person})=>({person}))(Person)
