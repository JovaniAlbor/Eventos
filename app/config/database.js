const { Sequelize } = require('sequelize');

// Configuración de Sequelize
const sequelize = new Sequelize('eventos', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
