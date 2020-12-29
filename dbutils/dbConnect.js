import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  // let mongoURI = "";
  // if (process.env.NODE_ENV === "development") {
  //   mongoURI = process.env.REACT_APP_MONGO_URI_DEV;
  // } else {
  //   mongoURI = process.env.REACT_APP_MONGO_URI_PROD;
  // }

  const db = await mongoose.connect(
    "mongodb+srv://anthonylin198:anthonylin198@codeigniteportaltestdb.z9iul.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  );

  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
