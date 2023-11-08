const express = require('express');
const router = express.Router();
const {User} = require('../models/user');


router.post(`/createUser`, function(req, res) {
    const user = new User({
      user_id: req.body.user_id,
      username: req.body.username,
      password: req.body.password,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      gender: req.body.gender
    })
    user.save().then((createdUser => {
      res.status(201).json(createdUser);
      console.log("Created user with name " + createdUser.firstname + "!");
    }))
      .catch((err) => {
        res.status(500).json({
          error: err,
          success: false
        })
      })  
  })
  
  router.get(`/getUsers`, async (req,res) =>{
    const userList = await User.find();
    if (!userList) {
      res.status(500).json({success: false})
    }
    console.log(userList);
    res.send(userList);

  })

  router.get(`/getUser`, async (req,res) =>{
    const user = await User.findOne({
        _id: req.body._id
    });
    if (!user){
        res.status(500).json({success: false})
    }
    console.log(user);
    res.send(user);
  })

  module.exports = router;