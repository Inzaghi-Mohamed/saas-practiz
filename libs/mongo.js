// 1. import the MongoClient and ServerApiVersion from the mongodb package
import { MongoClient, ServerApiVersion } from "mongodb";
// 2. check if the MONGO_URI environment variable is set
  if (!process.env.MONGO_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGO_URI"');
  }
// 3. get the MONGO_URI from the environment variable
  const uri = process.env.MONGO_URI;
// 4. set the options for the MongoClient
  const options = {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  };
// 5. create a client for the MongoClient
  let client;
// 6. create a clientPromise for the MongoClient
  let clientPromise;
// 7. check if the NODE_ENV is development
  if (process.env.NODE_ENV === "development") {
    let globalWithMongo = global;
    globalWithMongo._mongoClientPromise = undefined;
// 8. check if the globalWithMongo._mongoClientPromise is undefined
    if (!globalWithMongo._mongoClientPromise) {
      client = new MongoClient(uri, options);
      globalWithMongo._mongoClientPromise = client.connect();
    }
    clientPromise = globalWithMongo._mongoClientPromise;
    } else {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
  }
// 9. export the clientPromise
  export default clientPromise;
  