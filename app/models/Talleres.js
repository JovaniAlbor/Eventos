const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Definir el modelo "Usuario"
const Talleres = sequelize.define('Talleres', {
    idtar:{type: DataTypes.STRING,primaryKey: true,},
    titulo: { type: DataTypes.STRING, },
    fecha: { type: DataTypes.STRING, },
    lugar: { type: DataTypes.STRING, },
    duracion: { type: DataTypes.STRING, },
    descripcion: { type: DataTypes.STRING,  },
    

}, {
    tableName: 'Talleres', // Nombre de la tabla en MySQL
    timestamps: false,     // Desactiva campos createdAt y updatedAt
    freezeTableName: true, 
});

module.exports = Talleres;