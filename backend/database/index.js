const mongoose = require("mongoose");

const connectDatabase = async () => {
  const databaseInfo = await mongoose.connect(process.env.DATABASE_URL);
};

module.exports = connectDatabase;
