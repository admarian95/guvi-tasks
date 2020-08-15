// TV class inheritance

class TV {
constructor(args){
   this.brand = args[0];
    args[1]!==undefined?this.channel=args[1]:this.channel=1;
    this.price = args[2];
    this.onOff = args[3];
    args[4]!==undefined?this.volume=args[4]:this.volume=50;
}
    incVol=(step)=>{
     this.volume+step<100? this.volume +=step:this.volume=100;
    }
    decVol=(step)=>{
        this.volume-step>0? this.volume -=step:this.volume=0;
    }

    setChannel =(val)=>{
        val>this.channel?null:this.channel=val;
    }
    resetTv=()=>{
        this.channel =1;
        this.volume =50;
    }
    status=()=>{
        console.log(`${this.brand} at channel ${this.channel} at volume ${this.volume}`);
    }
}

class LED_TV extends TV{
    constructor(...args){
        super(args);
         // this will call the extended class constructor and set values.
        this.screenThickness=args[5];
        this.lifeSpan,this.refreshRate;
    }
    viewAngle=()=>{
    }
    displayDetails(){
        console.log(`${this.screenThickness}` )
    }
}

class PLASMA_TV{

}
let t = new LED_TV("Panasonic",10,23000,"ON",53);
t.status();
t.incVol(100);
t.status();