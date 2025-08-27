// El archivo de ejecución principal de la aplicación
// configuración del servidor y gestionar la lógica de negocio

// 1. Importar las dependencias necesarias
import express from 'express';
import dotenv from 'dotenv';

// 2. Configurar las dependencias que necesitamos (servidor)
const app = express();
dotenv.config();


const port = process.env.PORT;



// 3. Funcionalidades que queremos implementar
app.get('/', (req, res) => {
  res.send('Server Works!');
});

// 4. levantar el servidor
app.listen(port, () => {
  console.log(`Servidor ejecutandose en http://localhost:${port}`);
});
