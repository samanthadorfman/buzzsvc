const express = require('express');
const router = express.Router();
const { Order } = require('../models/order');
const {Bar} = require('../models/bar');
const {User} = require('../models/user');

router.post(`/createOrder`, async function(req, res) {
    const order = new Order({
        user_id: req.body.user_id,
        bar_id: req.body.bar_id,
        orderItems: req.body.orderItems,
        totalPrice: req.body.totalPrice,
        creationDate: req.body.creationDate,
        fulfillmentDate: req.body.fulfillmentDate
    });
    const bar = await Bar.findOne({
        _id: req.body.bar_id
    });
    if (!bar) {
        res.status(500).json({success: false});
    }
    const user = await User.findOne({
        _id: req.body.user_id
    });
    if (!user) {
        res.status(500).json({success: false});
    }
    console.log(bar.orders);
    bar.orders.push(order);
    user.orders.push(order);
    bar.save();
    user.save();
    res.send(order);

  })
  module.exports = router;