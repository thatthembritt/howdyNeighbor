const { signToken } = require("../utils/auth");
const { User, Helper } = require("../models");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return await User.findOne({ _id: context.user._id }).populate(
          "savedBooks"
        );
      }
      throw new AuthenticationError("Must be logged in");
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No profile with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },

    addUser: async (parent, args ) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addHelper: async (parent, args ) => {
      const helper = await Helper.create(args);
     

      return helper ;
    },

    
  },
};

module.exports = resolvers;
