import { Sequelize } from "sequelize";

const db = new Sequelize('sagara_store', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;