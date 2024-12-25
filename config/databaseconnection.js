import mongoose from "mongoose";

let dbconnected = false;

const connectToDatabase = async () => {
  try {
    mongoose.set("strictQuery", true);
    if (dbconnected) {
      console.log("Database is connected");
      return;
    }
    await mongoose.connect(process.env.MONGODB_CONNECTION_URI);
    dbconnected = true;
  } catch (error) {
    console.log(`Could not connect to Mongo db,${error}`);
  }
};
export default connectToDatabase;
