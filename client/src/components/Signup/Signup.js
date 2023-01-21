import React, { useState } from "react";
import "./style.css";
//import { Button, Form, Input, Alert } from "antd";
import { Form, Button, Alert, FormControl, Container } from "react-bootstrap";

//bring in file from utils folder.
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
import { useMutation } from "@apollo/client";

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
    <Container className="formContainer">
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your login credentials!
        </Alert>
        <Form.Group id="inputFields">
          <Form.Label htmlFor="firstName">FIRST NAME</Form.Label>
          <FormControl
            type="text"
            placeholder=""
            name="firstName"
            onChange={handleInputChange}
            value={userFormData.firstName}
            required
          />
          <Form.Label htmlFor="lastName">LAST NAME</Form.Label>
          <FormControl
            type="text"
            placeholder=""
            name="lastName"
            onChange={handleInputChange}
            value={userFormData.lastName}
            required
          />
        </Form.Group>
        <Form.Group id="inputFields">
          <Form.Label htmlFor="username">USERNAME</Form.Label>
          <FormControl
            type="text"
            placeholder=""
            name="username"
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
        </Form.Group>
        <Form.Group id="inputFields">
          <Form.Label htmlFor="zipCode">ZIP CODE</Form.Label>
          <FormControl
            type="text"
            placeholder=""
            name="zipCode"
            onChange={handleInputChange}
            value={userFormData.zipCode}
            required
          />
        </Form.Group>
        <Form.Group id="inputFields">
          <Form.Label htmlFor="email">EMAIL</Form.Label>
          <FormControl
            type="text"
            placeholder=""
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
        </Form.Group>

        <Form.Group id="inputFields">
          <Form.Label htmlFor="password">PASSWORD</Form.Label>
          <FormControl
            type="password"
            placeholder=""
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
        </Form.Group>
        <Button
          disabled={!(userFormData.email && userFormData.password)}
          type="submit"
          className="btn-primary"
          size="sm"
        >
          SUBMIT
        </Button>
      </Form>
    </Container>
  );
};

export default Signup;
