import { Router } from "express";
import { createDriver, getDrivers, getOneDriver, deleteDriver, updateDriver } from '../controllers/drivers.controller';

const router = Router();

// /api/Drivers/
// create Driver
router.post('/', createDriver);
// get Drivers
router.get('/', getDrivers);

// /api/drivers/id
// get one Driver
router.get('/:id', getOneDriver);
// delete one Driver
router.delete('/:id', deleteDriver);
// update Driver
router.put('/:id', updateDriver);

export default router;