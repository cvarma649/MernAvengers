const mongoose=require("mongoose");
const database=require("../DB/DatabaseSchema.js").schema;
const collections=require("../DB/CollectionsSchema.js").schema;
const dbModel=new mongoose.model("database",database);
const collectionsModel=new mongoose.model("collections",collections)
let Admin = mongoose.mongo.Admin;




const createDatabase=async(req,res)=>{
        const {name}=req.body;
        try {
            const db=await new dbModel({"databases.name":name})
                db.save()
            res.send("db Made")
        } catch (error) {
            console.error(error.message)
        }
    }
    
    module.exports={createDatabase}