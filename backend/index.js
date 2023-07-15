const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const PORT = process.env.PORT || 8000;

const pinRoutes = require('./routes/pins');

dotenv.config();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true,})
.then(()=>console.log("database connected successfully"))
.catch(err=>console.log(err))

app.use('/api/pins',pinRoutes)

app.listen(PORT, ()=>{
  console.log(`Server connected successfully on ${PORT}`);
})