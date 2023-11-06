import {Router} from 'express'
import teachers from './api/teacher'
import students from './api/student'
import logger from '../middleware/logger'

//#region declare variabes
const routes = Router();
//#endregion

//#region create endpoints
routes.use('/',logger);
routes.get('/',(req,res)=>{
    res.send('main api , Welcome');
})

routes.use('/teachers',teachers);
routes.use('/students',students);
//#endregion

export default routes;