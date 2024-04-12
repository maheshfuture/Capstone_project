c:\Users\91800\OneDrive\Desktop\Campus_Connect\client c:\Users\91800\OneDrive\Desktop\Campus_Connect\serverconst mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log(`Connected!😃`))
    .catch((error) => console.log(error));
};

module.exports = connectDB;
