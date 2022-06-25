const mongoose = require('mongoose')
const TurSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, 'Biror bir tur qo`shish uchun albatta unga nom berishingiz kerak']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Tur', TurSchema)