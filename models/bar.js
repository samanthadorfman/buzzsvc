const mongoose = require('mongoose');
const { MenuItem } = require('./menuitem');
const barSchema = mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    joinDate: {
      type: Date,
      default: Date.now,
      required: false
    },
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: false
    }],
    menuItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: MenuItem,
        required: false
    }]
})
exports.Bar = mongoose.model('Bar', barSchema)