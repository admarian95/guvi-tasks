const fs = require('fs');
const app = require('express')();
const port = 3000;

app.listen(port,()=>console.log('active '));
app.get('/',(req,res)=>{
    res.send('hello');
});

app.get('/createLog',(req,res)=>{
fs.writeFile('/Users/apoorv.dham/Desktop/guvi/guvi-tasks/Bootcamp/express-1/logs/'+`${new Date()}`+'.txt' , `${new Date()}`,(e,s)=>{
    if(e) throw e
    res.send('appended');
})
});
app.get('/showLogs',(req,res)=>{
    let list= '<ul>';
    let self = this;
    self.item='';
    fs.readdir('/Users/apoorv.dham/Desktop/guvi/guvi-tasks/Bootcamp/express-1/logs/',(e,s)=>{
        if(e) throw e
        s.forEach(a=>{
            self.item += `<li>${a}</li>`;
        })
        list += self.item + '</ul>';
        res.send(list);
    })
});