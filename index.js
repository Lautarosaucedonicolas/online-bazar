
const express = require('express'); // Importa el módulo Express
const app = express(); // Crea una instancia de la aplicación Express
const port = 3000; // Define el puerto en el que escuchará el servidor

// Define una ruta para la página principal ("/")
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // Envía el archivo index.html al cliente
});

// Inicia el servidor y escucha en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`); // Muestra un mensaje en la consola cuando el servidor se inicia
});










