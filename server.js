import express from 'express';
import cors from 'cors';
import connectDB from "./database/connectDB.js";
import todoRouter from './routes/todoRouter.js';

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

//  Test route

app.get("/", ( req, res ) => {
    res.send("Hello Server!");
   });


//  CRUD - Routen
app.use("/todos", todoRouter);   



const startServer = async () => {
    try {
        // Verbindung zur Datenbank herstellen
        await connectDB(process.env.MONGO_URL);
        console.log("Connected to MongoDB");
        
        app.listen( PORT, () => {
            console.log(`Server is running on Port: ${PORT}`);
        }
        );
        
    } catch (error) {
        console.log(error);
        
    }};

    //  server starten
    startServer();