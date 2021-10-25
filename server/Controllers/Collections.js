const mongoose=require("mongoose");
const database=require("../DB/DatabaseSchema.js").schema;
const collections=require("../DB/CollectionsSchema.js").schema;
const dbModel=new mongoose.model("database",database);
const collectionsModel=new mongoose.model("collections",collections)
let Admin = mongoose.mongo.Admin;




const createCollection=async(req,res)=>{
    const {name}=req.body;

    try {
        const coll=await new collectionsModel({"name":name,"database":req.params.dbname})
        coll.save()
        res.send("collection made")
    } catch (error) {
        console.error(error.message)
    }
}

module.exports={createCollection}