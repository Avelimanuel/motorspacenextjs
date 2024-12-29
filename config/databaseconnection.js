import mongoose from "mongoose";

let dbConnected = false;
const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);
  if (dbConnected) {
    console.log("Database is  connected");
    return;
  }
  try {
    if (!process.env.MONGODB_CONNECTION_URI) {
      throw new Error("Database Connection uri must be defined");
    }
    await mongoose.connect(process.env.MONGODB_CONNECTION_URI);
    dbConnected = true;
  } catch (error) {
    console.log(`Error in connecting to database ${error}`);
  }
};

export default connectToDatabase;
