import { userModel } from "../models/users.model.js"; //validacion de usuario
import { generateToken } from "../config/jwt.js"; //generar el token
import bcryptjs from "bcryptjs"; //validación de contraseñas


export const login = async (request, response) => {
    try {
        // VALIDACION 1: verificar que el correo exista en la base de datos
        const { emailLogin, passwordLogin } = request.body;
        // 1. buscar el usuario en la base de datos
        const userFound = await userModel.findOne({
            email: emailLogin
        });

        console.log("usuario encontrado", userFound);

        // 2. si no existe, enviar un mensaje de error
        if (!userFound) {
            return response.status(404).json({
                "mensaje": "El usuario no existe, regístrese por favor"
            });
        }

        // VALIDACION 2: verificar que la contraseña sea correcta
        const validPassword = await bcryptjs.compare(passwordLogin, userFound.password);

        if (!validPassword) {
            return response.status(401).json({
                "mensaje": "Contraseña incorrecta"
            });
        }

        // generar el token -> verificacion permisos
        const payload = {
            id: userFound._id,
            user: userFound.username
        }

        if (userFound.role === "admin") {
            payload.admin = true;
        } else {
            payload.admin = false;
        }

        const token = await generateToken(payload);
        console.log("payload: ", payload);
        console.log("token: ", token);

        return response.status(200).json({
            "mensaje": "Inicio de sesión exitoso",
            "token": token
        });


    } catch (error) {
        return response.status(400).json({
            "mensaje": "Error al iniciar sesión",
            "error": error.message || error
        });
    }

}