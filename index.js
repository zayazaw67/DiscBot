const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log("Ready!")
});

client.on('message', (message, user) => {
    console.log(message.content)
    console.log(user)

    if (message.content !== '' && user == "186335926333472769") {
        console.log(user)
        console.log('yes')
        message.react("💩");
    };
});

client.login(token);
