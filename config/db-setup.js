const mongoose = require('mongoose');
const MONGO_URI = require('./keys').MONGO_URI;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log(`MongoDB Connected ! \u{2693} \u{2693}`))
  .catch((err) => console.log(err));
