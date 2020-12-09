const jwt = require('jsonwebtoken');

generateRandomString=(count)=>{
    let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789';
    let res ='';
    for(let i=0;i<count;i++){
        res += char[Math.floor(Math.random()*char.length)];
    }
    return res;
}

isTokenValid= async (req,res,next)=>{
    let token = req.headers.authorization;
    console.log(token);
    jwt.verify(token, process.env.JWT_SECRET , (err, dec) => {
        if (dec)
            next();
        else
            res.status(404).json({'message':'invalid user .. cannot access (probably token expired)'});
    }
    )
}

module.exports = {generateRandomString , isTokenValid}