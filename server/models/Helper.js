const { Schema, model } = require("mongoose");

const helperSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  last_name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  yard_help: {
    type: Boolean,
    
  },
  house_help: {
    type: Boolean,
    
  },
  tech_help: {
    type: Boolean,
    
  },
  auto_help: {
    type: Boolean,
    
  },
  pet_help: {
    type: Boolean,
   
  },
 
});

const Helper = model("Helper", helperSchema);

module.exports = Helper;
