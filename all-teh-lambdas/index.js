const AWS = require('aws-sdk');

const dynamo = new AWS.DynamoDB.DocumentClient();

const twilio = require('twilio');

exports.handler = async (event, context) => {
    let body = JSON.parse(event.body);
    const accountSid = process.env.TWILIO_SID;
    const authToken = process.env.TWILIO_TOKEN;

console.log('BODY!', body, accountSid, authToken);
    const client = twilio(accountSid, authToken);
    let responseObject = {
        statusCode: undefined,
        body: {}
    }

    client.messages
    .create({
        body: 'shramp!!!',
        from: '+14252767041',
        to: '+18479247616'
    })
    .then( (message) => {
        responseObject.body = message;
        responseObject.statusCode = 200;
        console.log(message.sid);
    })
    .catch( (error) => {
        responseObject.body = error;
        responseObject.statusCode = 500;
        console.log(error);
    });
   
    return responseObject;
};
