
interface Humanity{
                name:string;
                age:number;
                sex:string;
    readonly    married:boolean;
                status:undefined;
           set  setMarried(arg:boolean);
           
           
}

abstract class Human implements Humanity{
    abstract name:string;
    abstract age:number;
    abstract  married:boolean;
    abstract sex:string;
    abstract status:undefined;
    abstract  set  setMarried(arg:boolean)

    setSex(sex:string):void{
        this.sex = sex;
    }
}

class Man extends Human{
                name:string ;
                age:number;
                  married:boolean;
          readonly sex:string;
                status:undefined;
               

    public constructor(name:string,age:number,married:boolean,sex:string){
        super();
        this.name=name;
        this.age=age;
        this.married = married;
        this.sex = sex;
        
    }
    setSex(sex:string):void{
        super.setSex(sex);
    }
    
    public set setMarried(isMarried:boolean){
        console.log('before',this.married)
        this.married = isMarried;
        console.log('after',this.married)
    }
    public getName(){
        return this.name
    }
}

class Mman extends Man{
    readonly married:boolean;
    constructor(name:string,age:number,married:boolean,sex:string){
        super(name,age,married,sex);
        this.age = 10;
        this.married = false;
       }
     
    }

/*
const man:Human = new Man('Alice',18,true,'female');
man.setMarried= false;
console.log(man.married)
*/
 export const man:Mman = new Mman('Alice',18,true,'female');
console.log(man.married);
man.setMarried = !man.married;
console.log(man.married);



