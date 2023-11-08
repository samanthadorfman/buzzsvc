const mongoose = require('mongoose');
const menuItemSchema = mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    bar_id: String
})
exports.MenuItem = mongoose.model('MenuItem', menuItemSchema)
