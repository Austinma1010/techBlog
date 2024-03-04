const userSeedData = [
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password123',
    },
    {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      password: 'securepass',
    },
    
  ];

const postSeedData = [
    {
      name: 'First Post',
      description: 'This is the first post.',
      user_id: 1, 
    },
    {
      name: 'Second Post',
      description: 'Another post here.',
      user_id: 2, 
    },
    
  ];

const commentSeedData = [
    {
      description: 'Great post!',
      post_id: 1, // post_id should match the ID of a post from the Post model
    },
    {
      description: 'Interesting thoughts.',
      post_id: 2, // post_id should match the ID of a post from the Post model
    },
    // Add more comments as needed
  ];
  
module.exports = {
    userSeedData,
    postSeedData,
    commentSeedData,
  };
    