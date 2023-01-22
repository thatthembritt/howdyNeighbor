import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

export default function Team({ person }) {
  return (
    <Container className="aboutCardContainer">
      <Row>
        <Col lg={12} sm={6}>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              id="cardPicAbout"
              variant="top"
              src={`../../${person.img}.jpg`}
            />
            <Card.Body className="cardBodyAbout">
              <Card.Title>{person.name}</Card.Title>
              <Button
                a
                href={person.repo}
                variant="primary"
                id="btn-primary-about"
              >
                See {person.name}'s GitHub
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
