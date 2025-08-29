//1. importaciones
import mongoose from "mongoose";


//2. construir la plantilla del modelo
const productSchema = new mongoose.Schema({
    image: {
        type: String, 
        required: true
    },
    title: {
        type: String, 
        required: true
    },
    description: {
        type: String, 
    },
    price: {
        type: Number, 
        required: true
    },
    categories: {
        type: String, 
        enum:["helados", "galleta", "tortas"],
    },
    isAvailable: {
        type: Boolean, 
    },
    Date: {
        type: Date, 
        default: Date.now
    }
});

//3. construir el modelo
export const productModel = mongoose.model("products", productSchema);
