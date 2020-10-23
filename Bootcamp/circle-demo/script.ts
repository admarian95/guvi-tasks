export class ADircle{
    radius:number ;
    color:String ;

    constructor(radius?:1.0,color?:"red"){
       this.radius = radius;
       this.color = color;
    }

    getRadius():number{
        return this.radius;
   }

   setRadius(radius:number):void{
       this.radius = radius;
   }
   getColor():String{
       return this.color;
   }
   setColor(color:String):void{
    this.color = color;
}
toString():String{
    return this.color;
}
getArea():number{
return Math.PI*Math.pow(this.radius,2);
}
getCircumference():number{
return 2*Math.PI*this.radius;
}
}