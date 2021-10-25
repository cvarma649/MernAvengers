const mongoose=require("mongoose");
const dotenv=require("dotenv");
require("dotenv").config();

const connectDB= async()=>{
    await mongoose.connect(`mongodb+srv://chhavi:${process.env.URLP}@mongo11.rpmgc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{useNewUrlParser: true,useUnifiedTopology: true});
    console.log("mongodb connected");
   
}
module.exports=connectDB;