import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB_URI, {
        dbName: "pharmacy"
      })
      .then(() => {
        console.log("Db connection successfully");
      }).catch(() => {
        console.log("Db connection failled");
      })
  } catch (error) {
    console.log("Db Connection internal server failed", error);
  }
};
export default connectDB