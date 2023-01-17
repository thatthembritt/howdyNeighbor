const gql = require ("apollo-server-express")

const typeDefs = gql`
type User{
    username: String
    email: String
    password: String
    first_name: String
    last_name: String
    zip_code: String
}

type Helper{
    first_name: String
    last_name: String
    email: String
    image: String
    yard_help: Boolean
    house_help: Boolean
    tech_help: Boolean
    auto_help: Boolean
    pet_help: Boolean
}


type Mutation{
    login(email: String,
        password: String):Auth
        addUser(username: String,
            email: String,
            password: String,
            first_name: String,
            last_name: String,
            zip_code: String):Auth
            addHelper ( first_name: String,
    last_name: String,
    email: String,
    image: String,
    yard_help: Boolean,
    house_help: Boolean,
    tech_help: Boolean,
    auto_help: Boolean,
    pet_help: Boolean):Helper
}
`;