const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema and model
const MarioCharSchema = new Schema({
  name: String,
  weight: Number, //any field is optional, as in when youre entering data, if a field is not there thats okay
});

const MarioChar = mongoose.model("mariochar", MarioCharSchema);
module.exports = MarioChar;
