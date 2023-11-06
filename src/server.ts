import express ,{Request,Response}from 'express'
import routes from './routes/index'
import dotenv from 'dotenv'
import bodyParser from 'body-parser';

//#region declare variables
const app = express();
const port  = 3000;
const host = '127.0.0.1';
//#endregion
//#region dotenv configuration
dotenv.config();
//#endregion

//#region endpoints
app.get('/api',(req:Request,res:Response,next:Function)=>{console.log(5) ;
   // next();
    return ;})
app.use('/api',bodyParser.json(),routes)

//#endregion

//#region initialize server
app.listen(port,host,()=>{
    console.log(`The Server is Running on Port : ${port}`)
})
//#endregion
