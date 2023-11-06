"use strict";


const obProto = {getName(){return 5}}

const newOb = Object.create(obProto)

function Identity( name,age){
    this.name = name;
    this.age=age;


}

Identity.prototype.sex = 'Female';
Object.assign(Identity.prototype,obProto);


const x = new Identity('Ismail',50);
console.log(x)


