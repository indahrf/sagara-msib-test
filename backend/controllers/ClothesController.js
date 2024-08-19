import Clothes from "../models/ClothesModel.js";

export const getClothes = async(req, res) =>{
    try {
        const response = await Clothes.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getClothesById = async(req, res) =>{
    try {
        const response = await Clothes.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createClothes = async(req, res) =>{
    try {
        await Clothes.create(req.body);
        res.status(201).json({msg: "Clothes Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateClothes = async(req, res) =>{
    try {
        await Clothes.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Clothes Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteClothes = async(req, res) =>{
    try {
        await Clothes.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Clothes Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}