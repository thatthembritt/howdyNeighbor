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
      <h2>What type of help do you need?</h2>
      <div className="checkboxContainer">
        <div className="helper">
          <label>
            <input
              name="yardHelp"
              type="checkbox"
              className="checkoption"
              value="1"
            />
            <span>Yard Help</span>
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
            <span>House Help</span>
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
            <span>Auto Help</span>
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
            <span>Tech Help</span>
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
            <span>Pet Help</span>
          </label>
        </div>
      </div>
      <Container class="btncontainer">
        <Button class="btn" type="submit">
          FIND A NEIGHBOR HELPER NEAR YOU
        </Button>
      </Container>
      <CardGroup class="row row-cols-1 row-cols-md-3">
        {searchedHelpers.map((helper) => {
          return (
            <Card class=" col card">
              <Card.Title class="cardHeader">
                {helper.firstName} {helper.lastName}
              </Card.Title>
              <Card.Body class="cardbody">
                <Card.Text class="cardText">
                  <Card.Img id="image" img src={avatar}></Card.Img>
                  <p>Help Available</p>
                </Card.Text>
              </Card.Body>
              <footer class="cardFooter">{helper.email}</footer>
            </Card>
          );
        })}
      </CardGroup>
    </Form>
  );
}
