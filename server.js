const express=require('express');
const app=express();
const server=3000;
app.post('/',(req,res)=>{
res.status(200).json({message:"post published by user"});
});
app.get('/',(req,res)=>{
    res.status(200).json({message:"create post"});
});
app.listen(server,()=>{
       console.log(`server is running at port: ${server}`);
});