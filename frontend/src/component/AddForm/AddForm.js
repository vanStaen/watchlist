import { React } from "react";
import { Modal, Form, Input, Button } from 'antd';

import './AddForm.css';

const AddForm = (props) => {

    const handleOk = values => {
        console.log('submitted!', values)
        //props.setShowAddForm(false);
    };

    const onFinish = values => {
        console.log('Success:', values);
    };

    const handleCancel = () => {
        props.setShowAddForm(false);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return props.showAddForm && (
        <Modal
            centered
            visible={props.showAddForm}
            onCancel={handleCancel}
            footer={null}
            closable={false}
        >
            <Form
                name="basic"
                preserve={false}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="url"
                    name="url"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal >)

}

export default AddForm;