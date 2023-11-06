
function getName(name: string , age:number){
    console.log( ` Hi ${name} , you are ${age} years old`);
}

const Func = {name:'Ayman',age:55,getName(name: string , age:number){
    console.log( ` Hi ${this.name} , you are ${this.age} years old`);
    console.log( ` My Name is ${name} , Iam ${age} years old`);
}}
const ob2 = {name:'Anwar',age:22};

Func.getName.bind(ob2,ob2.name,ob2.age)();

console.log(this.Object)
