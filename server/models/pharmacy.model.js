import mongoose from "mongoose";

const pharmacySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"User",
    required: true
  },
  pharmacyName: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  deliveryTime: {
    type: Number,
    required: true,
  },
  medicines:[{
    type:String,
    requird:true
  }],
  menus: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Menu",
  },
  imageUrl:{
    type:String,
    requird:true
  }
},{timestamps:true});

export const Pharmacy = mongoose.model("Pharmacy",pharmacySchema)
