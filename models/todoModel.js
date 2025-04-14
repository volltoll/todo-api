//  1. mongoose importieren
//  2. Schema erstellen
//  3. Model erstellen
//  4. exportiere den model



//  1. mongoose importieren
import mongoose from "mongoose";


//  2. Schema erstellen
//  Schema ist ein Muster für jeden Eintrag in der Datenbank
const todoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true,
    },
});

//  3. Model erstellen
const todoModel = mongoose.model("todoLists", todoSchema);

//  4. exportiere den model
export default todoModel;