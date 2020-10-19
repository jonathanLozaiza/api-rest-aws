import { Router } from "express";
import { createCar, getCars, getOneCar, deleteCar, updateCar } from '../controllers/cars.controller';

const router = Router();

// /api/Cars/
// create Car
router.post('/', createCar);
// get Cars
router.get('/', getCars);

// /api/cars/id
// get one Car
router.get('/:id', getOneCar);
// delete one Car
router.delete('/:id', deleteCar);
// update Car
router.put('/:id', updateCar);

export default router;