const express = require('express');
const { default: mongoose } = require('mongoose'); 
const app = express();


mongoose.connect("mongodb://0.0.0.0:27017/datacollection",{}).then(()=>{
  console.log("mongodb connected");
})
 app. set("view engine","ejs");
 app.use(express.json());
 app.use(express.urlencoded({extended:true}));

 app.use('/',require('./server/router/routes'))

 app.listen(10000,()=>{
  console.log("port connected");
 })
