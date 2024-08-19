import express from "express";
import {
    getClothes, 
    getClothesById,
    createClothes,
    updateClothes,
    deleteClothes
} from "../controllers/ClothesController.js";

const router = express.Router();

router.get('/clothes', getClothes);
router.get('/clothes/:id', getClothesById);
router.post('/clothes', createClothes);
router.patch('/clothes/:id', updateClothes);
router.delete('/clothes/:id', deleteClothes);

export default router;