const express = require('express');
const router = express.Router();
const { Bar } = require('../models/bar');

router.post(`/createBar`, function(req, res) {
    const bar = new Bar({
        name: req.body.name
    })
    bar.save().then((createdBar => {
      res.status(201).json(createdBar);
      console.log("Created bar with name " + createdBar.name + "!");
    }))
      .catch((err) => {
        res.status(500).json({
          error: err,
          success: false
        })
      })  
  })
  router.get(`/getBars`, async (req,res) =>{
    const barList = await Bar.find();
    if (!barList) {
      res.status(500).json({success: false})
    }
    console.log(barList);
    res.send(barList);
  })

  module.exports = router;