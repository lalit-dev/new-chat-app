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

socket.emit('addMessage',{from:'rohit yadav',text:"sample message"}, function(response){
    console.log("response from server: ",response)
})

socket.on('newMessage',function(message){
    console.log("new Message: ",message)
    var li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);
    jQuery("#messages").append(li);
})

socket.on('newLocationMessage', function(message){
    console.log("LOCATION: ",message);
    var li = jQuery('<li></li>')
    var a = jQuery('<a target="_blank">my current location</a>')
    li.text(`${message.from}: `);
    a.attr('href', message.url);
    li.append(a);
    jQuery('#messages').append(li);

})

// socket.on('newLocation', (location) => {
//     console.log("location: ",location);
// })

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


var sendLocation = jQuery('#send-location');
console.log("sendLocation",sendLocation);

sendLocation.on('click', (e) => {
    if(!navigator.geolocation){
        return alert('Geolocation not supported by your browser');
    }

    sendLocation.attr('disabled', 'disabled').text('Sending location...');

    navigator.geolocation.getCurrentPosition(function(position){
        sendLocation.removeAttr('disabled').text('Send location');
        console.log('Position = ',position);
        socket.emit('createLocation', {lat:position.coords.latitude, long:position.coords.longitude})

    }, function(){
        sendLocation.removeAttr('disabled').text('Send location');
        return alert('Unable to fetch geoLocation')
    })
})
