const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    bar_id: {
        type: String,
        required: true
    },
    orderItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'menuItem',
        default: []
    }],
    totalPrice: {
        type: Number,
        required: true
    },
    creationDate: {
        type: Date,
        required: false,
        default: Date.now
    },
    fulfillmentDate: {
        type: Date,
        required: false
    }
})
exports.Order = mongoose.model('Order', orderSchema)
