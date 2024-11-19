const socket = io('/');

const messageInput = document.getElementById('message');

const roomId = window.location.href.split('/').pop();

socket.emit('joinRoom',roomId);

document.getElementById('trigger').addEventListener('click', () => {
    const message = messageInput.value;
    console.log('Youre sending: ', message);


    socket.emit('sendNewMessage',{
        message: message,
        room: roomId
    })
})

socket.on('messageRecieved', (data) => {
    console.log('Another user sent other message', data)
})