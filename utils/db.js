const mongoose = require('mongoose');
require('dotenv').config();


const DB_URL = process.env.DB_URL || process.env.DB_LOCAL;

const connect = () => mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = {
  DB_URL,
  connect
};

