const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/Notes-maker";

const connectDB=()=>{
    mongoose.connect(mongoURI)
    .then(() => {
      console.log('Connected to MongoDB!');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
      process.exit(1);
    });
  
}

module.exports = connectDB;