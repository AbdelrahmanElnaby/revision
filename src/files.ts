import {promises as fs} from 'fs'
import path from 'path'
import { buffer } from 'stream/consumers';

const createDirectory  = async(dirPath:string):Promise<boolean> =>{
    let result:boolean = true;

    try{
        await fs.mkdir(path.join(__dirname, dirPath),{recursive:true});
    }
    catch(e){
        console.log(`File Creation Error : ${path}`)
        result = false;
    }

    return result;
}

const fileOperation = async (dirPath:string,filePath:string,data:string):Promise<boolean>=>{
    let result:boolean = await createDirectory(dirPath);
    let fileOpen : fs.FileHandle | null = null;
    if (result){
        try{
             fileOpen = await fs.open(path.join('src',dirPath,filePath),'a+');
            try{

                await fileOpen.write('Name,Age,Nationality');
                
            }
            catch(e){       
                console.log(`Error File Operation`);
                result = false;
            }
        }
        catch(e){
            console.log(`Error File Open`);
            result = false;
        }
        finally{
            await fileOpen?.close();
        }
    }

    return result;
}

fileOperation('doc','info.csv','My Name is Ahmed')
.then((result)=>{console.log(result)})

