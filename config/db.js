const moongoose = require("mongoose");
require("dotenv").config();

const DB_URI = process.env.MONGO_URI;
const MONGO_OPTIONS = {
  userNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectDB = async () => {
  try {
    await moongoose.connect(DB_URI, MONGO_OPTIONS);
    console.log("mongoDB connected");
  } catch (error) {
    console.log("DB failed", error);
    process.exit()
  }
};
module.exports = { connectDB };
