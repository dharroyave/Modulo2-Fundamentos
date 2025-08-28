// 1. Importamos las dependencias necesarias
import mongoose from 'mongoose'; 


// 2. crearmos una función para conectar a la base de datos
export const conexionMongo = async () => {
    try {
        await mongoose.connect(process.env.BD_URL,{dbName: 'e-commerce'});
        console.log('Conexión a la base de datos exitosa');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
}