import React from "react";
import "./style.css";
//import {} from "../../utils/queries"
import { Form, Button } from "react-bootstrap";

export default function Search() {
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = Object.fromEntries(new FormData(event.target).entries());

    console.log(Object.keys(formData));
  };
  // pull all values from (Object.keys(formData) and set them as true and querry.
  return (
    <Form onSubmit={handleFormSubmit}>
      <div className="container">
        <div className="helper">
          <label>
            <input
              name="yard_help"
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
              name="house_help"
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
              name="auto_help"
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
              name="tech_help"
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
              name="pet_help"
              type="checkbox"
              className="checkoption"
              value="1"
            />
            <span>Pet Help</span>
          </label>
        </div>
      </div>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
