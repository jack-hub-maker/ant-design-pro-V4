/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2021-10-09 10:18:39
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2021-10-09 15:07:34
 * @FilePath: \ant-design-pro\src\pages\Todo\index.tsx
 * Copyright 2021 YingJie Xing, All Rights Reserved. 
 */
import React, { useEffect, useState } from 'react'
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import { Modal, Button, Tooltip, Tag, Space, Menu, Dropdown, Alert, Card } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { PlusOutlined, EllipsisOutlined, DownOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { getTodoLists } from '@/services/todo'
import { connect } from 'umi'
const status = [
    <Alert message="待办" type="info" showIcon />,
    <Alert message="已完成" type="success" showIcon />,
    <Alert message="已取消" type="error" showIcon />
]
const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
    },
    {
        title: '标题',
        dataIndex: 'title',
    },
    {
        title: '状态',
        dataIndex: 'status',
        render: (_, record: any) => {
            return status[record.status]
        }
    },
    {
        title: '修改状态',
        dataIndex: 'title',
        render: () => [
            <a key={0}>待办 </a>,
            <a key={1}>完成 </a>,
            <a key={2}>取消 </a>,
        ]
    },
]
//status:0待办 1完成 2取消
const Todo = (props: any) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    //方法一:直接发请求获取数据
    // let  [data,setData] = useState([])
    // useEffect(async () => {
    //     const resData = await getTodoLists()
    //     setData(resData)
    // }, [])

    //方法二 使用model获取数据
    const { todoList: data } = props.todo

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    
    return (
        <PageContainer>
            <Card>
                <ProTable
                    columns={columns}
                    dataSource={data}
                    //request={async(params, sorter, filter) => ({data:await getTodoLists()})}
                    rowKey="key"
                    pagination={{
                        showQuickJumper: true,
                    }}
                    search={false}
                    dateFormatter="string"
                    headerTitle="待办事项列表"
                    toolBarRender={() => [
                        <Button type='primary' key="show" onClick={showModal}>
                            <PlusOutlined />  新建
                        </Button>,
                    ]}
                />

                <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>

            </Card>
        </PageContainer>
    )
}
export default connect(({ todo }) => ({ todo }))(Todo)

