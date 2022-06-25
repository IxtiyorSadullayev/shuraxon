const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const crypto = require('crypto')
const multer = require('multer')
const cors = require('cors')
const app = express();


//configuring multer to upload files
const fileStorage = multer.diskStorage({
    destination:(req,file,cb)=>{
       cb(null,"./images")
    },
    filename:(req,file,cb)=>{
       cb(null,crypto.randomBytes(5).toString("hex") + file.originalname)
    }
})

const fileFilter = (req,file,cb)=>{
 if(file.mimetype === "image/png" ||file.mimetype === "image/jpg" ||file.mimetype === "image/jpeg"){
     cb(null,true)
  }else{
      cb(null,false)
  }
}

app.use(multer({storage:fileStorage,fileFilter:fileFilter}).single("image"))

// Middleware
dotenv.config()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/images', express.static('images'))
app.use(cors())
mongoose.connect('mongodb+srv://ixtiyor99:ixtiyor99@cluster0.mpzth.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log(`Bazaga ulanildi.`))
    .catch(e => console.log(`Bazaga bo'lanishda hatolik mavjud`))

app.use('/api/', require('./routes/obekt'))
app.use('/api/', require('./routes/tur.routes'))



app.use((req,res,next) =>{
    const error = new Error('Nimadir hato bo`ldi. Qaytadan urinib ko`ring.')
    next(error)
})

app.use((err, req,res,next) =>{
    res.status(500).json({
        success: false,
        error: err.message
    })
})

const PORT  = process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log(`Server started on port ${PORT}`)
})