import Sequelize from "sequelize"
import { sequelize } from "../database/database"

const Drivers = sequelize.define('drivers', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    birthdate: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false
});

export default Drivers;