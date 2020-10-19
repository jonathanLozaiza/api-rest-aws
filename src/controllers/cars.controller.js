import Cars from '../models/Cars'

export async function createCar(req, res) {
    const { car_plate, car_model } = req.body;
    try {
        const newCar = await Cars.create({
            car_plate,
            car_model,
        }, {
            fields: [
                'car_plate',
                'car_model'
            ]
        });

        if (newCar) {
            return res.status(200).json({
                msg: "car created successfully",
                date: newCar
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "somethig goes wrong",
            data: {}
        })
    }
}

//get cars
export async function getCars(req, res) {
    try {
        const cars = await Cars.findAll()
        res.json({
            data: cars
        })
    } catch (error) {
        res.status(500).json({
            msg: "something goes wrong"
        })
    }
}

//get one car
export async function getOneCar(req, res) {
    const { id } = req.params;
    try {
        const car = await Cars.findOne({
            where: {
                id
            }
        });
        res.json({
            car
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "something goes wrong"
        })
    }
}

//delete a car
export async function deleteCar(req, res) {
    const { id } = req.params;
    try {
        const deleteRowCount = await Cars.destroy({
            where: {
                id
            }
        })
        res.json({
            msg: "car deleted successfully",
            data: deleteRowCount
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "something goes wrong"
        })
    }
}

//update car
export async function updateCar(req, res) {
    const { id } = req.params;
    const { car_plate, car_model } = req.body;
    try {
        let car = await Cars.findOne({
            where: {
                id
            }
        });

        if (!car) {
            return res.status(404).json({
                msg: "car not found"
            })
        }

        car = await car.update({
            car_plate,
            car_model
        });

        res.json({
            msg: "car updated successfully",
            data: car
        })

    } catch (error) {
        res.status(500).json({
            msg: "something goes wrong"
        })
    }
}