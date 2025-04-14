//  diese Datei beinhaltet alle CRUD Operationen für die Todo-Items
//  Der braucht die Models Informationen
//  1. imporiere todoModel
//  2. Controller erstellem
//  3. Exporiere den Controller

//  1. imporiere todoModel
import todoModel from "../models/todoModel.js";

//  POST - CREATE
const createTodoController = async (req, res) => {
  console.log(req.body.todo);
  const newTodo = req.body.todo;
  try {
    //  Erstelle ein neues Todo Object mit dem Model
    const toSave = todoModel({
      todo: newTodo,
    });
    //  Speichere das Todo in der Datenbank mit der save() Methode
    await toSave.save();
    //  Gebe eine Antwort zurück an den Client
    res.status(201).json({ message: "Todo Created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  GET - Read
//  Wir brauchen den Befehl find() um alle Todos zu finden
const getAllTodosController = async (req, res) => {
  try {
    const allTodos = await todoModel.find({});
    res.status(200).json(allTodos);
    todoModel.find({});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  TODO: Update
// Wir brauchen den `findByIdAndUpdate()`-Befehl von Mongoose
// Dann holen wir uns die ID von der URL
// Dan fügen wir den neuen Todo-Text hinzu

const updateTodoController = async (req, res) => {
    //  Hole die id von url
    const todoId = req.params.id;

    //  Hole dir den neuen Todo-Text von der Anfrage
    const newTodoText = req.body;
  try {
    
//  todo mit findByIdAndUpdate updaten
    await todoModel.findByIdAndUpdate(
        todoId, 
        { 
        $set: newTodoText,
     }, 
     { new: true }
    );
    res.status(200).json({ message: "Todo Updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  Delete
const deleteTodoController = async (req, res) => {
  try {
    res.status(200).json({ message: "Todo Deleted" });
    //  Hole die id von url
    const todoId = req.params.id;
    console.log(todoId);

    //  todo mit findByIdAndDelete löschen
    await todoModel.findByIdAndDelete(todoId);
    res.status(200).json({ message: "Todo Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  Kontrollers exportieren
export {
  createTodoController,
  getAllTodosController,
  updateTodoController,
  deleteTodoController,
};
