import { cleanEnv} from "envalid";
import { config } from "dotenv";
import { port,str } from "envalid/dist/validators";
config();
const env = cleanEnv(process.env,{
    PORT:port(),
    MONGO_URL:str(),
    JWT_SECRET:str(),
    FRONTEND_URL :str(),
})

export default env;