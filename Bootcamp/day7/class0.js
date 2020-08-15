// write a caculator

class Calculator{
    constructor(){
        this._add = this._add.bind(this);
        this._sub = this._sub.bind(this);
        this._mul = this._mul.bind(this);
    }

    _add(a,b){
        console.log(a+b);
    }
    _sub(a,b){
        console.log(a-b);
    }
    _mul(a,b){
        console.log(a*b);
    }
}
let c1 = new Calculator();
c1._add(1,2);
c1._sub(1,2);
c1._mul(1,2);
