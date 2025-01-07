const express = require('express');
const cors = require('cors');
const ConferenciasRoutes = require('./routes/Conferenciasrout');
const TalleresRoutes = require('./routes/Talleresrout');
const ConcursosRoutes = require('./routes/Concursosrout');
const app = express();

app.use(cors({
     origin: 'http://localhost:8100'  // Permite solo solicitudes desde este origen
   }));
// Middleware
app.use(express.json());

// Registrar rutas
app.use('/Conferencias', ConferenciasRoutes);
app.use('/Talleres', TalleresRoutes);
app.use('/Concursos', ConcursosRoutes); 


const sequelize = require('./config/database');

sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos exitosa');
  })
  .catch((error) => {
    console.error('No se pudo conectar a la base de datos:', error);
  });

module.exports = app;
