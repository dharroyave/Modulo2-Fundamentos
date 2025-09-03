import express from "express";
import {postUser,getUser,putUserById,deleteUserById} from "../controllers/users.controller.js";

//2.configurar las rutas:

const userRouter = express.Router();

//3. ruta para el post 
userRouter.post("/",postUser);

// ruta para el get
userRouter.get("/",getUser);

//ruta para el put
userRouter.put("/:id",putUserById);

//ruta para el delete
userRouter.delete("/:id",deleteUserById);