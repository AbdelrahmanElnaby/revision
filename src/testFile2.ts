import file , {promises as fs} from 'fs'
import path from 'path'



file.readFile(path.join(__dirname,'doc/intro.txt'),async (error,data)=>{
if(error) console.log(error)  ;
else {
    console.log(data.toString());
    
    file.readFile(path.join(__dirname,'doc/intro2.txt'),(error,data)=>{
        if(error) console.log(error)  ;
        else {
            console.log('2 ' + data.toString());
        }
        });
       
    const data2  = await fs.readFile(path.join(__dirname,'doc/intro.txt'))
    console.log('3 '+data2.toString());
       setImmediate(()=>{console.log('Immediate')})
       process.nextTick(()=>{console.log('nextTick')})
       setTimeout(()=> console.log('timeout'),0
    )
}
})
