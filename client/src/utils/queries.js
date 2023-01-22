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
  }`
;

export const FILTER_HELPERS = gql`
  query filterHelpers(
    $yardHelp: Boolean
    $houseHelp: Boolean
    $techHelp: Boolean
    $autoHelp: Boolean
    $petHelp: Boolean
  ) {
    filterHelpers(
      yard_help: $yardHelp
      house_help: $houseHelp
      tech_help: $techHelp
      auto_help: $autoHelp
      pet_help: $petHelp
    ) {
      first_name
      last_name
      email
      yard_help
      house_help
      tech_help
      auto_help
      pet_help
    }
  }`
;