// 1. Importar dependencias y modulos necesarios
import dotenv from 'dotenv';
import jsonwebtoken from 'jsonwebtoken';

// 2. Configurar dotenv para cargar variables de entorno
dotenv.config();
const key = process.env.SECRET_KEY;

// 3. Configurar el uso de JWT

// 3.1. metodo para generar un token JWT
// payload: informacion del usuario
export const generateToken = (payload) => {
    return new Promise((resolve, reject) => {
        // .sign -> genera un token
        jsonwebtoken.sign(payload, key, { expiresIn: '1h' }, (error, token) => {
            if (error) {
                reject(new Error('Error generando JWT', error.message));
            } else {
                resolve(token);
            }
        })
    });
}

// 3.2. metodo para verificar un token JWT
// token: info encriptada
export const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        // .verify -> verifica un token
        jsonwebtoken.verify(token, key, (error, decoded) => {
            if (error) {
                reject(new Error('Hubo un error al verificar el JWT', error.message));
            } else {
                resolve(decoded);
            }
        })
    });
}