import React, { useState, useEffect } from "react";
import { Form, Button, Alert, FormControl, Container } from "react-bootstrap";

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";

import Auth from "../../utils/auth";
import "./style.css";

const Login = () => {
  const [userFormData, setUserFormData] = useState({
    username: "",
    password: "",
  });
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
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setUserFormData({
      username: "",
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
        <Form.Group className="inputFields">
          <Form.Label htmlFor="username">USERNAME</Form.Label>
          <FormControl
            type="text"
            id="usernameField"
            placeholder=""
            name="username"
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <FormControl.Feedback type="invalid">
            Username is required!
          </FormControl.Feedback>
        </Form.Group>

        <Form.Group className="inputFields">
          <Form.Label htmlFor="password">PASSWORD</Form.Label>
          <FormControl
            type="password"
            id="passwordField"
            placeholder=""
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <FormControl.Feedback type="invalid">
            Password is required!
          </FormControl.Feedback>
        </Form.Group>
      </Form>
      <Button
        disabled={!(userFormData.username && userFormData.password)}
        type="submit"
        className="btn btn-primary mx-auto"
        size="sm"
      >
        SUBMIT
      </Button>
    </Container>
  );
};

export default Login;
