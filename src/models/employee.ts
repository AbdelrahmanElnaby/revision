import client from '../database'

export type TeacherInfo = {id?:number,name:string};

class Teacher{

    counter:number = 0;
    constructor(){
        this.counter ++;
    }
    async index():Promise<TeacherInfo[]>{

        try{
            const connection = await client.connect();
            const sql = 'SELECT * FROM teacher';
            const result =  await connection.query(sql);
            connection.release()
            return result.rows;
        }
        catch(e){
            throw e;
        }
    }

    async show(id:number):Promise<TeacherInfo>{
        try{
            const connection = await client.connect();
            const sql = 'SELECT * FROM teacher WHERE id = $1';
            const result = await connection.query(sql,[id]);
            connection.release();
            return result.rows[0];
        }
        catch(e){
            console.log((e as Error).message)
            throw e;
        }
    }

    async create(teacher:TeacherInfo):Promise<TeacherInfo>{
        try{
            const connection = await client.connect();
            const sql = 'insert into teacher (name) values ($1) RETURNING *';
            const result = await connection.query(sql,[teacher.name]);
            connection.release();
            return result.rows[0];
        }
        catch(e){
            throw e;
        }
    }

    
}


export default new Teacher();