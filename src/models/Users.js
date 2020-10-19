import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Users = sequelize.define('users', {
    id: {
        type: Sequelize.NUMBER,
        primaryKey: true
    },
    role: {
        type: Sequelize.TEXT
    },
    name: {
        type: Sequelize.TEXT
    },
    email: {
        type: Sequelize.TEXT,
        unique: true
    },
    password: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false
});

export default Users;