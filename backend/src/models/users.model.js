//1. importaciones
import mongoose from "mongoose";
import { use } from "react";

//2. construir la plantilla del modelo
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,   
        required: true,
    },
    age:{
        type: Number,
    },
    password:{
        type: String,
        required: true,
    },  
    role:{
        type: String,
        enum:["admin", "user"],
        required: true         
    }
});

export const userModel = mongoose.model("users", userSchema);