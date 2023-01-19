import React, { useState } from "react";
import "./style.css";
import { Button, Form, Input, Alert } from "antd";

//bring in file from utils folder.
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
import { useMutation } from "@apollo/client";
import { FormContext } from "antd/es/form/context";

//Styling section
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
// add

const SignupForm = () => {
  const [addUser] = useMutation(ADD_USER);
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    zip_code: ""
  });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addUser({ variables: { ...userFormData } });

      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      zip_code: ""
    });
  };



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
      validated={validated}
      onSubmit={handleFormSubmit}
    >
      <Alert
        dismissible
        onClose={() => setShowAlert(false)}
        show={showAlert}
        variant="danger"
      >
        Something went wrong with your signup!
      </Alert>

      <Form.Item name={["user", "firstname"]} label="FIRST NAME">
        <Input
          type="text"
          placeholder="Your First Name"
          name="first_name"
          onChange={handleInputChange}
          value={userFormData.username}
          required
        />
      </Form.Item>
      <Form.Item name={["user", "lastname"]} label="LAST NAME">
        <Input
          type="text"
          placeholder="Your Last Name"
          name="first_name"
          onChange={handleInputChange}
          value={userFormData.username}
          required
        />
      </Form.Item>
      <Form.Item name={["user", "username"]} label="USER NAME">
        <Input
          type="text"
          placeholder="Your username"
          name="username"
          onChange={handleInputChange}
          value={userFormData.username}
          required
        />
      </Form.Item>
      <Form.Item name={["user", "zipcode"]} label="ZIPCODE">
        <Input
          type="text"
          placeholder="Your zipcode"
          name="zipcode"
          onChange={handleInputChange}
          value={userFormData.username}
          required
        />
      </Form.Item>
      <Form.Item name={["user", "email"]} label="EMAIL">
        <Input
          type="text"
          placeholder="Your email"
          name="email"
          onChange={handleInputChange}
          value={userFormData.username}
          required
        />
      </Form.Item>
      <Form.Item name={["user", "password"]} label="PASSWORD">
        <Input
          type="text"
          placeholder="Create a password"
          name="password"
          onChange={handleInputChange}
          value={userFormData.username}
          required
        />
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

export default SignupForm;
