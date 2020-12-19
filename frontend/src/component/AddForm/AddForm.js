import { React } from "react";
import { Modal, Form, Input, Button, notification } from 'antd';
import { VideoCameraAddOutlined } from '@ant-design/icons';
import axios from 'axios';

import './AddForm.css';

const AddForm = (props) => {

    const onFinish = values => {
        const addEntryRequest = async () => {
            const response = await axios({
                url: process.env.REACT_APP_API_URL + "watchlist/",
                method: "POST",
                data: values
            });
            if ((response.status !== 200) & (response.status !== 201)) {
                throw new Error("Error!");
            }
            const entries = await response.data;
            return entries;
        }
        // add Entries
        addEntryRequest().then(() => {
            notification.error({
                message: 'New entry added!',
                description: values.link,
                icon: <VideoCameraAddOutlined />,
                placement: "bottomRight",
            });
        }
        ).catch(error => {
            console.log(error.message);
            notification.error({
                message: 'Error!',
                description: error.message,
                placement: "bottomRight",
            });
        });
        props.setShowAddForm(false);
    };

    const handleCancel = () => {
        props.setShowAddForm(false);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (<Modal
        centered
        visible={props.showAddForm}
        onCancel={handleCancel}
        footer={null}
        closable={true}
    >
        <Form
            name="basic"
            preserve={false}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="URL"
                name="link"
                rules={[{ required: true }]}
            >
                <Input />
            </Form.Item>
            <Form.Item className="ant-form-item-submit">
                <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
            </Form.Item>
        </Form>
    </Modal >)

}

export default AddForm;