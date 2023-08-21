import React from "react";
import { Button, Checkbox, Form, Input, Space } from "antd";
import { Link } from "react-router-dom";

const onFinish = async (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

function Signup() {
  return (
    <div className="sign">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 2000,
          width: 350,
          margin: 3,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="signhead">
          <h1>REGISTER HERE</h1>
        </div>
        <Form.Item
          label="Your Full Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
          style={{
            width: 350,

            marginRight: 1,
          }}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email Address"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
          style={{
            width: 350,

            marginRight: 10,
          }}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          name="number"
          rules={[
            {
              required: true,
              message: "Please input your Phone number!",
            },
          ]}
          style={{
            width: 350,

            marginRight: 10,
          }}
        >
          <Space.Compact>
            <Input style={{ width: "25%" }} placeholder="+255" />
            <Input style={{ width: "75%" }} placeholder=" 693 095 001"/>
          </Space.Compact>
        </Form.Item>

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
            offset: 1,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" size="500" style={{width:150,marginLeft:95}}>
            Sign Up
          </Button><p></p>
          <Checkbox>I agree to the terms&conditions</Checkbox>
          <p>
            Already Have an account?{" "}
            <Link to="/login">
              <a>Login</a>
            </Link>
          </p>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 10,
            span: 16,
          }}
        >
          
        </Form.Item>
      </Form>
    </div>
  );
}

export default Signup;
