const mongoose=require("mongoose");
const mainDB=require("../DB/DatabaseSchema.js").schema;
const collections=require("../DB/CollectionsSchema.js").schema;
const dbModel=new mongoose.model("mainDB",mainDB);
const collectionsModel=new mongoose.model("collections",collections)
const path = require('path');
const fs=require("fs");

const importDataset=async(req,res)=>{
        const {collectionName}=req.params
        const file = req.files.file;
        try {
            if(file){
                try {
                    await (fs.readFile(file.tempFilePath,"utf-8", async(err, data)=> {
                        if(err){
                            console.log(err.message);
                        }else{
                           const content=await JSON.parse(data)
                           if(content){
                            try {
                                let headers=Object.keys(content);
                                let values=Object.values(content);
                                for(let i=0;i<headers.length;i++){
                                    for(let j=0;j<values.length;j++){
                                        const updateCollection=collectionsModel.update({name:collectionName},{$set:{headers[i]:values[j]}})
                                        
                                    }
                                }
                             
                                res.send({"headers":headers,"values":values})

                          } catch (error) {
                            console.error(error.message);
                            res.send("no given Id")          
                        }}else{
                              console.log("DIDNT PARSE")
                      }}
                    }))   
                } catch (error) {
                    console.log(error.message);
                  res.send("Problem with reading")
                }       
        }else{
                res.send("File was not found");
        };
        } catch (error) {
            console.error(error.message)
        }
   
   
}

      
  

    
    // let obj;
    // if(file){
    //     try {
    //         await (fs.readFile(file.tempFilePath,"utf-8", async(err, data)=> {
    //             if(err){
    //                 console.error(err.m.message)
    //                 res.send("Couldnt read")
    //             }else{
    //                 try {
    //                     let content=await JSON.parse(data);
    //                     if(content){
    //                         try {
    //                             for (var key in content) {
    //                                 res.send({"key":key,"value":content[key]})
    //                             }
                                
    //                         } catch (error) {
    //                             console.error(error.message);
    //                             res.send("parsing issues");
    //                     }}
    //                 } catch (error) {
    //                     console.error(error.message);
    //                     res.send("parsing issues");
    //                 }
    //             }
    //         }))
    //     } catch (error) {
    //         console.error(error.message)
    //     }
    // }



module.exports={importDataset};