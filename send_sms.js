let config;

try {
  config = require('./environment-variables.js');
}
catch(nope) {
  console.log('No environment variables file (We must be in production)');
}

const accountSid = process.env.TWILIO_SID || config.sid;
const authToken = process.env.TWILIO_TOKEN || config.token;

console.log(config);

const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Do your shrimps stink?',
     from: '+14252767041',
     to: '+18479247616'
   })
  .then(message => console.log(message.sid));

