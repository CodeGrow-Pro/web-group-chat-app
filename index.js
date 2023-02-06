const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})
app.get('/chat',(req,res)=>{
  res.sendFile(__dirname + '/index.html');
})
const users = {}
io.on('connection',socket=>{

       socket.on('new-user-join',name=>{
        console.log('new user',name)
        socket.broadcast.emit('user-joined',name,users);
        users[socket.id] = name;
       });

       socket.on('send',message=>{
        socket.broadcast.emit('receive',{message:message,name:users[socket.id]})
       });
       socket.on('disconnect',message=>{
        socket.broadcast.emit('left',users[socket.id])
        delete users[socket.id]
       });
       console.log(users)

})
http.listen(8000, () => {
    console.log(`Socket.IO server running at http://localhost:${8000}/`);
  });