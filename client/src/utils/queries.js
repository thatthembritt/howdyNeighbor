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
    $yardHelp: Boolean,
    $houseHelp: Boolean,
    $techHelp: Boolean,
    $autoHelp: Boolean,
    $petHelp: Boolean
  ) {
    filterHelpers(
      yardHelp: $yardHelp,
      houseHelp: $houseHelp,
      techHelp: $techHelp,
      autoHelp: $autoHelp,
      petHelp: $petHelp
    ) {
      auto_help
      email
      first_name
      last_name
      house_help
      pet_help
      tech_help
      yard_help
    }
  }`
  ;


