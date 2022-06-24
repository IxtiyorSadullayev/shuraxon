const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express();

// Middleware
dotenv.config()
app.use(express.json())
app.use(express.urlencoded({extended:false}))


mongoose.connect(process.env.DB_URL)
    .then(() => console.log(`Bazaga ulanildi.`))
    .catch(e => console.log(`Bazaga bo'lanishda hatolik mavjud`))



app.use((req,res,next) =>{
    const error = new Error('Nimadir hato bo`ldi. Qaytadan urinib ko`ring.')
    next(error)
})

app.use((err, req,res,next) =>{
    res.status(500).json({
        success: false,
        message: err.message
    })
})

const PORT  = process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log(`Server started on port ${PORT}`)
})