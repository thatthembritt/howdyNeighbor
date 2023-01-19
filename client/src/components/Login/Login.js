import React from "react";
import "./style.css";
import {
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Form, Input } from "antd";

const contentStyle = {
  background: "#B3D0B3",
  border: "20px",
  borderRadius: "5px",
  paddingBottom: "20px",
  paddingTop: "10px",
};

const buttonStyle = {
  background: "#fcc931",
  color: "#252827",
  marginBottom: "40px",
  width: "200px",
  marginLeft: "40px",
};

const linkStyle = {
  color: "#252827",
  paddingLeft: "45px",
};

const inputStyle = {
  color: "#fcc931",
};

const userNameStyle = {
  padding: "20px",
  marginBottom: "0px",
};

const passwordStyle = {
  marginTop: "0px",
  padding: "20px",
};

const App = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Form
      style={contentStyle}
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        style={userNameStyle}
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="USERNAME"
          style={inputStyle}
        />
      </Form.Item>
      <Form.Item
        style={passwordStyle}
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="PASSWORD"
          style={inputStyle}
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          style={buttonStyle}
        >
          SIGN IN
        </Button>
        <a
          href="#signup" style={linkStyle}>
          NEW TO THE APP? SIGN UP HERE
        </a>
      </Form.Item>
    </Form>
  );
};
export default App;
