const mongoose=require("mongoose");
const mainDB=require("../DB/DatabaseSchema.js").schema;
const collections=require("../DB/CollectionsSchema.js").schema;
const dbModel=new mongoose.model("mainDB",mainDB);
const collectionsModel=new mongoose.model("collections",collections)
const saltRounds=10;

const bcrypt = require("bcrypt");   

const createConnection=async(req,res)=>{
    const {clusterName,pword}=req.body;
    
    const cryptedPWord=await bcrypt.hash(pword, saltRounds);
    try {
        const newDb=new dbModel({db_name:clusterName,password:cryptedPWord})
        newDb.save()
        res.json(newDb);
    } catch (error) {
        console.error(error.message);
    }
}



   

module.exports={createConnection};