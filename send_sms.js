const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Do your shrimps stink?',
     from: '+14252767041',
     to: '+18478633914'
   })
  .then(message => console.log(message.sid));