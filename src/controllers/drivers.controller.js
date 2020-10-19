import Drivers from '../models/Drivers'

export async function createDriver(req, res) {
    const { name, birthdate } = req.body;
    try {
        const newDriver = await Drivers.create({
            name,
            birthdate,
        }, {
            fields: [
                'name',
                'birthdate'
            ]
        });

        if (newDriver) {
            return res.status(200).json({
                msg: "driver created successfully",
                date: newDriver
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

//get drivers
export async function getDrivers(req, res) {
    try {
        const drivers = await Drivers.findAll()
        res.json({
            data: drivers
        })
    } catch (error) {
        res.status(500).json({
            msg: "something goes wrong"
        })
    }
}

//get one driver
export async function getOneDriver(req, res) {
    const { id } = req.params;
    try {
        const driver = await Drivers.findOne({
            where: {
                id
            }
        });
        res.json({
            driver
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "something goes wrong"
        })
    }
}

//delete a driver
export async function deleteDriver(req, res) {
    const { id } = req.params;
    try {
        const deleteRowCount = await Drivers.destroy({
            where: {
                id
            }
        })
        res.json({
            msg: "driver deleted successfully",
            data: deleteRowCount
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "something goes wrong"
        })
    }
}

//update driver
export async function updateDriver(req, res) {
    const { id } = req.params;
    const { name, birthdate } = req.body;
    try {
        let driver = await Drivers.findOne({
            where: {
                id
            }
        });

        if (!driver) {
            return res.status(404).json({
                msg: "driver not found"
            })
        }

        driver = await driver.update({
            name,
            birthdate
        });

        res.json({
            msg: "driver updated successfully",
            data: driver
        })

    } catch (error) {
        res.status(500).json({
            msg: "something goes wrong"
        })
    }
}