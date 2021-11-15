/*
inget sen jangan dihapuss ini work ini di package json loe ganti main nya ke index.js sementara gw ganti ke server nyoba 
doc dari MongoDB MERN tutorial
  "main": "index.js",
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js"
  },


const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");

const cors = require("cors"); // biar konek react FE ke api biar bisa komunikasi
//mirip kita ke postman atau restapi klik POST terus create JSON duarr kirim ke DB ntar simpen dah di DB

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://senapahlevi:test@cluster0.zn2sl.mongodb.net/mernpedro?retryWrites=true&w=majority");

app.get("/getUsers", (req, res) => {
  //ini result dari query req databsse, usemodel itu tabel db
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result); //ini buat data dari json to FE
    }
  });
});

app.post("/createUser", async (req, res) => {
  //post buat FE ke API
  const user = req.body; //req.body nih data yang akan di input ke DB
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

app.listen(3001, () => {
  console.log("SERVER RUNS PERFECTLY!");
});

*/
