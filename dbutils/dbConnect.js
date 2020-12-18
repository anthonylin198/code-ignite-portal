import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  // console.log(process.env.REACT_APP_MONGO_URI_PROD);
  let mongoURI = "";
  if (process.env.NODE_ENV === "development") {
    mongoURI = process.env.REACT_APP_MONGO_URI_DEV;
  } else {
    mongoURI = process.env.REACT_APP_MONGO_URI_DEV;
  }

  const db = await mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;
  // console.log(connection.isConnected);
}

export default dbConnect;
