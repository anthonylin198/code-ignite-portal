import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  // console.log(process.env.REACT_APP_MONGO_URI_PROD);
  // let mongoURI = process.env.REACT_APP_MONGO_URI_DEV;
  // if (process.env.NODE_ENV === "development") {
  //   mongoURI = process.env.REACT_APP_MONGO_URI_DEV;
  // } else {
  //   mongoURI = process.env.REACT_APP_MONGO_URI_DEV;
  // }

  const db = await mongoose.connect(
    "mongodb+srv://anthonylin198:anthonylin198@igniteprogrammingdb.ucsf3.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  connection.isConnected = db.connections[0].readyState;
  // console.log(connection.isConnected);
}

export default dbConnect;
