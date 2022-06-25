const Obektcha = require('./../models/obekt')


exports.getallobekts = async(req,res) =>{
    try {
        const obekts = await Obektcha.find();
        return res.status(200).json({
            success: true,
            data: obekts
        })        
    } catch (e) {
        res.status(500).json({
            success: false,
            error: e.message
        })
    }
}


exports.postobekts = async(req,res) =>{
    try {
        const {name,description, map, tur, } = req.body;
        let lat = map.split(',')[0]
        let long = map.split(',')[1]
        let imgurl = req.file.path;
        const newobekt = new Obektcha({name, description, imgurl, lat, long, tur})
        await newobekt.save();

        return res.status(201).json({
            success: true, 
            data: newobekt
        })


    } catch (e) {
        res.status(500).json({
            success: false,
            error: e.message
        })
    }
}


exports.delobekts = async(req,res) =>{
    try {
        const _id = req.params.id;
        const delid = await Obektcha.findByIdAndDelete({_id})
        return res.status(200).json({
            success: true,
            data: delid
        })
    } catch (e) {
        res.status(500).json({
            success: false,
            error: e.message
        })
    }
}

exports.getoneobekts = async(req,res) =>{
    try {
        const _id = req.params.id;
        const oneid = await Obektcha.findById({_id})       
        return res.status(200).json({
            success: true,
            data: oneid
        })
    } catch (e) {
        res.status(500).json({
            success: false,
            error: e.message
        })
    }
}