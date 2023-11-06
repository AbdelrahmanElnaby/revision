import {Request,Response} from 'express'

//#region declare variables
let counter = 0 ;
//#endregion


//#region declare middleware
const logger = (req:Request,re:Response,next:Function):void=>{
    const url= req.url;
    counter ++;
    console.log(`ID: ${counter} -> ${url}`);
    next();
}
//#endregion

export default logger;