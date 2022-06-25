const Tur = require('../models/tur')


exports.getallturs = async(req,res) =>{
    try {
        const turs = await Tur.find();
        return res.status(200).json({
            success: true, 
            data: turs
        })
    } catch (e) {
        res.status(500).json({
            success:false,
            error: e.message
        })
    }
}

exports.postturs = async(req,res) =>{
    try {
        const {name} = req.body;
        const newtur = await Tur.create(name);

        return res.status(201).json({
            success: true,
            data: newtur
        })
    } catch (e) {
        res.status(500).json({
            success:false,
            error: e.message
        })
    }
}

exports.delturs = async(req,res) =>{
    try {
        const id = req.params.id;
        const deldate = await Tur.findByIdAndDelete({_id:id});
        return res.status(200).json({
            success: true,
            data: deldate
        })
    } catch (e) {
        res.status(500).json({
            success:false,
            error: e.message
        })
    }
}