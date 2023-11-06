import {Router} from 'express'
import { authentication,authorization } from '../../security';

//#region declare variables
const students = Router();
//#endregion

//#region create endpoints
students.get('/',(req,res)=>{
    res.send('Student')
});

students.post('/',authentication,authorization,(req,res)=>{
    res.send('Student posted successfully')
});
//#endregion

export default students;
