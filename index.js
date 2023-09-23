var express=require('express')
// var mongo=require('mongoose')
 var app=express()

app.get("/",(res)=>{
    res.status(200).json('port No:5000')
})

 app.listen(5000,()=>{
   console.log(`listen on http://localhost:5000/`)
 })