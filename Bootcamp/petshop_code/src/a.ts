interface ObjAdd{
    name:string,
    color:string,
    age:number
}

export class Availability{
    
    
    createPet(name:string , color:string , age:number):Object{
        let obj:ObjAdd={
        name: name,
        color:color,
        age:age    
        }
       
        return obj;
    }
}