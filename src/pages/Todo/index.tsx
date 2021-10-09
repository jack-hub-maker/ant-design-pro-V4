/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2021-10-09 10:18:39
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2021-10-09 19:06:33
 * @FilePath: \ant-design-pro\src\pages\Todo\index.tsx
 * Copyright 2021 YingJie Xing, All Rights Reserved. 
 */
import React, { useEffect, useState, useRef } from 'react'
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import { Form, Input, Checkbox, Modal, Button, Tooltip, Tag, Space, Menu, Dropdown, Alert, Card, message } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { PlusOutlined, EllipsisOutlined, DownOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { getTodoLists, add, edit } from '@/services/todo'
import { connect } from 'umi'
import ProForm, { ProFormText } from '@ant-design/pro-form';
// import { add } from '@umijs/deps/compiled/lodash';
import { fixControlledValue } from 'antd/lib/input/Input';

const Todo = (props: any) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const formRef = useRef<ActionType>();
    const status = [
        <Alert message="待办" type="info" showIcon />,
        <Alert message="已完成" type="success" showIcon />,
        <Alert message="已取消" type="error" showIcon />
    ]
    //status:0待办 1完成 2取消
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
            render: (_: any, record: any) => {
                return status[record.status]
            }
        },
        {
            title: '修改状态',
            render: (_: any, record: any) => {
                let editOperation = []
                if (record.status != 0) {
                    editOperation.push(<a onClick={() => changeStatus(record.id, 0)} key={0}>待办 </a>)
                }
                if (record.status != 1) {
                    editOperation.push(<a onClick={() => changeStatus(record.id, 1)} key={1}>完成 </a>)
                }
                if (record.status != 2) {
                    editOperation.push(<a onClick={() => changeStatus(record.id, 2)} key={2}>取消 </a>)
                }
                return editOperation
            }
        },
    ]
    const changeStatus = async (id: any, status: any) => {
        //调用service的方法修改状态
        const res = await edit({ id, status })
        if (res.code === 0) {
            //刷新todolist
            props.dispatch({
                type: 'todo/getTodoList',
                payload: null
            })
            message.success('添加成功')
            setIsModalVisible(false);//关闭弹窗
        } else {
            message.error(res.message)
        }

        //判断执行结果
    }
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
    //提交表单并验证通过后执行的方法
    const onFinish = async (value: any) => {
        console.log('Success:', value);
        const res = await add(value)
        if (res.code === 0) {
            //刷新todolist
            props.dispatch({
                type: 'todo/getTodoList',
                payload: null
            })
            message.success('添加成功')
            setIsModalVisible(false);//关闭弹窗
        } else {
            message.error(res.message)
        }

    };


    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
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
                            <PlusOutlined />
                            新建
                        </Button>,
                    ]}
                />

                <Modal
                    title="添加待办事项"
                    visible={isModalVisible}
                    onCancel={handleCancel}
                    destroyOnClose
                    footer={null}>
                    <ProForm {...layout} ref={formRef} onFinish={onFinish}>
                        <ProFormText name="todo" label="待办事项" rules={[{ required: true }]}>
                        </ProFormText>
                    </ProForm>
                </Modal>

            </Card>
        </PageContainer>
    )
}
export default connect(({ todo }) => ({ todo }))(Todo)

