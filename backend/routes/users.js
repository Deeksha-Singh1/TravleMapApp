const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

//Register user
router.post('/register', async(req,res)=>{
  try{

    //generate password
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(req.body.password, salt);

    //create a user
    const newUser = new User({
      username: req.body.username,
      email:req.body.email,
      password:hashPass,
    });

    //save the user and response
    const user = await newUser.save();
    res.status(200).json({message:"User created successfully"});

  }catch(err){res.status(500).json(err)}
})

module.exports = router;