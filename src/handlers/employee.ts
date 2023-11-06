
import { Request,Response } from "express";
import teacher ,{TeacherInfo} from '../models/employee'

const index = async (_req:Request,res:Response):Promise<undefined>=>{
    try{
        const result = await teacher.index();
        res.json(result);
    }
    catch(e){
        res.status(400).send('Failure to get data');
    }
}

const show = async (req:Request,res:Response):Promise<undefined> =>{
    try{
        const id = req.params.id;
        const result = await teacher.show(Number(id));
        res.json(result || 'No teacher with this id')
    }
    catch(e){
        res.status(401).send('Failure to get data')
    }
}

const create = async (req:Request,res:Response):Promise<undefined>=>{
    try{
        const teacherInfo:TeacherInfo = req.body;
        const result = await teacher.create(teacherInfo);
        res.json(result);
    }
    catch(e){
        res.status(402).send('Failure to get data')
    }
}

export default {index,show,create};