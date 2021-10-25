const mongoose=require("mongoose");


const collections= new mongoose.Schema({
    name:String,
    database:String,
})


module.exports=mongoose.model("collections",collections,'collections' )
