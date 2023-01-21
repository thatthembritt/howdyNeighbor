import React from 'react'
import './style.css';
import { Form, Button, Alert, FormControl, Container } from "react-bootstrap";

export default function Donate() {
    return (
      <div className="container">
        <Form>
          <Form.Group id="donateInputFields">
            <Container className="donateFormContainer" id="messageText">
              <p>
                "ALONE WE CAN DO SO LITTLE; <b>TOGETHER,</b> WE CAN DO SO MUCH."
              </p>
            </Container>
          </Form.Group>
          <Form.Group id="donateInputFields">
            <h2>
              HOWDY NEIGHBOR IS COMMUNITY DRIVEN & BACKED BY CHARITABLE
              DONATIONS.
            </h2>
          </Form.Group>
          <Form.Group id="donateInputFields">
            <Button type="submit" id="btn-primary-donate" size="sm">
              <h2 id="donate">DONATE</h2>
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
}