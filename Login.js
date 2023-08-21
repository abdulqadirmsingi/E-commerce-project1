import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from 'react-router-dom';


const onFinish = async (values) => {
  console.log("Success:", values);
 };
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const Login = ()=> {
  return (
    <div className="login">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 1000,
          width: 350,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="loghead">
          <h1>LOGIN</h1>
        </div>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 2,
            span: 16,
          }}
        >
          <Checkbox style={{marginRight:75}}>Remember me</Checkbox>
          <Button type="primary" htmlType="submit" style={{marginLeft:108,width:100}}>
            Login
          </Button>
          <p>Don't Have an account? <Link to="/signup"><a>Register</a></Link> </p>
          <p> <Link to="/signup" style={{marginRight:90}}><a>Forgot Password?</a></Link> </p>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 12,
            span: 16,
          }}
        >
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
