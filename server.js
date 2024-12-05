const app = require('./app/app'); // Importa la configuración de Express
const port = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
