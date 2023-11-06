import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import {Response,Request} from "express"

dotenv.config();

export const authentication = (req:Request,res:Response,next:Function):void =>{
    const{BEPPER,SALTrOUND} = process.env;
    const {password} = req.body;

    const encrypt = bcrypt.hashSync(password+BEPPER,Number(SALTrOUND));
    const comparing = bcrypt.compareSync(password+BEPPER,encrypt);
    if (comparing) {
        next();
    }
    else res.send("not valid password")
    return;
}

export const authorization = (req:Request,res:Response,next:Function):void =>{

    const {SECRETKEY} = process.env;
    const payload = {id:2};
   /* const signature = jwt.sign(payload,String(SECRETKEY));
    res.setHeader("Authorization","Bearer "+signature);
    next();
    */
   
    const {authorization} = req.headers
    console.log(authorization)
    try{
    const isAuthorized = jwt.verify(String(authorization).split(' ')[1],String(SECRETKEY))
    next();
    }
    catch(e){
        res.send("jwt failed")
    }
    return;
    
}





