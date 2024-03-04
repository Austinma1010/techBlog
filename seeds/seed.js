const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');
const { userSeedData, postSeedData, commentSeedData } = require('./seedData');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    const users = await User.bulkCreate(userSeedData, {
      individualHooks: true,
      returning: true,
    });
    const posts = await Post.bulkCreate(postSeedData, {
        individualHooks: true,
        returning: true,
      });
      const comments = await Comment.bulkCreate(commentSeedData, {
        individualHooks: true,
        returning: true,
      });
      process.exit(0);
  };
  
  seedDatabase();