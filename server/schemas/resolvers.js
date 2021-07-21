const { User } = require('../models');

const resolvers = {
    Query: {
      placeHolder: async () => {
        return User.find({});
      },
    },
  };

  module.exports = resolvers;