
const connection = require('../Config/connection');
const thoughts = require('../Models/thought');
const reaction = require('../Models/reaction');
const uuser = require('../Models/user');
const thoughtsSeed = require('./thoughtsData');
const reactionsSeed = require('./reactionData');
const usersSeed = require('./userData');

console.log(thoughtsSeed);
console.log(reactionsSeed);
console.log(usersSeed);

connection.on('error', (err) => {
  console.error(err);
});

connection.once('open', async () => {
  console.log('Seeds Connected');

  try {
    await thoughts.deleteMany({});
    await uuser.deleteMany({});
    await reaction.deleteMany({});

    await thoughts.insertMany(thoughtsSeed);
    await reaction.insertMany(reactionsSeed);
    await uuser.insertMany(usersSeed);

    console.log(await thoughts.find({}));
    console.log(await reaction.find({}));
    console.log(await uuser.find({}));

    console.info('Seeding complete! 🌱');
  } catch (error) {
    console.error(error);
  }

  process.exit(0);
});


