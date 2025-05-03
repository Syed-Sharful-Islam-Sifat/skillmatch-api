const { default: mongoose } = require("mongoose");
require("dotenv").config();
module.exports = async () => {
  try {
     console.log(process.env.MONGO_URI) 
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongoDB connected`);
  } catch (error) {
    console.log("mongoDB connection error: ", error);
    process.exit(1)
  }
};

