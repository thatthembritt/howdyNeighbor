import { gql } from "@apollo/client";

// pulls ing the profile of the signed in user.

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      first_name
      last_name
      zip_code    
    }
  }
`;
