const express=require('express');
const studentroutes =require('./src/student/routes');
var bodyParser = require('body-parser')
const app=express();
const port=5050;
app.get("/",(req,res)=>{
    res.send("IT working");
});
app.use(express.json());
app.use(bodyParser.json())
app.use("/api/call/student/",studentroutes);
app.listen(port,()=>{console.log(`IT is worked succefully ${port}`);})