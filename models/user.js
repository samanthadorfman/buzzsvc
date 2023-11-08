const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    gender: String,
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        default: undefined
    }],
})
exports.User = mongoose.model('User', userSchema)
