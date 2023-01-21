import React from "react";
import "./style.css";
import { Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const card1 = require("../../Assets/card1.png");
const card2 = require("../../Assets/card2.png");
const card3 = require("../../Assets/card3.png");

function Home() {
  return (
    <Container className="homepageCardContainer">
      <Card className="cardDesign">
        <Card.Img id="cardPic" variant="top" img src={card1} />
        <Card.Body className="cardBody">
          <Card.Title>GIVE BACK</Card.Title>
        </Card.Body>
      </Card>
      <Card className="cardDesign">
        <Card.Img id="cardPic" variant="top" img src={card2} />
        <Card.Body className="cardBody">
          <Card.Title>BE A GOOD NEIGHBOR</Card.Title>
        </Card.Body>
      </Card>
      <Card className="cardDesign">
        <Card.Img id="cardPic" variant="top" img src={card3} />
        <Card.Body className="cardBody">
          <Card.Title>BUILD YOUR COMMUNITY</Card.Title>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;
