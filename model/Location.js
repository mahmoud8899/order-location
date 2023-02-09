const mongoose = require('mongoose')



const locationSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    location:{
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
          },
          coordinates: {
            type: [Number], // long, lat
            required: true
          }
    },
},
    {
        timestamps: true
    }
)






module.exports = mongoose.model('location', locationSchema)