const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

  console.log(
    `Mongoose connected: ${conn.connection.host}`.cyan.underline.bold
  );
};
module.exports = connectDB;
