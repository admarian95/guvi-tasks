const app = require('express')();
const port = 3000;

app.listen(port,()=>console.log('active '));

let flag=false;
let room = [];
let bookRoom =[];
let customers=[];
app.post('/createRoom/:id/:roomName/:seatsAvailable/:amenities/:price_per_hr',(req,res)=>{
let  id = req.params.id;
let roomName = req.params.roomName;
let seatsAvailable = +(req.params.seatsAvailable);
let amenities = JSON.parse(req.params.amenities);
let pph = req.params.price_per_hr;
let roomObj = {id,roomName,seatsAvailable,amenities,price_per_hr:pph,bookedStatus:false};
room.push(roomObj);
res.status(200).json({
    'message':'room created',
    roomObj,
})
})

app.get('/showRooms',(req,res)=>{
    res.send(room);
})

app.post('/bookRoom/:name/:date/:start/:end/:roomId',(req,res)=>{
    flag=false;
    for(let i=0;i<room.length;i++){
        if(req.params.roomId === room[i].id && room[i].seatsAvailable >0){
            flag=true;
            let roombookObj = {
                custName: req.params.name,
                roomName: room[i].roomName,
                date: req.params.date,
                start: req.params.start,
                end: req.params.end,
                roomId: req.params.roomId,
                bookedStatus:true
            };
            let custObj = {
                custName: req.params.name,
                roomName: room[i].roomName,
                date: req.params.date,
                start: req.params.start,
                end: req.params.end,  
            }
            bookRoom.push(roombookObj);
            customers.push(custObj);
            res.status(200).json({
                'message':'room booked!',
                roombookObj,
            })
            room[i].seatsAvailable--;
            if(req.params.roomId === room[i].id && room[i].seatsAvailable ===0){
                room[i].bookedStatus = true;
            }
        }
    }if(flag === false){
        res.send("Cannot book room all places full! Please try later");
    }
})

app.get('/showBookedRooms',(req,res)=>{
    res.send(bookRoom);
})

app.get('/showCustomers',(req,res)=>{
    res.send(customers);
})