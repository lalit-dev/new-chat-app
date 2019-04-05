const expect = require('expect');

var {generateMessage} = require('./message');

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