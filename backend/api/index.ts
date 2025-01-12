// Importing module 
import express,{Request,Response} from 'express'; 
import rootRouter  from "../src/routes/index"
import cors from "cors";
import env from '../src/utils/validateEnv'
const cookieParser = require("cookie-parser");
const app = express(); 

app.use(cors(
    {
        origin: env.FRONTEND_URL ,// Replace with your frontend's origin
        credentials: true // Allow sending cookies from the frontend
      }
));

app.use(cookieParser());


app.use(express.json());
// Handling GET / Request 
app.get('/', (req:Request, res:Response) => { 
    res.send('Welcome to typescript backend!'); 
}) 
app.use("/api/v1",rootRouter)
// Server setup 
app.listen(env.PORT,() => { 
    console.log('The application is listening '
          + 'on port http://localhost:'+env.PORT); 
})