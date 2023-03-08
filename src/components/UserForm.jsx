
import React from "react";
import { Form, Input, Button } from "antd";

const UserForm = ({ loading = false, onFinish = () => { }, onFinishFailed = () => { } }) => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off">
    <Form.Item
      label="Username"
      name="username"
      rules={[
        { required: true, message: "Please input your username!" },
      ]}>
      <Input />
    </Form.Item>
    <Form.Item
      label="Password"
      name="password"
      rules={[
        { required: true, message: "Please input your password!" },
      ]}>
      <Input.Password />
    </Form.Item>
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button
        loading={loading}
        style={{ backgroundColor: "#1890ff" }}
        type="primary"
        htmlType="submit">
        Sing In
      </Button>
    </Form.Item>
  </Form>
);

export default UserForm;

