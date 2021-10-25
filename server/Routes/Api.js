const express=require("express");
const route=express.Router();
const fileupload = require("express-fileupload");
const mongoose=require("mongoose");

const bodyParser=require("body-parser");
const urlencoder=bodyParser.urlencoded({extended:true})

const connections=require("../Controllers/Connections.js")
const collections=require("../Controllers/Collections.js")
const database=require("../Controllers/Database.js")
const importDB=require("../Controllers/ImportDataset.js")



route.post("/create",connections.createConnection)
route.post("/createDB",database.createDatabase)
route.post("/:db/:createCollection",collections.createCollection)
route.post("/importData",urlencoder,importDB.importDataset)




module.exports=route;