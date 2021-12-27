import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <article>
      <Form
        layout="vertical"
        name="basic"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off">
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 0, span: 24 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
          <Button size="large" type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </article>
  );
};

export { Login };
