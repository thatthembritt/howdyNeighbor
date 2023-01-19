import React from "react";

import React from "react";
import "./index.css";
import { Button, Form, Input, InputNumber } from "antd";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const contentStyle = {
  background: "#B3D0B3",
};

const buttonStyle = {
  background: "#fcc931",
  color: "#252827",
  marginBottom: "40px",
  width: "200px",
  marginLeft: "40px",
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const App = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
      style={contentStyle}
    >
      <Form.Item name={["user", "firstname"]} label="FIRST NAME">
        <Input />
      </Form.Item>
      <Form.Item name={["user", "lastname"]} label="LAST NAME">
        <Input />
      </Form.Item>
      <Form.Item name={["user", "zipcode"]} label="ZIPCODE">
        <Input />
      </Form.Item>
      <Form.Item name={["user", "email"]} label="EMAIL">
        <Input />
      </Form.Item>
      <Form.Item name={["user", "password"]} label="PASSWORD">
        <Input />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button type="primary" htmlType="submit" style={buttonStyle}>
          SIGN UP
        </Button>
      </Form.Item>
    </Form>
  );
};
export default App;
