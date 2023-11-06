import { Console } from 'console';
import express from 'express'
import {graphqlHTTP} from 'express-graphql'
import {buildSchema} from 'graphql'

const app = express();

const schema = buildSchema(`

    type Query {
        hello:String
        getNames(count:Int!,name:String):[String]!
        colorOperations:Color!
    }

    type Mutation{
        createNewColor:Color!
    }

    type Color{
        setColor(color:String):Boolean
        getColor:String!
        setColors(input:InputColors):Boolean
        updateColors(id:Int!,input:InputColors):Boolean!
    }

    input InputColors{
        color:String
    }
`);

const root = {
    hello: ()=>{
        return 'Hello World';
    },
    getNames:({count,name}:{count:number,name:string|null})=>{
        return  name? ['name','Valid']:['No Names','Not Valid']
    },
    colorOperations:() =>{
        return Color.getInstance();
    },
    createNewColor:() =>{
        return Color.getInstance();
    }
}

app.use('/graphql',graphqlHTTP({
    schema,
    rootValue:root,
    graphiql:false
})
)

app.listen(3000,'127.0.0.1',()=>{
    console.log('Server is Running');
});

class Color{
    
    private color:string ;
    private colors:string[];
    private static colorInstance:Color|null;
    constructor(){
        this.color='White'
        this.colors = [];
    }

    setColor({color}:{color:string}):boolean{
        this.color = color ?? this.color;
        return this.color == color;
    }

    getColor():string{
        return `Updated Color is:  ${this.color}   `;
    }

    setColors({input}:{input:{color:string}}){
        this.colors.push(input.color)
    }

    updateColors({id,input}:{id:number,input:{color:string}}):boolean{
        return this.colors.length > id && (!!(this.colors[id] = input.color) || true)
    }

    static getInstance():Color{
        if (! this.colorInstance) this.colorInstance = new Color();
        return this.colorInstance;
    }

}

