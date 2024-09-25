import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      requird: true,
    },
    pharmacy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pharmacy",
      requird: true,
    },

    deliveryDetails: {
      email: { type: String, requird: true },
      name: { type: String, requird: true },
      address: { type: String, requird: true },
      city: { type: String, requird: true },
    },
    cartItems: [
      {
        menuId: { type: mongoose.Schema.Types.ObjectId, requird: true },
        name: { type: String, requird: true },
        image: { type: String, requird: true },
        price: { type: Number, requird: true },
        quantity: { type: Number, requird: true },
      },
    ],
    totalAmount:Number,
    status: {
        type: String,
        enum:["preparing","pending","confirmed","outfordelivery","delivered"],
        requird: true
      },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
