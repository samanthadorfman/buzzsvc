const express = require('express');
const router = express.Router();
const {Bar} = require('../models/bar');
const { MenuItem } = require('../models/menuitem');
router.post(`/createMenuItem`, async function(req, res) {
    const menuItem = new MenuItem({
        bar_id: req.body.bar_id,
        name: req.body.name,
        price: req.body.price
    });
    const bar = await Bar.findOne({
        _id: req.body.bar_id
    });
    if (!bar) {
        res.status(500).json({success: false});
    }
    console.log(bar);
    console.log(bar.menuItems[0]);
    menuItem.save();
    bar.menuItems.push(menuItem);
    bar.save();
    res.send(menuItem);
  })

  router.get(`/getMenuItemIDsByBarID`, async (req,res) =>{
    const bar = await Bar.findOne({
        _id: req.body.bar_id
    }).select(Bar.menuItems);
    if (!bar) {
        res.status(500).json({success: false});
    }
    console.log("Hi");
    console.log(bar);
    res.send(bar.menuItems);
  })
  router.get(`/getMenuItemsByBarID`, async (req,res) =>{
    const menuitems = await MenuItem.find({
        bar_id: req.body.bar_id
    });
    console.log(menuitems);
    res.send(menuitems);
  })

  module.exports = router;