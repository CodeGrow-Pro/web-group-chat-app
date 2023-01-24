// const names = prompt('Enter your name to Join')
// const socket = io('http://127.0.0.1:8000')
// const form = document.querySelector('form')
// const messageInp = document.getElementById('input')
// const messageBody = document.querySelector('.message-body')
// const userBody = document.querySelector('.chat-joiners')
  var socket = io.connect('http://127.0.0.1:8000');
  socket.on('connect', function(data) {
      socket.emit('join', 'Hello World from client');
  });
// const append = (message,position)=>{
//     const div = document.createElement('div')
//     div.innerHTML = ` <div class="${position}">
//     <h6>${message.name}</h6>
//     <div class="inner">
//         <p>${message.message}</p>
//     </div>`
//     div.classList.add('row')
//     div.append('message-body')
// }
// console.log('before socket' , names)
// socket.emit('new-user-join',names)
// console.log('after socket')
// socket.on('user-joined',name=>{
//    append({message:"Join the chat",name:name},'reciver-left')
// })