import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: Number,
    required: true,
  },
  
},{timestamps:true});

export const Menu = mongoose.model("Menu",menuSchema)
