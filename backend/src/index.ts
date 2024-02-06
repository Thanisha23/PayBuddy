// Importing module 
import express, { Request, Response } from 'express'; 
import rootRouter  from "./routes/index"
import cors from "cors";
import env from './utils/validateEnv'
const app = express(); 
// const PORT:Number=3000; 


app.use(cors());
app.use(express.json());
// Handling GET / Request 
// app.get('/', (req:Request, res:Response) => { 
//     res.send('Welcome to typescript backend!'); 
// }) 
app.use("/api/v1",rootRouter)
// Server setup 
app.listen(env.PORT,() => { 
    console.log('The application is listening '
          + 'on port http://localhost:'+env.PORT); 
})