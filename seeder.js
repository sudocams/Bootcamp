const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

// Load env files
dotenv.config({ path: './config/config.env' });

// Load models
const Bootcamp = require('./Models/bootcamp');

// connect to db

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// Read json files
const bootcamps = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8')
);

// imports data into db
const importData = async () => {
  try {
    await Bootcamp.create(bootcamps);
    console.log('data imported...'.green.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// Deleted the data

const deleteData = async () => {
  try {
    await Bootcamp.deleteMany();
    console.log('data destroyed...'.red.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}
