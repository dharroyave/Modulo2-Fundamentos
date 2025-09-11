// 1. importaciones necesarias
import multer from "multer";
import path from "path"; //modulo nativo de node
import fs from "fs"; //modulo nativo de node
import { fileURLToPath } from "url"; //modulo nativo de node

// 2. configuración de multer - desarrollo de funcionalidades
const _filename = fileURLToPath(import.meta.url); //_filename -> ruta completa del archivo actual (backend/src/config/multer.js)
const _dirname = path.dirname(_filename); //_dirname -> ruta de la carpeta actual (backend/src/config)


// 1.crear la carpeta para almacenar los archivos si no existe
const UPLOADS_FOLDER = path.join(_dirname, "../uploads");

// si la carpeta no existe, crearla
if (!fs.existsSync(UPLOADS_FOLDER)) {
    fs.mkdirSync(UPLOADS_FOLDER);
}

// 2.expesificar el destino y el nombre del archivo
export const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // donde se van a guardar los archivos
        cb(null, UPLOADS_FOLDER);
    },
    filename: (req, file, cb) => {
        // cómo se van a llamar los archivos
        const ext = path.extname(file.originalname); //obtener la extensión del archivo -> .jpg, .png, .pdf
        const base = path.basename(file.originalname, ext).replace(/\s+/g, "_"); //obtener el nombre del archivo sin la extensión y reemplazar espacios por guiones bajos
        cb(null, `${base}-${Date.now()}${ext}`); //nombre del archivo + fecha actual + extensión
    },
});




// 3.expesificar el tipo de archivo que se va a permitir subir al servidor




// 4.definir el tamaño máximo del archivo que se va a permitir subir al servidor



// 5.exportar las características de multer



