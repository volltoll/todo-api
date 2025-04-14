//  diese Datei beinhaltet alle CRUD Operationen für die Todo-Items
//  Der braucht die Models Informationen
//  1. imporiere todoModel
//  2. Controller erstellem
//  3. Exporiere den Controller


//  1. imporiere todoModel
import todoModel from "../models/todoModel.js";




//  POST - CREATE
const createTodoController = async ( req, res) => {
    console.log(req.body.todo)
    const newTodo = req.body.todo;
    try {
        //  Erstelle ein neues Todo Object mit dem Model
        const toSave = todoModel({
            todo: newTodo,
        })
        //  Speichere das Todo in der Datenbank mit der save() Methode
        await toSave.save();
        //  Gebe eine Antwort zurück an den Client 
        res.status(201).json({message: "Todo Created"});
        
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
};

//  GET - Read
//  Wir brauchen den Befehl find() um alle Todos zu finden
const getAllTodosController = async ( req, res) => {
    try {
        const allTodos=await todoModel.find({});
        res.status(200).json(allTodos);
        todoModel.find({});
        } catch (error) {
        res.status(500).json({message: error.message})       
    }
};


//  Kontrollers exportieren
export  { createTodoController, getAllTodosController };