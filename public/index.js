var socket = io();
socket.on("connect", () => {
    console.log("Server is connected");
})

socket.on('disconnect', () => {
    console.log("Server is disconnected");
})

socket.emit('createEmail', {to:'abc@def.com', text:"1qsdsdsfdsdsfds"});

socket.on('newEmail', function(data){
    console.log("newEmail ",data);
})

socket.emit('addMessage',{to:'rohit yadav',message:"sample message"})

socket.on('newMessage',function(message){
    console.log("new Message: ",message)
})