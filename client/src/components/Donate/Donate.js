import React from "react";
import "./style.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import {Container, Button} from "react-bootstrap" 

const stripePromise = loadStripe("pk_live_51MSooVLeILrCDSqnE1nriDqDHyaAAmdE1d6iWoAw0YBblsiGowT2e98s3NkSCPgh9hwf6wf44A8GmwFJSWFhqtjG00fWzzTZij");

const Donate = () => {
  return (
    <Container className="donateContainer">
      <div className="Donate">
        <div>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </Container>
  );
};

export default Donate;