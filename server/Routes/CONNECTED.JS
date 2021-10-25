const express=require("express");
const mongoose=require("mongoose");
const connectRoute=express.Router();
const bodyParser=require("body-parser");
const bodyJson=bodyParser.json();
const urlencoder=bodyParser.urlencoded({extended:true})
const database=require("../DB/DatabaseSchema.js").schema;
const dbModel=new mongoose.model("database",database);
const mongodb=require("mongodb")
let Admin = mongoose.mongo.Admin;

connectRoute.get("/",async(req,res)=>{

})

module.exports=connectRoute;