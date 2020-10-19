import Sequelize from "sequelize"
import { sequelize } from "../database/database"

const Cars = sequelize.define('cars', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    car_plate: {
        type: Sequelize.TEXT
    },
    car_model: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false
});

export default Cars;