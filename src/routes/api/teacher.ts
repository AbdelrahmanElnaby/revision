import {Router} from 'express'
import teacher from '../../handlers/employee' 
//#region declare variables
const teachers = Router();
//#region 

//#region create endpoints
teachers.get('/',teacher.index);
teachers.get('/:id',teacher.show);
teachers.post('/',teacher.create)
//#endregion

export default teachers;