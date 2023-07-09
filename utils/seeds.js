
const connection = require('../Config/connection');
const thoughts = require('../Models/thought');

const uuser = require('../Models/user');
const thoughtsSeed = require('./thoughtsData');

const usersSeed = require('./userData');



connection.on('error', (err) => {
  console.error(err);
});

connection.once('open', async () => {
  console.log('Seeds Connected');

  try {
    await thoughts.deleteMany({});
    await uuser.deleteMany({});


    await thoughts.insertMany(thoughtsSeed);
   
    await uuser.insertMany(usersSeed);

    console.log(await thoughts.find({}));

    console.log(await uuser.find({}));

    console.info('Database Seeded');
  } catch (error) {
    console.error(error);
  }

  process.exit(0);
});


