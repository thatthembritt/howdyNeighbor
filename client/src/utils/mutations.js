import { gql } from "@apollo/client";



export const LOGIN_USER = gql`
  mutation login($username: String, $password: String) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
        email
        password
        first_name
        last_name
        zip_code
      }
    }
  }`
; 

// pulled this querry from the sandbox that successfully added a user
export const ADD_USER = gql`
mutation addUser($username: String, $email: String, $password: String, $firstName: String, $lastName: String, $zipCode: String) {
  addUser(username: $username, email: $email, password: $password, first_name: $firstName, last_name: $lastName, zip_code: $zipCode) {
    token
    user {
      _id
      username
      email
      password
      first_name
      last_name
      zip_code
    }
  }
}`
; 

export const ADD_HELPER = gql`
  mutation addHelper(
    $first_name: String!
    $last_name: String!
    $email: String!
    $image: String!
    $yard_help: Boolean!
    $house_help: Boolean!
    $tech_help: Boolean!
    $auto_help: Boolean!
    $pet_help: Boolean!
  ) {
    addHelper(first_name: $first_name, last_name: $last_name, email: $email, image: $image, yard_help: $yard_help, house_help: $yard_help, tech_help: $tech_help, auto_help: $auto_help, pet_help: $pet_help)
  }`
;