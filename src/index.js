
const express = require('express');
const mongoose = require('mongoose')

//Utilizar dotenv para variables de entorno
require('dotenv').config();

//Para permitir el origen de recursos usados
const cors = require('cors')
const app = express();

const port = process.env.PORT || 3200 //crear la variable port con lo que tiene la variable entorno PORT si no existe tome el 3200

//const vendedorRoutes = require('./routes/vendedor')
const routesRoutes = require('./routes/routes')

// Middleware para json
app.use(cors())
app.use(express.json())
// Middleware para rutas
//app.use('/api', vendedorRoutes);
app.use('/api', routesRoutes);

app.get('/', (req, res) => {
    res.send("Hola, desde API REST")
})

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Conectado a la base de datos de MongoDB Atlas: dbPrueba"))
    .catch(() => console.error("Error de conexión a la base de datos"))

app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
})