const express = require("express");
const dotenv = require("dotenv");
const auth = require("./routes/authRoute.js");
const mongoose = require("mongoose");
const path = require("path")
const cors = require("cors");
dotenv.config();
const connectDB = require("./config/db.js");

connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1/", auth);
app.use(express.static(path.join(__dirname, 'frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

app.listen(process.env.PORT, () => {
  console.log("server is running on port 9000");
});

// const mongodb = require("mongodb");
// const { MongoClient } = require("mongodb");
// const client = new MongoClient(process.env.MONGO_DB);

// async function main() {
  //   // the following code examples can be pasted here...
  //   try {
    //     // Use connect method to connect to the server
    //     await client.connect();
    //     console.log("Connected successfully to server");
    
    //     const db = client.db("chillflix");
    //     const users = db.collection("users");
    
    //     const insertResult = await users.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
    //     console.log("Inserted documents =>", insertResult);
    //     const findResult = await users.find({}).toArray();
    //     console.log("Found documents =>", findResult);
    
    //     // // Perform your operations on the database here
    //     // // ...
    
    //     // return "done.";
    //   } catch (error) {
      //     console.error("An error occurred:", error);
      //   } finally {
        //     // Close the connection
        //     client.close();
        //   }
        // }
        
        // main();
        // app.get("/", (req, res) => {
          //   res.send("hello world");
          // });