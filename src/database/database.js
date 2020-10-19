import Sequelize from "sequelize";
require("dotenv").config({ path: 'variables.env' });

export const sequelize = new Sequelize(
    process.env.DATA_BASE,
    process.env.USER_DB,
    process.env.PASSWORD_DB, {
        host: process.env.HOST_NAME,
        dialect: "postgres",
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }

)