const mongoose = require("mongoose");
const { Schema } = mongoose;

const photoSchema = new Schema({
  id: Number,
  url: String,
});

module.exports = photoSchema;
