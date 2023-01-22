const { signToken } = require("../utils/auth");
const { User, Helper } = require("../models");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return await User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("Must be logged in");
    },
    users: async () => {
      return User.find();
    },
    helpers: async () => {
      return Helper.find();
    },

    filterHelpers: async (parent, args, context) => {
     //if (context.user) {
       return await Helper.find({
         $or: [
           {
             yardHelp: args.yard_help && true,
           },
           {
             houseHelp: args.house_help && true,
           },
           {
             techHelp: args.tech_help && true,
           },
           {
             autoHelp: args.auto_help && true,
           },
           {
             petHelp: args.pet_help && true,
           },
         ],
       });
     //}
    //throw new AuthenticationError("Must be logged in");
    },
  },

  Mutation: {
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError("No profile with this username found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },

    addUser: async (
      parent,
      { username, email, password, first_name, last_name, zip_code }
    ) => {
      const user = await User.create({
        username,
        email,
        password,
        first_name,
        last_name,
        zip_code,
      });
      const token = signToken(user);
      return { token, user };
    },
    addHelper: async (parent, args) => {
      const helper = await Helper.create(args);

      return helper;
    },
  },
};

module.exports = resolvers;
