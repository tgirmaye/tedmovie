const express=require('express');
const app=express();
const socket=require('socket.io');
const http = require('http')
const fs = require('fs')

const port=process.env.PORT || 3000;
app.use(express.json());
app.use(express.static('public'));

const server = app.listen(port,()=>{
 console.log(`listening on port ${port}`);
});



let io = socket(server);


io.on('connection',(socket)=>{
  console.log(socket.id);
  
    socket.on("offer",(offer)=>{
      getOffer(offer)
    })
    
    socket.on("answer",(answer)=>{
      getAnswer(answer);
    })
});
  
// app.get('/recive',(req,res)=>{
//   res.sendFile(__dirname+"/public/b.html")
// })
  


function getOffer(offer){
  io.emit("off",offer);
}

function getAnswer(answer){
  io.emit('ans',answer);
}