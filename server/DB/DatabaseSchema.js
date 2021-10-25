const mongoose=require("mongoose");
const collections=require("./CollectionsSchema.js").schema;


const mainDB= new mongoose.Schema({
    db_name:String,
    password:String,
        dataBases:[
            {name:String,
             collections:[{
                type:mongoose.Schema.Types.ObjectId, ref:collections
             }]
            }
        ]
    
})


module.exports=mongoose.model("mainDB",mainDB,'mainDB');