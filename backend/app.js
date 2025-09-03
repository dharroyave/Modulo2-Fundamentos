// El archivo de ejecución principal de la aplicación
// configuración del servidor y gestionar la lógica de negocio

// 1. Importar las dependencias necesarias
import express from 'express';
import dotenv from 'dotenv';
import { conexionMongo } from './src/config/db.js';
import {productRouter} from "./src/routes/products.routes.js";
import {userRouter} from "./src/routes/users.routes.js"

// 2. Configurar las dependencias que necesitamos (servidor)
const app = express();
dotenv.config();
const port = process.env.PORT;
conexionMongo(); // Conectar a la base de datos



// 3. Funcionalidades que queremos implementar
app.get('/', (req, res) => {
  res.send('Server Works!');
});

app.use(express.json());
app.use("/products",productRouter);
app.use("/users",userRouter)

// 4. levantar el servidor
app.listen(port, () => {
  console.log(`Servidor ejecutandose en http://localhost:${port}`);
});
