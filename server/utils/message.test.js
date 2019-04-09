const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('Generate Message', () => {
    it('should return message object', () => {
        var from  = 'lalit';
        var text = 'text to test'
        var messageObj = generateMessage(from, text); 
        console.log("messageObj = ",typeof messageObj.createdAt);
        expect(messageObj).toBeTruthy();
        expect(messageObj.from).toBe(from);
        expect(messageObj.text).toBe(text);
        expect(typeof messageObj.createdAt).toBe("number");
    })
})

describe('generate location message', () => {
    it('should return location message', () => {
        var from = 'lalit yadav';
        var latitude = '55.0000';
        var longitude = '33.0000';
        var locationObj = generateLocationMessage(from, latitude, longitude)
        expect(locationObj).toBeTruthy();
        expect(locationObj.from).toBe(from);
        expect(locationObj.url).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`);
        expect(typeof locationObj.createdAt).toBe('number');
    })
})