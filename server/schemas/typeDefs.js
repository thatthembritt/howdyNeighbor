const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type User {
		_id: ID
		username: String
		email: String
		password: String
		first_name: String
		last_name: String
		zip_code: String
	}

	type Helper {
		first_name: String
		last_name: String
		email: String
		yardHelp: Boolean
		houseHelp: Boolean
		techHelp: Boolean
		autoHelp: Boolean
		petHelp: Boolean
	}

	type Auth {
		token: ID!
		user: User
	}

	type Query {
		me: User
		users: [User]!
		helpers: [Helper]!
		filterHelpers(yardHelp: Boolean, houseHelp: Boolean, techHelp: Boolean, autoHelp: Boolean, petHelp: Boolean): [Helper]
	}

	type Mutation {
		login(username: String, password: String): Auth
		addUser(username: String, email: String, password: String, first_name: String, last_name: String, zip_code: String): Auth
		addHelper(
			first_name: String
			last_name: String
			email: String
			yardHelp: Boolean
			houseHelp: Boolean
			techHelp: Boolean
			autoHelp: Boolean
			petHelp: Boolean
		): Helper
	}
`;

module.exports = typeDefs;
