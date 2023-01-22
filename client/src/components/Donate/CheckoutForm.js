import React from "react";
import { ElementsConsumer, CardElement } from "@stripe/react-stripe-js";
import { Container, Button, Card } from "react-bootstrap"; 
import CardSection from "./CardSection";

class CheckoutForm extends React.Component {
  handleSubmit = async event => {
    event.preventDefault();

    const { stripe, elements } = this.props;
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);
    if (result.error) {
      console.log(result.error.message);
    } else {
      console.log(result.token);
    }
  };

  render() {
    return (
      <div>
        <div class="product-info">
          <Card>
            <Card.Header id="statement">
              <Card.Text>
                <h2>"ALONE, WE CAN DO SO LITTLE,</h2>
              </Card.Text>
              <Card.Text>
                <h2>
                  <b>TOGETHER</b>, WE CAN DO SO MUCH"
                </h2>
              </Card.Text>
            </Card.Header>

            <div id="submit">
              <form onSubmit={this.handleSubmit}>
                <div>
                  <h5>HOWDY NEIGHBOR IS COMMUNITY DRIVEN & BACKED BY CHARITABLE DONATIONS.</h5>
                </div>
                <h7 className="suggested-donation">Suggested donation $5</h7>
                <div>
                  <button disabled={!this.props.stripe} className="btn-pay">
                    <b>Donate Here Today!</b>
                  </button>
                </div>
                <Card.Footer id="cardDetails">
                  <CardSection />
                </Card.Footer>
              </form>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default function InjectedCheckoutForm() {
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <CheckoutForm stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  );
}