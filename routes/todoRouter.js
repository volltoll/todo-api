//  diese Datei enthält die Routing Logik für die Todo-Items
//  und kontrolliert die CRUD Operationen
//  1. importiere Express
//  2. importiere die Controller
//  3. Erstelle einen Router aus Express
//  4. Definiere die Routen
//  5. exportiere den Router


import express from "express";
import { createTodoController, getAllTodosController, deleteTodoController, updateTodoController } from "../controllers/todoControllers.js";


//  3. Erstelle einen Router aus Express
const todoRouter = express.Router();

//  4. Definiere die Routen
//  POST - CREATE
todoRouter.post("/", createTodoController);
//  GET - READ
todoRouter.get("/", getAllTodosController);

//  TODO: UPDATE
todoRouter.put("/:id", updateTodoController);


// DELETE - DELETE
todoRouter.delete("/:id", deleteTodoController);


//  5. exportiere den Router
export default todoRouter;