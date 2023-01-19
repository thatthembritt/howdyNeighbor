import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user{
            _id
            username
        }
    }
}
`; 

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!, $first_name: Sting!, $last_name: String!, $zip_code: String!) {
    addUser(username: $username, email: $email, password: $password, first_name: $first_name, last_name: $last_name, zip_code: $zip_code) {
        token
        user{
            _id
            username
        }
    }
}
`

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
  }
`;