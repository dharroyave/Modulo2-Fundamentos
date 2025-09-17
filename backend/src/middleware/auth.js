import { verifyToken } from '../config/jwt.js';

export const auth = (requiredRole) => {
    return async (request, response, next) => {
        // logica de validacion
        // 1. verificar si si se envio el token en la cabecera de la peticion
        const token = request.headers["authorization"];
        // console.log("Token recibido en la cabecera de la peticion: " + token);

        if (!token) {
            return response.status(401).json({
                "mensaje": "No se encontro token, permiso denegado"
            });
        }

        // 2. verificar si el token es valido (JWT)
        const allowedToken = token.split(" ")[1];
        // console.log("Token despues de separar Bearer: " + allowedToken);

        try {
            const decoded = await verifyToken(allowedToken);
            console.log("Información decodificado del Token: ", decoded);

            // 3. verificar si el rol del usuario es administrador
            if (requiredRole === "admin" && decoded.admin === false) {
                return response.status(401).json({
                    "mensaje": "Permiso denegado: No es administrador"
                });
            }


        } catch (error) {
            return response.status(401).json({
                "mensaje": "Falló la autenticación: Token no permitido"
            });
        }




        // indica que debe continuar con la ejecucion del siguiente proceso
        next();
    };
}   