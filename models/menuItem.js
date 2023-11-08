const mongoose = require('mongoose');

const menuItemSchema = mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    }
})
exports.MenuItem = mongoose.model('MenuItem', menuItemSchema)
