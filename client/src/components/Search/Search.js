import React, { useState } from "react";
import "./style.css";
import { Form, Button, CardGroup, Card, Col, Container } from "react-bootstrap";
import { FILTER_HELPERS } from "../../utils/queries";
import { gql, useLazyQuery } from "@apollo/client";
const avatar = require("../../Assets/avatar.png");

export default function Search() {
  const [searchedHelpers, setSearchedHelpers] = useState([]);
  const [options, { loading, error, data }] = useLazyQuery(FILTER_HELPERS);
  if (error) {
    console.log(JSON.stringify(error));
  }
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    let myArray = [];
    const formData = Object.fromEntries(new FormData(event.target).entries());
    console.log(Object.keys(formData));
    for (let key in formData) {
      formData[key] = Boolean(formData[key]);
    }
    Object.keys(myArray).forEach((i) => {
      myArray[i] = true;
    });
    console.log(formData);
    try {
      await options({
        variables: { ...formData },
      });
      console.log(data);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
    const info = data;
    //info ? info.map() : "";
    console.log(info);
    console.log(info.filterHelpers[0].email);

    const helperData = info.filterHelpers.map((helper) => ({
      email: helper.email,
      firstName: helper.first_name,
      lastName: helper.last_name,
    }));
    console.log(helperData);
    setSearchedHelpers(helperData);
  };

  // pull all values from (Object.keys(formData) and set them as true and query.

  return (
    <Form onSubmit={handleFormSubmit}>
      <h2 className="searchHeader">SELECT AT LEAST ONE OF THE OPTIONS BELOW</h2>
      <div className="checkboxContainer">
        <div className="helper">
          <label>
            <input
              name="yardHelp"
              type="checkbox"
              className="checkoption"
              value="1"
            />
            <span>YARD HELP</span>
          </label>
        </div>

        <div className="helper">
          <label>
            <input
              name="houseHelp"
              type="checkbox"
              className="checkoption"
              value="1"
            />
            <span>HOUSE HELP</span>
          </label>
        </div>

        <div className="helper">
          <label>
            <input
              name="autoHelp"
              type="checkbox"
              className="checkoption"
              value="1"
            />
            <span>AUTO HELP</span>
          </label>
        </div>

        <div className="helper">
          <label>
            <input
              name="techHelp"
              type="checkbox"
              className="checkoption"
              value="1"
            />
            <span>TECH HELP</span>
          </label>
        </div>

        <div className="helper">
          <label>
            <input
              name="petHelp"
              type="checkbox"
              className="checkoption"
              id="pet-help"
              value="1"
            />
            <span>PET HELP</span>
          </label>
        </div>
      </div>
      <Container className="btncontainer">
        <Button id="btn-primary-search" type="submit">
          FIND A NEIGHBOR NEAR YOU
        </Button>
      </Container>
      <CardGroup className="row row-cols-1 row-cols-md-3">
        {searchedHelpers.map((helper) => {
          return (
            <Card className=" col card">
              <Card.Title className="cardHeader">
                {helper.firstName} {helper.lastName}
              </Card.Title>
              <Card.Body className="cardbody">
                <Card.Text className="cardText">
                  <Card.Img id="image" img src={avatar}></Card.Img>
                  <p>HELP AVAILABLE</p>
                </Card.Text>
              </Card.Body>
              <footer className="cardFooter">{helper.email}</footer>
            </Card>
          );
        })}
      </CardGroup>
    </Form>
  );
}
