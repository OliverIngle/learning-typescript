//IMPORTS
import express, { Application } from "express"
import progress from './routes/progress'

//APP SETUP
const app: Application = express()
app.use(express.json())
require('dotenv').config()
const PORT = process.env.PORT || 5000;
 
//Routes
app.use('/progress', progress)


//LISTNER
app.listen(PORT ,
    (): void => console.log(
        `\t\t------ API RUNNING ON http://localhost:${PORT} ------`
        ));