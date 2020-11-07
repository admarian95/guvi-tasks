interface ObjReq{
    name:string
}

export class Request{
    
    
    createPetReq(name:string ):Object{
        let obj:ObjReq={
        name: name, 
        }
       
        return obj;
    }
}