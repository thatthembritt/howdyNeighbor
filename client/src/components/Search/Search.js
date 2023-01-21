import React, {useState} from "react";
import "./style.css";
//import {} from "../../utils/queries"
import { Form, Button } from "react-bootstrap";
import { FILTER_HELPERS } from "../../utils/mutations";
import { gql, useMutation } from "@apollo/client";

export default function Search() {
  //const [formInput, setFormInput] = useState([]);
  //const [filterHelpers] = useMutation(FILTER_HELPERS);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let myArray = []

    const formData = Object.fromEntries(new FormData(event.target).entries());
    console.log(Object.keys(formData));
    for(let key in formData){
      formData[key] = Boolean(formData[key]);
    }
    Object.keys(myArray).forEach(i => {myArray[i] = true});
    console.log(formData);
    //filterHelpers({variables: {}})
  };
  // pull all values from (Object.keys(formData) and set them as true and query.

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
              id="pet-help"
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
