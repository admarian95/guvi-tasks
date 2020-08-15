// JS File with Circle class

class Circle {
    constructor(...args){
       this.radius = args[0];
       this.color = args[1];
       console.log(this.color);
    }
    _getRadius =()=>console.log(this.radius);
    _getColor =()=>console.log(this.color);
    _setRadius=(a)=>this.radius = a;
    _setColor=(a)=>this.color =a;
    _toString=(a)=>a.toString();
    _getArea=(a,b)=> a*b;

}
let c1 = new Circle(2);
c1._getRadius();