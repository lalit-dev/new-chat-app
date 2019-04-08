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

socket.emit('addMessage',{from:'rohit yadav',message:"sample message"}, function(response){
    console.log("response from server: ",response)
})

socket.on('newMessage',function(message){
    console.log("new Message: ",message)
    var li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);
    jQuery("#messages").append(li);
})

jQuery('#message-form').on('submit', (e) => {
    e.preventDefault();
    console.log("EEEEEEEEEEEEEE",e);

    socket.emit('addMessage', {
        from:'User',
        text:jQuery('[name=message]').val()
    }, function(data){
        console.log("data = ",data);
    })
})
