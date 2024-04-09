const express = require('express');
const { default: mongoose } = require('mongoose'); 
const app = express();

mongoose.connect("mongodb+srv://hariprasath1k99:zmQgGVJDjJuu8m.@har.jesskwp.mongodb.net/?retryWrites=true&w=majority&appName=har").then(function() {
  console.log("mongodb connected");
})
 app. set("view engine","ejs");
 app.use(express.json());
 app.use(express.urlencoded({extended:true}));

 app.use('/',require('./server/router/routes'))

 app.listen(10000,()=>{
  console.log("port connected");
 })
