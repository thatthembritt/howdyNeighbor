import React, { useEffect, useState } from "react";
import "./style.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Alert } from "antd";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";

import Auth from "../../utils/auth";


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


const Login = () => {
  const [userFormData, setUserFormData] = useState({ userName: "", password: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [login, { error }] = useMutation(LOGIN_USER);

  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    //console.log(userFormData)

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await login({
        variables: { ...userFormData },
      });

      console.log(data);
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
    }

    // clear form values
    setUserFormData({
      username: "",
      password: "",
    });
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleFormSubmit}
      style={contentStyle}
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Alert
        dismissible
        onClose={() => setShowAlert(false)}
        show={showAlert}
        variant="danger"
      >
        Something went wrong with your login credentials!
      </Alert>
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
          type="text"
          placeholder="USERNAME"
          name="username"
          onChange={handleInputChange}
          value={userFormData.username}
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
          onChange={handleInputChange}
          value={userFormData.password}
          required
          style={inputStyle}
        />
      </Form.Item>

      <Form.Item>
        <Button
          disabled={!(userFormData.username && userFormData.password)}
          type="primary"
          htmlType="submit"
          variant="success"
          className="login-form-button"
          style={buttonStyle}
        >
          SIGN IN
        </Button>
        <a href="#signup" style={linkStyle}>
          NEW TO THE APP? SIGN UP HERE
        </a>
      </Form.Item>
    </Form>
  );
};
export default Login;
