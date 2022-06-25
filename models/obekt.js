const mongoose = require('mongoose')
const ObektSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Obekt nomini kirtishingiz shart.']
    },
    description: {
        type: String,
        required:[true, 'Obekt haqida qisqacha ma`lumot qo`shib qo`yishingiz kerak']
    },
    imgurl: {
        type: String,
    },
    lat:{
        type: Number,
        required: [true, 'Enter latiduie']
    },
    long:{
        type: Number,
        required: [true, 'Enter longiduie']
    },
    tur: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tur'
    }
}, {
    timestamps:true
})

module.exports = mongoose.model('Obekt', ObektSchema);