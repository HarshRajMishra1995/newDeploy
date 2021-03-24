
const express=require('express');
const app=express();
const port=process.env.PORT||3000;

app.get('/',(req,res)=>{
    res.send("App deployed!!!")
})


app.listen(port,()=>{
    console.log("app is running at port 3000")
})