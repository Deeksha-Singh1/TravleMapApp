const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const PORT=process.env.PORT
const app = express();

app.use(express.json);

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true,})
.then(()=>console.log("database connected successfully"))
.catch(err=>console.log(err))

app.listen(PORT, ()=>{
  console.log(`Server connected successfully on ${PORT}`);
})