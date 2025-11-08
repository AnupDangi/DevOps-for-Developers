import express from "express";
const app=express();

const port=process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Send the request");
})


app.listen(port,()=>{
    console.log(`server is listening to port ${port}`);
})