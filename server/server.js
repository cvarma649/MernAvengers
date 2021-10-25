const express=require("express");
const app=express();
const cors=require("cors")
const connectDB=require("./DB/DBConnection.js");
const PORT=5000;
const bodyParser=require("body-parser");
const fileupload = require("express-fileupload");
const bodyJson=bodyParser.json();
const urlencoder=bodyParser.urlencoded({extended:true});

app.use(cors);
app.use(bodyJson);
app.use(urlencoder);

app.use(fileupload({debug:true, useTempFiles:true, tempFileDir:'./tmpFiles/'}));
app.use('/api',urlencoder, require("./Routes/Api.js"))


app.post("/importDb",urlencoder,async(req,res)=>{
    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).send('No files were uploaded.');
        return;
      }else{res.send("nope badshit crazy")}
})



app.listen(PORT, ()=>console.log(`LISTENING ON ${PORT}`));

connectDB();