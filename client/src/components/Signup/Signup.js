import React, { useState } from "react";
import "./style.css";
//import { Button, Form, Input, Alert } from "antd";
import { Form, Button, Alert } from "react-bootstrap";

//bring in file from utils folder.
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
import { useMutation } from "@apollo/client";
// import { FormContext } from "antd/es/form/context";

// //Styling section
// const layout = {
//   labelCol: {
//     span: 8,
//   },
//   wrapperCol: {
//     span: 16,
//   },
// };

// const contentStyle = {
//   background: "#B3D0B3",
// };

// const buttonStyle = {
//   background: "#fcc931",
//   color: "#252827",
//   marginBottom: "40px",
//   width: "200px",
//   marginLeft: "40px",
// };

// /* eslint-disable no-template-curly-in-string */
// const validateMessages = {
//   required: "${label} is required!",
//   types: {
//     email: "${label} is not a valid email!",
//     number: "${label} is not a valid number!",
//   },
//   number: {
//     range: "${label} must be between ${min} and ${max}",
//   },
// };
// /* eslint-enable no-template-curly-in-string */
// // add

const Signup = () => {
  const [addUser] = useMutation(ADD_USER);
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    zipCode: "",
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
    console.log(userFormData);

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
      firstName: "",
      lastName: "",
      username: "",
      zipCode: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your login credentials!
        </Alert>
        <Form.Group>
          <Form.Label htmlFor="firstName">First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="create a unique username"
            name="firstName"
            onChange={handleInputChange}
            value={userFormData.firstName}
            required
          />
          <Form.Control.Feedback type="invalid">
            First Name is required!
          </Form.Control.Feedback>
          <Form.Label htmlFor="lastName">Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="create a unique username"
            name="lastName"
            onChange={handleInputChange}
            value={userFormData.lastName}
            required
          />
          <Form.Control.Feedback type="invalid">
            Last Name is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="username">username</Form.Label>
          <Form.Control
            type="text"
            placeholder="create a unique username"
            name="username"
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <Form.Control.Feedback type="invalid">
            username is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="zipCode">Zip Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your zip code"
            name="zipCode"
            onChange={handleInputChange}
            value={userFormData.zipCode}
            required
          />
          <Form.Control.Feedback type="invalid">
            Zip code is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your email"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(userFormData.email && userFormData.password)}
          type="submit"
          variant="success"
        >
          Submit
        </Button>
      </Form>
    </>

    // <Form
    //   noValidate
    //   validated={validated}
    //   onSubmit={handleFormSubmit}
    //   {...layout}
    //   name="nest-messages"
    //   onFinish={onFinish}
    //   validateMessages={validateMessages}
    //   style={contentStyle}
    // >
    //   <Alert
    //     dismissible
    //     onClose={() => setShowAlert(false)}
    //     show={showAlert}
    //     variant="danger"
    //   >
    //     Something went wrong with your signup!
    //   </Alert>

    //   <Form.Item name={["user", "firstname"]} label="FIRST NAME">
    //     <Input
    //       type="text"
    //       placeholder="Your First Name"
    //       name="first_name"
    //       onChange={handleInputChange}
    //       value={userFormData.first_name}
    //       required
    //     />
    //   </Form.Item>
    //   <Form.Item name={["user", "lastname"]} label="LAST NAME">
    //     <Input
    //       type="text"
    //       placeholder="Your Last Name"
    //       name="first_name"
    //       onChange={handleInputChange}
    //       value={userFormData.last_name}
    //       required
    //     />
    //   </Form.Item>
    //   <Form.Item name={["user", "username"]} label="USER NAME">
    //     <Input
    //       type="text"
    //       placeholder="Your username"
    //       name="username"
    //       onChange={handleInputChange}
    //       value={userFormData.username}
    //       required
    //     />
    //   </Form.Item>
    //   <Form.Item name={["user", "zipcode"]} label="ZIPCODE">
    //     <Input
    //       type="text"
    //       placeholder="Your zipcode"
    //       name="zipcode"
    //       onChange={handleInputChange}
    //       value={userFormData.zipcode}
    //       required
    //     />
    //   </Form.Item>
    //   <Form.Item name={["user", "email"]} label="EMAIL">
    //     <Input
    //       type="text"
    //       placeholder="Your email"
    //       name="email"
    //       onChange={handleInputChange}
    //       value={userFormData.email}
    //       required
    //     />
    //   </Form.Item>
    //   <Form.Item name={["user", "password"]} label="PASSWORD">
    //     <Input
    //       type="text"
    //       placeholder="Create a password"
    //       name="password"
    //       onChange={handleInputChange}
    //       value={userFormData.password}
    //       required
    //     />
    //   </Form.Item>
    //   <Form.Item
    //     wrapperCol={{
    //       ...layout.wrapperCol,
    //       offset: 8,
    //     }}
    //   >
    //     <Button
    //       type="submit"
    //       variant="success"
    //       htmlType="submit"
    //       style={buttonStyle}
    //     >
    //       SIGN UP
    //     </Button>
    //   </Form.Item>
    // </Form>
  );
};

export default Signup;
